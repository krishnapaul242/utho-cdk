import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: api
export async function get_api<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/api', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_api_generate<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/api/generate', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_api_id_delete<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/api/${id}/delete`, query: options?.query, body: options?.body, headers: options?.headers }); }
