const ye = ".cdw-accordion-item", M = ".cdw-accordion-trigger", we = ".cdw-accordion-panel", L = /* @__PURE__ */ new WeakMap();
let B = 0;
function D(e) {
  return B += 1, `${e}-${B}`;
}
function $(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function Ee(e, t) {
  return e === "multiple" ? "multiple" : t;
}
function ve(e, t) {
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
function te(e) {
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
function he(e, t) {
  const n = Ee(e.getAttribute("data-mode"), "single"), o = $(
    e.getAttribute("data-collapsible"),
    !1
  ), r = $(e.getAttribute("data-animate"), !0), i = ve(e.getAttribute("data-icon"), "chevron"), s = te(
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
function Ae(e, t) {
  return e.getAttribute("data-cdw-accordion-item") || e.id || String(t);
}
function Le(e, t) {
  if (typeof t == "number")
    return e.index === t;
  if (t.startsWith("id:")) {
    const n = t.slice(3);
    return e.key === n || e.item.id === n;
  }
  return e.key === t;
}
function N(e, t, n) {
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
function q(e, t) {
  e.trigger.setAttribute("aria-expanded", t ? "true" : "false"), e.panel.setAttribute("aria-hidden", t ? "false" : "true");
}
function ne(e, t, n) {
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
function re(e, t) {
  t.item.classList.contains("is-open") && (t.item.classList.remove("is-open"), q(t, !1), N(t.panel, !1, e.options.animate), ne(e.container, "cdw:accordion:close", t));
}
function Se(e, t) {
  t.disabled || t.item.classList.contains("is-open") || (e.options.mode === "single" && e.items.forEach((n) => {
    n !== t && re(e, n);
  }), t.item.classList.add("is-open"), q(t, !0), N(t.panel, !0, e.options.animate), ne(e.container, "cdw:accordion:open", t));
}
function oe(e, t) {
  if (t.disabled) return;
  if (t.item.classList.contains("is-open")) {
    if (e.options.mode === "single" && !e.options.collapsible)
      return;
    re(e, t);
    return;
  }
  Se(e, t);
}
function _e(e) {
  return Array.from(e.querySelectorAll(ye)).map((n, o) => {
    const r = n.querySelector(M), i = n.querySelector(we);
    if (!r || !i) return null;
    r.id || (r.id = D("cdw-accordion-trigger")), i.id || (i.id = D("cdw-accordion-panel")), r.setAttribute("aria-controls", i.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", r.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: i,
      index: o,
      key: Ae(n, o),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function xe(e) {
  const t = te(e.options.defaultOpen), n = t.length > 0;
  let o = 0;
  e.items.forEach((r) => {
    const i = n ? t.some((a) => Le(r, a)) : r.item.classList.contains("is-open");
    e.options.mode === "single" && o > 0 && i && r.item.classList.remove("is-open");
    const s = i && !r.disabled;
    s ? (r.item.classList.add("is-open"), o += 1) : r.item.classList.remove("is-open"), q(r, s), N(r.panel, s, e.options.animate);
  });
}
function Te(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(M);
  if (!o || !e.triggerMap.has(o) || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled"))
    return;
  const r = e.triggerMap.get(o);
  r && oe(e, r);
}
function Oe(e, t) {
  const n = t.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(M);
  if (!o || !e.triggerMap.has(o)) return;
  const r = e.items.filter((a) => !a.disabled).map((a) => a.trigger), i = r.indexOf(o);
  if (i === -1) return;
  const s = (a) => {
    const u = r[a];
    u && u.focus();
  };
  switch (t.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      t.preventDefault(), oe(e, e.triggerMap.get(o));
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
function ke(e) {
  e.options.animate && e.items.forEach((t) => {
    t.item.classList.contains("is-open") && (t.panel.style.maxHeight = `${t.panel.scrollHeight}px`);
  });
}
function Ce(e, t) {
  L.has(e) && He(e);
  const n = he(e);
  e.setAttribute("data-icon", n.icon), e.setAttribute("data-animate", n.animate ? "true" : "false");
  const o = _e(e), r = /* @__PURE__ */ new Map();
  o.forEach((s) => r.set(s.trigger, s));
  const i = {
    container: e,
    options: n,
    items: o,
    triggerMap: r,
    clickHandler: (s) => Te(i, s),
    keyHandler: (s) => Oe(i, s),
    resizeHandler: () => ke(i)
  };
  e.addEventListener("click", i.clickHandler), e.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), xe(i), L.set(e, i);
}
function He(e) {
  const t = L.get(e);
  t && (e.removeEventListener("click", t.clickHandler), e.removeEventListener("keydown", t.keyHandler), window.removeEventListener("resize", t.resizeHandler), t.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), L.delete(e));
}
function Ie(e) {
  Ce(e);
}
const Me = "[data-cdw-alert-close]", Ne = "data-autoclose";
function qe(e) {
  if (!e) return null;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : null;
}
function P(e) {
  e.classList.contains("is-hiding") || (e.classList.add("is-hiding"), window.setTimeout(() => {
    e.remove();
  }, 200));
}
function Re(e) {
  const t = e.querySelector(Me);
  t && t.addEventListener("click", () => P(e));
  const n = qe(e.getAttribute(Ne));
  n && window.setTimeout(() => P(e), n);
}
function Be(e) {
  Re(e);
}
const De = "[data-cdw-gallery]", se = "[data-cdw-gallery-item], .cdw-gallery__item", ie = ".cdw-gallery__media", $e = ".cdw-gallery__label", Pe = "[data-cdw-gallery-product]";
let m = null;
function Ge(e) {
  return e ? Array.from(e.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function ze() {
  if (m) return m;
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
      s.root.classList.contains("is-open") && (a.key === "Escape" && T(), s.controlsEnabled && a.key === "ArrowLeft" && w(s.index - 1), s.controlsEnabled && a.key === "ArrowRight" && w(s.index + 1));
    }
  };
  return e.addEventListener("click", (a) => {
    const u = a.target;
    if (u) {
      if (u.closest("[data-cdw-gallery-close]")) {
        T();
        return;
      }
      if (u.closest("[data-cdw-gallery-prev]")) {
        w(s.index - 1);
        return;
      }
      u.closest("[data-cdw-gallery-next]") && w(s.index + 1);
    }
  }), n.addEventListener("click", () => {
    const a = Date.now();
    a - s.lastTap < 280 && s.root.classList.toggle("is-zoomed"), s.lastTap = a;
  }), i.forEach((a) => {
    a.addEventListener("click", () => T());
  }), document.addEventListener("keydown", s.keyHandler), m = s, s;
}
function Fe(e, t) {
  e.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), t === "immersive" ? e.classList.add("cdw-gallery-focus--immersive") : e.classList.add("cdw-gallery-focus--clean");
}
function T() {
  m && (m.root.classList.remove("is-open", "is-zoomed"), m.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function w(e) {
  if (!m) return;
  const t = m, n = t.items.length;
  if (!n) return;
  const o = (e + n) % n, r = t.items[o], i = r.querySelector(ie), s = r.querySelector($e)?.textContent?.trim() ?? "Image", a = Ge(i);
  t.media.className = `cdw-gallery-focus__media ${a}`, t.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${s}</span>`, t.index = o;
}
function Ue(e, t, n) {
  const o = ze(), r = Array.from(e.querySelectorAll(se));
  o.items = r, o.controlsEnabled = n && r.length > 1, o.prev.style.display = o.controlsEnabled ? "block" : "none", o.next.style.display = o.controlsEnabled ? "block" : "none", Fe(o.root, e.getAttribute("data-cdw-gallery-focus")), o.root.classList.add("is-open"), o.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const i = Math.max(0, r.indexOf(t));
  w(i);
}
function We(e, t) {
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
function A(e, t, n, o) {
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
function Ye(e) {
  const t = e.querySelector(".cdw-gallery__product");
  if (!t) return;
  const n = t.querySelector(".cdw-gallery__product-main"), o = n?.querySelector(".cdw-gallery__media"), r = n?.querySelector(".cdw-gallery__label"), i = n?.querySelector(".cdw-gallery__media img"), s = t.querySelector(".cdw-gallery__product-info"), a = s?.querySelector(".cdw-gallery__product-info-title"), u = s?.querySelector(".cdw-gallery__product-info-desc"), c = s?.querySelector(".cdw-gallery__product-info-meta"), l = Array.from(
    t.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !o || !l.length) return;
  const f = (d) => {
    l.forEach((y) => y.classList.remove("is-active")), d.classList.add("is-active");
    const p = d.getAttribute("data-label") ?? "Product", S = d.getAttribute("data-title") ?? p, v = d.getAttribute("data-desc") ?? "", R = d.getAttribute("data-meta") ?? "", me = d.getAttribute("data-aspect") ?? "cdw-gallery__media--square", _ = d.getAttribute("data-src"), be = d.getAttribute("data-alt") ?? p;
    o.className = `cdw-gallery__media ${me}`;
    const x = () => {
      r && (r.textContent = p), a && (a.textContent = S), u && (u.textContent = v), c && (c.innerHTML = R ? R.split("|").map((y) => `<span>${y.trim()}</span>`).join("") : ""), s && s.classList.remove("is-loading");
    };
    if (s && s.classList.add("is-loading"), i && _) {
      const y = new URL(_, window.location.href).href;
      if (i.src === y) {
        A(o, i, x);
        return;
      }
      A(o, i, x, !0), i.src = _, i.alt = be;
    } else
      A(o, i ?? null, x);
  };
  l.forEach((d) => {
    d.addEventListener("click", (p) => {
      p.target instanceof HTMLImageElement && f(d);
    });
  });
  const g = l.find((d) => d.classList.contains("is-active")) ?? l[0];
  f(g);
}
function Xe(e) {
  if (!e.matches(De)) return;
  if (e.matches(Pe)) {
    Ye(e);
    return;
  }
  const t = e.querySelector(".cdw-gallery__list");
  We(e, t), e.addEventListener("click", (n) => {
    const o = n.target;
    if (!o) return;
    const r = o.closest(se);
    if (!r) return;
    const i = r.querySelector(ie), s = i?.querySelector("img") ?? null;
    i && A(i, s);
    const a = e.getAttribute("data-cdw-gallery-controls") === "true";
    Ue(e, r, a);
  });
}
const Ke = "[data-cdw-modal]", Ve = "[data-cdw-modal-open]", je = "[data-cdw-modal-close]", ae = "cdw-modal-open", b = [], G = /* @__PURE__ */ new WeakMap();
let z = !1;
function Ze(e) {
  const t = e.replace(/^#/, "");
  return document.getElementById(t);
}
function Je(e) {
  return e ? e.startsWith("#") ? Ze(e) : document.querySelector(e) : null;
}
function ce(e) {
  return e.classList.contains("is-open");
}
function H(e) {
  if (!ce(e.root)) return;
  e.root.classList.remove("is-open"), e.root.setAttribute("aria-hidden", "true");
  const t = b.findIndex((n) => n.root === e.root);
  t >= 0 && b.splice(t, 1), b.length === 0 && document.body.classList.remove(ae), e.lastActive?.focus();
}
function Qe(e) {
  ce(e.root) || (e.lastActive = document.activeElement, e.root.classList.add("is-open"), e.root.setAttribute("aria-hidden", "false"), b.find((t) => t.root === e.root) || b.push(e), document.body.classList.add(ae), e.dialog.focus());
}
function le(e) {
  const t = G.get(e);
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
      if (s.closest(je)) {
        H(r);
        return;
      }
      o && s.classList.contains("cdw-modal__backdrop") && H(r);
    }
  }), G.set(e, r), r;
}
function et(e) {
  const t = e.target;
  if (!t) return;
  const n = t.closest(Ve);
  if (!n) return;
  const o = n.getAttribute("data-cdw-modal-open"), r = Je(o);
  if (!r) return;
  e.preventDefault();
  const i = le(r);
  Qe(i);
}
function tt(e) {
  if (e.key !== "Escape") return;
  const t = b[b.length - 1];
  t && H(t);
}
function nt() {
  z || (document.addEventListener("click", et), document.addEventListener("keydown", tt), z = !0);
}
function rt(e) {
  e.matches(Ke) && (nt(), le(e));
}
const ot = ".cdw-navbar-panel", F = "[data-cdw-navbar-toggle]", U = "[data-cdw-navbar-close]", W = "[data-cdw-navbar-sub]", Y = /* @__PURE__ */ new WeakMap();
let X = !1;
function st() {
  if (X || typeof window > "u") return;
  const e = window.matchMedia?.("(pointer: coarse)").matches, t = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (e || t || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), X = !0);
}
function it(e, t) {
  if (e.id) return e.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return e.id = n, t.setAttribute("data-cdw-navbar-panel", n), n;
}
function de(e, t) {
  e && e.setAttribute("aria-expanded", t ? "true" : "false");
}
function at(e) {
  e.container.classList.add("is-open"), de(e.toggle, !0);
}
function I(e) {
  e.container.classList.remove("is-open"), de(e.toggle, !1);
}
function ct(e) {
  e.container.classList.contains("is-open") ? I(e) : at(e);
}
function lt(e) {
  const t = e.closest(".cdw-navbar-item");
  if (!t) return;
  const n = t.classList.toggle("is-open");
  e.setAttribute("aria-expanded", n ? "true" : "false");
}
function dt(e) {
  if (Y.has(e)) return;
  st();
  const t = e.querySelector(ot), n = e.querySelector(F), o = e.querySelector(".cdw-navbar-overlay"), r = Array.from(e.querySelectorAll(U)), i = Array.from(e.querySelectorAll(W));
  if (t) {
    const a = it(t, e);
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
      a.key === "Escape" && I(s);
    },
    clickHandler: (a) => {
      const u = a.target;
      if (!(u instanceof Element)) return;
      if (u.closest(F)) {
        ct(s);
        return;
      }
      if (u.closest(U) || u.closest(".cdw-navbar-overlay")) {
        I(s);
        return;
      }
      const l = u.closest(W);
      l && (a.preventDefault(), lt(l));
    }
  };
  e.addEventListener("click", s.clickHandler), e.addEventListener("keydown", s.keyHandler), Y.set(e, s);
}
function ut(e) {
  dt(e);
}
const ft = ".cdw-stage-track", gt = ".cdw-stage-slide", K = "[data-cdw-stage-prev]", V = "[data-cdw-stage-next]", j = "[data-cdw-stage-go]", pt = "[data-cdw-stage-counter]", mt = "[data-cdw-stage-progress]", Z = /* @__PURE__ */ new WeakMap();
function h(e, t) {
  return e === null ? t : e === "" ? !0 : e === "true";
}
function J(e, t) {
  if (!e) return t;
  const n = Number.parseInt(e, 10);
  return Number.isFinite(n) ? n : t;
}
function bt(e) {
  const t = e.getAttribute("data-autoplay"), n = e.getAttribute("data-interval"), o = h(e.getAttribute("data-pause-on-hover"), !0), r = h(e.getAttribute("data-loop"), !0), i = h(e.getAttribute("data-keyboard"), !0), s = h(e.getAttribute("data-swipe"), !0), a = J(e.getAttribute("data-start"), 0), u = e.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let c = !1, l = J(n, 5200);
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
    keyboard: i,
    swipe: s,
    startIndex: a,
    navMode: u
  };
}
function yt(e) {
  const t = e.querySelector(ft) || e, n = Array.from(t.querySelectorAll(gt));
  return { track: t, slides: n };
}
function wt(e, t) {
  const n = e.slides.length;
  return n === 0 ? 0 : e.options.loop ? (t + n) % n : Math.max(0, Math.min(n - 1, t));
}
function Et(e) {
  const t = e.slides.length;
  e.slides.forEach((n, o) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${o + 1} de ${t}`), n.setAttribute("aria-hidden", o === e.current ? "false" : "true");
  });
}
function ue(e) {
  const t = e.slides.length;
  if (e.navButtons.forEach((n, o) => {
    o === e.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), e.counterEl && (e.counterEl.textContent = `${e.current + 1}/${t}`), e.progressEl) {
    const n = t > 0 ? (e.current + 1) / t * 100 : 0;
    e.progressEl.style.width = `${n}%`;
  }
}
function E(e, t) {
  const n = e.slides.length;
  if (n === 0) return;
  const o = wt(e, t), r = e.options.loop ? (o - 1 + n) % n : o - 1, i = e.options.loop ? (o + 1) % n : o + 1;
  e.slides.forEach((s, a) => {
    s.classList.toggle("is-active", a === o), s.classList.toggle("is-prev", r >= 0 && a === r), s.classList.toggle("is-next", i < n && a === i);
  }), e.current = o, Et(e), ue(e);
}
function Q(e) {
  !e.options.autoplay || e.slides.length <= 1 || (e.timerId && window.clearInterval(e.timerId), e.timerId = window.setInterval(() => {
    E(e, e.current + 1);
  }, e.options.interval));
}
function vt(e) {
  e.timerId && (window.clearInterval(e.timerId), e.timerId = null);
}
function O(e) {
  E(e, e.current - 1);
}
function k(e) {
  E(e, e.current + 1);
}
function C(e, t) {
  E(e, t);
}
function ht(e) {
  e.options.pauseOnHover && (e.container.addEventListener("mouseenter", e.enterHandler), e.container.addEventListener("mouseleave", e.leaveHandler), e.container.addEventListener("focusin", e.enterHandler), e.container.addEventListener("focusout", e.leaveHandler)), e.container.addEventListener("click", e.clickHandler), e.options.keyboard && (e.container.setAttribute("tabindex", "0"), e.container.addEventListener("keydown", e.keyHandler)), e.options.swipe && (e.container.addEventListener("touchstart", e.touchStartHandler, { passive: !0 }), e.container.addEventListener("touchend", e.touchEndHandler));
}
function At(e) {
  if (Z.has(e)) return;
  const t = bt(e), { track: n, slides: o } = yt(e), r = Array.from(e.querySelectorAll(j)), i = Array.from(e.querySelectorAll(K)), s = Array.from(e.querySelectorAll(V)), a = e.querySelector(pt), u = e.querySelector(mt), c = {
    container: e,
    track: n,
    slides: o,
    navButtons: r,
    prevButtons: i,
    nextButtons: s,
    counterEl: a,
    progressEl: u,
    options: t,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (l) => {
      l.key === "ArrowLeft" ? (l.preventDefault(), O(c)) : l.key === "ArrowRight" ? (l.preventDefault(), k(c)) : l.key === "Home" ? (l.preventDefault(), C(c, 0)) : l.key === "End" && (l.preventDefault(), C(c, c.slides.length - 1));
    },
    clickHandler: (l) => {
      const f = l.target;
      if (!(f instanceof Element)) return;
      const g = f.closest(K), d = f.closest(V);
      if (g) {
        O(c);
        return;
      }
      if (d) {
        k(c);
        return;
      }
      const p = f.closest(j);
      if (p) {
        const S = p.getAttribute("data-cdw-stage-go"), v = Number.parseInt(S || "", 10);
        Number.isFinite(v) && C(c, v);
      }
    },
    enterHandler: () => {
      c.hoverCount += 1, vt(c);
    },
    leaveHandler: () => {
      c.hoverCount = Math.max(0, c.hoverCount - 1), c.hoverCount === 0 && Q(c);
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
      Math.abs(g) < 30 || Math.abs(g) < Math.abs(d) || (g > 0 ? O(c) : k(c));
    }
  };
  if (e.setAttribute("role", "region"), e.setAttribute("aria-roledescription", "stage"), o.length > 0 && e.setAttribute("aria-live", "polite"), E(c, t.startIndex), ht(c), Q(c), t.navMode === "auto" && r.length === 0 && o.length > 1) {
    const l = document.createElement("div");
    l.className = "cdw-stage-nav", o.forEach((f, g) => {
      const d = document.createElement("button");
      d.type = "button", d.className = "cdw-stage-indicator", d.setAttribute("data-cdw-stage-go", String(g)), d.setAttribute("aria-label", `Ir para o slide ${g + 1}`), l.appendChild(d), c.navButtons.push(d);
    }), e.appendChild(l), ue(c);
  }
  Z.set(e, c);
}
function Lt(e) {
  At(e);
}
const fe = "data-cdw-fw-initialized", St = {
  childList: !0,
  subtree: !0
}, _t = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: Ie
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: Be
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: Xe
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: rt
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: ut
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: Lt
  }
];
function xt(e) {
  return e ?? document;
}
function ge(e) {
  const t = e.getAttribute(fe);
  return t ? new Set(t.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function Tt(e, t) {
  const n = ge(e);
  n.has(t) || (n.add(t), e.setAttribute(fe, Array.from(n).join(" ")));
}
function Ot(e, t) {
  return !ge(e).has(t);
}
function kt(e, t) {
  const n = Array.from(e.querySelectorAll(t));
  return e instanceof HTMLElement && e.matches(t) && n.unshift(e), n;
}
function pe(e) {
  const t = xt(e);
  for (const n of _t) {
    const o = kt(t, n.selector);
    for (const r of o)
      if (Ot(r, n.name))
        try {
          n.bind(r), Tt(r, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function Ct() {
  if (typeof MutationObserver > "u") return;
  const e = document.body;
  if (!e) return;
  new MutationObserver((n) => {
    for (const o of n)
      o.addedNodes.forEach((r) => {
        r instanceof HTMLElement && pe(r);
      });
  }).observe(e, St);
}
function ee() {
  pe(document), Ct();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => ee(), { once: !0 }) : ee());
const Ht = "0.1.0";
export {
  Ht as CDW_FW_VERSION
};
