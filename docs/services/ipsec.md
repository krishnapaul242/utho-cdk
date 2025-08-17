# IpSec API

> This page documents the client wrapper functions and raw HTTP interface for the **IpSec** segment of the Utho Cloud API.

## Endpoints

### GET \`/ipsec\`

**Summary:** Connection Logs List

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| action | query | string | no |  |
| ipsecid | query | string | no |  |
| name | query | string | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /ipsec -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/ipsec' });
console.log(res);
```

### POST \`/ipsec\`

**Summary:** Create Connection

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| action | query | string | no |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /ipsec -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/ipsec' });
console.log(res);
```

### DELETE \`/ipsec\`

**Summary:** Delete Connection

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| action | query | string | no |  |
| ipsecid | query | string | no |  |
| id | query | string | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /ipsec -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/ipsec' });
console.log(res);
```

### PUT \`/ipsec\`

**Summary:** Update Connection

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| action | query | string | no |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call PUT /ipsec -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/ipsec' });
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
- [VPN](./vpn.md)
- [TargetGroup](./targetgroup.md)
- [Load-Balancer](./load-balancer.md)
