# API Key API

> This page documents the client wrapper functions and raw HTTP interface for the **API Key** segment of the Utho Cloud API.

## Endpoints

### GET \`/api\`

**Summary:** API Key List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /api -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/api' });
console.log(res);
```

### POST \`/api/generate\`

**Summary:** Add API Key

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /api/generate -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/api/generate' });
console.log(res);
```

### DELETE \`/api/{id}/delete\`

**Summary:** Delete API Key

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /api/{id}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/api/{id}/delete' });
console.log(res);
```

## Related

- [Firewalls](./firewalls.md)
- [SSH Key](./ssh-key.md)
- [SSL](./ssl.md)
- [Waf](./waf.md)
- [SubUser](./subuser.md)
