var si = Object.defineProperty;
var ut = (i) => {
  throw TypeError(i);
};
var ai = (i, e, t) => e in i ? si(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var $e = (i, e, t) => ai(i, typeof e != "symbol" ? e + "" : e, t), ct = (i, e, t) => e.has(i) || ut("Cannot " + t);
var oe = (i, e, t) => (ct(i, e, "read from private field"), t ? t.call(i) : e.get(i)), dt = (i, e, t) => e.has(i) ? ut("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), ft = (i, e, t, n) => (ct(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
function A() {
}
function li(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Dt(i) {
  return i();
}
function mt() {
  return /* @__PURE__ */ Object.create(null);
}
function ue(i) {
  i.forEach(Dt);
}
function Rt(i) {
  return typeof i == "function";
}
function ve(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Fe;
function V(i, e) {
  return i === e ? !0 : (Fe || (Fe = document.createElement("a")), Fe.href = e, i === Fe.href);
}
function ui(i) {
  return Object.keys(i).length === 0;
}
function ci(i, e, t, n) {
  if (i) {
    const o = Ut(i, e, t, n);
    return i[0](o);
  }
}
function Ut(i, e, t, n) {
  return i[1] && n ? li(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function di(i, e, t, n) {
  if (i[2] && n) {
    const o = i[2](n(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], c = Math.max(e.dirty.length, o.length);
      for (let r = 0; r < c; r += 1)
        l[r] = e.dirty[r] | o[r];
      return l;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function fi(i, e, t, n, o, l) {
  if (o) {
    const c = Ut(e, t, n, l);
    i.p(c, o);
  }
}
function mi(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function gt(i) {
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
function D(i) {
  return document.createElement(i);
}
function se(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function fe(i) {
  return document.createTextNode(i);
}
function J() {
  return fe(" ");
}
function gi() {
  return fe("");
}
function K(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function hi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function bi(i) {
  return Array.from(i.childNodes);
}
function We(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ht(i, e) {
  i.value = e ?? "";
}
function de(i, e, t) {
  i.classList.toggle(e, !!t);
}
function vi(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Oe;
function Ce(i) {
  Oe = i;
}
function It() {
  if (!Oe) throw new Error("Function called outside component initialization");
  return Oe;
}
function Li(i) {
  It().$$.on_destroy.push(i);
}
function _i() {
  const i = It();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const l = vi(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return o.slice().forEach((c) => {
        c.call(i, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function bt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const pe = [], tt = [];
let Ne = [];
const vt = [], yi = /* @__PURE__ */ Promise.resolve();
let it = !1;
function wi() {
  it || (it = !0, yi.then(At));
}
function nt(i) {
  Ne.push(i);
}
const et = /* @__PURE__ */ new Set();
let Se = 0;
function At() {
  if (Se !== 0)
    return;
  const i = Oe;
  do {
    try {
      for (; Se < pe.length; ) {
        const e = pe[Se];
        Se++, Ce(e), Ei(e.$$);
      }
    } catch (e) {
      throw pe.length = 0, Se = 0, e;
    }
    for (Ce(null), pe.length = 0, Se = 0; tt.length; ) tt.pop()();
    for (let e = 0; e < Ne.length; e += 1) {
      const t = Ne[e];
      et.has(t) || (et.add(t), t());
    }
    Ne.length = 0;
  } while (pe.length);
  for (; vt.length; )
    vt.pop()();
  it = !1, et.clear(), Ce(i);
}
function Ei(i) {
  if (i.fragment !== null) {
    i.update(), ue(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(nt);
  }
}
function Si(i) {
  const e = [], t = [];
  Ne.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), Ne = e;
}
const qe = /* @__PURE__ */ new Set();
let be;
function ze() {
  be = {
    r: 0,
    c: [],
    p: be
    // parent group
  };
}
function He() {
  be.r || ue(be.c), be = be.p;
}
function q(i, e) {
  i && i.i && (qe.delete(i), i.i(e));
}
function Q(i, e, t, n) {
  if (i && i.o) {
    if (qe.has(i)) return;
    qe.add(i), be.c.push(() => {
      qe.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Lt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function pi(i, e) {
  Q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Ni(i, e, t, n, o, l, c, r, d, u, f, h) {
  let v = i.length, _ = l.length, w = v;
  const W = {};
  for (; w--; ) W[i[w].key] = w;
  const y = [], E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), O = [];
  for (w = _; w--; ) {
    const g = h(o, l, w), m = t(g);
    let k = c.get(m);
    k ? O.push(() => k.p(g, e)) : (k = u(m, g), k.c()), E.set(m, y[w] = k), m in W && C.set(m, Math.abs(w - W[m]));
  }
  const p = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
  function b(g) {
    q(g, 1), g.m(r, f), c.set(g.key, g), f = g.first, _--;
  }
  for (; v && _; ) {
    const g = y[_ - 1], m = i[v - 1], k = g.key, z = m.key;
    g === m ? (f = g.first, v--, _--) : E.has(z) ? !c.has(k) || p.has(k) ? b(g) : G.has(z) ? v-- : C.get(k) > C.get(z) ? (G.add(k), b(g)) : (p.add(z), v--) : (d(m, c), v--);
  }
  for (; v--; ) {
    const g = i[v];
    E.has(g.key) || d(g, c);
  }
  for (; _; ) b(y[_ - 1]);
  return ue(O), y;
}
function me(i) {
  i && i.c();
}
function ae(i, e, t) {
  const { fragment: n, after_update: o } = i.$$;
  n && n.m(e, t), nt(() => {
    const l = i.$$.on_mount.map(Dt).filter(Rt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : ue(l), i.$$.on_mount = [];
  }), o.forEach(nt);
}
function le(i, e) {
  const t = i.$$;
  t.fragment !== null && (Si(t.after_update), ue(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Mi(i, e) {
  i.$$.dirty[0] === -1 && (pe.push(i), wi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Le(i, e, t, n, o, l, c = null, r = [-1]) {
  const d = Oe;
  Ce(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: A,
    not_equal: o,
    bound: mt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: mt(),
    dirty: r,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  c && c(u.root);
  let f = !1;
  if (u.ctx = t ? t(i, e.props || {}, (h, v, ..._) => {
    const w = _.length ? _[0] : v;
    return u.ctx && o(u.ctx[h], u.ctx[h] = w) && (!u.skip_bound && u.bound[h] && u.bound[h](w), f && Mi(i, h)), v;
  }) : [], u.update(), f = !0, ue(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = bi(e.target);
      u.fragment && u.fragment.l(h), h.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && q(i.$$.fragment), ae(i, e.target, e.anchor), At();
  }
  Ce(d);
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
    $e(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $e(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    le(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Rt(t))
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
    this.$$set && !ui(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ti = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ti);
function ki(i) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
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
class Bt extends _e {
  constructor(e) {
    super(), Le(this, e, null, ki, ve, {});
  }
}
function Ci(i) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
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
class Ft extends _e {
  constructor(e) {
    super(), Le(this, e, null, Ci, ve, {});
  }
}
function Wi(i) {
  let e, t;
  return {
    c() {
      e = D("img"), V(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !V(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
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
function Oi(i) {
  let e, t;
  return {
    c() {
      e = D("img"), V(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !V(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
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
      e = D("img"), V(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !V(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
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
function Ri(i) {
  let e, t;
  return {
    c() {
      e = D("img"), V(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !V(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
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
      e = D("img"), V(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !V(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
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
      e = D("img"), V(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !V(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
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
      e = D("img"), V(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o);
    },
    p(n, o) {
      o & /*iconsBaseUrl*/
      8 && !V(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
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
  let e, t, n, o;
  return {
    c() {
      e = D("img"), V(e.src, t = /*imageUrl*/
      i[5]) || a(e, "src", t), a(
        e,
        "alt",
        /*category*/
        i[4]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(l, c) {
      B(l, e, c), n || (o = K(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(l, c) {
      c & /*imageUrl*/
      32 && !V(e.src, t = /*imageUrl*/
      l[5]) && a(e, "src", t), c & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        l[4]
      );
    },
    d(l) {
      l && U(e), n = !1, o();
    }
  };
}
function _t(i) {
  let e, t;
  return {
    c() {
      e = D("span"), t = fe(
        /*placeType*/
        i[6]
      ), a(e, "class", "secondary svelte-ltkwvy");
    },
    m(n, o) {
      B(n, e, o), T(e, t);
    },
    p(n, o) {
      o & /*placeType*/
      64 && We(
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
function Fi(i) {
  let e, t, n, o, l, c, r, d, u, f = (
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
  ), E, C, O;
  function p(m, k) {
    return k & /*feature*/
    1 && (t = null), k & /*feature*/
    1 && (n = null), k & /*feature*/
    1 && (o = null), k & /*feature*/
    1 && (l = null), /*imageUrl*/
    m[5] ? Bi : (
      /*feature*/
      m[0].address ? Ai : (t == null && (t = !!/*feature*/
      m[0].id.startsWith("road.")), t ? Ii : (n == null && (n = !!/*feature*/
      m[0].id.startsWith("address.")), n ? Ui : (o == null && (o = !!/*feature*/
      m[0].id.startsWith("postal_code.")), o ? Ri : (l == null && (l = !!/*feature*/
      m[0].id.startsWith("poi.")), l ? Di : (
        /*isReverse*/
        m[7] ? Oi : Wi
      )))))
    );
  }
  let G = p(i, -1), b = G(i), g = _ && _t(i);
  return {
    c() {
      e = D("li"), b.c(), c = J(), r = D("span"), d = D("span"), u = D("span"), h = fe(f), v = J(), g && g.c(), w = J(), W = D("span"), E = fe(y), a(u, "class", "primary svelte-ltkwvy"), a(d, "class", "svelte-ltkwvy"), a(W, "class", "line2 svelte-ltkwvy"), a(r, "class", "texts svelte-ltkwvy"), a(e, "tabindex", "0"), a(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), a(e, "class", "svelte-ltkwvy"), de(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(m, k) {
      B(m, e, k), b.m(e, null), T(e, c), T(e, r), T(r, d), T(d, u), T(u, h), T(d, v), g && g.m(d, null), T(r, w), T(r, W), T(W, E), C || (O = [
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
      G === (G = p(m, k)) && b ? b.p(m, k) : (b.d(1), b = G(m), b && (b.c(), b.m(e, c))), k & /*feature*/
      1 && f !== (f = /*isReverse*/
      (m[7] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && We(h, f), k & /*showPlaceType, feature, imageUrl*/
      37 && (_ = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[7]), _ ? g ? g.p(m, k) : (g = _t(m), g.c(), g.m(d, null)) : g && (g.d(1), g = null), k & /*feature*/
      1 && y !== (y = /*isReverse*/
      (m[7] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && We(E, y), k & /*selected*/
      2 && a(
        e,
        "data-selected",
        /*selected*/
        m[1]
      ), k & /*selected*/
      2 && de(
        e,
        "selected",
        /*selected*/
        m[1]
      );
    },
    i: A,
    o: A,
    d(m) {
      m && U(e), b.d(), g && g.d(), C = !1, ue(O);
    }
  };
}
function qi(i, e, t) {
  var O;
  let n, o, { feature: l } = e, { selected: c = !1 } = e, { showPlaceType: r } = e, { missingIconsCache: d } = e, { iconsBaseUrl: u } = e;
  const f = (O = l.properties) == null ? void 0 : O.categories;
  let h, v, _ = 0, w = l.place_type[0] === "reverse";
  function W() {
    v && d.add(v), t(10, _++, _);
  }
  function y(p) {
    bt.call(this, i, p);
  }
  function E(p) {
    bt.call(this, i, p);
  }
  const C = () => W();
  return i.$$set = (p) => {
    "feature" in p && t(0, l = p.feature), "selected" in p && t(1, c = p.selected), "showPlaceType" in p && t(2, r = p.showPlaceType), "missingIconsCache" in p && t(9, d = p.missingIconsCache), "iconsBaseUrl" in p && t(3, u = p.iconsBaseUrl);
  }, i.$$.update = () => {
    var p, G, b, g;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, n--, n), t(4, h = f == null ? void 0 : f[n]), t(5, v = h ? u + h.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!v || d.has(v)));
    i.$$.dirty & /*feature*/
    1 && t(6, o = ((G = (p = l.properties) == null ? void 0 : p.categories) == null ? void 0 : G.join(", ")) ?? ((g = (b = l.properties) == null ? void 0 : b.place_type_name) == null ? void 0 : g[0]) ?? l.place_type[0]);
  }, t(11, n = (f == null ? void 0 : f.length) ?? 0), [
    l,
    c,
    r,
    u,
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
class zi extends _e {
  constructor(e) {
    super(), Le(this, e, qi, Fi, ve, {
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
      e = D("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-7cmwmc");
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
class ji extends _e {
  constructor(e) {
    super(), Le(this, e, null, Hi, ve, {});
  }
}
function Pi(i) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
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
class Zi extends _e {
  constructor(e) {
    super(), Le(this, e, null, Pi, ve, {});
  }
}
function Gi(i) {
  let e, t, n;
  return {
    c() {
      e = se("svg"), t = se("circle"), n = se("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(n, "d", "M12.063 12.063 7.635 7.635"), a(n, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(o, l) {
      B(o, e, l), T(e, t), T(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(o) {
      o && U(e);
    }
  };
}
class Qi extends _e {
  constructor(e) {
    super(), Le(this, e, null, Gi, ve, {});
  }
}
function Vi(i, e, t) {
  const n = e[1], o = e[0], l = n - o;
  return i === n && t ? i : ((i - o) % l + l) % l + o;
}
function yt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Te;
async function Ki(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const o of e ?? [])
    if (!(n && (o.minZoom != null && o.minZoom > n[0] || o.maxZoom != null && o.maxZoom < n[0]))) {
      if (o.type === "fixed")
        return o.coordinates.join(",");
      e: if (o.type === "client-geolocation") {
        if (Te && o.cachedLocationExpiry && Te.time + o.cachedLocationExpiry > Date.now()) {
          if (!Te.coords)
            break e;
          return Te.coords;
        }
        let l;
        try {
          return l = await new Promise((c, r) => {
            t.signal.addEventListener("abort", () => {
              r(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                c(
                  [d.coords.longitude, d.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (d) => {
                r(d);
              },
              o
            );
          }), l;
        } catch {
        } finally {
          o.cachedLocationExpiry && (Te = {
            time: Date.now(),
            coords: l
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
const xi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, wt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Et = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, St = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, pt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Nt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Ji(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((_) => Number(_.trim())), t = Number(e[0]), n = Number(e[1]), o = Math.abs(t), l = Math.abs(n), c = t > 0 ? "N" : "S", r = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${o}° ${c}, ${l}° ${r}`);
    const u = Math.floor(o), f = Math.floor(l), h = (o - u) * 60, v = (l - f) * 60;
    if (i == "DM") {
      let _ = Mt(h, 3).toFixed(3).padStart(6, "0"), w = Mt(v, 3).toFixed(3).padStart(6, "0");
      _.endsWith(".000") && w.endsWith(".000") && (_ = _.replace(/\.000$/, ""), w = w.replace(/\.000$/, "")), d = `${u}° ${_}' ${c}, ${f}° ${w}' ${r}`;
    }
    if (i == "DMS") {
      const _ = Math.floor(h), w = Math.floor(v);
      let W = ((h - _) * 60).toFixed(1).padStart(4, "0"), y = ((v - w) * 60).toFixed(1).padStart(4, "0");
      const E = _.toString().padStart(2, "0"), C = w.toString().padStart(2, "0");
      W.endsWith(".0") && y.endsWith(".0") && (W = W.replace(/\.0$/, ""), y = y.replace(/\.0$/, "")), d = `${u}° ${E}' ${W}" ${c}, ${f}° ${C}' ${y}" ${r}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Mt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function rt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, o = "", l = "", c = null, r = [], d = !1;
  if (xi.test(i))
    throw new Error("invalid coordinate value");
  if (wt.test(i))
    if (r = wt.exec(i), d = ke(r), d)
      t = Math.abs(r[1]) + r[2] / 60, Number(r[1]) < 0 && (t *= -1), n = Math.abs(r[3]) + r[4] / 60, Number(r[3]) < 0 && (n *= -1), c = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Et.test(i))
    if (r = Et.exec(i), d = ke(r), d) {
      if (t = r[2], n = r[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), c = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      r[1] ? (o = r[1], l = r[5]) : r[4] && (o = r[4], l = r[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (St.test(i))
    if (r = St.exec(i), d = ke(r), d)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4] / 60, c = "DM"), r[6] && (t += r[6].replace(",", ".") / 3600, c = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[9])), r[11] && (n += r[11] / 60), r[13] && (n += r[13].replace(",", ".") / 3600), parseInt(r[9]) < 0 && (n = -1 * n), r[1] ? (o = r[1], l = r[8]) : r[7] && (o = r[7], l = r[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (pt.test(i))
    if (r = pt.exec(i), d = ke(r), d)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4] / 60, c = "DM"), r[6] && (t += r[6] / 3600, c = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[10])), r[12] && (n += r[12] / 60), r[14] && (n += r[14] / 3600), parseInt(r[10]) < 0 && (n = -1 * n), r[1] ? (o = r[1], l = r[9]) : r[8] && (o = r[8], l = r[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Nt.test(i)) {
    if (r = Nt.exec(i), d = ke(r), r.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(r[2])), r[4] && (t += r[4].replace(",", ".") / 60, c = "DM"), r[6] && (t += r[6].replace(",", ".") / 3600, c = "DMS"), parseInt(r[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(r[10])), r[12] && (n += r[12].replace(",", ".") / 60), r[14] && (n += r[14].replace(",", ".") / 3600), parseInt(r[10]) < 0 && (n = -1 * n), r[1] ? (o = r[1], l = r[9]) : r[8] && (o = r[8], l = r[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (o && !l || !o && l)
      throw new Error("invalid coordinates value");
    if (o && o == l)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let u = /S|SOUTH/i;
    u.test(o) && t > 0 && (t = -1 * t), u = /W|WEST/i, u.test(l) && n > 0 && (n = -1 * n);
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
        let O = 0, p = 0;
        for (; O <= E; )
          C = f.indexOf(w[O], p), p = C + 1, O++;
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
      originalFormat: c,
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
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, o = e.length / 2;
  for (let l = 0; l < o; l++) {
    const c = e[l], r = e[l + o], d = t.test(c) && t.test(r), u = n.test(c) && n.test(r), f = c == r;
    if (!(c == null && r == null)) {
      if (c == null || r == null)
        return !1;
      if (d || u || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function Tt(i, e) {
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
    return Tt(this.decimalLatitude, Number(e[0])) && Tt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Yi = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
rt.to = Yi;
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
], en = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, tn = [
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
], nn = [
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
function rn() {
  const i = [];
  return $i.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...en });
  }), [...i, ...tn, ...nn];
}
const on = rn();
rt.formats = on.map((i) => i.verbatimCoordinates);
const sn = rt;
function kt(i, e, t) {
  const n = i.slice();
  return n[83] = e[t], n[85] = t, n;
}
function Ct(i) {
  let e, t;
  return e = new ji({}), {
    c() {
      me(e.$$.fragment);
    },
    m(n, o) {
      ae(e, n, o), t = !0;
    },
    i(n) {
      t || (q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      le(e, n);
    }
  };
}
function Wt(i) {
  let e, t, n, o, l;
  return t = new Zi({}), {
    c() {
      e = D("button"), me(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), a(e, "class", "svelte-qnu791"), de(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(c, r) {
      B(c, e, r), ae(t, e, null), n = !0, o || (l = K(
        e,
        "click",
        /*click_handler_2*/
        i[68]
      ), o = !0);
    },
    p(c, r) {
      (!n || r[0] & /*reverseButtonTitle*/
      512) && a(
        e,
        "title",
        /*reverseButtonTitle*/
        c[9]
      ), (!n || r[0] & /*reverseActive*/
      1) && de(
        e,
        "active",
        /*reverseActive*/
        c[0]
      );
    },
    i(c) {
      n || (q(t.$$.fragment, c), n = !0);
    },
    o(c) {
      Q(t.$$.fragment, c), n = !1;
    },
    d(c) {
      c && U(e), le(t), o = !1, l();
    }
  };
}
function an(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), o, l, c, r = Lt(
    /*listFeatures*/
    i[14]
  );
  const d = (u) => (
    /*feature*/
    u[83].id + /*feature*/
    (u[83].address ? "," + /*feature*/
    u[83].address : "")
  );
  for (let u = 0; u < r.length; u += 1) {
    let f = kt(i, r, u), h = d(f);
    n.set(h, t[u] = Ot(h, f));
  }
  return {
    c() {
      e = D("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      a(e, "class", "svelte-qnu791");
    },
    m(u, f) {
      B(u, e, f);
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(e, null);
      o = !0, l || (c = [
        K(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[72]
        ),
        K(
          e,
          "blur",
          /*blur_handler_1*/
          i[73]
        )
      ], l = !0);
    },
    p(u, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (r = Lt(
        /*listFeatures*/
        u[14]
      ), ze(), t = Ni(t, f, d, 1, u, r, n, e, pi, Ot, null, kt), He());
    },
    i(u) {
      if (!o) {
        for (let f = 0; f < r.length; f += 1)
          q(t[f]);
        o = !0;
      }
    },
    o(u) {
      for (let f = 0; f < t.length; f += 1)
        Q(t[f]);
      o = !1;
    },
    d(u) {
      u && U(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      l = !1, ue(c);
    }
  };
}
function ln(i) {
  let e, t, n, o, l, c;
  return t = new Ft({}), {
    c() {
      e = D("div"), me(t.$$.fragment), n = J(), o = D("div"), l = fe(
        /*noResultsMessage*/
        i[7]
      ), a(o, "class", "svelte-qnu791"), a(e, "class", "no-results svelte-qnu791");
    },
    m(r, d) {
      B(r, e, d), ae(t, e, null), T(e, n), T(e, o), T(o, l), c = !0;
    },
    p(r, d) {
      (!c || d[0] & /*noResultsMessage*/
      128) && We(
        l,
        /*noResultsMessage*/
        r[7]
      );
    },
    i(r) {
      c || (q(t.$$.fragment, r), c = !0);
    },
    o(r) {
      Q(t.$$.fragment, r), c = !1;
    },
    d(r) {
      r && U(e), le(t);
    }
  };
}
function un(i) {
  let e = "", t;
  return {
    c() {
      t = fe(e);
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
function cn(i) {
  let e, t, n, o, l, c, r, d, u, f, h;
  return t = new Ft({}), d = new Bt({}), {
    c() {
      e = D("div"), me(t.$$.fragment), n = J(), o = D("div"), l = fe(
        /*errorMessage*/
        i[6]
      ), c = J(), r = D("button"), me(d.$$.fragment), a(o, "class", "svelte-qnu791"), a(r, "class", "svelte-qnu791"), a(e, "class", "error svelte-qnu791");
    },
    m(v, _) {
      B(v, e, _), ae(t, e, null), T(e, n), T(e, o), T(o, l), T(e, c), T(e, r), ae(d, r, null), u = !0, f || (h = K(
        r,
        "click",
        /*click_handler_3*/
        i[69]
      ), f = !0);
    },
    p(v, _) {
      (!u || _[0] & /*errorMessage*/
      64) && We(
        l,
        /*errorMessage*/
        v[6]
      );
    },
    i(v) {
      u || (q(t.$$.fragment, v), q(d.$$.fragment, v), u = !0);
    },
    o(v) {
      Q(t.$$.fragment, v), Q(d.$$.fragment, v), u = !1;
    },
    d(v) {
      v && U(e), le(t), le(d), f = !1, h();
    }
  };
}
function Ot(i, e) {
  let t, n, o;
  function l() {
    return (
      /*mouseenter_handler*/
      e[70](
        /*i*/
        e[85]
      )
    );
  }
  function c() {
    return (
      /*focus_handler_1*/
      e[71](
        /*feature*/
        e[83]
      )
    );
  }
  return n = new zi({
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
  }), n.$on("mouseenter", l), n.$on("focus", c), {
    key: i,
    first: null,
    c() {
      t = gi(), me(n.$$.fragment), this.first = t;
    },
    m(r, d) {
      B(r, t, d), ae(n, r, d), o = !0;
    },
    p(r, d) {
      e = r;
      const u = {};
      d[0] & /*listFeatures*/
      16384 && (u.feature = /*feature*/
      e[83]), d[0] & /*showPlaceType*/
      1024 && (u.showPlaceType = /*showPlaceType*/
      e[10]), d[0] & /*selectedItemIndex, listFeatures*/
      49152 && (u.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[85]), d[0] & /*iconsBaseUrl*/
      4096 && (u.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(u);
    },
    i(r) {
      o || (q(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Q(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && U(t), le(n, r);
    }
  };
}
function dn(i) {
  let e, t, n, o, l, c, r, d, u, f, h, v, _, w, W, y, E, C, O, p, G, b = !1;
  l = new Qi({}), h = new Bt({});
  let g = (
    /*abortController*/
    i[19] && Ct()
  ), m = (
    /*enableReverse*/
    i[5] === !0 && Wt(i)
  );
  const k = (
    /*#slots*/
    i[60].default
  ), z = ci(
    k,
    i,
    /*$$scope*/
    i[59],
    null
  ), X = [cn, un, ln, an], $ = [];
  function H(L, F) {
    var ee, te;
    return (
      /*error*/
      L[18] ? 0 : (
        /*focusedDelayed*/
        L[16] ? (
          /*listFeatures*/
          ((ee = L[14]) == null ? void 0 : ee.length) === 0 ? 2 : (
            /*focusedDelayed*/
            L[16] && /*listFeatures*/
            ((te = L[14]) != null && te.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(y = H(i)) && (E = $[y] = X[y](i)), {
    c() {
      e = J(), t = D("form"), n = D("div"), o = D("button"), me(l.$$.fragment), c = J(), r = D("input"), d = J(), u = D("div"), f = D("button"), me(h.$$.fragment), v = J(), g && g.c(), _ = J(), m && m.c(), w = J(), z && z.c(), W = J(), E && E.c(), a(o, "class", "search-button svelte-qnu791"), a(o, "type", "button"), a(
        r,
        "placeholder",
        /*placeholder*/
        i[8]
      ), a(
        r,
        "aria-label",
        /*placeholder*/
        i[8]
      ), a(r, "class", "svelte-qnu791"), a(f, "type", "button"), a(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), a(f, "class", "svelte-qnu791"), a(u, "class", "clear-button-container svelte-qnu791"), de(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(n, "class", "input-group svelte-qnu791"), a(t, "tabindex", "0"), a(t, "class", C = gt(
        /*className*/
        i[2]
      ) + " svelte-qnu791"), de(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(L, F) {
      B(L, e, F), B(L, t, F), T(t, n), T(n, o), ae(l, o, null), T(n, c), T(n, r), i[62](r), ht(
        r,
        /*searchValue*/
        i[1]
      ), T(n, d), T(n, u), T(u, f), ae(h, f, null), T(u, v), g && g.m(u, null), T(n, _), m && m.m(n, null), T(n, w), z && z.m(n, null), T(t, W), ~y && $[y].m(t, null), O = !0, p || (G = [
        K(
          o,
          "click",
          /*click_handler*/
          i[61]
        ),
        K(
          r,
          "input",
          /*input_1_input_handler*/
          i[63]
        ),
        K(
          r,
          "focus",
          /*focus_handler*/
          i[64]
        ),
        K(
          r,
          "blur",
          /*blur_handler*/
          i[65]
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
          i[66]
        ),
        K(
          f,
          "click",
          /*click_handler_1*/
          i[67]
        ),
        K(t, "submit", hi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], p = !0);
    },
    p(L, F) {
      (!O || F[0] & /*placeholder*/
      256) && a(
        r,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!O || F[0] & /*placeholder*/
      256) && a(
        r,
        "aria-label",
        /*placeholder*/
        L[8]
      ), F[0] & /*searchValue*/
      2 && r.value !== /*searchValue*/
      L[1] && ht(
        r,
        /*searchValue*/
        L[1]
      ), (!O || F[0] & /*clearButtonTitle*/
      8) && a(
        f,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[19] ? g ? F[0] & /*abortController*/
      524288 && q(g, 1) : (g = Ct(), g.c(), q(g, 1), g.m(u, null)) : g && (ze(), Q(g, 1, 1, () => {
        g = null;
      }), He()), (!O || F[0] & /*searchValue*/
      2) && de(
        u,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? m ? (m.p(L, F), F[0] & /*enableReverse*/
      32 && q(m, 1)) : (m = Wt(L), m.c(), q(m, 1), m.m(n, w)) : m && (ze(), Q(m, 1, 1, () => {
        m = null;
      }), He()), z && z.p && (!O || F[1] & /*$$scope*/
      268435456) && fi(
        z,
        k,
        L,
        /*$$scope*/
        L[59],
        O ? di(
          k,
          /*$$scope*/
          L[59],
          F,
          null
        ) : mi(
          /*$$scope*/
          L[59]
        ),
        null
      );
      let ee = y;
      y = H(L), y === ee ? ~y && $[y].p(L, F) : (E && (ze(), Q($[ee], 1, 1, () => {
        $[ee] = null;
      }), He()), ~y ? (E = $[y], E ? E.p(L, F) : (E = $[y] = X[y](L), E.c()), q(E, 1), E.m(t, null)) : E = null), (!O || F[0] & /*className*/
      4 && C !== (C = gt(
        /*className*/
        L[2]
      ) + " svelte-qnu791")) && a(t, "class", C), (!O || F[0] & /*className, collapsed, searchValue*/
      22) && de(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      O || (q(b), q(l.$$.fragment, L), q(h.$$.fragment, L), q(g), q(m), q(z, L), q(E), O = !0);
    },
    o(L) {
      Q(b), Q(l.$$.fragment, L), Q(h.$$.fragment, L), Q(g), Q(m), Q(z, L), Q(E), O = !1;
    },
    d(L) {
      L && (U(e), U(t)), le(l), i[62](null), le(h), g && g.d(), m && m.d(), z && z.d(L), ~y && $[y].d(), p = !1, ue(G);
    }
  };
}
function fn(i, e, t) {
  let n, { $$slots: o = {}, $$scope: l } = e;
  const c = {
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
  let { class: r = void 0 } = e, { apiKey: d } = e, { bbox: u = void 0 } = e, { clearButtonTitle: f = "clear" } = e, { clearOnBlur: h = !1 } = e, { collapsed: v = !1 } = e, { country: _ = void 0 } = e, { debounceSearch: w = 200 } = e, { enableReverse: W = !1 } = e, { errorMessage: y = "Something went wrong…" } = e, { filter: E = () => !0 } = e, { flyTo: C = !0 } = e, { fuzzyMatch: O = !0 } = e, { language: p = void 0 } = e, { limit: G = void 0 } = e, { mapController: b = void 0 } = e, { minLength: g = 2 } = e, { noResultsMessage: m = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: z = [{ type: "server-geolocation" }] } = e, { reverseActive: X = W === "always" } = e, { reverseButtonTitle: $ = "toggle reverse geocoding" } = e, { searchValue: H = "" } = e, { showFullGeometry: L = !0 } = e, { showPlaceType: F = "ifNeeded" } = e, { showResultsWhileTyping: ee = !0 } = e, { selectFirst: te = !0 } = e, { flyToSelected: je = !1 } = e, { markerOnSelected: De = !0 } = e, { types: ge = void 0 } = e, { excludeTypes: Re = !1 } = e, { zoom: ye = c } = e, { maxZoom: Ue = void 0 } = e, { apiUrl: Pe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ze = {} } = e, { iconsBaseUrl: ot = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.4.1/icons/" } = e, { adjustUrlQuery: Ge = () => {
  } } = e;
  function qt() {
    ie.focus();
  }
  function zt() {
    ie.blur();
  }
  function st(s, I = !0, Z = !1) {
    t(1, H = s), I ? (t(15, R = -1), lt()) : (xe(!Z, Z), setTimeout(() => {
      ie.focus(), ie.select();
    }));
  }
  function Ht() {
    t(14, M = void 0), t(56, S = void 0), t(15, R = -1);
  }
  function jt() {
    t(55, j = []), t(56, S = void 0);
  }
  let we = !1, M, j, S, at = "", ie, R = -1, ne, Ie = [], he, Ee, Ae, Qe;
  const Pt = /* @__PURE__ */ new Set(), ce = _i();
  Li(() => {
    b && (b.setEventHandler(void 0), b.indicateReverse(!1), b.setSelectedMarker(-1), b.setMarkers(void 0, void 0));
  });
  function lt(s) {
    if (Ee && (clearTimeout(Ee), Ee = void 0), R > -1 && M)
      t(56, S = M[R]), t(1, H = S.place_type[0] === "reverse" ? S.place_name : S.place_name.replace(/,.*/, "")), t(18, ne = void 0), t(55, j = void 0), t(15, R = -1);
    else if (H) {
      const I = s || !Ve(H);
      Ke(H, { exact: !0 }).then(() => {
        t(55, j = M), t(56, S = void 0), I && Zt();
      }).catch((Z) => t(18, ne = Z));
    }
  }
  function Ve(s) {
    try {
      return sn(s, 6);
    } catch {
      return !1;
    }
  }
  async function Ke(s, { byId: I = !1, exact: Z = !1 } = {}) {
    t(18, ne = void 0), he == null || he.abort();
    const x = new AbortController();
    t(19, he = x);
    try {
      const N = Ve(s), P = new URLSearchParams();
      if (p !== void 0 && P.set("language", Array.isArray(p) ? p.join(",") : p ?? ""), ge && P.set("types", ge.join(",")), Re && P.set("excludeTypes", String(Re)), u && P.set("bbox", u.map((Be) => Be.toFixed(6)).join(",")), _ && P.set("country", Array.isArray(_) ? _.join(",") : _), !I && !N) {
        const Be = await Ki(b, z, x);
        Be && P.set("proximity", Be), (Z || !ee) && P.set("autocomplete", "false"), P.set("fuzzyMatch", String(O));
      }
      G !== void 0 && (!N || (ge == null ? void 0 : ge.length) === 1) && P.set("limit", String(G)), P.set("key", d), Ge(P);
      const re = Pe + "/" + encodeURIComponent(N ? N.decimalLongitude + "," + N.decimalLatitude : s) + ".json?" + P.toString();
      if (re === at) {
        I ? (t(14, M = void 0), t(56, S = Ie[0])) : t(14, M = Ie);
        return;
      }
      at = re;
      const Xe = await fetch(re, { signal: x.signal, ...Ze });
      if (!Xe.ok)
        throw new Error(await Xe.text());
      const Ye = await Xe.json();
      ce("response", { url: re, featureCollection: Ye }), I ? (t(14, M = void 0), t(56, S = Ye.features[0]), Ie = [S]) : (t(14, M = Ye.features.filter(E)), N && M.unshift({
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
      }), Ie = M, N && ie.focus());
    } catch (N) {
      if (N && typeof N == "object" && "name" in N && N.name === "AbortError")
        return;
      throw N;
    } finally {
      x === he && t(19, he = void 0);
    }
  }
  function Zt() {
    var x;
    if (!(j != null && j.length) || !C)
      return;
    const s = [180, 90, -180, -90], I = !j.some((N) => !N.matching_text);
    let Z;
    for (const N of j) {
      const P = Me(N);
      if (Z = Ue ?? (Z === void 0 ? P : P === void 0 ? Z : Math.max(Z, P)), I || !N.matching_text)
        for (const re of [0, 1, 2, 3])
          s[re] = Math[re < 2 ? "min" : "max"](s[re], ((x = N.bbox) == null ? void 0 : x[re]) ?? N.center[re % 2]);
    }
    b && j.length > 0 && (S && s[0] === s[2] && s[1] === s[3] ? b.flyTo(S.center, Me(S)) : b.fitBounds(yt(s), 50, Z));
  }
  function Me(s) {
    var Z;
    if (!s.bbox || s.bbox[0] !== s.bbox[2] && s.bbox[1] !== s.bbox[3])
      return;
    if (typeof ye == "number")
      return s.id.startsWith("poi.") || s.id.startsWith("address.") ? Ue : ye;
    const I = s.id.replace(/\..*/, "");
    return (Array.isArray((Z = s.properties) == null ? void 0 : Z.categories) ? s.properties.categories.reduce(
      (x, N) => {
        const P = ye[I + "." + N];
        return x === void 0 ? P : P === void 0 ? x : Math.max(x, P);
      },
      void 0
    ) : void 0) ?? ye[I];
  }
  function Gt(s) {
    t(0, X = W === "always"), t(14, M = void 0), t(56, S = void 0), t(15, R = -1), st(s[1].toFixed(6) + ", " + Vi(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Qt(s) {
    if (!M)
      return;
    let I = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    I && (R === (te ? 0 : -1) && I === -1 && t(15, R = M.length), t(15, R += I), R >= M.length && t(15, R = -1), R < 0 && te && t(15, R = 0), s.preventDefault());
  }
  function xe(s = !0, I = !1) {
    if (t(18, ne = void 0), ee || I) {
      if (Ee && clearTimeout(Ee), H.length < g)
        return;
      const Z = H;
      Ee = window.setTimeout(
        () => {
          Ke(Z).catch((x) => t(18, ne = x));
        },
        s ? w : 0
      );
    } else
      t(14, M = void 0), t(18, ne = void 0);
  }
  function Je(s) {
    t(56, S = s), t(1, H = s.place_name), t(15, R = -1);
  }
  const Vt = () => ie.focus();
  function Kt(s) {
    tt[s ? "unshift" : "push"](() => {
      ie = s, t(17, ie);
    });
  }
  function xt() {
    H = this.value, t(1, H), t(13, we), t(28, h);
  }
  const Jt = () => t(13, we = !0), Xt = () => t(13, we = !1), Yt = () => xe(), $t = () => {
    t(1, H = ""), ie.focus();
  }, ei = () => t(0, X = !X), ti = () => t(18, ne = void 0), ii = (s) => t(15, R = s), ni = (s) => Je(s), ri = () => {
    te || t(15, R = -1);
  }, oi = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, r = s.class), "apiKey" in s && t(26, d = s.apiKey), "bbox" in s && t(27, u = s.bbox), "clearButtonTitle" in s && t(3, f = s.clearButtonTitle), "clearOnBlur" in s && t(28, h = s.clearOnBlur), "collapsed" in s && t(4, v = s.collapsed), "country" in s && t(29, _ = s.country), "debounceSearch" in s && t(30, w = s.debounceSearch), "enableReverse" in s && t(5, W = s.enableReverse), "errorMessage" in s && t(6, y = s.errorMessage), "filter" in s && t(31, E = s.filter), "flyTo" in s && t(32, C = s.flyTo), "fuzzyMatch" in s && t(33, O = s.fuzzyMatch), "language" in s && t(34, p = s.language), "limit" in s && t(35, G = s.limit), "mapController" in s && t(36, b = s.mapController), "minLength" in s && t(37, g = s.minLength), "noResultsMessage" in s && t(7, m = s.noResultsMessage), "placeholder" in s && t(8, k = s.placeholder), "proximity" in s && t(38, z = s.proximity), "reverseActive" in s && t(0, X = s.reverseActive), "reverseButtonTitle" in s && t(9, $ = s.reverseButtonTitle), "searchValue" in s && t(1, H = s.searchValue), "showFullGeometry" in s && t(39, L = s.showFullGeometry), "showPlaceType" in s && t(10, F = s.showPlaceType), "showResultsWhileTyping" in s && t(40, ee = s.showResultsWhileTyping), "selectFirst" in s && t(11, te = s.selectFirst), "flyToSelected" in s && t(41, je = s.flyToSelected), "markerOnSelected" in s && t(42, De = s.markerOnSelected), "types" in s && t(43, ge = s.types), "excludeTypes" in s && t(44, Re = s.excludeTypes), "zoom" in s && t(45, ye = s.zoom), "maxZoom" in s && t(46, Ue = s.maxZoom), "apiUrl" in s && t(47, Pe = s.apiUrl), "fetchParameters" in s && t(48, Ze = s.fetchParameters), "iconsBaseUrl" in s && t(12, ot = s.iconsBaseUrl), "adjustUrlQuery" in s && t(49, Ge = s.adjustUrlQuery), "$$scope" in s && t(59, l = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, X = W === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, Ae = we), h && !we && t(1, H = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    64 && H.length < g && (t(56, S = void 0), t(14, M = void 0), t(18, ne = void 0), t(55, j = M)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    33554688 && L && S && !S.address && S.geometry.type === "Point" && S.place_type[0] !== "reverse" && Ke(S.id, { byId: !0 }).catch((s) => t(18, ne = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (b && S && S.id !== Qe && C && (!S.bbox || S.bbox[0] === S.bbox[2] && S.bbox[1] === S.bbox[3] ? b.flyTo(S.center, Me(S)) : b.fitBounds(yt(S.bbox), 50, Me(S)), t(14, M = void 0), t(55, j = void 0), t(15, R = -1)), t(57, Qe = S == null ? void 0 : S.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && te && M != null && M.length && t(15, R = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (te || t(15, R = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    16777216 && j !== M && t(55, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && b && b.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          X && Gt(s.coordinates);
          break;
        case "markerClick":
          {
            const I = M == null ? void 0 : M.find((Z) => Z.id === s.id);
            I && Je(I);
          }
          break;
        case "markerMouseEnter":
          j && t(15, R = Ae ? (M == null ? void 0 : M.findIndex((I) => I.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, R = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, n = M == null ? void 0 : M[R]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && b && n && C && je && b.flyTo(n.center, Me(n)), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    2080 && (De || b == null || b.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    150997024 && b && De && !j && (b.setMarkers(n ? [n] : void 0, void 0), b.setSelectedMarker(n ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    50331680 && b && b.setMarkers(j, S), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && j && b && b.setSelectedMarker(R), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    32 && b) {
      const s = Ve(H);
      b.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    134217728 && ce("select", n), i.$$.dirty[1] & /*picked*/
    33554432 && ce("pick", S), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && ce("optionsVisibilityChange", Ae && !!M), i.$$.dirty[0] & /*listFeatures*/
    16384 && ce("featuresListed", M), i.$$.dirty[1] & /*markedFeatures*/
    16777216 && ce("featuresMarked", j), i.$$.dirty[0] & /*reverseActive*/
    1 && ce("reverseToggle", X), i.$$.dirty[0] & /*searchValue*/
    2 && ce("queryChange", H), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    32 && b && b.indicateReverse(X);
  }, [
    X,
    H,
    r,
    f,
    v,
    W,
    y,
    m,
    k,
    $,
    F,
    te,
    ot,
    we,
    M,
    R,
    Ae,
    ie,
    ne,
    he,
    Pt,
    lt,
    Qt,
    xe,
    Je,
    c,
    d,
    u,
    h,
    _,
    w,
    E,
    C,
    O,
    p,
    G,
    b,
    g,
    z,
    L,
    ee,
    je,
    De,
    ge,
    Re,
    ye,
    Ue,
    Pe,
    Ze,
    Ge,
    qt,
    zt,
    st,
    Ht,
    jt,
    j,
    S,
    Qe,
    n,
    l,
    o,
    Vt,
    Kt,
    xt,
    Jt,
    Xt,
    Yt,
    $t,
    ei,
    ti,
    ii,
    ni,
    ri,
    oi
  ];
}
let mn = class extends _e {
  constructor(e) {
    super(), Le(
      this,
      e,
      fn,
      dn,
      ve,
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
const gn = new FinalizationRegistry((i) => {
  i.$destroy();
});
var Y;
class vn extends EventTarget {
  constructor({ target: t, ...n }) {
    super();
    dt(this, Y);
    ft(this, Y, new mn({
      target: t,
      props: n
    }));
    for (const o of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      oe(this, Y).$on(o, (l) => this.dispatchEvent(l));
    gn.register(this, oe(this, Y));
  }
  setOptions(t) {
    oe(this, Y).$set(t);
  }
  setQuery(t, n = !0) {
    var o;
    (o = oe(this, Y)) == null || o.setQuery(t, n);
  }
  clearMap() {
    var t;
    (t = oe(this, Y)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = oe(this, Y)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = oe(this, Y)) == null || t.focus();
  }
  blur() {
    var t;
    (t = oe(this, Y)) == null || t.blur();
  }
}
Y = new WeakMap();
export {
  vn as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
