var an = Object.defineProperty;
var jt = (i) => {
  throw TypeError(i);
};
var cn = (i, e, t) => e in i ? an(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var _t = (i, e, t) => cn(i, typeof e != "symbol" ? e + "" : e, t), Zt = (i, e, t) => e.has(i) || jt("Cannot " + t);
var se = (i, e, t) => (Zt(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Et = (i, e, t) => e.has(i) ? jt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), it = (i, e, t, n) => (Zt(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as de from "leaflet";
function A() {
}
function fn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Mi(i) {
  return i();
}
function Qt() {
  return /* @__PURE__ */ Object.create(null);
}
function ye(i) {
  i.forEach(Mi);
}
function Ci(i) {
  return typeof i == "function";
}
function Se(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let nt;
function X(i, e) {
  return i === e ? !0 : (nt || (nt = document.createElement("a")), nt.href = e, i === nt.href);
}
function dn(i) {
  return Object.keys(i).length === 0;
}
function hn(i, e, t, n) {
  if (i) {
    const r = ki(i, e, t, n);
    return i[0](r);
  }
}
function ki(i, e, t, n) {
  return i[1] && n ? fn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function mn(i, e, t, n) {
  if (i[2] && n) {
    const r = i[2](n(t));
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
function gn(i, e, t, n, r, o) {
  if (r) {
    const l = ki(e, t, n, o);
    i.p(l, r);
  }
}
function yn(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Ht(i) {
  return i ?? "";
}
function T(i, e) {
  i.appendChild(e);
}
function F(i, e, t) {
  i.insertBefore(e, t || null);
}
function B(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function W(i) {
  return document.createElement(i);
}
function ue(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function _e(i) {
  return document.createTextNode(i);
}
function te() {
  return _e(" ");
}
function pn() {
  return _e("");
}
function J(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function bn(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function y(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function vn(i) {
  return Array.from(i.childNodes);
}
function qe(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Vt(i, e) {
  i.value = e ?? "";
}
function oe(i, e, t) {
  i.classList.toggle(e, !!t);
}
function wn(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let je;
function Ge(i) {
  je = i;
}
function Ni() {
  if (!je) throw new Error("Function called outside component initialization");
  return je;
}
function _n(i) {
  Ni().$$.on_destroy.push(i);
}
function En() {
  const i = Ni();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const o = wn(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((l) => {
        l.call(i, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Yt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Ae = [], Mt = [];
let Be = [];
const Xt = [], Ln = /* @__PURE__ */ Promise.resolve();
let Ct = !1;
function Sn() {
  Ct || (Ct = !0, Ln.then(Pi));
}
function kt(i) {
  Be.push(i);
}
const Lt = /* @__PURE__ */ new Set();
let Oe = 0;
function Pi() {
  if (Oe !== 0)
    return;
  const i = je;
  do {
    try {
      for (; Oe < Ae.length; ) {
        const e = Ae[Oe];
        Oe++, Ge(e), xn(e.$$);
      }
    } catch (e) {
      throw Ae.length = 0, Oe = 0, e;
    }
    for (Ge(null), Ae.length = 0, Oe = 0; Mt.length; ) Mt.pop()();
    for (let e = 0; e < Be.length; e += 1) {
      const t = Be[e];
      Lt.has(t) || (Lt.add(t), t());
    }
    Be.length = 0;
  } while (Ae.length);
  for (; Xt.length; )
    Xt.pop()();
  Ct = !1, Lt.clear(), Ge(i);
}
function xn(i) {
  if (i.fragment !== null) {
    i.update(), ye(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(kt);
  }
}
function Mn(i) {
  const e = [], t = [];
  Be.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), Be = e;
}
const rt = /* @__PURE__ */ new Set();
let Ne;
function ot() {
  Ne = {
    r: 0,
    c: [],
    p: Ne
    // parent group
  };
}
function st() {
  Ne.r || ye(Ne.c), Ne = Ne.p;
}
function j(i, e) {
  i && i.i && (rt.delete(i), i.i(e));
}
function V(i, e, t, n) {
  if (i && i.o) {
    if (rt.has(i)) return;
    rt.add(i), Ne.c.push(() => {
      rt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Kt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Cn(i, e) {
  V(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function kn(i, e, t, n, r, o, l, s, c, u, h, a) {
  let f = i.length, d = o.length, g = f;
  const p = {};
  for (; g--; ) p[i[g].key] = g;
  const b = [], v = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), E = [];
  for (g = d; g--; ) {
    const L = a(r, o, g), w = t(L);
    let k = l.get(w);
    k ? E.push(() => k.p(L, e)) : (k = u(w, L), k.c()), v.set(w, b[g] = k), w in p && S.set(w, Math.abs(g - p[w]));
  }
  const _ = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
  function x(L) {
    j(L, 1), L.m(s, h), l.set(L.key, L), h = L.first, d--;
  }
  for (; f && d; ) {
    const L = b[d - 1], w = i[f - 1], k = L.key, I = w.key;
    L === w ? (h = L.first, f--, d--) : v.has(I) ? !l.has(k) || _.has(k) ? x(L) : C.has(I) ? f-- : S.get(k) > S.get(I) ? (C.add(k), x(L)) : (_.add(I), f--) : (c(w, l), f--);
  }
  for (; f--; ) {
    const L = i[f];
    v.has(L.key) || c(L, l);
  }
  for (; d; ) x(b[d - 1]);
  return ye(E), b;
}
function Ee(i) {
  i && i.c();
}
function me(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), kt(() => {
    const o = i.$$.on_mount.map(Mi).filter(Ci);
    i.$$.on_destroy ? i.$$.on_destroy.push(...o) : ye(o), i.$$.on_mount = [];
  }), r.forEach(kt);
}
function ge(i, e) {
  const t = i.$$;
  t.fragment !== null && (Mn(t.after_update), ye(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Nn(i, e) {
  i.$$.dirty[0] === -1 && (Ae.push(i), Sn(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xe(i, e, t, n, r, o, l = null, s = [-1]) {
  const c = je;
  Ge(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: A,
    not_equal: r,
    bound: Qt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Qt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  l && l(u.root);
  let h = !1;
  if (u.ctx = t ? t(i, e.props || {}, (a, f, ...d) => {
    const g = d.length ? d[0] : f;
    return u.ctx && r(u.ctx[a], u.ctx[a] = g) && (!u.skip_bound && u.bound[a] && u.bound[a](g), h && Nn(i, a)), f;
  }) : [], u.update(), h = !0, ye(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = vn(e.target);
      u.fragment && u.fragment.l(a), a.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && j(i.$$.fragment), me(i, e.target, e.anchor), Pi();
  }
  Ge(c);
}
class Me {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _t(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _t(this, "$$set");
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
    if (!Ci(t))
      return A;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !dn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Pn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pn);
function Tn(i) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), y(e, "viewBox", "0 0 14 14"), y(e, "width", "13"), y(e, "height", "13"), y(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && B(e);
    }
  };
}
class Ti extends Me {
  constructor(e) {
    super(), xe(this, e, null, Tn, Se, {});
  }
}
function Rn(i) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), y(e, "viewBox", "0 0 30 30"), y(e, "fill", "none"), y(e, "xmlns", "http://www.w3.org/2000/svg"), y(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && B(e);
    }
  };
}
class Ri extends Me {
  constructor(e) {
    super(), xe(this, e, null, Rn, Se, {});
  }
}
function In(i) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function On(i) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Wn(i) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function An(i) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Bn(i) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Dn(i) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Un(i) {
  let e, t;
  return {
    c() {
      e = W("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || y(e, "src", t), y(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && y(e, "src", t), r & /*placeType*/
      64 && y(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function Fn(i) {
  let e, t, n, r;
  return {
    c() {
      e = W("img"), X(e.src, t = /*imageUrl*/
      i[5]) || y(e, "src", t), y(
        e,
        "alt",
        /*category*/
        i[4]
      ), y(e, "class", "svelte-ltkwvy");
    },
    m(o, l) {
      F(o, e, l), n || (r = J(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(o, l) {
      l & /*imageUrl*/
      32 && !X(e.src, t = /*imageUrl*/
      o[5]) && y(e, "src", t), l & /*category*/
      16 && y(
        e,
        "alt",
        /*category*/
        o[4]
      );
    },
    d(o) {
      o && B(e), n = !1, r();
    }
  };
}
function Jt(i) {
  let e, t;
  return {
    c() {
      e = W("span"), t = _e(
        /*placeType*/
        i[6]
      ), y(e, "class", "secondary svelte-ltkwvy");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && qe(
        t,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function zn(i) {
  let e, t, n, r, o, l, s, c, u, h = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), a, f, d = (
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
  ), g, p, b = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), v, S, E;
  function _(w, k) {
    return k & /*feature*/
    1 && (t = null), k & /*feature*/
    1 && (n = null), k & /*feature*/
    1 && (r = null), k & /*feature*/
    1 && (o = null), /*imageUrl*/
    w[5] ? Fn : (
      /*feature*/
      w[0].address ? Un : (t == null && (t = !!/*feature*/
      w[0].id.startsWith("road.")), t ? Dn : (n == null && (n = !!/*feature*/
      w[0].id.startsWith("address.")), n ? Bn : (r == null && (r = !!/*feature*/
      w[0].id.startsWith("postal_code.")), r ? An : (o == null && (o = !!/*feature*/
      w[0].id.startsWith("poi.")), o ? Wn : (
        /*isReverse*/
        w[7] ? On : In
      )))))
    );
  }
  let C = _(i, -1), x = C(i), L = d && Jt(i);
  return {
    c() {
      e = W("li"), x.c(), l = te(), s = W("span"), c = W("span"), u = W("span"), a = _e(h), f = te(), L && L.c(), g = te(), p = W("span"), v = _e(b), y(u, "class", "primary svelte-ltkwvy"), y(c, "class", "svelte-ltkwvy"), y(p, "class", "line2 svelte-ltkwvy"), y(s, "class", "texts svelte-ltkwvy"), y(e, "tabindex", "0"), y(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), y(e, "class", "svelte-ltkwvy"), oe(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(w, k) {
      F(w, e, k), x.m(e, null), T(e, l), T(e, s), T(s, c), T(c, u), T(u, a), T(c, f), L && L.m(c, null), T(s, g), T(s, p), T(p, v), S || (E = [
        J(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        J(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], S = !0);
    },
    p(w, [k]) {
      C === (C = _(w, k)) && x ? x.p(w, k) : (x.d(1), x = C(w), x && (x.c(), x.m(e, l))), k & /*feature*/
      1 && h !== (h = /*isReverse*/
      (w[7] ? (
        /*feature*/
        w[0].place_name
      ) : (
        /*feature*/
        w[0].place_name.replace(/,.*/, "")
      )) + "") && qe(a, h), k & /*showPlaceType, feature, imageUrl*/
      37 && (d = /*showPlaceType*/
      w[2] === "always" || /*showPlaceType*/
      w[2] && !/*feature*/
      w[0].address && !/*feature*/
      w[0].id.startsWith("road.") && !/*feature*/
      w[0].id.startsWith("address.") && !/*feature*/
      w[0].id.startsWith("postal_code.") && (!/*feature*/
      w[0].id.startsWith("poi.") || !/*imageUrl*/
      w[5]) && !/*isReverse*/
      w[7]), d ? L ? L.p(w, k) : (L = Jt(w), L.c(), L.m(c, null)) : L && (L.d(1), L = null), k & /*feature*/
      1 && b !== (b = /*isReverse*/
      (w[7] ? "" : (
        /*feature*/
        w[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && qe(v, b), k & /*selected*/
      2 && y(
        e,
        "data-selected",
        /*selected*/
        w[1]
      ), k & /*selected*/
      2 && oe(
        e,
        "selected",
        /*selected*/
        w[1]
      );
    },
    i: A,
    o: A,
    d(w) {
      w && B(e), x.d(), L && L.d(), S = !1, ye(E);
    }
  };
}
function Gn(i, e, t) {
  var E;
  let n, r, { feature: o } = e, { selected: l = !1 } = e, { showPlaceType: s } = e, { missingIconsCache: c } = e, { iconsBaseUrl: u } = e;
  const h = (E = o.properties) == null ? void 0 : E.categories;
  let a, f, d = 0, g = o.place_type[0] === "reverse";
  function p() {
    f && c.add(f), t(10, d++, d);
  }
  function b(_) {
    Yt.call(this, i, _);
  }
  function v(_) {
    Yt.call(this, i, _);
  }
  const S = () => p();
  return i.$$set = (_) => {
    "feature" in _ && t(0, o = _.feature), "selected" in _ && t(1, l = _.selected), "showPlaceType" in _ && t(2, s = _.showPlaceType), "missingIconsCache" in _ && t(9, c = _.missingIconsCache), "iconsBaseUrl" in _ && t(3, u = _.iconsBaseUrl);
  }, i.$$.update = () => {
    var _, C, x, L;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, n--, n), t(4, a = h == null ? void 0 : h[n]), t(5, f = a ? u + a.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!f || c.has(f)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((C = (_ = o.properties) == null ? void 0 : _.categories) == null ? void 0 : C.join(", ")) ?? ((L = (x = o.properties) == null ? void 0 : x.place_type_name) == null ? void 0 : L[0]) ?? o.place_type[0]);
  }, t(11, n = (h == null ? void 0 : h.length) ?? 0), [
    o,
    l,
    s,
    u,
    a,
    f,
    r,
    g,
    p,
    c,
    d,
    n,
    b,
    v,
    S
  ];
}
class qn extends Me {
  constructor(e) {
    super(), xe(this, e, Gn, zn, Se, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function jn(i) {
  let e;
  return {
    c() {
      e = W("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', y(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && B(e);
    }
  };
}
class Zn extends Me {
  constructor(e) {
    super(), xe(this, e, null, jn, Se, {});
  }
}
function Qn(i) {
  let e, t, n;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "stroke-width", "4"), y(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), y(t, "class", "svelte-gzo3ar"), y(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), y(e, "viewBox", "0 0 70 85"), y(e, "fill", "none"), y(e, "class", "svelte-gzo3ar"), oe(
        e,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), oe(
        e,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    m(r, o) {
      F(r, e, o), T(e, t);
    },
    p(r, [o]) {
      o & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && y(e, "width", n), o & /*displayIn*/
      1 && oe(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), o & /*displayIn*/
      1 && oe(
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
function Hn(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class Vn extends Me {
  constructor(e) {
    super(), xe(this, e, Hn, Qn, Se, { displayIn: 0 });
  }
}
function Yn(i) {
  let e, t;
  return {
    c() {
      e = ue("svg"), t = ue("path"), y(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), y(e, "viewBox", "0 0 60.006 21.412"), y(e, "width", "14"), y(e, "height", "20"), y(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      F(n, e, r), T(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && B(e);
    }
  };
}
class Xn extends Me {
  constructor(e) {
    super(), xe(this, e, null, Yn, Se, {});
  }
}
function Kn(i) {
  let e, t, n;
  return {
    c() {
      e = ue("svg"), t = ue("circle"), n = ue("path"), y(t, "cx", "4.789"), y(t, "cy", "4.787"), y(t, "r", "3.85"), y(t, "class", "svelte-1aq105l"), y(n, "d", "M12.063 12.063 7.635 7.635"), y(n, "class", "svelte-1aq105l"), y(e, "xmlns", "http://www.w3.org/2000/svg"), y(e, "width", "13"), y(e, "height", "13"), y(e, "viewBox", "0 0 13 13"), y(e, "class", "svelte-1aq105l");
    },
    m(r, o) {
      F(r, e, o), T(e, t), T(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && B(e);
    }
  };
}
class Jn extends Me {
  constructor(e) {
    super(), xe(this, e, null, Kn, Se, {});
  }
}
function $n(i, e, t) {
  const n = e[1], r = e[0], o = n - r;
  return i === n && t ? i : ((i - r) % o + o) % o + r;
}
function Ze(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ue;
async function er(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Ue && r.cachedLocationExpiry && Ue.time + r.cachedLocationExpiry > Date.now()) {
          if (!Ue.coords)
            break e;
          return Ue.coords;
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
          r.cachedLocationExpiry && (Ue = {
            time: Date.now(),
            coords: o
          });
        }
        if (t.signal.aborted)
          return;
      }
      if (r.type === "server-geolocation")
        return "ip";
      if (n && r.type === "map-center")
        return n[1].toFixed(6) + "," + n[2].toFixed(6);
    }
}
const tr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, $t = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, ei = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, ti = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, ii = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, ni = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function ir(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((d) => Number(d.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), o = Math.abs(n), l = t > 0 ? "N" : "S", s = n > 0 ? "E" : "W";
    let c;
    i == "DD" && (c = `${r}° ${l}, ${o}° ${s}`);
    const u = Math.floor(r), h = Math.floor(o), a = (r - u) * 60, f = (o - h) * 60;
    if (i == "DM") {
      let d = ri(a, 3).toFixed(3).padStart(6, "0"), g = ri(f, 3).toFixed(3).padStart(6, "0");
      d.endsWith(".000") && g.endsWith(".000") && (d = d.replace(/\.000$/, ""), g = g.replace(/\.000$/, "")), c = `${u}° ${d}' ${l}, ${h}° ${g}' ${s}`;
    }
    if (i == "DMS") {
      const d = Math.floor(a), g = Math.floor(f);
      let p = ((a - d) * 60).toFixed(1).padStart(4, "0"), b = ((f - g) * 60).toFixed(1).padStart(4, "0");
      const v = d.toString().padStart(2, "0"), S = g.toString().padStart(2, "0");
      p.endsWith(".0") && b.endsWith(".0") && (p = p.replace(/\.0$/, ""), b = b.replace(/\.0$/, "")), c = `${u}° ${v}' ${p}" ${l}, ${h}° ${S}' ${b}" ${s}`;
    }
    return c;
  } else
    throw new Error("no decimal coordinates to convert");
}
function ri(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function Wt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", o = "", l = null, s = [], c = !1;
  if (tr.test(i))
    throw new Error("invalid coordinate value");
  if ($t.test(i))
    if (s = $t.exec(i), c = Fe(s), c)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), n = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (n *= -1), l = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (ei.test(i))
    if (s = ei.exec(i), c = Fe(s), c) {
      if (t = s[2], n = s[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), l = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], o = s[5]) : s[4] && (r = s[4], o = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ti.test(i))
    if (s = ti.exec(i), c = Fe(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[9])), s[11] && (n += s[11] / 60), s[13] && (n += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (n = -1 * n), s[1] ? (r = s[1], o = s[8]) : s[7] && (r = s[7], o = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ii.test(i))
    if (s = ii.exec(i), c = Fe(s), c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, l = "DM"), s[6] && (t += s[6] / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12] / 60), s[14] && (n += s[14] / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ni.test(i)) {
    if (s = ni.exec(i), c = Fe(s), s.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (c)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, l = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, l = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12].replace(",", ".") / 60), s[14] && (n += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], o = s[9]) : s[8] && (r = s[8], o = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (c) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !o || !r && o)
      throw new Error("invalid coordinates value");
    if (r && r == o)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let u = /S|SOUTH/i;
    u.test(r) && t > 0 && (t = -1 * t), u = /W|WEST/i, u.test(o) && n > 0 && (n = -1 * n);
    const h = s[0].trim();
    let a, f;
    const d = /[,/;\u0020]/g, g = h.match(d);
    if (g == null) {
      const v = Math.floor(i.length / 2);
      a = h.substring(0, v).trim(), f = h.substring(v).trim();
    } else {
      let v;
      g.length % 2 == 1 ? v = Math.floor(g.length / 2) : v = g.length / 2 - 1;
      let S = 0;
      if (v == 0)
        S = h.indexOf(g[0]), a = h.substring(0, S).trim(), f = h.substring(S + 1).trim();
      else {
        let E = 0, _ = 0;
        for (; E <= v; )
          S = h.indexOf(g[E], _), _ = S + 1, E++;
        a = h.substring(0, S).trim(), f = h.substring(S + 1).trim();
      }
    }
    const p = a.split(".");
    if (p.length == 2 && p[1] == 0 && p[1].length != 2)
      throw new Error("invalid coordinates format");
    const b = f.split(".");
    if (b.length == 2 && b[1] == 0 && b[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(a) || /^\d+$/.test(f))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: h,
      verbatimLatitude: a,
      verbatimLongitude: f,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: l,
      closeEnough: nr,
      toCoordinateFormat: ir
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Fe(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let o = 0; o < r; o++) {
    const l = e[o], s = e[o + r], c = t.test(l) && t.test(s), u = n.test(l) && n.test(s), h = l == s;
    if (!(l == null && s == null)) {
      if (l == null || s == null)
        return !1;
      if (c || u || h)
        continue;
      return !1;
    }
  }
  return !0;
}
function oi(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function nr(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return oi(this.decimalLatitude, Number(e[0])) && oi(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const rr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
Wt.to = rr;
const or = [
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
], sr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, lr = [
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
], ur = [
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
function ar() {
  const i = [];
  return or.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...sr });
  }), [...i, ...lr, ...ur];
}
const cr = ar();
Wt.formats = cr.map((i) => i.verbatimCoordinates);
const fr = Wt;
function si(i, e, t) {
  const n = i.slice();
  return n[83] = e[t], n[85] = t, n;
}
function li(i) {
  let e, t;
  return e = new Zn({}), {
    c() {
      Ee(e.$$.fragment);
    },
    m(n, r) {
      me(e, n, r), t = !0;
    },
    i(n) {
      t || (j(e.$$.fragment, n), t = !0);
    },
    o(n) {
      V(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ge(e, n);
    }
  };
}
function ui(i) {
  let e, t, n, r, o;
  return t = new Xn({}), {
    c() {
      e = W("button"), Ee(t.$$.fragment), y(e, "type", "button"), y(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), y(e, "class", "svelte-qnu791"), oe(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(l, s) {
      F(l, e, s), me(t, e, null), n = !0, r || (o = J(
        e,
        "click",
        /*click_handler_2*/
        i[68]
      ), r = !0);
    },
    p(l, s) {
      (!n || s[0] & /*reverseButtonTitle*/
      512) && y(
        e,
        "title",
        /*reverseButtonTitle*/
        l[9]
      ), (!n || s[0] & /*reverseActive*/
      1) && oe(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      n || (j(t.$$.fragment, l), n = !0);
    },
    o(l) {
      V(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && B(e), ge(t), r = !1, o();
    }
  };
}
function dr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, o, l, s = Kt(
    /*listFeatures*/
    i[14]
  );
  const c = (u) => (
    /*feature*/
    u[83].id + /*feature*/
    (u[83].address ? "," + /*feature*/
    u[83].address : "")
  );
  for (let u = 0; u < s.length; u += 1) {
    let h = si(i, s, u), a = c(h);
    n.set(a, t[u] = ai(a, h));
  }
  return {
    c() {
      e = W("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      y(e, "class", "svelte-qnu791");
    },
    m(u, h) {
      F(u, e, h);
      for (let a = 0; a < t.length; a += 1)
        t[a] && t[a].m(e, null);
      r = !0, o || (l = [
        J(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[72]
        ),
        J(
          e,
          "blur",
          /*blur_handler_1*/
          i[73]
        )
      ], o = !0);
    },
    p(u, h) {
      h[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (s = Kt(
        /*listFeatures*/
        u[14]
      ), ot(), t = kn(t, h, c, 1, u, s, n, e, Cn, ai, null, si), st());
    },
    i(u) {
      if (!r) {
        for (let h = 0; h < s.length; h += 1)
          j(t[h]);
        r = !0;
      }
    },
    o(u) {
      for (let h = 0; h < t.length; h += 1)
        V(t[h]);
      r = !1;
    },
    d(u) {
      u && B(e);
      for (let h = 0; h < t.length; h += 1)
        t[h].d();
      o = !1, ye(l);
    }
  };
}
function hr(i) {
  let e, t, n, r, o, l;
  return t = new Ri({}), {
    c() {
      e = W("div"), Ee(t.$$.fragment), n = te(), r = W("div"), o = _e(
        /*noResultsMessage*/
        i[7]
      ), y(r, "class", "svelte-qnu791"), y(e, "class", "no-results svelte-qnu791");
    },
    m(s, c) {
      F(s, e, c), me(t, e, null), T(e, n), T(e, r), T(r, o), l = !0;
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
      l || (j(t.$$.fragment, s), l = !0);
    },
    o(s) {
      V(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && B(e), ge(t);
    }
  };
}
function mr(i) {
  let e = "", t;
  return {
    c() {
      t = _e(e);
    },
    m(n, r) {
      F(n, t, r);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && B(t);
    }
  };
}
function gr(i) {
  let e, t, n, r, o, l, s, c, u, h, a;
  return t = new Ri({}), c = new Ti({}), {
    c() {
      e = W("div"), Ee(t.$$.fragment), n = te(), r = W("div"), o = _e(
        /*errorMessage*/
        i[6]
      ), l = te(), s = W("button"), Ee(c.$$.fragment), y(r, "class", "svelte-qnu791"), y(s, "class", "svelte-qnu791"), y(e, "class", "error svelte-qnu791");
    },
    m(f, d) {
      F(f, e, d), me(t, e, null), T(e, n), T(e, r), T(r, o), T(e, l), T(e, s), me(c, s, null), u = !0, h || (a = J(
        s,
        "click",
        /*click_handler_3*/
        i[69]
      ), h = !0);
    },
    p(f, d) {
      (!u || d[0] & /*errorMessage*/
      64) && qe(
        o,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      u || (j(t.$$.fragment, f), j(c.$$.fragment, f), u = !0);
    },
    o(f) {
      V(t.$$.fragment, f), V(c.$$.fragment, f), u = !1;
    },
    d(f) {
      f && B(e), ge(t), ge(c), h = !1, a();
    }
  };
}
function ai(i, e) {
  let t, n, r;
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
  return n = new qn({
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
  }), n.$on("mouseenter", o), n.$on("focus", l), {
    key: i,
    first: null,
    c() {
      t = pn(), Ee(n.$$.fragment), this.first = t;
    },
    m(s, c) {
      F(s, t, c), me(n, s, c), r = !0;
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
      e[12]), n.$set(u);
    },
    i(s) {
      r || (j(n.$$.fragment, s), r = !0);
    },
    o(s) {
      V(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(t), ge(n, s);
    }
  };
}
function yr(i) {
  let e, t, n, r, o, l, s, c, u, h, a, f, d, g, p, b, v, S, E, _, C, x = !1;
  o = new Jn({}), a = new Ti({});
  let L = (
    /*abortController*/
    i[19] && li()
  ), w = (
    /*enableReverse*/
    i[5] === !0 && ui(i)
  );
  const k = (
    /*#slots*/
    i[60].default
  ), I = hn(
    k,
    i,
    /*$$scope*/
    i[59],
    null
  ), D = [gr, mr, hr, dr], z = [];
  function O(M, G) {
    var $, ie;
    return (
      /*error*/
      M[18] ? 0 : (
        /*focusedDelayed*/
        M[16] ? (
          /*listFeatures*/
          (($ = M[14]) == null ? void 0 : $.length) === 0 ? 2 : (
            /*focusedDelayed*/
            M[16] && /*listFeatures*/
            ((ie = M[14]) != null && ie.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(b = O(i)) && (v = z[b] = D[b](i)), {
    c() {
      e = te(), t = W("form"), n = W("div"), r = W("button"), Ee(o.$$.fragment), l = te(), s = W("input"), c = te(), u = W("div"), h = W("button"), Ee(a.$$.fragment), f = te(), L && L.c(), d = te(), w && w.c(), g = te(), I && I.c(), p = te(), v && v.c(), y(r, "class", "search-button svelte-qnu791"), y(r, "type", "button"), y(
        s,
        "placeholder",
        /*placeholder*/
        i[8]
      ), y(
        s,
        "aria-label",
        /*placeholder*/
        i[8]
      ), y(s, "class", "svelte-qnu791"), y(h, "type", "button"), y(
        h,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), y(h, "class", "svelte-qnu791"), y(u, "class", "clear-button-container svelte-qnu791"), oe(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), y(n, "class", "input-group svelte-qnu791"), y(t, "tabindex", "0"), y(t, "class", S = Ht(
        /*className*/
        i[2]
      ) + " svelte-qnu791"), oe(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(M, G) {
      F(M, e, G), F(M, t, G), T(t, n), T(n, r), me(o, r, null), T(n, l), T(n, s), i[62](s), Vt(
        s,
        /*searchValue*/
        i[1]
      ), T(n, c), T(n, u), T(u, h), me(a, h, null), T(u, f), L && L.m(u, null), T(n, d), w && w.m(n, null), T(n, g), I && I.m(n, null), T(t, p), ~b && z[b].m(t, null), E = !0, _ || (C = [
        J(
          r,
          "click",
          /*click_handler*/
          i[61]
        ),
        J(
          s,
          "input",
          /*input_1_input_handler*/
          i[63]
        ),
        J(
          s,
          "focus",
          /*focus_handler*/
          i[64]
        ),
        J(
          s,
          "blur",
          /*blur_handler*/
          i[65]
        ),
        J(
          s,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        J(
          s,
          "input",
          /*input_handler*/
          i[66]
        ),
        J(
          h,
          "click",
          /*click_handler_1*/
          i[67]
        ),
        J(t, "submit", bn(
          /*handleOnSubmit*/
          i[21]
        ))
      ], _ = !0);
    },
    p(M, G) {
      (!E || G[0] & /*placeholder*/
      256) && y(
        s,
        "placeholder",
        /*placeholder*/
        M[8]
      ), (!E || G[0] & /*placeholder*/
      256) && y(
        s,
        "aria-label",
        /*placeholder*/
        M[8]
      ), G[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      M[1] && Vt(
        s,
        /*searchValue*/
        M[1]
      ), (!E || G[0] & /*clearButtonTitle*/
      8) && y(
        h,
        "title",
        /*clearButtonTitle*/
        M[3]
      ), /*abortController*/
      M[19] ? L ? G[0] & /*abortController*/
      524288 && j(L, 1) : (L = li(), L.c(), j(L, 1), L.m(u, null)) : L && (ot(), V(L, 1, 1, () => {
        L = null;
      }), st()), (!E || G[0] & /*searchValue*/
      2) && oe(
        u,
        "displayable",
        /*searchValue*/
        M[1] !== ""
      ), /*enableReverse*/
      M[5] === !0 ? w ? (w.p(M, G), G[0] & /*enableReverse*/
      32 && j(w, 1)) : (w = ui(M), w.c(), j(w, 1), w.m(n, g)) : w && (ot(), V(w, 1, 1, () => {
        w = null;
      }), st()), I && I.p && (!E || G[1] & /*$$scope*/
      268435456) && gn(
        I,
        k,
        M,
        /*$$scope*/
        M[59],
        E ? mn(
          k,
          /*$$scope*/
          M[59],
          G,
          null
        ) : yn(
          /*$$scope*/
          M[59]
        ),
        null
      );
      let $ = b;
      b = O(M), b === $ ? ~b && z[b].p(M, G) : (v && (ot(), V(z[$], 1, 1, () => {
        z[$] = null;
      }), st()), ~b ? (v = z[b], v ? v.p(M, G) : (v = z[b] = D[b](M), v.c()), j(v, 1), v.m(t, null)) : v = null), (!E || G[0] & /*className*/
      4 && S !== (S = Ht(
        /*className*/
        M[2]
      ) + " svelte-qnu791")) && y(t, "class", S), (!E || G[0] & /*className, collapsed, searchValue*/
      22) && oe(
        t,
        "can-collapse",
        /*collapsed*/
        M[4] && /*searchValue*/
        M[1] === ""
      );
    },
    i(M) {
      E || (j(x), j(o.$$.fragment, M), j(a.$$.fragment, M), j(L), j(w), j(I, M), j(v), E = !0);
    },
    o(M) {
      V(x), V(o.$$.fragment, M), V(a.$$.fragment, M), V(L), V(w), V(I, M), V(v), E = !1;
    },
    d(M) {
      M && (B(e), B(t)), ge(o), i[62](null), ge(a), L && L.d(), w && w.d(), I && I.d(M), ~b && z[b].d(), _ = !1, ye(C);
    }
  };
}
function pr(i, e, t) {
  let n, { $$slots: r = {}, $$scope: o } = e;
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
  let { class: s = void 0 } = e, { apiKey: c } = e, { bbox: u = void 0 } = e, { clearButtonTitle: h = "clear" } = e, { clearOnBlur: a = !1 } = e, { collapsed: f = !1 } = e, { country: d = void 0 } = e, { debounceSearch: g = 200 } = e, { enableReverse: p = !1 } = e, { errorMessage: b = "Something went wrong…" } = e, { filter: v = () => !0 } = e, { flyTo: S = !0 } = e, { fuzzyMatch: E = !0 } = e, { language: _ = void 0 } = e, { limit: C = void 0 } = e, { mapController: x = void 0 } = e, { minLength: L = 2 } = e, { noResultsMessage: w = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: I = [{ type: "server-geolocation" }] } = e, { reverseActive: D = p === "always" } = e, { reverseButtonTitle: z = "toggle reverse geocoding" } = e, { searchValue: O = "" } = e, { showFullGeometry: M = !0 } = e, { showPlaceType: G = "ifNeeded" } = e, { showResultsWhileTyping: $ = !0 } = e, { selectFirst: ie = !0 } = e, { flyToSelected: ct = !1 } = e, { markerOnSelected: Xe = !0 } = e, { types: Ce = void 0 } = e, { excludeTypes: Ke = !1 } = e, { zoom: Te = l } = e, { maxZoom: Je = void 0 } = e, { apiUrl: ft = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: dt = {} } = e, { iconsBaseUrl: Ft = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.4.1/icons/" } = e, { adjustUrlQuery: ht = () => {
  } } = e;
  function zi() {
    ae.focus();
  }
  function Gi() {
    ae.blur();
  }
  function zt(m, q = !0, H = !1) {
    t(1, O = m), q ? (t(15, U = -1), qt()) : (pt(!H, H), setTimeout(() => {
      ae.focus(), ae.select();
    }));
  }
  function qi() {
    t(14, R = void 0), t(56, N = void 0), t(15, U = -1);
  }
  function ji() {
    t(55, Z = []), t(56, N = void 0);
  }
  let Re = !1, R, Z, N, Gt = "", ae, U = -1, ce, $e = [], ke, Ie, et, mt;
  const Zi = /* @__PURE__ */ new Set(), pe = En();
  _n(() => {
    x && (x.setEventHandler(void 0), x.indicateReverse(!1), x.setSelectedMarker(-1), x.setMarkers(void 0, void 0));
  });
  function qt(m) {
    if (Ie && (clearTimeout(Ie), Ie = void 0), U > -1 && R)
      t(56, N = R[U]), t(1, O = N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")), t(18, ce = void 0), t(55, Z = void 0), t(15, U = -1);
    else if (O) {
      const q = m || !gt(O);
      yt(O, { exact: !0 }).then(() => {
        t(55, Z = R), t(56, N = void 0), q && Qi();
      }).catch((H) => t(18, ce = H));
    }
  }
  function gt(m) {
    try {
      return fr(m, 6);
    } catch {
      return !1;
    }
  }
  async function yt(m, { byId: q = !1, exact: H = !1 } = {}) {
    t(18, ce = void 0), ke == null || ke.abort();
    const ee = new AbortController();
    t(19, ke = ee);
    try {
      const P = gt(m), Q = new URLSearchParams();
      if (_ !== void 0 && Q.set("language", Array.isArray(_) ? _.join(",") : _ ?? ""), Ce && Q.set("types", Ce.join(",")), Ke && Q.set("excludeTypes", String(Ke)), u && Q.set("bbox", u.map((tt) => tt.toFixed(6)).join(",")), d && Q.set("country", Array.isArray(d) ? d.join(",") : d), !q && !P) {
        const tt = await er(x, I, ee);
        tt && Q.set("proximity", tt), (H || !$) && Q.set("autocomplete", "false"), Q.set("fuzzyMatch", String(E));
      }
      C !== void 0 && (!P || (Ce == null ? void 0 : Ce.length) === 1) && Q.set("limit", String(C)), Q.set("key", c), ht(Q);
      const fe = ft + "/" + encodeURIComponent(P ? P.decimalLongitude + "," + P.decimalLatitude : m) + ".json?" + Q.toString();
      if (fe === Gt) {
        q ? (t(14, R = void 0), t(56, N = $e[0])) : t(14, R = $e);
        return;
      }
      Gt = fe;
      const vt = await fetch(fe, { signal: ee.signal, ...dt });
      if (!vt.ok)
        throw new Error(await vt.text());
      const wt = await vt.json();
      pe("response", { url: fe, featureCollection: wt }), q ? (t(14, R = void 0), t(56, N = wt.features[0]), $e = [N]) : (t(14, R = wt.features.filter(v)), P && R.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + P.decimalLongitude + "_" + P.decimalLatitude,
        text: P.decimalLatitude + ", " + P.decimalLongitude,
        place_name: P.decimalLatitude + ", " + P.decimalLongitude,
        place_type: ["reverse"],
        center: [P.decimalLongitude, P.decimalLatitude],
        bbox: [
          P.decimalLongitude,
          P.decimalLatitude,
          P.decimalLongitude,
          P.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [P.decimalLongitude, P.decimalLatitude]
        }
      }), $e = R, P && ae.focus());
    } catch (P) {
      if (P && typeof P == "object" && "name" in P && P.name === "AbortError")
        return;
      throw P;
    } finally {
      ee === ke && t(19, ke = void 0);
    }
  }
  function Qi() {
    var ee;
    if (!(Z != null && Z.length) || !S)
      return;
    const m = [180, 90, -180, -90], q = !Z.some((P) => !P.matching_text);
    let H;
    for (const P of Z) {
      const Q = De(P);
      if (H = Je ?? (H === void 0 ? Q : Q === void 0 ? H : Math.max(H, Q)), q || !P.matching_text)
        for (const fe of [0, 1, 2, 3])
          m[fe] = Math[fe < 2 ? "min" : "max"](m[fe], ((ee = P.bbox) == null ? void 0 : ee[fe]) ?? P.center[fe % 2]);
    }
    x && Z.length > 0 && (N && m[0] === m[2] && m[1] === m[3] ? x.flyTo(N.center, De(N)) : x.fitBounds(Ze(m), 50, H));
  }
  function De(m) {
    var H;
    if (!m.bbox || m.bbox[0] !== m.bbox[2] && m.bbox[1] !== m.bbox[3])
      return;
    if (typeof Te == "number")
      return m.id.startsWith("poi.") || m.id.startsWith("address.") ? Je : Te;
    const q = m.id.replace(/\..*/, "");
    return (Array.isArray((H = m.properties) == null ? void 0 : H.categories) ? m.properties.categories.reduce(
      (ee, P) => {
        const Q = Te[q + "." + P];
        return ee === void 0 ? Q : Q === void 0 ? ee : Math.max(ee, Q);
      },
      void 0
    ) : void 0) ?? Te[q];
  }
  function Hi(m) {
    t(0, D = p === "always"), t(14, R = void 0), t(56, N = void 0), t(15, U = -1), zt(m[1].toFixed(6) + ", " + $n(m[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Vi(m) {
    if (!R)
      return;
    let q = m.key === "ArrowDown" ? 1 : m.key === "ArrowUp" ? -1 : 0;
    q && (U === (ie ? 0 : -1) && q === -1 && t(15, U = R.length), t(15, U += q), U >= R.length && t(15, U = -1), U < 0 && ie && t(15, U = 0), m.preventDefault());
  }
  function pt(m = !0, q = !1) {
    if (t(18, ce = void 0), $ || q) {
      if (Ie && clearTimeout(Ie), O.length < L)
        return;
      const H = O;
      Ie = window.setTimeout(
        () => {
          yt(H).catch((ee) => t(18, ce = ee));
        },
        m ? g : 0
      );
    } else
      t(14, R = void 0), t(18, ce = void 0);
  }
  function bt(m) {
    t(56, N = m), t(1, O = m.place_name), t(15, U = -1);
  }
  const Yi = () => ae.focus();
  function Xi(m) {
    Mt[m ? "unshift" : "push"](() => {
      ae = m, t(17, ae);
    });
  }
  function Ki() {
    O = this.value, t(1, O), t(13, Re), t(28, a);
  }
  const Ji = () => t(13, Re = !0), $i = () => t(13, Re = !1), en = () => pt(), tn = () => {
    t(1, O = ""), ae.focus();
  }, nn = () => t(0, D = !D), rn = () => t(18, ce = void 0), on = (m) => t(15, U = m), sn = (m) => bt(m), ln = () => {
    ie || t(15, U = -1);
  }, un = () => {
  };
  return i.$$set = (m) => {
    "class" in m && t(2, s = m.class), "apiKey" in m && t(26, c = m.apiKey), "bbox" in m && t(27, u = m.bbox), "clearButtonTitle" in m && t(3, h = m.clearButtonTitle), "clearOnBlur" in m && t(28, a = m.clearOnBlur), "collapsed" in m && t(4, f = m.collapsed), "country" in m && t(29, d = m.country), "debounceSearch" in m && t(30, g = m.debounceSearch), "enableReverse" in m && t(5, p = m.enableReverse), "errorMessage" in m && t(6, b = m.errorMessage), "filter" in m && t(31, v = m.filter), "flyTo" in m && t(32, S = m.flyTo), "fuzzyMatch" in m && t(33, E = m.fuzzyMatch), "language" in m && t(34, _ = m.language), "limit" in m && t(35, C = m.limit), "mapController" in m && t(36, x = m.mapController), "minLength" in m && t(37, L = m.minLength), "noResultsMessage" in m && t(7, w = m.noResultsMessage), "placeholder" in m && t(8, k = m.placeholder), "proximity" in m && t(38, I = m.proximity), "reverseActive" in m && t(0, D = m.reverseActive), "reverseButtonTitle" in m && t(9, z = m.reverseButtonTitle), "searchValue" in m && t(1, O = m.searchValue), "showFullGeometry" in m && t(39, M = m.showFullGeometry), "showPlaceType" in m && t(10, G = m.showPlaceType), "showResultsWhileTyping" in m && t(40, $ = m.showResultsWhileTyping), "selectFirst" in m && t(11, ie = m.selectFirst), "flyToSelected" in m && t(41, ct = m.flyToSelected), "markerOnSelected" in m && t(42, Xe = m.markerOnSelected), "types" in m && t(43, Ce = m.types), "excludeTypes" in m && t(44, Ke = m.excludeTypes), "zoom" in m && t(45, Te = m.zoom), "maxZoom" in m && t(46, Je = m.maxZoom), "apiUrl" in m && t(47, ft = m.apiUrl), "fetchParameters" in m && t(48, dt = m.fetchParameters), "iconsBaseUrl" in m && t(12, Ft = m.iconsBaseUrl), "adjustUrlQuery" in m && t(49, ht = m.adjustUrlQuery), "$$scope" in m && t(59, o = m.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, D = p === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, et = Re), a && !Re && t(1, O = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    64 && O.length < L && (t(56, N = void 0), t(14, R = void 0), t(18, ce = void 0), t(55, Z = R)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    33554688 && M && N && !N.address && N.geometry.type === "Point" && N.place_type[0] !== "reverse" && yt(N.id, { byId: !0 }).catch((m) => t(18, ce = m)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (x && N && N.id !== mt && S && (!N.bbox || N.bbox[0] === N.bbox[2] && N.bbox[1] === N.bbox[3] ? x.flyTo(N.center, De(N)) : x.fitBounds(Ze(N.bbox), 50, De(N)), t(14, R = void 0), t(55, Z = void 0), t(15, U = -1)), t(57, mt = N == null ? void 0 : N.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && ie && R != null && R.length && t(15, U = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (ie || t(15, U = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    16777216 && Z !== R && t(55, Z = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && x && x.setEventHandler((m) => {
      switch (m.type) {
        case "mapClick":
          D && Hi(m.coordinates);
          break;
        case "markerClick":
          {
            const q = R == null ? void 0 : R.find((H) => H.id === m.id);
            q && bt(q);
          }
          break;
        case "markerMouseEnter":
          Z && t(15, U = et ? (R == null ? void 0 : R.findIndex((q) => q.id === m.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          Z && t(15, U = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, n = R == null ? void 0 : R[U]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && x && n && S && ct && x.flyTo(n.center, De(n)), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    2080 && (Xe || x == null || x.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    150997024 && x && Xe && !Z && (x.setMarkers(n ? [n] : void 0, void 0), x.setSelectedMarker(n ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    50331680 && x && x.setMarkers(Z, N), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && Z && x && x.setSelectedMarker(U), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    32 && x) {
      const m = gt(O);
      x.setReverseMarker(m ? [m.decimalLongitude, m.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    134217728 && pe("select", n), i.$$.dirty[1] & /*picked*/
    33554432 && pe("pick", N), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && pe("optionsVisibilityChange", et && !!R), i.$$.dirty[0] & /*listFeatures*/
    16384 && pe("featuresListed", R), i.$$.dirty[1] & /*markedFeatures*/
    16777216 && pe("featuresMarked", Z), i.$$.dirty[0] & /*reverseActive*/
    1 && pe("reverseToggle", D), i.$$.dirty[0] & /*searchValue*/
    2 && pe("queryChange", O), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    32 && x && x.indicateReverse(D);
  }, [
    D,
    O,
    s,
    h,
    f,
    p,
    b,
    w,
    k,
    z,
    G,
    ie,
    Ft,
    Re,
    R,
    U,
    et,
    ae,
    ce,
    ke,
    Zi,
    qt,
    Vi,
    pt,
    bt,
    l,
    c,
    u,
    a,
    d,
    g,
    v,
    S,
    E,
    _,
    C,
    x,
    L,
    I,
    M,
    $,
    ct,
    Xe,
    Ce,
    Ke,
    Te,
    Je,
    ft,
    dt,
    ht,
    zi,
    Gi,
    zt,
    qi,
    ji,
    Z,
    N,
    mt,
    n,
    o,
    r,
    Yi,
    Xi,
    Ki,
    Ji,
    $i,
    en,
    tn,
    nn,
    rn,
    on,
    sn,
    ln,
    un
  ];
}
let br = class extends Me {
  constructor(e) {
    super(), xe(
      this,
      e,
      pr,
      yr,
      Se,
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
function Qe(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function At(i, e, t = {}) {
  for (const r of i) {
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
  return Qe({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function He(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function Ii(i, e, t = {}) {
  return Qe({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function Oi(i, e, t) {
  if (i !== null)
    for (var n, r, o, l, s, c, u, h = 0, a = 0, f, d = i.type, g = d === "FeatureCollection", p = d === "Feature", b = g ? i.features.length : 1, v = 0; v < b; v++) {
      u = g ? i.features[v].geometry : p ? i.geometry : i, f = u ? u.type === "GeometryCollection" : !1, s = f ? u.geometries.length : 1;
      for (var S = 0; S < s; S++) {
        var E = 0, _ = 0;
        if (l = f ? u.geometries[S] : u, l !== null) {
          c = l.coordinates;
          var C = l.type;
          switch (h = 0, C) {
            case null:
              break;
            case "Point":
              if (e(
                c,
                a,
                v,
                E,
                _
              ) === !1)
                return !1;
              a++, E++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < c.length; n++) {
                if (e(
                  c[n],
                  a,
                  v,
                  E,
                  _
                ) === !1)
                  return !1;
                a++, C === "MultiPoint" && E++;
              }
              C === "LineString" && E++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < c.length; n++) {
                for (r = 0; r < c[n].length - h; r++) {
                  if (e(
                    c[n][r],
                    a,
                    v,
                    E,
                    _
                  ) === !1)
                    return !1;
                  a++;
                }
                C === "MultiLineString" && E++, C === "Polygon" && _++;
              }
              C === "Polygon" && E++;
              break;
            case "MultiPolygon":
              for (n = 0; n < c.length; n++) {
                for (_ = 0, r = 0; r < c[n].length; r++) {
                  for (o = 0; o < c[n][r].length - h; o++) {
                    if (e(
                      c[n][r][o],
                      a,
                      v,
                      E,
                      _
                    ) === !1)
                      return !1;
                    a++;
                  }
                  _++;
                }
                E++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < l.geometries.length; n++)
                if (Oi(l.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Bt(i, e) {
  var t, n, r, o, l, s, c, u, h, a, f = 0, d = i.type === "FeatureCollection", g = i.type === "Feature", p = d ? i.features.length : 1;
  for (t = 0; t < p; t++) {
    for (s = d ? i.features[t].geometry : g ? i.geometry : i, u = d ? i.features[t].properties : g ? i.properties : {}, h = d ? i.features[t].bbox : g ? i.bbox : void 0, a = d ? i.features[t].id : g ? i.id : void 0, c = s ? s.type === "GeometryCollection" : !1, l = c ? s.geometries.length : 1, r = 0; r < l; r++) {
      if (o = c ? s.geometries[r] : s, o === null) {
        if (e(
          null,
          f,
          u,
          h,
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
            h,
            a
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < o.geometries.length; n++)
            if (e(
              o.geometries[n],
              f,
              u,
              h,
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
function vr(i, e) {
  Bt(i, function(t, n, r, o, l) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Qe(t, r, { bbox: o, id: l }),
          n,
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
      var h = t.coordinates[u], a = {
        type: c,
        coordinates: h
      };
      if (e(Qe(a, r), n, u) === !1)
        return !1;
    }
  });
}
function wr(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Oi(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var Nt = wr;
function _r(i) {
  if (!i)
    throw new Error("geojson is required");
  switch (i.type) {
    case "Feature":
      return Wi(i);
    case "FeatureCollection":
      return Er(i);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Dt(i);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function Wi(i) {
  const e = { type: "Feature" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[t] = i[t];
    }
  }), e.properties = Ai(i.properties), i.geometry == null ? e.geometry = null : e.geometry = Dt(i.geometry), e;
}
function Ai(i) {
  const e = {};
  return i && Object.keys(i).forEach((t) => {
    const n = i[t];
    typeof n == "object" ? n === null ? e[t] = null : Array.isArray(n) ? e[t] = n.map((r) => r) : e[t] = Ai(n) : e[t] = n;
  }), e;
}
function Er(i) {
  const e = { type: "FeatureCollection" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "features":
        return;
      default:
        e[t] = i[t];
    }
  }), e.features = i.features.map((t) => Wi(t)), e;
}
function Dt(i) {
  const e = { type: i.type };
  return i.bbox && (e.bbox = i.bbox), i.type === "GeometryCollection" ? (e.geometries = i.geometries.map((t) => Dt(t)), e) : (e.coordinates = Bi(i.coordinates), e);
}
function Bi(i) {
  const e = i;
  return typeof e[0] != "object" ? e.slice() : e.map((t) => Bi(t));
}
var Lr = _r;
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
function Sr(i, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, r, o, l;
  return l = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function s(u) {
    return function(h) {
      return c([u, h]);
    };
  }
  function c(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, r && (o = u[0] & 2 ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
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
      u = e.call(i, t);
    } catch (h) {
      u = [6, h], r = 0;
    } finally {
      n = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var Le = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(e, t) {
      this.next = null, this.key = e, this.data = t, this.left = null, this.right = null;
    }
    return i;
  }()
);
function xr(i, e) {
  return i > e ? 1 : i < e ? -1 : 0;
}
function be(i, e, t) {
  for (var n = new Le(null, null), r = n, o = n; ; ) {
    var l = t(i, e.key);
    if (l < 0) {
      if (e.left === null)
        break;
      if (t(i, e.left.key) < 0) {
        var s = e.left;
        if (e.left = s.right, s.right = e, e = s, e.left === null)
          break;
      }
      o.left = e, o = e, e = e.left;
    } else if (l > 0) {
      if (e.right === null)
        break;
      if (t(i, e.right.key) > 0) {
        var s = e.right;
        if (e.right = s.left, s.left = e, e = s, e.right === null)
          break;
      }
      r.right = e, r = e, e = e.right;
    } else
      break;
  }
  return r.right = e.left, o.left = e.right, e.left = n.right, e.right = n.left, e;
}
function St(i, e, t, n) {
  var r = new Le(i, e);
  if (t === null)
    return r.left = r.right = null, r;
  t = be(i, t, n);
  var o = n(i, t.key);
  return o < 0 ? (r.left = t.left, r.right = t, t.left = null) : o >= 0 && (r.right = t.right, r.left = t, t.right = null), r;
}
function ci(i, e, t) {
  var n = null, r = null;
  if (e) {
    e = be(i, e, t);
    var o = t(e.key, i);
    o === 0 ? (n = e.left, r = e.right) : o < 0 ? (r = e.right, e.right = null, n = e) : (n = e.left, e.left = null, r = e);
  }
  return { left: n, right: r };
}
function Mr(i, e, t) {
  return e === null ? i : (i === null || (e = be(i.key, e, t), e.left = i), e);
}
function Pt(i, e, t, n, r) {
  if (i) {
    n("" + e + (t ? "└── " : "├── ") + r(i) + `
`);
    var o = e + (t ? "    " : "│   ");
    i.left && Pt(i.left, o, !1, n, r), i.right && Pt(i.right, o, !0, n, r);
  }
}
var Ut = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = xr), this._root = null, this._size = 0, this._comparator = e;
    }
    return i.prototype.insert = function(e, t) {
      return this._size++, this._root = St(e, t, this._root, this._comparator);
    }, i.prototype.add = function(e, t) {
      var n = new Le(e, t);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, o = be(e, this._root, r), l = r(e, o.key);
      return l === 0 ? this._root = o : (l < 0 ? (n.left = o.left, n.right = o, o.left = null) : l > 0 && (n.right = o.right, n.left = o, o.right = null), this._size++, this._root = n), this._root;
    }, i.prototype.remove = function(e) {
      this._root = this._remove(e, this._root, this._comparator);
    }, i.prototype._remove = function(e, t, n) {
      var r;
      if (t === null)
        return null;
      t = be(e, t, n);
      var o = n(e, t.key);
      return o === 0 ? (t.left === null ? r = t.right : (r = be(e, t.left, n), r.right = t.right), this._size--, r) : t;
    }, i.prototype.pop = function() {
      var e = this._root;
      if (e) {
        for (; e.left; )
          e = e.left;
        return this._root = be(e.key, this._root, this._comparator), this._root = this._remove(e.key, this._root, this._comparator), { key: e.key, data: e.data };
      }
      return null;
    }, i.prototype.findStatic = function(e) {
      for (var t = this._root, n = this._comparator; t; ) {
        var r = n(e, t.key);
        if (r === 0)
          return t;
        r < 0 ? t = t.left : t = t.right;
      }
      return null;
    }, i.prototype.find = function(e) {
      return this._root && (this._root = be(e, this._root, this._comparator), this._comparator(e, this._root.key) !== 0) ? null : this._root;
    }, i.prototype.contains = function(e) {
      for (var t = this._root, n = this._comparator; t; ) {
        var r = n(e, t.key);
        if (r === 0)
          return !0;
        r < 0 ? t = t.left : t = t.right;
      }
      return !1;
    }, i.prototype.forEach = function(e, t) {
      for (var n = this._root, r = [], o = !1; !o; )
        n !== null ? (r.push(n), n = n.left) : r.length !== 0 ? (n = r.pop(), e.call(t, n), n = n.right) : o = !0;
      return this;
    }, i.prototype.range = function(e, t, n, r) {
      for (var o = [], l = this._comparator, s = this._root, c; o.length !== 0 || s; )
        if (s)
          o.push(s), s = s.left;
        else {
          if (s = o.pop(), c = l(s.key, t), c > 0)
            break;
          if (l(s.key, e) >= 0 && n.call(r, s))
            return this;
          s = s.right;
        }
      return this;
    }, i.prototype.keys = function() {
      var e = [];
      return this.forEach(function(t) {
        var n = t.key;
        return e.push(n);
      }), e;
    }, i.prototype.values = function() {
      var e = [];
      return this.forEach(function(t) {
        var n = t.data;
        return e.push(n);
      }), e;
    }, i.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, i.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, i.prototype.minNode = function(e) {
      if (e === void 0 && (e = this._root), e)
        for (; e.left; )
          e = e.left;
      return e;
    }, i.prototype.maxNode = function(e) {
      if (e === void 0 && (e = this._root), e)
        for (; e.right; )
          e = e.right;
      return e;
    }, i.prototype.at = function(e) {
      for (var t = this._root, n = !1, r = 0, o = []; !n; )
        if (t)
          o.push(t), t = t.left;
        else if (o.length > 0) {
          if (t = o.pop(), r === e)
            return t;
          r++, t = t.right;
        } else
          n = !0;
      return null;
    }, i.prototype.next = function(e) {
      var t = this._root, n = null;
      if (e.right) {
        for (n = e.right; n.left; )
          n = n.left;
        return n;
      }
      for (var r = this._comparator; t; ) {
        var o = r(e.key, t.key);
        if (o === 0)
          break;
        o < 0 ? (n = t, t = t.left) : t = t.right;
      }
      return n;
    }, i.prototype.prev = function(e) {
      var t = this._root, n = null;
      if (e.left !== null) {
        for (n = e.left; n.right; )
          n = n.right;
        return n;
      }
      for (var r = this._comparator; t; ) {
        var o = r(e.key, t.key);
        if (o === 0)
          break;
        o < 0 ? t = t.left : (n = t, t = t.right);
      }
      return n;
    }, i.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, i.prototype.toList = function() {
      return kr(this._root);
    }, i.prototype.load = function(e, t, n) {
      t === void 0 && (t = []), n === void 0 && (n = !1);
      var r = e.length, o = this._comparator;
      if (n && It(e, t, 0, r - 1, o), this._root === null)
        this._root = Tt(e, t, 0, r), this._size = r;
      else {
        var l = Nr(this.toList(), Cr(e, t), o);
        r = this._size + r, this._root = Rt({ head: l }, 0, r);
      }
      return this;
    }, i.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(i.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.toString = function(e) {
      e === void 0 && (e = function(n) {
        return String(n.key);
      });
      var t = [];
      return Pt(this._root, "", !0, function(n) {
        return t.push(n);
      }, e), t.join("");
    }, i.prototype.update = function(e, t, n) {
      var r = this._comparator, o = ci(e, this._root, r), l = o.left, s = o.right;
      r(e, t) < 0 ? s = St(t, n, s, r) : l = St(t, n, l, r), this._root = Mr(l, s, r);
    }, i.prototype.split = function(e) {
      return ci(e, this._root, this._comparator);
    }, i.prototype[Symbol.iterator] = function() {
      var e, t, n;
      return Sr(this, function(r) {
        switch (r.label) {
          case 0:
            e = this._root, t = [], n = !1, r.label = 1;
          case 1:
            return n ? [3, 6] : e === null ? [3, 2] : (t.push(e), e = e.left, [3, 5]);
          case 2:
            return t.length === 0 ? [3, 4] : (e = t.pop(), [4, e]);
          case 3:
            return r.sent(), e = e.right, [3, 5];
          case 4:
            n = !0, r.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, i;
  }()
);
function Tt(i, e, t, n) {
  var r = n - t;
  if (r > 0) {
    var o = t + Math.floor(r / 2), l = i[o], s = e[o], c = new Le(l, s);
    return c.left = Tt(i, e, t, o), c.right = Tt(i, e, o + 1, n), c;
  }
  return null;
}
function Cr(i, e) {
  for (var t = new Le(null, null), n = t, r = 0; r < i.length; r++)
    n = n.next = new Le(i[r], e[r]);
  return n.next = null, t.next;
}
function kr(i) {
  for (var e = i, t = [], n = !1, r = new Le(null, null), o = r; !n; )
    e ? (t.push(e), e = e.left) : t.length > 0 ? (e = o = o.next = t.pop(), e = e.right) : n = !0;
  return o.next = null, r.next;
}
function Rt(i, e, t) {
  var n = t - e;
  if (n > 0) {
    var r = e + Math.floor(n / 2), o = Rt(i, e, r), l = i.head;
    return l.left = o, i.head = i.head.next, l.right = Rt(i, r + 1, t), l;
  }
  return null;
}
function Nr(i, e, t) {
  for (var n = new Le(null, null), r = n, o = i, l = e; o !== null && l !== null; )
    t(o.key, l.key) < 0 ? (r.next = o, o = o.next) : (r.next = l, l = l.next), r = r.next;
  return o !== null ? r.next = o : l !== null && (r.next = l), n.next;
}
function It(i, e, t, n, r) {
  if (!(t >= n)) {
    for (var o = i[t + n >> 1], l = t - 1, s = n + 1; ; ) {
      do
        l++;
      while (r(i[l], o) < 0);
      do
        s--;
      while (r(i[s], o) > 0);
      if (l >= s)
        break;
      var c = i[l];
      i[l] = i[s], i[s] = c, c = e[l], e[l] = e[s], e[s] = c;
    }
    It(i, e, t, s, r), It(i, e, s + 1, n, r);
  }
}
const he = 11102230246251565e-32, Y = 134217729, Pr = (3 + 8 * he) * he;
function xt(i, e, t, n, r) {
  let o, l, s, c, u = e[0], h = n[0], a = 0, f = 0;
  h > u == h > -u ? (o = u, u = e[++a]) : (o = h, h = n[++f]);
  let d = 0;
  if (a < i && f < t)
    for (h > u == h > -u ? (l = u + o, s = o - (l - u), u = e[++a]) : (l = h + o, s = o - (l - h), h = n[++f]), o = l, s !== 0 && (r[d++] = s); a < i && f < t; )
      h > u == h > -u ? (l = o + u, c = l - o, s = o - (l - c) + (u - c), u = e[++a]) : (l = o + h, c = l - o, s = o - (l - c) + (h - c), h = n[++f]), o = l, s !== 0 && (r[d++] = s);
  for (; a < i; )
    l = o + u, c = l - o, s = o - (l - c) + (u - c), u = e[++a], o = l, s !== 0 && (r[d++] = s);
  for (; f < t; )
    l = o + h, c = l - o, s = o - (l - c) + (h - c), h = n[++f], o = l, s !== 0 && (r[d++] = s);
  return (o !== 0 || d === 0) && (r[d++] = o), d;
}
function Tr(i, e) {
  let t = e[0];
  for (let n = 1; n < i; n++) t += e[n];
  return t;
}
function Ye(i) {
  return new Float64Array(i);
}
const Rr = (3 + 16 * he) * he, Ir = (2 + 12 * he) * he, Or = (9 + 64 * he) * he * he, We = Ye(4), fi = Ye(8), di = Ye(12), hi = Ye(16), K = Ye(4);
function Wr(i, e, t, n, r, o, l) {
  let s, c, u, h, a, f, d, g, p, b, v, S, E, _, C, x, L, w;
  const k = i - r, I = t - r, D = e - o, z = n - o;
  _ = k * z, f = Y * k, d = f - (f - k), g = k - d, f = Y * z, p = f - (f - z), b = z - p, C = g * b - (_ - d * p - g * p - d * b), x = D * I, f = Y * D, d = f - (f - D), g = D - d, f = Y * I, p = f - (f - I), b = I - p, L = g * b - (x - d * p - g * p - d * b), v = C - L, a = C - v, We[0] = C - (v + a) + (a - L), S = _ + v, a = S - _, E = _ - (S - a) + (v - a), v = E - x, a = E - v, We[1] = E - (v + a) + (a - x), w = S + v, a = w - S, We[2] = S - (w - a) + (v - a), We[3] = w;
  let O = Tr(4, We), M = Ir * l;
  if (O >= M || -O >= M || (a = i - k, s = i - (k + a) + (a - r), a = t - I, u = t - (I + a) + (a - r), a = e - D, c = e - (D + a) + (a - o), a = n - z, h = n - (z + a) + (a - o), s === 0 && c === 0 && u === 0 && h === 0) || (M = Or * l + Pr * Math.abs(O), O += k * h + z * s - (D * u + I * c), O >= M || -O >= M)) return O;
  _ = s * z, f = Y * s, d = f - (f - s), g = s - d, f = Y * z, p = f - (f - z), b = z - p, C = g * b - (_ - d * p - g * p - d * b), x = c * I, f = Y * c, d = f - (f - c), g = c - d, f = Y * I, p = f - (f - I), b = I - p, L = g * b - (x - d * p - g * p - d * b), v = C - L, a = C - v, K[0] = C - (v + a) + (a - L), S = _ + v, a = S - _, E = _ - (S - a) + (v - a), v = E - x, a = E - v, K[1] = E - (v + a) + (a - x), w = S + v, a = w - S, K[2] = S - (w - a) + (v - a), K[3] = w;
  const G = xt(4, We, 4, K, fi);
  _ = k * h, f = Y * k, d = f - (f - k), g = k - d, f = Y * h, p = f - (f - h), b = h - p, C = g * b - (_ - d * p - g * p - d * b), x = D * u, f = Y * D, d = f - (f - D), g = D - d, f = Y * u, p = f - (f - u), b = u - p, L = g * b - (x - d * p - g * p - d * b), v = C - L, a = C - v, K[0] = C - (v + a) + (a - L), S = _ + v, a = S - _, E = _ - (S - a) + (v - a), v = E - x, a = E - v, K[1] = E - (v + a) + (a - x), w = S + v, a = w - S, K[2] = S - (w - a) + (v - a), K[3] = w;
  const $ = xt(G, fi, 4, K, di);
  _ = s * h, f = Y * s, d = f - (f - s), g = s - d, f = Y * h, p = f - (f - h), b = h - p, C = g * b - (_ - d * p - g * p - d * b), x = c * u, f = Y * c, d = f - (f - c), g = c - d, f = Y * u, p = f - (f - u), b = u - p, L = g * b - (x - d * p - g * p - d * b), v = C - L, a = C - v, K[0] = C - (v + a) + (a - L), S = _ + v, a = S - _, E = _ - (S - a) + (v - a), v = E - x, a = E - v, K[1] = E - (v + a) + (a - x), w = S + v, a = w - S, K[2] = S - (w - a) + (v - a), K[3] = w;
  const ie = xt($, di, 4, K, hi);
  return hi[ie - 1];
}
function Ar(i, e, t, n, r, o) {
  const l = (e - o) * (t - r), s = (i - r) * (n - o), c = l - s, u = Math.abs(l + s);
  return Math.abs(c) >= Rr * u ? c : -Wr(i, e, t, n, r, o, u);
}
const ze = (i, e) => i.ll.x <= e.x && e.x <= i.ur.x && i.ll.y <= e.y && e.y <= i.ur.y, Ot = (i, e) => {
  if (e.ur.x < i.ll.x || i.ur.x < e.ll.x || e.ur.y < i.ll.y || i.ur.y < e.ll.y) return null;
  const t = i.ll.x < e.ll.x ? e.ll.x : i.ll.x, n = i.ur.x < e.ur.x ? i.ur.x : e.ur.x, r = i.ll.y < e.ll.y ? e.ll.y : i.ll.y, o = i.ur.y < e.ur.y ? i.ur.y : e.ur.y;
  return {
    ll: {
      x: t,
      y: r
    },
    ur: {
      x: n,
      y: o
    }
  };
};
let ve = Number.EPSILON;
ve === void 0 && (ve = Math.pow(2, -52));
const Br = ve * ve, mi = (i, e) => {
  if (-ve < i && i < ve && -ve < e && e < ve)
    return 0;
  const t = i - e;
  return t * t < Br * i * e ? 0 : i < e ? -1 : 1;
};
class Dr {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new gi(), this.yRounder = new gi();
  }
  round(e, t) {
    return {
      x: this.xRounder.round(e),
      y: this.yRounder.round(t)
    };
  }
}
class gi {
  constructor() {
    this.tree = new Ut(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(e) {
    const t = this.tree.add(e), n = this.tree.prev(t);
    if (n !== null && mi(t.key, n.key) === 0)
      return this.tree.remove(e), n.key;
    const r = this.tree.next(t);
    return r !== null && mi(t.key, r.key) === 0 ? (this.tree.remove(e), r.key) : e;
  }
}
const Ve = new Dr(), lt = (i, e) => i.x * e.y - i.y * e.x, Di = (i, e) => i.x * e.x + i.y * e.y, yi = (i, e, t) => {
  const n = Ar(i.x, i.y, e.x, e.y, t.x, t.y);
  return n > 0 ? -1 : n < 0 ? 1 : 0;
}, ut = (i) => Math.sqrt(Di(i, i)), Ur = (i, e, t) => {
  const n = {
    x: e.x - i.x,
    y: e.y - i.y
  }, r = {
    x: t.x - i.x,
    y: t.y - i.y
  };
  return lt(r, n) / ut(r) / ut(n);
}, Fr = (i, e, t) => {
  const n = {
    x: e.x - i.x,
    y: e.y - i.y
  }, r = {
    x: t.x - i.x,
    y: t.y - i.y
  };
  return Di(r, n) / ut(r) / ut(n);
}, pi = (i, e, t) => e.y === 0 ? null : {
  x: i.x + e.x / e.y * (t - i.y),
  y: t
}, bi = (i, e, t) => e.x === 0 ? null : {
  x: t,
  y: i.y + e.y / e.x * (t - i.x)
}, zr = (i, e, t, n) => {
  if (e.x === 0) return bi(t, n, i.x);
  if (n.x === 0) return bi(i, e, t.x);
  if (e.y === 0) return pi(t, n, i.y);
  if (n.y === 0) return pi(i, e, t.y);
  const r = lt(e, n);
  if (r == 0) return null;
  const o = {
    x: t.x - i.x,
    y: t.y - i.y
  }, l = lt(o, e) / r, s = lt(o, n) / r, c = i.x + s * e.x, u = t.x + l * n.x, h = i.y + s * e.y, a = t.y + l * n.y, f = (c + u) / 2, d = (h + a) / 2;
  return {
    x: f,
    y: d
  };
};
class re {
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = re.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : we.compare(e.segment, t.segment));
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
    for (let n = 0, r = t.length; n < r; n++) {
      const o = t[n];
      this.point.events.push(o), o.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let t = 0; t < e; t++) {
      const n = this.point.events[t];
      if (n.segment.consumedBy === void 0)
        for (let r = t + 1; r < e; r++) {
          const o = this.point.events[r];
          o.consumedBy === void 0 && n.otherSE.point.events === o.otherSE.point.events && n.segment.consume(o.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let t = 0, n = this.point.events.length; t < n; t++) {
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
    const t = /* @__PURE__ */ new Map(), n = (r) => {
      const o = r.otherSE;
      t.set(r, {
        sine: Ur(this.point, e.point, o.point),
        cosine: Fr(this.point, e.point, o.point)
      });
    };
    return (r, o) => {
      t.has(r) || n(r), t.has(o) || n(o);
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
let Gr = 0;
class we {
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
    const n = e.leftSE.point.x, r = t.leftSE.point.x, o = e.rightSE.point.x, l = t.rightSE.point.x;
    if (l < n) return 1;
    if (o < r) return -1;
    const s = e.leftSE.point.y, c = t.leftSE.point.y, u = e.rightSE.point.y, h = t.rightSE.point.y;
    if (n < r) {
      if (c < s && c < u) return 1;
      if (c > s && c > u) return -1;
      const a = e.comparePoint(t.leftSE.point);
      if (a < 0) return 1;
      if (a > 0) return -1;
      const f = t.comparePoint(e.rightSE.point);
      return f !== 0 ? f : -1;
    }
    if (n > r) {
      if (s < c && s < h) return -1;
      if (s > c && s > h) return 1;
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
      const a = u - s, f = o - n, d = h - c, g = l - r;
      if (a > f && d < g) return 1;
      if (a < f && d > g) return -1;
    }
    return o > l ? 1 : o < l || u < h ? -1 : u > h ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    this.id = ++Gr, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
  }
  static fromRing(e, t, n) {
    let r, o, l;
    const s = re.comparePoints(e, t);
    if (s < 0)
      r = e, o = t, l = 1;
    else if (s > 0)
      r = t, o = e, l = -1;
    else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
    const c = new re(r, !0), u = new re(o, !1);
    return new we(c, u, [n], [l]);
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
    const t = this.leftSE.point, n = this.rightSE.point, r = this.vector();
    if (t.x === n.x)
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
    const t = this.bbox(), n = e.bbox(), r = Ot(t, n);
    if (r === null) return null;
    const o = this.leftSE.point, l = this.rightSE.point, s = e.leftSE.point, c = e.rightSE.point, u = ze(t, s) && this.comparePoint(s) === 0, h = ze(n, o) && e.comparePoint(o) === 0, a = ze(t, c) && this.comparePoint(c) === 0, f = ze(n, l) && e.comparePoint(l) === 0;
    if (h && u)
      return f && !a ? l : !f && a ? c : null;
    if (h)
      return a && o.x === c.x && o.y === c.y ? null : o;
    if (u)
      return f && l.x === s.x && l.y === s.y ? null : s;
    if (f && a) return null;
    if (f) return l;
    if (a) return c;
    const d = zr(o, this.vector(), s, e.vector());
    return d === null || !ze(r, d) ? null : Ve.round(d.x, d.y);
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
    const t = [], n = e.events !== void 0, r = new re(e, !0), o = new re(e, !1), l = this.rightSE;
    this.replaceRightSE(o), t.push(o), t.push(r);
    const s = new we(r, l, this.rings.slice(), this.windings.slice());
    return re.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(), re.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), o.checkForConsuming()), t;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let t = 0, n = this.windings.length; t < n; t++)
      this.windings[t] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let t = this, n = e;
    for (; t.consumedBy; ) t = t.consumedBy;
    for (; n.consumedBy; ) n = n.consumedBy;
    const r = we.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const o = t;
        t = n, n = o;
      }
      if (t.prev === n) {
        const o = t;
        t = n, n = o;
      }
      for (let o = 0, l = n.rings.length; o < l; o++) {
        const s = n.rings[o], c = n.windings[o], u = t.rings.indexOf(s);
        u === -1 ? (t.rings.push(s), t.windings.push(c)) : t.windings[u] += c;
      }
      n.rings = null, n.windings = null, n.consumedBy = t, n.leftSE.consumedBy = t.leftSE, n.rightSE.consumedBy = t.rightSE;
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
    const t = this._afterState.rings, n = this._afterState.windings, r = this._afterState.multiPolys;
    for (let s = 0, c = this.rings.length; s < c; s++) {
      const u = this.rings[s], h = this.windings[s], a = t.indexOf(u);
      a === -1 ? (t.push(u), n.push(h)) : n[a] += h;
    }
    const o = [], l = [];
    for (let s = 0, c = t.length; s < c; s++) {
      if (n[s] === 0) continue;
      const u = t[s], h = u.poly;
      if (l.indexOf(h) === -1)
        if (u.isExterior) o.push(h);
        else {
          l.indexOf(h) === -1 && l.push(h);
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
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === le.numMultiPolys && n < r;
        break;
      }
      case "xor": {
        const n = Math.abs(e.length - t.length);
        this._isInResult = n % 2 === 1;
        break;
      }
      case "difference": {
        const n = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = n(e) !== n(t);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${le.type}`);
    }
    return this._isInResult;
  }
}
class vi {
  constructor(e, t, n) {
    if (!Array.isArray(e) || e.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = t, this.isExterior = n, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const r = Ve.round(e[0][0], e[0][1]);
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
      let c = Ve.round(e[l][0], e[l][1]);
      c.x === o.x && c.y === o.y || (this.segments.push(we.fromRing(o, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), o = c);
    }
    (r.x !== o.x || r.y !== o.y) && this.segments.push(we.fromRing(o, r, this));
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, n = this.segments.length; t < n; t++) {
      const r = this.segments[t];
      e.push(r.leftSE), e.push(r.rightSE);
    }
    return e;
  }
}
class qr {
  constructor(e, t) {
    if (!Array.isArray(e))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new vi(e[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let n = 1, r = e.length; n < r; n++) {
      const o = new vi(e[n], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = t;
  }
  getSweepEvents() {
    const e = this.exteriorRing.getSweepEvents();
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getSweepEvents();
      for (let o = 0, l = r.length; o < l; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class wi {
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
    for (let n = 0, r = e.length; n < r; n++) {
      const o = new qr(e[n], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = t;
  }
  getSweepEvents() {
    const e = [];
    for (let t = 0, n = this.polys.length; t < n; t++) {
      const r = this.polys[t].getSweepEvents();
      for (let o = 0, l = r.length; o < l; o++)
        e.push(r[o]);
    }
    return e;
  }
}
class at {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n];
      if (!o.isInResult() || o.ringOut) continue;
      let l = null, s = o.leftSE, c = o.rightSE;
      const u = [s], h = s.point, a = [];
      for (; l = s, s = c, u.push(s), s.point !== h; )
        for (; ; ) {
          const f = s.getAvailableLinkedEvents();
          if (f.length === 0) {
            const p = u[0].point, b = u[u.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${p.x}, ${p.y}]. Last matching segment found ends at [${b.x}, ${b.y}].`);
          }
          if (f.length === 1) {
            c = f[0].otherSE;
            break;
          }
          let d = null;
          for (let p = 0, b = a.length; p < b; p++)
            if (a[p].point === s.point) {
              d = p;
              break;
            }
          if (d !== null) {
            const p = a.splice(d)[0], b = u.splice(p.index);
            b.unshift(b[0].otherSE), t.push(new at(b.reverse()));
            continue;
          }
          a.push({
            index: u.length,
            point: s.point
          });
          const g = s.getLeftmostComparator(l);
          c = f.sort(g)[0].otherSE;
          break;
        }
      t.push(new at(u));
    }
    return t;
  }
  constructor(e) {
    this.events = e;
    for (let t = 0, n = e.length; t < n; t++)
      e[t].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let u = 1, h = this.events.length - 1; u < h; u++) {
      const a = this.events[u].point, f = this.events[u + 1].point;
      yi(a, e, f) !== 0 && (t.push(a), e = a);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    yi(n, e, r) === 0 && t.shift(), t.push(t[0]);
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
      re.compare(e, l) > 0 && (e = l);
    }
    let t = e.segment.prevInResult(), n = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!n) return t.ringOut;
      if (n.ringOut !== t.ringOut)
        return n.ringOut.enclosingRing() !== t.ringOut ? t.ringOut : t.ringOut.enclosingRing();
      t = n.prevInResult(), n = t ? t.prevInResult() : null;
    }
  }
}
class _i {
  constructor(e) {
    this.exteriorRing = e, e.poly = this, this.interiorRings = [];
  }
  addInterior(e) {
    this.interiorRings.push(e), e.poly = this;
  }
  getGeom() {
    const e = [this.exteriorRing.getGeom()];
    if (e[0] === null) return null;
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}
class jr {
  constructor(e) {
    this.rings = e, this.polys = this._composePolys(e);
  }
  getGeom() {
    const e = [];
    for (let t = 0, n = this.polys.length; t < n; t++) {
      const r = this.polys[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
  _composePolys(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n];
      if (!o.poly)
        if (o.isExteriorRing()) t.push(new _i(o));
        else {
          const l = o.enclosingRing();
          l.poly || t.push(new _i(l)), l.poly.addInterior(o);
        }
    }
    return t;
  }
}
class Zr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we.compare;
    this.queue = e, this.tree = new Ut(t), this.segments = [];
  }
  process(e) {
    const t = e.segment, n = [];
    if (e.consumedBy)
      return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(t), n;
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
          for (let d = 0, g = f.length; d < g; d++)
            n.push(f[d]);
        }
      }
      let h = null;
      if (c) {
        const a = c.getIntersection(t);
        if (a !== null && (t.isAnEndpoint(a) || (h = a), !c.isAnEndpoint(a))) {
          const f = this._splitSafely(c, a);
          for (let d = 0, g = f.length; d < g; d++)
            n.push(f[d]);
        }
      }
      if (u !== null || h !== null) {
        let a = null;
        u === null ? a = h : h === null ? a = u : a = re.comparePoints(u, h) <= 0 ? u : h, this.queue.remove(t.rightSE), n.push(t.rightSE);
        const f = t.split(a);
        for (let d = 0, g = f.length; d < g; d++)
          n.push(f[d]);
      }
      n.length > 0 ? (this.tree.remove(t), n.push(e)) : (this.segments.push(t), t.prev = s);
    } else {
      if (s && c) {
        const u = s.getIntersection(c);
        if (u !== null) {
          if (!s.isAnEndpoint(u)) {
            const h = this._splitSafely(s, u);
            for (let a = 0, f = h.length; a < f; a++)
              n.push(h[a]);
          }
          if (!c.isAnEndpoint(u)) {
            const h = this._splitSafely(c, u);
            for (let a = 0, f = h.length; a < f; a++)
              n.push(h[a]);
          }
        }
      }
      this.tree.remove(t);
    }
    return n;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(e, t) {
    this.tree.remove(e);
    const n = e.rightSE;
    this.queue.remove(n);
    const r = e.split(t);
    return r.push(n), e.consumedBy === void 0 && this.tree.add(e), r;
  }
}
const Ei = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Qr = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Hr {
  run(e, t, n) {
    le.type = e, Ve.reset();
    const r = [new wi(t, !0)];
    for (let a = 0, f = n.length; a < f; a++)
      r.push(new wi(n[a], !1));
    if (le.numMultiPolys = r.length, le.type === "difference") {
      const a = r[0];
      let f = 1;
      for (; f < r.length; )
        Ot(r[f].bbox, a.bbox) !== null ? f++ : r.splice(f, 1);
    }
    if (le.type === "intersection")
      for (let a = 0, f = r.length; a < f; a++) {
        const d = r[a];
        for (let g = a + 1, p = r.length; g < p; g++)
          if (Ot(d.bbox, r[g].bbox) === null) return [];
      }
    const o = new Ut(re.compare);
    for (let a = 0, f = r.length; a < f; a++) {
      const d = r[a].getSweepEvents();
      for (let g = 0, p = d.length; g < p; g++)
        if (o.insert(d[g]), o.size > Ei)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const l = new Zr(o);
    let s = o.size, c = o.pop();
    for (; c; ) {
      const a = c.key;
      if (o.size === s) {
        const d = a.segment;
        throw new Error(`Unable to pop() ${a.isLeft ? "left" : "right"} SweepEvent [${a.point.x}, ${a.point.y}] from segment #${d.id} [${d.leftSE.point.x}, ${d.leftSE.point.y}] -> [${d.rightSE.point.x}, ${d.rightSE.point.y}] from queue.`);
      }
      if (o.size > Ei)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (l.segments.length > Qr)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const f = l.process(a);
      for (let d = 0, g = f.length; d < g; d++) {
        const p = f[d];
        p.consumedBy === void 0 && o.insert(p);
      }
      s = o.size, c = o.pop();
    }
    Ve.reset();
    const u = at.factory(l.segments);
    return new jr(u).getGeom();
  }
}
const le = new Hr(), Vr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("union", i, t);
}, Yr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("intersection", i, t);
}, Xr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("xor", i, t);
}, Kr = function(i) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return le.run("difference", i, t);
};
var Ui = {
  union: Vr,
  intersection: Yr,
  xor: Xr,
  difference: Kr
};
function Jr(i, e = {}) {
  const t = [];
  if (Bt(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Ui.union(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? At(n[0], e.properties) : Ii(n, e.properties);
}
var Fi = Jr;
function $r(i) {
  const e = [];
  if (Bt(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = Ui.difference(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? At(n[0], t) : Ii(n, t);
}
var eo = $r;
function to(i) {
  if (!i)
    throw new Error("geojson is required");
  var e = [];
  return vr(i, function(t) {
    e.push(t);
  }), He(e);
}
var io = to;
function Li(i, e) {
  const t = eo(
    He([
      At([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      i
    ])
  );
  if (!t)
    return;
  t.properties = { isMask: !0 };
  const n = Ze(Nt(i)), r = (n[2] - n[0]) / 360 / 1e3, o = n[0] < -180, l = n[2] > 180, s = io(i);
  if (s.features.length > 1 && (o || l))
    for (const c of s.features) {
      const u = Ze(Nt(c));
      if (l && u[0] < -180 + r)
        for (const h of c.geometry.coordinates)
          for (const a of h)
            a[0] += 360 - r;
      if (o && u[2] > 180 - r)
        for (const h of c.geometry.coordinates)
          for (const a of h)
            a[0] -= 360 - r;
    }
  e(
    He([
      s.features.length < 2 ? i : Fi(s) ?? i,
      t
    ])
  );
}
function no(i, e = !0, t = !0, n = {}, r = {}, o = (l) => {
  var u, h, a;
  const s = (u = l == null ? void 0 : l.geometry) == null ? void 0 : u.type, c = (h = l == null ? void 0 : l.properties) != null && h.isMask ? 0 : s === "LineString" || s === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (a = l == null ? void 0 : l.properties) != null && a.isMask ? 0.1 : 0,
    weight: c,
    dashArray: [c, c],
    lineCap: "butt"
  };
}) {
  let l;
  const s = [];
  let c, u;
  const h = de.geoJSON(void 0, {
    style: o,
    interactive: !1
  }).addTo(i), a = (d) => {
    l == null || l({
      type: "mapClick",
      coordinates: [d.latlng.lng, d.latlng.lat]
    });
  };
  function f(d, g = !1) {
    const p = document.createElement("div");
    return new Vn({ props: { displayIn: "leaflet" }, target: p }), new de.Marker(d, {
      interactive: g,
      icon: new de.DivIcon({
        html: p,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(d) {
      d ? (l = d, i.on("click", a)) : (l = void 0, i.off("click", a));
    },
    flyTo(d, g) {
      i.flyTo([d[1], d[0]], g, { duration: 2, ...n });
    },
    fitBounds(d, g, p) {
      i.flyToBounds(
        [
          [d[1], d[0]],
          [d[3], d[2]]
        ],
        {
          padding: [g, g],
          duration: 2,
          ...p ? { maxZoom: p } : {},
          ...r
        }
      );
    },
    indicateReverse(d) {
      i.getContainer().style.cursor = d ? "crosshair" : "";
    },
    setReverseMarker(d) {
      var p;
      if (!e)
        return;
      const g = d && [d[1], d[0]];
      u ? g ? u.setLatLng(g) : (u.remove(), u = void 0) : g && (u = (typeof e == "object" ? new de.Marker(g, e) : f(g)).addTo(i), (p = u.getElement()) == null || p.classList.add("marker-reverse"));
    },
    setMarkers(d, g) {
      if (!e)
        return;
      function p(b) {
        h.clearLayers(), b && h.addData(b);
      }
      for (const b of s)
        b.remove();
      if (s.length = 0, p(), g) {
        let b = !1;
        if (g.geometry.type === "GeometryCollection") {
          const S = g.geometry.geometries.filter(
            (E) => E.type === "Polygon" || E.type === "MultiPolygon"
          );
          e: if (S.length > 0) {
            const E = Fi(
              He(S.map((_) => Qe(_)))
            );
            if (!E)
              break e;
            Li(
              {
                ...g,
                geometry: E.geometry
              },
              p
            ), b = !0;
          } else {
            const E = g.geometry.geometries.filter(
              (_) => _.type === "LineString" || _.type === "MultiLineString"
            );
            E.length > 0 && (p({
              ...g,
              geometry: { type: "GeometryCollection", geometries: E }
            }), b = !0);
          }
        }
        if (!b) {
          if (g.geometry.type === "Polygon" || g.geometry.type === "MultiPolygon")
            Li(g, (S) => {
              if (!S)
                return;
              const E = [...S.features], _ = Ze(Nt(g)), C = _[2] - _[0];
              _[0] - C / 4 < -180 && E.push(...Si(S, -360).features), _[2] + C / 4 > 180 && E.push(...Si(S, 360).features), p(He(E));
            });
          else if (g.geometry.type === "LineString" || g.geometry.type === "MultiLineString") {
            p(g);
            return;
          }
        }
        const v = [g.center[1], g.center[0]];
        s.push(
          (typeof e == "object" ? new de.Marker(v, e) : f(v)).addTo(i)
        );
      }
      if (t)
        for (const b of d ?? []) {
          if (b === g)
            continue;
          const v = [
            b.center[1],
            b.center[0]
          ], S = typeof t == "object" ? new de.Marker(v, t) : f(v, !0);
          S.addTo(i).bindTooltip(
            b.place_type[0] === "reverse" ? b.place_name : b.place_name.replace(/,.*/, ""),
            {
              direction: "top"
            }
          );
          const E = S.getElement();
          E && (E.addEventListener("click", (_) => {
            _.stopPropagation(), l == null || l({ type: "markerClick", id: b.id });
          }), E.addEventListener("mouseenter", () => {
            l == null || l({ type: "markerMouseEnter", id: b.id });
          }), E.addEventListener("mouseleave", () => {
            l == null || l({ type: "markerMouseLeave", id: b.id });
          }), E.classList.toggle("marker-fuzzy", !!b.matching_text)), s.push(S);
        }
    },
    setSelectedMarker(d) {
      var g, p;
      c && ((g = c.getElement()) == null || g.classList.toggle("marker-selected", !1)), c = d > -1 ? s[d] : void 0, (p = c == null ? void 0 : c.getElement()) == null || p.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const d = i.getCenter();
      return [i.getZoom(), d.lng, d.lat];
    }
  };
}
function Si(i, e) {
  const t = Lr(i);
  for (const n of t.features)
    if (n.geometry.type == "MultiPolygon")
      for (const r of n.geometry.coordinates)
        xi(r, e);
    else
      xi(n.geometry.coordinates, e);
  return t;
}
function xi(i, e) {
  for (const t of i)
    for (const n of t)
      n[0] += e;
}
var ne, Pe;
class ro extends de.Control {
  constructor(t) {
    super();
    Et(this, ne);
    Et(this, Pe);
    it(this, Pe, t);
  }
  onAdd(t) {
    const n = document.createElement("div");
    n.className = "leaflet-ctrl-geocoder", de.DomEvent.disableClickPropagation(n), de.DomEvent.disableScrollPropagation(n);
    const {
      marker: r,
      showResultMarkers: o,
      flyTo: l,
      fullGeometryStyle: s,
      ...c
    } = se(this, Pe), u = typeof l == "boolean" ? {} : l, h = no(
      t,
      r,
      o,
      u,
      u,
      s
    );
    it(this, ne, new br({
      target: n,
      props: {
        mapController: h,
        flyTo: l === void 0 ? !0 : !!l,
        ...c
      }
    }));
    for (const a of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      se(this, ne).$on(
        a,
        (f) => t.fire(a.toLowerCase(), f.detail)
      );
    return n;
  }
  setOptions(t) {
    var c;
    it(this, Pe, t);
    const {
      marker: n,
      showResultMarkers: r,
      flyTo: o,
      fullGeometryStyle: l,
      ...s
    } = se(this, Pe);
    (c = se(this, ne)) == null || c.$set(s);
  }
  setQuery(t, n = !0) {
    var r;
    (r = se(this, ne)) == null || r.setQuery(t, n);
  }
  clearMap() {
    var t;
    (t = se(this, ne)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = se(this, ne)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = se(this, ne)) == null || t.focus();
  }
  blur() {
    var t;
    (t = se(this, ne)) == null || t.blur();
  }
  onRemove() {
    var t;
    (t = se(this, ne)) == null || t.$destroy();
  }
}
ne = new WeakMap(), Pe = new WeakMap();
function oo(...i) {
  return new ro(...i);
}
window.L && typeof window.L == "object" && typeof window.L.control == "function" && (window.L.control.maptilerGeocoding = oo);
export {
  ro as GeocodingControl,
  no as createLeafletMapController
};
//# sourceMappingURL=leaflet.js.map
