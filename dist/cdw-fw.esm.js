const J = ".cdw-accordion-item", y = ".cdw-accordion-trigger", Q = ".cdw-accordion-panel", m = /* @__PURE__ */ new WeakMap();
let T = 0;
function H(t) {
  return T += 1, `${t}-${T}`;
}
function k(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function tt(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function et(t, e) {
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
function G(t) {
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
function nt(t, e) {
  const n = tt(t.getAttribute("data-mode"), "single"), o = k(
    t.getAttribute("data-collapsible"),
    !1
  ), r = k(t.getAttribute("data-animate"), !0), i = et(t.getAttribute("data-icon"), "chevron"), s = G(
    t.getAttribute("data-default-open")
  );
  return {
    mode: n,
    collapsible: o,
    defaultOpen: s,
    animate: r,
    icon: i
  };
}
function rt(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function ot(t, e) {
  if (typeof e == "number")
    return t.index === e;
  if (e.startsWith("id:")) {
    const n = e.slice(3);
    return t.key === n || t.item.id === n;
  }
  return t.key === e;
}
function w(t, e, n) {
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
function L(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function U(t, e, n) {
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
function X(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), L(e, !1), w(e.panel, !1, t.options.animate), U(t.container, "cdw:accordion:close", e));
}
function it(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && X(t, n);
  }), e.item.classList.add("is-open"), L(e, !0), w(e.panel, !0, t.options.animate), U(t.container, "cdw:accordion:open", e));
}
function W(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    X(t, e);
    return;
  }
  it(t, e);
}
function st(t) {
  return Array.from(t.querySelectorAll(J)).map((n, o) => {
    const r = n.querySelector(y), i = n.querySelector(Q);
    if (!r || !i) return null;
    r.id || (r.id = H("cdw-accordion-trigger")), i.id || (i.id = H("cdw-accordion-panel")), r.setAttribute("aria-controls", i.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", r.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: i,
      index: o,
      key: rt(n, o),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function at(t) {
  const e = G(t.options.defaultOpen), n = e.length > 0;
  let o = 0;
  t.items.forEach((r) => {
    const i = n ? e.some((u) => ot(r, u)) : r.item.classList.contains("is-open");
    t.options.mode === "single" && o > 0 && i && r.item.classList.remove("is-open");
    const s = i && !r.disabled;
    s ? (r.item.classList.add("is-open"), o += 1) : r.item.classList.remove("is-open"), L(r, s), w(r.panel, s, t.options.animate);
  });
}
function ct(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(y);
  if (!o || !t.triggerMap.has(o) || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled"))
    return;
  const r = t.triggerMap.get(o);
  r && W(t, r);
}
function ut(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(y);
  if (!o || !t.triggerMap.has(o)) return;
  const r = t.items.filter((u) => !u.disabled).map((u) => u.trigger), i = r.indexOf(o);
  if (i === -1) return;
  const s = (u) => {
    const d = r[u];
    d && d.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), W(t, t.triggerMap.get(o));
      break;
    case "ArrowDown":
      e.preventDefault(), s((i + 1) % r.length);
      break;
    case "ArrowUp":
      e.preventDefault(), s((i - 1 + r.length) % r.length);
      break;
    case "Home":
      e.preventDefault(), s(0);
      break;
    case "End":
      e.preventDefault(), s(r.length - 1);
      break;
  }
}
function lt(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function dt(t, e) {
  m.has(t) && ft(t);
  const n = nt(t);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const o = st(t), r = /* @__PURE__ */ new Map();
  o.forEach((s) => r.set(s.trigger, s));
  const i = {
    container: t,
    options: n,
    items: o,
    triggerMap: r,
    clickHandler: (s) => ct(i, s),
    keyHandler: (s) => ut(i, s),
    resizeHandler: () => lt(i)
  };
  t.addEventListener("click", i.clickHandler), t.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), at(i), m.set(t, i);
}
function ft(t) {
  const e = m.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), m.delete(t));
}
function pt(t) {
  dt(t);
}
const gt = "[data-cdw-alert-close]", bt = "data-autoclose";
function mt(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function N(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function ht(t) {
  const e = t.querySelector(gt);
  e && e.addEventListener("click", () => N(t));
  const n = mt(t.getAttribute(bt));
  n && window.setTimeout(() => N(t), n);
}
function At(t) {
  ht(t);
}
const Et = ".cdw-navbar-panel", x = "[data-cdw-navbar-toggle]", I = "[data-cdw-navbar-close]", C = "[data-cdw-navbar-sub]", M = /* @__PURE__ */ new WeakMap();
let R = !1;
function vt() {
  if (R || typeof window > "u") return;
  const t = window.matchMedia?.("(pointer: coarse)").matches, e = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (t || e || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), R = !0);
}
function yt(t, e) {
  if (t.id) return t.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return t.id = n, e.setAttribute("data-cdw-navbar-panel", n), n;
}
function Y(t, e) {
  t && t.setAttribute("aria-expanded", e ? "true" : "false");
}
function wt(t) {
  t.container.classList.add("is-open"), Y(t.toggle, !0);
}
function v(t) {
  t.container.classList.remove("is-open"), Y(t.toggle, !1);
}
function Lt(t) {
  t.container.classList.contains("is-open") ? v(t) : wt(t);
}
function St(t) {
  const e = t.closest(".cdw-navbar-item");
  if (!e) return;
  const n = e.classList.toggle("is-open");
  t.setAttribute("aria-expanded", n ? "true" : "false");
}
function Ot(t) {
  if (M.has(t)) return;
  vt();
  const e = t.querySelector(Et), n = t.querySelector(x), o = t.querySelector(".cdw-navbar-overlay"), r = Array.from(t.querySelectorAll(I)), i = Array.from(t.querySelectorAll(C));
  if (e) {
    const u = yt(e, t);
    n && (n.setAttribute("aria-controls", u), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const s = {
    container: t,
    panel: e,
    toggle: n,
    overlay: o,
    closeButtons: r,
    subToggles: i,
    keyHandler: (u) => {
      u.key === "Escape" && v(s);
    },
    clickHandler: (u) => {
      const d = u.target;
      if (!(d instanceof Element)) return;
      if (d.closest(x)) {
        Lt(s);
        return;
      }
      if (d.closest(I) || d.closest(".cdw-navbar-overlay")) {
        v(s);
        return;
      }
      const c = d.closest(C);
      c && (u.preventDefault(), St(c));
    }
  };
  t.addEventListener("click", s.clickHandler), t.addEventListener("keydown", s.keyHandler), M.set(t, s);
}
function Tt(t) {
  Ot(t);
}
const Ht = ".cdw-stage-track", kt = ".cdw-stage-slide", _ = "[data-cdw-stage-prev]", $ = "[data-cdw-stage-next]", B = "[data-cdw-stage-go]", Nt = "[data-cdw-stage-counter]", xt = "[data-cdw-stage-progress]", D = /* @__PURE__ */ new WeakMap();
function b(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function q(t, e) {
  if (!t) return e;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : e;
}
function It(t) {
  const e = t.getAttribute("data-autoplay"), n = t.getAttribute("data-interval"), o = b(t.getAttribute("data-pause-on-hover"), !0), r = b(t.getAttribute("data-loop"), !0), i = b(t.getAttribute("data-keyboard"), !0), s = b(t.getAttribute("data-swipe"), !0), u = q(t.getAttribute("data-start"), 0), d = t.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let a = !1, c = q(n, 5200);
  if (e !== null) {
    a = e === "" || e === "true";
    const l = Number.parseInt(e, 10);
    Number.isFinite(l) && (a = !0, c = l);
  }
  return {
    autoplay: a,
    interval: c,
    pauseOnHover: o,
    loop: r,
    keyboard: i,
    swipe: s,
    startIndex: u,
    navMode: d
  };
}
function Ct(t) {
  const e = t.querySelector(Ht) || t, n = Array.from(e.querySelectorAll(kt));
  return { track: e, slides: n };
}
function Mt(t, e) {
  const n = t.slides.length;
  return n === 0 ? 0 : t.options.loop ? (e + n) % n : Math.max(0, Math.min(n - 1, e));
}
function Rt(t) {
  const e = t.slides.length;
  t.slides.forEach((n, o) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${o + 1} de ${e}`), n.setAttribute("aria-hidden", o === t.current ? "false" : "true");
  });
}
function F(t) {
  const e = t.slides.length;
  if (t.navButtons.forEach((n, o) => {
    o === t.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), t.counterEl && (t.counterEl.textContent = `${t.current + 1}/${e}`), t.progressEl) {
    const n = e > 0 ? (t.current + 1) / e * 100 : 0;
    t.progressEl.style.width = `${n}%`;
  }
}
function g(t, e) {
  const n = t.slides.length;
  if (n === 0) return;
  const o = Mt(t, e), r = t.options.loop ? (o - 1 + n) % n : o - 1, i = t.options.loop ? (o + 1) % n : o + 1;
  t.slides.forEach((s, u) => {
    s.classList.toggle("is-active", u === o), s.classList.toggle("is-prev", r >= 0 && u === r), s.classList.toggle("is-next", i < n && u === i);
  }), t.current = o, Rt(t), F(t);
}
function P(t) {
  !t.options.autoplay || t.slides.length <= 1 || (t.timerId && window.clearInterval(t.timerId), t.timerId = window.setInterval(() => {
    g(t, t.current + 1);
  }, t.options.interval));
}
function _t(t) {
  t.timerId && (window.clearInterval(t.timerId), t.timerId = null);
}
function h(t) {
  g(t, t.current - 1);
}
function A(t) {
  g(t, t.current + 1);
}
function E(t, e) {
  g(t, e);
}
function $t(t) {
  t.options.pauseOnHover && (t.container.addEventListener("mouseenter", t.enterHandler), t.container.addEventListener("mouseleave", t.leaveHandler), t.container.addEventListener("focusin", t.enterHandler), t.container.addEventListener("focusout", t.leaveHandler)), t.container.addEventListener("click", t.clickHandler), t.options.keyboard && (t.container.setAttribute("tabindex", "0"), t.container.addEventListener("keydown", t.keyHandler)), t.options.swipe && (t.container.addEventListener("touchstart", t.touchStartHandler, { passive: !0 }), t.container.addEventListener("touchend", t.touchEndHandler));
}
function Bt(t) {
  if (D.has(t)) return;
  const e = It(t), { track: n, slides: o } = Ct(t), r = Array.from(t.querySelectorAll(B)), i = Array.from(t.querySelectorAll(_)), s = Array.from(t.querySelectorAll($)), u = t.querySelector(Nt), d = t.querySelector(xt), a = {
    container: t,
    track: n,
    slides: o,
    navButtons: r,
    prevButtons: i,
    nextButtons: s,
    counterEl: u,
    progressEl: d,
    options: e,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (c) => {
      c.key === "ArrowLeft" ? (c.preventDefault(), h(a)) : c.key === "ArrowRight" ? (c.preventDefault(), A(a)) : c.key === "Home" ? (c.preventDefault(), E(a, 0)) : c.key === "End" && (c.preventDefault(), E(a, a.slides.length - 1));
    },
    clickHandler: (c) => {
      const l = c.target;
      if (!(l instanceof Element)) return;
      const p = l.closest(_), f = l.closest($);
      if (p) {
        h(a);
        return;
      }
      if (f) {
        A(a);
        return;
      }
      const S = l.closest(B);
      if (S) {
        const Z = S.getAttribute("data-cdw-stage-go"), O = Number.parseInt(Z || "", 10);
        Number.isFinite(O) && E(a, O);
      }
    },
    enterHandler: () => {
      a.hoverCount += 1, _t(a);
    },
    leaveHandler: () => {
      a.hoverCount = Math.max(0, a.hoverCount - 1), a.hoverCount === 0 && P(a);
    },
    touchStartHandler: (c) => {
      if (c.touches.length !== 1) return;
      const l = c.touches[0];
      a.touchActive = !0, a.touchStartX = l.clientX, a.touchStartY = l.clientY;
    },
    touchEndHandler: (c) => {
      if (!a.touchActive) return;
      a.touchActive = !1;
      const l = c.changedTouches[0], p = l.clientX - a.touchStartX, f = l.clientY - a.touchStartY;
      Math.abs(p) < 30 || Math.abs(p) < Math.abs(f) || (p > 0 ? h(a) : A(a));
    }
  };
  if (t.setAttribute("role", "region"), t.setAttribute("aria-roledescription", "stage"), o.length > 0 && t.setAttribute("aria-live", "polite"), g(a, e.startIndex), $t(a), P(a), e.navMode === "auto" && r.length === 0 && o.length > 1) {
    const c = document.createElement("div");
    c.className = "cdw-stage-nav", o.forEach((l, p) => {
      const f = document.createElement("button");
      f.type = "button", f.className = "cdw-stage-indicator", f.setAttribute("data-cdw-stage-go", String(p)), f.setAttribute("aria-label", `Ir para o slide ${p + 1}`), c.appendChild(f), a.navButtons.push(f);
    }), t.appendChild(c), F(a);
  }
  D.set(t, a);
}
function Dt(t) {
  Bt(t);
}
const K = "data-cdw-fw-initialized", qt = {
  childList: !0,
  subtree: !0
}, Pt = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: pt
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: At
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: Tt
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: Dt
  }
];
function zt(t) {
  return t ?? document;
}
function V(t) {
  const e = t.getAttribute(K);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function Gt(t, e) {
  const n = V(t);
  n.has(e) || (n.add(e), t.setAttribute(K, Array.from(n).join(" ")));
}
function Ut(t, e) {
  return !V(t).has(e);
}
function Xt(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function j(t) {
  const e = zt(t);
  for (const n of Pt) {
    const o = Xt(e, n.selector);
    for (const r of o)
      if (Ut(r, n.name))
        try {
          n.bind(r), Gt(r, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function Wt() {
  if (typeof MutationObserver > "u") return;
  const t = document.body;
  if (!t) return;
  new MutationObserver((n) => {
    for (const o of n)
      o.addedNodes.forEach((r) => {
        r instanceof HTMLElement && j(r);
      });
  }).observe(t, qt);
}
function z() {
  j(document), Wt();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => z(), { once: !0 }) : z());
const Yt = "0.1.0";
export {
  Yt as CDW_FW_VERSION
};
