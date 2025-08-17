import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: ebs
export async function get_ebs<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/ebs', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_ebs<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/ebs', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function put_ebs_id_resize<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'PUT', path: `/ebs/${id}/resize`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_ebs_storage_id_destroy<T = unknown>(client: ApiClient, storage_id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/ebs/${storage_id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function put_ebs_storage_id_attach<T = unknown>(client: ApiClient, storage_id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'PUT', path: `/ebs/${storage_id}/attach`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function put_ebs_storage_id_dettach<T = unknown>(client: ApiClient, storage_id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'PUT', path: `/ebs/${storage_id}/dettach`, query: options?.query, body: options?.body, headers: options?.headers }); }
