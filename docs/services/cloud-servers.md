# Cloud-Servers API

> This page documents the client wrapper functions and raw HTTP interface for the **Cloud-Servers** segment of the Utho Cloud API.

## Endpoints

### GET \`/cloud/\`

**Summary:** List of Cloud Servers

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /cloud/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/cloud/' });
console.log(res);
```

### GET \`/cloud/{cloudid}\`

**Summary:** Detail of Cloud Server

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /cloud/{cloudid} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/cloud/{cloudid}' });
console.log(res);
```

### POST \`/cloud/deploy/\`

**Summary:** Deploy Cloud Instance

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/deploy/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/deploy/' });
console.log(res);
```

### GET \`/cloud/images\`

**Summary:** Available OS Images

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /cloud/images -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/cloud/images' });
console.log(res);
```

### GET \`/cloud/{cloudid}/resizeplans/\`

**Summary:** Available Resize Plans

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /cloud/{cloudid}/resizeplans/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/cloud/{cloudid}/resizeplans/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/snapshot/create/\`

**Summary:** Create Snapshot

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/snapshot/create/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/snapshot/create/' });
console.log(res);
```

### DELETE \`/cloud/{cloudid}/destroy\`

**Summary:** Destroy

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /cloud/{cloudid}/destroy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/cloud/{cloudid}/destroy' });
console.log(res);
```

### POST \`/cloud/{cloudid}/backups/disable\`

**Summary:** Disable Backup

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/backups/disable -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/backups/disable' });
console.log(res);
```

### POST \`/cloud/{cloudid}/backups/enable\`

**Summary:** Enable Backup

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/backups/enable -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/backups/enable' });
console.log(res);
```

### POST \`/cloud/{cloudid}/billingcycle\`

**Summary:** Update Billing Cycle

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/billingcycle -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/billingcycle' });
console.log(res);
```

### POST \`/cloud/{cloudid}/hardreboot/\`

**Summary:** Hard Reboot

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/hardreboot/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/hardreboot/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/powercycle/\`

**Summary:** Power Cycle

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/powercycle/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/powercycle/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/poweroff/\`

**Summary:** Power Off

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/poweroff/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/poweroff/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/poweron/\`

**Summary:** Power On

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/poweron/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/poweron/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/rebuild/\`

**Summary:** Rebuild

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| Authorization | header | string | no | Please enter your unique API key preface by "Bearer" for access |
| cloudid | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/rebuild/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/rebuild/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/resetpassword/\`

**Summary:** Reset Password

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/resetpassword/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/resetpassword/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/resize/\`

**Summary:** Resize

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/resize/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/resize/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/snapshot/{snapshotid}/restore/\`

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
utho call POST /cloud/{cloudid}/snapshot/{snapshotid}/restore/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/snapshot/{snapshotid}/restore/' });
console.log(res);
```

### POST \`/cloud/{cloudid}/storage/{storageid}/update\`

**Summary:** Update Storage

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |
| storageid | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/storage/{storageid}/update -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/storage/{storageid}/update' });
console.log(res);
```

### POST \`/cloud/{cloudid}/assignpublicip\`

**Summary:** Assign Public IP

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/assignpublicip -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/assignpublicip' });
console.log(res);
```

### POST \`/cloud/{cloud_id}/updaterdns/{ip_address}\`

**Summary:** Update RDNS

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloud_id | path | string | yes |  |
| ip_address | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloud_id}/updaterdns/{ip_address} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloud_id}/updaterdns/{ip_address}' });
console.log(res);
```

### DELETE \`/cloud/1637583/ip/{public_ip}/delete\`

**Summary:** Delete Public IP

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| public_ip | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /cloud/1637583/ip/{public_ip}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/cloud/1637583/ip/{public_ip}/delete' });
console.log(res);
```

### POST \`/cloud/{cloudid}/enablerescue\`

**Summary:** Enable Rescue Mode

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/enablerescue -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/enablerescue' });
console.log(res);
```

### POST \`/cloud/{cloudid}/disablerescue\`

**Summary:** Disable Rescue Mode

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/disablerescue -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/disablerescue' });
console.log(res);
```

### POST \`/cloud/{cloudid}/mountiso\`

**Summary:** Mount ISO

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/mountiso -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/mountiso' });
console.log(res);
```

### POST \`/cloud/{cloudid}/umountiso\`

**Summary:** Unmount ISO

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| cloudid | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /cloud/{cloudid}/umountiso -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/cloud/{cloudid}/umountiso' });
console.log(res);
```

## Related

- [Autoscaling](./autoscaling.md)
- [Kubernetes](./kubernetes.md)
