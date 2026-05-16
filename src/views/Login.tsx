import { Html } from "@elysiajs/html";

export const LoginPage = ({ error }: { error?: string } = {}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sentinel Global | Overwatch Access</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        {`tailwind.config = { theme: { extend: { colors: { 'sentinel-accent': '#d4af37' } } } }`}
      </script>
    </head>
    <body class="bg-black min-h-screen flex items-center justify-center font-mono">
      <div class="w-full max-w-sm px-8">
        <div class="mb-10 text-center">
          <h1 class="text-2xl tracking-[0.3em] uppercase text-sentinel-accent font-bold">
            Overwatch
          </h1>
          <p class="text-gray-500 text-xs tracking-widest mt-2 uppercase">
            Restricted Access
          </p>
        </div>

        <form method="POST" action="/api/login" class="space-y-6">
          <div>
            <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
              Access Key
            </label>
            <input
              type="password"
              name="password"
              autofocus
              required
              class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm tracking-wider focus:outline-none focus:border-sentinel-accent/50 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p class="text-red-400 text-xs tracking-widest uppercase text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            class="w-full bg-white text-black text-xs font-bold tracking-widest uppercase py-3 hover:bg-sentinel-accent transition-colors"
          >
            Authenticate
          </button>
        </form>
      </div>
    </body>
  </html>
);
