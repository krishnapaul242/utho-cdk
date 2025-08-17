# DNS API

> This page documents the client wrapper functions and raw HTTP interface for the **DNS** segment of the Utho Cloud API.

## Endpoints

### GET \`/dns\`

**Summary:** DNS List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /dns -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/dns' });
console.log(res);
```

### GET \`/dns/{domain}\`

**Summary:** Domains DNS Detail

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| domain | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /dns/{domain} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/dns/{domain}' });
console.log(res);
```

### POST \`/dns/adddomain\`

**Summary:** Add DNS Domain

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /dns/adddomain -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/dns/adddomain' });
console.log(res);
```

### POST \`/dns/{domain}/record/add/\`

**Summary:** Add DNS Record

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| domain | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /dns/{domain}/record/add/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/dns/{domain}/record/add/' });
console.log(res);
```

### DELETE \`/dns/{domain}/delete\`

**Summary:** DNS Domain Delete

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| domain | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /dns/{domain}/delete -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/dns/{domain}/delete' });
console.log(res);
```

### DELETE \`/dns/{domain}/record/{recordid}/delete/\`

**Summary:** Delete DNS Record

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| domain | path | string | yes |  |
| recordid | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /dns/{domain}/record/{recordid}/delete/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/dns/{domain}/record/{recordid}/delete/' });
console.log(res);
```
