var ii = Object.defineProperty;
var ri = (i, e, t) => e in i ? ii(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Je = (i, e, t) => ri(i, typeof e != "symbol" ? e + "" : e, t);
import { forwardRef as ni, useRef as st, useEffect as Xe, useImperativeHandle as oi, createElement as si } from "react";
function D() {
}
function ai(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Tt(i) {
  return i();
}
function at() {
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
let Ue;
function q(i, e) {
  return i === e ? !0 : (Ue || (Ue = document.createElement("a")), Ue.href = e, i === Ue.href);
}
function li(i) {
  return Object.keys(i).length === 0;
}
function ci(i, e, t, r) {
  if (i) {
    const o = Wt(i, e, t, r);
    return i[0](o);
  }
}
function Wt(i, e, t, r) {
  return i[1] && r ? ai(t.ctx.slice(), i[1](r(e))) : t.ctx;
}
function ui(i, e, t, r) {
  if (i[2] && r) {
    const o = i[2](r(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const c = [], n = Math.max(e.dirty.length, o.length);
      for (let a = 0; a < n; a += 1)
        c[a] = e.dirty[a] | o[a];
      return c;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function di(i, e, t, r, o, c) {
  if (o) {
    const n = Wt(e, t, r, c);
    i.p(n, o);
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
function lt(i) {
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
function J() {
  return ae(" ");
}
function mi() {
  return ae("");
}
function Q(i, e, t, r) {
  return i.addEventListener(e, t, r), () => i.removeEventListener(e, t, r);
}
function gi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function l(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function hi(i) {
  return Array.from(i.childNodes);
}
function Ce(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ct(i, e) {
  i.value = e ?? "";
}
function se(i, e, t) {
  i.classList.toggle(e, !!t);
}
function bi(i, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: r });
}
let Te;
function Ne(i) {
  Te = i;
}
function Rt() {
  if (!Te) throw new Error("Function called outside component initialization");
  return Te;
}
function vi(i) {
  Rt().$$.on_destroy.push(i);
}
function Li() {
  const i = Rt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const c = bi(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return o.slice().forEach((n) => {
        n.call(i, c);
      }), !c.defaultPrevented;
    }
    return !0;
  };
}
function ut(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const we = [], xe = [];
let Ee = [];
const dt = [], _i = /* @__PURE__ */ Promise.resolve();
let $e = !1;
function yi() {
  $e || ($e = !0, _i.then(It));
}
function et(i) {
  Ee.push(i);
}
const Ye = /* @__PURE__ */ new Set();
let ye = 0;
function It() {
  if (ye !== 0)
    return;
  const i = Te;
  do {
    try {
      for (; ye < we.length; ) {
        const e = we[ye];
        ye++, Ne(e), wi(e.$$);
      }
    } catch (e) {
      throw we.length = 0, ye = 0, e;
    }
    for (Ne(null), we.length = 0, ye = 0; xe.length; ) xe.pop()();
    for (let e = 0; e < Ee.length; e += 1) {
      const t = Ee[e];
      Ye.has(t) || (Ye.add(t), t());
    }
    Ee.length = 0;
  } while (we.length);
  for (; dt.length; )
    dt.pop()();
  $e = !1, Ye.clear(), Ne(i);
}
function wi(i) {
  if (i.fragment !== null) {
    i.update(), ne(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(et);
  }
}
function Ei(i) {
  const e = [], t = [];
  Ee.forEach((r) => i.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), Ee = e;
}
const Be = /* @__PURE__ */ new Set();
let de;
function De() {
  de = {
    r: 0,
    c: [],
    p: de
    // parent group
  };
}
function Ae() {
  de.r || ne(de.c), de = de.p;
}
function H(i, e) {
  i && i.i && (Be.delete(i), i.i(e));
}
function G(i, e, t, r) {
  if (i && i.o) {
    if (Be.has(i)) return;
    Be.add(i), de.c.push(() => {
      Be.delete(i), r && (t && i.d(1), r());
    }), i.o(e);
  } else r && r();
}
function ft(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function ki(i, e) {
  G(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function pi(i, e, t, r, o, c, n, a, d, u, f, b) {
  let h = i.length, k = c.length, M = h;
  const F = {};
  for (; M--; ) F[i[M].key] = M;
  const y = [], w = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), R = [];
  for (M = k; M--; ) {
    const v = b(o, c, M), p = t(v);
    let m = n.get(p);
    m ? R.push(() => m.p(v, e)) : (m = u(p, v), m.c()), w.set(p, y[M] = m), p in F && P.set(p, Math.abs(M - F[p]));
  }
  const S = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  function I(v) {
    H(v, 1), v.m(a, f), n.set(v.key, v), f = v.first, k--;
  }
  for (; h && k; ) {
    const v = y[k - 1], p = i[h - 1], m = v.key, _ = p.key;
    v === p ? (f = v.first, h--, k--) : w.has(_) ? !n.has(m) || S.has(m) ? I(v) : g.has(_) ? h-- : P.get(m) > P.get(_) ? (g.add(m), I(v)) : (S.add(_), h--) : (d(p, n), h--);
  }
  for (; h--; ) {
    const v = i[h];
    w.has(v.key) || d(v, n);
  }
  for (; k; ) I(y[k - 1]);
  return ne(R), y;
}
function le(i) {
  i && i.c();
}
function ie(i, e, t) {
  const { fragment: r, after_update: o } = i.$$;
  r && r.m(e, t), et(() => {
    const c = i.$$.on_mount.map(Tt).filter(Mt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...c) : ne(c), i.$$.on_mount = [];
  }), o.forEach(et);
}
function re(i, e) {
  const t = i.$$;
  t.fragment !== null && (Ei(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Si(i, e) {
  i.$$.dirty[0] === -1 && (we.push(i), yi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(i, e, t, r, o, c, n = null, a = [-1]) {
  const d = Te;
  Ne(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: D,
    not_equal: o,
    bound: at(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: at(),
    dirty: a,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  n && n(u.root);
  let f = !1;
  if (u.ctx = t ? t(i, e.props || {}, (b, h, ...k) => {
    const M = k.length ? k[0] : h;
    return u.ctx && o(u.ctx[b], u.ctx[b] = M) && (!u.skip_bound && u.bound[b] && u.bound[b](M), f && Si(i, b)), h;
  }) : [], u.update(), f = !0, ne(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = hi(e.target);
      u.fragment && u.fragment.l(b), b.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && H(i.$$.fragment), ie(i, e.target, e.anchor), It();
  }
  Ne(d);
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
    Je(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Je(this, "$$set");
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
      const o = r.indexOf(t);
      o !== -1 && r.splice(o, 1);
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
      e = te("svg"), t = te("path"), l(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), l(e, "viewBox", "0 0 14 14"), l(e, "width", "13"), l(e, "height", "13"), l(e, "class", "svelte-en2qvf");
    },
    m(r, o) {
      A(r, e, o), C(e, t);
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
      e = te("svg"), t = te("path"), l(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), l(e, "viewBox", "0 0 30 30"), l(e, "fill", "none"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "class", "svelte-d2loi5");
    },
    m(r, o) {
      A(r, e, o), C(e, t);
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
      e = O("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
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
      e = O("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "reverse.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
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
      e = O("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
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
      e = O("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
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
      e = O("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
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
      e = O("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
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
      e = O("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && l(e, "src", t), o & /*placeType*/
      64 && l(
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
  let e, t, r, o;
  return {
    c() {
      e = O("img"), q(e.src, t = /*imageUrl*/
      i[5]) || l(e, "src", t), l(
        e,
        "alt",
        /*category*/
        i[4]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(c, n) {
      A(c, e, n), r || (o = Q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), r = !0);
    },
    p(c, n) {
      n & /*imageUrl*/
      32 && !q(e.src, t = /*imageUrl*/
      c[5]) && l(e, "src", t), n & /*category*/
      16 && l(
        e,
        "alt",
        /*category*/
        c[4]
      );
    },
    d(c) {
      c && U(e), r = !1, o();
    }
  };
}
function mt(i) {
  let e, t;
  return {
    c() {
      e = O("span"), t = ae(
        /*placeType*/
        i[6]
      ), l(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o), C(e, t);
    },
    p(r, o) {
      o & /*placeType*/
      64 && Ce(
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
  var v, p;
  let e, t, r, o, c, n, a, d, u = (
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
    ((p = i[0].properties) == null ? void 0 : p.kind) !== "road_relation" && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), k, M, F = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), y, w, P;
  function R(m, _) {
    var x, W;
    return _ & /*feature*/
    1 && (t = null), _ & /*feature*/
    1 && (r = null), _ & /*feature*/
    1 && (o = null), /*imageUrl*/
    m[5] ? Bi : (
      /*feature*/
      m[0].address ? Ui : (
        /*feature*/
        ((x = m[0].properties) == null ? void 0 : x.kind) === "road" || /*feature*/
        ((W = m[0].properties) == null ? void 0 : W.kind) === "road_relation" ? zi : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("address.")), t ? Oi : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? Ii : (o == null && (o = !!/*feature*/
        m[0].id.startsWith("poi.")), o ? Ri : (
          /*isReverse*/
          m[7] ? Wi : Mi
        ))))
      )
    );
  }
  let S = R(i, -1), g = S(i), I = h && mt(i);
  return {
    c() {
      e = O("li"), g.c(), c = J(), n = O("span"), a = O("span"), d = O("span"), f = ae(u), b = J(), I && I.c(), k = J(), M = O("span"), y = ae(F), l(d, "class", "primary svelte-ltkwvy"), l(a, "class", "svelte-ltkwvy"), l(M, "class", "line2 svelte-ltkwvy"), l(n, "class", "texts svelte-ltkwvy"), l(e, "tabindex", "0"), l(
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
    m(m, _) {
      A(m, e, _), g.m(e, null), C(e, c), C(e, n), C(n, a), C(a, d), C(d, f), C(a, b), I && I.m(a, null), C(n, k), C(n, M), C(M, y), w || (P = [
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        Q(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], w = !0);
    },
    p(m, [_]) {
      var x, W;
      S === (S = R(m, _)) && g ? g.p(m, _) : (g.d(1), g = S(m), g && (g.c(), g.m(e, c))), _ & /*feature*/
      1 && u !== (u = /*isReverse*/
      (m[7] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Ce(f, u), _ & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] && !/*feature*/
      m[0].address && /*feature*/
      ((x = m[0].properties) == null ? void 0 : x.kind) !== "road" && /*feature*/
      ((W = m[0].properties) == null ? void 0 : W.kind) !== "road_relation" && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[7]), h ? I ? I.p(m, _) : (I = mt(m), I.c(), I.m(a, null)) : I && (I.d(1), I = null), _ & /*feature*/
      1 && F !== (F = /*isReverse*/
      (m[7] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ce(y, F), _ & /*selected*/
      2 && l(
        e,
        "data-selected",
        /*selected*/
        m[1]
      ), _ & /*selected*/
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
  let r, o, { feature: c } = e, { selected: n = !1 } = e, { showPlaceType: a } = e, { missingIconsCache: d } = e, { iconsBaseUrl: u } = e;
  const f = (R = c.properties) == null ? void 0 : R.categories;
  let b, h, k = 0, M = c.place_type[0] === "reverse";
  function F() {
    h && d.add(h), t(10, k++, k);
  }
  function y(S) {
    ut.call(this, i, S);
  }
  function w(S) {
    ut.call(this, i, S);
  }
  const P = () => F();
  return i.$$set = (S) => {
    "feature" in S && t(0, c = S.feature), "selected" in S && t(1, n = S.selected), "showPlaceType" in S && t(2, a = S.showPlaceType), "missingIconsCache" in S && t(9, d = S.missingIconsCache), "iconsBaseUrl" in S && t(3, u = S.iconsBaseUrl);
  }, i.$$.update = () => {
    var S, g, I, v;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, r--, r), t(4, b = f == null ? void 0 : f[r]), t(5, h = b ? u + b.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!h || d.has(h)));
    i.$$.dirty & /*feature*/
    1 && t(6, o = c.id.startsWith("poi.") ? (g = (S = c.properties) == null ? void 0 : S.categories) == null ? void 0 : g.join(", ") : ((v = (I = c.properties) == null ? void 0 : I.place_type_name) == null ? void 0 : v[0]) ?? c.place_type[0]);
  }, t(11, r = (f == null ? void 0 : f.length) ?? 0), [
    c,
    n,
    a,
    u,
    b,
    h,
    o,
    M,
    F,
    d,
    k,
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
      e = O("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', l(e, "class", "svelte-7cmwmc");
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
      e = te("svg"), t = te("path"), l(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), l(e, "viewBox", "0 0 60.006 21.412"), l(e, "width", "14"), l(e, "height", "20"), l(e, "class", "svelte-en2qvf");
    },
    m(r, o) {
      A(r, e, o), C(e, t);
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
      e = te("svg"), t = te("circle"), r = te("path"), l(t, "cx", "4.789"), l(t, "cy", "4.787"), l(t, "r", "3.85"), l(t, "class", "svelte-1aq105l"), l(r, "d", "M12.063 12.063 7.635 7.635"), l(r, "class", "svelte-1aq105l"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "width", "13"), l(e, "height", "13"), l(e, "viewBox", "0 0 13 13"), l(e, "class", "svelte-1aq105l");
    },
    m(o, c) {
      A(o, e, c), C(e, t), C(e, r);
    },
    p: D,
    i: D,
    o: D,
    d(o) {
      o && U(e);
    }
  };
}
class qi extends ge {
  constructor(e) {
    super(), me(this, e, null, Gi, fe, {});
  }
}
function Qi(i, e, t) {
  const r = e[1], o = e[0], c = r - o;
  return i === r && t ? i : ((i - o) % c + c) % c + o;
}
function gt(i) {
  const e = [...i];
  return e[2] < e[0] && (e[2] += 360), e;
}
let pe;
async function Ki(i, e, t) {
  const r = i == null ? void 0 : i.getCenterAndZoom();
  for (const o of e ?? [])
    if (!(r && (o.minZoom != null && o.minZoom > r[0] || o.maxZoom != null && o.maxZoom < r[0]))) {
      if (o.type === "fixed")
        return o.coordinates.join(",");
      e: if (o.type === "client-geolocation") {
        if (pe && o.cachedLocationExpiry && pe.time + o.cachedLocationExpiry > Date.now()) {
          if (!pe.coords)
            break e;
          return pe.coords;
        }
        let c;
        try {
          return c = await new Promise((n, a) => {
            t.signal.addEventListener("abort", () => {
              a(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                n(
                  [d.coords.longitude, d.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (d) => {
                a(d);
              },
              o
            );
          }), c;
        } catch {
        } finally {
          o.cachedLocationExpiry && (pe = {
            time: Date.now(),
            coords: c
          });
        }
        if (t.signal.aborted)
          return;
      }
      if (o.type === "server-geolocation")
        return "ip";
      if (r && o.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
const ht = /([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})/, bt = /(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?/i, vt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?/i, Lt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?/i, _t = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?/i;
function Vi(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    if (i == "DD")
      return this.decimalCoordinates;
    const e = this.decimalCoordinates.split(",").map((n) => Number(n.trim()));
    let t = yt(e[0], i), r = yt(e[1], i);
    t.endsWith('.0"') && r.endsWith('.0"') && (t = t.replace(/\.0"$/, '"'), r = r.replace(/\.0"$/, '"'));
    const o = e[0] >= 0 ? " N" : " S", c = e[1] >= 0 ? " E" : " W";
    return `${t + o}, ${r + c}`;
  } else
    throw new Error("no decimal coordinates to convert");
}
function yt(i, e) {
  const t = Math.abs(i), r = Math.floor(t), o = (t - r) * 60;
  if (e == "DM") {
    let a = Ji(o, 3).toFixed(3).padStart(6, "0");
    return `${r}° ${a}'`;
  }
  let c = Math.floor(o), n = ((o - c) * 60).toFixed(1).padStart(4, "0");
  return c = c.toString().padStart(2, "0"), `${r}° ${c}' ${n}"`;
}
function Ji(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function tt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, r = null, o = "", c = "", n = [], a = !1;
  if (ht.test(i))
    if (n = ht.exec(i), a = Se(n), a)
      t = Math.abs(n[1]) + n[2] / 60, Number(n[1]) < 0 && (t *= -1), r = Math.abs(n[3]) + n[4] / 60, Number(n[3]) < 0 && (r *= -1);
    else
      throw new Error("invalid coordinate format");
  else if (bt.test(i))
    if (n = bt.exec(i), a = Se(n), a) {
      if (t = n[2], r = n[6], t.includes(",") && (t = t.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      n[1] ? (o = n[1], c = n[5]) : n[4] && (o = n[4], c = n[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (vt.test(i))
    if (n = vt.exec(i), a = Se(n), a)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60), n[6] && (t += n[6].replace(",", ".") / 3600), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[9])), n[11] && (r += n[11] / 60), n[13] && (r += n[13].replace(",", ".") / 3600), parseInt(n[9]) < 0 && (r = -1 * r), n[1] ? (o = n[1], c = n[8]) : n[7] && (o = n[7], c = n[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Lt.test(i))
    if (n = Lt.exec(i), a = Se(n), a)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60), n[6] && (t += n[6] / 3600), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12] / 60), n[14] && (r += n[14] / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], c = n[9]) : n[8] && (o = n[8], c = n[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (_t.test(i))
    if (n = _t.exec(i), a = Se(n), a)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4].replace(",", ".") / 60), n[6] && (t += n[6].replace(",", ".") / 3600), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12].replace(",", ".") / 60), n[14] && (r += n[14].replace(",", ".") / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], c = n[9]) : n[8] && (o = n[8], c = n[16]);
    else
      throw new Error("invalid coordinates format");
  if (a) {
    if (Math.abs(r) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if ((o || c) && (!o || !c))
      throw new Error("invalid coordinates format");
    if (o && o == c)
      throw new Error("invalid coordinates format");
    let d = /S|SOUTH/i;
    d.test(o) && t > 0 && (t = -1 * t), d = /W|WEST/i, d.test(c) && r > 0 && (r = -1 * r);
    const u = n[0].trim();
    let f, b;
    const h = /[,/;\u0020]/g, k = u.match(h);
    if (k == null) {
      const y = Math.floor(i.length / 2);
      f = u.substring(0, y).trim(), b = u.substring(y).trim();
    } else {
      let y;
      k.length % 2 == 1 ? y = Math.floor(k.length / 2) : y = k.length / 2 - 1;
      let w = 0;
      if (y == 0)
        w = u.indexOf(k[0]), f = u.substring(0, w).trim(), b = u.substring(w + 1).trim();
      else {
        let P = 0, R = 0;
        for (; P <= y; )
          w = u.indexOf(k[P], R), R = w + 1, P++;
        f = u.substring(0, w).trim(), b = u.substring(w + 1).trim();
      }
    }
    const M = f.split(".");
    if (M.length == 2 && M[1] == 0 && M[1].length != 2)
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
function Se(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, r = /[eastsouthnorthwest]+/i, o = e.length / 2;
  for (let c = 0; c < o; c++) {
    const n = e[c], a = e[c + o], d = t.test(n) && t.test(a), u = r.test(n) && r.test(a), f = n == a;
    if (!(n == null && a == null)) {
      if (n == null || a == null)
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
tt.to = Yi;
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
function ir() {
  const i = [];
  return xi.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...$i });
  }), [...i, ...er, ...tr];
}
const rr = ir();
tt.formats = rr.map((i) => i.verbatimCoordinates);
const nr = tt;
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
    m(r, o) {
      ie(e, r, o), t = !0;
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
  let e, t, r, o, c;
  return t = new Zi({}), {
    c() {
      e = O("button"), le(t.$$.fragment), l(e, "type", "button"), l(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), l(e, "class", "svelte-zh3kmv"), se(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(n, a) {
      A(n, e, a), ie(t, e, null), r = !0, o || (c = Q(
        e,
        "click",
        /*click_handler_2*/
        i[67]
      ), o = !0);
    },
    p(n, a) {
      (!r || a[0] & /*reverseButtonTitle*/
      512) && l(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), (!r || a[0] & /*reverseActive*/
      1) && se(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    i(n) {
      r || (H(t.$$.fragment, n), r = !0);
    },
    o(n) {
      G(t.$$.fragment, n), r = !1;
    },
    d(n) {
      n && U(e), re(t), o = !1, c();
    }
  };
}
function or(i) {
  let e, t = [], r = /* @__PURE__ */ new Map(), o, c, n, a = ft(
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
      l(e, "class", "svelte-zh3kmv");
    },
    m(u, f) {
      A(u, e, f);
      for (let b = 0; b < t.length; b += 1)
        t[b] && t[b].m(e, null);
      o = !0, c || (n = [
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[71]
        ),
        Q(
          e,
          "blur",
          /*blur_handler_1*/
          i[72]
        )
      ], c = !0);
    },
    p(u, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (a = ft(
        /*listFeatures*/
        u[14]
      ), De(), t = pi(t, f, d, 1, u, a, r, e, ki, St, null, Et), Ae());
    },
    i(u) {
      if (!o) {
        for (let f = 0; f < a.length; f += 1)
          H(t[f]);
        o = !0;
      }
    },
    o(u) {
      for (let f = 0; f < t.length; f += 1)
        G(t[f]);
      o = !1;
    },
    d(u) {
      u && U(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      c = !1, ne(n);
    }
  };
}
function sr(i) {
  let e, t, r, o, c, n;
  return t = new zt({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = J(), o = O("div"), c = ae(
        /*noResultsMessage*/
        i[7]
      ), l(o, "class", "svelte-zh3kmv"), l(e, "class", "no-results svelte-zh3kmv");
    },
    m(a, d) {
      A(a, e, d), ie(t, e, null), C(e, r), C(e, o), C(o, c), n = !0;
    },
    p(a, d) {
      (!n || d[0] & /*noResultsMessage*/
      128) && Ce(
        c,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      n || (H(t.$$.fragment, a), n = !0);
    },
    o(a) {
      G(t.$$.fragment, a), n = !1;
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
    m(r, o) {
      A(r, t, o);
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
  let e, t, r, o, c, n, a, d, u, f, b;
  return t = new zt({}), d = new Ot({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = J(), o = O("div"), c = ae(
        /*errorMessage*/
        i[6]
      ), n = J(), a = O("button"), le(d.$$.fragment), l(o, "class", "svelte-zh3kmv"), l(a, "class", "svelte-zh3kmv"), l(e, "class", "error svelte-zh3kmv");
    },
    m(h, k) {
      A(h, e, k), ie(t, e, null), C(e, r), C(e, o), C(o, c), C(e, n), C(e, a), ie(d, a, null), u = !0, f || (b = Q(
        a,
        "click",
        /*click_handler_3*/
        i[68]
      ), f = !0);
    },
    p(h, k) {
      (!u || k[0] & /*errorMessage*/
      64) && Ce(
        c,
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
  let t, r, o;
  function c() {
    return (
      /*mouseenter_handler*/
      e[69](
        /*i*/
        e[83]
      )
    );
  }
  function n() {
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
  }), r.$on("mouseenter", c), r.$on("focus", n), {
    key: i,
    first: null,
    c() {
      t = mi(), le(r.$$.fragment), this.first = t;
    },
    m(a, d) {
      A(a, t, d), ie(r, a, d), o = !0;
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
      o || (H(r.$$.fragment, a), o = !0);
    },
    o(a) {
      G(r.$$.fragment, a), o = !1;
    },
    d(a) {
      a && U(t), re(r, a);
    }
  };
}
function cr(i) {
  let e, t, r, o, c, n, a, d, u, f, b, h, k, M, F, y, w, P, R, S, g, I = !1;
  c = new qi({}), b = new Ot({});
  let v = (
    /*abortController*/
    i[19] && kt()
  ), p = (
    /*enableReverse*/
    i[5] === !0 && pt(i)
  );
  const m = (
    /*#slots*/
    i[59].default
  ), _ = ci(
    m,
    i,
    /*$$scope*/
    i[58],
    null
  ), x = [lr, ar, sr, or], W = [];
  function he(L, B) {
    var K, be;
    return (
      /*error*/
      L[18] ? 0 : (
        /*focusedDelayed*/
        L[16] ? (
          /*listFeatures*/
          ((K = L[14]) == null ? void 0 : K.length) === 0 ? 2 : (
            /*focusedDelayed*/
            L[16] && /*listFeatures*/
            ((be = L[14]) != null && be.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(y = he(i)) && (w = W[y] = x[y](i)), {
    c() {
      e = J(), t = O("form"), r = O("div"), o = O("button"), le(c.$$.fragment), n = J(), a = O("input"), d = J(), u = O("div"), f = O("button"), le(b.$$.fragment), h = J(), v && v.c(), k = J(), p && p.c(), M = J(), _ && _.c(), F = J(), w && w.c(), l(o, "class", "search-button svelte-zh3kmv"), l(o, "type", "button"), l(
        a,
        "placeholder",
        /*placeholder*/
        i[8]
      ), l(
        a,
        "aria-label",
        /*placeholder*/
        i[8]
      ), l(a, "class", "svelte-zh3kmv"), l(f, "type", "button"), l(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), l(f, "class", "svelte-zh3kmv"), l(u, "class", "clear-button-container svelte-zh3kmv"), se(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), l(r, "class", "input-group svelte-zh3kmv"), l(t, "tabindex", "0"), l(t, "class", P = lt(
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
    m(L, B) {
      A(L, e, B), A(L, t, B), C(t, r), C(r, o), ie(c, o, null), C(r, n), C(r, a), i[61](a), ct(
        a,
        /*searchValue*/
        i[1]
      ), C(r, d), C(r, u), C(u, f), ie(b, f, null), C(u, h), v && v.m(u, null), C(r, k), p && p.m(r, null), C(r, M), _ && _.m(r, null), C(t, F), ~y && W[y].m(t, null), R = !0, S || (g = [
        Q(
          o,
          "click",
          /*click_handler*/
          i[60]
        ),
        Q(
          a,
          "input",
          /*input_1_input_handler*/
          i[62]
        ),
        Q(
          a,
          "focus",
          /*focus_handler*/
          i[63]
        ),
        Q(
          a,
          "blur",
          /*blur_handler*/
          i[64]
        ),
        Q(
          a,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        Q(
          a,
          "input",
          /*input_handler*/
          i[65]
        ),
        Q(
          f,
          "click",
          /*click_handler_1*/
          i[66]
        ),
        Q(t, "submit", gi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], S = !0);
    },
    p(L, B) {
      (!R || B[0] & /*placeholder*/
      256) && l(
        a,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!R || B[0] & /*placeholder*/
      256) && l(
        a,
        "aria-label",
        /*placeholder*/
        L[8]
      ), B[0] & /*searchValue*/
      2 && a.value !== /*searchValue*/
      L[1] && ct(
        a,
        /*searchValue*/
        L[1]
      ), (!R || B[0] & /*clearButtonTitle*/
      8) && l(
        f,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[19] ? v ? B[0] & /*abortController*/
      524288 && H(v, 1) : (v = kt(), v.c(), H(v, 1), v.m(u, null)) : v && (De(), G(v, 1, 1, () => {
        v = null;
      }), Ae()), (!R || B[0] & /*searchValue*/
      2) && se(
        u,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? p ? (p.p(L, B), B[0] & /*enableReverse*/
      32 && H(p, 1)) : (p = pt(L), p.c(), H(p, 1), p.m(r, M)) : p && (De(), G(p, 1, 1, () => {
        p = null;
      }), Ae()), _ && _.p && (!R || B[1] & /*$$scope*/
      134217728) && di(
        _,
        m,
        L,
        /*$$scope*/
        L[58],
        R ? ui(
          m,
          /*$$scope*/
          L[58],
          B,
          null
        ) : fi(
          /*$$scope*/
          L[58]
        ),
        null
      );
      let K = y;
      y = he(L), y === K ? ~y && W[y].p(L, B) : (w && (De(), G(W[K], 1, 1, () => {
        W[K] = null;
      }), Ae()), ~y ? (w = W[y], w ? w.p(L, B) : (w = W[y] = x[y](L), w.c()), H(w, 1), w.m(t, null)) : w = null), (!R || B[0] & /*className*/
      4 && P !== (P = lt(
        /*className*/
        L[2]
      ) + " svelte-zh3kmv")) && l(t, "class", P), (!R || B[0] & /*className, collapsed, searchValue*/
      22) && se(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      R || (H(I), H(c.$$.fragment, L), H(b.$$.fragment, L), H(v), H(p), H(_, L), H(w), R = !0);
    },
    o(L) {
      G(I), G(c.$$.fragment, L), G(b.$$.fragment, L), G(v), G(p), G(_, L), G(w), R = !1;
    },
    d(L) {
      L && (U(e), U(t)), re(c), i[61](null), re(b), v && v.d(), p && p.d(), _ && _.d(L), ~y && W[y].d(), S = !1, ne(g);
    }
  };
}
function ur(i, e, t) {
  let r, { $$slots: o = {}, $$scope: c } = e, { class: n = void 0 } = e, { apiKey: a } = e, { bbox: d = void 0 } = e, { clearButtonTitle: u = "clear" } = e, { clearOnBlur: f = !1 } = e, { collapsed: b = !1 } = e, { country: h = void 0 } = e, { debounceSearch: k = 200 } = e, { enableReverse: M = !1 } = e, { errorMessage: F = "Something went wrong…" } = e, { filter: y = () => !0 } = e, { flyTo: w = !0 } = e, { fuzzyMatch: P = !0 } = e, { language: R = void 0 } = e, { limit: S = void 0 } = e, { mapController: g = void 0 } = e, { minLength: I = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: p = "Search" } = e, { proximity: m = [{ type: "server-geolocation" }] } = e, { reverseActive: _ = M === "always" } = e, { reverseButtonTitle: x = "toggle reverse geocoding" } = e, { searchValue: W = "" } = e, { showFullGeometry: he = !0 } = e, { showPlaceType: L = "ifNeeded" } = e, { showResultsWhileTyping: B = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: be = !1 } = e, { markerOnSelected: Me = !0 } = e, { types: ce = void 0 } = e, { excludeTypes: We = !1 } = e, { zoom: ke = 16 } = e, { maxZoom: ve = 18 } = e, { apiUrl: Fe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Pe = {} } = e, { iconsBaseUrl: it = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.3.0/icons/" } = e, { adjustUrlQuery: He = () => {
  } } = e;
  function Ut() {
    $.focus();
  }
  function Bt() {
    $.blur();
  }
  function rt(s, Z = !0, V = !1) {
    t(1, W = s), Z ? (t(15, z = -1), ot()) : (qe(!V, V), setTimeout(() => {
      $.focus(), $.select();
    }));
  }
  function Dt() {
    t(14, N = void 0), t(55, E = void 0), t(15, z = -1);
  }
  function At() {
    t(54, j = []), t(55, E = void 0);
  }
  let Le = !1, N, j, E, nt = "", $, z = -1, ee, Re = [], ue, _e, Ie, je;
  const Ft = /* @__PURE__ */ new Set(), oe = Li();
  vi(() => {
    g && (g.setEventHandler(void 0), g.indicateReverse(!1), g.setSelectedMarker(-1), g.setMarkers(void 0, void 0));
  });
  function ot(s) {
    if (_e && (clearTimeout(_e), _e = void 0), z > -1 && N)
      t(55, E = N[z]), t(1, W = E.place_type[0] === "reverse" ? E.place_name : E.place_name.replace(/,.*/, "")), t(18, ee = void 0), t(54, j = void 0), t(15, z = -1);
    else if (W) {
      const Z = s || !Ze(W);
      Ge(W, { exact: !0 }).then(() => {
        t(54, j = N), t(55, E = void 0), Z && Pt();
      }).catch((V) => t(18, ee = V));
    }
  }
  function Ze(s) {
    try {
      return nr(s, 6);
    } catch {
      return !1;
    }
  }
  async function Ge(s, { byId: Z = !1, exact: V = !1 } = {}) {
    t(18, ee = void 0), ue == null || ue.abort();
    const X = new AbortController();
    t(19, ue = X);
    try {
      const T = Ze(s), Y = new URLSearchParams();
      if (R !== void 0 && Y.set("language", Array.isArray(R) ? R.join(",") : R ?? ""), ce && Y.set("types", ce.join(",")), We && Y.set("excludeTypes", String(We)), d && Y.set("bbox", d.map((ze) => ze.toFixed(6)).join(",")), h && Y.set("country", Array.isArray(h) ? h.join(",") : h), !Z && !T) {
        const ze = await Ki(g, m, X);
        ze && Y.set("proximity", ze), (V || !B) && Y.set("autocomplete", "false"), Y.set("fuzzyMatch", String(P));
      }
      S !== void 0 && (!T || (ce == null ? void 0 : ce.length) === 1) && Y.set("limit", String(S)), Y.set("key", a), He(Y);
      const Oe = Fe + "/" + encodeURIComponent(T ? T.decimalLongitude + "," + T.decimalLatitude : s) + ".json?" + Y.toString();
      if (Oe === nt) {
        Z ? (t(14, N = void 0), t(55, E = Re[0])) : t(14, N = Re);
        return;
      }
      nt = Oe;
      const Ke = await fetch(Oe, { signal: X.signal, ...Pe });
      if (!Ke.ok)
        throw new Error(await Ke.text());
      const Ve = await Ke.json();
      oe("response", { url: Oe, featureCollection: Ve }), Z ? (t(14, N = void 0), t(55, E = Ve.features[0]), Re = [E]) : (t(14, N = Ve.features.filter(y)), T && N.unshift({
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
      }), Re = N, T && $.focus());
    } catch (T) {
      if (T && typeof T == "object" && "name" in T && T.name === "AbortError")
        return;
      throw T;
    } finally {
      X === ue && t(19, ue = void 0);
    }
  }
  function Pt() {
    var V;
    if (!(j != null && j.length) || !w)
      return;
    const s = [180, 90, -180, -90], Z = !j.some((X) => !X.matching_text);
    for (const X of j)
      if (Z || !X.matching_text)
        for (const T of [0, 1, 2, 3])
          s[T] = Math[T < 2 ? "min" : "max"](s[T], ((V = X.bbox) == null ? void 0 : V[T]) ?? X.center[T % 2]);
    g && j.length > 0 && (E && s[0] === s[2] && s[1] === s[3] ? g.flyTo(E.center, ke) : g.fitBounds(gt(s), 50, ve));
  }
  function Ht(s) {
    t(0, _ = M === "always"), t(14, N = void 0), t(55, E = void 0), t(15, z = -1), rt(s[1].toFixed(6) + ", " + Qi(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function jt(s) {
    if (!N)
      return;
    let Z = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    Z && (z === (K ? 0 : -1) && Z === -1 && t(15, z = N.length), t(15, z += Z), z >= N.length && t(15, z = -1), z < 0 && K && t(15, z = 0), s.preventDefault());
  }
  function qe(s = !0, Z = !1) {
    if (t(18, ee = void 0), B || Z) {
      if (_e && clearTimeout(_e), W.length < I)
        return;
      const V = W;
      _e = window.setTimeout(
        () => {
          Ge(V).catch((X) => t(18, ee = X));
        },
        s ? k : 0
      );
    } else
      t(14, N = void 0), t(18, ee = void 0);
  }
  function Qe(s) {
    t(55, E = s), t(1, W = s.place_name), t(15, z = -1);
  }
  const Zt = () => $.focus();
  function Gt(s) {
    xe[s ? "unshift" : "push"](() => {
      $ = s, t(17, $);
    });
  }
  function qt() {
    W = this.value, t(1, W), t(13, Le), t(27, f);
  }
  const Qt = () => t(13, Le = !0), Kt = () => t(13, Le = !1), Vt = () => qe(), Jt = () => {
    t(1, W = ""), $.focus();
  }, Xt = () => t(0, _ = !_), Yt = () => t(18, ee = void 0), xt = (s) => t(15, z = s), $t = (s) => Qe(s), ei = () => {
    K || t(15, z = -1);
  }, ti = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, n = s.class), "apiKey" in s && t(25, a = s.apiKey), "bbox" in s && t(26, d = s.bbox), "clearButtonTitle" in s && t(3, u = s.clearButtonTitle), "clearOnBlur" in s && t(27, f = s.clearOnBlur), "collapsed" in s && t(4, b = s.collapsed), "country" in s && t(28, h = s.country), "debounceSearch" in s && t(29, k = s.debounceSearch), "enableReverse" in s && t(5, M = s.enableReverse), "errorMessage" in s && t(6, F = s.errorMessage), "filter" in s && t(30, y = s.filter), "flyTo" in s && t(31, w = s.flyTo), "fuzzyMatch" in s && t(32, P = s.fuzzyMatch), "language" in s && t(33, R = s.language), "limit" in s && t(34, S = s.limit), "mapController" in s && t(35, g = s.mapController), "minLength" in s && t(36, I = s.minLength), "noResultsMessage" in s && t(7, v = s.noResultsMessage), "placeholder" in s && t(8, p = s.placeholder), "proximity" in s && t(37, m = s.proximity), "reverseActive" in s && t(0, _ = s.reverseActive), "reverseButtonTitle" in s && t(9, x = s.reverseButtonTitle), "searchValue" in s && t(1, W = s.searchValue), "showFullGeometry" in s && t(38, he = s.showFullGeometry), "showPlaceType" in s && t(10, L = s.showPlaceType), "showResultsWhileTyping" in s && t(39, B = s.showResultsWhileTyping), "selectFirst" in s && t(11, K = s.selectFirst), "flyToSelected" in s && t(40, be = s.flyToSelected), "markerOnSelected" in s && t(41, Me = s.markerOnSelected), "types" in s && t(42, ce = s.types), "excludeTypes" in s && t(43, We = s.excludeTypes), "zoom" in s && t(44, ke = s.zoom), "maxZoom" in s && t(45, ve = s.maxZoom), "apiUrl" in s && t(46, Fe = s.apiUrl), "fetchParameters" in s && t(47, Pe = s.fetchParameters), "iconsBaseUrl" in s && t(12, it = s.iconsBaseUrl), "adjustUrlQuery" in s && t(48, He = s.adjustUrlQuery), "$$scope" in s && t(58, c = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, _ = M === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      t(16, Ie = Le), f && !Le && t(1, W = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    32 && W.length < I && (t(55, E = void 0), t(14, N = void 0), t(18, ee = void 0), t(54, j = N)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && he && E && !E.address && E.geometry.type === "Point" && E.place_type[0] !== "reverse" && Ge(E.id, { byId: !0 }).catch((s) => t(18, ee = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (g && E && E.id !== je && w && (!E.bbox || E.bbox[0] === E.bbox[2] && E.bbox[1] === E.bbox[3] ? g.flyTo(E.center, E.id.startsWith("poi.") || E.id.startsWith("address.") ? ve : ke) : g.fitBounds(gt(E.bbox), 50, ve), t(14, N = void 0), t(54, j = void 0), t(15, z = -1)), t(56, je = E == null ? void 0 : E.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && K && N != null && N.length && t(15, z = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (K || t(15, z = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    8388608 && j !== N && t(54, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && g && g.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          _ && Ht(s.coordinates);
          break;
        case "markerClick":
          {
            const Z = N == null ? void 0 : N.find((V) => V.id === s.id);
            Z && Qe(Z);
          }
          break;
        case "markerMouseEnter":
          j && t(15, z = Ie ? (N == null ? void 0 : N.findIndex((Z) => Z.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, z = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(57, r = N == null ? void 0 : N[z]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && g && r && w && be && g.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? ve : ke), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Me || g == null || g.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && g && Me && !j && (g.setMarkers(r ? [r] : void 0, void 0), g.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && g && g.setMarkers(j, E), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && j && g && g.setSelectedMarker(z), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16 && g) {
      const s = Ze(W);
      g.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    67108864 && oe("select", r), i.$$.dirty[1] & /*picked*/
    16777216 && oe("pick", E), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && oe("optionsVisibilityChange", Ie && !!N), i.$$.dirty[0] & /*listFeatures*/
    16384 && oe("featuresListed", N), i.$$.dirty[1] & /*markedFeatures*/
    8388608 && oe("featuresMarked", j), i.$$.dirty[0] & /*reverseActive*/
    1 && oe("reverseToggle", _), i.$$.dirty[0] & /*searchValue*/
    2 && oe("queryChange", W), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && g && g.indicateReverse(_);
  }, [
    _,
    W,
    n,
    u,
    b,
    M,
    F,
    v,
    p,
    x,
    L,
    K,
    it,
    Le,
    N,
    z,
    Ie,
    $,
    ee,
    ue,
    Ft,
    ot,
    jt,
    qe,
    Qe,
    a,
    d,
    f,
    h,
    k,
    y,
    w,
    P,
    R,
    S,
    g,
    I,
    m,
    he,
    B,
    be,
    Me,
    ce,
    We,
    ke,
    ve,
    Fe,
    Pe,
    He,
    Ut,
    Bt,
    rt,
    Dt,
    At,
    j,
    E,
    je,
    r,
    c,
    o,
    Zt,
    Gt,
    qt,
    Qt,
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
  const r = st(), o = st(), c = { ...e };
  for (const n of Nt)
    delete c[Ct(n)];
  Xe(() => {
    if (!r.current)
      throw new Error();
    const n = new dr({
      target: r.current,
      props: c
    });
    return o.current = n, () => n.$destroy();
  }, []);
  for (const n of fr)
    Xe(() => {
      o.current && e[n] !== void 0 && o.current.$set({ [n]: e[n] });
    }, [e[n]]);
  for (const n of Nt) {
    const a = e[Ct(n)];
    Xe(
      () => {
        var d;
        return a && ((d = o.current) == null ? void 0 : d.$on(n, (u) => {
          a(u.detail);
        }));
      },
      [a]
    );
  }
  return oi(t, () => ({
    setQuery: (n, a = !0) => {
      var d;
      return (d = o.current) == null ? void 0 : d.setQuery(n, a);
    },
    clearMap: () => {
      var n;
      return (n = o.current) == null ? void 0 : n.clearMap();
    },
    clearList: () => {
      var n;
      return (n = o.current) == null ? void 0 : n.clearList();
    },
    focus: () => {
      var n;
      return (n = o.current) == null ? void 0 : n.focus();
    },
    blur: () => {
      var n;
      return (n = o.current) == null ? void 0 : n.blur();
    }
  })), si("div", { ref: r });
});
export {
  hr as GeocodingControl
};
//# sourceMappingURL=react.js.map
