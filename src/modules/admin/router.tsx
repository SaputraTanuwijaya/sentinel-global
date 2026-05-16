import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";
import { jwtPlugin, requireAdmin } from "../../core/auth";
import { MissionService } from "../../services/MissionService";
import { AdminLayout } from "../../views/admin/AdminLayout";
import {
  AdminDashboard,
  AdminError,
  MissionRow,
  StatusChip,
} from "../../views/Admin";
import { AdminMissionDetail } from "../../views/admin/AdminMissionDetail";

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
  );
