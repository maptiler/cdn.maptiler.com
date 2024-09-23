var hn = Object.defineProperty;
var Zt = (n) => {
  throw TypeError(n);
};
var mn = (n, e, t) => e in n ? hn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ne = (n, e, t) => mn(n, typeof e != "symbol" ? e + "" : e, t), Qt = (n, e, t) => e.has(n) || Zt("Cannot " + t);
var se = (n, e, t) => (Qt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Lt = (n, e, t) => e.has(n) ? Zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), tt = (n, e, t, i) => (Qt(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t);
import { Control as gn } from "ol/control";
import xe from "ol/events/Event";
import { Feature as fe } from "ol";
import { Point as St, Polygon as Vt, MultiPolygon as Ht, GeometryCollection as yn, LineString as Yt, MultiLineString as Xt } from "ol/geom";
import pn from "ol/layer/Vector";
import { fromLonLat as it, transformExtent as bn, toLonLat as Kt, getUserProjection as vn } from "ol/proj";
import wn from "ol/source/Vector";
import Jt from "ol/style/Fill";
import _n from "ol/style/Icon";
import $t from "ol/style/Stroke";
import En from "ol/style/Style";
import Ln from "ol/style/Text";
function z() {
}
function Sn(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Oi(n) {
  return n();
}
function ei() {
  return /* @__PURE__ */ Object.create(null);
}
function ye(n) {
  n.forEach(Oi);
}
function Wi(n) {
  return typeof n == "function";
}
function Pe(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let nt;
function X(n, e) {
  return n === e ? !0 : (nt || (nt = document.createElement("a")), nt.href = e, n === nt.href);
}
function xn(n) {
  return Object.keys(n).length === 0;
}
function Mn(n, e, t, i) {
  if (n) {
    const r = Ai(n, e, t, i);
    return n[0](r);
  }
}
function Ai(n, e, t, i) {
  return n[1] && i ? Sn(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function kn(n, e, t, i) {
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
function Cn(n, e, t, i, r, o) {
  if (r) {
    const l = Ai(e, t, i, o);
    n.p(l, r);
  }
}
function Nn(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function ti(n) {
  return n ?? "";
}
function R(n, e) {
  n.appendChild(e);
}
function q(n, e, t) {
  n.insertBefore(e, t || null);
}
function B(n) {
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
function te() {
  return Ee(" ");
}
function Pn() {
  return Ee("");
}
function J(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function Tn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function b(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Rn(n) {
  return Array.from(n.childNodes);
}
function Ze(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function ii(n, e) {
  n.value = e ?? "";
}
function ve(n, e, t) {
  n.classList.toggle(e, !!t);
}
function In(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
let Qe;
function je(n) {
  Qe = n;
}
function Fi() {
  if (!Qe) throw new Error("Function called outside component initialization");
  return Qe;
}
function On(n) {
  Fi().$$.on_destroy.push(n);
}
function Wn() {
  const n = Fi();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const r = n.$$.callbacks[e];
    if (r) {
      const o = In(
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
function ni(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Be = [], Ct = [];
let De = [];
const ri = [], An = /* @__PURE__ */ Promise.resolve();
let Nt = !1;
function Fn() {
  Nt || (Nt = !0, An.then(Bi));
}
function Pt(n) {
  De.push(n);
}
const xt = /* @__PURE__ */ new Set();
let Ae = 0;
function Bi() {
  if (Ae !== 0)
    return;
  const n = Qe;
  do {
    try {
      for (; Ae < Be.length; ) {
        const e = Be[Ae];
        Ae++, je(e), Bn(e.$$);
      }
    } catch (e) {
      throw Be.length = 0, Ae = 0, e;
    }
    for (je(null), Be.length = 0, Ae = 0; Ct.length; ) Ct.pop()();
    for (let e = 0; e < De.length; e += 1) {
      const t = De[e];
      xt.has(t) || (xt.add(t), t());
    }
    De.length = 0;
  } while (Be.length);
  for (; ri.length; )
    ri.pop()();
  Nt = !1, xt.clear(), je(n);
}
function Bn(n) {
  if (n.fragment !== null) {
    n.update(), ye(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Pt);
  }
}
function Dn(n) {
  const e = [], t = [];
  De.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), De = e;
}
const rt = /* @__PURE__ */ new Set();
let Ce;
function ot() {
  Ce = {
    r: 0,
    c: [],
    p: Ce
    // parent group
  };
}
function st() {
  Ce.r || ye(Ce.c), Ce = Ce.p;
}
function j(n, e) {
  n && n.i && (rt.delete(n), n.i(e));
}
function H(n, e, t, i) {
  if (n && n.o) {
    if (rt.has(n)) return;
    rt.add(n), Ce.c.push(() => {
      rt.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function oi(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Un(n, e) {
  H(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Gn(n, e, t, i, r, o, l, s, c, u, d, a) {
  let f = n.length, h = o.length, g = f;
  const y = {};
  for (; g--; ) y[n[g].key] = g;
  const v = [], p = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), _ = [];
  for (g = h; g--; ) {
    const L = a(r, o, g), w = t(L);
    let k = l.get(w);
    k ? _.push(() => k.p(L, e)) : (k = u(w, L), k.c()), p.set(w, v[g] = k), w in y && E.set(w, Math.abs(g - y[w]));
  }
  const x = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
  function S(L) {
    j(L, 1), L.m(s, d), l.set(L.key, L), d = L.first, h--;
  }
  for (; f && h; ) {
    const L = v[h - 1], w = n[f - 1], k = L.key, I = w.key;
    L === w ? (d = L.first, f--, h--) : p.has(I) ? !l.has(k) || x.has(k) ? S(L) : C.has(I) ? f-- : E.get(k) > E.get(I) ? (C.add(k), S(L)) : (x.add(I), f--) : (c(w, l), f--);
  }
  for (; f--; ) {
    const L = n[f];
    p.has(L.key) || c(L, l);
  }
  for (; h; ) S(v[h - 1]);
  return ye(_), v;
}
function Le(n) {
  n && n.c();
}
function me(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), Pt(() => {
    const o = n.$$.on_mount.map(Oi).filter(Wi);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : ye(o), n.$$.on_mount = [];
  }), r.forEach(Pt);
}
function ge(n, e) {
  const t = n.$$;
  t.fragment !== null && (Dn(t.after_update), ye(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function zn(n, e) {
  n.$$.dirty[0] === -1 && (Be.push(n), Fn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Te(n, e, t, i, r, o, l = null, s = [-1]) {
  const c = Qe;
  je(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: z,
    not_equal: r,
    bound: ei(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: ei(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  l && l(u.root);
  let d = !1;
  if (u.ctx = t ? t(n, e.props || {}, (a, f, ...h) => {
    const g = h.length ? h[0] : f;
    return u.ctx && r(u.ctx[a], u.ctx[a] = g) && (!u.skip_bound && u.bound[a] && u.bound[a](g), d && zn(n, a)), f;
  }) : [], u.update(), d = !0, ye(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = Rn(e.target);
      u.fragment && u.fragment.l(a), a.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && j(n.$$.fragment), me(n, e.target, e.anchor), Bi();
  }
  je(c);
}
class Re {
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
    ge(this, 1), this.$destroy = z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Wi(t))
      return z;
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
    this.$$set && !xn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const qn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(qn);
function jn(n) {
  let e, t;
  return {
    c() {
      e = de("svg"), t = de("path"), b(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), b(e, "viewBox", "0 0 14 14"), b(e, "width", "13"), b(e, "height", "13"), b(e, "class", "svelte-en2qvf");
    },
    m(i, r) {
      q(i, e, r), R(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(i) {
      i && B(e);
    }
  };
}
class Di extends Re {
  constructor(e) {
    super(), Te(this, e, null, jn, Pe, {});
  }
}
function Zn(n) {
  let e, t;
  return {
    c() {
      e = de("svg"), t = de("path"), b(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), b(e, "viewBox", "0 0 30 30"), b(e, "fill", "none"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "class", "svelte-d2loi5");
    },
    m(i, r) {
      q(i, e, r), R(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(i) {
      i && B(e);
    }
  };
}
class Ui extends Re {
  constructor(e) {
    super(), Te(this, e, null, Zn, Pe, {});
  }
}
function Qn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Vn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Hn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Yn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Xn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Kn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function Jn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
        e,
        "alt",
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function $n(n) {
  let e, t, i, r;
  return {
    c() {
      e = W("img"), X(e.src, t = /*imageUrl*/
      n[5]) || b(e, "src", t), b(
        e,
        "alt",
        /*category*/
        n[4]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(o, l) {
      q(o, e, l), i || (r = J(
        e,
        "error",
        /*error_handler*/
        n[14]
      ), i = !0);
    },
    p(o, l) {
      l & /*imageUrl*/
      32 && !X(e.src, t = /*imageUrl*/
      o[5]) && b(e, "src", t), l & /*category*/
      16 && b(
        e,
        "alt",
        /*category*/
        o[4]
      );
    },
    d(o) {
      o && B(e), i = !1, r();
    }
  };
}
function si(n) {
  let e, t;
  return {
    c() {
      e = W("span"), t = Ee(
        /*placeType*/
        n[6]
      ), b(e, "class", "secondary svelte-ltkwvy");
    },
    m(i, r) {
      q(i, e, r), R(e, t);
    },
    p(i, r) {
      r & /*placeType*/
      64 && Ze(
        t,
        /*placeType*/
        i[6]
      );
    },
    d(i) {
      i && B(e);
    }
  };
}
function er(n) {
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
    n[2] && !/*feature*/
    n[0].address && !/*feature*/
    n[0].id.startsWith("road.") && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5]) && !/*isReverse*/
    n[7]
  ), g, y, v = (
    /*isReverse*/
    (n[7] ? "" : (
      /*feature*/
      n[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), p, E, _;
  function x(w, k) {
    return k & /*feature*/
    1 && (t = null), k & /*feature*/
    1 && (i = null), k & /*feature*/
    1 && (r = null), k & /*feature*/
    1 && (o = null), /*imageUrl*/
    w[5] ? $n : (
      /*feature*/
      w[0].address ? Jn : (t == null && (t = !!/*feature*/
      w[0].id.startsWith("road.")), t ? Kn : (i == null && (i = !!/*feature*/
      w[0].id.startsWith("address.")), i ? Xn : (r == null && (r = !!/*feature*/
      w[0].id.startsWith("postal_code.")), r ? Yn : (o == null && (o = !!/*feature*/
      w[0].id.startsWith("poi.")), o ? Hn : (
        /*isReverse*/
        w[7] ? Vn : Qn
      )))))
    );
  }
  let C = x(n, -1), S = C(n), L = h && si(n);
  return {
    c() {
      e = W("li"), S.c(), l = te(), s = W("span"), c = W("span"), u = W("span"), a = Ee(d), f = te(), L && L.c(), g = te(), y = W("span"), p = Ee(v), b(u, "class", "primary svelte-ltkwvy"), b(c, "class", "svelte-ltkwvy"), b(y, "class", "line2 svelte-ltkwvy"), b(s, "class", "texts svelte-ltkwvy"), b(e, "tabindex", "0"), b(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), b(e, "class", "svelte-ltkwvy"), ve(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(w, k) {
      q(w, e, k), S.m(e, null), R(e, l), R(e, s), R(s, c), R(c, u), R(u, a), R(c, f), L && L.m(c, null), R(s, g), R(s, y), R(y, p), E || (_ = [
        J(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[12]
        ),
        J(
          e,
          "focus",
          /*focus_handler*/
          n[13]
        )
      ], E = !0);
    },
    p(w, [k]) {
      C === (C = x(w, k)) && S ? S.p(w, k) : (S.d(1), S = C(w), S && (S.c(), S.m(e, l))), k & /*feature*/
      1 && d !== (d = /*isReverse*/
      (w[7] ? (
        /*feature*/
        w[0].place_name
      ) : (
        /*feature*/
        w[0].place_name.replace(/,.*/, "")
      )) + "") && Ze(a, d), k & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      w[2] === "always" || /*showPlaceType*/
      w[2] && !/*feature*/
      w[0].address && !/*feature*/
      w[0].id.startsWith("road.") && !/*feature*/
      w[0].id.startsWith("address.") && !/*feature*/
      w[0].id.startsWith("postal_code.") && (!/*feature*/
      w[0].id.startsWith("poi.") || !/*imageUrl*/
      w[5]) && !/*isReverse*/
      w[7]), h ? L ? L.p(w, k) : (L = si(w), L.c(), L.m(c, null)) : L && (L.d(1), L = null), k & /*feature*/
      1 && v !== (v = /*isReverse*/
      (w[7] ? "" : (
        /*feature*/
        w[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ze(p, v), k & /*selected*/
      2 && b(
        e,
        "data-selected",
        /*selected*/
        w[1]
      ), k & /*selected*/
      2 && ve(
        e,
        "selected",
        /*selected*/
        w[1]
      );
    },
    i: z,
    o: z,
    d(w) {
      w && B(e), S.d(), L && L.d(), E = !1, ye(_);
    }
  };
}
function tr(n, e, t) {
  var _;
  let i, r, { feature: o } = e, { selected: l = !1 } = e, { showPlaceType: s } = e, { missingIconsCache: c } = e, { iconsBaseUrl: u } = e;
  const d = (_ = o.properties) == null ? void 0 : _.categories;
  let a, f, h = 0, g = o.place_type[0] === "reverse";
  function y() {
    f && c.add(f), t(10, h++, h);
  }
  function v(x) {
    ni.call(this, n, x);
  }
  function p(x) {
    ni.call(this, n, x);
  }
  const E = () => y();
  return n.$$set = (x) => {
    "feature" in x && t(0, o = x.feature), "selected" in x && t(1, l = x.selected), "showPlaceType" in x && t(2, s = x.showPlaceType), "missingIconsCache" in x && t(9, c = x.missingIconsCache), "iconsBaseUrl" in x && t(3, u = x.iconsBaseUrl);
  }, n.$$.update = () => {
    var x, C, S, L;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, i--, i), t(4, a = d == null ? void 0 : d[i]), t(5, f = a ? u + a.replace(/ /g, "_") + ".svg" : void 0);
      while (i > -1 && (!f || c.has(f)));
    n.$$.dirty & /*feature*/
    1 && t(6, r = ((C = (x = o.properties) == null ? void 0 : x.categories) == null ? void 0 : C.join(", ")) ?? ((L = (S = o.properties) == null ? void 0 : S.place_type_name) == null ? void 0 : L[0]) ?? o.place_type[0]);
  }, t(11, i = (d == null ? void 0 : d.length) ?? 0), [
    o,
    l,
    s,
    u,
    a,
    f,
    r,
    g,
    y,
    c,
    h,
    i,
    v,
    p,
    E
  ];
}
class ir extends Re {
  constructor(e) {
    super(), Te(this, e, tr, er, Pe, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function nr(n) {
  let e;
  return {
    c() {
      e = W("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', b(e, "class", "svelte-7cmwmc");
    },
    m(t, i) {
      q(t, e, i);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && B(e);
    }
  };
}
class rr extends Re {
  constructor(e) {
    super(), Te(this, e, null, nr, Pe, {});
  }
}
function or(n) {
  let e, t;
  return {
    c() {
      e = de("svg"), t = de("path"), b(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), b(e, "viewBox", "0 0 60.006 21.412"), b(e, "width", "14"), b(e, "height", "20"), b(e, "class", "svelte-en2qvf");
    },
    m(i, r) {
      q(i, e, r), R(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(i) {
      i && B(e);
    }
  };
}
class sr extends Re {
  constructor(e) {
    super(), Te(this, e, null, or, Pe, {});
  }
}
function lr(n) {
  let e, t, i;
  return {
    c() {
      e = de("svg"), t = de("circle"), i = de("path"), b(t, "cx", "4.789"), b(t, "cy", "4.787"), b(t, "r", "3.85"), b(t, "class", "svelte-1aq105l"), b(i, "d", "M12.063 12.063 7.635 7.635"), b(i, "class", "svelte-1aq105l"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "width", "13"), b(e, "height", "13"), b(e, "viewBox", "0 0 13 13"), b(e, "class", "svelte-1aq105l");
    },
    m(r, o) {
      q(r, e, o), R(e, t), R(e, i);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && B(e);
    }
  };
}
class ur extends Re {
  constructor(e) {
    super(), Te(this, e, null, lr, Pe, {});
  }
}
function ar(n, e, t) {
  const i = e[1], r = e[0], o = i - r;
  return n === i && t ? n : ((n - r) % o + o) % o + r;
}
function ut(n) {
  const e = [...n];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ge;
async function cr(n, e, t) {
  const i = n == null ? void 0 : n.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(i && (r.minZoom != null && r.minZoom > i[0] || r.maxZoom != null && r.maxZoom < i[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Ge && r.cachedLocationExpiry && Ge.time + r.cachedLocationExpiry > Date.now()) {
          if (!Ge.coords)
            break e;
          return Ge.coords;
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
          r.cachedLocationExpiry && (Ge = {
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
const fr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, li = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, ui = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, ai = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, ci = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, fi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function dr(n) {
  if (!["DMS", "DM", "DD"].includes(n))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((h) => Number(h.trim())), t = Number(e[0]), i = Number(e[1]), r = Math.abs(t), o = Math.abs(i), l = t > 0 ? "N" : "S", s = i > 0 ? "E" : "W";
    let c;
    n == "DD" && (c = `${r}° ${l}, ${o}° ${s}`);
    const u = Math.floor(r), d = Math.floor(o), a = (r - u) * 60, f = (o - d) * 60;
    if (n == "DM") {
      let h = di(a, 3).toFixed(3).padStart(6, "0"), g = di(f, 3).toFixed(3).padStart(6, "0");
      h.endsWith(".000") && g.endsWith(".000") && (h = h.replace(/\.000$/, ""), g = g.replace(/\.000$/, "")), c = `${u}° ${h}' ${l}, ${d}° ${g}' ${s}`;
    }
    if (n == "DMS") {
      const h = Math.floor(a), g = Math.floor(f);
      let y = ((a - h) * 60).toFixed(1).padStart(4, "0"), v = ((f - g) * 60).toFixed(1).padStart(4, "0");
      const p = h.toString().padStart(2, "0"), E = g.toString().padStart(2, "0");
      y.endsWith(".0") && v.endsWith(".0") && (y = y.replace(/\.0$/, ""), v = v.replace(/\.0$/, "")), c = `${u}° ${p}' ${y}" ${l}, ${d}° ${E}' ${v}" ${s}`;
    }
    return c;
  } else
    throw new Error("no decimal coordinates to convert");
}
function di(n, e) {
  const t = Math.pow(10, e);
  return Math.round((n + Number.EPSILON) * t) / t;
}
function Ft(n, e) {
  e || (e = 5), n = n.replace(/\s+/g, " ").trim();
  let t = null, i = null, r = "", o = "", l = null, s = [], c = !1;
  if (fr.test(n))
    throw new Error("invalid coordinate value");
  if (li.test(n))
    if (s = li.exec(n), c = ze(s), c)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), i = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (i *= -1), l = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (ui.test(n))
    if (s = ui.exec(n), c = ze(s), c) {
      if (t = s[2], i = s[6], t.includes(",") && (t = t.replace(",", ".")), i.includes(",") && (i = i.replace(",", ".")), l = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(i)) == Number(i))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], o = s[5]) : s[4] && (r = s[4], o = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ai.test(n))
    if (s = ai.exec(n), c = ze(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[9])), s[11] && (i += s[11] / 60), s[13] && (i += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[8]) : s[7] && (r = s[7], o = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ci.test(n))
    if (s = ci.exec(n), c = ze(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6] / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[10])), s[12] && (i += s[12] / 60), s[14] && (i += s[14] / 3600), parseInt(s[10]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (fi.test(n)) {
    if (s = fi.exec(n), c = ze(s), s.filter((u) => u).length <= 5)
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
    const h = /[,/;\u0020]/g, g = d.match(h);
    if (g == null) {
      const p = Math.floor(n.length / 2);
      a = d.substring(0, p).trim(), f = d.substring(p).trim();
    } else {
      let p;
      g.length % 2 == 1 ? p = Math.floor(g.length / 2) : p = g.length / 2 - 1;
      let E = 0;
      if (p == 0)
        E = d.indexOf(g[0]), a = d.substring(0, E).trim(), f = d.substring(E + 1).trim();
      else {
        let _ = 0, x = 0;
        for (; _ <= p; )
          E = d.indexOf(g[_], x), x = E + 1, _++;
        a = d.substring(0, E).trim(), f = d.substring(E + 1).trim();
      }
    }
    const y = a.split(".");
    if (y.length == 2 && y[1] == 0 && y[1].length != 2)
      throw new Error("invalid coordinates format");
    const v = f.split(".");
    if (v.length == 2 && v[1] == 0 && v[1].length != 2)
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
      closeEnough: hr,
      toCoordinateFormat: dr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function ze(n) {
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
function hi(n, e) {
  const t = Math.abs(n - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function hr(n) {
  if (!n)
    throw new Error("coords must be provided");
  if (n.includes(",")) {
    const e = n.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return hi(this.decimalLatitude, Number(e[0])) && hi(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const mr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Ft.to = mr;
const gr = [
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
], yr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, pr = [
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
function vr() {
  const n = [];
  return gr.forEach((e) => {
    e.decimalLatitude ? n.push(e) : n.push({ ...e, ...yr });
  }), [...n, ...pr, ...br];
}
const wr = vr();
Ft.formats = wr.map((n) => n.verbatimCoordinates);
const _r = Ft;
function mi(n, e, t) {
  const i = n.slice();
  return i[83] = e[t], i[85] = t, i;
}
function gi(n) {
  let e, t;
  return e = new rr({}), {
    c() {
      Le(e.$$.fragment);
    },
    m(i, r) {
      me(e, i, r), t = !0;
    },
    i(i) {
      t || (j(e.$$.fragment, i), t = !0);
    },
    o(i) {
      H(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ge(e, i);
    }
  };
}
function yi(n) {
  let e, t, i, r, o;
  return t = new sr({}), {
    c() {
      e = W("button"), Le(t.$$.fragment), b(e, "type", "button"), b(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), b(e, "class", "svelte-qnu791"), ve(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(l, s) {
      q(l, e, s), me(t, e, null), i = !0, r || (o = J(
        e,
        "click",
        /*click_handler_2*/
        n[68]
      ), r = !0);
    },
    p(l, s) {
      (!i || s[0] & /*reverseButtonTitle*/
      512) && b(
        e,
        "title",
        /*reverseButtonTitle*/
        l[9]
      ), (!i || s[0] & /*reverseActive*/
      1) && ve(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      i || (j(t.$$.fragment, l), i = !0);
    },
    o(l) {
      H(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(e), ge(t), r = !1, o();
    }
  };
}
function Er(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, o, l, s = oi(
    /*listFeatures*/
    n[14]
  );
  const c = (u) => (
    /*feature*/
    u[83].id + /*feature*/
    (u[83].address ? "," + /*feature*/
    u[83].address : "")
  );
  for (let u = 0; u < s.length; u += 1) {
    let d = mi(n, s, u), a = c(d);
    i.set(a, t[u] = pi(a, d));
  }
  return {
    c() {
      e = W("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      b(e, "class", "svelte-qnu791");
    },
    m(u, d) {
      q(u, e, d);
      for (let a = 0; a < t.length; a += 1)
        t[a] && t[a].m(e, null);
      r = !0, o || (l = [
        J(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[72]
        ),
        J(
          e,
          "blur",
          /*blur_handler_1*/
          n[73]
        )
      ], o = !0);
    },
    p(u, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (s = oi(
        /*listFeatures*/
        u[14]
      ), ot(), t = Gn(t, d, c, 1, u, s, i, e, Un, pi, null, mi), st());
    },
    i(u) {
      if (!r) {
        for (let d = 0; d < s.length; d += 1)
          j(t[d]);
        r = !0;
      }
    },
    o(u) {
      for (let d = 0; d < t.length; d += 1)
        H(t[d]);
      r = !1;
    },
    d(u) {
      u && B(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      o = !1, ye(l);
    }
  };
}
function Lr(n) {
  let e, t, i, r, o, l;
  return t = new Ui({}), {
    c() {
      e = W("div"), Le(t.$$.fragment), i = te(), r = W("div"), o = Ee(
        /*noResultsMessage*/
        n[7]
      ), b(r, "class", "svelte-qnu791"), b(e, "class", "no-results svelte-qnu791");
    },
    m(s, c) {
      q(s, e, c), me(t, e, null), R(e, i), R(e, r), R(r, o), l = !0;
    },
    p(s, c) {
      (!l || c[0] & /*noResultsMessage*/
      128) && Ze(
        o,
        /*noResultsMessage*/
        s[7]
      );
    },
    i(s) {
      l || (j(t.$$.fragment, s), l = !0);
    },
    o(s) {
      H(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && B(e), ge(t);
    }
  };
}
function Sr(n) {
  let e = "", t;
  return {
    c() {
      t = Ee(e);
    },
    m(i, r) {
      q(i, t, r);
    },
    p: z,
    i: z,
    o: z,
    d(i) {
      i && B(t);
    }
  };
}
function xr(n) {
  let e, t, i, r, o, l, s, c, u, d, a;
  return t = new Ui({}), c = new Di({}), {
    c() {
      e = W("div"), Le(t.$$.fragment), i = te(), r = W("div"), o = Ee(
        /*errorMessage*/
        n[6]
      ), l = te(), s = W("button"), Le(c.$$.fragment), b(r, "class", "svelte-qnu791"), b(s, "class", "svelte-qnu791"), b(e, "class", "error svelte-qnu791");
    },
    m(f, h) {
      q(f, e, h), me(t, e, null), R(e, i), R(e, r), R(r, o), R(e, l), R(e, s), me(c, s, null), u = !0, d || (a = J(
        s,
        "click",
        /*click_handler_3*/
        n[69]
      ), d = !0);
    },
    p(f, h) {
      (!u || h[0] & /*errorMessage*/
      64) && Ze(
        o,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      u || (j(t.$$.fragment, f), j(c.$$.fragment, f), u = !0);
    },
    o(f) {
      H(t.$$.fragment, f), H(c.$$.fragment, f), u = !1;
    },
    d(f) {
      f && B(e), ge(t), ge(c), d = !1, a();
    }
  };
}
function pi(n, e) {
  let t, i, r;
  function o() {
    return (
      /*mouseenter_handler*/
      e[70](
        /*i*/
        e[85]
      )
    );
  }
  function l() {
    return (
      /*focus_handler_1*/
      e[71](
        /*feature*/
        e[83]
      )
    );
  }
  return i = new ir({
    props: {
      feature: (
        /*feature*/
        e[83]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[15] === /*i*/
        e[85]
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
      t = Pn(), Le(i.$$.fragment), this.first = t;
    },
    m(s, c) {
      q(s, t, c), me(i, s, c), r = !0;
    },
    p(s, c) {
      e = s;
      const u = {};
      c[0] & /*listFeatures*/
      16384 && (u.feature = /*feature*/
      e[83]), c[0] & /*showPlaceType*/
      1024 && (u.showPlaceType = /*showPlaceType*/
      e[10]), c[0] & /*selectedItemIndex, listFeatures*/
      49152 && (u.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[85]), c[0] & /*iconsBaseUrl*/
      4096 && (u.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), i.$set(u);
    },
    i(s) {
      r || (j(i.$$.fragment, s), r = !0);
    },
    o(s) {
      H(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(t), ge(i, s);
    }
  };
}
function Mr(n) {
  let e, t, i, r, o, l, s, c, u, d, a, f, h, g, y, v, p, E, _, x, C, S = !1;
  o = new ur({}), a = new Di({});
  let L = (
    /*abortController*/
    n[19] && gi()
  ), w = (
    /*enableReverse*/
    n[5] === !0 && yi(n)
  );
  const k = (
    /*#slots*/
    n[60].default
  ), I = Mn(
    k,
    n,
    /*$$scope*/
    n[59],
    null
  ), A = [xr, Sr, Lr, Er], D = [];
  function O(M, U) {
    var $, ie;
    return (
      /*error*/
      M[18] ? 0 : (
        /*focusedDelayed*/
        M[16] ? (
          /*listFeatures*/
          (($ = M[14]) == null ? void 0 : $.length) === 0 ? 2 : (
            /*focusedDelayed*/
            M[16] && /*listFeatures*/
            ((ie = M[14]) != null && ie.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(v = O(n)) && (p = D[v] = A[v](n)), {
    c() {
      e = te(), t = W("form"), i = W("div"), r = W("button"), Le(o.$$.fragment), l = te(), s = W("input"), c = te(), u = W("div"), d = W("button"), Le(a.$$.fragment), f = te(), L && L.c(), h = te(), w && w.c(), g = te(), I && I.c(), y = te(), p && p.c(), b(r, "class", "search-button svelte-qnu791"), b(r, "type", "button"), b(
        s,
        "placeholder",
        /*placeholder*/
        n[8]
      ), b(
        s,
        "aria-label",
        /*placeholder*/
        n[8]
      ), b(s, "class", "svelte-qnu791"), b(d, "type", "button"), b(
        d,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), b(d, "class", "svelte-qnu791"), b(u, "class", "clear-button-container svelte-qnu791"), ve(
        u,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), b(i, "class", "input-group svelte-qnu791"), b(t, "tabindex", "0"), b(t, "class", E = ti(
        /*className*/
        n[2]
      ) + " svelte-qnu791"), ve(
        t,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(M, U) {
      q(M, e, U), q(M, t, U), R(t, i), R(i, r), me(o, r, null), R(i, l), R(i, s), n[62](s), ii(
        s,
        /*searchValue*/
        n[1]
      ), R(i, c), R(i, u), R(u, d), me(a, d, null), R(u, f), L && L.m(u, null), R(i, h), w && w.m(i, null), R(i, g), I && I.m(i, null), R(t, y), ~v && D[v].m(t, null), _ = !0, x || (C = [
        J(
          r,
          "click",
          /*click_handler*/
          n[61]
        ),
        J(
          s,
          "input",
          /*input_1_input_handler*/
          n[63]
        ),
        J(
          s,
          "focus",
          /*focus_handler*/
          n[64]
        ),
        J(
          s,
          "blur",
          /*blur_handler*/
          n[65]
        ),
        J(
          s,
          "keydown",
          /*handleKeyDown*/
          n[22]
        ),
        J(
          s,
          "input",
          /*input_handler*/
          n[66]
        ),
        J(
          d,
          "click",
          /*click_handler_1*/
          n[67]
        ),
        J(t, "submit", Tn(
          /*handleOnSubmit*/
          n[21]
        ))
      ], x = !0);
    },
    p(M, U) {
      (!_ || U[0] & /*placeholder*/
      256) && b(
        s,
        "placeholder",
        /*placeholder*/
        M[8]
      ), (!_ || U[0] & /*placeholder*/
      256) && b(
        s,
        "aria-label",
        /*placeholder*/
        M[8]
      ), U[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      M[1] && ii(
        s,
        /*searchValue*/
        M[1]
      ), (!_ || U[0] & /*clearButtonTitle*/
      8) && b(
        d,
        "title",
        /*clearButtonTitle*/
        M[3]
      ), /*abortController*/
      M[19] ? L ? U[0] & /*abortController*/
      524288 && j(L, 1) : (L = gi(), L.c(), j(L, 1), L.m(u, null)) : L && (ot(), H(L, 1, 1, () => {
        L = null;
      }), st()), (!_ || U[0] & /*searchValue*/
      2) && ve(
        u,
        "displayable",
        /*searchValue*/
        M[1] !== ""
      ), /*enableReverse*/
      M[5] === !0 ? w ? (w.p(M, U), U[0] & /*enableReverse*/
      32 && j(w, 1)) : (w = yi(M), w.c(), j(w, 1), w.m(i, g)) : w && (ot(), H(w, 1, 1, () => {
        w = null;
      }), st()), I && I.p && (!_ || U[1] & /*$$scope*/
      268435456) && Cn(
        I,
        k,
        M,
        /*$$scope*/
        M[59],
        _ ? kn(
          k,
          /*$$scope*/
          M[59],
          U,
          null
        ) : Nn(
          /*$$scope*/
          M[59]
        ),
        null
      );
      let $ = v;
      v = O(M), v === $ ? ~v && D[v].p(M, U) : (p && (ot(), H(D[$], 1, 1, () => {
        D[$] = null;
      }), st()), ~v ? (p = D[v], p ? p.p(M, U) : (p = D[v] = A[v](M), p.c()), j(p, 1), p.m(t, null)) : p = null), (!_ || U[0] & /*className*/
      4 && E !== (E = ti(
        /*className*/
        M[2]
      ) + " svelte-qnu791")) && b(t, "class", E), (!_ || U[0] & /*className, collapsed, searchValue*/
      22) && ve(
        t,
        "can-collapse",
        /*collapsed*/
        M[4] && /*searchValue*/
        M[1] === ""
      );
    },
    i(M) {
      _ || (j(S), j(o.$$.fragment, M), j(a.$$.fragment, M), j(L), j(w), j(I, M), j(p), _ = !0);
    },
    o(M) {
      H(S), H(o.$$.fragment, M), H(a.$$.fragment, M), H(L), H(w), H(I, M), H(p), _ = !1;
    },
    d(M) {
      M && (B(e), B(t)), ge(o), n[62](null), ge(a), L && L.d(), w && w.d(), I && I.d(M), ~v && D[v].d(), x = !1, ye(C);
    }
  };
}
function kr(n, e, t) {
  let i, { $$slots: r = {}, $$scope: o } = e;
  const l = {
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
  let { class: s = void 0 } = e, { apiKey: c } = e, { bbox: u = void 0 } = e, { clearButtonTitle: d = "clear" } = e, { clearOnBlur: a = !1 } = e, { collapsed: f = !1 } = e, { country: h = void 0 } = e, { debounceSearch: g = 200 } = e, { enableReverse: y = !1 } = e, { errorMessage: v = "Something went wrong…" } = e, { filter: p = () => !0 } = e, { flyTo: E = !0 } = e, { fuzzyMatch: _ = !0 } = e, { language: x = void 0 } = e, { limit: C = void 0 } = e, { mapController: S = void 0 } = e, { minLength: L = 2 } = e, { noResultsMessage: w = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: I = [{ type: "server-geolocation" }] } = e, { reverseActive: A = y === "always" } = e, { reverseButtonTitle: D = "toggle reverse geocoding" } = e, { searchValue: O = "" } = e, { showFullGeometry: M = !0 } = e, { showPlaceType: U = "ifNeeded" } = e, { showResultsWhileTyping: $ = !0 } = e, { selectFirst: ie = !0 } = e, { flyToSelected: dt = !1 } = e, { markerOnSelected: Ye = !0 } = e, { types: Me = void 0 } = e, { excludeTypes: Xe = !1 } = e, { zoom: Ie = l } = e, { maxZoom: Ke = void 0 } = e, { apiUrl: ht = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: mt = {} } = e, { iconsBaseUrl: Gt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.4.1/icons/" } = e, { adjustUrlQuery: gt = () => {
  } } = e;
  function Zi() {
    ue.focus();
  }
  function Qi() {
    ue.blur();
  }
  function zt(m, G = !0, V = !1) {
    t(1, O = m), G ? (t(15, F = -1), jt()) : (vt(!V, V), setTimeout(() => {
      ue.focus(), ue.select();
    }));
  }
  function Vi() {
    t(14, T = void 0), t(56, N = void 0), t(15, F = -1);
  }
  function Hi() {
    t(55, Z = []), t(56, N = void 0);
  }
  let Oe = !1, T, Z, N, qt = "", ue, F = -1, ae, Je = [], ke, We, $e, yt;
  const Yi = /* @__PURE__ */ new Set(), pe = Wn();
  On(() => {
    S && (S.setEventHandler(void 0), S.indicateReverse(!1), S.setSelectedMarker(-1), S.setMarkers(void 0, void 0));
  });
  function jt(m) {
    if (We && (clearTimeout(We), We = void 0), F > -1 && T)
      t(56, N = T[F]), t(1, O = N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")), t(18, ae = void 0), t(55, Z = void 0), t(15, F = -1);
    else if (O) {
      const G = m || !pt(O);
      bt(O, { exact: !0 }).then(() => {
        t(55, Z = T), t(56, N = void 0), G && Xi();
      }).catch((V) => t(18, ae = V));
    }
  }
  function pt(m) {
    try {
      return _r(m, 6);
    } catch {
      return !1;
    }
  }
  async function bt(m, { byId: G = !1, exact: V = !1 } = {}) {
    t(18, ae = void 0), ke == null || ke.abort();
    const ee = new AbortController();
    t(19, ke = ee);
    try {
      const P = pt(m), Q = new URLSearchParams();
      if (x !== void 0 && Q.set("language", Array.isArray(x) ? x.join(",") : x ?? ""), Me && Q.set("types", Me.join(",")), Xe && Q.set("excludeTypes", String(Xe)), u && Q.set("bbox", u.map((et) => et.toFixed(6)).join(",")), h && Q.set("country", Array.isArray(h) ? h.join(",") : h), !G && !P) {
        const et = await cr(S, I, ee);
        et && Q.set("proximity", et), (V || !$) && Q.set("autocomplete", "false"), Q.set("fuzzyMatch", String(_));
      }
      C !== void 0 && (!P || (Me == null ? void 0 : Me.length) === 1) && Q.set("limit", String(C)), Q.set("key", c), gt(Q);
      const ce = ht + "/" + encodeURIComponent(P ? P.decimalLongitude + "," + P.decimalLatitude : m) + ".json?" + Q.toString();
      if (ce === qt) {
        G ? (t(14, T = void 0), t(56, N = Je[0])) : t(14, T = Je);
        return;
      }
      qt = ce;
      const _t = await fetch(ce, { signal: ee.signal, ...mt });
      if (!_t.ok)
        throw new Error(await _t.text());
      const Et = await _t.json();
      pe("response", { url: ce, featureCollection: Et }), G ? (t(14, T = void 0), t(56, N = Et.features[0]), Je = [N]) : (t(14, T = Et.features.filter(p)), P && T.unshift({
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
      }), Je = T, P && ue.focus());
    } catch (P) {
      if (P && typeof P == "object" && "name" in P && P.name === "AbortError")
        return;
      throw P;
    } finally {
      ee === ke && t(19, ke = void 0);
    }
  }
  function Xi() {
    var ee;
    if (!(Z != null && Z.length) || !E)
      return;
    const m = [180, 90, -180, -90], G = !Z.some((P) => !P.matching_text);
    let V;
    for (const P of Z) {
      const Q = Ue(P);
      if (V = Ke ?? (V === void 0 ? Q : Q === void 0 ? V : Math.max(V, Q)), G || !P.matching_text)
        for (const ce of [0, 1, 2, 3])
          m[ce] = Math[ce < 2 ? "min" : "max"](m[ce], ((ee = P.bbox) == null ? void 0 : ee[ce]) ?? P.center[ce % 2]);
    }
    S && Z.length > 0 && (N && m[0] === m[2] && m[1] === m[3] ? S.flyTo(N.center, Ue(N)) : S.fitBounds(ut(m), 50, V));
  }
  function Ue(m) {
    var V;
    if (!m.bbox || m.bbox[0] !== m.bbox[2] && m.bbox[1] !== m.bbox[3])
      return;
    if (typeof Ie == "number")
      return m.id.startsWith("poi.") || m.id.startsWith("address.") ? Ke : Ie;
    const G = m.id.replace(/\..*/, "");
    return (Array.isArray((V = m.properties) == null ? void 0 : V.categories) ? m.properties.categories.reduce(
      (ee, P) => {
        const Q = Ie[G + "." + P];
        return ee === void 0 ? Q : Q === void 0 ? ee : Math.max(ee, Q);
      },
      void 0
    ) : void 0) ?? Ie[G];
  }
  function Ki(m) {
    t(0, A = y === "always"), t(14, T = void 0), t(56, N = void 0), t(15, F = -1), zt(m[1].toFixed(6) + ", " + ar(m[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Ji(m) {
    if (!T)
      return;
    let G = m.key === "ArrowDown" ? 1 : m.key === "ArrowUp" ? -1 : 0;
    G && (F === (ie ? 0 : -1) && G === -1 && t(15, F = T.length), t(15, F += G), F >= T.length && t(15, F = -1), F < 0 && ie && t(15, F = 0), m.preventDefault());
  }
  function vt(m = !0, G = !1) {
    if (t(18, ae = void 0), $ || G) {
      if (We && clearTimeout(We), O.length < L)
        return;
      const V = O;
      We = window.setTimeout(
        () => {
          bt(V).catch((ee) => t(18, ae = ee));
        },
        m ? g : 0
      );
    } else
      t(14, T = void 0), t(18, ae = void 0);
  }
  function wt(m) {
    t(56, N = m), t(1, O = m.place_name), t(15, F = -1);
  }
  const $i = () => ue.focus();
  function en(m) {
    Ct[m ? "unshift" : "push"](() => {
      ue = m, t(17, ue);
    });
  }
  function tn() {
    O = this.value, t(1, O), t(13, Oe), t(28, a);
  }
  const nn = () => t(13, Oe = !0), rn = () => t(13, Oe = !1), on = () => vt(), sn = () => {
    t(1, O = ""), ue.focus();
  }, ln = () => t(0, A = !A), un = () => t(18, ae = void 0), an = (m) => t(15, F = m), cn = (m) => wt(m), fn = () => {
    ie || t(15, F = -1);
  }, dn = () => {
  };
  return n.$$set = (m) => {
    "class" in m && t(2, s = m.class), "apiKey" in m && t(26, c = m.apiKey), "bbox" in m && t(27, u = m.bbox), "clearButtonTitle" in m && t(3, d = m.clearButtonTitle), "clearOnBlur" in m && t(28, a = m.clearOnBlur), "collapsed" in m && t(4, f = m.collapsed), "country" in m && t(29, h = m.country), "debounceSearch" in m && t(30, g = m.debounceSearch), "enableReverse" in m && t(5, y = m.enableReverse), "errorMessage" in m && t(6, v = m.errorMessage), "filter" in m && t(31, p = m.filter), "flyTo" in m && t(32, E = m.flyTo), "fuzzyMatch" in m && t(33, _ = m.fuzzyMatch), "language" in m && t(34, x = m.language), "limit" in m && t(35, C = m.limit), "mapController" in m && t(36, S = m.mapController), "minLength" in m && t(37, L = m.minLength), "noResultsMessage" in m && t(7, w = m.noResultsMessage), "placeholder" in m && t(8, k = m.placeholder), "proximity" in m && t(38, I = m.proximity), "reverseActive" in m && t(0, A = m.reverseActive), "reverseButtonTitle" in m && t(9, D = m.reverseButtonTitle), "searchValue" in m && t(1, O = m.searchValue), "showFullGeometry" in m && t(39, M = m.showFullGeometry), "showPlaceType" in m && t(10, U = m.showPlaceType), "showResultsWhileTyping" in m && t(40, $ = m.showResultsWhileTyping), "selectFirst" in m && t(11, ie = m.selectFirst), "flyToSelected" in m && t(41, dt = m.flyToSelected), "markerOnSelected" in m && t(42, Ye = m.markerOnSelected), "types" in m && t(43, Me = m.types), "excludeTypes" in m && t(44, Xe = m.excludeTypes), "zoom" in m && t(45, Ie = m.zoom), "maxZoom" in m && t(46, Ke = m.maxZoom), "apiUrl" in m && t(47, ht = m.apiUrl), "fetchParameters" in m && t(48, mt = m.fetchParameters), "iconsBaseUrl" in m && t(12, Gt = m.iconsBaseUrl), "adjustUrlQuery" in m && t(49, gt = m.adjustUrlQuery), "$$scope" in m && t(59, o = m.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*enableReverse*/
    32 && t(0, A = y === "always"), n.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, $e = Oe), a && !Oe && t(1, O = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | n.$$.dirty[1] & /*minLength*/
    64 && O.length < L && (t(56, N = void 0), t(14, T = void 0), t(18, ae = void 0), t(55, Z = T)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    33554688 && M && N && !N.address && N.geometry.type === "Point" && N.place_type[0] !== "reverse" && bt(N.id, { byId: !0 }).catch((m) => t(18, ae = m)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (S && N && N.id !== yt && E && (!N.bbox || N.bbox[0] === N.bbox[2] && N.bbox[1] === N.bbox[3] ? S.flyTo(N.center, Ue(N)) : S.fitBounds(ut(N.bbox), 50, Ue(N)), t(14, T = void 0), t(55, Z = void 0), t(15, F = -1)), t(57, yt = N == null ? void 0 : N.id)), n.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && ie && T != null && T.length && t(15, F = 0), n.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (ie || t(15, F = -1)), n.$$.dirty[0] & /*listFeatures*/
    16384 | n.$$.dirty[1] & /*markedFeatures*/
    16777216 && Z !== T && t(55, Z = void 0), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | n.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && S && S.setEventHandler((m) => {
      switch (m.type) {
        case "mapClick":
          A && Ki(m.coordinates);
          break;
        case "markerClick":
          {
            const G = T == null ? void 0 : T.find((V) => V.id === m.id);
            G && wt(G);
          }
          break;
        case "markerMouseEnter":
          Z && t(15, F = $e ? (T == null ? void 0 : T.findIndex((G) => G.id === m.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          Z && t(15, F = -1);
          break;
      }
    }), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, i = T == null ? void 0 : T[F]), n.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && S && i && E && dt && S.flyTo(i.center, Ue(i)), n.$$.dirty[1] & /*markerOnSelected, mapController*/
    2080 && (Ye || S == null || S.setMarkers(void 0, void 0)), n.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    150997024 && S && Ye && !Z && (S.setMarkers(i ? [i] : void 0, void 0), S.setSelectedMarker(i ? 0 : -1)), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    50331680 && S && S.setMarkers(Z, N), n.$$.dirty[0] & /*selectedItemIndex*/
    32768 | n.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && Z && S && S.setSelectedMarker(F), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    32 && S) {
      const m = pt(O);
      S.setReverseMarker(m ? [m.decimalLongitude, m.decimalLatitude] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    134217728 && pe("select", i), n.$$.dirty[1] & /*picked*/
    33554432 && pe("pick", N), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && pe("optionsVisibilityChange", $e && !!T), n.$$.dirty[0] & /*listFeatures*/
    16384 && pe("featuresListed", T), n.$$.dirty[1] & /*markedFeatures*/
    16777216 && pe("featuresMarked", Z), n.$$.dirty[0] & /*reverseActive*/
    1 && pe("reverseToggle", A), n.$$.dirty[0] & /*searchValue*/
    2 && pe("queryChange", O), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    32 && S && S.indicateReverse(A);
  }, [
    A,
    O,
    s,
    d,
    f,
    y,
    v,
    w,
    k,
    D,
    U,
    ie,
    Gt,
    Oe,
    T,
    F,
    $e,
    ue,
    ae,
    ke,
    Yi,
    jt,
    Ji,
    vt,
    wt,
    l,
    c,
    u,
    a,
    h,
    g,
    p,
    E,
    _,
    x,
    C,
    S,
    L,
    I,
    M,
    $,
    dt,
    Ye,
    Me,
    Xe,
    Ie,
    Ke,
    ht,
    mt,
    gt,
    Zi,
    Qi,
    zt,
    Vi,
    Hi,
    Z,
    N,
    yt,
    i,
    o,
    r,
    $i,
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
    dn
  ];
}
let Cr = class extends Re {
  constructor(e) {
    super(), Te(
      this,
      e,
      kr,
      Mr,
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
        showFullGeometry: 39,
        showPlaceType: 10,
        showResultsWhileTyping: 40,
        selectFirst: 11,
        flyToSelected: 41,
        markerOnSelected: 42,
        types: 43,
        excludeTypes: 44,
        zoom: 45,
        maxZoom: 46,
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
function at(n, e, t = {}) {
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
  return at({
    type: "Polygon",
    coordinates: n
  }, e, t);
}
function Tt(n, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = n, t;
}
function Gi(n, e, t = {}) {
  return at({
    type: "MultiPolygon",
    coordinates: n
  }, e, t);
}
function zi(n, e, t) {
  if (n !== null)
    for (var i, r, o, l, s, c, u, d = 0, a = 0, f, h = n.type, g = h === "FeatureCollection", y = h === "Feature", v = g ? n.features.length : 1, p = 0; p < v; p++) {
      u = g ? n.features[p].geometry : y ? n.geometry : n, f = u ? u.type === "GeometryCollection" : !1, s = f ? u.geometries.length : 1;
      for (var E = 0; E < s; E++) {
        var _ = 0, x = 0;
        if (l = f ? u.geometries[E] : u, l !== null) {
          c = l.coordinates;
          var C = l.type;
          switch (d = 0, C) {
            case null:
              break;
            case "Point":
              if (e(
                c,
                a,
                p,
                _,
                x
              ) === !1)
                return !1;
              a++, _++;
              break;
            case "LineString":
            case "MultiPoint":
              for (i = 0; i < c.length; i++) {
                if (e(
                  c[i],
                  a,
                  p,
                  _,
                  x
                ) === !1)
                  return !1;
                a++, C === "MultiPoint" && _++;
              }
              C === "LineString" && _++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (i = 0; i < c.length; i++) {
                for (r = 0; r < c[i].length - d; r++) {
                  if (e(
                    c[i][r],
                    a,
                    p,
                    _,
                    x
                  ) === !1)
                    return !1;
                  a++;
                }
                C === "MultiLineString" && _++, C === "Polygon" && x++;
              }
              C === "Polygon" && _++;
              break;
            case "MultiPolygon":
              for (i = 0; i < c.length; i++) {
                for (x = 0, r = 0; r < c[i].length; r++) {
                  for (o = 0; o < c[i][r].length - d; o++) {
                    if (e(
                      c[i][r][o],
                      a,
                      p,
                      _,
                      x
                    ) === !1)
                      return !1;
                    a++;
                  }
                  x++;
                }
                _++;
              }
              break;
            case "GeometryCollection":
              for (i = 0; i < l.geometries.length; i++)
                if (zi(l.geometries[i], e) === !1)
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
  var t, i, r, o, l, s, c, u, d, a, f = 0, h = n.type === "FeatureCollection", g = n.type === "Feature", y = h ? n.features.length : 1;
  for (t = 0; t < y; t++) {
    for (s = h ? n.features[t].geometry : g ? n.geometry : n, u = h ? n.features[t].properties : g ? n.properties : {}, d = h ? n.features[t].bbox : g ? n.bbox : void 0, a = h ? n.features[t].id : g ? n.id : void 0, c = s ? s.type === "GeometryCollection" : !1, l = c ? s.geometries.length : 1, r = 0; r < l; r++) {
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
function Nr(n, e) {
  Dt(n, function(t, i, r, o, l) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          at(t, r, { bbox: o, id: l }),
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
      if (e(at(a, r), i, u) === !1)
        return !1;
    }
  });
}
function Pr(n, e = {}) {
  if (n.bbox != null && e.recompute !== !0)
    return n.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return zi(n, (i) => {
    t[0] > i[0] && (t[0] = i[0]), t[1] > i[1] && (t[1] = i[1]), t[2] < i[0] && (t[2] = i[0]), t[3] < i[1] && (t[3] = i[1]);
  }), t;
}
var bi = Pr;
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
function Rr(n, e) {
  return n > e ? 1 : n < e ? -1 : 0;
}
function be(n, e, t) {
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
function Mt(n, e, t, i) {
  var r = new Se(n, e);
  if (t === null)
    return r.left = r.right = null, r;
  t = be(n, t, i);
  var o = i(n, t.key);
  return o < 0 ? (r.left = t.left, r.right = t, t.left = null) : o >= 0 && (r.right = t.right, r.left = t, t.right = null), r;
}
function vi(n, e, t) {
  var i = null, r = null;
  if (e) {
    e = be(n, e, t);
    var o = t(e.key, n);
    o === 0 ? (i = e.left, r = e.right) : o < 0 ? (r = e.right, e.right = null, i = e) : (i = e.left, e.left = null, r = e);
  }
  return { left: i, right: r };
}
function Ir(n, e, t) {
  return e === null ? n : (n === null || (e = be(n.key, e, t), e.left = n), e);
}
function Rt(n, e, t, i, r) {
  if (n) {
    i("" + e + (t ? "└── " : "├── ") + r(n) + `
`);
    var o = e + (t ? "    " : "│   ");
    n.left && Rt(n.left, o, !1, i, r), n.right && Rt(n.right, o, !0, i, r);
  }
}
var Ut = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = Rr), this._root = null, this._size = 0, this._comparator = e;
    }
    return n.prototype.insert = function(e, t) {
      return this._size++, this._root = Mt(e, t, this._root, this._comparator);
    }, n.prototype.add = function(e, t) {
      var i = new Se(e, t);
      this._root === null && (i.left = i.right = null, this._size++, this._root = i);
      var r = this._comparator, o = be(e, this._root, r), l = r(e, o.key);
      return l === 0 ? this._root = o : (l < 0 ? (i.left = o.left, i.right = o, o.left = null) : l > 0 && (i.right = o.right, i.left = o, o.right = null), this._size++, this._root = i), this._root;
    }, n.prototype.remove = function(e) {
      this._root = this._remove(e, this._root, this._comparator);
    }, n.prototype._remove = function(e, t, i) {
      var r;
      if (t === null)
        return null;
      t = be(e, t, i);
      var o = i(e, t.key);
      return o === 0 ? (t.left === null ? r = t.right : (r = be(e, t.left, i), r.right = t.right), this._size--, r) : t;
    }, n.prototype.pop = function() {
      var e = this._root;
      if (e) {
        for (; e.left; )
          e = e.left;
        return this._root = be(e.key, this._root, this._comparator), this._root = this._remove(e.key, this._root, this._comparator), { key: e.key, data: e.data };
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
      return this._root && (this._root = be(e, this._root, this._comparator), this._comparator(e, this._root.key) !== 0) ? null : this._root;
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
      return Wr(this._root);
    }, n.prototype.load = function(e, t, i) {
      t === void 0 && (t = []), i === void 0 && (i = !1);
      var r = e.length, o = this._comparator;
      if (i && Wt(e, t, 0, r - 1, o), this._root === null)
        this._root = It(e, t, 0, r), this._size = r;
      else {
        var l = Ar(this.toList(), Or(e, t), o);
        r = this._size + r, this._root = Ot({ head: l }, 0, r);
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
      return Rt(this._root, "", !0, function(i) {
        return t.push(i);
      }, e), t.join("");
    }, n.prototype.update = function(e, t, i) {
      var r = this._comparator, o = vi(e, this._root, r), l = o.left, s = o.right;
      r(e, t) < 0 ? s = Mt(t, i, s, r) : l = Mt(t, i, l, r), this._root = Ir(l, s, r);
    }, n.prototype.split = function(e) {
      return vi(e, this._root, this._comparator);
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
function It(n, e, t, i) {
  var r = i - t;
  if (r > 0) {
    var o = t + Math.floor(r / 2), l = n[o], s = e[o], c = new Se(l, s);
    return c.left = It(n, e, t, o), c.right = It(n, e, o + 1, i), c;
  }
  return null;
}
function Or(n, e) {
  for (var t = new Se(null, null), i = t, r = 0; r < n.length; r++)
    i = i.next = new Se(n[r], e[r]);
  return i.next = null, t.next;
}
function Wr(n) {
  for (var e = n, t = [], i = !1, r = new Se(null, null), o = r; !i; )
    e ? (t.push(e), e = e.left) : t.length > 0 ? (e = o = o.next = t.pop(), e = e.right) : i = !0;
  return o.next = null, r.next;
}
function Ot(n, e, t) {
  var i = t - e;
  if (i > 0) {
    var r = e + Math.floor(i / 2), o = Ot(n, e, r), l = n.head;
    return l.left = o, n.head = n.head.next, l.right = Ot(n, r + 1, t), l;
  }
  return null;
}
function Ar(n, e, t) {
  for (var i = new Se(null, null), r = i, o = n, l = e; o !== null && l !== null; )
    t(o.key, l.key) < 0 ? (r.next = o, o = o.next) : (r.next = l, l = l.next), r = r.next;
  return o !== null ? r.next = o : l !== null && (r.next = l), i.next;
}
function Wt(n, e, t, i, r) {
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
    Wt(n, e, t, s, r), Wt(n, e, s + 1, i, r);
  }
}
const he = 11102230246251565e-32, Y = 134217729, Fr = (3 + 8 * he) * he;
function kt(n, e, t, i, r) {
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
const Dr = (3 + 16 * he) * he, Ur = (2 + 12 * he) * he, Gr = (9 + 64 * he) * he * he, Fe = He(4), wi = He(8), _i = He(12), Ei = He(16), K = He(4);
function zr(n, e, t, i, r, o, l) {
  let s, c, u, d, a, f, h, g, y, v, p, E, _, x, C, S, L, w;
  const k = n - r, I = t - r, A = e - o, D = i - o;
  x = k * D, f = Y * k, h = f - (f - k), g = k - h, f = Y * D, y = f - (f - D), v = D - y, C = g * v - (x - h * y - g * y - h * v), S = A * I, f = Y * A, h = f - (f - A), g = A - h, f = Y * I, y = f - (f - I), v = I - y, L = g * v - (S - h * y - g * y - h * v), p = C - L, a = C - p, Fe[0] = C - (p + a) + (a - L), E = x + p, a = E - x, _ = x - (E - a) + (p - a), p = _ - S, a = _ - p, Fe[1] = _ - (p + a) + (a - S), w = E + p, a = w - E, Fe[2] = E - (w - a) + (p - a), Fe[3] = w;
  let O = Br(4, Fe), M = Ur * l;
  if (O >= M || -O >= M || (a = n - k, s = n - (k + a) + (a - r), a = t - I, u = t - (I + a) + (a - r), a = e - A, c = e - (A + a) + (a - o), a = i - D, d = i - (D + a) + (a - o), s === 0 && c === 0 && u === 0 && d === 0) || (M = Gr * l + Fr * Math.abs(O), O += k * d + D * s - (A * u + I * c), O >= M || -O >= M)) return O;
  x = s * D, f = Y * s, h = f - (f - s), g = s - h, f = Y * D, y = f - (f - D), v = D - y, C = g * v - (x - h * y - g * y - h * v), S = c * I, f = Y * c, h = f - (f - c), g = c - h, f = Y * I, y = f - (f - I), v = I - y, L = g * v - (S - h * y - g * y - h * v), p = C - L, a = C - p, K[0] = C - (p + a) + (a - L), E = x + p, a = E - x, _ = x - (E - a) + (p - a), p = _ - S, a = _ - p, K[1] = _ - (p + a) + (a - S), w = E + p, a = w - E, K[2] = E - (w - a) + (p - a), K[3] = w;
  const U = kt(4, Fe, 4, K, wi);
  x = k * d, f = Y * k, h = f - (f - k), g = k - h, f = Y * d, y = f - (f - d), v = d - y, C = g * v - (x - h * y - g * y - h * v), S = A * u, f = Y * A, h = f - (f - A), g = A - h, f = Y * u, y = f - (f - u), v = u - y, L = g * v - (S - h * y - g * y - h * v), p = C - L, a = C - p, K[0] = C - (p + a) + (a - L), E = x + p, a = E - x, _ = x - (E - a) + (p - a), p = _ - S, a = _ - p, K[1] = _ - (p + a) + (a - S), w = E + p, a = w - E, K[2] = E - (w - a) + (p - a), K[3] = w;
  const $ = kt(U, wi, 4, K, _i);
  x = s * d, f = Y * s, h = f - (f - s), g = s - h, f = Y * d, y = f - (f - d), v = d - y, C = g * v - (x - h * y - g * y - h * v), S = c * u, f = Y * c, h = f - (f - c), g = c - h, f = Y * u, y = f - (f - u), v = u - y, L = g * v - (S - h * y - g * y - h * v), p = C - L, a = C - p, K[0] = C - (p + a) + (a - L), E = x + p, a = E - x, _ = x - (E - a) + (p - a), p = _ - S, a = _ - p, K[1] = _ - (p + a) + (a - S), w = E + p, a = w - E, K[2] = E - (w - a) + (p - a), K[3] = w;
  const ie = kt($, _i, 4, K, Ei);
  return Ei[ie - 1];
}
function qr(n, e, t, i, r, o) {
  const l = (e - o) * (t - r), s = (n - r) * (i - o), c = l - s, u = Math.abs(l + s);
  return Math.abs(c) >= Dr * u ? c : -zr(n, e, t, i, r, o, u);
}
const qe = (n, e) => n.ll.x <= e.x && e.x <= n.ur.x && n.ll.y <= e.y && e.y <= n.ur.y, At = (n, e) => {
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
const jr = we * we, Li = (n, e) => {
  if (-we < n && n < we && -we < e && e < we)
    return 0;
  const t = n - e;
  return t * t < jr * n * e ? 0 : n < e ? -1 : 1;
};
class Zr {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new Si(), this.yRounder = new Si();
  }
  round(e, t) {
    return {
      x: this.xRounder.round(e),
      y: this.yRounder.round(t)
    };
  }
}
class Si {
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
    if (i !== null && Li(t.key, i.key) === 0)
      return this.tree.remove(e), i.key;
    const r = this.tree.next(t);
    return r !== null && Li(t.key, r.key) === 0 ? (this.tree.remove(e), r.key) : e;
  }
}
const Ve = new Zr(), lt = (n, e) => n.x * e.y - n.y * e.x, qi = (n, e) => n.x * e.x + n.y * e.y, xi = (n, e, t) => {
  const i = qr(n.x, n.y, e.x, e.y, t.x, t.y);
  return i > 0 ? -1 : i < 0 ? 1 : 0;
}, ct = (n) => Math.sqrt(qi(n, n)), Qr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return lt(r, i) / ct(r) / ct(i);
}, Vr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return qi(r, i) / ct(r) / ct(i);
}, Mi = (n, e, t) => e.y === 0 ? null : {
  x: n.x + e.x / e.y * (t - n.y),
  y: t
}, ki = (n, e, t) => e.x === 0 ? null : {
  x: t,
  y: n.y + e.y / e.x * (t - n.x)
}, Hr = (n, e, t, i) => {
  if (e.x === 0) return ki(t, i, n.x);
  if (i.x === 0) return ki(n, e, t.x);
  if (e.y === 0) return Mi(t, i, n.y);
  if (i.y === 0) return Mi(n, e, t.y);
  const r = lt(e, i);
  if (r == 0) return null;
  const o = {
    x: t.x - n.x,
    y: t.y - n.y
  }, l = lt(o, e) / r, s = lt(o, i) / r, c = n.x + s * e.x, u = t.x + l * i.x, d = n.y + s * e.y, a = t.y + l * i.y, f = (c + u) / 2, h = (d + a) / 2;
  return {
    x: f,
    y: h
  };
};
class oe {
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const i = oe.comparePoints(e.point, t.point);
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
        sine: Qr(this.point, e.point, o.point),
        cosine: Vr(this.point, e.point, o.point)
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
let Yr = 0;
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
      const a = u - s, f = o - i, h = d - c, g = l - r;
      if (a > f && h < g) return 1;
      if (a < f && h > g) return -1;
    }
    return o > l ? 1 : o < l || u < d ? -1 : u > d ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, i, r) {
    this.id = ++Yr, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = i, this.windings = r;
  }
  static fromRing(e, t, i) {
    let r, o, l;
    const s = oe.comparePoints(e, t);
    if (s < 0)
      r = e, o = t, l = 1;
    else if (s > 0)
      r = t, o = e, l = -1;
    else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
    const c = new oe(r, !0), u = new oe(o, !1);
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
    const t = this.bbox(), i = e.bbox(), r = At(t, i);
    if (r === null) return null;
    const o = this.leftSE.point, l = this.rightSE.point, s = e.leftSE.point, c = e.rightSE.point, u = qe(t, s) && this.comparePoint(s) === 0, d = qe(i, o) && e.comparePoint(o) === 0, a = qe(t, c) && this.comparePoint(c) === 0, f = qe(i, l) && e.comparePoint(l) === 0;
    if (d && u)
      return f && !a ? l : !f && a ? c : null;
    if (d)
      return a && o.x === c.x && o.y === c.y ? null : o;
    if (u)
      return f && l.x === s.x && l.y === s.y ? null : s;
    if (f && a) return null;
    if (f) return l;
    if (a) return c;
    const h = Hr(o, this.vector(), s, e.vector());
    return h === null || !qe(r, h) ? null : Ve.round(h.x, h.y);
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
    const t = [], i = e.events !== void 0, r = new oe(e, !0), o = new oe(e, !1), l = this.rightSE;
    this.replaceRightSE(o), t.push(o), t.push(r);
    const s = new _e(r, l, this.rings.slice(), this.windings.slice());
    return oe.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(), oe.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (r.checkForConsuming(), o.checkForConsuming()), t;
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
    switch (le.type) {
      case "union": {
        const i = e.length === 0, r = t.length === 0;
        this._isInResult = i !== r;
        break;
      }
      case "intersection": {
        let i, r;
        e.length < t.length ? (i = e.length, r = t.length) : (i = t.length, r = e.length), this._isInResult = r === le.numMultiPolys && i < r;
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
        throw new Error(`Unrecognized operation type found ${le.type}`);
    }
    return this._isInResult;
  }
}
class Ci {
  constructor(e, t, i) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = t, this.isExterior = i, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const r = Ve.round(e[0][0], e[0][1]);
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
      let c = Ve.round(e[l][0], e[l][1]);
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
class Xr {
  constructor(e, t) {
    if (!Array.isArray(e))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Ci(e[0], this, !0), this.bbox = {
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
      const o = new Ci(e[i], this, !1);
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
class Ni {
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
      const o = new Xr(e[i], this);
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
class ft {
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
            const y = u[0].point, v = u[u.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${y.x}, ${y.y}]. Last matching segment found ends at [${v.x}, ${v.y}].`);
          }
          if (f.length === 1) {
            c = f[0].otherSE;
            break;
          }
          let h = null;
          for (let y = 0, v = a.length; y < v; y++)
            if (a[y].point === s.point) {
              h = y;
              break;
            }
          if (h !== null) {
            const y = a.splice(h)[0], v = u.splice(y.index);
            v.unshift(v[0].otherSE), t.push(new ft(v.reverse()));
            continue;
          }
          a.push({
            index: u.length,
            point: s.point
          });
          const g = s.getLeftmostComparator(l);
          c = f.sort(g)[0].otherSE;
          break;
        }
      t.push(new ft(u));
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
      xi(a, e, f) !== 0 && (t.push(a), e = a);
    }
    if (t.length === 1) return null;
    const i = t[0], r = t[1];
    xi(i, e, r) === 0 && t.shift(), t.push(t[0]);
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
      oe.compare(e, l) > 0 && (e = l);
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
class Pi {
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
class Kr {
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
        if (o.isExteriorRing()) t.push(new Pi(o));
        else {
          const l = o.enclosingRing();
          l.poly || t.push(new Pi(l)), l.poly.addInterior(o);
        }
    }
    return t;
  }
}
class Jr {
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
          for (let h = 0, g = f.length; h < g; h++)
            i.push(f[h]);
        }
      }
      let d = null;
      if (c) {
        const a = c.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (d = a), !c.isAnEndpoint(a))) {
          const f = this._splitSafely(c, a);
          for (let h = 0, g = f.length; h < g; h++)
            i.push(f[h]);
        }
      }
      if (u !== null || d !== null) {
        let a = null;
        u === null ? a = d : d === null ? a = u : a = oe.comparePoints(u, d) <= 0 ? u : d, this.queue.remove(t.rightSE), i.push(t.rightSE);
        const f = t.split(a);
        for (let h = 0, g = f.length; h < g; h++)
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
const Ti = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, $r = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class eo {
  run(e, t, i) {
    le.type = e, Ve.reset();
    const r = [new Ni(t, !0)];
    for (let a = 0, f = i.length; a < f; a++)
      r.push(new Ni(i[a], !1));
    if (le.numMultiPolys = r.length, le.type === "difference") {
      const a = r[0];
      let f = 1;
      for (; f < r.length; )
        At(r[f].bbox, a.bbox) !== null ? f++ : r.splice(f, 1);
    }
    if (le.type === "intersection")
      for (let a = 0, f = r.length; a < f; a++) {
        const h = r[a];
        for (let g = a + 1, y = r.length; g < y; g++)
          if (At(h.bbox, r[g].bbox) === null) return [];
      }
    const o = new Ut(oe.compare);
    for (let a = 0, f = r.length; a < f; a++) {
      const h = r[a].getSweepEvents();
      for (let g = 0, y = h.length; g < y; g++)
        if (o.insert(h[g]), o.size > Ti)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const l = new Jr(o);
    let s = o.size, c = o.pop();
    for (; c; ) {
      const a = c.key;
      if (o.size === s) {
        const h = a.segment;
        throw new Error(`Unable to pop() ${a.isLeft ? "left" : "right"} SweepEvent [${a.point.x}, ${a.point.y}] from segment #${h.id} [${h.leftSE.point.x}, ${h.leftSE.point.y}] -> [${h.rightSE.point.x}, ${h.rightSE.point.y}] from queue.`);
      }
      if (o.size > Ti)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (l.segments.length > $r)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const f = l.process(a);
      for (let h = 0, g = f.length; h < g; h++) {
        const y = f[h];
        y.consumedBy === void 0 && o.insert(y);
      }
      s = o.size, c = o.pop();
    }
    Ve.reset();
    const u = ft.factory(l.segments);
    return new Kr(u).getGeom();
  }
}
const le = new eo(), to = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("union", n, t);
}, io = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("intersection", n, t);
}, no = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("xor", n, t);
}, ro = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("difference", n, t);
};
var ji = {
  union: to,
  intersection: io,
  xor: no,
  difference: ro
};
function oo(n) {
  const e = [];
  if (Dt(n, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = n.features[0].properties || {}, i = ji.difference(e[0], ...e.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Bt(i[0], t) : Gi(i, t);
}
var so = oo;
function lo(n) {
  if (!n)
    throw new Error("geojson is required");
  var e = [];
  return Nr(n, function(t) {
    e.push(t);
  }), Tt(e);
}
var uo = lo;
function ao(n, e = {}) {
  const t = [];
  if (Dt(n, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const i = ji.union(t[0], ...t.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Bt(i[0], e.properties) : Gi(i, e.properties);
}
var co = ao;
function Ri(n, e) {
  const t = so(
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
  const i = ut(bi(n)), r = (i[2] - i[0]) / 360 / 1e3, o = i[0] < -180, l = i[2] > 180, s = uo(n);
  if (s.features.length > 1 && (o || l))
    for (const c of s.features) {
      const u = ut(bi(c));
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
      s.features.length < 2 ? n : co(s) ?? n,
      t
    ])
  );
}
const Ii = "EPSG:4326";
function fo(n) {
  var o;
  const e = n.getProperties(), { isMask: t } = e, i = (o = n.getGeometry()) == null ? void 0 : o.getType(), r = t ? 0 : i === "LineString" || i === "MultiLineString" ? 3 : 2;
  return new En({
    stroke: t ? void 0 : new $t({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: t ? new Jt({
      color: "#00000020"
    }) : void 0,
    image: new _n({
      src: `/icons/marker_${e.isReverse ? "reverse" : e.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: e.isSelected ? 2 : e.isReverse ? 0 : 1,
    text: e.isSelected && e.tooltip ? new Ln({
      backgroundFill: new Jt({ color: "white" }),
      text: e.tooltip,
      offsetY: -40,
      backgroundStroke: new $t({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function ho(n, e = {}, t = {}, i = fo) {
  let r = -1, o, l, s, c = !1;
  const u = new pn({
    updateWhileAnimating: !0
  });
  n.addLayer(u);
  const d = new wn({});
  u.setSource(d), u.setStyle(i), n.on("click", (g) => {
    n.forEachFeatureAtPixel(g.pixel, (y) => {
      const v = y.getId();
      if (v)
        return g.stopPropagation(), l == null || l({ type: "markerClick", id: v }), y;
    });
  }), n.on("pointermove", (g) => {
    const y = n.forEachFeatureAtPixel(g.pixel, (v) => v.getId());
    o !== y && (o && (l == null || l({
      type: "markerMouseLeave",
      id: o
    })), y && (l == null || l({
      type: "markerMouseEnter",
      id: y
    })), n.getTargetElement().style.cursor = y ? "pointer" : c ? "crosshair" : "", o = y);
  });
  function a() {
    return vn() ?? n.getView().getProjection();
  }
  function f(g) {
    return g.transform(Ii, a());
  }
  const h = (g) => {
    l == null || l({
      type: "mapClick",
      coordinates: Kt(g.coordinate, a())
    });
  };
  return {
    setEventHandler(g) {
      g ? (l = g, n.on("click", h)) : (l = void 0, n.un("click", h));
    },
    flyTo(g, y) {
      n.getView().animate({
        center: it(g, a()),
        ...y ? { zoom: y } : {},
        duration: 2e3,
        ...e
      });
    },
    fitBounds(g, y, v) {
      n.getView().fit(bn(g, Ii, a()), {
        padding: [y, y, y, y],
        ...v ? { maxZoom: v } : {},
        duration: 2e3,
        ...t
      });
    },
    indicateReverse(g) {
      c = g, n.getTargetElement().style.cursor = g ? "crosshair" : "";
    },
    setReverseMarker(g) {
      s ? g ? s.getGeometry().setCoordinates(
        it(g, a())
      ) : (d.removeFeature(s), s.dispose(), s = void 0) : g && (s = new fe(
        new St(it(g, a()))
      ), s.setProperties({ isReverse: !0 }), d.addFeature(s));
    },
    setMarkers(g, y) {
      function v(p) {
        var E;
        if (p)
          for (const _ of p.features) {
            const x = _.geometry.type === "Polygon" ? new Vt(_.geometry.coordinates) : _.geometry.type === "MultiPolygon" ? new Ht(_.geometry.coordinates) : null;
            x && d.addFeature(
              new fe({
                isMask: !!((E = _.properties) != null && E.isMask),
                geometry: f(x)
              })
            );
          }
      }
      if (d.clear(), s && d.addFeature(s), y) {
        let p = !1;
        if (y.geometry.type === "GeometryCollection") {
          const E = y.geometry.geometries.map(
            (_) => _.type === "Polygon" ? new Vt(_.coordinates) : _.type === "MultiPolygon" ? new Ht(_.coordinates) : null
          ).filter((_) => !!_);
          if (E.length > 0)
            d.addFeature(
              new fe(f(new yn(E)))
            ), p = !0;
          else
            for (const _ of y.geometry.geometries)
              _.type === "LineString" ? (d.addFeature(
                new fe(
                  f(new Yt(_.coordinates))
                )
              ), p = !0) : _.type === "MultiLineString" && d.addFeature(
                new fe(
                  f(new Xt(_.coordinates))
                )
              ), p = !0;
        }
        if (!p) {
          if (y.geometry.type === "Polygon")
            Ri(y, v);
          else if (y.geometry.type === "MultiPolygon")
            Ri(y, v);
          else if (y.geometry.type === "LineString") {
            d.addFeature(
              new fe(
                f(new Yt(y.geometry.coordinates))
              )
            );
            return;
          } else if (y.geometry.type === "MultiLineString") {
            d.addFeature(
              new fe(
                f(new Xt(y.geometry.coordinates))
              )
            );
            return;
          }
        }
        d.addFeature(new fe(f(new St(y.center))));
      }
      for (const p of g ?? []) {
        if (p === y)
          continue;
        const E = new fe(
          new St(it(p.center, a()))
        );
        E.setId(p.id), E.setProperties({
          fuzzy: !!p.matching_text,
          tooltip: p.place_type[0] === "reverse" ? p.place_name : p.place_name.replace(/,.*/, "")
        }), d.addFeature(E);
      }
    },
    setSelectedMarker(g) {
      var p, E, _;
      const y = d.getFeatures(), v = (p = y[0]) != null && p.getProperties().isReverse ? 1 : 0;
      r > -1 && ((E = y[r + v]) == null || E.setProperties({
        isSelected: !1
      })), g > -1 && ((_ = y[g + v]) == null || _.setProperties({
        isSelected: !0
      })), r = g;
    },
    getCenterAndZoom() {
      const g = n.getView(), y = g.getCenter(), v = g.getZoom();
      if (!(!y || v === void 0))
        return [v, ...Kt(y, a())];
    }
  };
}
var re, Ne;
class Ao extends gn {
  constructor(t) {
    const i = document.createElement("div");
    i.className = "ol-search";
    super({
      element: i,
      target: t.target
    });
    Lt(this, re);
    Lt(this, Ne);
    const { flyTo: r, fullGeometryStyle: o, ...l } = t;
    tt(this, re, new Cr({
      target: i,
      props: {
        flyTo: r === void 0 ? !0 : !!r,
        ...l
      }
    }));
    for (const s of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      se(this, re).$on(s, (c) => {
        switch (s) {
          case "select":
            this.dispatchEvent(
              new mo(c.detail)
            );
            break;
          case "featuresListed":
            this.dispatchEvent(
              new go(c.detail)
            );
            break;
          case "featuresMarked":
            this.dispatchEvent(
              new yo(c.detail)
            );
            break;
          case "optionsVisibilityChange":
            this.dispatchEvent(
              new po(c.detail)
            );
            break;
          case "pick":
            this.dispatchEvent(
              new bo(c.detail)
            );
            break;
          case "queryChange":
            this.dispatchEvent(new vo(c.detail));
            break;
          case "response":
            this.dispatchEvent(
              new wo(
                c.detail.url,
                c.detail.featureCollection
              )
            );
            break;
          case "reverseToggle":
            this.dispatchEvent(new _o(c.detail));
            break;
        }
      });
    tt(this, Ne, t);
  }
  setMap(t) {
    var i;
    if (super.setMap(t), t) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: r,
        fullGeometryStyle: o
      } = se(this, Ne), l = ho(
        t,
        typeof r == "boolean" ? void 0 : r,
        typeof r == "boolean" ? void 0 : r,
        // marker,
        // showResultMarkers,
        o
      );
      (i = se(this, re)) == null || i.$set({ mapController: l });
    }
  }
  setOptions(t) {
    var l;
    tt(this, Ne, t);
    const { flyTo: i, fullGeometryStyle: r, ...o } = se(this, Ne);
    (l = se(this, re)) == null || l.$set({
      ...o,
      flyTo: i === void 0 ? !0 : !!i
    });
  }
  setQuery(t, i = !0) {
    var r;
    (r = se(this, re)) == null || r.setQuery(t, i);
  }
  clearMap() {
    var t;
    (t = se(this, re)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = se(this, re)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = se(this, re)) == null || t.focus();
  }
  blur() {
    var t;
    (t = se(this, re)) == null || t.blur();
  }
  // onRemove() {
  //   this.#gc?.$destroy();
  // }
}
re = new WeakMap(), Ne = new WeakMap();
class mo extends xe {
  constructor(t) {
    super("select");
    ne(this, "feature");
    this.feature = t;
  }
}
class go extends xe {
  constructor(t) {
    super("featuresListed");
    ne(this, "features");
    this.features = t;
  }
}
class yo extends xe {
  constructor(t) {
    super("featuresMarked");
    ne(this, "features");
    this.features = t;
  }
}
class po extends xe {
  constructor(t) {
    super("optionsVisibilityChange");
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
class vo extends xe {
  constructor(t) {
    super("queryChange");
    ne(this, "query");
    this.query = t;
  }
}
class wo extends xe {
  constructor(t, i) {
    super("response");
    ne(this, "url");
    ne(this, "featureCollection");
    this.url = t, this.featureCollection = i;
  }
}
class _o extends xe {
  constructor(t) {
    super("reverseToggle");
    ne(this, "reverse");
    this.reverse = t;
  }
}
export {
  go as FeaturesListedEvent,
  yo as FeaturesMarkedEvent,
  Ao as GeocodingControl,
  po as OptionsVisibilityChangeEvent,
  bo as PickEvent,
  vo as QueryChangeEvent,
  wo as ResponseEvent,
  _o as ReverseToggleEvent,
  mo as SelectEvent,
  ho as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
