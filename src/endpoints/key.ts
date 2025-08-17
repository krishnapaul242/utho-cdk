import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: key
export async function get_key<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/key', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_key_import<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/key/import', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_key_id_delete<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/key/${id}/delete`, query: options?.query, body: options?.body, headers: options?.headers }); }
