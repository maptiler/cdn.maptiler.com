var mi = Object.defineProperty;
var gi = Object.getPrototypeOf;
var hi = Reflect.get;
var gt = (i) => {
  throw TypeError(i);
};
var bi = (i, e, t) => e in i ? mi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var tt = (i, e, t) => bi(i, typeof e != "symbol" ? e + "" : e, t), it = (i, e, t) => e.has(i) || gt("Cannot " + t);
var te = (i, e, t) => (it(i, e, "read from private field"), t ? t.call(i) : e.get(i)), nt = (i, e, t) => e.has(i) ? gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), ht = (i, e, t, n) => (it(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t), bt = (i, e, t) => (it(i, e, "access private method"), t);
var vt = (i, e, t) => hi(gi(i), t, e);
function A() {
}
function vi(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Bt(i) {
  return i();
}
function Lt() {
  return /* @__PURE__ */ Object.create(null);
}
function se(i) {
  i.forEach(Bt);
}
function Ft(i) {
  return typeof i == "function";
}
function he(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Be;
function K(i, e) {
  return i === e ? !0 : (Be || (Be = document.createElement("a")), Be.href = e, i === Be.href);
}
function Li(i) {
  return Object.keys(i).length === 0;
}
function _i(i, e, t, n) {
  if (i) {
    const r = Ht(i, e, t, n);
    return i[0](r);
  }
}
function Ht(i, e, t, n) {
  return i[1] && n ? vi(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function yi(i, e, t, n) {
  if (i[2] && n) {
    const r = i[2](n(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], d = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < d; o += 1)
        l[o] = e.dirty[o] | r[o];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function wi(i, e, t, n, r, l) {
  if (r) {
    const d = Ht(e, t, n, l);
    i.p(d, r);
  }
}
function Ei(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function _t(i) {
  return i ?? "";
}
function k(i, e) {
  i.appendChild(e);
}
function B(i, e, t) {
  i.insertBefore(e, t || null);
}
function D(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function W(i) {
  return document.createElement(i);
}
function ne(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ue(i) {
  return document.createTextNode(i);
}
function X() {
  return ue(" ");
}
function Si() {
  return ue("");
}
function V(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function pi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Ni(i) {
  return Array.from(i.childNodes);
}
function We(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function yt(i, e) {
  i.value = e ?? "";
}
function le(i, e, t) {
  i.classList.toggle(e, !!t);
}
function ki(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let ze;
function Ce(i) {
  ze = i;
}
function Pt() {
  if (!ze) throw new Error("Function called outside component initialization");
  return ze;
}
function Mi(i) {
  Pt().$$.on_destroy.push(i);
}
function Ti() {
  const i = Pt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const l = ki(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((d) => {
        d.call(i, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function wt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Se = [], ot = [];
let pe = [];
const Et = [], Ci = /* @__PURE__ */ Promise.resolve();
let st = !1;
function Wi() {
  st || (st = !0, Ci.then(jt));
}
function at(i) {
  pe.push(i);
}
const rt = /* @__PURE__ */ new Set();
let Ee = 0;
function jt() {
  if (Ee !== 0)
    return;
  const i = ze;
  do {
    try {
      for (; Ee < Se.length; ) {
        const e = Se[Ee];
        Ee++, Ce(e), zi(e.$$);
      }
    } catch (e) {
      throw Se.length = 0, Ee = 0, e;
    }
    for (Ce(null), Se.length = 0, Ee = 0; ot.length; ) ot.pop()();
    for (let e = 0; e < pe.length; e += 1) {
      const t = pe[e];
      rt.has(t) || (rt.add(t), t());
    }
    pe.length = 0;
  } while (Se.length);
  for (; Et.length; )
    Et.pop()();
  st = !1, rt.clear(), Ce(i);
}
function zi(i) {
  if (i.fragment !== null) {
    i.update(), se(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(at);
  }
}
function Ri(i) {
  const e = [], t = [];
  pe.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), pe = e;
}
const Fe = /* @__PURE__ */ new Set();
let ge;
function He() {
  ge = {
    r: 0,
    c: [],
    p: ge
    // parent group
  };
}
function Pe() {
  ge.r || se(ge.c), ge = ge.p;
}
function F(i, e) {
  i && i.i && (Fe.delete(i), i.i(e));
}
function Q(i, e, t, n) {
  if (i && i.o) {
    if (Fe.has(i)) return;
    Fe.add(i), ge.c.push(() => {
      Fe.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function St(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Oi(i, e) {
  Q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Di(i, e, t, n, r, l, d, o, m, u, f, v) {
  let b = i.length, y = l.length, _ = b;
  const z = {};
  for (; _--; ) z[i[_].key] = _;
  const L = [], E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), T = [];
  for (_ = y; _--; ) {
    const c = v(r, l, _), g = t(c);
    let M = d.get(g);
    M ? T.push(() => M.p(c, e)) : (M = u(g, c), M.c()), E.set(g, L[_] = M), g in z && C.set(g, Math.abs(_ - z[g]));
  }
  const p = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
  function R(c) {
    F(c, 1), c.m(o, f), d.set(c.key, c), f = c.first, y--;
  }
  for (; b && y; ) {
    const c = L[y - 1], g = i[b - 1], M = c.key, Z = g.key;
    c === g ? (f = c.first, b--, y--) : E.has(Z) ? !d.has(M) || p.has(M) ? R(c) : H.has(Z) ? b-- : C.get(M) > C.get(Z) ? (H.add(M), R(c)) : (p.add(Z), b--) : (m(g, d), b--);
  }
  for (; b--; ) {
    const c = i[b];
    E.has(c.key) || m(c, d);
  }
  for (; y; ) R(L[y - 1]);
  return se(T), L;
}
function ce(i) {
  i && i.c();
}
function re(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), at(() => {
    const l = i.$$.on_mount.map(Bt).filter(Ft);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : se(l), i.$$.on_mount = [];
  }), r.forEach(at);
}
function oe(i, e) {
  const t = i.$$;
  t.fragment !== null && (Ri(t.after_update), se(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ui(i, e) {
  i.$$.dirty[0] === -1 && (Se.push(i), Wi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function be(i, e, t, n, r, l, d = null, o = [-1]) {
  const m = ze;
  Ce(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: A,
    not_equal: r,
    bound: Lt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (m ? m.$$.context : [])),
    // everything else
    callbacks: Lt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || m.$$.root
  };
  d && d(u.root);
  let f = !1;
  if (u.ctx = t ? t(i, e.props || {}, (v, b, ...y) => {
    const _ = y.length ? y[0] : b;
    return u.ctx && r(u.ctx[v], u.ctx[v] = _) && (!u.skip_bound && u.bound[v] && u.bound[v](_), f && Ui(i, v)), b;
  }) : [], u.update(), f = !0, se(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = Ni(e.target);
      u.fragment && u.fragment.l(v), v.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && F(i.$$.fragment), re(i, e.target, e.anchor), jt();
  }
  Ce(m);
}
class ve {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    tt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    tt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    oe(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ft(t))
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
    this.$$set && !Li(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ii = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ii);
function Ai(i) {
  let e, t;
  return {
    c() {
      e = ne("svg"), t = ne("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      B(n, e, r), k(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(e);
    }
  };
}
class Zt extends ve {
  constructor(e) {
    super(), be(this, e, null, Ai, he, {});
  }
}
function Bi(i) {
  let e, t;
  return {
    c() {
      e = ne("svg"), t = ne("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      B(n, e, r), k(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(e);
    }
  };
}
class qt extends ve {
  constructor(e) {
    super(), be(this, e, null, Bi, he, {});
  }
}
function Fi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Hi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Pi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function ji(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Zi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function qi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Gi(i) {
  let e, t;
  return {
    c() {
      e = W("img"), K(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Qi(i) {
  let e, t, n, r;
  return {
    c() {
      e = W("img"), K(e.src, t = /*imageUrl*/
      i[5]) || a(e, "src", t), a(
        e,
        "alt",
        /*category*/
        i[4]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(l, d) {
      B(l, e, d), n || (r = V(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(l, d) {
      d & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      l[5]) && a(e, "src", t), d & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        l[4]
      );
    },
    d(l) {
      l && D(e), n = !1, r();
    }
  };
}
function pt(i) {
  let e, t;
  return {
    c() {
      e = W("span"), t = ue(
        /*placeType*/
        i[6]
      ), a(e, "class", "secondary svelte-ltkwvy");
    },
    m(n, r) {
      B(n, e, r), k(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && We(
        t,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ki(i) {
  let e, t, n, r, l, d, o, m, u, f = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), v, b, y = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] !== "never" && !/*feature*/
    i[0].address && !/*feature*/
    i[0].id.startsWith("road.") && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), _, z, L = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), E, C, T;
  function p(g, M) {
    return M & /*feature*/
    1 && (t = null), M & /*feature*/
    1 && (n = null), M & /*feature*/
    1 && (r = null), M & /*feature*/
    1 && (l = null), /*imageUrl*/
    g[5] ? Qi : (
      /*feature*/
      g[0].address ? Gi : (t == null && (t = !!/*feature*/
      g[0].id.startsWith("road.")), t ? qi : (n == null && (n = !!/*feature*/
      g[0].id.startsWith("address.")), n ? Zi : (r == null && (r = !!/*feature*/
      g[0].id.startsWith("postal_code.")), r ? ji : (l == null && (l = !!/*feature*/
      g[0].id.startsWith("poi.")), l ? Pi : (
        /*isReverse*/
        g[7] ? Hi : Fi
      )))))
    );
  }
  let H = p(i, -1), R = H(i), c = y && pt(i);
  return {
    c() {
      e = W("li"), R.c(), d = X(), o = W("span"), m = W("span"), u = W("span"), v = ue(f), b = X(), c && c.c(), _ = X(), z = W("span"), E = ue(L), a(u, "class", "primary svelte-ltkwvy"), a(m, "class", "svelte-ltkwvy"), a(z, "class", "line2 svelte-ltkwvy"), a(o, "class", "texts svelte-ltkwvy"), a(e, "tabindex", "0"), a(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), a(e, "class", "svelte-ltkwvy"), le(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(g, M) {
      B(g, e, M), R.m(e, null), k(e, d), k(e, o), k(o, m), k(m, u), k(u, v), k(m, b), c && c.m(m, null), k(o, _), k(o, z), k(z, E), C || (T = [
        V(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        V(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], C = !0);
    },
    p(g, [M]) {
      H === (H = p(g, M)) && R ? R.p(g, M) : (R.d(1), R = H(g), R && (R.c(), R.m(e, d))), M & /*feature*/
      1 && f !== (f = /*isReverse*/
      (g[7] ? (
        /*feature*/
        g[0].place_name
      ) : (
        /*feature*/
        g[0].place_name.replace(/,.*/, "")
      )) + "") && We(v, f), M & /*showPlaceType, feature, imageUrl*/
      37 && (y = /*showPlaceType*/
      g[2] === "always" || /*showPlaceType*/
      g[2] !== "never" && !/*feature*/
      g[0].address && !/*feature*/
      g[0].id.startsWith("road.") && !/*feature*/
      g[0].id.startsWith("address.") && !/*feature*/
      g[0].id.startsWith("postal_code.") && (!/*feature*/
      g[0].id.startsWith("poi.") || !/*imageUrl*/
      g[5]) && !/*isReverse*/
      g[7]), y ? c ? c.p(g, M) : (c = pt(g), c.c(), c.m(m, null)) : c && (c.d(1), c = null), M & /*feature*/
      1 && L !== (L = /*isReverse*/
      (g[7] ? "" : (
        /*feature*/
        g[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && We(E, L), M & /*selected*/
      2 && a(
        e,
        "data-selected",
        /*selected*/
        g[1]
      ), M & /*selected*/
      2 && le(
        e,
        "selected",
        /*selected*/
        g[1]
      );
    },
    i: A,
    o: A,
    d(g) {
      g && D(e), R.d(), c && c.d(), C = !1, se(T);
    }
  };
}
function Vi(i, e, t) {
  var T;
  let n, r, { feature: l } = e, { selected: d = !1 } = e, { showPlaceType: o } = e, { missingIconsCache: m } = e, { iconsBaseUrl: u } = e;
  const f = (T = l.properties) == null ? void 0 : T.categories;
  let v, b, y = 0, _ = l.place_type[0] === "reverse";
  function z() {
    b && m.add(b), t(10, y++, y);
  }
  function L(p) {
    wt.call(this, i, p);
  }
  function E(p) {
    wt.call(this, i, p);
  }
  const C = () => z();
  return i.$$set = (p) => {
    "feature" in p && t(0, l = p.feature), "selected" in p && t(1, d = p.selected), "showPlaceType" in p && t(2, o = p.showPlaceType), "missingIconsCache" in p && t(9, m = p.missingIconsCache), "iconsBaseUrl" in p && t(3, u = p.iconsBaseUrl);
  }, i.$$.update = () => {
    var p, H, R, c;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, n--, n), t(4, v = f == null ? void 0 : f[n]), t(5, b = v ? u + v.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!b || m.has(b)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((H = (p = l.properties) == null ? void 0 : p.categories) == null ? void 0 : H.join(", ")) ?? ((c = (R = l.properties) == null ? void 0 : R.place_type_name) == null ? void 0 : c[0]) ?? l.place_type[0]);
  }, t(11, n = (f == null ? void 0 : f.length) ?? 0), [
    l,
    d,
    o,
    u,
    v,
    b,
    r,
    _,
    z,
    m,
    y,
    n,
    L,
    E,
    C
  ];
}
class xi extends ve {
  constructor(e) {
    super(), be(this, e, Vi, Ki, he, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Ji(i) {
  let e;
  return {
    c() {
      e = W("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      B(t, e, n);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && D(e);
    }
  };
}
class Xi extends ve {
  constructor(e) {
    super(), be(this, e, null, Ji, he, {});
  }
}
function Yi(i) {
  let e, t;
  return {
    c() {
      e = ne("svg"), t = ne("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      B(n, e, r), k(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(e);
    }
  };
}
class $i extends ve {
  constructor(e) {
    super(), be(this, e, null, Yi, he, {});
  }
}
function en(i) {
  let e, t, n;
  return {
    c() {
      e = ne("svg"), t = ne("circle"), n = ne("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(n, "d", "M12.063 12.063 7.635 7.635"), a(n, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(r, l) {
      B(r, e, l), k(e, t), k(e, n);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && D(e);
    }
  };
}
class tn extends ve {
  constructor(e) {
    super(), be(this, e, null, en, he, {});
  }
}
function nn(i, e, t) {
  const n = e[1], r = e[0], l = n - r;
  return i === n && t ? i : ((i - r) % l + l) % l + r;
}
function Nt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Me;
async function rn(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Me && r.cachedLocationExpiry && Me.time + r.cachedLocationExpiry > Date.now()) {
          if (!Me.coords)
            break e;
          return Me.coords;
        }
        let l;
        try {
          return l = await new Promise((d, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (m) => {
                d(
                  [m.coords.longitude, m.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (m) => {
                o(m);
              },
              r
            );
          }), l;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Me = {
            time: Date.now(),
            coords: l
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
const on = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, kt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Mt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Tt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Ct = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Wt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function sn(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((y) => Number(y.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), l = Math.abs(n), d = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let m;
    i == "DD" && (m = `${r}° ${d}, ${l}° ${o}`);
    const u = Math.floor(r), f = Math.floor(l), v = (r - u) * 60, b = (l - f) * 60;
    if (i == "DM") {
      let y = zt(v, 3).toFixed(3).padStart(6, "0"), _ = zt(b, 3).toFixed(3).padStart(6, "0");
      y.endsWith(".000") && _.endsWith(".000") && (y = y.replace(/\.000$/, ""), _ = _.replace(/\.000$/, "")), m = `${u}° ${y}' ${d}, ${f}° ${_}' ${o}`;
    }
    if (i == "DMS") {
      const y = Math.floor(v), _ = Math.floor(b);
      let z = ((v - y) * 60).toFixed(1).padStart(4, "0"), L = ((b - _) * 60).toFixed(1).padStart(4, "0");
      const E = y.toString().padStart(2, "0"), C = _.toString().padStart(2, "0");
      z.endsWith(".0") && L.endsWith(".0") && (z = z.replace(/\.0$/, ""), L = L.replace(/\.0$/, "")), m = `${u}° ${E}' ${z}" ${d}, ${f}° ${C}' ${L}" ${o}`;
    }
    return m;
  } else
    throw new Error("no decimal coordinates to convert");
}
function zt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function lt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", l = "", d = null, o = [], m = !1;
  if (on.test(i))
    throw new Error("invalid coordinate value");
  if (kt.test(i))
    if (o = kt.exec(i), m = Te(o), m)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), d = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Mt.test(i))
    if (o = Mt.exec(i), m = Te(o), m) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), d = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], l = o[5]) : o[4] && (r = o[4], l = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Tt.test(i))
    if (o = Tt.exec(i), m = Te(o), m)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, d = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, d = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], l = o[8]) : o[7] && (r = o[7], l = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ct.test(i))
    if (o = Ct.exec(i), m = Te(o), m)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, d = "DM"), o[6] && (t += o[6] / 3600, d = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], l = o[9]) : o[8] && (r = o[8], l = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Wt.test(i)) {
    if (o = Wt.exec(i), m = Te(o), o.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (m)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, d = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, d = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], l = o[9]) : o[8] && (r = o[8], l = o[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (m) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !l || !r && l)
      throw new Error("invalid coordinates value");
    if (r && r == l)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let u = /S|SOUTH/i;
    u.test(r) && t > 0 && (t = -1 * t), u = /W|WEST/i, u.test(l) && n > 0 && (n = -1 * n);
    const f = o[0].trim();
    let v, b;
    const y = /[,/;\u0020]/g, _ = f.match(y);
    if (_ == null) {
      const E = Math.floor(i.length / 2);
      v = f.substring(0, E).trim(), b = f.substring(E).trim();
    } else {
      let E;
      _.length % 2 == 1 ? E = Math.floor(_.length / 2) : E = _.length / 2 - 1;
      let C = 0;
      if (E == 0)
        C = f.indexOf(_[0]), v = f.substring(0, C).trim(), b = f.substring(C + 1).trim();
      else {
        let T = 0, p = 0;
        for (; T <= E; )
          C = f.indexOf(_[T], p), p = C + 1, T++;
        v = f.substring(0, C).trim(), b = f.substring(C + 1).trim();
      }
    }
    const z = v.split(".");
    if (z.length == 2 && z[1] == 0 && z[1].length != 2)
      throw new Error("invalid coordinates format");
    const L = b.split(".");
    if (L.length == 2 && L[1] == 0 && L[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(v) || /^\d+$/.test(b))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: f,
      verbatimLatitude: v,
      verbatimLongitude: b,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: d,
      closeEnough: an,
      toCoordinateFormat: sn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Te(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let l = 0; l < r; l++) {
    const d = e[l], o = e[l + r], m = t.test(d) && t.test(o), u = n.test(d) && n.test(o), f = d == o;
    if (!(d == null && o == null)) {
      if (d == null || o == null)
        return !1;
      if (m || u || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function Rt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function an(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Rt(this.decimalLatitude, Number(e[0])) && Rt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const ln = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
lt.to = ln;
const un = [
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
], cn = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, dn = [
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
], fn = [
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
function mn() {
  const i = [];
  return un.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...cn });
  }), [...i, ...dn, ...fn];
}
const gn = mn();
lt.formats = gn.map((i) => i.verbatimCoordinates);
const hn = lt;
function Ot(i, e, t) {
  const n = i.slice();
  return n[84] = e[t], n[86] = t, n;
}
function Dt(i) {
  let e, t;
  return e = new Xi({}), {
    c() {
      ce(e.$$.fragment);
    },
    m(n, r) {
      re(e, n, r), t = !0;
    },
    i(n) {
      t || (F(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      oe(e, n);
    }
  };
}
function Ut(i) {
  let e, t, n, r, l;
  return t = new $i({}), {
    c() {
      e = W("button"), ce(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), a(e, "class", "svelte-bz0zu3"), le(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(d, o) {
      B(d, e, o), re(t, e, null), n = !0, r || (l = V(
        e,
        "click",
        /*click_handler_2*/
        i[69]
      ), r = !0);
    },
    p(d, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      512) && a(
        e,
        "title",
        /*reverseButtonTitle*/
        d[9]
      ), (!n || o[0] & /*reverseActive*/
      1) && le(
        e,
        "active",
        /*reverseActive*/
        d[0]
      );
    },
    i(d) {
      n || (F(t.$$.fragment, d), n = !0);
    },
    o(d) {
      Q(t.$$.fragment, d), n = !1;
    },
    d(d) {
      d && D(e), oe(t), r = !1, l();
    }
  };
}
function bn(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, l, d, o = St(
    /*listFeatures*/
    i[14]
  );
  const m = (u) => (
    /*feature*/
    u[84].id + /*feature*/
    (u[84].address ? "," + /*feature*/
    u[84].address : "")
  );
  for (let u = 0; u < o.length; u += 1) {
    let f = Ot(i, o, u), v = m(f);
    n.set(v, t[u] = It(v, f));
  }
  return {
    c() {
      e = W("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      a(e, "class", "options svelte-bz0zu3");
    },
    m(u, f) {
      B(u, e, f);
      for (let v = 0; v < t.length; v += 1)
        t[v] && t[v].m(e, null);
      r = !0, l || (d = [
        V(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[73]
        ),
        V(
          e,
          "blur",
          /*blur_handler_1*/
          i[74]
        )
      ], l = !0);
    },
    p(u, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (o = St(
        /*listFeatures*/
        u[14]
      ), He(), t = Di(t, f, m, 1, u, o, n, e, Oi, It, null, Ot), Pe());
    },
    i(u) {
      if (!r) {
        for (let f = 0; f < o.length; f += 1)
          F(t[f]);
        r = !0;
      }
    },
    o(u) {
      for (let f = 0; f < t.length; f += 1)
        Q(t[f]);
      r = !1;
    },
    d(u) {
      u && D(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      l = !1, se(d);
    }
  };
}
function vn(i) {
  let e, t, n, r, l, d;
  return t = new qt({}), {
    c() {
      e = W("div"), ce(t.$$.fragment), n = X(), r = W("div"), l = ue(
        /*noResultsMessage*/
        i[7]
      ), a(r, "class", "svelte-bz0zu3"), a(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, m) {
      B(o, e, m), re(t, e, null), k(e, n), k(e, r), k(r, l), d = !0;
    },
    p(o, m) {
      (!d || m[0] & /*noResultsMessage*/
      128) && We(
        l,
        /*noResultsMessage*/
        o[7]
      );
    },
    i(o) {
      d || (F(t.$$.fragment, o), d = !0);
    },
    o(o) {
      Q(t.$$.fragment, o), d = !1;
    },
    d(o) {
      o && D(e), oe(t);
    }
  };
}
function Ln(i) {
  let e = "", t;
  return {
    c() {
      t = ue(e);
    },
    m(n, r) {
      B(n, t, r);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && D(t);
    }
  };
}
function _n(i) {
  let e, t, n, r, l, d, o, m, u, f, v;
  return t = new qt({}), m = new Zt({}), {
    c() {
      e = W("div"), ce(t.$$.fragment), n = X(), r = W("div"), l = ue(
        /*errorMessage*/
        i[6]
      ), d = X(), o = W("button"), ce(m.$$.fragment), a(r, "class", "svelte-bz0zu3"), a(o, "class", "svelte-bz0zu3"), a(e, "class", "error svelte-bz0zu3");
    },
    m(b, y) {
      B(b, e, y), re(t, e, null), k(e, n), k(e, r), k(r, l), k(e, d), k(e, o), re(m, o, null), u = !0, f || (v = V(
        o,
        "click",
        /*click_handler_3*/
        i[70]
      ), f = !0);
    },
    p(b, y) {
      (!u || y[0] & /*errorMessage*/
      64) && We(
        l,
        /*errorMessage*/
        b[6]
      );
    },
    i(b) {
      u || (F(t.$$.fragment, b), F(m.$$.fragment, b), u = !0);
    },
    o(b) {
      Q(t.$$.fragment, b), Q(m.$$.fragment, b), u = !1;
    },
    d(b) {
      b && D(e), oe(t), oe(m), f = !1, v();
    }
  };
}
function It(i, e) {
  let t, n, r;
  function l() {
    return (
      /*mouseenter_handler*/
      e[71](
        /*i*/
        e[86]
      )
    );
  }
  function d() {
    return (
      /*focus_handler_1*/
      e[72](
        /*feature*/
        e[84]
      )
    );
  }
  return n = new xi({
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
  }), n.$on("mouseenter", l), n.$on("focus", d), {
    key: i,
    first: null,
    c() {
      t = Si(), ce(n.$$.fragment), this.first = t;
    },
    m(o, m) {
      B(o, t, m), re(n, o, m), r = !0;
    },
    p(o, m) {
      e = o;
      const u = {};
      m[0] & /*listFeatures*/
      16384 && (u.feature = /*feature*/
      e[84]), m[0] & /*showPlaceType*/
      1024 && (u.showPlaceType = /*showPlaceType*/
      e[10]), m[0] & /*selectedItemIndex, listFeatures*/
      49152 && (u.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[86]), m[0] & /*iconsBaseUrl*/
      4096 && (u.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(u);
    },
    i(o) {
      r || (F(n.$$.fragment, o), r = !0);
    },
    o(o) {
      Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && D(t), oe(n, o);
    }
  };
}
function yn(i) {
  let e, t, n, r, l, d, o, m, u, f, v, b, y, _, z, L, E, C, T, p, H, R = !1;
  l = new tn({}), v = new Zt({});
  let c = (
    /*abortController*/
    i[19] && Dt()
  ), g = (
    /*enableReverse*/
    i[5] === "button" && Ut(i)
  );
  const M = (
    /*#slots*/
    i[61].default
  ), Z = _i(
    M,
    i,
    /*$$scope*/
    i[60],
    null
  ), Le = [_n, Ln, vn, bn], G = [];
  function Ne(h, U) {
    var ie, de;
    return (
      /*error*/
      h[18] ? 0 : (
        /*focusedDelayed*/
        h[16] ? (
          /*listFeatures*/
          ((ie = h[14]) == null ? void 0 : ie.length) === 0 ? 2 : (
            /*focusedDelayed*/
            h[16] && /*listFeatures*/
            ((de = h[14]) != null && de.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(L = Ne(i)) && (E = G[L] = Le[L](i)), {
    c() {
      e = X(), t = W("form"), n = W("div"), r = W("button"), ce(l.$$.fragment), d = X(), o = W("input"), m = X(), u = W("div"), f = W("button"), ce(v.$$.fragment), b = X(), c && c.c(), y = X(), g && g.c(), _ = X(), Z && Z.c(), z = X(), E && E.c(), a(r, "class", "search-button svelte-bz0zu3"), a(r, "type", "button"), a(
        o,
        "placeholder",
        /*placeholder*/
        i[8]
      ), a(
        o,
        "aria-label",
        /*placeholder*/
        i[8]
      ), a(o, "class", "svelte-bz0zu3"), a(f, "type", "button"), a(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), a(f, "class", "svelte-bz0zu3"), a(u, "class", "clear-button-container svelte-bz0zu3"), le(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(n, "class", "input-group svelte-bz0zu3"), a(t, "tabindex", "0"), a(t, "class", C = _t(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), le(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(h, U) {
      B(h, e, U), B(h, t, U), k(t, n), k(n, r), re(l, r, null), k(n, d), k(n, o), i[63](o), yt(
        o,
        /*searchValue*/
        i[1]
      ), k(n, m), k(n, u), k(u, f), re(v, f, null), k(u, b), c && c.m(u, null), k(n, y), g && g.m(n, null), k(n, _), Z && Z.m(n, null), k(t, z), ~L && G[L].m(t, null), T = !0, p || (H = [
        V(
          r,
          "click",
          /*click_handler*/
          i[62]
        ),
        V(
          o,
          "input",
          /*input_1_input_handler*/
          i[64]
        ),
        V(
          o,
          "focus",
          /*focus_handler*/
          i[65]
        ),
        V(
          o,
          "blur",
          /*blur_handler*/
          i[66]
        ),
        V(
          o,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        V(
          o,
          "input",
          /*input_handler*/
          i[67]
        ),
        V(
          f,
          "click",
          /*click_handler_1*/
          i[68]
        ),
        V(t, "submit", pi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], p = !0);
    },
    p(h, U) {
      (!T || U[0] & /*placeholder*/
      256) && a(
        o,
        "placeholder",
        /*placeholder*/
        h[8]
      ), (!T || U[0] & /*placeholder*/
      256) && a(
        o,
        "aria-label",
        /*placeholder*/
        h[8]
      ), U[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      h[1] && yt(
        o,
        /*searchValue*/
        h[1]
      ), (!T || U[0] & /*clearButtonTitle*/
      8) && a(
        f,
        "title",
        /*clearButtonTitle*/
        h[3]
      ), /*abortController*/
      h[19] ? c ? U[0] & /*abortController*/
      524288 && F(c, 1) : (c = Dt(), c.c(), F(c, 1), c.m(u, null)) : c && (He(), Q(c, 1, 1, () => {
        c = null;
      }), Pe()), (!T || U[0] & /*searchValue*/
      2) && le(
        u,
        "displayable",
        /*searchValue*/
        h[1] !== ""
      ), /*enableReverse*/
      h[5] === "button" ? g ? (g.p(h, U), U[0] & /*enableReverse*/
      32 && F(g, 1)) : (g = Ut(h), g.c(), F(g, 1), g.m(n, _)) : g && (He(), Q(g, 1, 1, () => {
        g = null;
      }), Pe()), Z && Z.p && (!T || U[1] & /*$$scope*/
      536870912) && wi(
        Z,
        M,
        h,
        /*$$scope*/
        h[60],
        T ? yi(
          M,
          /*$$scope*/
          h[60],
          U,
          null
        ) : Ei(
          /*$$scope*/
          h[60]
        ),
        null
      );
      let ie = L;
      L = Ne(h), L === ie ? ~L && G[L].p(h, U) : (E && (He(), Q(G[ie], 1, 1, () => {
        G[ie] = null;
      }), Pe()), ~L ? (E = G[L], E ? E.p(h, U) : (E = G[L] = Le[L](h), E.c()), F(E, 1), E.m(t, null)) : E = null), (!T || U[0] & /*className*/
      4 && C !== (C = _t(
        /*className*/
        h[2]
      ) + " svelte-bz0zu3")) && a(t, "class", C), (!T || U[0] & /*className, collapsed, searchValue*/
      22) && le(
        t,
        "can-collapse",
        /*collapsed*/
        h[4] && /*searchValue*/
        h[1] === ""
      );
    },
    i(h) {
      T || (F(R), F(l.$$.fragment, h), F(v.$$.fragment, h), F(c), F(g), F(Z, h), F(E), T = !0);
    },
    o(h) {
      Q(R), Q(l.$$.fragment, h), Q(v.$$.fragment, h), Q(c), Q(g), Q(Z, h), Q(E), T = !1;
    },
    d(h) {
      h && (D(e), D(t)), oe(l), i[63](null), oe(v), c && c.d(), g && g.d(), Z && Z.d(h), ~L && G[L].d(), p = !1, se(H);
    }
  };
}
function wn(i, e, t) {
  let n, r, { $$slots: l = {}, $$scope: d } = e;
  const o = {
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
  let { class: m = void 0 } = e, { apiKey: u } = e, { bbox: f = void 0 } = e, { clearButtonTitle: v = "clear" } = e, { clearOnBlur: b = !1 } = e, { collapsed: y = !1 } = e, { country: _ = void 0 } = e, { debounceSearch: z = 200 } = e, { enableReverse: L = "never" } = e, { errorMessage: E = "Something went wrong…" } = e, { filter: C = () => !0 } = e, { flyTo: T = !0 } = e, { fuzzyMatch: p = !0 } = e, { language: H = void 0 } = e, { limit: R = void 0 } = e, { mapController: c = void 0 } = e, { minLength: g = 2 } = e, { noResultsMessage: M = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: Z = "Search" } = e, { proximity: Le = [{ type: "server-geolocation" }] } = e, { reverseActive: G = L === "always" } = e, { reverseButtonTitle: Ne = "toggle reverse geocoding" } = e, { searchValue: h = "" } = e, { pickedResultStyle: U = "full-geometry" } = e, { showPlaceType: ie = "if-needed" } = e, { showResultsWhileTyping: de = !0 } = e, { selectFirst: _e = !0 } = e, { flyToSelected: Ze = !1 } = e, { markerOnSelected: Re = !0 } = e, { types: fe = void 0 } = e, { exhaustiveReverseGeocoding: qe = !1 } = e, { excludeTypes: Oe = !1 } = e, { zoom: De = o } = e, { apiUrl: Ge = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Qe = {} } = e, { iconsBaseUrl: ct = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.0.1/icons/" } = e, { adjustUrlQuery: Ke = () => {
  } } = e;
  function Qt() {
    Y.focus();
  }
  function Kt() {
    Y.blur();
  }
  function dt(s, I = !0, q = !1) {
    t(1, h = s), I ? (t(15, O = -1), mt()) : (Xe(!q, q), setTimeout(() => {
      Y.focus(), Y.select();
    }));
  }
  function Vt() {
    t(14, N = void 0), t(56, w = void 0), t(15, O = -1);
  }
  function xt() {
    t(55, P = []), t(56, w = void 0);
  }
  let ye = !1, N, P, w, ft = "", Y, O = -1, $, Ue = [], me, we, Ie, Ve;
  const Jt = /* @__PURE__ */ new Set(), ae = Ti();
  Mi(() => {
    c && (c.setEventHandler(void 0), c.indicateReverse(!1), c.setSelectedMarker(-1), c.setFeatures(void 0, void 0, !1));
  });
  function mt(s) {
    if (we && (clearTimeout(we), we = void 0), O > -1 && N)
      t(56, w = N[O]), t(1, h = w.place_type[0] === "reverse" ? w.place_name : w.place_name.replace(/,.*/, "")), t(18, $ = void 0), t(55, P = void 0), t(15, O = -1);
    else if (h) {
      const I = s || !xe(h);
      Je(h, { exact: !0 }).then(() => {
        t(55, P = N), t(56, w = void 0), I && Xt();
      }).catch((q) => t(18, $ = q));
    }
  }
  function xe(s) {
    try {
      return hn(s, 6);
    } catch {
      return !1;
    }
  }
  async function Je(s, { byId: I = !1, exact: q = !1 } = {}) {
    t(18, $ = void 0), me == null || me.abort();
    const x = new AbortController();
    t(19, me = x);
    try {
      const S = xe(s), j = new URLSearchParams();
      if (H !== void 0 && j.set("language", Array.isArray(H) ? H.join(",") : H ?? ""), fe && j.set("types", fe.join(",")), Oe && j.set("excludeTypes", String(Oe)), f && j.set("bbox", f.map((Ae) => Ae.toFixed(6)).join(",")), _ && j.set("country", Array.isArray(_) ? _.join(",") : _), !I && !S) {
        const Ae = await rn(c, Le, x);
        Ae && j.set("proximity", Ae), (q || !de) && j.set("autocomplete", "false"), j.set("fuzzyMatch", String(p));
      }
      R !== void 0 && (qe || !S || (fe == null ? void 0 : fe.length) === 1) && j.set("limit", String(R)), j.set("key", u), Ke(j);
      const ee = Ge + "/" + encodeURIComponent(S ? S.decimalLongitude + "," + S.decimalLatitude : s) + ".json?" + j.toString();
      if (ee === ft) {
        I ? (t(14, N = void 0), t(56, w = Ue[0])) : t(14, N = Ue);
        return;
      }
      ft = ee;
      const $e = await fetch(ee, { signal: x.signal, ...Qe });
      if (!$e.ok)
        throw new Error(await $e.text());
      const et = await $e.json();
      ae("response", { url: ee, featureCollection: et }), I ? (t(14, N = void 0), t(56, w = et.features[0]), Ue = [w]) : (t(14, N = et.features.filter(C)), S && N.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + S.decimalLongitude + "_" + S.decimalLatitude,
        text: S.decimalLatitude + ", " + S.decimalLongitude,
        place_name: S.decimalLatitude + ", " + S.decimalLongitude,
        place_type: ["reverse"],
        center: [S.decimalLongitude, S.decimalLatitude],
        bbox: [
          S.decimalLongitude,
          S.decimalLatitude,
          S.decimalLongitude,
          S.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [S.decimalLongitude, S.decimalLatitude]
        }
      }), Ue = N, S && Y.focus());
    } catch (S) {
      if (S && typeof S == "object" && "name" in S && S.name === "AbortError")
        return;
      throw S;
    } finally {
      x === me && t(19, me = void 0);
    }
  }
  function Xt() {
    var x;
    if (!(P != null && P.length) || !T)
      return;
    const s = [180, 90, -180, -90], I = !P.some((S) => !S.matching_text);
    let q;
    for (const S of P) {
      const j = ke(S);
      if (q = q === void 0 ? j : j === void 0 ? q : Math.max(q, j), I || !S.matching_text)
        for (const ee of [0, 1, 2, 3])
          s[ee] = Math[ee < 2 ? "min" : "max"](s[ee], ((x = S.bbox) == null ? void 0 : x[ee]) ?? S.center[ee % 2]);
    }
    c && P.length > 0 && (w && s[0] === s[2] && s[1] === s[3] ? c.flyTo(w.center, ke(w)) : c.fitBounds(Nt(s), 50, q));
  }
  function ke(s) {
    var q;
    if (!s.bbox || s.bbox[0] !== s.bbox[2] && s.bbox[1] !== s.bbox[3])
      return;
    const I = s.id.replace(/\..*/, "");
    return (Array.isArray((q = s.properties) == null ? void 0 : q.categories) ? s.properties.categories.reduce(
      (x, S) => {
        const j = De[I + "." + S];
        return x === void 0 ? j : j === void 0 ? x : Math.max(x, j);
      },
      void 0
    ) : void 0) ?? De[I];
  }
  function Yt(s) {
    t(0, G = L === "always"), t(14, N = void 0), t(56, w = void 0), t(15, O = -1), dt(s[1].toFixed(6) + ", " + nn(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function $t(s) {
    if (!N)
      return;
    let I = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    I && (O === (_e ? 0 : -1) && I === -1 && t(15, O = N.length), t(15, O += I), O >= N.length && t(15, O = -1), O < 0 && _e && t(15, O = 0), s.preventDefault());
  }
  function Xe(s = !0, I = !1) {
    if (t(18, $ = void 0), de || I) {
      if (we && clearTimeout(we), h.length < g)
        return;
      const q = h;
      we = window.setTimeout(
        () => {
          Je(q).catch((x) => t(18, $ = x));
        },
        s ? z : 0
      );
    } else
      t(14, N = void 0), t(18, $ = void 0);
  }
  function Ye(s) {
    t(56, w = s), t(1, h = s.place_name), t(15, O = -1);
  }
  const ei = () => Y.focus();
  function ti(s) {
    ot[s ? "unshift" : "push"](() => {
      Y = s, t(17, Y);
    });
  }
  function ii() {
    h = this.value, t(1, h), t(13, ye), t(28, b);
  }
  const ni = () => t(13, ye = !0), ri = () => t(13, ye = !1), oi = () => Xe(), si = () => {
    t(1, h = ""), Y.focus();
  }, ai = () => t(0, G = !G), li = () => t(18, $ = void 0), ui = (s) => t(15, O = s), ci = (s) => Ye(s), di = () => {
    _e || t(15, O = -1);
  }, fi = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, m = s.class), "apiKey" in s && t(26, u = s.apiKey), "bbox" in s && t(27, f = s.bbox), "clearButtonTitle" in s && t(3, v = s.clearButtonTitle), "clearOnBlur" in s && t(28, b = s.clearOnBlur), "collapsed" in s && t(4, y = s.collapsed), "country" in s && t(29, _ = s.country), "debounceSearch" in s && t(30, z = s.debounceSearch), "enableReverse" in s && t(5, L = s.enableReverse), "errorMessage" in s && t(6, E = s.errorMessage), "filter" in s && t(31, C = s.filter), "flyTo" in s && t(32, T = s.flyTo), "fuzzyMatch" in s && t(33, p = s.fuzzyMatch), "language" in s && t(34, H = s.language), "limit" in s && t(35, R = s.limit), "mapController" in s && t(36, c = s.mapController), "minLength" in s && t(37, g = s.minLength), "noResultsMessage" in s && t(7, M = s.noResultsMessage), "placeholder" in s && t(8, Z = s.placeholder), "proximity" in s && t(38, Le = s.proximity), "reverseActive" in s && t(0, G = s.reverseActive), "reverseButtonTitle" in s && t(9, Ne = s.reverseButtonTitle), "searchValue" in s && t(1, h = s.searchValue), "pickedResultStyle" in s && t(39, U = s.pickedResultStyle), "showPlaceType" in s && t(10, ie = s.showPlaceType), "showResultsWhileTyping" in s && t(40, de = s.showResultsWhileTyping), "selectFirst" in s && t(11, _e = s.selectFirst), "flyToSelected" in s && t(41, Ze = s.flyToSelected), "markerOnSelected" in s && t(42, Re = s.markerOnSelected), "types" in s && t(43, fe = s.types), "exhaustiveReverseGeocoding" in s && t(44, qe = s.exhaustiveReverseGeocoding), "excludeTypes" in s && t(45, Oe = s.excludeTypes), "zoom" in s && t(46, De = s.zoom), "apiUrl" in s && t(47, Ge = s.apiUrl), "fetchParameters" in s && t(48, Qe = s.fetchParameters), "iconsBaseUrl" in s && t(12, ct = s.iconsBaseUrl), "adjustUrlQuery" in s && t(49, Ke = s.adjustUrlQuery), "$$scope" in s && t(60, d = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, G = L === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    268443648 && setTimeout(() => {
      t(16, Ie = ye), b && !ye && t(1, h = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    64 && h.length < g && (t(56, w = void 0), t(14, N = void 0), t(18, $ = void 0), t(55, P = N)), i.$$.dirty[1] & /*pickedResultStyle, picked*/
    33554688 && U !== "marker-only" && w && !w.address && w.geometry.type === "Point" && w.place_type[0] !== "reverse" && Je(w.id, { byId: !0 }).catch((s) => t(18, $ = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo*/
    100663330 && (c && w && w.id !== Ve && T && (!w.bbox || w.bbox[0] === w.bbox[2] && w.bbox[1] === w.bbox[3] ? c.flyTo(w.center, ke(w)) : c.fitBounds(Nt(w.bbox), 50, ke(w)), t(14, N = void 0), t(55, P = void 0), t(15, O = -1)), t(57, Ve = w == null ? void 0 : w.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && _e && N != null && N.length && t(15, O = 0), i.$$.dirty[0] & /*searchValue*/
    2 && t(15, O = -1), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    16777216 && P !== N && t(55, P = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    16777248 && c && c.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          G && Yt(s.coordinates);
          break;
        case "markerClick":
          {
            const I = N == null ? void 0 : N.find((q) => q.id === s.id);
            I && Ye(I);
          }
          break;
        case "markerMouseEnter":
          P && t(15, O = Ie ? (N == null ? void 0 : N.findIndex((I) => I.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          P && t(15, O = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(58, r = N == null ? void 0 : N[O]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected*/
    134218786 && c && r && T && Ze && c.flyTo(r.center, ke(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    256 && t(59, n = U === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController, showPolygonMarker*/
    268437536 && (Re || c == null || c.setFeatures(void 0, void 0, n)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected, showPolygonMarker*/
    419432480 && c && Re && !P && (c.setFeatures(r ? [r] : void 0, void 0, n), c.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked, showPolygonMarker*/
    318767136 && c && c.setFeatures(P, w, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    16777248 && P && c && c.setSelectedMarker(O), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    32 && c) {
      const s = xe(h);
      c.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    134217728 && ae("select", { feature: r }), i.$$.dirty[1] & /*picked*/
    33554432 && ae("pick", { feature: w }), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && ae("optionsvisibilitychange", {
      optionsVisible: Ie && !!N
    }), i.$$.dirty[0] & /*listFeatures*/
    16384 && ae("featureslisted", { features: N }), i.$$.dirty[1] & /*markedFeatures*/
    16777216 && ae("featuresmarked", { features: P }), i.$$.dirty[0] & /*reverseActive*/
    1 && ae("reversetoggle", { reverse: G }), i.$$.dirty[0] & /*searchValue*/
    2 && ae("querychange", { query: h }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    32 && c && c.indicateReverse(G);
  }, [
    G,
    h,
    m,
    v,
    y,
    L,
    E,
    M,
    Z,
    Ne,
    ie,
    _e,
    ct,
    ye,
    N,
    O,
    Ie,
    Y,
    $,
    me,
    Jt,
    mt,
    $t,
    Xe,
    Ye,
    o,
    u,
    f,
    b,
    _,
    z,
    C,
    T,
    p,
    H,
    R,
    c,
    g,
    Le,
    U,
    de,
    Ze,
    Re,
    fe,
    qe,
    Oe,
    De,
    Ge,
    Qe,
    Ke,
    Qt,
    Kt,
    dt,
    Vt,
    xt,
    P,
    w,
    Ve,
    r,
    n,
    d,
    l,
    ei,
    ti,
    ii,
    ni,
    ri,
    oi,
    si,
    ai,
    li,
    ui,
    ci,
    di,
    fi
  ];
}
let En = class extends ve {
  constructor(e) {
    super(), be(
      this,
      e,
      wn,
      yn,
      he,
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
        pickedResultStyle: 39,
        showPlaceType: 10,
        showResultsWhileTyping: 40,
        selectFirst: 11,
        flyToSelected: 41,
        markerOnSelected: 42,
        types: 43,
        exhaustiveReverseGeocoding: 44,
        excludeTypes: 45,
        zoom: 46,
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
const Sn = new FinalizationRegistry((i) => {
  i.$destroy();
});
var J, je, Gt;
const ut = class ut extends EventTarget {
  constructor({ target: t, ...n }) {
    super();
    nt(this, je);
    nt(this, J);
    ht(this, J, new En({
      target: t,
      props: n
    }));
    for (const r of [
      "select",
      "pick",
      "featureslisted",
      "featuresmarked",
      "response",
      "optionsvisibilitychange",
      "reversetoggle",
      "querychange"
    ])
      te(this, J).$on(r, (l) => {
        bt(this, je, Gt).call(this, r, l.detail);
      });
    te(this, J).$on("select", (r) => {
      const l = new CustomEvent(r.type, {
        detail: r.detail
      });
      this.dispatchEvent(l);
    }), Sn.register(this, te(this, J));
  }
  setOptions(t) {
    te(this, J).$set(t);
  }
  setQuery(t, n = !0) {
    var r;
    (r = te(this, J)) == null || r.setQuery(t, n);
  }
  clearMap() {
    var t;
    (t = te(this, J)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = te(this, J)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = te(this, J)) == null || t.focus();
  }
  blur() {
    var t;
    (t = te(this, J)) == null || t.blur();
  }
  addEventListener(t, n, r) {
    super.addEventListener(t, n, r);
  }
  removeEventListener(t, n, r) {
    super.removeEventListener(t, n, r);
  }
  dispatchEvent(t) {
    return super.dispatchEvent(t);
  }
};
J = new WeakMap(), je = new WeakSet(), Gt = function(t, n) {
  return vt(ut.prototype, this, "dispatchEvent").call(
    this,
    new CustomEvent(t, {
      detail: n
    })
  );
};
let At = ut;
export {
  At as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
