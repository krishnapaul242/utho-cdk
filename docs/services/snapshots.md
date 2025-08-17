# Snapshots API

> This page documents the client wrapper functions and raw HTTP interface for the **Snapshots** segment of the Utho Cloud API.

## Endpoints

### DELETE \`/cloud/{cloudid}/snapshot/{snapshotid}/delete\`

**Summary:** Delete Snapshot

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |
| snapshotid | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /cloud/{cloudid}/snapshot/{snapshotid}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/cloud/{cloudid}/snapshot/{snapshotid}/delete' });
console.log(res);
```

### GET \`/snapshot\`

**Summary:** Get Snapshots

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /snapshot -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/snapshot' });
console.log(res);
```

### POST \`/cloud/{cloudid}/snapshot/{snapshotid}/restore\`

**Summary:** Restore Snapshot

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |
| snapshotid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/snapshot/{snapshotid}/restore -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/snapshot/{snapshotid}/restore' });
console.log(res);
```

## Related

- [Object Storage > Bucket](./object-storage-bucket.md)
- [Object Storage > Access Keys](./object-storage-access-keys.md)
- [Elastic Block Storage](./elastic-block-storage.md)
- [Backups](./backups.md)
- [DataBase](./database.md)
