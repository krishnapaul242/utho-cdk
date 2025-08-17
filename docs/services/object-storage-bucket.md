# Object Storage > Bucket API

> This page documents the client wrapper functions and raw HTTP interface for the **Object Storage > Bucket** segment of the Utho Cloud API.

## Endpoints

### GET \`/pricing/objectstorage\`

**Summary:** Object Storage Plan List

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| currency | query | string | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /pricing/objectstorage -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/pricing/objectstorage' });
console.log(res);
```

### GET \`/objectstorage/{dcslug}/bucket\`

**Summary:** Object Storage List

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| dcslug | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /objectstorage/{dcslug}/bucket -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/objectstorage/{dcslug}/bucket' });
console.log(res);
```

### GET \`/objectstorage/{dcslug}/bucket/{name}/\`

**Summary:** Object Storage Details

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| dcslug | path | string | yes |  |
| name | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /objectstorage/{dcslug}/bucket/{name}/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/objectstorage/{dcslug}/bucket/{name}/' });
console.log(res);
```

### POST \`/objectstorage/bucket/create/\`

**Summary:** Create Object Storage

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /objectstorage/bucket/create/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/objectstorage/bucket/create/' });
console.log(res);
```

### DELETE \`/objectstorage/{dcslug}/bucket/{name}/delete/\`

**Summary:** Destroy Object Storage

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| dcslug | path | string | yes |  |
| name | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /objectstorage/{dcslug}/bucket/{name}/delete/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/objectstorage/{dcslug}/bucket/{name}/delete/' });
console.log(res);
```

### POST \`/objectstorage/{dcslug}/bucket/{bucket-name}/policy/{policy-type}\`

**Summary:** Update Access Policy

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| dcslug | path | string | yes |  |
| bucket-name | path | string | yes |  |
| policy-type | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /objectstorage/{dcslug}/bucket/{bucket-name}/policy/{policy-type} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/objectstorage/{dcslug}/bucket/{bucket-name}/policy/{policy-type}' });
console.log(res);
```

### POST \`/objectstorage/{dcslug}/bucket/{name}/permission/{selected_permission}/accesskey/{selected_key}/\`

**Summary:** Update Permission of Access Key

**Permission Types :**

- read

- write

- full

- none

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| dcslug | path | string | yes |  |
| name | path | string | yes |  |
| selected_permission | path | string | yes |  |
| selected_key | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /objectstorage/{dcslug}/bucket/{name}/permission/{selected_permission}/accesskey/{selected_key}/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/objectstorage/{dcslug}/bucket/{name}/permission/{selected_permission}/accesskey/{selected_key}/' });
console.log(res);
```

### GET \`/objectstorage/innoida/bucket/{bucket_name}/objects\`

**Summary:** Object Storage Files & Directories

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| path | query | string | no |  |
| bucket_name | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /objectstorage/innoida/bucket/{bucket_name}/objects -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/objectstorage/innoida/bucket/{bucket_name}/objects' });
console.log(res);
```

### POST \`/objectstorage/{dcslug}/bucket/{name}/createdirectory/\`

**Summary:** Create Directory

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| dcslug | path | string | yes |  |
| name | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /objectstorage/{dcslug}/bucket/{name}/createdirectory/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/objectstorage/{dcslug}/bucket/{name}/createdirectory/' });
console.log(res);
```

### DELETE \`/objectstorage/{dcslug}/bucket/{name}/delete/object\`

**Summary:** Delete File

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| path | query | string | no |  |
| dcslug | path | string | yes |  |
| name | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /objectstorage/{dcslug}/bucket/{name}/delete/object -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/objectstorage/{dcslug}/bucket/{name}/delete/object' });
console.log(res);
```

### GET \`/objectstorage/{dcslug}/bucket/{name}/download\`

**Summary:** Get Sharable URL Of Object Storage File

1. **expire :** Can accept a string containing a number and a time unit (**s** for seconds, **m** for minutes, **h** for hours, **d** for days, **w** for weeks, **M** for months, **y** for years).
2. **Sample values:** 10M, 10s, 1w, 1y, 12h, 7d

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| path | query | string | no |  |
| expire | query | string | no |  |
| dcslug | path | string | yes |  |
| name | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /objectstorage/{dcslug}/bucket/{name}/download -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/objectstorage/{dcslug}/bucket/{name}/download' });
console.log(res);
```

### POST \`/objectstorage/innoida/bucket/uthostorage/upload/internal\`

**Summary:** Upload File

**Request Body**

- multipart/form-data

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /objectstorage/innoida/bucket/uthostorage/upload/internal -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/objectstorage/innoida/bucket/uthostorage/upload/internal' });
console.log(res);
```

## Related

- [Object Storage > Access Keys](./object-storage-access-keys.md)
- [Elastic Block Storage](./elastic-block-storage.md)
- [Snapshots](./snapshots.md)
- [Backups](./backups.md)
- [DataBase](./database.md)
