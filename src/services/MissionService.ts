import { db } from "../core/db";
import type { MissionState } from "../modules/order/models/Mission";
import { PricingService } from "./PricingService";
import { VehicleService } from "./VehicleService";

// Tracks which missing keys we've already warned about, so the log doesn't
// fill up if an admin archives a row that's referenced every checkout.
const warnedMissingKeys = new Set<string>();
function warnMissingKey(key: string) {
  if (warnedMissingKeys.has(key)) return;
  warnedMissingKeys.add(key);
  console.warn(`/// PRICING: no rule for "${key}" — falling back to 0 cents`);
}

export class MissionService {
  public static async processDeployment(state: MissionState, userEmail: string) {
    const pCount = Number(state.principalCount) || 1;
    const tName = state.tierName || "Vanguard";
    const duration = Number(state.hours) || 6;

    const rules = await PricingService.getAllAsMap();
    const cents = (key: string): number => {
      const r = rules.get(key);
      if (!r || r.value_cents == null) {
        warnMissingKey(key);
        return 0;
      }
      return r.value_cents;
    };

    let hourlyCents = pCount * cents("base.per_principal_hour");
    hourlyCents += cents(`tier.${tName}`);

    // Vehicle prices live on `vehicles.price_cents` (per-row), not on the
    // pricing_rules matrix. Build an id→price map from the active catalog;
    // a vehicle archived between pick-time and checkout would be missing
    // here and warns-then-0 rather than crashing the checkout.
    if (state.motorcade) {
      const vehicles = await VehicleService.listActive();
      const priceById = new Map(vehicles.map((v) => [v.id, v.price_cents]));
      Object.values(state.motorcade).forEach((v) => {
        if (v.id === "none") return;
        const unitCents = priceById.get(v.id);
        if (unitCents == null) {
          warnMissingKey(`vehicle:${v.id}`);
          return;
        }
        hourlyCents += (Number(v.amount) || 0) * unitCents;
      });
    }

    const totalCostCents = hourlyCents * duration;
    const missionId =
      "OP-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Rendezvous columns are NULLable so rows from before the columns existed
    // still validate; here we write whatever the wizard sent. The route layer
    // validates lat/lng bounds and time length so we don't re-check.
    const locLat = state.location?.lat ?? null;
    const locLng = state.location?.lng ?? null;
    const rendezvousAt = state.time ?? null;

    await db.execute({
      sql: `INSERT INTO missions (
          id, user_email, principal_count, tier_name, dress_code_id,
          motorcade_json, total_cost_cents, duration_hours, status,
          location_lat, location_lng, rendezvous_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        missionId,
        userEmail,
        pCount,
        tName,
        state.dressCode || "business_formal",
        JSON.stringify(state.motorcade || {}),
        totalCostCents,
        duration,
        "authorized",
        locLat,
        locLng,
        rendezvousAt,
      ],
    });

    return missionId;
  }

  public static async getAllMissions() {
    const result = await db.execute(
      "SELECT * FROM missions ORDER BY created_at DESC LIMIT 200",
    );
    return result.rows;
  }

  public static async getMission(id: string) {
    const result = await db.execute({
      sql: "SELECT * FROM missions WHERE id = ? LIMIT 1",
      args: [id],
    });
    return result.rows[0] ?? null;
  }

  public static readonly ALLOWED_STATUS = [
    "authorized",
    "in_progress",
    "complete",
    "aborted",
  ] as const;

  public static async updateStatus(
    id: string,
    status: string,
  ): Promise<MissionStatus> {
    if (!MissionService.ALLOWED_STATUS.includes(status as MissionStatus)) {
      throw new Error(`Invalid status: ${status}`);
    }
    const result = await db.execute({
      sql: "UPDATE missions SET status = ? WHERE id = ? RETURNING status",
      args: [status, id],
    });
    if (result.rows.length === 0) {
      throw new Error(`Mission not found: ${id}`);
    }
    return status as MissionStatus;
  }
}

export type MissionStatus = (typeof MissionService.ALLOWED_STATUS)[number];
