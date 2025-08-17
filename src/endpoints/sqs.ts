import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: sqs
export async function get_sqs<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/sqs', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_sqs<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: '/sqs', query: options?.query, body: options?.body, headers: options?.headers }); }
export async function get_sqs_id<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: `/sqs/${id}`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function delete_sqs_sqs_id_destroy<T = unknown>(client: ApiClient, sqs_id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'DELETE', path: `/sqs/${sqs_id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers }); }
export async function post_sqs_id_queue<T = unknown>(client: ApiClient, id: string, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'POST', path: `/sqs/${id}/queue`, query: options?.query, body: options?.body, headers: options?.headers }); }
