var Ft = Object.defineProperty;
var Gt = (n, e, t) => e in n ? Ft(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ve = (n, e, t) => (Gt(n, typeof e != "symbol" ? e + "" : e, t), t), et = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var he = (n, e, t) => (et(n, e, "read from private field"), t ? t.call(n) : e.get(n)), tt = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, nt = (n, e, t, l) => (et(n, e, "write to private field"), l ? l.call(n, t) : e.set(n, t), t);
function S() {
}
function qt(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function mt(n) {
  return n();
}
function lt() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(n) {
  n.forEach(mt);
}
function gt(n) {
  return typeof n == "function";
}
function me(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let ze;
function D(n, e) {
  return ze || (ze = document.createElement("a")), ze.href = e, n === ze.href;
}
function Vt(n) {
  return Object.keys(n).length === 0;
}
function Dt(n, e, t, l) {
  if (n) {
    const r = yt(n, e, t, l);
    return n[0](r);
  }
}
function yt(n, e, t, l) {
  return n[1] && l ? qt(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function Kt(n, e, t, l) {
  if (n[2] && l) {
    const r = n[2](l(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const a = [], c = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < c; o += 1)
        a[o] = e.dirty[o] | r[o];
      return a;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Qt(n, e, t, l, r, a) {
  if (r) {
    const c = yt(e, t, l, a);
    n.p(c, r);
  }
}
function Ht(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function rt(n) {
  return n ?? "";
}
function v(n, e) {
  n.appendChild(e);
}
function U(n, e, t) {
  n.insertBefore(e, t || null);
}
function z(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function E(n) {
  return document.createElement(n);
}
function se(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ce(n) {
  return document.createTextNode(n);
}
function Q() {
  return ce(" ");
}
function Jt() {
  return ce("");
}
function V(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function Xt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function s(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Yt(n) {
  return Array.from(n.childNodes);
}
function Ce(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function it(n, e) {
  n.value = e ?? "";
}
function ie(n, e, t) {
  n.classList.toggle(e, !!t);
}
function xt(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
let Le;
function Be(n) {
  Le = n;
}
function bt() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function $t(n) {
  bt().$$.on_destroy.push(n);
}
function en() {
  const n = bt();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const r = n.$$.callbacks[e];
    if (r) {
      const a = xt(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return r.slice().forEach((c) => {
        c.call(n, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
function st(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const pe = [], Ke = [];
let Te = [];
const ct = [], tn = /* @__PURE__ */ Promise.resolve();
let Qe = !1;
function nn() {
  Qe || (Qe = !0, tn.then(wt));
}
function He(n) {
  Te.push(n);
}
const De = /* @__PURE__ */ new Set();
let ve = 0;
function wt() {
  if (ve !== 0)
    return;
  const n = Le;
  do {
    try {
      for (; ve < pe.length; ) {
        const e = pe[ve];
        ve++, Be(e), ln(e.$$);
      }
    } catch (e) {
      throw pe.length = 0, ve = 0, e;
    }
    for (Be(null), pe.length = 0, ve = 0; Ke.length; )
      Ke.pop()();
    for (let e = 0; e < Te.length; e += 1) {
      const t = Te[e];
      De.has(t) || (De.add(t), t());
    }
    Te.length = 0;
  } while (pe.length);
  for (; ct.length; )
    ct.pop()();
  Qe = !1, De.clear(), Be(n);
}
function ln(n) {
  if (n.fragment !== null) {
    n.update(), ne(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(He);
  }
}
function rn(n) {
  const e = [], t = [];
  Te.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), Te = e;
}
const Pe = /* @__PURE__ */ new Set();
let _e;
function Ue() {
  _e = {
    r: 0,
    c: [],
    p: _e
    // parent group
  };
}
function Ae() {
  _e.r || ne(_e.c), _e = _e.p;
}
function O(n, e) {
  n && n.i && (Pe.delete(n), n.i(e));
}
function F(n, e, t, l) {
  if (n && n.o) {
    if (Pe.has(n))
      return;
    Pe.add(n), _e.c.push(() => {
      Pe.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function ft(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function sn(n, e) {
  F(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function cn(n, e, t, l, r, a, c, o, h, f, _, k) {
  let g = n.length, B = a.length, I = g;
  const T = {};
  for (; I--; )
    T[n[I].key] = I;
  const M = [], A = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), N = [];
  for (I = B; I--; ) {
    const C = k(r, a, I), L = t(C);
    let m = c.get(L);
    m ? l && N.push(() => m.p(C, e)) : (m = f(L, C), m.c()), A.set(L, M[I] = m), L in T && y.set(L, Math.abs(I - T[L]));
  }
  const Z = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  function b(C) {
    O(C, 1), C.m(o, _), c.set(C.key, C), _ = C.first, B--;
  }
  for (; g && B; ) {
    const C = M[B - 1], L = n[g - 1], m = C.key, w = L.key;
    C === L ? (_ = C.first, g--, B--) : A.has(w) ? !c.has(m) || Z.has(m) ? b(C) : d.has(w) ? g-- : y.get(m) > y.get(w) ? (d.add(m), b(C)) : (Z.add(w), g--) : (h(L, c), g--);
  }
  for (; g--; ) {
    const C = n[g];
    A.has(C.key) || h(C, c);
  }
  for (; B; )
    b(M[B - 1]);
  return ne(N), M;
}
function fe(n) {
  n && n.c();
}
function ee(n, e, t) {
  const { fragment: l, after_update: r } = n.$$;
  l && l.m(e, t), He(() => {
    const a = n.$$.on_mount.map(mt).filter(gt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : ne(a), n.$$.on_mount = [];
  }), r.forEach(He);
}
function te(n, e) {
  const t = n.$$;
  t.fragment !== null && (rn(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function fn(n, e) {
  n.$$.dirty[0] === -1 && (pe.push(n), nn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ge(n, e, t, l, r, a, c, o = [-1]) {
  const h = Le;
  Be(n);
  const f = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: S,
    not_equal: r,
    bound: lt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: lt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  c && c(f.root);
  let _ = !1;
  if (f.ctx = t ? t(n, e.props || {}, (k, g, ...B) => {
    const I = B.length ? B[0] : g;
    return f.ctx && r(f.ctx[k], f.ctx[k] = I) && (!f.skip_bound && f.bound[k] && f.bound[k](I), _ && fn(n, k)), g;
  }) : [], f.update(), _ = !0, ne(f.before_update), f.fragment = l ? l(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const k = Yt(e.target);
      f.fragment && f.fragment.l(k), k.forEach(z);
    } else
      f.fragment && f.fragment.c();
    e.intro && O(n.$$.fragment), ee(n, e.target, e.anchor), wt();
  }
  Be(h);
}
class ye {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ve(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ve(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    te(this, 1), this.$destroy = S;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!gt(t))
      return S;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const r = l.indexOf(t);
      r !== -1 && l.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Vt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const on = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(on);
function un(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), s(e, "viewBox", "0 0 14 14"), s(e, "width", "13"), s(e, "height", "13"), s(e, "class", "svelte-en2qvf");
    },
    m(l, r) {
      U(l, e, r), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && z(e);
    }
  };
}
class kt extends ye {
  constructor(e) {
    super(), ge(this, e, null, un, me, {});
  }
}
function an(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), s(e, "viewBox", "0 0 30 30"), s(e, "fill", "none"), s(e, "xmlns", "http://www.w3.org/2000/svg"), s(e, "class", "svelte-d2loi5");
    },
    m(l, r) {
      U(l, e, r), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && z(e);
    }
  };
}
class vt extends ye {
  constructor(e) {
    super(), ge(this, e, null, an, me, {});
  }
}
function dn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(l, r) {
      U(l, e, r);
    },
    p(l, r) {
      r & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      l[3] + "area.svg") && s(e, "src", t), r & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function hn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(l, r) {
      U(l, e, r);
    },
    p(l, r) {
      r & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      l[3] + "poi.svg") && s(e, "src", t), r & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function _n(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(l, r) {
      U(l, e, r);
    },
    p(l, r) {
      r & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      l[3] + "postal_code.svg") && s(e, "src", t), r & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function mn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(l, r) {
      U(l, e, r);
    },
    p(l, r) {
      r & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      l[3] + "street.svg") && s(e, "src", t), r & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function gn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(l, r) {
      U(l, e, r);
    },
    p(l, r) {
      r & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      l[3] + "road.svg") && s(e, "src", t), r & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function yn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(l, r) {
      U(l, e, r);
    },
    p(l, r) {
      r & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      l[3] + "housenumber.svg") && s(e, "src", t), r & /*placeType*/
      64 && s(
        e,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function bn(n) {
  let e, t, l, r;
  return {
    c() {
      e = E("img"), D(e.src, t = /*imageUrl*/
      n[5]) || s(e, "src", t), s(
        e,
        "alt",
        /*category*/
        n[4]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(a, c) {
      U(a, e, c), l || (r = V(
        e,
        "error",
        /*error_handler*/
        n[12]
      ), l = !0);
    },
    p(a, c) {
      c & /*imageUrl*/
      32 && !D(e.src, t = /*imageUrl*/
      a[5]) && s(e, "src", t), c & /*category*/
      16 && s(
        e,
        "alt",
        /*category*/
        a[4]
      );
    },
    d(a) {
      a && z(e), l = !1, r();
    }
  };
}
function ot(n) {
  let e, t;
  return {
    c() {
      e = E("span"), t = ce(
        /*placeType*/
        n[6]
      ), s(e, "class", "secondary svelte-ltkwvy");
    },
    m(l, r) {
      U(l, e, r), v(e, t);
    },
    p(l, r) {
      r & /*placeType*/
      64 && Ce(
        t,
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && z(e);
    }
  };
}
function wn(n) {
  var C, L;
  let e, t, l, r, a, c, o, h, f = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), _, k, g = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((C = n[0].properties) == null ? void 0 : C.kind) !== "road" && /*feature*/
    ((L = n[0].properties) == null ? void 0 : L.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5])
  ), B, I, T = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), M, A, y;
  function N(m, w) {
    var H, u;
    return w & /*feature*/
    1 && (t = null), w & /*feature*/
    1 && (l = null), w & /*feature*/
    1 && (r = null), /*imageUrl*/
    m[5] ? bn : (
      /*feature*/
      m[0].address ? yn : (
        /*feature*/
        ((H = m[0].properties) == null ? void 0 : H.kind) === "road" || /*feature*/
        ((u = m[0].properties) == null ? void 0 : u.kind) === "road_relation" ? gn : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("address.")), t ? mn : (l == null && (l = !!/*feature*/
        m[0].id.startsWith("postal_code.")), l ? _n : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("poi.")), r ? hn : dn)))
      )
    );
  }
  let Z = N(n, -1), d = Z(n), b = g && ot(n);
  return {
    c() {
      e = E("li"), d.c(), a = Q(), c = E("span"), o = E("span"), h = E("span"), _ = ce(f), k = Q(), b && b.c(), B = Q(), I = E("span"), M = ce(T), s(h, "class", "primary svelte-ltkwvy"), s(o, "class", "svelte-ltkwvy"), s(I, "class", "line2 svelte-ltkwvy"), s(c, "class", "texts svelte-ltkwvy"), s(e, "tabindex", "0"), s(
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
    m(m, w) {
      U(m, e, w), d.m(e, null), v(e, a), v(e, c), v(c, o), v(o, h), v(h, _), v(o, k), b && b.m(o, null), v(c, B), v(c, I), v(I, M), A || (y = [
        V(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[10]
        ),
        V(
          e,
          "focus",
          /*focus_handler*/
          n[11]
        )
      ], A = !0);
    },
    p(m, [w]) {
      var H, u;
      Z === (Z = N(m, w)) && d ? d.p(m, w) : (d.d(1), d = Z(m), d && (d.c(), d.m(e, a))), w & /*feature*/
      1 && f !== (f = /*feature*/
      m[0].place_name.replace(/,.*/, "") + "") && Ce(_, f), w & /*showPlaceType, feature, imageUrl*/
      37 && (g = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] && !/*feature*/
      m[0].address && /*feature*/
      ((H = m[0].properties) == null ? void 0 : H.kind) !== "road" && /*feature*/
      ((u = m[0].properties) == null ? void 0 : u.kind) !== "road_relation" && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5])), g ? b ? b.p(m, w) : (b = ot(m), b.c(), b.m(o, null)) : b && (b.d(1), b = null), w & /*feature*/
      1 && T !== (T = /*feature*/
      m[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Ce(M, T), w & /*selected*/
      2 && s(
        e,
        "data-selected",
        /*selected*/
        m[1]
      ), w & /*selected*/
      2 && ie(
        e,
        "selected",
        /*selected*/
        m[1]
      );
    },
    i: S,
    o: S,
    d(m) {
      m && z(e), d.d(), b && b.d(), A = !1, ne(y);
    }
  };
}
function kn(n, e, t) {
  var A;
  let l, r, { feature: a } = e, { selected: c = !1 } = e, { showPlaceType: o } = e, { missingIconsCache: h } = e, { iconsBaseUrl: f } = e;
  const _ = (A = a.properties) == null ? void 0 : A.categories;
  let k, g;
  function B(y) {
    g && h.add(g), t(9, l--, l);
  }
  function I(y) {
    st.call(this, n, y);
  }
  function T(y) {
    st.call(this, n, y);
  }
  const M = (y) => B(y.currentTarget);
  return n.$$set = (y) => {
    "feature" in y && t(0, a = y.feature), "selected" in y && t(1, c = y.selected), "showPlaceType" in y && t(2, o = y.showPlaceType), "missingIconsCache" in y && t(8, h = y.missingIconsCache), "iconsBaseUrl" in y && t(3, f = y.iconsBaseUrl);
  }, n.$$.update = () => {
    var y, N, Z, d;
    if (n.$$.dirty & /*index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    824)
      do
        t(9, l--, l), t(4, k = _ == null ? void 0 : _[l]), t(5, g = k ? f + k.replace(/ /g, "_") + ".svg" : void 0);
      while (l > -1 && (!g || h.has(g)));
    n.$$.dirty & /*feature*/
    1 && t(6, r = a.id.startsWith("poi.") ? (N = (y = a.properties) == null ? void 0 : y.categories) == null ? void 0 : N.join(", ") : ((d = (Z = a.properties) == null ? void 0 : Z.place_type_name) == null ? void 0 : d[0]) ?? a.place_type[0]);
  }, t(9, l = (_ == null ? void 0 : _.length) ?? 0), [
    a,
    c,
    o,
    f,
    k,
    g,
    r,
    B,
    h,
    l,
    I,
    T,
    M
  ];
}
class vn extends ye {
  constructor(e) {
    super(), ge(this, e, kn, wn, me, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function pn(n) {
  let e;
  return {
    c() {
      e = E("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', s(e, "class", "svelte-7cmwmc");
    },
    m(t, l) {
      U(t, e, l);
    },
    p: S,
    i: S,
    o: S,
    d(t) {
      t && z(e);
    }
  };
}
class Tn extends ye {
  constructor(e) {
    super(), ge(this, e, null, pn, me, {});
  }
}
function Mn(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), s(e, "viewBox", "0 0 60.006 21.412"), s(e, "width", "14"), s(e, "height", "20"), s(e, "class", "svelte-en2qvf");
    },
    m(l, r) {
      U(l, e, r), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && z(e);
    }
  };
}
class Bn extends ye {
  constructor(e) {
    super(), ge(this, e, null, Mn, me, {});
  }
}
function Cn(n) {
  let e, t;
  return {
    c() {
      e = se("svg"), t = se("path"), s(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), s(e, "width", "14"), s(e, "height", "14"), s(e, "viewBox", "0 0 15 15"), s(e, "class", "svelte-en2qvf");
    },
    m(l, r) {
      U(l, e, r), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && z(e);
    }
  };
}
class Ln extends ye {
  constructor(e) {
    super(), ge(this, e, null, Cn, me, {});
  }
}
function ut(n, e, t) {
  const l = n.slice();
  return l[75] = e[t], l[77] = t, l;
}
function at(n) {
  let e, t;
  return e = new Tn({}), {
    c() {
      fe(e.$$.fragment);
    },
    m(l, r) {
      ee(e, l, r), t = !0;
    },
    i(l) {
      t || (O(e.$$.fragment, l), t = !0);
    },
    o(l) {
      F(e.$$.fragment, l), t = !1;
    },
    d(l) {
      te(e, l);
    }
  };
}
function dt(n) {
  let e, t, l, r, a;
  return t = new Bn({}), {
    c() {
      e = E("button"), fe(t.$$.fragment), s(e, "type", "button"), s(
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
    m(c, o) {
      U(c, e, o), ee(t, e, null), l = !0, r || (a = V(
        e,
        "click",
        /*click_handler_2*/
        n[61]
      ), r = !0);
    },
    p(c, o) {
      (!l || o[0] & /*reverseButtonTitle*/
      512) && s(
        e,
        "title",
        /*reverseButtonTitle*/
        c[9]
      ), (!l || o[0] & /*reverseActive*/
      1) && ie(
        e,
        "active",
        /*reverseActive*/
        c[0]
      );
    },
    i(c) {
      l || (O(t.$$.fragment, c), l = !0);
    },
    o(c) {
      F(t.$$.fragment, c), l = !1;
    },
    d(c) {
      c && z(e), te(t), r = !1, a();
    }
  };
}
function Rn(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), r, a, c, o = ft(
    /*listFeatures*/
    n[13]
  );
  const h = (f) => (
    /*feature*/
    f[75].id + /*feature*/
    (f[75].address ? "," + /*feature*/
    f[75].address : "")
  );
  for (let f = 0; f < o.length; f += 1) {
    let _ = ut(n, o, f), k = h(_);
    l.set(k, t[f] = ht(k, _));
  }
  return {
    c() {
      e = E("ul");
      for (let f = 0; f < t.length; f += 1)
        t[f].c();
      s(e, "class", "svelte-1r7dvt7");
    },
    m(f, _) {
      U(f, e, _);
      for (let k = 0; k < t.length; k += 1)
        t[k] && t[k].m(e, null);
      r = !0, a || (c = [
        V(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[65]
        ),
        V(
          e,
          "blur",
          /*blur_handler_1*/
          n[66]
        )
      ], a = !0);
    },
    p(f, _) {
      _[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (o = ft(
        /*listFeatures*/
        f[13]
      ), Ue(), t = cn(t, _, h, 1, f, o, l, e, sn, ht, null, ut), Ae());
    },
    i(f) {
      if (!r) {
        for (let _ = 0; _ < o.length; _ += 1)
          O(t[_]);
        r = !0;
      }
    },
    o(f) {
      for (let _ = 0; _ < t.length; _ += 1)
        F(t[_]);
      r = !1;
    },
    d(f) {
      f && z(e);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d();
      a = !1, ne(c);
    }
  };
}
function En(n) {
  let e, t, l, r, a, c;
  return t = new vt({}), {
    c() {
      e = E("div"), fe(t.$$.fragment), l = Q(), r = E("div"), a = ce(
        /*noResultsMessage*/
        n[7]
      ), s(r, "class", "svelte-1r7dvt7"), s(e, "class", "no-results svelte-1r7dvt7");
    },
    m(o, h) {
      U(o, e, h), ee(t, e, null), v(e, l), v(e, r), v(r, a), c = !0;
    },
    p(o, h) {
      (!c || h[0] & /*noResultsMessage*/
      128) && Ce(
        a,
        /*noResultsMessage*/
        o[7]
      );
    },
    i(o) {
      c || (O(t.$$.fragment, o), c = !0);
    },
    o(o) {
      F(t.$$.fragment, o), c = !1;
    },
    d(o) {
      o && z(e), te(t);
    }
  };
}
function In(n) {
  let e = "", t;
  return {
    c() {
      t = ce(e);
    },
    m(l, r) {
      U(l, t, r);
    },
    p: S,
    i: S,
    o: S,
    d(l) {
      l && z(t);
    }
  };
}
function Sn(n) {
  let e, t, l, r, a, c, o, h, f, _, k;
  return t = new vt({}), h = new kt({}), {
    c() {
      e = E("div"), fe(t.$$.fragment), l = Q(), r = E("div"), a = ce(
        /*errorMessage*/
        n[6]
      ), c = Q(), o = E("button"), fe(h.$$.fragment), s(r, "class", "svelte-1r7dvt7"), s(o, "class", "svelte-1r7dvt7"), s(e, "class", "error svelte-1r7dvt7");
    },
    m(g, B) {
      U(g, e, B), ee(t, e, null), v(e, l), v(e, r), v(r, a), v(e, c), v(e, o), ee(h, o, null), f = !0, _ || (k = V(
        o,
        "click",
        /*click_handler_3*/
        n[62]
      ), _ = !0);
    },
    p(g, B) {
      (!f || B[0] & /*errorMessage*/
      64) && Ce(
        a,
        /*errorMessage*/
        g[6]
      );
    },
    i(g) {
      f || (O(t.$$.fragment, g), O(h.$$.fragment, g), f = !0);
    },
    o(g) {
      F(t.$$.fragment, g), F(h.$$.fragment, g), f = !1;
    },
    d(g) {
      g && z(e), te(t), te(h), _ = !1, k();
    }
  };
}
function ht(n, e) {
  let t, l, r;
  function a() {
    return (
      /*mouseenter_handler*/
      e[63](
        /*i*/
        e[77]
      )
    );
  }
  function c() {
    return (
      /*focus_handler_1*/
      e[64](
        /*feature*/
        e[75]
      )
    );
  }
  return l = new vn({
    props: {
      feature: (
        /*feature*/
        e[75]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[14] === /*i*/
        e[77]
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
  }), l.$on("mouseenter", a), l.$on("focus", c), {
    key: n,
    first: null,
    c() {
      t = Jt(), fe(l.$$.fragment), this.first = t;
    },
    m(o, h) {
      U(o, t, h), ee(l, o, h), r = !0;
    },
    p(o, h) {
      e = o;
      const f = {};
      h[0] & /*listFeatures*/
      8192 && (f.feature = /*feature*/
      e[75]), h[0] & /*showPlaceType*/
      1024 && (f.showPlaceType = /*showPlaceType*/
      e[10]), h[0] & /*selectedItemIndex, listFeatures*/
      24576 && (f.selected = /*selectedItemIndex*/
      e[14] === /*i*/
      e[77]), h[0] & /*iconsBaseUrl*/
      2048 && (f.iconsBaseUrl = /*iconsBaseUrl*/
      e[11]), l.$set(f);
    },
    i(o) {
      r || (O(l.$$.fragment, o), r = !0);
    },
    o(o) {
      F(l.$$.fragment, o), r = !1;
    },
    d(o) {
      o && z(t), te(l, o);
    }
  };
}
function zn(n) {
  let e, t, l, r, a, c, o, h, f, _, k, g, B, I, T, M, A, y, N, Z;
  r = new Ln({}), _ = new kt({});
  let d = (
    /*abortController*/
    n[18] && at()
  ), b = (
    /*enableReverse*/
    n[5] === !0 && dt(n)
  );
  const C = (
    /*#slots*/
    n[53].default
  ), L = Dt(
    C,
    n,
    /*$$scope*/
    n[52],
    null
  ), m = [Sn, In, En, Rn], w = [];
  function H(u, P) {
    var $, oe;
    return (
      /*error*/
      u[17] ? 0 : (
        /*focusedDelayed*/
        u[15] ? (
          /*listFeatures*/
          (($ = u[13]) == null ? void 0 : $.length) === 0 ? 2 : (
            /*focusedDelayed*/
            u[15] && /*listFeatures*/
            ((oe = u[13]) != null && oe.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(T = H(n)) && (M = w[T] = m[T](n)), {
    c() {
      e = E("form"), t = E("div"), l = E("button"), fe(r.$$.fragment), a = Q(), c = E("input"), o = Q(), h = E("div"), f = E("button"), fe(_.$$.fragment), k = Q(), d && d.c(), g = Q(), b && b.c(), B = Q(), L && L.c(), I = Q(), M && M.c(), s(l, "class", "search-button svelte-1r7dvt7"), s(l, "type", "button"), s(
        c,
        "placeholder",
        /*placeholder*/
        n[8]
      ), s(
        c,
        "aria-label",
        /*placeholder*/
        n[8]
      ), s(c, "class", "svelte-1r7dvt7"), s(f, "type", "button"), s(
        f,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), s(f, "class", "svelte-1r7dvt7"), s(h, "class", "clear-button-container svelte-1r7dvt7"), ie(
        h,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), s(t, "class", "input-group svelte-1r7dvt7"), s(e, "tabindex", "0"), s(e, "class", A = rt(
        /*className*/
        n[2]
      ) + " svelte-1r7dvt7"), ie(
        e,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(u, P) {
      U(u, e, P), v(e, t), v(t, l), ee(r, l, null), v(t, a), v(t, c), n[55](c), it(
        c,
        /*searchValue*/
        n[1]
      ), v(t, o), v(t, h), v(h, f), ee(_, f, null), v(h, k), d && d.m(h, null), v(t, g), b && b.m(t, null), v(t, B), L && L.m(t, null), v(e, I), ~T && w[T].m(e, null), y = !0, N || (Z = [
        V(
          l,
          "click",
          /*click_handler*/
          n[54]
        ),
        V(
          c,
          "input",
          /*input_1_input_handler*/
          n[56]
        ),
        V(
          c,
          "focus",
          /*focus_handler*/
          n[57]
        ),
        V(
          c,
          "blur",
          /*blur_handler*/
          n[58]
        ),
        V(
          c,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        V(
          c,
          "input",
          /*input_handler*/
          n[59]
        ),
        V(
          f,
          "click",
          /*click_handler_1*/
          n[60]
        ),
        V(e, "submit", Xt(
          /*handleOnSubmit*/
          n[20]
        ))
      ], N = !0);
    },
    p(u, P) {
      (!y || P[0] & /*placeholder*/
      256) && s(
        c,
        "placeholder",
        /*placeholder*/
        u[8]
      ), (!y || P[0] & /*placeholder*/
      256) && s(
        c,
        "aria-label",
        /*placeholder*/
        u[8]
      ), P[0] & /*searchValue*/
      2 && c.value !== /*searchValue*/
      u[1] && it(
        c,
        /*searchValue*/
        u[1]
      ), (!y || P[0] & /*clearButtonTitle*/
      8) && s(
        f,
        "title",
        /*clearButtonTitle*/
        u[3]
      ), /*abortController*/
      u[18] ? d ? P[0] & /*abortController*/
      262144 && O(d, 1) : (d = at(), d.c(), O(d, 1), d.m(h, null)) : d && (Ue(), F(d, 1, 1, () => {
        d = null;
      }), Ae()), (!y || P[0] & /*searchValue*/
      2) && ie(
        h,
        "displayable",
        /*searchValue*/
        u[1] !== ""
      ), /*enableReverse*/
      u[5] === !0 ? b ? (b.p(u, P), P[0] & /*enableReverse*/
      32 && O(b, 1)) : (b = dt(u), b.c(), O(b, 1), b.m(t, B)) : b && (Ue(), F(b, 1, 1, () => {
        b = null;
      }), Ae()), L && L.p && (!y || P[1] & /*$$scope*/
      2097152) && Qt(
        L,
        C,
        u,
        /*$$scope*/
        u[52],
        y ? Kt(
          C,
          /*$$scope*/
          u[52],
          P,
          null
        ) : Ht(
          /*$$scope*/
          u[52]
        ),
        null
      );
      let $ = T;
      T = H(u), T === $ ? ~T && w[T].p(u, P) : (M && (Ue(), F(w[$], 1, 1, () => {
        w[$] = null;
      }), Ae()), ~T ? (M = w[T], M ? M.p(u, P) : (M = w[T] = m[T](u), M.c()), O(M, 1), M.m(e, null)) : M = null), (!y || P[0] & /*className*/
      4 && A !== (A = rt(
        /*className*/
        u[2]
      ) + " svelte-1r7dvt7")) && s(e, "class", A), (!y || P[0] & /*className, collapsed, searchValue*/
      22) && ie(
        e,
        "can-collapse",
        /*collapsed*/
        u[4] && /*searchValue*/
        u[1] === ""
      );
    },
    i(u) {
      y || (O(r.$$.fragment, u), O(_.$$.fragment, u), O(d), O(b), O(L, u), O(M), y = !0);
    },
    o(u) {
      F(r.$$.fragment, u), F(_.$$.fragment, u), F(d), F(b), F(L, u), F(M), y = !1;
    },
    d(u) {
      u && z(e), te(r), n[55](null), te(_), d && d.d(), b && b.d(), L && L.d(u), ~T && w[T].d(), N = !1, ne(Z);
    }
  };
}
function Pn(n, e, t) {
  const l = e[1], r = e[0], a = l - r;
  return n === l && t ? n : ((n - r) % a + a) % a + r;
}
function _t(n) {
  let e = [...n];
  return e[2] < e[0] && (e[2] += 360), e;
}
function Un(n, e, t) {
  let l, { $$slots: r = {}, $$scope: a } = e, { class: c = void 0 } = e, { apiKey: o } = e, { bbox: h = void 0 } = e, { clearButtonTitle: f = "clear" } = e, { clearOnBlur: _ = !1 } = e, { collapsed: k = !1 } = e, { country: g = void 0 } = e, { debounceSearch: B = 200 } = e, { enableReverse: I = !1 } = e, { errorMessage: T = "Something went wrong…" } = e, { filter: M = () => !0 } = e, { flyTo: A = !0 } = e, { fuzzyMatch: y = !0 } = e, { language: N = void 0 } = e, { limit: Z = void 0 } = e, { mapController: d = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: C = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: L = "Search" } = e, { proximity: m = void 0 } = e, { reverseActive: w = I === "always" } = e, { reverseButtonTitle: H = "toggle reverse geocoding" } = e, { searchValue: u = "" } = e, { showFullGeometry: P = !0 } = e, { showPlaceType: $ = "ifNeeded" } = e, { showResultsWhileTyping: oe = !0 } = e, { trackProximity: Re = !0 } = e, { types: ue = void 0 } = e, { zoom: Ee = 16 } = e, { maxZoom: Me = 18 } = e, { apiUrl: We = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: je = {} } = e, { iconsBaseUrl: Je = "https://cdn.maptiler.com/maptiler-geocoding-control/v0.0.96/icons/" } = e;
  function pt() {
    J.focus();
  }
  function Tt() {
    J.blur();
  }
  function Xe(i, j = !0) {
    t(1, u = i), j ? (t(14, W = -1), xe()) : (Ze(), setTimeout(() => {
      J.focus(), J.select();
    }));
  }
  let be = !1, R, G, p, Ye = "", J, W = -1, X, Ie = [], ae, we, Se, Oe;
  const Mt = /* @__PURE__ */ new Set(), le = en();
  $t(() => {
    d && (d.setEventHandler(void 0), d.indicateReverse(!1), d.setSelectedMarker(-1), d.setMarkers(void 0, void 0));
  });
  function xe(i) {
    if (we && (clearTimeout(we), we = void 0), W > -1 && R)
      t(49, p = R[W]), t(1, u = p.place_name.replace(/,.*/, "")), t(17, X = void 0), t(48, G = void 0), t(14, W = -1);
    else if (u) {
      const j = i || !$e();
      Ne(u, { exact: !0 }).then(() => {
        t(48, G = R), t(49, p = void 0), j && Bt();
      }).catch((Y) => t(17, X = Y));
    }
  }
  function $e() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(u);
  }
  async function Ne(i, { byId: j = !1, exact: Y = !1 } = {}) {
    t(17, X = void 0);
    const ke = $e(), K = new URLSearchParams();
    N != null && K.set("language", Array.isArray(N) ? N.join(",") : N), ue && K.set("types", ue.join(",")), ke || (h && K.set("bbox", h.map((re) => re.toFixed(6)).join(",")), g && K.set("country", Array.isArray(g) ? g.join(",") : g)), j || (m && K.set("proximity", m.map((re) => re.toFixed(6)).join(",")), (Y || !oe) && K.set("autocomplete", "false"), K.set("fuzzyMatch", String(y))), Z !== void 0 && (!ke || (ue == null ? void 0 : ue.length) === 1) && K.set("limit", String(Z)), K.set("key", o);
    const de = We + "/" + encodeURIComponent(i) + ".json?" + K.toString();
    if (de === Ye) {
      j ? (t(13, R = void 0), t(49, p = Ie[0])) : t(13, R = Ie);
      return;
    }
    Ye = de, ae == null || ae.abort();
    const q = new AbortController();
    t(18, ae = q);
    let Ge;
    try {
      Ge = await fetch(de, { signal: q.signal, ...je }).finally(() => {
        q === ae && t(18, ae = void 0);
      });
    } catch (re) {
      if (re && typeof re == "object" && "name" in re && re.name === "AbortError")
        return;
      throw new Error();
    }
    if (!Ge.ok)
      throw new Error();
    const qe = await Ge.json();
    le("response", { url: de, featureCollection: qe }), j ? (t(13, R = void 0), t(49, p = qe.features[0]), Ie = [p]) : (t(13, R = qe.features.filter(M)), Ie = R, ke && J.focus());
  }
  function Bt() {
    var Y, ke, K, de;
    if (!(G != null && G.length) || !A)
      return;
    const i = [180, 90, -180, -90], j = !G.some((q) => !q.matching_text);
    for (const q of G)
      (j || !q.matching_text) && (i[0] = Math.min(i[0], ((Y = q.bbox) == null ? void 0 : Y[0]) ?? q.center[0]), i[1] = Math.min(i[1], ((ke = q.bbox) == null ? void 0 : ke[1]) ?? q.center[1]), i[2] = Math.max(i[2], ((K = q.bbox) == null ? void 0 : K[2]) ?? q.center[0]), i[3] = Math.max(i[3], ((de = q.bbox) == null ? void 0 : de[3]) ?? q.center[1]));
    d && G.length > 0 && (p && i[0] === i[2] && i[1] === i[3] ? d.flyTo(p.center, Ee) : d.fitBounds(_t(i), 50, Me));
  }
  function Ct(i) {
    t(0, w = I === "always"), Xe(Pn(i[0], [-180, 180], !0).toFixed(6) + "," + i[1].toFixed(6));
  }
  function Lt(i) {
    if (!R)
      return;
    let j = i.key === "ArrowDown" ? 1 : i.key === "ArrowUp" ? -1 : 0;
    j ? (W === -1 && j === -1 && t(14, W = R.length), t(14, W += j), W >= R.length && t(14, W = -1), i.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(i.key) && t(14, W = -1);
  }
  function Ze(i = !0) {
    if (t(17, X = void 0), oe) {
      if (we && clearTimeout(we), u.length < b)
        return;
      const j = u;
      we = window.setTimeout(
        () => {
          Ne(j).catch((Y) => t(17, X = Y));
        },
        i ? B : 0
      );
    } else
      t(13, R = void 0), t(17, X = void 0);
  }
  function Fe(i) {
    t(49, p = i), t(1, u = i.place_name), t(14, W = -1);
  }
  const Rt = () => J.focus();
  function Et(i) {
    Ke[i ? "unshift" : "push"](() => {
      J = i, t(16, J);
    });
  }
  function It() {
    u = this.value, t(1, u), t(12, be), t(27, _);
  }
  const St = () => t(12, be = !0), zt = () => t(12, be = !1), Pt = () => Ze(), Ut = () => {
    t(1, u = ""), J.focus();
  }, At = () => t(0, w = !w), Wt = () => t(17, X = void 0), jt = (i) => t(14, W = i), Ot = (i) => Fe(i), Nt = () => t(14, W = -1), Zt = () => {
  };
  return n.$$set = (i) => {
    "class" in i && t(2, c = i.class), "apiKey" in i && t(25, o = i.apiKey), "bbox" in i && t(26, h = i.bbox), "clearButtonTitle" in i && t(3, f = i.clearButtonTitle), "clearOnBlur" in i && t(27, _ = i.clearOnBlur), "collapsed" in i && t(4, k = i.collapsed), "country" in i && t(28, g = i.country), "debounceSearch" in i && t(29, B = i.debounceSearch), "enableReverse" in i && t(5, I = i.enableReverse), "errorMessage" in i && t(6, T = i.errorMessage), "filter" in i && t(30, M = i.filter), "flyTo" in i && t(31, A = i.flyTo), "fuzzyMatch" in i && t(32, y = i.fuzzyMatch), "language" in i && t(33, N = i.language), "limit" in i && t(34, Z = i.limit), "mapController" in i && t(35, d = i.mapController), "minLength" in i && t(36, b = i.minLength), "noResultsMessage" in i && t(7, C = i.noResultsMessage), "placeholder" in i && t(8, L = i.placeholder), "proximity" in i && t(24, m = i.proximity), "reverseActive" in i && t(0, w = i.reverseActive), "reverseButtonTitle" in i && t(9, H = i.reverseButtonTitle), "searchValue" in i && t(1, u = i.searchValue), "showFullGeometry" in i && t(37, P = i.showFullGeometry), "showPlaceType" in i && t(10, $ = i.showPlaceType), "showResultsWhileTyping" in i && t(38, oe = i.showResultsWhileTyping), "trackProximity" in i && t(39, Re = i.trackProximity), "types" in i && t(40, ue = i.types), "zoom" in i && t(41, Ee = i.zoom), "maxZoom" in i && t(42, Me = i.maxZoom), "apiUrl" in i && t(43, We = i.apiUrl), "fetchParameters" in i && t(44, je = i.fetchParameters), "iconsBaseUrl" in i && t(11, Je = i.iconsBaseUrl), "$$scope" in i && t(52, a = i.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[1] & /*trackProximity*/
    256 && (Re || t(24, m = void 0)), n.$$.dirty[0] & /*focused, clearOnBlur*/
    134221824 && setTimeout(() => {
      t(15, Se = be), _ && !be && t(1, u = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    32 && u.length < b && (t(49, p = void 0), t(13, R = void 0), t(17, X = void 0), t(48, G = R)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    262208 && P && p && !p.address && p.geometry.type === "Point" && Ne(p.id, { byId: !0 }).catch((i) => t(17, X = i)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    789521 && (d && p && p.id !== Oe && A && (!p.bbox || p.bbox[0] === p.bbox[2] && p.bbox[1] === p.bbox[3] ? d.flyTo(p.center, p.id.startsWith("poi.") || p.id.startsWith("address.") ? Me : Ee) : d.fitBounds(_t(p.bbox), 50, Me), t(13, R = void 0), t(48, G = void 0), t(14, W = -1)), t(50, Oe = p == null ? void 0 : p.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    131072 && G !== R && t(48, G = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    393232 && d && d.setMarkers(G, p), n.$$.dirty[0] & /*searchValue*/
    2 && t(14, W = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController, trackProximity*/
    272 && d && d.setEventHandler((i) => {
      switch (i.type) {
        case "mapClick":
          w && Ct(i.coordinates);
          break;
        case "proximityChange":
          t(24, m = Re ? i.proximity : void 0);
          break;
        case "markerClick":
          {
            const j = R == null ? void 0 : R.find((Y) => Y.id === i.id);
            j && Fe(j);
          }
          break;
        case "markerMouseEnter":
          t(14, W = Se ? (R == null ? void 0 : R.findIndex((j) => j.id === i.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          t(14, W = -1);
          break;
      }
    }), n.$$.dirty[0] & /*selectedItemIndex*/
    16384 | n.$$.dirty[1] & /*mapController*/
    16 && (d == null || d.setSelectedMarker(W)), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && t(51, l = R == null ? void 0 : R[W]), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    16) {
      const i = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(u);
      d == null || d.setReverseMarker(i ? [Number(i[1]), Number(i[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    1048576 && le("select", l), n.$$.dirty[1] & /*picked*/
    262144 && le("pick", p), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && le("optionsVisibilityChange", Se && !!R), n.$$.dirty[0] & /*listFeatures*/
    8192 && le("featuresListed", R), n.$$.dirty[1] & /*markedFeatures*/
    131072 && le("featuresMarked", G), n.$$.dirty[0] & /*reverseActive*/
    1 && le("reverseToggle", w), n.$$.dirty[0] & /*searchValue*/
    2 && le("queryChange", u), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    16 && d && d.indicateReverse(w);
  }, [
    w,
    u,
    c,
    f,
    k,
    I,
    T,
    C,
    L,
    H,
    $,
    Je,
    be,
    R,
    W,
    Se,
    J,
    X,
    ae,
    Mt,
    xe,
    Lt,
    Ze,
    Fe,
    m,
    o,
    h,
    _,
    g,
    B,
    M,
    A,
    y,
    N,
    Z,
    d,
    b,
    P,
    oe,
    Re,
    ue,
    Ee,
    Me,
    We,
    je,
    pt,
    Tt,
    Xe,
    G,
    p,
    Oe,
    l,
    a,
    r,
    Rt,
    Et,
    It,
    St,
    zt,
    Pt,
    Ut,
    At,
    Wt,
    jt,
    Ot,
    Nt,
    Zt
  ];
}
let An = class extends ye {
  constructor(e) {
    super(), ge(
      this,
      e,
      Un,
      zn,
      me,
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
        proximity: 24,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 37,
        showPlaceType: 10,
        showResultsWhileTyping: 38,
        trackProximity: 39,
        types: 40,
        zoom: 41,
        maxZoom: 42,
        apiUrl: 43,
        fetchParameters: 44,
        iconsBaseUrl: 11,
        focus: 45,
        blur: 46,
        setQuery: 47
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
};
const Wn = new FinalizationRegistry((n) => {
  n.$destroy();
});
var x;
class Nn extends EventTarget {
  constructor({ target: t, ...l }) {
    super();
    tt(this, x, void 0);
    nt(this, x, new An({
      target: t,
      props: l
    }));
    for (const r of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      he(this, x).$on(r, (a) => this.dispatchEvent(a));
    Wn.register(this, he(this, x));
  }
  setOptions(t) {
    he(this, x).$set(t);
  }
  setQuery(t, l = !0) {
    var r;
    (r = he(this, x)) == null || r.setQuery(t, l);
  }
  focus() {
    var t;
    (t = he(this, x)) == null || t.focus();
  }
  blur() {
    var t;
    (t = he(this, x)) == null || t.blur();
  }
}
x = new WeakMap();
export {
  Nn as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
