const required = [
  "TURSO_DATABASE_URL",
  "TURSO_AUTH_TOKEN",
  "JWT_SECRET",
  "ADMIN_PASSWORD",
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
  NODE_ENV: process.env.NODE_ENV ?? "development",
};
