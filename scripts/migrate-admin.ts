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
        category        TEXT NOT NULL,             -- legacy single value, kept for back-compat; service reads from \`categories\`
        categories      TEXT NOT NULL DEFAULT '[]', -- JSON array of slot-role strings (PRINCIPAL, LEAD, REAR, SWEEPER, CAT, ECM)
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
  // Primary category (for the legacy `category` column). Use the first
  // entry of `categories` so old code that reads the column gets a sane
  // value. The service reads from the JSON `categories` array.
  category: string;
  categories: string[]; // role-based enum: PRINCIPAL, LEAD, REAR, SWEEPER, CAT, ECM
  description: string;
  model_path: string;
  thumbnail_path: string;
};

// Per-vehicle Y-axis rotation correction (degrees). Some GLBs are authored
// facing the wrong direction relative to the +Z forward convention; this
// value is added once when the `model_rotation_y_deg` column is introduced.
// Admin edits afterwards take precedence — the migration only writes on the
// first run that adds the column.
const SEED_ROTATIONS: Record<string, number> = {
  F150: 180,
  Electra: 180,
};

// Per-vehicle technical specs. Replaces the in-file KNOWN_SPECS const that
// used to live in Motorcade.tsx — now the wizard reads specs straight from
// the catalog manifest. New keys can be added per-vehicle in admin without
// touching client code; the spec panel renders whatever it receives.
const SEED_SPECS: Record<string, Record<string, string>> = {
  Escalade: {
    armor: "B7 (Heavy)",
    protection: "Explosive Resistant",
    hp: "420 HP",
    torque: "460 LB-FT",
    speed: "130 MPH",
    occupancy: "2+2",
  },
  G63: {
    armor: "B6+",
    protection: "High Ballistic (Level 4+)",
    hp: "577 HP",
    torque: "627 LB-FT",
    speed: "145 MPH",
    occupancy: "5",
  },
  Suburban: {
    armor: "B6",
    protection: "Ballistic (Level 4)",
    hp: "355 HP",
    torque: "383 LB-FT",
    speed: "120 MPH",
    occupancy: "6",
  },
  F150: {
    armor: "B6 (Light)",
    protection: "Ballistic (Level 3)",
    hp: "450 HP",
    torque: "510 LB-FT",
    speed: "110 MPH",
    occupancy: "4",
  },
  BMW: {
    armor: "None",
    protection: "None",
    hp: "205 HP",
    torque: "83 LB-FT",
    speed: "185 MPH",
    occupancy: "1",
  },
  Electra: {
    armor: "None",
    protection: "None",
    hp: "105 HP",
    torque: "122 LB-FT",
    speed: "115 MPH",
    occupancy: "1",
  },
};

// Vehicles are categorized by their convoy role (matching the slot roles in
// Motorcade.tsx), not by chassis. Multi-role assignments mirror the original
// hardcoded VEHICLE_DB in the wizard.
const VEHICLES: Vehicle[] = [
  {
    id: "Escalade",
    label: "Cadillac Escalade",
    category: "PRINCIPAL",
    categories: ["PRINCIPAL"],
    description:
      "Class-7 Armored Transport. Features run-flat tires, reinforced chassis, and explosive protection.",
    model_path: "/public/assets/models/CadillacEscalade_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/Escalade_Icon.jpeg",
  },
  {
    id: "G63",
    label: "Mercedes G63 AMG",
    category: "CAT",
    categories: ["CAT"],
    description:
      "Counter Assault Team unit. Integrated weapons storage and rapid egress points for tactical operators.",
    model_path: "/public/assets/models/MercedesAMGG63_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/G63AMG_Icon.jpeg",
  },
  {
    id: "Suburban",
    label: "Chevy Suburban",
    category: "REAR",
    categories: ["REAR", "ECM"],
    description:
      "Support and ECM platform. Carries trauma kits, signal-jamming suite, and secure comms uplink.",
    model_path: "/public/assets/models/ChevroletSuburban_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/Suburban_Icon.jpeg",
  },
  {
    id: "F150",
    label: "Ford F-150",
    category: "LEAD",
    categories: ["LEAD", "REAR"],
    description:
      "Heavy pursuit and ramming vehicle. Bull bars and high-torque engine for roadblock clearance.",
    model_path: "/public/assets/models/FordF150_Optimized-v3.glb",
    thumbnail_path: "/public/assets/images/F150_Icon.jpeg",
  },
  {
    id: "BMW",
    label: "BMW S1000RR",
    category: "SWEEPER",
    categories: ["SWEEPER"],
    description:
      "Rapid advance scout. Used for traffic clearing and early threat detection in dense urban environments.",
    model_path: "/public/assets/models/BMW-S1000RR_Optimized-v1.glb",
    thumbnail_path: "/public/assets/images/S1000RR_Icon.jpeg",
  },
  {
    id: "Electra",
    label: "Electra Glide Tactical",
    category: "SWEEPER",
    categories: ["SWEEPER"],
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

  // ── Idempotent upgrade: pre-multi-category installs ─────────────────────
  // Older installs had vehicles.category (single TEXT) and no `categories`
  // column. Add the column if missing and backfill from the original
  // hardcoded VEHICLE_DB so seeded vehicles inherit their true multi-role
  // assignments. Any non-seeded vehicle gets [category] as a single-item
  // array (best guess from its legacy value).
  console.log("→ upgrading vehicles.categories (if needed)");
  const cols = await db.execute("PRAGMA table_info(vehicles)");
  const hasCategories = cols.rows.some(
    (r: any) => (r.name ?? r[1]) === "categories",
  );
  if (!hasCategories) {
    await db.execute(
      "ALTER TABLE vehicles ADD COLUMN categories TEXT NOT NULL DEFAULT '[]'",
    );
    // Best-effort backfill from legacy single-value `category`. Replaced
    // below for known seeded vehicles.
    await db.execute(
      "UPDATE vehicles SET categories = json_array(category) WHERE categories = '[]'",
    );
    console.log("   ✓ added categories column + backfilled from category");
  } else {
    console.log("   ✓ categories column already present");
  }
  // Always re-apply the canonical multi-role mapping for the seeded
  // vehicles, so previous incorrect assignments (SUV/TAIL) are corrected.
  for (const v of VEHICLES) {
    await db.execute({
      sql: "UPDATE vehicles SET category = ?, categories = ? WHERE id = ?",
      args: [v.category, JSON.stringify(v.categories), v.id],
    });
  }
  console.log("   ✓ canonical role-based categories applied to seeded vehicles");

  // ── Idempotent upgrade: vehicles.model_rotation_y_deg ───────────────────
  // Replaces the F150/Electra hardcoded `vehicle.rotation.y = Math.PI`
  // branch in SceneManager.loadVehicleAt. First-run only: backfill the two
  // known-backward GLBs. Subsequent runs respect whatever the admin set.
  console.log("→ upgrading vehicles.model_rotation_y_deg (if needed)");
  const hasRotation = cols.rows.some(
    (r: any) => (r.name ?? r[1]) === "model_rotation_y_deg",
  );
  if (!hasRotation) {
    await db.execute(
      "ALTER TABLE vehicles ADD COLUMN model_rotation_y_deg REAL NOT NULL DEFAULT 0",
    );
    for (const [id, deg] of Object.entries(SEED_ROTATIONS)) {
      await db.execute({
        sql: "UPDATE vehicles SET model_rotation_y_deg = ? WHERE id = ?",
        args: [deg, id],
      });
    }
    console.log("   ✓ added model_rotation_y_deg + backfilled F150/Electra");
  } else {
    console.log("   ✓ model_rotation_y_deg already present");
  }

  // ── Idempotent upgrade: vehicles.specs_json ─────────────────────────────
  // Replaces the in-file KNOWN_SPECS in Motorcade.tsx. First-run only:
  // seed canonical specs for the v1 vehicles. Admin edits afterwards are
  // not clobbered (only re-runs that re-add the column would touch them,
  // and re-adding is gated by the column-exists check).
  console.log("→ upgrading vehicles.specs_json (if needed)");
  const hasSpecs = cols.rows.some(
    (r: any) => (r.name ?? r[1]) === "specs_json",
  );
  if (!hasSpecs) {
    await db.execute("ALTER TABLE vehicles ADD COLUMN specs_json TEXT");
    for (const [id, specs] of Object.entries(SEED_SPECS)) {
      await db.execute({
        sql: "UPDATE vehicles SET specs_json = ? WHERE id = ?",
        args: [JSON.stringify(specs), id],
      });
    }
    console.log("   ✓ added specs_json + seeded v1 vehicle specs");
  } else {
    console.log("   ✓ specs_json already present");
  }

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
            (id, label, category, categories, description, model_path, thumbnail_path,
             scale, price_cents, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, 1.0, 0, 'active')`,
      args: [
        v.id,
        v.label,
        v.category,
        JSON.stringify(v.categories),
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
