import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";
import { jwtPlugin, requireAdmin } from "../../core/auth";
import { MissionService } from "../../services/MissionService";
import { PricingService } from "../../services/PricingService";
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
  );
