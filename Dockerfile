# syntax=docker/dockerfile:1.7

# ── Stage 1: build ──────────────────────────────────────────────────────────
# Full image carries the toolchain (tailwindcss CLI, bun bundler) needed for
# `bun run build`. Dev deps are pruned before copying node_modules forward.
FROM oven/bun:1 AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# Re-resolve with --production so the runtime stage gets a slim node_modules
# (drops @tailwindcss/cli, @types/*, tailwindcss, typescript).
RUN rm -rf node_modules && bun install --frozen-lockfile --production


# ── Stage 2: runtime ────────────────────────────────────────────────────────
# Debian-slim, not alpine: @libsql/client ships glibc prebuilds; alpine/musl
# can fall back to a source build and hang the image. Slim keeps size sane
# without the musl risk.
FROM oven/bun:1-slim
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Drop the embedded bun user's shell; nothing here needs root.
USER bun

COPY --from=builder --chown=bun:bun /app/node_modules ./node_modules
COPY --from=builder --chown=bun:bun /app/src ./src
COPY --from=builder --chown=bun:bun /app/package.json ./
# Bun reads tsconfig.json at runtime for the JSX factory (Html.createElement);
# without it, JSX falls back to React's automatic runtime and the server
# crashes on boot with "Cannot find module 'react/jsx-runtime'".
COPY --from=builder --chown=bun:bun /app/tsconfig.json ./

EXPOSE 3000
CMD ["bun", "run", "src/index.tsx"]
