# DataBase API

> This page documents the client wrapper functions and raw HTTP interface for the **DataBase** segment of the Utho Cloud API.

## Endpoints

### GET \`/databases\`

**Summary:** Database Clusters List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /databases -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/databases' });
console.log(res);
```

### POST \`/databases\`

**Summary:** Add Cluster

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /databases -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/databases' });
console.log(res);
```

### GET \`/databases/{cluster_id}\`

**Summary:** Database Cluster Details

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cluster_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /databases/{cluster_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/databases/{cluster_id}' });
console.log(res);
```

### POST \`/databases/{id}/database\`

**Summary:** Add Database To Cluster

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
utho call POST /databases/{id}/database -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/databases/{id}/database' });
console.log(res);
```

### DELETE \`/databases/{id}/database/{dbname}\`

**Summary:** Delete Database from Cluster

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| confirm | query | string | no |  |
| id | path | string | yes |  |
| dbname | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /databases/{id}/database/{dbname} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/databases/{id}/database/{dbname}' });
console.log(res);
```

### POST \`/databases/{id}/user\`

**Summary:** Add Database User

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
utho call POST /databases/{id}/user -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/databases/{id}/user' });
console.log(res);
```

### DELETE \`/databases/{db_id}/user\`

**Summary:** Delete Database user

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| confirm | query | string | no |  |
| db_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /databases/{db_id}/user -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/databases/{db_id}/user' });
console.log(res);
```

### POST \`/databases/{id}/database/{dbname}/user\`

**Summary:** Update Database Permissions

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| dbname | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /databases/{id}/database/{dbname}/user -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/databases/{id}/database/{dbname}/user' });
console.log(res);
```

### POST \`/databases/{id}/trustedhost/\`

**Summary:** Add Trusted Host To Database Cluster

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
utho call POST /databases/{id}/trustedhost/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/databases/{id}/trustedhost/' });
console.log(res);
```

### DELETE \`/databases/{id}/trustedhost/{trustedhost_ip}\`

**Summary:** Delete Trusted Host from Database Cluster

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| confirm | query | string | no |  |
| id | path | string | yes |  |
| trustedhost_ip | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /databases/{id}/trustedhost/{trustedhost_ip} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/databases/{id}/trustedhost/{trustedhost_ip}' });
console.log(res);
```

### GET \`/databases/{db_id}/{cloud_id}/certificate\`

**Summary:** Download CA Certificate

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| db_id | path | string | yes |  |
| cloud_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /databases/{db_id}/{cloud_id}/certificate -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/databases/{db_id}/{cloud_id}/certificate' });
console.log(res);
```

### POST \`/databases/{db_id}/backup\`

**Summary:** Create Backup

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| db_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /databases/{db_id}/backup -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/databases/{db_id}/backup' });
console.log(res);
```

### POST \`/databases/{db_id}/securitygroup/{firewall_id}\`

**Summary:** Add Firewall

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| db_id | path | string | yes |  |
| firewall_id | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /databases/{db_id}/securitygroup/{firewall_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/databases/{db_id}/securitygroup/{firewall_id}' });
console.log(res);
```

### DELETE \`/databases/{db_id}/securitygroup/{firewall_id}\`

**Summary:** Detach Firewall

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| db_id | path | string | yes |  |
| firewall_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /databases/{db_id}/securitygroup/{firewall_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/databases/{db_id}/securitygroup/{firewall_id}' });
console.log(res);
```

### DELETE \`/databases/{id}\`

**Summary:** Delete Database Cluster

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| confirm | query | string | no |  |
| id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /databases/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/databases/{id}' });
console.log(res);
```

## Related

- [Object Storage > Bucket](./object-storage-bucket.md)
- [Object Storage > Access Keys](./object-storage-access-keys.md)
- [Elastic Block Storage](./elastic-block-storage.md)
- [Snapshots](./snapshots.md)
- [Backups](./backups.md)
