import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";
import { jwtPlugin, requireAdmin } from "../../core/auth";
import { MissionService } from "../../services/MissionService";
import { PricingService } from "../../services/PricingService";
import { DresscodeService } from "../../services/DresscodeService";
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
import { writeDresscodeAsset, MAX_UPLOAD_BYTES } from "../../core/uploads";

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
  );
