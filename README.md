# utho-cdk

Unified TypeScript client + CLI + browser bundle for Utho Cloud's OpenAPI (Swagger) spec.

## Features
- Programmatic client for Node.js & browser
- CLI (`cloudctl`) for ad-hoc calls and scripting
- Type-safe models generated from OpenAPI using `openapi-typescript`
- Built with `tsup` producing ESM, CJS, and IIFE bundles

## Quick Start
```bash
npm install utho-cdk
```

Programmatic usage:
```ts
import { ApiClient } from 'utho-cdk';

const client = new ApiClient({ baseUrl: 'https://api.example.com', apiKey: process.env.CLOUD_API_KEY });
const instances = await client.request({ method: 'GET', path: '/v1/instances' });
```

CLI usage:
```bash
cloudctl call GET /v1/instances -k $CLOUD_API_KEY
```
Common subcommands:
```bash
cloudctl apikey:list -k $CLOUD_API_KEY
cloudctl apikey:add -k $CLOUD_API_KEY
cloudctl apikey:delete <id> -k $CLOUD_API_KEY
cloudctl account:info -k $CLOUD_API_KEY
```
If API key not supplied, you'll be prompted securely.

## Generating Types
Using local spec (already in `spec/utho-api-latest.yaml`) run:
```bash
npm run generate
```

## Development
```bash
npm install
npm run build
npm test
```

## License
MIT
