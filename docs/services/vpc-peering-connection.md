# vpc > Peering Connection API

> This page documents the client wrapper functions and raw HTTP interface for the **vpc > Peering Connection** segment of the Utho Cloud API.

## Endpoints

### GET \`/vpc/peering\`

**Summary:** Peering Connection List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /vpc/peering -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpc/peering' });
console.log(res);
```

### POST \`/vpc/peering\`

**Summary:** Create Peering Connection

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /vpc/peering -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/vpc/peering' });
console.log(res);
```

### DELETE \`/vpc/peering\`

**Summary:** Delete Peering Connection

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| peering_id | query | string | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /vpc/peering -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/vpc/peering' });
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
- [IpSec](./ipsec.md)
- [VPN](./vpn.md)
- [TargetGroup](./targetgroup.md)
- [Load-Balancer](./load-balancer.md)
