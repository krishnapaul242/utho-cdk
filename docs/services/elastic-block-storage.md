# Elastic Block Storage API

> This page documents the client wrapper functions and raw HTTP interface for the **Elastic Block Storage** segment of the Utho Cloud API.

## Endpoints

### GET \`/ebs\`

**Summary:** Block Storage List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /ebs -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/ebs' });
console.log(res);
```

### POST \`/ebs\`

**Summary:** Create Block Storage

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /ebs -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/ebs' });
console.log(res);
```

### PUT \`/ebs/{id}/resize\`

**Summary:** Resize Block Storage

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
utho call PUT /ebs/{id}/resize -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/ebs/{id}/resize' });
console.log(res);
```

### DELETE \`/ebs/{storage-id}/destroy\`

**Summary:** Delete Block Storage

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| storage-id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /ebs/{storage-id}/destroy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/ebs/{storage-id}/destroy' });
console.log(res);
```

### PUT \`/ebs/{storage_id}/attach\`

**Summary:** Attach Cloud Resource

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| storage_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call PUT /ebs/{storage_id}/attach -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/ebs/{storage_id}/attach' });
console.log(res);
```

### PUT \`/ebs/{storage_id}/dettach\`

**Summary:** Detach Cloud Resource

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| storage_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call PUT /ebs/{storage_id}/dettach -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/ebs/{storage_id}/dettach' });
console.log(res);
```

## Related

- [Object Storage > Bucket](./object-storage-bucket.md)
- [Object Storage > Access Keys](./object-storage-access-keys.md)
- [Snapshots](./snapshots.md)
- [Backups](./backups.md)
- [DataBase](./database.md)
