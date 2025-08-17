import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: stacks
export async function post_stacks<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/stacks', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_stacks<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/stacks', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function put_stacks_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'PUT', path: `/stacks/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_stacks_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/stacks/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
