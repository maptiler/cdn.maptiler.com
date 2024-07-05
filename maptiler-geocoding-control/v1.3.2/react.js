var ii = Object.defineProperty;
var ri = (i, e, t) => e in i ? ii(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Je = (i, e, t) => ri(i, typeof e != "symbol" ? e + "" : e, t);
import { forwardRef as ni, useRef as st, useEffect as Xe, useImperativeHandle as oi, createElement as si } from "react";
function F() {
}
function ai(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Mt(i) {
  return i();
}
function at() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(i) {
  i.forEach(Mt);
}
function Ct(i) {
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
function ui(i, e, t, r) {
  if (i) {
    const o = Wt(i, e, t, r);
    return i[0](o);
  }
}
function Wt(i, e, t, r) {
  return i[1] && r ? ai(t.ctx.slice(), i[1](r(e))) : t.ctx;
}
function ci(i, e, t, r) {
  if (i[2] && r) {
    const o = i[2](r(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const u = [], a = Math.max(e.dirty.length, o.length);
      for (let n = 0; n < a; n += 1)
        u[n] = e.dirty[n] | o[n];
      return u;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function di(i, e, t, r, o, u) {
  if (o) {
    const a = Wt(e, t, r, u);
    i.p(a, o);
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
function M(i, e) {
  i.appendChild(e);
}
function H(i, e, t) {
  i.insertBefore(e, t || null);
}
function A(i) {
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
function Te(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ut(i, e) {
  i.value = e ?? "";
}
function se(i, e, t) {
  i.classList.toggle(e, !!t);
}
function bi(i, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: r });
}
let Me;
function Ne(i) {
  Me = i;
}
function Rt() {
  if (!Me) throw new Error("Function called outside component initialization");
  return Me;
}
function vi(i) {
  Rt().$$.on_destroy.push(i);
}
function Li() {
  const i = Rt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const u = bi(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return o.slice().forEach((a) => {
        a.call(i, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function ct(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const we = [], xe = [];
let Ee = [];
const dt = [], _i = /* @__PURE__ */ Promise.resolve();
let $e = !1;
function yi() {
  $e || ($e = !0, _i.then(Dt));
}
function et(i) {
  Ee.push(i);
}
const Ye = /* @__PURE__ */ new Set();
let ye = 0;
function Dt() {
  if (ye !== 0)
    return;
  const i = Me;
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
const ze = /* @__PURE__ */ new Set();
let de;
function Ae() {
  de = {
    r: 0,
    c: [],
    p: de
    // parent group
  };
}
function Be() {
  de.r || ne(de.c), de = de.p;
}
function P(i, e) {
  i && i.i && (ze.delete(i), i.i(e));
}
function Z(i, e, t, r) {
  if (i && i.o) {
    if (ze.has(i)) return;
    ze.add(i), de.c.push(() => {
      ze.delete(i), r && (t && i.d(1), r());
    }), i.o(e);
  } else r && r();
}
function ft(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Si(i, e) {
  Z(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function pi(i, e, t, r, o, u, a, n, d, c, f, b) {
  let m = i.length, w = u.length, _ = m;
  const U = {};
  for (; _--; ) U[i[_].key] = _;
  const E = [], S = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), W = [];
  for (_ = w; _--; ) {
    const v = b(o, u, _), N = t(v);
    let g = a.get(N);
    g ? W.push(() => g.p(v, e)) : (g = c(N, v), g.c()), S.set(N, E[_] = g), N in U && I.set(N, Math.abs(_ - U[N]));
  }
  const p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  function D(v) {
    P(v, 1), v.m(n, f), a.set(v.key, v), f = v.first, w--;
  }
  for (; m && w; ) {
    const v = E[w - 1], N = i[m - 1], g = v.key, y = N.key;
    v === N ? (f = v.first, m--, w--) : S.has(y) ? !a.has(g) || p.has(g) ? D(v) : h.has(y) ? m-- : I.get(g) > I.get(y) ? (h.add(g), D(v)) : (p.add(y), m--) : (d(N, a), m--);
  }
  for (; m--; ) {
    const v = i[m];
    S.has(v.key) || d(v, a);
  }
  for (; w; ) D(E[w - 1]);
  return ne(W), E;
}
function le(i) {
  i && i.c();
}
function ie(i, e, t) {
  const { fragment: r, after_update: o } = i.$$;
  r && r.m(e, t), et(() => {
    const u = i.$$.on_mount.map(Mt).filter(Ct);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : ne(u), i.$$.on_mount = [];
  }), o.forEach(et);
}
function re(i, e) {
  const t = i.$$;
  t.fragment !== null && (Ei(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ki(i, e) {
  i.$$.dirty[0] === -1 && (we.push(i), yi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(i, e, t, r, o, u, a = null, n = [-1]) {
  const d = Me;
  Ne(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: F,
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
    dirty: n,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  a && a(c.root);
  let f = !1;
  if (c.ctx = t ? t(i, e.props || {}, (b, m, ...w) => {
    const _ = w.length ? w[0] : m;
    return c.ctx && o(c.ctx[b], c.ctx[b] = _) && (!c.skip_bound && c.bound[b] && c.bound[b](_), f && ki(i, b)), m;
  }) : [], c.update(), f = !0, ne(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = hi(e.target);
      c.fragment && c.fragment.l(b), b.forEach(A);
    } else
      c.fragment && c.fragment.c();
    e.intro && P(i.$$.fragment), ie(i, e.target, e.anchor), Dt();
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
    re(this, 1), this.$destroy = F;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ct(t))
      return F;
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
function Ti(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), l(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), l(e, "viewBox", "0 0 14 14"), l(e, "width", "13"), l(e, "height", "13"), l(e, "class", "svelte-en2qvf");
    },
    m(r, o) {
      H(r, e, o), M(e, t);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(e);
    }
  };
}
class Ot extends ge {
  constructor(e) {
    super(), me(this, e, null, Ti, fe, {});
  }
}
function Mi(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), l(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), l(e, "viewBox", "0 0 30 30"), l(e, "fill", "none"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "class", "svelte-d2loi5");
    },
    m(r, o) {
      H(r, e, o), M(e, t);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(e);
    }
  };
}
class It extends ge {
  constructor(e) {
    super(), me(this, e, null, Mi, fe, {});
  }
}
function Ci(i) {
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
      H(r, e, o);
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
      r && A(e);
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
      H(r, e, o);
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
      r && A(e);
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
      H(r, e, o);
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
      r && A(e);
    }
  };
}
function Di(i) {
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
      H(r, e, o);
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
      r && A(e);
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
      H(r, e, o);
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
      r && A(e);
    }
  };
}
function Ii(i) {
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
      H(r, e, o);
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
      r && A(e);
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
      H(r, e, o);
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
      r && A(e);
    }
  };
}
function zi(i) {
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
    m(u, a) {
      H(u, e, a), r || (o = Q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), r = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !q(e.src, t = /*imageUrl*/
      u[5]) && l(e, "src", t), a & /*category*/
      16 && l(
        e,
        "alt",
        /*category*/
        u[4]
      );
    },
    d(u) {
      u && A(e), r = !1, o();
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
      H(r, e, o), M(e, t);
    },
    p(r, o) {
      o & /*placeType*/
      64 && Te(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Ai(i) {
  var v, N;
  let e, t, r, o, u, a, n, d, c = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), f, b, m = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] && !/*feature*/
    i[0].address && /*feature*/
    ((v = i[0].properties) == null ? void 0 : v.kind) !== "road" && /*feature*/
    ((N = i[0].properties) == null ? void 0 : N.kind) !== "road_relation" && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), w, _, U = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), E, S, I;
  function W(g, y) {
    var x, R;
    return y & /*feature*/
    1 && (t = null), y & /*feature*/
    1 && (r = null), y & /*feature*/
    1 && (o = null), /*imageUrl*/
    g[5] ? zi : (
      /*feature*/
      g[0].address ? Ui : (
        /*feature*/
        ((x = g[0].properties) == null ? void 0 : x.kind) === "road" || /*feature*/
        ((R = g[0].properties) == null ? void 0 : R.kind) === "road_relation" ? Ii : (t == null && (t = !!/*feature*/
        g[0].id.startsWith("address.")), t ? Oi : (r == null && (r = !!/*feature*/
        g[0].id.startsWith("postal_code.")), r ? Di : (o == null && (o = !!/*feature*/
        g[0].id.startsWith("poi.")), o ? Ri : (
          /*isReverse*/
          g[7] ? Wi : Ci
        ))))
      )
    );
  }
  let p = W(i, -1), h = p(i), D = m && mt(i);
  return {
    c() {
      e = O("li"), h.c(), u = J(), a = O("span"), n = O("span"), d = O("span"), f = ae(c), b = J(), D && D.c(), w = J(), _ = O("span"), E = ae(U), l(d, "class", "primary svelte-ltkwvy"), l(n, "class", "svelte-ltkwvy"), l(_, "class", "line2 svelte-ltkwvy"), l(a, "class", "texts svelte-ltkwvy"), l(e, "tabindex", "0"), l(
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
    m(g, y) {
      H(g, e, y), h.m(e, null), M(e, u), M(e, a), M(a, n), M(n, d), M(d, f), M(n, b), D && D.m(n, null), M(a, w), M(a, _), M(_, E), S || (I = [
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
      ], S = !0);
    },
    p(g, [y]) {
      var x, R;
      p === (p = W(g, y)) && h ? h.p(g, y) : (h.d(1), h = p(g), h && (h.c(), h.m(e, u))), y & /*feature*/
      1 && c !== (c = /*isReverse*/
      (g[7] ? (
        /*feature*/
        g[0].place_name
      ) : (
        /*feature*/
        g[0].place_name.replace(/,.*/, "")
      )) + "") && Te(f, c), y & /*showPlaceType, feature, imageUrl*/
      37 && (m = /*showPlaceType*/
      g[2] === "always" || /*showPlaceType*/
      g[2] && !/*feature*/
      g[0].address && /*feature*/
      ((x = g[0].properties) == null ? void 0 : x.kind) !== "road" && /*feature*/
      ((R = g[0].properties) == null ? void 0 : R.kind) !== "road_relation" && !/*feature*/
      g[0].id.startsWith("address.") && !/*feature*/
      g[0].id.startsWith("postal_code.") && (!/*feature*/
      g[0].id.startsWith("poi.") || !/*imageUrl*/
      g[5]) && !/*isReverse*/
      g[7]), m ? D ? D.p(g, y) : (D = mt(g), D.c(), D.m(n, null)) : D && (D.d(1), D = null), y & /*feature*/
      1 && U !== (U = /*isReverse*/
      (g[7] ? "" : (
        /*feature*/
        g[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Te(E, U), y & /*selected*/
      2 && l(
        e,
        "data-selected",
        /*selected*/
        g[1]
      ), y & /*selected*/
      2 && se(
        e,
        "selected",
        /*selected*/
        g[1]
      );
    },
    i: F,
    o: F,
    d(g) {
      g && A(e), h.d(), D && D.d(), S = !1, ne(I);
    }
  };
}
function Bi(i, e, t) {
  var W;
  let r, o, { feature: u } = e, { selected: a = !1 } = e, { showPlaceType: n } = e, { missingIconsCache: d } = e, { iconsBaseUrl: c } = e;
  const f = (W = u.properties) == null ? void 0 : W.categories;
  let b, m, w = 0, _ = u.place_type[0] === "reverse";
  function U() {
    m && d.add(m), t(10, w++, w);
  }
  function E(p) {
    ct.call(this, i, p);
  }
  function S(p) {
    ct.call(this, i, p);
  }
  const I = () => U();
  return i.$$set = (p) => {
    "feature" in p && t(0, u = p.feature), "selected" in p && t(1, a = p.selected), "showPlaceType" in p && t(2, n = p.showPlaceType), "missingIconsCache" in p && t(9, d = p.missingIconsCache), "iconsBaseUrl" in p && t(3, c = p.iconsBaseUrl);
  }, i.$$.update = () => {
    var p, h, D, v;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, r--, r), t(4, b = f == null ? void 0 : f[r]), t(5, m = b ? c + b.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!m || d.has(m)));
    i.$$.dirty & /*feature*/
    1 && t(6, o = u.id.startsWith("poi.") ? (h = (p = u.properties) == null ? void 0 : p.categories) == null ? void 0 : h.join(", ") : ((v = (D = u.properties) == null ? void 0 : D.place_type_name) == null ? void 0 : v[0]) ?? u.place_type[0]);
  }, t(11, r = (f == null ? void 0 : f.length) ?? 0), [
    u,
    a,
    n,
    c,
    b,
    m,
    o,
    _,
    U,
    d,
    w,
    r,
    E,
    S,
    I
  ];
}
class Fi extends ge {
  constructor(e) {
    super(), me(this, e, Bi, Ai, fe, {
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
      e = O("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', l(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      H(t, e, r);
    },
    p: F,
    i: F,
    o: F,
    d(t) {
      t && A(e);
    }
  };
}
class Pi extends ge {
  constructor(e) {
    super(), me(this, e, null, Hi, fe, {});
  }
}
function ji(i) {
  let e, t;
  return {
    c() {
      e = te("svg"), t = te("path"), l(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), l(e, "viewBox", "0 0 60.006 21.412"), l(e, "width", "14"), l(e, "height", "20"), l(e, "class", "svelte-en2qvf");
    },
    m(r, o) {
      H(r, e, o), M(e, t);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(e);
    }
  };
}
class Gi extends ge {
  constructor(e) {
    super(), me(this, e, null, ji, fe, {});
  }
}
function Zi(i) {
  let e, t, r;
  return {
    c() {
      e = te("svg"), t = te("circle"), r = te("path"), l(t, "cx", "4.789"), l(t, "cy", "4.787"), l(t, "r", "3.85"), l(t, "class", "svelte-1aq105l"), l(r, "d", "M12.063 12.063 7.635 7.635"), l(r, "class", "svelte-1aq105l"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "width", "13"), l(e, "height", "13"), l(e, "viewBox", "0 0 13 13"), l(e, "class", "svelte-1aq105l");
    },
    m(o, u) {
      H(o, e, u), M(e, t), M(e, r);
    },
    p: F,
    i: F,
    o: F,
    d(o) {
      o && A(e);
    }
  };
}
class qi extends ge {
  constructor(e) {
    super(), me(this, e, null, Zi, fe, {});
  }
}
function Qi(i, e, t) {
  const r = e[1], o = e[0], u = r - o;
  return i === r && t ? i : ((i - o) % u + u) % u + o;
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
        let u;
        try {
          return u = await new Promise((a, n) => {
            t.signal.addEventListener("abort", () => {
              n(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                a(
                  [d.coords.longitude, d.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (d) => {
                n(d);
              },
              o
            );
          }), u;
        } catch {
        } finally {
          o.cachedLocationExpiry && (pe = {
            time: Date.now(),
            coords: u
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
const Vi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, ht = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, bt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, vt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Lt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, _t = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Ji(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((w) => Number(w.trim())), t = Number(e[0]), r = Number(e[1]), o = Math.abs(t), u = Math.abs(r), a = t > 0 ? "N" : "S", n = r > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${o}° ${a}, ${u}° ${n}`);
    const c = Math.floor(o), f = Math.floor(u), b = (o - c) * 60, m = (u - f) * 60;
    if (i == "DM") {
      let w = yt(b, 3).toFixed(3).padStart(6, "0"), _ = yt(m, 3).toFixed(3).padStart(6, "0");
      w.endsWith(".000") && _.endsWith(".000") && (w = w.replace(/\.000$/, ""), _ = _.replace(/\.000$/, "")), d = `${c}° ${w}' ${a}, ${f}° ${_}' ${n}`;
    }
    if (i == "DMS") {
      const w = Math.floor(b), _ = Math.floor(m);
      let U = ((b - w) * 60).toFixed(1).padStart(4, "0"), E = ((m - _) * 60).toFixed(1).padStart(4, "0");
      const S = w.toString().padStart(2, "0"), I = _.toString().padStart(2, "0");
      U.endsWith(".0") && E.endsWith(".0") && (U = U.replace(/\.0$/, ""), E = E.replace(/\.0$/, "")), d = `${c}° ${S}' ${U}" ${a}, ${f}° ${I}' ${E}" ${n}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function yt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function tt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, r = null, o = "", u = "", a = null, n = [], d = !1;
  if (Vi.test(i))
    throw new Error("invalid coordinate value");
  if (ht.test(i))
    if (n = ht.exec(i), d = ke(n), d)
      t = Math.abs(n[1]) + n[2] / 60, Number(n[1]) < 0 && (t *= -1), r = Math.abs(n[3]) + n[4] / 60, Number(n[3]) < 0 && (r *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (bt.test(i))
    if (n = bt.exec(i), d = ke(n), d) {
      if (t = n[2], r = n[6], t.includes(",") && (t = t.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      n[1] ? (o = n[1], u = n[5]) : n[4] && (o = n[4], u = n[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (vt.test(i))
    if (n = vt.exec(i), d = ke(n), d)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60, a = "DM"), n[6] && (t += n[6].replace(",", ".") / 3600, a = "DMS"), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[9])), n[11] && (r += n[11] / 60), n[13] && (r += n[13].replace(",", ".") / 3600), parseInt(n[9]) < 0 && (r = -1 * r), n[1] ? (o = n[1], u = n[8]) : n[7] && (o = n[7], u = n[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Lt.test(i))
    if (n = Lt.exec(i), d = ke(n), d)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60, a = "DM"), n[6] && (t += n[6] / 3600, a = "DMS"), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12] / 60), n[14] && (r += n[14] / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], u = n[9]) : n[8] && (o = n[8], u = n[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (_t.test(i)) {
    if (n = _t.exec(i), d = ke(n), n.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4].replace(",", ".") / 60, a = "DM"), n[6] && (t += n[6].replace(",", ".") / 3600, a = "DMS"), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12].replace(",", ".") / 60), n[14] && (r += n[14].replace(",", ".") / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], u = n[9]) : n[8] && (o = n[8], u = n[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
    if (Math.abs(r) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (o && !u || !o && u)
      throw new Error("invalid coordinates value");
    if (o && o == u)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), r.toString().includes(",") && (r = r.replace(",", "."));
    let c = /S|SOUTH/i;
    c.test(o) && t > 0 && (t = -1 * t), c = /W|WEST/i, c.test(u) && r > 0 && (r = -1 * r);
    const f = n[0].trim();
    let b, m;
    const w = /[,/;\u0020]/g, _ = f.match(w);
    if (_ == null) {
      const S = Math.floor(i.length / 2);
      b = f.substring(0, S).trim(), m = f.substring(S).trim();
    } else {
      let S;
      _.length % 2 == 1 ? S = Math.floor(_.length / 2) : S = _.length / 2 - 1;
      let I = 0;
      if (S == 0)
        I = f.indexOf(_[0]), b = f.substring(0, I).trim(), m = f.substring(I + 1).trim();
      else {
        let W = 0, p = 0;
        for (; W <= S; )
          I = f.indexOf(_[W], p), p = I + 1, W++;
        b = f.substring(0, I).trim(), m = f.substring(I + 1).trim();
      }
    }
    const U = b.split(".");
    if (U.length == 2 && U[1] == 0 && U[1].length != 2)
      throw new Error("invalid coordinates format");
    const E = m.split(".");
    if (E.length == 2 && E[1] == 0 && E[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(b) || /^\d+$/.test(m))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), r = Number(Number(r).toFixed(e)), Object.freeze({
      verbatimCoordinates: f,
      verbatimLatitude: b,
      verbatimLongitude: m,
      decimalLatitude: t,
      decimalLongitude: r,
      decimalCoordinates: `${t},${r}`,
      originalFormat: a,
      closeEnough: Xi,
      toCoordinateFormat: Ji
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function ke(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, r = /[eastsouthnorthwest]+/i, o = e.length / 2;
  for (let u = 0; u < o; u++) {
    const a = e[u], n = e[u + o], d = t.test(a) && t.test(n), c = r.test(a) && r.test(n), f = a == n;
    if (!(a == null && n == null)) {
      if (a == null || n == null)
        return !1;
      if (d || c || f)
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
  if (!i)
    throw new Error("coords must be provided");
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
function St(i) {
  let e, t;
  return e = new Pi({}), {
    c() {
      le(e.$$.fragment);
    },
    m(r, o) {
      ie(e, r, o), t = !0;
    },
    i(r) {
      t || (P(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Z(e.$$.fragment, r), t = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function pt(i) {
  let e, t, r, o, u;
  return t = new Gi({}), {
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
    m(a, n) {
      H(a, e, n), ie(t, e, null), r = !0, o || (u = Q(
        e,
        "click",
        /*click_handler_2*/
        i[67]
      ), o = !0);
    },
    p(a, n) {
      (!r || n[0] & /*reverseButtonTitle*/
      512) && l(
        e,
        "title",
        /*reverseButtonTitle*/
        a[9]
      ), (!r || n[0] & /*reverseActive*/
      1) && se(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      r || (P(t.$$.fragment, a), r = !0);
    },
    o(a) {
      Z(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && A(e), re(t), o = !1, u();
    }
  };
}
function or(i) {
  let e, t = [], r = /* @__PURE__ */ new Map(), o, u, a, n = ft(
    /*listFeatures*/
    i[14]
  );
  const d = (c) => (
    /*feature*/
    c[81].id + /*feature*/
    (c[81].address ? "," + /*feature*/
    c[81].address : "")
  );
  for (let c = 0; c < n.length; c += 1) {
    let f = Et(i, n, c), b = d(f);
    r.set(b, t[c] = kt(b, f));
  }
  return {
    c() {
      e = O("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      l(e, "class", "svelte-zh3kmv");
    },
    m(c, f) {
      H(c, e, f);
      for (let b = 0; b < t.length; b += 1)
        t[b] && t[b].m(e, null);
      o = !0, u || (a = [
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
      ], u = !0);
    },
    p(c, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (n = ft(
        /*listFeatures*/
        c[14]
      ), Ae(), t = pi(t, f, d, 1, c, n, r, e, Si, kt, null, Et), Be());
    },
    i(c) {
      if (!o) {
        for (let f = 0; f < n.length; f += 1)
          P(t[f]);
        o = !0;
      }
    },
    o(c) {
      for (let f = 0; f < t.length; f += 1)
        Z(t[f]);
      o = !1;
    },
    d(c) {
      c && A(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      u = !1, ne(a);
    }
  };
}
function sr(i) {
  let e, t, r, o, u, a;
  return t = new It({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = J(), o = O("div"), u = ae(
        /*noResultsMessage*/
        i[7]
      ), l(o, "class", "svelte-zh3kmv"), l(e, "class", "no-results svelte-zh3kmv");
    },
    m(n, d) {
      H(n, e, d), ie(t, e, null), M(e, r), M(e, o), M(o, u), a = !0;
    },
    p(n, d) {
      (!a || d[0] & /*noResultsMessage*/
      128) && Te(
        u,
        /*noResultsMessage*/
        n[7]
      );
    },
    i(n) {
      a || (P(t.$$.fragment, n), a = !0);
    },
    o(n) {
      Z(t.$$.fragment, n), a = !1;
    },
    d(n) {
      n && A(e), re(t);
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
      H(r, t, o);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(t);
    }
  };
}
function lr(i) {
  let e, t, r, o, u, a, n, d, c, f, b;
  return t = new It({}), d = new Ot({}), {
    c() {
      e = O("div"), le(t.$$.fragment), r = J(), o = O("div"), u = ae(
        /*errorMessage*/
        i[6]
      ), a = J(), n = O("button"), le(d.$$.fragment), l(o, "class", "svelte-zh3kmv"), l(n, "class", "svelte-zh3kmv"), l(e, "class", "error svelte-zh3kmv");
    },
    m(m, w) {
      H(m, e, w), ie(t, e, null), M(e, r), M(e, o), M(o, u), M(e, a), M(e, n), ie(d, n, null), c = !0, f || (b = Q(
        n,
        "click",
        /*click_handler_3*/
        i[68]
      ), f = !0);
    },
    p(m, w) {
      (!c || w[0] & /*errorMessage*/
      64) && Te(
        u,
        /*errorMessage*/
        m[6]
      );
    },
    i(m) {
      c || (P(t.$$.fragment, m), P(d.$$.fragment, m), c = !0);
    },
    o(m) {
      Z(t.$$.fragment, m), Z(d.$$.fragment, m), c = !1;
    },
    d(m) {
      m && A(e), re(t), re(d), f = !1, b();
    }
  };
}
function kt(i, e) {
  let t, r, o;
  function u() {
    return (
      /*mouseenter_handler*/
      e[69](
        /*i*/
        e[83]
      )
    );
  }
  function a() {
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
  }), r.$on("mouseenter", u), r.$on("focus", a), {
    key: i,
    first: null,
    c() {
      t = mi(), le(r.$$.fragment), this.first = t;
    },
    m(n, d) {
      H(n, t, d), ie(r, n, d), o = !0;
    },
    p(n, d) {
      e = n;
      const c = {};
      d[0] & /*listFeatures*/
      16384 && (c.feature = /*feature*/
      e[81]), d[0] & /*showPlaceType*/
      1024 && (c.showPlaceType = /*showPlaceType*/
      e[10]), d[0] & /*selectedItemIndex, listFeatures*/
      49152 && (c.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[83]), d[0] & /*iconsBaseUrl*/
      4096 && (c.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), r.$set(c);
    },
    i(n) {
      o || (P(r.$$.fragment, n), o = !0);
    },
    o(n) {
      Z(r.$$.fragment, n), o = !1;
    },
    d(n) {
      n && A(t), re(r, n);
    }
  };
}
function ur(i) {
  let e, t, r, o, u, a, n, d, c, f, b, m, w, _, U, E, S, I, W, p, h, D = !1;
  u = new qi({}), b = new Ot({});
  let v = (
    /*abortController*/
    i[19] && St()
  ), N = (
    /*enableReverse*/
    i[5] === !0 && pt(i)
  );
  const g = (
    /*#slots*/
    i[59].default
  ), y = ui(
    g,
    i,
    /*$$scope*/
    i[58],
    null
  ), x = [lr, ar, sr, or], R = [];
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
  return ~(E = he(i)) && (S = R[E] = x[E](i)), {
    c() {
      e = J(), t = O("form"), r = O("div"), o = O("button"), le(u.$$.fragment), a = J(), n = O("input"), d = J(), c = O("div"), f = O("button"), le(b.$$.fragment), m = J(), v && v.c(), w = J(), N && N.c(), _ = J(), y && y.c(), U = J(), S && S.c(), l(o, "class", "search-button svelte-zh3kmv"), l(o, "type", "button"), l(
        n,
        "placeholder",
        /*placeholder*/
        i[8]
      ), l(
        n,
        "aria-label",
        /*placeholder*/
        i[8]
      ), l(n, "class", "svelte-zh3kmv"), l(f, "type", "button"), l(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), l(f, "class", "svelte-zh3kmv"), l(c, "class", "clear-button-container svelte-zh3kmv"), se(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), l(r, "class", "input-group svelte-zh3kmv"), l(t, "tabindex", "0"), l(t, "class", I = lt(
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
      H(L, e, B), H(L, t, B), M(t, r), M(r, o), ie(u, o, null), M(r, a), M(r, n), i[61](n), ut(
        n,
        /*searchValue*/
        i[1]
      ), M(r, d), M(r, c), M(c, f), ie(b, f, null), M(c, m), v && v.m(c, null), M(r, w), N && N.m(r, null), M(r, _), y && y.m(r, null), M(t, U), ~E && R[E].m(t, null), W = !0, p || (h = [
        Q(
          o,
          "click",
          /*click_handler*/
          i[60]
        ),
        Q(
          n,
          "input",
          /*input_1_input_handler*/
          i[62]
        ),
        Q(
          n,
          "focus",
          /*focus_handler*/
          i[63]
        ),
        Q(
          n,
          "blur",
          /*blur_handler*/
          i[64]
        ),
        Q(
          n,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        Q(
          n,
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
      ], p = !0);
    },
    p(L, B) {
      (!W || B[0] & /*placeholder*/
      256) && l(
        n,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!W || B[0] & /*placeholder*/
      256) && l(
        n,
        "aria-label",
        /*placeholder*/
        L[8]
      ), B[0] & /*searchValue*/
      2 && n.value !== /*searchValue*/
      L[1] && ut(
        n,
        /*searchValue*/
        L[1]
      ), (!W || B[0] & /*clearButtonTitle*/
      8) && l(
        f,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[19] ? v ? B[0] & /*abortController*/
      524288 && P(v, 1) : (v = St(), v.c(), P(v, 1), v.m(c, null)) : v && (Ae(), Z(v, 1, 1, () => {
        v = null;
      }), Be()), (!W || B[0] & /*searchValue*/
      2) && se(
        c,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? N ? (N.p(L, B), B[0] & /*enableReverse*/
      32 && P(N, 1)) : (N = pt(L), N.c(), P(N, 1), N.m(r, _)) : N && (Ae(), Z(N, 1, 1, () => {
        N = null;
      }), Be()), y && y.p && (!W || B[1] & /*$$scope*/
      134217728) && di(
        y,
        g,
        L,
        /*$$scope*/
        L[58],
        W ? ci(
          g,
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
      let K = E;
      E = he(L), E === K ? ~E && R[E].p(L, B) : (S && (Ae(), Z(R[K], 1, 1, () => {
        R[K] = null;
      }), Be()), ~E ? (S = R[E], S ? S.p(L, B) : (S = R[E] = x[E](L), S.c()), P(S, 1), S.m(t, null)) : S = null), (!W || B[0] & /*className*/
      4 && I !== (I = lt(
        /*className*/
        L[2]
      ) + " svelte-zh3kmv")) && l(t, "class", I), (!W || B[0] & /*className, collapsed, searchValue*/
      22) && se(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      W || (P(D), P(u.$$.fragment, L), P(b.$$.fragment, L), P(v), P(N), P(y, L), P(S), W = !0);
    },
    o(L) {
      Z(D), Z(u.$$.fragment, L), Z(b.$$.fragment, L), Z(v), Z(N), Z(y, L), Z(S), W = !1;
    },
    d(L) {
      L && (A(e), A(t)), re(u), i[61](null), re(b), v && v.d(), N && N.d(), y && y.d(L), ~E && R[E].d(), p = !1, ne(h);
    }
  };
}
function cr(i, e, t) {
  let r, { $$slots: o = {}, $$scope: u } = e, { class: a = void 0 } = e, { apiKey: n } = e, { bbox: d = void 0 } = e, { clearButtonTitle: c = "clear" } = e, { clearOnBlur: f = !1 } = e, { collapsed: b = !1 } = e, { country: m = void 0 } = e, { debounceSearch: w = 200 } = e, { enableReverse: _ = !1 } = e, { errorMessage: U = "Something went wrong…" } = e, { filter: E = () => !0 } = e, { flyTo: S = !0 } = e, { fuzzyMatch: I = !0 } = e, { language: W = void 0 } = e, { limit: p = void 0 } = e, { mapController: h = void 0 } = e, { minLength: D = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: N = "Search" } = e, { proximity: g = [{ type: "server-geolocation" }] } = e, { reverseActive: y = _ === "always" } = e, { reverseButtonTitle: x = "toggle reverse geocoding" } = e, { searchValue: R = "" } = e, { showFullGeometry: he = !0 } = e, { showPlaceType: L = "ifNeeded" } = e, { showResultsWhileTyping: B = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: be = !1 } = e, { markerOnSelected: Ce = !0 } = e, { types: ue = void 0 } = e, { excludeTypes: We = !1 } = e, { zoom: Se = 16 } = e, { maxZoom: ve = 18 } = e, { apiUrl: Fe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: He = {} } = e, { iconsBaseUrl: it = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.3.2/icons/" } = e, { adjustUrlQuery: Pe = () => {
  } } = e;
  function Ut() {
    $.focus();
  }
  function zt() {
    $.blur();
  }
  function rt(s, G = !0, V = !1) {
    t(1, R = s), G ? (t(15, z = -1), ot()) : (qe(!V, V), setTimeout(() => {
      $.focus(), $.select();
    }));
  }
  function At() {
    t(14, T = void 0), t(55, k = void 0), t(15, z = -1);
  }
  function Bt() {
    t(54, j = []), t(55, k = void 0);
  }
  let Le = !1, T, j, k, nt = "", $, z = -1, ee, Re = [], ce, _e, De, je;
  const Ft = /* @__PURE__ */ new Set(), oe = Li();
  vi(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setMarkers(void 0, void 0));
  });
  function ot(s) {
    if (_e && (clearTimeout(_e), _e = void 0), z > -1 && T)
      t(55, k = T[z]), t(1, R = k.place_type[0] === "reverse" ? k.place_name : k.place_name.replace(/,.*/, "")), t(18, ee = void 0), t(54, j = void 0), t(15, z = -1);
    else if (R) {
      const G = s || !Ge(R);
      Ze(R, { exact: !0 }).then(() => {
        t(54, j = T), t(55, k = void 0), G && Ht();
      }).catch((V) => t(18, ee = V));
    }
  }
  function Ge(s) {
    try {
      return nr(s, 6);
    } catch {
      return !1;
    }
  }
  async function Ze(s, { byId: G = !1, exact: V = !1 } = {}) {
    t(18, ee = void 0), ce == null || ce.abort();
    const X = new AbortController();
    t(19, ce = X);
    try {
      const C = Ge(s), Y = new URLSearchParams();
      if (W !== void 0 && Y.set("language", Array.isArray(W) ? W.join(",") : W ?? ""), ue && Y.set("types", ue.join(",")), We && Y.set("excludeTypes", String(We)), d && Y.set("bbox", d.map((Ie) => Ie.toFixed(6)).join(",")), m && Y.set("country", Array.isArray(m) ? m.join(",") : m), !G && !C) {
        const Ie = await Ki(h, g, X);
        Ie && Y.set("proximity", Ie), (V || !B) && Y.set("autocomplete", "false"), Y.set("fuzzyMatch", String(I));
      }
      p !== void 0 && (!C || (ue == null ? void 0 : ue.length) === 1) && Y.set("limit", String(p)), Y.set("key", n), Pe(Y);
      const Oe = Fe + "/" + encodeURIComponent(C ? C.decimalLongitude + "," + C.decimalLatitude : s) + ".json?" + Y.toString();
      if (Oe === nt) {
        G ? (t(14, T = void 0), t(55, k = Re[0])) : t(14, T = Re);
        return;
      }
      nt = Oe;
      const Ke = await fetch(Oe, { signal: X.signal, ...He });
      if (!Ke.ok)
        throw new Error(await Ke.text());
      const Ve = await Ke.json();
      oe("response", { url: Oe, featureCollection: Ve }), G ? (t(14, T = void 0), t(55, k = Ve.features[0]), Re = [k]) : (t(14, T = Ve.features.filter(E)), C && T.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + C.decimalLongitude + "_" + C.decimalLatitude,
        text: C.decimalLatitude + ", " + C.decimalLongitude,
        place_name: C.decimalLatitude + ", " + C.decimalLongitude,
        place_type: ["reverse"],
        center: [C.decimalLongitude, C.decimalLatitude],
        bbox: [
          C.decimalLongitude,
          C.decimalLatitude,
          C.decimalLongitude,
          C.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [C.decimalLongitude, C.decimalLatitude]
        }
      }), Re = T, C && $.focus());
    } catch (C) {
      if (C && typeof C == "object" && "name" in C && C.name === "AbortError")
        return;
      throw C;
    } finally {
      X === ce && t(19, ce = void 0);
    }
  }
  function Ht() {
    var V;
    if (!(j != null && j.length) || !S)
      return;
    const s = [180, 90, -180, -90], G = !j.some((X) => !X.matching_text);
    for (const X of j)
      if (G || !X.matching_text)
        for (const C of [0, 1, 2, 3])
          s[C] = Math[C < 2 ? "min" : "max"](s[C], ((V = X.bbox) == null ? void 0 : V[C]) ?? X.center[C % 2]);
    h && j.length > 0 && (k && s[0] === s[2] && s[1] === s[3] ? h.flyTo(k.center, Se) : h.fitBounds(gt(s), 50, ve));
  }
  function Pt(s) {
    t(0, y = _ === "always"), t(14, T = void 0), t(55, k = void 0), t(15, z = -1), rt(s[1].toFixed(6) + ", " + Qi(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function jt(s) {
    if (!T)
      return;
    let G = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    G && (z === (K ? 0 : -1) && G === -1 && t(15, z = T.length), t(15, z += G), z >= T.length && t(15, z = -1), z < 0 && K && t(15, z = 0), s.preventDefault());
  }
  function qe(s = !0, G = !1) {
    if (t(18, ee = void 0), B || G) {
      if (_e && clearTimeout(_e), R.length < D)
        return;
      const V = R;
      _e = window.setTimeout(
        () => {
          Ze(V).catch((X) => t(18, ee = X));
        },
        s ? w : 0
      );
    } else
      t(14, T = void 0), t(18, ee = void 0);
  }
  function Qe(s) {
    t(55, k = s), t(1, R = s.place_name), t(15, z = -1);
  }
  const Gt = () => $.focus();
  function Zt(s) {
    xe[s ? "unshift" : "push"](() => {
      $ = s, t(17, $);
    });
  }
  function qt() {
    R = this.value, t(1, R), t(13, Le), t(27, f);
  }
  const Qt = () => t(13, Le = !0), Kt = () => t(13, Le = !1), Vt = () => qe(), Jt = () => {
    t(1, R = ""), $.focus();
  }, Xt = () => t(0, y = !y), Yt = () => t(18, ee = void 0), xt = (s) => t(15, z = s), $t = (s) => Qe(s), ei = () => {
    K || t(15, z = -1);
  }, ti = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, a = s.class), "apiKey" in s && t(25, n = s.apiKey), "bbox" in s && t(26, d = s.bbox), "clearButtonTitle" in s && t(3, c = s.clearButtonTitle), "clearOnBlur" in s && t(27, f = s.clearOnBlur), "collapsed" in s && t(4, b = s.collapsed), "country" in s && t(28, m = s.country), "debounceSearch" in s && t(29, w = s.debounceSearch), "enableReverse" in s && t(5, _ = s.enableReverse), "errorMessage" in s && t(6, U = s.errorMessage), "filter" in s && t(30, E = s.filter), "flyTo" in s && t(31, S = s.flyTo), "fuzzyMatch" in s && t(32, I = s.fuzzyMatch), "language" in s && t(33, W = s.language), "limit" in s && t(34, p = s.limit), "mapController" in s && t(35, h = s.mapController), "minLength" in s && t(36, D = s.minLength), "noResultsMessage" in s && t(7, v = s.noResultsMessage), "placeholder" in s && t(8, N = s.placeholder), "proximity" in s && t(37, g = s.proximity), "reverseActive" in s && t(0, y = s.reverseActive), "reverseButtonTitle" in s && t(9, x = s.reverseButtonTitle), "searchValue" in s && t(1, R = s.searchValue), "showFullGeometry" in s && t(38, he = s.showFullGeometry), "showPlaceType" in s && t(10, L = s.showPlaceType), "showResultsWhileTyping" in s && t(39, B = s.showResultsWhileTyping), "selectFirst" in s && t(11, K = s.selectFirst), "flyToSelected" in s && t(40, be = s.flyToSelected), "markerOnSelected" in s && t(41, Ce = s.markerOnSelected), "types" in s && t(42, ue = s.types), "excludeTypes" in s && t(43, We = s.excludeTypes), "zoom" in s && t(44, Se = s.zoom), "maxZoom" in s && t(45, ve = s.maxZoom), "apiUrl" in s && t(46, Fe = s.apiUrl), "fetchParameters" in s && t(47, He = s.fetchParameters), "iconsBaseUrl" in s && t(12, it = s.iconsBaseUrl), "adjustUrlQuery" in s && t(48, Pe = s.adjustUrlQuery), "$$scope" in s && t(58, u = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, y = _ === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      t(16, De = Le), f && !Le && t(1, R = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    32 && R.length < D && (t(55, k = void 0), t(14, T = void 0), t(18, ee = void 0), t(54, j = T)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && he && k && !k.address && k.geometry.type === "Point" && k.place_type[0] !== "reverse" && Ze(k.id, { byId: !0 }).catch((s) => t(18, ee = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (h && k && k.id !== je && S && (!k.bbox || k.bbox[0] === k.bbox[2] && k.bbox[1] === k.bbox[3] ? h.flyTo(k.center, k.id.startsWith("poi.") || k.id.startsWith("address.") ? ve : Se) : h.fitBounds(gt(k.bbox), 50, ve), t(14, T = void 0), t(54, j = void 0), t(15, z = -1)), t(56, je = k == null ? void 0 : k.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && K && T != null && T.length && t(15, z = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (K || t(15, z = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    8388608 && j !== T && t(54, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && h && h.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          y && Pt(s.coordinates);
          break;
        case "markerClick":
          {
            const G = T == null ? void 0 : T.find((V) => V.id === s.id);
            G && Qe(G);
          }
          break;
        case "markerMouseEnter":
          j && t(15, z = De ? (T == null ? void 0 : T.findIndex((G) => G.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, z = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(57, r = T == null ? void 0 : T[z]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && h && r && S && be && h.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? ve : Se), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Ce || h == null || h.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && h && Ce && !j && (h.setMarkers(r ? [r] : void 0, void 0), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && h && h.setMarkers(j, k), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && j && h && h.setSelectedMarker(z), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16 && h) {
      const s = Ge(R);
      h.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    67108864 && oe("select", r), i.$$.dirty[1] & /*picked*/
    16777216 && oe("pick", k), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && oe("optionsVisibilityChange", De && !!T), i.$$.dirty[0] & /*listFeatures*/
    16384 && oe("featuresListed", T), i.$$.dirty[1] & /*markedFeatures*/
    8388608 && oe("featuresMarked", j), i.$$.dirty[0] & /*reverseActive*/
    1 && oe("reverseToggle", y), i.$$.dirty[0] & /*searchValue*/
    2 && oe("queryChange", R), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && h && h.indicateReverse(y);
  }, [
    y,
    R,
    a,
    c,
    b,
    _,
    U,
    v,
    N,
    x,
    L,
    K,
    it,
    Le,
    T,
    z,
    De,
    $,
    ee,
    ce,
    Ft,
    ot,
    jt,
    qe,
    Qe,
    n,
    d,
    f,
    m,
    w,
    E,
    S,
    I,
    W,
    p,
    h,
    D,
    g,
    he,
    B,
    be,
    Ce,
    ue,
    We,
    Se,
    ve,
    Fe,
    He,
    Pe,
    Ut,
    zt,
    rt,
    At,
    Bt,
    j,
    k,
    je,
    r,
    u,
    o,
    Gt,
    Zt,
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
      cr,
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
function Tt(i) {
  return "on" + i[0].toUpperCase() + i.slice(1);
}
const hr = ni(function(e, t) {
  const r = st(), o = st(), u = { ...e };
  for (const a of Nt)
    delete u[Tt(a)];
  Xe(() => {
    if (!r.current)
      throw new Error();
    const a = new dr({
      target: r.current,
      props: u
    });
    return o.current = a, () => a.$destroy();
  }, []);
  for (const a of fr)
    Xe(() => {
      o.current && e[a] !== void 0 && o.current.$set({ [a]: e[a] });
    }, [e[a]]);
  for (const a of Nt) {
    const n = e[Tt(a)];
    Xe(
      () => {
        var d;
        return n && ((d = o.current) == null ? void 0 : d.$on(a, (c) => {
          n(c.detail);
        }));
      },
      [n]
    );
  }
  return oi(t, () => ({
    setQuery: (a, n = !0) => {
      var d;
      return (d = o.current) == null ? void 0 : d.setQuery(a, n);
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
  })), si("div", { ref: r });
});
export {
  hr as GeocodingControl
};
//# sourceMappingURL=react.js.map
