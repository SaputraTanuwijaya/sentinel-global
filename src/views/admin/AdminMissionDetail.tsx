import { Html } from "@elysiajs/html";
import {
  StatusChip,
  StatusSelect,
  slugToLabel,
  formatMotorcade,
} from "../Admin";

const fmtCost = (cents: number | null | undefined) =>
  cents == null ? "—" : `$${(Number(cents) / 100).toLocaleString()}`;

const fmtDate = (raw: string | null | undefined) =>
  raw ? String(raw).slice(0, 19).replace("T", " ") : "—";

const fmtLatLng = (
  lat: number | null | undefined,
  lng: number | null | undefined,
) => {
  if (lat == null || lng == null) return "—";
  const a = Number(lat);
  const b = Number(lng);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return "—";
  return `${a.toFixed(4)}, ${b.toFixed(4)}`;
};

const Field = ({ label, children }: { label: string; children: any }) => (
  <div class="flex flex-col gap-1">
    <div class="text-[10px] tracking-widest uppercase text-gray-500">
      {label}
    </div>
    <div class="text-sm text-white">{children}</div>
  </div>
);

export const AdminMissionDetail = ({ mission }: { mission: any }) => {
  let motorcadeBreakdown: { role: string; count: number }[] = [];
  try {
    const m = JSON.parse(mission.motorcade_json || "{}");
    const counts: Record<string, number> = {};
    Object.values(m).forEach((v: any) => {
      if (v && v.id !== "none") {
        counts[v.role] = (counts[v.role] || 0) + (Number(v.amount) || 0);
      }
    });
    motorcadeBreakdown = Object.entries(counts).map(([role, count]) => ({
      role,
      count,
    }));
  } catch {
    /* noop */
  }

  return (
    <div class="max-w-4xl">
      <div class="mb-6">
        <a
          href="/admin/missions"
          class="text-xs text-gray-500 hover:text-sentinel-accent tracking-widest uppercase"
        >
          ← Back to missions
        </a>
      </div>

      <header class="mb-8 flex justify-between items-end">
        <div>
          <p class="text-xs tracking-widest uppercase text-gray-500 mb-1">
            Mission
          </p>
          <h1 class="text-3xl text-sentinel-accent tracking-[0.2em] uppercase font-bold">
            {mission.id}
          </h1>
        </div>
        <StatusChip status={mission.status} />
      </header>

      <section class="bg-zinc-950 border border-white/10 rounded p-6 grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <Field label="Operator">{mission.user_email ?? "—"}</Field>
        <Field label="Tier">{mission.tier_name ?? "—"}</Field>
        <Field label="Principals">{mission.principal_count ?? "—"}</Field>
        <Field label="Dress">{slugToLabel(mission.dress_code_id)}</Field>
        <Field label="Duration">
          {mission.duration_hours != null ? `${mission.duration_hours}h` : "—"}
        </Field>
        <Field label="Total cost">
          <span class="text-green-400">{fmtCost(mission.total_cost_cents)}</span>
        </Field>
        <Field label="Created">{fmtDate(mission.created_at)}</Field>
        <Field label="Rendezvous">{fmtDate(mission.rendezvous_at)}</Field>
        <Field label="Coordinates">{fmtLatLng(mission.location_lat, mission.location_lng)}</Field>
      </section>

      <section class="bg-zinc-950 border border-white/10 rounded p-6 mb-8">
        <h2 class="text-sm text-white tracking-[0.2em] uppercase font-bold mb-4">
          Motorcade
        </h2>
        {motorcadeBreakdown.length === 0 ? (
          <p class="text-gray-500 text-sm">No vehicles assigned.</p>
        ) : (
          <div class="flex flex-col gap-2">
            <p class="text-gray-300 text-sm">
              {formatMotorcade(mission.motorcade_json)}
            </p>
            <ul class="text-xs text-gray-500 tracking-widest uppercase mt-2 flex flex-col gap-1">
              {motorcadeBreakdown.map((b) => (
                <li>
                  {b.count} × {b.role}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section class="bg-zinc-950 border border-white/10 rounded p-6">
        <h2 class="text-sm text-white tracking-[0.2em] uppercase font-bold mb-4">
          Update status
        </h2>
        <div class="flex items-center gap-4">
          <StatusSelect
            id={mission.id}
            status={mission.status}
            target="#status-chip"
            swap="outerHTML"
            hxParams='js:{from: "detail"}'
          />
          <div id="status-chip">
            <StatusChip status={mission.status} />
          </div>
        </div>
        <p class="text-[10px] text-gray-600 tracking-widest uppercase mt-4">
          Saves on change. No reload required.
        </p>
      </section>
    </div>
  );
};
