const Pe = ".cdw-accordion-item", B = ".cdw-accordion-trigger", We = ".cdw-accordion-panel", _ = /* @__PURE__ */ new WeakMap();
let X = 0;
function Y(e) {
  return X += 1, `${e}-${X}`;
}
function V(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function Ge(e, t) {
  return e === "multiple" ? "multiple" : t;
}
function Ue(e, t) {
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
function Ee(e) {
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
function Ke(e, t) {
  const n = Ge(e.getAttribute("data-mode"), "single"), o = V(
    e.getAttribute("data-collapsible"),
    !1
  ), r = V(e.getAttribute("data-animate"), !0), i = Ue(e.getAttribute("data-icon"), "chevron"), s = Ee(
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
function Xe(e, t) {
  return e.getAttribute("data-cdw-accordion-item") || e.id || String(t);
}
function Ye(e, t) {
  if (typeof t == "number")
    return e.index === t;
  if (t.startsWith("id:")) {
    const n = t.slice(3);
    return e.key === n || e.item.id === n;
  }
  return e.key === t;
}
function F(e, t, n) {
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
function z(e, t) {
  e.trigger.setAttribute("aria-expanded", t ? "true" : "false"), e.panel.setAttribute("aria-hidden", t ? "false" : "true");
}
function ve(e, t, n) {
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
function Ae(e, t) {
  t.item.classList.contains("is-open") && (t.item.classList.remove("is-open"), z(t, !1), F(t.panel, !1, e.options.animate), ve(e.container, "cdw:accordion:close", t));
}
function Ve(e, t) {
  t.disabled || t.item.classList.contains("is-open") || (e.options.mode === "single" && e.items.forEach((n) => {
    n !== t && Ae(e, n);
  }), t.item.classList.add("is-open"), z(t, !0), F(t.panel, !0, e.options.animate), ve(e.container, "cdw:accordion:open", t));
}
function Le(e, t) {
  if (t.disabled) return;
  if (t.item.classList.contains("is-open")) {
    if (e.options.mode === "single" && !e.options.collapsible)
      return;
    Ae(e, t);
    return;
  }
  Ve(e, t);
}
function je(e) {
  return Array.from(e.querySelectorAll(Pe)).map((n, o) => {
    const r = n.querySelector(B), i = n.querySelector(We);
    if (!r || !i) return null;
    r.id || (r.id = Y("cdw-accordion-trigger")), i.id || (i.id = Y("cdw-accordion-panel")), r.setAttribute("aria-controls", i.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", r.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: i,
      index: o,
      key: Xe(n, o),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function Ze(e) {
  const t = Ee(e.options.defaultOpen), n = t.length > 0;
  let o = 0;
  e.items.forEach((r) => {
    const i = n ? t.some((a) => Ye(r, a)) : r.item.classList.contains("is-open");
    e.options.mode === "single" && o > 0 && i && r.item.classList.remove("is-open");
    const s = i && !r.disabled;
    s ? (r.item.classList.add("is-open"), o += 1) : r.item.classList.remove("is-open"), z(r, s), F(r.panel, s, e.options.animate);
  });
}
function Je(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(B);
  if (!o || !e.triggerMap.has(o) || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled"))
    return;
  const r = e.triggerMap.get(o);
  r && Le(e, r);
}
function Qe(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(B);
  if (!o || !e.triggerMap.has(o)) return;
  const r = e.items.filter((a) => !a.disabled).map((a) => a.trigger), i = r.indexOf(o);
  if (i === -1) return;
  const s = (a) => {
    const l = r[a];
    l && l.focus();
  };
  switch (t.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      t.preventDefault(), Le(e, e.triggerMap.get(o));
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
function et(e) {
  e.options.animate && e.items.forEach((t) => {
    t.item.classList.contains("is-open") && (t.panel.style.maxHeight = `${t.panel.scrollHeight}px`);
  });
}
function tt(e, t) {
  _.has(e) && nt(e);
  const n = Ke(e);
  e.setAttribute("data-icon", n.icon), e.setAttribute("data-animate", n.animate ? "true" : "false");
  const o = je(e), r = /* @__PURE__ */ new Map();
  o.forEach((s) => r.set(s.trigger, s));
  const i = {
    container: e,
    options: n,
    items: o,
    triggerMap: r,
    clickHandler: (s) => Je(i, s),
    keyHandler: (s) => Qe(i, s),
    resizeHandler: () => et(i)
  };
  e.addEventListener("click", i.clickHandler), e.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), Ze(i), _.set(e, i);
}
function nt(e) {
  const t = _.get(e);
  t && (e.removeEventListener("click", t.clickHandler), e.removeEventListener("keydown", t.keyHandler), window.removeEventListener("resize", t.resizeHandler), t.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), _.delete(e));
}
function rt(e) {
  tt(e);
}
const ot = "[data-cdw-alert-close]", it = "data-autoclose";
function st(e) {
  if (!e) return null;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : null;
}
function j(e) {
  e.classList.contains("is-hiding") || (e.classList.add("is-hiding"), window.setTimeout(() => {
    e.remove();
  }, 200));
}
function at(e) {
  const t = e.querySelector(ot);
  t && t.addEventListener("click", () => j(e));
  const n = st(e.getAttribute(it));
  n && window.setTimeout(() => j(e), n);
}
function ct(e) {
  at(e);
}
const lt = "[data-cdw-gallery]", Se = "[data-cdw-gallery-item], .cdw-gallery__item", xe = ".cdw-gallery__media", dt = ".cdw-gallery__label", ut = "[data-cdw-gallery-product]";
let g = null;
function ft(e) {
  return e ? Array.from(e.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function pt() {
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
    keyHandler: (a) => {
      s.root.classList.contains("is-open") && (a.key === "Escape" && q(), s.controlsEnabled && a.key === "ArrowLeft" && y(s.index - 1), s.controlsEnabled && a.key === "ArrowRight" && y(s.index + 1));
    }
  };
  return e.addEventListener("click", (a) => {
    const l = a.target;
    if (l) {
      if (l.closest("[data-cdw-gallery-close]")) {
        q();
        return;
      }
      if (l.closest("[data-cdw-gallery-prev]")) {
        y(s.index - 1);
        return;
      }
      l.closest("[data-cdw-gallery-next]") && y(s.index + 1);
    }
  }), n.addEventListener("click", () => {
    const a = Date.now();
    a - s.lastTap < 280 && s.root.classList.toggle("is-zoomed"), s.lastTap = a;
  }), i.forEach((a) => {
    a.addEventListener("click", () => q());
  }), document.addEventListener("keydown", s.keyHandler), g = s, s;
}
function mt(e, t) {
  e.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), t === "immersive" ? e.classList.add("cdw-gallery-focus--immersive") : e.classList.add("cdw-gallery-focus--clean");
}
function q() {
  g && (g.root.classList.remove("is-open", "is-zoomed"), g.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function y(e) {
  if (!g) return;
  const t = g, n = t.items.length;
  if (!n) return;
  const o = (e + n) % n, r = t.items[o], i = r.querySelector(xe), s = r.querySelector(dt)?.textContent?.trim() ?? "Image", a = ft(i);
  t.media.className = `cdw-gallery-focus__media ${a}`, t.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${s}</span>`, t.index = o;
}
function gt(e, t, n) {
  const o = pt(), r = Array.from(e.querySelectorAll(Se));
  o.items = r, o.controlsEnabled = n && r.length > 1, o.prev.style.display = o.controlsEnabled ? "block" : "none", o.next.style.display = o.controlsEnabled ? "block" : "none", mt(o.root, e.getAttribute("data-cdw-gallery-focus")), o.root.classList.add("is-open"), o.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const i = Math.max(0, r.indexOf(t));
  y(i);
}
function bt(e, t) {
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
function x(e, t, n, o) {
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
function ht(e) {
  const t = e.querySelector(".cdw-gallery__product");
  if (!t) return;
  const n = t.querySelector(".cdw-gallery__product-main"), o = n?.querySelector(".cdw-gallery__media"), r = n?.querySelector(".cdw-gallery__label"), i = n?.querySelector(".cdw-gallery__media img"), s = t.querySelector(".cdw-gallery__product-info"), a = s?.querySelector(".cdw-gallery__product-info-title"), l = s?.querySelector(".cdw-gallery__product-info-desc"), c = s?.querySelector(".cdw-gallery__product-info-meta"), d = Array.from(
    t.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !o || !d.length) return;
  const u = (f) => {
    d.forEach((w) => w.classList.remove("is-active")), f.classList.add("is-active");
    const m = f.getAttribute("data-label") ?? "Product", C = f.getAttribute("data-title") ?? m, L = f.getAttribute("data-desc") ?? "", K = f.getAttribute("data-meta") ?? "", Fe = f.getAttribute("data-aspect") ?? "cdw-gallery__media--square", M = f.getAttribute("data-src"), ze = f.getAttribute("data-alt") ?? m;
    o.className = `cdw-gallery__media ${Fe}`;
    const O = () => {
      r && (r.textContent = m), a && (a.textContent = C), l && (l.textContent = L), c && (c.innerHTML = K ? K.split("|").map((w) => `<span>${w.trim()}</span>`).join("") : ""), s && s.classList.remove("is-loading");
    };
    if (s && s.classList.add("is-loading"), i && M) {
      const w = new URL(M, window.location.href).href;
      if (i.src === w) {
        x(o, i, O);
        return;
      }
      x(o, i, O, !0), i.src = M, i.alt = ze;
    } else
      x(o, i ?? null, O);
  };
  d.forEach((f) => {
    f.addEventListener("click", (m) => {
      m.target instanceof HTMLImageElement && u(f);
    });
  });
  const p = d.find((f) => f.classList.contains("is-active")) ?? d[0];
  u(p);
}
function wt(e) {
  if (!e.matches(lt)) return;
  if (e.matches(ut)) {
    ht(e);
    return;
  }
  const t = e.querySelector(".cdw-gallery__list");
  bt(e, t), e.addEventListener("click", (n) => {
    const o = n.target;
    if (!o) return;
    const r = o.closest(Se);
    if (!r) return;
    const i = r.querySelector(xe), s = i?.querySelector("img") ?? null;
    i && x(i, s);
    const a = e.getAttribute("data-cdw-gallery-controls") === "true";
    gt(e, r, a);
  });
}
const yt = {
  default: "Conexão criptografada. ERP, WMS e SaaS sob controle CDW-FW.",
  loading: "Validação em andamento...",
  error: "Ops! Usuário ou senha não conferem. Tente novamente."
};
function h(e, t) {
  e && (e.textContent = yt[t], e.setAttribute("data-state", t));
}
function N(e, t) {
  e.forEach((n) => {
    t ? n.removeAttribute("disabled") : n.setAttribute("disabled", "true");
  });
}
function Et(e) {
  Array.from(e.querySelectorAll("[data-cdw-login-toggle]")).forEach((n) => {
    const o = n.getAttribute("data-cdw-login-toggle"), r = o ? e.querySelector(`[data-cdw-login-input="${o}"]`) : null;
    r && n.addEventListener("click", () => {
      const i = r.type === "password";
      r.type = i ? "text" : "password", n.textContent = i ? "Ocultar" : "Mostrar", n.setAttribute("aria-pressed", String(!i)), r.focus();
    });
  });
}
function vt(e) {
  if (!(e instanceof HTMLFormElement)) return;
  const t = e, n = t.querySelector("[data-cdw-login-feedback]"), o = t.querySelector("[data-cdw-login-submit]"), r = t.querySelector("[data-cdw-login-google]"), i = Array.from(t.querySelectorAll("input"));
  let s = null;
  Et(t), h(n, "default");
  const a = () => {
    s && (window.clearTimeout(s), s = null), t.classList.remove("is-error", "is-loading"), o?.classList.remove("is-loading"), N(i, !0), o?.hasAttribute("disabled") && o.removeAttribute("disabled"), h(n, "default");
  };
  i.forEach((l) => {
    l.addEventListener("input", a);
  }), t.addEventListener("submit", (l) => {
    l.preventDefault(), !t.classList.contains("is-loading") && (t.classList.remove("is-error"), t.classList.add("is-loading"), o?.classList.add("is-loading"), o?.setAttribute("disabled", "true"), N(i, !1), h(n, "loading"), s = window.setTimeout(() => {
      t.classList.remove("is-loading"), t.classList.add("is-error"), o?.classList.remove("is-loading"), N(i, !0), o?.removeAttribute("disabled"), h(n, "error"), s = null;
    }, 1200));
  }), r?.addEventListener("click", () => {
    h(n, "loading"), t.classList.add("is-loading"), o?.classList.add("is-loading"), s = window.setTimeout(() => {
      h(n, "default"), t.classList.remove("is-loading"), o?.classList.remove("is-loading"), s = null;
    }, 900);
  });
}
const At = "[data-cdw-modal]", Lt = "[data-cdw-modal-open]", St = "[data-cdw-modal-close]", _e = "cdw-modal-open", b = [], Z = /* @__PURE__ */ new WeakMap();
let J = !1;
function xt(e) {
  const t = e.replace(/^#/, "");
  return document.getElementById(t);
}
function _t(e) {
  return e ? e.startsWith("#") ? xt(e) : document.querySelector(e) : null;
}
function Te(e) {
  return e.classList.contains("is-open");
}
function $(e) {
  if (!Te(e.root)) return;
  e.root.classList.remove("is-open"), e.root.setAttribute("aria-hidden", "true");
  const t = b.findIndex((n) => n.root === e.root);
  t >= 0 && b.splice(t, 1), b.length === 0 && document.body.classList.remove(_e), e.lastActive?.focus();
}
function Tt(e) {
  Te(e.root) || (e.lastActive = document.activeElement, e.root.classList.add("is-open"), e.root.setAttribute("aria-hidden", "false"), b.find((t) => t.root === e.root) || b.push(e), document.body.classList.add(_e), e.dialog.focus());
}
function ke(e) {
  const t = Z.get(e);
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
      if (s.closest(St)) {
        $(r);
        return;
      }
      o && s.classList.contains("cdw-modal__backdrop") && $(r);
    }
  }), Z.set(e, r), r;
}
function kt(e) {
  const t = e.target;
  if (!t) return;
  const n = t.closest(Lt);
  if (!n) return;
  const o = n.getAttribute("data-cdw-modal-open"), r = _t(o);
  if (!r) return;
  e.preventDefault();
  const i = ke(r);
  Tt(i);
}
function Ct(e) {
  if (e.key !== "Escape") return;
  const t = b[b.length - 1];
  t && $(t);
}
function Mt() {
  J || (document.addEventListener("click", kt), document.addEventListener("keydown", Ct), J = !0);
}
function Ot(e) {
  e.matches(At) && (Mt(), ke(e));
}
const qt = ".cdw-navbar-panel", Q = "[data-cdw-navbar-toggle]", ee = "[data-cdw-navbar-close]", te = "[data-cdw-navbar-sub]", ne = /* @__PURE__ */ new WeakMap();
let re = !1;
function Nt() {
  if (re || typeof window > "u") return;
  const e = window.matchMedia?.("(pointer: coarse)").matches, t = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (e || t || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), re = !0);
}
function Ht(e, t) {
  if (e.id) return e.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return e.id = n, t.setAttribute("data-cdw-navbar-panel", n), n;
}
function Ce(e, t) {
  e && e.setAttribute("aria-expanded", t ? "true" : "false");
}
function Rt(e) {
  e.container.classList.add("is-open"), Ce(e.toggle, !0);
}
function D(e) {
  e.container.classList.remove("is-open"), Ce(e.toggle, !1);
}
function It(e) {
  e.container.classList.contains("is-open") ? D(e) : Rt(e);
}
function $t(e) {
  const t = e.closest(".cdw-navbar-item");
  if (!t) return;
  const n = t.classList.toggle("is-open");
  e.setAttribute("aria-expanded", n ? "true" : "false");
}
function Dt(e) {
  if (ne.has(e)) return;
  Nt();
  const t = e.querySelector(qt), n = e.querySelector(Q), o = e.querySelector(".cdw-navbar-overlay"), r = Array.from(e.querySelectorAll(ee)), i = Array.from(e.querySelectorAll(te));
  if (t) {
    const a = Ht(t, e);
    n && (n.setAttribute("aria-controls", a), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const s = {
    container: e,
    panel: t,
    toggle: n,
    overlay: o,
    closeButtons: r,
    subToggles: i,
    keyHandler: (a) => {
      a.key === "Escape" && D(s);
    },
    clickHandler: (a) => {
      const l = a.target;
      if (!(l instanceof Element)) return;
      if (l.closest(Q)) {
        It(s);
        return;
      }
      if (l.closest(ee) || l.closest(".cdw-navbar-overlay")) {
        D(s);
        return;
      }
      const d = l.closest(te);
      d && (a.preventDefault(), $t(d));
    }
  };
  e.addEventListener("click", s.clickHandler), e.addEventListener("keydown", s.keyHandler), ne.set(e, s);
}
function Bt(e) {
  Dt(e);
}
const Ft = ".cdw-stage-track", zt = ".cdw-stage-slide", oe = "[data-cdw-stage-prev]", ie = "[data-cdw-stage-next]", se = "[data-cdw-stage-go]", Pt = "[data-cdw-stage-counter]", Wt = "[data-cdw-stage-progress]", ae = /* @__PURE__ */ new WeakMap();
function S(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function ce(e, t) {
  if (!e) return t;
  const n = Number.parseInt(e, 10);
  return Number.isFinite(n) ? n : t;
}
function Gt(e) {
  const t = e.getAttribute("data-autoplay"), n = e.getAttribute("data-interval"), o = S(e.getAttribute("data-pause-on-hover"), !0), r = S(e.getAttribute("data-loop"), !0), i = S(e.getAttribute("data-keyboard"), !0), s = S(e.getAttribute("data-swipe"), !0), a = ce(e.getAttribute("data-start"), 0), l = e.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let c = !1, d = ce(n, 5200);
  if (t !== null) {
    c = t === "" || t === "true";
    const u = Number.parseInt(t, 10);
    Number.isFinite(u) && (c = !0, d = u);
  }
  return {
    autoplay: c,
    interval: d,
    pauseOnHover: o,
    loop: r,
    keyboard: i,
    swipe: s,
    startIndex: a,
    navMode: l
  };
}
function Ut(e) {
  const t = e.querySelector(Ft) || e, n = Array.from(t.querySelectorAll(zt));
  return { track: t, slides: n };
}
function Kt(e, t) {
  const n = e.slides.length;
  return n === 0 ? 0 : e.options.loop ? (t + n) % n : Math.max(0, Math.min(n - 1, t));
}
function Xt(e) {
  const t = e.slides.length;
  e.slides.forEach((n, o) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${o + 1} de ${t}`), n.setAttribute("aria-hidden", o === e.current ? "false" : "true");
  });
}
function Me(e) {
  const t = e.slides.length;
  if (e.navButtons.forEach((n, o) => {
    o === e.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), e.counterEl && (e.counterEl.textContent = `${e.current + 1}/${t}`), e.progressEl) {
    const n = t > 0 ? (e.current + 1) / t * 100 : 0;
    e.progressEl.style.width = `${n}%`;
  }
}
function A(e, t) {
  const n = e.slides.length;
  if (n === 0) return;
  const o = Kt(e, t), r = e.options.loop ? (o - 1 + n) % n : o - 1, i = e.options.loop ? (o + 1) % n : o + 1;
  e.slides.forEach((s, a) => {
    s.classList.toggle("is-active", a === o), s.classList.toggle("is-prev", r >= 0 && a === r), s.classList.toggle("is-next", i < n && a === i);
  }), e.current = o, Xt(e), Me(e);
}
function le(e) {
  !e.options.autoplay || e.slides.length <= 1 || (e.timerId && window.clearInterval(e.timerId), e.timerId = window.setInterval(() => {
    A(e, e.current + 1);
  }, e.options.interval));
}
function Yt(e) {
  e.timerId && (window.clearInterval(e.timerId), e.timerId = null);
}
function H(e) {
  A(e, e.current - 1);
}
function R(e) {
  A(e, e.current + 1);
}
function I(e, t) {
  A(e, t);
}
function Vt(e) {
  e.options.pauseOnHover && (e.container.addEventListener("mouseenter", e.enterHandler), e.container.addEventListener("mouseleave", e.leaveHandler), e.container.addEventListener("focusin", e.enterHandler), e.container.addEventListener("focusout", e.leaveHandler)), e.container.addEventListener("click", e.clickHandler), e.options.keyboard && (e.container.setAttribute("tabindex", "0"), e.container.addEventListener("keydown", e.keyHandler)), e.options.swipe && (e.container.addEventListener("touchstart", e.touchStartHandler, { passive: !0 }), e.container.addEventListener("touchend", e.touchEndHandler));
}
function jt(e) {
  if (ae.has(e)) return;
  const t = Gt(e), { track: n, slides: o } = Ut(e), r = Array.from(e.querySelectorAll(se)), i = Array.from(e.querySelectorAll(oe)), s = Array.from(e.querySelectorAll(ie)), a = e.querySelector(Pt), l = e.querySelector(Wt), c = {
    container: e,
    track: n,
    slides: o,
    navButtons: r,
    prevButtons: i,
    nextButtons: s,
    counterEl: a,
    progressEl: l,
    options: t,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (d) => {
      d.key === "ArrowLeft" ? (d.preventDefault(), H(c)) : d.key === "ArrowRight" ? (d.preventDefault(), R(c)) : d.key === "Home" ? (d.preventDefault(), I(c, 0)) : d.key === "End" && (d.preventDefault(), I(c, c.slides.length - 1));
    },
    clickHandler: (d) => {
      const u = d.target;
      if (!(u instanceof Element)) return;
      const p = u.closest(oe), f = u.closest(ie);
      if (p) {
        H(c);
        return;
      }
      if (f) {
        R(c);
        return;
      }
      const m = u.closest(se);
      if (m) {
        const C = m.getAttribute("data-cdw-stage-go"), L = Number.parseInt(C || "", 10);
        Number.isFinite(L) && I(c, L);
      }
    },
    enterHandler: () => {
      c.hoverCount += 1, Yt(c);
    },
    leaveHandler: () => {
      c.hoverCount = Math.max(0, c.hoverCount - 1), c.hoverCount === 0 && le(c);
    },
    touchStartHandler: (d) => {
      if (d.touches.length !== 1) return;
      const u = d.touches[0];
      c.touchActive = !0, c.touchStartX = u.clientX, c.touchStartY = u.clientY;
    },
    touchEndHandler: (d) => {
      if (!c.touchActive) return;
      c.touchActive = !1;
      const u = d.changedTouches[0], p = u.clientX - c.touchStartX, f = u.clientY - c.touchStartY;
      Math.abs(p) < 30 || Math.abs(p) < Math.abs(f) || (p > 0 ? H(c) : R(c));
    }
  };
  if (e.setAttribute("role", "region"), e.setAttribute("aria-roledescription", "stage"), o.length > 0 && e.setAttribute("aria-live", "polite"), A(c, t.startIndex), Vt(c), le(c), t.navMode === "auto" && r.length === 0 && o.length > 1) {
    const d = document.createElement("div");
    d.className = "cdw-stage-nav", o.forEach((u, p) => {
      const f = document.createElement("button");
      f.type = "button", f.className = "cdw-stage-indicator", f.setAttribute("data-cdw-stage-go", String(p)), f.setAttribute("aria-label", `Ir para o slide ${p + 1}`), d.appendChild(f), c.navButtons.push(f);
    }), e.appendChild(d), Me(c);
  }
  ae.set(e, c);
}
function Zt(e) {
  jt(e);
}
const Jt = ".cdw-table-header", Qt = ".cdw-table-row", Oe = ".cdw-table-cell";
function de(e) {
  return e.trim().toLowerCase();
}
function en(e) {
  const t = e.querySelector(Jt);
  return t ? Array.from(t.querySelectorAll(Oe)).map((o) => (o.getAttribute("data-label") ?? o.textContent ?? "").trim()).filter(Boolean) : [];
}
function tn(e, t) {
  if (t.length === 0) return;
  const n = Array.from(e.querySelectorAll(Oe));
  if (n.length === 0) return;
  if (!n.some((l) => {
    const c = l.getAttribute("data-label");
    return c !== null && c.trim() !== "";
  })) {
    n.forEach((l, c) => {
      const d = t[c];
      d && l.setAttribute("data-label", d);
    });
    return;
  }
  n.forEach((l, c) => {
    const d = l.getAttribute("data-label");
    (!d || d.trim() === "") && t[c] && l.setAttribute("data-label", t[c]);
  });
  const r = /* @__PURE__ */ new Map();
  n.forEach((l) => {
    const c = l.getAttribute("data-label");
    if (!c) return;
    const d = de(c);
    r.has(d) || r.set(d, l);
  });
  const i = [], s = /* @__PURE__ */ new Set();
  let a = !1;
  t.forEach((l, c) => {
    const d = de(l), u = r.get(d);
    if (u) {
      i.push(u), s.add(u), !a && n[c] !== u && (a = !0);
      return;
    }
    const p = document.createElement("div");
    p.className = "cdw-table-cell", p.setAttribute("data-label", l), p.setAttribute("aria-hidden", "true"), i.push(p), a = !0;
  }), n.forEach((l) => {
    s.has(l) || (i.push(l), !a && n[i.length - 1] !== l && (a = !0));
  }), a && e.replaceChildren(...i);
}
function nn(e) {
  const t = en(e);
  if (t.length === 0) return;
  Array.from(e.querySelectorAll(Qt)).forEach((o) => tn(o, t));
}
const rn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap();
function ue(e, t) {
  const n = new DataTransfer();
  t.forEach((o) => n.items.add(o)), e.files = n.files;
}
function sn(e) {
  return Array.from(e.querySelectorAll(".cdw-form-select-option"));
}
function P(e, t) {
  e.options.forEach((n) => n.classList.remove("is-active")), t && t.classList.add("is-active");
}
function W(e, t) {
  const n = t.getAttribute("data-value") || t.textContent || "", o = t.textContent || n;
  e.valueEl && (e.valueEl.textContent = o.trim()), e.trigger.setAttribute("data-value", n), P(e, t);
}
function E(e, t, n = !0) {
  e.root.classList.toggle("is-open", t), e.trigger.setAttribute("aria-expanded", t ? "true" : "false"), t && e.search ? e.search.focus() : n && e.trigger.focus();
}
function an(e, t) {
  const n = t.target;
  if (!(n instanceof HTMLElement)) return;
  const o = n.closest(".cdw-form-select-option");
  o && (W(e, o), E(e, !1));
}
function cn(e) {
  const t = e.root.classList.contains("is-open");
  E(e, !t);
}
function ln(e, t) {
  const n = t.trim().toLowerCase();
  e.options.forEach((o) => {
    const r = (o.textContent || "").trim().toLowerCase();
    o.style.display = r.includes(n) ? "" : "none";
  });
}
function dn(e, t) {
  const n = t.key, o = e.options.filter((i) => i.style.display !== "none");
  if (!o.length) return;
  const r = o.findIndex((i) => i.classList.contains("is-active"));
  if (n === "ArrowDown" || n === "ArrowUp") {
    t.preventDefault();
    const i = n === "ArrowDown" ? Math.min(o.length - 1, r + 1) : Math.max(0, r - 1);
    P(e, o[i] || o[0]);
    return;
  }
  if (n === "Enter") {
    t.preventDefault();
    const i = o[r] || o[0];
    i && W(e, i), E(e, !1);
    return;
  }
  n === "Escape" && (t.preventDefault(), E(e, !1));
}
function un(e) {
  const t = e.querySelector(".cdw-form-select-trigger"), n = e.querySelector(".cdw-form-select-panel");
  if (!t || !n) return;
  const o = {
    root: e,
    trigger: t,
    search: e.querySelector(".cdw-form-select-search"),
    options: sn(e),
    panel: n,
    valueEl: e.querySelector(".cdw-form-select-value")
  };
  if (o.options.length) {
    if (!o.valueEl) {
      const r = document.createElement("span");
      r.className = "cdw-form-select-value", t.prepend(r), o.valueEl = r;
    }
    t.setAttribute("aria-haspopup", "listbox"), t.setAttribute("aria-expanded", "false"), n.setAttribute("role", "listbox"), o.options.some((r) => r.classList.contains("is-active")) || (P(o, o.options[0]), W(o, o.options[0])), t.addEventListener("click", () => cn(o)), n.addEventListener("click", (r) => an(o, r)), e.addEventListener("keydown", (r) => dn(o, r)), o.search && o.search.addEventListener("input", (r) => {
      const i = r.target;
      ln(o, i.value);
    }), document.addEventListener("click", (r) => {
      e.contains(r.target) || E(o, !1, !1);
    }), rn.set(e, o);
  }
}
function fn(e) {
  const t = e.querySelector(".cdw-form-dropzone-input"), n = e.closest(".cdw-form-dropzone-wrap"), o = e.querySelector(".cdw-form-dropzone-list") || n?.querySelector(".cdw-form-dropzone-list") || null, r = { root: e, input: t, list: o, files: [] };
  if (!t) return;
  const i = () => {
    o && (o.innerHTML = "", r.files.length && r.files.forEach((s, a) => {
      const l = document.createElement("div");
      l.className = "cdw-form-dropzone-item", l.innerHTML = `<span>${s.name}</span><span>${Math.round(
        s.size / 1024
      )}kb</span><button class="cdw-form-dropzone-remove" type="button" data-index="${a}" aria-label="Remover">Remover</button>`, o.appendChild(l);
    }));
  };
  t.addEventListener("change", () => {
    r.files = Array.from(t.files || []), i();
  }), o?.addEventListener("click", (s) => {
    const a = s.target;
    if (!a) return;
    const l = a.closest(".cdw-form-dropzone-remove");
    if (!l) return;
    const c = Number(l.getAttribute("data-index"));
    Number.isFinite(c) && (r.files.splice(c, 1), ue(t, r.files), i());
  }), e.addEventListener("dragenter", (s) => {
    s.preventDefault(), e.classList.add("is-dragging");
  }), e.addEventListener("dragover", (s) => {
    s.preventDefault(), e.classList.add("is-dragging");
  }), e.addEventListener("dragleave", () => {
    e.classList.remove("is-dragging");
  }), e.addEventListener("drop", (s) => {
    s.preventDefault(), e.classList.remove("is-dragging");
    const a = s.dataTransfer?.files;
    a && t && (r.files = r.files.concat(Array.from(a)), ue(t, r.files), i());
  }), on.set(e, r);
}
function pn(e) {
  Array.from(e.querySelectorAll(".cdw-form-select-advanced")).forEach((i) => un(i)), Array.from(e.querySelectorAll(".cdw-form-dropzone")).forEach((i) => fn(i)), Array.from(e.querySelectorAll(".cdw-form-filebox")).forEach((i) => {
    const s = i.querySelector(".cdw-form-file-input"), a = i.querySelector(".cdw-form-file-list"), l = i.querySelector(".cdw-form-file-button");
    if (!s || !a || !l) return;
    const c = () => {
      a.innerHTML = "";
      const d = s.files && s.files[0] ? s.files[0] : null;
      if (!d) return;
      const u = document.createElement("div");
      u.className = "cdw-form-file-item", u.innerHTML = `<span>${d.name}</span><button class="cdw-form-file-remove" type="button" aria-label="Remover">Remover</button>`, a.appendChild(u);
    };
    l.addEventListener("click", () => s.click()), s.addEventListener("change", () => c()), a.addEventListener("click", (d) => {
      const u = d.target;
      !u || !u.closest(".cdw-form-file-remove") || (s.value = "", c());
    });
  }), Array.from(
    e.querySelectorAll("textarea[data-cdw-form-counter]")
  ).forEach((i) => {
    const s = i.getAttribute("maxlength") || i.getAttribute("data-max"), a = s ? Number(s) : 240;
    let l = i.nextElementSibling;
    (!l || !l.classList.contains("cdw-form-counter")) && (l = document.createElement("div"), l.className = "cdw-form-counter", i.insertAdjacentElement("afterend", l));
    const c = () => {
      const d = i.value.length;
      l.textContent = `${d}/${Number.isFinite(a) ? a : d}`;
    };
    i.addEventListener("input", c), c();
  });
}
const mn = "[data-cdw-tooltip]", fe = /* @__PURE__ */ new WeakMap();
let pe = 0, me = !1;
const G = /* @__PURE__ */ new Set();
function gn() {
  return pe += 1, `cdw-tooltip-${pe}`;
}
function bn(e) {
  return e === "click" || e === "focus" || e === "hover-focus" ? e : "hover";
}
function hn(e) {
  return e === "top" || e === "bottom" || e === "left" || e === "right" ? e : "auto";
}
function wn(e) {
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
function yn(e) {
  if (!e) return 120;
  const t = Number(e);
  return Number.isNaN(t) ? 120 : Math.max(0, t);
}
function En(e) {
  const t = e.getAttribute("data-tooltip-accent");
  if (t) return t.trim();
  const n = Array.from(e.classList).find(
    (o) => o.startsWith("cdw-fw-accent-")
  );
  return n ? n.replace("cdw-fw-accent-", "") : null;
}
function vn(e) {
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
function An(e, t) {
  const n = document.createElement("div"), o = gn();
  n.id = o, n.className = `cdw-tooltip cdw-tooltip--${t.model}`, n.setAttribute("role", "tooltip"), n.setAttribute("data-placement", "top");
  const r = t.accent;
  r && n.classList.add(`cdw-fw-accent-${r}`);
  const i = document.createElement("div");
  i.className = "cdw-tooltip__content", n.appendChild(i);
  const s = document.createElement("span");
  return s.className = "cdw-tooltip__arrow", s.setAttribute("aria-hidden", "true"), n.appendChild(s), e.setAttribute("aria-describedby", o), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n), n;
}
function Ln(e, t, n) {
  const o = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = 10, s = o.top, a = window.innerHeight - o.bottom, l = o.left, c = window.innerWidth - o.right, d = (u) => {
    switch (u) {
      case "top":
        return s >= r.height + i;
      case "bottom":
        return a >= r.height + i;
      case "left":
        return l >= r.width + i;
      case "right":
        return c >= r.width + i;
      default:
        return !1;
    }
  };
  if (n !== "auto") {
    if (d(n)) return n;
    const u = n === "top" ? "bottom" : n === "bottom" ? "top" : n === "left" ? "right" : "left";
    if (d(u)) return u;
  }
  return a >= r.height + i ? "bottom" : s >= r.height + i ? "top" : c >= r.width + i ? "right" : l >= r.width + i ? "left" : "bottom";
}
function qe(e) {
  const { trigger: t, tooltip: n, options: o } = e, r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), s = 10, a = Ln(t, n, o.placement);
  let l = 0, c = 0;
  switch (a) {
    case "top":
      l = r.top - i.height - s, c = r.left + (r.width - i.width) / 2;
      break;
    case "bottom":
      l = r.bottom + s, c = r.left + (r.width - i.width) / 2;
      break;
    case "left":
      l = r.top + (r.height - i.height) / 2, c = r.left - i.width - s;
      break;
    case "right":
      l = r.top + (r.height - i.height) / 2, c = r.right + s;
      break;
  }
  const d = window.innerWidth - i.width - 8, u = window.innerHeight - i.height - 8;
  if (c = Math.min(Math.max(8, c), Math.max(8, d)), l = Math.min(Math.max(8, l), Math.max(8, u)), n.style.left = `${c}px`, n.style.top = `${l}px`, n.setAttribute("data-placement", a), a === "top" || a === "bottom") {
    const p = r.left + r.width / 2 - c, f = Math.min(Math.max(12, p), i.width - 12);
    n.style.setProperty("--cdw-tooltip-arrow-x", `${f}px`);
  } else {
    const p = r.top + r.height / 2 - l, f = Math.min(Math.max(12, p), i.height - 12);
    n.style.setProperty("--cdw-tooltip-arrow-y", `${f}px`);
  }
}
function Ne(e) {
  e.open || (e.open = !0, e.tooltip.classList.add("is-open"), e.tooltip.setAttribute("aria-hidden", "false"), e.tooltip.style.visibility = "hidden", qe(e), e.tooltip.style.visibility = "visible", G.add(e), e.boundReposition());
}
function T(e) {
  e.open && (e.open = !1, e.tooltip.classList.remove("is-open"), e.tooltip.setAttribute("aria-hidden", "true"), G.delete(e));
}
function He(e) {
  e.showTimer && window.clearTimeout(e.showTimer), e.hideTimer && window.clearTimeout(e.hideTimer), e.showTimer = void 0, e.hideTimer = void 0;
}
function ge(e) {
  He(e), e.showTimer = window.setTimeout(() => Ne(e), e.options.delay);
}
function be(e) {
  He(e), e.hideTimer = window.setTimeout(() => T(e), 90);
}
function Sn() {
  me || (document.addEventListener("keydown", (e) => {
    e.key === "Escape" && G.forEach((t) => T(t));
  }), me = !0);
}
function xn() {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}
function _n(e) {
  if (!e.matches(mn) || fe.has(e)) return;
  const t = e.getAttribute("data-cdw-tooltip"), n = {
    trigger: bn(e.getAttribute("data-tooltip-trigger")),
    placement: hn(e.getAttribute("data-tooltip-placement")),
    model: wn(e.getAttribute("data-tooltip-model")),
    delay: yn(e.getAttribute("data-tooltip-delay")),
    accent: En(e),
    title: e.getAttribute("data-tooltip-title"),
    text: e.getAttribute("data-tooltip-text") ?? t,
    meta: e.getAttribute("data-tooltip-meta"),
    icon: e.getAttribute("data-tooltip-icon")
  }, o = An(e, n), r = {
    trigger: e,
    tooltip: o,
    options: n,
    open: !1,
    boundReposition: () => qe(r)
  };
  vn(r);
  const i = n.trigger === "hover" ? "hover-focus" : n.trigger;
  if (i === "click" || i === "hover-focus" && xn()) {
    const a = (l) => {
      const c = l.target;
      c && (c === e || e.contains(c) || c === o || o.contains(c) || T(r));
    };
    r.boundOutside = a, e.addEventListener("click", (l) => {
      l.preventDefault(), r.open ? T(r) : Ne(r), r.boundOutside && document.addEventListener("click", r.boundOutside, { once: !0 });
    });
  } else
    e.addEventListener("mouseenter", () => ge(r)), e.addEventListener("mouseleave", () => be(r)), e.addEventListener("focus", () => ge(r)), e.addEventListener("blur", () => be(r));
  window.addEventListener("scroll", r.boundReposition, !0), window.addEventListener("resize", r.boundReposition), Sn(), fe.set(e, r);
}
const Re = ".cdw-fab", he = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new Set();
let we = !1;
function Tn(e) {
  return e ? e.children.length > 0 : !1;
}
function U(e, t) {
  e.main.setAttribute("aria-expanded", t ? "true" : "false"), e.actions && e.actions.setAttribute("aria-hidden", t ? "false" : "true");
}
function kn(e) {
  e.open || (e.open = !0, e.root.classList.add("is-open"), U(e, !0), v.add(e));
}
function k(e) {
  e.open && (e.open = !1, e.root.classList.remove("is-open"), U(e, !1), v.delete(e));
}
function Cn(e) {
  e.open ? k(e) : kn(e);
}
function Ie(e) {
  v.forEach((t) => {
    e && t === e || k(t);
  });
}
function Mn(e) {
  if (v.size === 0) return;
  const t = e.target;
  t && v.forEach((n) => {
    t.closest(Re) !== n.root && k(n);
  });
}
function On(e) {
  e.key === "Escape" && Ie();
}
function qn() {
  we || (document.addEventListener("click", Mn), document.addEventListener("keydown", On), we = !0);
}
function Nn(e, t) {
  if (!e.classList.contains("cdw-fab--whatsapp") || !(t instanceof HTMLAnchorElement)) return;
  const n = e.getAttribute("data-phone");
  if (!n) return;
  const o = n.replace(/\D+/g, "");
  if (!o) return;
  const r = e.getAttribute("data-message") || "", i = `https://wa.me/${o}`, s = r ? `${i}?text=${encodeURIComponent(r)}` : i;
  t.href = s, t.target = "_blank", t.rel = "noopener";
}
function Hn(e) {
  const t = he.get(e);
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
  const i = Tn(o);
  return U(r, r.open), i && (n.addEventListener("click", (s) => {
    s.preventDefault(), s.stopPropagation(), Ie(r), Cn(r);
  }), e.addEventListener("click", (s) => {
    const a = s.target;
    a && a.closest(".cdw-fab-action") && k(r);
  })), Nn(e, n), he.set(e, r), r;
}
function Rn(e) {
  e.matches(Re) && (qn(), Hn(e));
}
const $e = "data-cdw-fw-initialized", In = {
  childList: !0,
  subtree: !0
}, $n = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: rt
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: ct
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: wt
  },
  {
    name: "login",
    selector: "[data-cdw-login]",
    bind: vt
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: Ot
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: Bt
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: Zt
  },
  {
    name: "form",
    selector: ".cdw-form",
    bind: pn
  },
  {
    name: "table",
    selector: ".cdw-table",
    bind: nn
  },
  {
    name: "tooltip",
    selector: "[data-cdw-tooltip]",
    bind: _n
  },
  {
    name: "fab",
    selector: ".cdw-fab",
    bind: Rn
  }
];
function Dn(e) {
  return e ?? document;
}
function De(e) {
  const t = e.getAttribute($e);
  return t ? new Set(t.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function Bn(e, t) {
  const n = De(e);
  n.has(t) || (n.add(t), e.setAttribute($e, Array.from(n).join(" ")));
}
function Fn(e, t) {
  return !De(e).has(t);
}
function zn(e, t) {
  const n = Array.from(e.querySelectorAll(t));
  return e instanceof HTMLElement && e.matches(t) && n.unshift(e), n;
}
function Be(e) {
  const t = Dn(e);
  for (const n of $n) {
    const o = zn(t, n.selector);
    for (const r of o)
      if (Fn(r, n.name))
        try {
          n.bind(r), Bn(r, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function Pn() {
  if (typeof MutationObserver > "u") return;
  const e = document.body;
  if (!e) return;
  new MutationObserver((n) => {
    for (const o of n)
      o.addedNodes.forEach((r) => {
        r instanceof HTMLElement && Be(r);
      });
  }).observe(e, In);
}
function ye() {
  Be(document), Pn();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => ye(), { once: !0 }) : ye());
const Wn = "0.1.0";
export {
  Wn as CDW_FW_VERSION
};
