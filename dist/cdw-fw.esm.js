const Tt = ".cdw-accordion-item", I = ".cdw-accordion-trigger", kt = ".cdw-accordion-panel", L = /* @__PURE__ */ new WeakMap();
let D = 0;
function P(t) {
  return D += 1, `${t}-${D}`;
}
function G(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function Ct(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function Ot(t, e) {
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
function ct(t) {
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
function Mt(t, e) {
  const n = Ct(t.getAttribute("data-mode"), "single"), r = G(
    t.getAttribute("data-collapsible"),
    !1
  ), o = G(t.getAttribute("data-animate"), !0), i = Ot(t.getAttribute("data-icon"), "chevron"), s = ct(
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
function Nt(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function Ht(t, e) {
  if (typeof e == "number")
    return t.index === e;
  if (e.startsWith("id:")) {
    const n = e.slice(3);
    return t.key === n || t.item.id === n;
  }
  return t.key === e;
}
function R(t, e, n) {
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
function lt(t, e, n) {
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
function dt(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), q(e, !1), R(e.panel, !1, t.options.animate), lt(t.container, "cdw:accordion:close", e));
}
function It(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && dt(t, n);
  }), e.item.classList.add("is-open"), q(e, !0), R(e.panel, !0, t.options.animate), lt(t.container, "cdw:accordion:open", e));
}
function ut(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    dt(t, e);
    return;
  }
  It(t, e);
}
function Rt(t) {
  return Array.from(t.querySelectorAll(Tt)).map((n, r) => {
    const o = n.querySelector(I), i = n.querySelector(kt);
    if (!o || !i) return null;
    o.id || (o.id = P("cdw-accordion-trigger")), i.id || (i.id = P("cdw-accordion-panel")), o.setAttribute("aria-controls", i.id), o.tagName === "BUTTON" && !o.getAttribute("type") && o.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", o.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || o.hasAttribute("disabled") || o.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), o.setAttribute("aria-disabled", "true"), o.tagName === "BUTTON" && o.setAttribute("disabled", "true"), o.tagName !== "BUTTON" && o.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), o.removeAttribute("aria-disabled"), o.tagName !== "BUTTON" && o.setAttribute("tabindex", "0")), {
      item: n,
      trigger: o,
      panel: i,
      index: r,
      key: Nt(n, r),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function qt(t) {
  const e = ct(t.options.defaultOpen), n = e.length > 0;
  let r = 0;
  t.items.forEach((o) => {
    const i = n ? e.some((c) => Ht(o, c)) : o.item.classList.contains("is-open");
    t.options.mode === "single" && r > 0 && i && o.item.classList.remove("is-open");
    const s = i && !o.disabled;
    s ? (o.item.classList.add("is-open"), r += 1) : o.item.classList.remove("is-open"), q(o, s), R(o.panel, s, t.options.animate);
  });
}
function $t(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const r = n.closest(I);
  if (!r || !t.triggerMap.has(r) || r.getAttribute("aria-disabled") === "true" || r.hasAttribute("disabled"))
    return;
  const o = t.triggerMap.get(r);
  o && ut(t, o);
}
function Bt(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const r = n.closest(I);
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
      e.preventDefault(), ut(t, t.triggerMap.get(r));
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
function Dt(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function Pt(t, e) {
  L.has(t) && Gt(t);
  const n = Mt(t);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const r = Rt(t), o = /* @__PURE__ */ new Map();
  r.forEach((s) => o.set(s.trigger, s));
  const i = {
    container: t,
    options: n,
    items: r,
    triggerMap: o,
    clickHandler: (s) => $t(i, s),
    keyHandler: (s) => Bt(i, s),
    resizeHandler: () => Dt(i)
  };
  t.addEventListener("click", i.clickHandler), t.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), qt(i), L.set(t, i);
}
function Gt(t) {
  const e = L.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), L.delete(t));
}
function Wt(t) {
  Pt(t);
}
const zt = "[data-cdw-alert-close]", Ft = "data-autoclose";
function Ut(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function W(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function Yt(t) {
  const e = t.querySelector(zt);
  e && e.addEventListener("click", () => W(t));
  const n = Ut(t.getAttribute(Ft));
  n && window.setTimeout(() => W(t), n);
}
function Xt(t) {
  Yt(t);
}
const Kt = "[data-cdw-gallery]", ft = "[data-cdw-gallery-item], .cdw-gallery__item", pt = ".cdw-gallery__media", Vt = ".cdw-gallery__label", jt = "[data-cdw-gallery-product]";
let g = null;
function Zt(t) {
  return t ? Array.from(t.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function Jt() {
  if (g) return g;
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
      s.root.classList.contains("is-open") && (c.key === "Escape" && k(), s.controlsEnabled && c.key === "ArrowLeft" && h(s.index - 1), s.controlsEnabled && c.key === "ArrowRight" && h(s.index + 1));
    }
  };
  return t.addEventListener("click", (c) => {
    const l = c.target;
    if (l) {
      if (l.closest("[data-cdw-gallery-close]")) {
        k();
        return;
      }
      if (l.closest("[data-cdw-gallery-prev]")) {
        h(s.index - 1);
        return;
      }
      l.closest("[data-cdw-gallery-next]") && h(s.index + 1);
    }
  }), n.addEventListener("click", () => {
    const c = Date.now();
    c - s.lastTap < 280 && s.root.classList.toggle("is-zoomed"), s.lastTap = c;
  }), i.forEach((c) => {
    c.addEventListener("click", () => k());
  }), document.addEventListener("keydown", s.keyHandler), g = s, s;
}
function Qt(t, e) {
  t.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), e === "immersive" ? t.classList.add("cdw-gallery-focus--immersive") : t.classList.add("cdw-gallery-focus--clean");
}
function k() {
  g && (g.root.classList.remove("is-open", "is-zoomed"), g.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function h(t) {
  if (!g) return;
  const e = g, n = e.items.length;
  if (!n) return;
  const r = (t + n) % n, o = e.items[r], i = o.querySelector(pt), s = o.querySelector(Vt)?.textContent?.trim() ?? "Image", c = Zt(i);
  e.media.className = `cdw-gallery-focus__media ${c}`, e.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${s}</span>`, e.index = r;
}
function te(t, e, n) {
  const r = Jt(), o = Array.from(t.querySelectorAll(ft));
  r.items = o, r.controlsEnabled = n && o.length > 1, r.prev.style.display = r.controlsEnabled ? "block" : "none", r.next.style.display = r.controlsEnabled ? "block" : "none", Qt(r.root, t.getAttribute("data-cdw-gallery-focus")), r.root.classList.add("is-open"), r.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const i = Math.max(0, o.indexOf(e));
  h(i);
}
function ee(t, e) {
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
function A(t, e, n, r) {
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
function ne(t) {
  const e = t.querySelector(".cdw-gallery__product");
  if (!e) return;
  const n = e.querySelector(".cdw-gallery__product-main"), r = n?.querySelector(".cdw-gallery__media"), o = n?.querySelector(".cdw-gallery__label"), i = n?.querySelector(".cdw-gallery__media img"), s = e.querySelector(".cdw-gallery__product-info"), c = s?.querySelector(".cdw-gallery__product-info-title"), l = s?.querySelector(".cdw-gallery__product-info-desc"), a = s?.querySelector(".cdw-gallery__product-info-meta"), d = Array.from(
    e.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !r || !d.length) return;
  const f = (u) => {
    d.forEach((y) => y.classList.remove("is-active")), u.classList.add("is-active");
    const m = u.getAttribute("data-label") ?? "Product", S = u.getAttribute("data-title") ?? m, E = u.getAttribute("data-desc") ?? "", B = u.getAttribute("data-meta") ?? "", St = u.getAttribute("data-aspect") ?? "cdw-gallery__media--square", x = u.getAttribute("data-src"), xt = u.getAttribute("data-alt") ?? m;
    r.className = `cdw-gallery__media ${St}`;
    const T = () => {
      o && (o.textContent = m), c && (c.textContent = S), l && (l.textContent = E), a && (a.innerHTML = B ? B.split("|").map((y) => `<span>${y.trim()}</span>`).join("") : ""), s && s.classList.remove("is-loading");
    };
    if (s && s.classList.add("is-loading"), i && x) {
      const y = new URL(x, window.location.href).href;
      if (i.src === y) {
        A(r, i, T);
        return;
      }
      A(r, i, T, !0), i.src = x, i.alt = xt;
    } else
      A(r, i ?? null, T);
  };
  d.forEach((u) => {
    u.addEventListener("click", (m) => {
      m.target instanceof HTMLImageElement && f(u);
    });
  });
  const p = d.find((u) => u.classList.contains("is-active")) ?? d[0];
  f(p);
}
function oe(t) {
  if (!t.matches(Kt)) return;
  if (t.matches(jt)) {
    ne(t);
    return;
  }
  const e = t.querySelector(".cdw-gallery__list");
  ee(t, e), t.addEventListener("click", (n) => {
    const r = n.target;
    if (!r) return;
    const o = r.closest(ft);
    if (!o) return;
    const i = o.querySelector(pt), s = i?.querySelector("img") ?? null;
    i && A(i, s);
    const c = t.getAttribute("data-cdw-gallery-controls") === "true";
    te(t, o, c);
  });
}
const re = "[data-cdw-modal]", ie = "[data-cdw-modal-open]", se = "[data-cdw-modal-close]", mt = "cdw-modal-open", b = [], z = /* @__PURE__ */ new WeakMap();
let F = !1;
function ae(t) {
  const e = t.replace(/^#/, "");
  return document.getElementById(e);
}
function ce(t) {
  return t ? t.startsWith("#") ? ae(t) : document.querySelector(t) : null;
}
function gt(t) {
  return t.classList.contains("is-open");
}
function N(t) {
  if (!gt(t.root)) return;
  t.root.classList.remove("is-open"), t.root.setAttribute("aria-hidden", "true");
  const e = b.findIndex((n) => n.root === t.root);
  e >= 0 && b.splice(e, 1), b.length === 0 && document.body.classList.remove(mt), t.lastActive?.focus();
}
function le(t) {
  gt(t.root) || (t.lastActive = document.activeElement, t.root.classList.add("is-open"), t.root.setAttribute("aria-hidden", "false"), b.find((e) => e.root === t.root) || b.push(t), document.body.classList.add(mt), t.dialog.focus());
}
function bt(t) {
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
      if (s.closest(se)) {
        N(o);
        return;
      }
      r && s.classList.contains("cdw-modal__backdrop") && N(o);
    }
  }), z.set(t, o), o;
}
function de(t) {
  const e = t.target;
  if (!e) return;
  const n = e.closest(ie);
  if (!n) return;
  const r = n.getAttribute("data-cdw-modal-open"), o = ce(r);
  if (!o) return;
  t.preventDefault();
  const i = bt(o);
  le(i);
}
function ue(t) {
  if (t.key !== "Escape") return;
  const e = b[b.length - 1];
  e && N(e);
}
function fe() {
  F || (document.addEventListener("click", de), document.addEventListener("keydown", ue), F = !0);
}
function pe(t) {
  t.matches(re) && (fe(), bt(t));
}
const me = ".cdw-navbar-panel", U = "[data-cdw-navbar-toggle]", Y = "[data-cdw-navbar-close]", X = "[data-cdw-navbar-sub]", K = /* @__PURE__ */ new WeakMap();
let V = !1;
function ge() {
  if (V || typeof window > "u") return;
  const t = window.matchMedia?.("(pointer: coarse)").matches, e = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (t || e || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), V = !0);
}
function be(t, e) {
  if (t.id) return t.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return t.id = n, e.setAttribute("data-cdw-navbar-panel", n), n;
}
function yt(t, e) {
  t && t.setAttribute("aria-expanded", e ? "true" : "false");
}
function ye(t) {
  t.container.classList.add("is-open"), yt(t.toggle, !0);
}
function H(t) {
  t.container.classList.remove("is-open"), yt(t.toggle, !1);
}
function he(t) {
  t.container.classList.contains("is-open") ? H(t) : ye(t);
}
function we(t) {
  const e = t.closest(".cdw-navbar-item");
  if (!e) return;
  const n = e.classList.toggle("is-open");
  t.setAttribute("aria-expanded", n ? "true" : "false");
}
function Ee(t) {
  if (K.has(t)) return;
  ge();
  const e = t.querySelector(me), n = t.querySelector(U), r = t.querySelector(".cdw-navbar-overlay"), o = Array.from(t.querySelectorAll(Y)), i = Array.from(t.querySelectorAll(X));
  if (e) {
    const c = be(e, t);
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
        he(s);
        return;
      }
      if (l.closest(Y) || l.closest(".cdw-navbar-overlay")) {
        H(s);
        return;
      }
      const d = l.closest(X);
      d && (c.preventDefault(), we(d));
    }
  };
  t.addEventListener("click", s.clickHandler), t.addEventListener("keydown", s.keyHandler), K.set(t, s);
}
function ve(t) {
  Ee(t);
}
const Ae = ".cdw-stage-track", Le = ".cdw-stage-slide", j = "[data-cdw-stage-prev]", Z = "[data-cdw-stage-next]", J = "[data-cdw-stage-go]", _e = "[data-cdw-stage-counter]", Se = "[data-cdw-stage-progress]", Q = /* @__PURE__ */ new WeakMap();
function v(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function tt(t, e) {
  if (!t) return e;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : e;
}
function xe(t) {
  const e = t.getAttribute("data-autoplay"), n = t.getAttribute("data-interval"), r = v(t.getAttribute("data-pause-on-hover"), !0), o = v(t.getAttribute("data-loop"), !0), i = v(t.getAttribute("data-keyboard"), !0), s = v(t.getAttribute("data-swipe"), !0), c = tt(t.getAttribute("data-start"), 0), l = t.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let a = !1, d = tt(n, 5200);
  if (e !== null) {
    a = e === "" || e === "true";
    const f = Number.parseInt(e, 10);
    Number.isFinite(f) && (a = !0, d = f);
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
function Te(t) {
  const e = t.querySelector(Ae) || t, n = Array.from(e.querySelectorAll(Le));
  return { track: e, slides: n };
}
function ke(t, e) {
  const n = t.slides.length;
  return n === 0 ? 0 : t.options.loop ? (e + n) % n : Math.max(0, Math.min(n - 1, e));
}
function Ce(t) {
  const e = t.slides.length;
  t.slides.forEach((n, r) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${r + 1} de ${e}`), n.setAttribute("aria-hidden", r === t.current ? "false" : "true");
  });
}
function ht(t) {
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
  const r = ke(t, e), o = t.options.loop ? (r - 1 + n) % n : r - 1, i = t.options.loop ? (r + 1) % n : r + 1;
  t.slides.forEach((s, c) => {
    s.classList.toggle("is-active", c === r), s.classList.toggle("is-prev", o >= 0 && c === o), s.classList.toggle("is-next", i < n && c === i);
  }), t.current = r, Ce(t), ht(t);
}
function et(t) {
  !t.options.autoplay || t.slides.length <= 1 || (t.timerId && window.clearInterval(t.timerId), t.timerId = window.setInterval(() => {
    w(t, t.current + 1);
  }, t.options.interval));
}
function Oe(t) {
  t.timerId && (window.clearInterval(t.timerId), t.timerId = null);
}
function C(t) {
  w(t, t.current - 1);
}
function O(t) {
  w(t, t.current + 1);
}
function M(t, e) {
  w(t, e);
}
function Me(t) {
  t.options.pauseOnHover && (t.container.addEventListener("mouseenter", t.enterHandler), t.container.addEventListener("mouseleave", t.leaveHandler), t.container.addEventListener("focusin", t.enterHandler), t.container.addEventListener("focusout", t.leaveHandler)), t.container.addEventListener("click", t.clickHandler), t.options.keyboard && (t.container.setAttribute("tabindex", "0"), t.container.addEventListener("keydown", t.keyHandler)), t.options.swipe && (t.container.addEventListener("touchstart", t.touchStartHandler, { passive: !0 }), t.container.addEventListener("touchend", t.touchEndHandler));
}
function Ne(t) {
  if (Q.has(t)) return;
  const e = xe(t), { track: n, slides: r } = Te(t), o = Array.from(t.querySelectorAll(J)), i = Array.from(t.querySelectorAll(j)), s = Array.from(t.querySelectorAll(Z)), c = t.querySelector(_e), l = t.querySelector(Se), a = {
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
      d.key === "ArrowLeft" ? (d.preventDefault(), C(a)) : d.key === "ArrowRight" ? (d.preventDefault(), O(a)) : d.key === "Home" ? (d.preventDefault(), M(a, 0)) : d.key === "End" && (d.preventDefault(), M(a, a.slides.length - 1));
    },
    clickHandler: (d) => {
      const f = d.target;
      if (!(f instanceof Element)) return;
      const p = f.closest(j), u = f.closest(Z);
      if (p) {
        C(a);
        return;
      }
      if (u) {
        O(a);
        return;
      }
      const m = f.closest(J);
      if (m) {
        const S = m.getAttribute("data-cdw-stage-go"), E = Number.parseInt(S || "", 10);
        Number.isFinite(E) && M(a, E);
      }
    },
    enterHandler: () => {
      a.hoverCount += 1, Oe(a);
    },
    leaveHandler: () => {
      a.hoverCount = Math.max(0, a.hoverCount - 1), a.hoverCount === 0 && et(a);
    },
    touchStartHandler: (d) => {
      if (d.touches.length !== 1) return;
      const f = d.touches[0];
      a.touchActive = !0, a.touchStartX = f.clientX, a.touchStartY = f.clientY;
    },
    touchEndHandler: (d) => {
      if (!a.touchActive) return;
      a.touchActive = !1;
      const f = d.changedTouches[0], p = f.clientX - a.touchStartX, u = f.clientY - a.touchStartY;
      Math.abs(p) < 30 || Math.abs(p) < Math.abs(u) || (p > 0 ? C(a) : O(a));
    }
  };
  if (t.setAttribute("role", "region"), t.setAttribute("aria-roledescription", "stage"), r.length > 0 && t.setAttribute("aria-live", "polite"), w(a, e.startIndex), Me(a), et(a), e.navMode === "auto" && o.length === 0 && r.length > 1) {
    const d = document.createElement("div");
    d.className = "cdw-stage-nav", r.forEach((f, p) => {
      const u = document.createElement("button");
      u.type = "button", u.className = "cdw-stage-indicator", u.setAttribute("data-cdw-stage-go", String(p)), u.setAttribute("aria-label", `Ir para o slide ${p + 1}`), d.appendChild(u), a.navButtons.push(u);
    }), t.appendChild(d), ht(a);
  }
  Q.set(t, a);
}
function He(t) {
  Ne(t);
}
const Ie = "[data-cdw-tooltip]", nt = /* @__PURE__ */ new WeakMap();
let ot = 0, rt = !1;
const $ = /* @__PURE__ */ new Set();
function Re() {
  return ot += 1, `cdw-tooltip-${ot}`;
}
function qe(t) {
  return t === "click" || t === "focus" || t === "hover-focus" ? t : "hover";
}
function $e(t) {
  return t === "top" || t === "bottom" || t === "left" || t === "right" ? t : "auto";
}
function Be(t) {
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
function De(t) {
  if (!t) return 120;
  const e = Number(t);
  return Number.isNaN(e) ? 120 : Math.max(0, e);
}
function Pe(t) {
  const e = t.getAttribute("data-tooltip-accent");
  if (e) return e.trim();
  const n = Array.from(t.classList).find(
    (r) => r.startsWith("cdw-fw-accent-")
  );
  return n ? n.replace("cdw-fw-accent-", "") : null;
}
function Ge(t) {
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
function We(t, e) {
  const n = document.createElement("div"), r = Re();
  n.id = r, n.className = `cdw-tooltip cdw-tooltip--${e.model}`, n.setAttribute("role", "tooltip"), n.setAttribute("data-placement", "top");
  const o = e.accent;
  o && n.classList.add(`cdw-fw-accent-${o}`);
  const i = document.createElement("div");
  i.className = "cdw-tooltip__content", n.appendChild(i);
  const s = document.createElement("span");
  return s.className = "cdw-tooltip__arrow", s.setAttribute("aria-hidden", "true"), n.appendChild(s), t.setAttribute("aria-describedby", r), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n), n;
}
function ze(t, e, n) {
  if (n !== "auto") return n;
  const r = t.getBoundingClientRect(), o = e.getBoundingClientRect(), i = 10, s = r.top, c = window.innerHeight - r.bottom, l = r.left, a = window.innerWidth - r.right;
  return c >= o.height + i ? "bottom" : s >= o.height + i ? "top" : a >= o.width + i ? "right" : l >= o.width + i ? "left" : "bottom";
}
function wt(t) {
  const { trigger: e, tooltip: n, options: r } = t, o = e.getBoundingClientRect(), i = n.getBoundingClientRect(), s = 10, c = ze(e, n, r.placement);
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
  const d = window.innerWidth - i.width - 8, f = window.innerHeight - i.height - 8;
  if (a = Math.min(Math.max(8, a), Math.max(8, d)), l = Math.min(Math.max(8, l), Math.max(8, f)), n.style.left = `${a}px`, n.style.top = `${l}px`, n.setAttribute("data-placement", c), c === "top" || c === "bottom") {
    const p = o.left + o.width / 2 - a, u = Math.min(Math.max(12, p), i.width - 12);
    n.style.setProperty("--cdw-tooltip-arrow-x", `${u}px`);
  } else {
    const p = o.top + o.height / 2 - l, u = Math.min(Math.max(12, p), i.height - 12);
    n.style.setProperty("--cdw-tooltip-arrow-y", `${u}px`);
  }
}
function Et(t) {
  t.open || (t.open = !0, t.tooltip.classList.add("is-open"), t.tooltip.setAttribute("aria-hidden", "false"), t.tooltip.style.visibility = "hidden", wt(t), t.tooltip.style.visibility = "visible", $.add(t), t.boundReposition());
}
function _(t) {
  t.open && (t.open = !1, t.tooltip.classList.remove("is-open"), t.tooltip.setAttribute("aria-hidden", "true"), $.delete(t));
}
function vt(t) {
  t.showTimer && window.clearTimeout(t.showTimer), t.hideTimer && window.clearTimeout(t.hideTimer), t.showTimer = void 0, t.hideTimer = void 0;
}
function it(t) {
  vt(t), t.showTimer = window.setTimeout(() => Et(t), t.options.delay);
}
function st(t) {
  vt(t), t.hideTimer = window.setTimeout(() => _(t), 90);
}
function Fe() {
  rt || (document.addEventListener("keydown", (t) => {
    t.key === "Escape" && $.forEach((e) => _(e));
  }), rt = !0);
}
function Ue() {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}
function Ye(t) {
  if (!t.matches(Ie) || nt.has(t)) return;
  const e = t.getAttribute("data-cdw-tooltip"), n = {
    trigger: qe(t.getAttribute("data-tooltip-trigger")),
    placement: $e(t.getAttribute("data-tooltip-placement")),
    model: Be(t.getAttribute("data-tooltip-model")),
    delay: De(t.getAttribute("data-tooltip-delay")),
    accent: Pe(t),
    title: t.getAttribute("data-tooltip-title"),
    text: t.getAttribute("data-tooltip-text") ?? e,
    meta: t.getAttribute("data-tooltip-meta"),
    icon: t.getAttribute("data-tooltip-icon")
  }, r = We(t, n), o = {
    trigger: t,
    tooltip: r,
    options: n,
    open: !1,
    boundReposition: () => wt(o)
  };
  Ge(o);
  const i = n.trigger === "hover" ? "hover-focus" : n.trigger;
  if (i === "click" || i === "hover-focus" && Ue()) {
    const c = (l) => {
      const a = l.target;
      a && (a === t || t.contains(a) || a === r || r.contains(a) || _(o));
    };
    o.boundOutside = c, t.addEventListener("click", (l) => {
      l.preventDefault(), o.open ? _(o) : Et(o), o.boundOutside && document.addEventListener("click", o.boundOutside, { once: !0 });
    });
  } else
    t.addEventListener("mouseenter", () => it(o)), t.addEventListener("mouseleave", () => st(o)), t.addEventListener("focus", () => it(o)), t.addEventListener("blur", () => st(o));
  window.addEventListener("scroll", o.boundReposition, !0), window.addEventListener("resize", o.boundReposition), Fe(), nt.set(t, o);
}
const At = "data-cdw-fw-initialized", Xe = {
  childList: !0,
  subtree: !0
}, Ke = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: Wt
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: Xt
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: oe
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: pe
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: ve
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: He
  },
  {
    name: "tooltip",
    selector: "[data-cdw-tooltip]",
    bind: Ye
  }
];
function Ve(t) {
  return t ?? document;
}
function Lt(t) {
  const e = t.getAttribute(At);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function je(t, e) {
  const n = Lt(t);
  n.has(e) || (n.add(e), t.setAttribute(At, Array.from(n).join(" ")));
}
function Ze(t, e) {
  return !Lt(t).has(e);
}
function Je(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function _t(t) {
  const e = Ve(t);
  for (const n of Ke) {
    const r = Je(e, n.selector);
    for (const o of r)
      if (Ze(o, n.name))
        try {
          n.bind(o), je(o, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function Qe() {
  if (typeof MutationObserver > "u") return;
  const t = document.body;
  if (!t) return;
  new MutationObserver((n) => {
    for (const r of n)
      r.addedNodes.forEach((o) => {
        o instanceof HTMLElement && _t(o);
      });
  }).observe(t, Xe);
}
function at() {
  _t(document), Qe();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => at(), { once: !0 }) : at());
const tn = "0.1.0";
export {
  tn as CDW_FW_VERSION
};
