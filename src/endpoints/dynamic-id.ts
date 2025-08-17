import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: dynamic-id
export async function put_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'PUT', path: `/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
