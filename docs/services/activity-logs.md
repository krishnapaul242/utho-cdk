# Activity Logs API

> This page documents the client wrapper functions and raw HTTP interface for the **Activity Logs** segment of the Utho Cloud API.

## Endpoints

### GET \`/activity\`

**Summary:** Get Activity Logs

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| perpage | query | integer | no |  |
| page | query | integer | no |  |

**Responses**

| Status | Description |
|--------|-------------|
| 200 | Successful response |

**Example (CLI)**

```bash
# Using the generic call command
utho call GET /activity -k $CLOUD_API_KEY
```

**Example (TypeScript)**

```ts
import { ApiClient } from 'utho-cdk';
const client = new ApiClient({ baseUrl: "https://api.utho.com/v2", apiKey: process.env.CLOUD_API_KEY });
const res = await client.request({ method: 'GET', path: '/activity' });
console.log(res);
```

## Related

- [Monitoring & Contacts](./monitoring-contacts.md)
- [Actions](./actions.md)
