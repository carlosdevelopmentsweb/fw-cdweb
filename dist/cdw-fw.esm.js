const u = [];
function v(e) {
  const t = u.findIndex((n) => n.name === e.name);
  if (t >= 0) {
    u[t] = e;
    return;
  }
  u.push(e);
}
function C() {
  return [...u];
}
const g = "[data-cdw-accordion]", R = ".cdw-accordion-item", p = ".cdw-accordion-trigger", D = ".cdw-accordion-panel", a = /* @__PURE__ */ new WeakMap();
let E = 0;
function w(e) {
  return E += 1, `${e}-${E}`;
}
function L(e) {
  return e instanceof HTMLElement;
}
function x(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function z(e, t) {
  return e === "multiple" ? "multiple" : t;
}
function B(e, t) {
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
function H(e) {
  if (e == null) return [];
  if (Array.isArray(e)) return e;
  if (typeof e == "number") return [e];
  if (typeof e == "string") {
    const t = e.trim();
    if (!t) return [];
    if (t.includes(","))
      return t.split(",").map((i) => i.trim()).filter(Boolean).map((i) => {
        const r = Number(i);
        return Number.isNaN(r) ? i : r;
      });
    const n = Number(t);
    return Number.isNaN(n) ? [t] : [n];
  }
  return [];
}
function _(e, t) {
  const n = z(e.getAttribute("data-mode"), "single"), i = x(
    e.getAttribute("data-collapsible"),
    !1
  ), r = x(e.getAttribute("data-animate"), !0), s = B(e.getAttribute("data-icon"), "chevron"), o = H(
    e.getAttribute("data-default-open")
  );
  return {
    mode: t?.mode ?? n,
    collapsible: t?.collapsible ?? i,
    defaultOpen: t?.defaultOpen ?? o,
    animate: t?.animate ?? r,
    icon: t?.icon ?? s
  };
}
function q(e, t) {
  return e.getAttribute("data-cdw-accordion-item") || e.id || String(t);
}
function d(e, t) {
  if (typeof t == "number")
    return e.index === t;
  if (t.startsWith("id:")) {
    const n = t.slice(3);
    return e.key === n || e.item.id === n;
  }
  return e.key === t;
}
function m(e, t, n) {
  if (!n) {
    e.style.maxHeight = t ? "none" : "0px", e.style.opacity = t ? "1" : "0", e.style.pointerEvents = t ? "auto" : "none";
    return;
  }
  if (t) {
    e.style.maxHeight = `${e.scrollHeight}px`, e.style.opacity = "1", e.style.pointerEvents = "auto";
    const i = (r) => {
      r.propertyName === "max-height" && (e.style.maxHeight !== "0px" && (e.style.maxHeight = "none"), e.removeEventListener("transitionend", i));
    };
    e.addEventListener("transitionend", i);
    return;
  }
  (e.style.maxHeight === "none" || e.style.maxHeight === "") && (e.style.maxHeight = `${e.scrollHeight}px`), e.style.opacity = "1", e.style.pointerEvents = "none", e.getBoundingClientRect(), e.style.maxHeight = "0px", e.style.opacity = "0";
}
function b(e, t) {
  e.trigger.setAttribute("aria-expanded", t ? "true" : "false"), e.panel.setAttribute("aria-hidden", t ? "false" : "true");
}
function T(e, t, n) {
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
function y(e, t) {
  t.item.classList.contains("is-open") && (t.item.classList.remove("is-open"), b(t, !1), m(t.panel, !1, e.options.animate), T(e.container, "cdw:accordion:close", t));
}
function N(e, t) {
  t.disabled || t.item.classList.contains("is-open") || (e.options.mode === "single" && e.items.forEach((n) => {
    n !== t && y(e, n);
  }), t.item.classList.add("is-open"), b(t, !0), m(t.panel, !0, e.options.animate), T(e.container, "cdw:accordion:open", t));
}
function A(e, t) {
  if (t.disabled) return;
  if (t.item.classList.contains("is-open")) {
    if (e.options.mode === "single" && !e.options.collapsible)
      return;
    y(e, t);
    return;
  }
  N(e, t);
}
function $(e) {
  return Array.from(e.querySelectorAll(R)).map((n, i) => {
    const r = n.querySelector(p), s = n.querySelector(D);
    if (!r || !s) return null;
    r.id || (r.id = w("cdw-accordion-trigger")), s.id || (s.id = w("cdw-accordion-panel")), r.setAttribute("aria-controls", s.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), s.setAttribute("role", "region"), s.setAttribute("aria-labelledby", r.id);
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
function U(e) {
  const t = H(e.options.defaultOpen), n = t.length > 0;
  let i = 0;
  e.items.forEach((r) => {
    const s = n ? t.some((c) => d(r, c)) : r.item.classList.contains("is-open");
    e.options.mode === "single" && i > 0 && s && r.item.classList.remove("is-open");
    const o = s && !r.disabled;
    o ? (r.item.classList.add("is-open"), i += 1) : r.item.classList.remove("is-open"), b(r, o), m(r.panel, o, e.options.animate);
  });
}
function K(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(p);
  if (!i || !e.triggerMap.has(i) || i.getAttribute("aria-disabled") === "true" || i.hasAttribute("disabled"))
    return;
  const r = e.triggerMap.get(i);
  r && A(e, r);
}
function W(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(p);
  if (!i || !e.triggerMap.has(i)) return;
  const r = e.items.filter((c) => !c.disabled).map((c) => c.trigger), s = r.indexOf(i);
  if (s === -1) return;
  const o = (c) => {
    const h = r[c];
    h && h.focus();
  };
  switch (t.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      t.preventDefault(), A(e, e.triggerMap.get(i));
      break;
    case "ArrowDown":
      t.preventDefault(), o((s + 1) % r.length);
      break;
    case "ArrowUp":
      t.preventDefault(), o((s - 1 + r.length) % r.length);
      break;
    case "Home":
      t.preventDefault(), o(0);
      break;
    case "End":
      t.preventDefault(), o(r.length - 1);
      break;
  }
}
function G(e) {
  e.options.animate && e.items.forEach((t) => {
    t.item.classList.contains("is-open") && (t.panel.style.maxHeight = `${t.panel.scrollHeight}px`);
  });
}
function f(e, t) {
  a.has(e) && O(e);
  const n = _(e, t);
  e.setAttribute("data-icon", n.icon), e.setAttribute("data-animate", n.animate ? "true" : "false");
  const i = $(e), r = /* @__PURE__ */ new Map();
  i.forEach((o) => r.set(o.trigger, o));
  const s = {
    container: e,
    options: n,
    items: i,
    triggerMap: r,
    clickHandler: (o) => K(s, o),
    keyHandler: (o) => W(s, o),
    resizeHandler: () => G(s)
  };
  e.addEventListener("click", s.clickHandler), e.addEventListener("keydown", s.keyHandler), window.addEventListener("resize", s.resizeHandler), U(s), a.set(e, s);
}
function l(e) {
  return typeof e == "string" ? document.querySelector(e) : e;
}
function P(e) {
  const t = Array.from(e.querySelectorAll(g)).filter(
    L
  );
  return L(e) && e.matches(g) && t.unshift(e), t;
}
const Y = {
  init(e, t) {
    P(e ?? document).forEach((r) => f(r, t));
  },
  open(e, t) {
    const n = l(e);
    if (!n) return;
    a.has(n) || f(n);
    const i = a.get(n);
    if (!i) return;
    const r = i.items.find((s) => d(s, t));
    r && N(i, r);
  },
  close(e, t) {
    const n = l(e);
    if (!n) return;
    const i = a.get(n);
    if (!i) return;
    const r = i.items.find((s) => d(s, t));
    r && y(i, r);
  },
  toggle(e, t) {
    const n = l(e);
    if (!n) return;
    a.has(n) || f(n);
    const i = a.get(n);
    if (!i) return;
    const r = i.items.find((s) => d(s, t));
    r && A(i, r);
  },
  destroy(e) {
    const t = l(e);
    t && O(t);
  }
};
function O(e) {
  const t = a.get(e);
  t && (e.removeEventListener("click", t.clickHandler), e.removeEventListener("keydown", t.keyHandler), window.removeEventListener("resize", t.resizeHandler), t.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), a.delete(e));
}
function V() {
  v({
    name: "accordion",
    selector: g,
    init: (e, t) => {
      f(e);
    }
  });
}
V();
const j = "0.1.0", I = "data-cdw-fw-initialized";
function F(e) {
  return e ?? document;
}
function k(e) {
  const t = e.getAttribute(I);
  return t ? new Set(t.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function Z(e, t) {
  const n = k(e);
  n.has(t) || (n.add(t), e.setAttribute(I, Array.from(n).join(" ")));
}
function J(e, t) {
  return !k(e).has(t);
}
function Q(e, t) {
  const n = Array.from(e.querySelectorAll(t));
  return e instanceof HTMLElement && e.matches(t) && n.unshift(e), n;
}
function S(e) {
  const t = F(e), n = C();
  for (const i of n) {
    const r = Q(t, i.selector);
    for (const s of r)
      if (J(s, i.name))
        try {
          i.init(s, M), Z(s, i.name);
        } catch (o) {
          console.error(`cdw-fw init error: ${i.name}`, o);
        }
  }
}
function X(e) {
  return S(e), M;
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
