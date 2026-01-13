const l = [];
function p(t) {
  const e = l.findIndex((n) => n.name === t.name);
  if (e >= 0) {
    l[e] = t;
    return;
  }
  l.push(t);
}
function M() {
  return [...l];
}
const g = "[data-cdw-accordion]", _ = ".cdw-accordion-item", m = ".cdw-accordion-trigger", D = ".cdw-accordion-panel", a = /* @__PURE__ */ new WeakMap();
let L = 0;
function w(t) {
  return L += 1, `${t}-${L}`;
}
function T(t) {
  return t instanceof HTMLElement;
}
function x(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function z(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function B(t, e) {
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
function O(t) {
  if (t == null) return [];
  if (Array.isArray(t)) return t;
  if (typeof t == "number") return [t];
  if (typeof t == "string") {
    const e = t.trim();
    if (!e) return [];
    if (e.includes(","))
      return e.split(",").map((r) => r.trim()).filter(Boolean).map((r) => {
        const i = Number(r);
        return Number.isNaN(i) ? r : i;
      });
    const n = Number(e);
    return Number.isNaN(n) ? [e] : [n];
  }
  return [];
}
function q(t, e) {
  const n = z(t.getAttribute("data-mode"), "single"), r = x(
    t.getAttribute("data-collapsible"),
    !1
  ), i = x(t.getAttribute("data-animate"), !0), s = B(t.getAttribute("data-icon"), "chevron"), o = O(
    t.getAttribute("data-default-open")
  );
  return {
    mode: e?.mode ?? n,
    collapsible: e?.collapsible ?? r,
    defaultOpen: e?.defaultOpen ?? o,
    animate: e?.animate ?? i,
    icon: e?.icon ?? s
  };
}
function U(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function d(t, e) {
  if (typeof e == "number")
    return t.index === e;
  if (e.startsWith("id:")) {
    const n = e.slice(3);
    return t.key === n || t.item.id === n;
  }
  return t.key === e;
}
function b(t, e, n) {
  if (!n) {
    t.style.maxHeight = e ? "none" : "0px", t.style.opacity = e ? "1" : "0", t.style.pointerEvents = e ? "auto" : "none";
    return;
  }
  if (e) {
    t.style.maxHeight = `${t.scrollHeight}px`, t.style.opacity = "1", t.style.pointerEvents = "auto";
    const r = (i) => {
      i.propertyName === "max-height" && (t.style.maxHeight !== "0px" && (t.style.maxHeight = "none"), t.removeEventListener("transitionend", r));
    };
    t.addEventListener("transitionend", r);
    return;
  }
  (t.style.maxHeight === "none" || t.style.maxHeight === "") && (t.style.maxHeight = `${t.scrollHeight}px`), t.style.opacity = "1", t.style.pointerEvents = "none", t.getBoundingClientRect(), t.style.maxHeight = "0px", t.style.opacity = "0";
}
function A(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function H(t, e, n) {
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
function y(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), A(e, !1), b(e.panel, !1, t.options.animate), H(t.container, "cdw:accordion:close", e));
}
function N(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && y(t, n);
  }), e.item.classList.add("is-open"), A(e, !0), b(e.panel, !0, t.options.animate), H(t.container, "cdw:accordion:open", e));
}
function h(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    y(t, e);
    return;
  }
  N(t, e);
}
function $(t) {
  return Array.from(t.querySelectorAll(_)).map((n, r) => {
    const i = n.querySelector(m), s = n.querySelector(D);
    if (!i || !s) return null;
    i.id || (i.id = w("cdw-accordion-trigger")), s.id || (s.id = w("cdw-accordion-panel")), i.setAttribute("aria-controls", s.id), i.tagName === "BUTTON" && !i.getAttribute("type") && i.setAttribute("type", "button"), s.setAttribute("role", "region"), s.setAttribute("aria-labelledby", i.id);
    const o = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || i.hasAttribute("disabled") || i.getAttribute("aria-disabled") === "true";
    return o ? (n.classList.add("is-disabled"), i.setAttribute("aria-disabled", "true"), i.tagName === "BUTTON" && i.setAttribute("disabled", "true"), i.tagName !== "BUTTON" && i.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), i.removeAttribute("aria-disabled"), i.tagName !== "BUTTON" && i.setAttribute("tabindex", "0")), {
      item: n,
      trigger: i,
      panel: s,
      index: r,
      key: U(n, r),
      disabled: o
    };
  }).filter((n) => n !== null);
}
function K(t) {
  const e = O(t.options.defaultOpen), n = e.length > 0;
  let r = 0;
  t.items.forEach((i) => {
    const s = n ? e.some((c) => d(i, c)) : i.item.classList.contains("is-open");
    t.options.mode === "single" && r > 0 && s && i.item.classList.remove("is-open");
    const o = s && !i.disabled;
    o ? (i.item.classList.add("is-open"), r += 1) : i.item.classList.remove("is-open"), A(i, o), b(i.panel, o, t.options.animate);
  });
}
function W(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const r = n.closest(m);
  if (!r || !t.triggerMap.has(r) || r.getAttribute("aria-disabled") === "true" || r.hasAttribute("disabled"))
    return;
  const i = t.triggerMap.get(r);
  i && h(t, i);
}
function F(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const r = n.closest(m);
  if (!r || !t.triggerMap.has(r)) return;
  const i = t.items.filter((c) => !c.disabled).map((c) => c.trigger), s = i.indexOf(r);
  if (s === -1) return;
  const o = (c) => {
    const E = i[c];
    E && E.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), h(t, t.triggerMap.get(r));
      break;
    case "ArrowDown":
      e.preventDefault(), o((s + 1) % i.length);
      break;
    case "ArrowUp":
      e.preventDefault(), o((s - 1 + i.length) % i.length);
      break;
    case "Home":
      e.preventDefault(), o(0);
      break;
    case "End":
      e.preventDefault(), o(i.length - 1);
      break;
  }
}
function G(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function f(t, e) {
  a.has(t) && S(t);
  const n = q(t, e);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const r = $(t), i = /* @__PURE__ */ new Map();
  r.forEach((o) => i.set(o.trigger, o));
  const s = {
    container: t,
    options: n,
    items: r,
    triggerMap: i,
    clickHandler: (o) => W(s, o),
    keyHandler: (o) => F(s, o),
    resizeHandler: () => G(s)
  };
  t.addEventListener("click", s.clickHandler), t.addEventListener("keydown", s.keyHandler), window.addEventListener("resize", s.resizeHandler), K(s), a.set(t, s);
}
function u(t) {
  return typeof t == "string" ? document.querySelector(t) : t;
}
function P(t) {
  const e = Array.from(t.querySelectorAll(g)).filter(
    T
  );
  return T(t) && t.matches(g) && e.unshift(t), e;
}
const ot = {
  init(t, e) {
    P(t ?? document).forEach((i) => f(i, e));
  },
  open(t, e) {
    const n = u(t);
    if (!n) return;
    a.has(n) || f(n);
    const r = a.get(n);
    if (!r) return;
    const i = r.items.find((s) => d(s, e));
    i && N(r, i);
  },
  close(t, e) {
    const n = u(t);
    if (!n) return;
    const r = a.get(n);
    if (!r) return;
    const i = r.items.find((s) => d(s, e));
    i && y(r, i);
  },
  toggle(t, e) {
    const n = u(t);
    if (!n) return;
    a.has(n) || f(n);
    const r = a.get(n);
    if (!r) return;
    const i = r.items.find((s) => d(s, e));
    i && h(r, i);
  },
  destroy(t) {
    const e = u(t);
    e && S(e);
  }
};
function S(t) {
  const e = a.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), a.delete(t));
}
function V() {
  p({
    name: "accordion",
    selector: g,
    init: (t, e) => {
      f(t);
    }
  });
}
V();
const j = ".cdw-alert", Z = ".cdw-alert-close", J = "data-autoclose";
function Q(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function v(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function X(t) {
  const e = t.querySelector(Z);
  e && e.addEventListener("click", () => v(t));
  const n = Q(t.getAttribute(J));
  n && window.setTimeout(() => v(t), n);
}
function Y() {
  p({
    name: "alert",
    selector: j,
    init: (t, e) => {
      X(t);
    }
  });
}
Y();
const tt = "0.1.0", I = "data-cdw-fw-initialized";
function et(t) {
  return t ?? document;
}
function k(t) {
  const e = t.getAttribute(I);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function nt(t, e) {
  const n = k(t);
  n.has(e) || (n.add(e), t.setAttribute(I, Array.from(n).join(" ")));
}
function it(t, e) {
  return !k(t).has(e);
}
function rt(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function C(t) {
  const e = et(t), n = M();
  for (const r of n) {
    const i = rt(e, r.selector);
    for (const s of i)
      if (it(s, r.name))
        try {
          r.init(s, R), nt(s, r.name);
        } catch (o) {
          console.warn(`cdw-fw init issue: ${r.name}`, o);
        }
  }
}
function st(t) {
  return C(t), R;
}
const R = {
  version: tt,
  init: st,
  register: p,
  scan: C
};
export {
  ot as Accordion,
  tt as CDW_FW_VERSION,
  st as init,
  p as register
};
