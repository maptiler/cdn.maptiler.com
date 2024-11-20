var dn = Object.defineProperty;
var Zt = (i) => {
  throw TypeError(i);
};
var hn = (i, e, t) => e in i ? dn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var _t = (i, e, t) => hn(i, typeof e != "symbol" ? e + "" : e, t), Qt = (i, e, t) => e.has(i) || Zt("Cannot " + t);
var te = (i, e, t) => (Qt(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Et = (i, e, t) => e.has(i) ? Zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Lt = (i, e, t, n) => (Qt(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as se from "leaflet";
function z() {
}
function gn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function ki(i) {
  return i();
}
function Ht() {
  return /* @__PURE__ */ Object.create(null);
}
function ye(i) {
  i.forEach(ki);
}
function Ni(i) {
  return typeof i == "function";
}
function Se(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let it;
function Y(i, e) {
  return i === e ? !0 : (it || (it = document.createElement("a")), it.href = e, i === it.href);
}
function mn(i) {
  return Object.keys(i).length === 0;
}
function yn(i, e, t, n) {
  if (i) {
    const r = Pi(i, e, t, n);
    return i[0](r);
  }
}
function Pi(i, e, t, n) {
  return i[1] && n ? gn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function pn(i, e, t, n) {
  if (i[2] && n) {
    const r = i[2](n(t));
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
function bn(i, e, t, n, r, o) {
  if (r) {
    const l = Pi(e, t, n, o);
    i.p(l, r);
  }
}
function vn(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Vt(i) {
  return i ?? "";
}
function T(i, e) {
  i.appendChild(e);
}
function F(i, e, t) {
  i.insertBefore(e, t || null);
}
function B(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function A(i) {
  return document.createElement(i);
}
function ue(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function _e(i) {
  return document.createTextNode(i);
}
function ee() {
  return _e(" ");
}
function wn() {
  return _e("");
}
function J(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function _n(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function y(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function En(i) {
  return Array.from(i.childNodes);
}
function je(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Yt(i, e) {
  i.value = e ?? "";
}
function re(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Ln(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let qe;
function Ge(i) {
  qe = i;
}
function Ti() {
  if (!qe) throw new Error("Function called outside component initialization");
  return qe;
}
function Sn(i) {
  Ti().$$.on_destroy.push(i);
}
function xn() {
  const i = Ti();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const o = Ln(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((l) => {
        l.call(i, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Xt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const We = [], Ct = [];
let ze = [];
const Kt = [], Mn = /* @__PURE__ */ Promise.resolve();
let kt = !1;
function Cn() {
  kt || (kt = !0, Mn.then(Ri));
}
function Nt(i) {
  ze.push(i);
}
const St = /* @__PURE__ */ new Set();
let Oe = 0;
function Ri() {
  if (Oe !== 0)
    return;
  const i = qe;
  do {
    try {
      for (; Oe < We.length; ) {
        const e = We[Oe];
        Oe++, Ge(e), kn(e.$$);
      }
    } catch (e) {
      throw We.length = 0, Oe = 0, e;
    }
    for (Ge(null), We.length = 0, Oe = 0; Ct.length; ) Ct.pop()();
    for (let e = 0; e < ze.length; e += 1) {
      const t = ze[e];
      St.has(t) || (St.add(t), t());
    }
    ze.length = 0;
  } while (We.length);
  for (; Kt.length; )
    Kt.pop()();
  kt = !1, St.clear(), Ge(i);
}
function kn(i) {
  if (i.fragment !== null) {
    i.update(), ye(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Nt);
  }
}
function Nn(i) {
  const e = [], t = [];
  ze.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ze = e;
}
const nt = /* @__PURE__ */ new Set();
let Ne;
function rt() {
  Ne = {
    r: 0,
    c: [],
    p: Ne
    // parent group
  };
}
function ot() {
  Ne.r || ye(Ne.c), Ne = Ne.p;
}
function G(i, e) {
  i && i.i && (nt.delete(i), i.i(e));
}
function H(i, e, t, n) {
  if (i && i.o) {
    if (nt.has(i)) return;
    nt.add(i), Ne.c.push(() => {
      nt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Jt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Pn(i, e) {
  H(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Tn(i, e, t, n, r, o, l, s, c, u, d, a) {
  let f = i.length, h = o.length, g = f;
  const v = {};
  for (; g--; ) v[i[g].key] = g;
  const w = [], p = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), L = [];
  for (g = h; g--; ) {
    const b = a(r, o, g), _ = t(b);
    let C = l.get(_);
    C ? L.push(() => C.p(b, e)) : (C = u(_, b), C.c()), p.set(_, w[g] = C), _ in v && S.set(_, Math.abs(g - v[_]));
  }
  const E = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function k(b) {
    G(b, 1), b.m(s, d), l.set(b.key, b), d = b.first, h--;
  }
  for (; f && h; ) {
    const b = w[h - 1], _ = i[f - 1], C = b.key, I = _.key;
    b === _ ? (d = b.first, f--, h--) : p.has(I) ? !l.has(C) || E.has(C) ? k(b) : M.has(I) ? f-- : S.get(C) > S.get(I) ? (M.add(C), k(b)) : (E.add(I), f--) : (c(_, l), f--);
  }
  for (; f--; ) {
    const b = i[f];
    p.has(b.key) || c(b, l);
  }
  for (; h; ) k(w[h - 1]);
  return ye(L), w;
}
function Ee(i) {
  i && i.c();
}
function ge(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), Nt(() => {
    const o = i.$$.on_mount.map(ki).filter(Ni);
    i.$$.on_destroy ? i.$$.on_destroy.push(...o) : ye(o), i.$$.on_mount = [];
  }), r.forEach(Nt);
}
function me(i, e) {
  const t = i.$$;
  t.fragment !== null && (Nn(t.after_update), ye(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Rn(i, e) {
  i.$$.dirty[0] === -1 && (We.push(i), Cn(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xe(i, e, t, n, r, o, l = null, s = [-1]) {
  const c = qe;
  Ge(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: z,
    not_equal: r,
    bound: Ht(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Ht(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  l && l(u.root);
  let d = !1;
  if (u.ctx = t ? t(i, e.props || {}, (a, f, ...h) => {
    const g = h.length ? h[0] : f;
    return u.ctx && r(u.ctx[a], u.ctx[a] = g) && (!u.skip_bound && u.bound[a] && u.bound[a](g), d && Rn(i, a)), f;
  }) : [], u.update(), d = !0, ye(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = En(e.target);
      u.fragment && u.fragment.l(a), a.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && G(i.$$.fragment), ge(i, e.target, e.anchor), Ri();
  }
  Ge(c);
}
class Me {
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
    me(this, 1), this.$destroy = z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ni(t))
      return z;
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
    this.$$set && !mn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const In = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(In);
function On(i) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), y(e, "viewBox", "0 0 14 14"), y(e, "width", "13"), y(e, "height", "13"), y(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(e);
    }
  };
}
class Ii extends Me {
  constructor(e) {
    super(), xe(this, e, null, On, Se, {});
  }
}
function An(i) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), y(e, "viewBox", "0 0 30 30"), y(e, "fill", "none"), y(e, "xmlns", "http://www.w3.org/2000/svg"), y(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(e);
    }
  };
}
class Oi extends Me {
  constructor(e) {
    super(), xe(this, e, null, An, Se, {});
  }
}
function Wn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function zn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Bn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Dn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Fn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Un(i) {
  let e, t;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Gn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function jn(i) {
  let e, t, n, r;
  return {
    c() {
      e = A("img"), Y(e.src, t = /*imageUrl*/
      i[5]) || y(e, "src", t), y(
        e,
        "alt",
        /*category*/
        i[4]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(o, l) {
      F(o, e, l), n || (r = J(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(o, l) {
      l & /*imageUrl*/
      32 && !Y(e.src, t = /*imageUrl*/
      o[5]) && y(e, "src", t), l & /*category*/
      16 && y(
        e,
        "alt",
        /*category*/
        o[4]
      );
    },
    d(o) {
      o && B(e), n = !1, r();
    }
  };
}
function $t(i) {
  let e, t;
  return {
    c() {
      e = A("span"), t = _e(
        /*placeType*/
        i[6]
      ), y(e, "class", "secondary svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && je(
        t,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function qn(i) {
  let e, t, n, r, o, l, s, c, u, d = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), a, f, h = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] !== "never" && !/*feature*/
    i[0].address && !/*feature*/
    i[0].id.startsWith("road.") && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), g, v, w = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), p, S, L;
  function E(_, C) {
    return C & /*feature*/
    1 && (t = null), C & /*feature*/
    1 && (n = null), C & /*feature*/
    1 && (r = null), C & /*feature*/
    1 && (o = null), /*imageUrl*/
    _[5] ? jn : (
      /*feature*/
      _[0].address ? Gn : (t == null && (t = !!/*feature*/
      _[0].id.startsWith("road.")), t ? Un : (n == null && (n = !!/*feature*/
      _[0].id.startsWith("address.")), n ? Fn : (r == null && (r = !!/*feature*/
      _[0].id.startsWith("postal_code.")), r ? Dn : (o == null && (o = !!/*feature*/
      _[0].id.startsWith("poi.")), o ? Bn : (
        /*isReverse*/
        _[7] ? zn : Wn
      )))))
    );
  }
  let M = E(i, -1), k = M(i), b = h && $t(i);
  return {
    c() {
      e = A("li"), k.c(), l = ee(), s = A("span"), c = A("span"), u = A("span"), a = _e(d), f = ee(), b && b.c(), g = ee(), v = A("span"), p = _e(w), y(u, "class", "primary svelte-ltkwvy"), y(c, "class", "svelte-ltkwvy"), y(v, "class", "line2 svelte-ltkwvy"), y(s, "class", "texts svelte-ltkwvy"), y(e, "tabindex", "0"), y(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), y(e, "class", "svelte-ltkwvy"), re(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(_, C) {
      F(_, e, C), k.m(e, null), T(e, l), T(e, s), T(s, c), T(c, u), T(u, a), T(c, f), b && b.m(c, null), T(s, g), T(s, v), T(v, p), S || (L = [
        J(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        J(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], S = !0);
    },
    p(_, [C]) {
      M === (M = E(_, C)) && k ? k.p(_, C) : (k.d(1), k = M(_), k && (k.c(), k.m(e, l))), C & /*feature*/
      1 && d !== (d = /*isReverse*/
      (_[7] ? (
        /*feature*/
        _[0].place_name
      ) : (
        /*feature*/
        _[0].place_name.replace(/,.*/, "")
      )) + "") && je(a, d), C & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      _[2] === "always" || /*showPlaceType*/
      _[2] !== "never" && !/*feature*/
      _[0].address && !/*feature*/
      _[0].id.startsWith("road.") && !/*feature*/
      _[0].id.startsWith("address.") && !/*feature*/
      _[0].id.startsWith("postal_code.") && (!/*feature*/
      _[0].id.startsWith("poi.") || !/*imageUrl*/
      _[5]) && !/*isReverse*/
      _[7]), h ? b ? b.p(_, C) : (b = $t(_), b.c(), b.m(c, null)) : b && (b.d(1), b = null), C & /*feature*/
      1 && w !== (w = /*isReverse*/
      (_[7] ? "" : (
        /*feature*/
        _[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && je(p, w), C & /*selected*/
      2 && y(
        e,
        "data-selected",
        /*selected*/
        _[1]
      ), C & /*selected*/
      2 && re(
        e,
        "selected",
        /*selected*/
        _[1]
      );
    },
    i: z,
    o: z,
    d(_) {
      _ && B(e), k.d(), b && b.d(), S = !1, ye(L);
    }
  };
}
function Zn(i, e, t) {
  var L;
  let n, r, { feature: o } = e, { selected: l = !1 } = e, { showPlaceType: s } = e, { missingIconsCache: c } = e, { iconsBaseUrl: u } = e;
  const d = (L = o.properties) == null ? void 0 : L.categories;
  let a, f, h = 0, g = o.place_type[0] === "reverse";
  function v() {
    f && c.add(f), t(10, h++, h);
  }
  function w(E) {
    Xt.call(this, i, E);
  }
  function p(E) {
    Xt.call(this, i, E);
  }
  const S = () => v();
  return i.$$set = (E) => {
    "feature" in E && t(0, o = E.feature), "selected" in E && t(1, l = E.selected), "showPlaceType" in E && t(2, s = E.showPlaceType), "missingIconsCache" in E && t(9, c = E.missingIconsCache), "iconsBaseUrl" in E && t(3, u = E.iconsBaseUrl);
  }, i.$$.update = () => {
    var E, M, k, b;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, n--, n), t(4, a = d == null ? void 0 : d[n]), t(5, f = a ? u + a.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!f || c.has(f)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((M = (E = o.properties) == null ? void 0 : E.categories) == null ? void 0 : M.join(", ")) ?? ((b = (k = o.properties) == null ? void 0 : k.place_type_name) == null ? void 0 : b[0]) ?? o.place_type[0]);
  }, t(11, n = (d == null ? void 0 : d.length) ?? 0), [
    o,
    l,
    s,
    u,
    a,
    f,
    r,
    g,
    v,
    c,
    h,
    n,
    w,
    p,
    S
  ];
}
class Qn extends Me {
  constructor(e) {
    super(), xe(this, e, Zn, qn, Se, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Hn(i) {
  let e;
  return {
    c() {
      e = A("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', y(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && B(e);
    }
  };
}
class Vn extends Me {
  constructor(e) {
    super(), xe(this, e, null, Hn, Se, {});
  }
}
function Yn(i) {
  let e, t, n;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "stroke-width", "4"), y(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), y(t, "class", "svelte-gzo3ar"), y(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), y(e, "viewBox", "0 0 70 85"), y(e, "fill", "none"), y(e, "class", "svelte-gzo3ar"), re(
        e,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), re(
        e,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    m(r, o) {
      F(r, e, o), T(e, t);
    },
    p(r, [o]) {
      o & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && y(e, "width", n), o & /*displayIn*/
      1 && re(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), o & /*displayIn*/
      1 && re(
        e,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    i: z,
    o: z,
    d(r) {
      r && B(e);
    }
  };
}
function Xn(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class Kn extends Me {
  constructor(e) {
    super(), xe(this, e, Xn, Yn, Se, { displayIn: 0 });
  }
}
function Jn(i) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), y(e, "viewBox", "0 0 60.006 21.412"), y(e, "width", "14"), y(e, "height", "20"), y(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(e);
    }
  };
}
class $n extends Me {
  constructor(e) {
    super(), xe(this, e, null, Jn, Se, {});
  }
}
function er(i) {
  let e, t, n;
  return {
    c() {
      e = ue("svg"), t = ue("circle"), n = ue("path"), y(t, "cx", "4.789"), y(t, "cy", "4.787"), y(t, "r", "3.85"), y(t, "class", "svelte-1aq105l"), y(n, "d", "M12.063 12.063 7.635 7.635"), y(n, "class", "svelte-1aq105l"), y(e, "xmlns", "http://www.w3.org/2000/svg"), y(e, "width", "13"), y(e, "height", "13"), y(e, "viewBox", "0 0 13 13"), y(e, "class", "svelte-1aq105l");
    },
    m(r, o) {
      F(r, e, o), T(e, t), T(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && B(e);
    }
  };
}
class tr extends Me {
  constructor(e) {
    super(), xe(this, e, null, er, Se, {});
  }
}
function ir(i, e, t) {
  const n = e[1], r = e[0], o = n - r;
  return i === n && t ? i : ((i - r) % o + o) % o + r;
}
function Ze(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let De;
async function nr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (De && r.cachedLocationExpiry && De.time + r.cachedLocationExpiry > Date.now()) {
          if (!De.coords)
            break e;
          return De.coords;
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
          r.cachedLocationExpiry && (De = {
            time: Date.now(),
            coords: o
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
const rr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, ei = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, ti = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, ii = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, ni = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, ri = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function or(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((h) => Number(h.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), o = Math.abs(n), l = t > 0 ? "N" : "S", s = n > 0 ? "E" : "W";
    let c;
    i == "DD" && (c = `${r}° ${l}, ${o}° ${s}`);
    const u = Math.floor(r), d = Math.floor(o), a = (r - u) * 60, f = (o - d) * 60;
    if (i == "DM") {
      let h = oi(a, 3).toFixed(3).padStart(6, "0"), g = oi(f, 3).toFixed(3).padStart(6, "0");
      h.endsWith(".000") && g.endsWith(".000") && (h = h.replace(/\.000$/, ""), g = g.replace(/\.000$/, "")), c = `${u}° ${h}' ${l}, ${d}° ${g}' ${s}`;
    }
    if (i == "DMS") {
      const h = Math.floor(a), g = Math.floor(f);
      let v = ((a - h) * 60).toFixed(1).padStart(4, "0"), w = ((f - g) * 60).toFixed(1).padStart(4, "0");
      const p = h.toString().padStart(2, "0"), S = g.toString().padStart(2, "0");
      v.endsWith(".0") && w.endsWith(".0") && (v = v.replace(/\.0$/, ""), w = w.replace(/\.0$/, "")), c = `${u}° ${p}' ${v}" ${l}, ${d}° ${S}' ${w}" ${s}`;
    }
    return c;
  } else
    throw new Error("no decimal coordinates to convert");
}
function oi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function Wt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", o = "", l = null, s = [], c = !1;
  if (rr.test(i))
    throw new Error("invalid coordinate value");
  if (ei.test(i))
    if (s = ei.exec(i), c = Fe(s), c)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), n = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (n *= -1), l = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (ti.test(i))
    if (s = ti.exec(i), c = Fe(s), c) {
      if (t = s[2], n = s[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), l = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], o = s[5]) : s[4] && (r = s[4], o = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ii.test(i))
    if (s = ii.exec(i), c = Fe(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[9])), s[11] && (n += s[11] / 60), s[13] && (n += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (n = -1 * n), s[1] ? (r = s[1], o = s[8]) : s[7] && (r = s[7], o = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ni.test(i))
    if (s = ni.exec(i), c = Fe(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6] / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12] / 60), s[14] && (n += s[14] / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ri.test(i)) {
    if (s = ri.exec(i), c = Fe(s), s.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12].replace(",", ".") / 60), s[14] && (n += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (c) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !o || !r && o)
      throw new Error("invalid coordinates value");
    if (r && r == o)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let u = /S|SOUTH/i;
    u.test(r) && t > 0 && (t = -1 * t), u = /W|WEST/i, u.test(o) && n > 0 && (n = -1 * n);
    const d = s[0].trim();
    let a, f;
    const h = /[,/;\u0020]/g, g = d.match(h);
    if (g == null) {
      const p = Math.floor(i.length / 2);
      a = d.substring(0, p).trim(), f = d.substring(p).trim();
    } else {
      let p;
      g.length % 2 == 1 ? p = Math.floor(g.length / 2) : p = g.length / 2 - 1;
      let S = 0;
      if (p == 0)
        S = d.indexOf(g[0]), a = d.substring(0, S).trim(), f = d.substring(S + 1).trim();
      else {
        let L = 0, E = 0;
        for (; L <= p; )
          S = d.indexOf(g[L], E), E = S + 1, L++;
        a = d.substring(0, S).trim(), f = d.substring(S + 1).trim();
      }
    }
    const v = a.split(".");
    if (v.length == 2 && v[1] == 0 && v[1].length != 2)
      throw new Error("invalid coordinates format");
    const w = f.split(".");
    if (w.length == 2 && w[1] == 0 && w[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(a) || /^\d+$/.test(f))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: d,
      verbatimLatitude: a,
      verbatimLongitude: f,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: l,
      closeEnough: sr,
      toCoordinateFormat: or
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Fe(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let o = 0; o < r; o++) {
    const l = e[o], s = e[o + r], c = t.test(l) && t.test(s), u = n.test(l) && n.test(s), d = l == s;
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
function si(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function sr(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return si(this.decimalLatitude, Number(e[0])) && si(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const lr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Wt.to = lr;
const ur = [
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
], ar = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, cr = [
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
], fr = [
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
function dr() {
  const i = [];
  return ur.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...ar });
  }), [...i, ...cr, ...fr];
}
const hr = dr();
Wt.formats = hr.map((i) => i.verbatimCoordinates);
const gr = Wt;
function li(i, e, t) {
  const n = i.slice();
  return n[84] = e[t], n[86] = t, n;
}
function ui(i) {
  let e, t;
  return e = new Vn({}), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      ge(e, n, r), t = !0;
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      H(e.$$.fragment, n), t = !1;
    },
    d(n) {
      me(e, n);
    }
  };
}
function ai(i) {
  let e, t, n, r, o;
  return t = new $n({}), {
    c() {
      e = A("button"), Ee(t.$$.fragment), y(e, "type", "button"), y(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), y(e, "class", "svelte-bz0zu3"), re(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(l, s) {
      F(l, e, s), ge(t, e, null), n = !0, r || (o = J(
        e,
        "click",
        /*click_handler_2*/
        i[69]
      ), r = !0);
    },
    p(l, s) {
      (!n || s[0] & /*reverseButtonTitle*/
      512) && y(
        e,
        "title",
        /*reverseButtonTitle*/
        l[9]
      ), (!n || s[0] & /*reverseActive*/
      1) && re(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      n || (G(t.$$.fragment, l), n = !0);
    },
    o(l) {
      H(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && B(e), me(t), r = !1, o();
    }
  };
}
function mr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, o, l, s = Jt(
    /*listFeatures*/
    i[14]
  );
  const c = (u) => (
    /*feature*/
    u[84].id + /*feature*/
    (u[84].address ? "," + /*feature*/
    u[84].address : "")
  );
  for (let u = 0; u < s.length; u += 1) {
    let d = li(i, s, u), a = c(d);
    n.set(a, t[u] = ci(a, d));
  }
  return {
    c() {
      e = A("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      y(e, "class", "options svelte-bz0zu3");
    },
    m(u, d) {
      F(u, e, d);
      for (let a = 0; a < t.length; a += 1)
        t[a] && t[a].m(e, null);
      r = !0, o || (l = [
        J(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[73]
        ),
        J(
          e,
          "blur",
          /*blur_handler_1*/
          i[74]
        )
      ], o = !0);
    },
    p(u, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (s = Jt(
        /*listFeatures*/
        u[14]
      ), rt(), t = Tn(t, d, c, 1, u, s, n, e, Pn, ci, null, li), ot());
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
function yr(i) {
  let e, t, n, r, o, l;
  return t = new Oi({}), {
    c() {
      e = A("div"), Ee(t.$$.fragment), n = ee(), r = A("div"), o = _e(
        /*noResultsMessage*/
        i[7]
      ), y(r, "class", "svelte-bz0zu3"), y(e, "class", "no-results svelte-bz0zu3");
    },
    m(s, c) {
      F(s, e, c), ge(t, e, null), T(e, n), T(e, r), T(r, o), l = !0;
    },
    p(s, c) {
      (!l || c[0] & /*noResultsMessage*/
      128) && je(
        o,
        /*noResultsMessage*/
        s[7]
      );
    },
    i(s) {
      l || (G(t.$$.fragment, s), l = !0);
    },
    o(s) {
      H(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && B(e), me(t);
    }
  };
}
function pr(i) {
  let e = "", t;
  return {
    c() {
      t = _e(e);
    },
    m(n, r) {
      F(n, t, r);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(t);
    }
  };
}
function br(i) {
  let e, t, n, r, o, l, s, c, u, d, a;
  return t = new Oi({}), c = new Ii({}), {
    c() {
      e = A("div"), Ee(t.$$.fragment), n = ee(), r = A("div"), o = _e(
        /*errorMessage*/
        i[6]
      ), l = ee(), s = A("button"), Ee(c.$$.fragment), y(r, "class", "svelte-bz0zu3"), y(s, "class", "svelte-bz0zu3"), y(e, "class", "error svelte-bz0zu3");
    },
    m(f, h) {
      F(f, e, h), ge(t, e, null), T(e, n), T(e, r), T(r, o), T(e, l), T(e, s), ge(c, s, null), u = !0, d || (a = J(
        s,
        "click",
        /*click_handler_3*/
        i[70]
      ), d = !0);
    },
    p(f, h) {
      (!u || h[0] & /*errorMessage*/
      64) && je(
        o,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      u || (G(t.$$.fragment, f), G(c.$$.fragment, f), u = !0);
    },
    o(f) {
      H(t.$$.fragment, f), H(c.$$.fragment, f), u = !1;
    },
    d(f) {
      f && B(e), me(t), me(c), d = !1, a();
    }
  };
}
function ci(i, e) {
  let t, n, r;
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
  return n = new Qn({
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
  }), n.$on("mouseenter", o), n.$on("focus", l), {
    key: i,
    first: null,
    c() {
      t = wn(), Ee(n.$$.fragment), this.first = t;
    },
    m(s, c) {
      F(s, t, c), ge(n, s, c), r = !0;
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
      e[12]), n.$set(u);
    },
    i(s) {
      r || (G(n.$$.fragment, s), r = !0);
    },
    o(s) {
      H(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(t), me(n, s);
    }
  };
}
function vr(i) {
  let e, t, n, r, o, l, s, c, u, d, a, f, h, g, v, w, p, S, L, E, M, k = !1;
  o = new tr({}), a = new Ii({});
  let b = (
    /*abortController*/
    i[19] && ui()
  ), _ = (
    /*enableReverse*/
    i[5] === "button" && ai(i)
  );
  const C = (
    /*#slots*/
    i[61].default
  ), I = yn(
    C,
    i,
    /*$$scope*/
    i[60],
    null
  ), Q = [br, pr, yr, mr], O = [];
  function X(x, W) {
    var oe, de;
    return (
      /*error*/
      x[18] ? 0 : (
        /*focusedDelayed*/
        x[16] ? (
          /*listFeatures*/
          ((oe = x[14]) == null ? void 0 : oe.length) === 0 ? 2 : (
            /*focusedDelayed*/
            x[16] && /*listFeatures*/
            ((de = x[14]) != null && de.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(w = X(i)) && (p = O[w] = Q[w](i)), {
    c() {
      e = ee(), t = A("form"), n = A("div"), r = A("button"), Ee(o.$$.fragment), l = ee(), s = A("input"), c = ee(), u = A("div"), d = A("button"), Ee(a.$$.fragment), f = ee(), b && b.c(), h = ee(), _ && _.c(), g = ee(), I && I.c(), v = ee(), p && p.c(), y(r, "class", "search-button svelte-bz0zu3"), y(r, "type", "button"), y(
        s,
        "placeholder",
        /*placeholder*/
        i[8]
      ), y(
        s,
        "aria-label",
        /*placeholder*/
        i[8]
      ), y(s, "class", "svelte-bz0zu3"), y(d, "type", "button"), y(
        d,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), y(d, "class", "svelte-bz0zu3"), y(u, "class", "clear-button-container svelte-bz0zu3"), re(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), y(n, "class", "input-group svelte-bz0zu3"), y(t, "tabindex", "0"), y(t, "class", S = Vt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), re(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(x, W) {
      F(x, e, W), F(x, t, W), T(t, n), T(n, r), ge(o, r, null), T(n, l), T(n, s), i[63](s), Yt(
        s,
        /*searchValue*/
        i[1]
      ), T(n, c), T(n, u), T(u, d), ge(a, d, null), T(u, f), b && b.m(u, null), T(n, h), _ && _.m(n, null), T(n, g), I && I.m(n, null), T(t, v), ~w && O[w].m(t, null), L = !0, E || (M = [
        J(
          r,
          "click",
          /*click_handler*/
          i[62]
        ),
        J(
          s,
          "input",
          /*input_1_input_handler*/
          i[64]
        ),
        J(
          s,
          "focus",
          /*focus_handler*/
          i[65]
        ),
        J(
          s,
          "blur",
          /*blur_handler*/
          i[66]
        ),
        J(
          s,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        J(
          s,
          "input",
          /*input_handler*/
          i[67]
        ),
        J(
          d,
          "click",
          /*click_handler_1*/
          i[68]
        ),
        J(t, "submit", _n(
          /*handleOnSubmit*/
          i[21]
        ))
      ], E = !0);
    },
    p(x, W) {
      (!L || W[0] & /*placeholder*/
      256) && y(
        s,
        "placeholder",
        /*placeholder*/
        x[8]
      ), (!L || W[0] & /*placeholder*/
      256) && y(
        s,
        "aria-label",
        /*placeholder*/
        x[8]
      ), W[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      x[1] && Yt(
        s,
        /*searchValue*/
        x[1]
      ), (!L || W[0] & /*clearButtonTitle*/
      8) && y(
        d,
        "title",
        /*clearButtonTitle*/
        x[3]
      ), /*abortController*/
      x[19] ? b ? W[0] & /*abortController*/
      524288 && G(b, 1) : (b = ui(), b.c(), G(b, 1), b.m(u, null)) : b && (rt(), H(b, 1, 1, () => {
        b = null;
      }), ot()), (!L || W[0] & /*searchValue*/
      2) && re(
        u,
        "displayable",
        /*searchValue*/
        x[1] !== ""
      ), /*enableReverse*/
      x[5] === "button" ? _ ? (_.p(x, W), W[0] & /*enableReverse*/
      32 && G(_, 1)) : (_ = ai(x), _.c(), G(_, 1), _.m(n, g)) : _ && (rt(), H(_, 1, 1, () => {
        _ = null;
      }), ot()), I && I.p && (!L || W[1] & /*$$scope*/
      536870912) && bn(
        I,
        C,
        x,
        /*$$scope*/
        x[60],
        L ? pn(
          C,
          /*$$scope*/
          x[60],
          W,
          null
        ) : vn(
          /*$$scope*/
          x[60]
        ),
        null
      );
      let oe = w;
      w = X(x), w === oe ? ~w && O[w].p(x, W) : (p && (rt(), H(O[oe], 1, 1, () => {
        O[oe] = null;
      }), ot()), ~w ? (p = O[w], p ? p.p(x, W) : (p = O[w] = Q[w](x), p.c()), G(p, 1), p.m(t, null)) : p = null), (!L || W[0] & /*className*/
      4 && S !== (S = Vt(
        /*className*/
        x[2]
      ) + " svelte-bz0zu3")) && y(t, "class", S), (!L || W[0] & /*className, collapsed, searchValue*/
      22) && re(
        t,
        "can-collapse",
        /*collapsed*/
        x[4] && /*searchValue*/
        x[1] === ""
      );
    },
    i(x) {
      L || (G(k), G(o.$$.fragment, x), G(a.$$.fragment, x), G(b), G(_), G(I, x), G(p), L = !0);
    },
    o(x) {
      H(k), H(o.$$.fragment, x), H(a.$$.fragment, x), H(b), H(_), H(I, x), H(p), L = !1;
    },
    d(x) {
      x && (B(e), B(t)), me(o), i[63](null), me(a), b && b.d(), _ && _.d(), I && I.d(x), ~w && O[w].d(), E = !1, ye(M);
    }
  };
}
function wr(i, e, t) {
  let n, r, { $$slots: o = {}, $$scope: l } = e;
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
  let { class: c = void 0 } = e, { apiKey: u } = e, { bbox: d = void 0 } = e, { clearButtonTitle: a = "clear" } = e, { clearOnBlur: f = !1 } = e, { collapsed: h = !1 } = e, { country: g = void 0 } = e, { debounceSearch: v = 200 } = e, { enableReverse: w = "never" } = e, { errorMessage: p = "Something went wrong…" } = e, { filter: S = () => !0 } = e, { flyTo: L = !0 } = e, { fuzzyMatch: E = !0 } = e, { language: M = void 0 } = e, { limit: k = void 0 } = e, { mapController: b = void 0 } = e, { minLength: _ = 2 } = e, { noResultsMessage: C = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: I = "Search" } = e, { proximity: Q = [{ type: "server-geolocation" }] } = e, { reverseActive: O = w === "always" } = e, { reverseButtonTitle: X = "toggle reverse geocoding" } = e, { searchValue: x = "" } = e, { pickedResultStyle: W = "full-geometry" } = e, { showPlaceType: oe = "if-needed" } = e, { showResultsWhileTyping: de = !0 } = e, { selectFirst: Te = !0 } = e, { flyToSelected: at = !1 } = e, { markerOnSelected: Xe = !0 } = e, { types: Ce = void 0 } = e, { exhaustiveReverseGeocoding: ct = !1 } = e, { excludeTypes: Ke = !1 } = e, { zoom: Je = s } = e, { apiUrl: ft = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: dt = {} } = e, { iconsBaseUrl: Ut = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.0.1/icons/" } = e, { adjustUrlQuery: ht = () => {
  } } = e;
  function qi() {
    ae.focus();
  }
  function Zi() {
    ae.blur();
  }
  function Gt(m, U = !0, Z = !1) {
    t(1, x = m), U ? (t(15, D = -1), qt()) : (pt(!Z, Z), setTimeout(() => {
      ae.focus(), ae.select();
    }));
  }
  function Qi() {
    t(14, R = void 0), t(56, N = void 0), t(15, D = -1);
  }
  function Hi() {
    t(55, j = []), t(56, N = void 0);
  }
  let Re = !1, R, j, N, jt = "", ae, D = -1, ce, $e = [], ke, Ie, et, gt;
  const Vi = /* @__PURE__ */ new Set(), pe = xn();
  Sn(() => {
    b && (b.setEventHandler(void 0), b.indicateReverse(!1), b.setSelectedMarker(-1), b.setFeatures(void 0, void 0, !1));
  });
  function qt(m) {
    if (Ie && (clearTimeout(Ie), Ie = void 0), D > -1 && R)
      t(56, N = R[D]), t(1, x = N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")), t(18, ce = void 0), t(55, j = void 0), t(15, D = -1);
    else if (x) {
      const U = m || !mt(x);
      yt(x, { exact: !0 }).then(() => {
        t(55, j = R), t(56, N = void 0), U && Yi();
      }).catch((Z) => t(18, ce = Z));
    }
  }
  function mt(m) {
    try {
      return gr(m, 6);
    } catch {
      return !1;
    }
  }
  async function yt(m, { byId: U = !1, exact: Z = !1 } = {}) {
    t(18, ce = void 0), ke == null || ke.abort();
    const $ = new AbortController();
    t(19, ke = $);
    try {
      const P = mt(m), q = new URLSearchParams();
      if (M !== void 0 && q.set("language", Array.isArray(M) ? M.join(",") : M ?? ""), Ce && q.set("types", Ce.join(",")), Ke && q.set("excludeTypes", String(Ke)), d && q.set("bbox", d.map((tt) => tt.toFixed(6)).join(",")), g && q.set("country", Array.isArray(g) ? g.join(",") : g), !U && !P) {
        const tt = await nr(b, Q, $);
        tt && q.set("proximity", tt), (Z || !de) && q.set("autocomplete", "false"), q.set("fuzzyMatch", String(E));
      }
      k !== void 0 && (ct || !P || (Ce == null ? void 0 : Ce.length) === 1) && q.set("limit", String(k)), q.set("key", u), ht(q);
      const fe = ft + "/" + encodeURIComponent(P ? P.decimalLongitude + "," + P.decimalLatitude : m) + ".json?" + q.toString();
      if (fe === jt) {
        U ? (t(14, R = void 0), t(56, N = $e[0])) : t(14, R = $e);
        return;
      }
      jt = fe;
      const vt = await fetch(fe, { signal: $.signal, ...dt });
      if (!vt.ok)
        throw new Error(await vt.text());
      const wt = await vt.json();
      pe("response", { url: fe, featureCollection: wt }), U ? (t(14, R = void 0), t(56, N = wt.features[0]), $e = [N]) : (t(14, R = wt.features.filter(S)), P && R.unshift({
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
      }), $e = R, P && ae.focus());
    } catch (P) {
      if (P && typeof P == "object" && "name" in P && P.name === "AbortError")
        return;
      throw P;
    } finally {
      $ === ke && t(19, ke = void 0);
    }
  }
  function Yi() {
    var $;
    if (!(j != null && j.length) || !L)
      return;
    const m = [180, 90, -180, -90], U = !j.some((P) => !P.matching_text);
    let Z;
    for (const P of j) {
      const q = Be(P);
      if (Z = Z === void 0 ? q : q === void 0 ? Z : Math.max(Z, q), U || !P.matching_text)
        for (const fe of [0, 1, 2, 3])
          m[fe] = Math[fe < 2 ? "min" : "max"](m[fe], (($ = P.bbox) == null ? void 0 : $[fe]) ?? P.center[fe % 2]);
    }
    b && j.length > 0 && (N && m[0] === m[2] && m[1] === m[3] ? b.flyTo(N.center, Be(N)) : b.fitBounds(Ze(m), 50, Z));
  }
  function Be(m) {
    var Z;
    if (!m.bbox || m.bbox[0] !== m.bbox[2] && m.bbox[1] !== m.bbox[3])
      return;
    const U = m.id.replace(/\..*/, "");
    return (Array.isArray((Z = m.properties) == null ? void 0 : Z.categories) ? m.properties.categories.reduce(
      ($, P) => {
        const q = Je[U + "." + P];
        return $ === void 0 ? q : q === void 0 ? $ : Math.max($, q);
      },
      void 0
    ) : void 0) ?? Je[U];
  }
  function Xi(m) {
    t(0, O = w === "always"), t(14, R = void 0), t(56, N = void 0), t(15, D = -1), Gt(m[1].toFixed(6) + ", " + ir(m[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Ki(m) {
    if (!R)
      return;
    let U = m.key === "ArrowDown" ? 1 : m.key === "ArrowUp" ? -1 : 0;
    U && (D === (Te ? 0 : -1) && U === -1 && t(15, D = R.length), t(15, D += U), D >= R.length && t(15, D = -1), D < 0 && Te && t(15, D = 0), m.preventDefault());
  }
  function pt(m = !0, U = !1) {
    if (t(18, ce = void 0), de || U) {
      if (Ie && clearTimeout(Ie), x.length < _)
        return;
      const Z = x;
      Ie = window.setTimeout(
        () => {
          yt(Z).catch(($) => t(18, ce = $));
        },
        m ? v : 0
      );
    } else
      t(14, R = void 0), t(18, ce = void 0);
  }
  function bt(m) {
    t(56, N = m), t(1, x = m.place_name), t(15, D = -1);
  }
  const Ji = () => ae.focus();
  function $i(m) {
    Ct[m ? "unshift" : "push"](() => {
      ae = m, t(17, ae);
    });
  }
  function en() {
    x = this.value, t(1, x), t(13, Re), t(28, f);
  }
  const tn = () => t(13, Re = !0), nn = () => t(13, Re = !1), rn = () => pt(), on = () => {
    t(1, x = ""), ae.focus();
  }, sn = () => t(0, O = !O), ln = () => t(18, ce = void 0), un = (m) => t(15, D = m), an = (m) => bt(m), cn = () => {
    Te || t(15, D = -1);
  }, fn = () => {
  };
  return i.$$set = (m) => {
    "class" in m && t(2, c = m.class), "apiKey" in m && t(26, u = m.apiKey), "bbox" in m && t(27, d = m.bbox), "clearButtonTitle" in m && t(3, a = m.clearButtonTitle), "clearOnBlur" in m && t(28, f = m.clearOnBlur), "collapsed" in m && t(4, h = m.collapsed), "country" in m && t(29, g = m.country), "debounceSearch" in m && t(30, v = m.debounceSearch), "enableReverse" in m && t(5, w = m.enableReverse), "errorMessage" in m && t(6, p = m.errorMessage), "filter" in m && t(31, S = m.filter), "flyTo" in m && t(32, L = m.flyTo), "fuzzyMatch" in m && t(33, E = m.fuzzyMatch), "language" in m && t(34, M = m.language), "limit" in m && t(35, k = m.limit), "mapController" in m && t(36, b = m.mapController), "minLength" in m && t(37, _ = m.minLength), "noResultsMessage" in m && t(7, C = m.noResultsMessage), "placeholder" in m && t(8, I = m.placeholder), "proximity" in m && t(38, Q = m.proximity), "reverseActive" in m && t(0, O = m.reverseActive), "reverseButtonTitle" in m && t(9, X = m.reverseButtonTitle), "searchValue" in m && t(1, x = m.searchValue), "pickedResultStyle" in m && t(39, W = m.pickedResultStyle), "showPlaceType" in m && t(10, oe = m.showPlaceType), "showResultsWhileTyping" in m && t(40, de = m.showResultsWhileTyping), "selectFirst" in m && t(11, Te = m.selectFirst), "flyToSelected" in m && t(41, at = m.flyToSelected), "markerOnSelected" in m && t(42, Xe = m.markerOnSelected), "types" in m && t(43, Ce = m.types), "exhaustiveReverseGeocoding" in m && t(44, ct = m.exhaustiveReverseGeocoding), "excludeTypes" in m && t(45, Ke = m.excludeTypes), "zoom" in m && t(46, Je = m.zoom), "apiUrl" in m && t(47, ft = m.apiUrl), "fetchParameters" in m && t(48, dt = m.fetchParameters), "iconsBaseUrl" in m && t(12, Ut = m.iconsBaseUrl), "adjustUrlQuery" in m && t(49, ht = m.adjustUrlQuery), "$$scope" in m && t(60, l = m.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, O = w === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, et = Re), f && !Re && t(1, x = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    64 && x.length < _ && (t(56, N = void 0), t(14, R = void 0), t(18, ce = void 0), t(55, j = R)), i.$$.dirty[1] & /*pickedResultStyle, picked*/
    33554688 && W !== "marker-only" && N && !N.address && N.geometry.type === "Point" && N.place_type[0] !== "reverse" && yt(N.id, { byId: !0 }).catch((m) => t(18, ce = m)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (b && N && N.id !== gt && L && (!N.bbox || N.bbox[0] === N.bbox[2] && N.bbox[1] === N.bbox[3] ? b.flyTo(N.center, Be(N)) : b.fitBounds(Ze(N.bbox), 50, Be(N)), t(14, R = void 0), t(55, j = void 0), t(15, D = -1)), t(57, gt = N == null ? void 0 : N.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && Te && R != null && R.length && t(15, D = 0), i.$$.dirty[0] & /*searchValue*/
    2 && t(15, D = -1), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    16777216 && j !== R && t(55, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && b && b.setEventHandler((m) => {
      switch (m.type) {
        case "mapClick":
          O && Xi(m.coordinates);
          break;
        case "markerClick":
          {
            const U = R == null ? void 0 : R.find((Z) => Z.id === m.id);
            U && bt(U);
          }
          break;
        case "markerMouseEnter":
          j && t(15, D = et ? (R == null ? void 0 : R.findIndex((U) => U.id === m.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, D = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, r = R == null ? void 0 : R[D]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && b && r && L && at && b.flyTo(r.center, Be(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    256 && t(59, n = W === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController, showPolygonMarker*/
    268437536 && (Xe || b == null || b.setFeatures(void 0, void 0, n)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected, showPolygonMarker*/
    419432480 && b && Xe && !j && (b.setFeatures(r ? [r] : void 0, void 0, n), b.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked, showPolygonMarker*/
    318767136 && b && b.setFeatures(j, N, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && j && b && b.setSelectedMarker(D), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    32 && b) {
      const m = mt(x);
      b.setReverseMarker(m ? [m.decimalLongitude, m.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    134217728 && pe("select", { feature: r }), i.$$.dirty[1] & /*picked*/
    33554432 && pe("pick", { feature: N }), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && pe("optionsvisibilitychange", {
      optionsVisible: et && !!R
    }), i.$$.dirty[0] & /*listFeatures*/
    16384 && pe("featureslisted", { features: R }), i.$$.dirty[1] & /*markedFeatures*/
    16777216 && pe("featuresmarked", { features: j }), i.$$.dirty[0] & /*reverseActive*/
    1 && pe("reversetoggle", { reverse: O }), i.$$.dirty[0] & /*searchValue*/
    2 && pe("querychange", { query: x }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    32 && b && b.indicateReverse(O);
  }, [
    O,
    x,
    c,
    a,
    h,
    w,
    p,
    C,
    I,
    X,
    oe,
    Te,
    Ut,
    Re,
    R,
    D,
    et,
    ae,
    ce,
    ke,
    Vi,
    qt,
    Ki,
    pt,
    bt,
    s,
    u,
    d,
    f,
    g,
    v,
    S,
    L,
    E,
    M,
    k,
    b,
    _,
    Q,
    W,
    de,
    at,
    Xe,
    Ce,
    ct,
    Ke,
    Je,
    ft,
    dt,
    ht,
    qi,
    Zi,
    Gt,
    Qi,
    Hi,
    j,
    N,
    gt,
    r,
    n,
    l,
    o,
    Ji,
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
    fn
  ];
}
let _r = class extends Me {
  constructor(e) {
    super(), xe(
      this,
      e,
      wr,
      vr,
      Se,
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
function Qe(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function zt(i, e, t = {}) {
  for (const r of i) {
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
  return Qe({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function He(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function Ai(i, e, t = {}) {
  return Qe({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function Wi(i, e, t) {
  if (i !== null)
    for (var n, r, o, l, s, c, u, d = 0, a = 0, f, h = i.type, g = h === "FeatureCollection", v = h === "Feature", w = g ? i.features.length : 1, p = 0; p < w; p++) {
      u = g ? i.features[p].geometry : v ? i.geometry : i, f = u ? u.type === "GeometryCollection" : !1, s = f ? u.geometries.length : 1;
      for (var S = 0; S < s; S++) {
        var L = 0, E = 0;
        if (l = f ? u.geometries[S] : u, l !== null) {
          c = l.coordinates;
          var M = l.type;
          switch (d = 0, M) {
            case null:
              break;
            case "Point":
              if (e(
                c,
                a,
                p,
                L,
                E
              ) === !1)
                return !1;
              a++, L++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < c.length; n++) {
                if (e(
                  c[n],
                  a,
                  p,
                  L,
                  E
                ) === !1)
                  return !1;
                a++, M === "MultiPoint" && L++;
              }
              M === "LineString" && L++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < c.length; n++) {
                for (r = 0; r < c[n].length - d; r++) {
                  if (e(
                    c[n][r],
                    a,
                    p,
                    L,
                    E
                  ) === !1)
                    return !1;
                  a++;
                }
                M === "MultiLineString" && L++, M === "Polygon" && E++;
              }
              M === "Polygon" && L++;
              break;
            case "MultiPolygon":
              for (n = 0; n < c.length; n++) {
                for (E = 0, r = 0; r < c[n].length; r++) {
                  for (o = 0; o < c[n][r].length - d; o++) {
                    if (e(
                      c[n][r][o],
                      a,
                      p,
                      L,
                      E
                    ) === !1)
                      return !1;
                    a++;
                  }
                  E++;
                }
                L++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < l.geometries.length; n++)
                if (Wi(l.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Bt(i, e) {
  var t, n, r, o, l, s, c, u, d, a, f = 0, h = i.type === "FeatureCollection", g = i.type === "Feature", v = h ? i.features.length : 1;
  for (t = 0; t < v; t++) {
    for (s = h ? i.features[t].geometry : g ? i.geometry : i, u = h ? i.features[t].properties : g ? i.properties : {}, d = h ? i.features[t].bbox : g ? i.bbox : void 0, a = h ? i.features[t].id : g ? i.id : void 0, c = s ? s.type === "GeometryCollection" : !1, l = c ? s.geometries.length : 1, r = 0; r < l; r++) {
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
          for (n = 0; n < o.geometries.length; n++)
            if (e(
              o.geometries[n],
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
function Er(i, e) {
  Bt(i, function(t, n, r, o, l) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Qe(t, r, { bbox: o, id: l }),
          n,
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
      if (e(Qe(a, r), n, u) === !1)
        return !1;
    }
  });
}
function Lr(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Wi(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var Pt = Lr;
function Sr(i) {
  if (!i)
    throw new Error("geojson is required");
  switch (i.type) {
    case "Feature":
      return zi(i);
    case "FeatureCollection":
      return xr(i);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Dt(i);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function zi(i) {
  const e = { type: "Feature" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[t] = i[t];
    }
  }), e.properties = Bi(i.properties), i.geometry == null ? e.geometry = null : e.geometry = Dt(i.geometry), e;
}
function Bi(i) {
  const e = {};
  return i && Object.keys(i).forEach((t) => {
    const n = i[t];
    typeof n == "object" ? n === null ? e[t] = null : Array.isArray(n) ? e[t] = n.map((r) => r) : e[t] = Bi(n) : e[t] = n;
  }), e;
}
function xr(i) {
  const e = { type: "FeatureCollection" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "features":
        return;
      default:
        e[t] = i[t];
    }
  }), e.features = i.features.map((t) => zi(t)), e;
}
function Dt(i) {
  const e = { type: i.type };
  return i.bbox && (e.bbox = i.bbox), i.type === "GeometryCollection" ? (e.geometries = i.geometries.map((t) => Dt(t)), e) : (e.coordinates = Di(i.coordinates), e);
}
function Di(i) {
  const e = i;
  return typeof e[0] != "object" ? e.slice() : e.map((t) => Di(t));
}
var Mr = Sr;
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
function Cr(i, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, r, o, l;
  return l = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function s(u) {
    return function(d) {
      return c([u, d]);
    };
  }
  function c(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, r && (o = u[0] & 2 ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
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
      u = e.call(i, t);
    } catch (d) {
      u = [6, d], r = 0;
    } finally {
      n = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var Le = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(e, t) {
      this.next = null, this.key = e, this.data = t, this.left = null, this.right = null;
    }
    return i;
  }()
);
function kr(i, e) {
  return i > e ? 1 : i < e ? -1 : 0;
}
function be(i, e, t) {
  for (var n = new Le(null, null), r = n, o = n; ; ) {
    var l = t(i, e.key);
    if (l < 0) {
      if (e.left === null)
        break;
      if (t(i, e.left.key) < 0) {
        var s = e.left;
        if (e.left = s.right, s.right = e, e = s, e.left === null)
          break;
      }
      o.left = e, o = e, e = e.left;
    } else if (l > 0) {
      if (e.right === null)
        break;
      if (t(i, e.right.key) > 0) {
        var s = e.right;
        if (e.right = s.left, s.left = e, e = s, e.right === null)
          break;
      }
      r.right = e, r = e, e = e.right;
    } else
      break;
  }
  return r.right = e.left, o.left = e.right, e.left = n.right, e.right = n.left, e;
}
function xt(i, e, t, n) {
  var r = new Le(i, e);
  if (t === null)
    return r.left = r.right = null, r;
  t = be(i, t, n);
  var o = n(i, t.key);
  return o < 0 ? (r.left = t.left, r.right = t, t.left = null) : o >= 0 && (r.right = t.right, r.left = t, t.right = null), r;
}
function fi(i, e, t) {
  var n = null, r = null;
  if (e) {
    e = be(i, e, t);
    var o = t(e.key, i);
    o === 0 ? (n = e.left, r = e.right) : o < 0 ? (r = e.right, e.right = null, n = e) : (n = e.left, e.left = null, r = e);
  }
  return { left: n, right: r };
}
function Nr(i, e, t) {
  return e === null ? i : (i === null || (e = be(i.key, e, t), e.left = i), e);
}
function Tt(i, e, t, n, r) {
  if (i) {
    n("" + e + (t ? "└── " : "├── ") + r(i) + `
`);
    var o = e + (t ? "    " : "│   ");
    i.left && Tt(i.left, o, !1, n, r), i.right && Tt(i.right, o, !0, n, r);
  }
}
var Ft = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = kr), this._root = null, this._size = 0, this._comparator = e;
    }
    return i.prototype.insert = function(e, t) {
      return this._size++, this._root = xt(e, t, this._root, this._comparator);
    }, i.prototype.add = function(e, t) {
      var n = new Le(e, t);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, o = be(e, this._root, r), l = r(e, o.key);
      return l === 0 ? this._root = o : (l < 0 ? (n.left = o.left, n.right = o, o.left = null) : l > 0 && (n.right = o.right, n.left = o, o.right = null), this._size++, this._root = n), this._root;
    }, i.prototype.remove = function(e) {
      this._root = this._remove(e, this._root, this._comparator);
    }, i.prototype._remove = function(e, t, n) {
      var r;
      if (t === null)
        return null;
      t = be(e, t, n);
      var o = n(e, t.key);
      return o === 0 ? (t.left === null ? r = t.right : (r = be(e, t.left, n), r.right = t.right), this._size--, r) : t;
    }, i.prototype.pop = function() {
      var e = this._root;
      if (e) {
        for (; e.left; )
          e = e.left;
        return this._root = be(e.key, this._root, this._comparator), this._root = this._remove(e.key, this._root, this._comparator), { key: e.key, data: e.data };
      }
      return null;
    }, i.prototype.findStatic = function(e) {
      for (var t = this._root, n = this._comparator; t; ) {
        var r = n(e, t.key);
        if (r === 0)
          return t;
        r < 0 ? t = t.left : t = t.right;
      }
      return null;
    }, i.prototype.find = function(e) {
      return this._root && (this._root = be(e, this._root, this._comparator), this._comparator(e, this._root.key) !== 0) ? null : this._root;
    }, i.prototype.contains = function(e) {
      for (var t = this._root, n = this._comparator; t; ) {
        var r = n(e, t.key);
        if (r === 0)
          return !0;
        r < 0 ? t = t.left : t = t.right;
      }
      return !1;
    }, i.prototype.forEach = function(e, t) {
      for (var n = this._root, r = [], o = !1; !o; )
        n !== null ? (r.push(n), n = n.left) : r.length !== 0 ? (n = r.pop(), e.call(t, n), n = n.right) : o = !0;
      return this;
    }, i.prototype.range = function(e, t, n, r) {
      for (var o = [], l = this._comparator, s = this._root, c; o.length !== 0 || s; )
        if (s)
          o.push(s), s = s.left;
        else {
          if (s = o.pop(), c = l(s.key, t), c > 0)
            break;
          if (l(s.key, e) >= 0 && n.call(r, s))
            return this;
          s = s.right;
        }
      return this;
    }, i.prototype.keys = function() {
      var e = [];
      return this.forEach(function(t) {
        var n = t.key;
        return e.push(n);
      }), e;
    }, i.prototype.values = function() {
      var e = [];
      return this.forEach(function(t) {
        var n = t.data;
        return e.push(n);
      }), e;
    }, i.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, i.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, i.prototype.minNode = function(e) {
      if (e === void 0 && (e = this._root), e)
        for (; e.left; )
          e = e.left;
      return e;
    }, i.prototype.maxNode = function(e) {
      if (e === void 0 && (e = this._root), e)
        for (; e.right; )
          e = e.right;
      return e;
    }, i.prototype.at = function(e) {
      for (var t = this._root, n = !1, r = 0, o = []; !n; )
        if (t)
          o.push(t), t = t.left;
        else if (o.length > 0) {
          if (t = o.pop(), r === e)
            return t;
          r++, t = t.right;
        } else
          n = !0;
      return null;
    }, i.prototype.next = function(e) {
      var t = this._root, n = null;
      if (e.right) {
        for (n = e.right; n.left; )
          n = n.left;
        return n;
      }
      for (var r = this._comparator; t; ) {
        var o = r(e.key, t.key);
        if (o === 0)
          break;
        o < 0 ? (n = t, t = t.left) : t = t.right;
      }
      return n;
    }, i.prototype.prev = function(e) {
      var t = this._root, n = null;
      if (e.left !== null) {
        for (n = e.left; n.right; )
          n = n.right;
        return n;
      }
      for (var r = this._comparator; t; ) {
        var o = r(e.key, t.key);
        if (o === 0)
          break;
        o < 0 ? t = t.left : (n = t, t = t.right);
      }
      return n;
    }, i.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, i.prototype.toList = function() {
      return Tr(this._root);
    }, i.prototype.load = function(e, t, n) {
      t === void 0 && (t = []), n === void 0 && (n = !1);
      var r = e.length, o = this._comparator;
      if (n && Ot(e, t, 0, r - 1, o), this._root === null)
        this._root = Rt(e, t, 0, r), this._size = r;
      else {
        var l = Rr(this.toList(), Pr(e, t), o);
        r = this._size + r, this._root = It({ head: l }, 0, r);
      }
      return this;
    }, i.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(i.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.toString = function(e) {
      e === void 0 && (e = function(n) {
        return String(n.key);
      });
      var t = [];
      return Tt(this._root, "", !0, function(n) {
        return t.push(n);
      }, e), t.join("");
    }, i.prototype.update = function(e, t, n) {
      var r = this._comparator, o = fi(e, this._root, r), l = o.left, s = o.right;
      r(e, t) < 0 ? s = xt(t, n, s, r) : l = xt(t, n, l, r), this._root = Nr(l, s, r);
    }, i.prototype.split = function(e) {
      return fi(e, this._root, this._comparator);
    }, i.prototype[Symbol.iterator] = function() {
      var e, t, n;
      return Cr(this, function(r) {
        switch (r.label) {
          case 0:
            e = this._root, t = [], n = !1, r.label = 1;
          case 1:
            return n ? [3, 6] : e === null ? [3, 2] : (t.push(e), e = e.left, [3, 5]);
          case 2:
            return t.length === 0 ? [3, 4] : (e = t.pop(), [4, e]);
          case 3:
            return r.sent(), e = e.right, [3, 5];
          case 4:
            n = !0, r.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, i;
  }()
);
function Rt(i, e, t, n) {
  var r = n - t;
  if (r > 0) {
    var o = t + Math.floor(r / 2), l = i[o], s = e[o], c = new Le(l, s);
    return c.left = Rt(i, e, t, o), c.right = Rt(i, e, o + 1, n), c;
  }
  return null;
}
function Pr(i, e) {
  for (var t = new Le(null, null), n = t, r = 0; r < i.length; r++)
    n = n.next = new Le(i[r], e[r]);
  return n.next = null, t.next;
}
function Tr(i) {
  for (var e = i, t = [], n = !1, r = new Le(null, null), o = r; !n; )
    e ? (t.push(e), e = e.left) : t.length > 0 ? (e = o = o.next = t.pop(), e = e.right) : n = !0;
  return o.next = null, r.next;
}
function It(i, e, t) {
  var n = t - e;
  if (n > 0) {
    var r = e + Math.floor(n / 2), o = It(i, e, r), l = i.head;
    return l.left = o, i.head = i.head.next, l.right = It(i, r + 1, t), l;
  }
  return null;
}
function Rr(i, e, t) {
  for (var n = new Le(null, null), r = n, o = i, l = e; o !== null && l !== null; )
    t(o.key, l.key) < 0 ? (r.next = o, o = o.next) : (r.next = l, l = l.next), r = r.next;
  return o !== null ? r.next = o : l !== null && (r.next = l), n.next;
}
function Ot(i, e, t, n, r) {
  if (!(t >= n)) {
    for (var o = i[t + n >> 1], l = t - 1, s = n + 1; ; ) {
      do
        l++;
      while (r(i[l], o) < 0);
      do
        s--;
      while (r(i[s], o) > 0);
      if (l >= s)
        break;
      var c = i[l];
      i[l] = i[s], i[s] = c, c = e[l], e[l] = e[s], e[s] = c;
    }
    Ot(i, e, t, s, r), Ot(i, e, s + 1, n, r);
  }
}
const he = 11102230246251565e-32, V = 134217729, Ir = (3 + 8 * he) * he;
function Mt(i, e, t, n, r) {
  let o, l, s, c, u = e[0], d = n[0], a = 0, f = 0;
  d > u == d > -u ? (o = u, u = e[++a]) : (o = d, d = n[++f]);
  let h = 0;
  if (a < i && f < t)
    for (d > u == d > -u ? (l = u + o, s = o - (l - u), u = e[++a]) : (l = d + o, s = o - (l - d), d = n[++f]), o = l, s !== 0 && (r[h++] = s); a < i && f < t; )
      d > u == d > -u ? (l = o + u, c = l - o, s = o - (l - c) + (u - c), u = e[++a]) : (l = o + d, c = l - o, s = o - (l - c) + (d - c), d = n[++f]), o = l, s !== 0 && (r[h++] = s);
  for (; a < i; )
    l = o + u, c = l - o, s = o - (l - c) + (u - c), u = e[++a], o = l, s !== 0 && (r[h++] = s);
  for (; f < t; )
    l = o + d, c = l - o, s = o - (l - c) + (d - c), d = n[++f], o = l, s !== 0 && (r[h++] = s);
  return (o !== 0 || h === 0) && (r[h++] = o), h;
}
function Or(i, e) {
  let t = e[0];
  for (let n = 1; n < i; n++) t += e[n];
  return t;
}
function Ye(i) {
  return new Float64Array(i);
}
const Ar = (3 + 16 * he) * he, Wr = (2 + 12 * he) * he, zr = (9 + 64 * he) * he * he, Ae = Ye(4), di = Ye(8), hi = Ye(12), gi = Ye(16), K = Ye(4);
function Br(i, e, t, n, r, o, l) {
  let s, c, u, d, a, f, h, g, v, w, p, S, L, E, M, k, b, _;
  const C = i - r, I = t - r, Q = e - o, O = n - o;
  E = C * O, f = V * C, h = f - (f - C), g = C - h, f = V * O, v = f - (f - O), w = O - v, M = g * w - (E - h * v - g * v - h * w), k = Q * I, f = V * Q, h = f - (f - Q), g = Q - h, f = V * I, v = f - (f - I), w = I - v, b = g * w - (k - h * v - g * v - h * w), p = M - b, a = M - p, Ae[0] = M - (p + a) + (a - b), S = E + p, a = S - E, L = E - (S - a) + (p - a), p = L - k, a = L - p, Ae[1] = L - (p + a) + (a - k), _ = S + p, a = _ - S, Ae[2] = S - (_ - a) + (p - a), Ae[3] = _;
  let X = Or(4, Ae), x = Wr * l;
  if (X >= x || -X >= x || (a = i - C, s = i - (C + a) + (a - r), a = t - I, u = t - (I + a) + (a - r), a = e - Q, c = e - (Q + a) + (a - o), a = n - O, d = n - (O + a) + (a - o), s === 0 && c === 0 && u === 0 && d === 0) || (x = zr * l + Ir * Math.abs(X), X += C * d + O * s - (Q * u + I * c), X >= x || -X >= x)) return X;
  E = s * O, f = V * s, h = f - (f - s), g = s - h, f = V * O, v = f - (f - O), w = O - v, M = g * w - (E - h * v - g * v - h * w), k = c * I, f = V * c, h = f - (f - c), g = c - h, f = V * I, v = f - (f - I), w = I - v, b = g * w - (k - h * v - g * v - h * w), p = M - b, a = M - p, K[0] = M - (p + a) + (a - b), S = E + p, a = S - E, L = E - (S - a) + (p - a), p = L - k, a = L - p, K[1] = L - (p + a) + (a - k), _ = S + p, a = _ - S, K[2] = S - (_ - a) + (p - a), K[3] = _;
  const W = Mt(4, Ae, 4, K, di);
  E = C * d, f = V * C, h = f - (f - C), g = C - h, f = V * d, v = f - (f - d), w = d - v, M = g * w - (E - h * v - g * v - h * w), k = Q * u, f = V * Q, h = f - (f - Q), g = Q - h, f = V * u, v = f - (f - u), w = u - v, b = g * w - (k - h * v - g * v - h * w), p = M - b, a = M - p, K[0] = M - (p + a) + (a - b), S = E + p, a = S - E, L = E - (S - a) + (p - a), p = L - k, a = L - p, K[1] = L - (p + a) + (a - k), _ = S + p, a = _ - S, K[2] = S - (_ - a) + (p - a), K[3] = _;
  const oe = Mt(W, di, 4, K, hi);
  E = s * d, f = V * s, h = f - (f - s), g = s - h, f = V * d, v = f - (f - d), w = d - v, M = g * w - (E - h * v - g * v - h * w), k = c * u, f = V * c, h = f - (f - c), g = c - h, f = V * u, v = f - (f - u), w = u - v, b = g * w - (k - h * v - g * v - h * w), p = M - b, a = M - p, K[0] = M - (p + a) + (a - b), S = E + p, a = S - E, L = E - (S - a) + (p - a), p = L - k, a = L - p, K[1] = L - (p + a) + (a - k), _ = S + p, a = _ - S, K[2] = S - (_ - a) + (p - a), K[3] = _;
  const de = Mt(oe, hi, 4, K, gi);
  return gi[de - 1];
}
function Dr(i, e, t, n, r, o) {
  const l = (e - o) * (t - r), s = (i - r) * (n - o), c = l - s, u = Math.abs(l + s);
  return Math.abs(c) >= Ar * u ? c : -Br(i, e, t, n, r, o, u);
}
const Ue = (i, e) => i.ll.x <= e.x && e.x <= i.ur.x && i.ll.y <= e.y && e.y <= i.ur.y, At = (i, e) => {
  if (e.ur.x < i.ll.x || i.ur.x < e.ll.x || e.ur.y < i.ll.y || i.ur.y < e.ll.y) return null;
  const t = i.ll.x < e.ll.x ? e.ll.x : i.ll.x, n = i.ur.x < e.ur.x ? i.ur.x : e.ur.x, r = i.ll.y < e.ll.y ? e.ll.y : i.ll.y, o = i.ur.y < e.ur.y ? i.ur.y : e.ur.y;
  return {
    ll: {
      x: t,
      y: r
    },
    ur: {
      x: n,
      y: o
    }
  };
};
let ve = Number.EPSILON;
ve === void 0 && (ve = Math.pow(2, -52));
const Fr = ve * ve, mi = (i, e) => {
  if (-ve < i && i < ve && -ve < e && e < ve)
    return 0;
  const t = i - e;
  return t * t < Fr * i * e ? 0 : i < e ? -1 : 1;
};
class Ur {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new yi(), this.yRounder = new yi();
  }
  round(e, t) {
    return {
      x: this.xRounder.round(e),
      y: this.yRounder.round(t)
    };
  }
}
class yi {
  constructor() {
    this.tree = new Ft(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(e) {
    const t = this.tree.add(e), n = this.tree.prev(t);
    if (n !== null && mi(t.key, n.key) === 0)
      return this.tree.remove(e), n.key;
    const r = this.tree.next(t);
    return r !== null && mi(t.key, r.key) === 0 ? (this.tree.remove(e), r.key) : e;
  }
}
const Ve = new Ur(), st = (i, e) => i.x * e.y - i.y * e.x, Fi = (i, e) => i.x * e.x + i.y * e.y, pi = (i, e, t) => {
  const n = Dr(i.x, i.y, e.x, e.y, t.x, t.y);
  return n > 0 ? -1 : n < 0 ? 1 : 0;
}, lt = (i) => Math.sqrt(Fi(i, i)), Gr = (i, e, t) => {
  const n = {
    x: e.x - i.x,
    y: e.y - i.y
  }, r = {
    x: t.x - i.x,
    y: t.y - i.y
  };
  return st(r, n) / lt(r) / lt(n);
}, jr = (i, e, t) => {
  const n = {
    x: e.x - i.x,
    y: e.y - i.y
  }, r = {
    x: t.x - i.x,
    y: t.y - i.y
  };
  return Fi(r, n) / lt(r) / lt(n);
}, bi = (i, e, t) => e.y === 0 ? null : {
  x: i.x + e.x / e.y * (t - i.y),
  y: t
}, vi = (i, e, t) => e.x === 0 ? null : {
  x: t,
  y: i.y + e.y / e.x * (t - i.x)
}, qr = (i, e, t, n) => {
  if (e.x === 0) return vi(t, n, i.x);
  if (n.x === 0) return vi(i, e, t.x);
  if (e.y === 0) return bi(t, n, i.y);
  if (n.y === 0) return bi(i, e, t.y);
  const r = st(e, n);
  if (r == 0) return null;
  const o = {
    x: t.x - i.x,
    y: t.y - i.y
  }, l = st(o, e) / r, s = st(o, n) / r, c = i.x + s * e.x, u = t.x + l * n.x, d = i.y + s * e.y, a = t.y + l * n.y, f = (c + u) / 2, h = (d + a) / 2;
  return {
    x: f,
    y: h
  };
};
class ne {
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = ne.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : we.compare(e.segment, t.segment));
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
    for (let n = 0, r = t.length; n < r; n++) {
      const o = t[n];
      this.point.events.push(o), o.point = this.point;
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
          const o = this.point.events[r];
          o.consumedBy === void 0 && n.otherSE.point.events === o.otherSE.point.events && n.segment.consume(o.segment);
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
      const o = r.otherSE;
      t.set(r, {
        sine: Gr(this.point, e.point, o.point),
        cosine: jr(this.point, e.point, o.point)
      });
    };
    return (r, o) => {
      t.has(r) || n(r), t.has(o) || n(o);
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
let Zr = 0;
class we {
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
    const n = e.leftSE.point.x, r = t.leftSE.point.x, o = e.rightSE.point.x, l = t.rightSE.point.x;
    if (l < n) return 1;
    if (o < r) return -1;
    const s = e.leftSE.point.y, c = t.leftSE.point.y, u = e.rightSE.point.y, d = t.rightSE.point.y;
    if (n < r) {
      if (c < s && c < u) return 1;
      if (c > s && c > u) return -1;
      const a = e.comparePoint(t.leftSE.point);
      if (a < 0) return 1;
      if (a > 0) return -1;
      const f = t.comparePoint(e.rightSE.point);
      return f !== 0 ? f : -1;
    }
    if (n > r) {
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
      const a = u - s, f = o - n, h = d - c, g = l - r;
      if (a > f && h < g) return 1;
      if (a < f && h > g) return -1;
    }
    return o > l ? 1 : o < l || u < d ? -1 : u > d ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    this.id = ++Zr, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
  }
  static fromRing(e, t, n) {
    let r, o, l;
    const s = ne.comparePoints(e, t);
    if (s < 0)
      r = e, o = t, l = 1;
    else if (s > 0)
      r = t, o = e, l = -1;
    else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
    const c = new ne(r, !0), u = new ne(o, !1);
    return new we(c, u, [n], [l]);
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
    const t = this.leftSE.point, n = this.rightSE.point, r = this.vector();
    if (t.x === n.x)
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
    const t = this.bbox(), n = e.bbox(), r = At(t, n);
    if (r === null) return null;
    const o = this.leftSE.point, l = this.rightSE.point, s = e.leftSE.point, c = e.rightSE.point, u = Ue(t, s) && this.comparePoint(s) === 0, d = Ue(n, o) && e.comparePoint(o) === 0, a = Ue(t, c) && this.comparePoint(c) === 0, f = Ue(n, l) && e.comparePoint(l) === 0;
    if (d && u)
      return f && !a ? l : !f && a ? c : null;
    if (d)
      return a && o.x === c.x && o.y === c.y ? null : o;
    if (u)
      return f && l.x === s.x && l.y === s.y ? null : s;
    if (f && a) return null;
    if (f) return l;
    if (a) return c;
    const h = qr(o, this.vector(), s, e.vector());
    return h === null || !Ue(r, h) ? null : Ve.round(h.x, h.y);
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
    const t = [], n = e.events !== void 0, r = new ne(e, !0), o = new ne(e, !1), l = this.rightSE;
    this.replaceRightSE(o), t.push(o), t.push(r);
    const s = new we(r, l, this.rings.slice(), this.windings.slice());
    return ne.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(), ne.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), o.checkForConsuming()), t;
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
    const r = we.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const o = t;
        t = n, n = o;
      }
      if (t.prev === n) {
        const o = t;
        t = n, n = o;
      }
      for (let o = 0, l = n.rings.length; o < l; o++) {
        const s = n.rings[o], c = n.windings[o], u = t.rings.indexOf(s);
        u === -1 ? (t.rings.push(s), t.windings.push(c)) : t.windings[u] += c;
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
    const t = this._afterState.rings, n = this._afterState.windings, r = this._afterState.multiPolys;
    for (let s = 0, c = this.rings.length; s < c; s++) {
      const u = this.rings[s], d = this.windings[s], a = t.indexOf(u);
      a === -1 ? (t.push(u), n.push(d)) : n[a] += d;
    }
    const o = [], l = [];
    for (let s = 0, c = t.length; s < c; s++) {
      if (n[s] === 0) continue;
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
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === le.numMultiPolys && n < r;
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
      default:
        throw new Error(`Unrecognized operation type found ${le.type}`);
    }
    return this._isInResult;
  }
}
class wi {
  constructor(e, t, n) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = t, this.isExterior = n, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number")
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
      c.x === o.x && c.y === o.y || (this.segments.push(we.fromRing(o, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), o = c);
    }
    (r.x !== o.x || r.y !== o.y) && this.segments.push(we.fromRing(o, r, this));
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, n = this.segments.length; t < n; t++) {
      const r = this.segments[t];
      e.push(r.leftSE), e.push(r.rightSE);
    }
    return e;
  }
}
class Qr {
  constructor(e, t) {
    if (!Array.isArray(e))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new wi(e[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let n = 1, r = e.length; n < r; n++) {
      const o = new wi(e[n], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = t;
  }
  getSweepEvents() {
    const e = this.exteriorRing.getSweepEvents();
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getSweepEvents();
      for (let o = 0, l = r.length; o < l; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class _i {
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
    for (let n = 0, r = e.length; n < r; n++) {
      const o = new Qr(e[n], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = t;
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, n = this.polys.length; t < n; t++) {
      const r = this.polys[t].getSweepEvents();
      for (let o = 0, l = r.length; o < l; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class ut {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n];
      if (!o.isInResult() || o.ringOut) continue;
      let l = null, s = o.leftSE, c = o.rightSE;
      const u = [s], d = s.point, a = [];
      for (; l = s, s = c, u.push(s), s.point !== d; )
        for (; ; ) {
          const f = s.getAvailableLinkedEvents();
          if (f.length === 0) {
            const v = u[0].point, w = u[u.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${v.x}, ${v.y}]. Last matching segment found ends at [${w.x}, ${w.y}].`);
          }
          if (f.length === 1) {
            c = f[0].otherSE;
            break;
          }
          let h = null;
          for (let v = 0, w = a.length; v < w; v++)
            if (a[v].point === s.point) {
              h = v;
              break;
            }
          if (h !== null) {
            const v = a.splice(h)[0], w = u.splice(v.index);
            w.unshift(w[0].otherSE), t.push(new ut(w.reverse()));
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
      t.push(new ut(u));
    }
    return t;
  }
  constructor(e) {
    this.events = e;
    for (let t = 0, n = e.length; t < n; t++)
      e[t].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let u = 1, d = this.events.length - 1; u < d; u++) {
      const a = this.events[u].point, f = this.events[u + 1].point;
      pi(a, e, f) !== 0 && (t.push(a), e = a);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    pi(n, e, r) === 0 && t.shift(), t.push(t[0]);
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
      ne.compare(e, l) > 0 && (e = l);
    }
    let t = e.segment.prevInResult(), n = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!n) return t.ringOut;
      if (n.ringOut !== t.ringOut)
        return n.ringOut.enclosingRing() !== t.ringOut ? t.ringOut : t.ringOut.enclosingRing();
      t = n.prevInResult(), n = t ? t.prevInResult() : null;
    }
  }
}
class Ei {
  constructor(e) {
    this.exteriorRing = e, e.poly = this, this.interiorRings = [];
  }
  addInterior(e) {
    this.interiorRings.push(e), e.poly = this;
  }
  getGeom() {
    const e = [this.exteriorRing.getGeom()];
    if (e[0] === null) return null;
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}
class Hr {
  constructor(e) {
    this.rings = e, this.polys = this._composePolys(e);
  }
  getGeom() {
    const e = [];
    for (let t = 0, n = this.polys.length; t < n; t++) {
      const r = this.polys[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
  _composePolys(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n];
      if (!o.poly)
        if (o.isExteriorRing()) t.push(new Ei(o));
        else {
          const l = o.enclosingRing();
          l.poly || t.push(new Ei(l)), l.poly.addInterior(o);
        }
    }
    return t;
  }
}
class Vr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we.compare;
    this.queue = e, this.tree = new Ft(t), this.segments = [];
  }
  process(e) {
    const t = e.segment, n = [];
    if (e.consumedBy)
      return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(t), n;
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
            n.push(f[h]);
        }
      }
      let d = null;
      if (c) {
        const a = c.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (d = a), !c.isAnEndpoint(a))) {
          const f = this._splitSafely(c, a);
          for (let h = 0, g = f.length; h < g; h++)
            n.push(f[h]);
        }
      }
      if (u !== null || d !== null) {
        let a = null;
        u === null ? a = d : d === null ? a = u : a = ne.comparePoints(u, d) <= 0 ? u : d, this.queue.remove(t.rightSE), n.push(t.rightSE);
        const f = t.split(a);
        for (let h = 0, g = f.length; h < g; h++)
          n.push(f[h]);
      }
      n.length > 0 ? (this.tree.remove(t), n.push(e)) : (this.segments.push(t), t.prev = s);
    } else {
      if (s && c) {
        const u = s.getIntersection(c);
        if (u !== null) {
          if (!s.isAnEndpoint(u)) {
            const d = this._splitSafely(s, u);
            for (let a = 0, f = d.length; a < f; a++)
              n.push(d[a]);
          }
          if (!c.isAnEndpoint(u)) {
            const d = this._splitSafely(c, u);
            for (let a = 0, f = d.length; a < f; a++)
              n.push(d[a]);
          }
        }
      }
      this.tree.remove(t);
    }
    return n;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(e, t) {
    this.tree.remove(e);
    const n = e.rightSE;
    this.queue.remove(n);
    const r = e.split(t);
    return r.push(n), e.consumedBy === void 0 && this.tree.add(e), r;
  }
}
const Li = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Yr = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Xr {
  run(e, t, n) {
    le.type = e, Ve.reset();
    const r = [new _i(t, !0)];
    for (let a = 0, f = n.length; a < f; a++)
      r.push(new _i(n[a], !1));
    if (le.numMultiPolys = r.length, le.type === "difference") {
      const a = r[0];
      let f = 1;
      for (; f < r.length; )
        At(r[f].bbox, a.bbox) !== null ? f++ : r.splice(f, 1);
    }
    if (le.type === "intersection")
      for (let a = 0, f = r.length; a < f; a++) {
        const h = r[a];
        for (let g = a + 1, v = r.length; g < v; g++)
          if (At(h.bbox, r[g].bbox) === null) return [];
      }
    const o = new Ft(ne.compare);
    for (let a = 0, f = r.length; a < f; a++) {
      const h = r[a].getSweepEvents();
      for (let g = 0, v = h.length; g < v; g++)
        if (o.insert(h[g]), o.size > Li)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const l = new Vr(o);
    let s = o.size, c = o.pop();
    for (; c; ) {
      const a = c.key;
      if (o.size === s) {
        const h = a.segment;
        throw new Error(`Unable to pop() ${a.isLeft ? "left" : "right"} SweepEvent [${a.point.x}, ${a.point.y}] from segment #${h.id} [${h.leftSE.point.x}, ${h.leftSE.point.y}] -> [${h.rightSE.point.x}, ${h.rightSE.point.y}] from queue.`);
      }
      if (o.size > Li)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (l.segments.length > Yr)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const f = l.process(a);
      for (let h = 0, g = f.length; h < g; h++) {
        const v = f[h];
        v.consumedBy === void 0 && o.insert(v);
      }
      s = o.size, c = o.pop();
    }
    Ve.reset();
    const u = ut.factory(l.segments);
    return new Hr(u).getGeom();
  }
}
const le = new Xr(), Kr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("union", i, t);
}, Jr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("intersection", i, t);
}, $r = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("xor", i, t);
}, eo = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("difference", i, t);
};
var Ui = {
  union: Kr,
  intersection: Jr,
  xor: $r,
  difference: eo
};
function to(i, e = {}) {
  const t = [];
  if (Bt(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Ui.union(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? zt(n[0], e.properties) : Ai(n, e.properties);
}
var Gi = to;
function io(i) {
  const e = [];
  if (Bt(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = Ui.difference(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? zt(n[0], t) : Ai(n, t);
}
var no = io;
function ro(i) {
  if (!i)
    throw new Error("geojson is required");
  var e = [];
  return Er(i, function(t) {
    e.push(t);
  }), He(e);
}
var oo = ro;
function Si(i, e) {
  const t = no(
    He([
      zt([
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
  const n = Ze(Pt(i)), r = (n[2] - n[0]) / 360 / 1e3, o = n[0] < -180, l = n[2] > 180, s = oo(i);
  if (s.features.length > 1 && (o || l))
    for (const c of s.features) {
      const u = Ze(Pt(c));
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
    He([
      s.features.length < 2 ? i : Gi(s) ?? i,
      t
    ])
  );
}
const xi = (i) => {
  var n, r, o;
  const e = (n = i == null ? void 0 : i.geometry) == null ? void 0 : n.type, t = (r = i == null ? void 0 : i.properties) != null && r.isMask ? 0 : e === "LineString" || e === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (o = i == null ? void 0 : i.properties) != null && o.isMask ? 0.1 : 0,
    weight: t,
    dashArray: [t, t],
    lineCap: "butt"
  };
};
function so(i, e = !0, t = !0, n = {}, r = {}, o = xi) {
  let l;
  const s = [];
  let c, u;
  const d = se.geoJSON(void 0, {
    style: o === !0 ? xi : o === !1 ? void 0 : o ?? void 0,
    interactive: !1
  }).addTo(i), a = (h) => {
    l == null || l({
      type: "mapClick",
      coordinates: [h.latlng.lng, h.latlng.lat]
    });
  };
  function f(h, g = !1) {
    const v = document.createElement("div");
    return new Kn({ props: { displayIn: "leaflet" }, target: v }), new se.Marker(h, {
      interactive: g,
      icon: new se.DivIcon({
        html: v,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(h) {
      h ? (l = h, i.on("click", a)) : (l = void 0, i.off("click", a));
    },
    flyTo(h, g) {
      i.flyTo([h[1], h[0]], g, { duration: 2, ...n });
    },
    fitBounds(h, g, v) {
      i.flyToBounds(
        [
          [h[1], h[0]],
          [h[3], h[2]]
        ],
        {
          padding: [g, g],
          duration: 2,
          ...v ? { maxZoom: v } : {},
          ...r
        }
      );
    },
    indicateReverse(h) {
      i.getContainer().style.cursor = h ? "crosshair" : "";
    },
    setReverseMarker(h) {
      var v;
      if (!e)
        return;
      const g = h && [h[1], h[0]];
      u ? g ? u.setLatLng(g) : (u.remove(), u = void 0) : g && (e instanceof Function ? u = e(i) ?? void 0 : (u = (typeof e == "object" ? new se.Marker(g, e) : f(g)).addTo(i), (v = u.getElement()) == null || v.classList.add("marker-reverse")));
    },
    setFeatures(h, g, v) {
      function w(p) {
        d.clearLayers(), p && d.addData(p);
      }
      for (const p of s)
        p.remove();
      if (s.length = 0, w(), g) {
        let p = !1;
        if (g.geometry.type === "GeometryCollection") {
          const S = g.geometry.geometries.filter(
            (L) => L.type === "Polygon" || L.type === "MultiPolygon"
          );
          e: if (S.length > 0) {
            const L = Gi(
              He(S.map((E) => Qe(E)))
            );
            if (!L)
              break e;
            Si(
              {
                ...g,
                geometry: L.geometry
              },
              w
            ), p = !0;
          } else {
            const L = g.geometry.geometries.filter(
              (E) => E.type === "LineString" || E.type === "MultiLineString"
            );
            L.length > 0 && (w({
              ...g,
              geometry: { type: "GeometryCollection", geometries: L }
            }), p = !0);
          }
        }
        if (!p) {
          if (g.geometry.type === "Polygon" || g.geometry.type === "MultiPolygon")
            Si(g, (S) => {
              if (!S)
                return;
              const L = [...S.features], E = Ze(Pt(g)), M = E[2] - E[0];
              E[0] - M / 4 < -180 && L.push(...Mi(S, -360).features), E[2] + M / 4 > 180 && L.push(...Mi(S, 360).features), w(He(L));
            });
          else if (g.geometry.type === "LineString" || g.geometry.type === "MultiLineString") {
            w(g);
            return;
          }
        }
        if (!v && g.geometry.type !== "Point")
          return;
        if (e instanceof Function) {
          const S = e(i, g);
          S && s.push(S.addTo(i));
        } else if (e) {
          const S = [g.center[1], g.center[0]];
          s.push(
            typeof e == "object" ? new se.Marker(S, e) : f(S).addTo(i)
          );
        }
      }
      if (t)
        for (const p of h ?? []) {
          if (p === g)
            continue;
          const S = [
            p.center[1],
            p.center[0]
          ];
          let L;
          if (t instanceof Function) {
            if (L = t(i, p), !L)
              continue;
          } else
            L = (typeof t == "object" ? new se.Marker(S, t) : f(S, !0)).addTo(i).bindTooltip(
              p.place_type[0] === "reverse" ? p.place_name : p.place_name.replace(/,.*/, ""),
              {
                direction: "top"
              }
            );
          const E = L.getElement();
          E && (E.addEventListener("click", (M) => {
            M.stopPropagation(), l == null || l({ type: "markerClick", id: p.id });
          }), E.addEventListener("mouseenter", () => {
            l == null || l({ type: "markerMouseEnter", id: p.id });
          }), E.addEventListener("mouseleave", () => {
            l == null || l({ type: "markerMouseLeave", id: p.id });
          }), E.classList.toggle("marker-fuzzy", !!p.matching_text)), s.push(L);
        }
    },
    setSelectedMarker(h) {
      var g, v;
      c && ((g = c.getElement()) == null || g.classList.toggle("marker-selected", !1)), c = h > -1 ? s[h] : void 0, (v = c == null ? void 0 : c.getElement()) == null || v.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const h = i.getCenter();
      return [i.getZoom(), h.lng, h.lat];
    }
  };
}
function Mi(i, e) {
  const t = Mr(i);
  for (const n of t.features)
    if (n.geometry.type == "MultiPolygon")
      for (const r of n.geometry.coordinates)
        Ci(r, e);
    else
      Ci(n.geometry.coordinates, e);
  return t;
}
function Ci(i, e) {
  for (const t of i)
    for (const n of t)
      n[0] += e;
}
class ji extends se.Control {
}
se.Util.extend(ji.prototype, se.Evented.prototype);
var ie, Pe;
class lo extends ji {
  constructor(t) {
    super(t);
    Et(this, ie);
    Et(this, Pe);
    Lt(this, Pe, t);
  }
  onAdd(t) {
    const n = document.createElement("div");
    n.className = "leaflet-ctrl-geocoder", se.DomEvent.disableClickPropagation(n), se.DomEvent.disableScrollPropagation(n);
    const {
      marker: r,
      showResultMarkers: o,
      flyTo: l,
      fullGeometryStyle: s,
      position: c,
      ...u
    } = te(this, Pe), d = typeof l == "boolean" ? {} : l, a = so(
      t,
      r,
      o,
      d,
      d,
      s
    );
    Lt(this, ie, new _r({
      target: n,
      props: {
        mapController: a,
        flyTo: l === void 0 ? !0 : !!l,
        ...u
      }
    }));
    const f = {
      select: void 0,
      pick: void 0,
      featureslisted: void 0,
      featuresmarked: void 0,
      response: void 0,
      optionsvisibilitychange: void 0,
      reversetoggle: void 0,
      querychange: void 0
    };
    for (const h in f)
      te(this, ie).$on(h, (g) => this.fire(h, g.detail));
    return n;
  }
  setOptions(t) {
    var c;
    Object.assign(te(this, Pe), t);
    const {
      marker: n,
      showResultMarkers: r,
      flyTo: o,
      fullGeometryStyle: l,
      ...s
    } = te(this, Pe);
    (c = te(this, ie)) == null || c.$set(s);
  }
  setQuery(t, n = !0) {
    var r;
    (r = te(this, ie)) == null || r.setQuery(t, n);
  }
  clearMap() {
    var t;
    (t = te(this, ie)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = te(this, ie)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = te(this, ie)) == null || t.focus();
  }
  blur() {
    var t;
    (t = te(this, ie)) == null || t.blur();
  }
  onRemove() {
    var t;
    (t = te(this, ie)) == null || t.$destroy();
  }
}
ie = new WeakMap(), Pe = new WeakMap();
function uo(...i) {
  return new lo(...i);
}
window.L && typeof window.L == "object" && typeof window.L.control == "function" && (window.L.control.maptilerGeocoding = uo);
export {
  lo as GeocodingControl,
  so as createLeafletMapController
};
//# sourceMappingURL=leaflet.js.map
