# Waf API

> This page documents the client wrapper functions and raw HTTP interface for the **Waf** segment of the Utho Cloud API.

## Endpoints

### GET \`/waf/list\`

**Summary:** Waf List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /waf/list -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/waf/list' });
console.log(res);
```

### POST \`/waf/create\`

**Summary:** Create Waf

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /waf/create -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/waf/create' });
console.log(res);
```

### POST \`/waf/attach_rule\`

**Summary:** Enable rule in ruleset

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| rulesetid | query | string | no |  |
| wafid | query | string | no |  |
| ruleid | query | string | no |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /waf/attach_rule -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/waf/attach_rule' });
console.log(res);
```

### POST \`/waf/detach_rule\`

**Summary:** Disable rule in ruleset

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| rulesetid | query | string | no |  |
| wafid | query | string | no |  |
| ruleid | query | string | no |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /waf/detach_rule -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/waf/detach_rule' });
console.log(res);
```

### POST \`/waf/create_ruleset\`

**Summary:** Create Custom Ruleset

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /waf/create_ruleset -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/waf/create_ruleset' });
console.log(res);
```

### POST \`/waf/add_rule\`

**Summary:** Add rule to custom ruleset

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| rulesetid | query | string | no |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /waf/add_rule -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/waf/add_rule' });
console.log(res);
```

### POST \`/waf/create_waf_instance\`

**Summary:** Attach Loadbalancer to Waf

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| wafid | query | string | no |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /waf/create_waf_instance -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/waf/create_waf_instance' });
console.log(res);
```

### DELETE \`/waf/delete\`

**Summary:** Destroy Waf

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| wafid | query | string | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /waf/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/waf/delete' });
console.log(res);
```

## Related

- [Firewalls](./firewalls.md)
- [SSH Key](./ssh-key.md)
- [SSL](./ssl.md)
- [API Key](./api-key.md)
- [SubUser](./subuser.md)
