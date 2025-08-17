import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: registry
export async function get_registry_projects<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/registry/projects', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_registry<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/registry', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_registry<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/registry', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_registry_project_registry_name<T = unknown>(client: ApiClient, registry_name: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/registry/project/${registry_name}`, query: options?.query, body: options?.body, headers: options?.headers }); }
