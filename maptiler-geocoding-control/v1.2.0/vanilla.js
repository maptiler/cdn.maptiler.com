var ii = Object.defineProperty;
var ri = (i, e, t) => e in i ? ii(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ye = (i, e, t) => (ri(i, typeof e != "symbol" ? e + "" : e, t), t), at = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
};
var ie = (i, e, t) => (at(i, e, "read from private field"), t ? t.call(i) : e.get(i)), lt = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, ct = (i, e, t, r) => (at(i, e, "write to private field"), r ? r.call(i, t) : e.set(i, t), t);
function B() {
}
function ni(i, e) {
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
function ut() {
  return /* @__PURE__ */ Object.create(null);
}
function oe(i) {
  i.forEach(Tt);
}
function Wt(i) {
  return typeof i == "function";
}
function ge(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ae;
function Q(i, e) {
  return i === e ? !0 : (Ae || (Ae = document.createElement("a")), Ae.href = e, i === Ae.href);
}
function oi(i) {
  return Object.keys(i).length === 0;
}
function si(i, e, t, r) {
  if (i) {
    const n = Mt(i, e, t, r);
    return i[0](n);
  }
}
function Mt(i, e, t, r) {
  return i[1] && r ? ni(t.ctx.slice(), i[1](r(e))) : t.ctx;
}
function ai(i, e, t, r) {
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
function li(i, e, t, r, n, l) {
  if (n) {
    const o = Mt(e, t, r, l);
    i.p(o, n);
  }
}
function ci(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function dt(i) {
  return i ?? "";
}
function T(i, e) {
  i.appendChild(e);
}
function z(i, e, t) {
  i.insertBefore(e, t || null);
}
function D(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function R(i) {
  return document.createElement(i);
}
function le(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ce(i) {
  return document.createTextNode(i);
}
function K() {
  return ce(" ");
}
function ui() {
  return ce("");
}
function q(i, e, t, r) {
  return i.addEventListener(e, t, r), () => i.removeEventListener(e, t, r);
}
function di(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function c(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function fi(i) {
  return Array.from(i.childNodes);
}
function Te(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ft(i, e) {
  i.value = e ?? "";
}
function ae(i, e, t) {
  i.classList.toggle(e, !!t);
}
function mi(i, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: r });
}
let We;
function Ce(i) {
  We = i;
}
function It() {
  if (!We)
    throw new Error("Function called outside component initialization");
  return We;
}
function gi(i) {
  It().$$.on_destroy.push(i);
}
function hi() {
  const i = It();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const n = i.$$.callbacks[e];
    if (n) {
      const l = mi(
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
function mt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const Se = [], $e = [];
let pe = [];
const gt = [], bi = /* @__PURE__ */ Promise.resolve();
let et = !1;
function vi() {
  et || (et = !0, bi.then(Ot));
}
function tt(i) {
  pe.push(i);
}
const xe = /* @__PURE__ */ new Set();
let Ee = 0;
function Ot() {
  if (Ee !== 0)
    return;
  const i = We;
  do {
    try {
      for (; Ee < Se.length; ) {
        const e = Se[Ee];
        Ee++, Ce(e), _i(e.$$);
      }
    } catch (e) {
      throw Se.length = 0, Ee = 0, e;
    }
    for (Ce(null), Se.length = 0, Ee = 0; $e.length; )
      $e.pop()();
    for (let e = 0; e < pe.length; e += 1) {
      const t = pe[e];
      xe.has(t) || (xe.add(t), t());
    }
    pe.length = 0;
  } while (Se.length);
  for (; gt.length; )
    gt.pop()();
  et = !1, xe.clear(), Ce(i);
}
function _i(i) {
  if (i.fragment !== null) {
    i.update(), oe(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(tt);
  }
}
function Li(i) {
  const e = [], t = [];
  pe.forEach((r) => i.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), pe = e;
}
const ze = /* @__PURE__ */ new Set();
let me;
function Fe() {
  me = {
    r: 0,
    c: [],
    p: me
    // parent group
  };
}
function Pe() {
  me.r || oe(me.c), me = me.p;
}
function j(i, e) {
  i && i.i && (ze.delete(i), i.i(e));
}
function G(i, e, t, r) {
  if (i && i.o) {
    if (ze.has(i))
      return;
    ze.add(i), me.c.push(() => {
      ze.delete(i), r && (t && i.d(1), r());
    }), i.o(e);
  } else
    r && r();
}
function ht(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function yi(i, e) {
  G(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function wi(i, e, t, r, n, l, o, a, f, u, d, b) {
  let h = i.length, p = l.length, M = h;
  const F = {};
  for (; M--; )
    F[i[M].key] = M;
  const y = [], w = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), I = [];
  for (M = p; M--; ) {
    const v = b(n, l, M), k = t(v);
    let m = o.get(k);
    m ? r && I.push(() => m.p(v, e)) : (m = u(k, v), m.c()), w.set(k, y[M] = m), k in F && P.set(k, Math.abs(M - F[k]));
  }
  const E = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  function O(v) {
    j(v, 1), v.m(a, d), o.set(v.key, v), d = v.first, p--;
  }
  for (; h && p; ) {
    const v = y[p - 1], k = i[h - 1], m = v.key, L = k.key;
    v === k ? (d = v.first, h--, p--) : w.has(L) ? !o.has(m) || E.has(m) ? O(v) : g.has(L) ? h-- : P.get(m) > P.get(L) ? (g.add(m), O(v)) : (E.add(L), h--) : (f(k, o), h--);
  }
  for (; h--; ) {
    const v = i[h];
    w.has(v.key) || f(v, o);
  }
  for (; p; )
    O(y[p - 1]);
  return oe(I), y;
}
function ue(i) {
  i && i.c();
}
function re(i, e, t) {
  const { fragment: r, after_update: n } = i.$$;
  r && r.m(e, t), tt(() => {
    const l = i.$$.on_mount.map(Tt).filter(Wt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : oe(l), i.$$.on_mount = [];
  }), n.forEach(tt);
}
function ne(i, e) {
  const t = i.$$;
  t.fragment !== null && (Li(t.after_update), oe(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ei(i, e) {
  i.$$.dirty[0] === -1 && (Se.push(i), vi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function he(i, e, t, r, n, l, o = null, a = [-1]) {
  const f = We;
  Ce(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: B,
    not_equal: n,
    bound: ut(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: ut(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  o && o(u.root);
  let d = !1;
  if (u.ctx = t ? t(i, e.props || {}, (b, h, ...p) => {
    const M = p.length ? p[0] : h;
    return u.ctx && n(u.ctx[b], u.ctx[b] = M) && (!u.skip_bound && u.bound[b] && u.bound[b](M), d && Ei(i, b)), h;
  }) : [], u.update(), d = !0, oe(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = fi(e.target);
      u.fragment && u.fragment.l(b), b.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && j(i.$$.fragment), re(i, e.target, e.anchor), Ot();
  }
  Ce(f);
}
class be {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ye(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ye(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ne(this, 1), this.$destroy = B;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Wt(t))
      return B;
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
    this.$$set && !oi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Si = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Si);
function pi(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), c(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), c(e, "viewBox", "0 0 14 14"), c(e, "width", "13"), c(e, "height", "13"), c(e, "class", "svelte-en2qvf");
    },
    m(r, n) {
      z(r, e, n), T(e, t);
    },
    p: B,
    i: B,
    o: B,
    d(r) {
      r && D(e);
    }
  };
}
class Rt extends be {
  constructor(e) {
    super(), he(this, e, null, pi, ge, {});
  }
}
function ki(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), c(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), c(e, "viewBox", "0 0 30 30"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "svelte-d2loi5");
    },
    m(r, n) {
      z(r, e, n), T(e, t);
    },
    p: B,
    i: B,
    o: B,
    d(r) {
      r && D(e);
    }
  };
}
class Ut extends be {
  constructor(e) {
    super(), he(this, e, null, ki, ge, {});
  }
}
function Ni(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n);
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
      r && D(e);
    }
  };
}
function Ci(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n);
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
      r && D(e);
    }
  };
}
function Ti(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n);
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
      r && D(e);
    }
  };
}
function Wi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n);
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
      r && D(e);
    }
  };
}
function Mi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n);
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
      r && D(e);
    }
  };
}
function Ii(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n);
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
      r && D(e);
    }
  };
}
function Oi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n);
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
      r && D(e);
    }
  };
}
function Ri(i) {
  let e, t, r, n;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*imageUrl*/
      i[5]) || c(e, "src", t), c(
        e,
        "alt",
        /*category*/
        i[4]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(l, o) {
      z(l, e, o), r || (n = q(
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
      l && D(e), r = !1, n();
    }
  };
}
function bt(i) {
  let e, t;
  return {
    c() {
      e = R("span"), t = ce(
        /*placeType*/
        i[6]
      ), c(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, n) {
      z(r, e, n), T(e, t);
    },
    p(r, n) {
      n & /*placeType*/
      64 && Te(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && D(e);
    }
  };
}
function Ui(i) {
  var v, k;
  let e, t, r, n, l, o, a, f, u = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), d, b, h = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] && !/*feature*/
    i[0].address && /*feature*/
    ((v = i[0].properties) == null ? void 0 : v.kind) !== "road" && /*feature*/
    ((k = i[0].properties) == null ? void 0 : k.kind) !== "road_relation" && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), p, M, F = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), y, w, P;
  function I(m, L) {
    var Y, W;
    return L & /*feature*/
    1 && (t = null), L & /*feature*/
    1 && (r = null), L & /*feature*/
    1 && (n = null), /*imageUrl*/
    m[5] ? Ri : (
      /*feature*/
      m[0].address ? Oi : (
        /*feature*/
        ((Y = m[0].properties) == null ? void 0 : Y.kind) === "road" || /*feature*/
        ((W = m[0].properties) == null ? void 0 : W.kind) === "road_relation" ? Ii : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("address.")), t ? Mi : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? Wi : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("poi.")), n ? Ti : (
          /*isReverse*/
          m[7] ? Ci : Ni
        ))))
      )
    );
  }
  let E = I(i, -1), g = E(i), O = h && bt(i);
  return {
    c() {
      e = R("li"), g.c(), l = K(), o = R("span"), a = R("span"), f = R("span"), d = ce(u), b = K(), O && O.c(), p = K(), M = R("span"), y = ce(F), c(f, "class", "primary svelte-ltkwvy"), c(a, "class", "svelte-ltkwvy"), c(M, "class", "line2 svelte-ltkwvy"), c(o, "class", "texts svelte-ltkwvy"), c(e, "tabindex", "0"), c(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), c(e, "class", "svelte-ltkwvy"), ae(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(m, L) {
      z(m, e, L), g.m(e, null), T(e, l), T(e, o), T(o, a), T(a, f), T(f, d), T(a, b), O && O.m(a, null), T(o, p), T(o, M), T(M, y), w || (P = [
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
      var Y, W;
      E === (E = I(m, L)) && g ? g.p(m, L) : (g.d(1), g = E(m), g && (g.c(), g.m(e, l))), L & /*feature*/
      1 && u !== (u = /*isReverse*/
      (m[7] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Te(d, u), L & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] && !/*feature*/
      m[0].address && /*feature*/
      ((Y = m[0].properties) == null ? void 0 : Y.kind) !== "road" && /*feature*/
      ((W = m[0].properties) == null ? void 0 : W.kind) !== "road_relation" && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[7]), h ? O ? O.p(m, L) : (O = bt(m), O.c(), O.m(a, null)) : O && (O.d(1), O = null), L & /*feature*/
      1 && F !== (F = /*isReverse*/
      (m[7] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Te(y, F), L & /*selected*/
      2 && c(
        e,
        "data-selected",
        /*selected*/
        m[1]
      ), L & /*selected*/
      2 && ae(
        e,
        "selected",
        /*selected*/
        m[1]
      );
    },
    i: B,
    o: B,
    d(m) {
      m && D(e), g.d(), O && O.d(), w = !1, oe(P);
    }
  };
}
function Di(i, e, t) {
  var I;
  let r, n, { feature: l } = e, { selected: o = !1 } = e, { showPlaceType: a } = e, { missingIconsCache: f } = e, { iconsBaseUrl: u } = e;
  const d = (I = l.properties) == null ? void 0 : I.categories;
  let b, h, p = 0, M = l.place_type[0] === "reverse";
  function F(E) {
    h && f.add(h), t(10, p++, p);
  }
  function y(E) {
    mt.call(this, i, E);
  }
  function w(E) {
    mt.call(this, i, E);
  }
  const P = (E) => F(E.currentTarget);
  return i.$$set = (E) => {
    "feature" in E && t(0, l = E.feature), "selected" in E && t(1, o = E.selected), "showPlaceType" in E && t(2, a = E.showPlaceType), "missingIconsCache" in E && t(9, f = E.missingIconsCache), "iconsBaseUrl" in E && t(3, u = E.iconsBaseUrl);
  }, i.$$.update = () => {
    var E, g, O, v;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, r--, r), t(4, b = d == null ? void 0 : d[r]), t(5, h = b ? u + b.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!h || f.has(h)));
    i.$$.dirty & /*feature*/
    1 && t(6, n = l.id.startsWith("poi.") ? (g = (E = l.properties) == null ? void 0 : E.categories) == null ? void 0 : g.join(", ") : ((v = (O = l.properties) == null ? void 0 : O.place_type_name) == null ? void 0 : v[0]) ?? l.place_type[0]);
  }, t(11, r = (d == null ? void 0 : d.length) ?? 0), [
    l,
    o,
    a,
    u,
    b,
    h,
    n,
    M,
    F,
    f,
    p,
    r,
    y,
    w,
    P
  ];
}
class Ai extends be {
  constructor(e) {
    super(), he(this, e, Di, Ui, ge, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Bi(i) {
  let e;
  return {
    c() {
      e = R("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', c(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      z(t, e, r);
    },
    p: B,
    i: B,
    o: B,
    d(t) {
      t && D(e);
    }
  };
}
class zi extends be {
  constructor(e) {
    super(), he(this, e, null, Bi, ge, {});
  }
}
function Fi(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), c(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), c(e, "viewBox", "0 0 60.006 21.412"), c(e, "width", "14"), c(e, "height", "20"), c(e, "class", "svelte-en2qvf");
    },
    m(r, n) {
      z(r, e, n), T(e, t);
    },
    p: B,
    i: B,
    o: B,
    d(r) {
      r && D(e);
    }
  };
}
class Pi extends be {
  constructor(e) {
    super(), he(this, e, null, Fi, ge, {});
  }
}
function ji(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), c(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), c(e, "width", "14"), c(e, "height", "14"), c(e, "viewBox", "0 0 15 15"), c(e, "class", "svelte-en2qvf");
    },
    m(r, n) {
      z(r, e, n), T(e, t);
    },
    p: B,
    i: B,
    o: B,
    d(r) {
      r && D(e);
    }
  };
}
class Hi extends be {
  constructor(e) {
    super(), he(this, e, null, ji, ge, {});
  }
}
function Zi(i, e, t) {
  const r = e[1], n = e[0], l = r - n;
  return i === r && t ? i : ((i - n) % l + l) % l + n;
}
function vt(i) {
  const e = [...i];
  return e[2] < e[0] && (e[2] += 360), e;
}
let Ne;
async function Gi(i, e, t) {
  const r = i == null ? void 0 : i.getCenterAndZoom();
  for (const n of e ?? [])
    if (!(r && (n.minZoom != null && n.minZoom > r[0] || n.maxZoom != null && n.maxZoom < r[0]))) {
      if (n.type === "fixed")
        return n.coordinates.join(",");
      e:
        if (n.type === "client-geolocation") {
          if (Ne && n.cachedLocationExpiry && Ne.time + n.cachedLocationExpiry > Date.now()) {
            if (!Ne.coords)
              break e;
            return Ne.coords;
          }
          let l;
          try {
            return l = await new Promise((o, a) => {
              t.signal.addEventListener("abort", () => {
                a(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (f) => {
                  o(
                    [f.coords.longitude, f.coords.latitude].map((u) => u.toFixed(6)).join(",")
                  );
                },
                (f) => {
                  a(f);
                },
                n
              );
            }), l;
          } catch {
          } finally {
            n.cachedLocationExpiry && (Ne = {
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
const _t = /(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?/i, Lt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?/i, yt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?/i, wt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?/i;
function Qi(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    if (i == "DD")
      return this.decimalCoordinates;
    const e = this.decimalCoordinates.split(",").map((o) => Number(o.trim()));
    let t = Et(e[0], i), r = Et(e[1], i);
    t.endsWith('.0"') && r.endsWith('.0"') && (t = t.replace(/\.0"$/, '"'), r = r.replace(/\.0"$/, '"'));
    const n = e[0] >= 0 ? " N" : " S", l = e[1] >= 0 ? " E" : " W";
    return `${t + n}, ${r + l}`;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Et(i, e) {
  const t = Math.abs(i), r = Math.floor(t), n = (t - r) * 60;
  if (e == "DM") {
    let a = qi(n, 3).toFixed(3).padStart(6, "0");
    return `${r}° ${a}'`;
  }
  let l = Math.floor(n), o = ((n - l) * 60).toFixed(1).padStart(4, "0");
  return l = l.toString().padStart(2, "0"), `${r}° ${l}' ${o}"`;
}
function qi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function it(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, r = null, n = "", l = "", o = [], a = !1;
  if (_t.test(i))
    if (o = _t.exec(i), a = Be(o), a) {
      if (t = o[2], r = o[6], t.includes(",") && (t = t.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      o[1] ? (n = o[1], l = o[5]) : o[4] && (n = o[4], l = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Lt.test(i))
    if (o = Lt.exec(i), a = Be(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60), o[6] && (t += o[6].replace(",", ".") / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[9])), o[11] && (r += o[11] / 60), o[13] && (r += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (r = -1 * r), o[1] ? (n = o[1], l = o[8]) : o[7] && (n = o[7], l = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (yt.test(i))
    if (o = yt.exec(i), a = Be(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60), o[6] && (t += o[6] / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[10])), o[12] && (r += o[12] / 60), o[14] && (r += o[14] / 3600), parseInt(o[10]) < 0 && (r = -1 * r), o[1] ? (n = o[1], l = o[9]) : o[8] && (n = o[8], l = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (wt.test(i))
    if (o = wt.exec(i), a = Be(o), a)
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
    let f = /S|SOUTH/i;
    f.test(n) && t > 0 && (t = -1 * t), f = /W|WEST/i, f.test(l) && r > 0 && (r = -1 * r);
    const u = o[0].trim();
    let d, b;
    const h = /[,/;\u0020]/g, p = u.match(h);
    if (p == null) {
      const y = Math.floor(i.length / 2);
      d = u.substring(0, y).trim(), b = u.substring(y).trim();
    } else {
      let y;
      p.length % 2 == 1 ? y = Math.floor(p.length / 2) : y = p.length / 2 - 1;
      let w = 0;
      if (y == 0)
        w = u.indexOf(p[0]), d = u.substring(0, w).trim(), b = u.substring(w + 1).trim();
      else {
        let P = 0, I = 0;
        for (; P <= y; )
          w = u.indexOf(p[P], I), I = w + 1, P++;
        d = u.substring(0, w).trim(), b = u.substring(w + 1).trim();
      }
    }
    const M = d.split(".");
    if (M.length == 2 && M[1] == 0 && M[1].length != 2)
      throw new Error("invalid coordinates format");
    const F = b.split(".");
    if (F.length == 2 && F[1] == 0 && F[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(d) || /^\d+$/.test(b))
      throw new Error("degree only coordinate/s provided");
    return isNaN(t) && t.includes(",") && (t = t.replace(",", ".")), t = Number(Number(t).toFixed(e)), isNaN(r) && r.includes(",") && (r = r.replace(",", ".")), r = Number(Number(r).toFixed(e)), Object.freeze({
      verbatimCoordinates: u,
      verbatimLatitude: d,
      verbatimLongitude: b,
      decimalLatitude: t,
      decimalLongitude: r,
      decimalCoordinates: `${t},${r}`,
      closeEnough: Vi,
      toCoordinateFormat: Qi
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
    const o = e[l], a = e[l + n], f = t.test(o) && t.test(a), u = r.test(o) && r.test(a), d = o == a;
    if (!(o == null && a == null)) {
      if (o == null || a == null)
        return !1;
      if (f || u || d)
        continue;
      return !1;
    }
  }
  return !0;
}
function St(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Vi(i) {
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return St(this.decimalLatitude, Number(e[0])) && St(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Ki = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
it.to = Ki;
const Ji = [
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
], Xi = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Yi = [
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
], xi = [
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
function $i() {
  const i = [];
  return Ji.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Xi });
  }), [...i, ...Yi, ...xi];
}
const er = $i();
it.formats = er.map((i) => i.verbatimCoordinates);
const tr = it;
function pt(i, e, t) {
  const r = i.slice();
  return r[81] = e[t], r[83] = t, r;
}
function kt(i) {
  let e, t;
  return e = new zi({}), {
    c() {
      ue(e.$$.fragment);
    },
    m(r, n) {
      re(e, r, n), t = !0;
    },
    i(r) {
      t || (j(e.$$.fragment, r), t = !0);
    },
    o(r) {
      G(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ne(e, r);
    }
  };
}
function Nt(i) {
  let e, t, r, n, l;
  return t = new Pi({}), {
    c() {
      e = R("button"), ue(t.$$.fragment), c(e, "type", "button"), c(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), c(e, "class", "svelte-1r7dvt7"), ae(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(o, a) {
      z(o, e, a), re(t, e, null), r = !0, n || (l = q(
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
      1) && ae(
        e,
        "active",
        /*reverseActive*/
        o[0]
      );
    },
    i(o) {
      r || (j(t.$$.fragment, o), r = !0);
    },
    o(o) {
      G(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && D(e), ne(t), n = !1, l();
    }
  };
}
function ir(i) {
  let e, t = [], r = /* @__PURE__ */ new Map(), n, l, o, a = ht(
    /*listFeatures*/
    i[14]
  );
  const f = (u) => (
    /*feature*/
    u[81].id + /*feature*/
    (u[81].address ? "," + /*feature*/
    u[81].address : "")
  );
  for (let u = 0; u < a.length; u += 1) {
    let d = pt(i, a, u), b = f(d);
    r.set(b, t[u] = Ct(b, d));
  }
  return {
    c() {
      e = R("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      c(e, "class", "svelte-1r7dvt7");
    },
    m(u, d) {
      z(u, e, d);
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
    p(u, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (a = ht(
        /*listFeatures*/
        u[14]
      ), Fe(), t = wi(t, d, f, 1, u, a, r, e, yi, Ct, null, pt), Pe());
    },
    i(u) {
      if (!n) {
        for (let d = 0; d < a.length; d += 1)
          j(t[d]);
        n = !0;
      }
    },
    o(u) {
      for (let d = 0; d < t.length; d += 1)
        G(t[d]);
      n = !1;
    },
    d(u) {
      u && D(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      l = !1, oe(o);
    }
  };
}
function rr(i) {
  let e, t, r, n, l, o;
  return t = new Ut({}), {
    c() {
      e = R("div"), ue(t.$$.fragment), r = K(), n = R("div"), l = ce(
        /*noResultsMessage*/
        i[7]
      ), c(n, "class", "svelte-1r7dvt7"), c(e, "class", "no-results svelte-1r7dvt7");
    },
    m(a, f) {
      z(a, e, f), re(t, e, null), T(e, r), T(e, n), T(n, l), o = !0;
    },
    p(a, f) {
      (!o || f[0] & /*noResultsMessage*/
      128) && Te(
        l,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      o || (j(t.$$.fragment, a), o = !0);
    },
    o(a) {
      G(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && D(e), ne(t);
    }
  };
}
function nr(i) {
  let e = "", t;
  return {
    c() {
      t = ce(e);
    },
    m(r, n) {
      z(r, t, n);
    },
    p: B,
    i: B,
    o: B,
    d(r) {
      r && D(t);
    }
  };
}
function or(i) {
  let e, t, r, n, l, o, a, f, u, d, b;
  return t = new Ut({}), f = new Rt({}), {
    c() {
      e = R("div"), ue(t.$$.fragment), r = K(), n = R("div"), l = ce(
        /*errorMessage*/
        i[6]
      ), o = K(), a = R("button"), ue(f.$$.fragment), c(n, "class", "svelte-1r7dvt7"), c(a, "class", "svelte-1r7dvt7"), c(e, "class", "error svelte-1r7dvt7");
    },
    m(h, p) {
      z(h, e, p), re(t, e, null), T(e, r), T(e, n), T(n, l), T(e, o), T(e, a), re(f, a, null), u = !0, d || (b = q(
        a,
        "click",
        /*click_handler_3*/
        i[68]
      ), d = !0);
    },
    p(h, p) {
      (!u || p[0] & /*errorMessage*/
      64) && Te(
        l,
        /*errorMessage*/
        h[6]
      );
    },
    i(h) {
      u || (j(t.$$.fragment, h), j(f.$$.fragment, h), u = !0);
    },
    o(h) {
      G(t.$$.fragment, h), G(f.$$.fragment, h), u = !1;
    },
    d(h) {
      h && D(e), ne(t), ne(f), d = !1, b();
    }
  };
}
function Ct(i, e) {
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
  return r = new Ai({
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
      t = ui(), ue(r.$$.fragment), this.first = t;
    },
    m(a, f) {
      z(a, t, f), re(r, a, f), n = !0;
    },
    p(a, f) {
      e = a;
      const u = {};
      f[0] & /*listFeatures*/
      16384 && (u.feature = /*feature*/
      e[81]), f[0] & /*showPlaceType*/
      1024 && (u.showPlaceType = /*showPlaceType*/
      e[10]), f[0] & /*selectedItemIndex, listFeatures*/
      49152 && (u.selected = /*selectedItemIndex*/
      e[15] === /*i*/
      e[83]), f[0] & /*iconsBaseUrl*/
      4096 && (u.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), r.$set(u);
    },
    i(a) {
      n || (j(r.$$.fragment, a), n = !0);
    },
    o(a) {
      G(r.$$.fragment, a), n = !1;
    },
    d(a) {
      a && D(t), ne(r, a);
    }
  };
}
function sr(i) {
  let e, t, r, n, l, o, a, f, u, d, b, h, p, M, F, y, w, P, I, E, g, O = !1;
  l = new Hi({}), b = new Rt({});
  let v = (
    /*abortController*/
    i[19] && kt()
  ), k = (
    /*enableReverse*/
    i[5] === !0 && Nt(i)
  );
  const m = (
    /*#slots*/
    i[59].default
  ), L = si(
    m,
    i,
    /*$$scope*/
    i[58],
    null
  ), Y = [or, nr, rr, ir], W = [];
  function ve(_, A) {
    var V, _e;
    return (
      /*error*/
      _[18] ? 0 : (
        /*focusedDelayed*/
        _[16] ? (
          /*listFeatures*/
          ((V = _[14]) == null ? void 0 : V.length) === 0 ? 2 : (
            /*focusedDelayed*/
            _[16] && /*listFeatures*/
            ((_e = _[14]) != null && _e.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(y = ve(i)) && (w = W[y] = Y[y](i)), {
    c() {
      e = K(), t = R("form"), r = R("div"), n = R("button"), ue(l.$$.fragment), o = K(), a = R("input"), f = K(), u = R("div"), d = R("button"), ue(b.$$.fragment), h = K(), v && v.c(), p = K(), k && k.c(), M = K(), L && L.c(), F = K(), w && w.c(), c(n, "class", "search-button svelte-1r7dvt7"), c(n, "type", "button"), c(
        a,
        "placeholder",
        /*placeholder*/
        i[8]
      ), c(
        a,
        "aria-label",
        /*placeholder*/
        i[8]
      ), c(a, "class", "svelte-1r7dvt7"), c(d, "type", "button"), c(
        d,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), c(d, "class", "svelte-1r7dvt7"), c(u, "class", "clear-button-container svelte-1r7dvt7"), ae(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), c(r, "class", "input-group svelte-1r7dvt7"), c(t, "tabindex", "0"), c(t, "class", P = dt(
        /*className*/
        i[2]
      ) + " svelte-1r7dvt7"), ae(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(_, A) {
      z(_, e, A), z(_, t, A), T(t, r), T(r, n), re(l, n, null), T(r, o), T(r, a), i[61](a), ft(
        a,
        /*searchValue*/
        i[1]
      ), T(r, f), T(r, u), T(u, d), re(b, d, null), T(u, h), v && v.m(u, null), T(r, p), k && k.m(r, null), T(r, M), L && L.m(r, null), T(t, F), ~y && W[y].m(t, null), I = !0, E || (g = [
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
          d,
          "click",
          /*click_handler_1*/
          i[66]
        ),
        q(t, "submit", di(
          /*handleOnSubmit*/
          i[21]
        ))
      ], E = !0);
    },
    p(_, A) {
      (!I || A[0] & /*placeholder*/
      256) && c(
        a,
        "placeholder",
        /*placeholder*/
        _[8]
      ), (!I || A[0] & /*placeholder*/
      256) && c(
        a,
        "aria-label",
        /*placeholder*/
        _[8]
      ), A[0] & /*searchValue*/
      2 && a.value !== /*searchValue*/
      _[1] && ft(
        a,
        /*searchValue*/
        _[1]
      ), (!I || A[0] & /*clearButtonTitle*/
      8) && c(
        d,
        "title",
        /*clearButtonTitle*/
        _[3]
      ), /*abortController*/
      _[19] ? v ? A[0] & /*abortController*/
      524288 && j(v, 1) : (v = kt(), v.c(), j(v, 1), v.m(u, null)) : v && (Fe(), G(v, 1, 1, () => {
        v = null;
      }), Pe()), (!I || A[0] & /*searchValue*/
      2) && ae(
        u,
        "displayable",
        /*searchValue*/
        _[1] !== ""
      ), /*enableReverse*/
      _[5] === !0 ? k ? (k.p(_, A), A[0] & /*enableReverse*/
      32 && j(k, 1)) : (k = Nt(_), k.c(), j(k, 1), k.m(r, M)) : k && (Fe(), G(k, 1, 1, () => {
        k = null;
      }), Pe()), L && L.p && (!I || A[1] & /*$$scope*/
      134217728) && li(
        L,
        m,
        _,
        /*$$scope*/
        _[58],
        I ? ai(
          m,
          /*$$scope*/
          _[58],
          A,
          null
        ) : ci(
          /*$$scope*/
          _[58]
        ),
        null
      );
      let V = y;
      y = ve(_), y === V ? ~y && W[y].p(_, A) : (w && (Fe(), G(W[V], 1, 1, () => {
        W[V] = null;
      }), Pe()), ~y ? (w = W[y], w ? w.p(_, A) : (w = W[y] = Y[y](_), w.c()), j(w, 1), w.m(t, null)) : w = null), (!I || A[0] & /*className*/
      4 && P !== (P = dt(
        /*className*/
        _[2]
      ) + " svelte-1r7dvt7")) && c(t, "class", P), (!I || A[0] & /*className, collapsed, searchValue*/
      22) && ae(
        t,
        "can-collapse",
        /*collapsed*/
        _[4] && /*searchValue*/
        _[1] === ""
      );
    },
    i(_) {
      I || (j(O), j(l.$$.fragment, _), j(b.$$.fragment, _), j(v), j(k), j(L, _), j(w), I = !0);
    },
    o(_) {
      G(O), G(l.$$.fragment, _), G(b.$$.fragment, _), G(v), G(k), G(L, _), G(w), I = !1;
    },
    d(_) {
      _ && (D(e), D(t)), ne(l), i[61](null), ne(b), v && v.d(), k && k.d(), L && L.d(_), ~y && W[y].d(), E = !1, oe(g);
    }
  };
}
function ar(i, e, t) {
  let r, { $$slots: n = {}, $$scope: l } = e, { class: o = void 0 } = e, { apiKey: a } = e, { bbox: f = void 0 } = e, { clearButtonTitle: u = "clear" } = e, { clearOnBlur: d = !1 } = e, { collapsed: b = !1 } = e, { country: h = void 0 } = e, { debounceSearch: p = 200 } = e, { enableReverse: M = !1 } = e, { errorMessage: F = "Something went wrong…" } = e, { filter: y = () => !0 } = e, { flyTo: w = !0 } = e, { fuzzyMatch: P = !0 } = e, { language: I = void 0 } = e, { limit: E = void 0 } = e, { mapController: g = void 0 } = e, { minLength: O = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: k = "Search" } = e, { proximity: m = [{ type: "server-geolocation" }] } = e, { reverseActive: L = M === "always" } = e, { reverseButtonTitle: Y = "toggle reverse geocoding" } = e, { searchValue: W = "" } = e, { showFullGeometry: ve = !0 } = e, { showPlaceType: _ = "ifNeeded" } = e, { showResultsWhileTyping: A = !0 } = e, { selectFirst: V = !0 } = e, { flyToSelected: _e = !1 } = e, { markerOnSelected: Me = !0 } = e, { types: de = void 0 } = e, { excludeTypes: Ie = !1 } = e, { zoom: ke = 16 } = e, { maxZoom: Le = 18 } = e, { apiUrl: je = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: He = {} } = e, { iconsBaseUrl: rt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.2.0/icons/" } = e, { adjustUrlQuery: Ze = (s) => {
  } } = e;
  function Dt() {
    x.focus();
  }
  function At() {
    x.blur();
  }
  function nt(s, Z = !0) {
    t(1, W = s), Z ? (t(15, U = -1), st()) : (Ve(), setTimeout(() => {
      x.focus(), x.select();
    }));
  }
  function Bt() {
    t(14, N = void 0), t(55, S = void 0), t(15, U = -1);
  }
  function zt() {
    t(54, H = []), t(55, S = void 0);
  }
  let ye = !1, N, H, S, ot = "", x, U = -1, $, Oe = [], fe, we, Re, Ge;
  const Ft = /* @__PURE__ */ new Set(), se = hi();
  gi(() => {
    g && (g.setEventHandler(void 0), g.indicateReverse(!1), g.setSelectedMarker(-1), g.setMarkers(void 0, void 0));
  });
  function st(s) {
    if (we && (clearTimeout(we), we = void 0), U > -1 && N)
      t(55, S = N[U]), t(1, W = S.place_type[0] === "reverse" ? S.place_name : S.place_name.replace(/,.*/, "")), t(18, $ = void 0), t(54, H = void 0), t(15, U = -1);
    else if (W) {
      const Z = s || !Qe(W);
      qe(W, { exact: !0 }).then(() => {
        t(54, H = N), t(55, S = void 0), Z && Pt();
      }).catch((ee) => t(18, $ = ee));
    }
  }
  function Qe(s) {
    try {
      return tr(s, 6);
    } catch {
      return !1;
    }
  }
  async function qe(s, { byId: Z = !1, exact: ee = !1 } = {}) {
    t(18, $ = void 0), fe == null || fe.abort();
    const te = new AbortController();
    t(19, fe = te);
    try {
      const C = Qe(s), J = new URLSearchParams();
      if (I !== void 0 && J.set("language", Array.isArray(I) ? I.join(",") : I ?? ""), de && J.set("types", de.join(",")), Ie && J.set("excludeTypes", String(Ie)), f && J.set("bbox", f.map((De) => De.toFixed(6)).join(",")), h && J.set("country", Array.isArray(h) ? h.join(",") : h), !Z && !C) {
        const De = await Gi(g, m, te);
        De && J.set("proximity", De), (ee || !A) && J.set("autocomplete", "false"), J.set("fuzzyMatch", String(P));
      }
      E !== void 0 && (!C || (de == null ? void 0 : de.length) === 1) && J.set("limit", String(E)), J.set("key", a), Ze(J);
      const Ue = je + "/" + encodeURIComponent(C ? C.decimalLongitude + "," + C.decimalLatitude : s) + ".json?" + J.toString();
      if (Ue === ot) {
        Z ? (t(14, N = void 0), t(55, S = Oe[0])) : t(14, N = Oe);
        return;
      }
      ot = Ue;
      const Je = await fetch(Ue, { signal: te.signal, ...He });
      if (!Je.ok)
        throw new Error(await Je.text());
      const Xe = await Je.json();
      se("response", { url: Ue, featureCollection: Xe }), Z ? (t(14, N = void 0), t(55, S = Xe.features[0]), Oe = [S]) : (t(14, N = Xe.features.filter(y)), C && N.unshift({
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
      }), Oe = N, C && x.focus());
    } catch (C) {
      if (C && typeof C == "object" && "name" in C && C.name === "AbortError")
        return;
      throw C;
    } finally {
      te === fe && t(19, fe = void 0);
    }
  }
  function Pt() {
    var ee;
    if (!(H != null && H.length) || !w)
      return;
    const s = [180, 90, -180, -90], Z = !H.some((te) => !te.matching_text);
    for (const te of H)
      if (Z || !te.matching_text)
        for (const C of [0, 1, 2, 3])
          s[C] = Math[C < 2 ? "min" : "max"](s[C], ((ee = te.bbox) == null ? void 0 : ee[C]) ?? te.center[C % 2]);
    g && H.length > 0 && (S && s[0] === s[2] && s[1] === s[3] ? g.flyTo(S.center, ke) : g.fitBounds(vt(s), 50, Le));
  }
  function jt(s) {
    t(0, L = M === "always"), t(14, N = void 0), t(55, S = void 0), t(15, U = -1), nt(s[1].toFixed(6) + ", " + Zi(s[0], [-180, 180], !0).toFixed(6), !1);
  }
  function Ht(s) {
    if (!N)
      return;
    let Z = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    Z && (U === (V ? 0 : -1) && Z === -1 && t(15, U = N.length), t(15, U += Z), U >= N.length && t(15, U = -1), U < 0 && V && t(15, U = 0), s.preventDefault());
  }
  function Ve(s = !0) {
    if (t(18, $ = void 0), A) {
      if (we && clearTimeout(we), W.length < O)
        return;
      const Z = W;
      we = window.setTimeout(
        () => {
          qe(Z).catch((ee) => t(18, $ = ee));
        },
        s ? p : 0
      );
    } else
      t(14, N = void 0), t(18, $ = void 0);
  }
  function Ke(s) {
    t(55, S = s), t(1, W = s.place_name), t(15, U = -1);
  }
  const Zt = () => x.focus();
  function Gt(s) {
    $e[s ? "unshift" : "push"](() => {
      x = s, t(17, x);
    });
  }
  function Qt() {
    W = this.value, t(1, W), t(13, ye), t(27, d);
  }
  const qt = () => t(13, ye = !0), Vt = () => t(13, ye = !1), Kt = () => Ve(), Jt = () => {
    t(1, W = ""), x.focus();
  }, Xt = () => t(0, L = !L), Yt = () => t(18, $ = void 0), xt = (s) => t(15, U = s), $t = (s) => Ke(s), ei = () => {
    V || t(15, U = -1);
  }, ti = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, o = s.class), "apiKey" in s && t(25, a = s.apiKey), "bbox" in s && t(26, f = s.bbox), "clearButtonTitle" in s && t(3, u = s.clearButtonTitle), "clearOnBlur" in s && t(27, d = s.clearOnBlur), "collapsed" in s && t(4, b = s.collapsed), "country" in s && t(28, h = s.country), "debounceSearch" in s && t(29, p = s.debounceSearch), "enableReverse" in s && t(5, M = s.enableReverse), "errorMessage" in s && t(6, F = s.errorMessage), "filter" in s && t(30, y = s.filter), "flyTo" in s && t(31, w = s.flyTo), "fuzzyMatch" in s && t(32, P = s.fuzzyMatch), "language" in s && t(33, I = s.language), "limit" in s && t(34, E = s.limit), "mapController" in s && t(35, g = s.mapController), "minLength" in s && t(36, O = s.minLength), "noResultsMessage" in s && t(7, v = s.noResultsMessage), "placeholder" in s && t(8, k = s.placeholder), "proximity" in s && t(37, m = s.proximity), "reverseActive" in s && t(0, L = s.reverseActive), "reverseButtonTitle" in s && t(9, Y = s.reverseButtonTitle), "searchValue" in s && t(1, W = s.searchValue), "showFullGeometry" in s && t(38, ve = s.showFullGeometry), "showPlaceType" in s && t(10, _ = s.showPlaceType), "showResultsWhileTyping" in s && t(39, A = s.showResultsWhileTyping), "selectFirst" in s && t(11, V = s.selectFirst), "flyToSelected" in s && t(40, _e = s.flyToSelected), "markerOnSelected" in s && t(41, Me = s.markerOnSelected), "types" in s && t(42, de = s.types), "excludeTypes" in s && t(43, Ie = s.excludeTypes), "zoom" in s && t(44, ke = s.zoom), "maxZoom" in s && t(45, Le = s.maxZoom), "apiUrl" in s && t(46, je = s.apiUrl), "fetchParameters" in s && t(47, He = s.fetchParameters), "iconsBaseUrl" in s && t(12, rt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(48, Ze = s.adjustUrlQuery), "$$scope" in s && t(58, l = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      t(16, Re = ye), d && !ye && t(1, W = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    32 && W.length < O && (t(55, S = void 0), t(14, N = void 0), t(18, $ = void 0), t(54, H = N)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && ve && S && !S.address && S.geometry.type === "Point" && S.place_type[0] !== "reverse" && qe(S.id, { byId: !0 }).catch((s) => t(18, $ = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (g && S && S.id !== Ge && w && (!S.bbox || S.bbox[0] === S.bbox[2] && S.bbox[1] === S.bbox[3] ? g.flyTo(S.center, S.id.startsWith("poi.") || S.id.startsWith("address.") ? Le : ke) : g.fitBounds(vt(S.bbox), 50, Le), t(14, N = void 0), t(54, H = void 0), t(15, U = -1)), t(56, Ge = S == null ? void 0 : S.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && V && N != null && N.length && t(15, U = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (V || t(15, U = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    8388608 && H !== N && t(54, H = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && g && g.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          L && jt(s.coordinates);
          break;
        case "markerClick":
          {
            const Z = N == null ? void 0 : N.find((ee) => ee.id === s.id);
            Z && Ke(Z);
          }
          break;
        case "markerMouseEnter":
          H && t(15, U = Re ? (N == null ? void 0 : N.findIndex((Z) => Z.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          H && t(15, U = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(57, r = N == null ? void 0 : N[U]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && g && r && w && _e && g.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? Le : ke), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Me || g == null || g.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && g && Me && !H && (g.setMarkers(r ? [r] : void 0, void 0), g.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && g && g.setMarkers(H, S), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && H && g && g.setSelectedMarker(U), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16 && g) {
      const s = Qe(W);
      g.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    67108864 && se("select", r), i.$$.dirty[1] & /*picked*/
    16777216 && se("pick", S), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && se("optionsVisibilityChange", Re && !!N), i.$$.dirty[0] & /*listFeatures*/
    16384 && se("featuresListed", N), i.$$.dirty[1] & /*markedFeatures*/
    8388608 && se("featuresMarked", H), i.$$.dirty[0] & /*reverseActive*/
    1 && se("reverseToggle", L), i.$$.dirty[0] & /*searchValue*/
    2 && se("queryChange", W), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && g && g.indicateReverse(L);
  }, [
    L,
    W,
    o,
    u,
    b,
    M,
    F,
    v,
    k,
    Y,
    _,
    V,
    rt,
    ye,
    N,
    U,
    Re,
    x,
    $,
    fe,
    Ft,
    st,
    Ht,
    Ve,
    Ke,
    a,
    f,
    d,
    h,
    p,
    y,
    w,
    P,
    I,
    E,
    g,
    O,
    m,
    ve,
    A,
    _e,
    Me,
    de,
    Ie,
    ke,
    Le,
    je,
    He,
    Ze,
    Dt,
    At,
    nt,
    Bt,
    zt,
    H,
    S,
    Ge,
    r,
    l,
    n,
    Zt,
    Gt,
    Qt,
    qt,
    Vt,
    Kt,
    Jt,
    Xt,
    Yt,
    xt,
    $t,
    ei,
    ti
  ];
}
let lr = class extends be {
  constructor(e) {
    super(), he(
      this,
      e,
      ar,
      sr,
      ge,
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
};
const cr = new FinalizationRegistry((i) => {
  i.$destroy();
});
var X;
class fr extends EventTarget {
  constructor({ target: t, ...r }) {
    super();
    lt(this, X, void 0);
    ct(this, X, new lr({
      target: t,
      props: r
    }));
    for (const n of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      ie(this, X).$on(n, (l) => this.dispatchEvent(l));
    cr.register(this, ie(this, X));
  }
  setOptions(t) {
    ie(this, X).$set(t);
  }
  setQuery(t, r = !0) {
    var n;
    (n = ie(this, X)) == null || n.setQuery(t, r);
  }
  clearMap() {
    var t;
    (t = ie(this, X)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = ie(this, X)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = ie(this, X)) == null || t.focus();
  }
  blur() {
    var t;
    (t = ie(this, X)) == null || t.blur();
  }
}
X = new WeakMap();
export {
  fr as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
