# Load-Balancer API

> This page documents the client wrapper functions and raw HTTP interface for the **Load-Balancer** segment of the Utho Cloud API.

## Endpoints

### POST \`/loadbalancer/{id}/acl/\`

**Summary:** Add ACL Rule - Application Loadbalancer

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
utho call POST /loadbalancer/{id}/acl/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/loadbalancer/{id}/acl/' });
console.log(res);
```

### POST \`/loadbalancer/{id}/route/\`

**Summary:** Add Advance Routing - Application Loadbalancer

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
utho call POST /loadbalancer/{id}/route/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/loadbalancer/{id}/route/' });
console.log(res);
```

### POST \`/loadbalancer/{id}/backend/\`

**Summary:** Add Backend - Network Loadbalancer

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
utho call POST /loadbalancer/{id}/backend/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/loadbalancer/{id}/backend/' });
console.log(res);
```

### POST \`/loadbalancer/{id}/frontend\`

**Summary:** Add Frontend

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
utho call POST /loadbalancer/{id}/frontend -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/loadbalancer/{id}/frontend' });
console.log(res);
```

### PUT \`/loadbalancer/{id}/frontend\`

**Summary:** Update Frontend

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
utho call PUT /loadbalancer/{id}/frontend -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/loadbalancer/{id}/frontend' });
console.log(res);
```

### POST \`/loadbalancer/add/\`

**Summary:** Add Load Balancer

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /loadbalancer/add/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/loadbalancer/add/' });
console.log(res);
```

### DELETE \`/loadbalancer/{id}/acl/{acl_id}\`

**Summary:** Delete ACL Rule - Application Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| acl_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /loadbalancer/{id}/acl/{acl_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/loadbalancer/{id}/acl/{acl_id}' });
console.log(res);
```

### PUT \`/loadbalancer/{id}/acl/{acl_id}\`

**Summary:** Update ACL Rule - Application Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| acl_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call PUT /loadbalancer/{id}/acl/{acl_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/loadbalancer/{id}/acl/{acl_id}' });
console.log(res);
```

### DELETE \`/loadbalancer/{id}/backend/{backend_id}\`

**Summary:** Delete Backend - Network Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| backend_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /loadbalancer/{id}/backend/{backend_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/loadbalancer/{id}/backend/{backend_id}' });
console.log(res);
```

### DELETE \`/loadbalancer/{id}/frontend/{frontend_id}\`

**Summary:** Delete Frontend

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| frontend_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /loadbalancer/{id}/frontend/{frontend_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/loadbalancer/{id}/frontend/{frontend_id}' });
console.log(res);
```

### DELETE \`/loadbalancer/{id}/route/{route_id}\`

**Summary:** Delete Route - Application Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| route_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /loadbalancer/{id}/route/{route_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/loadbalancer/{id}/route/{route_id}' });
console.log(res);
```

### PUT \`/loadbalancer/{id}/route/{route_id}\`

**Summary:** Update Advance Routing - Application Loadbalancer

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| route_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call PUT /loadbalancer/{id}/route/{route_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/loadbalancer/{id}/route/{route_id}' });
console.log(res);
```

### DELETE \`/loadbalancer/{id}/destroy/\`

**Summary:** Destroy Load Balancer

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
utho call DELETE /loadbalancer/{id}/destroy/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/loadbalancer/{id}/destroy/' });
console.log(res);
```

### GET \`/loadbalancer/{id}/\`

**Summary:** Load Balancer Detail

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
utho call GET /loadbalancer/{id}/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/loadbalancer/{id}/' });
console.log(res);
```

### GET \`/loadbalancer/\`

**Summary:** Load Balancers List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /loadbalancer/ -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/loadbalancer/' });
console.log(res);
```

### PUT \`/loadbalancer/{id}/update\`

**Summary:** Update Load Balancer

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
utho call PUT /loadbalancer/{id}/update -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/loadbalancer/{id}/update' });
console.log(res);
```

## Related

- [VPC-old](./vpc-old.md)
- [vpc](./vpc.md)
- [vpc > vpc](./vpc-vpc.md)
- [vpc > subnets](./vpc-subnets.md)
- [vpc > routes](./vpc-routes.md)
- [vpc > route-tables](./vpc-route-tables.md)
- [vpc > internet-gateway](./vpc-internet-gateway.md)
- [vpc > nat-gateway](./vpc-nat-gateway.md)
- [vpc > elastic-ip](./vpc-elastic-ip.md)
- [vpc > Peering Connection](./vpc-peering-connection.md)
- [IpSec](./ipsec.md)
- [VPN](./vpn.md)
- [TargetGroup](./targetgroup.md)
