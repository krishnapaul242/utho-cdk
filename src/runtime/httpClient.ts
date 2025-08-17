import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface HttpClientOptions {
  baseURL: string;
  apiKey?: string;
  userAgent?: string;
  timeoutMs?: number;
}

export class HttpError extends Error {
  status?: number;
  data?: any;
  constructor(message: string, status?: number, data?: any) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.data = data;
  }
}

export class HttpClient {
  private instance: AxiosInstance;
  constructor(private opts: HttpClientOptions) {
    this.instance = axios.create({
      baseURL: opts.baseURL,
      timeout: opts.timeoutMs ?? 30_000,
      headers: {
  "User-Agent": opts.userAgent ?? "utho-cdk/0.1.0",
        ...(opts.apiKey ? { Authorization: `Bearer ${opts.apiKey}` } : {})
      }
    });

    this.instance.interceptors.response.use(
      (r) => r,
      (err) => {
        if (err.response) {
          const res: AxiosResponse = err.response;
          throw new HttpError(
            `Request failed with status ${res.status}`,
            res.status,
            res.data
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
