# Backups API

> This page documents the client wrapper functions and raw HTTP interface for the **Backups** segment of the Utho Cloud API.

## Endpoints

### GET \`/backups\`

**Summary:** Get Backups

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /backups -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/backups' });
console.log(res);
```

## Related

- [Object Storage > Bucket](./object-storage-bucket.md)
- [Object Storage > Access Keys](./object-storage-access-keys.md)
- [Elastic Block Storage](./elastic-block-storage.md)
- [Snapshots](./snapshots.md)
- [DataBase](./database.md)
