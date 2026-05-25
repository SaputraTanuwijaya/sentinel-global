import { Html } from "@elysiajs/html";
import type { PricingRule } from "../../services/PricingService";
import type { Vehicle } from "../../services/VehicleService";

const CATEGORY_TITLE: Record<string, string> = {
  base: "Base rates",
  tier: "Tier surcharges",
  dress: "Dress code multipliers",
  duration: "Duration",
};

const formatCents = (n: number) => `$${(n / 100).toFixed(2)}`;
const formatMult = (n: number) => `×${n.toFixed(2)}`;

const cellId = (key: string) => `cell-${toDomId(key)}`;

// HTMX target selectors are CSS selectors, so a dot in an id becomes a class
// selector (`#cell-base.per_principal_hour` = id=cell-base AND class=...).
// Strip dots and anything else not safe in a DOM id. The DB key is unchanged;
// this is only the on-page identifier.
function toDomId(s: string) {
  return s.replace(/[^a-zA-Z0-9_-]/g, "_");
}

const isCents = (r: PricingRule) => r.value_cents !== null;
const editInputValue = (r: PricingRule) =>
  isCents(r) ? (r.value_cents! / 100).toFixed(2) : (r.value_multiplier ?? 0).toFixed(2);
const unitGlyph = (r: PricingRule) => (isCents(r) ? "$" : "×");
const unitSuffix = (r: PricingRule) => (isCents(r) ? "/hr" : "");

// ─── read-only cell ─────────────────────────────────────────────────────────

export const PricingCell = ({ rule }: { rule: PricingRule }) => {
  const display = isCents(rule)
    ? formatCents(rule.value_cents!)
    : formatMult(rule.value_multiplier ?? 0);

  return (
    <div
      id={cellId(rule.key)}
      class="flex items-center justify-between gap-3 min-w-[180px]"
    >
      <span class="text-white text-sm tabular-nums">{display}</span>
      <button
        type="button"
        class="text-[10px] tracking-widest uppercase text-gray-500 hover:text-sentinel-accent cursor-pointer"
        hx-get={`/admin/pricing/${encodeURIComponent(rule.key)}/edit`}
        hx-target={`#${cellId(rule.key)}`}
        hx-swap="outerHTML"
      >
        [edit]
      </button>
    </div>
  );
};

// ─── editor cell ────────────────────────────────────────────────────────────

export const PricingCellEditor = ({
  rule,
  error,
}: {
  rule: PricingRule;
  error?: string | null;
}) => {
  const id = cellId(rule.key);
  const cancelUrl = `/admin/pricing/${encodeURIComponent(rule.key)}/cell`;
  const cents = isCents(rule);
  const keydownHandler =
    `if (event.key === 'Enter') { event.preventDefault(); this.form.requestSubmit(); }` +
    ` else if (event.key === 'Escape') { event.preventDefault(); htmx.ajax('GET', '${cancelUrl}', { target: '#${id}', swap: 'outerHTML' }); }`;

  return (
    <form
      id={id}
      class="flex flex-col gap-1 min-w-[180px]"
      hx-patch={`/admin/pricing/${encodeURIComponent(rule.key)}`}
      hx-target={`#${id}`}
      hx-swap="outerHTML"
    >
      <div class="flex items-center gap-2">
        <span class="text-gray-400 text-sm w-4 text-center">{unitGlyph(rule)}</span>
        <input
          name="value"
          type="number"
          step={cents ? "0.01" : "0.01"}
          min="0"
          inputmode="decimal"
          value={editInputValue(rule)}
          autofocus
          class="w-24 bg-zinc-900 border border-white/20 text-white text-sm px-2 py-1 rounded focus:border-sentinel-accent focus:outline-none tabular-nums"
          hx-on:keydown={keydownHandler}
          hx-on:blur="this.form.requestSubmit()"
        />
        {unitSuffix(rule) && (
          <span class="text-gray-500 text-[10px] tracking-widest uppercase">
            {unitSuffix(rule)}
          </span>
        )}
        <button
          type="submit"
          class="text-[10px] tracking-widest uppercase text-sentinel-accent hover:text-white cursor-pointer ml-1"
        >
          save
        </button>
      </div>
      {error ? (
        <p class="text-red-400 text-[11px] tracking-wide">{error}</p>
      ) : (
        <p class="text-gray-600 text-[10px] tracking-widest uppercase">
          Enter or blur saves · Esc cancels
        </p>
      )}
    </form>
  );
};

// ─── matrix page ────────────────────────────────────────────────────────────

const groupByCategory = (rules: PricingRule[]) => {
  const groups = new Map<string, PricingRule[]>();
  for (const r of rules) {
    if (!groups.has(r.category)) groups.set(r.category, []);
    groups.get(r.category)!.push(r);
  }
  return groups;
};

export const PricingMatrix = ({
  rules,
  vehicles,
}: {
  rules: PricingRule[];
  vehicles: Vehicle[];
}) => {
  const groups = groupByCategory(rules);
  return (
    <div class="max-w-4xl">
      <header class="mb-8">
        <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
          Pricing matrix
        </h1>
        <p class="text-gray-500 text-xs tracking-widest uppercase mt-2">
          Inline edit. Changes invalidate the catalog cache.
        </p>
      </header>

      <div class="flex flex-col gap-8">
        {Array.from(groups.entries()).map(([category, items]) => (
          <section class="bg-zinc-950 border border-white/10 rounded overflow-hidden">
            <h2 class="px-6 py-3 bg-zinc-900 border-b border-white/10 text-xs tracking-widest uppercase text-gray-400 font-normal">
              {CATEGORY_TITLE[category] ?? category}
            </h2>
            <table class="w-full text-left border-collapse">
              <tbody class="text-sm">
                {items.map((rule) => (
                  <tr class="border-b border-white/5 last:border-b-0">
                    <td class="p-4 align-top w-1/4">
                      <div class="text-white">{rule.label}</div>
                      <div class="text-[10px] text-gray-600 tracking-widest uppercase mt-1">
                        {rule.key}
                      </div>
                    </td>
                    <td class="p-4 align-top text-gray-400 text-xs">
                      {rule.description ?? ""}
                    </td>
                    <td class="p-4 align-top w-[220px]">
                      <PricingCell rule={rule} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}

        <VehiclePricesSection vehicles={vehicles} />
      </div>
    </div>
  );
};

// ─── per-vehicle prices (read-only here; edit lives in /admin/vehicles) ─────

const VehiclePricesSection = ({ vehicles }: { vehicles: Vehicle[] }) => (
  <section class="bg-zinc-950 border border-white/10 rounded overflow-hidden">
    <h2 class="px-6 py-3 bg-zinc-900 border-b border-white/10 text-xs tracking-widest uppercase text-gray-400 font-normal flex items-center justify-between">
      <span>Vehicle prices</span>
      <span class="text-[9px] text-gray-600 normal-case tracking-wide">
        Read-only. Edit on each vehicle's page.
      </span>
    </h2>
    {vehicles.length === 0 ? (
      <div class="p-6 text-gray-500 text-xs tracking-widest uppercase">
        No active vehicles.
      </div>
    ) : (
      <table class="w-full text-left border-collapse">
        <tbody class="text-sm">
          {vehicles.map((v) => (
            <tr class="border-b border-white/5 last:border-b-0">
              <td class="p-4 align-top w-1/4">
                <div class="text-white">{v.label}</div>
                <div class="text-[10px] text-gray-600 tracking-widest uppercase mt-1">
                  {v.id}
                </div>
              </td>
              <td class="p-4 align-top text-gray-400 text-xs">
                {v.categories.join(" · ")}
              </td>
              <td class="p-4 align-top w-[220px]">
                <div class="flex items-center justify-between gap-3 min-w-[180px]">
                  <span class="text-white text-sm tabular-nums">
                    {formatCents(v.price_cents)}
                    <span class="text-gray-500 text-[10px] tracking-widest uppercase ml-1">
                      /hr
                    </span>
                  </span>
                  <a
                    href={`/admin/vehicles/${encodeURIComponent(v.id)}`}
                    class="text-[10px] tracking-widest uppercase text-gray-500 hover:text-sentinel-accent"
                  >
                    [edit]
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </section>
);
