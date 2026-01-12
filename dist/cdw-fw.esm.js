const d = "0.1.0", i = [];
function m(t) {
  const n = i.findIndex((e) => e.name === t.name);
  if (n >= 0) {
    i[n] = t;
    return;
  }
  i.push(t);
}
function I() {
  return [...i];
}
const c = "data-cdw-fw-initialized";
function g(t) {
  return t ?? document;
}
function s(t) {
  const n = t.getAttribute(c);
  return n ? new Set(n.split(" ").filter(Boolean)) : /* @__PURE__ */ new Set();
}
function A(t, n) {
  const e = s(t);
  e.has(n) || (e.add(n), t.setAttribute(c, Array.from(e).join(" ")));
}
function h(t, n) {
  return !s(t).has(n);
}
function w(t, n) {
  const e = Array.from(t.querySelectorAll(n));
  return t instanceof HTMLElement && t.matches(n) && e.unshift(t), e;
}
function u(t) {
  const n = g(t), e = I();
  for (const r of e) {
    const a = w(n, r.selector);
    for (const o of a)
      if (h(o, r.name))
        try {
          r.init(o, f), A(o, r.name);
        } catch (l) {
          console.error(`cdw-fw init error: ${r.name}`, l);
        }
  }
}
function y(t) {
  return u(t), f;
}
const f = {
  version: d,
  init: y,
  register: m,
  scan: u
};
export {
  d as CDW_FW_VERSION,
  y as init,
  m as register
};
