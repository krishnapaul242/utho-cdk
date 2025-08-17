import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: vpc-route-table
export async function post_vpc_route_table<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/vpc-route-table', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_vpc_route_table<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: '/vpc-route-table', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_vpc_route_table<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/vpc-route-table', query: options?.query, body: options?.body, headers: options?.headers }); }
