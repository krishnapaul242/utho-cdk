import { ApiClient } from '../runtime/client.js';
import { EndpointOptions } from './common.js';
// Auto-generated wrappers for segment: pricing
export async function get_pricing_objectstorage<T = unknown>(client: ApiClient, options?: EndpointOptions): Promise<T> { return client.request<T>({ method: 'GET', path: '/pricing/objectstorage', query: options?.query, body: options?.body, headers: options?.headers }); }
