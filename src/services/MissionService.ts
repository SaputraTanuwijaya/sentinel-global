import { db } from "../core/db";
import type { MissionState } from "../modules/order/models/Mission";

export class MissionService {
  // Set Pricing as Centralized
  private static PRICING = {
    PRINCIPAL: 80,
    TIERS: { Vanguard: 0, Sentinel: 150, Praetorian: 400 },
    MOTORCADE: {
      PRINCIPAL: 100,
      SWEEPER: 30,
      LEAD: 70,
      CAT: 150,
      ECM: 200,
      REAR: 70,
    },
  };

  public static async processDeployment(state: MissionState, userEmail: string) {
    const pCount = Number(state.principalCount) || 1;
    const tName = state.tierName || "Vanguard";
    const duration = Number(state.hours) || 6;

    let hourlyTotal = pCount * this.PRICING.PRINCIPAL;
    hourlyTotal +=
      this.PRICING.TIERS[tName as keyof typeof this.PRICING.TIERS] || 0;

    let mCost = 0;
    if (state.motorcade) {
      Object.values(state.motorcade).forEach((v) => {
        if (v.id !== "none") {
          mCost +=
            (Number(v.amount) || 0) *
            (Number(
              this.PRICING.MOTORCADE[
                v.role as keyof typeof this.PRICING.MOTORCADE
              ],
            ) || 0);
        }
      });
    }
    hourlyTotal += mCost;

    const totalCostCents = Math.round(hourlyTotal * duration * 100);
    const missionId =
      "OP-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    await db.execute({
      sql: `INSERT INTO missions (
          id, user_email, principal_count, tier_name, dress_code_id, 
          motorcade_json, total_cost_cents, duration_hours, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
