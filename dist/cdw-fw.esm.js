const de = ".cdw-accordion-item", H = ".cdw-accordion-trigger", ue = ".cdw-accordion-panel", A = /* @__PURE__ */ new WeakMap();
let M = 0;
function R(e) {
  return M += 1, `${e}-${M}`;
}
function $(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function fe(e, t) {
  return e === "multiple" ? "multiple" : t;
}
function ge(e, t) {
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
function Z(e) {
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
function pe(e, t) {
  const n = fe(e.getAttribute("data-mode"), "single"), o = $(
    e.getAttribute("data-collapsible"),
    !1
  ), r = $(e.getAttribute("data-animate"), !0), a = ge(e.getAttribute("data-icon"), "chevron"), s = Z(
    e.getAttribute("data-default-open")
  );
  return {
    mode: n,
    collapsible: o,
    defaultOpen: s,
    animate: r,
    icon: a
  };
}
function ye(e, t) {
  return e.getAttribute("data-cdw-accordion-item") || e.id || String(t);
}
function me(e, t) {
  if (typeof t == "number")
    return e.index === t;
  if (t.startsWith("id:")) {
    const n = t.slice(3);
    return e.key === n || e.item.id === n;
  }
  return e.key === t;
}
function I(e, t, n) {
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
function N(e, t) {
  e.trigger.setAttribute("aria-expanded", t ? "true" : "false"), e.panel.setAttribute("aria-hidden", t ? "false" : "true");
}
function J(e, t, n) {
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
function Q(e, t) {
  t.item.classList.contains("is-open") && (t.item.classList.remove("is-open"), N(t, !1), I(t.panel, !1, e.options.animate), J(e.container, "cdw:accordion:close", t));
}
function be(e, t) {
  t.disabled || t.item.classList.contains("is-open") || (e.options.mode === "single" && e.items.forEach((n) => {
    n !== t && Q(e, n);
  }), t.item.classList.add("is-open"), N(t, !0), I(t.panel, !0, e.options.animate), J(e.container, "cdw:accordion:open", t));
}
function ee(e, t) {
  if (t.disabled) return;
  if (t.item.classList.contains("is-open")) {
    if (e.options.mode === "single" && !e.options.collapsible)
      return;
    Q(e, t);
    return;
  }
  be(e, t);
}
function we(e) {
  return Array.from(e.querySelectorAll(de)).map((n, o) => {
    const r = n.querySelector(H), a = n.querySelector(ue);
    if (!r || !a) return null;
    r.id || (r.id = R("cdw-accordion-trigger")), a.id || (a.id = R("cdw-accordion-panel")), r.setAttribute("aria-controls", a.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), a.setAttribute("role", "region"), a.setAttribute("aria-labelledby", r.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: a,
      index: o,
      key: ye(n, o),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function ve(e) {
  const t = Z(e.options.defaultOpen), n = t.length > 0;
  let o = 0;
  e.items.forEach((r) => {
    const a = n ? t.some((i) => me(r, i)) : r.item.classList.contains("is-open");
    e.options.mode === "single" && o > 0 && a && r.item.classList.remove("is-open");
    const s = a && !r.disabled;
    s ? (r.item.classList.add("is-open"), o += 1) : r.item.classList.remove("is-open"), N(r, s), I(r.panel, s, e.options.animate);
  });
}
function Ee(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(H);
  if (!o || !e.triggerMap.has(o) || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled"))
    return;
  const r = e.triggerMap.get(o);
  r && ee(e, r);
}
function he(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(H);
  if (!o || !e.triggerMap.has(o)) return;
  const r = e.items.filter((i) => !i.disabled).map((i) => i.trigger), a = r.indexOf(o);
  if (a === -1) return;
  const s = (i) => {
    const u = r[i];
    u && u.focus();
  };
  switch (t.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      t.preventDefault(), ee(e, e.triggerMap.get(o));
      break;
    case "ArrowDown":
      t.preventDefault(), s((a + 1) % r.length);
      break;
    case "ArrowUp":
      t.preventDefault(), s((a - 1 + r.length) % r.length);
      break;
    case "Home":
      t.preventDefault(), s(0);
      break;
    case "End":
      t.preventDefault(), s(r.length - 1);
      break;
  }
}
function Ae(e) {
  e.options.animate && e.items.forEach((t) => {
    t.item.classList.contains("is-open") && (t.panel.style.maxHeight = `${t.panel.scrollHeight}px`);
  });
}
function Le(e, t) {
  A.has(e) && Se(e);
  const n = pe(e);
  e.setAttribute("data-icon", n.icon), e.setAttribute("data-animate", n.animate ? "true" : "false");
  const o = we(e), r = /* @__PURE__ */ new Map();
  o.forEach((s) => r.set(s.trigger, s));
  const a = {
    container: e,
    options: n,
    items: o,
    triggerMap: r,
    clickHandler: (s) => Ee(a, s),
    keyHandler: (s) => he(a, s),
    resizeHandler: () => Ae(a)
  };
  e.addEventListener("click", a.clickHandler), e.addEventListener("keydown", a.keyHandler), window.addEventListener("resize", a.resizeHandler), ve(a), A.set(e, a);
}
function Se(e) {
  const t = A.get(e);
  t && (e.removeEventListener("click", t.clickHandler), e.removeEventListener("keydown", t.keyHandler), window.removeEventListener("resize", t.resizeHandler), t.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), A.delete(e));
}
function _e(e) {
  Le(e);
}
const xe = "[data-cdw-alert-close]", Te = "data-autoclose";
function ke(e) {
  if (!e) return null;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : null;
}
function B(e) {
  e.classList.contains("is-hiding") || (e.classList.add("is-hiding"), window.setTimeout(() => {
    e.remove();
  }, 200));
}
function Oe(e) {
  const t = e.querySelector(xe);
  t && t.addEventListener("click", () => B(e));
  const n = ke(e.getAttribute(Te));
  n && window.setTimeout(() => B(e), n);
}
function Ce(e) {
  Oe(e);
}
const He = "[data-cdw-gallery]", te = "[data-cdw-gallery-item], .cdw-gallery__item", ne = ".cdw-gallery__media", Ie = ".cdw-gallery__label", Ne = "[data-cdw-gallery-product]";
let y = null;
function qe(e) {
  return e ? Array.from(e.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function Me() {
  if (y) return y;
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
  const t = e.querySelector(".cdw-gallery-focus__frame"), n = e.querySelector(".cdw-gallery-focus__media"), o = e.querySelector("[data-cdw-gallery-prev]"), r = e.querySelector("[data-cdw-gallery-next]"), a = Array.from(e.querySelectorAll("[data-cdw-gallery-close]")), s = {
    root: e,
    frame: t,
    media: n,
    prev: o,
    next: r,
    closeButtons: a,
    items: [],
    index: 0,
    controlsEnabled: !1,
    lastTap: 0,
    keyHandler: (i) => {
      s.root.classList.contains("is-open") && (i.key === "Escape" && x(), s.controlsEnabled && i.key === "ArrowLeft" && b(s.index - 1), s.controlsEnabled && i.key === "ArrowRight" && b(s.index + 1));
    }
  };
  return e.addEventListener("click", (i) => {
    const u = i.target;
    if (u) {
      if (u.closest("[data-cdw-gallery-close]")) {
        x();
        return;
      }
      if (u.closest("[data-cdw-gallery-prev]")) {
        b(s.index - 1);
        return;
      }
      u.closest("[data-cdw-gallery-next]") && b(s.index + 1);
    }
  }), n.addEventListener("click", () => {
    const i = Date.now();
    i - s.lastTap < 280 && s.root.classList.toggle("is-zoomed"), s.lastTap = i;
  }), a.forEach((i) => {
    i.addEventListener("click", () => x());
  }), document.addEventListener("keydown", s.keyHandler), y = s, s;
}
function Re(e, t) {
  e.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), t === "immersive" ? e.classList.add("cdw-gallery-focus--immersive") : e.classList.add("cdw-gallery-focus--clean");
}
function x() {
  y && (y.root.classList.remove("is-open", "is-zoomed"), y.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function b(e) {
  if (!y) return;
  const t = y, n = t.items.length;
  if (!n) return;
  const o = (e + n) % n, r = t.items[o], a = r.querySelector(ne), s = r.querySelector(Ie)?.textContent?.trim() ?? "Image", i = qe(a);
  t.media.className = `cdw-gallery-focus__media ${i}`, t.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${s}</span>`, t.index = o;
}
function $e(e, t, n) {
  const o = Me(), r = Array.from(e.querySelectorAll(te));
  o.items = r, o.controlsEnabled = n && r.length > 1, o.prev.style.display = o.controlsEnabled ? "block" : "none", o.next.style.display = o.controlsEnabled ? "block" : "none", Re(o.root, e.getAttribute("data-cdw-gallery-focus")), o.root.classList.add("is-open"), o.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const a = Math.max(0, r.indexOf(t));
  b(a);
}
function Be(e, t) {
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
function h(e, t, n, o) {
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
function De(e) {
  const t = e.querySelector(".cdw-gallery__product");
  if (!t) return;
  const n = t.querySelector(".cdw-gallery__product-main"), o = n?.querySelector(".cdw-gallery__media"), r = n?.querySelector(".cdw-gallery__label"), a = n?.querySelector(".cdw-gallery__media img"), s = t.querySelector(".cdw-gallery__product-info"), i = s?.querySelector(".cdw-gallery__product-info-title"), u = s?.querySelector(".cdw-gallery__product-info-desc"), c = s?.querySelector(".cdw-gallery__product-info-meta"), l = Array.from(
    t.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !o || !l.length) return;
  const f = (d) => {
    l.forEach((m) => m.classList.remove("is-active")), d.classList.add("is-active");
    const p = d.getAttribute("data-label") ?? "Product", L = d.getAttribute("data-title") ?? p, v = d.getAttribute("data-desc") ?? "", q = d.getAttribute("data-meta") ?? "", ce = d.getAttribute("data-aspect") ?? "cdw-gallery__media--square", S = d.getAttribute("data-src"), le = d.getAttribute("data-alt") ?? p;
    o.className = `cdw-gallery__media ${ce}`;
    const _ = () => {
      r && (r.textContent = p), i && (i.textContent = L), u && (u.textContent = v), c && (c.innerHTML = q ? q.split("|").map((m) => `<span>${m.trim()}</span>`).join("") : ""), s && s.classList.remove("is-loading");
    };
    if (s && s.classList.add("is-loading"), a && S) {
      const m = new URL(S, window.location.href).href;
      if (a.src === m) {
        h(o, a, _);
        return;
      }
      h(o, a, _, !0), a.src = S, a.alt = le;
    } else
      h(o, a ?? null, _);
  };
  l.forEach((d) => {
    d.addEventListener("click", (p) => {
      p.target instanceof HTMLImageElement && f(d);
    });
  });
  const g = l.find((d) => d.classList.contains("is-active")) ?? l[0];
  f(g);
}
function Pe(e) {
  if (!e.matches(He)) return;
  if (e.matches(Ne)) {
    De(e);
    return;
  }
  const t = e.querySelector(".cdw-gallery__list");
  Be(e, t), e.addEventListener("click", (n) => {
    const o = n.target;
    if (!o) return;
    const r = o.closest(te);
    if (!r) return;
    const a = r.querySelector(ne), s = a?.querySelector("img") ?? null;
    a && h(a, s);
    const i = e.getAttribute("data-cdw-gallery-controls") === "true";
    $e(e, r, i);
  });
}
const Ge = ".cdw-navbar-panel", D = "[data-cdw-navbar-toggle]", P = "[data-cdw-navbar-close]", G = "[data-cdw-navbar-sub]", z = /* @__PURE__ */ new WeakMap();
let F = !1;
function ze() {
  if (F || typeof window > "u") return;
  const e = window.matchMedia?.("(pointer: coarse)").matches, t = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (e || t || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), F = !0);
}
function Fe(e, t) {
  if (e.id) return e.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return e.id = n, t.setAttribute("data-cdw-navbar-panel", n), n;
}
function re(e, t) {
  e && e.setAttribute("aria-expanded", t ? "true" : "false");
}
function Ue(e) {
  e.container.classList.add("is-open"), re(e.toggle, !0);
}
function C(e) {
  e.container.classList.remove("is-open"), re(e.toggle, !1);
}
function We(e) {
  e.container.classList.contains("is-open") ? C(e) : Ue(e);
}
function Xe(e) {
  const t = e.closest(".cdw-navbar-item");
  if (!t) return;
  const n = t.classList.toggle("is-open");
  e.setAttribute("aria-expanded", n ? "true" : "false");
}
function Ye(e) {
  if (z.has(e)) return;
  ze();
  const t = e.querySelector(Ge), n = e.querySelector(D), o = e.querySelector(".cdw-navbar-overlay"), r = Array.from(e.querySelectorAll(P)), a = Array.from(e.querySelectorAll(G));
  if (t) {
    const i = Fe(t, e);
    n && (n.setAttribute("aria-controls", i), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const s = {
    container: e,
    panel: t,
    toggle: n,
    overlay: o,
    closeButtons: r,
    subToggles: a,
    keyHandler: (i) => {
      i.key === "Escape" && C(s);
    },
    clickHandler: (i) => {
      const u = i.target;
      if (!(u instanceof Element)) return;
      if (u.closest(D)) {
        We(s);
        return;
      }
      if (u.closest(P) || u.closest(".cdw-navbar-overlay")) {
        C(s);
        return;
      }
      const l = u.closest(G);
      l && (i.preventDefault(), Xe(l));
    }
  };
  e.addEventListener("click", s.clickHandler), e.addEventListener("keydown", s.keyHandler), z.set(e, s);
}
function Ke(e) {
  Ye(e);
}
const Ve = ".cdw-stage-track", je = ".cdw-stage-slide", U = "[data-cdw-stage-prev]", W = "[data-cdw-stage-next]", X = "[data-cdw-stage-go]", Ze = "[data-cdw-stage-counter]", Je = "[data-cdw-stage-progress]", Y = /* @__PURE__ */ new WeakMap();
function E(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function K(e, t) {
  if (!e) return t;
  const n = Number.parseInt(e, 10);
  return Number.isFinite(n) ? n : t;
}
function Qe(e) {
  const t = e.getAttribute("data-autoplay"), n = e.getAttribute("data-interval"), o = E(e.getAttribute("data-pause-on-hover"), !0), r = E(e.getAttribute("data-loop"), !0), a = E(e.getAttribute("data-keyboard"), !0), s = E(e.getAttribute("data-swipe"), !0), i = K(e.getAttribute("data-start"), 0), u = e.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let c = !1, l = K(n, 5200);
  if (t !== null) {
    c = t === "" || t === "true";
    const f = Number.parseInt(t, 10);
    Number.isFinite(f) && (c = !0, l = f);
  }
  return {
    autoplay: c,
    interval: l,
    pauseOnHover: o,
    loop: r,
    keyboard: a,
    swipe: s,
    startIndex: i,
    navMode: u
  };
}
function et(e) {
  const t = e.querySelector(Ve) || e, n = Array.from(t.querySelectorAll(je));
  return { track: t, slides: n };
}
function tt(e, t) {
  const n = e.slides.length;
  return n === 0 ? 0 : e.options.loop ? (t + n) % n : Math.max(0, Math.min(n - 1, t));
}
function nt(e) {
  const t = e.slides.length;
  e.slides.forEach((n, o) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${o + 1} de ${t}`), n.setAttribute("aria-hidden", o === e.current ? "false" : "true");
  });
}
function oe(e) {
  const t = e.slides.length;
  if (e.navButtons.forEach((n, o) => {
    o === e.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), e.counterEl && (e.counterEl.textContent = `${e.current + 1}/${t}`), e.progressEl) {
    const n = t > 0 ? (e.current + 1) / t * 100 : 0;
    e.progressEl.style.width = `${n}%`;
  }
}
function w(e, t) {
  const n = e.slides.length;
  if (n === 0) return;
  const o = tt(e, t), r = e.options.loop ? (o - 1 + n) % n : o - 1, a = e.options.loop ? (o + 1) % n : o + 1;
  e.slides.forEach((s, i) => {
    s.classList.toggle("is-active", i === o), s.classList.toggle("is-prev", r >= 0 && i === r), s.classList.toggle("is-next", a < n && i === a);
  }), e.current = o, nt(e), oe(e);
}
function V(e) {
  !e.options.autoplay || e.slides.length <= 1 || (e.timerId && window.clearInterval(e.timerId), e.timerId = window.setInterval(() => {
    w(e, e.current + 1);
  }, e.options.interval));
}
function rt(e) {
  e.timerId && (window.clearInterval(e.timerId), e.timerId = null);
}
function T(e) {
  w(e, e.current - 1);
}
function k(e) {
  w(e, e.current + 1);
}
function O(e, t) {
  w(e, t);
}
function ot(e) {
  e.options.pauseOnHover && (e.container.addEventListener("mouseenter", e.enterHandler), e.container.addEventListener("mouseleave", e.leaveHandler), e.container.addEventListener("focusin", e.enterHandler), e.container.addEventListener("focusout", e.leaveHandler)), e.container.addEventListener("click", e.clickHandler), e.options.keyboard && (e.container.setAttribute("tabindex", "0"), e.container.addEventListener("keydown", e.keyHandler)), e.options.swipe && (e.container.addEventListener("touchstart", e.touchStartHandler, { passive: !0 }), e.container.addEventListener("touchend", e.touchEndHandler));
}
function st(e) {
  if (Y.has(e)) return;
  const t = Qe(e), { track: n, slides: o } = et(e), r = Array.from(e.querySelectorAll(X)), a = Array.from(e.querySelectorAll(U)), s = Array.from(e.querySelectorAll(W)), i = e.querySelector(Ze), u = e.querySelector(Je), c = {
    container: e,
    track: n,
    slides: o,
    navButtons: r,
    prevButtons: a,
    nextButtons: s,
    counterEl: i,
    progressEl: u,
    options: t,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (l) => {
      l.key === "ArrowLeft" ? (l.preventDefault(), T(c)) : l.key === "ArrowRight" ? (l.preventDefault(), k(c)) : l.key === "Home" ? (l.preventDefault(), O(c, 0)) : l.key === "End" && (l.preventDefault(), O(c, c.slides.length - 1));
    },
    clickHandler: (l) => {
      const f = l.target;
      if (!(f instanceof Element)) return;
      const g = f.closest(U), d = f.closest(W);
      if (g) {
        T(c);
        return;
      }
      if (d) {
        k(c);
        return;
      }
      const p = f.closest(X);
      if (p) {
        const L = p.getAttribute("data-cdw-stage-go"), v = Number.parseInt(L || "", 10);
        Number.isFinite(v) && O(c, v);
      }
    },
    enterHandler: () => {
      c.hoverCount += 1, rt(c);
    },
    leaveHandler: () => {
      c.hoverCount = Math.max(0, c.hoverCount - 1), c.hoverCount === 0 && V(c);
    },
    touchStartHandler: (l) => {
      if (l.touches.length !== 1) return;
      const f = l.touches[0];
      c.touchActive = !0, c.touchStartX = f.clientX, c.touchStartY = f.clientY;
    },
    touchEndHandler: (l) => {
      if (!c.touchActive) return;
      c.touchActive = !1;
      const f = l.changedTouches[0], g = f.clientX - c.touchStartX, d = f.clientY - c.touchStartY;
      Math.abs(g) < 30 || Math.abs(g) < Math.abs(d) || (g > 0 ? T(c) : k(c));
    }
  };
  if (e.setAttribute("role", "region"), e.setAttribute("aria-roledescription", "stage"), o.length > 0 && e.setAttribute("aria-live", "polite"), w(c, t.startIndex), ot(c), V(c), t.navMode === "auto" && r.length === 0 && o.length > 1) {
    const l = document.createElement("div");
    l.className = "cdw-stage-nav", o.forEach((f, g) => {
      const d = document.createElement("button");
      d.type = "button", d.className = "cdw-stage-indicator", d.setAttribute("data-cdw-stage-go", String(g)), d.setAttribute("aria-label", `Ir para o slide ${g + 1}`), l.appendChild(d), c.navButtons.push(d);
    }), e.appendChild(l), oe(c);
  }
  Y.set(e, c);
}
function at(e) {
  st(e);
}
const se = "data-cdw-fw-initialized", it = {
  childList: !0,
  subtree: !0
}, ct = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: _e
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: Ce
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: Pe
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: Ke
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: at
  }
];
function lt(e) {
  return e ?? document;
}
function ae(e) {
  const t = e.getAttribute(se);
  return t ? new Set(t.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function dt(e, t) {
  const n = ae(e);
  n.has(t) || (n.add(t), e.setAttribute(se, Array.from(n).join(" ")));
}
function ut(e, t) {
  return !ae(e).has(t);
}
function ft(e, t) {
  const n = Array.from(e.querySelectorAll(t));
  return e instanceof HTMLElement && e.matches(t) && n.unshift(e), n;
}
function ie(e) {
  const t = lt(e);
  for (const n of ct) {
    const o = ft(t, n.selector);
    for (const r of o)
      if (ut(r, n.name))
        try {
          n.bind(r), dt(r, n.name);
        } catch (a) {
          console.warn(`cdw-fw init issue: ${n.name}`, a);
        }
  }
}
function gt() {
  if (typeof MutationObserver > "u") return;
  const e = document.body;
  if (!e) return;
  new MutationObserver((n) => {
    for (const o of n)
      o.addedNodes.forEach((r) => {
        r instanceof HTMLElement && ie(r);
      });
  }).observe(e, it);
}
function j() {
  ie(document), gt();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => j(), { once: !0 }) : j());
const pt = "0.1.0";
export {
  pt as CDW_FW_VERSION
};
