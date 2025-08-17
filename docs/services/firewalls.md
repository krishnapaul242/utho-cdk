# Firewalls API

> This page documents the client wrapper functions and raw HTTP interface for the **Firewalls** segment of the Utho Cloud API.

## Endpoints

### GET \`/firewall\`

**Summary:** Firewalls List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /firewall -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/firewall' });
console.log(res);
```

### GET \`/firewall/{id}\`

**Summary:** Firewall Info

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
utho call GET /firewall/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/firewall/{id}' });
console.log(res);
```

### POST \`/firewall/create\`

**Summary:** Create Firewall

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /firewall/create -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/firewall/create' });
console.log(res);
```

### POST \`/firewall/{firewall_id}/rule/add\`

**Summary:** Add Rule

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| firewall_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /firewall/{firewall_id}/rule/add -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/firewall/{firewall_id}/rule/add' });
console.log(res);
```

### DELETE \`/firewall/{firewall_id}/rule/{rule_id}/delete\`

**Summary:** Delete Rule

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| firewall_id | path | string | yes |  |
| rule_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /firewall/{firewall_id}/rule/{rule_id}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/firewall/{firewall_id}/rule/{rule_id}/delete' });
console.log(res);
```

### POST \`/firewall/{firewall_id}/server/add\`

**Summary:** Add Server to Firewall

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| firewall_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /firewall/{firewall_id}/server/add -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/firewall/{firewall_id}/server/add' });
console.log(res);
```

### DELETE \`/firewall/{id}/server/{cloudid}/delete\`

**Summary:** Delete Server from Firewall

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| cloudid | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /firewall/{id}/server/{cloudid}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/firewall/{id}/server/{cloudid}/delete' });
console.log(res);
```

### DELETE \`/firewall/{id}/destroy\`

**Summary:** Destroy Firewall

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
utho call DELETE /firewall/{id}/destroy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/firewall/{id}/destroy' });
console.log(res);
```

## Related

- [SSH Key](./ssh-key.md)
- [SSL](./ssl.md)
- [Waf](./waf.md)
- [API Key](./api-key.md)
- [SubUser](./subuser.md)
