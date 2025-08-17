import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: iso
export async function get_iso<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/iso', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_iso_add<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/iso/add', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_iso_id_delete<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/iso/${id}/delete`, query: options?.query, body: options?.body, headers: options?.headers }); }
