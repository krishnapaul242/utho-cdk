# Kubernetes API

> This page documents the client wrapper functions and raw HTTP interface for the **Kubernetes** segment of the Utho Cloud API.

## Endpoints

### GET \`/v2/kubernetes\`

**Summary:** Kubernetes List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /v2/kubernetes -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/v2/kubernetes' });
console.log(res);
```

### GET \`/kubernetes/{k8_id}\`

**Summary:** Kubernetes Details

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| k8_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /kubernetes/{k8_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/kubernetes/{k8_id}' });
console.log(res);
```

### POST \`/kubernetes/deploy\`

**Summary:** Add Kubernetes Cluster

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /kubernetes/deploy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/deploy' });
console.log(res);
```

### POST \`/kubernetes/{id}/loadbalancer/{loadbalancer_id}\`

**Summary:** Add Network Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| Authorization | header | string | no | Pleae enter your unique API key prefaced by "Bearer" for access |
| id | path | string | yes |  |
| loadbalancer_id | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /kubernetes/{id}/loadbalancer/{loadbalancer_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/{id}/loadbalancer/{loadbalancer_id}' });
console.log(res);
```

### DELETE \`/kubernetes/{id}/loadbalancer/{loadbalancer_id}\`

**Summary:** Delete Network Loadbalancer

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
utho call DELETE /kubernetes/{id}/loadbalancer/{loadbalancer_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/kubernetes/{id}/loadbalancer/{loadbalancer_id}' });
console.log(res);
```

### POST \`/kubernetes/{id}/securitygroup/{securitygroup_id}\`

**Summary:** Add Security Groups

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
utho call POST /kubernetes/{id}/securitygroup/{securitygroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/{id}/securitygroup/{securitygroup_id}' });
console.log(res);
```

### DELETE \`/kubernetes/{id}/securitygroup/{securitygroup_id}\`

**Summary:** Detach Security Groups

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
utho call DELETE /kubernetes/{id}/securitygroup/{securitygroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/kubernetes/{id}/securitygroup/{securitygroup_id}' });
console.log(res);
```

### POST \`/kubernetes/{id}/targetgroup/{targetgroup_id}\`

**Summary:** Add Target Groups

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
utho call POST /kubernetes/{id}/targetgroup/{targetgroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/{id}/targetgroup/{targetgroup_id}' });
console.log(res);
```

### DELETE \`/kubernetes/{id}/targetgroup/{targetgroup_id}\`

**Summary:** Delete Target Groups

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
utho call DELETE /kubernetes/{id}/targetgroup/{targetgroup_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/kubernetes/{id}/targetgroup/{targetgroup_id}' });
console.log(res);
```

### DELETE \`/kubernetes/{id}/destroy\`

**Summary:** Delete Kubernetes

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
utho call DELETE /kubernetes/{id}/destroy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/kubernetes/{id}/destroy' });
console.log(res);
```

### GET \`/kubernetes/{id}/download\`

**Summary:** Download Kubernetes

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
utho call GET /kubernetes/{id}/download -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/kubernetes/{id}/download' });
console.log(res);
```

### POST \`/v2/kubernetes/{id}/stop\`

**Summary:** Power Off Kubernetes

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /v2/kubernetes/{id}/stop -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/v2/kubernetes/{id}/stop' });
console.log(res);
```

### POST \`/kubernetes/{id}/start\`

**Summary:** Power On Kubernetes

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |

**Request Body**


**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /kubernetes/{id}/start -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/{id}/start' });
console.log(res);
```

### POST \`/kubernetes/{id}/nodepool/{id}/update\`

**Summary:** Update Kubernetes autoscale Nodepool

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| nodepool_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /kubernetes/{id}/nodepool/{id}/update -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/{id}/nodepool/{id}/update' });
console.log(res);
```

### POST \`/kubernetes/{k8_id}/nodepool/{ipool_id}/update\`

**Summary:** Update Kubernetes static Nodepool

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| k8_id | path | string | yes |  |
| ipool_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /kubernetes/{k8_id}/nodepool/{ipool_id}/update -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/{k8_id}/nodepool/{ipool_id}/update' });
console.log(res);
```

### POST \`/kubernetes/{k8_id}/nodepool/add\`

**Summary:** Add Nodepool

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| k8_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /kubernetes/{k8_id}/nodepool/add -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/kubernetes/{k8_id}/nodepool/add' });
console.log(res);
```

## Related

- [Cloud-Servers](./cloud-servers.md)
- [Autoscaling](./autoscaling.md)
