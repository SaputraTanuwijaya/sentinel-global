const required = [
  "TURSO_DATABASE_URL",
  "TURSO_AUTH_TOKEN",
  "JWT_SECRET",
  "ADMIN_PASSWORD",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
] as const;

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

export const env = {
  TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL!,
  TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN!,
  JWT_SECRET: process.env.JWT_SECRET!,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  // Defaulted for local dev; override in prod
  OAUTH_REDIRECT_URL:
    process.env.OAUTH_REDIRECT_URL ??
    "http://localhost:3000/auth/google/callback",
  NODE_ENV: process.env.NODE_ENV ?? "development",
};
