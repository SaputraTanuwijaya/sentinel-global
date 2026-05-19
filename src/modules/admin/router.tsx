import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";
import { jwtPlugin, requireAdmin } from "../../core/auth";
import { MissionService } from "../../services/MissionService";
import { PricingService } from "../../services/PricingService";
import { DresscodeService } from "../../services/DresscodeService";
import {
  VehicleService,
  VEHICLE_CATEGORIES,
  VEHICLE_SLUG_RE,
} from "../../services/VehicleService";
import { AdminLayout } from "../../views/admin/AdminLayout";
import {
  AdminDashboard,
  AdminError,
  MissionRow,
  StatusChip,
} from "../../views/Admin";
import { AdminMissionDetail } from "../../views/admin/AdminMissionDetail";
import {
  PricingMatrix,
  PricingCell,
  PricingCellEditor,
} from "../../views/admin/Pricing";
import {
  DresscodesGrid,
  DresscodeCard,
} from "../../views/admin/Dresscodes";
import {
  DresscodeEdit,
  DresscodeFormWrapper,
} from "../../views/admin/DresscodeEdit";
import {
  VehiclesGrid,
  VehicleCard,
} from "../../views/admin/Vehicles";
import {
  VehicleEdit,
  VehicleFormWrapper,
} from "../../views/admin/VehicleEdit";
import {
  writeDresscodeAsset,
  writeVehicleAsset,
  MAX_UPLOAD_BYTES,
} from "../../core/uploads";

// VehicleEdit's inline JS aggregates the spec rows into a JSON string and
// drops it onto the form via hx-vals. We parse here, but only shape-check —
// the authoritative bounds (key/value lengths, max entries) live in
// VehicleService.validate so client and route layers stay thin.
function parseSpecsField(raw: unknown): Record<string, string> {
  if (raw == null || raw === "") return {};
  if (typeof raw !== "string") return {};
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      return {};
    }
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof k === "string" && typeof v === "string" && k.length > 0) {
        out[k] = v;
      }
    }
    return out;
  } catch {
    return {};
  }
}

export const adminRouter = new Elysia({ prefix: "/admin" })
  .use(jwtPlugin)

  .get(
    "/",
    async () => {
      try {
        const missions = await MissionService.getAllMissions();
        return (
          <AdminLayout title="Dashboard" active="dashboard">
            <AdminDashboard missions={missions} />
          </AdminLayout>
        );
      } catch (err: any) {
        console.error("/// ADMIN DASHBOARD LOAD FAILED ///", err?.message ?? err);
        return (
          <AdminLayout title="Dashboard" active="dashboard">
            <AdminDashboard missions={[]} error="Could not load missions." />
          </AdminLayout>
        );
      }
    },
    { beforeHandle: requireAdmin },
  )

  .get(
    "/missions",
    async () => {
      try {
        const missions = await MissionService.getAllMissions();
        return (
          <AdminLayout title="Missions" active="missions">
            <AdminDashboard missions={missions} />
          </AdminLayout>
        );
      } catch (err: any) {
        console.error("/// ADMIN MISSIONS LOAD FAILED ///", err?.message ?? err);
        return (
          <AdminLayout title="Missions" active="missions">
            <AdminDashboard missions={[]} error="Could not load missions." />
          </AdminLayout>
        );
      }
    },
    { beforeHandle: requireAdmin },
  )

  .get(
    "/missions/:id",
    async ({ params, set }) => {
      try {
        const mission = await MissionService.getMission(params.id);
        if (!mission) {
          set.status = 404;
          return (
            <AdminLayout title="Mission not found" active="missions">
              <AdminError message={`No mission with id ${params.id}.`} />
            </AdminLayout>
          );
        }
        return (
          <AdminLayout title={`Mission ${params.id}`} active="missions">
            <AdminMissionDetail mission={mission} />
          </AdminLayout>
        );
      } catch (err: any) {
        console.error("/// ADMIN MISSION DETAIL FAILED ///", err?.message ?? err);
        set.status = 500;
        return (
          <AdminLayout title="Mission" active="missions">
            <AdminError message="Could not load mission." />
          </AdminLayout>
        );
      }
    },
    { beforeHandle: requireAdmin },
  )

  .post(
    "/missions/:id/status",
    async ({ params, body, set }) => {
      try {
        await MissionService.updateStatus(params.id, body.status);
        const updated = await MissionService.getMission(params.id);
        if (!updated) {
          set.status = 404;
          return <AdminError message="Mission disappeared after update." />;
        }
        if (body.from === "detail") {
          return (
            <div id="status-chip">
              <StatusChip status={updated.status as string} />
            </div>
          );
        }
        return <MissionRow m={updated} />;
      } catch (err: any) {
        console.error("/// ADMIN STATUS UPDATE FAILED ///", err?.message ?? err);
        set.status = 400;
        return (
          <AdminError
            message={err?.message ?? "Could not update mission status."}
          />
        );
      }
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({
        status: t.String(),
        from: t.Optional(t.String()),
      }),
      beforeHandle: requireAdmin,
    },
  )

  // ─── Pricing matrix ───────────────────────────────────────────────────────

  .get(
    "/pricing",
    async () => {
      try {
        const rules = await PricingService.getAll();
        return (
          <AdminLayout title="Pricing" active="pricing">
            <PricingMatrix rules={rules} />
          </AdminLayout>
        );
      } catch (err: any) {
        console.error("/// ADMIN PRICING LOAD FAILED ///", err?.message ?? err);
        return (
          <AdminLayout title="Pricing" active="pricing">
            <AdminError message="Could not load pricing rules." />
          </AdminLayout>
        );
      }
    },
    { beforeHandle: requireAdmin },
  )

  .get(
    "/pricing/:key/edit",
    async ({ params, set }) => {
      const rule = await PricingService.get(params.key);
      if (!rule) {
        set.status = 404;
        return <AdminError message={`Unknown pricing rule: ${params.key}`} />;
      }
      return <PricingCellEditor rule={rule} />;
    },
    { beforeHandle: requireAdmin },
  )

  .get(
    "/pricing/:key/cell",
    async ({ params, set }) => {
      const rule = await PricingService.get(params.key);
      if (!rule) {
        set.status = 404;
        return <AdminError message={`Unknown pricing rule: ${params.key}`} />;
      }
      return <PricingCell rule={rule} />;
    },
    { beforeHandle: requireAdmin },
  )

  .patch(
    "/pricing/:key",
    async ({ params, body, set }) => {
      const rule = await PricingService.get(params.key);
      if (!rule) {
        set.status = 404;
        return <AdminError message={`Unknown pricing rule: ${params.key}`} />;
      }

      const raw = String(body.value ?? "").trim();
      if (raw === "") {
        set.status = 400;
        return (
          <PricingCellEditor rule={rule} error="Enter a number." />
        );
      }
      const n = Number(raw);
      if (!Number.isFinite(n)) {
        set.status = 400;
        return (
          <PricingCellEditor rule={rule} error="Enter a number." />
        );
      }

      const patch =
        rule.value_cents !== null
          ? { value_cents: Math.round(n * 100) }
          : { value_multiplier: n };

      try {
        const updated = await PricingService.update(params.key, patch);
        return <PricingCell rule={updated} />;
      } catch (err: any) {
        set.status = 400;
        return (
          <PricingCellEditor
            rule={rule}
            error={err?.message ?? "Could not update."}
          />
        );
      }
    },
    {
      params: t.Object({ key: t.String() }),
      body: t.Object({ value: t.String() }),
      beforeHandle: requireAdmin,
    },
  )

  // ─── Dresscodes ───────────────────────────────────────────────────────────

  .get(
    "/dresscodes",
    async () => {
      try {
        const dresscodes = await DresscodeService.listAll();
        return (
          <AdminLayout title="Dresscodes" active="dresscodes">
            <DresscodesGrid dresscodes={dresscodes} />
          </AdminLayout>
        );
      } catch (err: any) {
        console.error("/// ADMIN DRESSCODES LOAD FAILED ///", err?.message ?? err);
        return (
          <AdminLayout title="Dresscodes" active="dresscodes">
            <AdminError message="Could not load dress codes." />
          </AdminLayout>
        );
      }
    },
    { beforeHandle: requireAdmin },
  )

  .get(
    "/dresscodes/new",
    async () => (
      <AdminLayout title="New dresscode" active="dresscodes">
        <DresscodeFormWrapper mode="create" />
      </AdminLayout>
    ),
    { beforeHandle: requireAdmin },
  )

  .get(
    "/dresscodes/:id",
    async ({ params, set }) => {
      const d = await DresscodeService.get(params.id);
      if (!d) {
        set.status = 404;
        return (
          <AdminLayout title="Not found" active="dresscodes">
            <AdminError message={`No dresscode with id ${params.id}.`} />
          </AdminLayout>
        );
      }
      return (
        <AdminLayout title={`Edit · ${d.label}`} active="dresscodes">
          <DresscodeFormWrapper mode="edit" values={d} />
        </AdminLayout>
      );
    },
    { beforeHandle: requireAdmin },
  )

  .post(
    "/dresscodes",
    async ({ body, set }) => {
      const id = String(body.id ?? "").trim();
      const label = String(body.label ?? "").trim();
      const description = body.description ? String(body.description) : null;
      const price_multiplier =
        body.price_multiplier !== undefined && body.price_multiplier !== ""
          ? Number(body.price_multiplier)
          : 1.0;
      const order_index =
        body.order_index !== undefined && body.order_index !== ""
          ? Number(body.order_index)
          : 0;

      const renderError = (msg: string) => {
        set.status = 400;
        return (
          <DresscodeFormWrapper
            mode="create"
            values={{ id, label, description, price_multiplier, order_index }}
            flash={{ kind: "error", message: msg }}
          />
        );
      };

      try {
        // Files first — fail fast before touching the DB.
        let video_path: string | null = null;
        let poster_path: string | null = null;
        const v = body.video as File | undefined;
        const p = body.poster as File | undefined;
        if (v && v.size > 0) {
          video_path = await writeDresscodeAsset(v, id || "draft", "video");
        }
        if (p && p.size > 0) {
          poster_path = await writeDresscodeAsset(p, id || "draft", "image");
        }
        await DresscodeService.create({
          id,
          label,
          description,
          price_multiplier,
          order_index,
          video_path,
          poster_path,
        });
        set.headers["HX-Redirect"] = `/admin/dresscodes/${id}`;
        return "";
      } catch (err: any) {
        console.error("/// DRESSCODE CREATE FAILED ///", err?.message ?? err);
        return renderError(err?.message ?? "Could not create dresscode.");
      }
    },
    {
      body: t.Object({
        id: t.String(),
        label: t.String(),
        description: t.Optional(t.String()),
        price_multiplier: t.Optional(t.String()),
        order_index: t.Optional(t.String()),
        status: t.Optional(t.String()),
        video: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
        poster: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
      }),
      beforeHandle: requireAdmin,
    },
  )

  .patch(
    "/dresscodes/:id",
    async ({ params, body, set }) => {
      const existing = await DresscodeService.get(params.id);
      if (!existing) {
        set.status = 404;
        return (
          <DresscodeFormWrapper
            mode="edit"
            values={{ id: params.id }}
            flash={{ kind: "error", message: "Dresscode not found." }}
          />
        );
      }

      const patch: any = {};
      if (body.label !== undefined) patch.label = String(body.label).trim();
      if (body.description !== undefined)
        patch.description = body.description ? String(body.description) : null;
      if (body.price_multiplier !== undefined && body.price_multiplier !== "")
        patch.price_multiplier = Number(body.price_multiplier);
      if (body.order_index !== undefined && body.order_index !== "")
        patch.order_index = Number(body.order_index);
      if (body.status !== undefined) patch.status = String(body.status);

      try {
        const v = body.video as File | undefined;
        const p = body.poster as File | undefined;
        if (v && v.size > 0) {
          patch.video_path = await writeDresscodeAsset(v, params.id, "video");
        }
        if (p && p.size > 0) {
          patch.poster_path = await writeDresscodeAsset(p, params.id, "image");
        }
        const updated = await DresscodeService.update(params.id, patch);
        return (
          <DresscodeFormWrapper
            mode="edit"
            values={updated}
            flash={{ kind: "success", message: "Saved." }}
          />
        );
      } catch (err: any) {
        console.error("/// DRESSCODE UPDATE FAILED ///", err?.message ?? err);
        set.status = 400;
        return (
          <DresscodeFormWrapper
            mode="edit"
            values={{ ...existing, ...patch }}
            flash={{ kind: "error", message: err?.message ?? "Could not save." }}
          />
        );
      }
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({
        label: t.Optional(t.String()),
        description: t.Optional(t.String()),
        price_multiplier: t.Optional(t.String()),
        order_index: t.Optional(t.String()),
        status: t.Optional(t.String()),
        video: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
        poster: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
      }),
      beforeHandle: requireAdmin,
    },
  )

  .delete(
    "/dresscodes/:id",
    async ({ params, set }) => {
      try {
        const d = await DresscodeService.archive(params.id);
        return <DresscodeCard d={d} />;
      } catch (err: any) {
        console.error("/// DRESSCODE ARCHIVE FAILED ///", err?.message ?? err);
        set.status = 400;
        return <AdminError message={err?.message ?? "Could not archive."} />;
      }
    },
    { beforeHandle: requireAdmin },
  )

  .patch(
    "/dresscodes/:id/reactivate",
    async ({ params, set }) => {
      try {
        const d = await DresscodeService.reactivate(params.id);
        return <DresscodeCard d={d} />;
      } catch (err: any) {
        console.error("/// DRESSCODE REACTIVATE FAILED ///", err?.message ?? err);
        set.status = 400;
        return <AdminError message={err?.message ?? "Could not reactivate."} />;
      }
    },
    { beforeHandle: requireAdmin },
  )

  // ─── Vehicles ─────────────────────────────────────────────────────────────

  .get(
    "/vehicles",
    async ({ query }) => {
      try {
        const category = typeof query.category === "string" ? query.category : undefined;
        const vehicles = await VehicleService.listAll({ category });
        return (
          <AdminLayout title="Vehicles" active="vehicles">
            <VehiclesGrid vehicles={vehicles} category={category} />
          </AdminLayout>
        );
      } catch (err: any) {
        console.error("/// ADMIN VEHICLES LOAD FAILED ///", err?.message ?? err);
        return (
          <AdminLayout title="Vehicles" active="vehicles">
            <AdminError message="Could not load vehicles." />
          </AdminLayout>
        );
      }
    },
    { beforeHandle: requireAdmin },
  )

  .get(
    "/vehicles/new",
    async () => (
      <AdminLayout title="New vehicle" active="vehicles">
        <VehicleFormWrapper mode="create" />
      </AdminLayout>
    ),
    { beforeHandle: requireAdmin },
  )

  .get(
    "/vehicles/:id",
    async ({ params, set }) => {
      const v = await VehicleService.get(params.id);
      if (!v) {
        set.status = 404;
        return (
          <AdminLayout title="Not found" active="vehicles">
            <AdminError message={`No vehicle with id ${params.id}.`} />
          </AdminLayout>
        );
      }
      return (
        <AdminLayout title={`Edit · ${v.label}`} active="vehicles">
          <VehicleFormWrapper mode="edit" values={v} />
        </AdminLayout>
      );
    },
    { beforeHandle: requireAdmin },
  )

  .post(
    "/vehicles",
    async ({ body, set }) => {
      const id = String(body.id ?? "").trim();
      const label = String(body.label ?? "").trim();
      // Checkboxes with the same `name="categories"` arrive as an array
      // when multiple are checked, a single string when one is checked,
      // and undefined when none are. Normalize.
      const rawCats = (body as any).categories;
      const categories: string[] = Array.isArray(rawCats)
        ? rawCats.map(String)
        : rawCats != null
          ? [String(rawCats)]
          : [];
      const description = body.description ? String(body.description) : null;
      const scale =
        body.scale !== undefined && body.scale !== ""
          ? Number(body.scale)
          : 1.0;
      const model_rotation_y_deg =
        body.model_rotation_y_deg !== undefined &&
        body.model_rotation_y_deg !== ""
          ? Number(body.model_rotation_y_deg)
          : 0;
      const price_cents =
        body.price_dollars !== undefined && body.price_dollars !== ""
          ? Math.round(Number(body.price_dollars) * 100)
          : 0;
      const specs = parseSpecsField(body.specs_json);

      const renderError = (msg: string) => {
        set.status = 400;
        return (
          <VehicleFormWrapper
            mode="create"
            values={{
              id,
              label,
              categories: categories as any,
              category: (categories[0] ?? "PRINCIPAL") as any,
              description,
              scale,
              model_rotation_y_deg,
              price_cents,
              specs,
            }}
            flash={{ kind: "error", message: msg }}
          />
        );
      };

      try {
        // Validate the slug BEFORE touching the filesystem. HTMX submits
        // bypass HTML5 `pattern` validation, so a browser-side check isn't
        // enough — without this gate, a bad slug 400s the DB insert but
        // leaves an orphan upload on disk (e.g. "Rolls Royce Ghost.glb").
        if (!VEHICLE_SLUG_RE.test(id)) {
          return renderError(
            "ID must start with a letter and contain only letters, digits, _ or -. No spaces.",
          );
        }
        const m = body.model as File | undefined;
        const t = body.thumbnail as File | undefined;
        if (!m || m.size === 0) {
          return renderError("A GLB model is required.");
        }
        const model_path = await writeVehicleAsset(m, id, "model");
        let thumbnail_path: string | null = null;
        if (t && t.size > 0) {
          thumbnail_path = await writeVehicleAsset(t, id, "image");
        }
        await VehicleService.create({
          id,
          label,
          categories,
          description,
          model_path,
          thumbnail_path,
          scale,
          model_rotation_y_deg,
          price_cents,
          specs,
        });
        set.headers["HX-Redirect"] = `/admin/vehicles/${id}`;
        return "";
      } catch (err: any) {
        console.error("/// VEHICLE CREATE FAILED ///", err?.message ?? err);
        return renderError(err?.message ?? "Could not create vehicle.");
      }
    },
    {
      body: t.Object({
        id: t.String(),
        label: t.String(),
        // Multiple checkboxes share name="categories"; Elysia may produce
        // string | string[] | undefined. Accept the union and normalize.
        categories: t.Optional(
          t.Union([t.String(), t.Array(t.String())]),
        ),
        description: t.Optional(t.String()),
        scale: t.Optional(t.String()),
        model_rotation_y_deg: t.Optional(t.String()),
        price_dollars: t.Optional(t.String()),
        // JSON string built by VehicleEdit's inline serializer (hx-vals).
        // Server validates shape — see parseSpecsField below.
        specs_json: t.Optional(t.String()),
        status: t.Optional(t.String()),
        model: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
        thumbnail: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
      }),
      beforeHandle: requireAdmin,
    },
  )

  .patch(
    "/vehicles/:id",
    async ({ params, body, set }) => {
      const existing = await VehicleService.get(params.id);
      if (!existing) {
        set.status = 404;
        return (
          <VehicleFormWrapper
            mode="edit"
            values={{ id: params.id }}
            flash={{ kind: "error", message: "Vehicle not found." }}
          />
        );
      }

      const patch: any = {};
      if (body.label !== undefined) patch.label = String(body.label).trim();
      // Categories arrives as undefined / string / string[]; the form
      // always includes the field (with at least one checked), so a fully
      // missing value means "no change", a string means one checked, an
      // array means many.
      const rawCats = (body as any).categories;
      if (rawCats !== undefined) {
        patch.categories = Array.isArray(rawCats)
          ? rawCats.map(String)
          : [String(rawCats)];
      }
      if (body.description !== undefined)
        patch.description = body.description ? String(body.description) : null;
      if (body.scale !== undefined && body.scale !== "")
        patch.scale = Number(body.scale);
      if (body.model_rotation_y_deg !== undefined &&
          body.model_rotation_y_deg !== "")
        patch.model_rotation_y_deg = Number(body.model_rotation_y_deg);
      if (body.price_dollars !== undefined && body.price_dollars !== "")
        patch.price_cents = Math.round(Number(body.price_dollars) * 100);
      // `specs_json` is always present in the form payload (the inline
      // serializer emits "{}" for an empty list), so an undefined here
      // means the form didn't include the field at all. Either way we
      // only touch the column when something was sent.
      if (body.specs_json !== undefined) {
        patch.specs = parseSpecsField(body.specs_json);
      }
      if (body.status !== undefined) patch.status = String(body.status);

      try {
        const m = body.model as File | undefined;
        const t = body.thumbnail as File | undefined;
        if (m && m.size > 0) {
          patch.model_path = await writeVehicleAsset(m, params.id, "model");
        }
        if (t && t.size > 0) {
          patch.thumbnail_path = await writeVehicleAsset(t, params.id, "image");
        }
        const updated = await VehicleService.update(params.id, patch);
        return (
          <VehicleFormWrapper
            mode="edit"
            values={updated}
            flash={{ kind: "success", message: "Saved." }}
          />
        );
      } catch (err: any) {
        console.error("/// VEHICLE UPDATE FAILED ///", err?.message ?? err);
        set.status = 400;
        return (
          <VehicleFormWrapper
            mode="edit"
            values={{ ...existing, ...patch }}
            flash={{ kind: "error", message: err?.message ?? "Could not save." }}
          />
        );
      }
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({
        label: t.Optional(t.String()),
        categories: t.Optional(
          t.Union([t.String(), t.Array(t.String())]),
        ),
        description: t.Optional(t.String()),
        scale: t.Optional(t.String()),
        model_rotation_y_deg: t.Optional(t.String()),
        price_dollars: t.Optional(t.String()),
        specs_json: t.Optional(t.String()),
        status: t.Optional(t.String()),
        model: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
        thumbnail: t.Optional(t.File({ maxSize: MAX_UPLOAD_BYTES })),
      }),
      beforeHandle: requireAdmin,
    },
  )

  .delete(
    "/vehicles/:id",
    async ({ params, set }) => {
      try {
        const v = await VehicleService.archive(params.id);
        return <VehicleCard v={v} />;
      } catch (err: any) {
        console.error("/// VEHICLE ARCHIVE FAILED ///", err?.message ?? err);
        set.status = 400;
        return <AdminError message={err?.message ?? "Could not archive."} />;
      }
    },
    { beforeHandle: requireAdmin },
  )

  .patch(
    "/vehicles/:id/reactivate",
    async ({ params, set }) => {
      try {
        const v = await VehicleService.reactivate(params.id);
        return <VehicleCard v={v} />;
      } catch (err: any) {
        console.error("/// VEHICLE REACTIVATE FAILED ///", err?.message ?? err);
        set.status = 400;
        return <AdminError message={err?.message ?? "Could not reactivate."} />;
      }
    },
    { beforeHandle: requireAdmin },
  );
