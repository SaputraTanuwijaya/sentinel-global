// Idempotent migration for the admin suite (Phase 2, Step 3).
//
// Creates six tables + their indexes, then seeds dresscodes, vehicles, and
// pricing_rules from the current hardcoded values. Safe to re-run:
//   - `CREATE TABLE IF NOT EXISTS` / `CREATE INDEX IF NOT EXISTS`
//   - `INSERT OR IGNORE` for seed rows (admin edits won't be clobbered)

import { db } from "../src/core/db";

const TABLES: { name: string; sql: string }[] = [
  {
    name: "dresscodes",
    sql: `
      CREATE TABLE IF NOT EXISTS dresscodes (
        id                TEXT PRIMARY KEY,
        label             TEXT NOT NULL,
        description       TEXT,
        video_path        TEXT,
        poster_path       TEXT,
        price_multiplier  REAL NOT NULL DEFAULT 1.0,
        order_index       INTEGER NOT NULL DEFAULT 0,
        status            TEXT NOT NULL DEFAULT 'active',
        created_at        TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at        TEXT
      )
    `,
  },
  {
    name: "vehicles",
    sql: `
      CREATE TABLE IF NOT EXISTS vehicles (
        id              TEXT PRIMARY KEY,
        label           TEXT NOT NULL,
        category        TEXT NOT NULL,
        description     TEXT,
        model_path      TEXT NOT NULL,
        thumbnail_path  TEXT,
        scale           REAL NOT NULL DEFAULT 1.0,
        price_cents     INTEGER NOT NULL DEFAULT 0,
        status          TEXT NOT NULL DEFAULT 'active',
        created_at      TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at      TEXT
      )
    `,
  },
  {
    name: "formations",
    sql: `
      CREATE TABLE IF NOT EXISTS formations (
        id              TEXT PRIMARY KEY,
        label           TEXT NOT NULL,
        description     TEXT,
        tier_id         TEXT,
        canvas_width    REAL NOT NULL DEFAULT 60,
        canvas_depth    REAL NOT NULL DEFAULT 200,
        status          TEXT NOT NULL DEFAULT 'active',
        created_at      TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at      TEXT
      )
    `,
  },
  {
    name: "slots",
    sql: `
      CREATE TABLE IF NOT EXISTS slots (
        id                  TEXT PRIMARY KEY,
        formation_id        TEXT NOT NULL REFERENCES formations(id),
        label               TEXT,
        x                   REAL NOT NULL,
        z                   REAL NOT NULL,
        rotation_deg        REAL NOT NULL DEFAULT 0,
        allowed_categories  TEXT NOT NULL,
        order_index         INTEGER NOT NULL DEFAULT 0,
        created_at          TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `,
  },
  {
    name: "pricing_rules",
    sql: `
      CREATE TABLE IF NOT EXISTS pricing_rules (
        key               TEXT PRIMARY KEY,
        category          TEXT NOT NULL,
        label             TEXT NOT NULL,
        description       TEXT,
        value_cents       INTEGER,
        value_multiplier  REAL,
        updated_at        TEXT
      )
    `,
  },
  {
    name: "assets",
    sql: `
      CREATE TABLE IF NOT EXISTS assets (
        id            TEXT PRIMARY KEY,
        kind          TEXT NOT NULL,
        file_path     TEXT NOT NULL,
        size_bytes    INTEGER,
        mime          TEXT,
        meta_json     TEXT,
        uploaded_by   TEXT,
        used_by       TEXT,
        status        TEXT NOT NULL DEFAULT 'staged',
        uploaded_at   TEXT DEFAULT CURRENT_TIMESTAMP,
        applied_at    TEXT,
        archived_at   TEXT
      )
    `,
  },
];

const INDEXES: string[] = [
  `CREATE INDEX IF NOT EXISTS idx_dresscodes_status ON dresscodes(status, order_index)`,
  `CREATE INDEX IF NOT EXISTS idx_vehicles_category ON vehicles(category, status)`,
  `CREATE INDEX IF NOT EXISTS idx_slots_formation   ON slots(formation_id, order_index)`,
  `CREATE INDEX IF NOT EXISTS idx_assets_status     ON assets(status, kind)`,
];

// ─── Seed data ──────────────────────────────────────────────────────────────

type Dresscode = {
  id: string;
  label: string;
  description: string;
  video_path: string;
  poster_path: string | null;
  order_index: number;
};

const DRESSCODES: Dresscode[] = [
  {
    id: "business_formal",
    label: "Business Formal",
    description:
      "Standard corporate attire. Minimal visibility. Armor concealed beneath tailored suits. Ideal for board meetings and urban environments where discretion is paramount.",
    video_path: "/public/assets/videos/business_formal.mp4",
    poster_path: null,
    order_index: 0,
  },
  {
    id: "casual_formal",
    label: "Casual Formal",
    description:
      "Relaxed professional wear. Blazers without ties. Allows for quicker movement and concealed carry of larger sidearms. Suitable for tech conferences or semi-private events.",
    // Closest on-disk file. Step 5's upload UI will let the admin replace.
    video_path: "/public/assets/videos/business_casual.mp4",
    poster_path: null,
    order_index: 1,
  },
  {
    id: "tactical_casual",
    label: "Tactical Casual",
    description:
      "Low-profile tactical gear blended with civilian clothing. Plate carriers visible but understated. Good for high-risk public areas where a show of force is necessary but not overwhelming.",
    video_path: "/public/assets/videos/tactical_casual.mp4",
    poster_path: null,
    order_index: 2,
  },
  {
    id: "full_tactical",
    label: "Full Tactical",
    description:
      "Heavy exterior armor, visible weaponry, and helmet systems. Maximum deterrence and protection. Not suitable for covert operations. Use only in high-threat zones.",
    video_path: "/public/assets/videos/full_tactical.mp4",
    poster_path: null,
    order_index: 3,
  },
];

type Vehicle = {
  id: string;
  label: string;
  category: string; // {LEAD, ECM, JAMMER, TAIL, SEDAN, SUV}
  description: string;
  model_path: string;
  thumbnail_path: string;
};

// NOTE: category enum is hardcoded v1 per docs/admin.md. SUVs/trucks → SUV;
// motorcycles → TAIL (closest match in the enum). The admin can correct in
// Step 6 once Vehicles CRUD is wired.
const VEHICLES: Vehicle[] = [
  {
    id: "Escalade",
    label: "Cadillac Escalade",
    category: "SUV",
    description:
      "Class-7 Armored Transport. Features run-flat tires, reinforced chassis, and explosive protection.",
    model_path: "/public/assets/models/CadillacEscalade_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/Escalade_Icon.jpeg",
  },
  {
    id: "G63",
    label: "Mercedes G63 AMG",
    category: "SUV",
    description:
      "Counter Assault Team unit. Integrated weapons storage and rapid egress points for tactical operators.",
    model_path: "/public/assets/models/MercedesAMGG63_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/G63AMG_Icon.jpeg",
  },
  {
    id: "Suburban",
    label: "Chevy Suburban",
    category: "SUV",
    description:
      "Support and ECM platform. Carries trauma kits, signal-jamming suite, and secure comms uplink.",
    model_path: "/public/assets/models/ChevroletSuburban_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/Suburban_Icon.jpeg",
  },
  {
    id: "F150",
    label: "Ford F-150",
    category: "SUV",
    description:
      "Heavy pursuit and ramming vehicle. Bull bars and high-torque engine for roadblock clearance.",
    model_path: "/public/assets/models/FordF150_Optimized-v3.glb",
    thumbnail_path: "/public/assets/images/F150_Icon.jpeg",
  },
  {
    id: "BMW",
    label: "BMW S1000RR",
    category: "TAIL",
    description:
      "Rapid advance scout. Used for traffic clearing and early threat detection in dense urban environments.",
    model_path: "/public/assets/models/BMW-S1000RR_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/S1000RR_Icon.jpeg",
  },
  {
    id: "Electra",
    label: "Electra Glide Tactical",
    category: "TAIL",
    description:
      "Heavy escort cruiser. Optimized for motorcade stability with high-visibility tactical presence.",
    model_path: "/public/assets/models/Electra_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/ElectraGlide_Icon.jpeg",
  },
];

type PricingRule = {
  key: string;
  category: string;
  label: string;
  description: string;
  value_cents: number | null;
  value_multiplier: number | null;
};

// Seeded 1:1 from MissionService.PRICING so Step 4's refactor is a direct
// lookup swap. The illustrative matrix in docs/admin.md (base + tier mult +
// dress mult + vehicle category price) is forward-looking — categories like
// "dress" can be added by the admin once Step 4's matrix UI lands.
const PRICING: PricingRule[] = [
  {
    key: "base.per_principal_hour",
    category: "base",
    label: "Per principal / hour",
    description: "Hourly rate charged per protected principal.",
    value_cents: 8000,
    value_multiplier: null,
  },
  {
    key: "tier.Vanguard",
    category: "tier",
    label: "Vanguard",
    description: "Entry tier. Flat hourly add (cents).",
    value_cents: 0,
    value_multiplier: null,
  },
  {
    key: "tier.Sentinel",
    category: "tier",
    label: "Sentinel",
    description: "Mid tier. Flat hourly add (cents).",
    value_cents: 15000,
    value_multiplier: null,
  },
  {
    key: "tier.Praetorian",
    category: "tier",
    label: "Praetorian",
    description: "Top tier. Flat hourly add (cents).",
    value_cents: 40000,
    value_multiplier: null,
  },
  {
    key: "vehicle_role.PRINCIPAL",
    category: "vehicle_role",
    label: "Principal slot",
    description: "Hourly rate per vehicle in the principal slot.",
    value_cents: 10000,
    value_multiplier: null,
  },
  {
    key: "vehicle_role.SWEEPER",
    category: "vehicle_role",
    label: "Sweeper",
    description: "Hourly rate per sweeper unit.",
    value_cents: 3000,
    value_multiplier: null,
  },
  {
    key: "vehicle_role.LEAD",
    category: "vehicle_role",
    label: "Lead",
    description: "Hourly rate per lead unit.",
    value_cents: 7000,
    value_multiplier: null,
  },
  {
    key: "vehicle_role.CAT",
    category: "vehicle_role",
    label: "CAT",
    description: "Hourly rate per counter-assault unit.",
    value_cents: 15000,
    value_multiplier: null,
  },
  {
    key: "vehicle_role.ECM",
    category: "vehicle_role",
    label: "ECM",
    description: "Hourly rate per ECM unit.",
    value_cents: 20000,
    value_multiplier: null,
  },
  {
    key: "vehicle_role.REAR",
    category: "vehicle_role",
    label: "Rear",
    description: "Hourly rate per rear-guard unit.",
    value_cents: 7000,
    value_multiplier: null,
  },
];

// ─── Run ────────────────────────────────────────────────────────────────────

async function run() {
  console.log("→ creating tables");
  for (const t of TABLES) {
    await db.execute(t.sql);
    console.log(`   ✓ ${t.name}`);
  }

  console.log("→ creating indexes");
  for (const idx of INDEXES) {
    await db.execute(idx);
  }
  console.log(`   ✓ ${INDEXES.length} indexes`);

  console.log("→ seeding dresscodes");
  for (const d of DRESSCODES) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO dresscodes
            (id, label, description, video_path, poster_path,
             price_multiplier, order_index, status)
            VALUES (?, ?, ?, ?, ?, 1.0, ?, 'active')`,
      args: [
        d.id,
        d.label,
        d.description,
        d.video_path,
        d.poster_path,
        d.order_index,
      ],
    });
  }
  console.log(`   ✓ ${DRESSCODES.length} dresscodes (or already present)`);

  console.log("→ seeding vehicles");
  for (const v of VEHICLES) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO vehicles
            (id, label, category, description, model_path, thumbnail_path,
             scale, price_cents, status)
            VALUES (?, ?, ?, ?, ?, ?, 1.0, 0, 'active')`,
      args: [
        v.id,
        v.label,
        v.category,
        v.description,
        v.model_path,
        v.thumbnail_path,
      ],
    });
  }
  console.log(`   ✓ ${VEHICLES.length} vehicles (or already present)`);

  console.log("→ seeding pricing rules");
  for (const p of PRICING) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO pricing_rules
            (key, category, label, description, value_cents, value_multiplier)
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [
        p.key,
        p.category,
        p.label,
        p.description,
        p.value_cents,
        p.value_multiplier,
      ],
    });
  }
  console.log(`   ✓ ${PRICING.length} pricing rules (or already present)`);

  // Summary counts
  const counts = await Promise.all([
    db.execute("SELECT COUNT(*) AS n FROM dresscodes"),
    db.execute("SELECT COUNT(*) AS n FROM vehicles"),
    db.execute("SELECT COUNT(*) AS n FROM formations"),
    db.execute("SELECT COUNT(*) AS n FROM slots"),
    db.execute("SELECT COUNT(*) AS n FROM pricing_rules"),
    db.execute("SELECT COUNT(*) AS n FROM assets"),
  ]);
  const names = ["dresscodes", "vehicles", "formations", "slots", "pricing_rules", "assets"];
  console.log("\n→ row counts");
  counts.forEach((r, i) => {
    console.log(`   ${names[i].padEnd(14)} ${r.rows[0]!.n}`);
  });
  console.log("\ndone.");
  process.exit(0);
}

run().catch((err) => {
  console.error("migration failed:", err);
  process.exit(1);
});
