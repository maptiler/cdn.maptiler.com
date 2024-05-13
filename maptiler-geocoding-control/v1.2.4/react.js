var ri = Object.defineProperty;
var ni = (i, e, t) => e in i ? ri(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Xe = (i, e, t) => (ni(i, typeof e != "symbol" ? e + "" : e, t), t);
import { forwardRef as oi, useRef as at, useEffect as Ye, useImperativeHandle as si, createElement as ai } from "react";
function D() {
}
function li(i, e) {
  for (const t in e)
    i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Mt(i) {
  return i();
}
function lt() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(i) {
  i.forEach(Mt);
}
function Wt(i) {
  return typeof i == "function";
}
function fe(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ue;
function Q(i, e) {
  return i === e ? !0 : (Ue || (Ue = document.createElement("a")), Ue.href = e, i === Ue.href);
}
function ci(i) {
  return Object.keys(i).length === 0;
}
function ui(i, e, t, r) {
  if (i) {
    const o = Rt(i, e, t, r);
    return i[0](o);
  }
}
function Rt(i, e, t, r) {
  return i[1] && r ? li(t.ctx.slice(), i[1](r(e))) : t.ctx;
}
function di(i, e, t, r) {
  if (i[2] && r) {
    const o = i[2](r(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], n = Math.max(e.dirty.length, o.length);
      for (let a = 0; a < n; a += 1)
        l[a] = e.dirty[a] | o[a];
      return l;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function fi(i, e, t, r, o, l) {
  if (o) {
    const n = Rt(e, t, r, l);
    i.p(n, o);
  }
}
function mi(i) {
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
function J() {
  return ae(" ");
}
function gi() {
  return ae("");
}
function q(i, e, t, r) {
  return i.addEventListener(e, t, r), () => i.removeEventListener(e, t, r);
}
function hi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function c(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function bi(i) {
  return Array.from(i.childNodes);
}
function Ce(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ut(i, e) {
  i.value = e ?? "";
}
function Be(i, e, t, r) {
  t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, "");
}
function se(i, e, t) {
  i.classList.toggle(e, !!t);
}
function vi(i, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: r });
}
let Te;
function Ne(i) {
  Te = i;
}
function It() {
  if (!Te)
    throw new Error("Function called outside component initialization");
  return Te;
}
function Li(i) {
  It().$$.on_destroy.push(i);
}
function _i() {
  const i = It();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const l = vi(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return o.slice().forEach((n) => {
        n.call(i, l);
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
const ft = [], yi = /* @__PURE__ */ Promise.resolve();
let et = !1;
function wi() {
  et || (et = !0, yi.then(Ot));
}
function tt(i) {
  Ee.push(i);
}
const xe = /* @__PURE__ */ new Set();
let ye = 0;
function Ot() {
  if (ye !== 0)
    return;
  const i = Te;
  do {
    try {
      for (; ye < we.length; ) {
        const e = we[ye];
        ye++, Ne(e), Ei(e.$$);
      }
    } catch (e) {
      throw we.length = 0, ye = 0, e;
    }
    for (Ne(null), we.length = 0, ye = 0; $e.length; )
      $e.pop()();
    for (let e = 0; e < Ee.length; e += 1) {
      const t = Ee[e];
      xe.has(t) || (xe.add(t), t());
    }
    Ee.length = 0;
  } while (we.length);
  for (; ft.length; )
    ft.pop()();
  et = !1, xe.clear(), Ne(i);
}
function Ei(i) {
  if (i.fragment !== null) {
    i.update(), ne(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(tt);
  }
}
function pi(i) {
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
function Si(i, e, t, r, o, l, n, a, d, u, f, b) {
  let h = i.length, k = l.length, W = h;
  const F = {};
  for (; W--; )
    F[i[W].key] = W;
  const y = [], w = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), R = [];
  for (W = k; W--; ) {
    const v = b(o, l, W), S = t(v);
    let m = n.get(S);
    m ? R.push(() => m.p(v, e)) : (m = u(S, v), m.c()), w.set(S, y[W] = m), S in F && P.set(S, Math.abs(W - F[S]));
  }
  const E = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  function I(v) {
    H(v, 1), v.m(a, f), n.set(v.key, v), f = v.first, k--;
  }
  for (; h && k; ) {
    const v = y[k - 1], S = i[h - 1], m = v.key, _ = S.key;
    v === S ? (f = v.first, h--, k--) : w.has(_) ? !n.has(m) || E.has(m) ? I(v) : g.has(_) ? h-- : P.get(m) > P.get(_) ? (g.add(m), I(v)) : (E.add(_), h--) : (d(S, n), h--);
  }
  for (; h--; ) {
    const v = i[h];
    w.has(v.key) || d(v, n);
  }
  for (; k; )
    I(y[k - 1]);
  return ne(R), y;
}
function le(i) {
  i && i.c();
}
function ie(i, e, t) {
  const { fragment: r, after_update: o } = i.$$;
  r && r.m(e, t), tt(() => {
    const l = i.$$.on_mount.map(Mt).filter(Wt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : ne(l), i.$$.on_mount = [];
  }), o.forEach(tt);
}
function re(i, e) {
  const t = i.$$;
  t.fragment !== null && (pi(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ni(i, e) {
  i.$$.dirty[0] === -1 && (we.push(i), wi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(i, e, t, r, o, l, n = null, a = [-1]) {
  const d = Te;
  Ne(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: D,
    not_equal: o,
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
  n && n(u.root);
  let f = !1;
  if (u.ctx = t ? t(i, e.props || {}, (b, h, ...k) => {
    const W = k.length ? k[0] : h;
    return u.ctx && o(u.ctx[b], u.ctx[b] = W) && (!u.skip_bound && u.bound[b] && u.bound[b](W), f && Ni(i, b)), h;
  }) : [], u.update(), f = !0, ne(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = bi(e.target);
      u.fragment && u.fragment.l(b), b.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && H(i.$$.fragment), ie(i, e.target, e.anchor), Ot();
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
    if (!Wt(t))
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
    this.$$set && !ci(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ci = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ci);
function Ti(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), c(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), c(e, "viewBox", "0 0 14 14"), c(e, "width", "13"), c(e, "height", "13"), c(e, "class", "svelte-en2qvf");
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
      e = te("svg"), t = te("path"), c(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), c(e, "viewBox", "0 0 30 30"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "svelte-d2loi5");
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
class Ut extends ge {
  constructor(e) {
    super(), me(this, e, null, Mi, fe, {});
  }
}
function Wi(i) {
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
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && c(e, "src", t), o & /*placeType*/
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
      i[3] + "reverse.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "reverse.svg") && c(e, "src", t), o & /*placeType*/
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
      i[3] + "poi.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && c(e, "src", t), o & /*placeType*/
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
      i[3] + "postal_code.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && c(e, "src", t), o & /*placeType*/
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
      i[3] + "street.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && c(e, "src", t), o & /*placeType*/
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
      i[3] + "road.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && c(e, "src", t), o & /*placeType*/
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
    m(r, o) {
      A(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && c(e, "src", t), o & /*placeType*/
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
function Di(i) {
  let e, t, r, o;
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
    m(l, n) {
      A(l, e, n), r || (o = q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), r = !0);
    },
    p(l, n) {
      n & /*imageUrl*/
      32 && !Q(e.src, t = /*imageUrl*/
      l[5]) && c(e, "src", t), n & /*category*/
      16 && c(
        e,
        "alt",
        /*category*/
        l[4]
      );
    },
    d(l) {
      l && U(e), r = !1, o();
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
function Ai(i) {
  var v, S;
  let e, t, r, o, l, n, a, d, u = (
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
  ), k, W, F = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), y, w, P;
  function R(m, _) {
    var x, M;
    return _ & /*feature*/
    1 && (t = null), _ & /*feature*/
    1 && (r = null), _ & /*feature*/
    1 && (o = null), /*imageUrl*/
    m[5] ? Di : (
      /*feature*/
      m[0].address ? Bi : (
        /*feature*/
        ((x = m[0].properties) == null ? void 0 : x.kind) === "road" || /*feature*/
        ((M = m[0].properties) == null ? void 0 : M.kind) === "road_relation" ? Ui : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("address.")), t ? zi : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? Oi : (o == null && (o = !!/*feature*/
        m[0].id.startsWith("poi.")), o ? Ii : (
          /*isReverse*/
          m[7] ? Ri : Wi
        ))))
      )
    );
  }
  let E = R(i, -1), g = E(i), I = h && gt(i);
  return {
    c() {
      e = O("li"), g.c(), l = J(), n = O("span"), a = O("span"), d = O("span"), f = ae(u), b = J(), I && I.c(), k = J(), W = O("span"), y = ae(F), c(d, "class", "primary svelte-ltkwvy"), c(a, "class", "svelte-ltkwvy"), c(W, "class", "line2 svelte-ltkwvy"), c(n, "class", "texts svelte-ltkwvy"), c(e, "tabindex", "0"), c(
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
    m(m, _) {
      A(m, e, _), g.m(e, null), C(e, l), C(e, n), C(n, a), C(a, d), C(d, f), C(a, b), I && I.m(a, null), C(n, k), C(n, W), C(W, y), w || (P = [
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
    p(m, [_]) {
      var x, M;
      E === (E = R(m, _)) && g ? g.p(m, _) : (g.d(1), g = E(m), g && (g.c(), g.m(e, l))), _ & /*feature*/
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
      ((M = m[0].properties) == null ? void 0 : M.kind) !== "road_relation" && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[7]), h ? I ? I.p(m, _) : (I = gt(m), I.c(), I.m(a, null)) : I && (I.d(1), I = null), _ & /*feature*/
      1 && F !== (F = /*isReverse*/
      (m[7] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ce(y, F), _ & /*selected*/
      2 && c(
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
function Fi(i, e, t) {
  var R;
  let r, o, { feature: l } = e, { selected: n = !1 } = e, { showPlaceType: a } = e, { missingIconsCache: d } = e, { iconsBaseUrl: u } = e;
  const f = (R = l.properties) == null ? void 0 : R.categories;
  let b, h, k = 0, W = l.place_type[0] === "reverse";
  function F(E) {
    h && d.add(h), t(10, k++, k);
  }
  function y(E) {
    dt.call(this, i, E);
  }
  function w(E) {
    dt.call(this, i, E);
  }
  const P = (E) => F(E.currentTarget);
  return i.$$set = (E) => {
    "feature" in E && t(0, l = E.feature), "selected" in E && t(1, n = E.selected), "showPlaceType" in E && t(2, a = E.showPlaceType), "missingIconsCache" in E && t(9, d = E.missingIconsCache), "iconsBaseUrl" in E && t(3, u = E.iconsBaseUrl);
  }, i.$$.update = () => {
    var E, g, I, v;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, r--, r), t(4, b = f == null ? void 0 : f[r]), t(5, h = b ? u + b.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!h || d.has(h)));
    i.$$.dirty & /*feature*/
    1 && t(6, o = l.id.startsWith("poi.") ? (g = (E = l.properties) == null ? void 0 : E.categories) == null ? void 0 : g.join(", ") : ((v = (I = l.properties) == null ? void 0 : I.place_type_name) == null ? void 0 : v[0]) ?? l.place_type[0]);
  }, t(11, r = (f == null ? void 0 : f.length) ?? 0), [
    l,
    n,
    a,
    u,
    b,
    h,
    o,
    W,
    F,
    d,
    k,
    r,
    y,
    w,
    P
  ];
}
class Pi extends ge {
  constructor(e) {
    super(), me(this, e, Fi, Ai, fe, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Hi(i) {
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
class ji extends ge {
  constructor(e) {
    super(), me(this, e, null, Hi, fe, {});
  }
}
function Zi(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), c(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), c(e, "viewBox", "0 0 60.006 21.412"), c(e, "width", "14"), c(e, "height", "20"), c(e, "class", "svelte-en2qvf");
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
class Gi extends ge {
  constructor(e) {
    super(), me(this, e, null, Zi, fe, {});
  }
}
function Qi(i) {
  let e, t, r;
  return {
    c() {
      e = te("svg"), t = te("circle"), r = te("path"), c(t, "cx", "4.789"), c(t, "cy", "4.787"), c(t, "r", "3.85"), Be(t, "stroke-width", "1.875"), Be(t, "fill", "none"), c(r, "d", "M12.063 12.063 7.635 7.635"), Be(r, "stroke-width", "1.875"), Be(r, "stroke-linecap", "round"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "width", "13"), c(e, "height", "13"), c(e, "viewBox", "0 0 13 13"), c(e, "class", "svelte-1bpbt60");
    },
    m(o, l) {
      A(o, e, l), C(e, t), C(e, r);
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
    super(), me(this, e, null, Qi, fe, {});
  }
}
function Ki(i, e, t) {
  const r = e[1], o = e[0], l = r - o;
  return i === r && t ? i : ((i - o) % l + l) % l + o;
}
function ht(i) {
  const e = [...i];
  return e[2] < e[0] && (e[2] += 360), e;
}
let ke;
async function Vi(i, e, t) {
  const r = i == null ? void 0 : i.getCenterAndZoom();
  for (const o of e ?? [])
    if (!(r && (o.minZoom != null && o.minZoom > r[0] || o.maxZoom != null && o.maxZoom < r[0]))) {
      if (o.type === "fixed")
        return o.coordinates.join(",");
      e:
        if (o.type === "client-geolocation") {
          if (ke && o.cachedLocationExpiry && ke.time + o.cachedLocationExpiry > Date.now()) {
            if (!ke.coords)
              break e;
            return ke.coords;
          }
          let l;
          try {
            return l = await new Promise((n, a) => {
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
            }), l;
          } catch {
          } finally {
            o.cachedLocationExpiry && (ke = {
              time: Date.now(),
              coords: l
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
const bt = /([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})/, vt = /(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?/i, Lt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?/i, _t = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?/i, yt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?/i;
function Ji(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    if (i == "DD")
      return this.decimalCoordinates;
    const e = this.decimalCoordinates.split(",").map((n) => Number(n.trim()));
    let t = wt(e[0], i), r = wt(e[1], i);
    t.endsWith('.0"') && r.endsWith('.0"') && (t = t.replace(/\.0"$/, '"'), r = r.replace(/\.0"$/, '"'));
    const o = e[0] >= 0 ? " N" : " S", l = e[1] >= 0 ? " E" : " W";
    return `${t + o}, ${r + l}`;
  } else
    throw new Error("no decimal coordinates to convert");
}
function wt(i, e) {
  const t = Math.abs(i), r = Math.floor(t), o = (t - r) * 60;
  if (e == "DM") {
    let a = Xi(o, 3).toFixed(3).padStart(6, "0");
    return `${r}° ${a}'`;
  }
  let l = Math.floor(o), n = ((o - l) * 60).toFixed(1).padStart(4, "0");
  return l = l.toString().padStart(2, "0"), `${r}° ${l}' ${n}"`;
}
function Xi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function it(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, r = null, o = "", l = "", n = [], a = !1;
  if (bt.test(i))
    if (n = bt.exec(i), a = Se(n), a)
      t = Math.abs(n[1]) + n[2] / 60, Number(n[1]) < 0 && (t *= -1), r = Math.abs(n[3]) + n[4] / 60, Number(n[3]) < 0 && (r *= -1);
    else
      throw new Error("invalid coordinate format");
  else if (vt.test(i))
    if (n = vt.exec(i), a = Se(n), a) {
      if (t = n[2], r = n[6], t.includes(",") && (t = t.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      n[1] ? (o = n[1], l = n[5]) : n[4] && (o = n[4], l = n[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Lt.test(i))
    if (n = Lt.exec(i), a = Se(n), a)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60), n[6] && (t += n[6].replace(",", ".") / 3600), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[9])), n[11] && (r += n[11] / 60), n[13] && (r += n[13].replace(",", ".") / 3600), parseInt(n[9]) < 0 && (r = -1 * r), n[1] ? (o = n[1], l = n[8]) : n[7] && (o = n[7], l = n[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (_t.test(i))
    if (n = _t.exec(i), a = Se(n), a)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60), n[6] && (t += n[6] / 3600), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12] / 60), n[14] && (r += n[14] / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], l = n[9]) : n[8] && (o = n[8], l = n[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (yt.test(i))
    if (n = yt.exec(i), a = Se(n), a)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4].replace(",", ".") / 60), n[6] && (t += n[6].replace(",", ".") / 3600), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12].replace(",", ".") / 60), n[14] && (r += n[14].replace(",", ".") / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], l = n[9]) : n[8] && (o = n[8], l = n[16]);
    else
      throw new Error("invalid coordinates format");
  if (a) {
    if (Math.abs(r) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if ((o || l) && (!o || !l))
      throw new Error("invalid coordinates format");
    if (o && o == l)
      throw new Error("invalid coordinates format");
    let d = /S|SOUTH/i;
    d.test(o) && t > 0 && (t = -1 * t), d = /W|WEST/i, d.test(l) && r > 0 && (r = -1 * r);
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
      closeEnough: Yi,
      toCoordinateFormat: Ji
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
  for (let l = 0; l < o; l++) {
    const n = e[l], a = e[l + o], d = t.test(n) && t.test(a), u = r.test(n) && r.test(a), f = n == a;
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
function Et(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Yi(i) {
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Et(this.decimalLatitude, Number(e[0])) && Et(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const xi = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
it.to = xi;
const $i = [
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
], er = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, tr = [
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
], ir = [
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
function rr() {
  const i = [];
  return $i.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...er });
  }), [...i, ...tr, ...ir];
}
const nr = rr();
it.formats = nr.map((i) => i.verbatimCoordinates);
const or = it;
function pt(i, e, t) {
  const r = i.slice();
  return r[81] = e[t], r[83] = t, r;
}
function kt(i) {
  let e, t;
  return e = new ji({}), {
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
function St(i) {
  let e, t, r, o, l;
  return t = new Gi({}), {
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
    m(n, a) {
      A(n, e, a), ie(t, e, null), r = !0, o || (l = q(
        e,
        "click",
        /*click_handler_2*/
        i[67]
      ), o = !0);
    },
    p(n, a) {
      (!r || a[0] & /*reverseButtonTitle*/
      512) && c(
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
      n && U(e), re(t), o = !1, l();
    }
  };
}
function sr(i) {
  let e, t = [], r = /* @__PURE__ */ new Map(), o, l, n, a = mt(
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
    let f = pt(i, a, u), b = d(f);
    r.set(b, t[u] = Nt(b, f));
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
      o = !0, l || (n = [
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
      ), Ae(), t = Si(t, f, d, 1, u, a, r, e, ki, Nt, null, pt), Fe());
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
      l = !1, ne(n);
    }
  };
}
function ar(i) {
  let e, t, r, o, l, n;
  return t = new Ut({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = J(), o = O("div"), l = ae(
        /*noResultsMessage*/
        i[7]
      ), c(o, "class", "svelte-zh3kmv"), c(e, "class", "no-results svelte-zh3kmv");
    },
    m(a, d) {
      A(a, e, d), ie(t, e, null), C(e, r), C(e, o), C(o, l), n = !0;
    },
    p(a, d) {
      (!n || d[0] & /*noResultsMessage*/
      128) && Ce(
        l,
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
function lr(i) {
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
function cr(i) {
  let e, t, r, o, l, n, a, d, u, f, b;
  return t = new Ut({}), d = new zt({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = J(), o = O("div"), l = ae(
        /*errorMessage*/
        i[6]
      ), n = J(), a = O("button"), le(d.$$.fragment), c(o, "class", "svelte-zh3kmv"), c(a, "class", "svelte-zh3kmv"), c(e, "class", "error svelte-zh3kmv");
    },
    m(h, k) {
      A(h, e, k), ie(t, e, null), C(e, r), C(e, o), C(o, l), C(e, n), C(e, a), ie(d, a, null), u = !0, f || (b = q(
        a,
        "click",
        /*click_handler_3*/
        i[68]
      ), f = !0);
    },
    p(h, k) {
      (!u || k[0] & /*errorMessage*/
      64) && Ce(
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
function Nt(i, e) {
  let t, r, o;
  function l() {
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
  return r = new Pi({
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
  }), r.$on("mouseenter", l), r.$on("focus", n), {
    key: i,
    first: null,
    c() {
      t = gi(), le(r.$$.fragment), this.first = t;
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
function ur(i) {
  let e, t, r, o, l, n, a, d, u, f, b, h, k, W, F, y, w, P, R, E, g, I = !1;
  l = new qi({}), b = new zt({});
  let v = (
    /*abortController*/
    i[19] && kt()
  ), S = (
    /*enableReverse*/
    i[5] === !0 && St(i)
  );
  const m = (
    /*#slots*/
    i[59].default
  ), _ = ui(
    m,
    i,
    /*$$scope*/
    i[58],
    null
  ), x = [cr, lr, ar, sr], M = [];
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
  return ~(y = he(i)) && (w = M[y] = x[y](i)), {
    c() {
      e = J(), t = O("form"), r = O("div"), o = O("button"), le(l.$$.fragment), n = J(), a = O("input"), d = J(), u = O("div"), f = O("button"), le(b.$$.fragment), h = J(), v && v.c(), k = J(), S && S.c(), W = J(), _ && _.c(), F = J(), w && w.c(), c(o, "class", "search-button svelte-zh3kmv"), c(o, "type", "button"), c(
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
    m(L, B) {
      A(L, e, B), A(L, t, B), C(t, r), C(r, o), ie(l, o, null), C(r, n), C(r, a), i[61](a), ut(
        a,
        /*searchValue*/
        i[1]
      ), C(r, d), C(r, u), C(u, f), ie(b, f, null), C(u, h), v && v.m(u, null), C(r, k), S && S.m(r, null), C(r, W), _ && _.m(r, null), C(t, F), ~y && M[y].m(t, null), R = !0, E || (g = [
        q(
          o,
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
        q(t, "submit", hi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], E = !0);
    },
    p(L, B) {
      (!R || B[0] & /*placeholder*/
      256) && c(
        a,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!R || B[0] & /*placeholder*/
      256) && c(
        a,
        "aria-label",
        /*placeholder*/
        L[8]
      ), B[0] & /*searchValue*/
      2 && a.value !== /*searchValue*/
      L[1] && ut(
        a,
        /*searchValue*/
        L[1]
      ), (!R || B[0] & /*clearButtonTitle*/
      8) && c(
        f,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[19] ? v ? B[0] & /*abortController*/
      524288 && H(v, 1) : (v = kt(), v.c(), H(v, 1), v.m(u, null)) : v && (Ae(), G(v, 1, 1, () => {
        v = null;
      }), Fe()), (!R || B[0] & /*searchValue*/
      2) && se(
        u,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? S ? (S.p(L, B), B[0] & /*enableReverse*/
      32 && H(S, 1)) : (S = St(L), S.c(), H(S, 1), S.m(r, W)) : S && (Ae(), G(S, 1, 1, () => {
        S = null;
      }), Fe()), _ && _.p && (!R || B[1] & /*$$scope*/
      134217728) && fi(
        _,
        m,
        L,
        /*$$scope*/
        L[58],
        R ? di(
          m,
          /*$$scope*/
          L[58],
          B,
          null
        ) : mi(
          /*$$scope*/
          L[58]
        ),
        null
      );
      let K = y;
      y = he(L), y === K ? ~y && M[y].p(L, B) : (w && (Ae(), G(M[K], 1, 1, () => {
        M[K] = null;
      }), Fe()), ~y ? (w = M[y], w ? w.p(L, B) : (w = M[y] = x[y](L), w.c()), H(w, 1), w.m(t, null)) : w = null), (!R || B[0] & /*className*/
      4 && P !== (P = ct(
        /*className*/
        L[2]
      ) + " svelte-zh3kmv")) && c(t, "class", P), (!R || B[0] & /*className, collapsed, searchValue*/
      22) && se(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      R || (H(I), H(l.$$.fragment, L), H(b.$$.fragment, L), H(v), H(S), H(_, L), H(w), R = !0);
    },
    o(L) {
      G(I), G(l.$$.fragment, L), G(b.$$.fragment, L), G(v), G(S), G(_, L), G(w), R = !1;
    },
    d(L) {
      L && (U(e), U(t)), re(l), i[61](null), re(b), v && v.d(), S && S.d(), _ && _.d(L), ~y && M[y].d(), E = !1, ne(g);
    }
  };
}
function dr(i, e, t) {
  let r, { $$slots: o = {}, $$scope: l } = e, { class: n = void 0 } = e, { apiKey: a } = e, { bbox: d = void 0 } = e, { clearButtonTitle: u = "clear" } = e, { clearOnBlur: f = !1 } = e, { collapsed: b = !1 } = e, { country: h = void 0 } = e, { debounceSearch: k = 200 } = e, { enableReverse: W = !1 } = e, { errorMessage: F = "Something went wrong…" } = e, { filter: y = () => !0 } = e, { flyTo: w = !0 } = e, { fuzzyMatch: P = !0 } = e, { language: R = void 0 } = e, { limit: E = void 0 } = e, { mapController: g = void 0 } = e, { minLength: I = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: S = "Search" } = e, { proximity: m = [{ type: "server-geolocation" }] } = e, { reverseActive: _ = W === "always" } = e, { reverseButtonTitle: x = "toggle reverse geocoding" } = e, { searchValue: M = "" } = e, { showFullGeometry: he = !0 } = e, { showPlaceType: L = "ifNeeded" } = e, { showResultsWhileTyping: B = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: be = !1 } = e, { markerOnSelected: Me = !0 } = e, { types: ce = void 0 } = e, { excludeTypes: We = !1 } = e, { zoom: pe = 16 } = e, { maxZoom: ve = 18 } = e, { apiUrl: Pe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: He = {} } = e, { iconsBaseUrl: rt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.2.4/icons/" } = e, { adjustUrlQuery: je = (s) => {
  } } = e;
  function Bt() {
    $.focus();
  }
  function Dt() {
    $.blur();
  }
  function nt(s, Z = !0, V = !1) {
    t(1, M = s), Z ? (t(15, z = -1), st()) : (qe(!V, V), setTimeout(() => {
      $.focus(), $.select();
    }));
  }
  function At() {
    t(14, N = void 0), t(55, p = void 0), t(15, z = -1);
  }
  function Ft() {
    t(54, j = []), t(55, p = void 0);
  }
  let Le = !1, N, j, p, ot = "", $, z = -1, ee, Re = [], ue, _e, Ie, Ze;
  const Pt = /* @__PURE__ */ new Set(), oe = _i();
  Li(() => {
    g && (g.setEventHandler(void 0), g.indicateReverse(!1), g.setSelectedMarker(-1), g.setMarkers(void 0, void 0));
  });
  function st(s) {
    if (_e && (clearTimeout(_e), _e = void 0), z > -1 && N)
      t(55, p = N[z]), t(1, M = p.place_type[0] === "reverse" ? p.place_name : p.place_name.replace(/,.*/, "")), t(18, ee = void 0), t(54, j = void 0), t(15, z = -1);
    else if (M) {
      const Z = s || !Ge(M);
      Qe(M, { exact: !0 }).then(() => {
        t(54, j = N), t(55, p = void 0), Z && Ht();
      }).catch((V) => t(18, ee = V));
    }
  }
  function Ge(s) {
    try {
      return or(s, 6);
    } catch {
      return !1;
    }
  }
  async function Qe(s, { byId: Z = !1, exact: V = !1 } = {}) {
    t(18, ee = void 0), ue == null || ue.abort();
    const X = new AbortController();
    t(19, ue = X);
    try {
      const T = Ge(s), Y = new URLSearchParams();
      if (R !== void 0 && Y.set("language", Array.isArray(R) ? R.join(",") : R ?? ""), ce && Y.set("types", ce.join(",")), We && Y.set("excludeTypes", String(We)), d && Y.set("bbox", d.map((ze) => ze.toFixed(6)).join(",")), h && Y.set("country", Array.isArray(h) ? h.join(",") : h), !Z && !T) {
        const ze = await Vi(g, m, X);
        ze && Y.set("proximity", ze), (V || !B) && Y.set("autocomplete", "false"), Y.set("fuzzyMatch", String(P));
      }
      E !== void 0 && (!T || (ce == null ? void 0 : ce.length) === 1) && Y.set("limit", String(E)), Y.set("key", a), je(Y);
      const Oe = Pe + "/" + encodeURIComponent(T ? T.decimalLongitude + "," + T.decimalLatitude : s) + ".json?" + Y.toString();
      if (Oe === ot) {
        Z ? (t(14, N = void 0), t(55, p = Re[0])) : t(14, N = Re);
        return;
      }
      ot = Oe;
      const Ve = await fetch(Oe, { signal: X.signal, ...He });
      if (!Ve.ok)
        throw new Error(await Ve.text());
      const Je = await Ve.json();
      oe("response", { url: Oe, featureCollection: Je }), Z ? (t(14, N = void 0), t(55, p = Je.features[0]), Re = [p]) : (t(14, N = Je.features.filter(y)), T && N.unshift({
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
  function Ht() {
    var V;
    if (!(j != null && j.length) || !w)
      return;
    const s = [180, 90, -180, -90], Z = !j.some((X) => !X.matching_text);
    for (const X of j)
      if (Z || !X.matching_text)
        for (const T of [0, 1, 2, 3])
          s[T] = Math[T < 2 ? "min" : "max"](s[T], ((V = X.bbox) == null ? void 0 : V[T]) ?? X.center[T % 2]);
    g && j.length > 0 && (p && s[0] === s[2] && s[1] === s[3] ? g.flyTo(p.center, pe) : g.fitBounds(ht(s), 50, ve));
  }
  function jt(s) {
    t(0, _ = W === "always"), t(14, N = void 0), t(55, p = void 0), t(15, z = -1), nt(s[1].toFixed(6) + ", " + Ki(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Zt(s) {
    if (!N)
      return;
    let Z = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    Z && (z === (K ? 0 : -1) && Z === -1 && t(15, z = N.length), t(15, z += Z), z >= N.length && t(15, z = -1), z < 0 && K && t(15, z = 0), s.preventDefault());
  }
  function qe(s = !0, Z = !1) {
    if (t(18, ee = void 0), B || Z) {
      if (_e && clearTimeout(_e), M.length < I)
        return;
      const V = M;
      _e = window.setTimeout(
        () => {
          Qe(V).catch((X) => t(18, ee = X));
        },
        s ? k : 0
      );
    } else
      t(14, N = void 0), t(18, ee = void 0);
  }
  function Ke(s) {
    t(55, p = s), t(1, M = s.place_name), t(15, z = -1);
  }
  const Gt = () => $.focus();
  function Qt(s) {
    $e[s ? "unshift" : "push"](() => {
      $ = s, t(17, $);
    });
  }
  function qt() {
    M = this.value, t(1, M), t(13, Le), t(27, f);
  }
  const Kt = () => t(13, Le = !0), Vt = () => t(13, Le = !1), Jt = () => qe(), Xt = () => {
    t(1, M = ""), $.focus();
  }, Yt = () => t(0, _ = !_), xt = () => t(18, ee = void 0), $t = (s) => t(15, z = s), ei = (s) => Ke(s), ti = () => {
    K || t(15, z = -1);
  }, ii = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, n = s.class), "apiKey" in s && t(25, a = s.apiKey), "bbox" in s && t(26, d = s.bbox), "clearButtonTitle" in s && t(3, u = s.clearButtonTitle), "clearOnBlur" in s && t(27, f = s.clearOnBlur), "collapsed" in s && t(4, b = s.collapsed), "country" in s && t(28, h = s.country), "debounceSearch" in s && t(29, k = s.debounceSearch), "enableReverse" in s && t(5, W = s.enableReverse), "errorMessage" in s && t(6, F = s.errorMessage), "filter" in s && t(30, y = s.filter), "flyTo" in s && t(31, w = s.flyTo), "fuzzyMatch" in s && t(32, P = s.fuzzyMatch), "language" in s && t(33, R = s.language), "limit" in s && t(34, E = s.limit), "mapController" in s && t(35, g = s.mapController), "minLength" in s && t(36, I = s.minLength), "noResultsMessage" in s && t(7, v = s.noResultsMessage), "placeholder" in s && t(8, S = s.placeholder), "proximity" in s && t(37, m = s.proximity), "reverseActive" in s && t(0, _ = s.reverseActive), "reverseButtonTitle" in s && t(9, x = s.reverseButtonTitle), "searchValue" in s && t(1, M = s.searchValue), "showFullGeometry" in s && t(38, he = s.showFullGeometry), "showPlaceType" in s && t(10, L = s.showPlaceType), "showResultsWhileTyping" in s && t(39, B = s.showResultsWhileTyping), "selectFirst" in s && t(11, K = s.selectFirst), "flyToSelected" in s && t(40, be = s.flyToSelected), "markerOnSelected" in s && t(41, Me = s.markerOnSelected), "types" in s && t(42, ce = s.types), "excludeTypes" in s && t(43, We = s.excludeTypes), "zoom" in s && t(44, pe = s.zoom), "maxZoom" in s && t(45, ve = s.maxZoom), "apiUrl" in s && t(46, Pe = s.apiUrl), "fetchParameters" in s && t(47, He = s.fetchParameters), "iconsBaseUrl" in s && t(12, rt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(48, je = s.adjustUrlQuery), "$$scope" in s && t(58, l = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      t(16, Ie = Le), f && !Le && t(1, M = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    32 && M.length < I && (t(55, p = void 0), t(14, N = void 0), t(18, ee = void 0), t(54, j = N)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && he && p && !p.address && p.geometry.type === "Point" && p.place_type[0] !== "reverse" && Qe(p.id, { byId: !0 }).catch((s) => t(18, ee = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (g && p && p.id !== Ze && w && (!p.bbox || p.bbox[0] === p.bbox[2] && p.bbox[1] === p.bbox[3] ? g.flyTo(p.center, p.id.startsWith("poi.") || p.id.startsWith("address.") ? ve : pe) : g.fitBounds(ht(p.bbox), 50, ve), t(14, N = void 0), t(54, j = void 0), t(15, z = -1)), t(56, Ze = p == null ? void 0 : p.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && K && N != null && N.length && t(15, z = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (K || t(15, z = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    8388608 && j !== N && t(54, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && g && g.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          _ && jt(s.coordinates);
          break;
        case "markerClick":
          {
            const Z = N == null ? void 0 : N.find((V) => V.id === s.id);
            Z && Ke(Z);
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
    67133969 && g && r && w && be && g.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? ve : pe), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Me || g == null || g.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && g && Me && !j && (g.setMarkers(r ? [r] : void 0, void 0), g.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && g && g.setMarkers(j, p), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && j && g && g.setSelectedMarker(z), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16 && g) {
      const s = Ge(M);
      g.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    67108864 && oe("select", r), i.$$.dirty[1] & /*picked*/
    16777216 && oe("pick", p), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && oe("optionsVisibilityChange", Ie && !!N), i.$$.dirty[0] & /*listFeatures*/
    16384 && oe("featuresListed", N), i.$$.dirty[1] & /*markedFeatures*/
    8388608 && oe("featuresMarked", j), i.$$.dirty[0] & /*reverseActive*/
    1 && oe("reverseToggle", _), i.$$.dirty[0] & /*searchValue*/
    2 && oe("queryChange", M), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && g && g.indicateReverse(_);
  }, [
    _,
    M,
    n,
    u,
    b,
    W,
    F,
    v,
    S,
    x,
    L,
    K,
    rt,
    Le,
    N,
    z,
    Ie,
    $,
    ee,
    ue,
    Pt,
    st,
    Zt,
    qe,
    Ke,
    a,
    d,
    f,
    h,
    k,
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
    Me,
    ce,
    We,
    pe,
    ve,
    Pe,
    He,
    je,
    Bt,
    Dt,
    nt,
    At,
    Ft,
    j,
    p,
    Ze,
    r,
    l,
    o,
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
    ti,
    ii
  ];
}
class fr extends ge {
  constructor(e) {
    super(), me(
      this,
      e,
      dr,
      ur,
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
const Ct = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], mr = [
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
function Tt(i) {
  return "on" + i[0].toUpperCase() + i.slice(1);
}
const br = oi(function(e, t) {
  const r = at(), o = at(), l = { ...e };
  for (const n of Ct)
    delete l[Tt(n)];
  Ye(() => {
    if (!r.current)
      throw new Error();
    const n = new fr({
      target: r.current,
      props: l
    });
    return o.current = n, () => n.$destroy();
  }, []);
  for (const n of mr)
    Ye(() => {
      o.current && e[n] !== void 0 && o.current.$set({ [n]: e[n] });
    }, [e[n]]);
  for (const n of Ct) {
    const a = e[Tt(n)];
    Ye(
      () => {
        var d;
        return a && ((d = o.current) == null ? void 0 : d.$on(n, (u) => {
          a(u.detail);
        }));
      },
      [a]
    );
  }
  return si(t, () => ({
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
  })), ai("div", { ref: r });
});
export {
  br as GeocodingControl
};
//# sourceMappingURL=react.js.map
