import { forwardRef as Pt, useRef as He, useEffect as je, useImperativeHandle as St, createElement as At } from "react";
function T() {
}
function It(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function ct(t) {
  return t();
}
function Qe() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(t) {
  t.forEach(ct);
}
function ot(t) {
  return typeof t == "function";
}
function se(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function xt(t) {
  return Object.keys(t).length === 0;
}
function Nt(t, e, n, r) {
  if (t) {
    const c = ut(t, e, n, r);
    return t[0](c);
  }
}
function ut(t, e, n, r) {
  return t[1] && r ? It(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function jt(t, e, n, r) {
  if (t[2] && r) {
    const c = t[2](r(n));
    if (e.dirty === void 0)
      return c;
    if (typeof c == "object") {
      const u = [], l = Math.max(e.dirty.length, c.length);
      for (let f = 0; f < l; f += 1)
        u[f] = e.dirty[f] | c[f];
      return u;
    }
    return e.dirty | c;
  }
  return e.dirty;
}
function Gt(t, e, n, r, c, u) {
  if (c) {
    const l = ut(e, n, r, u);
    t.p(l, c);
  }
}
function Ot(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function We(t) {
  return t ?? "";
}
function _(t, e) {
  t.appendChild(e);
}
function F(t, e, n) {
  t.insertBefore(e, n || null);
}
function G(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ft(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function E(t) {
  return document.createElement(t);
}
function ee(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ue(t) {
  return document.createTextNode(t);
}
function Z() {
  return ue(" ");
}
function j(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Zt(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Dt(t) {
  return Array.from(t.childNodes);
}
function ke(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Ue(t, e) {
  t.value = e ?? "";
}
function $(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Kt(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const c = document.createEvent("CustomEvent");
  return c.initCustomEvent(t, n, r, e), c;
}
let pe;
function ve(t) {
  pe = t;
}
function st() {
  if (!pe)
    throw new Error("Function called outside component initialization");
  return pe;
}
function Vt(t) {
  st().$$.on_destroy.push(t);
}
function qt() {
  const t = st();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const c = t.$$.callbacks[e];
    if (c) {
      const u = Kt(e, n, { cancelable: r });
      return c.slice().forEach((l) => {
        l.call(t, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function Je(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const ge = [], Oe = [];
let ye = [];
const Xe = [], Ht = /* @__PURE__ */ Promise.resolve();
let Fe = !1;
function Qt() {
  Fe || (Fe = !0, Ht.then(ft));
}
function Ze(t) {
  ye.push(t);
}
const Ge = /* @__PURE__ */ new Set();
let _e = 0;
function ft() {
  if (_e !== 0)
    return;
  const t = pe;
  do {
    try {
      for (; _e < ge.length; ) {
        const e = ge[_e];
        _e++, ve(e), Wt(e.$$);
      }
    } catch (e) {
      throw ge.length = 0, _e = 0, e;
    }
    for (ve(null), ge.length = 0, _e = 0; Oe.length; )
      Oe.pop()();
    for (let e = 0; e < ye.length; e += 1) {
      const n = ye[e];
      Ge.has(n) || (Ge.add(n), n());
    }
    ye.length = 0;
  } while (ge.length);
  for (; Xe.length; )
    Xe.pop()();
  Fe = !1, Ge.clear(), ve(t);
}
function Wt(t) {
  if (t.fragment !== null) {
    t.update(), ne(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ze);
  }
}
function Ut(t) {
  const e = [], n = [];
  ye.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), ye = e;
}
const Ce = /* @__PURE__ */ new Set();
let oe;
function Ee() {
  oe = {
    r: 0,
    c: [],
    p: oe
    // parent group
  };
}
function Be() {
  oe.r || ne(oe.c), oe = oe.p;
}
function L(t, e) {
  t && t.i && (Ce.delete(t), t.i(e));
}
function S(t, e, n, r) {
  if (t && t.o) {
    if (Ce.has(t))
      return;
    Ce.add(t), oe.c.push(() => {
      Ce.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function te(t) {
  t && t.c();
}
function U(t, e, n, r) {
  const { fragment: c, after_update: u } = t.$$;
  c && c.m(e, n), r || Ze(() => {
    const l = t.$$.on_mount.map(ct).filter(ot);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : ne(l), t.$$.on_mount = [];
  }), u.forEach(Ze);
}
function J(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ut(n.after_update), ne(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Jt(t, e) {
  t.$$.dirty[0] === -1 && (ge.push(t), Qt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function fe(t, e, n, r, c, u, l, f = [-1]) {
  const o = pe;
  ve(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: T,
    not_equal: c,
    bound: Qe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Qe(),
    dirty: f,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  l && l(a.root);
  let h = !1;
  if (a.ctx = n ? n(t, e.props || {}, (p, y, ...B) => {
    const v = B.length ? B[0] : y;
    return a.ctx && c(a.ctx[p], a.ctx[p] = v) && (!a.skip_bound && a.bound[p] && a.bound[p](v), h && Jt(t, p)), y;
  }) : [], a.update(), h = !0, ne(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = Dt(e.target);
      a.fragment && a.fragment.l(p), p.forEach(G);
    } else
      a.fragment && a.fragment.c();
    e.intro && L(t.$$.fragment), U(t, e.target, e.anchor, e.customElement), ft();
  }
  ve(o);
}
class ae {
  $destroy() {
    J(this, 1), this.$destroy = T;
  }
  $on(e, n) {
    if (!ot(n))
      return T;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !xt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Xt(t) {
  let e, n;
  return {
    c() {
      e = ee("svg"), n = ee("path"), d(n, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), d(e, "viewBox", "0 0 14 14"), d(e, "width", "13"), d(e, "height", "13"), d(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      F(r, e, c), _(e, n);
    },
    p: T,
    i: T,
    o: T,
    d(r) {
      r && G(e);
    }
  };
}
class at extends ae {
  constructor(e) {
    super(), fe(this, e, null, Xt, se, {});
  }
}
function Yt(t) {
  let e, n;
  return {
    c() {
      e = ee("svg"), n = ee("path"), d(n, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), d(e, "viewBox", "0 0 30 30"), d(e, "fill", "none"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "class", "svelte-d2loi5");
    },
    m(r, c) {
      F(r, e, c), _(e, n);
    },
    p: T,
    i: T,
    o: T,
    d(r) {
      r && G(e);
    }
  };
}
class dt extends ae {
  constructor(e) {
    super(), fe(this, e, null, Yt, se, {});
  }
}
function Ye(t) {
  var c, u;
  let e, n = (
    /*feature*/
    (((u = (c = t[0].properties) == null ? void 0 : c.place_type_name) == null ? void 0 : u[0]) ?? /*feature*/
    t[0].place_type[0]) + ""
  ), r;
  return {
    c() {
      e = E("span"), r = ue(n), d(e, "class", "line2 svelte-ewziy4");
    },
    m(l, f) {
      F(l, e, f), _(e, r);
    },
    p(l, f) {
      var o, a;
      f & /*feature*/
      1 && n !== (n = /*feature*/
      (((a = (o = l[0].properties) == null ? void 0 : o.place_type_name) == null ? void 0 : a[0]) ?? /*feature*/
      l[0].place_type[0]) + "") && ke(r, n);
    },
    d(l) {
      l && G(e);
    }
  };
}
function $t(t) {
  let e, n, r, c, u = (
    /*feature*/
    t[0].place_name.replace(/,.*/, "") + ""
  ), l, f, o, a = (
    /*feature*/
    t[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), h, p, y, B, v = (
    /*showPlaceType*/
    t[2] && Ye(t)
  );
  return {
    c() {
      e = E("li"), n = E("span"), r = E("span"), c = E("span"), l = ue(u), f = Z(), o = E("span"), h = ue(a), p = Z(), v && v.c(), d(c, "class", "primary svelte-ewziy4"), d(o, "class", "secondary svelte-ewziy4"), d(r, "class", "svelte-ewziy4"), d(n, "class", "texts svelte-ewziy4"), d(e, "tabindex", "0"), d(
        e,
        "data-selected",
        /*selected*/
        t[1]
      ), d(e, "class", "svelte-ewziy4"), $(
        e,
        "selected",
        /*selected*/
        t[1]
      );
    },
    m(g, w) {
      F(g, e, w), _(e, n), _(n, r), _(r, c), _(c, l), _(r, f), _(r, o), _(o, h), _(n, p), v && v.m(n, null), y || (B = [
        j(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[3]
        ),
        j(
          e,
          "focus",
          /*focus_handler*/
          t[4]
        )
      ], y = !0);
    },
    p(g, [w]) {
      w & /*feature*/
      1 && u !== (u = /*feature*/
      g[0].place_name.replace(/,.*/, "") + "") && ke(l, u), w & /*feature*/
      1 && a !== (a = /*feature*/
      g[0].place_name.replace(/[^,]*,?\s*/, "") + "") && ke(h, a), /*showPlaceType*/
      g[2] ? v ? v.p(g, w) : (v = Ye(g), v.c(), v.m(n, null)) : v && (v.d(1), v = null), w & /*selected*/
      2 && d(
        e,
        "data-selected",
        /*selected*/
        g[1]
      ), w & /*selected*/
      2 && $(
        e,
        "selected",
        /*selected*/
        g[1]
      );
    },
    i: T,
    o: T,
    d(g) {
      g && G(e), v && v.d(), y = !1, ne(B);
    }
  };
}
function en(t, e, n) {
  let { feature: r } = e, { selected: c = !1 } = e, { showPlaceType: u = !1 } = e;
  function l(o) {
    Je.call(this, t, o);
  }
  function f(o) {
    Je.call(this, t, o);
  }
  return t.$$set = (o) => {
    "feature" in o && n(0, r = o.feature), "selected" in o && n(1, c = o.selected), "showPlaceType" in o && n(2, u = o.showPlaceType);
  }, [r, c, u, l, f];
}
class tn extends ae {
  constructor(e) {
    super(), fe(this, e, en, $t, se, {
      feature: 0,
      selected: 1,
      showPlaceType: 2
    });
  }
}
function nn(t) {
  let e;
  return {
    c() {
      e = E("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', d(e, "class", "svelte-7cmwmc");
    },
    m(n, r) {
      F(n, e, r);
    },
    p: T,
    i: T,
    o: T,
    d(n) {
      n && G(e);
    }
  };
}
class rn extends ae {
  constructor(e) {
    super(), fe(this, e, null, nn, se, {});
  }
}
function ln(t) {
  let e, n;
  return {
    c() {
      e = ee("svg"), n = ee("path"), d(n, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), d(e, "viewBox", "0 0 60.006 21.412"), d(e, "width", "14"), d(e, "height", "20"), d(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      F(r, e, c), _(e, n);
    },
    p: T,
    i: T,
    o: T,
    d(r) {
      r && G(e);
    }
  };
}
class cn extends ae {
  constructor(e) {
    super(), fe(this, e, null, ln, se, {});
  }
}
function on(t) {
  let e, n;
  return {
    c() {
      e = ee("svg"), n = ee("path"), d(n, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), d(e, "width", "14"), d(e, "height", "14"), d(e, "viewBox", "0 0 15 15"), d(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      F(r, e, c), _(e, n);
    },
    p: T,
    i: T,
    o: T,
    d(r) {
      r && G(e);
    }
  };
}
class un extends ae {
  constructor(e) {
    super(), fe(this, e, null, on, se, {});
  }
}
function $e(t, e, n) {
  const r = t.slice();
  return r[70] = e[n], r[72] = n, r;
}
function et(t) {
  let e, n;
  return e = new rn({}), {
    c() {
      te(e.$$.fragment);
    },
    m(r, c) {
      U(e, r, c), n = !0;
    },
    i(r) {
      n || (L(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      J(e, r);
    }
  };
}
function tt(t) {
  let e, n, r, c, u;
  return n = new cn({}), {
    c() {
      e = E("button"), te(n.$$.fragment), d(e, "type", "button"), d(
        e,
        "title",
        /*reverseButtonTitle*/
        t[9]
      ), d(e, "class", "svelte-1r7dvt7"), $(
        e,
        "active",
        /*reverseActive*/
        t[0]
      );
    },
    m(l, f) {
      F(l, e, f), U(n, e, null), r = !0, c || (u = j(
        e,
        "click",
        /*click_handler_2*/
        t[56]
      ), c = !0);
    },
    p(l, f) {
      (!r || f[0] & /*reverseButtonTitle*/
      512) && d(
        e,
        "title",
        /*reverseButtonTitle*/
        l[9]
      ), (!r || f[0] & /*reverseActive*/
      1) && $(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      r || (L(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && G(e), J(n), c = !1, u();
    }
  };
}
function sn(t) {
  let e, n, r, c, u = (
    /*listFeatures*/
    t[12]
  ), l = [];
  for (let o = 0; o < u.length; o += 1)
    l[o] = nt($e(t, u, o));
  const f = (o) => S(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      e = E("ul");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      d(e, "class", "svelte-1r7dvt7");
    },
    m(o, a) {
      F(o, e, a);
      for (let h = 0; h < l.length; h += 1)
        l[h] && l[h].m(e, null);
      n = !0, r || (c = [
        j(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[60]
        ),
        j(
          e,
          "blur",
          /*blur_handler_1*/
          t[61]
        )
      ], r = !0);
    },
    p(o, a) {
      if (a[0] & /*listFeatures, showPlaceType, selectedItemIndex, pick*/
      2110464) {
        u = /*listFeatures*/
        o[12];
        let h;
        for (h = 0; h < u.length; h += 1) {
          const p = $e(o, u, h);
          l[h] ? (l[h].p(p, a), L(l[h], 1)) : (l[h] = nt(p), l[h].c(), L(l[h], 1), l[h].m(e, null));
        }
        for (Ee(), h = u.length; h < l.length; h += 1)
          f(h);
        Be();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < u.length; a += 1)
          L(l[a]);
        n = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let a = 0; a < l.length; a += 1)
        S(l[a]);
      n = !1;
    },
    d(o) {
      o && G(e), Ft(l, o), r = !1, ne(c);
    }
  };
}
function fn(t) {
  let e, n, r, c, u, l;
  return n = new dt({}), {
    c() {
      e = E("div"), te(n.$$.fragment), r = Z(), c = E("div"), u = ue(
        /*noResultsMessage*/
        t[7]
      ), d(c, "class", "svelte-1r7dvt7"), d(e, "class", "no-results svelte-1r7dvt7");
    },
    m(f, o) {
      F(f, e, o), U(n, e, null), _(e, r), _(e, c), _(c, u), l = !0;
    },
    p(f, o) {
      (!l || o[0] & /*noResultsMessage*/
      128) && ke(
        u,
        /*noResultsMessage*/
        f[7]
      );
    },
    i(f) {
      l || (L(n.$$.fragment, f), l = !0);
    },
    o(f) {
      S(n.$$.fragment, f), l = !1;
    },
    d(f) {
      f && G(e), J(n);
    }
  };
}
function an(t) {
  let e = "", n;
  return {
    c() {
      n = ue(e);
    },
    m(r, c) {
      F(r, n, c);
    },
    p: T,
    i: T,
    o: T,
    d(r) {
      r && G(n);
    }
  };
}
function dn(t) {
  let e, n, r, c, u, l, f, o, a, h, p;
  return n = new dt({}), o = new at({}), {
    c() {
      e = E("div"), te(n.$$.fragment), r = Z(), c = E("div"), u = ue(
        /*errorMessage*/
        t[6]
      ), l = Z(), f = E("button"), te(o.$$.fragment), d(c, "class", "svelte-1r7dvt7"), d(f, "class", "svelte-1r7dvt7"), d(e, "class", "error svelte-1r7dvt7");
    },
    m(y, B) {
      F(y, e, B), U(n, e, null), _(e, r), _(e, c), _(c, u), _(e, l), _(e, f), U(o, f, null), a = !0, h || (p = j(
        f,
        "click",
        /*click_handler_3*/
        t[57]
      ), h = !0);
    },
    p(y, B) {
      (!a || B[0] & /*errorMessage*/
      64) && ke(
        u,
        /*errorMessage*/
        y[6]
      );
    },
    i(y) {
      a || (L(n.$$.fragment, y), L(o.$$.fragment, y), a = !0);
    },
    o(y) {
      S(n.$$.fragment, y), S(o.$$.fragment, y), a = !1;
    },
    d(y) {
      y && G(e), J(n), J(o), h = !1, p();
    }
  };
}
function nt(t) {
  let e, n;
  function r() {
    return (
      /*mouseenter_handler*/
      t[58](
        /*i*/
        t[72]
      )
    );
  }
  function c() {
    return (
      /*focus_handler_1*/
      t[59](
        /*feature*/
        t[70]
      )
    );
  }
  return e = new tn({
    props: {
      feature: (
        /*feature*/
        t[70]
      ),
      showPlaceType: (
        /*showPlaceType*/
        t[10]
      ),
      selected: (
        /*selectedItemIndex*/
        t[13] === /*i*/
        t[72]
      )
    }
  }), e.$on("mouseenter", r), e.$on("focus", c), {
    c() {
      te(e.$$.fragment);
    },
    m(u, l) {
      U(e, u, l), n = !0;
    },
    p(u, l) {
      t = u;
      const f = {};
      l[0] & /*listFeatures*/
      4096 && (f.feature = /*feature*/
      t[70]), l[0] & /*showPlaceType*/
      1024 && (f.showPlaceType = /*showPlaceType*/
      t[10]), l[0] & /*selectedItemIndex*/
      8192 && (f.selected = /*selectedItemIndex*/
      t[13] === /*i*/
      t[72]), e.$set(f);
    },
    i(u) {
      n || (L(e.$$.fragment, u), n = !0);
    },
    o(u) {
      S(e.$$.fragment, u), n = !1;
    },
    d(u) {
      J(e, u);
    }
  };
}
function hn(t) {
  let e, n, r, c, u, l, f, o, a, h, p, y, B, v, g, w, H, A, D, re;
  c = new un({}), h = new at({});
  let m = (
    /*abortController*/
    t[17] && et()
  ), M = (
    /*enableReverse*/
    t[5] === !0 && tt(t)
  );
  const de = (
    /*#slots*/
    t[48].default
  ), N = Nt(
    de,
    t,
    /*$$scope*/
    t[47],
    null
  ), Q = [dn, an, fn, sn], P = [];
  function be(s, R) {
    var W, le;
    return (
      /*error*/
      s[16] ? 0 : (
        /*focusedDelayed*/
        s[14] ? (
          /*listFeatures*/
          ((W = s[12]) == null ? void 0 : W.length) === 0 ? 2 : (
            /*focusedDelayed*/
            s[14] && /*listFeatures*/
            ((le = s[12]) != null && le.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(g = be(t)) && (w = P[g] = Q[g](t)), {
    c() {
      e = E("form"), n = E("div"), r = E("button"), te(c.$$.fragment), u = Z(), l = E("input"), f = Z(), o = E("div"), a = E("button"), te(h.$$.fragment), p = Z(), m && m.c(), y = Z(), M && M.c(), B = Z(), N && N.c(), v = Z(), w && w.c(), d(r, "class", "search-button svelte-1r7dvt7"), d(r, "type", "button"), d(
        l,
        "placeholder",
        /*placeholder*/
        t[8]
      ), d(
        l,
        "aria-label",
        /*placeholder*/
        t[8]
      ), d(l, "class", "svelte-1r7dvt7"), d(a, "type", "button"), d(
        a,
        "title",
        /*clearButtonTitle*/
        t[3]
      ), d(a, "class", "svelte-1r7dvt7"), d(o, "class", "clear-button-container svelte-1r7dvt7"), $(
        o,
        "displayable",
        /*searchValue*/
        t[1] !== ""
      ), d(n, "class", "input-group svelte-1r7dvt7"), d(e, "tabindex", "0"), d(e, "class", H = We(
        /*className*/
        t[2]
      ) + " svelte-1r7dvt7"), $(
        e,
        "can-collapse",
        /*collapsed*/
        t[4] && /*searchValue*/
        t[1] === ""
      );
    },
    m(s, R) {
      F(s, e, R), _(e, n), _(n, r), U(c, r, null), _(n, u), _(n, l), t[50](l), Ue(
        l,
        /*searchValue*/
        t[1]
      ), _(n, f), _(n, o), _(o, a), U(h, a, null), _(o, p), m && m.m(o, null), _(n, y), M && M.m(n, null), _(n, B), N && N.m(n, null), _(e, v), ~g && P[g].m(e, null), A = !0, D || (re = [
        j(
          r,
          "click",
          /*click_handler*/
          t[49]
        ),
        j(
          l,
          "input",
          /*input_1_input_handler*/
          t[51]
        ),
        j(
          l,
          "focus",
          /*focus_handler*/
          t[52]
        ),
        j(
          l,
          "blur",
          /*blur_handler*/
          t[53]
        ),
        j(
          l,
          "keydown",
          /*handleKeyDown*/
          t[19]
        ),
        j(
          l,
          "input",
          /*input_handler*/
          t[54]
        ),
        j(
          a,
          "click",
          /*click_handler_1*/
          t[55]
        ),
        j(e, "submit", Zt(
          /*handleOnSubmit*/
          t[18]
        ))
      ], D = !0);
    },
    p(s, R) {
      (!A || R[0] & /*placeholder*/
      256) && d(
        l,
        "placeholder",
        /*placeholder*/
        s[8]
      ), (!A || R[0] & /*placeholder*/
      256) && d(
        l,
        "aria-label",
        /*placeholder*/
        s[8]
      ), R[0] & /*searchValue*/
      2 && l.value !== /*searchValue*/
      s[1] && Ue(
        l,
        /*searchValue*/
        s[1]
      ), (!A || R[0] & /*clearButtonTitle*/
      8) && d(
        a,
        "title",
        /*clearButtonTitle*/
        s[3]
      ), /*abortController*/
      s[17] ? m ? R[0] & /*abortController*/
      131072 && L(m, 1) : (m = et(), m.c(), L(m, 1), m.m(o, null)) : m && (Ee(), S(m, 1, 1, () => {
        m = null;
      }), Be()), (!A || R[0] & /*searchValue*/
      2) && $(
        o,
        "displayable",
        /*searchValue*/
        s[1] !== ""
      ), /*enableReverse*/
      s[5] === !0 ? M ? (M.p(s, R), R[0] & /*enableReverse*/
      32 && L(M, 1)) : (M = tt(s), M.c(), L(M, 1), M.m(n, B)) : M && (Ee(), S(M, 1, 1, () => {
        M = null;
      }), Be()), N && N.p && (!A || R[1] & /*$$scope*/
      65536) && Gt(
        N,
        de,
        s,
        /*$$scope*/
        s[47],
        A ? jt(
          de,
          /*$$scope*/
          s[47],
          R,
          null
        ) : Ot(
          /*$$scope*/
          s[47]
        ),
        null
      );
      let W = g;
      g = be(s), g === W ? ~g && P[g].p(s, R) : (w && (Ee(), S(P[W], 1, 1, () => {
        P[W] = null;
      }), Be()), ~g ? (w = P[g], w ? w.p(s, R) : (w = P[g] = Q[g](s), w.c()), L(w, 1), w.m(e, null)) : w = null), (!A || R[0] & /*className*/
      4 && H !== (H = We(
        /*className*/
        s[2]
      ) + " svelte-1r7dvt7")) && d(e, "class", H), (!A || R[0] & /*className, collapsed, searchValue*/
      22) && $(
        e,
        "can-collapse",
        /*collapsed*/
        s[4] && /*searchValue*/
        s[1] === ""
      );
    },
    i(s) {
      A || (L(c.$$.fragment, s), L(h.$$.fragment, s), L(m), L(M), L(N, s), L(w), A = !0);
    },
    o(s) {
      S(c.$$.fragment, s), S(h.$$.fragment, s), S(m), S(M), S(N, s), S(w), A = !1;
    },
    d(s) {
      s && G(e), J(c), t[50](null), J(h), m && m.d(), M && M.d(), N && N.d(s), ~g && P[g].d(), D = !1, ne(re);
    }
  };
}
function mn(t, e, n) {
  const r = e[1], c = e[0], u = r - c;
  return t === r && n ? t : ((t - c) % u + u) % u + c;
}
function rt(t) {
  let e = [...t];
  return e[2] < e[0] && (e[2] += 360), e;
}
function _n(t, e, n) {
  let r, { $$slots: c = {}, $$scope: u } = e, { class: l = void 0 } = e, { apiKey: f } = e, { bbox: o = void 0 } = e, { clearButtonTitle: a = "clear" } = e, { clearOnBlur: h = !1 } = e, { collapsed: p = !1 } = e, { country: y = void 0 } = e, { debounceSearch: B = 200 } = e, { enableReverse: v = !1 } = e, { errorMessage: g = "Something went wrong…" } = e, { filter: w = () => !0 } = e, { flyTo: H = !0 } = e, { fuzzyMatch: A = !0 } = e, { language: D = void 0 } = e, { limit: re = void 0 } = e, { mapController: m = void 0 } = e, { minLength: M = 2 } = e, { noResultsMessage: de = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: N = "Search" } = e, { proximity: Q = void 0 } = e, { reverseActive: P = v === "always" } = e, { reverseButtonTitle: be = "toggle reverse geocoding" } = e, { searchValue: s = "" } = e, { showFullGeometry: R = !0 } = e, { showPlaceType: W = !1 } = e, { showResultsWhileTyping: le = !0 } = e, { trackProximity: Te = !0 } = e, { types: Me = void 0 } = e, { zoom: Re = 16 } = e, { fetchParameters: Pe = {} } = e;
  function ht() {
    K.focus();
  }
  function mt() {
    K.blur();
  }
  function De(i, C = !0) {
    n(1, s = i), C ? (n(13, z = -1), Ve()) : (Ae(), setTimeout(() => {
      K.focus(), K.select();
    }));
  }
  let he = !1, b, I, k, Ke = "", K, z = -1, V, Le = [], ie, me, ze;
  const X = qt();
  Vt(() => {
    m && (m.setEventHandler(void 0), m.indicateReverse(!1), m.setSelectedMarker(-1), m.setMarkers(void 0, void 0));
  });
  function Ve(i) {
    if (me && (clearTimeout(me), me = void 0), z > -1 && b)
      n(45, k = b[z]), n(1, s = k.place_name.replace(/,.*/, "")), n(16, V = void 0), n(44, I = void 0), n(13, z = -1);
    else if (s) {
      const C = i || !qe();
      Se(s, { exact: !0 }).then(() => {
        n(44, I = b), n(45, k = void 0), C && _t();
      }).catch((q) => n(16, V = q));
    }
  }
  function qe() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(s);
  }
  async function Se(i, { byId: C = !1, exact: q = !1 } = {}) {
    n(16, V = void 0);
    const we = qe(), O = new URLSearchParams();
    D != null && O.set("language", Array.isArray(D) ? D.join(",") : D), Me && O.set("types", Me.join(",")), we || (o && O.set("bbox", o.map((Y) => Y.toFixed(6)).join(",")), y && O.set("country", Array.isArray(y) ? y.join(",") : y)), C || (Q && O.set("proximity", Q.map((Y) => Y.toFixed(6)).join(",")), (q || !le) && O.set("autocomplete", "false"), O.set("fuzzyMatch", String(A))), re !== void 0 && O.set("limit", String(re)), O.set("key", f);
    const ce = "https://api.maptiler.com/geocoding/" + encodeURIComponent(i) + ".json?" + O.toString();
    if (ce === Ke) {
      C ? (n(12, b = void 0), n(45, k = Le[0])) : n(12, b = Le);
      return;
    }
    Ke = ce, ie == null || ie.abort();
    const x = new AbortController();
    n(17, ie = x);
    let xe;
    try {
      xe = await fetch(ce, { signal: x.signal, ...Pe }).finally(() => {
        x === ie && n(17, ie = void 0);
      });
    } catch (Y) {
      if (Y && typeof Y == "object" && "name" in Y && Y.name === "AbortError")
        return;
      throw new Error();
    }
    if (!xe.ok)
      throw new Error();
    const Ne = await xe.json();
    X("response", { url: ce, featureCollection: Ne }), C ? (n(12, b = void 0), n(45, k = Ne.features[0]), Le = [k]) : (n(12, b = Ne.features.filter(w)), Le = b, we && K.focus());
  }
  function _t() {
    var q, we, O, ce;
    if (!(I != null && I.length) || !H)
      return;
    const i = [180, 90, -180, -90], C = !I.some((x) => !x.matching_text);
    for (const x of I)
      (C || !x.matching_text) && (i[0] = Math.min(i[0], ((q = x.bbox) == null ? void 0 : q[0]) ?? x.center[0]), i[1] = Math.min(i[1], ((we = x.bbox) == null ? void 0 : we[1]) ?? x.center[1]), i[2] = Math.max(i[2], ((O = x.bbox) == null ? void 0 : O[2]) ?? x.center[0]), i[3] = Math.max(i[3], ((ce = x.bbox) == null ? void 0 : ce[3]) ?? x.center[1]));
    m && I.length > 0 && (k && i[0] === i[2] && i[1] === i[3] ? m.flyTo(k.center, Re) : m.fitBounds(rt(i), 50));
  }
  function gt(i) {
    n(0, P = v === "always"), De(mn(i[0], [-180, 180], !0).toFixed(6) + "," + i[1].toFixed(6));
  }
  function yt(i) {
    if (!b)
      return;
    let C = i.key === "ArrowDown" ? 1 : i.key === "ArrowUp" ? -1 : 0;
    C ? (z === -1 && C === -1 && n(13, z = b.length), n(13, z += C), z >= b.length && n(13, z = -1), i.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(i.key) && n(13, z = -1);
  }
  function Ae(i = !0) {
    if (n(16, V = void 0), le) {
      if (me && clearTimeout(me), s.length <= M)
        return;
      const C = s;
      me = window.setTimeout(
        () => {
          Se(C).catch((q) => n(16, V = q));
        },
        i ? B : 0
      );
    } else
      n(12, b = void 0), n(16, V = void 0);
  }
  function Ie(i) {
    n(45, k = i), n(1, s = i.place_name), n(13, z = -1);
  }
  const bt = () => K.focus();
  function wt(i) {
    Oe[i ? "unshift" : "push"](() => {
      K = i, n(15, K);
    });
  }
  function vt() {
    s = this.value, n(1, s), n(11, he), n(25, h);
  }
  const kt = () => n(11, he = !0), pt = () => n(11, he = !1), Tt = () => Ae(), Mt = () => {
    n(1, s = ""), K.focus();
  }, Rt = () => n(0, P = !P), Lt = () => n(16, V = void 0), zt = (i) => n(13, z = i), Ct = (i) => Ie(i), Et = () => n(13, z = -1), Bt = () => {
  };
  return t.$$set = (i) => {
    "class" in i && n(2, l = i.class), "apiKey" in i && n(23, f = i.apiKey), "bbox" in i && n(24, o = i.bbox), "clearButtonTitle" in i && n(3, a = i.clearButtonTitle), "clearOnBlur" in i && n(25, h = i.clearOnBlur), "collapsed" in i && n(4, p = i.collapsed), "country" in i && n(26, y = i.country), "debounceSearch" in i && n(27, B = i.debounceSearch), "enableReverse" in i && n(5, v = i.enableReverse), "errorMessage" in i && n(6, g = i.errorMessage), "filter" in i && n(28, w = i.filter), "flyTo" in i && n(29, H = i.flyTo), "fuzzyMatch" in i && n(30, A = i.fuzzyMatch), "language" in i && n(31, D = i.language), "limit" in i && n(32, re = i.limit), "mapController" in i && n(33, m = i.mapController), "minLength" in i && n(34, M = i.minLength), "noResultsMessage" in i && n(7, de = i.noResultsMessage), "placeholder" in i && n(8, N = i.placeholder), "proximity" in i && n(22, Q = i.proximity), "reverseActive" in i && n(0, P = i.reverseActive), "reverseButtonTitle" in i && n(9, be = i.reverseButtonTitle), "searchValue" in i && n(1, s = i.searchValue), "showFullGeometry" in i && n(35, R = i.showFullGeometry), "showPlaceType" in i && n(10, W = i.showPlaceType), "showResultsWhileTyping" in i && n(36, le = i.showResultsWhileTyping), "trackProximity" in i && n(37, Te = i.trackProximity), "types" in i && n(38, Me = i.types), "zoom" in i && n(39, Re = i.zoom), "fetchParameters" in i && n(40, Pe = i.fetchParameters), "$$scope" in i && n(47, u = i.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[1] & /*trackProximity*/
    64 && (Te || n(22, Q = void 0)), t.$$.dirty[0] & /*focused, clearOnBlur*/
    33556480 && setTimeout(() => {
      n(14, ze = he), h && !he && n(1, s = "");
    }), t.$$.dirty[0] & /*searchValue, listFeatures*/
    4098 && (s || (n(45, k = void 0), n(12, b = void 0), n(16, V = void 0), n(44, I = b))), t.$$.dirty[1] & /*showFullGeometry, picked*/
    16400 && R && k && !k.address && k.geometry.type === "Point" && Se(k.id, { byId: !0 }).catch((i) => n(16, V = i)), t.$$.dirty[0] & /*flyTo*/
    536870912 | t.$$.dirty[1] & /*mapController, picked, zoom*/
    16644 && m && k && H && (!k.bbox || k.bbox[0] === k.bbox[2] && k.bbox[1] === k.bbox[3] ? m.flyTo(k.center, Re) : m.fitBounds(rt(k.bbox), 50), n(12, b = void 0), n(44, I = void 0), n(13, z = -1)), t.$$.dirty[0] & /*listFeatures*/
    4096 | t.$$.dirty[1] & /*markedFeatures*/
    8192 && I !== b && n(44, I = void 0), t.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    24580 && m && m.setMarkers(I, k), t.$$.dirty[0] & /*searchValue*/
    2 && n(13, z = -1), t.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    20481 | t.$$.dirty[1] & /*mapController, trackProximity*/
    68 && m && m.setEventHandler((i) => {
      switch (i.type) {
        case "mapClick":
          P && gt(i.coordinates);
          break;
        case "proximityChange":
          n(22, Q = Te ? i.proximity : void 0);
          break;
        case "markerClick":
          {
            const C = b == null ? void 0 : b.find((q) => q.id === i.id);
            C && Ie(C);
          }
          break;
        case "markerMouseEnter":
          n(13, z = ze ? (b == null ? void 0 : b.findIndex((C) => C.id === i.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          n(13, z = -1);
          break;
      }
    }), t.$$.dirty[0] & /*selectedItemIndex*/
    8192 | t.$$.dirty[1] & /*mapController*/
    4 && (m == null || m.setSelectedMarker(z)), t.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    12288 && n(46, r = b == null ? void 0 : b[z]), t.$$.dirty[0] & /*searchValue*/
    2 | t.$$.dirty[1] & /*mapController*/
    4) {
      const i = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(s);
      m == null || m.setReverseMarker(i ? [Number(i[1]), Number(i[2])] : void 0);
    }
    t.$$.dirty[1] & /*selected*/
    32768 && X("select", r), t.$$.dirty[1] & /*picked*/
    16384 && X("pick", k), t.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    20480 && X("optionsVisibilityChange", ze && !!b), t.$$.dirty[0] & /*listFeatures*/
    4096 && X("featuresListed", b), t.$$.dirty[1] & /*markedFeatures*/
    8192 && X("featuresMarked", I), t.$$.dirty[0] & /*reverseActive*/
    1 && X("reverseToggle", P), t.$$.dirty[0] & /*searchValue*/
    2 && X("queryChange", s), t.$$.dirty[0] & /*reverseActive*/
    1 | t.$$.dirty[1] & /*mapController*/
    4 && m && m.indicateReverse(P);
  }, [
    P,
    s,
    l,
    a,
    p,
    v,
    g,
    de,
    N,
    be,
    W,
    he,
    b,
    z,
    ze,
    K,
    V,
    ie,
    Ve,
    yt,
    Ae,
    Ie,
    Q,
    f,
    o,
    h,
    y,
    B,
    w,
    H,
    A,
    D,
    re,
    m,
    M,
    R,
    le,
    Te,
    Me,
    Re,
    Pe,
    ht,
    mt,
    De,
    I,
    k,
    r,
    u,
    c,
    bt,
    wt,
    vt,
    kt,
    pt,
    Tt,
    Mt,
    Rt,
    Lt,
    zt,
    Ct,
    Et,
    Bt
  ];
}
class gn extends ae {
  constructor(e) {
    super(), fe(
      this,
      e,
      _n,
      hn,
      se,
      {
        class: 2,
        apiKey: 23,
        bbox: 24,
        clearButtonTitle: 3,
        clearOnBlur: 25,
        collapsed: 4,
        country: 26,
        debounceSearch: 27,
        enableReverse: 5,
        errorMessage: 6,
        filter: 28,
        flyTo: 29,
        fuzzyMatch: 30,
        language: 31,
        limit: 32,
        mapController: 33,
        minLength: 34,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 22,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 35,
        showPlaceType: 10,
        showResultsWhileTyping: 36,
        trackProximity: 37,
        types: 38,
        zoom: 39,
        fetchParameters: 40,
        focus: 41,
        blur: 42,
        setQuery: 43
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[41];
  }
  get blur() {
    return this.$$.ctx[42];
  }
  get setQuery() {
    return this.$$.ctx[43];
  }
}
const lt = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], yn = [
  "apiKey",
  "bbox",
  "clearButtonTitle",
  "clearOnBlur",
  "collapsed",
  "country",
  "debounceSearch",
  "enableReverse",
  "errorMessage",
  "filter",
  "fuzzyMatch",
  "language",
  "limit",
  "minLength",
  "noResultsMessage",
  "placeholder",
  "proximity",
  "reverseButtonTitle",
  "showFullGeometry",
  "showPlaceType",
  "showResultsWhileTyping",
  "trackProximity",
  "types",
  "zoom",
  "mapController"
];
function it(t) {
  return "on" + t[0].toUpperCase() + t.slice(1);
}
const wn = Pt(function(e, n) {
  const r = He(), c = He(), u = { ...e };
  for (const l of lt)
    delete u[it(l)];
  je(() => {
    if (!r.current)
      throw new Error();
    const l = new gn({
      target: r.current,
      props: u
    });
    return c.current = l, () => l.$destroy();
  }, []);
  for (const l of yn)
    je(() => {
      c.current && e[l] !== void 0 && c.current.$set({ [l]: e[l] });
    }, [e[l]]);
  for (const l of lt) {
    const f = e[it(l)];
    je(() => {
      var o;
      (o = c.current) == null || o.$on(
        l,
        f ? (a) => {
          f(a.detail);
        } : void 0
      );
    }, [f]);
  }
  return St(n, () => ({
    setQuery: (l, f = !0) => {
      var o;
      return (o = c.current) == null ? void 0 : o.setQuery(l, f);
    },
    focus: () => {
      var l;
      return (l = c.current) == null ? void 0 : l.focus();
    },
    blur: () => {
      var l;
      return (l = c.current) == null ? void 0 : l.blur();
    }
  })), At("div", { ref: r });
});
export {
  wn as GeocodingControl
};
//# sourceMappingURL=react.js.map
