var nn = Object.defineProperty;
var Ft = (n) => {
  throw TypeError(n);
};
var rn = (n, e, t) => e in n ? nn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var wt = (n, e, t) => rn(n, typeof e != "symbol" ? e + "" : e, t), qt = (n, e, t) => e.has(n) || Ft("Cannot " + t);
var re = (n, e, t) => (qt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), _t = (n, e, t) => e.has(n) ? Ft("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), et = (n, e, t, i) => (qt(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t);
import * as on from "@maptiler/sdk";
function A() {
}
function sn(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Li(n) {
  return n();
}
function jt() {
  return /* @__PURE__ */ Object.create(null);
}
function me(n) {
  n.forEach(Li);
}
function xi(n) {
  return typeof n == "function";
}
function Le(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let tt;
function K(n, e) {
  return n === e ? !0 : (tt || (tt = document.createElement("a")), tt.href = e, n === tt.href);
}
function ln(n) {
  return Object.keys(n).length === 0;
}
function un(n, e, t, i) {
  if (n) {
    const r = Si(n, e, t, i);
    return n[0](r);
  }
}
function Si(n, e, t, i) {
  return n[1] && i ? sn(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function an(n, e, t, i) {
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
function cn(n, e, t, i, r, o) {
  if (r) {
    const l = Si(e, t, i, o);
    n.p(l, r);
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
function ue(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function we(n) {
  return document.createTextNode(n);
}
function ie() {
  return we(" ");
}
function dn() {
  return we("");
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
function qe(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Gt(n, e) {
  n.value = e ?? "";
}
function se(n, e, t) {
  n.classList.toggle(e, !!t);
}
function mn(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
let je;
function Fe(n) {
  je = n;
}
function Mi() {
  if (!je) throw new Error("Function called outside component initialization");
  return je;
}
function pn(n) {
  Mi().$$.on_destroy.push(n);
}
function vn() {
  const n = Mi();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const r = n.$$.callbacks[e];
    if (r) {
      const o = mn(
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
function Qt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const We = [], St = [];
let Ae = [];
const Ht = [], yn = /* @__PURE__ */ Promise.resolve();
let Mt = !1;
function bn() {
  Mt || (Mt = !0, yn.then(ki));
}
function kt(n) {
  Ae.push(n);
}
const Et = /* @__PURE__ */ new Set();
let Ie = 0;
function ki() {
  if (Ie !== 0)
    return;
  const n = je;
  do {
    try {
      for (; Ie < We.length; ) {
        const e = We[Ie];
        Ie++, Fe(e), wn(e.$$);
      }
    } catch (e) {
      throw We.length = 0, Ie = 0, e;
    }
    for (Fe(null), We.length = 0, Ie = 0; St.length; ) St.pop()();
    for (let e = 0; e < Ae.length; e += 1) {
      const t = Ae[e];
      Et.has(t) || (Et.add(t), t());
    }
    Ae.length = 0;
  } while (We.length);
  for (; Ht.length; )
    Ht.pop()();
  Mt = !1, Et.clear(), Fe(n);
}
function wn(n) {
  if (n.fragment !== null) {
    n.update(), me(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(kt);
  }
}
function _n(n) {
  const e = [], t = [];
  Ae.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Ae = e;
}
const it = /* @__PURE__ */ new Set();
let Ce;
function nt() {
  Ce = {
    r: 0,
    c: [],
    p: Ce
    // parent group
  };
}
function rt() {
  Ce.r || me(Ce.c), Ce = Ce.p;
}
function Z(n, e) {
  n && n.i && (it.delete(n), n.i(e));
}
function V(n, e, t, i) {
  if (n && n.o) {
    if (it.has(n)) return;
    it.add(n), Ce.c.push(() => {
      it.delete(n), i && (t && n.d(1), i());
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
function Ln(n, e, t, i, r, o, l, s, c, u, d, a) {
  let f = n.length, h = o.length, y = f;
  const b = {};
  for (; y--; ) b[n[y].key] = y;
  const p = [], m = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), S = [];
  for (y = h; y--; ) {
    const L = a(r, o, y), w = t(L);
    let C = l.get(w);
    C ? S.push(() => C.p(L, e)) : (C = u(w, L), C.c()), m.set(w, p[y] = C), w in b && E.set(w, Math.abs(y - b[w]));
  }
  const _ = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function x(L) {
    Z(L, 1), L.m(s, d), l.set(L.key, L), d = L.first, h--;
  }
  for (; f && h; ) {
    const L = p[h - 1], w = n[f - 1], C = L.key, I = w.key;
    L === w ? (d = L.first, f--, h--) : m.has(I) ? !l.has(C) || _.has(C) ? x(L) : k.has(I) ? f-- : E.get(C) > E.get(I) ? (k.add(C), x(L)) : (_.add(I), f--) : (c(w, l), f--);
  }
  for (; f--; ) {
    const L = n[f];
    m.has(L.key) || c(L, l);
  }
  for (; h; ) x(p[h - 1]);
  return me(S), p;
}
function _e(n) {
  n && n.c();
}
function he(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), kt(() => {
    const o = n.$$.on_mount.map(Li).filter(xi);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : me(o), n.$$.on_mount = [];
  }), r.forEach(kt);
}
function ge(n, e) {
  const t = n.$$;
  t.fragment !== null && (_n(t.after_update), me(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xn(n, e) {
  n.$$.dirty[0] === -1 && (We.push(n), bn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xe(n, e, t, i, r, o, l = null, s = [-1]) {
  const c = je;
  Fe(n);
  const u = n.$$ = {
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
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: jt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  l && l(u.root);
  let d = !1;
  if (u.ctx = t ? t(n, e.props || {}, (a, f, ...h) => {
    const y = h.length ? h[0] : f;
    return u.ctx && r(u.ctx[a], u.ctx[a] = y) && (!u.skip_bound && u.bound[a] && u.bound[a](y), d && xn(n, a)), f;
  }) : [], u.update(), d = !0, me(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = gn(e.target);
      u.fragment && u.fragment.l(a), a.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && Z(n.$$.fragment), he(n, e.target, e.anchor), ki();
  }
  Fe(c);
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
    wt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    wt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ge(this, 1), this.$destroy = A;
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
const Sn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sn);
function Mn(n) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), v(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), v(e, "viewBox", "0 0 14 14"), v(e, "width", "13"), v(e, "height", "13"), v(e, "class", "svelte-en2qvf");
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
class Ci extends Se {
  constructor(e) {
    super(), xe(this, e, null, Mn, Le, {});
  }
}
function kn(n) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), v(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), v(e, "viewBox", "0 0 30 30"), v(e, "fill", "none"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "class", "svelte-d2loi5");
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
    super(), xe(this, e, null, kn, Le, {});
  }
}
function Cn(n) {
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
    m(o, l) {
      z(o, e, l), i || (r = J(
        e,
        "error",
        /*error_handler*/
        n[14]
      ), i = !0);
    },
    p(o, l) {
      l & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      o[5]) && v(e, "src", t), l & /*category*/
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
      e = W("span"), t = we(
        /*placeType*/
        n[6]
      ), v(e, "class", "secondary svelte-ltkwvy");
    },
    m(i, r) {
      z(i, e, r), P(e, t);
    },
    p(i, r) {
      r & /*placeType*/
      64 && qe(
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
  ), y, b, p = (
    /*isReverse*/
    (n[7] ? "" : (
      /*feature*/
      n[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), m, E, S;
  function _(w, C) {
    return C & /*feature*/
    1 && (t = null), C & /*feature*/
    1 && (i = null), C & /*feature*/
    1 && (r = null), C & /*feature*/
    1 && (o = null), /*imageUrl*/
    w[5] ? Wn : (
      /*feature*/
      w[0].address ? On : (t == null && (t = !!/*feature*/
      w[0].id.startsWith("road.")), t ? In : (i == null && (i = !!/*feature*/
      w[0].id.startsWith("address.")), i ? Rn : (r == null && (r = !!/*feature*/
      w[0].id.startsWith("postal_code.")), r ? Pn : (o == null && (o = !!/*feature*/
      w[0].id.startsWith("poi.")), o ? Tn : (
        /*isReverse*/
        w[7] ? Nn : Cn
      )))))
    );
  }
  let k = _(n, -1), x = k(n), L = h && Yt(n);
  return {
    c() {
      e = W("li"), x.c(), l = ie(), s = W("span"), c = W("span"), u = W("span"), a = we(d), f = ie(), L && L.c(), y = ie(), b = W("span"), m = we(p), v(u, "class", "primary svelte-ltkwvy"), v(c, "class", "svelte-ltkwvy"), v(b, "class", "line2 svelte-ltkwvy"), v(s, "class", "texts svelte-ltkwvy"), v(e, "tabindex", "0"), v(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), v(e, "class", "svelte-ltkwvy"), se(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(w, C) {
      z(w, e, C), x.m(e, null), P(e, l), P(e, s), P(s, c), P(c, u), P(u, a), P(c, f), L && L.m(c, null), P(s, y), P(s, b), P(b, m), E || (S = [
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
    p(w, [C]) {
      k === (k = _(w, C)) && x ? x.p(w, C) : (x.d(1), x = k(w), x && (x.c(), x.m(e, l))), C & /*feature*/
      1 && d !== (d = /*isReverse*/
      (w[7] ? (
        /*feature*/
        w[0].place_name
      ) : (
        /*feature*/
        w[0].place_name.replace(/,.*/, "")
      )) + "") && qe(a, d), C & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      w[2] === "always" || /*showPlaceType*/
      w[2] && !/*feature*/
      w[0].address && !/*feature*/
      w[0].id.startsWith("road.") && !/*feature*/
      w[0].id.startsWith("address.") && !/*feature*/
      w[0].id.startsWith("postal_code.") && (!/*feature*/
      w[0].id.startsWith("poi.") || !/*imageUrl*/
      w[5]) && !/*isReverse*/
      w[7]), h ? L ? L.p(w, C) : (L = Yt(w), L.c(), L.m(c, null)) : L && (L.d(1), L = null), C & /*feature*/
      1 && p !== (p = /*isReverse*/
      (w[7] ? "" : (
        /*feature*/
        w[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && qe(m, p), C & /*selected*/
      2 && v(
        e,
        "data-selected",
        /*selected*/
        w[1]
      ), C & /*selected*/
      2 && se(
        e,
        "selected",
        /*selected*/
        w[1]
      );
    },
    i: A,
    o: A,
    d(w) {
      w && B(e), x.d(), L && L.d(), E = !1, me(S);
    }
  };
}
function Bn(n, e, t) {
  var S;
  let i, r, { feature: o } = e, { selected: l = !1 } = e, { showPlaceType: s } = e, { missingIconsCache: c } = e, { iconsBaseUrl: u } = e;
  const d = (S = o.properties) == null ? void 0 : S.categories;
  let a, f, h = 0, y = o.place_type[0] === "reverse";
  function b() {
    f && c.add(f), t(10, h++, h);
  }
  function p(_) {
    Qt.call(this, n, _);
  }
  function m(_) {
    Qt.call(this, n, _);
  }
  const E = () => b();
  return n.$$set = (_) => {
    "feature" in _ && t(0, o = _.feature), "selected" in _ && t(1, l = _.selected), "showPlaceType" in _ && t(2, s = _.showPlaceType), "missingIconsCache" in _ && t(9, c = _.missingIconsCache), "iconsBaseUrl" in _ && t(3, u = _.iconsBaseUrl);
  }, n.$$.update = () => {
    var _, k, x, L;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, i--, i), t(4, a = d == null ? void 0 : d[i]), t(5, f = a ? u + a.replace(/ /g, "_") + ".svg" : void 0);
      while (i > -1 && (!f || c.has(f)));
    n.$$.dirty & /*feature*/
    1 && t(6, r = ((k = (_ = o.properties) == null ? void 0 : _.categories) == null ? void 0 : k.join(", ")) ?? ((L = (x = o.properties) == null ? void 0 : x.place_type_name) == null ? void 0 : L[0]) ?? o.place_type[0]);
  }, t(11, i = (d == null ? void 0 : d.length) ?? 0), [
    o,
    l,
    s,
    u,
    a,
    f,
    r,
    y,
    b,
    c,
    h,
    i,
    p,
    m,
    E
  ];
}
class Dn extends Se {
  constructor(e) {
    super(), xe(this, e, Bn, An, Le, {
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
    super(), xe(this, e, null, Un, Le, {});
  }
}
function Fn(n) {
  let e, t, i;
  return {
    c() {
      e = ue("svg"), t = ue("path"), v(t, "stroke-width", "4"), v(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), v(t, "class", "svelte-gzo3ar"), v(e, "width", i = /*displayIn*/
      n[0] === "list" ? 20 : void 0), v(e, "viewBox", "0 0 70 85"), v(e, "fill", "none"), v(e, "class", "svelte-gzo3ar"), se(
        e,
        "in-map",
        /*displayIn*/
        n[0] !== "list"
      ), se(
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
      1 && se(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), o & /*displayIn*/
      1 && se(
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
function qn(n, e, t) {
  let { displayIn: i } = e;
  return n.$$set = (r) => {
    "displayIn" in r && t(0, i = r.displayIn);
  }, [i];
}
class jn extends Se {
  constructor(e) {
    super(), xe(this, e, qn, Fn, Le, { displayIn: 0 });
  }
}
function Zn(n) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), v(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), v(e, "viewBox", "0 0 60.006 21.412"), v(e, "width", "14"), v(e, "height", "20"), v(e, "class", "svelte-en2qvf");
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
class Gn extends Se {
  constructor(e) {
    super(), xe(this, e, null, Zn, Le, {});
  }
}
function Qn(n) {
  let e, t, i;
  return {
    c() {
      e = ue("svg"), t = ue("circle"), i = ue("path"), v(t, "cx", "4.789"), v(t, "cy", "4.787"), v(t, "r", "3.85"), v(t, "class", "svelte-1aq105l"), v(i, "d", "M12.063 12.063 7.635 7.635"), v(i, "class", "svelte-1aq105l"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "width", "13"), v(e, "height", "13"), v(e, "viewBox", "0 0 13 13"), v(e, "class", "svelte-1aq105l");
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
    super(), xe(this, e, null, Qn, Le, {});
  }
}
function Vn(n, e, t) {
  const i = e[1], r = e[0], o = i - r;
  return n === i && t ? n : ((n - r) % o + o) % o + r;
}
function st(n) {
  const e = [...n];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let De;
async function Yn(n, e, t) {
  const i = n == null ? void 0 : n.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(i && (r.minZoom != null && r.minZoom > i[0] || r.maxZoom != null && r.maxZoom < i[0]))) {
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
      if (i && r.type === "map-center")
        return i[1].toFixed(6) + "," + i[2].toFixed(6);
    }
}
const Kn = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Kt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Xt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Jt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, $t = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, ei = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Xn(n) {
  if (!["DMS", "DM", "DD"].includes(n))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((h) => Number(h.trim())), t = Number(e[0]), i = Number(e[1]), r = Math.abs(t), o = Math.abs(i), l = t > 0 ? "N" : "S", s = i > 0 ? "E" : "W";
    let c;
    n == "DD" && (c = `${r}° ${l}, ${o}° ${s}`);
    const u = Math.floor(r), d = Math.floor(o), a = (r - u) * 60, f = (o - d) * 60;
    if (n == "DM") {
      let h = ti(a, 3).toFixed(3).padStart(6, "0"), y = ti(f, 3).toFixed(3).padStart(6, "0");
      h.endsWith(".000") && y.endsWith(".000") && (h = h.replace(/\.000$/, ""), y = y.replace(/\.000$/, "")), c = `${u}° ${h}' ${l}, ${d}° ${y}' ${s}`;
    }
    if (n == "DMS") {
      const h = Math.floor(a), y = Math.floor(f);
      let b = ((a - h) * 60).toFixed(1).padStart(4, "0"), p = ((f - y) * 60).toFixed(1).padStart(4, "0");
      const m = h.toString().padStart(2, "0"), E = y.toString().padStart(2, "0");
      b.endsWith(".0") && p.endsWith(".0") && (b = b.replace(/\.0$/, ""), p = p.replace(/\.0$/, "")), c = `${u}° ${m}' ${b}" ${l}, ${d}° ${E}' ${p}" ${s}`;
    }
    return c;
  } else
    throw new Error("no decimal coordinates to convert");
}
function ti(n, e) {
  const t = Math.pow(10, e);
  return Math.round((n + Number.EPSILON) * t) / t;
}
function It(n, e) {
  e || (e = 5), n = n.replace(/\s+/g, " ").trim();
  let t = null, i = null, r = "", o = "", l = null, s = [], c = !1;
  if (Kn.test(n))
    throw new Error("invalid coordinate value");
  if (Kt.test(n))
    if (s = Kt.exec(n), c = Ue(s), c)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), i = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (i *= -1), l = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Xt.test(n))
    if (s = Xt.exec(n), c = Ue(s), c) {
      if (t = s[2], i = s[6], t.includes(",") && (t = t.replace(",", ".")), i.includes(",") && (i = i.replace(",", ".")), l = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(i)) == Number(i))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], o = s[5]) : s[4] && (r = s[4], o = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Jt.test(n))
    if (s = Jt.exec(n), c = Ue(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[9])), s[11] && (i += s[11] / 60), s[13] && (i += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[8]) : s[7] && (r = s[7], o = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if ($t.test(n))
    if (s = $t.exec(n), c = Ue(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6] / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), i = Math.abs(parseInt(s[10])), s[12] && (i += s[12] / 60), s[14] && (i += s[14] / 3600), parseInt(s[10]) < 0 && (i = -1 * i), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ei.test(n)) {
    if (s = ei.exec(n), c = Ue(s), s.filter((u) => u).length <= 5)
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
    const h = /[,/;\u0020]/g, y = d.match(h);
    if (y == null) {
      const m = Math.floor(n.length / 2);
      a = d.substring(0, m).trim(), f = d.substring(m).trim();
    } else {
      let m;
      y.length % 2 == 1 ? m = Math.floor(y.length / 2) : m = y.length / 2 - 1;
      let E = 0;
      if (m == 0)
        E = d.indexOf(y[0]), a = d.substring(0, E).trim(), f = d.substring(E + 1).trim();
      else {
        let S = 0, _ = 0;
        for (; S <= m; )
          E = d.indexOf(y[S], _), _ = E + 1, S++;
        a = d.substring(0, E).trim(), f = d.substring(E + 1).trim();
      }
    }
    const b = a.split(".");
    if (b.length == 2 && b[1] == 0 && b[1].length != 2)
      throw new Error("invalid coordinates format");
    const p = f.split(".");
    if (p.length == 2 && p[1] == 0 && p[1].length != 2)
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
      closeEnough: Jn,
      toCoordinateFormat: Xn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Ue(n) {
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
It.to = $n;
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
It.formats = or.map((n) => n.verbatimCoordinates);
const sr = It;
function ni(n, e, t) {
  const i = n.slice();
  return i[83] = e[t], i[85] = t, i;
}
function ri(n) {
  let e, t;
  return e = new zn({}), {
    c() {
      _e(e.$$.fragment);
    },
    m(i, r) {
      he(e, i, r), t = !0;
    },
    i(i) {
      t || (Z(e.$$.fragment, i), t = !0);
    },
    o(i) {
      V(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ge(e, i);
    }
  };
}
function oi(n) {
  let e, t, i, r, o;
  return t = new Gn({}), {
    c() {
      e = W("button"), _e(t.$$.fragment), v(e, "type", "button"), v(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), v(e, "class", "svelte-qnu791"), se(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(l, s) {
      z(l, e, s), he(t, e, null), i = !0, r || (o = J(
        e,
        "click",
        /*click_handler_2*/
        n[68]
      ), r = !0);
    },
    p(l, s) {
      (!i || s[0] & /*reverseButtonTitle*/
      512) && v(
        e,
        "title",
        /*reverseButtonTitle*/
        l[9]
      ), (!i || s[0] & /*reverseActive*/
      1) && se(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      i || (Z(t.$$.fragment, l), i = !0);
    },
    o(l) {
      V(t.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(e), ge(t), r = !1, o();
    }
  };
}
function lr(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, o, l, s = Vt(
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
    let d = ni(n, s, u), a = c(d);
    i.set(a, t[u] = si(a, d));
  }
  return {
    c() {
      e = W("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      v(e, "class", "svelte-qnu791");
    },
    m(u, d) {
      z(u, e, d);
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
      17880064 && (s = Vt(
        /*listFeatures*/
        u[14]
      ), nt(), t = Ln(t, d, c, 1, u, s, i, e, En, si, null, ni), rt());
    },
    i(u) {
      if (!r) {
        for (let d = 0; d < s.length; d += 1)
          Z(t[d]);
        r = !0;
      }
    },
    o(u) {
      for (let d = 0; d < t.length; d += 1)
        V(t[d]);
      r = !1;
    },
    d(u) {
      u && B(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      o = !1, me(l);
    }
  };
}
function ur(n) {
  let e, t, i, r, o, l;
  return t = new Ni({}), {
    c() {
      e = W("div"), _e(t.$$.fragment), i = ie(), r = W("div"), o = we(
        /*noResultsMessage*/
        n[7]
      ), v(r, "class", "svelte-qnu791"), v(e, "class", "no-results svelte-qnu791");
    },
    m(s, c) {
      z(s, e, c), he(t, e, null), P(e, i), P(e, r), P(r, o), l = !0;
    },
    p(s, c) {
      (!l || c[0] & /*noResultsMessage*/
      128) && qe(
        o,
        /*noResultsMessage*/
        s[7]
      );
    },
    i(s) {
      l || (Z(t.$$.fragment, s), l = !0);
    },
    o(s) {
      V(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && B(e), ge(t);
    }
  };
}
function ar(n) {
  let e = "", t;
  return {
    c() {
      t = we(e);
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
  let e, t, i, r, o, l, s, c, u, d, a;
  return t = new Ni({}), c = new Ci({}), {
    c() {
      e = W("div"), _e(t.$$.fragment), i = ie(), r = W("div"), o = we(
        /*errorMessage*/
        n[6]
      ), l = ie(), s = W("button"), _e(c.$$.fragment), v(r, "class", "svelte-qnu791"), v(s, "class", "svelte-qnu791"), v(e, "class", "error svelte-qnu791");
    },
    m(f, h) {
      z(f, e, h), he(t, e, null), P(e, i), P(e, r), P(r, o), P(e, l), P(e, s), he(c, s, null), u = !0, d || (a = J(
        s,
        "click",
        /*click_handler_3*/
        n[69]
      ), d = !0);
    },
    p(f, h) {
      (!u || h[0] & /*errorMessage*/
      64) && qe(
        o,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      u || (Z(t.$$.fragment, f), Z(c.$$.fragment, f), u = !0);
    },
    o(f) {
      V(t.$$.fragment, f), V(c.$$.fragment, f), u = !1;
    },
    d(f) {
      f && B(e), ge(t), ge(c), d = !1, a();
    }
  };
}
function si(n, e) {
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
  return i = new Dn({
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
      t = dn(), _e(i.$$.fragment), this.first = t;
    },
    m(s, c) {
      z(s, t, c), he(i, s, c), r = !0;
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
      r || (Z(i.$$.fragment, s), r = !0);
    },
    o(s) {
      V(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(t), ge(i, s);
    }
  };
}
function fr(n) {
  let e, t, i, r, o, l, s, c, u, d, a, f, h, y, b, p, m, E, S, _, k, x = !1;
  o = new Hn({}), a = new Ci({});
  let L = (
    /*abortController*/
    n[19] && ri()
  ), w = (
    /*enableReverse*/
    n[5] === !0 && oi(n)
  );
  const C = (
    /*#slots*/
    n[60].default
  ), I = un(
    C,
    n,
    /*$$scope*/
    n[59],
    null
  ), D = [cr, ar, ur, lr], F = [];
  function O(M, q) {
    var $, ne;
    return (
      /*error*/
      M[18] ? 0 : (
        /*focusedDelayed*/
        M[16] ? (
          /*listFeatures*/
          (($ = M[14]) == null ? void 0 : $.length) === 0 ? 2 : (
            /*focusedDelayed*/
            M[16] && /*listFeatures*/
            ((ne = M[14]) != null && ne.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(p = O(n)) && (m = F[p] = D[p](n)), {
    c() {
      e = ie(), t = W("form"), i = W("div"), r = W("button"), _e(o.$$.fragment), l = ie(), s = W("input"), c = ie(), u = W("div"), d = W("button"), _e(a.$$.fragment), f = ie(), L && L.c(), h = ie(), w && w.c(), y = ie(), I && I.c(), b = ie(), m && m.c(), v(r, "class", "search-button svelte-qnu791"), v(r, "type", "button"), v(
        s,
        "placeholder",
        /*placeholder*/
        n[8]
      ), v(
        s,
        "aria-label",
        /*placeholder*/
        n[8]
      ), v(s, "class", "svelte-qnu791"), v(d, "type", "button"), v(
        d,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), v(d, "class", "svelte-qnu791"), v(u, "class", "clear-button-container svelte-qnu791"), se(
        u,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), v(i, "class", "input-group svelte-qnu791"), v(t, "tabindex", "0"), v(t, "class", E = Zt(
        /*className*/
        n[2]
      ) + " svelte-qnu791"), se(
        t,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(M, q) {
      z(M, e, q), z(M, t, q), P(t, i), P(i, r), he(o, r, null), P(i, l), P(i, s), n[62](s), Gt(
        s,
        /*searchValue*/
        n[1]
      ), P(i, c), P(i, u), P(u, d), he(a, d, null), P(u, f), L && L.m(u, null), P(i, h), w && w.m(i, null), P(i, y), I && I.m(i, null), P(t, b), ~p && F[p].m(t, null), S = !0, _ || (k = [
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
        J(t, "submit", hn(
          /*handleOnSubmit*/
          n[21]
        ))
      ], _ = !0);
    },
    p(M, q) {
      (!S || q[0] & /*placeholder*/
      256) && v(
        s,
        "placeholder",
        /*placeholder*/
        M[8]
      ), (!S || q[0] & /*placeholder*/
      256) && v(
        s,
        "aria-label",
        /*placeholder*/
        M[8]
      ), q[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      M[1] && Gt(
        s,
        /*searchValue*/
        M[1]
      ), (!S || q[0] & /*clearButtonTitle*/
      8) && v(
        d,
        "title",
        /*clearButtonTitle*/
        M[3]
      ), /*abortController*/
      M[19] ? L ? q[0] & /*abortController*/
      524288 && Z(L, 1) : (L = ri(), L.c(), Z(L, 1), L.m(u, null)) : L && (nt(), V(L, 1, 1, () => {
        L = null;
      }), rt()), (!S || q[0] & /*searchValue*/
      2) && se(
        u,
        "displayable",
        /*searchValue*/
        M[1] !== ""
      ), /*enableReverse*/
      M[5] === !0 ? w ? (w.p(M, q), q[0] & /*enableReverse*/
      32 && Z(w, 1)) : (w = oi(M), w.c(), Z(w, 1), w.m(i, y)) : w && (nt(), V(w, 1, 1, () => {
        w = null;
      }), rt()), I && I.p && (!S || q[1] & /*$$scope*/
      268435456) && cn(
        I,
        C,
        M,
        /*$$scope*/
        M[59],
        S ? an(
          C,
          /*$$scope*/
          M[59],
          q,
          null
        ) : fn(
          /*$$scope*/
          M[59]
        ),
        null
      );
      let $ = p;
      p = O(M), p === $ ? ~p && F[p].p(M, q) : (m && (nt(), V(F[$], 1, 1, () => {
        F[$] = null;
      }), rt()), ~p ? (m = F[p], m ? m.p(M, q) : (m = F[p] = D[p](M), m.c()), Z(m, 1), m.m(t, null)) : m = null), (!S || q[0] & /*className*/
      4 && E !== (E = Zt(
        /*className*/
        M[2]
      ) + " svelte-qnu791")) && v(t, "class", E), (!S || q[0] & /*className, collapsed, searchValue*/
      22) && se(
        t,
        "can-collapse",
        /*collapsed*/
        M[4] && /*searchValue*/
        M[1] === ""
      );
    },
    i(M) {
      S || (Z(x), Z(o.$$.fragment, M), Z(a.$$.fragment, M), Z(L), Z(w), Z(I, M), Z(m), S = !0);
    },
    o(M) {
      V(x), V(o.$$.fragment, M), V(a.$$.fragment, M), V(L), V(w), V(I, M), V(m), S = !1;
    },
    d(M) {
      M && (B(e), B(t)), ge(o), n[62](null), ge(a), L && L.d(), w && w.d(), I && I.d(M), ~p && F[p].d(), _ = !1, me(k);
    }
  };
}
function dr(n, e, t) {
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
  let { class: s = void 0 } = e, { apiKey: c } = e, { bbox: u = void 0 } = e, { clearButtonTitle: d = "clear" } = e, { clearOnBlur: a = !1 } = e, { collapsed: f = !1 } = e, { country: h = void 0 } = e, { debounceSearch: y = 200 } = e, { enableReverse: b = !1 } = e, { errorMessage: p = "Something went wrong…" } = e, { filter: m = () => !0 } = e, { flyTo: E = !0 } = e, { fuzzyMatch: S = !0 } = e, { language: _ = void 0 } = e, { limit: k = void 0 } = e, { mapController: x = void 0 } = e, { minLength: L = 2 } = e, { noResultsMessage: w = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: C = "Search" } = e, { proximity: I = [{ type: "server-geolocation" }] } = e, { reverseActive: D = b === "always" } = e, { reverseButtonTitle: F = "toggle reverse geocoding" } = e, { searchValue: O = "" } = e, { showFullGeometry: M = !0 } = e, { showPlaceType: q = "ifNeeded" } = e, { showResultsWhileTyping: $ = !0 } = e, { selectFirst: ne = !0 } = e, { flyToSelected: at = !1 } = e, { markerOnSelected: Ve = !0 } = e, { types: Me = void 0 } = e, { excludeTypes: Ye = !1 } = e, { zoom: Te = l } = e, { maxZoom: Ke = void 0 } = e, { apiUrl: ct = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: ft = {} } = e, { iconsBaseUrl: Bt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.4.1/icons/" } = e, { adjustUrlQuery: dt = () => {
  } } = e;
  function Wi() {
    ae.focus();
  }
  function Ai() {
    ae.blur();
  }
  function Dt(g, j = !0, H = !1) {
    t(1, O = g), j ? (t(15, U = -1), zt()) : (pt(!H, H), setTimeout(() => {
      ae.focus(), ae.select();
    }));
  }
  function Bi() {
    t(14, R = void 0), t(56, N = void 0), t(15, U = -1);
  }
  function Di() {
    t(55, G = []), t(56, N = void 0);
  }
  let Pe = !1, R, G, N, Ut = "", ae, U = -1, ce, Xe = [], ke, Re, Je, ht;
  const Ui = /* @__PURE__ */ new Set(), pe = vn();
  pn(() => {
    x && (x.setEventHandler(void 0), x.indicateReverse(!1), x.setSelectedMarker(-1), x.setMarkers(void 0, void 0));
  });
  function zt(g) {
    if (Re && (clearTimeout(Re), Re = void 0), U > -1 && R)
      t(56, N = R[U]), t(1, O = N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")), t(18, ce = void 0), t(55, G = void 0), t(15, U = -1);
    else if (O) {
      const j = g || !gt(O);
      mt(O, { exact: !0 }).then(() => {
        t(55, G = R), t(56, N = void 0), j && zi();
      }).catch((H) => t(18, ce = H));
    }
  }
  function gt(g) {
    try {
      return sr(g, 6);
    } catch {
      return !1;
    }
  }
  async function mt(g, { byId: j = !1, exact: H = !1 } = {}) {
    t(18, ce = void 0), ke == null || ke.abort();
    const ee = new AbortController();
    t(19, ke = ee);
    try {
      const T = gt(g), Q = new URLSearchParams();
      if (_ !== void 0 && Q.set("language", Array.isArray(_) ? _.join(",") : _ ?? ""), Me && Q.set("types", Me.join(",")), Ye && Q.set("excludeTypes", String(Ye)), u && Q.set("bbox", u.map(($e) => $e.toFixed(6)).join(",")), h && Q.set("country", Array.isArray(h) ? h.join(",") : h), !j && !T) {
        const $e = await Yn(x, I, ee);
        $e && Q.set("proximity", $e), (H || !$) && Q.set("autocomplete", "false"), Q.set("fuzzyMatch", String(S));
      }
      k !== void 0 && (!T || (Me == null ? void 0 : Me.length) === 1) && Q.set("limit", String(k)), Q.set("key", c), dt(Q);
      const fe = ct + "/" + encodeURIComponent(T ? T.decimalLongitude + "," + T.decimalLatitude : g) + ".json?" + Q.toString();
      if (fe === Ut) {
        j ? (t(14, R = void 0), t(56, N = Xe[0])) : t(14, R = Xe);
        return;
      }
      Ut = fe;
      const yt = await fetch(fe, { signal: ee.signal, ...ft });
      if (!yt.ok)
        throw new Error(await yt.text());
      const bt = await yt.json();
      pe("response", { url: fe, featureCollection: bt }), j ? (t(14, R = void 0), t(56, N = bt.features[0]), Xe = [N]) : (t(14, R = bt.features.filter(m)), T && R.unshift({
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
      }), Xe = R, T && ae.focus());
    } catch (T) {
      if (T && typeof T == "object" && "name" in T && T.name === "AbortError")
        return;
      throw T;
    } finally {
      ee === ke && t(19, ke = void 0);
    }
  }
  function zi() {
    var ee;
    if (!(G != null && G.length) || !E)
      return;
    const g = [180, 90, -180, -90], j = !G.some((T) => !T.matching_text);
    let H;
    for (const T of G) {
      const Q = Be(T);
      if (H = Ke ?? (H === void 0 ? Q : Q === void 0 ? H : Math.max(H, Q)), j || !T.matching_text)
        for (const fe of [0, 1, 2, 3])
          g[fe] = Math[fe < 2 ? "min" : "max"](g[fe], ((ee = T.bbox) == null ? void 0 : ee[fe]) ?? T.center[fe % 2]);
    }
    x && G.length > 0 && (N && g[0] === g[2] && g[1] === g[3] ? x.flyTo(N.center, Be(N)) : x.fitBounds(st(g), 50, H));
  }
  function Be(g) {
    var H;
    if (!g.bbox || g.bbox[0] !== g.bbox[2] && g.bbox[1] !== g.bbox[3])
      return;
    if (typeof Te == "number")
      return g.id.startsWith("poi.") || g.id.startsWith("address.") ? Ke : Te;
    const j = g.id.replace(/\..*/, "");
    return (Array.isArray((H = g.properties) == null ? void 0 : H.categories) ? g.properties.categories.reduce(
      (ee, T) => {
        const Q = Te[j + "." + T];
        return ee === void 0 ? Q : Q === void 0 ? ee : Math.max(ee, Q);
      },
      void 0
    ) : void 0) ?? Te[j];
  }
  function Fi(g) {
    t(0, D = b === "always"), t(14, R = void 0), t(56, N = void 0), t(15, U = -1), Dt(g[1].toFixed(6) + ", " + Vn(g[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function qi(g) {
    if (!R)
      return;
    let j = g.key === "ArrowDown" ? 1 : g.key === "ArrowUp" ? -1 : 0;
    j && (U === (ne ? 0 : -1) && j === -1 && t(15, U = R.length), t(15, U += j), U >= R.length && t(15, U = -1), U < 0 && ne && t(15, U = 0), g.preventDefault());
  }
  function pt(g = !0, j = !1) {
    if (t(18, ce = void 0), $ || j) {
      if (Re && clearTimeout(Re), O.length < L)
        return;
      const H = O;
      Re = window.setTimeout(
        () => {
          mt(H).catch((ee) => t(18, ce = ee));
        },
        g ? y : 0
      );
    } else
      t(14, R = void 0), t(18, ce = void 0);
  }
  function vt(g) {
    t(56, N = g), t(1, O = g.place_name), t(15, U = -1);
  }
  const ji = () => ae.focus();
  function Zi(g) {
    St[g ? "unshift" : "push"](() => {
      ae = g, t(17, ae);
    });
  }
  function Gi() {
    O = this.value, t(1, O), t(13, Pe), t(28, a);
  }
  const Qi = () => t(13, Pe = !0), Hi = () => t(13, Pe = !1), Vi = () => pt(), Yi = () => {
    t(1, O = ""), ae.focus();
  }, Ki = () => t(0, D = !D), Xi = () => t(18, ce = void 0), Ji = (g) => t(15, U = g), $i = (g) => vt(g), en = () => {
    ne || t(15, U = -1);
  }, tn = () => {
  };
  return n.$$set = (g) => {
    "class" in g && t(2, s = g.class), "apiKey" in g && t(26, c = g.apiKey), "bbox" in g && t(27, u = g.bbox), "clearButtonTitle" in g && t(3, d = g.clearButtonTitle), "clearOnBlur" in g && t(28, a = g.clearOnBlur), "collapsed" in g && t(4, f = g.collapsed), "country" in g && t(29, h = g.country), "debounceSearch" in g && t(30, y = g.debounceSearch), "enableReverse" in g && t(5, b = g.enableReverse), "errorMessage" in g && t(6, p = g.errorMessage), "filter" in g && t(31, m = g.filter), "flyTo" in g && t(32, E = g.flyTo), "fuzzyMatch" in g && t(33, S = g.fuzzyMatch), "language" in g && t(34, _ = g.language), "limit" in g && t(35, k = g.limit), "mapController" in g && t(36, x = g.mapController), "minLength" in g && t(37, L = g.minLength), "noResultsMessage" in g && t(7, w = g.noResultsMessage), "placeholder" in g && t(8, C = g.placeholder), "proximity" in g && t(38, I = g.proximity), "reverseActive" in g && t(0, D = g.reverseActive), "reverseButtonTitle" in g && t(9, F = g.reverseButtonTitle), "searchValue" in g && t(1, O = g.searchValue), "showFullGeometry" in g && t(39, M = g.showFullGeometry), "showPlaceType" in g && t(10, q = g.showPlaceType), "showResultsWhileTyping" in g && t(40, $ = g.showResultsWhileTyping), "selectFirst" in g && t(11, ne = g.selectFirst), "flyToSelected" in g && t(41, at = g.flyToSelected), "markerOnSelected" in g && t(42, Ve = g.markerOnSelected), "types" in g && t(43, Me = g.types), "excludeTypes" in g && t(44, Ye = g.excludeTypes), "zoom" in g && t(45, Te = g.zoom), "maxZoom" in g && t(46, Ke = g.maxZoom), "apiUrl" in g && t(47, ct = g.apiUrl), "fetchParameters" in g && t(48, ft = g.fetchParameters), "iconsBaseUrl" in g && t(12, Bt = g.iconsBaseUrl), "adjustUrlQuery" in g && t(49, dt = g.adjustUrlQuery), "$$scope" in g && t(59, o = g.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*enableReverse*/
    32 && t(0, D = b === "always"), n.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, Je = Pe), a && !Pe && t(1, O = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | n.$$.dirty[1] & /*minLength*/
    64 && O.length < L && (t(56, N = void 0), t(14, R = void 0), t(18, ce = void 0), t(55, G = R)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    33554688 && M && N && !N.address && N.geometry.type === "Point" && N.place_type[0] !== "reverse" && mt(N.id, { byId: !0 }).catch((g) => t(18, ce = g)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (x && N && N.id !== ht && E && (!N.bbox || N.bbox[0] === N.bbox[2] && N.bbox[1] === N.bbox[3] ? x.flyTo(N.center, Be(N)) : x.fitBounds(st(N.bbox), 50, Be(N)), t(14, R = void 0), t(55, G = void 0), t(15, U = -1)), t(57, ht = N == null ? void 0 : N.id)), n.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && ne && R != null && R.length && t(15, U = 0), n.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (ne || t(15, U = -1)), n.$$.dirty[0] & /*listFeatures*/
    16384 | n.$$.dirty[1] & /*markedFeatures*/
    16777216 && G !== R && t(55, G = void 0), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | n.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && x && x.setEventHandler((g) => {
      switch (g.type) {
        case "mapClick":
          D && Fi(g.coordinates);
          break;
        case "markerClick":
          {
            const j = R == null ? void 0 : R.find((H) => H.id === g.id);
            j && vt(j);
          }
          break;
        case "markerMouseEnter":
          G && t(15, U = Je ? (R == null ? void 0 : R.findIndex((j) => j.id === g.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          G && t(15, U = -1);
          break;
      }
    }), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, i = R == null ? void 0 : R[U]), n.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && x && i && E && at && x.flyTo(i.center, Be(i)), n.$$.dirty[1] & /*markerOnSelected, mapController*/
    2080 && (Ve || x == null || x.setMarkers(void 0, void 0)), n.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    150997024 && x && Ve && !G && (x.setMarkers(i ? [i] : void 0, void 0), x.setSelectedMarker(i ? 0 : -1)), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    50331680 && x && x.setMarkers(G, N), n.$$.dirty[0] & /*selectedItemIndex*/
    32768 | n.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && G && x && x.setSelectedMarker(U), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    32 && x) {
      const g = gt(O);
      x.setReverseMarker(g ? [g.decimalLongitude, g.decimalLatitude] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    134217728 && pe("select", i), n.$$.dirty[1] & /*picked*/
    33554432 && pe("pick", N), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && pe("optionsVisibilityChange", Je && !!R), n.$$.dirty[0] & /*listFeatures*/
    16384 && pe("featuresListed", R), n.$$.dirty[1] & /*markedFeatures*/
    16777216 && pe("featuresMarked", G), n.$$.dirty[0] & /*reverseActive*/
    1 && pe("reverseToggle", D), n.$$.dirty[0] & /*searchValue*/
    2 && pe("queryChange", O), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    32 && x && x.indicateReverse(D);
  }, [
    D,
    O,
    s,
    d,
    f,
    b,
    p,
    w,
    C,
    F,
    q,
    ne,
    Bt,
    Pe,
    R,
    U,
    Je,
    ae,
    ce,
    ke,
    Ui,
    zt,
    qi,
    pt,
    vt,
    l,
    c,
    u,
    a,
    h,
    y,
    m,
    E,
    S,
    _,
    k,
    x,
    L,
    I,
    M,
    $,
    at,
    Ve,
    Me,
    Ye,
    Te,
    Ke,
    ct,
    ft,
    dt,
    Wi,
    Ai,
    Dt,
    Bi,
    Di,
    G,
    N,
    ht,
    i,
    o,
    r,
    ji,
    Zi,
    Gi,
    Qi,
    Hi,
    Vi,
    Yi,
    Ki,
    Xi,
    Ji,
    $i,
    en,
    tn
  ];
}
let hr = class extends Se {
  constructor(e) {
    super(), xe(
      this,
      e,
      dr,
      fr,
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
function Ze(n, e, t = {}) {
  const i = { type: "Feature" };
  return (t.id === 0 || t.id) && (i.id = t.id), t.bbox && (i.bbox = t.bbox), i.properties = e || {}, i.geometry = n, i;
}
function Ot(n, e, t = {}) {
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
  return Ze({
    type: "Polygon",
    coordinates: n
  }, e, t);
}
function Ge(n, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = n, t;
}
function Ti(n, e, t = {}) {
  return Ze({
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
var Ee = (
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
function ve(n, e, t) {
  for (var i = new Ee(null, null), r = i, o = i; ; ) {
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
function Lt(n, e, t, i) {
  var r = new Ee(n, e);
  if (t === null)
    return r.left = r.right = null, r;
  t = ve(n, t, i);
  var o = i(n, t.key);
  return o < 0 ? (r.left = t.left, r.right = t, t.left = null) : o >= 0 && (r.right = t.right, r.left = t, t.right = null), r;
}
function li(n, e, t) {
  var i = null, r = null;
  if (e) {
    e = ve(n, e, t);
    var o = t(e.key, n);
    o === 0 ? (i = e.left, r = e.right) : o < 0 ? (r = e.right, e.right = null, i = e) : (i = e.left, e.left = null, r = e);
  }
  return { left: i, right: r };
}
function pr(n, e, t) {
  return e === null ? n : (n === null || (e = ve(n.key, e, t), e.left = n), e);
}
function Ct(n, e, t, i, r) {
  if (n) {
    i("" + e + (t ? "└── " : "├── ") + r(n) + `
`);
    var o = e + (t ? "    " : "│   ");
    n.left && Ct(n.left, o, !1, i, r), n.right && Ct(n.right, o, !0, i, r);
  }
}
var Wt = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = mr), this._root = null, this._size = 0, this._comparator = e;
    }
    return n.prototype.insert = function(e, t) {
      return this._size++, this._root = Lt(e, t, this._root, this._comparator);
    }, n.prototype.add = function(e, t) {
      var i = new Ee(e, t);
      this._root === null && (i.left = i.right = null, this._size++, this._root = i);
      var r = this._comparator, o = ve(e, this._root, r), l = r(e, o.key);
      return l === 0 ? this._root = o : (l < 0 ? (i.left = o.left, i.right = o, o.left = null) : l > 0 && (i.right = o.right, i.left = o, o.right = null), this._size++, this._root = i), this._root;
    }, n.prototype.remove = function(e) {
      this._root = this._remove(e, this._root, this._comparator);
    }, n.prototype._remove = function(e, t, i) {
      var r;
      if (t === null)
        return null;
      t = ve(e, t, i);
      var o = i(e, t.key);
      return o === 0 ? (t.left === null ? r = t.right : (r = ve(e, t.left, i), r.right = t.right), this._size--, r) : t;
    }, n.prototype.pop = function() {
      var e = this._root;
      if (e) {
        for (; e.left; )
          e = e.left;
        return this._root = ve(e.key, this._root, this._comparator), this._root = this._remove(e.key, this._root, this._comparator), { key: e.key, data: e.data };
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
      return this._root && (this._root = ve(e, this._root, this._comparator), this._comparator(e, this._root.key) !== 0) ? null : this._root;
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
      return yr(this._root);
    }, n.prototype.load = function(e, t, i) {
      t === void 0 && (t = []), i === void 0 && (i = !1);
      var r = e.length, o = this._comparator;
      if (i && Pt(e, t, 0, r - 1, o), this._root === null)
        this._root = Nt(e, t, 0, r), this._size = r;
      else {
        var l = br(this.toList(), vr(e, t), o);
        r = this._size + r, this._root = Tt({ head: l }, 0, r);
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
      var r = this._comparator, o = li(e, this._root, r), l = o.left, s = o.right;
      r(e, t) < 0 ? s = Lt(t, i, s, r) : l = Lt(t, i, l, r), this._root = pr(l, s, r);
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
function Nt(n, e, t, i) {
  var r = i - t;
  if (r > 0) {
    var o = t + Math.floor(r / 2), l = n[o], s = e[o], c = new Ee(l, s);
    return c.left = Nt(n, e, t, o), c.right = Nt(n, e, o + 1, i), c;
  }
  return null;
}
function vr(n, e) {
  for (var t = new Ee(null, null), i = t, r = 0; r < n.length; r++)
    i = i.next = new Ee(n[r], e[r]);
  return i.next = null, t.next;
}
function yr(n) {
  for (var e = n, t = [], i = !1, r = new Ee(null, null), o = r; !i; )
    e ? (t.push(e), e = e.left) : t.length > 0 ? (e = o = o.next = t.pop(), e = e.right) : i = !0;
  return o.next = null, r.next;
}
function Tt(n, e, t) {
  var i = t - e;
  if (i > 0) {
    var r = e + Math.floor(i / 2), o = Tt(n, e, r), l = n.head;
    return l.left = o, n.head = n.head.next, l.right = Tt(n, r + 1, t), l;
  }
  return null;
}
function br(n, e, t) {
  for (var i = new Ee(null, null), r = i, o = n, l = e; o !== null && l !== null; )
    t(o.key, l.key) < 0 ? (r.next = o, o = o.next) : (r.next = l, l = l.next), r = r.next;
  return o !== null ? r.next = o : l !== null && (r.next = l), i.next;
}
function Pt(n, e, t, i, r) {
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
    Pt(n, e, t, s, r), Pt(n, e, s + 1, i, r);
  }
}
const de = 11102230246251565e-32, Y = 134217729, wr = (3 + 8 * de) * de;
function xt(n, e, t, i, r) {
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
function _r(n, e) {
  let t = e[0];
  for (let i = 1; i < n; i++) t += e[i];
  return t;
}
function He(n) {
  return new Float64Array(n);
}
const Er = (3 + 16 * de) * de, Lr = (2 + 12 * de) * de, xr = (9 + 64 * de) * de * de, Oe = He(4), ui = He(8), ai = He(12), ci = He(16), X = He(4);
function Sr(n, e, t, i, r, o, l) {
  let s, c, u, d, a, f, h, y, b, p, m, E, S, _, k, x, L, w;
  const C = n - r, I = t - r, D = e - o, F = i - o;
  _ = C * F, f = Y * C, h = f - (f - C), y = C - h, f = Y * F, b = f - (f - F), p = F - b, k = y * p - (_ - h * b - y * b - h * p), x = D * I, f = Y * D, h = f - (f - D), y = D - h, f = Y * I, b = f - (f - I), p = I - b, L = y * p - (x - h * b - y * b - h * p), m = k - L, a = k - m, Oe[0] = k - (m + a) + (a - L), E = _ + m, a = E - _, S = _ - (E - a) + (m - a), m = S - x, a = S - m, Oe[1] = S - (m + a) + (a - x), w = E + m, a = w - E, Oe[2] = E - (w - a) + (m - a), Oe[3] = w;
  let O = _r(4, Oe), M = Lr * l;
  if (O >= M || -O >= M || (a = n - C, s = n - (C + a) + (a - r), a = t - I, u = t - (I + a) + (a - r), a = e - D, c = e - (D + a) + (a - o), a = i - F, d = i - (F + a) + (a - o), s === 0 && c === 0 && u === 0 && d === 0) || (M = xr * l + wr * Math.abs(O), O += C * d + F * s - (D * u + I * c), O >= M || -O >= M)) return O;
  _ = s * F, f = Y * s, h = f - (f - s), y = s - h, f = Y * F, b = f - (f - F), p = F - b, k = y * p - (_ - h * b - y * b - h * p), x = c * I, f = Y * c, h = f - (f - c), y = c - h, f = Y * I, b = f - (f - I), p = I - b, L = y * p - (x - h * b - y * b - h * p), m = k - L, a = k - m, X[0] = k - (m + a) + (a - L), E = _ + m, a = E - _, S = _ - (E - a) + (m - a), m = S - x, a = S - m, X[1] = S - (m + a) + (a - x), w = E + m, a = w - E, X[2] = E - (w - a) + (m - a), X[3] = w;
  const q = xt(4, Oe, 4, X, ui);
  _ = C * d, f = Y * C, h = f - (f - C), y = C - h, f = Y * d, b = f - (f - d), p = d - b, k = y * p - (_ - h * b - y * b - h * p), x = D * u, f = Y * D, h = f - (f - D), y = D - h, f = Y * u, b = f - (f - u), p = u - b, L = y * p - (x - h * b - y * b - h * p), m = k - L, a = k - m, X[0] = k - (m + a) + (a - L), E = _ + m, a = E - _, S = _ - (E - a) + (m - a), m = S - x, a = S - m, X[1] = S - (m + a) + (a - x), w = E + m, a = w - E, X[2] = E - (w - a) + (m - a), X[3] = w;
  const $ = xt(q, ui, 4, X, ai);
  _ = s * d, f = Y * s, h = f - (f - s), y = s - h, f = Y * d, b = f - (f - d), p = d - b, k = y * p - (_ - h * b - y * b - h * p), x = c * u, f = Y * c, h = f - (f - c), y = c - h, f = Y * u, b = f - (f - u), p = u - b, L = y * p - (x - h * b - y * b - h * p), m = k - L, a = k - m, X[0] = k - (m + a) + (a - L), E = _ + m, a = E - _, S = _ - (E - a) + (m - a), m = S - x, a = S - m, X[1] = S - (m + a) + (a - x), w = E + m, a = w - E, X[2] = E - (w - a) + (m - a), X[3] = w;
  const ne = xt($, ai, 4, X, ci);
  return ci[ne - 1];
}
function Mr(n, e, t, i, r, o) {
  const l = (e - o) * (t - r), s = (n - r) * (i - o), c = l - s, u = Math.abs(l + s);
  return Math.abs(c) >= Er * u ? c : -Sr(n, e, t, i, r, o, u);
}
const ze = (n, e) => n.ll.x <= e.x && e.x <= n.ur.x && n.ll.y <= e.y && e.y <= n.ur.y, Rt = (n, e) => {
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
let ye = Number.EPSILON;
ye === void 0 && (ye = Math.pow(2, -52));
const kr = ye * ye, fi = (n, e) => {
  if (-ye < n && n < ye && -ye < e && e < ye)
    return 0;
  const t = n - e;
  return t * t < kr * n * e ? 0 : n < e ? -1 : 1;
};
class Cr {
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
    const t = this.tree.add(e), i = this.tree.prev(t);
    if (i !== null && fi(t.key, i.key) === 0)
      return this.tree.remove(e), i.key;
    const r = this.tree.next(t);
    return r !== null && fi(t.key, r.key) === 0 ? (this.tree.remove(e), r.key) : e;
  }
}
const Qe = new Cr(), ot = (n, e) => n.x * e.y - n.y * e.x, Pi = (n, e) => n.x * e.x + n.y * e.y, hi = (n, e, t) => {
  const i = Mr(n.x, n.y, e.x, e.y, t.x, t.y);
  return i > 0 ? -1 : i < 0 ? 1 : 0;
}, lt = (n) => Math.sqrt(Pi(n, n)), Nr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return ot(r, i) / lt(r) / lt(i);
}, Tr = (n, e, t) => {
  const i = {
    x: e.x - n.x,
    y: e.y - n.y
  }, r = {
    x: t.x - n.x,
    y: t.y - n.y
  };
  return Pi(r, i) / lt(r) / lt(i);
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
  const r = ot(e, i);
  if (r == 0) return null;
  const o = {
    x: t.x - n.x,
    y: t.y - n.y
  }, l = ot(o, e) / r, s = ot(o, i) / r, c = n.x + s * e.x, u = t.x + l * i.x, d = n.y + s * e.y, a = t.y + l * i.y, f = (c + u) / 2, h = (d + a) / 2;
  return {
    x: f,
    y: h
  };
};
class oe {
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const i = oe.comparePoints(e.point, t.point);
    return i !== 0 ? i : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : be.compare(e.segment, t.segment));
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
let Rr = 0;
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
      const a = u - s, f = o - i, h = d - c, y = l - r;
      if (a > f && h < y) return 1;
      if (a < f && h > y) return -1;
    }
    return o > l ? 1 : o < l || u < d ? -1 : u > d ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, i, r) {
    this.id = ++Rr, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = i, this.windings = r;
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
    return new be(c, u, [i], [l]);
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
    const t = this.bbox(), i = e.bbox(), r = Rt(t, i);
    if (r === null) return null;
    const o = this.leftSE.point, l = this.rightSE.point, s = e.leftSE.point, c = e.rightSE.point, u = ze(t, s) && this.comparePoint(s) === 0, d = ze(i, o) && e.comparePoint(o) === 0, a = ze(t, c) && this.comparePoint(c) === 0, f = ze(i, l) && e.comparePoint(l) === 0;
    if (d && u)
      return f && !a ? l : !f && a ? c : null;
    if (d)
      return a && o.x === c.x && o.y === c.y ? null : o;
    if (u)
      return f && l.x === s.x && l.y === s.y ? null : s;
    if (f && a) return null;
    if (f) return l;
    if (a) return c;
    const h = Pr(o, this.vector(), s, e.vector());
    return h === null || !ze(r, h) ? null : Qe.round(h.x, h.y);
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
    const s = new be(r, l, this.rings.slice(), this.windings.slice());
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
    const r = be.compare(t, i);
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
class pi {
  constructor(e, t, i) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = t, this.isExterior = i, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const r = Qe.round(e[0][0], e[0][1]);
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
      let c = Qe.round(e[l][0], e[l][1]);
      c.x === o.x && c.y === o.y || (this.segments.push(be.fromRing(o, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), o = c);
    }
    (r.x !== o.x || r.y !== o.y) && this.segments.push(be.fromRing(o, r, this));
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
    for (let i = 1, r = e.length; i < r; i++) {
      const o = new pi(e[i], this, !1);
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
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      if (!o.isInResult() || o.ringOut) continue;
      let l = null, s = o.leftSE, c = o.rightSE;
      const u = [s], d = s.point, a = [];
      for (; l = s, s = c, u.push(s), s.point !== d; )
        for (; ; ) {
          const f = s.getAvailableLinkedEvents();
          if (f.length === 0) {
            const b = u[0].point, p = u[u.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${b.x}, ${b.y}]. Last matching segment found ends at [${p.x}, ${p.y}].`);
          }
          if (f.length === 1) {
            c = f[0].otherSE;
            break;
          }
          let h = null;
          for (let b = 0, p = a.length; b < p; b++)
            if (a[b].point === s.point) {
              h = b;
              break;
            }
          if (h !== null) {
            const b = a.splice(h)[0], p = u.splice(b.index);
            p.unshift(p[0].otherSE), t.push(new ut(p.reverse()));
            continue;
          }
          a.push({
            index: u.length,
            point: s.point
          });
          const y = s.getLeftmostComparator(l);
          c = f.sort(y)[0].otherSE;
          break;
        }
      t.push(new ut(u));
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
      hi(a, e, f) !== 0 && (t.push(a), e = a);
    }
    if (t.length === 1) return null;
    const i = t[0], r = t[1];
    hi(i, e, r) === 0 && t.shift(), t.push(t[0]);
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
class yi {
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
        if (o.isExteriorRing()) t.push(new yi(o));
        else {
          const l = o.enclosingRing();
          l.poly || t.push(new yi(l)), l.poly.addInterior(o);
        }
    }
    return t;
  }
}
class Wr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : be.compare;
    this.queue = e, this.tree = new Wt(t), this.segments = [];
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
          for (let h = 0, y = f.length; h < y; h++)
            i.push(f[h]);
        }
      }
      let d = null;
      if (c) {
        const a = c.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (d = a), !c.isAnEndpoint(a))) {
          const f = this._splitSafely(c, a);
          for (let h = 0, y = f.length; h < y; h++)
            i.push(f[h]);
        }
      }
      if (u !== null || d !== null) {
        let a = null;
        u === null ? a = d : d === null ? a = u : a = oe.comparePoints(u, d) <= 0 ? u : d, this.queue.remove(t.rightSE), i.push(t.rightSE);
        const f = t.split(a);
        for (let h = 0, y = f.length; h < y; h++)
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
const bi = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Ar = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Br {
  run(e, t, i) {
    le.type = e, Qe.reset();
    const r = [new vi(t, !0)];
    for (let a = 0, f = i.length; a < f; a++)
      r.push(new vi(i[a], !1));
    if (le.numMultiPolys = r.length, le.type === "difference") {
      const a = r[0];
      let f = 1;
      for (; f < r.length; )
        Rt(r[f].bbox, a.bbox) !== null ? f++ : r.splice(f, 1);
    }
    if (le.type === "intersection")
      for (let a = 0, f = r.length; a < f; a++) {
        const h = r[a];
        for (let y = a + 1, b = r.length; y < b; y++)
          if (Rt(h.bbox, r[y].bbox) === null) return [];
      }
    const o = new Wt(oe.compare);
    for (let a = 0, f = r.length; a < f; a++) {
      const h = r[a].getSweepEvents();
      for (let y = 0, b = h.length; y < b; y++)
        if (o.insert(h[y]), o.size > bi)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const l = new Wr(o);
    let s = o.size, c = o.pop();
    for (; c; ) {
      const a = c.key;
      if (o.size === s) {
        const h = a.segment;
        throw new Error(`Unable to pop() ${a.isLeft ? "left" : "right"} SweepEvent [${a.point.x}, ${a.point.y}] from segment #${h.id} [${h.leftSE.point.x}, ${h.leftSE.point.y}] -> [${h.rightSE.point.x}, ${h.rightSE.point.y}] from queue.`);
      }
      if (o.size > bi)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (l.segments.length > Ar)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const f = l.process(a);
      for (let h = 0, y = f.length; h < y; h++) {
        const b = f[h];
        b.consumedBy === void 0 && o.insert(b);
      }
      s = o.size, c = o.pop();
    }
    Qe.reset();
    const u = ut.factory(l.segments);
    return new Or(u).getGeom();
  }
}
const le = new Br(), Dr = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("union", n, t);
}, Ur = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("intersection", n, t);
}, zr = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("xor", n, t);
}, Fr = function(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    t[i - 1] = arguments[i];
  return le.run("difference", n, t);
};
var Ri = {
  union: Dr,
  intersection: Ur,
  xor: zr,
  difference: Fr
};
function Ii(n, e, t) {
  if (n !== null)
    for (var i, r, o, l, s, c, u, d = 0, a = 0, f, h = n.type, y = h === "FeatureCollection", b = h === "Feature", p = y ? n.features.length : 1, m = 0; m < p; m++) {
      u = y ? n.features[m].geometry : b ? n.geometry : n, f = u ? u.type === "GeometryCollection" : !1, s = f ? u.geometries.length : 1;
      for (var E = 0; E < s; E++) {
        var S = 0, _ = 0;
        if (l = f ? u.geometries[E] : u, l !== null) {
          c = l.coordinates;
          var k = l.type;
          switch (d = 0, k) {
            case null:
              break;
            case "Point":
              if (e(
                c,
                a,
                m,
                S,
                _
              ) === !1)
                return !1;
              a++, S++;
              break;
            case "LineString":
            case "MultiPoint":
              for (i = 0; i < c.length; i++) {
                if (e(
                  c[i],
                  a,
                  m,
                  S,
                  _
                ) === !1)
                  return !1;
                a++, k === "MultiPoint" && S++;
              }
              k === "LineString" && S++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (i = 0; i < c.length; i++) {
                for (r = 0; r < c[i].length - d; r++) {
                  if (e(
                    c[i][r],
                    a,
                    m,
                    S,
                    _
                  ) === !1)
                    return !1;
                  a++;
                }
                k === "MultiLineString" && S++, k === "Polygon" && _++;
              }
              k === "Polygon" && S++;
              break;
            case "MultiPolygon":
              for (i = 0; i < c.length; i++) {
                for (_ = 0, r = 0; r < c[i].length; r++) {
                  for (o = 0; o < c[i][r].length - d; o++) {
                    if (e(
                      c[i][r][o],
                      a,
                      m,
                      S,
                      _
                    ) === !1)
                      return !1;
                    a++;
                  }
                  _++;
                }
                S++;
              }
              break;
            case "GeometryCollection":
              for (i = 0; i < l.geometries.length; i++)
                if (Ii(l.geometries[i], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function At(n, e) {
  var t, i, r, o, l, s, c, u, d, a, f = 0, h = n.type === "FeatureCollection", y = n.type === "Feature", b = h ? n.features.length : 1;
  for (t = 0; t < b; t++) {
    for (s = h ? n.features[t].geometry : y ? n.geometry : n, u = h ? n.features[t].properties : y ? n.properties : {}, d = h ? n.features[t].bbox : y ? n.bbox : void 0, a = h ? n.features[t].id : y ? n.id : void 0, c = s ? s.type === "GeometryCollection" : !1, l = c ? s.geometries.length : 1, r = 0; r < l; r++) {
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
function qr(n, e) {
  At(n, function(t, i, r, o, l) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Ze(t, r, { bbox: o, id: l }),
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
      if (e(Ze(a, r), i, u) === !1)
        return !1;
    }
  });
}
function jr(n, e = {}) {
  const t = [];
  if (At(n, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const i = Ri.union(t[0], ...t.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Ot(i[0], e.properties) : Ti(i, e.properties);
}
var Oi = jr;
function Zr(n, e = {}) {
  if (n.bbox != null && e.recompute !== !0)
    return n.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Ii(n, (i) => {
    t[0] > i[0] && (t[0] = i[0]), t[1] > i[1] && (t[1] = i[1]), t[2] < i[0] && (t[2] = i[0]), t[3] < i[1] && (t[3] = i[1]);
  }), t;
}
var wi = Zr;
function Gr(n) {
  const e = [];
  if (At(n, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = n.features[0].properties || {}, i = Ri.difference(e[0], ...e.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Ot(i[0], t) : Ti(i, t);
}
var Qr = Gr;
function Hr(n) {
  if (!n)
    throw new Error("geojson is required");
  var e = [];
  return qr(n, function(t) {
    e.push(t);
  }), Ge(e);
}
var Vr = Hr;
function _i(n, e) {
  const t = Qr(
    Ge([
      Ot([
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
  const i = st(wi(n)), r = (i[2] - i[0]) / 360 / 1e3, o = i[0] < -180, l = i[2] > 180, s = Vr(n);
  if (s.features.length > 1 && (o || l))
    for (const c of s.features) {
      const u = st(wi(c));
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
    Ge([
      s.features.length < 2 ? n : Oi(s) ?? n,
      t
    ])
  );
}
const Ei = Ge([]);
function Yr(n, e, t = !0, i = !0, r = {}, o = {}, l = {
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
  let s;
  const c = [];
  let u, d, a;
  function f() {
    !n.getSource("full-geom") && (l != null && l.fill || l != null && l.line) && n.addSource("full-geom", {
      type: "geojson",
      data: Ei
    }), !n.getLayer("full-geom-fill") && (l != null && l.fill) && n.addLayer({
      ...l == null ? void 0 : l.fill,
      id: "full-geom-fill",
      type: "fill",
      source: "full-geom"
    }), !n.getLayer("full-geom-line") && (l != null && l.line) && n.addLayer({
      ...l == null ? void 0 : l.line,
      id: "full-geom-line",
      type: "line",
      source: "full-geom"
    }), a && b(a);
  }
  n.loaded() ? f() : n.once("load", () => {
    f();
  }), n.on("styledata", () => {
    f();
  });
  const h = (p) => {
    s == null || s({
      type: "mapClick",
      coordinates: [p.lngLat.lng, p.lngLat.lat]
    });
  };
  function y(p = !1) {
    if (!e)
      throw new Error();
    const m = document.createElement("div");
    return p && m.classList.add("marker-interactive"), new jn({
      props: { displayIn: "maplibre" },
      target: m
    }), new e.Marker({ element: m, offset: [1, -13] });
  }
  function b(p) {
    var m;
    a = p, p && ((m = n.getSource("full-geom")) == null || m.setData(p));
  }
  return {
    setEventHandler(p) {
      p ? (s = p, n.on("click", h)) : (s = void 0, n.off("click", h));
    },
    flyTo(p, m) {
      n.flyTo({ center: p, ...m ? { zoom: m } : {}, ...r });
    },
    fitBounds(p, m, E) {
      n.fitBounds(
        [
          [p[0], p[1]],
          [p[2], p[3]]
        ],
        { padding: m, ...E ? { maxZoom: E } : {}, ...o }
      );
    },
    indicateReverse(p) {
      n.getCanvasContainer().style.cursor = p ? "crosshair" : "";
    },
    setReverseMarker(p) {
      !e || !t || (d ? p ? d.setLngLat(p) : (d.remove(), d = void 0) : p && (d = (typeof t == "object" ? new e.Marker(t) : y()).setLngLat(p).addTo(n), d.getElement().classList.add("marker-reverse")));
    },
    setMarkers(p, m) {
      if (t) {
        for (const E of c)
          E.remove();
        if (c.length = 0, b(Ei), !!e) {
          if (m) {
            let E = !1;
            if (m.geometry.type === "GeometryCollection") {
              const S = m.geometry.geometries.filter(
                (_) => _.type === "Polygon" || _.type === "MultiPolygon"
              );
              e: if (S.length > 0) {
                const _ = Oi(
                  Ge(S.map((k) => Ze(k)))
                );
                if (!_)
                  break e;
                _i(
                  {
                    ...m,
                    geometry: _.geometry
                  },
                  b
                ), E = !0;
              } else {
                const _ = m.geometry.geometries.filter(
                  (k) => k.type === "LineString" || k.type === "MultiLineString"
                );
                _.length > 0 && (b({
                  ...m,
                  geometry: { type: "GeometryCollection", geometries: _ }
                }), E = !0);
              }
            }
            if (!E) {
              if (m.geometry.type === "Polygon" || m.geometry.type === "MultiPolygon")
                _i(m, b);
              else if (m.geometry.type === "LineString" || m.geometry.type === "MultiLineString") {
                b(m);
                return;
              }
            }
            t && c.push(
              (typeof t == "object" ? new e.Marker(t) : y()).setLngLat(m.center).addTo(n)
            );
          }
          if (i)
            for (const E of p ?? []) {
              if (E === m)
                continue;
              const S = (typeof i == "object" ? new e.Marker(i) : y(!0)).setLngLat(E.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  E.place_type[0] === "reverse" ? E.place_name : E.place_name.replace(/,.*/, "")
                )
              ).addTo(n), _ = S.getElement();
              _.addEventListener("click", (k) => {
                k.stopPropagation(), s == null || s({ type: "markerClick", id: E.id });
              }), _.addEventListener("mouseenter", () => {
                s == null || s({ type: "markerMouseEnter", id: E.id }), S.togglePopup();
              }), _.addEventListener("mouseleave", () => {
                s == null || s({ type: "markerMouseLeave", id: E.id }), S.togglePopup();
              }), c.push(S);
            }
        }
      }
    },
    setSelectedMarker(p) {
      u && u.getElement().classList.toggle("marker-selected", !1), u = p > -1 ? c[p] : void 0, u == null || u.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const p = n.getCenter();
      return [n.getZoom(), p.lng, p.lat];
    }
  };
}
var te, Ne;
class Kr extends EventTarget {
  constructor(t = {}) {
    super();
    _t(this, te);
    _t(this, Ne);
    et(this, Ne, t);
  }
  onAddInt(t) {
    const i = document.createElement("div");
    i.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
    const {
      marker: r,
      showResultMarkers: o,
      flyTo: l,
      fullGeometryStyle: s,
      ...c
    } = re(this, Ne), u = typeof l == "boolean" ? {} : l, d = this.getExtraProps(t, i), f = {
      mapController: Yr(
        t,
        this.getMapLibreGl(),
        r,
        o,
        u,
        u,
        s
      ),
      flyTo: l === void 0 ? !0 : !!l,
      apiKey: "",
      // just to satisfy apiKey; TODO find a better solution
      ...d,
      ...c
    };
    if (!f.apiKey)
      throw new Error("no apiKey provided");
    et(this, te, new hr({ target: i, props: f }));
    for (const h of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      re(this, te).$on(h, (y) => this.dispatchEvent(y));
    return i;
  }
  setOptions(t) {
    var c;
    et(this, Ne, t);
    const {
      marker: i,
      showResultMarkers: r,
      flyTo: o,
      fullGeometryStyle: l,
      ...s
    } = re(this, Ne);
    (c = re(this, te)) == null || c.$set(s);
  }
  setQuery(t, i = !0) {
    var r;
    (r = re(this, te)) == null || r.setQuery(t, i);
  }
  clearMap() {
    var t;
    (t = re(this, te)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = re(this, te)) == null || t.clearList();
  }
  setReverseMode(t) {
    var i;
    (i = re(this, te)) == null || i.$set({ reverseActive: t });
  }
  focus() {
    var t;
    (t = re(this, te)) == null || t.focus();
  }
  blur() {
    var t;
    (t = re(this, te)) == null || t.blur();
  }
  onRemove() {
    var t;
    (t = re(this, te)) == null || t.$destroy();
  }
}
te = new WeakMap(), Ne = new WeakMap();
class $r extends Kr {
  getMapLibreGl() {
    return on;
  }
  onAdd(e) {
    return super.onAddInt(e);
  }
  getExtraProps(e, t) {
    const i = {};
    if (!("getSdkConfig" in e && typeof e.getSdkConfig == "function"))
      throw new Error("MapTiler SDK not detected");
    const { primaryLanguage: r, apiKey: o } = e.getSdkConfig();
    i.apiKey = o;
    const l = /^([a-z]{2})($|_|-)/.exec(r);
    return l && (i.language = l[1]), t.className += " maptiler-ctrl", i;
  }
}
export {
  $r as GeocodingControl,
  Yr as createMapLibreGlMapController
};
//# sourceMappingURL=maptilersdk.js.map
