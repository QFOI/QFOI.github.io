declare module "cloudflare:workers" {
  type D1Connection = Parameters<typeof import("drizzle-orm/d1").drizzle>[0];

  export const env: {
    DB?: D1Connection;
    [binding: string]: unknown;
  };
}
