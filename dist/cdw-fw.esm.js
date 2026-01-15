const Z = ".cdw-accordion-item", y = ".cdw-accordion-trigger", J = ".cdw-accordion-panel", m = /* @__PURE__ */ new WeakMap();
let H = 0;
function T(t) {
  return H += 1, `${t}-${H}`;
}
function k(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function Q(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function tt(t, e) {
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
      return e.split(",").map((i) => i.trim()).filter(Boolean).map((i) => {
        const r = Number(i);
        return Number.isNaN(r) ? i : r;
      });
    const n = Number(e);
    return Number.isNaN(n) ? [e] : [n];
  }
  return [];
}
function et(t, e) {
  const n = Q(t.getAttribute("data-mode"), "single"), i = k(
    t.getAttribute("data-collapsible"),
    !1
  ), r = k(t.getAttribute("data-animate"), !0), o = tt(t.getAttribute("data-icon"), "chevron"), s = G(
    t.getAttribute("data-default-open")
  );
  return {
    mode: n,
    collapsible: i,
    defaultOpen: s,
    animate: r,
    icon: o
  };
}
function nt(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function rt(t, e) {
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
    const i = (r) => {
      r.propertyName === "max-height" && (t.style.maxHeight !== "0px" && (t.style.maxHeight = "none"), t.removeEventListener("transitionend", i));
    };
    t.addEventListener("transitionend", i);
    return;
  }
  (t.style.maxHeight === "none" || t.style.maxHeight === "") && (t.style.maxHeight = `${t.scrollHeight}px`), t.style.opacity = "1", t.style.pointerEvents = "none", t.getBoundingClientRect(), t.style.maxHeight = "0px", t.style.opacity = "0";
}
function L(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function P(t, e, n) {
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
function U(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), L(e, !1), w(e.panel, !1, t.options.animate), P(t.container, "cdw:accordion:close", e));
}
function it(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && U(t, n);
  }), e.item.classList.add("is-open"), L(e, !0), w(e.panel, !0, t.options.animate), P(t.container, "cdw:accordion:open", e));
}
function X(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    U(t, e);
    return;
  }
  it(t, e);
}
function ot(t) {
  return Array.from(t.querySelectorAll(Z)).map((n, i) => {
    const r = n.querySelector(y), o = n.querySelector(J);
    if (!r || !o) return null;
    r.id || (r.id = T("cdw-accordion-trigger")), o.id || (o.id = T("cdw-accordion-panel")), r.setAttribute("aria-controls", o.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), o.setAttribute("role", "region"), o.setAttribute("aria-labelledby", r.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: o,
      index: i,
      key: nt(n, i),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function st(t) {
  const e = G(t.options.defaultOpen), n = e.length > 0;
  let i = 0;
  t.items.forEach((r) => {
    const o = n ? e.some((u) => rt(r, u)) : r.item.classList.contains("is-open");
    t.options.mode === "single" && i > 0 && o && r.item.classList.remove("is-open");
    const s = o && !r.disabled;
    s ? (r.item.classList.add("is-open"), i += 1) : r.item.classList.remove("is-open"), L(r, s), w(r.panel, s, t.options.animate);
  });
}
function at(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(y);
  if (!i || !t.triggerMap.has(i) || i.getAttribute("aria-disabled") === "true" || i.hasAttribute("disabled"))
    return;
  const r = t.triggerMap.get(i);
  r && X(t, r);
}
function ct(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(y);
  if (!i || !t.triggerMap.has(i)) return;
  const r = t.items.filter((u) => !u.disabled).map((u) => u.trigger), o = r.indexOf(i);
  if (o === -1) return;
  const s = (u) => {
    const d = r[u];
    d && d.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), X(t, t.triggerMap.get(i));
      break;
    case "ArrowDown":
      e.preventDefault(), s((o + 1) % r.length);
      break;
    case "ArrowUp":
      e.preventDefault(), s((o - 1 + r.length) % r.length);
      break;
    case "Home":
      e.preventDefault(), s(0);
      break;
    case "End":
      e.preventDefault(), s(r.length - 1);
      break;
  }
}
function ut(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function lt(t, e) {
  m.has(t) && dt(t);
  const n = et(t);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const i = ot(t), r = /* @__PURE__ */ new Map();
  i.forEach((s) => r.set(s.trigger, s));
  const o = {
    container: t,
    options: n,
    items: i,
    triggerMap: r,
    clickHandler: (s) => at(o, s),
    keyHandler: (s) => ct(o, s),
    resizeHandler: () => ut(o)
  };
  t.addEventListener("click", o.clickHandler), t.addEventListener("keydown", o.keyHandler), window.addEventListener("resize", o.resizeHandler), st(o), m.set(t, o);
}
function dt(t) {
  const e = m.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), m.delete(t));
}
function ft(t) {
  lt(t);
}
const pt = "[data-cdw-alert-close]", gt = "data-autoclose";
function bt(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function N(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function mt(t) {
  const e = t.querySelector(pt);
  e && e.addEventListener("click", () => N(t));
  const n = bt(t.getAttribute(gt));
  n && window.setTimeout(() => N(t), n);
}
function ht(t) {
  mt(t);
}
const At = ".cdw-navbar-panel", I = "[data-cdw-navbar-toggle]", x = "[data-cdw-navbar-close]", C = "[data-cdw-navbar-sub]", R = /* @__PURE__ */ new WeakMap();
function Et(t, e) {
  if (t.id) return t.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return t.id = n, e.setAttribute("data-cdw-navbar-panel", n), n;
}
function W(t, e) {
  t && t.setAttribute("aria-expanded", e ? "true" : "false");
}
function vt(t) {
  t.container.classList.add("is-open"), W(t.toggle, !0);
}
function v(t) {
  t.container.classList.remove("is-open"), W(t.toggle, !1);
}
function yt(t) {
  t.container.classList.contains("is-open") ? v(t) : vt(t);
}
function wt(t) {
  const e = t.closest(".cdw-navbar-item");
  if (!e) return;
  const n = e.classList.toggle("is-open");
  t.setAttribute("aria-expanded", n ? "true" : "false");
}
function Lt(t) {
  if (R.has(t)) return;
  const e = t.querySelector(At), n = t.querySelector(I), i = t.querySelector(".cdw-navbar-overlay"), r = Array.from(t.querySelectorAll(x)), o = Array.from(t.querySelectorAll(C));
  if (e) {
    const u = Et(e, t);
    n && (n.setAttribute("aria-controls", u), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const s = {
    container: t,
    panel: e,
    toggle: n,
    overlay: i,
    closeButtons: r,
    subToggles: o,
    keyHandler: (u) => {
      u.key === "Escape" && v(s);
    },
    clickHandler: (u) => {
      const d = u.target;
      if (!(d instanceof Element)) return;
      if (d.closest(I)) {
        yt(s);
        return;
      }
      if (d.closest(x) || d.closest(".cdw-navbar-overlay")) {
        v(s);
        return;
      }
      const c = d.closest(C);
      c && (u.preventDefault(), wt(c));
    }
  };
  t.addEventListener("click", s.clickHandler), t.addEventListener("keydown", s.keyHandler), R.set(t, s);
}
function St(t) {
  Lt(t);
}
const Ot = ".cdw-stage-track", Ht = ".cdw-stage-slide", M = "[data-cdw-stage-prev]", _ = "[data-cdw-stage-next]", $ = "[data-cdw-stage-go]", Tt = "[data-cdw-stage-counter]", kt = "[data-cdw-stage-progress]", B = /* @__PURE__ */ new WeakMap();
function b(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function D(t, e) {
  if (!t) return e;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : e;
}
function Nt(t) {
  const e = t.getAttribute("data-autoplay"), n = t.getAttribute("data-interval"), i = b(t.getAttribute("data-pause-on-hover"), !0), r = b(t.getAttribute("data-loop"), !0), o = b(t.getAttribute("data-keyboard"), !0), s = b(t.getAttribute("data-swipe"), !0), u = D(t.getAttribute("data-start"), 0), d = t.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let a = !1, c = D(n, 5200);
  if (e !== null) {
    a = e === "" || e === "true";
    const l = Number.parseInt(e, 10);
    Number.isFinite(l) && (a = !0, c = l);
  }
  return {
    autoplay: a,
    interval: c,
    pauseOnHover: i,
    loop: r,
    keyboard: o,
    swipe: s,
    startIndex: u,
    navMode: d
  };
}
function It(t) {
  const e = t.querySelector(Ot) || t, n = Array.from(e.querySelectorAll(Ht));
  return { track: e, slides: n };
}
function xt(t, e) {
  const n = t.slides.length;
  return n === 0 ? 0 : t.options.loop ? (e + n) % n : Math.max(0, Math.min(n - 1, e));
}
function Ct(t) {
  const e = t.slides.length;
  t.slides.forEach((n, i) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${i + 1} de ${e}`), n.setAttribute("aria-hidden", i === t.current ? "false" : "true");
  });
}
function Y(t) {
  const e = t.slides.length;
  if (t.navButtons.forEach((n, i) => {
    i === t.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), t.counterEl && (t.counterEl.textContent = `${t.current + 1}/${e}`), t.progressEl) {
    const n = e > 0 ? (t.current + 1) / e * 100 : 0;
    t.progressEl.style.width = `${n}%`;
  }
}
function g(t, e) {
  const n = t.slides.length;
  if (n === 0) return;
  const i = xt(t, e), r = t.options.loop ? (i - 1 + n) % n : i - 1, o = t.options.loop ? (i + 1) % n : i + 1;
  t.slides.forEach((s, u) => {
    s.classList.toggle("is-active", u === i), s.classList.toggle("is-prev", r >= 0 && u === r), s.classList.toggle("is-next", o < n && u === o);
  }), t.current = i, Ct(t), Y(t);
}
function q(t) {
  !t.options.autoplay || t.slides.length <= 1 || (t.timerId && window.clearInterval(t.timerId), t.timerId = window.setInterval(() => {
    g(t, t.current + 1);
  }, t.options.interval));
}
function Rt(t) {
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
function Mt(t) {
  t.options.pauseOnHover && (t.container.addEventListener("mouseenter", t.enterHandler), t.container.addEventListener("mouseleave", t.leaveHandler), t.container.addEventListener("focusin", t.enterHandler), t.container.addEventListener("focusout", t.leaveHandler)), t.container.addEventListener("click", t.clickHandler), t.options.keyboard && (t.container.setAttribute("tabindex", "0"), t.container.addEventListener("keydown", t.keyHandler)), t.options.swipe && (t.container.addEventListener("touchstart", t.touchStartHandler, { passive: !0 }), t.container.addEventListener("touchend", t.touchEndHandler));
}
function _t(t) {
  if (B.has(t)) return;
  const e = Nt(t), { track: n, slides: i } = It(t), r = Array.from(t.querySelectorAll($)), o = Array.from(t.querySelectorAll(M)), s = Array.from(t.querySelectorAll(_)), u = t.querySelector(Tt), d = t.querySelector(kt), a = {
    container: t,
    track: n,
    slides: i,
    navButtons: r,
    prevButtons: o,
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
      const p = l.closest(M), f = l.closest(_);
      if (p) {
        h(a);
        return;
      }
      if (f) {
        A(a);
        return;
      }
      const S = l.closest($);
      if (S) {
        const j = S.getAttribute("data-cdw-stage-go"), O = Number.parseInt(j || "", 10);
        Number.isFinite(O) && E(a, O);
      }
    },
    enterHandler: () => {
      a.hoverCount += 1, Rt(a);
    },
    leaveHandler: () => {
      a.hoverCount = Math.max(0, a.hoverCount - 1), a.hoverCount === 0 && q(a);
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
  if (t.setAttribute("role", "region"), t.setAttribute("aria-roledescription", "stage"), i.length > 0 && t.setAttribute("aria-live", "polite"), g(a, e.startIndex), Mt(a), q(a), e.navMode === "auto" && r.length === 0 && i.length > 1) {
    const c = document.createElement("div");
    c.className = "cdw-stage-nav", i.forEach((l, p) => {
      const f = document.createElement("button");
      f.type = "button", f.className = "cdw-stage-indicator", f.setAttribute("data-cdw-stage-go", String(p)), f.setAttribute("aria-label", `Ir para o slide ${p + 1}`), c.appendChild(f), a.navButtons.push(f);
    }), t.appendChild(c), Y(a);
  }
  B.set(t, a);
}
function $t(t) {
  _t(t);
}
const F = "data-cdw-fw-initialized", Bt = {
  childList: !0,
  subtree: !0
}, Dt = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: ft
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: ht
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: St
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: $t
  }
];
function qt(t) {
  return t ?? document;
}
function K(t) {
  const e = t.getAttribute(F);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function zt(t, e) {
  const n = K(t);
  n.has(e) || (n.add(e), t.setAttribute(F, Array.from(n).join(" ")));
}
function Gt(t, e) {
  return !K(t).has(e);
}
function Pt(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function V(t) {
  const e = qt(t);
  for (const n of Dt) {
    const i = Pt(e, n.selector);
    for (const r of i)
      if (Gt(r, n.name))
        try {
          n.bind(r), zt(r, n.name);
        } catch (o) {
          console.warn(`cdw-fw init issue: ${n.name}`, o);
        }
  }
}
function Ut() {
  if (typeof MutationObserver > "u") return;
  const t = document.body;
  if (!t) return;
  new MutationObserver((n) => {
    for (const i of n)
      i.addedNodes.forEach((r) => {
        r instanceof HTMLElement && V(r);
      });
  }).observe(t, Bt);
}
function z() {
  V(document), Ut();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => z(), { once: !0 }) : z());
const Xt = "0.1.0";
export {
  Xt as CDW_FW_VERSION
};
