# Actions API

> This page documents the client wrapper functions and raw HTTP interface for the **Actions** segment of the Utho Cloud API.

## Endpoints

### GET \`/actions/{id}\`

**Summary:** Action Detail

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
utho call GET /actions/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/actions/{id}' });
console.log(res);
```

### GET \`/v2/actions/\`

**Summary:** Action list

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /v2/actions/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/v2/actions/' });
console.log(res);
```

## Related

- [Monitoring & Contacts](./monitoring-contacts.md)
- [Activity Logs](./activity-logs.md)
