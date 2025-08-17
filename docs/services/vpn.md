# VPN API

> This page documents the client wrapper functions and raw HTTP interface for the **VPN** segment of the Utho Cloud API.

## Endpoints

### GET \`/vpn\`

**Summary:** VPN List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /vpn -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpn' });
console.log(res);
```

### GET \`/vpn/{id}\`

**Summary:** VPN Details

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
utho call GET /vpn/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpn/{id}' });
console.log(res);
```

### POST \`/vpn/deploy\`

**Summary:** VPN Deploy

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /vpn/deploy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/vpn/deploy' });
console.log(res);
```

### DELETE \`/vpn/{id}/destroy\`

**Summary:** Destroy VPN

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
utho call DELETE /vpn/{id}/destroy -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/vpn/{id}/destroy' });
console.log(res);
```

### GET \`/vpn/{vpn_id}/user/add\`

**Summary:** Add VPN User

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| vpn_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /vpn/{vpn_id}/user/add -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpn/{vpn_id}/user/add' });
console.log(res);
```

### GET \`/vpn/{id}/user/{user_name}/download\`

**Summary:** Download VPN User

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| user_name | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /vpn/{id}/user/{user_name}/download -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpn/{id}/user/{user_name}/download' });
console.log(res);
```

### DELETE \`/vpn/{id}/user/{user_name}/remove\`

**Summary:** Remove VPN User

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| id | path | string | yes |  |
| user_name | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /vpn/{id}/user/{user_name}/remove -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/vpn/{id}/user/{user_name}/remove' });
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
- [TargetGroup](./targetgroup.md)
- [Load-Balancer](./load-balancer.md)
