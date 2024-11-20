var oi = Object.defineProperty;
var si = (i, e, t) => e in i ? oi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ye = (i, e, t) => si(i, typeof e != "symbol" ? e + "" : e, t);
import { forwardRef as ai, useRef as ut, useEffect as $e, useImperativeHandle as li, createElement as ui } from "react";
function A() {
}
function ci(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Rt(i) {
  return i();
}
function ct() {
  return /* @__PURE__ */ Object.create(null);
}
function re(i) {
  i.forEach(Rt);
}
function zt(i) {
  return typeof i == "function";
}
function me(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ie;
function K(i, e) {
  return i === e ? !0 : (Ie || (Ie = document.createElement("a")), Ie.href = e, i === Ie.href);
}
function di(i) {
  return Object.keys(i).length === 0;
}
function fi(i, e, t, n) {
  if (i) {
    const o = Ot(i, e, t, n);
    return i[0](o);
  }
}
function Ot(i, e, t, n) {
  return i[1] && n ? ci(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function mi(i, e, t, n) {
  if (i[2] && n) {
    const o = i[2](n(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const u = [], a = Math.max(e.dirty.length, o.length);
      for (let r = 0; r < a; r += 1)
        u[r] = e.dirty[r] | o[r];
      return u;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function gi(i, e, t, n, o, u) {
  if (o) {
    const a = Ot(e, t, n, u);
    i.p(a, o);
  }
}
function bi(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function dt(i) {
  return i ?? "";
}
function M(i, e) {
  i.appendChild(e);
}
function B(i, e, t) {
  i.insertBefore(e, t || null);
}
function D(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function W(i) {
  return document.createElement(i);
}
function te(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ae(i) {
  return document.createTextNode(i);
}
function J() {
  return ae(" ");
}
function hi() {
  return ae("");
}
function V(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function vi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function l(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Li(i) {
  return Array.from(i.childNodes);
}
function ke(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ft(i, e) {
  i.value = e ?? "";
}
function se(i, e, t) {
  i.classList.toggle(e, !!t);
}
function _i(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Ce;
function Te(i) {
  Ce = i;
}
function Dt() {
  if (!Ce) throw new Error("Function called outside component initialization");
  return Ce;
}
function yi(i) {
  Dt().$$.on_destroy.push(i);
}
function wi() {
  const i = Dt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const u = _i(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return o.slice().forEach((a) => {
        a.call(i, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function mt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const we = [], tt = [];
let Ee = [];
const gt = [], Ei = /* @__PURE__ */ Promise.resolve();
let it = !1;
function Si() {
  it || (it = !0, Ei.then(Ut));
}
function nt(i) {
  Ee.push(i);
}
const et = /* @__PURE__ */ new Set();
let ye = 0;
function Ut() {
  if (ye !== 0)
    return;
  const i = Ce;
  do {
    try {
      for (; ye < we.length; ) {
        const e = we[ye];
        ye++, Te(e), pi(e.$$);
      }
    } catch (e) {
      throw we.length = 0, ye = 0, e;
    }
    for (Te(null), we.length = 0, ye = 0; tt.length; ) tt.pop()();
    for (let e = 0; e < Ee.length; e += 1) {
      const t = Ee[e];
      et.has(t) || (et.add(t), t());
    }
    Ee.length = 0;
  } while (we.length);
  for (; gt.length; )
    gt.pop()();
  it = !1, et.clear(), Te(i);
}
function pi(i) {
  if (i.fragment !== null) {
    i.update(), re(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(nt);
  }
}
function Ni(i) {
  const e = [], t = [];
  Ee.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), Ee = e;
}
const Ae = /* @__PURE__ */ new Set();
let fe;
function Be() {
  fe = {
    r: 0,
    c: [],
    p: fe
    // parent group
  };
}
function Fe() {
  fe.r || re(fe.c), fe = fe.p;
}
function F(i, e) {
  i && i.i && (Ae.delete(i), i.i(e));
}
function Q(i, e, t, n) {
  if (i && i.o) {
    if (Ae.has(i)) return;
    Ae.add(i), fe.c.push(() => {
      Ae.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function bt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Mi(i, e) {
  Q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Ti(i, e, t, n, o, u, a, r, f, c, m, v) {
  let h = i.length, y = u.length, _ = h;
  const R = {};
  for (; _--; ) R[i[_].key] = _;
  const L = [], E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), k = [];
  for (_ = y; _--; ) {
    const d = v(o, u, _), g = t(d);
    let T = a.get(g);
    T ? k.push(() => T.p(d, e)) : (T = c(g, d), T.c()), E.set(g, L[_] = T), g in R && C.set(g, Math.abs(_ - R[g]));
  }
  const p = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
  function z(d) {
    F(d, 1), d.m(r, m), a.set(d.key, d), m = d.first, y--;
  }
  for (; h && y; ) {
    const d = L[y - 1], g = i[h - 1], T = d.key, Z = g.key;
    d === g ? (m = d.first, h--, y--) : E.has(Z) ? !a.has(T) || p.has(T) ? z(d) : H.has(Z) ? h-- : C.get(T) > C.get(Z) ? (H.add(T), z(d)) : (p.add(Z), h--) : (f(g, a), h--);
  }
  for (; h--; ) {
    const d = i[h];
    E.has(d.key) || f(d, a);
  }
  for (; y; ) z(L[y - 1]);
  return re(k), L;
}
function le(i) {
  i && i.c();
}
function ie(i, e, t) {
  const { fragment: n, after_update: o } = i.$$;
  n && n.m(e, t), nt(() => {
    const u = i.$$.on_mount.map(Rt).filter(zt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : re(u), i.$$.on_mount = [];
  }), o.forEach(nt);
}
function ne(i, e) {
  const t = i.$$;
  t.fragment !== null && (Ni(t.after_update), re(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ki(i, e) {
  i.$$.dirty[0] === -1 && (we.push(i), Si(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ge(i, e, t, n, o, u, a = null, r = [-1]) {
  const f = Ce;
  Te(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: A,
    not_equal: o,
    bound: ct(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: ct(),
    dirty: r,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  a && a(c.root);
  let m = !1;
  if (c.ctx = t ? t(i, e.props || {}, (v, h, ...y) => {
    const _ = y.length ? y[0] : h;
    return c.ctx && o(c.ctx[v], c.ctx[v] = _) && (!c.skip_bound && c.bound[v] && c.bound[v](_), m && ki(i, v)), h;
  }) : [], c.update(), m = !0, re(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = Li(e.target);
      c.fragment && c.fragment.l(v), v.forEach(D);
    } else
      c.fragment && c.fragment.c();
    e.intro && F(i.$$.fragment), ie(i, e.target, e.anchor), Ut();
  }
  Te(f);
}
class be {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ye(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ye(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ne(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!zt(t))
      return A;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const o = n.indexOf(t);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !di(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ci = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ci);
function Wi(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), l(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), l(e, "viewBox", "0 0 14 14"), l(e, "width", "13"), l(e, "height", "13"), l(e, "class", "svelte-en2qvf");
    },
    m(n, o) {
      B(n, e, o), M(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(e);
    }
  };
}
class It extends be {
  constructor(e) {
    super(), ge(this, e, null, Wi, me, {});
  }
}
function Ri(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), l(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), l(e, "viewBox", "0 0 30 30"), l(e, "fill", "none"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "class", "svelte-d2loi5");
    },
    m(n, o) {
      B(n, e, o), M(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(e);
    }
  };
}
class At extends be {
  constructor(e) {
    super(), ge(this, e, null, Ri, me, {});
  }
}
function zi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Oi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Di(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ui(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ii(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ai(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Bi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Fi(i) {
  let e, t, n, o;
  return {
    c() {
      e = W("img"), K(e.src, t = /*imageUrl*/
      i[5]) || l(e, "src", t), l(
        e,
        "alt",
        /*category*/
        i[4]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(u, a) {
      B(u, e, a), n || (o = V(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      u[5]) && l(e, "src", t), a & /*category*/
      16 && l(
        e,
        "alt",
        /*category*/
        u[4]
      );
    },
    d(u) {
      u && D(e), n = !1, o();
    }
  };
}
function ht(i) {
  let e, t;
  return {
    c() {
      e = W("span"), t = ae(
        /*placeType*/
        i[6]
      ), l(e, "class", "secondary svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o), M(e, t);
    },
    p(n, o) {
      o & /*placeType*/
      64 && ke(
        t,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Hi(i) {
  let e, t, n, o, u, a, r, f, c, m = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), v, h, y = (
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
  ), _, R, L = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), E, C, k;
  function p(g, T) {
    return T & /*feature*/
    1 && (t = null), T & /*feature*/
    1 && (n = null), T & /*feature*/
    1 && (o = null), T & /*feature*/
    1 && (u = null), /*imageUrl*/
    g[5] ? Fi : (
      /*feature*/
      g[0].address ? Bi : (t == null && (t = !!/*feature*/
      g[0].id.startsWith("road.")), t ? Ai : (n == null && (n = !!/*feature*/
      g[0].id.startsWith("address.")), n ? Ii : (o == null && (o = !!/*feature*/
      g[0].id.startsWith("postal_code.")), o ? Ui : (u == null && (u = !!/*feature*/
      g[0].id.startsWith("poi.")), u ? Di : (
        /*isReverse*/
        g[7] ? Oi : zi
      )))))
    );
  }
  let H = p(i, -1), z = H(i), d = y && ht(i);
  return {
    c() {
      e = W("li"), z.c(), a = J(), r = W("span"), f = W("span"), c = W("span"), v = ae(m), h = J(), d && d.c(), _ = J(), R = W("span"), E = ae(L), l(c, "class", "primary svelte-ltkwvy"), l(f, "class", "svelte-ltkwvy"), l(R, "class", "line2 svelte-ltkwvy"), l(r, "class", "texts svelte-ltkwvy"), l(e, "tabindex", "0"), l(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), l(e, "class", "svelte-ltkwvy"), se(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(g, T) {
      B(g, e, T), z.m(e, null), M(e, a), M(e, r), M(r, f), M(f, c), M(c, v), M(f, h), d && d.m(f, null), M(r, _), M(r, R), M(R, E), C || (k = [
        V(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        V(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], C = !0);
    },
    p(g, [T]) {
      H === (H = p(g, T)) && z ? z.p(g, T) : (z.d(1), z = H(g), z && (z.c(), z.m(e, a))), T & /*feature*/
      1 && m !== (m = /*isReverse*/
      (g[7] ? (
        /*feature*/
        g[0].place_name
      ) : (
        /*feature*/
        g[0].place_name.replace(/,.*/, "")
      )) + "") && ke(v, m), T & /*showPlaceType, feature, imageUrl*/
      37 && (y = /*showPlaceType*/
      g[2] === "always" || /*showPlaceType*/
      g[2] !== "never" && !/*feature*/
      g[0].address && !/*feature*/
      g[0].id.startsWith("road.") && !/*feature*/
      g[0].id.startsWith("address.") && !/*feature*/
      g[0].id.startsWith("postal_code.") && (!/*feature*/
      g[0].id.startsWith("poi.") || !/*imageUrl*/
      g[5]) && !/*isReverse*/
      g[7]), y ? d ? d.p(g, T) : (d = ht(g), d.c(), d.m(f, null)) : d && (d.d(1), d = null), T & /*feature*/
      1 && L !== (L = /*isReverse*/
      (g[7] ? "" : (
        /*feature*/
        g[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && ke(E, L), T & /*selected*/
      2 && l(
        e,
        "data-selected",
        /*selected*/
        g[1]
      ), T & /*selected*/
      2 && se(
        e,
        "selected",
        /*selected*/
        g[1]
      );
    },
    i: A,
    o: A,
    d(g) {
      g && D(e), z.d(), d && d.d(), C = !1, re(k);
    }
  };
}
function Pi(i, e, t) {
  var k;
  let n, o, { feature: u } = e, { selected: a = !1 } = e, { showPlaceType: r } = e, { missingIconsCache: f } = e, { iconsBaseUrl: c } = e;
  const m = (k = u.properties) == null ? void 0 : k.categories;
  let v, h, y = 0, _ = u.place_type[0] === "reverse";
  function R() {
    h && f.add(h), t(10, y++, y);
  }
  function L(p) {
    mt.call(this, i, p);
  }
  function E(p) {
    mt.call(this, i, p);
  }
  const C = () => R();
  return i.$$set = (p) => {
    "feature" in p && t(0, u = p.feature), "selected" in p && t(1, a = p.selected), "showPlaceType" in p && t(2, r = p.showPlaceType), "missingIconsCache" in p && t(9, f = p.missingIconsCache), "iconsBaseUrl" in p && t(3, c = p.iconsBaseUrl);
  }, i.$$.update = () => {
    var p, H, z, d;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, n--, n), t(4, v = m == null ? void 0 : m[n]), t(5, h = v ? c + v.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!h || f.has(h)));
    i.$$.dirty & /*feature*/
    1 && t(6, o = ((H = (p = u.properties) == null ? void 0 : p.categories) == null ? void 0 : H.join(", ")) ?? ((d = (z = u.properties) == null ? void 0 : z.place_type_name) == null ? void 0 : d[0]) ?? u.place_type[0]);
  }, t(11, n = (m == null ? void 0 : m.length) ?? 0), [
    u,
    a,
    r,
    c,
    v,
    h,
    o,
    _,
    R,
    f,
    y,
    n,
    L,
    E,
    C
  ];
}
class ji extends be {
  constructor(e) {
    super(), ge(this, e, Pi, Hi, me, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Zi(i) {
  let e;
  return {
    c() {
      e = W("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', l(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      B(t, e, n);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && D(e);
    }
  };
}
class Gi extends be {
  constructor(e) {
    super(), ge(this, e, null, Zi, me, {});
  }
}
function qi(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), l(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), l(e, "viewBox", "0 0 60.006 21.412"), l(e, "width", "14"), l(e, "height", "20"), l(e, "class", "svelte-en2qvf");
    },
    m(n, o) {
      B(n, e, o), M(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(e);
    }
  };
}
class Qi extends be {
  constructor(e) {
    super(), ge(this, e, null, qi, me, {});
  }
}
function Ki(i) {
  let e, t, n;
  return {
    c() {
      e = te("svg"), t = te("circle"), n = te("path"), l(t, "cx", "4.789"), l(t, "cy", "4.787"), l(t, "r", "3.85"), l(t, "class", "svelte-1aq105l"), l(n, "d", "M12.063 12.063 7.635 7.635"), l(n, "class", "svelte-1aq105l"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "width", "13"), l(e, "height", "13"), l(e, "viewBox", "0 0 13 13"), l(e, "class", "svelte-1aq105l");
    },
    m(o, u) {
      B(o, e, u), M(e, t), M(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(o) {
      o && D(e);
    }
  };
}
class Vi extends be {
  constructor(e) {
    super(), ge(this, e, null, Ki, me, {});
  }
}
function xi(i, e, t) {
  const n = e[1], o = e[0], u = n - o;
  return i === n && t ? i : ((i - o) % u + u) % u + o;
}
function vt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ne;
async function Ji(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const o of e ?? [])
    if (!(n && (o.minZoom != null && o.minZoom > n[0] || o.maxZoom != null && o.maxZoom < n[0]))) {
      if (o.type === "fixed")
        return o.coordinates.join(",");
      e: if (o.type === "client-geolocation") {
        if (Ne && o.cachedLocationExpiry && Ne.time + o.cachedLocationExpiry > Date.now()) {
          if (!Ne.coords)
            break e;
          return Ne.coords;
        }
        let u;
        try {
          return u = await new Promise((a, r) => {
            t.signal.addEventListener("abort", () => {
              r(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (f) => {
                a(
                  [f.coords.longitude, f.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (f) => {
                r(f);
              },
              o
            );
          }), u;
        } catch {
        } finally {
          o.cachedLocationExpiry && (Ne = {
            time: Date.now(),
            coords: u
          });
        }
        if (t.signal.aborted)
          return;
      }
      if (o.type === "server-geolocation")
        return "ip";
      if (n && o.type === "map-center")
        return n[1].toFixed(6) + "," + n[2].toFixed(6);
    }
}
const Xi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Lt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, _t = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, yt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, wt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Et = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Yi(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((y) => Number(y.trim())), t = Number(e[0]), n = Number(e[1]), o = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", r = n > 0 ? "E" : "W";
    let f;
    i == "DD" && (f = `${o}° ${a}, ${u}° ${r}`);
    const c = Math.floor(o), m = Math.floor(u), v = (o - c) * 60, h = (u - m) * 60;
    if (i == "DM") {
      let y = St(v, 3).toFixed(3).padStart(6, "0"), _ = St(h, 3).toFixed(3).padStart(6, "0");
      y.endsWith(".000") && _.endsWith(".000") && (y = y.replace(/\.000$/, ""), _ = _.replace(/\.000$/, "")), f = `${c}° ${y}' ${a}, ${m}° ${_}' ${r}`;
    }
    if (i == "DMS") {
      const y = Math.floor(v), _ = Math.floor(h);
      let R = ((v - y) * 60).toFixed(1).padStart(4, "0"), L = ((h - _) * 60).toFixed(1).padStart(4, "0");
      const E = y.toString().padStart(2, "0"), C = _.toString().padStart(2, "0");
      R.endsWith(".0") && L.endsWith(".0") && (R = R.replace(/\.0$/, ""), L = L.replace(/\.0$/, "")), f = `${c}° ${E}' ${R}" ${a}, ${m}° ${C}' ${L}" ${r}`;
    }
    return f;
  } else
    throw new Error("no decimal coordinates to convert");
}
function St(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function rt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, o = "", u = "", a = null, r = [], f = !1;
  if (Xi.test(i))
    throw new Error("invalid coordinate value");
  if (Lt.test(i))
    if (r = Lt.exec(i), f = Me(r), f)
      t = Math.abs(r[1]) + r[2] / 60, Number(r[1]) < 0 && (t *= -1), n = Math.abs(r[3]) + r[4] / 60, Number(r[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (_t.test(i))
    if (r = _t.exec(i), f = Me(r), f) {
      if (t = r[2], n = r[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      r[1] ? (o = r[1], u = r[5]) : r[4] && (o = r[4], u = r[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (yt.test(i))
    if (r = yt.exec(i), f = Me(r), f)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4] / 60, a = "DM"), r[6] && (t += r[6].replace(",", ".") / 3600, a = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[9])), r[11] && (n += r[11] / 60), r[13] && (n += r[13].replace(",", ".") / 3600), parseInt(r[9]) < 0 && (n = -1 * n), r[1] ? (o = r[1], u = r[8]) : r[7] && (o = r[7], u = r[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (wt.test(i))
    if (r = wt.exec(i), f = Me(r), f)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4] / 60, a = "DM"), r[6] && (t += r[6] / 3600, a = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[10])), r[12] && (n += r[12] / 60), r[14] && (n += r[14] / 3600), parseInt(r[10]) < 0 && (n = -1 * n), r[1] ? (o = r[1], u = r[9]) : r[8] && (o = r[8], u = r[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Et.test(i)) {
    if (r = Et.exec(i), f = Me(r), r.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (f)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4].replace(",", ".") / 60, a = "DM"), r[6] && (t += r[6].replace(",", ".") / 3600, a = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[10])), r[12] && (n += r[12].replace(",", ".") / 60), r[14] && (n += r[14].replace(",", ".") / 3600), parseInt(r[10]) < 0 && (n = -1 * n), r[1] ? (o = r[1], u = r[9]) : r[8] && (o = r[8], u = r[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (f) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (o && !u || !o && u)
      throw new Error("invalid coordinates value");
    if (o && o == u)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let c = /S|SOUTH/i;
    c.test(o) && t > 0 && (t = -1 * t), c = /W|WEST/i, c.test(u) && n > 0 && (n = -1 * n);
    const m = r[0].trim();
    let v, h;
    const y = /[,/;\u0020]/g, _ = m.match(y);
    if (_ == null) {
      const E = Math.floor(i.length / 2);
      v = m.substring(0, E).trim(), h = m.substring(E).trim();
    } else {
      let E;
      _.length % 2 == 1 ? E = Math.floor(_.length / 2) : E = _.length / 2 - 1;
      let C = 0;
      if (E == 0)
        C = m.indexOf(_[0]), v = m.substring(0, C).trim(), h = m.substring(C + 1).trim();
      else {
        let k = 0, p = 0;
        for (; k <= E; )
          C = m.indexOf(_[k], p), p = C + 1, k++;
        v = m.substring(0, C).trim(), h = m.substring(C + 1).trim();
      }
    }
    const R = v.split(".");
    if (R.length == 2 && R[1] == 0 && R[1].length != 2)
      throw new Error("invalid coordinates format");
    const L = h.split(".");
    if (L.length == 2 && L[1] == 0 && L[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(v) || /^\d+$/.test(h))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: m,
      verbatimLatitude: v,
      verbatimLongitude: h,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: a,
      closeEnough: $i,
      toCoordinateFormat: Yi
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Me(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, o = e.length / 2;
  for (let u = 0; u < o; u++) {
    const a = e[u], r = e[u + o], f = t.test(a) && t.test(r), c = n.test(a) && n.test(r), m = a == r;
    if (!(a == null && r == null)) {
      if (a == null || r == null)
        return !1;
      if (f || c || m)
        continue;
      return !1;
    }
  }
  return !0;
}
function pt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function $i(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return pt(this.decimalLatitude, Number(e[0])) && pt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const en = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
rt.to = en;
const tn = [
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
], nn = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, rn = [
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
], on = [
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
function sn() {
  const i = [];
  return tn.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...nn });
  }), [...i, ...rn, ...on];
}
const an = sn();
rt.formats = an.map((i) => i.verbatimCoordinates);
const ln = rt;
function Nt(i, e, t) {
  const n = i.slice();
  return n[84] = e[t], n[86] = t, n;
}
function Mt(i) {
  let e, t;
  return e = new Gi({}), {
    c() {
      le(e.$$.fragment);
    },
    m(n, o) {
      ie(e, n, o), t = !0;
    },
    i(n) {
      t || (F(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ne(e, n);
    }
  };
}
function Tt(i) {
  let e, t, n, o, u;
  return t = new Qi({}), {
    c() {
      e = W("button"), le(t.$$.fragment), l(e, "type", "button"), l(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), l(e, "class", "svelte-bz0zu3"), se(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, r) {
      B(a, e, r), ie(t, e, null), n = !0, o || (u = V(
        e,
        "click",
        /*click_handler_2*/
        i[69]
      ), o = !0);
    },
    p(a, r) {
      (!n || r[0] & /*reverseButtonTitle*/
      512) && l(
        e,
        "title",
        /*reverseButtonTitle*/
        a[9]
      ), (!n || r[0] & /*reverseActive*/
      1) && se(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      n || (F(t.$$.fragment, a), n = !0);
    },
    o(a) {
      Q(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && D(e), ne(t), o = !1, u();
    }
  };
}
function un(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), o, u, a, r = bt(
    /*listFeatures*/
    i[14]
  );
  const f = (c) => (
    /*feature*/
    c[84].id + /*feature*/
    (c[84].address ? "," + /*feature*/
    c[84].address : "")
  );
  for (let c = 0; c < r.length; c += 1) {
    let m = Nt(i, r, c), v = f(m);
    n.set(v, t[c] = kt(v, m));
  }
  return {
    c() {
      e = W("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      l(e, "class", "options svelte-bz0zu3");
    },
    m(c, m) {
      B(c, e, m);
      for (let v = 0; v < t.length; v += 1)
        t[v] && t[v].m(e, null);
      o = !0, u || (a = [
        V(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[73]
        ),
        V(
          e,
          "blur",
          /*blur_handler_1*/
          i[74]
        )
      ], u = !0);
    },
    p(c, m) {
      m[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (r = bt(
        /*listFeatures*/
        c[14]
      ), Be(), t = Ti(t, m, f, 1, c, r, n, e, Mi, kt, null, Nt), Fe());
    },
    i(c) {
      if (!o) {
        for (let m = 0; m < r.length; m += 1)
          F(t[m]);
        o = !0;
      }
    },
    o(c) {
      for (let m = 0; m < t.length; m += 1)
        Q(t[m]);
      o = !1;
    },
    d(c) {
      c && D(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      u = !1, re(a);
    }
  };
}
function cn(i) {
  let e, t, n, o, u, a;
  return t = new At({}), {
    c() {
      e = W("div"), le(t.$$.fragment), n = J(), o = W("div"), u = ae(
        /*noResultsMessage*/
        i[7]
      ), l(o, "class", "svelte-bz0zu3"), l(e, "class", "no-results svelte-bz0zu3");
    },
    m(r, f) {
      B(r, e, f), ie(t, e, null), M(e, n), M(e, o), M(o, u), a = !0;
    },
    p(r, f) {
      (!a || f[0] & /*noResultsMessage*/
      128) && ke(
        u,
        /*noResultsMessage*/
        r[7]
      );
    },
    i(r) {
      a || (F(t.$$.fragment, r), a = !0);
    },
    o(r) {
      Q(t.$$.fragment, r), a = !1;
    },
    d(r) {
      r && D(e), ne(t);
    }
  };
}
function dn(i) {
  let e = "", t;
  return {
    c() {
      t = ae(e);
    },
    m(n, o) {
      B(n, t, o);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(t);
    }
  };
}
function fn(i) {
  let e, t, n, o, u, a, r, f, c, m, v;
  return t = new At({}), f = new It({}), {
    c() {
      e = W("div"), le(t.$$.fragment), n = J(), o = W("div"), u = ae(
        /*errorMessage*/
        i[6]
      ), a = J(), r = W("button"), le(f.$$.fragment), l(o, "class", "svelte-bz0zu3"), l(r, "class", "svelte-bz0zu3"), l(e, "class", "error svelte-bz0zu3");
    },
    m(h, y) {
      B(h, e, y), ie(t, e, null), M(e, n), M(e, o), M(o, u), M(e, a), M(e, r), ie(f, r, null), c = !0, m || (v = V(
        r,
        "click",
        /*click_handler_3*/
        i[70]
      ), m = !0);
    },
    p(h, y) {
      (!c || y[0] & /*errorMessage*/
      64) && ke(
        u,
        /*errorMessage*/
        h[6]
      );
    },
    i(h) {
      c || (F(t.$$.fragment, h), F(f.$$.fragment, h), c = !0);
    },
    o(h) {
      Q(t.$$.fragment, h), Q(f.$$.fragment, h), c = !1;
    },
    d(h) {
      h && D(e), ne(t), ne(f), m = !1, v();
    }
  };
}
function kt(i, e) {
  let t, n, o;
  function u() {
    return (
      /*mouseenter_handler*/
      e[71](
        /*i*/
        e[86]
      )
    );
  }
  function a() {
    return (
      /*focus_handler_1*/
      e[72](
        /*feature*/
        e[84]
      )
    );
  }
  return n = new ji({
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
  }), n.$on("mouseenter", u), n.$on("focus", a), {
    key: i,
    first: null,
    c() {
      t = hi(), le(n.$$.fragment), this.first = t;
    },
    m(r, f) {
      B(r, t, f), ie(n, r, f), o = !0;
    },
    p(r, f) {
      e = r;
      const c = {};
      f[0] & /*listFeatures*/
      16384 && (c.feature = /*feature*/
      e[84]), f[0] & /*showPlaceType*/
      1024 && (c.showPlaceType = /*showPlaceType*/
      e[10]), f[0] & /*selectedItemIndex, listFeatures*/
      49152 && (c.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[86]), f[0] & /*iconsBaseUrl*/
      4096 && (c.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(c);
    },
    i(r) {
      o || (F(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Q(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && D(t), ne(n, r);
    }
  };
}
function mn(i) {
  let e, t, n, o, u, a, r, f, c, m, v, h, y, _, R, L, E, C, k, p, H, z = !1;
  u = new Vi({}), v = new It({});
  let d = (
    /*abortController*/
    i[19] && Mt()
  ), g = (
    /*enableReverse*/
    i[5] === "button" && Tt(i)
  );
  const T = (
    /*#slots*/
    i[61].default
  ), Z = fi(
    T,
    i,
    /*$$scope*/
    i[60],
    null
  ), he = [fn, dn, cn, un], q = [];
  function Se(b, U) {
    var ee, ue;
    return (
      /*error*/
      b[18] ? 0 : (
        /*focusedDelayed*/
        b[16] ? (
          /*listFeatures*/
          ((ee = b[14]) == null ? void 0 : ee.length) === 0 ? 2 : (
            /*focusedDelayed*/
            b[16] && /*listFeatures*/
            ((ue = b[14]) != null && ue.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(L = Se(i)) && (E = q[L] = he[L](i)), {
    c() {
      e = J(), t = W("form"), n = W("div"), o = W("button"), le(u.$$.fragment), a = J(), r = W("input"), f = J(), c = W("div"), m = W("button"), le(v.$$.fragment), h = J(), d && d.c(), y = J(), g && g.c(), _ = J(), Z && Z.c(), R = J(), E && E.c(), l(o, "class", "search-button svelte-bz0zu3"), l(o, "type", "button"), l(
        r,
        "placeholder",
        /*placeholder*/
        i[8]
      ), l(
        r,
        "aria-label",
        /*placeholder*/
        i[8]
      ), l(r, "class", "svelte-bz0zu3"), l(m, "type", "button"), l(
        m,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), l(m, "class", "svelte-bz0zu3"), l(c, "class", "clear-button-container svelte-bz0zu3"), se(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), l(n, "class", "input-group svelte-bz0zu3"), l(t, "tabindex", "0"), l(t, "class", C = dt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), se(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(b, U) {
      B(b, e, U), B(b, t, U), M(t, n), M(n, o), ie(u, o, null), M(n, a), M(n, r), i[63](r), ft(
        r,
        /*searchValue*/
        i[1]
      ), M(n, f), M(n, c), M(c, m), ie(v, m, null), M(c, h), d && d.m(c, null), M(n, y), g && g.m(n, null), M(n, _), Z && Z.m(n, null), M(t, R), ~L && q[L].m(t, null), k = !0, p || (H = [
        V(
          o,
          "click",
          /*click_handler*/
          i[62]
        ),
        V(
          r,
          "input",
          /*input_1_input_handler*/
          i[64]
        ),
        V(
          r,
          "focus",
          /*focus_handler*/
          i[65]
        ),
        V(
          r,
          "blur",
          /*blur_handler*/
          i[66]
        ),
        V(
          r,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        V(
          r,
          "input",
          /*input_handler*/
          i[67]
        ),
        V(
          m,
          "click",
          /*click_handler_1*/
          i[68]
        ),
        V(t, "submit", vi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], p = !0);
    },
    p(b, U) {
      (!k || U[0] & /*placeholder*/
      256) && l(
        r,
        "placeholder",
        /*placeholder*/
        b[8]
      ), (!k || U[0] & /*placeholder*/
      256) && l(
        r,
        "aria-label",
        /*placeholder*/
        b[8]
      ), U[0] & /*searchValue*/
      2 && r.value !== /*searchValue*/
      b[1] && ft(
        r,
        /*searchValue*/
        b[1]
      ), (!k || U[0] & /*clearButtonTitle*/
      8) && l(
        m,
        "title",
        /*clearButtonTitle*/
        b[3]
      ), /*abortController*/
      b[19] ? d ? U[0] & /*abortController*/
      524288 && F(d, 1) : (d = Mt(), d.c(), F(d, 1), d.m(c, null)) : d && (Be(), Q(d, 1, 1, () => {
        d = null;
      }), Fe()), (!k || U[0] & /*searchValue*/
      2) && se(
        c,
        "displayable",
        /*searchValue*/
        b[1] !== ""
      ), /*enableReverse*/
      b[5] === "button" ? g ? (g.p(b, U), U[0] & /*enableReverse*/
      32 && F(g, 1)) : (g = Tt(b), g.c(), F(g, 1), g.m(n, _)) : g && (Be(), Q(g, 1, 1, () => {
        g = null;
      }), Fe()), Z && Z.p && (!k || U[1] & /*$$scope*/
      536870912) && gi(
        Z,
        T,
        b,
        /*$$scope*/
        b[60],
        k ? mi(
          T,
          /*$$scope*/
          b[60],
          U,
          null
        ) : bi(
          /*$$scope*/
          b[60]
        ),
        null
      );
      let ee = L;
      L = Se(b), L === ee ? ~L && q[L].p(b, U) : (E && (Be(), Q(q[ee], 1, 1, () => {
        q[ee] = null;
      }), Fe()), ~L ? (E = q[L], E ? E.p(b, U) : (E = q[L] = he[L](b), E.c()), F(E, 1), E.m(t, null)) : E = null), (!k || U[0] & /*className*/
      4 && C !== (C = dt(
        /*className*/
        b[2]
      ) + " svelte-bz0zu3")) && l(t, "class", C), (!k || U[0] & /*className, collapsed, searchValue*/
      22) && se(
        t,
        "can-collapse",
        /*collapsed*/
        b[4] && /*searchValue*/
        b[1] === ""
      );
    },
    i(b) {
      k || (F(z), F(u.$$.fragment, b), F(v.$$.fragment, b), F(d), F(g), F(Z, b), F(E), k = !0);
    },
    o(b) {
      Q(z), Q(u.$$.fragment, b), Q(v.$$.fragment, b), Q(d), Q(g), Q(Z, b), Q(E), k = !1;
    },
    d(b) {
      b && (D(e), D(t)), ne(u), i[63](null), ne(v), d && d.d(), g && g.d(), Z && Z.d(b), ~L && q[L].d(), p = !1, re(H);
    }
  };
}
function gn(i, e, t) {
  let n, o, { $$slots: u = {}, $$scope: a } = e;
  const r = {
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
  let { class: f = void 0 } = e, { apiKey: c } = e, { bbox: m = void 0 } = e, { clearButtonTitle: v = "clear" } = e, { clearOnBlur: h = !1 } = e, { collapsed: y = !1 } = e, { country: _ = void 0 } = e, { debounceSearch: R = 200 } = e, { enableReverse: L = "never" } = e, { errorMessage: E = "Something went wrong…" } = e, { filter: C = () => !0 } = e, { flyTo: k = !0 } = e, { fuzzyMatch: p = !0 } = e, { language: H = void 0 } = e, { limit: z = void 0 } = e, { mapController: d = void 0 } = e, { minLength: g = 2 } = e, { noResultsMessage: T = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: Z = "Search" } = e, { proximity: he = [{ type: "server-geolocation" }] } = e, { reverseActive: q = L === "always" } = e, { reverseButtonTitle: Se = "toggle reverse geocoding" } = e, { searchValue: b = "" } = e, { pickedResultStyle: U = "full-geometry" } = e, { showPlaceType: ee = "if-needed" } = e, { showResultsWhileTyping: ue = !0 } = e, { selectFirst: ve = !0 } = e, { flyToSelected: He = !1 } = e, { markerOnSelected: We = !0 } = e, { types: ce = void 0 } = e, { exhaustiveReverseGeocoding: Pe = !1 } = e, { excludeTypes: Re = !1 } = e, { zoom: ze = r } = e, { apiUrl: je = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ze = {} } = e, { iconsBaseUrl: ot = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.0.1/icons/" } = e, { adjustUrlQuery: Ge = () => {
  } } = e;
  function Bt() {
    X.focus();
  }
  function Ft() {
    X.blur();
  }
  function st(s, I = !0, G = !1) {
    t(1, b = s), I ? (t(15, O = -1), lt()) : (Ve(!G, G), setTimeout(() => {
      X.focus(), X.select();
    }));
  }
  function Ht() {
    t(14, N = void 0), t(56, w = void 0), t(15, O = -1);
  }
  function Pt() {
    t(55, P = []), t(56, w = void 0);
  }
  let Le = !1, N, P, w, at = "", X, O = -1, Y, Oe = [], de, _e, De, qe;
  const jt = /* @__PURE__ */ new Set(), oe = wi();
  yi(() => {
    d && (d.setEventHandler(void 0), d.indicateReverse(!1), d.setSelectedMarker(-1), d.setFeatures(void 0, void 0, !1));
  });
  function lt(s) {
    if (_e && (clearTimeout(_e), _e = void 0), O > -1 && N)
      t(56, w = N[O]), t(1, b = w.place_type[0] === "reverse" ? w.place_name : w.place_name.replace(/,.*/, "")), t(18, Y = void 0), t(55, P = void 0), t(15, O = -1);
    else if (b) {
      const I = s || !Qe(b);
      Ke(b, { exact: !0 }).then(() => {
        t(55, P = N), t(56, w = void 0), I && Zt();
      }).catch((G) => t(18, Y = G));
    }
  }
  function Qe(s) {
    try {
      return ln(s, 6);
    } catch {
      return !1;
    }
  }
  async function Ke(s, { byId: I = !1, exact: G = !1 } = {}) {
    t(18, Y = void 0), de == null || de.abort();
    const x = new AbortController();
    t(19, de = x);
    try {
      const S = Qe(s), j = new URLSearchParams();
      if (H !== void 0 && j.set("language", Array.isArray(H) ? H.join(",") : H ?? ""), ce && j.set("types", ce.join(",")), Re && j.set("excludeTypes", String(Re)), m && j.set("bbox", m.map((Ue) => Ue.toFixed(6)).join(",")), _ && j.set("country", Array.isArray(_) ? _.join(",") : _), !I && !S) {
        const Ue = await Ji(d, he, x);
        Ue && j.set("proximity", Ue), (G || !ue) && j.set("autocomplete", "false"), j.set("fuzzyMatch", String(p));
      }
      z !== void 0 && (Pe || !S || (ce == null ? void 0 : ce.length) === 1) && j.set("limit", String(z)), j.set("key", c), Ge(j);
      const $ = je + "/" + encodeURIComponent(S ? S.decimalLongitude + "," + S.decimalLatitude : s) + ".json?" + j.toString();
      if ($ === at) {
        I ? (t(14, N = void 0), t(56, w = Oe[0])) : t(14, N = Oe);
        return;
      }
      at = $;
      const Je = await fetch($, { signal: x.signal, ...Ze });
      if (!Je.ok)
        throw new Error(await Je.text());
      const Xe = await Je.json();
      oe("response", { url: $, featureCollection: Xe }), I ? (t(14, N = void 0), t(56, w = Xe.features[0]), Oe = [w]) : (t(14, N = Xe.features.filter(C)), S && N.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + S.decimalLongitude + "_" + S.decimalLatitude,
        text: S.decimalLatitude + ", " + S.decimalLongitude,
        place_name: S.decimalLatitude + ", " + S.decimalLongitude,
        place_type: ["reverse"],
        center: [S.decimalLongitude, S.decimalLatitude],
        bbox: [
          S.decimalLongitude,
          S.decimalLatitude,
          S.decimalLongitude,
          S.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [S.decimalLongitude, S.decimalLatitude]
        }
      }), Oe = N, S && X.focus());
    } catch (S) {
      if (S && typeof S == "object" && "name" in S && S.name === "AbortError")
        return;
      throw S;
    } finally {
      x === de && t(19, de = void 0);
    }
  }
  function Zt() {
    var x;
    if (!(P != null && P.length) || !k)
      return;
    const s = [180, 90, -180, -90], I = !P.some((S) => !S.matching_text);
    let G;
    for (const S of P) {
      const j = pe(S);
      if (G = G === void 0 ? j : j === void 0 ? G : Math.max(G, j), I || !S.matching_text)
        for (const $ of [0, 1, 2, 3])
          s[$] = Math[$ < 2 ? "min" : "max"](s[$], ((x = S.bbox) == null ? void 0 : x[$]) ?? S.center[$ % 2]);
    }
    d && P.length > 0 && (w && s[0] === s[2] && s[1] === s[3] ? d.flyTo(w.center, pe(w)) : d.fitBounds(vt(s), 50, G));
  }
  function pe(s) {
    var G;
    if (!s.bbox || s.bbox[0] !== s.bbox[2] && s.bbox[1] !== s.bbox[3])
      return;
    const I = s.id.replace(/\..*/, "");
    return (Array.isArray((G = s.properties) == null ? void 0 : G.categories) ? s.properties.categories.reduce(
      (x, S) => {
        const j = ze[I + "." + S];
        return x === void 0 ? j : j === void 0 ? x : Math.max(x, j);
      },
      void 0
    ) : void 0) ?? ze[I];
  }
  function Gt(s) {
    t(0, q = L === "always"), t(14, N = void 0), t(56, w = void 0), t(15, O = -1), st(s[1].toFixed(6) + ", " + xi(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function qt(s) {
    if (!N)
      return;
    let I = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    I && (O === (ve ? 0 : -1) && I === -1 && t(15, O = N.length), t(15, O += I), O >= N.length && t(15, O = -1), O < 0 && ve && t(15, O = 0), s.preventDefault());
  }
  function Ve(s = !0, I = !1) {
    if (t(18, Y = void 0), ue || I) {
      if (_e && clearTimeout(_e), b.length < g)
        return;
      const G = b;
      _e = window.setTimeout(
        () => {
          Ke(G).catch((x) => t(18, Y = x));
        },
        s ? R : 0
      );
    } else
      t(14, N = void 0), t(18, Y = void 0);
  }
  function xe(s) {
    t(56, w = s), t(1, b = s.place_name), t(15, O = -1);
  }
  const Qt = () => X.focus();
  function Kt(s) {
    tt[s ? "unshift" : "push"](() => {
      X = s, t(17, X);
    });
  }
  function Vt() {
    b = this.value, t(1, b), t(13, Le), t(28, h);
  }
  const xt = () => t(13, Le = !0), Jt = () => t(13, Le = !1), Xt = () => Ve(), Yt = () => {
    t(1, b = ""), X.focus();
  }, $t = () => t(0, q = !q), ei = () => t(18, Y = void 0), ti = (s) => t(15, O = s), ii = (s) => xe(s), ni = () => {
    ve || t(15, O = -1);
  }, ri = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, f = s.class), "apiKey" in s && t(26, c = s.apiKey), "bbox" in s && t(27, m = s.bbox), "clearButtonTitle" in s && t(3, v = s.clearButtonTitle), "clearOnBlur" in s && t(28, h = s.clearOnBlur), "collapsed" in s && t(4, y = s.collapsed), "country" in s && t(29, _ = s.country), "debounceSearch" in s && t(30, R = s.debounceSearch), "enableReverse" in s && t(5, L = s.enableReverse), "errorMessage" in s && t(6, E = s.errorMessage), "filter" in s && t(31, C = s.filter), "flyTo" in s && t(32, k = s.flyTo), "fuzzyMatch" in s && t(33, p = s.fuzzyMatch), "language" in s && t(34, H = s.language), "limit" in s && t(35, z = s.limit), "mapController" in s && t(36, d = s.mapController), "minLength" in s && t(37, g = s.minLength), "noResultsMessage" in s && t(7, T = s.noResultsMessage), "placeholder" in s && t(8, Z = s.placeholder), "proximity" in s && t(38, he = s.proximity), "reverseActive" in s && t(0, q = s.reverseActive), "reverseButtonTitle" in s && t(9, Se = s.reverseButtonTitle), "searchValue" in s && t(1, b = s.searchValue), "pickedResultStyle" in s && t(39, U = s.pickedResultStyle), "showPlaceType" in s && t(10, ee = s.showPlaceType), "showResultsWhileTyping" in s && t(40, ue = s.showResultsWhileTyping), "selectFirst" in s && t(11, ve = s.selectFirst), "flyToSelected" in s && t(41, He = s.flyToSelected), "markerOnSelected" in s && t(42, We = s.markerOnSelected), "types" in s && t(43, ce = s.types), "exhaustiveReverseGeocoding" in s && t(44, Pe = s.exhaustiveReverseGeocoding), "excludeTypes" in s && t(45, Re = s.excludeTypes), "zoom" in s && t(46, ze = s.zoom), "apiUrl" in s && t(47, je = s.apiUrl), "fetchParameters" in s && t(48, Ze = s.fetchParameters), "iconsBaseUrl" in s && t(12, ot = s.iconsBaseUrl), "adjustUrlQuery" in s && t(49, Ge = s.adjustUrlQuery), "$$scope" in s && t(60, a = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, q = L === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, De = Le), h && !Le && t(1, b = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    64 && b.length < g && (t(56, w = void 0), t(14, N = void 0), t(18, Y = void 0), t(55, P = N)), i.$$.dirty[1] & /*pickedResultStyle, picked*/
    33554688 && U !== "marker-only" && w && !w.address && w.geometry.type === "Point" && w.place_type[0] !== "reverse" && Ke(w.id, { byId: !0 }).catch((s) => t(18, Y = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (d && w && w.id !== qe && k && (!w.bbox || w.bbox[0] === w.bbox[2] && w.bbox[1] === w.bbox[3] ? d.flyTo(w.center, pe(w)) : d.fitBounds(vt(w.bbox), 50, pe(w)), t(14, N = void 0), t(55, P = void 0), t(15, O = -1)), t(57, qe = w == null ? void 0 : w.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && ve && N != null && N.length && t(15, O = 0), i.$$.dirty[0] & /*searchValue*/
    2 && t(15, O = -1), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    16777216 && P !== N && t(55, P = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && d && d.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          q && Gt(s.coordinates);
          break;
        case "markerClick":
          {
            const I = N == null ? void 0 : N.find((G) => G.id === s.id);
            I && xe(I);
          }
          break;
        case "markerMouseEnter":
          P && t(15, O = De ? (N == null ? void 0 : N.findIndex((I) => I.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          P && t(15, O = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, o = N == null ? void 0 : N[O]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && d && o && k && He && d.flyTo(o.center, pe(o)), i.$$.dirty[1] & /*pickedResultStyle*/
    256 && t(59, n = U === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController, showPolygonMarker*/
    268437536 && (We || d == null || d.setFeatures(void 0, void 0, n)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected, showPolygonMarker*/
    419432480 && d && We && !P && (d.setFeatures(o ? [o] : void 0, void 0, n), d.setSelectedMarker(o ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked, showPolygonMarker*/
    318767136 && d && d.setFeatures(P, w, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && P && d && d.setSelectedMarker(O), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    32 && d) {
      const s = Qe(b);
      d.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    134217728 && oe("select", { feature: o }), i.$$.dirty[1] & /*picked*/
    33554432 && oe("pick", { feature: w }), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && oe("optionsvisibilitychange", {
      optionsVisible: De && !!N
    }), i.$$.dirty[0] & /*listFeatures*/
    16384 && oe("featureslisted", { features: N }), i.$$.dirty[1] & /*markedFeatures*/
    16777216 && oe("featuresmarked", { features: P }), i.$$.dirty[0] & /*reverseActive*/
    1 && oe("reversetoggle", { reverse: q }), i.$$.dirty[0] & /*searchValue*/
    2 && oe("querychange", { query: b }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    32 && d && d.indicateReverse(q);
  }, [
    q,
    b,
    f,
    v,
    y,
    L,
    E,
    T,
    Z,
    Se,
    ee,
    ve,
    ot,
    Le,
    N,
    O,
    De,
    X,
    Y,
    de,
    jt,
    lt,
    qt,
    Ve,
    xe,
    r,
    c,
    m,
    h,
    _,
    R,
    C,
    k,
    p,
    H,
    z,
    d,
    g,
    he,
    U,
    ue,
    He,
    We,
    ce,
    Pe,
    Re,
    ze,
    je,
    Ze,
    Ge,
    Bt,
    Ft,
    st,
    Ht,
    Pt,
    P,
    w,
    qe,
    o,
    n,
    a,
    u,
    Qt,
    Kt,
    Vt,
    xt,
    Jt,
    Xt,
    Yt,
    $t,
    ei,
    ti,
    ii,
    ni,
    ri
  ];
}
class bn extends be {
  constructor(e) {
    super(), ge(
      this,
      e,
      gn,
      mn,
      me,
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
}
const Ct = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], hn = [
  "adjustUrlQuery",
  "apiKey",
  "bbox",
  "clearButtonTitle",
  "clearOnBlur",
  "collapsed",
  "country",
  "debounceSearch",
  "enableReverse",
  "errorMessage",
  "excludeTypes",
  "filter",
  "fuzzyMatch",
  "language",
  "limit",
  "mapController",
  "minLength",
  "noResultsMessage",
  "pickedResultStyle",
  "placeholder",
  "proximity",
  "reverseActive",
  "reverseButtonTitle",
  "showPlaceType",
  "showResultsWhileTyping",
  "types",
  "zoom"
];
function Wt(i) {
  return "on" + i[0].toUpperCase() + i.slice(1);
}
const _n = ai(function(e, t) {
  const n = ut(), o = ut(), u = { ...e };
  for (const a of Ct)
    delete u[Wt(a)];
  $e(() => {
    if (!n.current)
      throw new Error();
    const a = new bn({
      target: n.current,
      props: u
    });
    return o.current = a, () => a.$destroy();
  }, []);
  for (const a of hn)
    $e(() => {
      o.current && e[a] !== void 0 && o.current.$set({ [a]: e[a] });
    }, [e[a]]);
  for (const a of Ct) {
    const r = e[Wt(a)];
    $e(
      () => {
        var f;
        return r && ((f = o.current) == null ? void 0 : f.$on(a, (c) => {
          r(c.detail);
        }));
      },
      [r]
    );
  }
  return li(t, () => ({
    setQuery: (a, r = !0) => {
      var f;
      return (f = o.current) == null ? void 0 : f.setQuery(a, r);
    },
    clearMap: () => {
      var a;
      return (a = o.current) == null ? void 0 : a.clearMap();
    },
    clearList: () => {
      var a;
      return (a = o.current) == null ? void 0 : a.clearList();
    },
    focus: () => {
      var a;
      return (a = o.current) == null ? void 0 : a.focus();
    },
    blur: () => {
      var a;
      return (a = o.current) == null ? void 0 : a.blur();
    }
  })), ui("div", { ref: n });
});
export {
  _n as GeocodingControl
};
//# sourceMappingURL=react.js.map
