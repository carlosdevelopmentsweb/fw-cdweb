const qt = ".cdw-accordion-item", R = ".cdw-accordion-trigger", Ht = ".cdw-accordion-panel", S = /* @__PURE__ */ new WeakMap();
let F = 0;
function W(t) {
  return F += 1, `${t}-${F}`;
}
function G(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function Rt(t, e) {
  return t === "multiple" ? "multiple" : e;
}
function It(t, e) {
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
function pt(t) {
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
function $t(t, e) {
  const n = Rt(t.getAttribute("data-mode"), "single"), o = G(
    t.getAttribute("data-collapsible"),
    !1
  ), r = G(t.getAttribute("data-animate"), !0), i = It(t.getAttribute("data-icon"), "chevron"), s = pt(
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
function Dt(t, e) {
  return t.getAttribute("data-cdw-accordion-item") || t.id || String(e);
}
function Bt(t, e) {
  if (typeof e == "number")
    return t.index === e;
  if (e.startsWith("id:")) {
    const n = e.slice(3);
    return t.key === n || t.item.id === n;
  }
  return t.key === e;
}
function I(t, e, n) {
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
function $(t, e) {
  t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), t.panel.setAttribute("aria-hidden", e ? "false" : "true");
}
function mt(t, e, n) {
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
function gt(t, e) {
  e.item.classList.contains("is-open") && (e.item.classList.remove("is-open"), $(e, !1), I(e.panel, !1, t.options.animate), mt(t.container, "cdw:accordion:close", e));
}
function zt(t, e) {
  e.disabled || e.item.classList.contains("is-open") || (t.options.mode === "single" && t.items.forEach((n) => {
    n !== e && gt(t, n);
  }), e.item.classList.add("is-open"), $(e, !0), I(e.panel, !0, t.options.animate), mt(t.container, "cdw:accordion:open", e));
}
function bt(t, e) {
  if (e.disabled) return;
  if (e.item.classList.contains("is-open")) {
    if (t.options.mode === "single" && !t.options.collapsible)
      return;
    gt(t, e);
    return;
  }
  zt(t, e);
}
function Pt(t) {
  return Array.from(t.querySelectorAll(qt)).map((n, o) => {
    const r = n.querySelector(R), i = n.querySelector(Ht);
    if (!r || !i) return null;
    r.id || (r.id = W("cdw-accordion-trigger")), i.id || (i.id = W("cdw-accordion-panel")), r.setAttribute("aria-controls", i.id), r.tagName === "BUTTON" && !r.getAttribute("type") && r.setAttribute("type", "button"), i.setAttribute("role", "region"), i.setAttribute("aria-labelledby", r.id);
    const s = n.classList.contains("is-disabled") || n.getAttribute("data-disabled") === "true" || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true";
    return s ? (n.classList.add("is-disabled"), r.setAttribute("aria-disabled", "true"), r.tagName === "BUTTON" && r.setAttribute("disabled", "true"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "-1")) : (n.classList.remove("is-disabled"), r.removeAttribute("aria-disabled"), r.tagName !== "BUTTON" && r.setAttribute("tabindex", "0")), {
      item: n,
      trigger: r,
      panel: i,
      index: o,
      key: Dt(n, o),
      disabled: s
    };
  }).filter((n) => n !== null);
}
function Ft(t) {
  const e = pt(t.options.defaultOpen), n = e.length > 0;
  let o = 0;
  t.items.forEach((r) => {
    const i = n ? e.some((c) => Bt(r, c)) : r.item.classList.contains("is-open");
    t.options.mode === "single" && o > 0 && i && r.item.classList.remove("is-open");
    const s = i && !r.disabled;
    s ? (r.item.classList.add("is-open"), o += 1) : r.item.classList.remove("is-open"), $(r, s), I(r.panel, s, t.options.animate);
  });
}
function Wt(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(R);
  if (!o || !t.triggerMap.has(o) || o.getAttribute("aria-disabled") === "true" || o.hasAttribute("disabled"))
    return;
  const r = t.triggerMap.get(o);
  r && bt(t, r);
}
function Gt(t, e) {
  const n = e.target;
  if (!(n instanceof Element)) return;
  const o = n.closest(R);
  if (!o || !t.triggerMap.has(o)) return;
  const r = t.items.filter((c) => !c.disabled).map((c) => c.trigger), i = r.indexOf(o);
  if (i === -1) return;
  const s = (c) => {
    const l = r[c];
    l && l.focus();
  };
  switch (e.key) {
    case "Enter":
    case " ":
    case "Spacebar":
      e.preventDefault(), bt(t, t.triggerMap.get(o));
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
function Ut(t) {
  t.options.animate && t.items.forEach((e) => {
    e.item.classList.contains("is-open") && (e.panel.style.maxHeight = `${e.panel.scrollHeight}px`);
  });
}
function Yt(t, e) {
  S.has(t) && Kt(t);
  const n = $t(t);
  t.setAttribute("data-icon", n.icon), t.setAttribute("data-animate", n.animate ? "true" : "false");
  const o = Pt(t), r = /* @__PURE__ */ new Map();
  o.forEach((s) => r.set(s.trigger, s));
  const i = {
    container: t,
    options: n,
    items: o,
    triggerMap: r,
    clickHandler: (s) => Wt(i, s),
    keyHandler: (s) => Gt(i, s),
    resizeHandler: () => Ut(i)
  };
  t.addEventListener("click", i.clickHandler), t.addEventListener("keydown", i.keyHandler), window.addEventListener("resize", i.resizeHandler), Ft(i), S.set(t, i);
}
function Kt(t) {
  const e = S.get(t);
  e && (t.removeEventListener("click", e.clickHandler), t.removeEventListener("keydown", e.keyHandler), window.removeEventListener("resize", e.resizeHandler), e.items.forEach((n) => {
    n.item.classList.remove("is-open"), n.trigger.removeAttribute("aria-expanded"), n.trigger.removeAttribute("aria-controls"), n.panel.removeAttribute("aria-hidden"), n.panel.removeAttribute("aria-labelledby"), n.panel.removeAttribute("role"), n.panel.style.maxHeight = "", n.panel.style.opacity = "", n.panel.style.pointerEvents = "";
  }), S.delete(t));
}
function Xt(t) {
  Yt(t);
}
const Vt = "[data-cdw-alert-close]", jt = "data-autoclose";
function Zt(t) {
  if (!t) return null;
  const e = Number.parseInt(t, 10);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function U(t) {
  t.classList.contains("is-hiding") || (t.classList.add("is-hiding"), window.setTimeout(() => {
    t.remove();
  }, 200));
}
function Jt(t) {
  const e = t.querySelector(Vt);
  e && e.addEventListener("click", () => U(t));
  const n = Zt(t.getAttribute(jt));
  n && window.setTimeout(() => U(t), n);
}
function Qt(t) {
  Jt(t);
}
const te = "[data-cdw-gallery]", ht = "[data-cdw-gallery-item], .cdw-gallery__item", wt = ".cdw-gallery__media", ee = ".cdw-gallery__label", ne = "[data-cdw-gallery-product]";
let g = null;
function re(t) {
  return t ? Array.from(t.classList).find(
    (n) => n.startsWith("cdw-gallery__media--")
  ) ?? "cdw-gallery__media--landscape" : "cdw-gallery__media--landscape";
}
function oe() {
  if (g) return g;
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
  const e = t.querySelector(".cdw-gallery-focus__frame"), n = t.querySelector(".cdw-gallery-focus__media"), o = t.querySelector("[data-cdw-gallery-prev]"), r = t.querySelector("[data-cdw-gallery-next]"), i = Array.from(t.querySelectorAll("[data-cdw-gallery-close]")), s = {
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
    keyHandler: (c) => {
      s.root.classList.contains("is-open") && (c.key === "Escape" && k(), s.controlsEnabled && c.key === "ArrowLeft" && w(s.index - 1), s.controlsEnabled && c.key === "ArrowRight" && w(s.index + 1));
    }
  };
  return t.addEventListener("click", (c) => {
    const l = c.target;
    if (l) {
      if (l.closest("[data-cdw-gallery-close]")) {
        k();
        return;
      }
      if (l.closest("[data-cdw-gallery-prev]")) {
        w(s.index - 1);
        return;
      }
      l.closest("[data-cdw-gallery-next]") && w(s.index + 1);
    }
  }), n.addEventListener("click", () => {
    const c = Date.now();
    c - s.lastTap < 280 && s.root.classList.toggle("is-zoomed"), s.lastTap = c;
  }), i.forEach((c) => {
    c.addEventListener("click", () => k());
  }), document.addEventListener("keydown", s.keyHandler), g = s, s;
}
function ie(t, e) {
  t.classList.remove("cdw-gallery-focus--clean", "cdw-gallery-focus--immersive"), e === "immersive" ? t.classList.add("cdw-gallery-focus--immersive") : t.classList.add("cdw-gallery-focus--clean");
}
function k() {
  g && (g.root.classList.remove("is-open", "is-zoomed"), g.root.setAttribute("aria-hidden", "true"), document.body.classList.remove("cdw-gallery-focus-open"));
}
function w(t) {
  if (!g) return;
  const e = g, n = e.items.length;
  if (!n) return;
  const o = (t + n) % n, r = e.items[o], i = r.querySelector(wt), s = r.querySelector(ee)?.textContent?.trim() ?? "Image", c = re(i);
  e.media.className = `cdw-gallery-focus__media ${c}`, e.media.innerHTML = `<span class="cdw-gallery__label cdw-gallery__label--focus">${s}</span>`, e.index = o;
}
function se(t, e, n) {
  const o = oe(), r = Array.from(t.querySelectorAll(ht));
  o.items = r, o.controlsEnabled = n && r.length > 1, o.prev.style.display = o.controlsEnabled ? "block" : "none", o.next.style.display = o.controlsEnabled ? "block" : "none", ie(o.root, t.getAttribute("data-cdw-gallery-focus")), o.root.classList.add("is-open"), o.root.setAttribute("aria-hidden", "false"), document.body.classList.add("cdw-gallery-focus-open");
  const i = Math.max(0, r.indexOf(e));
  w(i);
}
function ae(t, e) {
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
function L(t, e, n, o) {
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
function ce(t) {
  const e = t.querySelector(".cdw-gallery__product");
  if (!e) return;
  const n = e.querySelector(".cdw-gallery__product-main"), o = n?.querySelector(".cdw-gallery__media"), r = n?.querySelector(".cdw-gallery__label"), i = n?.querySelector(".cdw-gallery__media img"), s = e.querySelector(".cdw-gallery__product-info"), c = s?.querySelector(".cdw-gallery__product-info-title"), l = s?.querySelector(".cdw-gallery__product-info-desc"), a = s?.querySelector(".cdw-gallery__product-info-meta"), d = Array.from(
    e.querySelectorAll("[data-cdw-gallery-thumb]")
  );
  if (!n || !o || !d.length) return;
  const u = (f) => {
    d.forEach((h) => h.classList.remove("is-active")), f.classList.add("is-active");
    const m = f.getAttribute("data-label") ?? "Product", _ = f.getAttribute("data-title") ?? m, E = f.getAttribute("data-desc") ?? "", P = f.getAttribute("data-meta") ?? "", Mt = f.getAttribute("data-aspect") ?? "cdw-gallery__media--square", T = f.getAttribute("data-src"), Nt = f.getAttribute("data-alt") ?? m;
    o.className = `cdw-gallery__media ${Mt}`;
    const C = () => {
      r && (r.textContent = m), c && (c.textContent = _), l && (l.textContent = E), a && (a.innerHTML = P ? P.split("|").map((h) => `<span>${h.trim()}</span>`).join("") : ""), s && s.classList.remove("is-loading");
    };
    if (s && s.classList.add("is-loading"), i && T) {
      const h = new URL(T, window.location.href).href;
      if (i.src === h) {
        L(o, i, C);
        return;
      }
      L(o, i, C, !0), i.src = T, i.alt = Nt;
    } else
      L(o, i ?? null, C);
  };
  d.forEach((f) => {
    f.addEventListener("click", (m) => {
      m.target instanceof HTMLImageElement && u(f);
    });
  });
  const p = d.find((f) => f.classList.contains("is-active")) ?? d[0];
  u(p);
}
function le(t) {
  if (!t.matches(te)) return;
  if (t.matches(ne)) {
    ce(t);
    return;
  }
  const e = t.querySelector(".cdw-gallery__list");
  ae(t, e), t.addEventListener("click", (n) => {
    const o = n.target;
    if (!o) return;
    const r = o.closest(ht);
    if (!r) return;
    const i = r.querySelector(wt), s = i?.querySelector("img") ?? null;
    i && L(i, s);
    const c = t.getAttribute("data-cdw-gallery-controls") === "true";
    se(t, r, c);
  });
}
const de = "[data-cdw-modal]", ue = "[data-cdw-modal-open]", fe = "[data-cdw-modal-close]", yt = "cdw-modal-open", b = [], Y = /* @__PURE__ */ new WeakMap();
let K = !1;
function pe(t) {
  const e = t.replace(/^#/, "");
  return document.getElementById(e);
}
function me(t) {
  return t ? t.startsWith("#") ? pe(t) : document.querySelector(t) : null;
}
function vt(t) {
  return t.classList.contains("is-open");
}
function q(t) {
  if (!vt(t.root)) return;
  t.root.classList.remove("is-open"), t.root.setAttribute("aria-hidden", "true");
  const e = b.findIndex((n) => n.root === t.root);
  e >= 0 && b.splice(e, 1), b.length === 0 && document.body.classList.remove(yt), t.lastActive?.focus();
}
function ge(t) {
  vt(t.root) || (t.lastActive = document.activeElement, t.root.classList.add("is-open"), t.root.setAttribute("aria-hidden", "false"), b.find((e) => e.root === t.root) || b.push(t), document.body.classList.add(yt), t.dialog.focus());
}
function Et(t) {
  const e = Y.get(t);
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
    const s = i.target;
    if (s) {
      if (s.closest(fe)) {
        q(r);
        return;
      }
      o && s.classList.contains("cdw-modal__backdrop") && q(r);
    }
  }), Y.set(t, r), r;
}
function be(t) {
  const e = t.target;
  if (!e) return;
  const n = e.closest(ue);
  if (!n) return;
  const o = n.getAttribute("data-cdw-modal-open"), r = me(o);
  if (!r) return;
  t.preventDefault();
  const i = Et(r);
  ge(i);
}
function he(t) {
  if (t.key !== "Escape") return;
  const e = b[b.length - 1];
  e && q(e);
}
function we() {
  K || (document.addEventListener("click", be), document.addEventListener("keydown", he), K = !0);
}
function ye(t) {
  t.matches(de) && (we(), Et(t));
}
const ve = ".cdw-navbar-panel", X = "[data-cdw-navbar-toggle]", V = "[data-cdw-navbar-close]", j = "[data-cdw-navbar-sub]", Z = /* @__PURE__ */ new WeakMap();
let J = !1;
function Ee() {
  if (J || typeof window > "u") return;
  const t = window.matchMedia?.("(pointer: coarse)").matches, e = window.matchMedia?.("(hover: none)").matches, n = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  (t || e || n) && (document.documentElement.classList.add("cdw-navbar-mobile"), J = !0);
}
function Ae(t, e) {
  if (t.id) return t.id;
  const n = `cdw-navbar-panel-${Math.random().toString(36).slice(2, 8)}`;
  return t.id = n, e.setAttribute("data-cdw-navbar-panel", n), n;
}
function At(t, e) {
  t && t.setAttribute("aria-expanded", e ? "true" : "false");
}
function Le(t) {
  t.container.classList.add("is-open"), At(t.toggle, !0);
}
function H(t) {
  t.container.classList.remove("is-open"), At(t.toggle, !1);
}
function Se(t) {
  t.container.classList.contains("is-open") ? H(t) : Le(t);
}
function xe(t) {
  const e = t.closest(".cdw-navbar-item");
  if (!e) return;
  const n = e.classList.toggle("is-open");
  t.setAttribute("aria-expanded", n ? "true" : "false");
}
function _e(t) {
  if (Z.has(t)) return;
  Ee();
  const e = t.querySelector(ve), n = t.querySelector(X), o = t.querySelector(".cdw-navbar-overlay"), r = Array.from(t.querySelectorAll(V)), i = Array.from(t.querySelectorAll(j));
  if (e) {
    const c = Ae(e, t);
    n && (n.setAttribute("aria-controls", c), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-label", "Abrir menu"));
  }
  const s = {
    container: t,
    panel: e,
    toggle: n,
    overlay: o,
    closeButtons: r,
    subToggles: i,
    keyHandler: (c) => {
      c.key === "Escape" && H(s);
    },
    clickHandler: (c) => {
      const l = c.target;
      if (!(l instanceof Element)) return;
      if (l.closest(X)) {
        Se(s);
        return;
      }
      if (l.closest(V) || l.closest(".cdw-navbar-overlay")) {
        H(s);
        return;
      }
      const d = l.closest(j);
      d && (c.preventDefault(), xe(d));
    }
  };
  t.addEventListener("click", s.clickHandler), t.addEventListener("keydown", s.keyHandler), Z.set(t, s);
}
function Te(t) {
  _e(t);
}
const Ce = ".cdw-stage-track", ke = ".cdw-stage-slide", Q = "[data-cdw-stage-prev]", tt = "[data-cdw-stage-next]", et = "[data-cdw-stage-go]", Oe = "[data-cdw-stage-counter]", Me = "[data-cdw-stage-progress]", nt = /* @__PURE__ */ new WeakMap();
function A(t, e) {
  return t === null ? e : t === "" ? !0 : t === "true";
}
function rt(t, e) {
  if (!t) return e;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : e;
}
function Ne(t) {
  const e = t.getAttribute("data-autoplay"), n = t.getAttribute("data-interval"), o = A(t.getAttribute("data-pause-on-hover"), !0), r = A(t.getAttribute("data-loop"), !0), i = A(t.getAttribute("data-keyboard"), !0), s = A(t.getAttribute("data-swipe"), !0), c = rt(t.getAttribute("data-start"), 0), l = t.getAttribute("data-nav") === "manual" ? "manual" : "auto";
  let a = !1, d = rt(n, 5200);
  if (e !== null) {
    a = e === "" || e === "true";
    const u = Number.parseInt(e, 10);
    Number.isFinite(u) && (a = !0, d = u);
  }
  return {
    autoplay: a,
    interval: d,
    pauseOnHover: o,
    loop: r,
    keyboard: i,
    swipe: s,
    startIndex: c,
    navMode: l
  };
}
function qe(t) {
  const e = t.querySelector(Ce) || t, n = Array.from(e.querySelectorAll(ke));
  return { track: e, slides: n };
}
function He(t, e) {
  const n = t.slides.length;
  return n === 0 ? 0 : t.options.loop ? (e + n) % n : Math.max(0, Math.min(n - 1, e));
}
function Re(t) {
  const e = t.slides.length;
  t.slides.forEach((n, o) => {
    n.setAttribute("role", "group"), n.setAttribute("aria-roledescription", "slide"), n.setAttribute("aria-label", `${o + 1} de ${e}`), n.setAttribute("aria-hidden", o === t.current ? "false" : "true");
  });
}
function Lt(t) {
  const e = t.slides.length;
  if (t.navButtons.forEach((n, o) => {
    o === t.current ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current");
  }), t.counterEl && (t.counterEl.textContent = `${t.current + 1}/${e}`), t.progressEl) {
    const n = e > 0 ? (t.current + 1) / e * 100 : 0;
    t.progressEl.style.width = `${n}%`;
  }
}
function v(t, e) {
  const n = t.slides.length;
  if (n === 0) return;
  const o = He(t, e), r = t.options.loop ? (o - 1 + n) % n : o - 1, i = t.options.loop ? (o + 1) % n : o + 1;
  t.slides.forEach((s, c) => {
    s.classList.toggle("is-active", c === o), s.classList.toggle("is-prev", r >= 0 && c === r), s.classList.toggle("is-next", i < n && c === i);
  }), t.current = o, Re(t), Lt(t);
}
function ot(t) {
  !t.options.autoplay || t.slides.length <= 1 || (t.timerId && window.clearInterval(t.timerId), t.timerId = window.setInterval(() => {
    v(t, t.current + 1);
  }, t.options.interval));
}
function Ie(t) {
  t.timerId && (window.clearInterval(t.timerId), t.timerId = null);
}
function O(t) {
  v(t, t.current - 1);
}
function M(t) {
  v(t, t.current + 1);
}
function N(t, e) {
  v(t, e);
}
function $e(t) {
  t.options.pauseOnHover && (t.container.addEventListener("mouseenter", t.enterHandler), t.container.addEventListener("mouseleave", t.leaveHandler), t.container.addEventListener("focusin", t.enterHandler), t.container.addEventListener("focusout", t.leaveHandler)), t.container.addEventListener("click", t.clickHandler), t.options.keyboard && (t.container.setAttribute("tabindex", "0"), t.container.addEventListener("keydown", t.keyHandler)), t.options.swipe && (t.container.addEventListener("touchstart", t.touchStartHandler, { passive: !0 }), t.container.addEventListener("touchend", t.touchEndHandler));
}
function De(t) {
  if (nt.has(t)) return;
  const e = Ne(t), { track: n, slides: o } = qe(t), r = Array.from(t.querySelectorAll(et)), i = Array.from(t.querySelectorAll(Q)), s = Array.from(t.querySelectorAll(tt)), c = t.querySelector(Oe), l = t.querySelector(Me), a = {
    container: t,
    track: n,
    slides: o,
    navButtons: r,
    prevButtons: i,
    nextButtons: s,
    counterEl: c,
    progressEl: l,
    options: e,
    current: 0,
    timerId: null,
    hoverCount: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchActive: !1,
    keyHandler: (d) => {
      d.key === "ArrowLeft" ? (d.preventDefault(), O(a)) : d.key === "ArrowRight" ? (d.preventDefault(), M(a)) : d.key === "Home" ? (d.preventDefault(), N(a, 0)) : d.key === "End" && (d.preventDefault(), N(a, a.slides.length - 1));
    },
    clickHandler: (d) => {
      const u = d.target;
      if (!(u instanceof Element)) return;
      const p = u.closest(Q), f = u.closest(tt);
      if (p) {
        O(a);
        return;
      }
      if (f) {
        M(a);
        return;
      }
      const m = u.closest(et);
      if (m) {
        const _ = m.getAttribute("data-cdw-stage-go"), E = Number.parseInt(_ || "", 10);
        Number.isFinite(E) && N(a, E);
      }
    },
    enterHandler: () => {
      a.hoverCount += 1, Ie(a);
    },
    leaveHandler: () => {
      a.hoverCount = Math.max(0, a.hoverCount - 1), a.hoverCount === 0 && ot(a);
    },
    touchStartHandler: (d) => {
      if (d.touches.length !== 1) return;
      const u = d.touches[0];
      a.touchActive = !0, a.touchStartX = u.clientX, a.touchStartY = u.clientY;
    },
    touchEndHandler: (d) => {
      if (!a.touchActive) return;
      a.touchActive = !1;
      const u = d.changedTouches[0], p = u.clientX - a.touchStartX, f = u.clientY - a.touchStartY;
      Math.abs(p) < 30 || Math.abs(p) < Math.abs(f) || (p > 0 ? O(a) : M(a));
    }
  };
  if (t.setAttribute("role", "region"), t.setAttribute("aria-roledescription", "stage"), o.length > 0 && t.setAttribute("aria-live", "polite"), v(a, e.startIndex), $e(a), ot(a), e.navMode === "auto" && r.length === 0 && o.length > 1) {
    const d = document.createElement("div");
    d.className = "cdw-stage-nav", o.forEach((u, p) => {
      const f = document.createElement("button");
      f.type = "button", f.className = "cdw-stage-indicator", f.setAttribute("data-cdw-stage-go", String(p)), f.setAttribute("aria-label", `Ir para o slide ${p + 1}`), d.appendChild(f), a.navButtons.push(f);
    }), t.appendChild(d), Lt(a);
  }
  nt.set(t, a);
}
function Be(t) {
  De(t);
}
const ze = ".cdw-table-header", Pe = ".cdw-table-row", St = ".cdw-table-cell";
function it(t) {
  return t.trim().toLowerCase();
}
function Fe(t) {
  const e = t.querySelector(ze);
  return e ? Array.from(e.querySelectorAll(St)).map((o) => (o.getAttribute("data-label") ?? o.textContent ?? "").trim()).filter(Boolean) : [];
}
function We(t, e) {
  if (e.length === 0) return;
  const n = Array.from(t.querySelectorAll(St));
  if (n.length === 0) return;
  if (!n.some((l) => {
    const a = l.getAttribute("data-label");
    return a !== null && a.trim() !== "";
  })) {
    n.forEach((l, a) => {
      const d = e[a];
      d && l.setAttribute("data-label", d);
    });
    return;
  }
  n.forEach((l, a) => {
    const d = l.getAttribute("data-label");
    (!d || d.trim() === "") && e[a] && l.setAttribute("data-label", e[a]);
  });
  const r = /* @__PURE__ */ new Map();
  n.forEach((l) => {
    const a = l.getAttribute("data-label");
    if (!a) return;
    const d = it(a);
    r.has(d) || r.set(d, l);
  });
  const i = [], s = /* @__PURE__ */ new Set();
  let c = !1;
  e.forEach((l, a) => {
    const d = it(l), u = r.get(d);
    if (u) {
      i.push(u), s.add(u), !c && n[a] !== u && (c = !0);
      return;
    }
    const p = document.createElement("div");
    p.className = "cdw-table-cell", p.setAttribute("data-label", l), p.setAttribute("aria-hidden", "true"), i.push(p), c = !0;
  }), n.forEach((l) => {
    s.has(l) || (i.push(l), !c && n[i.length - 1] !== l && (c = !0));
  }), c && t.replaceChildren(...i);
}
function Ge(t) {
  const e = Fe(t);
  if (e.length === 0) return;
  Array.from(t.querySelectorAll(Pe)).forEach((o) => We(o, e));
}
const Ue = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap();
function st(t, e) {
  const n = new DataTransfer();
  e.forEach((o) => n.items.add(o)), t.files = n.files;
}
function Ke(t) {
  return Array.from(t.querySelectorAll(".cdw-form-select-option"));
}
function D(t, e) {
  t.options.forEach((n) => n.classList.remove("is-active")), e && e.classList.add("is-active");
}
function B(t, e) {
  const n = e.getAttribute("data-value") || e.textContent || "", o = e.textContent || n;
  t.valueEl && (t.valueEl.textContent = o.trim()), t.trigger.setAttribute("data-value", n), D(t, e);
}
function y(t, e, n = !0) {
  t.root.classList.toggle("is-open", e), t.trigger.setAttribute("aria-expanded", e ? "true" : "false"), e && t.search ? t.search.focus() : n && t.trigger.focus();
}
function Xe(t, e) {
  const n = e.target;
  if (!(n instanceof HTMLElement)) return;
  const o = n.closest(".cdw-form-select-option");
  o && (B(t, o), y(t, !1));
}
function Ve(t) {
  const e = t.root.classList.contains("is-open");
  y(t, !e);
}
function je(t, e) {
  const n = e.trim().toLowerCase();
  t.options.forEach((o) => {
    const r = (o.textContent || "").trim().toLowerCase();
    o.style.display = r.includes(n) ? "" : "none";
  });
}
function Ze(t, e) {
  const n = e.key, o = t.options.filter((i) => i.style.display !== "none");
  if (!o.length) return;
  const r = o.findIndex((i) => i.classList.contains("is-active"));
  if (n === "ArrowDown" || n === "ArrowUp") {
    e.preventDefault();
    const i = n === "ArrowDown" ? Math.min(o.length - 1, r + 1) : Math.max(0, r - 1);
    D(t, o[i] || o[0]);
    return;
  }
  if (n === "Enter") {
    e.preventDefault();
    const i = o[r] || o[0];
    i && B(t, i), y(t, !1);
    return;
  }
  n === "Escape" && (e.preventDefault(), y(t, !1));
}
function Je(t) {
  const e = t.querySelector(".cdw-form-select-trigger"), n = t.querySelector(".cdw-form-select-panel");
  if (!e || !n) return;
  const o = {
    root: t,
    trigger: e,
    search: t.querySelector(".cdw-form-select-search"),
    options: Ke(t),
    panel: n,
    valueEl: t.querySelector(".cdw-form-select-value")
  };
  if (o.options.length) {
    if (!o.valueEl) {
      const r = document.createElement("span");
      r.className = "cdw-form-select-value", e.prepend(r), o.valueEl = r;
    }
    e.setAttribute("aria-haspopup", "listbox"), e.setAttribute("aria-expanded", "false"), n.setAttribute("role", "listbox"), o.options.some((r) => r.classList.contains("is-active")) || (D(o, o.options[0]), B(o, o.options[0])), e.addEventListener("click", () => Ve(o)), n.addEventListener("click", (r) => Xe(o, r)), t.addEventListener("keydown", (r) => Ze(o, r)), o.search && o.search.addEventListener("input", (r) => {
      const i = r.target;
      je(o, i.value);
    }), document.addEventListener("click", (r) => {
      t.contains(r.target) || y(o, !1, !1);
    }), Ue.set(t, o);
  }
}
function Qe(t) {
  const e = t.querySelector(".cdw-form-dropzone-input"), n = t.closest(".cdw-form-dropzone-wrap"), o = t.querySelector(".cdw-form-dropzone-list") || n?.querySelector(".cdw-form-dropzone-list") || null, r = { root: t, input: e, list: o, files: [] };
  if (!e) return;
  const i = () => {
    o && (o.innerHTML = "", r.files.length && r.files.forEach((s, c) => {
      const l = document.createElement("div");
      l.className = "cdw-form-dropzone-item", l.innerHTML = `<span>${s.name}</span><span>${Math.round(
        s.size / 1024
      )}kb</span><button class="cdw-form-dropzone-remove" type="button" data-index="${c}" aria-label="Remover">Remover</button>`, o.appendChild(l);
    }));
  };
  e.addEventListener("change", () => {
    r.files = Array.from(e.files || []), i();
  }), o?.addEventListener("click", (s) => {
    const c = s.target;
    if (!c) return;
    const l = c.closest(".cdw-form-dropzone-remove");
    if (!l) return;
    const a = Number(l.getAttribute("data-index"));
    Number.isFinite(a) && (r.files.splice(a, 1), st(e, r.files), i());
  }), t.addEventListener("dragenter", (s) => {
    s.preventDefault(), t.classList.add("is-dragging");
  }), t.addEventListener("dragover", (s) => {
    s.preventDefault(), t.classList.add("is-dragging");
  }), t.addEventListener("dragleave", () => {
    t.classList.remove("is-dragging");
  }), t.addEventListener("drop", (s) => {
    s.preventDefault(), t.classList.remove("is-dragging");
    const c = s.dataTransfer?.files;
    c && e && (r.files = r.files.concat(Array.from(c)), st(e, r.files), i());
  }), Ye.set(t, r);
}
function tn(t) {
  Array.from(t.querySelectorAll(".cdw-form-select-advanced")).forEach((i) => Je(i)), Array.from(t.querySelectorAll(".cdw-form-dropzone")).forEach((i) => Qe(i)), Array.from(t.querySelectorAll(".cdw-form-filebox")).forEach((i) => {
    const s = i.querySelector(".cdw-form-file-input"), c = i.querySelector(".cdw-form-file-list"), l = i.querySelector(".cdw-form-file-button");
    if (!s || !c || !l) return;
    const a = () => {
      c.innerHTML = "";
      const d = s.files && s.files[0] ? s.files[0] : null;
      if (!d) return;
      const u = document.createElement("div");
      u.className = "cdw-form-file-item", u.innerHTML = `<span>${d.name}</span><button class="cdw-form-file-remove" type="button" aria-label="Remover">Remover</button>`, c.appendChild(u);
    };
    l.addEventListener("click", () => s.click()), s.addEventListener("change", () => a()), c.addEventListener("click", (d) => {
      const u = d.target;
      !u || !u.closest(".cdw-form-file-remove") || (s.value = "", a());
    });
  }), Array.from(
    t.querySelectorAll("textarea[data-cdw-form-counter]")
  ).forEach((i) => {
    const s = i.getAttribute("maxlength") || i.getAttribute("data-max"), c = s ? Number(s) : 240;
    let l = i.nextElementSibling;
    (!l || !l.classList.contains("cdw-form-counter")) && (l = document.createElement("div"), l.className = "cdw-form-counter", i.insertAdjacentElement("afterend", l));
    const a = () => {
      const d = i.value.length;
      l.textContent = `${d}/${Number.isFinite(c) ? c : d}`;
    };
    i.addEventListener("input", a), a();
  });
}
const en = "[data-cdw-tooltip]", at = /* @__PURE__ */ new WeakMap();
let ct = 0, lt = !1;
const z = /* @__PURE__ */ new Set();
function nn() {
  return ct += 1, `cdw-tooltip-${ct}`;
}
function rn(t) {
  return t === "click" || t === "focus" || t === "hover-focus" ? t : "hover";
}
function on(t) {
  return t === "top" || t === "bottom" || t === "left" || t === "right" ? t : "auto";
}
function sn(t) {
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
function an(t) {
  if (!t) return 120;
  const e = Number(t);
  return Number.isNaN(e) ? 120 : Math.max(0, e);
}
function cn(t) {
  const e = t.getAttribute("data-tooltip-accent");
  if (e) return e.trim();
  const n = Array.from(t.classList).find(
    (o) => o.startsWith("cdw-fw-accent-")
  );
  return n ? n.replace("cdw-fw-accent-", "") : null;
}
function ln(t) {
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
function dn(t, e) {
  const n = document.createElement("div"), o = nn();
  n.id = o, n.className = `cdw-tooltip cdw-tooltip--${e.model}`, n.setAttribute("role", "tooltip"), n.setAttribute("data-placement", "top");
  const r = e.accent;
  r && n.classList.add(`cdw-fw-accent-${r}`);
  const i = document.createElement("div");
  i.className = "cdw-tooltip__content", n.appendChild(i);
  const s = document.createElement("span");
  return s.className = "cdw-tooltip__arrow", s.setAttribute("aria-hidden", "true"), n.appendChild(s), t.setAttribute("aria-describedby", o), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n), n;
}
function un(t, e, n) {
  const o = t.getBoundingClientRect(), r = e.getBoundingClientRect(), i = 10, s = o.top, c = window.innerHeight - o.bottom, l = o.left, a = window.innerWidth - o.right, d = (u) => {
    switch (u) {
      case "top":
        return s >= r.height + i;
      case "bottom":
        return c >= r.height + i;
      case "left":
        return l >= r.width + i;
      case "right":
        return a >= r.width + i;
      default:
        return !1;
    }
  };
  if (n !== "auto") {
    if (d(n)) return n;
    const u = n === "top" ? "bottom" : n === "bottom" ? "top" : n === "left" ? "right" : "left";
    if (d(u)) return u;
  }
  return c >= r.height + i ? "bottom" : s >= r.height + i ? "top" : a >= r.width + i ? "right" : l >= r.width + i ? "left" : "bottom";
}
function xt(t) {
  const { trigger: e, tooltip: n, options: o } = t, r = e.getBoundingClientRect(), i = n.getBoundingClientRect(), s = 10, c = un(e, n, o.placement);
  let l = 0, a = 0;
  switch (c) {
    case "top":
      l = r.top - i.height - s, a = r.left + (r.width - i.width) / 2;
      break;
    case "bottom":
      l = r.bottom + s, a = r.left + (r.width - i.width) / 2;
      break;
    case "left":
      l = r.top + (r.height - i.height) / 2, a = r.left - i.width - s;
      break;
    case "right":
      l = r.top + (r.height - i.height) / 2, a = r.right + s;
      break;
  }
  const d = window.innerWidth - i.width - 8, u = window.innerHeight - i.height - 8;
  if (a = Math.min(Math.max(8, a), Math.max(8, d)), l = Math.min(Math.max(8, l), Math.max(8, u)), n.style.left = `${a}px`, n.style.top = `${l}px`, n.setAttribute("data-placement", c), c === "top" || c === "bottom") {
    const p = r.left + r.width / 2 - a, f = Math.min(Math.max(12, p), i.width - 12);
    n.style.setProperty("--cdw-tooltip-arrow-x", `${f}px`);
  } else {
    const p = r.top + r.height / 2 - l, f = Math.min(Math.max(12, p), i.height - 12);
    n.style.setProperty("--cdw-tooltip-arrow-y", `${f}px`);
  }
}
function _t(t) {
  t.open || (t.open = !0, t.tooltip.classList.add("is-open"), t.tooltip.setAttribute("aria-hidden", "false"), t.tooltip.style.visibility = "hidden", xt(t), t.tooltip.style.visibility = "visible", z.add(t), t.boundReposition());
}
function x(t) {
  t.open && (t.open = !1, t.tooltip.classList.remove("is-open"), t.tooltip.setAttribute("aria-hidden", "true"), z.delete(t));
}
function Tt(t) {
  t.showTimer && window.clearTimeout(t.showTimer), t.hideTimer && window.clearTimeout(t.hideTimer), t.showTimer = void 0, t.hideTimer = void 0;
}
function dt(t) {
  Tt(t), t.showTimer = window.setTimeout(() => _t(t), t.options.delay);
}
function ut(t) {
  Tt(t), t.hideTimer = window.setTimeout(() => x(t), 90);
}
function fn() {
  lt || (document.addEventListener("keydown", (t) => {
    t.key === "Escape" && z.forEach((e) => x(e));
  }), lt = !0);
}
function pn() {
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
}
function mn(t) {
  if (!t.matches(en) || at.has(t)) return;
  const e = t.getAttribute("data-cdw-tooltip"), n = {
    trigger: rn(t.getAttribute("data-tooltip-trigger")),
    placement: on(t.getAttribute("data-tooltip-placement")),
    model: sn(t.getAttribute("data-tooltip-model")),
    delay: an(t.getAttribute("data-tooltip-delay")),
    accent: cn(t),
    title: t.getAttribute("data-tooltip-title"),
    text: t.getAttribute("data-tooltip-text") ?? e,
    meta: t.getAttribute("data-tooltip-meta"),
    icon: t.getAttribute("data-tooltip-icon")
  }, o = dn(t, n), r = {
    trigger: t,
    tooltip: o,
    options: n,
    open: !1,
    boundReposition: () => xt(r)
  };
  ln(r);
  const i = n.trigger === "hover" ? "hover-focus" : n.trigger;
  if (i === "click" || i === "hover-focus" && pn()) {
    const c = (l) => {
      const a = l.target;
      a && (a === t || t.contains(a) || a === o || o.contains(a) || x(r));
    };
    r.boundOutside = c, t.addEventListener("click", (l) => {
      l.preventDefault(), r.open ? x(r) : _t(r), r.boundOutside && document.addEventListener("click", r.boundOutside, { once: !0 });
    });
  } else
    t.addEventListener("mouseenter", () => dt(r)), t.addEventListener("mouseleave", () => ut(r)), t.addEventListener("focus", () => dt(r)), t.addEventListener("blur", () => ut(r));
  window.addEventListener("scroll", r.boundReposition, !0), window.addEventListener("resize", r.boundReposition), fn(), at.set(t, r);
}
const Ct = "data-cdw-fw-initialized", gn = {
  childList: !0,
  subtree: !0
}, bn = [
  {
    name: "accordion",
    selector: "[data-cdw-accordion]",
    bind: Xt
  },
  {
    name: "alert",
    selector: "[data-cdw-alert]",
    bind: Qt
  },
  {
    name: "gallery",
    selector: "[data-cdw-gallery]",
    bind: le
  },
  {
    name: "modal",
    selector: "[data-cdw-modal]",
    bind: ye
  },
  {
    name: "navbar",
    selector: "[data-cdw-navbar]",
    bind: Te
  },
  {
    name: "stage",
    selector: "[data-cdw-stage]",
    bind: Be
  },
  {
    name: "form",
    selector: ".cdw-form",
    bind: tn
  },
  {
    name: "table",
    selector: ".cdw-table",
    bind: Ge
  },
  {
    name: "tooltip",
    selector: "[data-cdw-tooltip]",
    bind: mn
  }
];
function hn(t) {
  return t ?? document;
}
function kt(t) {
  const e = t.getAttribute(Ct);
  return e ? new Set(e.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function wn(t, e) {
  const n = kt(t);
  n.has(e) || (n.add(e), t.setAttribute(Ct, Array.from(n).join(" ")));
}
function yn(t, e) {
  return !kt(t).has(e);
}
function vn(t, e) {
  const n = Array.from(t.querySelectorAll(e));
  return t instanceof HTMLElement && t.matches(e) && n.unshift(t), n;
}
function Ot(t) {
  const e = hn(t);
  for (const n of bn) {
    const o = vn(e, n.selector);
    for (const r of o)
      if (yn(r, n.name))
        try {
          n.bind(r), wn(r, n.name);
        } catch (i) {
          console.warn(`cdw-fw init issue: ${n.name}`, i);
        }
  }
}
function En() {
  if (typeof MutationObserver > "u") return;
  const t = document.body;
  if (!t) return;
  new MutationObserver((n) => {
    for (const o of n)
      o.addedNodes.forEach((r) => {
        r instanceof HTMLElement && Ot(r);
      });
  }).observe(t, gn);
}
function ft() {
  Ot(document), En();
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => ft(), { once: !0 }) : ft());
const An = "0.1.0";
export {
  An as CDW_FW_VERSION
};
