import { Html } from "@elysiajs/html";

// Standalone shell shared by user-facing auth pages (login, register).
// Deliberately separate from the 3D Layout — see docs/decisions.md.
export const AuthLayout = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`Sentinel Global | ${title}`}</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        {`tailwind.config = { theme: { extend: { colors: { 'sentinel-accent': '#d4af37' } } } }`}
      </script>
    </head>
    <body class="bg-black min-h-screen flex items-center justify-center font-mono">
      <div class="w-full max-w-sm px-8 py-12">
        <a
          href="/"
          class="block mb-10 text-center text-sentinel-accent text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity"
        >
          ← Sentinel Global
        </a>
        {children}
      </div>
    </body>
  </html>
);
