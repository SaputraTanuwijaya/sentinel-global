import Elysia from "elysia";
import { jwt } from "@elysiajs/jwt";
import { env } from "./env";

// Named plugin so Elysia deduplicates when used in multiple scopes
export const jwtPlugin = new Elysia({ name: "jwt-plugin" }).use(
  jwt({ name: "jwt", secret: env.JWT_SECRET }),
);

// beforeHandle guard — redirect to /login if cookie missing or invalid
export const requireAdmin = async ({ jwt, cookie, set }: any) => {
  const token = cookie.auth?.value;
  if (!token) {
    set.redirect = "/login";
    return;
  }
  const payload = await jwt.verify(token);
  if (!payload || payload.sub !== "admin") {
    set.redirect = "/login";
  }
};
