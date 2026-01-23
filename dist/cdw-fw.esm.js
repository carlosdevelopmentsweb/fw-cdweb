const ze = ".cdw-accordion-item", $ = ".cdw-accordion-trigger", Fe = ".cdw-accordion-panel", x = /* @__PURE__ */ new WeakMap();
let U = 0;
function K(e) {
  return U += 1, `${e}-${U}`;
}
function Y(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function Pe(e, t) {
  return e === "multiple" ? "multiple" : t;
}
function We(e, t) {
  switch (e) {
    case "plus":
    case "caret":
    case "arrow":
    case "dot":
    case "chevron":
      return e;
    default:
      return t;
  }
}
function we(e) {
  if (e == null) return [];
  if (Array.isArray(e)) return e;
  if (typeof e == "number") return [e];
  if (typeof e == "string") {
    const t = e.trim();
    if (!t) return [];
    if (t.includes(","))
      return t.split(",").map((o) => o.trim()).filter(Boolean).map((o) => {
        const r = Number(o);
        return Number.isNaN(r) ? o : r;
      });
    const n = Number(t);
    return Number.isNaN(n) ? [t] : [n];
  }
  return [];
}
function Ge(e, t) {
  const n = Pe(e.getAttribute("data-mode"), "single"), o = Y(
    e.getAttribute("data-collapsible"),
    !1
  ), r = Y(e.getAttribute("data-animate"), !0), i = We(e.getAttribute("data-icon"), "chevron"), s = we(
    e.getAttribute("data-default-open")
  );
  return {
    mode: n,
    collapsible: o,
    defaultOpen: s,
    animate: r,
    icon: i
  };
}
function Ue(e, t) {
  return e.getAttribute("data-cdw-accordion-item") || e.id || String(t);
}
function Ke(e, t) {
  if (typeof t == "number")
    return e.index === t;
  if (t.startsWith("id:")) {
    const n = t.slice(3);
    return e.key === n || e.item.id === n;
  }
  return e.key === t;
}
function D(e, t, n) {
  if (!n) {
    e.style.maxHeight = t ? "none" : "0px", e.style.opacity = t ? "1" : "0", e.style.pointerEvents = t ? "auto" : "none";
    return;
  }
  if (t) {
    e.style.maxHeight = `${e.scrollHeight}px`, e.style.opacity = "1", e.style.pointerEvents = "auto";
    const o = (r) => {
      r.propertyName === "max-height" && (e.style.maxHeight !== "0px" && (e.style.maxHeight = "none"), e.removeEventListener("transitionend", o));
    };
    e.addEventListener("transitionend", o);
    return;
  }
  (e.style.maxHeight === "none" || e.style.maxHeight === "") && (e.style.maxHeight = `${e.scrollHeight}px`), e.style.opacity = "1", e.style.pointerEvents = "none", e.getBoundingClientRect(), e.style.maxHeight = "0px", e.style.opacity = "0";
}
function B(e, t) {
  e.trigger.setAttribute("aria-expanded", t ? "true" : "false"), e.panel.setAttribute("aria-hidden", t ? "false" : "true");
}
function ye(e, t, n) {
  e.dispatchEvent(
    new CustomEvent(t, {
      detail: {
        item: n.item,
        index: n.index,
        id: n.key
      }
    })
  );
}
function Ee(e, t) {
  t.item.classList.contains("is-open") && (t.item.classList.remove("is-open"), B(t, !1), D(t.panel, !1, e.options.animate), ye(e.container, "cdw:accordion:close", t));
}
function Ye(e, t) {
  t.disabled || t.item.classList.contains("is-open") || (e.options.mode === "single" && e.items.forEach((n) => {
    n !== t && Ee(e, n);
  }), t.item.classList.add("is-open"), B(t, !0), D(t.panel, !0, e.options.animate), ye(e.container, "cdw:accordion:open", t));
}
function ve(e, t) {
  if (t.disabled) return;
  if (t.item.classList.contains("is-open")) {
    if (e.options.mode === "single" && !e.options.collapsible)
      return;
    Ee(e, t);
    return;
  }
  Ye(e, t);
}
function Xe(e) {
  return Array.from(e.querySelectorAll(ze)).map((n, o) => {
    const r = n.querySelector($), i = n.querySelector(Fe);
    if (!r || !i) return null;
    r.id || (r.id = K("cdw-accordion-trigger")), i.id || (i.id = K("cdw-accordion-panel")), r.setAttribute("aria-controls", i.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", r.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: i,
      index: o,
      key: Ue(n, o),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function Ve(e) {
  const t = we(e.options.defaultOpen), n = t.length > 0;
  let o = 0;
  e.items.forEach((r) => {
    const i = n ? t.some((c) => Ke(r, c)) : r.item.classList.contains("is-open");
    e.options.mode === "single" && o > 0 && i && r.item.classList.remove("is-open");
    const s = i && !r.disabled;
    s ? (r.item.classList.add("is-open"), o += 1) : r.item.classList.remove("is-open"), B(r, s), D(r.panel, s, e.options.animate);
  });
}
function je(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest($);
  if (!o || !e.triggerMap.has(o) || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled"))
    return;
  const r = e.triggerMap.get(o);
  r && ve(e, r);
}
function Ze(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest($);
  if (!o || !e.triggerMap.has(o)) return;
  const r = e.items.filter((c) => !c.disabled).map((c) => c.trigger), i = r.indexOf(o);
  if (i === -1) return;
  const s = (c) => {
    const l = r[c];
    l && l.focus();
  };
  switch (t.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      t.preventDefault(), ve(e, e.triggerMap.get(o));
      break;
    case "ArrowDown":
      t.preventDefault(), s((i + 1) % r.length);
      break;
    case "ArrowUp":
      t.preventDefault(), s((i - 1 + r.length) % r.length);
      break;
    case "Home":
      t.preventDefault(), s(0);
      break;
    case "End":
      t.preventDefault(), s(r.length - 1);
      break;
  }
}
function Je(e) {
  e.options.animate && e.items.forEach((t) => {
    t.item.classList.contains("is-open") && (t.panel.style.maxHeight = `${t.panel.scrollHeight}px`);
  });
}
function Qe(e, t) {
  x.has(e) && et(e);
  const n = Ge(e);
  e.setAttribute("data-icon", n.icon), e.setAttribute("data-animate", n.animate ? "true" : "false");
  const o = Xe(e), r = /* @__PURE__ */ new Map();
  o.forEach((s) => r.set(s.trigger, s));
  const i = {
    container: e,
    options: n,
    items: o,
    triggerMap: r,
    clickHandler: (s) => je(i, s),
    keyHandler: (s) => Ze(i, s),
    resizeHandler: () => Je(i)
  };
  e.addEventListener("click", i.clickHandler), e.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), Ve(i), x.set(e, i);
}
function et(e) {
  const t = x.get(e);
  t && (e.removeEventListener("click", t.clickHandler), e.removeEventListener("keydown", t.keyHandler), window.removeEventListener("resize", t.resizeHandler), t.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), x.delete(e));
}
function tt(e) {
  Qe(e);
}
const nt = "[data-cdw-alert-close]", rt = "data-autoclose";
function ot(e) {
  if (!e) return null;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : null;
}
function X(e) {
  e.classList.contains("is-hiding") || (e.classList.add("is-hiding"), window.setTimeout(() => {
    e.remove();
  }, 200));
}
function it(e) {
  const t = e.querySelector(nt);
  t && t.addEventListener("click", () => X(e));
  const n = ot(e.getAttribute(rt));
  n && window.setTimeout(() => X(e), n);
}
function st(e) {
  it(e);
}
const at = "[data-cdw-gallery]", Ae = "[data-cdw-gallery-item], .cdw-gallery__item", Le = ".cdw-gallery__media", ct = ".cdw-gallery__label", lt = "[data-cdw-gallery-product]";
let g = null;
function dt(e) {
  return e ? Array.from(e.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function ut() {
  if (g) return g;
  const e = document.createElement("div");
  e.className = "cdw-gallery-focus cdw-gallery-focus--clean", e.setAttribute("aria-hidden", "true"), e.innerHTML = `
    <div class="cdw-gallery-focus__backdrop" data-cdw-gallery-close></div>
    <div class="cdw-gallery-focus__frame" role="dialog" aria-modal="true">
      <button class="cdw-gallery-focus__close" type="button" data-cdw-gallery-close aria-label="Fechar"></button>
      <div class="cdw-gallery-focus__media"></div>
      <button class="cdw-gallery-focus__nav cdw-gallery-focus__nav--prev" type="button" data-cdw-gallery-prev aria-label="Anterior"></button>
      <button class="cdw-gallery-focus__nav cdw-gallery-focus__nav--next" type="button" data-cdw-gallery-next aria-label="Proximo"></button>
    </div>
  `, document.body.appendChild(e);
  const t = e.querySelector(".cdw-gallery-focus__frame"), n = e.querySelector(".cdw-gallery-focus__media"), o = e.querySelector("[data-cdw-gallery-prev]"), r = e.querySelector("[data-cdw-gallery-next]"), i = Array.from(e.querySelectorAll("[data-cdw-gallery-close]")), s = {
    root: e,
    frame: t,
    media: n,
    prev: o,
    next: r,
    closeButtons: i,
    items: [],
    index: 0,
    controlsEnabled: !1,
    lastTap: 0,
    keyHandler: (c) => {
      s.root.classList.contains("is-open") && (c.key === "Escape" && O(), s.controlsEnabled && c.key === "ArrowLeft" && w(s.index - 1), s.controlsEnabled && c.key === "ArrowRight" && w(s.index + 1));
    }
  };
  return e.addEventListener("click", (c) => {
    const l = c.target;
    if (l) {
      if (l.closest("[data-cdw-gallery-close]")) {
        O();
        return;
      }
      if (l.closest("[data-cdw-gallery-prev]")) {
        w(s.index - 1);
        return;
      }
      l.closest("[data-cdw-gallery-next]") && w(s.index + 1);
    }
  }), n.addEventListener("click", () => {
    const c = Date.now();
    c - s.lastTap < 280 && s.root.classList.toggle("is-zoomed"), s.lastTap = c;
  }), i.forEach((c) => {
    c.addEventListener("click", () => O());
  }), document.addEventListener("keydown", s.keyHandler), g = s, s;
}
function ft(e, t) {
  e.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), t === "immersive" ? e.classList.add("cdw-gallery-focus--immersive") : e.classList.add("cdw-gallery-focus--clean");
}
function O() {
  g && (g.root.classList.remove("is-open", "is-zoomed"), g.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function w(e) {
  if (!g) return;
  const t = g, n = t.items.length;
  if (!n) return;
  const o = (e + n) % n, r = t.items[o], i = r.querySelector(Le), s = r.querySelector(ct)?.textContent?.trim() ?? "Image", c = dt(i);
  t.media.className = `cdw-gallery-focus__media ${c}`, t.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${s}</span>`, t.index = o;
}
function pt(e, t, n) {
  const o = ut(), r = Array.from(e.querySelectorAll(Ae));
  o.items = r, o.controlsEnabled = n && r.length > 1, o.prev.style.display = o.controlsEnabled ? "block" : "none", o.next.style.display = o.controlsEnabled ? "block" : "none", ft(o.root, e.getAttribute("data-cdw-gallery-focus")), o.root.classList.add("is-open"), o.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const i = Math.max(0, r.indexOf(t));
  w(i);
}
function mt(e, t) {
  if (!t) return;
  const n = e.querySelector("[data-cdw-gallery-strip-prev]"), o = e.querySelector("[data-cdw-gallery-strip-next]");
  if (!n && !o) return;
  const r = () => Math.max(180, t.clientWidth * 0.75);
  n?.addEventListener("click", () => {
    t.scrollBy({ left: -r(), behavior: "smooth" });
  }), o?.addEventListener("click", () => {
    t.scrollBy({ left: r(), behavior: "smooth" });
  });
}
function S(e, t, n, o) {
  if (e.classList.add("is-loading"), !t) {
    window.setTimeout(() => {
      e.classList.remove("is-loading"), n?.();
    }, 220);
    return;
  }
  const r = () => {
    e.classList.remove("is-loading"), n?.();
  };
  if (o) {
    t.addEventListener("load", r, { once: !0 });
    return;
  }
  t.complete ? requestAnimationFrame(r) : t.addEventListener("load", r, { once: !0 });
}
function gt(e) {
  const t = e.querySelector(".cdw-gallery__product");
  if (!t) return;
  const n = t.querySelector(".cdw-gallery__product-main"), o = n?.querySelector(".cdw-gallery__media"), r = n?.querySelector(".cdw-gallery__label"), i = n?.querySelector(".cdw-gallery__media img"), s = t.querySelector(".cdw-gallery__product-info"), c = s?.querySelector(".cdw-gallery__product-info-title"), l = s?.querySelector(".cdw-gallery__product-info-desc"), a = s?.querySelector(".cdw-gallery__product-info-meta"), d = Array.from(
    t.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !o || !d.length) return;
  const u = (f) => {
    d.forEach((h) => h.classList.remove("is-active")), f.classList.add("is-active");
    const m = f.getAttribute("data-label") ?? "Product", k = f.getAttribute("data-title") ?? m, A = f.getAttribute("data-desc") ?? "", G = f.getAttribute("data-meta") ?? "", De = f.getAttribute("data-aspect") ?? "cdw-gallery__media--square", C = f.getAttribute("data-src"), Be = f.getAttribute("data-alt") ?? m;
    o.className = `cdw-gallery__media ${De}`;
    const M = () => {
      r && (r.textContent = m), c && (c.textContent = k), l && (l.textContent = A), a && (a.innerHTML = G ? G.split("|").map((h) => `<span>${h.trim()}</span>`).join("") : ""), s && s.classList.remove("is-loading");
    };
    if (s && s.classList.add("is-loading"), i && C) {
      const h = new URL(C, window.location.href).href;
      if (i.src === h) {
        S(o, i, M);
        return;
      }
      S(o, i, M, !0), i.src = C, i.alt = Be;
    } else
      S(o, i ?? null, M);
  };
  d.forEach((f) => {
    f.addEventListener("click", (m) => {
      m.target instanceof HTMLImageElement && u(f);
    });
  });
  const p = d.find((f) => f.classList.contains("is-active")) ?? d[0];
  u(p);
}
function bt(e) {
  if (!e.matches(at)) return;
  if (e.matches(lt)) {
    gt(e);
    return;
  }
  const t = e.querySelector(".cdw-gallery__list");
  mt(e, t), e.addEventListener("click", (n) => {
    const o = n.target;
    if (!o) return;
    const r = o.closest(Ae);
    if (!r) return;
    const i = r.querySelector(Le), s = i?.querySelector("img") ?? null;
    i && S(i, s);
    const c = e.getAttribute("data-cdw-gallery-controls") === "true";
    pt(e, r, c);
  });
}
const ht = "[data-cdw-modal]", wt = "[data-cdw-modal-open]", yt = "[data-cdw-modal-close]", Se = "cdw-modal-open", b = [], V = /* @__PURE__ */ new WeakMap();
let j = !1;
function Et(e) {
  const t = e.replace(/^#/, "");
  return document.getElementById(t);
}
function vt(e) {
  return e ? e.startsWith("#") ? Et(e) : document.querySelector(e) : null;
}
function xe(e) {
  return e.classList.contains("is-open");
}
function R(e) {
  if (!xe(e.root)) return;
  e.root.classList.remove("is-open"), e.root.setAttribute("aria-hidden", "true");
  const t = b.findIndex((n) => n.root === e.root);
  t >= 0 && b.splice(t, 1), b.length === 0 && document.body.classList.remove(Se), e.lastActive?.focus();
}
function At(e) {
  xe(e.root) || (e.lastActive = document.activeElement, e.root.classList.add("is-open"), e.root.setAttribute("aria-hidden", "false"), b.find((t) => t.root === e.root) || b.push(e), document.body.classList.add(Se), e.dialog.focus());
}
function _e(e) {
  const t = V.get(e);
  if (t) return t;
  const n = e.querySelector(".cdw-modal__dialog");
  if (!n)
    throw new Error("Modal sem .cdw-modal__dialog");
  n.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
  const o = e.getAttribute("data-close-overlay") !== "false", r = {
    root: e,
    dialog: n,
    closeOnOverlay: o,
    lastActive: null
  };
  return e.addEventListener("click", (i) => {
    const s = i.target;
    if (s) {
      if (s.closest(yt)) {
        R(r);
        return;
      }
      o && s.classList.contains("cdw-modal__backdrop") && R(r);
    }
  }), V.set(e, r), r;
}
function Lt(e) {
  const t = e.target;
  if (!t) return;
  const n = t.closest(wt);
  if (!n) return;
  const o = n.getAttribute("data-cdw-modal-open"), r = vt(o);
  if (!r) return;
  e.preventDefault();
  const i = _e(r);
  At(i);
}
function St(e) {
  if (e.key !== "Escape") return;
  const t = b[b.length - 1];
  t && R(t);
}
function xt() {
  j || (document.addEventListener("click", Lt), document.addEventListener("keydown", St), j = !0);
}
function _t(e) {
  e.matches(ht) && (xt(), _e(e));
}
const Tt = ".cdw-navbar-panel", Z = "[data-cdw-navbar-toggle]", J = "[data-cdw-navbar-close]", Q = "[data-cdw-navbar-sub]", ee = /* @__PURE__ */ new WeakMap();
let te = !1;
function kt() {
  if (te || typeof window > "u") return;
  const e = window.matchMedia?.("(pointer: coarse)").matches, t = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (e || t || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), te = !0);
}
function Ct(e, t) {
  if (e.id) return e.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return e.id = n, t.setAttribute("data-cdw-navbar-panel", n), n;
}
function Te(e, t) {
  e && e.setAttribute("aria-expanded", t ? "true" : "false");
}
function Mt(e) {
  e.container.classList.add("is-open"), Te(e.toggle, !0);
}
function I(e) {
  e.container.classList.remove("is-open"), Te(e.toggle, !1);
}
function Ot(e) {
  e.container.classList.contains("is-open") ? I(e) : Mt(e);
}
function Nt(e) {
  const t = e.closest(".cdw-navbar-item");
  if (!t) return;
  const n = t.classList.toggle("is-open");
  e.setAttribute("aria-expanded", n ? "true" : "false");
}
function qt(e) {
  if (ee.has(e)) return;
  kt();
  const t = e.querySelector(Tt), n = e.querySelector(Z), o = e.querySelector(".cdw-navbar-overlay"), r = Array.from(e.querySelectorAll(J)), i = Array.from(e.querySelectorAll(Q));
  if (t) {
    const c = Ct(t, e);
    n && (n.setAttribute("aria-controls", c), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const s = {
    container: e,
    panel: t,
    toggle: n,
    overlay: o,
    closeButtons: r,
    subToggles: i,
    keyHandler: (c) => {
      c.key === "Escape" && I(s);
    },
    clickHandler: (c) => {
      const l = c.target;
      if (!(l instanceof Element)) return;
      if (l.closest(Z)) {
        Ot(s);
        return;
      }
      if (l.closest(J) || l.closest(".cdw-navbar-overlay")) {
        I(s);
        return;
      }
      const d = l.closest(Q);
      d && (c.preventDefault(), Nt(d));
    }
  };
  e.addEventListener("click", s.clickHandler), e.addEventListener("keydown", s.keyHandler), ee.set(e, s);
}
function Ht(e) {
  qt(e);
}
const Rt = ".cdw-stage-track", It = ".cdw-stage-slide", ne = "[data-cdw-stage-prev]", re = "[data-cdw-stage-next]", oe = "[data-cdw-stage-go]", $t = "[data-cdw-stage-counter]", Dt = "[data-cdw-stage-progress]", ie = /* @__PURE__ */ new WeakMap();
function L(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function se(e, t) {
  if (!e) return t;
  const n = Number.parseInt(e, 10);
  return Number.isFinite(n) ? n : t;
}
function Bt(e) {
  const t = e.getAttribute("data-autoplay"), n = e.getAttribute("data-interval"), o = L(e.getAttribute("data-pause-on-hover"), !0), r = L(e.getAttribute("data-loop"), !0), i = L(e.getAttribute("data-keyboard"), !0), s = L(e.getAttribute("data-swipe"), !0), c = se(e.getAttribute("data-start"), 0), l = e.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let a = !1, d = se(n, 5200);
  if (t !== null) {
    a = t === "" || t === "true";
    const u = Number.parseInt(t, 10);
    Number.isFinite(u) && (a = !0, d = u);
  }
  return {
    autoplay: a,
    interval: d,
    pauseOnHover: o,
    loop: r,
    keyboard: i,
    swipe: s,
    startIndex: c,
    navMode: l
  };
}
function zt(e) {
  const t = e.querySelector(Rt) || e, n = Array.from(t.querySelectorAll(It));
  return { track: t, slides: n };
}
function Ft(e, t) {
  const n = e.slides.length;
  return n === 0 ? 0 : e.options.loop ? (t + n) % n : Math.max(0, Math.min(n - 1, t));
}
function Pt(e) {
  const t = e.slides.length;
  e.slides.forEach((n, o) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${o + 1} de ${t}`), n.setAttribute("aria-hidden", o === e.current ? "false" : "true");
  });
}
function ke(e) {
  const t = e.slides.length;
  if (e.navButtons.forEach((n, o) => {
    o === e.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), e.counterEl && (e.counterEl.textContent = `${e.current + 1}/${t}`), e.progressEl) {
    const n = t > 0 ? (e.current + 1) / t * 100 : 0;
    e.progressEl.style.width = `${n}%`;
  }
}
function v(e, t) {
  const n = e.slides.length;
  if (n === 0) return;
  const o = Ft(e, t), r = e.options.loop ? (o - 1 + n) % n : o - 1, i = e.options.loop ? (o + 1) % n : o + 1;
  e.slides.forEach((s, c) => {
    s.classList.toggle("is-active", c === o), s.classList.toggle("is-prev", r >= 0 && c === r), s.classList.toggle("is-next", i < n && c === i);
  }), e.current = o, Pt(e), ke(e);
}
function ae(e) {
  !e.options.autoplay || e.slides.length <= 1 || (e.timerId && window.clearInterval(e.timerId), e.timerId = window.setInterval(() => {
    v(e, e.current + 1);
  }, e.options.interval));
}
function Wt(e) {
  e.timerId && (window.clearInterval(e.timerId), e.timerId = null);
}
function N(e) {
  v(e, e.current - 1);
}
function q(e) {
  v(e, e.current + 1);
}
function H(e, t) {
  v(e, t);
}
function Gt(e) {
  e.options.pauseOnHover && (e.container.addEventListener("mouseenter", e.enterHandler), e.container.addEventListener("mouseleave", e.leaveHandler), e.container.addEventListener("focusin", e.enterHandler), e.container.addEventListener("focusout", e.leaveHandler)), e.container.addEventListener("click", e.clickHandler), e.options.keyboard && (e.container.setAttribute("tabindex", "0"), e.container.addEventListener("keydown", e.keyHandler)), e.options.swipe && (e.container.addEventListener("touchstart", e.touchStartHandler, { passive: !0 }), e.container.addEventListener("touchend", e.touchEndHandler));
}
function Ut(e) {
  if (ie.has(e)) return;
  const t = Bt(e), { track: n, slides: o } = zt(e), r = Array.from(e.querySelectorAll(oe)), i = Array.from(e.querySelectorAll(ne)), s = Array.from(e.querySelectorAll(re)), c = e.querySelector($t), l = e.querySelector(Dt), a = {
    container: e,
    track: n,
    slides: o,
    navButtons: r,
    prevButtons: i,
    nextButtons: s,
    counterEl: c,
    progressEl: l,
    options: t,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (d) => {
      d.key === "ArrowLeft" ? (d.preventDefault(), N(a)) : d.key === "ArrowRight" ? (d.preventDefault(), q(a)) : d.key === "Home" ? (d.preventDefault(), H(a, 0)) : d.key === "End" && (d.preventDefault(), H(a, a.slides.length - 1));
    },
    clickHandler: (d) => {
      const u = d.target;
      if (!(u instanceof Element)) return;
      const p = u.closest(ne), f = u.closest(re);
      if (p) {
        N(a);
        return;
      }
      if (f) {
        q(a);
        return;
      }
      const m = u.closest(oe);
      if (m) {
        const k = m.getAttribute("data-cdw-stage-go"), A = Number.parseInt(k || "", 10);
        Number.isFinite(A) && H(a, A);
      }
    },
    enterHandler: () => {
      a.hoverCount += 1, Wt(a);
    },
    leaveHandler: () => {
      a.hoverCount = Math.max(0, a.hoverCount - 1), a.hoverCount === 0 && ae(a);
    },
    touchStartHandler: (d) => {
      if (d.touches.length !== 1) return;
      const u = d.touches[0];
      a.touchActive = !0, a.touchStartX = u.clientX, a.touchStartY = u.clientY;
    },
    touchEndHandler: (d) => {
      if (!a.touchActive) return;
      a.touchActive = !1;
      const u = d.changedTouches[0], p = u.clientX - a.touchStartX, f = u.clientY - a.touchStartY;
      Math.abs(p) < 30 || Math.abs(p) < Math.abs(f) || (p > 0 ? N(a) : q(a));
    }
  };
  if (e.setAttribute("role", "region"), e.setAttribute("aria-roledescription", "stage"), o.length > 0 && e.setAttribute("aria-live", "polite"), v(a, t.startIndex), Gt(a), ae(a), t.navMode === "auto" && r.length === 0 && o.length > 1) {
    const d = document.createElement("div");
    d.className = "cdw-stage-nav", o.forEach((u, p) => {
      const f = document.createElement("button");
      f.type = "button", f.className = "cdw-stage-indicator", f.setAttribute("data-cdw-stage-go", String(p)), f.setAttribute("aria-label", `Ir para o slide ${p + 1}`), d.appendChild(f), a.navButtons.push(f);
    }), e.appendChild(d), ke(a);
  }
  ie.set(e, a);
}
function Kt(e) {
  Ut(e);
}
const Yt = ".cdw-table-header", Xt = ".cdw-table-row", Ce = ".cdw-table-cell";
function ce(e) {
  return e.trim().toLowerCase();
}
function Vt(e) {
  const t = e.querySelector(Yt);
  return t ? Array.from(t.querySelectorAll(Ce)).map((o) => (o.getAttribute("data-label") ?? o.textContent ?? "").trim()).filter(Boolean) : [];
}
function jt(e, t) {
  if (t.length === 0) return;
  const n = Array.from(e.querySelectorAll(Ce));
  if (n.length === 0) return;
  if (!n.some((l) => {
    const a = l.getAttribute("data-label");
    return a !== null && a.trim() !== "";
  })) {
    n.forEach((l, a) => {
      const d = t[a];
      d && l.setAttribute("data-label", d);
    });
    return;
  }
  n.forEach((l, a) => {
    const d = l.getAttribute("data-label");
    (!d || d.trim() === "") && t[a] && l.setAttribute("data-label", t[a]);
  });
  const r = /* @__PURE__ */ new Map();
  n.forEach((l) => {
    const a = l.getAttribute("data-label");
    if (!a) return;
    const d = ce(a);
    r.has(d) || r.set(d, l);
  });
  const i = [], s = /* @__PURE__ */ new Set();
  let c = !1;
  t.forEach((l, a) => {
    const d = ce(l), u = r.get(d);
    if (u) {
      i.push(u), s.add(u), !c && n[a] !== u && (c = !0);
      return;
    }
    const p = document.createElement("div");
    p.className = "cdw-table-cell", p.setAttribute("data-label", l), p.setAttribute("aria-hidden", "true"), i.push(p), c = !0;
  }), n.forEach((l) => {
    s.has(l) || (i.push(l), !c && n[i.length - 1] !== l && (c = !0));
  }), c && e.replaceChildren(...i);
}
function Zt(e) {
  const t = Vt(e);
  if (t.length === 0) return;
  Array.from(e.querySelectorAll(Xt)).forEach((o) => jt(o, t));
}
const Jt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap();
function le(e, t) {
  const n = new DataTransfer();
  t.forEach((o) => n.items.add(o)), e.files = n.files;
}
function en(e) {
  return Array.from(e.querySelectorAll(".cdw-form-select-option"));
}
function z(e, t) {
  e.options.forEach((n) => n.classList.remove("is-active")), t && t.classList.add("is-active");
}
function F(e, t) {
  const n = t.getAttribute("data-value") || t.textContent || "", o = t.textContent || n;
  e.valueEl && (e.valueEl.textContent = o.trim()), e.trigger.setAttribute("data-value", n), z(e, t);
}
function y(e, t, n = !0) {
  e.root.classList.toggle("is-open", t), e.trigger.setAttribute("aria-expanded", t ? "true" : "false"), t && e.search ? e.search.focus() : n && e.trigger.focus();
}
function tn(e, t) {
  const n = t.target;
  if (!(n instanceof HTMLElement)) return;
  const o = n.closest(".cdw-form-select-option");
  o && (F(e, o), y(e, !1));
}
function nn(e) {
  const t = e.root.classList.contains("is-open");
  y(e, !t);
}
function rn(e, t) {
  const n = t.trim().toLowerCase();
  e.options.forEach((o) => {
    const r = (o.textContent || "").trim().toLowerCase();
    o.style.display = r.includes(n) ? "" : "none";
  });
}
function on(e, t) {
  const n = t.key, o = e.options.filter((i) => i.style.display !== "none");
  if (!o.length) return;
  const r = o.findIndex((i) => i.classList.contains("is-active"));
  if (n === "ArrowDown" || n === "ArrowUp") {
    t.preventDefault();
    const i = n === "ArrowDown" ? Math.min(o.length - 1, r + 1) : Math.max(0, r - 1);
    z(e, o[i] || o[0]);
    return;
  }
  if (n === "Enter") {
    t.preventDefault();
    const i = o[r] || o[0];
    i && F(e, i), y(e, !1);
    return;
  }
  n === "Escape" && (t.preventDefault(), y(e, !1));
}
function sn(e) {
  const t = e.querySelector(".cdw-form-select-trigger"), n = e.querySelector(".cdw-form-select-panel");
  if (!t || !n) return;
  const o = {
    root: e,
    trigger: t,
    search: e.querySelector(".cdw-form-select-search"),
    options: en(e),
    panel: n,
    valueEl: e.querySelector(".cdw-form-select-value")
  };
  if (o.options.length) {
    if (!o.valueEl) {
      const r = document.createElement("span");
      r.className = "cdw-form-select-value", t.prepend(r), o.valueEl = r;
    }
    t.setAttribute("aria-haspopup", "listbox"), t.setAttribute("aria-expanded", "false"), n.setAttribute("role", "listbox"), o.options.some((r) => r.classList.contains("is-active")) || (z(o, o.options[0]), F(o, o.options[0])), t.addEventListener("click", () => nn(o)), n.addEventListener("click", (r) => tn(o, r)), e.addEventListener("keydown", (r) => on(o, r)), o.search && o.search.addEventListener("input", (r) => {
      const i = r.target;
      rn(o, i.value);
    }), document.addEventListener("click", (r) => {
      e.contains(r.target) || y(o, !1, !1);
    }), Jt.set(e, o);
  }
}
function an(e) {
  const t = e.querySelector(".cdw-form-dropzone-input"), n = e.closest(".cdw-form-dropzone-wrap"), o = e.querySelector(".cdw-form-dropzone-list") || n?.querySelector(".cdw-form-dropzone-list") || null, r = { root: e, input: t, list: o, files: [] };
  if (!t) return;
  const i = () => {
    o && (o.innerHTML = "", r.files.length && r.files.forEach((s, c) => {
      const l = document.createElement("div");
      l.className = "cdw-form-dropzone-item", l.innerHTML = `<span>${s.name}</span><span>${Math.round(
        s.size / 1024
      )}kb</span><button class="cdw-form-dropzone-remove" type="button" data-index="${c}" aria-label="Remover">Remover</button>`, o.appendChild(l);
    }));
  };
  t.addEventListener("change", () => {
    r.files = Array.from(t.files || []), i();
  }), o?.addEventListener("click", (s) => {
    const c = s.target;
    if (!c) return;
    const l = c.closest(".cdw-form-dropzone-remove");
    if (!l) return;
    const a = Number(l.getAttribute("data-index"));
    Number.isFinite(a) && (r.files.splice(a, 1), le(t, r.files), i());
  }), e.addEventListener("dragenter", (s) => {
    s.preventDefault(), e.classList.add("is-dragging");
  }), e.addEventListener("dragover", (s) => {
    s.preventDefault(), e.classList.add("is-dragging");
  }), e.addEventListener("dragleave", () => {
    e.classList.remove("is-dragging");
  }), e.addEventListener("drop", (s) => {
    s.preventDefault(), e.classList.remove("is-dragging");
    const c = s.dataTransfer?.files;
    c && t && (r.files = r.files.concat(Array.from(c)), le(t, r.files), i());
  }), Qt.set(e, r);
}
function cn(e) {
  Array.from(e.querySelectorAll(".cdw-form-select-advanced")).forEach((i) => sn(i)), Array.from(e.querySelectorAll(".cdw-form-dropzone")).forEach((i) => an(i)), Array.from(e.querySelectorAll(".cdw-form-filebox")).forEach((i) => {
    const s = i.querySelector(".cdw-form-file-input"), c = i.querySelector(".cdw-form-file-list"), l = i.querySelector(".cdw-form-file-button");
    if (!s || !c || !l) return;
    const a = () => {
      c.innerHTML = "";
      const d = s.files && s.files[0] ? s.files[0] : null;
      if (!d) return;
      const u = document.createElement("div");
      u.className = "cdw-form-file-item", u.innerHTML = `<span>${d.name}</span><button class="cdw-form-file-remove" type="button" aria-label="Remover">Remover</button>`, c.appendChild(u);
    };
    l.addEventListener("click", () => s.click()), s.addEventListener("change", () => a()), c.addEventListener("click", (d) => {
      const u = d.target;
      !u || !u.closest(".cdw-form-file-remove") || (s.value = "", a());
    });
  }), Array.from(
    e.querySelectorAll("textarea[data-cdw-form-counter]")
  ).forEach((i) => {
    const s = i.getAttribute("maxlength") || i.getAttribute("data-max"), c = s ? Number(s) : 240;
    let l = i.nextElementSibling;
    (!l || !l.classList.contains("cdw-form-counter")) && (l = document.createElement("div"), l.className = "cdw-form-counter", i.insertAdjacentElement("afterend", l));
    const a = () => {
      const d = i.value.length;
      l.textContent = `${d}/${Number.isFinite(c) ? c : d}`;
    };
    i.addEventListener("input", a), a();
  });
}
const ln = "[data-cdw-tooltip]", de = /* @__PURE__ */ new WeakMap();
let ue = 0, fe = !1;
const P = /* @__PURE__ */ new Set();
function dn() {
  return ue += 1, `cdw-tooltip-${ue}`;
}
function un(e) {
  return e === "click" || e === "focus" || e === "hover-focus" ? e : "hover";
}
function fn(e) {
  return e === "top" || e === "bottom" || e === "left" || e === "right" ? e : "auto";
}
function pn(e) {
  switch (e) {
    case "soft":
    case "solid":
    case "float":
    case "card":
    case "prime":
    case "classic":
      return e;
    default:
      return "classic";
  }
}
function mn(e) {
  if (!e) return 120;
  const t = Number(e);
  return Number.isNaN(t) ? 120 : Math.max(0, t);
}
function gn(e) {
  const t = e.getAttribute("data-tooltip-accent");
  if (t) return t.trim();
  const n = Array.from(e.classList).find(
    (o) => o.startsWith("cdw-fw-accent-")
  );
  return n ? n.replace("cdw-fw-accent-", "") : null;
}
function bn(e) {
  const { tooltip: t, options: n } = e, o = t.querySelector(".cdw-tooltip__content");
  if (o) {
    if (o.innerHTML = "", n.icon) {
      const r = document.createElement("span");
      r.className = "cdw-tooltip__icon", r.textContent = n.icon, o.appendChild(r);
    }
    if (n.title) {
      const r = document.createElement("div");
      r.className = "cdw-tooltip__title", r.textContent = n.title, o.appendChild(r);
    }
    if (n.text) {
      const r = document.createElement("div");
      r.className = "cdw-tooltip__text", r.textContent = n.text, o.appendChild(r);
    }
    if (n.meta) {
      const r = document.createElement("div");
      r.className = "cdw-tooltip__meta", r.textContent = n.meta, o.appendChild(r);
    }
  }
}
function hn(e, t) {
  const n = document.createElement("div"), o = dn();
  n.id = o, n.className = `cdw-tooltip cdw-tooltip--${t.model}`, n.setAttribute("role", "tooltip"), n.setAttribute("data-placement", "top");
  const r = t.accent;
  r && n.classList.add(`cdw-fw-accent-${r}`);
  const i = document.createElement("div");
  i.className = "cdw-tooltip__content", n.appendChild(i);
  const s = document.createElement("span");
  return s.className = "cdw-tooltip__arrow", s.setAttribute("aria-hidden", "true"), n.appendChild(s), e.setAttribute("aria-describedby", o), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n), n;
}
function wn(e, t, n) {
  const o = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = 10, s = o.top, c = window.innerHeight - o.bottom, l = o.left, a = window.innerWidth - o.right, d = (u) => {
    switch (u) {
      case "top":
        return s >= r.height + i;
      case "bottom":
        return c >= r.height + i;
      case "left":
        return l >= r.width + i;
      case "right":
        return a >= r.width + i;
      default:
        return !1;
    }
  };
  if (n !== "auto") {
    if (d(n)) return n;
    const u = n === "top" ? "bottom" : n === "bottom" ? "top" : n === "left" ? "right" : "left";
    if (d(u)) return u;
  }
  return c >= r.height + i ? "bottom" : s >= r.height + i ? "top" : a >= r.width + i ? "right" : l >= r.width + i ? "left" : "bottom";
}
function Me(e) {
  const { trigger: t, tooltip: n, options: o } = e, r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), s = 10, c = wn(t, n, o.placement);
  let l = 0, a = 0;
  switch (c) {
    case "top":
      l = r.top - i.height - s, a = r.left + (r.width - i.width) / 2;
      break;
    case "bottom":
      l = r.bottom + s, a = r.left + (r.width - i.width) / 2;
      break;
    case "left":
      l = r.top + (r.height - i.height) / 2, a = r.left - i.width - s;
      break;
    case "right":
      l = r.top + (r.height - i.height) / 2, a = r.right + s;
      break;
  }
  const d = window.innerWidth - i.width - 8, u = window.innerHeight - i.height - 8;
  if (a = Math.min(Math.max(8, a), Math.max(8, d)), l = Math.min(Math.max(8, l), Math.max(8, u)), n.style.left = `${a}px`, n.style.top = `${l}px`, n.setAttribute("data-placement", c), c === "top" || c === "bottom") {
    const p = r.left + r.width / 2 - a, f = Math.min(Math.max(12, p), i.width - 12);
    n.style.setProperty("--cdw-tooltip-arrow-x", `${f}px`);
  } else {
    const p = r.top + r.height / 2 - l, f = Math.min(Math.max(12, p), i.height - 12);
    n.style.setProperty("--cdw-tooltip-arrow-y", `${f}px`);
  }
}
function Oe(e) {
  e.open || (e.open = !0, e.tooltip.classList.add("is-open"), e.tooltip.setAttribute("aria-hidden", "false"), e.tooltip.style.visibility = "hidden", Me(e), e.tooltip.style.visibility = "visible", P.add(e), e.boundReposition());
}
function _(e) {
  e.open && (e.open = !1, e.tooltip.classList.remove("is-open"), e.tooltip.setAttribute("aria-hidden", "true"), P.delete(e));
}
function Ne(e) {
  e.showTimer && window.clearTimeout(e.showTimer), e.hideTimer && window.clearTimeout(e.hideTimer), e.showTimer = void 0, e.hideTimer = void 0;
}
function pe(e) {
  Ne(e), e.showTimer = window.setTimeout(() => Oe(e), e.options.delay);
}
function me(e) {
  Ne(e), e.hideTimer = window.setTimeout(() => _(e), 90);
}
function yn() {
  fe || (document.addEventListener("keydown", (e) => {
    e.key === "Escape" && P.forEach((t) => _(t));
  }), fe = !0);
}
function En() {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}
function vn(e) {
  if (!e.matches(ln) || de.has(e)) return;
  const t = e.getAttribute("data-cdw-tooltip"), n = {
    trigger: un(e.getAttribute("data-tooltip-trigger")),
    placement: fn(e.getAttribute("data-tooltip-placement")),
    model: pn(e.getAttribute("data-tooltip-model")),
    delay: mn(e.getAttribute("data-tooltip-delay")),
    accent: gn(e),
    title: e.getAttribute("data-tooltip-title"),
    text: e.getAttribute("data-tooltip-text") ?? t,
    meta: e.getAttribute("data-tooltip-meta"),
    icon: e.getAttribute("data-tooltip-icon")
  }, o = hn(e, n), r = {
    trigger: e,
    tooltip: o,
    options: n,
    open: !1,
    boundReposition: () => Me(r)
  };
  bn(r);
  const i = n.trigger === "hover" ? "hover-focus" : n.trigger;
  if (i === "click" || i === "hover-focus" && En()) {
    const c = (l) => {
      const a = l.target;
      a && (a === e || e.contains(a) || a === o || o.contains(a) || _(r));
    };
    r.boundOutside = c, e.addEventListener("click", (l) => {
      l.preventDefault(), r.open ? _(r) : Oe(r), r.boundOutside && document.addEventListener("click", r.boundOutside, { once: !0 });
    });
  } else
    e.addEventListener("mouseenter", () => pe(r)), e.addEventListener("mouseleave", () => me(r)), e.addEventListener("focus", () => pe(r)), e.addEventListener("blur", () => me(r));
  window.addEventListener("scroll", r.boundReposition, !0), window.addEventListener("resize", r.boundReposition), yn(), de.set(e, r);
}
const qe = ".cdw-fab", ge = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new Set();
let be = !1;
function An(e) {
  return e ? e.children.length > 0 : !1;
}
function W(e, t) {
  e.main.setAttribute("aria-expanded", t ? "true" : "false"), e.actions && e.actions.setAttribute("aria-hidden", t ? "false" : "true");
}
function Ln(e) {
  e.open || (e.open = !0, e.root.classList.add("is-open"), W(e, !0), E.add(e));
}
function T(e) {
  e.open && (e.open = !1, e.root.classList.remove("is-open"), W(e, !1), E.delete(e));
}
function Sn(e) {
  e.open ? T(e) : Ln(e);
}
function He(e) {
  E.forEach((t) => {
    e && t === e || T(t);
  });
}
function xn(e) {
  if (E.size === 0) return;
  const t = e.target;
  t && E.forEach((n) => {
    t.closest(qe) !== n.root && T(n);
  });
}
function _n(e) {
  e.key === "Escape" && He();
}
function Tn() {
  be || (document.addEventListener("click", xn), document.addEventListener("keydown", _n), be = !0);
}
function kn(e, t) {
  if (!e.classList.contains("cdw-fab--whatsapp") || !(t instanceof HTMLAnchorElement)) return;
  const n = e.getAttribute("data-phone");
  if (!n) return;
  const o = n.replace(/\D+/g, "");
  if (!o) return;
  const r = e.getAttribute("data-message") || "", i = `https://wa.me/${o}`, s = r ? `${i}?text=${encodeURIComponent(r)}` : i;
  t.href = s, t.target = "_blank", t.rel = "noopener";
}
function Cn(e) {
  const t = ge.get(e);
  if (t) return t;
  const n = e.querySelector(".cdw-fab-main");
  if (!n)
    throw new Error("FAB sem .cdw-fab-main");
  const o = e.querySelector(".cdw-fab-actions"), r = {
    root: e,
    main: n,
    actions: o,
    open: e.classList.contains("is-open")
  };
  o && !o.id && (o.id = `cdw-fab-actions-${Math.random().toString(36).slice(2, 9)}`), o && n.setAttribute("aria-controls", o.id), n.setAttribute("aria-haspopup", o ? "true" : "false");
  const i = An(o);
  return W(r, r.open), i && (n.addEventListener("click", (s) => {
    s.preventDefault(), s.stopPropagation(), He(r), Sn(r);
  }), e.addEventListener("click", (s) => {
    const c = s.target;
    c && c.closest(".cdw-fab-action") && T(r);
  })), kn(e, n), ge.set(e, r), r;
}
function Mn(e) {
  e.matches(qe) && (Tn(), Cn(e));
}
const Re = "data-cdw-fw-initialized", On = {
  childList: !0,
  subtree: !0
}, Nn = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: tt
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: st
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: bt
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: _t
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: Ht
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: Kt
  },
  {
    name: "form",
    selector: ".cdw-form",
    bind: cn
  },
  {
    name: "table",
    selector: ".cdw-table",
    bind: Zt
  },
  {
    name: "tooltip",
    selector: "[data-cdw-tooltip]",
    bind: vn
  },
  {
    name: "fab",
    selector: ".cdw-fab",
    bind: Mn
  }
];
function qn(e) {
  return e ?? document;
}
function Ie(e) {
  const t = e.getAttribute(Re);
  return t ? new Set(t.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function Hn(e, t) {
  const n = Ie(e);
  n.has(t) || (n.add(t), e.setAttribute(Re, Array.from(n).join(" ")));
}
function Rn(e, t) {
  return !Ie(e).has(t);
}
function In(e, t) {
  const n = Array.from(e.querySelectorAll(t));
  return e instanceof HTMLElement && e.matches(t) && n.unshift(e), n;
}
function $e(e) {
  const t = qn(e);
  for (const n of Nn) {
    const o = In(t, n.selector);
    for (const r of o)
      if (Rn(r, n.name))
        try {
          n.bind(r), Hn(r, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function $n() {
  if (typeof MutationObserver > "u") return;
  const e = document.body;
  if (!e) return;
  new MutationObserver((n) => {
    for (const o of n)
      o.addedNodes.forEach((r) => {
        r instanceof HTMLElement && $e(r);
      });
  }).observe(e, On);
}
function he() {
  $e(document), $n();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => he(), { once: !0 }) : he());
const Dn = "0.1.0";
export {
  Dn as CDW_FW_VERSION
};
