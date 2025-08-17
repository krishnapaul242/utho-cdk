#!/usr/bin/env node
// Generates markdown documentation for each API tag from the OpenAPI spec.
// It intentionally produces ORIGINAL explanatory text (no copying from external docs content).
import { readFileSync, mkdirSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'yaml';

const SPEC_PATH = join(process.cwd(), 'spec', 'utho-api-latest.yaml');
const OUT_DIR = join(process.cwd(), 'docs');
const SERVICES_DIR = join(OUT_DIR, 'services');

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-');
}

function ensureDir(p) {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
}

// Helper: resolve a $ref (local only)
function resolveRef(ref, spec) {
  if (!ref.startsWith('#/')) return null;
  const parts = ref.replace(/^#\//, '').split('/');
  let cur = spec;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur || null;
}

function resolveSchema(schema, spec, seen = new Set()) {
  if (!schema) return {};
  if (schema.$ref) {
    if (seen.has(schema.$ref)) return {}; // prevent cycles
    seen.add(schema.$ref);
    return resolveSchema(resolveRef(schema.$ref, spec), spec, seen);
  }
  return schema;
}

function schemaType(schema, spec) {
  schema = resolveSchema(schema, spec);
  if (!schema) return 'any';
  if (schema.type === 'array') return `array<${schemaType(schema.items, spec)}>`;
  if (schema.oneOf) return schema.oneOf.map(s=>schemaType(s,spec)).join(' | ');
  if (schema.anyOf) return schema.anyOf.map(s=>schemaType(s,spec)).join(' | ');
  if (schema.allOf) return schema.allOf.map(s=>schemaType(s,spec)).join(' & ');
  if (schema.enum) return schema.enum.map(v=>JSON.stringify(v)).join(' | ');
  return schema.type || 'object';
}

function generatePropertyTable(schema, spec) {
  schema = resolveSchema(schema, spec);
  if (!schema || schema.type !== 'object' && !schema.properties) return [];
  const required = new Set(schema.required || []);
  const lines = ['| Property | Type | Required | Description |', '|----------|------|----------|-------------|'];
  for (const [name, propSchema] of Object.entries(schema.properties || {})) {
    const rs = resolveSchema(propSchema, spec);
    lines.push(`| ${name} | ${schemaType(rs, spec)} | ${required.has(name)?'yes':'no'} | ${(rs.description||'').replace(/\n+/g,' ')} |`);
  }
  return lines;
}

function sampleFromSchema(schema, spec, depth=0) {
  if (depth > 3) return null; // avoid deep recursion
  schema = resolveSchema(schema, spec);
  if (!schema) return null;
  if (schema.example !== undefined) return schema.example;
  if (schema.default !== undefined) return schema.default;
  if (schema.enum) return schema.enum[0];
  switch(schema.type) {
    case 'string': return schema.format === 'date-time' ? new Date().toISOString() : (schema.format || 'string');
    case 'number':
    case 'integer': return 0;
    case 'boolean': return false;
    case 'array': return [sampleFromSchema(schema.items, spec, depth+1)];
    case 'object': {
      const out = {};
      for (const [k,v] of Object.entries(schema.properties || {})) {
        out[k] = sampleFromSchema(v, spec, depth+1);
      }
      return out;
    }
    default: return null;
  }
}

// conceptual groups for related links & guides
const GROUPS = {
  'Compute & Orchestration': ['Cloud-Servers','Autoscaling','Kubernetes'],
  'Storage & Data': ['Object Storage > Bucket','Object Storage > Access Keys','Elastic Block Storage','Snapshots','Backups','DataBase'],
  'Networking': ['VPC-old','vpc','vpc > vpc','vpc > subnets','vpc > routes','vpc > route-tables','vpc > internet-gateway','vpc > nat-gateway','vpc > elastic-ip','vpc > Peering Connection','IpSec','VPN','TargetGroup','Load-Balancer'],
  'Security & Access': ['Firewalls','SSH Key','SSL','Waf','API Key','SubUser'],
  'Messaging & Integration': ['SQS','Transfer/Recieve Resources'],
  'Monitoring & Ops': ['Monitoring & Contacts','Actions','Activity Logs'],
};

function findGroupForTag(tag) {
  for (const [g, tags] of Object.entries(GROUPS)) if (tags.includes(tag)) return g;
  return null;
}

function main() {
  const raw = readFileSync(SPEC_PATH, 'utf8');
  const spec = yaml.parse(raw);

  ensureDir(OUT_DIR);
  ensureDir(SERVICES_DIR);

  // Clean previously generated service docs by removing services dir
  if (existsSync(SERVICES_DIR)) {
    rmSync(SERVICES_DIR, { recursive: true, force: true });
  }
  ensureDir(SERVICES_DIR);

  // Build index of operations by tag
  const byTag = {};
  for (const [path, methods] of Object.entries(spec.paths || {})) {
    for (const [method, op] of Object.entries(methods)) {
      const httpMethod = method.toUpperCase();
      if (!['GET','POST','PUT','DELETE','PATCH','HEAD','OPTIONS'].includes(httpMethod)) continue;
      const tags = op.tags && op.tags.length ? op.tags : ['_untagged'];
      for (const tag of tags) {
        byTag[tag] ||= [];
    byTag[tag].push({ path, method: httpMethod, summary: op.summary || '', description: op.description || '', parameters: op.parameters || [], requestBody: op.requestBody, responses: op.responses || {} });
      }
    }
  }

  const tagMeta = Object.keys(byTag).sort().map(tag => ({ tag, slug: slugify(tag) }));

  // Collect search docs
  const searchDocs = [];

  // Write per-tag docs
  for (const { tag, slug } of tagMeta) {
    const ops = byTag[tag];
    const lines = [];
    lines.push(`# ${tag} API`);
    lines.push('');
    lines.push('> This page documents the client wrapper functions and raw HTTP interface for the **'+tag+'** segment of the Utho Cloud API.');
    lines.push('');
    lines.push('## Endpoints');
    lines.push('');
    for (const op of ops) {
  // anchor id kept for potential intra-page linking in future
      lines.push(`### ${op.method} \\\`${op.path}\\\``);
      if (op.summary) lines.push('\n**Summary:** ' + op.summary + '\n');
      if (op.description) lines.push(op.description + '\n');
      // Parameters table
      const params = op.parameters || [];
      if (params.length) {
        lines.push('**Parameters**');
        lines.push('');
        lines.push('| Name | In | Type | Required | Description |');
        lines.push('|------|----|------|----------|-------------|');
        for (const p of params) {
          lines.push(`| ${p.name} | ${p.in} | ${(p.schema && p.schema.type) || ''} | ${p.required ? 'yes':'no'} | ${(p.description||'').replace(/\n+/g,' ')} |`);
        }
        lines.push('');
      }
      if (op.requestBody) {
        lines.push('**Request Body**');
        lines.push('');
        const content = op.requestBody.content || {};
        for (const [ctype, meta] of Object.entries(content)) {
          lines.push('- '+ctype);
          if (meta.example) {
            lines.push('\n```json');
            lines.push(JSON.stringify(meta.example, null, 2));
            lines.push('```');
          }
        }
        lines.push('');
      }
      // Responses section
      const respEntries = Object.entries(op.responses || {});
      if (respEntries.length) {
        lines.push('**Responses**');
        lines.push('');
        lines.push('| Status | Description |');
        lines.push('|--------|-------------|');
        for (const [code, r] of respEntries) {
          lines.push(`| ${code} | ${(r.description||'').replace(/\n+/g,' ')} |`);
        }
        lines.push('');
        // Detailed success response schema (first 2xx with JSON)
        const success = respEntries.find(([code]) => code.startsWith('2'));
        if (success) {
          const [code, r] = success;
          const content = (r.content||{})['application/json'] || Object.values(r.content||{})[0];
          if (content && content.schema) {
            const schema = content.schema;
            lines.push(`**Response Schema (${code})**`);
            lines.push('');
            const table = generatePropertyTable(schema, spec);
            if (table.length) lines.push(...table, '');
            const sample = sampleFromSchema(schema, spec);
            if (sample) {
              lines.push('**Sample Response**');
              lines.push('\n```json');
              lines.push(JSON.stringify(sample, null, 2));
              lines.push('```\n');
            }
          }
        }
        // Error examples (first 4xx/5xx)
        const error = respEntries.find(([code]) => code.startsWith('4') || code.startsWith('5'));
        if (error) {
          const [code, r] = error;
          const content = (r.content||{})['application/json'] || Object.values(r.content||{})[0];
            if (content && content.schema) {
              const sampleErr = sampleFromSchema(content.schema, spec);
              if (sampleErr) {
                lines.push(`**Sample Error (${code})**`);
                lines.push('\n```json');
                lines.push(JSON.stringify(sampleErr, null, 2));
                lines.push('```\n');
              }
            }
        }
      }
      lines.push('**Example (CLI)**');
      lines.push('');
      // Attempt to infer a friendly CLI command
  // const cliPath = op.path.replace(/^\/v2/, ''); // reserved for future friendly aliases
      lines.push('```bash');
      lines.push(`# Using the generic call command`);
      lines.push(`utho call ${op.method} ${op.path} -k $CLOUD_API_KEY`);
      lines.push('```');
      lines.push('');
      lines.push('**Example (TypeScript)**');
      lines.push('');
      lines.push('```ts');
      lines.push("import { ApiClient } from 'utho-cdk';");
  lines.push('const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });');
      lines.push(`const res = await client.request({ method: '${op.method}', path: '${op.path}' });`);
      lines.push('console.log(res);');
      lines.push('```');
      lines.push('');
    }
    // Related links
    const group = findGroupForTag(tag);
    if (group) {
      const related = GROUPS[group].filter(t => t !== tag && tagMeta.find(tm=>tm.tag===t));
      if (related.length) {
        lines.push('## Related');
        lines.push('');
        for (const rel of related) {
          const slugRel = slugify(rel);
            lines.push(`- [${rel}](./${slugRel}.md)`);
        }
        lines.push('');
      }
    }
    const filePath = join(SERVICES_DIR, slug + '.md');
    writeFileSync(filePath, lines.join('\n'));
    // search doc (strip md formatting very simply)
    const plain = lines.join('\n').replace(/```[\s\S]*?```/g,' ').replace(/[#>*_`]/g,'');
    searchDocs.push({ id: slug, title: `${tag} API`, url: `services/${slug}.md`, content: plain.slice(0, 2000) });
  }

  // Write main index
  const indexLines = [];
  const specVersion = spec.info && spec.info.version ? spec.info.version : 'unknown';
  indexLines.push('# Utho Cloud TypeScript SDK Documentation');
  indexLines.push('');
  indexLines.push(`![Spec Version](https://img.shields.io/badge/OpenAPI-v${specVersion}-blue)`);
  indexLines.push('');
  indexLines.push('This documentation is generated from the bundled OpenAPI spec plus handcrafted guidance for using the TypeScript client and CLI.');
  indexLines.push('');
  indexLines.push(`> Spec Version: **${specVersion}**  | Generated: ${new Date().toISOString()}`);
  indexLines.push('');
  indexLines.push('## Service Index');
  indexLines.push('');
  for (const { tag, slug } of tagMeta) {
    indexLines.push(`- [${tag}](services/${slug}.md)`);
  }
  indexLines.push('\n---');
  indexLines.push('\nGenerated on ' + new Date().toISOString());

  writeFileSync(join(OUT_DIR, 'README.md'), indexLines.join('\n'));

  // Minimal mkdocs style index for GitHub Pages (if using static HTML generator later)
  writeFileSync(join(OUT_DIR, 'index.md'), indexLines.join('\n'));

  // Guides (conceptual landing pages)
  const guidesDir = join(OUT_DIR, 'guides');
  ensureDir(guidesDir);
  for (const [groupName, tags] of Object.entries(GROUPS)) {
    const gLines = [];
    gLines.push(`# ${groupName}`,'');
    gLines.push(`This guide groups related services to help you navigate the API surface for **${groupName}** tasks.`,'');
    gLines.push('## Services');
    for (const t of tags) {
      const tm = tagMeta.find(tm=>tm.tag===t);
      if (tm) gLines.push(`- [${t}](../services/${tm.slug}.md)`);
    }
    gLines.push('');
    writeFileSync(join(guidesDir, slugify(groupName)+'.md'), gLines.join('\n'));
  }
  // Guides index
  const guidesIndex = ['# Guides','', 'High-level conceptual groupings of services:',''];
  for (const g of Object.keys(GROUPS)) guidesIndex.push(`- [${g}](./${slugify(g)}.md)`);
  writeFileSync(join(guidesDir, 'README.md'), guidesIndex.join('\n'));

  // Search index JSON for lightweight custom search (optional when using MkDocs search)
  writeFileSync(join(OUT_DIR, 'search-index.json'), JSON.stringify(searchDocs, null, 2));
  // Simple HTML search page (works standalone on GitHub Pages)
  const searchHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Search</title><script src="https://cdn.jsdelivr.net/npm/lunr/lunr.min.js"></script><style>body{font-family:system-ui,Arial,sans-serif;margin:2rem;max-width:900px}input{width:100%;padding:.6rem;font-size:1rem;}li{margin-bottom:.5rem}</style></head><body><h1>Search</h1><input id="q" placeholder="Type to search..." autofocus/><ul id="results"></ul><script>async function init(){const res=await fetch('search-index.json');const docs=await res.json();const idx=lunr(function(){this.ref('id');this.field('title');this.field('content');docs.forEach(d=>this.add(d));});const input=document.getElementById('q');const out=document.getElementById('results');function render(){out.innerHTML='';const q=input.value.trim();if(!q)return;const r=idx.search(q);r.slice(0,30).forEach(hit=>{const doc=docs.find(d=>d.id===hit.ref);const li=document.createElement('li');li.innerHTML='<a href="'+doc.url+'">'+doc.title+'</a><br><small>'+doc.content.slice(0,160)+'...</small>';out.appendChild(li);});}input.addEventListener('input',render);}init();</script></body></html>`;
  writeFileSync(join(OUT_DIR, 'search.html'), searchHtml);

  console.log(`Generated ${tagMeta.length} service pages into docs/`);
}

main();
