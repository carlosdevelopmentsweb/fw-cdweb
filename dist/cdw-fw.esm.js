const kt = ".cdw-accordion-item", R = ".cdw-accordion-trigger", Ot = ".cdw-accordion-panel", L = /* @__PURE__ */ new WeakMap();
let D = 0;
function P(t) {
  return D += 1, `${t}-${D}`;
}
function G(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function Mt(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function Nt(t, e) {
  switch (t) {
    case "plus":
    case "caret":
    case "arrow":
    case "dot":
    case "chevron":
      return t;
    default:
      return e;
  }
}
function lt(t) {
  if (t == null) return [];
  if (Array.isArray(t)) return t;
  if (typeof t == "number") return [t];
  if (typeof t == "string") {
    const e = t.trim();
    if (!e) return [];
    if (e.includes(","))
      return e.split(",").map((r) => r.trim()).filter(Boolean).map((r) => {
        const o = Number(r);
        return Number.isNaN(o) ? r : o;
      });
    const n = Number(e);
    return Number.isNaN(n) ? [e] : [n];
  }
  return [];
}
function Ht(t, e) {
  const n = Mt(t.getAttribute("data-mode"), "single"), r = G(
    t.getAttribute("data-collapsible"),
    !1
  ), o = G(t.getAttribute("data-animate"), !0), i = Nt(t.getAttribute("data-icon"), "chevron"), s = lt(
    t.getAttribute("data-default-open")
  );
  return {
    mode: n,
    collapsible: r,
    defaultOpen: s,
    animate: o,
    icon: i
  };
}
function Rt(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function It(t, e) {
  if (typeof e == "number")
    return t.index === e;
  if (e.startsWith("id:")) {
    const n = e.slice(3);
    return t.key === n || t.item.id === n;
  }
  return t.key === e;
}
function I(t, e, n) {
  if (!n) {
    t.style.maxHeight = e ? "none" : "0px", t.style.opacity = e ? "1" : "0", t.style.pointerEvents = e ? "auto" : "none";
    return;
  }
  if (e) {
    t.style.maxHeight = `${t.scrollHeight}px`, t.style.opacity = "1", t.style.pointerEvents = "auto";
    const r = (o) => {
      o.propertyName === "max-height" && (t.style.maxHeight !== "0px" && (t.style.maxHeight = "none"), t.removeEventListener("transitionend", r));
    };
    t.addEventListener("transitionend", r);
    return;
  }
  (t.style.maxHeight === "none" || t.style.maxHeight === "") && (t.style.maxHeight = `${t.scrollHeight}px`), t.style.opacity = "1", t.style.pointerEvents = "none", t.getBoundingClientRect(), t.style.maxHeight = "0px", t.style.opacity = "0";
}
function q(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function dt(t, e, n) {
  t.dispatchEvent(
    new CustomEvent(e, {
      detail: {
        item: n.item,
        index: n.index,
        id: n.key
      }
    })
  );
}
function ut(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), q(e, !1), I(e.panel, !1, t.options.animate), dt(t.container, "cdw:accordion:close", e));
}
function qt(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && ut(t, n);
  }), e.item.classList.add("is-open"), q(e, !0), I(e.panel, !0, t.options.animate), dt(t.container, "cdw:accordion:open", e));
}
function ft(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    ut(t, e);
    return;
  }
  qt(t, e);
}
function $t(t) {
  return Array.from(t.querySelectorAll(kt)).map((n, r) => {
    const o = n.querySelector(R), i = n.querySelector(Ot);
    if (!o || !i) return null;
    o.id || (o.id = P("cdw-accordion-trigger")), i.id || (i.id = P("cdw-accordion-panel")), o.setAttribute("aria-controls", i.id), o.tagName === "BUTTON" && !o.getAttribute("type") && o.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", o.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || o.hasAttribute("disabled") || o.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), o.setAttribute("aria-disabled", "true"), o.tagName === "BUTTON" && o.setAttribute("disabled", "true"), o.tagName !== "BUTTON" && o.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), o.removeAttribute("aria-disabled"), o.tagName !== "BUTTON" && o.setAttribute("tabindex", "0")), {
      item: n,
      trigger: o,
      panel: i,
      index: r,
      key: Rt(n, r),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function Bt(t) {
  const e = lt(t.options.defaultOpen), n = e.length > 0;
  let r = 0;
  t.items.forEach((o) => {
    const i = n ? e.some((c) => It(o, c)) : o.item.classList.contains("is-open");
    t.options.mode === "single" && r > 0 && i && o.item.classList.remove("is-open");
    const s = i && !o.disabled;
    s ? (o.item.classList.add("is-open"), r += 1) : o.item.classList.remove("is-open"), q(o, s), I(o.panel, s, t.options.animate);
  });
}
function Dt(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const r = n.closest(R);
  if (!r || !t.triggerMap.has(r) || r.getAttribute("aria-disabled") === "true" || r.hasAttribute("disabled"))
    return;
  const o = t.triggerMap.get(r);
  o && ft(t, o);
}
function Pt(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const r = n.closest(R);
  if (!r || !t.triggerMap.has(r)) return;
  const o = t.items.filter((c) => !c.disabled).map((c) => c.trigger), i = o.indexOf(r);
  if (i === -1) return;
  const s = (c) => {
    const l = o[c];
    l && l.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), ft(t, t.triggerMap.get(r));
      break;
    case "ArrowDown":
      e.preventDefault(), s((i + 1) % o.length);
      break;
    case "ArrowUp":
      e.preventDefault(), s((i - 1 + o.length) % o.length);
      break;
    case "Home":
      e.preventDefault(), s(0);
      break;
    case "End":
      e.preventDefault(), s(o.length - 1);
      break;
  }
}
function Gt(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function Wt(t, e) {
  L.has(t) && zt(t);
  const n = Ht(t);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const r = $t(t), o = /* @__PURE__ */ new Map();
  r.forEach((s) => o.set(s.trigger, s));
  const i = {
    container: t,
    options: n,
    items: r,
    triggerMap: o,
    clickHandler: (s) => Dt(i, s),
    keyHandler: (s) => Pt(i, s),
    resizeHandler: () => Gt(i)
  };
  t.addEventListener("click", i.clickHandler), t.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), Bt(i), L.set(t, i);
}
function zt(t) {
  const e = L.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), L.delete(t));
}
function Ft(t) {
  Wt(t);
}
const Ut = "[data-cdw-alert-close]", Yt = "data-autoclose";
function Xt(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function W(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function Kt(t) {
  const e = t.querySelector(Ut);
  e && e.addEventListener("click", () => W(t));
  const n = Xt(t.getAttribute(Yt));
  n && window.setTimeout(() => W(t), n);
}
function Vt(t) {
  Kt(t);
}
const jt = "[data-cdw-gallery]", pt = "[data-cdw-gallery-item], .cdw-gallery__item", mt = ".cdw-gallery__media", Zt = ".cdw-gallery__label", Jt = "[data-cdw-gallery-product]";
let b = null;
function Qt(t) {
  return t ? Array.from(t.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function te() {
  if (b) return b;
  const t = document.createElement("div");
  t.className = "cdw-gallery-focus cdw-gallery-focus--clean", t.setAttribute("aria-hidden", "true"), t.innerHTML = `
    <div class="cdw-gallery-focus__backdrop" data-cdw-gallery-close></div>
    <div class="cdw-gallery-focus__frame" role="dialog" aria-modal="true">
      <button class="cdw-gallery-focus__close" type="button" data-cdw-gallery-close aria-label="Fechar"></button>
      <div class="cdw-gallery-focus__media"></div>
      <button class="cdw-gallery-focus__nav cdw-gallery-focus__nav--prev" type="button" data-cdw-gallery-prev aria-label="Anterior"></button>
      <button class="cdw-gallery-focus__nav cdw-gallery-focus__nav--next" type="button" data-cdw-gallery-next aria-label="Proximo"></button>
    </div>
  `, document.body.appendChild(t);
  const e = t.querySelector(".cdw-gallery-focus__frame"), n = t.querySelector(".cdw-gallery-focus__media"), r = t.querySelector("[data-cdw-gallery-prev]"), o = t.querySelector("[data-cdw-gallery-next]"), i = Array.from(t.querySelectorAll("[data-cdw-gallery-close]")), s = {
    root: t,
    frame: e,
    media: n,
    prev: r,
    next: o,
    closeButtons: i,
    items: [],
    index: 0,
    controlsEnabled: !1,
    lastTap: 0,
    keyHandler: (c) => {
      s.root.classList.contains("is-open") && (c.key === "Escape" && C(), s.controlsEnabled && c.key === "ArrowLeft" && y(s.index - 1), s.controlsEnabled && c.key === "ArrowRight" && y(s.index + 1));
    }
  };
  return t.addEventListener("click", (c) => {
    const l = c.target;
    if (l) {
      if (l.closest("[data-cdw-gallery-close]")) {
        C();
        return;
      }
      if (l.closest("[data-cdw-gallery-prev]")) {
        y(s.index - 1);
        return;
      }
      l.closest("[data-cdw-gallery-next]") && y(s.index + 1);
    }
  }), n.addEventListener("click", () => {
    const c = Date.now();
    c - s.lastTap < 280 && s.root.classList.toggle("is-zoomed"), s.lastTap = c;
  }), i.forEach((c) => {
    c.addEventListener("click", () => C());
  }), document.addEventListener("keydown", s.keyHandler), b = s, s;
}
function ee(t, e) {
  t.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), e === "immersive" ? t.classList.add("cdw-gallery-focus--immersive") : t.classList.add("cdw-gallery-focus--clean");
}
function C() {
  b && (b.root.classList.remove("is-open", "is-zoomed"), b.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function y(t) {
  if (!b) return;
  const e = b, n = e.items.length;
  if (!n) return;
  const r = (t + n) % n, o = e.items[r], i = o.querySelector(mt), s = o.querySelector(Zt)?.textContent?.trim() ?? "Image", c = Qt(i);
  e.media.className = `cdw-gallery-focus__media ${c}`, e.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${s}</span>`, e.index = r;
}
function ne(t, e, n) {
  const r = te(), o = Array.from(t.querySelectorAll(pt));
  r.items = o, r.controlsEnabled = n && o.length > 1, r.prev.style.display = r.controlsEnabled ? "block" : "none", r.next.style.display = r.controlsEnabled ? "block" : "none", ee(r.root, t.getAttribute("data-cdw-gallery-focus")), r.root.classList.add("is-open"), r.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const i = Math.max(0, o.indexOf(e));
  y(i);
}
function oe(t, e) {
  if (!e) return;
  const n = t.querySelector("[data-cdw-gallery-strip-prev]"), r = t.querySelector("[data-cdw-gallery-strip-next]");
  if (!n && !r) return;
  const o = () => Math.max(180, e.clientWidth * 0.75);
  n?.addEventListener("click", () => {
    e.scrollBy({ left: -o(), behavior: "smooth" });
  }), r?.addEventListener("click", () => {
    e.scrollBy({ left: o(), behavior: "smooth" });
  });
}
function v(t, e, n, r) {
  if (t.classList.add("is-loading"), !e) {
    window.setTimeout(() => {
      t.classList.remove("is-loading"), n?.();
    }, 220);
    return;
  }
  const o = () => {
    t.classList.remove("is-loading"), n?.();
  };
  if (r) {
    e.addEventListener("load", o, { once: !0 });
    return;
  }
  e.complete ? requestAnimationFrame(o) : e.addEventListener("load", o, { once: !0 });
}
function re(t) {
  const e = t.querySelector(".cdw-gallery__product");
  if (!e) return;
  const n = e.querySelector(".cdw-gallery__product-main"), r = n?.querySelector(".cdw-gallery__media"), o = n?.querySelector(".cdw-gallery__label"), i = n?.querySelector(".cdw-gallery__media img"), s = e.querySelector(".cdw-gallery__product-info"), c = s?.querySelector(".cdw-gallery__product-info-title"), l = s?.querySelector(".cdw-gallery__product-info-desc"), a = s?.querySelector(".cdw-gallery__product-info-meta"), d = Array.from(
    e.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !r || !d.length) return;
  const u = (f) => {
    d.forEach((h) => h.classList.remove("is-active")), f.classList.add("is-active");
    const m = f.getAttribute("data-label") ?? "Product", S = f.getAttribute("data-title") ?? m, E = f.getAttribute("data-desc") ?? "", B = f.getAttribute("data-meta") ?? "", Tt = f.getAttribute("data-aspect") ?? "cdw-gallery__media--square", x = f.getAttribute("data-src"), Ct = f.getAttribute("data-alt") ?? m;
    r.className = `cdw-gallery__media ${Tt}`;
    const T = () => {
      o && (o.textContent = m), c && (c.textContent = S), l && (l.textContent = E), a && (a.innerHTML = B ? B.split("|").map((h) => `<span>${h.trim()}</span>`).join("") : ""), s && s.classList.remove("is-loading");
    };
    if (s && s.classList.add("is-loading"), i && x) {
      const h = new URL(x, window.location.href).href;
      if (i.src === h) {
        v(r, i, T);
        return;
      }
      v(r, i, T, !0), i.src = x, i.alt = Ct;
    } else
      v(r, i ?? null, T);
  };
  d.forEach((f) => {
    f.addEventListener("click", (m) => {
      m.target instanceof HTMLImageElement && u(f);
    });
  });
  const p = d.find((f) => f.classList.contains("is-active")) ?? d[0];
  u(p);
}
function ie(t) {
  if (!t.matches(jt)) return;
  if (t.matches(Jt)) {
    re(t);
    return;
  }
  const e = t.querySelector(".cdw-gallery__list");
  oe(t, e), t.addEventListener("click", (n) => {
    const r = n.target;
    if (!r) return;
    const o = r.closest(pt);
    if (!o) return;
    const i = o.querySelector(mt), s = i?.querySelector("img") ?? null;
    i && v(i, s);
    const c = t.getAttribute("data-cdw-gallery-controls") === "true";
    ne(t, o, c);
  });
}
const se = "[data-cdw-modal]", ae = "[data-cdw-modal-open]", ce = "[data-cdw-modal-close]", bt = "cdw-modal-open", g = [], z = /* @__PURE__ */ new WeakMap();
let F = !1;
function le(t) {
  const e = t.replace(/^#/, "");
  return document.getElementById(e);
}
function de(t) {
  return t ? t.startsWith("#") ? le(t) : document.querySelector(t) : null;
}
function gt(t) {
  return t.classList.contains("is-open");
}
function N(t) {
  if (!gt(t.root)) return;
  t.root.classList.remove("is-open"), t.root.setAttribute("aria-hidden", "true");
  const e = g.findIndex((n) => n.root === t.root);
  e >= 0 && g.splice(e, 1), g.length === 0 && document.body.classList.remove(bt), t.lastActive?.focus();
}
function ue(t) {
  gt(t.root) || (t.lastActive = document.activeElement, t.root.classList.add("is-open"), t.root.setAttribute("aria-hidden", "false"), g.find((e) => e.root === t.root) || g.push(t), document.body.classList.add(bt), t.dialog.focus());
}
function ht(t) {
  const e = z.get(t);
  if (e) return e;
  const n = t.querySelector(".cdw-modal__dialog");
  if (!n)
    throw new Error("Modal sem .cdw-modal__dialog");
  n.setAttribute("tabindex", "-1"), t.setAttribute("aria-hidden", "true");
  const r = t.getAttribute("data-close-overlay") !== "false", o = {
    root: t,
    dialog: n,
    closeOnOverlay: r,
    lastActive: null
  };
  return t.addEventListener("click", (i) => {
    const s = i.target;
    if (s) {
      if (s.closest(ce)) {
        N(o);
        return;
      }
      r && s.classList.contains("cdw-modal__backdrop") && N(o);
    }
  }), z.set(t, o), o;
}
function fe(t) {
  const e = t.target;
  if (!e) return;
  const n = e.closest(ae);
  if (!n) return;
  const r = n.getAttribute("data-cdw-modal-open"), o = de(r);
  if (!o) return;
  t.preventDefault();
  const i = ht(o);
  ue(i);
}
function pe(t) {
  if (t.key !== "Escape") return;
  const e = g[g.length - 1];
  e && N(e);
}
function me() {
  F || (document.addEventListener("click", fe), document.addEventListener("keydown", pe), F = !0);
}
function be(t) {
  t.matches(se) && (me(), ht(t));
}
const ge = ".cdw-navbar-panel", U = "[data-cdw-navbar-toggle]", Y = "[data-cdw-navbar-close]", X = "[data-cdw-navbar-sub]", K = /* @__PURE__ */ new WeakMap();
let V = !1;
function he() {
  if (V || typeof window > "u") return;
  const t = window.matchMedia?.("(pointer: coarse)").matches, e = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (t || e || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), V = !0);
}
function ye(t, e) {
  if (t.id) return t.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return t.id = n, e.setAttribute("data-cdw-navbar-panel", n), n;
}
function yt(t, e) {
  t && t.setAttribute("aria-expanded", e ? "true" : "false");
}
function we(t) {
  t.container.classList.add("is-open"), yt(t.toggle, !0);
}
function H(t) {
  t.container.classList.remove("is-open"), yt(t.toggle, !1);
}
function Ee(t) {
  t.container.classList.contains("is-open") ? H(t) : we(t);
}
function Ae(t) {
  const e = t.closest(".cdw-navbar-item");
  if (!e) return;
  const n = e.classList.toggle("is-open");
  t.setAttribute("aria-expanded", n ? "true" : "false");
}
function ve(t) {
  if (K.has(t)) return;
  he();
  const e = t.querySelector(ge), n = t.querySelector(U), r = t.querySelector(".cdw-navbar-overlay"), o = Array.from(t.querySelectorAll(Y)), i = Array.from(t.querySelectorAll(X));
  if (e) {
    const c = ye(e, t);
    n && (n.setAttribute("aria-controls", c), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const s = {
    container: t,
    panel: e,
    toggle: n,
    overlay: r,
    closeButtons: o,
    subToggles: i,
    keyHandler: (c) => {
      c.key === "Escape" && H(s);
    },
    clickHandler: (c) => {
      const l = c.target;
      if (!(l instanceof Element)) return;
      if (l.closest(U)) {
        Ee(s);
        return;
      }
      if (l.closest(Y) || l.closest(".cdw-navbar-overlay")) {
        H(s);
        return;
      }
      const d = l.closest(X);
      d && (c.preventDefault(), Ae(d));
    }
  };
  t.addEventListener("click", s.clickHandler), t.addEventListener("keydown", s.keyHandler), K.set(t, s);
}
function Le(t) {
  ve(t);
}
const _e = ".cdw-stage-track", Se = ".cdw-stage-slide", j = "[data-cdw-stage-prev]", Z = "[data-cdw-stage-next]", J = "[data-cdw-stage-go]", xe = "[data-cdw-stage-counter]", Te = "[data-cdw-stage-progress]", Q = /* @__PURE__ */ new WeakMap();
function A(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function tt(t, e) {
  if (!t) return e;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : e;
}
function Ce(t) {
  const e = t.getAttribute("data-autoplay"), n = t.getAttribute("data-interval"), r = A(t.getAttribute("data-pause-on-hover"), !0), o = A(t.getAttribute("data-loop"), !0), i = A(t.getAttribute("data-keyboard"), !0), s = A(t.getAttribute("data-swipe"), !0), c = tt(t.getAttribute("data-start"), 0), l = t.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let a = !1, d = tt(n, 5200);
  if (e !== null) {
    a = e === "" || e === "true";
    const u = Number.parseInt(e, 10);
    Number.isFinite(u) && (a = !0, d = u);
  }
  return {
    autoplay: a,
    interval: d,
    pauseOnHover: r,
    loop: o,
    keyboard: i,
    swipe: s,
    startIndex: c,
    navMode: l
  };
}
function ke(t) {
  const e = t.querySelector(_e) || t, n = Array.from(e.querySelectorAll(Se));
  return { track: e, slides: n };
}
function Oe(t, e) {
  const n = t.slides.length;
  return n === 0 ? 0 : t.options.loop ? (e + n) % n : Math.max(0, Math.min(n - 1, e));
}
function Me(t) {
  const e = t.slides.length;
  t.slides.forEach((n, r) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${r + 1} de ${e}`), n.setAttribute("aria-hidden", r === t.current ? "false" : "true");
  });
}
function wt(t) {
  const e = t.slides.length;
  if (t.navButtons.forEach((n, r) => {
    r === t.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), t.counterEl && (t.counterEl.textContent = `${t.current + 1}/${e}`), t.progressEl) {
    const n = e > 0 ? (t.current + 1) / e * 100 : 0;
    t.progressEl.style.width = `${n}%`;
  }
}
function w(t, e) {
  const n = t.slides.length;
  if (n === 0) return;
  const r = Oe(t, e), o = t.options.loop ? (r - 1 + n) % n : r - 1, i = t.options.loop ? (r + 1) % n : r + 1;
  t.slides.forEach((s, c) => {
    s.classList.toggle("is-active", c === r), s.classList.toggle("is-prev", o >= 0 && c === o), s.classList.toggle("is-next", i < n && c === i);
  }), t.current = r, Me(t), wt(t);
}
function et(t) {
  !t.options.autoplay || t.slides.length <= 1 || (t.timerId && window.clearInterval(t.timerId), t.timerId = window.setInterval(() => {
    w(t, t.current + 1);
  }, t.options.interval));
}
function Ne(t) {
  t.timerId && (window.clearInterval(t.timerId), t.timerId = null);
}
function k(t) {
  w(t, t.current - 1);
}
function O(t) {
  w(t, t.current + 1);
}
function M(t, e) {
  w(t, e);
}
function He(t) {
  t.options.pauseOnHover && (t.container.addEventListener("mouseenter", t.enterHandler), t.container.addEventListener("mouseleave", t.leaveHandler), t.container.addEventListener("focusin", t.enterHandler), t.container.addEventListener("focusout", t.leaveHandler)), t.container.addEventListener("click", t.clickHandler), t.options.keyboard && (t.container.setAttribute("tabindex", "0"), t.container.addEventListener("keydown", t.keyHandler)), t.options.swipe && (t.container.addEventListener("touchstart", t.touchStartHandler, { passive: !0 }), t.container.addEventListener("touchend", t.touchEndHandler));
}
function Re(t) {
  if (Q.has(t)) return;
  const e = Ce(t), { track: n, slides: r } = ke(t), o = Array.from(t.querySelectorAll(J)), i = Array.from(t.querySelectorAll(j)), s = Array.from(t.querySelectorAll(Z)), c = t.querySelector(xe), l = t.querySelector(Te), a = {
    container: t,
    track: n,
    slides: r,
    navButtons: o,
    prevButtons: i,
    nextButtons: s,
    counterEl: c,
    progressEl: l,
    options: e,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (d) => {
      d.key === "ArrowLeft" ? (d.preventDefault(), k(a)) : d.key === "ArrowRight" ? (d.preventDefault(), O(a)) : d.key === "Home" ? (d.preventDefault(), M(a, 0)) : d.key === "End" && (d.preventDefault(), M(a, a.slides.length - 1));
    },
    clickHandler: (d) => {
      const u = d.target;
      if (!(u instanceof Element)) return;
      const p = u.closest(j), f = u.closest(Z);
      if (p) {
        k(a);
        return;
      }
      if (f) {
        O(a);
        return;
      }
      const m = u.closest(J);
      if (m) {
        const S = m.getAttribute("data-cdw-stage-go"), E = Number.parseInt(S || "", 10);
        Number.isFinite(E) && M(a, E);
      }
    },
    enterHandler: () => {
      a.hoverCount += 1, Ne(a);
    },
    leaveHandler: () => {
      a.hoverCount = Math.max(0, a.hoverCount - 1), a.hoverCount === 0 && et(a);
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
      Math.abs(p) < 30 || Math.abs(p) < Math.abs(f) || (p > 0 ? k(a) : O(a));
    }
  };
  if (t.setAttribute("role", "region"), t.setAttribute("aria-roledescription", "stage"), r.length > 0 && t.setAttribute("aria-live", "polite"), w(a, e.startIndex), He(a), et(a), e.navMode === "auto" && o.length === 0 && r.length > 1) {
    const d = document.createElement("div");
    d.className = "cdw-stage-nav", r.forEach((u, p) => {
      const f = document.createElement("button");
      f.type = "button", f.className = "cdw-stage-indicator", f.setAttribute("data-cdw-stage-go", String(p)), f.setAttribute("aria-label", `Ir para o slide ${p + 1}`), d.appendChild(f), a.navButtons.push(f);
    }), t.appendChild(d), wt(a);
  }
  Q.set(t, a);
}
function Ie(t) {
  Re(t);
}
const qe = ".cdw-table-header", $e = ".cdw-table-row", Et = ".cdw-table-cell";
function nt(t) {
  return t.trim().toLowerCase();
}
function Be(t) {
  const e = t.querySelector(qe);
  return e ? Array.from(e.querySelectorAll(Et)).map((r) => (r.getAttribute("data-label") ?? r.textContent ?? "").trim()).filter(Boolean) : [];
}
function De(t, e) {
  if (e.length === 0) return;
  const n = Array.from(t.querySelectorAll(Et));
  if (n.length === 0) return;
  if (!n.some((l) => {
    const a = l.getAttribute("data-label");
    return a !== null && a.trim() !== "";
  })) {
    n.forEach((l, a) => {
      const d = e[a];
      d && l.setAttribute("data-label", d);
    });
    return;
  }
  n.forEach((l, a) => {
    const d = l.getAttribute("data-label");
    (!d || d.trim() === "") && e[a] && l.setAttribute("data-label", e[a]);
  });
  const o = /* @__PURE__ */ new Map();
  n.forEach((l) => {
    const a = l.getAttribute("data-label");
    if (!a) return;
    const d = nt(a);
    o.has(d) || o.set(d, l);
  });
  const i = [], s = /* @__PURE__ */ new Set();
  let c = !1;
  e.forEach((l, a) => {
    const d = nt(l), u = o.get(d);
    if (u) {
      i.push(u), s.add(u), !c && n[a] !== u && (c = !0);
      return;
    }
    const p = document.createElement("div");
    p.className = "cdw-table-cell", p.setAttribute("data-label", l), p.setAttribute("aria-hidden", "true"), i.push(p), c = !0;
  }), n.forEach((l) => {
    s.has(l) || (i.push(l), !c && n[i.length - 1] !== l && (c = !0));
  }), c && t.replaceChildren(...i);
}
function Pe(t) {
  const e = Be(t);
  if (e.length === 0) return;
  Array.from(t.querySelectorAll($e)).forEach((r) => De(r, e));
}
const Ge = "[data-cdw-tooltip]", ot = /* @__PURE__ */ new WeakMap();
let rt = 0, it = !1;
const $ = /* @__PURE__ */ new Set();
function We() {
  return rt += 1, `cdw-tooltip-${rt}`;
}
function ze(t) {
  return t === "click" || t === "focus" || t === "hover-focus" ? t : "hover";
}
function Fe(t) {
  return t === "top" || t === "bottom" || t === "left" || t === "right" ? t : "auto";
}
function Ue(t) {
  switch (t) {
    case "soft":
    case "solid":
    case "float":
    case "card":
    case "prime":
    case "classic":
      return t;
    default:
      return "classic";
  }
}
function Ye(t) {
  if (!t) return 120;
  const e = Number(t);
  return Number.isNaN(e) ? 120 : Math.max(0, e);
}
function Xe(t) {
  const e = t.getAttribute("data-tooltip-accent");
  if (e) return e.trim();
  const n = Array.from(t.classList).find(
    (r) => r.startsWith("cdw-fw-accent-")
  );
  return n ? n.replace("cdw-fw-accent-", "") : null;
}
function Ke(t) {
  const { tooltip: e, options: n } = t, r = e.querySelector(".cdw-tooltip__content");
  if (r) {
    if (r.innerHTML = "", n.icon) {
      const o = document.createElement("span");
      o.className = "cdw-tooltip__icon", o.textContent = n.icon, r.appendChild(o);
    }
    if (n.title) {
      const o = document.createElement("div");
      o.className = "cdw-tooltip__title", o.textContent = n.title, r.appendChild(o);
    }
    if (n.text) {
      const o = document.createElement("div");
      o.className = "cdw-tooltip__text", o.textContent = n.text, r.appendChild(o);
    }
    if (n.meta) {
      const o = document.createElement("div");
      o.className = "cdw-tooltip__meta", o.textContent = n.meta, r.appendChild(o);
    }
  }
}
function Ve(t, e) {
  const n = document.createElement("div"), r = We();
  n.id = r, n.className = `cdw-tooltip cdw-tooltip--${e.model}`, n.setAttribute("role", "tooltip"), n.setAttribute("data-placement", "top");
  const o = e.accent;
  o && n.classList.add(`cdw-fw-accent-${o}`);
  const i = document.createElement("div");
  i.className = "cdw-tooltip__content", n.appendChild(i);
  const s = document.createElement("span");
  return s.className = "cdw-tooltip__arrow", s.setAttribute("aria-hidden", "true"), n.appendChild(s), t.setAttribute("aria-describedby", r), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n), n;
}
function je(t, e, n) {
  const r = t.getBoundingClientRect(), o = e.getBoundingClientRect(), i = 10, s = r.top, c = window.innerHeight - r.bottom, l = r.left, a = window.innerWidth - r.right, d = (u) => {
    switch (u) {
      case "top":
        return s >= o.height + i;
      case "bottom":
        return c >= o.height + i;
      case "left":
        return l >= o.width + i;
      case "right":
        return a >= o.width + i;
      default:
        return !1;
    }
  };
  if (n !== "auto") {
    if (d(n)) return n;
    const u = n === "top" ? "bottom" : n === "bottom" ? "top" : n === "left" ? "right" : "left";
    if (d(u)) return u;
  }
  return c >= o.height + i ? "bottom" : s >= o.height + i ? "top" : a >= o.width + i ? "right" : l >= o.width + i ? "left" : "bottom";
}
function At(t) {
  const { trigger: e, tooltip: n, options: r } = t, o = e.getBoundingClientRect(), i = n.getBoundingClientRect(), s = 10, c = je(e, n, r.placement);
  let l = 0, a = 0;
  switch (c) {
    case "top":
      l = o.top - i.height - s, a = o.left + (o.width - i.width) / 2;
      break;
    case "bottom":
      l = o.bottom + s, a = o.left + (o.width - i.width) / 2;
      break;
    case "left":
      l = o.top + (o.height - i.height) / 2, a = o.left - i.width - s;
      break;
    case "right":
      l = o.top + (o.height - i.height) / 2, a = o.right + s;
      break;
  }
  const d = window.innerWidth - i.width - 8, u = window.innerHeight - i.height - 8;
  if (a = Math.min(Math.max(8, a), Math.max(8, d)), l = Math.min(Math.max(8, l), Math.max(8, u)), n.style.left = `${a}px`, n.style.top = `${l}px`, n.setAttribute("data-placement", c), c === "top" || c === "bottom") {
    const p = o.left + o.width / 2 - a, f = Math.min(Math.max(12, p), i.width - 12);
    n.style.setProperty("--cdw-tooltip-arrow-x", `${f}px`);
  } else {
    const p = o.top + o.height / 2 - l, f = Math.min(Math.max(12, p), i.height - 12);
    n.style.setProperty("--cdw-tooltip-arrow-y", `${f}px`);
  }
}
function vt(t) {
  t.open || (t.open = !0, t.tooltip.classList.add("is-open"), t.tooltip.setAttribute("aria-hidden", "false"), t.tooltip.style.visibility = "hidden", At(t), t.tooltip.style.visibility = "visible", $.add(t), t.boundReposition());
}
function _(t) {
  t.open && (t.open = !1, t.tooltip.classList.remove("is-open"), t.tooltip.setAttribute("aria-hidden", "true"), $.delete(t));
}
function Lt(t) {
  t.showTimer && window.clearTimeout(t.showTimer), t.hideTimer && window.clearTimeout(t.hideTimer), t.showTimer = void 0, t.hideTimer = void 0;
}
function st(t) {
  Lt(t), t.showTimer = window.setTimeout(() => vt(t), t.options.delay);
}
function at(t) {
  Lt(t), t.hideTimer = window.setTimeout(() => _(t), 90);
}
function Ze() {
  it || (document.addEventListener("keydown", (t) => {
    t.key === "Escape" && $.forEach((e) => _(e));
  }), it = !0);
}
function Je() {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}
function Qe(t) {
  if (!t.matches(Ge) || ot.has(t)) return;
  const e = t.getAttribute("data-cdw-tooltip"), n = {
    trigger: ze(t.getAttribute("data-tooltip-trigger")),
    placement: Fe(t.getAttribute("data-tooltip-placement")),
    model: Ue(t.getAttribute("data-tooltip-model")),
    delay: Ye(t.getAttribute("data-tooltip-delay")),
    accent: Xe(t),
    title: t.getAttribute("data-tooltip-title"),
    text: t.getAttribute("data-tooltip-text") ?? e,
    meta: t.getAttribute("data-tooltip-meta"),
    icon: t.getAttribute("data-tooltip-icon")
  }, r = Ve(t, n), o = {
    trigger: t,
    tooltip: r,
    options: n,
    open: !1,
    boundReposition: () => At(o)
  };
  Ke(o);
  const i = n.trigger === "hover" ? "hover-focus" : n.trigger;
  if (i === "click" || i === "hover-focus" && Je()) {
    const c = (l) => {
      const a = l.target;
      a && (a === t || t.contains(a) || a === r || r.contains(a) || _(o));
    };
    o.boundOutside = c, t.addEventListener("click", (l) => {
      l.preventDefault(), o.open ? _(o) : vt(o), o.boundOutside && document.addEventListener("click", o.boundOutside, { once: !0 });
    });
  } else
    t.addEventListener("mouseenter", () => st(o)), t.addEventListener("mouseleave", () => at(o)), t.addEventListener("focus", () => st(o)), t.addEventListener("blur", () => at(o));
  window.addEventListener("scroll", o.boundReposition, !0), window.addEventListener("resize", o.boundReposition), Ze(), ot.set(t, o);
}
const _t = "data-cdw-fw-initialized", tn = {
  childList: !0,
  subtree: !0
}, en = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: Ft
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: Vt
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: ie
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: be
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: Le
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: Ie
  },
  {
    name: "table",
    selector: ".cdw-table",
    bind: Pe
  },
  {
    name: "tooltip",
    selector: "[data-cdw-tooltip]",
    bind: Qe
  }
];
function nn(t) {
  return t ?? document;
}
function St(t) {
  const e = t.getAttribute(_t);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function on(t, e) {
  const n = St(t);
  n.has(e) || (n.add(e), t.setAttribute(_t, Array.from(n).join(" ")));
}
function rn(t, e) {
  return !St(t).has(e);
}
function sn(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function xt(t) {
  const e = nn(t);
  for (const n of en) {
    const r = sn(e, n.selector);
    for (const o of r)
      if (rn(o, n.name))
        try {
          n.bind(o), on(o, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function an() {
  if (typeof MutationObserver > "u") return;
  const t = document.body;
  if (!t) return;
  new MutationObserver((n) => {
    for (const r of n)
      r.addedNodes.forEach((o) => {
        o instanceof HTMLElement && xt(o);
      });
  }).observe(t, tn);
}
function ct() {
  xt(document), an();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => ct(), { once: !0 }) : ct());
const cn = "0.1.0";
export {
  cn as CDW_FW_VERSION
};
