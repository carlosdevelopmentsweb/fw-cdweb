const F = ".cdw-accordion-item", y = ".cdw-accordion-trigger", G = ".cdw-accordion-panel", m = /* @__PURE__ */ new WeakMap();
let H = 0;
function O(t) {
  return H += 1, `${t}-${H}`;
}
function I(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function K(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function W(t, e) {
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
function D(t) {
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
function V(t, e) {
  const n = K(t.getAttribute("data-mode"), "single"), i = I(
    t.getAttribute("data-collapsible"),
    !1
  ), r = I(t.getAttribute("data-animate"), !0), o = W(t.getAttribute("data-icon"), "chevron"), a = D(
    t.getAttribute("data-default-open")
  );
  return {
    mode: n,
    collapsible: i,
    defaultOpen: a,
    animate: r,
    icon: o
  };
}
function j(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function Z(t, e) {
  if (typeof e == "number")
    return t.index === e;
  if (e.startsWith("id:")) {
    const n = e.slice(3);
    return t.key === n || t.item.id === n;
  }
  return t.key === e;
}
function v(t, e, n) {
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
function w(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function B(t, e, n) {
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
function $(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), w(e, !1), v(e.panel, !1, t.options.animate), B(t.container, "cdw:accordion:close", e));
}
function J(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && $(t, n);
  }), e.item.classList.add("is-open"), w(e, !0), v(e.panel, !0, t.options.animate), B(t.container, "cdw:accordion:open", e));
}
function q(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    $(t, e);
    return;
  }
  J(t, e);
}
function Q(t) {
  return Array.from(t.querySelectorAll(F)).map((n, i) => {
    const r = n.querySelector(y), o = n.querySelector(G);
    if (!r || !o) return null;
    r.id || (r.id = O("cdw-accordion-trigger")), o.id || (o.id = O("cdw-accordion-panel")), r.setAttribute("aria-controls", o.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), o.setAttribute("role", "region"), o.setAttribute("aria-labelledby", r.id);
    const a = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return a ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: o,
      index: i,
      key: j(n, i),
      disabled: a
    };
  }).filter((n) => n !== null);
}
function tt(t) {
  const e = D(t.options.defaultOpen), n = e.length > 0;
  let i = 0;
  t.items.forEach((r) => {
    const o = n ? e.some((u) => Z(r, u)) : r.item.classList.contains("is-open");
    t.options.mode === "single" && i > 0 && o && r.item.classList.remove("is-open");
    const a = o && !r.disabled;
    a ? (r.item.classList.add("is-open"), i += 1) : r.item.classList.remove("is-open"), w(r, a), v(r.panel, a, t.options.animate);
  });
}
function et(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(y);
  if (!i || !t.triggerMap.has(i) || i.getAttribute("aria-disabled") === "true" || i.hasAttribute("disabled"))
    return;
  const r = t.triggerMap.get(i);
  r && q(t, r);
}
function nt(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const i = n.closest(y);
  if (!i || !t.triggerMap.has(i)) return;
  const r = t.items.filter((u) => !u.disabled).map((u) => u.trigger), o = r.indexOf(i);
  if (o === -1) return;
  const a = (u) => {
    const p = r[u];
    p && p.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), q(t, t.triggerMap.get(i));
      break;
    case "ArrowDown":
      e.preventDefault(), a((o + 1) % r.length);
      break;
    case "ArrowUp":
      e.preventDefault(), a((o - 1 + r.length) % r.length);
      break;
    case "Home":
      e.preventDefault(), a(0);
      break;
    case "End":
      e.preventDefault(), a(r.length - 1);
      break;
  }
}
function rt(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function it(t, e) {
  m.has(t) && ot(t);
  const n = V(t);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const i = Q(t), r = /* @__PURE__ */ new Map();
  i.forEach((a) => r.set(a.trigger, a));
  const o = {
    container: t,
    options: n,
    items: i,
    triggerMap: r,
    clickHandler: (a) => et(o, a),
    keyHandler: (a) => nt(o, a),
    resizeHandler: () => rt(o)
  };
  t.addEventListener("click", o.clickHandler), t.addEventListener("keydown", o.keyHandler), window.addEventListener("resize", o.resizeHandler), tt(o), m.set(t, o);
}
function ot(t) {
  const e = m.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), m.delete(t));
}
function st(t) {
  it(t);
}
const at = "[data-cdw-alert-close]", ct = "data-autoclose";
function ut(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function T(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function lt(t) {
  const e = t.querySelector(at);
  e && e.addEventListener("click", () => T(t));
  const n = ut(t.getAttribute(ct));
  n && window.setTimeout(() => T(t), n);
}
function dt(t) {
  lt(t);
}
const ft = ".cdw-stage-track", pt = ".cdw-stage-slide", N = "[data-cdw-stage-prev]", k = "[data-cdw-stage-next]", x = "[data-cdw-stage-go]", gt = "[data-cdw-stage-counter]", bt = "[data-cdw-stage-progress]", C = /* @__PURE__ */ new WeakMap();
function b(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function R(t, e) {
  if (!t) return e;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : e;
}
function mt(t) {
  const e = t.getAttribute("data-autoplay"), n = t.getAttribute("data-interval"), i = b(t.getAttribute("data-pause-on-hover"), !0), r = b(t.getAttribute("data-loop"), !0), o = b(t.getAttribute("data-keyboard"), !0), a = b(t.getAttribute("data-swipe"), !0), u = R(t.getAttribute("data-start"), 0), p = t.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let s = !1, c = R(n, 5200);
  if (e !== null) {
    s = e === "" || e === "true";
    const l = Number.parseInt(e, 10);
    Number.isFinite(l) && (s = !0, c = l);
  }
  return {
    autoplay: s,
    interval: c,
    pauseOnHover: i,
    loop: r,
    keyboard: o,
    swipe: a,
    startIndex: u,
    navMode: p
  };
}
function ht(t) {
  const e = t.querySelector(ft) || t, n = Array.from(e.querySelectorAll(pt));
  return { track: e, slides: n };
}
function At(t, e) {
  const n = t.slides.length;
  return n === 0 ? 0 : t.options.loop ? (e + n) % n : Math.max(0, Math.min(n - 1, e));
}
function Et(t) {
  const e = t.slides.length;
  t.slides.forEach((n, i) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${i + 1} de ${e}`), n.setAttribute("aria-hidden", i === t.current ? "false" : "true");
  });
}
function z(t) {
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
  const i = At(t, e), r = t.options.loop ? (i - 1 + n) % n : i - 1, o = t.options.loop ? (i + 1) % n : i + 1;
  t.slides.forEach((a, u) => {
    a.classList.toggle("is-active", u === i), a.classList.toggle("is-prev", r >= 0 && u === r), a.classList.toggle("is-next", o < n && u === o);
  }), t.current = i, Et(t), z(t);
}
function M(t) {
  !t.options.autoplay || t.slides.length <= 1 || (t.timerId && window.clearInterval(t.timerId), t.timerId = window.setInterval(() => {
    g(t, t.current + 1);
  }, t.options.interval));
}
function yt(t) {
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
function vt(t) {
  t.options.pauseOnHover && (t.container.addEventListener("mouseenter", t.enterHandler), t.container.addEventListener("mouseleave", t.leaveHandler), t.container.addEventListener("focusin", t.enterHandler), t.container.addEventListener("focusout", t.leaveHandler)), t.container.addEventListener("click", t.clickHandler), t.options.keyboard && (t.container.setAttribute("tabindex", "0"), t.container.addEventListener("keydown", t.keyHandler)), t.options.swipe && (t.container.addEventListener("touchstart", t.touchStartHandler, { passive: !0 }), t.container.addEventListener("touchend", t.touchEndHandler));
}
function wt(t) {
  if (C.has(t)) return;
  const e = mt(t), { track: n, slides: i } = ht(t), r = Array.from(t.querySelectorAll(x)), o = Array.from(t.querySelectorAll(N)), a = Array.from(t.querySelectorAll(k)), u = t.querySelector(gt), p = t.querySelector(bt), s = {
    container: t,
    track: n,
    slides: i,
    navButtons: r,
    prevButtons: o,
    nextButtons: a,
    counterEl: u,
    progressEl: p,
    options: e,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (c) => {
      c.key === "ArrowLeft" ? (c.preventDefault(), h(s)) : c.key === "ArrowRight" ? (c.preventDefault(), A(s)) : c.key === "Home" ? (c.preventDefault(), E(s, 0)) : c.key === "End" && (c.preventDefault(), E(s, s.slides.length - 1));
    },
    clickHandler: (c) => {
      const l = c.target;
      if (!(l instanceof Element)) return;
      const f = l.closest(N), d = l.closest(k);
      if (f) {
        h(s);
        return;
      }
      if (d) {
        A(s);
        return;
      }
      const L = l.closest(x);
      if (L) {
        const Y = L.getAttribute("data-cdw-stage-go"), S = Number.parseInt(Y || "", 10);
        Number.isFinite(S) && E(s, S);
      }
    },
    enterHandler: () => {
      s.hoverCount += 1, yt(s);
    },
    leaveHandler: () => {
      s.hoverCount = Math.max(0, s.hoverCount - 1), s.hoverCount === 0 && M(s);
    },
    touchStartHandler: (c) => {
      if (c.touches.length !== 1) return;
      const l = c.touches[0];
      s.touchActive = !0, s.touchStartX = l.clientX, s.touchStartY = l.clientY;
    },
    touchEndHandler: (c) => {
      if (!s.touchActive) return;
      s.touchActive = !1;
      const l = c.changedTouches[0], f = l.clientX - s.touchStartX, d = l.clientY - s.touchStartY;
      Math.abs(f) < 30 || Math.abs(f) < Math.abs(d) || (f > 0 ? h(s) : A(s));
    }
  };
  if (t.setAttribute("role", "region"), t.setAttribute("aria-roledescription", "stage"), i.length > 0 && t.setAttribute("aria-live", "polite"), g(s, e.startIndex), vt(s), M(s), e.navMode === "auto" && r.length === 0 && i.length > 1) {
    const c = document.createElement("div");
    c.className = "cdw-stage-nav", i.forEach((l, f) => {
      const d = document.createElement("button");
      d.type = "button", d.className = "cdw-stage-indicator", d.setAttribute("data-cdw-stage-go", String(f)), d.setAttribute("aria-label", `Ir para o slide ${f + 1}`), c.appendChild(d), s.navButtons.push(d);
    }), t.appendChild(c), z(s);
  }
  C.set(t, s);
}
function Lt(t) {
  wt(t);
}
const P = "data-cdw-fw-initialized", St = {
  childList: !0,
  subtree: !0
}, Ht = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: st
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: dt
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: Lt
  }
];
function Ot(t) {
  return t ?? document;
}
function U(t) {
  const e = t.getAttribute(P);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function It(t, e) {
  const n = U(t);
  n.has(e) || (n.add(e), t.setAttribute(P, Array.from(n).join(" ")));
}
function Tt(t, e) {
  return !U(t).has(e);
}
function Nt(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function X(t) {
  const e = Ot(t);
  for (const n of Ht) {
    const i = Nt(e, n.selector);
    for (const r of i)
      if (Tt(r, n.name))
        try {
          n.bind(r), It(r, n.name);
        } catch (o) {
          console.warn(`cdw-fw init issue: ${n.name}`, o);
        }
  }
}
function kt() {
  if (typeof MutationObserver > "u") return;
  const t = document.body;
  if (!t) return;
  new MutationObserver((n) => {
    for (const i of n)
      i.addedNodes.forEach((r) => {
        r instanceof HTMLElement && X(r);
      });
  }).observe(t, St);
}
function _() {
  X(document), kt();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => _(), { once: !0 }) : _());
const xt = "0.1.0";
export {
  xt as CDW_FW_VERSION
};
