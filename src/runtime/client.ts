import { HttpClient } from "./httpClient.js";
import { ApiClientConfig, ApiRequestOptions } from "./types.js";

export class ApiClient {
  private http: HttpClient;
  constructor(private cfg: ApiClientConfig) {
    this.http = new HttpClient({
      baseURL: cfg.baseUrl,
      apiKey: cfg.apiKey,
      timeoutMs: cfg.timeoutMs,
      userAgent: cfg.userAgent
    });
  }

  async request<T>(opts: ApiRequestOptions): Promise<T> {
    const url = this.interpolatePath(opts.path);
    const method = opts.method.toUpperCase();
    return this.http.request<T>({
      url,
      method: method as any,
      params: opts.query,
      headers: opts.headers,
      data: opts.body
    });
  }

  private interpolatePath(path: string): string {
    return path; // Placeholder for templating path params
  }
}
