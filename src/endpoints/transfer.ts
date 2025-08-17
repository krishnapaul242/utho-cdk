import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: transfer
export async function post_transfer_process<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/transfer/process/', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_transfer_resource_type_resource_id<T = unknown>(client: ApiClient, resource_type: string, resource_id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: `/transfer/${resource_type}/${resource_id}/`, query: options?.query, body: options?.body, headers: options?.headers }); }
