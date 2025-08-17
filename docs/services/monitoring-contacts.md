# Monitoring & Contacts API

> This page documents the client wrapper functions and raw HTTP interface for the **Monitoring & Contacts** segment of the Utho Cloud API.

## Endpoints

### GET \`/alert/contact/list\`

**Summary:** Get Contact List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /alert/contact/list -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/alert/contact/list' });
console.log(res);
```

### POST \`/alert/contact/add\`

**Summary:** Add Monitoring Contact

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| Authorization | header | string | no | Please enter your unique API key prefaced by "Bearer" for access.  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /alert/contact/add -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/alert/contact/add' });
console.log(res);
```

### PUT \`/alert/contact/{id}/update\`

**Summary:** Update Monitoring Contact

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
utho call PUT /alert/contact/{id}/update -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/alert/contact/{id}/update' });
console.log(res);
```

### DELETE \`/alert/contact/{id}/delete\`

**Summary:** Delete Monitoring Contact

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| Authorization | header | string | no | Please enter your unique API key prefaced by "Bearer" for access.  |
| id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /alert/contact/{id}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/alert/contact/{id}/delete' });
console.log(res);
```

### GET \`/alert\`

**Summary:** Get Alert List

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| Authorization | header | string | no | Please enter your unique API key prefaced by "Bearer" for access.  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /alert -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/alert' });
console.log(res);
```

### POST \`/alert\`

**Summary:** Add Monitoring Alert

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /alert -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/alert' });
console.log(res);
```

### PUT \`/{id}\`

**Summary:** Update Monitoring Alert

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
utho call PUT /{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/{id}' });
console.log(res);
```

### DELETE \`/alert/{alert_id}/delete\`

**Summary:** Delete Monitoring Alert

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| alert_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /alert/{alert_id}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/alert/{alert_id}/delete' });
console.log(res);
```

## Related

- [Actions](./actions.md)
- [Activity Logs](./activity-logs.md)
