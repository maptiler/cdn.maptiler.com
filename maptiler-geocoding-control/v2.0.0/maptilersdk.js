var rn = Object.defineProperty;
var zt = (n) => {
  throw TypeError(n);
};
var on = (n, e, t) => e in n ? rn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var bt = (n, e, t) => on(n, typeof e != "symbol" ? e + "" : e, t), Gt = (n, e, t) => e.has(n) || zt("Cannot " + t);
var ie = (n, e, t) => (Gt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), wt = (n, e, t) => e.has(n) ? zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Je = (n, e, t, i) => (Gt(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t);
import * as Ft from "@maptiler/sdk";
function A() {
}
function sn(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Si(n) {
  return n();
}
function jt() {
  return /* @__PURE__ */ Object.create(null);
}
function ge(n) {
  n.forEach(Si);
}
function xi(n) {
  return typeof n == "function";
}
function Ee(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let $e;
function K(n, e) {
  return n === e ? !0 : ($e || ($e = document.createElement("a")), $e.href = e, n === $e.href);
}
function ln(n) {
  return Object.keys(n).length === 0;
}
function un(n, e, t, i) {
  if (n) {
    const r = Mi(n, e, t, i);
    return n[0](r);
  }
}
function Mi(n, e, t, i) {
  return n[1] && i ? sn(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function an(n, e, t, i) {
  if (n[2] && i) {
    const r = n[2](i(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const o = [], a = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < a; s += 1)
        o[s] = e.dirty[s] | r[s];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function cn(n, e, t, i, r, o) {
  if (r) {
    const a = Mi(e, t, i, o);
    n.p(a, r);
  }
}
function fn(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Zt(n) {
  return n ?? "";
}
function P(n, e) {
  n.appendChild(e);
}
function z(n, e, t) {
  n.insertBefore(e, t || null);
}
function B(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function W(n) {
  return document.createElement(n);
}
function le(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function be(n) {
  return document.createTextNode(n);
}
function te() {
  return be(" ");
}
function dn() {
  return be("");
}
function J(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function hn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function v(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function gn(n) {
  return Array.from(n.childNodes);
}
function ze(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function qt(n, e) {
  n.value = e ?? "";
}
function re(n, e, t) {
  n.classList.toggle(e, !!t);
}
function mn(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
let Ge;
function Ue(n) {
  Ge = n;
}
function Ci() {
  if (!Ge) throw new Error("Function called outside component initialization");
  return Ge;
}
function yn(n) {
  Ci().$$.on_destroy.push(n);
}
function vn() {
  const n = Ci();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const r = n.$$.callbacks[e];
    if (r) {
      const o = mn(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return r.slice().forEach((a) => {
        a.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Qt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Ie = [], St = [];
let Oe = [];
const Ht = [], pn = /* @__PURE__ */ Promise.resolve();
let xt = !1;
function bn() {
  xt || (xt = !0, pn.then(ki));
}
function Mt(n) {
  Oe.push(n);
}
const _t = /* @__PURE__ */ new Set();
let Pe = 0;
function ki() {
  if (Pe !== 0)
    return;
  const n = Ge;
  do {
    try {
      for (; Pe < Ie.length; ) {
        const e = Ie[Pe];
        Pe++, Ue(e), wn(e.$$);
      }
    } catch (e) {
      throw Ie.length = 0, Pe = 0, e;
    }
    for (Ue(null), Ie.length = 0, Pe = 0; St.length; ) St.pop()();
    for (let e = 0; e < Oe.length; e += 1) {
      const t = Oe[e];
      _t.has(t) || (_t.add(t), t());
    }
    Oe.length = 0;
  } while (Ie.length);
  for (; Ht.length; )
    Ht.pop()();
  xt = !1, _t.clear(), Ue(n);
}
function wn(n) {
  if (n.fragment !== null) {
    n.update(), ge(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Mt);
  }
}
function _n(n) {
  const e = [], t = [];
  Oe.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Oe = e;
}
const et = /* @__PURE__ */ new Set();
let Ce;
function tt() {
  Ce = {
    r: 0,
    c: [],
    p: Ce
    // parent group
  };
}
function it() {
  Ce.r || ge(Ce.c), Ce = Ce.p;
}
function Z(n, e) {
  n && n.i && (et.delete(n), n.i(e));
}
function V(n, e, t, i) {
  if (n && n.o) {
    if (et.has(n)) return;
    et.add(n), Ce.c.push(() => {
      et.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function Vt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function En(n, e) {
  V(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Ln(n, e, t, i, r, o, a, s, u, l, d, c) {
  let f = n.length, h = o.length, p = f;
  const b = {};
  for (; p--; ) b[n[p].key] = p;
  const m = [], y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), L = [];
  for (p = h; p--; ) {
    const S = c(r, o, p), w = t(S);
    let k = a.get(w);
    k ? L.push(() => k.p(S, e)) : (k = l(w, S), k.c()), y.set(w, m[p] = k), w in b && _.set(w, Math.abs(p - b[w]));
  }
  const E = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
  function x(S) {
    Z(S, 1), S.m(s, d), a.set(S.key, S), d = S.first, h--;
  }
  for (; f && h; ) {
    const S = m[h - 1], w = n[f - 1], k = S.key, I = w.key;
    S === w ? (d = S.first, f--, h--) : y.has(I) ? !a.has(k) || E.has(k) ? x(S) : C.has(I) ? f-- : _.get(k) > _.get(I) ? (C.add(k), x(S)) : (E.add(I), f--) : (u(w, a), f--);
  }
  for (; f--; ) {
    const S = n[f];
    y.has(S.key) || u(S, a);
  }
  for (; h; ) x(m[h - 1]);
  return ge(L), m;
}
function we(n) {
  n && n.c();
}
function de(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), Mt(() => {
    const o = n.$$.on_mount.map(Si).filter(xi);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : ge(o), n.$$.on_mount = [];
  }), r.forEach(Mt);
}
function he(n, e) {
  const t = n.$$;
  t.fragment !== null && (_n(t.after_update), ge(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Sn(n, e) {
  n.$$.dirty[0] === -1 && (Ie.push(n), bn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Le(n, e, t, i, r, o, a = null, s = [-1]) {
  const u = Ge;
  Ue(n);
  const l = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: A,
    not_equal: r,
    bound: jt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: jt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  a && a(l.root);
  let d = !1;
  if (l.ctx = t ? t(n, e.props || {}, (c, f, ...h) => {
    const p = h.length ? h[0] : f;
    return l.ctx && r(l.ctx[c], l.ctx[c] = p) && (!l.skip_bound && l.bound[c] && l.bound[c](p), d && Sn(n, c)), f;
  }) : [], l.update(), d = !0, ge(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = gn(e.target);
      l.fragment && l.fragment.l(c), c.forEach(B);
    } else
      l.fragment && l.fragment.c();
    e.intro && Z(n.$$.fragment), de(n, e.target, e.anchor), ki();
  }
  Ue(u);
}
class Se {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    bt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    bt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    he(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!xi(t))
      return A;
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
    this.$$set && !ln(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const xn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xn);
function Mn(n) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), v(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), v(e, "viewBox", "0 0 14 14"), v(e, "width", "13"), v(e, "height", "13"), v(e, "class", "svelte-en2qvf");
    },
    m(i, r) {
      z(i, e, r), P(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(i) {
      i && B(e);
    }
  };
}
class Ni extends Se {
  constructor(e) {
    super(), Le(this, e, null, Mn, Ee, {});
  }
}
function Cn(n) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), v(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), v(e, "viewBox", "0 0 30 30"), v(e, "fill", "none"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "class", "svelte-d2loi5");
    },
    m(i, r) {
      z(i, e, r), P(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(i) {
      i && B(e);
    }
  };
}
class Ti extends Se {
  constructor(e) {
    super(), Le(this, e, null, Cn, Ee, {});
  }
}
function kn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || v(e, "src", t), v(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") && v(e, "src", t), r & /*placeType*/
      64 && v(
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
function Nn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") || v(e, "src", t), v(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") && v(e, "src", t), r & /*placeType*/
      64 && v(
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
function Tn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || v(e, "src", t), v(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") && v(e, "src", t), r & /*placeType*/
      64 && v(
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
function Pn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || v(e, "src", t), v(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") && v(e, "src", t), r & /*placeType*/
      64 && v(
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
function Rn(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || v(e, "src", t), v(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") && v(e, "src", t), r & /*placeType*/
      64 && v(
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
function In(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || v(e, "src", t), v(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") && v(e, "src", t), r & /*placeType*/
      64 && v(
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
function On(n) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || v(e, "src", t), v(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r);
    },
    p(i, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") && v(e, "src", t), r & /*placeType*/
      64 && v(
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
function Wn(n) {
  let e, t, i, r;
  return {
    c() {
      e = W("img"), K(e.src, t = /*imageUrl*/
      n[5]) || v(e, "src", t), v(
        e,
        "alt",
        /*category*/
        n[4]
      ), v(e, "class", "svelte-ltkwvy");
    },
    m(o, a) {
      z(o, e, a), i || (r = J(
        e,
        "error",
        /*error_handler*/
        n[14]
      ), i = !0);
    },
    p(o, a) {
      a & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      o[5]) && v(e, "src", t), a & /*category*/
      16 && v(
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
function Yt(n) {
  let e, t;
  return {
    c() {
      e = W("span"), t = be(
        /*placeType*/
        n[6]
      ), v(e, "class", "secondary svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r), P(e, t);
    },
    p(i, r) {
      r & /*placeType*/
      64 && ze(
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
function An(n) {
  let e, t, i, r, o, a, s, u, l, d = (
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
    n[0].address && !/*feature*/
    n[0].id.startsWith("road.") && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5]) && !/*isReverse*/
    n[7]
  ), p, b, m = (
    /*isReverse*/
    (n[7] ? "" : (
      /*feature*/
      n[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), y, _, L;
  function E(w, k) {
    return k & /*feature*/
    1 && (t = null), k & /*feature*/
    1 && (i = null), k & /*feature*/
    1 && (r = null), k & /*feature*/
    1 && (o = null), /*imageUrl*/
    w[5] ? Wn : (
      /*feature*/
      w[0].address ? On : (t == null && (t = !!/*feature*/
      w[0].id.startsWith("road.")), t ? In : (i == null && (i = !!/*feature*/
      w[0].id.startsWith("address.")), i ? Rn : (r == null && (r = !!/*feature*/
      w[0].id.startsWith("postal_code.")), r ? Pn : (o == null && (o = !!/*feature*/
      w[0].id.startsWith("poi.")), o ? Tn : (
        /*isReverse*/
        w[7] ? Nn : kn
      )))))
    );
  }
  let C = E(n, -1), x = C(n), S = h && Yt(n);
  return {
    c() {
      e = W("li"), x.c(), a = te(), s = W("span"), u = W("span"), l = W("span"), c = be(d), f = te(), S && S.c(), p = te(), b = W("span"), y = be(m), v(l, "class", "primary svelte-ltkwvy"), v(u, "class", "svelte-ltkwvy"), v(b, "class", "line2 svelte-ltkwvy"), v(s, "class", "texts svelte-ltkwvy"), v(e, "tabindex", "0"), v(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), v(e, "class", "svelte-ltkwvy"), re(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(w, k) {
      z(w, e, k), x.m(e, null), P(e, a), P(e, s), P(s, u), P(u, l), P(l, c), P(u, f), S && S.m(u, null), P(s, p), P(s, b), P(b, y), _ || (L = [
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
      ], _ = !0);
    },
    p(w, [k]) {
      C === (C = E(w, k)) && x ? x.p(w, k) : (x.d(1), x = C(w), x && (x.c(), x.m(e, a))), k & /*feature*/
      1 && d !== (d = /*isReverse*/
      (w[7] ? (
        /*feature*/
        w[0].place_name
      ) : (
        /*feature*/
        w[0].place_name.replace(/,.*/, "")
      )) + "") && ze(c, d), k & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      w[2] === "always" || /*showPlaceType*/
      w[2] && !/*feature*/
      w[0].address && !/*feature*/
      w[0].id.startsWith("road.") && !/*feature*/
      w[0].id.startsWith("address.") && !/*feature*/
      w[0].id.startsWith("postal_code.") && (!/*feature*/
      w[0].id.startsWith("poi.") || !/*imageUrl*/
      w[5]) && !/*isReverse*/
      w[7]), h ? S ? S.p(w, k) : (S = Yt(w), S.c(), S.m(u, null)) : S && (S.d(1), S = null), k & /*feature*/
      1 && m !== (m = /*isReverse*/
      (w[7] ? "" : (
        /*feature*/
        w[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && ze(y, m), k & /*selected*/
      2 && v(
        e,
        "data-selected",
        /*selected*/
        w[1]
      ), k & /*selected*/
      2 && re(
        e,
        "selected",
        /*selected*/
        w[1]
      );
    },
    i: A,
    o: A,
    d(w) {
      w && B(e), x.d(), S && S.d(), _ = !1, ge(L);
    }
  };
}
function Bn(n, e, t) {
  var L;
  let i, r, { feature: o } = e, { selected: a = !1 } = e, { showPlaceType: s } = e, { missingIconsCache: u } = e, { iconsBaseUrl: l } = e;
  const d = (L = o.properties) == null ? void 0 : L.categories;
  let c, f, h = 0, p = o.place_type[0] === "reverse";
  function b() {
    f && u.add(f), t(10, h++, h);
  }
  function m(E) {
    Qt.call(this, n, E);
  }
  function y(E) {
    Qt.call(this, n, E);
  }
  const _ = () => b();
  return n.$$set = (E) => {
    "feature" in E && t(0, o = E.feature), "selected" in E && t(1, a = E.selected), "showPlaceType" in E && t(2, s = E.showPlaceType), "missingIconsCache" in E && t(9, u = E.missingIconsCache), "iconsBaseUrl" in E && t(3, l = E.iconsBaseUrl);
  }, n.$$.update = () => {
    var E, C, x, S;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, i--, i), t(4, c = d == null ? void 0 : d[i]), t(5, f = c ? l + c.replace(/ /g, "_") + ".svg" : void 0);
      while (i > -1 && (!f || u.has(f)));
    n.$$.dirty & /*feature*/
    1 && t(6, r = ((C = (E = o.properties) == null ? void 0 : E.categories) == null ? void 0 : C.join(", ")) ?? ((S = (x = o.properties) == null ? void 0 : x.place_type_name) == null ? void 0 : S[0]) ?? o.place_type[0]);
  }, t(11, i = (d == null ? void 0 : d.length) ?? 0), [
    o,
    a,
    s,
    l,
    c,
    f,
    r,
    p,
    b,
    u,
    h,
    i,
    m,
    y,
    _
  ];
}
class Dn extends Se {
  constructor(e) {
    super(), Le(this, e, Bn, An, Ee, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Un(n) {
  let e;
  return {
    c() {
      e = W("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', v(e, "class", "svelte-7cmwmc");
    },
    m(t, i) {
      z(t, e, i);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && B(e);
    }
  };
}
class zn extends Se {
  constructor(e) {
    super(), Le(this, e, null, Un, Ee, {});
  }
}
function Gn(n) {
  let e, t, i;
  return {
    c() {
      e = le("svg"), t = le("path"), v(t, "stroke-width", "4"), v(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), v(t, "class", "svelte-gzo3ar"), v(e, "width", i = /*displayIn*/
      n[0] === "list" ? 20 : void 0), v(e, "viewBox", "0 0 70 85"), v(e, "fill", "none"), v(e, "class", "svelte-gzo3ar"), re(
        e,
        "in-map",
        /*displayIn*/
        n[0] !== "list"
      ), re(
        e,
        "list-icon",
        /*displayIn*/
        n[0] === "list"
      );
    },
    m(r, o) {
      z(r, e, o), P(e, t);
    },
    p(r, [o]) {
      o & /*displayIn*/
      1 && i !== (i = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && v(e, "width", i), o & /*displayIn*/
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
    i: A,
    o: A,
    d(r) {
      r && B(e);
    }
  };
}
function Fn(n, e, t) {
  let { displayIn: i } = e;
  return n.$$set = (r) => {
    "displayIn" in r && t(0, i = r.displayIn);
  }, [i];
}
class jn extends Se {
  constructor(e) {
    super(), Le(this, e, Fn, Gn, Ee, { displayIn: 0 });
  }
}
function Zn(n) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), v(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), v(e, "viewBox", "0 0 60.006 21.412"), v(e, "width", "14"), v(e, "height", "20"), v(e, "class", "svelte-en2qvf");
    },
    m(i, r) {
      z(i, e, r), P(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(i) {
      i && B(e);
    }
  };
}
class qn extends Se {
  constructor(e) {
    super(), Le(this, e, null, Zn, Ee, {});
  }
}
function Qn(n) {
  let e, t, i;
  return {
    c() {
      e = le("svg"), t = le("circle"), i = le("path"), v(t, "cx", "4.789"), v(t, "cy", "4.787"), v(t, "r", "3.85"), v(t, "class", "svelte-1aq105l"), v(i, "d", "M12.063 12.063 7.635 7.635"), v(i, "class", "svelte-1aq105l"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "width", "13"), v(e, "height", "13"), v(e, "viewBox", "0 0 13 13"), v(e, "class", "svelte-1aq105l");
    },
    m(r, o) {
      z(r, e, o), P(e, t), P(e, i);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && B(e);
    }
  };
}
class Hn extends Se {
  constructor(e) {
    super(), Le(this, e, null, Qn, Ee, {});
  }
}
function Vn(n, e, t) {
  const i = e[1], r = e[0], o = i - r;
  return n === i && t ? n : ((n - r) % o + o) % o + r;
}
function rt(n) {
  const e = [...n];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ae;
async function Yn(n, e, t) {
  const i = n == null ? void 0 : n.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(i && (r.minZoom != null && r.minZoom > i[0] || r.maxZoom != null && r.maxZoom < i[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Ae && r.cachedLocationExpiry && Ae.time + r.cachedLocationExpiry > Date.now()) {
          if (!Ae.coords)
            break e;
          return Ae.coords;
        }
        let o;
        try {
          return o = await new Promise((a, s) => {
            t.signal.addEventListener("abort", () => {
              s(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (u) => {
                a(
                  [u.coords.longitude, u.coords.latitude].map((l) => l.toFixed(6)).join(",")
                );
              },
              (u) => {
                s(u);
              },
              r
            );
          }), o;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Ae = {
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
const Kn = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Kt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Xt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Jt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, $t = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, ei = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Xn(n) {
  if (!["DMS", "DM", "DD"].includes(n))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((h) => Number(h.trim())), t = Number(e[0]), i = Number(e[1]), r = Math.abs(t), o = Math.abs(i), a = t > 0 ? "N" : "S", s = i > 0 ? "E" : "W";
    let u;
    n == "DD" && (u = `${r}° ${a}, ${o}° ${s}`);
    const l = Math.floor(r), d = Math.floor(o), c = (r - l) * 60, f = (o - d) * 60;
    if (n == "DM") {
      let h = ti(c, 3).toFixed(3).padStart(6, "0"), p = ti(f, 3).toFixed(3).padStart(6, "0");
      h.endsWith(".000") && p.endsWith(".000") && (h = h.replace(/\.000$/, ""), p = p.replace(/\.000$/, "")), u = `${l}° ${h}' ${a}, ${d}° ${p}' ${s}`;
    }
    if (n == "DMS") {
      const h = Math.floor(c), p = Math.floor(f);
      let b = ((c - h) * 60).toFixed(1).padStart(4, "0"), m = ((f - p) * 60).toFixed(1).padStart(4, "0");
      const y = h.toString().padStart(2, "0"), _ = p.toString().padStart(2, "0");
      b.endsWith(".0") && m.endsWith(".0") && (b = b.replace(/\.0$/, ""), m = m.replace(/\.0$/, "")), u = `${l}° ${y}' ${b}" ${a}, ${d}° ${_}' ${m}" ${s}`;
    }
    return u;
  } else
    throw new Error("no decimal coordinates to convert");
}
function ti(n, e) {
  const t = Math.pow(10, e);
  return Math.round((n + Number.EPSILON) * t) / t;
}
function Rt(n, e) {
  e || (e = 5), n = n.replace(/\s+/g, " ").trim();
  let t = null, i = null, r = "", o = "", a = null, s = [], u = !1;
  if (Kn.test(n))
    throw new Error("invalid coordinate value");
  if (Kt.test(n))
    if (s = Kt.exec(n), u = Be(s), u)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), i = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (i *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Xt.test(n))
    if (s = Xt.exec(n), u = Be(s), u) {
      if (t = s[2], i = s[6], t.includes(",") && (t = t.replace(",", ".")), i.includes(",") && (i = i.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(i)) == Number(i))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], o = s[5]) : s[4] && (r = s[4], o = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Jt.test(n))
    if (s = Jt.exec(n), u = Be(s), u)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, a = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[9])), s[11] && (i += s[11] / 60), s[13] && (i += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[8]) : s[7] && (r = s[7], o = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if ($t.test(n))
    if (s = $t.exec(n), u = Be(s), u)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, a = "DM"), s[6] && (t += s[6] / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[10])), s[12] && (i += s[12] / 60), s[14] && (i += s[14] / 3600), parseInt(s[10]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ei.test(n)) {
    if (s = ei.exec(n), u = Be(s), s.filter((l) => l).length <= 5)
      throw new Error("invalid coordinates format");
    if (u)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, a = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[10])), s[12] && (i += s[12].replace(",", ".") / 60), s[14] && (i += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (u) {
    if (Math.abs(i) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !o || !r && o)
      throw new Error("invalid coordinates value");
    if (r && r == o)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), i.toString().includes(",") && (i = i.replace(",", "."));
    let l = /S|SOUTH/i;
    l.test(r) && t > 0 && (t = -1 * t), l = /W|WEST/i, l.test(o) && i > 0 && (i = -1 * i);
    const d = s[0].trim();
    let c, f;
    const h = /[,/;\u0020]/g, p = d.match(h);
    if (p == null) {
      const y = Math.floor(n.length / 2);
      c = d.substring(0, y).trim(), f = d.substring(y).trim();
    } else {
      let y;
      p.length % 2 == 1 ? y = Math.floor(p.length / 2) : y = p.length / 2 - 1;
      let _ = 0;
      if (y == 0)
        _ = d.indexOf(p[0]), c = d.substring(0, _).trim(), f = d.substring(_ + 1).trim();
      else {
        let L = 0, E = 0;
        for (; L <= y; )
          _ = d.indexOf(p[L], E), E = _ + 1, L++;
        c = d.substring(0, _).trim(), f = d.substring(_ + 1).trim();
      }
    }
    const b = c.split(".");
    if (b.length == 2 && b[1] == 0 && b[1].length != 2)
      throw new Error("invalid coordinates format");
    const m = f.split(".");
    if (m.length == 2 && m[1] == 0 && m[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(c) || /^\d+$/.test(f))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), i = Number(Number(i).toFixed(e)), Object.freeze({
      verbatimCoordinates: d,
      verbatimLatitude: c,
      verbatimLongitude: f,
      decimalLatitude: t,
      decimalLongitude: i,
      decimalCoordinates: `${t},${i}`,
      originalFormat: a,
      closeEnough: Jn,
      toCoordinateFormat: Xn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Be(n) {
  if (!isNaN(n[0]))
    return !1;
  const e = [...n];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, i = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let o = 0; o < r; o++) {
    const a = e[o], s = e[o + r], u = t.test(a) && t.test(s), l = i.test(a) && i.test(s), d = a == s;
    if (!(a == null && s == null)) {
      if (a == null || s == null)
        return !1;
      if (u || l || d)
        continue;
      return !1;
    }
  }
  return !0;
}
function ii(n, e) {
  const t = Math.abs(n - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Jn(n) {
  if (!n)
    throw new Error("coords must be provided");
  if (n.includes(",")) {
    const e = n.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ii(this.decimalLatitude, Number(e[0])) && ii(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const $n = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Rt.to = $n;
const er = [
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
], tr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, ir = [
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
], nr = [
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
function rr() {
  const n = [];
  return er.forEach((e) => {
    e.decimalLatitude ? n.push(e) : n.push({ ...e, ...tr });
  }), [...n, ...ir, ...nr];
}
const or = rr();
Rt.formats = or.map((n) => n.verbatimCoordinates);
const sr = Rt;
function ni(n, e, t) {
  const i = n.slice();
  return i[84] = e[t], i[86] = t, i;
}
function ri(n) {
  let e, t;
  return e = new zn({}), {
    c() {
      we(e.$$.fragment);
    },
    m(i, r) {
      de(e, i, r), t = !0;
    },
    i(i) {
      t || (Z(e.$$.fragment, i), t = !0);
    },
    o(i) {
      V(e.$$.fragment, i), t = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function oi(n) {
  let e, t, i, r, o;
  return t = new qn({}), {
    c() {
      e = W("button"), we(t.$$.fragment), v(e, "type", "button"), v(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), v(e, "class", "svelte-1uvos7g"), re(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(a, s) {
      z(a, e, s), de(t, e, null), i = !0, r || (o = J(
        e,
        "click",
        /*click_handler_2*/
        n[69]
      ), r = !0);
    },
    p(a, s) {
      (!i || s[0] & /*reverseButtonTitle*/
      512) && v(
        e,
        "title",
        /*reverseButtonTitle*/
        a[9]
      ), (!i || s[0] & /*reverseActive*/
      1) && re(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      i || (Z(t.$$.fragment, a), i = !0);
    },
    o(a) {
      V(t.$$.fragment, a), i = !1;
    },
    d(a) {
      a && B(e), he(t), r = !1, o();
    }
  };
}
function lr(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, o, a, s = Vt(
    /*listFeatures*/
    n[14]
  );
  const u = (l) => (
    /*feature*/
    l[84].id + /*feature*/
    (l[84].address ? "," + /*feature*/
    l[84].address : "")
  );
  for (let l = 0; l < s.length; l += 1) {
    let d = ni(n, s, l), c = u(d);
    i.set(c, t[l] = si(c, d));
  }
  return {
    c() {
      e = W("ul");
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      v(e, "class", "svelte-1uvos7g");
    },
    m(l, d) {
      z(l, e, d);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
      r = !0, o || (a = [
        J(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[73]
        ),
        J(
          e,
          "blur",
          /*blur_handler_1*/
          n[74]
        )
      ], o = !0);
    },
    p(l, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (s = Vt(
        /*listFeatures*/
        l[14]
      ), tt(), t = Ln(t, d, u, 1, l, s, i, e, En, si, null, ni), it());
    },
    i(l) {
      if (!r) {
        for (let d = 0; d < s.length; d += 1)
          Z(t[d]);
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
      o = !1, ge(a);
    }
  };
}
function ur(n) {
  let e, t, i, r, o, a;
  return t = new Ti({}), {
    c() {
      e = W("div"), we(t.$$.fragment), i = te(), r = W("div"), o = be(
        /*noResultsMessage*/
        n[7]
      ), v(r, "class", "svelte-1uvos7g"), v(e, "class", "no-results svelte-1uvos7g");
    },
    m(s, u) {
      z(s, e, u), de(t, e, null), P(e, i), P(e, r), P(r, o), a = !0;
    },
    p(s, u) {
      (!a || u[0] & /*noResultsMessage*/
      128) && ze(
        o,
        /*noResultsMessage*/
        s[7]
      );
    },
    i(s) {
      a || (Z(t.$$.fragment, s), a = !0);
    },
    o(s) {
      V(t.$$.fragment, s), a = !1;
    },
    d(s) {
      s && B(e), he(t);
    }
  };
}
function ar(n) {
  let e = "", t;
  return {
    c() {
      t = be(e);
    },
    m(i, r) {
      z(i, t, r);
    },
    p: A,
    i: A,
    o: A,
    d(i) {
      i && B(t);
    }
  };
}
function cr(n) {
  let e, t, i, r, o, a, s, u, l, d, c;
  return t = new Ti({}), u = new Ni({}), {
    c() {
      e = W("div"), we(t.$$.fragment), i = te(), r = W("div"), o = be(
        /*errorMessage*/
        n[6]
      ), a = te(), s = W("button"), we(u.$$.fragment), v(r, "class", "svelte-1uvos7g"), v(s, "class", "svelte-1uvos7g"), v(e, "class", "error svelte-1uvos7g");
    },
    m(f, h) {
      z(f, e, h), de(t, e, null), P(e, i), P(e, r), P(r, o), P(e, a), P(e, s), de(u, s, null), l = !0, d || (c = J(
        s,
        "click",
        /*click_handler_3*/
        n[70]
      ), d = !0);
    },
    p(f, h) {
      (!l || h[0] & /*errorMessage*/
      64) && ze(
        o,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      l || (Z(t.$$.fragment, f), Z(u.$$.fragment, f), l = !0);
    },
    o(f) {
      V(t.$$.fragment, f), V(u.$$.fragment, f), l = !1;
    },
    d(f) {
      f && B(e), he(t), he(u), d = !1, c();
    }
  };
}
function si(n, e) {
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
  function a() {
    return (
      /*focus_handler_1*/
      e[72](
        /*feature*/
        e[84]
      )
    );
  }
  return i = new Dn({
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
  }), i.$on("mouseenter", o), i.$on("focus", a), {
    key: n,
    first: null,
    c() {
      t = dn(), we(i.$$.fragment), this.first = t;
    },
    m(s, u) {
      z(s, t, u), de(i, s, u), r = !0;
    },
    p(s, u) {
      e = s;
      const l = {};
      u[0] & /*listFeatures*/
      16384 && (l.feature = /*feature*/
      e[84]), u[0] & /*showPlaceType*/
      1024 && (l.showPlaceType = /*showPlaceType*/
      e[10]), u[0] & /*selectedItemIndex, listFeatures*/
      49152 && (l.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[86]), u[0] & /*iconsBaseUrl*/
      4096 && (l.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), i.$set(l);
    },
    i(s) {
      r || (Z(i.$$.fragment, s), r = !0);
    },
    o(s) {
      V(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(t), he(i, s);
    }
  };
}
function fr(n) {
  let e, t, i, r, o, a, s, u, l, d, c, f, h, p, b, m, y, _, L, E, C, x = !1;
  o = new Hn({}), c = new Ni({});
  let S = (
    /*abortController*/
    n[19] && ri()
  ), w = (
    /*enableReverse*/
    n[5] === !0 && oi(n)
  );
  const k = (
    /*#slots*/
    n[61].default
  ), I = un(
    k,
    n,
    /*$$scope*/
    n[60],
    null
  ), D = [cr, ar, ur, lr], G = [];
  function O(M, F) {
    var $, oe;
    return (
      /*error*/
      M[18] ? 0 : (
        /*focusedDelayed*/
        M[16] ? (
          /*listFeatures*/
          (($ = M[14]) == null ? void 0 : $.length) === 0 ? 2 : (
            /*focusedDelayed*/
            M[16] && /*listFeatures*/
            ((oe = M[14]) != null && oe.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(m = O(n)) && (y = G[m] = D[m](n)), {
    c() {
      e = te(), t = W("form"), i = W("div"), r = W("button"), we(o.$$.fragment), a = te(), s = W("input"), u = te(), l = W("div"), d = W("button"), we(c.$$.fragment), f = te(), S && S.c(), h = te(), w && w.c(), p = te(), I && I.c(), b = te(), y && y.c(), v(r, "class", "search-button svelte-1uvos7g"), v(r, "type", "button"), v(
        s,
        "placeholder",
        /*placeholder*/
        n[8]
      ), v(
        s,
        "aria-label",
        /*placeholder*/
        n[8]
      ), v(s, "class", "svelte-1uvos7g"), v(d, "type", "button"), v(
        d,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), v(d, "class", "svelte-1uvos7g"), v(l, "class", "clear-button-container svelte-1uvos7g"), re(
        l,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), v(i, "class", "input-group svelte-1uvos7g"), v(t, "tabindex", "0"), v(t, "class", _ = Zt(
        /*className*/
        n[2]
      ) + " svelte-1uvos7g"), re(
        t,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(M, F) {
      z(M, e, F), z(M, t, F), P(t, i), P(i, r), de(o, r, null), P(i, a), P(i, s), n[63](s), qt(
        s,
        /*searchValue*/
        n[1]
      ), P(i, u), P(i, l), P(l, d), de(c, d, null), P(l, f), S && S.m(l, null), P(i, h), w && w.m(i, null), P(i, p), I && I.m(i, null), P(t, b), ~m && G[m].m(t, null), L = !0, E || (C = [
        J(
          r,
          "click",
          /*click_handler*/
          n[62]
        ),
        J(
          s,
          "input",
          /*input_1_input_handler*/
          n[64]
        ),
        J(
          s,
          "focus",
          /*focus_handler*/
          n[65]
        ),
        J(
          s,
          "blur",
          /*blur_handler*/
          n[66]
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
          n[67]
        ),
        J(
          d,
          "click",
          /*click_handler_1*/
          n[68]
        ),
        J(t, "submit", hn(
          /*handleOnSubmit*/
          n[21]
        ))
      ], E = !0);
    },
    p(M, F) {
      (!L || F[0] & /*placeholder*/
      256) && v(
        s,
        "placeholder",
        /*placeholder*/
        M[8]
      ), (!L || F[0] & /*placeholder*/
      256) && v(
        s,
        "aria-label",
        /*placeholder*/
        M[8]
      ), F[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      M[1] && qt(
        s,
        /*searchValue*/
        M[1]
      ), (!L || F[0] & /*clearButtonTitle*/
      8) && v(
        d,
        "title",
        /*clearButtonTitle*/
        M[3]
      ), /*abortController*/
      M[19] ? S ? F[0] & /*abortController*/
      524288 && Z(S, 1) : (S = ri(), S.c(), Z(S, 1), S.m(l, null)) : S && (tt(), V(S, 1, 1, () => {
        S = null;
      }), it()), (!L || F[0] & /*searchValue*/
      2) && re(
        l,
        "displayable",
        /*searchValue*/
        M[1] !== ""
      ), /*enableReverse*/
      M[5] === !0 ? w ? (w.p(M, F), F[0] & /*enableReverse*/
      32 && Z(w, 1)) : (w = oi(M), w.c(), Z(w, 1), w.m(i, p)) : w && (tt(), V(w, 1, 1, () => {
        w = null;
      }), it()), I && I.p && (!L || F[1] & /*$$scope*/
      536870912) && cn(
        I,
        k,
        M,
        /*$$scope*/
        M[60],
        L ? an(
          k,
          /*$$scope*/
          M[60],
          F,
          null
        ) : fn(
          /*$$scope*/
          M[60]
        ),
        null
      );
      let $ = m;
      m = O(M), m === $ ? ~m && G[m].p(M, F) : (y && (tt(), V(G[$], 1, 1, () => {
        G[$] = null;
      }), it()), ~m ? (y = G[m], y ? y.p(M, F) : (y = G[m] = D[m](M), y.c()), Z(y, 1), y.m(t, null)) : y = null), (!L || F[0] & /*className*/
      4 && _ !== (_ = Zt(
        /*className*/
        M[2]
      ) + " svelte-1uvos7g")) && v(t, "class", _), (!L || F[0] & /*className, collapsed, searchValue*/
      22) && re(
        t,
        "can-collapse",
        /*collapsed*/
        M[4] && /*searchValue*/
        M[1] === ""
      );
    },
    i(M) {
      L || (Z(x), Z(o.$$.fragment, M), Z(c.$$.fragment, M), Z(S), Z(w), Z(I, M), Z(y), L = !0);
    },
    o(M) {
      V(x), V(o.$$.fragment, M), V(c.$$.fragment, M), V(S), V(w), V(I, M), V(y), L = !1;
    },
    d(M) {
      M && (B(e), B(t)), he(o), n[63](null), he(c), S && S.d(), w && w.d(), I && I.d(M), ~m && G[m].d(), E = !1, ge(C);
    }
  };
}
function dr(n, e, t) {
  let i, { $$slots: r = {}, $$scope: o } = e;
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
  let { class: s = void 0 } = e, { apiKey: u } = e, { bbox: l = void 0 } = e, { clearButtonTitle: d = "clear" } = e, { clearOnBlur: c = !1 } = e, { collapsed: f = !1 } = e, { country: h = void 0 } = e, { debounceSearch: p = 200 } = e, { enableReverse: b = !1 } = e, { errorMessage: m = "Something went wrong…" } = e, { filter: y = () => !0 } = e, { flyTo: _ = !0 } = e, { fuzzyMatch: L = !0 } = e, { language: E = void 0 } = e, { limit: C = void 0 } = e, { mapController: x = void 0 } = e, { minLength: S = 2 } = e, { noResultsMessage: w = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: I = [{ type: "server-geolocation" }] } = e, { reverseActive: D = b === "always" } = e, { reverseButtonTitle: G = "toggle reverse geocoding" } = e, { searchValue: O = "" } = e, { showFullGeometry: M = !0 } = e, { showPlaceType: F = "ifNeeded" } = e, { showResultsWhileTyping: $ = !0 } = e, { selectFirst: oe = !0 } = e, { flyToSelected: lt = !1 } = e, { markerOnSelected: Qe = !0 } = e, { types: xe = void 0 } = e, { exhaustiveReverseGeocoding: ut = !1 } = e, { excludeTypes: He = !1 } = e, { zoom: ke = a } = e, { maxZoom: Ve = void 0 } = e, { apiUrl: at = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: ct = {} } = e, { iconsBaseUrl: At = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.0.0/icons/" } = e, { adjustUrlQuery: ft = () => {
  } } = e;
  function Ai() {
    ue.focus();
  }
  function Bi() {
    ue.blur();
  }
  function Bt(g, j = !0, H = !1) {
    t(1, O = g), j ? (t(15, U = -1), Ut()) : (mt(!H, H), setTimeout(() => {
      ue.focus(), ue.select();
    }));
  }
  function Di() {
    t(14, R = void 0), t(57, N = void 0), t(15, U = -1);
  }
  function Ui() {
    t(56, q = []), t(57, N = void 0);
  }
  let Ne = !1, R, q, N, Dt = "", ue, U = -1, ae, Ye = [], Me, Te, Ke, dt;
  const zi = /* @__PURE__ */ new Set(), me = vn();
  yn(() => {
    x && (x.setEventHandler(void 0), x.indicateReverse(!1), x.setSelectedMarker(-1), x.setMarkers(void 0, void 0));
  });
  function Ut(g) {
    if (Te && (clearTimeout(Te), Te = void 0), U > -1 && R)
      t(57, N = R[U]), t(1, O = N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")), t(18, ae = void 0), t(56, q = void 0), t(15, U = -1);
    else if (O) {
      const j = g || !ht(O);
      gt(O, { exact: !0 }).then(() => {
        t(56, q = R), t(57, N = void 0), j && Gi();
      }).catch((H) => t(18, ae = H));
    }
  }
  function ht(g) {
    try {
      return sr(g, 6);
    } catch {
      return !1;
    }
  }
  async function gt(g, { byId: j = !1, exact: H = !1 } = {}) {
    t(18, ae = void 0), Me == null || Me.abort();
    const ee = new AbortController();
    t(19, Me = ee);
    try {
      const T = ht(g), Q = new URLSearchParams();
      if (E !== void 0 && Q.set("language", Array.isArray(E) ? E.join(",") : E ?? ""), xe && Q.set("types", xe.join(",")), He && Q.set("excludeTypes", String(He)), l && Q.set("bbox", l.map((Xe) => Xe.toFixed(6)).join(",")), h && Q.set("country", Array.isArray(h) ? h.join(",") : h), !j && !T) {
        const Xe = await Yn(x, I, ee);
        Xe && Q.set("proximity", Xe), (H || !$) && Q.set("autocomplete", "false"), Q.set("fuzzyMatch", String(L));
      }
      C !== void 0 && (ut || !T || (xe == null ? void 0 : xe.length) === 1) && Q.set("limit", String(C)), Q.set("key", u), ft(Q);
      const ce = at + "/" + encodeURIComponent(T ? T.decimalLongitude + "," + T.decimalLatitude : g) + ".json?" + Q.toString();
      if (ce === Dt) {
        j ? (t(14, R = void 0), t(57, N = Ye[0])) : t(14, R = Ye);
        return;
      }
      Dt = ce;
      const vt = await fetch(ce, { signal: ee.signal, ...ct });
      if (!vt.ok)
        throw new Error(await vt.text());
      const pt = await vt.json();
      me("response", { url: ce, featureCollection: pt }), j ? (t(14, R = void 0), t(57, N = pt.features[0]), Ye = [N]) : (t(14, R = pt.features.filter(y)), T && R.unshift({
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
      }), Ye = R, T && ue.focus());
    } catch (T) {
      if (T && typeof T == "object" && "name" in T && T.name === "AbortError")
        return;
      throw T;
    } finally {
      ee === Me && t(19, Me = void 0);
    }
  }
  function Gi() {
    var ee;
    if (!(q != null && q.length) || !_)
      return;
    const g = [180, 90, -180, -90], j = !q.some((T) => !T.matching_text);
    let H;
    for (const T of q) {
      const Q = We(T);
      if (H = Ve ?? (H === void 0 ? Q : Q === void 0 ? H : Math.max(H, Q)), j || !T.matching_text)
        for (const ce of [0, 1, 2, 3])
          g[ce] = Math[ce < 2 ? "min" : "max"](g[ce], ((ee = T.bbox) == null ? void 0 : ee[ce]) ?? T.center[ce % 2]);
    }
    x && q.length > 0 && (N && g[0] === g[2] && g[1] === g[3] ? x.flyTo(N.center, We(N)) : x.fitBounds(rt(g), 50, H));
  }
  function We(g) {
    var H;
    if (!g.bbox || g.bbox[0] !== g.bbox[2] && g.bbox[1] !== g.bbox[3])
      return;
    if (typeof ke == "number")
      return g.id.startsWith("poi.") || g.id.startsWith("address.") ? Ve : ke;
    const j = g.id.replace(/\..*/, "");
    return (Array.isArray((H = g.properties) == null ? void 0 : H.categories) ? g.properties.categories.reduce(
      (ee, T) => {
        const Q = ke[j + "." + T];
        return ee === void 0 ? Q : Q === void 0 ? ee : Math.max(ee, Q);
      },
      void 0
    ) : void 0) ?? ke[j];
  }
  function Fi(g) {
    t(0, D = b === "always"), t(14, R = void 0), t(57, N = void 0), t(15, U = -1), Bt(g[1].toFixed(6) + ", " + Vn(g[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function ji(g) {
    if (!R)
      return;
    let j = g.key === "ArrowDown" ? 1 : g.key === "ArrowUp" ? -1 : 0;
    j && (U === (oe ? 0 : -1) && j === -1 && t(15, U = R.length), t(15, U += j), U >= R.length && t(15, U = -1), U < 0 && oe && t(15, U = 0), g.preventDefault());
  }
  function mt(g = !0, j = !1) {
    if (t(18, ae = void 0), $ || j) {
      if (Te && clearTimeout(Te), O.length < S)
        return;
      const H = O;
      Te = window.setTimeout(
        () => {
          gt(H).catch((ee) => t(18, ae = ee));
        },
        g ? p : 0
      );
    } else
      t(14, R = void 0), t(18, ae = void 0);
  }
  function yt(g) {
    t(57, N = g), t(1, O = g.place_name), t(15, U = -1);
  }
  const Zi = () => ue.focus();
  function qi(g) {
    St[g ? "unshift" : "push"](() => {
      ue = g, t(17, ue);
    });
  }
  function Qi() {
    O = this.value, t(1, O), t(13, Ne), t(28, c);
  }
  const Hi = () => t(13, Ne = !0), Vi = () => t(13, Ne = !1), Yi = () => mt(), Ki = () => {
    t(1, O = ""), ue.focus();
  }, Xi = () => t(0, D = !D), Ji = () => t(18, ae = void 0), $i = (g) => t(15, U = g), en = (g) => yt(g), tn = () => {
    oe || t(15, U = -1);
  }, nn = () => {
  };
  return n.$$set = (g) => {
    "class" in g && t(2, s = g.class), "apiKey" in g && t(26, u = g.apiKey), "bbox" in g && t(27, l = g.bbox), "clearButtonTitle" in g && t(3, d = g.clearButtonTitle), "clearOnBlur" in g && t(28, c = g.clearOnBlur), "collapsed" in g && t(4, f = g.collapsed), "country" in g && t(29, h = g.country), "debounceSearch" in g && t(30, p = g.debounceSearch), "enableReverse" in g && t(5, b = g.enableReverse), "errorMessage" in g && t(6, m = g.errorMessage), "filter" in g && t(31, y = g.filter), "flyTo" in g && t(32, _ = g.flyTo), "fuzzyMatch" in g && t(33, L = g.fuzzyMatch), "language" in g && t(34, E = g.language), "limit" in g && t(35, C = g.limit), "mapController" in g && t(36, x = g.mapController), "minLength" in g && t(37, S = g.minLength), "noResultsMessage" in g && t(7, w = g.noResultsMessage), "placeholder" in g && t(8, k = g.placeholder), "proximity" in g && t(38, I = g.proximity), "reverseActive" in g && t(0, D = g.reverseActive), "reverseButtonTitle" in g && t(9, G = g.reverseButtonTitle), "searchValue" in g && t(1, O = g.searchValue), "showFullGeometry" in g && t(39, M = g.showFullGeometry), "showPlaceType" in g && t(10, F = g.showPlaceType), "showResultsWhileTyping" in g && t(40, $ = g.showResultsWhileTyping), "selectFirst" in g && t(11, oe = g.selectFirst), "flyToSelected" in g && t(41, lt = g.flyToSelected), "markerOnSelected" in g && t(42, Qe = g.markerOnSelected), "types" in g && t(43, xe = g.types), "exhaustiveReverseGeocoding" in g && t(44, ut = g.exhaustiveReverseGeocoding), "excludeTypes" in g && t(45, He = g.excludeTypes), "zoom" in g && t(46, ke = g.zoom), "maxZoom" in g && t(47, Ve = g.maxZoom), "apiUrl" in g && t(48, at = g.apiUrl), "fetchParameters" in g && t(49, ct = g.fetchParameters), "iconsBaseUrl" in g && t(12, At = g.iconsBaseUrl), "adjustUrlQuery" in g && t(50, ft = g.adjustUrlQuery), "$$scope" in g && t(60, o = g.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*enableReverse*/
    32 && t(0, D = b === "always"), n.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, Ke = Ne), c && !Ne && t(1, O = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | n.$$.dirty[1] & /*minLength*/
    64 && O.length < S && (t(57, N = void 0), t(14, R = void 0), t(18, ae = void 0), t(56, q = R)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    67109120 && M && N && !N.address && N.geometry.type === "Point" && N.place_type[0] !== "reverse" && gt(N.id, { byId: !0 }).catch((g) => t(18, ae = g)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    201326626 && (x && N && N.id !== dt && _ && (!N.bbox || N.bbox[0] === N.bbox[2] && N.bbox[1] === N.bbox[3] ? x.flyTo(N.center, We(N)) : x.fitBounds(rt(N.bbox), 50, We(N)), t(14, R = void 0), t(56, q = void 0), t(15, U = -1)), t(58, dt = N == null ? void 0 : N.id)), n.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && oe && R != null && R.length && t(15, U = 0), n.$$.dirty[0] & /*searchValue*/
    2 && t(15, U = -1), n.$$.dirty[0] & /*listFeatures*/
    16384 | n.$$.dirty[1] & /*markedFeatures*/
    33554432 && q !== R && t(56, q = void 0), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | n.$$.dirty[1] & /*mapController, markedFeatures*/
    33554464 && x && x.setEventHandler((g) => {
      switch (g.type) {
        case "mapClick":
          D && Fi(g.coordinates);
          break;
        case "markerClick":
          {
            const j = R == null ? void 0 : R.find((H) => H.id === g.id);
            j && yt(j);
          }
          break;
        case "markerMouseEnter":
          q && t(15, U = Ke ? (R == null ? void 0 : R.findIndex((j) => j.id === g.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          q && t(15, U = -1);
          break;
      }
    }), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(59, i = R == null ? void 0 : R[U]), n.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    268436514 && x && i && _ && lt && x.flyTo(i.center, We(i)), n.$$.dirty[1] & /*markerOnSelected, mapController*/
    2080 && (Qe || x == null || x.setMarkers(void 0, void 0)), n.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    301991968 && x && Qe && !q && (x.setMarkers(i ? [i] : void 0, void 0), x.setSelectedMarker(i ? 0 : -1)), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    100663328 && x && x.setMarkers(q, N), n.$$.dirty[0] & /*selectedItemIndex*/
    32768 | n.$$.dirty[1] & /*markedFeatures, mapController*/
    33554464 && q && x && x.setSelectedMarker(U), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    32 && x) {
      const g = ht(O);
      x.setReverseMarker(g ? [g.decimalLongitude, g.decimalLatitude] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    268435456 && me("select", i), n.$$.dirty[1] & /*picked*/
    67108864 && me("pick", N), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && me("optionsVisibilityChange", Ke && !!R), n.$$.dirty[0] & /*listFeatures*/
    16384 && me("featuresListed", R), n.$$.dirty[1] & /*markedFeatures*/
    33554432 && me("featuresMarked", q), n.$$.dirty[0] & /*reverseActive*/
    1 && me("reverseToggle", D), n.$$.dirty[0] & /*searchValue*/
    2 && me("queryChange", O), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    32 && x && x.indicateReverse(D);
  }, [
    D,
    O,
    s,
    d,
    f,
    b,
    m,
    w,
    k,
    G,
    F,
    oe,
    At,
    Ne,
    R,
    U,
    Ke,
    ue,
    ae,
    Me,
    zi,
    Ut,
    ji,
    mt,
    yt,
    a,
    u,
    l,
    c,
    h,
    p,
    y,
    _,
    L,
    E,
    C,
    x,
    S,
    I,
    M,
    $,
    lt,
    Qe,
    xe,
    ut,
    He,
    ke,
    Ve,
    at,
    ct,
    ft,
    Ai,
    Bi,
    Bt,
    Di,
    Ui,
    q,
    N,
    dt,
    i,
    o,
    r,
    Zi,
    qi,
    Qi,
    Hi,
    Vi,
    Yi,
    Ki,
    Xi,
    Ji,
    $i,
    en,
    tn,
    nn
  ];
}
let hr = class extends Se {
  constructor(e) {
    super(), Le(
      this,
      e,
      dr,
      fr,
      Ee,
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
};
function Fe(n, e, t = {}) {
  const i = { type: "Feature" };
  return (t.id === 0 || t.id) && (i.id = t.id), t.bbox && (i.bbox = t.bbox), i.properties = e || {}, i.geometry = n, i;
}
function It(n, e, t = {}) {
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
  return Fe({
    type: "Polygon",
    coordinates: n
  }, e, t);
}
function je(n, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = n, t;
}
function Pi(n, e, t = {}) {
  return Fe({
    type: "MultiPolygon",
    coordinates: n
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
function gr(n, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, i, r, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
    return function(d) {
      return u([l, d]);
    };
  }
  function u(l) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (i = 1, r && (o = l[0] & 2 ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o;
      switch (r = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
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
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = l;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(l);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = e.call(n, t);
    } catch (d) {
      l = [6, d], r = 0;
    } finally {
      i = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var _e = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(e, t) {
      this.next = null, this.key = e, this.data = t, this.left = null, this.right = null;
    }
    return n;
  }()
);
function mr(n, e) {
  return n > e ? 1 : n < e ? -1 : 0;
}
function ye(n, e, t) {
  for (var i = new _e(null, null), r = i, o = i; ; ) {
    var a = t(n, e.key);
    if (a < 0) {
      if (e.left === null)
        break;
      if (t(n, e.left.key) < 0) {
        var s = e.left;
        if (e.left = s.right, s.right = e, e = s, e.left === null)
          break;
      }
      o.left = e, o = e, e = e.left;
    } else if (a > 0) {
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
function Et(n, e, t, i) {
  var r = new _e(n, e);
  if (t === null)
    return r.left = r.right = null, r;
  t = ye(n, t, i);
  var o = i(n, t.key);
  return o < 0 ? (r.left = t.left, r.right = t, t.left = null) : o >= 0 && (r.right = t.right, r.left = t, t.right = null), r;
}
function li(n, e, t) {
  var i = null, r = null;
  if (e) {
    e = ye(n, e, t);
    var o = t(e.key, n);
    o === 0 ? (i = e.left, r = e.right) : o < 0 ? (r = e.right, e.right = null, i = e) : (i = e.left, e.left = null, r = e);
  }
  return { left: i, right: r };
}
function yr(n, e, t) {
  return e === null ? n : (n === null || (e = ye(n.key, e, t), e.left = n), e);
}
function Ct(n, e, t, i, r) {
  if (n) {
    i("" + e + (t ? "└── " : "├── ") + r(n) + `
`);
    var o = e + (t ? "    " : "│   ");
    n.left && Ct(n.left, o, !1, i, r), n.right && Ct(n.right, o, !0, i, r);
  }
}
var Ot = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = mr), this._root = null, this._size = 0, this._comparator = e;
    }
    return n.prototype.insert = function(e, t) {
      return this._size++, this._root = Et(e, t, this._root, this._comparator);
    }, n.prototype.add = function(e, t) {
      var i = new _e(e, t);
      this._root === null && (i.left = i.right = null, this._size++, this._root = i);
      var r = this._comparator, o = ye(e, this._root, r), a = r(e, o.key);
      return a === 0 ? this._root = o : (a < 0 ? (i.left = o.left, i.right = o, o.left = null) : a > 0 && (i.right = o.right, i.left = o, o.right = null), this._size++, this._root = i), this._root;
    }, n.prototype.remove = function(e) {
      this._root = this._remove(e, this._root, this._comparator);
    }, n.prototype._remove = function(e, t, i) {
      var r;
      if (t === null)
        return null;
      t = ye(e, t, i);
      var o = i(e, t.key);
      return o === 0 ? (t.left === null ? r = t.right : (r = ye(e, t.left, i), r.right = t.right), this._size--, r) : t;
    }, n.prototype.pop = function() {
      var e = this._root;
      if (e) {
        for (; e.left; )
          e = e.left;
        return this._root = ye(e.key, this._root, this._comparator), this._root = this._remove(e.key, this._root, this._comparator), { key: e.key, data: e.data };
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
      return this._root && (this._root = ye(e, this._root, this._comparator), this._comparator(e, this._root.key) !== 0) ? null : this._root;
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
      for (var o = [], a = this._comparator, s = this._root, u; o.length !== 0 || s; )
        if (s)
          o.push(s), s = s.left;
        else {
          if (s = o.pop(), u = a(s.key, t), u > 0)
            break;
          if (a(s.key, e) >= 0 && i.call(r, s))
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
      return pr(this._root);
    }, n.prototype.load = function(e, t, i) {
      t === void 0 && (t = []), i === void 0 && (i = !1);
      var r = e.length, o = this._comparator;
      if (i && Tt(e, t, 0, r - 1, o), this._root === null)
        this._root = kt(e, t, 0, r), this._size = r;
      else {
        var a = br(this.toList(), vr(e, t), o);
        r = this._size + r, this._root = Nt({ head: a }, 0, r);
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
      return Ct(this._root, "", !0, function(i) {
        return t.push(i);
      }, e), t.join("");
    }, n.prototype.update = function(e, t, i) {
      var r = this._comparator, o = li(e, this._root, r), a = o.left, s = o.right;
      r(e, t) < 0 ? s = Et(t, i, s, r) : a = Et(t, i, a, r), this._root = yr(a, s, r);
    }, n.prototype.split = function(e) {
      return li(e, this._root, this._comparator);
    }, n.prototype[Symbol.iterator] = function() {
      var e, t, i;
      return gr(this, function(r) {
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
function kt(n, e, t, i) {
  var r = i - t;
  if (r > 0) {
    var o = t + Math.floor(r / 2), a = n[o], s = e[o], u = new _e(a, s);
    return u.left = kt(n, e, t, o), u.right = kt(n, e, o + 1, i), u;
  }
  return null;
}
function vr(n, e) {
  for (var t = new _e(null, null), i = t, r = 0; r < n.length; r++)
    i = i.next = new _e(n[r], e[r]);
  return i.next = null, t.next;
}
function pr(n) {
  for (var e = n, t = [], i = !1, r = new _e(null, null), o = r; !i; )
    e ? (t.push(e), e = e.left) : t.length > 0 ? (e = o = o.next = t.pop(), e = e.right) : i = !0;
  return o.next = null, r.next;
}
function Nt(n, e, t) {
  var i = t - e;
  if (i > 0) {
    var r = e + Math.floor(i / 2), o = Nt(n, e, r), a = n.head;
    return a.left = o, n.head = n.head.next, a.right = Nt(n, r + 1, t), a;
  }
  return null;
}
function br(n, e, t) {
  for (var i = new _e(null, null), r = i, o = n, a = e; o !== null && a !== null; )
    t(o.key, a.key) < 0 ? (r.next = o, o = o.next) : (r.next = a, a = a.next), r = r.next;
  return o !== null ? r.next = o : a !== null && (r.next = a), i.next;
}
function Tt(n, e, t, i, r) {
  if (!(t >= i)) {
    for (var o = n[t + i >> 1], a = t - 1, s = i + 1; ; ) {
      do
        a++;
      while (r(n[a], o) < 0);
      do
        s--;
      while (r(n[s], o) > 0);
      if (a >= s)
        break;
      var u = n[a];
      n[a] = n[s], n[s] = u, u = e[a], e[a] = e[s], e[s] = u;
    }
    Tt(n, e, t, s, r), Tt(n, e, s + 1, i, r);
  }
}
const fe = 11102230246251565e-32, Y = 134217729, wr = (3 + 8 * fe) * fe;
function Lt(n, e, t, i, r) {
  let o, a, s, u, l = e[0], d = i[0], c = 0, f = 0;
  d > l == d > -l ? (o = l, l = e[++c]) : (o = d, d = i[++f]);
  let h = 0;
  if (c < n && f < t)
    for (d > l == d > -l ? (a = l + o, s = o - (a - l), l = e[++c]) : (a = d + o, s = o - (a - d), d = i[++f]), o = a, s !== 0 && (r[h++] = s); c < n && f < t; )
      d > l == d > -l ? (a = o + l, u = a - o, s = o - (a - u) + (l - u), l = e[++c]) : (a = o + d, u = a - o, s = o - (a - u) + (d - u), d = i[++f]), o = a, s !== 0 && (r[h++] = s);
  for (; c < n; )
    a = o + l, u = a - o, s = o - (a - u) + (l - u), l = e[++c], o = a, s !== 0 && (r[h++] = s);
  for (; f < t; )
    a = o + d, u = a - o, s = o - (a - u) + (d - u), d = i[++f], o = a, s !== 0 && (r[h++] = s);
  return (o !== 0 || h === 0) && (r[h++] = o), h;
}
function _r(n, e) {
  let t = e[0];
  for (let i = 1; i < n; i++) t += e[i];
  return t;
}
function qe(n) {
  return new Float64Array(n);
}
const Er = (3 + 16 * fe) * fe, Lr = (2 + 12 * fe) * fe, Sr = (9 + 64 * fe) * fe * fe, Re = qe(4), ui = qe(8), ai = qe(12), ci = qe(16), X = qe(4);
function xr(n, e, t, i, r, o, a) {
  let s, u, l, d, c, f, h, p, b, m, y, _, L, E, C, x, S, w;
  const k = n - r, I = t - r, D = e - o, G = i - o;
  E = k * G, f = Y * k, h = f - (f - k), p = k - h, f = Y * G, b = f - (f - G), m = G - b, C = p * m - (E - h * b - p * b - h * m), x = D * I, f = Y * D, h = f - (f - D), p = D - h, f = Y * I, b = f - (f - I), m = I - b, S = p * m - (x - h * b - p * b - h * m), y = C - S, c = C - y, Re[0] = C - (y + c) + (c - S), _ = E + y, c = _ - E, L = E - (_ - c) + (y - c), y = L - x, c = L - y, Re[1] = L - (y + c) + (c - x), w = _ + y, c = w - _, Re[2] = _ - (w - c) + (y - c), Re[3] = w;
  let O = _r(4, Re), M = Lr * a;
  if (O >= M || -O >= M || (c = n - k, s = n - (k + c) + (c - r), c = t - I, l = t - (I + c) + (c - r), c = e - D, u = e - (D + c) + (c - o), c = i - G, d = i - (G + c) + (c - o), s === 0 && u === 0 && l === 0 && d === 0) || (M = Sr * a + wr * Math.abs(O), O += k * d + G * s - (D * l + I * u), O >= M || -O >= M)) return O;
  E = s * G, f = Y * s, h = f - (f - s), p = s - h, f = Y * G, b = f - (f - G), m = G - b, C = p * m - (E - h * b - p * b - h * m), x = u * I, f = Y * u, h = f - (f - u), p = u - h, f = Y * I, b = f - (f - I), m = I - b, S = p * m - (x - h * b - p * b - h * m), y = C - S, c = C - y, X[0] = C - (y + c) + (c - S), _ = E + y, c = _ - E, L = E - (_ - c) + (y - c), y = L - x, c = L - y, X[1] = L - (y + c) + (c - x), w = _ + y, c = w - _, X[2] = _ - (w - c) + (y - c), X[3] = w;
  const F = Lt(4, Re, 4, X, ui);
  E = k * d, f = Y * k, h = f - (f - k), p = k - h, f = Y * d, b = f - (f - d), m = d - b, C = p * m - (E - h * b - p * b - h * m), x = D * l, f = Y * D, h = f - (f - D), p = D - h, f = Y * l, b = f - (f - l), m = l - b, S = p * m - (x - h * b - p * b - h * m), y = C - S, c = C - y, X[0] = C - (y + c) + (c - S), _ = E + y, c = _ - E, L = E - (_ - c) + (y - c), y = L - x, c = L - y, X[1] = L - (y + c) + (c - x), w = _ + y, c = w - _, X[2] = _ - (w - c) + (y - c), X[3] = w;
  const $ = Lt(F, ui, 4, X, ai);
  E = s * d, f = Y * s, h = f - (f - s), p = s - h, f = Y * d, b = f - (f - d), m = d - b, C = p * m - (E - h * b - p * b - h * m), x = u * l, f = Y * u, h = f - (f - u), p = u - h, f = Y * l, b = f - (f - l), m = l - b, S = p * m - (x - h * b - p * b - h * m), y = C - S, c = C - y, X[0] = C - (y + c) + (c - S), _ = E + y, c = _ - E, L = E - (_ - c) + (y - c), y = L - x, c = L - y, X[1] = L - (y + c) + (c - x), w = _ + y, c = w - _, X[2] = _ - (w - c) + (y - c), X[3] = w;
  const oe = Lt($, ai, 4, X, ci);
  return ci[oe - 1];
}
function Mr(n, e, t, i, r, o) {
  const a = (e - o) * (t - r), s = (n - r) * (i - o), u = a - s, l = Math.abs(a + s);
  return Math.abs(u) >= Er * l ? u : -xr(n, e, t, i, r, o, l);
}
const De = (n, e) => n.ll.x <= e.x && e.x <= n.ur.x && n.ll.y <= e.y && e.y <= n.ur.y, Pt = (n, e) => {
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
let ve = Number.EPSILON;
ve === void 0 && (ve = Math.pow(2, -52));
const Cr = ve * ve, fi = (n, e) => {
  if (-ve < n && n < ve && -ve < e && e < ve)
    return 0;
  const t = n - e;
  return t * t < Cr * n * e ? 0 : n < e ? -1 : 1;
};
class kr {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new di(), this.yRounder = new di();
  }
  round(e, t) {
    return {
      x: this.xRounder.round(e),
      y: this.yRounder.round(t)
    };
  }
}
class di {
  constructor() {
    this.tree = new Ot(), this.round(0);
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
    if (i !== null && fi(t.key, i.key) === 0)
      return this.tree.remove(e), i.key;
    const r = this.tree.next(t);
    return r !== null && fi(t.key, r.key) === 0 ? (this.tree.remove(e), r.key) : e;
  }
}
const Ze = new kr(), nt = (n, e) => n.x * e.y - n.y * e.x, Ri = (n, e) => n.x * e.x + n.y * e.y, hi = (n, e, t) => {
  const i = Mr(n.x, n.y, e.x, e.y, t.x, t.y);
  return i > 0 ? -1 : i < 0 ? 1 : 0;
}, ot = (n) => Math.sqrt(Ri(n, n)), Nr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return nt(r, i) / ot(r) / ot(i);
}, Tr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return Ri(r, i) / ot(r) / ot(i);
}, gi = (n, e, t) => e.y === 0 ? null : {
  x: n.x + e.x / e.y * (t - n.y),
  y: t
}, mi = (n, e, t) => e.x === 0 ? null : {
  x: t,
  y: n.y + e.y / e.x * (t - n.x)
}, Pr = (n, e, t, i) => {
  if (e.x === 0) return mi(t, i, n.x);
  if (i.x === 0) return mi(n, e, t.x);
  if (e.y === 0) return gi(t, i, n.y);
  if (i.y === 0) return gi(n, e, t.y);
  const r = nt(e, i);
  if (r == 0) return null;
  const o = {
    x: t.x - n.x,
    y: t.y - n.y
  }, a = nt(o, e) / r, s = nt(o, i) / r, u = n.x + s * e.x, l = t.x + a * i.x, d = n.y + s * e.y, c = t.y + a * i.y, f = (u + l) / 2, h = (d + c) / 2;
  return {
    x: f,
    y: h
  };
};
class ne {
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const i = ne.comparePoints(e.point, t.point);
    return i !== 0 ? i : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : pe.compare(e.segment, t.segment));
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
        sine: Nr(this.point, e.point, o.point),
        cosine: Tr(this.point, e.point, o.point)
      });
    };
    return (r, o) => {
      t.has(r) || i(r), t.has(o) || i(o);
      const {
        sine: a,
        cosine: s
      } = t.get(r), {
        sine: u,
        cosine: l
      } = t.get(o);
      return a >= 0 && u >= 0 ? s < l ? 1 : s > l ? -1 : 0 : a < 0 && u < 0 ? s < l ? -1 : s > l ? 1 : 0 : u < a ? -1 : u > a ? 1 : 0;
    };
  }
}
let Rr = 0;
class pe {
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
    const i = e.leftSE.point.x, r = t.leftSE.point.x, o = e.rightSE.point.x, a = t.rightSE.point.x;
    if (a < i) return 1;
    if (o < r) return -1;
    const s = e.leftSE.point.y, u = t.leftSE.point.y, l = e.rightSE.point.y, d = t.rightSE.point.y;
    if (i < r) {
      if (u < s && u < l) return 1;
      if (u > s && u > l) return -1;
      const c = e.comparePoint(t.leftSE.point);
      if (c < 0) return 1;
      if (c > 0) return -1;
      const f = t.comparePoint(e.rightSE.point);
      return f !== 0 ? f : -1;
    }
    if (i > r) {
      if (s < u && s < d) return -1;
      if (s > u && s > d) return 1;
      const c = t.comparePoint(e.leftSE.point);
      if (c !== 0) return c;
      const f = e.comparePoint(t.rightSE.point);
      return f < 0 ? 1 : f > 0 ? -1 : 1;
    }
    if (s < u) return -1;
    if (s > u) return 1;
    if (o < a) {
      const c = t.comparePoint(e.rightSE.point);
      if (c !== 0) return c;
    }
    if (o > a) {
      const c = e.comparePoint(t.rightSE.point);
      if (c < 0) return 1;
      if (c > 0) return -1;
    }
    if (o !== a) {
      const c = l - s, f = o - i, h = d - u, p = a - r;
      if (c > f && h < p) return 1;
      if (c < f && h > p) return -1;
    }
    return o > a ? 1 : o < a || l < d ? -1 : l > d ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, i, r) {
    this.id = ++Rr, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = i, this.windings = r;
  }
  static fromRing(e, t, i) {
    let r, o, a;
    const s = ne.comparePoints(e, t);
    if (s < 0)
      r = e, o = t, a = 1;
    else if (s > 0)
      r = t, o = e, a = -1;
    else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
    const u = new ne(r, !0), l = new ne(o, !1);
    return new pe(u, l, [i], [a]);
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
    const o = (e.y - t.y) / r.y, a = t.x + o * r.x;
    if (e.x === a) return 0;
    const s = (e.x - t.x) / r.x, u = t.y + s * r.y;
    return e.y === u ? 0 : e.y < u ? -1 : 1;
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
    const t = this.bbox(), i = e.bbox(), r = Pt(t, i);
    if (r === null) return null;
    const o = this.leftSE.point, a = this.rightSE.point, s = e.leftSE.point, u = e.rightSE.point, l = De(t, s) && this.comparePoint(s) === 0, d = De(i, o) && e.comparePoint(o) === 0, c = De(t, u) && this.comparePoint(u) === 0, f = De(i, a) && e.comparePoint(a) === 0;
    if (d && l)
      return f && !c ? a : !f && c ? u : null;
    if (d)
      return c && o.x === u.x && o.y === u.y ? null : o;
    if (l)
      return f && a.x === s.x && a.y === s.y ? null : s;
    if (f && c) return null;
    if (f) return a;
    if (c) return u;
    const h = Pr(o, this.vector(), s, e.vector());
    return h === null || !De(r, h) ? null : Ze.round(h.x, h.y);
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
    const t = [], i = e.events !== void 0, r = new ne(e, !0), o = new ne(e, !1), a = this.rightSE;
    this.replaceRightSE(o), t.push(o), t.push(r);
    const s = new pe(r, a, this.rings.slice(), this.windings.slice());
    return ne.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(), ne.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (r.checkForConsuming(), o.checkForConsuming()), t;
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
    const r = pe.compare(t, i);
    if (r !== 0) {
      if (r > 0) {
        const o = t;
        t = i, i = o;
      }
      if (t.prev === i) {
        const o = t;
        t = i, i = o;
      }
      for (let o = 0, a = i.rings.length; o < a; o++) {
        const s = i.rings[o], u = i.windings[o], l = t.rings.indexOf(s);
        l === -1 ? (t.rings.push(s), t.windings.push(u)) : t.windings[l] += u;
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
    for (let s = 0, u = this.rings.length; s < u; s++) {
      const l = this.rings[s], d = this.windings[s], c = t.indexOf(l);
      c === -1 ? (t.push(l), i.push(d)) : i[c] += d;
    }
    const o = [], a = [];
    for (let s = 0, u = t.length; s < u; s++) {
      if (i[s] === 0) continue;
      const l = t[s], d = l.poly;
      if (a.indexOf(d) === -1)
        if (l.isExterior) o.push(d);
        else {
          a.indexOf(d) === -1 && a.push(d);
          const c = o.indexOf(l.poly);
          c !== -1 && o.splice(c, 1);
        }
    }
    for (let s = 0, u = o.length; s < u; s++) {
      const l = o[s].multiPoly;
      r.indexOf(l) === -1 && r.push(l);
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
class yi {
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
    for (let a = 1, s = e.length; a < s; a++) {
      if (typeof e[a][0] != "number" || typeof e[a][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let u = Ze.round(e[a][0], e[a][1]);
      u.x === o.x && u.y === o.y || (this.segments.push(pe.fromRing(o, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), o = u);
    }
    (r.x !== o.x || r.y !== o.y) && this.segments.push(pe.fromRing(o, r, this));
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
class Ir {
  constructor(e, t) {
    if (!Array.isArray(e))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new yi(e[0], this, !0), this.bbox = {
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
      const o = new yi(e[i], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = t;
  }
  getSweepEvents() {
    const e = this.exteriorRing.getSweepEvents();
    for (let t = 0, i = this.interiorRings.length; t < i; t++) {
      const r = this.interiorRings[t].getSweepEvents();
      for (let o = 0, a = r.length; o < a; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class vi {
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
      const o = new Ir(e[i], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = t;
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, i = this.polys.length; t < i; t++) {
      const r = this.polys[t].getSweepEvents();
      for (let o = 0, a = r.length; o < a; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class st {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      if (!o.isInResult() || o.ringOut) continue;
      let a = null, s = o.leftSE, u = o.rightSE;
      const l = [s], d = s.point, c = [];
      for (; a = s, s = u, l.push(s), s.point !== d; )
        for (; ; ) {
          const f = s.getAvailableLinkedEvents();
          if (f.length === 0) {
            const b = l[0].point, m = l[l.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${b.x}, ${b.y}]. Last matching segment found ends at [${m.x}, ${m.y}].`);
          }
          if (f.length === 1) {
            u = f[0].otherSE;
            break;
          }
          let h = null;
          for (let b = 0, m = c.length; b < m; b++)
            if (c[b].point === s.point) {
              h = b;
              break;
            }
          if (h !== null) {
            const b = c.splice(h)[0], m = l.splice(b.index);
            m.unshift(m[0].otherSE), t.push(new st(m.reverse()));
            continue;
          }
          c.push({
            index: l.length,
            point: s.point
          });
          const p = s.getLeftmostComparator(a);
          u = f.sort(p)[0].otherSE;
          break;
        }
      t.push(new st(l));
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
    for (let l = 1, d = this.events.length - 1; l < d; l++) {
      const c = this.events[l].point, f = this.events[l + 1].point;
      hi(c, e, f) !== 0 && (t.push(c), e = c);
    }
    if (t.length === 1) return null;
    const i = t[0], r = t[1];
    hi(i, e, r) === 0 && t.shift(), t.push(t[0]);
    const o = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, s = this.isExteriorRing() ? t.length : -1, u = [];
    for (let l = a; l != s; l += o) u.push([t[l].x, t[l].y]);
    return u;
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
      const a = this.events[r];
      ne.compare(e, a) > 0 && (e = a);
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
class pi {
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
class Or {
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
        if (o.isExteriorRing()) t.push(new pi(o));
        else {
          const a = o.enclosingRing();
          a.poly || t.push(new pi(a)), a.poly.addInterior(o);
        }
    }
    return t;
  }
}
class Wr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pe.compare;
    this.queue = e, this.tree = new Ot(t), this.segments = [];
  }
  process(e) {
    const t = e.segment, i = [];
    if (e.consumedBy)
      return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(t), i;
    const r = e.isLeft ? this.tree.add(t) : this.tree.find(t);
    if (!r) throw new Error(`Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`);
    let o = r, a = r, s, u;
    for (; s === void 0; )
      o = this.tree.prev(o), o === null ? s = null : o.key.consumedBy === void 0 && (s = o.key);
    for (; u === void 0; )
      a = this.tree.next(a), a === null ? u = null : a.key.consumedBy === void 0 && (u = a.key);
    if (e.isLeft) {
      let l = null;
      if (s) {
        const c = s.getIntersection(t);
        if (c !== null && (t.isAnEndpoint(c) || (l = c), !s.isAnEndpoint(c))) {
          const f = this._splitSafely(s, c);
          for (let h = 0, p = f.length; h < p; h++)
            i.push(f[h]);
        }
      }
      let d = null;
      if (u) {
        const c = u.getIntersection(t);
        if (c !== null && (t.isAnEndpoint(c) || (d = c), !u.isAnEndpoint(c))) {
          const f = this._splitSafely(u, c);
          for (let h = 0, p = f.length; h < p; h++)
            i.push(f[h]);
        }
      }
      if (l !== null || d !== null) {
        let c = null;
        l === null ? c = d : d === null ? c = l : c = ne.comparePoints(l, d) <= 0 ? l : d, this.queue.remove(t.rightSE), i.push(t.rightSE);
        const f = t.split(c);
        for (let h = 0, p = f.length; h < p; h++)
          i.push(f[h]);
      }
      i.length > 0 ? (this.tree.remove(t), i.push(e)) : (this.segments.push(t), t.prev = s);
    } else {
      if (s && u) {
        const l = s.getIntersection(u);
        if (l !== null) {
          if (!s.isAnEndpoint(l)) {
            const d = this._splitSafely(s, l);
            for (let c = 0, f = d.length; c < f; c++)
              i.push(d[c]);
          }
          if (!u.isAnEndpoint(l)) {
            const d = this._splitSafely(u, l);
            for (let c = 0, f = d.length; c < f; c++)
              i.push(d[c]);
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
const bi = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Ar = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Br {
  run(e, t, i) {
    se.type = e, Ze.reset();
    const r = [new vi(t, !0)];
    for (let c = 0, f = i.length; c < f; c++)
      r.push(new vi(i[c], !1));
    if (se.numMultiPolys = r.length, se.type === "difference") {
      const c = r[0];
      let f = 1;
      for (; f < r.length; )
        Pt(r[f].bbox, c.bbox) !== null ? f++ : r.splice(f, 1);
    }
    if (se.type === "intersection")
      for (let c = 0, f = r.length; c < f; c++) {
        const h = r[c];
        for (let p = c + 1, b = r.length; p < b; p++)
          if (Pt(h.bbox, r[p].bbox) === null) return [];
      }
    const o = new Ot(ne.compare);
    for (let c = 0, f = r.length; c < f; c++) {
      const h = r[c].getSweepEvents();
      for (let p = 0, b = h.length; p < b; p++)
        if (o.insert(h[p]), o.size > bi)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const a = new Wr(o);
    let s = o.size, u = o.pop();
    for (; u; ) {
      const c = u.key;
      if (o.size === s) {
        const h = c.segment;
        throw new Error(`Unable to pop() ${c.isLeft ? "left" : "right"} SweepEvent [${c.point.x}, ${c.point.y}] from segment #${h.id} [${h.leftSE.point.x}, ${h.leftSE.point.y}] -> [${h.rightSE.point.x}, ${h.rightSE.point.y}] from queue.`);
      }
      if (o.size > bi)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (a.segments.length > Ar)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const f = a.process(c);
      for (let h = 0, p = f.length; h < p; h++) {
        const b = f[h];
        b.consumedBy === void 0 && o.insert(b);
      }
      s = o.size, u = o.pop();
    }
    Ze.reset();
    const l = st.factory(a.segments);
    return new Or(l).getGeom();
  }
}
const se = new Br(), Dr = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("union", n, t);
}, Ur = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("intersection", n, t);
}, zr = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("xor", n, t);
}, Gr = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return se.run("difference", n, t);
};
var Ii = {
  union: Dr,
  intersection: Ur,
  xor: zr,
  difference: Gr
};
function Oi(n, e, t) {
  if (n !== null)
    for (var i, r, o, a, s, u, l, d = 0, c = 0, f, h = n.type, p = h === "FeatureCollection", b = h === "Feature", m = p ? n.features.length : 1, y = 0; y < m; y++) {
      l = p ? n.features[y].geometry : b ? n.geometry : n, f = l ? l.type === "GeometryCollection" : !1, s = f ? l.geometries.length : 1;
      for (var _ = 0; _ < s; _++) {
        var L = 0, E = 0;
        if (a = f ? l.geometries[_] : l, a !== null) {
          u = a.coordinates;
          var C = a.type;
          switch (d = 0, C) {
            case null:
              break;
            case "Point":
              if (e(
                u,
                c,
                y,
                L,
                E
              ) === !1)
                return !1;
              c++, L++;
              break;
            case "LineString":
            case "MultiPoint":
              for (i = 0; i < u.length; i++) {
                if (e(
                  u[i],
                  c,
                  y,
                  L,
                  E
                ) === !1)
                  return !1;
                c++, C === "MultiPoint" && L++;
              }
              C === "LineString" && L++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (i = 0; i < u.length; i++) {
                for (r = 0; r < u[i].length - d; r++) {
                  if (e(
                    u[i][r],
                    c,
                    y,
                    L,
                    E
                  ) === !1)
                    return !1;
                  c++;
                }
                C === "MultiLineString" && L++, C === "Polygon" && E++;
              }
              C === "Polygon" && L++;
              break;
            case "MultiPolygon":
              for (i = 0; i < u.length; i++) {
                for (E = 0, r = 0; r < u[i].length; r++) {
                  for (o = 0; o < u[i][r].length - d; o++) {
                    if (e(
                      u[i][r][o],
                      c,
                      y,
                      L,
                      E
                    ) === !1)
                      return !1;
                    c++;
                  }
                  E++;
                }
                L++;
              }
              break;
            case "GeometryCollection":
              for (i = 0; i < a.geometries.length; i++)
                if (Oi(a.geometries[i], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Wt(n, e) {
  var t, i, r, o, a, s, u, l, d, c, f = 0, h = n.type === "FeatureCollection", p = n.type === "Feature", b = h ? n.features.length : 1;
  for (t = 0; t < b; t++) {
    for (s = h ? n.features[t].geometry : p ? n.geometry : n, l = h ? n.features[t].properties : p ? n.properties : {}, d = h ? n.features[t].bbox : p ? n.bbox : void 0, c = h ? n.features[t].id : p ? n.id : void 0, u = s ? s.type === "GeometryCollection" : !1, a = u ? s.geometries.length : 1, r = 0; r < a; r++) {
      if (o = u ? s.geometries[r] : s, o === null) {
        if (e(
          null,
          f,
          l,
          d,
          c
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
            l,
            d,
            c
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (i = 0; i < o.geometries.length; i++)
            if (e(
              o.geometries[i],
              f,
              l,
              d,
              c
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
function Fr(n, e) {
  Wt(n, function(t, i, r, o, a) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Fe(t, r, { bbox: o, id: a }),
          i,
          0
        ) === !1 ? !1 : void 0;
    }
    var u;
    switch (s) {
      case "MultiPoint":
        u = "Point";
        break;
      case "MultiLineString":
        u = "LineString";
        break;
      case "MultiPolygon":
        u = "Polygon";
        break;
    }
    for (var l = 0; l < t.coordinates.length; l++) {
      var d = t.coordinates[l], c = {
        type: u,
        coordinates: d
      };
      if (e(Fe(c, r), i, l) === !1)
        return !1;
    }
  });
}
function jr(n, e = {}) {
  const t = [];
  if (Wt(n, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const i = Ii.union(t[0], ...t.slice(1));
  return i.length === 0 ? null : i.length === 1 ? It(i[0], e.properties) : Pi(i, e.properties);
}
var Wi = jr;
function Zr(n, e = {}) {
  if (n.bbox != null && e.recompute !== !0)
    return n.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Oi(n, (i) => {
    t[0] > i[0] && (t[0] = i[0]), t[1] > i[1] && (t[1] = i[1]), t[2] < i[0] && (t[2] = i[0]), t[3] < i[1] && (t[3] = i[1]);
  }), t;
}
var wi = Zr;
function qr(n) {
  const e = [];
  if (Wt(n, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = n.features[0].properties || {}, i = Ii.difference(e[0], ...e.slice(1));
  return i.length === 0 ? null : i.length === 1 ? It(i[0], t) : Pi(i, t);
}
var Qr = qr;
function Hr(n) {
  if (!n)
    throw new Error("geojson is required");
  var e = [];
  return Fr(n, function(t) {
    e.push(t);
  }), je(e);
}
var Vr = Hr;
function _i(n, e) {
  const t = Qr(
    je([
      It([
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
  const i = rt(wi(n)), r = (i[2] - i[0]) / 360 / 1e3, o = i[0] < -180, a = i[2] > 180, s = Vr(n);
  if (s.features.length > 1 && (o || a))
    for (const u of s.features) {
      const l = rt(wi(u));
      if (a && l[0] < -180 + r)
        for (const d of u.geometry.coordinates)
          for (const c of d)
            c[0] += 360 - r;
      if (o && l[2] > 180 - r)
        for (const d of u.geometry.coordinates)
          for (const c of d)
            c[0] -= 360 - r;
    }
  e(
    je([
      s.features.length < 2 ? n : Wi(s) ?? n,
      t
    ])
  );
}
const Ei = je([]), Li = {
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
};
function Yr(n, e, t = !0, i = !0, r = {}, o = {}, a = Li) {
  let s;
  const u = [];
  let l, d, c;
  function f() {
    const m = a ? a === !0 ? Li : a : void 0;
    !n.getSource("full-geom") && (m != null && m.fill || m != null && m.line) && n.addSource("full-geom", {
      type: "geojson",
      data: Ei
    }), !n.getLayer("full-geom-fill") && (m != null && m.fill) && n.addLayer({
      ...m == null ? void 0 : m.fill,
      id: "full-geom-fill",
      type: "fill",
      source: "full-geom"
    }), !n.getLayer("full-geom-line") && (m != null && m.line) && n.addLayer({
      ...m == null ? void 0 : m.line,
      id: "full-geom-line",
      type: "line",
      source: "full-geom"
    }), c && b(c);
  }
  n.loaded() ? f() : n.once("load", () => {
    f();
  }), n.on("styledata", () => {
    f();
  });
  const h = (m) => {
    s == null || s({
      type: "mapClick",
      coordinates: [m.lngLat.lng, m.lngLat.lat]
    });
  };
  function p(m = !1) {
    if (!e)
      throw new Error();
    const y = document.createElement("div");
    return m && y.classList.add("marker-interactive"), new jn({
      props: { displayIn: "maplibre" },
      target: y
    }), new e.Marker({ element: y, offset: [1, -13] });
  }
  function b(m) {
    var y;
    c = m, m && ((y = n.getSource("full-geom")) == null || y.setData(m));
  }
  return {
    setEventHandler(m) {
      m ? (s = m, n.on("click", h)) : (s = void 0, n.off("click", h));
    },
    flyTo(m, y) {
      n.flyTo({ center: m, ...y ? { zoom: y } : {}, ...r });
    },
    fitBounds(m, y, _) {
      n.fitBounds(
        [
          [m[0], m[1]],
          [m[2], m[3]]
        ],
        { padding: y, ..._ ? { maxZoom: _ } : {}, ...o }
      );
    },
    indicateReverse(m) {
      n.getCanvasContainer().style.cursor = m ? "crosshair" : "";
    },
    setReverseMarker(m) {
      !e || !t || (d ? m ? d.setLngLat(m) : (d.remove(), d = void 0) : m && (t instanceof Function ? d = t(n) ?? void 0 : (d = (typeof t == "object" ? new e.Marker(t) : p()).setLngLat(m).addTo(n), d.getElement().classList.add("marker-reverse"))));
    },
    setMarkers(m, y) {
      for (const _ of u)
        _.remove();
      if (u.length = 0, b(Ei), !!e) {
        if (y) {
          let _ = !1;
          if (y.geometry.type === "GeometryCollection") {
            const L = y.geometry.geometries.filter(
              (E) => E.type === "Polygon" || E.type === "MultiPolygon"
            );
            e: if (L.length > 0) {
              const E = Wi(
                je(L.map((C) => Fe(C)))
              );
              if (!E)
                break e;
              _i(
                {
                  ...y,
                  geometry: E.geometry
                },
                b
              ), _ = !0;
            } else {
              const E = y.geometry.geometries.filter(
                (C) => C.type === "LineString" || C.type === "MultiLineString"
              );
              E.length > 0 && (b({
                ...y,
                geometry: { type: "GeometryCollection", geometries: E }
              }), _ = !0);
            }
          }
          if (!_) {
            if (y.geometry.type === "Polygon" || y.geometry.type === "MultiPolygon")
              _i(y, b);
            else if (y.geometry.type === "LineString" || y.geometry.type === "MultiLineString") {
              b(y);
              return;
            }
          }
          if (t instanceof Function) {
            const L = t(n, y);
            L && u.push(L);
          } else t && u.push(
            typeof t == "object" ? new e.Marker(t) : p().setLngLat(y.center).addTo(n)
          );
        }
        if (i)
          for (const _ of m ?? []) {
            if (_ === y)
              continue;
            let L;
            if (i instanceof Function) {
              if (L = i(n, _), !L)
                continue;
            } else
              L = (typeof i == "object" ? new e.Marker(i) : p(!0)).setLngLat(_.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  _.place_type[0] === "reverse" ? _.place_name : _.place_name.replace(/,.*/, "")
                )
              ).addTo(n);
            const E = L.getElement();
            E.addEventListener("click", (C) => {
              C.stopPropagation(), s == null || s({ type: "markerClick", id: _.id });
            }), E.addEventListener("mouseenter", () => {
              s == null || s({ type: "markerMouseEnter", id: _.id }), L.togglePopup();
            }), E.addEventListener("mouseleave", () => {
              s == null || s({ type: "markerMouseLeave", id: _.id }), L.togglePopup();
            }), u.push(L);
          }
      }
    },
    setSelectedMarker(m) {
      l && l.getElement().classList.toggle("marker-selected", !1), l = m > -1 ? u[m] : void 0, l == null || l.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const m = n.getCenter();
      return [n.getZoom(), m.lng, m.lat];
    }
  };
}
function Kr(n, e, t) {
  var i, r, o;
  return o = class extends n {
    constructor(u = {}) {
      super();
      wt(this, i);
      wt(this, r);
      Je(this, r, u);
    }
    onAddInt(u) {
      const l = document.createElement("div");
      l.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
      const {
        marker: d,
        showResultMarkers: c,
        flyTo: f,
        fullGeometryStyle: h,
        ...p
      } = ie(this, r), b = typeof f == "boolean" ? {} : f, y = {
        mapController: Yr(
          u,
          e,
          d,
          c,
          b,
          b,
          h
        ),
        flyTo: f === void 0 ? !0 : !!f,
        apiKey: "",
        // just to satisfy apiKey; TODO find a better solution
        ...t == null ? void 0 : t(u, l),
        ...p
      };
      if (!y.apiKey)
        throw new Error("no apiKey provided");
      Je(this, i, new hr({ target: l, props: y }));
      for (const _ of [
        "select",
        "pick",
        "featuresListed",
        "featuresMarked",
        "response",
        "optionsVisibilityChange",
        "reverseToggle",
        "queryChange"
      ])
        ie(this, i).$on(_, (L) => {
          this.fire(_, L.detail);
        });
      return l;
    }
    setOptions(u) {
      var p;
      Je(this, r, u);
      const {
        marker: l,
        showResultMarkers: d,
        flyTo: c,
        fullGeometryStyle: f,
        ...h
      } = ie(this, r);
      (p = ie(this, i)) == null || p.$set(h);
    }
    setQuery(u, l = !0) {
      var d;
      (d = ie(this, i)) == null || d.setQuery(u, l);
    }
    clearMap() {
      var u;
      (u = ie(this, i)) == null || u.clearMap();
    }
    clearList() {
      var u;
      (u = ie(this, i)) == null || u.clearList();
    }
    setReverseMode(u) {
      var l;
      (l = ie(this, i)) == null || l.$set({ reverseActive: u });
    }
    focus() {
      var u;
      (u = ie(this, i)) == null || u.focus();
    }
    blur() {
      var u;
      (u = ie(this, i)) == null || u.blur();
    }
    onRemove() {
      var u;
      (u = ie(this, i)) == null || u.$destroy();
    }
  }, i = new WeakMap(), r = new WeakMap(), o;
}
const Xr = Kr(
  Ft.Evented,
  Ft,
  (n, e) => {
    const t = {};
    if (!("getSdkConfig" in n && typeof n.getSdkConfig == "function"))
      throw new Error("MapTiler SDK not detected");
    const { primaryLanguage: i, apiKey: r } = n.getSdkConfig();
    t.apiKey = r;
    const o = /^([a-z]{2})($|_|-)/.exec(i);
    return o && (t.language = o[1]), e.className += " maptiler-ctrl", t;
  }
);
class to extends Xr {
  onAdd(e) {
    return super.onAddInt(e);
  }
}
export {
  to as GeocodingControl,
  Yr as createMapLibreGlMapController
};
//# sourceMappingURL=maptilersdk.js.map
