# Transfer/Recieve Resources API

> This page documents the client wrapper functions and raw HTTP interface for the **Transfer/Recieve Resources** segment of the Utho Cloud API.

## Endpoints

### POST \`/transfer/process/\`

**Summary:** Recieve Resource

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /transfer/process/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/transfer/process/' });
console.log(res);
```

### GET \`/transfer/{resource_type}/{resource_id}/\`

**Summary:** Transfer Resource

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| resource_type | path | string | yes |  |
| resource_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /transfer/{resource_type}/{resource_id}/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/transfer/{resource_type}/{resource_id}/' });
console.log(res);
```

## Related

- [SQS](./sqs.md)
