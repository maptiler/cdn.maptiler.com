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
function ae(i) {
  i.forEach(Rt);
}
function Ot(i) {
  return typeof i == "function";
}
function he(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ae;
function x(i, e) {
  return i === e ? !0 : (Ae || (Ae = document.createElement("a")), Ae.href = e, i === Ae.href);
}
function di(i) {
  return Object.keys(i).length === 0;
}
function fi(i, e, t, n) {
  if (i) {
    const o = Dt(i, e, t, n);
    return i[0](o);
  }
}
function Dt(i, e, t, n) {
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
    const a = Dt(e, t, n, u);
    i.p(a, o);
  }
}
function hi(i) {
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
function T(i, e) {
  i.appendChild(e);
}
function B(i, e, t) {
  i.insertBefore(e, t || null);
}
function U(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function O(i) {
  return document.createElement(i);
}
function re(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ce(i) {
  return document.createTextNode(i);
}
function J() {
  return ce(" ");
}
function bi() {
  return ce("");
}
function K(i, e, t, n) {
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
function ue(i, e, t) {
  i.classList.toggle(e, !!t);
}
function _i(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Ce;
function Te(i) {
  Ce = i;
}
function Ut() {
  if (!Ce) throw new Error("Function called outside component initialization");
  return Ce;
}
function yi(i) {
  Ut().$$.on_destroy.push(i);
}
function wi() {
  const i = Ut();
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
const Ee = [], tt = [];
let Se = [];
const gt = [], Ei = /* @__PURE__ */ Promise.resolve();
let it = !1;
function Si() {
  it || (it = !0, Ei.then(It));
}
function nt(i) {
  Se.push(i);
}
const et = /* @__PURE__ */ new Set();
let we = 0;
function It() {
  if (we !== 0)
    return;
  const i = Ce;
  do {
    try {
      for (; we < Ee.length; ) {
        const e = Ee[we];
        we++, Te(e), pi(e.$$);
      }
    } catch (e) {
      throw Ee.length = 0, we = 0, e;
    }
    for (Te(null), Ee.length = 0, we = 0; tt.length; ) tt.pop()();
    for (let e = 0; e < Se.length; e += 1) {
      const t = Se[e];
      et.has(t) || (et.add(t), t());
    }
    Se.length = 0;
  } while (Ee.length);
  for (; gt.length; )
    gt.pop()();
  it = !1, et.clear(), Te(i);
}
function pi(i) {
  if (i.fragment !== null) {
    i.update(), ae(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(nt);
  }
}
function Ni(i) {
  const e = [], t = [];
  Se.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), Se = e;
}
const Be = /* @__PURE__ */ new Set();
let ge;
function Fe() {
  ge = {
    r: 0,
    c: [],
    p: ge
    // parent group
  };
}
function ze() {
  ge.r || ae(ge.c), ge = ge.p;
}
function z(i, e) {
  i && i.i && (Be.delete(i), i.i(e));
}
function Q(i, e, t, n) {
  if (i && i.o) {
    if (Be.has(i)) return;
    Be.add(i), ge.c.push(() => {
      Be.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function ht(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Mi(i, e) {
  Q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Ti(i, e, t, n, o, u, a, r, d, c, f, h) {
  let v = i.length, _ = u.length, w = v;
  const W = {};
  for (; w--; ) W[i[w].key] = w;
  const y = [], E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), R = [];
  for (w = _; w--; ) {
    const g = h(o, u, w), m = t(g);
    let k = a.get(m);
    k ? R.push(() => k.p(g, e)) : (k = c(m, g), k.c()), E.set(m, y[w] = k), m in W && C.set(m, Math.abs(w - W[m]));
  }
  const p = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
  function b(g) {
    z(g, 1), g.m(r, f), a.set(g.key, g), f = g.first, _--;
  }
  for (; v && _; ) {
    const g = y[_ - 1], m = i[v - 1], k = g.key, H = m.key;
    g === m ? (f = g.first, v--, _--) : E.has(H) ? !a.has(k) || p.has(k) ? b(g) : q.has(H) ? v-- : C.get(k) > C.get(H) ? (q.add(k), b(g)) : (p.add(H), v--) : (d(m, a), v--);
  }
  for (; v--; ) {
    const g = i[v];
    E.has(g.key) || d(g, a);
  }
  for (; _; ) b(y[_ - 1]);
  return ae(R), y;
}
function de(i) {
  i && i.c();
}
function oe(i, e, t) {
  const { fragment: n, after_update: o } = i.$$;
  n && n.m(e, t), nt(() => {
    const u = i.$$.on_mount.map(Rt).filter(Ot);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : ae(u), i.$$.on_mount = [];
  }), o.forEach(nt);
}
function se(i, e) {
  const t = i.$$;
  t.fragment !== null && (Ni(t.after_update), ae(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ki(i, e) {
  i.$$.dirty[0] === -1 && (Ee.push(i), Si(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function be(i, e, t, n, o, u, a = null, r = [-1]) {
  const d = Ce;
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
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: ct(),
    dirty: r,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  a && a(c.root);
  let f = !1;
  if (c.ctx = t ? t(i, e.props || {}, (h, v, ..._) => {
    const w = _.length ? _[0] : v;
    return c.ctx && o(c.ctx[h], c.ctx[h] = w) && (!c.skip_bound && c.bound[h] && c.bound[h](w), f && ki(i, h)), v;
  }) : [], c.update(), f = !0, ae(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = Li(e.target);
      c.fragment && c.fragment.l(h), h.forEach(U);
    } else
      c.fragment && c.fragment.c();
    e.intro && z(i.$$.fragment), oe(i, e.target, e.anchor), It();
  }
  Te(d);
}
class ve {
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
    se(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ot(t))
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
      e = re("svg"), t = re("path"), l(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), l(e, "viewBox", "0 0 14 14"), l(e, "width", "13"), l(e, "height", "13"), l(e, "class", "svelte-en2qvf");
    },
    m(n, o) {
      B(n, e, o), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && U(e);
    }
  };
}
class At extends ve {
  constructor(e) {
    super(), be(this, e, null, Wi, he, {});
  }
}
function Ri(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), l(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), l(e, "viewBox", "0 0 30 30"), l(e, "fill", "none"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "class", "svelte-d2loi5");
    },
    m(n, o) {
      B(n, e, o), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && U(e);
    }
  };
}
class Bt extends ve {
  constructor(e) {
    super(), be(this, e, null, Ri, he, {});
  }
}
function Oi(i) {
  let e, t;
  return {
    c() {
      e = O("img"), x(e.src, t = /*iconsBaseUrl*/
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
      8 && !x(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Di(i) {
  let e, t;
  return {
    c() {
      e = O("img"), x(e.src, t = /*iconsBaseUrl*/
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
      8 && !x(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Ui(i) {
  let e, t;
  return {
    c() {
      e = O("img"), x(e.src, t = /*iconsBaseUrl*/
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
      8 && !x(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Ii(i) {
  let e, t;
  return {
    c() {
      e = O("img"), x(e.src, t = /*iconsBaseUrl*/
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
      8 && !x(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Ai(i) {
  let e, t;
  return {
    c() {
      e = O("img"), x(e.src, t = /*iconsBaseUrl*/
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
      8 && !x(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Bi(i) {
  let e, t;
  return {
    c() {
      e = O("img"), x(e.src, t = /*iconsBaseUrl*/
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
      8 && !x(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Fi(i) {
  let e, t;
  return {
    c() {
      e = O("img"), x(e.src, t = /*iconsBaseUrl*/
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
      8 && !x(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function zi(i) {
  let e, t, n, o;
  return {
    c() {
      e = O("img"), x(e.src, t = /*imageUrl*/
      i[5]) || l(e, "src", t), l(
        e,
        "alt",
        /*category*/
        i[4]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(u, a) {
      B(u, e, a), n || (o = K(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !x(e.src, t = /*imageUrl*/
      u[5]) && l(e, "src", t), a & /*category*/
      16 && l(
        e,
        "alt",
        /*category*/
        u[4]
      );
    },
    d(u) {
      u && U(e), n = !1, o();
    }
  };
}
function bt(i) {
  let e, t;
  return {
    c() {
      e = O("span"), t = ce(
        /*placeType*/
        i[6]
      ), l(e, "class", "secondary svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o), T(e, t);
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
      n && U(e);
    }
  };
}
function Hi(i) {
  let e, t, n, o, u, a, r, d, c, f = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), h, v, _ = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] && !/*feature*/
    i[0].address && !/*feature*/
    i[0].id.startsWith("road.") && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), w, W, y = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), E, C, R;
  function p(m, k) {
    return k & /*feature*/
    1 && (t = null), k & /*feature*/
    1 && (n = null), k & /*feature*/
    1 && (o = null), k & /*feature*/
    1 && (u = null), /*imageUrl*/
    m[5] ? zi : (
      /*feature*/
      m[0].address ? Fi : (t == null && (t = !!/*feature*/
      m[0].id.startsWith("road.")), t ? Bi : (n == null && (n = !!/*feature*/
      m[0].id.startsWith("address.")), n ? Ai : (o == null && (o = !!/*feature*/
      m[0].id.startsWith("postal_code.")), o ? Ii : (u == null && (u = !!/*feature*/
      m[0].id.startsWith("poi.")), u ? Ui : (
        /*isReverse*/
        m[7] ? Di : Oi
      )))))
    );
  }
  let q = p(i, -1), b = q(i), g = _ && bt(i);
  return {
    c() {
      e = O("li"), b.c(), a = J(), r = O("span"), d = O("span"), c = O("span"), h = ce(f), v = J(), g && g.c(), w = J(), W = O("span"), E = ce(y), l(c, "class", "primary svelte-ltkwvy"), l(d, "class", "svelte-ltkwvy"), l(W, "class", "line2 svelte-ltkwvy"), l(r, "class", "texts svelte-ltkwvy"), l(e, "tabindex", "0"), l(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), l(e, "class", "svelte-ltkwvy"), ue(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(m, k) {
      B(m, e, k), b.m(e, null), T(e, a), T(e, r), T(r, d), T(d, c), T(c, h), T(d, v), g && g.m(d, null), T(r, w), T(r, W), T(W, E), C || (R = [
        K(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        K(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], C = !0);
    },
    p(m, [k]) {
      q === (q = p(m, k)) && b ? b.p(m, k) : (b.d(1), b = q(m), b && (b.c(), b.m(e, a))), k & /*feature*/
      1 && f !== (f = /*isReverse*/
      (m[7] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && ke(h, f), k & /*showPlaceType, feature, imageUrl*/
      37 && (_ = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[7]), _ ? g ? g.p(m, k) : (g = bt(m), g.c(), g.m(d, null)) : g && (g.d(1), g = null), k & /*feature*/
      1 && y !== (y = /*isReverse*/
      (m[7] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && ke(E, y), k & /*selected*/
      2 && l(
        e,
        "data-selected",
        /*selected*/
        m[1]
      ), k & /*selected*/
      2 && ue(
        e,
        "selected",
        /*selected*/
        m[1]
      );
    },
    i: A,
    o: A,
    d(m) {
      m && U(e), b.d(), g && g.d(), C = !1, ae(R);
    }
  };
}
function ji(i, e, t) {
  var R;
  let n, o, { feature: u } = e, { selected: a = !1 } = e, { showPlaceType: r } = e, { missingIconsCache: d } = e, { iconsBaseUrl: c } = e;
  const f = (R = u.properties) == null ? void 0 : R.categories;
  let h, v, _ = 0, w = u.place_type[0] === "reverse";
  function W() {
    v && d.add(v), t(10, _++, _);
  }
  function y(p) {
    mt.call(this, i, p);
  }
  function E(p) {
    mt.call(this, i, p);
  }
  const C = () => W();
  return i.$$set = (p) => {
    "feature" in p && t(0, u = p.feature), "selected" in p && t(1, a = p.selected), "showPlaceType" in p && t(2, r = p.showPlaceType), "missingIconsCache" in p && t(9, d = p.missingIconsCache), "iconsBaseUrl" in p && t(3, c = p.iconsBaseUrl);
  }, i.$$.update = () => {
    var p, q, b, g;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, n--, n), t(4, h = f == null ? void 0 : f[n]), t(5, v = h ? c + h.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!v || d.has(v)));
    i.$$.dirty & /*feature*/
    1 && t(6, o = ((q = (p = u.properties) == null ? void 0 : p.categories) == null ? void 0 : q.join(", ")) ?? ((g = (b = u.properties) == null ? void 0 : b.place_type_name) == null ? void 0 : g[0]) ?? u.place_type[0]);
  }, t(11, n = (f == null ? void 0 : f.length) ?? 0), [
    u,
    a,
    r,
    c,
    h,
    v,
    o,
    w,
    W,
    d,
    _,
    n,
    y,
    E,
    C
  ];
}
class Pi extends ve {
  constructor(e) {
    super(), be(this, e, ji, Hi, he, {
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
      e = O("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', l(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      B(t, e, n);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && U(e);
    }
  };
}
class Gi extends ve {
  constructor(e) {
    super(), be(this, e, null, Zi, he, {});
  }
}
function qi(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), l(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), l(e, "viewBox", "0 0 60.006 21.412"), l(e, "width", "14"), l(e, "height", "20"), l(e, "class", "svelte-en2qvf");
    },
    m(n, o) {
      B(n, e, o), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && U(e);
    }
  };
}
class Qi extends ve {
  constructor(e) {
    super(), be(this, e, null, qi, he, {});
  }
}
function xi(i) {
  let e, t, n;
  return {
    c() {
      e = re("svg"), t = re("circle"), n = re("path"), l(t, "cx", "4.789"), l(t, "cy", "4.787"), l(t, "r", "3.85"), l(t, "class", "svelte-1aq105l"), l(n, "d", "M12.063 12.063 7.635 7.635"), l(n, "class", "svelte-1aq105l"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "width", "13"), l(e, "height", "13"), l(e, "viewBox", "0 0 13 13"), l(e, "class", "svelte-1aq105l");
    },
    m(o, u) {
      B(o, e, u), T(e, t), T(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(o) {
      o && U(e);
    }
  };
}
class Ki extends ve {
  constructor(e) {
    super(), be(this, e, null, xi, he, {});
  }
}
function Vi(i, e, t) {
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
              (d) => {
                a(
                  [d.coords.longitude, d.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (d) => {
                r(d);
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
    const e = this.decimalCoordinates.split(",").map((_) => Number(_.trim())), t = Number(e[0]), n = Number(e[1]), o = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", r = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${o}° ${a}, ${u}° ${r}`);
    const c = Math.floor(o), f = Math.floor(u), h = (o - c) * 60, v = (u - f) * 60;
    if (i == "DM") {
      let _ = St(h, 3).toFixed(3).padStart(6, "0"), w = St(v, 3).toFixed(3).padStart(6, "0");
      _.endsWith(".000") && w.endsWith(".000") && (_ = _.replace(/\.000$/, ""), w = w.replace(/\.000$/, "")), d = `${c}° ${_}' ${a}, ${f}° ${w}' ${r}`;
    }
    if (i == "DMS") {
      const _ = Math.floor(h), w = Math.floor(v);
      let W = ((h - _) * 60).toFixed(1).padStart(4, "0"), y = ((v - w) * 60).toFixed(1).padStart(4, "0");
      const E = _.toString().padStart(2, "0"), C = w.toString().padStart(2, "0");
      W.endsWith(".0") && y.endsWith(".0") && (W = W.replace(/\.0$/, ""), y = y.replace(/\.0$/, "")), d = `${c}° ${E}' ${W}" ${a}, ${f}° ${C}' ${y}" ${r}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function St(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function rt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, o = "", u = "", a = null, r = [], d = !1;
  if (Xi.test(i))
    throw new Error("invalid coordinate value");
  if (Lt.test(i))
    if (r = Lt.exec(i), d = Me(r), d)
      t = Math.abs(r[1]) + r[2] / 60, Number(r[1]) < 0 && (t *= -1), n = Math.abs(r[3]) + r[4] / 60, Number(r[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (_t.test(i))
    if (r = _t.exec(i), d = Me(r), d) {
      if (t = r[2], n = r[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      r[1] ? (o = r[1], u = r[5]) : r[4] && (o = r[4], u = r[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (yt.test(i))
    if (r = yt.exec(i), d = Me(r), d)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4] / 60, a = "DM"), r[6] && (t += r[6].replace(",", ".") / 3600, a = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[9])), r[11] && (n += r[11] / 60), r[13] && (n += r[13].replace(",", ".") / 3600), parseInt(r[9]) < 0 && (n = -1 * n), r[1] ? (o = r[1], u = r[8]) : r[7] && (o = r[7], u = r[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (wt.test(i))
    if (r = wt.exec(i), d = Me(r), d)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4] / 60, a = "DM"), r[6] && (t += r[6] / 3600, a = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[10])), r[12] && (n += r[12] / 60), r[14] && (n += r[14] / 3600), parseInt(r[10]) < 0 && (n = -1 * n), r[1] ? (o = r[1], u = r[9]) : r[8] && (o = r[8], u = r[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Et.test(i)) {
    if (r = Et.exec(i), d = Me(r), r.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4].replace(",", ".") / 60, a = "DM"), r[6] && (t += r[6].replace(",", ".") / 3600, a = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[10])), r[12] && (n += r[12].replace(",", ".") / 60), r[14] && (n += r[14].replace(",", ".") / 3600), parseInt(r[10]) < 0 && (n = -1 * n), r[1] ? (o = r[1], u = r[9]) : r[8] && (o = r[8], u = r[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
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
    const f = r[0].trim();
    let h, v;
    const _ = /[,/;\u0020]/g, w = f.match(_);
    if (w == null) {
      const E = Math.floor(i.length / 2);
      h = f.substring(0, E).trim(), v = f.substring(E).trim();
    } else {
      let E;
      w.length % 2 == 1 ? E = Math.floor(w.length / 2) : E = w.length / 2 - 1;
      let C = 0;
      if (E == 0)
        C = f.indexOf(w[0]), h = f.substring(0, C).trim(), v = f.substring(C + 1).trim();
      else {
        let R = 0, p = 0;
        for (; R <= E; )
          C = f.indexOf(w[R], p), p = C + 1, R++;
        h = f.substring(0, C).trim(), v = f.substring(C + 1).trim();
      }
    }
    const W = h.split(".");
    if (W.length == 2 && W[1] == 0 && W[1].length != 2)
      throw new Error("invalid coordinates format");
    const y = v.split(".");
    if (y.length == 2 && y[1] == 0 && y[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(h) || /^\d+$/.test(v))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: f,
      verbatimLatitude: h,
      verbatimLongitude: v,
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
    const a = e[u], r = e[u + o], d = t.test(a) && t.test(r), c = n.test(a) && n.test(r), f = a == r;
    if (!(a == null && r == null)) {
      if (a == null || r == null)
        return !1;
      if (d || c || f)
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
      de(e.$$.fragment);
    },
    m(n, o) {
      oe(e, n, o), t = !0;
    },
    i(n) {
      t || (z(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      se(e, n);
    }
  };
}
function Tt(i) {
  let e, t, n, o, u;
  return t = new Qi({}), {
    c() {
      e = O("button"), de(t.$$.fragment), l(e, "type", "button"), l(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), l(e, "class", "svelte-1uvos7g"), ue(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, r) {
      B(a, e, r), oe(t, e, null), n = !0, o || (u = K(
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
      1) && ue(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      n || (z(t.$$.fragment, a), n = !0);
    },
    o(a) {
      Q(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && U(e), se(t), o = !1, u();
    }
  };
}
function un(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), o, u, a, r = ht(
    /*listFeatures*/
    i[14]
  );
  const d = (c) => (
    /*feature*/
    c[84].id + /*feature*/
    (c[84].address ? "," + /*feature*/
    c[84].address : "")
  );
  for (let c = 0; c < r.length; c += 1) {
    let f = Nt(i, r, c), h = d(f);
    n.set(h, t[c] = kt(h, f));
  }
  return {
    c() {
      e = O("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      l(e, "class", "svelte-1uvos7g");
    },
    m(c, f) {
      B(c, e, f);
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(e, null);
      o = !0, u || (a = [
        K(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[73]
        ),
        K(
          e,
          "blur",
          /*blur_handler_1*/
          i[74]
        )
      ], u = !0);
    },
    p(c, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (r = ht(
        /*listFeatures*/
        c[14]
      ), Fe(), t = Ti(t, f, d, 1, c, r, n, e, Mi, kt, null, Nt), ze());
    },
    i(c) {
      if (!o) {
        for (let f = 0; f < r.length; f += 1)
          z(t[f]);
        o = !0;
      }
    },
    o(c) {
      for (let f = 0; f < t.length; f += 1)
        Q(t[f]);
      o = !1;
    },
    d(c) {
      c && U(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      u = !1, ae(a);
    }
  };
}
function cn(i) {
  let e, t, n, o, u, a;
  return t = new Bt({}), {
    c() {
      e = O("div"), de(t.$$.fragment), n = J(), o = O("div"), u = ce(
        /*noResultsMessage*/
        i[7]
      ), l(o, "class", "svelte-1uvos7g"), l(e, "class", "no-results svelte-1uvos7g");
    },
    m(r, d) {
      B(r, e, d), oe(t, e, null), T(e, n), T(e, o), T(o, u), a = !0;
    },
    p(r, d) {
      (!a || d[0] & /*noResultsMessage*/
      128) && ke(
        u,
        /*noResultsMessage*/
        r[7]
      );
    },
    i(r) {
      a || (z(t.$$.fragment, r), a = !0);
    },
    o(r) {
      Q(t.$$.fragment, r), a = !1;
    },
    d(r) {
      r && U(e), se(t);
    }
  };
}
function dn(i) {
  let e = "", t;
  return {
    c() {
      t = ce(e);
    },
    m(n, o) {
      B(n, t, o);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && U(t);
    }
  };
}
function fn(i) {
  let e, t, n, o, u, a, r, d, c, f, h;
  return t = new Bt({}), d = new At({}), {
    c() {
      e = O("div"), de(t.$$.fragment), n = J(), o = O("div"), u = ce(
        /*errorMessage*/
        i[6]
      ), a = J(), r = O("button"), de(d.$$.fragment), l(o, "class", "svelte-1uvos7g"), l(r, "class", "svelte-1uvos7g"), l(e, "class", "error svelte-1uvos7g");
    },
    m(v, _) {
      B(v, e, _), oe(t, e, null), T(e, n), T(e, o), T(o, u), T(e, a), T(e, r), oe(d, r, null), c = !0, f || (h = K(
        r,
        "click",
        /*click_handler_3*/
        i[70]
      ), f = !0);
    },
    p(v, _) {
      (!c || _[0] & /*errorMessage*/
      64) && ke(
        u,
        /*errorMessage*/
        v[6]
      );
    },
    i(v) {
      c || (z(t.$$.fragment, v), z(d.$$.fragment, v), c = !0);
    },
    o(v) {
      Q(t.$$.fragment, v), Q(d.$$.fragment, v), c = !1;
    },
    d(v) {
      v && U(e), se(t), se(d), f = !1, h();
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
  return n = new Pi({
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
      t = bi(), de(n.$$.fragment), this.first = t;
    },
    m(r, d) {
      B(r, t, d), oe(n, r, d), o = !0;
    },
    p(r, d) {
      e = r;
      const c = {};
      d[0] & /*listFeatures*/
      16384 && (c.feature = /*feature*/
      e[84]), d[0] & /*showPlaceType*/
      1024 && (c.showPlaceType = /*showPlaceType*/
      e[10]), d[0] & /*selectedItemIndex, listFeatures*/
      49152 && (c.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[86]), d[0] & /*iconsBaseUrl*/
      4096 && (c.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(c);
    },
    i(r) {
      o || (z(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Q(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && U(t), se(n, r);
    }
  };
}
function mn(i) {
  let e, t, n, o, u, a, r, d, c, f, h, v, _, w, W, y, E, C, R, p, q, b = !1;
  u = new Ki({}), h = new At({});
  let g = (
    /*abortController*/
    i[19] && Mt()
  ), m = (
    /*enableReverse*/
    i[5] === !0 && Tt(i)
  );
  const k = (
    /*#slots*/
    i[61].default
  ), H = fi(
    k,
    i,
    /*$$scope*/
    i[60],
    null
  ), X = [fn, dn, cn, un], Y = [];
  function j(L, F) {
    var $, ne;
    return (
      /*error*/
      L[18] ? 0 : (
        /*focusedDelayed*/
        L[16] ? (
          /*listFeatures*/
          (($ = L[14]) == null ? void 0 : $.length) === 0 ? 2 : (
            /*focusedDelayed*/
            L[16] && /*listFeatures*/
            ((ne = L[14]) != null && ne.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(y = j(i)) && (E = Y[y] = X[y](i)), {
    c() {
      e = J(), t = O("form"), n = O("div"), o = O("button"), de(u.$$.fragment), a = J(), r = O("input"), d = J(), c = O("div"), f = O("button"), de(h.$$.fragment), v = J(), g && g.c(), _ = J(), m && m.c(), w = J(), H && H.c(), W = J(), E && E.c(), l(o, "class", "search-button svelte-1uvos7g"), l(o, "type", "button"), l(
        r,
        "placeholder",
        /*placeholder*/
        i[8]
      ), l(
        r,
        "aria-label",
        /*placeholder*/
        i[8]
      ), l(r, "class", "svelte-1uvos7g"), l(f, "type", "button"), l(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), l(f, "class", "svelte-1uvos7g"), l(c, "class", "clear-button-container svelte-1uvos7g"), ue(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), l(n, "class", "input-group svelte-1uvos7g"), l(t, "tabindex", "0"), l(t, "class", C = dt(
        /*className*/
        i[2]
      ) + " svelte-1uvos7g"), ue(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(L, F) {
      B(L, e, F), B(L, t, F), T(t, n), T(n, o), oe(u, o, null), T(n, a), T(n, r), i[63](r), ft(
        r,
        /*searchValue*/
        i[1]
      ), T(n, d), T(n, c), T(c, f), oe(h, f, null), T(c, v), g && g.m(c, null), T(n, _), m && m.m(n, null), T(n, w), H && H.m(n, null), T(t, W), ~y && Y[y].m(t, null), R = !0, p || (q = [
        K(
          o,
          "click",
          /*click_handler*/
          i[62]
        ),
        K(
          r,
          "input",
          /*input_1_input_handler*/
          i[64]
        ),
        K(
          r,
          "focus",
          /*focus_handler*/
          i[65]
        ),
        K(
          r,
          "blur",
          /*blur_handler*/
          i[66]
        ),
        K(
          r,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        K(
          r,
          "input",
          /*input_handler*/
          i[67]
        ),
        K(
          f,
          "click",
          /*click_handler_1*/
          i[68]
        ),
        K(t, "submit", vi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], p = !0);
    },
    p(L, F) {
      (!R || F[0] & /*placeholder*/
      256) && l(
        r,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!R || F[0] & /*placeholder*/
      256) && l(
        r,
        "aria-label",
        /*placeholder*/
        L[8]
      ), F[0] & /*searchValue*/
      2 && r.value !== /*searchValue*/
      L[1] && ft(
        r,
        /*searchValue*/
        L[1]
      ), (!R || F[0] & /*clearButtonTitle*/
      8) && l(
        f,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[19] ? g ? F[0] & /*abortController*/
      524288 && z(g, 1) : (g = Mt(), g.c(), z(g, 1), g.m(c, null)) : g && (Fe(), Q(g, 1, 1, () => {
        g = null;
      }), ze()), (!R || F[0] & /*searchValue*/
      2) && ue(
        c,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? m ? (m.p(L, F), F[0] & /*enableReverse*/
      32 && z(m, 1)) : (m = Tt(L), m.c(), z(m, 1), m.m(n, w)) : m && (Fe(), Q(m, 1, 1, () => {
        m = null;
      }), ze()), H && H.p && (!R || F[1] & /*$$scope*/
      536870912) && gi(
        H,
        k,
        L,
        /*$$scope*/
        L[60],
        R ? mi(
          k,
          /*$$scope*/
          L[60],
          F,
          null
        ) : hi(
          /*$$scope*/
          L[60]
        ),
        null
      );
      let $ = y;
      y = j(L), y === $ ? ~y && Y[y].p(L, F) : (E && (Fe(), Q(Y[$], 1, 1, () => {
        Y[$] = null;
      }), ze()), ~y ? (E = Y[y], E ? E.p(L, F) : (E = Y[y] = X[y](L), E.c()), z(E, 1), E.m(t, null)) : E = null), (!R || F[0] & /*className*/
      4 && C !== (C = dt(
        /*className*/
        L[2]
      ) + " svelte-1uvos7g")) && l(t, "class", C), (!R || F[0] & /*className, collapsed, searchValue*/
      22) && ue(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      R || (z(b), z(u.$$.fragment, L), z(h.$$.fragment, L), z(g), z(m), z(H, L), z(E), R = !0);
    },
    o(L) {
      Q(b), Q(u.$$.fragment, L), Q(h.$$.fragment, L), Q(g), Q(m), Q(H, L), Q(E), R = !1;
    },
    d(L) {
      L && (U(e), U(t)), se(u), i[63](null), se(h), g && g.d(), m && m.d(), H && H.d(L), ~y && Y[y].d(), p = !1, ae(q);
    }
  };
}
function gn(i, e, t) {
  let n, { $$slots: o = {}, $$scope: u } = e;
  const a = {
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
  let { class: r = void 0 } = e, { apiKey: d } = e, { bbox: c = void 0 } = e, { clearButtonTitle: f = "clear" } = e, { clearOnBlur: h = !1 } = e, { collapsed: v = !1 } = e, { country: _ = void 0 } = e, { debounceSearch: w = 200 } = e, { enableReverse: W = !1 } = e, { errorMessage: y = "Something went wrong…" } = e, { filter: E = () => !0 } = e, { flyTo: C = !0 } = e, { fuzzyMatch: R = !0 } = e, { language: p = void 0 } = e, { limit: q = void 0 } = e, { mapController: b = void 0 } = e, { minLength: g = 2 } = e, { noResultsMessage: m = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: H = [{ type: "server-geolocation" }] } = e, { reverseActive: X = W === "always" } = e, { reverseButtonTitle: Y = "toggle reverse geocoding" } = e, { searchValue: j = "" } = e, { showFullGeometry: L = !0 } = e, { showPlaceType: F = "ifNeeded" } = e, { showResultsWhileTyping: $ = !0 } = e, { selectFirst: ne = !0 } = e, { flyToSelected: He = !1 } = e, { markerOnSelected: We = !0 } = e, { types: fe = void 0 } = e, { exhaustiveReverseGeocoding: je = !1 } = e, { excludeTypes: Re = !1 } = e, { zoom: Le = a } = e, { maxZoom: Oe = void 0 } = e, { apiUrl: Pe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ze = {} } = e, { iconsBaseUrl: ot = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.0.0/icons/" } = e, { adjustUrlQuery: Ge = () => {
  } } = e;
  function Ft() {
    ee.focus();
  }
  function zt() {
    ee.blur();
  }
  function st(s, I = !0, G = !1) {
    t(1, j = s), I ? (t(15, D = -1), lt()) : (Ke(!G, G), setTimeout(() => {
      ee.focus(), ee.select();
    }));
  }
  function Ht() {
    t(14, M = void 0), t(57, S = void 0), t(15, D = -1);
  }
  function jt() {
    t(56, P = []), t(57, S = void 0);
  }
  let _e = !1, M, P, S, at = "", ee, D = -1, te, De = [], me, ye, Ue, qe;
  const Pt = /* @__PURE__ */ new Set(), le = wi();
  yi(() => {
    b && (b.setEventHandler(void 0), b.indicateReverse(!1), b.setSelectedMarker(-1), b.setMarkers(void 0, void 0));
  });
  function lt(s) {
    if (ye && (clearTimeout(ye), ye = void 0), D > -1 && M)
      t(57, S = M[D]), t(1, j = S.place_type[0] === "reverse" ? S.place_name : S.place_name.replace(/,.*/, "")), t(18, te = void 0), t(56, P = void 0), t(15, D = -1);
    else if (j) {
      const I = s || !Qe(j);
      xe(j, { exact: !0 }).then(() => {
        t(56, P = M), t(57, S = void 0), I && Zt();
      }).catch((G) => t(18, te = G));
    }
  }
  function Qe(s) {
    try {
      return ln(s, 6);
    } catch {
      return !1;
    }
  }
  async function xe(s, { byId: I = !1, exact: G = !1 } = {}) {
    t(18, te = void 0), me == null || me.abort();
    const V = new AbortController();
    t(19, me = V);
    try {
      const N = Qe(s), Z = new URLSearchParams();
      if (p !== void 0 && Z.set("language", Array.isArray(p) ? p.join(",") : p ?? ""), fe && Z.set("types", fe.join(",")), Re && Z.set("excludeTypes", String(Re)), c && Z.set("bbox", c.map((Ie) => Ie.toFixed(6)).join(",")), _ && Z.set("country", Array.isArray(_) ? _.join(",") : _), !I && !N) {
        const Ie = await Ji(b, H, V);
        Ie && Z.set("proximity", Ie), (G || !$) && Z.set("autocomplete", "false"), Z.set("fuzzyMatch", String(R));
      }
      q !== void 0 && (je || !N || (fe == null ? void 0 : fe.length) === 1) && Z.set("limit", String(q)), Z.set("key", d), Ge(Z);
      const ie = Pe + "/" + encodeURIComponent(N ? N.decimalLongitude + "," + N.decimalLatitude : s) + ".json?" + Z.toString();
      if (ie === at) {
        I ? (t(14, M = void 0), t(57, S = De[0])) : t(14, M = De);
        return;
      }
      at = ie;
      const Je = await fetch(ie, { signal: V.signal, ...Ze });
      if (!Je.ok)
        throw new Error(await Je.text());
      const Xe = await Je.json();
      le("response", { url: ie, featureCollection: Xe }), I ? (t(14, M = void 0), t(57, S = Xe.features[0]), De = [S]) : (t(14, M = Xe.features.filter(E)), N && M.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + N.decimalLongitude + "_" + N.decimalLatitude,
        text: N.decimalLatitude + ", " + N.decimalLongitude,
        place_name: N.decimalLatitude + ", " + N.decimalLongitude,
        place_type: ["reverse"],
        center: [N.decimalLongitude, N.decimalLatitude],
        bbox: [
          N.decimalLongitude,
          N.decimalLatitude,
          N.decimalLongitude,
          N.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [N.decimalLongitude, N.decimalLatitude]
        }
      }), De = M, N && ee.focus());
    } catch (N) {
      if (N && typeof N == "object" && "name" in N && N.name === "AbortError")
        return;
      throw N;
    } finally {
      V === me && t(19, me = void 0);
    }
  }
  function Zt() {
    var V;
    if (!(P != null && P.length) || !C)
      return;
    const s = [180, 90, -180, -90], I = !P.some((N) => !N.matching_text);
    let G;
    for (const N of P) {
      const Z = pe(N);
      if (G = Oe ?? (G === void 0 ? Z : Z === void 0 ? G : Math.max(G, Z)), I || !N.matching_text)
        for (const ie of [0, 1, 2, 3])
          s[ie] = Math[ie < 2 ? "min" : "max"](s[ie], ((V = N.bbox) == null ? void 0 : V[ie]) ?? N.center[ie % 2]);
    }
    b && P.length > 0 && (S && s[0] === s[2] && s[1] === s[3] ? b.flyTo(S.center, pe(S)) : b.fitBounds(vt(s), 50, G));
  }
  function pe(s) {
    var G;
    if (!s.bbox || s.bbox[0] !== s.bbox[2] && s.bbox[1] !== s.bbox[3])
      return;
    if (typeof Le == "number")
      return s.id.startsWith("poi.") || s.id.startsWith("address.") ? Oe : Le;
    const I = s.id.replace(/\..*/, "");
    return (Array.isArray((G = s.properties) == null ? void 0 : G.categories) ? s.properties.categories.reduce(
      (V, N) => {
        const Z = Le[I + "." + N];
        return V === void 0 ? Z : Z === void 0 ? V : Math.max(V, Z);
      },
      void 0
    ) : void 0) ?? Le[I];
  }
  function Gt(s) {
    t(0, X = W === "always"), t(14, M = void 0), t(57, S = void 0), t(15, D = -1), st(s[1].toFixed(6) + ", " + Vi(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function qt(s) {
    if (!M)
      return;
    let I = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    I && (D === (ne ? 0 : -1) && I === -1 && t(15, D = M.length), t(15, D += I), D >= M.length && t(15, D = -1), D < 0 && ne && t(15, D = 0), s.preventDefault());
  }
  function Ke(s = !0, I = !1) {
    if (t(18, te = void 0), $ || I) {
      if (ye && clearTimeout(ye), j.length < g)
        return;
      const G = j;
      ye = window.setTimeout(
        () => {
          xe(G).catch((V) => t(18, te = V));
        },
        s ? w : 0
      );
    } else
      t(14, M = void 0), t(18, te = void 0);
  }
  function Ve(s) {
    t(57, S = s), t(1, j = s.place_name), t(15, D = -1);
  }
  const Qt = () => ee.focus();
  function xt(s) {
    tt[s ? "unshift" : "push"](() => {
      ee = s, t(17, ee);
    });
  }
  function Kt() {
    j = this.value, t(1, j), t(13, _e), t(28, h);
  }
  const Vt = () => t(13, _e = !0), Jt = () => t(13, _e = !1), Xt = () => Ke(), Yt = () => {
    t(1, j = ""), ee.focus();
  }, $t = () => t(0, X = !X), ei = () => t(18, te = void 0), ti = (s) => t(15, D = s), ii = (s) => Ve(s), ni = () => {
    ne || t(15, D = -1);
  }, ri = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, r = s.class), "apiKey" in s && t(26, d = s.apiKey), "bbox" in s && t(27, c = s.bbox), "clearButtonTitle" in s && t(3, f = s.clearButtonTitle), "clearOnBlur" in s && t(28, h = s.clearOnBlur), "collapsed" in s && t(4, v = s.collapsed), "country" in s && t(29, _ = s.country), "debounceSearch" in s && t(30, w = s.debounceSearch), "enableReverse" in s && t(5, W = s.enableReverse), "errorMessage" in s && t(6, y = s.errorMessage), "filter" in s && t(31, E = s.filter), "flyTo" in s && t(32, C = s.flyTo), "fuzzyMatch" in s && t(33, R = s.fuzzyMatch), "language" in s && t(34, p = s.language), "limit" in s && t(35, q = s.limit), "mapController" in s && t(36, b = s.mapController), "minLength" in s && t(37, g = s.minLength), "noResultsMessage" in s && t(7, m = s.noResultsMessage), "placeholder" in s && t(8, k = s.placeholder), "proximity" in s && t(38, H = s.proximity), "reverseActive" in s && t(0, X = s.reverseActive), "reverseButtonTitle" in s && t(9, Y = s.reverseButtonTitle), "searchValue" in s && t(1, j = s.searchValue), "showFullGeometry" in s && t(39, L = s.showFullGeometry), "showPlaceType" in s && t(10, F = s.showPlaceType), "showResultsWhileTyping" in s && t(40, $ = s.showResultsWhileTyping), "selectFirst" in s && t(11, ne = s.selectFirst), "flyToSelected" in s && t(41, He = s.flyToSelected), "markerOnSelected" in s && t(42, We = s.markerOnSelected), "types" in s && t(43, fe = s.types), "exhaustiveReverseGeocoding" in s && t(44, je = s.exhaustiveReverseGeocoding), "excludeTypes" in s && t(45, Re = s.excludeTypes), "zoom" in s && t(46, Le = s.zoom), "maxZoom" in s && t(47, Oe = s.maxZoom), "apiUrl" in s && t(48, Pe = s.apiUrl), "fetchParameters" in s && t(49, Ze = s.fetchParameters), "iconsBaseUrl" in s && t(12, ot = s.iconsBaseUrl), "adjustUrlQuery" in s && t(50, Ge = s.adjustUrlQuery), "$$scope" in s && t(60, u = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, X = W === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, Ue = _e), h && !_e && t(1, j = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    64 && j.length < g && (t(57, S = void 0), t(14, M = void 0), t(18, te = void 0), t(56, P = M)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    67109120 && L && S && !S.address && S.geometry.type === "Point" && S.place_type[0] !== "reverse" && xe(S.id, { byId: !0 }).catch((s) => t(18, te = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    201326626 && (b && S && S.id !== qe && C && (!S.bbox || S.bbox[0] === S.bbox[2] && S.bbox[1] === S.bbox[3] ? b.flyTo(S.center, pe(S)) : b.fitBounds(vt(S.bbox), 50, pe(S)), t(14, M = void 0), t(56, P = void 0), t(15, D = -1)), t(58, qe = S == null ? void 0 : S.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && ne && M != null && M.length && t(15, D = 0), i.$$.dirty[0] & /*searchValue*/
    2 && t(15, D = -1), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    33554432 && P !== M && t(56, P = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    33554464 && b && b.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          X && Gt(s.coordinates);
          break;
        case "markerClick":
          {
            const I = M == null ? void 0 : M.find((G) => G.id === s.id);
            I && Ve(I);
          }
          break;
        case "markerMouseEnter":
          P && t(15, D = Ue ? (M == null ? void 0 : M.findIndex((I) => I.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          P && t(15, D = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(59, n = M == null ? void 0 : M[D]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    268436514 && b && n && C && He && b.flyTo(n.center, pe(n)), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    2080 && (We || b == null || b.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    301991968 && b && We && !P && (b.setMarkers(n ? [n] : void 0, void 0), b.setSelectedMarker(n ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    100663328 && b && b.setMarkers(P, S), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    33554464 && P && b && b.setSelectedMarker(D), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    32 && b) {
      const s = Qe(j);
      b.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    268435456 && le("select", n), i.$$.dirty[1] & /*picked*/
    67108864 && le("pick", S), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && le("optionsVisibilityChange", Ue && !!M), i.$$.dirty[0] & /*listFeatures*/
    16384 && le("featuresListed", M), i.$$.dirty[1] & /*markedFeatures*/
    33554432 && le("featuresMarked", P), i.$$.dirty[0] & /*reverseActive*/
    1 && le("reverseToggle", X), i.$$.dirty[0] & /*searchValue*/
    2 && le("queryChange", j), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    32 && b && b.indicateReverse(X);
  }, [
    X,
    j,
    r,
    f,
    v,
    W,
    y,
    m,
    k,
    Y,
    F,
    ne,
    ot,
    _e,
    M,
    D,
    Ue,
    ee,
    te,
    me,
    Pt,
    lt,
    qt,
    Ke,
    Ve,
    a,
    d,
    c,
    h,
    _,
    w,
    E,
    C,
    R,
    p,
    q,
    b,
    g,
    H,
    L,
    $,
    He,
    We,
    fe,
    je,
    Re,
    Le,
    Oe,
    Pe,
    Ze,
    Ge,
    Ft,
    zt,
    st,
    Ht,
    jt,
    P,
    S,
    qe,
    n,
    u,
    o,
    Qt,
    xt,
    Kt,
    Vt,
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
class hn extends ve {
  constructor(e) {
    super(), be(
      this,
      e,
      gn,
      mn,
      he,
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
        exhaustiveReverseGeocoding: 44,
        excludeTypes: 45,
        zoom: 46,
        maxZoom: 47,
        apiUrl: 48,
        fetchParameters: 49,
        iconsBaseUrl: 12,
        adjustUrlQuery: 50,
        focus: 51,
        blur: 52,
        setQuery: 53,
        clearList: 54,
        clearMap: 55
      },
      null,
      [-1, -1, -1]
    );
  }
  get ZOOM_DEFAULTS() {
    return this.$$.ctx[25];
  }
  get focus() {
    return this.$$.ctx[51];
  }
  get blur() {
    return this.$$.ctx[52];
  }
  get setQuery() {
    return this.$$.ctx[53];
  }
  get clearList() {
    return this.$$.ctx[54];
  }
  get clearMap() {
    return this.$$.ctx[55];
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
], bn = [
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
  "excludeTypes",
  "zoom",
  "mapController"
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
    const a = new hn({
      target: n.current,
      props: u
    });
    return o.current = a, () => a.$destroy();
  }, []);
  for (const a of bn)
    $e(() => {
      o.current && e[a] !== void 0 && o.current.$set({ [a]: e[a] });
    }, [e[a]]);
  for (const a of Ct) {
    const r = e[Wt(a)];
    $e(
      () => {
        var d;
        return r && ((d = o.current) == null ? void 0 : d.$on(a, (c) => {
          r(c.detail);
        }));
      },
      [r]
    );
  }
  return li(t, () => ({
    setQuery: (a, r = !0) => {
      var d;
      return (d = o.current) == null ? void 0 : d.setQuery(a, r);
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
