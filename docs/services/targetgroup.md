# TargetGroup API

> This page documents the client wrapper functions and raw HTTP interface for the **TargetGroup** segment of the Utho Cloud API.

## Endpoints

### GET \`/targetgroup\`

**Summary:** Target Group List

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /targetgroup -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/targetgroup' });
console.log(res);
```

### POST \`/targetgroup\`

**Summary:** Add Target Group

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /targetgroup -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/targetgroup' });
console.log(res);
```

### PUT \`/targetgroup/{target_group_id}\`

**Summary:** Update Target Group

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| target_group_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call PUT /targetgroup/{target_group_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'PUT', path: '/targetgroup/{target_group_id}' });
console.log(res);
```

### DELETE \`/targetgroup/{id}\`

**Summary:** Delete Target Group

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
utho call DELETE /targetgroup/{id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/targetgroup/{id}' });
console.log(res);
```

### POST \`/targetgroup/{target_group_id}/target\`

**Summary:** Add Target in Group

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| target_group_id | path | string | yes |  |

**Request Body**

- application/json

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call POST /targetgroup/{target_group_id}/target -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'POST', path: '/targetgroup/{target_group_id}/target' });
console.log(res);
```

### DELETE \`/targetgroup/{target_group_id}/target/{target_id}\`

**Summary:** Delete Target From Target Group

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| target_group_id | path | string | yes |  |
| target_id | path | string | yes |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call DELETE /targetgroup/{target_group_id}/target/{target_id} -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'DELETE', path: '/targetgroup/{target_group_id}/target/{target_id}' });
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
- [Load-Balancer](./load-balancer.md)
