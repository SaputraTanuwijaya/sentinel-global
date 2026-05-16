import { Html } from "@elysiajs/html";
import { MissionService } from "../services/MissionService";

const STATUS_LABEL: Record<string, string> = {
  authorized: "Authorized",
  in_progress: "In Progress",
  complete: "Complete",
  aborted: "Aborted",
};

const STATUS_CHIP: Record<string, string> = {
  authorized: "bg-blue-500/20 text-blue-300",
  in_progress: "bg-yellow-500/20 text-yellow-300",
  complete: "bg-green-500/20 text-green-300",
  aborted: "bg-red-500/20 text-red-300",
};

export const slugToLabel = (slug: string | null | undefined) => {
  if (!slug) return "—";
  return String(slug)
    .split(/[_-]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
};

export const formatMotorcade = (json: string | null | undefined) => {
  if (!json) return "—";
  try {
    const m = JSON.parse(json);
    const counts: Record<string, number> = {};
    Object.values(m).forEach((v: any) => {
      if (v && v.id !== "none") {
        counts[v.role] = (counts[v.role] || 0) + (Number(v.amount) || 0);
      }
    });
    const parts = Object.entries(counts).map(([role, n]) => `${n} ${role}`);
    return parts.length ? parts.join(" + ") : "—";
  } catch {
    return "—";
  }
};

const formatDate = (raw: string | null | undefined) => {
  if (!raw) return "—";
  // Turso CURRENT_TIMESTAMP → "YYYY-MM-DD HH:MM:SS"
  return String(raw).slice(0, 10);
};

const formatCost = (cents: number | null | undefined) =>
  cents == null ? "—" : `$${(Number(cents) / 100).toLocaleString()}`;

export const StatusSelect = ({
  id,
  status,
  target,
  swap,
  hxParams,
}: {
  id: string;
  status: string;
  target: string;
  swap: string;
  hxParams?: string;
}) => (
  <select
    name="status"
    class="bg-zinc-900 border border-white/10 text-xs tracking-widest uppercase px-2 py-1 rounded cursor-pointer hover:border-white/30"
    hx-post={`/admin/missions/${id}/status`}
    hx-trigger="change"
    hx-target={target}
    hx-swap={swap}
    hx-vals={hxParams}
  >
    {MissionService.ALLOWED_STATUS.map((s) => (
      <option value={s} selected={s === status}>
        {STATUS_LABEL[s]}
      </option>
    ))}
  </select>
);

export const StatusChip = ({ status }: { status: string }) => {
  const cls = STATUS_CHIP[status] ?? "bg-white/10 text-white";
  return (
    <span class={`px-2 py-1 ${cls} text-xs rounded tracking-widest uppercase`}>
      {STATUS_LABEL[status] ?? status}
    </span>
  );
};

export const MissionRow = ({ m }: { m: any }) => (
  <tr
    id={`mission-row-${m.id}`}
    class="border-b border-white/5 hover:bg-white/5 transition-colors"
  >
    <td class="p-4">
      <a
        href={`/admin/missions/${m.id}`}
        class="text-sentinel-accent hover:underline"
      >
        {m.id}
      </a>
    </td>
    <td class="p-4">{m.tier_name ?? "—"}</td>
    <td class="p-4">{m.principal_count ?? "—"}</td>
    <td class="p-4">{slugToLabel(m.dress_code_id)}</td>
    <td class="p-4">{m.duration_hours != null ? `${m.duration_hours}h` : "—"}</td>
    <td class="p-4 text-gray-300">{formatMotorcade(m.motorcade_json)}</td>
    <td class="p-4 text-green-400">{formatCost(m.total_cost_cents)}</td>
    <td class="p-4">
      <StatusSelect
        id={m.id}
        status={m.status}
        target="closest tr"
        swap="outerHTML"
      />
    </td>
    <td class="p-4 text-gray-500 text-xs">{formatDate(m.created_at)}</td>
  </tr>
);

export const MissionsTable = ({ missions }: { missions: any[] }) => (
  <div class="bg-zinc-950 border border-white/10 rounded overflow-hidden shadow-2xl">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-zinc-900 border-b border-white/10 text-xs tracking-widest text-gray-400 uppercase">
          <th class="p-4 font-normal">Mission ID</th>
          <th class="p-4 font-normal">Tier</th>
          <th class="p-4 font-normal">Principals</th>
          <th class="p-4 font-normal">Dress</th>
          <th class="p-4 font-normal">Duration</th>
          <th class="p-4 font-normal">Motorcade</th>
          <th class="p-4 font-normal">Cost</th>
          <th class="p-4 font-normal">Status</th>
          <th class="p-4 font-normal">Created</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        {missions.map((m) => (
          <MissionRow m={m} />
        ))}
        {missions.length === 0 && (
          <tr>
            <td
              colspan="9"
              class="p-8 text-center text-gray-500 tracking-widest"
            >
              No active deployments found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export const AdminError = ({ message }: { message: string }) => (
  <div class="bg-red-500/10 border border-red-500/30 rounded p-6">
    <p class="text-red-300 text-sm tracking-widest uppercase mb-1">
      Service unavailable
    </p>
    <p class="text-gray-400 text-xs">{message}</p>
  </div>
);

export const AdminDashboard = ({
  missions,
  error,
}: {
  missions: any[];
  error?: string | null;
}) => {
  return (
    <div class="max-w-6xl">
      <header class="mb-8 flex justify-between items-end">
        <div>
          <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
            Active Mission Ledger
          </h1>
          <p class="text-gray-500 text-xs tracking-widest uppercase mt-2">
            All deployments, newest first
          </p>
        </div>
        {!error && (
          <div class="text-xs text-gray-500 tracking-widest uppercase">
            Total Logs: {missions.length}
          </div>
        )}
      </header>

      {error ? <AdminError message={error} /> : <MissionsTable missions={missions} />}
    </div>
  );
};
