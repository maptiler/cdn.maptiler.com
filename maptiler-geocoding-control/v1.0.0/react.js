var Qt = Object.defineProperty;
var Dt = (n, e, t) => e in n ? Qt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ge = (n, e, t) => (Dt(n, typeof e != "symbol" ? e + "" : e, t), t);
import { forwardRef as qt, useRef as et, useEffect as Qe, useImperativeHandle as Vt, createElement as Kt } from "react";
function U() {
}
function Ht(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function gt(n) {
  return n();
}
function tt() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(n) {
  n.forEach(gt);
}
function _t(n) {
  return typeof n == "function";
}
function de(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let Ie;
function q(n, e) {
  return n === e ? !0 : (Ie || (Ie = document.createElement("a")), Ie.href = e, n === Ie.href);
}
function Jt(n) {
  return Object.keys(n).length === 0;
}
function Xt(n, e, t, r) {
  if (n) {
    const l = yt(n, e, t, r);
    return n[0](l);
  }
}
function yt(n, e, t, r) {
  return n[1] && r ? Ht(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function Yt(n, e, t, r) {
  if (n[2] && r) {
    const l = n[2](r(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const u = [], s = Math.max(e.dirty.length, l.length);
      for (let f = 0; f < s; f += 1)
        u[f] = e.dirty[f] | l[f];
      return u;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function xt(n, e, t, r, l, u) {
  if (l) {
    const s = yt(e, t, r, u);
    n.p(s, l);
  }
}
function $t(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function nt(n) {
  return n ?? "";
}
function p(n, e) {
  n.appendChild(e);
}
function j(n, e, t) {
  n.insertBefore(e, t || null);
}
function z(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function I(n) {
  return document.createElement(n);
}
function ie(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function se(n) {
  return document.createTextNode(n);
}
function V() {
  return se(" ");
}
function en() {
  return se("");
}
function D(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function tn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function o(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function nn(n) {
  return Array.from(n.childNodes);
}
function Me(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function rt(n, e) {
  n.value = e ?? "";
}
function le(n, e, t) {
  n.classList.toggle(e, !!t);
}
function rn(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
let Te;
function pe(n) {
  Te = n;
}
function bt() {
  if (!Te)
    throw new Error("Function called outside component initialization");
  return Te;
}
function ln(n) {
  bt().$$.on_destroy.push(n);
}
function sn() {
  const n = bt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const u = rn(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return l.slice().forEach((s) => {
        s.call(n, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function lt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const be = [], qe = [];
let we = [];
const it = [], on = /* @__PURE__ */ Promise.resolve();
let Ve = !1;
function cn() {
  Ve || (Ve = !0, on.then(wt));
}
function Ke(n) {
  we.push(n);
}
const De = /* @__PURE__ */ new Set();
let ye = 0;
function wt() {
  if (ye !== 0)
    return;
  const n = Te;
  do {
    try {
      for (; ye < be.length; ) {
        const e = be[ye];
        ye++, pe(e), fn(e.$$);
      }
    } catch (e) {
      throw be.length = 0, ye = 0, e;
    }
    for (pe(null), be.length = 0, ye = 0; qe.length; )
      qe.pop()();
    for (let e = 0; e < we.length; e += 1) {
      const t = we[e];
      De.has(t) || (De.add(t), t());
    }
    we.length = 0;
  } while (be.length);
  for (; it.length; )
    it.pop()();
  Ve = !1, De.clear(), pe(n);
}
function fn(n) {
  if (n.fragment !== null) {
    n.update(), ne(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ke);
  }
}
function un(n) {
  const e = [], t = [];
  we.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), we = e;
}
const Se = /* @__PURE__ */ new Set();
let ae;
function Ue() {
  ae = {
    r: 0,
    c: [],
    p: ae
    // parent group
  };
}
function ze() {
  ae.r || ne(ae.c), ae = ae.p;
}
function Z(n, e) {
  n && n.i && (Se.delete(n), n.i(e));
}
function O(n, e, t, r) {
  if (n && n.o) {
    if (Se.has(n))
      return;
    Se.add(n), ae.c.push(() => {
      Se.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function st(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function an(n, e) {
  O(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function dn(n, e, t, r, l, u, s, f, a, c, m, v) {
  let _ = n.length, T = u.length, C = _;
  const M = {};
  for (; C--; )
    M[n[C].key] = C;
  const L = [], N = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), b = [];
  for (C = T; C--; ) {
    const R = v(l, u, C), E = t(R);
    let g = s.get(E);
    g ? r && b.push(() => g.p(R, e)) : (g = c(E, R), g.c()), N.set(E, L[C] = g), E in M && S.set(E, Math.abs(C - M[E]));
  }
  const F = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  function y(R) {
    Z(R, 1), R.m(f, m), s.set(R.key, R), m = R.first, T--;
  }
  for (; _ && T; ) {
    const R = L[T - 1], E = n[_ - 1], g = R.key, w = E.key;
    R === E ? (m = R.first, _--, T--) : N.has(w) ? !s.has(g) || F.has(g) ? y(R) : h.has(w) ? _-- : S.get(g) > S.get(w) ? (h.add(g), y(R)) : (F.add(w), _--) : (a(E, s), _--);
  }
  for (; _--; ) {
    const R = n[_];
    N.has(R.key) || a(R, s);
  }
  for (; T; )
    y(L[T - 1]);
  return ne(b), L;
}
function oe(n) {
  n && n.c();
}
function ee(n, e, t) {
  const { fragment: r, after_update: l } = n.$$;
  r && r.m(e, t), Ke(() => {
    const u = n.$$.on_mount.map(gt).filter(_t);
    n.$$.on_destroy ? n.$$.on_destroy.push(...u) : ne(u), n.$$.on_mount = [];
  }), l.forEach(Ke);
}
function te(n, e) {
  const t = n.$$;
  t.fragment !== null && (un(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function hn(n, e) {
  n.$$.dirty[0] === -1 && (be.push(n), cn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function he(n, e, t, r, l, u, s = null, f = [-1]) {
  const a = Te;
  pe(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: U,
    not_equal: l,
    bound: tt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: tt(),
    dirty: f,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(c.root);
  let m = !1;
  if (c.ctx = t ? t(n, e.props || {}, (v, _, ...T) => {
    const C = T.length ? T[0] : _;
    return c.ctx && l(c.ctx[v], c.ctx[v] = C) && (!c.skip_bound && c.bound[v] && c.bound[v](C), m && hn(n, v)), _;
  }) : [], c.update(), m = !0, ne(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = nn(e.target);
      c.fragment && c.fragment.l(v), v.forEach(z);
    } else
      c.fragment && c.fragment.c();
    e.intro && Z(n.$$.fragment), ee(n, e.target, e.anchor), wt();
  }
  pe(a);
}
class me {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ge(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ge(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    te(this, 1), this.$destroy = U;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!_t(t))
      return U;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const l = r.indexOf(t);
      l !== -1 && r.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Jt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const mn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(mn);
function gn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), o(e, "viewBox", "0 0 14 14"), o(e, "width", "13"), o(e, "height", "13"), o(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class vt extends me {
  constructor(e) {
    super(), he(this, e, null, gn, de, {});
  }
}
function _n(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), o(e, "viewBox", "0 0 30 30"), o(e, "fill", "none"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "class", "svelte-d2loi5");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class kt extends me {
  constructor(e) {
    super(), he(this, e, null, _n, de, {});
  }
}
function yn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function bn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function wn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function vn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function kn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function pn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function Mn(n) {
  let e, t, r, l;
  return {
    c() {
      e = I("img"), q(e.src, t = /*imageUrl*/
      n[5]) || o(e, "src", t), o(
        e,
        "alt",
        /*category*/
        n[4]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(u, s) {
      j(u, e, s), r || (l = D(
        e,
        "error",
        /*error_handler*/
        n[13]
      ), r = !0);
    },
    p(u, s) {
      s & /*imageUrl*/
      32 && !q(e.src, t = /*imageUrl*/
      u[5]) && o(e, "src", t), s & /*category*/
      16 && o(
        e,
        "alt",
        /*category*/
        u[4]
      );
    },
    d(u) {
      u && z(e), r = !1, l();
    }
  };
}
function ot(n) {
  let e, t;
  return {
    c() {
      e = I("span"), t = se(
        /*placeType*/
        n[6]
      ), o(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p(r, l) {
      l & /*placeType*/
      64 && Me(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function Tn(n) {
  var R, E;
  let e, t, r, l, u, s, f, a, c = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), m, v, _ = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((R = n[0].properties) == null ? void 0 : R.kind) !== "road" && /*feature*/
    ((E = n[0].properties) == null ? void 0 : E.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5])
  ), T, C, M = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), L, N, S;
  function b(g, w) {
    var K, d;
    return w & /*feature*/
    1 && (t = null), w & /*feature*/
    1 && (r = null), w & /*feature*/
    1 && (l = null), /*imageUrl*/
    g[5] ? Mn : (
      /*feature*/
      g[0].address ? pn : (
        /*feature*/
        ((K = g[0].properties) == null ? void 0 : K.kind) === "road" || /*feature*/
        ((d = g[0].properties) == null ? void 0 : d.kind) === "road_relation" ? kn : (t == null && (t = !!/*feature*/
        g[0].id.startsWith("address.")), t ? vn : (r == null && (r = !!/*feature*/
        g[0].id.startsWith("postal_code.")), r ? wn : (l == null && (l = !!/*feature*/
        g[0].id.startsWith("poi.")), l ? bn : yn)))
      )
    );
  }
  let F = b(n, -1), h = F(n), y = _ && ot(n);
  return {
    c() {
      e = I("li"), h.c(), u = V(), s = I("span"), f = I("span"), a = I("span"), m = se(c), v = V(), y && y.c(), T = V(), C = I("span"), L = se(M), o(a, "class", "primary svelte-ltkwvy"), o(f, "class", "svelte-ltkwvy"), o(C, "class", "line2 svelte-ltkwvy"), o(s, "class", "texts svelte-ltkwvy"), o(e, "tabindex", "0"), o(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), o(e, "class", "svelte-ltkwvy"), le(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(g, w) {
      j(g, e, w), h.m(e, null), p(e, u), p(e, s), p(s, f), p(f, a), p(a, m), p(f, v), y && y.m(f, null), p(s, T), p(s, C), p(C, L), N || (S = [
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[11]
        ),
        D(
          e,
          "focus",
          /*focus_handler*/
          n[12]
        )
      ], N = !0);
    },
    p(g, [w]) {
      var K, d;
      F === (F = b(g, w)) && h ? h.p(g, w) : (h.d(1), h = F(g), h && (h.c(), h.m(e, u))), w & /*feature*/
      1 && c !== (c = /*feature*/
      g[0].place_name.replace(/,.*/, "") + "") && Me(m, c), w & /*showPlaceType, feature, imageUrl*/
      37 && (_ = /*showPlaceType*/
      g[2] === "always" || /*showPlaceType*/
      g[2] && !/*feature*/
      g[0].address && /*feature*/
      ((K = g[0].properties) == null ? void 0 : K.kind) !== "road" && /*feature*/
      ((d = g[0].properties) == null ? void 0 : d.kind) !== "road_relation" && !/*feature*/
      g[0].id.startsWith("address.") && !/*feature*/
      g[0].id.startsWith("postal_code.") && (!/*feature*/
      g[0].id.startsWith("poi.") || !/*imageUrl*/
      g[5])), _ ? y ? y.p(g, w) : (y = ot(g), y.c(), y.m(f, null)) : y && (y.d(1), y = null), w & /*feature*/
      1 && M !== (M = /*feature*/
      g[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Me(L, M), w & /*selected*/
      2 && o(
        e,
        "data-selected",
        /*selected*/
        g[1]
      ), w & /*selected*/
      2 && le(
        e,
        "selected",
        /*selected*/
        g[1]
      );
    },
    i: U,
    o: U,
    d(g) {
      g && z(e), h.d(), y && y.d(), N = !1, ne(S);
    }
  };
}
function Ln(n, e, t) {
  var S;
  let r, l, { feature: u } = e, { selected: s = !1 } = e, { showPlaceType: f } = e, { missingIconsCache: a } = e, { iconsBaseUrl: c } = e;
  const m = (S = u.properties) == null ? void 0 : S.categories;
  let v, _, T = 0;
  function C(b) {
    _ && a.add(_), t(9, T++, T);
  }
  function M(b) {
    lt.call(this, n, b);
  }
  function L(b) {
    lt.call(this, n, b);
  }
  const N = (b) => C(b.currentTarget);
  return n.$$set = (b) => {
    "feature" in b && t(0, u = b.feature), "selected" in b && t(1, s = b.selected), "showPlaceType" in b && t(2, f = b.showPlaceType), "missingIconsCache" in b && t(8, a = b.missingIconsCache), "iconsBaseUrl" in b && t(3, c = b.iconsBaseUrl);
  }, n.$$.update = () => {
    var b, F, h, y;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    1848)
      do
        t(10, r--, r), t(4, v = m == null ? void 0 : m[r]), t(5, _ = v ? c + v.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!_ || a.has(_)));
    n.$$.dirty & /*feature*/
    1 && t(6, l = u.id.startsWith("poi.") ? (F = (b = u.properties) == null ? void 0 : b.categories) == null ? void 0 : F.join(", ") : ((y = (h = u.properties) == null ? void 0 : h.place_type_name) == null ? void 0 : y[0]) ?? u.place_type[0]);
  }, t(10, r = (m == null ? void 0 : m.length) ?? 0), [
    u,
    s,
    f,
    c,
    v,
    _,
    l,
    C,
    a,
    T,
    r,
    M,
    L,
    N
  ];
}
class Bn extends me {
  constructor(e) {
    super(), he(this, e, Ln, Tn, de, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function Rn(n) {
  let e;
  return {
    c() {
      e = I("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', o(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      j(t, e, r);
    },
    p: U,
    i: U,
    o: U,
    d(t) {
      t && z(e);
    }
  };
}
class En extends me {
  constructor(e) {
    super(), he(this, e, null, Rn, de, {});
  }
}
function Cn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), o(e, "viewBox", "0 0 60.006 21.412"), o(e, "width", "14"), o(e, "height", "20"), o(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class In extends me {
  constructor(e) {
    super(), he(this, e, null, Cn, de, {});
  }
}
function Sn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), o(e, "width", "14"), o(e, "height", "14"), o(e, "viewBox", "0 0 15 15"), o(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class Un extends me {
  constructor(e) {
    super(), he(this, e, null, Sn, de, {});
  }
}
function zn(n, e, t) {
  const r = e[1], l = e[0], u = r - l;
  return n === r && t ? n : ((n - l) % u + u) % u + l;
}
function ct(n) {
  const e = [...n];
  return e[2] < e[0] && (e[2] += 360), e;
}
let ke;
async function An(n, e, t) {
  const r = n == null ? void 0 : n.getCenterAndZoom();
  for (const l of e ?? [])
    if (!(r && (l.minZoom != null && l.minZoom > r[0] || l.maxZoom != null && l.maxZoom < r[0]))) {
      if (l.type === "fixed")
        return l.coordinates.join(",");
      e:
        if (l.type === "client-geolocation") {
          if (ke && l.cachedLocationExpiry && ke.time + l.cachedLocationExpiry > Date.now()) {
            if (!ke.coords)
              break e;
            return ke.coords;
          }
          let u;
          try {
            return u = await new Promise((s, f) => {
              t.signal.addEventListener("abort", () => {
                f(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (a) => {
                  s(
                    [a.coords.longitude, a.coords.latitude].map((c) => c.toFixed(6)).join(",")
                  );
                },
                (a) => {
                  f(a);
                },
                l
              );
            }), u;
          } catch {
          } finally {
            l.cachedLocationExpiry && (ke = {
              time: Date.now(),
              coords: u
            });
          }
          if (t.signal.aborted)
            return;
        }
      if (l.type === "server-geolocation")
        return "ip";
      if (r && l.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
function ft(n, e, t) {
  const r = n.slice();
  return r[77] = e[t], r[79] = t, r;
}
function ut(n) {
  let e, t;
  return e = new En({}), {
    c() {
      oe(e.$$.fragment);
    },
    m(r, l) {
      ee(e, r, l), t = !0;
    },
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      O(e.$$.fragment, r), t = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function at(n) {
  let e, t, r, l, u;
  return t = new In({}), {
    c() {
      e = I("button"), oe(t.$$.fragment), o(e, "type", "button"), o(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), o(e, "class", "svelte-1r7dvt7"), le(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(s, f) {
      j(s, e, f), ee(t, e, null), r = !0, l || (u = D(
        e,
        "click",
        /*click_handler_2*/
        n[63]
      ), l = !0);
    },
    p(s, f) {
      (!r || f[0] & /*reverseButtonTitle*/
      512) && o(
        e,
        "title",
        /*reverseButtonTitle*/
        s[9]
      ), (!r || f[0] & /*reverseActive*/
      1) && le(
        e,
        "active",
        /*reverseActive*/
        s[0]
      );
    },
    i(s) {
      r || (Z(t.$$.fragment, s), r = !0);
    },
    o(s) {
      O(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && z(e), te(t), l = !1, u();
    }
  };
}
function Pn(n) {
  let e, t = [], r = /* @__PURE__ */ new Map(), l, u, s, f = st(
    /*listFeatures*/
    n[13]
  );
  const a = (c) => (
    /*feature*/
    c[77].id + /*feature*/
    (c[77].address ? "," + /*feature*/
    c[77].address : "")
  );
  for (let c = 0; c < f.length; c += 1) {
    let m = ft(n, f, c), v = a(m);
    r.set(v, t[c] = dt(v, m));
  }
  return {
    c() {
      e = I("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      o(e, "class", "svelte-1r7dvt7");
    },
    m(c, m) {
      j(c, e, m);
      for (let v = 0; v < t.length; v += 1)
        t[v] && t[v].m(e, null);
      l = !0, u || (s = [
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[67]
        ),
        D(
          e,
          "blur",
          /*blur_handler_1*/
          n[68]
        )
      ], u = !0);
    },
    p(c, m) {
      m[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (f = st(
        /*listFeatures*/
        c[13]
      ), Ue(), t = dn(t, m, a, 1, c, f, r, e, an, dt, null, ft), ze());
    },
    i(c) {
      if (!l) {
        for (let m = 0; m < f.length; m += 1)
          Z(t[m]);
        l = !0;
      }
    },
    o(c) {
      for (let m = 0; m < t.length; m += 1)
        O(t[m]);
      l = !1;
    },
    d(c) {
      c && z(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      u = !1, ne(s);
    }
  };
}
function jn(n) {
  let e, t, r, l, u, s;
  return t = new kt({}), {
    c() {
      e = I("div"), oe(t.$$.fragment), r = V(), l = I("div"), u = se(
        /*noResultsMessage*/
        n[7]
      ), o(l, "class", "svelte-1r7dvt7"), o(e, "class", "no-results svelte-1r7dvt7");
    },
    m(f, a) {
      j(f, e, a), ee(t, e, null), p(e, r), p(e, l), p(l, u), s = !0;
    },
    p(f, a) {
      (!s || a[0] & /*noResultsMessage*/
      128) && Me(
        u,
        /*noResultsMessage*/
        f[7]
      );
    },
    i(f) {
      s || (Z(t.$$.fragment, f), s = !0);
    },
    o(f) {
      O(t.$$.fragment, f), s = !1;
    },
    d(f) {
      f && z(e), te(t);
    }
  };
}
function Wn(n) {
  let e = "", t;
  return {
    c() {
      t = se(e);
    },
    m(r, l) {
      j(r, t, l);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(t);
    }
  };
}
function Zn(n) {
  let e, t, r, l, u, s, f, a, c, m, v;
  return t = new kt({}), a = new vt({}), {
    c() {
      e = I("div"), oe(t.$$.fragment), r = V(), l = I("div"), u = se(
        /*errorMessage*/
        n[6]
      ), s = V(), f = I("button"), oe(a.$$.fragment), o(l, "class", "svelte-1r7dvt7"), o(f, "class", "svelte-1r7dvt7"), o(e, "class", "error svelte-1r7dvt7");
    },
    m(_, T) {
      j(_, e, T), ee(t, e, null), p(e, r), p(e, l), p(l, u), p(e, s), p(e, f), ee(a, f, null), c = !0, m || (v = D(
        f,
        "click",
        /*click_handler_3*/
        n[64]
      ), m = !0);
    },
    p(_, T) {
      (!c || T[0] & /*errorMessage*/
      64) && Me(
        u,
        /*errorMessage*/
        _[6]
      );
    },
    i(_) {
      c || (Z(t.$$.fragment, _), Z(a.$$.fragment, _), c = !0);
    },
    o(_) {
      O(t.$$.fragment, _), O(a.$$.fragment, _), c = !1;
    },
    d(_) {
      _ && z(e), te(t), te(a), m = !1, v();
    }
  };
}
function dt(n, e) {
  let t, r, l;
  function u() {
    return (
      /*mouseenter_handler*/
      e[65](
        /*i*/
        e[79]
      )
    );
  }
  function s() {
    return (
      /*focus_handler_1*/
      e[66](
        /*feature*/
        e[77]
      )
    );
  }
  return r = new Bn({
    props: {
      feature: (
        /*feature*/
        e[77]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[14] === /*i*/
        e[79]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        e[19]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        e[11]
      )
    }
  }), r.$on("mouseenter", u), r.$on("focus", s), {
    key: n,
    first: null,
    c() {
      t = en(), oe(r.$$.fragment), this.first = t;
    },
    m(f, a) {
      j(f, t, a), ee(r, f, a), l = !0;
    },
    p(f, a) {
      e = f;
      const c = {};
      a[0] & /*listFeatures*/
      8192 && (c.feature = /*feature*/
      e[77]), a[0] & /*showPlaceType*/
      1024 && (c.showPlaceType = /*showPlaceType*/
      e[10]), a[0] & /*selectedItemIndex, listFeatures*/
      24576 && (c.selected = /*selectedItemIndex*/
      e[14] === /*i*/
      e[79]), a[0] & /*iconsBaseUrl*/
      2048 && (c.iconsBaseUrl = /*iconsBaseUrl*/
      e[11]), r.$set(c);
    },
    i(f) {
      l || (Z(r.$$.fragment, f), l = !0);
    },
    o(f) {
      O(r.$$.fragment, f), l = !1;
    },
    d(f) {
      f && z(t), te(r, f);
    }
  };
}
function Nn(n) {
  let e, t, r, l, u, s, f, a, c, m, v, _, T, C, M, L, N, S, b, F;
  l = new Un({}), m = new vt({});
  let h = (
    /*abortController*/
    n[18] && ut()
  ), y = (
    /*enableReverse*/
    n[5] === !0 && at(n)
  );
  const R = (
    /*#slots*/
    n[55].default
  ), E = Xt(
    R,
    n,
    /*$$scope*/
    n[54],
    null
  ), g = [Zn, Wn, jn, Pn], w = [];
  function K(d, A) {
    var $, ce;
    return (
      /*error*/
      d[17] ? 0 : (
        /*focusedDelayed*/
        d[15] ? (
          /*listFeatures*/
          (($ = d[13]) == null ? void 0 : $.length) === 0 ? 2 : (
            /*focusedDelayed*/
            d[15] && /*listFeatures*/
            ((ce = d[13]) != null && ce.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(M = K(n)) && (L = w[M] = g[M](n)), {
    c() {
      e = I("form"), t = I("div"), r = I("button"), oe(l.$$.fragment), u = V(), s = I("input"), f = V(), a = I("div"), c = I("button"), oe(m.$$.fragment), v = V(), h && h.c(), _ = V(), y && y.c(), T = V(), E && E.c(), C = V(), L && L.c(), o(r, "class", "search-button svelte-1r7dvt7"), o(r, "type", "button"), o(
        s,
        "placeholder",
        /*placeholder*/
        n[8]
      ), o(
        s,
        "aria-label",
        /*placeholder*/
        n[8]
      ), o(s, "class", "svelte-1r7dvt7"), o(c, "type", "button"), o(
        c,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), o(c, "class", "svelte-1r7dvt7"), o(a, "class", "clear-button-container svelte-1r7dvt7"), le(
        a,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), o(t, "class", "input-group svelte-1r7dvt7"), o(e, "tabindex", "0"), o(e, "class", N = nt(
        /*className*/
        n[2]
      ) + " svelte-1r7dvt7"), le(
        e,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(d, A) {
      j(d, e, A), p(e, t), p(t, r), ee(l, r, null), p(t, u), p(t, s), n[57](s), rt(
        s,
        /*searchValue*/
        n[1]
      ), p(t, f), p(t, a), p(a, c), ee(m, c, null), p(a, v), h && h.m(a, null), p(t, _), y && y.m(t, null), p(t, T), E && E.m(t, null), p(e, C), ~M && w[M].m(e, null), S = !0, b || (F = [
        D(
          r,
          "click",
          /*click_handler*/
          n[56]
        ),
        D(
          s,
          "input",
          /*input_1_input_handler*/
          n[58]
        ),
        D(
          s,
          "focus",
          /*focus_handler*/
          n[59]
        ),
        D(
          s,
          "blur",
          /*blur_handler*/
          n[60]
        ),
        D(
          s,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        D(
          s,
          "input",
          /*input_handler*/
          n[61]
        ),
        D(
          c,
          "click",
          /*click_handler_1*/
          n[62]
        ),
        D(e, "submit", tn(
          /*handleOnSubmit*/
          n[20]
        ))
      ], b = !0);
    },
    p(d, A) {
      (!S || A[0] & /*placeholder*/
      256) && o(
        s,
        "placeholder",
        /*placeholder*/
        d[8]
      ), (!S || A[0] & /*placeholder*/
      256) && o(
        s,
        "aria-label",
        /*placeholder*/
        d[8]
      ), A[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      d[1] && rt(
        s,
        /*searchValue*/
        d[1]
      ), (!S || A[0] & /*clearButtonTitle*/
      8) && o(
        c,
        "title",
        /*clearButtonTitle*/
        d[3]
      ), /*abortController*/
      d[18] ? h ? A[0] & /*abortController*/
      262144 && Z(h, 1) : (h = ut(), h.c(), Z(h, 1), h.m(a, null)) : h && (Ue(), O(h, 1, 1, () => {
        h = null;
      }), ze()), (!S || A[0] & /*searchValue*/
      2) && le(
        a,
        "displayable",
        /*searchValue*/
        d[1] !== ""
      ), /*enableReverse*/
      d[5] === !0 ? y ? (y.p(d, A), A[0] & /*enableReverse*/
      32 && Z(y, 1)) : (y = at(d), y.c(), Z(y, 1), y.m(t, T)) : y && (Ue(), O(y, 1, 1, () => {
        y = null;
      }), ze()), E && E.p && (!S || A[1] & /*$$scope*/
      8388608) && xt(
        E,
        R,
        d,
        /*$$scope*/
        d[54],
        S ? Yt(
          R,
          /*$$scope*/
          d[54],
          A,
          null
        ) : $t(
          /*$$scope*/
          d[54]
        ),
        null
      );
      let $ = M;
      M = K(d), M === $ ? ~M && w[M].p(d, A) : (L && (Ue(), O(w[$], 1, 1, () => {
        w[$] = null;
      }), ze()), ~M ? (L = w[M], L ? L.p(d, A) : (L = w[M] = g[M](d), L.c()), Z(L, 1), L.m(e, null)) : L = null), (!S || A[0] & /*className*/
      4 && N !== (N = nt(
        /*className*/
        d[2]
      ) + " svelte-1r7dvt7")) && o(e, "class", N), (!S || A[0] & /*className, collapsed, searchValue*/
      22) && le(
        e,
        "can-collapse",
        /*collapsed*/
        d[4] && /*searchValue*/
        d[1] === ""
      );
    },
    i(d) {
      S || (Z(l.$$.fragment, d), Z(m.$$.fragment, d), Z(h), Z(y), Z(E, d), Z(L), S = !0);
    },
    o(d) {
      O(l.$$.fragment, d), O(m.$$.fragment, d), O(h), O(y), O(E, d), O(L), S = !1;
    },
    d(d) {
      d && z(e), te(l), n[57](null), te(m), h && h.d(), y && y.d(), E && E.d(d), ~M && w[M].d(), b = !1, ne(F);
    }
  };
}
function Fn(n, e, t) {
  let r, { $$slots: l = {}, $$scope: u } = e, { class: s = void 0 } = e, { apiKey: f } = e, { bbox: a = void 0 } = e, { clearButtonTitle: c = "clear" } = e, { clearOnBlur: m = !1 } = e, { collapsed: v = !1 } = e, { country: _ = void 0 } = e, { debounceSearch: T = 200 } = e, { enableReverse: C = !1 } = e, { errorMessage: M = "Something went wrong…" } = e, { filter: L = () => !0 } = e, { flyTo: N = !0 } = e, { fuzzyMatch: S = !0 } = e, { language: b = void 0 } = e, { limit: F = void 0 } = e, { mapController: h = void 0 } = e, { minLength: y = 2 } = e, { noResultsMessage: R = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: E = "Search" } = e, { proximity: g = [{ type: "server-geolocation" }] } = e, { reverseActive: w = C === "always" } = e, { reverseButtonTitle: K = "toggle reverse geocoding" } = e, { searchValue: d = "" } = e, { showFullGeometry: A = !0 } = e, { showPlaceType: $ = "ifNeeded" } = e, { showResultsWhileTyping: ce = !0 } = e, { types: fe = void 0 } = e, { zoom: Le = 16 } = e, { maxZoom: ve = 18 } = e, { apiUrl: Ae = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Pe = {} } = e, { iconsBaseUrl: He = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.0.0/icons/" } = e, { adjustUrlQuery: je = (i) => {
  } } = e;
  function pt() {
    J.focus();
  }
  function Mt() {
    J.blur();
  }
  function Je(i, W = !0) {
    t(1, d = i), W ? (t(14, P = -1), Ye()) : (Ne(), setTimeout(() => {
      J.focus(), J.select();
    }));
  }
  function Tt() {
    t(13, B = void 0), t(51, k = void 0), t(14, P = -1);
  }
  function Lt() {
    t(50, G = []), t(51, k = void 0);
  }
  let ge = !1, B, G, k, Xe = "", J, P = -1, X, Be = [], ue, _e, Re, We;
  const Bt = /* @__PURE__ */ new Set(), re = sn();
  ln(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setMarkers(void 0, void 0));
  });
  function Ye(i) {
    if (_e && (clearTimeout(_e), _e = void 0), P > -1 && B)
      t(51, k = B[P]), t(1, d = k.place_name.replace(/,.*/, "")), t(17, X = void 0), t(50, G = void 0), t(14, P = -1);
    else if (d) {
      const W = i || !xe();
      Ze(d, { exact: !0 }).then(() => {
        t(50, G = B), t(51, k = void 0), W && Rt();
      }).catch((Y) => t(17, X = Y));
    }
  }
  function xe() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(d);
  }
  async function Ze(i, { byId: W = !1, exact: Y = !1 } = {}) {
    t(17, X = void 0), ue == null || ue.abort();
    const x = new AbortController();
    t(18, ue = x);
    try {
      const Q = xe(), H = new URLSearchParams();
      if (b !== void 0 && H.set("language", Array.isArray(b) ? b.join(",") : b ?? ""), fe && H.set("types", fe.join(",")), a && H.set("bbox", a.map((Ce) => Ce.toFixed(6)).join(",")), _ && H.set("country", Array.isArray(_) ? _.join(",") : _), !W && !Q) {
        const Ce = await An(h, g, x);
        Ce && H.set("proximity", Ce), (Y || !ce) && H.set("autocomplete", "false"), H.set("fuzzyMatch", String(S));
      }
      F !== void 0 && (!Q || (fe == null ? void 0 : fe.length) === 1) && H.set("limit", String(F)), H.set("key", f), je(H);
      const Ee = Ae + "/" + encodeURIComponent(i) + ".json?" + H.toString();
      if (Ee === Xe) {
        W ? (t(13, B = void 0), t(51, k = Be[0])) : t(13, B = Be);
        return;
      }
      Xe = Ee;
      const $e = await fetch(Ee, { signal: x.signal, ...Pe });
      if (!$e.ok)
        throw new Error();
      const Oe = await $e.json();
      re("response", { url: Ee, featureCollection: Oe }), W ? (t(13, B = void 0), t(51, k = Oe.features[0]), Be = [k]) : (t(13, B = Oe.features.filter(L)), Be = B, Q && J.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      x === ue && t(18, ue = void 0);
    }
  }
  function Rt() {
    var Y;
    if (!(G != null && G.length) || !N)
      return;
    const i = [180, 90, -180, -90], W = !G.some((x) => !x.matching_text);
    for (const x of G)
      if (W || !x.matching_text)
        for (const Q of [0, 1, 2, 3])
          i[Q] = Math[Q < 2 ? "min" : "max"](i[Q], ((Y = x.bbox) == null ? void 0 : Y[Q]) ?? x.center[Q % 2]);
    h && G.length > 0 && (k && i[0] === i[2] && i[1] === i[3] ? h.flyTo(k.center, Le) : h.fitBounds(ct(i), 50, ve));
  }
  function Et(i) {
    t(0, w = C === "always"), Je(zn(i[0], [-180, 180], !0).toFixed(6) + "," + i[1].toFixed(6));
  }
  function Ct(i) {
    if (!B)
      return;
    let W = i.key === "ArrowDown" ? 1 : i.key === "ArrowUp" ? -1 : 0;
    W ? (P === -1 && W === -1 && t(14, P = B.length), t(14, P += W), P >= B.length && t(14, P = -1), i.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(i.key) && t(14, P = -1);
  }
  function Ne(i = !0) {
    if (t(17, X = void 0), ce) {
      if (_e && clearTimeout(_e), d.length < y)
        return;
      const W = d;
      _e = window.setTimeout(
        () => {
          Ze(W).catch((Y) => t(17, X = Y));
        },
        i ? T : 0
      );
    } else
      t(13, B = void 0), t(17, X = void 0);
  }
  function Fe(i) {
    t(51, k = i), t(1, d = i.place_name), t(14, P = -1);
  }
  const It = () => J.focus();
  function St(i) {
    qe[i ? "unshift" : "push"](() => {
      J = i, t(16, J);
    });
  }
  function Ut() {
    d = this.value, t(1, d), t(12, ge), t(26, m);
  }
  const zt = () => t(12, ge = !0), At = () => t(12, ge = !1), Pt = () => Ne(), jt = () => {
    t(1, d = ""), J.focus();
  }, Wt = () => t(0, w = !w), Zt = () => t(17, X = void 0), Nt = (i) => t(14, P = i), Ft = (i) => Fe(i), Ot = () => t(14, P = -1), Gt = () => {
  };
  return n.$$set = (i) => {
    "class" in i && t(2, s = i.class), "apiKey" in i && t(24, f = i.apiKey), "bbox" in i && t(25, a = i.bbox), "clearButtonTitle" in i && t(3, c = i.clearButtonTitle), "clearOnBlur" in i && t(26, m = i.clearOnBlur), "collapsed" in i && t(4, v = i.collapsed), "country" in i && t(27, _ = i.country), "debounceSearch" in i && t(28, T = i.debounceSearch), "enableReverse" in i && t(5, C = i.enableReverse), "errorMessage" in i && t(6, M = i.errorMessage), "filter" in i && t(29, L = i.filter), "flyTo" in i && t(30, N = i.flyTo), "fuzzyMatch" in i && t(31, S = i.fuzzyMatch), "language" in i && t(32, b = i.language), "limit" in i && t(33, F = i.limit), "mapController" in i && t(34, h = i.mapController), "minLength" in i && t(35, y = i.minLength), "noResultsMessage" in i && t(7, R = i.noResultsMessage), "placeholder" in i && t(8, E = i.placeholder), "proximity" in i && t(36, g = i.proximity), "reverseActive" in i && t(0, w = i.reverseActive), "reverseButtonTitle" in i && t(9, K = i.reverseButtonTitle), "searchValue" in i && t(1, d = i.searchValue), "showFullGeometry" in i && t(37, A = i.showFullGeometry), "showPlaceType" in i && t(10, $ = i.showPlaceType), "showResultsWhileTyping" in i && t(38, ce = i.showResultsWhileTyping), "types" in i && t(39, fe = i.types), "zoom" in i && t(40, Le = i.zoom), "maxZoom" in i && t(41, ve = i.maxZoom), "apiUrl" in i && t(42, Ae = i.apiUrl), "fetchParameters" in i && t(43, Pe = i.fetchParameters), "iconsBaseUrl" in i && t(11, He = i.iconsBaseUrl), "adjustUrlQuery" in i && t(44, je = i.adjustUrlQuery), "$$scope" in i && t(54, u = i.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*focused, clearOnBlur*/
    67112960 && setTimeout(() => {
      t(15, Re = ge), m && !ge && t(1, d = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    16 && d.length < y && (t(51, k = void 0), t(13, B = void 0), t(17, X = void 0), t(50, G = B)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    1048640 && A && k && !k.address && k.geometry.type === "Point" && Ze(k.id, { byId: !0 }).catch((i) => t(17, X = i)), n.$$.dirty[0] & /*flyTo*/
    1073741824 | n.$$.dirty[1] & /*mapController, picked, prevIdToFly, maxZoom, zoom*/
    3147272 && (h && k && k.id !== We && N && (!k.bbox || k.bbox[0] === k.bbox[2] && k.bbox[1] === k.bbox[3] ? h.flyTo(k.center, k.id.startsWith("poi.") || k.id.startsWith("address.") ? ve : Le) : h.fitBounds(ct(k.bbox), 50, ve), t(13, B = void 0), t(50, G = void 0), t(14, P = -1)), t(52, We = k == null ? void 0 : k.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    524288 && G !== B && t(50, G = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    1572872 && h && h.setMarkers(G, k), n.$$.dirty[0] & /*searchValue*/
    2 && t(14, P = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController*/
    8 && h && h.setEventHandler((i) => {
      switch (i.type) {
        case "mapClick":
          w && Et(i.coordinates);
          break;
        case "markerClick":
          {
            const W = B == null ? void 0 : B.find((Y) => Y.id === i.id);
            W && Fe(W);
          }
          break;
        case "markerMouseEnter":
          t(14, P = Re ? (B == null ? void 0 : B.findIndex((W) => W.id === i.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          t(14, P = -1);
          break;
      }
    }), n.$$.dirty[0] & /*selectedItemIndex*/
    16384 | n.$$.dirty[1] & /*mapController*/
    8 && (h == null || h.setSelectedMarker(P)), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && t(53, r = B == null ? void 0 : B[P]), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    8) {
      const i = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(d);
      h == null || h.setReverseMarker(i ? [Number(i[1]), Number(i[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    4194304 && re("select", r), n.$$.dirty[1] & /*picked*/
    1048576 && re("pick", k), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && re("optionsVisibilityChange", Re && !!B), n.$$.dirty[0] & /*listFeatures*/
    8192 && re("featuresListed", B), n.$$.dirty[1] & /*markedFeatures*/
    524288 && re("featuresMarked", G), n.$$.dirty[0] & /*reverseActive*/
    1 && re("reverseToggle", w), n.$$.dirty[0] & /*searchValue*/
    2 && re("queryChange", d), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    8 && h && h.indicateReverse(w);
  }, [
    w,
    d,
    s,
    c,
    v,
    C,
    M,
    R,
    E,
    K,
    $,
    He,
    ge,
    B,
    P,
    Re,
    J,
    X,
    ue,
    Bt,
    Ye,
    Ct,
    Ne,
    Fe,
    f,
    a,
    m,
    _,
    T,
    L,
    N,
    S,
    b,
    F,
    h,
    y,
    g,
    A,
    ce,
    fe,
    Le,
    ve,
    Ae,
    Pe,
    je,
    pt,
    Mt,
    Je,
    Tt,
    Lt,
    G,
    k,
    We,
    r,
    u,
    l,
    It,
    St,
    Ut,
    zt,
    At,
    Pt,
    jt,
    Wt,
    Zt,
    Nt,
    Ft,
    Ot,
    Gt
  ];
}
class On extends me {
  constructor(e) {
    super(), he(
      this,
      e,
      Fn,
      Nn,
      de,
      {
        class: 2,
        apiKey: 24,
        bbox: 25,
        clearButtonTitle: 3,
        clearOnBlur: 26,
        collapsed: 4,
        country: 27,
        debounceSearch: 28,
        enableReverse: 5,
        errorMessage: 6,
        filter: 29,
        flyTo: 30,
        fuzzyMatch: 31,
        language: 32,
        limit: 33,
        mapController: 34,
        minLength: 35,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 36,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 37,
        showPlaceType: 10,
        showResultsWhileTyping: 38,
        types: 39,
        zoom: 40,
        maxZoom: 41,
        apiUrl: 42,
        fetchParameters: 43,
        iconsBaseUrl: 11,
        adjustUrlQuery: 44,
        focus: 45,
        blur: 46,
        setQuery: 47,
        clearList: 48,
        clearMap: 49
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[45];
  }
  get blur() {
    return this.$$.ctx[46];
  }
  get setQuery() {
    return this.$$.ctx[47];
  }
  get clearList() {
    return this.$$.ctx[48];
  }
  get clearMap() {
    return this.$$.ctx[49];
  }
}
const ht = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], Gn = [
  "apiKey",
  "bbox",
  "clearButtonTitle",
  "clearOnBlur",
  "collapsed",
  "country",
  "debounceSearch",
  "enableReverse",
  "reverseActive",
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
  "adjustUrlQuery",
  "types",
  "zoom",
  "mapController"
];
function mt(n) {
  return "on" + n[0].toUpperCase() + n.slice(1);
}
const qn = qt(function(e, t) {
  const r = et(), l = et(), u = { ...e };
  for (const s of ht)
    delete u[mt(s)];
  Qe(() => {
    if (!r.current)
      throw new Error();
    const s = new On({
      target: r.current,
      props: u
    });
    return l.current = s, () => s.$destroy();
  }, []);
  for (const s of Gn)
    Qe(() => {
      l.current && e[s] !== void 0 && l.current.$set({ [s]: e[s] });
    }, [e[s]]);
  for (const s of ht) {
    const f = e[mt(s)];
    Qe(
      () => {
        var a;
        return f && ((a = l.current) == null ? void 0 : a.$on(s, (c) => {
          f(c.detail);
        }));
      },
      [f]
    );
  }
  return Vt(t, () => ({
    setQuery: (s, f = !0) => {
      var a;
      return (a = l.current) == null ? void 0 : a.setQuery(s, f);
    },
    clearMap: () => {
      var s;
      return (s = l.current) == null ? void 0 : s.clearMap();
    },
    clearList: () => {
      var s;
      return (s = l.current) == null ? void 0 : s.clearList();
    },
    focus: () => {
      var s;
      return (s = l.current) == null ? void 0 : s.focus();
    },
    blur: () => {
      var s;
      return (s = l.current) == null ? void 0 : s.blur();
    }
  })), Kt("div", { ref: r });
});
export {
  qn as GeocodingControl
};
//# sourceMappingURL=react.js.map
