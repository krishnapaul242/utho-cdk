# SSL API

> This page documents the client wrapper functions and raw HTTP interface for the **SSL** segment of the Utho Cloud API.

## Endpoints

### POST \`/certificates\`

**Summary:** Add SSL Certificate

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /certificates -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/certificates' });
console.log(res);
```

### GET \`/certificates\`

**Summary:** Get Certificate Details

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /certificates -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/certificates' });
console.log(res);
```

### DELETE \`/certificates/{id}\`

**Summary:** Delete Certificate

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
utho call DELETE /certificates/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/certificates/{id}' });
console.log(res);
```

## Related

- [Firewalls](./firewalls.md)
- [SSH Key](./ssh-key.md)
- [Waf](./waf.md)
- [API Key](./api-key.md)
- [SubUser](./subuser.md)
