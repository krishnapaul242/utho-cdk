#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import { ApiClient } from "./runtime/client.js";
import { get_api as listApiKeys, post_api_generate as addApiKey, delete_api_id_delete as deleteApiKey, get_account_info as accountInfo } from "./endpoints/index.js";
// Statically import endpoint modules for interactive service mode (ensures bundler includes them)
import * as mod_account from './endpoints/account.js';
import * as mod_actions from './endpoints/actions.js';
import * as mod_activity from './endpoints/activity.js';
import * as mod_alert from './endpoints/alert.js';
import * as mod_api from './endpoints/api.js';
import * as mod_autoscaling from './endpoints/autoscaling.js';
import * as mod_backups from './endpoints/backups.js';
import * as mod_certificates from './endpoints/certificates.js';
import * as mod_cloud from './endpoints/cloud.js';
import * as mod_databases from './endpoints/databases.js';
import * as mod_dns from './endpoints/dns.js';
import * as mod_dynamic_id from './endpoints/dynamic-id.js';
import * as mod_ebs from './endpoints/ebs.js';
import * as mod_elasticip from './endpoints/elasticip.js';
import * as mod_firewall from './endpoints/firewall.js';
import * as mod_ipsec from './endpoints/ipsec.js';
import * as mod_iso from './endpoints/iso.js';
import * as mod_key from './endpoints/key.js';
import * as mod_kubernetes from './endpoints/kubernetes.js';
import * as mod_loadbalancer from './endpoints/loadbalancer.js';
import * as mod_objectstorage from './endpoints/objectstorage.js';
import * as mod_pricing from './endpoints/pricing.js';
import * as mod_registry from './endpoints/registry.js';
import * as mod_snapshot from './endpoints/snapshot.js';
import * as mod_sqs from './endpoints/sqs.js';
import * as mod_stacks from './endpoints/stacks.js';
import * as mod_targetgroup from './endpoints/targetgroup.js';
import * as mod_transfer from './endpoints/transfer.js';
import * as mod_user from './endpoints/user.js';
import * as mod_v2 from './endpoints/v2.js';
import * as mod_vpc from './endpoints/vpc.js';
import * as mod_vpc_internetgateway from './endpoints/vpc-internetgateway.js';
import * as mod_vpc_route from './endpoints/vpc-route.js';
import * as mod_vpc_route_table from './endpoints/vpc-route-table.js';
import * as mod_vpn from './endpoints/vpn.js';
import * as mod_waf from './endpoints/waf.js';

const program = new Command();
program
  .name("utho")
  .description("Utho Cloud CLI")
  .version("0.1.0")
  .option('-d, --debug', 'Enable verbose debug logging');

async function ask<T = any>(questions: any): Promise<T> {
  const anyInq: any = inquirer as any;
  let promptFn: any;
  if (anyInq && typeof anyInq.prompt === 'function') promptFn = anyInq.prompt;
  else if (anyInq?.default && typeof anyInq.default.prompt === 'function') promptFn = anyInq.default.prompt;
  else if (typeof anyInq === 'function') promptFn = anyInq;
  else if (typeof anyInq?.default === 'function') promptFn = anyInq.default;
  if (!promptFn) throw new Error('inquirer prompt function not found');
  return promptFn(questions);
}

program
  .command("call")
  .description("Call an arbitrary API path (advanced)")
  .argument("<method>", "HTTP method")
  .argument("<path>", "API path, e.g. /v1/instances")
  .option("-q, --query <json>", "JSON for query params")
  .option("-b, --body <json>", "JSON request body")
  .option("-k, --api-key <key>", "API key (or set CLOUD_API_KEY env var)")
  .option("-u, --url <url>", "Base URL", process.env.CLOUD_BASE_URL || "https://api.utho.com/v2")
  .action(async (method: string, path: string, opts: { apiKey?: string; url?: string; query?: string; body?: string }) => {
    let apiKey = opts.apiKey || process.env.CLOUD_API_KEY;
    if (!apiKey) {
      const ans = await ask<{ apiKey: string }>([{ name: "apiKey", message: "API Key:", type: "password" }]);
      apiKey = ans.apiKey;
    }
    const client = new ApiClient({ baseUrl: opts.url || process.env.CLOUD_BASE_URL || 'https://api.utho.com/v2', apiKey });
    try {
      const result = await client.request({
        method,
        path,
        query: opts.query ? JSON.parse(opts.query) : undefined,
        body: opts.body ? JSON.parse(opts.body) : undefined
      });
      console.log(JSON.stringify(result, null, 2));
    } catch (e) {
      const err = e instanceof Error ? e : new Error('Unknown error');
      console.error("Error:", err.message);
      process.exitCode = 1;
    }
  });

interface BaseOpts { apiKey?: string; url?: string; debug?: boolean }
function buildClient(opts: BaseOpts) {
  const globalOpts = program.opts<{ debug?: boolean }>();
  if (globalOpts.debug) process.env.CLOUD_DEBUG = '1';
  const apiKeyRaw = opts.apiKey ?? process.env.CLOUD_API_KEY;
  const apiKey = apiKeyRaw?.trim();
  if (!apiKey) throw new Error("API key required (flag or CLOUD_API_KEY env var)");
  const baseUrl = opts.url || process.env.CLOUD_BASE_URL || 'https://api.utho.com/v2';
  if (process.env.CLOUD_DEBUG === '1') {
    const start = apiKey.slice(0, 6);
    const end = apiKey.slice(-6);
  console.error('[utho][config]', { baseUrl, apiKeyMasked: `${start}...${end}`, length: apiKey.length });
  }
  return new ApiClient({ baseUrl, apiKey });
}

program.command('apikey:list')
  .description('List API Keys')
  .option('-k, --api-key <key>', 'API key')
  .option('-u, --url <url>', 'Base URL', 'https://api.utho.com/v2')
  .action(async (opts: BaseOpts) => {
    try { const client = buildClient(opts); const r = await listApiKeys(client); console.log(JSON.stringify(r,null,2)); } catch(e){ console.error(e instanceof Error ? e.message : e); process.exitCode=1; }
  });

program.command('apikey:add')
  .description('Add API Key')
  .option('-k, --api-key <key>', 'API key')
  .option('-u, --url <url>', 'Base URL', 'https://api.utho.com/v2')
  .action(async (opts: BaseOpts) => {
    try { const client = buildClient(opts); const r = await addApiKey(client); console.log(JSON.stringify(r,null,2)); } catch(e){ console.error(e instanceof Error ? e.message : e); process.exitCode=1; }
  });

program.command('apikey:delete')
  .description('Delete API Key')
  .argument('<id>', 'API key id')
  .option('-k, --api-key <key>', 'API key')
  .option('-u, --url <url>', 'Base URL', 'https://api.utho.com/v2')
  .action(async (id: string, opts: BaseOpts) => {
    try { const client = buildClient(opts); const r = await deleteApiKey(client, id); console.log(JSON.stringify(r,null,2)); } catch(e){ console.error(e instanceof Error ? e.message : e); process.exitCode=1; }
  });

program.command('account:info')
  .description('Account information')
  .option('-k, --api-key <key>', 'API key')
  .option('-u, --url <url>', 'Base URL', 'https://api.utho.com/v2')
  .action(async (opts: BaseOpts) => {
    try { const client = buildClient(opts); const r = await accountInfo(client); console.log(JSON.stringify(r,null,2)); } catch(e){ console.error(e instanceof Error ? e.message : e); process.exitCode=1; }
  });

interface ServiceInvokeOpts extends BaseOpts { params?: string; query?: string; body?: string; list?: boolean }

const serviceModules: Record<string, Record<string, any>> = {
  'account': mod_account,
  'actions': mod_actions,
  'activity': mod_activity,
  'alert': mod_alert,
  'api': mod_api,
  'autoscaling': mod_autoscaling,
  'backups': mod_backups,
  'certificates': mod_certificates,
  'cloud': mod_cloud,
  'databases': mod_databases,
  'dns': mod_dns,
  'dynamic-id': mod_dynamic_id,
  'ebs': mod_ebs,
  'elasticip': mod_elasticip,
  'firewall': mod_firewall,
  'ipsec': mod_ipsec,
  'iso': mod_iso,
  'key': mod_key,
  'kubernetes': mod_kubernetes,
  'loadbalancer': mod_loadbalancer,
  'objectstorage': mod_objectstorage,
  'pricing': mod_pricing,
  'registry': mod_registry,
  'snapshot': mod_snapshot,
  'sqs': mod_sqs,
  'stacks': mod_stacks,
  'targetgroup': mod_targetgroup,
  'transfer': mod_transfer,
  'user': mod_user,
  'v2': mod_v2,
  'vpc': mod_vpc,
  'vpc-internetgateway': mod_vpc_internetgateway,
  'vpc-route': mod_vpc_route,
  'vpc-route-table': mod_vpc_route_table,
  'vpn': mod_vpn,
  'waf': mod_waf,
};
async function listServices(): Promise<string[]> { return Object.keys(serviceModules); }
async function loadServiceModule(name: string): Promise<Record<string, any>> { const mod = serviceModules[name]; if(!mod) throw new Error(`Unknown service module: ${name}`); return mod; }
type OperationFn = (client: ApiClient, ...args: any[]) => Promise<unknown> | unknown;
function extractOperations(mod: Record<string, any>) {
  const ops: { name: string; fn: OperationFn; params: string[] }[] = [];
  for (const [k, v] of Object.entries(mod)) {
    if (typeof v === 'function') {
      const fnStr = v.toString();
      if (!fnStr.includes('client.request')) continue;
      const m = fnStr.match(/^[^(]*\(([^)]*)\)/);
      if (!m) continue;
      const rawParams = m[1].split(',').map(s => s.trim()).filter(Boolean);
      if (rawParams[0] !== 'client') continue;
      const core = rawParams.filter(p => p !== 'client').filter(p => !p.startsWith('options'));
      ops.push({ name: k, fn: v as OperationFn, params: core });
    }
  }
  return ops.sort((a,b)=>a.name.localeCompare(b.name));
}
function parseKeyValueList(input?: string): Record<string,string> {
  if (!input) return {};
  return Object.fromEntries(input.split(',').map(pair => { const [k,...rest] = pair.split('='); return [k.trim(), rest.join('=').trim()]; }));
}
program.command('service')
  .description('Invoke an operation by service + operation (interactive if omitted)')
  .argument('[service]', 'Service name (e.g. vpc)')
  .argument('[operation]', 'Operation function name (e.g. get_vpc)')
  .option('-p, --params <k=v,...>', 'Path parameter values (comma list)')
  .option('-q, --query <json>', 'JSON for query params')
  .option('-b, --body <json>', 'JSON request body')
  .option('-l, --list', 'List available services / operations')
  .option('-k, --api-key <key>', 'API key')
  .option('-u, --url <url>', 'Base URL', 'https://api.utho.com/v2')
  .action(async (serviceArg: string | undefined, opArg: string | undefined, opts: ServiceInvokeOpts) => {
    try {
      const client = buildClient(opts);
      const services = await listServices();
      if (opts.list) {
        if (serviceArg) {
          const mod = await loadServiceModule(serviceArg);
          const ops = extractOperations(mod).map(o=>({ name: o.name, params: o.params }));
          console.log(JSON.stringify(ops,null,2));
        } else {
          console.log(services.join('\n'));
        }
        return;
      }
      let service = serviceArg;
      if (!service) {
        const ans = await ask<{ svc: string }>([{ type: 'list', name: 'svc', message: 'Select service', choices: services }]);
        service = ans.svc;
      }
      if (!services.includes(service!)) throw new Error(`Unknown service: ${service}`);
      const mod = await loadServiceModule(service!);
      const operations = extractOperations(mod);
      if (operations.length === 0) throw new Error('No operations found');
      let opName = opArg;
      if (!opName) {
        const ans = await ask<{ op: string }>([{ type: 'list', name: 'op', message: `Select operation (${service})`, choices: operations.map(o=>o.name) }]);
        opName = ans.op;
      }
      const op = operations.find(o=>o.name === opName);
      if (!op) throw new Error(`Operation not found: ${opName}`);
      const providedParams = parseKeyValueList(opts.params);
      const callArgs: any[] = [client];
      for (const p of op.params) {
        let val = providedParams[p];
        if (!val) { const ans = await ask<{ v: string }>([{ type: 'input', name: 'v', message: `Value for ${p}` }]); val = ans.v; }
        callArgs.push(val);
      }
      const endpointOpts: any = {};
      if (opts.query) endpointOpts.query = JSON.parse(opts.query);
      if (opts.body) endpointOpts.body = JSON.parse(opts.body);
      if (Object.keys(endpointOpts).length > 0) callArgs.push(endpointOpts);
      const result = await (op.fn as any)(...callArgs);
      console.log(JSON.stringify(result, null, 2));
    } catch(e) {
      const err = e instanceof Error ? e : new Error(String(e));
  console.error('[utho][error]', err.message);
      if (process.env.CLOUD_DEBUG==='1') console.error(err.stack);
      process.exitCode = 1;
    }
  });

program.parseAsync(process.argv);
