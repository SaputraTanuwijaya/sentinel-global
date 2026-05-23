import { Html } from "@elysiajs/html";
import type {
  Formation,
  FormationWithSlots,
  Slot,
} from "../../services/FormationService";
import { FORMATION_TIERS } from "../../services/FormationService";
import {
  VEHICLE_CATEGORIES,
  type VehicleCategory,
} from "../../services/VehicleService";

// Single source of truth for role → swatch. Kept in sync with the legend in
// Motorcade.tsx so the editor and the wizard "speak" the same colours.
export const ROLE_COLOR: Record<VehicleCategory, string> = {
  PRINCIPAL: "#eab308",
  LEAD: "#94a3b8",
  REAR: "#3b82f6",
  SWEEPER: "#06b6d4",
  CAT: "#ef4444",
  ECM: "#a855f7",
};

const SLOT_W = 2.5; // metres — visual rectangle width
const SLOT_L = 5.0; // metres — visual rectangle length

export type Flash = { kind: "success" | "error"; message: string };

const slotDomId = (id: string) => `slot-${id}`;

// ─── single slot fragment (returned by HTMX POST/PATCH) ────────────────────

export const SlotFragment = ({
  slot,
  depth,
  selected,
}: {
  slot: Slot;
  depth: number;
  selected?: boolean;
}) => {
  const primary = slot.allowed_categories[0] ?? "LEAD";
  const fill = ROLE_COLOR[primary] ?? "#94a3b8";
  // y axis is flipped (SVG y grows downward), so on-screen +Z (forward) lives
  // at smaller screen-y. Compass-style rotation matches CW-on-screen when the
  // y axis is flipped — same as map bearings.
  const cy = depth - slot.z;
  const transform = `translate(${slot.x} ${cy}) rotate(${slot.rotation_deg})`;
  return (
    <g
      id={slotDomId(slot.id)}
      data-slot-id={slot.id}
      data-x={slot.x}
      data-z={slot.z}
      data-rotation={slot.rotation_deg}
      data-categories={JSON.stringify(slot.allowed_categories)}
      data-label={slot.label ?? ""}
      class={`slot cursor-grab ${selected ? "slot-selected" : ""}`}
      transform={transform}
    >
      {/* footprint */}
      <rect
        x={-SLOT_W / 2}
        y={-SLOT_L / 2}
        width={SLOT_W}
        height={SLOT_L}
        rx={0.4}
        fill={fill}
        fill-opacity={0.35}
        stroke={fill}
        stroke-width={0.15}
      />
      {/* forward arrow (points toward -y after rotate, i.e. compass-up) */}
      <polygon
        points={`0,${-SLOT_L / 2 - 0.6} ${-0.7},${-SLOT_L / 2 + 0.2} ${0.7},${-SLOT_L / 2 + 0.2}`}
        fill={fill}
        fill-opacity={0.9}
      />
      {/* selection ring (toggled by client) */}
      <rect
        class="slot-ring"
        x={-SLOT_W / 2 - 0.4}
        y={-SLOT_L / 2 - 0.4}
        width={SLOT_W + 0.8}
        height={SLOT_L + 0.8}
        rx={0.6}
        fill="none"
        stroke="#ffffff"
        stroke-width={selected ? 0.2 : 0}
        stroke-dasharray="0.4,0.3"
      />
      {/* label — kept upright by counter-rotating */}
      {slot.label && (
        <text
          x={0}
          y={0}
          text-anchor="middle"
          dominant-baseline="central"
          font-size={1.4}
          fill="#ffffff"
          fill-opacity={0.85}
          transform={`rotate(${-slot.rotation_deg})`}
          style="pointer-events:none; font-family: monospace;"
        >
          {slot.label}
        </text>
      )}
    </g>
  );
};

// Multiple slot fragments at once — used after metadata changes that may
// shift z→y conversion (e.g. canvas_depth resized).
export const SlotLayer = ({
  formation,
}: {
  formation: FormationWithSlots;
}) => (
  <g id="slots-layer">
    {formation.slots.map((s) => (
      <SlotFragment slot={s} depth={formation.canvas_depth} />
    ))}
  </g>
);

// ─── grid + canvas background ──────────────────────────────────────────────

const CanvasBackground = ({ f }: { f: Formation }) => {
  // Major gridline every 10 m, minor every 2 m. Tiny stroke widths so the
  // canvas looks like graph paper at any zoom level.
  const w = f.canvas_width;
  const d = f.canvas_depth;
  const major = 10;
  const minor = 2;
  const lines: any[] = [];
  for (let x = -w / 2; x <= w / 2 + 0.01; x += minor) {
    const isMajor = Math.abs(x % major) < 0.01;
    lines.push(
      <line
        x1={x}
        y1={0}
        x2={x}
        y2={d}
        stroke={isMajor ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.04)"}
        stroke-width={isMajor ? 0.08 : 0.04}
      />,
    );
  }
  for (let y = 0; y <= d + 0.01; y += minor) {
    const isMajor = Math.abs(y % major) < 0.01;
    lines.push(
      <line
        x1={-w / 2}
        y1={y}
        x2={w / 2}
        y2={y}
        stroke={isMajor ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.04)"}
        stroke-width={isMajor ? 0.08 : 0.04}
      />,
    );
  }
  return (
    <g id="canvas-bg">
      <rect
        x={-w / 2}
        y={0}
        width={w}
        height={d}
        fill="#000000"
      />
      <g>{lines}</g>
      {/* travel-direction centerline */}
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={d}
        stroke="rgba(255,255,255,0.12)"
        stroke-width={0.1}
        stroke-dasharray="0.6,0.4"
      />
      {/* forward arrow at top */}
      <polygon
        points={`0,0.5 -1.5,3 1.5,3`}
        fill="rgba(255,255,255,0.25)"
      />
      <text
        x={0}
        y={5}
        text-anchor="middle"
        font-size={1.2}
        fill="rgba(255,255,255,0.4)"
        style="font-family: monospace;"
      >
        FORWARD (+Z)
      </text>
    </g>
  );
};

// ─── metadata settings panel ───────────────────────────────────────────────

export const SettingsPanel = ({
  f,
  flash,
}: {
  f: Formation;
  flash?: Flash;
}) => {
  return (
    <form
      id="formation-settings"
      hx-patch={`/admin/formations/${f.id}`}
      hx-target="this"
      hx-swap="outerHTML"
      class="bg-zinc-950 border border-white/10 rounded p-4 flex flex-col gap-3"
    >
      {flash && (
        <div
          class={`px-3 py-1.5 text-[11px] tracking-widest uppercase rounded ${
            flash.kind === "error"
              ? "bg-red-900/30 text-red-300 border border-red-500/30"
              : "bg-green-900/30 text-green-300 border border-green-500/30"
          }`}
        >
          {flash.message}
        </div>
      )}
      <div class="flex items-end gap-3 flex-wrap">
        <div class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-500">
            ID
          </span>
          <span class="text-xs text-gray-300 font-mono px-2 py-1.5 bg-black border border-white/10 rounded">
            {f.id}
          </span>
        </div>
        <label class="flex flex-col gap-1 flex-1 min-w-[200px]">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Label
          </span>
          <input
            name="label"
            type="text"
            required
            maxlength="80"
            value={f.label}
            class="bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none"
          />
        </label>
        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Tier
          </span>
          <select
            name="tier_id"
            class="bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none"
          >
            <option value="">Unlinked</option>
            {FORMATION_TIERS.map((t) => (
              <option value={t} selected={f.tier_id === t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Width (m)
          </span>
          <input
            name="canvas_width"
            type="number"
            min="5"
            max="1000"
            step="1"
            value={String(f.canvas_width)}
            class="w-24 bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none"
          />
        </label>
        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Depth (m)
          </span>
          <input
            name="canvas_depth"
            type="number"
            min="5"
            max="1000"
            step="1"
            value={String(f.canvas_depth)}
            class="w-24 bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none"
          />
        </label>
        <label class="flex flex-col gap-1">
          <span class="text-[10px] tracking-widest uppercase text-gray-400">
            Status
          </span>
          <select
            name="status"
            class="bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none"
          >
            <option value="active" selected={f.status === "active"}>
              Active
            </option>
            <option value="archived" selected={f.status === "archived"}>
              Archived
            </option>
          </select>
        </label>
        <button
          type="submit"
          class="px-3 py-1.5 bg-white text-black text-[11px] font-bold tracking-widest uppercase hover:bg-sentinel-accent transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>
      <label class="flex flex-col gap-1">
        <span class="text-[10px] tracking-widest uppercase text-gray-400">
          Description
        </span>
        <textarea
          name="description"
          rows="2"
          maxlength="2000"
          class="bg-black border border-white/20 text-white text-xs px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none resize-y"
        >
          {f.description ?? ""}
        </textarea>
      </label>
    </form>
  );
};

// ─── activation banner (top of editor) ─────────────────────────────────────
//
// Single source of "is this formation actually live in the wizard?" — gates
// the three states an admin can be in:
//   • is_default + tier  → green active chip + "stop using" link
//   • tier, not default  → amber "not active" + one-click activate
//   • no tier            → amber "no tier" + tier picker + activate
//
// Everything flows through POST /admin/formations/:id/activate, which
// applies the tier (if needed) and the default flag in one round-trip. The
// server returns HX-Refresh so the settings panel + activation banner both
// re-render coherently rather than us OOB-swapping multiple fragments.

export const ActivationBanner = ({ f }: { f: Formation }) => {
  const isArchived = f.status === "archived";

  if (isArchived) {
    return (
      <div class="mb-4 px-4 py-3 rounded border border-zinc-700/60 bg-zinc-900/40 flex items-center justify-between">
        <div class="text-[11px] tracking-widest uppercase text-gray-400">
          Archived — wizard ignores archived formations. Reactivate to use.
        </div>
      </div>
    );
  }

  if (f.is_default && f.tier_id) {
    return (
      <div class="mb-4 px-4 py-3 rounded border border-green-500/40 bg-green-500/10 flex items-center justify-between flex-wrap gap-3">
        <div class="flex items-center gap-3">
          <span class="text-[11px] tracking-widest uppercase text-green-300 font-bold">
            ● Active in wizard for {f.tier_id}
          </span>
          <span class="text-[10px] tracking-widest uppercase text-gray-500">
            Guests on the {f.tier_id} tier see this layout.
          </span>
        </div>
        <span class="text-[10px] tracking-widest uppercase text-gray-500 italic">
          To swap, activate a different formation for {f.tier_id}.
        </span>
      </div>
    );
  }

  // Either no tier, or has tier but isn't the default. Both render the
  // same one-form widget — the tier select is pre-set when known, free
  // when not. POST handles the "set tier + activate" combo server-side.
  //
  // Layout: status text on top, controls row below. Vertical stack
  // guarantees the Activate button is always visible regardless of
  // viewport width — the previous side-by-side layout clipped the button
  // when the select's natural width pushed the right group off-screen.
  return (
    <form
      class="mb-4 px-4 py-3 rounded border border-amber-500/40 bg-amber-500/10 flex flex-col gap-3"
      hx-post={`/admin/formations/${f.id}/activate`}
      hx-swap="none"
    >
      <div class="flex items-baseline gap-3 flex-wrap">
        <span class="text-[11px] tracking-widest uppercase text-amber-300 font-bold whitespace-nowrap">
          ○ Not active in wizard
        </span>
        <span class="text-[10px] tracking-widest uppercase text-gray-400">
          {f.tier_id
            ? `Activate to replace the current ${f.tier_id} default.`
            : "Pick a tier, then activate to make this the wizard layout for that tier."}
        </span>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <label class="text-[10px] tracking-widest uppercase text-gray-400 shrink-0">
          Tier:
        </label>
        <select
          name="tier_id"
          required
          class="bg-black border border-white/20 text-white text-xs px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none min-w-[140px]"
        >
          {!f.tier_id && (
            <option value="" selected disabled>
              Pick…
            </option>
          )}
          {FORMATION_TIERS.map((t) => (
            <option value={t} selected={f.tier_id === t}>
              {t}
            </option>
          ))}
        </select>
        <button
          type="submit"
          class="px-4 py-1.5 bg-amber-500 text-black text-[10px] font-bold tracking-widest uppercase hover:bg-amber-400 transition-colors cursor-pointer shrink-0"
        >
          Activate
        </button>
      </div>
    </form>
  );
};

// ─── legend / palette (no-selection sidebar) ───────────────────────────────

const Legend = () => (
  <div class="flex flex-col gap-3">
    <div class="text-[10px] tracking-widest uppercase text-gray-500">
      Role palette
    </div>
    <div class="grid grid-cols-2 gap-1.5">
      {VEHICLE_CATEGORIES.map((c) => (
        <div class="flex items-center gap-2 text-[11px] text-gray-300">
          <span
            class="w-3 h-3 rounded-sm"
            style={`background:${ROLE_COLOR[c]};opacity:0.6;border:1px solid ${ROLE_COLOR[c]}`}
          ></span>
          <span class="tracking-widest uppercase">{c}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── main editor page ──────────────────────────────────────────────────────

export const SlotEditorPage = ({
  formation,
  flash,
}: {
  formation: FormationWithSlots;
  flash?: Flash;
}) => {
  const w = formation.canvas_width;
  const d = formation.canvas_depth;
  const viewBox = `${-w / 2 - 4} ${-4} ${w + 8} ${d + 8}`;

  return (
    <div class="max-w-[1600px]">
      <header class="mb-4 flex items-center justify-between">
        <div>
          <div class="flex items-center gap-3 text-xs tracking-widest uppercase text-gray-500">
            <a
              href="/admin/formations"
              class="hover:text-white cursor-pointer"
            >
              ← Formations
            </a>
            <span>/</span>
            <span class="text-gray-300">{formation.id}</span>
          </div>
          <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold mt-2">
            {formation.label}
          </h1>
        </div>
        <div class="text-[10px] tracking-widest uppercase text-gray-500 text-right leading-relaxed">
          Click empty to add · Drag to move · R to rotate · Del to delete
          <br />
          Wheel zoom · Middle/right (or Space) drag = pan · 0 = fit · Alt = no snap
        </div>
      </header>

      <ActivationBanner f={formation} />

      <SettingsPanel f={formation} flash={flash} />

      <div class="mt-4 grid grid-cols-[1fr_320px] gap-4">
        {/* Canvas */}
        <div
          id="slot-editor-canvas"
          class="bg-zinc-950 border border-white/10 rounded overflow-hidden relative"
          data-formation-id={formation.id}
          data-canvas-width={w}
          data-canvas-depth={d}
        >
          <svg
            id="slot-editor-svg"
            viewBox={viewBox}
            data-initial-viewbox={viewBox}
            preserveAspectRatio="xMidYMid meet"
            class="w-full h-full block select-none touch-none"
            style="aspect-ratio: auto; min-height: 70vh; max-height: 80vh;"
          >
            <CanvasBackground f={formation} />
            <SlotLayer formation={formation} />
          </svg>

          {/* Zoom + snap controls (positioned over the canvas, bottom-right) */}
          <div
            id="slot-editor-zoom-controls"
            class="absolute bottom-3 right-3 z-20 flex items-center gap-1 bg-black/70 border border-white/15 rounded backdrop-blur-sm text-xs"
          >
            <button
              type="button"
              id="zoom-out"
              title="Zoom out (-)"
              class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              −
            </button>
            <span
              id="zoom-readout"
              class="px-2 min-w-[56px] text-center tabular-nums text-gray-400 tracking-wider"
            >
              100%
            </span>
            <button
              type="button"
              id="zoom-in"
              title="Zoom in (+)"
              class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              +
            </button>
            <button
              type="button"
              id="zoom-fit"
              title="Fit canvas (0)"
              class="px-2 h-8 flex items-center justify-center text-[10px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-l border-white/15"
            >
              Fit
            </button>
            <button
              type="button"
              id="snap-toggle"
              title="Snap to grid — click to cycle off / 0.5 / 1 / 2 / 5 m. Hold Alt while dragging to disable."
              class="px-2 h-8 flex items-center gap-1 text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors cursor-pointer border-l border-white/15"
            >
              <span
                id="snap-indicator"
                class="w-1.5 h-1.5 rounded-full bg-gray-600"
              ></span>
              <span class="text-gray-400">Snap</span>
              <span id="snap-readout" class="text-sentinel-accent tabular-nums">
                1m
              </span>
            </button>
          </div>

          {/* Pan-mode hint overlay (toggled by client when Space is held) */}
          <div
            id="slot-editor-pan-hint"
            class="absolute top-3 left-3 z-20 hidden bg-sentinel-accent/20 border border-sentinel-accent/40 text-sentinel-accent text-[10px] tracking-widest uppercase px-2 py-1 rounded backdrop-blur-sm"
          >
            Pan mode — drag to move view
          </div>

          {/* Add-slot popover (positioned by client, hidden by default) */}
          <div
            id="slot-add-popover"
            class="absolute hidden bg-black border border-white/20 rounded shadow-xl p-3 z-30 w-56"
            style="left:0;top:0;"
          >
            <div class="text-[10px] tracking-widest uppercase text-gray-400 mb-2">
              Allowed roles
            </div>
            <div class="grid grid-cols-2 gap-1 mb-3">
              {VEHICLE_CATEGORIES.map((c) => (
                <label class="flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="add-role"
                    value={c}
                    class="accent-white"
                  />
                  <span class="tracking-widest uppercase">{c}</span>
                </label>
              ))}
            </div>
            <div class="flex items-center justify-between gap-2">
              <button
                type="button"
                id="slot-add-cancel"
                class="text-[10px] tracking-widest uppercase text-gray-500 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                id="slot-add-confirm"
                class="px-3 py-1.5 bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-sentinel-accent transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Add slot
              </button>
            </div>
            <p
              id="slot-add-error"
              class="hidden text-[10px] text-red-300 mt-2 tracking-wide"
            ></p>
          </div>
        </div>

        {/* Sidebar */}
        <aside class="flex flex-col gap-4">
          <div
            id="slot-sidebar-empty"
            class="bg-zinc-950 border border-white/10 rounded p-4 flex flex-col gap-4"
          >
            <div class="text-[10px] tracking-widest uppercase text-gray-500">
              No slot selected
            </div>
            <p class="text-gray-400 text-xs leading-relaxed">
              Click an empty grid cell to add a slot, or click an existing
              slot to edit it.
            </p>
            <Legend />
            <div class="border-t border-white/5 pt-3 text-[10px] tracking-widest uppercase text-gray-600">
              {formation.slots.length} slot
              {formation.slots.length === 1 ? "" : "s"} ·{" "}
              {w.toFixed(0)} × {d.toFixed(0)} m
            </div>
          </div>

          {/* Detail form — controlled by client, prefilled when a slot is
              selected. PATCHes the selected slot's individual fields; the
              client wires hx-* attrs at selection time. */}
          <div
            id="slot-sidebar-detail"
            class="hidden bg-zinc-950 border border-white/10 rounded p-4 flex flex-col gap-4"
          >
            <div class="flex items-center justify-between">
              <div class="text-[10px] tracking-widest uppercase text-gray-500">
                Slot{" "}
                <span id="slot-detail-id" class="text-gray-400 font-mono"></span>
              </div>
              <button
                type="button"
                id="slot-detail-deselect"
                class="text-[10px] tracking-widest uppercase text-gray-500 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <label class="flex flex-col gap-1">
              <span class="text-[10px] tracking-widest uppercase text-gray-400">
                Label
              </span>
              <input
                id="slot-detail-label"
                type="text"
                maxlength="32"
                class="bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded focus:border-sentinel-accent focus:outline-none"
              />
            </label>

            <div class="flex flex-col gap-1">
              <span class="text-[10px] tracking-widest uppercase text-gray-400">
                Allowed roles
              </span>
              <div id="slot-detail-roles" class="grid grid-cols-2 gap-1">
                {VEHICLE_CATEGORIES.map((c) => (
                  <label class="flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer">
                    <input
                      type="checkbox"
                      name="detail-role"
                      value={c}
                      class="accent-white"
                    />
                    <span class="tracking-widest uppercase">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <label class="flex flex-col gap-1">
                <span class="text-[10px] tracking-widest uppercase text-gray-400">
                  X (m)
                </span>
                <input
                  id="slot-detail-x"
                  type="number"
                  step="0.5"
                  class="bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded tabular-nums focus:border-sentinel-accent focus:outline-none"
                />
              </label>
              <label class="flex flex-col gap-1">
                <span class="text-[10px] tracking-widest uppercase text-gray-400">
                  Z (m)
                </span>
                <input
                  id="slot-detail-z"
                  type="number"
                  step="0.5"
                  class="bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded tabular-nums focus:border-sentinel-accent focus:outline-none"
                />
              </label>
              <label class="flex flex-col gap-1">
                <span class="text-[10px] tracking-widest uppercase text-gray-400">
                  Rot°
                </span>
                <input
                  id="slot-detail-rotation"
                  type="number"
                  step="15"
                  min="0"
                  max="360"
                  class="bg-black border border-white/20 text-white text-sm px-2 py-1.5 rounded tabular-nums focus:border-sentinel-accent focus:outline-none"
                />
              </label>
            </div>

            <p
              id="slot-detail-error"
              class="hidden text-[10px] text-red-300 tracking-wide"
            ></p>

            <button
              type="button"
              id="slot-detail-delete"
              class="mt-2 px-3 py-1.5 border border-red-500/40 text-red-300 text-[10px] tracking-widest uppercase hover:bg-red-500/20 transition-colors cursor-pointer"
            >
              Delete slot
            </button>
          </div>
        </aside>
      </div>

      <style>{`
        .slot rect:first-of-type { transition: fill-opacity 120ms ease; }
        .slot:hover rect:first-of-type { fill-opacity: 0.55; }
        .slot.dragging { cursor: grabbing; }
        .slot.dragging rect:first-of-type { fill-opacity: 0.7; }
      `}</style>

      <script src="/public/js/admin.js" defer></script>
    </div>
  );
};
