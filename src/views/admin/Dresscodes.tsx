import { Html } from "@elysiajs/html";
import type { Dresscode } from "../../services/DresscodeService";

const STATUS_CHIP: Record<string, string> = {
  active: "bg-green-500/20 text-green-300",
  archived: "bg-zinc-700/40 text-gray-400",
};

const cardId = (id: string) => `dresscode-card-${id}`;

export const DresscodeCard = ({ d }: { d: Dresscode }) => {
  const isArchived = d.status === "archived";
  return (
    <div
      id={cardId(d.id)}
      class={`bg-zinc-950 border border-white/10 rounded overflow-hidden flex flex-col ${
        isArchived ? "opacity-60" : ""
      }`}
    >
      <div class="aspect-[4/3] bg-zinc-900 flex items-center justify-center border-b border-white/10">
        {d.poster_path ? (
          <img
            src={d.poster_path}
            alt={d.label}
            loading="lazy"
            class="w-full h-full object-cover"
          />
        ) : (
          <span class="text-gray-600 text-[10px] tracking-widest uppercase">
            No poster
          </span>
        )}
      </div>
      <div class="p-4 flex flex-col gap-3 flex-1">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="text-white text-sm font-bold">{d.label}</div>
            <div class="text-gray-500 text-[10px] tracking-widest uppercase mt-1">
              {d.id}
            </div>
          </div>
          <span
            class={`px-2 py-1 ${STATUS_CHIP[d.status]} text-[10px] rounded tracking-widest uppercase`}
          >
            {d.status}
          </span>
        </div>
        {d.description && (
          <p class="text-gray-400 text-xs line-clamp-3">{d.description}</p>
        )}
        <div class="mt-auto flex items-center justify-between text-[10px] tracking-widest uppercase">
          <div class="text-gray-500">
            ×{d.price_multiplier.toFixed(2)} · #{d.order_index}
          </div>
          <div class="flex items-center gap-3">
            <a
              href={`/admin/dresscodes/${d.id}`}
              class="text-sentinel-accent hover:text-white cursor-pointer"
            >
              Edit
            </a>
            {isArchived ? (
              <button
                type="button"
                class="text-gray-400 hover:text-green-300 cursor-pointer"
                hx-patch={`/admin/dresscodes/${d.id}/reactivate`}
                hx-target={`#${cardId(d.id)}`}
                hx-swap="outerHTML"
              >
                Reactivate
              </button>
            ) : (
              <button
                type="button"
                class="text-gray-400 hover:text-red-300 cursor-pointer"
                hx-delete={`/admin/dresscodes/${d.id}`}
                hx-target={`#${cardId(d.id)}`}
                hx-swap="outerHTML"
                hx-confirm="Archive this dresscode? It disappears from the wizard. Existing missions are unaffected."
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

export const DresscodesGrid = ({ dresscodes }: { dresscodes: Dresscode[] }) => {
  return (
    <div class="max-w-6xl">
      <header class="mb-8 flex items-end justify-between">
        <div>
          <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
            Dress codes
          </h1>
          <p class="text-gray-500 text-xs tracking-widest uppercase mt-2">
            Outfits shown in the wizard's dress-code step
          </p>
        </div>
        <a
          href="/admin/dresscodes/new"
          class="px-4 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-sentinel-accent transition-colors cursor-pointer"
        >
          + New dresscode
        </a>
      </header>

      {dresscodes.length === 0 ? (
        <div class="bg-zinc-950 border border-white/10 rounded p-12 text-center">
          <p class="text-gray-500 tracking-widest uppercase text-sm">
            No dress codes yet.
          </p>
          <a
            href="/admin/dresscodes/new"
            class="inline-block mt-4 text-sentinel-accent hover:text-white text-xs tracking-widest uppercase cursor-pointer"
          >
            Create the first one →
          </a>
        </div>
      ) : (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dresscodes.map((d) => (
            <DresscodeCard d={d} />
          ))}
        </div>
      )}
    </div>
  );
};
