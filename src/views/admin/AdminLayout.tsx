import { Html } from "@elysiajs/html";

type NavKey =
  | "dashboard"
  | "missions"
  | "dresscodes"
  | "vehicles"
  | "pricing"
  | "formations"
  | "assets";

type Props = {
  title: string;
  active?: NavKey;
  children?: any;
};

const NAV: { key: NavKey; href: string; label: string }[] = [
  { key: "dashboard",  href: "/admin",            label: "Dashboard" },
  { key: "missions",   href: "/admin/missions",   label: "Missions" },
  { key: "dresscodes", href: "/admin/dresscodes", label: "Dresscodes" },
  { key: "vehicles",   href: "/admin/vehicles",   label: "Vehicles" },
  { key: "pricing",    href: "/admin/pricing",    label: "Pricing" },
  { key: "formations", href: "/admin/formations", label: "Formations" },
  { key: "assets",     href: "/admin/assets",     label: "Assets" },
];

export const AdminLayout = ({ title, active, children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sentinel Global | {title}</title>
        <link rel="stylesheet" href="/public/styles.css" />
        <script src="/public/js/htmx.min.js"></script>
        {/* htmx v2 default skips 4xx swaps, so server-rendered error forms
            never reach the DOM and the user only sees a console error. We
            opt 4xx into swap-with-error so validation flashes render in
            place. Mirrors the same config block in the wizard Layout. */}
        <script>
          {`
            document.addEventListener('DOMContentLoaded', function () {
              if (window.htmx && window.htmx.config) {
                window.htmx.config.responseHandling = [
                  { code: '204', swap: false },
                  { code: '[23]..', swap: true },
                  { code: '[45]..', swap: true, error: true },
                  { code: '...', swap: false, error: true },
                ];
              }
            });
          `}
        </script>
      </head>
      <body class="bg-black text-white font-mono min-h-screen antialiased">
        <div class="flex min-h-screen">
          <aside class="w-60 shrink-0 border-r border-white/10 bg-zinc-950 flex flex-col">
            <div class="p-6 border-b border-white/10">
              <a
                href="/admin"
                class="block text-sentinel-accent text-lg tracking-[0.2em] uppercase font-bold"
              >
                Overwatch
              </a>
              <p class="text-[10px] text-gray-500 tracking-widest uppercase mt-1">
                Sentinel Global
              </p>
            </div>

            <nav class="flex flex-col p-3 gap-0.5 text-sm">
              {NAV.map((item) => {
                const isActive = item.key === active;
                const cls = isActive
                  ? "px-3 py-2 rounded bg-white/10 text-sentinel-accent tracking-widest uppercase text-xs"
                  : "px-3 py-2 rounded text-gray-400 hover:bg-white/5 hover:text-white tracking-widest uppercase text-xs transition-colors";
                return (
                  <a href={item.href} class={cls}>
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <form method="POST" action="/auth/logout" class="mt-auto p-6 border-t border-white/10">
              <button
                type="submit"
                class="text-xs tracking-widest uppercase text-gray-500 hover:text-sentinel-accent transition-colors cursor-pointer"
              >
                Logout
              </button>
            </form>
          </aside>

          <main class="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};
