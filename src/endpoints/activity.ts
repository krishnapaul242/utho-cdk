import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: activity
export async function get_activity<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/activity', query: options?.query, body: options?.body, headers: options?.headers }); }
