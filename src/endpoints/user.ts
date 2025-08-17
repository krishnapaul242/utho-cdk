import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: user
export async function get_user<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/user', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_user<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/user', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_user_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: `/user/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function put_user_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'PUT', path: `/user/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_user_subuser_id<T = unknown>(client: ApiClient, subuser_id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/user/${subuser_id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
