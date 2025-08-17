import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface HttpClientOptions {
  baseURL: string;
  apiKey?: string;
  userAgent?: string;
  timeoutMs?: number;
  /** Enable verbose request/response logging */
  debug?: boolean;
}

export class HttpError extends Error {
  status?: number;
  data?: any;
  headers?: Record<string, any>;
  constructor(message: string, status?: number, data?: any, headers?: Record<string, any>) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.data = data;
    this.headers = headers;
  }
}

export class HttpClient {
  private instance: AxiosInstance;
  constructor(private opts: HttpClientOptions) {
    const debug = opts.debug || process.env.CLOUD_DEBUG === '1';
    this.instance = axios.create({
      baseURL: opts.baseURL,
      timeout: opts.timeoutMs ?? 30_000,
      headers: {
        "User-Agent": opts.userAgent ?? "utho-cdk/0.1.0",
  // Default to JSON responses unless overridden per-request
  Accept: 'application/json',
        ...(opts.apiKey ? { Authorization: `Bearer ${opts.apiKey}` } : {})
      }
    });

    if (debug) {
      this.instance.interceptors.request.use((config) => {
        const { method, url, params, data, headers } = config;
        const safeHeaders = { ...headers } as Record<string, any>;
        if (safeHeaders.Authorization) {
          safeHeaders.Authorization = safeHeaders.Authorization.replace(/Bearer (.+)/, 'Bearer ***');
        }
        // eslint-disable-next-line no-console
        console.error('[cloudctl][request]', method?.toUpperCase(), url, { params, data, headers: safeHeaders });
        return config;
      });
    }

    this.instance.interceptors.response.use(
      (r) => {
        if (debug) {
          // eslint-disable-next-line no-console
          console.error('[cloudctl][response]', r.status, r.config.url);
        }
        return r;
      },
      (err) => {
        if (err.response) {
          const res: AxiosResponse = err.response;
          if (debug) {
            // eslint-disable-next-line no-console
            console.error('[cloudctl][response][error]', res.status, res.config.url, res.data);
          }
          throw new HttpError(
            `Request failed with status ${res.status}`,
            res.status,
            res.data,
            res.headers as any
          );
        }
        if (err.request) {
          throw new HttpError("No response received", undefined, undefined);
        }
        throw err;
      }
    );
  }

  async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    const res = await this.instance.request<T>(config);
    return res.data;
  }
}
