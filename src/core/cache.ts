// Per-process in-memory catalog cache.
//
// Reads of catalog data (dresscodes, vehicles, pricing, formations) happen on
// every wizard request. They change only when an admin saves. Cache hits avoid
// a Turso round-trip and turn reads into O(1) Map lookups.
//
// Concurrent loaders are coalesced: if two requests miss the cache for the same
// key simultaneously, only one DB call fires; both await the same promise.
//
// Single-process scope. A Bun restart rebuilds from DB. For multi-replica
// deploys, swap this for a `cache_version` poll row (see docs/admin.md).

export class CatalogCache {
  private static cache = new Map<string, unknown>();
  private static inflight = new Map<string, Promise<unknown>>();

  static async get<T>(key: string, loader: () => Promise<T>): Promise<T> {
    if (this.cache.has(key)) {
      return this.cache.get(key) as T;
    }
    const existing = this.inflight.get(key);
    if (existing) return existing as Promise<T>;

    const p = loader()
      .then((value) => {
        this.cache.set(key, value);
        this.inflight.delete(key);
        return value;
      })
      .catch((err) => {
        // Drop the in-flight slot so the next caller retries instead of
        // forever-replaying the same failure.
        this.inflight.delete(key);
        throw err;
      });

    this.inflight.set(key, p);
    return p as Promise<T>;
  }

  static invalidate(key: string): void {
    this.cache.delete(key);
    // NOTE: intentionally not touching `inflight`. A concurrent loader may
    // populate the cache moments after this call; the next write will
    // invalidate again. Fine for a single-admin v1.
  }

  /** Test helper. Not for production use. */
  static _resetForTests(): void {
    this.cache.clear();
    this.inflight.clear();
  }
}
