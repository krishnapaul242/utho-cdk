import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: vpc-route
export async function get_vpc_route<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/vpc-route', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_vpc_route<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: '/vpc-route', query: options?.query, body: options?.body, headers: options?.headers }); }
