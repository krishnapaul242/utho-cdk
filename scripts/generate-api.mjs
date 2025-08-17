#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// Prefer local spec if present, else CLOUD_OPENAPI_URL, else remote placeholder
const localSpec = path.join(process.cwd(), 'spec', 'utho-api-latest.yaml');
const OPENAPI_URL = existsSync(localSpec)
  ? localSpec
  : (process.env.CLOUD_OPENAPI_URL || 'https://api.utho.com/v2/openapi.json');
const outDir = path.join(process.cwd(), 'generated');
if (!existsSync(outDir)) mkdirSync(outDir);

console.log('Generating types from spec', OPENAPI_URL);
try {
  execSync(`npx openapi-typescript ${OPENAPI_URL} --output ${path.join(outDir, 'schema.d.ts')}`, { stdio: 'inherit' });
  // Create index barrel if not present
  const indexPath = path.join(outDir, 'index.d.ts');
  if (!existsSync(indexPath)) {
    writeFileSync(indexPath, "export * from './schema';\n");
  }
  console.log('OpenAPI types generated.');
} catch (e) {
  console.error('Failed to generate OpenAPI types:', e.message);
  process.exit(1);
}
