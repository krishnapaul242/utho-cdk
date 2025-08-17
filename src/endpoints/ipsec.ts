import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: ipsec
export async function get_ipsec<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_ipsec<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_ipsec<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function put_ipsec<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'PUT', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers }); }
