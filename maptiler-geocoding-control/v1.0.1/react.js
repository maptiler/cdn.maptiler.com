var Gt = Object.defineProperty;
var Dt = (n, e, t) => e in n ? Gt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Qe = (n, e, t) => (Dt(n, typeof e != "symbol" ? e + "" : e, t), t);
import { forwardRef as qt, useRef as et, useEffect as Ge, useImperativeHandle as Vt, createElement as Kt } from "react";
function A() {
}
function Ht(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function gt(n) {
  return n();
}
function tt() {
  return /* @__PURE__ */ Object.create(null);
}
function re(n) {
  n.forEach(gt);
}
function _t(n) {
  return typeof n == "function";
}
function de(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let Se;
function K(n, e) {
  return n === e ? !0 : (Se || (Se = document.createElement("a")), Se.href = e, n === Se.href);
}
function Jt(n) {
  return Object.keys(n).length === 0;
}
function Xt(n, e, t, r) {
  if (n) {
    const l = yt(n, e, t, r);
    return n[0](l);
  }
}
function yt(n, e, t, r) {
  return n[1] && r ? Ht(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function Yt(n, e, t, r) {
  if (n[2] && r) {
    const l = n[2](r(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const u = [], o = Math.max(e.dirty.length, l.length);
      for (let c = 0; c < o; c += 1)
        u[c] = e.dirty[c] | l[c];
      return u;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function xt(n, e, t, r, l, u) {
  if (l) {
    const o = yt(e, t, r, u);
    n.p(o, l);
  }
}
function $t(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function nt(n) {
  return n ?? "";
}
function M(n, e) {
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
function se(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function oe(n) {
  return document.createTextNode(n);
}
function H() {
  return oe(" ");
}
function en() {
  return oe("");
}
function q(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function tn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function s(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function nn(n) {
  return Array.from(n.childNodes);
}
function Te(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function rt(n, e) {
  n.value = e ?? "";
}
function ie(n, e, t) {
  n.classList.toggle(e, !!t);
}
function rn(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
let Le;
function Me(n) {
  Le = n;
}
function bt() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function ln(n) {
  bt().$$.on_destroy.push(n);
}
function sn() {
  const n = bt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const u = rn(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return l.slice().forEach((o) => {
        o.call(n, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function lt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const we = [], qe = [];
let ve = [];
const it = [], on = /* @__PURE__ */ Promise.resolve();
let Ve = !1;
function cn() {
  Ve || (Ve = !0, on.then(wt));
}
function Ke(n) {
  ve.push(n);
}
const De = /* @__PURE__ */ new Set();
let be = 0;
function wt() {
  if (be !== 0)
    return;
  const n = Le;
  do {
    try {
      for (; be < we.length; ) {
        const e = we[be];
        be++, Me(e), fn(e.$$);
      }
    } catch (e) {
      throw we.length = 0, be = 0, e;
    }
    for (Me(null), we.length = 0, be = 0; qe.length; )
      qe.pop()();
    for (let e = 0; e < ve.length; e += 1) {
      const t = ve[e];
      De.has(t) || (De.add(t), t());
    }
    ve.length = 0;
  } while (we.length);
  for (; it.length; )
    it.pop()();
  Ve = !1, De.clear(), Me(n);
}
function fn(n) {
  if (n.fragment !== null) {
    n.update(), re(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ke);
  }
}
function un(n) {
  const e = [], t = [];
  ve.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), ve = e;
}
const Ue = /* @__PURE__ */ new Set();
let ae;
function ze() {
  ae = {
    r: 0,
    c: [],
    p: ae
    // parent group
  };
}
function Ae() {
  ae.r || re(ae.c), ae = ae.p;
}
function W(n, e) {
  n && n.i && (Ue.delete(n), n.i(e));
}
function F(n, e, t, r) {
  if (n && n.o) {
    if (Ue.has(n))
      return;
    Ue.add(n), ae.c.push(() => {
      Ue.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function st(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function an(n, e) {
  F(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function dn(n, e, t, r, l, u, o, c, a, f, d, v) {
  let _ = n.length, C = u.length, S = _;
  const Q = {};
  for (; S--; )
    Q[n[S].key] = S;
  const L = [], B = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), m = [];
  for (S = C; S--; ) {
    const b = v(l, u, S), k = t(b);
    let h = o.get(k);
    h ? r && m.push(() => h.p(b, e)) : (h = f(k, b), h.c()), B.set(k, L[S] = h), k in Q && O.set(k, Math.abs(S - Q[k]));
  }
  const N = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  function R(b) {
    W(b, 1), b.m(c, d), o.set(b.key, b), d = b.first, C--;
  }
  for (; _ && C; ) {
    const b = L[C - 1], k = n[_ - 1], h = b.key, w = k.key;
    b === k ? (d = b.first, _--, C--) : B.has(w) ? !o.has(h) || N.has(h) ? R(b) : g.has(w) ? _-- : O.get(h) > O.get(w) ? (g.add(h), R(b)) : (N.add(w), _--) : (a(k, o), _--);
  }
  for (; _--; ) {
    const b = n[_];
    B.has(b.key) || a(b, o);
  }
  for (; C; )
    R(L[C - 1]);
  return re(m), L;
}
function ce(n) {
  n && n.c();
}
function te(n, e, t) {
  const { fragment: r, after_update: l } = n.$$;
  r && r.m(e, t), Ke(() => {
    const u = n.$$.on_mount.map(gt).filter(_t);
    n.$$.on_destroy ? n.$$.on_destroy.push(...u) : re(u), n.$$.on_mount = [];
  }), l.forEach(Ke);
}
function ne(n, e) {
  const t = n.$$;
  t.fragment !== null && (un(t.after_update), re(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function hn(n, e) {
  n.$$.dirty[0] === -1 && (we.push(n), cn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function he(n, e, t, r, l, u, o = null, c = [-1]) {
  const a = Le;
  Me(n);
  const f = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: A,
    not_equal: l,
    bound: tt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: tt(),
    dirty: c,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(f.root);
  let d = !1;
  if (f.ctx = t ? t(n, e.props || {}, (v, _, ...C) => {
    const S = C.length ? C[0] : _;
    return f.ctx && l(f.ctx[v], f.ctx[v] = S) && (!f.skip_bound && f.bound[v] && f.bound[v](S), d && hn(n, v)), _;
  }) : [], f.update(), d = !0, re(f.before_update), f.fragment = r ? r(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = nn(e.target);
      f.fragment && f.fragment.l(v), v.forEach(P);
    } else
      f.fragment && f.fragment.c();
    e.intro && W(n.$$.fragment), te(n, e.target, e.anchor), wt();
  }
  Me(a);
}
class me {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Qe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Qe(this, "$$set");
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
    if (!_t(t))
      return A;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const l = r.indexOf(t);
      l !== -1 && r.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Jt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const mn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(mn);
function gn(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), s(e, "viewBox", "0 0 14 14"), s(e, "width", "13"), s(e, "height", "13"), s(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      I(r, e, l), M(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class vt extends me {
  constructor(e) {
    super(), he(this, e, null, gn, de, {});
  }
}
function _n(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), s(e, "viewBox", "0 0 30 30"), s(e, "fill", "none"), s(e, "xmlns", "http://www.w3.org/2000/svg"), s(e, "class", "svelte-d2loi5");
    },
    m(r, l) {
      I(r, e, l), M(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class kt extends me {
  constructor(e) {
    super(), he(this, e, null, _n, de, {});
  }
}
function yn(n) {
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
    m(r, l) {
      I(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && s(e, "src", t), l & /*placeType*/
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
      n[3] + "poi.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      I(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && s(e, "src", t), l & /*placeType*/
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
      n[3] + "postal_code.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      I(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && s(e, "src", t), l & /*placeType*/
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
      n[3] + "street.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      I(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && s(e, "src", t), l & /*placeType*/
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
      n[3] + "road.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      I(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && s(e, "src", t), l & /*placeType*/
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
    m(r, l) {
      I(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && s(e, "src", t), l & /*placeType*/
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
function Mn(n) {
  let e, t, r, l;
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
    m(u, o) {
      I(u, e, o), r || (l = q(
        e,
        "error",
        /*error_handler*/
        n[13]
      ), r = !0);
    },
    p(u, o) {
      o & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      u[5]) && s(e, "src", t), o & /*category*/
      16 && s(
        e,
        "alt",
        /*category*/
        u[4]
      );
    },
    d(u) {
      u && P(e), r = !1, l();
    }
  };
}
function ot(n) {
  let e, t;
  return {
    c() {
      e = U("span"), t = oe(
        /*placeType*/
        n[6]
      ), s(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, l) {
      I(r, e, l), M(e, t);
    },
    p(r, l) {
      l & /*placeType*/
      64 && Te(
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
  let e, t, r, l, u, o, c, a, f = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), d, v, _ = (
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
  ), C, S, Q = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), L, B, O;
  function m(h, w) {
    var J, T;
    return w & /*feature*/
    1 && (t = null), w & /*feature*/
    1 && (r = null), w & /*feature*/
    1 && (l = null), /*imageUrl*/
    h[5] ? Mn : (
      /*feature*/
      h[0].address ? pn : (
        /*feature*/
        ((J = h[0].properties) == null ? void 0 : J.kind) === "road" || /*feature*/
        ((T = h[0].properties) == null ? void 0 : T.kind) === "road_relation" ? kn : (t == null && (t = !!/*feature*/
        h[0].id.startsWith("address.")), t ? vn : (r == null && (r = !!/*feature*/
        h[0].id.startsWith("postal_code.")), r ? wn : (l == null && (l = !!/*feature*/
        h[0].id.startsWith("poi.")), l ? bn : yn)))
      )
    );
  }
  let N = m(n, -1), g = N(n), R = _ && ot(n);
  return {
    c() {
      e = U("li"), g.c(), u = H(), o = U("span"), c = U("span"), a = U("span"), d = oe(f), v = H(), R && R.c(), C = H(), S = U("span"), L = oe(Q), s(a, "class", "primary svelte-ltkwvy"), s(c, "class", "svelte-ltkwvy"), s(S, "class", "line2 svelte-ltkwvy"), s(o, "class", "texts svelte-ltkwvy"), s(e, "tabindex", "0"), s(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), s(e, "class", "svelte-ltkwvy"), ie(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(h, w) {
      I(h, e, w), g.m(e, null), M(e, u), M(e, o), M(o, c), M(c, a), M(a, d), M(c, v), R && R.m(c, null), M(o, C), M(o, S), M(S, L), B || (O = [
        q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[11]
        ),
        q(
          e,
          "focus",
          /*focus_handler*/
          n[12]
        )
      ], B = !0);
    },
    p(h, [w]) {
      var J, T;
      N === (N = m(h, w)) && g ? g.p(h, w) : (g.d(1), g = N(h), g && (g.c(), g.m(e, u))), w & /*feature*/
      1 && f !== (f = /*feature*/
      h[0].place_name.replace(/,.*/, "") + "") && Te(d, f), w & /*showPlaceType, feature, imageUrl*/
      37 && (_ = /*showPlaceType*/
      h[2] === "always" || /*showPlaceType*/
      h[2] && !/*feature*/
      h[0].address && /*feature*/
      ((J = h[0].properties) == null ? void 0 : J.kind) !== "road" && /*feature*/
      ((T = h[0].properties) == null ? void 0 : T.kind) !== "road_relation" && !/*feature*/
      h[0].id.startsWith("address.") && !/*feature*/
      h[0].id.startsWith("postal_code.") && (!/*feature*/
      h[0].id.startsWith("poi.") || !/*imageUrl*/
      h[5])), _ ? R ? R.p(h, w) : (R = ot(h), R.c(), R.m(c, null)) : R && (R.d(1), R = null), w & /*feature*/
      1 && Q !== (Q = /*feature*/
      h[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Te(L, Q), w & /*selected*/
      2 && s(
        e,
        "data-selected",
        /*selected*/
        h[1]
      ), w & /*selected*/
      2 && ie(
        e,
        "selected",
        /*selected*/
        h[1]
      );
    },
    i: A,
    o: A,
    d(h) {
      h && P(e), g.d(), R && R.d(), B = !1, re(O);
    }
  };
}
function Ln(n, e, t) {
  var O;
  let r, l, { feature: u } = e, { selected: o = !1 } = e, { showPlaceType: c } = e, { missingIconsCache: a } = e, { iconsBaseUrl: f } = e;
  const d = (O = u.properties) == null ? void 0 : O.categories;
  let v, _, C = 0;
  function S(m) {
    _ && a.add(_), t(9, C++, C);
  }
  function Q(m) {
    lt.call(this, n, m);
  }
  function L(m) {
    lt.call(this, n, m);
  }
  const B = (m) => S(m.currentTarget);
  return n.$$set = (m) => {
    "feature" in m && t(0, u = m.feature), "selected" in m && t(1, o = m.selected), "showPlaceType" in m && t(2, c = m.showPlaceType), "missingIconsCache" in m && t(8, a = m.missingIconsCache), "iconsBaseUrl" in m && t(3, f = m.iconsBaseUrl);
  }, n.$$.update = () => {
    var m, N, g, R;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    1848)
      do
        t(10, r--, r), t(4, v = d == null ? void 0 : d[r]), t(5, _ = v ? f + v.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!_ || a.has(_)));
    n.$$.dirty & /*feature*/
    1 && t(6, l = u.id.startsWith("poi.") ? (N = (m = u.properties) == null ? void 0 : m.categories) == null ? void 0 : N.join(", ") : ((R = (g = u.properties) == null ? void 0 : g.place_type_name) == null ? void 0 : R[0]) ?? u.place_type[0]);
  }, t(10, r = (d == null ? void 0 : d.length) ?? 0), [
    u,
    o,
    c,
    f,
    v,
    _,
    l,
    S,
    a,
    C,
    r,
    Q,
    L,
    B
  ];
}
class Bn extends me {
  constructor(e) {
    super(), he(this, e, Ln, Tn, de, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function Rn(n) {
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
class En extends me {
  constructor(e) {
    super(), he(this, e, null, Rn, de, {});
  }
}
function Cn(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), s(e, "viewBox", "0 0 60.006 21.412"), s(e, "width", "14"), s(e, "height", "20"), s(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      I(r, e, l), M(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class Sn extends me {
  constructor(e) {
    super(), he(this, e, null, Cn, de, {});
  }
}
function Un(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), s(e, "width", "14"), s(e, "height", "14"), s(e, "viewBox", "0 0 15 15"), s(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      I(r, e, l), M(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && P(e);
    }
  };
}
class zn extends me {
  constructor(e) {
    super(), he(this, e, null, Un, de, {});
  }
}
function An(n, e, t) {
  const r = e[1], l = e[0], u = r - l;
  return n === r && t ? n : ((n - l) % u + u) % u + l;
}
function ct(n) {
  const e = [...n];
  return e[2] < e[0] && (e[2] += 360), e;
}
let pe;
async function Pn(n, e, t) {
  const r = n == null ? void 0 : n.getCenterAndZoom();
  for (const l of e ?? [])
    if (!(r && (l.minZoom != null && l.minZoom > r[0] || l.maxZoom != null && l.maxZoom < r[0]))) {
      if (l.type === "fixed")
        return l.coordinates.join(",");
      e:
        if (l.type === "client-geolocation") {
          if (pe && l.cachedLocationExpiry && pe.time + l.cachedLocationExpiry > Date.now()) {
            if (!pe.coords)
              break e;
            return pe.coords;
          }
          let u;
          try {
            return u = await new Promise((o, c) => {
              t.signal.addEventListener("abort", () => {
                c(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (a) => {
                  o(
                    [a.coords.longitude, a.coords.latitude].map((f) => f.toFixed(6)).join(",")
                  );
                },
                (a) => {
                  c(a);
                },
                l
              );
            }), u;
          } catch {
          } finally {
            l.cachedLocationExpiry && (pe = {
              time: Date.now(),
              coords: u
            });
          }
          if (t.signal.aborted)
            return;
        }
      if (l.type === "server-geolocation")
        return "ip";
      if (r && l.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
function ft(n, e, t) {
  const r = n.slice();
  return r[77] = e[t], r[79] = t, r;
}
function ut(n) {
  let e, t;
  return e = new En({}), {
    c() {
      ce(e.$$.fragment);
    },
    m(r, l) {
      te(e, r, l), t = !0;
    },
    i(r) {
      t || (W(e.$$.fragment, r), t = !0);
    },
    o(r) {
      F(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ne(e, r);
    }
  };
}
function at(n) {
  let e, t, r, l, u;
  return t = new Sn({}), {
    c() {
      e = U("button"), ce(t.$$.fragment), s(e, "type", "button"), s(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), s(e, "class", "svelte-1r7dvt7"), ie(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(o, c) {
      I(o, e, c), te(t, e, null), r = !0, l || (u = q(
        e,
        "click",
        /*click_handler_2*/
        n[63]
      ), l = !0);
    },
    p(o, c) {
      (!r || c[0] & /*reverseButtonTitle*/
      512) && s(
        e,
        "title",
        /*reverseButtonTitle*/
        o[9]
      ), (!r || c[0] & /*reverseActive*/
      1) && ie(
        e,
        "active",
        /*reverseActive*/
        o[0]
      );
    },
    i(o) {
      r || (W(t.$$.fragment, o), r = !0);
    },
    o(o) {
      F(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && P(e), ne(t), l = !1, u();
    }
  };
}
function In(n) {
  let e, t = [], r = /* @__PURE__ */ new Map(), l, u, o, c = st(
    /*listFeatures*/
    n[13]
  );
  const a = (f) => (
    /*feature*/
    f[77].id + /*feature*/
    (f[77].address ? "," + /*feature*/
    f[77].address : "")
  );
  for (let f = 0; f < c.length; f += 1) {
    let d = ft(n, c, f), v = a(d);
    r.set(v, t[f] = dt(v, d));
  }
  return {
    c() {
      e = U("ul");
      for (let f = 0; f < t.length; f += 1)
        t[f].c();
      s(e, "class", "svelte-1r7dvt7");
    },
    m(f, d) {
      I(f, e, d);
      for (let v = 0; v < t.length; v += 1)
        t[v] && t[v].m(e, null);
      l = !0, u || (o = [
        q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[67]
        ),
        q(
          e,
          "blur",
          /*blur_handler_1*/
          n[68]
        )
      ], u = !0);
    },
    p(f, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (c = st(
        /*listFeatures*/
        f[13]
      ), ze(), t = dn(t, d, a, 1, f, c, r, e, an, dt, null, ft), Ae());
    },
    i(f) {
      if (!l) {
        for (let d = 0; d < c.length; d += 1)
          W(t[d]);
        l = !0;
      }
    },
    o(f) {
      for (let d = 0; d < t.length; d += 1)
        F(t[d]);
      l = !1;
    },
    d(f) {
      f && P(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      u = !1, re(o);
    }
  };
}
function jn(n) {
  let e, t, r, l, u, o;
  return t = new kt({}), {
    c() {
      e = U("div"), ce(t.$$.fragment), r = H(), l = U("div"), u = oe(
        /*noResultsMessage*/
        n[7]
      ), s(l, "class", "svelte-1r7dvt7"), s(e, "class", "no-results svelte-1r7dvt7");
    },
    m(c, a) {
      I(c, e, a), te(t, e, null), M(e, r), M(e, l), M(l, u), o = !0;
    },
    p(c, a) {
      (!o || a[0] & /*noResultsMessage*/
      128) && Te(
        u,
        /*noResultsMessage*/
        c[7]
      );
    },
    i(c) {
      o || (W(t.$$.fragment, c), o = !0);
    },
    o(c) {
      F(t.$$.fragment, c), o = !1;
    },
    d(c) {
      c && P(e), ne(t);
    }
  };
}
function Wn(n) {
  let e = "", t;
  return {
    c() {
      t = oe(e);
    },
    m(r, l) {
      I(r, t, l);
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
  let e, t, r, l, u, o, c, a, f, d, v;
  return t = new kt({}), a = new vt({}), {
    c() {
      e = U("div"), ce(t.$$.fragment), r = H(), l = U("div"), u = oe(
        /*errorMessage*/
        n[6]
      ), o = H(), c = U("button"), ce(a.$$.fragment), s(l, "class", "svelte-1r7dvt7"), s(c, "class", "svelte-1r7dvt7"), s(e, "class", "error svelte-1r7dvt7");
    },
    m(_, C) {
      I(_, e, C), te(t, e, null), M(e, r), M(e, l), M(l, u), M(e, o), M(e, c), te(a, c, null), f = !0, d || (v = q(
        c,
        "click",
        /*click_handler_3*/
        n[64]
      ), d = !0);
    },
    p(_, C) {
      (!f || C[0] & /*errorMessage*/
      64) && Te(
        u,
        /*errorMessage*/
        _[6]
      );
    },
    i(_) {
      f || (W(t.$$.fragment, _), W(a.$$.fragment, _), f = !0);
    },
    o(_) {
      F(t.$$.fragment, _), F(a.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && P(e), ne(t), ne(a), d = !1, v();
    }
  };
}
function dt(n, e) {
  let t, r, l;
  function u() {
    return (
      /*mouseenter_handler*/
      e[65](
        /*i*/
        e[79]
      )
    );
  }
  function o() {
    return (
      /*focus_handler_1*/
      e[66](
        /*feature*/
        e[77]
      )
    );
  }
  return r = new Bn({
    props: {
      feature: (
        /*feature*/
        e[77]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[14] === /*i*/
        e[79]
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
  }), r.$on("mouseenter", u), r.$on("focus", o), {
    key: n,
    first: null,
    c() {
      t = en(), ce(r.$$.fragment), this.first = t;
    },
    m(c, a) {
      I(c, t, a), te(r, c, a), l = !0;
    },
    p(c, a) {
      e = c;
      const f = {};
      a[0] & /*listFeatures*/
      8192 && (f.feature = /*feature*/
      e[77]), a[0] & /*showPlaceType*/
      1024 && (f.showPlaceType = /*showPlaceType*/
      e[10]), a[0] & /*selectedItemIndex, listFeatures*/
      24576 && (f.selected = /*selectedItemIndex*/
      e[14] === /*i*/
      e[79]), a[0] & /*iconsBaseUrl*/
      2048 && (f.iconsBaseUrl = /*iconsBaseUrl*/
      e[11]), r.$set(f);
    },
    i(c) {
      l || (W(r.$$.fragment, c), l = !0);
    },
    o(c) {
      F(r.$$.fragment, c), l = !1;
    },
    d(c) {
      c && P(t), ne(r, c);
    }
  };
}
function Nn(n) {
  let e, t, r, l, u, o, c, a, f, d, v, _, C, S, Q, L, B, O, m, N, g, R = !1;
  u = new zn({}), v = new vt({});
  let b = (
    /*abortController*/
    n[18] && ut()
  ), k = (
    /*enableReverse*/
    n[5] === !0 && at(n)
  );
  const h = (
    /*#slots*/
    n[55].default
  ), w = Xt(
    h,
    n,
    /*$$scope*/
    n[54],
    null
  ), J = [Zn, Wn, jn, In], T = [];
  function ge(y, z) {
    var V, fe;
    return (
      /*error*/
      y[17] ? 0 : (
        /*focusedDelayed*/
        y[15] ? (
          /*listFeatures*/
          ((V = y[13]) == null ? void 0 : V.length) === 0 ? 2 : (
            /*focusedDelayed*/
            y[15] && /*listFeatures*/
            ((fe = y[13]) != null && fe.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(L = ge(n)) && (B = T[L] = J[L](n)), {
    c() {
      e = H(), t = U("form"), r = U("div"), l = U("button"), ce(u.$$.fragment), o = H(), c = U("input"), a = H(), f = U("div"), d = U("button"), ce(v.$$.fragment), _ = H(), b && b.c(), C = H(), k && k.c(), S = H(), w && w.c(), Q = H(), B && B.c(), s(l, "class", "search-button svelte-1r7dvt7"), s(l, "type", "button"), s(
        c,
        "placeholder",
        /*placeholder*/
        n[8]
      ), s(
        c,
        "aria-label",
        /*placeholder*/
        n[8]
      ), s(c, "class", "svelte-1r7dvt7"), s(d, "type", "button"), s(
        d,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), s(d, "class", "svelte-1r7dvt7"), s(f, "class", "clear-button-container svelte-1r7dvt7"), ie(
        f,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), s(r, "class", "input-group svelte-1r7dvt7"), s(t, "tabindex", "0"), s(t, "class", O = nt(
        /*className*/
        n[2]
      ) + " svelte-1r7dvt7"), ie(
        t,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(y, z) {
      I(y, e, z), I(y, t, z), M(t, r), M(r, l), te(u, l, null), M(r, o), M(r, c), n[57](c), rt(
        c,
        /*searchValue*/
        n[1]
      ), M(r, a), M(r, f), M(f, d), te(v, d, null), M(f, _), b && b.m(f, null), M(r, C), k && k.m(r, null), M(r, S), w && w.m(r, null), M(t, Q), ~L && T[L].m(t, null), m = !0, N || (g = [
        q(
          l,
          "click",
          /*click_handler*/
          n[56]
        ),
        q(
          c,
          "input",
          /*input_1_input_handler*/
          n[58]
        ),
        q(
          c,
          "focus",
          /*focus_handler*/
          n[59]
        ),
        q(
          c,
          "blur",
          /*blur_handler*/
          n[60]
        ),
        q(
          c,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        q(
          c,
          "input",
          /*input_handler*/
          n[61]
        ),
        q(
          d,
          "click",
          /*click_handler_1*/
          n[62]
        ),
        q(t, "submit", tn(
          /*handleOnSubmit*/
          n[20]
        ))
      ], N = !0);
    },
    p(y, z) {
      (!m || z[0] & /*placeholder*/
      256) && s(
        c,
        "placeholder",
        /*placeholder*/
        y[8]
      ), (!m || z[0] & /*placeholder*/
      256) && s(
        c,
        "aria-label",
        /*placeholder*/
        y[8]
      ), z[0] & /*searchValue*/
      2 && c.value !== /*searchValue*/
      y[1] && rt(
        c,
        /*searchValue*/
        y[1]
      ), (!m || z[0] & /*clearButtonTitle*/
      8) && s(
        d,
        "title",
        /*clearButtonTitle*/
        y[3]
      ), /*abortController*/
      y[18] ? b ? z[0] & /*abortController*/
      262144 && W(b, 1) : (b = ut(), b.c(), W(b, 1), b.m(f, null)) : b && (ze(), F(b, 1, 1, () => {
        b = null;
      }), Ae()), (!m || z[0] & /*searchValue*/
      2) && ie(
        f,
        "displayable",
        /*searchValue*/
        y[1] !== ""
      ), /*enableReverse*/
      y[5] === !0 ? k ? (k.p(y, z), z[0] & /*enableReverse*/
      32 && W(k, 1)) : (k = at(y), k.c(), W(k, 1), k.m(r, S)) : k && (ze(), F(k, 1, 1, () => {
        k = null;
      }), Ae()), w && w.p && (!m || z[1] & /*$$scope*/
      8388608) && xt(
        w,
        h,
        y,
        /*$$scope*/
        y[54],
        m ? Yt(
          h,
          /*$$scope*/
          y[54],
          z,
          null
        ) : $t(
          /*$$scope*/
          y[54]
        ),
        null
      );
      let V = L;
      L = ge(y), L === V ? ~L && T[L].p(y, z) : (B && (ze(), F(T[V], 1, 1, () => {
        T[V] = null;
      }), Ae()), ~L ? (B = T[L], B ? B.p(y, z) : (B = T[L] = J[L](y), B.c()), W(B, 1), B.m(t, null)) : B = null), (!m || z[0] & /*className*/
      4 && O !== (O = nt(
        /*className*/
        y[2]
      ) + " svelte-1r7dvt7")) && s(t, "class", O), (!m || z[0] & /*className, collapsed, searchValue*/
      22) && ie(
        t,
        "can-collapse",
        /*collapsed*/
        y[4] && /*searchValue*/
        y[1] === ""
      );
    },
    i(y) {
      m || (W(R), W(u.$$.fragment, y), W(v.$$.fragment, y), W(b), W(k), W(w, y), W(B), m = !0);
    },
    o(y) {
      F(R), F(u.$$.fragment, y), F(v.$$.fragment, y), F(b), F(k), F(w, y), F(B), m = !1;
    },
    d(y) {
      y && (P(e), P(t)), ne(u), n[57](null), ne(v), b && b.d(), k && k.d(), w && w.d(y), ~L && T[L].d(), N = !1, re(g);
    }
  };
}
function On(n, e, t) {
  let r, { $$slots: l = {}, $$scope: u } = e, { class: o = void 0 } = e, { apiKey: c } = e, { bbox: a = void 0 } = e, { clearButtonTitle: f = "clear" } = e, { clearOnBlur: d = !1 } = e, { collapsed: v = !1 } = e, { country: _ = void 0 } = e, { debounceSearch: C = 200 } = e, { enableReverse: S = !1 } = e, { errorMessage: Q = "Something went wrong…" } = e, { filter: L = () => !0 } = e, { flyTo: B = !0 } = e, { fuzzyMatch: O = !0 } = e, { language: m = void 0 } = e, { limit: N = void 0 } = e, { mapController: g = void 0 } = e, { minLength: R = 2 } = e, { noResultsMessage: b = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: h = [{ type: "server-geolocation" }] } = e, { reverseActive: w = S === "always" } = e, { reverseButtonTitle: J = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { showFullGeometry: ge = !0 } = e, { showPlaceType: y = "ifNeeded" } = e, { showResultsWhileTyping: z = !0 } = e, { types: V = void 0 } = e, { zoom: fe = 16 } = e, { maxZoom: ke = 18 } = e, { apiUrl: Pe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ie = {} } = e, { iconsBaseUrl: He = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.0.1/icons/" } = e, { adjustUrlQuery: je = (i) => {
  } } = e;
  function pt() {
    Y.focus();
  }
  function Mt() {
    Y.blur();
  }
  function Je(i, Z = !0) {
    t(1, T = i), Z ? (t(14, j = -1), Ye()) : (Ne(), setTimeout(() => {
      Y.focus(), Y.select();
    }));
  }
  function Tt() {
    t(13, E = void 0), t(51, p = void 0), t(14, j = -1);
  }
  function Lt() {
    t(50, G = []), t(51, p = void 0);
  }
  let _e = !1, E, G, p, Xe = "", Y, j = -1, x, Be = [], ue, ye, Re, We;
  const Bt = /* @__PURE__ */ new Set(), le = sn();
  ln(() => {
    g && (g.setEventHandler(void 0), g.indicateReverse(!1), g.setSelectedMarker(-1), g.setMarkers(void 0, void 0));
  });
  function Ye(i) {
    if (ye && (clearTimeout(ye), ye = void 0), j > -1 && E)
      t(51, p = E[j]), t(1, T = p.place_name.replace(/,.*/, "")), t(17, x = void 0), t(50, G = void 0), t(14, j = -1);
    else if (T) {
      const Z = i || !xe();
      Ze(T, { exact: !0 }).then(() => {
        t(50, G = E), t(51, p = void 0), Z && Rt();
      }).catch(($) => t(17, x = $));
    }
  }
  function xe() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(T);
  }
  async function Ze(i, { byId: Z = !1, exact: $ = !1 } = {}) {
    t(17, x = void 0), ue == null || ue.abort();
    const ee = new AbortController();
    t(18, ue = ee);
    try {
      const D = xe(), X = new URLSearchParams();
      if (m !== void 0 && X.set("language", Array.isArray(m) ? m.join(",") : m ?? ""), V && X.set("types", V.join(",")), a && X.set("bbox", a.map((Ce) => Ce.toFixed(6)).join(",")), _ && X.set("country", Array.isArray(_) ? _.join(",") : _), !Z && !D) {
        const Ce = await Pn(g, h, ee);
        Ce && X.set("proximity", Ce), ($ || !z) && X.set("autocomplete", "false"), X.set("fuzzyMatch", String(O));
      }
      N !== void 0 && (!D || (V == null ? void 0 : V.length) === 1) && X.set("limit", String(N)), X.set("key", c), je(X);
      const Ee = Pe + "/" + encodeURIComponent(i) + ".json?" + X.toString();
      if (Ee === Xe) {
        Z ? (t(13, E = void 0), t(51, p = Be[0])) : t(13, E = Be);
        return;
      }
      Xe = Ee;
      const $e = await fetch(Ee, { signal: ee.signal, ...Ie });
      if (!$e.ok)
        throw new Error();
      const Fe = await $e.json();
      le("response", { url: Ee, featureCollection: Fe }), Z ? (t(13, E = void 0), t(51, p = Fe.features[0]), Be = [p]) : (t(13, E = Fe.features.filter(L)), Be = E, D && Y.focus());
    } catch (D) {
      if (D && typeof D == "object" && "name" in D && D.name === "AbortError")
        return;
      throw D;
    } finally {
      ee === ue && t(18, ue = void 0);
    }
  }
  function Rt() {
    var $;
    if (!(G != null && G.length) || !B)
      return;
    const i = [180, 90, -180, -90], Z = !G.some((ee) => !ee.matching_text);
    for (const ee of G)
      if (Z || !ee.matching_text)
        for (const D of [0, 1, 2, 3])
          i[D] = Math[D < 2 ? "min" : "max"](i[D], (($ = ee.bbox) == null ? void 0 : $[D]) ?? ee.center[D % 2]);
    g && G.length > 0 && (p && i[0] === i[2] && i[1] === i[3] ? g.flyTo(p.center, fe) : g.fitBounds(ct(i), 50, ke));
  }
  function Et(i) {
    t(0, w = S === "always"), Je(An(i[0], [-180, 180], !0).toFixed(6) + "," + i[1].toFixed(6));
  }
  function Ct(i) {
    if (!E)
      return;
    let Z = i.key === "ArrowDown" ? 1 : i.key === "ArrowUp" ? -1 : 0;
    Z ? (j === -1 && Z === -1 && t(14, j = E.length), t(14, j += Z), j >= E.length && t(14, j = -1), i.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(i.key) && t(14, j = -1);
  }
  function Ne(i = !0) {
    if (t(17, x = void 0), z) {
      if (ye && clearTimeout(ye), T.length < R)
        return;
      const Z = T;
      ye = window.setTimeout(
        () => {
          Ze(Z).catch(($) => t(17, x = $));
        },
        i ? C : 0
      );
    } else
      t(13, E = void 0), t(17, x = void 0);
  }
  function Oe(i) {
    t(51, p = i), t(1, T = i.place_name), t(14, j = -1);
  }
  const St = () => Y.focus();
  function Ut(i) {
    qe[i ? "unshift" : "push"](() => {
      Y = i, t(16, Y);
    });
  }
  function zt() {
    T = this.value, t(1, T), t(12, _e), t(26, d);
  }
  const At = () => t(12, _e = !0), Pt = () => t(12, _e = !1), It = () => Ne(), jt = () => {
    t(1, T = ""), Y.focus();
  }, Wt = () => t(0, w = !w), Zt = () => t(17, x = void 0), Nt = (i) => t(14, j = i), Ot = (i) => Oe(i), Ft = () => t(14, j = -1), Qt = () => {
  };
  return n.$$set = (i) => {
    "class" in i && t(2, o = i.class), "apiKey" in i && t(24, c = i.apiKey), "bbox" in i && t(25, a = i.bbox), "clearButtonTitle" in i && t(3, f = i.clearButtonTitle), "clearOnBlur" in i && t(26, d = i.clearOnBlur), "collapsed" in i && t(4, v = i.collapsed), "country" in i && t(27, _ = i.country), "debounceSearch" in i && t(28, C = i.debounceSearch), "enableReverse" in i && t(5, S = i.enableReverse), "errorMessage" in i && t(6, Q = i.errorMessage), "filter" in i && t(29, L = i.filter), "flyTo" in i && t(30, B = i.flyTo), "fuzzyMatch" in i && t(31, O = i.fuzzyMatch), "language" in i && t(32, m = i.language), "limit" in i && t(33, N = i.limit), "mapController" in i && t(34, g = i.mapController), "minLength" in i && t(35, R = i.minLength), "noResultsMessage" in i && t(7, b = i.noResultsMessage), "placeholder" in i && t(8, k = i.placeholder), "proximity" in i && t(36, h = i.proximity), "reverseActive" in i && t(0, w = i.reverseActive), "reverseButtonTitle" in i && t(9, J = i.reverseButtonTitle), "searchValue" in i && t(1, T = i.searchValue), "showFullGeometry" in i && t(37, ge = i.showFullGeometry), "showPlaceType" in i && t(10, y = i.showPlaceType), "showResultsWhileTyping" in i && t(38, z = i.showResultsWhileTyping), "types" in i && t(39, V = i.types), "zoom" in i && t(40, fe = i.zoom), "maxZoom" in i && t(41, ke = i.maxZoom), "apiUrl" in i && t(42, Pe = i.apiUrl), "fetchParameters" in i && t(43, Ie = i.fetchParameters), "iconsBaseUrl" in i && t(11, He = i.iconsBaseUrl), "adjustUrlQuery" in i && t(44, je = i.adjustUrlQuery), "$$scope" in i && t(54, u = i.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*focused, clearOnBlur*/
    67112960 && setTimeout(() => {
      t(15, Re = _e), d && !_e && t(1, T = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    16 && T.length < R && (t(51, p = void 0), t(13, E = void 0), t(17, x = void 0), t(50, G = E)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    1048640 && ge && p && !p.address && p.geometry.type === "Point" && Ze(p.id, { byId: !0 }).catch((i) => t(17, x = i)), n.$$.dirty[0] & /*flyTo*/
    1073741824 | n.$$.dirty[1] & /*mapController, picked, prevIdToFly, maxZoom, zoom*/
    3147272 && (g && p && p.id !== We && B && (!p.bbox || p.bbox[0] === p.bbox[2] && p.bbox[1] === p.bbox[3] ? g.flyTo(p.center, p.id.startsWith("poi.") || p.id.startsWith("address.") ? ke : fe) : g.fitBounds(ct(p.bbox), 50, ke), t(13, E = void 0), t(50, G = void 0), t(14, j = -1)), t(52, We = p == null ? void 0 : p.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    524288 && G !== E && t(50, G = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    1572872 && g && g.setMarkers(G, p), n.$$.dirty[0] & /*searchValue*/
    2 && t(14, j = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController*/
    8 && g && g.setEventHandler((i) => {
      switch (i.type) {
        case "mapClick":
          w && Et(i.coordinates);
          break;
        case "markerClick":
          {
            const Z = E == null ? void 0 : E.find(($) => $.id === i.id);
            Z && Oe(Z);
          }
          break;
        case "markerMouseEnter":
          t(14, j = Re ? (E == null ? void 0 : E.findIndex((Z) => Z.id === i.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          t(14, j = -1);
          break;
      }
    }), n.$$.dirty[0] & /*selectedItemIndex*/
    16384 | n.$$.dirty[1] & /*mapController*/
    8 && (g == null || g.setSelectedMarker(j)), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && t(53, r = E == null ? void 0 : E[j]), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    8) {
      const i = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(T);
      g == null || g.setReverseMarker(i ? [Number(i[1]), Number(i[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    4194304 && le("select", r), n.$$.dirty[1] & /*picked*/
    1048576 && le("pick", p), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && le("optionsVisibilityChange", Re && !!E), n.$$.dirty[0] & /*listFeatures*/
    8192 && le("featuresListed", E), n.$$.dirty[1] & /*markedFeatures*/
    524288 && le("featuresMarked", G), n.$$.dirty[0] & /*reverseActive*/
    1 && le("reverseToggle", w), n.$$.dirty[0] & /*searchValue*/
    2 && le("queryChange", T), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    8 && g && g.indicateReverse(w);
  }, [
    w,
    T,
    o,
    f,
    v,
    S,
    Q,
    b,
    k,
    J,
    y,
    He,
    _e,
    E,
    j,
    Re,
    Y,
    x,
    ue,
    Bt,
    Ye,
    Ct,
    Ne,
    Oe,
    c,
    a,
    d,
    _,
    C,
    L,
    B,
    O,
    m,
    N,
    g,
    R,
    h,
    ge,
    z,
    V,
    fe,
    ke,
    Pe,
    Ie,
    je,
    pt,
    Mt,
    Je,
    Tt,
    Lt,
    G,
    p,
    We,
    r,
    u,
    l,
    St,
    Ut,
    zt,
    At,
    Pt,
    It,
    jt,
    Wt,
    Zt,
    Nt,
    Ot,
    Ft,
    Qt
  ];
}
class Fn extends me {
  constructor(e) {
    super(), he(
      this,
      e,
      On,
      Nn,
      de,
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
        zoom: 40,
        maxZoom: 41,
        apiUrl: 42,
        fetchParameters: 43,
        iconsBaseUrl: 11,
        adjustUrlQuery: 44,
        focus: 45,
        blur: 46,
        setQuery: 47,
        clearList: 48,
        clearMap: 49
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[45];
  }
  get blur() {
    return this.$$.ctx[46];
  }
  get setQuery() {
    return this.$$.ctx[47];
  }
  get clearList() {
    return this.$$.ctx[48];
  }
  get clearMap() {
    return this.$$.ctx[49];
  }
}
const ht = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], Qn = [
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
  "zoom",
  "mapController"
];
function mt(n) {
  return "on" + n[0].toUpperCase() + n.slice(1);
}
const qn = qt(function(e, t) {
  const r = et(), l = et(), u = { ...e };
  for (const o of ht)
    delete u[mt(o)];
  Ge(() => {
    if (!r.current)
      throw new Error();
    const o = new Fn({
      target: r.current,
      props: u
    });
    return l.current = o, () => o.$destroy();
  }, []);
  for (const o of Qn)
    Ge(() => {
      l.current && e[o] !== void 0 && l.current.$set({ [o]: e[o] });
    }, [e[o]]);
  for (const o of ht) {
    const c = e[mt(o)];
    Ge(
      () => {
        var a;
        return c && ((a = l.current) == null ? void 0 : a.$on(o, (f) => {
          c(f.detail);
        }));
      },
      [c]
    );
  }
  return Vt(t, () => ({
    setQuery: (o, c = !0) => {
      var a;
      return (a = l.current) == null ? void 0 : a.setQuery(o, c);
    },
    clearMap: () => {
      var o;
      return (o = l.current) == null ? void 0 : o.clearMap();
    },
    clearList: () => {
      var o;
      return (o = l.current) == null ? void 0 : o.clearList();
    },
    focus: () => {
      var o;
      return (o = l.current) == null ? void 0 : o.focus();
    },
    blur: () => {
      var o;
      return (o = l.current) == null ? void 0 : o.blur();
    }
  })), Kt("div", { ref: r });
});
export {
  qn as GeocodingControl
};
//# sourceMappingURL=react.js.map
