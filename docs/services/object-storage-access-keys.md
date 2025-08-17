# Object Storage > Access Keys API

> This page documents the client wrapper functions and raw HTTP interface for the **Object Storage > Access Keys** segment of the Utho Cloud API.

## Endpoints

### GET \`/objectstorage/{dcslug}/accesskeys/\`

**Summary:** Access keys List

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
utho call GET /objectstorage/{dcslug}/accesskeys/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/objectstorage/{dcslug}/accesskeys/' });
console.log(res);
```

### POST \`/objectstorage/{dcslug}/accesskey/create\`

**Summary:** Create Access Key

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| dcslug | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /objectstorage/{dcslug}/accesskey/create -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/objectstorage/{dcslug}/accesskey/create' });
console.log(res);
```

### POST \`/objectstorage/{dcslug}/accesskey/{name}/status\`

**Summary:** Modify Access Key

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
utho call POST /objectstorage/{dcslug}/accesskey/{name}/status -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/objectstorage/{dcslug}/accesskey/{name}/status' });
console.log(res);
```

## Related

- [Object Storage > Bucket](./object-storage-bucket.md)
- [Elastic Block Storage](./elastic-block-storage.md)
- [Snapshots](./snapshots.md)
- [Backups](./backups.md)
- [DataBase](./database.md)
