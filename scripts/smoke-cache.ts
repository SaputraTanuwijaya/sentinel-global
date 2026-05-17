// One-off smoke for CatalogCache (Step 3 acceptance criterion).
//
// Verifies:
//   1. Second .get() of the same key does NOT call the loader.
//   2. After .invalidate(), the next .get() re-runs the loader.
//   3. Concurrent .get() calls coalesce to a single loader invocation.

import { CatalogCache } from "../src/core/cache";

function assert(cond: unknown, msg: string) {
  if (!cond) {
    console.error(`✗ ${msg}`);
    process.exit(1);
  }
  console.log(`✓ ${msg}`);
}

async function main() {
  let calls = 0;
  const loader = async () => {
    calls += 1;
    await new Promise((r) => setTimeout(r, 10));
    return { n: calls };
  };

  // 1) cold + warm
  const a = await CatalogCache.get("smoke", loader);
  const b = await CatalogCache.get("smoke", loader);
  assert(calls === 1, "loader called exactly once across two get() calls");
  assert(a === b, "cached result returned by reference on second get()");

  // 2) invalidate triggers reload
  CatalogCache.invalidate("smoke");
  const c = await CatalogCache.get("smoke", loader);
  assert(calls === 2, "loader called again after invalidate()");
  assert((c as any).n === 2, "new loader result is returned (not stale)");

  // 3) coalesce concurrent misses
  CatalogCache.invalidate("smoke");
  const [d, e, f] = await Promise.all([
    CatalogCache.get("smoke", loader),
    CatalogCache.get("smoke", loader),
    CatalogCache.get("smoke", loader),
  ]);
  assert(calls === 3, "three concurrent get() calls = one loader invocation");
  assert(d === e && e === f, "all three concurrent callers got the same result");

  console.log("\nall cache assertions passed.");
  process.exit(0);
}

main().catch((err) => {
  console.error("smoke failed:", err);
  process.exit(1);
});
