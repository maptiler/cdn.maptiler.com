var ii = Object.defineProperty;
var ri = (i, e, t) => e in i ? ii(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Xe = (i, e, t) => (ri(i, typeof e != "symbol" ? e + "" : e, t), t);
import { forwardRef as ni, useRef as at, useEffect as Ye, useImperativeHandle as oi, createElement as si } from "react";
function D() {
}
function ai(i, e) {
  for (const t in e)
    i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Tt(i) {
  return i();
}
function lt() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(i) {
  i.forEach(Tt);
}
function Mt(i) {
  return typeof i == "function";
}
function fe(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let ze;
function Q(i, e) {
  return i === e ? !0 : (ze || (ze = document.createElement("a")), ze.href = e, i === ze.href);
}
function li(i) {
  return Object.keys(i).length === 0;
}
function ci(i, e, t, r) {
  if (i) {
    const n = Wt(i, e, t, r);
    return i[0](n);
  }
}
function Wt(i, e, t, r) {
  return i[1] && r ? ai(t.ctx.slice(), i[1](r(e))) : t.ctx;
}
function ui(i, e, t, r) {
  if (i[2] && r) {
    const n = i[2](r(t));
    if (e.dirty === void 0)
      return n;
    if (typeof n == "object") {
      const l = [], o = Math.max(e.dirty.length, n.length);
      for (let a = 0; a < o; a += 1)
        l[a] = e.dirty[a] | n[a];
      return l;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function di(i, e, t, r, n, l) {
  if (n) {
    const o = Wt(e, t, r, l);
    i.p(o, n);
  }
}
function fi(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function ct(i) {
  return i ?? "";
}
function C(i, e) {
  i.appendChild(e);
}
function A(i, e, t) {
  i.insertBefore(e, t || null);
}
function U(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function O(i) {
  return document.createElement(i);
}
function te(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ae(i) {
  return document.createTextNode(i);
}
function V() {
  return ae(" ");
}
function mi() {
  return ae("");
}
function q(i, e, t, r) {
  return i.addEventListener(e, t, r), () => i.removeEventListener(e, t, r);
}
function gi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function c(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function hi(i) {
  return Array.from(i.childNodes);
}
function Ne(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ut(i, e) {
  i.value = e ?? "";
}
function Ue(i, e, t, r) {
  t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, r ? "important" : "");
}
function se(i, e, t) {
  i.classList.toggle(e, !!t);
}
function bi(i, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: r });
}
let Ce;
function Se(i) {
  Ce = i;
}
function Rt() {
  if (!Ce)
    throw new Error("Function called outside component initialization");
  return Ce;
}
function vi(i) {
  Rt().$$.on_destroy.push(i);
}
function _i() {
  const i = Rt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const n = i.$$.callbacks[e];
    if (n) {
      const l = bi(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return n.slice().forEach((o) => {
        o.call(i, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function dt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const we = [], $e = [];
let Ee = [];
const ft = [], Li = /* @__PURE__ */ Promise.resolve();
let et = !1;
function yi() {
  et || (et = !0, Li.then(It));
}
function tt(i) {
  Ee.push(i);
}
const xe = /* @__PURE__ */ new Set();
let ye = 0;
function It() {
  if (ye !== 0)
    return;
  const i = Ce;
  do {
    try {
      for (; ye < we.length; ) {
        const e = we[ye];
        ye++, Se(e), wi(e.$$);
      }
    } catch (e) {
      throw we.length = 0, ye = 0, e;
    }
    for (Se(null), we.length = 0, ye = 0; $e.length; )
      $e.pop()();
    for (let e = 0; e < Ee.length; e += 1) {
      const t = Ee[e];
      xe.has(t) || (xe.add(t), t());
    }
    Ee.length = 0;
  } while (we.length);
  for (; ft.length; )
    ft.pop()();
  et = !1, xe.clear(), Se(i);
}
function wi(i) {
  if (i.fragment !== null) {
    i.update(), ne(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(tt);
  }
}
function Ei(i) {
  const e = [], t = [];
  Ee.forEach((r) => i.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), Ee = e;
}
const De = /* @__PURE__ */ new Set();
let de;
function Ae() {
  de = {
    r: 0,
    c: [],
    p: de
    // parent group
  };
}
function Fe() {
  de.r || ne(de.c), de = de.p;
}
function H(i, e) {
  i && i.i && (De.delete(i), i.i(e));
}
function G(i, e, t, r) {
  if (i && i.o) {
    if (De.has(i))
      return;
    De.add(i), de.c.push(() => {
      De.delete(i), r && (t && i.d(1), r());
    }), i.o(e);
  } else
    r && r();
}
function mt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function ki(i, e) {
  G(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function pi(i, e, t, r, n, l, o, a, d, u, f, b) {
  let h = i.length, p = l.length, W = h;
  const F = {};
  for (; W--; )
    F[i[W].key] = W;
  const y = [], w = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), R = [];
  for (W = p; W--; ) {
    const v = b(n, l, W), S = t(v);
    let m = o.get(S);
    m ? r && R.push(() => m.p(v, e)) : (m = u(S, v), m.c()), w.set(S, y[W] = m), S in F && P.set(S, Math.abs(W - F[S]));
  }
  const E = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  function I(v) {
    H(v, 1), v.m(a, f), o.set(v.key, v), f = v.first, p--;
  }
  for (; h && p; ) {
    const v = y[p - 1], S = i[h - 1], m = v.key, L = S.key;
    v === S ? (f = v.first, h--, p--) : w.has(L) ? !o.has(m) || E.has(m) ? I(v) : g.has(L) ? h-- : P.get(m) > P.get(L) ? (g.add(m), I(v)) : (E.add(L), h--) : (d(S, o), h--);
  }
  for (; h--; ) {
    const v = i[h];
    w.has(v.key) || d(v, o);
  }
  for (; p; )
    I(y[p - 1]);
  return ne(R), y;
}
function le(i) {
  i && i.c();
}
function ie(i, e, t) {
  const { fragment: r, after_update: n } = i.$$;
  r && r.m(e, t), tt(() => {
    const l = i.$$.on_mount.map(Tt).filter(Mt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : ne(l), i.$$.on_mount = [];
  }), n.forEach(tt);
}
function re(i, e) {
  const t = i.$$;
  t.fragment !== null && (Ei(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Si(i, e) {
  i.$$.dirty[0] === -1 && (we.push(i), yi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(i, e, t, r, n, l, o = null, a = [-1]) {
  const d = Ce;
  Se(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: D,
    not_equal: n,
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
    dirty: a,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  o && o(u.root);
  let f = !1;
  if (u.ctx = t ? t(i, e.props || {}, (b, h, ...p) => {
    const W = p.length ? p[0] : h;
    return u.ctx && n(u.ctx[b], u.ctx[b] = W) && (!u.skip_bound && u.bound[b] && u.bound[b](W), f && Si(i, b)), h;
  }) : [], u.update(), f = !0, ne(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = hi(e.target);
      u.fragment && u.fragment.l(b), b.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && H(i.$$.fragment), ie(i, e.target, e.anchor), It();
  }
  Se(d);
}
class ge {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Xe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Xe(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    re(this, 1), this.$destroy = D;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Mt(t))
      return D;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !li(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ni = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ni);
function Ci(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), c(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), c(e, "viewBox", "0 0 14 14"), c(e, "width", "13"), c(e, "height", "13"), c(e, "class", "svelte-en2qvf");
    },
    m(r, n) {
      A(r, e, n), C(e, t);
    },
    p: D,
    i: D,
    o: D,
    d(r) {
      r && U(e);
    }
  };
}
class Ot extends ge {
  constructor(e) {
    super(), me(this, e, null, Ci, fe, {});
  }
}
function Ti(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), c(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), c(e, "viewBox", "0 0 30 30"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "svelte-d2loi5");
    },
    m(r, n) {
      A(r, e, n), C(e, t);
    },
    p: D,
    i: D,
    o: D,
    d(r) {
      r && U(e);
    }
  };
}
class zt extends ge {
  constructor(e) {
    super(), me(this, e, null, Ti, fe, {});
  }
}
function Mi(i) {
  let e, t;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && c(e, "src", t), n & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Wi(i) {
  let e, t;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "reverse.svg") && c(e, "src", t), n & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Ri(i) {
  let e, t;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && c(e, "src", t), n & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Ii(i) {
  let e, t;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && c(e, "src", t), n & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Oi(i) {
  let e, t;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && c(e, "src", t), n & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function zi(i) {
  let e, t;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && c(e, "src", t), n & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Ui(i) {
  let e, t;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && c(e, "src", t), n & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Bi(i) {
  let e, t, r, n;
  return {
    c() {
      e = O("img"), Q(e.src, t = /*imageUrl*/
      i[5]) || c(e, "src", t), c(
        e,
        "alt",
        /*category*/
        i[4]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(l, o) {
      A(l, e, o), r || (n = q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), r = !0);
    },
    p(l, o) {
      o & /*imageUrl*/
      32 && !Q(e.src, t = /*imageUrl*/
      l[5]) && c(e, "src", t), o & /*category*/
      16 && c(
        e,
        "alt",
        /*category*/
        l[4]
      );
    },
    d(l) {
      l && U(e), r = !1, n();
    }
  };
}
function gt(i) {
  let e, t;
  return {
    c() {
      e = O("span"), t = ae(
        /*placeType*/
        i[6]
      ), c(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, n) {
      A(r, e, n), C(e, t);
    },
    p(r, n) {
      n & /*placeType*/
      64 && Ne(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Di(i) {
  var v, S;
  let e, t, r, n, l, o, a, d, u = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), f, b, h = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] && !/*feature*/
    i[0].address && /*feature*/
    ((v = i[0].properties) == null ? void 0 : v.kind) !== "road" && /*feature*/
    ((S = i[0].properties) == null ? void 0 : S.kind) !== "road_relation" && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), p, W, F = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), y, w, P;
  function R(m, L) {
    var X, M;
    return L & /*feature*/
    1 && (t = null), L & /*feature*/
    1 && (r = null), L & /*feature*/
    1 && (n = null), /*imageUrl*/
    m[5] ? Bi : (
      /*feature*/
      m[0].address ? Ui : (
        /*feature*/
        ((X = m[0].properties) == null ? void 0 : X.kind) === "road" || /*feature*/
        ((M = m[0].properties) == null ? void 0 : M.kind) === "road_relation" ? zi : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("address.")), t ? Oi : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? Ii : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("poi.")), n ? Ri : (
          /*isReverse*/
          m[7] ? Wi : Mi
        ))))
      )
    );
  }
  let E = R(i, -1), g = E(i), I = h && gt(i);
  return {
    c() {
      e = O("li"), g.c(), l = V(), o = O("span"), a = O("span"), d = O("span"), f = ae(u), b = V(), I && I.c(), p = V(), W = O("span"), y = ae(F), c(d, "class", "primary svelte-ltkwvy"), c(a, "class", "svelte-ltkwvy"), c(W, "class", "line2 svelte-ltkwvy"), c(o, "class", "texts svelte-ltkwvy"), c(e, "tabindex", "0"), c(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), c(e, "class", "svelte-ltkwvy"), se(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(m, L) {
      A(m, e, L), g.m(e, null), C(e, l), C(e, o), C(o, a), C(a, d), C(d, f), C(a, b), I && I.m(a, null), C(o, p), C(o, W), C(W, y), w || (P = [
        q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        q(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], w = !0);
    },
    p(m, [L]) {
      var X, M;
      E === (E = R(m, L)) && g ? g.p(m, L) : (g.d(1), g = E(m), g && (g.c(), g.m(e, l))), L & /*feature*/
      1 && u !== (u = /*isReverse*/
      (m[7] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Ne(f, u), L & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] && !/*feature*/
      m[0].address && /*feature*/
      ((X = m[0].properties) == null ? void 0 : X.kind) !== "road" && /*feature*/
      ((M = m[0].properties) == null ? void 0 : M.kind) !== "road_relation" && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[7]), h ? I ? I.p(m, L) : (I = gt(m), I.c(), I.m(a, null)) : I && (I.d(1), I = null), L & /*feature*/
      1 && F !== (F = /*isReverse*/
      (m[7] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ne(y, F), L & /*selected*/
      2 && c(
        e,
        "data-selected",
        /*selected*/
        m[1]
      ), L & /*selected*/
      2 && se(
        e,
        "selected",
        /*selected*/
        m[1]
      );
    },
    i: D,
    o: D,
    d(m) {
      m && U(e), g.d(), I && I.d(), w = !1, ne(P);
    }
  };
}
function Ai(i, e, t) {
  var R;
  let r, n, { feature: l } = e, { selected: o = !1 } = e, { showPlaceType: a } = e, { missingIconsCache: d } = e, { iconsBaseUrl: u } = e;
  const f = (R = l.properties) == null ? void 0 : R.categories;
  let b, h, p = 0, W = l.place_type[0] === "reverse";
  function F(E) {
    h && d.add(h), t(10, p++, p);
  }
  function y(E) {
    dt.call(this, i, E);
  }
  function w(E) {
    dt.call(this, i, E);
  }
  const P = (E) => F(E.currentTarget);
  return i.$$set = (E) => {
    "feature" in E && t(0, l = E.feature), "selected" in E && t(1, o = E.selected), "showPlaceType" in E && t(2, a = E.showPlaceType), "missingIconsCache" in E && t(9, d = E.missingIconsCache), "iconsBaseUrl" in E && t(3, u = E.iconsBaseUrl);
  }, i.$$.update = () => {
    var E, g, I, v;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, r--, r), t(4, b = f == null ? void 0 : f[r]), t(5, h = b ? u + b.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!h || d.has(h)));
    i.$$.dirty & /*feature*/
    1 && t(6, n = l.id.startsWith("poi.") ? (g = (E = l.properties) == null ? void 0 : E.categories) == null ? void 0 : g.join(", ") : ((v = (I = l.properties) == null ? void 0 : I.place_type_name) == null ? void 0 : v[0]) ?? l.place_type[0]);
  }, t(11, r = (f == null ? void 0 : f.length) ?? 0), [
    l,
    o,
    a,
    u,
    b,
    h,
    n,
    W,
    F,
    d,
    p,
    r,
    y,
    w,
    P
  ];
}
class Fi extends ge {
  constructor(e) {
    super(), me(this, e, Ai, Di, fe, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Pi(i) {
  let e;
  return {
    c() {
      e = O("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', c(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      A(t, e, r);
    },
    p: D,
    i: D,
    o: D,
    d(t) {
      t && U(e);
    }
  };
}
class Hi extends ge {
  constructor(e) {
    super(), me(this, e, null, Pi, fe, {});
  }
}
function ji(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), c(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), c(e, "viewBox", "0 0 60.006 21.412"), c(e, "width", "14"), c(e, "height", "20"), c(e, "class", "svelte-en2qvf");
    },
    m(r, n) {
      A(r, e, n), C(e, t);
    },
    p: D,
    i: D,
    o: D,
    d(r) {
      r && U(e);
    }
  };
}
class Zi extends ge {
  constructor(e) {
    super(), me(this, e, null, ji, fe, {});
  }
}
function Gi(i) {
  let e, t, r;
  return {
    c() {
      e = te("svg"), t = te("circle"), r = te("path"), c(t, "cx", "4.789"), c(t, "cy", "4.787"), c(t, "r", "3.85"), Ue(t, "stroke-width", "1.875"), Ue(t, "fill", "none"), c(r, "d", "M12.063 12.063 7.635 7.635"), Ue(r, "stroke-width", "1.875"), Ue(r, "stroke-linecap", "round"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "width", "13"), c(e, "height", "13"), c(e, "viewBox", "0 0 13 13"), c(e, "class", "svelte-1bpbt60");
    },
    m(n, l) {
      A(n, e, l), C(e, t), C(e, r);
    },
    p: D,
    i: D,
    o: D,
    d(n) {
      n && U(e);
    }
  };
}
class Qi extends ge {
  constructor(e) {
    super(), me(this, e, null, Gi, fe, {});
  }
}
function qi(i, e, t) {
  const r = e[1], n = e[0], l = r - n;
  return i === r && t ? i : ((i - n) % l + l) % l + n;
}
function ht(i) {
  const e = [...i];
  return e[2] < e[0] && (e[2] += 360), e;
}
let pe;
async function Ki(i, e, t) {
  const r = i == null ? void 0 : i.getCenterAndZoom();
  for (const n of e ?? [])
    if (!(r && (n.minZoom != null && n.minZoom > r[0] || n.maxZoom != null && n.maxZoom < r[0]))) {
      if (n.type === "fixed")
        return n.coordinates.join(",");
      e:
        if (n.type === "client-geolocation") {
          if (pe && n.cachedLocationExpiry && pe.time + n.cachedLocationExpiry > Date.now()) {
            if (!pe.coords)
              break e;
            return pe.coords;
          }
          let l;
          try {
            return l = await new Promise((o, a) => {
              t.signal.addEventListener("abort", () => {
                a(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (d) => {
                  o(
                    [d.coords.longitude, d.coords.latitude].map((u) => u.toFixed(6)).join(",")
                  );
                },
                (d) => {
                  a(d);
                },
                n
              );
            }), l;
          } catch {
          } finally {
            n.cachedLocationExpiry && (pe = {
              time: Date.now(),
              coords: l
            });
          }
          if (t.signal.aborted)
            return;
        }
      if (n.type === "server-geolocation")
        return "ip";
      if (r && n.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
const bt = /(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?/i, vt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?/i, _t = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?/i, Lt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?/i;
function Vi(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    if (i == "DD")
      return this.decimalCoordinates;
    const e = this.decimalCoordinates.split(",").map((o) => Number(o.trim()));
    let t = yt(e[0], i), r = yt(e[1], i);
    t.endsWith('.0"') && r.endsWith('.0"') && (t = t.replace(/\.0"$/, '"'), r = r.replace(/\.0"$/, '"'));
    const n = e[0] >= 0 ? " N" : " S", l = e[1] >= 0 ? " E" : " W";
    return `${t + n}, ${r + l}`;
  } else
    throw new Error("no decimal coordinates to convert");
}
function yt(i, e) {
  const t = Math.abs(i), r = Math.floor(t), n = (t - r) * 60;
  if (e == "DM") {
    let a = Ji(n, 3).toFixed(3).padStart(6, "0");
    return `${r}° ${a}'`;
  }
  let l = Math.floor(n), o = ((n - l) * 60).toFixed(1).padStart(4, "0");
  return l = l.toString().padStart(2, "0"), `${r}° ${l}' ${o}"`;
}
function Ji(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function it(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, r = null, n = "", l = "", o = [], a = !1;
  if (bt.test(i))
    if (o = bt.exec(i), a = Be(o), a) {
      if (t = o[2], r = o[6], t.includes(",") && (t = t.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      o[1] ? (n = o[1], l = o[5]) : o[4] && (n = o[4], l = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (vt.test(i))
    if (o = vt.exec(i), a = Be(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60), o[6] && (t += o[6].replace(",", ".") / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[9])), o[11] && (r += o[11] / 60), o[13] && (r += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (r = -1 * r), o[1] ? (n = o[1], l = o[8]) : o[7] && (n = o[7], l = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (_t.test(i))
    if (o = _t.exec(i), a = Be(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60), o[6] && (t += o[6] / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[10])), o[12] && (r += o[12] / 60), o[14] && (r += o[14] / 3600), parseInt(o[10]) < 0 && (r = -1 * r), o[1] ? (n = o[1], l = o[9]) : o[8] && (n = o[8], l = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Lt.test(i))
    if (o = Lt.exec(i), a = Be(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60), o[6] && (t += o[6] / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[10])), o[12] && (r += o[12] / 60), o[14] && (r += o[14] / 3600), parseInt(o[10]) < 0 && (r = -1 * r), o[1] ? (n = o[1], l = o[9]) : o[8] && (n = o[8], l = o[16]);
    else
      throw new Error("invalid coordinates format");
  if (a) {
    if (Math.abs(r) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if ((n || l) && (!n || !l))
      throw new Error("invalid coordinates format");
    if (n && n == l)
      throw new Error("invalid coordinates format");
    let d = /S|SOUTH/i;
    d.test(n) && t > 0 && (t = -1 * t), d = /W|WEST/i, d.test(l) && r > 0 && (r = -1 * r);
    const u = o[0].trim();
    let f, b;
    const h = /[,/;\u0020]/g, p = u.match(h);
    if (p == null) {
      const y = Math.floor(i.length / 2);
      f = u.substring(0, y).trim(), b = u.substring(y).trim();
    } else {
      let y;
      p.length % 2 == 1 ? y = Math.floor(p.length / 2) : y = p.length / 2 - 1;
      let w = 0;
      if (y == 0)
        w = u.indexOf(p[0]), f = u.substring(0, w).trim(), b = u.substring(w + 1).trim();
      else {
        let P = 0, R = 0;
        for (; P <= y; )
          w = u.indexOf(p[P], R), R = w + 1, P++;
        f = u.substring(0, w).trim(), b = u.substring(w + 1).trim();
      }
    }
    const W = f.split(".");
    if (W.length == 2 && W[1] == 0 && W[1].length != 2)
      throw new Error("invalid coordinates format");
    const F = b.split(".");
    if (F.length == 2 && F[1] == 0 && F[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(f) || /^\d+$/.test(b))
      throw new Error("degree only coordinate/s provided");
    return isNaN(t) && t.includes(",") && (t = t.replace(",", ".")), t = Number(Number(t).toFixed(e)), isNaN(r) && r.includes(",") && (r = r.replace(",", ".")), r = Number(Number(r).toFixed(e)), Object.freeze({
      verbatimCoordinates: u,
      verbatimLatitude: f,
      verbatimLongitude: b,
      decimalLatitude: t,
      decimalLongitude: r,
      decimalCoordinates: `${t},${r}`,
      closeEnough: Xi,
      toCoordinateFormat: Vi
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Be(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, r = /[eastsouthnorthwest]+/i, n = e.length / 2;
  for (let l = 0; l < n; l++) {
    const o = e[l], a = e[l + n], d = t.test(o) && t.test(a), u = r.test(o) && r.test(a), f = o == a;
    if (!(o == null && a == null)) {
      if (o == null || a == null)
        return !1;
      if (d || u || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function wt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Xi(i) {
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return wt(this.decimalLatitude, Number(e[0])) && wt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Yi = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
it.to = Yi;
const xi = [
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
], $i = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, er = [
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
], tr = [
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
  }
];
function ir() {
  const i = [];
  return xi.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...$i });
  }), [...i, ...er, ...tr];
}
const rr = ir();
it.formats = rr.map((i) => i.verbatimCoordinates);
const nr = it;
function Et(i, e, t) {
  const r = i.slice();
  return r[81] = e[t], r[83] = t, r;
}
function kt(i) {
  let e, t;
  return e = new Hi({}), {
    c() {
      le(e.$$.fragment);
    },
    m(r, n) {
      ie(e, r, n), t = !0;
    },
    i(r) {
      t || (H(e.$$.fragment, r), t = !0);
    },
    o(r) {
      G(e.$$.fragment, r), t = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function pt(i) {
  let e, t, r, n, l;
  return t = new Zi({}), {
    c() {
      e = O("button"), le(t.$$.fragment), c(e, "type", "button"), c(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), c(e, "class", "svelte-zh3kmv"), se(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(o, a) {
      A(o, e, a), ie(t, e, null), r = !0, n || (l = q(
        e,
        "click",
        /*click_handler_2*/
        i[67]
      ), n = !0);
    },
    p(o, a) {
      (!r || a[0] & /*reverseButtonTitle*/
      512) && c(
        e,
        "title",
        /*reverseButtonTitle*/
        o[9]
      ), (!r || a[0] & /*reverseActive*/
      1) && se(
        e,
        "active",
        /*reverseActive*/
        o[0]
      );
    },
    i(o) {
      r || (H(t.$$.fragment, o), r = !0);
    },
    o(o) {
      G(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && U(e), re(t), n = !1, l();
    }
  };
}
function or(i) {
  let e, t = [], r = /* @__PURE__ */ new Map(), n, l, o, a = mt(
    /*listFeatures*/
    i[14]
  );
  const d = (u) => (
    /*feature*/
    u[81].id + /*feature*/
    (u[81].address ? "," + /*feature*/
    u[81].address : "")
  );
  for (let u = 0; u < a.length; u += 1) {
    let f = Et(i, a, u), b = d(f);
    r.set(b, t[u] = St(b, f));
  }
  return {
    c() {
      e = O("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      c(e, "class", "svelte-zh3kmv");
    },
    m(u, f) {
      A(u, e, f);
      for (let b = 0; b < t.length; b += 1)
        t[b] && t[b].m(e, null);
      n = !0, l || (o = [
        q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[71]
        ),
        q(
          e,
          "blur",
          /*blur_handler_1*/
          i[72]
        )
      ], l = !0);
    },
    p(u, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (a = mt(
        /*listFeatures*/
        u[14]
      ), Ae(), t = pi(t, f, d, 1, u, a, r, e, ki, St, null, Et), Fe());
    },
    i(u) {
      if (!n) {
        for (let f = 0; f < a.length; f += 1)
          H(t[f]);
        n = !0;
      }
    },
    o(u) {
      for (let f = 0; f < t.length; f += 1)
        G(t[f]);
      n = !1;
    },
    d(u) {
      u && U(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      l = !1, ne(o);
    }
  };
}
function sr(i) {
  let e, t, r, n, l, o;
  return t = new zt({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = V(), n = O("div"), l = ae(
        /*noResultsMessage*/
        i[7]
      ), c(n, "class", "svelte-zh3kmv"), c(e, "class", "no-results svelte-zh3kmv");
    },
    m(a, d) {
      A(a, e, d), ie(t, e, null), C(e, r), C(e, n), C(n, l), o = !0;
    },
    p(a, d) {
      (!o || d[0] & /*noResultsMessage*/
      128) && Ne(
        l,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      o || (H(t.$$.fragment, a), o = !0);
    },
    o(a) {
      G(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && U(e), re(t);
    }
  };
}
function ar(i) {
  let e = "", t;
  return {
    c() {
      t = ae(e);
    },
    m(r, n) {
      A(r, t, n);
    },
    p: D,
    i: D,
    o: D,
    d(r) {
      r && U(t);
    }
  };
}
function lr(i) {
  let e, t, r, n, l, o, a, d, u, f, b;
  return t = new zt({}), d = new Ot({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = V(), n = O("div"), l = ae(
        /*errorMessage*/
        i[6]
      ), o = V(), a = O("button"), le(d.$$.fragment), c(n, "class", "svelte-zh3kmv"), c(a, "class", "svelte-zh3kmv"), c(e, "class", "error svelte-zh3kmv");
    },
    m(h, p) {
      A(h, e, p), ie(t, e, null), C(e, r), C(e, n), C(n, l), C(e, o), C(e, a), ie(d, a, null), u = !0, f || (b = q(
        a,
        "click",
        /*click_handler_3*/
        i[68]
      ), f = !0);
    },
    p(h, p) {
      (!u || p[0] & /*errorMessage*/
      64) && Ne(
        l,
        /*errorMessage*/
        h[6]
      );
    },
    i(h) {
      u || (H(t.$$.fragment, h), H(d.$$.fragment, h), u = !0);
    },
    o(h) {
      G(t.$$.fragment, h), G(d.$$.fragment, h), u = !1;
    },
    d(h) {
      h && U(e), re(t), re(d), f = !1, b();
    }
  };
}
function St(i, e) {
  let t, r, n;
  function l() {
    return (
      /*mouseenter_handler*/
      e[69](
        /*i*/
        e[83]
      )
    );
  }
  function o() {
    return (
      /*focus_handler_1*/
      e[70](
        /*feature*/
        e[81]
      )
    );
  }
  return r = new Fi({
    props: {
      feature: (
        /*feature*/
        e[81]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[15] === /*i*/
        e[83]
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
  }), r.$on("mouseenter", l), r.$on("focus", o), {
    key: i,
    first: null,
    c() {
      t = mi(), le(r.$$.fragment), this.first = t;
    },
    m(a, d) {
      A(a, t, d), ie(r, a, d), n = !0;
    },
    p(a, d) {
      e = a;
      const u = {};
      d[0] & /*listFeatures*/
      16384 && (u.feature = /*feature*/
      e[81]), d[0] & /*showPlaceType*/
      1024 && (u.showPlaceType = /*showPlaceType*/
      e[10]), d[0] & /*selectedItemIndex, listFeatures*/
      49152 && (u.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[83]), d[0] & /*iconsBaseUrl*/
      4096 && (u.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), r.$set(u);
    },
    i(a) {
      n || (H(r.$$.fragment, a), n = !0);
    },
    o(a) {
      G(r.$$.fragment, a), n = !1;
    },
    d(a) {
      a && U(t), re(r, a);
    }
  };
}
function cr(i) {
  let e, t, r, n, l, o, a, d, u, f, b, h, p, W, F, y, w, P, R, E, g, I = !1;
  l = new Qi({}), b = new Ot({});
  let v = (
    /*abortController*/
    i[19] && kt()
  ), S = (
    /*enableReverse*/
    i[5] === !0 && pt(i)
  );
  const m = (
    /*#slots*/
    i[59].default
  ), L = ci(
    m,
    i,
    /*$$scope*/
    i[58],
    null
  ), X = [lr, ar, sr, or], M = [];
  function he(_, B) {
    var K, be;
    return (
      /*error*/
      _[18] ? 0 : (
        /*focusedDelayed*/
        _[16] ? (
          /*listFeatures*/
          ((K = _[14]) == null ? void 0 : K.length) === 0 ? 2 : (
            /*focusedDelayed*/
            _[16] && /*listFeatures*/
            ((be = _[14]) != null && be.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(y = he(i)) && (w = M[y] = X[y](i)), {
    c() {
      e = V(), t = O("form"), r = O("div"), n = O("button"), le(l.$$.fragment), o = V(), a = O("input"), d = V(), u = O("div"), f = O("button"), le(b.$$.fragment), h = V(), v && v.c(), p = V(), S && S.c(), W = V(), L && L.c(), F = V(), w && w.c(), c(n, "class", "search-button svelte-zh3kmv"), c(n, "type", "button"), c(
        a,
        "placeholder",
        /*placeholder*/
        i[8]
      ), c(
        a,
        "aria-label",
        /*placeholder*/
        i[8]
      ), c(a, "class", "svelte-zh3kmv"), c(f, "type", "button"), c(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), c(f, "class", "svelte-zh3kmv"), c(u, "class", "clear-button-container svelte-zh3kmv"), se(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), c(r, "class", "input-group svelte-zh3kmv"), c(t, "tabindex", "0"), c(t, "class", P = ct(
        /*className*/
        i[2]
      ) + " svelte-zh3kmv"), se(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(_, B) {
      A(_, e, B), A(_, t, B), C(t, r), C(r, n), ie(l, n, null), C(r, o), C(r, a), i[61](a), ut(
        a,
        /*searchValue*/
        i[1]
      ), C(r, d), C(r, u), C(u, f), ie(b, f, null), C(u, h), v && v.m(u, null), C(r, p), S && S.m(r, null), C(r, W), L && L.m(r, null), C(t, F), ~y && M[y].m(t, null), R = !0, E || (g = [
        q(
          n,
          "click",
          /*click_handler*/
          i[60]
        ),
        q(
          a,
          "input",
          /*input_1_input_handler*/
          i[62]
        ),
        q(
          a,
          "focus",
          /*focus_handler*/
          i[63]
        ),
        q(
          a,
          "blur",
          /*blur_handler*/
          i[64]
        ),
        q(
          a,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        q(
          a,
          "input",
          /*input_handler*/
          i[65]
        ),
        q(
          f,
          "click",
          /*click_handler_1*/
          i[66]
        ),
        q(t, "submit", gi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], E = !0);
    },
    p(_, B) {
      (!R || B[0] & /*placeholder*/
      256) && c(
        a,
        "placeholder",
        /*placeholder*/
        _[8]
      ), (!R || B[0] & /*placeholder*/
      256) && c(
        a,
        "aria-label",
        /*placeholder*/
        _[8]
      ), B[0] & /*searchValue*/
      2 && a.value !== /*searchValue*/
      _[1] && ut(
        a,
        /*searchValue*/
        _[1]
      ), (!R || B[0] & /*clearButtonTitle*/
      8) && c(
        f,
        "title",
        /*clearButtonTitle*/
        _[3]
      ), /*abortController*/
      _[19] ? v ? B[0] & /*abortController*/
      524288 && H(v, 1) : (v = kt(), v.c(), H(v, 1), v.m(u, null)) : v && (Ae(), G(v, 1, 1, () => {
        v = null;
      }), Fe()), (!R || B[0] & /*searchValue*/
      2) && se(
        u,
        "displayable",
        /*searchValue*/
        _[1] !== ""
      ), /*enableReverse*/
      _[5] === !0 ? S ? (S.p(_, B), B[0] & /*enableReverse*/
      32 && H(S, 1)) : (S = pt(_), S.c(), H(S, 1), S.m(r, W)) : S && (Ae(), G(S, 1, 1, () => {
        S = null;
      }), Fe()), L && L.p && (!R || B[1] & /*$$scope*/
      134217728) && di(
        L,
        m,
        _,
        /*$$scope*/
        _[58],
        R ? ui(
          m,
          /*$$scope*/
          _[58],
          B,
          null
        ) : fi(
          /*$$scope*/
          _[58]
        ),
        null
      );
      let K = y;
      y = he(_), y === K ? ~y && M[y].p(_, B) : (w && (Ae(), G(M[K], 1, 1, () => {
        M[K] = null;
      }), Fe()), ~y ? (w = M[y], w ? w.p(_, B) : (w = M[y] = X[y](_), w.c()), H(w, 1), w.m(t, null)) : w = null), (!R || B[0] & /*className*/
      4 && P !== (P = ct(
        /*className*/
        _[2]
      ) + " svelte-zh3kmv")) && c(t, "class", P), (!R || B[0] & /*className, collapsed, searchValue*/
      22) && se(
        t,
        "can-collapse",
        /*collapsed*/
        _[4] && /*searchValue*/
        _[1] === ""
      );
    },
    i(_) {
      R || (H(I), H(l.$$.fragment, _), H(b.$$.fragment, _), H(v), H(S), H(L, _), H(w), R = !0);
    },
    o(_) {
      G(I), G(l.$$.fragment, _), G(b.$$.fragment, _), G(v), G(S), G(L, _), G(w), R = !1;
    },
    d(_) {
      _ && (U(e), U(t)), re(l), i[61](null), re(b), v && v.d(), S && S.d(), L && L.d(_), ~y && M[y].d(), E = !1, ne(g);
    }
  };
}
function ur(i, e, t) {
  let r, { $$slots: n = {}, $$scope: l } = e, { class: o = void 0 } = e, { apiKey: a } = e, { bbox: d = void 0 } = e, { clearButtonTitle: u = "clear" } = e, { clearOnBlur: f = !1 } = e, { collapsed: b = !1 } = e, { country: h = void 0 } = e, { debounceSearch: p = 200 } = e, { enableReverse: W = !1 } = e, { errorMessage: F = "Something went wrong…" } = e, { filter: y = () => !0 } = e, { flyTo: w = !0 } = e, { fuzzyMatch: P = !0 } = e, { language: R = void 0 } = e, { limit: E = void 0 } = e, { mapController: g = void 0 } = e, { minLength: I = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: S = "Search" } = e, { proximity: m = [{ type: "server-geolocation" }] } = e, { reverseActive: L = W === "always" } = e, { reverseButtonTitle: X = "toggle reverse geocoding" } = e, { searchValue: M = "" } = e, { showFullGeometry: he = !0 } = e, { showPlaceType: _ = "ifNeeded" } = e, { showResultsWhileTyping: B = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: be = !1 } = e, { markerOnSelected: Te = !0 } = e, { types: ce = void 0 } = e, { excludeTypes: Me = !1 } = e, { zoom: ke = 16 } = e, { maxZoom: ve = 18 } = e, { apiUrl: Pe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: He = {} } = e, { iconsBaseUrl: rt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.2.2/icons/" } = e, { adjustUrlQuery: je = (s) => {
  } } = e;
  function Ut() {
    Y.focus();
  }
  function Bt() {
    Y.blur();
  }
  function nt(s, Z = !0) {
    t(1, M = s), Z ? (t(15, z = -1), st()) : (qe(), setTimeout(() => {
      Y.focus(), Y.select();
    }));
  }
  function Dt() {
    t(14, N = void 0), t(55, k = void 0), t(15, z = -1);
  }
  function At() {
    t(54, j = []), t(55, k = void 0);
  }
  let _e = !1, N, j, k, ot = "", Y, z = -1, x, We = [], ue, Le, Re, Ze;
  const Ft = /* @__PURE__ */ new Set(), oe = _i();
  vi(() => {
    g && (g.setEventHandler(void 0), g.indicateReverse(!1), g.setSelectedMarker(-1), g.setMarkers(void 0, void 0));
  });
  function st(s) {
    if (Le && (clearTimeout(Le), Le = void 0), z > -1 && N)
      t(55, k = N[z]), t(1, M = k.place_type[0] === "reverse" ? k.place_name : k.place_name.replace(/,.*/, "")), t(18, x = void 0), t(54, j = void 0), t(15, z = -1);
    else if (M) {
      const Z = s || !Ge(M);
      Qe(M, { exact: !0 }).then(() => {
        t(54, j = N), t(55, k = void 0), Z && Pt();
      }).catch(($) => t(18, x = $));
    }
  }
  function Ge(s) {
    try {
      return nr(s, 6);
    } catch {
      return !1;
    }
  }
  async function Qe(s, { byId: Z = !1, exact: $ = !1 } = {}) {
    t(18, x = void 0), ue == null || ue.abort();
    const ee = new AbortController();
    t(19, ue = ee);
    try {
      const T = Ge(s), J = new URLSearchParams();
      if (R !== void 0 && J.set("language", Array.isArray(R) ? R.join(",") : R ?? ""), ce && J.set("types", ce.join(",")), Me && J.set("excludeTypes", String(Me)), d && J.set("bbox", d.map((Oe) => Oe.toFixed(6)).join(",")), h && J.set("country", Array.isArray(h) ? h.join(",") : h), !Z && !T) {
        const Oe = await Ki(g, m, ee);
        Oe && J.set("proximity", Oe), ($ || !B) && J.set("autocomplete", "false"), J.set("fuzzyMatch", String(P));
      }
      E !== void 0 && (!T || (ce == null ? void 0 : ce.length) === 1) && J.set("limit", String(E)), J.set("key", a), je(J);
      const Ie = Pe + "/" + encodeURIComponent(T ? T.decimalLongitude + "," + T.decimalLatitude : s) + ".json?" + J.toString();
      if (Ie === ot) {
        Z ? (t(14, N = void 0), t(55, k = We[0])) : t(14, N = We);
        return;
      }
      ot = Ie;
      const Ve = await fetch(Ie, { signal: ee.signal, ...He });
      if (!Ve.ok)
        throw new Error(await Ve.text());
      const Je = await Ve.json();
      oe("response", { url: Ie, featureCollection: Je }), Z ? (t(14, N = void 0), t(55, k = Je.features[0]), We = [k]) : (t(14, N = Je.features.filter(y)), T && N.unshift({
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
      }), We = N, T && Y.focus());
    } catch (T) {
      if (T && typeof T == "object" && "name" in T && T.name === "AbortError")
        return;
      throw T;
    } finally {
      ee === ue && t(19, ue = void 0);
    }
  }
  function Pt() {
    var $;
    if (!(j != null && j.length) || !w)
      return;
    const s = [180, 90, -180, -90], Z = !j.some((ee) => !ee.matching_text);
    for (const ee of j)
      if (Z || !ee.matching_text)
        for (const T of [0, 1, 2, 3])
          s[T] = Math[T < 2 ? "min" : "max"](s[T], (($ = ee.bbox) == null ? void 0 : $[T]) ?? ee.center[T % 2]);
    g && j.length > 0 && (k && s[0] === s[2] && s[1] === s[3] ? g.flyTo(k.center, ke) : g.fitBounds(ht(s), 50, ve));
  }
  function Ht(s) {
    t(0, L = W === "always"), t(14, N = void 0), t(55, k = void 0), t(15, z = -1), nt(s[1].toFixed(6) + ", " + qi(s[0], [-180, 180], !0).toFixed(6), !1);
  }
  function jt(s) {
    if (!N)
      return;
    let Z = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    Z && (z === (K ? 0 : -1) && Z === -1 && t(15, z = N.length), t(15, z += Z), z >= N.length && t(15, z = -1), z < 0 && K && t(15, z = 0), s.preventDefault());
  }
  function qe(s = !0) {
    if (t(18, x = void 0), B) {
      if (Le && clearTimeout(Le), M.length < I)
        return;
      const Z = M;
      Le = window.setTimeout(
        () => {
          Qe(Z).catch(($) => t(18, x = $));
        },
        s ? p : 0
      );
    } else
      t(14, N = void 0), t(18, x = void 0);
  }
  function Ke(s) {
    t(55, k = s), t(1, M = s.place_name), t(15, z = -1);
  }
  const Zt = () => Y.focus();
  function Gt(s) {
    $e[s ? "unshift" : "push"](() => {
      Y = s, t(17, Y);
    });
  }
  function Qt() {
    M = this.value, t(1, M), t(13, _e), t(27, f);
  }
  const qt = () => t(13, _e = !0), Kt = () => t(13, _e = !1), Vt = () => qe(), Jt = () => {
    t(1, M = ""), Y.focus();
  }, Xt = () => t(0, L = !L), Yt = () => t(18, x = void 0), xt = (s) => t(15, z = s), $t = (s) => Ke(s), ei = () => {
    K || t(15, z = -1);
  }, ti = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, o = s.class), "apiKey" in s && t(25, a = s.apiKey), "bbox" in s && t(26, d = s.bbox), "clearButtonTitle" in s && t(3, u = s.clearButtonTitle), "clearOnBlur" in s && t(27, f = s.clearOnBlur), "collapsed" in s && t(4, b = s.collapsed), "country" in s && t(28, h = s.country), "debounceSearch" in s && t(29, p = s.debounceSearch), "enableReverse" in s && t(5, W = s.enableReverse), "errorMessage" in s && t(6, F = s.errorMessage), "filter" in s && t(30, y = s.filter), "flyTo" in s && t(31, w = s.flyTo), "fuzzyMatch" in s && t(32, P = s.fuzzyMatch), "language" in s && t(33, R = s.language), "limit" in s && t(34, E = s.limit), "mapController" in s && t(35, g = s.mapController), "minLength" in s && t(36, I = s.minLength), "noResultsMessage" in s && t(7, v = s.noResultsMessage), "placeholder" in s && t(8, S = s.placeholder), "proximity" in s && t(37, m = s.proximity), "reverseActive" in s && t(0, L = s.reverseActive), "reverseButtonTitle" in s && t(9, X = s.reverseButtonTitle), "searchValue" in s && t(1, M = s.searchValue), "showFullGeometry" in s && t(38, he = s.showFullGeometry), "showPlaceType" in s && t(10, _ = s.showPlaceType), "showResultsWhileTyping" in s && t(39, B = s.showResultsWhileTyping), "selectFirst" in s && t(11, K = s.selectFirst), "flyToSelected" in s && t(40, be = s.flyToSelected), "markerOnSelected" in s && t(41, Te = s.markerOnSelected), "types" in s && t(42, ce = s.types), "excludeTypes" in s && t(43, Me = s.excludeTypes), "zoom" in s && t(44, ke = s.zoom), "maxZoom" in s && t(45, ve = s.maxZoom), "apiUrl" in s && t(46, Pe = s.apiUrl), "fetchParameters" in s && t(47, He = s.fetchParameters), "iconsBaseUrl" in s && t(12, rt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(48, je = s.adjustUrlQuery), "$$scope" in s && t(58, l = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      t(16, Re = _e), f && !_e && t(1, M = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    32 && M.length < I && (t(55, k = void 0), t(14, N = void 0), t(18, x = void 0), t(54, j = N)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && he && k && !k.address && k.geometry.type === "Point" && k.place_type[0] !== "reverse" && Qe(k.id, { byId: !0 }).catch((s) => t(18, x = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (g && k && k.id !== Ze && w && (!k.bbox || k.bbox[0] === k.bbox[2] && k.bbox[1] === k.bbox[3] ? g.flyTo(k.center, k.id.startsWith("poi.") || k.id.startsWith("address.") ? ve : ke) : g.fitBounds(ht(k.bbox), 50, ve), t(14, N = void 0), t(54, j = void 0), t(15, z = -1)), t(56, Ze = k == null ? void 0 : k.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && K && N != null && N.length && t(15, z = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (K || t(15, z = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    8388608 && j !== N && t(54, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && g && g.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          L && Ht(s.coordinates);
          break;
        case "markerClick":
          {
            const Z = N == null ? void 0 : N.find(($) => $.id === s.id);
            Z && Ke(Z);
          }
          break;
        case "markerMouseEnter":
          j && t(15, z = Re ? (N == null ? void 0 : N.findIndex((Z) => Z.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, z = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(57, r = N == null ? void 0 : N[z]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && g && r && w && be && g.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? ve : ke), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Te || g == null || g.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && g && Te && !j && (g.setMarkers(r ? [r] : void 0, void 0), g.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && g && g.setMarkers(j, k), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && j && g && g.setSelectedMarker(z), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16 && g) {
      const s = Ge(M);
      g.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    67108864 && oe("select", r), i.$$.dirty[1] & /*picked*/
    16777216 && oe("pick", k), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && oe("optionsVisibilityChange", Re && !!N), i.$$.dirty[0] & /*listFeatures*/
    16384 && oe("featuresListed", N), i.$$.dirty[1] & /*markedFeatures*/
    8388608 && oe("featuresMarked", j), i.$$.dirty[0] & /*reverseActive*/
    1 && oe("reverseToggle", L), i.$$.dirty[0] & /*searchValue*/
    2 && oe("queryChange", M), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && g && g.indicateReverse(L);
  }, [
    L,
    M,
    o,
    u,
    b,
    W,
    F,
    v,
    S,
    X,
    _,
    K,
    rt,
    _e,
    N,
    z,
    Re,
    Y,
    x,
    ue,
    Ft,
    st,
    jt,
    qe,
    Ke,
    a,
    d,
    f,
    h,
    p,
    y,
    w,
    P,
    R,
    E,
    g,
    I,
    m,
    he,
    B,
    be,
    Te,
    ce,
    Me,
    ke,
    ve,
    Pe,
    He,
    je,
    Ut,
    Bt,
    nt,
    Dt,
    At,
    j,
    k,
    Ze,
    r,
    l,
    n,
    Zt,
    Gt,
    Qt,
    qt,
    Kt,
    Vt,
    Jt,
    Xt,
    Yt,
    xt,
    $t,
    ei,
    ti
  ];
}
class dr extends ge {
  constructor(e) {
    super(), me(
      this,
      e,
      ur,
      cr,
      fe,
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
}
const Nt = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], fr = [
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
function Ct(i) {
  return "on" + i[0].toUpperCase() + i.slice(1);
}
const hr = ni(function(e, t) {
  const r = at(), n = at(), l = { ...e };
  for (const o of Nt)
    delete l[Ct(o)];
  Ye(() => {
    if (!r.current)
      throw new Error();
    const o = new dr({
      target: r.current,
      props: l
    });
    return n.current = o, () => o.$destroy();
  }, []);
  for (const o of fr)
    Ye(() => {
      n.current && e[o] !== void 0 && n.current.$set({ [o]: e[o] });
    }, [e[o]]);
  for (const o of Nt) {
    const a = e[Ct(o)];
    Ye(
      () => {
        var d;
        return a && ((d = n.current) == null ? void 0 : d.$on(o, (u) => {
          a(u.detail);
        }));
      },
      [a]
    );
  }
  return oi(t, () => ({
    setQuery: (o, a = !0) => {
      var d;
      return (d = n.current) == null ? void 0 : d.setQuery(o, a);
    },
    clearMap: () => {
      var o;
      return (o = n.current) == null ? void 0 : o.clearMap();
    },
    clearList: () => {
      var o;
      return (o = n.current) == null ? void 0 : o.clearList();
    },
    focus: () => {
      var o;
      return (o = n.current) == null ? void 0 : o.focus();
    },
    blur: () => {
      var o;
      return (o = n.current) == null ? void 0 : o.blur();
    }
  })), si("div", { ref: r });
});
export {
  hr as GeocodingControl
};
//# sourceMappingURL=react.js.map
