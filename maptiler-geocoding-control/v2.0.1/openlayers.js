var gn = Object.defineProperty;
var Vt = (n) => {
  throw TypeError(n);
};
var mn = (n, e, t) => e in n ? gn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ne = (n, e, t) => mn(n, typeof e != "symbol" ? e + "" : e, t), Zt = (n, e, t) => e.has(n) || Vt("Cannot " + t);
var V = (n, e, t) => (Zt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Lt = (n, e, t) => e.has(n) ? Vt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), St = (n, e, t, i) => (Zt(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t);
import { Control as yn } from "ol/control";
import xe from "ol/events/Event";
import { Feature as fe } from "ol";
import { Point as xt, Polygon as Ht, MultiPolygon as Yt, GeometryCollection as pn, LineString as Xt, MultiLineString as Kt } from "ol/geom";
import vn from "ol/layer/Vector";
import { fromLonLat as tt, transformExtent as bn, toLonLat as Jt, getUserProjection as wn } from "ol/proj";
import _n from "ol/source/Vector";
import $t from "ol/style/Fill";
import En from "ol/style/Icon";
import ei from "ol/style/Stroke";
import Ln from "ol/style/Style";
import Sn from "ol/style/Text";
function D() {
}
function xn(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Wi(n) {
  return n();
}
function ti() {
  return /* @__PURE__ */ Object.create(null);
}
function ye(n) {
  n.forEach(Wi);
}
function Ai(n) {
  return typeof n == "function";
}
function Pe(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let it;
function K(n, e) {
  return n === e ? !0 : (it || (it = document.createElement("a")), it.href = e, n === it.href);
}
function Mn(n) {
  return Object.keys(n).length === 0;
}
function kn(n, e, t, i) {
  if (n) {
    const r = zi(n, e, t, i);
    return n[0](r);
  }
}
function zi(n, e, t, i) {
  return n[1] && i ? xn(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function Cn(n, e, t, i) {
  if (n[2] && i) {
    const r = n[2](i(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const o = [], l = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < l; s += 1)
        o[s] = e.dirty[s] | r[s];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Nn(n, e, t, i, r, o) {
  if (r) {
    const l = zi(e, t, i, o);
    n.p(l, r);
  }
}
function Pn(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function ii(n) {
  return n ?? "";
}
function T(n, e) {
  n.appendChild(e);
}
function U(n, e, t) {
  n.insertBefore(e, t || null);
}
function F(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function W(n) {
  return document.createElement(n);
}
function de(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Ee(n) {
  return document.createTextNode(n);
}
function ie() {
  return Ee(" ");
}
function Rn() {
  return Ee("");
}
function ee(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function Tn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function p(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function In(n) {
  return Array.from(n.childNodes);
}
function Qe(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function ni(n, e) {
  n.value = e ?? "";
}
function be(n, e, t) {
  n.classList.toggle(e, !!t);
}
function On(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
let Ve;
function qe(n) {
  Ve = n;
}
function Fi() {
  if (!Ve) throw new Error("Function called outside component initialization");
  return Ve;
}
function Wn(n) {
  Fi().$$.on_destroy.push(n);
}
function An() {
  const n = Fi();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const r = n.$$.callbacks[e];
    if (r) {
      const o = On(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return r.slice().forEach((l) => {
        l.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ri(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Fe = [], Nt = [];
let Be = [];
const oi = [], zn = /* @__PURE__ */ Promise.resolve();
let Pt = !1;
function Fn() {
  Pt || (Pt = !0, zn.then(Bi));
}
function Rt(n) {
  Be.push(n);
}
const Mt = /* @__PURE__ */ new Set();
let Ae = 0;
function Bi() {
  if (Ae !== 0)
    return;
  const n = Ve;
  do {
    try {
      for (; Ae < Fe.length; ) {
        const e = Fe[Ae];
        Ae++, qe(e), Bn(e.$$);
      }
    } catch (e) {
      throw Fe.length = 0, Ae = 0, e;
    }
    for (qe(null), Fe.length = 0, Ae = 0; Nt.length; ) Nt.pop()();
    for (let e = 0; e < Be.length; e += 1) {
      const t = Be[e];
      Mt.has(t) || (Mt.add(t), t());
    }
    Be.length = 0;
  } while (Fe.length);
  for (; oi.length; )
    oi.pop()();
  Pt = !1, Mt.clear(), qe(n);
}
function Bn(n) {
  if (n.fragment !== null) {
    n.update(), ye(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Rt);
  }
}
function Dn(n) {
  const e = [], t = [];
  Be.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Be = e;
}
const nt = /* @__PURE__ */ new Set();
let Ce;
function rt() {
  Ce = {
    r: 0,
    c: [],
    p: Ce
    // parent group
  };
}
function ot() {
  Ce.r || ye(Ce.c), Ce = Ce.p;
}
function G(n, e) {
  n && n.i && (nt.delete(n), n.i(e));
}
function Y(n, e, t, i) {
  if (n && n.o) {
    if (nt.has(n)) return;
    nt.add(n), Ce.c.push(() => {
      nt.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function si(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Un(n, e) {
  Y(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Gn(n, e, t, i, r, o, l, s, c, u, d, a) {
  let f = n.length, h = o.length, m = f;
  const y = {};
  for (; m--; ) y[n[m].key] = m;
  const b = [], w = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), S = [];
  for (m = h; m--; ) {
    const v = a(r, o, m), _ = t(v);
    let k = l.get(_);
    k ? S.push(() => k.p(v, e)) : (k = u(_, v), k.c()), w.set(_, b[m] = k), _ in y && L.set(_, Math.abs(m - y[_]));
  }
  const E = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function C(v) {
    G(v, 1), v.m(s, d), l.set(v.key, v), d = v.first, h--;
  }
  for (; f && h; ) {
    const v = b[h - 1], _ = n[f - 1], k = v.key, I = _.key;
    v === _ ? (d = v.first, f--, h--) : w.has(I) ? !l.has(k) || E.has(k) ? C(v) : M.has(I) ? f-- : L.get(k) > L.get(I) ? (M.add(k), C(v)) : (E.add(I), f--) : (c(_, l), f--);
  }
  for (; f--; ) {
    const v = n[f];
    w.has(v.key) || c(v, l);
  }
  for (; h; ) C(b[h - 1]);
  return ye(S), b;
}
function Le(n) {
  n && n.c();
}
function ge(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), Rt(() => {
    const o = n.$$.on_mount.map(Wi).filter(Ai);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : ye(o), n.$$.on_mount = [];
  }), r.forEach(Rt);
}
function me(n, e) {
  const t = n.$$;
  t.fragment !== null && (Dn(t.after_update), ye(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function jn(n, e) {
  n.$$.dirty[0] === -1 && (Fe.push(n), Fn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Re(n, e, t, i, r, o, l = null, s = [-1]) {
  const c = Ve;
  qe(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: D,
    not_equal: r,
    bound: ti(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: ti(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  l && l(u.root);
  let d = !1;
  if (u.ctx = t ? t(n, e.props || {}, (a, f, ...h) => {
    const m = h.length ? h[0] : f;
    return u.ctx && r(u.ctx[a], u.ctx[a] = m) && (!u.skip_bound && u.bound[a] && u.bound[a](m), d && jn(n, a)), f;
  }) : [], u.update(), d = !0, ye(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = In(e.target);
      u.fragment && u.fragment.l(a), a.forEach(F);
    } else
      u.fragment && u.fragment.c();
    e.intro && G(n.$$.fragment), ge(n, e.target, e.anchor), Bi();
  }
  qe(c);
}
class Te {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ne(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ne(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    me(this, 1), this.$destroy = D;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ai(t))
      return D;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Mn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const qn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(qn);
function Qn(n) {
  let e, t;
  return {
    c() {
      e = de("svg"), t = de("path"), p(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), p(e, "viewBox", "0 0 14 14"), p(e, "width", "13"), p(e, "height", "13"), p(e, "class", "svelte-en2qvf");
    },
    m(i, r) {
      U(i, e, r), T(e, t);
    },
    p: D,
    i: D,
    o: D,
    d(i) {
      i && F(e);
    }
  };
}
class Di extends Te {
  constructor(e) {
    super(), Re(this, e, null, Qn, Pe, {});
  }
}
function Vn(n) {
  let e, t;
  return {
    c() {
      e = de("svg"), t = de("path"), p(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), p(e, "viewBox", "0 0 30 30"), p(e, "fill", "none"), p(e, "xmlns", "http://www.w3.org/2000/svg"), p(e, "class", "svelte-d2loi5");
    },
    m(i, r) {
      U(i, e, r), T(e, t);
    },
    p: D,
    i: D,
    o: D,
    d(i) {
      i && F(e);
    }
  };
}
class Ui extends Te {
  constructor(e) {
    super(), Re(this, e, null, Vn, Pe, {});
  }
}
function Zn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || p(e, "src", t), p(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") && p(e, "src", t), r & /*placeType*/
      64 && p(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function Hn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") || p(e, "src", t), p(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") && p(e, "src", t), r & /*placeType*/
      64 && p(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function Yn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || p(e, "src", t), p(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") && p(e, "src", t), r & /*placeType*/
      64 && p(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function Xn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || p(e, "src", t), p(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") && p(e, "src", t), r & /*placeType*/
      64 && p(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function Kn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || p(e, "src", t), p(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") && p(e, "src", t), r & /*placeType*/
      64 && p(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function Jn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || p(e, "src", t), p(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") && p(e, "src", t), r & /*placeType*/
      64 && p(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function $n(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || p(e, "src", t), p(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") && p(e, "src", t), r & /*placeType*/
      64 && p(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function er(n) {
  let e, t, i, r;
  return {
    c() {
      e = W("img"), K(e.src, t = /*imageUrl*/
      n[5]) || p(e, "src", t), p(
        e,
        "alt",
        /*category*/
        n[4]
      ), p(e, "class", "svelte-ltkwvy");
    },
    m(o, l) {
      U(o, e, l), i || (r = ee(
        e,
        "error",
        /*error_handler*/
        n[14]
      ), i = !0);
    },
    p(o, l) {
      l & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      o[5]) && p(e, "src", t), l & /*category*/
      16 && p(
        e,
        "alt",
        /*category*/
        o[4]
      );
    },
    d(o) {
      o && F(e), i = !1, r();
    }
  };
}
function li(n) {
  let e, t;
  return {
    c() {
      e = W("span"), t = Ee(
        /*placeType*/
        n[6]
      ), p(e, "class", "secondary svelte-ltkwvy");
    },
    m(i, r) {
      U(i, e, r), T(e, t);
    },
    p(i, r) {
      r & /*placeType*/
      64 && Qe(
        t,
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && F(e);
    }
  };
}
function tr(n) {
  let e, t, i, r, o, l, s, c, u, d = (
    /*isReverse*/
    (n[7] ? (
      /*feature*/
      n[0].place_name
    ) : (
      /*feature*/
      n[0].place_name.replace(/,.*/, "")
    )) + ""
  ), a, f, h = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] !== "never" && !/*feature*/
    n[0].address && !/*feature*/
    n[0].id.startsWith("road.") && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5]) && !/*isReverse*/
    n[7]
  ), m, y, b = (
    /*isReverse*/
    (n[7] ? "" : (
      /*feature*/
      n[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), w, L, S;
  function E(_, k) {
    return k & /*feature*/
    1 && (t = null), k & /*feature*/
    1 && (i = null), k & /*feature*/
    1 && (r = null), k & /*feature*/
    1 && (o = null), /*imageUrl*/
    _[5] ? er : (
      /*feature*/
      _[0].address ? $n : (t == null && (t = !!/*feature*/
      _[0].id.startsWith("road.")), t ? Jn : (i == null && (i = !!/*feature*/
      _[0].id.startsWith("address.")), i ? Kn : (r == null && (r = !!/*feature*/
      _[0].id.startsWith("postal_code.")), r ? Xn : (o == null && (o = !!/*feature*/
      _[0].id.startsWith("poi.")), o ? Yn : (
        /*isReverse*/
        _[7] ? Hn : Zn
      )))))
    );
  }
  let M = E(n, -1), C = M(n), v = h && li(n);
  return {
    c() {
      e = W("li"), C.c(), l = ie(), s = W("span"), c = W("span"), u = W("span"), a = Ee(d), f = ie(), v && v.c(), m = ie(), y = W("span"), w = Ee(b), p(u, "class", "primary svelte-ltkwvy"), p(c, "class", "svelte-ltkwvy"), p(y, "class", "line2 svelte-ltkwvy"), p(s, "class", "texts svelte-ltkwvy"), p(e, "tabindex", "0"), p(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), p(e, "class", "svelte-ltkwvy"), be(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(_, k) {
      U(_, e, k), C.m(e, null), T(e, l), T(e, s), T(s, c), T(c, u), T(u, a), T(c, f), v && v.m(c, null), T(s, m), T(s, y), T(y, w), L || (S = [
        ee(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[12]
        ),
        ee(
          e,
          "focus",
          /*focus_handler*/
          n[13]
        )
      ], L = !0);
    },
    p(_, [k]) {
      M === (M = E(_, k)) && C ? C.p(_, k) : (C.d(1), C = M(_), C && (C.c(), C.m(e, l))), k & /*feature*/
      1 && d !== (d = /*isReverse*/
      (_[7] ? (
        /*feature*/
        _[0].place_name
      ) : (
        /*feature*/
        _[0].place_name.replace(/,.*/, "")
      )) + "") && Qe(a, d), k & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      _[2] === "always" || /*showPlaceType*/
      _[2] !== "never" && !/*feature*/
      _[0].address && !/*feature*/
      _[0].id.startsWith("road.") && !/*feature*/
      _[0].id.startsWith("address.") && !/*feature*/
      _[0].id.startsWith("postal_code.") && (!/*feature*/
      _[0].id.startsWith("poi.") || !/*imageUrl*/
      _[5]) && !/*isReverse*/
      _[7]), h ? v ? v.p(_, k) : (v = li(_), v.c(), v.m(c, null)) : v && (v.d(1), v = null), k & /*feature*/
      1 && b !== (b = /*isReverse*/
      (_[7] ? "" : (
        /*feature*/
        _[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Qe(w, b), k & /*selected*/
      2 && p(
        e,
        "data-selected",
        /*selected*/
        _[1]
      ), k & /*selected*/
      2 && be(
        e,
        "selected",
        /*selected*/
        _[1]
      );
    },
    i: D,
    o: D,
    d(_) {
      _ && F(e), C.d(), v && v.d(), L = !1, ye(S);
    }
  };
}
function ir(n, e, t) {
  var S;
  let i, r, { feature: o } = e, { selected: l = !1 } = e, { showPlaceType: s } = e, { missingIconsCache: c } = e, { iconsBaseUrl: u } = e;
  const d = (S = o.properties) == null ? void 0 : S.categories;
  let a, f, h = 0, m = o.place_type[0] === "reverse";
  function y() {
    f && c.add(f), t(10, h++, h);
  }
  function b(E) {
    ri.call(this, n, E);
  }
  function w(E) {
    ri.call(this, n, E);
  }
  const L = () => y();
  return n.$$set = (E) => {
    "feature" in E && t(0, o = E.feature), "selected" in E && t(1, l = E.selected), "showPlaceType" in E && t(2, s = E.showPlaceType), "missingIconsCache" in E && t(9, c = E.missingIconsCache), "iconsBaseUrl" in E && t(3, u = E.iconsBaseUrl);
  }, n.$$.update = () => {
    var E, M, C, v;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, i--, i), t(4, a = d == null ? void 0 : d[i]), t(5, f = a ? u + a.replace(/ /g, "_") + ".svg" : void 0);
      while (i > -1 && (!f || c.has(f)));
    n.$$.dirty & /*feature*/
    1 && t(6, r = ((M = (E = o.properties) == null ? void 0 : E.categories) == null ? void 0 : M.join(", ")) ?? ((v = (C = o.properties) == null ? void 0 : C.place_type_name) == null ? void 0 : v[0]) ?? o.place_type[0]);
  }, t(11, i = (d == null ? void 0 : d.length) ?? 0), [
    o,
    l,
    s,
    u,
    a,
    f,
    r,
    m,
    y,
    c,
    h,
    i,
    b,
    w,
    L
  ];
}
class nr extends Te {
  constructor(e) {
    super(), Re(this, e, ir, tr, Pe, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function rr(n) {
  let e;
  return {
    c() {
      e = W("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', p(e, "class", "svelte-7cmwmc");
    },
    m(t, i) {
      U(t, e, i);
    },
    p: D,
    i: D,
    o: D,
    d(t) {
      t && F(e);
    }
  };
}
class or extends Te {
  constructor(e) {
    super(), Re(this, e, null, rr, Pe, {});
  }
}
function sr(n) {
  let e, t;
  return {
    c() {
      e = de("svg"), t = de("path"), p(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), p(e, "viewBox", "0 0 60.006 21.412"), p(e, "width", "14"), p(e, "height", "20"), p(e, "class", "svelte-en2qvf");
    },
    m(i, r) {
      U(i, e, r), T(e, t);
    },
    p: D,
    i: D,
    o: D,
    d(i) {
      i && F(e);
    }
  };
}
class lr extends Te {
  constructor(e) {
    super(), Re(this, e, null, sr, Pe, {});
  }
}
function ur(n) {
  let e, t, i;
  return {
    c() {
      e = de("svg"), t = de("circle"), i = de("path"), p(t, "cx", "4.789"), p(t, "cy", "4.787"), p(t, "r", "3.85"), p(t, "class", "svelte-1aq105l"), p(i, "d", "M12.063 12.063 7.635 7.635"), p(i, "class", "svelte-1aq105l"), p(e, "xmlns", "http://www.w3.org/2000/svg"), p(e, "width", "13"), p(e, "height", "13"), p(e, "viewBox", "0 0 13 13"), p(e, "class", "svelte-1aq105l");
    },
    m(r, o) {
      U(r, e, o), T(e, t), T(e, i);
    },
    p: D,
    i: D,
    o: D,
    d(r) {
      r && F(e);
    }
  };
}
class ar extends Te {
  constructor(e) {
    super(), Re(this, e, null, ur, Pe, {});
  }
}
function cr(n, e, t) {
  const i = e[1], r = e[0], o = i - r;
  return n === i && t ? n : ((n - r) % o + o) % o + r;
}
function lt(n) {
  const e = [...n];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ue;
async function fr(n, e, t) {
  const i = n == null ? void 0 : n.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(i && (r.minZoom != null && r.minZoom > i[0] || r.maxZoom != null && r.maxZoom < i[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Ue && r.cachedLocationExpiry && Ue.time + r.cachedLocationExpiry > Date.now()) {
          if (!Ue.coords)
            break e;
          return Ue.coords;
        }
        let o;
        try {
          return o = await new Promise((l, s) => {
            t.signal.addEventListener("abort", () => {
              s(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (c) => {
                l(
                  [c.coords.longitude, c.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (c) => {
                s(c);
              },
              r
            );
          }), o;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Ue = {
            time: Date.now(),
            coords: o
          });
        }
        if (t.signal.aborted)
          return;
      }
      if (r.type === "server-geolocation")
        return "ip";
      if (i && r.type === "map-center")
        return i[1].toFixed(6) + "," + i[2].toFixed(6);
    }
}
const dr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, ui = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, ai = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, ci = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, fi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, di = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function hr(n) {
  if (!["DMS", "DM", "DD"].includes(n))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((h) => Number(h.trim())), t = Number(e[0]), i = Number(e[1]), r = Math.abs(t), o = Math.abs(i), l = t > 0 ? "N" : "S", s = i > 0 ? "E" : "W";
    let c;
    n == "DD" && (c = `${r}° ${l}, ${o}° ${s}`);
    const u = Math.floor(r), d = Math.floor(o), a = (r - u) * 60, f = (o - d) * 60;
    if (n == "DM") {
      let h = hi(a, 3).toFixed(3).padStart(6, "0"), m = hi(f, 3).toFixed(3).padStart(6, "0");
      h.endsWith(".000") && m.endsWith(".000") && (h = h.replace(/\.000$/, ""), m = m.replace(/\.000$/, "")), c = `${u}° ${h}' ${l}, ${d}° ${m}' ${s}`;
    }
    if (n == "DMS") {
      const h = Math.floor(a), m = Math.floor(f);
      let y = ((a - h) * 60).toFixed(1).padStart(4, "0"), b = ((f - m) * 60).toFixed(1).padStart(4, "0");
      const w = h.toString().padStart(2, "0"), L = m.toString().padStart(2, "0");
      y.endsWith(".0") && b.endsWith(".0") && (y = y.replace(/\.0$/, ""), b = b.replace(/\.0$/, "")), c = `${u}° ${w}' ${y}" ${l}, ${d}° ${L}' ${b}" ${s}`;
    }
    return c;
  } else
    throw new Error("no decimal coordinates to convert");
}
function hi(n, e) {
  const t = Math.pow(10, e);
  return Math.round((n + Number.EPSILON) * t) / t;
}
function Ft(n, e) {
  e || (e = 5), n = n.replace(/\s+/g, " ").trim();
  let t = null, i = null, r = "", o = "", l = null, s = [], c = !1;
  if (dr.test(n))
    throw new Error("invalid coordinate value");
  if (ui.test(n))
    if (s = ui.exec(n), c = Ge(s), c)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), i = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (i *= -1), l = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (ai.test(n))
    if (s = ai.exec(n), c = Ge(s), c) {
      if (t = s[2], i = s[6], t.includes(",") && (t = t.replace(",", ".")), i.includes(",") && (i = i.replace(",", ".")), l = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(i)) == Number(i))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], o = s[5]) : s[4] && (r = s[4], o = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ci.test(n))
    if (s = ci.exec(n), c = Ge(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[9])), s[11] && (i += s[11] / 60), s[13] && (i += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[8]) : s[7] && (r = s[7], o = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (fi.test(n))
    if (s = fi.exec(n), c = Ge(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6] / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[10])), s[12] && (i += s[12] / 60), s[14] && (i += s[14] / 3600), parseInt(s[10]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (di.test(n)) {
    if (s = di.exec(n), c = Ge(s), s.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[10])), s[12] && (i += s[12].replace(",", ".") / 60), s[14] && (i += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (c) {
    if (Math.abs(i) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !o || !r && o)
      throw new Error("invalid coordinates value");
    if (r && r == o)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), i.toString().includes(",") && (i = i.replace(",", "."));
    let u = /S|SOUTH/i;
    u.test(r) && t > 0 && (t = -1 * t), u = /W|WEST/i, u.test(o) && i > 0 && (i = -1 * i);
    const d = s[0].trim();
    let a, f;
    const h = /[,/;\u0020]/g, m = d.match(h);
    if (m == null) {
      const w = Math.floor(n.length / 2);
      a = d.substring(0, w).trim(), f = d.substring(w).trim();
    } else {
      let w;
      m.length % 2 == 1 ? w = Math.floor(m.length / 2) : w = m.length / 2 - 1;
      let L = 0;
      if (w == 0)
        L = d.indexOf(m[0]), a = d.substring(0, L).trim(), f = d.substring(L + 1).trim();
      else {
        let S = 0, E = 0;
        for (; S <= w; )
          L = d.indexOf(m[S], E), E = L + 1, S++;
        a = d.substring(0, L).trim(), f = d.substring(L + 1).trim();
      }
    }
    const y = a.split(".");
    if (y.length == 2 && y[1] == 0 && y[1].length != 2)
      throw new Error("invalid coordinates format");
    const b = f.split(".");
    if (b.length == 2 && b[1] == 0 && b[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(a) || /^\d+$/.test(f))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), i = Number(Number(i).toFixed(e)), Object.freeze({
      verbatimCoordinates: d,
      verbatimLatitude: a,
      verbatimLongitude: f,
      decimalLatitude: t,
      decimalLongitude: i,
      decimalCoordinates: `${t},${i}`,
      originalFormat: l,
      closeEnough: gr,
      toCoordinateFormat: hr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Ge(n) {
  if (!isNaN(n[0]))
    return !1;
  const e = [...n];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, i = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let o = 0; o < r; o++) {
    const l = e[o], s = e[o + r], c = t.test(l) && t.test(s), u = i.test(l) && i.test(s), d = l == s;
    if (!(l == null && s == null)) {
      if (l == null || s == null)
        return !1;
      if (c || u || d)
        continue;
      return !1;
    }
  }
  return !0;
}
function gi(n, e) {
  const t = Math.abs(n - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function gr(n) {
  if (!n)
    throw new Error("coords must be provided");
  if (n.includes(",")) {
    const e = n.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return gi(this.decimalLatitude, Number(e[0])) && gi(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const mr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Ft.to = mr;
const yr = [
  {
    verbatimCoordinates: "40.123, -74.123",
    verbatimLatitude: "40.123",
    verbatimLongitude: "-74.123"
  },
  {
    verbatimCoordinates: "40.123° N 74.123° W",
    verbatimLatitude: "40.123° N",
    verbatimLongitude: "74.123° W"
  },
  {
    verbatimCoordinates: "40.123° N 74.123° W",
    verbatimLatitude: "40.123° N",
    verbatimLongitude: "74.123° W"
  },
  {
    verbatimCoordinates: '40° 7´ 22.8" N 74° 7´ 22.8" W',
    verbatimLatitude: '40° 7´ 22.8" N',
    verbatimLongitude: '74° 7´ 22.8" W'
  },
  {
    verbatimCoordinates: "40° 7.38’ , -74° 7.38’",
    verbatimLatitude: "40° 7.38’",
    verbatimLongitude: "-74° 7.38’"
  },
  {
    verbatimCoordinates: "N40°7’22.8’’, W74°7’22.8’’",
    verbatimLatitude: "N40°7’22.8’’",
    verbatimLongitude: "W74°7’22.8’’"
  },
  {
    verbatimCoordinates: '40°7’22.8"N, 74°7’22.8"W',
    verbatimLatitude: '40°7’22.8"N',
    verbatimLongitude: '74°7’22.8"W'
  },
  {
    verbatimCoordinates: `40°7'22.8"N, 74°7'22.8"W`,
    verbatimLatitude: `40°7'22.8"N`,
    verbatimLongitude: `74°7'22.8"W`
  },
  {
    verbatimCoordinates: "40 7 22.8, -74 7 22.8",
    verbatimLatitude: "40 7 22.8",
    verbatimLongitude: "-74 7 22.8"
  },
  {
    verbatimCoordinates: "40.123 -74.123",
    verbatimLatitude: "40.123",
    verbatimLongitude: "-74.123"
  },
  {
    verbatimCoordinates: "40.123°,-74.123°",
    verbatimLatitude: "40.123°",
    verbatimLongitude: "-74.123°"
  },
  {
    verbatimCoordinates: "40.123N74.123W",
    verbatimLatitude: "40.123N",
    verbatimLongitude: "74.123W"
  },
  {
    verbatimCoordinates: "4007.38N7407.38W",
    verbatimLatitude: "4007.38N",
    verbatimLongitude: "7407.38W"
  },
  {
    verbatimCoordinates: '40°7’22.8"N, 74°7’22.8"W',
    verbatimLatitude: '40°7’22.8"N',
    verbatimLongitude: '74°7’22.8"W'
  },
  {
    verbatimCoordinates: "400722.8N740722.8W",
    verbatimLatitude: "400722.8N",
    verbatimLongitude: "740722.8W"
  },
  {
    verbatimCoordinates: "N 40 7.38 W 74 7.38",
    verbatimLatitude: "N 40 7.38",
    verbatimLongitude: "W 74 7.38"
  },
  {
    verbatimCoordinates: "40:7:22.8N 74:7:22.8W",
    verbatimLatitude: "40:7:22.8N",
    verbatimLongitude: "74:7:22.8W"
  },
  {
    verbatimCoordinates: "40:7:23N,74:7:23W",
    verbatimLatitude: "40:7:23N",
    verbatimLongitude: "74:7:23W",
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.1230555555
  },
  {
    verbatimCoordinates: '40°7’23"N 74°7’23"W',
    verbatimLatitude: '40°7’23"N',
    verbatimLongitude: '74°7’23"W',
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.12305555555555
  },
  {
    verbatimCoordinates: '40°7’23"S 74°7’23"E',
    verbatimLatitude: '40°7’23"S',
    verbatimLongitude: '74°7’23"E',
    decimalLatitude: -40.1230555555,
    decimalLongitude: 74.12305555555555
  },
  {
    verbatimCoordinates: '40°7’23" -74°7’23"',
    verbatimLatitude: '40°7’23"',
    verbatimLongitude: '-74°7’23"',
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.123055555
  },
  {
    verbatimCoordinates: '40d 7’ 23" N 74d 7’ 23" W',
    verbatimLatitude: '40d 7’ 23" N',
    verbatimLongitude: '74d 7’ 23" W',
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.123055555
  },
  {
    verbatimCoordinates: "40.123N 74.123W",
    verbatimLatitude: "40.123N",
    verbatimLongitude: "74.123W"
  },
  {
    verbatimCoordinates: "40° 7.38, -74° 7.38",
    verbatimLatitude: "40° 7.38",
    verbatimLongitude: "-74° 7.38"
  },
  {
    verbatimCoordinates: "40° 7.38, -74° 7.38",
    verbatimLatitude: "40° 7.38",
    verbatimLongitude: "-74° 7.38"
  },
  {
    verbatimCoordinates: "40 7 22.8; -74 7 22.8",
    verbatimLatitude: "40 7 22.8",
    verbatimLongitude: "-74 7 22.8"
  }
], pr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, vr = [
  {
    verbatimCoordinates: `50°4'17.698"south, 14°24'2.826"east`,
    verbatimLatitude: `50°4'17.698"south`,
    verbatimLongitude: `14°24'2.826"east`,
    decimalLatitude: -50.07158277777778,
    decimalLongitude: 14.400785
  },
  {
    verbatimCoordinates: "50d4m17.698S 14d24m2.826E",
    verbatimLatitude: "50d4m17.698S",
    verbatimLongitude: "14d24m2.826E",
    decimalLatitude: -50.07158277777778,
    decimalLongitude: 14.400785
  },
  {
    verbatimCoordinates: "40:26:46N,79:56:55W",
    verbatimLatitude: "40:26:46N",
    verbatimLongitude: "79:56:55W",
    decimalLatitude: 40.44611111111111,
    decimalLongitude: -79.9486111111111
  },
  {
    verbatimCoordinates: "40:26:46.302N 79:56:55.903W",
    verbatimLatitude: "40:26:46.302N",
    verbatimLongitude: "79:56:55.903W",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.94886194444445
  },
  {
    verbatimCoordinates: "40°26′47″N 79°58′36″W",
    verbatimLatitude: "40°26′47″N",
    verbatimLongitude: "79°58′36″W",
    decimalLatitude: 40.44638888888889,
    decimalLongitude: -79.97666666666667
  },
  {
    verbatimCoordinates: "40d 26′ 47″ N 79d 58′ 36″ W",
    verbatimLatitude: "40d 26′ 47″ N",
    verbatimLongitude: "79d 58′ 36″ W",
    decimalLatitude: 40.44638888888889,
    decimalLongitude: -79.97666666666667
  },
  {
    verbatimCoordinates: "40.446195N 79.948862W",
    verbatimLatitude: "40.446195N",
    verbatimLongitude: "79.948862W",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "40,446195° 79,948862°",
    verbatimLatitude: "40,446195°",
    verbatimLongitude: "79,948862°",
    decimalLatitude: 40.446195,
    decimalLongitude: 79.948862
  },
  {
    verbatimCoordinates: "40° 26.7717, -79° 56.93172",
    verbatimLatitude: "40° 26.7717",
    verbatimLongitude: "-79° 56.93172",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "40.446195, -79.948862",
    verbatimLatitude: "40.446195",
    verbatimLongitude: "-79.948862",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "40.123256; -74.123256",
    verbatimLatitude: "40.123256",
    verbatimLongitude: "-74.123256",
    decimalLatitude: 40.123256,
    decimalLongitude: -74.123256
  },
  {
    verbatimCoordinates: "18°24S 22°45E",
    verbatimLatitude: "18°24S",
    verbatimLongitude: "22°45E",
    decimalLatitude: -18.4,
    decimalLongitude: 22.75
  }
], br = [
  {
    verbatimCoordinates: "10.432342S 10.6345345E",
    verbatimLatitude: "10.432342S",
    verbatimLongitude: "10.6345345E",
    decimalLatitude: -10.432342,
    decimalLongitude: 10.6345345
  },
  {
    verbatimCoordinates: "10.00S 10.00E",
    verbatimLatitude: "10.00S",
    verbatimLongitude: "10.00E",
    decimalLatitude: -10,
    decimalLongitude: 10
  },
  {
    verbatimCoordinates: "00.00S 01.00E",
    verbatimLatitude: "00.00S",
    verbatimLongitude: "01.00E",
    decimalLatitude: 0,
    decimalLongitude: 1
  },
  {
    verbatimCoordinates: "18.24S 22.45E",
    verbatimLatitude: "18.24S",
    verbatimLongitude: "22.45E",
    decimalLatitude: -18.4,
    decimalLongitude: 22.75
  },
  {
    verbatimCoordinates: "27deg 15min 45.2sec S 18deg 32min 53.7sec E",
    verbatimLatitude: "27deg 15min 45.2sec S",
    verbatimLongitude: "18deg 32min 53.7sec E",
    decimalLatitude: -27.262555555555554,
    decimalLongitude: 18.54825
  },
  {
    verbatimCoordinates: "-23.3245° S / 28.2344° E",
    verbatimLatitude: "-23.3245° S",
    verbatimLongitude: "28.2344° E",
    decimalLatitude: -23.3245,
    decimalLongitude: 28.2344
  },
  {
    verbatimCoordinates: "40° 26.7717 -79° 56.93172",
    verbatimLatitude: "40° 26.7717",
    verbatimLongitude: "-79° 56.93172",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "27.15.45S 18.32.53E",
    verbatimLatitude: "27.15.45S",
    verbatimLongitude: "18.32.53E",
    decimalLatitude: -27.2625,
    decimalLongitude: 18.548055
  },
  {
    verbatimCoordinates: "-27.15.45 18.32.53",
    verbatimLatitude: "-27.15.45",
    verbatimLongitude: "18.32.53",
    decimalLatitude: -27.2625,
    decimalLongitude: 18.548055
  },
  {
    verbatimCoordinates: "27.15.45.2S 18.32.53.4E",
    verbatimLatitude: "27.15.45.2S",
    verbatimLongitude: "18.32.53.4E",
    decimalLatitude: -27.262556,
    decimalLongitude: 18.548167
  },
  {
    verbatimCoordinates: "27.15.45,2S 18.32.53,4E",
    verbatimLatitude: "27.15.45,2S",
    verbatimLongitude: "18.32.53,4E",
    decimalLatitude: -27.262556,
    decimalLongitude: 18.548167
  },
  {
    verbatimCoordinates: "S23.43563 °  E22.45634 °",
    verbatimLatitude: "S23.43563 °",
    verbatimLongitude: "E22.45634 °",
    decimalLatitude: -23.43563,
    decimalLongitude: 22.45634
  },
  {
    verbatimCoordinates: "27,71372° S 23,07771° E",
    verbatimLatitude: "27,71372° S",
    verbatimLongitude: "23,07771° E",
    decimalLatitude: -27.71372,
    decimalLongitude: 23.07771
  },
  {
    verbatimCoordinates: "27.45.34 S 23.23.23 E",
    verbatimLatitude: "27.45.34 S",
    verbatimLongitude: "23.23.23 E",
    decimalLatitude: -27.759444,
    decimalLongitude: 23.38972222
  },
  {
    verbatimCoordinates: "S 27.45.34 E 23.23.23",
    verbatimLatitude: "S 27.45.34",
    verbatimLongitude: "E 23.23.23",
    decimalLatitude: -27.759444,
    decimalLongitude: 23.38972222
  },
  {
    verbatimCoordinates: "53 16.3863,4 52.8171",
    verbatimLatitude: "53 16.3863",
    verbatimLongitude: "4 52.8171",
    decimalLatitude: 53.273105,
    decimalLongitude: 4.88029
  },
  {
    verbatimCoordinates: "50 8.2914,-5 2.4447",
    verbatimLatitude: "50 8.2914",
    verbatimLongitude: "-5 2.4447",
    decimalLatitude: 50.13819,
    decimalLongitude: -5.040745
  },
  {
    verbatimCoordinates: "N 48° 30,6410', E 18° 57,4583'",
    verbatimLatitude: "N 48° 30,6410'",
    verbatimLongitude: "E 18° 57,4583'",
    decimalLatitude: 48.51068,
    decimalLongitude: 18.95764
  },
  {
    verbatimCoordinates: "1.23456, 18.33453",
    verbatimLatitude: "1.23456",
    verbatimLongitude: "18.33453",
    decimalLatitude: 1.23456,
    decimalLongitude: 18.33453
  }
];
function wr() {
  const n = [];
  return yr.forEach((e) => {
    e.decimalLatitude ? n.push(e) : n.push({ ...e, ...pr });
  }), [...n, ...vr, ...br];
}
const _r = wr();
Ft.formats = _r.map((n) => n.verbatimCoordinates);
const Er = Ft;
function mi(n, e, t) {
  const i = n.slice();
  return i[84] = e[t], i[86] = t, i;
}
function yi(n) {
  let e, t;
  return e = new or({}), {
    c() {
      Le(e.$$.fragment);
    },
    m(i, r) {
      ge(e, i, r), t = !0;
    },
    i(i) {
      t || (G(e.$$.fragment, i), t = !0);
    },
    o(i) {
      Y(e.$$.fragment, i), t = !1;
    },
    d(i) {
      me(e, i);
    }
  };
}
function pi(n) {
  let e, t, i, r, o;
  return t = new lr({}), {
    c() {
      e = W("button"), Le(t.$$.fragment), p(e, "type", "button"), p(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), p(e, "class", "svelte-bz0zu3"), be(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(l, s) {
      U(l, e, s), ge(t, e, null), i = !0, r || (o = ee(
        e,
        "click",
        /*click_handler_2*/
        n[69]
      ), r = !0);
    },
    p(l, s) {
      (!i || s[0] & /*reverseButtonTitle*/
      512) && p(
        e,
        "title",
        /*reverseButtonTitle*/
        l[9]
      ), (!i || s[0] & /*reverseActive*/
      1) && be(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      i || (G(t.$$.fragment, l), i = !0);
    },
    o(l) {
      Y(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && F(e), me(t), r = !1, o();
    }
  };
}
function Lr(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, o, l, s = si(
    /*listFeatures*/
    n[14]
  );
  const c = (u) => (
    /*feature*/
    u[84].id + /*feature*/
    (u[84].address ? "," + /*feature*/
    u[84].address : "")
  );
  for (let u = 0; u < s.length; u += 1) {
    let d = mi(n, s, u), a = c(d);
    i.set(a, t[u] = vi(a, d));
  }
  return {
    c() {
      e = W("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      p(e, "class", "options svelte-bz0zu3");
    },
    m(u, d) {
      U(u, e, d);
      for (let a = 0; a < t.length; a += 1)
        t[a] && t[a].m(e, null);
      r = !0, o || (l = [
        ee(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[73]
        ),
        ee(
          e,
          "blur",
          /*blur_handler_1*/
          n[74]
        )
      ], o = !0);
    },
    p(u, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (s = si(
        /*listFeatures*/
        u[14]
      ), rt(), t = Gn(t, d, c, 1, u, s, i, e, Un, vi, null, mi), ot());
    },
    i(u) {
      if (!r) {
        for (let d = 0; d < s.length; d += 1)
          G(t[d]);
        r = !0;
      }
    },
    o(u) {
      for (let d = 0; d < t.length; d += 1)
        Y(t[d]);
      r = !1;
    },
    d(u) {
      u && F(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      o = !1, ye(l);
    }
  };
}
function Sr(n) {
  let e, t, i, r, o, l;
  return t = new Ui({}), {
    c() {
      e = W("div"), Le(t.$$.fragment), i = ie(), r = W("div"), o = Ee(
        /*noResultsMessage*/
        n[7]
      ), p(r, "class", "svelte-bz0zu3"), p(e, "class", "no-results svelte-bz0zu3");
    },
    m(s, c) {
      U(s, e, c), ge(t, e, null), T(e, i), T(e, r), T(r, o), l = !0;
    },
    p(s, c) {
      (!l || c[0] & /*noResultsMessage*/
      128) && Qe(
        o,
        /*noResultsMessage*/
        s[7]
      );
    },
    i(s) {
      l || (G(t.$$.fragment, s), l = !0);
    },
    o(s) {
      Y(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && F(e), me(t);
    }
  };
}
function xr(n) {
  let e = "", t;
  return {
    c() {
      t = Ee(e);
    },
    m(i, r) {
      U(i, t, r);
    },
    p: D,
    i: D,
    o: D,
    d(i) {
      i && F(t);
    }
  };
}
function Mr(n) {
  let e, t, i, r, o, l, s, c, u, d, a;
  return t = new Ui({}), c = new Di({}), {
    c() {
      e = W("div"), Le(t.$$.fragment), i = ie(), r = W("div"), o = Ee(
        /*errorMessage*/
        n[6]
      ), l = ie(), s = W("button"), Le(c.$$.fragment), p(r, "class", "svelte-bz0zu3"), p(s, "class", "svelte-bz0zu3"), p(e, "class", "error svelte-bz0zu3");
    },
    m(f, h) {
      U(f, e, h), ge(t, e, null), T(e, i), T(e, r), T(r, o), T(e, l), T(e, s), ge(c, s, null), u = !0, d || (a = ee(
        s,
        "click",
        /*click_handler_3*/
        n[70]
      ), d = !0);
    },
    p(f, h) {
      (!u || h[0] & /*errorMessage*/
      64) && Qe(
        o,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      u || (G(t.$$.fragment, f), G(c.$$.fragment, f), u = !0);
    },
    o(f) {
      Y(t.$$.fragment, f), Y(c.$$.fragment, f), u = !1;
    },
    d(f) {
      f && F(e), me(t), me(c), d = !1, a();
    }
  };
}
function vi(n, e) {
  let t, i, r;
  function o() {
    return (
      /*mouseenter_handler*/
      e[71](
        /*i*/
        e[86]
      )
    );
  }
  function l() {
    return (
      /*focus_handler_1*/
      e[72](
        /*feature*/
        e[84]
      )
    );
  }
  return i = new nr({
    props: {
      feature: (
        /*feature*/
        e[84]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[15] === /*i*/
        e[86]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        e[20]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        e[12]
      )
    }
  }), i.$on("mouseenter", o), i.$on("focus", l), {
    key: n,
    first: null,
    c() {
      t = Rn(), Le(i.$$.fragment), this.first = t;
    },
    m(s, c) {
      U(s, t, c), ge(i, s, c), r = !0;
    },
    p(s, c) {
      e = s;
      const u = {};
      c[0] & /*listFeatures*/
      16384 && (u.feature = /*feature*/
      e[84]), c[0] & /*showPlaceType*/
      1024 && (u.showPlaceType = /*showPlaceType*/
      e[10]), c[0] & /*selectedItemIndex, listFeatures*/
      49152 && (u.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[86]), c[0] & /*iconsBaseUrl*/
      4096 && (u.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), i.$set(u);
    },
    i(s) {
      r || (G(i.$$.fragment, s), r = !0);
    },
    o(s) {
      Y(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && F(t), me(i, s);
    }
  };
}
function kr(n) {
  let e, t, i, r, o, l, s, c, u, d, a, f, h, m, y, b, w, L, S, E, M, C = !1;
  o = new ar({}), a = new Di({});
  let v = (
    /*abortController*/
    n[19] && yi()
  ), _ = (
    /*enableReverse*/
    n[5] === "button" && pi(n)
  );
  const k = (
    /*#slots*/
    n[61].default
  ), I = kn(
    k,
    n,
    /*$$scope*/
    n[60],
    null
  ), H = [Mr, xr, Sr, Lr], O = [];
  function J(x, A) {
    var oe, ce;
    return (
      /*error*/
      x[18] ? 0 : (
        /*focusedDelayed*/
        x[16] ? (
          /*listFeatures*/
          ((oe = x[14]) == null ? void 0 : oe.length) === 0 ? 2 : (
            /*focusedDelayed*/
            x[16] && /*listFeatures*/
            ((ce = x[14]) != null && ce.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(b = J(n)) && (w = O[b] = H[b](n)), {
    c() {
      e = ie(), t = W("form"), i = W("div"), r = W("button"), Le(o.$$.fragment), l = ie(), s = W("input"), c = ie(), u = W("div"), d = W("button"), Le(a.$$.fragment), f = ie(), v && v.c(), h = ie(), _ && _.c(), m = ie(), I && I.c(), y = ie(), w && w.c(), p(r, "class", "search-button svelte-bz0zu3"), p(r, "type", "button"), p(
        s,
        "placeholder",
        /*placeholder*/
        n[8]
      ), p(
        s,
        "aria-label",
        /*placeholder*/
        n[8]
      ), p(s, "class", "svelte-bz0zu3"), p(d, "type", "button"), p(
        d,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), p(d, "class", "svelte-bz0zu3"), p(u, "class", "clear-button-container svelte-bz0zu3"), be(
        u,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), p(i, "class", "input-group svelte-bz0zu3"), p(t, "tabindex", "0"), p(t, "class", L = ii(
        /*className*/
        n[2]
      ) + " svelte-bz0zu3"), be(
        t,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(x, A) {
      U(x, e, A), U(x, t, A), T(t, i), T(i, r), ge(o, r, null), T(i, l), T(i, s), n[63](s), ni(
        s,
        /*searchValue*/
        n[1]
      ), T(i, c), T(i, u), T(u, d), ge(a, d, null), T(u, f), v && v.m(u, null), T(i, h), _ && _.m(i, null), T(i, m), I && I.m(i, null), T(t, y), ~b && O[b].m(t, null), S = !0, E || (M = [
        ee(
          r,
          "click",
          /*click_handler*/
          n[62]
        ),
        ee(
          s,
          "input",
          /*input_1_input_handler*/
          n[64]
        ),
        ee(
          s,
          "focus",
          /*focus_handler*/
          n[65]
        ),
        ee(
          s,
          "blur",
          /*blur_handler*/
          n[66]
        ),
        ee(
          s,
          "keydown",
          /*handleKeyDown*/
          n[22]
        ),
        ee(
          s,
          "input",
          /*input_handler*/
          n[67]
        ),
        ee(
          d,
          "click",
          /*click_handler_1*/
          n[68]
        ),
        ee(t, "submit", Tn(
          /*handleOnSubmit*/
          n[21]
        ))
      ], E = !0);
    },
    p(x, A) {
      (!S || A[0] & /*placeholder*/
      256) && p(
        s,
        "placeholder",
        /*placeholder*/
        x[8]
      ), (!S || A[0] & /*placeholder*/
      256) && p(
        s,
        "aria-label",
        /*placeholder*/
        x[8]
      ), A[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      x[1] && ni(
        s,
        /*searchValue*/
        x[1]
      ), (!S || A[0] & /*clearButtonTitle*/
      8) && p(
        d,
        "title",
        /*clearButtonTitle*/
        x[3]
      ), /*abortController*/
      x[19] ? v ? A[0] & /*abortController*/
      524288 && G(v, 1) : (v = yi(), v.c(), G(v, 1), v.m(u, null)) : v && (rt(), Y(v, 1, 1, () => {
        v = null;
      }), ot()), (!S || A[0] & /*searchValue*/
      2) && be(
        u,
        "displayable",
        /*searchValue*/
        x[1] !== ""
      ), /*enableReverse*/
      x[5] === "button" ? _ ? (_.p(x, A), A[0] & /*enableReverse*/
      32 && G(_, 1)) : (_ = pi(x), _.c(), G(_, 1), _.m(i, m)) : _ && (rt(), Y(_, 1, 1, () => {
        _ = null;
      }), ot()), I && I.p && (!S || A[1] & /*$$scope*/
      536870912) && Nn(
        I,
        k,
        x,
        /*$$scope*/
        x[60],
        S ? Cn(
          k,
          /*$$scope*/
          x[60],
          A,
          null
        ) : Pn(
          /*$$scope*/
          x[60]
        ),
        null
      );
      let oe = b;
      b = J(x), b === oe ? ~b && O[b].p(x, A) : (w && (rt(), Y(O[oe], 1, 1, () => {
        O[oe] = null;
      }), ot()), ~b ? (w = O[b], w ? w.p(x, A) : (w = O[b] = H[b](x), w.c()), G(w, 1), w.m(t, null)) : w = null), (!S || A[0] & /*className*/
      4 && L !== (L = ii(
        /*className*/
        x[2]
      ) + " svelte-bz0zu3")) && p(t, "class", L), (!S || A[0] & /*className, collapsed, searchValue*/
      22) && be(
        t,
        "can-collapse",
        /*collapsed*/
        x[4] && /*searchValue*/
        x[1] === ""
      );
    },
    i(x) {
      S || (G(C), G(o.$$.fragment, x), G(a.$$.fragment, x), G(v), G(_), G(I, x), G(w), S = !0);
    },
    o(x) {
      Y(C), Y(o.$$.fragment, x), Y(a.$$.fragment, x), Y(v), Y(_), Y(I, x), Y(w), S = !1;
    },
    d(x) {
      x && (F(e), F(t)), me(o), n[63](null), me(a), v && v.d(), _ && _.d(), I && I.d(x), ~b && O[b].d(), E = !1, ye(M);
    }
  };
}
function Cr(n, e, t) {
  let i, r, { $$slots: o = {}, $$scope: l } = e;
  const s = {
    continental_marine: 4,
    country: 4,
    major_landform: 8,
    region: 5,
    subregion: 6,
    county: 7,
    joint_municipality: 8,
    joint_submunicipality: 9,
    municipality: 10,
    municipal_district: 11,
    locality: 12,
    neighbourhood: 13,
    place: 14,
    postal_code: 14,
    road: 16,
    poi: 17,
    address: 18,
    "poi.peak": 15,
    "poi.shop": 18,
    "poi.cafe": 18,
    "poi.restaurant": 18,
    "poi.aerodrome": 13
  };
  let { class: c = void 0 } = e, { apiKey: u } = e, { bbox: d = void 0 } = e, { clearButtonTitle: a = "clear" } = e, { clearOnBlur: f = !1 } = e, { collapsed: h = !1 } = e, { country: m = void 0 } = e, { debounceSearch: y = 200 } = e, { enableReverse: b = "never" } = e, { errorMessage: w = "Something went wrong…" } = e, { filter: L = () => !0 } = e, { flyTo: S = !0 } = e, { fuzzyMatch: E = !0 } = e, { language: M = void 0 } = e, { limit: C = void 0 } = e, { mapController: v = void 0 } = e, { minLength: _ = 2 } = e, { noResultsMessage: k = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: I = "Search" } = e, { proximity: H = [{ type: "server-geolocation" }] } = e, { reverseActive: O = b === "always" } = e, { reverseButtonTitle: J = "toggle reverse geocoding" } = e, { searchValue: x = "" } = e, { pickedResultStyle: A = "full-geometry" } = e, { showPlaceType: oe = "if-needed" } = e, { showResultsWhileTyping: ce = !0 } = e, { selectFirst: Ie = !0 } = e, { flyToSelected: ft = !1 } = e, { markerOnSelected: Ye = !0 } = e, { types: Me = void 0 } = e, { exhaustiveReverseGeocoding: dt = !1 } = e, { excludeTypes: Xe = !1 } = e, { zoom: Ke = s } = e, { apiUrl: ht = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: gt = {} } = e, { iconsBaseUrl: Gt = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.0.1/icons/" } = e, { adjustUrlQuery: mt = () => {
  } } = e;
  function Vi() {
    le.focus();
  }
  function Zi() {
    le.blur();
  }
  function jt(g, B = !0, Q = !1) {
    t(1, x = g), B ? (t(15, z = -1), Qt()) : (bt(!Q, Q), setTimeout(() => {
      le.focus(), le.select();
    }));
  }
  function Hi() {
    t(14, R = void 0), t(56, N = void 0), t(15, z = -1);
  }
  function Yi() {
    t(55, j = []), t(56, N = void 0);
  }
  let Oe = !1, R, j, N, qt = "", le, z = -1, ue, Je = [], ke, We, $e, yt;
  const Xi = /* @__PURE__ */ new Set(), pe = An();
  Wn(() => {
    v && (v.setEventHandler(void 0), v.indicateReverse(!1), v.setSelectedMarker(-1), v.setFeatures(void 0, void 0, !1));
  });
  function Qt(g) {
    if (We && (clearTimeout(We), We = void 0), z > -1 && R)
      t(56, N = R[z]), t(1, x = N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")), t(18, ue = void 0), t(55, j = void 0), t(15, z = -1);
    else if (x) {
      const B = g || !pt(x);
      vt(x, { exact: !0 }).then(() => {
        t(55, j = R), t(56, N = void 0), B && Ki();
      }).catch((Q) => t(18, ue = Q));
    }
  }
  function pt(g) {
    try {
      return Er(g, 6);
    } catch {
      return !1;
    }
  }
  async function vt(g, { byId: B = !1, exact: Q = !1 } = {}) {
    t(18, ue = void 0), ke == null || ke.abort();
    const te = new AbortController();
    t(19, ke = te);
    try {
      const P = pt(g), q = new URLSearchParams();
      if (M !== void 0 && q.set("language", Array.isArray(M) ? M.join(",") : M ?? ""), Me && q.set("types", Me.join(",")), Xe && q.set("excludeTypes", String(Xe)), d && q.set("bbox", d.map((et) => et.toFixed(6)).join(",")), m && q.set("country", Array.isArray(m) ? m.join(",") : m), !B && !P) {
        const et = await fr(v, H, te);
        et && q.set("proximity", et), (Q || !ce) && q.set("autocomplete", "false"), q.set("fuzzyMatch", String(E));
      }
      C !== void 0 && (dt || !P || (Me == null ? void 0 : Me.length) === 1) && q.set("limit", String(C)), q.set("key", u), mt(q);
      const ae = ht + "/" + encodeURIComponent(P ? P.decimalLongitude + "," + P.decimalLatitude : g) + ".json?" + q.toString();
      if (ae === qt) {
        B ? (t(14, R = void 0), t(56, N = Je[0])) : t(14, R = Je);
        return;
      }
      qt = ae;
      const _t = await fetch(ae, { signal: te.signal, ...gt });
      if (!_t.ok)
        throw new Error(await _t.text());
      const Et = await _t.json();
      pe("response", { url: ae, featureCollection: Et }), B ? (t(14, R = void 0), t(56, N = Et.features[0]), Je = [N]) : (t(14, R = Et.features.filter(L)), P && R.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + P.decimalLongitude + "_" + P.decimalLatitude,
        text: P.decimalLatitude + ", " + P.decimalLongitude,
        place_name: P.decimalLatitude + ", " + P.decimalLongitude,
        place_type: ["reverse"],
        center: [P.decimalLongitude, P.decimalLatitude],
        bbox: [
          P.decimalLongitude,
          P.decimalLatitude,
          P.decimalLongitude,
          P.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [P.decimalLongitude, P.decimalLatitude]
        }
      }), Je = R, P && le.focus());
    } catch (P) {
      if (P && typeof P == "object" && "name" in P && P.name === "AbortError")
        return;
      throw P;
    } finally {
      te === ke && t(19, ke = void 0);
    }
  }
  function Ki() {
    var te;
    if (!(j != null && j.length) || !S)
      return;
    const g = [180, 90, -180, -90], B = !j.some((P) => !P.matching_text);
    let Q;
    for (const P of j) {
      const q = De(P);
      if (Q = Q === void 0 ? q : q === void 0 ? Q : Math.max(Q, q), B || !P.matching_text)
        for (const ae of [0, 1, 2, 3])
          g[ae] = Math[ae < 2 ? "min" : "max"](g[ae], ((te = P.bbox) == null ? void 0 : te[ae]) ?? P.center[ae % 2]);
    }
    v && j.length > 0 && (N && g[0] === g[2] && g[1] === g[3] ? v.flyTo(N.center, De(N)) : v.fitBounds(lt(g), 50, Q));
  }
  function De(g) {
    var Q;
    if (!g.bbox || g.bbox[0] !== g.bbox[2] && g.bbox[1] !== g.bbox[3])
      return;
    const B = g.id.replace(/\..*/, "");
    return (Array.isArray((Q = g.properties) == null ? void 0 : Q.categories) ? g.properties.categories.reduce(
      (te, P) => {
        const q = Ke[B + "." + P];
        return te === void 0 ? q : q === void 0 ? te : Math.max(te, q);
      },
      void 0
    ) : void 0) ?? Ke[B];
  }
  function Ji(g) {
    t(0, O = b === "always"), t(14, R = void 0), t(56, N = void 0), t(15, z = -1), jt(g[1].toFixed(6) + ", " + cr(g[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function $i(g) {
    if (!R)
      return;
    let B = g.key === "ArrowDown" ? 1 : g.key === "ArrowUp" ? -1 : 0;
    B && (z === (Ie ? 0 : -1) && B === -1 && t(15, z = R.length), t(15, z += B), z >= R.length && t(15, z = -1), z < 0 && Ie && t(15, z = 0), g.preventDefault());
  }
  function bt(g = !0, B = !1) {
    if (t(18, ue = void 0), ce || B) {
      if (We && clearTimeout(We), x.length < _)
        return;
      const Q = x;
      We = window.setTimeout(
        () => {
          vt(Q).catch((te) => t(18, ue = te));
        },
        g ? y : 0
      );
    } else
      t(14, R = void 0), t(18, ue = void 0);
  }
  function wt(g) {
    t(56, N = g), t(1, x = g.place_name), t(15, z = -1);
  }
  const en = () => le.focus();
  function tn(g) {
    Nt[g ? "unshift" : "push"](() => {
      le = g, t(17, le);
    });
  }
  function nn() {
    x = this.value, t(1, x), t(13, Oe), t(28, f);
  }
  const rn = () => t(13, Oe = !0), on = () => t(13, Oe = !1), sn = () => bt(), ln = () => {
    t(1, x = ""), le.focus();
  }, un = () => t(0, O = !O), an = () => t(18, ue = void 0), cn = (g) => t(15, z = g), fn = (g) => wt(g), dn = () => {
    Ie || t(15, z = -1);
  }, hn = () => {
  };
  return n.$$set = (g) => {
    "class" in g && t(2, c = g.class), "apiKey" in g && t(26, u = g.apiKey), "bbox" in g && t(27, d = g.bbox), "clearButtonTitle" in g && t(3, a = g.clearButtonTitle), "clearOnBlur" in g && t(28, f = g.clearOnBlur), "collapsed" in g && t(4, h = g.collapsed), "country" in g && t(29, m = g.country), "debounceSearch" in g && t(30, y = g.debounceSearch), "enableReverse" in g && t(5, b = g.enableReverse), "errorMessage" in g && t(6, w = g.errorMessage), "filter" in g && t(31, L = g.filter), "flyTo" in g && t(32, S = g.flyTo), "fuzzyMatch" in g && t(33, E = g.fuzzyMatch), "language" in g && t(34, M = g.language), "limit" in g && t(35, C = g.limit), "mapController" in g && t(36, v = g.mapController), "minLength" in g && t(37, _ = g.minLength), "noResultsMessage" in g && t(7, k = g.noResultsMessage), "placeholder" in g && t(8, I = g.placeholder), "proximity" in g && t(38, H = g.proximity), "reverseActive" in g && t(0, O = g.reverseActive), "reverseButtonTitle" in g && t(9, J = g.reverseButtonTitle), "searchValue" in g && t(1, x = g.searchValue), "pickedResultStyle" in g && t(39, A = g.pickedResultStyle), "showPlaceType" in g && t(10, oe = g.showPlaceType), "showResultsWhileTyping" in g && t(40, ce = g.showResultsWhileTyping), "selectFirst" in g && t(11, Ie = g.selectFirst), "flyToSelected" in g && t(41, ft = g.flyToSelected), "markerOnSelected" in g && t(42, Ye = g.markerOnSelected), "types" in g && t(43, Me = g.types), "exhaustiveReverseGeocoding" in g && t(44, dt = g.exhaustiveReverseGeocoding), "excludeTypes" in g && t(45, Xe = g.excludeTypes), "zoom" in g && t(46, Ke = g.zoom), "apiUrl" in g && t(47, ht = g.apiUrl), "fetchParameters" in g && t(48, gt = g.fetchParameters), "iconsBaseUrl" in g && t(12, Gt = g.iconsBaseUrl), "adjustUrlQuery" in g && t(49, mt = g.adjustUrlQuery), "$$scope" in g && t(60, l = g.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*enableReverse*/
    32 && t(0, O = b === "always"), n.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, $e = Oe), f && !Oe && t(1, x = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | n.$$.dirty[1] & /*minLength*/
    64 && x.length < _ && (t(56, N = void 0), t(14, R = void 0), t(18, ue = void 0), t(55, j = R)), n.$$.dirty[1] & /*pickedResultStyle, picked*/
    33554688 && A !== "marker-only" && N && !N.address && N.geometry.type === "Point" && N.place_type[0] !== "reverse" && vt(N.id, { byId: !0 }).catch((g) => t(18, ue = g)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (v && N && N.id !== yt && S && (!N.bbox || N.bbox[0] === N.bbox[2] && N.bbox[1] === N.bbox[3] ? v.flyTo(N.center, De(N)) : v.fitBounds(lt(N.bbox), 50, De(N)), t(14, R = void 0), t(55, j = void 0), t(15, z = -1)), t(57, yt = N == null ? void 0 : N.id)), n.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && Ie && R != null && R.length && t(15, z = 0), n.$$.dirty[0] & /*searchValue*/
    2 && t(15, z = -1), n.$$.dirty[0] & /*listFeatures*/
    16384 | n.$$.dirty[1] & /*markedFeatures*/
    16777216 && j !== R && t(55, j = void 0), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | n.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && v && v.setEventHandler((g) => {
      switch (g.type) {
        case "mapClick":
          O && Ji(g.coordinates);
          break;
        case "markerClick":
          {
            const B = R == null ? void 0 : R.find((Q) => Q.id === g.id);
            B && wt(B);
          }
          break;
        case "markerMouseEnter":
          j && t(15, z = $e ? (R == null ? void 0 : R.findIndex((B) => B.id === g.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, z = -1);
          break;
      }
    }), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, r = R == null ? void 0 : R[z]), n.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && v && r && S && ft && v.flyTo(r.center, De(r)), n.$$.dirty[1] & /*pickedResultStyle*/
    256 && t(59, i = A === "full-geometry-including-polygon-center-marker"), n.$$.dirty[1] & /*markerOnSelected, mapController, showPolygonMarker*/
    268437536 && (Ye || v == null || v.setFeatures(void 0, void 0, i)), n.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected, showPolygonMarker*/
    419432480 && v && Ye && !j && (v.setFeatures(r ? [r] : void 0, void 0, i), v.setSelectedMarker(r ? 0 : -1)), n.$$.dirty[1] & /*mapController, markedFeatures, picked, showPolygonMarker*/
    318767136 && v && v.setFeatures(j, N, i), n.$$.dirty[0] & /*selectedItemIndex*/
    32768 | n.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && j && v && v.setSelectedMarker(z), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    32 && v) {
      const g = pt(x);
      v.setReverseMarker(g ? [g.decimalLongitude, g.decimalLatitude] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    134217728 && pe("select", { feature: r }), n.$$.dirty[1] & /*picked*/
    33554432 && pe("pick", { feature: N }), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && pe("optionsvisibilitychange", {
      optionsVisible: $e && !!R
    }), n.$$.dirty[0] & /*listFeatures*/
    16384 && pe("featureslisted", { features: R }), n.$$.dirty[1] & /*markedFeatures*/
    16777216 && pe("featuresmarked", { features: j }), n.$$.dirty[0] & /*reverseActive*/
    1 && pe("reversetoggle", { reverse: O }), n.$$.dirty[0] & /*searchValue*/
    2 && pe("querychange", { query: x }), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    32 && v && v.indicateReverse(O);
  }, [
    O,
    x,
    c,
    a,
    h,
    b,
    w,
    k,
    I,
    J,
    oe,
    Ie,
    Gt,
    Oe,
    R,
    z,
    $e,
    le,
    ue,
    ke,
    Xi,
    Qt,
    $i,
    bt,
    wt,
    s,
    u,
    d,
    f,
    m,
    y,
    L,
    S,
    E,
    M,
    C,
    v,
    _,
    H,
    A,
    ce,
    ft,
    Ye,
    Me,
    dt,
    Xe,
    Ke,
    ht,
    gt,
    mt,
    Vi,
    Zi,
    jt,
    Hi,
    Yi,
    j,
    N,
    yt,
    r,
    i,
    l,
    o,
    en,
    tn,
    nn,
    rn,
    on,
    sn,
    ln,
    un,
    an,
    cn,
    fn,
    dn,
    hn
  ];
}
let Nr = class extends Te {
  constructor(e) {
    super(), Re(
      this,
      e,
      Cr,
      kr,
      Pe,
      {
        ZOOM_DEFAULTS: 25,
        class: 2,
        apiKey: 26,
        bbox: 27,
        clearButtonTitle: 3,
        clearOnBlur: 28,
        collapsed: 4,
        country: 29,
        debounceSearch: 30,
        enableReverse: 5,
        errorMessage: 6,
        filter: 31,
        flyTo: 32,
        fuzzyMatch: 33,
        language: 34,
        limit: 35,
        mapController: 36,
        minLength: 37,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 38,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        pickedResultStyle: 39,
        showPlaceType: 10,
        showResultsWhileTyping: 40,
        selectFirst: 11,
        flyToSelected: 41,
        markerOnSelected: 42,
        types: 43,
        exhaustiveReverseGeocoding: 44,
        excludeTypes: 45,
        zoom: 46,
        apiUrl: 47,
        fetchParameters: 48,
        iconsBaseUrl: 12,
        adjustUrlQuery: 49,
        focus: 50,
        blur: 51,
        setQuery: 52,
        clearList: 53,
        clearMap: 54
      },
      null,
      [-1, -1, -1]
    );
  }
  get ZOOM_DEFAULTS() {
    return this.$$.ctx[25];
  }
  get focus() {
    return this.$$.ctx[50];
  }
  get blur() {
    return this.$$.ctx[51];
  }
  get setQuery() {
    return this.$$.ctx[52];
  }
  get clearList() {
    return this.$$.ctx[53];
  }
  get clearMap() {
    return this.$$.ctx[54];
  }
};
function ut(n, e, t = {}) {
  const i = { type: "Feature" };
  return (t.id === 0 || t.id) && (i.id = t.id), t.bbox && (i.bbox = t.bbox), i.properties = e || {}, i.geometry = n, i;
}
function Bt(n, e, t = {}) {
  for (const r of n) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let o = 0; o < r[r.length - 1].length; o++)
      if (r[r.length - 1][o] !== r[0][o])
        throw new Error("First and last Position are not equivalent.");
  }
  return ut({
    type: "Polygon",
    coordinates: n
  }, e, t);
}
function Tt(n, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = n, t;
}
function Gi(n, e, t = {}) {
  return ut({
    type: "MultiPolygon",
    coordinates: n
  }, e, t);
}
function ji(n, e, t) {
  if (n !== null)
    for (var i, r, o, l, s, c, u, d = 0, a = 0, f, h = n.type, m = h === "FeatureCollection", y = h === "Feature", b = m ? n.features.length : 1, w = 0; w < b; w++) {
      u = m ? n.features[w].geometry : y ? n.geometry : n, f = u ? u.type === "GeometryCollection" : !1, s = f ? u.geometries.length : 1;
      for (var L = 0; L < s; L++) {
        var S = 0, E = 0;
        if (l = f ? u.geometries[L] : u, l !== null) {
          c = l.coordinates;
          var M = l.type;
          switch (d = 0, M) {
            case null:
              break;
            case "Point":
              if (e(
                c,
                a,
                w,
                S,
                E
              ) === !1)
                return !1;
              a++, S++;
              break;
            case "LineString":
            case "MultiPoint":
              for (i = 0; i < c.length; i++) {
                if (e(
                  c[i],
                  a,
                  w,
                  S,
                  E
                ) === !1)
                  return !1;
                a++, M === "MultiPoint" && S++;
              }
              M === "LineString" && S++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (i = 0; i < c.length; i++) {
                for (r = 0; r < c[i].length - d; r++) {
                  if (e(
                    c[i][r],
                    a,
                    w,
                    S,
                    E
                  ) === !1)
                    return !1;
                  a++;
                }
                M === "MultiLineString" && S++, M === "Polygon" && E++;
              }
              M === "Polygon" && S++;
              break;
            case "MultiPolygon":
              for (i = 0; i < c.length; i++) {
                for (E = 0, r = 0; r < c[i].length; r++) {
                  for (o = 0; o < c[i][r].length - d; o++) {
                    if (e(
                      c[i][r][o],
                      a,
                      w,
                      S,
                      E
                    ) === !1)
                      return !1;
                    a++;
                  }
                  E++;
                }
                S++;
              }
              break;
            case "GeometryCollection":
              for (i = 0; i < l.geometries.length; i++)
                if (ji(l.geometries[i], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Dt(n, e) {
  var t, i, r, o, l, s, c, u, d, a, f = 0, h = n.type === "FeatureCollection", m = n.type === "Feature", y = h ? n.features.length : 1;
  for (t = 0; t < y; t++) {
    for (s = h ? n.features[t].geometry : m ? n.geometry : n, u = h ? n.features[t].properties : m ? n.properties : {}, d = h ? n.features[t].bbox : m ? n.bbox : void 0, a = h ? n.features[t].id : m ? n.id : void 0, c = s ? s.type === "GeometryCollection" : !1, l = c ? s.geometries.length : 1, r = 0; r < l; r++) {
      if (o = c ? s.geometries[r] : s, o === null) {
        if (e(
          null,
          f,
          u,
          d,
          a
        ) === !1)
          return !1;
        continue;
      }
      switch (o.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            o,
            f,
            u,
            d,
            a
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (i = 0; i < o.geometries.length; i++)
            if (e(
              o.geometries[i],
              f,
              u,
              d,
              a
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    f++;
  }
}
function Pr(n, e) {
  Dt(n, function(t, i, r, o, l) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          ut(t, r, { bbox: o, id: l }),
          i,
          0
        ) === !1 ? !1 : void 0;
    }
    var c;
    switch (s) {
      case "MultiPoint":
        c = "Point";
        break;
      case "MultiLineString":
        c = "LineString";
        break;
      case "MultiPolygon":
        c = "Polygon";
        break;
    }
    for (var u = 0; u < t.coordinates.length; u++) {
      var d = t.coordinates[u], a = {
        type: c,
        coordinates: d
      };
      if (e(ut(a, r), i, u) === !1)
        return !1;
    }
  });
}
function Rr(n, e = {}) {
  if (n.bbox != null && e.recompute !== !0)
    return n.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return ji(n, (i) => {
    t[0] > i[0] && (t[0] = i[0]), t[1] > i[1] && (t[1] = i[1]), t[2] < i[0] && (t[2] = i[0]), t[3] < i[1] && (t[3] = i[1]);
  }), t;
}
var bi = Rr;
/**
 * splaytree v3.1.2
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function Tr(n, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, i, r, o, l;
  return l = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function s(u) {
    return function(d) {
      return c([u, d]);
    };
  }
  function c(u) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (i = 1, r && (o = u[0] & 2 ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
      switch (r = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
        case 0:
        case 1:
          o = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, r = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = u;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(u);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(n, t);
    } catch (d) {
      u = [6, d], r = 0;
    } finally {
      i = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var Se = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(e, t) {
      this.next = null, this.key = e, this.data = t, this.left = null, this.right = null;
    }
    return n;
  }()
);
function Ir(n, e) {
  return n > e ? 1 : n < e ? -1 : 0;
}
function ve(n, e, t) {
  for (var i = new Se(null, null), r = i, o = i; ; ) {
    var l = t(n, e.key);
    if (l < 0) {
      if (e.left === null)
        break;
      if (t(n, e.left.key) < 0) {
        var s = e.left;
        if (e.left = s.right, s.right = e, e = s, e.left === null)
          break;
      }
      o.left = e, o = e, e = e.left;
    } else if (l > 0) {
      if (e.right === null)
        break;
      if (t(n, e.right.key) > 0) {
        var s = e.right;
        if (e.right = s.left, s.left = e, e = s, e.right === null)
          break;
      }
      r.right = e, r = e, e = e.right;
    } else
      break;
  }
  return r.right = e.left, o.left = e.right, e.left = i.right, e.right = i.left, e;
}
function kt(n, e, t, i) {
  var r = new Se(n, e);
  if (t === null)
    return r.left = r.right = null, r;
  t = ve(n, t, i);
  var o = i(n, t.key);
  return o < 0 ? (r.left = t.left, r.right = t, t.left = null) : o >= 0 && (r.right = t.right, r.left = t, t.right = null), r;
}
function wi(n, e, t) {
  var i = null, r = null;
  if (e) {
    e = ve(n, e, t);
    var o = t(e.key, n);
    o === 0 ? (i = e.left, r = e.right) : o < 0 ? (r = e.right, e.right = null, i = e) : (i = e.left, e.left = null, r = e);
  }
  return { left: i, right: r };
}
function Or(n, e, t) {
  return e === null ? n : (n === null || (e = ve(n.key, e, t), e.left = n), e);
}
function It(n, e, t, i, r) {
  if (n) {
    i("" + e + (t ? "└── " : "├── ") + r(n) + `
`);
    var o = e + (t ? "    " : "│   ");
    n.left && It(n.left, o, !1, i, r), n.right && It(n.right, o, !0, i, r);
  }
}
var Ut = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = Ir), this._root = null, this._size = 0, this._comparator = e;
    }
    return n.prototype.insert = function(e, t) {
      return this._size++, this._root = kt(e, t, this._root, this._comparator);
    }, n.prototype.add = function(e, t) {
      var i = new Se(e, t);
      this._root === null && (i.left = i.right = null, this._size++, this._root = i);
      var r = this._comparator, o = ve(e, this._root, r), l = r(e, o.key);
      return l === 0 ? this._root = o : (l < 0 ? (i.left = o.left, i.right = o, o.left = null) : l > 0 && (i.right = o.right, i.left = o, o.right = null), this._size++, this._root = i), this._root;
    }, n.prototype.remove = function(e) {
      this._root = this._remove(e, this._root, this._comparator);
    }, n.prototype._remove = function(e, t, i) {
      var r;
      if (t === null)
        return null;
      t = ve(e, t, i);
      var o = i(e, t.key);
      return o === 0 ? (t.left === null ? r = t.right : (r = ve(e, t.left, i), r.right = t.right), this._size--, r) : t;
    }, n.prototype.pop = function() {
      var e = this._root;
      if (e) {
        for (; e.left; )
          e = e.left;
        return this._root = ve(e.key, this._root, this._comparator), this._root = this._remove(e.key, this._root, this._comparator), { key: e.key, data: e.data };
      }
      return null;
    }, n.prototype.findStatic = function(e) {
      for (var t = this._root, i = this._comparator; t; ) {
        var r = i(e, t.key);
        if (r === 0)
          return t;
        r < 0 ? t = t.left : t = t.right;
      }
      return null;
    }, n.prototype.find = function(e) {
      return this._root && (this._root = ve(e, this._root, this._comparator), this._comparator(e, this._root.key) !== 0) ? null : this._root;
    }, n.prototype.contains = function(e) {
      for (var t = this._root, i = this._comparator; t; ) {
        var r = i(e, t.key);
        if (r === 0)
          return !0;
        r < 0 ? t = t.left : t = t.right;
      }
      return !1;
    }, n.prototype.forEach = function(e, t) {
      for (var i = this._root, r = [], o = !1; !o; )
        i !== null ? (r.push(i), i = i.left) : r.length !== 0 ? (i = r.pop(), e.call(t, i), i = i.right) : o = !0;
      return this;
    }, n.prototype.range = function(e, t, i, r) {
      for (var o = [], l = this._comparator, s = this._root, c; o.length !== 0 || s; )
        if (s)
          o.push(s), s = s.left;
        else {
          if (s = o.pop(), c = l(s.key, t), c > 0)
            break;
          if (l(s.key, e) >= 0 && i.call(r, s))
            return this;
          s = s.right;
        }
      return this;
    }, n.prototype.keys = function() {
      var e = [];
      return this.forEach(function(t) {
        var i = t.key;
        return e.push(i);
      }), e;
    }, n.prototype.values = function() {
      var e = [];
      return this.forEach(function(t) {
        var i = t.data;
        return e.push(i);
      }), e;
    }, n.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, n.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, n.prototype.minNode = function(e) {
      if (e === void 0 && (e = this._root), e)
        for (; e.left; )
          e = e.left;
      return e;
    }, n.prototype.maxNode = function(e) {
      if (e === void 0 && (e = this._root), e)
        for (; e.right; )
          e = e.right;
      return e;
    }, n.prototype.at = function(e) {
      for (var t = this._root, i = !1, r = 0, o = []; !i; )
        if (t)
          o.push(t), t = t.left;
        else if (o.length > 0) {
          if (t = o.pop(), r === e)
            return t;
          r++, t = t.right;
        } else
          i = !0;
      return null;
    }, n.prototype.next = function(e) {
      var t = this._root, i = null;
      if (e.right) {
        for (i = e.right; i.left; )
          i = i.left;
        return i;
      }
      for (var r = this._comparator; t; ) {
        var o = r(e.key, t.key);
        if (o === 0)
          break;
        o < 0 ? (i = t, t = t.left) : t = t.right;
      }
      return i;
    }, n.prototype.prev = function(e) {
      var t = this._root, i = null;
      if (e.left !== null) {
        for (i = e.left; i.right; )
          i = i.right;
        return i;
      }
      for (var r = this._comparator; t; ) {
        var o = r(e.key, t.key);
        if (o === 0)
          break;
        o < 0 ? t = t.left : (i = t, t = t.right);
      }
      return i;
    }, n.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, n.prototype.toList = function() {
      return Ar(this._root);
    }, n.prototype.load = function(e, t, i) {
      t === void 0 && (t = []), i === void 0 && (i = !1);
      var r = e.length, o = this._comparator;
      if (i && At(e, t, 0, r - 1, o), this._root === null)
        this._root = Ot(e, t, 0, r), this._size = r;
      else {
        var l = zr(this.toList(), Wr(e, t), o);
        r = this._size + r, this._root = Wt({ head: l }, 0, r);
      }
      return this;
    }, n.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(n.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.toString = function(e) {
      e === void 0 && (e = function(i) {
        return String(i.key);
      });
      var t = [];
      return It(this._root, "", !0, function(i) {
        return t.push(i);
      }, e), t.join("");
    }, n.prototype.update = function(e, t, i) {
      var r = this._comparator, o = wi(e, this._root, r), l = o.left, s = o.right;
      r(e, t) < 0 ? s = kt(t, i, s, r) : l = kt(t, i, l, r), this._root = Or(l, s, r);
    }, n.prototype.split = function(e) {
      return wi(e, this._root, this._comparator);
    }, n.prototype[Symbol.iterator] = function() {
      var e, t, i;
      return Tr(this, function(r) {
        switch (r.label) {
          case 0:
            e = this._root, t = [], i = !1, r.label = 1;
          case 1:
            return i ? [3, 6] : e === null ? [3, 2] : (t.push(e), e = e.left, [3, 5]);
          case 2:
            return t.length === 0 ? [3, 4] : (e = t.pop(), [4, e]);
          case 3:
            return r.sent(), e = e.right, [3, 5];
          case 4:
            i = !0, r.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, n;
  }()
);
function Ot(n, e, t, i) {
  var r = i - t;
  if (r > 0) {
    var o = t + Math.floor(r / 2), l = n[o], s = e[o], c = new Se(l, s);
    return c.left = Ot(n, e, t, o), c.right = Ot(n, e, o + 1, i), c;
  }
  return null;
}
function Wr(n, e) {
  for (var t = new Se(null, null), i = t, r = 0; r < n.length; r++)
    i = i.next = new Se(n[r], e[r]);
  return i.next = null, t.next;
}
function Ar(n) {
  for (var e = n, t = [], i = !1, r = new Se(null, null), o = r; !i; )
    e ? (t.push(e), e = e.left) : t.length > 0 ? (e = o = o.next = t.pop(), e = e.right) : i = !0;
  return o.next = null, r.next;
}
function Wt(n, e, t) {
  var i = t - e;
  if (i > 0) {
    var r = e + Math.floor(i / 2), o = Wt(n, e, r), l = n.head;
    return l.left = o, n.head = n.head.next, l.right = Wt(n, r + 1, t), l;
  }
  return null;
}
function zr(n, e, t) {
  for (var i = new Se(null, null), r = i, o = n, l = e; o !== null && l !== null; )
    t(o.key, l.key) < 0 ? (r.next = o, o = o.next) : (r.next = l, l = l.next), r = r.next;
  return o !== null ? r.next = o : l !== null && (r.next = l), i.next;
}
function At(n, e, t, i, r) {
  if (!(t >= i)) {
    for (var o = n[t + i >> 1], l = t - 1, s = i + 1; ; ) {
      do
        l++;
      while (r(n[l], o) < 0);
      do
        s--;
      while (r(n[s], o) > 0);
      if (l >= s)
        break;
      var c = n[l];
      n[l] = n[s], n[s] = c, c = e[l], e[l] = e[s], e[s] = c;
    }
    At(n, e, t, s, r), At(n, e, s + 1, i, r);
  }
}
const he = 11102230246251565e-32, X = 134217729, Fr = (3 + 8 * he) * he;
function Ct(n, e, t, i, r) {
  let o, l, s, c, u = e[0], d = i[0], a = 0, f = 0;
  d > u == d > -u ? (o = u, u = e[++a]) : (o = d, d = i[++f]);
  let h = 0;
  if (a < n && f < t)
    for (d > u == d > -u ? (l = u + o, s = o - (l - u), u = e[++a]) : (l = d + o, s = o - (l - d), d = i[++f]), o = l, s !== 0 && (r[h++] = s); a < n && f < t; )
      d > u == d > -u ? (l = o + u, c = l - o, s = o - (l - c) + (u - c), u = e[++a]) : (l = o + d, c = l - o, s = o - (l - c) + (d - c), d = i[++f]), o = l, s !== 0 && (r[h++] = s);
  for (; a < n; )
    l = o + u, c = l - o, s = o - (l - c) + (u - c), u = e[++a], o = l, s !== 0 && (r[h++] = s);
  for (; f < t; )
    l = o + d, c = l - o, s = o - (l - c) + (d - c), d = i[++f], o = l, s !== 0 && (r[h++] = s);
  return (o !== 0 || h === 0) && (r[h++] = o), h;
}
function Br(n, e) {
  let t = e[0];
  for (let i = 1; i < n; i++) t += e[i];
  return t;
}
function He(n) {
  return new Float64Array(n);
}
const Dr = (3 + 16 * he) * he, Ur = (2 + 12 * he) * he, Gr = (9 + 64 * he) * he * he, ze = He(4), _i = He(8), Ei = He(12), Li = He(16), $ = He(4);
function jr(n, e, t, i, r, o, l) {
  let s, c, u, d, a, f, h, m, y, b, w, L, S, E, M, C, v, _;
  const k = n - r, I = t - r, H = e - o, O = i - o;
  E = k * O, f = X * k, h = f - (f - k), m = k - h, f = X * O, y = f - (f - O), b = O - y, M = m * b - (E - h * y - m * y - h * b), C = H * I, f = X * H, h = f - (f - H), m = H - h, f = X * I, y = f - (f - I), b = I - y, v = m * b - (C - h * y - m * y - h * b), w = M - v, a = M - w, ze[0] = M - (w + a) + (a - v), L = E + w, a = L - E, S = E - (L - a) + (w - a), w = S - C, a = S - w, ze[1] = S - (w + a) + (a - C), _ = L + w, a = _ - L, ze[2] = L - (_ - a) + (w - a), ze[3] = _;
  let J = Br(4, ze), x = Ur * l;
  if (J >= x || -J >= x || (a = n - k, s = n - (k + a) + (a - r), a = t - I, u = t - (I + a) + (a - r), a = e - H, c = e - (H + a) + (a - o), a = i - O, d = i - (O + a) + (a - o), s === 0 && c === 0 && u === 0 && d === 0) || (x = Gr * l + Fr * Math.abs(J), J += k * d + O * s - (H * u + I * c), J >= x || -J >= x)) return J;
  E = s * O, f = X * s, h = f - (f - s), m = s - h, f = X * O, y = f - (f - O), b = O - y, M = m * b - (E - h * y - m * y - h * b), C = c * I, f = X * c, h = f - (f - c), m = c - h, f = X * I, y = f - (f - I), b = I - y, v = m * b - (C - h * y - m * y - h * b), w = M - v, a = M - w, $[0] = M - (w + a) + (a - v), L = E + w, a = L - E, S = E - (L - a) + (w - a), w = S - C, a = S - w, $[1] = S - (w + a) + (a - C), _ = L + w, a = _ - L, $[2] = L - (_ - a) + (w - a), $[3] = _;
  const A = Ct(4, ze, 4, $, _i);
  E = k * d, f = X * k, h = f - (f - k), m = k - h, f = X * d, y = f - (f - d), b = d - y, M = m * b - (E - h * y - m * y - h * b), C = H * u, f = X * H, h = f - (f - H), m = H - h, f = X * u, y = f - (f - u), b = u - y, v = m * b - (C - h * y - m * y - h * b), w = M - v, a = M - w, $[0] = M - (w + a) + (a - v), L = E + w, a = L - E, S = E - (L - a) + (w - a), w = S - C, a = S - w, $[1] = S - (w + a) + (a - C), _ = L + w, a = _ - L, $[2] = L - (_ - a) + (w - a), $[3] = _;
  const oe = Ct(A, _i, 4, $, Ei);
  E = s * d, f = X * s, h = f - (f - s), m = s - h, f = X * d, y = f - (f - d), b = d - y, M = m * b - (E - h * y - m * y - h * b), C = c * u, f = X * c, h = f - (f - c), m = c - h, f = X * u, y = f - (f - u), b = u - y, v = m * b - (C - h * y - m * y - h * b), w = M - v, a = M - w, $[0] = M - (w + a) + (a - v), L = E + w, a = L - E, S = E - (L - a) + (w - a), w = S - C, a = S - w, $[1] = S - (w + a) + (a - C), _ = L + w, a = _ - L, $[2] = L - (_ - a) + (w - a), $[3] = _;
  const ce = Ct(oe, Ei, 4, $, Li);
  return Li[ce - 1];
}
function qr(n, e, t, i, r, o) {
  const l = (e - o) * (t - r), s = (n - r) * (i - o), c = l - s, u = Math.abs(l + s);
  return Math.abs(c) >= Dr * u ? c : -jr(n, e, t, i, r, o, u);
}
const je = (n, e) => n.ll.x <= e.x && e.x <= n.ur.x && n.ll.y <= e.y && e.y <= n.ur.y, zt = (n, e) => {
  if (e.ur.x < n.ll.x || n.ur.x < e.ll.x || e.ur.y < n.ll.y || n.ur.y < e.ll.y) return null;
  const t = n.ll.x < e.ll.x ? e.ll.x : n.ll.x, i = n.ur.x < e.ur.x ? n.ur.x : e.ur.x, r = n.ll.y < e.ll.y ? e.ll.y : n.ll.y, o = n.ur.y < e.ur.y ? n.ur.y : e.ur.y;
  return {
    ll: {
      x: t,
      y: r
    },
    ur: {
      x: i,
      y: o
    }
  };
};
let we = Number.EPSILON;
we === void 0 && (we = Math.pow(2, -52));
const Qr = we * we, Si = (n, e) => {
  if (-we < n && n < we && -we < e && e < we)
    return 0;
  const t = n - e;
  return t * t < Qr * n * e ? 0 : n < e ? -1 : 1;
};
class Vr {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new xi(), this.yRounder = new xi();
  }
  round(e, t) {
    return {
      x: this.xRounder.round(e),
      y: this.yRounder.round(t)
    };
  }
}
class xi {
  constructor() {
    this.tree = new Ut(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(e) {
    const t = this.tree.add(e), i = this.tree.prev(t);
    if (i !== null && Si(t.key, i.key) === 0)
      return this.tree.remove(e), i.key;
    const r = this.tree.next(t);
    return r !== null && Si(t.key, r.key) === 0 ? (this.tree.remove(e), r.key) : e;
  }
}
const Ze = new Vr(), st = (n, e) => n.x * e.y - n.y * e.x, qi = (n, e) => n.x * e.x + n.y * e.y, Mi = (n, e, t) => {
  const i = qr(n.x, n.y, e.x, e.y, t.x, t.y);
  return i > 0 ? -1 : i < 0 ? 1 : 0;
}, at = (n) => Math.sqrt(qi(n, n)), Zr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return st(r, i) / at(r) / at(i);
}, Hr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return qi(r, i) / at(r) / at(i);
}, ki = (n, e, t) => e.y === 0 ? null : {
  x: n.x + e.x / e.y * (t - n.y),
  y: t
}, Ci = (n, e, t) => e.x === 0 ? null : {
  x: t,
  y: n.y + e.y / e.x * (t - n.x)
}, Yr = (n, e, t, i) => {
  if (e.x === 0) return Ci(t, i, n.x);
  if (i.x === 0) return Ci(n, e, t.x);
  if (e.y === 0) return ki(t, i, n.y);
  if (i.y === 0) return ki(n, e, t.y);
  const r = st(e, i);
  if (r == 0) return null;
  const o = {
    x: t.x - n.x,
    y: t.y - n.y
  }, l = st(o, e) / r, s = st(o, i) / r, c = n.x + s * e.x, u = t.x + l * i.x, d = n.y + s * e.y, a = t.y + l * i.y, f = (c + u) / 2, h = (d + a) / 2;
  return {
    x: f,
    y: h
  };
};
class re {
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const i = re.comparePoints(e.point, t.point);
    return i !== 0 ? i : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : _e.compare(e.segment, t.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, t) {
    return e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const t = e.point.events;
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i];
      this.point.events.push(o), o.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let t = 0; t < e; t++) {
      const i = this.point.events[t];
      if (i.segment.consumedBy === void 0)
        for (let r = t + 1; r < e; r++) {
          const o = this.point.events[r];
          o.consumedBy === void 0 && i.otherSE.point.events === o.otherSE.point.events && i.segment.consume(o.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let t = 0, i = this.point.events.length; t < i; t++) {
      const r = this.point.events[t];
      r !== this && !r.segment.ringOut && r.segment.isInResult() && e.push(r);
    }
    return e;
  }
  /**
   * Returns a comparator function for sorting linked events that will
   * favor the event that will give us the smallest left-side angle.
   * All ring construction starts as low as possible heading to the right,
   * so by always turning left as sharp as possible we'll get polygons
   * without uncessary loops & holes.
   *
   * The comparator function has a compute cache such that it avoids
   * re-computing already-computed values.
   */
  getLeftmostComparator(e) {
    const t = /* @__PURE__ */ new Map(), i = (r) => {
      const o = r.otherSE;
      t.set(r, {
        sine: Zr(this.point, e.point, o.point),
        cosine: Hr(this.point, e.point, o.point)
      });
    };
    return (r, o) => {
      t.has(r) || i(r), t.has(o) || i(o);
      const {
        sine: l,
        cosine: s
      } = t.get(r), {
        sine: c,
        cosine: u
      } = t.get(o);
      return l >= 0 && c >= 0 ? s < u ? 1 : s > u ? -1 : 0 : l < 0 && c < 0 ? s < u ? -1 : s > u ? 1 : 0 : c < l ? -1 : c > l ? 1 : 0;
    };
  }
}
let Xr = 0;
class _e {
  /* This compare() function is for ordering segments in the sweep
   * line tree, and does so according to the following criteria:
   *
   * Consider the vertical line that lies an infinestimal step to the
   * right of the right-more of the two left endpoints of the input
   * segments. Imagine slowly moving a point up from negative infinity
   * in the increasing y direction. Which of the two segments will that
   * point intersect first? That segment comes 'before' the other one.
   *
   * If neither segment would be intersected by such a line, (if one
   * or more of the segments are vertical) then the line to be considered
   * is directly on the right-more of the two left inputs.
   */
  static compare(e, t) {
    const i = e.leftSE.point.x, r = t.leftSE.point.x, o = e.rightSE.point.x, l = t.rightSE.point.x;
    if (l < i) return 1;
    if (o < r) return -1;
    const s = e.leftSE.point.y, c = t.leftSE.point.y, u = e.rightSE.point.y, d = t.rightSE.point.y;
    if (i < r) {
      if (c < s && c < u) return 1;
      if (c > s && c > u) return -1;
      const a = e.comparePoint(t.leftSE.point);
      if (a < 0) return 1;
      if (a > 0) return -1;
      const f = t.comparePoint(e.rightSE.point);
      return f !== 0 ? f : -1;
    }
    if (i > r) {
      if (s < c && s < d) return -1;
      if (s > c && s > d) return 1;
      const a = t.comparePoint(e.leftSE.point);
      if (a !== 0) return a;
      const f = e.comparePoint(t.rightSE.point);
      return f < 0 ? 1 : f > 0 ? -1 : 1;
    }
    if (s < c) return -1;
    if (s > c) return 1;
    if (o < l) {
      const a = t.comparePoint(e.rightSE.point);
      if (a !== 0) return a;
    }
    if (o > l) {
      const a = e.comparePoint(t.rightSE.point);
      if (a < 0) return 1;
      if (a > 0) return -1;
    }
    if (o !== l) {
      const a = u - s, f = o - i, h = d - c, m = l - r;
      if (a > f && h < m) return 1;
      if (a < f && h > m) return -1;
    }
    return o > l ? 1 : o < l || u < d ? -1 : u > d ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, i, r) {
    this.id = ++Xr, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = i, this.windings = r;
  }
  static fromRing(e, t, i) {
    let r, o, l;
    const s = re.comparePoints(e, t);
    if (s < 0)
      r = e, o = t, l = 1;
    else if (s > 0)
      r = t, o = e, l = -1;
    else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
    const c = new re(r, !0), u = new re(o, !1);
    return new _e(c, u, [i], [l]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(e) {
    this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const e = this.leftSE.point.y, t = this.rightSE.point.y;
    return {
      ll: {
        x: this.leftSE.point.x,
        y: e < t ? e : t
      },
      ur: {
        x: this.rightSE.point.x,
        y: e > t ? e : t
      }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x - this.leftSE.point.x,
      y: this.rightSE.point.y - this.leftSE.point.y
    };
  }
  isAnEndpoint(e) {
    return e.x === this.leftSE.point.x && e.y === this.leftSE.point.y || e.x === this.rightSE.point.x && e.y === this.rightSE.point.y;
  }
  /* Compare this segment with a point.
   *
   * A point P is considered to be colinear to a segment if there
   * exists a distance D such that if we travel along the segment
   * from one * endpoint towards the other a distance D, we find
   * ourselves at point P.
   *
   * Return value indicates:
   *
   *   1: point lies above the segment (to the left of vertical)
   *   0: point is colinear to segment
   *  -1: point lies below the segment (to the right of vertical)
   */
  comparePoint(e) {
    if (this.isAnEndpoint(e)) return 0;
    const t = this.leftSE.point, i = this.rightSE.point, r = this.vector();
    if (t.x === i.x)
      return e.x === t.x ? 0 : e.x < t.x ? 1 : -1;
    const o = (e.y - t.y) / r.y, l = t.x + o * r.x;
    if (e.x === l) return 0;
    const s = (e.x - t.x) / r.x, c = t.y + s * r.y;
    return e.y === c ? 0 : e.y < c ? -1 : 1;
  }
  /**
   * Given another segment, returns the first non-trivial intersection
   * between the two segments (in terms of sweep line ordering), if it exists.
   *
   * A 'non-trivial' intersection is one that will cause one or both of the
   * segments to be split(). As such, 'trivial' vs. 'non-trivial' intersection:
   *
   *   * endpoint of segA with endpoint of segB --> trivial
   *   * endpoint of segA with point along segB --> non-trivial
   *   * endpoint of segB with point along segA --> non-trivial
   *   * point along segA with point along segB --> non-trivial
   *
   * If no non-trivial intersection exists, return null
   * Else, return null.
   */
  getIntersection(e) {
    const t = this.bbox(), i = e.bbox(), r = zt(t, i);
    if (r === null) return null;
    const o = this.leftSE.point, l = this.rightSE.point, s = e.leftSE.point, c = e.rightSE.point, u = je(t, s) && this.comparePoint(s) === 0, d = je(i, o) && e.comparePoint(o) === 0, a = je(t, c) && this.comparePoint(c) === 0, f = je(i, l) && e.comparePoint(l) === 0;
    if (d && u)
      return f && !a ? l : !f && a ? c : null;
    if (d)
      return a && o.x === c.x && o.y === c.y ? null : o;
    if (u)
      return f && l.x === s.x && l.y === s.y ? null : s;
    if (f && a) return null;
    if (f) return l;
    if (a) return c;
    const h = Yr(o, this.vector(), s, e.vector());
    return h === null || !je(r, h) ? null : Ze.round(h.x, h.y);
  }
  /**
   * Split the given segment into multiple segments on the given points.
   *  * Each existing segment will retain its leftSE and a new rightSE will be
   *    generated for it.
   *  * A new segment will be generated which will adopt the original segment's
   *    rightSE, and a new leftSE will be generated for it.
   *  * If there are more than two points given to split on, new segments
   *    in the middle will be generated with new leftSE and rightSE's.
   *  * An array of the newly generated SweepEvents will be returned.
   *
   * Warning: input array of points is modified
   */
  split(e) {
    const t = [], i = e.events !== void 0, r = new re(e, !0), o = new re(e, !1), l = this.rightSE;
    this.replaceRightSE(o), t.push(o), t.push(r);
    const s = new _e(r, l, this.rings.slice(), this.windings.slice());
    return re.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(), re.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (r.checkForConsuming(), o.checkForConsuming()), t;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let t = 0, i = this.windings.length; t < i; t++)
      this.windings[t] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let t = this, i = e;
    for (; t.consumedBy; ) t = t.consumedBy;
    for (; i.consumedBy; ) i = i.consumedBy;
    const r = _e.compare(t, i);
    if (r !== 0) {
      if (r > 0) {
        const o = t;
        t = i, i = o;
      }
      if (t.prev === i) {
        const o = t;
        t = i, i = o;
      }
      for (let o = 0, l = i.rings.length; o < l; o++) {
        const s = i.rings[o], c = i.windings[o], u = t.rings.indexOf(s);
        u === -1 ? (t.rings.push(s), t.windings.push(c)) : t.windings[u] += c;
      }
      i.rings = null, i.windings = null, i.consumedBy = t, i.leftSE.consumedBy = t.leftSE, i.rightSE.consumedBy = t.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev) this._beforeState = {
      rings: [],
      windings: [],
      multiPolys: []
    };
    else {
      const e = this.prev.consumedBy || this.prev;
      this._beforeState = e.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const e = this.beforeState();
    this._afterState = {
      rings: e.rings.slice(0),
      windings: e.windings.slice(0),
      multiPolys: []
    };
    const t = this._afterState.rings, i = this._afterState.windings, r = this._afterState.multiPolys;
    for (let s = 0, c = this.rings.length; s < c; s++) {
      const u = this.rings[s], d = this.windings[s], a = t.indexOf(u);
      a === -1 ? (t.push(u), i.push(d)) : i[a] += d;
    }
    const o = [], l = [];
    for (let s = 0, c = t.length; s < c; s++) {
      if (i[s] === 0) continue;
      const u = t[s], d = u.poly;
      if (l.indexOf(d) === -1)
        if (u.isExterior) o.push(d);
        else {
          l.indexOf(d) === -1 && l.push(d);
          const a = o.indexOf(u.poly);
          a !== -1 && o.splice(a, 1);
        }
    }
    for (let s = 0, c = o.length; s < c; s++) {
      const u = o[s].multiPoly;
      r.indexOf(u) === -1 && r.push(u);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (se.type) {
      case "union": {
        const i = e.length === 0, r = t.length === 0;
        this._isInResult = i !== r;
        break;
      }
      case "intersection": {
        let i, r;
        e.length < t.length ? (i = e.length, r = t.length) : (i = t.length, r = e.length), this._isInResult = r === se.numMultiPolys && i < r;
        break;
      }
      case "xor": {
        const i = Math.abs(e.length - t.length);
        this._isInResult = i % 2 === 1;
        break;
      }
      case "difference": {
        const i = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = i(e) !== i(t);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${se.type}`);
    }
    return this._isInResult;
  }
}
class Ni {
  constructor(e, t, i) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = t, this.isExterior = i, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const r = Ze.round(e[0][0], e[0][1]);
    this.bbox = {
      ll: {
        x: r.x,
        y: r.y
      },
      ur: {
        x: r.x,
        y: r.y
      }
    };
    let o = r;
    for (let l = 1, s = e.length; l < s; l++) {
      if (typeof e[l][0] != "number" || typeof e[l][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let c = Ze.round(e[l][0], e[l][1]);
      c.x === o.x && c.y === o.y || (this.segments.push(_e.fromRing(o, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), o = c);
    }
    (r.x !== o.x || r.y !== o.y) && this.segments.push(_e.fromRing(o, r, this));
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, i = this.segments.length; t < i; t++) {
      const r = this.segments[t];
      e.push(r.leftSE), e.push(r.rightSE);
    }
    return e;
  }
}
class Kr {
  constructor(e, t) {
    if (!Array.isArray(e))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Ni(e[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let i = 1, r = e.length; i < r; i++) {
      const o = new Ni(e[i], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = t;
  }
  getSweepEvents() {
    const e = this.exteriorRing.getSweepEvents();
    for (let t = 0, i = this.interiorRings.length; t < i; t++) {
      const r = this.interiorRings[t].getSweepEvents();
      for (let o = 0, l = r.length; o < l; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class Pi {
  constructor(e, t) {
    if (!Array.isArray(e))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof e[0][0][0] == "number" && (e = [e]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: {
        x: Number.POSITIVE_INFINITY,
        y: Number.POSITIVE_INFINITY
      },
      ur: {
        x: Number.NEGATIVE_INFINITY,
        y: Number.NEGATIVE_INFINITY
      }
    };
    for (let i = 0, r = e.length; i < r; i++) {
      const o = new Kr(e[i], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = t;
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, i = this.polys.length; t < i; t++) {
      const r = this.polys[t].getSweepEvents();
      for (let o = 0, l = r.length; o < l; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class ct {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      if (!o.isInResult() || o.ringOut) continue;
      let l = null, s = o.leftSE, c = o.rightSE;
      const u = [s], d = s.point, a = [];
      for (; l = s, s = c, u.push(s), s.point !== d; )
        for (; ; ) {
          const f = s.getAvailableLinkedEvents();
          if (f.length === 0) {
            const y = u[0].point, b = u[u.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${y.x}, ${y.y}]. Last matching segment found ends at [${b.x}, ${b.y}].`);
          }
          if (f.length === 1) {
            c = f[0].otherSE;
            break;
          }
          let h = null;
          for (let y = 0, b = a.length; y < b; y++)
            if (a[y].point === s.point) {
              h = y;
              break;
            }
          if (h !== null) {
            const y = a.splice(h)[0], b = u.splice(y.index);
            b.unshift(b[0].otherSE), t.push(new ct(b.reverse()));
            continue;
          }
          a.push({
            index: u.length,
            point: s.point
          });
          const m = s.getLeftmostComparator(l);
          c = f.sort(m)[0].otherSE;
          break;
        }
      t.push(new ct(u));
    }
    return t;
  }
  constructor(e) {
    this.events = e;
    for (let t = 0, i = e.length; t < i; t++)
      e[t].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let u = 1, d = this.events.length - 1; u < d; u++) {
      const a = this.events[u].point, f = this.events[u + 1].point;
      Mi(a, e, f) !== 0 && (t.push(a), e = a);
    }
    if (t.length === 1) return null;
    const i = t[0], r = t[1];
    Mi(i, e, r) === 0 && t.shift(), t.push(t[0]);
    const o = this.isExteriorRing() ? 1 : -1, l = this.isExteriorRing() ? 0 : t.length - 1, s = this.isExteriorRing() ? t.length : -1, c = [];
    for (let u = l; u != s; u += o) c.push([t[u].x, t[u].y]);
    return c;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const e = this.enclosingRing();
      this._isExteriorRing = e ? !e.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let e = this.events[0];
    for (let r = 1, o = this.events.length; r < o; r++) {
      const l = this.events[r];
      re.compare(e, l) > 0 && (e = l);
    }
    let t = e.segment.prevInResult(), i = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!i) return t.ringOut;
      if (i.ringOut !== t.ringOut)
        return i.ringOut.enclosingRing() !== t.ringOut ? t.ringOut : t.ringOut.enclosingRing();
      t = i.prevInResult(), i = t ? t.prevInResult() : null;
    }
  }
}
class Ri {
  constructor(e) {
    this.exteriorRing = e, e.poly = this, this.interiorRings = [];
  }
  addInterior(e) {
    this.interiorRings.push(e), e.poly = this;
  }
  getGeom() {
    const e = [this.exteriorRing.getGeom()];
    if (e[0] === null) return null;
    for (let t = 0, i = this.interiorRings.length; t < i; t++) {
      const r = this.interiorRings[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}
class Jr {
  constructor(e) {
    this.rings = e, this.polys = this._composePolys(e);
  }
  getGeom() {
    const e = [];
    for (let t = 0, i = this.polys.length; t < i; t++) {
      const r = this.polys[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
  _composePolys(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      if (!o.poly)
        if (o.isExteriorRing()) t.push(new Ri(o));
        else {
          const l = o.enclosingRing();
          l.poly || t.push(new Ri(l)), l.poly.addInterior(o);
        }
    }
    return t;
  }
}
class $r {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e.compare;
    this.queue = e, this.tree = new Ut(t), this.segments = [];
  }
  process(e) {
    const t = e.segment, i = [];
    if (e.consumedBy)
      return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(t), i;
    const r = e.isLeft ? this.tree.add(t) : this.tree.find(t);
    if (!r) throw new Error(`Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`);
    let o = r, l = r, s, c;
    for (; s === void 0; )
      o = this.tree.prev(o), o === null ? s = null : o.key.consumedBy === void 0 && (s = o.key);
    for (; c === void 0; )
      l = this.tree.next(l), l === null ? c = null : l.key.consumedBy === void 0 && (c = l.key);
    if (e.isLeft) {
      let u = null;
      if (s) {
        const a = s.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (u = a), !s.isAnEndpoint(a))) {
          const f = this._splitSafely(s, a);
          for (let h = 0, m = f.length; h < m; h++)
            i.push(f[h]);
        }
      }
      let d = null;
      if (c) {
        const a = c.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (d = a), !c.isAnEndpoint(a))) {
          const f = this._splitSafely(c, a);
          for (let h = 0, m = f.length; h < m; h++)
            i.push(f[h]);
        }
      }
      if (u !== null || d !== null) {
        let a = null;
        u === null ? a = d : d === null ? a = u : a = re.comparePoints(u, d) <= 0 ? u : d, this.queue.remove(t.rightSE), i.push(t.rightSE);
        const f = t.split(a);
        for (let h = 0, m = f.length; h < m; h++)
          i.push(f[h]);
      }
      i.length > 0 ? (this.tree.remove(t), i.push(e)) : (this.segments.push(t), t.prev = s);
    } else {
      if (s && c) {
        const u = s.getIntersection(c);
        if (u !== null) {
          if (!s.isAnEndpoint(u)) {
            const d = this._splitSafely(s, u);
            for (let a = 0, f = d.length; a < f; a++)
              i.push(d[a]);
          }
          if (!c.isAnEndpoint(u)) {
            const d = this._splitSafely(c, u);
            for (let a = 0, f = d.length; a < f; a++)
              i.push(d[a]);
          }
        }
      }
      this.tree.remove(t);
    }
    return i;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(e, t) {
    this.tree.remove(e);
    const i = e.rightSE;
    this.queue.remove(i);
    const r = e.split(t);
    return r.push(i), e.consumedBy === void 0 && this.tree.add(e), r;
  }
}
const Ti = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, eo = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class to {
  run(e, t, i) {
    se.type = e, Ze.reset();
    const r = [new Pi(t, !0)];
    for (let a = 0, f = i.length; a < f; a++)
      r.push(new Pi(i[a], !1));
    if (se.numMultiPolys = r.length, se.type === "difference") {
      const a = r[0];
      let f = 1;
      for (; f < r.length; )
        zt(r[f].bbox, a.bbox) !== null ? f++ : r.splice(f, 1);
    }
    if (se.type === "intersection")
      for (let a = 0, f = r.length; a < f; a++) {
        const h = r[a];
        for (let m = a + 1, y = r.length; m < y; m++)
          if (zt(h.bbox, r[m].bbox) === null) return [];
      }
    const o = new Ut(re.compare);
    for (let a = 0, f = r.length; a < f; a++) {
      const h = r[a].getSweepEvents();
      for (let m = 0, y = h.length; m < y; m++)
        if (o.insert(h[m]), o.size > Ti)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const l = new $r(o);
    let s = o.size, c = o.pop();
    for (; c; ) {
      const a = c.key;
      if (o.size === s) {
        const h = a.segment;
        throw new Error(`Unable to pop() ${a.isLeft ? "left" : "right"} SweepEvent [${a.point.x}, ${a.point.y}] from segment #${h.id} [${h.leftSE.point.x}, ${h.leftSE.point.y}] -> [${h.rightSE.point.x}, ${h.rightSE.point.y}] from queue.`);
      }
      if (o.size > Ti)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (l.segments.length > eo)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const f = l.process(a);
      for (let h = 0, m = f.length; h < m; h++) {
        const y = f[h];
        y.consumedBy === void 0 && o.insert(y);
      }
      s = o.size, c = o.pop();
    }
    Ze.reset();
    const u = ct.factory(l.segments);
    return new Jr(u).getGeom();
  }
}
const se = new to(), io = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("union", n, t);
}, no = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("intersection", n, t);
}, ro = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("xor", n, t);
}, oo = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("difference", n, t);
};
var Qi = {
  union: io,
  intersection: no,
  xor: ro,
  difference: oo
};
function so(n) {
  const e = [];
  if (Dt(n, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = n.features[0].properties || {}, i = Qi.difference(e[0], ...e.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Bt(i[0], t) : Gi(i, t);
}
var lo = so;
function uo(n) {
  if (!n)
    throw new Error("geojson is required");
  var e = [];
  return Pr(n, function(t) {
    e.push(t);
  }), Tt(e);
}
var ao = uo;
function co(n, e = {}) {
  const t = [];
  if (Dt(n, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const i = Qi.union(t[0], ...t.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Bt(i[0], e.properties) : Gi(i, e.properties);
}
var fo = co;
function Ii(n, e) {
  const t = lo(
    Tt([
      Bt([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      n
    ])
  );
  if (!t)
    return;
  t.properties = { isMask: !0 };
  const i = lt(bi(n)), r = (i[2] - i[0]) / 360 / 1e3, o = i[0] < -180, l = i[2] > 180, s = ao(n);
  if (s.features.length > 1 && (o || l))
    for (const c of s.features) {
      const u = lt(bi(c));
      if (l && u[0] < -180 + r)
        for (const d of c.geometry.coordinates)
          for (const a of d)
            a[0] += 360 - r;
      if (o && u[2] > 180 - r)
        for (const d of c.geometry.coordinates)
          for (const a of d)
            a[0] -= 360 - r;
    }
  e(
    Tt([
      s.features.length < 2 ? n : fo(s) ?? n,
      t
    ])
  );
}
const Oi = "EPSG:4326";
function ho(n) {
  var o;
  const e = n.getProperties(), { isMask: t } = e, i = (o = n.getGeometry()) == null ? void 0 : o.getType(), r = t ? 0 : i === "LineString" || i === "MultiLineString" ? 3 : 2;
  return new Ln({
    stroke: t ? void 0 : new ei({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: t ? new $t({
      color: "#00000020"
    }) : void 0,
    image: new En({
      src: `/icons/marker_${e.isReverse ? "reverse" : e.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: e.isSelected ? 2 : e.isReverse ? 0 : 1,
    text: e.isSelected && e.tooltip ? new Sn({
      backgroundFill: new $t({ color: "white" }),
      text: e.tooltip,
      offsetY: -40,
      backgroundStroke: new ei({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function go(n, e = {}, t = {}, i = ho) {
  let r = -1, o, l, s, c = !1;
  const u = new vn({
    updateWhileAnimating: !0
  });
  n.addLayer(u);
  const d = new _n({});
  u.setSource(d), u.setStyle(i), n.on("click", (m) => {
    n.forEachFeatureAtPixel(m.pixel, (y) => {
      const b = y.getId();
      if (b)
        return m.stopPropagation(), l == null || l({ type: "markerClick", id: b }), y;
    });
  }), n.on("pointermove", (m) => {
    const y = n.forEachFeatureAtPixel(m.pixel, (b) => b.getId());
    o !== y && (o && (l == null || l({
      type: "markerMouseLeave",
      id: o
    })), y && (l == null || l({
      type: "markerMouseEnter",
      id: y
    })), n.getTargetElement().style.cursor = y ? "pointer" : c ? "crosshair" : "", o = y);
  });
  function a() {
    return wn() ?? n.getView().getProjection();
  }
  function f(m) {
    return m.transform(Oi, a());
  }
  const h = (m) => {
    l == null || l({
      type: "mapClick",
      coordinates: Jt(m.coordinate, a())
    });
  };
  return {
    setEventHandler(m) {
      m ? (l = m, n.on("click", h)) : (l = void 0, n.un("click", h));
    },
    flyTo(m, y) {
      n.getView().animate({
        center: tt(m, a()),
        ...y ? { zoom: y } : {},
        duration: 2e3,
        ...e
      });
    },
    fitBounds(m, y, b) {
      n.getView().fit(bn(m, Oi, a()), {
        padding: [y, y, y, y],
        ...b ? { maxZoom: b } : {},
        duration: 2e3,
        ...t
      });
    },
    indicateReverse(m) {
      c = m, n.getTargetElement().style.cursor = m ? "crosshair" : "";
    },
    setReverseMarker(m) {
      s ? m ? s.getGeometry().setCoordinates(
        tt(m, a())
      ) : (d.removeFeature(s), s.dispose(), s = void 0) : m && (s = new fe(
        new xt(tt(m, a()))
      ), s.setProperties({ isReverse: !0 }), d.addFeature(s));
    },
    setFeatures(m, y, b) {
      function w(L) {
        var S;
        if (L)
          for (const E of L.features) {
            const M = E.geometry.type === "Polygon" ? new Ht(E.geometry.coordinates) : E.geometry.type === "MultiPolygon" ? new Yt(E.geometry.coordinates) : null;
            M && d.addFeature(
              new fe({
                isMask: !!((S = E.properties) != null && S.isMask),
                geometry: f(M)
              })
            );
          }
      }
      if (d.clear(), s && d.addFeature(s), y) {
        let L = !1;
        if (y.geometry.type === "GeometryCollection") {
          const S = y.geometry.geometries.map(
            (E) => E.type === "Polygon" ? new Ht(E.coordinates) : E.type === "MultiPolygon" ? new Yt(E.coordinates) : null
          ).filter((E) => !!E);
          if (S.length > 0)
            d.addFeature(
              new fe(f(new pn(S)))
            ), L = !0;
          else
            for (const E of y.geometry.geometries)
              E.type === "LineString" ? (d.addFeature(
                new fe(
                  f(new Xt(E.coordinates))
                )
              ), L = !0) : E.type === "MultiLineString" && d.addFeature(
                new fe(
                  f(new Kt(E.coordinates))
                )
              ), L = !0;
        }
        if (!L) {
          if (y.geometry.type === "Polygon")
            Ii(y, w);
          else if (y.geometry.type === "MultiPolygon")
            Ii(y, w);
          else if (y.geometry.type === "LineString") {
            d.addFeature(
              new fe(
                f(new Xt(y.geometry.coordinates))
              )
            );
            return;
          } else if (y.geometry.type === "MultiLineString") {
            d.addFeature(
              new fe(
                f(new Kt(y.geometry.coordinates))
              )
            );
            return;
          }
        }
        if (!b && y.geometry.type !== "Point")
          return;
        d.addFeature(new fe(f(new xt(y.center))));
      }
      for (const L of m ?? []) {
        if (L === y)
          continue;
        const S = new fe(
          new xt(tt(L.center, a()))
        );
        S.setId(L.id), S.setProperties({
          fuzzy: !!L.matching_text,
          tooltip: L.place_type[0] === "reverse" ? L.place_name : L.place_name.replace(/,.*/, "")
        }), d.addFeature(S);
      }
    },
    setSelectedMarker(m) {
      var w, L, S;
      const y = d.getFeatures(), b = (w = y[0]) != null && w.getProperties().isReverse ? 1 : 0;
      r > -1 && ((L = y[r + b]) == null || L.setProperties({
        isSelected: !1
      })), m > -1 && ((S = y[m + b]) == null || S.setProperties({
        isSelected: !0
      })), r = m;
    },
    getCenterAndZoom() {
      const m = n.getView(), y = m.getCenter(), b = m.getZoom();
      if (!(!y || b === void 0))
        return [b, ...Jt(y, a())];
    }
  };
}
var Z, Ne;
class zo extends yn {
  constructor(t) {
    const i = document.createElement("div");
    i.className = "ol-search";
    super({
      element: i,
      target: t.target
    });
    Lt(this, Z);
    Lt(this, Ne);
    const { flyTo: r, fullGeometryStyle: o, ...l } = t;
    St(this, Z, new Nr({
      target: i,
      props: {
        flyTo: r === void 0 ? !0 : !!r,
        ...l
      }
    })), V(this, Z).$on("select", (s) => {
      this.dispatchEvent(new mo(s.detail.feature));
    }), V(this, Z).$on("pick", (s) => {
      this.dispatchEvent(new bo(s.detail.feature));
    }), V(this, Z).$on("featureslisted", (s) => {
      this.dispatchEvent(new yo(s.detail.features));
    }), V(this, Z).$on("featuresmarked", (s) => {
      this.dispatchEvent(new po(s.detail.features));
    }), V(this, Z).$on("response", (s) => {
      this.dispatchEvent(
        new _o(s.detail.url, s.detail.featureCollection)
      );
    }), V(this, Z).$on("optionsvisibilitychange", (s) => {
      this.dispatchEvent(
        new vo(s.detail.optionsVisible)
      );
    }), V(this, Z).$on("reversetoggle", (s) => {
      this.dispatchEvent(new Eo(s.detail.reverse));
    }), V(this, Z).$on("querychange", (s) => {
      this.dispatchEvent(new wo(s.detail.query));
    }), St(this, Ne, t);
  }
  setMap(t) {
    var i;
    if (super.setMap(t), t) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: r,
        fullGeometryStyle: o
      } = V(this, Ne), l = go(
        t,
        typeof r == "boolean" ? void 0 : r,
        typeof r == "boolean" ? void 0 : r,
        // marker,
        // showResultMarkers,
        o
      );
      (i = V(this, Z)) == null || i.$set({ mapController: l });
    }
  }
  setOptions(t) {
    var l;
    Object.assign(V(this, Ne), t);
    const { flyTo: i, fullGeometryStyle: r, ...o } = V(this, Ne);
    (l = V(this, Z)) == null || l.$set({
      ...o,
      flyTo: i === void 0 ? !0 : !!i
    });
  }
  setQuery(t, i = !0) {
    var r;
    (r = V(this, Z)) == null || r.setQuery(t, i);
  }
  clearMap() {
    var t;
    (t = V(this, Z)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = V(this, Z)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = V(this, Z)) == null || t.focus();
  }
  blur() {
    var t;
    (t = V(this, Z)) == null || t.blur();
  }
  // onRemove() {
  //   this.#gc?.$destroy();
  // }
}
Z = new WeakMap(), Ne = new WeakMap();
class mo extends xe {
  constructor(t) {
    super("select");
    ne(this, "feature");
    this.feature = t;
  }
}
class yo extends xe {
  constructor(t) {
    super("featureslisted");
    ne(this, "features");
    this.features = t;
  }
}
class po extends xe {
  constructor(t) {
    super("featuresmarked");
    ne(this, "features");
    this.features = t;
  }
}
class vo extends xe {
  constructor(t) {
    super("optionsvisibilitychange");
    ne(this, "optionsVisible");
    this.optionsVisible = t;
  }
}
class bo extends xe {
  constructor(t) {
    super("pick");
    ne(this, "feature");
    this.feature = t;
  }
}
class wo extends xe {
  constructor(t) {
    super("querychange");
    ne(this, "query");
    this.query = t;
  }
}
class _o extends xe {
  constructor(t, i) {
    super("response");
    ne(this, "url");
    ne(this, "featureCollection");
    this.url = t, this.featureCollection = i;
  }
}
class Eo extends xe {
  constructor(t) {
    super("reversetoggle");
    ne(this, "reverse");
    this.reverse = t;
  }
}
export {
  yo as FeaturesListedEvent,
  po as FeaturesMarkedEvent,
  zo as GeocodingControl,
  vo as OptionsVisibilityChangeEvent,
  bo as PickEvent,
  wo as QueryChangeEvent,
  _o as ResponseEvent,
  Eo as ReverseToggleEvent,
  mo as SelectEvent,
  go as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
