import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: certificates
export async function post_certificates<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/certificates', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_certificates<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/certificates', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_certificates_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/certificates/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
