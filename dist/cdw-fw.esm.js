const u = [];
function v(t) {
  const e = u.findIndex((n) => n.name === t.name);
  if (e >= 0) {
    u[e] = t;
    return;
  }
  u.push(t);
}
function C() {
  return [...u];
}
const g = "[data-cdw-accordion]", R = ".cdw-accordion-item", p = ".cdw-accordion-trigger", D = ".cdw-accordion-panel", a = /* @__PURE__ */ new WeakMap();
let E = 0;
function L(t) {
  return E += 1, `${t}-${E}`;
}
function x(t) {
  return t instanceof HTMLElement;
}
function w(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function z(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function B(t, e) {
  return t === "plus" ? "plus" : e;
}
function H(t) {
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
function _(t, e) {
  const n = z(t.getAttribute("data-mode"), "single"), i = w(
    t.getAttribute("data-collapsible"),
    !1
  ), r = w(t.getAttribute("data-animate"), !0), s = B(t.getAttribute("data-icon"), "chevron"), o = H(
    t.getAttribute("data-default-open")
  );
  return {
    mode: e?.mode ?? n,
    collapsible: e?.collapsible ?? i,
    defaultOpen: e?.defaultOpen ?? o,
    animate: e?.animate ?? r,
    icon: e?.icon ?? s
  };
}
function q(t, e) {
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
function m(t, e, n) {
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
function b(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function T(t, e, n) {
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
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), b(e, !1), m(e.panel, !1, t.options.animate), T(t.container, "cdw:accordion:close", e));
}
function N(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && y(t, n);
  }), e.item.classList.add("is-open"), b(e, !0), m(e.panel, !0, t.options.animate), T(t.container, "cdw:accordion:open", e));
}
function A(t, e) {
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
  return Array.from(t.querySelectorAll(R)).map((n, i) => {
    const r = n.querySelector(p), s = n.querySelector(D);
    if (!r || !s) return null;
    r.id || (r.id = L("cdw-accordion-trigger")), s.id || (s.id = L("cdw-accordion-panel")), r.setAttribute("aria-controls", s.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), s.setAttribute("role", "region"), s.setAttribute("aria-labelledby", r.id);
    const o = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return o ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: s,
      index: i,
      key: q(n, i),
      disabled: o
    };
  }).filter((n) => n !== null);
}
function U(t) {
  const e = H(t.options.defaultOpen), n = e.length > 0;
  let i = 0;
  t.items.forEach((r) => {
    const s = n ? e.some((c) => d(r, c)) : r.item.classList.contains("is-open");
    t.options.mode === "single" && i > 0 && s && r.item.classList.remove("is-open");
    const o = s && !r.disabled;
    o ? (r.item.classList.add("is-open"), i += 1) : r.item.classList.remove("is-open"), b(r, o), m(r.panel, o, t.options.animate);
  });
}
function K(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(p);
  if (!i || !t.triggerMap.has(i) || i.getAttribute("aria-disabled") === "true" || i.hasAttribute("disabled"))
    return;
  const r = t.triggerMap.get(i);
  r && A(t, r);
}
function W(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(p);
  if (!i || !t.triggerMap.has(i)) return;
  const r = t.items.filter((c) => !c.disabled).map((c) => c.trigger), s = r.indexOf(i);
  if (s === -1) return;
  const o = (c) => {
    const h = r[c];
    h && h.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), A(t, t.triggerMap.get(i));
      break;
    case "ArrowDown":
      e.preventDefault(), o((s + 1) % r.length);
      break;
    case "ArrowUp":
      e.preventDefault(), o((s - 1 + r.length) % r.length);
      break;
    case "Home":
      e.preventDefault(), o(0);
      break;
    case "End":
      e.preventDefault(), o(r.length - 1);
      break;
  }
}
function G(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function f(t, e) {
  a.has(t) && O(t);
  const n = _(t, e);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const i = $(t), r = /* @__PURE__ */ new Map();
  i.forEach((o) => r.set(o.trigger, o));
  const s = {
    container: t,
    options: n,
    items: i,
    triggerMap: r,
    clickHandler: (o) => K(s, o),
    keyHandler: (o) => W(s, o),
    resizeHandler: () => G(s)
  };
  t.addEventListener("click", s.clickHandler), t.addEventListener("keydown", s.keyHandler), window.addEventListener("resize", s.resizeHandler), U(s), a.set(t, s);
}
function l(t) {
  return typeof t == "string" ? document.querySelector(t) : t;
}
function P(t) {
  const e = Array.from(t.querySelectorAll(g)).filter(
    x
  );
  return x(t) && t.matches(g) && e.unshift(t), e;
}
const Y = {
  init(t, e) {
    P(t ?? document).forEach((r) => f(r, e));
  },
  open(t, e) {
    const n = l(t);
    if (!n) return;
    a.has(n) || f(n);
    const i = a.get(n);
    if (!i) return;
    const r = i.items.find((s) => d(s, e));
    r && N(i, r);
  },
  close(t, e) {
    const n = l(t);
    if (!n) return;
    const i = a.get(n);
    if (!i) return;
    const r = i.items.find((s) => d(s, e));
    r && y(i, r);
  },
  toggle(t, e) {
    const n = l(t);
    if (!n) return;
    a.has(n) || f(n);
    const i = a.get(n);
    if (!i) return;
    const r = i.items.find((s) => d(s, e));
    r && A(i, r);
  },
  destroy(t) {
    const e = l(t);
    e && O(e);
  }
};
function O(t) {
  const e = a.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), a.delete(t));
}
function V() {
  v({
    name: "accordion",
    selector: g,
    init: (t, e) => {
      f(t);
    }
  });
}
V();
const j = "0.1.0", I = "data-cdw-fw-initialized";
function F(t) {
  return t ?? document;
}
function k(t) {
  const e = t.getAttribute(I);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function Z(t, e) {
  const n = k(t);
  n.has(e) || (n.add(e), t.setAttribute(I, Array.from(n).join(" ")));
}
function J(t, e) {
  return !k(t).has(e);
}
function Q(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function S(t) {
  const e = F(t), n = C();
  for (const i of n) {
    const r = Q(e, i.selector);
    for (const s of r)
      if (J(s, i.name))
        try {
          i.init(s, M), Z(s, i.name);
        } catch (o) {
          console.error(`cdw-fw init error: ${i.name}`, o);
        }
  }
}
function X(t) {
  return S(t), M;
}
const M = {
  version: j,
  init: X,
  register: v,
  scan: S
};
export {
  Y as Accordion,
  j as CDW_FW_VERSION,
  X as init,
  v as register
};
