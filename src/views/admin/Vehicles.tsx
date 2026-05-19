import { Html } from "@elysiajs/html";
import {
  type Vehicle,
  VEHICLE_CATEGORIES,
} from "../../services/VehicleService";

const STATUS_CHIP: Record<string, string> = {
  active: "bg-green-500/20 text-green-300",
  archived: "bg-zinc-700/40 text-gray-400",
};

const CATEGORY_CHIP: Record<string, string> = {
  PRINCIPAL: "bg-yellow-500/20 text-yellow-300",
  LEAD: "bg-gray-500/20 text-gray-200",
  REAR: "bg-zinc-500/20 text-zinc-300",
  SWEEPER: "bg-cyan-500/20 text-cyan-300",
  CAT: "bg-red-500/20 text-red-300",
  ECM: "bg-blue-500/20 text-blue-300",
};

const cardId = (id: string) => `vehicle-card-${id}`;

const formatPrice = (cents: number) =>
  cents > 0 ? `$${(cents / 100).toLocaleString()}` : "—";

export const VehicleCard = ({ v }: { v: Vehicle }) => {
  const isArchived = v.status === "archived";
  return (
    <div
      id={cardId(v.id)}
      class={`bg-zinc-950 border border-white/10 rounded overflow-hidden flex flex-col ${
        isArchived ? "opacity-60" : ""
      }`}
    >
      <div class="aspect-[4/3] bg-zinc-900 flex items-center justify-center border-b border-white/10">
        {v.thumbnail_path ? (
          <img
            src={v.thumbnail_path}
            alt={v.label}
            loading="lazy"
            class="w-full h-full object-cover"
          />
        ) : (
          <span class="text-gray-600 text-[10px] tracking-widest uppercase">
            No thumbnail
          </span>
        )}
      </div>
      <div class="p-4 flex flex-col gap-3 flex-1">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="text-white text-sm font-bold truncate">{v.label}</div>
            <div class="text-gray-500 text-[10px] tracking-widest uppercase mt-1">
              {v.id}
            </div>
          </div>
          <div class="flex flex-col items-end gap-1 shrink-0 max-w-[40%]">
            <div class="flex flex-wrap justify-end gap-1">
              {(v.categories ?? [v.category]).map((c) => (
                <span
                  class={`px-2 py-0.5 ${CATEGORY_CHIP[c] ?? "bg-white/10 text-white"} text-[10px] rounded tracking-widest uppercase`}
                >
                  {c}
                </span>
              ))}
            </div>
            <span
              class={`px-2 py-1 ${STATUS_CHIP[v.status]} text-[10px] rounded tracking-widest uppercase`}
            >
              {v.status}
            </span>
          </div>
        </div>
        {v.description && (
          <p class="text-gray-400 text-xs line-clamp-2">{v.description}</p>
        )}
        <div class="mt-auto flex items-center justify-between text-[10px] tracking-widest uppercase">
          <div class="text-gray-500">
            {formatPrice(v.price_cents)} · ×{v.scale.toFixed(2)}
          </div>
          <div class="flex items-center gap-3">
            <a
              href={`/admin/vehicles/${v.id}`}
              class="text-sentinel-accent hover:text-white cursor-pointer"
            >
              Edit
            </a>
            {isArchived ? (
              <button
                type="button"
                class="text-gray-400 hover:text-green-300 cursor-pointer"
                hx-patch={`/admin/vehicles/${v.id}/reactivate`}
                hx-target={`#${cardId(v.id)}`}
                hx-swap="outerHTML"
              >
                Reactivate
              </button>
            ) : (
              <button
                type="button"
                class="text-gray-400 hover:text-red-300 cursor-pointer"
                hx-delete={`/admin/vehicles/${v.id}`}
                hx-target={`#${cardId(v.id)}`}
                hx-swap="outerHTML"
                hx-confirm="Archive this vehicle? It disappears from the wizard. Existing missions are unaffected."
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

export const VehiclesGrid = ({
  vehicles,
  category,
}: {
  vehicles: Vehicle[];
  category?: string;
}) => {
  const buildHref = (cat: string) =>
    cat ? `/admin/vehicles?category=${encodeURIComponent(cat)}` : "/admin/vehicles";

  return (
    <div class="max-w-6xl">
      <header class="mb-8 flex items-end justify-between">
        <div>
          <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
            Vehicles
          </h1>
          <p class="text-gray-500 text-xs tracking-widest uppercase mt-2">
            Motorcade catalog — GLB models + thumbnails
          </p>
        </div>
        <a
          href="/admin/vehicles/new"
          class="px-4 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-sentinel-accent transition-colors cursor-pointer"
        >
          + New vehicle
        </a>
      </header>

      {/* Category filter — server-rendered links, no JS needed. */}
      <nav class="mb-6 flex flex-wrap gap-2 text-[10px] tracking-widest uppercase">
        <a
          href={buildHref("")}
          class={
            !category
              ? "px-3 py-1.5 bg-white text-black rounded"
              : "px-3 py-1.5 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white rounded"
          }
        >
          All
        </a>
        {VEHICLE_CATEGORIES.map((c) => (
          <a
            href={buildHref(c)}
            class={
              category === c
                ? "px-3 py-1.5 bg-white text-black rounded"
                : "px-3 py-1.5 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white rounded"
            }
          >
            {c}
          </a>
        ))}
      </nav>

      {vehicles.length === 0 ? (
        <div class="bg-zinc-950 border border-white/10 rounded p-12 text-center">
          <p class="text-gray-500 tracking-widest uppercase text-sm">
            {category
              ? `No vehicles in category ${category}.`
              : "No vehicles yet."}
          </p>
          <a
            href="/admin/vehicles/new"
            class="inline-block mt-4 text-sentinel-accent hover:text-white text-xs tracking-widest uppercase cursor-pointer"
          >
            Create the first one →
          </a>
        </div>
      ) : (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((v) => (
            <VehicleCard v={v} />
          ))}
        </div>
      )}
    </div>
  );
};
