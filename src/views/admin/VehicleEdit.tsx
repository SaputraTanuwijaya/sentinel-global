import { Html } from "@elysiajs/html";
import {
  type Vehicle,
  type VehicleSpecs,
  VEHICLE_CATEGORIES,
  REQUIRED_SPEC_KEYS,
} from "../../services/VehicleService";

type Props = {
  mode: "create" | "edit";
  values?: Partial<Vehicle> & { id?: string };
  flash?: { kind: "success" | "error"; message: string } | null;
};

const inputCls =
  "w-full bg-zinc-900 border border-white/15 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none";
const labelCls =
  "text-[10px] tracking-widest uppercase text-gray-400 mb-1.5 block";

const priceFromCents = (cents: number | undefined) =>
  cents == null ? "0.00" : (cents / 100).toFixed(2);

// Human-readable labels for the canonical six. The wizard reuses the same
// mapping in Motorcade.tsx; if you add a required key here, also extend
// SPEC_LABELS there for a matching label on the guest side.
const REQUIRED_SPEC_LABELS: Record<string, string> = {
  armor: "Armor Class",
  protection: "Protection Grade",
  hp: "Horsepower",
  torque: "Torque",
  speed: "Max Speed",
  occupancy: "Occupancy",
};

const SPEC_VALUE_PLACEHOLDERS: Record<string, string> = {
  armor: "e.g. B7 (Heavy)",
  protection: "e.g. Explosive Resistant",
  hp: "e.g. 420 HP",
  torque: "e.g. 460 LB-FT",
  speed: "e.g. 130 MPH",
  occupancy: "e.g. 2+2",
};

const SpecsHeader = () => (
  <div class="grid grid-cols-[1fr_2fr_auto] gap-2 items-center text-[10px] tracking-widest uppercase text-gray-500 px-1">
    <span>Field</span>
    <span>Value</span>
    <span class="w-8 text-center">—</span>
  </div>
);

// Required row: key locked (rendered as a chip with its slug), value
// editable, no remove button. A hidden input carries the key so the same
// serializer handles required + custom rows uniformly.
const RequiredSpecRow = ({ keyName, value }: { keyName: string; value: string }) => (
  <div class="grid grid-cols-[1fr_2fr_auto] gap-2 items-center" data-spec-row data-spec-required>
    <div class="flex items-center gap-2 px-3 py-2 bg-zinc-900/50 border border-white/10 rounded">
      <span class="text-gray-500 text-[10px]" title="Required field — cannot be removed">
        🔒
      </span>
      <div class="min-w-0">
        <div class="text-white text-xs font-bold truncate">
          {REQUIRED_SPEC_LABELS[keyName] ?? keyName}
        </div>
        <div class="text-gray-600 text-[9px] tracking-widest uppercase font-mono truncate">
          {keyName}
        </div>
      </div>
    </div>
    <input type="hidden" data-spec-key value={keyName} />
    <input
      type="text"
      data-spec-value
      placeholder={SPEC_VALUE_PLACEHOLDERS[keyName] ?? "value"}
      value={value}
      maxlength="128"
      class={inputCls}
    />
    <span class="w-8" />
  </div>
);

// Custom row: both key and value editable. Remove button drops the row.
const CustomSpecRow = ({ keyName, value }: { keyName: string; value: string }) => (
  <div class="grid grid-cols-[1fr_2fr_auto] gap-2 items-center" data-spec-row>
    <input
      type="text"
      data-spec-key
      placeholder="custom_key"
      value={keyName}
      maxlength="32"
      class={`${inputCls} font-mono text-xs`}
    />
    <input
      type="text"
      data-spec-value
      placeholder="value"
      value={value}
      maxlength="128"
      class={inputCls}
    />
    <button
      type="button"
      data-spec-remove
      class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-300 hover:bg-red-500/10 text-sm rounded cursor-pointer"
      title="Remove spec"
    >
      ×
    </button>
  </div>
);

const SpecsRows = ({ specs }: { specs?: VehicleSpecs }) => {
  // Required keys always render first in canonical order, with the saved
  // value (or empty for a brand-new vehicle). Anything else the admin set
  // appears below as custom rows. This keeps the order stable across edits.
  const specsMap = specs ?? {};
  const requiredSet = new Set<string>(REQUIRED_SPEC_KEYS);
  const customEntries = Object.entries(specsMap).filter(
    ([k]) => !requiredSet.has(k),
  );
  return (
    <>
      <SpecsHeader />
      {REQUIRED_SPEC_KEYS.map((k) => (
        <RequiredSpecRow keyName={k} value={specsMap[k] ?? ""} />
      ))}
      {customEntries.length > 0 && (
        <div class="text-[9px] tracking-widest uppercase text-gray-600 mt-2 px-1">
          Custom fields
        </div>
      )}
      {customEntries.map(([k, v]) => (
        <CustomSpecRow keyName={k} value={v} />
      ))}
    </>
  );
};

export const VehicleEdit = ({ mode, values = {}, flash }: Props) => {
  const isCreate = mode === "create";
  const targetUrl = isCreate ? "/admin/vehicles" : `/admin/vehicles/${values.id}`;
  const method = isCreate ? "hx-post" : "hx-patch";

  return (
    <div class="max-w-2xl">
      <div class="mb-6">
        <a
          href="/admin/vehicles"
          class="text-xs text-gray-500 hover:text-sentinel-accent tracking-widest uppercase"
        >
          ← Back to vehicles
        </a>
      </div>

      <header class="mb-8">
        <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
          {isCreate ? "New vehicle" : `Edit · ${values.label ?? values.id}`}
        </h1>
        <p class="text-gray-500 text-xs tracking-widest uppercase mt-2">
          {isCreate
            ? "Slug is permanent — choose carefully."
            : "Slug is fixed. Files replace existing on save."}
        </p>
      </header>

      {flash && (
        <div
          class={
            flash.kind === "success"
              ? "mb-6 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded text-green-300 text-xs tracking-widest uppercase"
              : "mb-6 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded text-red-300 text-xs tracking-widest"
          }
        >
          {flash.message}
        </div>
      )}

      <form
        id="vehicle-form"
        class="flex flex-col gap-5 bg-zinc-950 border border-white/10 rounded p-6"
        {...{ [method]: targetUrl }}
        hx-encoding="multipart/form-data"
        hx-target="#vehicle-form-wrapper"
        hx-swap="outerHTML"
        hx-vals='js:{ specs_json: window.SentinelAdmin && window.SentinelAdmin.serializeVehicleSpecs ? window.SentinelAdmin.serializeVehicleSpecs() : "{}" }'
      >
        <div>
          <label class={labelCls} for="id">
            ID (slug)
          </label>
          <input
            class={inputCls}
            id="id"
            name="id"
            type="text"
            required={isCreate}
            readonly={!isCreate}
            placeholder="e.g. Escalade, lead-suv-1"
            value={values.id ?? ""}
            pattern="[A-Za-z][A-Za-z0-9_-]*"
            maxlength="63"
          />
        </div>

        <div>
          <label class={labelCls}>Roles</label>
          <p class="text-[10px] text-gray-600 tracking-widest uppercase -mt-1 mb-2">
            Pick every motorcade slot this vehicle fits. At least one.
          </p>
          <div class="grid grid-cols-3 gap-2">
            {VEHICLE_CATEGORIES.map((c) => {
              const checked = (values.categories ?? []).includes(c);
              return (
                <label
                  class={`flex items-center gap-2 px-3 py-2 border rounded cursor-pointer text-xs tracking-widest uppercase ${
                    checked
                      ? "bg-sentinel-accent/15 border-sentinel-accent text-white"
                      : "bg-zinc-900 border-white/15 text-gray-400 hover:border-white/30"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="categories"
                    value={c}
                    checked={checked}
                    class="accent-sentinel-accent"
                  />
                  {c}
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label class={labelCls} for="label">
            Label
          </label>
          <input
            class={inputCls}
            id="label"
            name="label"
            type="text"
            required
            maxlength="80"
            value={values.label ?? ""}
            placeholder="e.g. Cadillac Escalade"
          />
        </div>

        <div>
          <label class={labelCls} for="description">
            Description
          </label>
          <textarea
            class={`${inputCls} resize-y min-h-[80px]`}
            id="description"
            name="description"
            maxlength="2000"
          >
            {values.description ?? ""}
          </textarea>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class={labelCls} for="scale">
              Scale
            </label>
            <input
              class={inputCls}
              id="scale"
              name="scale"
              type="number"
              step="0.01"
              min="0.01"
              max="10"
              value={(values.scale ?? 1).toString()}
            />
            <p class="text-[10px] text-gray-600 tracking-widest uppercase mt-1.5">
              Three.js mesh scale. 1.0 = original.
            </p>
          </div>
          <div>
            <label class={labelCls} for="model_rotation_y_deg">
              Y-rotation (°)
            </label>
            <input
              class={inputCls}
              id="model_rotation_y_deg"
              name="model_rotation_y_deg"
              type="number"
              step="1"
              min="0"
              max="359"
              value={(values.model_rotation_y_deg ?? 0).toString()}
            />
            <div class="flex gap-1 mt-1.5" data-rotation-presets>
              {[0, 90, 180, 270].map((deg) => (
                <button
                  type="button"
                  data-rotation-preset={deg}
                  class="flex-1 px-2 py-1 bg-zinc-900 border border-white/15 text-gray-400 hover:text-white hover:border-white/40 text-[10px] tracking-widest uppercase rounded cursor-pointer"
                >
                  {deg}°
                </button>
              ))}
            </div>
          </div>
          <div>
            <label class={labelCls} for="price_dollars">
              Price (USD)
            </label>
            <div class="flex items-center gap-2">
              <span class="text-gray-400 text-sm">$</span>
              <input
                class={inputCls}
                id="price_dollars"
                name="price_dollars"
                type="number"
                step="0.01"
                min="0"
                value={priceFromCents(values.price_cents as number | undefined)}
              />
            </div>
            <p class="text-[10px] text-gray-600 tracking-widest uppercase mt-1.5">
              Per-unit. Not used at checkout yet.
            </p>
          </div>
        </div>

        {/* Specs editor — dynamic key/value rows. The inline JS below
            aggregates them into a hidden specs_json field on submit, so
            new admin-defined keys flow to the wizard without touching the
            schema or the client renderer. */}
        <div>
          <div class="flex items-end justify-between mb-1.5">
            <label class={labelCls}>Technical specs</label>
            <button
              type="button"
              data-specs-add
              class="text-[10px] text-sentinel-accent hover:text-white tracking-widest uppercase cursor-pointer"
            >
              + Add spec
            </button>
          </div>
          <p class="text-[10px] text-gray-600 tracking-widest uppercase -mt-1 mb-2">
            Shown on the wizard detail panel. Keys: lowercase, digits, underscores.
          </p>
          <div data-specs-list class="flex flex-col gap-2">
            <SpecsRows specs={values.specs} />
          </div>
        </div>

        {!isCreate && (
          <div>
            <label class={labelCls} for="status">
              Status
            </label>
            <select class={inputCls} id="status" name="status">
              <option value="active" selected={values.status === "active"}>
                Active
              </option>
              <option value="archived" selected={values.status === "archived"}>
                Archived
              </option>
            </select>
          </div>
        )}

        <div class="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
          <div>
            <label class={labelCls} for="model">
              GLB model{" "}
              {!isCreate && values.model_path
                ? "(replace)"
                : isCreate
                  ? "(required)"
                  : "(optional)"}
            </label>
            <input
              class={`${inputCls} cursor-pointer file:mr-3 file:px-3 file:py-1 file:border-0 file:bg-white/10 file:text-white file:text-xs file:tracking-widest file:uppercase file:cursor-pointer`}
              id="model"
              name="model"
              type="file"
              accept=".glb,model/gltf-binary"
              required={isCreate}
            />
            {values.model_path && (
              <p class="text-[10px] text-gray-500 tracking-widest uppercase mt-1.5">
                Current: {values.model_path}
              </p>
            )}
          </div>
          <div>
            <label class={labelCls} for="thumbnail">
              Thumbnail{" "}
              {!isCreate && values.thumbnail_path ? "(replace)" : "(optional)"}
            </label>
            <input
              class={`${inputCls} cursor-pointer file:mr-3 file:px-3 file:py-1 file:border-0 file:bg-white/10 file:text-white file:text-xs file:tracking-widest file:uppercase file:cursor-pointer`}
              id="thumbnail"
              name="thumbnail"
              type="file"
              accept="image/jpeg,image/png,image/webp"
            />
            <p
              id="thumbnail-hint"
              class="text-[10px] text-gray-500 tracking-widest uppercase mt-1.5"
            >
              {values.thumbnail_path
                ? `Current: ${values.thumbnail_path}`
                : "JPG, PNG, or WebP."}
            </p>
            <div
              id="thumbnail-preview"
              class={`mt-2 ${values.thumbnail_path ? "" : "hidden"} border border-white/10 rounded overflow-hidden bg-zinc-900`}
            >
              <img
                id="thumbnail-preview-img"
                alt=""
                src={values.thumbnail_path ?? ""}
                class="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between border-t border-white/10 pt-5">
          <a
            href="/admin/vehicles"
            class="text-xs text-gray-500 hover:text-white tracking-widest uppercase"
          >
            Cancel
          </a>
          <button
            type="submit"
            class="px-6 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-sentinel-accent transition-colors cursor-pointer"
          >
            {isCreate ? "Create" : "Save"}
          </button>
        </div>
      </form>

      <script>
        {`
        (function() {
          const form = document.getElementById('vehicle-form');
          if (!form || form.dataset.wired) return;
          form.dataset.wired = '1';

          // ── Y-rotation presets ────────────────────────────────────────────
          const rotInput = form.querySelector('#model_rotation_y_deg');
          form.querySelectorAll('[data-rotation-preset]').forEach((btn) => {
            btn.addEventListener('click', () => {
              if (rotInput) rotInput.value = btn.dataset.rotationPreset;
            });
          });

          // ── Thumbnail preview ─────────────────────────────────────────────
          // Plain manual preview — admin picks a JPG/PNG/WebP, we show it.
          // Object URLs are revoked between picks to keep memory bounded.
          const thumbInput = form.querySelector('input[name="thumbnail"]');
          const previewBox = document.getElementById('thumbnail-preview');
          const previewImg = document.getElementById('thumbnail-preview-img');
          const hint = document.getElementById('thumbnail-hint');
          let lastObjectUrl = null;
          if (thumbInput && previewBox && previewImg) {
            thumbInput.addEventListener('change', () => {
              if (lastObjectUrl) {
                URL.revokeObjectURL(lastObjectUrl);
                lastObjectUrl = null;
              }
              const file = thumbInput.files && thumbInput.files[0];
              if (!file) {
                previewBox.classList.add('hidden');
                return;
              }
              lastObjectUrl = URL.createObjectURL(file);
              previewImg.src = lastObjectUrl;
              previewBox.classList.remove('hidden');
              if (hint) hint.textContent = file.name;
            });
          }

          // ── Specs editor ──────────────────────────────────────────────────
          // Bound to the form element so a swap that replaces this script's
          // wrapper also tears the listeners with it. The hx-vals on the
          // form calls back into window.SentinelAdmin.serializeVehicleSpecs
          // at submit time — this script wires that global.
          const specsList = form.querySelector('[data-specs-list]');
          const addBtn = form.querySelector('[data-specs-add]');

          // Dynamically-added rows are always custom (key editable, with
          // remove). They share Tailwind classes with the SSR'd custom rows
          // so the visual matches.
          const KEY_CLS = ${JSON.stringify(`${inputCls} font-mono text-xs`)};
          const VAL_CLS = ${JSON.stringify(inputCls)};
          const escapeAttr = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
          const buildRow = (k, v) => {
            const row = document.createElement('div');
            row.className = 'grid grid-cols-[1fr_2fr_auto] gap-2 items-center';
            row.dataset.specRow = '';
            row.innerHTML =
              '<input type="text" data-spec-key placeholder="custom_key" value="' + escapeAttr(k) + '" maxlength="32" class="' + KEY_CLS + '" />' +
              '<input type="text" data-spec-value placeholder="value" value="' + escapeAttr(v) + '" maxlength="128" class="' + VAL_CLS + '" />' +
              '<button type="button" data-spec-remove class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-300 hover:bg-red-500/10 text-sm rounded cursor-pointer" title="Remove spec">×</button>';
            return row;
          };

          if (addBtn && specsList) {
            addBtn.addEventListener('click', () => {
              specsList.appendChild(buildRow('', ''));
            });
          }

          if (specsList) {
            specsList.addEventListener('click', (e) => {
              const btn = e.target.closest && e.target.closest('[data-spec-remove]');
              if (!btn) return;
              const row = btn.closest('[data-spec-row]');
              if (row) row.remove();
            });
          }

          window.SentinelAdmin = window.SentinelAdmin || {};
          window.SentinelAdmin.serializeVehicleSpecs = () => {
            const out = {};
            if (!specsList) return JSON.stringify(out);
            specsList.querySelectorAll('[data-spec-row]').forEach((row) => {
              const k = (row.querySelector('[data-spec-key]') || {}).value || '';
              const v = (row.querySelector('[data-spec-value]') || {}).value || '';
              const key = k.trim().toLowerCase();
              if (!key) return;
              out[key] = v;
            });
            return JSON.stringify(out);
          };
        })();
        `}
      </script>
    </div>
  );
};

export const VehicleFormWrapper = (props: Props) => (
  <div id="vehicle-form-wrapper">
    <VehicleEdit {...props} />
  </div>
);
