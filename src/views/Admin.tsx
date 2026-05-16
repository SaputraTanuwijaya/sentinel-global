import { Html } from "@elysiajs/html";

export const AdminDashboard = ({ missions }: { missions: any[] }) => {
  return (
    <div class="min-h-screen bg-black text-white p-8 font-mono pointer-events-auto relative z-50">
      <div class="max-w-6xl mx-auto">
        <header class="mb-12 border-b border-white/20 pb-4 flex justify-between items-end">
          <div>
            <h1 class="text-3xl text-sentinel-accent tracking-[0.2em] uppercase font-bold">
              Overwatch
            </h1>
            <p class="text-gray-400 text-sm tracking-widest mt-2">
              Active Mission Ledger
            </p>
          </div>
          <div class="flex items-center gap-6">
            <div class="text-sm text-gray-500 tracking-widest">
              Total Logs: {missions.length}
            </div>
            <form method="POST" action="/auth/logout">
              <button
                type="submit"
                class="text-xs tracking-widest uppercase text-gray-500 hover:text-sentinel-accent transition-colors cursor-pointer"
              >
                Logout
              </button>
            </form>
          </div>
        </header>

        <div class="bg-zinc-950 border border-white/10 rounded overflow-hidden shadow-2xl">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-zinc-900 border-b border-white/10 text-xs tracking-widest text-gray-400 uppercase">
                <th class="p-4 font-normal">Mission ID</th>
                <th class="p-4 font-normal">Tier</th>
                <th class="p-4 font-normal">Principals</th>
                <th class="p-4 font-normal">Cost</th>
                <th class="p-4 font-normal">Status</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              {missions.map((m) => (
                <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td class="p-4 text-sentinel-accent">{m.id}</td>
                  <td class="p-4">{m.tier_name}</td>
                  <td class="p-4">{m.principal_count}</td>
                  <td class="p-4 text-green-400">
                    ${(m.total_cost_cents / 100).toLocaleString()}
                  </td>
                  <td class="p-4">
                    <span class="px-2 py-1 bg-white/10 text-xs rounded tracking-widest">
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
              {missions.length === 0 && (
                <tr>
                  <td
                    colspan="5"
                    class="p-8 text-center text-gray-500 tracking-widest"
                  >
                    No active deployments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
