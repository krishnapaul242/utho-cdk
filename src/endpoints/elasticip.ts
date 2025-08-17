import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: elasticip
export async function get_elasticip<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/elasticip', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_elasticip_allocate<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/elasticip/allocate', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_elasticip_ip_address_deallocate<T = unknown>(client: ApiClient, ip_address: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: `/elasticip/${ip_address}/deallocate`, query: options?.query, body: options?.body, headers: options?.headers }); }
