var Zn = Object.defineProperty;
var _i = (i) => {
  throw TypeError(i);
};
var Kn = (i, e, t) => e in i ? Zn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var R = (i, e, t) => Kn(i, typeof e != "symbol" ? e + "" : e, t), xi = (i, e, t) => e.has(i) || _i("Cannot " + t);
var ue = (i, e, t) => (xi(i, e, "read from private field"), t ? t.call(i) : e.get(i)), $t = (i, e, t) => e.has(i) ? _i("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), ei = (i, e, t, n) => (xi(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import { Control as Yn } from "ol/control";
import Xe from "ol/events/Event";
import { Feature as ze } from "ol";
import { Point as ti, Polygon as Ti, MultiPolygon as Mi, GeometryCollection as Qn, LineString as Ni, MultiLineString as Ci } from "ol/geom";
import Xn from "ol/layer/Vector";
import { fromLonLat as Nt, transformExtent as Jn, toLonLat as ki, getUserProjection as $n } from "ol/proj";
import er from "ol/source/Vector";
import Oi from "ol/style/Fill";
import tr from "ol/style/Icon";
import Ri from "ol/style/Stroke";
import ir from "ol/style/Style";
import nr from "ol/style/Text";
function re() {
}
function rr(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function un(i) {
  return i();
}
function Pi() {
  return /* @__PURE__ */ Object.create(null);
}
function Ve(i) {
  i.forEach(un);
}
function an(i) {
  return typeof i == "function";
}
function rt(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ct;
function pe(i, e) {
  return i === e ? !0 : (Ct || (Ct = document.createElement("a")), Ct.href = e, i === Ct.href);
}
function sr(i) {
  return Object.keys(i).length === 0;
}
function or(i, e, t, n) {
  if (i) {
    const r = fn(i, e, t, n);
    return i[0](r);
  }
}
function fn(i, e, t, n) {
  return i[1] && n ? rr(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function lr(i, e, t, n) {
  return i[2], e.dirty;
}
function ur(i, e, t, n, r, u) {
  if (r) {
    const a = fn(e, t, n, u);
    i.p(a, r);
  }
}
function ar(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Wt(i) {
  return i ?? "";
}
function j(i, e) {
  i.appendChild(e);
}
function te(i, e, t) {
  i.insertBefore(e, t || null);
}
function $(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function X(i) {
  return document.createElement(i);
}
function Fe(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Ye(i) {
  return document.createTextNode(i);
}
function Le() {
  return Ye(" ");
}
function fr() {
  return Ye("");
}
function he(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function cr(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function x(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function hr(i) {
  return Array.from(i.childNodes);
}
function _t(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Ii(i, e) {
  i.value = e ?? "";
}
function ct(i, e, t) {
  i.classList.toggle(e, !!t);
}
function dr(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let xt;
function St(i) {
  xt = i;
}
function cn() {
  if (!xt) throw new Error("Function called outside component initialization");
  return xt;
}
function gr(i) {
  cn().$$.on_destroy.push(i);
}
function hn() {
  const i = cn();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = dr(
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
function mr(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ft = [], si = [];
let ht = [];
const Ai = [], pr = /* @__PURE__ */ Promise.resolve();
let oi = !1;
function yr() {
  oi || (oi = !0, pr.then(dn));
}
function li(i) {
  ht.push(i);
}
const ii = /* @__PURE__ */ new Set();
let at = 0;
function dn() {
  if (at !== 0)
    return;
  const i = xt;
  do {
    try {
      for (; at < ft.length; ) {
        const e = ft[at];
        at++, St(e), br(e.$$);
      }
    } catch (e) {
      throw ft.length = 0, at = 0, e;
    }
    for (St(null), ft.length = 0, at = 0; si.length; ) si.pop()();
    for (let e = 0; e < ht.length; e += 1) {
      const t = ht[e];
      ii.has(t) || (ii.add(t), t());
    }
    ht.length = 0;
  } while (ft.length);
  for (; Ai.length; )
    Ai.pop()();
  oi = !1, ii.clear(), St(i);
}
function br(i) {
  if (i.fragment !== null) {
    i.update(), Ve(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(li);
  }
}
function vr(i) {
  const e = [], t = [];
  ht.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ht = e;
}
const Pt = /* @__PURE__ */ new Set();
let it;
function It() {
  it = {
    r: 0,
    c: [],
    p: it
    // parent group
  };
}
function At() {
  it.r || Ve(it.c), it = it.p;
}
function oe(i, e) {
  i && i.i && (Pt.delete(i), i.i(e));
}
function de(i, e, t, n) {
  if (i && i.o) {
    if (Pt.has(i)) return;
    Pt.add(i), it.c.push(() => {
      Pt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Bi(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function wr(i, e) {
  de(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Er(i, e, t, n, r, u, a, o, g, h, v, S) {
  let M = i.length, k = u.length, N = M;
  const C = {};
  for (; N--; ) C[i[N].key] = N;
  const O = [], I = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), P = [];
  for (N = k; N--; ) {
    const G = S(r, u, N), s = t(G);
    let l = a.get(s);
    l ? P.push(() => l.p(G, e)) : (l = h(s, G), l.c()), I.set(s, O[N] = l), s in C && _.set(s, Math.abs(N - C[s]));
  }
  const z = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set();
  function H(G) {
    oe(G, 1), G.m(o, v), a.set(G.key, G), v = G.first, k--;
  }
  for (; M && k; ) {
    const G = O[k - 1], s = i[M - 1], l = G.key, f = s.key;
    G === s ? (v = G.first, M--, k--) : I.has(f) ? !a.has(l) || z.has(l) ? H(G) : Z.has(f) ? M-- : _.get(l) > _.get(f) ? (Z.add(l), H(G)) : (z.add(f), M--) : (g(s, a), M--);
  }
  for (; M--; ) {
    const G = i[M];
    I.has(G.key) || g(G, a);
  }
  for (; k; ) H(O[k - 1]);
  return Ve(P), O;
}
function Qe(i) {
  i && i.c();
}
function Ue(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), li(() => {
    const u = i.$$.on_mount.map(un).filter(an);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : Ve(u), i.$$.on_mount = [];
  }), r.forEach(li);
}
function qe(i, e) {
  const t = i.$$;
  t.fragment !== null && (vr(t.after_update), Ve(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Lr(i, e) {
  i.$$.dirty[0] === -1 && (ft.push(i), yr(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function st(i, e, t, n, r, u, a = null, o = [-1]) {
  const g = xt;
  St(i);
  const h = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: re,
    not_equal: r,
    bound: Pi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: Pi(),
    dirty: o,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  a && a(h.root);
  let v = !1;
  if (h.ctx = t ? t(i, e.props || {}, (S, M, ...k) => {
    const N = k.length ? k[0] : M;
    return h.ctx && r(h.ctx[S], h.ctx[S] = N) && (!h.skip_bound && h.bound[S] && h.bound[S](N), v && Lr(i, S)), M;
  }) : [], h.update(), v = !0, Ve(h.before_update), h.fragment = n ? n(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const S = hr(e.target);
      h.fragment && h.fragment.l(S), S.forEach($);
    } else
      h.fragment && h.fragment.c();
    e.intro && oe(i.$$.fragment), Ue(i, e.target, e.anchor), dn();
  }
  St(g);
}
class ot {
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
    qe(this, 1), this.$destroy = re;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!an(t))
      return re;
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
    this.$$set && !sr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Sr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sr);
function _r(i) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), x(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), x(e, "viewBox", "0 0 14 14"), x(e, "width", "13"), x(e, "height", "13"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      te(n, e, r), j(e, t);
    },
    p: re,
    i: re,
    o: re,
    d(n) {
      n && $(e);
    }
  };
}
class gn extends ot {
  constructor(e) {
    super(), st(this, e, null, _r, rt, {});
  }
}
function xr(i) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), x(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), x(e, "viewBox", "0 0 30 30"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      te(n, e, r), j(e, t);
    },
    p: re,
    i: re,
    o: re,
    d(n) {
      n && $(e);
    }
  };
}
class mn extends ot {
  constructor(e) {
    super(), st(this, e, null, xr, rt, {});
  }
}
function Tr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Mr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Nr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Cr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function kr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Or(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Rr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Pr(i) {
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
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(u, a) {
      te(u, e, a), n || (r = he(
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
      128 && x(
        e,
        "title",
        /*placeType*/
        u[7]
      );
    },
    d(u) {
      u && $(e), n = !1, r();
    }
  };
}
function Ir(i) {
  let e, t;
  return {
    c() {
      e = X("div"), x(e, "class", "sprite-icon svelte-w9y5n9"), x(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / _e}px;
        height: ${/*spriteIcon*/
      i[6].height / _e}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${ui}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / _e}px -${/*spriteIcon*/
      i[6].y / _e}px;
        background-size: ${ke.width / _e}px ${ke.height / _e}px;
      `), x(
        e,
        "title",
        /*placeType*/
        i[7]
      );
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*spriteIcon, iconsBaseUrl*/
      72 && t !== (t = `
        width: ${/*spriteIcon*/
      n[6].width / _e}px;
        height: ${/*spriteIcon*/
      n[6].height / _e}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${ui}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / _e}px -${/*spriteIcon*/
      n[6].y / _e}px;
        background-size: ${ke.width / _e}px ${ke.height / _e}px;
      `) && x(e, "style", t), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Gi(i) {
  let e, t;
  return {
    c() {
      e = X("span"), t = Ye(
        /*placeType*/
        i[7]
      ), x(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r), j(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && _t(
        t,
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Ar(i) {
  let e, t, n, r, u, a, o, g, h, v = (
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
  ), I, _, P, z, Z, H;
  function G(m, c) {
    return c & /*feature*/
    1 && (t = null), c & /*feature*/
    1 && (n = null), c & /*feature*/
    1 && (r = null), c & /*feature*/
    1 && (u = null), ke && /*spriteIcon*/
    m[6] ? Ir : (
      /*imageUrl*/
      m[5] ? Pr : (
        /*feature*/
        m[0].address ? Rr : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("road.")), t ? Or : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("address.")), n ? kr : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? Cr : (u == null && (u = !!/*feature*/
        m[0].id.startsWith("poi.")), u ? Nr : (
          /*isReverse*/
          m[8] ? Mr : Tr
        )))))
      )
    );
  }
  let s = G(i, -1), l = s(i), f = k && Gi(i);
  return {
    c() {
      e = X("li"), l.c(), a = Le(), o = X("span"), g = X("span"), h = X("span"), S = Ye(v), M = Le(), f && f.c(), N = Le(), C = X("span"), I = Ye(O), x(h, "class", "primary svelte-w9y5n9"), x(g, "class", "svelte-w9y5n9"), x(C, "class", "line2 svelte-w9y5n9"), x(o, "class", "texts svelte-w9y5n9"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", _ = /*style*/
      i[1] === "selected"), x(e, "aria-checked", P = /*style*/
      i[1] === "picked"), x(e, "class", z = Wt(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(m, c) {
      te(m, e, c), l.m(e, null), j(e, a), j(e, o), j(o, g), j(g, h), j(h, S), j(g, M), f && f.m(g, null), j(o, N), j(o, C), j(C, I), Z || (H = [
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
      s === (s = G(m, c)) && l ? l.p(m, c) : (l.d(1), l = s(m), l && (l.c(), l.m(e, a))), c & /*isReverse, feature*/
      257 && v !== (v = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && _t(S, v), c & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (k = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), k ? f ? f.p(m, c) : (f = Gi(m), f.c(), f.m(g, null)) : f && (f.d(1), f = null), c & /*isReverse, feature*/
      257 && O !== (O = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && _t(I, O), c & /*style*/
      2 && _ !== (_ = /*style*/
      m[1] === "selected") && x(e, "aria-selected", _), c & /*style*/
      2 && P !== (P = /*style*/
      m[1] === "picked") && x(e, "aria-checked", P), c & /*style*/
      2 && z !== (z = Wt(
        /*style*/
        m[1]
      ) + " svelte-w9y5n9") && x(e, "class", z);
    },
    i: re,
    o: re,
    d(m) {
      m && $(e), l.d(), f && f.d(), Z = !1, Ve(H);
    }
  };
}
const pn = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, ui = pn ? "@2x" : "", _e = pn ? 2 : 1;
let ke, kt;
function Br(i, e, t) {
  let n, r, u, { feature: a } = e, { style: o = "default" } = e, { showPlaceType: g } = e, { missingIconsCache: h } = e, { iconsBaseUrl: v } = e;
  const S = hn();
  let M, k, N, C;
  function O() {
    kt ?? (kt = fetch(`${v}sprite${ui}.json`).then((s) => s.json()).then((s) => {
      ke = s;
    }).catch(() => {
      ke = null;
    }));
  }
  function I() {
    k && h.add(k), _();
  }
  function _() {
    ke !== void 0 ? P() : (O(), kt == null || kt.then(P));
  }
  function P() {
    do {
      if (C--, t(4, M = n == null ? void 0 : n[C]), t(6, N = M ? ke == null ? void 0 : ke.icons[M] : void 0), N)
        break;
      t(5, k = M ? v + M.replace(/ /g, "_") + ".svg" : void 0);
    } while (C > -1 && (!k || h.has(k)));
  }
  function z(s) {
    mr.call(this, i, s);
  }
  const Z = () => I(), H = () => S("select", void 0), G = (s) => {
    document.activeElement !== s.target && S("select", void 0);
  };
  return i.$$set = (s) => {
    "feature" in s && t(0, a = s.feature), "style" in s && t(1, o = s.style), "showPlaceType" in s && t(2, g = s.showPlaceType), "missingIconsCache" in s && t(11, h = s.missingIconsCache), "iconsBaseUrl" in s && t(3, v = s.iconsBaseUrl);
  }, i.$$.update = () => {
    var s, l, f, m, c;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (s = a.properties) == null ? void 0 : s.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = a.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((f = (l = a.properties) == null ? void 0 : l.categories) == null ? void 0 : f.join(", ")) ?? ((c = (m = a.properties) == null ? void 0 : m.place_type_name) == null ? void 0 : c[0]) ?? a.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (C = (n == null ? void 0 : n.length) ?? 0, _());
  }, [
    a,
    o,
    g,
    v,
    M,
    k,
    N,
    u,
    r,
    S,
    I,
    h,
    n,
    z,
    Z,
    H,
    G
  ];
}
class Gr extends ot {
  constructor(e) {
    super(), st(this, e, Br, Ar, rt, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function Wr(i) {
  let e;
  return {
    c() {
      e = X("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', x(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      te(t, e, n);
    },
    p: re,
    i: re,
    o: re,
    d(t) {
      t && $(e);
    }
  };
}
class zr extends ot {
  constructor(e) {
    super(), st(this, e, null, Wr, rt, {});
  }
}
function Dr(i) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), x(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), x(e, "viewBox", "0 0 60.006 21.412"), x(e, "width", "14"), x(e, "height", "20"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      te(n, e, r), j(e, t);
    },
    p: re,
    i: re,
    o: re,
    d(n) {
      n && $(e);
    }
  };
}
class Fr extends ot {
  constructor(e) {
    super(), st(this, e, null, Dr, rt, {});
  }
}
function Ur(i) {
  let e, t, n;
  return {
    c() {
      e = Fe("svg"), t = Fe("circle"), n = Fe("path"), x(t, "cx", "4.789"), x(t, "cy", "4.787"), x(t, "r", "3.85"), x(t, "class", "svelte-1aq105l"), x(n, "d", "M12.063 12.063 7.635 7.635"), x(n, "class", "svelte-1aq105l"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "13"), x(e, "height", "13"), x(e, "viewBox", "0 0 13 13"), x(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      te(r, e, u), j(e, t), j(e, n);
    },
    p: re,
    i: re,
    o: re,
    d(r) {
      r && $(e);
    }
  };
}
class qr extends ot {
  constructor(e) {
    super(), st(this, e, null, Ur, rt, {});
  }
}
function jr(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function zt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let yt;
async function Vr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (yt && r.cachedLocationExpiry && yt.time + r.cachedLocationExpiry > Date.now()) {
          if (!yt.coords)
            break e;
          return yt.coords;
        }
        let u;
        try {
          return u = await new Promise((a, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (g) => {
                a(
                  [g.coords.longitude, g.coords.latitude].map((h) => h.toFixed(6)).join(",")
                );
              },
              (g) => {
                o(g);
              },
              r
            );
          }), u;
        } catch {
        } finally {
          r.cachedLocationExpiry && (yt = {
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
const Hr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Wi = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, zi = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Di = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Fi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ui = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Zr(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((k) => Number(k.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let g;
    i == "DD" && (g = `${r}° ${a}, ${u}° ${o}`);
    const h = Math.floor(r), v = Math.floor(u), S = (r - h) * 60, M = (u - v) * 60;
    if (i == "DM") {
      let k = qi(S, 3).toFixed(3).padStart(6, "0"), N = qi(M, 3).toFixed(3).padStart(6, "0");
      k.endsWith(".000") && N.endsWith(".000") && (k = k.replace(/\.000$/, ""), N = N.replace(/\.000$/, "")), g = `${h}° ${k}' ${a}, ${v}° ${N}' ${o}`;
    }
    if (i == "DMS") {
      const k = Math.floor(S), N = Math.floor(M);
      let C = ((S - k) * 60).toFixed(1).padStart(4, "0"), O = ((M - N) * 60).toFixed(1).padStart(4, "0");
      const I = k.toString().padStart(2, "0"), _ = N.toString().padStart(2, "0");
      C.endsWith(".0") && O.endsWith(".0") && (C = C.replace(/\.0$/, ""), O = O.replace(/\.0$/, "")), g = `${h}° ${I}' ${C}" ${a}, ${v}° ${_}' ${O}" ${o}`;
    }
    return g;
  } else
    throw new Error("no decimal coordinates to convert");
}
function qi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function gi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", a = null, o = [], g = !1;
  if (Hr.test(i))
    throw new Error("invalid coordinate value");
  if (Wi.test(i))
    if (o = Wi.exec(i), g = bt(o), g)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (zi.test(i))
    if (o = zi.exec(i), g = bt(o), g) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Di.test(i))
    if (o = Di.exec(i), g = bt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Fi.test(i))
    if (o = Fi.exec(i), g = bt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6] / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ui.test(i)) {
    if (o = Ui.exec(i), g = bt(o), o.filter((h) => h).length <= 5)
      throw new Error("invalid coordinates format");
    if (g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
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
    const v = o[0].trim();
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
        let P = 0, z = 0;
        for (; P <= I; )
          _ = v.indexOf(N[P], z), z = _ + 1, P++;
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
      closeEnough: Kr,
      toCoordinateFormat: Zr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function bt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const a = e[u], o = e[u + r], g = t.test(a) && t.test(o), h = n.test(a) && n.test(o), v = a == o;
    if (!(a == null && o == null)) {
      if (a == null || o == null)
        return !1;
      if (g || h || v)
        continue;
      return !1;
    }
  }
  return !0;
}
function ji(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Kr(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ji(this.decimalLatitude, Number(e[0])) && ji(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Yr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
gi.to = Yr;
const Qr = [
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
], Xr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Jr = [
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
], $r = [
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
function es() {
  const i = [];
  return Qr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Xr });
  }), [...i, ...Jr, ...$r];
}
const ts = es();
gi.formats = ts.map((i) => i.verbatimCoordinates);
const is = gi;
function Vi(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Hi(i) {
  let e, t;
  return e = new zr({}), {
    c() {
      Qe(e.$$.fragment);
    },
    m(n, r) {
      Ue(e, n, r), t = !0;
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qe(e, n);
    }
  };
}
function Zi(i) {
  let e, t, n, r, u;
  return t = new Fr({}), {
    c() {
      e = X("button"), Qe(t.$$.fragment), x(e, "type", "button"), x(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), x(e, "class", "svelte-bz0zu3"), ct(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, o) {
      te(a, e, o), Ue(t, e, null), n = !0, r || (u = he(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(a, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      1024) && x(
        e,
        "title",
        /*reverseButtonTitle*/
        a[10]
      ), (!n || o[0] & /*reverseActive*/
      1) && ct(
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
      a && $(e), qe(t), r = !1, u();
    }
  };
}
function ns(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, a, o = Bi(
    /*listFeatures*/
    i[13]
  );
  const g = (h) => (
    /*feature*/
    h[97].id + /*feature*/
    (h[97].address ? "," + /*feature*/
    h[97].address : "")
  );
  for (let h = 0; h < o.length; h += 1) {
    let v = Vi(i, o, h), S = g(v);
    n.set(S, t[h] = Ki(S, v));
  }
  return {
    c() {
      e = X("ul");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(h, v) {
      te(h, e, v);
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
      102823936 && (o = Bi(
        /*listFeatures*/
        h[13]
      ), It(), t = Er(t, v, g, 1, h, o, n, e, wr, Ki, null, Vi), At());
    },
    i(h) {
      if (!r) {
        for (let v = 0; v < o.length; v += 1)
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
      h && $(e);
      for (let v = 0; v < t.length; v += 1)
        t[v].d();
      u = !1, Ve(a);
    }
  };
}
function rs(i) {
  let e, t, n, r, u, a;
  return t = new mn({}), {
    c() {
      e = X("div"), Qe(t.$$.fragment), n = Le(), r = X("div"), u = Ye(
        /*noResultsMessage*/
        i[8]
      ), x(r, "class", "svelte-bz0zu3"), x(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, g) {
      te(o, e, g), Ue(t, e, null), j(e, n), j(e, r), j(r, u), a = !0;
    },
    p(o, g) {
      (!a || g[0] & /*noResultsMessage*/
      256) && _t(
        u,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      a || (oe(t.$$.fragment, o), a = !0);
    },
    o(o) {
      de(t.$$.fragment, o), a = !1;
    },
    d(o) {
      o && $(e), qe(t);
    }
  };
}
function ss(i) {
  let e = "", t;
  return {
    c() {
      t = Ye(e);
    },
    m(n, r) {
      te(n, t, r);
    },
    p: re,
    i: re,
    o: re,
    d(n) {
      n && $(t);
    }
  };
}
function os(i) {
  let e, t, n, r, u, a, o, g, h, v, S;
  return t = new mn({}), g = new gn({}), {
    c() {
      e = X("div"), Qe(t.$$.fragment), n = Le(), r = X("div"), u = Ye(
        /*errorMessage*/
        i[7]
      ), a = Le(), o = X("button"), Qe(g.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(o, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(M, k) {
      te(M, e, k), Ue(t, e, null), j(e, n), j(e, r), j(r, u), j(e, a), j(e, o), Ue(g, o, null), h = !0, v || (S = he(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), v = !0);
    },
    p(M, k) {
      (!h || k[0] & /*errorMessage*/
      128) && _t(
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
      M && $(e), qe(t), qe(g), v = !1, S();
    }
  };
}
function Ki(i, e) {
  var o;
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
  return n = new Gr({
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
          ((o = e[14]) == null ? void 0 : o.id) === /*feature*/
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
      t = fr(), Qe(n.$$.fragment), this.first = t;
    },
    m(g, h) {
      te(g, t, h), Ue(n, g, h), r = !0;
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
      g && $(t), qe(n, g);
    }
  };
}
function ls(i) {
  let e, t, n, r, u, a, o, g, h, v, S, M, k, N, C, O, I, _, P, z, Z, H = !1;
  u = new qr({}), S = new gn({});
  let G = (
    /*abortController*/
    i[20] && Hi()
  ), s = (
    /*enableReverse*/
    i[6] === "button" && Zi(i)
  );
  const l = (
    /*#slots*/
    i[70].default
  ), f = or(
    l,
    i,
    /*$$scope*/
    i[69],
    null
  ), m = [os, ss, rs, ns], c = [];
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
      e = Le(), t = X("form"), n = X("div"), r = X("button"), Qe(u.$$.fragment), a = Le(), o = X("input"), g = Le(), h = X("div"), v = X("button"), Qe(S.$$.fragment), M = Le(), G && G.c(), k = Le(), s && s.c(), N = Le(), f && f.c(), C = Le(), I && I.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), x(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), x(o, "class", "svelte-bz0zu3"), x(v, "type", "button"), x(
        v,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), x(v, "class", "svelte-bz0zu3"), x(h, "class", "clear-button-container svelte-bz0zu3"), ct(
        h,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", _ = Wt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), ct(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(p, d) {
      te(p, e, d), te(p, t, d), j(t, n), j(n, r), Ue(u, r, null), j(n, a), j(n, o), i[72](o), Ii(
        o,
        /*searchValue*/
        i[1]
      ), j(n, g), j(n, h), j(h, v), Ue(S, v, null), j(h, M), G && G.m(h, null), j(n, k), s && s.m(n, null), j(n, N), f && f.m(n, null), j(t, C), ~O && c[O].m(t, null), P = !0, z || (Z = [
        he(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        he(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        he(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        he(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        he(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        he(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        he(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        he(
          o,
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
        he(t, "submit", cr(
          /*handleSubmit*/
          i[22]
        ))
      ], z = !0);
    },
    p(p, d) {
      (!P || d[0] & /*placeholder*/
      512) && x(
        o,
        "placeholder",
        /*placeholder*/
        p[9]
      ), (!P || d[0] & /*placeholder*/
      512) && x(
        o,
        "aria-label",
        /*placeholder*/
        p[9]
      ), d[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      p[1] && Ii(
        o,
        /*searchValue*/
        p[1]
      ), (!P || d[0] & /*clearButtonTitle*/
      8) && x(
        v,
        "title",
        /*clearButtonTitle*/
        p[3]
      ), /*abortController*/
      p[20] ? G ? d[0] & /*abortController*/
      1048576 && oe(G, 1) : (G = Hi(), G.c(), oe(G, 1), G.m(h, null)) : G && (It(), de(G, 1, 1, () => {
        G = null;
      }), At()), (!P || d[0] & /*searchValue*/
      2) && ct(
        h,
        "displayable",
        /*searchValue*/
        p[1] !== ""
      ), /*enableReverse*/
      p[6] === "button" ? s ? (s.p(p, d), d[0] & /*enableReverse*/
      64 && oe(s, 1)) : (s = Zi(p), s.c(), oe(s, 1), s.m(n, N)) : s && (It(), de(s, 1, 1, () => {
        s = null;
      }), At()), f && f.p && (!P || d[2] & /*$$scope*/
      128) && ur(
        f,
        l,
        p,
        /*$$scope*/
        p[69],
        P ? lr(
          l,
          /*$$scope*/
          p[69],
          d,
          null
        ) : ar(
          /*$$scope*/
          p[69]
        ),
        null
      );
      let y = O;
      O = b(p), O === y ? ~O && c[O].p(p, d) : (I && (It(), de(c[y], 1, 1, () => {
        c[y] = null;
      }), At()), ~O ? (I = c[O], I ? I.p(p, d) : (I = c[O] = m[O](p), I.c()), oe(I, 1), I.m(t, null)) : I = null), (!P || d[0] & /*className*/
      4 && _ !== (_ = Wt(
        /*className*/
        p[2]
      ) + " svelte-bz0zu3")) && x(t, "class", _), (!P || d[0] & /*className, collapsed, searchValue*/
      38) && ct(
        t,
        "can-collapse",
        /*collapsed*/
        p[5] && /*searchValue*/
        p[1] === ""
      );
    },
    i(p) {
      P || (oe(H), oe(u.$$.fragment, p), oe(S.$$.fragment, p), oe(G), oe(s), oe(f, p), oe(I), P = !0);
    },
    o(p) {
      de(H), de(u.$$.fragment, p), de(S.$$.fragment, p), de(G), de(s), de(f, p), de(I), P = !1;
    },
    d(p) {
      p && ($(e), $(t)), qe(u), i[72](null), qe(S), G && G.d(), s && s.d(), f && f.d(p), ~O && c[O].d(), z = !1, Ve(Z);
    }
  };
}
function us(i, e, t) {
  let n, r, u, { $$slots: a = {}, $$scope: o } = e;
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
  let { class: h = void 0 } = e, { apiKey: v } = e, { bbox: S = void 0 } = e, { clearButtonTitle: M = "clear" } = e, { clearOnBlur: k = !1 } = e, { clearListOnPick: N = !1 } = e, { keepListOpen: C = !1 } = e, { collapsed: O = !1 } = e, { country: I = void 0 } = e, { debounceSearch: _ = 200 } = e, { enableReverse: P = "never" } = e, { errorMessage: z = "Something went wrong…" } = e, { filter: Z = () => !0 } = e, { flyTo: H = !0 } = e, { fuzzyMatch: G = !0 } = e, { language: s = void 0 } = e, { limit: l = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: m = f } = e, { mapController: c = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: p = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: d = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: w = P === "always" } = e, { reverseButtonTitle: E = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: A = "full-geometry" } = e, { showPlaceType: B = "if-needed" } = e, { showResultsWhileTyping: q = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: ee = !1 } = e, { markerOnSelected: U = !0 } = e, { types: V = void 0 } = e;
  const fe = [];
  let { reverseGeocodingTypes: Ge = fe } = e, { exhaustiveReverseGeocoding: Je = !1 } = e, { excludeTypes: $e = !1 } = e;
  const be = void 0;
  let { reverseGeocodingExcludeTypes: Oe = be } = e, { zoom: ge = g } = e, { apiUrl: ce = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: yi = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.4/icons/" } = e, { adjustUrlQuery: Vt = () => {
  } } = e, { adjustUrl: Ht = () => {
  } } = e;
  function _n(L) {
    Ne.focus(L);
  }
  function xn() {
    Ne.blur();
  }
  function bi(L, ie = !0, se = !1) {
    t(1, T = L), ie ? (t(15, Y = -1), wi()) : (Ei(void 0, !se, se), setTimeout(() => {
      Ne.focus(), Ne.select();
    }));
  }
  function Tn() {
    t(13, F = void 0), t(14, W = void 0), t(15, Y = -1);
  }
  function Mn() {
    t(64, le = []), t(14, W = void 0);
  }
  let F, le, W, vi = "", Ne, Y = -1, Re, Tt = [], et, lt, ut, Zt, We = !1;
  const Nn = /* @__PURE__ */ new Set(), He = hn();
  gr(() => {
    c && (c.setEventHandler(void 0), c.indicateReverse(!1), c.setSelectedMarker(-1), c.setFeatures(void 0, void 0, !1));
  });
  function wi(L) {
    if (t(17, We = !1), lt && (clearTimeout(lt), lt = void 0), Y > -1 && F)
      t(14, W = F[Y]), t(1, T = W.place_type[0] === "reverse" ? W.place_name : W.place_name.replace(/,.*/, "")), t(19, Re = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (T) {
      const ie = L || !Kt(T);
      Yt(T, { exact: !0 }).then(() => {
        t(64, le = F), t(14, W = void 0), ie && Cn();
      }).catch((se) => t(19, Re = se));
    }
  }
  function Kt(L) {
    try {
      return is(L, 6);
    } catch {
      return !1;
    }
  }
  async function Yt(L, { byId: ie = !1, exact: se = !1 } = {}) {
    var we, Pe, Ze;
    t(19, Re = void 0), et == null || et.abort();
    const ve = new AbortController();
    t(20, et = ve);
    try {
      const Q = Kt(L), gt = new URL(ce + "/" + encodeURIComponent(Q ? Q.decimalLongitude + "," + Q.decimalLatitude : L) + ".json"), Se = gt.searchParams;
      s !== void 0 && Se.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Jt] = (c == null ? void 0 : c.getCenterAndZoom()) ?? [];
      let Ie = (we = !Q || Ge === fe ? V : Ge) == null ? void 0 : we.map((me) => typeof me == "string" ? me : Jt === void 0 || (me[0] ?? 0) <= Jt && Jt < (me[1] ?? 1 / 0) ? me[2] : void 0).filter((me) => me !== void 0);
      Ie && (Ie = [...new Set(Ie)], Se.set("types", Ie.join(",")));
      const Si = !Q || Oe === be ? $e : Oe;
      if (Si && Se.set("excludeTypes", String(Si)), S && Se.set("bbox", S.map((me) => me.toFixed(6)).join(",")), I && Se.set("country", Array.isArray(I) ? I.join(",") : I), !ie && !Q) {
        const me = await Vr(c, y, ve);
        me && Se.set("proximity", me), (se || !q) && Se.set("autocomplete", "false"), Se.set("fuzzyMatch", String(G));
      }
      const mt = m === f ? l : m;
      mt !== void 0 && mt > 1 && (Ie == null ? void 0 : Ie.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), Q ? (mt === 1 || mt !== void 0 && (Je || (Ie == null ? void 0 : Ie.length) === 1)) && Se.set("limit", String(mt)) : l !== void 0 && Se.set("limit", String(l)), Se.set("key", v), Vt(Se), Ht(gt);
      const Hn = gt.searchParams.get("types") === "" && gt.searchParams.get("excludeTypes") !== "true", Mt = gt.toString();
      if (Mt === vi) {
        ie ? (N && t(13, F = void 0), t(14, W = Tt[0])) : (t(13, F = Tt), ((Pe = F[Y]) == null ? void 0 : Pe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      vi = Mt;
      let pt;
      if (Hn)
        pt = { type: "FeatureCollection", features: [] };
      else {
        const me = await fetch(Mt, { signal: ve.signal, ...J });
        if (!me.ok)
          throw new Error(await me.text());
        pt = await me.json();
      }
      He("response", { url: Mt, featureCollection: pt }), ie ? (N && t(13, F = void 0), t(14, W = pt.features[0]), Tt = [W]) : (t(13, F = pt.features.filter(Z)), Q && F.unshift({
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
      }), Tt = F, ((Ze = F[Y]) == null ? void 0 : Ze.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), Q && Ne.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      ve === et && t(20, et = void 0);
    }
  }
  function Cn() {
    var ve;
    if (!(le != null && le.length) || !H)
      return;
    const L = [180, 90, -180, -90], ie = !le.some((we) => !we.matching_text);
    let se;
    for (const we of le) {
      const Pe = dt(we);
      if (se = se === void 0 ? Pe : Pe === void 0 ? se : Math.max(se, Pe), ie || !we.matching_text)
        for (const Ze of [0, 1, 2, 3])
          L[Ze] = Math[Ze < 2 ? "min" : "max"](L[Ze], ((ve = we.bbox) == null ? void 0 : ve[Ze]) ?? we.center[Ze % 2]);
    }
    c && le.length > 0 && (W && L[0] === L[2] && L[1] === L[3] ? c.flyTo(W.center, dt(W)) : c.fitBounds(zt(L), 50, se));
  }
  function Qt() {
    !W || !c || (!W.bbox || W.bbox[0] === W.bbox[2] && W.bbox[1] === W.bbox[3] ? c.flyTo(W.center, dt(W)) : c.fitBounds(zt(W.bbox), 50, dt(W)));
  }
  function dt(L) {
    var se;
    if (!L.bbox || L.bbox[0] !== L.bbox[2] && L.bbox[1] !== L.bbox[3])
      return;
    const ie = L.id.replace(/\..*/, "");
    return (Array.isArray((se = L.properties) == null ? void 0 : se.categories) ? L.properties.categories.reduce(
      (ve, we) => {
        const Pe = ge[ie + "." + we];
        return ve === void 0 ? Pe : Pe === void 0 ? ve : Math.max(ve, Pe);
      },
      void 0
    ) : void 0) ?? ge[ie];
  }
  function kn(L) {
    t(0, w = P === "always"), t(13, F = void 0), t(14, W = void 0), t(15, Y = -1), bi(L[1].toFixed(6) + ", " + jr(L[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function On(L) {
    if (!F)
      return;
    let ie = L.key === "ArrowDown" ? 1 : L.key === "ArrowUp" ? -1 : 0;
    ie && (Ne.focus(), t(17, We = !0), L.preventDefault(), W && Y === -1 && t(15, Y = F.findIndex((se) => se.id === (W == null ? void 0 : W.id))), Y === (W || K ? 0 : -1) && ie === -1 && t(15, Y = F.length), t(15, Y += ie), Y >= F.length && t(15, Y = -1), Y < 0 && (W || K) && t(15, Y = 0));
  }
  function Ei(L, ie = !0, se = !1) {
    if (t(19, Re = void 0), t(14, W = void 0), t(17, We = !0), q || se) {
      if (lt && clearTimeout(lt), T.length < b)
        return;
      const ve = T;
      lt = window.setTimeout(
        () => {
          Yt(ve).catch((we) => t(19, Re = we));
        },
        ie ? _ : 0
      );
    } else
      t(13, F = void 0), t(19, Re = void 0);
  }
  function Xt(L) {
    W && (W == null ? void 0 : W.id) === (L == null ? void 0 : L.id) ? Qt() : (t(14, W = L), t(1, T = L.place_name));
  }
  function Li(L) {
    t(15, Y = L);
  }
  function Rn() {
    (!K || W) && t(15, Y = -1), ee && Qt();
  }
  const Pn = () => Ne.focus();
  function In(L) {
    si[L ? "unshift" : "push"](() => {
      Ne = L, t(18, Ne);
    });
  }
  function An() {
    T = this.value, t(1, T), t(17, We), t(31, k), t(16, ut);
  }
  const Bn = () => t(17, We = !0), Gn = () => t(17, We = !1), Wn = () => t(17, We = !0), zn = () => t(14, W = void 0), Dn = () => {
    t(1, T = ""), t(14, W = void 0), Ne.focus();
  }, Fn = () => t(0, w = !w), Un = () => t(19, Re = void 0), qn = (L) => Li(L), jn = (L) => Xt(L), Vn = () => {
  };
  return i.$$set = (L) => {
    "class" in L && t(2, h = L.class), "apiKey" in L && t(29, v = L.apiKey), "bbox" in L && t(30, S = L.bbox), "clearButtonTitle" in L && t(3, M = L.clearButtonTitle), "clearOnBlur" in L && t(31, k = L.clearOnBlur), "clearListOnPick" in L && t(32, N = L.clearListOnPick), "keepListOpen" in L && t(4, C = L.keepListOpen), "collapsed" in L && t(5, O = L.collapsed), "country" in L && t(33, I = L.country), "debounceSearch" in L && t(34, _ = L.debounceSearch), "enableReverse" in L && t(6, P = L.enableReverse), "errorMessage" in L && t(7, z = L.errorMessage), "filter" in L && t(35, Z = L.filter), "flyTo" in L && t(36, H = L.flyTo), "fuzzyMatch" in L && t(37, G = L.fuzzyMatch), "language" in L && t(38, s = L.language), "limit" in L && t(39, l = L.limit), "reverseGeocodingLimit" in L && t(40, m = L.reverseGeocodingLimit), "mapController" in L && t(41, c = L.mapController), "minLength" in L && t(42, b = L.minLength), "noResultsMessage" in L && t(8, p = L.noResultsMessage), "placeholder" in L && t(9, d = L.placeholder), "proximity" in L && t(43, y = L.proximity), "reverseActive" in L && t(0, w = L.reverseActive), "reverseButtonTitle" in L && t(10, E = L.reverseButtonTitle), "searchValue" in L && t(1, T = L.searchValue), "pickedResultStyle" in L && t(44, A = L.pickedResultStyle), "showPlaceType" in L && t(11, B = L.showPlaceType), "showResultsWhileTyping" in L && t(45, q = L.showResultsWhileTyping), "selectFirst" in L && t(46, K = L.selectFirst), "flyToSelected" in L && t(47, ee = L.flyToSelected), "markerOnSelected" in L && t(48, U = L.markerOnSelected), "types" in L && t(49, V = L.types), "reverseGeocodingTypes" in L && t(50, Ge = L.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in L && t(51, Je = L.exhaustiveReverseGeocoding), "excludeTypes" in L && t(52, $e = L.excludeTypes), "reverseGeocodingExcludeTypes" in L && t(53, Oe = L.reverseGeocodingExcludeTypes), "zoom" in L && t(54, ge = L.zoom), "apiUrl" in L && t(55, ce = L.apiUrl), "fetchParameters" in L && t(56, J = L.fetchParameters), "iconsBaseUrl" in L && t(12, yi = L.iconsBaseUrl), "adjustUrlQuery" in L && t(57, Vt = L.adjustUrlQuery), "adjustUrl" in L && t(58, Ht = L.adjustUrl), "$$scope" in L && t(69, o = L.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, w = P === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && A !== "marker-only" && W && !W.address && W.geometry.type === "Point" && W.place_type[0] !== "reverse" && Yt(W.id, { byId: !0 }).catch((L) => t(19, Re = L)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (c && W && W.id !== Zt && H && (Qt(), N && t(13, F = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, Zt = W == null ? void 0 : W.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ut = We), k && !ut && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < b && (t(13, F = void 0), t(19, Re = void 0), t(64, le = F)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && F != null && F.length && Y == -1 && !W && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== F && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && c && c.setEventHandler((L) => {
      switch (L.type) {
        case "mapClick":
          w && kn(L.coordinates);
          break;
        case "markerClick":
          {
            const ie = F == null ? void 0 : F.find((se) => se.id === L.id);
            ie && Xt(ie);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = ut ? (F == null ? void 0 : F.findIndex((ie) => ie.id === L.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = F == null ? void 0 : F[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && c && r && H && ee && c.flyTo(r.center, dt(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = A === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (U || c == null || c.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && c && U && !le && (c.setFeatures(r ? [r] : void 0, W, n), c.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && c && c.setFeatures(le, W, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le && c && c.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && c) {
      const L = Kt(T);
      c.setReverseMarker(L ? [L.decimalLongitude, L.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && He("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && He("pick", { feature: W }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(F != null && F.length) && (ut || C)), i.$$.dirty[2] & /*optionsVisible*/
    32 && He("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && He("featureslisted", { features: F }), i.$$.dirty[2] & /*markedFeatures*/
    4 && He("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && He("reversetoggle", { reverse: w }), i.$$.dirty[0] & /*searchValue*/
    2 && He("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
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
    z,
    p,
    d,
    E,
    B,
    yi,
    F,
    W,
    Y,
    ut,
    We,
    Ne,
    Re,
    et,
    Nn,
    wi,
    On,
    Ei,
    Xt,
    Li,
    Rn,
    g,
    v,
    S,
    k,
    N,
    I,
    _,
    Z,
    H,
    G,
    s,
    l,
    m,
    c,
    b,
    y,
    A,
    q,
    K,
    ee,
    U,
    V,
    Ge,
    Je,
    $e,
    Oe,
    ge,
    ce,
    J,
    Vt,
    Ht,
    _n,
    xn,
    bi,
    Tn,
    Mn,
    le,
    Zt,
    r,
    u,
    n,
    o,
    a,
    Pn,
    In,
    An,
    Bn,
    Gn,
    Wn,
    zn,
    Dn,
    Fn,
    Un,
    qn,
    jn,
    Vn
  ];
}
let as = class extends ot {
  constructor(e) {
    super(), st(
      this,
      e,
      us,
      ls,
      rt,
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
function Dt(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function mi(i, e, t = {}) {
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
  return Dt({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function ai(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function yn(i, e, t = {}) {
  return Dt({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function bn(i, e, t) {
  if (i !== null)
    for (var n, r, u, a, o, g, h, v = 0, S = 0, M, k = i.type, N = k === "FeatureCollection", C = k === "Feature", O = N ? i.features.length : 1, I = 0; I < O; I++) {
      h = N ? i.features[I].geometry : C ? i.geometry : i, M = h ? h.type === "GeometryCollection" : !1, o = M ? h.geometries.length : 1;
      for (var _ = 0; _ < o; _++) {
        var P = 0, z = 0;
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
                z
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
                  z
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
                    z
                  ) === !1)
                    return !1;
                  S++;
                }
                Z === "MultiLineString" && P++, Z === "Polygon" && z++;
              }
              Z === "Polygon" && P++;
              break;
            case "MultiPolygon":
              for (n = 0; n < g.length; n++) {
                for (z = 0, r = 0; r < g[n].length; r++) {
                  for (u = 0; u < g[n][r].length - v; u++) {
                    if (e(
                      g[n][r][u],
                      S,
                      I,
                      P,
                      z
                    ) === !1)
                      return !1;
                    S++;
                  }
                  z++;
                }
                P++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (bn(a.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function pi(i, e) {
  var t, n, r, u, a, o, g, h, v, S, M = 0, k = i.type === "FeatureCollection", N = i.type === "Feature", C = k ? i.features.length : 1;
  for (t = 0; t < C; t++) {
    for (o = k ? i.features[t].geometry : N ? i.geometry : i, h = k ? i.features[t].properties : N ? i.properties : {}, v = k ? i.features[t].bbox : N ? i.bbox : void 0, S = k ? i.features[t].id : N ? i.id : void 0, g = o ? o.type === "GeometryCollection" : !1, a = g ? o.geometries.length : 1, r = 0; r < a; r++) {
      if (u = g ? o.geometries[r] : o, u === null) {
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
function fs(i, e) {
  pi(i, function(t, n, r, u, a) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Dt(t, r, { bbox: u, id: a }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var g;
    switch (o) {
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
      if (e(Dt(S, r), n, h) === !1)
        return !1;
    }
  });
}
function cs(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return bn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var Yi = cs, hs = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ni = Math.ceil, Te = Math.floor, ye = "[BigNumber Error] ", Qi = ye + "Number primitive has more than 15 significant digits: ", Ce = 1e14, D = 14, Xi = 9007199254740991, ri = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ke = 1e7, Ee = 1e9;
function vn(i) {
  var e, t, n, r = _.prototype = { constructor: _, toString: null, valueOf: null }, u = new _(1), a = 20, o = 4, g = -7, h = 21, v = -1e7, S = 1e7, M = !1, k = 1, N = 0, C = {
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
  function _(s, l) {
    var f, m, c, b, p, d, y, w, E = this;
    if (!(E instanceof _)) return new _(s, l);
    if (l == null) {
      if (s && s._isBigNumber === !0) {
        E.s = s.s, !s.c || s.e > S ? E.c = E.e = null : s.e < v ? E.c = [E.e = 0] : (E.e = s.e, E.c = s.c.slice());
        return;
      }
      if ((d = typeof s == "number") && s * 0 == 0) {
        if (E.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (b = 0, p = s; p >= 10; p /= 10, b++) ;
          b > S ? E.c = E.e = null : (E.e = b, E.c = [s]);
          return;
        }
        w = String(s);
      } else {
        if (!hs.test(w = String(s))) return n(E, w, d);
        E.s = w.charCodeAt(0) == 45 ? (w = w.slice(1), -1) : 1;
      }
      (b = w.indexOf(".")) > -1 && (w = w.replace(".", "")), (p = w.search(/e/i)) > 0 ? (b < 0 && (b = p), b += +w.slice(p + 1), w = w.substring(0, p)) : b < 0 && (b = w.length);
    } else {
      if (ne(l, 2, O.length, "Base"), l == 10 && I)
        return E = new _(s), H(E, a + E.e + 1, o);
      if (w = String(s), d = typeof s == "number") {
        if (s * 0 != 0) return n(E, w, d, l);
        if (E.s = 1 / s < 0 ? (w = w.slice(1), -1) : 1, _.DEBUG && w.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Qi + s);
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
          return n(E, String(s), d, l);
        }
      d = !1, w = t(w, l, 10, E.s), (b = w.indexOf(".")) > -1 ? w = w.replace(".", "") : b = w.length;
    }
    for (p = 0; w.charCodeAt(p) === 48; p++) ;
    for (y = w.length; w.charCodeAt(--y) === 48; ) ;
    if (w = w.slice(p, ++y)) {
      if (y -= p, d && _.DEBUG && y > 15 && (s > Xi || s !== Te(s)))
        throw Error(Qi + E.s * s);
      if ((b = b - p - 1) > S)
        E.c = E.e = null;
      else if (b < v)
        E.c = [E.e = 0];
      else {
        if (E.e = b, E.c = [], p = (b + 1) % D, b < 0 && (p += D), p < y) {
          for (p && E.c.push(+w.slice(0, p)), y -= D; p < y; )
            E.c.push(+w.slice(p, p += D));
          p = D - (w = w.slice(p)).length;
        } else
          p -= y;
        for (; p--; w += "0") ;
        E.c.push(+w);
      }
    } else
      E.c = [E.e = 0];
  }
  _.clone = vn, _.ROUND_UP = 0, _.ROUND_DOWN = 1, _.ROUND_CEIL = 2, _.ROUND_FLOOR = 3, _.ROUND_HALF_UP = 4, _.ROUND_HALF_DOWN = 5, _.ROUND_HALF_EVEN = 6, _.ROUND_HALF_CEIL = 7, _.ROUND_HALF_FLOOR = 8, _.EUCLID = 9, _.config = _.set = function(s) {
    var l, f;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(l = "DECIMAL_PLACES") && (f = s[l], ne(f, 0, Ee, l), a = f), s.hasOwnProperty(l = "ROUNDING_MODE") && (f = s[l], ne(f, 0, 8, l), o = f), s.hasOwnProperty(l = "EXPONENTIAL_AT") && (f = s[l], f && f.pop ? (ne(f[0], -1e9, 0, l), ne(f[1], 0, Ee, l), g = f[0], h = f[1]) : (ne(f, -1e9, Ee, l), g = -(h = f < 0 ? -f : f))), s.hasOwnProperty(l = "RANGE"))
          if (f = s[l], f && f.pop)
            ne(f[0], -1e9, -1, l), ne(f[1], 1, Ee, l), v = f[0], S = f[1];
          else if (ne(f, -1e9, Ee, l), f)
            v = -(S = f < 0 ? -f : f);
          else
            throw Error(ye + l + " cannot be zero: " + f);
        if (s.hasOwnProperty(l = "CRYPTO"))
          if (f = s[l], f === !!f)
            if (f)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                M = f;
              else
                throw M = !f, Error(ye + "crypto unavailable");
            else
              M = f;
          else
            throw Error(ye + l + " not true or false: " + f);
        if (s.hasOwnProperty(l = "MODULO_MODE") && (f = s[l], ne(f, 0, 9, l), k = f), s.hasOwnProperty(l = "POW_PRECISION") && (f = s[l], ne(f, 0, Ee, l), N = f), s.hasOwnProperty(l = "FORMAT"))
          if (f = s[l], typeof f == "object") C = f;
          else throw Error(ye + l + " not an object: " + f);
        if (s.hasOwnProperty(l = "ALPHABET"))
          if (f = s[l], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            I = f.slice(0, 10) == "0123456789", O = f;
          else
            throw Error(ye + l + " invalid: " + f);
      } else
        throw Error(ye + "Object expected: " + s);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, h],
      RANGE: [v, S],
      CRYPTO: M,
      MODULO_MODE: k,
      POW_PRECISION: N,
      FORMAT: C,
      ALPHABET: O
    };
  }, _.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!_.DEBUG) return !0;
    var l, f, m = s.c, c = s.e, b = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((b === 1 || b === -1) && c >= -1e9 && c <= Ee && c === Te(c)) {
        if (m[0] === 0) {
          if (c === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (c + 1) % D, l < 1 && (l += D), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (f = m[l], f < 0 || f >= Ce || f !== Te(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (m === null && c === null && (b === null || b === 1 || b === -1))
      return !0;
    throw Error(ye + "Invalid BigNumber: " + s);
  }, _.maximum = _.max = function() {
    return z(arguments, -1);
  }, _.minimum = _.min = function() {
    return z(arguments, 1);
  }, _.random = function() {
    var s = 9007199254740992, l = Math.random() * s & 2097151 ? function() {
      return Te(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var m, c, b, p, d, y = 0, w = [], E = new _(u);
      if (f == null ? f = a : ne(f, 0, Ee), p = ni(f / D), M)
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
      for (p = w[--y], f %= D, p && f && (d = ri[D - f], w[y] = Te(p / d) * d); w[y] === 0; w.pop(), y--) ;
      if (y < 0)
        w = [b = 0];
      else {
        for (b = -1; w[0] === 0; w.splice(0, 1), b -= D) ;
        for (y = 1, d = w[0]; d >= 10; d /= 10, y++) ;
        y < D && (b -= D - y);
      }
      return E.e = b, E.c = w, E;
    };
  }(), _.sum = function() {
    for (var s = 1, l = arguments, f = new _(l[0]); s < l.length; ) f = f.plus(l[s++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function l(f, m, c, b) {
      for (var p, d = [0], y, w = 0, E = f.length; w < E; ) {
        for (y = d.length; y--; d[y] *= m) ;
        for (d[0] += b.indexOf(f.charAt(w++)), p = 0; p < d.length; p++)
          d[p] > c - 1 && (d[p + 1] == null && (d[p + 1] = 0), d[p + 1] += d[p] / c | 0, d[p] %= c);
      }
      return d.reverse();
    }
    return function(f, m, c, b, p) {
      var d, y, w, E, T, A, B, q, K = f.indexOf("."), ee = a, U = o;
      for (K >= 0 && (E = N, N = 0, f = f.replace(".", ""), q = new _(m), A = q.pow(f.length - K), N = E, q.c = l(
        De(xe(A.c), A.e, "0"),
        10,
        c,
        s
      ), q.e = q.c.length), B = l(f, m, c, p ? (d = O, s) : (d = s, O)), w = E = B.length; B[--E] == 0; B.pop()) ;
      if (!B[0]) return d.charAt(0);
      if (K < 0 ? --w : (A.c = B, A.e = w, A.s = b, A = e(A, q, ee, U, c), B = A.c, T = A.r, w = A.e), y = w + ee + 1, K = B[y], E = c / 2, T = T || y < 0 || B[y + 1] != null, T = U < 4 ? (K != null || T) && (U == 0 || U == (A.s < 0 ? 3 : 2)) : K > E || K == E && (U == 4 || T || U == 6 && B[y - 1] & 1 || U == (A.s < 0 ? 8 : 7)), y < 1 || !B[0])
        f = T ? De(d.charAt(1), -ee, d.charAt(0)) : d.charAt(0);
      else {
        if (B.length = y, T)
          for (--c; ++B[--y] > c; )
            B[y] = 0, y || (++w, B = [1].concat(B));
        for (E = B.length; !B[--E]; ) ;
        for (K = 0, f = ""; K <= E; f += d.charAt(B[K++])) ;
        f = De(f, w, d.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, c, b) {
      var p, d, y, w, E = 0, T = m.length, A = c % Ke, B = c / Ke | 0;
      for (m = m.slice(); T--; )
        y = m[T] % Ke, w = m[T] / Ke | 0, p = B * y + w * A, d = A * y + p % Ke * Ke + E, E = (d / b | 0) + (p / Ke | 0) + B * w, m[T] = d % b;
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
      var y, w, E, T, A, B, q, K, ee, U, V, fe, Ge, Je, $e, be, Oe, ge = m.s == c.s ? 1 : -1, ce = m.c, J = c.c;
      if (!ce || !ce[0] || !J || !J[0])
        return new _(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !c.s || (ce ? J && ce[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            ce && ce[0] == 0 || !J ? ge * 0 : ge / 0
          )
        );
      for (K = new _(ge), ee = K.c = [], w = m.e - c.e, ge = b + w + 1, d || (d = Ce, w = Me(m.e / D) - Me(c.e / D), ge = ge / D | 0), E = 0; J[E] == (ce[E] || 0); E++) ;
      if (J[E] > (ce[E] || 0) && w--, ge < 0)
        ee.push(1), T = !0;
      else {
        for (Je = ce.length, be = J.length, E = 0, ge += 2, A = Te(d / (J[0] + 1)), A > 1 && (J = s(J, A, d), ce = s(ce, A, d), be = J.length, Je = ce.length), Ge = be, U = ce.slice(0, be), V = U.length; V < be; U[V++] = 0) ;
        Oe = J.slice(), Oe = [0].concat(Oe), $e = J[0], J[1] >= d / 2 && $e++;
        do {
          if (A = 0, y = l(J, U, be, V), y < 0) {
            if (fe = U[0], be != V && (fe = fe * d + (U[1] || 0)), A = Te(fe / $e), A > 1)
              for (A >= d && (A = d - 1), B = s(J, A, d), q = B.length, V = U.length; l(B, U, q, V) == 1; )
                A--, f(B, be < q ? Oe : J, q, d), q = B.length, y = 1;
            else
              A == 0 && (y = A = 1), B = J.slice(), q = B.length;
            if (q < V && (B = [0].concat(B)), f(U, B, V, d), V = U.length, y == -1)
              for (; l(J, U, be, V) < 1; )
                A++, f(U, be < V ? Oe : J, V, d), V = U.length;
          } else y === 0 && (A++, U = [0]);
          ee[E++] = A, U[0] ? U[V++] = ce[Ge] || 0 : (U = [ce[Ge]], V = 1);
        } while ((Ge++ < Je || U[0] != null) && ge--);
        T = U[0] != null, ee[0] || ee.splice(0, 1);
      }
      if (d == Ce) {
        for (E = 1, ge = ee[0]; ge >= 10; ge /= 10, E++) ;
        H(K, b + (K.e = E + w * D - 1) + 1, p, T);
      } else
        K.e = w, K.r = +T;
      return K;
    };
  }();
  function P(s, l, f, m) {
    var c, b, p, d, y;
    if (f == null ? f = o : ne(f, 0, 8), !s.c) return s.toString();
    if (c = s.c[0], p = s.e, l == null)
      y = xe(s.c), y = m == 1 || m == 2 && (p <= g || p >= h) ? Rt(y, p) : De(y, p, "0");
    else if (s = H(new _(s), l, f), b = s.e, y = xe(s.c), d = y.length, m == 1 || m == 2 && (l <= b || b <= g)) {
      for (; d < l; y += "0", d++) ;
      y = Rt(y, b);
    } else if (l -= p, y = De(y, b, "0"), b + 1 > d) {
      if (--l > 0) for (y += "."; l--; y += "0") ;
    } else if (l += b - d, l > 0)
      for (b + 1 == d && (y += "."); l--; y += "0") ;
    return s.s < 0 && c ? "-" + y : y;
  }
  function z(s, l) {
    for (var f, m, c = 1, b = new _(s[0]); c < s.length; c++)
      m = new _(s[c]), (!m.s || (f = tt(b, m)) === l || f === 0 && b.s === l) && (b = m);
    return b;
  }
  function Z(s, l, f) {
    for (var m = 1, c = l.length; !l[--c]; l.pop()) ;
    for (c = l[0]; c >= 10; c /= 10, m++) ;
    return (f = m + f * D - 1) > S ? s.c = s.e = null : f < v ? s.c = [s.e = 0] : (s.e = f, s.c = l), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, f = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, c = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(b, p, d, y) {
      var w, E = d ? p : p.replace(c, "");
      if (m.test(E))
        b.s = isNaN(E) ? null : E < 0 ? -1 : 1;
      else {
        if (!d && (E = E.replace(s, function(T, A, B) {
          return w = (B = B.toLowerCase()) == "x" ? 16 : B == "b" ? 2 : 8, !y || y == w ? A : T;
        }), y && (w = y, E = E.replace(l, "$1").replace(f, "0.$1")), p != E))
          return new _(E, w);
        if (_.DEBUG)
          throw Error(ye + "Not a" + (y ? " base " + y : "") + " number: " + p);
        b.s = null;
      }
      b.c = b.e = null;
    };
  }();
  function H(s, l, f, m) {
    var c, b, p, d, y, w, E, T = s.c, A = ri;
    if (T) {
      e: {
        for (c = 1, d = T[0]; d >= 10; d /= 10, c++) ;
        if (b = l - c, b < 0)
          b += D, p = l, y = T[w = 0], E = Te(y / A[c - p - 1] % 10);
        else if (w = ni((b + 1) / D), w >= T.length)
          if (m) {
            for (; T.length <= w; T.push(0)) ;
            y = E = 0, c = 1, b %= D, p = b - D + 1;
          } else
            break e;
        else {
          for (y = d = T[w], c = 1; d >= 10; d /= 10, c++) ;
          b %= D, p = b - D + c, E = p < 0 ? 0 : Te(y / A[c - p - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[w + 1] != null || (p < 0 ? y : y % A[c - p - 1]), m = f < 4 ? (E || m) && (f == 0 || f == (s.s < 0 ? 3 : 2)) : E > 5 || E == 5 && (f == 4 || m || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (b > 0 ? p > 0 ? y / A[c - p] : 0 : T[w - 1]) % 10 & 1 || f == (s.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, m ? (l -= s.e + 1, T[0] = A[(D - l % D) % D], s.e = -l || 0) : T[0] = s.e = 0, s;
        if (b == 0 ? (T.length = w, d = 1, w--) : (T.length = w + 1, d = A[D - b], T[w] = p > 0 ? Te(y / A[c - p] % A[p]) * d : 0), m)
          for (; ; )
            if (w == 0) {
              for (b = 1, p = T[0]; p >= 10; p /= 10, b++) ;
              for (p = T[0] += d, d = 1; p >= 10; p /= 10, d++) ;
              b != d && (s.e++, T[0] == Ce && (T[0] = 1));
              break;
            } else {
              if (T[w] += d, T[w] != Ce) break;
              T[w--] = 0, d = 1;
            }
        for (b = T.length; T[--b] === 0; T.pop()) ;
      }
      s.e > S ? s.c = s.e = null : s.e < v && (s.c = [s.e = 0]);
    }
    return s;
  }
  function G(s) {
    var l, f = s.e;
    return f === null ? s.toString() : (l = xe(s.c), l = f <= g || f >= h ? Rt(l, f) : De(l, f, "0"), s.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new _(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, l) {
    return tt(this, new _(s, l));
  }, r.decimalPlaces = r.dp = function(s, l) {
    var f, m, c, b = this;
    if (s != null)
      return ne(s, 0, Ee), l == null ? l = o : ne(l, 0, 8), H(new _(b), s + b.e + 1, l);
    if (!(f = b.c)) return null;
    if (m = ((c = f.length - 1) - Me(this.e / D)) * D, c = f[c]) for (; c % 10 == 0; c /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, l) {
    return e(this, new _(s, l), a, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, l) {
    return e(this, new _(s, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, l) {
    var f, m, c, b, p, d, y, w, E, T = this;
    if (s = new _(s), s.c && !s.isInteger())
      throw Error(ye + "Exponent not an integer: " + G(s));
    if (l != null && (l = new _(l)), d = s.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !s.c || !s.c[0])
      return E = new _(Math.pow(+G(T), d ? s.s * (2 - Ot(s)) : +G(s))), l ? E.mod(l) : E;
    if (y = s.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new _(NaN);
      m = !y && T.isInteger() && l.isInteger(), m && (T = T.mod(l));
    } else {
      if (s.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || d && T.c[1] >= 24e7 : T.c[0] < 8e13 || d && T.c[0] <= 9999975e7)))
        return b = T.s < 0 && Ot(s) ? -0 : 0, T.e > -1 && (b = 1 / b), new _(y ? 1 / b : b);
      N && (b = ni(N / D + 2));
    }
    for (d ? (f = new _(0.5), y && (s.s = 1), w = Ot(s)) : (c = Math.abs(+G(s)), w = c % 2), E = new _(u); ; ) {
      if (w) {
        if (E = E.times(T), !E.c) break;
        b ? E.c.length > b && (E.c.length = b) : m && (E = E.mod(l));
      }
      if (c) {
        if (c = Te(c / 2), c === 0) break;
        w = c % 2;
      } else if (s = s.times(f), H(s, s.e + 1, 1), s.e > 14)
        w = Ot(s);
      else {
        if (c = +G(s), c === 0) break;
        w = c % 2;
      }
      T = T.times(T), b ? T.c && T.c.length > b && (T.c.length = b) : m && (T = T.mod(l));
    }
    return m ? E : (y && (E = u.div(E)), l ? E.mod(l) : b ? H(E, N, o, p) : E);
  }, r.integerValue = function(s) {
    var l = new _(this);
    return s == null ? s = o : ne(s, 0, 8), H(l, l.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, l) {
    return tt(this, new _(s, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, l) {
    return tt(this, new _(s, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, l) {
    return (l = tt(this, new _(s, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Me(this.e / D) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, l) {
    return tt(this, new _(s, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, l) {
    return (l = tt(this, new _(s, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, l) {
    var f, m, c, b, p = this, d = p.s;
    if (s = new _(s, l), l = s.s, !d || !l) return new _(NaN);
    if (d != l)
      return s.s = -l, p.plus(s);
    var y = p.e / D, w = s.e / D, E = p.c, T = s.c;
    if (!y || !w) {
      if (!E || !T) return E ? (s.s = -l, s) : new _(T ? p : NaN);
      if (!E[0] || !T[0])
        return T[0] ? (s.s = -l, s) : new _(E[0] ? p : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (y = Me(y), w = Me(w), E = E.slice(), d = y - w) {
      for ((b = d < 0) ? (d = -d, c = E) : (w = y, c = T), c.reverse(), l = d; l--; c.push(0)) ;
      c.reverse();
    } else
      for (m = (b = (d = E.length) < (l = T.length)) ? d : l, d = l = 0; l < m; l++)
        if (E[l] != T[l]) {
          b = E[l] < T[l];
          break;
        }
    if (b && (c = E, E = T, T = c, s.s = -s.s), l = (m = T.length) - (f = E.length), l > 0) for (; l--; E[f++] = 0) ;
    for (l = Ce - 1; m > d; ) {
      if (E[--m] < T[m]) {
        for (f = m; f && !E[--f]; E[f] = l) ;
        --E[f], E[m] += Ce;
      }
      E[m] -= T[m];
    }
    for (; E[0] == 0; E.splice(0, 1), --w) ;
    return E[0] ? Z(s, E, w) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, l) {
    var f, m, c = this;
    return s = new _(s, l), !c.c || !s.s || s.c && !s.c[0] ? new _(NaN) : !s.c || c.c && !c.c[0] ? new _(c) : (k == 9 ? (m = s.s, s.s = 1, f = e(c, s, 0, 3), s.s = m, f.s *= m) : f = e(c, s, 0, k), s = c.minus(f.times(s)), !s.c[0] && k == 1 && (s.s = c.s), s);
  }, r.multipliedBy = r.times = function(s, l) {
    var f, m, c, b, p, d, y, w, E, T, A, B, q, K, ee, U = this, V = U.c, fe = (s = new _(s, l)).c;
    if (!V || !fe || !V[0] || !fe[0])
      return !U.s || !s.s || V && !V[0] && !fe || fe && !fe[0] && !V ? s.c = s.e = s.s = null : (s.s *= U.s, !V || !fe ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Me(U.e / D) + Me(s.e / D), s.s *= U.s, y = V.length, T = fe.length, y < T && (q = V, V = fe, fe = q, c = y, y = T, T = c), c = y + T, q = []; c--; q.push(0)) ;
    for (K = Ce, ee = Ke, c = T; --c >= 0; ) {
      for (f = 0, A = fe[c] % ee, B = fe[c] / ee | 0, p = y, b = c + p; b > c; )
        w = V[--p] % ee, E = V[p] / ee | 0, d = B * w + E * A, w = A * w + d % ee * ee + q[b] + f, f = (w / K | 0) + (d / ee | 0) + B * E, q[b--] = w % K;
      q[b] = f;
    }
    return f ? ++m : q.splice(0, 1), Z(s, q, m);
  }, r.negated = function() {
    var s = new _(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, l) {
    var f, m = this, c = m.s;
    if (s = new _(s, l), l = s.s, !c || !l) return new _(NaN);
    if (c != l)
      return s.s = -l, m.minus(s);
    var b = m.e / D, p = s.e / D, d = m.c, y = s.c;
    if (!b || !p) {
      if (!d || !y) return new _(c / 0);
      if (!d[0] || !y[0]) return y[0] ? s : new _(d[0] ? m : c * 0);
    }
    if (b = Me(b), p = Me(p), d = d.slice(), c = b - p) {
      for (c > 0 ? (p = b, f = y) : (c = -c, f = d), f.reverse(); c--; f.push(0)) ;
      f.reverse();
    }
    for (c = d.length, l = y.length, c - l < 0 && (f = y, y = d, d = f, l = c), c = 0; l; )
      c = (d[--l] = d[l] + y[l] + c) / Ce | 0, d[l] = Ce === d[l] ? 0 : d[l] % Ce;
    return c && (d = [c].concat(d), ++p), Z(s, d, p);
  }, r.precision = r.sd = function(s, l) {
    var f, m, c, b = this;
    if (s != null && s !== !!s)
      return ne(s, 1, Ee), l == null ? l = o : ne(l, 0, 8), H(new _(b), s, l);
    if (!(f = b.c)) return null;
    if (c = f.length - 1, m = c * D + 1, c = f[c]) {
      for (; c % 10 == 0; c /= 10, m--) ;
      for (c = f[0]; c >= 10; c /= 10, m++) ;
    }
    return s && b.e + 1 > m && (m = b.e + 1), m;
  }, r.shiftedBy = function(s) {
    return ne(s, -9007199254740991, Xi), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, l, f, m, c, b = this, p = b.c, d = b.s, y = b.e, w = a + 4, E = new _("0.5");
    if (d !== 1 || !p || !p[0])
      return new _(!d || d < 0 && (!p || p[0]) ? NaN : p ? b : 1 / 0);
    if (d = Math.sqrt(+G(b)), d == 0 || d == 1 / 0 ? (l = xe(p), (l.length + y) % 2 == 0 && (l += "0"), d = Math.sqrt(+l), y = Me((y + 1) / 2) - (y < 0 || y % 2), d == 1 / 0 ? l = "5e" + y : (l = d.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + y), f = new _(l)) : f = new _(d + ""), f.c[0]) {
      for (y = f.e, d = y + w, d < 3 && (d = 0); ; )
        if (c = f, f = E.times(c.plus(e(b, c, w, 1))), xe(c.c).slice(0, d) === (l = xe(f.c)).slice(0, d))
          if (f.e < y && --d, l = l.slice(d - 3, d + 1), l == "9999" || !m && l == "4999") {
            if (!m && (H(c, c.e + a + 2, 0), c.times(c).eq(b))) {
              f = c;
              break;
            }
            w += 4, d += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (H(f, f.e + a + 2, 1), s = !f.times(f).eq(b));
            break;
          }
    }
    return H(f, f.e + a + 1, o, s);
  }, r.toExponential = function(s, l) {
    return s != null && (ne(s, 0, Ee), s++), P(this, s, l, 1);
  }, r.toFixed = function(s, l) {
    return s != null && (ne(s, 0, Ee), s = s + this.e + 1), P(this, s, l);
  }, r.toFormat = function(s, l, f) {
    var m, c = this;
    if (f == null)
      s != null && l && typeof l == "object" ? (f = l, l = null) : s && typeof s == "object" ? (f = s, s = l = null) : f = C;
    else if (typeof f != "object")
      throw Error(ye + "Argument not an object: " + f);
    if (m = c.toFixed(s, l), c.c) {
      var b, p = m.split("."), d = +f.groupSize, y = +f.secondaryGroupSize, w = f.groupSeparator || "", E = p[0], T = p[1], A = c.s < 0, B = A ? E.slice(1) : E, q = B.length;
      if (y && (b = d, d = y, y = b, q -= b), d > 0 && q > 0) {
        for (b = q % d || d, E = B.substr(0, b); b < q; b += d) E += w + B.substr(b, d);
        y > 0 && (E += w + B.slice(b)), A && (E = "-" + E);
      }
      m = T ? E + (f.decimalSeparator || "") + ((y = +f.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : T) : E;
    }
    return (f.prefix || "") + m + (f.suffix || "");
  }, r.toFraction = function(s) {
    var l, f, m, c, b, p, d, y, w, E, T, A, B = this, q = B.c;
    if (s != null && (d = new _(s), !d.isInteger() && (d.c || d.s !== 1) || d.lt(u)))
      throw Error(ye + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + G(d));
    if (!q) return new _(B);
    for (l = new _(u), w = f = new _(u), m = y = new _(u), A = xe(q), b = l.e = A.length - B.e - 1, l.c[0] = ri[(p = b % D) < 0 ? D + p : p], s = !s || d.comparedTo(l) > 0 ? b > 0 ? l : w : d, p = S, S = 1 / 0, d = new _(A), y.c[0] = 0; E = e(d, l, 0, 1), c = f.plus(E.times(m)), c.comparedTo(s) != 1; )
      f = m, m = c, w = y.plus(E.times(c = w)), y = c, l = d.minus(E.times(c = l)), d = c;
    return c = e(s.minus(f), m, 0, 1), y = y.plus(c.times(w)), f = f.plus(c.times(m)), y.s = w.s = B.s, b = b * 2, T = e(w, m, b, o).minus(B).abs().comparedTo(
      e(y, f, b, o).minus(B).abs()
    ) < 1 ? [w, m] : [y, f], S = p, T;
  }, r.toNumber = function() {
    return +G(this);
  }, r.toPrecision = function(s, l) {
    return s != null && ne(s, 1, Ee), P(this, s, l, 2);
  }, r.toString = function(s) {
    var l, f = this, m = f.s, c = f.e;
    return c === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (s == null ? l = c <= g || c >= h ? Rt(xe(f.c), c) : De(xe(f.c), c, "0") : s === 10 && I ? (f = H(new _(f), a + c + 1, o), l = De(xe(f.c), f.e, "0")) : (ne(s, 2, O.length, "Base"), l = t(De(xe(f.c), c, "0"), 10, s, m, !0)), m < 0 && f.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return G(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && _.set(i), _;
}
function Me(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function xe(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = D - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function tt(i, e) {
  var t, n, r = i.c, u = e.c, a = i.s, o = e.s, g = i.e, h = e.e;
  if (!a || !o) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -o : a;
  if (a != o) return a;
  if (t = a < 0, n = g == h, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return g > h ^ t ? 1 : -1;
  for (o = (g = r.length) < (h = u.length) ? g : h, a = 0; a < o; a++) if (r[a] != u[a]) return r[a] > u[a] ^ t ? 1 : -1;
  return g == h ? 0 : g > h ^ t ? 1 : -1;
}
function ne(i, e, t, n) {
  if (i < e || i > t || i !== Te(i))
    throw Error(ye + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Ot(i) {
  var e = i.c.length - 1;
  return Me(i.e / D) == e && i.c[e] % 2 != 0;
}
function Rt(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function De(i, e, t) {
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
var Be = vn(), ds = class {
  constructor(i) {
    R(this, "key");
    R(this, "left", null);
    R(this, "right", null);
    this.key = i;
  }
}, vt = class extends ds {
  constructor(i) {
    super(i);
  }
}, gs = class {
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
    const o = this.compare;
    let g;
    for (; ; )
      if (g = o(a.key, i), g > 0) {
        let h = a.left;
        if (h == null || (g = o(h.key, i), g > 0 && (a.left = h.right, h.right = a, a = h, h = a.left, h == null)))
          break;
        t == null ? n = a : t.left = a, t = a, a = h;
      } else if (g < 0) {
        let h = a.right;
        if (h == null || (g = o(h.key, i), g < 0 && (a.right = h.left, h.left = a, a = h, h = a.right, h == null)))
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
}, on, ln, Ft = class Et extends gs {
  constructor(t, n) {
    super();
    R(this, "root", null);
    R(this, "compare");
    R(this, "validKey");
    R(this, on, "[object Set]");
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
    return n != 0 && this.addNewRoot(new vt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new vt(t), n), this.root.key;
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
    const n = new Et(this.compare, this.validKey), r = this.modificationCount;
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
    const n = new Et(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new Et(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new Et(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, a) {
      let o, g;
      do {
        if (o = u.left, g = u.right, o != null) {
          const h = new vt(o.key);
          a.left = h, n(o, h);
        }
        if (g != null) {
          const h = new vt(g.key);
          a.right = h, u = g, a = h;
        }
      } while (g != null);
    }
    const r = new vt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new ps(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(ln = Symbol.iterator, on = Symbol.toStringTag, ln)]() {
    return new ms(this.wrap());
  }
}, wn = class {
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
}, ms = class extends wn {
  getValue(i) {
    return i.key;
  }
}, ps = class extends wn {
  getValue(i) {
    return [i.key, i.key];
  }
}, En = (i) => () => i, fi = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : En(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function ys(i) {
  const e = i ? (t, n, r, u, a) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : En(!1);
  return (t, n, r) => {
    const u = t.x, a = t.y, o = r.x, g = r.y, h = a.minus(g).times(n.x.minus(o)).minus(u.minus(o).times(n.y.minus(g)));
    return e(h, u, a, o, g) ? 0 : h.comparedTo(0);
  };
}
var bs = (i) => i, vs = (i) => {
  if (i) {
    const e = new Ft(fi(i)), t = new Ft(fi(i)), n = (u, a) => a.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new Be(0), y: new Be(0) }), r;
  }
  return bs;
}, ci = (i) => ({
  set: (e) => {
    je = ci(e);
  },
  reset: () => ci(i),
  compare: fi(i),
  snap: vs(i),
  orient: ys(i)
}), je = ci(), wt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), hi = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Bt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), Ln = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), Ut = (i) => Ln(i, i).sqrt(), ws = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Bt(r, n).div(Ut(r)).div(Ut(n));
}, Es = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Ln(r, n).div(Ut(r)).div(Ut(n));
}, Ji = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, $i = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, Ls = (i, e, t, n) => {
  if (e.x.isZero()) return $i(t, n, i.x);
  if (n.x.isZero()) return $i(i, e, t.x);
  if (e.y.isZero()) return Ji(t, n, i.y);
  if (n.y.isZero()) return Ji(i, e, t.y);
  const r = Bt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, a = Bt(u, e).div(r), o = Bt(u, n).div(r), g = i.x.plus(o.times(e.x)), h = t.x.plus(a.times(n.x)), v = i.y.plus(o.times(e.y)), S = t.y.plus(a.times(n.y)), M = g.plus(h).div(2), k = v.plus(S).div(2);
  return { x: M, y: k };
}, Ae = class Sn {
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
    const n = Sn.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : jt.compare(e.segment, t.segment));
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
        sine: ws(this.point, e.point, u.point),
        cosine: Es(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: a, cosine: o } = t.get(r), { sine: g, cosine: h } = t.get(u);
      return a.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? o.isLessThan(h) ? 1 : o.isGreaterThan(h) ? -1 : 0 : a.isLessThan(0) && g.isLessThan(0) ? o.isLessThan(h) ? -1 : o.isGreaterThan(h) ? 1 : 0 : g.isLessThan(a) ? -1 : g.isGreaterThan(a) ? 1 : 0;
    };
  }
}, Ss = class di {
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
      let a = null, o = u.leftSE, g = u.rightSE;
      const h = [o], v = o.point, S = [];
      for (; a = o, o = g, h.push(o), o.point !== v; )
        for (; ; ) {
          const M = o.getAvailableLinkedEvents();
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
            if (S[C].point === o.point) {
              k = C;
              break;
            }
          if (k !== null) {
            const C = S.splice(k)[0], O = h.splice(C.index);
            O.unshift(O[0].otherSE), t.push(new di(O.reverse()));
            continue;
          }
          S.push({
            index: h.length,
            point: o.point
          });
          const N = o.getLeftmostComparator(a);
          g = M.sort(N)[0].otherSE;
          break;
        }
      t.push(new di(h));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let h = 1, v = this.events.length - 1; h < v; h++) {
      const S = this.events[h].point, M = this.events[h + 1].point;
      je.orient(S, e, M) !== 0 && (t.push(S), e = S);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    je.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, g = [];
    for (let h = a; h != o; h += u)
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
    for (let a = 1, o = this.events.length; a < o; a++) {
      const g = this.events[a];
      Ae.compare(e, g) > 0 && (e = g);
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
}, en = class {
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
}, _s = class {
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
        if (u.isExteriorRing()) e.push(new en(u));
        else {
          const a = u.enclosingRing();
          a != null && a.poly || e.push(new en(a)), (t = a == null ? void 0 : a.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, xs = class {
  constructor(i, e = jt.compare) {
    R(this, "queue");
    R(this, "tree");
    R(this, "segments");
    this.queue = i, this.tree = new Ft(e), this.segments = [];
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
        const o = n.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (u = o), !n.isAnEndpoint(o))) {
          const g = this._splitSafely(n, o);
          for (let h = 0, v = g.length; h < v; h++)
            t.push(g[h]);
        }
      }
      let a = null;
      if (r) {
        const o = r.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (a = o), !r.isAnEndpoint(o))) {
          const g = this._splitSafely(r, o);
          for (let h = 0, v = g.length; h < v; h++)
            t.push(g[h]);
        }
      }
      if (u !== null || a !== null) {
        let o = null;
        u === null ? o = a : a === null ? o = u : o = Ae.comparePoints(
          u,
          a
        ) <= 0 ? u : a, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const g = e.split(o);
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
            for (let o = 0, g = a.length; o < g; o++)
              t.push(a[o]);
          }
          if (!r.isAnEndpoint(u)) {
            const a = this._splitSafely(r, u);
            for (let o = 0, g = a.length; o < g; o++)
              t.push(a[o]);
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
}, Ts = class {
  constructor() {
    R(this, "type");
    R(this, "numMultiPolys");
  }
  run(i, e, t) {
    Lt.type = i;
    const n = [new nn(e, !0)];
    for (let h = 0, v = t.length; h < v; h++)
      n.push(new nn(t[h], !1));
    if (Lt.numMultiPolys = n.length, Lt.type === "difference") {
      const h = n[0];
      let v = 1;
      for (; v < n.length; )
        hi(n[v].bbox, h.bbox) !== null ? v++ : n.splice(v, 1);
    }
    if (Lt.type === "intersection")
      for (let h = 0, v = n.length; h < v; h++) {
        const S = n[h];
        for (let M = h + 1, k = n.length; M < k; M++)
          if (hi(S.bbox, n[M].bbox) === null) return [];
      }
    const r = new Ft(Ae.compare);
    for (let h = 0, v = n.length; h < v; h++) {
      const S = n[h].getSweepEvents();
      for (let M = 0, k = S.length; M < k; M++)
        r.add(S[M]);
    }
    const u = new xs(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const h = u.process(a);
      for (let v = 0, S = h.length; v < S; v++) {
        const M = h[v];
        M.consumedBy === void 0 && r.add(M);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    je.reset();
    const o = Ss.factory(u.segments);
    return new _s(o).getGeom();
  }
}, Lt = new Ts(), qt = Lt, Ms = 0, jt = class Gt {
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
    this.id = ++Ms, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
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
    const o = e.leftSE.point.y, g = t.leftSE.point.y, h = e.rightSE.point.y, v = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (g.isLessThan(o) && g.isLessThan(h)) return 1;
      if (g.isGreaterThan(o) && g.isGreaterThan(h)) return -1;
      const S = e.comparePoint(t.leftSE.point);
      if (S < 0) return 1;
      if (S > 0) return -1;
      const M = t.comparePoint(e.rightSE.point);
      return M !== 0 ? M : -1;
    }
    if (n.isGreaterThan(r)) {
      if (o.isLessThan(g) && o.isLessThan(v)) return -1;
      if (o.isGreaterThan(g) && o.isGreaterThan(v)) return 1;
      const S = t.comparePoint(e.leftSE.point);
      if (S !== 0) return S;
      const M = e.comparePoint(t.rightSE.point);
      return M < 0 ? 1 : M > 0 ? -1 : 1;
    }
    if (o.isLessThan(g)) return -1;
    if (o.isGreaterThan(g)) return 1;
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
      const S = h.minus(o), M = u.minus(n), k = v.minus(g), N = a.minus(r);
      if (S.isGreaterThan(M) && k.isLessThan(N)) return 1;
      if (S.isLessThan(M) && k.isGreaterThan(N)) return -1;
    }
    return u.isGreaterThan(a) ? 1 : u.isLessThan(a) || h.isLessThan(v) ? -1 : h.isGreaterThan(v) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, u, a;
    const o = Ae.comparePoints(e, t);
    if (o < 0)
      r = e, u = t, a = 1;
    else if (o > 0)
      r = t, u = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const g = new Ae(r, !0), h = new Ae(u, !1);
    return new Gt(g, h, [n], [a]);
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
    return je.orient(this.leftSE.point, e, this.rightSE.point);
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
    const t = this.bbox(), n = e.bbox(), r = hi(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, a = this.rightSE.point, o = e.leftSE.point, g = e.rightSE.point, h = wt(t, o) && this.comparePoint(o) === 0, v = wt(n, u) && e.comparePoint(u) === 0, S = wt(t, g) && this.comparePoint(g) === 0, M = wt(n, a) && e.comparePoint(a) === 0;
    if (v && h)
      return M && !S ? a : !M && S ? g : null;
    if (v)
      return S && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (h)
      return M && a.x.eq(o.x) && a.y.eq(o.y) ? null : o;
    if (M && S) return null;
    if (M) return a;
    if (S) return g;
    const k = Ls(u, this.vector(), o, e.vector());
    return k === null || !wt(r, k) ? null : je.snap(k);
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
    const t = [], n = e.events !== void 0, r = new Ae(e, !0), u = new Ae(e, !1), a = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const o = new Gt(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return Ae.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Ae.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
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
    const r = Gt.compare(t, n);
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
        const o = n.rings[u], g = n.windings[u], h = t.rings.indexOf(o);
        h === -1 ? (t.rings.push(o), t.windings.push(g)) : t.windings[h] += g;
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
    for (let o = 0, g = this.rings.length; o < g; o++) {
      const h = this.rings[o], v = this.windings[o], S = t.indexOf(h);
      S === -1 ? (t.push(h), n.push(v)) : n[S] += v;
    }
    const u = [], a = [];
    for (let o = 0, g = t.length; o < g; o++) {
      if (n[o] === 0) continue;
      const h = t[o], v = h.poly;
      if (a.indexOf(v) === -1)
        if (h.isExterior) u.push(v);
        else {
          a.indexOf(v) === -1 && a.push(v);
          const S = u.indexOf(h.poly);
          S !== -1 && u.splice(S, 1);
        }
    }
    for (let o = 0, g = u.length; o < g; o++) {
      const h = u[o].multiPoly;
      r.indexOf(h) === -1 && r.push(h);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (qt.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === qt.numMultiPolys && n < r;
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
}, tn = class {
  constructor(i, e, t) {
    R(this, "poly");
    R(this, "isExterior");
    R(this, "segments");
    R(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = je.snap({ x: new Be(i[0][0]), y: new Be(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, a = i.length; u < a; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const o = je.snap({ x: new Be(i[u][0]), y: new Be(i[u][1]) });
      o.x.eq(r.x) && o.y.eq(r.y) || (this.segments.push(jt.fromRing(r, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), r = o);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(jt.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const n = this.segments[e];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, Ns = class {
  constructor(i, e) {
    R(this, "multiPoly");
    R(this, "exteriorRing");
    R(this, "interiorRings");
    R(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new tn(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new tn(i[t], this, !1);
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
}, nn = class {
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
      ll: { x: new Be(Number.POSITIVE_INFINITY), y: new Be(Number.POSITIVE_INFINITY) },
      ur: { x: new Be(Number.NEGATIVE_INFINITY), y: new Be(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new Ns(i[t], this);
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
}, Cs = (i, ...e) => qt.run("union", i, e), ks = (i, ...e) => qt.run("difference", i, e);
je.set;
function Os(i) {
  const e = [];
  if (pi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = ks(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? mi(n[0], t) : yn(n, t);
}
var Rs = Os;
function Ps(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return fs(i, function(t) {
    e.push(t);
  }), ai(e);
}
var Is = Ps;
function As(i, e = {}) {
  const t = [];
  if (pi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Cs(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? mi(n[0], e.properties) : yn(n, e.properties);
}
var Bs = As;
function rn(i, e) {
  const t = Rs(
    ai([
      mi([
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
  const n = zt(Yi(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, a = n[2] > 180, o = Is(i);
  if (o.features.length > 1 && (u || a))
    for (const g of o.features) {
      const h = zt(Yi(g));
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
    ai([
      o.features.length < 2 ? i : Bs(o) ?? i,
      t
    ])
  );
}
const sn = "EPSG:4326";
function Gs(i) {
  var u;
  const e = i.getProperties(), { isMask: t } = e, n = (u = i.getGeometry()) == null ? void 0 : u.getType(), r = t ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new ir({
    stroke: t ? void 0 : new Ri({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: t ? new Oi({
      color: "#00000020"
    }) : void 0,
    image: new tr({
      src: `/icons/marker_${e.isReverse ? "reverse" : e.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: e.isSelected ? 2 : e.isReverse ? 0 : 1,
    text: e.isSelected && e.tooltip ? new nr({
      backgroundFill: new Oi({ color: "white" }),
      text: e.tooltip,
      offsetY: -40,
      backgroundStroke: new Ri({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function Ws(i, e = {}, t = {}, n = Gs) {
  let r = -1, u, a, o, g = !1;
  const h = new Xn({
    updateWhileAnimating: !0
  });
  i.addLayer(h);
  const v = new er({});
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
    return $n() ?? i.getView().getProjection();
  }
  function M(N) {
    return N.transform(sn, S());
  }
  const k = (N) => {
    a == null || a({
      type: "mapClick",
      coordinates: ki(N.coordinate, S())
    });
  };
  return {
    setEventHandler(N) {
      N ? (a = N, i.on("click", k)) : (a = void 0, i.un("click", k));
    },
    flyTo(N, C) {
      i.getView().animate({
        center: Nt(N, S()),
        ...C ? { zoom: C } : {},
        duration: 2e3,
        ...e
      });
    },
    fitBounds(N, C, O) {
      i.getView().fit(Jn(N, sn, S()), {
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
      o ? N ? o.getGeometry().setCoordinates(
        Nt(N, S())
      ) : (v.removeFeature(o), o.dispose(), o = void 0) : N && (o = new ze(
        new ti(Nt(N, S()))
      ), o.setProperties({ isReverse: !0 }), v.addFeature(o));
    },
    setFeatures(N, C, O) {
      function I(_) {
        var P;
        if (_)
          for (const z of _.features) {
            const Z = z.geometry.type === "Polygon" ? new Ti(z.geometry.coordinates) : z.geometry.type === "MultiPolygon" ? new Mi(z.geometry.coordinates) : null;
            Z && v.addFeature(
              new ze({
                isMask: !!((P = z.properties) != null && P.isMask),
                geometry: M(Z)
              })
            );
          }
      }
      v.clear(), o && v.addFeature(o);
      e: if (C) {
        let _ = !1;
        if (C.geometry.type === "GeometryCollection") {
          const P = C.geometry.geometries.map(
            (z) => z.type === "Polygon" ? new Ti(z.coordinates) : z.type === "MultiPolygon" ? new Mi(z.coordinates) : null
          ).filter((z) => !!z);
          if (P.length > 0)
            v.addFeature(
              new ze(M(new Qn(P)))
            ), _ = !0;
          else
            for (const z of C.geometry.geometries)
              z.type === "LineString" ? (v.addFeature(
                new ze(
                  M(new Ni(z.coordinates))
                )
              ), _ = !0) : z.type === "MultiLineString" && v.addFeature(
                new ze(
                  M(new Ci(z.coordinates))
                )
              ), _ = !0;
        }
        if (!_) {
          if (C.geometry.type === "Polygon")
            rn(C, I);
          else if (C.geometry.type === "MultiPolygon")
            rn(C, I);
          else if (C.geometry.type === "LineString") {
            v.addFeature(
              new ze(
                M(new Ni(C.geometry.coordinates))
              )
            );
            break e;
          } else if (C.geometry.type === "MultiLineString") {
            v.addFeature(
              new ze(
                M(new Ci(C.geometry.coordinates))
              )
            );
            break e;
          }
        }
        if (!O && C.geometry.type !== "Point")
          break e;
        v.addFeature(new ze(M(new ti(C.center))));
      }
      for (const _ of N ?? []) {
        if (_ === C)
          continue;
        const P = new ze(
          new ti(Nt(_.center, S()))
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
        return [O, ...ki(C, S())];
    }
  };
}
var ae, nt;
class lo extends Yn {
  constructor(t) {
    const n = document.createElement("div");
    n.className = "ol-search";
    super({
      element: n,
      target: t.target
    });
    $t(this, ae);
    $t(this, nt);
    const { flyTo: r, fullGeometryStyle: u, ...a } = t;
    ei(this, ae, new as({
      target: n,
      props: {
        flyTo: r === void 0 ? !0 : !!r,
        ...a
      }
    })), ue(this, ae).$on("select", (o) => {
      this.dispatchEvent(new zs(o.detail.feature));
    }), ue(this, ae).$on("pick", (o) => {
      this.dispatchEvent(new qs(o.detail.feature));
    }), ue(this, ae).$on("featureslisted", (o) => {
      this.dispatchEvent(new Ds(o.detail.features));
    }), ue(this, ae).$on("featuresmarked", (o) => {
      this.dispatchEvent(new Fs(o.detail.features));
    }), ue(this, ae).$on("response", (o) => {
      this.dispatchEvent(
        new Vs(o.detail.url, o.detail.featureCollection)
      );
    }), ue(this, ae).$on("optionsvisibilitychange", (o) => {
      this.dispatchEvent(
        new Us(o.detail.optionsVisible)
      );
    }), ue(this, ae).$on("reversetoggle", (o) => {
      this.dispatchEvent(new Hs(o.detail.reverse));
    }), ue(this, ae).$on("querychange", (o) => {
      this.dispatchEvent(new js(o.detail.query));
    }), ei(this, nt, t);
  }
  setMap(t) {
    var n;
    if (super.setMap(t), t) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: r,
        fullGeometryStyle: u
      } = ue(this, nt), a = Ws(
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
    Object.assign(ue(this, nt), t);
    const { flyTo: n, fullGeometryStyle: r, ...u } = ue(this, nt);
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
ae = new WeakMap(), nt = new WeakMap();
class zs extends Xe {
  constructor(t) {
    super("select");
    R(this, "feature");
    this.feature = t;
  }
}
class Ds extends Xe {
  constructor(t) {
    super("featureslisted");
    R(this, "features");
    this.features = t;
  }
}
class Fs extends Xe {
  constructor(t) {
    super("featuresmarked");
    R(this, "features");
    this.features = t;
  }
}
class Us extends Xe {
  constructor(t) {
    super("optionsvisibilitychange");
    R(this, "optionsVisible");
    this.optionsVisible = t;
  }
}
class qs extends Xe {
  constructor(t) {
    super("pick");
    R(this, "feature");
    this.feature = t;
  }
}
class js extends Xe {
  constructor(t) {
    super("querychange");
    R(this, "query");
    this.query = t;
  }
}
class Vs extends Xe {
  constructor(t, n) {
    super("response");
    R(this, "url");
    R(this, "featureCollection");
    this.url = t, this.featureCollection = n;
  }
}
class Hs extends Xe {
  constructor(t) {
    super("reversetoggle");
    R(this, "reverse");
    this.reverse = t;
  }
}
export {
  Ds as FeaturesListedEvent,
  Fs as FeaturesMarkedEvent,
  lo as GeocodingControl,
  Us as OptionsVisibilityChangeEvent,
  qs as PickEvent,
  js as QueryChangeEvent,
  Vs as ResponseEvent,
  Hs as ReverseToggleEvent,
  zs as SelectEvent,
  Ws as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
