import { Html } from "@elysiajs/html";
import type { Formation, Slot } from "../../services/FormationService";
import { FORMATION_TIERS } from "../../services/FormationService";
import { ROLE_COLOR } from "./SlotEditor";

const STATUS_CHIP: Record<string, string> = {
  active: "bg-green-500/20 text-green-300",
  archived: "bg-zinc-700/40 text-gray-400",
};

const TIER_CHIP: Record<string, string> = {
  Vanguard: "bg-cyan-500/20 text-cyan-200",
  Sentinel: "bg-amber-500/20 text-amber-200",
  Praetorian: "bg-fuchsia-500/20 text-fuchsia-200",
};

const cardId = (id: string) => `formation-card-${id}`;

export type Flash = { kind: "success" | "error"; message: string };

// Card-mini SVG slot dot. Same `cy = depth - z` convention as SlotEditor
// so the miniature lines up with what the admin sees inside the editor.
const SlotDot = ({
  slot,
  canvas,
}: {
  slot: Slot;
  canvas: { width: number; depth: number };
}) => {
  const primary = slot.allowed_categories[0];
  const fill = primary ? ROLE_COLOR[primary] : "#94a3b8";
  const cy = canvas.depth - slot.z;
  // Dot radius scales with the larger canvas dimension so a long thin
  // canvas doesn't render invisibly small dots.
  const r = Math.max(canvas.width, canvas.depth) * 0.025;
  return (
    <circle
      cx={slot.x}
      cy={cy}
      r={r}
      fill={fill}
      stroke="rgba(0,0,0,0.6)"
      stroke-width={r * 0.15}
    />
  );
};

export const FormationCard = ({
  f,
  slotCount,
  slots,
}: {
  f: Formation;
  slotCount: number;
  /** Optional. When omitted the card renders the canvas-only miniature —
   *  same behaviour the legacy card had. Pass the real slots from the
   *  grid handler for the dots to show. */
  slots?: Slot[];
}) => {
  const isArchived = f.status === "archived";
  const canDefault = !!f.tier_id && !isArchived;
  return (
    <div
      id={cardId(f.id)}
      class={`bg-zinc-950 border ${
        f.is_default && !isArchived ? "border-amber-500/40" : "border-white/10"
      } rounded overflow-hidden flex flex-col ${isArchived ? "opacity-60" : ""}`}
    >
      <div class="aspect-[3/2] bg-gradient-to-br from-zinc-900 to-black border-b border-white/10 relative">
        <svg
          viewBox={`${-f.canvas_width / 2} 0 ${f.canvas_width} ${f.canvas_depth}`}
          preserveAspectRatio="xMidYMid meet"
          class="w-full h-full"
        >
          <rect
            x={-f.canvas_width / 2}
            y={0}
            width={f.canvas_width}
            height={f.canvas_depth}
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.08)"
            stroke-width={Math.max(f.canvas_width, f.canvas_depth) * 0.002}
          />
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={f.canvas_depth}
            stroke="rgba(255,255,255,0.05)"
            stroke-width={Math.max(f.canvas_width, f.canvas_depth) * 0.002}
            stroke-dasharray={`${f.canvas_depth * 0.02},${f.canvas_depth * 0.02}`}
          />
          {(slots ?? []).map((s) => (
            <SlotDot
              slot={s}
              canvas={{ width: f.canvas_width, depth: f.canvas_depth }}
            />
          ))}
        </svg>
        <div class="absolute top-2 left-3 text-[9px] tracking-widest uppercase text-gray-600">
          {f.canvas_width.toFixed(0)} × {f.canvas_depth.toFixed(0)} m
        </div>
        <div class="absolute bottom-2 right-3 text-[9px] tracking-widest uppercase text-gray-500">
          {slotCount} slot{slotCount === 1 ? "" : "s"}
        </div>
      </div>
      <div class="p-4 flex flex-col gap-3 flex-1">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="text-white text-sm font-bold">{f.label}</div>
            <div class="text-gray-500 text-[10px] tracking-widest uppercase mt-1">
              {f.id}
            </div>
          </div>
          <div class="flex flex-col items-end gap-1">
            {/* Lifecycle status — separate from "default in wizard". */}
            <span
              class={`px-2 py-1 ${STATUS_CHIP[f.status]} text-[10px] rounded tracking-widest uppercase`}
              title="Lifecycle. Archived formations disappear from the wizard regardless of default."
            >
              {f.status}
            </span>
            {f.tier_id && (
              <span
                class={`px-2 py-0.5 ${TIER_CHIP[f.tier_id] ?? "bg-white/10 text-gray-300"} text-[9px] rounded tracking-widest uppercase`}
              >
                {f.tier_id}
              </span>
            )}
          </div>
        </div>
        {f.description && (
          <p class="text-gray-400 text-xs line-clamp-3">{f.description}</p>
        )}

        {/* Default-per-tier row: the only thing that decides what guests
            see. Visually separate from the lifecycle chip above so the
            two concepts don't bleed together. */}
        <div class="flex items-center justify-between text-[10px] tracking-widest uppercase border-t border-white/5 pt-3">
          {f.is_default && !isArchived ? (
            <span
              class="px-2 py-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded"
              title="The wizard renders this formation for this tier."
            >
              ● Default for {f.tier_id}
            </span>
          ) : canDefault ? (
            <button
              type="button"
              class="text-gray-400 hover:text-amber-300 cursor-pointer"
              hx-patch={`/admin/formations/${f.id}/default`}
              hx-target={`#${cardId(f.id)}`}
              hx-swap="outerHTML"
              title={`Make this the formation the wizard renders for ${f.tier_id}.`}
            >
              Set as default
            </button>
          ) : (
            <span class="text-gray-600 normal-case tracking-normal italic">
              {isArchived
                ? "Reactivate to use in the wizard."
                : "Assign a tier to use this in the wizard."}
            </span>
          )}
        </div>

        <div class="mt-auto flex items-center justify-between text-[10px] tracking-widest uppercase">
          <div class="text-gray-500">{f.tier_id ?? "Unlinked"}</div>
          <div class="flex items-center gap-3">
            <a
              href={`/admin/formations/${f.id}`}
              class="text-sentinel-accent hover:text-white cursor-pointer"
            >
              Edit
            </a>
            {isArchived ? (
              <button
                type="button"
                class="text-gray-400 hover:text-green-300 cursor-pointer"
                hx-patch={`/admin/formations/${f.id}/reactivate`}
                hx-target={`#${cardId(f.id)}`}
                hx-swap="outerHTML"
              >
                Reactivate
              </button>
            ) : (
              <button
                type="button"
                class="text-gray-400 hover:text-red-300 cursor-pointer"
                hx-delete={`/admin/formations/${f.id}`}
                hx-target={`#${cardId(f.id)}`}
                hx-swap="outerHTML"
                hx-confirm={
                  f.is_default
                    ? "Archive this DEFAULT formation? Wizard will fall back to built-in layout for this tier until you pick a new default."
                    : "Archive this formation? It disappears from the wizard. Slots are preserved for history."
                }
              >
                Archive
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FormationsGrid = ({
  formations,
  slotCounts,
  slotsByFormation,
}: {
  formations: Formation[];
  slotCounts: Map<string, number>;
  /** Optional bulk slot map keyed by formation id. Passed from the GET
   *  /admin/formations handler so each card miniature can draw its dots
   *  without an N+1 round-trip. */
  slotsByFormation?: Map<string, Slot[]>;
}) => {
  return (
    <div class="max-w-6xl">
      <header class="mb-8 flex items-end justify-between">
        <div>
          <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
            Formations
          </h1>
          <p class="text-gray-500 text-xs tracking-widest uppercase mt-2">
            Top-down slot layouts for the motorcade canvas
          </p>
        </div>
        <a
          href="/admin/formations/new"
          class="px-4 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-sentinel-accent transition-colors cursor-pointer"
        >
          + New formation
        </a>
      </header>

      {formations.length === 0 ? (
        <div class="bg-zinc-950 border border-white/10 rounded p-12 text-center">
          <p class="text-gray-500 tracking-widest uppercase text-sm">
            No formations yet.
          </p>
          <a
            href="/admin/formations/new"
            class="inline-block mt-4 text-sentinel-accent hover:text-white text-xs tracking-widest uppercase cursor-pointer"
          >
            Create the first one →
          </a>
        </div>
      ) : (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {formations.map((f) => (
            <FormationCard
              f={f}
              slotCount={slotCounts.get(f.id) ?? 0}
              slots={slotsByFormation?.get(f.id) ?? []}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ─── create form ───────────────────────────────────────────────────────────

type CreateValues = {
  id?: string;
  label?: string;
  description?: string | null;
  tier_id?: string | null;
  canvas_width?: number;
  canvas_depth?: number;
};

export const FormationCreateForm = ({
  values,
  flash,
}: {
  values?: CreateValues;
  flash?: Flash;
}) => {
  const v = values ?? {};
  return (
    <div class="max-w-2xl">
      <header class="mb-6">
        <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
          New formation
        </h1>
        <p class="text-gray-500 text-xs tracking-widest uppercase mt-2">
          Define the canvas, then place slots in the editor
        </p>
      </header>

      <form
        id="formation-create-form"
        hx-post="/admin/formations"
        hx-target="this"
        hx-swap="outerHTML"
        class="bg-zinc-950 border border-white/10 rounded p-6 flex flex-col gap-5"
      >
        {flash && (
          <div
            class={`px-4 py-2 text-xs tracking-widest uppercase rounded ${
              flash.kind === "error"
                ? "bg-red-900/30 text-red-300 border border-red-500/30"
                : "bg-green-900/30 text-green-300 border border-green-500/30"
            }`}
          >
            {flash.message}
          </div>
        )}

        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            ID (slug) <span class="text-red-400">*</span>
          </span>
          <input
            name="id"
            type="text"
            required
            value={v.id ?? ""}
            placeholder="vanguard_default"
            pattern="[a-z][a-z0-9_-]{0,62}"
            title="Lowercase letters, digits, _ or -. Starts with a letter."
            class="bg-black border border-white/20 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none"
          />
          <span class="text-[10px] text-gray-600">
            Permanent. Used in URLs. Cannot be changed later.
          </span>
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Label <span class="text-red-400">*</span>
          </span>
          <input
            name="label"
            type="text"
            required
            maxlength="80"
            value={v.label ?? ""}
            placeholder="Vanguard Default"
            class="bg-black border border-white/20 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none"
          />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Description
          </span>
          <textarea
            name="description"
            rows="3"
            maxlength="2000"
            class="bg-black border border-white/20 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none resize-y"
          >
            {v.description ?? ""}
          </textarea>
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Tier
          </span>
          <select
            name="tier_id"
            class="bg-black border border-white/20 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none"
          >
            <option value="">Unlinked (no tier)</option>
            {FORMATION_TIERS.map((t) => (
              <option value={t} selected={v.tier_id === t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <div class="grid grid-cols-2 gap-4">
          <label class="flex flex-col gap-1">
            <span class="text-[10px] tracking-widest uppercase text-gray-400">
              Canvas width (m)
            </span>
            <input
              name="canvas_width"
              type="number"
              min="5"
              max="1000"
              step="1"
              value={String(v.canvas_width ?? 60)}
              class="bg-black border border-white/20 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none"
            />
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-[10px] tracking-widest uppercase text-gray-400">
              Canvas depth (m)
            </span>
            <input
              name="canvas_depth"
              type="number"
              min="5"
              max="1000"
              step="1"
              value={String(v.canvas_depth ?? 200)}
              class="bg-black border border-white/20 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none"
            />
          </label>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-white/10">
          <a
            href="/admin/formations"
            class="text-[10px] tracking-widest uppercase text-gray-500 hover:text-white cursor-pointer"
          >
            ← Cancel
          </a>
          <button
            type="submit"
            class="px-4 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-sentinel-accent transition-colors cursor-pointer"
          >
            Create &amp; open editor
          </button>
        </div>
      </form>
    </div>
  );
};
