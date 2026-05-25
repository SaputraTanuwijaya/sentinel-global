// src/client/admin/SlotEditor.ts
var DRAG_THRESHOLD_PX = 3;
var PATCH_DEBOUNCE_MS = 250;
var ZOOM_STEP = 1.15;
var MIN_ZOOM = 1;
var MAX_ZOOM = 20;
var SNAP_SIZES = [0, 0.5, 1, 2, 5];
var SNAP_DEFAULT_INDEX = 2;
var SNAP_STORAGE_KEY = "sentinel.slotEditor.snapIndex";
function initSlotEditor() {
  const svg = document.getElementById("slot-editor-svg");
  const canvas = document.getElementById("slot-editor-canvas");
  if (!svg || !canvas)
    return;
  if (canvas.dataset.editorBound === "1")
    return;
  canvas.dataset.editorBound = "1";
  const formationId = canvas.getAttribute("data-formation-id") ?? "";
  const depth = Number(canvas.getAttribute("data-canvas-depth") ?? 200);
  const slotsLayer = svg.querySelector("#slots-layer");
  const popover = document.getElementById("slot-add-popover");
  const popoverError = document.getElementById("slot-add-error");
  const popoverCancel = document.getElementById("slot-add-cancel");
  const popoverConfirm = document.getElementById("slot-add-confirm");
  const sidebarEmpty = document.getElementById("slot-sidebar-empty");
  const sidebarDetail = document.getElementById("slot-sidebar-detail");
  const detailId = document.getElementById("slot-detail-id");
  const detailLabel = document.getElementById("slot-detail-label");
  const detailX = document.getElementById("slot-detail-x");
  const detailZ = document.getElementById("slot-detail-z");
  const detailRotation = document.getElementById("slot-detail-rotation");
  const detailRoles = document.getElementById("slot-detail-roles");
  const detailDelete = document.getElementById("slot-detail-delete");
  const detailDeselect = document.getElementById("slot-detail-deselect");
  const detailError = document.getElementById("slot-detail-error");
  if (!slotsLayer || !popover || !popoverConfirm || !popoverCancel || !sidebarEmpty || !sidebarDetail || !detailId || !detailLabel || !detailX || !detailZ || !detailRotation || !detailRoles || !detailDelete || !detailDeselect || !detailError || !popoverError) {
    console.warn("SlotEditor: missing required DOM nodes; skipping init");
    return;
  }
  let selectedId = null;
  let pendingAdd = null;
  function parseViewBox(s) {
    if (!s)
      return { x: 0, y: 0, w: 100, h: 100 };
    const parts = s.split(/\s+|,/).map(Number);
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) {
      return { x: 0, y: 0, w: 100, h: 100 };
    }
    return { x: parts[0], y: parts[1], w: parts[2], h: parts[3] };
  }
  const initialViewBox = parseViewBox(svg.getAttribute("data-initial-viewbox") ?? svg.getAttribute("viewBox"));
  let viewport = { ...initialViewBox };
  const zoomReadout = document.getElementById("zoom-readout");
  const zoomIn = document.getElementById("zoom-in");
  const zoomOut = document.getElementById("zoom-out");
  const zoomFit = document.getElementById("zoom-fit");
  const panHint = document.getElementById("slot-editor-pan-hint");
  function currentZoom() {
    return initialViewBox.w / viewport.w;
  }
  function clampViewport(v) {
    const zoom = initialViewBox.w / v.w;
    let scale = 1;
    if (zoom < MIN_ZOOM)
      scale = zoom / MIN_ZOOM;
    else if (zoom > MAX_ZOOM)
      scale = zoom / MAX_ZOOM;
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
    svg.setAttribute("viewBox", `${viewport.x} ${viewport.y} ${viewport.w} ${viewport.h}`);
    if (zoomReadout) {
      zoomReadout.textContent = `${Math.round(currentZoom() * 100)}%`;
    }
  }
  function zoomAtSvgPoint(p, factor) {
    const relX = (p.x - viewport.x) / viewport.w;
    const relY = (p.y - viewport.y) / viewport.h;
    const newW = viewport.w / factor;
    const newH = viewport.h / factor;
    viewport = {
      x: p.x - relX * newW,
      y: p.y - relY * newH,
      w: newW,
      h: newH
    };
    applyViewport();
  }
  function panBy(dxScreen, dyScreen) {
    const rect = svg.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0)
      return;
    const scale = Math.min(viewport.w / rect.width, viewport.h / rect.height);
    viewport.x -= dxScreen * scale;
    viewport.y -= dyScreen * scale;
    applyViewport();
  }
  function fitViewport() {
    viewport = { ...initialViewBox };
    applyViewport();
  }
  applyViewport();
  svg.addEventListener("wheel", (e) => {
    e.preventDefault();
    const p = screenToSvg(e.clientX, e.clientY);
    const factor = e.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP;
    zoomAtSvgPoint(p, factor);
  }, { passive: false });
  zoomIn?.addEventListener("click", () => {
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
  let altHeld = false;
  let snapIndex = loadSnapIndex();
  function loadSnapIndex() {
    try {
      const raw = localStorage.getItem(SNAP_STORAGE_KEY);
      if (raw === null)
        return SNAP_DEFAULT_INDEX;
      const n = Number(raw);
      if (Number.isInteger(n) && n >= 0 && n < SNAP_SIZES.length)
        return n;
    } catch {}
    return SNAP_DEFAULT_INDEX;
  }
  function saveSnapIndex() {
    try {
      localStorage.setItem(SNAP_STORAGE_KEY, String(snapIndex));
    } catch {}
  }
  function currentSnapSize() {
    if (altHeld)
      return 0;
    return SNAP_SIZES[snapIndex] ?? 0;
  }
  function snap(n) {
    const s = currentSnapSize();
    if (s <= 0)
      return round1(n);
    return Math.round(n / s) * s;
  }
  const snapToggle = document.getElementById("snap-toggle");
  const snapReadout = document.getElementById("snap-readout");
  const snapIndicator = document.getElementById("snap-indicator");
  function paintSnapUi() {
    const s = SNAP_SIZES[snapIndex] ?? 0;
    if (snapReadout) {
      snapReadout.textContent = s <= 0 ? "off" : `${s}m`;
    }
    if (snapIndicator) {
      snapIndicator.classList.toggle("bg-sentinel-accent", s > 0);
      snapIndicator.classList.toggle("bg-gray-600", s <= 0);
    }
  }
  paintSnapUi();
  snapToggle?.addEventListener("click", () => {
    snapIndex = (snapIndex + 1) % SNAP_SIZES.length;
    saveSnapIndex();
    paintSnapUi();
  });
  let spaceHeld = false;
  let pan = null;
  let lastPanEnd = 0;
  function setPanCursor(active) {
    if (active) {
      svg.style.cursor = pan ? "grabbing" : "grab";
      panHint?.classList.remove("hidden");
    } else {
      svg.style.cursor = "";
      panHint?.classList.add("hidden");
    }
  }
  svg.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  function screenToSvg(clientX, clientY) {
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm)
      return { x: 0, y: 0 };
    const local = pt.matrixTransform(ctm.inverse());
    return { x: local.x, y: local.y };
  }
  const svgToDb = (svgX, svgY) => ({
    x: snap(svgX),
    z: snap(depth - svgY)
  });
  const dbToTransform = (x, z, rot) => `translate(${x} ${depth - z}) rotate(${rot})`;
  function round1(n) {
    return Math.round(n * 10) / 10;
  }
  function findSlotGroup(id) {
    return slotsLayer.querySelector(`[data-slot-id="${id}"]`);
  }
  function readSlot(g) {
    let categories = [];
    try {
      categories = JSON.parse(g.getAttribute("data-categories") ?? "[]");
    } catch {}
    return {
      id: g.getAttribute("data-slot-id") ?? "",
      x: Number(g.getAttribute("data-x") ?? 0),
      z: Number(g.getAttribute("data-z") ?? 0),
      rotation: Number(g.getAttribute("data-rotation") ?? 0),
      categories,
      label: g.getAttribute("data-label") ?? ""
    };
  }
  function setVisualTransform(g, x, z, rot) {
    g.setAttribute("transform", dbToTransform(x, z, rot));
  }
  function replaceSlotFragment(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${html}</svg>`;
    const newG = tmp.querySelector("g[data-slot-id]");
    if (!newG)
      return null;
    const id = newG.getAttribute("data-slot-id") ?? "";
    const existing = findSlotGroup(id);
    if (existing)
      existing.replaceWith(newG);
    else
      slotsLayer.appendChild(newG);
    return newG;
  }
  function select(id, opts = {}) {
    selectedId = id;
    slotsLayer.querySelectorAll(".slot-selected").forEach((el) => el.classList.remove("slot-selected"));
    const ring = slotsLayer.querySelectorAll(".slot-ring");
    ring.forEach((el) => el.setAttribute("stroke-width", "0"));
    if (id) {
      const g = findSlotGroup(id);
      if (g) {
        g.classList.add("slot-selected");
        const r = g.querySelector(".slot-ring");
        if (r)
          r.setAttribute("stroke-width", "0.2");
        populateDetailSidebar(readSlot(g));
        sidebarEmpty.classList.add("hidden");
        sidebarDetail.classList.remove("hidden");
        sidebarDetail.classList.add("flex", "flex-col");
        if (opts.focusLabel)
          detailLabel.focus();
        return;
      }
    }
    sidebarDetail.classList.add("hidden");
    sidebarDetail.classList.remove("flex", "flex-col");
    sidebarEmpty.classList.remove("hidden");
    detailError.classList.add("hidden");
  }
  function populateDetailSidebar(slot) {
    detailId.textContent = slot.id.slice(0, 8);
    detailLabel.value = slot.label;
    detailX.value = slot.x.toString();
    detailZ.value = slot.z.toString();
    detailRotation.value = slot.rotation.toString();
    detailRoles.querySelectorAll("input[name=detail-role]").forEach((cb) => {
      cb.checked = slot.categories.includes(cb.value);
    });
  }
  function flashDetailError(msg) {
    detailError.textContent = msg;
    detailError.classList.remove("hidden");
    window.setTimeout(() => detailError.classList.add("hidden"), 4000);
  }
  async function postJson(url, body) {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  }
  async function patchJson(url, body) {
    const res = await fetch(url, {
      method: "PATCH",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  }
  async function deleteReq(url) {
    const res = await fetch(url, {
      method: "DELETE",
      credentials: "same-origin"
    });
    return { ok: res.ok, status: res.status };
  }
  const pendingTimers = new Map;
  const pendingPatches = new Map;
  function queuePatch(id, patch) {
    const merged = { ...pendingPatches.get(id) ?? {}, ...patch };
    pendingPatches.set(id, merged);
    const t = pendingTimers.get(id);
    if (t)
      window.clearTimeout(t);
    const nt = window.setTimeout(() => flushPatch(id), PATCH_DEBOUNCE_MS);
    pendingTimers.set(id, nt);
  }
  async function flushPatch(id) {
    pendingTimers.delete(id);
    const patch = pendingPatches.get(id);
    if (!patch)
      return;
    pendingPatches.delete(id);
    const body = { ...patch, keepSelected: id === selectedId };
    const r = await patchJson(`/admin/slots/${encodeURIComponent(id)}`, body);
    if (!r.ok) {
      flashDetailError(extractErrorText(r.text) ?? "Save failed");
      return;
    }
    replaceSlotFragment(r.text);
    if (id === selectedId) {
      const g = findSlotGroup(id);
      if (g)
        populateDetailSidebar(readSlot(g));
    }
  }
  function extractErrorText(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const p = tmp.querySelector("p");
    if (p?.textContent)
      return p.textContent.trim();
    return (tmp.textContent ?? "").trim().slice(0, 140) || null;
  }
  let drag = null;
  svg.addEventListener("pointerdown", (e) => {
    const target = e.target;
    const g = target.closest(".slot[data-slot-id]");
    const wantsPan = e.button === 1 || e.button === 2 || e.button === 0 && spaceHeld;
    if (wantsPan) {
      e.preventDefault();
      pan = {
        pointerId: e.pointerId,
        lastX: e.clientX,
        lastY: e.clientY
      };
      svg.setPointerCapture(e.pointerId);
      setPanCursor(true);
      return;
    }
    if (e.button !== 0)
      return;
    if (!g)
      return;
    e.preventDefault();
    const id = g.getAttribute("data-slot-id") ?? "";
    drag = {
      id,
      pointerId: e.pointerId,
      startClient: { x: e.clientX, y: e.clientY },
      startDb: {
        x: Number(g.getAttribute("data-x") ?? 0),
        z: Number(g.getAttribute("data-z") ?? 0)
      },
      rotation: Number(g.getAttribute("data-rotation") ?? 0),
      moved: false,
      g
    };
    svg.setPointerCapture(e.pointerId);
    g.classList.add("dragging");
  });
  svg.addEventListener("pointermove", (e) => {
    if (pan && e.pointerId === pan.pointerId) {
      const dx2 = e.clientX - pan.lastX;
      const dy2 = e.clientY - pan.lastY;
      pan.lastX = e.clientX;
      pan.lastY = e.clientY;
      panBy(dx2, dy2);
      return;
    }
    if (!drag || e.pointerId !== drag.pointerId)
      return;
    const dx = e.clientX - drag.startClient.x;
    const dy = e.clientY - drag.startClient.y;
    if (!drag.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD_PX)
      return;
    drag.moved = true;
    const a = screenToSvg(drag.startClient.x, drag.startClient.y);
    const b = screenToSvg(e.clientX, e.clientY);
    const newX = snap(drag.startDb.x + (b.x - a.x));
    const newZ = snap(drag.startDb.z - (b.y - a.y));
    setVisualTransform(drag.g, newX, newZ, drag.rotation);
    drag.g.setAttribute("data-x", String(newX));
    drag.g.setAttribute("data-z", String(newZ));
    if (drag.id === selectedId) {
      detailX.value = String(newX);
      detailZ.value = String(newZ);
    }
  });
  svg.addEventListener("pointerup", (e) => {
    if (pan && e.pointerId === pan.pointerId) {
      pan = null;
      lastPanEnd = performance.now();
      try {
        svg.releasePointerCapture(e.pointerId);
      } catch {}
      setPanCursor(spaceHeld);
      return;
    }
    if (!drag || e.pointerId !== drag.pointerId)
      return;
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
      select(d.id);
    }
  });
  svg.addEventListener("pointercancel", (e) => {
    if (pan && e.pointerId === pan.pointerId) {
      pan = null;
      setPanCursor(spaceHeld);
      return;
    }
    if (!drag)
      return;
    drag.g.classList.remove("dragging");
    drag = null;
  });
  svg.addEventListener("click", (e) => {
    if (drag)
      return;
    if (performance.now() - lastPanEnd < 200)
      return;
    if (spaceHeld)
      return;
    const target = e.target;
    if (target.closest(".slot[data-slot-id]"))
      return;
    if (!target.closest("#canvas-bg")) {
      return;
    }
    const local = screenToSvg(e.clientX, e.clientY);
    const db = svgToDb(local.x, local.y);
    pendingAdd = db;
    showAddPopover(e.clientX, e.clientY);
  });
  function showAddPopover(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    let left = clientX - rect.left + 8;
    let top = clientY - rect.top + 8;
    const popW = 224;
    const popH = 200;
    if (left + popW > rect.width)
      left = rect.width - popW - 8;
    if (top + popH > rect.height)
      top = rect.height - popH - 8;
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
    popover.classList.remove("hidden");
    popoverError.classList.add("hidden");
    popover.querySelectorAll("input[name=add-role]").forEach((cb) => cb.checked = false);
  }
  function hideAddPopover() {
    popover.classList.add("hidden");
    pendingAdd = null;
  }
  popoverCancel.addEventListener("click", hideAddPopover);
  popoverConfirm.addEventListener("click", async () => {
    if (!pendingAdd)
      return hideAddPopover();
    const roles = Array.from(popover.querySelectorAll("input[name=add-role]:checked")).map((cb) => cb.value);
    if (roles.length === 0) {
      popoverError.textContent = "Pick at least one role.";
      popoverError.classList.remove("hidden");
      return;
    }
    popoverConfirm.disabled = true;
    try {
      const r = await postJson(`/admin/formations/${encodeURIComponent(formationId)}/slots`, {
        x: pendingAdd.x,
        z: pendingAdd.z,
        rotation_deg: 0,
        allowed_categories: roles
      });
      if (!r.ok) {
        popoverError.textContent = extractErrorText(r.text) ?? "Add failed";
        popoverError.classList.remove("hidden");
        return;
      }
      const newG = replaceSlotFragment(r.text);
      hideAddPopover();
      if (newG)
        select(newG.getAttribute("data-slot-id"), { focusLabel: true });
    } finally {
      popoverConfirm.disabled = false;
    }
  });
  function bindDetailField(el, fieldName, parse) {
    let lastSent = null;
    el.addEventListener("input", () => {
      if (!selectedId)
        return;
      const raw = el.value;
      if (raw === lastSent)
        return;
      lastSent = raw;
      const parsed = parse(raw);
      if (parsed === undefined)
        return;
      if (fieldName === "x" || fieldName === "z" || fieldName === "rotation_deg") {
        const g = findSlotGroup(selectedId);
        if (g) {
          const x = fieldName === "x" ? Number(parsed) : Number(g.getAttribute("data-x") ?? 0);
          const z = fieldName === "z" ? Number(parsed) : Number(g.getAttribute("data-z") ?? 0);
          const rot = fieldName === "rotation_deg" ? Number(parsed) : Number(g.getAttribute("data-rotation") ?? 0);
          setVisualTransform(g, x, z, rot);
          g.setAttribute(`data-${fieldName === "rotation_deg" ? "rotation" : fieldName}`, String(parsed));
        }
      }
      queuePatch(selectedId, { [fieldName]: parsed });
    });
  }
  bindDetailField(detailLabel, "label", (s) => s);
  bindDetailField(detailX, "x", (s) => s === "" || Number.isNaN(Number(s)) ? undefined : Number(s));
  bindDetailField(detailZ, "z", (s) => s === "" || Number.isNaN(Number(s)) ? undefined : Number(s));
  bindDetailField(detailRotation, "rotation_deg", (s) => s === "" || Number.isNaN(Number(s)) ? undefined : Number(s));
  function snapOnCommit(el, fieldName) {
    el.addEventListener("change", () => {
      if (!selectedId)
        return;
      const raw = Number(el.value);
      if (!Number.isFinite(raw))
        return;
      const snapped = snap(raw);
      if (snapped === raw)
        return;
      el.value = String(snapped);
      const g = findSlotGroup(selectedId);
      if (g) {
        const x = fieldName === "x" ? snapped : Number(g.getAttribute("data-x") ?? 0);
        const z = fieldName === "z" ? snapped : Number(g.getAttribute("data-z") ?? 0);
        const rot = Number(g.getAttribute("data-rotation") ?? 0);
        setVisualTransform(g, x, z, rot);
        g.setAttribute(`data-${fieldName}`, String(snapped));
      }
      queuePatch(selectedId, { [fieldName]: snapped });
    });
  }
  snapOnCommit(detailX, "x");
  snapOnCommit(detailZ, "z");
  detailRoles.querySelectorAll("input[name=detail-role]").forEach((cb) => {
    cb.addEventListener("change", () => {
      if (!selectedId)
        return;
      const roles = Array.from(detailRoles.querySelectorAll("input[name=detail-role]:checked")).map((c) => c.value);
      if (roles.length === 0) {
        cb.checked = true;
        flashDetailError("Pick at least one role.");
        return;
      }
      queuePatch(selectedId, { allowed_categories: roles });
    });
  });
  detailDelete.addEventListener("click", async () => {
    if (!selectedId)
      return;
    if (!window.confirm("Delete this slot? This can't be undone."))
      return;
    const id = selectedId;
    const r = await deleteReq(`/admin/slots/${encodeURIComponent(id)}`);
    if (!r.ok) {
      flashDetailError("Delete failed");
      return;
    }
    const g = findSlotGroup(id);
    if (g)
      g.remove();
    select(null);
  });
  detailDeselect.addEventListener("click", () => select(null));
  function isTypingTarget(el) {
    const n = el;
    if (!n)
      return false;
    const tag = n.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || n.isContentEditable === true;
  }
  document.addEventListener("keydown", (e) => {
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
    if (!isTypingTarget(e.target)) {
      if (e.code === "Space" && !spaceHeld) {
        spaceHeld = true;
        if (!pan && !drag)
          setPanCursor(true);
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
    if (!selectedId)
      return;
    if (isTypingTarget(e.target))
      return;
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      detailDelete.dispatchEvent(new MouseEvent("click"));
    } else if (e.key.toLowerCase() === "r") {
      e.preventDefault();
      const g = findSlotGroup(selectedId);
      if (!g)
        return;
      const cur = Number(g.getAttribute("data-rotation") ?? 0);
      const next = (cur + 90) % 360;
      const x = Number(g.getAttribute("data-x") ?? 0);
      const z = Number(g.getAttribute("data-z") ?? 0);
      setVisualTransform(g, x, z, next);
      g.setAttribute("data-rotation", String(next));
      detailRotation.value = String(next);
      queuePatch(selectedId, { rotation_deg: next });
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      spaceHeld = false;
      if (!pan)
        setPanCursor(false);
    }
    if (e.key === "Alt") {
      altHeld = false;
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Alt")
      altHeld = true;
  });
  window.addEventListener("blur", () => {
    if (spaceHeld) {
      spaceHeld = false;
      if (!pan)
        setPanCursor(false);
    }
    altHeld = false;
  });
  document.addEventListener("pointerdown", (e) => {
    const t = e.target;
    if (!popover.classList.contains("hidden")) {
      if (!popover.contains(t))
        hideAddPopover();
    }
  }, true);
}
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSlotEditor);
  } else {
    initSlotEditor();
  }
}

// src/client/admin/index.ts
window.SentinelAdmin = {
  initSlotEditor
};
console.log("Sentinel Admin: client bundle ready");
