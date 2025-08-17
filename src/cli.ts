#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import { ApiClient } from "./runtime/client.js";
import { get_api as listApiKeys, post_api_generate as addApiKey, delete_api_id_delete as deleteApiKey, get_account_info as accountInfo } from "./endpoints/index.js";

const program = new Command();
program
  .name("cloudctl")
  .description("CLI to interact with Cloud Provider APIs")
  .version("0.1.0")
  .option('-d, --debug', 'Enable verbose debug logging');

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
      const ans = await inquirer.prompt<{ apiKey: string }>([{ name: "apiKey", message: "API Key:", type: "password" }]);
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

// Helper to create client
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
  console.error('[cloudctl][config]', { baseUrl, apiKeyMasked: `${start}...${end}`, length: apiKey.length });
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

// Could add more cloud:* commands after selecting appropriate wrapper names.

program.parseAsync(process.argv);
