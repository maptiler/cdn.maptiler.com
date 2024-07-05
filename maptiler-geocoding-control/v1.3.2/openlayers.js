var Wh = Object.defineProperty;
var Go = (a) => {
  throw TypeError(a);
};
var Xh = (a, r, i) => r in a ? Wh(a, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[r] = i;
var _t = (a, r, i) => Xh(a, typeof r != "symbol" ? r + "" : r, i), qo = (a, r, i) => r.has(a) || Go("Cannot " + i);
var Nt = (a, r, i) => (qo(a, r, "read from private field"), i ? i.call(a) : r.get(a)), ws = (a, r, i) => r.has(a) ? Go("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(a) : r.set(a, i), ui = (a, r, i, u) => (qo(a, r, "write to private field"), u ? u.call(a, i) : r.set(a, i), i);
import { Control as jh } from "ol/control";
import yn from "ol/events/Event";
import { Feature as jt } from "ol";
import { Point as Ns, Polygon as zo, MultiPolygon as Uo, GeometryCollection as Vh, LineString as Yo, MultiLineString as Wo } from "ol/geom";
import Hh from "ol/layer/Vector";
import { fromLonLat as li, transformExtent as Zh, toLonLat as Xo, getUserProjection as Qh } from "ol/proj";
import Kh from "ol/source/Vector";
import jo from "ol/style/Fill";
import Jh from "ol/style/Icon";
import Vo from "ol/style/Stroke";
import $h from "ol/style/Style";
import eg from "ol/style/Text";
function Ae() {
}
function tg(a, r) {
  for (const i in r) a[i] = r[i];
  return (
    /** @type {T & S} */
    a
  );
}
function hc(a) {
  return a();
}
function Ho() {
  return /* @__PURE__ */ Object.create(null);
}
function en(a) {
  a.forEach(hc);
}
function gc(a) {
  return typeof a == "function";
}
function Rn(a, r) {
  return a != a ? r == r : a !== r || a && typeof a == "object" || typeof a == "function";
}
let ci;
function He(a, r) {
  return a === r ? !0 : (ci || (ci = document.createElement("a")), ci.href = r, a === ci.href);
}
function ng(a) {
  return Object.keys(a).length === 0;
}
function rg(a, r, i, u) {
  if (a) {
    const l = yc(a, r, i, u);
    return a[0](l);
  }
}
function yc(a, r, i, u) {
  return a[1] && u ? tg(i.ctx.slice(), a[1](u(r))) : i.ctx;
}
function ig(a, r, i, u) {
  if (a[2] && u) {
    const l = a[2](u(i));
    if (r.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const f = [], v = Math.max(r.dirty.length, l.length);
      for (let y = 0; y < v; y += 1)
        f[y] = r.dirty[y] | l[y];
      return f;
    }
    return r.dirty | l;
  }
  return r.dirty;
}
function sg(a, r, i, u, l, f) {
  if (l) {
    const v = yc(r, i, u, f);
    a.p(v, l);
  }
}
function ag(a) {
  if (a.ctx.length > 32) {
    const r = [], i = a.ctx.length / 32;
    for (let u = 0; u < i; u++)
      r[u] = -1;
    return r;
  }
  return -1;
}
function Zo(a) {
  return a ?? "";
}
function ve(a, r) {
  a.appendChild(r);
}
function De(a, r, i) {
  a.insertBefore(r, i || null);
}
function Ce(a) {
  a.parentNode && a.parentNode.removeChild(a);
}
function ke(a) {
  return document.createElement(a);
}
function Zt(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function fn(a) {
  return document.createTextNode(a);
}
function ft() {
  return fn(" ");
}
function og() {
  return fn("");
}
function et(a, r, i, u) {
  return a.addEventListener(r, i, u), () => a.removeEventListener(r, i, u);
}
function ug(a) {
  return function(r) {
    return r.preventDefault(), a.call(this, r);
  };
}
function Y(a, r, i) {
  i == null ? a.removeAttribute(r) : a.getAttribute(r) !== i && a.setAttribute(r, i);
}
function lg(a) {
  return Array.from(a.childNodes);
}
function Yr(a, r) {
  r = "" + r, a.data !== r && (a.data = /** @type {string} */
  r);
}
function Qo(a, r) {
  a.value = r ?? "";
}
function on(a, r, i) {
  a.classList.toggle(r, !!i);
}
function cg(a, r, { bubbles: i = !1, cancelable: u = !1 } = {}) {
  return new CustomEvent(a, { detail: r, bubbles: i, cancelable: u });
}
let Wr;
function Br(a) {
  Wr = a;
}
function vc() {
  if (!Wr) throw new Error("Function called outside component initialization");
  return Wr;
}
function fg(a) {
  vc().$$.on_destroy.push(a);
}
function hg() {
  const a = vc();
  return (r, i, { cancelable: u = !1 } = {}) => {
    const l = a.$$.callbacks[r];
    if (l) {
      const f = cg(
        /** @type {string} */
        r,
        i,
        { cancelable: u }
      );
      return l.slice().forEach((v) => {
        v.call(a, f);
      }), !f.defaultPrevented;
    }
    return !0;
  };
}
function Ko(a, r) {
  const i = a.$$.callbacks[r.type];
  i && i.slice().forEach((u) => u.call(this, r));
}
const er = [], Js = [];
let rr = [];
const Jo = [], gg = /* @__PURE__ */ Promise.resolve();
let $s = !1;
function yg() {
  $s || ($s = !0, gg.then(dc));
}
function ea(a) {
  rr.push(a);
}
const Ls = /* @__PURE__ */ new Set();
let Qn = 0;
function dc() {
  if (Qn !== 0)
    return;
  const a = Wr;
  do {
    try {
      for (; Qn < er.length; ) {
        const r = er[Qn];
        Qn++, Br(r), vg(r.$$);
      }
    } catch (r) {
      throw er.length = 0, Qn = 0, r;
    }
    for (Br(null), er.length = 0, Qn = 0; Js.length; ) Js.pop()();
    for (let r = 0; r < rr.length; r += 1) {
      const i = rr[r];
      Ls.has(i) || (Ls.add(i), i());
    }
    rr.length = 0;
  } while (er.length);
  for (; Jo.length; )
    Jo.pop()();
  $s = !1, Ls.clear(), Br(a);
}
function vg(a) {
  if (a.fragment !== null) {
    a.update(), en(a.before_update);
    const r = a.dirty;
    a.dirty = [-1], a.fragment && a.fragment.p(a.ctx, r), a.after_update.forEach(ea);
  }
}
function dg(a) {
  const r = [], i = [];
  rr.forEach((u) => a.indexOf(u) === -1 ? r.push(u) : i.push(u)), i.forEach((u) => u()), rr = r;
}
const _i = /* @__PURE__ */ new Set();
let Nn;
function Ei() {
  Nn = {
    r: 0,
    c: [],
    p: Nn
    // parent group
  };
}
function ki() {
  Nn.r || en(Nn.c), Nn = Nn.p;
}
function Be(a, r) {
  a && a.i && (_i.delete(a), a.i(r));
}
function Ye(a, r, i, u) {
  if (a && a.o) {
    if (_i.has(a)) return;
    _i.add(a), Nn.c.push(() => {
      _i.delete(a), u && (i && a.d(1), u());
    }), a.o(r);
  } else u && u();
}
function $o(a) {
  return (a == null ? void 0 : a.length) !== void 0 ? a : Array.from(a);
}
function mg(a, r) {
  Ye(a, 1, 1, () => {
    r.delete(a.key);
  });
}
function pg(a, r, i, u, l, f, v, y, m, _, k, p) {
  let x = a.length, S = f.length, b = x;
  const L = {};
  for (; b--; ) L[a[b].key] = b;
  const T = [], O = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), R = [];
  for (b = S; b--; ) {
    const q = p(l, f, b), U = i(q);
    let A = v.get(U);
    A ? R.push(() => A.p(q, r)) : (A = _(U, q), A.c()), O.set(U, T[b] = A), U in L && P.set(U, Math.abs(b - L[U]));
  }
  const B = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function z(q) {
    Be(q, 1), q.m(y, k), v.set(q.key, q), k = q.first, S--;
  }
  for (; x && S; ) {
    const q = T[S - 1], U = a[x - 1], A = q.key, H = U.key;
    q === U ? (k = q.first, x--, S--) : O.has(H) ? !v.has(A) || B.has(A) ? z(q) : M.has(H) ? x-- : P.get(A) > P.get(H) ? (M.add(A), z(q)) : (B.add(H), x--) : (m(U, v), x--);
  }
  for (; x--; ) {
    const q = a[x];
    O.has(q.key) || m(q, v);
  }
  for (; S; ) z(T[S - 1]);
  return en(R), T;
}
function hn(a) {
  a && a.c();
}
function Kt(a, r, i) {
  const { fragment: u, after_update: l } = a.$$;
  u && u.m(r, i), ea(() => {
    const f = a.$$.on_mount.map(hc).filter(gc);
    a.$$.on_destroy ? a.$$.on_destroy.push(...f) : en(f), a.$$.on_mount = [];
  }), l.forEach(ea);
}
function Jt(a, r) {
  const i = a.$$;
  i.fragment !== null && (dg(i.after_update), en(i.on_destroy), i.fragment && i.fragment.d(r), i.on_destroy = i.fragment = null, i.ctx = []);
}
function _g(a, r) {
  a.$$.dirty[0] === -1 && (er.push(a), yg(), a.$$.dirty.fill(0)), a.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Mn(a, r, i, u, l, f, v = null, y = [-1]) {
  const m = Wr;
  Br(a);
  const _ = a.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: Ae,
    not_equal: l,
    bound: Ho(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (m ? m.$$.context : [])),
    // everything else
    callbacks: Ho(),
    dirty: y,
    skip_bound: !1,
    root: r.target || m.$$.root
  };
  v && v(_.root);
  let k = !1;
  if (_.ctx = i ? i(a, r.props || {}, (p, x, ...S) => {
    const b = S.length ? S[0] : x;
    return _.ctx && l(_.ctx[p], _.ctx[p] = b) && (!_.skip_bound && _.bound[p] && _.bound[p](b), k && _g(a, p)), x;
  }) : [], _.update(), k = !0, en(_.before_update), _.fragment = u ? u(_.ctx) : !1, r.target) {
    if (r.hydrate) {
      const p = lg(r.target);
      _.fragment && _.fragment.l(p), p.forEach(Ce);
    } else
      _.fragment && _.fragment.c();
    r.intro && Be(a.$$.fragment), Kt(a, r.target, r.anchor), dc();
  }
  Br(m);
}
class Pn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _t(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _t(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Jt(this, 1), this.$destroy = Ae;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, i) {
    if (!gc(i))
      return Ae;
    const u = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return u.push(i), () => {
      const l = u.indexOf(i);
      l !== -1 && u.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(r) {
    this.$$set && !ng(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const Eg = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Eg);
function kg(a) {
  let r, i;
  return {
    c() {
      r = Zt("svg"), i = Zt("path"), Y(i, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), Y(r, "viewBox", "0 0 14 14"), Y(r, "width", "13"), Y(r, "height", "13"), Y(r, "class", "svelte-en2qvf");
    },
    m(u, l) {
      De(u, r, l), ve(r, i);
    },
    p: Ae,
    i: Ae,
    o: Ae,
    d(u) {
      u && Ce(r);
    }
  };
}
class mc extends Pn {
  constructor(r) {
    super(), Mn(this, r, null, kg, Rn, {});
  }
}
function xg(a) {
  let r, i;
  return {
    c() {
      r = Zt("svg"), i = Zt("path"), Y(i, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), Y(r, "viewBox", "0 0 30 30"), Y(r, "fill", "none"), Y(r, "xmlns", "http://www.w3.org/2000/svg"), Y(r, "class", "svelte-d2loi5");
    },
    m(u, l) {
      De(u, r, l), ve(r, i);
    },
    p: Ae,
    i: Ae,
    o: Ae,
    d(u) {
      u && Ce(r);
    }
  };
}
class pc extends Pn {
  constructor(r) {
    super(), Mn(this, r, null, xg, Rn, {});
  }
}
function Sg(a) {
  let r, i;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*iconsBaseUrl*/
      a[3] + "area.svg") || Y(r, "src", i), Y(
        r,
        "alt",
        /*placeType*/
        a[6]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l);
    },
    p(u, l) {
      l & /*iconsBaseUrl*/
      8 && !He(r.src, i = /*iconsBaseUrl*/
      u[3] + "area.svg") && Y(r, "src", i), l & /*placeType*/
      64 && Y(
        r,
        "alt",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function bg(a) {
  let r, i;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*iconsBaseUrl*/
      a[3] + "reverse.svg") || Y(r, "src", i), Y(
        r,
        "alt",
        /*placeType*/
        a[6]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l);
    },
    p(u, l) {
      l & /*iconsBaseUrl*/
      8 && !He(r.src, i = /*iconsBaseUrl*/
      u[3] + "reverse.svg") && Y(r, "src", i), l & /*placeType*/
      64 && Y(
        r,
        "alt",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function Ig(a) {
  let r, i;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*iconsBaseUrl*/
      a[3] + "poi.svg") || Y(r, "src", i), Y(
        r,
        "alt",
        /*placeType*/
        a[6]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l);
    },
    p(u, l) {
      l & /*iconsBaseUrl*/
      8 && !He(r.src, i = /*iconsBaseUrl*/
      u[3] + "poi.svg") && Y(r, "src", i), l & /*placeType*/
      64 && Y(
        r,
        "alt",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function wg(a) {
  let r, i;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*iconsBaseUrl*/
      a[3] + "postal_code.svg") || Y(r, "src", i), Y(
        r,
        "alt",
        /*placeType*/
        a[6]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l);
    },
    p(u, l) {
      l & /*iconsBaseUrl*/
      8 && !He(r.src, i = /*iconsBaseUrl*/
      u[3] + "postal_code.svg") && Y(r, "src", i), l & /*placeType*/
      64 && Y(
        r,
        "alt",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function Ng(a) {
  let r, i;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*iconsBaseUrl*/
      a[3] + "street.svg") || Y(r, "src", i), Y(
        r,
        "alt",
        /*placeType*/
        a[6]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l);
    },
    p(u, l) {
      l & /*iconsBaseUrl*/
      8 && !He(r.src, i = /*iconsBaseUrl*/
      u[3] + "street.svg") && Y(r, "src", i), l & /*placeType*/
      64 && Y(
        r,
        "alt",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function Lg(a) {
  let r, i;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*iconsBaseUrl*/
      a[3] + "road.svg") || Y(r, "src", i), Y(
        r,
        "alt",
        /*placeType*/
        a[6]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l);
    },
    p(u, l) {
      l & /*iconsBaseUrl*/
      8 && !He(r.src, i = /*iconsBaseUrl*/
      u[3] + "road.svg") && Y(r, "src", i), l & /*placeType*/
      64 && Y(
        r,
        "alt",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function Tg(a) {
  let r, i;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*iconsBaseUrl*/
      a[3] + "housenumber.svg") || Y(r, "src", i), Y(
        r,
        "alt",
        /*placeType*/
        a[6]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l);
    },
    p(u, l) {
      l & /*iconsBaseUrl*/
      8 && !He(r.src, i = /*iconsBaseUrl*/
      u[3] + "housenumber.svg") && Y(r, "src", i), l & /*placeType*/
      64 && Y(
        r,
        "alt",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function Cg(a) {
  let r, i, u, l;
  return {
    c() {
      r = ke("img"), He(r.src, i = /*imageUrl*/
      a[5]) || Y(r, "src", i), Y(
        r,
        "alt",
        /*category*/
        a[4]
      ), Y(r, "class", "svelte-ltkwvy");
    },
    m(f, v) {
      De(f, r, v), u || (l = et(
        r,
        "error",
        /*error_handler*/
        a[14]
      ), u = !0);
    },
    p(f, v) {
      v & /*imageUrl*/
      32 && !He(r.src, i = /*imageUrl*/
      f[5]) && Y(r, "src", i), v & /*category*/
      16 && Y(
        r,
        "alt",
        /*category*/
        f[4]
      );
    },
    d(f) {
      f && Ce(r), u = !1, l();
    }
  };
}
function eu(a) {
  let r, i;
  return {
    c() {
      r = ke("span"), i = fn(
        /*placeType*/
        a[6]
      ), Y(r, "class", "secondary svelte-ltkwvy");
    },
    m(u, l) {
      De(u, r, l), ve(r, i);
    },
    p(u, l) {
      l & /*placeType*/
      64 && Yr(
        i,
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && Ce(r);
    }
  };
}
function Og(a) {
  var q, U;
  let r, i, u, l, f, v, y, m, _ = (
    /*isReverse*/
    (a[7] ? (
      /*feature*/
      a[0].place_name
    ) : (
      /*feature*/
      a[0].place_name.replace(/,.*/, "")
    )) + ""
  ), k, p, x = (
    /*showPlaceType*/
    a[2] === "always" || /*showPlaceType*/
    a[2] && !/*feature*/
    a[0].address && /*feature*/
    ((q = a[0].properties) == null ? void 0 : q.kind) !== "road" && /*feature*/
    ((U = a[0].properties) == null ? void 0 : U.kind) !== "road_relation" && !/*feature*/
    a[0].id.startsWith("address.") && !/*feature*/
    a[0].id.startsWith("postal_code.") && (!/*feature*/
    a[0].id.startsWith("poi.") || !/*imageUrl*/
    a[5]) && !/*isReverse*/
    a[7]
  ), S, b, L = (
    /*isReverse*/
    (a[7] ? "" : (
      /*feature*/
      a[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), T, O, P;
  function R(A, H) {
    var ee, Z;
    return H & /*feature*/
    1 && (i = null), H & /*feature*/
    1 && (u = null), H & /*feature*/
    1 && (l = null), /*imageUrl*/
    A[5] ? Cg : (
      /*feature*/
      A[0].address ? Tg : (
        /*feature*/
        ((ee = A[0].properties) == null ? void 0 : ee.kind) === "road" || /*feature*/
        ((Z = A[0].properties) == null ? void 0 : Z.kind) === "road_relation" ? Lg : (i == null && (i = !!/*feature*/
        A[0].id.startsWith("address.")), i ? Ng : (u == null && (u = !!/*feature*/
        A[0].id.startsWith("postal_code.")), u ? wg : (l == null && (l = !!/*feature*/
        A[0].id.startsWith("poi.")), l ? Ig : (
          /*isReverse*/
          A[7] ? bg : Sg
        ))))
      )
    );
  }
  let B = R(a, -1), M = B(a), z = x && eu(a);
  return {
    c() {
      r = ke("li"), M.c(), f = ft(), v = ke("span"), y = ke("span"), m = ke("span"), k = fn(_), p = ft(), z && z.c(), S = ft(), b = ke("span"), T = fn(L), Y(m, "class", "primary svelte-ltkwvy"), Y(y, "class", "svelte-ltkwvy"), Y(b, "class", "line2 svelte-ltkwvy"), Y(v, "class", "texts svelte-ltkwvy"), Y(r, "tabindex", "0"), Y(
        r,
        "data-selected",
        /*selected*/
        a[1]
      ), Y(r, "class", "svelte-ltkwvy"), on(
        r,
        "selected",
        /*selected*/
        a[1]
      );
    },
    m(A, H) {
      De(A, r, H), M.m(r, null), ve(r, f), ve(r, v), ve(v, y), ve(y, m), ve(m, k), ve(y, p), z && z.m(y, null), ve(v, S), ve(v, b), ve(b, T), O || (P = [
        et(
          r,
          "mouseenter",
          /*mouseenter_handler*/
          a[12]
        ),
        et(
          r,
          "focus",
          /*focus_handler*/
          a[13]
        )
      ], O = !0);
    },
    p(A, [H]) {
      var ee, Z;
      B === (B = R(A, H)) && M ? M.p(A, H) : (M.d(1), M = B(A), M && (M.c(), M.m(r, f))), H & /*feature*/
      1 && _ !== (_ = /*isReverse*/
      (A[7] ? (
        /*feature*/
        A[0].place_name
      ) : (
        /*feature*/
        A[0].place_name.replace(/,.*/, "")
      )) + "") && Yr(k, _), H & /*showPlaceType, feature, imageUrl*/
      37 && (x = /*showPlaceType*/
      A[2] === "always" || /*showPlaceType*/
      A[2] && !/*feature*/
      A[0].address && /*feature*/
      ((ee = A[0].properties) == null ? void 0 : ee.kind) !== "road" && /*feature*/
      ((Z = A[0].properties) == null ? void 0 : Z.kind) !== "road_relation" && !/*feature*/
      A[0].id.startsWith("address.") && !/*feature*/
      A[0].id.startsWith("postal_code.") && (!/*feature*/
      A[0].id.startsWith("poi.") || !/*imageUrl*/
      A[5]) && !/*isReverse*/
      A[7]), x ? z ? z.p(A, H) : (z = eu(A), z.c(), z.m(y, null)) : z && (z.d(1), z = null), H & /*feature*/
      1 && L !== (L = /*isReverse*/
      (A[7] ? "" : (
        /*feature*/
        A[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Yr(T, L), H & /*selected*/
      2 && Y(
        r,
        "data-selected",
        /*selected*/
        A[1]
      ), H & /*selected*/
      2 && on(
        r,
        "selected",
        /*selected*/
        A[1]
      );
    },
    i: Ae,
    o: Ae,
    d(A) {
      A && Ce(r), M.d(), z && z.d(), O = !1, en(P);
    }
  };
}
function Rg(a, r, i) {
  var R;
  let u, l, { feature: f } = r, { selected: v = !1 } = r, { showPlaceType: y } = r, { missingIconsCache: m } = r, { iconsBaseUrl: _ } = r;
  const k = (R = f.properties) == null ? void 0 : R.categories;
  let p, x, S = 0, b = f.place_type[0] === "reverse";
  function L() {
    x && m.add(x), i(10, S++, S);
  }
  function T(B) {
    Ko.call(this, a, B);
  }
  function O(B) {
    Ko.call(this, a, B);
  }
  const P = () => L();
  return a.$$set = (B) => {
    "feature" in B && i(0, f = B.feature), "selected" in B && i(1, v = B.selected), "showPlaceType" in B && i(2, y = B.showPlaceType), "missingIconsCache" in B && i(9, m = B.missingIconsCache), "iconsBaseUrl" in B && i(3, _ = B.iconsBaseUrl);
  }, a.$$.update = () => {
    var B, M, z, q;
    if (a.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        i(11, u--, u), i(4, p = k == null ? void 0 : k[u]), i(5, x = p ? _ + p.replace(/ /g, "_") + ".svg" : void 0);
      while (u > -1 && (!x || m.has(x)));
    a.$$.dirty & /*feature*/
    1 && i(6, l = f.id.startsWith("poi.") ? (M = (B = f.properties) == null ? void 0 : B.categories) == null ? void 0 : M.join(", ") : ((q = (z = f.properties) == null ? void 0 : z.place_type_name) == null ? void 0 : q[0]) ?? f.place_type[0]);
  }, i(11, u = (k == null ? void 0 : k.length) ?? 0), [
    f,
    v,
    y,
    _,
    p,
    x,
    l,
    b,
    L,
    m,
    S,
    u,
    T,
    O,
    P
  ];
}
class Mg extends Pn {
  constructor(r) {
    super(), Mn(this, r, Rg, Og, Rn, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Pg(a) {
  let r;
  return {
    c() {
      r = ke("div"), r.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', Y(r, "class", "svelte-7cmwmc");
    },
    m(i, u) {
      De(i, r, u);
    },
    p: Ae,
    i: Ae,
    o: Ae,
    d(i) {
      i && Ce(r);
    }
  };
}
class Ag extends Pn {
  constructor(r) {
    super(), Mn(this, r, null, Pg, Rn, {});
  }
}
function Dg(a) {
  let r, i;
  return {
    c() {
      r = Zt("svg"), i = Zt("path"), Y(i, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), Y(r, "viewBox", "0 0 60.006 21.412"), Y(r, "width", "14"), Y(r, "height", "20"), Y(r, "class", "svelte-en2qvf");
    },
    m(u, l) {
      De(u, r, l), ve(r, i);
    },
    p: Ae,
    i: Ae,
    o: Ae,
    d(u) {
      u && Ce(r);
    }
  };
}
class Fg extends Pn {
  constructor(r) {
    super(), Mn(this, r, null, Dg, Rn, {});
  }
}
function Bg(a) {
  let r, i, u;
  return {
    c() {
      r = Zt("svg"), i = Zt("circle"), u = Zt("path"), Y(i, "cx", "4.789"), Y(i, "cy", "4.787"), Y(i, "r", "3.85"), Y(i, "class", "svelte-1aq105l"), Y(u, "d", "M12.063 12.063 7.635 7.635"), Y(u, "class", "svelte-1aq105l"), Y(r, "xmlns", "http://www.w3.org/2000/svg"), Y(r, "width", "13"), Y(r, "height", "13"), Y(r, "viewBox", "0 0 13 13"), Y(r, "class", "svelte-1aq105l");
    },
    m(l, f) {
      De(l, r, f), ve(r, i), ve(r, u);
    },
    p: Ae,
    i: Ae,
    o: Ae,
    d(l) {
      l && Ce(r);
    }
  };
}
class Gg extends Pn {
  constructor(r) {
    super(), Mn(this, r, null, Bg, Rn, {});
  }
}
function qg(a, r, i) {
  const u = r[1], l = r[0], f = u - l;
  return a === u && i ? a : ((a - l) % f + f) % f + l;
}
function tu(a) {
  const r = [...a];
  return r[2] < r[0] && (r[2] += 360), r;
}
let Tr;
async function zg(a, r, i) {
  const u = a == null ? void 0 : a.getCenterAndZoom();
  for (const l of r ?? [])
    if (!(u && (l.minZoom != null && l.minZoom > u[0] || l.maxZoom != null && l.maxZoom < u[0]))) {
      if (l.type === "fixed")
        return l.coordinates.join(",");
      e: if (l.type === "client-geolocation") {
        if (Tr && l.cachedLocationExpiry && Tr.time + l.cachedLocationExpiry > Date.now()) {
          if (!Tr.coords)
            break e;
          return Tr.coords;
        }
        let f;
        try {
          return f = await new Promise((v, y) => {
            i.signal.addEventListener("abort", () => {
              y(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (m) => {
                v(
                  [m.coords.longitude, m.coords.latitude].map((_) => _.toFixed(6)).join(",")
                );
              },
              (m) => {
                y(m);
              },
              l
            );
          }), f;
        } catch {
        } finally {
          l.cachedLocationExpiry && (Tr = {
            time: Date.now(),
            coords: f
          });
        }
        if (i.signal.aborted)
          return;
      }
      if (l.type === "server-geolocation")
        return "ip";
      if (u && l.type === "map-center")
        return u[1].toFixed(6) + "," + u[2].toFixed(6);
    }
}
const Ug = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, nu = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, ru = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, iu = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, su = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, au = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Yg(a) {
  if (!["DMS", "DM", "DD"].includes(a))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const r = this.decimalCoordinates.split(",").map((S) => Number(S.trim())), i = Number(r[0]), u = Number(r[1]), l = Math.abs(i), f = Math.abs(u), v = i > 0 ? "N" : "S", y = u > 0 ? "E" : "W";
    let m;
    a == "DD" && (m = `${l}° ${v}, ${f}° ${y}`);
    const _ = Math.floor(l), k = Math.floor(f), p = (l - _) * 60, x = (f - k) * 60;
    if (a == "DM") {
      let S = ou(p, 3).toFixed(3).padStart(6, "0"), b = ou(x, 3).toFixed(3).padStart(6, "0");
      S.endsWith(".000") && b.endsWith(".000") && (S = S.replace(/\.000$/, ""), b = b.replace(/\.000$/, "")), m = `${_}° ${S}' ${v}, ${k}° ${b}' ${y}`;
    }
    if (a == "DMS") {
      const S = Math.floor(p), b = Math.floor(x);
      let L = ((p - S) * 60).toFixed(1).padStart(4, "0"), T = ((x - b) * 60).toFixed(1).padStart(4, "0");
      const O = S.toString().padStart(2, "0"), P = b.toString().padStart(2, "0");
      L.endsWith(".0") && T.endsWith(".0") && (L = L.replace(/\.0$/, ""), T = T.replace(/\.0$/, "")), m = `${_}° ${O}' ${L}" ${v}, ${k}° ${P}' ${T}" ${y}`;
    }
    return m;
  } else
    throw new Error("no decimal coordinates to convert");
}
function ou(a, r) {
  const i = Math.pow(10, r);
  return Math.round((a + Number.EPSILON) * i) / i;
}
function Ra(a, r) {
  r || (r = 5), a = a.replace(/\s+/g, " ").trim();
  let i = null, u = null, l = "", f = "", v = null, y = [], m = !1;
  if (Ug.test(a))
    throw new Error("invalid coordinate value");
  if (nu.test(a))
    if (y = nu.exec(a), m = Cr(y), m)
      i = Math.abs(y[1]) + y[2] / 60, Number(y[1]) < 0 && (i *= -1), u = Math.abs(y[3]) + y[4] / 60, Number(y[3]) < 0 && (u *= -1), v = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (ru.test(a))
    if (y = ru.exec(a), m = Cr(y), m) {
      if (i = y[2], u = y[6], i.includes(",") && (i = i.replace(",", ".")), u.includes(",") && (u = u.replace(",", ".")), v = "DD", Number(Math.round(i)) == Number(i))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(u)) == Number(u))
        throw new Error("integer only coordinate provided");
      y[1] ? (l = y[1], f = y[5]) : y[4] && (l = y[4], f = y[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (iu.test(a))
    if (y = iu.exec(a), m = Cr(y), m)
      i = Math.abs(parseInt(y[2])), y[4] && (i += y[4] / 60, v = "DM"), y[6] && (i += y[6].replace(",", ".") / 3600, v = "DMS"), parseInt(y[2]) < 0 && (i = -1 * i), u = Math.abs(parseInt(y[9])), y[11] && (u += y[11] / 60), y[13] && (u += y[13].replace(",", ".") / 3600), parseInt(y[9]) < 0 && (u = -1 * u), y[1] ? (l = y[1], f = y[8]) : y[7] && (l = y[7], f = y[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (su.test(a))
    if (y = su.exec(a), m = Cr(y), m)
      i = Math.abs(parseInt(y[2])), y[4] && (i += y[4] / 60, v = "DM"), y[6] && (i += y[6] / 3600, v = "DMS"), parseInt(y[2]) < 0 && (i = -1 * i), u = Math.abs(parseInt(y[10])), y[12] && (u += y[12] / 60), y[14] && (u += y[14] / 3600), parseInt(y[10]) < 0 && (u = -1 * u), y[1] ? (l = y[1], f = y[9]) : y[8] && (l = y[8], f = y[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (au.test(a)) {
    if (y = au.exec(a), m = Cr(y), y.filter((_) => _).length <= 5)
      throw new Error("invalid coordinates format");
    if (m)
      i = Math.abs(parseInt(y[2])), y[4] && (i += y[4].replace(",", ".") / 60, v = "DM"), y[6] && (i += y[6].replace(",", ".") / 3600, v = "DMS"), parseInt(y[2]) < 0 && (i = -1 * i), u = Math.abs(parseInt(y[10])), y[12] && (u += y[12].replace(",", ".") / 60), y[14] && (u += y[14].replace(",", ".") / 3600), parseInt(y[10]) < 0 && (u = -1 * u), y[1] ? (l = y[1], f = y[9]) : y[8] && (l = y[8], f = y[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (m) {
    if (Math.abs(u) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(i) >= 90)
      throw new Error("invalid latitude value");
    if (l && !f || !l && f)
      throw new Error("invalid coordinates value");
    if (l && l == f)
      throw new Error("invalid coordinates format");
    i.toString().includes(",") && (i = i.replace(",", ".")), u.toString().includes(",") && (u = u.replace(",", "."));
    let _ = /S|SOUTH/i;
    _.test(l) && i > 0 && (i = -1 * i), _ = /W|WEST/i, _.test(f) && u > 0 && (u = -1 * u);
    const k = y[0].trim();
    let p, x;
    const S = /[,/;\u0020]/g, b = k.match(S);
    if (b == null) {
      const O = Math.floor(a.length / 2);
      p = k.substring(0, O).trim(), x = k.substring(O).trim();
    } else {
      let O;
      b.length % 2 == 1 ? O = Math.floor(b.length / 2) : O = b.length / 2 - 1;
      let P = 0;
      if (O == 0)
        P = k.indexOf(b[0]), p = k.substring(0, P).trim(), x = k.substring(P + 1).trim();
      else {
        let R = 0, B = 0;
        for (; R <= O; )
          P = k.indexOf(b[R], B), B = P + 1, R++;
        p = k.substring(0, P).trim(), x = k.substring(P + 1).trim();
      }
    }
    const L = p.split(".");
    if (L.length == 2 && L[1] == 0 && L[1].length != 2)
      throw new Error("invalid coordinates format");
    const T = x.split(".");
    if (T.length == 2 && T[1] == 0 && T[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(p) || /^\d+$/.test(x))
      throw new Error("degree only coordinate/s provided");
    return i = Number(Number(i).toFixed(r)), u = Number(Number(u).toFixed(r)), Object.freeze({
      verbatimCoordinates: k,
      verbatimLatitude: p,
      verbatimLongitude: x,
      decimalLatitude: i,
      decimalLongitude: u,
      decimalCoordinates: `${i},${u}`,
      originalFormat: v,
      closeEnough: Wg,
      toCoordinateFormat: Yg
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Cr(a) {
  if (!isNaN(a[0]))
    return !1;
  const r = [...a];
  if (r.shift(), r.length % 2 > 0)
    return !1;
  const i = /^[-+]?\d+([\.,]\d+)?$/, u = /[eastsouthnorthwest]+/i, l = r.length / 2;
  for (let f = 0; f < l; f++) {
    const v = r[f], y = r[f + l], m = i.test(v) && i.test(y), _ = u.test(v) && u.test(y), k = v == y;
    if (!(v == null && y == null)) {
      if (v == null || y == null)
        return !1;
      if (m || _ || k)
        continue;
      return !1;
    }
  }
  return !0;
}
function uu(a, r) {
  const i = Math.abs(a - r);
  return Number(i.toFixed(6)) <= 1e-5;
}
function Wg(a) {
  if (!a)
    throw new Error("coords must be provided");
  if (a.includes(",")) {
    const r = a.split(",");
    if (Number(r[0]) == NaN || Number(r[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return uu(this.decimalLatitude, Number(r[0])) && uu(this.decimalLongitude, r[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Xg = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Ra.to = Xg;
const jg = [
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
], Vg = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Hg = [
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
], Zg = [
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
function Qg() {
  const a = [];
  return jg.forEach((r) => {
    r.decimalLatitude ? a.push(r) : a.push({ ...r, ...Vg });
  }), [...a, ...Hg, ...Zg];
}
const Kg = Qg();
Ra.formats = Kg.map((a) => a.verbatimCoordinates);
const Jg = Ra;
function lu(a, r, i) {
  const u = a.slice();
  return u[81] = r[i], u[83] = i, u;
}
function cu(a) {
  let r, i;
  return r = new Ag({}), {
    c() {
      hn(r.$$.fragment);
    },
    m(u, l) {
      Kt(r, u, l), i = !0;
    },
    i(u) {
      i || (Be(r.$$.fragment, u), i = !0);
    },
    o(u) {
      Ye(r.$$.fragment, u), i = !1;
    },
    d(u) {
      Jt(r, u);
    }
  };
}
function fu(a) {
  let r, i, u, l, f;
  return i = new Fg({}), {
    c() {
      r = ke("button"), hn(i.$$.fragment), Y(r, "type", "button"), Y(
        r,
        "title",
        /*reverseButtonTitle*/
        a[9]
      ), Y(r, "class", "svelte-zh3kmv"), on(
        r,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    m(v, y) {
      De(v, r, y), Kt(i, r, null), u = !0, l || (f = et(
        r,
        "click",
        /*click_handler_2*/
        a[67]
      ), l = !0);
    },
    p(v, y) {
      (!u || y[0] & /*reverseButtonTitle*/
      512) && Y(
        r,
        "title",
        /*reverseButtonTitle*/
        v[9]
      ), (!u || y[0] & /*reverseActive*/
      1) && on(
        r,
        "active",
        /*reverseActive*/
        v[0]
      );
    },
    i(v) {
      u || (Be(i.$$.fragment, v), u = !0);
    },
    o(v) {
      Ye(i.$$.fragment, v), u = !1;
    },
    d(v) {
      v && Ce(r), Jt(i), l = !1, f();
    }
  };
}
function $g(a) {
  let r, i = [], u = /* @__PURE__ */ new Map(), l, f, v, y = $o(
    /*listFeatures*/
    a[14]
  );
  const m = (_) => (
    /*feature*/
    _[81].id + /*feature*/
    (_[81].address ? "," + /*feature*/
    _[81].address : "")
  );
  for (let _ = 0; _ < y.length; _ += 1) {
    let k = lu(a, y, _), p = m(k);
    u.set(p, i[_] = hu(p, k));
  }
  return {
    c() {
      r = ke("ul");
      for (let _ = 0; _ < i.length; _ += 1)
        i[_].c();
      Y(r, "class", "svelte-zh3kmv");
    },
    m(_, k) {
      De(_, r, k);
      for (let p = 0; p < i.length; p += 1)
        i[p] && i[p].m(r, null);
      l = !0, f || (v = [
        et(
          r,
          "mouseleave",
          /*mouseleave_handler*/
          a[71]
        ),
        et(
          r,
          "blur",
          /*blur_handler_1*/
          a[72]
        )
      ], f = !0);
    },
    p(_, k) {
      k[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (y = $o(
        /*listFeatures*/
        _[14]
      ), Ei(), i = pg(i, k, m, 1, _, y, u, r, mg, hu, null, lu), ki());
    },
    i(_) {
      if (!l) {
        for (let k = 0; k < y.length; k += 1)
          Be(i[k]);
        l = !0;
      }
    },
    o(_) {
      for (let k = 0; k < i.length; k += 1)
        Ye(i[k]);
      l = !1;
    },
    d(_) {
      _ && Ce(r);
      for (let k = 0; k < i.length; k += 1)
        i[k].d();
      f = !1, en(v);
    }
  };
}
function ey(a) {
  let r, i, u, l, f, v;
  return i = new pc({}), {
    c() {
      r = ke("div"), hn(i.$$.fragment), u = ft(), l = ke("div"), f = fn(
        /*noResultsMessage*/
        a[7]
      ), Y(l, "class", "svelte-zh3kmv"), Y(r, "class", "no-results svelte-zh3kmv");
    },
    m(y, m) {
      De(y, r, m), Kt(i, r, null), ve(r, u), ve(r, l), ve(l, f), v = !0;
    },
    p(y, m) {
      (!v || m[0] & /*noResultsMessage*/
      128) && Yr(
        f,
        /*noResultsMessage*/
        y[7]
      );
    },
    i(y) {
      v || (Be(i.$$.fragment, y), v = !0);
    },
    o(y) {
      Ye(i.$$.fragment, y), v = !1;
    },
    d(y) {
      y && Ce(r), Jt(i);
    }
  };
}
function ty(a) {
  let r = "", i;
  return {
    c() {
      i = fn(r);
    },
    m(u, l) {
      De(u, i, l);
    },
    p: Ae,
    i: Ae,
    o: Ae,
    d(u) {
      u && Ce(i);
    }
  };
}
function ny(a) {
  let r, i, u, l, f, v, y, m, _, k, p;
  return i = new pc({}), m = new mc({}), {
    c() {
      r = ke("div"), hn(i.$$.fragment), u = ft(), l = ke("div"), f = fn(
        /*errorMessage*/
        a[6]
      ), v = ft(), y = ke("button"), hn(m.$$.fragment), Y(l, "class", "svelte-zh3kmv"), Y(y, "class", "svelte-zh3kmv"), Y(r, "class", "error svelte-zh3kmv");
    },
    m(x, S) {
      De(x, r, S), Kt(i, r, null), ve(r, u), ve(r, l), ve(l, f), ve(r, v), ve(r, y), Kt(m, y, null), _ = !0, k || (p = et(
        y,
        "click",
        /*click_handler_3*/
        a[68]
      ), k = !0);
    },
    p(x, S) {
      (!_ || S[0] & /*errorMessage*/
      64) && Yr(
        f,
        /*errorMessage*/
        x[6]
      );
    },
    i(x) {
      _ || (Be(i.$$.fragment, x), Be(m.$$.fragment, x), _ = !0);
    },
    o(x) {
      Ye(i.$$.fragment, x), Ye(m.$$.fragment, x), _ = !1;
    },
    d(x) {
      x && Ce(r), Jt(i), Jt(m), k = !1, p();
    }
  };
}
function hu(a, r) {
  let i, u, l;
  function f() {
    return (
      /*mouseenter_handler*/
      r[69](
        /*i*/
        r[83]
      )
    );
  }
  function v() {
    return (
      /*focus_handler_1*/
      r[70](
        /*feature*/
        r[81]
      )
    );
  }
  return u = new Mg({
    props: {
      feature: (
        /*feature*/
        r[81]
      ),
      showPlaceType: (
        /*showPlaceType*/
        r[10]
      ),
      selected: (
        /*selectedItemIndex*/
        r[15] === /*i*/
        r[83]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        r[20]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        r[12]
      )
    }
  }), u.$on("mouseenter", f), u.$on("focus", v), {
    key: a,
    first: null,
    c() {
      i = og(), hn(u.$$.fragment), this.first = i;
    },
    m(y, m) {
      De(y, i, m), Kt(u, y, m), l = !0;
    },
    p(y, m) {
      r = y;
      const _ = {};
      m[0] & /*listFeatures*/
      16384 && (_.feature = /*feature*/
      r[81]), m[0] & /*showPlaceType*/
      1024 && (_.showPlaceType = /*showPlaceType*/
      r[10]), m[0] & /*selectedItemIndex, listFeatures*/
      49152 && (_.selected = /*selectedItemIndex*/
      r[15] === /*i*/
      r[83]), m[0] & /*iconsBaseUrl*/
      4096 && (_.iconsBaseUrl = /*iconsBaseUrl*/
      r[12]), u.$set(_);
    },
    i(y) {
      l || (Be(u.$$.fragment, y), l = !0);
    },
    o(y) {
      Ye(u.$$.fragment, y), l = !1;
    },
    d(y) {
      y && Ce(i), Jt(u, y);
    }
  };
}
function ry(a) {
  let r, i, u, l, f, v, y, m, _, k, p, x, S, b, L, T, O, P, R, B, M, z = !1;
  f = new Gg({}), p = new mc({});
  let q = (
    /*abortController*/
    a[19] && cu()
  ), U = (
    /*enableReverse*/
    a[5] === !0 && fu(a)
  );
  const A = (
    /*#slots*/
    a[59].default
  ), H = rg(
    A,
    a,
    /*$$scope*/
    a[58],
    null
  ), ee = [ny, ty, ey, $g], Z = [];
  function ae(D, Q) {
    var ie, de;
    return (
      /*error*/
      D[18] ? 0 : (
        /*focusedDelayed*/
        D[16] ? (
          /*listFeatures*/
          ((ie = D[14]) == null ? void 0 : ie.length) === 0 ? 2 : (
            /*focusedDelayed*/
            D[16] && /*listFeatures*/
            ((de = D[14]) != null && de.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(T = ae(a)) && (O = Z[T] = ee[T](a)), {
    c() {
      r = ft(), i = ke("form"), u = ke("div"), l = ke("button"), hn(f.$$.fragment), v = ft(), y = ke("input"), m = ft(), _ = ke("div"), k = ke("button"), hn(p.$$.fragment), x = ft(), q && q.c(), S = ft(), U && U.c(), b = ft(), H && H.c(), L = ft(), O && O.c(), Y(l, "class", "search-button svelte-zh3kmv"), Y(l, "type", "button"), Y(
        y,
        "placeholder",
        /*placeholder*/
        a[8]
      ), Y(
        y,
        "aria-label",
        /*placeholder*/
        a[8]
      ), Y(y, "class", "svelte-zh3kmv"), Y(k, "type", "button"), Y(
        k,
        "title",
        /*clearButtonTitle*/
        a[3]
      ), Y(k, "class", "svelte-zh3kmv"), Y(_, "class", "clear-button-container svelte-zh3kmv"), on(
        _,
        "displayable",
        /*searchValue*/
        a[1] !== ""
      ), Y(u, "class", "input-group svelte-zh3kmv"), Y(i, "tabindex", "0"), Y(i, "class", P = Zo(
        /*className*/
        a[2]
      ) + " svelte-zh3kmv"), on(
        i,
        "can-collapse",
        /*collapsed*/
        a[4] && /*searchValue*/
        a[1] === ""
      );
    },
    m(D, Q) {
      De(D, r, Q), De(D, i, Q), ve(i, u), ve(u, l), Kt(f, l, null), ve(u, v), ve(u, y), a[61](y), Qo(
        y,
        /*searchValue*/
        a[1]
      ), ve(u, m), ve(u, _), ve(_, k), Kt(p, k, null), ve(_, x), q && q.m(_, null), ve(u, S), U && U.m(u, null), ve(u, b), H && H.m(u, null), ve(i, L), ~T && Z[T].m(i, null), R = !0, B || (M = [
        et(
          l,
          "click",
          /*click_handler*/
          a[60]
        ),
        et(
          y,
          "input",
          /*input_1_input_handler*/
          a[62]
        ),
        et(
          y,
          "focus",
          /*focus_handler*/
          a[63]
        ),
        et(
          y,
          "blur",
          /*blur_handler*/
          a[64]
        ),
        et(
          y,
          "keydown",
          /*handleKeyDown*/
          a[22]
        ),
        et(
          y,
          "input",
          /*input_handler*/
          a[65]
        ),
        et(
          k,
          "click",
          /*click_handler_1*/
          a[66]
        ),
        et(i, "submit", ug(
          /*handleOnSubmit*/
          a[21]
        ))
      ], B = !0);
    },
    p(D, Q) {
      (!R || Q[0] & /*placeholder*/
      256) && Y(
        y,
        "placeholder",
        /*placeholder*/
        D[8]
      ), (!R || Q[0] & /*placeholder*/
      256) && Y(
        y,
        "aria-label",
        /*placeholder*/
        D[8]
      ), Q[0] & /*searchValue*/
      2 && y.value !== /*searchValue*/
      D[1] && Qo(
        y,
        /*searchValue*/
        D[1]
      ), (!R || Q[0] & /*clearButtonTitle*/
      8) && Y(
        k,
        "title",
        /*clearButtonTitle*/
        D[3]
      ), /*abortController*/
      D[19] ? q ? Q[0] & /*abortController*/
      524288 && Be(q, 1) : (q = cu(), q.c(), Be(q, 1), q.m(_, null)) : q && (Ei(), Ye(q, 1, 1, () => {
        q = null;
      }), ki()), (!R || Q[0] & /*searchValue*/
      2) && on(
        _,
        "displayable",
        /*searchValue*/
        D[1] !== ""
      ), /*enableReverse*/
      D[5] === !0 ? U ? (U.p(D, Q), Q[0] & /*enableReverse*/
      32 && Be(U, 1)) : (U = fu(D), U.c(), Be(U, 1), U.m(u, b)) : U && (Ei(), Ye(U, 1, 1, () => {
        U = null;
      }), ki()), H && H.p && (!R || Q[1] & /*$$scope*/
      134217728) && sg(
        H,
        A,
        D,
        /*$$scope*/
        D[58],
        R ? ig(
          A,
          /*$$scope*/
          D[58],
          Q,
          null
        ) : ag(
          /*$$scope*/
          D[58]
        ),
        null
      );
      let ie = T;
      T = ae(D), T === ie ? ~T && Z[T].p(D, Q) : (O && (Ei(), Ye(Z[ie], 1, 1, () => {
        Z[ie] = null;
      }), ki()), ~T ? (O = Z[T], O ? O.p(D, Q) : (O = Z[T] = ee[T](D), O.c()), Be(O, 1), O.m(i, null)) : O = null), (!R || Q[0] & /*className*/
      4 && P !== (P = Zo(
        /*className*/
        D[2]
      ) + " svelte-zh3kmv")) && Y(i, "class", P), (!R || Q[0] & /*className, collapsed, searchValue*/
      22) && on(
        i,
        "can-collapse",
        /*collapsed*/
        D[4] && /*searchValue*/
        D[1] === ""
      );
    },
    i(D) {
      R || (Be(z), Be(f.$$.fragment, D), Be(p.$$.fragment, D), Be(q), Be(U), Be(H, D), Be(O), R = !0);
    },
    o(D) {
      Ye(z), Ye(f.$$.fragment, D), Ye(p.$$.fragment, D), Ye(q), Ye(U), Ye(H, D), Ye(O), R = !1;
    },
    d(D) {
      D && (Ce(r), Ce(i)), Jt(f), a[61](null), Jt(p), q && q.d(), U && U.d(), H && H.d(D), ~T && Z[T].d(), B = !1, en(M);
    }
  };
}
function iy(a, r, i) {
  let u, { $$slots: l = {}, $$scope: f } = r, { class: v = void 0 } = r, { apiKey: y } = r, { bbox: m = void 0 } = r, { clearButtonTitle: _ = "clear" } = r, { clearOnBlur: k = !1 } = r, { collapsed: p = !1 } = r, { country: x = void 0 } = r, { debounceSearch: S = 200 } = r, { enableReverse: b = !1 } = r, { errorMessage: L = "Something went wrong…" } = r, { filter: T = () => !0 } = r, { flyTo: O = !0 } = r, { fuzzyMatch: P = !0 } = r, { language: R = void 0 } = r, { limit: B = void 0 } = r, { mapController: M = void 0 } = r, { minLength: z = 2 } = r, { noResultsMessage: q = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = r, { placeholder: U = "Search" } = r, { proximity: A = [{ type: "server-geolocation" }] } = r, { reverseActive: H = b === "always" } = r, { reverseButtonTitle: ee = "toggle reverse geocoding" } = r, { searchValue: Z = "" } = r, { showFullGeometry: ae = !0 } = r, { showPlaceType: D = "ifNeeded" } = r, { showResultsWhileTyping: Q = !0 } = r, { selectFirst: ie = !0 } = r, { flyToSelected: de = !1 } = r, { markerOnSelected: Oe = !0 } = r, { types: Se = void 0 } = r, { excludeTypes: K = !1 } = r, { zoom: Fe = 16 } = r, { maxZoom: we = 18 } = r, { apiUrl: ze = "https://api.maptiler.com/geocoding" } = r, { fetchParameters: fe = {} } = r, { iconsBaseUrl: ht = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.3.2/icons/" } = r, { adjustUrlQuery: mr = () => {
  } } = r;
  function Jr() {
    tt.focus();
  }
  function C() {
    tt.blur();
  }
  function $r(G, Le = !0, Ge = !1) {
    i(1, Z = G), Le ? (i(15, be = -1), Bn()) : (at(!Ge, Ge), setTimeout(() => {
      tt.focus(), tt.select();
    }));
  }
  function xe() {
    i(14, le = void 0), i(55, oe = void 0), i(15, be = -1);
  }
  function J() {
    i(54, Ne = []), i(55, oe = void 0);
  }
  let I = !1, le, Ne, oe, pr = "", tt, be = -1, W, pn = [], Rt, nt, Fn, ue;
  const _n = /* @__PURE__ */ new Set(), st = hg();
  fg(() => {
    M && (M.setEventHandler(void 0), M.indicateReverse(!1), M.setSelectedMarker(-1), M.setMarkers(void 0, void 0));
  });
  function Bn(G) {
    if (nt && (clearTimeout(nt), nt = void 0), be > -1 && le)
      i(55, oe = le[be]), i(1, Z = oe.place_type[0] === "reverse" ? oe.place_name : oe.place_name.replace(/,.*/, "")), i(18, W = void 0), i(54, Ne = void 0), i(15, be = -1);
    else if (Z) {
      const Le = G || !te(Z);
      En(Z, { exact: !0 }).then(() => {
        i(54, Ne = le), i(55, oe = void 0), Le && ge();
      }).catch((Ge) => i(18, W = Ge));
    }
  }
  function te(G) {
    try {
      return Jg(G, 6);
    } catch {
      return !1;
    }
  }
  async function En(G, { byId: Le = !1, exact: Ge = !1 } = {}) {
    i(18, W = void 0), Rt == null || Rt.abort();
    const Qe = new AbortController();
    i(19, Rt = Qe);
    try {
      const he = te(G), Ke = new URLSearchParams();
      if (R !== void 0 && Ke.set("language", Array.isArray(R) ? R.join(",") : R ?? ""), Se && Ke.set("types", Se.join(",")), K && Ke.set("excludeTypes", String(K)), m && Ke.set("bbox", m.map((zn) => zn.toFixed(6)).join(",")), x && Ke.set("country", Array.isArray(x) ? x.join(",") : x), !Le && !he) {
        const zn = await zg(M, A, Qe);
        zn && Ke.set("proximity", zn), (Ge || !Q) && Ke.set("autocomplete", "false"), Ke.set("fuzzyMatch", String(P));
      }
      B !== void 0 && (!he || (Se == null ? void 0 : Se.length) === 1) && Ke.set("limit", String(B)), Ke.set("key", y), mr(Ke);
      const yt = ze + "/" + encodeURIComponent(he ? he.decimalLongitude + "," + he.decimalLatitude : G) + ".json?" + Ke.toString();
      if (yt === pr) {
        Le ? (i(14, le = void 0), i(55, oe = pn[0])) : i(14, le = pn);
        return;
      }
      pr = yt;
      const qn = await fetch(yt, { signal: Qe.signal, ...fe });
      if (!qn.ok)
        throw new Error(await qn.text());
      const tn = await qn.json();
      st("response", { url: yt, featureCollection: tn }), Le ? (i(14, le = void 0), i(55, oe = tn.features[0]), pn = [oe]) : (i(14, le = tn.features.filter(T)), he && le.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + he.decimalLongitude + "_" + he.decimalLatitude,
        text: he.decimalLatitude + ", " + he.decimalLongitude,
        place_name: he.decimalLatitude + ", " + he.decimalLongitude,
        place_type: ["reverse"],
        center: [he.decimalLongitude, he.decimalLatitude],
        bbox: [
          he.decimalLongitude,
          he.decimalLatitude,
          he.decimalLongitude,
          he.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [he.decimalLongitude, he.decimalLatitude]
        }
      }), pn = le, he && tt.focus());
    } catch (he) {
      if (he && typeof he == "object" && "name" in he && he.name === "AbortError")
        return;
      throw he;
    } finally {
      Qe === Rt && i(19, Rt = void 0);
    }
  }
  function ge() {
    var Ge;
    if (!(Ne != null && Ne.length) || !O)
      return;
    const G = [180, 90, -180, -90], Le = !Ne.some((Qe) => !Qe.matching_text);
    for (const Qe of Ne)
      if (Le || !Qe.matching_text)
        for (const he of [0, 1, 2, 3])
          G[he] = Math[he < 2 ? "min" : "max"](G[he], ((Ge = Qe.bbox) == null ? void 0 : Ge[he]) ?? Qe.center[he % 2]);
    M && Ne.length > 0 && (oe && G[0] === G[2] && G[1] === G[3] ? M.flyTo(oe.center, Fe) : M.fitBounds(tu(G), 50, we));
  }
  function se(G) {
    i(0, H = b === "always"), i(14, le = void 0), i(55, oe = void 0), i(15, be = -1), $r(G[1].toFixed(6) + ", " + qg(G[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function as(G) {
    if (!le)
      return;
    let Le = G.key === "ArrowDown" ? 1 : G.key === "ArrowUp" ? -1 : 0;
    Le && (be === (ie ? 0 : -1) && Le === -1 && i(15, be = le.length), i(15, be += Le), be >= le.length && i(15, be = -1), be < 0 && ie && i(15, be = 0), G.preventDefault());
  }
  function at(G = !0, Le = !1) {
    if (i(18, W = void 0), Q || Le) {
      if (nt && clearTimeout(nt), Z.length < z)
        return;
      const Ge = Z;
      nt = window.setTimeout(
        () => {
          En(Ge).catch((Qe) => i(18, W = Qe));
        },
        G ? S : 0
      );
    } else
      i(14, le = void 0), i(18, W = void 0);
  }
  function _r(G) {
    i(55, oe = G), i(1, Z = G.place_name), i(15, be = -1);
  }
  const ne = () => tt.focus();
  function os(G) {
    Js[G ? "unshift" : "push"](() => {
      tt = G, i(17, tt);
    });
  }
  function us() {
    Z = this.value, i(1, Z), i(13, I), i(27, k);
  }
  const Er = () => i(13, I = !0), rt = () => i(13, I = !1), kn = () => at(), gt = () => {
    i(1, Z = ""), tt.focus();
  }, ei = () => i(0, H = !H), Gn = () => i(18, W = void 0), ls = (G) => i(15, be = G), ti = (G) => _r(G), Ut = () => {
    ie || i(15, be = -1);
  }, V = () => {
  };
  return a.$$set = (G) => {
    "class" in G && i(2, v = G.class), "apiKey" in G && i(25, y = G.apiKey), "bbox" in G && i(26, m = G.bbox), "clearButtonTitle" in G && i(3, _ = G.clearButtonTitle), "clearOnBlur" in G && i(27, k = G.clearOnBlur), "collapsed" in G && i(4, p = G.collapsed), "country" in G && i(28, x = G.country), "debounceSearch" in G && i(29, S = G.debounceSearch), "enableReverse" in G && i(5, b = G.enableReverse), "errorMessage" in G && i(6, L = G.errorMessage), "filter" in G && i(30, T = G.filter), "flyTo" in G && i(31, O = G.flyTo), "fuzzyMatch" in G && i(32, P = G.fuzzyMatch), "language" in G && i(33, R = G.language), "limit" in G && i(34, B = G.limit), "mapController" in G && i(35, M = G.mapController), "minLength" in G && i(36, z = G.minLength), "noResultsMessage" in G && i(7, q = G.noResultsMessage), "placeholder" in G && i(8, U = G.placeholder), "proximity" in G && i(37, A = G.proximity), "reverseActive" in G && i(0, H = G.reverseActive), "reverseButtonTitle" in G && i(9, ee = G.reverseButtonTitle), "searchValue" in G && i(1, Z = G.searchValue), "showFullGeometry" in G && i(38, ae = G.showFullGeometry), "showPlaceType" in G && i(10, D = G.showPlaceType), "showResultsWhileTyping" in G && i(39, Q = G.showResultsWhileTyping), "selectFirst" in G && i(11, ie = G.selectFirst), "flyToSelected" in G && i(40, de = G.flyToSelected), "markerOnSelected" in G && i(41, Oe = G.markerOnSelected), "types" in G && i(42, Se = G.types), "excludeTypes" in G && i(43, K = G.excludeTypes), "zoom" in G && i(44, Fe = G.zoom), "maxZoom" in G && i(45, we = G.maxZoom), "apiUrl" in G && i(46, ze = G.apiUrl), "fetchParameters" in G && i(47, fe = G.fetchParameters), "iconsBaseUrl" in G && i(12, ht = G.iconsBaseUrl), "adjustUrlQuery" in G && i(48, mr = G.adjustUrlQuery), "$$scope" in G && i(58, f = G.$$scope);
  }, a.$$.update = () => {
    if (a.$$.dirty[0] & /*enableReverse*/
    32 && i(0, H = b === "always"), a.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      i(16, Fn = I), k && !I && i(1, Z = "");
    }), a.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | a.$$.dirty[1] & /*minLength*/
    32 && Z.length < z && (i(55, oe = void 0), i(14, le = void 0), i(18, W = void 0), i(54, Ne = le)), a.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && ae && oe && !oe.address && oe.geometry.type === "Point" && oe.place_type[0] !== "reverse" && En(oe.id, { byId: !0 }).catch((G) => i(18, W = G)), a.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (M && oe && oe.id !== ue && O && (!oe.bbox || oe.bbox[0] === oe.bbox[2] && oe.bbox[1] === oe.bbox[3] ? M.flyTo(oe.center, oe.id.startsWith("poi.") || oe.id.startsWith("address.") ? we : Fe) : M.fitBounds(tu(oe.bbox), 50, we), i(14, le = void 0), i(54, Ne = void 0), i(15, be = -1)), i(56, ue = oe == null ? void 0 : oe.id)), a.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && ie && le != null && le.length && i(15, be = 0), a.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (ie || i(15, be = -1)), a.$$.dirty[0] & /*listFeatures*/
    16384 | a.$$.dirty[1] & /*markedFeatures*/
    8388608 && Ne !== le && i(54, Ne = void 0), a.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | a.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && M && M.setEventHandler((G) => {
      switch (G.type) {
        case "mapClick":
          H && se(G.coordinates);
          break;
        case "markerClick":
          {
            const Le = le == null ? void 0 : le.find((Ge) => Ge.id === G.id);
            Le && _r(Le);
          }
          break;
        case "markerMouseEnter":
          Ne && i(15, be = Fn ? (le == null ? void 0 : le.findIndex((Le) => Le.id === G.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          Ne && i(15, be = -1);
          break;
      }
    }), a.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && i(57, u = le == null ? void 0 : le[be]), a.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && M && u && O && de && M.flyTo(u.center, u.id.startsWith("poi.") || u.id.startsWith("address.") ? we : Fe), a.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Oe || M == null || M.setMarkers(void 0, void 0)), a.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && M && Oe && !Ne && (M.setMarkers(u ? [u] : void 0, void 0), M.setSelectedMarker(u ? 0 : -1)), a.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && M && M.setMarkers(Ne, oe), a.$$.dirty[0] & /*selectedItemIndex*/
    32768 | a.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && Ne && M && M.setSelectedMarker(be), a.$$.dirty[0] & /*searchValue*/
    2 | a.$$.dirty[1] & /*mapController*/
    16 && M) {
      const G = te(Z);
      M.setReverseMarker(G ? [G.decimalLongitude, G.decimalLatitude] : void 0);
    }
    a.$$.dirty[1] & /*selected*/
    67108864 && st("select", u), a.$$.dirty[1] & /*picked*/
    16777216 && st("pick", oe), a.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && st("optionsVisibilityChange", Fn && !!le), a.$$.dirty[0] & /*listFeatures*/
    16384 && st("featuresListed", le), a.$$.dirty[1] & /*markedFeatures*/
    8388608 && st("featuresMarked", Ne), a.$$.dirty[0] & /*reverseActive*/
    1 && st("reverseToggle", H), a.$$.dirty[0] & /*searchValue*/
    2 && st("queryChange", Z), a.$$.dirty[0] & /*reverseActive*/
    1 | a.$$.dirty[1] & /*mapController*/
    16 && M && M.indicateReverse(H);
  }, [
    H,
    Z,
    v,
    _,
    p,
    b,
    L,
    q,
    U,
    ee,
    D,
    ie,
    ht,
    I,
    le,
    be,
    Fn,
    tt,
    W,
    Rt,
    _n,
    Bn,
    as,
    at,
    _r,
    y,
    m,
    k,
    x,
    S,
    T,
    O,
    P,
    R,
    B,
    M,
    z,
    A,
    ae,
    Q,
    de,
    Oe,
    Se,
    K,
    Fe,
    we,
    ze,
    fe,
    mr,
    Jr,
    C,
    $r,
    xe,
    J,
    Ne,
    oe,
    ue,
    u,
    f,
    l,
    ne,
    os,
    us,
    Er,
    rt,
    kn,
    gt,
    ei,
    Gn,
    ls,
    ti,
    Ut,
    V
  ];
}
let sy = class extends Pn {
  constructor(r) {
    super(), Mn(
      this,
      r,
      iy,
      ry,
      Rn,
      {
        class: 2,
        apiKey: 25,
        bbox: 26,
        clearButtonTitle: 3,
        clearOnBlur: 27,
        collapsed: 4,
        country: 28,
        debounceSearch: 29,
        enableReverse: 5,
        errorMessage: 6,
        filter: 30,
        flyTo: 31,
        fuzzyMatch: 32,
        language: 33,
        limit: 34,
        mapController: 35,
        minLength: 36,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 37,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 38,
        showPlaceType: 10,
        showResultsWhileTyping: 39,
        selectFirst: 11,
        flyToSelected: 40,
        markerOnSelected: 41,
        types: 42,
        excludeTypes: 43,
        zoom: 44,
        maxZoom: 45,
        apiUrl: 46,
        fetchParameters: 47,
        iconsBaseUrl: 12,
        adjustUrlQuery: 48,
        focus: 49,
        blur: 50,
        setQuery: 51,
        clearList: 52,
        clearMap: 53
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[49];
  }
  get blur() {
    return this.$$.ctx[50];
  }
  get setQuery() {
    return this.$$.ctx[51];
  }
  get clearList() {
    return this.$$.ctx[52];
  }
  get clearMap() {
    return this.$$.ctx[53];
  }
};
var Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _c(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function ay(a) {
  if (a.__esModule) return a;
  var r = a.default;
  if (typeof r == "function") {
    var i = function u() {
      return this instanceof u ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(a).forEach(function(u) {
    var l = Object.getOwnPropertyDescriptor(a, u);
    Object.defineProperty(i, u, l.get ? l : {
      enumerable: !0,
      get: function() {
        return a[u];
      }
    });
  }), i;
}
var gu = Object.prototype.toString, Ec = function(r) {
  var i = gu.call(r), u = i === "[object Arguments]";
  return u || (u = i !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && gu.call(r.callee) === "[object Function]"), u;
}, Ts, yu;
function oy() {
  if (yu) return Ts;
  yu = 1;
  var a;
  if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty, i = Object.prototype.toString, u = Ec, l = Object.prototype.propertyIsEnumerable, f = !l.call({ toString: null }, "toString"), v = l.call(function() {
    }, "prototype"), y = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], m = function(x) {
      var S = x.constructor;
      return S && S.prototype === x;
    }, _ = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, k = function() {
      if (typeof window > "u")
        return !1;
      for (var x in window)
        try {
          if (!_["$" + x] && r.call(window, x) && window[x] !== null && typeof window[x] == "object")
            try {
              m(window[x]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), p = function(x) {
      if (typeof window > "u" || !k)
        return m(x);
      try {
        return m(x);
      } catch {
        return !1;
      }
    };
    a = function(S) {
      var b = S !== null && typeof S == "object", L = i.call(S) === "[object Function]", T = u(S), O = b && i.call(S) === "[object String]", P = [];
      if (!b && !L && !T)
        throw new TypeError("Object.keys called on a non-object");
      var R = v && L;
      if (O && S.length > 0 && !r.call(S, 0))
        for (var B = 0; B < S.length; ++B)
          P.push(String(B));
      if (T && S.length > 0)
        for (var M = 0; M < S.length; ++M)
          P.push(String(M));
      else
        for (var z in S)
          !(R && z === "prototype") && r.call(S, z) && P.push(String(z));
      if (f)
        for (var q = p(S), U = 0; U < y.length; ++U)
          !(q && y[U] === "constructor") && r.call(S, y[U]) && P.push(y[U]);
      return P;
    };
  }
  return Ts = a, Ts;
}
var uy = Array.prototype.slice, ly = Ec, vu = Object.keys, xi = vu ? function(r) {
  return vu(r);
} : oy(), du = Object.keys;
xi.shim = function() {
  if (Object.keys) {
    var r = function() {
      var i = Object.keys(arguments);
      return i && i.length === arguments.length;
    }(1, 2);
    r || (Object.keys = function(u) {
      return ly(u) ? du(uy.call(u)) : du(u);
    });
  } else
    Object.keys = xi;
  return Object.keys || xi;
};
var Ma = xi, cy = Error, fy = EvalError, hy = RangeError, gy = ReferenceError, kc = SyntaxError, vn = TypeError, yy = URIError, ns = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var r = {}, i = Symbol("test"), u = Object(i);
  if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(u) !== "[object Symbol]")
    return !1;
  var l = 42;
  r[i] = l;
  for (i in r)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
    return !1;
  var f = Object.getOwnPropertySymbols(r);
  if (f.length !== 1 || f[0] !== i || !Object.prototype.propertyIsEnumerable.call(r, i))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var v = Object.getOwnPropertyDescriptor(r, i);
    if (v.value !== l || v.enumerable !== !0)
      return !1;
  }
  return !0;
}, mu = typeof Symbol < "u" && Symbol, vy = ns, Pa = function() {
  return typeof mu != "function" || typeof Symbol != "function" || typeof mu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : vy();
}, Cs = {
  __proto__: null,
  foo: {}
}, dy = Object, my = function() {
  return { __proto__: Cs }.foo === Cs.foo && !(Cs instanceof dy);
}, py = "Function.prototype.bind called on incompatible ", _y = Object.prototype.toString, Ey = Math.max, ky = "[object Function]", pu = function(r, i) {
  for (var u = [], l = 0; l < r.length; l += 1)
    u[l] = r[l];
  for (var f = 0; f < i.length; f += 1)
    u[f + r.length] = i[f];
  return u;
}, xy = function(r, i) {
  for (var u = [], l = i, f = 0; l < r.length; l += 1, f += 1)
    u[f] = r[l];
  return u;
}, Sy = function(a, r) {
  for (var i = "", u = 0; u < a.length; u += 1)
    i += a[u], u + 1 < a.length && (i += r);
  return i;
}, by = function(r) {
  var i = this;
  if (typeof i != "function" || _y.apply(i) !== ky)
    throw new TypeError(py + i);
  for (var u = xy(arguments, 1), l, f = function() {
    if (this instanceof l) {
      var k = i.apply(
        this,
        pu(u, arguments)
      );
      return Object(k) === k ? k : this;
    }
    return i.apply(
      r,
      pu(u, arguments)
    );
  }, v = Ey(0, i.length - u.length), y = [], m = 0; m < v; m++)
    y[m] = "$" + m;
  if (l = Function("binder", "return function (" + Sy(y, ",") + "){ return binder.apply(this,arguments); }")(f), i.prototype) {
    var _ = function() {
    };
    _.prototype = i.prototype, l.prototype = new _(), _.prototype = null;
  }
  return l;
}, Iy = by, Aa = Function.prototype.bind || Iy, wy = Function.prototype.call, Ny = Object.prototype.hasOwnProperty, Ly = Aa, xc = Ly.call(wy, Ny), ye, Ty = cy, Cy = fy, Oy = hy, Ry = gy, sr = kc, ir = vn, My = yy, Sc = Function, Os = function(a) {
  try {
    return Sc('"use strict"; return (' + a + ").constructor;")();
  } catch {
  }
}, Tn = Object.getOwnPropertyDescriptor;
if (Tn)
  try {
    Tn({}, "");
  } catch {
    Tn = null;
  }
var Rs = function() {
  throw new ir();
}, Py = Tn ? function() {
  try {
    return arguments.callee, Rs;
  } catch {
    try {
      return Tn(arguments, "callee").get;
    } catch {
      return Rs;
    }
  }
}() : Rs, Kn = Pa(), Ay = my(), Ue = Object.getPrototypeOf || (Ay ? function(a) {
  return a.__proto__;
} : null), tr = {}, Dy = typeof Uint8Array > "u" || !Ue ? ye : Ue(Uint8Array), Cn = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? ye : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ye : ArrayBuffer,
  "%ArrayIteratorPrototype%": Kn && Ue ? Ue([][Symbol.iterator]()) : ye,
  "%AsyncFromSyncIteratorPrototype%": ye,
  "%AsyncFunction%": tr,
  "%AsyncGenerator%": tr,
  "%AsyncGeneratorFunction%": tr,
  "%AsyncIteratorPrototype%": tr,
  "%Atomics%": typeof Atomics > "u" ? ye : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ye : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ye : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ye : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ye : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Ty,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Cy,
  "%Float32Array%": typeof Float32Array > "u" ? ye : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ye : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ye : FinalizationRegistry,
  "%Function%": Sc,
  "%GeneratorFunction%": tr,
  "%Int8Array%": typeof Int8Array > "u" ? ye : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ye : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ye : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Kn && Ue ? Ue(Ue([][Symbol.iterator]())) : ye,
  "%JSON%": typeof JSON == "object" ? JSON : ye,
  "%Map%": typeof Map > "u" ? ye : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Kn || !Ue ? ye : Ue((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ye : Promise,
  "%Proxy%": typeof Proxy > "u" ? ye : Proxy,
  "%RangeError%": Oy,
  "%ReferenceError%": Ry,
  "%Reflect%": typeof Reflect > "u" ? ye : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ye : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Kn || !Ue ? ye : Ue((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ye : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Kn && Ue ? Ue(""[Symbol.iterator]()) : ye,
  "%Symbol%": Kn ? Symbol : ye,
  "%SyntaxError%": sr,
  "%ThrowTypeError%": Py,
  "%TypedArray%": Dy,
  "%TypeError%": ir,
  "%Uint8Array%": typeof Uint8Array > "u" ? ye : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ye : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ye : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ye : Uint32Array,
  "%URIError%": My,
  "%WeakMap%": typeof WeakMap > "u" ? ye : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ye : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ye : WeakSet
};
if (Ue)
  try {
    null.error;
  } catch (a) {
    var Fy = Ue(Ue(a));
    Cn["%Error.prototype%"] = Fy;
  }
var By = function a(r) {
  var i;
  if (r === "%AsyncFunction%")
    i = Os("async function () {}");
  else if (r === "%GeneratorFunction%")
    i = Os("function* () {}");
  else if (r === "%AsyncGeneratorFunction%")
    i = Os("async function* () {}");
  else if (r === "%AsyncGenerator%") {
    var u = a("%AsyncGeneratorFunction%");
    u && (i = u.prototype);
  } else if (r === "%AsyncIteratorPrototype%") {
    var l = a("%AsyncGenerator%");
    l && Ue && (i = Ue(l.prototype));
  }
  return Cn[r] = i, i;
}, _u = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Zr = Aa, Mi = xc, Gy = Zr.call(Function.call, Array.prototype.concat), qy = Zr.call(Function.apply, Array.prototype.splice), Eu = Zr.call(Function.call, String.prototype.replace), Pi = Zr.call(Function.call, String.prototype.slice), zy = Zr.call(Function.call, RegExp.prototype.exec), Uy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Yy = /\\(\\)?/g, Wy = function(r) {
  var i = Pi(r, 0, 1), u = Pi(r, -1);
  if (i === "%" && u !== "%")
    throw new sr("invalid intrinsic syntax, expected closing `%`");
  if (u === "%" && i !== "%")
    throw new sr("invalid intrinsic syntax, expected opening `%`");
  var l = [];
  return Eu(r, Uy, function(f, v, y, m) {
    l[l.length] = y ? Eu(m, Yy, "$1") : v || f;
  }), l;
}, Xy = function(r, i) {
  var u = r, l;
  if (Mi(_u, u) && (l = _u[u], u = "%" + l[0] + "%"), Mi(Cn, u)) {
    var f = Cn[u];
    if (f === tr && (f = By(u)), typeof f > "u" && !i)
      throw new ir("intrinsic " + r + " exists, but is not available. Please file an issue!");
    return {
      alias: l,
      name: u,
      value: f
    };
  }
  throw new sr("intrinsic " + r + " does not exist!");
}, qt = function(r, i) {
  if (typeof r != "string" || r.length === 0)
    throw new ir("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof i != "boolean")
    throw new ir('"allowMissing" argument must be a boolean');
  if (zy(/^%?[^%]*%?$/, r) === null)
    throw new sr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var u = Wy(r), l = u.length > 0 ? u[0] : "", f = Xy("%" + l + "%", i), v = f.name, y = f.value, m = !1, _ = f.alias;
  _ && (l = _[0], qy(u, Gy([0, 1], _)));
  for (var k = 1, p = !0; k < u.length; k += 1) {
    var x = u[k], S = Pi(x, 0, 1), b = Pi(x, -1);
    if ((S === '"' || S === "'" || S === "`" || b === '"' || b === "'" || b === "`") && S !== b)
      throw new sr("property names with quotes must have matching quotes");
    if ((x === "constructor" || !p) && (m = !0), l += "." + x, v = "%" + l + "%", Mi(Cn, v))
      y = Cn[v];
    else if (y != null) {
      if (!(x in y)) {
        if (!i)
          throw new ir("base intrinsic for " + r + " exists, but the property is not available.");
        return;
      }
      if (Tn && k + 1 >= u.length) {
        var L = Tn(y, x);
        p = !!L, p && "get" in L && !("originalValue" in L.get) ? y = L.get : y = y[x];
      } else
        p = Mi(y, x), y = y[x];
      p && !m && (Cn[v] = y);
    }
  }
  return y;
}, jy = qt, Si = jy("%Object.defineProperty%", !0) || !1;
if (Si)
  try {
    Si({}, "a", { value: 1 });
  } catch {
    Si = !1;
  }
var Da = Si, Vy = qt, bi = Vy("%Object.getOwnPropertyDescriptor%", !0);
if (bi)
  try {
    bi([], "length");
  } catch {
    bi = null;
  }
var Fa = bi, ku = Da, Hy = kc, Jn = vn, xu = Fa, Ba = function(r, i, u) {
  if (!r || typeof r != "object" && typeof r != "function")
    throw new Jn("`obj` must be an object or a function`");
  if (typeof i != "string" && typeof i != "symbol")
    throw new Jn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Jn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Jn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Jn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Jn("`loose`, if provided, must be a boolean");
  var l = arguments.length > 3 ? arguments[3] : null, f = arguments.length > 4 ? arguments[4] : null, v = arguments.length > 5 ? arguments[5] : null, y = arguments.length > 6 ? arguments[6] : !1, m = !!xu && xu(r, i);
  if (ku)
    ku(r, i, {
      configurable: v === null && m ? m.configurable : !v,
      enumerable: l === null && m ? m.enumerable : !l,
      value: u,
      writable: f === null && m ? m.writable : !f
    });
  else if (y || !l && !f && !v)
    r[i] = u;
  else
    throw new Hy("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, ta = Da, bc = function() {
  return !!ta;
};
bc.hasArrayLengthDefineBug = function() {
  if (!ta)
    return null;
  try {
    return ta([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Ga = bc, Zy = Ma, Qy = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", Ky = Object.prototype.toString, Jy = Array.prototype.concat, Su = Ba, $y = function(a) {
  return typeof a == "function" && Ky.call(a) === "[object Function]";
}, Ic = Ga(), ev = function(a, r, i, u) {
  if (r in a) {
    if (u === !0) {
      if (a[r] === i)
        return;
    } else if (!$y(u) || !u())
      return;
  }
  Ic ? Su(a, r, i, !0) : Su(a, r, i);
}, wc = function(a, r) {
  var i = arguments.length > 2 ? arguments[2] : {}, u = Zy(r);
  Qy && (u = Jy.call(u, Object.getOwnPropertySymbols(r)));
  for (var l = 0; l < u.length; l += 1)
    ev(a, u[l], r[u[l]], i[u[l]]);
};
wc.supportsDescriptors = !!Ic;
var An = wc, Nc = { exports: {} }, tv = qt, bu = Ba, nv = Ga(), Iu = Fa, wu = vn, rv = tv("%Math.floor%"), iv = function(r, i) {
  if (typeof r != "function")
    throw new wu("`fn` is not a function");
  if (typeof i != "number" || i < 0 || i > 4294967295 || rv(i) !== i)
    throw new wu("`length` must be a positive 32-bit integer");
  var u = arguments.length > 2 && !!arguments[2], l = !0, f = !0;
  if ("length" in r && Iu) {
    var v = Iu(r, "length");
    v && !v.configurable && (l = !1), v && !v.writable && (f = !1);
  }
  return (l || f || !u) && (nv ? bu(
    /** @type {Parameters<define>[0]} */
    r,
    "length",
    i,
    !0,
    !0
  ) : bu(
    /** @type {Parameters<define>[0]} */
    r,
    "length",
    i
  )), r;
};
(function(a) {
  var r = Aa, i = qt, u = iv, l = vn, f = i("%Function.prototype.apply%"), v = i("%Function.prototype.call%"), y = i("%Reflect.apply%", !0) || r.call(v, f), m = Da, _ = i("%Math.max%");
  a.exports = function(x) {
    if (typeof x != "function")
      throw new l("a function is required");
    var S = y(r, v, arguments);
    return u(
      S,
      1 + _(0, x.length - (arguments.length - 1)),
      !0
    );
  };
  var k = function() {
    return y(r, f, arguments);
  };
  m ? m(a.exports, "apply", { value: k }) : a.exports.apply = k;
})(Nc);
var fr = Nc.exports, Lc = qt, Tc = fr, sv = Tc(Lc("String.prototype.indexOf")), St = function(r, i) {
  var u = Lc(r, !!i);
  return typeof u == "function" && sv(r, ".prototype.") > -1 ? Tc(u) : u;
}, av = Ma, Cc = ns(), Oc = St, Nu = Object, ov = Oc("Array.prototype.push"), Lu = Oc("Object.prototype.propertyIsEnumerable"), uv = Cc ? Object.getOwnPropertySymbols : null, Rc = function(r, i) {
  if (r == null)
    throw new TypeError("target must be an object");
  var u = Nu(r);
  if (arguments.length === 1)
    return u;
  for (var l = 1; l < arguments.length; ++l) {
    var f = Nu(arguments[l]), v = av(f), y = Cc && (Object.getOwnPropertySymbols || uv);
    if (y)
      for (var m = y(f), _ = 0; _ < m.length; ++_) {
        var k = m[_];
        Lu(f, k) && ov(v, k);
      }
    for (var p = 0; p < v.length; ++p) {
      var x = v[p];
      if (Lu(f, x)) {
        var S = f[x];
        u[x] = S;
      }
    }
  }
  return u;
}, Ms = Rc, lv = function() {
  if (!Object.assign)
    return !1;
  for (var a = "abcdefghijklmnopqrst", r = a.split(""), i = {}, u = 0; u < r.length; ++u)
    i[r[u]] = r[u];
  var l = Object.assign({}, i), f = "";
  for (var v in l)
    f += v;
  return a !== f;
}, cv = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var a = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(a, "xy");
  } catch {
    return a[1] === "y";
  }
  return !1;
}, Mc = function() {
  return !Object.assign || lv() || cv() ? Ms : Object.assign;
}, fv = An, hv = Mc, gv = function() {
  var r = hv();
  return fv(
    Object,
    { assign: r },
    { assign: function() {
      return Object.assign !== r;
    } }
  ), r;
}, yv = An, vv = fr, dv = Rc, Pc = Mc, mv = gv, pv = vv.apply(Pc()), Ac = function(r, i) {
  return pv(Object, arguments);
};
yv(Ac, {
  getPolyfill: Pc,
  implementation: dv,
  shim: mv
});
var _v = Ac, jr = function() {
  return typeof (function() {
  }).name == "string";
}, Gr = Object.getOwnPropertyDescriptor;
if (Gr)
  try {
    Gr([], "length");
  } catch {
    Gr = null;
  }
jr.functionsHaveConfigurableNames = function() {
  if (!jr() || !Gr)
    return !1;
  var r = Gr(function() {
  }, "name");
  return !!r && !!r.configurable;
};
var Ev = Function.prototype.bind;
jr.boundFunctionsHaveNames = function() {
  return jr() && typeof Ev == "function" && (function() {
  }).bind().name !== "";
};
var kv = jr, Tu = Ba, xv = Ga(), Sv = kv.functionsHaveConfigurableNames(), bv = vn, Iv = function(r, i) {
  if (typeof r != "function")
    throw new bv("`fn` is not a function");
  var u = arguments.length > 2 && !!arguments[2];
  return (!u || Sv) && (xv ? Tu(
    /** @type {Parameters<define>[0]} */
    r,
    "name",
    i,
    !0,
    !0
  ) : Tu(
    /** @type {Parameters<define>[0]} */
    r,
    "name",
    i
  )), r;
}, wv = Iv, Nv = vn, Lv = Object, Dc = wv(function() {
  if (this == null || this !== Lv(this))
    throw new Nv("RegExp.prototype.flags getter called on non-object");
  var r = "";
  return this.hasIndices && (r += "d"), this.global && (r += "g"), this.ignoreCase && (r += "i"), this.multiline && (r += "m"), this.dotAll && (r += "s"), this.unicode && (r += "u"), this.unicodeSets && (r += "v"), this.sticky && (r += "y"), r;
}, "get flags", !0), Tv = Dc, Cv = An.supportsDescriptors, Ov = Object.getOwnPropertyDescriptor, Fc = function() {
  if (Cv && /a/mig.flags === "gim") {
    var r = Ov(RegExp.prototype, "flags");
    if (r && typeof r.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var i = "", u = {};
      if (Object.defineProperty(u, "hasIndices", {
        get: function() {
          i += "d";
        }
      }), Object.defineProperty(u, "sticky", {
        get: function() {
          i += "y";
        }
      }), i === "dy")
        return r.get;
    }
  }
  return Tv;
}, Rv = An.supportsDescriptors, Mv = Fc, Pv = Object.getOwnPropertyDescriptor, Av = Object.defineProperty, Dv = TypeError, Cu = Object.getPrototypeOf, Fv = /a/, Bv = function() {
  if (!Rv || !Cu)
    throw new Dv("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var r = Mv(), i = Cu(Fv), u = Pv(i, "flags");
  return (!u || u.get !== r) && Av(i, "flags", {
    configurable: !0,
    enumerable: !1,
    get: r
  }), r;
}, Gv = An, qv = fr, zv = Dc, Bc = Fc, Uv = Bv, Gc = qv(Bc());
Gv(Gc, {
  getPolyfill: Bc,
  implementation: zv,
  shim: Uv
});
var Yv = Gc, Ii = { exports: {} }, Wv = ns, Dn = function() {
  return Wv() && !!Symbol.toStringTag;
}, Xv = Dn(), jv = St, na = jv("Object.prototype.toString"), rs = function(r) {
  return Xv && r && typeof r == "object" && Symbol.toStringTag in r ? !1 : na(r) === "[object Arguments]";
}, qc = function(r) {
  return rs(r) ? !0 : r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && na(r) !== "[object Array]" && na(r.callee) === "[object Function]";
}, Vv = function() {
  return rs(arguments);
}();
rs.isLegacyArguments = qc;
var zc = Vv ? rs : qc;
const Hv = {}, Zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hv
}, Symbol.toStringTag, { value: "Module" })), Qv = /* @__PURE__ */ ay(Zv);
var qa = typeof Map == "function" && Map.prototype, Ps = Object.getOwnPropertyDescriptor && qa ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ai = qa && Ps && typeof Ps.get == "function" ? Ps.get : null, Ou = qa && Map.prototype.forEach, za = typeof Set == "function" && Set.prototype, As = Object.getOwnPropertyDescriptor && za ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Di = za && As && typeof As.get == "function" ? As.get : null, Ru = za && Set.prototype.forEach, Kv = typeof WeakMap == "function" && WeakMap.prototype, qr = Kv ? WeakMap.prototype.has : null, Jv = typeof WeakSet == "function" && WeakSet.prototype, zr = Jv ? WeakSet.prototype.has : null, $v = typeof WeakRef == "function" && WeakRef.prototype, Mu = $v ? WeakRef.prototype.deref : null, ed = Boolean.prototype.valueOf, td = Object.prototype.toString, nd = Function.prototype.toString, rd = String.prototype.match, Ua = String.prototype.slice, un = String.prototype.replace, id = String.prototype.toUpperCase, Pu = String.prototype.toLowerCase, Uc = RegExp.prototype.test, Au = Array.prototype.concat, Dt = Array.prototype.join, sd = Array.prototype.slice, Du = Math.floor, ra = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ds = Object.getOwnPropertySymbols, ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ar = typeof Symbol == "function" && typeof Symbol.iterator == "object", Ze = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ar || !0) ? Symbol.toStringTag : null, Yc = Object.prototype.propertyIsEnumerable, Fu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(a) {
  return a.__proto__;
} : null);
function Bu(a, r) {
  if (a === 1 / 0 || a === -1 / 0 || a !== a || a && a > -1e3 && a < 1e3 || Uc.call(/e/, r))
    return r;
  var i = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof a == "number") {
    var u = a < 0 ? -Du(-a) : Du(a);
    if (u !== a) {
      var l = String(u), f = Ua.call(r, l.length + 1);
      return un.call(l, i, "$&_") + "." + un.call(un.call(f, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return un.call(r, i, "$&_");
}
var sa = Qv, Gu = sa.custom, qu = Xc(Gu) ? Gu : null, ad = function a(r, i, u, l) {
  var f = i || {};
  if (sn(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (sn(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var v = sn(f, "customInspect") ? f.customInspect : !0;
  if (typeof v != "boolean" && v !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (sn(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (sn(f, "numericSeparator") && typeof f.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var y = f.numericSeparator;
  if (typeof r > "u")
    return "undefined";
  if (r === null)
    return "null";
  if (typeof r == "boolean")
    return r ? "true" : "false";
  if (typeof r == "string")
    return Vc(r, f);
  if (typeof r == "number") {
    if (r === 0)
      return 1 / 0 / r > 0 ? "0" : "-0";
    var m = String(r);
    return y ? Bu(r, m) : m;
  }
  if (typeof r == "bigint") {
    var _ = String(r) + "n";
    return y ? Bu(r, _) : _;
  }
  var k = typeof f.depth > "u" ? 5 : f.depth;
  if (typeof u > "u" && (u = 0), u >= k && k > 0 && typeof r == "object")
    return aa(r) ? "[Array]" : "[Object]";
  var p = bd(f, u);
  if (typeof l > "u")
    l = [];
  else if (jc(l, r) >= 0)
    return "[Circular]";
  function x(ae, D, Q) {
    if (D && (l = sd.call(l), l.push(D)), Q) {
      var ie = {
        depth: f.depth
      };
      return sn(f, "quoteStyle") && (ie.quoteStyle = f.quoteStyle), a(ae, ie, u + 1, l);
    }
    return a(ae, f, u + 1, l);
  }
  if (typeof r == "function" && !zu(r)) {
    var S = vd(r), b = fi(r, x);
    return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (b.length > 0 ? " { " + Dt.call(b, ", ") + " }" : "");
  }
  if (Xc(r)) {
    var L = ar ? un.call(String(r), /^(Symbol\(.*\))_[^)]*$/, "$1") : ia.call(r);
    return typeof r == "object" && !ar ? Or(L) : L;
  }
  if (kd(r)) {
    for (var T = "<" + Pu.call(String(r.nodeName)), O = r.attributes || [], P = 0; P < O.length; P++)
      T += " " + O[P].name + "=" + Wc(od(O[P].value), "double", f);
    return T += ">", r.childNodes && r.childNodes.length && (T += "..."), T += "</" + Pu.call(String(r.nodeName)) + ">", T;
  }
  if (aa(r)) {
    if (r.length === 0)
      return "[]";
    var R = fi(r, x);
    return p && !Sd(R) ? "[" + oa(R, p) + "]" : "[ " + Dt.call(R, ", ") + " ]";
  }
  if (ld(r)) {
    var B = fi(r, x);
    return !("cause" in Error.prototype) && "cause" in r && !Yc.call(r, "cause") ? "{ [" + String(r) + "] " + Dt.call(Au.call("[cause]: " + x(r.cause), B), ", ") + " }" : B.length === 0 ? "[" + String(r) + "]" : "{ [" + String(r) + "] " + Dt.call(B, ", ") + " }";
  }
  if (typeof r == "object" && v) {
    if (qu && typeof r[qu] == "function" && sa)
      return sa(r, { depth: k - u });
    if (v !== "symbol" && typeof r.inspect == "function")
      return r.inspect();
  }
  if (dd(r)) {
    var M = [];
    return Ou && Ou.call(r, function(ae, D) {
      M.push(x(D, r, !0) + " => " + x(ae, r));
    }), Uu("Map", Ai.call(r), M, p);
  }
  if (_d(r)) {
    var z = [];
    return Ru && Ru.call(r, function(ae) {
      z.push(x(ae, r));
    }), Uu("Set", Di.call(r), z, p);
  }
  if (md(r))
    return Fs("WeakMap");
  if (Ed(r))
    return Fs("WeakSet");
  if (pd(r))
    return Fs("WeakRef");
  if (fd(r))
    return Or(x(Number(r)));
  if (gd(r))
    return Or(x(ra.call(r)));
  if (hd(r))
    return Or(ed.call(r));
  if (cd(r))
    return Or(x(String(r)));
  if (typeof window < "u" && r === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && r === globalThis || typeof Xr < "u" && r === Xr)
    return "{ [object globalThis] }";
  if (!ud(r) && !zu(r)) {
    var q = fi(r, x), U = Fu ? Fu(r) === Object.prototype : r instanceof Object || r.constructor === Object, A = r instanceof Object ? "" : "null prototype", H = !U && Ze && Object(r) === r && Ze in r ? Ua.call(dn(r), 8, -1) : A ? "Object" : "", ee = U || typeof r.constructor != "function" ? "" : r.constructor.name ? r.constructor.name + " " : "", Z = ee + (H || A ? "[" + Dt.call(Au.call([], H || [], A || []), ": ") + "] " : "");
    return q.length === 0 ? Z + "{}" : p ? Z + "{" + oa(q, p) + "}" : Z + "{ " + Dt.call(q, ", ") + " }";
  }
  return String(r);
};
function Wc(a, r, i) {
  var u = (i.quoteStyle || r) === "double" ? '"' : "'";
  return u + a + u;
}
function od(a) {
  return un.call(String(a), /"/g, "&quot;");
}
function aa(a) {
  return dn(a) === "[object Array]" && (!Ze || !(typeof a == "object" && Ze in a));
}
function ud(a) {
  return dn(a) === "[object Date]" && (!Ze || !(typeof a == "object" && Ze in a));
}
function zu(a) {
  return dn(a) === "[object RegExp]" && (!Ze || !(typeof a == "object" && Ze in a));
}
function ld(a) {
  return dn(a) === "[object Error]" && (!Ze || !(typeof a == "object" && Ze in a));
}
function cd(a) {
  return dn(a) === "[object String]" && (!Ze || !(typeof a == "object" && Ze in a));
}
function fd(a) {
  return dn(a) === "[object Number]" && (!Ze || !(typeof a == "object" && Ze in a));
}
function hd(a) {
  return dn(a) === "[object Boolean]" && (!Ze || !(typeof a == "object" && Ze in a));
}
function Xc(a) {
  if (ar)
    return a && typeof a == "object" && a instanceof Symbol;
  if (typeof a == "symbol")
    return !0;
  if (!a || typeof a != "object" || !ia)
    return !1;
  try {
    return ia.call(a), !0;
  } catch {
  }
  return !1;
}
function gd(a) {
  if (!a || typeof a != "object" || !ra)
    return !1;
  try {
    return ra.call(a), !0;
  } catch {
  }
  return !1;
}
var yd = Object.prototype.hasOwnProperty || function(a) {
  return a in this;
};
function sn(a, r) {
  return yd.call(a, r);
}
function dn(a) {
  return td.call(a);
}
function vd(a) {
  if (a.name)
    return a.name;
  var r = rd.call(nd.call(a), /^function\s*([\w$]+)/);
  return r ? r[1] : null;
}
function jc(a, r) {
  if (a.indexOf)
    return a.indexOf(r);
  for (var i = 0, u = a.length; i < u; i++)
    if (a[i] === r)
      return i;
  return -1;
}
function dd(a) {
  if (!Ai || !a || typeof a != "object")
    return !1;
  try {
    Ai.call(a);
    try {
      Di.call(a);
    } catch {
      return !0;
    }
    return a instanceof Map;
  } catch {
  }
  return !1;
}
function md(a) {
  if (!qr || !a || typeof a != "object")
    return !1;
  try {
    qr.call(a, qr);
    try {
      zr.call(a, zr);
    } catch {
      return !0;
    }
    return a instanceof WeakMap;
  } catch {
  }
  return !1;
}
function pd(a) {
  if (!Mu || !a || typeof a != "object")
    return !1;
  try {
    return Mu.call(a), !0;
  } catch {
  }
  return !1;
}
function _d(a) {
  if (!Di || !a || typeof a != "object")
    return !1;
  try {
    Di.call(a);
    try {
      Ai.call(a);
    } catch {
      return !0;
    }
    return a instanceof Set;
  } catch {
  }
  return !1;
}
function Ed(a) {
  if (!zr || !a || typeof a != "object")
    return !1;
  try {
    zr.call(a, zr);
    try {
      qr.call(a, qr);
    } catch {
      return !0;
    }
    return a instanceof WeakSet;
  } catch {
  }
  return !1;
}
function kd(a) {
  return !a || typeof a != "object" ? !1 : typeof HTMLElement < "u" && a instanceof HTMLElement ? !0 : typeof a.nodeName == "string" && typeof a.getAttribute == "function";
}
function Vc(a, r) {
  if (a.length > r.maxStringLength) {
    var i = a.length - r.maxStringLength, u = "... " + i + " more character" + (i > 1 ? "s" : "");
    return Vc(Ua.call(a, 0, r.maxStringLength), r) + u;
  }
  var l = un.call(un.call(a, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, xd);
  return Wc(l, "single", r);
}
function xd(a) {
  var r = a.charCodeAt(0), i = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[r];
  return i ? "\\" + i : "\\x" + (r < 16 ? "0" : "") + id.call(r.toString(16));
}
function Or(a) {
  return "Object(" + a + ")";
}
function Fs(a) {
  return a + " { ? }";
}
function Uu(a, r, i, u) {
  var l = u ? oa(i, u) : Dt.call(i, ", ");
  return a + " (" + r + ") {" + l + "}";
}
function Sd(a) {
  for (var r = 0; r < a.length; r++)
    if (jc(a[r], `
`) >= 0)
      return !1;
  return !0;
}
function bd(a, r) {
  var i;
  if (a.indent === "	")
    i = "	";
  else if (typeof a.indent == "number" && a.indent > 0)
    i = Dt.call(Array(a.indent + 1), " ");
  else
    return null;
  return {
    base: i,
    prev: Dt.call(Array(r + 1), i)
  };
}
function oa(a, r) {
  if (a.length === 0)
    return "";
  var i = `
` + r.prev + r.base;
  return i + Dt.call(a, "," + i) + `
` + r.prev;
}
function fi(a, r) {
  var i = aa(a), u = [];
  if (i) {
    u.length = a.length;
    for (var l = 0; l < a.length; l++)
      u[l] = sn(a, l) ? r(a[l], a) : "";
  }
  var f = typeof Ds == "function" ? Ds(a) : [], v;
  if (ar) {
    v = {};
    for (var y = 0; y < f.length; y++)
      v["$" + f[y]] = f[y];
  }
  for (var m in a)
    sn(a, m) && (i && String(Number(m)) === m && m < a.length || ar && v["$" + m] instanceof Symbol || (Uc.call(/[^\w$]/, m) ? u.push(r(m, a) + ": " + r(a[m], a)) : u.push(m + ": " + r(a[m], a))));
  if (typeof Ds == "function")
    for (var _ = 0; _ < f.length; _++)
      Yc.call(a, f[_]) && u.push("[" + r(f[_]) + "]: " + r(a[f[_]], a));
  return u;
}
var Hc = qt, hr = St, Id = ad, wd = vn, hi = Hc("%WeakMap%", !0), gi = Hc("%Map%", !0), Nd = hr("WeakMap.prototype.get", !0), Ld = hr("WeakMap.prototype.set", !0), Td = hr("WeakMap.prototype.has", !0), Cd = hr("Map.prototype.get", !0), Od = hr("Map.prototype.set", !0), Rd = hr("Map.prototype.has", !0), Ya = function(a, r) {
  for (var i = a, u; (u = i.next) !== null; i = u)
    if (u.key === r)
      return i.next = u.next, u.next = /** @type {NonNullable<typeof list.next>} */
      a.next, a.next = u, u;
}, Md = function(a, r) {
  var i = Ya(a, r);
  return i && i.value;
}, Pd = function(a, r, i) {
  var u = Ya(a, r);
  u ? u.value = i : a.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: r,
    next: a.next,
    value: i
  };
}, Ad = function(a, r) {
  return !!Ya(a, r);
}, Zc = function() {
  var r, i, u, l = {
    assert: function(f) {
      if (!l.has(f))
        throw new wd("Side channel does not contain " + Id(f));
    },
    get: function(f) {
      if (hi && f && (typeof f == "object" || typeof f == "function")) {
        if (r)
          return Nd(r, f);
      } else if (gi) {
        if (i)
          return Cd(i, f);
      } else if (u)
        return Md(u, f);
    },
    has: function(f) {
      if (hi && f && (typeof f == "object" || typeof f == "function")) {
        if (r)
          return Td(r, f);
      } else if (gi) {
        if (i)
          return Rd(i, f);
      } else if (u)
        return Ad(u, f);
      return !1;
    },
    set: function(f, v) {
      hi && f && (typeof f == "object" || typeof f == "function") ? (r || (r = new hi()), Ld(r, f, v)) : gi ? (i || (i = new gi()), Od(i, f, v)) : (u || (u = { key: {}, next: null }), Pd(u, f, v));
    }
  };
  return l;
}, Dd = xc, Rr = Zc(), Vt = vn, Wa = {
  assert: function(a, r) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new Vt("`O` is not an object");
    if (typeof r != "string")
      throw new Vt("`slot` must be a string");
    if (Rr.assert(a), !Wa.has(a, r))
      throw new Vt("`" + r + "` is not present on `O`");
  },
  get: function(a, r) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new Vt("`O` is not an object");
    if (typeof r != "string")
      throw new Vt("`slot` must be a string");
    var i = Rr.get(a);
    return i && i["$" + r];
  },
  has: function(a, r) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new Vt("`O` is not an object");
    if (typeof r != "string")
      throw new Vt("`slot` must be a string");
    var i = Rr.get(a);
    return !!i && Dd(i, "$" + r);
  },
  set: function(a, r, i) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new Vt("`O` is not an object");
    if (typeof r != "string")
      throw new Vt("`slot` must be a string");
    var u = Rr.get(a);
    u || (u = {}, Rr.set(a, u)), u["$" + r] = i;
  }
};
Object.freeze && Object.freeze(Wa);
var Fd = Wa, Mr = Fd, Bd = SyntaxError, Yu = typeof StopIteration == "object" ? StopIteration : null, Gd = function(r) {
  if (!Yu)
    throw new Bd("this environment lacks StopIteration");
  Mr.set(r, "[[Done]]", !1);
  var i = {
    next: function() {
      var l = Mr.get(this, "[[Iterator]]"), f = Mr.get(l, "[[Done]]");
      try {
        return {
          done: f,
          value: f ? void 0 : l.next()
        };
      } catch (v) {
        if (Mr.set(l, "[[Done]]", !0), v !== Yu)
          throw v;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return Mr.set(i, "[[Iterator]]", r), i;
}, qd = {}.toString, Qc = Array.isArray || function(a) {
  return qd.call(a) == "[object Array]";
}, zd = String.prototype.valueOf, Ud = function(r) {
  try {
    return zd.call(r), !0;
  } catch {
    return !1;
  }
}, Yd = Object.prototype.toString, Wd = "[object String]", Xd = Dn(), Kc = function(r) {
  return typeof r == "string" ? !0 : typeof r != "object" ? !1 : Xd ? Ud(r) : Yd.call(r) === Wd;
}, Xa = typeof Map == "function" && Map.prototype ? Map : null, jd = typeof Set == "function" && Set.prototype ? Set : null, Fi;
Xa || (Fi = function(r) {
  return !1;
});
var Jc = Xa ? Map.prototype.has : null, Wu = jd ? Set.prototype.has : null;
!Fi && !Jc && (Fi = function(r) {
  return !1;
});
var $c = Fi || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (Jc.call(r), Wu)
      try {
        Wu.call(r);
      } catch {
        return !0;
      }
    return r instanceof Xa;
  } catch {
  }
  return !1;
}, Vd = typeof Map == "function" && Map.prototype ? Map : null, ja = typeof Set == "function" && Set.prototype ? Set : null, Bi;
ja || (Bi = function(r) {
  return !1;
});
var Xu = Vd ? Map.prototype.has : null, ef = ja ? Set.prototype.has : null;
!Bi && !ef && (Bi = function(r) {
  return !1;
});
var tf = Bi || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (ef.call(r), Xu)
      try {
        Xu.call(r);
      } catch {
        return !0;
      }
    return r instanceof ja;
  } catch {
  }
  return !1;
}, ju = zc, Vu = Gd;
if (Pa() || ns()) {
  var Bs = Symbol.iterator;
  Ii.exports = function(r) {
    if (r != null && typeof r[Bs] < "u")
      return r[Bs]();
    if (ju(r))
      return Array.prototype[Bs].call(r);
  };
} else {
  var Hd = Qc, Zd = Kc, Hu = qt, Qd = Hu("%Map%", !0), Kd = Hu("%Set%", !0), Lt = St, Zu = Lt("Array.prototype.push"), Qu = Lt("String.prototype.charCodeAt"), Jd = Lt("String.prototype.slice"), $d = function(r, i) {
    var u = r.length;
    if (i + 1 >= u)
      return i + 1;
    var l = Qu(r, i);
    if (l < 55296 || l > 56319)
      return i + 1;
    var f = Qu(r, i + 1);
    return f < 56320 || f > 57343 ? i + 1 : i + 2;
  }, Gs = function(r) {
    var i = 0;
    return {
      next: function() {
        var l = i >= r.length, f;
        return l || (f = r[i], i += 1), {
          done: l,
          value: f
        };
      }
    };
  }, Ku = function(r, i) {
    if (Hd(r) || ju(r))
      return Gs(r);
    if (Zd(r)) {
      var u = 0;
      return {
        next: function() {
          var f = $d(r, u), v = Jd(r, u, f);
          return u = f, {
            done: f > r.length,
            value: v
          };
        }
      };
    }
    if (i && typeof r["_es6-shim iterator_"] < "u")
      return r["_es6-shim iterator_"]();
  };
  if (!Qd && !Kd)
    Ii.exports = function(r) {
      if (r != null)
        return Ku(r, !0);
    };
  else {
    var em = $c, tm = tf, Ju = Lt("Map.prototype.forEach", !0), $u = Lt("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var el = Lt("Map.prototype.iterator", !0), tl = Lt("Set.prototype.iterator", !0);
    var nl = Lt("Map.prototype.@@iterator", !0) || Lt("Map.prototype._es6-shim iterator_", !0), rl = Lt("Set.prototype.@@iterator", !0) || Lt("Set.prototype._es6-shim iterator_", !0), nm = function(r) {
      if (em(r)) {
        if (el)
          return Vu(el(r));
        if (nl)
          return nl(r);
        if (Ju) {
          var i = [];
          return Ju(r, function(l, f) {
            Zu(i, [f, l]);
          }), Gs(i);
        }
      }
      if (tm(r)) {
        if (tl)
          return Vu(tl(r));
        if (rl)
          return rl(r);
        if ($u) {
          var u = [];
          return $u(r, function(l) {
            Zu(u, l);
          }), Gs(u);
        }
      }
    };
    Ii.exports = function(r) {
      return nm(r) || Ku(r);
    };
  }
}
var rm = Ii.exports, il = function(a) {
  return a !== a;
}, nf = function(r, i) {
  return r === 0 && i === 0 ? 1 / r === 1 / i : !!(r === i || il(r) && il(i));
}, im = nf, rf = function() {
  return typeof Object.is == "function" ? Object.is : im;
}, sm = rf, am = An, om = function() {
  var r = sm();
  return am(Object, { is: r }, {
    is: function() {
      return Object.is !== r;
    }
  }), r;
}, um = An, lm = fr, cm = nf, sf = rf, fm = om, af = lm(sf(), Object);
um(af, {
  getPolyfill: sf,
  implementation: cm,
  shim: fm
});
var hm = af, gm = fr, of = St, ym = qt, ua = ym("%ArrayBuffer%", !0), wi = of("ArrayBuffer.prototype.byteLength", !0), vm = of("Object.prototype.toString"), sl = !!ua && !wi && new ua(0).slice, al = !!sl && gm(sl), uf = wi || al ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    return wi ? wi(r) : al(r, 0), !0;
  } catch {
    return !1;
  }
} : ua ? function(r) {
  return vm(r) === "[object ArrayBuffer]";
} : function(r) {
  return !1;
}, dm = Date.prototype.getDay, mm = function(r) {
  try {
    return dm.call(r), !0;
  } catch {
    return !1;
  }
}, pm = Object.prototype.toString, _m = "[object Date]", Em = Dn(), km = function(r) {
  return typeof r != "object" || r === null ? !1 : Em ? mm(r) : pm.call(r) === _m;
}, la = St, lf = Dn(), cf, ff, ca, fa;
if (lf) {
  cf = la("Object.prototype.hasOwnProperty"), ff = la("RegExp.prototype.exec"), ca = {};
  var qs = function() {
    throw ca;
  };
  fa = {
    toString: qs,
    valueOf: qs
  }, typeof Symbol.toPrimitive == "symbol" && (fa[Symbol.toPrimitive] = qs);
}
var xm = la("Object.prototype.toString"), Sm = Object.getOwnPropertyDescriptor, bm = "[object RegExp]", Im = lf ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  var i = Sm(r, "lastIndex"), u = i && cf(i, "value");
  if (!u)
    return !1;
  try {
    ff(r, fa);
  } catch (l) {
    return l === ca;
  }
} : function(r) {
  return !r || typeof r != "object" && typeof r != "function" ? !1 : xm(r) === bm;
}, wm = St, ol = wm("SharedArrayBuffer.prototype.byteLength", !0), Nm = ol ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    return ol(r), !0;
  } catch {
    return !1;
  }
} : function(r) {
  return !1;
}, Lm = Number.prototype.toString, Tm = function(r) {
  try {
    return Lm.call(r), !0;
  } catch {
    return !1;
  }
}, Cm = Object.prototype.toString, Om = "[object Number]", Rm = Dn(), Mm = function(r) {
  return typeof r == "number" ? !0 : typeof r != "object" ? !1 : Rm ? Tm(r) : Cm.call(r) === Om;
}, hf = St, Pm = hf("Boolean.prototype.toString"), Am = hf("Object.prototype.toString"), Dm = function(r) {
  try {
    return Pm(r), !0;
  } catch {
    return !1;
  }
}, Fm = "[object Boolean]", Bm = Dn(), Gm = function(r) {
  return typeof r == "boolean" ? !0 : r === null || typeof r != "object" ? !1 : Bm && Symbol.toStringTag in r ? Dm(r) : Am(r) === Fm;
}, ha = { exports: {} }, qm = Object.prototype.toString, zm = Pa();
if (zm) {
  var Um = Symbol.prototype.toString, Ym = /^Symbol\(.*\)$/, Wm = function(r) {
    return typeof r.valueOf() != "symbol" ? !1 : Ym.test(Um.call(r));
  };
  ha.exports = function(r) {
    if (typeof r == "symbol")
      return !0;
    if (qm.call(r) !== "[object Symbol]")
      return !1;
    try {
      return Wm(r);
    } catch {
      return !1;
    }
  };
} else
  ha.exports = function(r) {
    return !1;
  };
var Xm = ha.exports, ga = { exports: {} }, ul = typeof BigInt < "u" && BigInt, jm = function() {
  return typeof ul == "function" && typeof BigInt == "function" && typeof ul(42) == "bigint" && typeof BigInt(42) == "bigint";
}, Vm = jm();
if (Vm) {
  var Hm = BigInt.prototype.valueOf, Zm = function(r) {
    try {
      return Hm.call(r), !0;
    } catch {
    }
    return !1;
  };
  ga.exports = function(r) {
    return r === null || typeof r > "u" || typeof r == "boolean" || typeof r == "string" || typeof r == "number" || typeof r == "symbol" || typeof r == "function" ? !1 : typeof r == "bigint" ? !0 : Zm(r);
  };
} else
  ga.exports = function(r) {
    return !1;
  };
var Qm = ga.exports, Km = Kc, Jm = Mm, $m = Gm, ep = Xm, tp = Qm, np = function(r) {
  if (r == null || typeof r != "object" && typeof r != "function")
    return null;
  if (Km(r))
    return "String";
  if (Jm(r))
    return "Number";
  if ($m(r))
    return "Boolean";
  if (ep(r))
    return "Symbol";
  if (tp(r))
    return "BigInt";
}, Gi = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, ll = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, qi;
Gi || (qi = function(r) {
  return !1;
});
var ya = Gi ? Gi.prototype.has : null, zs = ll ? ll.prototype.has : null;
!qi && !ya && (qi = function(r) {
  return !1;
});
var rp = qi || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (ya.call(r, ya), zs)
      try {
        zs.call(r, zs);
      } catch {
        return !0;
      }
    return r instanceof Gi;
  } catch {
  }
  return !1;
}, va = { exports: {} }, ip = qt, gf = St, sp = ip("%WeakSet%", !0), Us = gf("WeakSet.prototype.has", !0);
if (Us) {
  var Ys = gf("WeakMap.prototype.has", !0);
  va.exports = function(r) {
    if (!r || typeof r != "object")
      return !1;
    try {
      if (Us(r, Us), Ys)
        try {
          Ys(r, Ys);
        } catch {
          return !0;
        }
      return r instanceof sp;
    } catch {
    }
    return !1;
  };
} else
  va.exports = function(r) {
    return !1;
  };
var ap = va.exports, op = $c, up = tf, lp = rp, cp = ap, fp = function(r) {
  if (r && typeof r == "object") {
    if (op(r))
      return "Map";
    if (up(r))
      return "Set";
    if (lp(r))
      return "WeakMap";
    if (cp(r))
      return "WeakSet";
  }
  return !1;
}, yf = Function.prototype.toString, nr = typeof Reflect == "object" && Reflect !== null && Reflect.apply, da, Ni;
if (typeof nr == "function" && typeof Object.defineProperty == "function")
  try {
    da = Object.defineProperty({}, "length", {
      get: function() {
        throw Ni;
      }
    }), Ni = {}, nr(function() {
      throw 42;
    }, null, da);
  } catch (a) {
    a !== Ni && (nr = null);
  }
else
  nr = null;
var hp = /^\s*class\b/, ma = function(r) {
  try {
    var i = yf.call(r);
    return hp.test(i);
  } catch {
    return !1;
  }
}, Ws = function(r) {
  try {
    return ma(r) ? !1 : (yf.call(r), !0);
  } catch {
    return !1;
  }
}, Li = Object.prototype.toString, gp = "[object Object]", yp = "[object Function]", vp = "[object GeneratorFunction]", dp = "[object HTMLAllCollection]", mp = "[object HTML document.all class]", pp = "[object HTMLCollection]", _p = typeof Symbol == "function" && !!Symbol.toStringTag, Ep = !(0 in [,]), pa = function() {
  return !1;
};
if (typeof document == "object") {
  var kp = document.all;
  Li.call(kp) === Li.call(document.all) && (pa = function(r) {
    if ((Ep || !r) && (typeof r > "u" || typeof r == "object"))
      try {
        var i = Li.call(r);
        return (i === dp || i === mp || i === pp || i === gp) && r("") == null;
      } catch {
      }
    return !1;
  });
}
var xp = nr ? function(r) {
  if (pa(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  try {
    nr(r, null, da);
  } catch (i) {
    if (i !== Ni)
      return !1;
  }
  return !ma(r) && Ws(r);
} : function(r) {
  if (pa(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  if (_p)
    return Ws(r);
  if (ma(r))
    return !1;
  var i = Li.call(r);
  return i !== yp && i !== vp && !/^\[object HTML/.test(i) ? !1 : Ws(r);
}, Sp = xp, bp = Object.prototype.toString, vf = Object.prototype.hasOwnProperty, Ip = function(r, i, u) {
  for (var l = 0, f = r.length; l < f; l++)
    vf.call(r, l) && (u == null ? i(r[l], l, r) : i.call(u, r[l], l, r));
}, wp = function(r, i, u) {
  for (var l = 0, f = r.length; l < f; l++)
    u == null ? i(r.charAt(l), l, r) : i.call(u, r.charAt(l), l, r);
}, Np = function(r, i, u) {
  for (var l in r)
    vf.call(r, l) && (u == null ? i(r[l], l, r) : i.call(u, r[l], l, r));
}, Lp = function(r, i, u) {
  if (!Sp(i))
    throw new TypeError("iterator must be a function");
  var l;
  arguments.length >= 3 && (l = u), bp.call(r) === "[object Array]" ? Ip(r, i, l) : typeof r == "string" ? wp(r, i, l) : Np(r, i, l);
}, Tp = Lp, Cp = [
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], Xs = Cp, Op = typeof globalThis > "u" ? Xr : globalThis, Rp = function() {
  for (var r = [], i = 0; i < Xs.length; i++)
    typeof Op[Xs[i]] == "function" && (r[r.length] = Xs[i]);
  return r;
}, zi = Tp, Mp = Rp, cl = fr, Va = St, Ti = Fa, Pp = Va("Object.prototype.toString"), df = Dn(), fl = typeof globalThis > "u" ? Xr : globalThis, _a = Mp(), Ha = Va("String.prototype.slice"), js = Object.getPrototypeOf, Ap = Va("Array.prototype.indexOf", !0) || function(r, i) {
  for (var u = 0; u < r.length; u += 1)
    if (r[u] === i)
      return u;
  return -1;
}, Ui = { __proto__: null };
df && Ti && js ? zi(_a, function(a) {
  var r = new fl[a]();
  if (Symbol.toStringTag in r) {
    var i = js(r), u = Ti(i, Symbol.toStringTag);
    if (!u) {
      var l = js(i);
      u = Ti(l, Symbol.toStringTag);
    }
    Ui["$" + a] = cl(u.get);
  }
}) : zi(_a, function(a) {
  var r = new fl[a](), i = r.slice || r.set;
  i && (Ui["$" + a] = cl(i));
});
var Dp = function(r) {
  var i = !1;
  return zi(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    Ui,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(u, l) {
      if (!i)
        try {
          "$" + u(r) === l && (i = Ha(l, 1));
        } catch {
        }
    }
  ), i;
}, Fp = function(r) {
  var i = !1;
  return zi(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    Ui,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(u, l) {
      if (!i)
        try {
          u(r), i = Ha(l, 1);
        } catch {
        }
    }
  ), i;
}, Bp = function(r) {
  if (!r || typeof r != "object")
    return !1;
  if (!df) {
    var i = Ha(Pp(r), 8, -1);
    return Ap(_a, i) > -1 ? i : i !== "Object" ? !1 : Fp(r);
  }
  return Ti ? Dp(r) : null;
}, Gp = St, hl = Gp("ArrayBuffer.prototype.byteLength", !0), qp = uf, zp = function(r) {
  return qp(r) ? hl ? hl(r) : r.byteLength : NaN;
}, mf = _v, zt = St, gl = Yv, Up = qt, or = rm, Yp = Zc, yl = hm, vl = zc, dl = Qc, ml = uf, pl = km, _l = Im, El = Nm, kl = Ma, xl = np, Sl = fp, bl = Bp, Il = zp, wl = zt("SharedArrayBuffer.prototype.byteLength", !0), Nl = zt("Date.prototype.getTime"), Vs = Object.getPrototypeOf, Ll = zt("Object.prototype.toString"), Yi = Up("%Set%", !0), Ea = zt("Map.prototype.has", !0), Wi = zt("Map.prototype.get", !0), Tl = zt("Map.prototype.size", !0), Xi = zt("Set.prototype.add", !0), pf = zt("Set.prototype.delete", !0), ji = zt("Set.prototype.has", !0), Ci = zt("Set.prototype.size", !0);
function Cl(a, r, i, u) {
  for (var l = or(a), f; (f = l.next()) && !f.done; )
    if (Ct(r, f.value, i, u))
      return pf(a, f.value), !0;
  return !1;
}
function _f(a) {
  if (typeof a > "u")
    return null;
  if (typeof a != "object")
    return typeof a == "symbol" ? !1 : typeof a == "string" || typeof a == "number" ? +a == +a : !0;
}
function Wp(a, r, i, u, l, f) {
  var v = _f(i);
  if (v != null)
    return v;
  var y = Wi(r, v), m = mf({}, l, { strict: !1 });
  return typeof y > "u" && !Ea(r, v) || !Ct(u, y, m, f) ? !1 : !Ea(a, v) && Ct(u, y, m, f);
}
function Xp(a, r, i) {
  var u = _f(i);
  return u ?? (ji(r, u) && !ji(a, u));
}
function Ol(a, r, i, u, l, f) {
  for (var v = or(a), y, m; (y = v.next()) && !y.done; )
    if (m = y.value, // eslint-disable-next-line no-use-before-define
    Ct(i, m, l, f) && Ct(u, Wi(r, m), l, f))
      return pf(a, m), !0;
  return !1;
}
function Ct(a, r, i, u) {
  var l = i || {};
  if (l.strict ? yl(a, r) : a === r)
    return !0;
  var f = xl(a), v = xl(r);
  if (f !== v)
    return !1;
  if (!a || !r || typeof a != "object" && typeof r != "object")
    return l.strict ? yl(a, r) : a == r;
  var y = u.has(a), m = u.has(r), _;
  if (y && m) {
    if (u.get(a) === u.get(r))
      return !0;
  } else
    _ = {};
  return y || u.set(a, _), m || u.set(r, _), Hp(a, r, l, u);
}
function Rl(a) {
  return !a || typeof a != "object" || typeof a.length != "number" || typeof a.copy != "function" || typeof a.slice != "function" || a.length > 0 && typeof a[0] != "number" ? !1 : !!(a.constructor && a.constructor.isBuffer && a.constructor.isBuffer(a));
}
function jp(a, r, i, u) {
  if (Ci(a) !== Ci(r))
    return !1;
  for (var l = or(a), f = or(r), v, y, m; (v = l.next()) && !v.done; )
    if (v.value && typeof v.value == "object")
      m || (m = new Yi()), Xi(m, v.value);
    else if (!ji(r, v.value)) {
      if (i.strict || !Xp(a, r, v.value))
        return !1;
      m || (m = new Yi()), Xi(m, v.value);
    }
  if (m) {
    for (; (y = f.next()) && !y.done; )
      if (y.value && typeof y.value == "object") {
        if (!Cl(m, y.value, i.strict, u))
          return !1;
      } else if (!i.strict && !ji(a, y.value) && !Cl(m, y.value, i.strict, u))
        return !1;
    return Ci(m) === 0;
  }
  return !0;
}
function Vp(a, r, i, u) {
  if (Tl(a) !== Tl(r))
    return !1;
  for (var l = or(a), f = or(r), v, y, m, _, k, p; (v = l.next()) && !v.done; )
    if (_ = v.value[0], k = v.value[1], _ && typeof _ == "object")
      m || (m = new Yi()), Xi(m, _);
    else if (p = Wi(r, _), typeof p > "u" && !Ea(r, _) || !Ct(k, p, i, u)) {
      if (i.strict || !Wp(a, r, _, k, i, u))
        return !1;
      m || (m = new Yi()), Xi(m, _);
    }
  if (m) {
    for (; (y = f.next()) && !y.done; )
      if (_ = y.value[0], p = y.value[1], _ && typeof _ == "object") {
        if (!Ol(m, a, _, p, i, u))
          return !1;
      } else if (!i.strict && (!a.has(_) || !Ct(Wi(a, _), p, i, u)) && !Ol(m, a, _, p, mf({}, i, { strict: !1 }), u))
        return !1;
    return Ci(m) === 0;
  }
  return !0;
}
function Hp(a, r, i, u) {
  var l, f;
  if (typeof a != typeof r || a == null || r == null || Ll(a) !== Ll(r) || vl(a) !== vl(r))
    return !1;
  var v = dl(a), y = dl(r);
  if (v !== y)
    return !1;
  var m = a instanceof Error, _ = r instanceof Error;
  if (m !== _ || (m || _) && (a.name !== r.name || a.message !== r.message))
    return !1;
  var k = _l(a), p = _l(r);
  if (k !== p || (k || p) && (a.source !== r.source || gl(a) !== gl(r)))
    return !1;
  var x = pl(a), S = pl(r);
  if (x !== S || (x || S) && Nl(a) !== Nl(r) || i.strict && Vs && Vs(a) !== Vs(r))
    return !1;
  var b = bl(a), L = bl(r);
  if (b !== L)
    return !1;
  if (b || L) {
    if (a.length !== r.length)
      return !1;
    for (l = 0; l < a.length; l++)
      if (a[l] !== r[l])
        return !1;
    return !0;
  }
  var T = Rl(a), O = Rl(r);
  if (T !== O)
    return !1;
  if (T || O) {
    if (a.length !== r.length)
      return !1;
    for (l = 0; l < a.length; l++)
      if (a[l] !== r[l])
        return !1;
    return !0;
  }
  var P = ml(a), R = ml(r);
  if (P !== R)
    return !1;
  if (P || R)
    return Il(a) !== Il(r) ? !1 : typeof Uint8Array == "function" && Ct(new Uint8Array(a), new Uint8Array(r), i, u);
  var B = El(a), M = El(r);
  if (B !== M)
    return !1;
  if (B || M)
    return wl(a) !== wl(r) ? !1 : typeof Uint8Array == "function" && Ct(new Uint8Array(a), new Uint8Array(r), i, u);
  if (typeof a != typeof r)
    return !1;
  var z = kl(a), q = kl(r);
  if (z.length !== q.length)
    return !1;
  for (z.sort(), q.sort(), l = z.length - 1; l >= 0; l--)
    if (z[l] != q[l])
      return !1;
  for (l = z.length - 1; l >= 0; l--)
    if (f = z[l], !Ct(a[f], r[f], i, u))
      return !1;
  var U = Sl(a), A = Sl(r);
  return U !== A ? !1 : U === "Set" || A === "Set" ? jp(a, r, i, u) : U === "Map" ? Vp(a, r, i, u) : !0;
}
var Zp = function(r, i, u) {
  return Ct(r, i, u, Yp());
};
const Qp = /* @__PURE__ */ _c(Zp);
var Kp = Object.defineProperty, Ee = (a, r) => Kp(a, "name", { value: r, configurable: !0 }), Jp = class {
  constructor(r) {
    this.direction = !1, this.compareProperties = !0;
    var i, u, l;
    this.precision = 10 ** -((i = r == null ? void 0 : r.precision) != null ? i : 17), this.direction = (u = r == null ? void 0 : r.direction) != null ? u : !1, this.compareProperties = (l = r == null ? void 0 : r.compareProperties) != null ? l : !0;
  }
  compare(r, i) {
    if (r.type !== i.type || !Ar(r, i))
      return !1;
    switch (r.type) {
      case "Point":
        return this.compareCoord(r.coordinates, i.coordinates);
      case "LineString":
        return this.compareLine(r.coordinates, i.coordinates);
      case "Polygon":
        return this.comparePolygon(r, i);
      case "GeometryCollection":
        return this.compareGeometryCollection(r, i);
      case "Feature":
        return this.compareFeature(r, i);
      case "FeatureCollection":
        return this.compareFeatureCollection(r, i);
      default:
        if (r.type.startsWith("Multi")) {
          const u = ka(r), l = ka(
            i
          );
          return u.every(
            (f) => l.some((v) => this.compare(f, v))
          );
        }
    }
    return !1;
  }
  compareCoord(r, i) {
    return r.length === i.length && r.every((u, l) => Math.abs(u - i[l]) < this.precision);
  }
  compareLine(r, i, u = 0, l = !1) {
    if (!Ar(r, i))
      return !1;
    const f = r;
    let v = i;
    if (l && !this.compareCoord(f[0], v[0])) {
      const m = this.fixStartIndex(v, f);
      if (m)
        v = m;
      else
        return !1;
    }
    const y = this.compareCoord(f[u], v[u]);
    return this.direction || y ? this.comparePath(f, v) : this.compareCoord(f[u], v[v.length - (1 + u)]) ? this.comparePath(f.slice().reverse(), v) : !1;
  }
  fixStartIndex(r, i) {
    let u, l = -1;
    for (let f = 0; f < r.length; f++)
      if (this.compareCoord(r[f], i[0])) {
        l = f;
        break;
      }
    return l >= 0 && (u = [].concat(
      r.slice(l, r.length),
      r.slice(1, l + 1)
    )), u;
  }
  comparePath(r, i) {
    return r.every((u, l) => this.compareCoord(u, i[l]));
  }
  comparePolygon(r, i) {
    if (this.compareLine(r.coordinates[0], i.coordinates[0], 1, !0)) {
      const u = r.coordinates.slice(1, r.coordinates.length), l = i.coordinates.slice(1, i.coordinates.length);
      return u.every(
        (f) => l.some((v) => this.compareLine(f, v, 1, !0))
      );
    }
    return !1;
  }
  compareGeometryCollection(r, i) {
    return Ar(r.geometries, i.geometries) && this.compareBBox(r, i) && r.geometries.every((u, l) => this.compare(u, i.geometries[l]));
  }
  compareFeature(r, i) {
    return r.id === i.id && (this.compareProperties ? Qp(r.properties, i.properties) : !0) && this.compareBBox(r, i) && this.compare(r.geometry, i.geometry);
  }
  compareFeatureCollection(r, i) {
    return Ar(r.features, i.features) && this.compareBBox(r, i) && r.features.every((u, l) => this.compare(u, i.features[l]));
  }
  compareBBox(r, i) {
    return !r.bbox && !i.bbox || (r.bbox && i.bbox ? this.compareCoord(r.bbox, i.bbox) : !1);
  }
};
Ee(Jp, "GeojsonEquality");
function Ar(a, r) {
  return a.coordinates ? a.coordinates.length === r.coordinates.length : a.length === r.length;
}
Ee(Ar, "sameLength");
function ka(a) {
  return a.coordinates.map((r) => ({
    type: a.type.replace("Multi", ""),
    coordinates: r
  }));
}
Ee(ka, "explode");
var it = 63710088e-1, Ef = {
  centimeters: it * 100,
  centimetres: it * 100,
  degrees: 360 / (2 * Math.PI),
  feet: it * 3.28084,
  inches: it * 39.37,
  kilometers: it / 1e3,
  kilometres: it / 1e3,
  meters: it,
  metres: it,
  miles: it / 1609.344,
  millimeters: it * 1e3,
  millimetres: it * 1e3,
  nauticalmiles: it / 1852,
  radians: 1,
  yards: it * 1.0936
}, Ml = {
  acres: 247105e-9,
  centimeters: 1e4,
  centimetres: 1e4,
  feet: 10.763910417,
  hectares: 1e-4,
  inches: 1550.003100006,
  kilometers: 1e-6,
  kilometres: 1e-6,
  meters: 1,
  metres: 1,
  miles: 386e-9,
  nauticalmiles: 29155334959812285e-23,
  millimeters: 1e6,
  millimetres: 1e6,
  yards: 1.195990046
};
function Ot(a, r, i = {}) {
  const u = { type: "Feature" };
  return (i.id === 0 || i.id) && (u.id = i.id), i.bbox && (u.bbox = i.bbox), u.properties = r || {}, u.geometry = a, u;
}
Ee(Ot, "feature");
function $p(a, r, i = {}) {
  switch (a) {
    case "Point":
      return Ft(r).geometry;
    case "LineString":
      return Ht(r).geometry;
    case "Polygon":
      return Qr(r).geometry;
    case "MultiPoint":
      return xf(r).geometry;
    case "MultiLineString":
      return kf(r).geometry;
    case "MultiPolygon":
      return Za(r).geometry;
    default:
      throw new Error(a + " is invalid");
  }
}
Ee($p, "geometry");
function Ft(a, r, i = {}) {
  if (!a)
    throw new Error("coordinates is required");
  if (!Array.isArray(a))
    throw new Error("coordinates must be an Array");
  if (a.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Vi(a[0]) || !Vi(a[1]))
    throw new Error("coordinates must contain numbers");
  return Ot({
    type: "Point",
    coordinates: a
  }, r, i);
}
Ee(Ft, "point");
function e0(a, r, i = {}) {
  return $t(
    a.map((u) => Ft(u, r)),
    i
  );
}
Ee(e0, "points");
function Qr(a, r, i = {}) {
  for (const l of a) {
    if (l.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (l[l.length - 1].length !== l[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let f = 0; f < l[l.length - 1].length; f++)
      if (l[l.length - 1][f] !== l[0][f])
        throw new Error("First and last Position are not equivalent.");
  }
  return Ot({
    type: "Polygon",
    coordinates: a
  }, r, i);
}
Ee(Qr, "polygon");
function t0(a, r, i = {}) {
  return $t(
    a.map((u) => Qr(u, r)),
    i
  );
}
Ee(t0, "polygons");
function Ht(a, r, i = {}) {
  if (a.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return Ot({
    type: "LineString",
    coordinates: a
  }, r, i);
}
Ee(Ht, "lineString");
function n0(a, r, i = {}) {
  return $t(
    a.map((u) => Ht(u, r)),
    i
  );
}
Ee(n0, "lineStrings");
function $t(a, r = {}) {
  const i = { type: "FeatureCollection" };
  return r.id && (i.id = r.id), r.bbox && (i.bbox = r.bbox), i.features = a, i;
}
Ee($t, "featureCollection");
function kf(a, r, i = {}) {
  return Ot({
    type: "MultiLineString",
    coordinates: a
  }, r, i);
}
Ee(kf, "multiLineString");
function xf(a, r, i = {}) {
  return Ot({
    type: "MultiPoint",
    coordinates: a
  }, r, i);
}
Ee(xf, "multiPoint");
function Za(a, r, i = {}) {
  return Ot({
    type: "MultiPolygon",
    coordinates: a
  }, r, i);
}
Ee(Za, "multiPolygon");
function r0(a, r, i = {}) {
  return Ot({
    type: "GeometryCollection",
    geometries: a
  }, r, i);
}
Ee(r0, "geometryCollection");
function i0(a, r = 0) {
  if (r && !(r >= 0))
    throw new Error("precision must be a positive number");
  const i = Math.pow(10, r || 0);
  return Math.round(a * i) / i;
}
Ee(i0, "round");
function Qa(a, r = "kilometers") {
  const i = Ef[r];
  if (!i)
    throw new Error(r + " units is invalid");
  return a * i;
}
Ee(Qa, "radiansToLength");
function is(a, r = "kilometers") {
  const i = Ef[r];
  if (!i)
    throw new Error(r + " units is invalid");
  return a / i;
}
Ee(is, "lengthToRadians");
function s0(a, r) {
  return Sf(is(a, r));
}
Ee(s0, "lengthToDegrees");
function a0(a) {
  let r = a % 360;
  return r < 0 && (r += 360), r;
}
Ee(a0, "bearingToAzimuth");
function Sf(a) {
  return a % (2 * Math.PI) * 180 / Math.PI;
}
Ee(Sf, "radiansToDegrees");
function o0(a) {
  return a % 360 * Math.PI / 180;
}
Ee(o0, "degreesToRadians");
function u0(a, r = "kilometers", i = "kilometers") {
  if (!(a >= 0))
    throw new Error("length must be a positive number");
  return Qa(is(a, r), i);
}
Ee(u0, "convertLength");
function l0(a, r = "meters", i = "kilometers") {
  if (!(a >= 0))
    throw new Error("area must be a positive number");
  const u = Ml[r];
  if (!u)
    throw new Error("invalid original units");
  const l = Ml[i];
  if (!l)
    throw new Error("invalid final units");
  return a / u * l;
}
Ee(l0, "convertArea");
function Vi(a) {
  return !isNaN(a) && a !== null && !Array.isArray(a);
}
Ee(Vi, "isNumber");
function Ka(a) {
  return a !== null && typeof a == "object" && !Array.isArray(a);
}
Ee(Ka, "isObject");
function c0(a) {
  if (!a)
    throw new Error("bbox is required");
  if (!Array.isArray(a))
    throw new Error("bbox must be an Array");
  if (a.length !== 4 && a.length !== 6)
    throw new Error("bbox must be an Array of 4 or 6 numbers");
  a.forEach((r) => {
    if (!Vi(r))
      throw new Error("bbox must only contain numbers");
  });
}
Ee(c0, "validateBBox");
function f0(a) {
  if (!a)
    throw new Error("id is required");
  if (["string", "number"].indexOf(typeof a) === -1)
    throw new Error("id must be a number or a string");
}
Ee(f0, "validateId");
var h0 = Object.defineProperty, Xe = (a, r) => h0(a, "name", { value: r, configurable: !0 });
function gr(a, r, i) {
  if (a !== null)
    for (var u, l, f, v, y, m, _, k = 0, p = 0, x, S = a.type, b = S === "FeatureCollection", L = S === "Feature", T = b ? a.features.length : 1, O = 0; O < T; O++) {
      _ = b ? a.features[O].geometry : L ? a.geometry : a, x = _ ? _.type === "GeometryCollection" : !1, y = x ? _.geometries.length : 1;
      for (var P = 0; P < y; P++) {
        var R = 0, B = 0;
        if (v = x ? _.geometries[P] : _, v !== null) {
          m = v.coordinates;
          var M = v.type;
          switch (k = i && (M === "Polygon" || M === "MultiPolygon") ? 1 : 0, M) {
            case null:
              break;
            case "Point":
              if (r(
                m,
                p,
                O,
                R,
                B
              ) === !1)
                return !1;
              p++, R++;
              break;
            case "LineString":
            case "MultiPoint":
              for (u = 0; u < m.length; u++) {
                if (r(
                  m[u],
                  p,
                  O,
                  R,
                  B
                ) === !1)
                  return !1;
                p++, M === "MultiPoint" && R++;
              }
              M === "LineString" && R++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (u = 0; u < m.length; u++) {
                for (l = 0; l < m[u].length - k; l++) {
                  if (r(
                    m[u][l],
                    p,
                    O,
                    R,
                    B
                  ) === !1)
                    return !1;
                  p++;
                }
                M === "MultiLineString" && R++, M === "Polygon" && B++;
              }
              M === "Polygon" && R++;
              break;
            case "MultiPolygon":
              for (u = 0; u < m.length; u++) {
                for (B = 0, l = 0; l < m[u].length; l++) {
                  for (f = 0; f < m[u][l].length - k; f++) {
                    if (r(
                      m[u][l][f],
                      p,
                      O,
                      R,
                      B
                    ) === !1)
                      return !1;
                    p++;
                  }
                  B++;
                }
                R++;
              }
              break;
            case "GeometryCollection":
              for (u = 0; u < v.geometries.length; u++)
                if (gr(v.geometries[u], r, i) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
Xe(gr, "coordEach");
function g0(a, r, i, u) {
  var l = i;
  return gr(
    a,
    function(f, v, y, m, _) {
      v === 0 && i === void 0 ? l = f : l = r(
        l,
        f,
        v,
        y,
        m,
        _
      );
    },
    u
  ), l;
}
Xe(g0, "coordReduce");
function bf(a, r) {
  var i;
  switch (a.type) {
    case "FeatureCollection":
      for (i = 0; i < a.features.length && r(a.features[i].properties, i) !== !1; i++)
        ;
      break;
    case "Feature":
      r(a.properties, 0);
      break;
  }
}
Xe(bf, "propEach");
function y0(a, r, i) {
  var u = i;
  return bf(a, function(l, f) {
    f === 0 && i === void 0 ? u = l : u = r(u, l, f);
  }), u;
}
Xe(y0, "propReduce");
function Hi(a, r) {
  if (a.type === "Feature")
    r(a, 0);
  else if (a.type === "FeatureCollection")
    for (var i = 0; i < a.features.length && r(a.features[i], i) !== !1; i++)
      ;
}
Xe(Hi, "featureEach");
function v0(a, r, i) {
  var u = i;
  return Hi(a, function(l, f) {
    f === 0 && i === void 0 ? u = l : u = r(u, l, f);
  }), u;
}
Xe(v0, "featureReduce");
function d0(a) {
  var r = [];
  return gr(a, function(i) {
    r.push(i);
  }), r;
}
Xe(d0, "coordAll");
function yr(a, r) {
  var i, u, l, f, v, y, m, _, k, p, x = 0, S = a.type === "FeatureCollection", b = a.type === "Feature", L = S ? a.features.length : 1;
  for (i = 0; i < L; i++) {
    for (y = S ? a.features[i].geometry : b ? a.geometry : a, _ = S ? a.features[i].properties : b ? a.properties : {}, k = S ? a.features[i].bbox : b ? a.bbox : void 0, p = S ? a.features[i].id : b ? a.id : void 0, m = y ? y.type === "GeometryCollection" : !1, v = m ? y.geometries.length : 1, l = 0; l < v; l++) {
      if (f = m ? y.geometries[l] : y, f === null) {
        if (r(
          null,
          x,
          _,
          k,
          p
        ) === !1)
          return !1;
        continue;
      }
      switch (f.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (r(
            f,
            x,
            _,
            k,
            p
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (u = 0; u < f.geometries.length; u++)
            if (r(
              f.geometries[u],
              x,
              _,
              k,
              p
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    x++;
  }
}
Xe(yr, "geomEach");
function m0(a, r, i) {
  var u = i;
  return yr(
    a,
    function(l, f, v, y, m) {
      f === 0 && i === void 0 ? u = l : u = r(
        u,
        l,
        f,
        v,
        y,
        m
      );
    }
  ), u;
}
Xe(m0, "geomReduce");
function ss(a, r) {
  yr(a, function(i, u, l, f, v) {
    var y = i === null ? null : i.type;
    switch (y) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return r(
          Ot(i, l, { bbox: f, id: v }),
          u,
          0
        ) === !1 ? !1 : void 0;
    }
    var m;
    switch (y) {
      case "MultiPoint":
        m = "Point";
        break;
      case "MultiLineString":
        m = "LineString";
        break;
      case "MultiPolygon":
        m = "Polygon";
        break;
    }
    for (var _ = 0; _ < i.coordinates.length; _++) {
      var k = i.coordinates[_], p = {
        type: m,
        coordinates: k
      };
      if (r(Ot(p, l), u, _) === !1)
        return !1;
    }
  });
}
Xe(ss, "flattenEach");
function p0(a, r, i) {
  var u = i;
  return ss(
    a,
    function(l, f, v) {
      f === 0 && v === 0 && i === void 0 ? u = l : u = r(
        u,
        l,
        f,
        v
      );
    }
  ), u;
}
Xe(p0, "flattenReduce");
function If(a, r) {
  ss(a, function(i, u, l) {
    var f = 0;
    if (i.geometry) {
      var v = i.geometry.type;
      if (!(v === "Point" || v === "MultiPoint")) {
        var y, m = 0, _ = 0, k = 0;
        if (gr(
          i,
          function(p, x, S, b, L) {
            if (y === void 0 || u > m || b > _ || L > k) {
              y = p, m = u, _ = b, k = L, f = 0;
              return;
            }
            var T = Ht(
              [y, p],
              i.properties
            );
            if (r(
              T,
              u,
              l,
              L,
              f
            ) === !1)
              return !1;
            f++, y = p;
          }
        ) === !1)
          return !1;
      }
    }
  });
}
Xe(If, "segmentEach");
function _0(a, r, i) {
  var u = i, l = !1;
  return If(
    a,
    function(f, v, y, m, _) {
      l === !1 && i === void 0 ? u = f : u = r(
        u,
        f,
        v,
        y,
        m,
        _
      ), l = !0;
    }
  ), u;
}
Xe(_0, "segmentReduce");
function wf(a, r) {
  if (!a)
    throw new Error("geojson is required");
  ss(a, function(i, u, l) {
    if (i.geometry !== null) {
      var f = i.geometry.type, v = i.geometry.coordinates;
      switch (f) {
        case "LineString":
          if (r(i, u, l, 0, 0) === !1)
            return !1;
          break;
        case "Polygon":
          for (var y = 0; y < v.length; y++)
            if (r(
              Ht(v[y], i.properties),
              u,
              l,
              y
            ) === !1)
              return !1;
          break;
      }
    }
  });
}
Xe(wf, "lineEach");
function E0(a, r, i) {
  var u = i;
  return wf(
    a,
    function(l, f, v, y) {
      f === 0 && i === void 0 ? u = l : u = r(
        u,
        l,
        f,
        v,
        y
      );
    }
  ), u;
}
Xe(E0, "lineReduce");
function k0(a, r) {
  if (r = r || {}, !Ka(r))
    throw new Error("options is invalid");
  var i = r.featureIndex || 0, u = r.multiFeatureIndex || 0, l = r.geometryIndex || 0, f = r.segmentIndex || 0, v = r.properties, y;
  switch (a.type) {
    case "FeatureCollection":
      i < 0 && (i = a.features.length + i), v = v || a.features[i].properties, y = a.features[i].geometry;
      break;
    case "Feature":
      v = v || a.properties, y = a.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      y = a;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (y === null)
    return null;
  var m = y.coordinates;
  switch (y.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      return f < 0 && (f = m.length + f - 1), Ht(
        [m[f], m[f + 1]],
        v,
        r
      );
    case "Polygon":
      return l < 0 && (l = m.length + l), f < 0 && (f = m[l].length + f - 1), Ht(
        [
          m[l][f],
          m[l][f + 1]
        ],
        v,
        r
      );
    case "MultiLineString":
      return u < 0 && (u = m.length + u), f < 0 && (f = m[u].length + f - 1), Ht(
        [
          m[u][f],
          m[u][f + 1]
        ],
        v,
        r
      );
    case "MultiPolygon":
      return u < 0 && (u = m.length + u), l < 0 && (l = m[u].length + l), f < 0 && (f = m[u][l].length - f - 1), Ht(
        [
          m[u][l][f],
          m[u][l][f + 1]
        ],
        v,
        r
      );
  }
  throw new Error("geojson is invalid");
}
Xe(k0, "findSegment");
function x0(a, r) {
  if (r = r || {}, !Ka(r))
    throw new Error("options is invalid");
  var i = r.featureIndex || 0, u = r.multiFeatureIndex || 0, l = r.geometryIndex || 0, f = r.coordIndex || 0, v = r.properties, y;
  switch (a.type) {
    case "FeatureCollection":
      i < 0 && (i = a.features.length + i), v = v || a.features[i].properties, y = a.features[i].geometry;
      break;
    case "Feature":
      v = v || a.properties, y = a.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      y = a;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (y === null)
    return null;
  var m = y.coordinates;
  switch (y.type) {
    case "Point":
      return Ft(m, v, r);
    case "MultiPoint":
      return u < 0 && (u = m.length + u), Ft(m[u], v, r);
    case "LineString":
      return f < 0 && (f = m.length + f), Ft(m[f], v, r);
    case "Polygon":
      return l < 0 && (l = m.length + l), f < 0 && (f = m[l].length + f), Ft(m[l][f], v, r);
    case "MultiLineString":
      return u < 0 && (u = m.length + u), f < 0 && (f = m[u].length + f), Ft(m[u][f], v, r);
    case "MultiPolygon":
      return u < 0 && (u = m.length + u), l < 0 && (l = m[u].length + l), f < 0 && (f = m[u][l].length - f), Ft(
        m[u][l][f],
        v,
        r
      );
  }
  throw new Error("geojson is invalid");
}
Xe(x0, "findPoint");
var S0 = Object.defineProperty, b0 = (a, r) => S0(a, "name", { value: r, configurable: !0 });
function Nf(a, r = {}) {
  if (a.bbox != null && r.recompute !== !0)
    return a.bbox;
  const i = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return gr(a, (u) => {
    i[0] > u[0] && (i[0] = u[0]), i[1] > u[1] && (i[1] = u[1]), i[2] < u[0] && (i[2] = u[0]), i[3] < u[1] && (i[3] = u[1]);
  }), i;
}
b0(Nf, "bbox");
var I0 = Object.defineProperty, w0 = (a, r) => I0(a, "name", { value: r, configurable: !0 });
function Lf(a, r = {}) {
  const i = Nf(a), u = (i[0] + i[2]) / 2, l = (i[1] + i[3]) / 2;
  return Ft([u, l], r.properties, r);
}
w0(Lf, "center");
var Tf = { exports: {} };
(function(a, r) {
  (function(i, u) {
    a.exports = u();
  })(Xr, function() {
    function i(o, e) {
      if (!(o instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function u(o, e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(o, n.key, n);
      }
    }
    function l(o, e, t) {
      return e && u(o.prototype, e), t && u(o, t), o;
    }
    function f(o, e) {
      if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
      o.prototype = Object.create(e && e.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), e && y(o, e);
    }
    function v(o) {
      return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, v(o);
    }
    function y(o, e) {
      return y = Object.setPrototypeOf || function(t, n) {
        return t.__proto__ = n, t;
      }, y(o, e);
    }
    function m() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function _(o, e, t) {
      return _ = m() ? Reflect.construct : function(n, s, c) {
        var h = [null];
        h.push.apply(h, s);
        var g = new (Function.bind.apply(n, h))();
        return c && y(g, c.prototype), g;
      }, _.apply(null, arguments);
    }
    function k(o) {
      var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return k = function(t) {
        if (t === null || (n = t, Function.toString.call(n).indexOf("[native code]") === -1)) return t;
        var n;
        if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
        if (e !== void 0) {
          if (e.has(t)) return e.get(t);
          e.set(t, s);
        }
        function s() {
          return _(t, arguments, v(this).constructor);
        }
        return s.prototype = Object.create(t.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), y(s, t);
      }, k(o);
    }
    function p(o) {
      if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return o;
    }
    function x(o, e) {
      if (e && (typeof e == "object" || typeof e == "function")) return e;
      if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return p(o);
    }
    function S(o) {
      var e = m();
      return function() {
        var t, n = v(o);
        if (e) {
          var s = v(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);
        return x(this, t);
      };
    }
    function b(o, e, t) {
      return b = typeof Reflect < "u" && Reflect.get ? Reflect.get : function(n, s, c) {
        var h = function(d, E) {
          for (; !Object.prototype.hasOwnProperty.call(d, E) && (d = v(d)) !== null; ) ;
          return d;
        }(n, s);
        if (h) {
          var g = Object.getOwnPropertyDescriptor(h, s);
          return g.get ? g.get.call(c) : g.value;
        }
      }, b(o, e, t || o);
    }
    function L(o) {
      return function(e) {
        if (Array.isArray(e)) return O(e);
      }(o) || function(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
      }(o) || T(o) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function T(o, e) {
      if (o) {
        if (typeof o == "string") return O(o, e);
        var t = Object.prototype.toString.call(o).slice(8, -1);
        return t === "Object" && o.constructor && (t = o.constructor.name), t === "Map" || t === "Set" ? Array.from(o) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? O(o, e) : void 0;
      }
    }
    function O(o, e) {
      (e == null || e > o.length) && (e = o.length);
      for (var t = 0, n = new Array(e); t < e; t++) n[t] = o[t];
      return n;
    }
    function P(o, e) {
      var t = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
      if (!t) {
        if (Array.isArray(o) || (t = T(o)) || e) {
          t && (o = t);
          var n = 0, s = function() {
          };
          return { s, n: function() {
            return n >= o.length ? { done: !0 } : { done: !1, value: o[n++] };
          }, e: function(d) {
            throw d;
          }, f: s };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var c, h = !0, g = !1;
      return { s: function() {
        t = t.call(o);
      }, n: function() {
        var d = t.next();
        return h = d.done, d;
      }, e: function(d) {
        g = !0, c = d;
      }, f: function() {
        try {
          h || t.return == null || t.return();
        } finally {
          if (g) throw c;
        }
      } };
    }
    var R = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getEndCapStyle", value: function() {
        return this._endCapStyle;
      } }, { key: "isSingleSided", value: function() {
        return this._isSingleSided;
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._quadrantSegments = e, this._quadrantSegments === 0 && (this._joinStyle = o.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = o.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), e <= 0 && (this._quadrantSegments = 1), this._joinStyle !== o.JOIN_ROUND && (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS);
      } }, { key: "getJoinStyle", value: function() {
        return this._joinStyle;
      } }, { key: "setJoinStyle", value: function(e) {
        this._joinStyle = e;
      } }, { key: "setSimplifyFactor", value: function(e) {
        this._simplifyFactor = e < 0 ? 0 : e;
      } }, { key: "getSimplifyFactor", value: function() {
        return this._simplifyFactor;
      } }, { key: "getQuadrantSegments", value: function() {
        return this._quadrantSegments;
      } }, { key: "setEndCapStyle", value: function(e) {
        this._endCapStyle = e;
      } }, { key: "getMitreLimit", value: function() {
        return this._mitreLimit;
      } }, { key: "setMitreLimit", value: function(e) {
        this._mitreLimit = e;
      } }, { key: "setSingleSided", value: function(e) {
        this._isSingleSided = e;
      } }], [{ key: "constructor_", value: function() {
        if (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = o.CAP_ROUND, this._joinStyle = o.JOIN_ROUND, this._mitreLimit = o.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = o.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setQuadrantSegments(e);
          } else if (arguments.length === 2) {
            var t = arguments[0], n = arguments[1];
            this.setQuadrantSegments(t), this.setEndCapStyle(n);
          } else if (arguments.length === 4) {
            var s = arguments[0], c = arguments[1], h = arguments[2], g = arguments[3];
            this.setQuadrantSegments(s), this.setEndCapStyle(c), this.setJoinStyle(h), this.setMitreLimit(g);
          }
        }
      } }, { key: "bufferDistanceError", value: function(e) {
        var t = Math.PI / 2 / e;
        return 1 - Math.cos(t / 2);
      } }]), o;
    }();
    R.CAP_ROUND = 1, R.CAP_FLAT = 2, R.CAP_SQUARE = 3, R.JOIN_ROUND = 1, R.JOIN_MITRE = 2, R.JOIN_BEVEL = 3, R.DEFAULT_QUADRANT_SEGMENTS = 8, R.DEFAULT_MITRE_LIMIT = 5, R.DEFAULT_SIMPLIFY_FACTOR = 0.01;
    var B = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this, n)).name = Object.keys({ Exception: t })[0], s;
      }
      return l(t, [{ key: "toString", value: function() {
        return this.message;
      } }]), t;
    }(k(Error)), M = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this, n)).name = Object.keys({ IllegalArgumentException: t })[0], s;
      }
      return t;
    }(B), z = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "filter", value: function(e) {
      } }]), o;
    }();
    function q() {
    }
    function U() {
    }
    function A() {
    }
    var H, ee, Z, ae, D, Q, ie, de, Oe = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "equalsWithTolerance", value: function(e, t, n) {
        return Math.abs(e - t) <= n;
      } }]), o;
    }(), Se = function() {
      function o(e, t) {
        i(this, o), this.low = t || 0, this.high = e || 0;
      }
      return l(o, null, [{ key: "toBinaryString", value: function(e) {
        var t, n = "";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.high & t) === t ? "1" : "0";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.low & t) === t ? "1" : "0";
        return n;
      } }]), o;
    }();
    function K() {
    }
    function Fe() {
    }
    K.NaN = NaN, K.isNaN = function(o) {
      return Number.isNaN(o);
    }, K.isInfinite = function(o) {
      return !Number.isFinite(o);
    }, K.MAX_VALUE = Number.MAX_VALUE, K.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, K.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (Q = 2146435072, ie = new Float64Array(1), de = new Int32Array(ie.buffer), K.doubleToLongBits = function(o) {
      ie[0] = o;
      var e = 0 | de[0], t = 0 | de[1];
      return (t & Q) === Q && 1048575 & t && e !== 0 && (e = 0, t = 2146959360), new Se(t, e);
    }, K.longBitsToDouble = function(o) {
      return de[0] = o.low, de[1] = o.high, ie[0];
    }) : (H = 1023, ee = Math.log2, Z = Math.floor, ae = Math.pow, D = function() {
      for (var o = 53; o > 0; o--) {
        var e = ae(2, o) - 1;
        if (Z(ee(e)) + 1 === o) return e;
      }
      return 0;
    }(), K.doubleToLongBits = function(o) {
      var e, t, n, s, c, h, g, d, E;
      if (o < 0 || 1 / o === Number.NEGATIVE_INFINITY ? (h = 1 << 31, o = -o) : h = 0, o === 0) return new Se(d = h, E = 0);
      if (o === 1 / 0) return new Se(d = 2146435072 | h, E = 0);
      if (o != o) return new Se(d = 2146959360, E = 0);
      if (s = 0, E = 0, (e = Z(o)) > 1) if (e <= D) (s = Z(ee(e))) <= 20 ? (E = 0, d = e << 20 - s & 1048575) : (E = e % (t = ae(2, n = s - 20)) << 32 - n, d = e / t & 1048575);
      else for (n = e, E = 0; (n = Z(t = n / 2)) !== 0; ) s++, E >>>= 1, E |= (1 & d) << 31, d >>>= 1, t !== n && (d |= 524288);
      if (g = s + H, c = e === 0, e = o - e, s < 52 && e !== 0) for (n = 0; ; ) {
        if ((t = 2 * e) >= 1 ? (e = t - 1, c ? (g--, c = !1) : (n <<= 1, n |= 1, s++)) : (e = t, c ? --g == 0 && (s++, c = !1) : (n <<= 1, s++)), s === 20) d |= n, n = 0;
        else if (s === 52) {
          E |= n;
          break;
        }
        if (t === 1) {
          s < 20 ? d |= n << 20 - s : s < 52 && (E |= n << 52 - s);
          break;
        }
      }
      return d |= g << 20, new Se(d |= h, E);
    }, K.longBitsToDouble = function(o) {
      var e, t, n, s, c = o.high, h = o.low, g = c & 1 << 31 ? -1 : 1;
      for (n = ((2146435072 & c) >> 20) - H, s = 0, t = 1 << 19, e = 1; e <= 20; e++) c & t && (s += ae(2, -e)), t >>>= 1;
      for (t = 1 << 31, e = 21; e <= 52; e++) h & t && (s += ae(2, -e)), t >>>= 1;
      if (n === -1023) {
        if (s === 0) return 0 * g;
        n = -1022;
      } else {
        if (n === 1024) return s === 0 ? g / 0 : NaN;
        s += 1;
      }
      return g * s * ae(2, n);
    });
    var we = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this, n)).name = Object.keys({ RuntimeException: t })[0], s;
      }
      return t;
    }(B), ze = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, null, [{ key: "constructor_", value: function() {
        if (arguments.length === 0) we.constructor_.call(this);
        else if (arguments.length === 1) {
          var n = arguments[0];
          we.constructor_.call(this, n);
        }
      } }]), t;
    }(we), fe = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "shouldNeverReachHere", value: function() {
        if (arguments.length === 0) o.shouldNeverReachHere(null);
        else if (arguments.length === 1) {
          var e = arguments[0];
          throw new ze("Should never reach here" + (e !== null ? ": " + e : ""));
        }
      } }, { key: "isTrue", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          o.isTrue(e, null);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          if (!t) throw n === null ? new ze() : new ze(n);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          o.equals(e, t, null);
        } else if (arguments.length === 3) {
          var n = arguments[0], s = arguments[1], c = arguments[2];
          if (!s.equals(n)) throw new ze("Expected " + n + " but encountered " + s + (c !== null ? ": " + c : ""));
        }
      } }]), o;
    }(), ht = new ArrayBuffer(8), mr = new Float64Array(ht), Jr = new Int32Array(ht), C = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getM", value: function() {
        return K.NaN;
      } }, { key: "setOrdinate", value: function(e, t) {
        switch (e) {
          case o.X:
            this.x = t;
            break;
          case o.Y:
            this.y = t;
            break;
          case o.Z:
            this.setZ(t);
            break;
          default:
            throw new M("Invalid ordinate index: " + e);
        }
      } }, { key: "equals2D", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.x === e.x && this.y === e.y;
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return !!Oe.equalsWithTolerance(this.x, t.x, n) && !!Oe.equalsWithTolerance(this.y, t.y, n);
        }
      } }, { key: "setM", value: function(e) {
        throw new M("Invalid ordinate index: " + o.M);
      } }, { key: "getZ", value: function() {
        return this.z;
      } }, { key: "getOrdinate", value: function(e) {
        switch (e) {
          case o.X:
            return this.x;
          case o.Y:
            return this.y;
          case o.Z:
            return this.getZ();
        }
        throw new M("Invalid ordinate index: " + e);
      } }, { key: "equals3D", value: function(e) {
        return this.x === e.x && this.y === e.y && (this.getZ() === e.getZ() || K.isNaN(this.getZ()) && K.isNaN(e.getZ()));
      } }, { key: "equals", value: function(e) {
        return e instanceof o && this.equals2D(e);
      } }, { key: "equalInZ", value: function(e, t) {
        return Oe.equalsWithTolerance(this.getZ(), e.getZ(), t);
      } }, { key: "setX", value: function(e) {
        this.x = e;
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.x < t.x ? -1 : this.x > t.x ? 1 : this.y < t.y ? -1 : this.y > t.y ? 1 : 0;
      } }, { key: "getX", value: function() {
        return this.x;
      } }, { key: "setZ", value: function(e) {
        this.z = e;
      } }, { key: "clone", value: function() {
        try {
          return null;
        } catch (e) {
          if (e instanceof CloneNotSupportedException) return fe.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
          throw e;
        }
      } }, { key: "copy", value: function() {
        return new o(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
      } }, { key: "distance3D", value: function(e) {
        var t = this.x - e.x, n = this.y - e.y, s = this.getZ() - e.getZ();
        return Math.sqrt(t * t + n * n + s * s);
      } }, { key: "getY", value: function() {
        return this.y;
      } }, { key: "setY", value: function(e) {
        this.y = e;
      } }, { key: "distance", value: function(e) {
        var t = this.x - e.x, n = this.y - e.y;
        return Math.sqrt(t * t + n * n);
      } }, { key: "hashCode", value: function() {
        var e = 17;
        return e = 37 * (e = 37 * e + o.hashCode(this.x)) + o.hashCode(this.y);
      } }, { key: "setCoordinate", value: function(e) {
        this.x = e.x, this.y = e.y, this.z = e.getZ();
      } }, { key: "interfaces_", get: function() {
        return [q, U, A];
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.z = null, arguments.length === 0) o.constructor_.call(this, 0, 0);
        else if (arguments.length === 1) {
          var e = arguments[0];
          o.constructor_.call(this, e.x, e.y, e.getZ());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          o.constructor_.call(this, t, n, o.NULL_ORDINATE);
        } else if (arguments.length === 3) {
          var s = arguments[0], c = arguments[1], h = arguments[2];
          this.x = s, this.y = c, this.z = h;
        }
      } }, { key: "hashCode", value: function(e) {
        return mr[0] = e, Jr[0] ^ Jr[1];
      } }]), o;
    }(), $r = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "compare", value: function(e, t) {
        var n = o.compare(e.x, t.x);
        if (n !== 0) return n;
        var s = o.compare(e.y, t.y);
        return s !== 0 ? s : this._dimensionsToTest <= 2 ? 0 : o.compare(e.getZ(), t.getZ());
      } }, { key: "interfaces_", get: function() {
        return [Fe];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimensionsToTest = 2, arguments.length === 0) o.constructor_.call(this, 2);
        else if (arguments.length === 1) {
          var e = arguments[0];
          if (e !== 2 && e !== 3) throw new M("only 2 or 3 dimensions may be specified");
          this._dimensionsToTest = e;
        }
      } }, { key: "compare", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : K.isNaN(e) ? K.isNaN(t) ? 0 : -1 : K.isNaN(t) ? 1 : 0;
      } }]), o;
    }();
    C.DimensionalComparator = $r, C.NULL_ORDINATE = K.NaN, C.X = 0, C.Y = 1, C.Z = 2, C.M = 3;
    var xe = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getArea", value: function() {
        return this.getWidth() * this.getHeight();
      } }, { key: "equals", value: function(e) {
        if (!(e instanceof o)) return !1;
        var t = e;
        return this.isNull() ? t.isNull() : this._maxx === t.getMaxX() && this._maxy === t.getMaxY() && this._minx === t.getMinX() && this._miny === t.getMinY();
      } }, { key: "intersection", value: function(e) {
        if (this.isNull() || e.isNull() || !this.intersects(e)) return new o();
        var t = this._minx > e._minx ? this._minx : e._minx, n = this._miny > e._miny ? this._miny : e._miny;
        return new o(t, this._maxx < e._maxx ? this._maxx : e._maxx, n, this._maxy < e._maxy ? this._maxy : e._maxy);
      } }, { key: "isNull", value: function() {
        return this._maxx < this._minx;
      } }, { key: "getMaxX", value: function() {
        return this._maxx;
      } }, { key: "covers", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof C) {
            var e = arguments[0];
            return this.covers(e.x, e.y);
          }
          if (arguments[0] instanceof o) {
            var t = arguments[0];
            return !this.isNull() && !t.isNull() && t.getMinX() >= this._minx && t.getMaxX() <= this._maxx && t.getMinY() >= this._miny && t.getMaxY() <= this._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          return !this.isNull() && n >= this._minx && n <= this._maxx && s >= this._miny && s <= this._maxy;
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof o) {
            var e = arguments[0];
            return !this.isNull() && !e.isNull() && !(e._minx > this._maxx || e._maxx < this._minx || e._miny > this._maxy || e._maxy < this._miny);
          }
          if (arguments[0] instanceof C) {
            var t = arguments[0];
            return this.intersects(t.x, t.y);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof C && arguments[1] instanceof C) {
            var n = arguments[0], s = arguments[1];
            if (this.isNull()) return !1;
            var c = n.x < s.x ? n.x : s.x;
            if (c > this._maxx) return !1;
            var h = n.x > s.x ? n.x : s.x;
            if (h < this._minx) return !1;
            var g = n.y < s.y ? n.y : s.y;
            if (g > this._maxy) return !1;
            var d = n.y > s.y ? n.y : s.y;
            return !(d < this._miny);
          }
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var E = arguments[0], w = arguments[1];
            return !this.isNull() && !(E > this._maxx || E < this._minx || w > this._maxy || w < this._miny);
          }
        }
      } }, { key: "getMinY", value: function() {
        return this._miny;
      } }, { key: "getDiameter", value: function() {
        if (this.isNull()) return 0;
        var e = this.getWidth(), t = this.getHeight();
        return Math.sqrt(e * e + t * t);
      } }, { key: "getMinX", value: function() {
        return this._minx;
      } }, { key: "expandToInclude", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof C) {
            var e = arguments[0];
            this.expandToInclude(e.x, e.y);
          } else if (arguments[0] instanceof o) {
            var t = arguments[0];
            if (t.isNull()) return null;
            this.isNull() ? (this._minx = t.getMinX(), this._maxx = t.getMaxX(), this._miny = t.getMinY(), this._maxy = t.getMaxY()) : (t._minx < this._minx && (this._minx = t._minx), t._maxx > this._maxx && (this._maxx = t._maxx), t._miny < this._miny && (this._miny = t._miny), t._maxy > this._maxy && (this._maxy = t._maxy));
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          this.isNull() ? (this._minx = n, this._maxx = n, this._miny = s, this._maxy = s) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), s < this._miny && (this._miny = s), s > this._maxy && (this._maxy = s));
        }
      } }, { key: "minExtent", value: function() {
        if (this.isNull()) return 0;
        var e = this.getWidth(), t = this.getHeight();
        return e < t ? e : t;
      } }, { key: "getWidth", value: function() {
        return this.isNull() ? 0 : this._maxx - this._minx;
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.isNull() ? t.isNull() ? 0 : -1 : t.isNull() ? 1 : this._minx < t._minx ? -1 : this._minx > t._minx ? 1 : this._miny < t._miny ? -1 : this._miny > t._miny ? 1 : this._maxx < t._maxx ? -1 : this._maxx > t._maxx ? 1 : this._maxy < t._maxy ? -1 : this._maxy > t._maxy ? 1 : 0;
      } }, { key: "translate", value: function(e, t) {
        if (this.isNull()) return null;
        this.init(this.getMinX() + e, this.getMaxX() + e, this.getMinY() + t, this.getMaxY() + t);
      } }, { key: "copy", value: function() {
        return new o(this);
      } }, { key: "toString", value: function() {
        return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
      } }, { key: "setToNull", value: function() {
        this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
      } }, { key: "disjoint", value: function(e) {
        return !(!this.isNull() && !e.isNull()) || e._minx > this._maxx || e._maxx < this._minx || e._miny > this._maxy || e._maxy < this._miny;
      } }, { key: "getHeight", value: function() {
        return this.isNull() ? 0 : this._maxy - this._miny;
      } }, { key: "maxExtent", value: function() {
        if (this.isNull()) return 0;
        var e = this.getWidth(), t = this.getHeight();
        return e > t ? e : t;
      } }, { key: "expandBy", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.expandBy(e, e);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          if (this.isNull()) return null;
          this._minx -= t, this._maxx += t, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
        }
      } }, { key: "contains", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof o) {
            var e = arguments[0];
            return this.covers(e);
          }
          if (arguments[0] instanceof C) {
            var t = arguments[0];
            return this.covers(t);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          return this.covers(n, s);
        }
      } }, { key: "centre", value: function() {
        return this.isNull() ? null : new C((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
      } }, { key: "init", value: function() {
        if (arguments.length === 0) this.setToNull();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof C) {
            var e = arguments[0];
            this.init(e.x, e.x, e.y, e.y);
          } else if (arguments[0] instanceof o) {
            var t = arguments[0];
            this._minx = t._minx, this._maxx = t._maxx, this._miny = t._miny, this._maxy = t._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          this.init(n.x, s.x, n.y, s.y);
        } else if (arguments.length === 4) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3];
          c < h ? (this._minx = c, this._maxx = h) : (this._minx = h, this._maxx = c), g < d ? (this._miny = g, this._maxy = d) : (this._miny = d, this._maxy = g);
        }
      } }, { key: "getMaxY", value: function() {
        return this._maxy;
      } }, { key: "distance", value: function(e) {
        if (this.intersects(e)) return 0;
        var t = 0;
        this._maxx < e._minx ? t = e._minx - this._maxx : this._minx > e._maxx && (t = this._minx - e._maxx);
        var n = 0;
        return this._maxy < e._miny ? n = e._miny - this._maxy : this._miny > e._maxy && (n = this._miny - e._maxy), t === 0 ? n : n === 0 ? t : Math.sqrt(t * t + n * n);
      } }, { key: "hashCode", value: function() {
        var e = 17;
        return e = 37 * (e = 37 * (e = 37 * (e = 37 * e + C.hashCode(this._minx)) + C.hashCode(this._maxx)) + C.hashCode(this._miny)) + C.hashCode(this._maxy);
      } }, { key: "interfaces_", get: function() {
        return [q, A];
      } }], [{ key: "constructor_", value: function() {
        if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof C) {
            var e = arguments[0];
            this.init(e.x, e.x, e.y, e.y);
          } else if (arguments[0] instanceof o) {
            var t = arguments[0];
            this.init(t);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          this.init(n.x, s.x, n.y, s.y);
        } else if (arguments.length === 4) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3];
          this.init(c, h, g, d);
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return n.x >= (e.x < t.x ? e.x : t.x) && n.x <= (e.x > t.x ? e.x : t.x) && n.y >= (e.y < t.y ? e.y : t.y) && n.y <= (e.y > t.y ? e.y : t.y);
        }
        if (arguments.length === 4) {
          var s = arguments[0], c = arguments[1], h = arguments[2], g = arguments[3], d = Math.min(h.x, g.x), E = Math.max(h.x, g.x), w = Math.min(s.x, c.x), N = Math.max(s.x, c.x);
          return !(w > E) && !(N < d) && (d = Math.min(h.y, g.y), E = Math.max(h.y, g.y), w = Math.min(s.y, c.y), N = Math.max(s.y, c.y), !(w > E) && !(N < d));
        }
      } }]), o;
    }(), J = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "isGeometryCollection", value: function() {
        return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getFactory", value: function() {
        return this._factory;
      } }, { key: "getGeometryN", value: function(e) {
        return this;
      } }, { key: "getArea", value: function() {
        return 0;
      } }, { key: "isRectangle", value: function() {
        return !1;
      } }, { key: "equalsExact", value: function(e) {
        return this === e || this.equalsExact(e, 0);
      } }, { key: "geometryChanged", value: function() {
        this.apply(o.geometryChangedFilter);
      } }, { key: "geometryChangedAction", value: function() {
        this._envelope = null;
      } }, { key: "equalsNorm", value: function(e) {
        return e !== null && this.norm().equalsExact(e.norm());
      } }, { key: "getLength", value: function() {
        return 0;
      } }, { key: "getNumGeometries", value: function() {
        return 1;
      } }, { key: "compareTo", value: function() {
        var e;
        if (arguments.length === 1) {
          var t = arguments[0];
          return e = t, this.getTypeCode() !== e.getTypeCode() ? this.getTypeCode() - e.getTypeCode() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
        }
        if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          return e = n, this.getTypeCode() !== e.getTypeCode() ? this.getTypeCode() - e.getTypeCode() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(n, s);
        }
      } }, { key: "getUserData", value: function() {
        return this._userData;
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "getEnvelope", value: function() {
        return this.getFactory().toGeometry(this.getEnvelopeInternal());
      } }, { key: "checkNotGeometryCollection", value: function(e) {
        if (e.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION) throw new M("This method does not support GeometryCollection arguments");
      } }, { key: "equal", value: function(e, t, n) {
        return n === 0 ? e.equals(t) : e.distance(t) <= n;
      } }, { key: "norm", value: function() {
        var e = this.copy();
        return e.normalize(), e;
      } }, { key: "reverse", value: function() {
        var e = this.reverseInternal();
        return this.envelope != null && (e.envelope = this.envelope.copy()), e.setSRID(this.getSRID()), e;
      } }, { key: "copy", value: function() {
        var e = this.copyInternal();
        return e.envelope = this._envelope == null ? null : this._envelope.copy(), e._SRID = this._SRID, e._userData = this._userData, e;
      } }, { key: "getPrecisionModel", value: function() {
        return this._factory.getPrecisionModel();
      } }, { key: "getEnvelopeInternal", value: function() {
        return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new xe(this._envelope);
      } }, { key: "setSRID", value: function(e) {
        this._SRID = e;
      } }, { key: "setUserData", value: function(e) {
        this._userData = e;
      } }, { key: "compare", value: function(e, t) {
        for (var n = e.iterator(), s = t.iterator(); n.hasNext() && s.hasNext(); ) {
          var c = n.next(), h = s.next(), g = c.compareTo(h);
          if (g !== 0) return g;
        }
        return n.hasNext() ? 1 : s.hasNext() ? -1 : 0;
      } }, { key: "hashCode", value: function() {
        return this.getEnvelopeInternal().hashCode();
      } }, { key: "isEquivalentClass", value: function(e) {
        return this.getClass() === e.getClass();
      } }, { key: "isGeometryCollectionOrDerived", value: function() {
        return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === o.TYPECODE_MULTIPOINT || this.getTypeCode() === o.TYPECODE_MULTILINESTRING || this.getTypeCode() === o.TYPECODE_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [U, q, A];
      } }, { key: "getClass", value: function() {
        return o;
      } }], [{ key: "hasNonEmptyElements", value: function(e) {
        for (var t = 0; t < e.length; t++) if (!e[t].isEmpty()) return !0;
        return !1;
      } }, { key: "hasNullElements", value: function(e) {
        for (var t = 0; t < e.length; t++) if (e[t] === null) return !0;
        return !1;
      } }]), o;
    }();
    J.constructor_ = function(o) {
      o && (this._envelope = null, this._userData = null, this._factory = o, this._SRID = o.getSRID());
    }, J.TYPECODE_POINT = 0, J.TYPECODE_MULTIPOINT = 1, J.TYPECODE_LINESTRING = 2, J.TYPECODE_LINEARRING = 3, J.TYPECODE_MULTILINESTRING = 4, J.TYPECODE_POLYGON = 5, J.TYPECODE_MULTIPOLYGON = 6, J.TYPECODE_GEOMETRYCOLLECTION = 7, J.TYPENAME_POINT = "Point", J.TYPENAME_MULTIPOINT = "MultiPoint", J.TYPENAME_LINESTRING = "LineString", J.TYPENAME_LINEARRING = "LinearRing", J.TYPENAME_MULTILINESTRING = "MultiLineString", J.TYPENAME_POLYGON = "Polygon", J.TYPENAME_MULTIPOLYGON = "MultiPolygon", J.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", J.geometryChangedFilter = { get interfaces_() {
      return [z];
    }, filter: function(o) {
      o.geometryChangedAction();
    } };
    var I = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "toLocationSymbol", value: function(e) {
        switch (e) {
          case o.EXTERIOR:
            return "e";
          case o.BOUNDARY:
            return "b";
          case o.INTERIOR:
            return "i";
          case o.NONE:
            return "-";
        }
        throw new M("Unknown location value: " + e);
      } }]), o;
    }();
    I.INTERIOR = 0, I.BOUNDARY = 1, I.EXTERIOR = 2, I.NONE = -1;
    var le = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "add", value: function() {
      } }, { key: "addAll", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }, { key: "iterator", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "toArray", value: function() {
      } }, { key: "remove", value: function() {
      } }]), o;
    }(), Ne = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this, n)).name = Object.keys({ NoSuchElementException: t })[0], s;
      }
      return t;
    }(B), oe = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this, n)).name = Object.keys({ UnsupportedOperationException: t })[0], s;
      }
      return t;
    }(B), pr = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        return i(this, t), e.apply(this, arguments);
      }
      return l(t, [{ key: "contains", value: function() {
      } }]), t;
    }(le), tt = function(o, e) {
      f(n, o);
      var t = S(n);
      function n(s) {
        var c;
        return i(this, n), (c = t.call(this)).map = /* @__PURE__ */ new Map(), s instanceof le && c.addAll(s), c;
      }
      return l(n, [{ key: "contains", value: function(s) {
        var c = s.hashCode ? s.hashCode() : s;
        return !!this.map.has(c);
      } }, { key: "add", value: function(s) {
        var c = s.hashCode ? s.hashCode() : s;
        return !this.map.has(c) && !!this.map.set(c, s);
      } }, { key: "addAll", value: function(s) {
        var c, h = P(s);
        try {
          for (h.s(); !(c = h.n()).done; ) {
            var g = c.value;
            this.add(g);
          }
        } catch (d) {
          h.e(d);
        } finally {
          h.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new oe();
      } }, { key: "size", value: function() {
        return this.map.size;
      } }, { key: "isEmpty", value: function() {
        return this.map.size === 0;
      } }, { key: "toArray", value: function() {
        return Array.from(this.map.values());
      } }, { key: "iterator", value: function() {
        return new be(this.map);
      } }, { key: e, value: function() {
        return this.map;
      } }]), n;
    }(pr, Symbol.iterator), be = function() {
      function o(e) {
        i(this, o), this.iterator = e.values();
        var t = this.iterator.next(), n = t.done, s = t.value;
        this.done = n, this.value = s;
      }
      return l(o, [{ key: "next", value: function() {
        if (this.done) throw new Ne();
        var e = this.value, t = this.iterator.next(), n = t.done, s = t.value;
        return this.done = n, this.value = s, e;
      } }, { key: "hasNext", value: function() {
        return !this.done;
      } }, { key: "remove", value: function() {
        throw new oe();
      } }]), o;
    }(), W = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "opposite", value: function(e) {
        return e === o.LEFT ? o.RIGHT : e === o.RIGHT ? o.LEFT : e;
      } }]), o;
    }();
    W.ON = 0, W.LEFT = 1, W.RIGHT = 2;
    var pn = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this, n)).name = Object.keys({ EmptyStackException: t })[0], s;
      }
      return t;
    }(B), Rt = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this, n)).name = Object.keys({ IndexOutOfBoundsException: t })[0], s;
      }
      return t;
    }(B), nt = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        return i(this, t), e.apply(this, arguments);
      }
      return l(t, [{ key: "get", value: function() {
      } }, { key: "set", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }]), t;
    }(le), Fn = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), (n = e.call(this)).array = [], n;
      }
      return l(t, [{ key: "add", value: function(n) {
        return this.array.push(n), !0;
      } }, { key: "get", value: function(n) {
        if (n < 0 || n >= this.size()) throw new Rt();
        return this.array[n];
      } }, { key: "push", value: function(n) {
        return this.array.push(n), n;
      } }, { key: "pop", value: function() {
        if (this.array.length === 0) throw new pn();
        return this.array.pop();
      } }, { key: "peek", value: function() {
        if (this.array.length === 0) throw new pn();
        return this.array[this.array.length - 1];
      } }, { key: "empty", value: function() {
        return this.array.length === 0;
      } }, { key: "isEmpty", value: function() {
        return this.empty();
      } }, { key: "search", value: function(n) {
        return this.array.indexOf(n);
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }]), t;
    }(nt);
    function ue(o, e) {
      return o.interfaces_ && o.interfaces_.indexOf(e) > -1;
    }
    var _n = function() {
      function o(e) {
        i(this, o), this.str = e;
      }
      return l(o, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), o;
    }(), st = function() {
      function o(e) {
        i(this, o), this.value = e;
      }
      return l(o, [{ key: "intValue", value: function() {
        return this.value;
      } }, { key: "compareTo", value: function(e) {
        return this.value < e ? -1 : this.value > e ? 1 : 0;
      } }], [{ key: "compare", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      } }, { key: "isNan", value: function(e) {
        return Number.isNaN(e);
      } }, { key: "valueOf", value: function(e) {
        return new o(e);
      } }]), o;
    }(), Bn = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "isWhitespace", value: function(e) {
        return e <= 32 && e >= 0 || e === 127;
      } }, { key: "toUpperCase", value: function(e) {
        return e.toUpperCase();
      } }]), o;
    }(), te = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "le", value: function(e) {
        return this._hi < e._hi || this._hi === e._hi && this._lo <= e._lo;
      } }, { key: "extractSignificantDigits", value: function(e, t) {
        var n = this.abs(), s = o.magnitude(n._hi), c = o.TEN.pow(s);
        (n = n.divide(c)).gt(o.TEN) ? (n = n.divide(o.TEN), s += 1) : n.lt(o.ONE) && (n = n.multiply(o.TEN), s -= 1);
        for (var h = s + 1, g = new _n(), d = o.MAX_PRINT_DIGITS - 1, E = 0; E <= d; E++) {
          e && E === h && g.append(".");
          var w = Math.trunc(n._hi);
          if (w < 0) break;
          var N = !1, F = 0;
          w > 9 ? (N = !0, F = "9") : F = "0" + w, g.append(F), n = n.subtract(o.valueOf(w)).multiply(o.TEN), N && n.selfAdd(o.TEN);
          var j = !0, X = o.magnitude(n._hi);
          if (X < 0 && Math.abs(X) >= d - E && (j = !1), !j) break;
        }
        return t[0] = s, g.toString();
      } }, { key: "sqr", value: function() {
        return this.multiply(this);
      } }, { key: "doubleValue", value: function() {
        return this._hi + this._lo;
      } }, { key: "subtract", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0];
          return this.add(e.negate());
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return this.add(-t);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 1 && arguments[0] instanceof o) {
          var e = arguments[0];
          return this._hi === e._hi && this._lo === e._lo;
        }
      } }, { key: "isZero", value: function() {
        return this._hi === 0 && this._lo === 0;
      } }, { key: "selfSubtract", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-e._hi, -e._lo);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-t, 0);
        }
      } }, { key: "getSpecialNumberString", value: function() {
        return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
      } }, { key: "min", value: function(e) {
        return this.le(e) ? this : e;
      } }, { key: "selfDivide", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof o) {
            var e = arguments[0];
            return this.selfDivide(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            return this.selfDivide(t, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1], c = null, h = null, g = null, d = null, E = null, w = null, N = null, F = null;
          return E = this._hi / n, F = (c = (w = o.SPLIT * E) - (c = w - E)) * (g = (F = o.SPLIT * n) - (g = F - n)) - (N = E * n) + c * (d = n - g) + (h = E - c) * g + h * d, F = E + (w = (this._hi - N - F + this._lo - E * s) / n), this._hi = F, this._lo = E - F + w, this;
        }
      } }, { key: "dump", value: function() {
        return "DD<" + this._hi + ", " + this._lo + ">";
      } }, { key: "divide", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0], t = null, n = null, s = null, c = null, h = null, g = null, d = null, E = null;
          n = (h = this._hi / e._hi) - (t = (g = o.SPLIT * h) - (t = g - h)), E = t * (s = (E = o.SPLIT * e._hi) - (s = E - e._hi)) - (d = h * e._hi) + t * (c = e._hi - s) + n * s + n * c;
          var w = E = h + (g = (this._hi - d - E + this._lo - h * e._lo) / e._hi), N = h - E + g;
          return new o(w, N);
        }
        if (typeof arguments[0] == "number") {
          var F = arguments[0];
          return K.isNaN(F) ? o.createNaN() : o.copy(this).selfDivide(F, 0);
        }
      } }, { key: "ge", value: function(e) {
        return this._hi > e._hi || this._hi === e._hi && this._lo >= e._lo;
      } }, { key: "pow", value: function(e) {
        if (e === 0) return o.valueOf(1);
        var t = new o(this), n = o.valueOf(1), s = Math.abs(e);
        if (s > 1) for (; s > 0; ) s % 2 == 1 && n.selfMultiply(t), (s /= 2) > 0 && (t = t.sqr());
        else n = t;
        return e < 0 ? n.reciprocal() : n;
      } }, { key: "ceil", value: function() {
        if (this.isNaN()) return o.NaN;
        var e = Math.ceil(this._hi), t = 0;
        return e === this._hi && (t = Math.ceil(this._lo)), new o(e, t);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._hi < t._hi ? -1 : this._hi > t._hi ? 1 : this._lo < t._lo ? -1 : this._lo > t._lo ? 1 : 0;
      } }, { key: "rint", value: function() {
        return this.isNaN() ? this : this.add(0.5).floor();
      } }, { key: "setValue", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0];
          return this.init(e), this;
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return this.init(t), this;
        }
      } }, { key: "max", value: function(e) {
        return this.ge(e) ? this : e;
      } }, { key: "sqrt", value: function() {
        if (this.isZero()) return o.valueOf(0);
        if (this.isNegative()) return o.NaN;
        var e = 1 / Math.sqrt(this._hi), t = this._hi * e, n = o.valueOf(t), s = this.subtract(n.sqr())._hi * (0.5 * e);
        return n.add(s);
      } }, { key: "selfAdd", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof o) {
            var e = arguments[0];
            return this.selfAdd(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0], n = null, s = null, c = null, h = null, g = null, d = null;
            return h = (c = this._hi + t) - (g = c - this._hi), s = (d = (h = t - g + (this._hi - h)) + this._lo) + (c - (n = c + d)), this._hi = n + s, this._lo = s + (n - this._hi), this;
          }
        } else if (arguments.length === 2) {
          var E = arguments[0], w = arguments[1], N = null, F = null, j = null, X = null, $ = null, re = null, ce = null;
          X = this._hi + E, F = this._lo + w, $ = X - (re = X - this._hi), j = F - (ce = F - this._lo);
          var _e = (N = X + (re = ($ = E - re + (this._hi - $)) + F)) + (re = (j = w - ce + (this._lo - j)) + (re + (X - N))), Re = re + (N - _e);
          return this._hi = _e, this._lo = Re, this;
        }
      } }, { key: "selfMultiply", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof o) {
            var e = arguments[0];
            return this.selfMultiply(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            return this.selfMultiply(t, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1], c = null, h = null, g = null, d = null, E = null, w = null;
          c = (E = o.SPLIT * this._hi) - this._hi, w = o.SPLIT * n, c = E - c, h = this._hi - c, g = w - n;
          var N = (E = this._hi * n) + (w = c * (g = w - g) - E + c * (d = n - g) + h * g + h * d + (this._hi * s + this._lo * n)), F = w + (c = E - N);
          return this._hi = N, this._lo = F, this;
        }
      } }, { key: "selfSqr", value: function() {
        return this.selfMultiply(this);
      } }, { key: "floor", value: function() {
        if (this.isNaN()) return o.NaN;
        var e = Math.floor(this._hi), t = 0;
        return e === this._hi && (t = Math.floor(this._lo)), new o(e, t);
      } }, { key: "negate", value: function() {
        return this.isNaN() ? this : new o(-this._hi, -this._lo);
      } }, { key: "clone", value: function() {
        try {
          return null;
        } catch (e) {
          if (e instanceof CloneNotSupportedException) return null;
          throw e;
        }
      } }, { key: "multiply", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0];
          return e.isNaN() ? o.createNaN() : o.copy(this).selfMultiply(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return K.isNaN(t) ? o.createNaN() : o.copy(this).selfMultiply(t, 0);
        }
      } }, { key: "isNaN", value: function() {
        return K.isNaN(this._hi);
      } }, { key: "intValue", value: function() {
        return Math.trunc(this._hi);
      } }, { key: "toString", value: function() {
        var e = o.magnitude(this._hi);
        return e >= -3 && e <= 20 ? this.toStandardNotation() : this.toSciNotation();
      } }, { key: "toStandardNotation", value: function() {
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!0, t), s = t[0] + 1, c = n;
        if (n.charAt(0) === ".") c = "0" + n;
        else if (s < 0) c = "0." + o.stringOfChar("0", -s) + n;
        else if (n.indexOf(".") === -1) {
          var h = s - n.length;
          c = n + o.stringOfChar("0", h) + ".0";
        }
        return this.isNegative() ? "-" + c : c;
      } }, { key: "reciprocal", value: function() {
        var e, t, n, s, c = null, h = null, g = null, d = null;
        e = (n = 1 / this._hi) - (c = (g = o.SPLIT * n) - (c = g - n)), h = (d = o.SPLIT * this._hi) - this._hi;
        var E = n + (g = (1 - (s = n * this._hi) - (d = c * (h = d - h) - s + c * (t = this._hi - h) + e * h + e * t) - n * this._lo) / this._hi);
        return new o(E, n - E + g);
      } }, { key: "toSciNotation", value: function() {
        if (this.isZero()) return o.SCI_NOT_ZERO;
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!1, t), s = o.SCI_NOT_EXPONENT_CHAR + t[0];
        if (n.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + n);
        var c = "";
        n.length > 1 && (c = n.substring(1));
        var h = n.charAt(0) + "." + c;
        return this.isNegative() ? "-" + h + s : h + s;
      } }, { key: "abs", value: function() {
        return this.isNaN() ? o.NaN : this.isNegative() ? this.negate() : new o(this);
      } }, { key: "isPositive", value: function() {
        return this._hi > 0 || this._hi === 0 && this._lo > 0;
      } }, { key: "lt", value: function(e) {
        return this._hi < e._hi || this._hi === e._hi && this._lo < e._lo;
      } }, { key: "add", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0];
          return o.copy(this).selfAdd(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return o.copy(this).selfAdd(t);
        }
      } }, { key: "init", value: function() {
        if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            this._hi = e, this._lo = 0;
          } else if (arguments[0] instanceof o) {
            var t = arguments[0];
            this._hi = t._hi, this._lo = t._lo;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          this._hi = n, this._lo = s;
        }
      } }, { key: "gt", value: function(e) {
        return this._hi > e._hi || this._hi === e._hi && this._lo > e._lo;
      } }, { key: "isNegative", value: function() {
        return this._hi < 0 || this._hi === 0 && this._lo < 0;
      } }, { key: "trunc", value: function() {
        return this.isNaN() ? o.NaN : this.isPositive() ? this.floor() : this.ceil();
      } }, { key: "signum", value: function() {
        return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
      } }, { key: "interfaces_", get: function() {
        return [A, q, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._hi = 0, this._lo = 0, arguments.length === 0) this.init(0);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            this.init(e);
          } else if (arguments[0] instanceof o) {
            var t = arguments[0];
            this.init(t);
          } else if (typeof arguments[0] == "string") {
            var n = arguments[0];
            o.constructor_.call(this, o.parse(n));
          }
        } else if (arguments.length === 2) {
          var s = arguments[0], c = arguments[1];
          this.init(s, c);
        }
      } }, { key: "determinant", value: function() {
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2], s = arguments[3];
          return o.determinant(o.valueOf(e), o.valueOf(t), o.valueOf(n), o.valueOf(s));
        }
        if (arguments[3] instanceof o && arguments[2] instanceof o && arguments[0] instanceof o && arguments[1] instanceof o) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3], E = c.multiply(d).selfSubtract(h.multiply(g));
          return E;
        }
      } }, { key: "sqr", value: function(e) {
        return o.valueOf(e).selfMultiply(e);
      } }, { key: "valueOf", value: function() {
        if (typeof arguments[0] == "string") {
          var e = arguments[0];
          return o.parse(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return new o(t);
        }
      } }, { key: "sqrt", value: function(e) {
        return o.valueOf(e).sqrt();
      } }, { key: "parse", value: function(e) {
        for (var t = 0, n = e.length; Bn.isWhitespace(e.charAt(t)); ) t++;
        var s = !1;
        if (t < n) {
          var c = e.charAt(t);
          c !== "-" && c !== "+" || (t++, c === "-" && (s = !0));
        }
        for (var h = new o(), g = 0, d = 0, E = 0, w = !1; !(t >= n); ) {
          var N = e.charAt(t);
          if (t++, Bn.isDigit(N)) {
            var F = N - "0";
            h.selfMultiply(o.TEN), h.selfAdd(F), g++;
          } else {
            if (N !== ".") {
              if (N === "e" || N === "E") {
                var j = e.substring(t);
                try {
                  E = st.parseInt(j);
                } catch (_e) {
                  throw _e instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + j + " in string " + e) : _e;
                }
                break;
              }
              throw new NumberFormatException("Unexpected character '" + N + "' at position " + t + " in string " + e);
            }
            d = g, w = !0;
          }
        }
        var X = h;
        w || (d = g);
        var $ = g - d - E;
        if ($ === 0) X = h;
        else if ($ > 0) {
          var re = o.TEN.pow($);
          X = h.divide(re);
        } else if ($ < 0) {
          var ce = o.TEN.pow(-$);
          X = h.multiply(ce);
        }
        return s ? X.negate() : X;
      } }, { key: "createNaN", value: function() {
        return new o(K.NaN, K.NaN);
      } }, { key: "copy", value: function(e) {
        return new o(e);
      } }, { key: "magnitude", value: function(e) {
        var t = Math.abs(e), n = Math.log(t) / Math.log(10), s = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, s) <= t && (s += 1), s;
      } }, { key: "stringOfChar", value: function(e, t) {
        for (var n = new _n(), s = 0; s < t; s++) n.append(e);
        return n.toString();
      } }]), o;
    }();
    te.PI = new te(3.141592653589793, 12246467991473532e-32), te.TWO_PI = new te(6.283185307179586, 24492935982947064e-32), te.PI_2 = new te(1.5707963267948966, 6123233995736766e-32), te.E = new te(2.718281828459045, 14456468917292502e-32), te.NaN = new te(K.NaN, K.NaN), te.EPS = 123259516440783e-46, te.SPLIT = 134217729, te.MAX_PRINT_DIGITS = 32, te.TEN = te.valueOf(10), te.ONE = te.valueOf(1), te.SCI_NOT_EXPONENT_CHAR = "E", te.SCI_NOT_ZERO = "0.0E0";
    var En = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "orientationIndex", value: function(e, t, n) {
        var s = o.orientationIndexFilter(e, t, n);
        if (s <= 1) return s;
        var c = te.valueOf(t.x).selfAdd(-e.x), h = te.valueOf(t.y).selfAdd(-e.y), g = te.valueOf(n.x).selfAdd(-t.x), d = te.valueOf(n.y).selfAdd(-t.y);
        return c.selfMultiply(d).selfSubtract(h.selfMultiply(g)).signum();
      } }, { key: "signOfDet2x2", value: function() {
        if (arguments[3] instanceof te && arguments[2] instanceof te && arguments[0] instanceof te && arguments[1] instanceof te) {
          var e = arguments[0], t = arguments[1], n = arguments[2], s = arguments[3], c = e.multiply(s).selfSubtract(t.multiply(n));
          return c.signum();
        }
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var h = arguments[0], g = arguments[1], d = arguments[2], E = arguments[3], w = te.valueOf(h), N = te.valueOf(g), F = te.valueOf(d), j = te.valueOf(E), X = w.multiply(j).selfSubtract(N.multiply(F));
          return X.signum();
        }
      } }, { key: "intersection", value: function(e, t, n, s) {
        var c = new te(e.y).selfSubtract(t.y), h = new te(t.x).selfSubtract(e.x), g = new te(e.x).selfMultiply(t.y).selfSubtract(new te(t.x).selfMultiply(e.y)), d = new te(n.y).selfSubtract(s.y), E = new te(s.x).selfSubtract(n.x), w = new te(n.x).selfMultiply(s.y).selfSubtract(new te(s.x).selfMultiply(n.y)), N = h.multiply(w).selfSubtract(E.multiply(g)), F = d.multiply(g).selfSubtract(c.multiply(w)), j = c.multiply(E).selfSubtract(d.multiply(h)), X = N.selfDivide(j).doubleValue(), $ = F.selfDivide(j).doubleValue();
        return K.isNaN(X) || K.isInfinite(X) || K.isNaN($) || K.isInfinite($) ? null : new C(X, $);
      } }, { key: "orientationIndexFilter", value: function(e, t, n) {
        var s = null, c = (e.x - n.x) * (t.y - n.y), h = (e.y - n.y) * (t.x - n.x), g = c - h;
        if (c > 0) {
          if (h <= 0) return o.signum(g);
          s = c + h;
        } else {
          if (!(c < 0) || h >= 0) return o.signum(g);
          s = -c - h;
        }
        var d = o.DP_SAFE_EPSILON * s;
        return g >= d || -g >= d ? o.signum(g) : 2;
      } }, { key: "signum", value: function(e) {
        return e > 0 ? 1 : e < 0 ? -1 : 0;
      } }]), o;
    }();
    En.DP_SAFE_EPSILON = 1e-15;
    var ge = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "getM", value: function(e) {
        if (this.hasM()) {
          var t = this.getDimension() - this.getMeasures();
          return this.getOrdinate(e, t);
        }
        return K.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this.getOrdinate(e, 2) : K.NaN;
      } }, { key: "size", value: function() {
      } }, { key: "getOrdinate", value: function(e, t) {
      } }, { key: "getCoordinate", value: function() {
      } }, { key: "getCoordinateCopy", value: function(e) {
      } }, { key: "createCoordinate", value: function() {
      } }, { key: "getDimension", value: function() {
      } }, { key: "hasM", value: function() {
        return this.getMeasures() > 0;
      } }, { key: "getX", value: function(e) {
      } }, { key: "hasZ", value: function() {
        return this.getDimension() - this.getMeasures() > 2;
      } }, { key: "getMeasures", value: function() {
        return 0;
      } }, { key: "expandEnvelope", value: function(e) {
      } }, { key: "copy", value: function() {
      } }, { key: "getY", value: function(e) {
      } }, { key: "toCoordinateArray", value: function() {
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }]), o;
    }();
    ge.X = 0, ge.Y = 1, ge.Z = 2, ge.M = 3;
    var se = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "index", value: function(e, t, n) {
        return En.orientationIndex(e, t, n);
      } }, { key: "isCCW", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0], t = e.length - 1;
          if (t < 3) throw new M("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var n = e[0], s = 0, c = 1; c <= t; c++) {
            var h = e[c];
            h.y > n.y && (n = h, s = c);
          }
          var g = s;
          do
            (g -= 1) < 0 && (g = t);
          while (e[g].equals2D(n) && g !== s);
          var d = s;
          do
            d = (d + 1) % t;
          while (e[d].equals2D(n) && d !== s);
          var E = e[g], w = e[d];
          if (E.equals2D(n) || w.equals2D(n) || E.equals2D(w)) return !1;
          var N = o.index(E, n, w), F = null;
          return F = N === 0 ? E.x > w.x : N > 0, F;
        }
        if (ue(arguments[0], ge)) {
          var j = arguments[0], X = j.size() - 1;
          if (X < 3) throw new M("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var $ = j.getCoordinate(0), re = 0, ce = 1; ce <= X; ce++) {
            var _e = j.getCoordinate(ce);
            _e.y > $.y && ($ = _e, re = ce);
          }
          var Re = null, je = re;
          do
            (je -= 1) < 0 && (je = X), Re = j.getCoordinate(je);
          while (Re.equals2D($) && je !== re);
          var ct = null, wt = re;
          do
            wt = (wt + 1) % X, ct = j.getCoordinate(wt);
          while (ct.equals2D($) && wt !== re);
          if (Re.equals2D($) || ct.equals2D($) || Re.equals2D(ct)) return !1;
          var Xt = o.index(Re, $, ct);
          return Xt === 0 ? Re.x > ct.x : Xt > 0;
        }
      } }]), o;
    }();
    se.CLOCKWISE = -1, se.RIGHT = se.CLOCKWISE, se.COUNTERCLOCKWISE = 1, se.LEFT = se.COUNTERCLOCKWISE, se.COLLINEAR = 0, se.STRAIGHT = se.COLLINEAR;
    var as = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getCoordinate", value: function() {
        return this._minCoord;
      } }, { key: "getRightmostSide", value: function(e, t) {
        var n = this.getRightmostSideOfSegment(e, t);
        return n < 0 && (n = this.getRightmostSideOfSegment(e, t - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(e)), n;
      } }, { key: "findRightmostEdgeAtVertex", value: function() {
        var e = this._minDe.getEdge().getCoordinates();
        fe.isTrue(this._minIndex > 0 && this._minIndex < e.length, "rightmost point expected to be interior vertex of edge");
        var t = e[this._minIndex - 1], n = e[this._minIndex + 1], s = se.index(this._minCoord, n, t), c = !1;
        (t.y < this._minCoord.y && n.y < this._minCoord.y && s === se.COUNTERCLOCKWISE || t.y > this._minCoord.y && n.y > this._minCoord.y && s === se.CLOCKWISE) && (c = !0), c && (this._minIndex = this._minIndex - 1);
      } }, { key: "getRightmostSideOfSegment", value: function(e, t) {
        var n = e.getEdge().getCoordinates();
        if (t < 0 || t + 1 >= n.length || n[t].y === n[t + 1].y) return -1;
        var s = W.LEFT;
        return n[t].y < n[t + 1].y && (s = W.RIGHT), s;
      } }, { key: "getEdge", value: function() {
        return this._orientedDe;
      } }, { key: "checkForRightmostCoordinate", value: function(e) {
        for (var t = e.getEdge().getCoordinates(), n = 0; n < t.length - 1; n++) (this._minCoord === null || t[n].x > this._minCoord.x) && (this._minDe = e, this._minIndex = n, this._minCoord = t[n]);
      } }, { key: "findRightmostEdgeAtNode", value: function() {
        var e = this._minDe.getNode().getEdges();
        this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
      } }, { key: "findEdge", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          n.isForward() && this.checkForRightmostCoordinate(n);
        }
        fe.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === W.LEFT && (this._orientedDe = this._minDe.getSym());
      } }], [{ key: "constructor_", value: function() {
        this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
      } }]), o;
    }(), at = function(o) {
      f(t, o);
      var e = S(t);
      function t(n, s) {
        var c;
        return i(this, t), (c = e.call(this, s ? n + " [ " + s + " ]" : n)).pt = s ? new C(s) : void 0, c.name = Object.keys({ TopologyException: t })[0], c;
      }
      return l(t, [{ key: "getCoordinate", value: function() {
        return this.pt;
      } }]), t;
    }(we), _r = function() {
      function o() {
        i(this, o), this.array = [];
      }
      return l(o, [{ key: "addLast", value: function(e) {
        this.array.push(e);
      } }, { key: "removeFirst", value: function() {
        return this.array.shift();
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }]), o;
    }(), ne = function(o, e) {
      f(n, o);
      var t = S(n);
      function n(s) {
        var c;
        return i(this, n), (c = t.call(this)).array = [], s instanceof le && c.addAll(s), c;
      }
      return l(n, [{ key: "interfaces_", get: function() {
        return [nt, le];
      } }, { key: "ensureCapacity", value: function() {
      } }, { key: "add", value: function(s) {
        return arguments.length === 1 ? this.array.push(s) : this.array.splice(arguments[0], 0, arguments[1]), !0;
      } }, { key: "clear", value: function() {
        this.array = [];
      } }, { key: "addAll", value: function(s) {
        var c, h = P(s);
        try {
          for (h.s(); !(c = h.n()).done; ) {
            var g = c.value;
            this.array.push(g);
          }
        } catch (d) {
          h.e(d);
        } finally {
          h.f();
        }
      } }, { key: "set", value: function(s, c) {
        var h = this.array[s];
        return this.array[s] = c, h;
      } }, { key: "iterator", value: function() {
        return new os(this);
      } }, { key: "get", value: function(s) {
        if (s < 0 || s >= this.size()) throw new Rt();
        return this.array[s];
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "sort", value: function(s) {
        s ? this.array.sort(function(c, h) {
          return s.compare(c, h);
        }) : this.array.sort();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "remove", value: function(s) {
        for (var c = 0, h = this.array.length; c < h; c++) if (this.array[c] === s) return !!this.array.splice(c, 1);
        return !1;
      } }, { key: e, value: function() {
        return this.array.values();
      } }]), n;
    }(nt, Symbol.iterator), os = function() {
      function o(e) {
        i(this, o), this.arrayList = e, this.position = 0;
      }
      return l(o, [{ key: "next", value: function() {
        if (this.position === this.arrayList.size()) throw new Ne();
        return this.arrayList.get(this.position++);
      } }, { key: "hasNext", value: function() {
        return this.position < this.arrayList.size();
      } }, { key: "set", value: function(e) {
        return this.arrayList.set(this.position - 1, e);
      } }, { key: "remove", value: function() {
        this.arrayList.remove(this.arrayList.get(this.position));
      } }]), o;
    }(), us = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "clearVisitedEdges", value: function() {
        for (var e = this._dirEdgeList.iterator(); e.hasNext(); )
          e.next().setVisited(!1);
      } }, { key: "getRightmostCoordinate", value: function() {
        return this._rightMostCoord;
      } }, { key: "computeNodeDepth", value: function(e) {
        for (var t = null, n = e.getEdges().iterator(); n.hasNext(); ) {
          var s = n.next();
          if (s.isVisited() || s.getSym().isVisited()) {
            t = s;
            break;
          }
        }
        if (t === null) throw new at("unable to find edge to compute depths at " + e.getCoordinate());
        e.getEdges().computeDepths(t);
        for (var c = e.getEdges().iterator(); c.hasNext(); ) {
          var h = c.next();
          h.setVisited(!0), this.copySymDepths(h);
        }
      } }, { key: "computeDepth", value: function(e) {
        this.clearVisitedEdges();
        var t = this._finder.getEdge();
        t.getNode(), t.getLabel(), t.setEdgeDepths(W.RIGHT, e), this.copySymDepths(t), this.computeDepths(t);
      } }, { key: "create", value: function(e) {
        this.addReachable(e), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
      } }, { key: "findResultEdges", value: function() {
        for (var e = this._dirEdgeList.iterator(); e.hasNext(); ) {
          var t = e.next();
          t.getDepth(W.RIGHT) >= 1 && t.getDepth(W.LEFT) <= 0 && !t.isInteriorAreaEdge() && t.setInResult(!0);
        }
      } }, { key: "computeDepths", value: function(e) {
        var t = new tt(), n = new _r(), s = e.getNode();
        for (n.addLast(s), t.add(s), e.setVisited(!0); !n.isEmpty(); ) {
          var c = n.removeFirst();
          t.add(c), this.computeNodeDepth(c);
          for (var h = c.getEdges().iterator(); h.hasNext(); ) {
            var g = h.next().getSym();
            if (!g.isVisited()) {
              var d = g.getNode();
              t.contains(d) || (n.addLast(d), t.add(d));
            }
          }
        }
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._rightMostCoord.x < t._rightMostCoord.x ? -1 : this._rightMostCoord.x > t._rightMostCoord.x ? 1 : 0;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          for (var e = new xe(), t = this._dirEdgeList.iterator(); t.hasNext(); ) for (var n = t.next().getEdge().getCoordinates(), s = 0; s < n.length - 1; s++) e.expandToInclude(n[s]);
          this._env = e;
        }
        return this._env;
      } }, { key: "addReachable", value: function(e) {
        var t = new Fn();
        for (t.add(e); !t.empty(); ) {
          var n = t.pop();
          this.add(n, t);
        }
      } }, { key: "copySymDepths", value: function(e) {
        var t = e.getSym();
        t.setDepth(W.LEFT, e.getDepth(W.RIGHT)), t.setDepth(W.RIGHT, e.getDepth(W.LEFT));
      } }, { key: "add", value: function(e, t) {
        e.setVisited(!0), this._nodes.add(e);
        for (var n = e.getEdges().iterator(); n.hasNext(); ) {
          var s = n.next();
          this._dirEdgeList.add(s);
          var c = s.getSym().getNode();
          c.isVisited() || t.push(c);
        }
      } }, { key: "getNodes", value: function() {
        return this._nodes;
      } }, { key: "getDirectedEdges", value: function() {
        return this._dirEdgeList;
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        this._finder = null, this._dirEdgeList = new ne(), this._nodes = new ne(), this._rightMostCoord = null, this._env = null, this._finder = new as();
      } }]), o;
    }(), Er = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "intersection", value: function(e, t, n, s) {
        var c = e.x < t.x ? e.x : t.x, h = e.y < t.y ? e.y : t.y, g = e.x > t.x ? e.x : t.x, d = e.y > t.y ? e.y : t.y, E = n.x < s.x ? n.x : s.x, w = n.y < s.y ? n.y : s.y, N = n.x > s.x ? n.x : s.x, F = n.y > s.y ? n.y : s.y, j = ((c > E ? c : E) + (g < N ? g : N)) / 2, X = ((h > w ? h : w) + (d < F ? d : F)) / 2, $ = e.x - j, re = e.y - X, ce = t.x - j, _e = t.y - X, Re = n.x - j, je = n.y - X, ct = s.x - j, wt = s.y - X, Xt = re - _e, wn = ce - $, Nr = $ * _e - ce * re, Lr = je - wt, Zn = ct - Re, Fo = Re * wt - ct * je, Bo = Xt * Zn - Lr * wn, bs = (wn * Fo - Zn * Nr) / Bo, Is = (Lr * Nr - Xt * Fo) / Bo;
        return K.isNaN(bs) || K.isInfinite(bs) || K.isNaN(Is) || K.isInfinite(Is) ? null : new C(bs + j, Is + X);
      } }]), o;
    }(), rt = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "arraycopy", value: function(e, t, n, s, c) {
        for (var h = 0, g = t; g < t + c; g++) n[s + h] = e[g], h++;
      } }, { key: "getProperty", value: function(e) {
        return { "line.separator": `
` }[e];
      } }]), o;
    }(), kn = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "log10", value: function(e) {
        var t = Math.log(e);
        return K.isInfinite(t) || K.isNaN(t) ? t : t / o.LOG_10;
      } }, { key: "min", value: function(e, t, n, s) {
        var c = e;
        return t < c && (c = t), n < c && (c = n), s < c && (c = s), c;
      } }, { key: "clamp", value: function() {
        if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return e < t ? t : e > n ? n : e;
        }
        if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
          var s = arguments[0], c = arguments[1], h = arguments[2];
          return s < c ? c : s > h ? h : s;
        }
      } }, { key: "wrap", value: function(e, t) {
        return e < 0 ? t - -e % t : e % t;
      } }, { key: "max", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2], s = e;
          return t > s && (s = t), n > s && (s = n), s;
        }
        if (arguments.length === 4) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3], E = c;
          return h > E && (E = h), g > E && (E = g), d > E && (E = d), E;
        }
      } }, { key: "average", value: function(e, t) {
        return (e + t) / 2;
      } }]), o;
    }();
    kn.LOG_10 = Math.log(10);
    var gt = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "segmentToSegment", value: function(e, t, n, s) {
        if (e.equals(t)) return o.pointToSegment(e, n, s);
        if (n.equals(s)) return o.pointToSegment(s, e, t);
        var c = !1;
        if (xe.intersects(e, t, n, s)) {
          var h = (t.x - e.x) * (s.y - n.y) - (t.y - e.y) * (s.x - n.x);
          if (h === 0) c = !0;
          else {
            var g = (e.y - n.y) * (s.x - n.x) - (e.x - n.x) * (s.y - n.y), d = ((e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y)) / h, E = g / h;
            (E < 0 || E > 1 || d < 0 || d > 1) && (c = !0);
          }
        } else c = !0;
        return c ? kn.min(o.pointToSegment(e, n, s), o.pointToSegment(t, n, s), o.pointToSegment(n, e, t), o.pointToSegment(s, e, t)) : 0;
      } }, { key: "pointToSegment", value: function(e, t, n) {
        if (t.x === n.x && t.y === n.y) return e.distance(t);
        var s = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), c = ((e.x - t.x) * (n.x - t.x) + (e.y - t.y) * (n.y - t.y)) / s;
        if (c <= 0) return e.distance(t);
        if (c >= 1) return e.distance(n);
        var h = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / s;
        return Math.abs(h) * Math.sqrt(s);
      } }, { key: "pointToLinePerpendicular", value: function(e, t, n) {
        var s = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), c = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / s;
        return Math.abs(c) * Math.sqrt(s);
      } }, { key: "pointToSegmentString", value: function(e, t) {
        if (t.length === 0) throw new M("Line array must contain at least one vertex");
        for (var n = e.distance(t[0]), s = 0; s < t.length - 1; s++) {
          var c = o.pointToSegment(e, t[s], t[s + 1]);
          c < n && (n = c);
        }
        return n;
      } }]), o;
    }(), ei = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "create", value: function() {
        if (arguments.length === 1) arguments[0] instanceof Array || ue(arguments[0], ge);
        else if (arguments.length !== 2) {
          if (arguments.length === 3) {
            var e = arguments[0], t = arguments[1];
            return this.create(e, t);
          }
        }
      } }]), o;
    }(), Gn = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "filter", value: function(e) {
      } }]), o;
    }(), ls = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "ofLine", value: function(e) {
        var t = e.size();
        if (t <= 1) return 0;
        var n = 0, s = new C();
        e.getCoordinate(0, s);
        for (var c = s.x, h = s.y, g = 1; g < t; g++) {
          e.getCoordinate(g, s);
          var d = s.x, E = s.y, w = d - c, N = E - h;
          n += Math.sqrt(w * w + N * N), c = d, h = E;
        }
        return n;
      } }]), o;
    }(), ti = function o() {
      i(this, o);
    }, Ut = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "copyCoord", value: function(e, t, n, s) {
        for (var c = Math.min(e.getDimension(), n.getDimension()), h = 0; h < c; h++) n.setOrdinate(s, h, e.getOrdinate(t, h));
      } }, { key: "isRing", value: function(e) {
        var t = e.size();
        return t === 0 || !(t <= 3) && e.getOrdinate(0, ge.X) === e.getOrdinate(t - 1, ge.X) && e.getOrdinate(0, ge.Y) === e.getOrdinate(t - 1, ge.Y);
      } }, { key: "scroll", value: function() {
        if (arguments.length === 2) {
          if (ue(arguments[0], ge) && Number.isInteger(arguments[1])) {
            var e = arguments[0], t = arguments[1];
            o.scroll(e, t, o.isRing(e));
          } else if (ue(arguments[0], ge) && arguments[1] instanceof C) {
            var n = arguments[0], s = arguments[1], c = o.indexOf(s, n);
            if (c <= 0) return null;
            o.scroll(n, c);
          }
        } else if (arguments.length === 3) {
          var h = arguments[0], g = arguments[1], d = arguments[2], E = g;
          if (E <= 0) return null;
          for (var w = h.copy(), N = d ? h.size() - 1 : h.size(), F = 0; F < N; F++) for (var j = 0; j < h.getDimension(); j++) h.setOrdinate(F, j, w.getOrdinate((g + F) % N, j));
          if (d) for (var X = 0; X < h.getDimension(); X++) h.setOrdinate(N, X, h.getOrdinate(0, X));
        }
      } }, { key: "isEqual", value: function(e, t) {
        var n = e.size();
        if (n !== t.size()) return !1;
        for (var s = Math.min(e.getDimension(), t.getDimension()), c = 0; c < n; c++) for (var h = 0; h < s; h++) {
          var g = e.getOrdinate(c, h), d = t.getOrdinate(c, h);
          if (e.getOrdinate(c, h) !== t.getOrdinate(c, h) && (!K.isNaN(g) || !K.isNaN(d))) return !1;
        }
        return !0;
      } }, { key: "minCoordinateIndex", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return o.minCoordinateIndex(e, 0, e.size() - 1);
        }
        if (arguments.length === 3) {
          for (var t = arguments[0], n = arguments[1], s = arguments[2], c = -1, h = null, g = n; g <= s; g++) {
            var d = t.getCoordinate(g);
            (h === null || h.compareTo(d) > 0) && (h = d, c = g);
          }
          return c;
        }
      } }, { key: "extend", value: function(e, t, n) {
        var s = e.create(n, t.getDimension()), c = t.size();
        if (o.copy(t, 0, s, 0, c), c > 0) for (var h = c; h < n; h++) o.copy(t, c - 1, s, h, 1);
        return s;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.size() - 1, n = Math.trunc(t / 2), s = 0; s <= n; s++) o.swap(e, s, t - s);
      } }, { key: "swap", value: function(e, t, n) {
        if (t === n) return null;
        for (var s = 0; s < e.getDimension(); s++) {
          var c = e.getOrdinate(t, s);
          e.setOrdinate(t, s, e.getOrdinate(n, s)), e.setOrdinate(n, s, c);
        }
      } }, { key: "copy", value: function(e, t, n, s, c) {
        for (var h = 0; h < c; h++) o.copyCoord(e, t + h, n, s + h);
      } }, { key: "ensureValidRing", value: function(e, t) {
        var n = t.size();
        return n === 0 ? t : n <= 3 ? o.createClosedRing(e, t, 4) : t.getOrdinate(0, ge.X) === t.getOrdinate(n - 1, ge.X) && t.getOrdinate(0, ge.Y) === t.getOrdinate(n - 1, ge.Y) ? t : o.createClosedRing(e, t, n + 1);
      } }, { key: "indexOf", value: function(e, t) {
        for (var n = 0; n < t.size(); n++) if (e.x === t.getOrdinate(n, ge.X) && e.y === t.getOrdinate(n, ge.Y)) return n;
        return -1;
      } }, { key: "createClosedRing", value: function(e, t, n) {
        var s = e.create(n, t.getDimension()), c = t.size();
        o.copy(t, 0, s, 0, c);
        for (var h = c; h < n; h++) o.copy(t, 0, s, h, 1);
        return s;
      } }, { key: "minCoordinate", value: function(e) {
        for (var t = null, n = 0; n < e.size(); n++) {
          var s = e.getCoordinate(n);
          (t === null || t.compareTo(s) > 0) && (t = s);
        }
        return t;
      } }]), o;
    }(), V = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "toDimensionSymbol", value: function(e) {
        switch (e) {
          case o.FALSE:
            return o.SYM_FALSE;
          case o.TRUE:
            return o.SYM_TRUE;
          case o.DONTCARE:
            return o.SYM_DONTCARE;
          case o.P:
            return o.SYM_P;
          case o.L:
            return o.SYM_L;
          case o.A:
            return o.SYM_A;
        }
        throw new M("Unknown dimension value: " + e);
      } }, { key: "toDimensionValue", value: function(e) {
        switch (Bn.toUpperCase(e)) {
          case o.SYM_FALSE:
            return o.FALSE;
          case o.SYM_TRUE:
            return o.TRUE;
          case o.SYM_DONTCARE:
            return o.DONTCARE;
          case o.SYM_P:
            return o.P;
          case o.SYM_L:
            return o.L;
          case o.SYM_A:
            return o.A;
        }
        throw new M("Unknown dimension symbol: " + e);
      } }]), o;
    }();
    V.P = 0, V.L = 1, V.A = 2, V.FALSE = -1, V.TRUE = -2, V.DONTCARE = -3, V.SYM_FALSE = "F", V.SYM_TRUE = "T", V.SYM_DONTCARE = "*", V.SYM_P = "0", V.SYM_L = "1", V.SYM_A = "2";
    var G = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "filter", value: function(e) {
      } }]), o;
    }(), Le = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "filter", value: function(e, t) {
      } }, { key: "isDone", value: function() {
      } }, { key: "isGeometryChanged", value: function() {
      } }]), o;
    }(), Ge = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this.isEmpty() ? new xe() : this._points.expandEnvelope(new xe());
      } }, { key: "isRing", value: function() {
        return this.isClosed() && this.isSimple();
      } }, { key: "getCoordinates", value: function() {
        return this._points.toCoordinateArray();
      } }, { key: "copyInternal", value: function() {
        return new t(this._points.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], s = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var c = n;
          if (this._points.size() !== c._points.size()) return !1;
          for (var h = 0; h < this._points.size(); h++) if (!this.equal(this._points.getCoordinate(h), c._points.getCoordinate(h), s)) return !1;
          return !0;
        }
        return b(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < Math.trunc(this._points.size() / 2); n++) {
          var s = this._points.size() - 1 - n;
          if (!this._points.getCoordinate(n).equals(this._points.getCoordinate(s))) {
            if (this._points.getCoordinate(n).compareTo(this._points.getCoordinate(s)) > 0) {
              var c = this._points.copy();
              Ut.reverse(c), this._points = c;
            }
            return null;
          }
        }
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._points.getCoordinate(0);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? V.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return Ut.reverse(n), this.getFactory().createLineString(n);
      } }, { key: "getEndPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_LINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getLength", value: function() {
        return ls.ofLine(this._points);
      } }, { key: "getNumPoints", value: function() {
        return this._points.size();
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          for (var n = arguments[0], s = n, c = 0, h = 0; c < this._points.size() && h < s._points.size(); ) {
            var g = this._points.getCoordinate(c).compareTo(s._points.getCoordinate(h));
            if (g !== 0) return g;
            c++, h++;
          }
          return c < this._points.size() ? 1 : h < s._points.size() ? -1 : 0;
        }
        if (arguments.length === 2) {
          var d = arguments[0], E = arguments[1], w = d;
          return E.compare(this._points, w._points);
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], Gn)) for (var n = arguments[0], s = 0; s < this._points.size(); s++) n.filter(this._points.getCoordinate(s));
        else if (ue(arguments[0], Le)) {
          var c = arguments[0];
          if (this._points.size() === 0) return null;
          for (var h = 0; h < this._points.size() && (c.filter(this._points, h), !c.isDone()); h++) ;
          c.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], G)) {
          var g = arguments[0];
          g.filter(this);
        } else if (ue(arguments[0], z)) {
          var d = arguments[0];
          d.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        throw new oe();
      } }, { key: "isEquivalentClass", value: function(n) {
        return n instanceof t;
      } }, { key: "getCoordinateN", value: function(n) {
        return this._points.getCoordinate(n);
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_LINESTRING;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._points;
      } }, { key: "isEmpty", value: function() {
        return this._points.size() === 0;
      } }, { key: "init", value: function(n) {
        if (n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), n.size() === 1) throw new M("Invalid number of points in LineString (found " + n.size() + " - must be 0 or >= 2)");
        this._points = n;
      } }, { key: "isCoordinate", value: function(n) {
        for (var s = 0; s < this._points.size(); s++) if (this._points.getCoordinate(s).equals(n)) return !0;
        return !1;
      } }, { key: "getStartPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(0);
      } }, { key: "getPointN", value: function(n) {
        return this.getFactory().createPoint(this._points.getCoordinate(n));
      } }, { key: "interfaces_", get: function() {
        return [ti];
      } }], [{ key: "constructor_", value: function() {
        if (this._points = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], s = arguments[1];
            J.constructor_.call(this, s), this.init(n);
          }
        }
      } }]), t;
    }(J), Qe = function o() {
      i(this, o);
    }, he = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        if (this.isEmpty()) return new xe();
        var n = new xe();
        return n.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), n;
      } }, { key: "getCoordinates", value: function() {
        return this.isEmpty() ? [] : [this.getCoordinate()];
      } }, { key: "copyInternal", value: function() {
        return new t(this._coordinates.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], s = arguments[1];
          return !!this.isEquivalentClass(n) && (!(!this.isEmpty() || !n.isEmpty()) || this.isEmpty() === n.isEmpty() && this.equal(n.getCoordinate(), this.getCoordinate(), s));
        }
        return b(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
      } }, { key: "getCoordinate", value: function() {
        return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
      } }, { key: "getBoundaryDimension", value: function() {
        return V.FALSE;
      } }, { key: "reverseInternal", value: function() {
        return this.getFactory().createPoint(this._coordinates.copy());
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_POINT;
      } }, { key: "getDimension", value: function() {
        return 0;
      } }, { key: "getNumPoints", value: function() {
        return this.isEmpty() ? 0 : 1;
      } }, { key: "getX", value: function() {
        if (this.getCoordinate() === null) throw new IllegalStateException("getX called on empty Point");
        return this.getCoordinate().x;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], s = n;
          return this.getCoordinate().compareTo(s.getCoordinate());
        }
        if (arguments.length === 2) {
          var c = arguments[0], h = arguments[1], g = c;
          return h.compare(this._coordinates, g._coordinates);
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], Gn)) {
          var n = arguments[0];
          if (this.isEmpty()) return null;
          n.filter(this.getCoordinate());
        } else if (ue(arguments[0], Le)) {
          var s = arguments[0];
          if (this.isEmpty()) return null;
          s.filter(this._coordinates, 0), s.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], G)) {
          var c = arguments[0];
          c.filter(this);
        } else if (ue(arguments[0], z)) {
          var h = arguments[0];
          h.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_POINT;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._coordinates;
      } }, { key: "getY", value: function() {
        if (this.getCoordinate() === null) throw new IllegalStateException("getY called on empty Point");
        return this.getCoordinate().y;
      } }, { key: "isEmpty", value: function() {
        return this._coordinates.size() === 0;
      } }, { key: "init", value: function(n) {
        n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), fe.isTrue(n.size() <= 1), this._coordinates = n;
      } }, { key: "isSimple", value: function() {
        return !0;
      } }, { key: "interfaces_", get: function() {
        return [Qe];
      } }], [{ key: "constructor_", value: function() {
        this._coordinates = null;
        var n = arguments[0], s = arguments[1];
        J.constructor_.call(this, s), this.init(n);
      } }]), t;
    }(J), Ke = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "ofRing", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return Math.abs(o.ofRingSigned(e));
        }
        if (ue(arguments[0], ge)) {
          var t = arguments[0];
          return Math.abs(o.ofRingSigned(t));
        }
      } }, { key: "ofRingSigned", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          if (e.length < 3) return 0;
          for (var t = 0, n = e[0].x, s = 1; s < e.length - 1; s++) {
            var c = e[s].x - n, h = e[s + 1].y, g = e[s - 1].y;
            t += c * (g - h);
          }
          return t / 2;
        }
        if (ue(arguments[0], ge)) {
          var d = arguments[0], E = d.size();
          if (E < 3) return 0;
          var w = new C(), N = new C(), F = new C();
          d.getCoordinate(0, N), d.getCoordinate(1, F);
          var j = N.x;
          F.x -= j;
          for (var X = 0, $ = 1; $ < E - 1; $++) w.y = N.y, N.x = F.x, N.y = F.y, d.getCoordinate($ + 1, F), F.x -= j, X += N.x * (w.y - F.y);
          return X / 2;
        }
      } }]), o;
    }(), yt = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "sort", value: function() {
        var e = arguments, t = arguments[0];
        if (arguments.length === 1) t.sort(function(j, X) {
          return j.compareTo(X);
        });
        else if (arguments.length === 2) t.sort(function(j, X) {
          return e[1].compare(j, X);
        });
        else if (arguments.length === 3) {
          var n = t.slice(arguments[1], arguments[2]);
          n.sort();
          var s = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var c, h = P(s);
          try {
            for (h.s(); !(c = h.n()).done; ) {
              var g = c.value;
              t.push(g);
            }
          } catch (j) {
            h.e(j);
          } finally {
            h.f();
          }
        } else if (arguments.length === 4) {
          var d = t.slice(arguments[1], arguments[2]);
          d.sort(function(j, X) {
            return e[3].compare(j, X);
          });
          var E = t.slice(0, arguments[1]).concat(d, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var w, N = P(E);
          try {
            for (N.s(); !(w = N.n()).done; ) {
              var F = w.value;
              t.push(F);
            }
          } catch (j) {
            N.e(j);
          } finally {
            N.f();
          }
        }
      } }, { key: "asList", value: function(e) {
        var t, n = new ne(), s = P(e);
        try {
          for (s.s(); !(t = s.n()).done; ) {
            var c = t.value;
            n.add(c);
          }
        } catch (h) {
          s.e(h);
        } finally {
          s.f();
        }
        return n;
      } }, { key: "copyOf", value: function(e, t) {
        return e.slice(0, t);
      } }]), o;
    }(), qn = function o() {
      i(this, o);
    }, tn = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this._shell.getEnvelopeInternal();
      } }, { key: "getCoordinates", value: function() {
        if (this.isEmpty()) return [];
        for (var n = new Array(this.getNumPoints()).fill(null), s = -1, c = this._shell.getCoordinates(), h = 0; h < c.length; h++) n[++s] = c[h];
        for (var g = 0; g < this._holes.length; g++) for (var d = this._holes[g].getCoordinates(), E = 0; E < d.length; E++) n[++s] = d[E];
        return n;
      } }, { key: "getArea", value: function() {
        var n = 0;
        n += Ke.ofRing(this._shell.getCoordinateSequence());
        for (var s = 0; s < this._holes.length; s++) n -= Ke.ofRing(this._holes[s].getCoordinateSequence());
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = this._shell.copy(), s = new Array(this._holes.length).fill(null), c = 0; c < this._holes.length; c++) s[c] = this._holes[c].copy();
        return new t(n, s, this._factory);
      } }, { key: "isRectangle", value: function() {
        if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
        for (var n = this._shell.getCoordinateSequence(), s = this.getEnvelopeInternal(), c = 0; c < 5; c++) {
          var h = n.getX(c);
          if (h !== s.getMinX() && h !== s.getMaxX()) return !1;
          var g = n.getY(c);
          if (g !== s.getMinY() && g !== s.getMaxY()) return !1;
        }
        for (var d = n.getX(0), E = n.getY(0), w = 1; w <= 4; w++) {
          var N = n.getX(w), F = n.getY(w);
          if (N !== d == (F !== E)) return !1;
          d = N, E = F;
        }
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], s = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var c = n, h = this._shell, g = c._shell;
          if (!h.equalsExact(g, s) || this._holes.length !== c._holes.length) return !1;
          for (var d = 0; d < this._holes.length; d++) if (!this._holes[d].equalsExact(c._holes[d], s)) return !1;
          return !0;
        }
        return b(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        if (arguments.length === 0) {
          this._shell = this.normalized(this._shell, !0);
          for (var n = 0; n < this._holes.length; n++) this._holes[n] = this.normalized(this._holes[n], !1);
          yt.sort(this._holes);
        } else if (arguments.length === 2) {
          var s = arguments[0], c = arguments[1];
          if (s.isEmpty()) return null;
          var h = s.getCoordinateSequence(), g = Ut.minCoordinateIndex(h, 0, h.size() - 2);
          Ut.scroll(h, g, !0), se.isCCW(h) === c && Ut.reverse(h);
        }
      } }, { key: "getCoordinate", value: function() {
        return this._shell.getCoordinate();
      } }, { key: "getNumInteriorRing", value: function() {
        return this._holes.length;
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this.getExteriorRing().reverse(), s = new Array(this.getNumInteriorRing()).fill(null), c = 0; c < s.length; c++) s[c] = this.getInteriorRingN(c).reverse();
        return this.getFactory().createPolygon(n, s);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_POLYGON;
      } }, { key: "getDimension", value: function() {
        return 2;
      } }, { key: "getLength", value: function() {
        var n = 0;
        n += this._shell.getLength();
        for (var s = 0; s < this._holes.length; s++) n += this._holes[s].getLength();
        return n;
      } }, { key: "getNumPoints", value: function() {
        for (var n = this._shell.getNumPoints(), s = 0; s < this._holes.length; s++) n += this._holes[s].getNumPoints();
        return n;
      } }, { key: "convexHull", value: function() {
        return this.getExteriorRing().convexHull();
      } }, { key: "normalized", value: function(n, s) {
        var c = n.copy();
        return this.normalize(c, s), c;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], s = this._shell, c = n._shell;
          return s.compareToSameClass(c);
        }
        if (arguments.length === 2) {
          var h = arguments[0], g = arguments[1], d = h, E = this._shell, w = d._shell, N = E.compareToSameClass(w, g);
          if (N !== 0) return N;
          for (var F = this.getNumInteriorRing(), j = d.getNumInteriorRing(), X = 0; X < F && X < j; ) {
            var $ = this.getInteriorRingN(X), re = d.getInteriorRingN(X), ce = $.compareToSameClass(re, g);
            if (ce !== 0) return ce;
            X++;
          }
          return X < F ? 1 : X < j ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], Gn)) {
          var n = arguments[0];
          this._shell.apply(n);
          for (var s = 0; s < this._holes.length; s++) this._holes[s].apply(n);
        } else if (ue(arguments[0], Le)) {
          var c = arguments[0];
          if (this._shell.apply(c), !c.isDone()) for (var h = 0; h < this._holes.length && (this._holes[h].apply(c), !c.isDone()); h++) ;
          c.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], G)) {
          var g = arguments[0];
          g.filter(this);
        } else if (ue(arguments[0], z)) {
          var d = arguments[0];
          d.filter(this), this._shell.apply(d);
          for (var E = 0; E < this._holes.length; E++) this._holes[E].apply(d);
        }
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        var n = new Array(this._holes.length + 1).fill(null);
        n[0] = this._shell;
        for (var s = 0; s < this._holes.length; s++) n[s + 1] = this._holes[s];
        return n.length <= 1 ? this.getFactory().createLinearRing(n[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(n);
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_POLYGON;
      } }, { key: "getExteriorRing", value: function() {
        return this._shell;
      } }, { key: "isEmpty", value: function() {
        return this._shell.isEmpty();
      } }, { key: "getInteriorRingN", value: function(n) {
        return this._holes[n];
      } }, { key: "interfaces_", get: function() {
        return [qn];
      } }], [{ key: "constructor_", value: function() {
        this._shell = null, this._holes = null;
        var n = arguments[0], s = arguments[1], c = arguments[2];
        if (J.constructor_.call(this, c), n === null && (n = this.getFactory().createLinearRing()), s === null && (s = []), J.hasNullElements(s)) throw new M("holes must not contain null elements");
        if (n.isEmpty() && J.hasNonEmptyElements(s)) throw new M("shell is empty but holes are not");
        this._shell = n, this._holes = s;
      } }]), t;
    }(J), zn = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        return i(this, t), e.apply(this, arguments);
      }
      return t;
    }(pr), no = function(o) {
      f(t, o);
      var e = S(t);
      function t(n) {
        var s;
        return i(this, t), (s = e.call(this)).array = [], n instanceof le && s.addAll(n), s;
      }
      return l(t, [{ key: "contains", value: function(n) {
        var s, c = P(this.array);
        try {
          for (c.s(); !(s = c.n()).done; )
            if (s.value.compareTo(n) === 0) return !0;
        } catch (h) {
          c.e(h);
        } finally {
          c.f();
        }
        return !1;
      } }, { key: "add", value: function(n) {
        if (this.contains(n)) return !1;
        for (var s = 0, c = this.array.length; s < c; s++)
          if (this.array[s].compareTo(n) === 1) return !!this.array.splice(s, 0, n);
        return this.array.push(n), !0;
      } }, { key: "addAll", value: function(n) {
        var s, c = P(n);
        try {
          for (c.s(); !(s = c.n()).done; ) {
            var h = s.value;
            this.add(h);
          }
        } catch (g) {
          c.e(g);
        } finally {
          c.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new oe();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "iterator", value: function() {
        return new jf(this.array);
      } }]), t;
    }(zn), jf = function() {
      function o(e) {
        i(this, o), this.array = e, this.position = 0;
      }
      return l(o, [{ key: "next", value: function() {
        if (this.position === this.array.length) throw new Ne();
        return this.array[this.position++];
      } }, { key: "hasNext", value: function() {
        return this.position < this.array.length;
      } }, { key: "remove", value: function() {
        throw new oe();
      } }]), o;
    }(), ot = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        for (var n = new xe(), s = 0; s < this._geometries.length; s++) n.expandToInclude(this._geometries[s].getEnvelopeInternal());
        return n;
      } }, { key: "getGeometryN", value: function(n) {
        return this._geometries[n];
      } }, { key: "getCoordinates", value: function() {
        for (var n = new Array(this.getNumPoints()).fill(null), s = -1, c = 0; c < this._geometries.length; c++) for (var h = this._geometries[c].getCoordinates(), g = 0; g < h.length; g++) n[++s] = h[g];
        return n;
      } }, { key: "getArea", value: function() {
        for (var n = 0, s = 0; s < this._geometries.length; s++) n += this._geometries[s].getArea();
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), s = 0; s < n.length; s++) n[s] = this._geometries[s].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], s = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var c = n;
          if (this._geometries.length !== c._geometries.length) return !1;
          for (var h = 0; h < this._geometries.length; h++) if (!this._geometries[h].equalsExact(c._geometries[h], s)) return !1;
          return !0;
        }
        return b(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < this._geometries.length; n++) this._geometries[n].normalize();
        yt.sort(this._geometries);
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._geometries[0].getCoordinate();
      } }, { key: "getBoundaryDimension", value: function() {
        for (var n = V.FALSE, s = 0; s < this._geometries.length; s++) n = Math.max(n, this._geometries[s].getBoundaryDimension());
        return n;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this._geometries.length, s = new ne(n), c = 0; c < n; c++) s.add(this._geometries[c].reverse());
        return this.getFactory().buildGeometry(s);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getDimension", value: function() {
        for (var n = V.FALSE, s = 0; s < this._geometries.length; s++) n = Math.max(n, this._geometries[s].getDimension());
        return n;
      } }, { key: "getLength", value: function() {
        for (var n = 0, s = 0; s < this._geometries.length; s++) n += this._geometries[s].getLength();
        return n;
      } }, { key: "getNumPoints", value: function() {
        for (var n = 0, s = 0; s < this._geometries.length; s++) n += this._geometries[s].getNumPoints();
        return n;
      } }, { key: "getNumGeometries", value: function() {
        return this._geometries.length;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], s = new no(yt.asList(this._geometries)), c = new no(yt.asList(n._geometries));
          return this.compare(s, c);
        }
        if (arguments.length === 2) {
          for (var h = arguments[0], g = arguments[1], d = h, E = this.getNumGeometries(), w = d.getNumGeometries(), N = 0; N < E && N < w; ) {
            var F = this.getGeometryN(N), j = d.getGeometryN(N), X = F.compareToSameClass(j, g);
            if (X !== 0) return X;
            N++;
          }
          return N < E ? 1 : N < w ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], Gn)) for (var n = arguments[0], s = 0; s < this._geometries.length; s++) this._geometries[s].apply(n);
        else if (ue(arguments[0], Le)) {
          var c = arguments[0];
          if (this._geometries.length === 0) return null;
          for (var h = 0; h < this._geometries.length && (this._geometries[h].apply(c), !c.isDone()); h++) ;
          c.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], G)) {
          var g = arguments[0];
          g.filter(this);
          for (var d = 0; d < this._geometries.length; d++) this._geometries[d].apply(g);
        } else if (ue(arguments[0], z)) {
          var E = arguments[0];
          E.filter(this);
          for (var w = 0; w < this._geometries.length; w++) this._geometries[w].apply(E);
        }
      } }, { key: "getBoundary", value: function() {
        return J.checkNotGeometryCollection(this), fe.shouldNeverReachHere(), null;
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_GEOMETRYCOLLECTION;
      } }, { key: "isEmpty", value: function() {
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isEmpty()) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this._geometries = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], s = arguments[1];
            if (J.constructor_.call(this, s), n === null && (n = []), J.hasNullElements(n)) throw new M("geometries must not contain null elements");
            this._geometries = n;
          }
        }
      } }]), t;
    }(J), cs = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), s = 0; s < n.length; s++) n[s] = this._geometries[s].copy();
        return new t(n, this._factory);
      } }, { key: "isValid", value: function() {
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], s = arguments[1];
          return !!this.isEquivalentClass(n) && b(v(t.prototype), "equalsExact", this).call(this, n, s);
        }
        return b(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 1 && Number.isInteger(arguments[0])) {
          var n = arguments[0];
          return this._geometries[n].getCoordinate();
        }
        return b(v(t.prototype), "getCoordinate", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return V.FALSE;
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_MULTIPOINT;
      } }, { key: "getDimension", value: function() {
        return 0;
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_MULTIPOINT;
      } }, { key: "interfaces_", get: function() {
        return [Qe];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], s = arguments[1];
        ot.constructor_.call(this, n, s);
      } }]), t;
    }(ot), kr = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        return new t(this._points.copy(), this._factory);
      } }, { key: "getBoundaryDimension", value: function() {
        return V.FALSE;
      } }, { key: "isClosed", value: function() {
        return !!this.isEmpty() || b(v(t.prototype), "isClosed", this).call(this);
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return Ut.reverse(n), this.getFactory().createLinearRing(n);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_LINEARRING;
      } }, { key: "validateConstruction", value: function() {
        if (!this.isEmpty() && !b(v(t.prototype), "isClosed", this).call(this)) throw new M("Points of LinearRing do not form a closed linestring");
        if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE) throw new M("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_LINEARRING;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], s = arguments[1];
        Ge.constructor_.call(this, n, s), this.validateConstruction();
      } }]), t;
    }(Ge);
    kr.MINIMUM_VALID_SIZE = 4;
    var xn = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "setOrdinate", value: function(n, s) {
        switch (n) {
          case t.X:
            this.x = s;
            break;
          case t.Y:
            this.y = s;
            break;
          default:
            throw new M("Invalid ordinate index: " + n);
        }
      } }, { key: "getZ", value: function() {
        return C.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
        }
        throw new M("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new M("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ();
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) C.constructor_.call(this);
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            C.constructor_.call(this, n.x, n.y);
          } else if (arguments[0] instanceof C) {
            var s = arguments[0];
            C.constructor_.call(this, s.x, s.y);
          }
        } else if (arguments.length === 2) {
          var c = arguments[0], h = arguments[1];
          C.constructor_.call(this, c, h, C.NULL_ORDINATE);
        }
      } }]), t;
    }(C);
    xn.X = 0, xn.Y = 1, xn.Z = -1, xn.M = -1;
    var Sn = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "getM", value: function() {
        return this._m;
      } }, { key: "setOrdinate", value: function(n, s) {
        switch (n) {
          case t.X:
            this.x = s;
            break;
          case t.Y:
            this.y = s;
            break;
          case t.M:
            this._m = s;
            break;
          default:
            throw new M("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getZ", value: function() {
        return C.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
          case t.M:
            return this._m;
        }
        throw new M("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new M("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) C.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            C.constructor_.call(this, n.x, n.y), this._m = n._m;
          } else if (arguments[0] instanceof C) {
            var s = arguments[0];
            C.constructor_.call(this, s.x, s.y), this._m = this.getM();
          }
        } else if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2];
          C.constructor_.call(this, c, h, C.NULL_ORDINATE), this._m = g;
        }
      } }]), t;
    }(C);
    Sn.X = 0, Sn.Y = 1, Sn.Z = -1, Sn.M = 2;
    var fs = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "getM", value: function() {
        return this._m;
      } }, { key: "setOrdinate", value: function(n, s) {
        switch (n) {
          case C.X:
            this.x = s;
            break;
          case C.Y:
            this.y = s;
            break;
          case C.Z:
            this.z = s;
            break;
          case C.M:
            this._m = s;
            break;
          default:
            throw new M("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case C.X:
            return this.x;
          case C.Y:
            return this.y;
          case C.Z:
            return this.getZ();
          case C.M:
            return this.getM();
        }
        throw new M("Invalid ordinate index: " + n);
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) C.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            C.constructor_.call(this, n), this._m = n._m;
          } else if (arguments[0] instanceof C) {
            var s = arguments[0];
            C.constructor_.call(this, s), this._m = this.getM();
          }
        } else if (arguments.length === 4) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3];
          C.constructor_.call(this, c, h, g), this._m = d;
        }
      } }]), t;
    }(C), ni = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "measures", value: function(e) {
        return e instanceof xn ? 0 : e instanceof Sn || e instanceof fs ? 1 : 0;
      } }, { key: "dimension", value: function(e) {
        return e instanceof xn ? 2 : e instanceof Sn ? 3 : e instanceof fs ? 4 : 3;
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return o.create(e, 0);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return t === 2 ? new xn() : t === 3 && n === 0 ? new C() : t === 3 && n === 1 ? new Sn() : t === 4 && n === 1 ? new fs() : new C();
        }
      } }]), o;
    }(), xr = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "getCoordinate", value: function(n) {
        return this.get(n);
      } }, { key: "addAll", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "boolean" && ue(arguments[0], le)) {
          for (var n = arguments[0], s = arguments[1], c = !1, h = n.iterator(); h.hasNext(); ) this.add(h.next(), s), c = !0;
          return c;
        }
        return b(v(t.prototype), "addAll", this).apply(this, arguments);
      } }, { key: "clone", value: function() {
        for (var n = b(v(t.prototype), "clone", this).call(this), s = 0; s < this.size(); s++) n.add(s, this.get(s).clone());
        return n;
      } }, { key: "toCoordinateArray", value: function() {
        if (arguments.length === 0) return this.toArray(t.coordArrayType);
        if (arguments.length === 1) {
          var n = arguments[0];
          if (n) return this.toArray(t.coordArrayType);
          for (var s = this.size(), c = new Array(s).fill(null), h = 0; h < s; h++) c[h] = this.get(s - h - 1);
          return c;
        }
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return b(v(t.prototype), "add", this).call(this, n);
        }
        if (arguments.length === 2) {
          if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var s = arguments[0], c = arguments[1];
            return this.add(s, c, !0), !0;
          }
          if (arguments[0] instanceof C && typeof arguments[1] == "boolean") {
            var h = arguments[0], g = arguments[1];
            if (!g && this.size() >= 1) {
              var d = this.get(this.size() - 1);
              if (d.equals2D(h)) return null;
            }
            b(v(t.prototype), "add", this).call(this, h);
          } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
            var E = arguments[0], w = arguments[1];
            return this.add(E, w), !0;
          }
        } else if (arguments.length === 3) {
          if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var N = arguments[0], F = arguments[1], j = arguments[2];
            if (j) for (var X = 0; X < N.length; X++) this.add(N[X], F);
            else for (var $ = N.length - 1; $ >= 0; $--) this.add(N[$], F);
            return !0;
          }
          if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof C) {
            var re = arguments[0], ce = arguments[1], _e = arguments[2];
            if (!_e) {
              var Re = this.size();
              if (Re > 0) {
                if (re > 0) {
                  var je = this.get(re - 1);
                  if (je.equals2D(ce)) return null;
                }
                if (re < Re) {
                  var ct = this.get(re);
                  if (ct.equals2D(ce)) return null;
                }
              }
            }
            b(v(t.prototype), "add", this).call(this, re, ce);
          }
        } else if (arguments.length === 4) {
          var wt = arguments[0], Xt = arguments[1], wn = arguments[2], Nr = arguments[3], Lr = 1;
          wn > Nr && (Lr = -1);
          for (var Zn = wn; Zn !== Nr; Zn += Lr) this.add(wt[Zn], Xt);
          return !0;
        }
      } }, { key: "closeRing", value: function() {
        if (this.size() > 0) {
          var n = this.get(0).copy();
          this.add(n, !1);
        }
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.ensureCapacity(n.length), this.add(n, !0);
          } else if (arguments.length === 2) {
            var s = arguments[0], c = arguments[1];
            this.ensureCapacity(s.length), this.add(s, c);
          }
        }
      } }]), t;
    }(ne);
    xr.coordArrayType = new Array(0).fill(null);
    var qe = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "isRing", value: function(e) {
        return !(e.length < 4) && !!e[0].equals2D(e[e.length - 1]);
      } }, { key: "ptNotInList", value: function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          if (o.indexOf(s, t) < 0) return s;
        }
        return null;
      } }, { key: "scroll", value: function(e, t) {
        var n = o.indexOf(t, e);
        if (n < 0) return null;
        var s = new Array(e.length).fill(null);
        rt.arraycopy(e, n, s, 0, e.length - n), rt.arraycopy(e, 0, s, e.length - n, n), rt.arraycopy(s, 0, e, 0, e.length);
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          if (e === t) return !0;
          if (e === null || t === null || e.length !== t.length) return !1;
          for (var n = 0; n < e.length; n++) if (!e[n].equals(t[n])) return !1;
          return !0;
        }
        if (arguments.length === 3) {
          var s = arguments[0], c = arguments[1], h = arguments[2];
          if (s === c) return !0;
          if (s === null || c === null || s.length !== c.length) return !1;
          for (var g = 0; g < s.length; g++) if (h.compare(s[g], c[g]) !== 0) return !1;
          return !0;
        }
      } }, { key: "intersection", value: function(e, t) {
        for (var n = new xr(), s = 0; s < e.length; s++) t.intersects(e[s]) && n.add(e[s], !0);
        return n.toCoordinateArray();
      } }, { key: "measures", value: function(e) {
        if (e === null || e.length === 0) return 0;
        var t, n = 0, s = P(e);
        try {
          for (s.s(); !(t = s.n()).done; ) {
            var c = t.value;
            n = Math.max(n, ni.measures(c));
          }
        } catch (h) {
          s.e(h);
        } finally {
          s.f();
        }
        return n;
      } }, { key: "hasRepeatedPoints", value: function(e) {
        for (var t = 1; t < e.length; t++) if (e[t - 1].equals(e[t])) return !0;
        return !1;
      } }, { key: "removeRepeatedPoints", value: function(e) {
        return o.hasRepeatedPoints(e) ? new xr(e, !1).toCoordinateArray() : e;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.length - 1, n = Math.trunc(t / 2), s = 0; s <= n; s++) {
          var c = e[s];
          e[s] = e[t - s], e[t - s] = c;
        }
      } }, { key: "removeNull", value: function(e) {
        for (var t = 0, n = 0; n < e.length; n++) e[n] !== null && t++;
        var s = new Array(t).fill(null);
        if (t === 0) return s;
        for (var c = 0, h = 0; h < e.length; h++) e[h] !== null && (s[c++] = e[h]);
        return s;
      } }, { key: "copyDeep", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new Array(e.length).fill(null), n = 0; n < e.length; n++) t[n] = e[n].copy();
          return t;
        }
        if (arguments.length === 5) for (var s = arguments[0], c = arguments[1], h = arguments[2], g = arguments[3], d = arguments[4], E = 0; E < d; E++) h[g + E] = s[c + E].copy();
      } }, { key: "isEqualReversed", value: function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var s = e[n], c = t[e.length - n - 1];
          if (s.compareTo(c) !== 0) return !1;
        }
        return !0;
      } }, { key: "envelope", value: function(e) {
        for (var t = new xe(), n = 0; n < e.length; n++) t.expandToInclude(e[n]);
        return t;
      } }, { key: "toCoordinateArray", value: function(e) {
        return e.toArray(o.coordArrayType);
      } }, { key: "dimension", value: function(e) {
        if (e === null || e.length === 0) return 3;
        var t, n = 0, s = P(e);
        try {
          for (s.s(); !(t = s.n()).done; ) {
            var c = t.value;
            n = Math.max(n, ni.dimension(c));
          }
        } catch (h) {
          s.e(h);
        } finally {
          s.f();
        }
        return n;
      } }, { key: "atLeastNCoordinatesOrNothing", value: function(e, t) {
        return t.length >= e ? t : [];
      } }, { key: "indexOf", value: function(e, t) {
        for (var n = 0; n < t.length; n++) if (e.equals(t[n])) return n;
        return -1;
      } }, { key: "increasingDirection", value: function(e) {
        for (var t = 0; t < Math.trunc(e.length / 2); t++) {
          var n = e.length - 1 - t, s = e[t].compareTo(e[n]);
          if (s !== 0) return s;
        }
        return 1;
      } }, { key: "compare", value: function(e, t) {
        for (var n = 0; n < e.length && n < t.length; ) {
          var s = e[n].compareTo(t[n]);
          if (s !== 0) return s;
          n++;
        }
        return n < t.length ? -1 : n < e.length ? 1 : 0;
      } }, { key: "minCoordinate", value: function(e) {
        for (var t = null, n = 0; n < e.length; n++) (t === null || t.compareTo(e[n]) > 0) && (t = e[n]);
        return t;
      } }, { key: "extract", value: function(e, t, n) {
        t = kn.clamp(t, 0, e.length);
        var s = (n = kn.clamp(n, -1, e.length)) - t + 1;
        n < 0 && (s = 0), t >= e.length && (s = 0), n < t && (s = 0);
        var c = new Array(s).fill(null);
        if (s === 0) return c;
        for (var h = 0, g = t; g <= n; g++) c[h++] = e[g];
        return c;
      } }]), o;
    }(), Vf = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "compare", value: function(e, t) {
        var n = e, s = t;
        return qe.compare(n, s);
      } }, { key: "interfaces_", get: function() {
        return [Fe];
      } }]), o;
    }(), Hf = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "compare", value: function(e, t) {
        var n = e, s = t;
        if (n.length < s.length) return -1;
        if (n.length > s.length) return 1;
        if (n.length === 0) return 0;
        var c = qe.compare(n, s);
        return qe.isEqualReversed(n, s) ? 0 : c;
      } }, { key: "OLDcompare", value: function(e, t) {
        var n = e, s = t;
        if (n.length < s.length) return -1;
        if (n.length > s.length) return 1;
        if (n.length === 0) return 0;
        for (var c = qe.increasingDirection(n), h = qe.increasingDirection(s), g = c > 0 ? 0 : n.length - 1, d = h > 0 ? 0 : n.length - 1, E = 0; E < n.length; E++) {
          var w = n[g].compareTo(s[d]);
          if (w !== 0) return w;
          g += c, d += h;
        }
        return 0;
      } }, { key: "interfaces_", get: function() {
        return [Fe];
      } }]), o;
    }();
    qe.ForwardComparator = Vf, qe.BidirectionalComparator = Hf, qe.coordArrayType = new Array(0).fill(null);
    var ri = function() {
      function o(e) {
        i(this, o), this.str = e;
      }
      return l(o, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), o;
    }(), Sr = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getM", value: function(e) {
        return this.hasM() ? this._coordinates[e].getM() : K.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
        switch (t) {
          case ge.X:
            this._coordinates[e].x = n;
            break;
          case ge.Y:
            this._coordinates[e].y = n;
            break;
          default:
            this._coordinates[e].setOrdinate(t, n);
        }
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this._coordinates[e].getZ() : K.NaN;
      } }, { key: "size", value: function() {
        return this._coordinates.length;
      } }, { key: "getOrdinate", value: function(e, t) {
        switch (t) {
          case ge.X:
            return this._coordinates[e].x;
          case ge.Y:
            return this._coordinates[e].y;
          default:
            return this._coordinates[e].getOrdinate(t);
        }
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this._coordinates[e];
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          n.setCoordinate(this._coordinates[t]);
        }
      } }, { key: "getCoordinateCopy", value: function(e) {
        var t = this.createCoordinate();
        return t.setCoordinate(this._coordinates[e]), t;
      } }, { key: "createCoordinate", value: function() {
        return ni.create(this.getDimension(), this.getMeasures());
      } }, { key: "getDimension", value: function() {
        return this._dimension;
      } }, { key: "getX", value: function(e) {
        return this._coordinates[e].x;
      } }, { key: "getMeasures", value: function() {
        return this._measures;
      } }, { key: "expandEnvelope", value: function(e) {
        for (var t = 0; t < this._coordinates.length; t++) e.expandToInclude(this._coordinates[t]);
        return e;
      } }, { key: "copy", value: function() {
        for (var e = new Array(this.size()).fill(null), t = 0; t < this._coordinates.length; t++) {
          var n = this.createCoordinate();
          n.setCoordinate(this._coordinates[t]), e[t] = n;
        }
        return new o(e, this._dimension, this._measures);
      } }, { key: "toString", value: function() {
        if (this._coordinates.length > 0) {
          var e = new ri(17 * this._coordinates.length);
          e.append("("), e.append(this._coordinates[0]);
          for (var t = 1; t < this._coordinates.length; t++) e.append(", "), e.append(this._coordinates[t]);
          return e.append(")"), e.toString();
        }
        return "()";
      } }, { key: "getY", value: function(e) {
        return this._coordinates[e].y;
      } }, { key: "toCoordinateArray", value: function() {
        return this._coordinates;
      } }, { key: "interfaces_", get: function() {
        return [ge, A];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            o.constructor_.call(this, e, qe.dimension(e), qe.measures(e));
          } else if (Number.isInteger(arguments[0])) {
            var t = arguments[0];
            this._coordinates = new Array(t).fill(null);
            for (var n = 0; n < t; n++) this._coordinates[n] = new C();
          } else if (ue(arguments[0], ge)) {
            var s = arguments[0];
            if (s === null) return this._coordinates = new Array(0).fill(null), null;
            this._dimension = s.getDimension(), this._measures = s.getMeasures(), this._coordinates = new Array(s.size()).fill(null);
            for (var c = 0; c < this._coordinates.length; c++) this._coordinates[c] = s.getCoordinateCopy(c);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var h = arguments[0], g = arguments[1];
            o.constructor_.call(this, h, g, qe.measures(h));
          } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var d = arguments[0], E = arguments[1];
            this._coordinates = new Array(d).fill(null), this._dimension = E;
            for (var w = 0; w < d; w++) this._coordinates[w] = ni.create(E);
          }
        } else if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var N = arguments[0], F = arguments[1], j = arguments[2];
            this._dimension = F, this._measures = j, this._coordinates = N === null ? new Array(0).fill(null) : N;
          } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var X = arguments[0], $ = arguments[1], re = arguments[2];
            this._coordinates = new Array(X).fill(null), this._dimension = $, this._measures = re;
            for (var ce = 0; ce < X; ce++) this._coordinates[ce] = this.createCoordinate();
          }
        }
      } }]), o;
    }(), hs = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "readResolve", value: function() {
        return o.instance();
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new Sr(e);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new Sr(t);
          }
        } else {
          if (arguments.length === 2) {
            var n = arguments[0], s = arguments[1];
            return s > 3 && (s = 3), s < 2 && (s = 2), new Sr(n, s);
          }
          if (arguments.length === 3) {
            var c = arguments[0], h = arguments[1], g = arguments[2], d = h - g;
            return g > 1 && (g = 1), d > 3 && (d = 3), d < 2 && (d = 2), new Sr(c, d + g, g);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [ei, A];
      } }], [{ key: "instance", value: function() {
        return o.instanceObject;
      } }]), o;
    }();
    hs.instanceObject = new hs();
    var gs = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), s = 0; s < n.length; s++) n[s] = this._geometries[s].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], s = arguments[1];
          return !!this.isEquivalentClass(n) && b(v(t.prototype), "equalsExact", this).call(this, n, s);
        }
        return b(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_MULTIPOLYGON;
      } }, { key: "getDimension", value: function() {
        return 2;
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        for (var n = new ne(), s = 0; s < this._geometries.length; s++) for (var c = this._geometries[s].getBoundary(), h = 0; h < c.getNumGeometries(); h++) n.add(c.getGeometryN(h));
        var g = new Array(n.size()).fill(null);
        return this.getFactory().createMultiLineString(n.toArray(g));
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [qn];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], s = arguments[1];
        ot.constructor_.call(this, n, s);
      } }]), t;
    }(ot), ro = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "get", value: function() {
      } }, { key: "put", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "values", value: function() {
      } }, { key: "entrySet", value: function() {
      } }]), o;
    }(), Zf = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), (n = e.call(this)).map = /* @__PURE__ */ new Map(), n;
      }
      return l(t, [{ key: "get", value: function(n) {
        return this.map.get(n) || null;
      } }, { key: "put", value: function(n, s) {
        return this.map.set(n, s), s;
      } }, { key: "values", value: function() {
        for (var n = new ne(), s = this.map.values(), c = s.next(); !c.done; ) n.add(c.value), c = s.next();
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new tt();
        return this.map.entries().forEach(function(s) {
          return n.add(s);
        }), n;
      } }, { key: "size", value: function() {
        return this.map.size();
      } }]), t;
    }(ro), bt = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "equals", value: function(e) {
        if (!(e instanceof o)) return !1;
        var t = e;
        return this._modelType === t._modelType && this._scale === t._scale;
      } }, { key: "compareTo", value: function(e) {
        var t = e, n = this.getMaximumSignificantDigits(), s = t.getMaximumSignificantDigits();
        return st.compare(n, s);
      } }, { key: "getScale", value: function() {
        return this._scale;
      } }, { key: "isFloating", value: function() {
        return this._modelType === o.FLOATING || this._modelType === o.FLOATING_SINGLE;
      } }, { key: "getType", value: function() {
        return this._modelType;
      } }, { key: "toString", value: function() {
        var e = "UNKNOWN";
        return this._modelType === o.FLOATING ? e = "Floating" : this._modelType === o.FLOATING_SINGLE ? e = "Floating-Single" : this._modelType === o.FIXED && (e = "Fixed (Scale=" + this.getScale() + ")"), e;
      } }, { key: "makePrecise", value: function() {
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return K.isNaN(e) || this._modelType === o.FLOATING_SINGLE ? e : this._modelType === o.FIXED ? Math.round(e * this._scale) / this._scale : e;
        }
        if (arguments[0] instanceof C) {
          var t = arguments[0];
          if (this._modelType === o.FLOATING) return null;
          t.x = this.makePrecise(t.x), t.y = this.makePrecise(t.y);
        }
      } }, { key: "getMaximumSignificantDigits", value: function() {
        var e = 16;
        return this._modelType === o.FLOATING ? e = 16 : this._modelType === o.FLOATING_SINGLE ? e = 6 : this._modelType === o.FIXED && (e = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), e;
      } }, { key: "setScale", value: function(e) {
        this._scale = Math.abs(e);
      } }, { key: "interfaces_", get: function() {
        return [A, q];
      } }], [{ key: "constructor_", value: function() {
        if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = o.FLOATING;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof Un) {
            var e = arguments[0];
            this._modelType = e, e === o.FIXED && this.setScale(1);
          } else if (typeof arguments[0] == "number") {
            var t = arguments[0];
            this._modelType = o.FIXED, this.setScale(t);
          } else if (arguments[0] instanceof o) {
            var n = arguments[0];
            this._modelType = n._modelType, this._scale = n._scale;
          }
        }
      } }, { key: "mostPrecise", value: function(e, t) {
        return e.compareTo(t) >= 0 ? e : t;
      } }]), o;
    }(), Un = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "readResolve", value: function() {
        return o.nameToTypeMap.get(this._name);
      } }, { key: "toString", value: function() {
        return this._name;
      } }, { key: "interfaces_", get: function() {
        return [A];
      } }], [{ key: "constructor_", value: function() {
        this._name = null;
        var e = arguments[0];
        this._name = e, o.nameToTypeMap.put(e, this);
      } }]), o;
    }();
    Un.nameToTypeMap = new Zf(), bt.Type = Un, bt.FIXED = new Un("FIXED"), bt.FLOATING = new Un("FLOATING"), bt.FLOATING_SINGLE = new Un("FLOATING SINGLE"), bt.maximumPreciseValue = 9007199254740992;
    var ys = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), s = 0; s < n.length; s++) n[s] = this._geometries[s].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], s = arguments[1];
          return !!this.isEquivalentClass(n) && b(v(t.prototype), "equalsExact", this).call(this, n, s);
        }
        return b(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? V.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        if (this.isEmpty()) return !1;
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isClosed()) return !1;
        return !0;
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_MULTILINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getBoundary", value: function() {
        throw new oe();
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_MULTILINESTRING;
      } }, { key: "interfaces_", get: function() {
        return [ti];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], s = arguments[1];
        ot.constructor_.call(this, n, s);
      } }]), t;
    }(ot), Yn = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "createEmpty", value: function(e) {
        switch (e) {
          case -1:
            return this.createGeometryCollection();
          case 0:
            return this.createPoint();
          case 1:
            return this.createLineString();
          case 2:
            return this.createPolygon();
          default:
            throw new M("Invalid dimension: " + e);
        }
      } }, { key: "toGeometry", value: function(e) {
        return e.isNull() ? this.createPoint() : e.getMinX() === e.getMaxX() && e.getMinY() === e.getMaxY() ? this.createPoint(new C(e.getMinX(), e.getMinY())) : e.getMinX() === e.getMaxX() || e.getMinY() === e.getMaxY() ? this.createLineString([new C(e.getMinX(), e.getMinY()), new C(e.getMaxX(), e.getMaxY())]) : this.createPolygon(this.createLinearRing([new C(e.getMinX(), e.getMinY()), new C(e.getMinX(), e.getMaxY()), new C(e.getMaxX(), e.getMaxY()), new C(e.getMaxX(), e.getMinY()), new C(e.getMinX(), e.getMinY())]), null);
      } }, { key: "createLineString", value: function() {
        if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createLineString(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new Ge(t, this);
          }
        }
      } }, { key: "createMultiLineString", value: function() {
        if (arguments.length === 0) return new ys(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new ys(e, this);
        }
      } }, { key: "buildGeometry", value: function(e) {
        for (var t = null, n = !1, s = !1, c = e.iterator(); c.hasNext(); ) {
          var h = c.next(), g = h.getTypeCode();
          t === null && (t = g), g !== t && (n = !0), h instanceof ot && (s = !0);
        }
        if (t === null) return this.createGeometryCollection();
        if (n || s) return this.createGeometryCollection(o.toGeometryArray(e));
        var d = e.iterator().next();
        if (e.size() > 1) {
          if (d instanceof tn) return this.createMultiPolygon(o.toPolygonArray(e));
          if (d instanceof Ge) return this.createMultiLineString(o.toLineStringArray(e));
          if (d instanceof he) return this.createMultiPoint(o.toPointArray(e));
          fe.shouldNeverReachHere("Unhandled geometry type: " + d.getGeometryType());
        }
        return d;
      } }, { key: "createMultiPointFromCoords", value: function(e) {
        return this.createMultiPoint(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
      } }, { key: "createPoint", value: function() {
        if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof C) {
            var e = arguments[0];
            return this.createPoint(e !== null ? this.getCoordinateSequenceFactory().create([e]) : null);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new he(t, this);
          }
        }
      } }, { key: "getCoordinateSequenceFactory", value: function() {
        return this._coordinateSequenceFactory;
      } }, { key: "createPolygon", value: function() {
        if (arguments.length === 0) return this.createPolygon(null, null);
        if (arguments.length === 1) {
          if (ue(arguments[0], ge)) {
            var e = arguments[0];
            return this.createPolygon(this.createLinearRing(e));
          }
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return this.createPolygon(this.createLinearRing(t));
          }
          if (arguments[0] instanceof kr) {
            var n = arguments[0];
            return this.createPolygon(n, null);
          }
        } else if (arguments.length === 2) {
          var s = arguments[0], c = arguments[1];
          return new tn(s, c, this);
        }
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "createGeometryCollection", value: function() {
        if (arguments.length === 0) return new ot(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new ot(e, this);
        }
      } }, { key: "getPrecisionModel", value: function() {
        return this._precisionModel;
      } }, { key: "createLinearRing", value: function() {
        if (arguments.length === 0) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createLinearRing(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new kr(t, this);
          }
        }
      } }, { key: "createMultiPolygon", value: function() {
        if (arguments.length === 0) return new gs(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new gs(e, this);
        }
      } }, { key: "createMultiPoint", value: function() {
        if (arguments.length === 0) return new cs(null, this);
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new cs(e, this);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            if (t === null) return this.createMultiPoint(new Array(0).fill(null));
            for (var n = new Array(t.size()).fill(null), s = 0; s < t.size(); s++) {
              var c = this.getCoordinateSequenceFactory().create(1, t.getDimension(), t.getMeasures());
              Ut.copy(t, s, c, 0, 1), n[s] = this.createPoint(c);
            }
            return this.createMultiPoint(n);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [A];
      } }], [{ key: "constructor_", value: function() {
        if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) o.constructor_.call(this, new bt(), 0);
        else if (arguments.length === 1) {
          if (ue(arguments[0], ei)) {
            var e = arguments[0];
            o.constructor_.call(this, new bt(), 0, e);
          } else if (arguments[0] instanceof bt) {
            var t = arguments[0];
            o.constructor_.call(this, t, 0, o.getDefaultCoordinateSequenceFactory());
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          o.constructor_.call(this, n, s, o.getDefaultCoordinateSequenceFactory());
        } else if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2];
          this._precisionModel = c, this._coordinateSequenceFactory = g, this._SRID = h;
        }
      } }, { key: "toMultiPolygonArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toGeometryArray", value: function(e) {
        if (e === null) return null;
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
        return hs.instance();
      } }, { key: "toMultiLineStringArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toLineStringArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toMultiPointArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toLinearRingArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toPointArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toPolygonArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "createPointFromInternalCoord", value: function(e, t) {
        return t.getPrecisionModel().makePrecise(e), t.getFactory().createPoint(e);
      } }]), o;
    }(), vs = "XY", Qf = "XYZ", Kf = "XYM", Jf = "XYZM", io = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, so = "EMPTY", ii = 1, Yt = 2, nn = 3, ao = 4, Wn = 5, $f = 6;
    for (var eh in io) io[eh].toUpperCase();
    var th = function() {
      function o(e) {
        i(this, o), this.wkt = e, this.index_ = -1;
      }
      return l(o, [{ key: "isAlpha_", value: function(e) {
        return e >= "a" && e <= "z" || e >= "A" && e <= "Z";
      } }, { key: "isNumeric_", value: function(e, t) {
        return e >= "0" && e <= "9" || e == "." && !(t !== void 0 && t);
      } }, { key: "isWhiteSpace_", value: function(e) {
        return e == " " || e == "	" || e == "\r" || e == `
`;
      } }, { key: "nextChar_", value: function() {
        return this.wkt.charAt(++this.index_);
      } }, { key: "nextToken", value: function() {
        var e, t = this.nextChar_(), n = this.index_, s = t;
        if (t == "(") e = Yt;
        else if (t == ",") e = Wn;
        else if (t == ")") e = nn;
        else if (this.isNumeric_(t) || t == "-") e = ao, s = this.readNumber_();
        else if (this.isAlpha_(t)) e = ii, s = this.readText_();
        else {
          if (this.isWhiteSpace_(t)) return this.nextToken();
          if (t !== "") throw new Error("Unexpected character: " + t);
          e = $f;
        }
        return { position: n, value: s, type: e };
      } }, { key: "readNumber_", value: function() {
        var e, t = this.index_, n = !1, s = !1;
        do
          e == "." ? n = !0 : e != "e" && e != "E" || (s = !0), e = this.nextChar_();
        while (this.isNumeric_(e, n) || !s && (e == "e" || e == "E") || s && (e == "-" || e == "+"));
        return parseFloat(this.wkt.substring(t, this.index_--));
      } }, { key: "readText_", value: function() {
        var e, t = this.index_;
        do
          e = this.nextChar_();
        while (this.isAlpha_(e));
        return this.wkt.substring(t, this.index_--).toUpperCase();
      } }]), o;
    }(), nh = function() {
      function o(e, t) {
        i(this, o), this.lexer_ = e, this.token_, this.layout_ = vs, this.factory = t;
      }
      return l(o, [{ key: "consume_", value: function() {
        this.token_ = this.lexer_.nextToken();
      } }, { key: "isTokenType", value: function(e) {
        return this.token_.type == e;
      } }, { key: "match", value: function(e) {
        var t = this.isTokenType(e);
        return t && this.consume_(), t;
      } }, { key: "parse", value: function() {
        return this.consume_(), this.parseGeometry_();
      } }, { key: "parseGeometryLayout_", value: function() {
        var e = vs, t = this.token_;
        if (this.isTokenType(ii)) {
          var n = t.value;
          n === "Z" ? e = Qf : n === "M" ? e = Kf : n === "ZM" && (e = Jf), e !== vs && this.consume_();
        }
        return e;
      } }, { key: "parseGeometryCollectionText_", value: function() {
        if (this.match(Yt)) {
          var e = [];
          do
            e.push(this.parseGeometry_());
          while (this.match(Wn));
          if (this.match(nn)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointText_", value: function() {
        if (this.match(Yt)) {
          var e = this.parsePoint_();
          if (this.match(nn)) return e;
        } else if (this.isEmptyGeometry_()) return null;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseLineStringText_", value: function() {
        if (this.match(Yt)) {
          var e = this.parsePointList_();
          if (this.match(nn)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePolygonText_", value: function() {
        if (this.match(Yt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(nn)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPointText_", value: function() {
        var e;
        if (this.match(Yt)) {
          if (e = this.token_.type == Yt ? this.parsePointTextList_() : this.parsePointList_(), this.match(nn)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiLineStringText_", value: function() {
        if (this.match(Yt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(nn)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPolygonText_", value: function() {
        if (this.match(Yt)) {
          var e = this.parsePolygonTextList_();
          if (this.match(nn)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePoint_", value: function() {
        for (var e = [], t = this.layout_.length, n = 0; n < t; ++n) {
          var s = this.token_;
          if (!this.match(ao)) break;
          e.push(s.value);
        }
        if (e.length == t) return e;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointList_", value: function() {
        for (var e = [this.parsePoint_()]; this.match(Wn); ) e.push(this.parsePoint_());
        return e;
      } }, { key: "parsePointTextList_", value: function() {
        for (var e = [this.parsePointText_()]; this.match(Wn); ) e.push(this.parsePointText_());
        return e;
      } }, { key: "parseLineStringTextList_", value: function() {
        for (var e = [this.parseLineStringText_()]; this.match(Wn); ) e.push(this.parseLineStringText_());
        return e;
      } }, { key: "parsePolygonTextList_", value: function() {
        for (var e = [this.parsePolygonText_()]; this.match(Wn); ) e.push(this.parsePolygonText_());
        return e;
      } }, { key: "isEmptyGeometry_", value: function() {
        var e = this.isTokenType(ii) && this.token_.value == so;
        return e && this.consume_(), e;
      } }, { key: "formatErrorMessage_", value: function() {
        return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
      } }, { key: "parseGeometry_", value: function() {
        var e = this.factory, t = function(re) {
          return _(C, L(re));
        }, n = function(re) {
          var ce = re.map(function(_e) {
            return e.createLinearRing(_e.map(t));
          });
          return ce.length > 1 ? e.createPolygon(ce[0], ce.slice(1)) : e.createPolygon(ce[0]);
        }, s = this.token_;
        if (this.match(ii)) {
          var c = s.value;
          if (this.layout_ = this.parseGeometryLayout_(), c == "GEOMETRYCOLLECTION") {
            var h = this.parseGeometryCollectionText_();
            return e.createGeometryCollection(h);
          }
          switch (c) {
            case "POINT":
              var g = this.parsePointText_();
              return g ? e.createPoint(_(C, L(g))) : e.createPoint();
            case "LINESTRING":
              var d = this.parseLineStringText_().map(t);
              return e.createLineString(d);
            case "LINEARRING":
              var E = this.parseLineStringText_().map(t);
              return e.createLinearRing(E);
            case "POLYGON":
              var w = this.parsePolygonText_();
              return w && w.length !== 0 ? n(w) : e.createPolygon();
            case "MULTIPOINT":
              var N = this.parseMultiPointText_();
              if (!N || N.length === 0) return e.createMultiPoint();
              var F = N.map(t).map(function(re) {
                return e.createPoint(re);
              });
              return e.createMultiPoint(F);
            case "MULTILINESTRING":
              var j = this.parseMultiLineStringText_().map(function(re) {
                return e.createLineString(re.map(t));
              });
              return e.createMultiLineString(j);
            case "MULTIPOLYGON":
              var X = this.parseMultiPolygonText_();
              if (!X || X.length === 0) return e.createMultiPolygon();
              var $ = X.map(n);
              return e.createMultiPolygon($);
            default:
              throw new Error("Invalid geometry type: " + c);
          }
        }
        throw new Error(this.formatErrorMessage_());
      } }]), o;
    }();
    function oo(o) {
      if (o.isEmpty()) return "";
      var e = o.getCoordinate(), t = [e.x, e.y];
      return e.z === void 0 || Number.isNaN(e.z) || t.push(e.z), e.m === void 0 || Number.isNaN(e.m) || t.push(e.m), t.join(" ");
    }
    function br(o) {
      for (var e = o.getCoordinates().map(function(c) {
        var h = [c.x, c.y];
        return c.z === void 0 || Number.isNaN(c.z) || h.push(c.z), c.m === void 0 || Number.isNaN(c.m) || h.push(c.m), h;
      }), t = [], n = 0, s = e.length; n < s; ++n) t.push(e[n].join(" "));
      return t.join(", ");
    }
    function uo(o) {
      var e = [];
      e.push("(" + br(o.getExteriorRing()) + ")");
      for (var t = 0, n = o.getNumInteriorRing(); t < n; ++t) e.push("(" + br(o.getInteriorRingN(t)) + ")");
      return e.join(", ");
    }
    var rh = { Point: oo, LineString: br, LinearRing: br, Polygon: uo, MultiPoint: function(o) {
      for (var e = [], t = 0, n = o.getNumGeometries(); t < n; ++t) e.push("(" + oo(o.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiLineString: function(o) {
      for (var e = [], t = 0, n = o.getNumGeometries(); t < n; ++t) e.push("(" + br(o.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiPolygon: function(o) {
      for (var e = [], t = 0, n = o.getNumGeometries(); t < n; ++t) e.push("(" + uo(o.getGeometryN(t)) + ")");
      return e.join(", ");
    }, GeometryCollection: function(o) {
      for (var e = [], t = 0, n = o.getNumGeometries(); t < n; ++t) e.push(lo(o.getGeometryN(t)));
      return e.join(", ");
    } };
    function lo(o) {
      var e = o.getGeometryType(), t = rh[e];
      e = e.toUpperCase();
      var n = function(s) {
        var c = "";
        if (s.isEmpty()) return c;
        var h = s.getCoordinate();
        return h.z === void 0 || Number.isNaN(h.z) || (c += "Z"), h.m === void 0 || Number.isNaN(h.m) || (c += "M"), c;
      }(o);
      return n.length > 0 && (e += " " + n), o.isEmpty() ? e + " " + so : e + " (" + t(o) + ")";
    }
    var ih = function() {
      function o(e) {
        i(this, o), this.geometryFactory = e || new Yn(), this.precisionModel = this.geometryFactory.getPrecisionModel();
      }
      return l(o, [{ key: "read", value: function(e) {
        var t = new th(e);
        return new nh(t, this.geometryFactory).parse();
      } }, { key: "write", value: function(e) {
        return lo(e);
      } }]), o;
    }(), ds = function() {
      function o(e) {
        i(this, o), this.parser = new ih(e);
      }
      return l(o, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }], [{ key: "toLineString", value: function(e, t) {
        if (arguments.length !== 2) throw new Error("Not implemented");
        return "LINESTRING ( " + e.x + " " + e.y + ", " + t.x + " " + t.y + " )";
      } }]), o;
    }(), Te = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getIndexAlongSegment", value: function(e, t) {
        return this.computeIntLineIndex(), this._intLineIndex[e][t];
      } }, { key: "getTopologySummary", value: function() {
        var e = new ri();
        return this.isEndPoint() && e.append(" endpoint"), this._isProper && e.append(" proper"), this.isCollinear() && e.append(" collinear"), e.toString();
      } }, { key: "computeIntersection", value: function(e, t, n, s) {
        this._inputLines[0][0] = e, this._inputLines[0][1] = t, this._inputLines[1][0] = n, this._inputLines[1][1] = s, this._result = this.computeIntersect(e, t, n, s);
      } }, { key: "getIntersectionNum", value: function() {
        return this._result;
      } }, { key: "computeIntLineIndex", value: function() {
        if (arguments.length === 0) this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
          return Array(2);
        }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
        else if (arguments.length === 1) {
          var e = arguments[0], t = this.getEdgeDistance(e, 0), n = this.getEdgeDistance(e, 1);
          t > n ? (this._intLineIndex[e][0] = 0, this._intLineIndex[e][1] = 1) : (this._intLineIndex[e][0] = 1, this._intLineIndex[e][1] = 0);
        }
      } }, { key: "isProper", value: function() {
        return this.hasIntersection() && this._isProper;
      } }, { key: "setPrecisionModel", value: function(e) {
        this._precisionModel = e;
      } }, { key: "isInteriorIntersection", value: function() {
        if (arguments.length === 0) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0; t < this._result; t++) if (!this._intPt[t].equals2D(this._inputLines[e][0]) && !this._intPt[t].equals2D(this._inputLines[e][1])) return !0;
          return !1;
        }
      } }, { key: "getIntersection", value: function(e) {
        return this._intPt[e];
      } }, { key: "isEndPoint", value: function() {
        return this.hasIntersection() && !this._isProper;
      } }, { key: "hasIntersection", value: function() {
        return this._result !== o.NO_INTERSECTION;
      } }, { key: "getEdgeDistance", value: function(e, t) {
        return o.computeEdgeDistance(this._intPt[t], this._inputLines[e][0], this._inputLines[e][1]);
      } }, { key: "isCollinear", value: function() {
        return this._result === o.COLLINEAR_INTERSECTION;
      } }, { key: "toString", value: function() {
        return ds.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + ds.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
      } }, { key: "getEndpoint", value: function(e, t) {
        return this._inputLines[e][t];
      } }, { key: "isIntersection", value: function(e) {
        for (var t = 0; t < this._result; t++) if (this._intPt[t].equals2D(e)) return !0;
        return !1;
      } }, { key: "getIntersectionAlongSegment", value: function(e, t) {
        return this.computeIntLineIndex(), this._intPt[this._intLineIndex[e][t]];
      } }], [{ key: "constructor_", value: function() {
        this._result = null, this._inputLines = Array(2).fill().map(function() {
          return Array(2);
        }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new C(), this._intPt[1] = new C(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
      } }, { key: "computeEdgeDistance", value: function(e, t, n) {
        var s = Math.abs(n.x - t.x), c = Math.abs(n.y - t.y), h = -1;
        if (e.equals(t)) h = 0;
        else if (e.equals(n)) h = s > c ? s : c;
        else {
          var g = Math.abs(e.x - t.x), d = Math.abs(e.y - t.y);
          (h = s > c ? g : d) !== 0 || e.equals(t) || (h = Math.max(g, d));
        }
        return fe.isTrue(!(h === 0 && !e.equals(t)), "Bad distance calculation"), h;
      } }, { key: "nonRobustComputeEdgeDistance", value: function(e, t, n) {
        var s = e.x - t.x, c = e.y - t.y, h = Math.sqrt(s * s + c * c);
        return fe.isTrue(!(h === 0 && !e.equals(t)), "Invalid distance calculation"), h;
      } }]), o;
    }();
    Te.DONT_INTERSECT = 0, Te.DO_INTERSECT = 1, Te.COLLINEAR = 2, Te.NO_INTERSECTION = 0, Te.POINT_INTERSECTION = 1, Te.COLLINEAR_INTERSECTION = 2;
    var bn = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        return i(this, t), e.call(this);
      }
      return l(t, [{ key: "isInSegmentEnvelopes", value: function(n) {
        var s = new xe(this._inputLines[0][0], this._inputLines[0][1]), c = new xe(this._inputLines[1][0], this._inputLines[1][1]);
        return s.contains(n) && c.contains(n);
      } }, { key: "computeIntersection", value: function() {
        if (arguments.length !== 3) return b(v(t.prototype), "computeIntersection", this).apply(this, arguments);
        var n = arguments[0], s = arguments[1], c = arguments[2];
        if (this._isProper = !1, xe.intersects(s, c, n) && se.index(s, c, n) === 0 && se.index(c, s, n) === 0) return this._isProper = !0, (n.equals(s) || n.equals(c)) && (this._isProper = !1), this._result = Te.POINT_INTERSECTION, null;
        this._result = Te.NO_INTERSECTION;
      } }, { key: "intersection", value: function(n, s, c, h) {
        var g = this.intersectionSafe(n, s, c, h);
        return this.isInSegmentEnvelopes(g) || (g = new C(t.nearestEndpoint(n, s, c, h))), this._precisionModel !== null && this._precisionModel.makePrecise(g), g;
      } }, { key: "checkDD", value: function(n, s, c, h, g) {
        var d = En.intersection(n, s, c, h), E = this.isInSegmentEnvelopes(d);
        rt.out.println("DD in env = " + E + "  --------------------- " + d), g.distance(d) > 1e-4 && rt.out.println("Distance = " + g.distance(d));
      } }, { key: "intersectionSafe", value: function(n, s, c, h) {
        var g = Er.intersection(n, s, c, h);
        return g === null && (g = t.nearestEndpoint(n, s, c, h)), g;
      } }, { key: "computeCollinearIntersection", value: function(n, s, c, h) {
        var g = xe.intersects(n, s, c), d = xe.intersects(n, s, h), E = xe.intersects(c, h, n), w = xe.intersects(c, h, s);
        return g && d ? (this._intPt[0] = c, this._intPt[1] = h, Te.COLLINEAR_INTERSECTION) : E && w ? (this._intPt[0] = n, this._intPt[1] = s, Te.COLLINEAR_INTERSECTION) : g && E ? (this._intPt[0] = c, this._intPt[1] = n, !c.equals(n) || d || w ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : g && w ? (this._intPt[0] = c, this._intPt[1] = s, !c.equals(s) || d || E ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : d && E ? (this._intPt[0] = h, this._intPt[1] = n, !h.equals(n) || g || w ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : d && w ? (this._intPt[0] = h, this._intPt[1] = s, !h.equals(s) || g || E ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : Te.NO_INTERSECTION;
      } }, { key: "computeIntersect", value: function(n, s, c, h) {
        if (this._isProper = !1, !xe.intersects(n, s, c, h)) return Te.NO_INTERSECTION;
        var g = se.index(n, s, c), d = se.index(n, s, h);
        if (g > 0 && d > 0 || g < 0 && d < 0) return Te.NO_INTERSECTION;
        var E = se.index(c, h, n), w = se.index(c, h, s);
        return E > 0 && w > 0 || E < 0 && w < 0 ? Te.NO_INTERSECTION : g === 0 && d === 0 && E === 0 && w === 0 ? this.computeCollinearIntersection(n, s, c, h) : (g === 0 || d === 0 || E === 0 || w === 0 ? (this._isProper = !1, n.equals2D(c) || n.equals2D(h) ? this._intPt[0] = n : s.equals2D(c) || s.equals2D(h) ? this._intPt[0] = s : g === 0 ? this._intPt[0] = new C(c) : d === 0 ? this._intPt[0] = new C(h) : E === 0 ? this._intPt[0] = new C(n) : w === 0 && (this._intPt[0] = new C(s))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, s, c, h)), Te.POINT_INTERSECTION);
      } }], [{ key: "nearestEndpoint", value: function(n, s, c, h) {
        var g = n, d = gt.pointToSegment(n, c, h), E = gt.pointToSegment(s, c, h);
        return E < d && (d = E, g = s), (E = gt.pointToSegment(c, n, s)) < d && (d = E, g = c), (E = gt.pointToSegment(h, n, s)) < d && (d = E, g = h), g;
      } }]), t;
    }(Te), sh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "countSegment", value: function(e, t) {
        if (e.x < this._p.x && t.x < this._p.x) return null;
        if (this._p.x === t.x && this._p.y === t.y) return this._isPointOnSegment = !0, null;
        if (e.y === this._p.y && t.y === this._p.y) {
          var n = e.x, s = t.x;
          return n > s && (n = t.x, s = e.x), this._p.x >= n && this._p.x <= s && (this._isPointOnSegment = !0), null;
        }
        if (e.y > this._p.y && t.y <= this._p.y || t.y > this._p.y && e.y <= this._p.y) {
          var c = se.index(e, t, this._p);
          if (c === se.COLLINEAR) return this._isPointOnSegment = !0, null;
          t.y < e.y && (c = -c), c === se.LEFT && this._crossingCount++;
        }
      } }, { key: "isPointInPolygon", value: function() {
        return this.getLocation() !== I.EXTERIOR;
      } }, { key: "getLocation", value: function() {
        return this._isPointOnSegment ? I.BOUNDARY : this._crossingCount % 2 == 1 ? I.INTERIOR : I.EXTERIOR;
      } }, { key: "isOnSegment", value: function() {
        return this._isPointOnSegment;
      } }], [{ key: "constructor_", value: function() {
        this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
        var e = arguments[0];
        this._p = e;
      } }, { key: "locatePointInRing", value: function() {
        if (arguments[0] instanceof C && ue(arguments[1], ge)) {
          for (var e = arguments[0], t = arguments[1], n = new o(e), s = new C(), c = new C(), h = 1; h < t.size(); h++) if (t.getCoordinate(h, s), t.getCoordinate(h - 1, c), n.countSegment(s, c), n.isOnSegment()) return n.getLocation();
          return n.getLocation();
        }
        if (arguments[0] instanceof C && arguments[1] instanceof Array) {
          for (var g = arguments[0], d = arguments[1], E = new o(g), w = 1; w < d.length; w++) {
            var N = d[w], F = d[w - 1];
            if (E.countSegment(N, F), E.isOnSegment()) return E.getLocation();
          }
          return E.getLocation();
        }
      } }]), o;
    }(), ms = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "isOnLine", value: function() {
        if (arguments[0] instanceof C && ue(arguments[1], ge)) {
          for (var e = arguments[0], t = arguments[1], n = new bn(), s = new C(), c = new C(), h = t.size(), g = 1; g < h; g++) if (t.getCoordinate(g - 1, s), t.getCoordinate(g, c), n.computeIntersection(e, s, c), n.hasIntersection()) return !0;
          return !1;
        }
        if (arguments[0] instanceof C && arguments[1] instanceof Array) {
          for (var d = arguments[0], E = arguments[1], w = new bn(), N = 1; N < E.length; N++) {
            var F = E[N - 1], j = E[N];
            if (w.computeIntersection(d, F, j), w.hasIntersection()) return !0;
          }
          return !1;
        }
      } }, { key: "locateInRing", value: function(e, t) {
        return sh.locatePointInRing(e, t);
      } }, { key: "isInRing", value: function(e, t) {
        return o.locateInRing(e, t) !== I.EXTERIOR;
      } }]), o;
    }(), vt = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "setAllLocations", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] = e;
      } }, { key: "isNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] !== I.NONE) return !1;
        return !0;
      } }, { key: "setAllLocationsIfNull", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] === I.NONE && (this.location[t] = e);
      } }, { key: "isLine", value: function() {
        return this.location.length === 1;
      } }, { key: "merge", value: function(e) {
        if (e.location.length > this.location.length) {
          var t = new Array(3).fill(null);
          t[W.ON] = this.location[W.ON], t[W.LEFT] = I.NONE, t[W.RIGHT] = I.NONE, this.location = t;
        }
        for (var n = 0; n < this.location.length; n++) this.location[n] === I.NONE && n < e.location.length && (this.location[n] = e.location[n]);
      } }, { key: "getLocations", value: function() {
        return this.location;
      } }, { key: "flip", value: function() {
        if (this.location.length <= 1) return null;
        var e = this.location[W.LEFT];
        this.location[W.LEFT] = this.location[W.RIGHT], this.location[W.RIGHT] = e;
      } }, { key: "toString", value: function() {
        var e = new _n();
        return this.location.length > 1 && e.append(I.toLocationSymbol(this.location[W.LEFT])), e.append(I.toLocationSymbol(this.location[W.ON])), this.location.length > 1 && e.append(I.toLocationSymbol(this.location[W.RIGHT])), e.toString();
      } }, { key: "setLocations", value: function(e, t, n) {
        this.location[W.ON] = e, this.location[W.LEFT] = t, this.location[W.RIGHT] = n;
      } }, { key: "get", value: function(e) {
        return e < this.location.length ? this.location[e] : I.NONE;
      } }, { key: "isArea", value: function() {
        return this.location.length > 1;
      } }, { key: "isAnyNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] === I.NONE) return !0;
        return !1;
      } }, { key: "setLocation", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.setLocation(W.ON, e);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.location[t] = n;
        }
      } }, { key: "init", value: function(e) {
        this.location = new Array(e).fill(null), this.setAllLocations(I.NONE);
      } }, { key: "isEqualOnSide", value: function(e, t) {
        return this.location[t] === e.location[t];
      } }, { key: "allPositionsEqual", value: function(e) {
        for (var t = 0; t < this.location.length; t++) if (this.location[t] !== e) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this.location = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            this.init(e.length);
          } else if (Number.isInteger(arguments[0])) {
            var t = arguments[0];
            this.init(1), this.location[W.ON] = t;
          } else if (arguments[0] instanceof o) {
            var n = arguments[0];
            if (this.init(n.location.length), n !== null) for (var s = 0; s < this.location.length; s++) this.location[s] = n.location[s];
          }
        } else if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2];
          this.init(3), this.location[W.ON] = c, this.location[W.LEFT] = h, this.location[W.RIGHT] = g;
        }
      } }]), o;
    }(), dt = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getGeometryCount", value: function() {
        var e = 0;
        return this.elt[0].isNull() || e++, this.elt[1].isNull() || e++, e;
      } }, { key: "setAllLocations", value: function(e, t) {
        this.elt[e].setAllLocations(t);
      } }, { key: "isNull", value: function(e) {
        return this.elt[e].isNull();
      } }, { key: "setAllLocationsIfNull", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.setAllLocationsIfNull(0, e), this.setAllLocationsIfNull(1, e);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.elt[t].setAllLocationsIfNull(n);
        }
      } }, { key: "isLine", value: function(e) {
        return this.elt[e].isLine();
      } }, { key: "merge", value: function(e) {
        for (var t = 0; t < 2; t++) this.elt[t] === null && e.elt[t] !== null ? this.elt[t] = new vt(e.elt[t]) : this.elt[t].merge(e.elt[t]);
      } }, { key: "flip", value: function() {
        this.elt[0].flip(), this.elt[1].flip();
      } }, { key: "getLocation", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.elt[e].get(W.ON);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return this.elt[t].get(n);
        }
      } }, { key: "toString", value: function() {
        var e = new _n();
        return this.elt[0] !== null && (e.append("A:"), e.append(this.elt[0].toString())), this.elt[1] !== null && (e.append(" B:"), e.append(this.elt[1].toString())), e.toString();
      } }, { key: "isArea", value: function() {
        if (arguments.length === 0) return this.elt[0].isArea() || this.elt[1].isArea();
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.elt[e].isArea();
        }
      } }, { key: "isAnyNull", value: function(e) {
        return this.elt[e].isAnyNull();
      } }, { key: "setLocation", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.elt[e].setLocation(W.ON, t);
        } else if (arguments.length === 3) {
          var n = arguments[0], s = arguments[1], c = arguments[2];
          this.elt[n].setLocation(s, c);
        }
      } }, { key: "isEqualOnSide", value: function(e, t) {
        return this.elt[0].isEqualOnSide(e.elt[0], t) && this.elt[1].isEqualOnSide(e.elt[1], t);
      } }, { key: "allPositionsEqual", value: function(e, t) {
        return this.elt[e].allPositionsEqual(t);
      } }, { key: "toLine", value: function(e) {
        this.elt[e].isArea() && (this.elt[e] = new vt(this.elt[e].location[0]));
      } }], [{ key: "constructor_", value: function() {
        if (this.elt = new Array(2).fill(null), arguments.length === 1) {
          if (Number.isInteger(arguments[0])) {
            var e = arguments[0];
            this.elt[0] = new vt(e), this.elt[1] = new vt(e);
          } else if (arguments[0] instanceof o) {
            var t = arguments[0];
            this.elt[0] = new vt(t.elt[0]), this.elt[1] = new vt(t.elt[1]);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          this.elt[0] = new vt(I.NONE), this.elt[1] = new vt(I.NONE), this.elt[n].setLocation(s);
        } else if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2];
          this.elt[0] = new vt(c, h, g), this.elt[1] = new vt(c, h, g);
        } else if (arguments.length === 4) {
          var d = arguments[0], E = arguments[1], w = arguments[2], N = arguments[3];
          this.elt[0] = new vt(I.NONE, I.NONE, I.NONE), this.elt[1] = new vt(I.NONE, I.NONE, I.NONE), this.elt[d].setLocations(E, w, N);
        }
      } }, { key: "toLineLabel", value: function(e) {
        for (var t = new o(I.NONE), n = 0; n < 2; n++) t.setLocation(n, e.getLocation(n));
        return t;
      } }]), o;
    }(), si = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "computeRing", value: function() {
        if (this._ring !== null) return null;
        for (var e = new Array(this._pts.size()).fill(null), t = 0; t < this._pts.size(); t++) e[t] = this._pts.get(t);
        this._ring = this._geometryFactory.createLinearRing(e), this._isHole = se.isCCW(this._ring.getCoordinates());
      } }, { key: "isIsolated", value: function() {
        return this._label.getGeometryCount() === 1;
      } }, { key: "computePoints", value: function(e) {
        this._startDe = e;
        var t = e, n = !0;
        do {
          if (t === null) throw new at("Found null DirectedEdge");
          if (t.getEdgeRing() === this) throw new at("Directed Edge visited twice during ring-building at " + t.getCoordinate());
          this._edges.add(t);
          var s = t.getLabel();
          fe.isTrue(s.isArea()), this.mergeLabel(s), this.addPoints(t.getEdge(), t.isForward(), n), n = !1, this.setEdgeRing(t, this), t = this.getNext(t);
        } while (t !== this._startDe);
      } }, { key: "getLinearRing", value: function() {
        return this._ring;
      } }, { key: "getCoordinate", value: function(e) {
        return this._pts.get(e);
      } }, { key: "computeMaxNodeDegree", value: function() {
        this._maxNodeDegree = 0;
        var e = this._startDe;
        do {
          var t = e.getNode().getEdges().getOutgoingDegree(this);
          t > this._maxNodeDegree && (this._maxNodeDegree = t), e = this.getNext(e);
        } while (e !== this._startDe);
        this._maxNodeDegree *= 2;
      } }, { key: "addPoints", value: function(e, t, n) {
        var s = e.getCoordinates();
        if (t) {
          var c = 1;
          n && (c = 0);
          for (var h = c; h < s.length; h++) this._pts.add(s[h]);
        } else {
          var g = s.length - 2;
          n && (g = s.length - 1);
          for (var d = g; d >= 0; d--) this._pts.add(s[d]);
        }
      } }, { key: "isHole", value: function() {
        return this._isHole;
      } }, { key: "setInResult", value: function() {
        var e = this._startDe;
        do
          e.getEdge().setInResult(!0), e = e.getNext();
        while (e !== this._startDe);
      } }, { key: "containsPoint", value: function(e) {
        var t = this.getLinearRing();
        if (!t.getEnvelopeInternal().contains(e) || !ms.isInRing(e, t.getCoordinates())) return !1;
        for (var n = this._holes.iterator(); n.hasNext(); )
          if (n.next().containsPoint(e)) return !1;
        return !0;
      } }, { key: "addHole", value: function(e) {
        this._holes.add(e);
      } }, { key: "isShell", value: function() {
        return this._shell === null;
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "getMaxNodeDegree", value: function() {
        return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
      } }, { key: "getShell", value: function() {
        return this._shell;
      } }, { key: "mergeLabel", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.mergeLabel(e, 0), this.mergeLabel(e, 1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], s = t.getLocation(n, W.RIGHT);
          if (s === I.NONE) return null;
          if (this._label.getLocation(n) === I.NONE) return this._label.setLocation(n, s), null;
        }
      } }, { key: "setShell", value: function(e) {
        this._shell = e, e !== null && e.addHole(this);
      } }, { key: "toPolygon", value: function(e) {
        for (var t = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) t[n] = this._holes.get(n).getLinearRing();
        return e.createPolygon(this.getLinearRing(), t);
      } }], [{ key: "constructor_", value: function() {
        if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new ne(), this._pts = new ne(), this._label = new dt(I.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new ne(), this._geometryFactory = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            this._geometryFactory = t, this.computePoints(e), this.computeRing();
          }
        }
      } }]), o;
    }(), ah = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "setEdgeRing", value: function(n, s) {
        n.setMinEdgeRing(s);
      } }, { key: "getNext", value: function(n) {
        return n.getNextMin();
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], s = arguments[1];
        si.constructor_.call(this, n, s);
      } }]), t;
    }(si), oh = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "buildMinimalRings", value: function() {
        var n = new ne(), s = this._startDe;
        do {
          if (s.getMinEdgeRing() === null) {
            var c = new ah(s, this._geometryFactory);
            n.add(c);
          }
          s = s.getNext();
        } while (s !== this._startDe);
        return n;
      } }, { key: "setEdgeRing", value: function(n, s) {
        n.setEdgeRing(s);
      } }, { key: "linkDirectedEdgesForMinimalEdgeRings", value: function() {
        var n = this._startDe;
        do
          n.getNode().getEdges().linkMinimalDirectedEdges(this), n = n.getNext();
        while (n !== this._startDe);
      } }, { key: "getNext", value: function(n) {
        return n.getNext();
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], s = arguments[1];
        si.constructor_.call(this, n, s);
      } }]), t;
    }(si), co = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "setVisited", value: function(e) {
        this._isVisited = e;
      } }, { key: "setInResult", value: function(e) {
        this._isInResult = e;
      } }, { key: "isCovered", value: function() {
        return this._isCovered;
      } }, { key: "isCoveredSet", value: function() {
        return this._isCoveredSet;
      } }, { key: "setLabel", value: function(e) {
        this._label = e;
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "setCovered", value: function(e) {
        this._isCovered = e, this._isCoveredSet = !0;
      } }, { key: "updateIM", value: function(e) {
        fe.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(e);
      } }, { key: "isInResult", value: function() {
        return this._isInResult;
      } }, { key: "isVisited", value: function() {
        return this._isVisited;
      } }], [{ key: "constructor_", value: function() {
        if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this._label = e;
          }
        }
      } }]), o;
    }(), ai = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "isIncidentEdgeInResult", value: function() {
        for (var n = this.getEdges().getEdges().iterator(); n.hasNext(); )
          if (n.next().getEdge().isInResult()) return !0;
        return !1;
      } }, { key: "isIsolated", value: function() {
        return this._label.getGeometryCount() === 1;
      } }, { key: "getCoordinate", value: function() {
        return this._coord;
      } }, { key: "print", value: function(n) {
        n.println("node " + this._coord + " lbl: " + this._label);
      } }, { key: "computeIM", value: function(n) {
      } }, { key: "computeMergedLocation", value: function(n, s) {
        var c = I.NONE;
        if (c = this._label.getLocation(s), !n.isNull(s)) {
          var h = n.getLocation(s);
          c !== I.BOUNDARY && (c = h);
        }
        return c;
      } }, { key: "setLabel", value: function() {
        if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return b(v(t.prototype), "setLabel", this).apply(this, arguments);
        var n = arguments[0], s = arguments[1];
        this._label === null ? this._label = new dt(n, s) : this._label.setLocation(n, s);
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "mergeLabel", value: function() {
        if (arguments[0] instanceof t) {
          var n = arguments[0];
          this.mergeLabel(n._label);
        } else if (arguments[0] instanceof dt) for (var s = arguments[0], c = 0; c < 2; c++) {
          var h = this.computeMergedLocation(s, c), g = this._label.getLocation(c);
          g === I.NONE && this._label.setLocation(c, h);
        }
      } }, { key: "add", value: function(n) {
        this._edges.insert(n), n.setNode(this);
      } }, { key: "setLabelBoundary", value: function(n) {
        if (this._label === null) return null;
        var s = I.NONE;
        this._label !== null && (s = this._label.getLocation(n));
        var c = null;
        switch (s) {
          case I.BOUNDARY:
            c = I.INTERIOR;
            break;
          case I.INTERIOR:
          default:
            c = I.BOUNDARY;
        }
        this._label.setLocation(n, c);
      } }], [{ key: "constructor_", value: function() {
        this._coord = null, this._edges = null;
        var n = arguments[0], s = arguments[1];
        this._coord = n, this._edges = s, this._label = new dt(0, I.NONE);
      } }]), t;
    }(co), uh = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        return i(this, t), e.apply(this, arguments);
      }
      return t;
    }(ro);
    function fo(o) {
      return o == null ? 0 : o.color;
    }
    function pe(o) {
      return o == null ? null : o.parent;
    }
    function Mt(o, e) {
      o !== null && (o.color = e);
    }
    function ps(o) {
      return o == null ? null : o.left;
    }
    function ho(o) {
      return o == null ? null : o.right;
    }
    var Ir = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), (n = e.call(this)).root_ = null, n.size_ = 0, n;
      }
      return l(t, [{ key: "get", value: function(n) {
        for (var s = this.root_; s !== null; ) {
          var c = n.compareTo(s.key);
          if (c < 0) s = s.left;
          else {
            if (!(c > 0)) return s.value;
            s = s.right;
          }
        }
        return null;
      } }, { key: "put", value: function(n, s) {
        if (this.root_ === null) return this.root_ = { key: n, value: s, left: null, right: null, parent: null, color: 0, getValue: function() {
          return this.value;
        }, getKey: function() {
          return this.key;
        } }, this.size_ = 1, null;
        var c, h, g = this.root_;
        do
          if (c = g, (h = n.compareTo(g.key)) < 0) g = g.left;
          else {
            if (!(h > 0)) {
              var d = g.value;
              return g.value = s, d;
            }
            g = g.right;
          }
        while (g !== null);
        var E = { key: n, left: null, right: null, value: s, parent: c, color: 0, getValue: function() {
          return this.value;
        }, getKey: function() {
          return this.key;
        } };
        return h < 0 ? c.left = E : c.right = E, this.fixAfterInsertion(E), this.size_++, null;
      } }, { key: "fixAfterInsertion", value: function(n) {
        var s;
        for (n.color = 1; n != null && n !== this.root_ && n.parent.color === 1; ) pe(n) === ps(pe(pe(n))) ? fo(s = ho(pe(pe(n)))) === 1 ? (Mt(pe(n), 0), Mt(s, 0), Mt(pe(pe(n)), 1), n = pe(pe(n))) : (n === ho(pe(n)) && (n = pe(n), this.rotateLeft(n)), Mt(pe(n), 0), Mt(pe(pe(n)), 1), this.rotateRight(pe(pe(n)))) : fo(s = ps(pe(pe(n)))) === 1 ? (Mt(pe(n), 0), Mt(s, 0), Mt(pe(pe(n)), 1), n = pe(pe(n))) : (n === ps(pe(n)) && (n = pe(n), this.rotateRight(n)), Mt(pe(n), 0), Mt(pe(pe(n)), 1), this.rotateLeft(pe(pe(n))));
        this.root_.color = 0;
      } }, { key: "values", value: function() {
        var n = new ne(), s = this.getFirstEntry();
        if (s !== null) for (n.add(s.value); (s = t.successor(s)) !== null; ) n.add(s.value);
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new tt(), s = this.getFirstEntry();
        if (s !== null) for (n.add(s); (s = t.successor(s)) !== null; ) n.add(s);
        return n;
      } }, { key: "rotateLeft", value: function(n) {
        if (n != null) {
          var s = n.right;
          n.right = s.left, s.left != null && (s.left.parent = n), s.parent = n.parent, n.parent == null ? this.root_ = s : n.parent.left === n ? n.parent.left = s : n.parent.right = s, s.left = n, n.parent = s;
        }
      } }, { key: "rotateRight", value: function(n) {
        if (n != null) {
          var s = n.left;
          n.left = s.right, s.right != null && (s.right.parent = n), s.parent = n.parent, n.parent == null ? this.root_ = s : n.parent.right === n ? n.parent.right = s : n.parent.left = s, s.right = n, n.parent = s;
        }
      } }, { key: "getFirstEntry", value: function() {
        var n = this.root_;
        if (n != null) for (; n.left != null; ) n = n.left;
        return n;
      } }, { key: "size", value: function() {
        return this.size_;
      } }, { key: "containsKey", value: function(n) {
        for (var s = this.root_; s !== null; ) {
          var c = n.compareTo(s.key);
          if (c < 0) s = s.left;
          else {
            if (!(c > 0)) return !0;
            s = s.right;
          }
        }
        return !1;
      } }], [{ key: "successor", value: function(n) {
        var s;
        if (n === null) return null;
        if (n.right !== null) {
          for (s = n.right; s.left !== null; ) s = s.left;
          return s;
        }
        s = n.parent;
        for (var c = n; s !== null && c === s.right; ) c = s, s = s.parent;
        return s;
      } }]), t;
    }(uh), go = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "find", value: function(e) {
        return this.nodeMap.get(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof C) {
          var e = arguments[0], t = this.nodeMap.get(e);
          return t === null && (t = this.nodeFact.createNode(e), this.nodeMap.put(e, t)), t;
        }
        if (arguments[0] instanceof ai) {
          var n = arguments[0], s = this.nodeMap.get(n.getCoordinate());
          return s === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (s.mergeLabel(n), s);
        }
      } }, { key: "print", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "iterator", value: function() {
        return this.nodeMap.values().iterator();
      } }, { key: "values", value: function() {
        return this.nodeMap.values();
      } }, { key: "getBoundaryNodes", value: function(e) {
        for (var t = new ne(), n = this.iterator(); n.hasNext(); ) {
          var s = n.next();
          s.getLabel().getLocation(e) === I.BOUNDARY && t.add(s);
        }
        return t;
      } }, { key: "add", value: function(e) {
        var t = e.getCoordinate();
        this.addNode(t).add(e);
      } }], [{ key: "constructor_", value: function() {
        this.nodeMap = new Ir(), this.nodeFact = null;
        var e = arguments[0];
        this.nodeFact = e;
      } }]), o;
    }(), Je = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "isNorthern", value: function(e) {
        return e === o.NE || e === o.NW;
      } }, { key: "isOpposite", value: function(e, t) {
        return e !== t && (e - t + 4) % 4 === 2;
      } }, { key: "commonHalfPlane", value: function(e, t) {
        if (e === t) return e;
        if ((e - t + 4) % 4 === 2) return -1;
        var n = e < t ? e : t;
        return n === 0 && (e > t ? e : t) === 3 ? 3 : n;
      } }, { key: "isInHalfPlane", value: function(e, t) {
        return t === o.SE ? e === o.SE || e === o.SW : e === t || e === t + 1;
      } }, { key: "quadrant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1];
          if (e === 0 && t === 0) throw new M("Cannot compute the quadrant for point ( " + e + ", " + t + " )");
          return e >= 0 ? t >= 0 ? o.NE : o.SE : t >= 0 ? o.NW : o.SW;
        }
        if (arguments[0] instanceof C && arguments[1] instanceof C) {
          var n = arguments[0], s = arguments[1];
          if (s.x === n.x && s.y === n.y) throw new M("Cannot compute the quadrant for two identical points " + n);
          return s.x >= n.x ? s.y >= n.y ? o.NE : o.SE : s.y >= n.y ? o.NW : o.SW;
        }
      } }]), o;
    }();
    Je.NE = 0, Je.NW = 1, Je.SW = 2, Je.SE = 3;
    var yo = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "compareDirection", value: function(e) {
        return this._dx === e._dx && this._dy === e._dy ? 0 : this._quadrant > e._quadrant ? 1 : this._quadrant < e._quadrant ? -1 : se.index(e._p0, e._p1, this._p1);
      } }, { key: "getDy", value: function() {
        return this._dy;
      } }, { key: "getCoordinate", value: function() {
        return this._p0;
      } }, { key: "setNode", value: function(e) {
        this._node = e;
      } }, { key: "print", value: function(e) {
        var t = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), s = n.lastIndexOf("."), c = n.substring(s + 1);
        e.print("  " + c + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.compareDirection(t);
      } }, { key: "getDirectedCoordinate", value: function() {
        return this._p1;
      } }, { key: "getDx", value: function() {
        return this._dx;
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "getQuadrant", value: function() {
        return this._quadrant;
      } }, { key: "getNode", value: function() {
        return this._node;
      } }, { key: "toString", value: function() {
        var e = Math.atan2(this._dy, this._dx), t = this.getClass().getName(), n = t.lastIndexOf(".");
        return "  " + t.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label;
      } }, { key: "computeLabel", value: function(e) {
      } }, { key: "init", value: function(e, t) {
        this._p0 = e, this._p1 = t, this._dx = t.x - e.x, this._dy = t.y - e.y, this._quadrant = Je.quadrant(this._dx, this._dy), fe.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
          var e = arguments[0];
          this._edge = e;
        } else if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], s = arguments[2];
          o.constructor_.call(this, t, n, s, null);
        } else if (arguments.length === 4) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3];
          o.constructor_.call(this, c), this.init(h, g), this._label = d;
        }
      } }]), o;
    }(), _s = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "getNextMin", value: function() {
        return this._nextMin;
      } }, { key: "getDepth", value: function(n) {
        return this._depth[n];
      } }, { key: "setVisited", value: function(n) {
        this._isVisited = n;
      } }, { key: "computeDirectedLabel", value: function() {
        this._label = new dt(this._edge.getLabel()), this._isForward || this._label.flip();
      } }, { key: "getNext", value: function() {
        return this._next;
      } }, { key: "setDepth", value: function(n, s) {
        if (this._depth[n] !== -999 && this._depth[n] !== s) throw new at("assigned depths do not match", this.getCoordinate());
        this._depth[n] = s;
      } }, { key: "isInteriorAreaEdge", value: function() {
        for (var n = !0, s = 0; s < 2; s++) this._label.isArea(s) && this._label.getLocation(s, W.LEFT) === I.INTERIOR && this._label.getLocation(s, W.RIGHT) === I.INTERIOR || (n = !1);
        return n;
      } }, { key: "setNextMin", value: function(n) {
        this._nextMin = n;
      } }, { key: "print", value: function(n) {
        b(v(t.prototype), "print", this).call(this, n), n.print(" " + this._depth[W.LEFT] + "/" + this._depth[W.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
      } }, { key: "setMinEdgeRing", value: function(n) {
        this._minEdgeRing = n;
      } }, { key: "isLineEdge", value: function() {
        var n = this._label.isLine(0) || this._label.isLine(1), s = !this._label.isArea(0) || this._label.allPositionsEqual(0, I.EXTERIOR), c = !this._label.isArea(1) || this._label.allPositionsEqual(1, I.EXTERIOR);
        return n && s && c;
      } }, { key: "setEdgeRing", value: function(n) {
        this._edgeRing = n;
      } }, { key: "getMinEdgeRing", value: function() {
        return this._minEdgeRing;
      } }, { key: "getDepthDelta", value: function() {
        var n = this._edge.getDepthDelta();
        return this._isForward || (n = -n), n;
      } }, { key: "setInResult", value: function(n) {
        this._isInResult = n;
      } }, { key: "getSym", value: function() {
        return this._sym;
      } }, { key: "isForward", value: function() {
        return this._isForward;
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "printEdge", value: function(n) {
        this.print(n), n.print(" "), this._isForward ? this._edge.print(n) : this._edge.printReverse(n);
      } }, { key: "setSym", value: function(n) {
        this._sym = n;
      } }, { key: "setVisitedEdge", value: function(n) {
        this.setVisited(n), this._sym.setVisited(n);
      } }, { key: "setEdgeDepths", value: function(n, s) {
        var c = this.getEdge().getDepthDelta();
        this._isForward || (c = -c);
        var h = 1;
        n === W.LEFT && (h = -1);
        var g = W.opposite(n), d = s + c * h;
        this.setDepth(n, s), this.setDepth(g, d);
      } }, { key: "getEdgeRing", value: function() {
        return this._edgeRing;
      } }, { key: "isInResult", value: function() {
        return this._isInResult;
      } }, { key: "setNext", value: function(n) {
        this._next = n;
      } }, { key: "isVisited", value: function() {
        return this._isVisited;
      } }], [{ key: "constructor_", value: function() {
        this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999];
        var n = arguments[0], s = arguments[1];
        if (yo.constructor_.call(this, n), this._isForward = s, s) this.init(n.getCoordinate(0), n.getCoordinate(1));
        else {
          var c = n.getNumPoints() - 1;
          this.init(n.getCoordinate(c), n.getCoordinate(c - 1));
        }
        this.computeDirectedLabel();
      } }, { key: "depthFactor", value: function(n, s) {
        return n === I.EXTERIOR && s === I.INTERIOR ? 1 : n === I.INTERIOR && s === I.EXTERIOR ? -1 : 0;
      } }]), t;
    }(yo), vo = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "createNode", value: function(e) {
        return new ai(e, null);
      } }]), o;
    }(), mo = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "printEdges", value: function(e) {
        e.println("Edges:");
        for (var t = 0; t < this._edges.size(); t++) {
          e.println("edge " + t + ":");
          var n = this._edges.get(t);
          n.print(e), n.eiList.print(e);
        }
      } }, { key: "find", value: function(e) {
        return this._nodes.find(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof ai) {
          var e = arguments[0];
          return this._nodes.addNode(e);
        }
        if (arguments[0] instanceof C) {
          var t = arguments[0];
          return this._nodes.addNode(t);
        }
      } }, { key: "getNodeIterator", value: function() {
        return this._nodes.iterator();
      } }, { key: "linkResultDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkResultDirectedEdges();
      } }, { key: "debugPrintln", value: function(e) {
        rt.out.println(e);
      } }, { key: "isBoundaryNode", value: function(e, t) {
        var n = this._nodes.find(t);
        if (n === null) return !1;
        var s = n.getLabel();
        return s !== null && s.getLocation(e) === I.BOUNDARY;
      } }, { key: "linkAllDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkAllDirectedEdges();
      } }, { key: "matchInSameDirection", value: function(e, t, n, s) {
        return !!e.equals(n) && se.index(e, t, s) === se.COLLINEAR && Je.quadrant(e, t) === Je.quadrant(n, s);
      } }, { key: "getEdgeEnds", value: function() {
        return this._edgeEndList;
      } }, { key: "debugPrint", value: function(e) {
        rt.out.print(e);
      } }, { key: "getEdgeIterator", value: function() {
        return this._edges.iterator();
      } }, { key: "findEdgeInSameDirection", value: function(e, t) {
        for (var n = 0; n < this._edges.size(); n++) {
          var s = this._edges.get(n), c = s.getCoordinates();
          if (this.matchInSameDirection(e, t, c[0], c[1]) || this.matchInSameDirection(e, t, c[c.length - 1], c[c.length - 2])) return s;
        }
        return null;
      } }, { key: "insertEdge", value: function(e) {
        this._edges.add(e);
      } }, { key: "findEdgeEnd", value: function(e) {
        for (var t = this.getEdgeEnds().iterator(); t.hasNext(); ) {
          var n = t.next();
          if (n.getEdge() === e) return n;
        }
        return null;
      } }, { key: "addEdges", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this._edges.add(n);
          var s = new _s(n, !0), c = new _s(n, !1);
          s.setSym(c), c.setSym(s), this.add(s), this.add(c);
        }
      } }, { key: "add", value: function(e) {
        this._nodes.add(e), this._edgeEndList.add(e);
      } }, { key: "getNodes", value: function() {
        return this._nodes.values();
      } }, { key: "findEdge", value: function(e, t) {
        for (var n = 0; n < this._edges.size(); n++) {
          var s = this._edges.get(n), c = s.getCoordinates();
          if (e.equals(c[0]) && t.equals(c[1])) return s;
        }
        return null;
      } }], [{ key: "constructor_", value: function() {
        if (this._edges = new ne(), this._nodes = null, this._edgeEndList = new ne(), arguments.length === 0) this._nodes = new go(new vo());
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._nodes = new go(e);
        }
      } }, { key: "linkResultDirectedEdges", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); )
          t.next().getEdges().linkResultDirectedEdges();
      } }]), o;
    }(), lh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "sortShellsAndHoles", value: function(e, t, n) {
        for (var s = e.iterator(); s.hasNext(); ) {
          var c = s.next();
          c.isHole() ? n.add(c) : t.add(c);
        }
      } }, { key: "computePolygons", value: function(e) {
        for (var t = new ne(), n = e.iterator(); n.hasNext(); ) {
          var s = n.next().toPolygon(this._geometryFactory);
          t.add(s);
        }
        return t;
      } }, { key: "placeFreeHoles", value: function(e, t) {
        for (var n = t.iterator(); n.hasNext(); ) {
          var s = n.next();
          if (s.getShell() === null) {
            var c = o.findEdgeRingContaining(s, e);
            if (c === null) throw new at("unable to assign hole to a shell", s.getCoordinate(0));
            s.setShell(c);
          }
        }
      } }, { key: "buildMinimalEdgeRings", value: function(e, t, n) {
        for (var s = new ne(), c = e.iterator(); c.hasNext(); ) {
          var h = c.next();
          if (h.getMaxNodeDegree() > 2) {
            h.linkDirectedEdgesForMinimalEdgeRings();
            var g = h.buildMinimalRings(), d = this.findShell(g);
            d !== null ? (this.placePolygonHoles(d, g), t.add(d)) : n.addAll(g);
          } else s.add(h);
        }
        return s;
      } }, { key: "buildMaximalEdgeRings", value: function(e) {
        for (var t = new ne(), n = e.iterator(); n.hasNext(); ) {
          var s = n.next();
          if (s.isInResult() && s.getLabel().isArea() && s.getEdgeRing() === null) {
            var c = new oh(s, this._geometryFactory);
            t.add(c), c.setInResult();
          }
        }
        return t;
      } }, { key: "placePolygonHoles", value: function(e, t) {
        for (var n = t.iterator(); n.hasNext(); ) {
          var s = n.next();
          s.isHole() && s.setShell(e);
        }
      } }, { key: "getPolygons", value: function() {
        return this.computePolygons(this._shellList);
      } }, { key: "findShell", value: function(e) {
        for (var t = 0, n = null, s = e.iterator(); s.hasNext(); ) {
          var c = s.next();
          c.isHole() || (n = c, t++);
        }
        return fe.isTrue(t <= 1, "found two shells in MinimalEdgeRing list"), n;
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.add(e.getEdgeEnds(), e.getNodes());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          mo.linkResultDirectedEdges(n);
          var s = this.buildMaximalEdgeRings(t), c = new ne(), h = this.buildMinimalEdgeRings(s, this._shellList, c);
          this.sortShellsAndHoles(h, this._shellList, c), this.placeFreeHoles(this._shellList, c);
        }
      } }], [{ key: "constructor_", value: function() {
        this._geometryFactory = null, this._shellList = new ne();
        var e = arguments[0];
        this._geometryFactory = e;
      } }, { key: "findEdgeRingContaining", value: function(e, t) {
        for (var n = e.getLinearRing(), s = n.getEnvelopeInternal(), c = n.getCoordinateN(0), h = null, g = null, d = t.iterator(); d.hasNext(); ) {
          var E = d.next(), w = E.getLinearRing(), N = w.getEnvelopeInternal();
          if (!N.equals(s) && N.contains(s)) {
            c = qe.ptNotInList(n.getCoordinates(), w.getCoordinates());
            var F = !1;
            ms.isInRing(c, w.getCoordinates()) && (F = !0), F && (h === null || g.contains(N)) && (g = (h = E).getLinearRing().getEnvelopeInternal());
          }
        }
        return h;
      } }]), o;
    }(), po = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "getBounds", value: function() {
      } }]), o;
    }(), Wt = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getItem", value: function() {
        return this._item;
      } }, { key: "getBounds", value: function() {
        return this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [po, A];
      } }], [{ key: "constructor_", value: function() {
        this._bounds = null, this._item = null;
        var e = arguments[0], t = arguments[1];
        this._bounds = e, this._item = t;
      } }]), o;
    }(), oi = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "poll", value: function() {
        if (this.isEmpty()) return null;
        var e = this._items.get(1);
        return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), e;
      } }, { key: "size", value: function() {
        return this._size;
      } }, { key: "reorder", value: function(e) {
        for (var t = null, n = this._items.get(e); 2 * e <= this._size && ((t = 2 * e) !== this._size && this._items.get(t + 1).compareTo(this._items.get(t)) < 0 && t++, this._items.get(t).compareTo(n) < 0); e = t) this._items.set(e, this._items.get(t));
        this._items.set(e, n);
      } }, { key: "clear", value: function() {
        this._size = 0, this._items.clear();
      } }, { key: "peek", value: function() {
        return this.isEmpty() ? null : this._items.get(1);
      } }, { key: "isEmpty", value: function() {
        return this._size === 0;
      } }, { key: "add", value: function(e) {
        this._items.add(null), this._size += 1;
        var t = this._size;
        for (this._items.set(0, e); e.compareTo(this._items.get(Math.trunc(t / 2))) < 0; t /= 2) this._items.set(t, this._items.get(Math.trunc(t / 2)));
        this._items.set(t, e);
      } }], [{ key: "constructor_", value: function() {
        this._size = null, this._items = null, this._size = 0, this._items = new ne(), this._items.add(null);
      } }]), o;
    }(), ch = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "insert", value: function(e, t) {
      } }, { key: "remove", value: function(e, t) {
      } }, { key: "query", value: function() {
      } }]), o;
    }(), mt = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getLevel", value: function() {
        return this._level;
      } }, { key: "size", value: function() {
        return this._childBoundables.size();
      } }, { key: "getChildBoundables", value: function() {
        return this._childBoundables;
      } }, { key: "addChildBoundable", value: function(e) {
        fe.isTrue(this._bounds === null), this._childBoundables.add(e);
      } }, { key: "isEmpty", value: function() {
        return this._childBoundables.isEmpty();
      } }, { key: "getBounds", value: function() {
        return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [po, A];
      } }], [{ key: "constructor_", value: function() {
        if (this._childBoundables = new ne(), this._bounds = null, this._level = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this._level = e;
          }
        }
      } }]), o;
    }(), Xn = { reverseOrder: function() {
      return { compare: function(o, e) {
        return e.compareTo(o);
      } };
    }, min: function(o) {
      return Xn.sort(o), o.get(0);
    }, sort: function(o, e) {
      var t = o.toArray();
      e ? yt.sort(t, e) : yt.sort(t);
      for (var n = o.iterator(), s = 0, c = t.length; s < c; s++) n.next(), n.set(t[s]);
    }, singletonList: function(o) {
      var e = new ne();
      return e.add(o), e;
    } }, fh = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "maxDistance", value: function(e, t, n, s, c, h, g, d) {
        var E = o.distance(e, t, c, h);
        return E = Math.max(E, o.distance(e, t, g, d)), E = Math.max(E, o.distance(n, s, c, h)), E = Math.max(E, o.distance(n, s, g, d));
      } }, { key: "distance", value: function(e, t, n, s) {
        var c = n - e, h = s - t;
        return Math.sqrt(c * c + h * h);
      } }, { key: "maximumDistance", value: function(e, t) {
        var n = Math.min(e.getMinX(), t.getMinX()), s = Math.min(e.getMinY(), t.getMinY()), c = Math.max(e.getMaxX(), t.getMaxX()), h = Math.max(e.getMaxY(), t.getMaxY());
        return o.distance(n, s, c, h);
      } }, { key: "minMaxDistance", value: function(e, t) {
        var n = e.getMinX(), s = e.getMinY(), c = e.getMaxX(), h = e.getMaxY(), g = t.getMinX(), d = t.getMinY(), E = t.getMaxX(), w = t.getMaxY(), N = o.maxDistance(n, s, n, h, g, d, g, w);
        return N = Math.min(N, o.maxDistance(n, s, n, h, g, d, E, d)), N = Math.min(N, o.maxDistance(n, s, n, h, E, w, g, w)), N = Math.min(N, o.maxDistance(n, s, n, h, E, w, E, d)), N = Math.min(N, o.maxDistance(n, s, c, s, g, d, g, w)), N = Math.min(N, o.maxDistance(n, s, c, s, g, d, E, d)), N = Math.min(N, o.maxDistance(n, s, c, s, E, w, g, w)), N = Math.min(N, o.maxDistance(n, s, c, s, E, w, E, d)), N = Math.min(N, o.maxDistance(c, h, n, h, g, d, g, w)), N = Math.min(N, o.maxDistance(c, h, n, h, g, d, E, d)), N = Math.min(N, o.maxDistance(c, h, n, h, E, w, g, w)), N = Math.min(N, o.maxDistance(c, h, n, h, E, w, E, d)), N = Math.min(N, o.maxDistance(c, h, c, s, g, d, g, w)), N = Math.min(N, o.maxDistance(c, h, c, s, g, d, E, d)), N = Math.min(N, o.maxDistance(c, h, c, s, E, w, g, w)), N = Math.min(N, o.maxDistance(c, h, c, s, E, w, E, d));
      } }]), o;
    }(), jn = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "maximumDistance", value: function() {
        return fh.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
      } }, { key: "expandToQueue", value: function(e, t) {
        var n = o.isComposite(this._boundable1), s = o.isComposite(this._boundable2);
        if (n && s) return o.area(this._boundable1) > o.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, e, t), null) : (this.expand(this._boundable2, this._boundable1, !0, e, t), null);
        if (n) return this.expand(this._boundable1, this._boundable2, !1, e, t), null;
        if (s) return this.expand(this._boundable2, this._boundable1, !0, e, t), null;
        throw new M("neither boundable is composite");
      } }, { key: "isLeaves", value: function() {
        return !(o.isComposite(this._boundable1) || o.isComposite(this._boundable2));
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._distance < t._distance ? -1 : this._distance > t._distance ? 1 : 0;
      } }, { key: "expand", value: function(e, t, n, s, c) {
        for (var h = e.getChildBoundables().iterator(); h.hasNext(); ) {
          var g = h.next(), d = null;
          (d = n ? new o(t, g, this._itemDistance) : new o(g, t, this._itemDistance)).getDistance() < c && s.add(d);
        }
      } }, { key: "getBoundable", value: function(e) {
        return e === 0 ? this._boundable1 : this._boundable2;
      } }, { key: "getDistance", value: function() {
        return this._distance;
      } }, { key: "distance", value: function() {
        return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._boundable1 = e, this._boundable2 = t, this._itemDistance = n, this._distance = this.distance();
      } }, { key: "area", value: function(e) {
        return e.getBounds().getArea();
      } }, { key: "isComposite", value: function(e) {
        return e instanceof mt;
      } }]), o;
    }(), _o = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "visitItem", value: function(e) {
      } }]), o;
    }(), Vn = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "queryInternal", value: function() {
        if (ue(arguments[2], _o) && arguments[0] instanceof Object && arguments[1] instanceof mt) for (var e = arguments[0], t = arguments[1], n = arguments[2], s = t.getChildBoundables(), c = 0; c < s.size(); c++) {
          var h = s.get(c);
          this.getIntersectsOp().intersects(h.getBounds(), e) && (h instanceof mt ? this.queryInternal(e, h, n) : h instanceof Wt ? n.visitItem(h.getItem()) : fe.shouldNeverReachHere());
        }
        else if (ue(arguments[2], nt) && arguments[0] instanceof Object && arguments[1] instanceof mt) for (var g = arguments[0], d = arguments[1], E = arguments[2], w = d.getChildBoundables(), N = 0; N < w.size(); N++) {
          var F = w.get(N);
          this.getIntersectsOp().intersects(F.getBounds(), g) && (F instanceof mt ? this.queryInternal(g, F, E) : F instanceof Wt ? E.add(F.getItem()) : fe.shouldNeverReachHere());
        }
      } }, { key: "getNodeCapacity", value: function() {
        return this._nodeCapacity;
      } }, { key: "lastNode", value: function(e) {
        return e.get(e.size() - 1);
      } }, { key: "size", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0, n = e.getChildBoundables().iterator(); n.hasNext(); ) {
            var s = n.next();
            s instanceof mt ? t += this.size(s) : s instanceof Wt && (t += 1);
          }
          return t;
        }
      } }, { key: "removeItem", value: function(e, t) {
        for (var n = null, s = e.getChildBoundables().iterator(); s.hasNext(); ) {
          var c = s.next();
          c instanceof Wt && c.getItem() === t && (n = c);
        }
        return n !== null && (e.getChildBoundables().remove(n), !0);
      } }, { key: "itemsTree", value: function() {
        if (arguments.length === 0) {
          this.build();
          var e = this.itemsTree(this._root);
          return e === null ? new ne() : e;
        }
        if (arguments.length === 1) {
          for (var t = arguments[0], n = new ne(), s = t.getChildBoundables().iterator(); s.hasNext(); ) {
            var c = s.next();
            if (c instanceof mt) {
              var h = this.itemsTree(c);
              h !== null && n.add(h);
            } else c instanceof Wt ? n.add(c.getItem()) : fe.shouldNeverReachHere();
          }
          return n.size() <= 0 ? null : n;
        }
      } }, { key: "insert", value: function(e, t) {
        fe.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Wt(e, t));
      } }, { key: "boundablesAtLevel", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new ne();
          return this.boundablesAtLevel(e, this._root, t), t;
        }
        if (arguments.length === 3) {
          var n = arguments[0], s = arguments[1], c = arguments[2];
          if (fe.isTrue(n > -2), s.getLevel() === n) return c.add(s), null;
          for (var h = s.getChildBoundables().iterator(); h.hasNext(); ) {
            var g = h.next();
            g instanceof mt ? this.boundablesAtLevel(n, g, c) : (fe.isTrue(g instanceof Wt), n === -1 && c.add(g));
          }
          return null;
        }
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.build();
          var t = new ne();
          return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.queryInternal(e, this._root, t), t;
        }
        if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          if (this.build(), this.isEmpty()) return null;
          this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.queryInternal(n, this._root, s);
        }
      } }, { key: "build", value: function() {
        if (this._built) return null;
        this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
      } }, { key: "getRoot", value: function() {
        return this.build(), this._root;
      } }, { key: "remove", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.remove(e, this._root, t);
        }
        if (arguments.length === 3) {
          var n = arguments[0], s = arguments[1], c = arguments[2], h = this.removeItem(s, c);
          if (h) return !0;
          for (var g = null, d = s.getChildBoundables().iterator(); d.hasNext(); ) {
            var E = d.next();
            if (this.getIntersectsOp().intersects(E.getBounds(), n) && E instanceof mt && (h = this.remove(n, E, c))) {
              g = E;
              break;
            }
          }
          return g !== null && g.getChildBoundables().isEmpty() && s.getChildBoundables().remove(g), h;
        }
      } }, { key: "createHigherLevels", value: function(e, t) {
        fe.isTrue(!e.isEmpty());
        var n = this.createParentBoundables(e, t + 1);
        return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, t + 1);
      } }, { key: "depth", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0, n = e.getChildBoundables().iterator(); n.hasNext(); ) {
            var s = n.next();
            if (s instanceof mt) {
              var c = this.depth(s);
              c > t && (t = c);
            }
          }
          return t + 1;
        }
      } }, { key: "createParentBoundables", value: function(e, t) {
        fe.isTrue(!e.isEmpty());
        var n = new ne();
        n.add(this.createNode(t));
        var s = new ne(e);
        Xn.sort(s, this.getComparator());
        for (var c = s.iterator(); c.hasNext(); ) {
          var h = c.next();
          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(t)), this.lastNode(n).addChildBoundable(h);
        }
        return n;
      } }, { key: "isEmpty", value: function() {
        return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
      } }, { key: "interfaces_", get: function() {
        return [A];
      } }], [{ key: "constructor_", value: function() {
        if (this._root = null, this._built = !1, this._itemBoundables = new ne(), this._nodeCapacity = null, arguments.length === 0) o.constructor_.call(this, o.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var e = arguments[0];
          fe.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
        }
      } }, { key: "compareDoubles", value: function(e, t) {
        return e > t ? 1 : e < t ? -1 : 0;
      } }]), o;
    }();
    Vn.IntersectsOp = function() {
    }, Vn.DEFAULT_NODE_CAPACITY = 10;
    var hh = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "distance", value: function(e, t) {
      } }]), o;
    }(), Pt = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "createParentBoundablesFromVerticalSlices", value: function(n, s) {
        fe.isTrue(n.length > 0);
        for (var c = new ne(), h = 0; h < n.length; h++) c.addAll(this.createParentBoundablesFromVerticalSlice(n[h], s));
        return c;
      } }, { key: "nearestNeighbourK", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1];
          return this.nearestNeighbourK(n, K.POSITIVE_INFINITY, s);
        }
        if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = h, E = new oi();
          E.add(c);
          for (var w = new oi(); !E.isEmpty() && d >= 0; ) {
            var N = E.poll(), F = N.getDistance();
            if (F >= d) break;
            if (N.isLeaves()) if (w.size() < g) w.add(N);
            else {
              var j = w.peek();
              j.getDistance() > F && (w.poll(), w.add(N));
              var X = w.peek();
              d = X.getDistance();
            }
            else N.expandToQueue(E, d);
          }
          return t.getItems(w);
        }
      } }, { key: "createNode", value: function(n) {
        return new Eo(n);
      } }, { key: "size", value: function() {
        return arguments.length === 0 ? b(v(t.prototype), "size", this).call(this) : b(v(t.prototype), "size", this).apply(this, arguments);
      } }, { key: "insert", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof xe)) return b(v(t.prototype), "insert", this).apply(this, arguments);
        var n = arguments[0], s = arguments[1];
        if (n.isNull()) return null;
        b(v(t.prototype), "insert", this).call(this, n, s);
      } }, { key: "getIntersectsOp", value: function() {
        return t.intersectsOp;
      } }, { key: "verticalSlices", value: function(n, s) {
        for (var c = Math.trunc(Math.ceil(n.size() / s)), h = new Array(s).fill(null), g = n.iterator(), d = 0; d < s; d++) {
          h[d] = new ne();
          for (var E = 0; g.hasNext() && E < c; ) {
            var w = g.next();
            h[d].add(w), E++;
          }
        }
        return h;
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return b(v(t.prototype), "query", this).call(this, n);
        }
        if (arguments.length === 2) {
          var s = arguments[0], c = arguments[1];
          b(v(t.prototype), "query", this).call(this, s, c);
        }
      } }, { key: "getComparator", value: function() {
        return t.yComparator;
      } }, { key: "createParentBoundablesFromVerticalSlice", value: function(n, s) {
        return b(v(t.prototype), "createParentBoundables", this).call(this, n, s);
      } }, { key: "remove", value: function() {
        if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof xe) {
          var n = arguments[0], s = arguments[1];
          return b(v(t.prototype), "remove", this).call(this, n, s);
        }
        return b(v(t.prototype), "remove", this).apply(this, arguments);
      } }, { key: "depth", value: function() {
        return arguments.length === 0 ? b(v(t.prototype), "depth", this).call(this) : b(v(t.prototype), "depth", this).apply(this, arguments);
      } }, { key: "createParentBoundables", value: function(n, s) {
        fe.isTrue(!n.isEmpty());
        var c = Math.trunc(Math.ceil(n.size() / this.getNodeCapacity())), h = new ne(n);
        Xn.sort(h, t.xComparator);
        var g = this.verticalSlices(h, Math.trunc(Math.ceil(Math.sqrt(c))));
        return this.createParentBoundablesFromVerticalSlices(g, s);
      } }, { key: "nearestNeighbour", value: function() {
        if (arguments.length === 1) {
          if (ue(arguments[0], hh)) {
            var n = arguments[0];
            if (this.isEmpty()) return null;
            var s = new jn(this.getRoot(), this.getRoot(), n);
            return this.nearestNeighbour(s);
          }
          if (arguments[0] instanceof jn) {
            var c = arguments[0], h = K.POSITIVE_INFINITY, g = null, d = new oi();
            for (d.add(c); !d.isEmpty() && h > 0; ) {
              var E = d.poll(), w = E.getDistance();
              if (w >= h) break;
              E.isLeaves() ? (h = w, g = E) : E.expandToQueue(d, h);
            }
            return g === null ? null : [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
          }
        } else {
          if (arguments.length === 2) {
            var N = arguments[0], F = arguments[1];
            if (this.isEmpty() || N.isEmpty()) return null;
            var j = new jn(this.getRoot(), N.getRoot(), F);
            return this.nearestNeighbour(j);
          }
          if (arguments.length === 3) {
            var X = arguments[0], $ = arguments[1], re = arguments[2], ce = new Wt(X, $), _e = new jn(this.getRoot(), ce, re);
            return this.nearestNeighbour(_e)[0];
          }
          if (arguments.length === 4) {
            var Re = arguments[0], je = arguments[1], ct = arguments[2], wt = arguments[3], Xt = new Wt(Re, je), wn = new jn(this.getRoot(), Xt, ct);
            return this.nearestNeighbourK(wn, wt);
          }
        }
      } }, { key: "isWithinDistance", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], s = arguments[1], c = K.POSITIVE_INFINITY, h = new oi();
          for (h.add(n); !h.isEmpty(); ) {
            var g = h.poll(), d = g.getDistance();
            if (d > s) return !1;
            if (g.maximumDistance() <= s) return !0;
            if (g.isLeaves()) {
              if ((c = d) <= s) return !0;
            } else g.expandToQueue(h, c);
          }
          return !1;
        }
        if (arguments.length === 3) {
          var E = arguments[0], w = arguments[1], N = arguments[2], F = new jn(this.getRoot(), E.getRoot(), w);
          return this.isWithinDistance(F, N);
        }
      } }, { key: "interfaces_", get: function() {
        return [ch, A];
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) t.constructor_.call(this, t.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Vn.constructor_.call(this, n);
        }
      } }, { key: "centreX", value: function(n) {
        return t.avg(n.getMinX(), n.getMaxX());
      } }, { key: "avg", value: function(n, s) {
        return (n + s) / 2;
      } }, { key: "getItems", value: function(n) {
        for (var s = new Array(n.size()).fill(null), c = 0; !n.isEmpty(); ) {
          var h = n.poll();
          s[c] = h.getBoundable(0).getItem(), c++;
        }
        return s;
      } }, { key: "centreY", value: function(n) {
        return t.avg(n.getMinY(), n.getMaxY());
      } }]), t;
    }(Vn), Eo = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "computeBounds", value: function() {
        for (var n = null, s = this.getChildBoundables().iterator(); s.hasNext(); ) {
          var c = s.next();
          n === null ? n = new xe(c.getBounds()) : n.expandToInclude(c.getBounds());
        }
        return n;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0];
        mt.constructor_.call(this, n);
      } }]), t;
    }(mt);
    Pt.STRtreeNode = Eo, Pt.xComparator = new (function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "interfaces_", get: function() {
        return [Fe];
      } }, { key: "compare", value: function(e, t) {
        return Vn.compareDoubles(Pt.centreX(e.getBounds()), Pt.centreX(t.getBounds()));
      } }]), o;
    }())(), Pt.yComparator = new (function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "interfaces_", get: function() {
        return [Fe];
      } }, { key: "compare", value: function(e, t) {
        return Vn.compareDoubles(Pt.centreY(e.getBounds()), Pt.centreY(t.getBounds()));
      } }]), o;
    }())(), Pt.intersectsOp = new (function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "interfaces_", get: function() {
        return [IntersectsOp];
      } }, { key: "intersects", value: function(e, t) {
        return e.intersects(t);
      } }]), o;
    }())(), Pt.DEFAULT_NODE_CAPACITY = 10;
    var gh = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "relativeSign", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      } }, { key: "compare", value: function(e, t, n) {
        if (t.equals2D(n)) return 0;
        var s = o.relativeSign(t.x, n.x), c = o.relativeSign(t.y, n.y);
        switch (e) {
          case 0:
            return o.compareValue(s, c);
          case 1:
            return o.compareValue(c, s);
          case 2:
            return o.compareValue(c, -s);
          case 3:
            return o.compareValue(-s, c);
          case 4:
            return o.compareValue(-s, -c);
          case 5:
            return o.compareValue(-c, -s);
          case 6:
            return o.compareValue(-c, s);
          case 7:
            return o.compareValue(s, -c);
        }
        return fe.shouldNeverReachHere("invalid octant value"), 0;
      } }, { key: "compareValue", value: function(e, t) {
        return e < 0 ? -1 : e > 0 ? 1 : t < 0 ? -1 : t > 0 ? 1 : 0;
      } }]), o;
    }(), yh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(e) {
        e.print(this.coord), e.print(" seg # = " + this.segmentIndex);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.segmentIndex < t.segmentIndex ? -1 : this.segmentIndex > t.segmentIndex ? 1 : this.coord.equals2D(t.coord) ? 0 : this._isInterior ? t._isInterior ? gh.compare(this._segmentOctant, this.coord, t.coord) : 1 : -1;
      } }, { key: "isEndPoint", value: function(e) {
        return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === e;
      } }, { key: "toString", value: function() {
        return this.segmentIndex + ":" + this.coord.toString();
      } }, { key: "isInterior", value: function() {
        return this._isInterior;
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
        var e = arguments[0], t = arguments[1], n = arguments[2], s = arguments[3];
        this._segString = e, this.coord = new C(t), this.segmentIndex = n, this._segmentOctant = s, this._isInterior = !t.equals2D(e.getCoordinate(n));
      } }]), o;
    }(), vh = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "hasNext", value: function() {
      } }, { key: "next", value: function() {
      } }, { key: "remove", value: function() {
      } }]), o;
    }(), dh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getSplitCoordinates", value: function() {
        var e = new xr();
        this.addEndpoints();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var s = t.next();
          this.addEdgeCoordinates(n, s, e), n = s;
        }
        return e.toCoordinateArray();
      } }, { key: "addCollapsedNodes", value: function() {
        var e = new ne();
        this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next().intValue();
          this.add(this._edge.getCoordinate(n), n);
        }
      } }, { key: "createSplitEdgePts", value: function(e, t) {
        var n = t.segmentIndex - e.segmentIndex + 2;
        if (n === 2) return [new C(e.coord), new C(t.coord)];
        var s = this._edge.getCoordinate(t.segmentIndex), c = t.isInterior() || !t.coord.equals2D(s);
        c || n--;
        var h = new Array(n).fill(null), g = 0;
        h[g++] = new C(e.coord);
        for (var d = e.segmentIndex + 1; d <= t.segmentIndex; d++) h[g++] = this._edge.getCoordinate(d);
        return c && (h[g] = new C(t.coord)), h;
      } }, { key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "findCollapsesFromExistingVertices", value: function(e) {
        for (var t = 0; t < this._edge.size() - 2; t++) {
          var n = this._edge.getCoordinate(t);
          this._edge.getCoordinate(t + 1);
          var s = this._edge.getCoordinate(t + 2);
          n.equals2D(s) && e.add(st.valueOf(t + 1));
        }
      } }, { key: "addEdgeCoordinates", value: function(e, t, n) {
        var s = this.createSplitEdgePts(e, t);
        n.add(s, !1);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(e) {
        this.addEndpoints(), this.addCollapsedNodes();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var s = t.next(), c = this.createSplitEdge(n, s);
          e.add(c), n = s;
        }
      } }, { key: "findCollapseIndex", value: function(e, t, n) {
        if (!e.coord.equals2D(t.coord)) return !1;
        var s = t.segmentIndex - e.segmentIndex;
        return t.isInterior() || s--, s === 1 && (n[0] = e.segmentIndex + 1, !0);
      } }, { key: "findCollapsesFromInsertedNodes", value: function(e) {
        for (var t = new Array(1).fill(null), n = this.iterator(), s = n.next(); n.hasNext(); ) {
          var c = n.next();
          this.findCollapseIndex(s, c, t) && e.add(st.valueOf(t[0])), s = c;
        }
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "addEndpoints", value: function() {
        var e = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(e), e);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = this.createSplitEdgePts(e, t);
        return new In(n, this._edge.getData());
      } }, { key: "add", value: function(e, t) {
        var n = new yh(this._edge, e, t, this._edge.getSegmentOctant(t)), s = this._nodeMap.get(n);
        return s !== null ? (fe.isTrue(s.coord.equals2D(e), "Found equal nodes with different coordinates"), s) : (this._nodeMap.put(n, n), n);
      } }, { key: "checkSplitEdgesCorrectness", value: function(e) {
        var t = this._edge.getCoordinates(), n = e.get(0).getCoordinate(0);
        if (!n.equals2D(t[0])) throw new we("bad split edge start point at " + n);
        var s = e.get(e.size() - 1).getCoordinates(), c = s[s.length - 1];
        if (!c.equals2D(t[t.length - 1])) throw new we("bad split edge end point at " + c);
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Ir(), this._edge = null;
        var e = arguments[0];
        this._edge = e;
      } }]), o;
    }(), mh = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "octant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1];
          if (e === 0 && t === 0) throw new M("Cannot compute the octant for point ( " + e + ", " + t + " )");
          var n = Math.abs(e), s = Math.abs(t);
          return e >= 0 ? t >= 0 ? n >= s ? 0 : 1 : n >= s ? 7 : 6 : t >= 0 ? n >= s ? 3 : 2 : n >= s ? 4 : 5;
        }
        if (arguments[0] instanceof C && arguments[1] instanceof C) {
          var c = arguments[0], h = arguments[1], g = h.x - c.x, d = h.y - c.y;
          if (g === 0 && d === 0) throw new M("Cannot compute the octant for two identical points " + c);
          return o.octant(g, d);
        }
      } }]), o;
    }(), ph = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "getCoordinates", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "getCoordinate", value: function(e) {
      } }, { key: "isClosed", value: function() {
      } }, { key: "setData", value: function(e) {
      } }, { key: "getData", value: function() {
      } }]), o;
    }(), _h = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "addIntersection", value: function(e, t) {
      } }, { key: "interfaces_", get: function() {
        return [ph];
      } }]), o;
    }(), In = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getCoordinates", value: function() {
        return this._pts;
      } }, { key: "size", value: function() {
        return this._pts.length;
      } }, { key: "getCoordinate", value: function(e) {
        return this._pts[e];
      } }, { key: "isClosed", value: function() {
        return this._pts[0].equals(this._pts[this._pts.length - 1]);
      } }, { key: "getSegmentOctant", value: function(e) {
        return e === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(e), this.getCoordinate(e + 1));
      } }, { key: "setData", value: function(e) {
        this._data = e;
      } }, { key: "safeOctant", value: function(e, t) {
        return e.equals2D(t) ? 0 : mh.octant(e, t);
      } }, { key: "getData", value: function() {
        return this._data;
      } }, { key: "addIntersection", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.addIntersectionNode(e, t);
        } else if (arguments.length === 4) {
          var n = arguments[0], s = arguments[1], c = arguments[3], h = new C(n.getIntersection(c));
          this.addIntersection(h, s);
        }
      } }, { key: "toString", value: function() {
        return ds.toLineString(new Sr(this._pts));
      } }, { key: "getNodeList", value: function() {
        return this._nodeList;
      } }, { key: "addIntersectionNode", value: function(e, t) {
        var n = t, s = n + 1;
        if (s < this._pts.length) {
          var c = this._pts[s];
          e.equals2D(c) && (n = s);
        }
        return this._nodeList.add(e, n);
      } }, { key: "addIntersections", value: function(e, t, n) {
        for (var s = 0; s < e.getIntersectionNum(); s++) this.addIntersection(e, t, n, s);
      } }, { key: "interfaces_", get: function() {
        return [_h];
      } }], [{ key: "constructor_", value: function() {
        this._nodeList = new dh(this), this._pts = null, this._data = null;
        var e = arguments[0], t = arguments[1];
        this._pts = e, this._data = t;
      } }, { key: "getNodedSubstrings", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new ne();
          return o.getNodedSubstrings(e, t), t;
        }
        if (arguments.length === 2) for (var n = arguments[0], s = arguments[1], c = n.iterator(); c.hasNext(); ) {
          var h = c.next();
          h.getNodeList().addSplitEdges(s);
        }
      } }]), o;
    }(), ut = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "minX", value: function() {
        return Math.min(this.p0.x, this.p1.x);
      } }, { key: "orientationIndex", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0], t = se.index(this.p0, this.p1, e.p0), n = se.index(this.p0, this.p1, e.p1);
          return t >= 0 && n >= 0 || t <= 0 && n <= 0 ? Math.max(t, n) : 0;
        }
        if (arguments[0] instanceof C) {
          var s = arguments[0];
          return se.index(this.p0, this.p1, s);
        }
      } }, { key: "toGeometry", value: function(e) {
        return e.createLineString([this.p0, this.p1]);
      } }, { key: "isVertical", value: function() {
        return this.p0.x === this.p1.x;
      } }, { key: "equals", value: function(e) {
        if (!(e instanceof o)) return !1;
        var t = e;
        return this.p0.equals(t.p0) && this.p1.equals(t.p1);
      } }, { key: "intersection", value: function(e) {
        var t = new bn();
        return t.computeIntersection(this.p0, this.p1, e.p0, e.p1), t.hasIntersection() ? t.getIntersection(0) : null;
      } }, { key: "project", value: function() {
        if (arguments[0] instanceof C) {
          var e = arguments[0];
          if (e.equals(this.p0) || e.equals(this.p1)) return new C(e);
          var t = this.projectionFactor(e), n = new C();
          return n.x = this.p0.x + t * (this.p1.x - this.p0.x), n.y = this.p0.y + t * (this.p1.y - this.p0.y), n;
        }
        if (arguments[0] instanceof o) {
          var s = arguments[0], c = this.projectionFactor(s.p0), h = this.projectionFactor(s.p1);
          if (c >= 1 && h >= 1 || c <= 0 && h <= 0) return null;
          var g = this.project(s.p0);
          c < 0 && (g = this.p0), c > 1 && (g = this.p1);
          var d = this.project(s.p1);
          return h < 0 && (d = this.p0), h > 1 && (d = this.p1), new o(g, d);
        }
      } }, { key: "normalize", value: function() {
        this.p1.compareTo(this.p0) < 0 && this.reverse();
      } }, { key: "angle", value: function() {
        return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
      } }, { key: "getCoordinate", value: function(e) {
        return e === 0 ? this.p0 : this.p1;
      } }, { key: "distancePerpendicular", value: function(e) {
        return gt.pointToLinePerpendicular(e, this.p0, this.p1);
      } }, { key: "minY", value: function() {
        return Math.min(this.p0.y, this.p1.y);
      } }, { key: "midPoint", value: function() {
        return o.midPoint(this.p0, this.p1);
      } }, { key: "projectionFactor", value: function(e) {
        if (e.equals(this.p0)) return 0;
        if (e.equals(this.p1)) return 1;
        var t = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, s = t * t + n * n;
        return s <= 0 ? K.NaN : ((e.x - this.p0.x) * t + (e.y - this.p0.y) * n) / s;
      } }, { key: "closestPoints", value: function(e) {
        var t = this.intersection(e);
        if (t !== null) return [t, t];
        var n = new Array(2).fill(null), s = K.MAX_VALUE, c = null, h = this.closestPoint(e.p0);
        s = h.distance(e.p0), n[0] = h, n[1] = e.p0;
        var g = this.closestPoint(e.p1);
        (c = g.distance(e.p1)) < s && (s = c, n[0] = g, n[1] = e.p1);
        var d = e.closestPoint(this.p0);
        (c = d.distance(this.p0)) < s && (s = c, n[0] = this.p0, n[1] = d);
        var E = e.closestPoint(this.p1);
        return (c = E.distance(this.p1)) < s && (s = c, n[0] = this.p1, n[1] = E), n;
      } }, { key: "closestPoint", value: function(e) {
        var t = this.projectionFactor(e);
        return t > 0 && t < 1 ? this.project(e) : this.p0.distance(e) < this.p1.distance(e) ? this.p0 : this.p1;
      } }, { key: "maxX", value: function() {
        return Math.max(this.p0.x, this.p1.x);
      } }, { key: "getLength", value: function() {
        return this.p0.distance(this.p1);
      } }, { key: "compareTo", value: function(e) {
        var t = e, n = this.p0.compareTo(t.p0);
        return n !== 0 ? n : this.p1.compareTo(t.p1);
      } }, { key: "reverse", value: function() {
        var e = this.p0;
        this.p0 = this.p1, this.p1 = e;
      } }, { key: "equalsTopo", value: function(e) {
        return this.p0.equals(e.p0) && this.p1.equals(e.p1) || this.p0.equals(e.p1) && this.p1.equals(e.p0);
      } }, { key: "lineIntersection", value: function(e) {
        return Er.intersection(this.p0, this.p1, e.p0, e.p1);
      } }, { key: "maxY", value: function() {
        return Math.max(this.p0.y, this.p1.y);
      } }, { key: "pointAlongOffset", value: function(e, t) {
        var n = this.p0.x + e * (this.p1.x - this.p0.x), s = this.p0.y + e * (this.p1.y - this.p0.y), c = this.p1.x - this.p0.x, h = this.p1.y - this.p0.y, g = Math.sqrt(c * c + h * h), d = 0, E = 0;
        if (t !== 0) {
          if (g <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
          d = t * c / g, E = t * h / g;
        }
        return new C(n - E, s + d);
      } }, { key: "setCoordinates", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.setCoordinates(e.p0, e.p1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.p0.x = t.x, this.p0.y = t.y, this.p1.x = n.x, this.p1.y = n.y;
        }
      } }, { key: "segmentFraction", value: function(e) {
        var t = this.projectionFactor(e);
        return t < 0 ? t = 0 : (t > 1 || K.isNaN(t)) && (t = 1), t;
      } }, { key: "toString", value: function() {
        return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
      } }, { key: "isHorizontal", value: function() {
        return this.p0.y === this.p1.y;
      } }, { key: "reflect", value: function(e) {
        var t = this.p1.getY() - this.p0.getY(), n = this.p0.getX() - this.p1.getX(), s = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), c = t * t + n * n, h = t * t - n * n, g = e.getX(), d = e.getY();
        return new C((-h * g - 2 * t * n * d - 2 * t * s) / c, (h * d - 2 * t * n * g - 2 * n * s) / c);
      } }, { key: "distance", value: function() {
        if (arguments[0] instanceof o) {
          var e = arguments[0];
          return gt.segmentToSegment(this.p0, this.p1, e.p0, e.p1);
        }
        if (arguments[0] instanceof C) {
          var t = arguments[0];
          return gt.pointToSegment(t, this.p0, this.p1);
        }
      } }, { key: "pointAlong", value: function(e) {
        var t = new C();
        return t.x = this.p0.x + e * (this.p1.x - this.p0.x), t.y = this.p0.y + e * (this.p1.y - this.p0.y), t;
      } }, { key: "hashCode", value: function() {
        var e = K.doubleToLongBits(this.p0.x);
        e ^= 31 * K.doubleToLongBits(this.p0.y);
        var t = Math.trunc(e) ^ Math.trunc(e >> 32), n = K.doubleToLongBits(this.p1.x);
        return n ^= 31 * K.doubleToLongBits(this.p1.y), t ^ (Math.trunc(n) ^ Math.trunc(n >> 32));
      } }, { key: "interfaces_", get: function() {
        return [q, A];
      } }], [{ key: "constructor_", value: function() {
        if (this.p0 = null, this.p1 = null, arguments.length === 0) o.constructor_.call(this, new C(), new C());
        else if (arguments.length === 1) {
          var e = arguments[0];
          o.constructor_.call(this, e.p0, e.p1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.p0 = t, this.p1 = n;
        } else if (arguments.length === 4) {
          var s = arguments[0], c = arguments[1], h = arguments[2], g = arguments[3];
          o.constructor_.call(this, new C(s, c), new C(h, g));
        }
      } }, { key: "midPoint", value: function(e, t) {
        return new C((e.x + t.x) / 2, (e.y + t.y) / 2);
      } }]), o;
    }(), Eh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "overlap", value: function() {
        if (arguments.length !== 2) {
          if (arguments.length === 4) {
            var e = arguments[0], t = arguments[1], n = arguments[2], s = arguments[3];
            e.getLineSegment(t, this._overlapSeg1), n.getLineSegment(s, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this._overlapSeg1 = new ut(), this._overlapSeg2 = new ut();
      } }]), o;
    }(), ko = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getLineSegment", value: function(e, t) {
        t.p0 = this._pts[e], t.p1 = this._pts[e + 1];
      } }, { key: "computeSelect", value: function(e, t, n, s) {
        var c = this._pts[t], h = this._pts[n];
        if (n - t == 1) return s.select(this, t), null;
        if (!e.intersects(c, h)) return null;
        var g = Math.trunc((t + n) / 2);
        t < g && this.computeSelect(e, t, g, s), g < n && this.computeSelect(e, g, n, s);
      } }, { key: "getCoordinates", value: function() {
        for (var e = new Array(this._end - this._start + 1).fill(null), t = 0, n = this._start; n <= this._end; n++) e[t++] = this._pts[n];
        return e;
      } }, { key: "computeOverlaps", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.computeOverlaps(this._start, this._end, e, e._start, e._end, t);
        } else if (arguments.length === 6) {
          var n = arguments[0], s = arguments[1], c = arguments[2], h = arguments[3], g = arguments[4], d = arguments[5];
          if (s - n == 1 && g - h == 1) return d.overlap(this, n, c, h), null;
          if (!this.overlaps(n, s, c, h, g)) return null;
          var E = Math.trunc((n + s) / 2), w = Math.trunc((h + g) / 2);
          n < E && (h < w && this.computeOverlaps(n, E, c, h, w, d), w < g && this.computeOverlaps(n, E, c, w, g, d)), E < s && (h < w && this.computeOverlaps(E, s, c, h, w, d), w < g && this.computeOverlaps(E, s, c, w, g, d));
        }
      } }, { key: "setId", value: function(e) {
        this._id = e;
      } }, { key: "select", value: function(e, t) {
        this.computeSelect(e, this._start, this._end, t);
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          var e = this._pts[this._start], t = this._pts[this._end];
          this._env = new xe(e, t);
        }
        return this._env;
      } }, { key: "overlaps", value: function(e, t, n, s, c) {
        return xe.intersects(this._pts[e], this._pts[t], n._pts[s], n._pts[c]);
      } }, { key: "getEndIndex", value: function() {
        return this._end;
      } }, { key: "getStartIndex", value: function() {
        return this._start;
      } }, { key: "getContext", value: function() {
        return this._context;
      } }, { key: "getId", value: function() {
        return this._id;
      } }], [{ key: "constructor_", value: function() {
        this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
        var e = arguments[0], t = arguments[1], n = arguments[2], s = arguments[3];
        this._pts = e, this._start = t, this._end = n, this._context = s;
      } }]), o;
    }(), kh = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "findChainEnd", value: function(e, t) {
        for (var n = t; n < e.length - 1 && e[n].equals2D(e[n + 1]); ) n++;
        if (n >= e.length - 1) return e.length - 1;
        for (var s = Je.quadrant(e[n], e[n + 1]), c = t + 1; c < e.length && !(!e[c - 1].equals2D(e[c]) && Je.quadrant(e[c - 1], e[c]) !== s); )
          c++;
        return c - 1;
      } }, { key: "getChains", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return o.getChains(e, null);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], s = new ne(), c = 0;
          do {
            var h = o.findChainEnd(t, c), g = new ko(t, c, h, n);
            s.add(g), c = h;
          } while (c < t.length - 1);
          return s;
        }
      } }]), o;
    }(), Es = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "computeNodes", value: function(e) {
      } }, { key: "getNodedSubstrings", value: function() {
      } }]), o;
    }(), xo = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "setSegmentIntersector", value: function(e) {
        this._segInt = e;
      } }, { key: "interfaces_", get: function() {
        return [Es];
      } }], [{ key: "constructor_", value: function() {
        if (this._segInt = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setSegmentIntersector(e);
          }
        }
      } }]), o;
    }(), ks = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "getMonotoneChains", value: function() {
        return this._monoChains;
      } }, { key: "getNodedSubstrings", value: function() {
        return In.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "getIndex", value: function() {
        return this._index;
      } }, { key: "add", value: function(n) {
        for (var s = kh.getChains(n.getCoordinates(), n).iterator(); s.hasNext(); ) {
          var c = s.next();
          c.setId(this._idCounter++), this._index.insert(c.getEnvelope(), c), this._monoChains.add(c);
        }
      } }, { key: "computeNodes", value: function(n) {
        this._nodedSegStrings = n;
        for (var s = n.iterator(); s.hasNext(); ) this.add(s.next());
        this.intersectChains();
      } }, { key: "intersectChains", value: function() {
        for (var n = new So(this._segInt), s = this._monoChains.iterator(); s.hasNext(); ) for (var c = s.next(), h = this._index.query(c.getEnvelope()).iterator(); h.hasNext(); ) {
          var g = h.next();
          if (g.getId() > c.getId() && (c.computeOverlaps(g, n), this._nOverlaps++), this._segInt.isDone()) return null;
        }
      } }], [{ key: "constructor_", value: function() {
        if (this._monoChains = new ne(), this._index = new Pt(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            xo.constructor_.call(this, n);
          }
        }
      } }]), t;
    }(xo), So = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "overlap", value: function() {
        if (arguments.length !== 4) return b(v(t.prototype), "overlap", this).apply(this, arguments);
        var n = arguments[0], s = arguments[1], c = arguments[2], h = arguments[3], g = n.getContext(), d = c.getContext();
        this._si.processIntersections(g, s, d, h);
      } }], [{ key: "constructor_", value: function() {
        this._si = null;
        var n = arguments[0];
        this._si = n;
      } }]), t;
    }(Eh);
    ks.SegmentOverlapAction = So;
    var It = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "isDeletable", value: function(e, t, n, s) {
        var c = this._inputLine[e], h = this._inputLine[t], g = this._inputLine[n];
        return !!this.isConcave(c, h, g) && !!this.isShallow(c, h, g, s) && this.isShallowSampled(c, h, e, n, s);
      } }, { key: "deleteShallowConcavities", value: function() {
        for (var e = 1, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t), s = !1; n < this._inputLine.length; ) {
          var c = !1;
          this.isDeletable(e, t, n, this._distanceTol) && (this._isDeleted[t] = o.DELETE, c = !0, s = !0), e = c ? n : t, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t);
        }
        return s;
      } }, { key: "isShallowConcavity", value: function(e, t, n, s) {
        return se.index(e, t, n) === this._angleOrientation && gt.pointToSegment(t, e, n) < s;
      } }, { key: "isShallowSampled", value: function(e, t, n, s, c) {
        var h = Math.trunc((s - n) / o.NUM_PTS_TO_CHECK);
        h <= 0 && (h = 1);
        for (var g = n; g < s; g += h) if (!this.isShallow(e, t, this._inputLine[g], c)) return !1;
        return !0;
      } }, { key: "isConcave", value: function(e, t, n) {
        var s = se.index(e, t, n) === this._angleOrientation;
        return s;
      } }, { key: "simplify", value: function(e) {
        this._distanceTol = Math.abs(e), e < 0 && (this._angleOrientation = se.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
        var t = !1;
        do
          t = this.deleteShallowConcavities();
        while (t);
        return this.collapseLine();
      } }, { key: "findNextNonDeletedIndex", value: function(e) {
        for (var t = e + 1; t < this._inputLine.length && this._isDeleted[t] === o.DELETE; ) t++;
        return t;
      } }, { key: "isShallow", value: function(e, t, n, s) {
        return gt.pointToSegment(t, e, n) < s;
      } }, { key: "collapseLine", value: function() {
        for (var e = new xr(), t = 0; t < this._inputLine.length; t++) this._isDeleted[t] !== o.DELETE && e.add(this._inputLine[t]);
        return e.toCoordinateArray();
      } }], [{ key: "constructor_", value: function() {
        this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = se.COUNTERCLOCKWISE;
        var e = arguments[0];
        this._inputLine = e;
      } }, { key: "simplify", value: function(e, t) {
        return new o(e).simplify(t);
      } }]), o;
    }();
    It.INIT = 0, It.DELETE = 1, It.KEEP = 1, It.NUM_PTS_TO_CHECK = 10;
    var bo = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getCoordinates", value: function() {
        return this._ptList.toArray(o.COORDINATE_ARRAY_TYPE);
      } }, { key: "setPrecisionModel", value: function(e) {
        this._precisionModel = e;
      } }, { key: "addPt", value: function(e) {
        var t = new C(e);
        if (this._precisionModel.makePrecise(t), this.isRedundant(t)) return null;
        this._ptList.add(t);
      } }, { key: "reverse", value: function() {
      } }, { key: "addPts", value: function(e, t) {
        if (t) for (var n = 0; n < e.length; n++) this.addPt(e[n]);
        else for (var s = e.length - 1; s >= 0; s--) this.addPt(e[s]);
      } }, { key: "isRedundant", value: function(e) {
        if (this._ptList.size() < 1) return !1;
        var t = this._ptList.get(this._ptList.size() - 1);
        return e.distance(t) < this._minimimVertexDistance;
      } }, { key: "toString", value: function() {
        return new Yn().createLineString(this.getCoordinates()).toString();
      } }, { key: "closeRing", value: function() {
        if (this._ptList.size() < 1) return null;
        var e = new C(this._ptList.get(0)), t = this._ptList.get(this._ptList.size() - 1);
        if (e.equals(t)) return null;
        this._ptList.add(e);
      } }, { key: "setMinimumVertexDistance", value: function(e) {
        this._minimimVertexDistance = e;
      } }], [{ key: "constructor_", value: function() {
        this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new ne();
      } }]), o;
    }();
    bo.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
    var lt = function() {
      function o() {
        i(this, o);
      }
      return l(o, null, [{ key: "toDegrees", value: function(e) {
        return 180 * e / Math.PI;
      } }, { key: "normalize", value: function(e) {
        for (; e > Math.PI; ) e -= o.PI_TIMES_2;
        for (; e <= -Math.PI; ) e += o.PI_TIMES_2;
        return e;
      } }, { key: "angle", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return Math.atan2(e.y, e.x);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], s = n.x - t.x, c = n.y - t.y;
          return Math.atan2(c, s);
        }
      } }, { key: "isAcute", value: function(e, t, n) {
        var s = e.x - t.x, c = e.y - t.y;
        return s * (n.x - t.x) + c * (n.y - t.y) > 0;
      } }, { key: "isObtuse", value: function(e, t, n) {
        var s = e.x - t.x, c = e.y - t.y;
        return s * (n.x - t.x) + c * (n.y - t.y) < 0;
      } }, { key: "interiorAngle", value: function(e, t, n) {
        var s = o.angle(t, e), c = o.angle(t, n);
        return Math.abs(c - s);
      } }, { key: "normalizePositive", value: function(e) {
        if (e < 0) {
          for (; e < 0; ) e += o.PI_TIMES_2;
          e >= o.PI_TIMES_2 && (e = 0);
        } else {
          for (; e >= o.PI_TIMES_2; ) e -= o.PI_TIMES_2;
          e < 0 && (e = 0);
        }
        return e;
      } }, { key: "angleBetween", value: function(e, t, n) {
        var s = o.angle(t, e), c = o.angle(t, n);
        return o.diff(s, c);
      } }, { key: "diff", value: function(e, t) {
        var n = null;
        return (n = e < t ? t - e : e - t) > Math.PI && (n = 2 * Math.PI - n), n;
      } }, { key: "toRadians", value: function(e) {
        return e * Math.PI / 180;
      } }, { key: "getTurn", value: function(e, t) {
        var n = Math.sin(t - e);
        return n > 0 ? o.COUNTERCLOCKWISE : n < 0 ? o.CLOCKWISE : o.NONE;
      } }, { key: "angleBetweenOriented", value: function(e, t, n) {
        var s = o.angle(t, e), c = o.angle(t, n) - s;
        return c <= -Math.PI ? c + o.PI_TIMES_2 : c > Math.PI ? c - o.PI_TIMES_2 : c;
      } }]), o;
    }();
    lt.PI_TIMES_2 = 2 * Math.PI, lt.PI_OVER_2 = Math.PI / 2, lt.PI_OVER_4 = Math.PI / 4, lt.COUNTERCLOCKWISE = se.COUNTERCLOCKWISE, lt.CLOCKWISE = se.CLOCKWISE, lt.NONE = se.COLLINEAR;
    var wr = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "addNextSegment", value: function(e, t) {
        if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = e, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
        var n = se.index(this._s0, this._s1, this._s2), s = n === se.CLOCKWISE && this._side === W.LEFT || n === se.COUNTERCLOCKWISE && this._side === W.RIGHT;
        n === 0 ? this.addCollinear(t) : s ? this.addOutsideTurn(n, t) : this.addInsideTurn(n, t);
      } }, { key: "addLineEndCap", value: function(e, t) {
        var n = new ut(e, t), s = new ut();
        this.computeOffsetSegment(n, W.LEFT, this._distance, s);
        var c = new ut();
        this.computeOffsetSegment(n, W.RIGHT, this._distance, c);
        var h = t.x - e.x, g = t.y - e.y, d = Math.atan2(g, h);
        switch (this._bufParams.getEndCapStyle()) {
          case R.CAP_ROUND:
            this._segList.addPt(s.p1), this.addDirectedFillet(t, d + Math.PI / 2, d - Math.PI / 2, se.CLOCKWISE, this._distance), this._segList.addPt(c.p1);
            break;
          case R.CAP_FLAT:
            this._segList.addPt(s.p1), this._segList.addPt(c.p1);
            break;
          case R.CAP_SQUARE:
            var E = new C();
            E.x = Math.abs(this._distance) * Math.cos(d), E.y = Math.abs(this._distance) * Math.sin(d);
            var w = new C(s.p1.x + E.x, s.p1.y + E.y), N = new C(c.p1.x + E.x, c.p1.y + E.y);
            this._segList.addPt(w), this._segList.addPt(N);
        }
      } }, { key: "getCoordinates", value: function() {
        return this._segList.getCoordinates();
      } }, { key: "addMitreJoin", value: function(e, t, n, s) {
        var c = Er.intersection(t.p0, t.p1, n.p0, n.p1);
        if (c !== null && (s <= 0 ? 1 : c.distance(e) / Math.abs(s)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(c), null;
        this.addLimitedMitreJoin(t, n, s, this._bufParams.getMitreLimit());
      } }, { key: "addOutsideTurn", value: function(e, t) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * o.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === R.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === R.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (t && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, e, this._distance), this._segList.addPt(this._offset1.p0));
      } }, { key: "createSquare", value: function(e) {
        this._segList.addPt(new C(e.x + this._distance, e.y + this._distance)), this._segList.addPt(new C(e.x + this._distance, e.y - this._distance)), this._segList.addPt(new C(e.x - this._distance, e.y - this._distance)), this._segList.addPt(new C(e.x - this._distance, e.y + this._distance)), this._segList.closeRing();
      } }, { key: "addSegments", value: function(e, t) {
        this._segList.addPts(e, t);
      } }, { key: "addFirstSegment", value: function() {
        this._segList.addPt(this._offset1.p0);
      } }, { key: "addCornerFillet", value: function(e, t, n, s, c) {
        var h = t.x - e.x, g = t.y - e.y, d = Math.atan2(g, h), E = n.x - e.x, w = n.y - e.y, N = Math.atan2(w, E);
        s === se.CLOCKWISE ? d <= N && (d += 2 * Math.PI) : d >= N && (d -= 2 * Math.PI), this._segList.addPt(t), this.addDirectedFillet(e, d, N, s, c), this._segList.addPt(n);
      } }, { key: "addLastSegment", value: function() {
        this._segList.addPt(this._offset1.p1);
      } }, { key: "initSideSegments", value: function(e, t, n) {
        this._s1 = e, this._s2 = t, this._side = n, this._seg1.setCoordinates(e, t), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
      } }, { key: "addLimitedMitreJoin", value: function(e, t, n, s) {
        var c = this._seg0.p1, h = lt.angle(c, this._seg0.p0), g = lt.angleBetweenOriented(this._seg0.p0, c, this._seg1.p1) / 2, d = lt.normalize(h + g), E = lt.normalize(d + Math.PI), w = s * n, N = n - w * Math.abs(Math.sin(g)), F = c.x + w * Math.cos(E), j = c.y + w * Math.sin(E), X = new C(F, j), $ = new ut(c, X), re = $.pointAlongOffset(1, N), ce = $.pointAlongOffset(1, -N);
        this._side === W.LEFT ? (this._segList.addPt(re), this._segList.addPt(ce)) : (this._segList.addPt(ce), this._segList.addPt(re));
      } }, { key: "addDirectedFillet", value: function(e, t, n, s, c) {
        var h = s === se.CLOCKWISE ? -1 : 1, g = Math.abs(t - n), d = Math.trunc(g / this._filletAngleQuantum + 0.5);
        if (d < 1) return null;
        for (var E = g / d, w = new C(), N = 0; N < d; N++) {
          var F = t + h * N * E;
          w.x = e.x + c * Math.cos(F), w.y = e.y + c * Math.sin(F), this._segList.addPt(w);
        }
      } }, { key: "computeOffsetSegment", value: function(e, t, n, s) {
        var c = t === W.LEFT ? 1 : -1, h = e.p1.x - e.p0.x, g = e.p1.y - e.p0.y, d = Math.sqrt(h * h + g * g), E = c * n * h / d, w = c * n * g / d;
        s.p0.x = e.p0.x - w, s.p0.y = e.p0.y + E, s.p1.x = e.p1.x - w, s.p1.y = e.p1.y + E;
      } }, { key: "addInsideTurn", value: function(e, t) {
        if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
        else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * o.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
        else {
          if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
            var n = new C((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(n);
            var s = new C((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(s);
          } else this._segList.addPt(this._s1);
          this._segList.addPt(this._offset1.p0);
        }
      } }, { key: "createCircle", value: function(e) {
        var t = new C(e.x + this._distance, e.y);
        this._segList.addPt(t), this.addDirectedFillet(e, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
      } }, { key: "addBevelJoin", value: function(e, t) {
        this._segList.addPt(e.p1), this._segList.addPt(t.p0);
      } }, { key: "init", value: function(e) {
        this._distance = e, this._maxCurveSegmentError = e * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new bo(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(e * o.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
      } }, { key: "addCollinear", value: function(e) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === R.JOIN_BEVEL || this._bufParams.getJoinStyle() === R.JOIN_MITRE ? (e && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, se.CLOCKWISE, this._distance));
      } }, { key: "closeRing", value: function() {
        this._segList.closeRing();
      } }, { key: "hasNarrowConcaveAngle", value: function() {
        return this._hasNarrowConcaveAngle;
      } }], [{ key: "constructor_", value: function() {
        this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new ut(), this._seg1 = new ut(), this._offset0 = new ut(), this._offset1 = new ut(), this._side = 0, this._hasNarrowConcaveAngle = !1;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._precisionModel = e, this._bufParams = t, this._li = new bn(), this._filletAngleQuantum = Math.PI / 2 / t.getQuadrantSegments(), t.getQuadrantSegments() >= 8 && t.getJoinStyle() === R.JOIN_ROUND && (this._closingSegLengthFactor = o.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
      } }]), o;
    }();
    wr.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, wr.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, wr.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, wr.MAX_CLOSING_SEG_LEN_FACTOR = 80;
    var xh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getOffsetCurve", value: function(e, t) {
        if (this._distance = t, t === 0) return null;
        var n = t < 0, s = Math.abs(t), c = this.getSegGen(s);
        e.length <= 1 ? this.computePointCurve(e[0], c) : this.computeOffsetCurve(e, n, c);
        var h = c.getCoordinates();
        return n && qe.reverse(h), h;
      } }, { key: "computeSingleSidedBufferCurve", value: function(e, t, n) {
        var s = this.simplifyTolerance(this._distance);
        if (t) {
          n.addSegments(e, !0);
          var c = It.simplify(e, -s), h = c.length - 1;
          n.initSideSegments(c[h], c[h - 1], W.LEFT), n.addFirstSegment();
          for (var g = h - 2; g >= 0; g--) n.addNextSegment(c[g], !0);
        } else {
          n.addSegments(e, !1);
          var d = It.simplify(e, s), E = d.length - 1;
          n.initSideSegments(d[0], d[1], W.LEFT), n.addFirstSegment();
          for (var w = 2; w <= E; w++) n.addNextSegment(d[w], !0);
        }
        n.addLastSegment(), n.closeRing();
      } }, { key: "computeRingBufferCurve", value: function(e, t, n) {
        var s = this.simplifyTolerance(this._distance);
        t === W.RIGHT && (s = -s);
        var c = It.simplify(e, s), h = c.length - 1;
        n.initSideSegments(c[h - 1], c[0], t);
        for (var g = 1; g <= h; g++) {
          var d = g !== 1;
          n.addNextSegment(c[g], d);
        }
        n.closeRing();
      } }, { key: "computeLineBufferCurve", value: function(e, t) {
        var n = this.simplifyTolerance(this._distance), s = It.simplify(e, n), c = s.length - 1;
        t.initSideSegments(s[0], s[1], W.LEFT);
        for (var h = 2; h <= c; h++) t.addNextSegment(s[h], !0);
        t.addLastSegment(), t.addLineEndCap(s[c - 1], s[c]);
        var g = It.simplify(e, -n), d = g.length - 1;
        t.initSideSegments(g[d], g[d - 1], W.LEFT);
        for (var E = d - 2; E >= 0; E--) t.addNextSegment(g[E], !0);
        t.addLastSegment(), t.addLineEndCap(g[1], g[0]), t.closeRing();
      } }, { key: "computePointCurve", value: function(e, t) {
        switch (this._bufParams.getEndCapStyle()) {
          case R.CAP_ROUND:
            t.createCircle(e);
            break;
          case R.CAP_SQUARE:
            t.createSquare(e);
        }
      } }, { key: "getLineCurve", value: function(e, t) {
        if (this._distance = t, this.isLineOffsetEmpty(t)) return null;
        var n = Math.abs(t), s = this.getSegGen(n);
        if (e.length <= 1) this.computePointCurve(e[0], s);
        else if (this._bufParams.isSingleSided()) {
          var c = t < 0;
          this.computeSingleSidedBufferCurve(e, c, s);
        } else this.computeLineBufferCurve(e, s);
        return s.getCoordinates();
      } }, { key: "getBufferParameters", value: function() {
        return this._bufParams;
      } }, { key: "simplifyTolerance", value: function(e) {
        return e * this._bufParams.getSimplifyFactor();
      } }, { key: "getRingCurve", value: function(e, t, n) {
        if (this._distance = n, e.length <= 2) return this.getLineCurve(e, n);
        if (n === 0) return o.copyCoordinates(e);
        var s = this.getSegGen(n);
        return this.computeRingBufferCurve(e, t, s), s.getCoordinates();
      } }, { key: "computeOffsetCurve", value: function(e, t, n) {
        var s = this.simplifyTolerance(this._distance);
        if (t) {
          var c = It.simplify(e, -s), h = c.length - 1;
          n.initSideSegments(c[h], c[h - 1], W.LEFT), n.addFirstSegment();
          for (var g = h - 2; g >= 0; g--) n.addNextSegment(c[g], !0);
        } else {
          var d = It.simplify(e, s), E = d.length - 1;
          n.initSideSegments(d[0], d[1], W.LEFT), n.addFirstSegment();
          for (var w = 2; w <= E; w++) n.addNextSegment(d[w], !0);
        }
        n.addLastSegment();
      } }, { key: "isLineOffsetEmpty", value: function(e) {
        return e === 0 || e < 0 && !this._bufParams.isSingleSided();
      } }, { key: "getSegGen", value: function(e) {
        return new wr(this._precisionModel, this._bufParams, e);
      } }], [{ key: "constructor_", value: function() {
        this._distance = 0, this._precisionModel = null, this._bufParams = null;
        var e = arguments[0], t = arguments[1];
        this._precisionModel = e, this._bufParams = t;
      } }, { key: "copyCoordinates", value: function(e) {
        for (var t = new Array(e.length).fill(null), n = 0; n < t.length; n++) t[n] = new C(e[n]);
        return t;
      } }]), o;
    }(), Io = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "findStabbedSegments", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new ne(), n = this._subgraphs.iterator(); n.hasNext(); ) {
            var s = n.next(), c = s.getEnvelope();
            e.y < c.getMinY() || e.y > c.getMaxY() || this.findStabbedSegments(e, s.getDirectedEdges(), t);
          }
          return t;
        }
        if (arguments.length === 3) {
          if (ue(arguments[2], nt) && arguments[0] instanceof C && arguments[1] instanceof _s) for (var h = arguments[0], g = arguments[1], d = arguments[2], E = g.getEdge().getCoordinates(), w = 0; w < E.length - 1; w++) {
            this._seg.p0 = E[w], this._seg.p1 = E[w + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse();
            var N = Math.max(this._seg.p0.x, this._seg.p1.x);
            if (!(N < h.x) && !(this._seg.isHorizontal() || h.y < this._seg.p0.y || h.y > this._seg.p1.y || se.index(this._seg.p0, this._seg.p1, h) === se.RIGHT)) {
              var F = g.getDepth(W.LEFT);
              this._seg.p0.equals(E[w]) || (F = g.getDepth(W.RIGHT));
              var j = new wo(this._seg, F);
              d.add(j);
            }
          }
          else if (ue(arguments[2], nt) && arguments[0] instanceof C && ue(arguments[1], nt)) for (var X = arguments[0], $ = arguments[1], re = arguments[2], ce = $.iterator(); ce.hasNext(); ) {
            var _e = ce.next();
            _e.isForward() && this.findStabbedSegments(X, _e, re);
          }
        }
      } }, { key: "getDepth", value: function(e) {
        var t = this.findStabbedSegments(e);
        return t.size() === 0 ? 0 : Xn.min(t)._leftDepth;
      } }], [{ key: "constructor_", value: function() {
        this._subgraphs = null, this._seg = new ut();
        var e = arguments[0];
        this._subgraphs = e;
      } }]), o;
    }(), wo = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "compareTo", value: function(e) {
        var t = e;
        if (this._upwardSeg.minX() >= t._upwardSeg.maxX()) return 1;
        if (this._upwardSeg.maxX() <= t._upwardSeg.minX()) return -1;
        var n = this._upwardSeg.orientationIndex(t._upwardSeg);
        return n !== 0 || (n = -1 * t._upwardSeg.orientationIndex(this._upwardSeg)) !== 0 ? n : this._upwardSeg.compareTo(t._upwardSeg);
      } }, { key: "compareX", value: function(e, t) {
        var n = e.p0.compareTo(t.p0);
        return n !== 0 ? n : e.p1.compareTo(t.p1);
      } }, { key: "toString", value: function() {
        return this._upwardSeg.toString();
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        this._upwardSeg = null, this._leftDepth = null;
        var e = arguments[0], t = arguments[1];
        this._upwardSeg = new ut(e), this._leftDepth = t;
      } }]), o;
    }();
    Io.DepthSegment = wo;
    var No = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, null, [{ key: "constructor_", value: function() {
        B.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
      } }]), t;
    }(B), xs = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getY", value: function() {
        var e = this.y / this.w;
        if (K.isNaN(e) || K.isInfinite(e)) throw new No();
        return e;
      } }, { key: "getX", value: function() {
        var e = this.x / this.w;
        if (K.isNaN(e) || K.isInfinite(e)) throw new No();
        return e;
      } }, { key: "getCoordinate", value: function() {
        var e = new C();
        return e.x = this.getX(), e.y = this.getY(), e;
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.w = null, arguments.length === 0) this.x = 0, this.y = 0, this.w = 1;
        else if (arguments.length === 1) {
          var e = arguments[0];
          this.x = e.x, this.y = e.y, this.w = 1;
        } else if (arguments.length === 2) {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var t = arguments[0], n = arguments[1];
            this.x = t, this.y = n, this.w = 1;
          } else if (arguments[0] instanceof o && arguments[1] instanceof o) {
            var s = arguments[0], c = arguments[1];
            this.x = s.y * c.w - c.y * s.w, this.y = c.x * s.w - s.x * c.w, this.w = s.x * c.y - c.x * s.y;
          } else if (arguments[0] instanceof C && arguments[1] instanceof C) {
            var h = arguments[0], g = arguments[1];
            this.x = h.y - g.y, this.y = g.x - h.x, this.w = h.x * g.y - g.x * h.y;
          }
        } else if (arguments.length === 3) {
          var d = arguments[0], E = arguments[1], w = arguments[2];
          this.x = d, this.y = E, this.w = w;
        } else if (arguments.length === 4) {
          var N = arguments[0], F = arguments[1], j = arguments[2], X = arguments[3], $ = N.y - F.y, re = F.x - N.x, ce = N.x * F.y - F.x * N.y, _e = j.y - X.y, Re = X.x - j.x, je = j.x * X.y - X.x * j.y;
          this.x = re * je - Re * ce, this.y = _e * ce - $ * je, this.w = $ * Re - _e * re;
        }
      } }]), o;
    }(), Sh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "area", value: function() {
        return o.area(this.p0, this.p1, this.p2);
      } }, { key: "signedArea", value: function() {
        return o.signedArea(this.p0, this.p1, this.p2);
      } }, { key: "interpolateZ", value: function(e) {
        if (e === null) throw new M("Supplied point is null.");
        return o.interpolateZ(e, this.p0, this.p1, this.p2);
      } }, { key: "longestSideLength", value: function() {
        return o.longestSideLength(this.p0, this.p1, this.p2);
      } }, { key: "isAcute", value: function() {
        return o.isAcute(this.p0, this.p1, this.p2);
      } }, { key: "circumcentre", value: function() {
        return o.circumcentre(this.p0, this.p1, this.p2);
      } }, { key: "area3D", value: function() {
        return o.area3D(this.p0, this.p1, this.p2);
      } }, { key: "centroid", value: function() {
        return o.centroid(this.p0, this.p1, this.p2);
      } }, { key: "inCentre", value: function() {
        return o.inCentre(this.p0, this.p1, this.p2);
      } }], [{ key: "constructor_", value: function() {
        this.p0 = null, this.p1 = null, this.p2 = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this.p0 = e, this.p1 = t, this.p2 = n;
      } }, { key: "area", value: function(e, t, n) {
        return Math.abs(((n.x - e.x) * (t.y - e.y) - (t.x - e.x) * (n.y - e.y)) / 2);
      } }, { key: "signedArea", value: function(e, t, n) {
        return ((n.x - e.x) * (t.y - e.y) - (t.x - e.x) * (n.y - e.y)) / 2;
      } }, { key: "det", value: function(e, t, n, s) {
        return e * s - t * n;
      } }, { key: "interpolateZ", value: function(e, t, n, s) {
        var c = t.x, h = t.y, g = n.x - c, d = s.x - c, E = n.y - h, w = s.y - h, N = g * w - d * E, F = e.x - c, j = e.y - h, X = (w * F - d * j) / N, $ = (-E * F + g * j) / N;
        return t.getZ() + X * (n.getZ() - t.getZ()) + $ * (s.getZ() - t.getZ());
      } }, { key: "longestSideLength", value: function(e, t, n) {
        var s = e.distance(t), c = t.distance(n), h = n.distance(e), g = s;
        return c > g && (g = c), h > g && (g = h), g;
      } }, { key: "circumcentreDD", value: function(e, t, n) {
        var s = te.valueOf(e.x).subtract(n.x), c = te.valueOf(e.y).subtract(n.y), h = te.valueOf(t.x).subtract(n.x), g = te.valueOf(t.y).subtract(n.y), d = te.determinant(s, c, h, g).multiply(2), E = s.sqr().add(c.sqr()), w = h.sqr().add(g.sqr()), N = te.determinant(c, E, g, w), F = te.determinant(s, E, h, w), j = te.valueOf(n.x).subtract(N.divide(d)).doubleValue(), X = te.valueOf(n.y).add(F.divide(d)).doubleValue();
        return new C(j, X);
      } }, { key: "isAcute", value: function(e, t, n) {
        return !!lt.isAcute(e, t, n) && !!lt.isAcute(t, n, e) && !!lt.isAcute(n, e, t);
      } }, { key: "circumcentre", value: function(e, t, n) {
        var s = n.x, c = n.y, h = e.x - s, g = e.y - c, d = t.x - s, E = t.y - c, w = 2 * o.det(h, g, d, E), N = o.det(g, h * h + g * g, E, d * d + E * E), F = o.det(h, h * h + g * g, d, d * d + E * E);
        return new C(s - N / w, c + F / w);
      } }, { key: "perpendicularBisector", value: function(e, t) {
        var n = t.x - e.x, s = t.y - e.y, c = new xs(e.x + n / 2, e.y + s / 2, 1), h = new xs(e.x - s + n / 2, e.y + n + s / 2, 1);
        return new xs(c, h);
      } }, { key: "angleBisector", value: function(e, t, n) {
        var s = t.distance(e), c = s / (s + t.distance(n)), h = n.x - e.x, g = n.y - e.y;
        return new C(e.x + c * h, e.y + c * g);
      } }, { key: "area3D", value: function(e, t, n) {
        var s = t.x - e.x, c = t.y - e.y, h = t.getZ() - e.getZ(), g = n.x - e.x, d = n.y - e.y, E = n.getZ() - e.getZ(), w = c * E - h * d, N = h * g - s * E, F = s * d - c * g, j = w * w + N * N + F * F, X = Math.sqrt(j) / 2;
        return X;
      } }, { key: "centroid", value: function(e, t, n) {
        var s = (e.x + t.x + n.x) / 3, c = (e.y + t.y + n.y) / 3;
        return new C(s, c);
      } }, { key: "inCentre", value: function(e, t, n) {
        var s = t.distance(n), c = e.distance(n), h = e.distance(t), g = s + c + h, d = (s * e.x + c * t.x + h * n.x) / g, E = (s * e.y + c * t.y + h * n.y) / g;
        return new C(d, E);
      } }]), o;
    }(), bh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "addRingSide", value: function(e, t, n, s, c) {
        if (t === 0 && e.length < kr.MINIMUM_VALID_SIZE) return null;
        var h = s, g = c;
        e.length >= kr.MINIMUM_VALID_SIZE && se.isCCW(e) && (h = c, g = s, n = W.opposite(n));
        var d = this._curveBuilder.getRingCurve(e, n, t);
        this.addCurve(d, h, g);
      } }, { key: "addRingBothSides", value: function(e, t) {
        this.addRingSide(e, t, W.LEFT, I.EXTERIOR, I.INTERIOR), this.addRingSide(e, t, W.RIGHT, I.INTERIOR, I.EXTERIOR);
      } }, { key: "addPoint", value: function(e) {
        if (this._distance <= 0) return null;
        var t = e.getCoordinates(), n = this._curveBuilder.getLineCurve(t, this._distance);
        this.addCurve(n, I.EXTERIOR, I.INTERIOR);
      } }, { key: "addPolygon", value: function(e) {
        var t = this._distance, n = W.LEFT;
        this._distance < 0 && (t = -this._distance, n = W.RIGHT);
        var s = e.getExteriorRing(), c = qe.removeRepeatedPoints(s.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(s, this._distance) || this._distance <= 0 && c.length < 3) return null;
        this.addRingSide(c, t, n, I.EXTERIOR, I.INTERIOR);
        for (var h = 0; h < e.getNumInteriorRing(); h++) {
          var g = e.getInteriorRingN(h), d = qe.removeRepeatedPoints(g.getCoordinates());
          this._distance > 0 && this.isErodedCompletely(g, -this._distance) || this.addRingSide(d, t, W.opposite(n), I.INTERIOR, I.EXTERIOR);
        }
      } }, { key: "isTriangleErodedCompletely", value: function(e, t) {
        var n = new Sh(e[0], e[1], e[2]), s = n.inCentre();
        return gt.pointToSegment(s, n.p0, n.p1) < Math.abs(t);
      } }, { key: "addLineString", value: function(e) {
        if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
        var t = qe.removeRepeatedPoints(e.getCoordinates());
        if (qe.isRing(t) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(t, this._distance);
        else {
          var n = this._curveBuilder.getLineCurve(t, this._distance);
          this.addCurve(n, I.EXTERIOR, I.INTERIOR);
        }
      } }, { key: "addCurve", value: function(e, t, n) {
        if (e === null || e.length < 2) return null;
        var s = new In(e, new dt(0, I.BOUNDARY, t, n));
        this._curveList.add(s);
      } }, { key: "getCurves", value: function() {
        return this.add(this._inputGeom), this._curveList;
      } }, { key: "add", value: function(e) {
        if (e.isEmpty()) return null;
        if (e instanceof tn) this.addPolygon(e);
        else if (e instanceof Ge) this.addLineString(e);
        else if (e instanceof he) this.addPoint(e);
        else if (e instanceof cs) this.addCollection(e);
        else if (e instanceof ys) this.addCollection(e);
        else if (e instanceof gs) this.addCollection(e);
        else {
          if (!(e instanceof ot)) throw new oe(e.getGeometryType());
          this.addCollection(e);
        }
      } }, { key: "isErodedCompletely", value: function(e, t) {
        var n = e.getCoordinates();
        if (n.length < 4) return t < 0;
        if (n.length === 4) return this.isTriangleErodedCompletely(n, t);
        var s = e.getEnvelopeInternal(), c = Math.min(s.getHeight(), s.getWidth());
        return t < 0 && 2 * Math.abs(t) > c;
      } }, { key: "addCollection", value: function(e) {
        for (var t = 0; t < e.getNumGeometries(); t++) {
          var n = e.getGeometryN(t);
          this.add(n);
        }
      } }], [{ key: "constructor_", value: function() {
        this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new ne();
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._inputGeom = e, this._distance = t, this._curveBuilder = n;
      } }]), o;
    }(), Ih = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "locate", value: function(e) {
      } }]), o;
    }(), wh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "next", value: function() {
        if (this._atStart) return this._atStart = !1, o.isAtomic(this._parent) && this._index++, this._parent;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null;
        }
        if (this._index >= this._max) throw new Ne();
        var e = this._parent.getGeometryN(this._index++);
        return e instanceof ot ? (this._subcollectionIterator = new o(e), this._subcollectionIterator.next()) : e;
      } }, { key: "remove", value: function() {
        throw new oe(this.getClass().getName());
      } }, { key: "hasNext", value: function() {
        if (this._atStart) return !0;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null;
        }
        return !(this._index >= this._max);
      } }, { key: "interfaces_", get: function() {
        return [vh];
      } }], [{ key: "constructor_", value: function() {
        this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
        var e = arguments[0];
        this._parent = e, this._atStart = !0, this._index = 0, this._max = e.getNumGeometries();
      } }, { key: "isAtomic", value: function(e) {
        return !(e instanceof ot);
      } }]), o;
    }(), Nh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "locate", value: function(e) {
        return o.locate(e, this._geom);
      } }, { key: "interfaces_", get: function() {
        return [Ih];
      } }], [{ key: "constructor_", value: function() {
        this._geom = null;
        var e = arguments[0];
        this._geom = e;
      } }, { key: "locatePointInPolygon", value: function(e, t) {
        if (t.isEmpty()) return I.EXTERIOR;
        var n = t.getExteriorRing(), s = o.locatePointInRing(e, n);
        if (s !== I.INTERIOR) return s;
        for (var c = 0; c < t.getNumInteriorRing(); c++) {
          var h = t.getInteriorRingN(c), g = o.locatePointInRing(e, h);
          if (g === I.BOUNDARY) return I.BOUNDARY;
          if (g === I.INTERIOR) return I.EXTERIOR;
        }
        return I.INTERIOR;
      } }, { key: "locatePointInRing", value: function(e, t) {
        return t.getEnvelopeInternal().intersects(e) ? ms.locateInRing(e, t.getCoordinates()) : I.EXTERIOR;
      } }, { key: "containsPointInPolygon", value: function(e, t) {
        return I.EXTERIOR !== o.locatePointInPolygon(e, t);
      } }, { key: "locateInGeometry", value: function(e, t) {
        if (t instanceof tn) return o.locatePointInPolygon(e, t);
        if (t instanceof ot) for (var n = new wh(t); n.hasNext(); ) {
          var s = n.next();
          if (s !== t) {
            var c = o.locateInGeometry(e, s);
            if (c !== I.EXTERIOR) return c;
          }
        }
        return I.EXTERIOR;
      } }, { key: "isContained", value: function(e, t) {
        return I.EXTERIOR !== o.locate(e, t);
      } }, { key: "locate", value: function(e, t) {
        return t.isEmpty() ? I.EXTERIOR : t.getEnvelopeInternal().intersects(e) ? o.locateInGeometry(e, t) : I.EXTERIOR;
      } }]), o;
    }(), Lh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getNextCW", value: function(e) {
        this.getEdges();
        var t = this._edgeList.indexOf(e), n = t - 1;
        return t === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
      } }, { key: "propagateSideLabels", value: function(e) {
        for (var t = I.NONE, n = this.iterator(); n.hasNext(); ) {
          var s = n.next().getLabel();
          s.isArea(e) && s.getLocation(e, W.LEFT) !== I.NONE && (t = s.getLocation(e, W.LEFT));
        }
        if (t === I.NONE) return null;
        for (var c = t, h = this.iterator(); h.hasNext(); ) {
          var g = h.next(), d = g.getLabel();
          if (d.getLocation(e, W.ON) === I.NONE && d.setLocation(e, W.ON, c), d.isArea(e)) {
            var E = d.getLocation(e, W.LEFT), w = d.getLocation(e, W.RIGHT);
            if (w !== I.NONE) {
              if (w !== c) throw new at("side location conflict", g.getCoordinate());
              E === I.NONE && fe.shouldNeverReachHere("found single null side (at " + g.getCoordinate() + ")"), c = E;
            } else fe.isTrue(d.getLocation(e, W.LEFT) === I.NONE, "found single null side"), d.setLocation(e, W.RIGHT, c), d.setLocation(e, W.LEFT, c);
          }
        }
      } }, { key: "getCoordinate", value: function() {
        var e = this.iterator();
        return e.hasNext() ? e.next().getCoordinate() : null;
      } }, { key: "print", value: function(e) {
        rt.out.println("EdgeEndStar:   " + this.getCoordinate());
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "isAreaLabelsConsistent", value: function(e) {
        return this.computeEdgeEndLabels(e.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
      } }, { key: "checkAreaLabelsConsistent", value: function(e) {
        var t = this.getEdges();
        if (t.size() <= 0) return !0;
        var n = t.size() - 1, s = t.get(n).getLabel().getLocation(e, W.LEFT);
        fe.isTrue(s !== I.NONE, "Found unlabelled area edge");
        for (var c = s, h = this.iterator(); h.hasNext(); ) {
          var g = h.next().getLabel();
          fe.isTrue(g.isArea(e), "Found non-area edge");
          var d = g.getLocation(e, W.LEFT), E = g.getLocation(e, W.RIGHT);
          if (d === E || E !== c) return !1;
          c = d;
        }
        return !0;
      } }, { key: "findIndex", value: function(e) {
        this.iterator();
        for (var t = 0; t < this._edgeList.size(); t++)
          if (this._edgeList.get(t) === e) return t;
        return -1;
      } }, { key: "iterator", value: function() {
        return this.getEdges().iterator();
      } }, { key: "getEdges", value: function() {
        return this._edgeList === null && (this._edgeList = new ne(this._edgeMap.values())), this._edgeList;
      } }, { key: "getLocation", value: function(e, t, n) {
        return this._ptInAreaLocation[e] === I.NONE && (this._ptInAreaLocation[e] = Nh.locate(t, n[e].getGeometry())), this._ptInAreaLocation[e];
      } }, { key: "toString", value: function() {
        var e = new _n();
        e.append("EdgeEndStar:   " + this.getCoordinate()), e.append(`
`);
        for (var t = this.iterator(); t.hasNext(); ) {
          var n = t.next();
          e.append(n), e.append(`
`);
        }
        return e.toString();
      } }, { key: "computeEdgeEndLabels", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          t.next().computeLabel(e);
      } }, { key: "computeLabelling", value: function(e) {
        this.computeEdgeEndLabels(e[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
        for (var t = [!1, !1], n = this.iterator(); n.hasNext(); ) for (var s = n.next().getLabel(), c = 0; c < 2; c++) s.isLine(c) && s.getLocation(c) === I.BOUNDARY && (t[c] = !0);
        for (var h = this.iterator(); h.hasNext(); ) for (var g = h.next(), d = g.getLabel(), E = 0; E < 2; E++) if (d.isAnyNull(E)) {
          var w = I.NONE;
          if (t[E]) w = I.EXTERIOR;
          else {
            var N = g.getCoordinate();
            w = this.getLocation(E, N, e);
          }
          d.setAllLocationsIfNull(E, w);
        }
      } }, { key: "getDegree", value: function() {
        return this._edgeMap.size();
      } }, { key: "insertEdgeEnd", value: function(e, t) {
        this._edgeMap.put(e, t), this._edgeList = null;
      } }], [{ key: "constructor_", value: function() {
        this._edgeMap = new Ir(), this._edgeList = null, this._ptInAreaLocation = [I.NONE, I.NONE];
      } }]), o;
    }(), Th = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "linkResultDirectedEdges", value: function() {
        this.getResultAreaEdges();
        for (var n = null, s = null, c = this._SCANNING_FOR_INCOMING, h = 0; h < this._resultAreaEdgeList.size(); h++) {
          var g = this._resultAreaEdgeList.get(h), d = g.getSym();
          if (g.getLabel().isArea()) switch (n === null && g.isInResult() && (n = g), c) {
            case this._SCANNING_FOR_INCOMING:
              if (!d.isInResult()) continue;
              s = d, c = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (!g.isInResult()) continue;
              s.setNext(g), c = this._SCANNING_FOR_INCOMING;
          }
        }
        if (c === this._LINKING_TO_OUTGOING) {
          if (n === null) throw new at("no outgoing dirEdge found", this.getCoordinate());
          fe.isTrue(n.isInResult(), "unable to link last incoming dirEdge"), s.setNext(n);
        }
      } }, { key: "insert", value: function(n) {
        var s = n;
        this.insertEdgeEnd(s, s);
      } }, { key: "getRightmostEdge", value: function() {
        var n = this.getEdges(), s = n.size();
        if (s < 1) return null;
        var c = n.get(0);
        if (s === 1) return c;
        var h = n.get(s - 1), g = c.getQuadrant(), d = h.getQuadrant();
        return Je.isNorthern(g) && Je.isNorthern(d) ? c : Je.isNorthern(g) || Je.isNorthern(d) ? c.getDy() !== 0 ? c : h.getDy() !== 0 ? h : (fe.shouldNeverReachHere("found two horizontal edges incident on node"), null) : h;
      } }, { key: "print", value: function(n) {
        rt.out.println("DirectedEdgeStar: " + this.getCoordinate());
        for (var s = this.iterator(); s.hasNext(); ) {
          var c = s.next();
          n.print("out "), c.print(n), n.println(), n.print("in "), c.getSym().print(n), n.println();
        }
      } }, { key: "getResultAreaEdges", value: function() {
        if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
        this._resultAreaEdgeList = new ne();
        for (var n = this.iterator(); n.hasNext(); ) {
          var s = n.next();
          (s.isInResult() || s.getSym().isInResult()) && this._resultAreaEdgeList.add(s);
        }
        return this._resultAreaEdgeList;
      } }, { key: "updateLabelling", value: function(n) {
        for (var s = this.iterator(); s.hasNext(); ) {
          var c = s.next().getLabel();
          c.setAllLocationsIfNull(0, n.getLocation(0)), c.setAllLocationsIfNull(1, n.getLocation(1));
        }
      } }, { key: "linkAllDirectedEdges", value: function() {
        this.getEdges();
        for (var n = null, s = null, c = this._edgeList.size() - 1; c >= 0; c--) {
          var h = this._edgeList.get(c), g = h.getSym();
          s === null && (s = g), n !== null && g.setNext(n), n = h;
        }
        s.setNext(n);
      } }, { key: "computeDepths", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], s = this.findIndex(n), c = n.getDepth(W.LEFT), h = n.getDepth(W.RIGHT), g = this.computeDepths(s + 1, this._edgeList.size(), c), d = this.computeDepths(0, s, g);
          if (d !== h) throw new at("depth mismatch at " + n.getCoordinate());
        } else if (arguments.length === 3) {
          for (var E = arguments[0], w = arguments[1], N = arguments[2], F = N, j = E; j < w; j++) {
            var X = this._edgeList.get(j);
            X.setEdgeDepths(W.RIGHT, F), F = X.getDepth(W.LEFT);
          }
          return F;
        }
      } }, { key: "mergeSymLabels", value: function() {
        for (var n = this.iterator(); n.hasNext(); ) {
          var s = n.next();
          s.getLabel().merge(s.getSym().getLabel());
        }
      } }, { key: "linkMinimalDirectedEdges", value: function(n) {
        for (var s = null, c = null, h = this._SCANNING_FOR_INCOMING, g = this._resultAreaEdgeList.size() - 1; g >= 0; g--) {
          var d = this._resultAreaEdgeList.get(g), E = d.getSym();
          switch (s === null && d.getEdgeRing() === n && (s = d), h) {
            case this._SCANNING_FOR_INCOMING:
              if (E.getEdgeRing() !== n) continue;
              c = E, h = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (d.getEdgeRing() !== n) continue;
              c.setNextMin(d), h = this._SCANNING_FOR_INCOMING;
          }
        }
        h === this._LINKING_TO_OUTGOING && (fe.isTrue(s !== null, "found null for first outgoing dirEdge"), fe.isTrue(s.getEdgeRing() === n, "unable to link last incoming dirEdge"), c.setNextMin(s));
      } }, { key: "getOutgoingDegree", value: function() {
        if (arguments.length === 0) {
          for (var n = 0, s = this.iterator(); s.hasNext(); ) {
            var c = s.next();
            c.isInResult() && n++;
          }
          return n;
        }
        if (arguments.length === 1) {
          for (var h = arguments[0], g = 0, d = this.iterator(); d.hasNext(); ) {
            var E = d.next();
            E.getEdgeRing() === h && g++;
          }
          return g;
        }
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "findCoveredLineEdges", value: function() {
        for (var n = I.NONE, s = this.iterator(); s.hasNext(); ) {
          var c = s.next(), h = c.getSym();
          if (!c.isLineEdge()) {
            if (c.isInResult()) {
              n = I.INTERIOR;
              break;
            }
            if (h.isInResult()) {
              n = I.EXTERIOR;
              break;
            }
          }
        }
        if (n === I.NONE) return null;
        for (var g = n, d = this.iterator(); d.hasNext(); ) {
          var E = d.next(), w = E.getSym();
          E.isLineEdge() ? E.getEdge().setCovered(g === I.INTERIOR) : (E.isInResult() && (g = I.EXTERIOR), w.isInResult() && (g = I.INTERIOR));
        }
      } }, { key: "computeLabelling", value: function(n) {
        b(v(t.prototype), "computeLabelling", this).call(this, n), this._label = new dt(I.NONE);
        for (var s = this.iterator(); s.hasNext(); ) for (var c = s.next().getEdge().getLabel(), h = 0; h < 2; h++) {
          var g = c.getLocation(h);
          g !== I.INTERIOR && g !== I.BOUNDARY || this._label.setLocation(h, I.INTERIOR);
        }
      } }], [{ key: "constructor_", value: function() {
        this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
      } }]), t;
    }(Lh), Ch = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        return i(this, t), e.call(this);
      }
      return l(t, [{ key: "createNode", value: function(n) {
        return new ai(n, new Th());
      } }]), t;
    }(vo), Lo = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "compareTo", value: function(e) {
        var t = e;
        return o.compareOriented(this._pts, this._orientation, t._pts, t._orientation);
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        this._pts = null, this._orientation = null;
        var e = arguments[0];
        this._pts = e, this._orientation = o.orientation(e);
      } }, { key: "orientation", value: function(e) {
        return qe.increasingDirection(e) === 1;
      } }, { key: "compareOriented", value: function(e, t, n, s) {
        for (var c = t ? 1 : -1, h = s ? 1 : -1, g = t ? e.length : -1, d = s ? n.length : -1, E = t ? 0 : e.length - 1, w = s ? 0 : n.length - 1; ; ) {
          var N = e[E].compareTo(n[w]);
          if (N !== 0) return N;
          var F = (E += c) === g, j = (w += h) === d;
          if (F && !j) return -1;
          if (!F && j) return 1;
          if (F && j) return 0;
        }
      } }]), o;
    }(), Oh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "print", value: function(e) {
        e.print("MULTILINESTRING ( ");
        for (var t = 0; t < this._edges.size(); t++) {
          var n = this._edges.get(t);
          t > 0 && e.print(","), e.print("(");
          for (var s = n.getCoordinates(), c = 0; c < s.length; c++) c > 0 && e.print(","), e.print(s[c].x + " " + s[c].y);
          e.println(")");
        }
        e.print(")  ");
      } }, { key: "addAll", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) this.add(t.next());
      } }, { key: "findEdgeIndex", value: function(e) {
        for (var t = 0; t < this._edges.size(); t++) if (this._edges.get(t).equals(e)) return t;
        return -1;
      } }, { key: "iterator", value: function() {
        return this._edges.iterator();
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "get", value: function(e) {
        return this._edges.get(e);
      } }, { key: "findEqualEdge", value: function(e) {
        var t = new Lo(e.getCoordinates());
        return this._ocaMap.get(t);
      } }, { key: "add", value: function(e) {
        this._edges.add(e);
        var t = new Lo(e.getCoordinates());
        this._ocaMap.put(t, e);
      } }], [{ key: "constructor_", value: function() {
        this._edges = new ne(), this._ocaMap = new Ir();
      } }]), o;
    }(), To = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "processIntersections", value: function(e, t, n, s) {
      } }, { key: "isDone", value: function() {
      } }]), o;
    }(), Rh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "isTrivialIntersection", value: function(e, t, n, s) {
        if (e === n && this._li.getIntersectionNum() === 1) {
          if (o.isAdjacentSegments(t, s)) return !0;
          if (e.isClosed()) {
            var c = e.size() - 1;
            if (t === 0 && s === c || s === 0 && t === c) return !0;
          }
        }
        return !1;
      } }, { key: "getProperIntersectionPoint", value: function() {
        return this._properIntersectionPoint;
      } }, { key: "hasProperInteriorIntersection", value: function() {
        return this._hasProperInterior;
      } }, { key: "getLineIntersector", value: function() {
        return this._li;
      } }, { key: "hasProperIntersection", value: function() {
        return this._hasProper;
      } }, { key: "processIntersections", value: function(e, t, n, s) {
        if (e === n && t === s) return null;
        this.numTests++;
        var c = e.getCoordinates()[t], h = e.getCoordinates()[t + 1], g = n.getCoordinates()[s], d = n.getCoordinates()[s + 1];
        this._li.computeIntersection(c, h, g, d), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(e, t, n, s) || (this._hasIntersection = !0, e.addIntersections(this._li, t, 0), n.addIntersections(this._li, s, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
      } }, { key: "hasIntersection", value: function() {
        return this._hasIntersection;
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "hasInteriorIntersection", value: function() {
        return this._hasInterior;
      } }, { key: "interfaces_", get: function() {
        return [To];
      } }], [{ key: "constructor_", value: function() {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
        var e = arguments[0];
        this._li = e;
      } }, { key: "isAdjacentSegments", value: function(e, t) {
        return Math.abs(e - t) === 1;
      } }]), o;
    }(), Mh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getSegmentIndex", value: function() {
        return this.segmentIndex;
      } }, { key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(e) {
        e.print(this.coord), e.print(" seg # = " + this.segmentIndex), e.println(" dist = " + this.dist);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.compare(t.segmentIndex, t.dist);
      } }, { key: "isEndPoint", value: function(e) {
        return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === e;
      } }, { key: "toString", value: function() {
        return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
      } }, { key: "getDistance", value: function() {
        return this.dist;
      } }, { key: "compare", value: function(e, t) {
        return this.segmentIndex < e ? -1 : this.segmentIndex > e ? 1 : this.dist < t ? -1 : this.dist > t ? 1 : 0;
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        this.coord = null, this.segmentIndex = null, this.dist = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this.coord = new C(e), this.segmentIndex = t, this.dist = n;
      } }]), o;
    }(), Ph = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(e) {
        this.addEndpoints();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var s = t.next(), c = this.createSplitEdge(n, s);
          e.add(c), n = s;
        }
      } }, { key: "addEndpoints", value: function() {
        var e = this.edge.pts.length - 1;
        this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[e], e, 0);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = t.segmentIndex - e.segmentIndex + 2, s = this.edge.pts[t.segmentIndex], c = t.dist > 0 || !t.coord.equals2D(s);
        c || n--;
        var h = new Array(n).fill(null), g = 0;
        h[g++] = new C(e.coord);
        for (var d = e.segmentIndex + 1; d <= t.segmentIndex; d++) h[g++] = this.edge.pts[d];
        return c && (h[g] = t.coord), new Oo(h, new dt(this.edge._label));
      } }, { key: "add", value: function(e, t, n) {
        var s = new Mh(e, t, n), c = this._nodeMap.get(s);
        return c !== null ? c : (this._nodeMap.put(s, s), s);
      } }, { key: "isIntersection", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          if (t.next().coord.equals(e)) return !0;
        return !1;
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Ir(), this.edge = null;
        var e = arguments[0];
        this.edge = e;
      } }]), o;
    }(), Ah = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "isIntersects", value: function() {
        return !this.isDisjoint();
      } }, { key: "isCovers", value: function() {
        return (o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) || o.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || o.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || o.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY])) && this._matrix[I.EXTERIOR][I.INTERIOR] === V.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === V.FALSE;
      } }, { key: "isCoveredBy", value: function() {
        return (o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) || o.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || o.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || o.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY])) && this._matrix[I.INTERIOR][I.EXTERIOR] === V.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === V.FALSE;
      } }, { key: "set", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), s = t % 3;
          this._matrix[n][s] = V.toDimensionValue(e.charAt(t));
        }
        else if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2];
          this._matrix[c][h] = g;
        }
      } }, { key: "isContains", value: function() {
        return o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.EXTERIOR][I.INTERIOR] === V.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === V.FALSE;
      } }, { key: "setAtLeast", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), s = t % 3;
          this.setAtLeast(n, s, V.toDimensionValue(e.charAt(t)));
        }
        else if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2];
          this._matrix[c][h] < g && (this._matrix[c][h] = g);
        }
      } }, { key: "setAtLeastIfValid", value: function(e, t, n) {
        e >= 0 && t >= 0 && this.setAtLeast(e, t, n);
      } }, { key: "isWithin", value: function() {
        return o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.INTERIOR][I.EXTERIOR] === V.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === V.FALSE;
      } }, { key: "isTouches", value: function(e, t) {
        return e > t ? this.isTouches(t, e) : (e === V.A && t === V.A || e === V.L && t === V.L || e === V.L && t === V.A || e === V.P && t === V.A || e === V.P && t === V.L) && this._matrix[I.INTERIOR][I.INTERIOR] === V.FALSE && (o.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || o.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || o.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY]));
      } }, { key: "isOverlaps", value: function(e, t) {
        return e === V.P && t === V.P || e === V.A && t === V.A ? o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && o.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) && o.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]) : e === V.L && t === V.L && this._matrix[I.INTERIOR][I.INTERIOR] === 1 && o.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) && o.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]);
      } }, { key: "isEquals", value: function(e, t) {
        return e === t && o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.INTERIOR][I.EXTERIOR] === V.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === V.FALSE && this._matrix[I.EXTERIOR][I.INTERIOR] === V.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === V.FALSE;
      } }, { key: "toString", value: function() {
        for (var e = new ri("123456789"), t = 0; t < 3; t++) for (var n = 0; n < 3; n++) e.setCharAt(3 * t + n, V.toDimensionSymbol(this._matrix[t][n]));
        return e.toString();
      } }, { key: "setAll", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this._matrix[t][n] = e;
      } }, { key: "get", value: function(e, t) {
        return this._matrix[e][t];
      } }, { key: "transpose", value: function() {
        var e = this._matrix[1][0];
        return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = e, e = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = e, e = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = e, this;
      } }, { key: "matches", value: function(e) {
        if (e.length !== 9) throw new M("Should be length 9: " + e);
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) if (!o.matches(this._matrix[t][n], e.charAt(3 * t + n))) return !1;
        return !0;
      } }, { key: "add", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this.setAtLeast(t, n, e.get(t, n));
      } }, { key: "isDisjoint", value: function() {
        return this._matrix[I.INTERIOR][I.INTERIOR] === V.FALSE && this._matrix[I.INTERIOR][I.BOUNDARY] === V.FALSE && this._matrix[I.BOUNDARY][I.INTERIOR] === V.FALSE && this._matrix[I.BOUNDARY][I.BOUNDARY] === V.FALSE;
      } }, { key: "isCrosses", value: function(e, t) {
        return e === V.P && t === V.L || e === V.P && t === V.A || e === V.L && t === V.A ? o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && o.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) : e === V.L && t === V.P || e === V.A && t === V.P || e === V.A && t === V.L ? o.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && o.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]) : e === V.L && t === V.L && this._matrix[I.INTERIOR][I.INTERIOR] === 0;
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map(function() {
          return Array(3);
        }), this.setAll(V.FALSE);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "string") {
            var e = arguments[0];
            o.constructor_.call(this), this.set(e);
          } else if (arguments[0] instanceof o) {
            var t = arguments[0];
            o.constructor_.call(this), this._matrix[I.INTERIOR][I.INTERIOR] = t._matrix[I.INTERIOR][I.INTERIOR], this._matrix[I.INTERIOR][I.BOUNDARY] = t._matrix[I.INTERIOR][I.BOUNDARY], this._matrix[I.INTERIOR][I.EXTERIOR] = t._matrix[I.INTERIOR][I.EXTERIOR], this._matrix[I.BOUNDARY][I.INTERIOR] = t._matrix[I.BOUNDARY][I.INTERIOR], this._matrix[I.BOUNDARY][I.BOUNDARY] = t._matrix[I.BOUNDARY][I.BOUNDARY], this._matrix[I.BOUNDARY][I.EXTERIOR] = t._matrix[I.BOUNDARY][I.EXTERIOR], this._matrix[I.EXTERIOR][I.INTERIOR] = t._matrix[I.EXTERIOR][I.INTERIOR], this._matrix[I.EXTERIOR][I.BOUNDARY] = t._matrix[I.EXTERIOR][I.BOUNDARY], this._matrix[I.EXTERIOR][I.EXTERIOR] = t._matrix[I.EXTERIOR][I.EXTERIOR];
          }
        }
      } }, { key: "matches", value: function() {
        if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
          var e = arguments[0], t = arguments[1];
          return t === V.SYM_DONTCARE || t === V.SYM_TRUE && (e >= 0 || e === V.TRUE) || t === V.SYM_FALSE && e === V.FALSE || t === V.SYM_P && e === V.P || t === V.SYM_L && e === V.L || t === V.SYM_A && e === V.A;
        }
        if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
          var n = arguments[0], s = arguments[1], c = new o(n);
          return c.matches(s);
        }
      } }, { key: "isTrue", value: function(e) {
        return e >= 0 || e === V.TRUE;
      } }]), o;
    }(), Dh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "size", value: function() {
        return this._size;
      } }, { key: "addAll", value: function(e) {
        return e === null || e.length === 0 ? null : (this.ensureCapacity(this._size + e.length), rt.arraycopy(e, 0, this._data, this._size, e.length), void (this._size += e.length));
      } }, { key: "ensureCapacity", value: function(e) {
        if (e <= this._data.length) return null;
        var t = Math.max(e, 2 * this._data.length);
        this._data = yt.copyOf(this._data, t);
      } }, { key: "toArray", value: function() {
        var e = new Array(this._size).fill(null);
        return rt.arraycopy(this._data, 0, e, 0, this._size), e;
      } }, { key: "add", value: function(e) {
        this.ensureCapacity(this._size + 1), this._data[this._size] = e, ++this._size;
      } }], [{ key: "constructor_", value: function() {
        if (this._data = null, this._size = 0, arguments.length === 0) o.constructor_.call(this, 10);
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._data = new Array(e).fill(null);
        }
      } }]), o;
    }(), Fh = function() {
      function o() {
        i(this, o);
      }
      return l(o, [{ key: "getChainStartIndices", value: function(e) {
        var t = 0, n = new Dh(Math.trunc(e.length / 2));
        n.add(t);
        do {
          var s = this.findChainEnd(e, t);
          n.add(s), t = s;
        } while (t < e.length - 1);
        return n.toArray();
      } }, { key: "findChainEnd", value: function(e, t) {
        for (var n = Je.quadrant(e[t], e[t + 1]), s = t + 1; s < e.length && Je.quadrant(e[s - 1], e[s]) === n; )
          s++;
        return s - 1;
      } }, { key: "OLDgetChainStartIndices", value: function(e) {
        var t = 0, n = new ne();
        n.add(t);
        do {
          var s = this.findChainEnd(e, t);
          n.add(s), t = s;
        } while (t < e.length - 1);
        return o.toIntArray(n);
      } }], [{ key: "toIntArray", value: function(e) {
        for (var t = new Array(e.size()).fill(null), n = 0; n < t.length; n++) t[n] = e.get(n).intValue();
        return t;
      } }]), o;
    }(), Bh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getCoordinates", value: function() {
        return this.pts;
      } }, { key: "getMaxX", value: function(e) {
        var t = this.pts[this.startIndex[e]].x, n = this.pts[this.startIndex[e + 1]].x;
        return t > n ? t : n;
      } }, { key: "getMinX", value: function(e) {
        var t = this.pts[this.startIndex[e]].x, n = this.pts[this.startIndex[e + 1]].x;
        return t < n ? t : n;
      } }, { key: "computeIntersectsForChain", value: function() {
        if (arguments.length === 4) {
          var e = arguments[0], t = arguments[1], n = arguments[2], s = arguments[3];
          this.computeIntersectsForChain(this.startIndex[e], this.startIndex[e + 1], t, t.startIndex[n], t.startIndex[n + 1], s);
        } else if (arguments.length === 6) {
          var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3], E = arguments[4], w = arguments[5];
          if (h - c == 1 && E - d == 1) return w.addIntersections(this.e, c, g.e, d), null;
          if (!this.overlaps(c, h, g, d, E)) return null;
          var N = Math.trunc((c + h) / 2), F = Math.trunc((d + E) / 2);
          c < N && (d < F && this.computeIntersectsForChain(c, N, g, d, F, w), F < E && this.computeIntersectsForChain(c, N, g, F, E, w)), N < h && (d < F && this.computeIntersectsForChain(N, h, g, d, F, w), F < E && this.computeIntersectsForChain(N, h, g, F, E, w));
        }
      } }, { key: "overlaps", value: function(e, t, n, s, c) {
        return xe.intersects(this.pts[e], this.pts[t], n.pts[s], n.pts[c]);
      } }, { key: "getStartIndexes", value: function() {
        return this.startIndex;
      } }, { key: "computeIntersects", value: function(e, t) {
        for (var n = 0; n < this.startIndex.length - 1; n++) for (var s = 0; s < e.startIndex.length - 1; s++) this.computeIntersectsForChain(n, e, s, t);
      } }], [{ key: "constructor_", value: function() {
        this.e = null, this.pts = null, this.startIndex = null;
        var e = arguments[0];
        this.e = e, this.pts = e.getCoordinates();
        var t = new Fh();
        this.startIndex = t.getChainStartIndices(this.pts);
      } }]), o;
    }(), Co = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "getDepth", value: function(e, t) {
        return this._depth[e][t];
      } }, { key: "setDepth", value: function(e, t, n) {
        this._depth[e][t] = n;
      } }, { key: "isNull", value: function() {
        if (arguments.length === 0) {
          for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) if (this._depth[e][t] !== o.NULL_VALUE) return !1;
          return !0;
        }
        if (arguments.length === 1) {
          var n = arguments[0];
          return this._depth[n][1] === o.NULL_VALUE;
        }
        if (arguments.length === 2) {
          var s = arguments[0], c = arguments[1];
          return this._depth[s][c] === o.NULL_VALUE;
        }
      } }, { key: "normalize", value: function() {
        for (var e = 0; e < 2; e++) if (!this.isNull(e)) {
          var t = this._depth[e][1];
          this._depth[e][2] < t && (t = this._depth[e][2]), t < 0 && (t = 0);
          for (var n = 1; n < 3; n++) {
            var s = 0;
            this._depth[e][n] > t && (s = 1), this._depth[e][n] = s;
          }
        }
      } }, { key: "getDelta", value: function(e) {
        return this._depth[e][W.RIGHT] - this._depth[e][W.LEFT];
      } }, { key: "getLocation", value: function(e, t) {
        return this._depth[e][t] <= 0 ? I.EXTERIOR : I.INTERIOR;
      } }, { key: "toString", value: function() {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
      } }, { key: "add", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < 2; t++) for (var n = 1; n < 3; n++) {
          var s = e.getLocation(t, n);
          s !== I.EXTERIOR && s !== I.INTERIOR || (this.isNull(t, n) ? this._depth[t][n] = o.depthAtLocation(s) : this._depth[t][n] += o.depthAtLocation(s));
        }
        else if (arguments.length === 3) {
          var c = arguments[0], h = arguments[1], g = arguments[2];
          g === I.INTERIOR && this._depth[c][h]++;
        }
      } }], [{ key: "constructor_", value: function() {
        this._depth = Array(2).fill().map(function() {
          return Array(3);
        });
        for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) this._depth[e][t] = o.NULL_VALUE;
      } }, { key: "depthAtLocation", value: function(e) {
        return e === I.EXTERIOR ? 0 : e === I.INTERIOR ? 1 : o.NULL_VALUE;
      } }]), o;
    }();
    Co.NULL_VALUE = -1;
    var Oo = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "getDepth", value: function() {
        return this._depth;
      } }, { key: "getCollapsedEdge", value: function() {
        var n = new Array(2).fill(null);
        return n[0] = this.pts[0], n[1] = this.pts[1], new t(n, dt.toLineLabel(this._label));
      } }, { key: "isIsolated", value: function() {
        return this._isIsolated;
      } }, { key: "getCoordinates", value: function() {
        return this.pts;
      } }, { key: "setIsolated", value: function(n) {
        this._isIsolated = n;
      } }, { key: "setName", value: function(n) {
        this._name = n;
      } }, { key: "equals", value: function(n) {
        if (!(n instanceof t)) return !1;
        var s = n;
        if (this.pts.length !== s.pts.length) return !1;
        for (var c = !0, h = !0, g = this.pts.length, d = 0; d < this.pts.length; d++) if (this.pts[d].equals2D(s.pts[d]) || (c = !1), this.pts[d].equals2D(s.pts[--g]) || (h = !1), !c && !h) return !1;
        return !0;
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 0) return this.pts.length > 0 ? this.pts[0] : null;
        if (arguments.length === 1) {
          var n = arguments[0];
          return this.pts[n];
        }
      } }, { key: "print", value: function(n) {
        n.print("edge " + this._name + ": "), n.print("LINESTRING (");
        for (var s = 0; s < this.pts.length; s++) s > 0 && n.print(","), n.print(this.pts[s].x + " " + this.pts[s].y);
        n.print(")  " + this._label + " " + this._depthDelta);
      } }, { key: "computeIM", value: function(n) {
        t.updateIM(this._label, n);
      } }, { key: "isCollapsed", value: function() {
        return !!this._label.isArea() && this.pts.length === 3 && !!this.pts[0].equals(this.pts[2]);
      } }, { key: "isClosed", value: function() {
        return this.pts[0].equals(this.pts[this.pts.length - 1]);
      } }, { key: "getMaximumSegmentIndex", value: function() {
        return this.pts.length - 1;
      } }, { key: "getDepthDelta", value: function() {
        return this._depthDelta;
      } }, { key: "getNumPoints", value: function() {
        return this.pts.length;
      } }, { key: "printReverse", value: function(n) {
        n.print("edge " + this._name + ": ");
        for (var s = this.pts.length - 1; s >= 0; s--) n.print(this.pts[s] + " ");
        n.println("");
      } }, { key: "getMonotoneChainEdge", value: function() {
        return this._mce === null && (this._mce = new Bh(this)), this._mce;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          this._env = new xe();
          for (var n = 0; n < this.pts.length; n++) this._env.expandToInclude(this.pts[n]);
        }
        return this._env;
      } }, { key: "addIntersection", value: function(n, s, c, h) {
        var g = new C(n.getIntersection(h)), d = s, E = n.getEdgeDistance(c, h), w = d + 1;
        if (w < this.pts.length) {
          var N = this.pts[w];
          g.equals2D(N) && (d = w, E = 0);
        }
        this.eiList.add(g, d, E);
      } }, { key: "toString", value: function() {
        var n = new ri();
        n.append("edge " + this._name + ": "), n.append("LINESTRING (");
        for (var s = 0; s < this.pts.length; s++) s > 0 && n.append(","), n.append(this.pts[s].x + " " + this.pts[s].y);
        return n.append(")  " + this._label + " " + this._depthDelta), n.toString();
      } }, { key: "isPointwiseEqual", value: function(n) {
        if (this.pts.length !== n.pts.length) return !1;
        for (var s = 0; s < this.pts.length; s++) if (!this.pts[s].equals2D(n.pts[s])) return !1;
        return !0;
      } }, { key: "setDepthDelta", value: function(n) {
        this._depthDelta = n;
      } }, { key: "getEdgeIntersectionList", value: function() {
        return this.eiList;
      } }, { key: "addIntersections", value: function(n, s, c) {
        for (var h = 0; h < n.getIntersectionNum(); h++) this.addIntersection(n, s, c, h);
      } }], [{ key: "constructor_", value: function() {
        if (this.pts = null, this._env = null, this.eiList = new Ph(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Co(), this._depthDelta = 0, arguments.length === 1) {
          var n = arguments[0];
          t.constructor_.call(this, n, null);
        } else if (arguments.length === 2) {
          var s = arguments[0], c = arguments[1];
          this.pts = s, this._label = c;
        }
      } }, { key: "updateIM", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Ah && arguments[0] instanceof dt)) return b(v(t), "updateIM", this).apply(this, arguments);
        var n = arguments[0], s = arguments[1];
        s.setAtLeastIfValid(n.getLocation(0, W.ON), n.getLocation(1, W.ON), 1), n.isArea() && (s.setAtLeastIfValid(n.getLocation(0, W.LEFT), n.getLocation(1, W.LEFT), 2), s.setAtLeastIfValid(n.getLocation(0, W.RIGHT), n.getLocation(1, W.RIGHT), 2));
      } }]), t;
    }(co), Ro = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "setWorkingPrecisionModel", value: function(e) {
        this._workingPrecisionModel = e;
      } }, { key: "insertUniqueEdge", value: function(e) {
        var t = this._edgeList.findEqualEdge(e);
        if (t !== null) {
          var n = t.getLabel(), s = e.getLabel();
          t.isPointwiseEqual(e) || (s = new dt(e.getLabel())).flip(), n.merge(s);
          var c = o.depthDelta(s), h = t.getDepthDelta() + c;
          t.setDepthDelta(h);
        } else this._edgeList.add(e), e.setDepthDelta(o.depthDelta(e.getLabel()));
      } }, { key: "buildSubgraphs", value: function(e, t) {
        for (var n = new ne(), s = e.iterator(); s.hasNext(); ) {
          var c = s.next(), h = c.getRightmostCoordinate(), g = new Io(n).getDepth(h);
          c.computeDepth(g), c.findResultEdges(), n.add(c), t.add(c.getDirectedEdges(), c.getNodes());
        }
      } }, { key: "createSubgraphs", value: function(e) {
        for (var t = new ne(), n = e.getNodes().iterator(); n.hasNext(); ) {
          var s = n.next();
          if (!s.isVisited()) {
            var c = new us();
            c.create(s), t.add(c);
          }
        }
        return Xn.sort(t, Xn.reverseOrder()), t;
      } }, { key: "createEmptyResultGeometry", value: function() {
        return this._geomFact.createPolygon();
      } }, { key: "getNoder", value: function(e) {
        if (this._workingNoder !== null) return this._workingNoder;
        var t = new ks(), n = new bn();
        return n.setPrecisionModel(e), t.setSegmentIntersector(new Rh(n)), t;
      } }, { key: "buffer", value: function(e, t) {
        var n = this._workingPrecisionModel;
        n === null && (n = e.getPrecisionModel()), this._geomFact = e.getFactory();
        var s = new xh(n, this._bufParams), c = new bh(e, t, s).getCurves();
        if (c.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(c, n), this._graph = new mo(new Ch()), this._graph.addEdges(this._edgeList.getEdges());
        var h = this.createSubgraphs(this._graph), g = new lh(this._geomFact);
        this.buildSubgraphs(h, g);
        var d = g.getPolygons();
        return d.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(d);
      } }, { key: "computeNodedEdges", value: function(e, t) {
        var n = this.getNoder(t);
        n.computeNodes(e);
        for (var s = n.getNodedSubstrings().iterator(); s.hasNext(); ) {
          var c = s.next(), h = c.getCoordinates();
          if (h.length !== 2 || !h[0].equals2D(h[1])) {
            var g = c.getData(), d = new Oo(c.getCoordinates(), new dt(g));
            this.insertUniqueEdge(d);
          }
        }
      } }, { key: "setNoder", value: function(e) {
        this._workingNoder = e;
      } }], [{ key: "constructor_", value: function() {
        this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new Oh();
        var e = arguments[0];
        this._bufParams = e;
      } }, { key: "depthDelta", value: function(e) {
        var t = e.getLocation(0, W.LEFT), n = e.getLocation(0, W.RIGHT);
        return t === I.INTERIOR && n === I.EXTERIOR ? 1 : t === I.EXTERIOR && n === I.INTERIOR ? -1 : 0;
      } }, { key: "convertSegStrings", value: function(e) {
        for (var t = new Yn(), n = new ne(); e.hasNext(); ) {
          var s = e.next(), c = t.createLineString(s.getCoordinates());
          n.add(c);
        }
        return t.buildGeometry(n);
      } }]), o;
    }(), Gh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "rescale", value: function() {
        if (ue(arguments[0], le)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.rescale(n.getCoordinates());
        }
        else if (arguments[0] instanceof Array) {
          for (var s = arguments[0], c = 0; c < s.length; c++) s[c].x = s[c].x / this._scaleFactor + this._offsetX, s[c].y = s[c].y / this._scaleFactor + this._offsetY;
          s.length === 2 && s[0].equals2D(s[1]) && rt.out.println(s);
        }
      } }, { key: "scale", value: function() {
        if (ue(arguments[0], le)) {
          for (var e = arguments[0], t = new ne(e.size()), n = e.iterator(); n.hasNext(); ) {
            var s = n.next();
            t.add(new In(this.scale(s.getCoordinates()), s.getData()));
          }
          return t;
        }
        if (arguments[0] instanceof Array) {
          for (var c = arguments[0], h = new Array(c.length).fill(null), g = 0; g < c.length; g++) h[g] = new C(Math.round((c[g].x - this._offsetX) * this._scaleFactor), Math.round((c[g].y - this._offsetY) * this._scaleFactor), c[g].getZ());
          var d = qe.removeRepeatedPoints(h);
          return d;
        }
      } }, { key: "isIntegerPrecision", value: function() {
        return this._scaleFactor === 1;
      } }, { key: "getNodedSubstrings", value: function() {
        var e = this._noder.getNodedSubstrings();
        return this._isScaled && this.rescale(e), e;
      } }, { key: "computeNodes", value: function(e) {
        var t = e;
        this._isScaled && (t = this.scale(e)), this._noder.computeNodes(t);
      } }, { key: "interfaces_", get: function() {
        return [Es];
      } }], [{ key: "constructor_", value: function() {
        if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          o.constructor_.call(this, e, t, 0, 0);
        } else if (arguments.length === 4) {
          var n = arguments[0], s = arguments[1];
          this._noder = n, this._scaleFactor = s, this._isScaled = !this.isIntegerPrecision();
        }
      } }]), o;
    }(), Mo = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "checkEndPtVertexIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next(), n = t.getCoordinates();
          this.checkEndPtVertexIntersections(n[0], this._segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this._segStrings);
        }
        else if (arguments.length === 2) {
          for (var s = arguments[0], c = arguments[1], h = c.iterator(); h.hasNext(); ) for (var g = h.next(), d = g.getCoordinates(), E = 1; E < d.length - 1; E++) if (d[E].equals(s)) throw new we("found endpt/interior pt intersection at index " + E + " :pt " + s);
        }
      } }, { key: "checkInteriorIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) for (var t = e.next(), n = this._segStrings.iterator(); n.hasNext(); ) {
          var s = n.next();
          this.checkInteriorIntersections(t, s);
        }
        else if (arguments.length === 2) for (var c = arguments[0], h = arguments[1], g = c.getCoordinates(), d = h.getCoordinates(), E = 0; E < g.length - 1; E++) for (var w = 0; w < d.length - 1; w++) this.checkInteriorIntersections(c, E, h, w);
        else if (arguments.length === 4) {
          var N = arguments[0], F = arguments[1], j = arguments[2], X = arguments[3];
          if (N === j && F === X) return null;
          var $ = N.getCoordinates()[F], re = N.getCoordinates()[F + 1], ce = j.getCoordinates()[X], _e = j.getCoordinates()[X + 1];
          if (this._li.computeIntersection($, re, ce, _e), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, $, re) || this.hasInteriorIntersection(this._li, ce, _e))) throw new we("found non-noded intersection at " + $ + "-" + re + " and " + ce + "-" + _e);
        }
      } }, { key: "checkValid", value: function() {
        this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
      } }, { key: "checkCollapses", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next();
          this.checkCollapses(t);
        }
        else if (arguments.length === 1) for (var n = arguments[0], s = n.getCoordinates(), c = 0; c < s.length - 2; c++) this.checkCollapse(s[c], s[c + 1], s[c + 2]);
      } }, { key: "hasInteriorIntersection", value: function(e, t, n) {
        for (var s = 0; s < e.getIntersectionNum(); s++) {
          var c = e.getIntersection(s);
          if (!c.equals(t) && !c.equals(n)) return !0;
        }
        return !1;
      } }, { key: "checkCollapse", value: function(e, t, n) {
        if (e.equals(n)) throw new we("found non-noded collapse at " + o.fact.createLineString([e, t, n]));
      } }], [{ key: "constructor_", value: function() {
        this._li = new bn(), this._segStrings = null;
        var e = arguments[0];
        this._segStrings = e;
      } }]), o;
    }();
    Mo.fact = new Yn();
    var Ss = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "intersectsScaled", value: function(e, t) {
        var n = Math.min(e.x, t.x), s = Math.max(e.x, t.x), c = Math.min(e.y, t.y), h = Math.max(e.y, t.y), g = this._maxx < n || this._minx > s || this._maxy < c || this._miny > h;
        if (g) return !1;
        var d = this.intersectsToleranceSquare(e, t);
        return fe.isTrue(!(g && d), "Found bad envelope test"), d;
      } }, { key: "initCorners", value: function(e) {
        var t = 0.5;
        this._minx = e.x - t, this._maxx = e.x + t, this._miny = e.y - t, this._maxy = e.y + t, this._corner[0] = new C(this._maxx, this._maxy), this._corner[1] = new C(this._minx, this._maxy), this._corner[2] = new C(this._minx, this._miny), this._corner[3] = new C(this._maxx, this._miny);
      } }, { key: "intersects", value: function(e, t) {
        return this._scaleFactor === 1 ? this.intersectsScaled(e, t) : (this.copyScaled(e, this._p0Scaled), this.copyScaled(t, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
      } }, { key: "scale", value: function(e) {
        return Math.round(e * this._scaleFactor);
      } }, { key: "getCoordinate", value: function() {
        return this._originalPt;
      } }, { key: "copyScaled", value: function(e, t) {
        t.x = this.scale(e.x), t.y = this.scale(e.y);
      } }, { key: "getSafeEnvelope", value: function() {
        if (this._safeEnv === null) {
          var e = o.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
          this._safeEnv = new xe(this._originalPt.x - e, this._originalPt.x + e, this._originalPt.y - e, this._originalPt.y + e);
        }
        return this._safeEnv;
      } }, { key: "intersectsPixelClosure", value: function(e, t) {
        return this._li.computeIntersection(e, t, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(e, t, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(e, t, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(e, t, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
      } }, { key: "intersectsToleranceSquare", value: function(e, t) {
        var n = !1, s = !1;
        return this._li.computeIntersection(e, t, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(e, t, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(e, t, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (s = !0), this._li.computeIntersection(e, t, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!n || !s) || !!e.equals(this._pt) || !!t.equals(this._pt))));
      } }, { key: "addSnappedNode", value: function(e, t) {
        var n = e.getCoordinate(t), s = e.getCoordinate(t + 1);
        return !!this.intersects(n, s) && (e.addIntersection(this.getCoordinate(), t), !0);
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        if (this._originalPt = e, this._pt = e, this._scaleFactor = t, this._li = n, t <= 0) throw new M("Scale factor must be non-zero");
        t !== 1 && (this._pt = new C(this.scale(e.x), this.scale(e.y)), this._p0Scaled = new C(), this._p1Scaled = new C()), this.initCorners(this._pt);
      } }]), o;
    }();
    Ss.SAFE_ENV_EXPANSION_FACTOR = 0.75;
    var qh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "select", value: function() {
        if (arguments.length !== 1) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            e.getLineSegment(t, this.selectedSegment), this.select(this.selectedSegment);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this.selectedSegment = new ut();
      } }]), o;
    }(), Po = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "snap", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.snap(e, null, -1);
        }
        if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], s = arguments[2], c = t.getSafeEnvelope(), h = new Ao(t, n, s);
          return this._index.query(c, new (function() {
            function g() {
              i(this, g);
            }
            return l(g, [{ key: "interfaces_", get: function() {
              return [_o];
            } }, { key: "visitItem", value: function(d) {
              d.select(c, h);
            } }]), g;
          }())()), h.isNodeAdded();
        }
      } }], [{ key: "constructor_", value: function() {
        this._index = null;
        var e = arguments[0];
        this._index = e;
      } }]), o;
    }(), Ao = function(o) {
      f(t, o);
      var e = S(t);
      function t() {
        var n;
        return i(this, t), n = e.call(this), t.constructor_.apply(p(n), arguments), n;
      }
      return l(t, [{ key: "isNodeAdded", value: function() {
        return this._isNodeAdded;
      } }, { key: "select", value: function() {
        if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof ko)) return b(v(t.prototype), "select", this).apply(this, arguments);
        var n = arguments[0], s = arguments[1], c = n.getContext();
        if (this._parentEdge === c && (s === this._hotPixelVertexIndex || s + 1 === this._hotPixelVertexIndex)) return null;
        this._isNodeAdded |= this._hotPixel.addSnappedNode(c, s);
      } }], [{ key: "constructor_", value: function() {
        this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
        var n = arguments[0], s = arguments[1], c = arguments[2];
        this._hotPixel = n, this._parentEdge = s, this._hotPixelVertexIndex = c;
      } }]), t;
    }(qh);
    Po.HotPixelSnapAction = Ao;
    var zh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "processIntersections", value: function(e, t, n, s) {
        if (e === n && t === s) return null;
        var c = e.getCoordinates()[t], h = e.getCoordinates()[t + 1], g = n.getCoordinates()[s], d = n.getCoordinates()[s + 1];
        if (this._li.computeIntersection(c, h, g, d), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var E = 0; E < this._li.getIntersectionNum(); E++) this._interiorIntersections.add(this._li.getIntersection(E));
          e.addIntersections(this._li, t, 0), n.addIntersections(this._li, s, 1);
        }
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "getInteriorIntersections", value: function() {
        return this._interiorIntersections;
      } }, { key: "interfaces_", get: function() {
        return [To];
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._interiorIntersections = null;
        var e = arguments[0];
        this._li = e, this._interiorIntersections = new ne();
      } }]), o;
    }(), Uh = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "checkCorrectness", value: function(e) {
        var t = In.getNodedSubstrings(e), n = new Mo(t);
        try {
          n.checkValid();
        } catch (s) {
          if (!(s instanceof B)) throw s;
          s.printStackTrace();
        }
      } }, { key: "getNodedSubstrings", value: function() {
        return In.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "snapRound", value: function(e, t) {
        var n = this.findInteriorIntersections(e, t);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(e);
      } }, { key: "findInteriorIntersections", value: function(e, t) {
        var n = new zh(t);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(e), n.getInteriorIntersections();
      } }, { key: "computeVertexSnaps", value: function() {
        if (ue(arguments[0], le)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.computeVertexSnaps(n);
        }
        else if (arguments[0] instanceof In) for (var s = arguments[0], c = s.getCoordinates(), h = 0; h < c.length; h++) {
          var g = new Ss(c[h], this._scaleFactor, this._li), d = this._pointSnapper.snap(g, s, h);
          d && s.addIntersection(c[h], h);
        }
      } }, { key: "computeNodes", value: function(e) {
        this._nodedSegStrings = e, this._noder = new ks(), this._pointSnapper = new Po(this._noder.getIndex()), this.snapRound(e, this._li);
      } }, { key: "computeIntersectionSnaps", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next(), s = new Ss(n, this._scaleFactor, this._li);
          this._pointSnapper.snap(s);
        }
      } }, { key: "interfaces_", get: function() {
        return [Es];
      } }], [{ key: "constructor_", value: function() {
        this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
        var e = arguments[0];
        this._pm = e, this._li = new bn(), this._li.setPrecisionModel(e), this._scaleFactor = e.getScale();
      } }]), o;
    }(), Hn = function() {
      function o() {
        i(this, o), o.constructor_.apply(this, arguments);
      }
      return l(o, [{ key: "bufferFixedPrecision", value: function(e) {
        var t = new Gh(new Uh(new bt(1)), e.getScale()), n = new Ro(this._bufParams);
        n.setWorkingPrecisionModel(e), n.setNoder(t), this._resultGeometry = n.buffer(this._argGeom, this._distance);
      } }, { key: "bufferReducedPrecision", value: function() {
        if (arguments.length === 0) {
          for (var e = o.MAX_PRECISION_DIGITS; e >= 0; e--) {
            try {
              this.bufferReducedPrecision(e);
            } catch (c) {
              if (!(c instanceof at)) throw c;
              this._saveException = c;
            }
            if (this._resultGeometry !== null) return null;
          }
          throw this._saveException;
        }
        if (arguments.length === 1) {
          var t = arguments[0], n = o.precisionScaleFactor(this._argGeom, this._distance, t), s = new bt(n);
          this.bufferFixedPrecision(s);
        }
      } }, { key: "computeGeometry", value: function() {
        if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
        var e = this._argGeom.getFactory().getPrecisionModel();
        e.getType() === bt.FIXED ? this.bufferFixedPrecision(e) : this.bufferReducedPrecision();
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._bufParams.setQuadrantSegments(e);
      } }, { key: "bufferOriginalPrecision", value: function() {
        try {
          var e = new Ro(this._bufParams);
          this._resultGeometry = e.buffer(this._argGeom, this._distance);
        } catch (t) {
          if (!(t instanceof we)) throw t;
          this._saveException = t;
        }
      } }, { key: "getResultGeometry", value: function(e) {
        return this._distance = e, this.computeGeometry(), this._resultGeometry;
      } }, { key: "setEndCapStyle", value: function(e) {
        this._bufParams.setEndCapStyle(e);
      } }], [{ key: "constructor_", value: function() {
        if (this._argGeom = null, this._distance = null, this._bufParams = new R(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
          var e = arguments[0];
          this._argGeom = e;
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this._argGeom = t, this._bufParams = n;
        }
      } }, { key: "bufferOp", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1], n = new o(e), s = n.getResultGeometry(t);
          return s;
        }
        if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof J && typeof arguments[1] == "number") {
            var c = arguments[0], h = arguments[1], g = arguments[2], d = new o(c);
            d.setQuadrantSegments(g);
            var E = d.getResultGeometry(h);
            return E;
          }
          if (arguments[2] instanceof R && arguments[0] instanceof J && typeof arguments[1] == "number") {
            var w = arguments[0], N = arguments[1], F = arguments[2], j = new o(w, F), X = j.getResultGeometry(N);
            return X;
          }
        } else if (arguments.length === 4) {
          var $ = arguments[0], re = arguments[1], ce = arguments[2], _e = arguments[3], Re = new o($);
          Re.setQuadrantSegments(ce), Re.setEndCapStyle(_e);
          var je = Re.getResultGeometry(re);
          return je;
        }
      } }, { key: "precisionScaleFactor", value: function(e, t, n) {
        var s = e.getEnvelopeInternal(), c = kn.max(Math.abs(s.getMaxX()), Math.abs(s.getMaxY()), Math.abs(s.getMinX()), Math.abs(s.getMinY())) + 2 * (t > 0 ? t : 0), h = n - Math.trunc(Math.log(c) / Math.log(10) + 1);
        return Math.pow(10, h);
      } }]), o;
    }();
    Hn.CAP_ROUND = R.CAP_ROUND, Hn.CAP_BUTT = R.CAP_FLAT, Hn.CAP_FLAT = R.CAP_FLAT, Hn.CAP_SQUARE = R.CAP_SQUARE, Hn.MAX_PRECISION_DIGITS = 12;
    var Yh = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Do = function() {
      function o(e) {
        i(this, o), this.geometryFactory = e || new Yn();
      }
      return l(o, [{ key: "read", value: function(e) {
        var t, n = (t = typeof e == "string" ? JSON.parse(e) : e).type;
        if (!pt[n]) throw new Error("Unknown GeoJSON type: " + t.type);
        return Yh.indexOf(n) !== -1 ? pt[n].call(this, t.coordinates) : n === "GeometryCollection" ? pt[n].call(this, t.geometries) : pt[n].call(this, t);
      } }, { key: "write", value: function(e) {
        var t = e.getGeometryType();
        if (!At[t]) throw new Error("Geometry is not supported");
        return At[t].call(this, e);
      } }]), o;
    }(), pt = { Feature: function(o) {
      var e = {};
      for (var t in o) e[t] = o[t];
      if (o.geometry) {
        var n = o.geometry.type;
        if (!pt[n]) throw new Error("Unknown GeoJSON type: " + o.type);
        e.geometry = this.read(o.geometry);
      }
      return o.bbox && (e.bbox = pt.bbox.call(this, o.bbox)), e;
    }, FeatureCollection: function(o) {
      var e = {};
      if (o.features) {
        e.features = [];
        for (var t = 0; t < o.features.length; ++t) e.features.push(this.read(o.features[t]));
      }
      return o.bbox && (e.bbox = this.parse.bbox.call(this, o.bbox)), e;
    }, coordinates: function(o) {
      for (var e = [], t = 0; t < o.length; ++t) {
        var n = o[t];
        e.push(_(C, L(n)));
      }
      return e;
    }, bbox: function(o) {
      return this.geometryFactory.createLinearRing([new C(o[0], o[1]), new C(o[2], o[1]), new C(o[2], o[3]), new C(o[0], o[3]), new C(o[0], o[1])]);
    }, Point: function(o) {
      var e = _(C, L(o));
      return this.geometryFactory.createPoint(e);
    }, MultiPoint: function(o) {
      for (var e = [], t = 0; t < o.length; ++t) e.push(pt.Point.call(this, o[t]));
      return this.geometryFactory.createMultiPoint(e);
    }, LineString: function(o) {
      var e = pt.coordinates.call(this, o);
      return this.geometryFactory.createLineString(e);
    }, MultiLineString: function(o) {
      for (var e = [], t = 0; t < o.length; ++t) e.push(pt.LineString.call(this, o[t]));
      return this.geometryFactory.createMultiLineString(e);
    }, Polygon: function(o) {
      for (var e = pt.coordinates.call(this, o[0]), t = this.geometryFactory.createLinearRing(e), n = [], s = 1; s < o.length; ++s) {
        var c = o[s], h = pt.coordinates.call(this, c), g = this.geometryFactory.createLinearRing(h);
        n.push(g);
      }
      return this.geometryFactory.createPolygon(t, n);
    }, MultiPolygon: function(o) {
      for (var e = [], t = 0; t < o.length; ++t) {
        var n = o[t];
        e.push(pt.Polygon.call(this, n));
      }
      return this.geometryFactory.createMultiPolygon(e);
    }, GeometryCollection: function(o) {
      for (var e = [], t = 0; t < o.length; ++t) {
        var n = o[t];
        e.push(this.read(n));
      }
      return this.geometryFactory.createGeometryCollection(e);
    } }, At = { coordinate: function(o) {
      var e = [o.x, o.y];
      return o.z && e.push(o.z), o.m && e.push(o.m), e;
    }, Point: function(o) {
      return { type: "Point", coordinates: At.coordinate.call(this, o.getCoordinate()) };
    }, MultiPoint: function(o) {
      for (var e = [], t = 0; t < o._geometries.length; ++t) {
        var n = o._geometries[t], s = At.Point.call(this, n);
        e.push(s.coordinates);
      }
      return { type: "MultiPoint", coordinates: e };
    }, LineString: function(o) {
      for (var e = [], t = o.getCoordinates(), n = 0; n < t.length; ++n) {
        var s = t[n];
        e.push(At.coordinate.call(this, s));
      }
      return { type: "LineString", coordinates: e };
    }, MultiLineString: function(o) {
      for (var e = [], t = 0; t < o._geometries.length; ++t) {
        var n = o._geometries[t], s = At.LineString.call(this, n);
        e.push(s.coordinates);
      }
      return { type: "MultiLineString", coordinates: e };
    }, Polygon: function(o) {
      var e = [], t = At.LineString.call(this, o._shell);
      e.push(t.coordinates);
      for (var n = 0; n < o._holes.length; ++n) {
        var s = o._holes[n], c = At.LineString.call(this, s);
        e.push(c.coordinates);
      }
      return { type: "Polygon", coordinates: e };
    }, MultiPolygon: function(o) {
      for (var e = [], t = 0; t < o._geometries.length; ++t) {
        var n = o._geometries[t], s = At.Polygon.call(this, n);
        e.push(s.coordinates);
      }
      return { type: "MultiPolygon", coordinates: e };
    }, GeometryCollection: function(o) {
      for (var e = [], t = 0; t < o._geometries.length; ++t) {
        var n = o._geometries[t], s = n.getGeometryType();
        e.push(At[s].call(this, n));
      }
      return { type: "GeometryCollection", geometries: e };
    } };
    return { BufferOp: Hn, GeoJSONReader: function() {
      function o(e) {
        i(this, o), this.parser = new Do(e || new Yn());
      }
      return l(o, [{ key: "read", value: function(e) {
        return this.parser.read(e);
      } }]), o;
    }(), GeoJSONWriter: function() {
      function o() {
        i(this, o), this.parser = new Do(this.geometryFactory);
      }
      return l(o, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }]), o;
    }() };
  });
})(Tf);
var N0 = Tf.exports;
const L0 = /* @__PURE__ */ _c(N0);
function mn() {
  return new Zi();
}
function Zi() {
  this.reset();
}
Zi.prototype = {
  constructor: Zi,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(a) {
    Pl(yi, a, this.t), Pl(this, yi.s, this.s), this.s ? this.t += yi.t : this.s = yi.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var yi = new Zi();
function Pl(a, r, i) {
  var u = a.s = r + i, l = u - r, f = u - l;
  a.t = r - f + (i - l);
}
var Ie = 1e-6, me = Math.PI, Bt = me / 2, Al = me / 4, Gt = me * 2, rn = 180 / me, Et = me / 180, We = Math.abs, T0 = Math.atan, ur = Math.atan2, Me = Math.cos, Pe = Math.sin, vr = Math.sqrt;
function Cf(a) {
  return a > 1 ? 0 : a < -1 ? me : Math.acos(a);
}
function On(a) {
  return a > 1 ? Bt : a < -1 ? -Bt : Math.asin(a);
}
function Dr() {
}
function Qi(a, r) {
  a && Fl.hasOwnProperty(a.type) && Fl[a.type](a, r);
}
var Dl = {
  Feature: function(a, r) {
    Qi(a.geometry, r);
  },
  FeatureCollection: function(a, r) {
    for (var i = a.features, u = -1, l = i.length; ++u < l; ) Qi(i[u].geometry, r);
  }
}, Fl = {
  Sphere: function(a, r) {
    r.sphere();
  },
  Point: function(a, r) {
    a = a.coordinates, r.point(a[0], a[1], a[2]);
  },
  MultiPoint: function(a, r) {
    for (var i = a.coordinates, u = -1, l = i.length; ++u < l; ) a = i[u], r.point(a[0], a[1], a[2]);
  },
  LineString: function(a, r) {
    xa(a.coordinates, r, 0);
  },
  MultiLineString: function(a, r) {
    for (var i = a.coordinates, u = -1, l = i.length; ++u < l; ) xa(i[u], r, 0);
  },
  Polygon: function(a, r) {
    Bl(a.coordinates, r);
  },
  MultiPolygon: function(a, r) {
    for (var i = a.coordinates, u = -1, l = i.length; ++u < l; ) Bl(i[u], r);
  },
  GeometryCollection: function(a, r) {
    for (var i = a.geometries, u = -1, l = i.length; ++u < l; ) Qi(i[u], r);
  }
};
function xa(a, r, i) {
  var u = -1, l = a.length - i, f;
  for (r.lineStart(); ++u < l; ) f = a[u], r.point(f[0], f[1], f[2]);
  r.lineEnd();
}
function Bl(a, r) {
  var i = -1, u = a.length;
  for (r.polygonStart(); ++i < u; ) xa(a[i], r, 1);
  r.polygonEnd();
}
function C0(a, r) {
  a && Dl.hasOwnProperty(a.type) ? Dl[a.type](a, r) : Qi(a, r);
}
mn();
mn();
function Sa(a) {
  return [ur(a[1], a[0]), On(a[2])];
}
function lr(a) {
  var r = a[0], i = a[1], u = Me(i);
  return [u * Me(r), u * Pe(r), Pe(i)];
}
function vi(a, r) {
  return a[0] * r[0] + a[1] * r[1] + a[2] * r[2];
}
function Ki(a, r) {
  return [a[1] * r[2] - a[2] * r[1], a[2] * r[0] - a[0] * r[2], a[0] * r[1] - a[1] * r[0]];
}
function Hs(a, r) {
  a[0] += r[0], a[1] += r[1], a[2] += r[2];
}
function di(a, r) {
  return [a[0] * r, a[1] * r, a[2] * r];
}
function ba(a) {
  var r = vr(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
  a[0] /= r, a[1] /= r, a[2] /= r;
}
mn();
function Of(a, r) {
  function i(u, l) {
    return u = a(u, l), r(u[0], u[1]);
  }
  return a.invert && r.invert && (i.invert = function(u, l) {
    return u = r.invert(u, l), u && a.invert(u[0], u[1]);
  }), i;
}
function Ia(a, r) {
  return [a > me ? a - Gt : a < -me ? a + Gt : a, r];
}
Ia.invert = Ia;
function O0(a, r, i) {
  return (a %= Gt) ? r || i ? Of(ql(a), zl(r, i)) : ql(a) : r || i ? zl(r, i) : Ia;
}
function Gl(a) {
  return function(r, i) {
    return r += a, [r > me ? r - Gt : r < -me ? r + Gt : r, i];
  };
}
function ql(a) {
  var r = Gl(a);
  return r.invert = Gl(-a), r;
}
function zl(a, r) {
  var i = Me(a), u = Pe(a), l = Me(r), f = Pe(r);
  function v(y, m) {
    var _ = Me(m), k = Me(y) * _, p = Pe(y) * _, x = Pe(m), S = x * i + k * u;
    return [
      ur(p * l - S * f, k * i - x * u),
      On(S * l + p * f)
    ];
  }
  return v.invert = function(y, m) {
    var _ = Me(m), k = Me(y) * _, p = Pe(y) * _, x = Pe(m), S = x * l - p * f;
    return [
      ur(p * l + x * f, k * i + S * u),
      On(S * i - k * u)
    ];
  }, v;
}
function R0(a, r, i, u, l, f) {
  if (i) {
    var v = Me(r), y = Pe(r), m = u * i;
    l == null ? (l = r + u * Gt, f = r - m / 2) : (l = Ul(v, l), f = Ul(v, f), (u > 0 ? l < f : l > f) && (l += u * Gt));
    for (var _, k = l; u > 0 ? k > f : k < f; k -= m)
      _ = Sa([v, -y * Me(k), -y * Pe(k)]), a.point(_[0], _[1]);
  }
}
function Ul(a, r) {
  r = lr(r), r[0] -= a, ba(r);
  var i = Cf(-r[1]);
  return ((-r[2] < 0 ? -i : i) + Gt - Ie) % Gt;
}
function Rf() {
  var a = [], r;
  return {
    point: function(i, u) {
      r.push([i, u]);
    },
    lineStart: function() {
      a.push(r = []);
    },
    lineEnd: Dr,
    rejoin: function() {
      a.length > 1 && a.push(a.pop().concat(a.shift()));
    },
    result: function() {
      var i = a;
      return a = [], r = null, i;
    }
  };
}
function M0(a, r, i, u, l, f) {
  var v = a[0], y = a[1], m = r[0], _ = r[1], k = 0, p = 1, x = m - v, S = _ - y, b;
  if (b = i - v, !(!x && b > 0)) {
    if (b /= x, x < 0) {
      if (b < k) return;
      b < p && (p = b);
    } else if (x > 0) {
      if (b > p) return;
      b > k && (k = b);
    }
    if (b = l - v, !(!x && b < 0)) {
      if (b /= x, x < 0) {
        if (b > p) return;
        b > k && (k = b);
      } else if (x > 0) {
        if (b < k) return;
        b < p && (p = b);
      }
      if (b = u - y, !(!S && b > 0)) {
        if (b /= S, S < 0) {
          if (b < k) return;
          b < p && (p = b);
        } else if (S > 0) {
          if (b > p) return;
          b > k && (k = b);
        }
        if (b = f - y, !(!S && b < 0)) {
          if (b /= S, S < 0) {
            if (b > p) return;
            b > k && (k = b);
          } else if (S > 0) {
            if (b < k) return;
            b < p && (p = b);
          }
          return k > 0 && (a[0] = v + k * x, a[1] = y + k * S), p < 1 && (r[0] = v + p * x, r[1] = y + p * S), !0;
        }
      }
    }
  }
}
function Oi(a, r) {
  return We(a[0] - r[0]) < Ie && We(a[1] - r[1]) < Ie;
}
function mi(a, r, i, u) {
  this.x = a, this.z = r, this.o = i, this.e = u, this.v = !1, this.n = this.p = null;
}
function Mf(a, r, i, u, l) {
  var f = [], v = [], y, m;
  if (a.forEach(function(b) {
    if (!((L = b.length - 1) <= 0)) {
      var L, T = b[0], O = b[L], P;
      if (Oi(T, O)) {
        for (l.lineStart(), y = 0; y < L; ++y) l.point((T = b[y])[0], T[1]);
        l.lineEnd();
        return;
      }
      f.push(P = new mi(T, b, null, !0)), v.push(P.o = new mi(T, null, P, !1)), f.push(P = new mi(O, b, null, !1)), v.push(P.o = new mi(O, null, P, !0));
    }
  }), !!f.length) {
    for (v.sort(r), Yl(f), Yl(v), y = 0, m = v.length; y < m; ++y)
      v[y].e = i = !i;
    for (var _ = f[0], k, p; ; ) {
      for (var x = _, S = !0; x.v; ) if ((x = x.n) === _) return;
      k = x.z, l.lineStart();
      do {
        if (x.v = x.o.v = !0, x.e) {
          if (S)
            for (y = 0, m = k.length; y < m; ++y) l.point((p = k[y])[0], p[1]);
          else
            u(x.x, x.n.x, 1, l);
          x = x.n;
        } else {
          if (S)
            for (k = x.p.z, y = k.length - 1; y >= 0; --y) l.point((p = k[y])[0], p[1]);
          else
            u(x.x, x.p.x, -1, l);
          x = x.p;
        }
        x = x.o, k = x.z, S = !S;
      } while (!x.v);
      l.lineEnd();
    }
  }
}
function Yl(a) {
  if (r = a.length) {
    for (var r, i = 0, u = a[0], l; ++i < r; )
      u.n = l = a[i], l.p = u, u = l;
    u.n = l = a[0], l.p = u;
  }
}
function Pf(a, r) {
  return a < r ? -1 : a > r ? 1 : a >= r ? 0 : NaN;
}
function P0(a) {
  return a.length === 1 && (a = A0(a)), {
    left: function(r, i, u, l) {
      for (u == null && (u = 0), l == null && (l = r.length); u < l; ) {
        var f = u + l >>> 1;
        a(r[f], i) < 0 ? u = f + 1 : l = f;
      }
      return u;
    },
    right: function(r, i, u, l) {
      for (u == null && (u = 0), l == null && (l = r.length); u < l; ) {
        var f = u + l >>> 1;
        a(r[f], i) > 0 ? l = f : u = f + 1;
      }
      return u;
    }
  };
}
function A0(a) {
  return function(r, i) {
    return Pf(a(r), i);
  };
}
P0(Pf);
function Af(a) {
  for (var r = a.length, i, u = -1, l = 0, f, v; ++u < r; ) l += a[u].length;
  for (f = new Array(l); --r >= 0; )
    for (v = a[r], i = v.length; --i >= 0; )
      f[--l] = v[i];
  return f;
}
var Fr = 1e9, pi = -Fr;
function D0(a, r, i, u) {
  function l(_, k) {
    return a <= _ && _ <= i && r <= k && k <= u;
  }
  function f(_, k, p, x) {
    var S = 0, b = 0;
    if (_ == null || (S = v(_, p)) !== (b = v(k, p)) || m(_, k) < 0 ^ p > 0)
      do
        x.point(S === 0 || S === 3 ? a : i, S > 1 ? u : r);
      while ((S = (S + p + 4) % 4) !== b);
    else
      x.point(k[0], k[1]);
  }
  function v(_, k) {
    return We(_[0] - a) < Ie ? k > 0 ? 0 : 3 : We(_[0] - i) < Ie ? k > 0 ? 2 : 1 : We(_[1] - r) < Ie ? k > 0 ? 1 : 0 : k > 0 ? 3 : 2;
  }
  function y(_, k) {
    return m(_.x, k.x);
  }
  function m(_, k) {
    var p = v(_, 1), x = v(k, 1);
    return p !== x ? p - x : p === 0 ? k[1] - _[1] : p === 1 ? _[0] - k[0] : p === 2 ? _[1] - k[1] : k[0] - _[0];
  }
  return function(_) {
    var k = _, p = Rf(), x, S, b, L, T, O, P, R, B, M, z, q = {
      point: U,
      lineStart: Z,
      lineEnd: ae,
      polygonStart: H,
      polygonEnd: ee
    };
    function U(Q, ie) {
      l(Q, ie) && k.point(Q, ie);
    }
    function A() {
      for (var Q = 0, ie = 0, de = S.length; ie < de; ++ie)
        for (var Oe = S[ie], Se = 1, K = Oe.length, Fe = Oe[0], we, ze, fe = Fe[0], ht = Fe[1]; Se < K; ++Se)
          we = fe, ze = ht, Fe = Oe[Se], fe = Fe[0], ht = Fe[1], ze <= u ? ht > u && (fe - we) * (u - ze) > (ht - ze) * (a - we) && ++Q : ht <= u && (fe - we) * (u - ze) < (ht - ze) * (a - we) && --Q;
      return Q;
    }
    function H() {
      k = p, x = [], S = [], z = !0;
    }
    function ee() {
      var Q = A(), ie = z && Q, de = (x = Af(x)).length;
      (ie || de) && (_.polygonStart(), ie && (_.lineStart(), f(null, null, 1, _), _.lineEnd()), de && Mf(x, y, Q, f, _), _.polygonEnd()), k = _, x = S = b = null;
    }
    function Z() {
      q.point = D, S && S.push(b = []), M = !0, B = !1, P = R = NaN;
    }
    function ae() {
      x && (D(L, T), O && B && p.rejoin(), x.push(p.result())), q.point = U, B && k.lineEnd();
    }
    function D(Q, ie) {
      var de = l(Q, ie);
      if (S && b.push([Q, ie]), M)
        L = Q, T = ie, O = de, M = !1, de && (k.lineStart(), k.point(Q, ie));
      else if (de && B) k.point(Q, ie);
      else {
        var Oe = [P = Math.max(pi, Math.min(Fr, P)), R = Math.max(pi, Math.min(Fr, R))], Se = [Q = Math.max(pi, Math.min(Fr, Q)), ie = Math.max(pi, Math.min(Fr, ie))];
        M0(Oe, Se, a, r, i, u) ? (B || (k.lineStart(), k.point(Oe[0], Oe[1])), k.point(Se[0], Se[1]), de || k.lineEnd(), z = !1) : de && (k.lineStart(), k.point(Q, ie), z = !1);
      }
      P = Q, R = ie, B = de;
    }
    return q;
  };
}
var Zs = mn();
function F0(a, r) {
  var i = r[0], u = r[1], l = [Pe(i), -Me(i), 0], f = 0, v = 0;
  Zs.reset();
  for (var y = 0, m = a.length; y < m; ++y)
    if (k = (_ = a[y]).length)
      for (var _, k, p = _[k - 1], x = p[0], S = p[1] / 2 + Al, b = Pe(S), L = Me(S), T = 0; T < k; ++T, x = P, b = B, L = M, p = O) {
        var O = _[T], P = O[0], R = O[1] / 2 + Al, B = Pe(R), M = Me(R), z = P - x, q = z >= 0 ? 1 : -1, U = q * z, A = U > me, H = b * B;
        if (Zs.add(ur(H * q * Pe(U), L * M + H * Me(U))), f += A ? z + q * Gt : z, A ^ x >= i ^ P >= i) {
          var ee = Ki(lr(p), lr(O));
          ba(ee);
          var Z = Ki(l, ee);
          ba(Z);
          var ae = (A ^ z >= 0 ? -1 : 1) * On(Z[2]);
          (u > ae || u === ae && (ee[0] || ee[1])) && (v += A ^ z >= 0 ? 1 : -1);
        }
      }
  return (f < -Ie || f < Ie && Zs < -Ie) ^ v & 1;
}
mn();
function Wl(a) {
  return a;
}
mn();
mn();
var cr = 1 / 0, Ji = cr, Vr = -cr, $i = Vr, Xl = {
  point: B0,
  lineStart: Dr,
  lineEnd: Dr,
  polygonStart: Dr,
  polygonEnd: Dr,
  result: function() {
    var a = [[cr, Ji], [Vr, $i]];
    return Vr = $i = -(Ji = cr = 1 / 0), a;
  }
};
function B0(a, r) {
  a < cr && (cr = a), a > Vr && (Vr = a), r < Ji && (Ji = r), r > $i && ($i = r);
}
mn();
function Df(a, r, i, u) {
  return function(l, f) {
    var v = r(f), y = l.invert(u[0], u[1]), m = Rf(), _ = r(m), k = !1, p, x, S, b = {
      point: L,
      lineStart: O,
      lineEnd: P,
      polygonStart: function() {
        b.point = R, b.lineStart = B, b.lineEnd = M, x = [], p = [];
      },
      polygonEnd: function() {
        b.point = L, b.lineStart = O, b.lineEnd = P, x = Af(x);
        var z = F0(p, y);
        x.length ? (k || (f.polygonStart(), k = !0), Mf(x, q0, z, i, f)) : z && (k || (f.polygonStart(), k = !0), f.lineStart(), i(null, null, 1, f), f.lineEnd()), k && (f.polygonEnd(), k = !1), x = p = null;
      },
      sphere: function() {
        f.polygonStart(), f.lineStart(), i(null, null, 1, f), f.lineEnd(), f.polygonEnd();
      }
    };
    function L(z, q) {
      var U = l(z, q);
      a(z = U[0], q = U[1]) && f.point(z, q);
    }
    function T(z, q) {
      var U = l(z, q);
      v.point(U[0], U[1]);
    }
    function O() {
      b.point = T, v.lineStart();
    }
    function P() {
      b.point = L, v.lineEnd();
    }
    function R(z, q) {
      S.push([z, q]);
      var U = l(z, q);
      _.point(U[0], U[1]);
    }
    function B() {
      _.lineStart(), S = [];
    }
    function M() {
      R(S[0][0], S[0][1]), _.lineEnd();
      var z = _.clean(), q = m.result(), U, A = q.length, H, ee, Z;
      if (S.pop(), p.push(S), S = null, !!A) {
        if (z & 1) {
          if (ee = q[0], (H = ee.length - 1) > 0) {
            for (k || (f.polygonStart(), k = !0), f.lineStart(), U = 0; U < H; ++U) f.point((Z = ee[U])[0], Z[1]);
            f.lineEnd();
          }
          return;
        }
        A > 1 && z & 2 && q.push(q.pop().concat(q.shift())), x.push(q.filter(G0));
      }
    }
    return b;
  };
}
function G0(a) {
  return a.length > 1;
}
function q0(a, r) {
  return ((a = a.x)[0] < 0 ? a[1] - Bt - Ie : Bt - a[1]) - ((r = r.x)[0] < 0 ? r[1] - Bt - Ie : Bt - r[1]);
}
const jl = Df(
  function() {
    return !0;
  },
  z0,
  Y0,
  [-me, -Bt]
);
function z0(a) {
  var r = NaN, i = NaN, u = NaN, l;
  return {
    lineStart: function() {
      a.lineStart(), l = 1;
    },
    point: function(f, v) {
      var y = f > 0 ? me : -me, m = We(f - r);
      We(m - me) < Ie ? (a.point(r, i = (i + v) / 2 > 0 ? Bt : -Bt), a.point(u, i), a.lineEnd(), a.lineStart(), a.point(y, i), a.point(f, i), l = 0) : u !== y && m >= me && (We(r - u) < Ie && (r -= u * Ie), We(f - y) < Ie && (f -= y * Ie), i = U0(r, i, f, v), a.point(u, i), a.lineEnd(), a.lineStart(), a.point(y, i), l = 0), a.point(r = f, i = v), u = y;
    },
    lineEnd: function() {
      a.lineEnd(), r = i = NaN;
    },
    clean: function() {
      return 2 - l;
    }
  };
}
function U0(a, r, i, u) {
  var l, f, v = Pe(a - i);
  return We(v) > Ie ? T0((Pe(r) * (f = Me(u)) * Pe(i) - Pe(u) * (l = Me(r)) * Pe(a)) / (l * f * v)) : (r + u) / 2;
}
function Y0(a, r, i, u) {
  var l;
  if (a == null)
    l = i * Bt, u.point(-me, l), u.point(0, l), u.point(me, l), u.point(me, 0), u.point(me, -l), u.point(0, -l), u.point(-me, -l), u.point(-me, 0), u.point(-me, l);
  else if (We(a[0] - r[0]) > Ie) {
    var f = a[0] < r[0] ? me : -me;
    l = i * f / 2, u.point(-f, l), u.point(0, l), u.point(f, l);
  } else
    u.point(r[0], r[1]);
}
function W0(a, r) {
  var i = Me(a), u = i > 0, l = We(i) > Ie;
  function f(k, p, x, S) {
    R0(S, a, r, x, k, p);
  }
  function v(k, p) {
    return Me(k) * Me(p) > i;
  }
  function y(k) {
    var p, x, S, b, L;
    return {
      lineStart: function() {
        b = S = !1, L = 1;
      },
      point: function(T, O) {
        var P = [T, O], R, B = v(T, O), M = u ? B ? 0 : _(T, O) : B ? _(T + (T < 0 ? me : -me), O) : 0;
        if (!p && (b = S = B) && k.lineStart(), B !== S && (R = m(p, P), (!R || Oi(p, R) || Oi(P, R)) && (P[0] += Ie, P[1] += Ie, B = v(P[0], P[1]))), B !== S)
          L = 0, B ? (k.lineStart(), R = m(P, p), k.point(R[0], R[1])) : (R = m(p, P), k.point(R[0], R[1]), k.lineEnd()), p = R;
        else if (l && p && u ^ B) {
          var z;
          !(M & x) && (z = m(P, p, !0)) && (L = 0, u ? (k.lineStart(), k.point(z[0][0], z[0][1]), k.point(z[1][0], z[1][1]), k.lineEnd()) : (k.point(z[1][0], z[1][1]), k.lineEnd(), k.lineStart(), k.point(z[0][0], z[0][1])));
        }
        B && (!p || !Oi(p, P)) && k.point(P[0], P[1]), p = P, S = B, x = M;
      },
      lineEnd: function() {
        S && k.lineEnd(), p = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return L | (b && S) << 1;
      }
    };
  }
  function m(k, p, x) {
    var S = lr(k), b = lr(p), L = [1, 0, 0], T = Ki(S, b), O = vi(T, T), P = T[0], R = O - P * P;
    if (!R) return !x && k;
    var B = i * O / R, M = -i * P / R, z = Ki(L, T), q = di(L, B), U = di(T, M);
    Hs(q, U);
    var A = z, H = vi(q, A), ee = vi(A, A), Z = H * H - ee * (vi(q, q) - 1);
    if (!(Z < 0)) {
      var ae = vr(Z), D = di(A, (-H - ae) / ee);
      if (Hs(D, q), D = Sa(D), !x) return D;
      var Q = k[0], ie = p[0], de = k[1], Oe = p[1], Se;
      ie < Q && (Se = Q, Q = ie, ie = Se);
      var K = ie - Q, Fe = We(K - me) < Ie, we = Fe || K < Ie;
      if (!Fe && Oe < de && (Se = de, de = Oe, Oe = Se), we ? Fe ? de + Oe > 0 ^ D[1] < (We(D[0] - Q) < Ie ? de : Oe) : de <= D[1] && D[1] <= Oe : K > me ^ (Q <= D[0] && D[0] <= ie)) {
        var ze = di(A, (-H + ae) / ee);
        return Hs(ze, q), [D, Sa(ze)];
      }
    }
  }
  function _(k, p) {
    var x = u ? a : me - a, S = 0;
    return k < -x ? S |= 1 : k > x && (S |= 2), p < -x ? S |= 4 : p > x && (S |= 8), S;
  }
  return Df(v, y, f, u ? [0, -a] : [-me, a - me]);
}
function Ff(a) {
  return function(r) {
    var i = new wa();
    for (var u in a) i[u] = a[u];
    return i.stream = r, i;
  };
}
function wa() {
}
wa.prototype = {
  constructor: wa,
  point: function(a, r) {
    this.stream.point(a, r);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Bf(a, r, i) {
  var u = r[1][0] - r[0][0], l = r[1][1] - r[0][1], f = a.clipExtent && a.clipExtent();
  a.scale(150).translate([0, 0]), f != null && a.clipExtent(null), C0(i, a.stream(Xl));
  var v = Xl.result(), y = Math.min(u / (v[1][0] - v[0][0]), l / (v[1][1] - v[0][1])), m = +r[0][0] + (u - y * (v[1][0] + v[0][0])) / 2, _ = +r[0][1] + (l - y * (v[1][1] + v[0][1])) / 2;
  return f != null && a.clipExtent(f), a.scale(y * 150).translate([m, _]);
}
function X0(a, r, i) {
  return Bf(a, [[0, 0], r], i);
}
var Vl = 16, j0 = Me(30 * Et);
function Hl(a, r) {
  return +r ? H0(a, r) : V0(a);
}
function V0(a) {
  return Ff({
    point: function(r, i) {
      r = a(r, i), this.stream.point(r[0], r[1]);
    }
  });
}
function H0(a, r) {
  function i(u, l, f, v, y, m, _, k, p, x, S, b, L, T) {
    var O = _ - u, P = k - l, R = O * O + P * P;
    if (R > 4 * r && L--) {
      var B = v + x, M = y + S, z = m + b, q = vr(B * B + M * M + z * z), U = On(z /= q), A = We(We(z) - 1) < Ie || We(f - p) < Ie ? (f + p) / 2 : ur(M, B), H = a(A, U), ee = H[0], Z = H[1], ae = ee - u, D = Z - l, Q = P * ae - O * D;
      (Q * Q / R > r || We((O * ae + P * D) / R - 0.5) > 0.3 || v * x + y * S + m * b < j0) && (i(u, l, f, v, y, m, ee, Z, A, B /= q, M /= q, z, L, T), T.point(ee, Z), i(ee, Z, A, B, M, z, _, k, p, x, S, b, L, T));
    }
  }
  return function(u) {
    var l, f, v, y, m, _, k, p, x, S, b, L, T = {
      point: O,
      lineStart: P,
      lineEnd: B,
      polygonStart: function() {
        u.polygonStart(), T.lineStart = M;
      },
      polygonEnd: function() {
        u.polygonEnd(), T.lineStart = P;
      }
    };
    function O(U, A) {
      U = a(U, A), u.point(U[0], U[1]);
    }
    function P() {
      p = NaN, T.point = R, u.lineStart();
    }
    function R(U, A) {
      var H = lr([U, A]), ee = a(U, A);
      i(p, x, k, S, b, L, p = ee[0], x = ee[1], k = U, S = H[0], b = H[1], L = H[2], Vl, u), u.point(p, x);
    }
    function B() {
      T.point = O, u.lineEnd();
    }
    function M() {
      P(), T.point = z, T.lineEnd = q;
    }
    function z(U, A) {
      R(l = U, A), f = p, v = x, y = S, m = b, _ = L, T.point = R;
    }
    function q() {
      i(p, x, k, S, b, L, f, v, l, y, m, _, Vl, u), T.lineEnd = B, B();
    }
    return T;
  };
}
var Z0 = Ff({
  point: function(a, r) {
    this.stream.point(a * Et, r * Et);
  }
});
function Q0(a) {
  return K0(function() {
    return a;
  })();
}
function K0(a) {
  var r, i = 150, u = 480, l = 250, f, v, y = 0, m = 0, _ = 0, k = 0, p = 0, x, S, b = null, L = jl, T = null, O, P, R, B = Wl, M = 0.5, z = Hl(ee, M), q, U;
  function A(D) {
    return D = S(D[0] * Et, D[1] * Et), [D[0] * i + f, v - D[1] * i];
  }
  function H(D) {
    return D = S.invert((D[0] - f) / i, (v - D[1]) / i), D && [D[0] * rn, D[1] * rn];
  }
  function ee(D, Q) {
    return D = r(D, Q), [D[0] * i + f, v - D[1] * i];
  }
  A.stream = function(D) {
    return q && U === D ? q : q = Z0(L(x, z(B(U = D))));
  }, A.clipAngle = function(D) {
    return arguments.length ? (L = +D ? W0(b = D * Et, 6 * Et) : (b = null, jl), ae()) : b * rn;
  }, A.clipExtent = function(D) {
    return arguments.length ? (B = D == null ? (T = O = P = R = null, Wl) : D0(T = +D[0][0], O = +D[0][1], P = +D[1][0], R = +D[1][1]), ae()) : T == null ? null : [[T, O], [P, R]];
  }, A.scale = function(D) {
    return arguments.length ? (i = +D, Z()) : i;
  }, A.translate = function(D) {
    return arguments.length ? (u = +D[0], l = +D[1], Z()) : [u, l];
  }, A.center = function(D) {
    return arguments.length ? (y = D[0] % 360 * Et, m = D[1] % 360 * Et, Z()) : [y * rn, m * rn];
  }, A.rotate = function(D) {
    return arguments.length ? (_ = D[0] % 360 * Et, k = D[1] % 360 * Et, p = D.length > 2 ? D[2] % 360 * Et : 0, Z()) : [_ * rn, k * rn, p * rn];
  }, A.precision = function(D) {
    return arguments.length ? (z = Hl(ee, M = D * D), ae()) : vr(M);
  }, A.fitExtent = function(D, Q) {
    return Bf(A, D, Q);
  }, A.fitSize = function(D, Q) {
    return X0(A, D, Q);
  };
  function Z() {
    S = Of(x = O0(_, k, p), r);
    var D = r(y, m);
    return f = u - D[0] * i, v = l + D[1] * i, ae();
  }
  function ae() {
    return q = U = null, A;
  }
  return function() {
    return r = a.apply(this, arguments), A.invert = r.invert && H, Z();
  };
}
function Gf(a) {
  return function(r, i) {
    var u = Me(r), l = Me(i), f = a(u * l);
    return [
      f * l * Pe(r),
      f * Pe(i)
    ];
  };
}
function qf(a) {
  return function(r, i) {
    var u = vr(r * r + i * i), l = a(u), f = Pe(l), v = Me(l);
    return [
      ur(r * f, u * v),
      On(u && i * f / u)
    ];
  };
}
var J0 = Gf(function(a) {
  return vr(2 / (1 + a));
});
J0.invert = qf(function(a) {
  return 2 * On(a / 2);
});
var zf = Gf(function(a) {
  return (a = Cf(a)) && a / Pe(a);
});
zf.invert = qf(function(a) {
  return a;
});
function $0() {
  return Q0(zf).scale(79.4188).clipAngle(180 - 1e-3);
}
function Zl(a, r) {
  return [a, r];
}
Zl.invert = Zl;
var e_ = Object.defineProperty, dr = (a, r) => e_(a, "name", { value: r, configurable: !0 }), { BufferOp: t_, GeoJSONReader: n_, GeoJSONWriter: r_ } = L0;
function Uf(a, r, i) {
  i = i || {};
  var u = i.units || "kilometers", l = i.steps || 8;
  if (!a)
    throw new Error("geojson is required");
  if (typeof i != "object")
    throw new Error("options must be an object");
  if (typeof l != "number")
    throw new Error("steps must be an number");
  if (r === void 0)
    throw new Error("radius is required");
  if (l <= 0)
    throw new Error("steps must be greater than 0");
  var f = [];
  switch (a.type) {
    case "GeometryCollection":
      return yr(a, function(v) {
        var y = Ur(v, r, u, l);
        y && f.push(y);
      }), $t(f);
    case "FeatureCollection":
      return Hi(a, function(v) {
        var y = Ur(v, r, u, l);
        y && Hi(y, function(m) {
          m && f.push(m);
        });
      }), $t(f);
  }
  return Ur(a, r, u, l);
}
dr(Uf, "buffer");
function Ur(a, r, i, u) {
  var l = a.properties || {}, f = a.type === "Feature" ? a.geometry : a;
  if (f.type === "GeometryCollection") {
    var v = [];
    return yr(a, function(L) {
      var T = Ur(L, r, i, u);
      T && v.push(T);
    }), $t(v);
  }
  var y = Yf(f), m = {
    type: f.type,
    coordinates: $a(f.coordinates, y)
  }, _ = new n_(), k = _.read(m), p = Qa(is(r, i), "meters"), x = t_.bufferOp(k, p, u), S = new r_();
  if (x = S.write(x), !Ja(x.coordinates)) {
    var b = {
      type: x.type,
      coordinates: eo(x.coordinates, y)
    };
    return Ot(b, l);
  }
}
dr(Ur, "bufferFeature");
function Ja(a) {
  return Array.isArray(a[0]) ? Ja(a[0]) : isNaN(a[0]);
}
dr(Ja, "coordsIsNaN");
function $a(a, r) {
  return typeof a[0] != "object" ? r(a) : a.map(function(i) {
    return $a(i, r);
  });
}
dr($a, "projectCoords");
function eo(a, r) {
  return typeof a[0] != "object" ? r.invert(a) : a.map(function(i) {
    return eo(i, r);
  });
}
dr(eo, "unprojectCoords");
function Yf(a) {
  var r = Lf(a).geometry.coordinates, i = [-r[0], -r[1]];
  return $0().rotate(i).scale(it);
}
dr(Yf, "defineProjection");
var i_ = Uf;
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
function s_(a, r) {
  var i = { label: 0, sent: function() {
    if (f[0] & 1) throw f[1];
    return f[1];
  }, trys: [], ops: [] }, u, l, f, v;
  return v = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
    return this;
  }), v;
  function y(_) {
    return function(k) {
      return m([_, k]);
    };
  }
  function m(_) {
    if (u) throw new TypeError("Generator is already executing.");
    for (; i; ) try {
      if (u = 1, l && (f = _[0] & 2 ? l.return : _[0] ? l.throw || ((f = l.return) && f.call(l), 0) : l.next) && !(f = f.call(l, _[1])).done) return f;
      switch (l = 0, f && (_ = [_[0] & 2, f.value]), _[0]) {
        case 0:
        case 1:
          f = _;
          break;
        case 4:
          return i.label++, { value: _[1], done: !1 };
        case 5:
          i.label++, l = _[1], _ = [0];
          continue;
        case 7:
          _ = i.ops.pop(), i.trys.pop();
          continue;
        default:
          if (f = i.trys, !(f = f.length > 0 && f[f.length - 1]) && (_[0] === 6 || _[0] === 2)) {
            i = 0;
            continue;
          }
          if (_[0] === 3 && (!f || _[1] > f[0] && _[1] < f[3])) {
            i.label = _[1];
            break;
          }
          if (_[0] === 6 && i.label < f[1]) {
            i.label = f[1], f = _;
            break;
          }
          if (f && i.label < f[2]) {
            i.label = f[2], i.ops.push(_);
            break;
          }
          f[2] && i.ops.pop(), i.trys.pop();
          continue;
      }
      _ = r.call(a, i);
    } catch (k) {
      _ = [6, k], l = 0;
    } finally {
      u = f = 0;
    }
    if (_[0] & 5) throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}
var gn = (
  /** @class */
  /* @__PURE__ */ function() {
    function a(r, i) {
      this.next = null, this.key = r, this.data = i, this.left = null, this.right = null;
    }
    return a;
  }()
);
function a_(a, r) {
  return a > r ? 1 : a < r ? -1 : 0;
}
function an(a, r, i) {
  for (var u = new gn(null, null), l = u, f = u; ; ) {
    var v = i(a, r.key);
    if (v < 0) {
      if (r.left === null)
        break;
      if (i(a, r.left.key) < 0) {
        var y = r.left;
        if (r.left = y.right, y.right = r, r = y, r.left === null)
          break;
      }
      f.left = r, f = r, r = r.left;
    } else if (v > 0) {
      if (r.right === null)
        break;
      if (i(a, r.right.key) > 0) {
        var y = r.right;
        if (r.right = y.left, y.left = r, r = y, r.right === null)
          break;
      }
      l.right = r, l = r, r = r.right;
    } else
      break;
  }
  return l.right = r.left, f.left = r.right, r.left = u.right, r.right = u.left, r;
}
function Qs(a, r, i, u) {
  var l = new gn(a, r);
  if (i === null)
    return l.left = l.right = null, l;
  i = an(a, i, u);
  var f = u(a, i.key);
  return f < 0 ? (l.left = i.left, l.right = i, i.left = null) : f >= 0 && (l.right = i.right, l.left = i, i.right = null), l;
}
function Ql(a, r, i) {
  var u = null, l = null;
  if (r) {
    r = an(a, r, i);
    var f = i(r.key, a);
    f === 0 ? (u = r.left, l = r.right) : f < 0 ? (l = r.right, r.right = null, u = r) : (u = r.left, r.left = null, l = r);
  }
  return { left: u, right: l };
}
function o_(a, r, i) {
  return r === null ? a : (a === null || (r = an(a.key, r, i), r.left = a), r);
}
function Na(a, r, i, u, l) {
  if (a) {
    u("" + r + (i ? "└── " : "├── ") + l(a) + `
`);
    var f = r + (i ? "    " : "│   ");
    a.left && Na(a.left, f, !1, u, l), a.right && Na(a.right, f, !0, u, l);
  }
}
var to = (
  /** @class */
  function() {
    function a(r) {
      r === void 0 && (r = a_), this._root = null, this._size = 0, this._comparator = r;
    }
    return a.prototype.insert = function(r, i) {
      return this._size++, this._root = Qs(r, i, this._root, this._comparator);
    }, a.prototype.add = function(r, i) {
      var u = new gn(r, i);
      this._root === null && (u.left = u.right = null, this._size++, this._root = u);
      var l = this._comparator, f = an(r, this._root, l), v = l(r, f.key);
      return v === 0 ? this._root = f : (v < 0 ? (u.left = f.left, u.right = f, f.left = null) : v > 0 && (u.right = f.right, u.left = f, f.right = null), this._size++, this._root = u), this._root;
    }, a.prototype.remove = function(r) {
      this._root = this._remove(r, this._root, this._comparator);
    }, a.prototype._remove = function(r, i, u) {
      var l;
      if (i === null)
        return null;
      i = an(r, i, u);
      var f = u(r, i.key);
      return f === 0 ? (i.left === null ? l = i.right : (l = an(r, i.left, u), l.right = i.right), this._size--, l) : i;
    }, a.prototype.pop = function() {
      var r = this._root;
      if (r) {
        for (; r.left; )
          r = r.left;
        return this._root = an(r.key, this._root, this._comparator), this._root = this._remove(r.key, this._root, this._comparator), { key: r.key, data: r.data };
      }
      return null;
    }, a.prototype.findStatic = function(r) {
      for (var i = this._root, u = this._comparator; i; ) {
        var l = u(r, i.key);
        if (l === 0)
          return i;
        l < 0 ? i = i.left : i = i.right;
      }
      return null;
    }, a.prototype.find = function(r) {
      return this._root && (this._root = an(r, this._root, this._comparator), this._comparator(r, this._root.key) !== 0) ? null : this._root;
    }, a.prototype.contains = function(r) {
      for (var i = this._root, u = this._comparator; i; ) {
        var l = u(r, i.key);
        if (l === 0)
          return !0;
        l < 0 ? i = i.left : i = i.right;
      }
      return !1;
    }, a.prototype.forEach = function(r, i) {
      for (var u = this._root, l = [], f = !1; !f; )
        u !== null ? (l.push(u), u = u.left) : l.length !== 0 ? (u = l.pop(), r.call(i, u), u = u.right) : f = !0;
      return this;
    }, a.prototype.range = function(r, i, u, l) {
      for (var f = [], v = this._comparator, y = this._root, m; f.length !== 0 || y; )
        if (y)
          f.push(y), y = y.left;
        else {
          if (y = f.pop(), m = v(y.key, i), m > 0)
            break;
          if (v(y.key, r) >= 0 && u.call(l, y))
            return this;
          y = y.right;
        }
      return this;
    }, a.prototype.keys = function() {
      var r = [];
      return this.forEach(function(i) {
        var u = i.key;
        return r.push(u);
      }), r;
    }, a.prototype.values = function() {
      var r = [];
      return this.forEach(function(i) {
        var u = i.data;
        return r.push(u);
      }), r;
    }, a.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, a.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, a.prototype.minNode = function(r) {
      if (r === void 0 && (r = this._root), r)
        for (; r.left; )
          r = r.left;
      return r;
    }, a.prototype.maxNode = function(r) {
      if (r === void 0 && (r = this._root), r)
        for (; r.right; )
          r = r.right;
      return r;
    }, a.prototype.at = function(r) {
      for (var i = this._root, u = !1, l = 0, f = []; !u; )
        if (i)
          f.push(i), i = i.left;
        else if (f.length > 0) {
          if (i = f.pop(), l === r)
            return i;
          l++, i = i.right;
        } else
          u = !0;
      return null;
    }, a.prototype.next = function(r) {
      var i = this._root, u = null;
      if (r.right) {
        for (u = r.right; u.left; )
          u = u.left;
        return u;
      }
      for (var l = this._comparator; i; ) {
        var f = l(r.key, i.key);
        if (f === 0)
          break;
        f < 0 ? (u = i, i = i.left) : i = i.right;
      }
      return u;
    }, a.prototype.prev = function(r) {
      var i = this._root, u = null;
      if (r.left !== null) {
        for (u = r.left; u.right; )
          u = u.right;
        return u;
      }
      for (var l = this._comparator; i; ) {
        var f = l(r.key, i.key);
        if (f === 0)
          break;
        f < 0 ? i = i.left : (u = i, i = i.right);
      }
      return u;
    }, a.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, a.prototype.toList = function() {
      return l_(this._root);
    }, a.prototype.load = function(r, i, u) {
      i === void 0 && (i = []), u === void 0 && (u = !1);
      var l = r.length, f = this._comparator;
      if (u && Ca(r, i, 0, l - 1, f), this._root === null)
        this._root = La(r, i, 0, l), this._size = l;
      else {
        var v = c_(this.toList(), u_(r, i), f);
        l = this._size + l, this._root = Ta({ head: v }, 0, l);
      }
      return this;
    }, a.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(a.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(a.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), a.prototype.toString = function(r) {
      r === void 0 && (r = function(u) {
        return String(u.key);
      });
      var i = [];
      return Na(this._root, "", !0, function(u) {
        return i.push(u);
      }, r), i.join("");
    }, a.prototype.update = function(r, i, u) {
      var l = this._comparator, f = Ql(r, this._root, l), v = f.left, y = f.right;
      l(r, i) < 0 ? y = Qs(i, u, y, l) : v = Qs(i, u, v, l), this._root = o_(v, y, l);
    }, a.prototype.split = function(r) {
      return Ql(r, this._root, this._comparator);
    }, a.prototype[Symbol.iterator] = function() {
      var r, i, u;
      return s_(this, function(l) {
        switch (l.label) {
          case 0:
            r = this._root, i = [], u = !1, l.label = 1;
          case 1:
            return u ? [3, 6] : r === null ? [3, 2] : (i.push(r), r = r.left, [3, 5]);
          case 2:
            return i.length === 0 ? [3, 4] : (r = i.pop(), [4, r]);
          case 3:
            return l.sent(), r = r.right, [3, 5];
          case 4:
            u = !0, l.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, a;
  }()
);
function La(a, r, i, u) {
  var l = u - i;
  if (l > 0) {
    var f = i + Math.floor(l / 2), v = a[f], y = r[f], m = new gn(v, y);
    return m.left = La(a, r, i, f), m.right = La(a, r, f + 1, u), m;
  }
  return null;
}
function u_(a, r) {
  for (var i = new gn(null, null), u = i, l = 0; l < a.length; l++)
    u = u.next = new gn(a[l], r[l]);
  return u.next = null, i.next;
}
function l_(a) {
  for (var r = a, i = [], u = !1, l = new gn(null, null), f = l; !u; )
    r ? (i.push(r), r = r.left) : i.length > 0 ? (r = f = f.next = i.pop(), r = r.right) : u = !0;
  return f.next = null, l.next;
}
function Ta(a, r, i) {
  var u = i - r;
  if (u > 0) {
    var l = r + Math.floor(u / 2), f = Ta(a, r, l), v = a.head;
    return v.left = f, a.head = a.head.next, v.right = Ta(a, l + 1, i), v;
  }
  return null;
}
function c_(a, r, i) {
  for (var u = new gn(null, null), l = u, f = a, v = r; f !== null && v !== null; )
    i(f.key, v.key) < 0 ? (l.next = f, f = f.next) : (l.next = v, v = v.next), l = l.next;
  return f !== null ? l.next = f : v !== null && (l.next = v), u.next;
}
function Ca(a, r, i, u, l) {
  if (!(i >= u)) {
    for (var f = a[i + u >> 1], v = i - 1, y = u + 1; ; ) {
      do
        v++;
      while (l(a[v], f) < 0);
      do
        y--;
      while (l(a[y], f) > 0);
      if (v >= y)
        break;
      var m = a[v];
      a[v] = a[y], a[y] = m, m = r[v], r[v] = r[y], r[y] = m;
    }
    Ca(a, r, i, y, l), Ca(a, r, y + 1, u, l);
  }
}
const Qt = 11102230246251565e-32, Ve = 134217729, f_ = (3 + 8 * Qt) * Qt;
function Ks(a, r, i, u, l) {
  let f, v, y, m, _ = r[0], k = u[0], p = 0, x = 0;
  k > _ == k > -_ ? (f = _, _ = r[++p]) : (f = k, k = u[++x]);
  let S = 0;
  if (p < a && x < i)
    for (k > _ == k > -_ ? (v = _ + f, y = f - (v - _), _ = r[++p]) : (v = k + f, y = f - (v - k), k = u[++x]), f = v, y !== 0 && (l[S++] = y); p < a && x < i; )
      k > _ == k > -_ ? (v = f + _, m = v - f, y = f - (v - m) + (_ - m), _ = r[++p]) : (v = f + k, m = v - f, y = f - (v - m) + (k - m), k = u[++x]), f = v, y !== 0 && (l[S++] = y);
  for (; p < a; )
    v = f + _, m = v - f, y = f - (v - m) + (_ - m), _ = r[++p], f = v, y !== 0 && (l[S++] = y);
  for (; x < i; )
    v = f + k, m = v - f, y = f - (v - m) + (k - m), k = u[++x], f = v, y !== 0 && (l[S++] = y);
  return (f !== 0 || S === 0) && (l[S++] = f), S;
}
function h_(a, r) {
  let i = r[0];
  for (let u = 1; u < a; u++) i += r[u];
  return i;
}
function Kr(a) {
  return new Float64Array(a);
}
const g_ = (3 + 16 * Qt) * Qt, y_ = (2 + 12 * Qt) * Qt, v_ = (9 + 64 * Qt) * Qt * Qt, $n = Kr(4), Kl = Kr(8), Jl = Kr(12), $l = Kr(16), $e = Kr(4);
function d_(a, r, i, u, l, f, v) {
  let y, m, _, k, p, x, S, b, L, T, O, P, R, B, M, z, q, U;
  const A = a - l, H = i - l, ee = r - f, Z = u - f;
  B = A * Z, x = Ve * A, S = x - (x - A), b = A - S, x = Ve * Z, L = x - (x - Z), T = Z - L, M = b * T - (B - S * L - b * L - S * T), z = ee * H, x = Ve * ee, S = x - (x - ee), b = ee - S, x = Ve * H, L = x - (x - H), T = H - L, q = b * T - (z - S * L - b * L - S * T), O = M - q, p = M - O, $n[0] = M - (O + p) + (p - q), P = B + O, p = P - B, R = B - (P - p) + (O - p), O = R - z, p = R - O, $n[1] = R - (O + p) + (p - z), U = P + O, p = U - P, $n[2] = P - (U - p) + (O - p), $n[3] = U;
  let ae = h_(4, $n), D = y_ * v;
  if (ae >= D || -ae >= D || (p = a - A, y = a - (A + p) + (p - l), p = i - H, _ = i - (H + p) + (p - l), p = r - ee, m = r - (ee + p) + (p - f), p = u - Z, k = u - (Z + p) + (p - f), y === 0 && m === 0 && _ === 0 && k === 0) || (D = v_ * v + f_ * Math.abs(ae), ae += A * k + Z * y - (ee * _ + H * m), ae >= D || -ae >= D)) return ae;
  B = y * Z, x = Ve * y, S = x - (x - y), b = y - S, x = Ve * Z, L = x - (x - Z), T = Z - L, M = b * T - (B - S * L - b * L - S * T), z = m * H, x = Ve * m, S = x - (x - m), b = m - S, x = Ve * H, L = x - (x - H), T = H - L, q = b * T - (z - S * L - b * L - S * T), O = M - q, p = M - O, $e[0] = M - (O + p) + (p - q), P = B + O, p = P - B, R = B - (P - p) + (O - p), O = R - z, p = R - O, $e[1] = R - (O + p) + (p - z), U = P + O, p = U - P, $e[2] = P - (U - p) + (O - p), $e[3] = U;
  const Q = Ks(4, $n, 4, $e, Kl);
  B = A * k, x = Ve * A, S = x - (x - A), b = A - S, x = Ve * k, L = x - (x - k), T = k - L, M = b * T - (B - S * L - b * L - S * T), z = ee * _, x = Ve * ee, S = x - (x - ee), b = ee - S, x = Ve * _, L = x - (x - _), T = _ - L, q = b * T - (z - S * L - b * L - S * T), O = M - q, p = M - O, $e[0] = M - (O + p) + (p - q), P = B + O, p = P - B, R = B - (P - p) + (O - p), O = R - z, p = R - O, $e[1] = R - (O + p) + (p - z), U = P + O, p = U - P, $e[2] = P - (U - p) + (O - p), $e[3] = U;
  const ie = Ks(Q, Kl, 4, $e, Jl);
  B = y * k, x = Ve * y, S = x - (x - y), b = y - S, x = Ve * k, L = x - (x - k), T = k - L, M = b * T - (B - S * L - b * L - S * T), z = m * _, x = Ve * m, S = x - (x - m), b = m - S, x = Ve * _, L = x - (x - _), T = _ - L, q = b * T - (z - S * L - b * L - S * T), O = M - q, p = M - O, $e[0] = M - (O + p) + (p - q), P = B + O, p = P - B, R = B - (P - p) + (O - p), O = R - z, p = R - O, $e[1] = R - (O + p) + (p - z), U = P + O, p = U - P, $e[2] = P - (U - p) + (O - p), $e[3] = U;
  const de = Ks(ie, Jl, 4, $e, $l);
  return $l[de - 1];
}
function m_(a, r, i, u, l, f) {
  const v = (r - f) * (i - l), y = (a - l) * (u - f), m = v - y, _ = Math.abs(v + y);
  return Math.abs(m) >= g_ * _ ? m : -d_(a, r, i, u, l, f, _);
}
const Pr = (a, r) => a.ll.x <= r.x && r.x <= a.ur.x && a.ll.y <= r.y && r.y <= a.ur.y, Oa = (a, r) => {
  if (r.ur.x < a.ll.x || a.ur.x < r.ll.x || r.ur.y < a.ll.y || a.ur.y < r.ll.y) return null;
  const i = a.ll.x < r.ll.x ? r.ll.x : a.ll.x, u = a.ur.x < r.ur.x ? a.ur.x : r.ur.x, l = a.ll.y < r.ll.y ? r.ll.y : a.ll.y, f = a.ur.y < r.ur.y ? a.ur.y : r.ur.y;
  return {
    ll: {
      x: i,
      y: l
    },
    ur: {
      x: u,
      y: f
    }
  };
};
let ln = Number.EPSILON;
ln === void 0 && (ln = Math.pow(2, -52));
const p_ = ln * ln, ec = (a, r) => {
  if (-ln < a && a < ln && -ln < r && r < ln)
    return 0;
  const i = a - r;
  return i * i < p_ * a * r ? 0 : a < r ? -1 : 1;
};
class __ {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new tc(), this.yRounder = new tc();
  }
  round(r, i) {
    return {
      x: this.xRounder.round(r),
      y: this.yRounder.round(i)
    };
  }
}
class tc {
  constructor() {
    this.tree = new to(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(r) {
    const i = this.tree.add(r), u = this.tree.prev(i);
    if (u !== null && ec(i.key, u.key) === 0)
      return this.tree.remove(r), u.key;
    const l = this.tree.next(i);
    return l !== null && ec(i.key, l.key) === 0 ? (this.tree.remove(r), l.key) : r;
  }
}
const Hr = new __(), Ri = (a, r) => a.x * r.y - a.y * r.x, Wf = (a, r) => a.x * r.x + a.y * r.y, nc = (a, r, i) => {
  const u = m_(a.x, a.y, r.x, r.y, i.x, i.y);
  return u > 0 ? -1 : u < 0 ? 1 : 0;
}, es = (a) => Math.sqrt(Wf(a, a)), E_ = (a, r, i) => {
  const u = {
    x: r.x - a.x,
    y: r.y - a.y
  }, l = {
    x: i.x - a.x,
    y: i.y - a.y
  };
  return Ri(l, u) / es(l) / es(u);
}, k_ = (a, r, i) => {
  const u = {
    x: r.x - a.x,
    y: r.y - a.y
  }, l = {
    x: i.x - a.x,
    y: i.y - a.y
  };
  return Wf(l, u) / es(l) / es(u);
}, rc = (a, r, i) => r.y === 0 ? null : {
  x: a.x + r.x / r.y * (i - a.y),
  y: i
}, ic = (a, r, i) => r.x === 0 ? null : {
  x: i,
  y: a.y + r.y / r.x * (i - a.x)
}, x_ = (a, r, i, u) => {
  if (r.x === 0) return ic(i, u, a.x);
  if (u.x === 0) return ic(a, r, i.x);
  if (r.y === 0) return rc(i, u, a.y);
  if (u.y === 0) return rc(a, r, i.y);
  const l = Ri(r, u);
  if (l == 0) return null;
  const f = {
    x: i.x - a.x,
    y: i.y - a.y
  }, v = Ri(f, r) / l, y = Ri(f, u) / l, m = a.x + y * r.x, _ = i.x + v * u.x, k = a.y + y * r.y, p = i.y + v * u.y, x = (m + _) / 2, S = (k + p) / 2;
  return {
    x,
    y: S
  };
};
class xt {
  // for ordering sweep events in the sweep event queue
  static compare(r, i) {
    const u = xt.comparePoints(r.point, i.point);
    return u !== 0 ? u : (r.point !== i.point && r.link(i), r.isLeft !== i.isLeft ? r.isLeft ? 1 : -1 : cn.compare(r.segment, i.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(r, i) {
    return r.x < i.x ? -1 : r.x > i.x ? 1 : r.y < i.y ? -1 : r.y > i.y ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(r, i) {
    r.events === void 0 ? r.events = [this] : r.events.push(this), this.point = r, this.isLeft = i;
  }
  link(r) {
    if (r.point === this.point)
      throw new Error("Tried to link already linked events");
    const i = r.point.events;
    for (let u = 0, l = i.length; u < l; u++) {
      const f = i[u];
      this.point.events.push(f), f.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const r = this.point.events.length;
    for (let i = 0; i < r; i++) {
      const u = this.point.events[i];
      if (u.segment.consumedBy === void 0)
        for (let l = i + 1; l < r; l++) {
          const f = this.point.events[l];
          f.consumedBy === void 0 && u.otherSE.point.events === f.otherSE.point.events && u.segment.consume(f.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const r = [];
    for (let i = 0, u = this.point.events.length; i < u; i++) {
      const l = this.point.events[i];
      l !== this && !l.segment.ringOut && l.segment.isInResult() && r.push(l);
    }
    return r;
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
  getLeftmostComparator(r) {
    const i = /* @__PURE__ */ new Map(), u = (l) => {
      const f = l.otherSE;
      i.set(l, {
        sine: E_(this.point, r.point, f.point),
        cosine: k_(this.point, r.point, f.point)
      });
    };
    return (l, f) => {
      i.has(l) || u(l), i.has(f) || u(f);
      const {
        sine: v,
        cosine: y
      } = i.get(l), {
        sine: m,
        cosine: _
      } = i.get(f);
      return v >= 0 && m >= 0 ? y < _ ? 1 : y > _ ? -1 : 0 : v < 0 && m < 0 ? y < _ ? -1 : y > _ ? 1 : 0 : m < v ? -1 : m > v ? 1 : 0;
    };
  }
}
let S_ = 0;
class cn {
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
  static compare(r, i) {
    const u = r.leftSE.point.x, l = i.leftSE.point.x, f = r.rightSE.point.x, v = i.rightSE.point.x;
    if (v < u) return 1;
    if (f < l) return -1;
    const y = r.leftSE.point.y, m = i.leftSE.point.y, _ = r.rightSE.point.y, k = i.rightSE.point.y;
    if (u < l) {
      if (m < y && m < _) return 1;
      if (m > y && m > _) return -1;
      const p = r.comparePoint(i.leftSE.point);
      if (p < 0) return 1;
      if (p > 0) return -1;
      const x = i.comparePoint(r.rightSE.point);
      return x !== 0 ? x : -1;
    }
    if (u > l) {
      if (y < m && y < k) return -1;
      if (y > m && y > k) return 1;
      const p = i.comparePoint(r.leftSE.point);
      if (p !== 0) return p;
      const x = r.comparePoint(i.rightSE.point);
      return x < 0 ? 1 : x > 0 ? -1 : 1;
    }
    if (y < m) return -1;
    if (y > m) return 1;
    if (f < v) {
      const p = i.comparePoint(r.rightSE.point);
      if (p !== 0) return p;
    }
    if (f > v) {
      const p = r.comparePoint(i.rightSE.point);
      if (p < 0) return 1;
      if (p > 0) return -1;
    }
    if (f !== v) {
      const p = _ - y, x = f - u, S = k - m, b = v - l;
      if (p > x && S < b) return 1;
      if (p < x && S > b) return -1;
    }
    return f > v ? 1 : f < v || _ < k ? -1 : _ > k ? 1 : r.id < i.id ? -1 : r.id > i.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(r, i, u, l) {
    this.id = ++S_, this.leftSE = r, r.segment = this, r.otherSE = i, this.rightSE = i, i.segment = this, i.otherSE = r, this.rings = u, this.windings = l;
  }
  static fromRing(r, i, u) {
    let l, f, v;
    const y = xt.comparePoints(r, i);
    if (y < 0)
      l = r, f = i, v = 1;
    else if (y > 0)
      l = i, f = r, v = -1;
    else throw new Error(`Tried to create degenerate segment at [${r.x}, ${r.y}]`);
    const m = new xt(l, !0), _ = new xt(f, !1);
    return new cn(m, _, [u], [v]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(r) {
    this.rightSE = r, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const r = this.leftSE.point.y, i = this.rightSE.point.y;
    return {
      ll: {
        x: this.leftSE.point.x,
        y: r < i ? r : i
      },
      ur: {
        x: this.rightSE.point.x,
        y: r > i ? r : i
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
  isAnEndpoint(r) {
    return r.x === this.leftSE.point.x && r.y === this.leftSE.point.y || r.x === this.rightSE.point.x && r.y === this.rightSE.point.y;
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
  comparePoint(r) {
    if (this.isAnEndpoint(r)) return 0;
    const i = this.leftSE.point, u = this.rightSE.point, l = this.vector();
    if (i.x === u.x)
      return r.x === i.x ? 0 : r.x < i.x ? 1 : -1;
    const f = (r.y - i.y) / l.y, v = i.x + f * l.x;
    if (r.x === v) return 0;
    const y = (r.x - i.x) / l.x, m = i.y + y * l.y;
    return r.y === m ? 0 : r.y < m ? -1 : 1;
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
  getIntersection(r) {
    const i = this.bbox(), u = r.bbox(), l = Oa(i, u);
    if (l === null) return null;
    const f = this.leftSE.point, v = this.rightSE.point, y = r.leftSE.point, m = r.rightSE.point, _ = Pr(i, y) && this.comparePoint(y) === 0, k = Pr(u, f) && r.comparePoint(f) === 0, p = Pr(i, m) && this.comparePoint(m) === 0, x = Pr(u, v) && r.comparePoint(v) === 0;
    if (k && _)
      return x && !p ? v : !x && p ? m : null;
    if (k)
      return p && f.x === m.x && f.y === m.y ? null : f;
    if (_)
      return x && v.x === y.x && v.y === y.y ? null : y;
    if (x && p) return null;
    if (x) return v;
    if (p) return m;
    const S = x_(f, this.vector(), y, r.vector());
    return S === null || !Pr(l, S) ? null : Hr.round(S.x, S.y);
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
  split(r) {
    const i = [], u = r.events !== void 0, l = new xt(r, !0), f = new xt(r, !1), v = this.rightSE;
    this.replaceRightSE(f), i.push(f), i.push(l);
    const y = new cn(l, v, this.rings.slice(), this.windings.slice());
    return xt.comparePoints(y.leftSE.point, y.rightSE.point) > 0 && y.swapEvents(), xt.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), u && (l.checkForConsuming(), f.checkForConsuming()), i;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const r = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = r, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let i = 0, u = this.windings.length; i < u; i++)
      this.windings[i] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(r) {
    let i = this, u = r;
    for (; i.consumedBy; ) i = i.consumedBy;
    for (; u.consumedBy; ) u = u.consumedBy;
    const l = cn.compare(i, u);
    if (l !== 0) {
      if (l > 0) {
        const f = i;
        i = u, u = f;
      }
      if (i.prev === u) {
        const f = i;
        i = u, u = f;
      }
      for (let f = 0, v = u.rings.length; f < v; f++) {
        const y = u.rings[f], m = u.windings[f], _ = i.rings.indexOf(y);
        _ === -1 ? (i.rings.push(y), i.windings.push(m)) : i.windings[_] += m;
      }
      u.rings = null, u.windings = null, u.consumedBy = i, u.leftSE.consumedBy = i.leftSE, u.rightSE.consumedBy = i.rightSE;
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
      const r = this.prev.consumedBy || this.prev;
      this._beforeState = r.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const r = this.beforeState();
    this._afterState = {
      rings: r.rings.slice(0),
      windings: r.windings.slice(0),
      multiPolys: []
    };
    const i = this._afterState.rings, u = this._afterState.windings, l = this._afterState.multiPolys;
    for (let y = 0, m = this.rings.length; y < m; y++) {
      const _ = this.rings[y], k = this.windings[y], p = i.indexOf(_);
      p === -1 ? (i.push(_), u.push(k)) : u[p] += k;
    }
    const f = [], v = [];
    for (let y = 0, m = i.length; y < m; y++) {
      if (u[y] === 0) continue;
      const _ = i[y], k = _.poly;
      if (v.indexOf(k) === -1)
        if (_.isExterior) f.push(k);
        else {
          v.indexOf(k) === -1 && v.push(k);
          const p = f.indexOf(_.poly);
          p !== -1 && f.splice(p, 1);
        }
    }
    for (let y = 0, m = f.length; y < m; y++) {
      const _ = f[y].multiPoly;
      l.indexOf(_) === -1 && l.push(_);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const r = this.beforeState().multiPolys, i = this.afterState().multiPolys;
    switch (Tt.type) {
      case "union": {
        const u = r.length === 0, l = i.length === 0;
        this._isInResult = u !== l;
        break;
      }
      case "intersection": {
        let u, l;
        r.length < i.length ? (u = r.length, l = i.length) : (u = i.length, l = r.length), this._isInResult = l === Tt.numMultiPolys && u < l;
        break;
      }
      case "xor": {
        const u = Math.abs(r.length - i.length);
        this._isInResult = u % 2 === 1;
        break;
      }
      case "difference": {
        const u = (l) => l.length === 1 && l[0].isSubject;
        this._isInResult = u(r) !== u(i);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${Tt.type}`);
    }
    return this._isInResult;
  }
}
class sc {
  constructor(r, i, u) {
    if (!Array.isArray(r) || r.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = i, this.isExterior = u, this.segments = [], typeof r[0][0] != "number" || typeof r[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const l = Hr.round(r[0][0], r[0][1]);
    this.bbox = {
      ll: {
        x: l.x,
        y: l.y
      },
      ur: {
        x: l.x,
        y: l.y
      }
    };
    let f = l;
    for (let v = 1, y = r.length; v < y; v++) {
      if (typeof r[v][0] != "number" || typeof r[v][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let m = Hr.round(r[v][0], r[v][1]);
      m.x === f.x && m.y === f.y || (this.segments.push(cn.fromRing(f, m, this)), m.x < this.bbox.ll.x && (this.bbox.ll.x = m.x), m.y < this.bbox.ll.y && (this.bbox.ll.y = m.y), m.x > this.bbox.ur.x && (this.bbox.ur.x = m.x), m.y > this.bbox.ur.y && (this.bbox.ur.y = m.y), f = m);
    }
    (l.x !== f.x || l.y !== f.y) && this.segments.push(cn.fromRing(f, l, this));
  }
  getSweepEvents() {
    const r = [];
    for (let i = 0, u = this.segments.length; i < u; i++) {
      const l = this.segments[i];
      r.push(l.leftSE), r.push(l.rightSE);
    }
    return r;
  }
}
class b_ {
  constructor(r, i) {
    if (!Array.isArray(r))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new sc(r[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let u = 1, l = r.length; u < l; u++) {
      const f = new sc(r[u], this, !1);
      f.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = f.bbox.ll.x), f.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = f.bbox.ll.y), f.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = f.bbox.ur.x), f.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = f.bbox.ur.y), this.interiorRings.push(f);
    }
    this.multiPoly = i;
  }
  getSweepEvents() {
    const r = this.exteriorRing.getSweepEvents();
    for (let i = 0, u = this.interiorRings.length; i < u; i++) {
      const l = this.interiorRings[i].getSweepEvents();
      for (let f = 0, v = l.length; f < v; f++)
        r.push(l[f]);
    }
    return r;
  }
}
class ac {
  constructor(r, i) {
    if (!Array.isArray(r))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof r[0][0][0] == "number" && (r = [r]);
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
    for (let u = 0, l = r.length; u < l; u++) {
      const f = new b_(r[u], this);
      f.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = f.bbox.ll.x), f.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = f.bbox.ll.y), f.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = f.bbox.ur.x), f.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = f.bbox.ur.y), this.polys.push(f);
    }
    this.isSubject = i;
  }
  getSweepEvents() {
    const r = [];
    for (let i = 0, u = this.polys.length; i < u; i++) {
      const l = this.polys[i].getSweepEvents();
      for (let f = 0, v = l.length; f < v; f++)
        r.push(l[f]);
    }
    return r;
  }
}
class ts {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(r) {
    const i = [];
    for (let u = 0, l = r.length; u < l; u++) {
      const f = r[u];
      if (!f.isInResult() || f.ringOut) continue;
      let v = null, y = f.leftSE, m = f.rightSE;
      const _ = [y], k = y.point, p = [];
      for (; v = y, y = m, _.push(y), y.point !== k; )
        for (; ; ) {
          const x = y.getAvailableLinkedEvents();
          if (x.length === 0) {
            const L = _[0].point, T = _[_.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${L.x}, ${L.y}]. Last matching segment found ends at [${T.x}, ${T.y}].`);
          }
          if (x.length === 1) {
            m = x[0].otherSE;
            break;
          }
          let S = null;
          for (let L = 0, T = p.length; L < T; L++)
            if (p[L].point === y.point) {
              S = L;
              break;
            }
          if (S !== null) {
            const L = p.splice(S)[0], T = _.splice(L.index);
            T.unshift(T[0].otherSE), i.push(new ts(T.reverse()));
            continue;
          }
          p.push({
            index: _.length,
            point: y.point
          });
          const b = y.getLeftmostComparator(v);
          m = x.sort(b)[0].otherSE;
          break;
        }
      i.push(new ts(_));
    }
    return i;
  }
  constructor(r) {
    this.events = r;
    for (let i = 0, u = r.length; i < u; i++)
      r[i].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let r = this.events[0].point;
    const i = [r];
    for (let _ = 1, k = this.events.length - 1; _ < k; _++) {
      const p = this.events[_].point, x = this.events[_ + 1].point;
      nc(p, r, x) !== 0 && (i.push(p), r = p);
    }
    if (i.length === 1) return null;
    const u = i[0], l = i[1];
    nc(u, r, l) === 0 && i.shift(), i.push(i[0]);
    const f = this.isExteriorRing() ? 1 : -1, v = this.isExteriorRing() ? 0 : i.length - 1, y = this.isExteriorRing() ? i.length : -1, m = [];
    for (let _ = v; _ != y; _ += f) m.push([i[_].x, i[_].y]);
    return m;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const r = this.enclosingRing();
      this._isExteriorRing = r ? !r.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let r = this.events[0];
    for (let l = 1, f = this.events.length; l < f; l++) {
      const v = this.events[l];
      xt.compare(r, v) > 0 && (r = v);
    }
    let i = r.segment.prevInResult(), u = i ? i.prevInResult() : null;
    for (; ; ) {
      if (!i) return null;
      if (!u) return i.ringOut;
      if (u.ringOut !== i.ringOut)
        return u.ringOut.enclosingRing() !== i.ringOut ? i.ringOut : i.ringOut.enclosingRing();
      i = u.prevInResult(), u = i ? i.prevInResult() : null;
    }
  }
}
class oc {
  constructor(r) {
    this.exteriorRing = r, r.poly = this, this.interiorRings = [];
  }
  addInterior(r) {
    this.interiorRings.push(r), r.poly = this;
  }
  getGeom() {
    const r = [this.exteriorRing.getGeom()];
    if (r[0] === null) return null;
    for (let i = 0, u = this.interiorRings.length; i < u; i++) {
      const l = this.interiorRings[i].getGeom();
      l !== null && r.push(l);
    }
    return r;
  }
}
class I_ {
  constructor(r) {
    this.rings = r, this.polys = this._composePolys(r);
  }
  getGeom() {
    const r = [];
    for (let i = 0, u = this.polys.length; i < u; i++) {
      const l = this.polys[i].getGeom();
      l !== null && r.push(l);
    }
    return r;
  }
  _composePolys(r) {
    const i = [];
    for (let u = 0, l = r.length; u < l; u++) {
      const f = r[u];
      if (!f.poly)
        if (f.isExteriorRing()) i.push(new oc(f));
        else {
          const v = f.enclosingRing();
          v.poly || i.push(new oc(v)), v.poly.addInterior(f);
        }
    }
    return i;
  }
}
class w_ {
  constructor(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cn.compare;
    this.queue = r, this.tree = new to(i), this.segments = [];
  }
  process(r) {
    const i = r.segment, u = [];
    if (r.consumedBy)
      return r.isLeft ? this.queue.remove(r.otherSE) : this.tree.remove(i), u;
    const l = r.isLeft ? this.tree.add(i) : this.tree.find(i);
    if (!l) throw new Error(`Unable to find segment #${i.id} [${i.leftSE.point.x}, ${i.leftSE.point.y}] -> [${i.rightSE.point.x}, ${i.rightSE.point.y}] in SweepLine tree.`);
    let f = l, v = l, y, m;
    for (; y === void 0; )
      f = this.tree.prev(f), f === null ? y = null : f.key.consumedBy === void 0 && (y = f.key);
    for (; m === void 0; )
      v = this.tree.next(v), v === null ? m = null : v.key.consumedBy === void 0 && (m = v.key);
    if (r.isLeft) {
      let _ = null;
      if (y) {
        const p = y.getIntersection(i);
        if (p !== null && (i.isAnEndpoint(p) || (_ = p), !y.isAnEndpoint(p))) {
          const x = this._splitSafely(y, p);
          for (let S = 0, b = x.length; S < b; S++)
            u.push(x[S]);
        }
      }
      let k = null;
      if (m) {
        const p = m.getIntersection(i);
        if (p !== null && (i.isAnEndpoint(p) || (k = p), !m.isAnEndpoint(p))) {
          const x = this._splitSafely(m, p);
          for (let S = 0, b = x.length; S < b; S++)
            u.push(x[S]);
        }
      }
      if (_ !== null || k !== null) {
        let p = null;
        _ === null ? p = k : k === null ? p = _ : p = xt.comparePoints(_, k) <= 0 ? _ : k, this.queue.remove(i.rightSE), u.push(i.rightSE);
        const x = i.split(p);
        for (let S = 0, b = x.length; S < b; S++)
          u.push(x[S]);
      }
      u.length > 0 ? (this.tree.remove(i), u.push(r)) : (this.segments.push(i), i.prev = y);
    } else {
      if (y && m) {
        const _ = y.getIntersection(m);
        if (_ !== null) {
          if (!y.isAnEndpoint(_)) {
            const k = this._splitSafely(y, _);
            for (let p = 0, x = k.length; p < x; p++)
              u.push(k[p]);
          }
          if (!m.isAnEndpoint(_)) {
            const k = this._splitSafely(m, _);
            for (let p = 0, x = k.length; p < x; p++)
              u.push(k[p]);
          }
        }
      }
      this.tree.remove(i);
    }
    return u;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(r, i) {
    this.tree.remove(r);
    const u = r.rightSE;
    this.queue.remove(u);
    const l = r.split(i);
    return l.push(u), r.consumedBy === void 0 && this.tree.add(r), l;
  }
}
const uc = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, N_ = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class L_ {
  run(r, i, u) {
    Tt.type = r, Hr.reset();
    const l = [new ac(i, !0)];
    for (let p = 0, x = u.length; p < x; p++)
      l.push(new ac(u[p], !1));
    if (Tt.numMultiPolys = l.length, Tt.type === "difference") {
      const p = l[0];
      let x = 1;
      for (; x < l.length; )
        Oa(l[x].bbox, p.bbox) !== null ? x++ : l.splice(x, 1);
    }
    if (Tt.type === "intersection")
      for (let p = 0, x = l.length; p < x; p++) {
        const S = l[p];
        for (let b = p + 1, L = l.length; b < L; b++)
          if (Oa(S.bbox, l[b].bbox) === null) return [];
      }
    const f = new to(xt.compare);
    for (let p = 0, x = l.length; p < x; p++) {
      const S = l[p].getSweepEvents();
      for (let b = 0, L = S.length; b < L; b++)
        if (f.insert(S[b]), f.size > uc)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const v = new w_(f);
    let y = f.size, m = f.pop();
    for (; m; ) {
      const p = m.key;
      if (f.size === y) {
        const S = p.segment;
        throw new Error(`Unable to pop() ${p.isLeft ? "left" : "right"} SweepEvent [${p.point.x}, ${p.point.y}] from segment #${S.id} [${S.leftSE.point.x}, ${S.leftSE.point.y}] -> [${S.rightSE.point.x}, ${S.rightSE.point.y}] from queue.`);
      }
      if (f.size > uc)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (v.segments.length > N_)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const x = v.process(p);
      for (let S = 0, b = x.length; S < b; S++) {
        const L = x[S];
        L.consumedBy === void 0 && f.insert(L);
      }
      y = f.size, m = f.pop();
    }
    Hr.reset();
    const _ = ts.factory(v.segments);
    return new I_(_).getGeom();
  }
}
const Tt = new L_(), T_ = function(a) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
    i[u - 1] = arguments[u];
  return Tt.run("union", a, i);
}, C_ = function(a) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
    i[u - 1] = arguments[u];
  return Tt.run("intersection", a, i);
}, O_ = function(a) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
    i[u - 1] = arguments[u];
  return Tt.run("xor", a, i);
}, R_ = function(a) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
    i[u - 1] = arguments[u];
  return Tt.run("difference", a, i);
};
var M_ = {
  union: T_,
  intersection: C_,
  xor: O_,
  difference: R_
}, P_ = Object.defineProperty, A_ = (a, r) => P_(a, "name", { value: r, configurable: !0 });
function Xf(a) {
  const r = [];
  if (yr(a, (l) => {
    r.push(l.coordinates);
  }), r.length < 2)
    throw new Error("Must have at least two features");
  const i = a.features[0].properties || {}, u = M_.difference(r[0], ...r.slice(1));
  return u.length === 0 ? null : u.length === 1 ? Qr(u[0], i) : Za(u, i);
}
A_(Xf, "difference");
var D_ = Xf;
function lc(a) {
  let r;
  for (const i of a)
    r && i[0] - r[0] >= 180 ? i[0] -= 360 : r && i[0] - r[0] < -180 && (i[0] += 360), r = i;
}
function cc(a, r) {
  const i = D_(
    $t([
      Qr([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      a
    ])
  );
  if (!i)
    return;
  i.properties = { isMask: "y" };
  const u = i_(a, 0);
  if (u) {
    if (u.geometry.type === "Polygon")
      for (const l of u.geometry.coordinates)
        lc(l);
    else
      for (const l of u.geometry.coordinates)
        for (const f of l)
          lc(f);
    r($t([u, i]));
  }
}
const fc = "EPSG:4326";
function F_(a) {
  var f;
  const r = a.getProperties(), { isMask: i } = r, u = (f = a.getGeometry()) == null ? void 0 : f.getType(), l = i ? 0 : u === "LineString" || u === "MultiLineString" ? 3 : 2;
  return new $h({
    stroke: i ? void 0 : new Vo({
      color: "#3170fe",
      lineDash: [l, l],
      width: l,
      lineCap: "butt"
    }),
    fill: i ? new jo({
      color: "#00000020"
    }) : void 0,
    image: new Jh({
      src: `/icons/marker_${r.isReverse ? "reverse" : r.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: r.isSelected ? 2 : r.isReverse ? 0 : 1,
    text: r.isSelected && r.tooltip ? new eg({
      backgroundFill: new jo({ color: "white" }),
      text: r.tooltip,
      offsetY: -40,
      backgroundStroke: new Vo({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function B_(a, r = {}, i = {}, u = F_) {
  let l = -1, f, v, y, m = !1;
  const _ = new Hh({
    updateWhileAnimating: !0
  });
  a.addLayer(_);
  const k = new Kh({});
  _.setSource(k), _.setStyle(u), a.on("click", (b) => {
    a.forEachFeatureAtPixel(b.pixel, (L) => {
      const T = L.getId();
      if (T)
        return b.stopPropagation(), v == null || v({ type: "markerClick", id: T }), L;
    });
  }), a.on("pointermove", (b) => {
    const L = a.forEachFeatureAtPixel(b.pixel, (T) => T.getId());
    f !== L && (f && (v == null || v({
      type: "markerMouseLeave",
      id: f
    })), L && (v == null || v({
      type: "markerMouseEnter",
      id: L
    })), a.getTargetElement().style.cursor = L ? "pointer" : m ? "crosshair" : "", f = L);
  });
  function p() {
    return Qh() ?? a.getView().getProjection();
  }
  function x(b) {
    return b.transform(fc, p());
  }
  const S = (b) => {
    v == null || v({
      type: "mapClick",
      coordinates: Xo(b.coordinate, p())
    });
  };
  return {
    setEventHandler(b) {
      b ? (v = b, a.on("click", S)) : (v = void 0, a.un("click", S));
    },
    flyTo(b, L) {
      a.getView().animate({
        center: li(b, p()),
        zoom: L,
        duration: 2e3,
        ...r
      });
    },
    fitBounds(b, L, T) {
      a.getView().fit(Zh(b, fc, p()), {
        padding: [L, L, L, L],
        maxZoom: T,
        duration: 2e3,
        ...i
      });
    },
    indicateReverse(b) {
      m = b, a.getTargetElement().style.cursor = b ? "crosshair" : "";
    },
    setReverseMarker(b) {
      y ? b ? y.getGeometry().setCoordinates(
        li(b, p())
      ) : (k.removeFeature(y), y.dispose(), y = void 0) : b && (y = new jt(
        new Ns(li(b, p()))
      ), y.setProperties({ isReverse: !0 }), k.addFeature(y));
    },
    setMarkers(b, L) {
      function T(O) {
        var P;
        if (O)
          for (const R of O.features) {
            const B = R.geometry.type === "Polygon" ? new zo(R.geometry.coordinates) : R.geometry.type === "MultiPolygon" ? new Uo(R.geometry.coordinates) : null;
            B && k.addFeature(
              new jt({
                isMask: !!((P = R.properties) != null && P.isMask),
                geometry: x(B)
              })
            );
          }
      }
      if (k.clear(), y && k.addFeature(y), T(), L) {
        let O = !1;
        if (L.geometry.type === "GeometryCollection") {
          const P = L.geometry.geometries.map(
            (R) => R.type === "Polygon" ? new zo(R.coordinates) : R.type === "MultiPolygon" ? new Uo(R.coordinates) : null
          ).filter((R) => !!R);
          if (P.length > 0)
            k.addFeature(
              new jt(x(new Vh(P)))
            ), O = !0;
          else
            for (const R of L.geometry.geometries)
              R.type === "LineString" ? (k.addFeature(
                new jt(
                  x(new Yo(R.coordinates))
                )
              ), O = !0) : R.type === "MultiLineString" && k.addFeature(
                new jt(
                  x(new Wo(R.coordinates))
                )
              ), O = !0;
        }
        if (!O) {
          if (L.geometry.type === "Polygon")
            cc(L, T);
          else if (L.geometry.type === "MultiPolygon")
            cc(L, T);
          else if (L.geometry.type === "LineString") {
            k.addFeature(
              new jt(
                x(new Yo(L.geometry.coordinates))
              )
            );
            return;
          } else if (L.geometry.type === "MultiLineString") {
            k.addFeature(
              new jt(
                x(new Wo(L.geometry.coordinates))
              )
            );
            return;
          }
        }
        k.addFeature(new jt(x(new Ns(L.center))));
      }
      for (const O of b ?? []) {
        if (O === L)
          continue;
        const P = new jt(
          new Ns(li(O.center, p()))
        );
        P.setId(O.id), P.setProperties({
          fuzzy: !!O.matching_text,
          tooltip: O.place_type[0] === "reverse" ? O.place_name : O.place_name.replace(/,.*/, "")
        }), k.addFeature(P);
      }
    },
    setSelectedMarker(b) {
      var O, P, R;
      const L = k.getFeatures(), T = (O = L[0]) != null && O.getProperties().isReverse ? 1 : 0;
      l > -1 && ((P = L[l + T]) == null || P.setProperties({
        isSelected: !1
      })), b > -1 && ((R = L[b + T]) == null || R.setProperties({
        isSelected: !0
      })), l = b;
    },
    getCenterAndZoom() {
      const b = a.getView(), L = b.getCenter(), T = b.getZoom();
      if (!(!L || T === void 0))
        return [T, ...Xo(L, p())];
    }
  };
}
var kt, Ln;
class u1 extends jh {
  constructor(i) {
    const u = document.createElement("div");
    u.className = "ol-search";
    super({
      element: u,
      target: i.target
    });
    ws(this, kt);
    ws(this, Ln);
    const { flyTo: l, fullGeometryStyle: f, ...v } = i;
    ui(this, kt, new sy({
      target: u,
      props: {
        flyTo: l === void 0 ? !0 : !!l,
        ...v
      }
    }));
    for (const y of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      Nt(this, kt).$on(y, (m) => {
        switch (y) {
          case "select":
            this.dispatchEvent(
              new G_(m.detail)
            );
            break;
          case "featuresListed":
            this.dispatchEvent(
              new q_(m.detail)
            );
            break;
          case "featuresMarked":
            this.dispatchEvent(
              new z_(m.detail)
            );
            break;
          case "optionsVisibilityChange":
            this.dispatchEvent(
              new U_(m.detail)
            );
            break;
          case "pick":
            this.dispatchEvent(
              new Y_(m.detail)
            );
            break;
          case "queryChange":
            this.dispatchEvent(new W_(m.detail));
            break;
          case "response":
            this.dispatchEvent(
              new X_(
                m.detail.url,
                m.detail.featureCollection
              )
            );
            break;
          case "reverseToggle":
            this.dispatchEvent(new j_(m.detail));
            break;
        }
      });
    ui(this, Ln, i);
  }
  setMap(i) {
    var u;
    if (super.setMap(i), i) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: l,
        fullGeometryStyle: f
      } = Nt(this, Ln), v = B_(
        i,
        typeof l == "boolean" ? void 0 : l,
        typeof l == "boolean" ? void 0 : l,
        // marker,
        // showResultMarkers,
        f
      );
      (u = Nt(this, kt)) == null || u.$set({ mapController: v });
    }
  }
  setOptions(i) {
    var v;
    ui(this, Ln, i);
    const { flyTo: u, fullGeometryStyle: l, ...f } = Nt(this, Ln);
    (v = Nt(this, kt)) == null || v.$set({
      ...f,
      flyTo: u === void 0 ? !0 : !!u
    });
  }
  setQuery(i, u = !0) {
    var l;
    (l = Nt(this, kt)) == null || l.setQuery(i, u);
  }
  clearMap() {
    var i;
    (i = Nt(this, kt)) == null || i.clearMap();
  }
  clearList() {
    var i;
    (i = Nt(this, kt)) == null || i.clearList();
  }
  focus() {
    var i;
    (i = Nt(this, kt)) == null || i.focus();
  }
  blur() {
    var i;
    (i = Nt(this, kt)) == null || i.blur();
  }
  // onRemove() {
  //   this.#gc?.$destroy();
  // }
}
kt = new WeakMap(), Ln = new WeakMap();
class G_ extends yn {
  constructor(i) {
    super("select");
    _t(this, "feature");
    this.feature = i;
  }
}
class q_ extends yn {
  constructor(i) {
    super("featuresListed");
    _t(this, "features");
    this.features = i;
  }
}
class z_ extends yn {
  constructor(i) {
    super("featuresMarked");
    _t(this, "features");
    this.features = i;
  }
}
class U_ extends yn {
  constructor(i) {
    super("optionsVisibilityChange");
    _t(this, "optionsVisible");
    this.optionsVisible = i;
  }
}
class Y_ extends yn {
  constructor(i) {
    super("pick");
    _t(this, "feature");
    this.feature = i;
  }
}
class W_ extends yn {
  constructor(i) {
    super("queryChange");
    _t(this, "query");
    this.query = i;
  }
}
class X_ extends yn {
  constructor(i, u) {
    super("response");
    _t(this, "url");
    _t(this, "featureCollection");
    this.url = i, this.featureCollection = u;
  }
}
class j_ extends yn {
  constructor(i) {
    super("reverseToggle");
    _t(this, "reverse");
    this.reverse = i;
  }
}
export {
  q_ as FeaturesListedEvent,
  z_ as FeaturesMarkedEvent,
  u1 as GeocodingControl,
  U_ as OptionsVisibilityChangeEvent,
  Y_ as PickEvent,
  W_ as QueryChangeEvent,
  X_ as ResponseEvent,
  j_ as ReverseToggleEvent,
  G_ as SelectEvent,
  B_ as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
