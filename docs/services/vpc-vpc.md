# vpc > vpc API

> This page documents the client wrapper functions and raw HTTP interface for the **vpc > vpc** segment of the Utho Cloud API.

## Endpoints

### POST \`/vpc/create\`

**Summary:** Create VPC

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /vpc/create -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/vpc/create' });
console.log(res);
```

### GET \`/vpc\`

**Summary:** VPC List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /vpc -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpc' });
console.log(res);
```

### DELETE \`/vpc/{vpc_id}\`

**Summary:** Delete VPC

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| vpc_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /vpc/{vpc_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/vpc/{vpc_id}' });
console.log(res);
```

## Related

- [VPC-old](./vpc-old.md)
- [vpc](./vpc.md)
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
- [Load-Balancer](./load-balancer.md)
