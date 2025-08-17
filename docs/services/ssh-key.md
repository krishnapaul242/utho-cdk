# SSH Key API

> This page documents the client wrapper functions and raw HTTP interface for the **SSH Key** segment of the Utho Cloud API.

## Endpoints

### GET \`/key\`

**Summary:** SSH Key List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /key -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/key' });
console.log(res);
```

### POST \`/key/import\`

**Summary:** Add SSH Key

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /key/import -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/key/import' });
console.log(res);
```

### DELETE \`/key/{id}/delete\`

**Summary:** Delete SSH Key

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
utho call DELETE /key/{id}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/key/{id}/delete' });
console.log(res);
```

## Related

- [Firewalls](./firewalls.md)
- [SSL](./ssl.md)
- [Waf](./waf.md)
- [API Key](./api-key.md)
- [SubUser](./subuser.md)
