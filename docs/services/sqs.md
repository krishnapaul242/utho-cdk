# SQS API

> This page documents the client wrapper functions and raw HTTP interface for the **SQS** segment of the Utho Cloud API.

## Endpoints

### GET \`/sqs\`

**Summary:** Get SQS List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /sqs -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/sqs' });
console.log(res);
```

### POST \`/sqs\`

**Summary:** Create SQS

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /sqs -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/sqs' });
console.log(res);
```

### GET \`/sqs/{id}\`

**Summary:** Get SQS Details

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
utho call GET /sqs/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/sqs/{id}' });
console.log(res);
```

### DELETE \`/sqs/{sqs_id}/destroy\`

**Summary:** Delete SQS

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| confirm | query | string | no |  |
| sqs_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /sqs/{sqs_id}/destroy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/sqs/{sqs_id}/destroy' });
console.log(res);
```

### POST \`/sqs/{id}/queue\`

**Summary:** Add Queue

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /sqs/{id}/queue -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/sqs/{id}/queue' });
console.log(res);
```

## Related

- [Transfer/Recieve Resources](./transfer-recieve-resources.md)
