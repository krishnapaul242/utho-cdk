export interface ApiClientConfig {
  baseUrl: string;
  apiKey?: string;
  timeoutMs?: number;
  userAgent?: string;
}

export interface ApiRequestOptions {
  method: string;
  path: string; // e.g. /v1/instances
  query?: Record<string, any>;
  headers?: Record<string, string>;
  body?: any;
}

export interface ApiResponse<T = any> {
  status: number;
  data: T;
  headers: Record<string, string>;
}
