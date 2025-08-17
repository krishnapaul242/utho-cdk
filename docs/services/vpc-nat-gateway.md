# vpc > nat-gateway API

> This page documents the client wrapper functions and raw HTTP interface for the **vpc > nat-gateway** segment of the Utho Cloud API.

## Endpoints

### POST \`/vpc/natgateway\`

**Summary:** create

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /vpc/natgateway -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/vpc/natgateway' });
console.log(res);
```

### DELETE \`/vpc/natgateway\`

**Summary:** delete

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| gateway_id | query | string | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /vpc/natgateway -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/vpc/natgateway' });
console.log(res);
```

### GET \`/vpc/natgateway\`

**Summary:** get-one

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| subaction | query | string | no |  |
| id | query | string | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /vpc/natgateway -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/vpc/natgateway' });
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
- [vpc > elastic-ip](./vpc-elastic-ip.md)
- [vpc > Peering Connection](./vpc-peering-connection.md)
- [IpSec](./ipsec.md)
- [VPN](./vpn.md)
- [TargetGroup](./targetgroup.md)
- [Load-Balancer](./load-balancer.md)
