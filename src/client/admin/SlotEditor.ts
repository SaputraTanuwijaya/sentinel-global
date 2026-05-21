// Slot editor — interactive client for /admin/formations/:id.
//
// Server-rendered SVG is authoritative on first paint. This module wires:
//   • pointer drag → debounced PATCH /admin/slots/:id  {x, z}
//   • click empty → role-picker popover → POST /admin/formations/:id/slots
//   • click slot  → populate sidebar; live PATCH on field change
//   • Del key     → DELETE /admin/slots/:id   (when slot selected)
//   • R   key     → rotate +90°, PATCH        (when slot selected)
//   • Esc key     → deselect
//   • wheel       → zoom around cursor (modulates SVG viewBox)
//   • Space drag / middle drag / right drag → pan
//   • 0 key       → fit to canvas
//
// All writes return either a single <g> fragment (POST/PATCH) or empty body
// (DELETE). The fragment is injected into the existing <g> in place; the
// existing event delegation re-binds without explicit re-init.
//
// Zoom/pan is implemented purely by mutating the <svg viewBox>. Because slot
// drag math goes through getScreenCTM().inverse(), it adapts to the new view
// automatically — no special-casing inside drag handlers.

type Slot = {
  id: string;
  x: number;
  z: number;
  rotation: number;
  categories: string[];
  label: string;
};

const DRAG_THRESHOLD_PX = 3;
const PATCH_DEBOUNCE_MS = 250;

// Wheel zoom: each notch scales by ZOOM_STEP. Browsers vary in wheel delta
// (line vs pixel), so we normalise by sign rather than magnitude.
const ZOOM_STEP = 1.15;
// Hard bounds, expressed relative to the canvas's initial fit:
//   MIN_ZOOM = 1.0   → viewBox = initial (canvas fills viewport)
//   MAX_ZOOM = 20    → 1/20th of initial canvas → fine slot placement
const MIN_ZOOM = 1.0;
const MAX_ZOOM = 20.0;

const ROLES = [
  "PRINCIPAL",
  "LEAD",
  "REAR",
  "SWEEPER",
  "CAT",
  "ECM",
] as const;

export function initSlotEditor(): void {
  const svg = document.getElementById("slot-editor-svg") as SVGSVGElement | null;
  const canvas = document.getElementById("slot-editor-canvas");
  if (!svg || !canvas) return;

  // Re-entry guard. AdminLayout is non-boosted, so this only matters if a
  // future change ever swaps the editor into a boosted page.
  if ((canvas as any).dataset.editorBound === "1") return;
  (canvas as any).dataset.editorBound = "1";

  const formationId = canvas.getAttribute("data-formation-id") ?? "";
  const depth = Number(canvas.getAttribute("data-canvas-depth") ?? 200);
  const slotsLayer = svg.querySelector("#slots-layer") as SVGGElement | null;
  const popover = document.getElementById(
    "slot-add-popover",
  ) as HTMLDivElement | null;
  const popoverError = document.getElementById(
    "slot-add-error",
  ) as HTMLParagraphElement | null;
  const popoverCancel = document.getElementById("slot-add-cancel");
  const popoverConfirm = document.getElementById(
    "slot-add-confirm",
  ) as HTMLButtonElement | null;
  const sidebarEmpty = document.getElementById("slot-sidebar-empty");
  const sidebarDetail = document.getElementById("slot-sidebar-detail");
  const detailId = document.getElementById("slot-detail-id");
  const detailLabel = document.getElementById(
    "slot-detail-label",
  ) as HTMLInputElement | null;
  const detailX = document.getElementById(
    "slot-detail-x",
  ) as HTMLInputElement | null;
  const detailZ = document.getElementById(
    "slot-detail-z",
  ) as HTMLInputElement | null;
  const detailRotation = document.getElementById(
    "slot-detail-rotation",
  ) as HTMLInputElement | null;
  const detailRoles = document.getElementById(
    "slot-detail-roles",
  ) as HTMLDivElement | null;
  const detailDelete = document.getElementById("slot-detail-delete");
  const detailDeselect = document.getElementById("slot-detail-deselect");
  const detailError = document.getElementById(
    "slot-detail-error",
  ) as HTMLParagraphElement | null;

  if (
    !slotsLayer ||
    !popover ||
    !popoverConfirm ||
    !popoverCancel ||
    !sidebarEmpty ||
    !sidebarDetail ||
    !detailId ||
    !detailLabel ||
    !detailX ||
    !detailZ ||
    !detailRotation ||
    !detailRoles ||
    !detailDelete ||
    !detailDeselect ||
    !detailError ||
    !popoverError
  ) {
    console.warn("SlotEditor: missing required DOM nodes; skipping init");
    return;
  }

  let selectedId: string | null = null;
  // SVG units, derived from data-* on the selected <g>.
  let pendingAdd: { x: number; z: number } | null = null;

  // ── viewport (zoom + pan) ───────────────────────────────────────────────
  //
  // The SVG's initial `viewBox` defines the "fit" state. Zoom/pan mutate a
  // local copy and write it back; everything else (slot transforms, popover
  // positioning, drag math) is unaffected because they go through the SVG's
  // own coordinate transforms (getScreenCTM).

  type Viewport = { x: number; y: number; w: number; h: number };

  function parseViewBox(s: string | null): Viewport {
    if (!s) return { x: 0, y: 0, w: 100, h: 100 };
    const parts = s.split(/\s+|,/).map(Number);
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) {
      return { x: 0, y: 0, w: 100, h: 100 };
    }
    return { x: parts[0]!, y: parts[1]!, w: parts[2]!, h: parts[3]! };
  }

  const initialViewBox = parseViewBox(
    svg.getAttribute("data-initial-viewbox") ?? svg.getAttribute("viewBox"),
  );
  let viewport: Viewport = { ...initialViewBox };

  const zoomReadout = document.getElementById("zoom-readout");
  const zoomIn = document.getElementById("zoom-in");
  const zoomOut = document.getElementById("zoom-out");
  const zoomFit = document.getElementById("zoom-fit");
  const panHint = document.getElementById("slot-editor-pan-hint");

  // Ratio of initial.w / current.w. 1 = fit, 20 = maxed in.
  function currentZoom(): number {
    return initialViewBox.w / viewport.w;
  }

  function clampViewport(v: Viewport): Viewport {
    // Clamp zoom level by adjusting w/h around the viewport centre.
    const zoom = initialViewBox.w / v.w;
    let scale = 1;
    if (zoom < MIN_ZOOM) scale = zoom / MIN_ZOOM;
    else if (zoom > MAX_ZOOM) scale = zoom / MAX_ZOOM;
    if (scale !== 1) {
      const cx = v.x + v.w / 2;
      const cy = v.y + v.h / 2;
      v.w = v.w * scale;
      v.h = v.h * scale;
      v.x = cx - v.w / 2;
      v.y = cy - v.h / 2;
    }
    return v;
  }

  function applyViewport() {
    viewport = clampViewport(viewport);
    svg!.setAttribute(
      "viewBox",
      `${viewport.x} ${viewport.y} ${viewport.w} ${viewport.h}`,
    );
    if (zoomReadout) {
      zoomReadout.textContent = `${Math.round(currentZoom() * 100)}%`;
    }
  }

  // Zoom around an SVG point (typically the cursor's SVG location). Keeps
  // that point pinned to its current screen position by recomputing the
  // viewBox origin from the new size + relative cursor offset.
  function zoomAtSvgPoint(p: { x: number; y: number }, factor: number) {
    const relX = (p.x - viewport.x) / viewport.w;
    const relY = (p.y - viewport.y) / viewport.h;
    const newW = viewport.w / factor;
    const newH = viewport.h / factor;
    viewport = {
      x: p.x - relX * newW,
      y: p.y - relY * newH,
      w: newW,
      h: newH,
    };
    applyViewport();
  }

  function panBy(dxScreen: number, dyScreen: number) {
    const rect = svg!.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    // SVG units per screen pixel. preserveAspectRatio is xMidYMid meet, so
    // both axes share the smaller of the two ratios — pick that one.
    const scale = Math.min(viewport.w / rect.width, viewport.h / rect.height);
    viewport.x -= dxScreen * scale;
    viewport.y -= dyScreen * scale;
    applyViewport();
  }

  function fitViewport() {
    viewport = { ...initialViewBox };
    applyViewport();
  }

  // Initial paint of the zoom readout.
  applyViewport();

  // Wheel zoom — anchored on the cursor.
  svg.addEventListener(
    "wheel",
    (e) => {
      // Don't hijack scroll if a sidebar field has focus and user is
      // scrolling a number input; only zoom when over the canvas.
      e.preventDefault();
      const p = screenToSvg(e.clientX, e.clientY);
      const factor = e.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP;
      zoomAtSvgPoint(p, factor);
    },
    { passive: false },
  );

  zoomIn?.addEventListener("click", () => {
    // Zoom around the canvas centre.
    const cx = viewport.x + viewport.w / 2;
    const cy = viewport.y + viewport.h / 2;
    zoomAtSvgPoint({ x: cx, y: cy }, ZOOM_STEP);
  });
  zoomOut?.addEventListener("click", () => {
    const cx = viewport.x + viewport.w / 2;
    const cy = viewport.y + viewport.h / 2;
    zoomAtSvgPoint({ x: cx, y: cy }, 1 / ZOOM_STEP);
  });
  zoomFit?.addEventListener("click", fitViewport);

  // ── pan state (separate from slot drag) ─────────────────────────────────

  let spaceHeld = false;
  let pan: {
    pointerId: number;
    lastX: number;
    lastY: number;
  } | null = null;
  // Timestamp of the most-recent pan end. The browser fires a `click` after
  // a left-button pan-with-Space gesture; we use this to suppress the click
  // (which would otherwise open the add-slot popover).
  let lastPanEnd = 0;

  function setPanCursor(active: boolean) {
    if (active) {
      svg!.style.cursor = pan ? "grabbing" : "grab";
      panHint?.classList.remove("hidden");
    } else {
      svg!.style.cursor = "";
      panHint?.classList.add("hidden");
    }
  }

  // Suppress the native context menu so right-drag-pan works.
  svg.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // ── coord helpers ───────────────────────────────────────────────────────

  // Screen pixel → SVG userspace. Works with viewBox + preserveAspectRatio.
  function screenToSvg(clientX: number, clientY: number): { x: number; y: number } {
    const pt = svg!.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg!.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const local = pt.matrixTransform(ctm.inverse());
    return { x: local.x, y: local.y };
  }

  // SVG userspace → DB coords (z is mirrored from y).
  const svgToDb = (svgX: number, svgY: number) => ({
    x: round1(svgX),
    z: round1(depth - svgY),
  });

  const dbToTransform = (x: number, z: number, rot: number) =>
    `translate(${x} ${depth - z}) rotate(${rot})`;

  function round1(n: number): number {
    return Math.round(n * 10) / 10;
  }

  // ── slot lookup ─────────────────────────────────────────────────────────

  function findSlotGroup(id: string): SVGGElement | null {
    return slotsLayer!.querySelector(`[data-slot-id="${id}"]`);
  }

  function readSlot(g: SVGGElement): Slot {
    let categories: string[] = [];
    try {
      categories = JSON.parse(g.getAttribute("data-categories") ?? "[]");
    } catch {
      /* keep [] */
    }
    return {
      id: g.getAttribute("data-slot-id") ?? "",
      x: Number(g.getAttribute("data-x") ?? 0),
      z: Number(g.getAttribute("data-z") ?? 0),
      rotation: Number(g.getAttribute("data-rotation") ?? 0),
      categories,
      label: g.getAttribute("data-label") ?? "",
    };
  }

  // Apply transient drag transform without mutating data-* attrs. Final
  // values are written by the server response.
  function setVisualTransform(g: SVGGElement, x: number, z: number, rot: number) {
    g.setAttribute("transform", dbToTransform(x, z, rot));
  }

  // Replace a <g> in-place using its outerHTML coming from the server.
  function replaceSlotFragment(html: string) {
    const tmp = document.createElement("div");
    // Wrap into an SVG so the parser builds SVG nodes (not HTML divs).
    tmp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${html}</svg>`;
    const newG = tmp.querySelector("g[data-slot-id]") as SVGGElement | null;
    if (!newG) return null;
    const id = newG.getAttribute("data-slot-id") ?? "";
    const existing = findSlotGroup(id);
    if (existing) existing.replaceWith(newG);
    else slotsLayer!.appendChild(newG);
    return newG;
  }

  // ── selection / sidebar ─────────────────────────────────────────────────

  function select(id: string | null, opts: { focusLabel?: boolean } = {}) {
    selectedId = id;
    // toggle .slot-selected class so styles apply
    slotsLayer!
      .querySelectorAll(".slot-selected")
      .forEach((el) => el.classList.remove("slot-selected"));
    const ring = slotsLayer!.querySelectorAll(".slot-ring");
    ring.forEach((el) => el.setAttribute("stroke-width", "0"));

    if (id) {
      const g = findSlotGroup(id);
      if (g) {
        g.classList.add("slot-selected");
        const r = g.querySelector(".slot-ring") as SVGRectElement | null;
        if (r) r.setAttribute("stroke-width", "0.2");
        populateDetailSidebar(readSlot(g));
        sidebarEmpty!.classList.add("hidden");
        sidebarDetail!.classList.remove("hidden");
        sidebarDetail!.classList.add("flex", "flex-col");
        if (opts.focusLabel) detailLabel!.focus();
        return;
      }
    }
    sidebarDetail!.classList.add("hidden");
    sidebarDetail!.classList.remove("flex", "flex-col");
    sidebarEmpty!.classList.remove("hidden");
    detailError!.classList.add("hidden");
  }

  function populateDetailSidebar(slot: Slot) {
    detailId!.textContent = slot.id.slice(0, 8);
    detailLabel!.value = slot.label;
    detailX!.value = slot.x.toString();
    detailZ!.value = slot.z.toString();
    detailRotation!.value = slot.rotation.toString();
    detailRoles!
      .querySelectorAll<HTMLInputElement>("input[name=detail-role]")
      .forEach((cb) => {
        cb.checked = slot.categories.includes(cb.value);
      });
  }

  function flashDetailError(msg: string) {
    detailError!.textContent = msg;
    detailError!.classList.remove("hidden");
    window.setTimeout(() => detailError!.classList.add("hidden"), 4000);
  }

  // ── HTTP helpers ────────────────────────────────────────────────────────

  async function postJson<T = string>(url: string, body: unknown): Promise<{ ok: boolean; status: number; text: string }> {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  }

  async function patchJson(url: string, body: unknown) {
    const res = await fetch(url, {
      method: "PATCH",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  }

  async function deleteReq(url: string) {
    const res = await fetch(url, {
      method: "DELETE",
      credentials: "same-origin",
    });
    return { ok: res.ok, status: res.status };
  }

  // ── debounced per-slot PATCH ────────────────────────────────────────────

  const pendingTimers = new Map<string, number>();
  const pendingPatches = new Map<string, Record<string, unknown>>();

  function queuePatch(id: string, patch: Record<string, unknown>) {
    const merged = { ...(pendingPatches.get(id) ?? {}), ...patch };
    pendingPatches.set(id, merged);
    const t = pendingTimers.get(id);
    if (t) window.clearTimeout(t);
    const nt = window.setTimeout(() => flushPatch(id), PATCH_DEBOUNCE_MS);
    pendingTimers.set(id, nt);
  }

  async function flushPatch(id: string) {
    pendingTimers.delete(id);
    const patch = pendingPatches.get(id);
    if (!patch) return;
    pendingPatches.delete(id);
    const body: Record<string, unknown> = { ...patch, keepSelected: id === selectedId };
    const r = await patchJson(`/admin/slots/${encodeURIComponent(id)}`, body);
    if (!r.ok) {
      flashDetailError(extractErrorText(r.text) ?? "Save failed");
      return;
    }
    replaceSlotFragment(r.text);
    if (id === selectedId) {
      const g = findSlotGroup(id);
      if (g) populateDetailSidebar(readSlot(g));
    }
  }

  function extractErrorText(html: string): string | null {
    // The error fragment is a <div> with the message text inside <p>. Pull
    // out the first <p>'s textContent, else fall back to the HTML stripped.
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const p = tmp.querySelector("p");
    if (p?.textContent) return p.textContent.trim();
    return (tmp.textContent ?? "").trim().slice(0, 140) || null;
  }

  // ── drag ────────────────────────────────────────────────────────────────

  let drag: {
    id: string;
    pointerId: number;
    startClient: { x: number; y: number };
    startDb: { x: number; z: number };
    rotation: number;
    moved: boolean;
    g: SVGGElement;
  } | null = null;

  svg.addEventListener("pointerdown", (e) => {
    const target = e.target as Element;
    const g = target.closest(".slot[data-slot-id]") as SVGGElement | null;

    // Pan takes priority over slot interaction. Triggers:
    //   • middle-click (button 1)
    //   • right-click  (button 2)
    //   • left-click with Space held (Figma convention — pans even over a
    //     slot, so the user can drag the view without nudging the slot)
    //   • touch/pen pan would require a second pointer; defer to v2
    const wantsPan =
      e.button === 1 ||
      e.button === 2 ||
      (e.button === 0 && spaceHeld);

    if (wantsPan) {
      e.preventDefault();
      pan = {
        pointerId: e.pointerId,
        lastX: e.clientX,
        lastY: e.clientY,
      };
      svg.setPointerCapture(e.pointerId);
      setPanCursor(true);
      return;
    }

    // Only the primary button starts a slot drag.
    if (e.button !== 0) return;
    if (!g) return;
    e.preventDefault();
    const id = g.getAttribute("data-slot-id") ?? "";
    drag = {
      id,
      pointerId: e.pointerId,
      startClient: { x: e.clientX, y: e.clientY },
      startDb: {
        x: Number(g.getAttribute("data-x") ?? 0),
        z: Number(g.getAttribute("data-z") ?? 0),
      },
      rotation: Number(g.getAttribute("data-rotation") ?? 0),
      moved: false,
      g,
    };
    svg.setPointerCapture(e.pointerId);
    g.classList.add("dragging");
  });

  svg.addEventListener("pointermove", (e) => {
    // Pan path takes priority — and is independent of slot drag.
    if (pan && e.pointerId === pan.pointerId) {
      const dx = e.clientX - pan.lastX;
      const dy = e.clientY - pan.lastY;
      pan.lastX = e.clientX;
      pan.lastY = e.clientY;
      panBy(dx, dy);
      return;
    }

    if (!drag || e.pointerId !== drag.pointerId) return;
    const dx = e.clientX - drag.startClient.x;
    const dy = e.clientY - drag.startClient.y;
    if (!drag.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
    drag.moved = true;
    // Convert delta from screen → svg by sampling two screen points.
    const a = screenToSvg(drag.startClient.x, drag.startClient.y);
    const b = screenToSvg(e.clientX, e.clientY);
    const newX = round1(drag.startDb.x + (b.x - a.x));
    const newZ = round1(drag.startDb.z - (b.y - a.y));
    setVisualTransform(drag.g, newX, newZ, drag.rotation);
    drag.g.setAttribute("data-x", String(newX));
    drag.g.setAttribute("data-z", String(newZ));
    if (drag.id === selectedId) {
      detailX!.value = String(newX);
      detailZ!.value = String(newZ);
    }
  });

  svg.addEventListener("pointerup", (e) => {
    if (pan && e.pointerId === pan.pointerId) {
      pan = null;
      lastPanEnd = performance.now();
      try {
        svg.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer may already be released */
      }
      // Keep the grab cursor if Space is still held; otherwise drop it.
      setPanCursor(spaceHeld);
      return;
    }
    if (!drag || e.pointerId !== drag.pointerId) return;
    const d = drag;
    drag = null;
    svg.releasePointerCapture(e.pointerId);
    d.g.classList.remove("dragging");
    if (d.moved) {
      const x = Number(d.g.getAttribute("data-x") ?? 0);
      const z = Number(d.g.getAttribute("data-z") ?? 0);
      queuePatch(d.id, { x, z });
      select(d.id);
    } else {
      // It was a click → select
      select(d.id);
    }
  });

  svg.addEventListener("pointercancel", (e) => {
    if (pan && e.pointerId === pan.pointerId) {
      pan = null;
      setPanCursor(spaceHeld);
      return;
    }
    if (!drag) return;
    drag.g.classList.remove("dragging");
    drag = null;
  });

  // ── click empty to add ──────────────────────────────────────────────────

  svg.addEventListener("click", (e) => {
    if (drag) return;
    // Suppress the click that fires after a Space+drag pan ends. 200ms is
    // generous; the browser dispatches the click on the same tick as the
    // pointerup that ended the pan.
    if (performance.now() - lastPanEnd < 200) return;
    // If Space is held, the user is panning, not adding — don't pop up.
    if (spaceHeld) return;
    const target = e.target as Element;
    if (target.closest(".slot[data-slot-id]")) return;
    // Only react to clicks on the canvas-bg group, not on UI overlays.
    if (!target.closest("#canvas-bg")) {
      return;
    }
    const local = screenToSvg(e.clientX, e.clientY);
    const db = svgToDb(local.x, local.y);
    pendingAdd = db;
    showAddPopover(e.clientX, e.clientY);
  });

  function showAddPopover(clientX: number, clientY: number) {
    // Position relative to the canvas container.
    const rect = canvas!.getBoundingClientRect();
    let left = clientX - rect.left + 8;
    let top = clientY - rect.top + 8;
    // Clamp inside the canvas.
    const popW = 224;
    const popH = 200;
    if (left + popW > rect.width) left = rect.width - popW - 8;
    if (top + popH > rect.height) top = rect.height - popH - 8;
    popover!.style.left = `${left}px`;
    popover!.style.top = `${top}px`;
    popover!.classList.remove("hidden");
    popoverError!.classList.add("hidden");
    // Reset checkboxes
    popover!
      .querySelectorAll<HTMLInputElement>("input[name=add-role]")
      .forEach((cb) => (cb.checked = false));
  }

  function hideAddPopover() {
    popover!.classList.add("hidden");
    pendingAdd = null;
  }

  popoverCancel.addEventListener("click", hideAddPopover);

  popoverConfirm.addEventListener("click", async () => {
    if (!pendingAdd) return hideAddPopover();
    const roles = Array.from(
      popover!.querySelectorAll<HTMLInputElement>(
        "input[name=add-role]:checked",
      ),
    ).map((cb) => cb.value);
    if (roles.length === 0) {
      popoverError!.textContent = "Pick at least one role.";
      popoverError!.classList.remove("hidden");
      return;
    }
    popoverConfirm.disabled = true;
    try {
      const r = await postJson(
        `/admin/formations/${encodeURIComponent(formationId)}/slots`,
        {
          x: pendingAdd.x,
          z: pendingAdd.z,
          rotation_deg: 0,
          allowed_categories: roles,
        },
      );
      if (!r.ok) {
        popoverError!.textContent = extractErrorText(r.text) ?? "Add failed";
        popoverError!.classList.remove("hidden");
        return;
      }
      const newG = replaceSlotFragment(r.text);
      hideAddPopover();
      if (newG) select(newG.getAttribute("data-slot-id"), { focusLabel: true });
    } finally {
      popoverConfirm.disabled = false;
    }
  });

  // Close popover on outside click / Esc handled in global handlers below.

  // ── sidebar live edits ──────────────────────────────────────────────────

  function bindDetailField(
    el: HTMLInputElement,
    fieldName: string,
    parse: (raw: string) => unknown,
  ) {
    let lastSent: string | null = null;
    el.addEventListener("input", () => {
      if (!selectedId) return;
      const raw = el.value;
      if (raw === lastSent) return;
      lastSent = raw;
      const parsed = parse(raw);
      if (parsed === undefined) return;
      // For numeric fields, mirror the visual transform live.
      if (fieldName === "x" || fieldName === "z" || fieldName === "rotation_deg") {
        const g = findSlotGroup(selectedId);
        if (g) {
          const x =
            fieldName === "x"
              ? Number(parsed)
              : Number(g.getAttribute("data-x") ?? 0);
          const z =
            fieldName === "z"
              ? Number(parsed)
              : Number(g.getAttribute("data-z") ?? 0);
          const rot =
            fieldName === "rotation_deg"
              ? Number(parsed)
              : Number(g.getAttribute("data-rotation") ?? 0);
          setVisualTransform(g, x, z, rot);
          g.setAttribute(`data-${fieldName === "rotation_deg" ? "rotation" : fieldName}`, String(parsed));
        }
      }
      queuePatch(selectedId, { [fieldName]: parsed });
    });
  }

  bindDetailField(detailLabel, "label", (s) => s);
  bindDetailField(detailX, "x", (s) =>
    s === "" || Number.isNaN(Number(s)) ? undefined : Number(s),
  );
  bindDetailField(detailZ, "z", (s) =>
    s === "" || Number.isNaN(Number(s)) ? undefined : Number(s),
  );
  bindDetailField(detailRotation, "rotation_deg", (s) =>
    s === "" || Number.isNaN(Number(s)) ? undefined : Number(s),
  );

  detailRoles
    .querySelectorAll<HTMLInputElement>("input[name=detail-role]")
    .forEach((cb) => {
      cb.addEventListener("change", () => {
        if (!selectedId) return;
        const roles = Array.from(
          detailRoles.querySelectorAll<HTMLInputElement>(
            "input[name=detail-role]:checked",
          ),
        ).map((c) => c.value);
        if (roles.length === 0) {
          // Don't allow an empty selection — re-check the one the user
          // just unchecked and flash an error.
          cb.checked = true;
          flashDetailError("Pick at least one role.");
          return;
        }
        queuePatch(selectedId, { allowed_categories: roles });
      });
    });

  detailDelete.addEventListener("click", async () => {
    if (!selectedId) return;
    if (!window.confirm("Delete this slot? This can't be undone.")) return;
    const id = selectedId;
    const r = await deleteReq(`/admin/slots/${encodeURIComponent(id)}`);
    if (!r.ok) {
      flashDetailError("Delete failed");
      return;
    }
    const g = findSlotGroup(id);
    if (g) g.remove();
    select(null);
  });

  detailDeselect.addEventListener("click", () => select(null));

  // ── global keyboard / click ─────────────────────────────────────────────

  function isTypingTarget(el: EventTarget | null): boolean {
    const n = el as HTMLElement | null;
    if (!n) return false;
    const tag = n.tagName;
    return (
      tag === "INPUT" ||
      tag === "TEXTAREA" ||
      tag === "SELECT" ||
      n.isContentEditable === true
    );
  }

  document.addEventListener("keydown", (e) => {
    // Esc closes popover or deselects.
    if (e.key === "Escape") {
      if (!popover.classList.contains("hidden")) {
        hideAddPopover();
        return;
      }
      if (selectedId) {
        select(null);
        return;
      }
    }
    // Keyboard zoom controls — bound globally but suppressed when typing.
    if (!isTypingTarget(e.target)) {
      // Space toggles pan-cursor affordance. Don't preventDefault unless
      // we're actually engaging it; "Space pressed while a button has
      // focus" should still trigger the button.
      if (e.code === "Space" && !spaceHeld) {
        spaceHeld = true;
        if (!pan && !drag) setPanCursor(true);
        // Prevent page-scroll while Space is held over the canvas.
        e.preventDefault();
        return;
      }
      if (e.key === "0") {
        e.preventDefault();
        fitViewport();
        return;
      }
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        const cx = viewport.x + viewport.w / 2;
        const cy = viewport.y + viewport.h / 2;
        zoomAtSvgPoint({ x: cx, y: cy }, ZOOM_STEP);
        return;
      }
      if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        const cx = viewport.x + viewport.w / 2;
        const cy = viewport.y + viewport.h / 2;
        zoomAtSvgPoint({ x: cx, y: cy }, 1 / ZOOM_STEP);
        return;
      }
    }

    if (!selectedId) return;
    if (isTypingTarget(e.target)) return;

    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      detailDelete!.dispatchEvent(new MouseEvent("click"));
    } else if (e.key.toLowerCase() === "r") {
      e.preventDefault();
      const g = findSlotGroup(selectedId);
      if (!g) return;
      const cur = Number(g.getAttribute("data-rotation") ?? 0);
      const next = (cur + 90) % 360;
      const x = Number(g.getAttribute("data-x") ?? 0);
      const z = Number(g.getAttribute("data-z") ?? 0);
      setVisualTransform(g, x, z, next);
      g.setAttribute("data-rotation", String(next));
      detailRotation!.value = String(next);
      queuePatch(selectedId, { rotation_deg: next });
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      spaceHeld = false;
      // If a pan is in progress (left-button + space), let it finish — but
      // drop the cursor affordance immediately so the user sees Space is off.
      if (!pan) setPanCursor(false);
    }
  });

  // Drop the spaceHeld latch if the tab loses focus mid-hold.
  window.addEventListener("blur", () => {
    if (spaceHeld) {
      spaceHeld = false;
      if (!pan) setPanCursor(false);
    }
  });

  // Click outside the popover closes it; click outside canvas/sidebar deselects.
  document.addEventListener("pointerdown", (e) => {
    const t = e.target as Element;
    if (!popover.classList.contains("hidden")) {
      if (!popover.contains(t)) hideAddPopover();
    }
    // Don't deselect on clicks inside canvas (svg handler manages that) or
    // sidebar (controls are inside).
  }, true);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSlotEditor);
  } else {
    initSlotEditor();
  }
}
