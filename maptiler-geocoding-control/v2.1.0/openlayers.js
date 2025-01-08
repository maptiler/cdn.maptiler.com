var Un = Object.defineProperty;
var wi = (i) => {
  throw TypeError(i);
};
var qn = (i, e, t) => e in i ? Un(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var R = (i, e, t) => qn(i, typeof e != "symbol" ? e + "" : e, t), Ei = (i, e, t) => e.has(i) || wi("Cannot " + t);
var ue = (i, e, t) => (Ei(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Qt = (i, e, t) => e.has(i) ? wi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Xt = (i, e, t, n) => (Ei(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import { Control as jn } from "ol/control";
import Ye from "ol/events/Event";
import { Feature as Ge } from "ol";
import { Point as Jt, Polygon as Li, MultiPolygon as Si, GeometryCollection as Vn, LineString as _i, MultiLineString as xi } from "ol/geom";
import Hn from "ol/layer/Vector";
import { fromLonLat as Tt, transformExtent as Zn, toLonLat as Ti, getUserProjection as Kn } from "ol/proj";
import Yn from "ol/source/Vector";
import Mi from "ol/style/Fill";
import Qn from "ol/style/Icon";
import Ni from "ol/style/Stroke";
import Xn from "ol/style/Style";
import Jn from "ol/style/Text";
function ne() {
}
function $n(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function rn(i) {
  return i();
}
function Ci() {
  return /* @__PURE__ */ Object.create(null);
}
function qe(i) {
  i.forEach(rn);
}
function sn(i) {
  return typeof i == "function";
}
function it(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Mt;
function pe(i, e) {
  return i === e ? !0 : (Mt || (Mt = document.createElement("a")), Mt.href = e, i === Mt.href);
}
function er(i) {
  return Object.keys(i).length === 0;
}
function tr(i, e, t, n) {
  if (i) {
    const r = on(i, e, t, n);
    return i[0](r);
  }
}
function on(i, e, t, n) {
  return i[1] && n ? $n(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function ir(i, e, t, n) {
  return i[2], e.dirty;
}
function nr(i, e, t, n, r, u) {
  if (r) {
    const a = on(e, t, n, u);
    i.p(a, r);
  }
}
function rr(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function It(i) {
  return i ?? "";
}
function V(i, e) {
  i.appendChild(e);
}
function re(i, e, t) {
  i.insertBefore(e, t || null);
}
function ee(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function X(i) {
  return document.createElement(i);
}
function We(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Ze(i) {
  return document.createTextNode(i);
}
function Le() {
  return Ze(" ");
}
function sr() {
  return Ze("");
}
function he(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function or(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function x(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function lr(i) {
  return Array.from(i.childNodes);
}
function Lt(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ki(i, e) {
  i.value = e ?? "";
}
function at(i, e, t) {
  i.classList.toggle(e, !!t);
}
function ur(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let St;
function Et(i) {
  St = i;
}
function ln() {
  if (!St) throw new Error("Function called outside component initialization");
  return St;
}
function ar(i) {
  ln().$$.on_destroy.push(i);
}
function un() {
  const i = ln();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = ur(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((a) => {
        a.call(i, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function fr(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ut = [], ii = [];
let ft = [];
const Oi = [], cr = /* @__PURE__ */ Promise.resolve();
let ni = !1;
function hr() {
  ni || (ni = !0, cr.then(an));
}
function ri(i) {
  ft.push(i);
}
const $t = /* @__PURE__ */ new Set();
let lt = 0;
function an() {
  if (lt !== 0)
    return;
  const i = St;
  do {
    try {
      for (; lt < ut.length; ) {
        const e = ut[lt];
        lt++, Et(e), dr(e.$$);
      }
    } catch (e) {
      throw ut.length = 0, lt = 0, e;
    }
    for (Et(null), ut.length = 0, lt = 0; ii.length; ) ii.pop()();
    for (let e = 0; e < ft.length; e += 1) {
      const t = ft[e];
      $t.has(t) || ($t.add(t), t());
    }
    ft.length = 0;
  } while (ut.length);
  for (; Oi.length; )
    Oi.pop()();
  ni = !1, $t.clear(), Et(i);
}
function dr(i) {
  if (i.fragment !== null) {
    i.update(), qe(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(ri);
  }
}
function gr(i) {
  const e = [], t = [];
  ft.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ft = e;
}
const kt = /* @__PURE__ */ new Set();
let et;
function Ot() {
  et = {
    r: 0,
    c: [],
    p: et
    // parent group
  };
}
function Rt() {
  et.r || qe(et.c), et = et.p;
}
function oe(i, e) {
  i && i.i && (kt.delete(i), i.i(e));
}
function de(i, e, t, n) {
  if (i && i.o) {
    if (kt.has(i)) return;
    kt.add(i), et.c.push(() => {
      kt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Ri(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function mr(i, e) {
  de(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function pr(i, e, t, n, r, u, a, s, g, h, v, S) {
  let M = i.length, k = u.length, N = M;
  const C = {};
  for (; N--; ) C[i[N].key] = N;
  const O = [], I = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), P = [];
  for (N = k; N--; ) {
    const B = S(r, u, N), o = t(B);
    let l = a.get(o);
    l ? P.push(() => l.p(B, e)) : (l = h(o, B), l.c()), I.set(o, O[N] = l), o in C && _.set(o, Math.abs(N - C[o]));
  }
  const W = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set();
  function D(B) {
    oe(B, 1), B.m(s, v), a.set(B.key, B), v = B.first, k--;
  }
  for (; M && k; ) {
    const B = O[k - 1], o = i[M - 1], l = B.key, f = o.key;
    B === o ? (v = B.first, M--, k--) : I.has(f) ? !a.has(l) || W.has(l) ? D(B) : Z.has(f) ? M-- : _.get(l) > _.get(f) ? (Z.add(l), D(B)) : (W.add(f), M--) : (g(o, a), M--);
  }
  for (; M--; ) {
    const B = i[M];
    I.has(B.key) || g(B, a);
  }
  for (; k; ) D(O[k - 1]);
  return qe(P), O;
}
function Ke(i) {
  i && i.c();
}
function De(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), ri(() => {
    const u = i.$$.on_mount.map(rn).filter(sn);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : qe(u), i.$$.on_mount = [];
  }), r.forEach(ri);
}
function Fe(i, e) {
  const t = i.$$;
  t.fragment !== null && (gr(t.after_update), qe(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function yr(i, e) {
  i.$$.dirty[0] === -1 && (ut.push(i), hr(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function nt(i, e, t, n, r, u, a = null, s = [-1]) {
  const g = St;
  Et(i);
  const h = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: ne,
    not_equal: r,
    bound: Ci(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: Ci(),
    dirty: s,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  a && a(h.root);
  let v = !1;
  if (h.ctx = t ? t(i, e.props || {}, (S, M, ...k) => {
    const N = k.length ? k[0] : M;
    return h.ctx && r(h.ctx[S], h.ctx[S] = N) && (!h.skip_bound && h.bound[S] && h.bound[S](N), v && yr(i, S)), M;
  }) : [], h.update(), v = !0, qe(h.before_update), h.fragment = n ? n(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const S = lr(e.target);
      h.fragment && h.fragment.l(S), S.forEach(ee);
    } else
      h.fragment && h.fragment.c();
    e.intro && oe(i.$$.fragment), De(i, e.target, e.anchor), an();
  }
  Et(g);
}
class rt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    R(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    R(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Fe(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!sn(t))
      return ne;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !er(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const br = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(br);
function vr(i) {
  let e, t;
  return {
    c() {
      e = We("svg"), t = We("path"), x(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), x(e, "viewBox", "0 0 14 14"), x(e, "width", "13"), x(e, "height", "13"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      re(n, e, r), V(e, t);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && ee(e);
    }
  };
}
class fn extends rt {
  constructor(e) {
    super(), nt(this, e, null, vr, it, {});
  }
}
function wr(i) {
  let e, t;
  return {
    c() {
      e = We("svg"), t = We("path"), x(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), x(e, "viewBox", "0 0 30 30"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      re(n, e, r), V(e, t);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && ee(e);
    }
  };
}
class cn extends rt {
  constructor(e) {
    super(), nt(this, e, null, wr, it, {});
  }
}
function Er(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function Lr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function Sr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function _r(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function xr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function Tr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function Mr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function Nr(i) {
  let e, t, n, r;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*imageUrl*/
      i[5]) || x(e, "src", t), x(
        e,
        "alt",
        /*category*/
        i[4]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(u, a) {
      re(u, e, a), n || (r = he(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !pe(e.src, t = /*imageUrl*/
      u[5]) && x(e, "src", t), a & /*category*/
      16 && x(
        e,
        "alt",
        /*category*/
        u[4]
      ), a & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && ee(e), n = !1, r();
    }
  };
}
function Pi(i) {
  let e, t;
  return {
    c() {
      e = X("span"), t = Ze(
        /*placeType*/
        i[6]
      ), x(e, "class", "secondary svelte-z7p9pp");
    },
    m(n, r) {
      re(n, e, r), V(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && Lt(
        t,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function Cr(i) {
  let e, t, n, r, u, a, s, g, h, v = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), S, M, k = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] !== "never" && !/*feature*/
    i[0].address && !/*feature*/
    i[0].id.startsWith("road.") && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[8]
  ), N, C, O = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), I, _, P, W, Z, D;
  function B(m, c) {
    return c & /*feature*/
    1 && (t = null), c & /*feature*/
    1 && (n = null), c & /*feature*/
    1 && (r = null), c & /*feature*/
    1 && (u = null), /*imageUrl*/
    m[5] ? Nr : (
      /*feature*/
      m[0].address ? Mr : (t == null && (t = !!/*feature*/
      m[0].id.startsWith("road.")), t ? Tr : (n == null && (n = !!/*feature*/
      m[0].id.startsWith("address.")), n ? xr : (r == null && (r = !!/*feature*/
      m[0].id.startsWith("postal_code.")), r ? _r : (u == null && (u = !!/*feature*/
      m[0].id.startsWith("poi.")), u ? Sr : (
        /*isReverse*/
        m[8] ? Lr : Er
      )))))
    );
  }
  let o = B(i, -1), l = o(i), f = k && Pi(i);
  return {
    c() {
      e = X("li"), l.c(), a = Le(), s = X("span"), g = X("span"), h = X("span"), S = Ze(v), M = Le(), f && f.c(), N = Le(), C = X("span"), I = Ze(O), x(h, "class", "primary svelte-z7p9pp"), x(g, "class", "svelte-z7p9pp"), x(C, "class", "line2 svelte-z7p9pp"), x(s, "class", "texts svelte-z7p9pp"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", _ = /*style*/
      i[1] === "selected"), x(e, "aria-checked", P = /*style*/
      i[1] === "picked"), x(e, "class", W = It(
        /*style*/
        i[1]
      ) + " svelte-z7p9pp");
    },
    m(m, c) {
      re(m, e, c), l.m(e, null), V(e, a), V(e, s), V(s, g), V(g, h), V(h, S), V(g, M), f && f.m(g, null), V(s, N), V(s, C), V(C, I), Z || (D = [
        he(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        he(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        he(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], Z = !0);
    },
    p(m, [c]) {
      o === (o = B(m, c)) && l ? l.p(m, c) : (l.d(1), l = o(m), l && (l.c(), l.m(e, a))), c & /*feature*/
      1 && v !== (v = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Lt(S, v), c & /*showPlaceType, feature, imageUrl*/
      37 && (k = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), k ? f ? f.p(m, c) : (f = Pi(m), f.c(), f.m(g, null)) : f && (f.d(1), f = null), c & /*feature*/
      1 && O !== (O = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Lt(I, O), c & /*style*/
      2 && _ !== (_ = /*style*/
      m[1] === "selected") && x(e, "aria-selected", _), c & /*style*/
      2 && P !== (P = /*style*/
      m[1] === "picked") && x(e, "aria-checked", P), c & /*style*/
      2 && W !== (W = It(
        /*style*/
        m[1]
      ) + " svelte-z7p9pp") && x(e, "class", W);
    },
    i: ne,
    o: ne,
    d(m) {
      m && ee(e), l.d(), f && f.d(), Z = !1, qe(D);
    }
  };
}
function kr(i, e, t) {
  var Z;
  let n, r, { feature: u } = e, { style: a = "default" } = e, { showPlaceType: s } = e, { missingIconsCache: g } = e, { iconsBaseUrl: h } = e;
  const v = un(), S = (Z = u.properties) == null ? void 0 : Z.categories;
  let M, k, N = 0, C = u.place_type[0] === "reverse";
  function O() {
    k && g.add(k), t(11, N++, N);
  }
  function I(D) {
    fr.call(this, i, D);
  }
  const _ = () => O(), P = () => v("select", void 0), W = (D) => {
    document.activeElement !== D.target && v("select", void 0);
  };
  return i.$$set = (D) => {
    "feature" in D && t(0, u = D.feature), "style" in D && t(1, a = D.style), "showPlaceType" in D && t(2, s = D.showPlaceType), "missingIconsCache" in D && t(10, g = D.missingIconsCache), "iconsBaseUrl" in D && t(3, h = D.iconsBaseUrl);
  }, i.$$.update = () => {
    var D, B, o, l;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    7224)
      do
        t(12, n--, n), t(4, M = S == null ? void 0 : S[n]), t(5, k = M ? h + M.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!k || g.has(k)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((B = (D = u.properties) == null ? void 0 : D.categories) == null ? void 0 : B.join(", ")) ?? ((l = (o = u.properties) == null ? void 0 : o.place_type_name) == null ? void 0 : l[0]) ?? u.place_type[0]);
  }, t(12, n = (S == null ? void 0 : S.length) ?? 0), [
    u,
    a,
    s,
    h,
    M,
    k,
    r,
    v,
    C,
    O,
    g,
    N,
    n,
    I,
    _,
    P,
    W
  ];
}
class Or extends rt {
  constructor(e) {
    super(), nt(this, e, kr, Cr, it, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 10,
      iconsBaseUrl: 3
    });
  }
}
function Rr(i) {
  let e;
  return {
    c() {
      e = X("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', x(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      re(t, e, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(t) {
      t && ee(e);
    }
  };
}
class Pr extends rt {
  constructor(e) {
    super(), nt(this, e, null, Rr, it, {});
  }
}
function Ar(i) {
  let e, t;
  return {
    c() {
      e = We("svg"), t = We("path"), x(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), x(e, "viewBox", "0 0 60.006 21.412"), x(e, "width", "14"), x(e, "height", "20"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      re(n, e, r), V(e, t);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && ee(e);
    }
  };
}
class Ir extends rt {
  constructor(e) {
    super(), nt(this, e, null, Ar, it, {});
  }
}
function Br(i) {
  let e, t, n;
  return {
    c() {
      e = We("svg"), t = We("circle"), n = We("path"), x(t, "cx", "4.789"), x(t, "cy", "4.787"), x(t, "r", "3.85"), x(t, "class", "svelte-1aq105l"), x(n, "d", "M12.063 12.063 7.635 7.635"), x(n, "class", "svelte-1aq105l"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "13"), x(e, "height", "13"), x(e, "viewBox", "0 0 13 13"), x(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      re(r, e, u), V(e, t), V(e, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(r) {
      r && ee(e);
    }
  };
}
class Gr extends rt {
  constructor(e) {
    super(), nt(this, e, null, Br, it, {});
  }
}
function zr(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function Bt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let mt;
async function Wr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (mt && r.cachedLocationExpiry && mt.time + r.cachedLocationExpiry > Date.now()) {
          if (!mt.coords)
            break e;
          return mt.coords;
        }
        let u;
        try {
          return u = await new Promise((a, s) => {
            t.signal.addEventListener("abort", () => {
              s(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (g) => {
                a(
                  [g.coords.longitude, g.coords.latitude].map((h) => h.toFixed(6)).join(",")
                );
              },
              (g) => {
                s(g);
              },
              r
            );
          }), u;
        } catch {
        } finally {
          r.cachedLocationExpiry && (mt = {
            time: Date.now(),
            coords: u
          });
        }
        if (t.signal.aborted)
          return;
      }
      if (r.type === "server-geolocation")
        return "ip";
      if (n && r.type === "map-center")
        return n[1].toFixed(6) + "," + n[2].toFixed(6);
    }
}
const Dr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Ai = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Ii = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Bi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Gi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, zi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Fr(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((k) => Number(k.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", s = n > 0 ? "E" : "W";
    let g;
    i == "DD" && (g = `${r}° ${a}, ${u}° ${s}`);
    const h = Math.floor(r), v = Math.floor(u), S = (r - h) * 60, M = (u - v) * 60;
    if (i == "DM") {
      let k = Wi(S, 3).toFixed(3).padStart(6, "0"), N = Wi(M, 3).toFixed(3).padStart(6, "0");
      k.endsWith(".000") && N.endsWith(".000") && (k = k.replace(/\.000$/, ""), N = N.replace(/\.000$/, "")), g = `${h}° ${k}' ${a}, ${v}° ${N}' ${s}`;
    }
    if (i == "DMS") {
      const k = Math.floor(S), N = Math.floor(M);
      let C = ((S - k) * 60).toFixed(1).padStart(4, "0"), O = ((M - N) * 60).toFixed(1).padStart(4, "0");
      const I = k.toString().padStart(2, "0"), _ = N.toString().padStart(2, "0");
      C.endsWith(".0") && O.endsWith(".0") && (C = C.replace(/\.0$/, ""), O = O.replace(/\.0$/, "")), g = `${h}° ${I}' ${C}" ${a}, ${v}° ${_}' ${O}" ${s}`;
    }
    return g;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Wi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function fi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", a = null, s = [], g = !1;
  if (Dr.test(i))
    throw new Error("invalid coordinate value");
  if (Ai.test(i))
    if (s = Ai.exec(i), g = pt(s), g)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), n = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Ii.test(i))
    if (s = Ii.exec(i), g = pt(s), g) {
      if (t = s[2], n = s[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], u = s[5]) : s[4] && (r = s[4], u = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Bi.test(i))
    if (s = Bi.exec(i), g = pt(s), g)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, a = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[9])), s[11] && (n += s[11] / 60), s[13] && (n += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (n = -1 * n), s[1] ? (r = s[1], u = s[8]) : s[7] && (r = s[7], u = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Gi.test(i))
    if (s = Gi.exec(i), g = pt(s), g)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, a = "DM"), s[6] && (t += s[6] / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12] / 60), s[14] && (n += s[14] / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], u = s[9]) : s[8] && (r = s[8], u = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (zi.test(i)) {
    if (s = zi.exec(i), g = pt(s), s.filter((h) => h).length <= 5)
      throw new Error("invalid coordinates format");
    if (g)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, a = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12].replace(",", ".") / 60), s[14] && (n += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], u = s[9]) : s[8] && (r = s[8], u = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (g) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !u || !r && u)
      throw new Error("invalid coordinates value");
    if (r && r == u)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let h = /S|SOUTH/i;
    h.test(r) && t > 0 && (t = -1 * t), h = /W|WEST/i, h.test(u) && n > 0 && (n = -1 * n);
    const v = s[0].trim();
    let S, M;
    const k = /[,/;\u0020]/g, N = v.match(k);
    if (N == null) {
      const I = Math.floor(i.length / 2);
      S = v.substring(0, I).trim(), M = v.substring(I).trim();
    } else {
      let I;
      N.length % 2 == 1 ? I = Math.floor(N.length / 2) : I = N.length / 2 - 1;
      let _ = 0;
      if (I == 0)
        _ = v.indexOf(N[0]), S = v.substring(0, _).trim(), M = v.substring(_ + 1).trim();
      else {
        let P = 0, W = 0;
        for (; P <= I; )
          _ = v.indexOf(N[P], W), W = _ + 1, P++;
        S = v.substring(0, _).trim(), M = v.substring(_ + 1).trim();
      }
    }
    const C = S.split(".");
    if (C.length == 2 && C[1] == 0 && C[1].length != 2)
      throw new Error("invalid coordinates format");
    const O = M.split(".");
    if (O.length == 2 && O[1] == 0 && O[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(S) || /^\d+$/.test(M))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: v,
      verbatimLatitude: S,
      verbatimLongitude: M,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: a,
      closeEnough: Ur,
      toCoordinateFormat: Fr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function pt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const a = e[u], s = e[u + r], g = t.test(a) && t.test(s), h = n.test(a) && n.test(s), v = a == s;
    if (!(a == null && s == null)) {
      if (a == null || s == null)
        return !1;
      if (g || h || v)
        continue;
      return !1;
    }
  }
  return !0;
}
function Di(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Ur(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Di(this.decimalLatitude, Number(e[0])) && Di(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const qr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
fi.to = qr;
const jr = [
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
], Vr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Hr = [
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
], Zr = [
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
function Kr() {
  const i = [];
  return jr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Vr });
  }), [...i, ...Hr, ...Zr];
}
const Yr = Kr();
fi.formats = Yr.map((i) => i.verbatimCoordinates);
const Qr = fi;
function Fi(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Ui(i) {
  let e, t;
  return e = new Pr({}), {
    c() {
      Ke(e.$$.fragment);
    },
    m(n, r) {
      De(e, n, r), t = !0;
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Fe(e, n);
    }
  };
}
function qi(i) {
  let e, t, n, r, u;
  return t = new Ir({}), {
    c() {
      e = X("button"), Ke(t.$$.fragment), x(e, "type", "button"), x(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), x(e, "class", "svelte-bz0zu3"), at(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, s) {
      re(a, e, s), De(t, e, null), n = !0, r || (u = he(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(a, s) {
      (!n || s[0] & /*reverseButtonTitle*/
      1024) && x(
        e,
        "title",
        /*reverseButtonTitle*/
        a[10]
      ), (!n || s[0] & /*reverseActive*/
      1) && at(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      n || (oe(t.$$.fragment, a), n = !0);
    },
    o(a) {
      de(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && ee(e), Fe(t), r = !1, u();
    }
  };
}
function Xr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, a, s = Ri(
    /*listFeatures*/
    i[13]
  );
  const g = (h) => (
    /*feature*/
    h[97].id + /*feature*/
    (h[97].address ? "," + /*feature*/
    h[97].address : "")
  );
  for (let h = 0; h < s.length; h += 1) {
    let v = Fi(i, s, h), S = g(v);
    n.set(S, t[h] = ji(S, v));
  }
  return {
    c() {
      e = X("ul");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(h, v) {
      re(h, e, v);
      for (let S = 0; S < t.length; S += 1)
        t[S] && t[S].m(e, null);
      r = !0, u || (a = [
        he(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        he(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        he(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], u = !0);
    },
    p(h, v) {
      v[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (s = Ri(
        /*listFeatures*/
        h[13]
      ), Ot(), t = pr(t, v, g, 1, h, s, n, e, mr, ji, null, Fi), Rt());
    },
    i(h) {
      if (!r) {
        for (let v = 0; v < s.length; v += 1)
          oe(t[v]);
        r = !0;
      }
    },
    o(h) {
      for (let v = 0; v < t.length; v += 1)
        de(t[v]);
      r = !1;
    },
    d(h) {
      h && ee(e);
      for (let v = 0; v < t.length; v += 1)
        t[v].d();
      u = !1, qe(a);
    }
  };
}
function Jr(i) {
  let e, t, n, r, u, a;
  return t = new cn({}), {
    c() {
      e = X("div"), Ke(t.$$.fragment), n = Le(), r = X("div"), u = Ze(
        /*noResultsMessage*/
        i[8]
      ), x(r, "class", "svelte-bz0zu3"), x(e, "class", "no-results svelte-bz0zu3");
    },
    m(s, g) {
      re(s, e, g), De(t, e, null), V(e, n), V(e, r), V(r, u), a = !0;
    },
    p(s, g) {
      (!a || g[0] & /*noResultsMessage*/
      256) && Lt(
        u,
        /*noResultsMessage*/
        s[8]
      );
    },
    i(s) {
      a || (oe(t.$$.fragment, s), a = !0);
    },
    o(s) {
      de(t.$$.fragment, s), a = !1;
    },
    d(s) {
      s && ee(e), Fe(t);
    }
  };
}
function $r(i) {
  let e = "", t;
  return {
    c() {
      t = Ze(e);
    },
    m(n, r) {
      re(n, t, r);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && ee(t);
    }
  };
}
function es(i) {
  let e, t, n, r, u, a, s, g, h, v, S;
  return t = new cn({}), g = new fn({}), {
    c() {
      e = X("div"), Ke(t.$$.fragment), n = Le(), r = X("div"), u = Ze(
        /*errorMessage*/
        i[7]
      ), a = Le(), s = X("button"), Ke(g.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(s, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(M, k) {
      re(M, e, k), De(t, e, null), V(e, n), V(e, r), V(r, u), V(e, a), V(e, s), De(g, s, null), h = !0, v || (S = he(
        s,
        "click",
        /*click_handler_4*/
        i[80]
      ), v = !0);
    },
    p(M, k) {
      (!h || k[0] & /*errorMessage*/
      128) && Lt(
        u,
        /*errorMessage*/
        M[7]
      );
    },
    i(M) {
      h || (oe(t.$$.fragment, M), oe(g.$$.fragment, M), h = !0);
    },
    o(M) {
      de(t.$$.fragment, M), de(g.$$.fragment, M), h = !1;
    },
    d(M) {
      M && ee(e), Fe(t), Fe(g), v = !1, S();
    }
  };
}
function ji(i, e) {
  var s;
  let t, n, r;
  function u() {
    return (
      /*mouseenter_handler*/
      e[81](
        /*i*/
        e[99]
      )
    );
  }
  function a() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new Or({
    props: {
      feature: (
        /*feature*/
        e[97]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[11]
      ),
      style: (
        /*selectedItemIndex*/
        e[15] === /*i*/
        e[99] ? "selected" : (
          /*picked*/
          ((s = e[14]) == null ? void 0 : s.id) === /*feature*/
          e[97].id ? "picked" : "default"
        )
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        e[21]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        e[12]
      )
    }
  }), n.$on("mouseenter", u), n.$on("select", a), {
    key: i,
    first: null,
    c() {
      t = sr(), Ke(n.$$.fragment), this.first = t;
    },
    m(g, h) {
      re(g, t, h), De(n, g, h), r = !0;
    },
    p(g, h) {
      var S;
      e = g;
      const v = {};
      h[0] & /*listFeatures*/
      8192 && (v.feature = /*feature*/
      e[97]), h[0] & /*showPlaceType*/
      2048 && (v.showPlaceType = /*showPlaceType*/
      e[11]), h[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (v.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((S = e[14]) == null ? void 0 : S.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), h[0] & /*iconsBaseUrl*/
      4096 && (v.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(v);
    },
    i(g) {
      r || (oe(n.$$.fragment, g), r = !0);
    },
    o(g) {
      de(n.$$.fragment, g), r = !1;
    },
    d(g) {
      g && ee(t), Fe(n, g);
    }
  };
}
function ts(i) {
  let e, t, n, r, u, a, s, g, h, v, S, M, k, N, C, O, I, _, P, W, Z, D = !1;
  u = new Gr({}), S = new fn({});
  let B = (
    /*abortController*/
    i[20] && Ui()
  ), o = (
    /*enableReverse*/
    i[6] === "button" && qi(i)
  );
  const l = (
    /*#slots*/
    i[70].default
  ), f = tr(
    l,
    i,
    /*$$scope*/
    i[69],
    null
  ), m = [es, $r, Jr, Xr], c = [];
  function b(p, d) {
    var y, w;
    return (
      /*error*/
      p[19] ? 0 : !/*focusedDelayed*/
      p[16] && !/*keepListOpen*/
      p[4] ? 1 : (
        /*listFeatures*/
        ((y = p[13]) == null ? void 0 : y.length) === 0 ? 2 : (
          /*listFeatures*/
          (w = p[13]) != null && w.length && /*focusedDelayed*/
          (p[16] || /*keepListOpen*/
          p[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(O = b(i)) && (I = c[O] = m[O](i)), {
    c() {
      e = Le(), t = X("form"), n = X("div"), r = X("button"), Ke(u.$$.fragment), a = Le(), s = X("input"), g = Le(), h = X("div"), v = X("button"), Ke(S.$$.fragment), M = Le(), B && B.c(), k = Le(), o && o.c(), N = Le(), f && f.c(), C = Le(), I && I.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
        s,
        "placeholder",
        /*placeholder*/
        i[9]
      ), x(
        s,
        "aria-label",
        /*placeholder*/
        i[9]
      ), x(s, "class", "svelte-bz0zu3"), x(v, "type", "button"), x(
        v,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), x(v, "class", "svelte-bz0zu3"), x(h, "class", "clear-button-container svelte-bz0zu3"), at(
        h,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", _ = It(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), at(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(p, d) {
      re(p, e, d), re(p, t, d), V(t, n), V(n, r), De(u, r, null), V(n, a), V(n, s), i[72](s), ki(
        s,
        /*searchValue*/
        i[1]
      ), V(n, g), V(n, h), V(h, v), De(S, v, null), V(h, M), B && B.m(h, null), V(n, k), o && o.m(n, null), V(n, N), f && f.m(n, null), V(t, C), ~O && c[O].m(t, null), P = !0, W || (Z = [
        he(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        he(
          s,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        he(
          s,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        he(
          s,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        he(
          s,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        he(
          s,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        he(
          s,
          "input",
          /*handleInput*/
          i[24]
        ),
        he(
          s,
          "change",
          /*change_handler*/
          i[77]
        ),
        he(
          v,
          "click",
          /*click_handler_2*/
          i[78]
        ),
        he(t, "submit", or(
          /*handleSubmit*/
          i[22]
        ))
      ], W = !0);
    },
    p(p, d) {
      (!P || d[0] & /*placeholder*/
      512) && x(
        s,
        "placeholder",
        /*placeholder*/
        p[9]
      ), (!P || d[0] & /*placeholder*/
      512) && x(
        s,
        "aria-label",
        /*placeholder*/
        p[9]
      ), d[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      p[1] && ki(
        s,
        /*searchValue*/
        p[1]
      ), (!P || d[0] & /*clearButtonTitle*/
      8) && x(
        v,
        "title",
        /*clearButtonTitle*/
        p[3]
      ), /*abortController*/
      p[20] ? B ? d[0] & /*abortController*/
      1048576 && oe(B, 1) : (B = Ui(), B.c(), oe(B, 1), B.m(h, null)) : B && (Ot(), de(B, 1, 1, () => {
        B = null;
      }), Rt()), (!P || d[0] & /*searchValue*/
      2) && at(
        h,
        "displayable",
        /*searchValue*/
        p[1] !== ""
      ), /*enableReverse*/
      p[6] === "button" ? o ? (o.p(p, d), d[0] & /*enableReverse*/
      64 && oe(o, 1)) : (o = qi(p), o.c(), oe(o, 1), o.m(n, N)) : o && (Ot(), de(o, 1, 1, () => {
        o = null;
      }), Rt()), f && f.p && (!P || d[2] & /*$$scope*/
      128) && nr(
        f,
        l,
        p,
        /*$$scope*/
        p[69],
        P ? ir(
          l,
          /*$$scope*/
          p[69],
          d,
          null
        ) : rr(
          /*$$scope*/
          p[69]
        ),
        null
      );
      let y = O;
      O = b(p), O === y ? ~O && c[O].p(p, d) : (I && (Ot(), de(c[y], 1, 1, () => {
        c[y] = null;
      }), Rt()), ~O ? (I = c[O], I ? I.p(p, d) : (I = c[O] = m[O](p), I.c()), oe(I, 1), I.m(t, null)) : I = null), (!P || d[0] & /*className*/
      4 && _ !== (_ = It(
        /*className*/
        p[2]
      ) + " svelte-bz0zu3")) && x(t, "class", _), (!P || d[0] & /*className, collapsed, searchValue*/
      38) && at(
        t,
        "can-collapse",
        /*collapsed*/
        p[5] && /*searchValue*/
        p[1] === ""
      );
    },
    i(p) {
      P || (oe(D), oe(u.$$.fragment, p), oe(S.$$.fragment, p), oe(B), oe(o), oe(f, p), oe(I), P = !0);
    },
    o(p) {
      de(D), de(u.$$.fragment, p), de(S.$$.fragment, p), de(B), de(o), de(f, p), de(I), P = !1;
    },
    d(p) {
      p && (ee(e), ee(t)), Fe(u), i[72](null), Fe(S), B && B.d(), o && o.d(), f && f.d(p), ~O && c[O].d(), W = !1, qe(Z);
    }
  };
}
function is(i, e, t) {
  let n, r, u, { $$slots: a = {}, $$scope: s } = e;
  const g = {
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
  let { class: h = void 0 } = e, { apiKey: v } = e, { bbox: S = void 0 } = e, { clearButtonTitle: M = "clear" } = e, { clearOnBlur: k = !1 } = e, { clearListOnPick: N = !1 } = e, { keepListOpen: C = !1 } = e, { collapsed: O = !1 } = e, { country: I = void 0 } = e, { debounceSearch: _ = 200 } = e, { enableReverse: P = "never" } = e, { errorMessage: W = "Something went wrong…" } = e, { filter: Z = () => !0 } = e, { flyTo: D = !0 } = e, { fuzzyMatch: B = !0 } = e, { language: o = void 0 } = e, { limit: l = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: m = f } = e, { mapController: c = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: p = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: d = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: w = P === "always" } = e, { reverseButtonTitle: E = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: A = "full-geometry" } = e, { showPlaceType: G = "if-needed" } = e, { showResultsWhileTyping: j = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: $ = !1 } = e, { markerOnSelected: q = !0 } = e, { types: H = void 0 } = e;
  const fe = [];
  let { reverseGeocodingTypes: Ie = fe } = e, { exhaustiveReverseGeocoding: Qe = !1 } = e, { excludeTypes: Xe = !1 } = e;
  const be = void 0;
  let { reverseGeocodingExcludeTypes: Ce = be } = e, { zoom: ge = g } = e, { apiUrl: ce = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: di = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.0/icons/" } = e, { adjustUrlQuery: Ut = () => {
  } } = e, { adjustUrl: qt = () => {
  } } = e;
  function vn(L) {
    Me.focus(L);
  }
  function wn() {
    Me.blur();
  }
  function gi(L, te = !0, se = !1) {
    t(1, T = L), te ? (t(15, Y = -1), pi()) : (yi(void 0, !se, se), setTimeout(() => {
      Me.focus(), Me.select();
    }));
  }
  function En() {
    t(13, U = void 0), t(14, z = void 0), t(15, Y = -1);
  }
  function Ln() {
    t(64, le = []), t(14, z = void 0);
  }
  let U, le, z, mi = "", Me, Y = -1, ke, _t = [], Je, st, ot, jt, Be = !1;
  const Sn = /* @__PURE__ */ new Set(), je = un();
  ar(() => {
    c && (c.setEventHandler(void 0), c.indicateReverse(!1), c.setSelectedMarker(-1), c.setFeatures(void 0, void 0, !1));
  });
  function pi(L) {
    if (t(17, Be = !1), st && (clearTimeout(st), st = void 0), Y > -1 && U)
      t(14, z = U[Y]), t(1, T = z.place_type[0] === "reverse" ? z.place_name : z.place_name.replace(/,.*/, "")), t(19, ke = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (T) {
      const te = L || !Vt(T);
      Ht(T, { exact: !0 }).then(() => {
        t(64, le = U), t(14, z = void 0), te && _n();
      }).catch((se) => t(19, ke = se));
    }
  }
  function Vt(L) {
    try {
      return Qr(L, 6);
    } catch {
      return !1;
    }
  }
  async function Ht(L, { byId: te = !1, exact: se = !1 } = {}) {
    var we, Oe, Ve;
    t(19, ke = void 0), Je == null || Je.abort();
    const ve = new AbortController();
    t(20, Je = ve);
    try {
      const Q = Vt(L), ht = new URL(ce + "/" + encodeURIComponent(Q ? Q.decimalLongitude + "," + Q.decimalLatitude : L) + ".json"), Se = ht.searchParams;
      o !== void 0 && Se.set("language", Array.isArray(o) ? o.join(",") : o ?? "");
      const [Yt] = (c == null ? void 0 : c.getCenterAndZoom()) ?? [];
      let Re = (we = !Q || Ie === fe ? H : Ie) == null ? void 0 : we.map((me) => typeof me == "string" ? me : Yt === void 0 || (me[0] ?? 0) <= Yt && Yt < (me[1] ?? 1 / 0) ? me[2] : void 0).filter((me) => me !== void 0);
      Re && (Re = [...new Set(Re)], Se.set("types", Re.join(",")));
      const vi = !Q || Ce === be ? Xe : Ce;
      if (vi && Se.set("excludeTypes", String(vi)), S && Se.set("bbox", S.map((me) => me.toFixed(6)).join(",")), I && Se.set("country", Array.isArray(I) ? I.join(",") : I), !te && !Q) {
        const me = await Wr(c, y, ve);
        me && Se.set("proximity", me), (se || !j) && Se.set("autocomplete", "false"), Se.set("fuzzyMatch", String(B));
      }
      const dt = m === f ? l : m;
      dt !== void 0 && dt > 1 && (Re == null ? void 0 : Re.length) !== 1 && console.warn("For reverse geocoding when `limit` > 1 then `types` must contain single value."), Q ? (dt === 1 || dt !== void 0 && (Qe || (Re == null ? void 0 : Re.length) === 1)) && Se.set("limit", String(dt)) : l !== void 0 && Se.set("limit", String(l)), Se.set("key", v), Ut(Se), qt(ht);
      const Fn = ht.searchParams.get("types") === "" && ht.searchParams.get("excludeTypes") !== "true", xt = ht.toString();
      if (xt === mi) {
        te ? (N && t(13, U = void 0), t(14, z = _t[0])) : (t(13, U = _t), ((Oe = U[Y]) == null ? void 0 : Oe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      mi = xt;
      let gt;
      if (Fn)
        gt = { type: "FeatureCollection", features: [] };
      else {
        const me = await fetch(xt, { signal: ve.signal, ...J });
        if (!me.ok)
          throw new Error(await me.text());
        gt = await me.json();
      }
      je("response", { url: xt, featureCollection: gt }), te ? (N && t(13, U = void 0), t(14, z = gt.features[0]), _t = [z]) : (t(13, U = gt.features.filter(Z)), Q && U.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + Q.decimalLongitude + "_" + Q.decimalLatitude,
        text: Q.decimalLatitude + ", " + Q.decimalLongitude,
        place_name: Q.decimalLatitude + ", " + Q.decimalLongitude,
        place_type: ["reverse"],
        center: [Q.decimalLongitude, Q.decimalLatitude],
        bbox: [
          Q.decimalLongitude,
          Q.decimalLatitude,
          Q.decimalLongitude,
          Q.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [Q.decimalLongitude, Q.decimalLatitude]
        }
      }), _t = U, ((Ve = U[Y]) == null ? void 0 : Ve.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), Q && Me.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      ve === Je && t(20, Je = void 0);
    }
  }
  function _n() {
    var ve;
    if (!(le != null && le.length) || !D)
      return;
    const L = [180, 90, -180, -90], te = !le.some((we) => !we.matching_text);
    let se;
    for (const we of le) {
      const Oe = ct(we);
      if (se = se === void 0 ? Oe : Oe === void 0 ? se : Math.max(se, Oe), te || !we.matching_text)
        for (const Ve of [0, 1, 2, 3])
          L[Ve] = Math[Ve < 2 ? "min" : "max"](L[Ve], ((ve = we.bbox) == null ? void 0 : ve[Ve]) ?? we.center[Ve % 2]);
    }
    c && le.length > 0 && (z && L[0] === L[2] && L[1] === L[3] ? c.flyTo(z.center, ct(z)) : c.fitBounds(Bt(L), 50, se));
  }
  function Zt() {
    !z || !c || (!z.bbox || z.bbox[0] === z.bbox[2] && z.bbox[1] === z.bbox[3] ? c.flyTo(z.center, ct(z)) : c.fitBounds(Bt(z.bbox), 50, ct(z)));
  }
  function ct(L) {
    var se;
    if (!L.bbox || L.bbox[0] !== L.bbox[2] && L.bbox[1] !== L.bbox[3])
      return;
    const te = L.id.replace(/\..*/, "");
    return (Array.isArray((se = L.properties) == null ? void 0 : se.categories) ? L.properties.categories.reduce(
      (ve, we) => {
        const Oe = ge[te + "." + we];
        return ve === void 0 ? Oe : Oe === void 0 ? ve : Math.max(ve, Oe);
      },
      void 0
    ) : void 0) ?? ge[te];
  }
  function xn(L) {
    t(0, w = P === "always"), t(13, U = void 0), t(14, z = void 0), t(15, Y = -1), gi(L[1].toFixed(6) + ", " + zr(L[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Tn(L) {
    if (!U)
      return;
    let te = L.key === "ArrowDown" ? 1 : L.key === "ArrowUp" ? -1 : 0;
    te && (Me.focus(), t(17, Be = !0), L.preventDefault(), z && Y === -1 && t(15, Y = U.findIndex((se) => se.id === (z == null ? void 0 : z.id))), Y === (z || K ? 0 : -1) && te === -1 && t(15, Y = U.length), t(15, Y += te), Y >= U.length && t(15, Y = -1), Y < 0 && (z || K) && t(15, Y = 0));
  }
  function yi(L, te = !0, se = !1) {
    if (t(19, ke = void 0), t(14, z = void 0), t(17, Be = !0), j || se) {
      if (st && clearTimeout(st), T.length < b)
        return;
      const ve = T;
      st = window.setTimeout(
        () => {
          Ht(ve).catch((we) => t(19, ke = we));
        },
        te ? _ : 0
      );
    } else
      t(13, U = void 0), t(19, ke = void 0);
  }
  function Kt(L) {
    z && (z == null ? void 0 : z.id) === (L == null ? void 0 : L.id) ? Zt() : (t(14, z = L), t(1, T = L.place_name));
  }
  function bi(L) {
    t(15, Y = L);
  }
  function Mn() {
    (!K || z) && t(15, Y = -1), $ && Zt();
  }
  const Nn = () => Me.focus();
  function Cn(L) {
    ii[L ? "unshift" : "push"](() => {
      Me = L, t(18, Me);
    });
  }
  function kn() {
    T = this.value, t(1, T), t(17, Be), t(31, k), t(16, ot);
  }
  const On = () => t(17, Be = !0), Rn = () => t(17, Be = !1), Pn = () => t(17, Be = !0), An = () => t(14, z = void 0), In = () => {
    t(1, T = ""), Me.focus();
  }, Bn = () => t(0, w = !w), Gn = () => t(19, ke = void 0), zn = (L) => bi(L), Wn = (L) => Kt(L), Dn = () => {
  };
  return i.$$set = (L) => {
    "class" in L && t(2, h = L.class), "apiKey" in L && t(29, v = L.apiKey), "bbox" in L && t(30, S = L.bbox), "clearButtonTitle" in L && t(3, M = L.clearButtonTitle), "clearOnBlur" in L && t(31, k = L.clearOnBlur), "clearListOnPick" in L && t(32, N = L.clearListOnPick), "keepListOpen" in L && t(4, C = L.keepListOpen), "collapsed" in L && t(5, O = L.collapsed), "country" in L && t(33, I = L.country), "debounceSearch" in L && t(34, _ = L.debounceSearch), "enableReverse" in L && t(6, P = L.enableReverse), "errorMessage" in L && t(7, W = L.errorMessage), "filter" in L && t(35, Z = L.filter), "flyTo" in L && t(36, D = L.flyTo), "fuzzyMatch" in L && t(37, B = L.fuzzyMatch), "language" in L && t(38, o = L.language), "limit" in L && t(39, l = L.limit), "reverseGeocodingLimit" in L && t(40, m = L.reverseGeocodingLimit), "mapController" in L && t(41, c = L.mapController), "minLength" in L && t(42, b = L.minLength), "noResultsMessage" in L && t(8, p = L.noResultsMessage), "placeholder" in L && t(9, d = L.placeholder), "proximity" in L && t(43, y = L.proximity), "reverseActive" in L && t(0, w = L.reverseActive), "reverseButtonTitle" in L && t(10, E = L.reverseButtonTitle), "searchValue" in L && t(1, T = L.searchValue), "pickedResultStyle" in L && t(44, A = L.pickedResultStyle), "showPlaceType" in L && t(11, G = L.showPlaceType), "showResultsWhileTyping" in L && t(45, j = L.showResultsWhileTyping), "selectFirst" in L && t(46, K = L.selectFirst), "flyToSelected" in L && t(47, $ = L.flyToSelected), "markerOnSelected" in L && t(48, q = L.markerOnSelected), "types" in L && t(49, H = L.types), "reverseGeocodingTypes" in L && t(50, Ie = L.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in L && t(51, Qe = L.exhaustiveReverseGeocoding), "excludeTypes" in L && t(52, Xe = L.excludeTypes), "reverseGeocodingExcludeTypes" in L && t(53, Ce = L.reverseGeocodingExcludeTypes), "zoom" in L && t(54, ge = L.zoom), "apiUrl" in L && t(55, ce = L.apiUrl), "fetchParameters" in L && t(56, J = L.fetchParameters), "iconsBaseUrl" in L && t(12, di = L.iconsBaseUrl), "adjustUrlQuery" in L && t(57, Ut = L.adjustUrlQuery), "adjustUrl" in L && t(58, qt = L.adjustUrl), "$$scope" in L && t(69, s = L.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, w = P === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && A !== "marker-only" && z && !z.address && z.geometry.type === "Point" && z.place_type[0] !== "reverse" && Ht(z.id, { byId: !0 }).catch((L) => t(19, ke = L)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (c && z && z.id !== jt && D && (Zt(), N && t(13, U = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, jt = z == null ? void 0 : z.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ot = Be), k && !ot && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < b && (t(13, U = void 0), t(19, ke = void 0), t(64, le = U)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && U != null && U.length && Y == -1 && !z && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== U && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && c && c.setEventHandler((L) => {
      switch (L.type) {
        case "mapClick":
          w && xn(L.coordinates);
          break;
        case "markerClick":
          {
            const te = U == null ? void 0 : U.find((se) => se.id === L.id);
            te && Kt(te);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = ot ? (U == null ? void 0 : U.findIndex((te) => te.id === L.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = U == null ? void 0 : U[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && c && r && D && $ && c.flyTo(r.center, ct(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = A === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (q || c == null || c.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && c && q && !le && (c.setFeatures(r ? [r] : void 0, z, n), c.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && c && c.setFeatures(le, z, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le && c && c.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && c) {
      const L = Vt(T);
      c.setReverseMarker(L ? [L.decimalLongitude, L.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && je("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && je("pick", { feature: z }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(U != null && U.length) && (ot || C)), i.$$.dirty[2] & /*optionsVisible*/
    32 && je("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && je("featureslisted", { features: U }), i.$$.dirty[2] & /*markedFeatures*/
    4 && je("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && je("reversetoggle", { reverse: w }), i.$$.dirty[0] & /*searchValue*/
    2 && je("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && c && c.indicateReverse(w);
  }, [
    w,
    T,
    h,
    M,
    C,
    O,
    P,
    W,
    p,
    d,
    E,
    G,
    di,
    U,
    z,
    Y,
    ot,
    Be,
    Me,
    ke,
    Je,
    Sn,
    pi,
    Tn,
    yi,
    Kt,
    bi,
    Mn,
    g,
    v,
    S,
    k,
    N,
    I,
    _,
    Z,
    D,
    B,
    o,
    l,
    m,
    c,
    b,
    y,
    A,
    j,
    K,
    $,
    q,
    H,
    Ie,
    Qe,
    Xe,
    Ce,
    ge,
    ce,
    J,
    Ut,
    qt,
    vn,
    wn,
    gi,
    En,
    Ln,
    le,
    jt,
    r,
    u,
    n,
    s,
    a,
    Nn,
    Cn,
    kn,
    On,
    Rn,
    Pn,
    An,
    In,
    Bn,
    Gn,
    zn,
    Wn,
    Dn
  ];
}
let ns = class extends rt {
  constructor(e) {
    super(), nt(
      this,
      e,
      is,
      ts,
      it,
      {
        ZOOM_DEFAULTS: 28,
        class: 2,
        apiKey: 29,
        bbox: 30,
        clearButtonTitle: 3,
        clearOnBlur: 31,
        clearListOnPick: 32,
        keepListOpen: 4,
        collapsed: 5,
        country: 33,
        debounceSearch: 34,
        enableReverse: 6,
        errorMessage: 7,
        filter: 35,
        flyTo: 36,
        fuzzyMatch: 37,
        language: 38,
        limit: 39,
        reverseGeocodingLimit: 40,
        mapController: 41,
        minLength: 42,
        noResultsMessage: 8,
        placeholder: 9,
        proximity: 43,
        reverseActive: 0,
        reverseButtonTitle: 10,
        searchValue: 1,
        pickedResultStyle: 44,
        showPlaceType: 11,
        showResultsWhileTyping: 45,
        selectFirst: 46,
        flyToSelected: 47,
        markerOnSelected: 48,
        types: 49,
        reverseGeocodingTypes: 50,
        exhaustiveReverseGeocoding: 51,
        excludeTypes: 52,
        reverseGeocodingExcludeTypes: 53,
        zoom: 54,
        apiUrl: 55,
        fetchParameters: 56,
        iconsBaseUrl: 12,
        adjustUrlQuery: 57,
        adjustUrl: 58,
        focus: 59,
        blur: 60,
        setQuery: 61,
        clearList: 62,
        clearMap: 63
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get ZOOM_DEFAULTS() {
    return this.$$.ctx[28];
  }
  get focus() {
    return this.$$.ctx[59];
  }
  get blur() {
    return this.$$.ctx[60];
  }
  get setQuery() {
    return this.$$.ctx[61];
  }
  get clearList() {
    return this.$$.ctx[62];
  }
  get clearMap() {
    return this.$$.ctx[63];
  }
};
function Gt(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function ci(i, e, t = {}) {
  for (const r of i) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let u = 0; u < r[r.length - 1].length; u++)
      if (r[r.length - 1][u] !== r[0][u])
        throw new Error("First and last Position are not equivalent.");
  }
  return Gt({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function si(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function hn(i, e, t = {}) {
  return Gt({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function dn(i, e, t) {
  if (i !== null)
    for (var n, r, u, a, s, g, h, v = 0, S = 0, M, k = i.type, N = k === "FeatureCollection", C = k === "Feature", O = N ? i.features.length : 1, I = 0; I < O; I++) {
      h = N ? i.features[I].geometry : C ? i.geometry : i, M = h ? h.type === "GeometryCollection" : !1, s = M ? h.geometries.length : 1;
      for (var _ = 0; _ < s; _++) {
        var P = 0, W = 0;
        if (a = M ? h.geometries[_] : h, a !== null) {
          g = a.coordinates;
          var Z = a.type;
          switch (v = 0, Z) {
            case null:
              break;
            case "Point":
              if (e(
                g,
                S,
                I,
                P,
                W
              ) === !1)
                return !1;
              S++, P++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < g.length; n++) {
                if (e(
                  g[n],
                  S,
                  I,
                  P,
                  W
                ) === !1)
                  return !1;
                S++, Z === "MultiPoint" && P++;
              }
              Z === "LineString" && P++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < g.length; n++) {
                for (r = 0; r < g[n].length - v; r++) {
                  if (e(
                    g[n][r],
                    S,
                    I,
                    P,
                    W
                  ) === !1)
                    return !1;
                  S++;
                }
                Z === "MultiLineString" && P++, Z === "Polygon" && W++;
              }
              Z === "Polygon" && P++;
              break;
            case "MultiPolygon":
              for (n = 0; n < g.length; n++) {
                for (W = 0, r = 0; r < g[n].length; r++) {
                  for (u = 0; u < g[n][r].length - v; u++) {
                    if (e(
                      g[n][r][u],
                      S,
                      I,
                      P,
                      W
                    ) === !1)
                      return !1;
                    S++;
                  }
                  W++;
                }
                P++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (dn(a.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function hi(i, e) {
  var t, n, r, u, a, s, g, h, v, S, M = 0, k = i.type === "FeatureCollection", N = i.type === "Feature", C = k ? i.features.length : 1;
  for (t = 0; t < C; t++) {
    for (s = k ? i.features[t].geometry : N ? i.geometry : i, h = k ? i.features[t].properties : N ? i.properties : {}, v = k ? i.features[t].bbox : N ? i.bbox : void 0, S = k ? i.features[t].id : N ? i.id : void 0, g = s ? s.type === "GeometryCollection" : !1, a = g ? s.geometries.length : 1, r = 0; r < a; r++) {
      if (u = g ? s.geometries[r] : s, u === null) {
        if (e(
          null,
          M,
          h,
          v,
          S
        ) === !1)
          return !1;
        continue;
      }
      switch (u.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            u,
            M,
            h,
            v,
            S
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < u.geometries.length; n++)
            if (e(
              u.geometries[n],
              M,
              h,
              v,
              S
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    M++;
  }
}
function rs(i, e) {
  hi(i, function(t, n, r, u, a) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Gt(t, r, { bbox: u, id: a }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var g;
    switch (s) {
      case "MultiPoint":
        g = "Point";
        break;
      case "MultiLineString":
        g = "LineString";
        break;
      case "MultiPolygon":
        g = "Polygon";
        break;
    }
    for (var h = 0; h < t.coordinates.length; h++) {
      var v = t.coordinates[h], S = {
        type: g,
        coordinates: v
      };
      if (e(Gt(S, r), n, h) === !1)
        return !1;
    }
  });
}
function ss(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return dn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var Vi = ss, os = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ei = Math.ceil, xe = Math.floor, ye = "[BigNumber Error] ", Hi = ye + "Number primitive has more than 15 significant digits: ", Ne = 1e14, F = 14, Zi = 9007199254740991, ti = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], He = 1e7, Ee = 1e9;
function gn(i) {
  var e, t, n, r = _.prototype = { constructor: _, toString: null, valueOf: null }, u = new _(1), a = 20, s = 4, g = -7, h = 21, v = -1e7, S = 1e7, M = !1, k = 1, N = 0, C = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, O = "0123456789abcdefghijklmnopqrstuvwxyz", I = !0;
  function _(o, l) {
    var f, m, c, b, p, d, y, w, E = this;
    if (!(E instanceof _)) return new _(o, l);
    if (l == null) {
      if (o && o._isBigNumber === !0) {
        E.s = o.s, !o.c || o.e > S ? E.c = E.e = null : o.e < v ? E.c = [E.e = 0] : (E.e = o.e, E.c = o.c.slice());
        return;
      }
      if ((d = typeof o == "number") && o * 0 == 0) {
        if (E.s = 1 / o < 0 ? (o = -o, -1) : 1, o === ~~o) {
          for (b = 0, p = o; p >= 10; p /= 10, b++) ;
          b > S ? E.c = E.e = null : (E.e = b, E.c = [o]);
          return;
        }
        w = String(o);
      } else {
        if (!os.test(w = String(o))) return n(E, w, d);
        E.s = w.charCodeAt(0) == 45 ? (w = w.slice(1), -1) : 1;
      }
      (b = w.indexOf(".")) > -1 && (w = w.replace(".", "")), (p = w.search(/e/i)) > 0 ? (b < 0 && (b = p), b += +w.slice(p + 1), w = w.substring(0, p)) : b < 0 && (b = w.length);
    } else {
      if (ie(l, 2, O.length, "Base"), l == 10 && I)
        return E = new _(o), D(E, a + E.e + 1, s);
      if (w = String(o), d = typeof o == "number") {
        if (o * 0 != 0) return n(E, w, d, l);
        if (E.s = 1 / o < 0 ? (w = w.slice(1), -1) : 1, _.DEBUG && w.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Hi + o);
      } else
        E.s = w.charCodeAt(0) === 45 ? (w = w.slice(1), -1) : 1;
      for (f = O.slice(0, l), b = p = 0, y = w.length; p < y; p++)
        if (f.indexOf(m = w.charAt(p)) < 0) {
          if (m == ".") {
            if (p > b) {
              b = y;
              continue;
            }
          } else if (!c && (w == w.toUpperCase() && (w = w.toLowerCase()) || w == w.toLowerCase() && (w = w.toUpperCase()))) {
            c = !0, p = -1, b = 0;
            continue;
          }
          return n(E, String(o), d, l);
        }
      d = !1, w = t(w, l, 10, E.s), (b = w.indexOf(".")) > -1 ? w = w.replace(".", "") : b = w.length;
    }
    for (p = 0; w.charCodeAt(p) === 48; p++) ;
    for (y = w.length; w.charCodeAt(--y) === 48; ) ;
    if (w = w.slice(p, ++y)) {
      if (y -= p, d && _.DEBUG && y > 15 && (o > Zi || o !== xe(o)))
        throw Error(Hi + E.s * o);
      if ((b = b - p - 1) > S)
        E.c = E.e = null;
      else if (b < v)
        E.c = [E.e = 0];
      else {
        if (E.e = b, E.c = [], p = (b + 1) % F, b < 0 && (p += F), p < y) {
          for (p && E.c.push(+w.slice(0, p)), y -= F; p < y; )
            E.c.push(+w.slice(p, p += F));
          p = F - (w = w.slice(p)).length;
        } else
          p -= y;
        for (; p--; w += "0") ;
        E.c.push(+w);
      }
    } else
      E.c = [E.e = 0];
  }
  _.clone = gn, _.ROUND_UP = 0, _.ROUND_DOWN = 1, _.ROUND_CEIL = 2, _.ROUND_FLOOR = 3, _.ROUND_HALF_UP = 4, _.ROUND_HALF_DOWN = 5, _.ROUND_HALF_EVEN = 6, _.ROUND_HALF_CEIL = 7, _.ROUND_HALF_FLOOR = 8, _.EUCLID = 9, _.config = _.set = function(o) {
    var l, f;
    if (o != null)
      if (typeof o == "object") {
        if (o.hasOwnProperty(l = "DECIMAL_PLACES") && (f = o[l], ie(f, 0, Ee, l), a = f), o.hasOwnProperty(l = "ROUNDING_MODE") && (f = o[l], ie(f, 0, 8, l), s = f), o.hasOwnProperty(l = "EXPONENTIAL_AT") && (f = o[l], f && f.pop ? (ie(f[0], -1e9, 0, l), ie(f[1], 0, Ee, l), g = f[0], h = f[1]) : (ie(f, -1e9, Ee, l), g = -(h = f < 0 ? -f : f))), o.hasOwnProperty(l = "RANGE"))
          if (f = o[l], f && f.pop)
            ie(f[0], -1e9, -1, l), ie(f[1], 1, Ee, l), v = f[0], S = f[1];
          else if (ie(f, -1e9, Ee, l), f)
            v = -(S = f < 0 ? -f : f);
          else
            throw Error(ye + l + " cannot be zero: " + f);
        if (o.hasOwnProperty(l = "CRYPTO"))
          if (f = o[l], f === !!f)
            if (f)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                M = f;
              else
                throw M = !f, Error(ye + "crypto unavailable");
            else
              M = f;
          else
            throw Error(ye + l + " not true or false: " + f);
        if (o.hasOwnProperty(l = "MODULO_MODE") && (f = o[l], ie(f, 0, 9, l), k = f), o.hasOwnProperty(l = "POW_PRECISION") && (f = o[l], ie(f, 0, Ee, l), N = f), o.hasOwnProperty(l = "FORMAT"))
          if (f = o[l], typeof f == "object") C = f;
          else throw Error(ye + l + " not an object: " + f);
        if (o.hasOwnProperty(l = "ALPHABET"))
          if (f = o[l], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            I = f.slice(0, 10) == "0123456789", O = f;
          else
            throw Error(ye + l + " invalid: " + f);
      } else
        throw Error(ye + "Object expected: " + o);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: s,
      EXPONENTIAL_AT: [g, h],
      RANGE: [v, S],
      CRYPTO: M,
      MODULO_MODE: k,
      POW_PRECISION: N,
      FORMAT: C,
      ALPHABET: O
    };
  }, _.isBigNumber = function(o) {
    if (!o || o._isBigNumber !== !0) return !1;
    if (!_.DEBUG) return !0;
    var l, f, m = o.c, c = o.e, b = o.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((b === 1 || b === -1) && c >= -1e9 && c <= Ee && c === xe(c)) {
        if (m[0] === 0) {
          if (c === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (c + 1) % F, l < 1 && (l += F), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (f = m[l], f < 0 || f >= Ne || f !== xe(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (m === null && c === null && (b === null || b === 1 || b === -1))
      return !0;
    throw Error(ye + "Invalid BigNumber: " + o);
  }, _.maximum = _.max = function() {
    return W(arguments, -1);
  }, _.minimum = _.min = function() {
    return W(arguments, 1);
  }, _.random = function() {
    var o = 9007199254740992, l = Math.random() * o & 2097151 ? function() {
      return xe(Math.random() * o);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var m, c, b, p, d, y = 0, w = [], E = new _(u);
      if (f == null ? f = a : ie(f, 0, Ee), p = ei(f / F), M)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(p *= 2)); y < p; )
            d = m[y] * 131072 + (m[y + 1] >>> 11), d >= 9e15 ? (c = crypto.getRandomValues(new Uint32Array(2)), m[y] = c[0], m[y + 1] = c[1]) : (w.push(d % 1e14), y += 2);
          y = p / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(p *= 7); y < p; )
            d = (m[y] & 31) * 281474976710656 + m[y + 1] * 1099511627776 + m[y + 2] * 4294967296 + m[y + 3] * 16777216 + (m[y + 4] << 16) + (m[y + 5] << 8) + m[y + 6], d >= 9e15 ? crypto.randomBytes(7).copy(m, y) : (w.push(d % 1e14), y += 7);
          y = p / 7;
        } else
          throw M = !1, Error(ye + "crypto unavailable");
      if (!M)
        for (; y < p; )
          d = l(), d < 9e15 && (w[y++] = d % 1e14);
      for (p = w[--y], f %= F, p && f && (d = ti[F - f], w[y] = xe(p / d) * d); w[y] === 0; w.pop(), y--) ;
      if (y < 0)
        w = [b = 0];
      else {
        for (b = -1; w[0] === 0; w.splice(0, 1), b -= F) ;
        for (y = 1, d = w[0]; d >= 10; d /= 10, y++) ;
        y < F && (b -= F - y);
      }
      return E.e = b, E.c = w, E;
    };
  }(), _.sum = function() {
    for (var o = 1, l = arguments, f = new _(l[0]); o < l.length; ) f = f.plus(l[o++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var o = "0123456789";
    function l(f, m, c, b) {
      for (var p, d = [0], y, w = 0, E = f.length; w < E; ) {
        for (y = d.length; y--; d[y] *= m) ;
        for (d[0] += b.indexOf(f.charAt(w++)), p = 0; p < d.length; p++)
          d[p] > c - 1 && (d[p + 1] == null && (d[p + 1] = 0), d[p + 1] += d[p] / c | 0, d[p] %= c);
      }
      return d.reverse();
    }
    return function(f, m, c, b, p) {
      var d, y, w, E, T, A, G, j, K = f.indexOf("."), $ = a, q = s;
      for (K >= 0 && (E = N, N = 0, f = f.replace(".", ""), j = new _(m), A = j.pow(f.length - K), N = E, j.c = l(
        ze(_e(A.c), A.e, "0"),
        10,
        c,
        o
      ), j.e = j.c.length), G = l(f, m, c, p ? (d = O, o) : (d = o, O)), w = E = G.length; G[--E] == 0; G.pop()) ;
      if (!G[0]) return d.charAt(0);
      if (K < 0 ? --w : (A.c = G, A.e = w, A.s = b, A = e(A, j, $, q, c), G = A.c, T = A.r, w = A.e), y = w + $ + 1, K = G[y], E = c / 2, T = T || y < 0 || G[y + 1] != null, T = q < 4 ? (K != null || T) && (q == 0 || q == (A.s < 0 ? 3 : 2)) : K > E || K == E && (q == 4 || T || q == 6 && G[y - 1] & 1 || q == (A.s < 0 ? 8 : 7)), y < 1 || !G[0])
        f = T ? ze(d.charAt(1), -$, d.charAt(0)) : d.charAt(0);
      else {
        if (G.length = y, T)
          for (--c; ++G[--y] > c; )
            G[y] = 0, y || (++w, G = [1].concat(G));
        for (E = G.length; !G[--E]; ) ;
        for (K = 0, f = ""; K <= E; f += d.charAt(G[K++])) ;
        f = ze(f, w, d.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function o(m, c, b) {
      var p, d, y, w, E = 0, T = m.length, A = c % He, G = c / He | 0;
      for (m = m.slice(); T--; )
        y = m[T] % He, w = m[T] / He | 0, p = G * y + w * A, d = A * y + p % He * He + E, E = (d / b | 0) + (p / He | 0) + G * w, m[T] = d % b;
      return E && (m = [E].concat(m)), m;
    }
    function l(m, c, b, p) {
      var d, y;
      if (b != p)
        y = b > p ? 1 : -1;
      else
        for (d = y = 0; d < b; d++)
          if (m[d] != c[d]) {
            y = m[d] > c[d] ? 1 : -1;
            break;
          }
      return y;
    }
    function f(m, c, b, p) {
      for (var d = 0; b--; )
        m[b] -= d, d = m[b] < c[b] ? 1 : 0, m[b] = d * p + m[b] - c[b];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, c, b, p, d) {
      var y, w, E, T, A, G, j, K, $, q, H, fe, Ie, Qe, Xe, be, Ce, ge = m.s == c.s ? 1 : -1, ce = m.c, J = c.c;
      if (!ce || !ce[0] || !J || !J[0])
        return new _(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !c.s || (ce ? J && ce[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            ce && ce[0] == 0 || !J ? ge * 0 : ge / 0
          )
        );
      for (K = new _(ge), $ = K.c = [], w = m.e - c.e, ge = b + w + 1, d || (d = Ne, w = Te(m.e / F) - Te(c.e / F), ge = ge / F | 0), E = 0; J[E] == (ce[E] || 0); E++) ;
      if (J[E] > (ce[E] || 0) && w--, ge < 0)
        $.push(1), T = !0;
      else {
        for (Qe = ce.length, be = J.length, E = 0, ge += 2, A = xe(d / (J[0] + 1)), A > 1 && (J = o(J, A, d), ce = o(ce, A, d), be = J.length, Qe = ce.length), Ie = be, q = ce.slice(0, be), H = q.length; H < be; q[H++] = 0) ;
        Ce = J.slice(), Ce = [0].concat(Ce), Xe = J[0], J[1] >= d / 2 && Xe++;
        do {
          if (A = 0, y = l(J, q, be, H), y < 0) {
            if (fe = q[0], be != H && (fe = fe * d + (q[1] || 0)), A = xe(fe / Xe), A > 1)
              for (A >= d && (A = d - 1), G = o(J, A, d), j = G.length, H = q.length; l(G, q, j, H) == 1; )
                A--, f(G, be < j ? Ce : J, j, d), j = G.length, y = 1;
            else
              A == 0 && (y = A = 1), G = J.slice(), j = G.length;
            if (j < H && (G = [0].concat(G)), f(q, G, H, d), H = q.length, y == -1)
              for (; l(J, q, be, H) < 1; )
                A++, f(q, be < H ? Ce : J, H, d), H = q.length;
          } else y === 0 && (A++, q = [0]);
          $[E++] = A, q[0] ? q[H++] = ce[Ie] || 0 : (q = [ce[Ie]], H = 1);
        } while ((Ie++ < Qe || q[0] != null) && ge--);
        T = q[0] != null, $[0] || $.splice(0, 1);
      }
      if (d == Ne) {
        for (E = 1, ge = $[0]; ge >= 10; ge /= 10, E++) ;
        D(K, b + (K.e = E + w * F - 1) + 1, p, T);
      } else
        K.e = w, K.r = +T;
      return K;
    };
  }();
  function P(o, l, f, m) {
    var c, b, p, d, y;
    if (f == null ? f = s : ie(f, 0, 8), !o.c) return o.toString();
    if (c = o.c[0], p = o.e, l == null)
      y = _e(o.c), y = m == 1 || m == 2 && (p <= g || p >= h) ? Ct(y, p) : ze(y, p, "0");
    else if (o = D(new _(o), l, f), b = o.e, y = _e(o.c), d = y.length, m == 1 || m == 2 && (l <= b || b <= g)) {
      for (; d < l; y += "0", d++) ;
      y = Ct(y, b);
    } else if (l -= p, y = ze(y, b, "0"), b + 1 > d) {
      if (--l > 0) for (y += "."; l--; y += "0") ;
    } else if (l += b - d, l > 0)
      for (b + 1 == d && (y += "."); l--; y += "0") ;
    return o.s < 0 && c ? "-" + y : y;
  }
  function W(o, l) {
    for (var f, m, c = 1, b = new _(o[0]); c < o.length; c++)
      m = new _(o[c]), (!m.s || (f = $e(b, m)) === l || f === 0 && b.s === l) && (b = m);
    return b;
  }
  function Z(o, l, f) {
    for (var m = 1, c = l.length; !l[--c]; l.pop()) ;
    for (c = l[0]; c >= 10; c /= 10, m++) ;
    return (f = m + f * F - 1) > S ? o.c = o.e = null : f < v ? o.c = [o.e = 0] : (o.e = f, o.c = l), o;
  }
  n = /* @__PURE__ */ function() {
    var o = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, f = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, c = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(b, p, d, y) {
      var w, E = d ? p : p.replace(c, "");
      if (m.test(E))
        b.s = isNaN(E) ? null : E < 0 ? -1 : 1;
      else {
        if (!d && (E = E.replace(o, function(T, A, G) {
          return w = (G = G.toLowerCase()) == "x" ? 16 : G == "b" ? 2 : 8, !y || y == w ? A : T;
        }), y && (w = y, E = E.replace(l, "$1").replace(f, "0.$1")), p != E))
          return new _(E, w);
        if (_.DEBUG)
          throw Error(ye + "Not a" + (y ? " base " + y : "") + " number: " + p);
        b.s = null;
      }
      b.c = b.e = null;
    };
  }();
  function D(o, l, f, m) {
    var c, b, p, d, y, w, E, T = o.c, A = ti;
    if (T) {
      e: {
        for (c = 1, d = T[0]; d >= 10; d /= 10, c++) ;
        if (b = l - c, b < 0)
          b += F, p = l, y = T[w = 0], E = xe(y / A[c - p - 1] % 10);
        else if (w = ei((b + 1) / F), w >= T.length)
          if (m) {
            for (; T.length <= w; T.push(0)) ;
            y = E = 0, c = 1, b %= F, p = b - F + 1;
          } else
            break e;
        else {
          for (y = d = T[w], c = 1; d >= 10; d /= 10, c++) ;
          b %= F, p = b - F + c, E = p < 0 ? 0 : xe(y / A[c - p - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[w + 1] != null || (p < 0 ? y : y % A[c - p - 1]), m = f < 4 ? (E || m) && (f == 0 || f == (o.s < 0 ? 3 : 2)) : E > 5 || E == 5 && (f == 4 || m || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (b > 0 ? p > 0 ? y / A[c - p] : 0 : T[w - 1]) % 10 & 1 || f == (o.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, m ? (l -= o.e + 1, T[0] = A[(F - l % F) % F], o.e = -l || 0) : T[0] = o.e = 0, o;
        if (b == 0 ? (T.length = w, d = 1, w--) : (T.length = w + 1, d = A[F - b], T[w] = p > 0 ? xe(y / A[c - p] % A[p]) * d : 0), m)
          for (; ; )
            if (w == 0) {
              for (b = 1, p = T[0]; p >= 10; p /= 10, b++) ;
              for (p = T[0] += d, d = 1; p >= 10; p /= 10, d++) ;
              b != d && (o.e++, T[0] == Ne && (T[0] = 1));
              break;
            } else {
              if (T[w] += d, T[w] != Ne) break;
              T[w--] = 0, d = 1;
            }
        for (b = T.length; T[--b] === 0; T.pop()) ;
      }
      o.e > S ? o.c = o.e = null : o.e < v && (o.c = [o.e = 0]);
    }
    return o;
  }
  function B(o) {
    var l, f = o.e;
    return f === null ? o.toString() : (l = _e(o.c), l = f <= g || f >= h ? Ct(l, f) : ze(l, f, "0"), o.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var o = new _(this);
    return o.s < 0 && (o.s = 1), o;
  }, r.comparedTo = function(o, l) {
    return $e(this, new _(o, l));
  }, r.decimalPlaces = r.dp = function(o, l) {
    var f, m, c, b = this;
    if (o != null)
      return ie(o, 0, Ee), l == null ? l = s : ie(l, 0, 8), D(new _(b), o + b.e + 1, l);
    if (!(f = b.c)) return null;
    if (m = ((c = f.length - 1) - Te(this.e / F)) * F, c = f[c]) for (; c % 10 == 0; c /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(o, l) {
    return e(this, new _(o, l), a, s);
  }, r.dividedToIntegerBy = r.idiv = function(o, l) {
    return e(this, new _(o, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(o, l) {
    var f, m, c, b, p, d, y, w, E, T = this;
    if (o = new _(o), o.c && !o.isInteger())
      throw Error(ye + "Exponent not an integer: " + B(o));
    if (l != null && (l = new _(l)), d = o.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !o.c || !o.c[0])
      return E = new _(Math.pow(+B(T), d ? o.s * (2 - Nt(o)) : +B(o))), l ? E.mod(l) : E;
    if (y = o.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new _(NaN);
      m = !y && T.isInteger() && l.isInteger(), m && (T = T.mod(l));
    } else {
      if (o.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || d && T.c[1] >= 24e7 : T.c[0] < 8e13 || d && T.c[0] <= 9999975e7)))
        return b = T.s < 0 && Nt(o) ? -0 : 0, T.e > -1 && (b = 1 / b), new _(y ? 1 / b : b);
      N && (b = ei(N / F + 2));
    }
    for (d ? (f = new _(0.5), y && (o.s = 1), w = Nt(o)) : (c = Math.abs(+B(o)), w = c % 2), E = new _(u); ; ) {
      if (w) {
        if (E = E.times(T), !E.c) break;
        b ? E.c.length > b && (E.c.length = b) : m && (E = E.mod(l));
      }
      if (c) {
        if (c = xe(c / 2), c === 0) break;
        w = c % 2;
      } else if (o = o.times(f), D(o, o.e + 1, 1), o.e > 14)
        w = Nt(o);
      else {
        if (c = +B(o), c === 0) break;
        w = c % 2;
      }
      T = T.times(T), b ? T.c && T.c.length > b && (T.c.length = b) : m && (T = T.mod(l));
    }
    return m ? E : (y && (E = u.div(E)), l ? E.mod(l) : b ? D(E, N, s, p) : E);
  }, r.integerValue = function(o) {
    var l = new _(this);
    return o == null ? o = s : ie(o, 0, 8), D(l, l.e + 1, o);
  }, r.isEqualTo = r.eq = function(o, l) {
    return $e(this, new _(o, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(o, l) {
    return $e(this, new _(o, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(o, l) {
    return (l = $e(this, new _(o, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Te(this.e / F) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(o, l) {
    return $e(this, new _(o, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(o, l) {
    return (l = $e(this, new _(o, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(o, l) {
    var f, m, c, b, p = this, d = p.s;
    if (o = new _(o, l), l = o.s, !d || !l) return new _(NaN);
    if (d != l)
      return o.s = -l, p.plus(o);
    var y = p.e / F, w = o.e / F, E = p.c, T = o.c;
    if (!y || !w) {
      if (!E || !T) return E ? (o.s = -l, o) : new _(T ? p : NaN);
      if (!E[0] || !T[0])
        return T[0] ? (o.s = -l, o) : new _(E[0] ? p : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          s == 3 ? -0 : 0
        ));
    }
    if (y = Te(y), w = Te(w), E = E.slice(), d = y - w) {
      for ((b = d < 0) ? (d = -d, c = E) : (w = y, c = T), c.reverse(), l = d; l--; c.push(0)) ;
      c.reverse();
    } else
      for (m = (b = (d = E.length) < (l = T.length)) ? d : l, d = l = 0; l < m; l++)
        if (E[l] != T[l]) {
          b = E[l] < T[l];
          break;
        }
    if (b && (c = E, E = T, T = c, o.s = -o.s), l = (m = T.length) - (f = E.length), l > 0) for (; l--; E[f++] = 0) ;
    for (l = Ne - 1; m > d; ) {
      if (E[--m] < T[m]) {
        for (f = m; f && !E[--f]; E[f] = l) ;
        --E[f], E[m] += Ne;
      }
      E[m] -= T[m];
    }
    for (; E[0] == 0; E.splice(0, 1), --w) ;
    return E[0] ? Z(o, E, w) : (o.s = s == 3 ? -1 : 1, o.c = [o.e = 0], o);
  }, r.modulo = r.mod = function(o, l) {
    var f, m, c = this;
    return o = new _(o, l), !c.c || !o.s || o.c && !o.c[0] ? new _(NaN) : !o.c || c.c && !c.c[0] ? new _(c) : (k == 9 ? (m = o.s, o.s = 1, f = e(c, o, 0, 3), o.s = m, f.s *= m) : f = e(c, o, 0, k), o = c.minus(f.times(o)), !o.c[0] && k == 1 && (o.s = c.s), o);
  }, r.multipliedBy = r.times = function(o, l) {
    var f, m, c, b, p, d, y, w, E, T, A, G, j, K, $, q = this, H = q.c, fe = (o = new _(o, l)).c;
    if (!H || !fe || !H[0] || !fe[0])
      return !q.s || !o.s || H && !H[0] && !fe || fe && !fe[0] && !H ? o.c = o.e = o.s = null : (o.s *= q.s, !H || !fe ? o.c = o.e = null : (o.c = [0], o.e = 0)), o;
    for (m = Te(q.e / F) + Te(o.e / F), o.s *= q.s, y = H.length, T = fe.length, y < T && (j = H, H = fe, fe = j, c = y, y = T, T = c), c = y + T, j = []; c--; j.push(0)) ;
    for (K = Ne, $ = He, c = T; --c >= 0; ) {
      for (f = 0, A = fe[c] % $, G = fe[c] / $ | 0, p = y, b = c + p; b > c; )
        w = H[--p] % $, E = H[p] / $ | 0, d = G * w + E * A, w = A * w + d % $ * $ + j[b] + f, f = (w / K | 0) + (d / $ | 0) + G * E, j[b--] = w % K;
      j[b] = f;
    }
    return f ? ++m : j.splice(0, 1), Z(o, j, m);
  }, r.negated = function() {
    var o = new _(this);
    return o.s = -o.s || null, o;
  }, r.plus = function(o, l) {
    var f, m = this, c = m.s;
    if (o = new _(o, l), l = o.s, !c || !l) return new _(NaN);
    if (c != l)
      return o.s = -l, m.minus(o);
    var b = m.e / F, p = o.e / F, d = m.c, y = o.c;
    if (!b || !p) {
      if (!d || !y) return new _(c / 0);
      if (!d[0] || !y[0]) return y[0] ? o : new _(d[0] ? m : c * 0);
    }
    if (b = Te(b), p = Te(p), d = d.slice(), c = b - p) {
      for (c > 0 ? (p = b, f = y) : (c = -c, f = d), f.reverse(); c--; f.push(0)) ;
      f.reverse();
    }
    for (c = d.length, l = y.length, c - l < 0 && (f = y, y = d, d = f, l = c), c = 0; l; )
      c = (d[--l] = d[l] + y[l] + c) / Ne | 0, d[l] = Ne === d[l] ? 0 : d[l] % Ne;
    return c && (d = [c].concat(d), ++p), Z(o, d, p);
  }, r.precision = r.sd = function(o, l) {
    var f, m, c, b = this;
    if (o != null && o !== !!o)
      return ie(o, 1, Ee), l == null ? l = s : ie(l, 0, 8), D(new _(b), o, l);
    if (!(f = b.c)) return null;
    if (c = f.length - 1, m = c * F + 1, c = f[c]) {
      for (; c % 10 == 0; c /= 10, m--) ;
      for (c = f[0]; c >= 10; c /= 10, m++) ;
    }
    return o && b.e + 1 > m && (m = b.e + 1), m;
  }, r.shiftedBy = function(o) {
    return ie(o, -9007199254740991, Zi), this.times("1e" + o);
  }, r.squareRoot = r.sqrt = function() {
    var o, l, f, m, c, b = this, p = b.c, d = b.s, y = b.e, w = a + 4, E = new _("0.5");
    if (d !== 1 || !p || !p[0])
      return new _(!d || d < 0 && (!p || p[0]) ? NaN : p ? b : 1 / 0);
    if (d = Math.sqrt(+B(b)), d == 0 || d == 1 / 0 ? (l = _e(p), (l.length + y) % 2 == 0 && (l += "0"), d = Math.sqrt(+l), y = Te((y + 1) / 2) - (y < 0 || y % 2), d == 1 / 0 ? l = "5e" + y : (l = d.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + y), f = new _(l)) : f = new _(d + ""), f.c[0]) {
      for (y = f.e, d = y + w, d < 3 && (d = 0); ; )
        if (c = f, f = E.times(c.plus(e(b, c, w, 1))), _e(c.c).slice(0, d) === (l = _e(f.c)).slice(0, d))
          if (f.e < y && --d, l = l.slice(d - 3, d + 1), l == "9999" || !m && l == "4999") {
            if (!m && (D(c, c.e + a + 2, 0), c.times(c).eq(b))) {
              f = c;
              break;
            }
            w += 4, d += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (D(f, f.e + a + 2, 1), o = !f.times(f).eq(b));
            break;
          }
    }
    return D(f, f.e + a + 1, s, o);
  }, r.toExponential = function(o, l) {
    return o != null && (ie(o, 0, Ee), o++), P(this, o, l, 1);
  }, r.toFixed = function(o, l) {
    return o != null && (ie(o, 0, Ee), o = o + this.e + 1), P(this, o, l);
  }, r.toFormat = function(o, l, f) {
    var m, c = this;
    if (f == null)
      o != null && l && typeof l == "object" ? (f = l, l = null) : o && typeof o == "object" ? (f = o, o = l = null) : f = C;
    else if (typeof f != "object")
      throw Error(ye + "Argument not an object: " + f);
    if (m = c.toFixed(o, l), c.c) {
      var b, p = m.split("."), d = +f.groupSize, y = +f.secondaryGroupSize, w = f.groupSeparator || "", E = p[0], T = p[1], A = c.s < 0, G = A ? E.slice(1) : E, j = G.length;
      if (y && (b = d, d = y, y = b, j -= b), d > 0 && j > 0) {
        for (b = j % d || d, E = G.substr(0, b); b < j; b += d) E += w + G.substr(b, d);
        y > 0 && (E += w + G.slice(b)), A && (E = "-" + E);
      }
      m = T ? E + (f.decimalSeparator || "") + ((y = +f.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : T) : E;
    }
    return (f.prefix || "") + m + (f.suffix || "");
  }, r.toFraction = function(o) {
    var l, f, m, c, b, p, d, y, w, E, T, A, G = this, j = G.c;
    if (o != null && (d = new _(o), !d.isInteger() && (d.c || d.s !== 1) || d.lt(u)))
      throw Error(ye + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + B(d));
    if (!j) return new _(G);
    for (l = new _(u), w = f = new _(u), m = y = new _(u), A = _e(j), b = l.e = A.length - G.e - 1, l.c[0] = ti[(p = b % F) < 0 ? F + p : p], o = !o || d.comparedTo(l) > 0 ? b > 0 ? l : w : d, p = S, S = 1 / 0, d = new _(A), y.c[0] = 0; E = e(d, l, 0, 1), c = f.plus(E.times(m)), c.comparedTo(o) != 1; )
      f = m, m = c, w = y.plus(E.times(c = w)), y = c, l = d.minus(E.times(c = l)), d = c;
    return c = e(o.minus(f), m, 0, 1), y = y.plus(c.times(w)), f = f.plus(c.times(m)), y.s = w.s = G.s, b = b * 2, T = e(w, m, b, s).minus(G).abs().comparedTo(
      e(y, f, b, s).minus(G).abs()
    ) < 1 ? [w, m] : [y, f], S = p, T;
  }, r.toNumber = function() {
    return +B(this);
  }, r.toPrecision = function(o, l) {
    return o != null && ie(o, 1, Ee), P(this, o, l, 2);
  }, r.toString = function(o) {
    var l, f = this, m = f.s, c = f.e;
    return c === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (o == null ? l = c <= g || c >= h ? Ct(_e(f.c), c) : ze(_e(f.c), c, "0") : o === 10 && I ? (f = D(new _(f), a + c + 1, s), l = ze(_e(f.c), f.e, "0")) : (ie(o, 2, O.length, "Base"), l = t(ze(_e(f.c), c, "0"), 10, o, m, !0)), m < 0 && f.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return B(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && _.set(i), _;
}
function Te(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function _e(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = F - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function $e(i, e) {
  var t, n, r = i.c, u = e.c, a = i.s, s = e.s, g = i.e, h = e.e;
  if (!a || !s) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -s : a;
  if (a != s) return a;
  if (t = a < 0, n = g == h, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return g > h ^ t ? 1 : -1;
  for (s = (g = r.length) < (h = u.length) ? g : h, a = 0; a < s; a++) if (r[a] != u[a]) return r[a] > u[a] ^ t ? 1 : -1;
  return g == h ? 0 : g > h ^ t ? 1 : -1;
}
function ie(i, e, t, n) {
  if (i < e || i > t || i !== xe(i))
    throw Error(ye + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Nt(i) {
  var e = i.c.length - 1;
  return Te(i.e / F) == e && i.c[e] % 2 != 0;
}
function Ct(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function ze(i, e, t) {
  var n, r;
  if (e < 0) {
    for (r = t + "."; ++e; r += t) ;
    i = r + i;
  } else if (n = i.length, ++e > n) {
    for (r = t, e -= n; --e; r += t) ;
    i += r;
  } else e < n && (i = i.slice(0, e) + "." + i.slice(e));
  return i;
}
var Ae = gn(), ls = class {
  constructor(i) {
    R(this, "key");
    R(this, "left", null);
    R(this, "right", null);
    this.key = i;
  }
}, yt = class extends ls {
  constructor(i) {
    super(i);
  }
}, us = class {
  constructor() {
    R(this, "size", 0);
    R(this, "modificationCount", 0);
    R(this, "splayCount", 0);
  }
  splay(i) {
    const e = this.root;
    if (e == null)
      return this.compare(i, i), -1;
    let t = null, n = null, r = null, u = null, a = e;
    const s = this.compare;
    let g;
    for (; ; )
      if (g = s(a.key, i), g > 0) {
        let h = a.left;
        if (h == null || (g = s(h.key, i), g > 0 && (a.left = h.right, h.right = a, a = h, h = a.left, h == null)))
          break;
        t == null ? n = a : t.left = a, t = a, a = h;
      } else if (g < 0) {
        let h = a.right;
        if (h == null || (g = s(h.key, i), g < 0 && (a.right = h.left, h.left = a, a = h, h = a.right, h == null)))
          break;
        r == null ? u = a : r.right = a, r = a, a = h;
      } else
        break;
    return r != null && (r.right = a.left, a.left = u), t != null && (t.left = a.right, a.right = n), this.root !== a && (this.root = a, this.splayCount++), g;
  }
  splayMin(i) {
    let e = i, t = e.left;
    for (; t != null; ) {
      const n = t;
      e.left = n.right, n.right = e, e = n, t = e.left;
    }
    return e;
  }
  splayMax(i) {
    let e = i, t = e.right;
    for (; t != null; ) {
      const n = t;
      e.right = n.left, n.left = e, e = n, t = e.right;
    }
    return e;
  }
  _delete(i) {
    if (this.root == null || this.splay(i) != 0) return null;
    let t = this.root;
    const n = t, r = t.left;
    if (this.size--, r == null)
      this.root = t.right;
    else {
      const u = t.right;
      t = this.splayMax(r), t.right = u, this.root = t;
    }
    return this.modificationCount++, n;
  }
  addNewRoot(i, e) {
    this.size++, this.modificationCount++;
    const t = this.root;
    if (t == null) {
      this.root = i;
      return;
    }
    e < 0 ? (i.left = t, i.right = t.right, t.right = null) : (i.right = t, i.left = t.left, t.left = null), this.root = i;
  }
  _first() {
    const i = this.root;
    return i == null ? null : (this.root = this.splayMin(i), this.root);
  }
  _last() {
    const i = this.root;
    return i == null ? null : (this.root = this.splayMax(i), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(i) {
    return this.validKey(i) && this.splay(i) == 0;
  }
  defaultCompare() {
    return (i, e) => i < e ? -1 : i > e ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (i) => {
        this.root = i;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (i) => {
        this.splayCount = i;
      },
      splay: (i) => this.splay(i),
      has: (i) => this.has(i)
    };
  }
}, tn, nn, zt = class vt extends us {
  constructor(t, n) {
    super();
    R(this, "root", null);
    R(this, "compare");
    R(this, "validKey");
    R(this, tn, "[object Set]");
    this.compare = t ?? this.defaultCompare(), this.validKey = n ?? ((r) => r != null && r != null);
  }
  delete(t) {
    return this.validKey(t) ? this._delete(t) != null : !1;
  }
  deleteAll(t) {
    for (const n of t)
      this.delete(n);
  }
  forEach(t) {
    const n = this[Symbol.iterator]();
    let r;
    for (; r = n.next(), !r.done; )
      t(r.value, r.value, this);
  }
  add(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new yt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new yt(t), n), this.root.key;
  }
  addAll(t) {
    for (const n of t)
      this.add(n);
  }
  isEmpty() {
    return this.root == null;
  }
  isNotEmpty() {
    return this.root != null;
  }
  single() {
    if (this.size == 0) throw "Bad state: No element";
    if (this.size > 1) throw "Bad state: Too many element";
    return this.root.key;
  }
  first() {
    if (this.size == 0) throw "Bad state: No element";
    return this._first().key;
  }
  last() {
    if (this.size == 0) throw "Bad state: No element";
    return this._last().key;
  }
  lastBefore(t) {
    if (t == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(t) < 0) return this.root.key;
    let r = this.root.left;
    if (r == null) return null;
    let u = r.right;
    for (; u != null; )
      r = u, u = r.right;
    return r.key;
  }
  firstAfter(t) {
    if (t == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(t) > 0) return this.root.key;
    let r = this.root.right;
    if (r == null) return null;
    let u = r.left;
    for (; u != null; )
      r = u, u = r.left;
    return r.key;
  }
  retainAll(t) {
    const n = new vt(this.compare, this.validKey), r = this.modificationCount;
    for (const u of t) {
      if (r != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && n.add(this.root.key);
    }
    n.size != this.size && (this.root = n.root, this.size = n.size, this.modificationCount++);
  }
  lookup(t) {
    return !this.validKey(t) || this.splay(t) != 0 ? null : this.root.key;
  }
  intersection(t) {
    const n = new vt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new vt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new vt(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, a) {
      let s, g;
      do {
        if (s = u.left, g = u.right, s != null) {
          const h = new yt(s.key);
          a.left = h, n(s, h);
        }
        if (g != null) {
          const h = new yt(g.key);
          a.right = h, u = g, a = h;
        }
      } while (g != null);
    }
    const r = new yt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new fs(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(nn = Symbol.iterator, tn = Symbol.toStringTag, nn)]() {
    return new as(this.wrap());
  }
}, mn = class {
  constructor(i) {
    R(this, "tree");
    R(this, "path", new Array());
    R(this, "modificationCount", null);
    R(this, "splayCount");
    this.tree = i, this.splayCount = i.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const i = this.path[this.path.length - 1];
    return this.getValue(i);
  }
  rebuildPath(i) {
    this.path.splice(0, this.path.length), this.tree.splay(i), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(i) {
    for (; i != null; )
      this.path.push(i), i = i.left;
  }
  moveNext() {
    if (this.modificationCount != this.tree.getModificationCount()) {
      if (this.modificationCount == null) {
        this.modificationCount = this.tree.getModificationCount();
        let t = this.tree.getRoot();
        for (; t != null; )
          this.path.push(t), t = t.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let i = this.path[this.path.length - 1], e = i.right;
    if (e != null) {
      for (; e != null; )
        this.path.push(e), e = e.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === i; )
      i = this.path.pop();
    return this.path.length > 0;
  }
}, as = class extends mn {
  getValue(i) {
    return i.key;
  }
}, fs = class extends mn {
  getValue(i) {
    return [i.key, i.key];
  }
}, pn = (i) => () => i, oi = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : pn(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function cs(i) {
  const e = i ? (t, n, r, u, a) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : pn(!1);
  return (t, n, r) => {
    const u = t.x, a = t.y, s = r.x, g = r.y, h = a.minus(g).times(n.x.minus(s)).minus(u.minus(s).times(n.y.minus(g)));
    return e(h, u, a, s, g) ? 0 : h.comparedTo(0);
  };
}
var hs = (i) => i, ds = (i) => {
  if (i) {
    const e = new zt(oi(i)), t = new zt(oi(i)), n = (u, a) => a.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new Ae(0), y: new Ae(0) }), r;
  }
  return hs;
}, li = (i) => ({
  set: (e) => {
    Ue = li(e);
  },
  reset: () => li(i),
  compare: oi(i),
  snap: ds(i),
  orient: cs(i)
}), Ue = li(), bt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), ui = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Pt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), yn = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), Wt = (i) => yn(i, i).sqrt(), gs = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Pt(r, n).div(Wt(r)).div(Wt(n));
}, ms = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return yn(r, n).div(Wt(r)).div(Wt(n));
}, Ki = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, Yi = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, ps = (i, e, t, n) => {
  if (e.x.isZero()) return Yi(t, n, i.x);
  if (n.x.isZero()) return Yi(i, e, t.x);
  if (e.y.isZero()) return Ki(t, n, i.y);
  if (n.y.isZero()) return Ki(i, e, t.y);
  const r = Pt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, a = Pt(u, e).div(r), s = Pt(u, n).div(r), g = i.x.plus(s.times(e.x)), h = t.x.plus(a.times(n.x)), v = i.y.plus(s.times(e.y)), S = t.y.plus(a.times(n.y)), M = g.plus(h).div(2), k = v.plus(S).div(2);
  return { x: M, y: k };
}, Pe = class bn {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    R(this, "point");
    R(this, "isLeft");
    R(this, "segment");
    R(this, "otherSE");
    R(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = bn.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : Ft.compare(e.segment, t.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, t) {
    return e.x.isLessThan(t.x) ? -1 : e.x.isGreaterThan(t.x) ? 1 : e.y.isLessThan(t.y) ? -1 : e.y.isGreaterThan(t.y) ? 1 : 0;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const t = e.point.events;
    for (let n = 0, r = t.length; n < r; n++) {
      const u = t[n];
      this.point.events.push(u), u.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let t = 0; t < e; t++) {
      const n = this.point.events[t];
      if (n.segment.consumedBy === void 0)
        for (let r = t + 1; r < e; r++) {
          const u = this.point.events[r];
          u.consumedBy === void 0 && n.otherSE.point.events === u.otherSE.point.events && n.segment.consume(u.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let t = 0, n = this.point.events.length; t < n; t++) {
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
    const t = /* @__PURE__ */ new Map(), n = (r) => {
      const u = r.otherSE;
      t.set(r, {
        sine: gs(this.point, e.point, u.point),
        cosine: ms(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: a, cosine: s } = t.get(r), { sine: g, cosine: h } = t.get(u);
      return a.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? s.isLessThan(h) ? 1 : s.isGreaterThan(h) ? -1 : 0 : a.isLessThan(0) && g.isLessThan(0) ? s.isLessThan(h) ? -1 : s.isGreaterThan(h) ? 1 : 0 : g.isLessThan(a) ? -1 : g.isGreaterThan(a) ? 1 : 0;
    };
  }
}, ys = class ai {
  constructor(e) {
    R(this, "events");
    R(this, "poly");
    R(this, "_isExteriorRing");
    R(this, "_enclosingRing");
    this.events = e;
    for (let t = 0, n = e.length; t < n; t++)
      e[t].segment.ringOut = this;
    this.poly = null;
  }
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const u = e[n];
      if (!u.isInResult() || u.ringOut) continue;
      let a = null, s = u.leftSE, g = u.rightSE;
      const h = [s], v = s.point, S = [];
      for (; a = s, s = g, h.push(s), s.point !== v; )
        for (; ; ) {
          const M = s.getAvailableLinkedEvents();
          if (M.length === 0) {
            const C = h[0].point, O = h[h.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${C.x}, ${C.y}]. Last matching segment found ends at [${O.x}, ${O.y}].`
            );
          }
          if (M.length === 1) {
            g = M[0].otherSE;
            break;
          }
          let k = null;
          for (let C = 0, O = S.length; C < O; C++)
            if (S[C].point === s.point) {
              k = C;
              break;
            }
          if (k !== null) {
            const C = S.splice(k)[0], O = h.splice(C.index);
            O.unshift(O[0].otherSE), t.push(new ai(O.reverse()));
            continue;
          }
          S.push({
            index: h.length,
            point: s.point
          });
          const N = s.getLeftmostComparator(a);
          g = M.sort(N)[0].otherSE;
          break;
        }
      t.push(new ai(h));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let h = 1, v = this.events.length - 1; h < v; h++) {
      const S = this.events[h].point, M = this.events[h + 1].point;
      Ue.orient(S, e, M) !== 0 && (t.push(S), e = S);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    Ue.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, s = this.isExteriorRing() ? t.length : -1, g = [];
    for (let h = a; h != s; h += u)
      g.push([t[h].x.toNumber(), t[h].y.toNumber()]);
    return g;
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
    var r, u;
    let e = this.events[0];
    for (let a = 1, s = this.events.length; a < s; a++) {
      const g = this.events[a];
      Pe.compare(e, g) > 0 && (e = g);
    }
    let t = e.segment.prevInResult(), n = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!n) return t.ringOut;
      if (n.ringOut !== t.ringOut)
        return ((r = n.ringOut) == null ? void 0 : r.enclosingRing()) !== t.ringOut ? t.ringOut : (u = t.ringOut) == null ? void 0 : u.enclosingRing();
      t = n.prevInResult(), n = t ? t.prevInResult() : null;
    }
  }
}, Qi = class {
  constructor(i) {
    R(this, "exteriorRing");
    R(this, "interiorRings");
    this.exteriorRing = i, i.poly = this, this.interiorRings = [];
  }
  addInterior(i) {
    this.interiorRings.push(i), i.poly = this;
  }
  getGeom() {
    const i = this.exteriorRing.getGeom();
    if (i === null) return null;
    const e = [i];
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}, bs = class {
  constructor(i) {
    R(this, "rings");
    R(this, "polys");
    this.rings = i, this.polys = this._composePolys(i);
  }
  getGeom() {
    const i = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const n = this.polys[e].getGeom();
      n !== null && i.push(n);
    }
    return i;
  }
  _composePolys(i) {
    var t;
    const e = [];
    for (let n = 0, r = i.length; n < r; n++) {
      const u = i[n];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new Qi(u));
        else {
          const a = u.enclosingRing();
          a != null && a.poly || e.push(new Qi(a)), (t = a == null ? void 0 : a.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, vs = class {
  constructor(i, e = Ft.compare) {
    R(this, "queue");
    R(this, "tree");
    R(this, "segments");
    this.queue = i, this.tree = new zt(e), this.segments = [];
  }
  process(i) {
    const e = i.segment, t = [];
    if (i.consumedBy)
      return i.isLeft ? this.queue.delete(i.otherSE) : this.tree.delete(e), t;
    i.isLeft && this.tree.add(e);
    let n = e, r = e;
    do
      n = this.tree.lastBefore(n);
    while (n != null && n.consumedBy != null);
    do
      r = this.tree.firstAfter(r);
    while (r != null && r.consumedBy != null);
    if (i.isLeft) {
      let u = null;
      if (n) {
        const s = n.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (u = s), !n.isAnEndpoint(s))) {
          const g = this._splitSafely(n, s);
          for (let h = 0, v = g.length; h < v; h++)
            t.push(g[h]);
        }
      }
      let a = null;
      if (r) {
        const s = r.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (a = s), !r.isAnEndpoint(s))) {
          const g = this._splitSafely(r, s);
          for (let h = 0, v = g.length; h < v; h++)
            t.push(g[h]);
        }
      }
      if (u !== null || a !== null) {
        let s = null;
        u === null ? s = a : a === null ? s = u : s = Pe.comparePoints(
          u,
          a
        ) <= 0 ? u : a, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const g = e.split(s);
        for (let h = 0, v = g.length; h < v; h++)
          t.push(g[h]);
      }
      t.length > 0 ? (this.tree.delete(e), t.push(i)) : (this.segments.push(e), e.prev = n);
    } else {
      if (n && r) {
        const u = n.getIntersection(r);
        if (u !== null) {
          if (!n.isAnEndpoint(u)) {
            const a = this._splitSafely(n, u);
            for (let s = 0, g = a.length; s < g; s++)
              t.push(a[s]);
          }
          if (!r.isAnEndpoint(u)) {
            const a = this._splitSafely(r, u);
            for (let s = 0, g = a.length; s < g; s++)
              t.push(a[s]);
          }
        }
      }
      this.tree.delete(e);
    }
    return t;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(i, e) {
    this.tree.delete(i);
    const t = i.rightSE;
    this.queue.delete(t);
    const n = i.split(e);
    return n.push(t), i.consumedBy === void 0 && this.tree.add(i), n;
  }
}, ws = class {
  constructor() {
    R(this, "type");
    R(this, "numMultiPolys");
  }
  run(i, e, t) {
    wt.type = i;
    const n = [new Ji(e, !0)];
    for (let h = 0, v = t.length; h < v; h++)
      n.push(new Ji(t[h], !1));
    if (wt.numMultiPolys = n.length, wt.type === "difference") {
      const h = n[0];
      let v = 1;
      for (; v < n.length; )
        ui(n[v].bbox, h.bbox) !== null ? v++ : n.splice(v, 1);
    }
    if (wt.type === "intersection")
      for (let h = 0, v = n.length; h < v; h++) {
        const S = n[h];
        for (let M = h + 1, k = n.length; M < k; M++)
          if (ui(S.bbox, n[M].bbox) === null) return [];
      }
    const r = new zt(Pe.compare);
    for (let h = 0, v = n.length; h < v; h++) {
      const S = n[h].getSweepEvents();
      for (let M = 0, k = S.length; M < k; M++)
        r.add(S[M]);
    }
    const u = new vs(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const h = u.process(a);
      for (let v = 0, S = h.length; v < S; v++) {
        const M = h[v];
        M.consumedBy === void 0 && r.add(M);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    Ue.reset();
    const s = ys.factory(u.segments);
    return new bs(s).getGeom();
  }
}, wt = new ws(), Dt = wt, Es = 0, Ft = class At {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    R(this, "id");
    R(this, "leftSE");
    R(this, "rightSE");
    R(this, "rings");
    R(this, "windings");
    R(this, "ringOut");
    R(this, "consumedBy");
    R(this, "prev");
    R(this, "_prevInResult");
    R(this, "_beforeState");
    R(this, "_afterState");
    R(this, "_isInResult");
    this.id = ++Es, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
  }
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
    const n = e.leftSE.point.x, r = t.leftSE.point.x, u = e.rightSE.point.x, a = t.rightSE.point.x;
    if (a.isLessThan(n)) return 1;
    if (u.isLessThan(r)) return -1;
    const s = e.leftSE.point.y, g = t.leftSE.point.y, h = e.rightSE.point.y, v = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (g.isLessThan(s) && g.isLessThan(h)) return 1;
      if (g.isGreaterThan(s) && g.isGreaterThan(h)) return -1;
      const S = e.comparePoint(t.leftSE.point);
      if (S < 0) return 1;
      if (S > 0) return -1;
      const M = t.comparePoint(e.rightSE.point);
      return M !== 0 ? M : -1;
    }
    if (n.isGreaterThan(r)) {
      if (s.isLessThan(g) && s.isLessThan(v)) return -1;
      if (s.isGreaterThan(g) && s.isGreaterThan(v)) return 1;
      const S = t.comparePoint(e.leftSE.point);
      if (S !== 0) return S;
      const M = e.comparePoint(t.rightSE.point);
      return M < 0 ? 1 : M > 0 ? -1 : 1;
    }
    if (s.isLessThan(g)) return -1;
    if (s.isGreaterThan(g)) return 1;
    if (u.isLessThan(a)) {
      const S = t.comparePoint(e.rightSE.point);
      if (S !== 0) return S;
    }
    if (u.isGreaterThan(a)) {
      const S = e.comparePoint(t.rightSE.point);
      if (S < 0) return 1;
      if (S > 0) return -1;
    }
    if (!u.eq(a)) {
      const S = h.minus(s), M = u.minus(n), k = v.minus(g), N = a.minus(r);
      if (S.isGreaterThan(M) && k.isLessThan(N)) return 1;
      if (S.isLessThan(M) && k.isGreaterThan(N)) return -1;
    }
    return u.isGreaterThan(a) ? 1 : u.isLessThan(a) || h.isLessThan(v) ? -1 : h.isGreaterThan(v) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, u, a;
    const s = Pe.comparePoints(e, t);
    if (s < 0)
      r = e, u = t, a = 1;
    else if (s > 0)
      r = t, u = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const g = new Pe(r, !0), h = new Pe(u, !1);
    return new At(g, h, [n], [a]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(e) {
    this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const e = this.leftSE.point.y, t = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: e.isLessThan(t) ? e : t },
      ur: { x: this.rightSE.point.x, y: e.isGreaterThan(t) ? e : t }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x.minus(this.leftSE.point.x),
      y: this.rightSE.point.y.minus(this.leftSE.point.y)
    };
  }
  isAnEndpoint(e) {
    return e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y) || e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y);
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
    return Ue.orient(this.leftSE.point, e, this.rightSE.point);
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
    const t = this.bbox(), n = e.bbox(), r = ui(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, a = this.rightSE.point, s = e.leftSE.point, g = e.rightSE.point, h = bt(t, s) && this.comparePoint(s) === 0, v = bt(n, u) && e.comparePoint(u) === 0, S = bt(t, g) && this.comparePoint(g) === 0, M = bt(n, a) && e.comparePoint(a) === 0;
    if (v && h)
      return M && !S ? a : !M && S ? g : null;
    if (v)
      return S && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (h)
      return M && a.x.eq(s.x) && a.y.eq(s.y) ? null : s;
    if (M && S) return null;
    if (M) return a;
    if (S) return g;
    const k = ps(u, this.vector(), s, e.vector());
    return k === null || !bt(r, k) ? null : Ue.snap(k);
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
    const t = [], n = e.events !== void 0, r = new Pe(e, !0), u = new Pe(e, !1), a = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const s = new At(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return Pe.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(), Pe.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let t = 0, n = this.windings.length; t < n; t++)
      this.windings[t] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let t = this, n = e;
    for (; t.consumedBy; ) t = t.consumedBy;
    for (; n.consumedBy; ) n = n.consumedBy;
    const r = At.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const u = t;
        t = n, n = u;
      }
      if (t.prev === n) {
        const u = t;
        t = n, n = u;
      }
      for (let u = 0, a = n.rings.length; u < a; u++) {
        const s = n.rings[u], g = n.windings[u], h = t.rings.indexOf(s);
        h === -1 ? (t.rings.push(s), t.windings.push(g)) : t.windings[h] += g;
      }
      n.rings = null, n.windings = null, n.consumedBy = t, n.leftSE.consumedBy = t.leftSE, n.rightSE.consumedBy = t.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev)
      this._beforeState = {
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
    const t = this._afterState.rings, n = this._afterState.windings, r = this._afterState.multiPolys;
    for (let s = 0, g = this.rings.length; s < g; s++) {
      const h = this.rings[s], v = this.windings[s], S = t.indexOf(h);
      S === -1 ? (t.push(h), n.push(v)) : n[S] += v;
    }
    const u = [], a = [];
    for (let s = 0, g = t.length; s < g; s++) {
      if (n[s] === 0) continue;
      const h = t[s], v = h.poly;
      if (a.indexOf(v) === -1)
        if (h.isExterior) u.push(v);
        else {
          a.indexOf(v) === -1 && a.push(v);
          const S = u.indexOf(h.poly);
          S !== -1 && u.splice(S, 1);
        }
    }
    for (let s = 0, g = u.length; s < g; s++) {
      const h = u[s].multiPoly;
      r.indexOf(h) === -1 && r.push(h);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (Dt.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === Dt.numMultiPolys && n < r;
        break;
      }
      case "xor": {
        const n = Math.abs(e.length - t.length);
        this._isInResult = n % 2 === 1;
        break;
      }
      case "difference": {
        const n = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = n(e) !== n(t);
        break;
      }
    }
    return this._isInResult;
  }
}, Xi = class {
  constructor(i, e, t) {
    R(this, "poly");
    R(this, "isExterior");
    R(this, "segments");
    R(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = Ue.snap({ x: new Ae(i[0][0]), y: new Ae(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, a = i.length; u < a; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const s = Ue.snap({ x: new Ae(i[u][0]), y: new Ae(i[u][1]) });
      s.x.eq(r.x) && s.y.eq(r.y) || (this.segments.push(Ft.fromRing(r, s, this)), s.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = s.x), s.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = s.y), s.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = s.x), s.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = s.y), r = s);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(Ft.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const n = this.segments[e];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, Ls = class {
  constructor(i, e) {
    R(this, "multiPoly");
    R(this, "exteriorRing");
    R(this, "interiorRings");
    R(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Xi(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new Xi(i[t], this, !1);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.interiorRings.push(r);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const i = this.exteriorRing.getSweepEvents();
    for (let e = 0, t = this.interiorRings.length; e < t; e++) {
      const n = this.interiorRings[e].getSweepEvents();
      for (let r = 0, u = n.length; r < u; r++)
        i.push(n[r]);
    }
    return i;
  }
}, Ji = class {
  constructor(i, e) {
    R(this, "isSubject");
    R(this, "polys");
    R(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof i[0][0][0] == "number" && (i = [i]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new Ae(Number.POSITIVE_INFINITY), y: new Ae(Number.POSITIVE_INFINITY) },
      ur: { x: new Ae(Number.NEGATIVE_INFINITY), y: new Ae(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new Ls(i[t], this);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.polys.push(r);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const n = this.polys[e].getSweepEvents();
      for (let r = 0, u = n.length; r < u; r++)
        i.push(n[r]);
    }
    return i;
  }
}, Ss = (i, ...e) => Dt.run("union", i, e), _s = (i, ...e) => Dt.run("difference", i, e);
Ue.set;
function xs(i) {
  const e = [];
  if (hi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = _s(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ci(n[0], t) : hn(n, t);
}
var Ts = xs;
function Ms(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return rs(i, function(t) {
    e.push(t);
  }), si(e);
}
var Ns = Ms;
function Cs(i, e = {}) {
  const t = [];
  if (hi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Ss(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ci(n[0], e.properties) : hn(n, e.properties);
}
var ks = Cs;
function $i(i, e) {
  const t = Ts(
    si([
      ci([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      i
    ])
  );
  if (!t)
    return;
  t.properties = { isMask: !0 };
  const n = Bt(Vi(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, a = n[2] > 180, s = Ns(i);
  if (s.features.length > 1 && (u || a))
    for (const g of s.features) {
      const h = Bt(Vi(g));
      if (a && h[0] < -180 + r)
        for (const v of g.geometry.coordinates)
          for (const S of v)
            S[0] += 360 - r;
      if (u && h[2] > 180 - r)
        for (const v of g.geometry.coordinates)
          for (const S of v)
            S[0] -= 360 - r;
    }
  e(
    si([
      s.features.length < 2 ? i : ks(s) ?? i,
      t
    ])
  );
}
const en = "EPSG:4326";
function Os(i) {
  var u;
  const e = i.getProperties(), { isMask: t } = e, n = (u = i.getGeometry()) == null ? void 0 : u.getType(), r = t ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new Xn({
    stroke: t ? void 0 : new Ni({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: t ? new Mi({
      color: "#00000020"
    }) : void 0,
    image: new Qn({
      src: `/icons/marker_${e.isReverse ? "reverse" : e.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: e.isSelected ? 2 : e.isReverse ? 0 : 1,
    text: e.isSelected && e.tooltip ? new Jn({
      backgroundFill: new Mi({ color: "white" }),
      text: e.tooltip,
      offsetY: -40,
      backgroundStroke: new Ni({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function Rs(i, e = {}, t = {}, n = Os) {
  let r = -1, u, a, s, g = !1;
  const h = new Hn({
    updateWhileAnimating: !0
  });
  i.addLayer(h);
  const v = new Yn({});
  h.setSource(v), h.setStyle(n), i.on("click", (N) => {
    i.forEachFeatureAtPixel(N.pixel, (C) => {
      const O = C.getId();
      if (O)
        return N.stopPropagation(), a == null || a({ type: "markerClick", id: O }), C;
    });
  }), i.on("pointermove", (N) => {
    const C = i.forEachFeatureAtPixel(N.pixel, (O) => O.getId());
    u !== C && (u && (a == null || a({
      type: "markerMouseLeave",
      id: u
    })), C && (a == null || a({
      type: "markerMouseEnter",
      id: C
    })), i.getTargetElement().style.cursor = C ? "pointer" : g ? "crosshair" : "", u = C);
  });
  function S() {
    return Kn() ?? i.getView().getProjection();
  }
  function M(N) {
    return N.transform(en, S());
  }
  const k = (N) => {
    a == null || a({
      type: "mapClick",
      coordinates: Ti(N.coordinate, S())
    });
  };
  return {
    setEventHandler(N) {
      N ? (a = N, i.on("click", k)) : (a = void 0, i.un("click", k));
    },
    flyTo(N, C) {
      i.getView().animate({
        center: Tt(N, S()),
        ...C ? { zoom: C } : {},
        duration: 2e3,
        ...e
      });
    },
    fitBounds(N, C, O) {
      i.getView().fit(Zn(N, en, S()), {
        padding: [C, C, C, C],
        ...O ? { maxZoom: O } : {},
        duration: 2e3,
        ...t
      });
    },
    indicateReverse(N) {
      g = N, i.getTargetElement().style.cursor = N ? "crosshair" : "";
    },
    setReverseMarker(N) {
      s ? N ? s.getGeometry().setCoordinates(
        Tt(N, S())
      ) : (v.removeFeature(s), s.dispose(), s = void 0) : N && (s = new Ge(
        new Jt(Tt(N, S()))
      ), s.setProperties({ isReverse: !0 }), v.addFeature(s));
    },
    setFeatures(N, C, O) {
      function I(_) {
        var P;
        if (_)
          for (const W of _.features) {
            const Z = W.geometry.type === "Polygon" ? new Li(W.geometry.coordinates) : W.geometry.type === "MultiPolygon" ? new Si(W.geometry.coordinates) : null;
            Z && v.addFeature(
              new Ge({
                isMask: !!((P = W.properties) != null && P.isMask),
                geometry: M(Z)
              })
            );
          }
      }
      v.clear(), s && v.addFeature(s);
      e: if (C) {
        let _ = !1;
        if (C.geometry.type === "GeometryCollection") {
          const P = C.geometry.geometries.map(
            (W) => W.type === "Polygon" ? new Li(W.coordinates) : W.type === "MultiPolygon" ? new Si(W.coordinates) : null
          ).filter((W) => !!W);
          if (P.length > 0)
            v.addFeature(
              new Ge(M(new Vn(P)))
            ), _ = !0;
          else
            for (const W of C.geometry.geometries)
              W.type === "LineString" ? (v.addFeature(
                new Ge(
                  M(new _i(W.coordinates))
                )
              ), _ = !0) : W.type === "MultiLineString" && v.addFeature(
                new Ge(
                  M(new xi(W.coordinates))
                )
              ), _ = !0;
        }
        if (!_) {
          if (C.geometry.type === "Polygon")
            $i(C, I);
          else if (C.geometry.type === "MultiPolygon")
            $i(C, I);
          else if (C.geometry.type === "LineString") {
            v.addFeature(
              new Ge(
                M(new _i(C.geometry.coordinates))
              )
            );
            break e;
          } else if (C.geometry.type === "MultiLineString") {
            v.addFeature(
              new Ge(
                M(new xi(C.geometry.coordinates))
              )
            );
            break e;
          }
        }
        if (!O && C.geometry.type !== "Point")
          break e;
        v.addFeature(new Ge(M(new Jt(C.center))));
      }
      for (const _ of N ?? []) {
        if (_ === C)
          continue;
        const P = new Ge(
          new Jt(Tt(_.center, S()))
        );
        P.setId(_.id), P.setProperties({
          fuzzy: !!_.matching_text,
          tooltip: _.place_type[0] === "reverse" ? _.place_name : _.place_name.replace(/,.*/, "")
        }), v.addFeature(P);
      }
    },
    setSelectedMarker(N) {
      var I, _, P;
      const C = v.getFeatures(), O = (I = C[0]) != null && I.getProperties().isReverse ? 1 : 0;
      r > -1 && ((_ = C[r + O]) == null || _.setProperties({
        isSelected: !1
      })), N > -1 && ((P = C[N + O]) == null || P.setProperties({
        isSelected: !0
      })), r = N;
    },
    getCenterAndZoom() {
      const N = i.getView(), C = N.getCenter(), O = N.getZoom();
      if (!(!C || O === void 0))
        return [O, ...Ti(C, S())];
    }
  };
}
var ae, tt;
class to extends jn {
  constructor(t) {
    const n = document.createElement("div");
    n.className = "ol-search";
    super({
      element: n,
      target: t.target
    });
    Qt(this, ae);
    Qt(this, tt);
    const { flyTo: r, fullGeometryStyle: u, ...a } = t;
    Xt(this, ae, new ns({
      target: n,
      props: {
        flyTo: r === void 0 ? !0 : !!r,
        ...a
      }
    })), ue(this, ae).$on("select", (s) => {
      this.dispatchEvent(new Ps(s.detail.feature));
    }), ue(this, ae).$on("pick", (s) => {
      this.dispatchEvent(new Gs(s.detail.feature));
    }), ue(this, ae).$on("featureslisted", (s) => {
      this.dispatchEvent(new As(s.detail.features));
    }), ue(this, ae).$on("featuresmarked", (s) => {
      this.dispatchEvent(new Is(s.detail.features));
    }), ue(this, ae).$on("response", (s) => {
      this.dispatchEvent(
        new Ws(s.detail.url, s.detail.featureCollection)
      );
    }), ue(this, ae).$on("optionsvisibilitychange", (s) => {
      this.dispatchEvent(
        new Bs(s.detail.optionsVisible)
      );
    }), ue(this, ae).$on("reversetoggle", (s) => {
      this.dispatchEvent(new Ds(s.detail.reverse));
    }), ue(this, ae).$on("querychange", (s) => {
      this.dispatchEvent(new zs(s.detail.query));
    }), Xt(this, tt, t);
  }
  setMap(t) {
    var n;
    if (super.setMap(t), t) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: r,
        fullGeometryStyle: u
      } = ue(this, tt), a = Rs(
        t,
        typeof r == "boolean" ? void 0 : r,
        typeof r == "boolean" ? void 0 : r,
        // marker,
        // showResultMarkers,
        u
      );
      (n = ue(this, ae)) == null || n.$set({ mapController: a });
    }
  }
  /**
   * Update the control options.
   *
   * @param options options to update
   */
  setOptions(t) {
    var a;
    Object.assign(ue(this, tt), t);
    const { flyTo: n, fullGeometryStyle: r, ...u } = ue(this, tt);
    (a = ue(this, ae)) == null || a.$set({
      ...u,
      flyTo: n === void 0 ? !0 : !!n
    });
  }
  /**
   * Set the content of search input box.
   *
   * @param value text to set
   * @param submit perform the search
   */
  setQuery(t, n = !0) {
    var r;
    (r = ue(this, ae)) == null || r.setQuery(t, n);
  }
  /**
   * Clear geocoding search results from the map.
   */
  clearMap() {
    var t;
    (t = ue(this, ae)) == null || t.clearMap();
  }
  /**
   * Clear search result list.
   */
  clearList() {
    var t;
    (t = ue(this, ae)) == null || t.clearList();
  }
  /**
   * Set reverse geocoding mode.
   *
   * @param reverseActive reverse geocoding active
   */
  setReverseMode(t) {
    var n;
    (n = ue(this, ae)) == null || n.$set({ reverseActive: t });
  }
  /**
   * Focus the search input box.
   *
   * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
   */
  focus(t) {
    var n;
    (n = ue(this, ae)) == null || n.focus(t);
  }
  /**
   * Blur the search input box.
   */
  blur() {
    var t;
    (t = ue(this, ae)) == null || t.blur();
  }
  // onRemove() {
  //   this.#gc?.$destroy();
  // }
}
ae = new WeakMap(), tt = new WeakMap();
class Ps extends Ye {
  constructor(t) {
    super("select");
    R(this, "feature");
    this.feature = t;
  }
}
class As extends Ye {
  constructor(t) {
    super("featureslisted");
    R(this, "features");
    this.features = t;
  }
}
class Is extends Ye {
  constructor(t) {
    super("featuresmarked");
    R(this, "features");
    this.features = t;
  }
}
class Bs extends Ye {
  constructor(t) {
    super("optionsvisibilitychange");
    R(this, "optionsVisible");
    this.optionsVisible = t;
  }
}
class Gs extends Ye {
  constructor(t) {
    super("pick");
    R(this, "feature");
    this.feature = t;
  }
}
class zs extends Ye {
  constructor(t) {
    super("querychange");
    R(this, "query");
    this.query = t;
  }
}
class Ws extends Ye {
  constructor(t, n) {
    super("response");
    R(this, "url");
    R(this, "featureCollection");
    this.url = t, this.featureCollection = n;
  }
}
class Ds extends Ye {
  constructor(t) {
    super("reversetoggle");
    R(this, "reverse");
    this.reverse = t;
  }
}
export {
  As as FeaturesListedEvent,
  Is as FeaturesMarkedEvent,
  to as GeocodingControl,
  Bs as OptionsVisibilityChangeEvent,
  Gs as PickEvent,
  zs as QueryChangeEvent,
  Ws as ResponseEvent,
  Ds as ReverseToggleEvent,
  Ps as SelectEvent,
  Rs as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
