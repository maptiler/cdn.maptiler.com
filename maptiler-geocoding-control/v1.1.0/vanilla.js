var Gt = Object.defineProperty;
var Vt = (n, e, t) => e in n ? Gt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ge = (n, e, t) => (Vt(n, typeof e != "symbol" ? e + "" : e, t), t), nt = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var ne = (n, e, t) => (nt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), rt = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, it = (n, e, t, r) => (nt(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t);
function A() {
}
function Kt(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function yt(n) {
  return n();
}
function lt() {
  return /* @__PURE__ */ Object.create(null);
}
function le(n) {
  n.forEach(yt);
}
function bt(n) {
  return typeof n == "function";
}
function me(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let Ae;
function K(n, e) {
  return n === e ? !0 : (Ae || (Ae = document.createElement("a")), Ae.href = e, n === Ae.href);
}
function Ht(n) {
  return Object.keys(n).length === 0;
}
function Jt(n, e, t, r) {
  if (n) {
    const i = wt(n, e, t, r);
    return n[0](i);
  }
}
function wt(n, e, t, r) {
  return n[1] && r ? Kt(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function Xt(n, e, t, r) {
  if (n[2] && r) {
    const i = n[2](r(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const f = [], u = Math.max(e.dirty.length, i.length);
      for (let o = 0; o < u; o += 1)
        f[o] = e.dirty[o] | i[o];
      return f;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function Yt(n, e, t, r, i, f) {
  if (i) {
    const u = wt(e, t, r, f);
    n.p(u, i);
  }
}
function xt(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function st(n) {
  return n ?? "";
}
function T(n, e) {
  n.appendChild(e);
}
function I(n, e, t) {
  n.insertBefore(e, t || null);
}
function P(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function U(n) {
  return document.createElement(n);
}
function ce(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function fe(n) {
  return document.createTextNode(n);
}
function H() {
  return fe(" ");
}
function $t() {
  return fe("");
}
function G(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function en(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function s(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function tn(n) {
  return Array.from(n.childNodes);
}
function Be(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function ot(n, e) {
  n.value = e ?? "";
}
function oe(n, e, t) {
  n.classList.toggle(e, !!t);
}
function nn(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
let Ee;
function Le(n) {
  Ee = n;
}
function vt() {
  if (!Ee)
    throw new Error("Function called outside component initialization");
  return Ee;
}
function rn(n) {
  vt().$$.on_destroy.push(n);
}
function ln() {
  const n = vt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const f = nn(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return i.slice().forEach((u) => {
        u.call(n, f);
      }), !f.defaultPrevented;
    }
    return !0;
  };
}
function ct(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const ke = [], Ke = [];
let pe = [];
const ft = [], sn = /* @__PURE__ */ Promise.resolve();
let He = !1;
function on() {
  He || (He = !0, sn.then(kt));
}
function Je(n) {
  pe.push(n);
}
const Ve = /* @__PURE__ */ new Set();
let ve = 0;
function kt() {
  if (ve !== 0)
    return;
  const n = Ee;
  do {
    try {
      for (; ve < ke.length; ) {
        const e = ke[ve];
        ve++, Le(e), cn(e.$$);
      }
    } catch (e) {
      throw ke.length = 0, ve = 0, e;
    }
    for (Le(null), ke.length = 0, ve = 0; Ke.length; )
      Ke.pop()();
    for (let e = 0; e < pe.length; e += 1) {
      const t = pe[e];
      Ve.has(t) || (Ve.add(t), t());
    }
    pe.length = 0;
  } while (ke.length);
  for (; ft.length; )
    ft.pop()();
  He = !1, Ve.clear(), Le(n);
}
function cn(n) {
  if (n.fragment !== null) {
    n.update(), le(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Je);
  }
}
function fn(n) {
  const e = [], t = [];
  pe.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), pe = e;
}
const Pe = /* @__PURE__ */ new Set();
let he;
function Ie() {
  he = {
    r: 0,
    c: [],
    p: he
    // parent group
  };
}
function je() {
  he.r || le(he.c), he = he.p;
}
function Z(n, e) {
  n && n.i && (Pe.delete(n), n.i(e));
}
function F(n, e, t, r) {
  if (n && n.o) {
    if (Pe.has(n))
      return;
    Pe.add(n), he.c.push(() => {
      Pe.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function ut(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function un(n, e) {
  F(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function an(n, e, t, r, i, f, u, o, d, c, a, v) {
  let _ = n.length, R = f.length, S = _;
  const Q = {};
  for (; S--; )
    Q[n[S].key] = S;
  const L = [], B = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), m = [];
  for (S = R; S--; ) {
    const b = v(i, f, S), k = t(b);
    let h = u.get(k);
    h ? r && m.push(() => h.p(b, e)) : (h = c(k, b), h.c()), B.set(k, L[S] = h), k in Q && N.set(k, Math.abs(S - Q[k]));
  }
  const O = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  function E(b) {
    Z(b, 1), b.m(o, a), u.set(b.key, b), a = b.first, R--;
  }
  for (; _ && R; ) {
    const b = L[R - 1], k = n[_ - 1], h = b.key, w = k.key;
    b === k ? (a = b.first, _--, R--) : B.has(w) ? !u.has(h) || O.has(h) ? E(b) : g.has(w) ? _-- : N.get(h) > N.get(w) ? (g.add(h), E(b)) : (O.add(w), _--) : (d(k, u), _--);
  }
  for (; _--; ) {
    const b = n[_];
    B.has(b.key) || d(b, u);
  }
  for (; R; )
    E(L[R - 1]);
  return le(m), L;
}
function ue(n) {
  n && n.c();
}
function re(n, e, t) {
  const { fragment: r, after_update: i } = n.$$;
  r && r.m(e, t), Je(() => {
    const f = n.$$.on_mount.map(yt).filter(bt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...f) : le(f), n.$$.on_mount = [];
  }), i.forEach(Je);
}
function ie(n, e) {
  const t = n.$$;
  t.fragment !== null && (fn(t.after_update), le(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function dn(n, e) {
  n.$$.dirty[0] === -1 && (ke.push(n), on(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ge(n, e, t, r, i, f, u = null, o = [-1]) {
  const d = Ee;
  Le(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: A,
    not_equal: i,
    bound: lt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: lt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  u && u(c.root);
  let a = !1;
  if (c.ctx = t ? t(n, e.props || {}, (v, _, ...R) => {
    const S = R.length ? R[0] : _;
    return c.ctx && i(c.ctx[v], c.ctx[v] = S) && (!c.skip_bound && c.bound[v] && c.bound[v](S), a && dn(n, v)), _;
  }) : [], c.update(), a = !0, le(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = tn(e.target);
      c.fragment && c.fragment.l(v), v.forEach(P);
    } else
      c.fragment && c.fragment.c();
    e.intro && Z(n.$$.fragment), re(n, e.target, e.anchor), kt();
  }
  Le(d);
}
class _e {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ge(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ge(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ie(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!bt(t))
      return A;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ht(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const hn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(hn);
function mn(n) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), s(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), s(e, "viewBox", "0 0 14 14"), s(e, "width", "13"), s(e, "height", "13"), s(e, "class", "svelte-en2qvf");
    },
    m(r, i) {
      I(r, e, i), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class pt extends _e {
  constructor(e) {
    super(), ge(this, e, null, mn, me, {});
  }
}
function gn(n) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), s(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), s(e, "viewBox", "0 0 30 30"), s(e, "fill", "none"), s(e, "xmlns", "http://www.w3.org/2000/svg"), s(e, "class", "svelte-d2loi5");
    },
    m(r, i) {
      I(r, e, i), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class Tt extends _e {
  constructor(e) {
    super(), ge(this, e, null, gn, me, {});
  }
}
function _n(n) {
  let e, t;
  return {
    c() {
      e = U("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      I(r, e, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && s(e, "src", t), i & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function yn(n) {
  let e, t;
  return {
    c() {
      e = U("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      I(r, e, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && s(e, "src", t), i & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function bn(n) {
  let e, t;
  return {
    c() {
      e = U("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      I(r, e, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && s(e, "src", t), i & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function wn(n) {
  let e, t;
  return {
    c() {
      e = U("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      I(r, e, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && s(e, "src", t), i & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function vn(n) {
  let e, t;
  return {
    c() {
      e = U("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      I(r, e, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && s(e, "src", t), i & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function kn(n) {
  let e, t;
  return {
    c() {
      e = U("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      I(r, e, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && s(e, "src", t), i & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function pn(n) {
  let e, t, r, i;
  return {
    c() {
      e = U("img"), K(e.src, t = /*imageUrl*/
      n[5]) || s(e, "src", t), s(
        e,
        "alt",
        /*category*/
        n[4]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(f, u) {
      I(f, e, u), r || (i = G(
        e,
        "error",
        /*error_handler*/
        n[13]
      ), r = !0);
    },
    p(f, u) {
      u & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      f[5]) && s(e, "src", t), u & /*category*/
      16 && s(
        e,
        "alt",
        /*category*/
        f[4]
      );
    },
    d(f) {
      f && P(e), r = !1, i();
    }
  };
}
function at(n) {
  let e, t;
  return {
    c() {
      e = U("span"), t = fe(
        /*placeType*/
        n[6]
      ), s(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, i) {
      I(r, e, i), T(e, t);
    },
    p(r, i) {
      i & /*placeType*/
      64 && Be(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function Tn(n) {
  var b, k;
  let e, t, r, i, f, u, o, d, c = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), a, v, _ = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((b = n[0].properties) == null ? void 0 : b.kind) !== "road" && /*feature*/
    ((k = n[0].properties) == null ? void 0 : k.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5])
  ), R, S, Q = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), L, B, N;
  function m(h, w) {
    var Y, M;
    return w & /*feature*/
    1 && (t = null), w & /*feature*/
    1 && (r = null), w & /*feature*/
    1 && (i = null), /*imageUrl*/
    h[5] ? pn : (
      /*feature*/
      h[0].address ? kn : (
        /*feature*/
        ((Y = h[0].properties) == null ? void 0 : Y.kind) === "road" || /*feature*/
        ((M = h[0].properties) == null ? void 0 : M.kind) === "road_relation" ? vn : (t == null && (t = !!/*feature*/
        h[0].id.startsWith("address.")), t ? wn : (r == null && (r = !!/*feature*/
        h[0].id.startsWith("postal_code.")), r ? bn : (i == null && (i = !!/*feature*/
        h[0].id.startsWith("poi.")), i ? yn : _n)))
      )
    );
  }
  let O = m(n, -1), g = O(n), E = _ && at(n);
  return {
    c() {
      e = U("li"), g.c(), f = H(), u = U("span"), o = U("span"), d = U("span"), a = fe(c), v = H(), E && E.c(), R = H(), S = U("span"), L = fe(Q), s(d, "class", "primary svelte-ltkwvy"), s(o, "class", "svelte-ltkwvy"), s(S, "class", "line2 svelte-ltkwvy"), s(u, "class", "texts svelte-ltkwvy"), s(e, "tabindex", "0"), s(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), s(e, "class", "svelte-ltkwvy"), oe(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(h, w) {
      I(h, e, w), g.m(e, null), T(e, f), T(e, u), T(u, o), T(o, d), T(d, a), T(o, v), E && E.m(o, null), T(u, R), T(u, S), T(S, L), B || (N = [
        G(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[11]
        ),
        G(
          e,
          "focus",
          /*focus_handler*/
          n[12]
        )
      ], B = !0);
    },
    p(h, [w]) {
      var Y, M;
      O === (O = m(h, w)) && g ? g.p(h, w) : (g.d(1), g = O(h), g && (g.c(), g.m(e, f))), w & /*feature*/
      1 && c !== (c = /*feature*/
      h[0].place_name.replace(/,.*/, "") + "") && Be(a, c), w & /*showPlaceType, feature, imageUrl*/
      37 && (_ = /*showPlaceType*/
      h[2] === "always" || /*showPlaceType*/
      h[2] && !/*feature*/
      h[0].address && /*feature*/
      ((Y = h[0].properties) == null ? void 0 : Y.kind) !== "road" && /*feature*/
      ((M = h[0].properties) == null ? void 0 : M.kind) !== "road_relation" && !/*feature*/
      h[0].id.startsWith("address.") && !/*feature*/
      h[0].id.startsWith("postal_code.") && (!/*feature*/
      h[0].id.startsWith("poi.") || !/*imageUrl*/
      h[5])), _ ? E ? E.p(h, w) : (E = at(h), E.c(), E.m(o, null)) : E && (E.d(1), E = null), w & /*feature*/
      1 && Q !== (Q = /*feature*/
      h[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Be(L, Q), w & /*selected*/
      2 && s(
        e,
        "data-selected",
        /*selected*/
        h[1]
      ), w & /*selected*/
      2 && oe(
        e,
        "selected",
        /*selected*/
        h[1]
      );
    },
    i: A,
    o: A,
    d(h) {
      h && P(e), g.d(), E && E.d(), B = !1, le(N);
    }
  };
}
function Mn(n, e, t) {
  var N;
  let r, i, { feature: f } = e, { selected: u = !1 } = e, { showPlaceType: o } = e, { missingIconsCache: d } = e, { iconsBaseUrl: c } = e;
  const a = (N = f.properties) == null ? void 0 : N.categories;
  let v, _, R = 0;
  function S(m) {
    _ && d.add(_), t(9, R++, R);
  }
  function Q(m) {
    ct.call(this, n, m);
  }
  function L(m) {
    ct.call(this, n, m);
  }
  const B = (m) => S(m.currentTarget);
  return n.$$set = (m) => {
    "feature" in m && t(0, f = m.feature), "selected" in m && t(1, u = m.selected), "showPlaceType" in m && t(2, o = m.showPlaceType), "missingIconsCache" in m && t(8, d = m.missingIconsCache), "iconsBaseUrl" in m && t(3, c = m.iconsBaseUrl);
  }, n.$$.update = () => {
    var m, O, g, E;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    1848)
      do
        t(10, r--, r), t(4, v = a == null ? void 0 : a[r]), t(5, _ = v ? c + v.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!_ || d.has(_)));
    n.$$.dirty & /*feature*/
    1 && t(6, i = f.id.startsWith("poi.") ? (O = (m = f.properties) == null ? void 0 : m.categories) == null ? void 0 : O.join(", ") : ((E = (g = f.properties) == null ? void 0 : g.place_type_name) == null ? void 0 : E[0]) ?? f.place_type[0]);
  }, t(10, r = (a == null ? void 0 : a.length) ?? 0), [
    f,
    u,
    o,
    c,
    v,
    _,
    i,
    S,
    d,
    R,
    r,
    Q,
    L,
    B
  ];
}
class Ln extends _e {
  constructor(e) {
    super(), ge(this, e, Mn, Tn, me, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function Bn(n) {
  let e;
  return {
    c() {
      e = U("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', s(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      I(t, e, r);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && P(e);
    }
  };
}
class En extends _e {
  constructor(e) {
    super(), ge(this, e, null, Bn, me, {});
  }
}
function Cn(n) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), s(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), s(e, "viewBox", "0 0 60.006 21.412"), s(e, "width", "14"), s(e, "height", "20"), s(e, "class", "svelte-en2qvf");
    },
    m(r, i) {
      I(r, e, i), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class Rn extends _e {
  constructor(e) {
    super(), ge(this, e, null, Cn, me, {});
  }
}
function Sn(n) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), s(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), s(e, "width", "14"), s(e, "height", "14"), s(e, "viewBox", "0 0 15 15"), s(e, "class", "svelte-en2qvf");
    },
    m(r, i) {
      I(r, e, i), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class Un extends _e {
  constructor(e) {
    super(), ge(this, e, null, Sn, me, {});
  }
}
function zn(n, e, t) {
  const r = e[1], i = e[0], f = r - i;
  return n === r && t ? n : ((n - i) % f + f) % f + i;
}
function dt(n) {
  const e = [...n];
  return e[2] < e[0] && (e[2] += 360), e;
}
let Me;
async function An(n, e, t) {
  const r = n == null ? void 0 : n.getCenterAndZoom();
  for (const i of e ?? [])
    if (!(r && (i.minZoom != null && i.minZoom > r[0] || i.maxZoom != null && i.maxZoom < r[0]))) {
      if (i.type === "fixed")
        return i.coordinates.join(",");
      e:
        if (i.type === "client-geolocation") {
          if (Me && i.cachedLocationExpiry && Me.time + i.cachedLocationExpiry > Date.now()) {
            if (!Me.coords)
              break e;
            return Me.coords;
          }
          let f;
          try {
            return f = await new Promise((u, o) => {
              t.signal.addEventListener("abort", () => {
                o(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (d) => {
                  u(
                    [d.coords.longitude, d.coords.latitude].map((c) => c.toFixed(6)).join(",")
                  );
                },
                (d) => {
                  o(d);
                },
                i
              );
            }), f;
          } catch {
          } finally {
            i.cachedLocationExpiry && (Me = {
              time: Date.now(),
              coords: f
            });
          }
          if (t.signal.aborted)
            return;
        }
      if (i.type === "server-geolocation")
        return "ip";
      if (r && i.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
function ht(n, e, t) {
  const r = n.slice();
  return r[78] = e[t], r[80] = t, r;
}
function mt(n) {
  let e, t;
  return e = new En({}), {
    c() {
      ue(e.$$.fragment);
    },
    m(r, i) {
      re(e, r, i), t = !0;
    },
    i(r) {
      t || (Z(e.$$.fragment, r), t = !0);
    },
    o(r) {
      F(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ie(e, r);
    }
  };
}
function gt(n) {
  let e, t, r, i, f;
  return t = new Rn({}), {
    c() {
      e = U("button"), ue(t.$$.fragment), s(e, "type", "button"), s(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), s(e, "class", "svelte-1r7dvt7"), oe(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(u, o) {
      I(u, e, o), re(t, e, null), r = !0, i || (f = G(
        e,
        "click",
        /*click_handler_2*/
        n[64]
      ), i = !0);
    },
    p(u, o) {
      (!r || o[0] & /*reverseButtonTitle*/
      512) && s(
        e,
        "title",
        /*reverseButtonTitle*/
        u[9]
      ), (!r || o[0] & /*reverseActive*/
      1) && oe(
        e,
        "active",
        /*reverseActive*/
        u[0]
      );
    },
    i(u) {
      r || (Z(t.$$.fragment, u), r = !0);
    },
    o(u) {
      F(t.$$.fragment, u), r = !1;
    },
    d(u) {
      u && P(e), ie(t), i = !1, f();
    }
  };
}
function Pn(n) {
  let e, t = [], r = /* @__PURE__ */ new Map(), i, f, u, o = ut(
    /*listFeatures*/
    n[13]
  );
  const d = (c) => (
    /*feature*/
    c[78].id + /*feature*/
    (c[78].address ? "," + /*feature*/
    c[78].address : "")
  );
  for (let c = 0; c < o.length; c += 1) {
    let a = ht(n, o, c), v = d(a);
    r.set(v, t[c] = _t(v, a));
  }
  return {
    c() {
      e = U("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      s(e, "class", "svelte-1r7dvt7");
    },
    m(c, a) {
      I(c, e, a);
      for (let v = 0; v < t.length; v += 1)
        t[v] && t[v].m(e, null);
      i = !0, f || (u = [
        G(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[68]
        ),
        G(
          e,
          "blur",
          /*blur_handler_1*/
          n[69]
        )
      ], f = !0);
    },
    p(c, a) {
      a[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (o = ut(
        /*listFeatures*/
        c[13]
      ), Ie(), t = an(t, a, d, 1, c, o, r, e, un, _t, null, ht), je());
    },
    i(c) {
      if (!i) {
        for (let a = 0; a < o.length; a += 1)
          Z(t[a]);
        i = !0;
      }
    },
    o(c) {
      for (let a = 0; a < t.length; a += 1)
        F(t[a]);
      i = !1;
    },
    d(c) {
      c && P(e);
      for (let a = 0; a < t.length; a += 1)
        t[a].d();
      f = !1, le(u);
    }
  };
}
function In(n) {
  let e, t, r, i, f, u;
  return t = new Tt({}), {
    c() {
      e = U("div"), ue(t.$$.fragment), r = H(), i = U("div"), f = fe(
        /*noResultsMessage*/
        n[7]
      ), s(i, "class", "svelte-1r7dvt7"), s(e, "class", "no-results svelte-1r7dvt7");
    },
    m(o, d) {
      I(o, e, d), re(t, e, null), T(e, r), T(e, i), T(i, f), u = !0;
    },
    p(o, d) {
      (!u || d[0] & /*noResultsMessage*/
      128) && Be(
        f,
        /*noResultsMessage*/
        o[7]
      );
    },
    i(o) {
      u || (Z(t.$$.fragment, o), u = !0);
    },
    o(o) {
      F(t.$$.fragment, o), u = !1;
    },
    d(o) {
      o && P(e), ie(t);
    }
  };
}
function jn(n) {
  let e = "", t;
  return {
    c() {
      t = fe(e);
    },
    m(r, i) {
      I(r, t, i);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(t);
    }
  };
}
function Zn(n) {
  let e, t, r, i, f, u, o, d, c, a, v;
  return t = new Tt({}), d = new pt({}), {
    c() {
      e = U("div"), ue(t.$$.fragment), r = H(), i = U("div"), f = fe(
        /*errorMessage*/
        n[6]
      ), u = H(), o = U("button"), ue(d.$$.fragment), s(i, "class", "svelte-1r7dvt7"), s(o, "class", "svelte-1r7dvt7"), s(e, "class", "error svelte-1r7dvt7");
    },
    m(_, R) {
      I(_, e, R), re(t, e, null), T(e, r), T(e, i), T(i, f), T(e, u), T(e, o), re(d, o, null), c = !0, a || (v = G(
        o,
        "click",
        /*click_handler_3*/
        n[65]
      ), a = !0);
    },
    p(_, R) {
      (!c || R[0] & /*errorMessage*/
      64) && Be(
        f,
        /*errorMessage*/
        _[6]
      );
    },
    i(_) {
      c || (Z(t.$$.fragment, _), Z(d.$$.fragment, _), c = !0);
    },
    o(_) {
      F(t.$$.fragment, _), F(d.$$.fragment, _), c = !1;
    },
    d(_) {
      _ && P(e), ie(t), ie(d), a = !1, v();
    }
  };
}
function _t(n, e) {
  let t, r, i;
  function f() {
    return (
      /*mouseenter_handler*/
      e[66](
        /*i*/
        e[80]
      )
    );
  }
  function u() {
    return (
      /*focus_handler_1*/
      e[67](
        /*feature*/
        e[78]
      )
    );
  }
  return r = new Ln({
    props: {
      feature: (
        /*feature*/
        e[78]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[14] === /*i*/
        e[80]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        e[19]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        e[11]
      )
    }
  }), r.$on("mouseenter", f), r.$on("focus", u), {
    key: n,
    first: null,
    c() {
      t = $t(), ue(r.$$.fragment), this.first = t;
    },
    m(o, d) {
      I(o, t, d), re(r, o, d), i = !0;
    },
    p(o, d) {
      e = o;
      const c = {};
      d[0] & /*listFeatures*/
      8192 && (c.feature = /*feature*/
      e[78]), d[0] & /*showPlaceType*/
      1024 && (c.showPlaceType = /*showPlaceType*/
      e[10]), d[0] & /*selectedItemIndex, listFeatures*/
      24576 && (c.selected = /*selectedItemIndex*/
      e[14] === /*i*/
      e[80]), d[0] & /*iconsBaseUrl*/
      2048 && (c.iconsBaseUrl = /*iconsBaseUrl*/
      e[11]), r.$set(c);
    },
    i(o) {
      i || (Z(r.$$.fragment, o), i = !0);
    },
    o(o) {
      F(r.$$.fragment, o), i = !1;
    },
    d(o) {
      o && P(t), ie(r, o);
    }
  };
}
function Wn(n) {
  let e, t, r, i, f, u, o, d, c, a, v, _, R, S, Q, L, B, N, m, O, g, E = !1;
  f = new Un({}), v = new pt({});
  let b = (
    /*abortController*/
    n[18] && mt()
  ), k = (
    /*enableReverse*/
    n[5] === !0 && gt(n)
  );
  const h = (
    /*#slots*/
    n[56].default
  ), w = Jt(
    h,
    n,
    /*$$scope*/
    n[55],
    null
  ), Y = [Zn, jn, In, Pn], M = [];
  function ye(y, z) {
    var V, ae;
    return (
      /*error*/
      y[17] ? 0 : (
        /*focusedDelayed*/
        y[15] ? (
          /*listFeatures*/
          ((V = y[13]) == null ? void 0 : V.length) === 0 ? 2 : (
            /*focusedDelayed*/
            y[15] && /*listFeatures*/
            ((ae = y[13]) != null && ae.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(L = ye(n)) && (B = M[L] = Y[L](n)), {
    c() {
      e = H(), t = U("form"), r = U("div"), i = U("button"), ue(f.$$.fragment), u = H(), o = U("input"), d = H(), c = U("div"), a = U("button"), ue(v.$$.fragment), _ = H(), b && b.c(), R = H(), k && k.c(), S = H(), w && w.c(), Q = H(), B && B.c(), s(i, "class", "search-button svelte-1r7dvt7"), s(i, "type", "button"), s(
        o,
        "placeholder",
        /*placeholder*/
        n[8]
      ), s(
        o,
        "aria-label",
        /*placeholder*/
        n[8]
      ), s(o, "class", "svelte-1r7dvt7"), s(a, "type", "button"), s(
        a,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), s(a, "class", "svelte-1r7dvt7"), s(c, "class", "clear-button-container svelte-1r7dvt7"), oe(
        c,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), s(r, "class", "input-group svelte-1r7dvt7"), s(t, "tabindex", "0"), s(t, "class", N = st(
        /*className*/
        n[2]
      ) + " svelte-1r7dvt7"), oe(
        t,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(y, z) {
      I(y, e, z), I(y, t, z), T(t, r), T(r, i), re(f, i, null), T(r, u), T(r, o), n[58](o), ot(
        o,
        /*searchValue*/
        n[1]
      ), T(r, d), T(r, c), T(c, a), re(v, a, null), T(c, _), b && b.m(c, null), T(r, R), k && k.m(r, null), T(r, S), w && w.m(r, null), T(t, Q), ~L && M[L].m(t, null), m = !0, O || (g = [
        G(
          i,
          "click",
          /*click_handler*/
          n[57]
        ),
        G(
          o,
          "input",
          /*input_1_input_handler*/
          n[59]
        ),
        G(
          o,
          "focus",
          /*focus_handler*/
          n[60]
        ),
        G(
          o,
          "blur",
          /*blur_handler*/
          n[61]
        ),
        G(
          o,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        G(
          o,
          "input",
          /*input_handler*/
          n[62]
        ),
        G(
          a,
          "click",
          /*click_handler_1*/
          n[63]
        ),
        G(t, "submit", en(
          /*handleOnSubmit*/
          n[20]
        ))
      ], O = !0);
    },
    p(y, z) {
      (!m || z[0] & /*placeholder*/
      256) && s(
        o,
        "placeholder",
        /*placeholder*/
        y[8]
      ), (!m || z[0] & /*placeholder*/
      256) && s(
        o,
        "aria-label",
        /*placeholder*/
        y[8]
      ), z[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      y[1] && ot(
        o,
        /*searchValue*/
        y[1]
      ), (!m || z[0] & /*clearButtonTitle*/
      8) && s(
        a,
        "title",
        /*clearButtonTitle*/
        y[3]
      ), /*abortController*/
      y[18] ? b ? z[0] & /*abortController*/
      262144 && Z(b, 1) : (b = mt(), b.c(), Z(b, 1), b.m(c, null)) : b && (Ie(), F(b, 1, 1, () => {
        b = null;
      }), je()), (!m || z[0] & /*searchValue*/
      2) && oe(
        c,
        "displayable",
        /*searchValue*/
        y[1] !== ""
      ), /*enableReverse*/
      y[5] === !0 ? k ? (k.p(y, z), z[0] & /*enableReverse*/
      32 && Z(k, 1)) : (k = gt(y), k.c(), Z(k, 1), k.m(r, S)) : k && (Ie(), F(k, 1, 1, () => {
        k = null;
      }), je()), w && w.p && (!m || z[1] & /*$$scope*/
      16777216) && Yt(
        w,
        h,
        y,
        /*$$scope*/
        y[55],
        m ? Xt(
          h,
          /*$$scope*/
          y[55],
          z,
          null
        ) : xt(
          /*$$scope*/
          y[55]
        ),
        null
      );
      let V = L;
      L = ye(y), L === V ? ~L && M[L].p(y, z) : (B && (Ie(), F(M[V], 1, 1, () => {
        M[V] = null;
      }), je()), ~L ? (B = M[L], B ? B.p(y, z) : (B = M[L] = Y[L](y), B.c()), Z(B, 1), B.m(t, null)) : B = null), (!m || z[0] & /*className*/
      4 && N !== (N = st(
        /*className*/
        y[2]
      ) + " svelte-1r7dvt7")) && s(t, "class", N), (!m || z[0] & /*className, collapsed, searchValue*/
      22) && oe(
        t,
        "can-collapse",
        /*collapsed*/
        y[4] && /*searchValue*/
        y[1] === ""
      );
    },
    i(y) {
      m || (Z(E), Z(f.$$.fragment, y), Z(v.$$.fragment, y), Z(b), Z(k), Z(w, y), Z(B), m = !0);
    },
    o(y) {
      F(E), F(f.$$.fragment, y), F(v.$$.fragment, y), F(b), F(k), F(w, y), F(B), m = !1;
    },
    d(y) {
      y && (P(e), P(t)), ie(f), n[58](null), ie(v), b && b.d(), k && k.d(), w && w.d(y), ~L && M[L].d(), O = !1, le(g);
    }
  };
}
function On(n, e, t) {
  let r, { $$slots: i = {}, $$scope: f } = e, { class: u = void 0 } = e, { apiKey: o } = e, { bbox: d = void 0 } = e, { clearButtonTitle: c = "clear" } = e, { clearOnBlur: a = !1 } = e, { collapsed: v = !1 } = e, { country: _ = void 0 } = e, { debounceSearch: R = 200 } = e, { enableReverse: S = !1 } = e, { errorMessage: Q = "Something went wrong…" } = e, { filter: L = () => !0 } = e, { flyTo: B = !0 } = e, { fuzzyMatch: N = !0 } = e, { language: m = void 0 } = e, { limit: O = void 0 } = e, { mapController: g = void 0 } = e, { minLength: E = 2 } = e, { noResultsMessage: b = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: h = [{ type: "server-geolocation" }] } = e, { reverseActive: w = S === "always" } = e, { reverseButtonTitle: Y = "toggle reverse geocoding" } = e, { searchValue: M = "" } = e, { showFullGeometry: ye = !0 } = e, { showPlaceType: y = "ifNeeded" } = e, { showResultsWhileTyping: z = !0 } = e, { types: V = void 0 } = e, { excludeTypes: ae = !1 } = e, { zoom: Ce = 16 } = e, { maxZoom: Te = 18 } = e, { apiUrl: Ze = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: We = {} } = e, { iconsBaseUrl: Xe = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.1.0/icons/" } = e, { adjustUrlQuery: Oe = (l) => {
  } } = e;
  function Mt() {
    x.focus();
  }
  function Lt() {
    x.blur();
  }
  function Ye(l, W = !0) {
    t(1, M = l), W ? (t(14, j = -1), $e()) : (Qe(), setTimeout(() => {
      x.focus(), x.select();
    }));
  }
  function Bt() {
    t(13, C = void 0), t(52, p = void 0), t(14, j = -1);
  }
  function Et() {
    t(51, D = []), t(52, p = void 0);
  }
  let be = !1, C, D, p, xe = "", x, j = -1, $, Re = [], de, we, Se, Ne;
  const Ct = /* @__PURE__ */ new Set(), se = ln();
  rn(() => {
    g && (g.setEventHandler(void 0), g.indicateReverse(!1), g.setSelectedMarker(-1), g.setMarkers(void 0, void 0));
  });
  function $e(l) {
    if (we && (clearTimeout(we), we = void 0), j > -1 && C)
      t(52, p = C[j]), t(1, M = p.place_name.replace(/,.*/, "")), t(17, $ = void 0), t(51, D = void 0), t(14, j = -1);
    else if (M) {
      const W = l || !et();
      Fe(M, { exact: !0 }).then(() => {
        t(51, D = C), t(52, p = void 0), W && Rt();
      }).catch((ee) => t(17, $ = ee));
    }
  }
  function et() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(M);
  }
  async function Fe(l, { byId: W = !1, exact: ee = !1 } = {}) {
    t(17, $ = void 0), de == null || de.abort();
    const te = new AbortController();
    t(18, de = te);
    try {
      const q = et(), J = new URLSearchParams();
      if (m !== void 0 && J.set("language", Array.isArray(m) ? m.join(",") : m ?? ""), V && J.set("types", V.join(",")), ae && J.set("excludeTypes", String(ae)), d && J.set("bbox", d.map((ze) => ze.toFixed(6)).join(",")), _ && J.set("country", Array.isArray(_) ? _.join(",") : _), !W && !q) {
        const ze = await An(g, h, te);
        ze && J.set("proximity", ze), (ee || !z) && J.set("autocomplete", "false"), J.set("fuzzyMatch", String(N));
      }
      O !== void 0 && (!q || (V == null ? void 0 : V.length) === 1) && J.set("limit", String(O)), J.set("key", o), Oe(J);
      const Ue = Ze + "/" + encodeURIComponent(l) + ".json?" + J.toString();
      if (Ue === xe) {
        W ? (t(13, C = void 0), t(52, p = Re[0])) : t(13, C = Re);
        return;
      }
      xe = Ue;
      const tt = await fetch(Ue, { signal: te.signal, ...We });
      if (!tt.ok)
        throw new Error();
      const qe = await tt.json();
      se("response", { url: Ue, featureCollection: qe }), W ? (t(13, C = void 0), t(52, p = qe.features[0]), Re = [p]) : (t(13, C = qe.features.filter(L)), Re = C, q && x.focus());
    } catch (q) {
      if (q && typeof q == "object" && "name" in q && q.name === "AbortError")
        return;
      throw q;
    } finally {
      te === de && t(18, de = void 0);
    }
  }
  function Rt() {
    var ee;
    if (!(D != null && D.length) || !B)
      return;
    const l = [180, 90, -180, -90], W = !D.some((te) => !te.matching_text);
    for (const te of D)
      if (W || !te.matching_text)
        for (const q of [0, 1, 2, 3])
          l[q] = Math[q < 2 ? "min" : "max"](l[q], ((ee = te.bbox) == null ? void 0 : ee[q]) ?? te.center[q % 2]);
    g && D.length > 0 && (p && l[0] === l[2] && l[1] === l[3] ? g.flyTo(p.center, Ce) : g.fitBounds(dt(l), 50, Te));
  }
  function St(l) {
    t(0, w = S === "always"), Ye(zn(l[0], [-180, 180], !0).toFixed(6) + "," + l[1].toFixed(6));
  }
  function Ut(l) {
    if (!C)
      return;
    let W = l.key === "ArrowDown" ? 1 : l.key === "ArrowUp" ? -1 : 0;
    W ? (j === -1 && W === -1 && t(14, j = C.length), t(14, j += W), j >= C.length && t(14, j = -1), l.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(l.key) && t(14, j = -1);
  }
  function Qe(l = !0) {
    if (t(17, $ = void 0), z) {
      if (we && clearTimeout(we), M.length < E)
        return;
      const W = M;
      we = window.setTimeout(
        () => {
          Fe(W).catch((ee) => t(17, $ = ee));
        },
        l ? R : 0
      );
    } else
      t(13, C = void 0), t(17, $ = void 0);
  }
  function De(l) {
    t(52, p = l), t(1, M = l.place_name), t(14, j = -1);
  }
  const zt = () => x.focus();
  function At(l) {
    Ke[l ? "unshift" : "push"](() => {
      x = l, t(16, x);
    });
  }
  function Pt() {
    M = this.value, t(1, M), t(12, be), t(26, a);
  }
  const It = () => t(12, be = !0), jt = () => t(12, be = !1), Zt = () => Qe(), Wt = () => {
    t(1, M = ""), x.focus();
  }, Ot = () => t(0, w = !w), Nt = () => t(17, $ = void 0), Ft = (l) => t(14, j = l), Qt = (l) => De(l), Dt = () => t(14, j = -1), qt = () => {
  };
  return n.$$set = (l) => {
    "class" in l && t(2, u = l.class), "apiKey" in l && t(24, o = l.apiKey), "bbox" in l && t(25, d = l.bbox), "clearButtonTitle" in l && t(3, c = l.clearButtonTitle), "clearOnBlur" in l && t(26, a = l.clearOnBlur), "collapsed" in l && t(4, v = l.collapsed), "country" in l && t(27, _ = l.country), "debounceSearch" in l && t(28, R = l.debounceSearch), "enableReverse" in l && t(5, S = l.enableReverse), "errorMessage" in l && t(6, Q = l.errorMessage), "filter" in l && t(29, L = l.filter), "flyTo" in l && t(30, B = l.flyTo), "fuzzyMatch" in l && t(31, N = l.fuzzyMatch), "language" in l && t(32, m = l.language), "limit" in l && t(33, O = l.limit), "mapController" in l && t(34, g = l.mapController), "minLength" in l && t(35, E = l.minLength), "noResultsMessage" in l && t(7, b = l.noResultsMessage), "placeholder" in l && t(8, k = l.placeholder), "proximity" in l && t(36, h = l.proximity), "reverseActive" in l && t(0, w = l.reverseActive), "reverseButtonTitle" in l && t(9, Y = l.reverseButtonTitle), "searchValue" in l && t(1, M = l.searchValue), "showFullGeometry" in l && t(37, ye = l.showFullGeometry), "showPlaceType" in l && t(10, y = l.showPlaceType), "showResultsWhileTyping" in l && t(38, z = l.showResultsWhileTyping), "types" in l && t(39, V = l.types), "excludeTypes" in l && t(40, ae = l.excludeTypes), "zoom" in l && t(41, Ce = l.zoom), "maxZoom" in l && t(42, Te = l.maxZoom), "apiUrl" in l && t(43, Ze = l.apiUrl), "fetchParameters" in l && t(44, We = l.fetchParameters), "iconsBaseUrl" in l && t(11, Xe = l.iconsBaseUrl), "adjustUrlQuery" in l && t(45, Oe = l.adjustUrlQuery), "$$scope" in l && t(55, f = l.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*focused, clearOnBlur*/
    67112960 && setTimeout(() => {
      t(15, Se = be), a && !be && t(1, M = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    16 && M.length < E && (t(52, p = void 0), t(13, C = void 0), t(17, $ = void 0), t(51, D = C)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    2097216 && ye && p && !p.address && p.geometry.type === "Point" && Fe(p.id, { byId: !0 }).catch((l) => t(17, $ = l)), n.$$.dirty[0] & /*flyTo*/
    1073741824 | n.$$.dirty[1] & /*mapController, picked, prevIdToFly, maxZoom, zoom*/
    6294536 && (g && p && p.id !== Ne && B && (!p.bbox || p.bbox[0] === p.bbox[2] && p.bbox[1] === p.bbox[3] ? g.flyTo(p.center, p.id.startsWith("poi.") || p.id.startsWith("address.") ? Te : Ce) : g.fitBounds(dt(p.bbox), 50, Te), t(13, C = void 0), t(51, D = void 0), t(14, j = -1)), t(53, Ne = p == null ? void 0 : p.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    1048576 && D !== C && t(51, D = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    3145736 && g && g.setMarkers(D, p), n.$$.dirty[0] & /*searchValue*/
    2 && t(14, j = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController*/
    8 && g && g.setEventHandler((l) => {
      switch (l.type) {
        case "mapClick":
          w && St(l.coordinates);
          break;
        case "markerClick":
          {
            const W = C == null ? void 0 : C.find((ee) => ee.id === l.id);
            W && De(W);
          }
          break;
        case "markerMouseEnter":
          t(14, j = Se ? (C == null ? void 0 : C.findIndex((W) => W.id === l.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          t(14, j = -1);
          break;
      }
    }), n.$$.dirty[0] & /*selectedItemIndex*/
    16384 | n.$$.dirty[1] & /*mapController*/
    8 && (g == null || g.setSelectedMarker(j)), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && t(54, r = C == null ? void 0 : C[j]), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    8) {
      const l = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(M);
      g == null || g.setReverseMarker(l ? [Number(l[1]), Number(l[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    8388608 && se("select", r), n.$$.dirty[1] & /*picked*/
    2097152 && se("pick", p), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && se("optionsVisibilityChange", Se && !!C), n.$$.dirty[0] & /*listFeatures*/
    8192 && se("featuresListed", C), n.$$.dirty[1] & /*markedFeatures*/
    1048576 && se("featuresMarked", D), n.$$.dirty[0] & /*reverseActive*/
    1 && se("reverseToggle", w), n.$$.dirty[0] & /*searchValue*/
    2 && se("queryChange", M), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    8 && g && g.indicateReverse(w);
  }, [
    w,
    M,
    u,
    c,
    v,
    S,
    Q,
    b,
    k,
    Y,
    y,
    Xe,
    be,
    C,
    j,
    Se,
    x,
    $,
    de,
    Ct,
    $e,
    Ut,
    Qe,
    De,
    o,
    d,
    a,
    _,
    R,
    L,
    B,
    N,
    m,
    O,
    g,
    E,
    h,
    ye,
    z,
    V,
    ae,
    Ce,
    Te,
    Ze,
    We,
    Oe,
    Mt,
    Lt,
    Ye,
    Bt,
    Et,
    D,
    p,
    Ne,
    r,
    f,
    i,
    zt,
    At,
    Pt,
    It,
    jt,
    Zt,
    Wt,
    Ot,
    Nt,
    Ft,
    Qt,
    Dt,
    qt
  ];
}
let Nn = class extends _e {
  constructor(e) {
    super(), ge(
      this,
      e,
      On,
      Wn,
      me,
      {
        class: 2,
        apiKey: 24,
        bbox: 25,
        clearButtonTitle: 3,
        clearOnBlur: 26,
        collapsed: 4,
        country: 27,
        debounceSearch: 28,
        enableReverse: 5,
        errorMessage: 6,
        filter: 29,
        flyTo: 30,
        fuzzyMatch: 31,
        language: 32,
        limit: 33,
        mapController: 34,
        minLength: 35,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 36,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 37,
        showPlaceType: 10,
        showResultsWhileTyping: 38,
        types: 39,
        excludeTypes: 40,
        zoom: 41,
        maxZoom: 42,
        apiUrl: 43,
        fetchParameters: 44,
        iconsBaseUrl: 11,
        adjustUrlQuery: 45,
        focus: 46,
        blur: 47,
        setQuery: 48,
        clearList: 49,
        clearMap: 50
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[46];
  }
  get blur() {
    return this.$$.ctx[47];
  }
  get setQuery() {
    return this.$$.ctx[48];
  }
  get clearList() {
    return this.$$.ctx[49];
  }
  get clearMap() {
    return this.$$.ctx[50];
  }
};
const Fn = new FinalizationRegistry((n) => {
  n.$destroy();
});
var X;
class qn extends EventTarget {
  constructor({ target: t, ...r }) {
    super();
    rt(this, X, void 0);
    it(this, X, new Nn({
      target: t,
      props: r
    }));
    for (const i of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      ne(this, X).$on(i, (f) => this.dispatchEvent(f));
    Fn.register(this, ne(this, X));
  }
  setOptions(t) {
    ne(this, X).$set(t);
  }
  setQuery(t, r = !0) {
    var i;
    (i = ne(this, X)) == null || i.setQuery(t, r);
  }
  clearMap() {
    var t;
    (t = ne(this, X)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = ne(this, X)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = ne(this, X)) == null || t.focus();
  }
  blur() {
    var t;
    (t = ne(this, X)) == null || t.blur();
  }
}
X = new WeakMap();
export {
  qn as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
