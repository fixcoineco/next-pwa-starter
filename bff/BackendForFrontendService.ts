import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

/**
 * This is the client side service to interact with the service side
 * dedicated API (aka Backend for Frontend)
 */
export class BackendForFrontendService {
  // private http: Http;
  private baseUrl: string;

  constructor(req: IncomingMessage & { cookies: NextApiRequestCookies }) {
    const host = req.headers.host || "localhost:3000";
    const protocol = /^localhost|^0\.0\.0\.0|^127\.0\.0\.1/.test(host)
      ? "http"
      : "https";
    this.baseUrl = `${protocol}://${host}/api`;
  }

  async get<T>(url: string): Promise<T | undefined> {
    try {
      const endpoint = url.startsWith("/") ? url : url + "/";
      const response = await fetch(this.baseUrl + endpoint);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (e: any) {
      console.error(e);
      return;
    }
  }
}
