# Autoscaling API

> This page documents the client wrapper functions and raw HTTP interface for the **Autoscaling** segment of the Utho Cloud API.

## Endpoints

### GET \`/autoscaling\`

**Summary:** Get Auto Scaling List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /autoscaling -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/autoscaling' });
console.log(res);
```

### POST \`/autoscaling\`

**Summary:** Add Auto Scaling

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /autoscaling -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/autoscaling' });
console.log(res);
```

### POST \`/autoscaling/policy\`

**Summary:** Add Auto Scaling Policy

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
utho call POST /autoscaling/policy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/autoscaling/policy' });
console.log(res);
```

### POST \`/autoscaling/{id}/schedulepolicy\`

**Summary:** Add Auto Scaling Schedule Policy

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
utho call POST /autoscaling/{id}/schedulepolicy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/autoscaling/{id}/schedulepolicy' });
console.log(res);
```

### POST \`/autoscaling/{id}/schedulepolicy/{schedulepolicy_id}\`

**Summary:** Add Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| schedulepolicy_id | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /autoscaling/{id}/schedulepolicy/{schedulepolicy_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/autoscaling/{id}/schedulepolicy/{schedulepolicy_id}' });
console.log(res);
```

### DELETE \`/autoscaling/{id}/schedulepolicy/{schedulepolicy_id}\`

**Summary:** Delete Auto Scaling Schedule Policy

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| schedulepolicy_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /autoscaling/{id}/schedulepolicy/{schedulepolicy_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/autoscaling/{id}/schedulepolicy/{schedulepolicy_id}' });
console.log(res);
```

### PUT \`/autoscaling/{id}/schedulepolicy/{schedulepolicy_id}\`

**Summary:** Update Auto Scaling Schedule Policy

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| schedulepolicy_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call PUT /autoscaling/{id}/schedulepolicy/{schedulepolicy_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/autoscaling/{id}/schedulepolicy/{schedulepolicy_id}' });
console.log(res);
```

### POST \`/autoscaling/{id}/securitygroup/{securitygroup_id}\`

**Summary:** Add Security Group

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| securitygroup_id | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /autoscaling/{id}/securitygroup/{securitygroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/autoscaling/{id}/securitygroup/{securitygroup_id}' });
console.log(res);
```

### DELETE \`/autoscaling/{id}/securitygroup/{securitygroup_id}\`

**Summary:** Delete Security Group

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| securitygroup_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /autoscaling/{id}/securitygroup/{securitygroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/autoscaling/{id}/securitygroup/{securitygroup_id}' });
console.log(res);
```

### POST \`/autoscaling/{id}/targetgroup/{targetgroup_id}\`

**Summary:** Add Target Group

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| targetgroup_id | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /autoscaling/{id}/targetgroup/{targetgroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/autoscaling/{id}/targetgroup/{targetgroup_id}' });
console.log(res);
```

### DELETE \`/autoscaling/{id}/targetgroup/{targetgroup_id}\`

**Summary:** Delete Target Group

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| targetgroup_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /autoscaling/{id}/targetgroup/{targetgroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/autoscaling/{id}/targetgroup/{targetgroup_id}' });
console.log(res);
```

### DELETE \`/autoscaling/policy/{id}\`

**Summary:** Delete Auto Scaling Policy

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
utho call DELETE /autoscaling/policy/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/autoscaling/policy/{id}' });
console.log(res);
```

### PUT \`/autoscaling/policy/{id}\`

**Summary:** Update Auto Scaling Policy

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
utho call PUT /autoscaling/policy/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/autoscaling/policy/{id}' });
console.log(res);
```

### DELETE \`/autoscaling/{id}\`

**Summary:** Delete Auto Scaling

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| name | query | string | no |  |
| id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /autoscaling/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/autoscaling/{id}' });
console.log(res);
```

### GET \`/autoscaling/{id}\`

**Summary:** Get Auto Scaling Details

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
utho call GET /autoscaling/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/autoscaling/{id}' });
console.log(res);
```

### PUT \`/autoscaling/{id}\`

**Summary:** Update Auto Scaling Configuration

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
utho call PUT /autoscaling/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/autoscaling/{id}' });
console.log(res);
```

### DELETE \`/autoscaling/{id}/loadbalancer/{loadbalancer_id}\`

**Summary:** Delete Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| loadbalancer_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /autoscaling/{id}/loadbalancer/{loadbalancer_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/autoscaling/{id}/loadbalancer/{loadbalancer_id}' });
console.log(res);
```

## Related

- [Cloud-Servers](./cloud-servers.md)
- [Kubernetes](./kubernetes.md)
