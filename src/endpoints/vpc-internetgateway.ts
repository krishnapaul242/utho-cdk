import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: vpc-internetgateway
export async function post_vpc_internetgateway<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/vpc-internetgateway', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_vpc_internetgateway<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: '/vpc-internetgateway', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_vpc_internetgateway<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/vpc-internetgateway', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_vpc_internetgateway_id_attach<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: `/vpc-internetgateway/${id}/attach`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_vpc_internetgateway_234236_dettach<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/vpc-internetgateway/234236/dettach', query: options?.query, body: options?.body, headers: options?.headers }); }
