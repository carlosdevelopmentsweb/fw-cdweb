const Kt = ".cdw-accordion-item", F = ".cdw-accordion-trigger", Xt = ".cdw-accordion-panel", k = /* @__PURE__ */ new WeakMap();
let V = 0;
function j(t) {
  return V += 1, `${t}-${V}`;
}
function Z(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function Yt(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function Vt(t, e) {
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
function Lt(t) {
  if (t == null) return [];
  if (Array.isArray(t)) return t;
  if (typeof t == "number") return [t];
  if (typeof t == "string") {
    const e = t.trim();
    if (!e) return [];
    if (e.includes(","))
      return e.split(",").map((o) => o.trim()).filter(Boolean).map((o) => {
        const r = Number(o);
        return Number.isNaN(r) ? o : r;
      });
    const n = Number(e);
    return Number.isNaN(n) ? [e] : [n];
  }
  return [];
}
function jt(t, e) {
  const n = Yt(t.getAttribute("data-mode"), "single"), o = Z(
    t.getAttribute("data-collapsible"),
    !1
  ), r = Z(t.getAttribute("data-animate"), !0), i = Vt(t.getAttribute("data-icon"), "chevron"), a = Lt(
    t.getAttribute("data-default-open")
  );
  return {
    mode: n,
    collapsible: o,
    defaultOpen: a,
    animate: r,
    icon: i
  };
}
function Zt(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function Jt(t, e) {
  if (typeof e == "number")
    return t.index === e;
  if (e.startsWith("id:")) {
    const n = e.slice(3);
    return t.key === n || t.item.id === n;
  }
  return t.key === e;
}
function P(t, e, n) {
  if (!n) {
    t.style.maxHeight = e ? "none" : "0px", t.style.opacity = e ? "1" : "0", t.style.pointerEvents = e ? "auto" : "none";
    return;
  }
  if (e) {
    t.style.maxHeight = `${t.scrollHeight}px`, t.style.opacity = "1", t.style.pointerEvents = "auto";
    const o = (r) => {
      r.propertyName === "max-height" && (t.style.maxHeight !== "0px" && (t.style.maxHeight = "none"), t.removeEventListener("transitionend", o));
    };
    t.addEventListener("transitionend", o);
    return;
  }
  (t.style.maxHeight === "none" || t.style.maxHeight === "") && (t.style.maxHeight = `${t.scrollHeight}px`), t.style.opacity = "1", t.style.pointerEvents = "none", t.getBoundingClientRect(), t.style.maxHeight = "0px", t.style.opacity = "0";
}
function W(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function St(t, e, n) {
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
function xt(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), W(e, !1), P(e.panel, !1, t.options.animate), St(t.container, "cdw:accordion:close", e));
}
function Qt(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && xt(t, n);
  }), e.item.classList.add("is-open"), W(e, !0), P(e.panel, !0, t.options.animate), St(t.container, "cdw:accordion:open", e));
}
function Tt(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    xt(t, e);
    return;
  }
  Qt(t, e);
}
function te(t) {
  return Array.from(t.querySelectorAll(Kt)).map((n, o) => {
    const r = n.querySelector(F), i = n.querySelector(Xt);
    if (!r || !i) return null;
    r.id || (r.id = j("cdw-accordion-trigger")), i.id || (i.id = j("cdw-accordion-panel")), r.setAttribute("aria-controls", i.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", r.id);
    const a = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return a ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: i,
      index: o,
      key: Zt(n, o),
      disabled: a
    };
  }).filter((n) => n !== null);
}
function ee(t) {
  const e = Lt(t.options.defaultOpen), n = e.length > 0;
  let o = 0;
  t.items.forEach((r) => {
    const i = n ? e.some((s) => Jt(r, s)) : r.item.classList.contains("is-open");
    t.options.mode === "single" && o > 0 && i && r.item.classList.remove("is-open");
    const a = i && !r.disabled;
    a ? (r.item.classList.add("is-open"), o += 1) : r.item.classList.remove("is-open"), W(r, a), P(r.panel, a, t.options.animate);
  });
}
function ne(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(F);
  if (!o || !t.triggerMap.has(o) || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled"))
    return;
  const r = t.triggerMap.get(o);
  r && Tt(t, r);
}
function re(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(F);
  if (!o || !t.triggerMap.has(o)) return;
  const r = t.items.filter((s) => !s.disabled).map((s) => s.trigger), i = r.indexOf(o);
  if (i === -1) return;
  const a = (s) => {
    const c = r[s];
    c && c.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), Tt(t, t.triggerMap.get(o));
      break;
    case "ArrowDown":
      e.preventDefault(), a((i + 1) % r.length);
      break;
    case "ArrowUp":
      e.preventDefault(), a((i - 1 + r.length) % r.length);
      break;
    case "Home":
      e.preventDefault(), a(0);
      break;
    case "End":
      e.preventDefault(), a(r.length - 1);
      break;
  }
}
function oe(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function ie(t, e) {
  k.has(t) && ae(t);
  const n = jt(t);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const o = te(t), r = /* @__PURE__ */ new Map();
  o.forEach((a) => r.set(a.trigger, a));
  const i = {
    container: t,
    options: n,
    items: o,
    triggerMap: r,
    clickHandler: (a) => ne(i, a),
    keyHandler: (a) => re(i, a),
    resizeHandler: () => oe(i)
  };
  t.addEventListener("click", i.clickHandler), t.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), ee(i), k.set(t, i);
}
function ae(t) {
  const e = k.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), k.delete(t));
}
function se(t) {
  ie(t);
}
const ce = "[data-cdw-alert-close]", le = "data-autoclose";
function de(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function J(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function ue(t) {
  const e = t.querySelector(ce);
  e && e.addEventListener("click", () => J(t));
  const n = de(t.getAttribute(le));
  n && window.setTimeout(() => J(t), n);
}
function fe(t) {
  ue(t);
}
const pe = "[data-cdw-gallery]", kt = "[data-cdw-gallery-item], .cdw-gallery__item", _t = ".cdw-gallery__media", be = ".cdw-gallery__label", me = "[data-cdw-gallery-product]";
let m = null;
function ge(t) {
  return t ? Array.from(t.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function we() {
  if (m) return m;
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
  const e = t.querySelector(".cdw-gallery-focus__frame"), n = t.querySelector(".cdw-gallery-focus__media"), o = t.querySelector("[data-cdw-gallery-prev]"), r = t.querySelector("[data-cdw-gallery-next]"), i = Array.from(t.querySelectorAll("[data-cdw-gallery-close]")), a = {
    root: t,
    frame: e,
    media: n,
    prev: o,
    next: r,
    closeButtons: i,
    items: [],
    index: 0,
    controlsEnabled: !1,
    lastTap: 0,
    keyHandler: (s) => {
      a.root.classList.contains("is-open") && (s.key === "Escape" && N(), a.controlsEnabled && s.key === "ArrowLeft" && y(a.index - 1), a.controlsEnabled && s.key === "ArrowRight" && y(a.index + 1));
    }
  };
  return t.addEventListener("click", (s) => {
    const c = s.target;
    if (c) {
      if (c.closest("[data-cdw-gallery-close]")) {
        N();
        return;
      }
      if (c.closest("[data-cdw-gallery-prev]")) {
        y(a.index - 1);
        return;
      }
      c.closest("[data-cdw-gallery-next]") && y(a.index + 1);
    }
  }), n.addEventListener("click", () => {
    const s = Date.now();
    s - a.lastTap < 280 && a.root.classList.toggle("is-zoomed"), a.lastTap = s;
  }), i.forEach((s) => {
    s.addEventListener("click", () => N());
  }), document.addEventListener("keydown", a.keyHandler), m = a, a;
}
function he(t, e) {
  t.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), e === "immersive" ? t.classList.add("cdw-gallery-focus--immersive") : t.classList.add("cdw-gallery-focus--clean");
}
function N() {
  m && (m.root.classList.remove("is-open", "is-zoomed"), m.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function y(t) {
  if (!m) return;
  const e = m, n = e.items.length;
  if (!n) return;
  const o = (t + n) % n, r = e.items[o], i = r.querySelector(_t), a = r.querySelector(be)?.textContent?.trim() ?? "Image", s = ge(i);
  e.media.className = `cdw-gallery-focus__media ${s}`, e.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${a}</span>`, e.index = o;
}
function ye(t, e, n) {
  const o = we(), r = Array.from(t.querySelectorAll(kt));
  o.items = r, o.controlsEnabled = n && r.length > 1, o.prev.style.display = o.controlsEnabled ? "block" : "none", o.next.style.display = o.controlsEnabled ? "block" : "none", he(o.root, t.getAttribute("data-cdw-gallery-focus")), o.root.classList.add("is-open"), o.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const i = Math.max(0, r.indexOf(e));
  y(i);
}
function ve(t, e) {
  if (!e) return;
  const n = t.querySelector("[data-cdw-gallery-strip-prev]"), o = t.querySelector("[data-cdw-gallery-strip-next]");
  if (!n && !o) return;
  const r = () => Math.max(180, e.clientWidth * 0.75);
  n?.addEventListener("click", () => {
    e.scrollBy({ left: -r(), behavior: "smooth" });
  }), o?.addEventListener("click", () => {
    e.scrollBy({ left: r(), behavior: "smooth" });
  });
}
function T(t, e, n, o) {
  if (t.classList.add("is-loading"), !e) {
    window.setTimeout(() => {
      t.classList.remove("is-loading"), n?.();
    }, 220);
    return;
  }
  const r = () => {
    t.classList.remove("is-loading"), n?.();
  };
  if (o) {
    e.addEventListener("load", r, { once: !0 });
    return;
  }
  e.complete ? requestAnimationFrame(r) : e.addEventListener("load", r, { once: !0 });
}
function Ae(t) {
  const e = t.querySelector(".cdw-gallery__product");
  if (!e) return;
  const n = e.querySelector(".cdw-gallery__product-main"), o = n?.querySelector(".cdw-gallery__media"), r = n?.querySelector(".cdw-gallery__label"), i = n?.querySelector(".cdw-gallery__media img"), a = e.querySelector(".cdw-gallery__product-info"), s = a?.querySelector(".cdw-gallery__product-info-title"), c = a?.querySelector(".cdw-gallery__product-info-desc"), l = a?.querySelector(".cdw-gallery__product-info-meta"), d = Array.from(
    e.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !o || !d.length) return;
  const u = (f) => {
    d.forEach((h) => h.classList.remove("is-active")), f.classList.add("is-active");
    const b = f.getAttribute("data-label") ?? "Product", O = f.getAttribute("data-title") ?? b, S = f.getAttribute("data-desc") ?? "", Y = f.getAttribute("data-meta") ?? "", Gt = f.getAttribute("data-aspect") ?? "cdw-gallery__media--square", q = f.getAttribute("data-src"), Ut = f.getAttribute("data-alt") ?? b;
    o.className = `cdw-gallery__media ${Gt}`;
    const H = () => {
      r && (r.textContent = b), s && (s.textContent = O), c && (c.textContent = S), l && (l.innerHTML = Y ? Y.split("|").map((h) => `<span>${h.trim()}</span>`).join("") : ""), a && a.classList.remove("is-loading");
    };
    if (a && a.classList.add("is-loading"), i && q) {
      const h = new URL(q, window.location.href).href;
      if (i.src === h) {
        T(o, i, H);
        return;
      }
      T(o, i, H, !0), i.src = q, i.alt = Ut;
    } else
      T(o, i ?? null, H);
  };
  d.forEach((f) => {
    f.addEventListener("click", (b) => {
      b.target instanceof HTMLImageElement && u(f);
    });
  });
  const p = d.find((f) => f.classList.contains("is-active")) ?? d[0];
  u(p);
}
function Ee(t) {
  if (!t.matches(pe)) return;
  if (t.matches(me)) {
    Ae(t);
    return;
  }
  const e = t.querySelector(".cdw-gallery__list");
  ve(t, e), t.addEventListener("click", (n) => {
    const o = n.target;
    if (!o) return;
    const r = o.closest(kt);
    if (!r) return;
    const i = r.querySelector(_t), a = i?.querySelector("img") ?? null;
    i && T(i, a);
    const s = t.getAttribute("data-cdw-gallery-controls") === "true";
    ye(t, r, s);
  });
}
const Le = {
  default: "Conexão criptografada. ERP, WMS e SaaS sob controle CDW-FW.",
  loading: "Validação em andamento...",
  error: "Ops! Usuário ou senha não conferem. Tente novamente."
};
function w(t, e) {
  t && (t.textContent = Le[e], t.setAttribute("data-state", e));
}
function I(t, e) {
  t.forEach((n) => {
    e ? n.removeAttribute("disabled") : n.setAttribute("disabled", "true");
  });
}
function Se(t) {
  Array.from(t.querySelectorAll("[data-cdw-login-toggle]")).forEach((n) => {
    const o = n.getAttribute("data-cdw-login-toggle"), r = o ? t.querySelector(`[data-cdw-login-input="${o}"]`) : null;
    r && n.addEventListener("click", () => {
      const i = r.type === "password";
      r.type = i ? "text" : "password", n.textContent = i ? "Ocultar" : "Mostrar", n.setAttribute("aria-pressed", String(!i)), r.focus();
    });
  });
}
function xe(t) {
  if (!(t instanceof HTMLFormElement)) return;
  const e = t, n = e.querySelector("[data-cdw-login-feedback]"), o = e.querySelector("[data-cdw-login-submit]"), r = e.querySelector("[data-cdw-login-google]"), i = Array.from(e.querySelectorAll("input"));
  let a = null;
  Se(e), w(n, "default");
  const s = () => {
    a && (window.clearTimeout(a), a = null), e.classList.remove("is-error", "is-loading"), o?.classList.remove("is-loading"), I(i, !0), o?.hasAttribute("disabled") && o.removeAttribute("disabled"), w(n, "default");
  };
  i.forEach((c) => {
    c.addEventListener("input", s);
  }), e.addEventListener("submit", (c) => {
    c.preventDefault(), !e.classList.contains("is-loading") && (e.classList.remove("is-error"), e.classList.add("is-loading"), o?.classList.add("is-loading"), o?.setAttribute("disabled", "true"), I(i, !1), w(n, "loading"), a = window.setTimeout(() => {
      e.classList.remove("is-loading"), e.classList.add("is-error"), o?.classList.remove("is-loading"), I(i, !0), o?.removeAttribute("disabled"), w(n, "error"), a = null;
    }, 1200));
  }), r?.addEventListener("click", () => {
    w(n, "loading"), e.classList.add("is-loading"), o?.classList.add("is-loading"), a = window.setTimeout(() => {
      w(n, "default"), e.classList.remove("is-loading"), o?.classList.remove("is-loading"), a = null;
    }, 900);
  });
}
const Te = "[data-cdw-modal]", ke = "[data-cdw-modal-open]", _e = "[data-cdw-modal-close]", Ct = "cdw-modal-open", g = [], Q = /* @__PURE__ */ new WeakMap();
let tt = !1;
function Ce(t) {
  const e = t.replace(/^#/, "");
  return document.getElementById(e);
}
function Me(t) {
  return t ? t.startsWith("#") ? Ce(t) : document.querySelector(t) : null;
}
function Mt(t) {
  return t.classList.contains("is-open");
}
function B(t) {
  if (!Mt(t.root)) return;
  t.root.classList.remove("is-open"), t.root.setAttribute("aria-hidden", "true");
  const e = g.findIndex((n) => n.root === t.root);
  e >= 0 && g.splice(e, 1), g.length === 0 && document.body.classList.remove(Ct), t.lastActive?.focus();
}
function Oe(t) {
  Mt(t.root) || (t.lastActive = document.activeElement, t.root.classList.add("is-open"), t.root.setAttribute("aria-hidden", "false"), g.find((e) => e.root === t.root) || g.push(t), document.body.classList.add(Ct), t.dialog.focus());
}
function Ot(t) {
  const e = Q.get(t);
  if (e) return e;
  const n = t.querySelector(".cdw-modal__dialog");
  if (!n)
    throw new Error("Modal sem .cdw-modal__dialog");
  n.setAttribute("tabindex", "-1"), t.setAttribute("aria-hidden", "true");
  const o = t.getAttribute("data-close-overlay") !== "false", r = {
    root: t,
    dialog: n,
    closeOnOverlay: o,
    lastActive: null
  };
  return t.addEventListener("click", (i) => {
    const a = i.target;
    if (a) {
      if (a.closest(_e)) {
        B(r);
        return;
      }
      o && a.classList.contains("cdw-modal__backdrop") && B(r);
    }
  }), Q.set(t, r), r;
}
function qe(t) {
  const e = t.target;
  if (!e) return;
  const n = e.closest(ke);
  if (!n) return;
  const o = n.getAttribute("data-cdw-modal-open"), r = Me(o);
  if (!r) return;
  t.preventDefault();
  const i = Ot(r);
  Oe(i);
}
function He(t) {
  if (t.key !== "Escape") return;
  const e = g[g.length - 1];
  e && B(e);
}
function Ne() {
  tt || (document.addEventListener("click", qe), document.addEventListener("keydown", He), tt = !0);
}
function Ie(t) {
  t.matches(Te) && (Ne(), Ot(t));
}
const Re = ".cdw-navbar-panel", et = "[data-cdw-navbar-toggle]", nt = "[data-cdw-navbar-close]", rt = "[data-cdw-navbar-sub]", ot = /* @__PURE__ */ new WeakMap();
let it = !1;
function $e() {
  if (it || typeof window > "u") return;
  const t = window.matchMedia?.("(pointer: coarse)").matches, e = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (t || e || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), it = !0);
}
function De(t, e) {
  if (t.id) return t.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return t.id = n, e.setAttribute("data-cdw-navbar-panel", n), n;
}
function qt(t, e) {
  t && t.setAttribute("aria-expanded", e ? "true" : "false");
}
function Be(t) {
  t.container.classList.add("is-open"), qt(t.toggle, !0);
}
function z(t) {
  t.container.classList.remove("is-open"), qt(t.toggle, !1);
}
function ze(t) {
  t.container.classList.contains("is-open") ? z(t) : Be(t);
}
function Fe(t) {
  const e = t.closest(".cdw-navbar-item");
  if (!e) return;
  const n = e.classList.toggle("is-open");
  t.setAttribute("aria-expanded", n ? "true" : "false");
}
function Pe(t) {
  if (ot.has(t)) return;
  $e();
  const e = t.querySelector(Re), n = t.querySelector(et), o = t.querySelector(".cdw-navbar-overlay"), r = Array.from(t.querySelectorAll(nt)), i = Array.from(t.querySelectorAll(rt));
  if (e) {
    const s = De(e, t);
    n && (n.setAttribute("aria-controls", s), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const a = {
    container: t,
    panel: e,
    toggle: n,
    overlay: o,
    closeButtons: r,
    subToggles: i,
    keyHandler: (s) => {
      s.key === "Escape" && z(a);
    },
    clickHandler: (s) => {
      const c = s.target;
      if (!(c instanceof Element)) return;
      if (c.closest(et)) {
        ze(a);
        return;
      }
      if (c.closest(nt) || c.closest(".cdw-navbar-overlay")) {
        z(a);
        return;
      }
      const d = c.closest(rt);
      d && (s.preventDefault(), Fe(d));
    }
  };
  t.addEventListener("click", a.clickHandler), t.addEventListener("keydown", a.keyHandler), ot.set(t, a);
}
function We(t) {
  Pe(t);
}
const Ge = ".cdw-stage-track", Ue = ".cdw-stage-slide", at = "[data-cdw-stage-prev]", st = "[data-cdw-stage-next]", ct = "[data-cdw-stage-go]", Ke = "[data-cdw-stage-counter]", Xe = "[data-cdw-stage-progress]", lt = /* @__PURE__ */ new WeakMap();
function x(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function dt(t, e) {
  if (!t) return e;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : e;
}
function Ye(t) {
  const e = t.getAttribute("data-autoplay"), n = t.getAttribute("data-interval"), o = x(t.getAttribute("data-pause-on-hover"), !0), r = x(t.getAttribute("data-loop"), !0), i = x(t.getAttribute("data-keyboard"), !0), a = x(t.getAttribute("data-swipe"), !0), s = dt(t.getAttribute("data-start"), 0), c = t.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let l = !1, d = dt(n, 5200);
  if (e !== null) {
    l = e === "" || e === "true";
    const u = Number.parseInt(e, 10);
    Number.isFinite(u) && (l = !0, d = u);
  }
  return {
    autoplay: l,
    interval: d,
    pauseOnHover: o,
    loop: r,
    keyboard: i,
    swipe: a,
    startIndex: s,
    navMode: c
  };
}
function Ve(t) {
  const e = t.querySelector(Ge) || t, n = Array.from(e.querySelectorAll(Ue));
  return { track: e, slides: n };
}
function je(t, e) {
  const n = t.slides.length;
  return n === 0 ? 0 : t.options.loop ? (e + n) % n : Math.max(0, Math.min(n - 1, e));
}
function Ze(t) {
  const e = t.slides.length;
  t.slides.forEach((n, o) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${o + 1} de ${e}`), n.setAttribute("aria-hidden", o === t.current ? "false" : "true");
  });
}
function Ht(t) {
  const e = t.slides.length;
  if (t.navButtons.forEach((n, o) => {
    o === t.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), t.counterEl && (t.counterEl.textContent = `${t.current + 1}/${e}`), t.progressEl) {
    const n = e > 0 ? (t.current + 1) / e * 100 : 0;
    t.progressEl.style.width = `${n}%`;
  }
}
function E(t, e) {
  const n = t.slides.length;
  if (n === 0) return;
  const o = je(t, e), r = t.options.loop ? (o - 1 + n) % n : o - 1, i = t.options.loop ? (o + 1) % n : o + 1;
  t.slides.forEach((a, s) => {
    a.classList.toggle("is-active", s === o), a.classList.toggle("is-prev", r >= 0 && s === r), a.classList.toggle("is-next", i < n && s === i);
  }), t.current = o, Ze(t), Ht(t);
}
function ut(t) {
  !t.options.autoplay || t.slides.length <= 1 || (t.timerId && window.clearInterval(t.timerId), t.timerId = window.setInterval(() => {
    E(t, t.current + 1);
  }, t.options.interval));
}
function Je(t) {
  t.timerId && (window.clearInterval(t.timerId), t.timerId = null);
}
function R(t) {
  E(t, t.current - 1);
}
function $(t) {
  E(t, t.current + 1);
}
function D(t, e) {
  E(t, e);
}
function Qe(t) {
  t.options.pauseOnHover && (t.container.addEventListener("mouseenter", t.enterHandler), t.container.addEventListener("mouseleave", t.leaveHandler), t.container.addEventListener("focusin", t.enterHandler), t.container.addEventListener("focusout", t.leaveHandler)), t.container.addEventListener("click", t.clickHandler), t.options.keyboard && (t.container.setAttribute("tabindex", "0"), t.container.addEventListener("keydown", t.keyHandler)), t.options.swipe && (t.container.addEventListener("touchstart", t.touchStartHandler, { passive: !0 }), t.container.addEventListener("touchend", t.touchEndHandler));
}
function tn(t) {
  if (lt.has(t)) return;
  const e = Ye(t), { track: n, slides: o } = Ve(t), r = Array.from(t.querySelectorAll(ct)), i = Array.from(t.querySelectorAll(at)), a = Array.from(t.querySelectorAll(st)), s = t.querySelector(Ke), c = t.querySelector(Xe), l = {
    container: t,
    track: n,
    slides: o,
    navButtons: r,
    prevButtons: i,
    nextButtons: a,
    counterEl: s,
    progressEl: c,
    options: e,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (d) => {
      d.key === "ArrowLeft" ? (d.preventDefault(), R(l)) : d.key === "ArrowRight" ? (d.preventDefault(), $(l)) : d.key === "Home" ? (d.preventDefault(), D(l, 0)) : d.key === "End" && (d.preventDefault(), D(l, l.slides.length - 1));
    },
    clickHandler: (d) => {
      const u = d.target;
      if (!(u instanceof Element)) return;
      const p = u.closest(at), f = u.closest(st);
      if (p) {
        R(l);
        return;
      }
      if (f) {
        $(l);
        return;
      }
      const b = u.closest(ct);
      if (b) {
        const O = b.getAttribute("data-cdw-stage-go"), S = Number.parseInt(O || "", 10);
        Number.isFinite(S) && D(l, S);
      }
    },
    enterHandler: () => {
      l.hoverCount += 1, Je(l);
    },
    leaveHandler: () => {
      l.hoverCount = Math.max(0, l.hoverCount - 1), l.hoverCount === 0 && ut(l);
    },
    touchStartHandler: (d) => {
      if (d.touches.length !== 1) return;
      const u = d.touches[0];
      l.touchActive = !0, l.touchStartX = u.clientX, l.touchStartY = u.clientY;
    },
    touchEndHandler: (d) => {
      if (!l.touchActive) return;
      l.touchActive = !1;
      const u = d.changedTouches[0], p = u.clientX - l.touchStartX, f = u.clientY - l.touchStartY;
      Math.abs(p) < 30 || Math.abs(p) < Math.abs(f) || (p > 0 ? R(l) : $(l));
    }
  };
  if (t.setAttribute("role", "region"), t.setAttribute("aria-roledescription", "stage"), o.length > 0 && t.setAttribute("aria-live", "polite"), E(l, e.startIndex), Qe(l), ut(l), e.navMode === "auto" && r.length === 0 && o.length > 1) {
    const d = document.createElement("div");
    d.className = "cdw-stage-nav", o.forEach((u, p) => {
      const f = document.createElement("button");
      f.type = "button", f.className = "cdw-stage-indicator", f.setAttribute("data-cdw-stage-go", String(p)), f.setAttribute("aria-label", `Ir para o slide ${p + 1}`), d.appendChild(f), l.navButtons.push(f);
    }), t.appendChild(d), Ht(l);
  }
  lt.set(t, l);
}
function en(t) {
  tn(t);
}
const nn = ".cdw-table-header", rn = ".cdw-table-row", Nt = ".cdw-table-cell";
function ft(t) {
  return t.trim().toLowerCase();
}
function on(t) {
  const e = t.querySelector(nn);
  return e ? Array.from(e.querySelectorAll(Nt)).map((o) => (o.getAttribute("data-label") ?? o.textContent ?? "").trim()).filter(Boolean) : [];
}
function an(t, e) {
  if (e.length === 0) return;
  const n = Array.from(t.querySelectorAll(Nt));
  if (n.length === 0) return;
  if (!n.some((c) => {
    const l = c.getAttribute("data-label");
    return l !== null && l.trim() !== "";
  })) {
    n.forEach((c, l) => {
      const d = e[l];
      d && c.setAttribute("data-label", d);
    });
    return;
  }
  n.forEach((c, l) => {
    const d = c.getAttribute("data-label");
    (!d || d.trim() === "") && e[l] && c.setAttribute("data-label", e[l]);
  });
  const r = /* @__PURE__ */ new Map();
  n.forEach((c) => {
    const l = c.getAttribute("data-label");
    if (!l) return;
    const d = ft(l);
    r.has(d) || r.set(d, c);
  });
  const i = [], a = /* @__PURE__ */ new Set();
  let s = !1;
  e.forEach((c, l) => {
    const d = ft(c), u = r.get(d);
    if (u) {
      i.push(u), a.add(u), !s && n[l] !== u && (s = !0);
      return;
    }
    const p = document.createElement("div");
    p.className = "cdw-table-cell", p.setAttribute("data-label", c), p.setAttribute("aria-hidden", "true"), i.push(p), s = !0;
  }), n.forEach((c) => {
    a.has(c) || (i.push(c), !s && n[i.length - 1] !== c && (s = !0));
  }), s && t.replaceChildren(...i);
}
function sn(t) {
  const e = on(t);
  if (e.length === 0) return;
  Array.from(t.querySelectorAll(rn)).forEach((o) => an(o, e));
}
const cn = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap();
function pt(t, e) {
  const n = new DataTransfer();
  e.forEach((o) => n.items.add(o)), t.files = n.files;
}
function dn(t) {
  return Array.from(t.querySelectorAll(".cdw-form-select-option"));
}
function G(t, e) {
  t.options.forEach((n) => n.classList.remove("is-active")), e && e.classList.add("is-active");
}
function U(t, e) {
  const n = e.getAttribute("data-value") || e.textContent || "", o = e.textContent || n;
  t.valueEl && (t.valueEl.textContent = o.trim()), t.trigger.setAttribute("data-value", n), G(t, e);
}
function v(t, e, n = !0) {
  t.root.classList.toggle("is-open", e), t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), e && t.search ? t.search.focus() : n && t.trigger.focus();
}
function un(t, e) {
  const n = e.target;
  if (!(n instanceof HTMLElement)) return;
  const o = n.closest(".cdw-form-select-option");
  o && (U(t, o), v(t, !1));
}
function fn(t) {
  const e = t.root.classList.contains("is-open");
  v(t, !e);
}
function pn(t, e) {
  const n = e.trim().toLowerCase();
  t.options.forEach((o) => {
    const r = (o.textContent || "").trim().toLowerCase();
    o.style.display = r.includes(n) ? "" : "none";
  });
}
function bn(t, e) {
  const n = e.key, o = t.options.filter((i) => i.style.display !== "none");
  if (!o.length) return;
  const r = o.findIndex((i) => i.classList.contains("is-active"));
  if (n === "ArrowDown" || n === "ArrowUp") {
    e.preventDefault();
    const i = n === "ArrowDown" ? Math.min(o.length - 1, r + 1) : Math.max(0, r - 1);
    G(t, o[i] || o[0]);
    return;
  }
  if (n === "Enter") {
    e.preventDefault();
    const i = o[r] || o[0];
    i && U(t, i), v(t, !1);
    return;
  }
  n === "Escape" && (e.preventDefault(), v(t, !1));
}
function mn(t) {
  const e = t.querySelector(".cdw-form-select-trigger"), n = t.querySelector(".cdw-form-select-panel");
  if (!e || !n) return;
  const o = {
    root: t,
    trigger: e,
    search: t.querySelector(".cdw-form-select-search"),
    options: dn(t),
    panel: n,
    valueEl: t.querySelector(".cdw-form-select-value")
  };
  if (o.options.length) {
    if (!o.valueEl) {
      const r = document.createElement("span");
      r.className = "cdw-form-select-value", e.prepend(r), o.valueEl = r;
    }
    e.setAttribute("aria-haspopup", "listbox"), e.setAttribute("aria-expanded", "false"), n.setAttribute("role", "listbox"), o.options.some((r) => r.classList.contains("is-active")) || (G(o, o.options[0]), U(o, o.options[0])), e.addEventListener("click", () => fn(o)), n.addEventListener("click", (r) => un(o, r)), t.addEventListener("keydown", (r) => bn(o, r)), o.search && o.search.addEventListener("input", (r) => {
      const i = r.target;
      pn(o, i.value);
    }), document.addEventListener("click", (r) => {
      t.contains(r.target) || v(o, !1, !1);
    }), cn.set(t, o);
  }
}
function gn(t) {
  const e = t.querySelector(".cdw-form-dropzone-input"), n = t.closest(".cdw-form-dropzone-wrap"), o = t.querySelector(".cdw-form-dropzone-list") || n?.querySelector(".cdw-form-dropzone-list") || null, r = { root: t, input: e, list: o, files: [] };
  if (!e) return;
  const i = () => {
    o && (o.innerHTML = "", r.files.length && r.files.forEach((a, s) => {
      const c = document.createElement("div");
      c.className = "cdw-form-dropzone-item", c.innerHTML = `<span>${a.name}</span><span>${Math.round(
        a.size / 1024
      )}kb</span><button class="cdw-form-dropzone-remove" type="button" data-index="${s}" aria-label="Remover">Remover</button>`, o.appendChild(c);
    }));
  };
  e.addEventListener("change", () => {
    r.files = Array.from(e.files || []), i();
  }), o?.addEventListener("click", (a) => {
    const s = a.target;
    if (!s) return;
    const c = s.closest(".cdw-form-dropzone-remove");
    if (!c) return;
    const l = Number(c.getAttribute("data-index"));
    Number.isFinite(l) && (r.files.splice(l, 1), pt(e, r.files), i());
  }), t.addEventListener("dragenter", (a) => {
    a.preventDefault(), t.classList.add("is-dragging");
  }), t.addEventListener("dragover", (a) => {
    a.preventDefault(), t.classList.add("is-dragging");
  }), t.addEventListener("dragleave", () => {
    t.classList.remove("is-dragging");
  }), t.addEventListener("drop", (a) => {
    a.preventDefault(), t.classList.remove("is-dragging");
    const s = a.dataTransfer?.files;
    s && e && (r.files = r.files.concat(Array.from(s)), pt(e, r.files), i());
  }), ln.set(t, r);
}
function wn(t) {
  Array.from(t.querySelectorAll(".cdw-form-select-advanced")).forEach((i) => mn(i)), Array.from(t.querySelectorAll(".cdw-form-dropzone")).forEach((i) => gn(i)), Array.from(t.querySelectorAll(".cdw-form-filebox")).forEach((i) => {
    const a = i.querySelector(".cdw-form-file-input"), s = i.querySelector(".cdw-form-file-list"), c = i.querySelector(".cdw-form-file-button");
    if (!a || !s || !c) return;
    const l = () => {
      s.innerHTML = "";
      const d = a.files && a.files[0] ? a.files[0] : null;
      if (!d) return;
      const u = document.createElement("div");
      u.className = "cdw-form-file-item", u.innerHTML = `<span>${d.name}</span><button class="cdw-form-file-remove" type="button" aria-label="Remover">Remover</button>`, s.appendChild(u);
    };
    c.addEventListener("click", () => a.click()), a.addEventListener("change", () => l()), s.addEventListener("click", (d) => {
      const u = d.target;
      !u || !u.closest(".cdw-form-file-remove") || (a.value = "", l());
    });
  }), Array.from(
    t.querySelectorAll("textarea[data-cdw-form-counter]")
  ).forEach((i) => {
    const a = i.getAttribute("maxlength") || i.getAttribute("data-max"), s = a ? Number(a) : 240;
    let c = i.nextElementSibling;
    (!c || !c.classList.contains("cdw-form-counter")) && (c = document.createElement("div"), c.className = "cdw-form-counter", i.insertAdjacentElement("afterend", c));
    const l = () => {
      const d = i.value.length;
      c.textContent = `${d}/${Number.isFinite(s) ? s : d}`;
    };
    i.addEventListener("input", l), l();
  });
}
const hn = "[data-cdw-tooltip]", bt = /* @__PURE__ */ new WeakMap();
let mt = 0, gt = !1;
const K = /* @__PURE__ */ new Set();
function yn() {
  return mt += 1, `cdw-tooltip-${mt}`;
}
function vn(t) {
  return t === "click" || t === "focus" || t === "hover-focus" ? t : "hover";
}
function An(t) {
  return t === "top" || t === "bottom" || t === "left" || t === "right" ? t : "auto";
}
function En(t) {
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
function Ln(t) {
  if (!t) return 120;
  const e = Number(t);
  return Number.isNaN(e) ? 120 : Math.max(0, e);
}
function Sn(t) {
  const e = t.getAttribute("data-tooltip-accent");
  if (e) return e.trim();
  const n = Array.from(t.classList).find(
    (o) => o.startsWith("cdw-fw-accent-")
  );
  return n ? n.replace("cdw-fw-accent-", "") : null;
}
function xn(t) {
  const { tooltip: e, options: n } = t, o = e.querySelector(".cdw-tooltip__content");
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
function Tn(t, e) {
  const n = document.createElement("div"), o = yn();
  n.id = o, n.className = `cdw-tooltip cdw-tooltip--${e.model}`, n.setAttribute("role", "tooltip"), n.setAttribute("data-placement", "top");
  const r = e.accent;
  r && n.classList.add(`cdw-fw-accent-${r}`);
  const i = document.createElement("div");
  i.className = "cdw-tooltip__content", n.appendChild(i);
  const a = document.createElement("span");
  return a.className = "cdw-tooltip__arrow", a.setAttribute("aria-hidden", "true"), n.appendChild(a), t.setAttribute("aria-describedby", o), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n), n;
}
function kn(t, e, n) {
  const o = t.getBoundingClientRect(), r = e.getBoundingClientRect(), i = 10, a = o.top, s = window.innerHeight - o.bottom, c = o.left, l = window.innerWidth - o.right, d = (u) => {
    switch (u) {
      case "top":
        return a >= r.height + i;
      case "bottom":
        return s >= r.height + i;
      case "left":
        return c >= r.width + i;
      case "right":
        return l >= r.width + i;
      default:
        return !1;
    }
  };
  if (n !== "auto") {
    if (d(n)) return n;
    const u = n === "top" ? "bottom" : n === "bottom" ? "top" : n === "left" ? "right" : "left";
    if (d(u)) return u;
  }
  return s >= r.height + i ? "bottom" : a >= r.height + i ? "top" : l >= r.width + i ? "right" : c >= r.width + i ? "left" : "bottom";
}
function It(t) {
  const { trigger: e, tooltip: n, options: o } = t, r = e.getBoundingClientRect(), i = n.getBoundingClientRect(), a = 10, s = kn(e, n, o.placement);
  let c = 0, l = 0;
  switch (s) {
    case "top":
      c = r.top - i.height - a, l = r.left + (r.width - i.width) / 2;
      break;
    case "bottom":
      c = r.bottom + a, l = r.left + (r.width - i.width) / 2;
      break;
    case "left":
      c = r.top + (r.height - i.height) / 2, l = r.left - i.width - a;
      break;
    case "right":
      c = r.top + (r.height - i.height) / 2, l = r.right + a;
      break;
  }
  const d = window.innerWidth - i.width - 8, u = window.innerHeight - i.height - 8;
  if (l = Math.min(Math.max(8, l), Math.max(8, d)), c = Math.min(Math.max(8, c), Math.max(8, u)), n.style.left = `${l}px`, n.style.top = `${c}px`, n.setAttribute("data-placement", s), s === "top" || s === "bottom") {
    const p = r.left + r.width / 2 - l, f = Math.min(Math.max(12, p), i.width - 12);
    n.style.setProperty("--cdw-tooltip-arrow-x", `${f}px`);
  } else {
    const p = r.top + r.height / 2 - c, f = Math.min(Math.max(12, p), i.height - 12);
    n.style.setProperty("--cdw-tooltip-arrow-y", `${f}px`);
  }
}
function Rt(t) {
  t.open || (t.open = !0, t.tooltip.classList.add("is-open"), t.tooltip.setAttribute("aria-hidden", "false"), t.tooltip.style.visibility = "hidden", It(t), t.tooltip.style.visibility = "visible", K.add(t), t.boundReposition());
}
function _(t) {
  t.open && (t.open = !1, t.tooltip.classList.remove("is-open"), t.tooltip.setAttribute("aria-hidden", "true"), K.delete(t));
}
function $t(t) {
  t.showTimer && window.clearTimeout(t.showTimer), t.hideTimer && window.clearTimeout(t.hideTimer), t.showTimer = void 0, t.hideTimer = void 0;
}
function wt(t) {
  $t(t), t.showTimer = window.setTimeout(() => Rt(t), t.options.delay);
}
function ht(t) {
  $t(t), t.hideTimer = window.setTimeout(() => _(t), 90);
}
function _n() {
  gt || (document.addEventListener("keydown", (t) => {
    t.key === "Escape" && K.forEach((e) => _(e));
  }), gt = !0);
}
function Cn() {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}
function Mn(t) {
  if (!t.matches(hn) || bt.has(t)) return;
  const e = t.getAttribute("data-cdw-tooltip"), n = {
    trigger: vn(t.getAttribute("data-tooltip-trigger")),
    placement: An(t.getAttribute("data-tooltip-placement")),
    model: En(t.getAttribute("data-tooltip-model")),
    delay: Ln(t.getAttribute("data-tooltip-delay")),
    accent: Sn(t),
    title: t.getAttribute("data-tooltip-title"),
    text: t.getAttribute("data-tooltip-text") ?? e,
    meta: t.getAttribute("data-tooltip-meta"),
    icon: t.getAttribute("data-tooltip-icon")
  }, o = Tn(t, n), r = {
    trigger: t,
    tooltip: o,
    options: n,
    open: !1,
    boundReposition: () => It(r)
  };
  xn(r);
  const i = n.trigger === "hover" ? "hover-focus" : n.trigger;
  if (i === "click" || i === "hover-focus" && Cn()) {
    const s = (c) => {
      const l = c.target;
      l && (l === t || t.contains(l) || l === o || o.contains(l) || _(r));
    };
    r.boundOutside = s, t.addEventListener("click", (c) => {
      c.preventDefault(), r.open ? _(r) : Rt(r), r.boundOutside && document.addEventListener("click", r.boundOutside, { once: !0 });
    });
  } else
    t.addEventListener("mouseenter", () => wt(r)), t.addEventListener("mouseleave", () => ht(r)), t.addEventListener("focus", () => wt(r)), t.addEventListener("blur", () => ht(r));
  window.addEventListener("scroll", r.boundReposition, !0), window.addEventListener("resize", r.boundReposition), _n(), bt.set(t, r);
}
const Dt = ".cdw-fab", yt = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new Set();
let vt = !1;
function On(t) {
  return t ? t.children.length > 0 : !1;
}
function X(t, e) {
  t.main.setAttribute("aria-expanded", e ? "true" : "false"), t.actions && t.actions.setAttribute("aria-hidden", e ? "false" : "true");
}
function qn(t) {
  t.open || (t.open = !0, t.root.classList.add("is-open"), X(t, !0), A.add(t));
}
function M(t) {
  t.open && (t.open = !1, t.root.classList.remove("is-open"), X(t, !1), A.delete(t));
}
function Hn(t) {
  t.open ? M(t) : qn(t);
}
function Bt(t) {
  A.forEach((e) => {
    t && e === t || M(e);
  });
}
function Nn(t) {
  if (A.size === 0) return;
  const e = t.target;
  e && A.forEach((n) => {
    e.closest(Dt) !== n.root && M(n);
  });
}
function In(t) {
  t.key === "Escape" && Bt();
}
function Rn() {
  vt || (document.addEventListener("click", Nn), document.addEventListener("keydown", In), vt = !0);
}
function $n(t, e) {
  if (!t.classList.contains("cdw-fab--whatsapp") || !(e instanceof HTMLAnchorElement)) return;
  const n = t.getAttribute("data-phone");
  if (!n) return;
  const o = n.replace(/\D+/g, "");
  if (!o) return;
  const r = t.getAttribute("data-message") || "", i = `https://wa.me/${o}`, a = r ? `${i}?text=${encodeURIComponent(r)}` : i;
  e.href = a, e.target = "_blank", e.rel = "noopener";
}
function Dn(t) {
  const e = yt.get(t);
  if (e) return e;
  const n = t.querySelector(".cdw-fab-main");
  if (!n)
    throw new Error("FAB sem .cdw-fab-main");
  const o = t.querySelector(".cdw-fab-actions"), r = {
    root: t,
    main: n,
    actions: o,
    open: t.classList.contains("is-open")
  };
  o && !o.id && (o.id = `cdw-fab-actions-${Math.random().toString(36).slice(2, 9)}`), o && n.setAttribute("aria-controls", o.id), n.setAttribute("aria-haspopup", o ? "true" : "false");
  const i = On(o);
  return X(r, r.open), i && (n.addEventListener("click", (a) => {
    a.preventDefault(), a.stopPropagation(), Bt(r), Hn(r);
  }), t.addEventListener("click", (a) => {
    const s = a.target;
    s && s.closest(".cdw-fab-action") && M(r);
  })), $n(t, n), yt.set(t, r), r;
}
function Bn(t) {
  t.matches(Dt) && (Rn(), Dn(t));
}
const C = /* @__PURE__ */ new Map();
let At = 0;
function zn() {
  return At += 1, `cdw-tab-${At}`;
}
function Fn(t) {
  return t.classList.contains("cdw-tabs--vertical") || t.classList.contains("cdw-tabs--left") || t.classList.contains("cdw-tabs--right") ? "vertical" : "horizontal";
}
function Pn(t, e) {
  return t.querySelector(`.cdw-tabs-panel[data-cdw-tab-panel="${e}"]`) || t.querySelector(`.cdw-tabs-panel#${e}`) || t.querySelector(`.cdw-tabs-panel[data-tab="${e}"]`);
}
function Wn(t) {
  const e = t.querySelector(".cdw-tabs-nav");
  return e ? Array.from(e.querySelectorAll(".cdw-tabs-tab")).map((o, r) => {
    const a = o.getAttribute("data-cdw-tab") || o.getAttribute("data-tab") || o.getAttribute("href")?.replace("#", "") || o.id || zn();
    o.id || (o.id = `${a}-tab`);
    const s = Pn(t, a), c = o.classList.contains("is-disabled") || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled");
    return s && !s.id && (s.id = a), {
      id: a,
      button: o,
      panel: s || null,
      index: r,
      disabled: c
    };
  }) : [];
}
function Gn(t) {
  t.nav.setAttribute("role", "tablist"), t.nav.setAttribute(
    "aria-orientation",
    t.orientation === "vertical" ? "vertical" : "horizontal"
  ), t.tabs.forEach((e) => {
    const n = e.button;
    n.setAttribute("role", "tab"), n.setAttribute("aria-selected", "false"), n.setAttribute("tabindex", "-1"), n.tagName === "BUTTON" && !n.getAttribute("type") && n.setAttribute("type", "button"), e.panel && (n.setAttribute("aria-controls", e.panel.id), e.panel.setAttribute("role", "tabpanel"), e.panel.setAttribute("aria-labelledby", n.id), e.panel.setAttribute("tabindex", "0")), e.disabled ? (n.setAttribute("aria-disabled", "true"), n.classList.add("is-disabled"), n.tagName === "BUTTON" && n.setAttribute("disabled", "true")) : (n.removeAttribute("aria-disabled"), n.removeAttribute("disabled"));
  });
}
function L(t, e, n = !0) {
  const o = t.tabs.find((r) => r.id === e && !r.disabled);
  if (o && t.activeId !== o.id && (t.tabs.forEach((r) => {
    const i = r.id === o.id;
    r.button.classList.toggle("is-active", i), r.button.setAttribute("aria-selected", i ? "true" : "false"), r.button.setAttribute("tabindex", i ? "0" : "-1"), r.panel && (r.panel.classList.toggle("is-active", i), r.panel.hidden = !i, i && r.panel.hasAttribute("data-loading") && r.panel.removeAttribute("data-loading"));
  }), t.activeId = o.id, n && t.container.dispatchEvent(
    new CustomEvent("cdw:tab:change", {
      detail: {
        id: o.id,
        index: o.index,
        tab: o.button,
        panel: o.panel
      }
    })
  ), typeof window < "u" && o.panel?.id)) {
    const r = `#${o.panel.id}`;
    window.location.hash !== r && history.replaceState(null, "", r);
  }
}
function Un(t) {
  const e = window.location.hash?.replace("#", "");
  if (!e) return !1;
  const n = t.tabs.find(
    (o) => o.id === e || o.panel?.id === e
  );
  return n && !n.disabled ? (L(t, n.id, !1), !0) : !1;
}
function Kn(t) {
  return t.tabs.filter((e) => !e.disabled);
}
function Xn(t, e) {
  const n = e.target;
  if (!n) return;
  const o = n.closest(".cdw-tabs-tab");
  if (!o) return;
  const r = t.tabs.find((i) => i.button === o);
  !r || r.disabled || (e.preventDefault(), L(t, r.id), r.button.focus());
}
function Yn(t, e) {
  const n = e.target;
  if (!n) return;
  const o = n.closest(".cdw-tabs-tab");
  if (!o) return;
  const r = Kn(t).map((s) => s.button), i = r.indexOf(o);
  if (i === -1) return;
  const a = (s) => {
    const c = (i + s + r.length) % r.length;
    r[c].focus();
  };
  switch (e.key) {
    case "ArrowRight":
      t.orientation === "horizontal" && (e.preventDefault(), a(1));
      break;
    case "ArrowLeft":
      t.orientation === "horizontal" && (e.preventDefault(), a(-1));
      break;
    case "ArrowDown":
      t.orientation === "vertical" && (e.preventDefault(), a(1));
      break;
    case "ArrowUp":
      t.orientation === "vertical" && (e.preventDefault(), a(-1));
      break;
    case "Home":
      e.preventDefault(), r[0]?.focus();
      break;
    case "End":
      e.preventDefault(), r[r.length - 1]?.focus();
      break;
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault();
      const s = o.getAttribute("data-cdw-tab") || o.getAttribute("data-tab");
      s && L(t, s);
      break;
  }
}
function zt(t) {
  const e = t.querySelector(".cdw-tabs-nav");
  if (!e) return;
  const n = Wn(t), o = Fn(t), r = {
    container: t,
    nav: e,
    tabs: n,
    activeId: "",
    orientation: o,
    clickHandler: (a) => Xn(r, a),
    keyHandler: (a) => Yn(r, a)
  };
  if (Gn(r), e.addEventListener("click", r.clickHandler), e.addEventListener("keydown", r.keyHandler), !(typeof window < "u" ? Un(r) : !1)) {
    const a = n.find((s) => s.button.classList.contains("is-active")) || n.find((s) => s.button.getAttribute("aria-selected") === "true") || n.find((s) => !s.disabled);
    a && L(r, a.id, !1);
  }
  C.set(t, r);
}
function Vn(t) {
  const e = C.get(t);
  e && (e.nav.removeEventListener("click", e.clickHandler), e.nav.removeEventListener("keydown", e.keyHandler), e.tabs.forEach((n) => {
    n.button.removeAttribute("role"), n.button.removeAttribute("aria-selected"), n.button.removeAttribute("aria-controls"), n.button.removeAttribute("tabindex"), n.panel && (n.panel.removeAttribute("role"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("tabindex"), n.panel.hidden = !1);
  }), C.delete(t));
}
function jn(t) {
  zt(t);
}
const Zn = {
  init(t) {
    Array.from(
      (t ?? document).querySelectorAll("[data-cdw-tabs]")
    ).forEach((n) => zt(n));
  },
  open(t) {
    for (const [, e] of C) {
      const n = e.tabs.find(
        (o) => o.id === t || o.panel?.id === t
      );
      if (n)
        return L(e, n.id), !0;
    }
    return !1;
  },
  destroy(t) {
    Array.from(
      (t ?? document).querySelectorAll("[data-cdw-tabs]")
    ).forEach((n) => Vn(n));
  }
};
typeof window < "u" && (window.CDW = window.CDW || {}, window.CDW.Tabs = Zn);
const Ft = "data-cdw-fw-initialized", Jn = {
  childList: !0,
  subtree: !0
}, Qn = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: se
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: fe
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: Ee
  },
  {
    name: "login",
    selector: "[data-cdw-login]",
    bind: xe
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: Ie
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: We
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: en
  },
  {
    name: "form",
    selector: ".cdw-form",
    bind: wn
  },
  {
    name: "table",
    selector: ".cdw-table",
    bind: sn
  },
  {
    name: "tooltip",
    selector: "[data-cdw-tooltip]",
    bind: Mn
  },
  {
    name: "fab",
    selector: ".cdw-fab",
    bind: Bn
  },
  {
    name: "tabs",
    selector: "[data-cdw-tabs]",
    bind: jn
  }
];
function tr(t) {
  return t ?? document;
}
function Pt(t) {
  const e = t.getAttribute(Ft);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function er(t, e) {
  const n = Pt(t);
  n.has(e) || (n.add(e), t.setAttribute(Ft, Array.from(n).join(" ")));
}
function nr(t, e) {
  return !Pt(t).has(e);
}
function rr(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function Wt(t) {
  const e = tr(t);
  for (const n of Qn) {
    const o = rr(e, n.selector);
    for (const r of o)
      if (nr(r, n.name))
        try {
          n.bind(r), er(r, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function or() {
  if (typeof MutationObserver > "u") return;
  const t = document.body;
  if (!t) return;
  new MutationObserver((n) => {
    for (const o of n)
      o.addedNodes.forEach((r) => {
        r instanceof HTMLElement && Wt(r);
      });
  }).observe(t, Jn);
}
function Et() {
  Wt(document), or();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => Et(), { once: !0 }) : Et());
const ir = "0.1.0";
export {
  ir as CDW_FW_VERSION
};
