import { Html } from "@elysiajs/html";
import type { Dresscode } from "../../services/DresscodeService";

type Props = {
  mode: "create" | "edit";
  values?: Partial<Dresscode> & { id?: string };
  flash?: { kind: "success" | "error"; message: string } | null;
};

const inputCls =
  "w-full bg-zinc-900 border border-white/15 text-white text-sm px-3 py-2 rounded focus:border-sentinel-accent focus:outline-none";
const labelCls =
  "text-[10px] tracking-widest uppercase text-gray-400 mb-1.5 block";

export const DresscodeEdit = ({ mode, values = {}, flash }: Props) => {
  const isCreate = mode === "create";
  const targetUrl = isCreate ? "/admin/dresscodes" : `/admin/dresscodes/${values.id}`;
  const method = isCreate ? "hx-post" : "hx-patch";

  return (
    <div class="max-w-2xl">
      <div class="mb-6">
        <a
          href="/admin/dresscodes"
          class="text-xs text-gray-500 hover:text-sentinel-accent tracking-widest uppercase"
        >
          ← Back to dress codes
        </a>
      </div>

      <header class="mb-8">
        <h1 class="text-2xl text-white tracking-[0.2em] uppercase font-bold">
          {isCreate ? "New dress code" : `Edit · ${values.label ?? values.id}`}
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
        id="dresscode-form"
        class="flex flex-col gap-5 bg-zinc-950 border border-white/10 rounded p-6"
        {...{ [method]: targetUrl }}
        hx-encoding="multipart/form-data"
        hx-target="#dresscode-form-wrapper"
        hx-swap="outerHTML"
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
            placeholder="e.g. business_formal"
            value={values.id ?? ""}
            pattern="[a-z][a-z0-9_-]*"
            maxlength="63"
          />
          <p class="text-[10px] text-gray-600 tracking-widest uppercase mt-1.5">
            Lowercase letters, digits, _ or -. Must start with a letter.
          </p>
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
          />
        </div>

        <div>
          <label class={labelCls} for="description">
            Description
          </label>
          <textarea
            class={`${inputCls} resize-y min-h-[100px]`}
            id="description"
            name="description"
            maxlength="2000"
          >
            {values.description ?? ""}
          </textarea>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class={labelCls} for="price_multiplier">
              Price multiplier
            </label>
            <input
              class={inputCls}
              id="price_multiplier"
              name="price_multiplier"
              type="number"
              step="0.01"
              min="0"
              max="5"
              value={(values.price_multiplier ?? 1).toString()}
            />
          </div>
          <div>
            <label class={labelCls} for="order_index">
              Order
            </label>
            <input
              class={inputCls}
              id="order_index"
              name="order_index"
              type="number"
              step="1"
              min="0"
              value={(values.order_index ?? 0).toString()}
            />
          </div>
        </div>

        {!isCreate && (
          <div>
            <label class={labelCls} for="status">
              Status
            </label>
            <select
              class={inputCls}
              id="status"
              name="status"
            >
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
            <label class={labelCls} for="video">
              Video {!isCreate && values.video_path ? "(replace)" : "(optional)"}
            </label>
            <input
              class={`${inputCls} cursor-pointer file:mr-3 file:px-3 file:py-1 file:border-0 file:bg-white/10 file:text-white file:text-xs file:tracking-widest file:uppercase file:cursor-pointer`}
              id="video"
              name="video"
              type="file"
              accept="video/mp4,video/webm,video/quicktime"
            />
            {values.video_path && (
              <p class="text-[10px] text-gray-500 tracking-widest uppercase mt-1.5">
                Current: {values.video_path}
              </p>
            )}
          </div>
          <div>
            <label class={labelCls} for="poster">
              Poster {!isCreate && values.poster_path ? "(replace)" : "(optional)"}
            </label>
            <input
              class={`${inputCls} cursor-pointer file:mr-3 file:px-3 file:py-1 file:border-0 file:bg-white/10 file:text-white file:text-xs file:tracking-widest file:uppercase file:cursor-pointer`}
              id="poster"
              name="poster"
              type="file"
              accept="image/jpeg,image/png,image/webp"
            />
            {values.poster_path && (
              <p class="text-[10px] text-gray-500 tracking-widest uppercase mt-1.5">
                Current: {values.poster_path}
              </p>
            )}
          </div>
        </div>

        <div class="flex items-center justify-between border-t border-white/10 pt-5">
          <a
            href="/admin/dresscodes"
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
    </div>
  );
};

export const DresscodeFormWrapper = (props: Props) => (
  <div id="dresscode-form-wrapper">
    <DresscodeEdit {...props} />
  </div>
);
