import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: v2
export async function get_v2_actions<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/v2/actions/', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_v2_kubernetes<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/v2/kubernetes', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_v2_kubernetes_id_stop<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: `/v2/kubernetes/${id}/stop`, query: options?.query, body: options?.body, headers: options?.headers }); }
