var kl = Object.defineProperty;
var Bl = (n, t, e) => t in n ? kl(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Is = (n, t, e) => (Bl(n, typeof t != "symbol" ? t + "" : t, e), e), ga = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var or = (n, t, e) => (ga(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ns = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Po = (n, t, e, r) => (ga(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e);
import * as Gl from "@maptiler/sdk";
function It() {
}
function zl(n, t) {
  for (const e in t)
    n[e] = t[e];
  return (
    /** @type {T & S} */
    n
  );
}
function pu(n) {
  return n();
}
function pa() {
  return /* @__PURE__ */ Object.create(null);
}
function Cn(n) {
  n.forEach(pu);
}
function du(n) {
  return typeof n == "function";
}
function Un(n, t) {
  return n != n ? t == t : n !== t || n && typeof n == "object" || typeof n == "function";
}
let Ro;
function me(n, t) {
  return n === t ? !0 : (Ro || (Ro = document.createElement("a")), Ro.href = t, n === Ro.href);
}
function Vl(n) {
  return Object.keys(n).length === 0;
}
function Ul(n, t, e, r) {
  if (n) {
    const i = vu(n, t, e, r);
    return n[0](i);
  }
}
function vu(n, t, e, r) {
  return n[1] && r ? zl(e.ctx.slice(), n[1](r(t))) : e.ctx;
}
function ql(n, t, e, r) {
  if (n[2] && r) {
    const i = n[2](r(e));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        o[a] = t.dirty[a] | i[a];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Xl(n, t, e, r, i, o) {
  if (i) {
    const s = vu(t, e, r, o);
    n.p(s, i);
  }
}
function Yl(n) {
  if (n.ctx.length > 32) {
    const t = [], e = n.ctx.length / 32;
    for (let r = 0; r < e; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function da(n) {
  return n ?? "";
}
function rt(n, t) {
  n.appendChild(t);
}
function Pt(n, t, e) {
  n.insertBefore(t, e || null);
}
function St(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ht(n) {
  return document.createElement(n);
}
function wr(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Rn(n) {
  return document.createTextNode(n);
}
function Ye() {
  return Rn(" ");
}
function Wl() {
  return Rn("");
}
function Se(n, t, e, r) {
  return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
}
function Hl(n) {
  return function(t) {
    return t.preventDefault(), n.call(this, t);
  };
}
function w(n, t, e) {
  e == null ? n.removeAttribute(t) : n.getAttribute(t) !== e && n.setAttribute(t, e);
}
function jl(n) {
  return Array.from(n.childNodes);
}
function to(n, t) {
  t = "" + t, n.data !== t && (n.data = /** @type {string} */
  t);
}
function va(n, t) {
  n.value = t ?? "";
}
function Oo(n, t, e, r) {
  e == null ? n.style.removeProperty(t) : n.style.setProperty(t, e, "");
}
function cr(n, t, e) {
  n.classList.toggle(t, !!e);
}
function Kl(n, t, { bubbles: e = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: t, bubbles: e, cancelable: r });
}
let eo;
function Ji(n) {
  eo = n;
}
function mu() {
  if (!eo)
    throw new Error("Function called outside component initialization");
  return eo;
}
function Ql(n) {
  mu().$$.on_destroy.push(n);
}
function Zl() {
  const n = mu();
  return (t, e, { cancelable: r = !1 } = {}) => {
    const i = n.$$.callbacks[t];
    if (i) {
      const o = Kl(
        /** @type {string} */
        t,
        e,
        { cancelable: r }
      );
      return i.slice().forEach((s) => {
        s.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ma(n, t) {
  const e = n.$$.callbacks[t.type];
  e && e.slice().forEach((r) => r.call(this, t));
}
const mi = [], Ps = [];
let _i = [];
const ya = [], Jl = /* @__PURE__ */ Promise.resolve();
let Rs = !1;
function $l() {
  Rs || (Rs = !0, Jl.then(yu));
}
function Os(n) {
  _i.push(n);
}
const Ss = /* @__PURE__ */ new Set();
let vi = 0;
function yu() {
  if (vi !== 0)
    return;
  const n = eo;
  do {
    try {
      for (; vi < mi.length; ) {
        const t = mi[vi];
        vi++, Ji(t), tc(t.$$);
      }
    } catch (t) {
      throw mi.length = 0, vi = 0, t;
    }
    for (Ji(null), mi.length = 0, vi = 0; Ps.length; )
      Ps.pop()();
    for (let t = 0; t < _i.length; t += 1) {
      const e = _i[t];
      Ss.has(e) || (Ss.add(e), e());
    }
    _i.length = 0;
  } while (mi.length);
  for (; ya.length; )
    ya.pop()();
  Rs = !1, Ss.clear(), Ji(n);
}
function tc(n) {
  if (n.fragment !== null) {
    n.update(), Cn(n.before_update);
    const t = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, t), n.after_update.forEach(Os);
  }
}
function ec(n) {
  const t = [], e = [];
  _i.forEach((r) => n.indexOf(r) === -1 ? t.push(r) : e.push(r)), e.forEach((r) => r()), _i = t;
}
const ko = /* @__PURE__ */ new Set();
let jn;
function Bo() {
  jn = {
    r: 0,
    c: [],
    p: jn
    // parent group
  };
}
function Go() {
  jn.r || Cn(jn.c), jn = jn.p;
}
function Ft(n, t) {
  n && n.i && (ko.delete(n), n.i(t));
}
function ee(n, t, e, r) {
  if (n && n.o) {
    if (ko.has(n))
      return;
    ko.add(n), jn.c.push(() => {
      ko.delete(n), r && (e && n.d(1), r());
    }), n.o(t);
  } else
    r && r();
}
function _a(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function rc(n, t) {
  ee(n, 1, 1, () => {
    t.delete(n.key);
  });
}
function nc(n, t, e, r, i, o, s, a, u, l, c, f) {
  let h = n.length, g = o.length, p = h;
  const y = {};
  for (; p--; )
    y[n[p].key] = p;
  const d = [], v = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), I = [];
  for (p = g; p--; ) {
    const R = f(i, o, p), D = e(R);
    let b = s.get(D);
    b ? I.push(() => b.p(R, t)) : (b = l(D, R), b.c()), v.set(D, d[p] = b), D in y && C.set(D, Math.abs(p - y[D]));
  }
  const N = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function T(R) {
    Ft(R, 1), R.m(a, c), s.set(R.key, R), c = R.first, g--;
  }
  for (; h && g; ) {
    const R = d[g - 1], D = n[h - 1], b = R.key, A = D.key;
    R === D ? (c = R.first, h--, g--) : v.has(A) ? !s.has(b) || N.has(b) ? T(R) : L.has(A) ? h-- : C.get(b) > C.get(A) ? (L.add(b), T(R)) : (N.add(A), h--) : (u(D, s), h--);
  }
  for (; h--; ) {
    const R = n[h];
    v.has(R.key) || u(R, s);
  }
  for (; g; )
    T(d[g - 1]);
  return Cn(I), d;
}
function On(n) {
  n && n.c();
}
function cn(n, t, e) {
  const { fragment: r, after_update: i } = n.$$;
  r && r.m(t, e), Os(() => {
    const o = n.$$.on_mount.map(pu).filter(du);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : Cn(o), n.$$.on_mount = [];
  }), i.forEach(Os);
}
function fn(n, t) {
  const e = n.$$;
  e.fragment !== null && (ec(e.after_update), Cn(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function ic(n, t) {
  n.$$.dirty[0] === -1 && (mi.push(n), $l(), n.$$.dirty.fill(0)), n.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function qn(n, t, e, r, i, o, s = null, a = [-1]) {
  const u = eo;
  Ji(n);
  const l = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: It,
    not_equal: i,
    bound: pa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: pa(),
    dirty: a,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  s && s(l.root);
  let c = !1;
  if (l.ctx = e ? e(n, t.props || {}, (f, h, ...g) => {
    const p = g.length ? g[0] : h;
    return l.ctx && i(l.ctx[f], l.ctx[f] = p) && (!l.skip_bound && l.bound[f] && l.bound[f](p), c && ic(n, f)), h;
  }) : [], l.update(), c = !0, Cn(l.before_update), l.fragment = r ? r(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = jl(t.target);
      l.fragment && l.fragment.l(f), f.forEach(St);
    } else
      l.fragment && l.fragment.c();
    t.intro && Ft(n.$$.fragment), cn(n, t.target, t.anchor), yu();
  }
  Ji(u);
}
class Xn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Is(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Is(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    fn(this, 1), this.$destroy = It;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!du(e))
      return It;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(e), () => {
      const i = r.indexOf(e);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Vl(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const oc = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(oc);
function sc(n) {
  let t, e;
  return {
    c() {
      t = wr("svg"), e = wr("path"), w(e, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), w(t, "viewBox", "0 0 14 14"), w(t, "width", "13"), w(t, "height", "13"), w(t, "class", "svelte-en2qvf");
    },
    m(r, i) {
      Pt(r, t, i), rt(t, e);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && St(t);
    }
  };
}
class _u extends Xn {
  constructor(t) {
    super(), qn(this, t, null, sc, Un, {});
  }
}
function ac(n) {
  let t, e;
  return {
    c() {
      t = wr("svg"), e = wr("path"), w(e, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), w(t, "viewBox", "0 0 30 30"), w(t, "fill", "none"), w(t, "xmlns", "http://www.w3.org/2000/svg"), w(t, "class", "svelte-d2loi5");
    },
    m(r, i) {
      Pt(r, t, i), rt(t, e);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && St(t);
    }
  };
}
class Eu extends Xn {
  constructor(t) {
    super(), qn(this, t, null, ac, Un, {});
  }
}
function uc(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*iconsBaseUrl*/
      n[3] + "area.svg") || w(t, "src", e), w(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !me(t.src, e = /*iconsBaseUrl*/
      r[3] + "area.svg") && w(t, "src", e), i & /*placeType*/
      64 && w(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function lc(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*iconsBaseUrl*/
      n[3] + "reverse.svg") || w(t, "src", e), w(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !me(t.src, e = /*iconsBaseUrl*/
      r[3] + "reverse.svg") && w(t, "src", e), i & /*placeType*/
      64 && w(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function cc(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*iconsBaseUrl*/
      n[3] + "poi.svg") || w(t, "src", e), w(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !me(t.src, e = /*iconsBaseUrl*/
      r[3] + "poi.svg") && w(t, "src", e), i & /*placeType*/
      64 && w(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function fc(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || w(t, "src", e), w(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !me(t.src, e = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && w(t, "src", e), i & /*placeType*/
      64 && w(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function hc(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*iconsBaseUrl*/
      n[3] + "street.svg") || w(t, "src", e), w(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !me(t.src, e = /*iconsBaseUrl*/
      r[3] + "street.svg") && w(t, "src", e), i & /*placeType*/
      64 && w(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function gc(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*iconsBaseUrl*/
      n[3] + "road.svg") || w(t, "src", e), w(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !me(t.src, e = /*iconsBaseUrl*/
      r[3] + "road.svg") && w(t, "src", e), i & /*placeType*/
      64 && w(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function pc(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || w(t, "src", e), w(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !me(t.src, e = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && w(t, "src", e), i & /*placeType*/
      64 && w(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function dc(n) {
  let t, e, r, i;
  return {
    c() {
      t = ht("img"), me(t.src, e = /*imageUrl*/
      n[5]) || w(t, "src", e), w(
        t,
        "alt",
        /*category*/
        n[4]
      ), w(t, "class", "svelte-ltkwvy");
    },
    m(o, s) {
      Pt(o, t, s), r || (i = Se(
        t,
        "error",
        /*error_handler*/
        n[14]
      ), r = !0);
    },
    p(o, s) {
      s & /*imageUrl*/
      32 && !me(t.src, e = /*imageUrl*/
      o[5]) && w(t, "src", e), s & /*category*/
      16 && w(
        t,
        "alt",
        /*category*/
        o[4]
      );
    },
    d(o) {
      o && St(t), r = !1, i();
    }
  };
}
function Ea(n) {
  let t, e;
  return {
    c() {
      t = ht("span"), e = Rn(
        /*placeType*/
        n[6]
      ), w(t, "class", "secondary svelte-ltkwvy");
    },
    m(r, i) {
      Pt(r, t, i), rt(t, e);
    },
    p(r, i) {
      i & /*placeType*/
      64 && to(
        e,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && St(t);
    }
  };
}
function vc(n) {
  var R, D;
  let t, e, r, i, o, s, a, u, l = (
    /*isReverse*/
    (n[7] ? (
      /*feature*/
      n[0].place_name
    ) : (
      /*feature*/
      n[0].place_name.replace(/,.*/, "")
    )) + ""
  ), c, f, h = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((R = n[0].properties) == null ? void 0 : R.kind) !== "road" && /*feature*/
    ((D = n[0].properties) == null ? void 0 : D.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5]) && !/*isReverse*/
    n[7]
  ), g, p, y = (
    /*isReverse*/
    (n[7] ? "" : (
      /*feature*/
      n[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), d, v, C;
  function I(b, A) {
    var Y, G;
    return A & /*feature*/
    1 && (e = null), A & /*feature*/
    1 && (r = null), A & /*feature*/
    1 && (i = null), /*imageUrl*/
    b[5] ? dc : (
      /*feature*/
      b[0].address ? pc : (
        /*feature*/
        ((Y = b[0].properties) == null ? void 0 : Y.kind) === "road" || /*feature*/
        ((G = b[0].properties) == null ? void 0 : G.kind) === "road_relation" ? gc : (e == null && (e = !!/*feature*/
        b[0].id.startsWith("address.")), e ? hc : (r == null && (r = !!/*feature*/
        b[0].id.startsWith("postal_code.")), r ? fc : (i == null && (i = !!/*feature*/
        b[0].id.startsWith("poi.")), i ? cc : (
          /*isReverse*/
          b[7] ? lc : uc
        ))))
      )
    );
  }
  let N = I(n, -1), L = N(n), T = h && Ea(n);
  return {
    c() {
      t = ht("li"), L.c(), o = Ye(), s = ht("span"), a = ht("span"), u = ht("span"), c = Rn(l), f = Ye(), T && T.c(), g = Ye(), p = ht("span"), d = Rn(y), w(u, "class", "primary svelte-ltkwvy"), w(a, "class", "svelte-ltkwvy"), w(p, "class", "line2 svelte-ltkwvy"), w(s, "class", "texts svelte-ltkwvy"), w(t, "tabindex", "0"), w(
        t,
        "data-selected",
        /*selected*/
        n[1]
      ), w(t, "class", "svelte-ltkwvy"), cr(
        t,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(b, A) {
      Pt(b, t, A), L.m(t, null), rt(t, o), rt(t, s), rt(s, a), rt(a, u), rt(u, c), rt(a, f), T && T.m(a, null), rt(s, g), rt(s, p), rt(p, d), v || (C = [
        Se(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          n[12]
        ),
        Se(
          t,
          "focus",
          /*focus_handler*/
          n[13]
        )
      ], v = !0);
    },
    p(b, [A]) {
      var Y, G;
      N === (N = I(b, A)) && L ? L.p(b, A) : (L.d(1), L = N(b), L && (L.c(), L.m(t, o))), A & /*feature*/
      1 && l !== (l = /*isReverse*/
      (b[7] ? (
        /*feature*/
        b[0].place_name
      ) : (
        /*feature*/
        b[0].place_name.replace(/,.*/, "")
      )) + "") && to(c, l), A & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      b[2] === "always" || /*showPlaceType*/
      b[2] && !/*feature*/
      b[0].address && /*feature*/
      ((Y = b[0].properties) == null ? void 0 : Y.kind) !== "road" && /*feature*/
      ((G = b[0].properties) == null ? void 0 : G.kind) !== "road_relation" && !/*feature*/
      b[0].id.startsWith("address.") && !/*feature*/
      b[0].id.startsWith("postal_code.") && (!/*feature*/
      b[0].id.startsWith("poi.") || !/*imageUrl*/
      b[5]) && !/*isReverse*/
      b[7]), h ? T ? T.p(b, A) : (T = Ea(b), T.c(), T.m(a, null)) : T && (T.d(1), T = null), A & /*feature*/
      1 && y !== (y = /*isReverse*/
      (b[7] ? "" : (
        /*feature*/
        b[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && to(d, y), A & /*selected*/
      2 && w(
        t,
        "data-selected",
        /*selected*/
        b[1]
      ), A & /*selected*/
      2 && cr(
        t,
        "selected",
        /*selected*/
        b[1]
      );
    },
    i: It,
    o: It,
    d(b) {
      b && St(t), L.d(), T && T.d(), v = !1, Cn(C);
    }
  };
}
function mc(n, t, e) {
  var I;
  let r, i, { feature: o } = t, { selected: s = !1 } = t, { showPlaceType: a } = t, { missingIconsCache: u } = t, { iconsBaseUrl: l } = t;
  const c = (I = o.properties) == null ? void 0 : I.categories;
  let f, h, g = 0, p = o.place_type[0] === "reverse";
  function y(N) {
    h && u.add(h), e(10, g++, g);
  }
  function d(N) {
    ma.call(this, n, N);
  }
  function v(N) {
    ma.call(this, n, N);
  }
  const C = (N) => y(N.currentTarget);
  return n.$$set = (N) => {
    "feature" in N && e(0, o = N.feature), "selected" in N && e(1, s = N.selected), "showPlaceType" in N && e(2, a = N.showPlaceType), "missingIconsCache" in N && e(9, u = N.missingIconsCache), "iconsBaseUrl" in N && e(3, l = N.iconsBaseUrl);
  }, n.$$.update = () => {
    var N, L, T, R;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        e(11, r--, r), e(4, f = c == null ? void 0 : c[r]), e(5, h = f ? l + f.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!h || u.has(h)));
    n.$$.dirty & /*feature*/
    1 && e(6, i = o.id.startsWith("poi.") ? (L = (N = o.properties) == null ? void 0 : N.categories) == null ? void 0 : L.join(", ") : ((R = (T = o.properties) == null ? void 0 : T.place_type_name) == null ? void 0 : R[0]) ?? o.place_type[0]);
  }, e(11, r = (c == null ? void 0 : c.length) ?? 0), [
    o,
    s,
    a,
    l,
    f,
    h,
    i,
    p,
    y,
    u,
    g,
    r,
    d,
    v,
    C
  ];
}
class yc extends Xn {
  constructor(t) {
    super(), qn(this, t, mc, vc, Un, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function _c(n) {
  let t;
  return {
    c() {
      t = ht("div"), t.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', w(t, "class", "svelte-7cmwmc");
    },
    m(e, r) {
      Pt(e, t, r);
    },
    p: It,
    i: It,
    o: It,
    d(e) {
      e && St(t);
    }
  };
}
class Ec extends Xn {
  constructor(t) {
    super(), qn(this, t, null, _c, Un, {});
  }
}
function Cc(n) {
  let t, e, r;
  return {
    c() {
      t = wr("svg"), e = wr("path"), w(e, "stroke-width", "4"), w(e, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), w(e, "class", "svelte-gzo3ar"), w(t, "width", r = /*displayIn*/
      n[0] === "list" ? 20 : void 0), w(t, "viewBox", "0 0 70 85"), w(t, "fill", "none"), w(t, "class", "svelte-gzo3ar"), cr(
        t,
        "in-map",
        /*displayIn*/
        n[0] !== "list"
      ), cr(
        t,
        "list-icon",
        /*displayIn*/
        n[0] === "list"
      );
    },
    m(i, o) {
      Pt(i, t, o), rt(t, e);
    },
    p(i, [o]) {
      o & /*displayIn*/
      1 && r !== (r = /*displayIn*/
      i[0] === "list" ? 20 : void 0) && w(t, "width", r), o & /*displayIn*/
      1 && cr(
        t,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), o & /*displayIn*/
      1 && cr(
        t,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    i: It,
    o: It,
    d(i) {
      i && St(t);
    }
  };
}
function Ic(n, t, e) {
  let { displayIn: r } = t;
  return n.$$set = (i) => {
    "displayIn" in i && e(0, r = i.displayIn);
  }, [r];
}
class Nc extends Xn {
  constructor(t) {
    super(), qn(this, t, Ic, Cc, Un, { displayIn: 0 });
  }
}
function Sc(n) {
  let t, e;
  return {
    c() {
      t = wr("svg"), e = wr("path"), w(e, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), w(t, "viewBox", "0 0 60.006 21.412"), w(t, "width", "14"), w(t, "height", "20"), w(t, "class", "svelte-en2qvf");
    },
    m(r, i) {
      Pt(r, t, i), rt(t, e);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && St(t);
    }
  };
}
class xc extends Xn {
  constructor(t) {
    super(), qn(this, t, null, Sc, Un, {});
  }
}
function Lc(n) {
  let t, e, r;
  return {
    c() {
      t = wr("svg"), e = wr("circle"), r = wr("path"), w(e, "cx", "4.789"), w(e, "cy", "4.787"), w(e, "r", "3.85"), Oo(e, "stroke-width", "1.875"), Oo(e, "fill", "none"), w(r, "d", "M12.063 12.063 7.635 7.635"), Oo(r, "stroke-width", "1.875"), Oo(r, "stroke-linecap", "round"), w(t, "xmlns", "http://www.w3.org/2000/svg"), w(t, "width", "13"), w(t, "height", "13"), w(t, "viewBox", "0 0 13 13"), w(t, "class", "svelte-1bpbt60");
    },
    m(i, o) {
      Pt(i, t, o), rt(t, e), rt(t, r);
    },
    p: It,
    i: It,
    o: It,
    d(i) {
      i && St(t);
    }
  };
}
class bc extends Xn {
  constructor(t) {
    super(), qn(this, t, null, Lc, Un, {});
  }
}
function wc(n, t, e) {
  const r = t[1], i = t[0], o = r - i;
  return n === r && e ? n : ((n - i) % o + o) % o + i;
}
function Ca(n) {
  const t = [...n];
  return t[2] < t[0] && (t[2] += 360), t;
}
let Wi;
async function Pc(n, t, e) {
  const r = n == null ? void 0 : n.getCenterAndZoom();
  for (const i of t ?? [])
    if (!(r && (i.minZoom != null && i.minZoom > r[0] || i.maxZoom != null && i.maxZoom < r[0]))) {
      if (i.type === "fixed")
        return i.coordinates.join(",");
      t:
        if (i.type === "client-geolocation") {
          if (Wi && i.cachedLocationExpiry && Wi.time + i.cachedLocationExpiry > Date.now()) {
            if (!Wi.coords)
              break t;
            return Wi.coords;
          }
          let o;
          try {
            return o = await new Promise((s, a) => {
              e.signal.addEventListener("abort", () => {
                a(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (u) => {
                  s(
                    [u.coords.longitude, u.coords.latitude].map((l) => l.toFixed(6)).join(",")
                  );
                },
                (u) => {
                  a(u);
                },
                i
              );
            }), o;
          } catch {
          } finally {
            i.cachedLocationExpiry && (Wi = {
              time: Date.now(),
              coords: o
            });
          }
          if (e.signal.aborted)
            return;
        }
      if (i.type === "server-geolocation")
        return "ip";
      if (r && i.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
const Ia = /([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})/, Na = /(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?/i, Sa = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?/i, xa = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?/i, La = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?/i;
function Rc(n) {
  if (!["DMS", "DM", "DD"].includes(n))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    if (n == "DD")
      return this.decimalCoordinates;
    const t = this.decimalCoordinates.split(",").map((s) => Number(s.trim()));
    let e = ba(t[0], n), r = ba(t[1], n);
    e.endsWith('.0"') && r.endsWith('.0"') && (e = e.replace(/\.0"$/, '"'), r = r.replace(/\.0"$/, '"'));
    const i = t[0] >= 0 ? " N" : " S", o = t[1] >= 0 ? " E" : " W";
    return `${e + i}, ${r + o}`;
  } else
    throw new Error("no decimal coordinates to convert");
}
function ba(n, t) {
  const e = Math.abs(n), r = Math.floor(e), i = (e - r) * 60;
  if (t == "DM") {
    let a = Oc(i, 3).toFixed(3).padStart(6, "0");
    return `${r}° ${a}'`;
  }
  let o = Math.floor(i), s = ((i - o) * 60).toFixed(1).padStart(4, "0");
  return o = o.toString().padStart(2, "0"), `${r}° ${o}' ${s}"`;
}
function Oc(n, t) {
  const e = Math.pow(10, t);
  return Math.round((n + Number.EPSILON) * e) / e;
}
function Ws(n, t) {
  t || (t = 5), n = n.replace(/\s+/g, " ").trim();
  let e = null, r = null, i = "", o = "", s = [], a = !1;
  if (Ia.test(n))
    if (s = Ia.exec(n), a = Hi(s), a)
      e = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (e *= -1), r = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (r *= -1);
    else
      throw new Error("invalid coordinate format");
  else if (Na.test(n))
    if (s = Na.exec(n), a = Hi(s), a) {
      if (e = s[2], r = s[6], e.includes(",") && (e = e.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), Number(Math.round(e)) == Number(e))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      s[1] ? (i = s[1], o = s[5]) : s[4] && (i = s[4], o = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Sa.test(n))
    if (s = Sa.exec(n), a = Hi(s), a)
      e = Math.abs(parseInt(s[2])), s[4] && (e += s[4] / 60), s[6] && (e += s[6].replace(",", ".") / 3600), parseInt(s[2]) < 0 && (e = -1 * e), r = Math.abs(parseInt(s[9])), s[11] && (r += s[11] / 60), s[13] && (r += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (r = -1 * r), s[1] ? (i = s[1], o = s[8]) : s[7] && (i = s[7], o = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (xa.test(n))
    if (s = xa.exec(n), a = Hi(s), a)
      e = Math.abs(parseInt(s[2])), s[4] && (e += s[4] / 60), s[6] && (e += s[6] / 3600), parseInt(s[2]) < 0 && (e = -1 * e), r = Math.abs(parseInt(s[10])), s[12] && (r += s[12] / 60), s[14] && (r += s[14] / 3600), parseInt(s[10]) < 0 && (r = -1 * r), s[1] ? (i = s[1], o = s[9]) : s[8] && (i = s[8], o = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (La.test(n))
    if (s = La.exec(n), a = Hi(s), a)
      e = Math.abs(parseInt(s[2])), s[4] && (e += s[4].replace(",", ".") / 60), s[6] && (e += s[6].replace(",", ".") / 3600), parseInt(s[2]) < 0 && (e = -1 * e), r = Math.abs(parseInt(s[10])), s[12] && (r += s[12].replace(",", ".") / 60), s[14] && (r += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (r = -1 * r), s[1] ? (i = s[1], o = s[9]) : s[8] && (i = s[8], o = s[16]);
    else
      throw new Error("invalid coordinates format");
  if (a) {
    if (Math.abs(r) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(e) >= 90)
      throw new Error("invalid latitude value");
    if ((i || o) && (!i || !o))
      throw new Error("invalid coordinates format");
    if (i && i == o)
      throw new Error("invalid coordinates format");
    let u = /S|SOUTH/i;
    u.test(i) && e > 0 && (e = -1 * e), u = /W|WEST/i, u.test(o) && r > 0 && (r = -1 * r);
    const l = s[0].trim();
    let c, f;
    const h = /[,/;\u0020]/g, g = l.match(h);
    if (g == null) {
      const d = Math.floor(n.length / 2);
      c = l.substring(0, d).trim(), f = l.substring(d).trim();
    } else {
      let d;
      g.length % 2 == 1 ? d = Math.floor(g.length / 2) : d = g.length / 2 - 1;
      let v = 0;
      if (d == 0)
        v = l.indexOf(g[0]), c = l.substring(0, v).trim(), f = l.substring(v + 1).trim();
      else {
        let C = 0, I = 0;
        for (; C <= d; )
          v = l.indexOf(g[C], I), I = v + 1, C++;
        c = l.substring(0, v).trim(), f = l.substring(v + 1).trim();
      }
    }
    const p = c.split(".");
    if (p.length == 2 && p[1] == 0 && p[1].length != 2)
      throw new Error("invalid coordinates format");
    const y = f.split(".");
    if (y.length == 2 && y[1] == 0 && y[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(c) || /^\d+$/.test(f))
      throw new Error("degree only coordinate/s provided");
    return isNaN(e) && e.includes(",") && (e = e.replace(",", ".")), e = Number(Number(e).toFixed(t)), isNaN(r) && r.includes(",") && (r = r.replace(",", ".")), r = Number(Number(r).toFixed(t)), Object.freeze({
      verbatimCoordinates: l,
      verbatimLatitude: c,
      verbatimLongitude: f,
      decimalLatitude: e,
      decimalLongitude: r,
      decimalCoordinates: `${e},${r}`,
      closeEnough: Tc,
      toCoordinateFormat: Rc
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Hi(n) {
  if (!isNaN(n[0]))
    return !1;
  const t = [...n];
  if (t.shift(), t.length % 2 > 0)
    return !1;
  const e = /^[-+]?\d+([\.,]\d+)?$/, r = /[eastsouthnorthwest]+/i, i = t.length / 2;
  for (let o = 0; o < i; o++) {
    const s = t[o], a = t[o + i], u = e.test(s) && e.test(a), l = r.test(s) && r.test(a), c = s == a;
    if (!(s == null && a == null)) {
      if (s == null || a == null)
        return !1;
      if (u || l || c)
        continue;
      return !1;
    }
  }
  return !0;
}
function wa(n, t) {
  const e = Math.abs(n - t);
  return Number(e.toFixed(6)) <= 1e-5;
}
function Tc(n) {
  if (n.includes(",")) {
    const t = n.split(",");
    if (Number(t[0]) == NaN || Number(t[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return wa(this.decimalLatitude, Number(t[0])) && wa(this.decimalLongitude, t[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Dc = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Ws.to = Dc;
const Mc = [
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
], Ac = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Fc = [
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
], kc = [
  // additional formats we've encountered
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
  }
];
function Bc() {
  const n = [];
  return Mc.forEach((t) => {
    t.decimalLatitude ? n.push(t) : n.push({ ...t, ...Ac });
  }), [...n, ...Fc, ...kc];
}
const Gc = Bc();
Ws.formats = Gc.map((n) => n.verbatimCoordinates);
const zc = Ws;
function Pa(n, t, e) {
  const r = n.slice();
  return r[81] = t[e], r[83] = e, r;
}
function Ra(n) {
  let t, e;
  return t = new Ec({}), {
    c() {
      On(t.$$.fragment);
    },
    m(r, i) {
      cn(t, r, i), e = !0;
    },
    i(r) {
      e || (Ft(t.$$.fragment, r), e = !0);
    },
    o(r) {
      ee(t.$$.fragment, r), e = !1;
    },
    d(r) {
      fn(t, r);
    }
  };
}
function Oa(n) {
  let t, e, r, i, o;
  return e = new xc({}), {
    c() {
      t = ht("button"), On(e.$$.fragment), w(t, "type", "button"), w(
        t,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), w(t, "class", "svelte-zh3kmv"), cr(
        t,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(s, a) {
      Pt(s, t, a), cn(e, t, null), r = !0, i || (o = Se(
        t,
        "click",
        /*click_handler_2*/
        n[67]
      ), i = !0);
    },
    p(s, a) {
      (!r || a[0] & /*reverseButtonTitle*/
      512) && w(
        t,
        "title",
        /*reverseButtonTitle*/
        s[9]
      ), (!r || a[0] & /*reverseActive*/
      1) && cr(
        t,
        "active",
        /*reverseActive*/
        s[0]
      );
    },
    i(s) {
      r || (Ft(e.$$.fragment, s), r = !0);
    },
    o(s) {
      ee(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && St(t), fn(e), i = !1, o();
    }
  };
}
function Vc(n) {
  let t, e = [], r = /* @__PURE__ */ new Map(), i, o, s, a = _a(
    /*listFeatures*/
    n[14]
  );
  const u = (l) => (
    /*feature*/
    l[81].id + /*feature*/
    (l[81].address ? "," + /*feature*/
    l[81].address : "")
  );
  for (let l = 0; l < a.length; l += 1) {
    let c = Pa(n, a, l), f = u(c);
    r.set(f, e[l] = Ta(f, c));
  }
  return {
    c() {
      t = ht("ul");
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      w(t, "class", "svelte-zh3kmv");
    },
    m(l, c) {
      Pt(l, t, c);
      for (let f = 0; f < e.length; f += 1)
        e[f] && e[f].m(t, null);
      i = !0, o || (s = [
        Se(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          n[71]
        ),
        Se(
          t,
          "blur",
          /*blur_handler_1*/
          n[72]
        )
      ], o = !0);
    },
    p(l, c) {
      c[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (a = _a(
        /*listFeatures*/
        l[14]
      ), Bo(), e = nc(e, c, u, 1, l, a, r, t, rc, Ta, null, Pa), Go());
    },
    i(l) {
      if (!i) {
        for (let c = 0; c < a.length; c += 1)
          Ft(e[c]);
        i = !0;
      }
    },
    o(l) {
      for (let c = 0; c < e.length; c += 1)
        ee(e[c]);
      i = !1;
    },
    d(l) {
      l && St(t);
      for (let c = 0; c < e.length; c += 1)
        e[c].d();
      o = !1, Cn(s);
    }
  };
}
function Uc(n) {
  let t, e, r, i, o, s;
  return e = new Eu({}), {
    c() {
      t = ht("div"), On(e.$$.fragment), r = Ye(), i = ht("div"), o = Rn(
        /*noResultsMessage*/
        n[7]
      ), w(i, "class", "svelte-zh3kmv"), w(t, "class", "no-results svelte-zh3kmv");
    },
    m(a, u) {
      Pt(a, t, u), cn(e, t, null), rt(t, r), rt(t, i), rt(i, o), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*noResultsMessage*/
      128) && to(
        o,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      s || (Ft(e.$$.fragment, a), s = !0);
    },
    o(a) {
      ee(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && St(t), fn(e);
    }
  };
}
function qc(n) {
  let t = "", e;
  return {
    c() {
      e = Rn(t);
    },
    m(r, i) {
      Pt(r, e, i);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && St(e);
    }
  };
}
function Xc(n) {
  let t, e, r, i, o, s, a, u, l, c, f;
  return e = new Eu({}), u = new _u({}), {
    c() {
      t = ht("div"), On(e.$$.fragment), r = Ye(), i = ht("div"), o = Rn(
        /*errorMessage*/
        n[6]
      ), s = Ye(), a = ht("button"), On(u.$$.fragment), w(i, "class", "svelte-zh3kmv"), w(a, "class", "svelte-zh3kmv"), w(t, "class", "error svelte-zh3kmv");
    },
    m(h, g) {
      Pt(h, t, g), cn(e, t, null), rt(t, r), rt(t, i), rt(i, o), rt(t, s), rt(t, a), cn(u, a, null), l = !0, c || (f = Se(
        a,
        "click",
        /*click_handler_3*/
        n[68]
      ), c = !0);
    },
    p(h, g) {
      (!l || g[0] & /*errorMessage*/
      64) && to(
        o,
        /*errorMessage*/
        h[6]
      );
    },
    i(h) {
      l || (Ft(e.$$.fragment, h), Ft(u.$$.fragment, h), l = !0);
    },
    o(h) {
      ee(e.$$.fragment, h), ee(u.$$.fragment, h), l = !1;
    },
    d(h) {
      h && St(t), fn(e), fn(u), c = !1, f();
    }
  };
}
function Ta(n, t) {
  let e, r, i;
  function o() {
    return (
      /*mouseenter_handler*/
      t[69](
        /*i*/
        t[83]
      )
    );
  }
  function s() {
    return (
      /*focus_handler_1*/
      t[70](
        /*feature*/
        t[81]
      )
    );
  }
  return r = new yc({
    props: {
      feature: (
        /*feature*/
        t[81]
      ),
      showPlaceType: (
        /*showPlaceType*/
        t[10]
      ),
      selected: (
        /*selectedItemIndex*/
        t[15] === /*i*/
        t[83]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        t[20]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        t[12]
      )
    }
  }), r.$on("mouseenter", o), r.$on("focus", s), {
    key: n,
    first: null,
    c() {
      e = Wl(), On(r.$$.fragment), this.first = e;
    },
    m(a, u) {
      Pt(a, e, u), cn(r, a, u), i = !0;
    },
    p(a, u) {
      t = a;
      const l = {};
      u[0] & /*listFeatures*/
      16384 && (l.feature = /*feature*/
      t[81]), u[0] & /*showPlaceType*/
      1024 && (l.showPlaceType = /*showPlaceType*/
      t[10]), u[0] & /*selectedItemIndex, listFeatures*/
      49152 && (l.selected = /*selectedItemIndex*/
      t[15] === /*i*/
      t[83]), u[0] & /*iconsBaseUrl*/
      4096 && (l.iconsBaseUrl = /*iconsBaseUrl*/
      t[12]), r.$set(l);
    },
    i(a) {
      i || (Ft(r.$$.fragment, a), i = !0);
    },
    o(a) {
      ee(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && St(e), fn(r, a);
    }
  };
}
function Yc(n) {
  let t, e, r, i, o, s, a, u, l, c, f, h, g, p, y, d, v, C, I, N, L, T = !1;
  o = new bc({}), f = new _u({});
  let R = (
    /*abortController*/
    n[19] && Ra()
  ), D = (
    /*enableReverse*/
    n[5] === !0 && Oa(n)
  );
  const b = (
    /*#slots*/
    n[59].default
  ), A = Ul(
    b,
    n,
    /*$$scope*/
    n[58],
    null
  ), Y = [Xc, qc, Uc, Vc], G = [];
  function at(x, B) {
    var K, _t;
    return (
      /*error*/
      x[18] ? 0 : (
        /*focusedDelayed*/
        x[16] ? (
          /*listFeatures*/
          ((K = x[14]) == null ? void 0 : K.length) === 0 ? 2 : (
            /*focusedDelayed*/
            x[16] && /*listFeatures*/
            ((_t = x[14]) != null && _t.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(d = at(n)) && (v = G[d] = Y[d](n)), {
    c() {
      t = Ye(), e = ht("form"), r = ht("div"), i = ht("button"), On(o.$$.fragment), s = Ye(), a = ht("input"), u = Ye(), l = ht("div"), c = ht("button"), On(f.$$.fragment), h = Ye(), R && R.c(), g = Ye(), D && D.c(), p = Ye(), A && A.c(), y = Ye(), v && v.c(), w(i, "class", "search-button svelte-zh3kmv"), w(i, "type", "button"), w(
        a,
        "placeholder",
        /*placeholder*/
        n[8]
      ), w(
        a,
        "aria-label",
        /*placeholder*/
        n[8]
      ), w(a, "class", "svelte-zh3kmv"), w(c, "type", "button"), w(
        c,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), w(c, "class", "svelte-zh3kmv"), w(l, "class", "clear-button-container svelte-zh3kmv"), cr(
        l,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), w(r, "class", "input-group svelte-zh3kmv"), w(e, "tabindex", "0"), w(e, "class", C = da(
        /*className*/
        n[2]
      ) + " svelte-zh3kmv"), cr(
        e,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(x, B) {
      Pt(x, t, B), Pt(x, e, B), rt(e, r), rt(r, i), cn(o, i, null), rt(r, s), rt(r, a), n[61](a), va(
        a,
        /*searchValue*/
        n[1]
      ), rt(r, u), rt(r, l), rt(l, c), cn(f, c, null), rt(l, h), R && R.m(l, null), rt(r, g), D && D.m(r, null), rt(r, p), A && A.m(r, null), rt(e, y), ~d && G[d].m(e, null), I = !0, N || (L = [
        Se(
          i,
          "click",
          /*click_handler*/
          n[60]
        ),
        Se(
          a,
          "input",
          /*input_1_input_handler*/
          n[62]
        ),
        Se(
          a,
          "focus",
          /*focus_handler*/
          n[63]
        ),
        Se(
          a,
          "blur",
          /*blur_handler*/
          n[64]
        ),
        Se(
          a,
          "keydown",
          /*handleKeyDown*/
          n[22]
        ),
        Se(
          a,
          "input",
          /*input_handler*/
          n[65]
        ),
        Se(
          c,
          "click",
          /*click_handler_1*/
          n[66]
        ),
        Se(e, "submit", Hl(
          /*handleOnSubmit*/
          n[21]
        ))
      ], N = !0);
    },
    p(x, B) {
      (!I || B[0] & /*placeholder*/
      256) && w(
        a,
        "placeholder",
        /*placeholder*/
        x[8]
      ), (!I || B[0] & /*placeholder*/
      256) && w(
        a,
        "aria-label",
        /*placeholder*/
        x[8]
      ), B[0] & /*searchValue*/
      2 && a.value !== /*searchValue*/
      x[1] && va(
        a,
        /*searchValue*/
        x[1]
      ), (!I || B[0] & /*clearButtonTitle*/
      8) && w(
        c,
        "title",
        /*clearButtonTitle*/
        x[3]
      ), /*abortController*/
      x[19] ? R ? B[0] & /*abortController*/
      524288 && Ft(R, 1) : (R = Ra(), R.c(), Ft(R, 1), R.m(l, null)) : R && (Bo(), ee(R, 1, 1, () => {
        R = null;
      }), Go()), (!I || B[0] & /*searchValue*/
      2) && cr(
        l,
        "displayable",
        /*searchValue*/
        x[1] !== ""
      ), /*enableReverse*/
      x[5] === !0 ? D ? (D.p(x, B), B[0] & /*enableReverse*/
      32 && Ft(D, 1)) : (D = Oa(x), D.c(), Ft(D, 1), D.m(r, p)) : D && (Bo(), ee(D, 1, 1, () => {
        D = null;
      }), Go()), A && A.p && (!I || B[1] & /*$$scope*/
      134217728) && Xl(
        A,
        b,
        x,
        /*$$scope*/
        x[58],
        I ? ql(
          b,
          /*$$scope*/
          x[58],
          B,
          null
        ) : Yl(
          /*$$scope*/
          x[58]
        ),
        null
      );
      let K = d;
      d = at(x), d === K ? ~d && G[d].p(x, B) : (v && (Bo(), ee(G[K], 1, 1, () => {
        G[K] = null;
      }), Go()), ~d ? (v = G[d], v ? v.p(x, B) : (v = G[d] = Y[d](x), v.c()), Ft(v, 1), v.m(e, null)) : v = null), (!I || B[0] & /*className*/
      4 && C !== (C = da(
        /*className*/
        x[2]
      ) + " svelte-zh3kmv")) && w(e, "class", C), (!I || B[0] & /*className, collapsed, searchValue*/
      22) && cr(
        e,
        "can-collapse",
        /*collapsed*/
        x[4] && /*searchValue*/
        x[1] === ""
      );
    },
    i(x) {
      I || (Ft(T), Ft(o.$$.fragment, x), Ft(f.$$.fragment, x), Ft(R), Ft(D), Ft(A, x), Ft(v), I = !0);
    },
    o(x) {
      ee(T), ee(o.$$.fragment, x), ee(f.$$.fragment, x), ee(R), ee(D), ee(A, x), ee(v), I = !1;
    },
    d(x) {
      x && (St(t), St(e)), fn(o), n[61](null), fn(f), R && R.d(), D && D.d(), A && A.d(x), ~d && G[d].d(), N = !1, Cn(L);
    }
  };
}
function Wc(n, t, e) {
  let r, { $$slots: i = {}, $$scope: o } = t, { class: s = void 0 } = t, { apiKey: a } = t, { bbox: u = void 0 } = t, { clearButtonTitle: l = "clear" } = t, { clearOnBlur: c = !1 } = t, { collapsed: f = !1 } = t, { country: h = void 0 } = t, { debounceSearch: g = 200 } = t, { enableReverse: p = !1 } = t, { errorMessage: y = "Something went wrong…" } = t, { filter: d = () => !0 } = t, { flyTo: v = !0 } = t, { fuzzyMatch: C = !0 } = t, { language: I = void 0 } = t, { limit: N = void 0 } = t, { mapController: L = void 0 } = t, { minLength: T = 2 } = t, { noResultsMessage: R = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = t, { placeholder: D = "Search" } = t, { proximity: b = [{ type: "server-geolocation" }] } = t, { reverseActive: A = p === "always" } = t, { reverseButtonTitle: Y = "toggle reverse geocoding" } = t, { searchValue: G = "" } = t, { showFullGeometry: at = !0 } = t, { showPlaceType: x = "ifNeeded" } = t, { showResultsWhileTyping: B = !0 } = t, { selectFirst: K = !0 } = t, { flyToSelected: _t = !1 } = t, { markerOnSelected: Qt = !0 } = t, { types: zt = void 0 } = t, { excludeTypes: Vr = !1 } = t, { zoom: Ie = 16 } = t, { maxZoom: De = 18 } = t, { apiUrl: Ue = "https://api.maptiler.com/geocoding" } = t, { fetchParameters: In = {} } = t, { iconsBaseUrl: sn = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.2.4/icons/" } = t, { adjustUrlQuery: ps = (S) => {
  } } = t;
  function vl() {
    Ur.focus();
  }
  function ml() {
    Ur.blur();
  }
  function ca(S, Ut = !0, qe = !1) {
    e(1, G = S), Ut ? (e(15, Lt = -1), ha()) : (ys(!qe, qe), setTimeout(() => {
      Ur.focus(), Ur.select();
    }));
  }
  function yl() {
    e(14, it = void 0), e(55, Z = void 0), e(15, Lt = -1);
  }
  function _l() {
    e(54, Vt = []), e(55, Z = void 0);
  }
  let pi = !1, it, Vt, Z, fa = "", Ur, Lt = -1, qr, xo = [], Hn, di, Lo, ds;
  const El = /* @__PURE__ */ new Set(), Nn = Zl();
  Ql(() => {
    L && (L.setEventHandler(void 0), L.indicateReverse(!1), L.setSelectedMarker(-1), L.setMarkers(void 0, void 0));
  });
  function ha(S) {
    if (di && (clearTimeout(di), di = void 0), Lt > -1 && it)
      e(55, Z = it[Lt]), e(1, G = Z.place_type[0] === "reverse" ? Z.place_name : Z.place_name.replace(/,.*/, "")), e(18, qr = void 0), e(54, Vt = void 0), e(15, Lt = -1);
    else if (G) {
      const Ut = S || !vs(G);
      ms(G, { exact: !0 }).then(() => {
        e(54, Vt = it), e(55, Z = void 0), Ut && Cl();
      }).catch((qe) => e(18, qr = qe));
    }
  }
  function vs(S) {
    try {
      return zc(S, 6);
    } catch {
      return !1;
    }
  }
  async function ms(S, { byId: Ut = !1, exact: qe = !1 } = {}) {
    e(18, qr = void 0), Hn == null || Hn.abort();
    const nr = new AbortController();
    e(19, Hn = nr);
    try {
      const ot = vs(S), ir = new URLSearchParams();
      if (I !== void 0 && ir.set("language", Array.isArray(I) ? I.join(",") : I ?? ""), zt && ir.set("types", zt.join(",")), Vr && ir.set("excludeTypes", String(Vr)), u && ir.set("bbox", u.map((wo) => wo.toFixed(6)).join(",")), h && ir.set("country", Array.isArray(h) ? h.join(",") : h), !Ut && !ot) {
        const wo = await Pc(L, b, nr);
        wo && ir.set("proximity", wo), (qe || !B) && ir.set("autocomplete", "false"), ir.set("fuzzyMatch", String(C));
      }
      N !== void 0 && (!ot || (zt == null ? void 0 : zt.length) === 1) && ir.set("limit", String(N)), ir.set("key", a), ps(ir);
      const bo = Ue + "/" + encodeURIComponent(ot ? ot.decimalLongitude + "," + ot.decimalLatitude : S) + ".json?" + ir.toString();
      if (bo === fa) {
        Ut ? (e(14, it = void 0), e(55, Z = xo[0])) : e(14, it = xo);
        return;
      }
      fa = bo;
      const Es = await fetch(bo, { signal: nr.signal, ...In });
      if (!Es.ok)
        throw new Error(await Es.text());
      const Cs = await Es.json();
      Nn("response", { url: bo, featureCollection: Cs }), Ut ? (e(14, it = void 0), e(55, Z = Cs.features[0]), xo = [Z]) : (e(14, it = Cs.features.filter(d)), ot && it.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + ot.decimalLongitude + "_" + ot.decimalLatitude,
        text: ot.decimalLatitude + ", " + ot.decimalLongitude,
        place_name: ot.decimalLatitude + ", " + ot.decimalLongitude,
        place_type: ["reverse"],
        center: [ot.decimalLongitude, ot.decimalLatitude],
        bbox: [
          ot.decimalLongitude,
          ot.decimalLatitude,
          ot.decimalLongitude,
          ot.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [ot.decimalLongitude, ot.decimalLatitude]
        }
      }), xo = it, ot && Ur.focus());
    } catch (ot) {
      if (ot && typeof ot == "object" && "name" in ot && ot.name === "AbortError")
        return;
      throw ot;
    } finally {
      nr === Hn && e(19, Hn = void 0);
    }
  }
  function Cl() {
    var qe;
    if (!(Vt != null && Vt.length) || !v)
      return;
    const S = [180, 90, -180, -90], Ut = !Vt.some((nr) => !nr.matching_text);
    for (const nr of Vt)
      if (Ut || !nr.matching_text)
        for (const ot of [0, 1, 2, 3])
          S[ot] = Math[ot < 2 ? "min" : "max"](S[ot], ((qe = nr.bbox) == null ? void 0 : qe[ot]) ?? nr.center[ot % 2]);
    L && Vt.length > 0 && (Z && S[0] === S[2] && S[1] === S[3] ? L.flyTo(Z.center, Ie) : L.fitBounds(Ca(S), 50, De));
  }
  function Il(S) {
    e(0, A = p === "always"), e(14, it = void 0), e(55, Z = void 0), e(15, Lt = -1), ca(S[1].toFixed(6) + ", " + wc(S[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Nl(S) {
    if (!it)
      return;
    let Ut = S.key === "ArrowDown" ? 1 : S.key === "ArrowUp" ? -1 : 0;
    Ut && (Lt === (K ? 0 : -1) && Ut === -1 && e(15, Lt = it.length), e(15, Lt += Ut), Lt >= it.length && e(15, Lt = -1), Lt < 0 && K && e(15, Lt = 0), S.preventDefault());
  }
  function ys(S = !0, Ut = !1) {
    if (e(18, qr = void 0), B || Ut) {
      if (di && clearTimeout(di), G.length < T)
        return;
      const qe = G;
      di = window.setTimeout(
        () => {
          ms(qe).catch((nr) => e(18, qr = nr));
        },
        S ? g : 0
      );
    } else
      e(14, it = void 0), e(18, qr = void 0);
  }
  function _s(S) {
    e(55, Z = S), e(1, G = S.place_name), e(15, Lt = -1);
  }
  const Sl = () => Ur.focus();
  function xl(S) {
    Ps[S ? "unshift" : "push"](() => {
      Ur = S, e(17, Ur);
    });
  }
  function Ll() {
    G = this.value, e(1, G), e(13, pi), e(27, c);
  }
  const bl = () => e(13, pi = !0), wl = () => e(13, pi = !1), Pl = () => ys(), Rl = () => {
    e(1, G = ""), Ur.focus();
  }, Ol = () => e(0, A = !A), Tl = () => e(18, qr = void 0), Dl = (S) => e(15, Lt = S), Ml = (S) => _s(S), Al = () => {
    K || e(15, Lt = -1);
  }, Fl = () => {
  };
  return n.$$set = (S) => {
    "class" in S && e(2, s = S.class), "apiKey" in S && e(25, a = S.apiKey), "bbox" in S && e(26, u = S.bbox), "clearButtonTitle" in S && e(3, l = S.clearButtonTitle), "clearOnBlur" in S && e(27, c = S.clearOnBlur), "collapsed" in S && e(4, f = S.collapsed), "country" in S && e(28, h = S.country), "debounceSearch" in S && e(29, g = S.debounceSearch), "enableReverse" in S && e(5, p = S.enableReverse), "errorMessage" in S && e(6, y = S.errorMessage), "filter" in S && e(30, d = S.filter), "flyTo" in S && e(31, v = S.flyTo), "fuzzyMatch" in S && e(32, C = S.fuzzyMatch), "language" in S && e(33, I = S.language), "limit" in S && e(34, N = S.limit), "mapController" in S && e(35, L = S.mapController), "minLength" in S && e(36, T = S.minLength), "noResultsMessage" in S && e(7, R = S.noResultsMessage), "placeholder" in S && e(8, D = S.placeholder), "proximity" in S && e(37, b = S.proximity), "reverseActive" in S && e(0, A = S.reverseActive), "reverseButtonTitle" in S && e(9, Y = S.reverseButtonTitle), "searchValue" in S && e(1, G = S.searchValue), "showFullGeometry" in S && e(38, at = S.showFullGeometry), "showPlaceType" in S && e(10, x = S.showPlaceType), "showResultsWhileTyping" in S && e(39, B = S.showResultsWhileTyping), "selectFirst" in S && e(11, K = S.selectFirst), "flyToSelected" in S && e(40, _t = S.flyToSelected), "markerOnSelected" in S && e(41, Qt = S.markerOnSelected), "types" in S && e(42, zt = S.types), "excludeTypes" in S && e(43, Vr = S.excludeTypes), "zoom" in S && e(44, Ie = S.zoom), "maxZoom" in S && e(45, De = S.maxZoom), "apiUrl" in S && e(46, Ue = S.apiUrl), "fetchParameters" in S && e(47, In = S.fetchParameters), "iconsBaseUrl" in S && e(12, sn = S.iconsBaseUrl), "adjustUrlQuery" in S && e(48, ps = S.adjustUrlQuery), "$$scope" in S && e(58, o = S.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      e(16, Lo = pi), c && !pi && e(1, G = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | n.$$.dirty[1] & /*minLength*/
    32 && G.length < T && (e(55, Z = void 0), e(14, it = void 0), e(18, qr = void 0), e(54, Vt = it)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && at && Z && !Z.address && Z.geometry.type === "Point" && Z.place_type[0] !== "reverse" && ms(Z.id, { byId: !0 }).catch((S) => e(18, qr = S)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (L && Z && Z.id !== ds && v && (!Z.bbox || Z.bbox[0] === Z.bbox[2] && Z.bbox[1] === Z.bbox[3] ? L.flyTo(Z.center, Z.id.startsWith("poi.") || Z.id.startsWith("address.") ? De : Ie) : L.fitBounds(Ca(Z.bbox), 50, De), e(14, it = void 0), e(54, Vt = void 0), e(15, Lt = -1)), e(56, ds = Z == null ? void 0 : Z.id)), n.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && K && it != null && it.length && e(15, Lt = 0), n.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (K || e(15, Lt = -1)), n.$$.dirty[0] & /*listFeatures*/
    16384 | n.$$.dirty[1] & /*markedFeatures*/
    8388608 && Vt !== it && e(54, Vt = void 0), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | n.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && L && L.setEventHandler((S) => {
      switch (S.type) {
        case "mapClick":
          A && Il(S.coordinates);
          break;
        case "markerClick":
          {
            const Ut = it == null ? void 0 : it.find((qe) => qe.id === S.id);
            Ut && _s(Ut);
          }
          break;
        case "markerMouseEnter":
          Vt && e(15, Lt = Lo ? (it == null ? void 0 : it.findIndex((Ut) => Ut.id === S.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          Vt && e(15, Lt = -1);
          break;
      }
    }), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && e(57, r = it == null ? void 0 : it[Lt]), n.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && L && r && v && _t && L.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? De : Ie), n.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Qt || L == null || L.setMarkers(void 0, void 0)), n.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && L && Qt && !Vt && (L.setMarkers(r ? [r] : void 0, void 0), L.setSelectedMarker(r ? 0 : -1)), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && L && L.setMarkers(Vt, Z), n.$$.dirty[0] & /*selectedItemIndex*/
    32768 | n.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && Vt && L && L.setSelectedMarker(Lt), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    16 && L) {
      const S = vs(G);
      L.setReverseMarker(S ? [S.decimalLongitude, S.decimalLatitude] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    67108864 && Nn("select", r), n.$$.dirty[1] & /*picked*/
    16777216 && Nn("pick", Z), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && Nn("optionsVisibilityChange", Lo && !!it), n.$$.dirty[0] & /*listFeatures*/
    16384 && Nn("featuresListed", it), n.$$.dirty[1] & /*markedFeatures*/
    8388608 && Nn("featuresMarked", Vt), n.$$.dirty[0] & /*reverseActive*/
    1 && Nn("reverseToggle", A), n.$$.dirty[0] & /*searchValue*/
    2 && Nn("queryChange", G), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    16 && L && L.indicateReverse(A);
  }, [
    A,
    G,
    s,
    l,
    f,
    p,
    y,
    R,
    D,
    Y,
    x,
    K,
    sn,
    pi,
    it,
    Lt,
    Lo,
    Ur,
    qr,
    Hn,
    El,
    ha,
    Nl,
    ys,
    _s,
    a,
    u,
    c,
    h,
    g,
    d,
    v,
    C,
    I,
    N,
    L,
    T,
    b,
    at,
    B,
    _t,
    Qt,
    zt,
    Vr,
    Ie,
    De,
    Ue,
    In,
    ps,
    vl,
    ml,
    ca,
    yl,
    _l,
    Vt,
    Z,
    ds,
    r,
    o,
    i,
    Sl,
    xl,
    Ll,
    bl,
    wl,
    Pl,
    Rl,
    Ol,
    Tl,
    Dl,
    Ml,
    Al,
    Fl
  ];
}
let Hc = class extends Xn {
  constructor(t) {
    super(), qn(
      this,
      t,
      Wc,
      Yc,
      Un,
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
function jc(n, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
          return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              e = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              e.label = l[1];
              break;
            }
            if (l[0] === 6 && e.label < o[1]) {
              e.label = o[1], o = l;
              break;
            }
            if (o && e.label < o[2]) {
              e.label = o[2], e.ops.push(l);
              break;
            }
            o[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        l = t.call(n, e);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        r = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Tn = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return n;
  }()
);
function Kc(n, t) {
  return n > t ? 1 : n < t ? -1 : 0;
}
function Ln(n, t, e) {
  for (var r = new Tn(null, null), i = r, o = r; ; ) {
    var s = e(n, t.key);
    if (s < 0) {
      if (t.left === null)
        break;
      if (e(n, t.left.key) < 0) {
        var a = t.left;
        if (t.left = a.right, a.right = t, t = a, t.left === null)
          break;
      }
      o.left = t, o = t, t = t.left;
    } else if (s > 0) {
      if (t.right === null)
        break;
      if (e(n, t.right.key) > 0) {
        var a = t.right;
        if (t.right = a.left, a.left = t, t = a, t.right === null)
          break;
      }
      i.right = t, i = t, t = t.right;
    } else
      break;
  }
  return i.right = t.left, o.left = t.right, t.left = r.right, t.right = r.left, t;
}
function xs(n, t, e, r) {
  var i = new Tn(n, t);
  if (e === null)
    return i.left = i.right = null, i;
  e = Ln(n, e, r);
  var o = r(n, e.key);
  return o < 0 ? (i.left = e.left, i.right = e, e.left = null) : o >= 0 && (i.right = e.right, i.left = e, e.right = null), i;
}
function Da(n, t, e) {
  var r = null, i = null;
  if (t) {
    t = Ln(n, t, e);
    var o = e(t.key, n);
    o === 0 ? (r = t.left, i = t.right) : o < 0 ? (i = t.right, t.right = null, r = t) : (r = t.left, t.left = null, i = t);
  }
  return { left: r, right: i };
}
function Qc(n, t, e) {
  return t === null ? n : (n === null || (t = Ln(n.key, t, e), t.left = n), t);
}
function Ts(n, t, e, r, i) {
  if (n) {
    r("" + t + (e ? "└── " : "├── ") + i(n) + `
`);
    var o = t + (e ? "    " : "│   ");
    n.left && Ts(n.left, o, !1, r, i), n.right && Ts(n.right, o, !0, r, i);
  }
}
var Hs = (
  /** @class */
  function() {
    function n(t) {
      t === void 0 && (t = Kc), this._root = null, this._size = 0, this._comparator = t;
    }
    return n.prototype.insert = function(t, e) {
      return this._size++, this._root = xs(t, e, this._root, this._comparator);
    }, n.prototype.add = function(t, e) {
      var r = new Tn(t, e);
      this._root === null && (r.left = r.right = null, this._size++, this._root = r);
      var i = this._comparator, o = Ln(t, this._root, i), s = i(t, o.key);
      return s === 0 ? this._root = o : (s < 0 ? (r.left = o.left, r.right = o, o.left = null) : s > 0 && (r.right = o.right, r.left = o, o.right = null), this._size++, this._root = r), this._root;
    }, n.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, n.prototype._remove = function(t, e, r) {
      var i;
      if (e === null)
        return null;
      e = Ln(t, e, r);
      var o = r(t, e.key);
      return o === 0 ? (e.left === null ? i = e.right : (i = Ln(t, e.left, r), i.right = e.right), this._size--, i) : e;
    }, n.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = Ln(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, n.prototype.findStatic = function(t) {
      for (var e = this._root, r = this._comparator; e; ) {
        var i = r(t, e.key);
        if (i === 0)
          return e;
        i < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, n.prototype.find = function(t) {
      return this._root && (this._root = Ln(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, n.prototype.contains = function(t) {
      for (var e = this._root, r = this._comparator; e; ) {
        var i = r(t, e.key);
        if (i === 0)
          return !0;
        i < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, n.prototype.forEach = function(t, e) {
      for (var r = this._root, i = [], o = !1; !o; )
        r !== null ? (i.push(r), r = r.left) : i.length !== 0 ? (r = i.pop(), t.call(e, r), r = r.right) : o = !0;
      return this;
    }, n.prototype.range = function(t, e, r, i) {
      for (var o = [], s = this._comparator, a = this._root, u; o.length !== 0 || a; )
        if (a)
          o.push(a), a = a.left;
        else {
          if (a = o.pop(), u = s(a.key, e), u > 0)
            break;
          if (s(a.key, t) >= 0 && r.call(i, a))
            return this;
          a = a.right;
        }
      return this;
    }, n.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var r = e.key;
        return t.push(r);
      }), t;
    }, n.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var r = e.data;
        return t.push(r);
      }), t;
    }, n.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, n.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, n.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, n.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, n.prototype.at = function(t) {
      for (var e = this._root, r = !1, i = 0, o = []; !r; )
        if (e)
          o.push(e), e = e.left;
        else if (o.length > 0) {
          if (e = o.pop(), i === t)
            return e;
          i++, e = e.right;
        } else
          r = !0;
      return null;
    }, n.prototype.next = function(t) {
      var e = this._root, r = null;
      if (t.right) {
        for (r = t.right; r.left; )
          r = r.left;
        return r;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? (r = e, e = e.left) : e = e.right;
      }
      return r;
    }, n.prototype.prev = function(t) {
      var e = this._root, r = null;
      if (t.left !== null) {
        for (r = t.left; r.right; )
          r = r.right;
        return r;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? e = e.left : (r = e, e = e.right);
      }
      return r;
    }, n.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, n.prototype.toList = function() {
      return Jc(this._root);
    }, n.prototype.load = function(t, e, r) {
      e === void 0 && (e = []), r === void 0 && (r = !1);
      var i = t.length, o = this._comparator;
      if (r && As(t, e, 0, i - 1, o), this._root === null)
        this._root = Ds(t, e, 0, i), this._size = i;
      else {
        var s = $c(this.toList(), Zc(t, e), o);
        i = this._size + i, this._root = Ms({ head: s }, 0, i);
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
    }), n.prototype.toString = function(t) {
      t === void 0 && (t = function(r) {
        return String(r.key);
      });
      var e = [];
      return Ts(this._root, "", !0, function(r) {
        return e.push(r);
      }, t), e.join("");
    }, n.prototype.update = function(t, e, r) {
      var i = this._comparator, o = Da(t, this._root, i), s = o.left, a = o.right;
      i(t, e) < 0 ? a = xs(e, r, a, i) : s = xs(e, r, s, i), this._root = Qc(s, a, i);
    }, n.prototype.split = function(t) {
      return Da(t, this._root, this._comparator);
    }, n.prototype[Symbol.iterator] = function() {
      var t, e, r;
      return jc(this, function(i) {
        switch (i.label) {
          case 0:
            t = this._root, e = [], r = !1, i.label = 1;
          case 1:
            return r ? [3, 6] : t === null ? [3, 2] : (e.push(t), t = t.left, [3, 5]);
          case 2:
            return e.length === 0 ? [3, 4] : (t = e.pop(), [4, t]);
          case 3:
            return i.sent(), t = t.right, [3, 5];
          case 4:
            r = !0, i.label = 5;
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
function Ds(n, t, e, r) {
  var i = r - e;
  if (i > 0) {
    var o = e + Math.floor(i / 2), s = n[o], a = t[o], u = new Tn(s, a);
    return u.left = Ds(n, t, e, o), u.right = Ds(n, t, o + 1, r), u;
  }
  return null;
}
function Zc(n, t) {
  for (var e = new Tn(null, null), r = e, i = 0; i < n.length; i++)
    r = r.next = new Tn(n[i], t[i]);
  return r.next = null, e.next;
}
function Jc(n) {
  for (var t = n, e = [], r = !1, i = new Tn(null, null), o = i; !r; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = o = o.next = e.pop(), t = t.right) : r = !0;
  return o.next = null, i.next;
}
function Ms(n, t, e) {
  var r = e - t;
  if (r > 0) {
    var i = t + Math.floor(r / 2), o = Ms(n, t, i), s = n.head;
    return s.left = o, n.head = n.head.next, s.right = Ms(n, i + 1, e), s;
  }
  return null;
}
function $c(n, t, e) {
  for (var r = new Tn(null, null), i = r, o = n, s = t; o !== null && s !== null; )
    e(o.key, s.key) < 0 ? (i.next = o, o = o.next) : (i.next = s, s = s.next), i = i.next;
  return o !== null ? i.next = o : s !== null && (i.next = s), r.next;
}
function As(n, t, e, r, i) {
  if (!(e >= r)) {
    for (var o = n[e + r >> 1], s = e - 1, a = r + 1; ; ) {
      do
        s++;
      while (i(n[s], o) < 0);
      do
        a--;
      while (i(n[a], o) > 0);
      if (s >= a)
        break;
      var u = n[s];
      n[s] = n[a], n[a] = u, u = t[s], t[s] = t[a], t[a] = u;
    }
    As(n, t, e, a, i), As(n, t, a + 1, r, i);
  }
}
function Nr(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ma(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function be(n, t, e) {
  return t && Ma(n.prototype, t), e && Ma(n, e), n;
}
var ji = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Fs = function(t, e) {
  if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y)
    return null;
  var r = t.ll.x < e.ll.x ? e.ll.x : t.ll.x, i = t.ur.x < e.ur.x ? t.ur.x : e.ur.x, o = t.ll.y < e.ll.y ? e.ll.y : t.ll.y, s = t.ur.y < e.ur.y ? t.ur.y : e.ur.y;
  return {
    ll: {
      x: r,
      y: o
    },
    ur: {
      x: i,
      y: s
    }
  };
}, bn = Number.EPSILON;
bn === void 0 && (bn = Math.pow(2, -52));
var tf = bn * bn, ks = function(t, e) {
  if (-bn < t && t < bn && -bn < e && e < bn)
    return 0;
  var r = t - e;
  return r * r < tf * t * e ? 0 : t < e ? -1 : 1;
}, ef = /* @__PURE__ */ function() {
  function n() {
    Nr(this, n), this.reset();
  }
  return be(n, [{
    key: "reset",
    value: function() {
      this.xRounder = new Aa(), this.yRounder = new Aa();
    }
  }, {
    key: "round",
    value: function(e, r) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(r)
      };
    }
  }]), n;
}(), Aa = /* @__PURE__ */ function() {
  function n() {
    Nr(this, n), this.tree = new Hs(), this.round(0);
  }
  return be(n, [{
    key: "round",
    value: function(e) {
      var r = this.tree.add(e), i = this.tree.prev(r);
      if (i !== null && ks(r.key, i.key) === 0)
        return this.tree.remove(e), i.key;
      var o = this.tree.next(r);
      return o !== null && ks(r.key, o.key) === 0 ? (this.tree.remove(e), o.key) : e;
    }
  }]), n;
}(), ro = new ef(), $i = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, Cu = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, Fa = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  }, s = $i(i, o);
  return ks(s, 0);
}, Uo = function(t) {
  return Math.sqrt(Cu(t, t));
}, rf = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  };
  return $i(o, i) / Uo(o) / Uo(i);
}, nf = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  };
  return Cu(o, i) / Uo(o) / Uo(i);
}, ka = function(t, e, r) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (r - t.y),
    y: r
  };
}, Ba = function(t, e, r) {
  return e.x === 0 ? null : {
    x: r,
    y: t.y + e.y / e.x * (r - t.x)
  };
}, of = function(t, e, r, i) {
  if (e.x === 0)
    return Ba(r, i, t.x);
  if (i.x === 0)
    return Ba(t, e, r.x);
  if (e.y === 0)
    return ka(r, i, t.y);
  if (i.y === 0)
    return ka(t, e, r.y);
  var o = $i(e, i);
  if (o == 0)
    return null;
  var s = {
    x: r.x - t.x,
    y: r.y - t.y
  }, a = $i(s, e) / o, u = $i(s, i) / o, l = t.x + u * e.x, c = r.x + a * i.x, f = t.y + u * e.y, h = r.y + a * i.y, g = (l + c) / 2, p = (f + h) / 2;
  return {
    x: g,
    y: p
  };
}, Hr = /* @__PURE__ */ function() {
  be(n, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, r) {
      var i = n.comparePoints(e.point, r.point);
      return i !== 0 ? i : (e.point !== r.point && e.link(r), e.isLeft !== r.isLeft ? e.isLeft ? 1 : -1 : qo.compare(e.segment, r.segment));
    }
    // for ordering points in sweep line order
  }, {
    key: "comparePoints",
    value: function(e, r) {
      return e.x < r.x ? -1 : e.x > r.x ? 1 : e.y < r.y ? -1 : e.y > r.y ? 1 : 0;
    }
    // Warning: 'point' input will be modified and re-used (for performance)
  }]);
  function n(t, e) {
    Nr(this, n), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return be(n, [{
    key: "link",
    value: function(e) {
      if (e.point === this.point)
        throw new Error("Tried to link already linked events");
      for (var r = e.point.events, i = 0, o = r.length; i < o; i++) {
        var s = r[i];
        this.point.events.push(s), s.point = this.point;
      }
      this.checkForConsuming();
    }
    /* Do a pass over our linked events and check to see if any pair
     * of segments match, and should be consumed. */
  }, {
    key: "checkForConsuming",
    value: function() {
      for (var e = this.point.events.length, r = 0; r < e; r++) {
        var i = this.point.events[r];
        if (i.segment.consumedBy === void 0)
          for (var o = r + 1; o < e; o++) {
            var s = this.point.events[o];
            s.consumedBy === void 0 && i.otherSE.point.events === s.otherSE.point.events && i.segment.consume(s.segment);
          }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function() {
      for (var e = [], r = 0, i = this.point.events.length; r < i; r++) {
        var o = this.point.events[r];
        o !== this && !o.segment.ringOut && o.segment.isInResult() && e.push(o);
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
  }, {
    key: "getLeftmostComparator",
    value: function(e) {
      var r = this, i = /* @__PURE__ */ new Map(), o = function(a) {
        var u = a.otherSE;
        i.set(a, {
          sine: rf(r.point, e.point, u.point),
          cosine: nf(r.point, e.point, u.point)
        });
      };
      return function(s, a) {
        i.has(s) || o(s), i.has(a) || o(a);
        var u = i.get(s), l = u.sine, c = u.cosine, f = i.get(a), h = f.sine, g = f.cosine;
        return l >= 0 && h >= 0 ? c < g ? 1 : c > g ? -1 : 0 : l < 0 && h < 0 ? c < g ? -1 : c > g ? 1 : 0 : h < l ? -1 : h > l ? 1 : 0;
      };
    }
  }]), n;
}(), sf = 0, qo = /* @__PURE__ */ function() {
  be(n, null, [{
    key: "compare",
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
    value: function(e, r) {
      var i = e.leftSE.point.x, o = r.leftSE.point.x, s = e.rightSE.point.x, a = r.rightSE.point.x;
      if (a < i)
        return 1;
      if (s < o)
        return -1;
      var u = e.leftSE.point.y, l = r.leftSE.point.y, c = e.rightSE.point.y, f = r.rightSE.point.y;
      if (i < o) {
        if (l < u && l < c)
          return 1;
        if (l > u && l > c)
          return -1;
        var h = e.comparePoint(r.leftSE.point);
        if (h < 0)
          return 1;
        if (h > 0)
          return -1;
        var g = r.comparePoint(e.rightSE.point);
        return g !== 0 ? g : -1;
      }
      if (i > o) {
        if (u < l && u < f)
          return -1;
        if (u > l && u > f)
          return 1;
        var p = r.comparePoint(e.leftSE.point);
        if (p !== 0)
          return p;
        var y = e.comparePoint(r.rightSE.point);
        return y < 0 ? 1 : y > 0 ? -1 : 1;
      }
      if (u < l)
        return -1;
      if (u > l)
        return 1;
      if (s < a) {
        var d = r.comparePoint(e.rightSE.point);
        if (d !== 0)
          return d;
      }
      if (s > a) {
        var v = e.comparePoint(r.rightSE.point);
        if (v < 0)
          return 1;
        if (v > 0)
          return -1;
      }
      if (s !== a) {
        var C = c - u, I = s - i, N = f - l, L = a - o;
        if (C > I && N < L)
          return 1;
        if (C < I && N > L)
          return -1;
      }
      return s > a ? 1 : s < a || c < f ? -1 : c > f ? 1 : e.id < r.id ? -1 : e.id > r.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function n(t, e, r, i) {
    Nr(this, n), this.id = ++sf, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = r, this.windings = i;
  }
  return be(n, [{
    key: "replaceRightSE",
    /* When a segment is split, the rightSE is replaced with a new sweep event */
    value: function(e) {
      this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
  }, {
    key: "bbox",
    value: function() {
      var e = this.leftSE.point.y, r = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: e < r ? e : r
        },
        ur: {
          x: this.rightSE.point.x,
          y: e > r ? e : r
        }
      };
    }
    /* A vector from the left point to the right */
  }, {
    key: "vector",
    value: function() {
      return {
        x: this.rightSE.point.x - this.leftSE.point.x,
        y: this.rightSE.point.y - this.leftSE.point.y
      };
    }
  }, {
    key: "isAnEndpoint",
    value: function(e) {
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
  }, {
    key: "comparePoint",
    value: function(e) {
      if (this.isAnEndpoint(e))
        return 0;
      var r = this.leftSE.point, i = this.rightSE.point, o = this.vector();
      if (r.x === i.x)
        return e.x === r.x ? 0 : e.x < r.x ? 1 : -1;
      var s = (e.y - r.y) / o.y, a = r.x + s * o.x;
      if (e.x === a)
        return 0;
      var u = (e.x - r.x) / o.x, l = r.y + u * o.y;
      return e.y === l ? 0 : e.y < l ? -1 : 1;
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
  }, {
    key: "getIntersection",
    value: function(e) {
      var r = this.bbox(), i = e.bbox(), o = Fs(r, i);
      if (o === null)
        return null;
      var s = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = ji(r, u) && this.comparePoint(u) === 0, f = ji(i, s) && e.comparePoint(s) === 0, h = ji(r, l) && this.comparePoint(l) === 0, g = ji(i, a) && e.comparePoint(a) === 0;
      if (f && c)
        return g && !h ? a : !g && h ? l : null;
      if (f)
        return h && s.x === l.x && s.y === l.y ? null : s;
      if (c)
        return g && a.x === u.x && a.y === u.y ? null : u;
      if (g && h)
        return null;
      if (g)
        return a;
      if (h)
        return l;
      var p = of(s, this.vector(), u, e.vector());
      return p === null || !ji(o, p) ? null : ro.round(p.x, p.y);
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
  }, {
    key: "split",
    value: function(e) {
      var r = [], i = e.events !== void 0, o = new Hr(e, !0), s = new Hr(e, !1), a = this.rightSE;
      this.replaceRightSE(s), r.push(s), r.push(o);
      var u = new n(o, a, this.rings.slice(), this.windings.slice());
      return Hr.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), Hr.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (o.checkForConsuming(), s.checkForConsuming()), r;
    }
    /* Swap which event is left and right */
  }, {
    key: "swapEvents",
    value: function() {
      var e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (var r = 0, i = this.windings.length; r < i; r++)
        this.windings[r] *= -1;
    }
    /* Consume another segment. We take their rings under our wing
     * and mark them as consumed. Use for perfectly overlapping segments */
  }, {
    key: "consume",
    value: function(e) {
      for (var r = this, i = e; r.consumedBy; )
        r = r.consumedBy;
      for (; i.consumedBy; )
        i = i.consumedBy;
      var o = n.compare(r, i);
      if (o !== 0) {
        if (o > 0) {
          var s = r;
          r = i, i = s;
        }
        if (r.prev === i) {
          var a = r;
          r = i, i = a;
        }
        for (var u = 0, l = i.rings.length; u < l; u++) {
          var c = i.rings[u], f = i.windings[u], h = r.rings.indexOf(c);
          h === -1 ? (r.rings.push(c), r.windings.push(f)) : r.windings[h] += f;
        }
        i.rings = null, i.windings = null, i.consumedBy = r, i.leftSE.consumedBy = r.leftSE, i.rightSE.consumedBy = r.rightSE;
      }
    }
    /* The first segment previous segment chain that is in the result */
  }, {
    key: "prevInResult",
    value: function() {
      return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
    }
  }, {
    key: "beforeState",
    value: function() {
      if (this._beforeState !== void 0)
        return this._beforeState;
      if (!this.prev)
        this._beforeState = {
          rings: [],
          windings: [],
          multiPolys: []
        };
      else {
        var e = this.prev.consumedBy || this.prev;
        this._beforeState = e.afterState();
      }
      return this._beforeState;
    }
  }, {
    key: "afterState",
    value: function() {
      if (this._afterState !== void 0)
        return this._afterState;
      var e = this.beforeState();
      this._afterState = {
        rings: e.rings.slice(0),
        windings: e.windings.slice(0),
        multiPolys: []
      };
      for (var r = this._afterState.rings, i = this._afterState.windings, o = this._afterState.multiPolys, s = 0, a = this.rings.length; s < a; s++) {
        var u = this.rings[s], l = this.windings[s], c = r.indexOf(u);
        c === -1 ? (r.push(u), i.push(l)) : i[c] += l;
      }
      for (var f = [], h = [], g = 0, p = r.length; g < p; g++)
        if (i[g] !== 0) {
          var y = r[g], d = y.poly;
          if (h.indexOf(d) === -1)
            if (y.isExterior)
              f.push(d);
            else {
              h.indexOf(d) === -1 && h.push(d);
              var v = f.indexOf(y.poly);
              v !== -1 && f.splice(v, 1);
            }
        }
      for (var C = 0, I = f.length; C < I; C++) {
        var N = f[C].multiPoly;
        o.indexOf(N) === -1 && o.push(N);
      }
      return this._afterState;
    }
    /* Is this segment part of the final result? */
  }, {
    key: "isInResult",
    value: function() {
      if (this.consumedBy)
        return !1;
      if (this._isInResult !== void 0)
        return this._isInResult;
      var e = this.beforeState().multiPolys, r = this.afterState().multiPolys;
      switch (br.type) {
        case "union": {
          var i = e.length === 0, o = r.length === 0;
          this._isInResult = i !== o;
          break;
        }
        case "intersection": {
          var s, a;
          e.length < r.length ? (s = e.length, a = r.length) : (s = r.length, a = e.length), this._isInResult = a === br.numMultiPolys && s < a;
          break;
        }
        case "xor": {
          var u = Math.abs(e.length - r.length);
          this._isInResult = u % 2 === 1;
          break;
        }
        case "difference": {
          var l = function(f) {
            return f.length === 1 && f[0].isSubject;
          };
          this._isInResult = l(e) !== l(r);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(br.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, r, i) {
      var o, s, a, u = Hr.comparePoints(e, r);
      if (u < 0)
        o = e, s = r, a = 1;
      else if (u > 0)
        o = r, s = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new Hr(o, !0), c = new Hr(s, !1);
      return new n(l, c, [i], [a]);
    }
  }]), n;
}(), Ga = /* @__PURE__ */ function() {
  function n(t, e, r) {
    if (Nr(this, n), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = r, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var i = ro.round(t[0][0], t[0][1]);
    this.bbox = {
      ll: {
        x: i.x,
        y: i.y
      },
      ur: {
        x: i.x,
        y: i.y
      }
    };
    for (var o = i, s = 1, a = t.length; s < a; s++) {
      if (typeof t[s][0] != "number" || typeof t[s][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      var u = ro.round(t[s][0], t[s][1]);
      u.x === o.x && u.y === o.y || (this.segments.push(qo.fromRing(o, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), o = u);
    }
    (i.x !== o.x || i.y !== o.y) && this.segments.push(qo.fromRing(o, i, this));
  }
  return be(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], r = 0, i = this.segments.length; r < i; r++) {
        var o = this.segments[r];
        e.push(o.leftSE), e.push(o.rightSE);
      }
      return e;
    }
  }]), n;
}(), af = /* @__PURE__ */ function() {
  function n(t, e) {
    if (Nr(this, n), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Ga(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (var r = 1, i = t.length; r < i; r++) {
      var o = new Ga(t[r], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = e;
  }
  return be(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), r = 0, i = this.interiorRings.length; r < i; r++)
        for (var o = this.interiorRings[r].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), n;
}(), za = /* @__PURE__ */ function() {
  function n(t, e) {
    if (Nr(this, n), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof t[0][0][0] == "number" && (t = [t]);
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
    for (var r = 0, i = t.length; r < i; r++) {
      var o = new af(t[r], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = e;
  }
  return be(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], r = 0, i = this.polys.length; r < i; r++)
        for (var o = this.polys[r].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), n;
}(), uf = /* @__PURE__ */ function() {
  be(n, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var r = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!(!s.isInResult() || s.ringOut)) {
          for (var a = null, u = s.leftSE, l = s.rightSE, c = [u], f = u.point, h = []; a = u, u = l, c.push(u), u.point !== f; )
            for (; ; ) {
              var g = u.getAvailableLinkedEvents();
              if (g.length === 0) {
                var p = c[0].point, y = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(p.x, ",") + " ".concat(p.y, "]. Last matching segment found ends at") + " [".concat(y.x, ", ").concat(y.y, "]."));
              }
              if (g.length === 1) {
                l = g[0].otherSE;
                break;
              }
              for (var d = null, v = 0, C = h.length; v < C; v++)
                if (h[v].point === u.point) {
                  d = v;
                  break;
                }
              if (d !== null) {
                var I = h.splice(d)[0], N = c.splice(I.index);
                N.unshift(N[0].otherSE), r.push(new n(N.reverse()));
                continue;
              }
              h.push({
                index: c.length,
                point: u.point
              });
              var L = u.getLeftmostComparator(a);
              l = g.sort(L)[0].otherSE;
              break;
            }
          r.push(new n(c));
        }
      }
      return r;
    }
  }]);
  function n(t) {
    Nr(this, n), this.events = t;
    for (var e = 0, r = t.length; e < r; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return be(n, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, r = [e], i = 1, o = this.events.length - 1; i < o; i++) {
        var s = this.events[i].point, a = this.events[i + 1].point;
        Fa(s, e, a) !== 0 && (r.push(s), e = s);
      }
      if (r.length === 1)
        return null;
      var u = r[0], l = r[1];
      Fa(u, e, l) === 0 && r.shift(), r.push(r[0]);
      for (var c = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : r.length - 1, h = this.isExteriorRing() ? r.length : -1, g = [], p = f; p != h; p += c)
        g.push([r[p].x, r[p].y]);
      return g;
    }
  }, {
    key: "isExteriorRing",
    value: function() {
      if (this._isExteriorRing === void 0) {
        var e = this.enclosingRing();
        this._isExteriorRing = e ? !e.isExteriorRing() : !0;
      }
      return this._isExteriorRing;
    }
  }, {
    key: "enclosingRing",
    value: function() {
      return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
    }
    /* Returns the ring that encloses this one, if any */
  }, {
    key: "_calcEnclosingRing",
    value: function() {
      for (var e = this.events[0], r = 1, i = this.events.length; r < i; r++) {
        var o = this.events[r];
        Hr.compare(e, o) > 0 && (e = o);
      }
      for (var s = e.segment.prevInResult(), a = s ? s.prevInResult() : null; ; ) {
        if (!s)
          return null;
        if (!a)
          return s.ringOut;
        if (a.ringOut !== s.ringOut)
          return a.ringOut.enclosingRing() !== s.ringOut ? s.ringOut : s.ringOut.enclosingRing();
        s = a.prevInResult(), a = s ? s.prevInResult() : null;
      }
    }
  }]), n;
}(), Va = /* @__PURE__ */ function() {
  function n(t) {
    Nr(this, n), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return be(n, [{
    key: "addInterior",
    value: function(e) {
      this.interiorRings.push(e), e.poly = this;
    }
  }, {
    key: "getGeom",
    value: function() {
      var e = [this.exteriorRing.getGeom()];
      if (e[0] === null)
        return null;
      for (var r = 0, i = this.interiorRings.length; r < i; r++) {
        var o = this.interiorRings[r].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }]), n;
}(), lf = /* @__PURE__ */ function() {
  function n(t) {
    Nr(this, n), this.rings = t, this.polys = this._composePolys(t);
  }
  return be(n, [{
    key: "getGeom",
    value: function() {
      for (var e = [], r = 0, i = this.polys.length; r < i; r++) {
        var o = this.polys[r].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }, {
    key: "_composePolys",
    value: function(e) {
      for (var r = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!s.poly)
          if (s.isExteriorRing())
            r.push(new Va(s));
          else {
            var a = s.enclosingRing();
            a.poly || r.push(new Va(a)), a.poly.addInterior(s);
          }
      }
      return r;
    }
  }]), n;
}(), cf = /* @__PURE__ */ function() {
  function n(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qo.compare;
    Nr(this, n), this.queue = t, this.tree = new Hs(e), this.segments = [];
  }
  return be(n, [{
    key: "process",
    value: function(e) {
      var r = e.segment, i = [];
      if (e.consumedBy)
        return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(r), i;
      var o = e.isLeft ? this.tree.insert(r) : this.tree.find(r);
      if (!o)
        throw new Error("Unable to find segment #".concat(r.id, " ") + "[".concat(r.leftSE.point.x, ", ").concat(r.leftSE.point.y, "] -> ") + "[".concat(r.rightSE.point.x, ", ").concat(r.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
      for (var s = o, a = o, u = void 0, l = void 0; u === void 0; )
        s = this.tree.prev(s), s === null ? u = null : s.key.consumedBy === void 0 && (u = s.key);
      for (; l === void 0; )
        a = this.tree.next(a), a === null ? l = null : a.key.consumedBy === void 0 && (l = a.key);
      if (e.isLeft) {
        var c = null;
        if (u) {
          var f = u.getIntersection(r);
          if (f !== null && (r.isAnEndpoint(f) || (c = f), !u.isAnEndpoint(f)))
            for (var h = this._splitSafely(u, f), g = 0, p = h.length; g < p; g++)
              i.push(h[g]);
        }
        var y = null;
        if (l) {
          var d = l.getIntersection(r);
          if (d !== null && (r.isAnEndpoint(d) || (y = d), !l.isAnEndpoint(d)))
            for (var v = this._splitSafely(l, d), C = 0, I = v.length; C < I; C++)
              i.push(v[C]);
        }
        if (c !== null || y !== null) {
          var N = null;
          if (c === null)
            N = y;
          else if (y === null)
            N = c;
          else {
            var L = Hr.comparePoints(c, y);
            N = L <= 0 ? c : y;
          }
          this.queue.remove(r.rightSE), i.push(r.rightSE);
          for (var T = r.split(N), R = 0, D = T.length; R < D; R++)
            i.push(T[R]);
        }
        i.length > 0 ? (this.tree.remove(r), i.push(e)) : (this.segments.push(r), r.prev = u);
      } else {
        if (u && l) {
          var b = u.getIntersection(l);
          if (b !== null) {
            if (!u.isAnEndpoint(b))
              for (var A = this._splitSafely(u, b), Y = 0, G = A.length; Y < G; Y++)
                i.push(A[Y]);
            if (!l.isAnEndpoint(b))
              for (var at = this._splitSafely(l, b), x = 0, B = at.length; x < B; x++)
                i.push(at[x]);
          }
        }
        this.tree.remove(r);
      }
      return i;
    }
    /* Safely split a segment that is currently in the datastructures
     * IE - a segment other than the one that is currently being processed. */
  }, {
    key: "_splitSafely",
    value: function(e, r) {
      this.tree.remove(e);
      var i = e.rightSE;
      this.queue.remove(i);
      var o = e.split(r);
      return o.push(i), e.consumedBy === void 0 && this.tree.insert(e), o;
    }
  }]), n;
}(), Ua = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, ff = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, hf = /* @__PURE__ */ function() {
  function n() {
    Nr(this, n);
  }
  return be(n, [{
    key: "run",
    value: function(e, r, i) {
      br.type = e, ro.reset();
      for (var o = [new za(r, !0)], s = 0, a = i.length; s < a; s++)
        o.push(new za(i[s], !1));
      if (br.numMultiPolys = o.length, br.type === "difference")
        for (var u = o[0], l = 1; l < o.length; )
          Fs(o[l].bbox, u.bbox) !== null ? l++ : o.splice(l, 1);
      if (br.type === "intersection") {
        for (var c = 0, f = o.length; c < f; c++)
          for (var h = o[c], g = c + 1, p = o.length; g < p; g++)
            if (Fs(h.bbox, o[g].bbox) === null)
              return [];
      }
      for (var y = new Hs(Hr.compare), d = 0, v = o.length; d < v; d++)
        for (var C = o[d].getSweepEvents(), I = 0, N = C.length; I < N; I++)
          if (y.insert(C[I]), y.size > Ua)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var L = new cf(y), T = y.size, R = y.pop(); R; ) {
        var D = R.key;
        if (y.size === T) {
          var b = D.segment;
          throw new Error("Unable to pop() ".concat(D.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(D.point.x, ", ").concat(D.point.y, "] from segment #").concat(b.id, " ") + "[".concat(b.leftSE.point.x, ", ").concat(b.leftSE.point.y, "] -> ") + "[".concat(b.rightSE.point.x, ", ").concat(b.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (y.size > Ua)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (L.segments.length > ff)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var A = L.process(D), Y = 0, G = A.length; Y < G; Y++) {
          var at = A[Y];
          at.consumedBy === void 0 && y.insert(at);
        }
        T = y.size, R = y.pop();
      }
      ro.reset();
      var x = uf.factory(L.segments), B = new lf(x);
      return B.getGeom();
    }
  }]), n;
}(), br = new hf(), gf = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return br.run("union", t, r);
}, pf = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return br.run("intersection", t, r);
}, df = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return br.run("xor", t, r);
}, vf = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return br.run("difference", t, r);
}, Iu = {
  union: gf,
  intersection: pf,
  xor: df,
  difference: vf
}, Ne = 63710088e-1, Nu = {
  centimeters: Ne * 100,
  centimetres: Ne * 100,
  degrees: Ne / 111325,
  feet: Ne * 3.28084,
  inches: Ne * 39.37,
  kilometers: Ne / 1e3,
  kilometres: Ne / 1e3,
  meters: Ne,
  metres: Ne,
  miles: Ne / 1609.344,
  millimeters: Ne * 1e3,
  millimetres: Ne * 1e3,
  nauticalmiles: Ne / 1852,
  radians: 1,
  yards: Ne * 1.0936
};
function es(n, t, e) {
  e === void 0 && (e = {});
  var r = { type: "Feature" };
  return (e.id === 0 || e.id) && (r.id = e.id), e.bbox && (r.bbox = e.bbox), r.properties = t || {}, r.geometry = n, r;
}
function mf(n, t, e) {
  if (e === void 0 && (e = {}), !n)
    throw new Error("coordinates is required");
  if (!Array.isArray(n))
    throw new Error("coordinates must be an Array");
  if (n.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!qa(n[0]) || !qa(n[1]))
    throw new Error("coordinates must contain numbers");
  var r = {
    type: "Point",
    coordinates: n
  };
  return es(r, t, e);
}
function Su(n, t, e) {
  e === void 0 && (e = {});
  for (var r = 0, i = n; r < i.length; r++) {
    var o = i[r];
    if (o.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var s = 0; s < o[o.length - 1].length; s++)
      if (o[o.length - 1][s] !== o[0][s])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: n
  };
  return es(a, t, e);
}
function Bs(n, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = n, e;
}
function xu(n, t, e) {
  e === void 0 && (e = {});
  var r = {
    type: "MultiPolygon",
    coordinates: n
  };
  return es(r, t, e);
}
function yf(n, t) {
  var e = Nu[t];
  return n * e;
}
function _f(n, t) {
  t === void 0 && (t = "kilometers");
  var e = Nu[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return n / e;
}
function qa(n) {
  return !isNaN(n) && n !== null && !Array.isArray(n);
}
function Xo(n) {
  return n.type === "Feature" ? n.geometry : n;
}
function Ef(n, t, e) {
  e === void 0 && (e = {});
  var r = Xo(n), i = Xo(t), o = Iu.union(r.coordinates, i.coordinates);
  return o.length === 0 ? null : o.length === 1 ? Su(o[0], e.properties) : xu(o, e.properties);
}
function Lu(n, t, e) {
  if (n !== null)
    for (var r, i, o, s, a, u, l, c = 0, f = 0, h, g = n.type, p = g === "FeatureCollection", y = g === "Feature", d = p ? n.features.length : 1, v = 0; v < d; v++) {
      l = p ? n.features[v].geometry : y ? n.geometry : n, h = l ? l.type === "GeometryCollection" : !1, a = h ? l.geometries.length : 1;
      for (var C = 0; C < a; C++) {
        var I = 0, N = 0;
        if (s = h ? l.geometries[C] : l, s !== null) {
          u = s.coordinates;
          var L = s.type;
          switch (c = 0, L) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                f,
                v,
                I,
                N
              ) === !1)
                return !1;
              f++, I++;
              break;
            case "LineString":
            case "MultiPoint":
              for (r = 0; r < u.length; r++) {
                if (t(
                  u[r],
                  f,
                  v,
                  I,
                  N
                ) === !1)
                  return !1;
                f++, L === "MultiPoint" && I++;
              }
              L === "LineString" && I++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (r = 0; r < u.length; r++) {
                for (i = 0; i < u[r].length - c; i++) {
                  if (t(
                    u[r][i],
                    f,
                    v,
                    I,
                    N
                  ) === !1)
                    return !1;
                  f++;
                }
                L === "MultiLineString" && I++, L === "Polygon" && N++;
              }
              L === "Polygon" && I++;
              break;
            case "MultiPolygon":
              for (r = 0; r < u.length; r++) {
                for (N = 0, i = 0; i < u[r].length; i++) {
                  for (o = 0; o < u[r][i].length - c; o++) {
                    if (t(
                      u[r][i][o],
                      f,
                      v,
                      I,
                      N
                    ) === !1)
                      return !1;
                    f++;
                  }
                  N++;
                }
                I++;
              }
              break;
            case "GeometryCollection":
              for (r = 0; r < s.geometries.length; r++)
                if (Lu(s.geometries[r], t) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Xa(n, t) {
  if (n.type === "Feature")
    t(n, 0);
  else if (n.type === "FeatureCollection")
    for (var e = 0; e < n.features.length && t(n.features[e], e) !== !1; e++)
      ;
}
function bu(n, t) {
  var e, r, i, o, s, a, u, l, c, f, h = 0, g = n.type === "FeatureCollection", p = n.type === "Feature", y = g ? n.features.length : 1;
  for (e = 0; e < y; e++) {
    for (a = g ? n.features[e].geometry : p ? n.geometry : n, l = g ? n.features[e].properties : p ? n.properties : {}, c = g ? n.features[e].bbox : p ? n.bbox : void 0, f = g ? n.features[e].id : p ? n.id : void 0, u = a ? a.type === "GeometryCollection" : !1, s = u ? a.geometries.length : 1, i = 0; i < s; i++) {
      if (o = u ? a.geometries[i] : a, o === null) {
        if (t(
          null,
          h,
          l,
          c,
          f
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
          if (t(
            o,
            h,
            l,
            c,
            f
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (r = 0; r < o.geometries.length; r++)
            if (t(
              o.geometries[r],
              h,
              l,
              c,
              f
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    h++;
  }
}
function Gs(n) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Lu(n, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
Gs.default = Gs;
function Cf(n, t) {
  t === void 0 && (t = {});
  var e = Gs(n), r = (e[0] + e[2]) / 2, i = (e[1] + e[3]) / 2;
  return mf([r, i], t.properties, t);
}
"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
  configurable: !0,
  value: function(t) {
    if (this === void 0 || this === null)
      throw new TypeError(this + " is not an object");
    var e = Object(this), r = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, i = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
    i = i < 0 ? Math.max(r + i, 0) : Math.min(i, r);
    var o = 2 in arguments && arguments[2] !== void 0 ? parseInt(Number(arguments[2]), 10) || 0 : r;
    for (o = o < 0 ? Math.max(r + arguments[2], 0) : Math.min(o, r); i < o; )
      e[i] = t, ++i;
    return e;
  },
  writable: !0
});
Number.isFinite = Number.isFinite || function(n) {
  return typeof n == "number" && isFinite(n);
};
Number.isInteger = Number.isInteger || function(n) {
  return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
};
Number.parseFloat = Number.parseFloat || parseFloat;
Number.isNaN = Number.isNaN || function(n) {
  return n !== n;
};
Math.trunc = Math.trunc || function(n) {
  return n < 0 ? Math.ceil(n) : Math.floor(n);
};
var Qn = function() {
};
Qn.prototype.interfaces_ = function() {
  return [];
};
Qn.prototype.getClass = function() {
  return Qn;
};
Qn.prototype.equalsWithTolerance = function(t, e, r) {
  return Math.abs(t - e) <= r;
};
var gt = function(n) {
  function t(e) {
    n.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new n().stack;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(Error), U = function() {
}, wu = { MAX_VALUE: { configurable: !0 } };
U.isNaN = function(t) {
  return Number.isNaN(t);
};
U.doubleToLongBits = function(t) {
  return t;
};
U.longBitsToDouble = function(t) {
  return t;
};
U.isInfinite = function(t) {
  return !Number.isFinite(t);
};
wu.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(U, wu);
var ze = function() {
}, rs = function() {
}, Ei = function() {
};
function Ve() {
}
var m = function n() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = n.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = n.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, li = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
m.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case m.X:
      this.x = e;
      break;
    case m.Y:
      this.y = e;
      break;
    case m.Z:
      this.z = e;
      break;
    default:
      throw new gt("Invalid ordinate index: " + t);
  }
};
m.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return !(!Qn.equalsWithTolerance(this.x, e.x, r) || !Qn.equalsWithTolerance(this.y, e.y, r));
  }
};
m.prototype.getOrdinate = function(t) {
  switch (t) {
    case m.X:
      return this.x;
    case m.Y:
      return this.y;
    case m.Z:
      return this.z;
  }
  throw new gt("Invalid ordinate index: " + t);
};
m.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || U.isNaN(this.z)) && U.isNaN(t.z);
};
m.prototype.equals = function(t) {
  return t instanceof m ? this.equals2D(t) : !1;
};
m.prototype.equalInZ = function(t, e) {
  return Qn.equalsWithTolerance(this.z, t.z, e);
};
m.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
m.prototype.clone = function() {
};
m.prototype.copy = function() {
  return new m(this);
};
m.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
m.prototype.distance3D = function(t) {
  var e = this.x - t.x, r = this.y - t.y, i = this.z - t.z;
  return Math.sqrt(e * e + r * r + i * i);
};
m.prototype.distance = function(t) {
  var e = this.x - t.x, r = this.y - t.y;
  return Math.sqrt(e * e + r * r);
};
m.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + m.hashCode(this.x), t = 37 * t + m.hashCode(this.y), t;
};
m.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
m.prototype.interfaces_ = function() {
  return [ze, rs, Ve];
};
m.prototype.getClass = function() {
  return m;
};
m.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = U.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
li.DimensionalComparator.get = function() {
  return an;
};
li.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
li.NULL_ORDINATE.get = function() {
  return U.NaN;
};
li.X.get = function() {
  return 0;
};
li.Y.get = function() {
  return 1;
};
li.Z.get = function() {
  return 2;
};
Object.defineProperties(m, li);
var an = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new gt("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
an.prototype.compare = function(t, e) {
  var r = t, i = e, o = an.compare(r.x, i.x);
  if (o !== 0)
    return o;
  var s = an.compare(r.y, i.y);
  if (s !== 0)
    return s;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = an.compare(r.z, i.z);
  return a;
};
an.prototype.interfaces_ = function() {
  return [Ei];
};
an.prototype.getClass = function() {
  return an;
};
an.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : U.isNaN(t) ? U.isNaN(e) ? 0 : -1 : U.isNaN(e) ? 1 : 0;
};
var Ci = function() {
};
Ci.prototype.create = function() {
};
Ci.prototype.interfaces_ = function() {
  return [];
};
Ci.prototype.getClass = function() {
  return Ci;
};
var _ = function() {
}, yo = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
_.prototype.interfaces_ = function() {
  return [];
};
_.prototype.getClass = function() {
  return _;
};
_.toLocationSymbol = function(t) {
  switch (t) {
    case _.EXTERIOR:
      return "e";
    case _.BOUNDARY:
      return "b";
    case _.INTERIOR:
      return "i";
    case _.NONE:
      return "-";
  }
  throw new gt("Unknown location value: " + t);
};
yo.INTERIOR.get = function() {
  return 0;
};
yo.BOUNDARY.get = function() {
  return 1;
};
yo.EXTERIOR.get = function() {
  return 2;
};
yo.NONE.get = function() {
  return -1;
};
Object.defineProperties(_, yo);
var V = function(n, t) {
  return n.interfaces_ && n.interfaces_().indexOf(t) > -1;
}, we = function() {
}, Pu = { LOG_10: { configurable: !0 } };
we.prototype.interfaces_ = function() {
  return [];
};
we.prototype.getClass = function() {
  return we;
};
we.log10 = function(t) {
  var e = Math.log(t);
  return U.isInfinite(e) || U.isNaN(e) ? e : e / we.LOG_10;
};
we.min = function(t, e, r, i) {
  var o = t;
  return e < o && (o = e), r < o && (o = r), i < o && (o = i), o;
};
we.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], r = arguments[2];
    return t < e ? e : t > r ? r : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    return i < o ? o : i > s ? s : i;
  }
};
we.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
we.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], r = arguments[2], i = t;
    return e > i && (i = e), r > i && (i = r), i;
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = o;
    return s > l && (l = s), a > l && (l = a), u > l && (l = u), l;
  }
};
we.average = function(t, e) {
  return (t + e) / 2;
};
Pu.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(we, Pu);
var Sr = function(t) {
  this.str = t;
};
Sr.prototype.append = function(t) {
  this.str += t;
};
Sr.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
Sr.prototype.toString = function(t) {
  return this.str;
};
var gr = function(t) {
  this.value = t;
};
gr.prototype.intValue = function() {
  return this.value;
};
gr.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
gr.isNaN = function(t) {
  return Number.isNaN(t);
};
var no = function() {
};
no.isWhitespace = function(t) {
  return t <= 32 && t >= 0 || t === 127;
};
no.toUpperCase = function(t) {
  return t.toUpperCase();
};
var E = function n() {
  if (this._hi = 0, this._lo = 0, arguments.length === 0)
    this.init(0);
  else if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this.init(t);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.init(e);
    } else if (typeof arguments[0] == "string") {
      var r = arguments[0];
      n.call(this, n.parse(r));
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    this.init(i, o);
  }
}, er = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
E.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
E.prototype.extractSignificantDigits = function(t, e) {
  var r = this.abs(), i = E.magnitude(r._hi), o = E.TEN.pow(i);
  r = r.divide(o), r.gt(E.TEN) ? (r = r.divide(E.TEN), i += 1) : r.lt(E.ONE) && (r = r.multiply(E.TEN), i -= 1);
  for (var s = i + 1, a = new Sr(), u = E.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === s && a.append(".");
    var c = Math.trunc(r._hi);
    if (c < 0)
      break;
    var f = !1, h = 0;
    c > 9 ? (f = !0, h = "9") : h = "0" + c, a.append(h), r = r.subtract(E.valueOf(c)).multiply(E.TEN), f && r.selfAdd(E.TEN);
    var g = !0, p = E.magnitude(r._hi);
    if (p < 0 && Math.abs(p) >= u - l && (g = !1), !g)
      break;
  }
  return e[0] = i, a.toString();
};
E.prototype.sqr = function() {
  return this.multiply(this);
};
E.prototype.doubleValue = function() {
  return this._hi + this._lo;
};
E.prototype.subtract = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.add(t.negate());
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.add(-e);
  }
};
E.prototype.equals = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._hi === t._hi && this._lo === t._lo;
  }
};
E.prototype.isZero = function() {
  return this._hi === 0 && this._lo === 0;
};
E.prototype.selfSubtract = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-e, 0);
  }
};
E.prototype.getSpecialNumberString = function() {
  return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
};
E.prototype.min = function(t) {
  return this.le(t) ? this : t;
};
E.prototype.selfDivide = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfDivide(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfDivide(e, 0);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null, f = null, h = null;
    return l = this._hi / r, c = E.SPLIT * l, o = c - l, h = E.SPLIT * r, o = c - o, s = l - o, a = h - r, f = l * r, a = h - a, u = r - a, h = o * a - f + o * u + s * a + s * u, c = (this._hi - f - h + this._lo - l * i) / r, h = l + c, this._hi = h, this._lo = l - h + c, this;
  }
};
E.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
E.prototype.divide = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0], e = null, r = null, i = null, o = null, s = null, a = null, u = null, l = null;
    s = this._hi / t._hi, a = E.SPLIT * s, e = a - s, l = E.SPLIT * t._hi, e = a - e, r = s - e, i = l - t._hi, u = s * t._hi, i = l - i, o = t._hi - i, l = e * i - u + e * o + r * i + r * o, a = (this._hi - u - l + this._lo - s * t._lo) / t._hi, l = s + a;
    var c = l, f = s - l + a;
    return new E(c, f);
  } else if (typeof arguments[0] == "number") {
    var h = arguments[0];
    return U.isNaN(h) ? E.createNaN() : E.copy(this).selfDivide(h, 0);
  }
};
E.prototype.ge = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo;
};
E.prototype.pow = function(t) {
  if (t === 0)
    return E.valueOf(1);
  var e = new E(this), r = E.valueOf(1), i = Math.abs(t);
  if (i > 1)
    for (; i > 0; )
      i % 2 === 1 && r.selfMultiply(e), i /= 2, i > 0 && (e = e.sqr());
  else
    r = e;
  return t < 0 ? r.reciprocal() : r;
};
E.prototype.ceil = function() {
  if (this.isNaN())
    return E.NaN;
  var t = Math.ceil(this._hi), e = 0;
  return t === this._hi && (e = Math.ceil(this._lo)), new E(t, e);
};
E.prototype.compareTo = function(t) {
  var e = t;
  return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
};
E.prototype.rint = function() {
  if (this.isNaN())
    return this;
  var t = this.add(0.5);
  return t.floor();
};
E.prototype.setValue = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.init(t), this;
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.init(e), this;
  }
};
E.prototype.max = function(t) {
  return this.ge(t) ? this : t;
};
E.prototype.sqrt = function() {
  if (this.isZero())
    return E.valueOf(0);
  if (this.isNegative())
    return E.NaN;
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, r = E.valueOf(e), i = this.subtract(r.sqr()), o = i._hi * (t * 0.5);
  return r.add(o);
};
E.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], r = null, i = null, o = null, s = null, a = null, u = null;
      return o = this._hi + e, a = o - this._hi, s = o - a, s = e - a + (this._hi - s), u = s + this._lo, r = o + u, i = u + (o - r), this._hi = r + i, this._lo = i + (r - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], f = null, h = null, g = null, p = null, y = null, d = null, v = null, C = null;
    y = this._hi + l, g = this._lo + c, v = y - this._hi, C = g - this._lo, d = y - v, p = g - C, d = l - v + (this._hi - d), p = c - C + (this._lo - p), v = d + g, f = y + v, h = v + (y - f), v = p + h;
    var I = f + v, N = v + (f - I);
    return this._hi = I, this._lo = N, this;
  }
};
E.prototype.selfMultiply = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfMultiply(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfMultiply(e, 0);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null;
    l = E.SPLIT * this._hi, o = l - this._hi, c = E.SPLIT * r, o = l - o, s = this._hi - o, a = c - r, l = this._hi * r, a = c - a, u = r - a, c = o * a - l + o * u + s * a + s * u + (this._hi * i + this._lo * r);
    var f = l + c;
    o = l - f;
    var h = c + o;
    return this._hi = f, this._lo = h, this;
  }
};
E.prototype.selfSqr = function() {
  return this.selfMultiply(this);
};
E.prototype.floor = function() {
  if (this.isNaN())
    return E.NaN;
  var t = Math.floor(this._hi), e = 0;
  return t === this._hi && (e = Math.floor(this._lo)), new E(t, e);
};
E.prototype.negate = function() {
  return this.isNaN() ? this : new E(-this._hi, -this._lo);
};
E.prototype.clone = function() {
};
E.prototype.multiply = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return t.isNaN() ? E.createNaN() : E.copy(this).selfMultiply(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return U.isNaN(e) ? E.createNaN() : E.copy(this).selfMultiply(e, 0);
  }
};
E.prototype.isNaN = function() {
  return U.isNaN(this._hi);
};
E.prototype.intValue = function() {
  return Math.trunc(this._hi);
};
E.prototype.toString = function() {
  var t = E.magnitude(this._hi);
  return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
};
E.prototype.toStandardNotation = function() {
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), r = this.extractSignificantDigits(!0, e), i = e[0] + 1, o = r;
  if (r.charAt(0) === ".")
    o = "0" + r;
  else if (i < 0)
    o = "0." + E.stringOfChar("0", -i) + r;
  else if (r.indexOf(".") === -1) {
    var s = i - r.length, a = E.stringOfChar("0", s);
    o = r + a + ".0";
  }
  return this.isNegative() ? "-" + o : o;
};
E.prototype.reciprocal = function() {
  var t = null, e = null, r = null, i = null, o = null, s = null, a = null, u = null;
  o = 1 / this._hi, s = E.SPLIT * o, t = s - o, u = E.SPLIT * this._hi, t = s - t, e = o - t, r = u - this._hi, a = o * this._hi, r = u - r, i = this._hi - r, u = t * r - a + t * i + e * r + e * i, s = (1 - a - u - o * this._lo) / this._hi;
  var l = o + s, c = o - l + s;
  return new E(l, c);
};
E.prototype.toSciNotation = function() {
  if (this.isZero())
    return E.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), r = this.extractSignificantDigits(!1, e), i = E.SCI_NOT_EXPONENT_CHAR + e[0];
  if (r.charAt(0) === "0")
    throw new Error("Found leading zero: " + r);
  var o = "";
  r.length > 1 && (o = r.substring(1));
  var s = r.charAt(0) + "." + o;
  return this.isNegative() ? "-" + s + i : s + i;
};
E.prototype.abs = function() {
  return this.isNaN() ? E.NaN : this.isNegative() ? this.negate() : new E(this);
};
E.prototype.isPositive = function() {
  return (this._hi > 0 || this._hi === 0) && this._lo > 0;
};
E.prototype.lt = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo;
};
E.prototype.add = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return E.copy(this).selfAdd(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return E.copy(this).selfAdd(e);
  }
};
E.prototype.init = function() {
  if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this._hi = t, this._lo = 0;
    } else if (arguments[0] instanceof E) {
      var e = arguments[0];
      this._hi = e._hi, this._lo = e._lo;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this._hi = r, this._lo = i;
  }
};
E.prototype.gt = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo;
};
E.prototype.isNegative = function() {
  return (this._hi < 0 || this._hi === 0) && this._lo < 0;
};
E.prototype.trunc = function() {
  return this.isNaN() ? E.NaN : this.isPositive() ? this.floor() : this.ceil();
};
E.prototype.signum = function() {
  return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
};
E.prototype.interfaces_ = function() {
  return [Ve, ze, rs];
};
E.prototype.getClass = function() {
  return E;
};
E.sqr = function(t) {
  return E.valueOf(t).selfMultiply(t);
};
E.valueOf = function() {
  if (typeof arguments[0] == "string") {
    var t = arguments[0];
    return E.parse(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return new E(e);
  }
};
E.sqrt = function(t) {
  return E.valueOf(t).sqrt();
};
E.parse = function(t) {
  for (var e = 0, r = t.length; no.isWhitespace(t.charAt(e)); )
    e++;
  var i = !1;
  if (e < r) {
    var o = t.charAt(e);
    (o === "-" || o === "+") && (e++, o === "-" && (i = !0));
  }
  for (var s = new E(), a = 0, u = 0, l = 0; !(e >= r); ) {
    var c = t.charAt(e);
    if (e++, no.isDigit(c)) {
      var f = c - "0";
      s.selfMultiply(E.TEN), s.selfAdd(f), a++;
      continue;
    }
    if (c === ".") {
      u = a;
      continue;
    }
    if (c === "e" || c === "E") {
      var h = t.substring(e);
      try {
        l = gr.parseInt(h);
      } catch (v) {
        throw v instanceof Error ? new Error("Invalid exponent " + h + " in string " + t) : v;
      } finally {
      }
      break;
    }
    throw new Error("Unexpected character '" + c + "' at position " + e + " in string " + t);
  }
  var g = s, p = a - u - l;
  if (p === 0)
    g = s;
  else if (p > 0) {
    var y = E.TEN.pow(p);
    g = s.divide(y);
  } else if (p < 0) {
    var d = E.TEN.pow(-p);
    g = s.multiply(d);
  }
  return i ? g.negate() : g;
};
E.createNaN = function() {
  return new E(U.NaN, U.NaN);
};
E.copy = function(t) {
  return new E(t);
};
E.magnitude = function(t) {
  var e = Math.abs(t), r = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(r)), o = Math.pow(10, i);
  return o * 10 <= e && (i += 1), i;
};
E.stringOfChar = function(t, e) {
  for (var r = new Sr(), i = 0; i < e; i++)
    r.append(t);
  return r.toString();
};
er.PI.get = function() {
  return new E(3.141592653589793, 12246467991473532e-32);
};
er.TWO_PI.get = function() {
  return new E(6.283185307179586, 24492935982947064e-32);
};
er.PI_2.get = function() {
  return new E(1.5707963267948966, 6123233995736766e-32);
};
er.E.get = function() {
  return new E(2.718281828459045, 14456468917292502e-32);
};
er.NaN.get = function() {
  return new E(U.NaN, U.NaN);
};
er.EPS.get = function() {
  return 123259516440783e-46;
};
er.SPLIT.get = function() {
  return 134217729;
};
er.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
er.TEN.get = function() {
  return E.valueOf(10);
};
er.ONE.get = function() {
  return E.valueOf(1);
};
er.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
er.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(E, er);
var he = function() {
}, Ru = { DP_SAFE_EPSILON: { configurable: !0 } };
he.prototype.interfaces_ = function() {
  return [];
};
he.prototype.getClass = function() {
  return he;
};
he.orientationIndex = function(t, e, r) {
  var i = he.orientationIndexFilter(t, e, r);
  if (i <= 1)
    return i;
  var o = E.valueOf(e.x).selfAdd(-t.x), s = E.valueOf(e.y).selfAdd(-t.y), a = E.valueOf(r.x).selfAdd(-e.x), u = E.valueOf(r.y).selfAdd(-e.y);
  return o.selfMultiply(u).selfSubtract(s.selfMultiply(a)).signum();
};
he.signOfDet2x2 = function(t, e, r, i) {
  var o = t.multiply(i).selfSubtract(e.multiply(r));
  return o.signum();
};
he.intersection = function(t, e, r, i) {
  var o = E.valueOf(i.y).selfSubtract(r.y).selfMultiply(E.valueOf(e.x).selfSubtract(t.x)), s = E.valueOf(i.x).selfSubtract(r.x).selfMultiply(E.valueOf(e.y).selfSubtract(t.y)), a = o.subtract(s), u = E.valueOf(i.x).selfSubtract(r.x).selfMultiply(E.valueOf(t.y).selfSubtract(r.y)), l = E.valueOf(i.y).selfSubtract(r.y).selfMultiply(E.valueOf(t.x).selfSubtract(r.x)), c = u.subtract(l), f = c.selfDivide(a).doubleValue(), h = E.valueOf(t.x).selfAdd(E.valueOf(e.x).selfSubtract(t.x).selfMultiply(f)).doubleValue(), g = E.valueOf(e.x).selfSubtract(t.x).selfMultiply(E.valueOf(t.y).selfSubtract(r.y)), p = E.valueOf(e.y).selfSubtract(t.y).selfMultiply(E.valueOf(t.x).selfSubtract(r.x)), y = g.subtract(p), d = y.selfDivide(a).doubleValue(), v = E.valueOf(r.y).selfAdd(E.valueOf(i.y).selfSubtract(r.y).selfMultiply(d)).doubleValue();
  return new m(h, v);
};
he.orientationIndexFilter = function(t, e, r) {
  var i = null, o = (t.x - r.x) * (e.y - r.y), s = (t.y - r.y) * (e.x - r.x), a = o - s;
  if (o > 0) {
    if (s <= 0)
      return he.signum(a);
    i = o + s;
  } else if (o < 0) {
    if (s >= 0)
      return he.signum(a);
    i = -o - s;
  } else
    return he.signum(a);
  var u = he.DP_SAFE_EPSILON * i;
  return a >= u || -a >= u ? he.signum(a) : 2;
};
he.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
Ru.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(he, Ru);
var Q = function() {
}, _o = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
_o.X.get = function() {
  return 0;
};
_o.Y.get = function() {
  return 1;
};
_o.Z.get = function() {
  return 2;
};
_o.M.get = function() {
  return 3;
};
Q.prototype.setOrdinate = function(t, e, r) {
};
Q.prototype.size = function() {
};
Q.prototype.getOrdinate = function(t, e) {
};
Q.prototype.getCoordinate = function() {
};
Q.prototype.getCoordinateCopy = function(t) {
};
Q.prototype.getDimension = function() {
};
Q.prototype.getX = function(t) {
};
Q.prototype.clone = function() {
};
Q.prototype.expandEnvelope = function(t) {
};
Q.prototype.copy = function() {
};
Q.prototype.getY = function(t) {
};
Q.prototype.toCoordinateArray = function() {
};
Q.prototype.interfaces_ = function() {
  return [rs];
};
Q.prototype.getClass = function() {
  return Q;
};
Object.defineProperties(Q, _o);
var Ou = function() {
}, Vi = function(n) {
  function t() {
    n.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ou), Wt = function() {
};
Wt.arraycopy = function(t, e, r, i, o) {
  for (var s = 0, a = e; a < e + o; a++)
    r[i + s] = t[a], s++;
};
Wt.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var We = function n() {
  if (this.x = null, this.y = null, this.w = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.w = 1;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.w = 1;
  } else if (arguments.length === 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      var e = arguments[0], r = arguments[1];
      this.x = e, this.y = r, this.w = 1;
    } else if (arguments[0] instanceof n && arguments[1] instanceof n) {
      var i = arguments[0], o = arguments[1];
      this.x = i.y * o.w - o.y * i.w, this.y = o.x * i.w - i.x * o.w, this.w = i.x * o.y - o.x * i.y;
    } else if (arguments[0] instanceof m && arguments[1] instanceof m) {
      var s = arguments[0], a = arguments[1];
      this.x = s.y - a.y, this.y = a.x - s.x, this.w = s.x * a.y - a.x * s.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var f = arguments[0], h = arguments[1], g = arguments[2], p = arguments[3], y = f.y - h.y, d = h.x - f.x, v = f.x * h.y - h.x * f.y, C = g.y - p.y, I = p.x - g.x, N = g.x * p.y - p.x * g.y;
    this.x = d * N - I * v, this.y = C * v - y * N, this.w = y * I - C * d;
  }
};
We.prototype.getY = function() {
  var t = this.y / this.w;
  if (U.isNaN(t) || U.isInfinite(t))
    throw new Vi();
  return t;
};
We.prototype.getX = function() {
  var t = this.x / this.w;
  if (U.isNaN(t) || U.isInfinite(t))
    throw new Vi();
  return t;
};
We.prototype.getCoordinate = function() {
  var t = new m();
  return t.x = this.getX(), t.y = this.getY(), t;
};
We.prototype.interfaces_ = function() {
  return [];
};
We.prototype.getClass = function() {
  return We;
};
We.intersection = function(t, e, r, i) {
  var o = t.y - e.y, s = e.x - t.x, a = t.x * e.y - e.x * t.y, u = r.y - i.y, l = i.x - r.x, c = r.x * i.y - i.x * r.y, f = s * c - l * a, h = u * a - o * c, g = o * l - u * s, p = f / g, y = h / g;
  if (U.isNaN(p) || U.isInfinite(p) || U.isNaN(y) || U.isInfinite(y))
    throw new Vi();
  return new m(p, y);
};
var F = function n() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof m) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.init(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.init(r.x, i.x, r.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    this.init(o, s, a, u);
  }
}, Tu = { serialVersionUID: { configurable: !0 } };
F.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
F.prototype.equals = function(t) {
  if (!(t instanceof F))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
F.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new F();
  var e = this._minx > t._minx ? this._minx : t._minx, r = this._miny > t._miny ? this._miny : t._miny, i = this._maxx < t._maxx ? this._maxx : t._maxx, o = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new F(e, i, r, o);
};
F.prototype.isNull = function() {
  return this._maxx < this._minx;
};
F.prototype.getMaxX = function() {
  return this._maxx;
};
F.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof m) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof F) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : r >= this._minx && r <= this._maxx && i >= this._miny && i <= this._maxy;
  }
};
F.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof F) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof m) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : !(r > this._maxx || r < this._minx || i > this._maxy || i < this._miny);
  }
};
F.prototype.getMinY = function() {
  return this._miny;
};
F.prototype.getMinX = function() {
  return this._minx;
};
F.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof m) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof F) {
      var e = arguments[0];
      if (e.isNull())
        return null;
      this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.isNull() ? (this._minx = r, this._maxx = r, this._miny = i, this._maxy = i) : (r < this._minx && (this._minx = r), r > this._maxx && (this._maxx = r), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
  }
};
F.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
F.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
F.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
F.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
F.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
F.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
F.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
F.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
F.prototype.expandBy = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.expandBy(t, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this.isNull())
      return null;
    this._minx -= e, this._maxx += e, this._miny -= r, this._maxy += r, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
  }
};
F.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof F) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof m) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.covers(r, i);
  }
};
F.prototype.centre = function() {
  return this.isNull() ? null : new m((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
F.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof m) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof F) {
      var e = arguments[0];
      this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.init(r.x, i.x, r.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    o < s ? (this._minx = o, this._maxx = s) : (this._minx = s, this._maxx = o), a < u ? (this._miny = a, this._maxy = u) : (this._miny = u, this._maxy = a);
  }
};
F.prototype.getMaxY = function() {
  return this._maxy;
};
F.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var r = 0;
  return this._maxy < t._miny ? r = t._miny - this._maxy : this._miny > t._maxy && (r = this._miny - t._maxy), e === 0 ? r : r === 0 ? e : Math.sqrt(e * e + r * r);
};
F.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + m.hashCode(this._minx), t = 37 * t + m.hashCode(this._maxx), t = 37 * t + m.hashCode(this._miny), t = 37 * t + m.hashCode(this._maxy), t;
};
F.prototype.interfaces_ = function() {
  return [ze, Ve];
};
F.prototype.getClass = function() {
  return F;
};
F.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], r = arguments[2];
    return r.x >= (t.x < e.x ? t.x : e.x) && r.x <= (t.x > e.x ? t.x : e.x) && r.y >= (t.y < e.y ? t.y : e.y) && r.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = Math.min(s.x, a.x), l = Math.max(s.x, a.x), c = Math.min(i.x, o.x), f = Math.max(i.x, o.x);
    return !(c > l || f < u || (u = Math.min(s.y, a.y), l = Math.max(s.y, a.y), c = Math.min(i.y, o.y), f = Math.max(i.y, o.y), c > l) || f < u);
  }
};
Tu.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(F, Tu);
var sr = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, ns = function(t) {
  this.geometryFactory = t || new W();
};
ns.prototype.read = function(t) {
  var e, r, i;
  t = t.replace(/[\n\r]/g, " ");
  var o = sr.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (o = sr.emptyTypeStr.exec(t), o[2] = void 0), o && (r = o[1].toLowerCase(), i = o[2], yi[r] && (e = yi[r].apply(this, [i]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
ns.prototype.write = function(t) {
  return this.extractGeometry(t);
};
ns.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!Yr[e])
    return null;
  var r = e.toUpperCase(), i;
  return t.isEmpty() ? i = r + " EMPTY" : i = r + "(" + Yr[e].apply(this, [t]) + ")", i;
};
var Yr = {
  coordinate: function(t) {
    return t.x + " " + t.y;
  },
  /**
   * Return a space delimited string of point coordinates.
   *
   * @param {Point}
   *          point
   * @return {String} A string of coordinates representing the point.
   */
  point: function(t) {
    return Yr.coordinate.call(this, t._coordinates._coordinates[0]);
  },
  /**
   * Return a comma delimited string of point coordinates from a multipoint.
   *
   * @param {MultiPoint}
   *          multipoint
   * @return {String} A string of point coordinate strings representing the
   *         multipoint.
   */
  multipoint: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + Yr.point.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return a comma delimited string of point coordinates from a line.
   *
   * @param {LineString} linestring
   * @return {String} A string of point coordinate strings representing the linestring.
   */
  linestring: function(t) {
    for (var e = this, r = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      r.push(Yr.coordinate.apply(e, [t._points._coordinates[i]]));
    return r.join(",");
  },
  linearring: function(t) {
    for (var e = this, r = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      r.push(Yr.coordinate.apply(e, [t._points._coordinates[i]]));
    return r.join(",");
  },
  /**
   * Return a comma delimited string of linestring strings from a
   * multilinestring.
   *
   * @param {MultiLineString} multilinestring
   * @return {String} A string of of linestring strings representing the multilinestring.
   */
  multilinestring: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + Yr.linestring.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return a comma delimited string of linear ring arrays from a polygon.
   *
   * @param {Polygon} polygon
   * @return {String} An array of linear ring arrays representing the polygon.
   */
  polygon: function(t) {
    var e = this, r = [];
    r.push("(" + Yr.linestring.apply(this, [t._shell]) + ")");
    for (var i = 0, o = t._holes.length; i < o; ++i)
      r.push("(" + Yr.linestring.apply(e, [t._holes[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return an array of polygon arrays from a multipolygon.
   *
   * @param {MultiPolygon} multipolygon
   * @return {String} An array of polygon arrays representing the multipolygon.
   */
  multipolygon: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + Yr.polygon.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an
   * geometrycollection.
   *
   * @param {GeometryCollection} collection
   * @return {String} internal WKT representation of the collection.
   */
  geometrycollection: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push(e.extractGeometry(t._geometries[i]));
    return r.join(",");
  }
}, yi = {
  /**
   * Return point geometry given a point WKT fragment.
   *
   * @param {String} str A WKT fragment representing the point.
   * @return {Point} A point geometry.
   * @private
   */
  point: function(t) {
    if (t === void 0)
      return this.geometryFactory.createPoint();
    var e = t.trim().split(sr.spaces);
    return this.geometryFactory.createPoint(new m(
      Number.parseFloat(e[0]),
      Number.parseFloat(e[1])
    ));
  },
  /**
   * Return a multipoint geometry given a multipoint WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipoint.
   * @return {Point} A multipoint feature.
   * @private
   */
  multipoint: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPoint();
    for (var r, i = t.trim().split(","), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(sr.trimParens, "$1"), o.push(yi.point.apply(e, [r]));
    return this.geometryFactory.createMultiPoint(o);
  },
  /**
   * Return a linestring geometry given a linestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linestring.
   * @return {LineString} A linestring geometry.
   * @private
   */
  linestring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLineString();
    for (var e = t.trim().split(","), r = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(sr.spaces), r.push(new m(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLineString(r);
  },
  /**
   * Return a linearring geometry given a linearring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linearring.
   * @return {LinearRing} A linearring geometry.
   * @private
   */
  linearring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLinearRing();
    for (var e = t.trim().split(","), r = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(sr.spaces), r.push(new m(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLinearRing(r);
  },
  /**
   * Return a multilinestring geometry given a multilinestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multilinestring.
   * @return {MultiLineString} A multilinestring geometry.
   * @private
   */
  multilinestring: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiLineString();
    for (var r, i = t.trim().split(sr.parenComma), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(sr.trimParens, "$1"), o.push(yi.linestring.apply(e, [r]));
    return this.geometryFactory.createMultiLineString(o);
  },
  /**
   * Return a polygon geometry given a polygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the polygon.
   * @return {Polygon} A polygon geometry.
   * @private
   */
  polygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createPolygon();
    for (var r, i, o, s = t.trim().split(sr.parenComma), a, u = [], l = 0, c = s.length; l < c; ++l)
      r = s[l].replace(sr.trimParens, "$1"), i = yi.linestring.apply(e, [r]), o = e.geometryFactory.createLinearRing(i._points), l === 0 ? a = o : u.push(o);
    return this.geometryFactory.createPolygon(a, u);
  },
  /**
   * Return a multipolygon geometry given a multipolygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipolygon.
   * @return {MultiPolygon} A multipolygon geometry.
   * @private
   */
  multipolygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPolygon();
    for (var r, i = t.trim().split(sr.doubleParenComma), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(sr.trimParens, "$1"), o.push(yi.polygon.apply(e, [r]));
    return this.geometryFactory.createMultiPolygon(o);
  },
  /**
   * Return a geometrycollection given a geometrycollection WKT fragment.
   *
   * @param {String} str A WKT fragment representing the geometrycollection.
   * @return {GeometryCollection}
   * @private
   */
  geometrycollection: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createGeometryCollection();
    t = t.replace(/,\s*([A-Za-z])/g, "|$1");
    for (var r = t.trim().split("|"), i = [], o = 0, s = r.length; o < s; ++o)
      i.push(e.read(r[o]));
    return this.geometryFactory.createGeometryCollection(i);
  }
}, je = function(t) {
  this.parser = new ns(t);
};
je.prototype.write = function(t) {
  return this.parser.write(t);
};
je.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var Zr = function(n) {
  function t(e) {
    n.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new n().stack;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(Error), Yo = function(n) {
  function t() {
    if (n.call(this), arguments.length === 0)
      n.call(this);
    else if (arguments.length === 1) {
      var e = arguments[0];
      n.call(this, e);
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Zr), X = function() {
};
X.prototype.interfaces_ = function() {
  return [];
};
X.prototype.getClass = function() {
  return X;
};
X.shouldNeverReachHere = function() {
  if (arguments.length === 0)
    X.shouldNeverReachHere(null);
  else if (arguments.length === 1) {
    var t = arguments[0];
    throw new Yo("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
X.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], X.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new Yo() : new Yo(e);
};
X.equals = function() {
  var t, e, r;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], X.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], r = arguments[2], !e.equals(t)))
    throw new Yo("Expected " + t + " but encountered " + e + (r !== null ? ": " + r : ""));
};
var pt = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new m(), this._intPt[1] = new m(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, ci = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
pt.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
pt.prototype.getTopologySummary = function() {
  var t = new Sr();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
pt.prototype.computeIntersection = function(t, e, r, i) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = r, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, r, i);
};
pt.prototype.getIntersectionNum = function() {
  return this._result;
};
pt.prototype.computeIntLineIndex = function() {
  if (arguments.length === 0)
    this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
      return Array(2);
    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
  else if (arguments.length === 1) {
    var t = arguments[0], e = this.getEdgeDistance(t, 0), r = this.getEdgeDistance(t, 1);
    e > r ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
  }
};
pt.prototype.isProper = function() {
  return this.hasIntersection() && this._isProper;
};
pt.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
pt.prototype.isInteriorIntersection = function() {
  var t = this;
  if (arguments.length === 0)
    return !!(this.isInteriorIntersection(0) || this.isInteriorIntersection(1));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0; r < this._result; r++)
      if (!(t._intPt[r].equals2D(t._inputLines[e][0]) || t._intPt[r].equals2D(t._inputLines[e][1])))
        return !0;
    return !1;
  }
};
pt.prototype.getIntersection = function(t) {
  return this._intPt[t];
};
pt.prototype.isEndPoint = function() {
  return this.hasIntersection() && !this._isProper;
};
pt.prototype.hasIntersection = function() {
  return this._result !== pt.NO_INTERSECTION;
};
pt.prototype.getEdgeDistance = function(t, e) {
  var r = pt.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return r;
};
pt.prototype.isCollinear = function() {
  return this._result === pt.COLLINEAR_INTERSECTION;
};
pt.prototype.toString = function() {
  return je.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + je.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
pt.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
pt.prototype.isIntersection = function(t) {
  for (var e = this, r = 0; r < this._result; r++)
    if (e._intPt[r].equals2D(t))
      return !0;
  return !1;
};
pt.prototype.getIntersectionAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
};
pt.prototype.interfaces_ = function() {
  return [];
};
pt.prototype.getClass = function() {
  return pt;
};
pt.computeEdgeDistance = function(t, e, r) {
  var i = Math.abs(r.x - e.x), o = Math.abs(r.y - e.y), s = -1;
  if (t.equals(e))
    s = 0;
  else if (t.equals(r))
    i > o ? s = i : s = o;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    i > o ? s = a : s = u, s === 0 && !t.equals(e) && (s = Math.max(a, u));
  }
  return X.isTrue(!(s === 0 && !t.equals(e)), "Bad distance calculation"), s;
};
pt.nonRobustComputeEdgeDistance = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = Math.sqrt(i * i + o * o);
  return X.isTrue(!(s === 0 && !t.equals(e)), "Invalid distance calculation"), s;
};
ci.DONT_INTERSECT.get = function() {
  return 0;
};
ci.DO_INTERSECT.get = function() {
  return 1;
};
ci.COLLINEAR.get = function() {
  return 2;
};
ci.NO_INTERSECTION.get = function() {
  return 0;
};
ci.POINT_INTERSECTION.get = function() {
  return 1;
};
ci.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(pt, ci);
var Yn = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(r) {
    var i = new F(this._inputLines[0][0], this._inputLines[0][1]), o = new F(this._inputLines[1][0], this._inputLines[1][1]);
    return i.contains(r) && o.contains(r);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var r = arguments[0], i = arguments[1], o = arguments[2];
      if (this._isProper = !1, F.intersects(i, o, r) && M.orientationIndex(i, o, r) === 0 && M.orientationIndex(o, i, r) === 0)
        return this._isProper = !0, (r.equals(i) || r.equals(o)) && (this._isProper = !1), this._result = n.POINT_INTERSECTION, null;
      this._result = n.NO_INTERSECTION;
    } else
      return n.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(r, i, o, s, a) {
    a.x = this.smallestInAbsValue(r.x, i.x, o.x, s.x), a.y = this.smallestInAbsValue(r.y, i.y, o.y, s.y), r.x -= a.x, r.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(r, i, o, s) {
    var a = null;
    try {
      a = We.intersection(r, i, o, s);
    } catch (u) {
      if (u instanceof Vi)
        a = t.nearestEndpoint(r, i, o, s);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(r, i, o, s) {
    var a = this.intersectionWithNormalization(r, i, o, s);
    return this.isInSegmentEnvelopes(a) || (a = new m(t.nearestEndpoint(r, i, o, s))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(r, i, o, s) {
    var a = r, u = Math.abs(a);
    return Math.abs(i) < u && (a = i, u = Math.abs(i)), Math.abs(o) < u && (a = o, u = Math.abs(o)), Math.abs(s) < u && (a = s), a;
  }, t.prototype.checkDD = function(r, i, o, s, a) {
    var u = he.intersection(r, i, o, s), l = this.isInSegmentEnvelopes(u);
    Wt.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && Wt.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(r, i, o, s) {
    var a = new m(r), u = new m(i), l = new m(o), c = new m(s), f = new m();
    this.normalizeToEnvCentre(a, u, l, c, f);
    var h = this.safeHCoordinateIntersection(a, u, l, c);
    return h.x += f.x, h.y += f.y, h;
  }, t.prototype.computeCollinearIntersection = function(r, i, o, s) {
    var a = F.intersects(r, i, o), u = F.intersects(r, i, s), l = F.intersects(o, s, r), c = F.intersects(o, s, i);
    return a && u ? (this._intPt[0] = o, this._intPt[1] = s, n.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = r, this._intPt[1] = i, n.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = o, this._intPt[1] = r, o.equals(r) && !u && !c ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = o, this._intPt[1] = i, o.equals(i) && !u && !l ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = s, this._intPt[1] = r, s.equals(r) && !a && !c ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = s, this._intPt[1] = i, s.equals(i) && !a && !l ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : n.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(r, i, o, s, a) {
    var u = r.x < i.x ? r.x : i.x, l = r.y < i.y ? r.y : i.y, c = r.x > i.x ? r.x : i.x, f = r.y > i.y ? r.y : i.y, h = o.x < s.x ? o.x : s.x, g = o.y < s.y ? o.y : s.y, p = o.x > s.x ? o.x : s.x, y = o.y > s.y ? o.y : s.y, d = u > h ? u : h, v = c < p ? c : p, C = l > g ? l : g, I = f < y ? f : y, N = (d + v) / 2, L = (C + I) / 2;
    a.x = N, a.y = L, r.x -= a.x, r.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.computeIntersect = function(r, i, o, s) {
    if (this._isProper = !1, !F.intersects(r, i, o, s))
      return n.NO_INTERSECTION;
    var a = M.orientationIndex(r, i, o), u = M.orientationIndex(r, i, s);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return n.NO_INTERSECTION;
    var l = M.orientationIndex(o, s, r), c = M.orientationIndex(o, s, i);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return n.NO_INTERSECTION;
    var f = a === 0 && u === 0 && l === 0 && c === 0;
    return f ? this.computeCollinearIntersection(r, i, o, s) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, r.equals2D(o) || r.equals2D(s) ? this._intPt[0] = r : i.equals2D(o) || i.equals2D(s) ? this._intPt[0] = i : a === 0 ? this._intPt[0] = new m(o) : u === 0 ? this._intPt[0] = new m(s) : l === 0 ? this._intPt[0] = new m(r) : c === 0 && (this._intPt[0] = new m(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(r, i, o, s)), n.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(r, i, o, s) {
    var a = r, u = M.distancePointLine(r, o, s), l = M.distancePointLine(i, o, s);
    return l < u && (u = l, a = i), l = M.distancePointLine(o, r, i), l < u && (u = l, a = o), l = M.distancePointLine(s, r, i), l < u && (u = l, a = s), a;
  }, t;
}(pt), Zn = function() {
};
Zn.prototype.interfaces_ = function() {
  return [];
};
Zn.prototype.getClass = function() {
  return Zn;
};
Zn.orientationIndex = function(t, e, r) {
  var i = e.x - t.x, o = e.y - t.y, s = r.x - e.x, a = r.y - e.y;
  return Zn.signOfDet2x2(i, o, s, a);
};
Zn.signOfDet2x2 = function(t, e, r, i) {
  var o = null, s = null, a = null;
  if (o = 1, t === 0 || i === 0)
    return e === 0 || r === 0 ? 0 : e > 0 ? r > 0 ? -o : o : r > 0 ? o : -o;
  if (e === 0 || r === 0)
    return i > 0 ? t > 0 ? o : -o : t > 0 ? -o : o;
  if (e > 0 ? i > 0 ? e <= i || (o = -o, s = t, t = r, r = s, s = e, e = i, i = s) : e <= -i ? (o = -o, r = -r, i = -i) : (s = t, t = -r, r = s, s = e, e = -i, i = s) : i > 0 ? -e <= i ? (o = -o, t = -t, e = -e) : (s = -t, t = r, r = s, s = -e, e = i, i = s) : e >= i ? (t = -t, e = -e, r = -r, i = -i) : (o = -o, s = -t, t = -r, r = s, s = -e, e = -i, i = s), t > 0)
    if (r > 0) {
      if (!(t <= r))
        return o;
    } else
      return o;
  else {
    if (r > 0)
      return -o;
    if (t >= r)
      o = -o, t = -t, r = -r;
    else
      return -o;
  }
  for (; ; ) {
    if (a = Math.floor(r / t), r = r - a * t, i = i - a * e, i < 0)
      return -o;
    if (i > e)
      return o;
    if (t > r + r) {
      if (e < i + i)
        return o;
    } else {
      if (e > i + i)
        return -o;
      r = t - r, i = e - i, o = -o;
    }
    if (i === 0)
      return r === 0 ? 0 : -o;
    if (r === 0 || (a = Math.floor(t / r), t = t - a * r, e = e - a * i, e < 0))
      return o;
    if (e > i)
      return -o;
    if (r > t + t) {
      if (i < e + e)
        return -o;
    } else {
      if (i > e + e)
        return o;
      t = r - t, e = i - e, o = -o;
    }
    if (e === 0)
      return t === 0 ? 0 : o;
    if (t === 0)
      return -o;
  }
};
var fr = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
fr.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var r = t.x, i = e.x;
    return r > i && (r = e.x, i = t.x), this._p.x >= r && this._p.x <= i && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var o = t.x - this._p.x, s = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = Zn.signOfDet2x2(o, s, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < s && (l = -l), l > 0 && this._crossingCount++;
  }
};
fr.prototype.isPointInPolygon = function() {
  return this.getLocation() !== _.EXTERIOR;
};
fr.prototype.getLocation = function() {
  return this._isPointOnSegment ? _.BOUNDARY : this._crossingCount % 2 === 1 ? _.INTERIOR : _.EXTERIOR;
};
fr.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
fr.prototype.interfaces_ = function() {
  return [];
};
fr.prototype.getClass = function() {
  return fr;
};
fr.locatePointInRing = function() {
  if (arguments[0] instanceof m && V(arguments[1], Q)) {
    for (var t = arguments[0], e = arguments[1], r = new fr(t), i = new m(), o = new m(), s = 1; s < e.size(); s++)
      if (e.getCoordinate(s, i), e.getCoordinate(s - 1, o), r.countSegment(i, o), r.isOnSegment())
        return r.getLocation();
    return r.getLocation();
  } else if (arguments[0] instanceof m && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new fr(a), c = 1; c < u.length; c++) {
      var f = u[c], h = u[c - 1];
      if (l.countSegment(f, h), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var M = function() {
}, fi = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
M.prototype.interfaces_ = function() {
  return [];
};
M.prototype.getClass = function() {
  return M;
};
M.orientationIndex = function(t, e, r) {
  return he.orientationIndex(t, e, r);
};
M.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, r = t[0].x, i = 1; i < t.length - 1; i++) {
      var o = t[i].x - r, s = t[i + 1].y, a = t[i - 1].y;
      e += o * (a - s);
    }
    return e / 2;
  } else if (V(arguments[0], Q)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new m(), f = new m(), h = new m();
    u.getCoordinate(0, f), u.getCoordinate(1, h);
    var g = f.x;
    h.x -= g;
    for (var p = 0, y = 1; y < l - 1; y++)
      c.y = f.y, f.x = h.x, f.y = h.y, u.getCoordinate(y + 1, h), h.x -= g, p += f.x * (c.y - h.y);
    return p / 2;
  }
};
M.distanceLineLine = function(t, e, r, i) {
  if (t.equals(e))
    return M.distancePointLine(t, r, i);
  if (r.equals(i))
    return M.distancePointLine(i, t, e);
  var o = !1;
  if (!F.intersects(t, e, r, i))
    o = !0;
  else {
    var s = (e.x - t.x) * (i.y - r.y) - (e.y - t.y) * (i.x - r.x);
    if (s === 0)
      o = !0;
    else {
      var a = (t.y - r.y) * (i.x - r.x) - (t.x - r.x) * (i.y - r.y), u = (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y), l = u / s, c = a / s;
      (c < 0 || c > 1 || l < 0 || l > 1) && (o = !0);
    }
  }
  return o ? we.min(M.distancePointLine(t, r, i), M.distancePointLine(e, r, i), M.distancePointLine(r, t, e), M.distancePointLine(i, t, e)) : 0;
};
M.isPointInRing = function(t, e) {
  return M.locatePointInRing(t, e) !== _.EXTERIOR;
};
M.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var r = 0, i = new m();
  t.getCoordinate(0, i);
  for (var o = i.x, s = i.y, a = 1; a < e; a++) {
    t.getCoordinate(a, i);
    var u = i.x, l = i.y, c = u - o, f = l - s;
    r += Math.sqrt(c * c + f * f), o = u, s = l;
  }
  return r;
};
M.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new gt("Ring has fewer than 4 points, so orientation cannot be determined");
  for (var r = t[0], i = 0, o = 1; o <= e; o++) {
    var s = t[o];
    s.y > r.y && (r = s, i = o);
  }
  var a = i;
  do
    a = a - 1, a < 0 && (a = e);
  while (t[a].equals2D(r) && a !== i);
  var u = i;
  do
    u = (u + 1) % e;
  while (t[u].equals2D(r) && u !== i);
  var l = t[a], c = t[u];
  if (l.equals2D(r) || c.equals2D(r) || l.equals2D(c))
    return !1;
  var f = M.computeOrientation(l, r, c), h = !1;
  return f === 0 ? h = l.x > c.x : h = f > 0, h;
};
M.locatePointInRing = function(t, e) {
  return fr.locatePointInRing(t, e);
};
M.distancePointLinePerpendicular = function(t, e, r) {
  var i = (r.x - e.x) * (r.x - e.x) + (r.y - e.y) * (r.y - e.y), o = ((e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)) / i;
  return Math.abs(o) * Math.sqrt(i);
};
M.computeOrientation = function(t, e, r) {
  return M.orientationIndex(t, e, r);
};
M.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new gt("Line array must contain at least one vertex");
    for (var r = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
      var o = M.distancePointLine(t, e[i], e[i + 1]);
      o < r && (r = o);
    }
    return r;
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    if (a.x === u.x && a.y === u.y)
      return s.distance(a);
    var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y), c = ((s.x - a.x) * (u.x - a.x) + (s.y - a.y) * (u.y - a.y)) / l;
    if (c <= 0)
      return s.distance(a);
    if (c >= 1)
      return s.distance(u);
    var f = ((a.y - s.y) * (u.x - a.x) - (a.x - s.x) * (u.y - a.y)) / l;
    return Math.abs(f) * Math.sqrt(l);
  }
};
M.isOnLine = function(t, e) {
  for (var r = new Yn(), i = 1; i < e.length; i++) {
    var o = e[i - 1], s = e[i];
    if (r.computeIntersection(t, o, s), r.hasIntersection())
      return !0;
  }
  return !1;
};
fi.CLOCKWISE.get = function() {
  return -1;
};
fi.RIGHT.get = function() {
  return M.CLOCKWISE;
};
fi.COUNTERCLOCKWISE.get = function() {
  return 1;
};
fi.LEFT.get = function() {
  return M.COUNTERCLOCKWISE;
};
fi.COLLINEAR.get = function() {
  return 0;
};
fi.STRAIGHT.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(M, fi);
var Jr = function() {
};
Jr.prototype.filter = function(t) {
};
Jr.prototype.interfaces_ = function() {
  return [];
};
Jr.prototype.getClass = function() {
  return Jr;
};
var z = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, zr = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
z.prototype.isGeometryCollection = function() {
  return this.getSortIndex() === z.SORTINDEX_GEOMETRYCOLLECTION;
};
z.prototype.getFactory = function() {
  return this._factory;
};
z.prototype.getGeometryN = function(t) {
  return this;
};
z.prototype.getArea = function() {
  return 0;
};
z.prototype.isRectangle = function() {
  return !1;
};
z.prototype.equals = function() {
  if (arguments[0] instanceof z) {
    var t = arguments[0];
    return t === null ? !1 : this.equalsTopo(t);
  } else if (arguments[0] instanceof Object) {
    var e = arguments[0];
    if (!(e instanceof z))
      return !1;
    var r = e;
    return this.equalsExact(r);
  }
};
z.prototype.equalsExact = function(t) {
  return this === t || this.equalsExact(t, 0);
};
z.prototype.geometryChanged = function() {
  this.apply(z.geometryChangedFilter);
};
z.prototype.geometryChangedAction = function() {
  this._envelope = null;
};
z.prototype.equalsNorm = function(t) {
  return t === null ? !1 : this.norm().equalsExact(t.norm());
};
z.prototype.getLength = function() {
  return 0;
};
z.prototype.getNumGeometries = function() {
  return 1;
};
z.prototype.compareTo = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t;
    return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.getSortIndex() !== r.getSortIndex() ? this.getSortIndex() - r.getSortIndex() : this.isEmpty() && r.isEmpty() ? 0 : this.isEmpty() ? -1 : r.isEmpty() ? 1 : this.compareToSameClass(r, i);
  }
};
z.prototype.getUserData = function() {
  return this._userData;
};
z.prototype.getSRID = function() {
  return this._SRID;
};
z.prototype.getEnvelope = function() {
  return this.getFactory().toGeometry(this.getEnvelopeInternal());
};
z.prototype.checkNotGeometryCollection = function(t) {
  if (t.getSortIndex() === z.SORTINDEX_GEOMETRYCOLLECTION)
    throw new gt("This method does not support GeometryCollection arguments");
};
z.prototype.equal = function(t, e, r) {
  return r === 0 ? t.equals(e) : t.distance(e) <= r;
};
z.prototype.norm = function() {
  var t = this.copy();
  return t.normalize(), t;
};
z.prototype.getPrecisionModel = function() {
  return this._factory.getPrecisionModel();
};
z.prototype.getEnvelopeInternal = function() {
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new F(this._envelope);
};
z.prototype.setSRID = function(t) {
  this._SRID = t;
};
z.prototype.setUserData = function(t) {
  this._userData = t;
};
z.prototype.compare = function(t, e) {
  for (var r = t.iterator(), i = e.iterator(); r.hasNext() && i.hasNext(); ) {
    var o = r.next(), s = i.next(), a = o.compareTo(s);
    if (a !== 0)
      return a;
  }
  return r.hasNext() ? 1 : i.hasNext() ? -1 : 0;
};
z.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
z.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === z.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === z.SORTINDEX_MULTIPOINT || this.getSortIndex() === z.SORTINDEX_MULTILINESTRING || this.getSortIndex() === z.SORTINDEX_MULTIPOLYGON;
};
z.prototype.interfaces_ = function() {
  return [rs, ze, Ve];
};
z.prototype.getClass = function() {
  return z;
};
z.hasNonEmptyElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (!t[e].isEmpty())
      return !0;
  return !1;
};
z.hasNullElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e] === null)
      return !0;
  return !1;
};
zr.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
zr.SORTINDEX_POINT.get = function() {
  return 0;
};
zr.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
zr.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
zr.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
zr.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
zr.SORTINDEX_POLYGON.get = function() {
  return 5;
};
zr.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
zr.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
zr.geometryChangedFilter.get = function() {
  return js;
};
Object.defineProperties(z, zr);
var js = function() {
};
js.interfaces_ = function() {
  return [Jr];
};
js.filter = function(t) {
  t.geometryChangedAction();
};
var Or = function() {
};
Or.prototype.filter = function(t) {
};
Or.prototype.interfaces_ = function() {
  return [];
};
Or.prototype.getClass = function() {
  return Or;
};
var ke = function() {
}, nn = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
ke.prototype.isInBoundary = function(t) {
};
ke.prototype.interfaces_ = function() {
  return [];
};
ke.prototype.getClass = function() {
  return ke;
};
nn.Mod2BoundaryNodeRule.get = function() {
  return Ii;
};
nn.EndPointBoundaryNodeRule.get = function() {
  return Ni;
};
nn.MultiValentEndPointBoundaryNodeRule.get = function() {
  return Si;
};
nn.MonoValentEndPointBoundaryNodeRule.get = function() {
  return xi;
};
nn.MOD2_BOUNDARY_RULE.get = function() {
  return new Ii();
};
nn.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Ni();
};
nn.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Si();
};
nn.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new xi();
};
nn.OGC_SFS_BOUNDARY_RULE.get = function() {
  return ke.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(ke, nn);
var Ii = function() {
};
Ii.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
Ii.prototype.interfaces_ = function() {
  return [ke];
};
Ii.prototype.getClass = function() {
  return Ii;
};
var Ni = function() {
};
Ni.prototype.isInBoundary = function(t) {
  return t > 0;
};
Ni.prototype.interfaces_ = function() {
  return [ke];
};
Ni.prototype.getClass = function() {
  return Ni;
};
var Si = function() {
};
Si.prototype.isInBoundary = function(t) {
  return t > 1;
};
Si.prototype.interfaces_ = function() {
  return [ke];
};
Si.prototype.getClass = function() {
  return Si;
};
var xi = function() {
};
xi.prototype.isInBoundary = function(t) {
  return t === 1;
};
xi.prototype.interfaces_ = function() {
  return [ke];
};
xi.prototype.getClass = function() {
  return xi;
};
var Ot = function() {
};
Ot.prototype.add = function() {
};
Ot.prototype.addAll = function() {
};
Ot.prototype.isEmpty = function() {
};
Ot.prototype.iterator = function() {
};
Ot.prototype.size = function() {
};
Ot.prototype.toArray = function() {
};
Ot.prototype.remove = function() {
};
function Ks(n) {
  this.message = n || "";
}
Ks.prototype = new Error();
Ks.prototype.name = "IndexOutOfBoundsException";
var Ui = function() {
};
Ui.prototype.hasNext = function() {
};
Ui.prototype.next = function() {
};
Ui.prototype.remove = function() {
};
var He = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(Ot);
function qi(n) {
  this.message = n || "";
}
qi.prototype = new Error();
qi.prototype.name = "NoSuchElementException";
var O = function(n) {
  function t() {
    n.call(this), this.array_ = [], arguments[0] instanceof Ot && this.addAll(arguments[0]);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [n, Ot];
  }, t.prototype.add = function(r) {
    return arguments.length === 1 ? this.array_.push(r) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, t.prototype.clear = function() {
    this.array_ = [];
  }, t.prototype.addAll = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.set = function(r, i) {
    var o = this.array_[r];
    return this.array_[r] = i, o;
  }, t.prototype.iterator = function() {
    return new If(this);
  }, t.prototype.get = function(r) {
    if (r < 0 || r >= this.size())
      throw new Ks();
    return this.array_[r];
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.toArray = function() {
    for (var r = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(r.array_[o]);
    return i;
  }, t.prototype.remove = function(r) {
    for (var i = this, o = !1, s = 0, a = this.array_.length; s < a; s++)
      if (i.array_[s] === r) {
        i.array_.splice(s, 1), o = !0;
        break;
      }
    return o;
  }, t;
}(He), If = function(n) {
  function t(e) {
    n.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new qi();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(r) {
    return this.arrayList_.set(this.position_ - 1, r);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(Ui), Eo = function(n) {
  function t() {
    if (n.call(this), arguments.length !== 0) {
      if (arguments.length === 1) {
        var r = arguments[0];
        this.ensureCapacity(r.length), this.add(r, !0);
      } else if (arguments.length === 2) {
        var i = arguments[0], o = arguments[1];
        this.ensureCapacity(i.length), this.add(i, o);
      }
    }
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { coordArrayType: { configurable: !0 } };
  return e.coordArrayType.get = function() {
    return new Array(0).fill(null);
  }, t.prototype.getCoordinate = function(i) {
    return this.get(i);
  }, t.prototype.addAll = function() {
    var i = this;
    if (arguments.length === 2) {
      for (var o = arguments[0], s = arguments[1], a = !1, u = o.iterator(); u.hasNext(); )
        i.add(u.next(), s), a = !0;
      return a;
    } else
      return n.prototype.addAll.apply(this, arguments);
  }, t.prototype.clone = function() {
    for (var i = this, o = n.prototype.clone.call(this), s = 0; s < this.size(); s++)
      o.add(s, i.get(s).copy());
    return o;
  }, t.prototype.toCoordinateArray = function() {
    return this.toArray(t.coordArrayType);
  }, t.prototype.add = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0];
      n.prototype.add.call(this, o);
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var s = arguments[0], a = arguments[1];
        return this.add(s, a, !0), !0;
      } else if (arguments[0] instanceof m && typeof arguments[1] == "boolean") {
        var u = arguments[0], l = arguments[1];
        if (!l && this.size() >= 1) {
          var c = this.get(this.size() - 1);
          if (c.equals2D(u))
            return null;
        }
        n.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var f = arguments[0], h = arguments[1];
        return this.add(f, h), !0;
      }
    } else if (arguments.length === 3) {
      if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var g = arguments[0], p = arguments[1], y = arguments[2];
        if (y)
          for (var d = 0; d < g.length; d++)
            i.add(g[d], p);
        else
          for (var v = g.length - 1; v >= 0; v--)
            i.add(g[v], p);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof m) {
        var C = arguments[0], I = arguments[1], N = arguments[2];
        if (!N) {
          var L = this.size();
          if (L > 0) {
            if (C > 0) {
              var T = this.get(C - 1);
              if (T.equals2D(I))
                return null;
            }
            if (C < L) {
              var R = this.get(C);
              if (R.equals2D(I))
                return null;
            }
          }
        }
        n.prototype.add.call(this, C, I);
      }
    } else if (arguments.length === 4) {
      var D = arguments[0], b = arguments[1], A = arguments[2], Y = arguments[3], G = 1;
      A > Y && (G = -1);
      for (var at = A; at !== Y; at += G)
        i.add(D[at], b);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new m(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(O), H = function() {
}, is = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
is.ForwardComparator.get = function() {
  return io;
};
is.BidirectionalComparator.get = function() {
  return Li;
};
is.coordArrayType.get = function() {
  return new Array(0).fill(null);
};
H.prototype.interfaces_ = function() {
  return [];
};
H.prototype.getClass = function() {
  return H;
};
H.isRing = function(t) {
  return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]));
};
H.ptNotInList = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (H.indexOf(i, e) < 0)
      return i;
  }
  return null;
};
H.scroll = function(t, e) {
  var r = H.indexOf(e, t);
  if (r < 0)
    return null;
  var i = new Array(t.length).fill(null);
  Wt.arraycopy(t, r, i, 0, t.length - r), Wt.arraycopy(t, 0, i, t.length - r, r), Wt.arraycopy(i, 0, t, 0, t.length);
};
H.equals = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (t === e)
      return !0;
    if (t === null || e === null || t.length !== e.length)
      return !1;
    for (var r = 0; r < t.length; r++)
      if (!t[r].equals(e[r]))
        return !1;
    return !0;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (i === o)
      return !0;
    if (i === null || o === null || i.length !== o.length)
      return !1;
    for (var a = 0; a < i.length; a++)
      if (s.compare(i[a], o[a]) !== 0)
        return !1;
    return !0;
  }
};
H.intersection = function(t, e) {
  for (var r = new Eo(), i = 0; i < t.length; i++)
    e.intersects(t[i]) && r.add(t[i], !0);
  return r.toCoordinateArray();
};
H.hasRepeatedPoints = function(t) {
  for (var e = 1; e < t.length; e++)
    if (t[e - 1].equals(t[e]))
      return !0;
  return !1;
};
H.removeRepeatedPoints = function(t) {
  if (!H.hasRepeatedPoints(t))
    return t;
  var e = new Eo(t, !1);
  return e.toCoordinateArray();
};
H.reverse = function(t) {
  for (var e = t.length - 1, r = Math.trunc(e / 2), i = 0; i <= r; i++) {
    var o = t[i];
    t[i] = t[e - i], t[e - i] = o;
  }
};
H.removeNull = function(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    t[r] !== null && e++;
  var i = new Array(e).fill(null);
  if (e === 0)
    return i;
  for (var o = 0, s = 0; s < t.length; s++)
    t[s] !== null && (i[o++] = t[s]);
  return i;
};
H.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), r = 0; r < t.length; r++)
      e[r] = new m(t[r]);
    return e;
  } else if (arguments.length === 5)
    for (var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      s[a + l] = new m(i[o + l]);
};
H.isEqualReversed = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r], o = e[t.length - r - 1];
    if (i.compareTo(o) !== 0)
      return !1;
  }
  return !0;
};
H.envelope = function(t) {
  for (var e = new F(), r = 0; r < t.length; r++)
    e.expandToInclude(t[r]);
  return e;
};
H.toCoordinateArray = function(t) {
  return t.toArray(H.coordArrayType);
};
H.atLeastNCoordinatesOrNothing = function(t, e) {
  return e.length >= t ? e : [];
};
H.indexOf = function(t, e) {
  for (var r = 0; r < e.length; r++)
    if (t.equals(e[r]))
      return r;
  return -1;
};
H.increasingDirection = function(t) {
  for (var e = 0; e < Math.trunc(t.length / 2); e++) {
    var r = t.length - 1 - e, i = t[e].compareTo(t[r]);
    if (i !== 0)
      return i;
  }
  return 1;
};
H.compare = function(t, e) {
  for (var r = 0; r < t.length && r < e.length; ) {
    var i = t[r].compareTo(e[r]);
    if (i !== 0)
      return i;
    r++;
  }
  return r < e.length ? -1 : r < t.length ? 1 : 0;
};
H.minCoordinate = function(t) {
  for (var e = null, r = 0; r < t.length; r++)
    (e === null || e.compareTo(t[r]) > 0) && (e = t[r]);
  return e;
};
H.extract = function(t, e, r) {
  e = we.clamp(e, 0, t.length), r = we.clamp(r, -1, t.length);
  var i = r - e + 1;
  r < 0 && (i = 0), e >= t.length && (i = 0), r < e && (i = 0);
  var o = new Array(i).fill(null);
  if (i === 0)
    return o;
  for (var s = 0, a = e; a <= r; a++)
    o[s++] = t[a];
  return o;
};
Object.defineProperties(H, is);
var io = function() {
};
io.prototype.compare = function(t, e) {
  var r = t, i = e;
  return H.compare(r, i);
};
io.prototype.interfaces_ = function() {
  return [Ei];
};
io.prototype.getClass = function() {
  return io;
};
var Li = function() {
};
Li.prototype.compare = function(t, e) {
  var r = t, i = e;
  if (r.length < i.length)
    return -1;
  if (r.length > i.length)
    return 1;
  if (r.length === 0)
    return 0;
  var o = H.compare(r, i), s = H.isEqualReversed(r, i);
  return s ? 0 : o;
};
Li.prototype.OLDcompare = function(t, e) {
  var r = t, i = e;
  if (r.length < i.length)
    return -1;
  if (r.length > i.length)
    return 1;
  if (r.length === 0)
    return 0;
  for (var o = H.increasingDirection(r), s = H.increasingDirection(i), a = o > 0 ? 0 : r.length - 1, u = s > 0 ? 0 : r.length - 1, l = 0; l < r.length; l++) {
    var c = r[a].compareTo(i[u]);
    if (c !== 0)
      return c;
    a += o, u += s;
  }
  return 0;
};
Li.prototype.interfaces_ = function() {
  return [Ei];
};
Li.prototype.getClass = function() {
  return Li;
};
var hi = function() {
};
hi.prototype.get = function() {
};
hi.prototype.put = function() {
};
hi.prototype.size = function() {
};
hi.prototype.values = function() {
};
hi.prototype.entrySet = function() {
};
var Nf = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(hi);
function Co(n) {
  this.message = n || "";
}
Co.prototype = new Error();
Co.prototype.name = "OperationNotSupported";
function os() {
}
os.prototype = new Ot();
os.prototype.contains = function() {
};
var Qs = function(n) {
  function t() {
    n.call(this), this.array_ = [], arguments[0] instanceof Ot && this.addAll(arguments[0]);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.contains = function(r) {
    for (var i = this, o = 0, s = this.array_.length; o < s; o++) {
      var a = i.array_[o];
      if (a === r)
        return !0;
    }
    return !1;
  }, t.prototype.add = function(r) {
    return this.contains(r) ? !1 : (this.array_.push(r), !0);
  }, t.prototype.addAll = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.remove = function(r) {
    throw new Error();
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.toArray = function() {
    for (var r = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(r.array_[o]);
    return i;
  }, t.prototype.iterator = function() {
    return new Sf(this);
  }, t;
}(os), Sf = function(n) {
  function t(e) {
    n.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new qi();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new Co();
  }, t;
}(Ui), jr = 0, Sn = 1;
function Ya(n) {
  return n === null ? jr : n.color;
}
function lt(n) {
  return n === null ? null : n.parent;
}
function Xr(n, t) {
  n !== null && (n.color = t);
}
function Ls(n) {
  return n === null ? null : n.left;
}
function Wa(n) {
  return n === null ? null : n.right;
}
function Jt() {
  this.root_ = null, this.size_ = 0;
}
Jt.prototype = new Nf();
Jt.prototype.get = function(n) {
  for (var t = this.root_; t !== null; ) {
    var e = n.compareTo(t.key);
    if (e < 0)
      t = t.left;
    else if (e > 0)
      t = t.right;
    else
      return t.value;
  }
  return null;
};
Jt.prototype.put = function(n, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: n,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: jr,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    }, this.size_ = 1, null;
  var e = this.root_, r, i;
  do
    if (r = e, i = n.compareTo(e.key), i < 0)
      e = e.left;
    else if (i > 0)
      e = e.right;
    else {
      var o = e.value;
      return e.value = t, o;
    }
  while (e !== null);
  var s = {
    key: n,
    left: null,
    right: null,
    value: t,
    parent: r,
    color: jr,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return i < 0 ? r.left = s : r.right = s, this.fixAfterInsertion(s), this.size_++, null;
};
Jt.prototype.fixAfterInsertion = function(n) {
  var t = this;
  for (n.color = Sn; n != null && n !== this.root_ && n.parent.color === Sn; )
    if (lt(n) === Ls(lt(lt(n)))) {
      var e = Wa(lt(lt(n)));
      Ya(e) === Sn ? (Xr(lt(n), jr), Xr(e, jr), Xr(lt(lt(n)), Sn), n = lt(lt(n))) : (n === Wa(lt(n)) && (n = lt(n), t.rotateLeft(n)), Xr(lt(n), jr), Xr(lt(lt(n)), Sn), t.rotateRight(lt(lt(n))));
    } else {
      var r = Ls(lt(lt(n)));
      Ya(r) === Sn ? (Xr(lt(n), jr), Xr(r, jr), Xr(lt(lt(n)), Sn), n = lt(lt(n))) : (n === Ls(lt(n)) && (n = lt(n), t.rotateRight(n)), Xr(lt(n), jr), Xr(lt(lt(n)), Sn), t.rotateLeft(lt(lt(n))));
    }
  this.root_.color = jr;
};
Jt.prototype.values = function() {
  var n = new O(), t = this.getFirstEntry();
  if (t !== null)
    for (n.add(t.value); (t = Jt.successor(t)) !== null; )
      n.add(t.value);
  return n;
};
Jt.prototype.entrySet = function() {
  var n = new Qs(), t = this.getFirstEntry();
  if (t !== null)
    for (n.add(t); (t = Jt.successor(t)) !== null; )
      n.add(t);
  return n;
};
Jt.prototype.rotateLeft = function(n) {
  if (n != null) {
    var t = n.right;
    n.right = t.left, t.left != null && (t.left.parent = n), t.parent = n.parent, n.parent === null ? this.root_ = t : n.parent.left === n ? n.parent.left = t : n.parent.right = t, t.left = n, n.parent = t;
  }
};
Jt.prototype.rotateRight = function(n) {
  if (n != null) {
    var t = n.left;
    n.left = t.right, t.right != null && (t.right.parent = n), t.parent = n.parent, n.parent === null ? this.root_ = t : n.parent.right === n ? n.parent.right = t : n.parent.left = t, t.right = n, n.parent = t;
  }
};
Jt.prototype.getFirstEntry = function() {
  var n = this.root_;
  if (n != null)
    for (; n.left != null; )
      n = n.left;
  return n;
};
Jt.successor = function(n) {
  if (n === null)
    return null;
  if (n.right !== null) {
    for (var t = n.right; t.left !== null; )
      t = t.left;
    return t;
  } else {
    for (var e = n.parent, r = n; e !== null && r === e.right; )
      r = e, e = e.parent;
    return e;
  }
};
Jt.prototype.size = function() {
  return this.size_;
};
var oo = function() {
};
oo.prototype.interfaces_ = function() {
  return [];
};
oo.prototype.getClass = function() {
  return oo;
};
function Du() {
}
Du.prototype = new os();
function pr() {
  this.array_ = [], arguments[0] instanceof Ot && this.addAll(arguments[0]);
}
pr.prototype = new Du();
pr.prototype.contains = function(n) {
  for (var t = this, e = 0, r = this.array_.length; e < r; e++) {
    var i = t.array_[e];
    if (i.compareTo(n) === 0)
      return !0;
  }
  return !1;
};
pr.prototype.add = function(n) {
  var t = this;
  if (this.contains(n))
    return !1;
  for (var e = 0, r = this.array_.length; e < r; e++) {
    var i = t.array_[e];
    if (i.compareTo(n) === 1)
      return t.array_.splice(e, 0, n), !0;
  }
  return this.array_.push(n), !0;
};
pr.prototype.addAll = function(n) {
  for (var t = this, e = n.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
pr.prototype.remove = function(n) {
  throw new Co();
};
pr.prototype.size = function() {
  return this.array_.length;
};
pr.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
pr.prototype.toArray = function() {
  for (var n = this, t = [], e = 0, r = this.array_.length; e < r; e++)
    t.push(n.array_[e]);
  return t;
};
pr.prototype.iterator = function() {
  return new ss(this);
};
var ss = function(n) {
  this.treeSet_ = n, this.position_ = 0;
};
ss.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new qi();
  return this.treeSet_.array_[this.position_++];
};
ss.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
ss.prototype.remove = function() {
  throw new Co();
};
var wn = function() {
};
wn.sort = function() {
  var t = arguments[0], e, r, i, o;
  if (arguments.length === 1)
    o = function(a, u) {
      return a.compareTo(u);
    }, t.sort(o);
  else if (arguments.length === 2)
    i = arguments[1], o = function(a, u) {
      return i.compare(a, u);
    }, t.sort(o);
  else if (arguments.length === 3) {
    r = t.slice(arguments[1], arguments[2]), r.sort();
    var s = t.slice(0, arguments[1]).concat(r, t.slice(arguments[2], t.length));
    for (t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
  } else if (arguments.length === 4)
    for (r = t.slice(arguments[1], arguments[2]), i = arguments[3], o = function(a, u) {
      return i.compare(a, u);
    }, r.sort(o), s = t.slice(0, arguments[1]).concat(r, t.slice(arguments[2], t.length)), t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
};
wn.asList = function(t) {
  for (var e = new O(), r = 0, i = t.length; r < i; r++)
    e.add(t[r]);
  return e;
};
var J = function() {
}, rr = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
rr.P.get = function() {
  return 0;
};
rr.L.get = function() {
  return 1;
};
rr.A.get = function() {
  return 2;
};
rr.FALSE.get = function() {
  return -1;
};
rr.TRUE.get = function() {
  return -2;
};
rr.DONTCARE.get = function() {
  return -3;
};
rr.SYM_FALSE.get = function() {
  return "F";
};
rr.SYM_TRUE.get = function() {
  return "T";
};
rr.SYM_DONTCARE.get = function() {
  return "*";
};
rr.SYM_P.get = function() {
  return "0";
};
rr.SYM_L.get = function() {
  return "1";
};
rr.SYM_A.get = function() {
  return "2";
};
J.prototype.interfaces_ = function() {
  return [];
};
J.prototype.getClass = function() {
  return J;
};
J.toDimensionSymbol = function(t) {
  switch (t) {
    case J.FALSE:
      return J.SYM_FALSE;
    case J.TRUE:
      return J.SYM_TRUE;
    case J.DONTCARE:
      return J.SYM_DONTCARE;
    case J.P:
      return J.SYM_P;
    case J.L:
      return J.SYM_L;
    case J.A:
      return J.SYM_A;
  }
  throw new gt("Unknown dimension value: " + t);
};
J.toDimensionValue = function(t) {
  switch (no.toUpperCase(t)) {
    case J.SYM_FALSE:
      return J.FALSE;
    case J.SYM_TRUE:
      return J.TRUE;
    case J.SYM_DONTCARE:
      return J.DONTCARE;
    case J.SYM_P:
      return J.P;
    case J.SYM_L:
      return J.L;
    case J.SYM_A:
      return J.A;
  }
  throw new gt("Unknown dimension symbol: " + t);
};
Object.defineProperties(J, rr);
var dr = function() {
};
dr.prototype.filter = function(t) {
};
dr.prototype.interfaces_ = function() {
  return [];
};
dr.prototype.getClass = function() {
  return dr;
};
var Ke = function() {
};
Ke.prototype.filter = function(t, e) {
};
Ke.prototype.isDone = function() {
};
Ke.prototype.isGeometryChanged = function() {
};
Ke.prototype.interfaces_ = function() {
  return [];
};
Ke.prototype.getClass = function() {
  return Ke;
};
var ae = function(n) {
  function t(r, i) {
    if (n.call(this, i), this._geometries = r || [], n.hasNullElements(this._geometries))
      throw new gt("geometries must not contain null elements");
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var i = this, o = new F(), s = 0; s < this._geometries.length; s++)
      o.expandToInclude(i._geometries[s].getEnvelopeInternal());
    return o;
  }, t.prototype.getGeometryN = function(i) {
    return this._geometries[i];
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_GEOMETRYCOLLECTION;
  }, t.prototype.getCoordinates = function() {
    for (var i = this, o = new Array(this.getNumPoints()).fill(null), s = -1, a = 0; a < this._geometries.length; a++)
      for (var u = i._geometries[a].getCoordinates(), l = 0; l < u.length; l++)
        s++, o[s] = u[l];
    return o;
  }, t.prototype.getArea = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getArea();
    return o;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._geometries.length !== a._geometries.length)
        return !1;
      for (var u = 0; u < this._geometries.length; u++)
        if (!i._geometries[u].equalsExact(a._geometries[u], s))
          return !1;
      return !0;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      i._geometries[o].normalize();
    wn.sort(this._geometries);
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
  }, t.prototype.getBoundaryDimension = function() {
    for (var i = this, o = J.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getBoundaryDimension());
    return o;
  }, t.prototype.getDimension = function() {
    for (var i = this, o = J.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getDimension());
    return o;
  }, t.prototype.getLength = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getNumPoints();
    return o;
  }, t.prototype.getNumGeometries = function() {
    return this._geometries.length;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createGeometryCollection(s);
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = new pr(wn.asList(this._geometries)), a = new pr(wn.asList(o._geometries));
      return this.compare(s, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, f = this.getNumGeometries(), h = c.getNumGeometries(), g = 0; g < f && g < h; ) {
        var p = i.getGeometryN(g), y = c.getGeometryN(g), d = p.compareToSameClass(y, l);
        if (d !== 0)
          return d;
        g++;
      }
      return g < f ? 1 : g < h ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (V(arguments[0], Or))
      for (var o = arguments[0], s = 0; s < this._geometries.length; s++)
        i._geometries[s].apply(o);
    else if (V(arguments[0], Ke)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (i._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], dr)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        i._geometries[c].apply(l);
    } else if (V(arguments[0], Jr)) {
      var f = arguments[0];
      f.filter(this);
      for (var h = 0; h < this._geometries.length; h++)
        i._geometries[h].apply(f);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), X.shouldNeverReachHere(), null;
  }, t.prototype.clone = function() {
    var i = this, o = n.prototype.clone.call(this);
    o._geometries = new Array(this._geometries.length).fill(null);
    for (var s = 0; s < this._geometries.length; s++)
      o._geometries[s] = i._geometries[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "GeometryCollection";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.isEmpty = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isEmpty())
        return !1;
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -5694727726395021e3;
  }, Object.defineProperties(t, e), t;
}(z), Dn = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? J.FALSE : 0;
  }, t.prototype.isClosed = function() {
    var i = this;
    if (this.isEmpty())
      return !1;
    for (var o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isClosed())
        return !1;
    return !0;
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[o - 1 - a] = i._geometries[a].reverse();
    return this.getFactory().createMultiLineString(s);
  }, t.prototype.getBoundary = function() {
    return new Me(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [oo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(ae), Me = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = ke.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this._geom = r, this._geomFact = r.getFactory(), this._bnRule = i;
  }
};
Me.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Me.prototype.getBoundary = function() {
  return this._geom instanceof mt ? this.boundaryLineString(this._geom) : this._geom instanceof Dn ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
Me.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
Me.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
Me.prototype.computeBoundaryCoordinates = function(t) {
  var e = this, r = new O();
  this._endpointMap = new Jt();
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    o.getNumPoints() !== 0 && (e.addEndpoint(o.getCoordinateN(0)), e.addEndpoint(o.getCoordinateN(o.getNumPoints() - 1)));
  }
  for (var s = this._endpointMap.entrySet().iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && r.add(a.getKey());
  }
  return H.toCoordinateArray(r);
};
Me.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new Wo(), this._endpointMap.put(t, e)), e.count++;
};
Me.prototype.interfaces_ = function() {
  return [];
};
Me.prototype.getClass = function() {
  return Me;
};
Me.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Me(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = new Me(r, i);
    return o.getBoundary();
  }
};
var Wo = function() {
  this.count = null;
};
Wo.prototype.interfaces_ = function() {
  return [];
};
Wo.prototype.getClass = function() {
  return Wo;
};
function xf() {
}
function Lf() {
}
var bf = function() {
};
function wf() {
}
function Pf() {
}
function Rf() {
}
var Ae = function() {
}, Zs = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
Ae.prototype.interfaces_ = function() {
  return [];
};
Ae.prototype.getClass = function() {
  return Ae;
};
Ae.chars = function(t, e) {
  for (var r = new Array(e).fill(null), i = 0; i < e; i++)
    r[i] = t;
  return String(r);
};
Ae.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new wf(), r = new xf();
    return t.printStackTrace(r), e.toString();
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1], s = "";
    new Lf(Ae.getStackTrace(i));
    for (var a = new Rf(), u = 0; u < o; u++)
      try {
        s += a.readLine() + Ae.NEWLINE;
      } catch (l) {
        if (l instanceof Pf)
          X.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return s;
  }
};
Ae.split = function(t, e) {
  for (var r = e.length, i = new O(), o = "" + t, s = o.indexOf(e); s >= 0; ) {
    var a = o.substring(0, s);
    i.add(a), o = o.substring(s + r), s = o.indexOf(e);
  }
  o.length > 0 && i.add(o);
  for (var u = new Array(i.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = i.get(l);
  return u;
};
Ae.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Ae.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
Ae.spaces = function(t) {
  return Ae.chars(" ", t);
};
Zs.NEWLINE.get = function() {
  return Wt.getProperty("line.separator");
};
Zs.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new bf();
};
Object.defineProperties(Ae, Zs);
var Nt = function() {
};
Nt.prototype.interfaces_ = function() {
  return [];
};
Nt.prototype.getClass = function() {
  return Nt;
};
Nt.copyCoord = function(t, e, r, i) {
  for (var o = Math.min(t.getDimension(), r.getDimension()), s = 0; s < o; s++)
    r.setOrdinate(i, s, t.getOrdinate(e, s));
};
Nt.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, Q.X) === t.getOrdinate(e - 1, Q.X) && t.getOrdinate(0, Q.Y) === t.getOrdinate(e - 1, Q.Y);
};
Nt.isEqual = function(t, e) {
  var r = t.size(), i = e.size();
  if (r !== i)
    return !1;
  for (var o = Math.min(t.getDimension(), e.getDimension()), s = 0; s < r; s++)
    for (var a = 0; a < o; a++) {
      var u = t.getOrdinate(s, a), l = e.getOrdinate(s, a);
      if (t.getOrdinate(s, a) !== e.getOrdinate(s, a) && !(U.isNaN(u) && U.isNaN(l)))
        return !1;
    }
  return !0;
};
Nt.extend = function(t, e, r) {
  var i = t.create(r, e.getDimension()), o = e.size();
  if (Nt.copy(e, 0, i, 0, o), o > 0)
    for (var s = o; s < r; s++)
      Nt.copy(e, o - 1, i, s, 1);
  return i;
};
Nt.reverse = function(t) {
  for (var e = t.size() - 1, r = Math.trunc(e / 2), i = 0; i <= r; i++)
    Nt.swap(t, i, e - i);
};
Nt.swap = function(t, e, r) {
  if (e === r)
    return null;
  for (var i = 0; i < t.getDimension(); i++) {
    var o = t.getOrdinate(e, i);
    t.setOrdinate(e, i, t.getOrdinate(r, i)), t.setOrdinate(r, i, o);
  }
};
Nt.copy = function(t, e, r, i, o) {
  for (var s = 0; s < o; s++)
    Nt.copyCoord(t, e + s, r, i + s);
};
Nt.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var r = t.getDimension(), i = new Sr();
    i.append("(");
    for (var o = 0; o < e; o++) {
      o > 0 && i.append(" ");
      for (var s = 0; s < r; s++)
        s > 0 && i.append(","), i.append(Ae.toString(t.getOrdinate(o, s)));
    }
    return i.append(")"), i.toString();
  }
};
Nt.ensureValidRing = function(t, e) {
  var r = e.size();
  if (r === 0)
    return e;
  if (r <= 3)
    return Nt.createClosedRing(t, e, 4);
  var i = e.getOrdinate(0, Q.X) === e.getOrdinate(r - 1, Q.X) && e.getOrdinate(0, Q.Y) === e.getOrdinate(r - 1, Q.Y);
  return i ? e : Nt.createClosedRing(t, e, r + 1);
};
Nt.createClosedRing = function(t, e, r) {
  var i = t.create(r, e.getDimension()), o = e.size();
  Nt.copy(e, 0, i, 0, o);
  for (var s = o; s < r; s++)
    Nt.copy(e, 0, i, s, 1);
  return i;
};
var mt = function(n) {
  function t(r, i) {
    n.call(this, i), this._points = null, this.init(r);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new F() : this._points.expandEnvelope(new F());
  }, t.prototype.isRing = function() {
    return this.isClosed() && this.isSimple();
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_LINESTRING;
  }, t.prototype.getCoordinates = function() {
    return this._points.toCoordinateArray();
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._points.size() !== a._points.size())
        return !1;
      for (var u = 0; u < this._points.size(); u++)
        if (!i.equal(i._points.getCoordinate(u), a._points.getCoordinate(u), s))
          return !1;
      return !0;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < Math.trunc(this._points.size() / 2); o++) {
      var s = i._points.size() - 1 - o;
      if (!i._points.getCoordinate(o).equals(i._points.getCoordinate(s)))
        return i._points.getCoordinate(o).compareTo(i._points.getCoordinate(s)) > 0 && Nt.reverse(i._points), null;
    }
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._points.getCoordinate(0);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? J.FALSE : 0;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
  }, t.prototype.getEndPoint = function() {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.getLength = function() {
    return M.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Nt.reverse(i);
    var o = this.getFactory().createLineString(i);
    return o;
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      for (var o = arguments[0], s = o, a = 0, u = 0; a < this._points.size() && u < s._points.size(); ) {
        var l = i._points.getCoordinate(a).compareTo(s._points.getCoordinate(u));
        if (l !== 0)
          return l;
        a++, u++;
      }
      return a < this._points.size() ? 1 : u < s._points.size() ? -1 : 0;
    } else if (arguments.length === 2) {
      var c = arguments[0], f = arguments[1], h = c;
      return f.compare(this._points, h._points);
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (V(arguments[0], Or))
      for (var o = arguments[0], s = 0; s < this._points.size(); s++)
        o.filter(i._points.getCoordinate(s));
    else if (V(arguments[0], Ke)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(i._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], dr)) {
      var l = arguments[0];
      l.filter(this);
    } else if (V(arguments[0], Jr)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Me(this).getBoundary();
  }, t.prototype.isEquivalentClass = function(i) {
    return i instanceof t;
  }, t.prototype.clone = function() {
    var i = n.prototype.clone.call(this);
    return i._points = this._points.clone(), i;
  }, t.prototype.getCoordinateN = function(i) {
    return this._points.getCoordinate(i);
  }, t.prototype.getGeometryType = function() {
    return "LineString";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._points;
  }, t.prototype.isEmpty = function() {
    return this._points.size() === 0;
  }, t.prototype.init = function(i) {
    if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1)
      throw new gt("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
    this._points = i;
  }, t.prototype.isCoordinate = function(i) {
    for (var o = this, s = 0; s < this._points.size(); s++)
      if (o._points.getCoordinate(s).equals(i))
        return !0;
    return !1;
  }, t.prototype.getStartPoint = function() {
    return this.isEmpty() ? null : this.getPointN(0);
  }, t.prototype.getPointN = function(i) {
    return this.getFactory().createPoint(this._points.getCoordinate(i));
  }, t.prototype.interfaces_ = function() {
    return [oo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(z), so = function() {
};
so.prototype.interfaces_ = function() {
  return [];
};
so.prototype.getClass = function() {
  return so;
};
var ye = function(n) {
  function t(r, i) {
    n.call(this, i), this._coordinates = r || null, this.init(this._coordinates);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new F();
    var i = new F();
    return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_POINT;
  }, t.prototype.getCoordinates = function() {
    return this.isEmpty() ? [] : [this.getCoordinate()];
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? this.isEmpty() && i.isEmpty() ? !0 : this.isEmpty() !== i.isEmpty() ? !1 : this.equal(i.getCoordinate(), this.getCoordinate(), o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
  }, t.prototype.getCoordinate = function() {
    return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
  }, t.prototype.getBoundaryDimension = function() {
    return J.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getNumPoints = function() {
    return this.isEmpty() ? 0 : 1;
  }, t.prototype.reverse = function() {
    return this.copy();
  }, t.prototype.getX = function() {
    if (this.getCoordinate() === null)
      throw new Error("getX called on empty Point");
    return this.getCoordinate().x;
  }, t.prototype.compareToSameClass = function() {
    if (arguments.length === 1) {
      var i = arguments[0], o = i;
      return this.getCoordinate().compareTo(o.getCoordinate());
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1], u = s;
      return a.compare(this._coordinates, u._coordinates);
    }
  }, t.prototype.apply = function() {
    if (V(arguments[0], Or)) {
      var i = arguments[0];
      if (this.isEmpty())
        return null;
      i.filter(this.getCoordinate());
    } else if (V(arguments[0], Ke)) {
      var o = arguments[0];
      if (this.isEmpty())
        return null;
      o.filter(this._coordinates, 0), o.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], dr)) {
      var s = arguments[0];
      s.filter(this);
    } else if (V(arguments[0], Jr)) {
      var a = arguments[0];
      a.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.clone = function() {
    var i = n.prototype.clone.call(this);
    return i._coordinates = this._coordinates.clone(), i;
  }, t.prototype.getGeometryType = function() {
    return "Point";
  }, t.prototype.copy = function() {
    return new t(this._coordinates.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._coordinates;
  }, t.prototype.getY = function() {
    if (this.getCoordinate() === null)
      throw new Error("getY called on empty Point");
    return this.getCoordinate().y;
  }, t.prototype.isEmpty = function() {
    return this._coordinates.size() === 0;
  }, t.prototype.init = function(i) {
    i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), X.isTrue(i.size() <= 1), this._coordinates = i;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [so];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(z), hn = function() {
};
hn.prototype.interfaces_ = function() {
  return [];
};
hn.prototype.getClass = function() {
  return hn;
};
var At = function(n) {
  function t(r, i, o) {
    if (n.call(this, o), this._shell = null, this._holes = null, r === null && (r = this.getFactory().createLinearRing()), i === null && (i = []), n.hasNullElements(i))
      throw new gt("holes must not contain null elements");
    if (r.isEmpty() && n.hasNonEmptyElements(i))
      throw new gt("shell is empty but holes are not");
    this._shell = r, this._holes = i;
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this._shell.getEnvelopeInternal();
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_POLYGON;
  }, t.prototype.getCoordinates = function() {
    var i = this;
    if (this.isEmpty())
      return [];
    for (var o = new Array(this.getNumPoints()).fill(null), s = -1, a = this._shell.getCoordinates(), u = 0; u < a.length; u++)
      s++, o[s] = a[u];
    for (var l = 0; l < this._holes.length; l++)
      for (var c = i._holes[l].getCoordinates(), f = 0; f < c.length; f++)
        s++, o[s] = c[f];
    return o;
  }, t.prototype.getArea = function() {
    var i = this, o = 0;
    o += Math.abs(M.signedArea(this._shell.getCoordinateSequence()));
    for (var s = 0; s < this._holes.length; s++)
      o -= Math.abs(M.signedArea(i._holes[s].getCoordinateSequence()));
    return o;
  }, t.prototype.isRectangle = function() {
    if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5)
      return !1;
    for (var i = this._shell.getCoordinateSequence(), o = this.getEnvelopeInternal(), s = 0; s < 5; s++) {
      var a = i.getX(s);
      if (!(a === o.getMinX() || a === o.getMaxX()))
        return !1;
      var u = i.getY(s);
      if (!(u === o.getMinY() || u === o.getMaxY()))
        return !1;
    }
    for (var l = i.getX(0), c = i.getY(0), f = 1; f <= 4; f++) {
      var h = i.getX(f), g = i.getY(f), p = h !== l, y = g !== c;
      if (p === y)
        return !1;
      l = h, c = g;
    }
    return !0;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o, u = this._shell, l = a._shell;
      if (!u.equalsExact(l, s) || this._holes.length !== a._holes.length)
        return !1;
      for (var c = 0; c < this._holes.length; c++)
        if (!i._holes[c].equalsExact(a._holes[c], s))
          return !1;
      return !0;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    var i = this;
    if (arguments.length === 0) {
      this.normalize(this._shell, !0);
      for (var o = 0; o < this._holes.length; o++)
        i.normalize(i._holes[o], !1);
      wn.sort(this._holes);
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1];
      if (s.isEmpty())
        return null;
      var u = new Array(s.getCoordinates().length - 1).fill(null);
      Wt.arraycopy(s.getCoordinates(), 0, u, 0, u.length);
      var l = H.minCoordinate(s.getCoordinates());
      H.scroll(u, l), Wt.arraycopy(u, 0, s.getCoordinates(), 0, u.length), s.getCoordinates()[u.length] = u[0], M.isCCW(s.getCoordinates()) === a && H.reverse(s.getCoordinates());
    }
  }, t.prototype.getCoordinate = function() {
    return this._shell.getCoordinate();
  }, t.prototype.getNumInteriorRing = function() {
    return this._holes.length;
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.getLength = function() {
    var i = this, o = 0;
    o += this._shell.getLength();
    for (var s = 0; s < this._holes.length; s++)
      o += i._holes[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = this._shell.getNumPoints(), s = 0; s < this._holes.length; s++)
      o += i._holes[s].getNumPoints();
    return o;
  }, t.prototype.reverse = function() {
    var i = this, o = this.copy();
    o._shell = this._shell.copy().reverse(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].copy().reverse();
    return o;
  }, t.prototype.convexHull = function() {
    return this.getExteriorRing().convexHull();
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = this._shell, a = o._shell;
      return s.compareToSameClass(a);
    } else if (arguments.length === 2) {
      var u = arguments[0], l = arguments[1], c = u, f = this._shell, h = c._shell, g = f.compareToSameClass(h, l);
      if (g !== 0)
        return g;
      for (var p = this.getNumInteriorRing(), y = c.getNumInteriorRing(), d = 0; d < p && d < y; ) {
        var v = i.getInteriorRingN(d), C = c.getInteriorRingN(d), I = v.compareToSameClass(C, l);
        if (I !== 0)
          return I;
        d++;
      }
      return d < p ? 1 : d < y ? -1 : 0;
    }
  }, t.prototype.apply = function(i) {
    var o = this;
    if (V(i, Or)) {
      this._shell.apply(i);
      for (var s = 0; s < this._holes.length; s++)
        o._holes[s].apply(i);
    } else if (V(i, Ke)) {
      if (this._shell.apply(i), !i.isDone())
        for (var a = 0; a < this._holes.length && (o._holes[a].apply(i), !i.isDone()); a++)
          ;
      i.isGeometryChanged() && this.geometryChanged();
    } else if (V(i, dr))
      i.filter(this);
    else if (V(i, Jr)) {
      i.filter(this), this._shell.apply(i);
      for (var u = 0; u < this._holes.length; u++)
        o._holes[u].apply(i);
    }
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    var o = new Array(this._holes.length + 1).fill(null);
    o[0] = this._shell;
    for (var s = 0; s < this._holes.length; s++)
      o[s + 1] = i._holes[s];
    return o.length <= 1 ? this.getFactory().createLinearRing(o[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(o);
  }, t.prototype.clone = function() {
    var i = this, o = n.prototype.clone.call(this);
    o._shell = this._shell.clone(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "Polygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = this._shell.copy(), s = new Array(this._holes.length).fill(null), a = 0; a < s.length; a++)
      s[a] = i._holes[a].copy();
    return new t(o, s, this._factory);
  }, t.prototype.getExteriorRing = function() {
    return this._shell;
  }, t.prototype.isEmpty = function() {
    return this._shell.isEmpty();
  }, t.prototype.getInteriorRingN = function(i) {
    return this._holes[i];
  }, t.prototype.interfaces_ = function() {
    return [hn];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(z), bi = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_MULTIPOINT;
  }, t.prototype.isValid = function() {
    return !0;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return this._geometries[i].getCoordinate();
    } else
      return n.prototype.getCoordinate.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return J.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.getGeometryType = function() {
    return "MultiPoint";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [so];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(ae), Tr = function(n) {
  function t(r, i) {
    r instanceof m && i instanceof W && (r = i.getCoordinateSequenceFactory().create(r)), n.call(this, r, i), this.validateConstruction();
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return J.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : n.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Nt.reverse(i);
    var o = this.getFactory().createLinearRing(i);
    return o;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !n.prototype.isClosed.call(this))
      throw new gt("Points of LinearRing do not form a closed linestring");
    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
      throw new gt("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
  }, t.prototype.getGeometryType = function() {
    return "LinearRing";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.MINIMUM_VALID_SIZE.get = function() {
    return 4;
  }, e.serialVersionUID.get = function() {
    return -4261142084085851600;
  }, Object.defineProperties(t, e), t;
}(mt), Pr = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_MULTIPOLYGON;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createMultiPolygon(s);
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    for (var o = new O(), s = 0; s < this._geometries.length; s++)
      for (var a = i._geometries[s], u = a.getBoundary(), l = 0; l < u.getNumGeometries(); l++)
        o.add(u.getGeometryN(l));
    var c = new Array(o.size()).fill(null);
    return this.getFactory().createMultiLineString(o.toArray(c));
  }, t.prototype.getGeometryType = function() {
    return "MultiPolygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [hn];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(ae), Be = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, as = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
Be.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
Be.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var r = this.editInternal(t, e);
  return this._isUserDataCopied && r.setUserData(t.getUserData()), r;
};
Be.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof ae ? this.editGeometryCollection(t, e) : t instanceof At ? this.editPolygon(t, e) : t instanceof ye ? e.edit(t, this._factory) : t instanceof mt ? e.edit(t, this._factory) : (X.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
Be.prototype.editGeometryCollection = function(t, e) {
  for (var r = this, i = e.edit(t, this._factory), o = new O(), s = 0; s < i.getNumGeometries(); s++) {
    var a = r.edit(i.getGeometryN(s), e);
    a === null || a.isEmpty() || o.add(a);
  }
  return i.getClass() === bi ? this._factory.createMultiPoint(o.toArray([])) : i.getClass() === Dn ? this._factory.createMultiLineString(o.toArray([])) : i.getClass() === Pr ? this._factory.createMultiPolygon(o.toArray([])) : this._factory.createGeometryCollection(o.toArray([]));
};
Be.prototype.editPolygon = function(t, e) {
  var r = this, i = e.edit(t, this._factory);
  if (i === null && (i = this._factory.createPolygon(null)), i.isEmpty())
    return i;
  var o = this.edit(i.getExteriorRing(), e);
  if (o === null || o.isEmpty())
    return this._factory.createPolygon();
  for (var s = new O(), a = 0; a < i.getNumInteriorRing(); a++) {
    var u = r.edit(i.getInteriorRingN(a), e);
    u === null || u.isEmpty() || s.add(u);
  }
  return this._factory.createPolygon(o, s.toArray([]));
};
Be.prototype.interfaces_ = function() {
  return [];
};
Be.prototype.getClass = function() {
  return Be;
};
Be.GeometryEditorOperation = function() {
};
as.NoOpGeometryOperation.get = function() {
  return ao;
};
as.CoordinateOperation.get = function() {
  return uo;
};
as.CoordinateSequenceOperation.get = function() {
  return lo;
};
Object.defineProperties(Be, as);
var ao = function() {
};
ao.prototype.edit = function(t, e) {
  return t;
};
ao.prototype.interfaces_ = function() {
  return [Be.GeometryEditorOperation];
};
ao.prototype.getClass = function() {
  return ao;
};
var uo = function() {
};
uo.prototype.edit = function(t, e) {
  var r = this.editCoordinates(t.getCoordinates(), t);
  return r === null ? t : t instanceof Tr ? e.createLinearRing(r) : t instanceof mt ? e.createLineString(r) : t instanceof ye ? r.length > 0 ? e.createPoint(r[0]) : e.createPoint() : t;
};
uo.prototype.interfaces_ = function() {
  return [Be.GeometryEditorOperation];
};
uo.prototype.getClass = function() {
  return uo;
};
var lo = function() {
};
lo.prototype.edit = function(t, e) {
  return t instanceof Tr ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof mt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof ye ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
lo.prototype.interfaces_ = function() {
  return [Be.GeometryEditorOperation];
};
lo.prototype.getClass = function() {
  return lo;
};
var Et = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var r = 0; r < e; r++)
        t._coordinates[r] = new m();
    } else if (V(arguments[0], Q)) {
      var i = arguments[0];
      if (i === null)
        return this._coordinates = new Array(0).fill(null), null;
      this._dimension = i.getDimension(), this._coordinates = new Array(i.size()).fill(null);
      for (var o = 0; o < this._coordinates.length; o++)
        t._coordinates[o] = i.getCoordinateCopy(o);
    }
  } else if (arguments.length === 2) {
    if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var s = arguments[0], a = arguments[1];
      this._coordinates = s, this._dimension = a, s === null && (this._coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var u = arguments[0], l = arguments[1];
      this._coordinates = new Array(u).fill(null), this._dimension = l;
      for (var c = 0; c < u; c++)
        t._coordinates[c] = new m();
    }
  }
}, Mu = { serialVersionUID: { configurable: !0 } };
Et.prototype.setOrdinate = function(t, e, r) {
  switch (e) {
    case Q.X:
      this._coordinates[t].x = r;
      break;
    case Q.Y:
      this._coordinates[t].y = r;
      break;
    case Q.Z:
      this._coordinates[t].z = r;
      break;
    default:
      throw new gt("invalid ordinateIndex");
  }
};
Et.prototype.size = function() {
  return this._coordinates.length;
};
Et.prototype.getOrdinate = function(t, e) {
  switch (e) {
    case Q.X:
      return this._coordinates[t].x;
    case Q.Y:
      return this._coordinates[t].y;
    case Q.Z:
      return this._coordinates[t].z;
  }
  return U.NaN;
};
Et.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    r.x = this._coordinates[e].x, r.y = this._coordinates[e].y, r.z = this._coordinates[e].z;
  }
};
Et.prototype.getCoordinateCopy = function(t) {
  return new m(this._coordinates[t]);
};
Et.prototype.getDimension = function() {
  return this._dimension;
};
Et.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
Et.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), r = 0; r < this._coordinates.length; r++)
    e[r] = t._coordinates[r].clone();
  return new Et(e, this._dimension);
};
Et.prototype.expandEnvelope = function(t) {
  for (var e = this, r = 0; r < this._coordinates.length; r++)
    t.expandToInclude(e._coordinates[r]);
  return t;
};
Et.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), r = 0; r < this._coordinates.length; r++)
    e[r] = t._coordinates[r].copy();
  return new Et(e, this._dimension);
};
Et.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new Sr(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var r = 1; r < this._coordinates.length; r++)
      e.append(", "), e.append(t._coordinates[r]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
Et.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
Et.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
Et.prototype.interfaces_ = function() {
  return [Q, Ve];
};
Et.prototype.getClass = function() {
  return Et;
};
Mu.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(Et, Mu);
var Dr = function() {
}, Js = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
Dr.prototype.readResolve = function() {
  return Dr.instance();
};
Dr.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new Et(t);
    } else if (V(arguments[0], Q)) {
      var e = arguments[0];
      return new Et(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return i > 3 && (i = 3), i < 2 ? new Et(r) : new Et(r, i);
  }
};
Dr.prototype.interfaces_ = function() {
  return [Ci, Ve];
};
Dr.prototype.getClass = function() {
  return Dr;
};
Dr.instance = function() {
  return Dr.instanceObject;
};
Js.serialVersionUID.get = function() {
  return -4099577099607551500;
};
Js.instanceObject.get = function() {
  return new Dr();
};
Object.defineProperties(Dr, Js);
var Au = function(n) {
  function t() {
    n.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.get = function(r) {
    return this.map_.get(r) || null;
  }, t.prototype.put = function(r, i) {
    return this.map_.set(r, i), i;
  }, t.prototype.values = function() {
    for (var r = new O(), i = this.map_.values(), o = i.next(); !o.done; )
      r.add(o.value), o = i.next();
    return r;
  }, t.prototype.entrySet = function() {
    var r = new Qs();
    return this.map_.entries().forEach(function(i) {
      return r.add(i);
    }), r;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(hi), tt = function n() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = n.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof vr) {
      var t = arguments[0];
      this._modelType = t, t === n.FIXED && this.setScale(1);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      this._modelType = n.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof n) {
      var r = arguments[0];
      this._modelType = r._modelType, this._scale = r._scale;
    }
  }
}, $s = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
tt.prototype.equals = function(t) {
  if (!(t instanceof tt))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
tt.prototype.compareTo = function(t) {
  var e = t, r = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
  return new gr(r).compareTo(new gr(i));
};
tt.prototype.getScale = function() {
  return this._scale;
};
tt.prototype.isFloating = function() {
  return this._modelType === tt.FLOATING || this._modelType === tt.FLOATING_SINGLE;
};
tt.prototype.getType = function() {
  return this._modelType;
};
tt.prototype.toString = function() {
  var t = "UNKNOWN";
  return this._modelType === tt.FLOATING ? t = "Floating" : this._modelType === tt.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === tt.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
};
tt.prototype.makePrecise = function() {
  if (typeof arguments[0] == "number") {
    var t = arguments[0];
    if (U.isNaN(t))
      return t;
    if (this._modelType === tt.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === tt.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof m) {
    var r = arguments[0];
    if (this._modelType === tt.FLOATING)
      return null;
    r.x = this.makePrecise(r.x), r.y = this.makePrecise(r.y);
  }
};
tt.prototype.getMaximumSignificantDigits = function() {
  var t = 16;
  return this._modelType === tt.FLOATING ? t = 16 : this._modelType === tt.FLOATING_SINGLE ? t = 6 : this._modelType === tt.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
};
tt.prototype.setScale = function(t) {
  this._scale = Math.abs(t);
};
tt.prototype.interfaces_ = function() {
  return [Ve, ze];
};
tt.prototype.getClass = function() {
  return tt;
};
tt.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
$s.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
$s.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties(tt, $s);
var vr = function n(t) {
  this._name = t || null, n.nameToTypeMap.put(t, this);
}, ta = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
vr.prototype.readResolve = function() {
  return vr.nameToTypeMap.get(this._name);
};
vr.prototype.toString = function() {
  return this._name;
};
vr.prototype.interfaces_ = function() {
  return [Ve];
};
vr.prototype.getClass = function() {
  return vr;
};
ta.serialVersionUID.get = function() {
  return -552860263173159e4;
};
ta.nameToTypeMap.get = function() {
  return new Au();
};
Object.defineProperties(vr, ta);
tt.Type = vr;
tt.FIXED = new vr("FIXED");
tt.FLOATING = new vr("FLOATING");
tt.FLOATING_SINGLE = new vr("FLOATING SINGLE");
var W = function n() {
  this._precisionModel = new tt(), this._SRID = 0, this._coordinateSequenceFactory = n.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? V(arguments[0], Ci) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof tt && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, Fu = { serialVersionUID: { configurable: !0 } };
W.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new m(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new m(t.getMinX(), t.getMinY()), new m(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new m(t.getMinX(), t.getMinY()), new m(t.getMinX(), t.getMaxY()), new m(t.getMaxX(), t.getMaxY()), new m(t.getMaxX(), t.getMinY()), new m(t.getMinX(), t.getMinY())]), null);
};
W.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new mt(this.getCoordinateSequenceFactory().create(t), this);
    if (V(t, Q))
      return new mt(t, this);
  } else
    return new mt(this.getCoordinateSequenceFactory().create([]), this);
};
W.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new Dn(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Dn(t, this);
  }
};
W.prototype.buildGeometry = function(t) {
  for (var e = null, r = !1, i = !1, o = t.iterator(); o.hasNext(); ) {
    var s = o.next(), a = s.getClass();
    e === null && (e = a), a !== e && (r = !0), s.isGeometryCollectionOrDerived() && (i = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (r || i)
    return this.createGeometryCollection(W.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof At)
      return this.createMultiPolygon(W.toPolygonArray(t));
    if (u instanceof mt)
      return this.createMultiLineString(W.toLineStringArray(t));
    if (u instanceof ye)
      return this.createMultiPoint(W.toPointArray(t));
    X.shouldNeverReachHere("Unhandled class: " + u.getClass().getName());
  }
  return u;
};
W.prototype.createMultiPointFromCoords = function(t) {
  return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
};
W.prototype.createPoint = function() {
  if (arguments.length === 0)
    return this.createPoint(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof m) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (V(arguments[0], Q)) {
      var e = arguments[0];
      return new ye(e, this);
    }
  }
};
W.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
W.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new At(null, null, this);
  if (arguments.length === 1) {
    if (V(arguments[0], Q)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof Tr) {
      var r = arguments[0];
      return this.createPolygon(r, null);
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    return new At(i, o, this);
  }
};
W.prototype.getSRID = function() {
  return this._SRID;
};
W.prototype.createGeometryCollection = function() {
  if (arguments.length === 0)
    return new ae(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new ae(t, this);
  }
};
W.prototype.createGeometry = function(t) {
  var e = new Be(this);
  return e.edit(t, {
    edit: function() {
      if (arguments.length === 2) {
        var r = arguments[0];
        return this._coordinateSequenceFactory.create(r);
      }
    }
  });
};
W.prototype.getPrecisionModel = function() {
  return this._precisionModel;
};
W.prototype.createLinearRing = function() {
  if (arguments.length === 0)
    return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
    } else if (V(arguments[0], Q)) {
      var e = arguments[0];
      return new Tr(e, this);
    }
  }
};
W.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new Pr(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Pr(t, this);
  }
};
W.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new bi(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new bi(e, this);
    } else if (arguments[0] instanceof Array) {
      var r = arguments[0];
      return this.createMultiPoint(r !== null ? this.getCoordinateSequenceFactory().create(r) : null);
    } else if (V(arguments[0], Q)) {
      var i = arguments[0];
      if (i === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var o = new Array(i.size()).fill(null), s = 0; s < i.size(); s++) {
        var a = t.getCoordinateSequenceFactory().create(1, i.getDimension());
        Nt.copy(i, s, a, 0, 1), o[s] = t.createPoint(a);
      }
      return this.createMultiPoint(o);
    }
  }
};
W.prototype.interfaces_ = function() {
  return [Ve];
};
W.prototype.getClass = function() {
  return W;
};
W.toMultiPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toGeometryArray = function(t) {
  if (t === null)
    return null;
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.getDefaultCoordinateSequenceFactory = function() {
  return Dr.instance();
};
W.toMultiLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toMultiPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toLinearRingArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.createPointFromInternalCoord = function(t, e) {
  return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
};
Fu.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(W, Fu);
var Of = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], us = function(t) {
  this.geometryFactory = t || new W();
};
us.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var r = e.type;
  if (!ur[r])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return Of.indexOf(r) !== -1 ? ur[r].apply(this, [e.coordinates]) : r === "GeometryCollection" ? ur[r].apply(this, [e.geometries]) : ur[r].apply(this, [e]);
};
us.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!Wr[e])
    throw new Error("Geometry is not supported");
  return Wr[e].apply(this, [t]);
};
var ur = {
  /**
   * Parse a GeoJSON Feature object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} Feature with geometry/bbox converted to JSTS Geometries.
   */
  Feature: function(n) {
    var t = {};
    for (var e in n)
      t[e] = n[e];
    if (n.geometry) {
      var r = n.geometry.type;
      if (!ur[r])
        throw new Error("Unknown GeoJSON type: " + n.type);
      t.geometry = this.read(n.geometry);
    }
    return n.bbox && (t.bbox = ur.bbox.apply(this, [n.bbox])), t;
  },
  /**
   * Parse a GeoJSON FeatureCollection object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} FeatureCollection with geometry/bbox converted to JSTS Geometries.
   */
  FeatureCollection: function(n) {
    var t = this, e = {};
    if (n.features) {
      e.features = [];
      for (var r = 0; r < n.features.length; ++r)
        e.features.push(t.read(n.features[r]));
    }
    return n.bbox && (e.bbox = this.parse.bbox.apply(this, [n.bbox])), e;
  },
  /**
   * Convert the ordinates in an array to an array of Coordinates
   *
   * @param {Array}
   *          array Array with {Number}s.
   *
   * @return {Array} Array with Coordinates.
   */
  coordinates: function(n) {
    for (var t = [], e = 0; e < n.length; ++e) {
      var r = n[e];
      t.push(new m(r[0], r[1]));
    }
    return t;
  },
  /**
   * Convert the bbox to a LinearRing
   *
   * @param {Array}
   *          array Array with [xMin, yMin, xMax, yMax].
   *
   * @return {Array} Array with Coordinates.
   */
  bbox: function(n) {
    return this.geometryFactory.createLinearRing([
      new m(n[0], n[1]),
      new m(n[2], n[1]),
      new m(n[2], n[3]),
      new m(n[0], n[3]),
      new m(n[0], n[1])
    ]);
  },
  /**
   * Convert an Array with ordinates to a Point
   *
   * @param {Array}
   *          array Array with ordinates.
   *
   * @return {Point} Point.
   */
  Point: function(n) {
    var t = new m(n[0], n[1]);
    return this.geometryFactory.createPoint(t);
  },
  /**
   * Convert an Array with coordinates to a MultiPoint
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiPoint} MultiPoint.
   */
  MultiPoint: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r)
      e.push(ur.Point.apply(t, [n[r]]));
    return this.geometryFactory.createMultiPoint(e);
  },
  /**
   * Convert an Array with coordinates to a LineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {LineString} LineString.
   */
  LineString: function(n) {
    var t = ur.coordinates.apply(this, [n]);
    return this.geometryFactory.createLineString(t);
  },
  /**
   * Convert an Array with coordinates to a MultiLineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiLineString} MultiLineString.
   */
  MultiLineString: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r)
      e.push(ur.LineString.apply(t, [n[r]]));
    return this.geometryFactory.createMultiLineString(e);
  },
  /**
   * Convert an Array to a Polygon
   *
   * @param {Array}
   *          array Array with shell and holes.
   *
   * @return {Polygon} Polygon.
   */
  Polygon: function(n) {
    for (var t = this, e = ur.coordinates.apply(this, [n[0]]), r = this.geometryFactory.createLinearRing(e), i = [], o = 1; o < n.length; ++o) {
      var s = n[o], a = ur.coordinates.apply(t, [s]), u = t.geometryFactory.createLinearRing(a);
      i.push(u);
    }
    return this.geometryFactory.createPolygon(r, i);
  },
  /**
   * Convert an Array to a MultiPolygon
   *
   * @param {Array}
   *          array Array of arrays with shell and rings.
   *
   * @return {MultiPolygon} MultiPolygon.
   */
  MultiPolygon: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r) {
      var i = n[r];
      e.push(ur.Polygon.apply(t, [i]));
    }
    return this.geometryFactory.createMultiPolygon(e);
  },
  /**
   * Convert an Array to a GeometryCollection
   *
   * @param {Array}
   *          array Array of GeoJSON geometries.
   *
   * @return {GeometryCollection} GeometryCollection.
   */
  GeometryCollection: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r) {
      var i = n[r];
      e.push(t.read(i));
    }
    return this.geometryFactory.createGeometryCollection(e);
  }
}, Wr = {
  /**
   * Convert a Coordinate to an Array
   *
   * @param {Coordinate}
   *          coordinate Coordinate to convert.
   *
   * @return {Array} Array of ordinates.
   */
  coordinate: function(n) {
    return [n.x, n.y];
  },
  /**
   * Convert a Point to a GeoJSON object
   *
   * @param {Point}
   *          point Point to convert.
   *
   * @return {Array} Array of 2 ordinates (paired to a coordinate).
   */
  Point: function(n) {
    var t = Wr.coordinate.apply(this, [n.getCoordinate()]);
    return {
      type: "Point",
      coordinates: t
    };
  },
  /**
   * Convert a MultiPoint to a GeoJSON object
   *
   * @param {MultiPoint}
   *          multipoint MultiPoint to convert.
   *
   * @return {Array} Array of coordinates.
   */
  MultiPoint: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = Wr.Point.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPoint",
      coordinates: e
    };
  },
  /**
   * Convert a LineString to a GeoJSON object
   *
   * @param {LineString}
   *          linestring LineString to convert.
   *
   * @return {Array} Array of coordinates.
   */
  LineString: function(n) {
    for (var t = this, e = [], r = n.getCoordinates(), i = 0; i < r.length; ++i) {
      var o = r[i];
      e.push(Wr.coordinate.apply(t, [o]));
    }
    return {
      type: "LineString",
      coordinates: e
    };
  },
  /**
   * Convert a MultiLineString to a GeoJSON object
   *
   * @param {MultiLineString}
   *          multilinestring MultiLineString to convert.
   *
   * @return {Array} Array of Array of coordinates.
   */
  MultiLineString: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = Wr.LineString.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiLineString",
      coordinates: e
    };
  },
  /**
   * Convert a Polygon to a GeoJSON object
   *
   * @param {Polygon}
   *          polygon Polygon to convert.
   *
   * @return {Array} Array with shell, holes.
   */
  Polygon: function(n) {
    var t = this, e = [], r = Wr.LineString.apply(this, [n._shell]);
    e.push(r.coordinates);
    for (var i = 0; i < n._holes.length; ++i) {
      var o = n._holes[i], s = Wr.LineString.apply(t, [o]);
      e.push(s.coordinates);
    }
    return {
      type: "Polygon",
      coordinates: e
    };
  },
  /**
   * Convert a MultiPolygon to a GeoJSON object
   *
   * @param {MultiPolygon}
   *          multipolygon MultiPolygon to convert.
   *
   * @return {Array} Array of polygons.
   */
  MultiPolygon: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = Wr.Polygon.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPolygon",
      coordinates: e
    };
  },
  /**
   * Convert a GeometryCollection to a GeoJSON object
   *
   * @param {GeometryCollection}
   *          collection GeometryCollection to convert.
   *
   * @return {Array} Array of geometries.
   */
  GeometryCollection: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = i.getGeometryType();
      e.push(Wr[o].apply(t, [i]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, ea = function(t) {
  this.geometryFactory = t || new W(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new us(this.geometryFactory);
};
ea.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === tt.FIXED && this.reducePrecision(e), e;
};
ea.prototype.reducePrecision = function(t) {
  var e = this, r, i;
  if (t.coordinate)
    this.precisionModel.makePrecise(t.coordinate);
  else if (t.points)
    for (r = 0, i = t.points.length; r < i; r++)
      e.precisionModel.makePrecise(t.points[r]);
  else if (t.geometries)
    for (r = 0, i = t.geometries.length; r < i; r++)
      e.reducePrecision(t.geometries[r]);
};
var ku = function() {
  this.parser = new us(this.geometryFactory);
};
ku.prototype.write = function(t) {
  return this.parser.write(t);
};
var P = function() {
}, ls = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
P.prototype.interfaces_ = function() {
  return [];
};
P.prototype.getClass = function() {
  return P;
};
P.opposite = function(t) {
  return t === P.LEFT ? P.RIGHT : t === P.RIGHT ? P.LEFT : t;
};
ls.ON.get = function() {
  return 0;
};
ls.LEFT.get = function() {
  return 1;
};
ls.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(P, ls);
function cs(n) {
  this.message = n || "";
}
cs.prototype = new Error();
cs.prototype.name = "EmptyStackException";
function xr() {
  this.array_ = [];
}
xr.prototype = new He();
xr.prototype.add = function(n) {
  return this.array_.push(n), !0;
};
xr.prototype.get = function(n) {
  if (n < 0 || n >= this.size())
    throw new Error();
  return this.array_[n];
};
xr.prototype.push = function(n) {
  return this.array_.push(n), n;
};
xr.prototype.pop = function(n) {
  if (this.array_.length === 0)
    throw new cs();
  return this.array_.pop();
};
xr.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new cs();
  return this.array_[this.array_.length - 1];
};
xr.prototype.empty = function() {
  return this.array_.length === 0;
};
xr.prototype.isEmpty = function() {
  return this.empty();
};
xr.prototype.search = function(n) {
  return this.array_.indexOf(n);
};
xr.prototype.size = function() {
  return this.array_.length;
};
xr.prototype.toArray = function() {
  for (var n = this, t = [], e = 0, r = this.array_.length; e < r; e++)
    t.push(n.array_[e]);
  return t;
};
var mr = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
mr.prototype.getCoordinate = function() {
  return this._minCoord;
};
mr.prototype.getRightmostSide = function(t, e) {
  var r = this.getRightmostSideOfSegment(t, e);
  return r < 0 && (r = this.getRightmostSideOfSegment(t, e - 1)), r < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), r;
};
mr.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  X.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], r = t[this._minIndex + 1], i = M.computeOrientation(this._minCoord, r, e), o = !1;
  (e.y < this._minCoord.y && r.y < this._minCoord.y && i === M.COUNTERCLOCKWISE || e.y > this._minCoord.y && r.y > this._minCoord.y && i === M.CLOCKWISE) && (o = !0), o && (this._minIndex = this._minIndex - 1);
};
mr.prototype.getRightmostSideOfSegment = function(t, e) {
  var r = t.getEdge(), i = r.getCoordinates();
  if (e < 0 || e + 1 >= i.length || i[e].y === i[e + 1].y)
    return -1;
  var o = P.LEFT;
  return i[e].y < i[e + 1].y && (o = P.RIGHT), o;
};
mr.prototype.getEdge = function() {
  return this._orientedDe;
};
mr.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, r = t.getEdge().getCoordinates(), i = 0; i < r.length - 1; i++)
    (e._minCoord === null || r[i].x > e._minCoord.x) && (e._minDe = t, e._minIndex = i, e._minCoord = r[i]);
};
mr.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
mr.prototype.findEdge = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.isForward() && e.checkForRightmostCoordinate(i);
  }
  X.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var o = this.getRightmostSide(this._minDe, this._minIndex);
  o === P.LEFT && (this._orientedDe = this._minDe.getSym());
};
mr.prototype.interfaces_ = function() {
  return [];
};
mr.prototype.getClass = function() {
  return mr;
};
var $r = function(n) {
  function t(e, r) {
    n.call(this, t.msgWithCoord(e, r)), this.pt = r ? new m(r) : null, this.name = "TopologyException";
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getCoordinate = function() {
    return this.pt;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.msgWithCoord = function(r, i) {
    return i ? r : r + " [ " + i + " ]";
  }, t;
}(Zr), fs = function() {
  this.array_ = [];
};
fs.prototype.addLast = function(t) {
  this.array_.push(t);
};
fs.prototype.removeFirst = function() {
  return this.array_.shift();
};
fs.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var ue = function() {
  this._finder = null, this._dirEdgeList = new O(), this._nodes = new O(), this._rightMostCoord = null, this._env = null, this._finder = new mr();
};
ue.prototype.clearVisitedEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.setVisited(!1);
  }
};
ue.prototype.getRightmostCoordinate = function() {
  return this._rightMostCoord;
};
ue.prototype.computeNodeDepth = function(t) {
  for (var e = this, r = null, i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isVisited() || o.getSym().isVisited()) {
      r = o;
      break;
    }
  }
  if (r === null)
    throw new $r("unable to find edge to compute depths at " + t.getCoordinate());
  t.getEdges().computeDepths(r);
  for (var s = t.getEdges().iterator(); s.hasNext(); ) {
    var a = s.next();
    a.setVisited(!0), e.copySymDepths(a);
  }
};
ue.prototype.computeDepth = function(t) {
  this.clearVisitedEdges();
  var e = this._finder.getEdge();
  e.setEdgeDepths(P.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
};
ue.prototype.create = function(t) {
  this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
};
ue.prototype.findResultEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getDepth(P.RIGHT) >= 1 && e.getDepth(P.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
  }
};
ue.prototype.computeDepths = function(t) {
  var e = this, r = new Qs(), i = new fs(), o = t.getNode();
  for (i.addLast(o), r.add(o), t.setVisited(!0); !i.isEmpty(); ) {
    var s = i.removeFirst();
    r.add(s), e.computeNodeDepth(s);
    for (var a = s.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var c = l.getNode();
        r.contains(c) || (i.addLast(c), r.add(c));
      }
    }
  }
};
ue.prototype.compareTo = function(t) {
  var e = t;
  return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
};
ue.prototype.getEnvelope = function() {
  if (this._env === null) {
    for (var t = new F(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var r = e.next(), i = r.getEdge().getCoordinates(), o = 0; o < i.length - 1; o++)
        t.expandToInclude(i[o]);
    this._env = t;
  }
  return this._env;
};
ue.prototype.addReachable = function(t) {
  var e = this, r = new xr();
  for (r.add(t); !r.empty(); ) {
    var i = r.pop();
    e.add(i, r);
  }
};
ue.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(P.LEFT, t.getDepth(P.RIGHT)), e.setDepth(P.RIGHT, t.getDepth(P.LEFT));
};
ue.prototype.add = function(t, e) {
  var r = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    r._dirEdgeList.add(o);
    var s = o.getSym(), a = s.getNode();
    a.isVisited() || e.push(a);
  }
};
ue.prototype.getNodes = function() {
  return this._nodes;
};
ue.prototype.getDirectedEdges = function() {
  return this._dirEdgeList;
};
ue.prototype.interfaces_ = function() {
  return [ze];
};
ue.prototype.getClass = function() {
  return ue;
};
var ct = function n() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var r = arguments[0];
      this.init(1), this.location[P.ON] = r;
    } else if (arguments[0] instanceof n) {
      var i = arguments[0];
      if (this.init(i.location.length), i !== null)
        for (var o = 0; o < this.location.length; o++)
          t.location[o] = i.location[o];
    }
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    this.init(3), this.location[P.ON] = s, this.location[P.LEFT] = a, this.location[P.RIGHT] = u;
  }
};
ct.prototype.setAllLocations = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    e.location[r] = t;
};
ct.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== _.NONE)
      return !1;
  return !0;
};
ct.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    e.location[r] === _.NONE && (e.location[r] = t);
};
ct.prototype.isLine = function() {
  return this.location.length === 1;
};
ct.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var r = new Array(3).fill(null);
    r[P.ON] = this.location[P.ON], r[P.LEFT] = _.NONE, r[P.RIGHT] = _.NONE, this.location = r;
  }
  for (var i = 0; i < this.location.length; i++)
    e.location[i] === _.NONE && i < t.location.length && (e.location[i] = t.location[i]);
};
ct.prototype.getLocations = function() {
  return this.location;
};
ct.prototype.flip = function() {
  if (this.location.length <= 1)
    return null;
  var t = this.location[P.LEFT];
  this.location[P.LEFT] = this.location[P.RIGHT], this.location[P.RIGHT] = t;
};
ct.prototype.toString = function() {
  var t = new Sr();
  return this.location.length > 1 && t.append(_.toLocationSymbol(this.location[P.LEFT])), t.append(_.toLocationSymbol(this.location[P.ON])), this.location.length > 1 && t.append(_.toLocationSymbol(this.location[P.RIGHT])), t.toString();
};
ct.prototype.setLocations = function(t, e, r) {
  this.location[P.ON] = t, this.location[P.LEFT] = e, this.location[P.RIGHT] = r;
};
ct.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : _.NONE;
};
ct.prototype.isArea = function() {
  return this.location.length > 1;
};
ct.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === _.NONE)
      return !0;
  return !1;
};
ct.prototype.setLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setLocation(P.ON, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this.location[e] = r;
  }
};
ct.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(_.NONE);
};
ct.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
ct.prototype.allPositionsEqual = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    if (e.location[r] !== t)
      return !1;
  return !0;
};
ct.prototype.interfaces_ = function() {
  return [];
};
ct.prototype.getClass = function() {
  return ct;
};
var nt = function n() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new ct(t), this.elt[1] = new ct(t);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.elt[0] = new ct(e.elt[0]), this.elt[1] = new ct(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.elt[0] = new ct(_.NONE), this.elt[1] = new ct(_.NONE), this.elt[r].setLocation(i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    this.elt[0] = new ct(o, s, a), this.elt[1] = new ct(o, s, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], c = arguments[2], f = arguments[3];
    this.elt[0] = new ct(_.NONE, _.NONE, _.NONE), this.elt[1] = new ct(_.NONE, _.NONE, _.NONE), this.elt[u].setLocations(l, c, f);
  }
};
nt.prototype.getGeometryCount = function() {
  var t = 0;
  return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
};
nt.prototype.setAllLocations = function(t, e) {
  this.elt[t].setAllLocations(e);
};
nt.prototype.isNull = function(t) {
  return this.elt[t].isNull();
};
nt.prototype.setAllLocationsIfNull = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this.elt[e].setAllLocationsIfNull(r);
  }
};
nt.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
nt.prototype.merge = function(t) {
  for (var e = this, r = 0; r < 2; r++)
    e.elt[r] === null && t.elt[r] !== null ? e.elt[r] = new ct(t.elt[r]) : e.elt[r].merge(t.elt[r]);
};
nt.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
nt.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(P.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return this.elt[e].get(r);
  }
};
nt.prototype.toString = function() {
  var t = new Sr();
  return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
};
nt.prototype.isArea = function() {
  if (arguments.length === 0)
    return this.elt[0].isArea() || this.elt[1].isArea();
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].isArea();
  }
};
nt.prototype.isAnyNull = function(t) {
  return this.elt[t].isAnyNull();
};
nt.prototype.setLocation = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.elt[t].setLocation(P.ON, e);
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this.elt[r].setLocation(i, o);
  }
};
nt.prototype.isEqualOnSide = function(t, e) {
  return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
};
nt.prototype.allPositionsEqual = function(t, e) {
  return this.elt[t].allPositionsEqual(e);
};
nt.prototype.toLine = function(t) {
  this.elt[t].isArea() && (this.elt[t] = new ct(this.elt[t].location[0]));
};
nt.prototype.interfaces_ = function() {
  return [];
};
nt.prototype.getClass = function() {
  return nt;
};
nt.toLineLabel = function(t) {
  for (var e = new nt(_.NONE), r = 0; r < 2; r++)
    e.setLocation(r, t.getLocation(r));
  return e;
};
var Rt = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new O(), this._pts = new O(), this._label = new nt(_.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new O(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
Rt.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), r = 0; r < this._pts.size(); r++)
    e[r] = t._pts.get(r);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = M.isCCW(this._ring.getCoordinates());
};
Rt.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
Rt.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var r = t, i = !0;
  do {
    if (r === null)
      throw new $r("Found null DirectedEdge");
    if (r.getEdgeRing() === e)
      throw new $r("Directed Edge visited twice during ring-building at " + r.getCoordinate());
    e._edges.add(r);
    var o = r.getLabel();
    X.isTrue(o.isArea()), e.mergeLabel(o), e.addPoints(r.getEdge(), r.isForward(), i), i = !1, e.setEdgeRing(r, e), r = e.getNext(r);
  } while (r !== this._startDe);
};
Rt.prototype.getLinearRing = function() {
  return this._ring;
};
Rt.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
Rt.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var r = e.getNode(), i = r.getEdges().getOutgoingDegree(t);
    i > t._maxNodeDegree && (t._maxNodeDegree = i), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
Rt.prototype.addPoints = function(t, e, r) {
  var i = this, o = t.getCoordinates();
  if (e) {
    var s = 1;
    r && (s = 0);
    for (var a = s; a < o.length; a++)
      i._pts.add(o[a]);
  } else {
    var u = o.length - 2;
    r && (u = o.length - 1);
    for (var l = u; l >= 0; l--)
      i._pts.add(o[l]);
  }
};
Rt.prototype.isHole = function() {
  return this._isHole;
};
Rt.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
Rt.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), r = e.getEnvelopeInternal();
  if (!r.contains(t) || !M.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var i = this._holes.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.containsPoint(t))
      return !1;
  }
  return !0;
};
Rt.prototype.addHole = function(t) {
  this._holes.add(t);
};
Rt.prototype.isShell = function() {
  return this._shell === null;
};
Rt.prototype.getLabel = function() {
  return this._label;
};
Rt.prototype.getEdges = function() {
  return this._edges;
};
Rt.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
Rt.prototype.getShell = function() {
  return this._shell;
};
Rt.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = e.getLocation(r, P.RIGHT);
    if (i === _.NONE)
      return null;
    if (this._label.getLocation(r) === _.NONE)
      return this._label.setLocation(r, i), null;
  }
};
Rt.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
Rt.prototype.toPolygon = function(t) {
  for (var e = this, r = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++)
    r[i] = e._holes.get(i).getLinearRing();
  var o = t.createPolygon(this.getLinearRing(), r);
  return o;
};
Rt.prototype.interfaces_ = function() {
  return [];
};
Rt.prototype.getClass = function() {
  return Rt;
};
var Tf = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.setEdgeRing = function(r, i) {
    r.setMinEdgeRing(i);
  }, t.prototype.getNext = function(r) {
    return r.getNextMin();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Rt), Df = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var r = this, i = new O(), o = this._startDe;
    do {
      if (o.getMinEdgeRing() === null) {
        var s = new Tf(o, r._geometryFactory);
        i.add(s);
      }
      o = o.getNext();
    } while (o !== this._startDe);
    return i;
  }, t.prototype.setEdgeRing = function(r, i) {
    r.setEdgeRing(i);
  }, t.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
    var r = this, i = this._startDe;
    do {
      var o = i.getNode();
      o.getEdges().linkMinimalDirectedEdges(r), i = i.getNext();
    } while (i !== this._startDe);
  }, t.prototype.getNext = function(r) {
    return r.getNext();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Rt), Pe = function() {
  if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._label = t;
    }
  }
};
Pe.prototype.setVisited = function(t) {
  this._isVisited = t;
};
Pe.prototype.setInResult = function(t) {
  this._isInResult = t;
};
Pe.prototype.isCovered = function() {
  return this._isCovered;
};
Pe.prototype.isCoveredSet = function() {
  return this._isCoveredSet;
};
Pe.prototype.setLabel = function(t) {
  this._label = t;
};
Pe.prototype.getLabel = function() {
  return this._label;
};
Pe.prototype.setCovered = function(t) {
  this._isCovered = t, this._isCoveredSet = !0;
};
Pe.prototype.updateIM = function(t) {
  X.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
};
Pe.prototype.isInResult = function() {
  return this._isInResult;
};
Pe.prototype.isVisited = function() {
  return this._isVisited;
};
Pe.prototype.interfaces_ = function() {
  return [];
};
Pe.prototype.getClass = function() {
  return Pe;
};
var hs = function(n) {
  function t() {
    n.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], r = arguments[1];
    this._coord = e, this._edges = r, this._label = new nt(0, _.NONE);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isIncidentEdgeInResult = function() {
    for (var r = this.getEdges().getEdges().iterator(); r.hasNext(); ) {
      var i = r.next();
      if (i.getEdge().isInResult())
        return !0;
    }
    return !1;
  }, t.prototype.isIsolated = function() {
    return this._label.getGeometryCount() === 1;
  }, t.prototype.getCoordinate = function() {
    return this._coord;
  }, t.prototype.print = function(r) {
    r.println("node " + this._coord + " lbl: " + this._label);
  }, t.prototype.computeIM = function(r) {
  }, t.prototype.computeMergedLocation = function(r, i) {
    var o = _.NONE;
    if (o = this._label.getLocation(i), !r.isNull(i)) {
      var s = r.getLocation(i);
      o !== _.BOUNDARY && (o = s);
    }
    return o;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      this._label === null ? this._label = new nt(r, i) : this._label.setLocation(r, i);
    } else
      return n.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var r = this;
    if (arguments[0] instanceof t) {
      var i = arguments[0];
      this.mergeLabel(i._label);
    } else if (arguments[0] instanceof nt)
      for (var o = arguments[0], s = 0; s < 2; s++) {
        var a = r.computeMergedLocation(o, s), u = r._label.getLocation(s);
        u === _.NONE && r._label.setLocation(s, a);
      }
  }, t.prototype.add = function(r) {
    this._edges.insert(r), r.setNode(this);
  }, t.prototype.setLabelBoundary = function(r) {
    if (this._label === null)
      return null;
    var i = _.NONE;
    this._label !== null && (i = this._label.getLocation(r));
    var o = null;
    switch (i) {
      case _.BOUNDARY:
        o = _.INTERIOR;
        break;
      case _.INTERIOR:
        o = _.BOUNDARY;
        break;
      default:
        o = _.BOUNDARY;
        break;
    }
    this._label.setLocation(r, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Pe), yr = function() {
  this.nodeMap = new Jt(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
yr.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
yr.prototype.addNode = function() {
  if (arguments[0] instanceof m) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof hs) {
    var r = arguments[0], i = this.nodeMap.get(r.getCoordinate());
    return i === null ? (this.nodeMap.put(r.getCoordinate(), r), r) : (i.mergeLabel(r), i);
  }
};
yr.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
yr.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
yr.prototype.values = function() {
  return this.nodeMap.values();
};
yr.prototype.getBoundaryNodes = function(t) {
  for (var e = new O(), r = this.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.getLabel().getLocation(t) === _.BOUNDARY && e.add(i);
  }
  return e;
};
yr.prototype.add = function(t) {
  var e = t.getCoordinate(), r = this.addNode(e);
  r.add(t);
};
yr.prototype.interfaces_ = function() {
  return [];
};
yr.prototype.getClass = function() {
  return yr;
};
var st = function() {
}, Io = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
st.prototype.interfaces_ = function() {
  return [];
};
st.prototype.getClass = function() {
  return st;
};
st.isNorthern = function(t) {
  return t === st.NE || t === st.NW;
};
st.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var r = (t - e + 4) % 4;
  return r === 2;
};
st.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var r = (t - e + 4) % 4;
  if (r === 2)
    return -1;
  var i = t < e ? t : e, o = t > e ? t : e;
  return i === 0 && o === 3 ? 3 : i;
};
st.isInHalfPlane = function(t, e) {
  return e === st.SE ? t === st.SE || t === st.SW : t === e || t === e + 1;
};
st.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new gt("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? st.NE : st.SE : e >= 0 ? st.NW : st.SW;
  } else if (arguments[0] instanceof m && arguments[1] instanceof m) {
    var r = arguments[0], i = arguments[1];
    if (i.x === r.x && i.y === r.y)
      throw new gt("Cannot compute the quadrant for two identical points " + r);
    return i.x >= r.x ? i.y >= r.y ? st.NE : st.SE : i.y >= r.y ? st.NW : st.SW;
  }
};
Io.NE.get = function() {
  return 0;
};
Io.NW.get = function() {
  return 1;
};
Io.SW.get = function() {
  return 2;
};
Io.SE.get = function() {
  return 3;
};
Object.defineProperties(st, Io);
var $t = function() {
  if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
    var t = arguments[0];
    this._edge = t;
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = null;
    this._edge = e, this.init(r, i), this._label = o;
  } else if (arguments.length === 4) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = arguments[3];
    this._edge = s, this.init(a, u), this._label = l;
  }
};
$t.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : M.computeOrientation(t._p0, t._p1, this._p1);
};
$t.prototype.getDy = function() {
  return this._dy;
};
$t.prototype.getCoordinate = function() {
  return this._p0;
};
$t.prototype.setNode = function(t) {
  this._node = t;
};
$t.prototype.print = function(t) {
  var e = Math.atan2(this._dy, this._dx), r = this.getClass().getName(), i = r.lastIndexOf("."), o = r.substring(i + 1);
  t.print("  " + o + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
};
$t.prototype.compareTo = function(t) {
  var e = t;
  return this.compareDirection(e);
};
$t.prototype.getDirectedCoordinate = function() {
  return this._p1;
};
$t.prototype.getDx = function() {
  return this._dx;
};
$t.prototype.getLabel = function() {
  return this._label;
};
$t.prototype.getEdge = function() {
  return this._edge;
};
$t.prototype.getQuadrant = function() {
  return this._quadrant;
};
$t.prototype.getNode = function() {
  return this._node;
};
$t.prototype.toString = function() {
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), r = e.lastIndexOf("."), i = e.substring(r + 1);
  return "  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
$t.prototype.computeLabel = function(t) {
};
$t.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = st.quadrant(this._dx, this._dy), X.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
$t.prototype.interfaces_ = function() {
  return [ze];
};
$t.prototype.getClass = function() {
  return $t;
};
var zs = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    if (n.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = r, r)
      this.init(e.getCoordinate(0), e.getCoordinate(1));
    else {
      var i = e.getNumPoints() - 1;
      this.init(e.getCoordinate(i), e.getCoordinate(i - 1));
    }
    this.computeDirectedLabel();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getNextMin = function() {
    return this._nextMin;
  }, t.prototype.getDepth = function(r) {
    return this._depth[r];
  }, t.prototype.setVisited = function(r) {
    this._isVisited = r;
  }, t.prototype.computeDirectedLabel = function() {
    this._label = new nt(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(r, i) {
    if (this._depth[r] !== -999 && this._depth[r] !== i)
      throw new $r("assigned depths do not match", this.getCoordinate());
    this._depth[r] = i;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var r = this, i = !0, o = 0; o < 2; o++)
      r._label.isArea(o) && r._label.getLocation(o, P.LEFT) === _.INTERIOR && r._label.getLocation(o, P.RIGHT) === _.INTERIOR || (i = !1);
    return i;
  }, t.prototype.setNextMin = function(r) {
    this._nextMin = r;
  }, t.prototype.print = function(r) {
    n.prototype.print.call(this, r), r.print(" " + this._depth[P.LEFT] + "/" + this._depth[P.RIGHT]), r.print(" (" + this.getDepthDelta() + ")"), this._isInResult && r.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(r) {
    this._minEdgeRing = r;
  }, t.prototype.isLineEdge = function() {
    var r = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, _.EXTERIOR), o = !this._label.isArea(1) || this._label.allPositionsEqual(1, _.EXTERIOR);
    return r && i && o;
  }, t.prototype.setEdgeRing = function(r) {
    this._edgeRing = r;
  }, t.prototype.getMinEdgeRing = function() {
    return this._minEdgeRing;
  }, t.prototype.getDepthDelta = function() {
    var r = this._edge.getDepthDelta();
    return this._isForward || (r = -r), r;
  }, t.prototype.setInResult = function(r) {
    this._isInResult = r;
  }, t.prototype.getSym = function() {
    return this._sym;
  }, t.prototype.isForward = function() {
    return this._isForward;
  }, t.prototype.getEdge = function() {
    return this._edge;
  }, t.prototype.printEdge = function(r) {
    this.print(r), r.print(" "), this._isForward ? this._edge.print(r) : this._edge.printReverse(r);
  }, t.prototype.setSym = function(r) {
    this._sym = r;
  }, t.prototype.setVisitedEdge = function(r) {
    this.setVisited(r), this._sym.setVisited(r);
  }, t.prototype.setEdgeDepths = function(r, i) {
    var o = this.getEdge().getDepthDelta();
    this._isForward || (o = -o);
    var s = 1;
    r === P.LEFT && (s = -1);
    var a = P.opposite(r), u = o * s, l = i + u;
    this.setDepth(r, i), this.setDepth(a, l);
  }, t.prototype.getEdgeRing = function() {
    return this._edgeRing;
  }, t.prototype.isInResult = function() {
    return this._isInResult;
  }, t.prototype.setNext = function(r) {
    this._next = r;
  }, t.prototype.isVisited = function() {
    return this._isVisited;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.depthFactor = function(r, i) {
    return r === _.EXTERIOR && i === _.INTERIOR ? 1 : r === _.INTERIOR && i === _.EXTERIOR ? -1 : 0;
  }, t;
}($t), wi = function() {
};
wi.prototype.createNode = function(t) {
  return new hs(t, null);
};
wi.prototype.interfaces_ = function() {
  return [];
};
wi.prototype.getClass = function() {
  return wi;
};
var dt = function() {
  if (this._edges = new O(), this._nodes = null, this._edgeEndList = new O(), arguments.length === 0)
    this._nodes = new yr(new wi());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new yr(t);
  }
};
dt.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var r = 0; r < this._edges.size(); r++) {
    t.println("edge " + r + ":");
    var i = e._edges.get(r);
    i.print(t), i.eiList.print(t);
  }
};
dt.prototype.find = function(t) {
  return this._nodes.find(t);
};
dt.prototype.addNode = function() {
  if (arguments[0] instanceof hs) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof m) {
    var e = arguments[0];
    return this._nodes.addNode(e);
  }
};
dt.prototype.getNodeIterator = function() {
  return this._nodes.iterator();
};
dt.prototype.linkResultDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkResultDirectedEdges();
  }
};
dt.prototype.debugPrintln = function(t) {
  Wt.out.println(t);
};
dt.prototype.isBoundaryNode = function(t, e) {
  var r = this._nodes.find(e);
  if (r === null)
    return !1;
  var i = r.getLabel();
  return i !== null && i.getLocation(t) === _.BOUNDARY;
};
dt.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
dt.prototype.matchInSameDirection = function(t, e, r, i) {
  return t.equals(r) ? M.computeOrientation(t, e, i) === M.COLLINEAR && st.quadrant(t, e) === st.quadrant(r, i) : !1;
};
dt.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
dt.prototype.debugPrint = function(t) {
  Wt.out.print(t);
};
dt.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
dt.prototype.findEdgeInSameDirection = function(t, e) {
  for (var r = this, i = 0; i < this._edges.size(); i++) {
    var o = r._edges.get(i), s = o.getCoordinates();
    if (r.matchInSameDirection(t, e, s[0], s[1]) || r.matchInSameDirection(t, e, s[s.length - 1], s[s.length - 2]))
      return o;
  }
  return null;
};
dt.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
dt.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.getEdge() === t)
      return r;
  }
  return null;
};
dt.prototype.addEdges = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e._edges.add(i);
    var o = new zs(i, !0), s = new zs(i, !1);
    o.setSym(s), s.setSym(o), e.add(o), e.add(s);
  }
};
dt.prototype.add = function(t) {
  this._nodes.add(t), this._edgeEndList.add(t);
};
dt.prototype.getNodes = function() {
  return this._nodes.values();
};
dt.prototype.findEdge = function(t, e) {
  for (var r = this, i = 0; i < this._edges.size(); i++) {
    var o = r._edges.get(i), s = o.getCoordinates();
    if (t.equals(s[0]) && e.equals(s[1]))
      return o;
  }
  return null;
};
dt.prototype.interfaces_ = function() {
  return [];
};
dt.prototype.getClass = function() {
  return dt;
};
dt.linkResultDirectedEdges = function(t) {
  for (var e = t.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.getEdges().linkResultDirectedEdges();
  }
};
var _e = function() {
  this._geometryFactory = null, this._shellList = new O();
  var t = arguments[0];
  this._geometryFactory = t;
};
_e.prototype.sortShellsAndHoles = function(t, e, r) {
  for (var i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() ? r.add(o) : e.add(o);
  }
};
_e.prototype.computePolygons = function(t) {
  for (var e = this, r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.toPolygon(e._geometryFactory);
    r.add(s);
  }
  return r;
};
_e.prototype.placeFreeHoles = function(t, e) {
  for (var r = this, i = e.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.getShell() === null) {
      var s = r.findEdgeRingContaining(o, t);
      if (s === null)
        throw new $r("unable to assign hole to a shell", o.getCoordinate(0));
      o.setShell(s);
    }
  }
};
_e.prototype.buildMinimalEdgeRings = function(t, e, r) {
  for (var i = this, o = new O(), s = t.iterator(); s.hasNext(); ) {
    var a = s.next();
    if (a.getMaxNodeDegree() > 2) {
      a.linkDirectedEdgesForMinimalEdgeRings();
      var u = a.buildMinimalRings(), l = i.findShell(u);
      l !== null ? (i.placePolygonHoles(l, u), e.add(l)) : r.addAll(u);
    } else
      o.add(a);
  }
  return o;
};
_e.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.containsPoint(t))
      return !0;
  }
  return !1;
};
_e.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isInResult() && o.getLabel().isArea() && o.getEdgeRing() === null) {
      var s = new Df(o, e._geometryFactory);
      r.add(s), s.setInResult();
    }
  }
  return r;
};
_e.prototype.placePolygonHoles = function(t, e) {
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.isHole() && i.setShell(t);
  }
};
_e.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
_e.prototype.findEdgeRingContaining = function(t, e) {
  for (var r = t.getLinearRing(), i = r.getEnvelopeInternal(), o = r.getCoordinateN(0), s = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), f = c.getEnvelopeInternal();
    s !== null && (a = s.getLinearRing().getEnvelopeInternal());
    var h = !1;
    f.contains(i) && M.isPointInRing(o, c.getCoordinates()) && (h = !0), h && (s === null || a.contains(f)) && (s = l);
  }
  return s;
};
_e.prototype.findShell = function(t) {
  for (var e = 0, r = null, i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() || (r = o, e++);
  }
  return X.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), r;
};
_e.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    dt.linkResultDirectedEdges(r);
    var i = this.buildMaximalEdgeRings(e), o = new O(), s = this.buildMinimalEdgeRings(i, this._shellList, o);
    this.sortShellsAndHoles(s, this._shellList, o), this.placeFreeHoles(this._shellList, o);
  }
};
_e.prototype.interfaces_ = function() {
  return [];
};
_e.prototype.getClass = function() {
  return _e;
};
var Pi = function() {
};
Pi.prototype.getBounds = function() {
};
Pi.prototype.interfaces_ = function() {
  return [];
};
Pi.prototype.getClass = function() {
  return Pi;
};
var Qe = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
Qe.prototype.getItem = function() {
  return this._item;
};
Qe.prototype.getBounds = function() {
  return this._bounds;
};
Qe.prototype.interfaces_ = function() {
  return [Pi, Ve];
};
Qe.prototype.getClass = function() {
  return Qe;
};
var tn = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new O(), this._items.add(null);
};
tn.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
tn.prototype.size = function() {
  return this._size;
};
tn.prototype.reorder = function(t) {
  for (var e = this, r = null, i = this._items.get(t); t * 2 <= this._size && (r = t * 2, r !== e._size && e._items.get(r + 1).compareTo(e._items.get(r)) < 0 && r++, e._items.get(r).compareTo(i) < 0); t = r)
    e._items.set(t, e._items.get(r));
  this._items.set(t, i);
};
tn.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
tn.prototype.isEmpty = function() {
  return this._size === 0;
};
tn.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var r = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(r / 2))) < 0; r /= 2)
    e._items.set(r, e._items.get(Math.trunc(r / 2)));
  this._items.set(r, t);
};
tn.prototype.interfaces_ = function() {
  return [];
};
tn.prototype.getClass = function() {
  return tn;
};
var gn = function() {
};
gn.prototype.visitItem = function(t) {
};
gn.prototype.interfaces_ = function() {
  return [];
};
gn.prototype.getClass = function() {
  return gn;
};
var Jn = function() {
};
Jn.prototype.insert = function(t, e) {
};
Jn.prototype.remove = function(t, e) {
};
Jn.prototype.query = function() {
};
Jn.prototype.interfaces_ = function() {
  return [];
};
Jn.prototype.getClass = function() {
  return Jn;
};
var Mt = function() {
  if (this._childBoundables = new O(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, Bu = { serialVersionUID: { configurable: !0 } };
Mt.prototype.getLevel = function() {
  return this._level;
};
Mt.prototype.size = function() {
  return this._childBoundables.size();
};
Mt.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Mt.prototype.addChildBoundable = function(t) {
  X.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Mt.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Mt.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Mt.prototype.interfaces_ = function() {
  return [Pi, Ve];
};
Mt.prototype.getClass = function() {
  return Mt;
};
Bu.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Mt, Bu);
var Ze = function() {
};
Ze.reverseOrder = function() {
  return {
    compare: function(e, r) {
      return r.compareTo(e);
    }
  };
};
Ze.min = function(t) {
  return Ze.sort(t), t.get(0);
};
Ze.sort = function(t, e) {
  var r = t.toArray();
  e ? wn.sort(r, e) : wn.sort(r);
  for (var i = t.iterator(), o = 0, s = r.length; o < s; o++)
    i.next(), i.set(r[o]);
};
Ze.singletonList = function(t) {
  var e = new O();
  return e.add(t), e;
};
var bt = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = r, this._distance = this.distance();
};
bt.prototype.expandToQueue = function(t, e) {
  var r = bt.isComposite(this._boundable1), i = bt.isComposite(this._boundable2);
  if (r && i)
    return bt.area(this._boundable1) > bt.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (r)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (i)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new gt("neither boundable is composite");
};
bt.prototype.isLeaves = function() {
  return !(bt.isComposite(this._boundable1) || bt.isComposite(this._boundable2));
};
bt.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
bt.prototype.expand = function(t, e, r, i) {
  for (var o = this, s = t.getChildBoundables(), a = s.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new bt(u, e, o._itemDistance);
    l.getDistance() < i && r.add(l);
  }
};
bt.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
bt.prototype.getDistance = function() {
  return this._distance;
};
bt.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
bt.prototype.interfaces_ = function() {
  return [ze];
};
bt.prototype.getClass = function() {
  return bt;
};
bt.area = function(t) {
  return t.getBounds().getArea();
};
bt.isComposite = function(t) {
  return t instanceof Mt;
};
var kt = function n() {
  if (this._root = null, this._built = !1, this._itemBoundables = new O(), this._nodeCapacity = null, arguments.length === 0) {
    var t = n.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    X.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, gs = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
kt.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
kt.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
kt.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      o instanceof Mt ? r += t.size(o) : o instanceof Qe && (r += 1);
    }
    return r;
  }
};
kt.prototype.removeItem = function(t, e) {
  for (var r = null, i = t.getChildBoundables().iterator(); i.hasNext(); ) {
    var o = i.next();
    o instanceof Qe && o.getItem() === e && (r = o);
  }
  return r !== null ? (t.getChildBoundables().remove(r), !0) : !1;
};
kt.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new O() : e;
  } else if (arguments.length === 1) {
    for (var r = arguments[0], i = new O(), o = r.getChildBoundables().iterator(); o.hasNext(); ) {
      var s = o.next();
      if (s instanceof Mt) {
        var a = t.itemsTree(s);
        a !== null && i.add(a);
      } else
        s instanceof Qe ? i.add(s.getItem()) : X.shouldNeverReachHere();
    }
    return i.size() <= 0 ? null : i;
  }
};
kt.prototype.insert = function(t, e) {
  X.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Qe(t, e));
};
kt.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], r = new O();
    return this.boundablesAtLevel(e, this._root, r), r;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (X.isTrue(i > -2), o.getLevel() === i)
      return s.add(o), null;
    for (var a = o.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Mt ? t.boundablesAtLevel(i, u, s) : (X.isTrue(u instanceof Qe), i === -1 && s.add(u));
    }
    return null;
  }
};
kt.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var r = new O();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, r), r;
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), i) && this.query(i, this._root, o);
  } else if (arguments.length === 3) {
    if (V(arguments[2], gn) && arguments[0] instanceof Object && arguments[1] instanceof Mt)
      for (var s = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var f = l.get(c);
        t.getIntersectsOp().intersects(f.getBounds(), s) && (f instanceof Mt ? t.query(s, f, u) : f instanceof Qe ? u.visitItem(f.getItem()) : X.shouldNeverReachHere());
      }
    else if (V(arguments[2], He) && arguments[0] instanceof Object && arguments[1] instanceof Mt)
      for (var h = arguments[0], g = arguments[1], p = arguments[2], y = g.getChildBoundables(), d = 0; d < y.size(); d++) {
        var v = y.get(d);
        t.getIntersectsOp().intersects(v.getBounds(), h) && (v instanceof Mt ? t.query(h, v, p) : v instanceof Qe ? p.add(v.getItem()) : X.shouldNeverReachHere());
      }
  }
};
kt.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
kt.prototype.getRoot = function() {
  return this.build(), this._root;
};
kt.prototype.remove = function() {
  var t = this;
  if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return this.build(), this.getIntersectsOp().intersects(this._root.getBounds(), e) ? this.remove(e, this._root, r) : !1;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = this.removeItem(o, s);
    if (a)
      return !0;
    for (var u = null, l = o.getChildBoundables().iterator(); l.hasNext(); ) {
      var c = l.next();
      if (t.getIntersectsOp().intersects(c.getBounds(), i) && c instanceof Mt && (a = t.remove(i, c, s), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && o.getChildBoundables().remove(u), a;
  }
};
kt.prototype.createHigherLevels = function(t, e) {
  X.isTrue(!t.isEmpty());
  var r = this.createParentBoundables(t, e + 1);
  return r.size() === 1 ? r.get(0) : this.createHigherLevels(r, e + 1);
};
kt.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      if (o instanceof Mt) {
        var s = t.depth(o);
        s > r && (r = s);
      }
    }
    return r + 1;
  }
};
kt.prototype.createParentBoundables = function(t, e) {
  var r = this;
  X.isTrue(!t.isEmpty());
  var i = new O();
  i.add(this.createNode(e));
  var o = new O(t);
  Ze.sort(o, this.getComparator());
  for (var s = o.iterator(); s.hasNext(); ) {
    var a = s.next();
    r.lastNode(i).getChildBoundables().size() === r.getNodeCapacity() && i.add(r.createNode(e)), r.lastNode(i).addChildBoundable(a);
  }
  return i;
};
kt.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
kt.prototype.interfaces_ = function() {
  return [Ve];
};
kt.prototype.getClass = function() {
  return kt;
};
kt.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
gs.IntersectsOp.get = function() {
  return Mf;
};
gs.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
gs.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(kt, gs);
var Mf = function() {
}, Ri = function() {
};
Ri.prototype.distance = function(t, e) {
};
Ri.prototype.interfaces_ = function() {
  return [];
};
Ri.prototype.getClass = function() {
  return Ri;
};
var Gu = function(n) {
  function t(r) {
    r = r || t.DEFAULT_NODE_CAPACITY, n.call(this, r);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(i, o) {
    var s = this;
    X.isTrue(i.length > 0);
    for (var a = new O(), u = 0; u < i.length; u++)
      a.addAll(s.createParentBoundablesFromVerticalSlice(i[u], o));
    return a;
  }, t.prototype.createNode = function(i) {
    return new Ha(i);
  }, t.prototype.size = function() {
    return arguments.length === 0 ? n.prototype.size.call(this) : n.prototype.size.apply(this, arguments);
  }, t.prototype.insert = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      if (i.isNull())
        return null;
      n.prototype.insert.call(this, i, o);
    } else
      return n.prototype.insert.apply(this, arguments);
  }, t.prototype.getIntersectsOp = function() {
    return t.intersectsOp;
  }, t.prototype.verticalSlices = function(i, o) {
    for (var s = Math.trunc(Math.ceil(i.size() / o)), a = new Array(o).fill(null), u = i.iterator(), l = 0; l < o; l++) {
      a[l] = new O();
      for (var c = 0; u.hasNext() && c < s; ) {
        var f = u.next();
        a[l].add(f), c++;
      }
    }
    return a;
  }, t.prototype.query = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return n.prototype.query.call(this, i);
    } else if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      n.prototype.query.call(this, o, s);
    } else if (arguments.length === 3) {
      if (V(arguments[2], gn) && arguments[0] instanceof Object && arguments[1] instanceof Mt) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        n.prototype.query.call(this, a, u, l);
      } else if (V(arguments[2], He) && arguments[0] instanceof Object && arguments[1] instanceof Mt) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        n.prototype.query.call(this, c, f, h);
      }
    }
  }, t.prototype.getComparator = function() {
    return t.yComparator;
  }, t.prototype.createParentBoundablesFromVerticalSlice = function(i, o) {
    return n.prototype.createParentBoundables.call(this, i, o);
  }, t.prototype.remove = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return n.prototype.remove.call(this, i, o);
    } else
      return n.prototype.remove.apply(this, arguments);
  }, t.prototype.depth = function() {
    return arguments.length === 0 ? n.prototype.depth.call(this) : n.prototype.depth.apply(this, arguments);
  }, t.prototype.createParentBoundables = function(i, o) {
    X.isTrue(!i.isEmpty());
    var s = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), a = new O(i);
    Ze.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(s))));
    return this.createParentBoundablesFromVerticalSlices(u, o);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (V(arguments[0], Ri)) {
        var i = arguments[0], o = new bt(this.getRoot(), this.getRoot(), i);
        return this.nearestNeighbour(o);
      } else if (arguments[0] instanceof bt) {
        var s = arguments[0];
        return this.nearestNeighbour(s, U.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && V(arguments[1], Ri)) {
        var a = arguments[0], u = arguments[1], l = new bt(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof bt && typeof arguments[1] == "number") {
        var c = arguments[0], f = arguments[1], h = f, g = null, p = new tn();
        for (p.add(c); !p.isEmpty() && h > 0; ) {
          var y = p.poll(), d = y.getDistance();
          if (d >= h)
            break;
          y.isLeaves() ? (h = d, g = y) : y.expandToQueue(p, h);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var v = arguments[0], C = arguments[1], I = arguments[2], N = new Qe(v, C), L = new bt(this.getRoot(), N, I);
      return this.nearestNeighbour(L)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [Jn, Ve];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(i) {
    return t.avg(i.getMinX(), i.getMaxX());
  }, t.avg = function(i, o) {
    return (i + o) / 2;
  }, t.centreY = function(i) {
    return t.avg(i.getMinY(), i.getMaxY());
  }, e.STRtreeNode.get = function() {
    return Ha;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [Ei];
      },
      compare: function(r, i) {
        return n.compareDoubles(t.centreX(r.getBounds()), t.centreX(i.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [Ei];
      },
      compare: function(r, i) {
        return n.compareDoubles(t.centreY(r.getBounds()), t.centreY(i.getBounds()));
      }
    };
  }, e.intersectsOp.get = function() {
    return {
      interfaces_: function() {
        return [n.IntersectsOp];
      },
      intersects: function(r, i) {
        return r.intersects(i);
      }
    };
  }, e.DEFAULT_NODE_CAPACITY.get = function() {
    return 10;
  }, Object.defineProperties(t, e), t;
}(kt), Ha = function(n) {
  function t() {
    var e = arguments[0];
    n.call(this, e);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var r = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      r === null ? r = new F(o.getBounds()) : r.expandToInclude(o.getBounds());
    }
    return r;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Mt), fe = function() {
};
fe.prototype.interfaces_ = function() {
  return [];
};
fe.prototype.getClass = function() {
  return fe;
};
fe.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
fe.compare = function(t, e, r) {
  if (e.equals2D(r))
    return 0;
  var i = fe.relativeSign(e.x, r.x), o = fe.relativeSign(e.y, r.y);
  switch (t) {
    case 0:
      return fe.compareValue(i, o);
    case 1:
      return fe.compareValue(o, i);
    case 2:
      return fe.compareValue(o, -i);
    case 3:
      return fe.compareValue(-i, o);
    case 4:
      return fe.compareValue(-i, -o);
    case 5:
      return fe.compareValue(-o, -i);
    case 6:
      return fe.compareValue(-o, i);
    case 7:
      return fe.compareValue(i, -o);
  }
  return X.shouldNeverReachHere("invalid octant value"), 0;
};
fe.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var pn = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
  this._segString = t, this.coord = new m(e), this.segmentIndex = r, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(r));
};
pn.prototype.getCoordinate = function() {
  return this.coord;
};
pn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
pn.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : fe.compare(this._segmentOctant, this.coord, e.coord);
};
pn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
pn.prototype.isInterior = function() {
  return this._isInterior;
};
pn.prototype.interfaces_ = function() {
  return [ze];
};
pn.prototype.getClass = function() {
  return pn;
};
var le = function() {
  this._nodeMap = new Jt(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
le.prototype.getSplitCoordinates = function() {
  var t = this, e = new Eo();
  this.addEndpoints();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next();
    t.addEdgeCoordinates(i, o, e), i = o;
  }
  return e.toCoordinateArray();
};
le.prototype.addCollapsedNodes = function() {
  var t = this, e = new O();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next().intValue();
    t.add(t._edge.getCoordinate(i), i);
  }
};
le.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
le.prototype.findCollapsesFromExistingVertices = function(t) {
  for (var e = this, r = 0; r < this._edge.size() - 2; r++) {
    var i = e._edge.getCoordinate(r), o = e._edge.getCoordinate(r + 2);
    i.equals2D(o) && t.add(new gr(r + 1));
  }
};
le.prototype.addEdgeCoordinates = function(t, e, r) {
  var i = this, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  r.add(new m(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    r.add(i._edge.getCoordinate(a));
  s && r.add(new m(e.coord));
};
le.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
le.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
le.prototype.findCollapseIndex = function(t, e, r) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var i = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || i--, i === 1 ? (r[0] = t.segmentIndex + 1, !0) : !1;
};
le.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, r = new Array(1).fill(null), i = this.iterator(), o = i.next(); i.hasNext(); ) {
    var s = i.next(), a = e.findCollapseIndex(o, s, r);
    a && t.add(new gr(r[0])), o = s;
  }
};
le.prototype.getEdge = function() {
  return this._edge;
};
le.prototype.addEndpoints = function() {
  var t = this._edge.size() - 1;
  this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
};
le.prototype.createSplitEdge = function(t, e) {
  var r = this, i = e.segmentIndex - t.segmentIndex + 2, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new m(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = r._edge.getCoordinate(l);
  return s && (a[u] = new m(e.coord)), new xt(a, this._edge.getData());
};
le.prototype.add = function(t, e) {
  var r = new pn(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(r);
  return i !== null ? (X.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(r, r), r);
};
le.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), r = t.get(0), i = r.getCoordinate(0);
  if (!i.equals2D(e[0]))
    throw new Zr("bad split edge start point at " + i);
  var o = t.get(t.size() - 1), s = o.getCoordinates(), a = s[s.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new Zr("bad split edge end point at " + a);
};
le.prototype.interfaces_ = function() {
  return [];
};
le.prototype.getClass = function() {
  return le;
};
var $n = function() {
};
$n.prototype.interfaces_ = function() {
  return [];
};
$n.prototype.getClass = function() {
  return $n;
};
$n.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new gt("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var r = Math.abs(t), i = Math.abs(e);
    return t >= 0 ? e >= 0 ? r >= i ? 0 : 1 : r >= i ? 7 : 6 : e >= 0 ? r >= i ? 3 : 2 : r >= i ? 4 : 5;
  } else if (arguments[0] instanceof m && arguments[1] instanceof m) {
    var o = arguments[0], s = arguments[1], a = s.x - o.x, u = s.y - o.y;
    if (a === 0 && u === 0)
      throw new gt("Cannot compute the octant for two identical points " + o);
    return $n.octant(a, u);
  }
};
var Mr = function() {
};
Mr.prototype.getCoordinates = function() {
};
Mr.prototype.size = function() {
};
Mr.prototype.getCoordinate = function(t) {
};
Mr.prototype.isClosed = function() {
};
Mr.prototype.setData = function(t) {
};
Mr.prototype.getData = function() {
};
Mr.prototype.interfaces_ = function() {
  return [];
};
Mr.prototype.getClass = function() {
  return Mr;
};
var co = function() {
};
co.prototype.addIntersection = function(t, e) {
};
co.prototype.interfaces_ = function() {
  return [Mr];
};
co.prototype.getClass = function() {
  return co;
};
var xt = function() {
  this._nodeList = new le(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
xt.prototype.getCoordinates = function() {
  return this._pts;
};
xt.prototype.size = function() {
  return this._pts.length;
};
xt.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
xt.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
xt.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
xt.prototype.setData = function(t) {
  this._data = t;
};
xt.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : $n.octant(t, e);
};
xt.prototype.getData = function() {
  return this._data;
};
xt.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var r = arguments[0], i = arguments[1], o = arguments[3], s = new m(r.getIntersection(o));
    this.addIntersection(s, i);
  }
};
xt.prototype.toString = function() {
  return je.toLineString(new Et(this._pts));
};
xt.prototype.getNodeList = function() {
  return this._nodeList;
};
xt.prototype.addIntersectionNode = function(t, e) {
  var r = e, i = r + 1;
  if (i < this._pts.length) {
    var o = this._pts[i];
    t.equals2D(o) && (r = i);
  }
  var s = this._nodeList.add(t, r);
  return s;
};
xt.prototype.addIntersections = function(t, e, r) {
  for (var i = this, o = 0; o < t.getIntersectionNum(); o++)
    i.addIntersection(t, e, r, o);
};
xt.prototype.interfaces_ = function() {
  return [co];
};
xt.prototype.getClass = function() {
  return xt;
};
xt.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new O();
    return xt.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var r = arguments[0], i = arguments[1], o = r.iterator(); o.hasNext(); ) {
      var s = o.next();
      s.getNodeList().addSplitEdges(i);
    }
};
var k = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new m(), this.p1 = new m();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new m(t.p0), this.p1 = new m(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = arguments[3];
    this.p0 = new m(e, r), this.p1 = new m(i, o);
  }
}, zu = { serialVersionUID: { configurable: !0 } };
k.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
k.prototype.orientationIndex = function() {
  if (arguments[0] instanceof k) {
    var t = arguments[0], e = M.orientationIndex(this.p0, this.p1, t.p0), r = M.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && r >= 0 || e <= 0 && r <= 0 ? Math.max(e, r) : 0;
  } else if (arguments[0] instanceof m) {
    var i = arguments[0];
    return M.orientationIndex(this.p0, this.p1, i);
  }
};
k.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
k.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
k.prototype.equals = function(t) {
  if (!(t instanceof k))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
k.prototype.intersection = function(t) {
  var e = new Yn();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
k.prototype.project = function() {
  if (arguments[0] instanceof m) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new m(t);
    var e = this.projectionFactor(t), r = new m();
    return r.x = this.p0.x + e * (this.p1.x - this.p0.x), r.y = this.p0.y + e * (this.p1.y - this.p0.y), r;
  } else if (arguments[0] instanceof k) {
    var i = arguments[0], o = this.projectionFactor(i.p0), s = this.projectionFactor(i.p1);
    if (o >= 1 && s >= 1 || o <= 0 && s <= 0)
      return null;
    var a = this.project(i.p0);
    o < 0 && (a = this.p0), o > 1 && (a = this.p1);
    var u = this.project(i.p1);
    return s < 0 && (u = this.p0), s > 1 && (u = this.p1), new k(a, u);
  }
};
k.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
k.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
k.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
k.prototype.distancePerpendicular = function(t) {
  return M.distancePointLinePerpendicular(t, this.p0, this.p1);
};
k.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
k.prototype.midPoint = function() {
  return k.midPoint(this.p0, this.p1);
};
k.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, r = this.p1.y - this.p0.y, i = e * e + r * r;
  if (i <= 0)
    return U.NaN;
  var o = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * r) / i;
  return o;
};
k.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var r = new Array(2).fill(null), i = U.MAX_VALUE, o = null, s = this.closestPoint(t.p0);
  i = s.distance(t.p0), r[0] = s, r[1] = t.p0;
  var a = this.closestPoint(t.p1);
  o = a.distance(t.p1), o < i && (i = o, r[0] = a, r[1] = t.p1);
  var u = t.closestPoint(this.p0);
  o = u.distance(this.p0), o < i && (i = o, r[0] = this.p0, r[1] = u);
  var l = t.closestPoint(this.p1);
  return o = l.distance(this.p1), o < i && (i = o, r[0] = this.p1, r[1] = l), r;
};
k.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var r = this.p0.distance(t), i = this.p1.distance(t);
  return r < i ? this.p0 : this.p1;
};
k.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
k.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
k.prototype.compareTo = function(t) {
  var e = t, r = this.p0.compareTo(e.p0);
  return r !== 0 ? r : this.p1.compareTo(e.p1);
};
k.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
k.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
k.prototype.lineIntersection = function(t) {
  try {
    var e = We.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (r) {
    if (!(r instanceof Vi))
      throw r;
  } finally {
  }
  return null;
};
k.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
k.prototype.pointAlongOffset = function(t, e) {
  var r = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), o = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y, a = Math.sqrt(o * o + s * s), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * o / a, l = e * s / a;
  }
  var c = r - l, f = i + u, h = new m(c, f);
  return h;
};
k.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = r.x, this.p1.y = r.y;
  }
};
k.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || U.isNaN(e)) && (e = 1), e;
};
k.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
k.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
k.prototype.distance = function() {
  if (arguments[0] instanceof k) {
    var t = arguments[0];
    return M.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof m) {
    var e = arguments[0];
    return M.distancePointLine(e, this.p0, this.p1);
  }
};
k.prototype.pointAlong = function(t) {
  var e = new m();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
k.prototype.hashCode = function() {
  var t = U.doubleToLongBits(this.p0.x);
  t ^= U.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), r = U.doubleToLongBits(this.p1.x);
  r ^= U.doubleToLongBits(this.p1.y) * 31;
  var i = Math.trunc(r) ^ Math.trunc(r >> 32);
  return e ^ i;
};
k.prototype.interfaces_ = function() {
  return [ze, Ve];
};
k.prototype.getClass = function() {
  return k;
};
k.midPoint = function(t, e) {
  return new m((t.x + e.x) / 2, (t.y + e.y) / 2);
};
zu.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(k, zu);
var fo = function() {
  this.tempEnv1 = new F(), this.tempEnv2 = new F(), this._overlapSeg1 = new k(), this._overlapSeg2 = new k();
};
fo.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), r.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
fo.prototype.interfaces_ = function() {
  return [];
};
fo.prototype.getClass = function() {
  return fo;
};
var Ee = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
  this._pts = t, this._start = e, this._end = r, this._context = i;
};
Ee.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
Ee.prototype.computeSelect = function(t, e, r, i) {
  var o = this._pts[e], s = this._pts[r];
  if (i.tempEnv1.init(o, s), r - e === 1)
    return i.select(this, e), null;
  if (!t.intersects(i.tempEnv1))
    return null;
  var a = Math.trunc((e + r) / 2);
  e < a && this.computeSelect(t, e, a, i), a < r && this.computeSelect(t, a, r, i);
};
Ee.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), r = 0, i = this._start; i <= this._end; i++)
    e[r++] = t._pts[i];
  return e;
};
Ee.prototype.computeOverlaps = function(t, e) {
  this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e);
};
Ee.prototype.setId = function(t) {
  this._id = t;
};
Ee.prototype.select = function(t, e) {
  this.computeSelect(t, this._start, this._end, e);
};
Ee.prototype.getEnvelope = function() {
  if (this._env === null) {
    var t = this._pts[this._start], e = this._pts[this._end];
    this._env = new F(t, e);
  }
  return this._env;
};
Ee.prototype.getEndIndex = function() {
  return this._end;
};
Ee.prototype.getStartIndex = function() {
  return this._start;
};
Ee.prototype.getContext = function() {
  return this._context;
};
Ee.prototype.getId = function() {
  return this._id;
};
Ee.prototype.computeOverlapsInternal = function(t, e, r, i, o, s) {
  var a = this._pts[t], u = this._pts[e], l = r._pts[i], c = r._pts[o];
  if (e - t === 1 && o - i === 1)
    return s.overlap(this, t, r, i), null;
  if (s.tempEnv1.init(a, u), s.tempEnv2.init(l, c), !s.tempEnv1.intersects(s.tempEnv2))
    return null;
  var f = Math.trunc((t + e) / 2), h = Math.trunc((i + o) / 2);
  t < f && (i < h && this.computeOverlapsInternal(t, f, r, i, h, s), h < o && this.computeOverlapsInternal(t, f, r, h, o, s)), f < e && (i < h && this.computeOverlapsInternal(f, e, r, i, h, s), h < o && this.computeOverlapsInternal(f, e, r, h, o, s));
};
Ee.prototype.interfaces_ = function() {
  return [];
};
Ee.prototype.getClass = function() {
  return Ee;
};
var hr = function() {
};
hr.prototype.interfaces_ = function() {
  return [];
};
hr.prototype.getClass = function() {
  return hr;
};
hr.getChainStartIndices = function(t) {
  var e = 0, r = new O();
  r.add(new gr(e));
  do {
    var i = hr.findChainEnd(t, e);
    r.add(new gr(i)), e = i;
  } while (e < t.length - 1);
  var o = hr.toIntArray(r);
  return o;
};
hr.findChainEnd = function(t, e) {
  for (var r = e; r < t.length - 1 && t[r].equals2D(t[r + 1]); )
    r++;
  if (r >= t.length - 1)
    return t.length - 1;
  for (var i = st.quadrant(t[r], t[r + 1]), o = e + 1; o < t.length; ) {
    if (!t[o - 1].equals2D(t[o])) {
      var s = st.quadrant(t[o - 1], t[o]);
      if (s !== i)
        break;
    }
    o++;
  }
  return o - 1;
};
hr.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return hr.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], r = arguments[1], i = new O(), o = hr.getChainStartIndices(e), s = 0; s < o.length - 1; s++) {
      var a = new Ee(e, o[s], o[s + 1], r);
      i.add(a);
    }
    return i;
  }
};
hr.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), r = 0; r < e.length; r++)
    e[r] = t.get(r).intValue();
  return e;
};
var Mn = function() {
};
Mn.prototype.computeNodes = function(t) {
};
Mn.prototype.getNodedSubstrings = function() {
};
Mn.prototype.interfaces_ = function() {
  return [];
};
Mn.prototype.getClass = function() {
  return Mn;
};
var ho = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
ho.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
ho.prototype.interfaces_ = function() {
  return [Mn];
};
ho.prototype.getClass = function() {
  return ho;
};
var ra = function(n) {
  function t(r) {
    r ? n.call(this, r) : n.call(this), this._monoChains = new O(), this._index = new Gu(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return xt.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(i) {
    for (var o = this, s = hr.getChains(i.getCoordinates(), i), a = s.iterator(); a.hasNext(); ) {
      var u = a.next();
      u.setId(o._idCounter++), o._index.insert(u.getEnvelope(), u), o._monoChains.add(u);
    }
  }, t.prototype.computeNodes = function(i) {
    var o = this;
    this._nodedSegStrings = i;
    for (var s = i.iterator(); s.hasNext(); )
      o.add(s.next());
    this.intersectChains();
  }, t.prototype.intersectChains = function() {
    for (var i = this, o = new ja(this._segInt), s = this._monoChains.iterator(); s.hasNext(); )
      for (var a = s.next(), u = i._index.query(a.getEnvelope()), l = u.iterator(); l.hasNext(); ) {
        var c = l.next();
        if (c.getId() > a.getId() && (a.computeOverlaps(c, o), i._nOverlaps++), i._segInt.isDone())
          return null;
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.SegmentOverlapAction.get = function() {
    return ja;
  }, Object.defineProperties(t, e), t;
}(ho), ja = function(n) {
  function t() {
    n.call(this), this._si = null;
    var e = arguments[0];
    this._si = e;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.overlap = function() {
    if (arguments.length === 4) {
      var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = r.getContext(), u = o.getContext();
      this._si.processIntersections(a, i, u, s);
    } else
      return n.prototype.overlap.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(fo), $ = function n() {
  if (this._quadrantSegments = n.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = n.CAP_ROUND, this._joinStyle = n.JOIN_ROUND, this._mitreLimit = n.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = n.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (arguments.length === 2) {
      var e = arguments[0], r = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(r);
    } else if (arguments.length === 4) {
      var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3];
      this.setQuadrantSegments(i), this.setEndCapStyle(o), this.setJoinStyle(s), this.setMitreLimit(a);
    }
  }
}, on = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
$.prototype.getEndCapStyle = function() {
  return this._endCapStyle;
};
$.prototype.isSingleSided = function() {
  return this._isSingleSided;
};
$.prototype.setQuadrantSegments = function(t) {
  this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = $.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = $.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== $.JOIN_ROUND && (this._quadrantSegments = $.DEFAULT_QUADRANT_SEGMENTS);
};
$.prototype.getJoinStyle = function() {
  return this._joinStyle;
};
$.prototype.setJoinStyle = function(t) {
  this._joinStyle = t;
};
$.prototype.setSimplifyFactor = function(t) {
  this._simplifyFactor = t < 0 ? 0 : t;
};
$.prototype.getSimplifyFactor = function() {
  return this._simplifyFactor;
};
$.prototype.getQuadrantSegments = function() {
  return this._quadrantSegments;
};
$.prototype.setEndCapStyle = function(t) {
  this._endCapStyle = t;
};
$.prototype.getMitreLimit = function() {
  return this._mitreLimit;
};
$.prototype.setMitreLimit = function(t) {
  this._mitreLimit = t;
};
$.prototype.setSingleSided = function(t) {
  this._isSingleSided = t;
};
$.prototype.interfaces_ = function() {
  return [];
};
$.prototype.getClass = function() {
  return $;
};
$.bufferDistanceError = function(t) {
  var e = Math.PI / 2 / t;
  return 1 - Math.cos(e / 2);
};
on.CAP_ROUND.get = function() {
  return 1;
};
on.CAP_FLAT.get = function() {
  return 2;
};
on.CAP_SQUARE.get = function() {
  return 3;
};
on.JOIN_ROUND.get = function() {
  return 1;
};
on.JOIN_MITRE.get = function() {
  return 2;
};
on.JOIN_BEVEL.get = function() {
  return 3;
};
on.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
on.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
on.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties($, on);
var yt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = M.COUNTERCLOCKWISE, this._inputLine = t || null;
}, No = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
yt.prototype.isDeletable = function(t, e, r, i) {
  var o = this._inputLine[t], s = this._inputLine[e], a = this._inputLine[r];
  return !this.isConcave(o, s, a) || !this.isShallow(o, s, a, i) ? !1 : this.isShallowSampled(o, s, t, r, i);
};
yt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, r = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(r), o = !1; i < this._inputLine.length; ) {
    var s = !1;
    t.isDeletable(e, r, i, t._distanceTol) && (t._isDeleted[r] = yt.DELETE, s = !0, o = !0), s ? e = i : e = r, r = t.findNextNonDeletedIndex(e), i = t.findNextNonDeletedIndex(r);
  }
  return o;
};
yt.prototype.isShallowConcavity = function(t, e, r, i) {
  var o = M.computeOrientation(t, e, r), s = o === this._angleOrientation;
  if (!s)
    return !1;
  var a = M.distancePointLine(e, t, r);
  return a < i;
};
yt.prototype.isShallowSampled = function(t, e, r, i, o) {
  var s = this, a = Math.trunc((i - r) / yt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = r; u < i; u += a)
    if (!s.isShallow(t, e, s._inputLine[u], o))
      return !1;
  return !0;
};
yt.prototype.isConcave = function(t, e, r) {
  var i = M.computeOrientation(t, e, r), o = i === this._angleOrientation;
  return o;
};
yt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = M.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var r = !1;
  do
    r = e.deleteShallowConcavities();
  while (r);
  return this.collapseLine();
};
yt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === yt.DELETE; )
    e++;
  return e;
};
yt.prototype.isShallow = function(t, e, r, i) {
  var o = M.distancePointLine(e, t, r);
  return o < i;
};
yt.prototype.collapseLine = function() {
  for (var t = this, e = new Eo(), r = 0; r < this._inputLine.length; r++)
    t._isDeleted[r] !== yt.DELETE && e.add(t._inputLine[r]);
  return e.toCoordinateArray();
};
yt.prototype.interfaces_ = function() {
  return [];
};
yt.prototype.getClass = function() {
  return yt;
};
yt.simplify = function(t, e) {
  var r = new yt(t);
  return r.simplify(e);
};
No.INIT.get = function() {
  return 0;
};
No.DELETE.get = function() {
  return 1;
};
No.KEEP.get = function() {
  return 1;
};
No.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(yt, No);
var Re = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new O();
}, Vu = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
Re.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(Re.COORDINATE_ARRAY_TYPE);
  return t;
};
Re.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
Re.prototype.addPt = function(t) {
  var e = new m(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
Re.prototype.revere = function() {
};
Re.prototype.addPts = function(t, e) {
  var r = this;
  if (e)
    for (var i = 0; i < t.length; i++)
      r.addPt(t[i]);
  else
    for (var o = t.length - 1; o >= 0; o--)
      r.addPt(t[o]);
};
Re.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), r = t.distance(e);
  return r < this._minimimVertexDistance;
};
Re.prototype.toString = function() {
  var t = new W(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
Re.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new m(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
  if (t.equals(e))
    return null;
  this._ptList.add(t);
};
Re.prototype.setMinimumVertexDistance = function(t) {
  this._minimimVertexDistance = t;
};
Re.prototype.interfaces_ = function() {
  return [];
};
Re.prototype.getClass = function() {
  return Re;
};
Vu.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(Re, Vu);
var j = function() {
}, gi = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
j.prototype.interfaces_ = function() {
  return [];
};
j.prototype.getClass = function() {
  return j;
};
j.toDegrees = function(t) {
  return t * 180 / Math.PI;
};
j.normalize = function(t) {
  for (; t > Math.PI; )
    t -= j.PI_TIMES_2;
  for (; t <= -Math.PI; )
    t += j.PI_TIMES_2;
  return t;
};
j.angle = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Math.atan2(t.y, t.x);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = r.x - e.x, o = r.y - e.y;
    return Math.atan2(o, i);
  }
};
j.isAcute = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = r.x - e.x, a = r.y - e.y, u = i * s + o * a;
  return u > 0;
};
j.isObtuse = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = r.x - e.x, a = r.y - e.y, u = i * s + o * a;
  return u < 0;
};
j.interiorAngle = function(t, e, r) {
  var i = j.angle(e, t), o = j.angle(e, r);
  return Math.abs(o - i);
};
j.normalizePositive = function(t) {
  if (t < 0) {
    for (; t < 0; )
      t += j.PI_TIMES_2;
    t >= j.PI_TIMES_2 && (t = 0);
  } else {
    for (; t >= j.PI_TIMES_2; )
      t -= j.PI_TIMES_2;
    t < 0 && (t = 0);
  }
  return t;
};
j.angleBetween = function(t, e, r) {
  var i = j.angle(e, t), o = j.angle(e, r);
  return j.diff(i, o);
};
j.diff = function(t, e) {
  var r = null;
  return t < e ? r = e - t : r = t - e, r > Math.PI && (r = 2 * Math.PI - r), r;
};
j.toRadians = function(t) {
  return t * Math.PI / 180;
};
j.getTurn = function(t, e) {
  var r = Math.sin(e - t);
  return r > 0 ? j.COUNTERCLOCKWISE : r < 0 ? j.CLOCKWISE : j.NONE;
};
j.angleBetweenOriented = function(t, e, r) {
  var i = j.angle(e, t), o = j.angle(e, r), s = o - i;
  return s <= -Math.PI ? s + j.PI_TIMES_2 : s > Math.PI ? s - j.PI_TIMES_2 : s;
};
gi.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
gi.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
gi.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
gi.COUNTERCLOCKWISE.get = function() {
  return M.COUNTERCLOCKWISE;
};
gi.CLOCKWISE.get = function() {
  return M.CLOCKWISE;
};
gi.NONE.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(j, gi);
var ft = function n() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new k(), this._seg1 = new k(), this._offset0 = new k(), this._offset1 = new k(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new Yn(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === $.JOIN_ROUND && (this._closingSegLengthFactor = n.MAX_CLOSING_SEG_LEN_FACTOR), this.init(r);
}, So = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
ft.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var r = M.computeOrientation(this._s0, this._s1, this._s2), i = r === M.CLOCKWISE && this._side === P.LEFT || r === M.COUNTERCLOCKWISE && this._side === P.RIGHT;
  r === 0 ? this.addCollinear(e) : i ? this.addOutsideTurn(r, e) : this.addInsideTurn(r, e);
};
ft.prototype.addLineEndCap = function(t, e) {
  var r = new k(t, e), i = new k();
  this.computeOffsetSegment(r, P.LEFT, this._distance, i);
  var o = new k();
  this.computeOffsetSegment(r, P.RIGHT, this._distance, o);
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s);
  switch (this._bufParams.getEndCapStyle()) {
    case $.CAP_ROUND:
      this._segList.addPt(i.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, M.CLOCKWISE, this._distance), this._segList.addPt(o.p1);
      break;
    case $.CAP_FLAT:
      this._segList.addPt(i.p1), this._segList.addPt(o.p1);
      break;
    case $.CAP_SQUARE:
      var l = new m();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new m(i.p1.x + l.x, i.p1.y + l.y), f = new m(o.p1.x + l.x, o.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(f);
      break;
  }
};
ft.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
ft.prototype.addMitreJoin = function(t, e, r, i) {
  var o = !0, s = null;
  try {
    s = We.intersection(e.p0, e.p1, r.p0, r.p1);
    var a = i <= 0 ? 1 : s.distance(t) / Math.abs(i);
    a > this._bufParams.getMitreLimit() && (o = !1);
  } catch (u) {
    if (u instanceof Vi)
      s = new m(0, 0), o = !1;
    else
      throw u;
  } finally {
  }
  o ? this._segList.addPt(s) : this.addLimitedMitreJoin(e, r, i, this._bufParams.getMitreLimit());
};
ft.prototype.addFilletCorner = function(t, e, r, i, o) {
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s), l = r.x - t.x, c = r.y - t.y, f = Math.atan2(c, l);
  i === M.CLOCKWISE ? u <= f && (u += 2 * Math.PI) : u >= f && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, f, i, o), this._segList.addPt(r);
};
ft.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * ft.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === $.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === $.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
ft.prototype.createSquare = function(t) {
  this._segList.addPt(new m(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new m(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new m(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new m(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
ft.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
ft.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
ft.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
ft.prototype.initSideSegments = function(t, e, r) {
  this._s1 = t, this._s2 = e, this._side = r, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, r, this._distance, this._offset1);
};
ft.prototype.addLimitedMitreJoin = function(t, e, r, i) {
  var o = this._seg0.p1, s = j.angle(o, this._seg0.p0), a = j.angleBetweenOriented(this._seg0.p0, o, this._seg1.p1), u = a / 2, l = j.normalize(s + u), c = j.normalize(l + Math.PI), f = i * r, h = f * Math.abs(Math.sin(u)), g = r - h, p = o.x + f * Math.cos(c), y = o.y + f * Math.sin(c), d = new m(p, y), v = new k(o, d), C = v.pointAlongOffset(1, g), I = v.pointAlongOffset(1, -g);
  this._side === P.LEFT ? (this._segList.addPt(C), this._segList.addPt(I)) : (this._segList.addPt(I), this._segList.addPt(C));
};
ft.prototype.computeOffsetSegment = function(t, e, r, i) {
  var o = e === P.LEFT ? 1 : -1, s = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(s * s + a * a), l = o * r * s / u, c = o * r * a / u;
  i.p0.x = t.p0.x - c, i.p0.y = t.p0.y + l, i.p1.x = t.p1.x - c, i.p1.y = t.p1.y + l;
};
ft.prototype.addFilletArc = function(t, e, r, i, o) {
  var s = this, a = i === M.CLOCKWISE ? -1 : 1, u = Math.abs(e - r), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, f = u / l, h = c, g = new m(); h < u; ) {
    var p = e + a * h;
    g.x = t.x + o * Math.cos(p), g.y = t.y + o * Math.sin(p), s._segList.addPt(g), h += f;
  }
};
ft.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * ft.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
    this._segList.addPt(this._offset0.p1);
  else {
    if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
      var r = new m((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(r);
      var i = new m((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(i);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
ft.prototype.createCircle = function(t) {
  var e = new m(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
ft.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
ft.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Re(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * ft.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
ft.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === $.JOIN_BEVEL || this._bufParams.getJoinStyle() === $.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, M.CLOCKWISE, this._distance));
};
ft.prototype.closeRing = function() {
  this._segList.closeRing();
};
ft.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
ft.prototype.interfaces_ = function() {
  return [];
};
ft.prototype.getClass = function() {
  return ft;
};
So.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
So.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
So.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
So.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(ft, So);
var ge = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
ge.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var r = e < 0, i = Math.abs(e), o = this.getSegGen(i);
  t.length <= 1 ? this.computePointCurve(t[0], o) : this.computeOffsetCurve(t, r, o);
  var s = o.getCoordinates();
  return r && H.reverse(s), s;
};
ge.prototype.computeSingleSidedBufferCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    r.addSegments(t, !0);
    var o = yt.simplify(t, -i), s = o.length - 1;
    r.initSideSegments(o[s], o[s - 1], P.LEFT), r.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      r.addNextSegment(o[a], !0);
  } else {
    r.addSegments(t, !1);
    var u = yt.simplify(t, i), l = u.length - 1;
    r.initSideSegments(u[0], u[1], P.LEFT), r.addFirstSegment();
    for (var c = 2; c <= l; c++)
      r.addNextSegment(u[c], !0);
  }
  r.addLastSegment(), r.closeRing();
};
ge.prototype.computeRingBufferCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  e === P.RIGHT && (i = -i);
  var o = yt.simplify(t, i), s = o.length - 1;
  r.initSideSegments(o[s - 1], o[0], e);
  for (var a = 1; a <= s; a++) {
    var u = a !== 1;
    r.addNextSegment(o[a], u);
  }
  r.closeRing();
};
ge.prototype.computeLineBufferCurve = function(t, e) {
  var r = this.simplifyTolerance(this._distance), i = yt.simplify(t, r), o = i.length - 1;
  e.initSideSegments(i[0], i[1], P.LEFT);
  for (var s = 2; s <= o; s++)
    e.addNextSegment(i[s], !0);
  e.addLastSegment(), e.addLineEndCap(i[o - 1], i[o]);
  var a = yt.simplify(t, -r), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], P.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
ge.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case $.CAP_ROUND:
      e.createCircle(t);
      break;
    case $.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
ge.prototype.getLineCurve = function(t, e) {
  if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || e === 0)
    return null;
  var r = Math.abs(e), i = this.getSegGen(r);
  if (t.length <= 1)
    this.computePointCurve(t[0], i);
  else if (this._bufParams.isSingleSided()) {
    var o = e < 0;
    this.computeSingleSidedBufferCurve(t, o, i);
  } else
    this.computeLineBufferCurve(t, i);
  var s = i.getCoordinates();
  return s;
};
ge.prototype.getBufferParameters = function() {
  return this._bufParams;
};
ge.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
ge.prototype.getRingCurve = function(t, e, r) {
  if (this._distance = r, t.length <= 2)
    return this.getLineCurve(t, r);
  if (r === 0)
    return ge.copyCoordinates(t);
  var i = this.getSegGen(r);
  return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
};
ge.prototype.computeOffsetCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    var o = yt.simplify(t, -i), s = o.length - 1;
    r.initSideSegments(o[s], o[s - 1], P.LEFT), r.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      r.addNextSegment(o[a], !0);
  } else {
    var u = yt.simplify(t, i), l = u.length - 1;
    r.initSideSegments(u[0], u[1], P.LEFT), r.addFirstSegment();
    for (var c = 2; c <= l; c++)
      r.addNextSegment(u[c], !0);
  }
  r.addLastSegment();
};
ge.prototype.getSegGen = function(t) {
  return new ft(this._precisionModel, this._bufParams, t);
};
ge.prototype.interfaces_ = function() {
  return [];
};
ge.prototype.getClass = function() {
  return ge;
};
ge.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), r = 0; r < e.length; r++)
    e[r] = new m(t[r]);
  return e;
};
var ti = function() {
  this._subgraphs = null, this._seg = new k(), this._cga = new M();
  var t = arguments[0];
  this._subgraphs = t;
}, Uu = { DepthSegment: { configurable: !0 } };
ti.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], r = new O(), i = this._subgraphs.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getEnvelope();
      e.y < s.getMinY() || e.y > s.getMaxY() || t.findStabbedSegments(e, o.getDirectedEdges(), r);
    }
    return r;
  } else if (arguments.length === 3) {
    if (V(arguments[2], He) && arguments[0] instanceof m && arguments[1] instanceof zs)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), f = 0; f < c.length - 1; f++) {
        t._seg.p0 = c[f], t._seg.p1 = c[f + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var h = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(h < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && M.computeOrientation(t._seg.p0, t._seg.p1, a) !== M.RIGHT) {
          var g = u.getDepth(P.LEFT);
          t._seg.p0.equals(c[f]) || (g = u.getDepth(P.RIGHT));
          var p = new An(t._seg, g);
          l.add(p);
        }
      }
    else if (V(arguments[2], He) && arguments[0] instanceof m && V(arguments[1], He))
      for (var y = arguments[0], d = arguments[1], v = arguments[2], C = d.iterator(); C.hasNext(); ) {
        var I = C.next();
        I.isForward() && t.findStabbedSegments(y, I, v);
      }
  }
};
ti.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var r = Ze.min(e);
  return r._leftDepth;
};
ti.prototype.interfaces_ = function() {
  return [];
};
ti.prototype.getClass = function() {
  return ti;
};
Uu.DepthSegment.get = function() {
  return An;
};
Object.defineProperties(ti, Uu);
var An = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new k(t), this._leftDepth = e;
};
An.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var r = this._upwardSeg.orientationIndex(e._upwardSeg);
  return r !== 0 || (r = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), r !== 0) ? r : this._upwardSeg.compareTo(e._upwardSeg);
};
An.prototype.compareX = function(t, e) {
  var r = t.p0.compareTo(e.p0);
  return r !== 0 ? r : t.p1.compareTo(e.p1);
};
An.prototype.toString = function() {
  return this._upwardSeg.toString();
};
An.prototype.interfaces_ = function() {
  return [ze];
};
An.prototype.getClass = function() {
  return An;
};
var et = function(t, e, r) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = r || null;
};
et.prototype.area = function() {
  return et.area(this.p0, this.p1, this.p2);
};
et.prototype.signedArea = function() {
  return et.signedArea(this.p0, this.p1, this.p2);
};
et.prototype.interpolateZ = function(t) {
  if (t === null)
    throw new gt("Supplied point is null.");
  return et.interpolateZ(t, this.p0, this.p1, this.p2);
};
et.prototype.longestSideLength = function() {
  return et.longestSideLength(this.p0, this.p1, this.p2);
};
et.prototype.isAcute = function() {
  return et.isAcute(this.p0, this.p1, this.p2);
};
et.prototype.circumcentre = function() {
  return et.circumcentre(this.p0, this.p1, this.p2);
};
et.prototype.area3D = function() {
  return et.area3D(this.p0, this.p1, this.p2);
};
et.prototype.centroid = function() {
  return et.centroid(this.p0, this.p1, this.p2);
};
et.prototype.inCentre = function() {
  return et.inCentre(this.p0, this.p1, this.p2);
};
et.prototype.interfaces_ = function() {
  return [];
};
et.prototype.getClass = function() {
  return et;
};
et.area = function(t, e, r) {
  return Math.abs(((r.x - t.x) * (e.y - t.y) - (e.x - t.x) * (r.y - t.y)) / 2);
};
et.signedArea = function(t, e, r) {
  return ((r.x - t.x) * (e.y - t.y) - (e.x - t.x) * (r.y - t.y)) / 2;
};
et.det = function(t, e, r, i) {
  return t * i - e * r;
};
et.interpolateZ = function(t, e, r, i) {
  var o = e.x, s = e.y, a = r.x - o, u = i.x - o, l = r.y - s, c = i.y - s, f = a * c - u * l, h = t.x - o, g = t.y - s, p = (c * h - u * g) / f, y = (-l * h + a * g) / f, d = e.z + p * (r.z - e.z) + y * (i.z - e.z);
  return d;
};
et.longestSideLength = function(t, e, r) {
  var i = t.distance(e), o = e.distance(r), s = r.distance(t), a = i;
  return o > a && (a = o), s > a && (a = s), a;
};
et.isAcute = function(t, e, r) {
  return !(!j.isAcute(t, e, r) || !j.isAcute(e, r, t) || !j.isAcute(r, t, e));
};
et.circumcentre = function(t, e, r) {
  var i = r.x, o = r.y, s = t.x - i, a = t.y - o, u = e.x - i, l = e.y - o, c = 2 * et.det(s, a, u, l), f = et.det(a, s * s + a * a, l, u * u + l * l), h = et.det(s, s * s + a * a, u, u * u + l * l), g = i - f / c, p = o + h / c;
  return new m(g, p);
};
et.perpendicularBisector = function(t, e) {
  var r = e.x - t.x, i = e.y - t.y, o = new We(t.x + r / 2, t.y + i / 2, 1), s = new We(t.x - i + r / 2, t.y + r + i / 2, 1);
  return new We(o, s);
};
et.angleBisector = function(t, e, r) {
  var i = e.distance(t), o = e.distance(r), s = i / (i + o), a = r.x - t.x, u = r.y - t.y, l = new m(t.x + s * a, t.y + s * u);
  return l;
};
et.area3D = function(t, e, r) {
  var i = e.x - t.x, o = e.y - t.y, s = e.z - t.z, a = r.x - t.x, u = r.y - t.y, l = r.z - t.z, c = o * l - s * u, f = s * a - i * l, h = i * u - o * a, g = c * c + f * f + h * h, p = Math.sqrt(g) / 2;
  return p;
};
et.centroid = function(t, e, r) {
  var i = (t.x + e.x + r.x) / 3, o = (t.y + e.y + r.y) / 3;
  return new m(i, o);
};
et.inCentre = function(t, e, r) {
  var i = e.distance(r), o = t.distance(r), s = t.distance(e), a = i + o + s, u = (i * t.x + o * e.x + s * r.x) / a, l = (i * t.y + o * e.y + s * r.y) / a;
  return new m(u, l);
};
var Ge = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new O();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = r;
};
Ge.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), r = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(r, _.EXTERIOR, _.INTERIOR);
};
Ge.prototype.addPolygon = function(t) {
  var e = this, r = this._distance, i = P.LEFT;
  this._distance < 0 && (r = -this._distance, i = P.RIGHT);
  var o = t.getExteriorRing(), s = H.removeRepeatedPoints(o.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(o, this._distance) || this._distance <= 0 && s.length < 3)
    return null;
  this.addPolygonRing(s, r, i, _.EXTERIOR, _.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = H.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, r, P.opposite(i), _.INTERIOR, _.EXTERIOR);
  }
};
Ge.prototype.isTriangleErodedCompletely = function(t, e) {
  var r = new et(t[0], t[1], t[2]), i = r.inCentre(), o = M.distancePointLine(i, r.p0, r.p1);
  return o < Math.abs(e);
};
Ge.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = H.removeRepeatedPoints(t.getCoordinates()), r = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(r, _.EXTERIOR, _.INTERIOR);
};
Ge.prototype.addCurve = function(t, e, r) {
  if (t === null || t.length < 2)
    return null;
  var i = new xt(t, new nt(0, _.BOUNDARY, e, r));
  this._curveList.add(i);
};
Ge.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
Ge.prototype.addPolygonRing = function(t, e, r, i, o) {
  if (e === 0 && t.length < Tr.MINIMUM_VALID_SIZE)
    return null;
  var s = i, a = o;
  t.length >= Tr.MINIMUM_VALID_SIZE && M.isCCW(t) && (s = o, a = i, r = P.opposite(r));
  var u = this._curveBuilder.getRingCurve(t, r, e);
  this.addCurve(u, s, a);
};
Ge.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof At ? this.addPolygon(t) : t instanceof mt ? this.addLineString(t) : t instanceof ye ? this.addPoint(t) : t instanceof bi ? this.addCollection(t) : t instanceof Dn ? this.addCollection(t) : t instanceof Pr ? this.addCollection(t) : t instanceof ae && this.addCollection(t);
};
Ge.prototype.isErodedCompletely = function(t, e) {
  var r = t.getCoordinates();
  if (r.length < 4)
    return e < 0;
  if (r.length === 4)
    return this.isTriangleErodedCompletely(r, e);
  var i = t.getEnvelopeInternal(), o = Math.min(i.getHeight(), i.getWidth());
  return e < 0 && 2 * Math.abs(e) > o;
};
Ge.prototype.addCollection = function(t) {
  for (var e = this, r = 0; r < t.getNumGeometries(); r++) {
    var i = t.getGeometryN(r);
    e.add(i);
  }
};
Ge.prototype.interfaces_ = function() {
  return [];
};
Ge.prototype.getClass = function() {
  return Ge;
};
var Oi = function() {
};
Oi.prototype.locate = function(t) {
};
Oi.prototype.interfaces_ = function() {
  return [];
};
Oi.prototype.getClass = function() {
  return Oi;
};
var Rr = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
Rr.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, Rr.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new qi();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof ae ? (this._subcollectionIterator = new Rr(t), this._subcollectionIterator.next()) : t;
};
Rr.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
Rr.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
Rr.prototype.interfaces_ = function() {
  return [Ui];
};
Rr.prototype.getClass = function() {
  return Rr;
};
Rr.isAtomic = function(t) {
  return !(t instanceof ae);
};
var Le = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
Le.prototype.locate = function(t) {
  return Le.locate(t, this._geom);
};
Le.prototype.interfaces_ = function() {
  return [Oi];
};
Le.prototype.getClass = function() {
  return Le;
};
Le.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.isPointInRing(t, e.getCoordinates()) : !1;
};
Le.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var r = e.getExteriorRing();
  if (!Le.isPointInRing(t, r))
    return !1;
  for (var i = 0; i < e.getNumInteriorRing(); i++) {
    var o = e.getInteriorRingN(i);
    if (Le.isPointInRing(t, o))
      return !1;
  }
  return !0;
};
Le.containsPoint = function(t, e) {
  if (e instanceof At)
    return Le.containsPointInPolygon(t, e);
  if (e instanceof ae)
    for (var r = new Rr(e); r.hasNext(); ) {
      var i = r.next();
      if (i !== e && Le.containsPoint(t, i))
        return !0;
    }
  return !1;
};
Le.locate = function(t, e) {
  return e.isEmpty() ? _.EXTERIOR : Le.containsPoint(t, e) ? _.INTERIOR : _.EXTERIOR;
};
var te = function() {
  this._edgeMap = new Jt(), this._edgeList = null, this._ptInAreaLocation = [_.NONE, _.NONE];
};
te.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), r = e - 1;
  return e === 0 && (r = this._edgeList.size() - 1), this._edgeList.get(r);
};
te.prototype.propagateSideLabels = function(t) {
  for (var e = _.NONE, r = this.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getLabel();
    o.isArea(t) && o.getLocation(t, P.LEFT) !== _.NONE && (e = o.getLocation(t, P.LEFT));
  }
  if (e === _.NONE)
    return null;
  for (var s = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, P.ON) === _.NONE && l.setLocation(t, P.ON, s), l.isArea(t)) {
      var c = l.getLocation(t, P.LEFT), f = l.getLocation(t, P.RIGHT);
      if (f !== _.NONE) {
        if (f !== s)
          throw new $r("side location conflict", u.getCoordinate());
        c === _.NONE && X.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), s = c;
      } else
        X.isTrue(l.getLocation(t, P.LEFT) === _.NONE, "found single null side"), l.setLocation(t, P.RIGHT, s), l.setLocation(t, P.LEFT, s);
    }
  }
};
te.prototype.getCoordinate = function() {
  var t = this.iterator();
  if (!t.hasNext())
    return null;
  var e = t.next();
  return e.getCoordinate();
};
te.prototype.print = function(t) {
  Wt.out.println("EdgeEndStar:   " + this.getCoordinate());
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
te.prototype.isAreaLabelsConsistent = function(t) {
  return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
};
te.prototype.checkAreaLabelsConsistent = function(t) {
  var e = this.getEdges();
  if (e.size() <= 0)
    return !0;
  var r = e.size() - 1, i = e.get(r).getLabel(), o = i.getLocation(t, P.LEFT);
  X.isTrue(o !== _.NONE, "Found unlabelled area edge");
  for (var s = o, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    X.isTrue(l.isArea(t), "Found non-area edge");
    var c = l.getLocation(t, P.LEFT), f = l.getLocation(t, P.RIGHT);
    if (c === f || f !== s)
      return !1;
    s = c;
  }
  return !0;
};
te.prototype.findIndex = function(t) {
  var e = this;
  this.iterator();
  for (var r = 0; r < this._edgeList.size(); r++) {
    var i = e._edgeList.get(r);
    if (i === t)
      return r;
  }
  return -1;
};
te.prototype.iterator = function() {
  return this.getEdges().iterator();
};
te.prototype.getEdges = function() {
  return this._edgeList === null && (this._edgeList = new O(this._edgeMap.values())), this._edgeList;
};
te.prototype.getLocation = function(t, e, r) {
  return this._ptInAreaLocation[t] === _.NONE && (this._ptInAreaLocation[t] = Le.locate(e, r[t].getGeometry())), this._ptInAreaLocation[t];
};
te.prototype.toString = function() {
  var t = new Sr();
  t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    t.append(r), t.append(`
`);
  }
  return t.toString();
};
te.prototype.computeEdgeEndLabels = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.computeLabel(t);
  }
};
te.prototype.computeLabelling = function(t) {
  var e = this;
  this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
  for (var r = [!1, !1], i = this.iterator(); i.hasNext(); )
    for (var o = i.next(), s = o.getLabel(), a = 0; a < 2; a++)
      s.isLine(a) && s.getLocation(a) === _.BOUNDARY && (r[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), f = 0; f < 2; f++)
      if (c.isAnyNull(f)) {
        var h = _.NONE;
        if (r[f])
          h = _.EXTERIOR;
        else {
          var g = l.getCoordinate();
          h = e.getLocation(f, g, t);
        }
        c.setAllLocationsIfNull(f, h);
      }
};
te.prototype.getDegree = function() {
  return this._edgeMap.size();
};
te.prototype.insertEdgeEnd = function(t, e) {
  this._edgeMap.put(t, e), this._edgeList = null;
};
te.prototype.interfaces_ = function() {
  return [];
};
te.prototype.getClass = function() {
  return te;
};
var Af = function(n) {
  function t() {
    n.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.linkResultDirectedEdges = function() {
    var r = this;
    this.getResultAreaEdges();
    for (var i = null, o = null, s = this._SCANNING_FOR_INCOMING, a = 0; a < this._resultAreaEdgeList.size(); a++) {
      var u = r._resultAreaEdgeList.get(a), l = u.getSym();
      if (u.getLabel().isArea())
        switch (i === null && u.isInResult() && (i = u), s) {
          case r._SCANNING_FOR_INCOMING:
            if (!l.isInResult())
              continue;
            o = l, s = r._LINKING_TO_OUTGOING;
            break;
          case r._LINKING_TO_OUTGOING:
            if (!u.isInResult())
              continue;
            o.setNext(u), s = r._SCANNING_FOR_INCOMING;
            break;
        }
    }
    if (s === this._LINKING_TO_OUTGOING) {
      if (i === null)
        throw new $r("no outgoing dirEdge found", this.getCoordinate());
      X.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), o.setNext(i);
    }
  }, t.prototype.insert = function(r) {
    var i = r;
    this.insertEdgeEnd(i, i);
  }, t.prototype.getRightmostEdge = function() {
    var r = this.getEdges(), i = r.size();
    if (i < 1)
      return null;
    var o = r.get(0);
    if (i === 1)
      return o;
    var s = r.get(i - 1), a = o.getQuadrant(), u = s.getQuadrant();
    return st.isNorthern(a) && st.isNorthern(u) ? o : !st.isNorthern(a) && !st.isNorthern(u) ? s : o.getDy() !== 0 ? o : s.getDy() !== 0 ? s : (X.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(r) {
    Wt.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      r.print("out "), o.print(r), r.println(), r.print("in "), o.getSym().print(r), r.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var r = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new O();
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      (o.isInResult() || o.getSym().isInResult()) && r._resultAreaEdgeList.add(o);
    }
    return this._resultAreaEdgeList;
  }, t.prototype.updateLabelling = function(r) {
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.setAllLocationsIfNull(0, r.getLocation(0)), s.setAllLocationsIfNull(1, r.getLocation(1));
    }
  }, t.prototype.linkAllDirectedEdges = function() {
    var r = this;
    this.getEdges();
    for (var i = null, o = null, s = this._edgeList.size() - 1; s >= 0; s--) {
      var a = r._edgeList.get(s), u = a.getSym();
      o === null && (o = u), i !== null && u.setNext(i), i = a;
    }
    o.setNext(i);
  }, t.prototype.computeDepths = function() {
    var r = this;
    if (arguments.length === 1) {
      var i = arguments[0], o = this.findIndex(i), s = i.getDepth(P.LEFT), a = i.getDepth(P.RIGHT), u = this.computeDepths(o + 1, this._edgeList.size(), s), l = this.computeDepths(0, o, u);
      if (l !== a)
        throw new $r("depth mismatch at " + i.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], f = arguments[1], h = arguments[2], g = h, p = c; p < f; p++) {
        var y = r._edgeList.get(p);
        y.setEdgeDepths(P.RIGHT, g), g = y.getDepth(P.LEFT);
      }
      return g;
    }
  }, t.prototype.mergeSymLabels = function() {
    for (var r = this.iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getLabel();
      o.merge(i.getSym().getLabel());
    }
  }, t.prototype.linkMinimalDirectedEdges = function(r) {
    for (var i = this, o = null, s = null, a = this._SCANNING_FOR_INCOMING, u = this._resultAreaEdgeList.size() - 1; u >= 0; u--) {
      var l = i._resultAreaEdgeList.get(u), c = l.getSym();
      switch (o === null && l.getEdgeRing() === r && (o = l), a) {
        case i._SCANNING_FOR_INCOMING:
          if (c.getEdgeRing() !== r)
            continue;
          s = c, a = i._LINKING_TO_OUTGOING;
          break;
        case i._LINKING_TO_OUTGOING:
          if (l.getEdgeRing() !== r)
            continue;
          s.setNextMin(l), a = i._SCANNING_FOR_INCOMING;
          break;
      }
    }
    a === this._LINKING_TO_OUTGOING && (X.isTrue(o !== null, "found null for first outgoing dirEdge"), X.isTrue(o.getEdgeRing() === r, "unable to link last incoming dirEdge"), s.setNextMin(o));
  }, t.prototype.getOutgoingDegree = function() {
    if (arguments.length === 0) {
      for (var r = 0, i = this.iterator(); i.hasNext(); ) {
        var o = i.next();
        o.isInResult() && r++;
      }
      return r;
    } else if (arguments.length === 1) {
      for (var s = arguments[0], a = 0, u = this.iterator(); u.hasNext(); ) {
        var l = u.next();
        l.getEdgeRing() === s && a++;
      }
      return a;
    }
  }, t.prototype.getLabel = function() {
    return this._label;
  }, t.prototype.findCoveredLineEdges = function() {
    for (var r = _.NONE, i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getSym();
      if (!o.isLineEdge()) {
        if (o.isInResult()) {
          r = _.INTERIOR;
          break;
        }
        if (s.isInResult()) {
          r = _.EXTERIOR;
          break;
        }
      }
    }
    if (r === _.NONE)
      return null;
    for (var a = r, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === _.INTERIOR) : (l.isInResult() && (a = _.EXTERIOR), c.isInResult() && (a = _.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(r) {
    var i = this;
    n.prototype.computeLabelling.call(this, r), this._label = new nt(_.NONE);
    for (var o = this.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var c = u.getLocation(l);
        (c === _.INTERIOR || c === _.BOUNDARY) && i._label.setLocation(l, _.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(te), qu = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.createNode = function(r) {
    return new hs(r, new Af());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(wi), dn = function n() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = n.orientation(t);
};
dn.prototype.compareTo = function(t) {
  var e = t, r = dn.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return r;
};
dn.prototype.interfaces_ = function() {
  return [ze];
};
dn.prototype.getClass = function() {
  return dn;
};
dn.orientation = function(t) {
  return H.increasingDirection(t) === 1;
};
dn.compareOriented = function(t, e, r, i) {
  for (var o = e ? 1 : -1, s = i ? 1 : -1, a = e ? t.length : -1, u = i ? r.length : -1, l = e ? 0 : t.length - 1, c = i ? 0 : r.length - 1; ; ) {
    var f = t[l].compareTo(r[c]);
    if (f !== 0)
      return f;
    l += o, c += s;
    var h = l === a, g = c === u;
    if (h && !g)
      return -1;
    if (!h && g)
      return 1;
    if (h && g)
      return 0;
  }
};
var Je = function() {
  this._edges = new O(), this._ocaMap = new Jt();
};
Je.prototype.print = function(t) {
  var e = this;
  t.print("MULTILINESTRING ( ");
  for (var r = 0; r < this._edges.size(); r++) {
    var i = e._edges.get(r);
    r > 0 && t.print(","), t.print("(");
    for (var o = i.getCoordinates(), s = 0; s < o.length; s++)
      s > 0 && t.print(","), t.print(o[s].x + " " + o[s].y);
    t.println(")");
  }
  t.print(")  ");
};
Je.prototype.addAll = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); )
    e.add(r.next());
};
Je.prototype.findEdgeIndex = function(t) {
  for (var e = this, r = 0; r < this._edges.size(); r++)
    if (e._edges.get(r).equals(t))
      return r;
  return -1;
};
Je.prototype.iterator = function() {
  return this._edges.iterator();
};
Je.prototype.getEdges = function() {
  return this._edges;
};
Je.prototype.get = function(t) {
  return this._edges.get(t);
};
Je.prototype.findEqualEdge = function(t) {
  var e = new dn(t.getCoordinates()), r = this._ocaMap.get(e);
  return r;
};
Je.prototype.add = function(t) {
  this._edges.add(t);
  var e = new dn(t.getCoordinates());
  this._ocaMap.put(e, t);
};
Je.prototype.interfaces_ = function() {
  return [];
};
Je.prototype.getClass = function() {
  return Je;
};
var Fn = function() {
};
Fn.prototype.processIntersections = function(t, e, r, i) {
};
Fn.prototype.isDone = function() {
};
Fn.prototype.interfaces_ = function() {
  return [];
};
Fn.prototype.getClass = function() {
  return Fn;
};
var Oe = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
Oe.prototype.isTrivialIntersection = function(t, e, r, i) {
  if (t === r && this._li.getIntersectionNum() === 1) {
    if (Oe.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.size() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Oe.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Oe.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Oe.prototype.getLineIntersector = function() {
  return this._li;
};
Oe.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Oe.prototype.processIntersections = function(t, e, r, i) {
  if (t === r && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = r.getCoordinates()[i], u = r.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, r, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
};
Oe.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Oe.prototype.isDone = function() {
  return !1;
};
Oe.prototype.hasInteriorIntersection = function() {
  return this._hasInterior;
};
Oe.prototype.interfaces_ = function() {
  return [Fn];
};
Oe.prototype.getClass = function() {
  return Oe;
};
Oe.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var _r = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this.coord = new m(t), this.segmentIndex = e, this.dist = r;
};
_r.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
_r.prototype.getCoordinate = function() {
  return this.coord;
};
_r.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
_r.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
_r.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
_r.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
_r.prototype.getDistance = function() {
  return this.dist;
};
_r.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
_r.prototype.interfaces_ = function() {
  return [ze];
};
_r.prototype.getClass = function() {
  return _r;
};
var Ar = function() {
  this._nodeMap = new Jt(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
Ar.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
Ar.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
Ar.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
Ar.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
Ar.prototype.createSplitEdge = function(t, e) {
  var r = this, i = e.segmentIndex - t.segmentIndex + 2, o = this.edge.pts[e.segmentIndex], s = e.dist > 0 || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new m(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = r.edge.pts[l];
  return s && (a[u] = e.coord), new Ho(a, new nt(this.edge._label));
};
Ar.prototype.add = function(t, e, r) {
  var i = new _r(t, e, r), o = this._nodeMap.get(i);
  return o !== null ? o : (this._nodeMap.put(i, i), i);
};
Ar.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.coord.equals(t))
      return !0;
  }
  return !1;
};
Ar.prototype.interfaces_ = function() {
  return [];
};
Ar.prototype.getClass = function() {
  return Ar;
};
var kn = function() {
};
kn.prototype.getChainStartIndices = function(t) {
  var e = this, r = 0, i = new O();
  i.add(new gr(r));
  do {
    var o = e.findChainEnd(t, r);
    i.add(new gr(o)), r = o;
  } while (r < t.length - 1);
  var s = kn.toIntArray(i);
  return s;
};
kn.prototype.findChainEnd = function(t, e) {
  for (var r = st.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length; ) {
    var o = st.quadrant(t[i - 1], t[i]);
    if (o !== r)
      break;
    i++;
  }
  return i - 1;
};
kn.prototype.interfaces_ = function() {
  return [];
};
kn.prototype.getClass = function() {
  return kn;
};
kn.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), r = 0; r < e.length; r++)
    e[r] = t.get(r).intValue();
  return e;
};
var en = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new F(), this.env2 = new F();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new kn();
  this.startIndex = e.getChainStartIndices(this.pts);
};
en.prototype.getCoordinates = function() {
  return this.pts;
};
en.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, r = this.pts[this.startIndex[t + 1]].x;
  return e > r ? e : r;
};
en.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, r = this.pts[this.startIndex[t + 1]].x;
  return e < r ? e : r;
};
en.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[r], e.startIndex[r + 1], i);
  } else if (arguments.length === 6) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], f = this.pts[o], h = this.pts[s], g = a.pts[u], p = a.pts[l];
    if (s - o === 1 && l - u === 1)
      return c.addIntersections(this.e, o, a.e, u), null;
    if (this.env1.init(f, h), this.env2.init(g, p), !this.env1.intersects(this.env2))
      return null;
    var y = Math.trunc((o + s) / 2), d = Math.trunc((u + l) / 2);
    o < y && (u < d && this.computeIntersectsForChain(o, y, a, u, d, c), d < l && this.computeIntersectsForChain(o, y, a, d, l, c)), y < s && (u < d && this.computeIntersectsForChain(y, s, a, u, d, c), d < l && this.computeIntersectsForChain(y, s, a, d, l, c));
  }
};
en.prototype.getStartIndexes = function() {
  return this.startIndex;
};
en.prototype.computeIntersects = function(t, e) {
  for (var r = this, i = 0; i < this.startIndex.length - 1; i++)
    for (var o = 0; o < t.startIndex.length - 1; o++)
      r.computeIntersectsForChain(i, t, o, e);
};
en.prototype.interfaces_ = function() {
  return [];
};
en.prototype.getClass = function() {
  return en;
};
var Yt = function n() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var r = 0; r < 3; r++)
      t._depth[e][r] = n.NULL_VALUE;
}, Xu = { NULL_VALUE: { configurable: !0 } };
Yt.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
Yt.prototype.setDepth = function(t, e, r) {
  this._depth[t][e] = r;
};
Yt.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var r = 0; r < 3; r++)
        if (t._depth[e][r] !== Yt.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var i = arguments[0];
    return this._depth[i][1] === Yt.NULL_VALUE;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._depth[o][s] === Yt.NULL_VALUE;
  }
};
Yt.prototype.normalize = function() {
  for (var t = this, e = 0; e < 2; e++)
    if (!t.isNull(e)) {
      var r = t._depth[e][1];
      t._depth[e][2] < r && (r = t._depth[e][2]), r < 0 && (r = 0);
      for (var i = 1; i < 3; i++) {
        var o = 0;
        t._depth[e][i] > r && (o = 1), t._depth[e][i] = o;
      }
    }
};
Yt.prototype.getDelta = function(t) {
  return this._depth[t][P.RIGHT] - this._depth[t][P.LEFT];
};
Yt.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? _.EXTERIOR : _.INTERIOR;
};
Yt.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
Yt.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], r = 0; r < 2; r++)
      for (var i = 1; i < 3; i++) {
        var o = e.getLocation(r, i);
        (o === _.EXTERIOR || o === _.INTERIOR) && (t.isNull(r, i) ? t._depth[r][i] = Yt.depthAtLocation(o) : t._depth[r][i] += Yt.depthAtLocation(o));
      }
  else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    u === _.INTERIOR && this._depth[s][a]++;
  }
};
Yt.prototype.interfaces_ = function() {
  return [];
};
Yt.prototype.getClass = function() {
  return Yt;
};
Yt.depthAtLocation = function(t) {
  return t === _.EXTERIOR ? 0 : t === _.INTERIOR ? 1 : Yt.NULL_VALUE;
};
Xu.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(Yt, Xu);
var Ho = function(n) {
  function t() {
    if (n.call(this), this.pts = null, this._env = null, this.eiList = new Ar(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Yt(), this._depthDelta = 0, arguments.length === 1) {
      var e = arguments[0];
      t.call(this, e, null);
    } else if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      this.pts = r, this._label = i;
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getDepth = function() {
    return this._depth;
  }, t.prototype.getCollapsedEdge = function() {
    var r = new Array(2).fill(null);
    r[0] = this.pts[0], r[1] = this.pts[1];
    var i = new t(r, nt.toLineLabel(this._label));
    return i;
  }, t.prototype.isIsolated = function() {
    return this._isIsolated;
  }, t.prototype.getCoordinates = function() {
    return this.pts;
  }, t.prototype.setIsolated = function(r) {
    this._isIsolated = r;
  }, t.prototype.setName = function(r) {
    this._name = r;
  }, t.prototype.equals = function(r) {
    var i = this;
    if (!(r instanceof t))
      return !1;
    var o = r;
    if (this.pts.length !== o.pts.length)
      return !1;
    for (var s = !0, a = !0, u = this.pts.length, l = 0; l < this.pts.length; l++)
      if (i.pts[l].equals2D(o.pts[l]) || (s = !1), i.pts[l].equals2D(o.pts[--u]) || (a = !1), !s && !a)
        return !1;
    return !0;
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 0)
      return this.pts.length > 0 ? this.pts[0] : null;
    if (arguments.length === 1) {
      var r = arguments[0];
      return this.pts[r];
    }
  }, t.prototype.print = function(r) {
    var i = this;
    r.print("edge " + this._name + ": "), r.print("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && r.print(","), r.print(i.pts[o].x + " " + i.pts[o].y);
    r.print(")  " + this._label + " " + this._depthDelta);
  }, t.prototype.computeIM = function(r) {
    t.updateIM(this._label, r);
  }, t.prototype.isCollapsed = function() {
    return !this._label.isArea() || this.pts.length !== 3 ? !1 : !!this.pts[0].equals(this.pts[2]);
  }, t.prototype.isClosed = function() {
    return this.pts[0].equals(this.pts[this.pts.length - 1]);
  }, t.prototype.getMaximumSegmentIndex = function() {
    return this.pts.length - 1;
  }, t.prototype.getDepthDelta = function() {
    return this._depthDelta;
  }, t.prototype.getNumPoints = function() {
    return this.pts.length;
  }, t.prototype.printReverse = function(r) {
    var i = this;
    r.print("edge " + this._name + ": ");
    for (var o = this.pts.length - 1; o >= 0; o--)
      r.print(i.pts[o] + " ");
    r.println("");
  }, t.prototype.getMonotoneChainEdge = function() {
    return this._mce === null && (this._mce = new en(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var r = this;
    if (this._env === null) {
      this._env = new F();
      for (var i = 0; i < this.pts.length; i++)
        r._env.expandToInclude(r.pts[i]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(r, i, o, s) {
    var a = new m(r.getIntersection(s)), u = i, l = r.getEdgeDistance(o, s), c = u + 1;
    if (c < this.pts.length) {
      var f = this.pts[c];
      a.equals2D(f) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var r = this, i = new Sr();
    i.append("edge " + this._name + ": "), i.append("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && i.append(","), i.append(r.pts[o].x + " " + r.pts[o].y);
    return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
  }, t.prototype.isPointwiseEqual = function(r) {
    var i = this;
    if (this.pts.length !== r.pts.length)
      return !1;
    for (var o = 0; o < this.pts.length; o++)
      if (!i.pts[o].equals2D(r.pts[o]))
        return !1;
    return !0;
  }, t.prototype.setDepthDelta = function(r) {
    this._depthDelta = r;
  }, t.prototype.getEdgeIntersectionList = function() {
    return this.eiList;
  }, t.prototype.addIntersections = function(r, i, o) {
    for (var s = this, a = 0; a < r.getIntersectionNum(); a++)
      s.addIntersection(r, i, o, a);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.updateIM = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      i.setAtLeastIfValid(r.getLocation(0, P.ON), r.getLocation(1, P.ON), 1), r.isArea() && (i.setAtLeastIfValid(r.getLocation(0, P.LEFT), r.getLocation(1, P.LEFT), 2), i.setAtLeastIfValid(r.getLocation(0, P.RIGHT), r.getLocation(1, P.RIGHT), 2));
    } else
      return n.prototype.updateIM.apply(this, arguments);
  }, t;
}(Pe), se = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new Je(), this._bufParams = t || null;
};
se.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
se.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var r = e.getLabel(), i = t.getLabel();
    e.isPointwiseEqual(t) || (i = new nt(t.getLabel()), i.flip()), r.merge(i);
    var o = se.depthDelta(i), s = e.getDepthDelta(), a = s + o;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(se.depthDelta(t.getLabel()));
};
se.prototype.buildSubgraphs = function(t, e) {
  for (var r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getRightmostCoordinate(), a = new ti(r), u = a.getDepth(s);
    o.computeDepth(u), o.findResultEdges(), r.add(o), e.add(o.getDirectedEdges(), o.getNodes());
  }
};
se.prototype.createSubgraphs = function(t) {
  for (var e = new O(), r = t.getNodes().iterator(); r.hasNext(); ) {
    var i = r.next();
    if (!i.isVisited()) {
      var o = new ue();
      o.create(i), e.add(o);
    }
  }
  return Ze.sort(e, Ze.reverseOrder()), e;
};
se.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
se.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new ra(), r = new Yn();
  return r.setPrecisionModel(t), e.setSegmentIntersector(new Oe(r)), e;
};
se.prototype.buffer = function(t, e) {
  var r = this._workingPrecisionModel;
  r === null && (r = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var i = new ge(r, this._bufParams), o = new Ge(t, e, i), s = o.getCurves();
  if (s.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(s, r), this._graph = new dt(new qu()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new _e(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
se.prototype.computeNodedEdges = function(t, e) {
  var r = this, i = this.getNoder(e);
  i.computeNodes(t);
  for (var o = i.getNodedSubstrings(), s = o.iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new Ho(a.getCoordinates(), new nt(l));
      r.insertUniqueEdge(c);
    }
  }
};
se.prototype.setNoder = function(t) {
  this._workingNoder = t;
};
se.prototype.interfaces_ = function() {
  return [];
};
se.prototype.getClass = function() {
  return se;
};
se.depthDelta = function(t) {
  var e = t.getLocation(0, P.LEFT), r = t.getLocation(0, P.RIGHT);
  return e === _.INTERIOR && r === _.EXTERIOR ? 1 : e === _.EXTERIOR && r === _.INTERIOR ? -1 : 0;
};
se.convertSegStrings = function(t) {
  for (var e = new W(), r = new O(); t.hasNext(); ) {
    var i = t.next(), o = e.createLineString(i.getCoordinates());
    r.add(o);
  }
  return e.buildGeometry(r);
};
var vn = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3];
    this._noder = r, this._scaleFactor = i, this._offsetX = o, this._offsetY = s, this._isScaled = !this.isIntegerPrecision();
  }
};
vn.prototype.rescale = function() {
  var t = this;
  if (V(arguments[0], Ot))
    for (var e = arguments[0], r = e.iterator(); r.hasNext(); ) {
      var i = r.next();
      t.rescale(i.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], s = 0; s < o.length; s++)
      o[s].x = o[s].x / t._scaleFactor + t._offsetX, o[s].y = o[s].y / t._scaleFactor + t._offsetY;
    o.length === 2 && o[0].equals2D(o[1]) && Wt.out.println(o);
  }
};
vn.prototype.scale = function() {
  var t = this;
  if (V(arguments[0], Ot)) {
    for (var e = arguments[0], r = new O(), i = e.iterator(); i.hasNext(); ) {
      var o = i.next();
      r.add(new xt(t.scale(o.getCoordinates()), o.getData()));
    }
    return r;
  } else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], a = new Array(s.length).fill(null), u = 0; u < s.length; u++)
      a[u] = new m(Math.round((s[u].x - t._offsetX) * t._scaleFactor), Math.round((s[u].y - t._offsetY) * t._scaleFactor), s[u].z);
    var l = H.removeRepeatedPoints(a);
    return l;
  }
};
vn.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
vn.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
vn.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
vn.prototype.interfaces_ = function() {
  return [Mn];
};
vn.prototype.getClass = function() {
  return vn;
};
var Er = function() {
  this._li = new Yn(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, Yu = { fact: { configurable: !0 } };
Er.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var r = e.next(), i = r.getCoordinates();
      t.checkEndPtVertexIntersections(i[0], t._segStrings), t.checkEndPtVertexIntersections(i[i.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var o = arguments[0], s = arguments[1], a = s.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), c = 1; c < l.length - 1; c++)
        if (l[c].equals(o))
          throw new Zr("found endpt/interior pt intersection at index " + c + " :pt " + o);
  }
};
Er.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var r = e.next(), i = this._segStrings.iterator(); i.hasNext(); ) {
        var o = i.next();
        t.checkInteriorIntersections(r, o);
      }
  else if (arguments.length === 2)
    for (var s = arguments[0], a = arguments[1], u = s.getCoordinates(), l = a.getCoordinates(), c = 0; c < u.length - 1; c++)
      for (var f = 0; f < l.length - 1; f++)
        t.checkInteriorIntersections(s, c, a, f);
  else if (arguments.length === 4) {
    var h = arguments[0], g = arguments[1], p = arguments[2], y = arguments[3];
    if (h === p && g === y)
      return null;
    var d = h.getCoordinates()[g], v = h.getCoordinates()[g + 1], C = p.getCoordinates()[y], I = p.getCoordinates()[y + 1];
    if (this._li.computeIntersection(d, v, C, I), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, d, v) || this.hasInteriorIntersection(this._li, C, I)))
      throw new Zr("found non-noded intersection at " + d + "-" + v + " and " + C + "-" + I);
  }
};
Er.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
Er.prototype.checkCollapses = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var r = e.next();
      t.checkCollapses(r);
    }
  else if (arguments.length === 1)
    for (var i = arguments[0], o = i.getCoordinates(), s = 0; s < o.length - 2; s++)
      t.checkCollapse(o[s], o[s + 1], o[s + 2]);
};
Er.prototype.hasInteriorIntersection = function(t, e, r) {
  for (var i = 0; i < t.getIntersectionNum(); i++) {
    var o = t.getIntersection(i);
    if (!(o.equals(e) || o.equals(r)))
      return !0;
  }
  return !1;
};
Er.prototype.checkCollapse = function(t, e, r) {
  if (t.equals(r))
    throw new Zr("found non-noded collapse at " + Er.fact.createLineString([t, e, r]));
};
Er.prototype.interfaces_ = function() {
  return [];
};
Er.prototype.getClass = function() {
  return Er;
};
Yu.fact.get = function() {
  return new W();
};
Object.defineProperties(Er, Yu);
var pe = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = r, e <= 0)
    throw new gt("Scale factor must be non-zero");
  e !== 1 && (this._pt = new m(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new m(), this._p1Scaled = new m()), this.initCorners(this._pt);
}, Wu = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
pe.prototype.intersectsScaled = function(t, e) {
  var r = Math.min(t.x, e.x), i = Math.max(t.x, e.x), o = Math.min(t.y, e.y), s = Math.max(t.y, e.y), a = this._maxx < r || this._minx > i || this._maxy < o || this._miny > s;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return X.isTrue(!(a && u), "Found bad envelope test"), u;
};
pe.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new m(this._maxx, this._maxy), this._corner[1] = new m(this._minx, this._maxy), this._corner[2] = new m(this._minx, this._miny), this._corner[3] = new m(this._maxx, this._miny);
};
pe.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
pe.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
pe.prototype.getCoordinate = function() {
  return this._originalPt;
};
pe.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
pe.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = pe.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new F(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
pe.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
pe.prototype.intersectsToleranceSquare = function(t, e) {
  var r = !1, i = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (r = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || r && i || t.equals(this._pt) || e.equals(this._pt));
};
pe.prototype.addSnappedNode = function(t, e) {
  var r = t.getCoordinate(e), i = t.getCoordinate(e + 1);
  return this.intersects(r, i) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
pe.prototype.interfaces_ = function() {
  return [];
};
pe.prototype.getClass = function() {
  return pe;
};
Wu.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(pe, Wu);
var go = function() {
  this.tempEnv1 = new F(), this.selectedSegment = new k();
};
go.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
go.prototype.interfaces_ = function() {
  return [];
};
go.prototype.getClass = function() {
  return go;
};
var Ti = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, Hu = { HotPixelSnapAction: { configurable: !0 } };
Ti.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = e.getSafeEnvelope(), s = new ju(e, r, i);
    return this._index.query(o, {
      interfaces_: function() {
        return [gn];
      },
      visitItem: function(a) {
        var u = a;
        u.select(o, s);
      }
    }), s.isNodeAdded();
  }
};
Ti.prototype.interfaces_ = function() {
  return [];
};
Ti.prototype.getClass = function() {
  return Ti;
};
Hu.HotPixelSnapAction.get = function() {
  return ju;
};
Object.defineProperties(Ti, Hu);
var ju = function(n) {
  function t() {
    n.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var e = arguments[0], r = arguments[1], i = arguments[2];
    this._hotPixel = e, this._parentEdge = r, this._hotPixelVertexIndex = i;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isNodeAdded = function() {
    return this._isNodeAdded;
  }, t.prototype.select = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1], o = r.getContext();
      if (this._parentEdge !== null && o === this._parentEdge && i === this._hotPixelVertexIndex)
        return null;
      this._isNodeAdded = this._hotPixel.addSnappedNode(o, i);
    } else
      return n.prototype.select.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(go), ei = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new O();
};
ei.prototype.processIntersections = function(t, e, r, i) {
  var o = this;
  if (t === r && e === i)
    return null;
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = r.getCoordinates()[i], l = r.getCoordinates()[i + 1];
  if (this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var c = 0; c < this._li.getIntersectionNum(); c++)
      o._interiorIntersections.add(o._li.getIntersection(c));
    t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1);
  }
};
ei.prototype.isDone = function() {
  return !1;
};
ei.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
ei.prototype.interfaces_ = function() {
  return [Fn];
};
ei.prototype.getClass = function() {
  return ei;
};
var Fr = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new Yn(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
Fr.prototype.checkCorrectness = function(t) {
  var e = xt.getNodedSubstrings(t), r = new Er(e);
  try {
    r.checkValid();
  } catch (i) {
    if (i instanceof Ou)
      i.printStackTrace();
    else
      throw i;
  } finally {
  }
};
Fr.prototype.getNodedSubstrings = function() {
  return xt.getNodedSubstrings(this._nodedSegStrings);
};
Fr.prototype.snapRound = function(t, e) {
  var r = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(r), this.computeVertexSnaps(t);
};
Fr.prototype.findInteriorIntersections = function(t, e) {
  var r = new ei(e);
  return this._noder.setSegmentIntersector(r), this._noder.computeNodes(t), r.getInteriorIntersections();
};
Fr.prototype.computeVertexSnaps = function() {
  var t = this;
  if (V(arguments[0], Ot))
    for (var e = arguments[0], r = e.iterator(); r.hasNext(); ) {
      var i = r.next();
      t.computeVertexSnaps(i);
    }
  else if (arguments[0] instanceof xt)
    for (var o = arguments[0], s = o.getCoordinates(), a = 0; a < s.length; a++) {
      var u = new pe(s[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, o, a);
      l && o.addIntersection(s[a], a);
    }
};
Fr.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new ra(), this._pointSnapper = new Ti(this._noder.getIndex()), this.snapRound(t, this._li);
};
Fr.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next(), o = new pe(i, e._scaleFactor, e._li);
    e._pointSnapper.snap(o);
  }
};
Fr.prototype.interfaces_ = function() {
  return [Mn];
};
Fr.prototype.getClass = function() {
  return Fr;
};
var Xt = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new $(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this._argGeom = e, this._bufParams = r;
  }
}, Xi = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
Xt.prototype.bufferFixedPrecision = function(t) {
  var e = new vn(new Fr(new tt(1)), t.getScale()), r = new se(this._bufParams);
  r.setWorkingPrecisionModel(t), r.setNoder(e), this._resultGeometry = r.buffer(this._argGeom, this._distance);
};
Xt.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = Xt.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (s) {
        if (s instanceof $r)
          t._saveException = s;
        else
          throw s;
      } finally {
      }
      if (t._resultGeometry !== null)
        return null;
    }
    throw this._saveException;
  } else if (arguments.length === 1) {
    var r = arguments[0], i = Xt.precisionScaleFactor(this._argGeom, this._distance, r), o = new tt(i);
    this.bufferFixedPrecision(o);
  }
};
Xt.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === tt.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
Xt.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
Xt.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new se(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof Zr)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
Xt.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
Xt.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
Xt.prototype.interfaces_ = function() {
  return [];
};
Xt.prototype.getClass = function() {
  return Xt;
};
Xt.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new Xt(t), i = r.getResultGeometry(e);
    return i;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof z && typeof arguments[1] == "number") {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Xt(o);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(s);
      return l;
    } else if (arguments[2] instanceof $ && arguments[0] instanceof z && typeof arguments[1] == "number") {
      var c = arguments[0], f = arguments[1], h = arguments[2], g = new Xt(c, h), p = g.getResultGeometry(f);
      return p;
    }
  } else if (arguments.length === 4) {
    var y = arguments[0], d = arguments[1], v = arguments[2], C = arguments[3], I = new Xt(y);
    I.setQuadrantSegments(v), I.setEndCapStyle(C);
    var N = I.getResultGeometry(d);
    return N;
  }
};
Xt.precisionScaleFactor = function(t, e, r) {
  var i = t.getEnvelopeInternal(), o = we.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())), s = e > 0 ? e : 0, a = o + 2 * s, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = r - u, c = Math.pow(10, l);
  return c;
};
Xi.CAP_ROUND.get = function() {
  return $.CAP_ROUND;
};
Xi.CAP_BUTT.get = function() {
  return $.CAP_FLAT;
};
Xi.CAP_FLAT.get = function() {
  return $.CAP_FLAT;
};
Xi.CAP_SQUARE.get = function() {
  return $.CAP_SQUARE;
};
Xi.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(Xt, Xi);
var ne = function() {
  this._pt = [new m(), new m()], this._distance = U.NaN, this._isNull = !0;
};
ne.prototype.getCoordinates = function() {
  return this._pt;
};
ne.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
ne.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i < this._distance && this.initialize(e, r, i);
  }
};
ne.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(r), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
ne.prototype.getDistance = function() {
  return this._distance;
};
ne.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i > this._distance && this.initialize(e, r, i);
  }
};
ne.prototype.interfaces_ = function() {
  return [];
};
ne.prototype.getClass = function() {
  return ne;
};
var Lr = function() {
};
Lr.prototype.interfaces_ = function() {
  return [];
};
Lr.prototype.getClass = function() {
  return Lr;
};
Lr.computeDistance = function() {
  if (arguments[2] instanceof ne && arguments[0] instanceof mt && arguments[1] instanceof m)
    for (var t = arguments[0], e = arguments[1], r = arguments[2], i = t.getCoordinates(), o = new k(), s = 0; s < i.length - 1; s++) {
      o.setCoordinates(i[s], i[s + 1]);
      var a = o.closestPoint(e);
      r.setMinimum(a, e);
    }
  else if (arguments[2] instanceof ne && arguments[0] instanceof At && arguments[1] instanceof m) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Lr.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      Lr.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof ne && arguments[0] instanceof z && arguments[1] instanceof m) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof mt)
      Lr.computeDistance(h, g, p);
    else if (h instanceof At)
      Lr.computeDistance(h, g, p);
    else if (h instanceof ae)
      for (var y = h, d = 0; d < y.getNumGeometries(); d++) {
        var v = y.getGeometryN(d);
        Lr.computeDistance(v, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof ne && arguments[0] instanceof k && arguments[1] instanceof m) {
    var C = arguments[0], I = arguments[1], N = arguments[2], L = C.closestPoint(I);
    N.setMinimum(L, I);
  }
};
var Bn = function(t) {
  this._maxPtDist = new ne(), this._inputGeom = t || null;
}, na = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
Bn.prototype.computeMaxMidpointDistance = function(t) {
  var e = new mn(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Bn.prototype.computeMaxVertexDistance = function(t) {
  var e = new ri(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Bn.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
Bn.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
Bn.prototype.interfaces_ = function() {
  return [];
};
Bn.prototype.getClass = function() {
  return Bn;
};
na.MaxPointDistanceFilter.get = function() {
  return ri;
};
na.MaxMidpointDistanceFilter.get = function() {
  return mn;
};
Object.defineProperties(Bn, na);
var ri = function(t) {
  this._maxPtDist = new ne(), this._minPtDist = new ne(), this._geom = t || null;
};
ri.prototype.filter = function(t) {
  this._minPtDist.initialize(), Lr.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ri.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ri.prototype.interfaces_ = function() {
  return [Or];
};
ri.prototype.getClass = function() {
  return ri;
};
var mn = function(t) {
  this._maxPtDist = new ne(), this._minPtDist = new ne(), this._geom = t || null;
};
mn.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var r = t.getCoordinate(e - 1), i = t.getCoordinate(e), o = new m((r.x + i.x) / 2, (r.y + i.y) / 2);
  this._minPtDist.initialize(), Lr.computeDistance(this._geom, o, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
mn.prototype.isDone = function() {
  return !1;
};
mn.prototype.isGeometryChanged = function() {
  return !1;
};
mn.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
mn.prototype.interfaces_ = function() {
  return [Ke];
};
mn.prototype.getClass = function() {
  return mn;
};
var Qr = function(t) {
  this._comps = t || null;
};
Qr.prototype.filter = function(t) {
  t instanceof At && this._comps.add(t);
};
Qr.prototype.interfaces_ = function() {
  return [dr];
};
Qr.prototype.getClass = function() {
  return Qr;
};
Qr.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Qr.getPolygons(t, new O());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e instanceof At ? r.add(e) : e instanceof ae && e.apply(new Qr(r)), r;
  }
};
var qt = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this._lines = e, this._isForcedToLineString = r;
  }
};
qt.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof Tr) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof mt && this._lines.add(t);
};
qt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
qt.prototype.interfaces_ = function() {
  return [Jr];
};
qt.prototype.getClass = function() {
  return qt;
};
qt.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry(qt.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e.getFactory().buildGeometry(qt.getLines(e, r));
  }
};
qt.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return qt.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (V(arguments[0], Ot) && V(arguments[1], Ot)) {
      for (var e = arguments[0], r = arguments[1], i = e.iterator(); i.hasNext(); ) {
        var o = i.next();
        qt.getLines(o, r);
      }
      return r;
    } else if (arguments[0] instanceof z && typeof arguments[1] == "boolean") {
      var s = arguments[0], a = arguments[1], u = new O();
      return s.apply(new qt(u, a)), u;
    } else if (arguments[0] instanceof z && V(arguments[1], Ot)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof mt ? c.add(l) : l.apply(new qt(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && V(arguments[0], Ot) && V(arguments[1], Ot)) {
      for (var f = arguments[0], h = arguments[1], g = arguments[2], p = f.iterator(); p.hasNext(); ) {
        var y = p.next();
        qt.getLines(y, h, g);
      }
      return h;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof z && V(arguments[1], Ot)) {
      var d = arguments[0], v = arguments[1], C = arguments[2];
      return d.apply(new qt(v, C)), v;
    }
  }
};
var $e = function() {
  if (this._boundaryRule = ke.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new gt("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
$e.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof m && arguments[1] instanceof At) {
    var e = arguments[0], r = arguments[1];
    if (r.isEmpty())
      return _.EXTERIOR;
    var i = r.getExteriorRing(), o = this.locateInPolygonRing(e, i);
    if (o === _.EXTERIOR)
      return _.EXTERIOR;
    if (o === _.BOUNDARY)
      return _.BOUNDARY;
    for (var s = 0; s < r.getNumInteriorRing(); s++) {
      var a = r.getInteriorRingN(s), u = t.locateInPolygonRing(e, a);
      if (u === _.INTERIOR)
        return _.EXTERIOR;
      if (u === _.BOUNDARY)
        return _.BOUNDARY;
    }
    return _.INTERIOR;
  } else if (arguments[0] instanceof m && arguments[1] instanceof mt) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return _.EXTERIOR;
    var f = c.getCoordinates();
    return !c.isClosed() && (l.equals(f[0]) || l.equals(f[f.length - 1])) ? _.BOUNDARY : M.isOnLine(l, f) ? _.INTERIOR : _.EXTERIOR;
  } else if (arguments[0] instanceof m && arguments[1] instanceof ye) {
    var h = arguments[0], g = arguments[1], p = g.getCoordinate();
    return p.equals2D(h) ? _.INTERIOR : _.EXTERIOR;
  }
};
$e.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.locatePointInRing(t, e.getCoordinates()) : _.EXTERIOR;
};
$e.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== _.EXTERIOR;
};
$e.prototype.updateLocationInfo = function(t) {
  t === _.INTERIOR && (this._isIn = !0), t === _.BOUNDARY && this._numBoundaries++;
};
$e.prototype.computeLocation = function(t, e) {
  var r = this;
  if (e instanceof ye && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof mt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof At)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Dn)
    for (var i = e, o = 0; o < i.getNumGeometries(); o++) {
      var s = i.getGeometryN(o);
      r.updateLocationInfo(r.locateInternal(t, s));
    }
  else if (e instanceof Pr)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      r.updateLocationInfo(r.locateInternal(t, l));
    }
  else if (e instanceof ae)
    for (var c = new Rr(e); c.hasNext(); ) {
      var f = c.next();
      f !== e && r.computeLocation(t, f);
    }
};
$e.prototype.locate = function(t, e) {
  return e.isEmpty() ? _.EXTERIOR : e instanceof mt ? this.locateInternal(t, e) : e instanceof At ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? _.BOUNDARY : this._numBoundaries > 0 || this._isIn ? _.INTERIOR : _.EXTERIOR);
};
$e.prototype.interfaces_ = function() {
  return [];
};
$e.prototype.getClass = function() {
  return $e;
};
var ie = function n() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    n.call(this, t, n.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._component = r, this._segIndex = i, this._pt = o;
  }
}, Ku = { INSIDE_AREA: { configurable: !0 } };
ie.prototype.isInsideArea = function() {
  return this._segIndex === ie.INSIDE_AREA;
};
ie.prototype.getCoordinate = function() {
  return this._pt;
};
ie.prototype.getGeometryComponent = function() {
  return this._component;
};
ie.prototype.getSegmentIndex = function() {
  return this._segIndex;
};
ie.prototype.interfaces_ = function() {
  return [];
};
ie.prototype.getClass = function() {
  return ie;
};
Ku.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties(ie, Ku);
var un = function(t) {
  this._pts = t || null;
};
un.prototype.filter = function(t) {
  t instanceof ye && this._pts.add(t);
};
un.prototype.interfaces_ = function() {
  return [dr];
};
un.prototype.getClass = function() {
  return un;
};
un.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof ye ? Ze.singletonList(t) : un.getPoints(t, new O());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e instanceof ye ? r.add(e) : e instanceof ae && e.apply(new un(r)), r;
  }
};
var ni = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
ni.prototype.filter = function(t) {
  (t instanceof ye || t instanceof mt || t instanceof At) && this._locations.add(new ie(t, 0, t.getCoordinate()));
};
ni.prototype.interfaces_ = function() {
  return [dr];
};
ni.prototype.getClass = function() {
  return ni;
};
ni.getLocations = function(t) {
  var e = new O();
  return t.apply(new ni(e)), e;
};
var Ht = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new $e(), this._minDistanceLocation = null, this._minDistance = U.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = r, this._geom[1] = i, this._terminateDistance = o;
  }
};
Ht.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = 1 - r, s = Qr.getPolygons(this._geom[r]);
    if (s.size() > 0) {
      var a = ni.getLocations(this._geom[o]);
      if (this.computeContainmentDistance(a, s, i), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[o] = i[0], this._minDistanceLocation[r] = i[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && V(arguments[0], He) && V(arguments[1], He)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], f = 0; f < u.size(); f++)
        for (var h = u.get(f), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(h, l.get(g), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof ie && arguments[1] instanceof At) {
      var p = arguments[0], y = arguments[1], d = arguments[2], v = p.getCoordinate();
      if (_.EXTERIOR !== this._ptLocator.locate(v, y))
        return this._minDistance = 0, d[0] = p, d[1] = new ie(y, v), null;
    }
  }
};
Ht.prototype.computeMinDistanceLinesPoints = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, r), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Ht.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = qt.getLines(this._geom[0]), r = qt.getLines(this._geom[1]), i = un.getPoints(this._geom[0]), o = un.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, r, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, o, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(r, i, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(i, o, t), this.updateMinDistance(t, !1);
};
Ht.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
Ht.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
Ht.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
Ht.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof mt && arguments[1] instanceof ye) {
      var e = arguments[0], r = arguments[1], i = arguments[2];
      if (e.getEnvelopeInternal().distance(r.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var o = e.getCoordinates(), s = r.getCoordinate(), a = 0; a < o.length - 1; a++) {
        var u = M.distancePointLine(s, o[a], o[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new k(o[a], o[a + 1]), c = l.closestPoint(s);
          i[0] = new ie(e, a, c), i[1] = new ie(r, 0, s);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof mt && arguments[1] instanceof mt) {
      var f = arguments[0], h = arguments[1], g = arguments[2];
      if (f.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var p = f.getCoordinates(), y = h.getCoordinates(), d = 0; d < p.length - 1; d++)
        for (var v = 0; v < y.length - 1; v++) {
          var C = M.distanceLineLine(p[d], p[d + 1], y[v], y[v + 1]);
          if (C < t._minDistance) {
            t._minDistance = C;
            var I = new k(p[d], p[d + 1]), N = new k(y[v], y[v + 1]), L = I.closestPoints(N);
            g[0] = new ie(f, d, L[0]), g[1] = new ie(h, v, L[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
Ht.prototype.computeMinDistancePoints = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = s.getCoordinate().distance(u.getCoordinate());
      if (l < i._minDistance && (i._minDistance = l, r[0] = new ie(s, 0, s.getCoordinate()), r[1] = new ie(u, 0, u.getCoordinate())), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Ht.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new gt("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
Ht.prototype.computeMinDistanceLines = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, r), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Ht.prototype.interfaces_ = function() {
  return [];
};
Ht.prototype.getClass = function() {
  return Ht;
};
Ht.distance = function(t, e) {
  var r = new Ht(t, e);
  return r.distance();
};
Ht.isWithinDistance = function(t, e, r) {
  var i = new Ht(t, e, r);
  return i.distance() <= r;
};
Ht.nearestPoints = function(t, e) {
  var r = new Ht(t, e);
  return r.nearestPoints();
};
var Zt = function() {
  this._pt = [new m(), new m()], this._distance = U.NaN, this._isNull = !0;
};
Zt.prototype.getCoordinates = function() {
  return this._pt;
};
Zt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
Zt.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i < this._distance && this.initialize(e, r, i);
  }
};
Zt.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(r), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
Zt.prototype.toString = function() {
  return je.toLineString(this._pt[0], this._pt[1]);
};
Zt.prototype.getDistance = function() {
  return this._distance;
};
Zt.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i > this._distance && this.initialize(e, r, i);
  }
};
Zt.prototype.interfaces_ = function() {
  return [];
};
Zt.prototype.getClass = function() {
  return Zt;
};
var lr = function() {
};
lr.prototype.interfaces_ = function() {
  return [];
};
lr.prototype.getClass = function() {
  return lr;
};
lr.computeDistance = function() {
  if (arguments[2] instanceof Zt && arguments[0] instanceof mt && arguments[1] instanceof m)
    for (var t = arguments[0], e = arguments[1], r = arguments[2], i = new k(), o = t.getCoordinates(), s = 0; s < o.length - 1; s++) {
      i.setCoordinates(o[s], o[s + 1]);
      var a = i.closestPoint(e);
      r.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Zt && arguments[0] instanceof At && arguments[1] instanceof m) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    lr.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      lr.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof Zt && arguments[0] instanceof z && arguments[1] instanceof m) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof mt)
      lr.computeDistance(h, g, p);
    else if (h instanceof At)
      lr.computeDistance(h, g, p);
    else if (h instanceof ae)
      for (var y = h, d = 0; d < y.getNumGeometries(); d++) {
        var v = y.getGeometryN(d);
        lr.computeDistance(v, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof Zt && arguments[0] instanceof k && arguments[1] instanceof m) {
    var C = arguments[0], I = arguments[1], N = arguments[2], L = C.closestPoint(I);
    N.setMinimum(L, I);
  }
};
var Fe = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new Zt(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, ia = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
Fe.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
Fe.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new gt("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
Fe.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
Fe.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
Fe.prototype.computeOrientedDistance = function(t, e, r) {
  var i = new ii(e);
  if (t.apply(i), r.setMaximum(i.getMaxPointDistance()), this._densifyFrac > 0) {
    var o = new yn(e, this._densifyFrac);
    t.apply(o), r.setMaximum(o.getMaxPointDistance());
  }
};
Fe.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
Fe.prototype.interfaces_ = function() {
  return [];
};
Fe.prototype.getClass = function() {
  return Fe;
};
Fe.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new Fe(t, e);
    return r.distance();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new Fe(i, o);
    return a.setDensifyFraction(s), a.distance();
  }
};
ia.MaxPointDistanceFilter.get = function() {
  return ii;
};
ia.MaxDensifiedByFractionDistanceFilter.get = function() {
  return yn;
};
Object.defineProperties(Fe, ia);
var ii = function() {
  this._maxPtDist = new Zt(), this._minPtDist = new Zt(), this._euclideanDist = new lr(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
ii.prototype.filter = function(t) {
  this._minPtDist.initialize(), lr.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ii.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ii.prototype.interfaces_ = function() {
  return [Or];
};
ii.prototype.getClass = function() {
  return ii;
};
var yn = function() {
  this._maxPtDist = new Zt(), this._minPtDist = new Zt(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
yn.prototype.filter = function(t, e) {
  var r = this;
  if (e === 0)
    return null;
  for (var i = t.getCoordinate(e - 1), o = t.getCoordinate(e), s = (o.x - i.x) / this._numSubSegs, a = (o.y - i.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = i.x + u * s, c = i.y + u * a, f = new m(l, c);
    r._minPtDist.initialize(), lr.computeDistance(r._geom, f, r._minPtDist), r._maxPtDist.setMaximum(r._minPtDist);
  }
};
yn.prototype.isDone = function() {
  return !1;
};
yn.prototype.isGeometryChanged = function() {
  return !1;
};
yn.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
yn.prototype.interfaces_ = function() {
  return [Ke];
};
yn.prototype.getClass = function() {
  return yn;
};
var ve = function(t, e, r) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = r || null;
}, oa = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
ve.prototype.checkMaximumDistance = function(t, e, r) {
  var i = new Fe(e, t);
  if (i.setDensifyFraction(0.25), this._maxDistanceFound = i.orientedDistance(), this._maxDistanceFound > r) {
    this._isValid = !1;
    var o = i.getCoordinates();
    this._errorLocation = o[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + je.toLineString(o[0], o[1]) + ")";
  }
};
ve.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = ve.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), ve.VERBOSE && Wt.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
ve.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof At || this._input instanceof Pr || this._input instanceof ae))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
ve.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
ve.prototype.checkMinimumDistance = function(t, e, r) {
  var i = new Ht(t, e, r);
  if (this._minDistanceFound = i.distance(), this._minDistanceFound < r) {
    this._isValid = !1;
    var o = i.nearestPoints();
    this._errorLocation = i.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + je.toLineString(o[0], o[1]) + " )";
  }
};
ve.prototype.checkPositiveValid = function() {
  var t = this._result.getBoundary();
  if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(this._input, t, this._maxValidDistance);
};
ve.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
ve.prototype.getPolygonLines = function(t) {
  for (var e = new O(), r = new qt(e), i = Qr.getPolygons(t), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    s.apply(r);
  }
  return t.getFactory().buildGeometry(e);
};
ve.prototype.getErrorMessage = function() {
  return this._errMsg;
};
ve.prototype.interfaces_ = function() {
  return [];
};
ve.prototype.getClass = function() {
  return ve;
};
oa.VERBOSE.get = function() {
  return !1;
};
oa.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(ve, oa);
var jt = function(t, e, r) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = r || null;
}, sa = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
jt.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
jt.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * jt.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new F(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var r = new F(this._result.getEnvelopeInternal());
  r.expandBy(t), r.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(r)), this.report("Envelope");
};
jt.prototype.checkDistance = function() {
  var t = new ve(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
jt.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
jt.prototype.checkPolygonal = function() {
  this._result instanceof At || this._result instanceof Pr || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
};
jt.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
jt.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
jt.prototype.checkExpectedEmpty = function() {
  if (this._input.getDimension() >= 2 || this._distance > 0)
    return null;
  this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), this.report("ExpectedEmpty");
};
jt.prototype.report = function(t) {
  if (!jt.VERBOSE)
    return null;
  Wt.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
};
jt.prototype.getErrorMessage = function() {
  return this._errorMsg;
};
jt.prototype.interfaces_ = function() {
  return [];
};
jt.prototype.getClass = function() {
  return jt;
};
jt.isValidMsg = function(t, e, r) {
  var i = new jt(t, e, r);
  return i.isValid() ? null : i.getErrorMessage();
};
jt.isValid = function(t, e, r) {
  var i = new jt(t, e, r);
  return !!i.isValid();
};
sa.VERBOSE.get = function() {
  return !1;
};
sa.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(jt, sa);
var Cr = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Cr.prototype.getCoordinates = function() {
  return this._pts;
};
Cr.prototype.size = function() {
  return this._pts.length;
};
Cr.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Cr.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Cr.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : $n.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Cr.prototype.setData = function(t) {
  this._data = t;
};
Cr.prototype.getData = function() {
  return this._data;
};
Cr.prototype.toString = function() {
  return je.toLineString(new Et(this._pts));
};
Cr.prototype.interfaces_ = function() {
  return [Mr];
};
Cr.prototype.getClass = function() {
  return Cr;
};
var Bt = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new O(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
Bt.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
Bt.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
Bt.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
Bt.prototype.count = function() {
  return this._intersectionCount;
};
Bt.prototype.getIntersections = function() {
  return this._intersections;
};
Bt.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Bt.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
Bt.prototype.processIntersections = function(t, e, r, i) {
  if (!this._findAllIntersections && this.hasIntersection() || t === r && e === i)
    return null;
  if (this._isCheckEndSegmentsOnly) {
    var o = this.isEndSegment(t, e) || this.isEndSegment(r, i);
    if (!o)
      return null;
  }
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = r.getCoordinates()[i], l = r.getCoordinates()[i + 1];
  this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = s, this._intSegments[1] = a, this._intSegments[2] = u, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
};
Bt.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
Bt.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
Bt.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
Bt.prototype.interfaces_ = function() {
  return [Fn];
};
Bt.prototype.getClass = function() {
  return Bt;
};
Bt.createAllIntersectionsFinder = function(t) {
  var e = new Bt(t);
  return e.setFindAllIntersections(!0), e;
};
Bt.createAnyIntersectionFinder = function(t) {
  return new Bt(t);
};
Bt.createIntersectionCounter = function(t) {
  var e = new Bt(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var tr = function() {
  this._li = new Yn(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
tr.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
tr.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
tr.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
tr.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
tr.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new Bt(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new ra();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
tr.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new $r(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
tr.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + je.toLineString(t[0], t[1]) + " and " + je.toLineString(t[2], t[3]);
};
tr.prototype.interfaces_ = function() {
  return [];
};
tr.prototype.getClass = function() {
  return tr;
};
tr.computeIntersections = function(t) {
  var e = new tr(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var Gn = function n() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new tr(n.toSegmentStrings(t));
};
Gn.prototype.checkValid = function() {
  this._nv.checkValid();
};
Gn.prototype.interfaces_ = function() {
  return [];
};
Gn.prototype.getClass = function() {
  return Gn;
};
Gn.toSegmentStrings = function(t) {
  for (var e = new O(), r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e.add(new Cr(i.getCoordinates(), i));
  }
  return e;
};
Gn.checkValid = function(t) {
  var e = new Gn(t);
  e.checkValid();
};
var oi = function(t) {
  this._mapOp = t;
};
oi.prototype.map = function(t) {
  for (var e = this, r = new O(), i = 0; i < t.getNumGeometries(); i++) {
    var o = e._mapOp.map(t.getGeometryN(i));
    o.isEmpty() || r.add(o);
  }
  return t.getFactory().createGeometryCollection(W.toGeometryArray(r));
};
oi.prototype.interfaces_ = function() {
  return [];
};
oi.prototype.getClass = function() {
  return oi;
};
oi.map = function(t, e) {
  var r = new oi(e);
  return r.map(t);
};
var Ir = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new O(), this._resultLineList = new O();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = r;
};
Ir.prototype.collectLines = function(t) {
  for (var e = this, r = this._op.getGraph().getEdgeEnds().iterator(); r.hasNext(); ) {
    var i = r.next();
    e.collectLineEdge(i, t, e._lineEdgesList), e.collectBoundaryTouchEdge(i, t, e._lineEdgesList);
  }
};
Ir.prototype.labelIsolatedLine = function(t, e) {
  var r = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, r);
};
Ir.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
Ir.prototype.collectLineEdge = function(t, e, r) {
  var i = t.getLabel(), o = t.getEdge();
  t.isLineEdge() && !t.isVisited() && q.isResultOfOp(i, e) && !o.isCovered() && (r.add(o), t.setVisitedEdge(!0));
};
Ir.prototype.findCoveredLineEdges = function() {
  for (var t = this, e = this._op.getGraph().getNodes().iterator(); e.hasNext(); ) {
    var r = e.next();
    r.getEdges().findCoveredLineEdges();
  }
  for (var i = this._op.getGraph().getEdgeEnds().iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getEdge();
    if (o.isLineEdge() && !s.isCoveredSet()) {
      var a = t._op.isCoveredByA(o.getCoordinate());
      s.setCovered(a);
    }
  }
};
Ir.prototype.labelIsolatedLines = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getLabel();
    i.isIsolated() && (o.isNull(0) ? e.labelIsolatedLine(i, 0) : e.labelIsolatedLine(i, 1));
  }
};
Ir.prototype.buildLines = function(t) {
  for (var e = this, r = this._lineEdgesList.iterator(); r.hasNext(); ) {
    var i = r.next(), o = e._geometryFactory.createLineString(i.getCoordinates());
    e._resultLineList.add(o), i.setInResult(!0);
  }
};
Ir.prototype.collectBoundaryTouchEdge = function(t, e, r) {
  var i = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  X.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), q.isResultOfOp(i, e) && e === q.INTERSECTION && (r.add(t.getEdge()), t.setVisitedEdge(!0));
};
Ir.prototype.interfaces_ = function() {
  return [];
};
Ir.prototype.getClass = function() {
  return Ir;
};
var si = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new O();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
si.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var r = this._geometryFactory.createPoint(e);
    this._resultPointList.add(r);
  }
};
si.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, r = this._op.getGraph().getNodes().iterator(); r.hasNext(); ) {
    var i = r.next();
    if (!i.isInResult() && !i.isIncidentEdgeInResult() && (i.getEdges().getDegree() === 0 || t === q.INTERSECTION)) {
      var o = i.getLabel();
      q.isResultOfOp(o, t) && e.filterCoveredNodeToPoint(i);
    }
  }
};
si.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
si.prototype.interfaces_ = function() {
  return [];
};
si.prototype.getClass = function() {
  return si;
};
var de = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
de.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
de.prototype.transformPolygon = function(t, e) {
  var r = this, i = !0, o = this.transformLinearRing(t.getExteriorRing(), t);
  (o === null || !(o instanceof Tr) || o.isEmpty()) && (i = !1);
  for (var s = new O(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = r.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof Tr || (i = !1), s.add(u));
  }
  if (i)
    return this._factory.createPolygon(o, s.toArray([]));
  var l = new O();
  return o !== null && l.add(o), l.addAll(s), this._factory.buildGeometry(l);
};
de.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
de.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
de.prototype.transformMultiLineString = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformLineString(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
de.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
de.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
de.prototype.transformMultiPoint = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformPoint(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
de.prototype.transformMultiPolygon = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformPolygon(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
de.prototype.copy = function(t) {
  return t.copy();
};
de.prototype.transformGeometryCollection = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transform(t.getGeometryN(o));
    s !== null && (r._pruneEmptyGeometry && s.isEmpty() || i.add(s));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(W.toGeometryArray(i)) : this._factory.buildGeometry(i);
};
de.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof ye)
    return this.transformPoint(t, null);
  if (t instanceof bi)
    return this.transformMultiPoint(t, null);
  if (t instanceof Tr)
    return this.transformLinearRing(t, null);
  if (t instanceof mt)
    return this.transformLineString(t, null);
  if (t instanceof Dn)
    return this.transformMultiLineString(t, null);
  if (t instanceof At)
    return this.transformPolygon(t, null);
  if (t instanceof Pr)
    return this.transformMultiPolygon(t, null);
  if (t instanceof ae)
    return this.transformGeometryCollection(t, null);
  throw new gt("Unknown Geometry subtype: " + t.getClass().getName());
};
de.prototype.transformLinearRing = function(t, e) {
  var r = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (r === null)
    return this._factory.createLinearRing(null);
  var i = r.size();
  return i > 0 && i < 4 && !this._preserveType ? this._factory.createLineString(r) : this._factory.createLinearRing(r);
};
de.prototype.interfaces_ = function() {
  return [];
};
de.prototype.getClass = function() {
  return de;
};
var kr = function n() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new k(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof mt && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    n.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var r = arguments[0], i = arguments[1];
    this._srcPts = r, this._isClosed = n.isClosed(r), this._snapTolerance = i;
  }
};
kr.prototype.snapVertices = function(t, e) {
  for (var r = this, i = this._isClosed ? t.size() - 1 : t.size(), o = 0; o < i; o++) {
    var s = t.get(o), a = r.findSnapForVertex(s, e);
    a !== null && (t.set(o, new m(a)), o === 0 && r._isClosed && t.set(t.size() - 1, new m(a)));
  }
};
kr.prototype.findSnapForVertex = function(t, e) {
  for (var r = this, i = 0; i < e.length; i++) {
    if (t.equals2D(e[i]))
      return null;
    if (t.distance(e[i]) < r._snapTolerance)
      return e[i];
  }
  return null;
};
kr.prototype.snapTo = function(t) {
  var e = new Eo(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var r = e.toCoordinateArray();
  return r;
};
kr.prototype.snapSegments = function(t, e) {
  var r = this;
  if (e.length === 0)
    return null;
  var i = e.length;
  e[0].equals2D(e[e.length - 1]) && (i = e.length - 1);
  for (var o = 0; o < i; o++) {
    var s = e[o], a = r.findSegmentIndexToSnap(s, t);
    a >= 0 && t.add(a + 1, new m(s), !1);
  }
};
kr.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var r = this, i = U.MAX_VALUE, o = -1, s = 0; s < e.size() - 1; s++) {
    if (r._seg.p0 = e.get(s), r._seg.p1 = e.get(s + 1), r._seg.p0.equals2D(t) || r._seg.p1.equals2D(t)) {
      if (r._allowSnappingToSourceVertices)
        continue;
      return -1;
    }
    var a = r._seg.distance(t);
    a < r._snapTolerance && a < i && (i = a, o = s);
  }
  return o;
};
kr.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
kr.prototype.interfaces_ = function() {
  return [];
};
kr.prototype.getClass = function() {
  return kr;
};
kr.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var Ct = function(t) {
  this._srcGeom = t || null;
}, Qu = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
Ct.prototype.snapTo = function(t, e) {
  var r = this.extractTargetCoordinates(t), i = new Zu(e, r);
  return i.transform(this._srcGeom);
};
Ct.prototype.snapToSelf = function(t, e) {
  var r = this.extractTargetCoordinates(this._srcGeom), i = new Zu(t, r, !0), o = i.transform(this._srcGeom), s = o;
  return e && V(s, hn) && (s = o.buffer(0)), s;
};
Ct.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), r = e / 10;
  return r;
};
Ct.prototype.extractTargetCoordinates = function(t) {
  for (var e = new pr(), r = t.getCoordinates(), i = 0; i < r.length; i++)
    e.add(r[i]);
  return e.toArray(new Array(0).fill(null));
};
Ct.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = U.MAX_VALUE, r = 0; r < t.length - 1; r++) {
    var i = t[r].distance(t[r + 1]);
    i < e && (e = i);
  }
  return e;
};
Ct.prototype.interfaces_ = function() {
  return [];
};
Ct.prototype.getClass = function() {
  return Ct;
};
Ct.snap = function(t, e, r) {
  var i = new Array(2).fill(null), o = new Ct(t);
  i[0] = o.snapTo(e, r);
  var s = new Ct(e);
  return i[1] = s.snapTo(i[0], r), i;
};
Ct.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = Ct.computeSizeBasedSnapTolerance(t), r = t.getPrecisionModel();
    if (r.getType() === tt.FIXED) {
      var i = 1 / r.getScale() * 2 / 1.415;
      i > e && (e = i);
    }
    return e;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return Math.min(Ct.computeOverlaySnapTolerance(o), Ct.computeOverlaySnapTolerance(s));
  }
};
Ct.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), r = Math.min(e.getHeight(), e.getWidth()), i = r * Ct.SNAP_PRECISION_FACTOR;
  return i;
};
Ct.snapToSelf = function(t, e, r) {
  var i = new Ct(t);
  return i.snapToSelf(e, r);
};
Qu.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(Ct, Qu);
var Zu = function(n) {
  function t(e, r, i) {
    n.call(this), this._snapTolerance = e || null, this._snapPts = r || null, this._isSelfSnap = i !== void 0 ? i : !1;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(r, i) {
    var o = new kr(r, this._snapTolerance);
    return o.setAllowSnappingToSourceVertices(this._isSelfSnap), o.snapTo(i);
  }, t.prototype.transformCoordinates = function(r, i) {
    var o = r.toCoordinateArray(), s = this.snapLine(o, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(de), re = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
re.prototype.getCommon = function() {
  return U.longBitsToDouble(this._commonBits);
};
re.prototype.add = function(t) {
  var e = U.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = re.signExpBits(this._commonBits), this._isFirst = !1, null;
  var r = re.signExpBits(e);
  if (r !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = re.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = re.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
re.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = U.longBitsToDouble(t), r = U.toBinaryString(t), i = "0000000000000000000000000000000000000000000000000000000000000000" + r, o = i.substring(i.length - 64), s = o.substring(0, 1) + "  " + o.substring(1, 12) + "(exp) " + o.substring(12) + " [ " + e + " ]";
    return s;
  }
};
re.prototype.interfaces_ = function() {
  return [];
};
re.prototype.getClass = function() {
  return re;
};
re.getBit = function(t, e) {
  var r = 1 << e;
  return t & r ? 1 : 0;
};
re.signExpBits = function(t) {
  return t >> 52;
};
re.zeroLowerBits = function(t, e) {
  var r = (1 << e) - 1, i = ~r, o = t & i;
  return o;
};
re.numCommonMostSigMantissaBits = function(t, e) {
  for (var r = 0, i = 52; i >= 0; i--) {
    if (re.getBit(t, i) !== re.getBit(e, i))
      return r;
    r++;
  }
  return 52;
};
var _n = function() {
  this._commonCoord = null, this._ccFilter = new ai();
}, aa = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
_n.prototype.addCommonBits = function(t) {
  var e = new En(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
_n.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new m(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var r = new En(e);
  return t.apply(r), t.geometryChanged(), t;
};
_n.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
_n.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
_n.prototype.interfaces_ = function() {
  return [];
};
_n.prototype.getClass = function() {
  return _n;
};
aa.CommonCoordinateFilter.get = function() {
  return ai;
};
aa.Translater.get = function() {
  return En;
};
Object.defineProperties(_n, aa);
var ai = function() {
  this._commonBitsX = new re(), this._commonBitsY = new re();
};
ai.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
ai.prototype.getCommonCoordinate = function() {
  return new m(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
ai.prototype.interfaces_ = function() {
  return [Or];
};
ai.prototype.getClass = function() {
  return ai;
};
var En = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
En.prototype.filter = function(t, e) {
  var r = t.getOrdinate(e, 0) + this.trans.x, i = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, r), t.setOrdinate(e, 1, i);
};
En.prototype.isDone = function() {
  return !1;
};
En.prototype.isGeometryChanged = function() {
  return !0;
};
En.prototype.interfaces_ = function() {
  return [Ke];
};
En.prototype.getClass = function() {
  return En;
};
var Gt = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
Gt.prototype.selfSnap = function(t) {
  var e = new Ct(t), r = e.snapTo(t, this._snapTolerance);
  return r;
};
Gt.prototype.removeCommonBits = function(t) {
  this._cbr = new _n(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
Gt.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
Gt.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), r = q.overlayOp(e[0], e[1], t);
  return this.prepareResult(r);
};
Gt.prototype.checkValid = function(t) {
  t.isValid() || Wt.out.println("Snapped geometry is invalid");
};
Gt.prototype.computeSnapTolerance = function() {
  this._snapTolerance = Ct.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
Gt.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), r = Ct.snap(e[0], e[1], this._snapTolerance);
  return r;
};
Gt.prototype.interfaces_ = function() {
  return [];
};
Gt.prototype.getClass = function() {
  return Gt;
};
Gt.overlayOp = function(t, e, r) {
  var i = new Gt(t, e);
  return i.getResultGeometry(r);
};
Gt.union = function(t, e) {
  return Gt.overlayOp(t, e, q.UNION);
};
Gt.intersection = function(t, e) {
  return Gt.overlayOp(t, e, q.INTERSECTION);
};
Gt.symDifference = function(t, e) {
  return Gt.overlayOp(t, e, q.SYMDIFFERENCE);
};
Gt.difference = function(t, e) {
  return Gt.overlayOp(t, e, q.DIFFERENCE);
};
var ce = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
ce.prototype.getResultGeometry = function(t) {
  var e = null, r = !1, i = null;
  try {
    e = q.overlayOp(this._geom[0], this._geom[1], t);
    var o = !0;
    o && (r = !0);
  } catch (s) {
    if (s instanceof Zr)
      i = s;
    else
      throw s;
  } finally {
  }
  if (!r)
    try {
      e = Gt.overlayOp(this._geom[0], this._geom[1], t);
    } catch (s) {
      throw s instanceof Zr ? i : s;
    } finally {
    }
  return e;
};
ce.prototype.interfaces_ = function() {
  return [];
};
ce.prototype.getClass = function() {
  return ce;
};
ce.overlayOp = function(t, e, r) {
  var i = new ce(t, e);
  return i.getResultGeometry(r);
};
ce.union = function(t, e) {
  return ce.overlayOp(t, e, q.UNION);
};
ce.intersection = function(t, e) {
  return ce.overlayOp(t, e, q.INTERSECTION);
};
ce.symDifference = function(t, e) {
  return ce.overlayOp(t, e, q.SYMDIFFERENCE);
};
ce.difference = function(t, e) {
  return ce.overlayOp(t, e, q.DIFFERENCE);
};
var po = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
po.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
po.prototype.interfaces_ = function() {
  return [];
};
po.prototype.getClass = function() {
  return po;
};
var Ce = function n() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = n.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._eventType = n.INSERT, this._label = r, this._xValue = i, this._obj = o;
  }
}, ua = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
Ce.prototype.isDelete = function() {
  return this._eventType === Ce.DELETE;
};
Ce.prototype.setDeleteEventIndex = function(t) {
  this._deleteEventIndex = t;
};
Ce.prototype.getObject = function() {
  return this._obj;
};
Ce.prototype.compareTo = function(t) {
  var e = t;
  return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
};
Ce.prototype.getInsertEvent = function() {
  return this._insertEvent;
};
Ce.prototype.isInsert = function() {
  return this._eventType === Ce.INSERT;
};
Ce.prototype.isSameLabel = function(t) {
  return this._label === null ? !1 : this._label === t._label;
};
Ce.prototype.getDeleteEventIndex = function() {
  return this._deleteEventIndex;
};
Ce.prototype.interfaces_ = function() {
  return [ze];
};
Ce.prototype.getClass = function() {
  return Ce;
};
ua.INSERT.get = function() {
  return 1;
};
ua.DELETE.get = function() {
  return 2;
};
Object.defineProperties(Ce, ua);
var jo = function() {
};
jo.prototype.interfaces_ = function() {
  return [];
};
jo.prototype.getClass = function() {
  return jo;
};
var Kt = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = r;
};
Kt.prototype.isTrivialIntersection = function(t, e, r, i) {
  if (t === r && this._li.getIntersectionNum() === 1) {
    if (Kt.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.getNumPoints() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Kt.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Kt.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
Kt.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Kt.prototype.isBoundaryPointInternal = function(t, e) {
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getCoordinate();
    if (t.isIntersection(o))
      return !0;
  }
  return !1;
};
Kt.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Kt.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Kt.prototype.isDone = function() {
  return this._isDone;
};
Kt.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
Kt.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
Kt.prototype.addIntersections = function(t, e, r, i) {
  if (t === r && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = r.getCoordinates()[i], u = r.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), r.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, r, i) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
Kt.prototype.interfaces_ = function() {
  return [];
};
Kt.prototype.getClass = function() {
  return Kt;
};
Kt.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var Ff = function(n) {
  function t() {
    n.call(this), this.events = new O(), this.nOverlaps = null;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var r = this;
    Ze.sort(this.events);
    for (var i = 0; i < this.events.size(); i++) {
      var o = r.events.get(i);
      o.isDelete() && o.getInsertEvent().setDeleteEventIndex(i);
    }
  }, t.prototype.computeIntersections = function() {
    var r = this;
    if (arguments.length === 1) {
      var i = arguments[0];
      this.nOverlaps = 0, this.prepareEvents();
      for (var o = 0; o < this.events.size(); o++) {
        var s = r.events.get(o);
        if (s.isInsert() && r.processOverlaps(o, s.getDeleteEventIndex(), s, i), i.isDone())
          break;
      }
    } else if (arguments.length === 3) {
      if (arguments[2] instanceof Kt && V(arguments[0], He) && V(arguments[1], He)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && V(arguments[0], He) && arguments[1] instanceof Kt) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        h ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(f);
      }
    }
  }, t.prototype.addEdge = function(r, i) {
    for (var o = this, s = r.getMonotoneChainEdge(), a = s.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new po(s, u), c = new Ce(i, s.getMinX(u), l);
      o.events.add(c), o.events.add(new Ce(s.getMaxX(u), c));
    }
  }, t.prototype.processOverlaps = function(r, i, o, s) {
    for (var a = this, u = o.getObject(), l = r; l < i; l++) {
      var c = a.events.get(l);
      if (c.isInsert()) {
        var f = c.getObject();
        o.isSameLabel(c) || (u.computeIntersections(f, s), a.nOverlaps++);
      }
    }
  }, t.prototype.addEdges = function() {
    var r = this;
    if (arguments.length === 1)
      for (var i = arguments[0], o = i.iterator(); o.hasNext(); ) {
        var s = o.next();
        r.addEdge(s, s);
      }
    else if (arguments.length === 2)
      for (var a = arguments[0], u = arguments[1], l = a.iterator(); l.hasNext(); ) {
        var c = l.next();
        r.addEdge(c, u);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(jo), Br = function() {
  this._min = U.POSITIVE_INFINITY, this._max = U.NEGATIVE_INFINITY;
}, Ju = { NodeComparator: { configurable: !0 } };
Br.prototype.getMin = function() {
  return this._min;
};
Br.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
Br.prototype.getMax = function() {
  return this._max;
};
Br.prototype.toString = function() {
  return je.toLineString(new m(this._min, 0), new m(this._max, 0));
};
Br.prototype.interfaces_ = function() {
  return [];
};
Br.prototype.getClass = function() {
  return Br;
};
Ju.NodeComparator.get = function() {
  return vo;
};
Object.defineProperties(Br, Ju);
var vo = function() {
};
vo.prototype.compare = function(t, e) {
  var r = t, i = e, o = (r._min + r._max) / 2, s = (i._min + i._max) / 2;
  return o < s ? -1 : o > s ? 1 : 0;
};
vo.prototype.interfaces_ = function() {
  return [Ei];
};
vo.prototype.getClass = function() {
  return vo;
};
var kf = function(n) {
  function t() {
    n.call(this), this._item = null;
    var e = arguments[0], r = arguments[1], i = arguments[2];
    this._min = e, this._max = r, this._item = i;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.query = function(r, i, o) {
    if (!this.intersects(r, i))
      return null;
    o.visitItem(this._item);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Br), Bf = function(n) {
  function t() {
    n.call(this), this._node1 = null, this._node2 = null;
    var e = arguments[0], r = arguments[1];
    this._node1 = e, this._node2 = r, this.buildExtent(this._node1, this._node2);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.buildExtent = function(r, i) {
    this._min = Math.min(r._min, i._min), this._max = Math.max(r._max, i._max);
  }, t.prototype.query = function(r, i, o) {
    if (!this.intersects(r, i))
      return null;
    this._node1 !== null && this._node1.query(r, i, o), this._node2 !== null && this._node2.query(r, i, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Br), Gr = function() {
  this._leaves = new O(), this._root = null, this._level = 0;
};
Gr.prototype.buildTree = function() {
  var t = this;
  Ze.sort(this._leaves, new Br.NodeComparator());
  for (var e = this._leaves, r = null, i = new O(); ; ) {
    if (t.buildLevel(e, i), i.size() === 1)
      return i.get(0);
    r = e, e = i, i = r;
  }
};
Gr.prototype.insert = function(t, e, r) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new kf(t, e, r));
};
Gr.prototype.query = function(t, e, r) {
  this.init(), this._root.query(t, e, r);
};
Gr.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
Gr.prototype.printNode = function(t) {
  Wt.out.println(je.toLineString(new m(t._min, this._level), new m(t._max, this._level)));
};
Gr.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
Gr.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var r = 0; r < t.size(); r += 2) {
    var i = t.get(r), o = r + 1 < t.size() ? t.get(r) : null;
    if (o === null)
      e.add(i);
    else {
      var s = new Bf(t.get(r), t.get(r + 1));
      e.add(s);
    }
  }
};
Gr.prototype.interfaces_ = function() {
  return [];
};
Gr.prototype.getClass = function() {
  return Gr;
};
var Di = function() {
  this._items = new O();
};
Di.prototype.visitItem = function(t) {
  this._items.add(t);
};
Di.prototype.getItems = function() {
  return this._items;
};
Di.prototype.interfaces_ = function() {
  return [gn];
};
Di.prototype.getClass = function() {
  return Di;
};
var Mi = function() {
  this._index = null;
  var t = arguments[0];
  if (!V(t, hn))
    throw new gt("Argument must be Polygonal");
  this._index = new zn(t);
}, la = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
Mi.prototype.locate = function(t) {
  var e = new fr(t), r = new Ai(e);
  return this._index.query(t.y, t.y, r), e.getLocation();
};
Mi.prototype.interfaces_ = function() {
  return [Oi];
};
Mi.prototype.getClass = function() {
  return Mi;
};
la.SegmentVisitor.get = function() {
  return Ai;
};
la.IntervalIndexedGeometry.get = function() {
  return zn;
};
Object.defineProperties(Mi, la);
var Ai = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
Ai.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
Ai.prototype.interfaces_ = function() {
  return [gn];
};
Ai.prototype.getClass = function() {
  return Ai;
};
var zn = function() {
  this._index = new Gr();
  var t = arguments[0];
  this.init(t);
};
zn.prototype.init = function(t) {
  for (var e = this, r = qt.getLines(t), i = r.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getCoordinates();
    e.addLine(s);
  }
};
zn.prototype.addLine = function(t) {
  for (var e = this, r = 1; r < t.length; r++) {
    var i = new k(t[r - 1], t[r]), o = Math.min(i.p0.y, i.p1.y), s = Math.max(i.p0.y, i.p1.y);
    e._index.insert(o, s, i);
  }
};
zn.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new Di();
    return this._index.query(t, e, r), r.getItems();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    this._index.query(i, o, s);
  }
};
zn.prototype.interfaces_ = function() {
  return [];
};
zn.prototype.getClass = function() {
  return zn;
};
var Ki = function(n) {
  function t() {
    if (n.call(this), this._parentGeom = null, this._lineEdgeMap = new Au(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new $e(), arguments.length === 2) {
      var e = arguments[0], r = arguments[1], i = ke.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = r, this._boundaryNodeRule = i, r !== null && this.add(r);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2];
      this._argIndex = o, this._parentGeom = s, this._boundaryNodeRule = a, s !== null && this.add(s);
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(r, i) {
    var o = this._nodes.addNode(i), s = o.getLabel(), a = 1, u = _.NONE;
    u = s.getLocation(r, P.ON), u === _.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    s.setLocation(r, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      return this.computeSelfNodes(r, i, !1);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Kt(o, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof Tr || this._parentGeom instanceof At || this._parentGeom instanceof Pr, f = s || !c;
      return l.computeIntersections(this._edges, u, f), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(r) {
    for (var i = this._edges.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.eiList.addSplitEdges(r);
    }
  }, t.prototype.computeEdgeIntersections = function(r, i, o) {
    var s = new Kt(i, o, !0);
    s.setBoundaryNodes(this.getBoundaryNodes(), r.getBoundaryNodes());
    var a = this.createEdgeSetIntersector();
    return a.computeIntersections(this._edges, r._edges, s), s;
  }, t.prototype.getGeometry = function() {
    return this._parentGeom;
  }, t.prototype.getBoundaryNodeRule = function() {
    return this._boundaryNodeRule;
  }, t.prototype.hasTooFewPoints = function() {
    return this._hasTooFewPoints;
  }, t.prototype.addPoint = function() {
    if (arguments[0] instanceof ye) {
      var r = arguments[0], i = r.getCoordinate();
      this.insertPoint(this._argIndex, i, _.INTERIOR);
    } else if (arguments[0] instanceof m) {
      var o = arguments[0];
      this.insertPoint(this._argIndex, o, _.INTERIOR);
    }
  }, t.prototype.addPolygon = function(r) {
    var i = this;
    this.addPolygonRing(r.getExteriorRing(), _.EXTERIOR, _.INTERIOR);
    for (var o = 0; o < r.getNumInteriorRing(); o++) {
      var s = r.getInteriorRingN(o);
      i.addPolygonRing(s, _.INTERIOR, _.EXTERIOR);
    }
  }, t.prototype.addEdge = function(r) {
    this.insertEdge(r);
    var i = r.getCoordinates();
    this.insertPoint(this._argIndex, i[0], _.BOUNDARY), this.insertPoint(this._argIndex, i[i.length - 1], _.BOUNDARY);
  }, t.prototype.addLineString = function(r) {
    var i = H.removeRepeatedPoints(r.getCoordinates());
    if (i.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = i[0], null;
    var o = new Ho(i, new nt(this._argIndex, _.INTERIOR));
    this._lineEdgeMap.put(r, o), this.insertEdge(o), X.isTrue(i.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, i[0]), this.insertBoundaryPoint(this._argIndex, i[i.length - 1]);
  }, t.prototype.getInvalidPoint = function() {
    return this._invalidPoint;
  }, t.prototype.getBoundaryPoints = function() {
    for (var r = this.getBoundaryNodes(), i = new Array(r.size()).fill(null), o = 0, s = r.iterator(); s.hasNext(); ) {
      var a = s.next();
      i[o++] = a.getCoordinate().copy();
    }
    return i;
  }, t.prototype.getBoundaryNodes = function() {
    return this._boundaryNodes === null && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
  }, t.prototype.addSelfIntersectionNode = function(r, i, o) {
    if (this.isBoundaryNode(r, i))
      return null;
    o === _.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(r, i) : this.insertPoint(r, i, o);
  }, t.prototype.addPolygonRing = function(r, i, o) {
    if (r.isEmpty())
      return null;
    var s = H.removeRepeatedPoints(r.getCoordinates());
    if (s.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = s[0], null;
    var a = i, u = o;
    M.isCCW(s) && (a = o, u = i);
    var l = new Ho(s, new nt(this._argIndex, _.BOUNDARY, a, u));
    this._lineEdgeMap.put(r, l), this.insertEdge(l), this.insertPoint(this._argIndex, s[0], _.BOUNDARY);
  }, t.prototype.insertPoint = function(r, i, o) {
    var s = this._nodes.addNode(i), a = s.getLabel();
    a === null ? s._label = new nt(r, o) : a.setLocation(r, o);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new Ff();
  }, t.prototype.addSelfIntersectionNodes = function(r) {
    for (var i = this, o = this._edges.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getLabel().getLocation(r), u = s.eiList.iterator(); u.hasNext(); ) {
        var l = u.next();
        i.addSelfIntersectionNode(r, l.coord, a);
      }
  }, t.prototype.add = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      if (r.isEmpty())
        return null;
      if (r instanceof Pr && (this._useBoundaryDeterminationRule = !1), r instanceof At)
        this.addPolygon(r);
      else if (r instanceof mt)
        this.addLineString(r);
      else if (r instanceof ye)
        this.addPoint(r);
      else if (r instanceof bi)
        this.addCollection(r);
      else if (r instanceof Dn)
        this.addCollection(r);
      else if (r instanceof Pr)
        this.addCollection(r);
      else if (r instanceof ae)
        this.addCollection(r);
      else
        throw new Error(r.getClass().getName());
    } else
      return n.prototype.add.apply(this, arguments);
  }, t.prototype.addCollection = function(r) {
    for (var i = this, o = 0; o < r.getNumGeometries(); o++) {
      var s = r.getGeometryN(o);
      i.add(s);
    }
  }, t.prototype.locate = function(r) {
    return V(this._parentGeom, hn) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new Mi(this._parentGeom)), this._areaPtLocator.locate(r)) : this._ptLocator.locate(r, this._parentGeom);
  }, t.prototype.findEdge = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      return this._lineEdgeMap.get(r);
    } else
      return n.prototype.findEdge.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.determineBoundary = function(r, i) {
    return r.isInBoundary(i) ? _.BOUNDARY : _.INTERIOR;
  }, t;
}(dt), Fi = function() {
  if (this._li = new Yn(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new Ki(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = ke.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(r.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(r.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Ki(0, e, i), this._arg[1] = new Ki(1, r, i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    o.getPrecisionModel().compareTo(s.getPrecisionModel()) >= 0 ? this.setComputationPrecision(o.getPrecisionModel()) : this.setComputationPrecision(s.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Ki(0, o, a), this._arg[1] = new Ki(1, s, a);
  }
};
Fi.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
Fi.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
Fi.prototype.interfaces_ = function() {
  return [];
};
Fi.prototype.getClass = function() {
  return Fi;
};
var Pn = function() {
};
Pn.prototype.interfaces_ = function() {
  return [];
};
Pn.prototype.getClass = function() {
  return Pn;
};
Pn.map = function() {
  if (arguments[0] instanceof z && V(arguments[1], Pn.MapOp)) {
    for (var t = arguments[0], e = arguments[1], r = new O(), i = 0; i < t.getNumGeometries(); i++) {
      var o = e.map(t.getGeometryN(i));
      o !== null && r.add(o);
    }
    return t.getFactory().buildGeometry(r);
  } else if (V(arguments[0], Ot) && V(arguments[1], Pn.MapOp)) {
    for (var s = arguments[0], a = arguments[1], u = new O(), l = s.iterator(); l.hasNext(); ) {
      var c = l.next(), f = a.map(c);
      f !== null && u.add(f);
    }
    return u;
  }
};
Pn.MapOp = function() {
};
var q = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r), this._ptLocator = new $e(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new Je(), this._resultPolyList = new O(), this._resultLineList = new O(), this._resultPointList = new O(), this._graph = new dt(new qu()), this._geomFact = e.getFactory();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(r) {
    var i = this._edgeList.findEqualEdge(r);
    if (i !== null) {
      var o = i.getLabel(), s = r.getLabel();
      i.isPointwiseEqual(r) || (s = new nt(r.getLabel()), s.flip());
      var a = i.getDepth();
      a.isNull() && a.add(o), a.add(s), o.merge(s);
    } else
      this._edgeList.add(r);
  }, t.prototype.getGraph = function() {
    return this._graph;
  }, t.prototype.cancelDuplicateResultEdges = function() {
    for (var r = this._graph.getEdgeEnds().iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getSym();
      i.isInResult() && o.isInResult() && (i.setInResult(!1), o.setInResult(!1));
    }
  }, t.prototype.isCoveredByLA = function(r) {
    return !!(this.isCovered(r, this._resultLineList) || this.isCovered(r, this._resultPolyList));
  }, t.prototype.computeGeometry = function(r, i, o, s) {
    var a = new O();
    return a.addAll(r), a.addAll(i), a.addAll(o), a.isEmpty() ? t.createEmptyResult(s, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var i = r.next();
      i.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(r, i) {
    for (var o = this, s = i.iterator(); s.hasNext(); ) {
      var a = s.next(), u = o._ptLocator.locate(r, a);
      if (u !== _.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var r = new O(), i = this._edgeList.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.isCollapsed() && (i.remove(), r.add(o.getCollapsedEdge()));
    }
    this._edgeList.addAll(r);
  }, t.prototype.updateNodeLabelling = function() {
    for (var r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getEdges().getLabel();
      i.getLabel().merge(o);
    }
  }, t.prototype.getResultGeometry = function(r) {
    return this.computeOverlay(r), this._resultGeom;
  }, t.prototype.insertUniqueEdges = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); ) {
      var s = o.next();
      i.insertUniqueEdge(s);
    }
  }, t.prototype.computeOverlay = function(r) {
    this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
    var i = new O();
    this._arg[0].computeSplitEdges(i), this._arg[1].computeSplitEdges(i), this.insertUniqueEdges(i), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Gn.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(r), this.cancelDuplicateResultEdges();
    var o = new _e(this._geomFact);
    o.add(this._graph), this._resultPolyList = o.getPolygons();
    var s = new Ir(this, this._geomFact, this._ptLocator);
    this._resultLineList = s.build(r);
    var a = new si(this, this._geomFact, this._ptLocator);
    this._resultPointList = a.build(r), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, r);
  }, t.prototype.labelIncompleteNode = function(r, i) {
    var o = this._ptLocator.locate(r.getCoordinate(), this._arg[i].getGeometry());
    r.getLabel().setLocation(i, o);
  }, t.prototype.copyPoints = function(r) {
    for (var i = this, o = this._arg[r].getNodeIterator(); o.hasNext(); ) {
      var s = o.next(), a = i._graph.addNode(s.getCoordinate());
      a.setLabel(r, s.getLabel().getLocation(r));
    }
  }, t.prototype.findResultAreaEdges = function(r) {
    for (var i = this._graph.getEdgeEnds().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.isArea() && !o.isInteriorAreaEdge() && t.isResultOfOp(s.getLocation(0, P.RIGHT), s.getLocation(1, P.RIGHT), r) && o.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var r = this._edgeList.iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getLabel(), s = i.getDepth();
      if (!s.isNull()) {
        s.normalize();
        for (var a = 0; a < 2; a++)
          !o.isNull(a) && o.isArea() && !s.isNull(a) && (s.getDelta(a) === 0 ? o.toLine(a) : (X.isTrue(!s.isNull(a, P.LEFT), "depth of LEFT side has not been initialized"), o.setLocation(a, P.LEFT, s.getLocation(a, P.LEFT)), X.isTrue(!s.isNull(a, P.RIGHT), "depth of RIGHT side has not been initialized"), o.setLocation(a, P.RIGHT, s.getLocation(a, P.RIGHT))));
      }
    }
  }, t.prototype.computeLabelling = function() {
    for (var r = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next();
      o.getEdges().computeLabelling(r._arg);
    }
    this.mergeSymLabels(), this.updateNodeLabelling();
  }, t.prototype.labelIncompleteNodes = function() {
    for (var r = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      o.isIsolated() && (s.isNull(0) ? r.labelIncompleteNode(o, 0) : r.labelIncompleteNode(o, 1)), o.getEdges().updateLabelling(s);
    }
  }, t.prototype.isCoveredByA = function(r) {
    return !!this.isCovered(r, this._resultPolyList);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Fi);
q.overlayOp = function(n, t, e) {
  var r = new q(n, t), i = r.getResultGeometry(e);
  return i;
};
q.intersection = function(n, t) {
  if (n.isEmpty() || t.isEmpty())
    return q.createEmptyResult(q.INTERSECTION, n, t, n.getFactory());
  if (n.isGeometryCollection()) {
    var e = t;
    return oi.map(n, {
      interfaces_: function() {
        return [Pn.MapOp];
      },
      map: function(r) {
        return r.intersection(e);
      }
    });
  }
  return n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), ce.overlayOp(n, t, q.INTERSECTION);
};
q.symDifference = function(n, t) {
  if (n.isEmpty() || t.isEmpty()) {
    if (n.isEmpty() && t.isEmpty())
      return q.createEmptyResult(q.SYMDIFFERENCE, n, t, n.getFactory());
    if (n.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return n.copy();
  }
  return n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), ce.overlayOp(n, t, q.SYMDIFFERENCE);
};
q.resultDimension = function(n, t, e) {
  var r = t.getDimension(), i = e.getDimension(), o = -1;
  switch (n) {
    case q.INTERSECTION:
      o = Math.min(r, i);
      break;
    case q.UNION:
      o = Math.max(r, i);
      break;
    case q.DIFFERENCE:
      o = r;
      break;
    case q.SYMDIFFERENCE:
      o = Math.max(r, i);
      break;
  }
  return o;
};
q.createEmptyResult = function(n, t, e, r) {
  var i = null;
  switch (q.resultDimension(n, t, e)) {
    case -1:
      i = r.createGeometryCollection(new Array(0).fill(null));
      break;
    case 0:
      i = r.createPoint();
      break;
    case 1:
      i = r.createLineString();
      break;
    case 2:
      i = r.createPolygon();
      break;
  }
  return i;
};
q.difference = function(n, t) {
  return n.isEmpty() ? q.createEmptyResult(q.DIFFERENCE, n, t, n.getFactory()) : t.isEmpty() ? n.copy() : (n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), ce.overlayOp(n, t, q.DIFFERENCE));
};
q.isResultOfOp = function() {
  if (arguments.length === 2) {
    var n = arguments[0], t = arguments[1], e = n.getLocation(0), r = n.getLocation(1);
    return q.isResultOfOp(e, r, t);
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    switch (i === _.BOUNDARY && (i = _.INTERIOR), o === _.BOUNDARY && (o = _.INTERIOR), s) {
      case q.INTERSECTION:
        return i === _.INTERIOR && o === _.INTERIOR;
      case q.UNION:
        return i === _.INTERIOR || o === _.INTERIOR;
      case q.DIFFERENCE:
        return i === _.INTERIOR && o !== _.INTERIOR;
      case q.SYMDIFFERENCE:
        return i === _.INTERIOR && o !== _.INTERIOR || i !== _.INTERIOR && o === _.INTERIOR;
    }
    return !1;
  }
};
q.INTERSECTION = 1;
q.UNION = 2;
q.DIFFERENCE = 3;
q.SYMDIFFERENCE = 4;
var ln = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new $e(), this._seg = new k();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
ln.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, r = 0; r < this._linework.getNumGeometries(); r++)
    for (var i = e._linework.getGeometryN(r), o = i.getCoordinateSequence(), s = 0; s < o.size() - 1; s++) {
      o.getCoordinate(s, e._seg.p0), o.getCoordinate(s + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
ln.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? _.BOUNDARY : this._ptLocator.locate(t, this._g);
};
ln.prototype.extractLinework = function(t) {
  var e = new ki();
  t.apply(e);
  var r = e.getLinework(), i = W.toLineStringArray(r);
  return t.getFactory().createMultiLineString(i);
};
ln.prototype.interfaces_ = function() {
  return [];
};
ln.prototype.getClass = function() {
  return ln;
};
var ki = function() {
  this._linework = null, this._linework = new O();
};
ki.prototype.getLinework = function() {
  return this._linework;
};
ki.prototype.filter = function(t) {
  var e = this;
  if (t instanceof At) {
    var r = t;
    this._linework.add(r.getExteriorRing());
    for (var i = 0; i < r.getNumInteriorRing(); i++)
      e._linework.add(r.getInteriorRingN(i));
  }
};
ki.prototype.interfaces_ = function() {
  return [dr];
};
ki.prototype.getClass = function() {
  return ki;
};
var Vn = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Vn.prototype.extractPoints = function(t, e, r) {
  for (var i = this, o = t.getCoordinates(), s = 0; s < o.length - 1; s++)
    i.computeOffsetPoints(o[s], o[s + 1], e, r);
};
Vn.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Vn.prototype.getPoints = function(t) {
  for (var e = this, r = new O(), i = qt.getLines(this._g), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    e.extractPoints(s, t, r);
  }
  return r;
};
Vn.prototype.computeOffsetPoints = function(t, e, r, i) {
  var o = e.x - t.x, s = e.y - t.y, a = Math.sqrt(o * o + s * s), u = r * o / a, l = r * s / a, c = (e.x + t.x) / 2, f = (e.y + t.y) / 2;
  if (this._doLeft) {
    var h = new m(c - l, f + u);
    i.add(h);
  }
  if (this._doRight) {
    var g = new m(c + l, f - u);
    i.add(g);
  }
};
Vn.prototype.interfaces_ = function() {
  return [];
};
Vn.prototype.getClass = function() {
  return Vn;
};
var Te = function n() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = n.TOLERANCE, this._testCoords = new O();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._boundaryDistanceTolerance = n.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, r], this._locFinder = [new ln(this._geom[0], this._boundaryDistanceTolerance), new ln(this._geom[1], this._boundaryDistanceTolerance), new ln(this._geom[2], this._boundaryDistanceTolerance)];
}, $u = { TOLERANCE: { configurable: !0 } };
Te.prototype.reportResult = function(t, e, r) {
  Wt.out.println("Overlay result invalid - A:" + _.toLocationSymbol(e[0]) + " B:" + _.toLocationSymbol(e[1]) + " expected:" + (r ? "i" : "e") + " actual:" + _.toLocationSymbol(e[2]));
};
Te.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
Te.prototype.checkValid = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0; r < this._testCoords.size(); r++) {
      var i = t._testCoords.get(r);
      if (!t.checkValid(e, i))
        return t._invalidLocation = i, !1;
    }
    return !0;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._location[0] = this._locFinder[0].getLocation(s), this._location[1] = this._locFinder[1].getLocation(s), this._location[2] = this._locFinder[2].getLocation(s), Te.hasLocation(this._location, _.BOUNDARY) ? !0 : this.isValidResult(o, this._location);
  }
};
Te.prototype.addTestPts = function(t) {
  var e = new Vn(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
Te.prototype.isValidResult = function(t, e) {
  var r = q.isResultOfOp(e[0], e[1], t), i = e[2] === _.INTERIOR, o = !(r ^ i);
  return o || this.reportResult(t, e, r), o;
};
Te.prototype.getInvalidLocation = function() {
  return this._invalidLocation;
};
Te.prototype.interfaces_ = function() {
  return [];
};
Te.prototype.getClass = function() {
  return Te;
};
Te.hasLocation = function(t, e) {
  for (var r = 0; r < 3; r++)
    if (t[r] === e)
      return !0;
  return !1;
};
Te.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(Ct.computeSizeBasedSnapTolerance(t), Ct.computeSizeBasedSnapTolerance(e));
};
Te.isValid = function(t, e, r, i) {
  var o = new Te(t, e, i);
  return o.isValid(r);
};
$u.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(Te, $u);
var xe = function n(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = n.extractFactory(t), this._inputGeoms = t;
};
xe.prototype.extractElements = function(t, e) {
  var r = this;
  if (t === null)
    return null;
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    r._skipEmpty && o.isEmpty() || e.add(o);
  }
};
xe.prototype.combine = function() {
  for (var t = this, e = new O(), r = this._inputGeoms.iterator(); r.hasNext(); ) {
    var i = r.next();
    t.extractElements(i, e);
  }
  return e.size() === 0 ? this._geomFactory !== null ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(e);
};
xe.prototype.interfaces_ = function() {
  return [];
};
xe.prototype.getClass = function() {
  return xe;
};
xe.combine = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new xe(t);
    return e.combine();
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = new xe(xe.createList(r, i));
    return o.combine();
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = new xe(xe.createList(s, a, u));
    return l.combine();
  }
};
xe.extractFactory = function(t) {
  return t.isEmpty() ? null : t.iterator().next().getFactory();
};
xe.createList = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new O();
    return r.add(t), r.add(e), r;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new O();
    return a.add(i), a.add(o), a.add(s), a;
  }
};
var wt = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new O());
}, tl = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
wt.prototype.reduceToGeometries = function(t) {
  for (var e = this, r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = null;
    V(o, He) ? s = e.unionTree(o) : o instanceof z && (s = o), r.add(s);
  }
  return r;
};
wt.prototype.extractByEnvelope = function(t, e, r) {
  for (var i = new O(), o = 0; o < e.getNumGeometries(); o++) {
    var s = e.getGeometryN(o);
    s.getEnvelopeInternal().intersects(t) ? i.add(s) : r.add(s);
  }
  return this._geomFactory.buildGeometry(i);
};
wt.prototype.unionOptimized = function(t, e) {
  var r = t.getEnvelopeInternal(), i = e.getEnvelopeInternal();
  if (!r.intersects(i)) {
    var o = xe.combine(t, e);
    return o;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var s = r.intersection(i);
  return this.unionUsingEnvelopeIntersection(t, e, s);
};
wt.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new Gu(wt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var r = e.next();
    t.insert(r.getEnvelopeInternal(), r);
  }
  this._inputPolys = null;
  var i = t.itemsTree(), o = this.unionTree(i);
  return o;
};
wt.prototype.binaryUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.binaryUnion(t, 0, t.size());
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2];
    if (i - r <= 1) {
      var o = wt.getGeometry(e, r);
      return this.unionSafe(o, null);
    } else {
      if (i - r === 2)
        return this.unionSafe(wt.getGeometry(e, r), wt.getGeometry(e, r + 1));
      var s = Math.trunc((i + r) / 2), a = this.binaryUnion(e, r, s), u = this.binaryUnion(e, s, i);
      return this.unionSafe(a, u);
    }
  }
};
wt.prototype.repeatedUnion = function(t) {
  for (var e = null, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e === null ? e = i.copy() : e = e.union(i);
  }
  return e;
};
wt.prototype.unionSafe = function(t, e) {
  return t === null && e === null ? null : t === null ? e.copy() : e === null ? t.copy() : this.unionOptimized(t, e);
};
wt.prototype.unionActual = function(t, e) {
  return wt.restrictToPolygons(t.union(e));
};
wt.prototype.unionTree = function(t) {
  var e = this.reduceToGeometries(t), r = this.binaryUnion(e);
  return r;
};
wt.prototype.unionUsingEnvelopeIntersection = function(t, e, r) {
  var i = new O(), o = this.extractByEnvelope(r, t, i), s = this.extractByEnvelope(r, e, i), a = this.unionActual(o, s);
  i.add(a);
  var u = xe.combine(i);
  return u;
};
wt.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), r = e.buildGeometry(t), i = r.buffer(0);
    return i;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1], a = o.getFactory(), u = a.createGeometryCollection([o, s]), l = u.buffer(0);
    return l;
  }
};
wt.prototype.interfaces_ = function() {
  return [];
};
wt.prototype.getClass = function() {
  return wt;
};
wt.restrictToPolygons = function(t) {
  if (V(t, hn))
    return t;
  var e = Qr.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(W.toPolygonArray(e));
};
wt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
wt.union = function(t) {
  var e = new wt(t);
  return e.union();
};
tl.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(wt, tl);
var Ko = function() {
};
Ko.prototype.interfaces_ = function() {
  return [];
};
Ko.prototype.getClass = function() {
  return Ko;
};
Ko.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return q.createEmptyResult(q.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), ce.overlayOp(t, e, q.UNION);
};
function Wn() {
  return new Qo();
}
function Qo() {
  this.reset();
}
Qo.prototype = {
  constructor: Qo,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(n) {
    Ka(To, n, this.t), Ka(this, To.s, this.s), this.s ? this.t += To.t : this.s = To.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var To = new Qo();
function Ka(n, t, e) {
  var r = n.s = t + e, i = r - t, o = r - i;
  n.t = t - o + (e - i);
}
var vt = 1e-6, ut = Math.PI, Kr = ut / 2, Qa = ut / 4, rn = ut * 2, xn = 180 / ut, ar = ut / 180, oe = Math.abs, Gf = Math.atan, Bi = Math.atan2, Tt = Math.cos, Dt = Math.sin, Yi = Math.sqrt;
function el(n) {
  return n > 1 ? 0 : n < -1 ? ut : Math.acos(n);
}
function ui(n) {
  return n > 1 ? Kr : n < -1 ? -Kr : Math.asin(n);
}
function Qi() {
}
function Zo(n, t) {
  n && Ja.hasOwnProperty(n.type) && Ja[n.type](n, t);
}
var Za = {
  Feature: function(n, t) {
    Zo(n.geometry, t);
  },
  FeatureCollection: function(n, t) {
    for (var e = n.features, r = -1, i = e.length; ++r < i; )
      Zo(e[r].geometry, t);
  }
}, Ja = {
  Sphere: function(n, t) {
    t.sphere();
  },
  Point: function(n, t) {
    n = n.coordinates, t.point(n[0], n[1], n[2]);
  },
  MultiPoint: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      n = e[r], t.point(n[0], n[1], n[2]);
  },
  LineString: function(n, t) {
    Vs(n.coordinates, t, 0);
  },
  MultiLineString: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      Vs(e[r], t, 0);
  },
  Polygon: function(n, t) {
    $a(n.coordinates, t);
  },
  MultiPolygon: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      $a(e[r], t);
  },
  GeometryCollection: function(n, t) {
    for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
      Zo(e[r], t);
  }
};
function Vs(n, t, e) {
  var r = -1, i = n.length - e, o;
  for (t.lineStart(); ++r < i; )
    o = n[r], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function $a(n, t) {
  var e = -1, r = n.length;
  for (t.polygonStart(); ++e < r; )
    Vs(n[e], t, 1);
  t.polygonEnd();
}
function zf(n, t) {
  n && Za.hasOwnProperty(n.type) ? Za[n.type](n, t) : Zo(n, t);
}
Wn();
Wn();
function Us(n) {
  return [Bi(n[1], n[0]), ui(n[2])];
}
function Gi(n) {
  var t = n[0], e = n[1], r = Tt(e);
  return [r * Tt(t), r * Dt(t), Dt(e)];
}
function Do(n, t) {
  return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
}
function Jo(n, t) {
  return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
}
function bs(n, t) {
  n[0] += t[0], n[1] += t[1], n[2] += t[2];
}
function Mo(n, t) {
  return [n[0] * t, n[1] * t, n[2] * t];
}
function qs(n) {
  var t = Yi(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  n[0] /= t, n[1] /= t, n[2] /= t;
}
Wn();
function rl(n, t) {
  function e(r, i) {
    return r = n(r, i), t(r[0], r[1]);
  }
  return n.invert && t.invert && (e.invert = function(r, i) {
    return r = t.invert(r, i), r && n.invert(r[0], r[1]);
  }), e;
}
function Xs(n, t) {
  return [n > ut ? n - rn : n < -ut ? n + rn : n, t];
}
Xs.invert = Xs;
function Vf(n, t, e) {
  return (n %= rn) ? t || e ? rl(eu(n), ru(t, e)) : eu(n) : t || e ? ru(t, e) : Xs;
}
function tu(n) {
  return function(t, e) {
    return t += n, [t > ut ? t - rn : t < -ut ? t + rn : t, e];
  };
}
function eu(n) {
  var t = tu(n);
  return t.invert = tu(-n), t;
}
function ru(n, t) {
  var e = Tt(n), r = Dt(n), i = Tt(t), o = Dt(t);
  function s(a, u) {
    var l = Tt(u), c = Tt(a) * l, f = Dt(a) * l, h = Dt(u), g = h * e + c * r;
    return [
      Bi(f * i - g * o, c * e - h * r),
      ui(g * i + f * o)
    ];
  }
  return s.invert = function(a, u) {
    var l = Tt(u), c = Tt(a) * l, f = Dt(a) * l, h = Dt(u), g = h * i - f * o;
    return [
      Bi(f * i + h * o, c * e + g * r),
      ui(g * e - c * r)
    ];
  }, s;
}
function Uf(n, t, e, r, i, o) {
  if (e) {
    var s = Tt(t), a = Dt(t), u = r * e;
    i == null ? (i = t + r * rn, o = t - u / 2) : (i = nu(s, i), o = nu(s, o), (r > 0 ? i < o : i > o) && (i += r * rn));
    for (var l, c = i; r > 0 ? c > o : c < o; c -= u)
      l = Us([s, -a * Tt(c), -a * Dt(c)]), n.point(l[0], l[1]);
  }
}
function nu(n, t) {
  t = Gi(t), t[0] -= n, qs(t);
  var e = el(-t[1]);
  return ((-t[2] < 0 ? -e : e) + rn - vt) % rn;
}
function nl() {
  var n = [], t;
  return {
    point: function(e, r) {
      t.push([e, r]);
    },
    lineStart: function() {
      n.push(t = []);
    },
    lineEnd: Qi,
    rejoin: function() {
      n.length > 1 && n.push(n.pop().concat(n.shift()));
    },
    result: function() {
      var e = n;
      return n = [], t = null, e;
    }
  };
}
function qf(n, t, e, r, i, o) {
  var s = n[0], a = n[1], u = t[0], l = t[1], c = 0, f = 1, h = u - s, g = l - a, p;
  if (p = e - s, !(!h && p > 0)) {
    if (p /= h, h < 0) {
      if (p < c)
        return;
      p < f && (f = p);
    } else if (h > 0) {
      if (p > f)
        return;
      p > c && (c = p);
    }
    if (p = i - s, !(!h && p < 0)) {
      if (p /= h, h < 0) {
        if (p > f)
          return;
        p > c && (c = p);
      } else if (h > 0) {
        if (p < c)
          return;
        p < f && (f = p);
      }
      if (p = r - a, !(!g && p > 0)) {
        if (p /= g, g < 0) {
          if (p < c)
            return;
          p < f && (f = p);
        } else if (g > 0) {
          if (p > f)
            return;
          p > c && (c = p);
        }
        if (p = o - a, !(!g && p < 0)) {
          if (p /= g, g < 0) {
            if (p > f)
              return;
            p > c && (c = p);
          } else if (g > 0) {
            if (p < c)
              return;
            p < f && (f = p);
          }
          return c > 0 && (n[0] = s + c * h, n[1] = a + c * g), f < 1 && (t[0] = s + f * h, t[1] = a + f * g), !0;
        }
      }
    }
  }
}
function zo(n, t) {
  return oe(n[0] - t[0]) < vt && oe(n[1] - t[1]) < vt;
}
function Ao(n, t, e, r) {
  this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function il(n, t, e, r, i) {
  var o = [], s = [], a, u;
  if (n.forEach(function(p) {
    if (!((y = p.length - 1) <= 0)) {
      var y, d = p[0], v = p[y], C;
      if (zo(d, v)) {
        for (i.lineStart(), a = 0; a < y; ++a)
          i.point((d = p[a])[0], d[1]);
        i.lineEnd();
        return;
      }
      o.push(C = new Ao(d, p, null, !0)), s.push(C.o = new Ao(d, null, C, !1)), o.push(C = new Ao(v, p, null, !1)), s.push(C.o = new Ao(v, null, C, !0));
    }
  }), !!o.length) {
    for (s.sort(t), iu(o), iu(s), a = 0, u = s.length; a < u; ++a)
      s[a].e = e = !e;
    for (var l = o[0], c, f; ; ) {
      for (var h = l, g = !0; h.v; )
        if ((h = h.n) === l)
          return;
      c = h.z, i.lineStart();
      do {
        if (h.v = h.o.v = !0, h.e) {
          if (g)
            for (a = 0, u = c.length; a < u; ++a)
              i.point((f = c[a])[0], f[1]);
          else
            r(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (g)
            for (c = h.p.z, a = c.length - 1; a >= 0; --a)
              i.point((f = c[a])[0], f[1]);
          else
            r(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, c = h.z, g = !g;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function iu(n) {
  if (t = n.length) {
    for (var t, e = 0, r = n[0], i; ++e < t; )
      r.n = i = n[e], i.p = r, r = i;
    r.n = i = n[0], i.p = r;
  }
}
function ol(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Xf(n) {
  return n.length === 1 && (n = Yf(n)), {
    left: function(t, e, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var o = r + i >>> 1;
        n(t[o], e) < 0 ? r = o + 1 : i = o;
      }
      return r;
    },
    right: function(t, e, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var o = r + i >>> 1;
        n(t[o], e) > 0 ? i = o : r = o + 1;
      }
      return r;
    }
  };
}
function Yf(n) {
  return function(t, e) {
    return ol(n(t), e);
  };
}
Xf(ol);
function sl(n) {
  for (var t = n.length, e, r = -1, i = 0, o, s; ++r < t; )
    i += n[r].length;
  for (o = new Array(i); --t >= 0; )
    for (s = n[t], e = s.length; --e >= 0; )
      o[--i] = s[e];
  return o;
}
var Zi = 1e9, Fo = -Zi;
function Wf(n, t, e, r) {
  function i(l, c) {
    return n <= l && l <= e && t <= c && c <= r;
  }
  function o(l, c, f, h) {
    var g = 0, p = 0;
    if (l == null || (g = s(l, f)) !== (p = s(c, f)) || u(l, c) < 0 ^ f > 0)
      do
        h.point(g === 0 || g === 3 ? n : e, g > 1 ? r : t);
      while ((g = (g + f + 4) % 4) !== p);
    else
      h.point(c[0], c[1]);
  }
  function s(l, c) {
    return oe(l[0] - n) < vt ? c > 0 ? 0 : 3 : oe(l[0] - e) < vt ? c > 0 ? 2 : 1 : oe(l[1] - t) < vt ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var f = s(l, 1), h = s(c, 1);
    return f !== h ? f - h : f === 0 ? c[1] - l[1] : f === 1 ? l[0] - c[0] : f === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, f = nl(), h, g, p, y, d, v, C, I, N, L, T, R = {
      point: D,
      lineStart: G,
      lineEnd: at,
      polygonStart: A,
      polygonEnd: Y
    };
    function D(B, K) {
      i(B, K) && c.point(B, K);
    }
    function b() {
      for (var B = 0, K = 0, _t = g.length; K < _t; ++K)
        for (var Qt = g[K], zt = 1, Vr = Qt.length, Ie = Qt[0], De, Ue, In = Ie[0], sn = Ie[1]; zt < Vr; ++zt)
          De = In, Ue = sn, Ie = Qt[zt], In = Ie[0], sn = Ie[1], Ue <= r ? sn > r && (In - De) * (r - Ue) > (sn - Ue) * (n - De) && ++B : sn <= r && (In - De) * (r - Ue) < (sn - Ue) * (n - De) && --B;
      return B;
    }
    function A() {
      c = f, h = [], g = [], T = !0;
    }
    function Y() {
      var B = b(), K = T && B, _t = (h = sl(h)).length;
      (K || _t) && (l.polygonStart(), K && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), _t && il(h, a, B, o, l), l.polygonEnd()), c = l, h = g = p = null;
    }
    function G() {
      R.point = x, g && g.push(p = []), L = !0, N = !1, C = I = NaN;
    }
    function at() {
      h && (x(y, d), v && N && f.rejoin(), h.push(f.result())), R.point = D, N && c.lineEnd();
    }
    function x(B, K) {
      var _t = i(B, K);
      if (g && p.push([B, K]), L)
        y = B, d = K, v = _t, L = !1, _t && (c.lineStart(), c.point(B, K));
      else if (_t && N)
        c.point(B, K);
      else {
        var Qt = [C = Math.max(Fo, Math.min(Zi, C)), I = Math.max(Fo, Math.min(Zi, I))], zt = [B = Math.max(Fo, Math.min(Zi, B)), K = Math.max(Fo, Math.min(Zi, K))];
        qf(Qt, zt, n, t, e, r) ? (N || (c.lineStart(), c.point(Qt[0], Qt[1])), c.point(zt[0], zt[1]), _t || c.lineEnd(), T = !1) : _t && (c.lineStart(), c.point(B, K), T = !1);
      }
      C = B, I = K, N = _t;
    }
    return R;
  };
}
var ws = Wn();
function Hf(n, t) {
  var e = t[0], r = t[1], i = [Dt(e), -Tt(e), 0], o = 0, s = 0;
  ws.reset();
  for (var a = 0, u = n.length; a < u; ++a)
    if (c = (l = n[a]).length)
      for (var l, c, f = l[c - 1], h = f[0], g = f[1] / 2 + Qa, p = Dt(g), y = Tt(g), d = 0; d < c; ++d, h = C, p = N, y = L, f = v) {
        var v = l[d], C = v[0], I = v[1] / 2 + Qa, N = Dt(I), L = Tt(I), T = C - h, R = T >= 0 ? 1 : -1, D = R * T, b = D > ut, A = p * N;
        if (ws.add(Bi(A * R * Dt(D), y * L + A * Tt(D))), o += b ? T + R * rn : T, b ^ h >= e ^ C >= e) {
          var Y = Jo(Gi(f), Gi(v));
          qs(Y);
          var G = Jo(i, Y);
          qs(G);
          var at = (b ^ T >= 0 ? -1 : 1) * ui(G[2]);
          (r > at || r === at && (Y[0] || Y[1])) && (s += b ^ T >= 0 ? 1 : -1);
        }
      }
  return (o < -vt || o < vt && ws < -vt) ^ s & 1;
}
Wn();
function ou(n) {
  return n;
}
Wn();
Wn();
var zi = 1 / 0, $o = zi, mo = -zi, ts = mo, su = {
  point: jf,
  lineStart: Qi,
  lineEnd: Qi,
  polygonStart: Qi,
  polygonEnd: Qi,
  result: function() {
    var n = [[zi, $o], [mo, ts]];
    return mo = ts = -($o = zi = 1 / 0), n;
  }
};
function jf(n, t) {
  n < zi && (zi = n), n > mo && (mo = n), t < $o && ($o = t), t > ts && (ts = t);
}
Wn();
function al(n, t, e, r) {
  return function(i, o) {
    var s = t(o), a = i.invert(r[0], r[1]), u = nl(), l = t(u), c = !1, f, h, g, p = {
      point: y,
      lineStart: v,
      lineEnd: C,
      polygonStart: function() {
        p.point = I, p.lineStart = N, p.lineEnd = L, h = [], f = [];
      },
      polygonEnd: function() {
        p.point = y, p.lineStart = v, p.lineEnd = C, h = sl(h);
        var T = Hf(f, a);
        h.length ? (c || (o.polygonStart(), c = !0), il(h, Qf, T, e, o)) : T && (c || (o.polygonStart(), c = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), c && (o.polygonEnd(), c = !1), h = f = null;
      },
      sphere: function() {
        o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd();
      }
    };
    function y(T, R) {
      var D = i(T, R);
      n(T = D[0], R = D[1]) && o.point(T, R);
    }
    function d(T, R) {
      var D = i(T, R);
      s.point(D[0], D[1]);
    }
    function v() {
      p.point = d, s.lineStart();
    }
    function C() {
      p.point = y, s.lineEnd();
    }
    function I(T, R) {
      g.push([T, R]);
      var D = i(T, R);
      l.point(D[0], D[1]);
    }
    function N() {
      l.lineStart(), g = [];
    }
    function L() {
      I(g[0][0], g[0][1]), l.lineEnd();
      var T = l.clean(), R = u.result(), D, b = R.length, A, Y, G;
      if (g.pop(), f.push(g), g = null, !!b) {
        if (T & 1) {
          if (Y = R[0], (A = Y.length - 1) > 0) {
            for (c || (o.polygonStart(), c = !0), o.lineStart(), D = 0; D < A; ++D)
              o.point((G = Y[D])[0], G[1]);
            o.lineEnd();
          }
          return;
        }
        b > 1 && T & 2 && R.push(R.pop().concat(R.shift())), h.push(R.filter(Kf));
      }
    }
    return p;
  };
}
function Kf(n) {
  return n.length > 1;
}
function Qf(n, t) {
  return ((n = n.x)[0] < 0 ? n[1] - Kr - vt : Kr - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Kr - vt : Kr - t[1]);
}
const au = al(
  function() {
    return !0;
  },
  Zf,
  $f,
  [-ut, -Kr]
);
function Zf(n) {
  var t = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      n.lineStart(), i = 1;
    },
    point: function(o, s) {
      var a = o > 0 ? ut : -ut, u = oe(o - t);
      oe(u - ut) < vt ? (n.point(t, e = (e + s) / 2 > 0 ? Kr : -Kr), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(a, e), n.point(o, e), i = 0) : r !== a && u >= ut && (oe(t - r) < vt && (t -= r * vt), oe(o - a) < vt && (o -= a * vt), e = Jf(t, e, o, s), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(a, e), i = 0), n.point(t = o, e = s), r = a;
    },
    lineEnd: function() {
      n.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Jf(n, t, e, r) {
  var i, o, s = Dt(n - e);
  return oe(s) > vt ? Gf((Dt(t) * (o = Tt(r)) * Dt(e) - Dt(r) * (i = Tt(t)) * Dt(n)) / (i * o * s)) : (t + r) / 2;
}
function $f(n, t, e, r) {
  var i;
  if (n == null)
    i = e * Kr, r.point(-ut, i), r.point(0, i), r.point(ut, i), r.point(ut, 0), r.point(ut, -i), r.point(0, -i), r.point(-ut, -i), r.point(-ut, 0), r.point(-ut, i);
  else if (oe(n[0] - t[0]) > vt) {
    var o = n[0] < t[0] ? ut : -ut;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(t[0], t[1]);
}
function th(n, t) {
  var e = Tt(n), r = e > 0, i = oe(e) > vt;
  function o(c, f, h, g) {
    Uf(g, n, t, h, c, f);
  }
  function s(c, f) {
    return Tt(c) * Tt(f) > e;
  }
  function a(c) {
    var f, h, g, p, y;
    return {
      lineStart: function() {
        p = g = !1, y = 1;
      },
      point: function(d, v) {
        var C = [d, v], I, N = s(d, v), L = r ? N ? 0 : l(d, v) : N ? l(d + (d < 0 ? ut : -ut), v) : 0;
        if (!f && (p = g = N) && c.lineStart(), N !== g && (I = u(f, C), (!I || zo(f, I) || zo(C, I)) && (C[0] += vt, C[1] += vt, N = s(C[0], C[1]))), N !== g)
          y = 0, N ? (c.lineStart(), I = u(C, f), c.point(I[0], I[1])) : (I = u(f, C), c.point(I[0], I[1]), c.lineEnd()), f = I;
        else if (i && f && r ^ N) {
          var T;
          !(L & h) && (T = u(C, f, !0)) && (y = 0, r ? (c.lineStart(), c.point(T[0][0], T[0][1]), c.point(T[1][0], T[1][1]), c.lineEnd()) : (c.point(T[1][0], T[1][1]), c.lineEnd(), c.lineStart(), c.point(T[0][0], T[0][1])));
        }
        N && (!f || !zo(f, C)) && c.point(C[0], C[1]), f = C, g = N, h = L;
      },
      lineEnd: function() {
        g && c.lineEnd(), f = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return y | (p && g) << 1;
      }
    };
  }
  function u(c, f, h) {
    var g = Gi(c), p = Gi(f), y = [1, 0, 0], d = Jo(g, p), v = Do(d, d), C = d[0], I = v - C * C;
    if (!I)
      return !h && c;
    var N = e * v / I, L = -e * C / I, T = Jo(y, d), R = Mo(y, N), D = Mo(d, L);
    bs(R, D);
    var b = T, A = Do(R, b), Y = Do(b, b), G = A * A - Y * (Do(R, R) - 1);
    if (!(G < 0)) {
      var at = Yi(G), x = Mo(b, (-A - at) / Y);
      if (bs(x, R), x = Us(x), !h)
        return x;
      var B = c[0], K = f[0], _t = c[1], Qt = f[1], zt;
      K < B && (zt = B, B = K, K = zt);
      var Vr = K - B, Ie = oe(Vr - ut) < vt, De = Ie || Vr < vt;
      if (!Ie && Qt < _t && (zt = _t, _t = Qt, Qt = zt), De ? Ie ? _t + Qt > 0 ^ x[1] < (oe(x[0] - B) < vt ? _t : Qt) : _t <= x[1] && x[1] <= Qt : Vr > ut ^ (B <= x[0] && x[0] <= K)) {
        var Ue = Mo(b, (-A + at) / Y);
        return bs(Ue, R), [x, Us(Ue)];
      }
    }
  }
  function l(c, f) {
    var h = r ? n : ut - n, g = 0;
    return c < -h ? g |= 1 : c > h && (g |= 2), f < -h ? g |= 4 : f > h && (g |= 8), g;
  }
  return al(s, a, o, r ? [0, -n] : [-ut, n - ut]);
}
function ul(n) {
  return function(t) {
    var e = new Ys();
    for (var r in n)
      e[r] = n[r];
    return e.stream = t, e;
  };
}
function Ys() {
}
Ys.prototype = {
  constructor: Ys,
  point: function(n, t) {
    this.stream.point(n, t);
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
function ll(n, t, e) {
  var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1], o = n.clipExtent && n.clipExtent();
  n.scale(150).translate([0, 0]), o != null && n.clipExtent(null), zf(e, n.stream(su));
  var s = su.result(), a = Math.min(r / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])), u = +t[0][0] + (r - a * (s[1][0] + s[0][0])) / 2, l = +t[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
  return o != null && n.clipExtent(o), n.scale(a * 150).translate([u, l]);
}
function eh(n, t, e) {
  return ll(n, [[0, 0], t], e);
}
var uu = 16, rh = Tt(30 * ar);
function lu(n, t) {
  return +t ? ih(n, t) : nh(n);
}
function nh(n) {
  return ul({
    point: function(t, e) {
      t = n(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function ih(n, t) {
  function e(r, i, o, s, a, u, l, c, f, h, g, p, y, d) {
    var v = l - r, C = c - i, I = v * v + C * C;
    if (I > 4 * t && y--) {
      var N = s + h, L = a + g, T = u + p, R = Yi(N * N + L * L + T * T), D = ui(T /= R), b = oe(oe(T) - 1) < vt || oe(o - f) < vt ? (o + f) / 2 : Bi(L, N), A = n(b, D), Y = A[0], G = A[1], at = Y - r, x = G - i, B = C * at - v * x;
      (B * B / I > t || oe((v * at + C * x) / I - 0.5) > 0.3 || s * h + a * g + u * p < rh) && (e(r, i, o, s, a, u, Y, G, b, N /= R, L /= R, T, y, d), d.point(Y, G), e(Y, G, b, N, L, T, l, c, f, h, g, p, y, d));
    }
  }
  return function(r) {
    var i, o, s, a, u, l, c, f, h, g, p, y, d = {
      point: v,
      lineStart: C,
      lineEnd: N,
      polygonStart: function() {
        r.polygonStart(), d.lineStart = L;
      },
      polygonEnd: function() {
        r.polygonEnd(), d.lineStart = C;
      }
    };
    function v(D, b) {
      D = n(D, b), r.point(D[0], D[1]);
    }
    function C() {
      f = NaN, d.point = I, r.lineStart();
    }
    function I(D, b) {
      var A = Gi([D, b]), Y = n(D, b);
      e(f, h, c, g, p, y, f = Y[0], h = Y[1], c = D, g = A[0], p = A[1], y = A[2], uu, r), r.point(f, h);
    }
    function N() {
      d.point = v, r.lineEnd();
    }
    function L() {
      C(), d.point = T, d.lineEnd = R;
    }
    function T(D, b) {
      I(i = D, b), o = f, s = h, a = g, u = p, l = y, d.point = I;
    }
    function R() {
      e(f, h, c, g, p, y, o, s, i, a, u, l, uu, r), d.lineEnd = N, N();
    }
    return d;
  };
}
var oh = ul({
  point: function(n, t) {
    this.stream.point(n * ar, t * ar);
  }
});
function sh(n) {
  return ah(function() {
    return n;
  })();
}
function ah(n) {
  var t, e = 150, r = 480, i = 250, o, s, a = 0, u = 0, l = 0, c = 0, f = 0, h, g, p = null, y = au, d = null, v, C, I, N = ou, L = 0.5, T = lu(Y, L), R, D;
  function b(x) {
    return x = g(x[0] * ar, x[1] * ar), [x[0] * e + o, s - x[1] * e];
  }
  function A(x) {
    return x = g.invert((x[0] - o) / e, (s - x[1]) / e), x && [x[0] * xn, x[1] * xn];
  }
  function Y(x, B) {
    return x = t(x, B), [x[0] * e + o, s - x[1] * e];
  }
  b.stream = function(x) {
    return R && D === x ? R : R = oh(y(h, T(N(D = x))));
  }, b.clipAngle = function(x) {
    return arguments.length ? (y = +x ? th(p = x * ar, 6 * ar) : (p = null, au), at()) : p * xn;
  }, b.clipExtent = function(x) {
    return arguments.length ? (N = x == null ? (d = v = C = I = null, ou) : Wf(d = +x[0][0], v = +x[0][1], C = +x[1][0], I = +x[1][1]), at()) : d == null ? null : [[d, v], [C, I]];
  }, b.scale = function(x) {
    return arguments.length ? (e = +x, G()) : e;
  }, b.translate = function(x) {
    return arguments.length ? (r = +x[0], i = +x[1], G()) : [r, i];
  }, b.center = function(x) {
    return arguments.length ? (a = x[0] % 360 * ar, u = x[1] % 360 * ar, G()) : [a * xn, u * xn];
  }, b.rotate = function(x) {
    return arguments.length ? (l = x[0] % 360 * ar, c = x[1] % 360 * ar, f = x.length > 2 ? x[2] % 360 * ar : 0, G()) : [l * xn, c * xn, f * xn];
  }, b.precision = function(x) {
    return arguments.length ? (T = lu(Y, L = x * x), at()) : Yi(L);
  }, b.fitExtent = function(x, B) {
    return ll(b, x, B);
  }, b.fitSize = function(x, B) {
    return eh(b, x, B);
  };
  function G() {
    g = rl(h = Vf(l, c, f), t);
    var x = t(a, u);
    return o = r - x[0] * e, s = i + x[1] * e, at();
  }
  function at() {
    return R = D = null, b;
  }
  return function() {
    return t = n.apply(this, arguments), b.invert = t.invert && A, G();
  };
}
function cl(n) {
  return function(t, e) {
    var r = Tt(t), i = Tt(e), o = n(r * i);
    return [
      o * i * Dt(t),
      o * Dt(e)
    ];
  };
}
function fl(n) {
  return function(t, e) {
    var r = Yi(t * t + e * e), i = n(r), o = Dt(i), s = Tt(i);
    return [
      Bi(t * o, r * s),
      ui(r && e * o / r)
    ];
  };
}
var uh = cl(function(n) {
  return Yi(2 / (1 + n));
});
uh.invert = fl(function(n) {
  return 2 * ui(n / 2);
});
var hl = cl(function(n) {
  return (n = el(n)) && n / Dt(n);
});
hl.invert = fl(function(n) {
  return n;
});
function lh() {
  return sh(hl).scale(79.4188).clipAngle(180 - 1e-3);
}
function cu(n, t) {
  return [n, t];
}
cu.invert = cu;
function ch(n, t, e) {
  e = e || {};
  var r = e.units || "kilometers", i = e.steps || 8;
  if (!n)
    throw new Error("geojson is required");
  if (typeof e != "object")
    throw new Error("options must be an object");
  if (typeof i != "number")
    throw new Error("steps must be an number");
  if (i <= 0)
    throw new Error("steps must be greater than 0");
  var o = [];
  switch (n.type) {
    case "GeometryCollection":
      return bu(n, function(s) {
        var a = Vo(s, t, r, i);
        a && o.push(a);
      }), Bs(o);
    case "FeatureCollection":
      return Xa(n, function(s) {
        var a = Vo(s, t, r, i);
        a && Xa(a, function(u) {
          u && o.push(u);
        });
      }), Bs(o);
  }
  return Vo(n, t, r, i);
}
function Vo(n, t, e, r) {
  var i = n.properties || {}, o = n.type === "Feature" ? n.geometry : n;
  if (o.type === "GeometryCollection") {
    var s = [];
    return bu(n, function(y) {
      var d = Vo(y, t, e, r);
      d && s.push(d);
    }), Bs(s);
  }
  var a = fh(o), u = {
    type: o.type,
    coordinates: pl(o.coordinates, a)
  }, l = new ea(), c = l.read(u), f = yf(_f(t, e), "meters"), h = Xt.bufferOp(c, f, r), g = new ku();
  if (h = g.write(h), !gl(h.coordinates)) {
    var p = {
      type: h.type,
      coordinates: dl(h.coordinates, a)
    };
    return es(p, i);
  }
}
function gl(n) {
  return Array.isArray(n[0]) ? gl(n[0]) : isNaN(n[0]);
}
function pl(n, t) {
  return typeof n[0] != "object" ? t(n) : n.map(function(e) {
    return pl(e, t);
  });
}
function dl(n, t) {
  return typeof n[0] != "object" ? t.invert(n) : n.map(function(e) {
    return dl(e, t);
  });
}
function fh(n) {
  var t = Cf(n).geometry.coordinates, e = [-t[0], -t[1]];
  return lh().rotate(e).scale(Ne);
}
function hh(n, t) {
  var e = Xo(n), r = Xo(t), i = n.properties || {}, o = Iu.difference(
    e.coordinates,
    r.coordinates
  );
  return o.length === 0 ? null : o.length === 1 ? Su(o[0], i) : xu(o, i);
}
function fu(n) {
  let t;
  for (const e of n)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function hu(n, t) {
  const e = hh(
    {
      type: "Polygon",
      coordinates: [
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]
    },
    n
  );
  if (!e)
    return;
  e.properties = { isMask: "y" };
  const r = ch(n, 0);
  if (r.geometry.type === "Polygon")
    for (const i of r.geometry.coordinates)
      fu(i);
  else
    for (const i of r.geometry.coordinates)
      for (const o of i)
        fu(o);
  t({
    type: "FeatureCollection",
    features: [r, e]
  });
}
let gu = {
  type: "FeatureCollection",
  features: []
};
function gh(n, t, e = !0, r = !0, i = {}, o = {}, s = {
  fill: {
    paint: {
      "fill-color": "#000",
      "fill-opacity": 0.1
    },
    filter: ["all", ["==", ["geometry-type"], "Polygon"], ["has", "isMask"]]
  },
  line: {
    layout: {
      "line-cap": "square"
    },
    paint: {
      "line-width": ["case", ["==", ["geometry-type"], "Polygon"], 2, 3],
      "line-dasharray": [1, 1],
      "line-color": "#3170fe"
    },
    filter: ["!", ["has", "isMask"]]
  }
}) {
  let a, u = [], l, c, f;
  function h() {
    !n.getSource("full-geom") && (s != null && s.fill || s != null && s.line) && n.addSource("full-geom", {
      type: "geojson",
      data: gu
    }), !n.getLayer("full-geom-fill") && (s != null && s.fill) && n.addLayer({
      ...s == null ? void 0 : s.fill,
      id: "full-geom-fill",
      type: "fill",
      source: "full-geom"
    }), !n.getLayer("full-geom-line") && (s != null && s.line) && n.addLayer({
      ...s == null ? void 0 : s.line,
      id: "full-geom-line",
      type: "line",
      source: "full-geom"
    }), f && y(f);
  }
  n.loaded() ? h() : n.once("load", () => {
    h();
  }), n.on("styledata", () => {
    h();
  });
  const g = (d) => {
    a == null || a({
      type: "mapClick",
      coordinates: [d.lngLat.lng, d.lngLat.lat]
    });
  };
  function p(d = !1) {
    if (!t)
      throw new Error();
    const v = document.createElement("div");
    return d && v.classList.add("marker-interactive"), new Nc({
      props: { displayIn: "maplibre" },
      target: v
    }), new t.Marker({ element: v, offset: [1, -13] });
  }
  function y(d) {
    var v;
    f = d, (v = n.getSource("full-geom")) == null || v.setData(d);
  }
  return {
    setEventHandler(d) {
      d ? (a = d, n.on("click", g)) : (a = void 0, n.off("click", g));
    },
    flyTo(d, v) {
      n.flyTo({ center: d, zoom: v, ...i });
    },
    fitBounds(d, v, C) {
      n.fitBounds(
        [
          [d[0], d[1]],
          [d[2], d[3]]
        ],
        { padding: v, maxZoom: C, ...o }
      );
    },
    indicateReverse(d) {
      n.getCanvasContainer().style.cursor = d ? "crosshair" : "";
    },
    setReverseMarker(d) {
      !t || !e || (c ? d ? c.setLngLat(d) : (c.remove(), c = void 0) : d && (c = (typeof e == "object" ? new t.Marker(e) : p()).setLngLat(d).addTo(n), c.getElement().classList.add("marker-reverse")));
    },
    setMarkers(d, v) {
      if (e) {
        for (const C of u)
          C.remove();
        if (u.length = 0, y(gu), !!t) {
          if (v) {
            let C = !1;
            if (v.geometry.type === "GeometryCollection") {
              const I = v.geometry.geometries.filter(
                (N) => N.type === "Polygon" || N.type === "MultiPolygon"
              );
              if (I.length > 0) {
                let N = I.pop();
                for (const L of I)
                  N = Ef(N, L);
                hu({ ...v, geometry: N }, y), C = !0;
              } else {
                const N = v.geometry.geometries.filter(
                  (L) => L.type === "LineString" || L.type === "MultiLineString"
                );
                N.length > 0 && (y({
                  ...v,
                  geometry: { type: "GeometryCollection", geometries: N }
                }), C = !0);
              }
            }
            if (!C) {
              if (v.geometry.type === "Polygon" || v.geometry.type === "MultiPolygon")
                hu(v, y);
              else if (v.geometry.type === "LineString" || v.geometry.type === "MultiLineString") {
                y(v);
                return;
              }
            }
            e && u.push(
              (typeof e == "object" ? new t.Marker(e) : p()).setLngLat(v.center).addTo(n)
            );
          }
          if (r)
            for (const C of d ?? []) {
              if (C === v)
                continue;
              const I = (typeof r == "object" ? new t.Marker(r) : p(!0)).setLngLat(C.center).setPopup(
                new t.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  C.place_type[0] === "reverse" ? C.place_name : C.place_name.replace(/,.*/, "")
                )
              ).addTo(n), N = I.getElement();
              N.addEventListener("click", (L) => {
                L.stopPropagation(), a == null || a({ type: "markerClick", id: C.id });
              }), N.addEventListener("mouseenter", () => {
                a == null || a({ type: "markerMouseEnter", id: C.id }), I.togglePopup();
              }), N.addEventListener("mouseleave", () => {
                a == null || a({ type: "markerMouseLeave", id: C.id }), I.togglePopup();
              }), u.push(I);
            }
        }
      }
    },
    setSelectedMarker(d) {
      l && l.getElement().classList.toggle("marker-selected", !1), l = d > -1 ? u[d] : void 0, l == null || l.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const d = n.getCenter();
      return [n.getZoom(), d.lng, d.lat];
    }
  };
}
var Xe, Kn;
class ph extends EventTarget {
  constructor(e = {}) {
    super();
    Ns(this, Xe, void 0);
    Ns(this, Kn, void 0);
    Po(this, Kn, e);
  }
  onAddInt(e) {
    const r = document.createElement("div");
    r.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
    const {
      marker: i,
      showResultMarkers: o,
      flyTo: s,
      fullGeometryStyle: a,
      ...u
    } = or(this, Kn), l = typeof s == "boolean" ? {} : s, c = this.getExtraProps(e, r), h = {
      mapController: gh(
        e,
        this.getMapLibreGl(),
        i,
        o,
        l,
        l,
        a
      ),
      flyTo: s === void 0 ? !0 : !!s,
      apiKey: "",
      // just to satisfy apiKey; TODO find a better solution
      ...c,
      ...u
    };
    if (!h.apiKey)
      throw new Error("no apiKey provided");
    Po(this, Xe, new Hc({ target: r, props: h }));
    for (const g of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      or(this, Xe).$on(g, (p) => this.dispatchEvent(p));
    return r;
  }
  setOptions(e) {
    var u;
    Po(this, Kn, e);
    const {
      marker: r,
      showResultMarkers: i,
      flyTo: o,
      fullGeometryStyle: s,
      ...a
    } = or(this, Kn);
    (u = or(this, Xe)) == null || u.$set(a);
  }
  setQuery(e, r = !0) {
    var i;
    (i = or(this, Xe)) == null || i.setQuery(e, r);
  }
  clearMap() {
    var e;
    (e = or(this, Xe)) == null || e.clearMap();
  }
  clearList() {
    var e;
    (e = or(this, Xe)) == null || e.clearList();
  }
  setReverseMode(e) {
    var r;
    (r = or(this, Xe)) == null || r.$set({ reverseActive: e });
  }
  focus() {
    var e;
    (e = or(this, Xe)) == null || e.focus();
  }
  blur() {
    var e;
    (e = or(this, Xe)) == null || e.blur();
  }
  onRemove() {
    var e;
    (e = or(this, Xe)) == null || e.$destroy();
  }
}
Xe = new WeakMap(), Kn = new WeakMap();
class mh extends ph {
  getMapLibreGl() {
    return Gl;
  }
  onAdd(t) {
    return super.onAddInt(t);
  }
  getExtraProps(t, e) {
    const r = {};
    if (!("getSdkConfig" in t && typeof t.getSdkConfig == "function"))
      throw new Error("MapTiler SDK not detected");
    const { primaryLanguage: i, apiKey: o } = t.getSdkConfig();
    r.apiKey = o;
    const s = /^([a-z]{2})($|_|-)/.exec(i);
    return s && (r.language = s[1]), e.className += " maptiler-ctrl", r;
  }
}
export {
  mh as GeocodingControl,
  gh as createMapLibreGlMapController
};
//# sourceMappingURL=maptilersdk.js.map
