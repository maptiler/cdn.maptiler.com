var ln = Object.defineProperty;
var Gt = (i) => {
  throw TypeError(i);
};
var un = (i, e, t) => e in i ? ln(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var ee = (i, e, t) => un(i, typeof e != "symbol" ? e + "" : e, t), jt = (i, e, t) => e.has(i) || Gt("Cannot " + t);
var Z = (i, e, t) => (jt(i, e, "read from private field"), t ? t.call(i) : e.get(i)), wt = (i, e, t) => e.has(i) ? Gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), _t = (i, e, t, n) => (jt(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as qt from "@maptiler/sdk";
function z() {
}
function an(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Ci(i) {
  return i();
}
function Qt() {
  return /* @__PURE__ */ Object.create(null);
}
function me(i) {
  i.forEach(Ci);
}
function ki(i) {
  return typeof i == "function";
}
function Le(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let et;
function K(i, e) {
  return i === e ? !0 : (et || (et = document.createElement("a")), et.href = e, i === et.href);
}
function cn(i) {
  return Object.keys(i).length === 0;
}
function fn(i, e, t, n) {
  if (i) {
    const r = Ni(i, e, t, n);
    return i[0](r);
  }
}
function Ni(i, e, t, n) {
  return i[1] && n ? an(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function dn(i, e, t, n) {
  if (i[2] && n) {
    const r = i[2](n(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], u = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < u; o += 1)
        s[o] = e.dirty[o] | r[o];
      return s;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function hn(i, e, t, n, r, s) {
  if (r) {
    const u = Ni(e, t, n, s);
    i.p(u, r);
  }
}
function gn(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Zt(i) {
  return i ?? "";
}
function P(i, e) {
  i.appendChild(e);
}
function U(i, e, t) {
  i.insertBefore(e, t || null);
}
function B(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function A(i) {
  return document.createElement(i);
}
function le(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Ee(i) {
  return document.createTextNode(i);
}
function ie() {
  return Ee(" ");
}
function mn() {
  return Ee("");
}
function $(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function yn(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function b(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function vn(i) {
  return Array.from(i.childNodes);
}
function Ge(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Ht(i, e) {
  i.value = e ?? "";
}
function re(i, e, t) {
  i.classList.toggle(e, !!t);
}
function pn(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let je;
function Fe(i) {
  je = i;
}
function Ri() {
  if (!je) throw new Error("Function called outside component initialization");
  return je;
}
function bn(i) {
  Ri().$$.on_destroy.push(i);
}
function En() {
  const i = Ri();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const s = pn(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((u) => {
        u.call(i, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Vt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Ae = [], Mt = [];
let We = [];
const Yt = [], wn = /* @__PURE__ */ Promise.resolve();
let Ct = !1;
function _n() {
  Ct || (Ct = !0, wn.then(Ti));
}
function kt(i) {
  We.push(i);
}
const Lt = /* @__PURE__ */ new Set();
let Ie = 0;
function Ti() {
  if (Ie !== 0)
    return;
  const i = je;
  do {
    try {
      for (; Ie < Ae.length; ) {
        const e = Ae[Ie];
        Ie++, Fe(e), Ln(e.$$);
      }
    } catch (e) {
      throw Ae.length = 0, Ie = 0, e;
    }
    for (Fe(null), Ae.length = 0, Ie = 0; Mt.length; ) Mt.pop()();
    for (let e = 0; e < We.length; e += 1) {
      const t = We[e];
      Lt.has(t) || (Lt.add(t), t());
    }
    We.length = 0;
  } while (Ae.length);
  for (; Yt.length; )
    Yt.pop()();
  Ct = !1, Lt.clear(), Fe(i);
}
function Ln(i) {
  if (i.fragment !== null) {
    i.update(), me(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(kt);
  }
}
function Sn(i) {
  const e = [], t = [];
  We.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), We = e;
}
const it = /* @__PURE__ */ new Set();
let Ne;
function nt() {
  Ne = {
    r: 0,
    c: [],
    p: Ne
    // parent group
  };
}
function rt() {
  Ne.r || me(Ne.c), Ne = Ne.p;
}
function j(i, e) {
  i && i.i && (it.delete(i), i.i(e));
}
function V(i, e, t, n) {
  if (i && i.o) {
    if (it.has(i)) return;
    it.add(i), Ne.c.push(() => {
      it.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Kt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function xn(i, e) {
  V(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Mn(i, e, t, n, r, s, u, o, c, l, d, a) {
  let f = i.length, g = s.length, v = f;
  const _ = {};
  for (; v--; ) _[i[v].key] = v;
  const h = [], y = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), E = [];
  for (v = g; v--; ) {
    const w = a(r, s, v), L = t(w);
    let k = u.get(L);
    k ? E.push(() => k.p(w, e)) : (k = l(L, w), k.c()), y.set(L, h[v] = k), L in _ && p.set(L, Math.abs(v - _[L]));
  }
  const S = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function C(w) {
    j(w, 1), w.m(o, d), u.set(w.key, w), d = w.first, g--;
  }
  for (; f && g; ) {
    const w = h[g - 1], L = i[f - 1], k = w.key, O = L.key;
    w === L ? (d = w.first, f--, g--) : y.has(O) ? !u.has(k) || S.has(k) ? C(w) : M.has(O) ? f-- : p.get(k) > p.get(O) ? (M.add(k), C(w)) : (S.add(O), f--) : (c(L, u), f--);
  }
  for (; f--; ) {
    const w = i[f];
    y.has(w.key) || c(w, u);
  }
  for (; g; ) C(h[g - 1]);
  return me(E), h;
}
function we(i) {
  i && i.c();
}
function he(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), kt(() => {
    const s = i.$$.on_mount.map(Ci).filter(ki);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : me(s), i.$$.on_mount = [];
  }), r.forEach(kt);
}
function ge(i, e) {
  const t = i.$$;
  t.fragment !== null && (Sn(t.after_update), me(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Cn(i, e) {
  i.$$.dirty[0] === -1 && (Ae.push(i), _n(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Se(i, e, t, n, r, s, u = null, o = [-1]) {
  const c = je;
  Fe(i);
  const l = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: z,
    not_equal: r,
    bound: Qt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Qt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  u && u(l.root);
  let d = !1;
  if (l.ctx = t ? t(i, e.props || {}, (a, f, ...g) => {
    const v = g.length ? g[0] : f;
    return l.ctx && r(l.ctx[a], l.ctx[a] = v) && (!l.skip_bound && l.bound[a] && l.bound[a](v), d && Cn(i, a)), f;
  }) : [], l.update(), d = !0, me(l.before_update), l.fragment = n ? n(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = vn(e.target);
      l.fragment && l.fragment.l(a), a.forEach(B);
    } else
      l.fragment && l.fragment.c();
    e.intro && j(i.$$.fragment), he(i, e.target, e.anchor), Ti();
  }
  Fe(c);
}
class xe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ee(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ee(this, "$$set");
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
    if (!ki(t))
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
    this.$$set && !cn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const kn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(kn);
function Nn(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), b(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), b(e, "viewBox", "0 0 14 14"), b(e, "width", "13"), b(e, "height", "13"), b(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      U(n, e, r), P(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(e);
    }
  };
}
class Pi extends xe {
  constructor(e) {
    super(), Se(this, e, null, Nn, Le, {});
  }
}
function Rn(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), b(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), b(e, "viewBox", "0 0 30 30"), b(e, "fill", "none"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      U(n, e, r), P(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(e);
    }
  };
}
class Ii extends xe {
  constructor(e) {
    super(), Se(this, e, null, Rn, Le, {});
  }
}
function Tn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
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
function Pn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
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
function In(i) {
  let e, t;
  return {
    c() {
      e = A("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
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
function On(i) {
  let e, t;
  return {
    c() {
      e = A("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
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
function An(i) {
  let e, t;
  return {
    c() {
      e = A("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
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
function Wn(i) {
  let e, t;
  return {
    c() {
      e = A("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
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
      e = A("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || b(e, "src", t), b(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && b(e, "src", t), r & /*placeType*/
      64 && b(
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
  let e, t, n, r;
  return {
    c() {
      e = A("img"), K(e.src, t = /*imageUrl*/
      i[5]) || b(e, "src", t), b(
        e,
        "alt",
        /*category*/
        i[4]
      ), b(e, "class", "svelte-ltkwvy");
    },
    m(s, u) {
      U(s, e, u), n || (r = $(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(s, u) {
      u & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      s[5]) && b(e, "src", t), u & /*category*/
      16 && b(
        e,
        "alt",
        /*category*/
        s[4]
      );
    },
    d(s) {
      s && B(e), n = !1, r();
    }
  };
}
function Xt(i) {
  let e, t;
  return {
    c() {
      e = A("span"), t = Ee(
        /*placeType*/
        i[6]
      ), b(e, "class", "secondary svelte-ltkwvy");
    },
    m(n, r) {
      U(n, e, r), P(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && Ge(
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
function Dn(i) {
  let e, t, n, r, s, u, o, c, l, d = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), a, f, g = (
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
  ), v, _, h = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), y, p, E;
  function S(L, k) {
    return k & /*feature*/
    1 && (t = null), k & /*feature*/
    1 && (n = null), k & /*feature*/
    1 && (r = null), k & /*feature*/
    1 && (s = null), /*imageUrl*/
    L[5] ? Bn : (
      /*feature*/
      L[0].address ? zn : (t == null && (t = !!/*feature*/
      L[0].id.startsWith("road.")), t ? Wn : (n == null && (n = !!/*feature*/
      L[0].id.startsWith("address.")), n ? An : (r == null && (r = !!/*feature*/
      L[0].id.startsWith("postal_code.")), r ? On : (s == null && (s = !!/*feature*/
      L[0].id.startsWith("poi.")), s ? In : (
        /*isReverse*/
        L[7] ? Pn : Tn
      )))))
    );
  }
  let M = S(i, -1), C = M(i), w = g && Xt(i);
  return {
    c() {
      e = A("li"), C.c(), u = ie(), o = A("span"), c = A("span"), l = A("span"), a = Ee(d), f = ie(), w && w.c(), v = ie(), _ = A("span"), y = Ee(h), b(l, "class", "primary svelte-ltkwvy"), b(c, "class", "svelte-ltkwvy"), b(_, "class", "line2 svelte-ltkwvy"), b(o, "class", "texts svelte-ltkwvy"), b(e, "tabindex", "0"), b(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), b(e, "class", "svelte-ltkwvy"), re(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(L, k) {
      U(L, e, k), C.m(e, null), P(e, u), P(e, o), P(o, c), P(c, l), P(l, a), P(c, f), w && w.m(c, null), P(o, v), P(o, _), P(_, y), p || (E = [
        $(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        $(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], p = !0);
    },
    p(L, [k]) {
      M === (M = S(L, k)) && C ? C.p(L, k) : (C.d(1), C = M(L), C && (C.c(), C.m(e, u))), k & /*feature*/
      1 && d !== (d = /*isReverse*/
      (L[7] ? (
        /*feature*/
        L[0].place_name
      ) : (
        /*feature*/
        L[0].place_name.replace(/,.*/, "")
      )) + "") && Ge(a, d), k & /*showPlaceType, feature, imageUrl*/
      37 && (g = /*showPlaceType*/
      L[2] === "always" || /*showPlaceType*/
      L[2] !== "never" && !/*feature*/
      L[0].address && !/*feature*/
      L[0].id.startsWith("road.") && !/*feature*/
      L[0].id.startsWith("address.") && !/*feature*/
      L[0].id.startsWith("postal_code.") && (!/*feature*/
      L[0].id.startsWith("poi.") || !/*imageUrl*/
      L[5]) && !/*isReverse*/
      L[7]), g ? w ? w.p(L, k) : (w = Xt(L), w.c(), w.m(c, null)) : w && (w.d(1), w = null), k & /*feature*/
      1 && h !== (h = /*isReverse*/
      (L[7] ? "" : (
        /*feature*/
        L[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ge(y, h), k & /*selected*/
      2 && b(
        e,
        "data-selected",
        /*selected*/
        L[1]
      ), k & /*selected*/
      2 && re(
        e,
        "selected",
        /*selected*/
        L[1]
      );
    },
    i: z,
    o: z,
    d(L) {
      L && B(e), C.d(), w && w.d(), p = !1, me(E);
    }
  };
}
function Un(i, e, t) {
  var E;
  let n, r, { feature: s } = e, { selected: u = !1 } = e, { showPlaceType: o } = e, { missingIconsCache: c } = e, { iconsBaseUrl: l } = e;
  const d = (E = s.properties) == null ? void 0 : E.categories;
  let a, f, g = 0, v = s.place_type[0] === "reverse";
  function _() {
    f && c.add(f), t(10, g++, g);
  }
  function h(S) {
    Vt.call(this, i, S);
  }
  function y(S) {
    Vt.call(this, i, S);
  }
  const p = () => _();
  return i.$$set = (S) => {
    "feature" in S && t(0, s = S.feature), "selected" in S && t(1, u = S.selected), "showPlaceType" in S && t(2, o = S.showPlaceType), "missingIconsCache" in S && t(9, c = S.missingIconsCache), "iconsBaseUrl" in S && t(3, l = S.iconsBaseUrl);
  }, i.$$.update = () => {
    var S, M, C, w;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, n--, n), t(4, a = d == null ? void 0 : d[n]), t(5, f = a ? l + a.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!f || c.has(f)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((M = (S = s.properties) == null ? void 0 : S.categories) == null ? void 0 : M.join(", ")) ?? ((w = (C = s.properties) == null ? void 0 : C.place_type_name) == null ? void 0 : w[0]) ?? s.place_type[0]);
  }, t(11, n = (d == null ? void 0 : d.length) ?? 0), [
    s,
    u,
    o,
    l,
    a,
    f,
    r,
    v,
    _,
    c,
    g,
    n,
    h,
    y,
    p
  ];
}
class Fn extends xe {
  constructor(e) {
    super(), Se(this, e, Un, Dn, Le, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Gn(i) {
  let e;
  return {
    c() {
      e = A("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', b(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      U(t, e, n);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && B(e);
    }
  };
}
class jn extends xe {
  constructor(e) {
    super(), Se(this, e, null, Gn, Le, {});
  }
}
function qn(i) {
  let e, t, n;
  return {
    c() {
      e = le("svg"), t = le("path"), b(t, "stroke-width", "4"), b(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), b(t, "class", "svelte-gzo3ar"), b(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), b(e, "viewBox", "0 0 70 85"), b(e, "fill", "none"), b(e, "class", "svelte-gzo3ar"), re(
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
    m(r, s) {
      U(r, e, s), P(e, t);
    },
    p(r, [s]) {
      s & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && b(e, "width", n), s & /*displayIn*/
      1 && re(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), s & /*displayIn*/
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
function Qn(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class Zn extends xe {
  constructor(e) {
    super(), Se(this, e, Qn, qn, Le, { displayIn: 0 });
  }
}
function Hn(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), b(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), b(e, "viewBox", "0 0 60.006 21.412"), b(e, "width", "14"), b(e, "height", "20"), b(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      U(n, e, r), P(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(e);
    }
  };
}
class Vn extends xe {
  constructor(e) {
    super(), Se(this, e, null, Hn, Le, {});
  }
}
function Yn(i) {
  let e, t, n;
  return {
    c() {
      e = le("svg"), t = le("circle"), n = le("path"), b(t, "cx", "4.789"), b(t, "cy", "4.787"), b(t, "r", "3.85"), b(t, "class", "svelte-1aq105l"), b(n, "d", "M12.063 12.063 7.635 7.635"), b(n, "class", "svelte-1aq105l"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "width", "13"), b(e, "height", "13"), b(e, "viewBox", "0 0 13 13"), b(e, "class", "svelte-1aq105l");
    },
    m(r, s) {
      U(r, e, s), P(e, t), P(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && B(e);
    }
  };
}
class Kn extends xe {
  constructor(e) {
    super(), Se(this, e, null, Yn, Le, {});
  }
}
function Xn(i, e, t) {
  const n = e[1], r = e[0], s = n - r;
  return i === n && t ? i : ((i - r) % s + s) % s + r;
}
function ot(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Be;
async function Jn(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Be && r.cachedLocationExpiry && Be.time + r.cachedLocationExpiry > Date.now()) {
          if (!Be.coords)
            break e;
          return Be.coords;
        }
        let s;
        try {
          return s = await new Promise((u, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (c) => {
                u(
                  [c.coords.longitude, c.coords.latitude].map((l) => l.toFixed(6)).join(",")
                );
              },
              (c) => {
                o(c);
              },
              r
            );
          }), s;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Be = {
            time: Date.now(),
            coords: s
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
const $n = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Jt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, $t = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, ei = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, ti = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, ii = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function er(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((g) => Number(g.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), s = Math.abs(n), u = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let c;
    i == "DD" && (c = `${r}° ${u}, ${s}° ${o}`);
    const l = Math.floor(r), d = Math.floor(s), a = (r - l) * 60, f = (s - d) * 60;
    if (i == "DM") {
      let g = ni(a, 3).toFixed(3).padStart(6, "0"), v = ni(f, 3).toFixed(3).padStart(6, "0");
      g.endsWith(".000") && v.endsWith(".000") && (g = g.replace(/\.000$/, ""), v = v.replace(/\.000$/, "")), c = `${l}° ${g}' ${u}, ${d}° ${v}' ${o}`;
    }
    if (i == "DMS") {
      const g = Math.floor(a), v = Math.floor(f);
      let _ = ((a - g) * 60).toFixed(1).padStart(4, "0"), h = ((f - v) * 60).toFixed(1).padStart(4, "0");
      const y = g.toString().padStart(2, "0"), p = v.toString().padStart(2, "0");
      _.endsWith(".0") && h.endsWith(".0") && (_ = _.replace(/\.0$/, ""), h = h.replace(/\.0$/, "")), c = `${l}° ${y}' ${_}" ${u}, ${d}° ${p}' ${h}" ${o}`;
    }
    return c;
  } else
    throw new Error("no decimal coordinates to convert");
}
function ni(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function Ot(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", s = "", u = null, o = [], c = !1;
  if ($n.test(i))
    throw new Error("invalid coordinate value");
  if (Jt.test(i))
    if (o = Jt.exec(i), c = De(o), c)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), u = "DM";
    else
      throw new Error("invalid coordinate format");
  else if ($t.test(i))
    if (o = $t.exec(i), c = De(o), c) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), u = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], s = o[5]) : o[4] && (r = o[4], s = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ei.test(i))
    if (o = ei.exec(i), c = De(o), c)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, u = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, u = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], s = o[8]) : o[7] && (r = o[7], s = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ti.test(i))
    if (o = ti.exec(i), c = De(o), c)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, u = "DM"), o[6] && (t += o[6] / 3600, u = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], s = o[9]) : o[8] && (r = o[8], s = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ii.test(i)) {
    if (o = ii.exec(i), c = De(o), o.filter((l) => l).length <= 5)
      throw new Error("invalid coordinates format");
    if (c)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, u = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, u = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], s = o[9]) : o[8] && (r = o[8], s = o[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (c) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !s || !r && s)
      throw new Error("invalid coordinates value");
    if (r && r == s)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let l = /S|SOUTH/i;
    l.test(r) && t > 0 && (t = -1 * t), l = /W|WEST/i, l.test(s) && n > 0 && (n = -1 * n);
    const d = o[0].trim();
    let a, f;
    const g = /[,/;\u0020]/g, v = d.match(g);
    if (v == null) {
      const y = Math.floor(i.length / 2);
      a = d.substring(0, y).trim(), f = d.substring(y).trim();
    } else {
      let y;
      v.length % 2 == 1 ? y = Math.floor(v.length / 2) : y = v.length / 2 - 1;
      let p = 0;
      if (y == 0)
        p = d.indexOf(v[0]), a = d.substring(0, p).trim(), f = d.substring(p + 1).trim();
      else {
        let E = 0, S = 0;
        for (; E <= y; )
          p = d.indexOf(v[E], S), S = p + 1, E++;
        a = d.substring(0, p).trim(), f = d.substring(p + 1).trim();
      }
    }
    const _ = a.split(".");
    if (_.length == 2 && _[1] == 0 && _[1].length != 2)
      throw new Error("invalid coordinates format");
    const h = f.split(".");
    if (h.length == 2 && h[1] == 0 && h[1].length != 2)
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
      originalFormat: u,
      closeEnough: tr,
      toCoordinateFormat: er
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function De(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let s = 0; s < r; s++) {
    const u = e[s], o = e[s + r], c = t.test(u) && t.test(o), l = n.test(u) && n.test(o), d = u == o;
    if (!(u == null && o == null)) {
      if (u == null || o == null)
        return !1;
      if (c || l || d)
        continue;
      return !1;
    }
  }
  return !0;
}
function ri(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function tr(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ri(this.decimalLatitude, Number(e[0])) && ri(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const ir = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Ot.to = ir;
const nr = [
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
], rr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, sr = [
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
], or = [
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
function lr() {
  const i = [];
  return nr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...rr });
  }), [...i, ...sr, ...or];
}
const ur = lr();
Ot.formats = ur.map((i) => i.verbatimCoordinates);
const ar = Ot;
function si(i, e, t) {
  const n = i.slice();
  return n[84] = e[t], n[86] = t, n;
}
function oi(i) {
  let e, t;
  return e = new jn({}), {
    c() {
      we(e.$$.fragment);
    },
    m(n, r) {
      he(e, n, r), t = !0;
    },
    i(n) {
      t || (j(e.$$.fragment, n), t = !0);
    },
    o(n) {
      V(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ge(e, n);
    }
  };
}
function li(i) {
  let e, t, n, r, s;
  return t = new Vn({}), {
    c() {
      e = A("button"), we(t.$$.fragment), b(e, "type", "button"), b(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), b(e, "class", "svelte-bz0zu3"), re(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(u, o) {
      U(u, e, o), he(t, e, null), n = !0, r || (s = $(
        e,
        "click",
        /*click_handler_2*/
        i[69]
      ), r = !0);
    },
    p(u, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      512) && b(
        e,
        "title",
        /*reverseButtonTitle*/
        u[9]
      ), (!n || o[0] & /*reverseActive*/
      1) && re(
        e,
        "active",
        /*reverseActive*/
        u[0]
      );
    },
    i(u) {
      n || (j(t.$$.fragment, u), n = !0);
    },
    o(u) {
      V(t.$$.fragment, u), n = !1;
    },
    d(u) {
      u && B(e), ge(t), r = !1, s();
    }
  };
}
function cr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, s, u, o = Kt(
    /*listFeatures*/
    i[14]
  );
  const c = (l) => (
    /*feature*/
    l[84].id + /*feature*/
    (l[84].address ? "," + /*feature*/
    l[84].address : "")
  );
  for (let l = 0; l < o.length; l += 1) {
    let d = si(i, o, l), a = c(d);
    n.set(a, t[l] = ui(a, d));
  }
  return {
    c() {
      e = A("ul");
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      b(e, "class", "options svelte-bz0zu3");
    },
    m(l, d) {
      U(l, e, d);
      for (let a = 0; a < t.length; a += 1)
        t[a] && t[a].m(e, null);
      r = !0, s || (u = [
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[73]
        ),
        $(
          e,
          "blur",
          /*blur_handler_1*/
          i[74]
        )
      ], s = !0);
    },
    p(l, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (o = Kt(
        /*listFeatures*/
        l[14]
      ), nt(), t = Mn(t, d, c, 1, l, o, n, e, xn, ui, null, si), rt());
    },
    i(l) {
      if (!r) {
        for (let d = 0; d < o.length; d += 1)
          j(t[d]);
        r = !0;
      }
    },
    o(l) {
      for (let d = 0; d < t.length; d += 1)
        V(t[d]);
      r = !1;
    },
    d(l) {
      l && B(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      s = !1, me(u);
    }
  };
}
function fr(i) {
  let e, t, n, r, s, u;
  return t = new Ii({}), {
    c() {
      e = A("div"), we(t.$$.fragment), n = ie(), r = A("div"), s = Ee(
        /*noResultsMessage*/
        i[7]
      ), b(r, "class", "svelte-bz0zu3"), b(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, c) {
      U(o, e, c), he(t, e, null), P(e, n), P(e, r), P(r, s), u = !0;
    },
    p(o, c) {
      (!u || c[0] & /*noResultsMessage*/
      128) && Ge(
        s,
        /*noResultsMessage*/
        o[7]
      );
    },
    i(o) {
      u || (j(t.$$.fragment, o), u = !0);
    },
    o(o) {
      V(t.$$.fragment, o), u = !1;
    },
    d(o) {
      o && B(e), ge(t);
    }
  };
}
function dr(i) {
  let e = "", t;
  return {
    c() {
      t = Ee(e);
    },
    m(n, r) {
      U(n, t, r);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && B(t);
    }
  };
}
function hr(i) {
  let e, t, n, r, s, u, o, c, l, d, a;
  return t = new Ii({}), c = new Pi({}), {
    c() {
      e = A("div"), we(t.$$.fragment), n = ie(), r = A("div"), s = Ee(
        /*errorMessage*/
        i[6]
      ), u = ie(), o = A("button"), we(c.$$.fragment), b(r, "class", "svelte-bz0zu3"), b(o, "class", "svelte-bz0zu3"), b(e, "class", "error svelte-bz0zu3");
    },
    m(f, g) {
      U(f, e, g), he(t, e, null), P(e, n), P(e, r), P(r, s), P(e, u), P(e, o), he(c, o, null), l = !0, d || (a = $(
        o,
        "click",
        /*click_handler_3*/
        i[70]
      ), d = !0);
    },
    p(f, g) {
      (!l || g[0] & /*errorMessage*/
      64) && Ge(
        s,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      l || (j(t.$$.fragment, f), j(c.$$.fragment, f), l = !0);
    },
    o(f) {
      V(t.$$.fragment, f), V(c.$$.fragment, f), l = !1;
    },
    d(f) {
      f && B(e), ge(t), ge(c), d = !1, a();
    }
  };
}
function ui(i, e) {
  let t, n, r;
  function s() {
    return (
      /*mouseenter_handler*/
      e[71](
        /*i*/
        e[86]
      )
    );
  }
  function u() {
    return (
      /*focus_handler_1*/
      e[72](
        /*feature*/
        e[84]
      )
    );
  }
  return n = new Fn({
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
  }), n.$on("mouseenter", s), n.$on("focus", u), {
    key: i,
    first: null,
    c() {
      t = mn(), we(n.$$.fragment), this.first = t;
    },
    m(o, c) {
      U(o, t, c), he(n, o, c), r = !0;
    },
    p(o, c) {
      e = o;
      const l = {};
      c[0] & /*listFeatures*/
      16384 && (l.feature = /*feature*/
      e[84]), c[0] & /*showPlaceType*/
      1024 && (l.showPlaceType = /*showPlaceType*/
      e[10]), c[0] & /*selectedItemIndex, listFeatures*/
      49152 && (l.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[86]), c[0] & /*iconsBaseUrl*/
      4096 && (l.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(l);
    },
    i(o) {
      r || (j(n.$$.fragment, o), r = !0);
    },
    o(o) {
      V(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && B(t), ge(n, o);
    }
  };
}
function gr(i) {
  let e, t, n, r, s, u, o, c, l, d, a, f, g, v, _, h, y, p, E, S, M, C = !1;
  s = new Kn({}), a = new Pi({});
  let w = (
    /*abortController*/
    i[19] && oi()
  ), L = (
    /*enableReverse*/
    i[5] === "button" && li(i)
  );
  const k = (
    /*#slots*/
    i[61].default
  ), O = fn(
    k,
    i,
    /*$$scope*/
    i[60],
    null
  ), G = [hr, dr, fr, cr], N = [];
  function X(x, W) {
    var se, fe;
    return (
      /*error*/
      x[18] ? 0 : (
        /*focusedDelayed*/
        x[16] ? (
          /*listFeatures*/
          ((se = x[14]) == null ? void 0 : se.length) === 0 ? 2 : (
            /*focusedDelayed*/
            x[16] && /*listFeatures*/
            ((fe = x[14]) != null && fe.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(h = X(i)) && (y = N[h] = G[h](i)), {
    c() {
      e = ie(), t = A("form"), n = A("div"), r = A("button"), we(s.$$.fragment), u = ie(), o = A("input"), c = ie(), l = A("div"), d = A("button"), we(a.$$.fragment), f = ie(), w && w.c(), g = ie(), L && L.c(), v = ie(), O && O.c(), _ = ie(), y && y.c(), b(r, "class", "search-button svelte-bz0zu3"), b(r, "type", "button"), b(
        o,
        "placeholder",
        /*placeholder*/
        i[8]
      ), b(
        o,
        "aria-label",
        /*placeholder*/
        i[8]
      ), b(o, "class", "svelte-bz0zu3"), b(d, "type", "button"), b(
        d,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), b(d, "class", "svelte-bz0zu3"), b(l, "class", "clear-button-container svelte-bz0zu3"), re(
        l,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), b(n, "class", "input-group svelte-bz0zu3"), b(t, "tabindex", "0"), b(t, "class", p = Zt(
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
      U(x, e, W), U(x, t, W), P(t, n), P(n, r), he(s, r, null), P(n, u), P(n, o), i[63](o), Ht(
        o,
        /*searchValue*/
        i[1]
      ), P(n, c), P(n, l), P(l, d), he(a, d, null), P(l, f), w && w.m(l, null), P(n, g), L && L.m(n, null), P(n, v), O && O.m(n, null), P(t, _), ~h && N[h].m(t, null), E = !0, S || (M = [
        $(
          r,
          "click",
          /*click_handler*/
          i[62]
        ),
        $(
          o,
          "input",
          /*input_1_input_handler*/
          i[64]
        ),
        $(
          o,
          "focus",
          /*focus_handler*/
          i[65]
        ),
        $(
          o,
          "blur",
          /*blur_handler*/
          i[66]
        ),
        $(
          o,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        $(
          o,
          "input",
          /*input_handler*/
          i[67]
        ),
        $(
          d,
          "click",
          /*click_handler_1*/
          i[68]
        ),
        $(t, "submit", yn(
          /*handleOnSubmit*/
          i[21]
        ))
      ], S = !0);
    },
    p(x, W) {
      (!E || W[0] & /*placeholder*/
      256) && b(
        o,
        "placeholder",
        /*placeholder*/
        x[8]
      ), (!E || W[0] & /*placeholder*/
      256) && b(
        o,
        "aria-label",
        /*placeholder*/
        x[8]
      ), W[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      x[1] && Ht(
        o,
        /*searchValue*/
        x[1]
      ), (!E || W[0] & /*clearButtonTitle*/
      8) && b(
        d,
        "title",
        /*clearButtonTitle*/
        x[3]
      ), /*abortController*/
      x[19] ? w ? W[0] & /*abortController*/
      524288 && j(w, 1) : (w = oi(), w.c(), j(w, 1), w.m(l, null)) : w && (nt(), V(w, 1, 1, () => {
        w = null;
      }), rt()), (!E || W[0] & /*searchValue*/
      2) && re(
        l,
        "displayable",
        /*searchValue*/
        x[1] !== ""
      ), /*enableReverse*/
      x[5] === "button" ? L ? (L.p(x, W), W[0] & /*enableReverse*/
      32 && j(L, 1)) : (L = li(x), L.c(), j(L, 1), L.m(n, v)) : L && (nt(), V(L, 1, 1, () => {
        L = null;
      }), rt()), O && O.p && (!E || W[1] & /*$$scope*/
      536870912) && hn(
        O,
        k,
        x,
        /*$$scope*/
        x[60],
        E ? dn(
          k,
          /*$$scope*/
          x[60],
          W,
          null
        ) : gn(
          /*$$scope*/
          x[60]
        ),
        null
      );
      let se = h;
      h = X(x), h === se ? ~h && N[h].p(x, W) : (y && (nt(), V(N[se], 1, 1, () => {
        N[se] = null;
      }), rt()), ~h ? (y = N[h], y ? y.p(x, W) : (y = N[h] = G[h](x), y.c()), j(y, 1), y.m(t, null)) : y = null), (!E || W[0] & /*className*/
      4 && p !== (p = Zt(
        /*className*/
        x[2]
      ) + " svelte-bz0zu3")) && b(t, "class", p), (!E || W[0] & /*className, collapsed, searchValue*/
      22) && re(
        t,
        "can-collapse",
        /*collapsed*/
        x[4] && /*searchValue*/
        x[1] === ""
      );
    },
    i(x) {
      E || (j(C), j(s.$$.fragment, x), j(a.$$.fragment, x), j(w), j(L), j(O, x), j(y), E = !0);
    },
    o(x) {
      V(C), V(s.$$.fragment, x), V(a.$$.fragment, x), V(w), V(L), V(O, x), V(y), E = !1;
    },
    d(x) {
      x && (B(e), B(t)), ge(s), i[63](null), ge(a), w && w.d(), L && L.d(), O && O.d(x), ~h && N[h].d(), S = !1, me(M);
    }
  };
}
function mr(i, e, t) {
  let n, r, { $$slots: s = {}, $$scope: u } = e;
  const o = {
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
  let { class: c = void 0 } = e, { apiKey: l } = e, { bbox: d = void 0 } = e, { clearButtonTitle: a = "clear" } = e, { clearOnBlur: f = !1 } = e, { collapsed: g = !1 } = e, { country: v = void 0 } = e, { debounceSearch: _ = 200 } = e, { enableReverse: h = "never" } = e, { errorMessage: y = "Something went wrong…" } = e, { filter: p = () => !0 } = e, { flyTo: E = !0 } = e, { fuzzyMatch: S = !0 } = e, { language: M = void 0 } = e, { limit: C = void 0 } = e, { mapController: w = void 0 } = e, { minLength: L = 2 } = e, { noResultsMessage: k = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: O = "Search" } = e, { proximity: G = [{ type: "server-geolocation" }] } = e, { reverseActive: N = h === "always" } = e, { reverseButtonTitle: X = "toggle reverse geocoding" } = e, { searchValue: x = "" } = e, { pickedResultStyle: W = "full-geometry" } = e, { showPlaceType: se = "if-needed" } = e, { showResultsWhileTyping: fe = !0 } = e, { selectFirst: Re = !0 } = e, { flyToSelected: at = !1 } = e, { markerOnSelected: Ve = !0 } = e, { types: Ce = void 0 } = e, { exhaustiveReverseGeocoding: ct = !1 } = e, { excludeTypes: Ye = !1 } = e, { zoom: Ke = o } = e, { apiUrl: ft = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: dt = {} } = e, { iconsBaseUrl: Bt = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.0.1/icons/" } = e, { adjustUrlQuery: ht = () => {
  } } = e;
  function Di() {
    ue.focus();
  }
  function Ui() {
    ue.blur();
  }
  function Dt(m, F = !0, H = !1) {
    t(1, x = m), F ? (t(15, D = -1), Ft()) : (vt(!H, H), setTimeout(() => {
      ue.focus(), ue.select();
    }));
  }
  function Fi() {
    t(14, I = void 0), t(56, R = void 0), t(15, D = -1);
  }
  function Gi() {
    t(55, q = []), t(56, R = void 0);
  }
  let Te = !1, I, q, R, Ut = "", ue, D = -1, ae, Xe = [], ke, Pe, Je, gt;
  const ji = /* @__PURE__ */ new Set(), ye = En();
  bn(() => {
    w && (w.setEventHandler(void 0), w.indicateReverse(!1), w.setSelectedMarker(-1), w.setFeatures(void 0, void 0, !1));
  });
  function Ft(m) {
    if (Pe && (clearTimeout(Pe), Pe = void 0), D > -1 && I)
      t(56, R = I[D]), t(1, x = R.place_type[0] === "reverse" ? R.place_name : R.place_name.replace(/,.*/, "")), t(18, ae = void 0), t(55, q = void 0), t(15, D = -1);
    else if (x) {
      const F = m || !mt(x);
      yt(x, { exact: !0 }).then(() => {
        t(55, q = I), t(56, R = void 0), F && qi();
      }).catch((H) => t(18, ae = H));
    }
  }
  function mt(m) {
    try {
      return ar(m, 6);
    } catch {
      return !1;
    }
  }
  async function yt(m, { byId: F = !1, exact: H = !1 } = {}) {
    t(18, ae = void 0), ke == null || ke.abort();
    const te = new AbortController();
    t(19, ke = te);
    try {
      const T = mt(m), Q = new URLSearchParams();
      if (M !== void 0 && Q.set("language", Array.isArray(M) ? M.join(",") : M ?? ""), Ce && Q.set("types", Ce.join(",")), Ye && Q.set("excludeTypes", String(Ye)), d && Q.set("bbox", d.map(($e) => $e.toFixed(6)).join(",")), v && Q.set("country", Array.isArray(v) ? v.join(",") : v), !F && !T) {
        const $e = await Jn(w, G, te);
        $e && Q.set("proximity", $e), (H || !fe) && Q.set("autocomplete", "false"), Q.set("fuzzyMatch", String(S));
      }
      C !== void 0 && (ct || !T || (Ce == null ? void 0 : Ce.length) === 1) && Q.set("limit", String(C)), Q.set("key", l), ht(Q);
      const ce = ft + "/" + encodeURIComponent(T ? T.decimalLongitude + "," + T.decimalLatitude : m) + ".json?" + Q.toString();
      if (ce === Ut) {
        F ? (t(14, I = void 0), t(56, R = Xe[0])) : t(14, I = Xe);
        return;
      }
      Ut = ce;
      const bt = await fetch(ce, { signal: te.signal, ...dt });
      if (!bt.ok)
        throw new Error(await bt.text());
      const Et = await bt.json();
      ye("response", { url: ce, featureCollection: Et }), F ? (t(14, I = void 0), t(56, R = Et.features[0]), Xe = [R]) : (t(14, I = Et.features.filter(p)), T && I.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + T.decimalLongitude + "_" + T.decimalLatitude,
        text: T.decimalLatitude + ", " + T.decimalLongitude,
        place_name: T.decimalLatitude + ", " + T.decimalLongitude,
        place_type: ["reverse"],
        center: [T.decimalLongitude, T.decimalLatitude],
        bbox: [
          T.decimalLongitude,
          T.decimalLatitude,
          T.decimalLongitude,
          T.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [T.decimalLongitude, T.decimalLatitude]
        }
      }), Xe = I, T && ue.focus());
    } catch (T) {
      if (T && typeof T == "object" && "name" in T && T.name === "AbortError")
        return;
      throw T;
    } finally {
      te === ke && t(19, ke = void 0);
    }
  }
  function qi() {
    var te;
    if (!(q != null && q.length) || !E)
      return;
    const m = [180, 90, -180, -90], F = !q.some((T) => !T.matching_text);
    let H;
    for (const T of q) {
      const Q = ze(T);
      if (H = H === void 0 ? Q : Q === void 0 ? H : Math.max(H, Q), F || !T.matching_text)
        for (const ce of [0, 1, 2, 3])
          m[ce] = Math[ce < 2 ? "min" : "max"](m[ce], ((te = T.bbox) == null ? void 0 : te[ce]) ?? T.center[ce % 2]);
    }
    w && q.length > 0 && (R && m[0] === m[2] && m[1] === m[3] ? w.flyTo(R.center, ze(R)) : w.fitBounds(ot(m), 50, H));
  }
  function ze(m) {
    var H;
    if (!m.bbox || m.bbox[0] !== m.bbox[2] && m.bbox[1] !== m.bbox[3])
      return;
    const F = m.id.replace(/\..*/, "");
    return (Array.isArray((H = m.properties) == null ? void 0 : H.categories) ? m.properties.categories.reduce(
      (te, T) => {
        const Q = Ke[F + "." + T];
        return te === void 0 ? Q : Q === void 0 ? te : Math.max(te, Q);
      },
      void 0
    ) : void 0) ?? Ke[F];
  }
  function Qi(m) {
    t(0, N = h === "always"), t(14, I = void 0), t(56, R = void 0), t(15, D = -1), Dt(m[1].toFixed(6) + ", " + Xn(m[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Zi(m) {
    if (!I)
      return;
    let F = m.key === "ArrowDown" ? 1 : m.key === "ArrowUp" ? -1 : 0;
    F && (D === (Re ? 0 : -1) && F === -1 && t(15, D = I.length), t(15, D += F), D >= I.length && t(15, D = -1), D < 0 && Re && t(15, D = 0), m.preventDefault());
  }
  function vt(m = !0, F = !1) {
    if (t(18, ae = void 0), fe || F) {
      if (Pe && clearTimeout(Pe), x.length < L)
        return;
      const H = x;
      Pe = window.setTimeout(
        () => {
          yt(H).catch((te) => t(18, ae = te));
        },
        m ? _ : 0
      );
    } else
      t(14, I = void 0), t(18, ae = void 0);
  }
  function pt(m) {
    t(56, R = m), t(1, x = m.place_name), t(15, D = -1);
  }
  const Hi = () => ue.focus();
  function Vi(m) {
    Mt[m ? "unshift" : "push"](() => {
      ue = m, t(17, ue);
    });
  }
  function Yi() {
    x = this.value, t(1, x), t(13, Te), t(28, f);
  }
  const Ki = () => t(13, Te = !0), Xi = () => t(13, Te = !1), Ji = () => vt(), $i = () => {
    t(1, x = ""), ue.focus();
  }, en = () => t(0, N = !N), tn = () => t(18, ae = void 0), nn = (m) => t(15, D = m), rn = (m) => pt(m), sn = () => {
    Re || t(15, D = -1);
  }, on = () => {
  };
  return i.$$set = (m) => {
    "class" in m && t(2, c = m.class), "apiKey" in m && t(26, l = m.apiKey), "bbox" in m && t(27, d = m.bbox), "clearButtonTitle" in m && t(3, a = m.clearButtonTitle), "clearOnBlur" in m && t(28, f = m.clearOnBlur), "collapsed" in m && t(4, g = m.collapsed), "country" in m && t(29, v = m.country), "debounceSearch" in m && t(30, _ = m.debounceSearch), "enableReverse" in m && t(5, h = m.enableReverse), "errorMessage" in m && t(6, y = m.errorMessage), "filter" in m && t(31, p = m.filter), "flyTo" in m && t(32, E = m.flyTo), "fuzzyMatch" in m && t(33, S = m.fuzzyMatch), "language" in m && t(34, M = m.language), "limit" in m && t(35, C = m.limit), "mapController" in m && t(36, w = m.mapController), "minLength" in m && t(37, L = m.minLength), "noResultsMessage" in m && t(7, k = m.noResultsMessage), "placeholder" in m && t(8, O = m.placeholder), "proximity" in m && t(38, G = m.proximity), "reverseActive" in m && t(0, N = m.reverseActive), "reverseButtonTitle" in m && t(9, X = m.reverseButtonTitle), "searchValue" in m && t(1, x = m.searchValue), "pickedResultStyle" in m && t(39, W = m.pickedResultStyle), "showPlaceType" in m && t(10, se = m.showPlaceType), "showResultsWhileTyping" in m && t(40, fe = m.showResultsWhileTyping), "selectFirst" in m && t(11, Re = m.selectFirst), "flyToSelected" in m && t(41, at = m.flyToSelected), "markerOnSelected" in m && t(42, Ve = m.markerOnSelected), "types" in m && t(43, Ce = m.types), "exhaustiveReverseGeocoding" in m && t(44, ct = m.exhaustiveReverseGeocoding), "excludeTypes" in m && t(45, Ye = m.excludeTypes), "zoom" in m && t(46, Ke = m.zoom), "apiUrl" in m && t(47, ft = m.apiUrl), "fetchParameters" in m && t(48, dt = m.fetchParameters), "iconsBaseUrl" in m && t(12, Bt = m.iconsBaseUrl), "adjustUrlQuery" in m && t(49, ht = m.adjustUrlQuery), "$$scope" in m && t(60, u = m.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, N = h === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, Je = Te), f && !Te && t(1, x = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    64 && x.length < L && (t(56, R = void 0), t(14, I = void 0), t(18, ae = void 0), t(55, q = I)), i.$$.dirty[1] & /*pickedResultStyle, picked*/
    33554688 && W !== "marker-only" && R && !R.address && R.geometry.type === "Point" && R.place_type[0] !== "reverse" && yt(R.id, { byId: !0 }).catch((m) => t(18, ae = m)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (w && R && R.id !== gt && E && (!R.bbox || R.bbox[0] === R.bbox[2] && R.bbox[1] === R.bbox[3] ? w.flyTo(R.center, ze(R)) : w.fitBounds(ot(R.bbox), 50, ze(R)), t(14, I = void 0), t(55, q = void 0), t(15, D = -1)), t(57, gt = R == null ? void 0 : R.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && Re && I != null && I.length && t(15, D = 0), i.$$.dirty[0] & /*searchValue*/
    2 && t(15, D = -1), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    16777216 && q !== I && t(55, q = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && w && w.setEventHandler((m) => {
      switch (m.type) {
        case "mapClick":
          N && Qi(m.coordinates);
          break;
        case "markerClick":
          {
            const F = I == null ? void 0 : I.find((H) => H.id === m.id);
            F && pt(F);
          }
          break;
        case "markerMouseEnter":
          q && t(15, D = Je ? (I == null ? void 0 : I.findIndex((F) => F.id === m.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          q && t(15, D = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, r = I == null ? void 0 : I[D]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && w && r && E && at && w.flyTo(r.center, ze(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    256 && t(59, n = W === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController, showPolygonMarker*/
    268437536 && (Ve || w == null || w.setFeatures(void 0, void 0, n)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected, showPolygonMarker*/
    419432480 && w && Ve && !q && (w.setFeatures(r ? [r] : void 0, void 0, n), w.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked, showPolygonMarker*/
    318767136 && w && w.setFeatures(q, R, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && q && w && w.setSelectedMarker(D), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    32 && w) {
      const m = mt(x);
      w.setReverseMarker(m ? [m.decimalLongitude, m.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    134217728 && ye("select", { feature: r }), i.$$.dirty[1] & /*picked*/
    33554432 && ye("pick", { feature: R }), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && ye("optionsvisibilitychange", {
      optionsVisible: Je && !!I
    }), i.$$.dirty[0] & /*listFeatures*/
    16384 && ye("featureslisted", { features: I }), i.$$.dirty[1] & /*markedFeatures*/
    16777216 && ye("featuresmarked", { features: q }), i.$$.dirty[0] & /*reverseActive*/
    1 && ye("reversetoggle", { reverse: N }), i.$$.dirty[0] & /*searchValue*/
    2 && ye("querychange", { query: x }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    32 && w && w.indicateReverse(N);
  }, [
    N,
    x,
    c,
    a,
    g,
    h,
    y,
    k,
    O,
    X,
    se,
    Re,
    Bt,
    Te,
    I,
    D,
    Je,
    ue,
    ae,
    ke,
    ji,
    Ft,
    Zi,
    vt,
    pt,
    o,
    l,
    d,
    f,
    v,
    _,
    p,
    E,
    S,
    M,
    C,
    w,
    L,
    G,
    W,
    fe,
    at,
    Ve,
    Ce,
    ct,
    Ye,
    Ke,
    ft,
    dt,
    ht,
    Di,
    Ui,
    Dt,
    Fi,
    Gi,
    q,
    R,
    gt,
    r,
    n,
    u,
    s,
    Hi,
    Vi,
    Yi,
    Ki,
    Xi,
    Ji,
    $i,
    en,
    tn,
    nn,
    rn,
    sn,
    on
  ];
}
let yr = class extends xe {
  constructor(e) {
    super(), Se(
      this,
      e,
      mr,
      gr,
      Le,
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
function qe(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function At(i, e, t = {}) {
  for (const r of i) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let s = 0; s < r[r.length - 1].length; s++)
      if (r[r.length - 1][s] !== r[0][s])
        throw new Error("First and last Position are not equivalent.");
  }
  return qe({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function Qe(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function Oi(i, e, t = {}) {
  return qe({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
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
function vr(i, e) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, r, s, u;
  return u = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function o(l) {
    return function(d) {
      return c([l, d]);
    };
  }
  function c(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, r && (s = l[0] & 2 ? r.return : l[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, l[1])).done) return s;
      switch (r = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
        case 0:
        case 1:
          s = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: !1 };
        case 5:
          t.label++, r = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < s[1]) {
            t.label = s[1], s = l;
            break;
          }
          if (s && t.label < s[2]) {
            t.label = s[2], t.ops.push(l);
            break;
          }
          s[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = e.call(i, t);
    } catch (d) {
      l = [6, d], r = 0;
    } finally {
      n = s = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var _e = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(e, t) {
      this.next = null, this.key = e, this.data = t, this.left = null, this.right = null;
    }
    return i;
  }()
);
function pr(i, e) {
  return i > e ? 1 : i < e ? -1 : 0;
}
function ve(i, e, t) {
  for (var n = new _e(null, null), r = n, s = n; ; ) {
    var u = t(i, e.key);
    if (u < 0) {
      if (e.left === null)
        break;
      if (t(i, e.left.key) < 0) {
        var o = e.left;
        if (e.left = o.right, o.right = e, e = o, e.left === null)
          break;
      }
      s.left = e, s = e, e = e.left;
    } else if (u > 0) {
      if (e.right === null)
        break;
      if (t(i, e.right.key) > 0) {
        var o = e.right;
        if (e.right = o.left, o.left = e, e = o, e.right === null)
          break;
      }
      r.right = e, r = e, e = e.right;
    } else
      break;
  }
  return r.right = e.left, s.left = e.right, e.left = n.right, e.right = n.left, e;
}
function St(i, e, t, n) {
  var r = new _e(i, e);
  if (t === null)
    return r.left = r.right = null, r;
  t = ve(i, t, n);
  var s = n(i, t.key);
  return s < 0 ? (r.left = t.left, r.right = t, t.left = null) : s >= 0 && (r.right = t.right, r.left = t, t.right = null), r;
}
function ai(i, e, t) {
  var n = null, r = null;
  if (e) {
    e = ve(i, e, t);
    var s = t(e.key, i);
    s === 0 ? (n = e.left, r = e.right) : s < 0 ? (r = e.right, e.right = null, n = e) : (n = e.left, e.left = null, r = e);
  }
  return { left: n, right: r };
}
function br(i, e, t) {
  return e === null ? i : (i === null || (e = ve(i.key, e, t), e.left = i), e);
}
function Nt(i, e, t, n, r) {
  if (i) {
    n("" + e + (t ? "└── " : "├── ") + r(i) + `
`);
    var s = e + (t ? "    " : "│   ");
    i.left && Nt(i.left, s, !1, n, r), i.right && Nt(i.right, s, !0, n, r);
  }
}
var Wt = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = pr), this._root = null, this._size = 0, this._comparator = e;
    }
    return i.prototype.insert = function(e, t) {
      return this._size++, this._root = St(e, t, this._root, this._comparator);
    }, i.prototype.add = function(e, t) {
      var n = new _e(e, t);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, s = ve(e, this._root, r), u = r(e, s.key);
      return u === 0 ? this._root = s : (u < 0 ? (n.left = s.left, n.right = s, s.left = null) : u > 0 && (n.right = s.right, n.left = s, s.right = null), this._size++, this._root = n), this._root;
    }, i.prototype.remove = function(e) {
      this._root = this._remove(e, this._root, this._comparator);
    }, i.prototype._remove = function(e, t, n) {
      var r;
      if (t === null)
        return null;
      t = ve(e, t, n);
      var s = n(e, t.key);
      return s === 0 ? (t.left === null ? r = t.right : (r = ve(e, t.left, n), r.right = t.right), this._size--, r) : t;
    }, i.prototype.pop = function() {
      var e = this._root;
      if (e) {
        for (; e.left; )
          e = e.left;
        return this._root = ve(e.key, this._root, this._comparator), this._root = this._remove(e.key, this._root, this._comparator), { key: e.key, data: e.data };
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
      return this._root && (this._root = ve(e, this._root, this._comparator), this._comparator(e, this._root.key) !== 0) ? null : this._root;
    }, i.prototype.contains = function(e) {
      for (var t = this._root, n = this._comparator; t; ) {
        var r = n(e, t.key);
        if (r === 0)
          return !0;
        r < 0 ? t = t.left : t = t.right;
      }
      return !1;
    }, i.prototype.forEach = function(e, t) {
      for (var n = this._root, r = [], s = !1; !s; )
        n !== null ? (r.push(n), n = n.left) : r.length !== 0 ? (n = r.pop(), e.call(t, n), n = n.right) : s = !0;
      return this;
    }, i.prototype.range = function(e, t, n, r) {
      for (var s = [], u = this._comparator, o = this._root, c; s.length !== 0 || o; )
        if (o)
          s.push(o), o = o.left;
        else {
          if (o = s.pop(), c = u(o.key, t), c > 0)
            break;
          if (u(o.key, e) >= 0 && n.call(r, o))
            return this;
          o = o.right;
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
      for (var t = this._root, n = !1, r = 0, s = []; !n; )
        if (t)
          s.push(t), t = t.left;
        else if (s.length > 0) {
          if (t = s.pop(), r === e)
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
        var s = r(e.key, t.key);
        if (s === 0)
          break;
        s < 0 ? (n = t, t = t.left) : t = t.right;
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
        var s = r(e.key, t.key);
        if (s === 0)
          break;
        s < 0 ? t = t.left : (n = t, t = t.right);
      }
      return n;
    }, i.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, i.prototype.toList = function() {
      return wr(this._root);
    }, i.prototype.load = function(e, t, n) {
      t === void 0 && (t = []), n === void 0 && (n = !1);
      var r = e.length, s = this._comparator;
      if (n && Pt(e, t, 0, r - 1, s), this._root === null)
        this._root = Rt(e, t, 0, r), this._size = r;
      else {
        var u = _r(this.toList(), Er(e, t), s);
        r = this._size + r, this._root = Tt({ head: u }, 0, r);
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
      return Nt(this._root, "", !0, function(n) {
        return t.push(n);
      }, e), t.join("");
    }, i.prototype.update = function(e, t, n) {
      var r = this._comparator, s = ai(e, this._root, r), u = s.left, o = s.right;
      r(e, t) < 0 ? o = St(t, n, o, r) : u = St(t, n, u, r), this._root = br(u, o, r);
    }, i.prototype.split = function(e) {
      return ai(e, this._root, this._comparator);
    }, i.prototype[Symbol.iterator] = function() {
      var e, t, n;
      return vr(this, function(r) {
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
    var s = t + Math.floor(r / 2), u = i[s], o = e[s], c = new _e(u, o);
    return c.left = Rt(i, e, t, s), c.right = Rt(i, e, s + 1, n), c;
  }
  return null;
}
function Er(i, e) {
  for (var t = new _e(null, null), n = t, r = 0; r < i.length; r++)
    n = n.next = new _e(i[r], e[r]);
  return n.next = null, t.next;
}
function wr(i) {
  for (var e = i, t = [], n = !1, r = new _e(null, null), s = r; !n; )
    e ? (t.push(e), e = e.left) : t.length > 0 ? (e = s = s.next = t.pop(), e = e.right) : n = !0;
  return s.next = null, r.next;
}
function Tt(i, e, t) {
  var n = t - e;
  if (n > 0) {
    var r = e + Math.floor(n / 2), s = Tt(i, e, r), u = i.head;
    return u.left = s, i.head = i.head.next, u.right = Tt(i, r + 1, t), u;
  }
  return null;
}
function _r(i, e, t) {
  for (var n = new _e(null, null), r = n, s = i, u = e; s !== null && u !== null; )
    t(s.key, u.key) < 0 ? (r.next = s, s = s.next) : (r.next = u, u = u.next), r = r.next;
  return s !== null ? r.next = s : u !== null && (r.next = u), n.next;
}
function Pt(i, e, t, n, r) {
  if (!(t >= n)) {
    for (var s = i[t + n >> 1], u = t - 1, o = n + 1; ; ) {
      do
        u++;
      while (r(i[u], s) < 0);
      do
        o--;
      while (r(i[o], s) > 0);
      if (u >= o)
        break;
      var c = i[u];
      i[u] = i[o], i[o] = c, c = e[u], e[u] = e[o], e[o] = c;
    }
    Pt(i, e, t, o, r), Pt(i, e, o + 1, n, r);
  }
}
const de = 11102230246251565e-32, Y = 134217729, Lr = (3 + 8 * de) * de;
function xt(i, e, t, n, r) {
  let s, u, o, c, l = e[0], d = n[0], a = 0, f = 0;
  d > l == d > -l ? (s = l, l = e[++a]) : (s = d, d = n[++f]);
  let g = 0;
  if (a < i && f < t)
    for (d > l == d > -l ? (u = l + s, o = s - (u - l), l = e[++a]) : (u = d + s, o = s - (u - d), d = n[++f]), s = u, o !== 0 && (r[g++] = o); a < i && f < t; )
      d > l == d > -l ? (u = s + l, c = u - s, o = s - (u - c) + (l - c), l = e[++a]) : (u = s + d, c = u - s, o = s - (u - c) + (d - c), d = n[++f]), s = u, o !== 0 && (r[g++] = o);
  for (; a < i; )
    u = s + l, c = u - s, o = s - (u - c) + (l - c), l = e[++a], s = u, o !== 0 && (r[g++] = o);
  for (; f < t; )
    u = s + d, c = u - s, o = s - (u - c) + (d - c), d = n[++f], s = u, o !== 0 && (r[g++] = o);
  return (s !== 0 || g === 0) && (r[g++] = s), g;
}
function Sr(i, e) {
  let t = e[0];
  for (let n = 1; n < i; n++) t += e[n];
  return t;
}
function He(i) {
  return new Float64Array(i);
}
const xr = (3 + 16 * de) * de, Mr = (2 + 12 * de) * de, Cr = (9 + 64 * de) * de * de, Oe = He(4), ci = He(8), fi = He(12), di = He(16), J = He(4);
function kr(i, e, t, n, r, s, u) {
  let o, c, l, d, a, f, g, v, _, h, y, p, E, S, M, C, w, L;
  const k = i - r, O = t - r, G = e - s, N = n - s;
  S = k * N, f = Y * k, g = f - (f - k), v = k - g, f = Y * N, _ = f - (f - N), h = N - _, M = v * h - (S - g * _ - v * _ - g * h), C = G * O, f = Y * G, g = f - (f - G), v = G - g, f = Y * O, _ = f - (f - O), h = O - _, w = v * h - (C - g * _ - v * _ - g * h), y = M - w, a = M - y, Oe[0] = M - (y + a) + (a - w), p = S + y, a = p - S, E = S - (p - a) + (y - a), y = E - C, a = E - y, Oe[1] = E - (y + a) + (a - C), L = p + y, a = L - p, Oe[2] = p - (L - a) + (y - a), Oe[3] = L;
  let X = Sr(4, Oe), x = Mr * u;
  if (X >= x || -X >= x || (a = i - k, o = i - (k + a) + (a - r), a = t - O, l = t - (O + a) + (a - r), a = e - G, c = e - (G + a) + (a - s), a = n - N, d = n - (N + a) + (a - s), o === 0 && c === 0 && l === 0 && d === 0) || (x = Cr * u + Lr * Math.abs(X), X += k * d + N * o - (G * l + O * c), X >= x || -X >= x)) return X;
  S = o * N, f = Y * o, g = f - (f - o), v = o - g, f = Y * N, _ = f - (f - N), h = N - _, M = v * h - (S - g * _ - v * _ - g * h), C = c * O, f = Y * c, g = f - (f - c), v = c - g, f = Y * O, _ = f - (f - O), h = O - _, w = v * h - (C - g * _ - v * _ - g * h), y = M - w, a = M - y, J[0] = M - (y + a) + (a - w), p = S + y, a = p - S, E = S - (p - a) + (y - a), y = E - C, a = E - y, J[1] = E - (y + a) + (a - C), L = p + y, a = L - p, J[2] = p - (L - a) + (y - a), J[3] = L;
  const W = xt(4, Oe, 4, J, ci);
  S = k * d, f = Y * k, g = f - (f - k), v = k - g, f = Y * d, _ = f - (f - d), h = d - _, M = v * h - (S - g * _ - v * _ - g * h), C = G * l, f = Y * G, g = f - (f - G), v = G - g, f = Y * l, _ = f - (f - l), h = l - _, w = v * h - (C - g * _ - v * _ - g * h), y = M - w, a = M - y, J[0] = M - (y + a) + (a - w), p = S + y, a = p - S, E = S - (p - a) + (y - a), y = E - C, a = E - y, J[1] = E - (y + a) + (a - C), L = p + y, a = L - p, J[2] = p - (L - a) + (y - a), J[3] = L;
  const se = xt(W, ci, 4, J, fi);
  S = o * d, f = Y * o, g = f - (f - o), v = o - g, f = Y * d, _ = f - (f - d), h = d - _, M = v * h - (S - g * _ - v * _ - g * h), C = c * l, f = Y * c, g = f - (f - c), v = c - g, f = Y * l, _ = f - (f - l), h = l - _, w = v * h - (C - g * _ - v * _ - g * h), y = M - w, a = M - y, J[0] = M - (y + a) + (a - w), p = S + y, a = p - S, E = S - (p - a) + (y - a), y = E - C, a = E - y, J[1] = E - (y + a) + (a - C), L = p + y, a = L - p, J[2] = p - (L - a) + (y - a), J[3] = L;
  const fe = xt(se, fi, 4, J, di);
  return di[fe - 1];
}
function Nr(i, e, t, n, r, s) {
  const u = (e - s) * (t - r), o = (i - r) * (n - s), c = u - o, l = Math.abs(u + o);
  return Math.abs(c) >= xr * l ? c : -kr(i, e, t, n, r, s, l);
}
const Ue = (i, e) => i.ll.x <= e.x && e.x <= i.ur.x && i.ll.y <= e.y && e.y <= i.ur.y, It = (i, e) => {
  if (e.ur.x < i.ll.x || i.ur.x < e.ll.x || e.ur.y < i.ll.y || i.ur.y < e.ll.y) return null;
  const t = i.ll.x < e.ll.x ? e.ll.x : i.ll.x, n = i.ur.x < e.ur.x ? i.ur.x : e.ur.x, r = i.ll.y < e.ll.y ? e.ll.y : i.ll.y, s = i.ur.y < e.ur.y ? i.ur.y : e.ur.y;
  return {
    ll: {
      x: t,
      y: r
    },
    ur: {
      x: n,
      y: s
    }
  };
};
let pe = Number.EPSILON;
pe === void 0 && (pe = Math.pow(2, -52));
const Rr = pe * pe, hi = (i, e) => {
  if (-pe < i && i < pe && -pe < e && e < pe)
    return 0;
  const t = i - e;
  return t * t < Rr * i * e ? 0 : i < e ? -1 : 1;
};
class Tr {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new gi(), this.yRounder = new gi();
  }
  round(e, t) {
    return {
      x: this.xRounder.round(e),
      y: this.yRounder.round(t)
    };
  }
}
class gi {
  constructor() {
    this.tree = new Wt(), this.round(0);
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
    if (n !== null && hi(t.key, n.key) === 0)
      return this.tree.remove(e), n.key;
    const r = this.tree.next(t);
    return r !== null && hi(t.key, r.key) === 0 ? (this.tree.remove(e), r.key) : e;
  }
}
const Ze = new Tr(), st = (i, e) => i.x * e.y - i.y * e.x, Ai = (i, e) => i.x * e.x + i.y * e.y, mi = (i, e, t) => {
  const n = Nr(i.x, i.y, e.x, e.y, t.x, t.y);
  return n > 0 ? -1 : n < 0 ? 1 : 0;
}, lt = (i) => Math.sqrt(Ai(i, i)), Pr = (i, e, t) => {
  const n = {
    x: e.x - i.x,
    y: e.y - i.y
  }, r = {
    x: t.x - i.x,
    y: t.y - i.y
  };
  return st(r, n) / lt(r) / lt(n);
}, Ir = (i, e, t) => {
  const n = {
    x: e.x - i.x,
    y: e.y - i.y
  }, r = {
    x: t.x - i.x,
    y: t.y - i.y
  };
  return Ai(r, n) / lt(r) / lt(n);
}, yi = (i, e, t) => e.y === 0 ? null : {
  x: i.x + e.x / e.y * (t - i.y),
  y: t
}, vi = (i, e, t) => e.x === 0 ? null : {
  x: t,
  y: i.y + e.y / e.x * (t - i.x)
}, Or = (i, e, t, n) => {
  if (e.x === 0) return vi(t, n, i.x);
  if (n.x === 0) return vi(i, e, t.x);
  if (e.y === 0) return yi(t, n, i.y);
  if (n.y === 0) return yi(i, e, t.y);
  const r = st(e, n);
  if (r == 0) return null;
  const s = {
    x: t.x - i.x,
    y: t.y - i.y
  }, u = st(s, e) / r, o = st(s, n) / r, c = i.x + o * e.x, l = t.x + u * n.x, d = i.y + o * e.y, a = t.y + u * n.y, f = (c + l) / 2, g = (d + a) / 2;
  return {
    x: f,
    y: g
  };
};
class ne {
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = ne.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : be.compare(e.segment, t.segment));
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
      const s = t[n];
      this.point.events.push(s), s.point = this.point;
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
          const s = this.point.events[r];
          s.consumedBy === void 0 && n.otherSE.point.events === s.otherSE.point.events && n.segment.consume(s.segment);
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
      const s = r.otherSE;
      t.set(r, {
        sine: Pr(this.point, e.point, s.point),
        cosine: Ir(this.point, e.point, s.point)
      });
    };
    return (r, s) => {
      t.has(r) || n(r), t.has(s) || n(s);
      const {
        sine: u,
        cosine: o
      } = t.get(r), {
        sine: c,
        cosine: l
      } = t.get(s);
      return u >= 0 && c >= 0 ? o < l ? 1 : o > l ? -1 : 0 : u < 0 && c < 0 ? o < l ? -1 : o > l ? 1 : 0 : c < u ? -1 : c > u ? 1 : 0;
    };
  }
}
let Ar = 0;
class be {
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
    const n = e.leftSE.point.x, r = t.leftSE.point.x, s = e.rightSE.point.x, u = t.rightSE.point.x;
    if (u < n) return 1;
    if (s < r) return -1;
    const o = e.leftSE.point.y, c = t.leftSE.point.y, l = e.rightSE.point.y, d = t.rightSE.point.y;
    if (n < r) {
      if (c < o && c < l) return 1;
      if (c > o && c > l) return -1;
      const a = e.comparePoint(t.leftSE.point);
      if (a < 0) return 1;
      if (a > 0) return -1;
      const f = t.comparePoint(e.rightSE.point);
      return f !== 0 ? f : -1;
    }
    if (n > r) {
      if (o < c && o < d) return -1;
      if (o > c && o > d) return 1;
      const a = t.comparePoint(e.leftSE.point);
      if (a !== 0) return a;
      const f = e.comparePoint(t.rightSE.point);
      return f < 0 ? 1 : f > 0 ? -1 : 1;
    }
    if (o < c) return -1;
    if (o > c) return 1;
    if (s < u) {
      const a = t.comparePoint(e.rightSE.point);
      if (a !== 0) return a;
    }
    if (s > u) {
      const a = e.comparePoint(t.rightSE.point);
      if (a < 0) return 1;
      if (a > 0) return -1;
    }
    if (s !== u) {
      const a = l - o, f = s - n, g = d - c, v = u - r;
      if (a > f && g < v) return 1;
      if (a < f && g > v) return -1;
    }
    return s > u ? 1 : s < u || l < d ? -1 : l > d ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    this.id = ++Ar, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
  }
  static fromRing(e, t, n) {
    let r, s, u;
    const o = ne.comparePoints(e, t);
    if (o < 0)
      r = e, s = t, u = 1;
    else if (o > 0)
      r = t, s = e, u = -1;
    else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
    const c = new ne(r, !0), l = new ne(s, !1);
    return new be(c, l, [n], [u]);
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
    const s = (e.y - t.y) / r.y, u = t.x + s * r.x;
    if (e.x === u) return 0;
    const o = (e.x - t.x) / r.x, c = t.y + o * r.y;
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
    const t = this.bbox(), n = e.bbox(), r = It(t, n);
    if (r === null) return null;
    const s = this.leftSE.point, u = this.rightSE.point, o = e.leftSE.point, c = e.rightSE.point, l = Ue(t, o) && this.comparePoint(o) === 0, d = Ue(n, s) && e.comparePoint(s) === 0, a = Ue(t, c) && this.comparePoint(c) === 0, f = Ue(n, u) && e.comparePoint(u) === 0;
    if (d && l)
      return f && !a ? u : !f && a ? c : null;
    if (d)
      return a && s.x === c.x && s.y === c.y ? null : s;
    if (l)
      return f && u.x === o.x && u.y === o.y ? null : o;
    if (f && a) return null;
    if (f) return u;
    if (a) return c;
    const g = Or(s, this.vector(), o, e.vector());
    return g === null || !Ue(r, g) ? null : Ze.round(g.x, g.y);
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
    const t = [], n = e.events !== void 0, r = new ne(e, !0), s = new ne(e, !1), u = this.rightSE;
    this.replaceRightSE(s), t.push(s), t.push(r);
    const o = new be(r, u, this.rings.slice(), this.windings.slice());
    return ne.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), ne.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), s.checkForConsuming()), t;
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
    const r = be.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const s = t;
        t = n, n = s;
      }
      if (t.prev === n) {
        const s = t;
        t = n, n = s;
      }
      for (let s = 0, u = n.rings.length; s < u; s++) {
        const o = n.rings[s], c = n.windings[s], l = t.rings.indexOf(o);
        l === -1 ? (t.rings.push(o), t.windings.push(c)) : t.windings[l] += c;
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
    for (let o = 0, c = this.rings.length; o < c; o++) {
      const l = this.rings[o], d = this.windings[o], a = t.indexOf(l);
      a === -1 ? (t.push(l), n.push(d)) : n[a] += d;
    }
    const s = [], u = [];
    for (let o = 0, c = t.length; o < c; o++) {
      if (n[o] === 0) continue;
      const l = t[o], d = l.poly;
      if (u.indexOf(d) === -1)
        if (l.isExterior) s.push(d);
        else {
          u.indexOf(d) === -1 && u.push(d);
          const a = s.indexOf(l.poly);
          a !== -1 && s.splice(a, 1);
        }
    }
    for (let o = 0, c = s.length; o < c; o++) {
      const l = s[o].multiPoly;
      r.indexOf(l) === -1 && r.push(l);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (oe.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === oe.numMultiPolys && n < r;
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
        throw new Error(`Unrecognized operation type found ${oe.type}`);
    }
    return this._isInResult;
  }
}
class pi {
  constructor(e, t, n) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = t, this.isExterior = n, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number")
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
    let s = r;
    for (let u = 1, o = e.length; u < o; u++) {
      if (typeof e[u][0] != "number" || typeof e[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let c = Ze.round(e[u][0], e[u][1]);
      c.x === s.x && c.y === s.y || (this.segments.push(be.fromRing(s, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), s = c);
    }
    (r.x !== s.x || r.y !== s.y) && this.segments.push(be.fromRing(s, r, this));
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
class Wr {
  constructor(e, t) {
    if (!Array.isArray(e))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new pi(e[0], this, !0), this.bbox = {
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
      const s = new pi(e[n], this, !1);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.interiorRings.push(s);
    }
    this.multiPoly = t;
  }
  getSweepEvents() {
    const e = this.exteriorRing.getSweepEvents();
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getSweepEvents();
      for (let s = 0, u = r.length; s < u; s++)
        e.push(r[s]);
    }
    return e;
  }
}
class bi {
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
      const s = new Wr(e[n], this);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.polys.push(s);
    }
    this.isSubject = t;
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, n = this.polys.length; t < n; t++) {
      const r = this.polys[t].getSweepEvents();
      for (let s = 0, u = r.length; s < u; s++)
        e.push(r[s]);
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
      const s = e[n];
      if (!s.isInResult() || s.ringOut) continue;
      let u = null, o = s.leftSE, c = s.rightSE;
      const l = [o], d = o.point, a = [];
      for (; u = o, o = c, l.push(o), o.point !== d; )
        for (; ; ) {
          const f = o.getAvailableLinkedEvents();
          if (f.length === 0) {
            const _ = l[0].point, h = l[l.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${_.x}, ${_.y}]. Last matching segment found ends at [${h.x}, ${h.y}].`);
          }
          if (f.length === 1) {
            c = f[0].otherSE;
            break;
          }
          let g = null;
          for (let _ = 0, h = a.length; _ < h; _++)
            if (a[_].point === o.point) {
              g = _;
              break;
            }
          if (g !== null) {
            const _ = a.splice(g)[0], h = l.splice(_.index);
            h.unshift(h[0].otherSE), t.push(new ut(h.reverse()));
            continue;
          }
          a.push({
            index: l.length,
            point: o.point
          });
          const v = o.getLeftmostComparator(u);
          c = f.sort(v)[0].otherSE;
          break;
        }
      t.push(new ut(l));
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
    for (let l = 1, d = this.events.length - 1; l < d; l++) {
      const a = this.events[l].point, f = this.events[l + 1].point;
      mi(a, e, f) !== 0 && (t.push(a), e = a);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    mi(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const s = this.isExteriorRing() ? 1 : -1, u = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, c = [];
    for (let l = u; l != o; l += s) c.push([t[l].x, t[l].y]);
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
    for (let r = 1, s = this.events.length; r < s; r++) {
      const u = this.events[r];
      ne.compare(e, u) > 0 && (e = u);
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
class zr {
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
      const s = e[n];
      if (!s.poly)
        if (s.isExteriorRing()) t.push(new Ei(s));
        else {
          const u = s.enclosingRing();
          u.poly || t.push(new Ei(u)), u.poly.addInterior(s);
        }
    }
    return t;
  }
}
class Br {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : be.compare;
    this.queue = e, this.tree = new Wt(t), this.segments = [];
  }
  process(e) {
    const t = e.segment, n = [];
    if (e.consumedBy)
      return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(t), n;
    const r = e.isLeft ? this.tree.add(t) : this.tree.find(t);
    if (!r) throw new Error(`Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`);
    let s = r, u = r, o, c;
    for (; o === void 0; )
      s = this.tree.prev(s), s === null ? o = null : s.key.consumedBy === void 0 && (o = s.key);
    for (; c === void 0; )
      u = this.tree.next(u), u === null ? c = null : u.key.consumedBy === void 0 && (c = u.key);
    if (e.isLeft) {
      let l = null;
      if (o) {
        const a = o.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (l = a), !o.isAnEndpoint(a))) {
          const f = this._splitSafely(o, a);
          for (let g = 0, v = f.length; g < v; g++)
            n.push(f[g]);
        }
      }
      let d = null;
      if (c) {
        const a = c.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (d = a), !c.isAnEndpoint(a))) {
          const f = this._splitSafely(c, a);
          for (let g = 0, v = f.length; g < v; g++)
            n.push(f[g]);
        }
      }
      if (l !== null || d !== null) {
        let a = null;
        l === null ? a = d : d === null ? a = l : a = ne.comparePoints(l, d) <= 0 ? l : d, this.queue.remove(t.rightSE), n.push(t.rightSE);
        const f = t.split(a);
        for (let g = 0, v = f.length; g < v; g++)
          n.push(f[g]);
      }
      n.length > 0 ? (this.tree.remove(t), n.push(e)) : (this.segments.push(t), t.prev = o);
    } else {
      if (o && c) {
        const l = o.getIntersection(c);
        if (l !== null) {
          if (!o.isAnEndpoint(l)) {
            const d = this._splitSafely(o, l);
            for (let a = 0, f = d.length; a < f; a++)
              n.push(d[a]);
          }
          if (!c.isAnEndpoint(l)) {
            const d = this._splitSafely(c, l);
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
const wi = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Dr = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Ur {
  run(e, t, n) {
    oe.type = e, Ze.reset();
    const r = [new bi(t, !0)];
    for (let a = 0, f = n.length; a < f; a++)
      r.push(new bi(n[a], !1));
    if (oe.numMultiPolys = r.length, oe.type === "difference") {
      const a = r[0];
      let f = 1;
      for (; f < r.length; )
        It(r[f].bbox, a.bbox) !== null ? f++ : r.splice(f, 1);
    }
    if (oe.type === "intersection")
      for (let a = 0, f = r.length; a < f; a++) {
        const g = r[a];
        for (let v = a + 1, _ = r.length; v < _; v++)
          if (It(g.bbox, r[v].bbox) === null) return [];
      }
    const s = new Wt(ne.compare);
    for (let a = 0, f = r.length; a < f; a++) {
      const g = r[a].getSweepEvents();
      for (let v = 0, _ = g.length; v < _; v++)
        if (s.insert(g[v]), s.size > wi)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const u = new Br(s);
    let o = s.size, c = s.pop();
    for (; c; ) {
      const a = c.key;
      if (s.size === o) {
        const g = a.segment;
        throw new Error(`Unable to pop() ${a.isLeft ? "left" : "right"} SweepEvent [${a.point.x}, ${a.point.y}] from segment #${g.id} [${g.leftSE.point.x}, ${g.leftSE.point.y}] -> [${g.rightSE.point.x}, ${g.rightSE.point.y}] from queue.`);
      }
      if (s.size > wi)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (u.segments.length > Dr)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const f = u.process(a);
      for (let g = 0, v = f.length; g < v; g++) {
        const _ = f[g];
        _.consumedBy === void 0 && s.insert(_);
      }
      o = s.size, c = s.pop();
    }
    Ze.reset();
    const l = ut.factory(u.segments);
    return new zr(l).getGeom();
  }
}
const oe = new Ur(), Fr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return oe.run("union", i, t);
}, Gr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return oe.run("intersection", i, t);
}, jr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return oe.run("xor", i, t);
}, qr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return oe.run("difference", i, t);
};
var Wi = {
  union: Fr,
  intersection: Gr,
  xor: jr,
  difference: qr
};
function zi(i, e, t) {
  if (i !== null)
    for (var n, r, s, u, o, c, l, d = 0, a = 0, f, g = i.type, v = g === "FeatureCollection", _ = g === "Feature", h = v ? i.features.length : 1, y = 0; y < h; y++) {
      l = v ? i.features[y].geometry : _ ? i.geometry : i, f = l ? l.type === "GeometryCollection" : !1, o = f ? l.geometries.length : 1;
      for (var p = 0; p < o; p++) {
        var E = 0, S = 0;
        if (u = f ? l.geometries[p] : l, u !== null) {
          c = u.coordinates;
          var M = u.type;
          switch (d = 0, M) {
            case null:
              break;
            case "Point":
              if (e(
                c,
                a,
                y,
                E,
                S
              ) === !1)
                return !1;
              a++, E++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < c.length; n++) {
                if (e(
                  c[n],
                  a,
                  y,
                  E,
                  S
                ) === !1)
                  return !1;
                a++, M === "MultiPoint" && E++;
              }
              M === "LineString" && E++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < c.length; n++) {
                for (r = 0; r < c[n].length - d; r++) {
                  if (e(
                    c[n][r],
                    a,
                    y,
                    E,
                    S
                  ) === !1)
                    return !1;
                  a++;
                }
                M === "MultiLineString" && E++, M === "Polygon" && S++;
              }
              M === "Polygon" && E++;
              break;
            case "MultiPolygon":
              for (n = 0; n < c.length; n++) {
                for (S = 0, r = 0; r < c[n].length; r++) {
                  for (s = 0; s < c[n][r].length - d; s++) {
                    if (e(
                      c[n][r][s],
                      a,
                      y,
                      E,
                      S
                    ) === !1)
                      return !1;
                    a++;
                  }
                  S++;
                }
                E++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < u.geometries.length; n++)
                if (zi(u.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function zt(i, e) {
  var t, n, r, s, u, o, c, l, d, a, f = 0, g = i.type === "FeatureCollection", v = i.type === "Feature", _ = g ? i.features.length : 1;
  for (t = 0; t < _; t++) {
    for (o = g ? i.features[t].geometry : v ? i.geometry : i, l = g ? i.features[t].properties : v ? i.properties : {}, d = g ? i.features[t].bbox : v ? i.bbox : void 0, a = g ? i.features[t].id : v ? i.id : void 0, c = o ? o.type === "GeometryCollection" : !1, u = c ? o.geometries.length : 1, r = 0; r < u; r++) {
      if (s = c ? o.geometries[r] : o, s === null) {
        if (e(
          null,
          f,
          l,
          d,
          a
        ) === !1)
          return !1;
        continue;
      }
      switch (s.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            s,
            f,
            l,
            d,
            a
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < s.geometries.length; n++)
            if (e(
              s.geometries[n],
              f,
              l,
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
function Qr(i, e) {
  zt(i, function(t, n, r, s, u) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          qe(t, r, { bbox: s, id: u }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var c;
    switch (o) {
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
    for (var l = 0; l < t.coordinates.length; l++) {
      var d = t.coordinates[l], a = {
        type: c,
        coordinates: d
      };
      if (e(qe(a, r), n, l) === !1)
        return !1;
    }
  });
}
function Zr(i, e = {}) {
  const t = [];
  if (zt(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Wi.union(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? At(n[0], e.properties) : Oi(n, e.properties);
}
var Bi = Zr;
function Hr(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return zi(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var _i = Hr;
function Vr(i) {
  const e = [];
  if (zt(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = Wi.difference(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? At(n[0], t) : Oi(n, t);
}
var Yr = Vr;
function Kr(i) {
  if (!i)
    throw new Error("geojson is required");
  var e = [];
  return Qr(i, function(t) {
    e.push(t);
  }), Qe(e);
}
var Xr = Kr;
function Li(i, e) {
  const t = Yr(
    Qe([
      At([
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
  const n = ot(_i(i)), r = (n[2] - n[0]) / 360 / 1e3, s = n[0] < -180, u = n[2] > 180, o = Xr(i);
  if (o.features.length > 1 && (s || u))
    for (const c of o.features) {
      const l = ot(_i(c));
      if (u && l[0] < -180 + r)
        for (const d of c.geometry.coordinates)
          for (const a of d)
            a[0] += 360 - r;
      if (s && l[2] > 180 - r)
        for (const d of c.geometry.coordinates)
          for (const a of d)
            a[0] -= 360 - r;
    }
  e(
    Qe([
      o.features.length < 2 ? i : Bi(o) ?? i,
      t
    ])
  );
}
const Si = {
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
}, tt = "mtlr-gc-full-geom", xi = "mtlr-gc-full-geom-fill", Mi = "mtlr-gc-full-geom-line";
function Jr(i, e, t = !0, n = !0, r = {}, s = {}, u = Si) {
  let o;
  const c = [];
  let l, d, a;
  function f() {
    if (!i.loaded) {
      i.once("load", f);
      return;
    }
    const h = u ? u === !0 ? Si : u : void 0;
    if (!(h != null && h.fill) && !(h != null && h.line))
      return;
    const y = i.getSource(tt);
    if (y)
      y.setData(a ?? Qe([]));
    else if (a)
      i.addSource(tt, {
        type: "geojson",
        data: a
      });
    else
      return;
    !i.getLayer(xi) && (h != null && h.fill) && i.addLayer({
      ...h == null ? void 0 : h.fill,
      id: xi,
      type: "fill",
      source: tt
    }), !i.getLayer(Mi) && (h != null && h.line) && i.addLayer({
      ...h == null ? void 0 : h.line,
      id: Mi,
      type: "line",
      source: tt
    });
  }
  function g(h) {
    a = h, f();
  }
  i.on("styledata", () => {
    setTimeout(() => {
      a && f();
    });
  });
  const v = (h) => {
    o == null || o({
      type: "mapClick",
      coordinates: [h.lngLat.lng, h.lngLat.lat]
    });
  };
  function _(h = !1) {
    if (!e)
      throw new Error();
    const y = document.createElement("div");
    return h && y.classList.add("marker-interactive"), new Zn({
      props: { displayIn: "maplibre" },
      target: y
    }), new e.Marker({ element: y, offset: [1, -13] });
  }
  return {
    setEventHandler(h) {
      h ? (o = h, i.on("click", v)) : (o = void 0, i.off("click", v));
    },
    flyTo(h, y) {
      i.flyTo({ center: h, ...y ? { zoom: y } : {}, ...r });
    },
    fitBounds(h, y, p) {
      i.fitBounds(
        [
          [h[0], h[1]],
          [h[2], h[3]]
        ],
        { padding: y, ...p ? { maxZoom: p } : {}, ...s }
      );
    },
    indicateReverse(h) {
      i.getCanvasContainer().style.cursor = h ? "crosshair" : "";
    },
    setReverseMarker(h) {
      !e || !t || (d ? h ? d.setLngLat(h) : (d.remove(), d = void 0) : h && (t instanceof Function ? d = t(i) ?? void 0 : (d = (typeof t == "object" ? new e.Marker(t) : _()).setLngLat(h).addTo(i), d.getElement().classList.add("marker-reverse"))));
    },
    setFeatures(h, y, p) {
      for (const E of c)
        E.remove();
      if (c.length = 0, g(void 0), !!e) {
        if (y) {
          let E = !1;
          if (y.geometry.type === "GeometryCollection") {
            const S = y.geometry.geometries.filter(
              (M) => M.type === "Polygon" || M.type === "MultiPolygon"
            );
            e: if (S.length > 0) {
              const M = Bi(
                Qe(S.map((C) => qe(C)))
              );
              if (!M)
                break e;
              Li(
                {
                  ...y,
                  geometry: M.geometry
                },
                g
              ), E = !0;
            } else {
              const M = y.geometry.geometries.filter(
                (C) => C.type === "LineString" || C.type === "MultiLineString"
              );
              M.length > 0 && (g({
                ...y,
                geometry: { type: "GeometryCollection", geometries: M }
              }), E = !0);
            }
          }
          if (!E) {
            if (y.geometry.type === "Polygon" || y.geometry.type === "MultiPolygon")
              Li(y, g);
            else if (y.geometry.type === "LineString" || y.geometry.type === "MultiLineString") {
              g(y);
              return;
            }
          }
          if (!p && y.geometry.type !== "Point")
            return;
          if (t instanceof Function) {
            const S = t(i, y);
            S && c.push(S);
          } else t && c.push(
            typeof t == "object" ? new e.Marker(t) : _().setLngLat(y.center).addTo(i)
          );
        }
        if (n)
          for (const E of h ?? []) {
            if (E === y)
              continue;
            let S;
            if (n instanceof Function) {
              if (S = n(i, E), !S)
                continue;
            } else
              S = (typeof n == "object" ? new e.Marker(n) : _(!0)).setLngLat(E.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  E.place_type[0] === "reverse" ? E.place_name : E.place_name.replace(/,.*/, "")
                )
              ).addTo(i);
            const M = S.getElement();
            M.addEventListener("click", (C) => {
              C.stopPropagation(), o == null || o({ type: "markerClick", id: E.id });
            }), M.addEventListener("mouseenter", () => {
              o == null || o({ type: "markerMouseEnter", id: E.id }), S.togglePopup();
            }), M.addEventListener("mouseleave", () => {
              o == null || o({ type: "markerMouseLeave", id: E.id }), S.togglePopup();
            }), c.push(S);
          }
      }
    },
    setSelectedMarker(h) {
      l && l.getElement().classList.toggle("marker-selected", !1), l = h > -1 ? c[h] : void 0, l == null || l.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const h = i.getCenter();
      return [i.getZoom(), h.lng, h.lat];
    }
  };
}
function $r(i, e, t) {
  var v, _;
  class n {
    constructor(y, p) {
      ee(this, "type");
      ee(this, "target");
      this.type = p, this.target = y;
    }
  }
  class r extends n {
    constructor(p, E) {
      super(p, "select");
      ee(this, "feature");
      Object.assign(this, E);
    }
  }
  class s extends n {
    constructor(p, E) {
      super(p, "featureslisted");
      ee(this, "features");
      this.features = E;
    }
  }
  class u extends n {
    constructor(p, E) {
      super(p, "featuresmarked");
      ee(this, "features");
      this.features = E;
    }
  }
  class o extends n {
    constructor(p, E) {
      super(p, "optionsvisibilitychange");
      ee(this, "optionsVisible");
      this.optionsVisible = E;
    }
  }
  class c extends n {
    constructor(p, E) {
      super(p, "pick");
      ee(this, "feature");
      this.feature = E;
    }
  }
  class l extends n {
    constructor(p, E) {
      super(p, "querychange");
      ee(this, "query");
      this.query = E;
    }
  }
  class d extends n {
    constructor(p, E, S) {
      super(p, "response");
      ee(this, "url");
      ee(this, "featureCollection");
      this.url = E, this.featureCollection = S;
    }
  }
  class a extends n {
    constructor(p, E) {
      super(p, "reversetoggle");
      ee(this, "reverse");
      this.reverse = E;
    }
  }
  class f extends i {
    constructor(p = {}) {
      super();
      wt(this, v);
      wt(this, _);
      _t(this, _, p);
    }
    onAddInt(p) {
      const E = document.createElement("div");
      E.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
      const {
        marker: S,
        showResultMarkers: M,
        flyTo: C,
        fullGeometryStyle: w,
        ...L
      } = Z(this, _), k = typeof C == "boolean" ? {} : C, G = {
        mapController: Jr(
          p,
          e,
          S,
          M,
          k,
          k,
          w
        ),
        flyTo: C === void 0 ? !0 : !!C,
        apiKey: "",
        // just to satisfy apiKey; TODO find a better solution
        ...t == null ? void 0 : t(p, E),
        ...L
      };
      if (!G.apiKey)
        throw new Error("no apiKey provided");
      return _t(this, v, new yr({ target: E, props: G })), Z(this, v).$on("select", (N) => {
        this.fire(new r(this, N.detail));
      }), Z(this, v).$on("pick", (N) => {
        this.fire(new c(this, N.detail.feature));
      }), Z(this, v).$on("featureslisted", (N) => {
        this.fire(new s(this, N.detail.features));
      }), Z(this, v).$on("featuresmarked", (N) => {
        this.fire(new u(this, N.detail.features));
      }), Z(this, v).$on("response", (N) => {
        this.fire(
          new d(
            this,
            N.detail.url,
            N.detail.featureCollection
          )
        );
      }), Z(this, v).$on("optionsvisibilitychange", (N) => {
        this.fire(
          new o(this, N.detail.optionsVisible)
        );
      }), Z(this, v).$on("reversetoggle", (N) => {
        this.fire(new a(this, N.detail.reverse));
      }), Z(this, v).$on("querychange", (N) => {
        this.fire(new l(this, N.detail.query));
      }), E;
    }
    on(p, E) {
      return super.on(p, E);
    }
    once(p, E) {
      return super.once(p, E);
    }
    off(p, E) {
      return super.off(p, E);
    }
    listens(p) {
      return super.listens(p);
    }
    setOptions(p) {
      var L;
      Object.assign(Z(this, _), p);
      const {
        marker: E,
        showResultMarkers: S,
        flyTo: M,
        fullGeometryStyle: C,
        ...w
      } = Z(this, _);
      (L = Z(this, v)) == null || L.$set(w);
    }
    setQuery(p, E = !0) {
      var S;
      (S = Z(this, v)) == null || S.setQuery(p, E);
    }
    clearMap() {
      var p;
      (p = Z(this, v)) == null || p.clearMap();
    }
    clearList() {
      var p;
      (p = Z(this, v)) == null || p.clearList();
    }
    setReverseMode(p) {
      var E;
      (E = Z(this, v)) == null || E.$set({ reverseActive: p });
    }
    focus() {
      var p;
      (p = Z(this, v)) == null || p.focus();
    }
    blur() {
      var p;
      (p = Z(this, v)) == null || p.blur();
    }
    onRemove() {
      var p;
      (p = Z(this, v)) == null || p.$destroy();
    }
  }
  return v = new WeakMap(), _ = new WeakMap(), {
    MapLibreBasedGeocodingControl: f,
    events: {
      SelectEvent: r,
      FeaturesListedEvent: s,
      FeaturesMarkedEvent: u,
      OptionsVisibilityChangeEvent: o,
      PickEvent: c,
      QueryChangeEvent: l,
      ResponseEvent: d,
      ReverseToggleEvent: a
    }
  };
}
const { MapLibreBasedGeocodingControl: es, events: Me } = $r(
  qt.Evented,
  qt,
  (i, e) => {
    const t = {};
    if (!("getSdkConfig" in i && typeof i.getSdkConfig == "function"))
      throw new Error("MapTiler SDK not detected");
    const { primaryLanguage: n, apiKey: r } = i.getSdkConfig();
    t.apiKey = r;
    const s = /^([a-z]{2})($|_|-)/.exec(n);
    return s && (t.language = s[1]), e.className += " maptiler-ctrl", t;
  }
);
class ns extends es {
  onAdd(e) {
    return super.onAddInt(e);
  }
}
const rs = Me.SelectEvent, ss = Me.FeaturesListedEvent, os = Me.FeaturesMarkedEvent, ls = Me.OptionsVisibilityChangeEvent, us = Me.PickEvent, as = Me.QueryChangeEvent, cs = Me.ResponseEvent, fs = Me.ReverseToggleEvent;
export {
  ss as FeaturesListedEvent,
  os as FeaturesMarkedEvent,
  ns as GeocodingControl,
  ls as OptionsVisibilityChangeEvent,
  us as PickEvent,
  as as QueryChangeEvent,
  cs as ResponseEvent,
  fs as ReverseToggleEvent,
  rs as SelectEvent,
  Jr as createMapLibreGlMapController
};
//# sourceMappingURL=maptilersdk.js.map
