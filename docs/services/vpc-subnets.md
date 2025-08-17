# vpc > subnets API

> This page documents the client wrapper functions and raw HTTP interface for the **vpc > subnets** segment of the Utho Cloud API.

## Endpoints

### POST \`/vpc/subnet/create\`

**Summary:** Create Subnet

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /vpc/subnet/create -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/vpc/subnet/create' });
console.log(res);
```

### DELETE \`/vpc/subnet/{subnet_id}\`

**Summary:** Delete Subnet

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| subnet_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /vpc/subnet/{subnet_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/vpc/subnet/{subnet_id}' });
console.log(res);
```

### GET \`/vpc/subnet\`

**Summary:** Subnet List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /vpc/subnet -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpc/subnet' });
console.log(res);
```

## Related

- [VPC-old](./vpc-old.md)
- [vpc](./vpc.md)
- [vpc > vpc](./vpc-vpc.md)
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
