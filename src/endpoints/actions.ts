import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: actions
export async function get_actions_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: `/actions/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
