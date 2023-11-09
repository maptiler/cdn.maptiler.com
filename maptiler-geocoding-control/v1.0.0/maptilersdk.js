var Nl = Object.defineProperty;
var xl = (r, t, e) => t in r ? Nl(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ys = (r, t, e) => (xl(r, typeof t != "symbol" ? t + "" : t, e), e), ua = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var $e = (r, t, e) => (ua(r, t, "read from private field"), e ? e.call(r) : t.get(r)), ms = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, bo = (r, t, e, n) => (ua(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
import * as Sl from "@maptiler/sdk";
function Et() {
}
function wl(r, t) {
  for (const e in t)
    r[e] = t[e];
  return (
    /** @type {T & S} */
    r
  );
}
function nu(r) {
  return r();
}
function la() {
  return /* @__PURE__ */ Object.create(null);
}
function Ir(r) {
  r.forEach(nu);
}
function ru(r) {
  return typeof r == "function";
}
function zr(r, t) {
  return r != r ? t == t : r !== t || r && typeof r == "object" || typeof r == "function";
}
let Po;
function Me(r, t) {
  return r === t ? !0 : (Po || (Po = document.createElement("a")), Po.href = t, r === Po.href);
}
function Ll(r) {
  return Object.keys(r).length === 0;
}
function bl(r, t, e, n) {
  if (r) {
    const i = iu(r, t, e, n);
    return r[0](i);
  }
}
function iu(r, t, e, n) {
  return r[1] && n ? wl(e.ctx.slice(), r[1](n(t))) : e.ctx;
}
function Pl(r, t, e, n) {
  if (r[2] && n) {
    const i = r[2](n(e));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        o[a] = t.dirty[a] | i[a];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Rl(r, t, e, n, i, o) {
  if (i) {
    const s = iu(t, e, n, o);
    r.p(s, i);
  }
}
function Ol(r) {
  if (r.ctx.length > 32) {
    const t = [], e = r.ctx.length / 32;
    for (let n = 0; n < e; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function ca(r) {
  return r ?? "";
}
function nt(r, t) {
  r.appendChild(t);
}
function Tt(r, t, e) {
  r.insertBefore(t, e || null);
}
function Dt(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function ht(r) {
  return document.createElement(r);
}
function Qn(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function Pr(r) {
  return document.createTextNode(r);
}
function rn() {
  return Pr(" ");
}
function Dl() {
  return Pr("");
}
function Ce(r, t, e, n) {
  return r.addEventListener(t, e, n), () => r.removeEventListener(t, e, n);
}
function Tl(r) {
  return function(t) {
    return t.preventDefault(), r.call(this, t);
  };
}
function P(r, t, e) {
  e == null ? r.removeAttribute(t) : r.getAttribute(t) !== e && r.setAttribute(t, e);
}
function Ml(r) {
  return Array.from(r.childNodes);
}
function $i(r, t) {
  t = "" + t, r.data !== t && (r.data = /** @type {string} */
  t);
}
function fa(r, t) {
  r.value = t ?? "";
}
function sn(r, t, e) {
  r.classList.toggle(t, !!e);
}
function Al(r, t, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(r, { detail: t, bubbles: e, cancelable: n });
}
let to;
function Zi(r) {
  to = r;
}
function ou() {
  if (!to)
    throw new Error("Function called outside component initialization");
  return to;
}
function Fl(r) {
  ou().$$.on_destroy.push(r);
}
function Bl() {
  const r = ou();
  return (t, e, { cancelable: n = !1 } = {}) => {
    const i = r.$$.callbacks[t];
    if (i) {
      const o = Al(
        /** @type {string} */
        t,
        e,
        { cancelable: n }
      );
      return i.slice().forEach((s) => {
        s.call(r, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ha(r, t) {
  const e = r.$$.callbacks[t.type];
  e && e.slice().forEach((n) => n.call(this, t));
}
const yi = [], xs = [];
let _i = [];
const ga = [], kl = /* @__PURE__ */ Promise.resolve();
let Ss = !1;
function Gl() {
  Ss || (Ss = !0, kl.then(su));
}
function ws(r) {
  _i.push(r);
}
const _s = /* @__PURE__ */ new Set();
let vi = 0;
function su() {
  if (vi !== 0)
    return;
  const r = to;
  do {
    try {
      for (; vi < yi.length; ) {
        const t = yi[vi];
        vi++, Zi(t), Vl(t.$$);
      }
    } catch (t) {
      throw yi.length = 0, vi = 0, t;
    }
    for (Zi(null), yi.length = 0, vi = 0; xs.length; )
      xs.pop()();
    for (let t = 0; t < _i.length; t += 1) {
      const e = _i[t];
      _s.has(e) || (_s.add(e), e());
    }
    _i.length = 0;
  } while (yi.length);
  for (; ga.length; )
    ga.pop()();
  Ss = !1, _s.clear(), Zi(r);
}
function Vl(r) {
  if (r.fragment !== null) {
    r.update(), Ir(r.before_update);
    const t = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, t), r.after_update.forEach(ws);
  }
}
function zl(r) {
  const t = [], e = [];
  _i.forEach((n) => r.indexOf(n) === -1 ? t.push(n) : e.push(n)), e.forEach((n) => n()), _i = t;
}
const Ao = /* @__PURE__ */ new Set();
let Wr;
function Fo() {
  Wr = {
    r: 0,
    c: [],
    p: Wr
    // parent group
  };
}
function Bo() {
  Wr.r || Ir(Wr.c), Wr = Wr.p;
}
function Vt(r, t) {
  r && r.i && (Ao.delete(r), r.i(t));
}
function ue(r, t, e, n) {
  if (r && r.o) {
    if (Ao.has(r))
      return;
    Ao.add(r), Wr.c.push(() => {
      Ao.delete(r), n && (e && r.d(1), n());
    }), r.o(t);
  } else
    n && n();
}
function pa(r) {
  return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r);
}
function Ul(r, t) {
  ue(r, 1, 1, () => {
    t.delete(r.key);
  });
}
function ql(r, t, e, n, i, o, s, a, u, l, c, f) {
  let h = r.length, g = o.length, p = h;
  const d = {};
  for (; p--; )
    d[r[p].key] = p;
  const v = [], _ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), E = [];
  for (p = g; p--; ) {
    const M = f(i, o, p), A = e(M);
    let L = s.get(A);
    L ? n && E.push(() => L.p(M, t)) : (L = l(A, M), L.c()), _.set(A, v[p] = L), A in d && C.set(A, Math.abs(p - d[A]));
  }
  const S = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
  function w(M) {
    Vt(M, 1), M.m(a, c), s.set(M.key, M), c = M.first, g--;
  }
  for (; h && g; ) {
    const M = v[g - 1], A = r[h - 1], L = M.key, F = A.key;
    M === A ? (c = M.first, h--, g--) : _.has(F) ? !s.has(L) || S.has(L) ? w(M) : N.has(F) ? h-- : C.get(L) > C.get(F) ? (N.add(L), w(M)) : (S.add(F), h--) : (u(A, s), h--);
  }
  for (; h--; ) {
    const M = r[h];
    _.has(M.key) || u(M, s);
  }
  for (; g; )
    w(v[g - 1]);
  return Ir(E), v;
}
function Rr(r) {
  r && r.c();
}
function cr(r, t, e) {
  const { fragment: n, after_update: i } = r.$$;
  n && n.m(t, e), ws(() => {
    const o = r.$$.on_mount.map(nu).filter(ru);
    r.$$.on_destroy ? r.$$.on_destroy.push(...o) : Ir(o), r.$$.on_mount = [];
  }), i.forEach(ws);
}
function fr(r, t) {
  const e = r.$$;
  e.fragment !== null && (zl(e.after_update), Ir(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Xl(r, t) {
  r.$$.dirty[0] === -1 && (yi.push(r), Gl(), r.$$.dirty.fill(0)), r.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ur(r, t, e, n, i, o, s = null, a = [-1]) {
  const u = to;
  Zi(r);
  const l = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: Et,
    not_equal: i,
    bound: la(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: la(),
    dirty: a,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  s && s(l.root);
  let c = !1;
  if (l.ctx = e ? e(r, t.props || {}, (f, h, ...g) => {
    const p = g.length ? g[0] : h;
    return l.ctx && i(l.ctx[f], l.ctx[f] = p) && (!l.skip_bound && l.bound[f] && l.bound[f](p), c && Xl(r, f)), h;
  }) : [], l.update(), c = !0, Ir(l.before_update), l.fragment = n ? n(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Ml(t.target);
      l.fragment && l.fragment.l(f), f.forEach(Dt);
    } else
      l.fragment && l.fragment.c();
    t.intro && Vt(r.$$.fragment), cr(r, t.target, t.anchor), su();
  }
  Zi(u);
}
class qr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ys(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ys(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    fr(this, 1), this.$destroy = Et;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!ru(e))
      return Et;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const i = n.indexOf(e);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Ll(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Yl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Yl);
function Hl(r) {
  let t, e;
  return {
    c() {
      t = Qn("svg"), e = Qn("path"), P(e, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), P(t, "viewBox", "0 0 14 14"), P(t, "width", "13"), P(t, "height", "13"), P(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Tt(n, t, i), nt(t, e);
    },
    p: Et,
    i: Et,
    o: Et,
    d(n) {
      n && Dt(t);
    }
  };
}
class au extends qr {
  constructor(t) {
    super(), Ur(this, t, null, Hl, zr, {});
  }
}
function Wl(r) {
  let t, e;
  return {
    c() {
      t = Qn("svg"), e = Qn("path"), P(e, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), P(t, "viewBox", "0 0 30 30"), P(t, "fill", "none"), P(t, "xmlns", "http://www.w3.org/2000/svg"), P(t, "class", "svelte-d2loi5");
    },
    m(n, i) {
      Tt(n, t, i), nt(t, e);
    },
    p: Et,
    i: Et,
    o: Et,
    d(n) {
      n && Dt(t);
    }
  };
}
class uu extends qr {
  constructor(t) {
    super(), Ur(this, t, null, Wl, zr, {});
  }
}
function jl(r) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "area.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Tt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "area.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Dt(t);
    }
  };
}
function Kl(r) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "poi.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Tt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "poi.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Dt(t);
    }
  };
}
function Ql(r) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Tt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Dt(t);
    }
  };
}
function Zl(r) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "street.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Tt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "street.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Dt(t);
    }
  };
}
function Jl(r) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "road.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Tt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "road.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Dt(t);
    }
  };
}
function $l(r) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Tt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Dt(t);
    }
  };
}
function tc(r) {
  let t, e, n, i;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*imageUrl*/
      r[5]) || P(t, "src", e), P(
        t,
        "alt",
        /*category*/
        r[4]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(o, s) {
      Tt(o, t, s), n || (i = Ce(
        t,
        "error",
        /*error_handler*/
        r[13]
      ), n = !0);
    },
    p(o, s) {
      s & /*imageUrl*/
      32 && !Me(t.src, e = /*imageUrl*/
      o[5]) && P(t, "src", e), s & /*category*/
      16 && P(
        t,
        "alt",
        /*category*/
        o[4]
      );
    },
    d(o) {
      o && Dt(t), n = !1, i();
    }
  };
}
function da(r) {
  let t, e;
  return {
    c() {
      t = ht("span"), e = Pr(
        /*placeType*/
        r[6]
      ), P(t, "class", "secondary svelte-ltkwvy");
    },
    m(n, i) {
      Tt(n, t, i), nt(t, e);
    },
    p(n, i) {
      i & /*placeType*/
      64 && $i(
        e,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Dt(t);
    }
  };
}
function ec(r) {
  var M, A;
  let t, e, n, i, o, s, a, u, l = (
    /*feature*/
    r[0].place_name.replace(/,.*/, "") + ""
  ), c, f, h = (
    /*showPlaceType*/
    r[2] === "always" || /*showPlaceType*/
    r[2] && !/*feature*/
    r[0].address && /*feature*/
    ((M = r[0].properties) == null ? void 0 : M.kind) !== "road" && /*feature*/
    ((A = r[0].properties) == null ? void 0 : A.kind) !== "road_relation" && !/*feature*/
    r[0].id.startsWith("address.") && !/*feature*/
    r[0].id.startsWith("postal_code.") && (!/*feature*/
    r[0].id.startsWith("poi.") || !/*imageUrl*/
    r[5])
  ), g, p, d = (
    /*feature*/
    r[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), v, _, C;
  function E(L, F) {
    var X, R;
    return F & /*feature*/
    1 && (e = null), F & /*feature*/
    1 && (n = null), F & /*feature*/
    1 && (i = null), /*imageUrl*/
    L[5] ? tc : (
      /*feature*/
      L[0].address ? $l : (
        /*feature*/
        ((X = L[0].properties) == null ? void 0 : X.kind) === "road" || /*feature*/
        ((R = L[0].properties) == null ? void 0 : R.kind) === "road_relation" ? Jl : (e == null && (e = !!/*feature*/
        L[0].id.startsWith("address.")), e ? Zl : (n == null && (n = !!/*feature*/
        L[0].id.startsWith("postal_code.")), n ? Ql : (i == null && (i = !!/*feature*/
        L[0].id.startsWith("poi.")), i ? Kl : jl)))
      )
    );
  }
  let S = E(r, -1), N = S(r), w = h && da(r);
  return {
    c() {
      t = ht("li"), N.c(), o = rn(), s = ht("span"), a = ht("span"), u = ht("span"), c = Pr(l), f = rn(), w && w.c(), g = rn(), p = ht("span"), v = Pr(d), P(u, "class", "primary svelte-ltkwvy"), P(a, "class", "svelte-ltkwvy"), P(p, "class", "line2 svelte-ltkwvy"), P(s, "class", "texts svelte-ltkwvy"), P(t, "tabindex", "0"), P(
        t,
        "data-selected",
        /*selected*/
        r[1]
      ), P(t, "class", "svelte-ltkwvy"), sn(
        t,
        "selected",
        /*selected*/
        r[1]
      );
    },
    m(L, F) {
      Tt(L, t, F), N.m(t, null), nt(t, o), nt(t, s), nt(s, a), nt(a, u), nt(u, c), nt(a, f), w && w.m(a, null), nt(s, g), nt(s, p), nt(p, v), _ || (C = [
        Ce(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          r[11]
        ),
        Ce(
          t,
          "focus",
          /*focus_handler*/
          r[12]
        )
      ], _ = !0);
    },
    p(L, [F]) {
      var X, R;
      S === (S = E(L, F)) && N ? N.p(L, F) : (N.d(1), N = S(L), N && (N.c(), N.m(t, o))), F & /*feature*/
      1 && l !== (l = /*feature*/
      L[0].place_name.replace(/,.*/, "") + "") && $i(c, l), F & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      L[2] === "always" || /*showPlaceType*/
      L[2] && !/*feature*/
      L[0].address && /*feature*/
      ((X = L[0].properties) == null ? void 0 : X.kind) !== "road" && /*feature*/
      ((R = L[0].properties) == null ? void 0 : R.kind) !== "road_relation" && !/*feature*/
      L[0].id.startsWith("address.") && !/*feature*/
      L[0].id.startsWith("postal_code.") && (!/*feature*/
      L[0].id.startsWith("poi.") || !/*imageUrl*/
      L[5])), h ? w ? w.p(L, F) : (w = da(L), w.c(), w.m(a, null)) : w && (w.d(1), w = null), F & /*feature*/
      1 && d !== (d = /*feature*/
      L[0].place_name.replace(/[^,]*,?\s*/, "") + "") && $i(v, d), F & /*selected*/
      2 && P(
        t,
        "data-selected",
        /*selected*/
        L[1]
      ), F & /*selected*/
      2 && sn(
        t,
        "selected",
        /*selected*/
        L[1]
      );
    },
    i: Et,
    o: Et,
    d(L) {
      L && Dt(t), N.d(), w && w.d(), _ = !1, Ir(C);
    }
  };
}
function nc(r, t, e) {
  var C;
  let n, i, { feature: o } = t, { selected: s = !1 } = t, { showPlaceType: a } = t, { missingIconsCache: u } = t, { iconsBaseUrl: l } = t;
  const c = (C = o.properties) == null ? void 0 : C.categories;
  let f, h, g = 0;
  function p(E) {
    h && u.add(h), e(9, g++, g);
  }
  function d(E) {
    ha.call(this, r, E);
  }
  function v(E) {
    ha.call(this, r, E);
  }
  const _ = (E) => p(E.currentTarget);
  return r.$$set = (E) => {
    "feature" in E && e(0, o = E.feature), "selected" in E && e(1, s = E.selected), "showPlaceType" in E && e(2, a = E.showPlaceType), "missingIconsCache" in E && e(8, u = E.missingIconsCache), "iconsBaseUrl" in E && e(3, l = E.iconsBaseUrl);
  }, r.$$.update = () => {
    var E, S, N, w;
    if (r.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    1848)
      do
        e(10, n--, n), e(4, f = c == null ? void 0 : c[n]), e(5, h = f ? l + f.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!h || u.has(h)));
    r.$$.dirty & /*feature*/
    1 && e(6, i = o.id.startsWith("poi.") ? (S = (E = o.properties) == null ? void 0 : E.categories) == null ? void 0 : S.join(", ") : ((w = (N = o.properties) == null ? void 0 : N.place_type_name) == null ? void 0 : w[0]) ?? o.place_type[0]);
  }, e(10, n = (c == null ? void 0 : c.length) ?? 0), [
    o,
    s,
    a,
    l,
    f,
    h,
    i,
    p,
    u,
    g,
    n,
    d,
    v,
    _
  ];
}
class rc extends qr {
  constructor(t) {
    super(), Ur(this, t, nc, ec, zr, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function ic(r) {
  let t;
  return {
    c() {
      t = ht("div"), t.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', P(t, "class", "svelte-7cmwmc");
    },
    m(e, n) {
      Tt(e, t, n);
    },
    p: Et,
    i: Et,
    o: Et,
    d(e) {
      e && Dt(t);
    }
  };
}
class oc extends qr {
  constructor(t) {
    super(), Ur(this, t, null, ic, zr, {});
  }
}
function sc(r) {
  let t, e;
  return {
    c() {
      t = Qn("svg"), e = Qn("path"), P(e, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), P(t, "viewBox", "0 0 60.006 21.412"), P(t, "width", "14"), P(t, "height", "20"), P(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Tt(n, t, i), nt(t, e);
    },
    p: Et,
    i: Et,
    o: Et,
    d(n) {
      n && Dt(t);
    }
  };
}
class ac extends qr {
  constructor(t) {
    super(), Ur(this, t, null, sc, zr, {});
  }
}
function uc(r) {
  let t, e;
  return {
    c() {
      t = Qn("svg"), e = Qn("path"), P(e, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), P(t, "width", "14"), P(t, "height", "14"), P(t, "viewBox", "0 0 15 15"), P(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Tt(n, t, i), nt(t, e);
    },
    p: Et,
    i: Et,
    o: Et,
    d(n) {
      n && Dt(t);
    }
  };
}
class lc extends qr {
  constructor(t) {
    super(), Ur(this, t, null, uc, zr, {});
  }
}
function cc(r, t, e) {
  const n = t[1], i = t[0], o = n - i;
  return r === n && e ? r : ((r - i) % o + o) % o + i;
}
function va(r) {
  const t = [...r];
  return t[2] < t[0] && (t[2] += 360), t;
}
let Hi;
async function fc(r, t, e) {
  const n = r == null ? void 0 : r.getCenterAndZoom();
  for (const i of t ?? [])
    if (!(n && (i.minZoom != null && i.minZoom > n[0] || i.maxZoom != null && i.maxZoom < n[0]))) {
      if (i.type === "fixed")
        return i.coordinates.join(",");
      t:
        if (i.type === "client-geolocation") {
          if (Hi && i.cachedLocationExpiry && Hi.time + i.cachedLocationExpiry > Date.now()) {
            if (!Hi.coords)
              break t;
            return Hi.coords;
          }
          let o;
          try {
            return o = await new Promise((s, a) => {
              e.signal.addEventListener("abort", () => {
                a(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (u) => {
                  s(
                    [u.coords.longitude, u.coords.latitude].map((l) => l.toFixed(6)).join(",")
                  );
                },
                (u) => {
                  a(u);
                },
                i
              );
            }), o;
          } catch {
          } finally {
            i.cachedLocationExpiry && (Hi = {
              time: Date.now(),
              coords: o
            });
          }
          if (e.signal.aborted)
            return;
        }
      if (i.type === "server-geolocation")
        return "ip";
      if (n && i.type === "map-center")
        return n[1].toFixed(6) + "," + n[2].toFixed(6);
    }
}
function ya(r, t, e) {
  const n = r.slice();
  return n[77] = t[e], n[79] = e, n;
}
function ma(r) {
  let t, e;
  return t = new oc({}), {
    c() {
      Rr(t.$$.fragment);
    },
    m(n, i) {
      cr(t, n, i), e = !0;
    },
    i(n) {
      e || (Vt(t.$$.fragment, n), e = !0);
    },
    o(n) {
      ue(t.$$.fragment, n), e = !1;
    },
    d(n) {
      fr(t, n);
    }
  };
}
function _a(r) {
  let t, e, n, i, o;
  return e = new ac({}), {
    c() {
      t = ht("button"), Rr(e.$$.fragment), P(t, "type", "button"), P(
        t,
        "title",
        /*reverseButtonTitle*/
        r[9]
      ), P(t, "class", "svelte-1r7dvt7"), sn(
        t,
        "active",
        /*reverseActive*/
        r[0]
      );
    },
    m(s, a) {
      Tt(s, t, a), cr(e, t, null), n = !0, i || (o = Ce(
        t,
        "click",
        /*click_handler_2*/
        r[63]
      ), i = !0);
    },
    p(s, a) {
      (!n || a[0] & /*reverseButtonTitle*/
      512) && P(
        t,
        "title",
        /*reverseButtonTitle*/
        s[9]
      ), (!n || a[0] & /*reverseActive*/
      1) && sn(
        t,
        "active",
        /*reverseActive*/
        s[0]
      );
    },
    i(s) {
      n || (Vt(e.$$.fragment, s), n = !0);
    },
    o(s) {
      ue(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Dt(t), fr(e), i = !1, o();
    }
  };
}
function hc(r) {
  let t, e = [], n = /* @__PURE__ */ new Map(), i, o, s, a = pa(
    /*listFeatures*/
    r[13]
  );
  const u = (l) => (
    /*feature*/
    l[77].id + /*feature*/
    (l[77].address ? "," + /*feature*/
    l[77].address : "")
  );
  for (let l = 0; l < a.length; l += 1) {
    let c = ya(r, a, l), f = u(c);
    n.set(f, e[l] = Ea(f, c));
  }
  return {
    c() {
      t = ht("ul");
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      P(t, "class", "svelte-1r7dvt7");
    },
    m(l, c) {
      Tt(l, t, c);
      for (let f = 0; f < e.length; f += 1)
        e[f] && e[f].m(t, null);
      i = !0, o || (s = [
        Ce(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          r[67]
        ),
        Ce(
          t,
          "blur",
          /*blur_handler_1*/
          r[68]
        )
      ], o = !0);
    },
    p(l, c) {
      c[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (a = pa(
        /*listFeatures*/
        l[13]
      ), Fo(), e = ql(e, c, u, 1, l, a, n, t, Ul, Ea, null, ya), Bo());
    },
    i(l) {
      if (!i) {
        for (let c = 0; c < a.length; c += 1)
          Vt(e[c]);
        i = !0;
      }
    },
    o(l) {
      for (let c = 0; c < e.length; c += 1)
        ue(e[c]);
      i = !1;
    },
    d(l) {
      l && Dt(t);
      for (let c = 0; c < e.length; c += 1)
        e[c].d();
      o = !1, Ir(s);
    }
  };
}
function gc(r) {
  let t, e, n, i, o, s;
  return e = new uu({}), {
    c() {
      t = ht("div"), Rr(e.$$.fragment), n = rn(), i = ht("div"), o = Pr(
        /*noResultsMessage*/
        r[7]
      ), P(i, "class", "svelte-1r7dvt7"), P(t, "class", "no-results svelte-1r7dvt7");
    },
    m(a, u) {
      Tt(a, t, u), cr(e, t, null), nt(t, n), nt(t, i), nt(i, o), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*noResultsMessage*/
      128) && $i(
        o,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      s || (Vt(e.$$.fragment, a), s = !0);
    },
    o(a) {
      ue(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Dt(t), fr(e);
    }
  };
}
function pc(r) {
  let t = "", e;
  return {
    c() {
      e = Pr(t);
    },
    m(n, i) {
      Tt(n, e, i);
    },
    p: Et,
    i: Et,
    o: Et,
    d(n) {
      n && Dt(e);
    }
  };
}
function dc(r) {
  let t, e, n, i, o, s, a, u, l, c, f;
  return e = new uu({}), u = new au({}), {
    c() {
      t = ht("div"), Rr(e.$$.fragment), n = rn(), i = ht("div"), o = Pr(
        /*errorMessage*/
        r[6]
      ), s = rn(), a = ht("button"), Rr(u.$$.fragment), P(i, "class", "svelte-1r7dvt7"), P(a, "class", "svelte-1r7dvt7"), P(t, "class", "error svelte-1r7dvt7");
    },
    m(h, g) {
      Tt(h, t, g), cr(e, t, null), nt(t, n), nt(t, i), nt(i, o), nt(t, s), nt(t, a), cr(u, a, null), l = !0, c || (f = Ce(
        a,
        "click",
        /*click_handler_3*/
        r[64]
      ), c = !0);
    },
    p(h, g) {
      (!l || g[0] & /*errorMessage*/
      64) && $i(
        o,
        /*errorMessage*/
        h[6]
      );
    },
    i(h) {
      l || (Vt(e.$$.fragment, h), Vt(u.$$.fragment, h), l = !0);
    },
    o(h) {
      ue(e.$$.fragment, h), ue(u.$$.fragment, h), l = !1;
    },
    d(h) {
      h && Dt(t), fr(e), fr(u), c = !1, f();
    }
  };
}
function Ea(r, t) {
  let e, n, i;
  function o() {
    return (
      /*mouseenter_handler*/
      t[65](
        /*i*/
        t[79]
      )
    );
  }
  function s() {
    return (
      /*focus_handler_1*/
      t[66](
        /*feature*/
        t[77]
      )
    );
  }
  return n = new rc({
    props: {
      feature: (
        /*feature*/
        t[77]
      ),
      showPlaceType: (
        /*showPlaceType*/
        t[10]
      ),
      selected: (
        /*selectedItemIndex*/
        t[14] === /*i*/
        t[79]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        t[19]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        t[11]
      )
    }
  }), n.$on("mouseenter", o), n.$on("focus", s), {
    key: r,
    first: null,
    c() {
      e = Dl(), Rr(n.$$.fragment), this.first = e;
    },
    m(a, u) {
      Tt(a, e, u), cr(n, a, u), i = !0;
    },
    p(a, u) {
      t = a;
      const l = {};
      u[0] & /*listFeatures*/
      8192 && (l.feature = /*feature*/
      t[77]), u[0] & /*showPlaceType*/
      1024 && (l.showPlaceType = /*showPlaceType*/
      t[10]), u[0] & /*selectedItemIndex, listFeatures*/
      24576 && (l.selected = /*selectedItemIndex*/
      t[14] === /*i*/
      t[79]), u[0] & /*iconsBaseUrl*/
      2048 && (l.iconsBaseUrl = /*iconsBaseUrl*/
      t[11]), n.$set(l);
    },
    i(a) {
      i || (Vt(n.$$.fragment, a), i = !0);
    },
    o(a) {
      ue(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && Dt(e), fr(n, a);
    }
  };
}
function vc(r) {
  let t, e, n, i, o, s, a, u, l, c, f, h, g, p, d, v, _, C, E, S;
  i = new lc({}), c = new au({});
  let N = (
    /*abortController*/
    r[18] && ma()
  ), w = (
    /*enableReverse*/
    r[5] === !0 && _a(r)
  );
  const M = (
    /*#slots*/
    r[55].default
  ), A = bl(
    M,
    r,
    /*$$scope*/
    r[54],
    null
  ), L = [dc, pc, gc, hc], F = [];
  function X(R, Y) {
    var D, H;
    return (
      /*error*/
      R[17] ? 0 : (
        /*focusedDelayed*/
        R[15] ? (
          /*listFeatures*/
          ((D = R[13]) == null ? void 0 : D.length) === 0 ? 2 : (
            /*focusedDelayed*/
            R[15] && /*listFeatures*/
            ((H = R[13]) != null && H.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(d = X(r)) && (v = F[d] = L[d](r)), {
    c() {
      t = ht("form"), e = ht("div"), n = ht("button"), Rr(i.$$.fragment), o = rn(), s = ht("input"), a = rn(), u = ht("div"), l = ht("button"), Rr(c.$$.fragment), f = rn(), N && N.c(), h = rn(), w && w.c(), g = rn(), A && A.c(), p = rn(), v && v.c(), P(n, "class", "search-button svelte-1r7dvt7"), P(n, "type", "button"), P(
        s,
        "placeholder",
        /*placeholder*/
        r[8]
      ), P(
        s,
        "aria-label",
        /*placeholder*/
        r[8]
      ), P(s, "class", "svelte-1r7dvt7"), P(l, "type", "button"), P(
        l,
        "title",
        /*clearButtonTitle*/
        r[3]
      ), P(l, "class", "svelte-1r7dvt7"), P(u, "class", "clear-button-container svelte-1r7dvt7"), sn(
        u,
        "displayable",
        /*searchValue*/
        r[1] !== ""
      ), P(e, "class", "input-group svelte-1r7dvt7"), P(t, "tabindex", "0"), P(t, "class", _ = ca(
        /*className*/
        r[2]
      ) + " svelte-1r7dvt7"), sn(
        t,
        "can-collapse",
        /*collapsed*/
        r[4] && /*searchValue*/
        r[1] === ""
      );
    },
    m(R, Y) {
      Tt(R, t, Y), nt(t, e), nt(e, n), cr(i, n, null), nt(e, o), nt(e, s), r[57](s), fa(
        s,
        /*searchValue*/
        r[1]
      ), nt(e, a), nt(e, u), nt(u, l), cr(c, l, null), nt(u, f), N && N.m(u, null), nt(e, h), w && w.m(e, null), nt(e, g), A && A.m(e, null), nt(t, p), ~d && F[d].m(t, null), C = !0, E || (S = [
        Ce(
          n,
          "click",
          /*click_handler*/
          r[56]
        ),
        Ce(
          s,
          "input",
          /*input_1_input_handler*/
          r[58]
        ),
        Ce(
          s,
          "focus",
          /*focus_handler*/
          r[59]
        ),
        Ce(
          s,
          "blur",
          /*blur_handler*/
          r[60]
        ),
        Ce(
          s,
          "keydown",
          /*handleKeyDown*/
          r[21]
        ),
        Ce(
          s,
          "input",
          /*input_handler*/
          r[61]
        ),
        Ce(
          l,
          "click",
          /*click_handler_1*/
          r[62]
        ),
        Ce(t, "submit", Tl(
          /*handleOnSubmit*/
          r[20]
        ))
      ], E = !0);
    },
    p(R, Y) {
      (!C || Y[0] & /*placeholder*/
      256) && P(
        s,
        "placeholder",
        /*placeholder*/
        R[8]
      ), (!C || Y[0] & /*placeholder*/
      256) && P(
        s,
        "aria-label",
        /*placeholder*/
        R[8]
      ), Y[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      R[1] && fa(
        s,
        /*searchValue*/
        R[1]
      ), (!C || Y[0] & /*clearButtonTitle*/
      8) && P(
        l,
        "title",
        /*clearButtonTitle*/
        R[3]
      ), /*abortController*/
      R[18] ? N ? Y[0] & /*abortController*/
      262144 && Vt(N, 1) : (N = ma(), N.c(), Vt(N, 1), N.m(u, null)) : N && (Fo(), ue(N, 1, 1, () => {
        N = null;
      }), Bo()), (!C || Y[0] & /*searchValue*/
      2) && sn(
        u,
        "displayable",
        /*searchValue*/
        R[1] !== ""
      ), /*enableReverse*/
      R[5] === !0 ? w ? (w.p(R, Y), Y[0] & /*enableReverse*/
      32 && Vt(w, 1)) : (w = _a(R), w.c(), Vt(w, 1), w.m(e, g)) : w && (Fo(), ue(w, 1, 1, () => {
        w = null;
      }), Bo()), A && A.p && (!C || Y[1] & /*$$scope*/
      8388608) && Rl(
        A,
        M,
        R,
        /*$$scope*/
        R[54],
        C ? Pl(
          M,
          /*$$scope*/
          R[54],
          Y,
          null
        ) : Ol(
          /*$$scope*/
          R[54]
        ),
        null
      );
      let D = d;
      d = X(R), d === D ? ~d && F[d].p(R, Y) : (v && (Fo(), ue(F[D], 1, 1, () => {
        F[D] = null;
      }), Bo()), ~d ? (v = F[d], v ? v.p(R, Y) : (v = F[d] = L[d](R), v.c()), Vt(v, 1), v.m(t, null)) : v = null), (!C || Y[0] & /*className*/
      4 && _ !== (_ = ca(
        /*className*/
        R[2]
      ) + " svelte-1r7dvt7")) && P(t, "class", _), (!C || Y[0] & /*className, collapsed, searchValue*/
      22) && sn(
        t,
        "can-collapse",
        /*collapsed*/
        R[4] && /*searchValue*/
        R[1] === ""
      );
    },
    i(R) {
      C || (Vt(i.$$.fragment, R), Vt(c.$$.fragment, R), Vt(N), Vt(w), Vt(A, R), Vt(v), C = !0);
    },
    o(R) {
      ue(i.$$.fragment, R), ue(c.$$.fragment, R), ue(N), ue(w), ue(A, R), ue(v), C = !1;
    },
    d(R) {
      R && Dt(t), fr(i), r[57](null), fr(c), N && N.d(), w && w.d(), A && A.d(R), ~d && F[d].d(), E = !1, Ir(S);
    }
  };
}
function yc(r, t, e) {
  let n, { $$slots: i = {}, $$scope: o } = t, { class: s = void 0 } = t, { apiKey: a } = t, { bbox: u = void 0 } = t, { clearButtonTitle: l = "clear" } = t, { clearOnBlur: c = !1 } = t, { collapsed: f = !1 } = t, { country: h = void 0 } = t, { debounceSearch: g = 200 } = t, { enableReverse: p = !1 } = t, { errorMessage: d = "Something went wrong…" } = t, { filter: v = () => !0 } = t, { flyTo: _ = !0 } = t, { fuzzyMatch: C = !0 } = t, { language: E = void 0 } = t, { limit: S = void 0 } = t, { mapController: N = void 0 } = t, { minLength: w = 2 } = t, { noResultsMessage: M = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = t, { placeholder: A = "Search" } = t, { proximity: L = [{ type: "server-geolocation" }] } = t, { reverseActive: F = p === "always" } = t, { reverseButtonTitle: X = "toggle reverse geocoding" } = t, { searchValue: R = "" } = t, { showFullGeometry: Y = !0 } = t, { showPlaceType: D = "ifNeeded" } = t, { showResultsWhileTyping: H = !0 } = t, { types: rt = void 0 } = t, { zoom: wt = 16 } = t, { maxZoom: kt = 18 } = t, { apiUrl: ge = "https://api.maptiler.com/geocoding" } = t, { fetchParameters: or = {} } = t, { iconsBaseUrl: Je = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.0.0/icons/" } = t, { adjustUrlQuery: Cn = (x) => {
  } } = t;
  function Nn() {
    Gn.focus();
  }
  function gi() {
    Gn.blur();
  }
  function sr(x, Gt = !0) {
    e(1, R = x), Gt ? (e(14, Mt = -1), oa()) : (ps(), setTimeout(() => {
      Gn.focus(), Gn.select();
    }));
  }
  function il() {
    e(13, lt = void 0), e(51, it = void 0), e(14, Mt = -1);
  }
  function ol() {
    e(50, pe = []), e(51, it = void 0);
  }
  let pi = !1, lt, pe, it, ia = "", Gn, Mt = -1, Vn, xo = [], Hr, di, So, hs;
  const sl = /* @__PURE__ */ new Set(), Cr = Bl();
  Fl(() => {
    N && (N.setEventHandler(void 0), N.indicateReverse(!1), N.setSelectedMarker(-1), N.setMarkers(void 0, void 0));
  });
  function oa(x) {
    if (di && (clearTimeout(di), di = void 0), Mt > -1 && lt)
      e(51, it = lt[Mt]), e(1, R = it.place_name.replace(/,.*/, "")), e(17, Vn = void 0), e(50, pe = void 0), e(14, Mt = -1);
    else if (R) {
      const Gt = x || !sa();
      gs(R, { exact: !0 }).then(() => {
        e(50, pe = lt), e(51, it = void 0), Gt && al();
      }).catch((zn) => e(17, Vn = zn));
    }
  }
  function sa() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(R);
  }
  async function gs(x, { byId: Gt = !1, exact: zn = !1 } = {}) {
    e(17, Vn = void 0), Hr == null || Hr.abort();
    const Un = new AbortController();
    e(18, Hr = Un);
    try {
      const Ee = sa(), xn = new URLSearchParams();
      if (E !== void 0 && xn.set("language", Array.isArray(E) ? E.join(",") : E ?? ""), rt && xn.set("types", rt.join(",")), u && xn.set("bbox", u.map((Lo) => Lo.toFixed(6)).join(",")), h && xn.set("country", Array.isArray(h) ? h.join(",") : h), !Gt && !Ee) {
        const Lo = await fc(N, L, Un);
        Lo && xn.set("proximity", Lo), (zn || !H) && xn.set("autocomplete", "false"), xn.set("fuzzyMatch", String(C));
      }
      S !== void 0 && (!Ee || (rt == null ? void 0 : rt.length) === 1) && xn.set("limit", String(S)), xn.set("key", a), Cn(xn);
      const wo = ge + "/" + encodeURIComponent(x) + ".json?" + xn.toString();
      if (wo === ia) {
        Gt ? (e(13, lt = void 0), e(51, it = xo[0])) : e(13, lt = xo);
        return;
      }
      ia = wo;
      const aa = await fetch(wo, { signal: Un.signal, ...or });
      if (!aa.ok)
        throw new Error();
      const vs = await aa.json();
      Cr("response", { url: wo, featureCollection: vs }), Gt ? (e(13, lt = void 0), e(51, it = vs.features[0]), xo = [it]) : (e(13, lt = vs.features.filter(v)), xo = lt, Ee && Gn.focus());
    } catch (Ee) {
      if (Ee && typeof Ee == "object" && "name" in Ee && Ee.name === "AbortError")
        return;
      throw Ee;
    } finally {
      Un === Hr && e(18, Hr = void 0);
    }
  }
  function al() {
    var zn;
    if (!(pe != null && pe.length) || !_)
      return;
    const x = [180, 90, -180, -90], Gt = !pe.some((Un) => !Un.matching_text);
    for (const Un of pe)
      if (Gt || !Un.matching_text)
        for (const Ee of [0, 1, 2, 3])
          x[Ee] = Math[Ee < 2 ? "min" : "max"](x[Ee], ((zn = Un.bbox) == null ? void 0 : zn[Ee]) ?? Un.center[Ee % 2]);
    N && pe.length > 0 && (it && x[0] === x[2] && x[1] === x[3] ? N.flyTo(it.center, wt) : N.fitBounds(va(x), 50, kt));
  }
  function ul(x) {
    e(0, F = p === "always"), sr(cc(x[0], [-180, 180], !0).toFixed(6) + "," + x[1].toFixed(6));
  }
  function ll(x) {
    if (!lt)
      return;
    let Gt = x.key === "ArrowDown" ? 1 : x.key === "ArrowUp" ? -1 : 0;
    Gt ? (Mt === -1 && Gt === -1 && e(14, Mt = lt.length), e(14, Mt += Gt), Mt >= lt.length && e(14, Mt = -1), x.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(x.key) && e(14, Mt = -1);
  }
  function ps(x = !0) {
    if (e(17, Vn = void 0), H) {
      if (di && clearTimeout(di), R.length < w)
        return;
      const Gt = R;
      di = window.setTimeout(
        () => {
          gs(Gt).catch((zn) => e(17, Vn = zn));
        },
        x ? g : 0
      );
    } else
      e(13, lt = void 0), e(17, Vn = void 0);
  }
  function ds(x) {
    e(51, it = x), e(1, R = x.place_name), e(14, Mt = -1);
  }
  const cl = () => Gn.focus();
  function fl(x) {
    xs[x ? "unshift" : "push"](() => {
      Gn = x, e(16, Gn);
    });
  }
  function hl() {
    R = this.value, e(1, R), e(12, pi), e(26, c);
  }
  const gl = () => e(12, pi = !0), pl = () => e(12, pi = !1), dl = () => ps(), vl = () => {
    e(1, R = ""), Gn.focus();
  }, yl = () => e(0, F = !F), ml = () => e(17, Vn = void 0), _l = (x) => e(14, Mt = x), El = (x) => ds(x), Il = () => e(14, Mt = -1), Cl = () => {
  };
  return r.$$set = (x) => {
    "class" in x && e(2, s = x.class), "apiKey" in x && e(24, a = x.apiKey), "bbox" in x && e(25, u = x.bbox), "clearButtonTitle" in x && e(3, l = x.clearButtonTitle), "clearOnBlur" in x && e(26, c = x.clearOnBlur), "collapsed" in x && e(4, f = x.collapsed), "country" in x && e(27, h = x.country), "debounceSearch" in x && e(28, g = x.debounceSearch), "enableReverse" in x && e(5, p = x.enableReverse), "errorMessage" in x && e(6, d = x.errorMessage), "filter" in x && e(29, v = x.filter), "flyTo" in x && e(30, _ = x.flyTo), "fuzzyMatch" in x && e(31, C = x.fuzzyMatch), "language" in x && e(32, E = x.language), "limit" in x && e(33, S = x.limit), "mapController" in x && e(34, N = x.mapController), "minLength" in x && e(35, w = x.minLength), "noResultsMessage" in x && e(7, M = x.noResultsMessage), "placeholder" in x && e(8, A = x.placeholder), "proximity" in x && e(36, L = x.proximity), "reverseActive" in x && e(0, F = x.reverseActive), "reverseButtonTitle" in x && e(9, X = x.reverseButtonTitle), "searchValue" in x && e(1, R = x.searchValue), "showFullGeometry" in x && e(37, Y = x.showFullGeometry), "showPlaceType" in x && e(10, D = x.showPlaceType), "showResultsWhileTyping" in x && e(38, H = x.showResultsWhileTyping), "types" in x && e(39, rt = x.types), "zoom" in x && e(40, wt = x.zoom), "maxZoom" in x && e(41, kt = x.maxZoom), "apiUrl" in x && e(42, ge = x.apiUrl), "fetchParameters" in x && e(43, or = x.fetchParameters), "iconsBaseUrl" in x && e(11, Je = x.iconsBaseUrl), "adjustUrlQuery" in x && e(44, Cn = x.adjustUrlQuery), "$$scope" in x && e(54, o = x.$$scope);
  }, r.$$.update = () => {
    if (r.$$.dirty[0] & /*focused, clearOnBlur*/
    67112960 && setTimeout(() => {
      e(15, So = pi), c && !pi && e(1, R = "");
    }), r.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | r.$$.dirty[1] & /*minLength*/
    16 && R.length < w && (e(51, it = void 0), e(13, lt = void 0), e(17, Vn = void 0), e(50, pe = lt)), r.$$.dirty[1] & /*showFullGeometry, picked*/
    1048640 && Y && it && !it.address && it.geometry.type === "Point" && gs(it.id, { byId: !0 }).catch((x) => e(17, Vn = x)), r.$$.dirty[0] & /*flyTo*/
    1073741824 | r.$$.dirty[1] & /*mapController, picked, prevIdToFly, maxZoom, zoom*/
    3147272 && (N && it && it.id !== hs && _ && (!it.bbox || it.bbox[0] === it.bbox[2] && it.bbox[1] === it.bbox[3] ? N.flyTo(it.center, it.id.startsWith("poi.") || it.id.startsWith("address.") ? kt : wt) : N.fitBounds(va(it.bbox), 50, kt), e(13, lt = void 0), e(50, pe = void 0), e(14, Mt = -1)), e(52, hs = it == null ? void 0 : it.id)), r.$$.dirty[0] & /*listFeatures*/
    8192 | r.$$.dirty[1] & /*markedFeatures*/
    524288 && pe !== lt && e(50, pe = void 0), r.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    1572872 && N && N.setMarkers(pe, it), r.$$.dirty[0] & /*searchValue*/
    2 && e(14, Mt = -1), r.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | r.$$.dirty[1] & /*mapController*/
    8 && N && N.setEventHandler((x) => {
      switch (x.type) {
        case "mapClick":
          F && ul(x.coordinates);
          break;
        case "markerClick":
          {
            const Gt = lt == null ? void 0 : lt.find((zn) => zn.id === x.id);
            Gt && ds(Gt);
          }
          break;
        case "markerMouseEnter":
          e(14, Mt = So ? (lt == null ? void 0 : lt.findIndex((Gt) => Gt.id === x.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          e(14, Mt = -1);
          break;
      }
    }), r.$$.dirty[0] & /*selectedItemIndex*/
    16384 | r.$$.dirty[1] & /*mapController*/
    8 && (N == null || N.setSelectedMarker(Mt)), r.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && e(53, n = lt == null ? void 0 : lt[Mt]), r.$$.dirty[0] & /*searchValue*/
    2 | r.$$.dirty[1] & /*mapController*/
    8) {
      const x = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(R);
      N == null || N.setReverseMarker(x ? [Number(x[1]), Number(x[2])] : void 0);
    }
    r.$$.dirty[1] & /*selected*/
    4194304 && Cr("select", n), r.$$.dirty[1] & /*picked*/
    1048576 && Cr("pick", it), r.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && Cr("optionsVisibilityChange", So && !!lt), r.$$.dirty[0] & /*listFeatures*/
    8192 && Cr("featuresListed", lt), r.$$.dirty[1] & /*markedFeatures*/
    524288 && Cr("featuresMarked", pe), r.$$.dirty[0] & /*reverseActive*/
    1 && Cr("reverseToggle", F), r.$$.dirty[0] & /*searchValue*/
    2 && Cr("queryChange", R), r.$$.dirty[0] & /*reverseActive*/
    1 | r.$$.dirty[1] & /*mapController*/
    8 && N && N.indicateReverse(F);
  }, [
    F,
    R,
    s,
    l,
    f,
    p,
    d,
    M,
    A,
    X,
    D,
    Je,
    pi,
    lt,
    Mt,
    So,
    Gn,
    Vn,
    Hr,
    sl,
    oa,
    ll,
    ps,
    ds,
    a,
    u,
    c,
    h,
    g,
    v,
    _,
    C,
    E,
    S,
    N,
    w,
    L,
    Y,
    H,
    rt,
    wt,
    kt,
    ge,
    or,
    Cn,
    Nn,
    gi,
    sr,
    il,
    ol,
    pe,
    it,
    hs,
    n,
    o,
    i,
    cl,
    fl,
    hl,
    gl,
    pl,
    dl,
    vl,
    yl,
    ml,
    _l,
    El,
    Il,
    Cl
  ];
}
let mc = class extends qr {
  constructor(t) {
    super(), Ur(
      this,
      t,
      yc,
      vc,
      zr,
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
};
/**
 * splaytree v3.1.1
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
function _c(r, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
          return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              e = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              e.label = l[1];
              break;
            }
            if (l[0] === 6 && e.label < o[1]) {
              e.label = o[1], o = l;
              break;
            }
            if (o && e.label < o[2]) {
              e.label = o[2], e.ops.push(l);
              break;
            }
            o[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        l = t.call(r, e);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Or = (
  /** @class */
  function() {
    function r(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return r;
  }()
);
function Ec(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function Sr(r, t, e) {
  for (var n = new Or(null, null), i = n, o = n; ; ) {
    var s = e(r, t.key);
    if (s < 0) {
      if (t.left === null)
        break;
      if (e(r, t.left.key) < 0) {
        var a = t.left;
        if (t.left = a.right, a.right = t, t = a, t.left === null)
          break;
      }
      o.left = t, o = t, t = t.left;
    } else if (s > 0) {
      if (t.right === null)
        break;
      if (e(r, t.right.key) > 0) {
        var a = t.right;
        if (t.right = a.left, a.left = t, t = a, t.right === null)
          break;
      }
      i.right = t, i = t, t = t.right;
    } else
      break;
  }
  return i.right = t.left, o.left = t.right, t.left = n.right, t.right = n.left, t;
}
function Es(r, t, e, n) {
  var i = new Or(r, t);
  if (e === null)
    return i.left = i.right = null, i;
  e = Sr(r, e, n);
  var o = n(r, e.key);
  return o < 0 ? (i.left = e.left, i.right = e, e.left = null) : o >= 0 && (i.right = e.right, i.left = e, e.right = null), i;
}
function Ia(r, t, e) {
  var n = null, i = null;
  if (t) {
    t = Sr(r, t, e);
    var o = e(t.key, r);
    o === 0 ? (n = t.left, i = t.right) : o < 0 ? (i = t.right, t.right = null, n = t) : (n = t.left, t.left = null, i = t);
  }
  return { left: n, right: i };
}
function Ic(r, t, e) {
  return t === null ? r : (r === null || (t = Sr(r.key, t, e), t.left = r), t);
}
function Ls(r, t, e, n, i) {
  if (r) {
    n("" + t + (e ? "└── " : "├── ") + i(r) + `
`);
    var o = t + (e ? "    " : "│   ");
    r.left && Ls(r.left, o, !1, n, i), r.right && Ls(r.right, o, !0, n, i);
  }
}
var zs = (
  /** @class */
  function() {
    function r(t) {
      t === void 0 && (t = Ec), this._root = null, this._size = 0, this._comparator = t;
    }
    return r.prototype.insert = function(t, e) {
      return this._size++, this._root = Es(t, e, this._root, this._comparator);
    }, r.prototype.add = function(t, e) {
      var n = new Or(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var i = this._comparator, o = Sr(t, this._root, i), s = i(t, o.key);
      return s === 0 ? this._root = o : (s < 0 ? (n.left = o.left, n.right = o, o.left = null) : s > 0 && (n.right = o.right, n.left = o, o.right = null), this._size++, this._root = n), this._root;
    }, r.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, r.prototype._remove = function(t, e, n) {
      var i;
      if (e === null)
        return null;
      e = Sr(t, e, n);
      var o = n(t, e.key);
      return o === 0 ? (e.left === null ? i = e.right : (i = Sr(t, e.left, n), i.right = e.right), this._size--, i) : e;
    }, r.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = Sr(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, r.prototype.findStatic = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var i = n(t, e.key);
        if (i === 0)
          return e;
        i < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, r.prototype.find = function(t) {
      return this._root && (this._root = Sr(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, r.prototype.contains = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var i = n(t, e.key);
        if (i === 0)
          return !0;
        i < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, r.prototype.forEach = function(t, e) {
      for (var n = this._root, i = [], o = !1; !o; )
        n !== null ? (i.push(n), n = n.left) : i.length !== 0 ? (n = i.pop(), t.call(e, n), n = n.right) : o = !0;
      return this;
    }, r.prototype.range = function(t, e, n, i) {
      for (var o = [], s = this._comparator, a = this._root, u; o.length !== 0 || a; )
        if (a)
          o.push(a), a = a.left;
        else {
          if (a = o.pop(), u = s(a.key, e), u > 0)
            break;
          if (s(a.key, t) >= 0 && n.call(i, a))
            return this;
          a = a.right;
        }
      return this;
    }, r.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.key;
        return t.push(n);
      }), t;
    }, r.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.data;
        return t.push(n);
      }), t;
    }, r.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, r.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, r.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, r.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, r.prototype.at = function(t) {
      for (var e = this._root, n = !1, i = 0, o = []; !n; )
        if (e)
          o.push(e), e = e.left;
        else if (o.length > 0) {
          if (e = o.pop(), i === t)
            return e;
          i++, e = e.right;
        } else
          n = !0;
      return null;
    }, r.prototype.next = function(t) {
      var e = this._root, n = null;
      if (t.right) {
        for (n = t.right; n.left; )
          n = n.left;
        return n;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? (n = e, e = e.left) : e = e.right;
      }
      return n;
    }, r.prototype.prev = function(t) {
      var e = this._root, n = null;
      if (t.left !== null) {
        for (n = t.left; n.right; )
          n = n.right;
        return n;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? e = e.left : (n = e, e = e.right);
      }
      return n;
    }, r.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, r.prototype.toList = function() {
      return Nc(this._root);
    }, r.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var i = t.length, o = this._comparator;
      if (n && Rs(t, e, 0, i - 1, o), this._root === null)
        this._root = bs(t, e, 0, i), this._size = i;
      else {
        var s = xc(this.toList(), Cc(t, e), o);
        i = this._size + i, this._root = Ps({ head: s }, 0, i);
      }
      return this;
    }, r.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(r.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.toString = function(t) {
      t === void 0 && (t = function(n) {
        return String(n.key);
      });
      var e = [];
      return Ls(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, r.prototype.update = function(t, e, n) {
      var i = this._comparator, o = Ia(t, this._root, i), s = o.left, a = o.right;
      i(t, e) < 0 ? a = Es(e, n, a, i) : s = Es(e, n, s, i), this._root = Ic(s, a, i);
    }, r.prototype.split = function(t) {
      return Ia(t, this._root, this._comparator);
    }, r.prototype[Symbol.iterator] = function() {
      var t;
      return _c(this, function(e) {
        switch (e.label) {
          case 0:
            t = this.minNode(), e.label = 1;
          case 1:
            return t ? [4, t] : [3, 3];
          case 2:
            return e.sent(), t = this.next(t), [3, 1];
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    }, r;
  }()
);
function bs(r, t, e, n) {
  var i = n - e;
  if (i > 0) {
    var o = e + Math.floor(i / 2), s = r[o], a = t[o], u = new Or(s, a);
    return u.left = bs(r, t, e, o), u.right = bs(r, t, o + 1, n), u;
  }
  return null;
}
function Cc(r, t) {
  for (var e = new Or(null, null), n = e, i = 0; i < r.length; i++)
    n = n.next = new Or(r[i], t[i]);
  return n.next = null, e.next;
}
function Nc(r) {
  for (var t = r, e = [], n = !1, i = new Or(null, null), o = i; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = o = o.next = e.pop(), t = t.right) : n = !0;
  return o.next = null, i.next;
}
function Ps(r, t, e) {
  var n = e - t;
  if (n > 0) {
    var i = t + Math.floor(n / 2), o = Ps(r, t, i), s = r.head;
    return s.left = o, r.head = r.head.next, s.right = Ps(r, i + 1, e), s;
  }
  return null;
}
function xc(r, t, e) {
  for (var n = new Or(null, null), i = n, o = r, s = t; o !== null && s !== null; )
    e(o.key, s.key) < 0 ? (i.next = o, o = o.next) : (i.next = s, s = s.next), i = i.next;
  return o !== null ? i.next = o : s !== null && (i.next = s), n.next;
}
function Rs(r, t, e, n, i) {
  if (!(e >= n)) {
    for (var o = r[e + n >> 1], s = e - 1, a = n + 1; ; ) {
      do
        s++;
      while (i(r[s], o) < 0);
      do
        a--;
      while (i(r[a], o) > 0);
      if (s >= a)
        break;
      var u = r[s];
      r[s] = r[a], r[a] = u, u = t[s], t[s] = t[a], t[a] = u;
    }
    Rs(r, t, e, a, i), Rs(r, t, a + 1, n, i);
  }
}
function _n(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ca(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function Se(r, t, e) {
  return t && Ca(r.prototype, t), e && Ca(r, e), r;
}
var Wi = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Os = function(t, e) {
  if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y)
    return null;
  var n = t.ll.x < e.ll.x ? e.ll.x : t.ll.x, i = t.ur.x < e.ur.x ? t.ur.x : e.ur.x, o = t.ll.y < e.ll.y ? e.ll.y : t.ll.y, s = t.ur.y < e.ur.y ? t.ur.y : e.ur.y;
  return {
    ll: {
      x: n,
      y: o
    },
    ur: {
      x: i,
      y: s
    }
  };
}, wr = Number.EPSILON;
wr === void 0 && (wr = Math.pow(2, -52));
var Sc = wr * wr, Ds = function(t, e) {
  if (-wr < t && t < wr && -wr < e && e < wr)
    return 0;
  var n = t - e;
  return n * n < Sc * t * e ? 0 : t < e ? -1 : 1;
}, wc = /* @__PURE__ */ function() {
  function r() {
    _n(this, r), this.reset();
  }
  return Se(r, [{
    key: "reset",
    value: function() {
      this.xRounder = new Na(), this.yRounder = new Na();
    }
  }, {
    key: "round",
    value: function(e, n) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(n)
      };
    }
  }]), r;
}(), Na = /* @__PURE__ */ function() {
  function r() {
    _n(this, r), this.tree = new zs(), this.round(0);
  }
  return Se(r, [{
    key: "round",
    value: function(e) {
      var n = this.tree.add(e), i = this.tree.prev(n);
      if (i !== null && Ds(n.key, i.key) === 0)
        return this.tree.remove(e), i.key;
      var o = this.tree.next(n);
      return o !== null && Ds(n.key, o.key) === 0 ? (this.tree.remove(e), o.key) : e;
    }
  }]), r;
}(), eo = new wc(), Ji = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, lu = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, xa = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: n.x - t.x,
    y: n.y - t.y
  }, s = Ji(i, o);
  return Ds(s, 0);
}, Vo = function(t) {
  return Math.sqrt(lu(t, t));
}, Lc = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return Ji(o, i) / Vo(o) / Vo(i);
}, bc = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return lu(o, i) / Vo(o) / Vo(i);
}, Sa = function(t, e, n) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (n - t.y),
    y: n
  };
}, wa = function(t, e, n) {
  return e.x === 0 ? null : {
    x: n,
    y: t.y + e.y / e.x * (n - t.x)
  };
}, Pc = function(t, e, n, i) {
  if (e.x === 0)
    return wa(n, i, t.x);
  if (i.x === 0)
    return wa(t, e, n.x);
  if (e.y === 0)
    return Sa(n, i, t.y);
  if (i.y === 0)
    return Sa(t, e, n.y);
  var o = Ji(e, i);
  if (o == 0)
    return null;
  var s = {
    x: n.x - t.x,
    y: n.y - t.y
  }, a = Ji(s, e) / o, u = Ji(s, i) / o, l = t.x + u * e.x, c = n.x + a * i.x, f = t.y + u * e.y, h = n.y + a * i.y, g = (l + c) / 2, p = (f + h) / 2;
  return {
    x: g,
    y: p
  };
}, Hn = /* @__PURE__ */ function() {
  Se(r, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, n) {
      var i = r.comparePoints(e.point, n.point);
      return i !== 0 ? i : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : zo.compare(e.segment, n.segment));
    }
    // for ordering points in sweep line order
  }, {
    key: "comparePoints",
    value: function(e, n) {
      return e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0;
    }
    // Warning: 'point' input will be modified and re-used (for performance)
  }]);
  function r(t, e) {
    _n(this, r), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return Se(r, [{
    key: "link",
    value: function(e) {
      if (e.point === this.point)
        throw new Error("Tried to link already linked events");
      for (var n = e.point.events, i = 0, o = n.length; i < o; i++) {
        var s = n[i];
        this.point.events.push(s), s.point = this.point;
      }
      this.checkForConsuming();
    }
    /* Do a pass over our linked events and check to see if any pair
     * of segments match, and should be consumed. */
  }, {
    key: "checkForConsuming",
    value: function() {
      for (var e = this.point.events.length, n = 0; n < e; n++) {
        var i = this.point.events[n];
        if (i.segment.consumedBy === void 0)
          for (var o = n + 1; o < e; o++) {
            var s = this.point.events[o];
            s.consumedBy === void 0 && i.otherSE.point.events === s.otherSE.point.events && i.segment.consume(s.segment);
          }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function() {
      for (var e = [], n = 0, i = this.point.events.length; n < i; n++) {
        var o = this.point.events[n];
        o !== this && !o.segment.ringOut && o.segment.isInResult() && e.push(o);
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
  }, {
    key: "getLeftmostComparator",
    value: function(e) {
      var n = this, i = /* @__PURE__ */ new Map(), o = function(a) {
        var u = a.otherSE;
        i.set(a, {
          sine: Lc(n.point, e.point, u.point),
          cosine: bc(n.point, e.point, u.point)
        });
      };
      return function(s, a) {
        i.has(s) || o(s), i.has(a) || o(a);
        var u = i.get(s), l = u.sine, c = u.cosine, f = i.get(a), h = f.sine, g = f.cosine;
        return l >= 0 && h >= 0 ? c < g ? 1 : c > g ? -1 : 0 : l < 0 && h < 0 ? c < g ? -1 : c > g ? 1 : 0 : h < l ? -1 : h > l ? 1 : 0;
      };
    }
  }]), r;
}(), Rc = 0, zo = /* @__PURE__ */ function() {
  Se(r, null, [{
    key: "compare",
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
    value: function(e, n) {
      var i = e.leftSE.point.x, o = n.leftSE.point.x, s = e.rightSE.point.x, a = n.rightSE.point.x;
      if (a < i)
        return 1;
      if (s < o)
        return -1;
      var u = e.leftSE.point.y, l = n.leftSE.point.y, c = e.rightSE.point.y, f = n.rightSE.point.y;
      if (i < o) {
        if (l < u && l < c)
          return 1;
        if (l > u && l > c)
          return -1;
        var h = e.comparePoint(n.leftSE.point);
        if (h < 0)
          return 1;
        if (h > 0)
          return -1;
        var g = n.comparePoint(e.rightSE.point);
        return g !== 0 ? g : -1;
      }
      if (i > o) {
        if (u < l && u < f)
          return -1;
        if (u > l && u > f)
          return 1;
        var p = n.comparePoint(e.leftSE.point);
        if (p !== 0)
          return p;
        var d = e.comparePoint(n.rightSE.point);
        return d < 0 ? 1 : d > 0 ? -1 : 1;
      }
      if (u < l)
        return -1;
      if (u > l)
        return 1;
      if (s < a) {
        var v = n.comparePoint(e.rightSE.point);
        if (v !== 0)
          return v;
      }
      if (s > a) {
        var _ = e.comparePoint(n.rightSE.point);
        if (_ < 0)
          return 1;
        if (_ > 0)
          return -1;
      }
      if (s !== a) {
        var C = c - u, E = s - i, S = f - l, N = a - o;
        if (C > E && S < N)
          return 1;
        if (C < E && S > N)
          return -1;
      }
      return s > a ? 1 : s < a || c < f ? -1 : c > f ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function r(t, e, n, i) {
    _n(this, r), this.id = ++Rc, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = i;
  }
  return Se(r, [{
    key: "replaceRightSE",
    /* When a segment is split, the rightSE is replaced with a new sweep event */
    value: function(e) {
      this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
  }, {
    key: "bbox",
    value: function() {
      var e = this.leftSE.point.y, n = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: e < n ? e : n
        },
        ur: {
          x: this.rightSE.point.x,
          y: e > n ? e : n
        }
      };
    }
    /* A vector from the left point to the right */
  }, {
    key: "vector",
    value: function() {
      return {
        x: this.rightSE.point.x - this.leftSE.point.x,
        y: this.rightSE.point.y - this.leftSE.point.y
      };
    }
  }, {
    key: "isAnEndpoint",
    value: function(e) {
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
  }, {
    key: "comparePoint",
    value: function(e) {
      if (this.isAnEndpoint(e))
        return 0;
      var n = this.leftSE.point, i = this.rightSE.point, o = this.vector();
      if (n.x === i.x)
        return e.x === n.x ? 0 : e.x < n.x ? 1 : -1;
      var s = (e.y - n.y) / o.y, a = n.x + s * o.x;
      if (e.x === a)
        return 0;
      var u = (e.x - n.x) / o.x, l = n.y + u * o.y;
      return e.y === l ? 0 : e.y < l ? -1 : 1;
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
  }, {
    key: "getIntersection",
    value: function(e) {
      var n = this.bbox(), i = e.bbox(), o = Os(n, i);
      if (o === null)
        return null;
      var s = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = Wi(n, u) && this.comparePoint(u) === 0, f = Wi(i, s) && e.comparePoint(s) === 0, h = Wi(n, l) && this.comparePoint(l) === 0, g = Wi(i, a) && e.comparePoint(a) === 0;
      if (f && c)
        return g && !h ? a : !g && h ? l : null;
      if (f)
        return h && s.x === l.x && s.y === l.y ? null : s;
      if (c)
        return g && a.x === u.x && a.y === u.y ? null : u;
      if (g && h)
        return null;
      if (g)
        return a;
      if (h)
        return l;
      var p = Pc(s, this.vector(), u, e.vector());
      return p === null || !Wi(o, p) ? null : eo.round(p.x, p.y);
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
  }, {
    key: "split",
    value: function(e) {
      var n = [], i = e.events !== void 0, o = new Hn(e, !0), s = new Hn(e, !1), a = this.rightSE;
      this.replaceRightSE(s), n.push(s), n.push(o);
      var u = new r(o, a, this.rings.slice(), this.windings.slice());
      return Hn.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), Hn.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (o.checkForConsuming(), s.checkForConsuming()), n;
    }
    /* Swap which event is left and right */
  }, {
    key: "swapEvents",
    value: function() {
      var e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (var n = 0, i = this.windings.length; n < i; n++)
        this.windings[n] *= -1;
    }
    /* Consume another segment. We take their rings under our wing
     * and mark them as consumed. Use for perfectly overlapping segments */
  }, {
    key: "consume",
    value: function(e) {
      for (var n = this, i = e; n.consumedBy; )
        n = n.consumedBy;
      for (; i.consumedBy; )
        i = i.consumedBy;
      var o = r.compare(n, i);
      if (o !== 0) {
        if (o > 0) {
          var s = n;
          n = i, i = s;
        }
        if (n.prev === i) {
          var a = n;
          n = i, i = a;
        }
        for (var u = 0, l = i.rings.length; u < l; u++) {
          var c = i.rings[u], f = i.windings[u], h = n.rings.indexOf(c);
          h === -1 ? (n.rings.push(c), n.windings.push(f)) : n.windings[h] += f;
        }
        i.rings = null, i.windings = null, i.consumedBy = n, i.leftSE.consumedBy = n.leftSE, i.rightSE.consumedBy = n.rightSE;
      }
    }
    /* The first segment previous segment chain that is in the result */
  }, {
    key: "prevInResult",
    value: function() {
      return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
    }
  }, {
    key: "beforeState",
    value: function() {
      if (this._beforeState !== void 0)
        return this._beforeState;
      if (!this.prev)
        this._beforeState = {
          rings: [],
          windings: [],
          multiPolys: []
        };
      else {
        var e = this.prev.consumedBy || this.prev;
        this._beforeState = e.afterState();
      }
      return this._beforeState;
    }
  }, {
    key: "afterState",
    value: function() {
      if (this._afterState !== void 0)
        return this._afterState;
      var e = this.beforeState();
      this._afterState = {
        rings: e.rings.slice(0),
        windings: e.windings.slice(0),
        multiPolys: []
      };
      for (var n = this._afterState.rings, i = this._afterState.windings, o = this._afterState.multiPolys, s = 0, a = this.rings.length; s < a; s++) {
        var u = this.rings[s], l = this.windings[s], c = n.indexOf(u);
        c === -1 ? (n.push(u), i.push(l)) : i[c] += l;
      }
      for (var f = [], h = [], g = 0, p = n.length; g < p; g++)
        if (i[g] !== 0) {
          var d = n[g], v = d.poly;
          if (h.indexOf(v) === -1)
            if (d.isExterior)
              f.push(v);
            else {
              h.indexOf(v) === -1 && h.push(v);
              var _ = f.indexOf(d.poly);
              _ !== -1 && f.splice(_, 1);
            }
        }
      for (var C = 0, E = f.length; C < E; C++) {
        var S = f[C].multiPoly;
        o.indexOf(S) === -1 && o.push(S);
      }
      return this._afterState;
    }
    /* Is this segment part of the final result? */
  }, {
    key: "isInResult",
    value: function() {
      if (this.consumedBy)
        return !1;
      if (this._isInResult !== void 0)
        return this._isInResult;
      var e = this.beforeState().multiPolys, n = this.afterState().multiPolys;
      switch (wn.type) {
        case "union": {
          var i = e.length === 0, o = n.length === 0;
          this._isInResult = i !== o;
          break;
        }
        case "intersection": {
          var s, a;
          e.length < n.length ? (s = e.length, a = n.length) : (s = n.length, a = e.length), this._isInResult = a === wn.numMultiPolys && s < a;
          break;
        }
        case "xor": {
          var u = Math.abs(e.length - n.length);
          this._isInResult = u % 2 === 1;
          break;
        }
        case "difference": {
          var l = function(f) {
            return f.length === 1 && f[0].isSubject;
          };
          this._isInResult = l(e) !== l(n);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(wn.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, n, i) {
      var o, s, a, u = Hn.comparePoints(e, n);
      if (u < 0)
        o = e, s = n, a = 1;
      else if (u > 0)
        o = n, s = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new Hn(o, !0), c = new Hn(s, !1);
      return new r(l, c, [i], [a]);
    }
  }]), r;
}(), La = /* @__PURE__ */ function() {
  function r(t, e, n) {
    if (_n(this, r), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var i = eo.round(t[0][0], t[0][1]);
    this.bbox = {
      ll: {
        x: i.x,
        y: i.y
      },
      ur: {
        x: i.x,
        y: i.y
      }
    };
    for (var o = i, s = 1, a = t.length; s < a; s++) {
      if (typeof t[s][0] != "number" || typeof t[s][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      var u = eo.round(t[s][0], t[s][1]);
      u.x === o.x && u.y === o.y || (this.segments.push(zo.fromRing(o, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), o = u);
    }
    (i.x !== o.x || i.y !== o.y) && this.segments.push(zo.fromRing(o, i, this));
  }
  return Se(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, i = this.segments.length; n < i; n++) {
        var o = this.segments[n];
        e.push(o.leftSE), e.push(o.rightSE);
      }
      return e;
    }
  }]), r;
}(), Oc = /* @__PURE__ */ function() {
  function r(t, e) {
    if (_n(this, r), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new La(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (var n = 1, i = t.length; n < i; n++) {
      var o = new La(t[n], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = e;
  }
  return Se(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), n = 0, i = this.interiorRings.length; n < i; n++)
        for (var o = this.interiorRings[n].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), r;
}(), ba = /* @__PURE__ */ function() {
  function r(t, e) {
    if (_n(this, r), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof t[0][0][0] == "number" && (t = [t]);
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
    for (var n = 0, i = t.length; n < i; n++) {
      var o = new Oc(t[n], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = e;
  }
  return Se(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, i = this.polys.length; n < i; n++)
        for (var o = this.polys[n].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), r;
}(), Dc = /* @__PURE__ */ function() {
  Se(r, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var n = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!(!s.isInResult() || s.ringOut)) {
          for (var a = null, u = s.leftSE, l = s.rightSE, c = [u], f = u.point, h = []; a = u, u = l, c.push(u), u.point !== f; )
            for (; ; ) {
              var g = u.getAvailableLinkedEvents();
              if (g.length === 0) {
                var p = c[0].point, d = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(p.x, ",") + " ".concat(p.y, "]. Last matching segment found ends at") + " [".concat(d.x, ", ").concat(d.y, "]."));
              }
              if (g.length === 1) {
                l = g[0].otherSE;
                break;
              }
              for (var v = null, _ = 0, C = h.length; _ < C; _++)
                if (h[_].point === u.point) {
                  v = _;
                  break;
                }
              if (v !== null) {
                var E = h.splice(v)[0], S = c.splice(E.index);
                S.unshift(S[0].otherSE), n.push(new r(S.reverse()));
                continue;
              }
              h.push({
                index: c.length,
                point: u.point
              });
              var N = u.getLeftmostComparator(a);
              l = g.sort(N)[0].otherSE;
              break;
            }
          n.push(new r(c));
        }
      }
      return n;
    }
  }]);
  function r(t) {
    _n(this, r), this.events = t;
    for (var e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return Se(r, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, n = [e], i = 1, o = this.events.length - 1; i < o; i++) {
        var s = this.events[i].point, a = this.events[i + 1].point;
        xa(s, e, a) !== 0 && (n.push(s), e = s);
      }
      if (n.length === 1)
        return null;
      var u = n[0], l = n[1];
      xa(u, e, l) === 0 && n.shift(), n.push(n[0]);
      for (var c = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : n.length - 1, h = this.isExteriorRing() ? n.length : -1, g = [], p = f; p != h; p += c)
        g.push([n[p].x, n[p].y]);
      return g;
    }
  }, {
    key: "isExteriorRing",
    value: function() {
      if (this._isExteriorRing === void 0) {
        var e = this.enclosingRing();
        this._isExteriorRing = e ? !e.isExteriorRing() : !0;
      }
      return this._isExteriorRing;
    }
  }, {
    key: "enclosingRing",
    value: function() {
      return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
    }
    /* Returns the ring that encloses this one, if any */
  }, {
    key: "_calcEnclosingRing",
    value: function() {
      for (var e = this.events[0], n = 1, i = this.events.length; n < i; n++) {
        var o = this.events[n];
        Hn.compare(e, o) > 0 && (e = o);
      }
      for (var s = e.segment.prevInResult(), a = s ? s.prevInResult() : null; ; ) {
        if (!s)
          return null;
        if (!a)
          return s.ringOut;
        if (a.ringOut !== s.ringOut)
          return a.ringOut.enclosingRing() !== s.ringOut ? s.ringOut : s.ringOut.enclosingRing();
        s = a.prevInResult(), a = s ? s.prevInResult() : null;
      }
    }
  }]), r;
}(), Pa = /* @__PURE__ */ function() {
  function r(t) {
    _n(this, r), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return Se(r, [{
    key: "addInterior",
    value: function(e) {
      this.interiorRings.push(e), e.poly = this;
    }
  }, {
    key: "getGeom",
    value: function() {
      var e = [this.exteriorRing.getGeom()];
      if (e[0] === null)
        return null;
      for (var n = 0, i = this.interiorRings.length; n < i; n++) {
        var o = this.interiorRings[n].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }]), r;
}(), Tc = /* @__PURE__ */ function() {
  function r(t) {
    _n(this, r), this.rings = t, this.polys = this._composePolys(t);
  }
  return Se(r, [{
    key: "getGeom",
    value: function() {
      for (var e = [], n = 0, i = this.polys.length; n < i; n++) {
        var o = this.polys[n].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }, {
    key: "_composePolys",
    value: function(e) {
      for (var n = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!s.poly)
          if (s.isExteriorRing())
            n.push(new Pa(s));
          else {
            var a = s.enclosingRing();
            a.poly || n.push(new Pa(a)), a.poly.addInterior(s);
          }
      }
      return n;
    }
  }]), r;
}(), Mc = /* @__PURE__ */ function() {
  function r(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zo.compare;
    _n(this, r), this.queue = t, this.tree = new zs(e), this.segments = [];
  }
  return Se(r, [{
    key: "process",
    value: function(e) {
      var n = e.segment, i = [];
      if (e.consumedBy)
        return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(n), i;
      var o = e.isLeft ? this.tree.insert(n) : this.tree.find(n);
      if (!o)
        throw new Error("Unable to find segment #".concat(n.id, " ") + "[".concat(n.leftSE.point.x, ", ").concat(n.leftSE.point.y, "] -> ") + "[".concat(n.rightSE.point.x, ", ").concat(n.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
      for (var s = o, a = o, u = void 0, l = void 0; u === void 0; )
        s = this.tree.prev(s), s === null ? u = null : s.key.consumedBy === void 0 && (u = s.key);
      for (; l === void 0; )
        a = this.tree.next(a), a === null ? l = null : a.key.consumedBy === void 0 && (l = a.key);
      if (e.isLeft) {
        var c = null;
        if (u) {
          var f = u.getIntersection(n);
          if (f !== null && (n.isAnEndpoint(f) || (c = f), !u.isAnEndpoint(f)))
            for (var h = this._splitSafely(u, f), g = 0, p = h.length; g < p; g++)
              i.push(h[g]);
        }
        var d = null;
        if (l) {
          var v = l.getIntersection(n);
          if (v !== null && (n.isAnEndpoint(v) || (d = v), !l.isAnEndpoint(v)))
            for (var _ = this._splitSafely(l, v), C = 0, E = _.length; C < E; C++)
              i.push(_[C]);
        }
        if (c !== null || d !== null) {
          var S = null;
          if (c === null)
            S = d;
          else if (d === null)
            S = c;
          else {
            var N = Hn.comparePoints(c, d);
            S = N <= 0 ? c : d;
          }
          this.queue.remove(n.rightSE), i.push(n.rightSE);
          for (var w = n.split(S), M = 0, A = w.length; M < A; M++)
            i.push(w[M]);
        }
        i.length > 0 ? (this.tree.remove(n), i.push(e)) : (this.segments.push(n), n.prev = u);
      } else {
        if (u && l) {
          var L = u.getIntersection(l);
          if (L !== null) {
            if (!u.isAnEndpoint(L))
              for (var F = this._splitSafely(u, L), X = 0, R = F.length; X < R; X++)
                i.push(F[X]);
            if (!l.isAnEndpoint(L))
              for (var Y = this._splitSafely(l, L), D = 0, H = Y.length; D < H; D++)
                i.push(Y[D]);
          }
        }
        this.tree.remove(n);
      }
      return i;
    }
    /* Safely split a segment that is currently in the datastructures
     * IE - a segment other than the one that is currently being processed. */
  }, {
    key: "_splitSafely",
    value: function(e, n) {
      this.tree.remove(e);
      var i = e.rightSE;
      this.queue.remove(i);
      var o = e.split(n);
      return o.push(i), e.consumedBy === void 0 && this.tree.insert(e), o;
    }
  }]), r;
}(), Ra = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Ac = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, Fc = /* @__PURE__ */ function() {
  function r() {
    _n(this, r);
  }
  return Se(r, [{
    key: "run",
    value: function(e, n, i) {
      wn.type = e, eo.reset();
      for (var o = [new ba(n, !0)], s = 0, a = i.length; s < a; s++)
        o.push(new ba(i[s], !1));
      if (wn.numMultiPolys = o.length, wn.type === "difference")
        for (var u = o[0], l = 1; l < o.length; )
          Os(o[l].bbox, u.bbox) !== null ? l++ : o.splice(l, 1);
      if (wn.type === "intersection") {
        for (var c = 0, f = o.length; c < f; c++)
          for (var h = o[c], g = c + 1, p = o.length; g < p; g++)
            if (Os(h.bbox, o[g].bbox) === null)
              return [];
      }
      for (var d = new zs(Hn.compare), v = 0, _ = o.length; v < _; v++)
        for (var C = o[v].getSweepEvents(), E = 0, S = C.length; E < S; E++)
          if (d.insert(C[E]), d.size > Ra)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var N = new Mc(d), w = d.size, M = d.pop(); M; ) {
        var A = M.key;
        if (d.size === w) {
          var L = A.segment;
          throw new Error("Unable to pop() ".concat(A.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(A.point.x, ", ").concat(A.point.y, "] from segment #").concat(L.id, " ") + "[".concat(L.leftSE.point.x, ", ").concat(L.leftSE.point.y, "] -> ") + "[".concat(L.rightSE.point.x, ", ").concat(L.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (d.size > Ra)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (N.segments.length > Ac)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var F = N.process(A), X = 0, R = F.length; X < R; X++) {
          var Y = F[X];
          Y.consumedBy === void 0 && d.insert(Y);
        }
        w = d.size, M = d.pop();
      }
      eo.reset();
      var D = Dc.factory(N.segments), H = new Tc(D);
      return H.getGeom();
    }
  }]), r;
}(), wn = new Fc(), Bc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return wn.run("union", t, n);
}, kc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return wn.run("intersection", t, n);
}, Gc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return wn.run("xor", t, n);
}, Vc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return wn.run("difference", t, n);
}, cu = {
  union: Bc,
  intersection: kc,
  xor: Gc,
  difference: Vc
}, Ie = 63710088e-1, fu = {
  centimeters: Ie * 100,
  centimetres: Ie * 100,
  degrees: Ie / 111325,
  feet: Ie * 3.28084,
  inches: Ie * 39.37,
  kilometers: Ie / 1e3,
  kilometres: Ie / 1e3,
  meters: Ie,
  metres: Ie,
  miles: Ie / 1609.344,
  millimeters: Ie * 1e3,
  millimetres: Ie * 1e3,
  nauticalmiles: Ie / 1852,
  radians: 1,
  yards: Ie * 1.0936
};
function $o(r, t, e) {
  e === void 0 && (e = {});
  var n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = r, n;
}
function zc(r, t, e) {
  if (e === void 0 && (e = {}), !r)
    throw new Error("coordinates is required");
  if (!Array.isArray(r))
    throw new Error("coordinates must be an Array");
  if (r.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Oa(r[0]) || !Oa(r[1]))
    throw new Error("coordinates must contain numbers");
  var n = {
    type: "Point",
    coordinates: r
  };
  return $o(n, t, e);
}
function hu(r, t, e) {
  e === void 0 && (e = {});
  for (var n = 0, i = r; n < i.length; n++) {
    var o = i[n];
    if (o.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var s = 0; s < o[o.length - 1].length; s++)
      if (o[o.length - 1][s] !== o[0][s])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: r
  };
  return $o(a, t, e);
}
function Ts(r, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = r, e;
}
function gu(r, t, e) {
  e === void 0 && (e = {});
  var n = {
    type: "MultiPolygon",
    coordinates: r
  };
  return $o(n, t, e);
}
function Uc(r, t) {
  t === void 0 && (t = "kilometers");
  var e = fu[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return r * e;
}
function qc(r, t) {
  t === void 0 && (t = "kilometers");
  var e = fu[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return r / e;
}
function Oa(r) {
  return !isNaN(r) && r !== null && !Array.isArray(r);
}
function Uo(r) {
  return r.type === "Feature" ? r.geometry : r;
}
function Xc(r, t, e) {
  e === void 0 && (e = {});
  var n = Uo(r), i = Uo(t), o = cu.union(n.coordinates, i.coordinates);
  return o.length === 0 ? null : o.length === 1 ? hu(o[0], e.properties) : gu(o, e.properties);
}
function Yc(r) {
  let t, e, n;
  return {
    c() {
      t = Qn("svg"), e = Qn("path"), P(e, "stroke-width", "4"), P(e, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), P(e, "class", "svelte-gzo3ar"), P(t, "width", n = /*displayIn*/
      r[0] === "list" ? 20 : void 0), P(t, "viewBox", "0 0 70 85"), P(t, "fill", "none"), P(t, "class", "svelte-gzo3ar"), sn(
        t,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), sn(
        t,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    m(i, o) {
      Tt(i, t, o), nt(t, e);
    },
    p(i, [o]) {
      o & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      i[0] === "list" ? 20 : void 0) && P(t, "width", n), o & /*displayIn*/
      1 && sn(
        t,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), o & /*displayIn*/
      1 && sn(
        t,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    i: Et,
    o: Et,
    d(i) {
      i && Dt(t);
    }
  };
}
function Hc(r, t, e) {
  let { displayIn: n } = t;
  return r.$$set = (i) => {
    "displayIn" in i && e(0, n = i.displayIn);
  }, [n];
}
class Wc extends qr {
  constructor(t) {
    super(), Ur(this, t, Hc, Yc, zr, { displayIn: 0 });
  }
}
function pu(r, t, e) {
  if (r !== null)
    for (var n, i, o, s, a, u, l, c = 0, f = 0, h, g = r.type, p = g === "FeatureCollection", d = g === "Feature", v = p ? r.features.length : 1, _ = 0; _ < v; _++) {
      l = p ? r.features[_].geometry : d ? r.geometry : r, h = l ? l.type === "GeometryCollection" : !1, a = h ? l.geometries.length : 1;
      for (var C = 0; C < a; C++) {
        var E = 0, S = 0;
        if (s = h ? l.geometries[C] : l, s !== null) {
          u = s.coordinates;
          var N = s.type;
          switch (c = e && (N === "Polygon" || N === "MultiPolygon") ? 1 : 0, N) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                f,
                _,
                E,
                S
              ) === !1)
                return !1;
              f++, E++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < u.length; n++) {
                if (t(
                  u[n],
                  f,
                  _,
                  E,
                  S
                ) === !1)
                  return !1;
                f++, N === "MultiPoint" && E++;
              }
              N === "LineString" && E++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < u.length; n++) {
                for (i = 0; i < u[n].length - c; i++) {
                  if (t(
                    u[n][i],
                    f,
                    _,
                    E,
                    S
                  ) === !1)
                    return !1;
                  f++;
                }
                N === "MultiLineString" && E++, N === "Polygon" && S++;
              }
              N === "Polygon" && E++;
              break;
            case "MultiPolygon":
              for (n = 0; n < u.length; n++) {
                for (S = 0, i = 0; i < u[n].length; i++) {
                  for (o = 0; o < u[n][i].length - c; o++) {
                    if (t(
                      u[n][i][o],
                      f,
                      _,
                      E,
                      S
                    ) === !1)
                      return !1;
                    f++;
                  }
                  S++;
                }
                E++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < s.geometries.length; n++)
                if (pu(s.geometries[n], t, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Da(r, t) {
  if (r.type === "Feature")
    t(r, 0);
  else if (r.type === "FeatureCollection")
    for (var e = 0; e < r.features.length && t(r.features[e], e) !== !1; e++)
      ;
}
function du(r, t) {
  var e, n, i, o, s, a, u, l, c, f, h = 0, g = r.type === "FeatureCollection", p = r.type === "Feature", d = g ? r.features.length : 1;
  for (e = 0; e < d; e++) {
    for (a = g ? r.features[e].geometry : p ? r.geometry : r, l = g ? r.features[e].properties : p ? r.properties : {}, c = g ? r.features[e].bbox : p ? r.bbox : void 0, f = g ? r.features[e].id : p ? r.id : void 0, u = a ? a.type === "GeometryCollection" : !1, s = u ? a.geometries.length : 1, i = 0; i < s; i++) {
      if (o = u ? a.geometries[i] : a, o === null) {
        if (t(
          null,
          h,
          l,
          c,
          f
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
          if (t(
            o,
            h,
            l,
            c,
            f
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < o.geometries.length; n++)
            if (t(
              o.geometries[n],
              h,
              l,
              c,
              f
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    h++;
  }
}
function Ms(r) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return pu(r, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
Ms.default = Ms;
function jc(r, t) {
  t === void 0 && (t = {});
  var e = Ms(r), n = (e[0] + e[2]) / 2, i = (e[1] + e[3]) / 2;
  return zc([n, i], t.properties, t);
}
"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
  configurable: !0,
  value: function(t) {
    if (this === void 0 || this === null)
      throw new TypeError(this + " is not an object");
    var e = Object(this), n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, i = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
    i = i < 0 ? Math.max(n + i, 0) : Math.min(i, n);
    var o = 2 in arguments && arguments[2] !== void 0 ? parseInt(Number(arguments[2]), 10) || 0 : n;
    for (o = o < 0 ? Math.max(n + arguments[2], 0) : Math.min(o, n); i < o; )
      e[i] = t, ++i;
    return e;
  },
  writable: !0
});
Number.isFinite = Number.isFinite || function(r) {
  return typeof r == "number" && isFinite(r);
};
Number.isInteger = Number.isInteger || function(r) {
  return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
};
Number.parseFloat = Number.parseFloat || parseFloat;
Number.isNaN = Number.isNaN || function(r) {
  return r !== r;
};
Math.trunc = Math.trunc || function(r) {
  return r < 0 ? Math.ceil(r) : Math.floor(r);
};
var Kr = function() {
};
Kr.prototype.interfaces_ = function() {
  return [];
};
Kr.prototype.getClass = function() {
  return Kr;
};
Kr.prototype.equalsWithTolerance = function(t, e, n) {
  return Math.abs(t - e) <= n;
};
var ft = function(r) {
  function t(e) {
    r.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new r().stack;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(Error), z = function() {
}, vu = { MAX_VALUE: { configurable: !0 } };
z.isNaN = function(t) {
  return Number.isNaN(t);
};
z.doubleToLongBits = function(t) {
  return t;
};
z.longBitsToDouble = function(t) {
  return t;
};
z.isInfinite = function(t) {
  return !Number.isFinite(t);
};
vu.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(z, vu);
var ke = function() {
}, ts = function() {
}, Ei = function() {
};
function Ge() {
}
var y = function r() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = r.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = r.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, ui = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
y.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case y.X:
      this.x = e;
      break;
    case y.Y:
      this.y = e;
      break;
    case y.Z:
      this.z = e;
      break;
    default:
      throw new ft("Invalid ordinate index: " + t);
  }
};
y.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return !(!Kr.equalsWithTolerance(this.x, e.x, n) || !Kr.equalsWithTolerance(this.y, e.y, n));
  }
};
y.prototype.getOrdinate = function(t) {
  switch (t) {
    case y.X:
      return this.x;
    case y.Y:
      return this.y;
    case y.Z:
      return this.z;
  }
  throw new ft("Invalid ordinate index: " + t);
};
y.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || z.isNaN(this.z)) && z.isNaN(t.z);
};
y.prototype.equals = function(t) {
  return t instanceof y ? this.equals2D(t) : !1;
};
y.prototype.equalInZ = function(t, e) {
  return Kr.equalsWithTolerance(this.z, t.z, e);
};
y.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
y.prototype.clone = function() {
};
y.prototype.copy = function() {
  return new y(this);
};
y.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
y.prototype.distance3D = function(t) {
  var e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
  return Math.sqrt(e * e + n * n + i * i);
};
y.prototype.distance = function(t) {
  var e = this.x - t.x, n = this.y - t.y;
  return Math.sqrt(e * e + n * n);
};
y.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + y.hashCode(this.x), t = 37 * t + y.hashCode(this.y), t;
};
y.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
y.prototype.interfaces_ = function() {
  return [ke, ts, Ge];
};
y.prototype.getClass = function() {
  return y;
};
y.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = z.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
ui.DimensionalComparator.get = function() {
  return ar;
};
ui.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
ui.NULL_ORDINATE.get = function() {
  return z.NaN;
};
ui.X.get = function() {
  return 0;
};
ui.Y.get = function() {
  return 1;
};
ui.Z.get = function() {
  return 2;
};
Object.defineProperties(y, ui);
var ar = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new ft("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
ar.prototype.compare = function(t, e) {
  var n = t, i = e, o = ar.compare(n.x, i.x);
  if (o !== 0)
    return o;
  var s = ar.compare(n.y, i.y);
  if (s !== 0)
    return s;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = ar.compare(n.z, i.z);
  return a;
};
ar.prototype.interfaces_ = function() {
  return [Ei];
};
ar.prototype.getClass = function() {
  return ar;
};
ar.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : z.isNaN(t) ? z.isNaN(e) ? 0 : -1 : z.isNaN(e) ? 1 : 0;
};
var Ii = function() {
};
Ii.prototype.create = function() {
};
Ii.prototype.interfaces_ = function() {
  return [];
};
Ii.prototype.getClass = function() {
  return Ii;
};
var m = function() {
}, yo = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
m.prototype.interfaces_ = function() {
  return [];
};
m.prototype.getClass = function() {
  return m;
};
m.toLocationSymbol = function(t) {
  switch (t) {
    case m.EXTERIOR:
      return "e";
    case m.BOUNDARY:
      return "b";
    case m.INTERIOR:
      return "i";
    case m.NONE:
      return "-";
  }
  throw new ft("Unknown location value: " + t);
};
yo.INTERIOR.get = function() {
  return 0;
};
yo.BOUNDARY.get = function() {
  return 1;
};
yo.EXTERIOR.get = function() {
  return 2;
};
yo.NONE.get = function() {
  return -1;
};
Object.defineProperties(m, yo);
var V = function(r, t) {
  return r.interfaces_ && r.interfaces_().indexOf(t) > -1;
}, we = function() {
}, yu = { LOG_10: { configurable: !0 } };
we.prototype.interfaces_ = function() {
  return [];
};
we.prototype.getClass = function() {
  return we;
};
we.log10 = function(t) {
  var e = Math.log(t);
  return z.isInfinite(e) || z.isNaN(e) ? e : e / we.LOG_10;
};
we.min = function(t, e, n, i) {
  var o = t;
  return e < o && (o = e), n < o && (o = n), i < o && (o = i), o;
};
we.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return t < e ? e : t > n ? n : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    return i < o ? o : i > s ? s : i;
  }
};
we.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
we.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2], i = t;
    return e > i && (i = e), n > i && (i = n), i;
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = o;
    return s > l && (l = s), a > l && (l = a), u > l && (l = u), l;
  }
};
we.average = function(t, e) {
  return (t + e) / 2;
};
yu.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(we, yu);
var En = function(t) {
  this.str = t;
};
En.prototype.append = function(t) {
  this.str += t;
};
En.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
En.prototype.toString = function(t) {
  return this.str;
};
var ln = function(t) {
  this.value = t;
};
ln.prototype.intValue = function() {
  return this.value;
};
ln.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
ln.isNaN = function(t) {
  return Number.isNaN(t);
};
var no = function() {
};
no.isWhitespace = function(t) {
  return t <= 32 && t >= 0 || t === 127;
};
no.toUpperCase = function(t) {
  return t.toUpperCase();
};
var I = function r() {
  if (this._hi = 0, this._lo = 0, arguments.length === 0)
    this.init(0);
  else if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this.init(t);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.init(e);
    } else if (typeof arguments[0] == "string") {
      var n = arguments[0];
      r.call(this, r.parse(n));
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    this.init(i, o);
  }
}, Qe = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
I.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
I.prototype.extractSignificantDigits = function(t, e) {
  var n = this.abs(), i = I.magnitude(n._hi), o = I.TEN.pow(i);
  n = n.divide(o), n.gt(I.TEN) ? (n = n.divide(I.TEN), i += 1) : n.lt(I.ONE) && (n = n.multiply(I.TEN), i -= 1);
  for (var s = i + 1, a = new En(), u = I.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === s && a.append(".");
    var c = Math.trunc(n._hi);
    if (c < 0)
      break;
    var f = !1, h = 0;
    c > 9 ? (f = !0, h = "9") : h = "0" + c, a.append(h), n = n.subtract(I.valueOf(c)).multiply(I.TEN), f && n.selfAdd(I.TEN);
    var g = !0, p = I.magnitude(n._hi);
    if (p < 0 && Math.abs(p) >= u - l && (g = !1), !g)
      break;
  }
  return e[0] = i, a.toString();
};
I.prototype.sqr = function() {
  return this.multiply(this);
};
I.prototype.doubleValue = function() {
  return this._hi + this._lo;
};
I.prototype.subtract = function() {
  if (arguments[0] instanceof I) {
    var t = arguments[0];
    return this.add(t.negate());
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.add(-e);
  }
};
I.prototype.equals = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._hi === t._hi && this._lo === t._lo;
  }
};
I.prototype.isZero = function() {
  return this._hi === 0 && this._lo === 0;
};
I.prototype.selfSubtract = function() {
  if (arguments[0] instanceof I) {
    var t = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-e, 0);
  }
};
I.prototype.getSpecialNumberString = function() {
  return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
};
I.prototype.min = function(t) {
  return this.le(t) ? this : t;
};
I.prototype.selfDivide = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof I) {
      var t = arguments[0];
      return this.selfDivide(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfDivide(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null, f = null, h = null;
    return l = this._hi / n, c = I.SPLIT * l, o = c - l, h = I.SPLIT * n, o = c - o, s = l - o, a = h - n, f = l * n, a = h - a, u = n - a, h = o * a - f + o * u + s * a + s * u, c = (this._hi - f - h + this._lo - l * i) / n, h = l + c, this._hi = h, this._lo = l - h + c, this;
  }
};
I.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
I.prototype.divide = function() {
  if (arguments[0] instanceof I) {
    var t = arguments[0], e = null, n = null, i = null, o = null, s = null, a = null, u = null, l = null;
    s = this._hi / t._hi, a = I.SPLIT * s, e = a - s, l = I.SPLIT * t._hi, e = a - e, n = s - e, i = l - t._hi, u = s * t._hi, i = l - i, o = t._hi - i, l = e * i - u + e * o + n * i + n * o, a = (this._hi - u - l + this._lo - s * t._lo) / t._hi, l = s + a;
    var c = l, f = s - l + a;
    return new I(c, f);
  } else if (typeof arguments[0] == "number") {
    var h = arguments[0];
    return z.isNaN(h) ? I.createNaN() : I.copy(this).selfDivide(h, 0);
  }
};
I.prototype.ge = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo;
};
I.prototype.pow = function(t) {
  if (t === 0)
    return I.valueOf(1);
  var e = new I(this), n = I.valueOf(1), i = Math.abs(t);
  if (i > 1)
    for (; i > 0; )
      i % 2 === 1 && n.selfMultiply(e), i /= 2, i > 0 && (e = e.sqr());
  else
    n = e;
  return t < 0 ? n.reciprocal() : n;
};
I.prototype.ceil = function() {
  if (this.isNaN())
    return I.NaN;
  var t = Math.ceil(this._hi), e = 0;
  return t === this._hi && (e = Math.ceil(this._lo)), new I(t, e);
};
I.prototype.compareTo = function(t) {
  var e = t;
  return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
};
I.prototype.rint = function() {
  if (this.isNaN())
    return this;
  var t = this.add(0.5);
  return t.floor();
};
I.prototype.setValue = function() {
  if (arguments[0] instanceof I) {
    var t = arguments[0];
    return this.init(t), this;
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.init(e), this;
  }
};
I.prototype.max = function(t) {
  return this.ge(t) ? this : t;
};
I.prototype.sqrt = function() {
  if (this.isZero())
    return I.valueOf(0);
  if (this.isNegative())
    return I.NaN;
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, n = I.valueOf(e), i = this.subtract(n.sqr()), o = i._hi * (t * 0.5);
  return n.add(o);
};
I.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof I) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], n = null, i = null, o = null, s = null, a = null, u = null;
      return o = this._hi + e, a = o - this._hi, s = o - a, s = e - a + (this._hi - s), u = s + this._lo, n = o + u, i = u + (o - n), this._hi = n + i, this._lo = i + (n - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], f = null, h = null, g = null, p = null, d = null, v = null, _ = null, C = null;
    d = this._hi + l, g = this._lo + c, _ = d - this._hi, C = g - this._lo, v = d - _, p = g - C, v = l - _ + (this._hi - v), p = c - C + (this._lo - p), _ = v + g, f = d + _, h = _ + (d - f), _ = p + h;
    var E = f + _, S = _ + (f - E);
    return this._hi = E, this._lo = S, this;
  }
};
I.prototype.selfMultiply = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof I) {
      var t = arguments[0];
      return this.selfMultiply(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfMultiply(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null;
    l = I.SPLIT * this._hi, o = l - this._hi, c = I.SPLIT * n, o = l - o, s = this._hi - o, a = c - n, l = this._hi * n, a = c - a, u = n - a, c = o * a - l + o * u + s * a + s * u + (this._hi * i + this._lo * n);
    var f = l + c;
    o = l - f;
    var h = c + o;
    return this._hi = f, this._lo = h, this;
  }
};
I.prototype.selfSqr = function() {
  return this.selfMultiply(this);
};
I.prototype.floor = function() {
  if (this.isNaN())
    return I.NaN;
  var t = Math.floor(this._hi), e = 0;
  return t === this._hi && (e = Math.floor(this._lo)), new I(t, e);
};
I.prototype.negate = function() {
  return this.isNaN() ? this : new I(-this._hi, -this._lo);
};
I.prototype.clone = function() {
};
I.prototype.multiply = function() {
  if (arguments[0] instanceof I) {
    var t = arguments[0];
    return t.isNaN() ? I.createNaN() : I.copy(this).selfMultiply(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return z.isNaN(e) ? I.createNaN() : I.copy(this).selfMultiply(e, 0);
  }
};
I.prototype.isNaN = function() {
  return z.isNaN(this._hi);
};
I.prototype.intValue = function() {
  return Math.trunc(this._hi);
};
I.prototype.toString = function() {
  var t = I.magnitude(this._hi);
  return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
};
I.prototype.toStandardNotation = function() {
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!0, e), i = e[0] + 1, o = n;
  if (n.charAt(0) === ".")
    o = "0" + n;
  else if (i < 0)
    o = "0." + I.stringOfChar("0", -i) + n;
  else if (n.indexOf(".") === -1) {
    var s = i - n.length, a = I.stringOfChar("0", s);
    o = n + a + ".0";
  }
  return this.isNegative() ? "-" + o : o;
};
I.prototype.reciprocal = function() {
  var t = null, e = null, n = null, i = null, o = null, s = null, a = null, u = null;
  o = 1 / this._hi, s = I.SPLIT * o, t = s - o, u = I.SPLIT * this._hi, t = s - t, e = o - t, n = u - this._hi, a = o * this._hi, n = u - n, i = this._hi - n, u = t * n - a + t * i + e * n + e * i, s = (1 - a - u - o * this._lo) / this._hi;
  var l = o + s, c = o - l + s;
  return new I(l, c);
};
I.prototype.toSciNotation = function() {
  if (this.isZero())
    return I.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!1, e), i = I.SCI_NOT_EXPONENT_CHAR + e[0];
  if (n.charAt(0) === "0")
    throw new Error("Found leading zero: " + n);
  var o = "";
  n.length > 1 && (o = n.substring(1));
  var s = n.charAt(0) + "." + o;
  return this.isNegative() ? "-" + s + i : s + i;
};
I.prototype.abs = function() {
  return this.isNaN() ? I.NaN : this.isNegative() ? this.negate() : new I(this);
};
I.prototype.isPositive = function() {
  return (this._hi > 0 || this._hi === 0) && this._lo > 0;
};
I.prototype.lt = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo;
};
I.prototype.add = function() {
  if (arguments[0] instanceof I) {
    var t = arguments[0];
    return I.copy(this).selfAdd(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return I.copy(this).selfAdd(e);
  }
};
I.prototype.init = function() {
  if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this._hi = t, this._lo = 0;
    } else if (arguments[0] instanceof I) {
      var e = arguments[0];
      this._hi = e._hi, this._lo = e._lo;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this._hi = n, this._lo = i;
  }
};
I.prototype.gt = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo;
};
I.prototype.isNegative = function() {
  return (this._hi < 0 || this._hi === 0) && this._lo < 0;
};
I.prototype.trunc = function() {
  return this.isNaN() ? I.NaN : this.isPositive() ? this.floor() : this.ceil();
};
I.prototype.signum = function() {
  return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
};
I.prototype.interfaces_ = function() {
  return [Ge, ke, ts];
};
I.prototype.getClass = function() {
  return I;
};
I.sqr = function(t) {
  return I.valueOf(t).selfMultiply(t);
};
I.valueOf = function() {
  if (typeof arguments[0] == "string") {
    var t = arguments[0];
    return I.parse(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return new I(e);
  }
};
I.sqrt = function(t) {
  return I.valueOf(t).sqrt();
};
I.parse = function(t) {
  for (var e = 0, n = t.length; no.isWhitespace(t.charAt(e)); )
    e++;
  var i = !1;
  if (e < n) {
    var o = t.charAt(e);
    (o === "-" || o === "+") && (e++, o === "-" && (i = !0));
  }
  for (var s = new I(), a = 0, u = 0, l = 0; !(e >= n); ) {
    var c = t.charAt(e);
    if (e++, no.isDigit(c)) {
      var f = c - "0";
      s.selfMultiply(I.TEN), s.selfAdd(f), a++;
      continue;
    }
    if (c === ".") {
      u = a;
      continue;
    }
    if (c === "e" || c === "E") {
      var h = t.substring(e);
      try {
        l = ln.parseInt(h);
      } catch (_) {
        throw _ instanceof Error ? new Error("Invalid exponent " + h + " in string " + t) : _;
      } finally {
      }
      break;
    }
    throw new Error("Unexpected character '" + c + "' at position " + e + " in string " + t);
  }
  var g = s, p = a - u - l;
  if (p === 0)
    g = s;
  else if (p > 0) {
    var d = I.TEN.pow(p);
    g = s.divide(d);
  } else if (p < 0) {
    var v = I.TEN.pow(-p);
    g = s.multiply(v);
  }
  return i ? g.negate() : g;
};
I.createNaN = function() {
  return new I(z.NaN, z.NaN);
};
I.copy = function(t) {
  return new I(t);
};
I.magnitude = function(t) {
  var e = Math.abs(t), n = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(n)), o = Math.pow(10, i);
  return o * 10 <= e && (i += 1), i;
};
I.stringOfChar = function(t, e) {
  for (var n = new En(), i = 0; i < e; i++)
    n.append(t);
  return n.toString();
};
Qe.PI.get = function() {
  return new I(3.141592653589793, 12246467991473532e-32);
};
Qe.TWO_PI.get = function() {
  return new I(6.283185307179586, 24492935982947064e-32);
};
Qe.PI_2.get = function() {
  return new I(1.5707963267948966, 6123233995736766e-32);
};
Qe.E.get = function() {
  return new I(2.718281828459045, 14456468917292502e-32);
};
Qe.NaN.get = function() {
  return new I(z.NaN, z.NaN);
};
Qe.EPS.get = function() {
  return 123259516440783e-46;
};
Qe.SPLIT.get = function() {
  return 134217729;
};
Qe.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
Qe.TEN.get = function() {
  return I.valueOf(10);
};
Qe.ONE.get = function() {
  return I.valueOf(1);
};
Qe.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
Qe.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(I, Qe);
var le = function() {
}, mu = { DP_SAFE_EPSILON: { configurable: !0 } };
le.prototype.interfaces_ = function() {
  return [];
};
le.prototype.getClass = function() {
  return le;
};
le.orientationIndex = function(t, e, n) {
  var i = le.orientationIndexFilter(t, e, n);
  if (i <= 1)
    return i;
  var o = I.valueOf(e.x).selfAdd(-t.x), s = I.valueOf(e.y).selfAdd(-t.y), a = I.valueOf(n.x).selfAdd(-e.x), u = I.valueOf(n.y).selfAdd(-e.y);
  return o.selfMultiply(u).selfSubtract(s.selfMultiply(a)).signum();
};
le.signOfDet2x2 = function(t, e, n, i) {
  var o = t.multiply(i).selfSubtract(e.multiply(n));
  return o.signum();
};
le.intersection = function(t, e, n, i) {
  var o = I.valueOf(i.y).selfSubtract(n.y).selfMultiply(I.valueOf(e.x).selfSubtract(t.x)), s = I.valueOf(i.x).selfSubtract(n.x).selfMultiply(I.valueOf(e.y).selfSubtract(t.y)), a = o.subtract(s), u = I.valueOf(i.x).selfSubtract(n.x).selfMultiply(I.valueOf(t.y).selfSubtract(n.y)), l = I.valueOf(i.y).selfSubtract(n.y).selfMultiply(I.valueOf(t.x).selfSubtract(n.x)), c = u.subtract(l), f = c.selfDivide(a).doubleValue(), h = I.valueOf(t.x).selfAdd(I.valueOf(e.x).selfSubtract(t.x).selfMultiply(f)).doubleValue(), g = I.valueOf(e.x).selfSubtract(t.x).selfMultiply(I.valueOf(t.y).selfSubtract(n.y)), p = I.valueOf(e.y).selfSubtract(t.y).selfMultiply(I.valueOf(t.x).selfSubtract(n.x)), d = g.subtract(p), v = d.selfDivide(a).doubleValue(), _ = I.valueOf(n.y).selfAdd(I.valueOf(i.y).selfSubtract(n.y).selfMultiply(v)).doubleValue();
  return new y(h, _);
};
le.orientationIndexFilter = function(t, e, n) {
  var i = null, o = (t.x - n.x) * (e.y - n.y), s = (t.y - n.y) * (e.x - n.x), a = o - s;
  if (o > 0) {
    if (s <= 0)
      return le.signum(a);
    i = o + s;
  } else if (o < 0) {
    if (s >= 0)
      return le.signum(a);
    i = -o - s;
  } else
    return le.signum(a);
  var u = le.DP_SAFE_EPSILON * i;
  return a >= u || -a >= u ? le.signum(a) : 2;
};
le.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
mu.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(le, mu);
var Q = function() {
}, mo = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
mo.X.get = function() {
  return 0;
};
mo.Y.get = function() {
  return 1;
};
mo.Z.get = function() {
  return 2;
};
mo.M.get = function() {
  return 3;
};
Q.prototype.setOrdinate = function(t, e, n) {
};
Q.prototype.size = function() {
};
Q.prototype.getOrdinate = function(t, e) {
};
Q.prototype.getCoordinate = function() {
};
Q.prototype.getCoordinateCopy = function(t) {
};
Q.prototype.getDimension = function() {
};
Q.prototype.getX = function(t) {
};
Q.prototype.clone = function() {
};
Q.prototype.expandEnvelope = function(t) {
};
Q.prototype.copy = function() {
};
Q.prototype.getY = function(t) {
};
Q.prototype.toCoordinateArray = function() {
};
Q.prototype.interfaces_ = function() {
  return [ts];
};
Q.prototype.getClass = function() {
  return Q;
};
Object.defineProperties(Q, mo);
var _u = function() {
}, zi = function(r) {
  function t() {
    r.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(_u), Xt = function() {
};
Xt.arraycopy = function(t, e, n, i, o) {
  for (var s = 0, a = e; a < e + o; a++)
    n[i + s] = t[a], s++;
};
Xt.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var ze = function r() {
  if (this.x = null, this.y = null, this.w = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.w = 1;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.w = 1;
  } else if (arguments.length === 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      var e = arguments[0], n = arguments[1];
      this.x = e, this.y = n, this.w = 1;
    } else if (arguments[0] instanceof r && arguments[1] instanceof r) {
      var i = arguments[0], o = arguments[1];
      this.x = i.y * o.w - o.y * i.w, this.y = o.x * i.w - i.x * o.w, this.w = i.x * o.y - o.x * i.y;
    } else if (arguments[0] instanceof y && arguments[1] instanceof y) {
      var s = arguments[0], a = arguments[1];
      this.x = s.y - a.y, this.y = a.x - s.x, this.w = s.x * a.y - a.x * s.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var f = arguments[0], h = arguments[1], g = arguments[2], p = arguments[3], d = f.y - h.y, v = h.x - f.x, _ = f.x * h.y - h.x * f.y, C = g.y - p.y, E = p.x - g.x, S = g.x * p.y - p.x * g.y;
    this.x = v * S - E * _, this.y = C * _ - d * S, this.w = d * E - C * v;
  }
};
ze.prototype.getY = function() {
  var t = this.y / this.w;
  if (z.isNaN(t) || z.isInfinite(t))
    throw new zi();
  return t;
};
ze.prototype.getX = function() {
  var t = this.x / this.w;
  if (z.isNaN(t) || z.isInfinite(t))
    throw new zi();
  return t;
};
ze.prototype.getCoordinate = function() {
  var t = new y();
  return t.x = this.getX(), t.y = this.getY(), t;
};
ze.prototype.interfaces_ = function() {
  return [];
};
ze.prototype.getClass = function() {
  return ze;
};
ze.intersection = function(t, e, n, i) {
  var o = t.y - e.y, s = e.x - t.x, a = t.x * e.y - e.x * t.y, u = n.y - i.y, l = i.x - n.x, c = n.x * i.y - i.x * n.y, f = s * c - l * a, h = u * a - o * c, g = o * l - u * s, p = f / g, d = h / g;
  if (z.isNaN(p) || z.isInfinite(p) || z.isNaN(d) || z.isInfinite(d))
    throw new zi();
  return new y(p, d);
};
var B = function r() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof y) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.init(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.init(n.x, i.x, n.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    this.init(o, s, a, u);
  }
}, Eu = { serialVersionUID: { configurable: !0 } };
B.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
B.prototype.equals = function(t) {
  if (!(t instanceof B))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
B.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new B();
  var e = this._minx > t._minx ? this._minx : t._minx, n = this._miny > t._miny ? this._miny : t._miny, i = this._maxx < t._maxx ? this._maxx : t._maxx, o = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new B(e, i, n, o);
};
B.prototype.isNull = function() {
  return this._maxx < this._minx;
};
B.prototype.getMaxX = function() {
  return this._maxx;
};
B.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof y) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof B) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : n >= this._minx && n <= this._maxx && i >= this._miny && i <= this._maxy;
  }
};
B.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof B) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof y) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : !(n > this._maxx || n < this._minx || i > this._maxy || i < this._miny);
  }
};
B.prototype.getMinY = function() {
  return this._miny;
};
B.prototype.getMinX = function() {
  return this._minx;
};
B.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof y) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof B) {
      var e = arguments[0];
      if (e.isNull())
        return null;
      this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.isNull() ? (this._minx = n, this._maxx = n, this._miny = i, this._maxy = i) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
  }
};
B.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
B.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
B.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
B.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
B.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
B.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
B.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
B.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
B.prototype.expandBy = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.expandBy(t, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this.isNull())
      return null;
    this._minx -= e, this._maxx += e, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
  }
};
B.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof B) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof y) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.covers(n, i);
  }
};
B.prototype.centre = function() {
  return this.isNull() ? null : new y((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
B.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof y) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof B) {
      var e = arguments[0];
      this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.init(n.x, i.x, n.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    o < s ? (this._minx = o, this._maxx = s) : (this._minx = s, this._maxx = o), a < u ? (this._miny = a, this._maxy = u) : (this._miny = u, this._maxy = a);
  }
};
B.prototype.getMaxY = function() {
  return this._maxy;
};
B.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var n = 0;
  return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), e === 0 ? n : n === 0 ? e : Math.sqrt(e * e + n * n);
};
B.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + y.hashCode(this._minx), t = 37 * t + y.hashCode(this._maxx), t = 37 * t + y.hashCode(this._miny), t = 37 * t + y.hashCode(this._maxy), t;
};
B.prototype.interfaces_ = function() {
  return [ke, Ge];
};
B.prototype.getClass = function() {
  return B;
};
B.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = Math.min(s.x, a.x), l = Math.max(s.x, a.x), c = Math.min(i.x, o.x), f = Math.max(i.x, o.x);
    return !(c > l || f < u || (u = Math.min(s.y, a.y), l = Math.max(s.y, a.y), c = Math.min(i.y, o.y), f = Math.max(i.y, o.y), c > l) || f < u);
  }
};
Eu.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(B, Eu);
var tn = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, es = function(t) {
  this.geometryFactory = t || new W();
};
es.prototype.read = function(t) {
  var e, n, i;
  t = t.replace(/[\n\r]/g, " ");
  var o = tn.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (o = tn.emptyTypeStr.exec(t), o[2] = void 0), o && (n = o[1].toLowerCase(), i = o[2], mi[n] && (e = mi[n].apply(this, [i]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
es.prototype.write = function(t) {
  return this.extractGeometry(t);
};
es.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!Xn[e])
    return null;
  var n = e.toUpperCase(), i;
  return t.isEmpty() ? i = n + " EMPTY" : i = n + "(" + Xn[e].apply(this, [t]) + ")", i;
};
var Xn = {
  coordinate: function(t) {
    return t.x + " " + t.y;
  },
  /**
   * Return a space delimited string of point coordinates.
   *
   * @param {Point}
   *          point
   * @return {String} A string of coordinates representing the point.
   */
  point: function(t) {
    return Xn.coordinate.call(this, t._coordinates._coordinates[0]);
  },
  /**
   * Return a comma delimited string of point coordinates from a multipoint.
   *
   * @param {MultiPoint}
   *          multipoint
   * @return {String} A string of point coordinate strings representing the
   *         multipoint.
   */
  multipoint: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push("(" + Xn.point.apply(e, [t._geometries[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return a comma delimited string of point coordinates from a line.
   *
   * @param {LineString} linestring
   * @return {String} A string of point coordinate strings representing the linestring.
   */
  linestring: function(t) {
    for (var e = this, n = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      n.push(Xn.coordinate.apply(e, [t._points._coordinates[i]]));
    return n.join(",");
  },
  linearring: function(t) {
    for (var e = this, n = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      n.push(Xn.coordinate.apply(e, [t._points._coordinates[i]]));
    return n.join(",");
  },
  /**
   * Return a comma delimited string of linestring strings from a
   * multilinestring.
   *
   * @param {MultiLineString} multilinestring
   * @return {String} A string of of linestring strings representing the multilinestring.
   */
  multilinestring: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push("(" + Xn.linestring.apply(e, [t._geometries[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return a comma delimited string of linear ring arrays from a polygon.
   *
   * @param {Polygon} polygon
   * @return {String} An array of linear ring arrays representing the polygon.
   */
  polygon: function(t) {
    var e = this, n = [];
    n.push("(" + Xn.linestring.apply(this, [t._shell]) + ")");
    for (var i = 0, o = t._holes.length; i < o; ++i)
      n.push("(" + Xn.linestring.apply(e, [t._holes[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return an array of polygon arrays from a multipolygon.
   *
   * @param {MultiPolygon} multipolygon
   * @return {String} An array of polygon arrays representing the multipolygon.
   */
  multipolygon: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push("(" + Xn.polygon.apply(e, [t._geometries[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an
   * geometrycollection.
   *
   * @param {GeometryCollection} collection
   * @return {String} internal WKT representation of the collection.
   */
  geometrycollection: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push(e.extractGeometry(t._geometries[i]));
    return n.join(",");
  }
}, mi = {
  /**
   * Return point geometry given a point WKT fragment.
   *
   * @param {String} str A WKT fragment representing the point.
   * @return {Point} A point geometry.
   * @private
   */
  point: function(t) {
    if (t === void 0)
      return this.geometryFactory.createPoint();
    var e = t.trim().split(tn.spaces);
    return this.geometryFactory.createPoint(new y(
      Number.parseFloat(e[0]),
      Number.parseFloat(e[1])
    ));
  },
  /**
   * Return a multipoint geometry given a multipoint WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipoint.
   * @return {Point} A multipoint feature.
   * @private
   */
  multipoint: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPoint();
    for (var n, i = t.trim().split(","), o = [], s = 0, a = i.length; s < a; ++s)
      n = i[s].replace(tn.trimParens, "$1"), o.push(mi.point.apply(e, [n]));
    return this.geometryFactory.createMultiPoint(o);
  },
  /**
   * Return a linestring geometry given a linestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linestring.
   * @return {LineString} A linestring geometry.
   * @private
   */
  linestring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLineString();
    for (var e = t.trim().split(","), n = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(tn.spaces), n.push(new y(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLineString(n);
  },
  /**
   * Return a linearring geometry given a linearring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linearring.
   * @return {LinearRing} A linearring geometry.
   * @private
   */
  linearring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLinearRing();
    for (var e = t.trim().split(","), n = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(tn.spaces), n.push(new y(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLinearRing(n);
  },
  /**
   * Return a multilinestring geometry given a multilinestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multilinestring.
   * @return {MultiLineString} A multilinestring geometry.
   * @private
   */
  multilinestring: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiLineString();
    for (var n, i = t.trim().split(tn.parenComma), o = [], s = 0, a = i.length; s < a; ++s)
      n = i[s].replace(tn.trimParens, "$1"), o.push(mi.linestring.apply(e, [n]));
    return this.geometryFactory.createMultiLineString(o);
  },
  /**
   * Return a polygon geometry given a polygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the polygon.
   * @return {Polygon} A polygon geometry.
   * @private
   */
  polygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createPolygon();
    for (var n, i, o, s = t.trim().split(tn.parenComma), a, u = [], l = 0, c = s.length; l < c; ++l)
      n = s[l].replace(tn.trimParens, "$1"), i = mi.linestring.apply(e, [n]), o = e.geometryFactory.createLinearRing(i._points), l === 0 ? a = o : u.push(o);
    return this.geometryFactory.createPolygon(a, u);
  },
  /**
   * Return a multipolygon geometry given a multipolygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipolygon.
   * @return {MultiPolygon} A multipolygon geometry.
   * @private
   */
  multipolygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPolygon();
    for (var n, i = t.trim().split(tn.doubleParenComma), o = [], s = 0, a = i.length; s < a; ++s)
      n = i[s].replace(tn.trimParens, "$1"), o.push(mi.polygon.apply(e, [n]));
    return this.geometryFactory.createMultiPolygon(o);
  },
  /**
   * Return a geometrycollection given a geometrycollection WKT fragment.
   *
   * @param {String} str A WKT fragment representing the geometrycollection.
   * @return {GeometryCollection}
   * @private
   */
  geometrycollection: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createGeometryCollection();
    t = t.replace(/,\s*([A-Za-z])/g, "|$1");
    for (var n = t.trim().split("|"), i = [], o = 0, s = n.length; o < s; ++o)
      i.push(e.read(n[o]));
    return this.geometryFactory.createGeometryCollection(i);
  }
}, qe = function(t) {
  this.parser = new es(t);
};
qe.prototype.write = function(t) {
  return this.parser.write(t);
};
qe.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var Zn = function(r) {
  function t(e) {
    r.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new r().stack;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(Error), qo = function(r) {
  function t() {
    if (r.call(this), arguments.length === 0)
      r.call(this);
    else if (arguments.length === 1) {
      var e = arguments[0];
      r.call(this, e);
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Zn), q = function() {
};
q.prototype.interfaces_ = function() {
  return [];
};
q.prototype.getClass = function() {
  return q;
};
q.shouldNeverReachHere = function() {
  if (arguments.length === 0)
    q.shouldNeverReachHere(null);
  else if (arguments.length === 1) {
    var t = arguments[0];
    throw new qo("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
q.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], q.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new qo() : new qo(e);
};
q.equals = function() {
  var t, e, n;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], q.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t)))
    throw new qo("Expected " + t + " but encountered " + e + (n !== null ? ": " + n : ""));
};
var gt = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new y(), this._intPt[1] = new y(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, li = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
gt.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
gt.prototype.getTopologySummary = function() {
  var t = new En();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
gt.prototype.computeIntersection = function(t, e, n, i) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, n, i);
};
gt.prototype.getIntersectionNum = function() {
  return this._result;
};
gt.prototype.computeIntLineIndex = function() {
  if (arguments.length === 0)
    this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
      return Array(2);
    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
  else if (arguments.length === 1) {
    var t = arguments[0], e = this.getEdgeDistance(t, 0), n = this.getEdgeDistance(t, 1);
    e > n ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
  }
};
gt.prototype.isProper = function() {
  return this.hasIntersection() && this._isProper;
};
gt.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
gt.prototype.isInteriorIntersection = function() {
  var t = this;
  if (arguments.length === 0)
    return !!(this.isInteriorIntersection(0) || this.isInteriorIntersection(1));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0; n < this._result; n++)
      if (!(t._intPt[n].equals2D(t._inputLines[e][0]) || t._intPt[n].equals2D(t._inputLines[e][1])))
        return !0;
    return !1;
  }
};
gt.prototype.getIntersection = function(t) {
  return this._intPt[t];
};
gt.prototype.isEndPoint = function() {
  return this.hasIntersection() && !this._isProper;
};
gt.prototype.hasIntersection = function() {
  return this._result !== gt.NO_INTERSECTION;
};
gt.prototype.getEdgeDistance = function(t, e) {
  var n = gt.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return n;
};
gt.prototype.isCollinear = function() {
  return this._result === gt.COLLINEAR_INTERSECTION;
};
gt.prototype.toString = function() {
  return qe.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + qe.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
gt.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
gt.prototype.isIntersection = function(t) {
  for (var e = this, n = 0; n < this._result; n++)
    if (e._intPt[n].equals2D(t))
      return !0;
  return !1;
};
gt.prototype.getIntersectionAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
};
gt.prototype.interfaces_ = function() {
  return [];
};
gt.prototype.getClass = function() {
  return gt;
};
gt.computeEdgeDistance = function(t, e, n) {
  var i = Math.abs(n.x - e.x), o = Math.abs(n.y - e.y), s = -1;
  if (t.equals(e))
    s = 0;
  else if (t.equals(n))
    i > o ? s = i : s = o;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    i > o ? s = a : s = u, s === 0 && !t.equals(e) && (s = Math.max(a, u));
  }
  return q.isTrue(!(s === 0 && !t.equals(e)), "Bad distance calculation"), s;
};
gt.nonRobustComputeEdgeDistance = function(t, e, n) {
  var i = t.x - e.x, o = t.y - e.y, s = Math.sqrt(i * i + o * o);
  return q.isTrue(!(s === 0 && !t.equals(e)), "Invalid distance calculation"), s;
};
li.DONT_INTERSECT.get = function() {
  return 0;
};
li.DO_INTERSECT.get = function() {
  return 1;
};
li.COLLINEAR.get = function() {
  return 2;
};
li.NO_INTERSECTION.get = function() {
  return 0;
};
li.POINT_INTERSECTION.get = function() {
  return 1;
};
li.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(gt, li);
var Xr = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(n) {
    var i = new B(this._inputLines[0][0], this._inputLines[0][1]), o = new B(this._inputLines[1][0], this._inputLines[1][1]);
    return i.contains(n) && o.contains(n);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var n = arguments[0], i = arguments[1], o = arguments[2];
      if (this._isProper = !1, B.intersects(i, o, n) && T.orientationIndex(i, o, n) === 0 && T.orientationIndex(o, i, n) === 0)
        return this._isProper = !0, (n.equals(i) || n.equals(o)) && (this._isProper = !1), this._result = r.POINT_INTERSECTION, null;
      this._result = r.NO_INTERSECTION;
    } else
      return r.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(n, i, o, s, a) {
    a.x = this.smallestInAbsValue(n.x, i.x, o.x, s.x), a.y = this.smallestInAbsValue(n.y, i.y, o.y, s.y), n.x -= a.x, n.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(n, i, o, s) {
    var a = null;
    try {
      a = ze.intersection(n, i, o, s);
    } catch (u) {
      if (u instanceof zi)
        a = t.nearestEndpoint(n, i, o, s);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(n, i, o, s) {
    var a = this.intersectionWithNormalization(n, i, o, s);
    return this.isInSegmentEnvelopes(a) || (a = new y(t.nearestEndpoint(n, i, o, s))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(n, i, o, s) {
    var a = n, u = Math.abs(a);
    return Math.abs(i) < u && (a = i, u = Math.abs(i)), Math.abs(o) < u && (a = o, u = Math.abs(o)), Math.abs(s) < u && (a = s), a;
  }, t.prototype.checkDD = function(n, i, o, s, a) {
    var u = le.intersection(n, i, o, s), l = this.isInSegmentEnvelopes(u);
    Xt.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && Xt.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(n, i, o, s) {
    var a = new y(n), u = new y(i), l = new y(o), c = new y(s), f = new y();
    this.normalizeToEnvCentre(a, u, l, c, f);
    var h = this.safeHCoordinateIntersection(a, u, l, c);
    return h.x += f.x, h.y += f.y, h;
  }, t.prototype.computeCollinearIntersection = function(n, i, o, s) {
    var a = B.intersects(n, i, o), u = B.intersects(n, i, s), l = B.intersects(o, s, n), c = B.intersects(o, s, i);
    return a && u ? (this._intPt[0] = o, this._intPt[1] = s, r.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = n, this._intPt[1] = i, r.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = o, this._intPt[1] = n, o.equals(n) && !u && !c ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = o, this._intPt[1] = i, o.equals(i) && !u && !l ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = s, this._intPt[1] = n, s.equals(n) && !a && !c ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = s, this._intPt[1] = i, s.equals(i) && !a && !l ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : r.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(n, i, o, s, a) {
    var u = n.x < i.x ? n.x : i.x, l = n.y < i.y ? n.y : i.y, c = n.x > i.x ? n.x : i.x, f = n.y > i.y ? n.y : i.y, h = o.x < s.x ? o.x : s.x, g = o.y < s.y ? o.y : s.y, p = o.x > s.x ? o.x : s.x, d = o.y > s.y ? o.y : s.y, v = u > h ? u : h, _ = c < p ? c : p, C = l > g ? l : g, E = f < d ? f : d, S = (v + _) / 2, N = (C + E) / 2;
    a.x = S, a.y = N, n.x -= a.x, n.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.computeIntersect = function(n, i, o, s) {
    if (this._isProper = !1, !B.intersects(n, i, o, s))
      return r.NO_INTERSECTION;
    var a = T.orientationIndex(n, i, o), u = T.orientationIndex(n, i, s);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return r.NO_INTERSECTION;
    var l = T.orientationIndex(o, s, n), c = T.orientationIndex(o, s, i);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return r.NO_INTERSECTION;
    var f = a === 0 && u === 0 && l === 0 && c === 0;
    return f ? this.computeCollinearIntersection(n, i, o, s) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, n.equals2D(o) || n.equals2D(s) ? this._intPt[0] = n : i.equals2D(o) || i.equals2D(s) ? this._intPt[0] = i : a === 0 ? this._intPt[0] = new y(o) : u === 0 ? this._intPt[0] = new y(s) : l === 0 ? this._intPt[0] = new y(n) : c === 0 && (this._intPt[0] = new y(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, o, s)), r.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(n, i, o, s) {
    var a = n, u = T.distancePointLine(n, o, s), l = T.distancePointLine(i, o, s);
    return l < u && (u = l, a = i), l = T.distancePointLine(o, n, i), l < u && (u = l, a = o), l = T.distancePointLine(s, n, i), l < u && (u = l, a = s), a;
  }, t;
}(gt), Qr = function() {
};
Qr.prototype.interfaces_ = function() {
  return [];
};
Qr.prototype.getClass = function() {
  return Qr;
};
Qr.orientationIndex = function(t, e, n) {
  var i = e.x - t.x, o = e.y - t.y, s = n.x - e.x, a = n.y - e.y;
  return Qr.signOfDet2x2(i, o, s, a);
};
Qr.signOfDet2x2 = function(t, e, n, i) {
  var o = null, s = null, a = null;
  if (o = 1, t === 0 || i === 0)
    return e === 0 || n === 0 ? 0 : e > 0 ? n > 0 ? -o : o : n > 0 ? o : -o;
  if (e === 0 || n === 0)
    return i > 0 ? t > 0 ? o : -o : t > 0 ? -o : o;
  if (e > 0 ? i > 0 ? e <= i || (o = -o, s = t, t = n, n = s, s = e, e = i, i = s) : e <= -i ? (o = -o, n = -n, i = -i) : (s = t, t = -n, n = s, s = e, e = -i, i = s) : i > 0 ? -e <= i ? (o = -o, t = -t, e = -e) : (s = -t, t = n, n = s, s = -e, e = i, i = s) : e >= i ? (t = -t, e = -e, n = -n, i = -i) : (o = -o, s = -t, t = -n, n = s, s = -e, e = -i, i = s), t > 0)
    if (n > 0) {
      if (!(t <= n))
        return o;
    } else
      return o;
  else {
    if (n > 0)
      return -o;
    if (t >= n)
      o = -o, t = -t, n = -n;
    else
      return -o;
  }
  for (; ; ) {
    if (a = Math.floor(n / t), n = n - a * t, i = i - a * e, i < 0)
      return -o;
    if (i > e)
      return o;
    if (t > n + n) {
      if (e < i + i)
        return o;
    } else {
      if (e > i + i)
        return -o;
      n = t - n, i = e - i, o = -o;
    }
    if (i === 0)
      return n === 0 ? 0 : -o;
    if (n === 0 || (a = Math.floor(t / n), t = t - a * n, e = e - a * i, e < 0))
      return o;
    if (e > i)
      return -o;
    if (n > t + t) {
      if (i < e + e)
        return -o;
    } else {
      if (i > e + e)
        return o;
      t = n - t, e = i - e, o = -o;
    }
    if (e === 0)
      return t === 0 ? 0 : o;
    if (t === 0)
      return -o;
  }
};
var an = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
an.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var n = t.x, i = e.x;
    return n > i && (n = e.x, i = t.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var o = t.x - this._p.x, s = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = Qr.signOfDet2x2(o, s, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < s && (l = -l), l > 0 && this._crossingCount++;
  }
};
an.prototype.isPointInPolygon = function() {
  return this.getLocation() !== m.EXTERIOR;
};
an.prototype.getLocation = function() {
  return this._isPointOnSegment ? m.BOUNDARY : this._crossingCount % 2 === 1 ? m.INTERIOR : m.EXTERIOR;
};
an.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
an.prototype.interfaces_ = function() {
  return [];
};
an.prototype.getClass = function() {
  return an;
};
an.locatePointInRing = function() {
  if (arguments[0] instanceof y && V(arguments[1], Q)) {
    for (var t = arguments[0], e = arguments[1], n = new an(t), i = new y(), o = new y(), s = 1; s < e.size(); s++)
      if (e.getCoordinate(s, i), e.getCoordinate(s - 1, o), n.countSegment(i, o), n.isOnSegment())
        return n.getLocation();
    return n.getLocation();
  } else if (arguments[0] instanceof y && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new an(a), c = 1; c < u.length; c++) {
      var f = u[c], h = u[c - 1];
      if (l.countSegment(f, h), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var T = function() {
}, ci = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
T.prototype.interfaces_ = function() {
  return [];
};
T.prototype.getClass = function() {
  return T;
};
T.orientationIndex = function(t, e, n) {
  return le.orientationIndex(t, e, n);
};
T.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, n = t[0].x, i = 1; i < t.length - 1; i++) {
      var o = t[i].x - n, s = t[i + 1].y, a = t[i - 1].y;
      e += o * (a - s);
    }
    return e / 2;
  } else if (V(arguments[0], Q)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new y(), f = new y(), h = new y();
    u.getCoordinate(0, f), u.getCoordinate(1, h);
    var g = f.x;
    h.x -= g;
    for (var p = 0, d = 1; d < l - 1; d++)
      c.y = f.y, f.x = h.x, f.y = h.y, u.getCoordinate(d + 1, h), h.x -= g, p += f.x * (c.y - h.y);
    return p / 2;
  }
};
T.distanceLineLine = function(t, e, n, i) {
  if (t.equals(e))
    return T.distancePointLine(t, n, i);
  if (n.equals(i))
    return T.distancePointLine(i, t, e);
  var o = !1;
  if (!B.intersects(t, e, n, i))
    o = !0;
  else {
    var s = (e.x - t.x) * (i.y - n.y) - (e.y - t.y) * (i.x - n.x);
    if (s === 0)
      o = !0;
    else {
      var a = (t.y - n.y) * (i.x - n.x) - (t.x - n.x) * (i.y - n.y), u = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y), l = u / s, c = a / s;
      (c < 0 || c > 1 || l < 0 || l > 1) && (o = !0);
    }
  }
  return o ? we.min(T.distancePointLine(t, n, i), T.distancePointLine(e, n, i), T.distancePointLine(n, t, e), T.distancePointLine(i, t, e)) : 0;
};
T.isPointInRing = function(t, e) {
  return T.locatePointInRing(t, e) !== m.EXTERIOR;
};
T.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var n = 0, i = new y();
  t.getCoordinate(0, i);
  for (var o = i.x, s = i.y, a = 1; a < e; a++) {
    t.getCoordinate(a, i);
    var u = i.x, l = i.y, c = u - o, f = l - s;
    n += Math.sqrt(c * c + f * f), o = u, s = l;
  }
  return n;
};
T.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new ft("Ring has fewer than 4 points, so orientation cannot be determined");
  for (var n = t[0], i = 0, o = 1; o <= e; o++) {
    var s = t[o];
    s.y > n.y && (n = s, i = o);
  }
  var a = i;
  do
    a = a - 1, a < 0 && (a = e);
  while (t[a].equals2D(n) && a !== i);
  var u = i;
  do
    u = (u + 1) % e;
  while (t[u].equals2D(n) && u !== i);
  var l = t[a], c = t[u];
  if (l.equals2D(n) || c.equals2D(n) || l.equals2D(c))
    return !1;
  var f = T.computeOrientation(l, n, c), h = !1;
  return f === 0 ? h = l.x > c.x : h = f > 0, h;
};
T.locatePointInRing = function(t, e) {
  return an.locatePointInRing(t, e);
};
T.distancePointLinePerpendicular = function(t, e, n) {
  var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), o = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
  return Math.abs(o) * Math.sqrt(i);
};
T.computeOrientation = function(t, e, n) {
  return T.orientationIndex(t, e, n);
};
T.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new ft("Line array must contain at least one vertex");
    for (var n = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
      var o = T.distancePointLine(t, e[i], e[i + 1]);
      o < n && (n = o);
    }
    return n;
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    if (a.x === u.x && a.y === u.y)
      return s.distance(a);
    var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y), c = ((s.x - a.x) * (u.x - a.x) + (s.y - a.y) * (u.y - a.y)) / l;
    if (c <= 0)
      return s.distance(a);
    if (c >= 1)
      return s.distance(u);
    var f = ((a.y - s.y) * (u.x - a.x) - (a.x - s.x) * (u.y - a.y)) / l;
    return Math.abs(f) * Math.sqrt(l);
  }
};
T.isOnLine = function(t, e) {
  for (var n = new Xr(), i = 1; i < e.length; i++) {
    var o = e[i - 1], s = e[i];
    if (n.computeIntersection(t, o, s), n.hasIntersection())
      return !0;
  }
  return !1;
};
ci.CLOCKWISE.get = function() {
  return -1;
};
ci.RIGHT.get = function() {
  return T.CLOCKWISE;
};
ci.COUNTERCLOCKWISE.get = function() {
  return 1;
};
ci.LEFT.get = function() {
  return T.COUNTERCLOCKWISE;
};
ci.COLLINEAR.get = function() {
  return 0;
};
ci.STRAIGHT.get = function() {
  return T.COLLINEAR;
};
Object.defineProperties(T, ci);
var Jn = function() {
};
Jn.prototype.filter = function(t) {
};
Jn.prototype.interfaces_ = function() {
  return [];
};
Jn.prototype.getClass = function() {
  return Jn;
};
var G = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, kn = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
G.prototype.isGeometryCollection = function() {
  return this.getSortIndex() === G.SORTINDEX_GEOMETRYCOLLECTION;
};
G.prototype.getFactory = function() {
  return this._factory;
};
G.prototype.getGeometryN = function(t) {
  return this;
};
G.prototype.getArea = function() {
  return 0;
};
G.prototype.isRectangle = function() {
  return !1;
};
G.prototype.equals = function() {
  if (arguments[0] instanceof G) {
    var t = arguments[0];
    return t === null ? !1 : this.equalsTopo(t);
  } else if (arguments[0] instanceof Object) {
    var e = arguments[0];
    if (!(e instanceof G))
      return !1;
    var n = e;
    return this.equalsExact(n);
  }
};
G.prototype.equalsExact = function(t) {
  return this === t || this.equalsExact(t, 0);
};
G.prototype.geometryChanged = function() {
  this.apply(G.geometryChangedFilter);
};
G.prototype.geometryChangedAction = function() {
  this._envelope = null;
};
G.prototype.equalsNorm = function(t) {
  return t === null ? !1 : this.norm().equalsExact(t.norm());
};
G.prototype.getLength = function() {
  return 0;
};
G.prototype.getNumGeometries = function() {
  return 1;
};
G.prototype.compareTo = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t;
    return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.getSortIndex() !== n.getSortIndex() ? this.getSortIndex() - n.getSortIndex() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(n, i);
  }
};
G.prototype.getUserData = function() {
  return this._userData;
};
G.prototype.getSRID = function() {
  return this._SRID;
};
G.prototype.getEnvelope = function() {
  return this.getFactory().toGeometry(this.getEnvelopeInternal());
};
G.prototype.checkNotGeometryCollection = function(t) {
  if (t.getSortIndex() === G.SORTINDEX_GEOMETRYCOLLECTION)
    throw new ft("This method does not support GeometryCollection arguments");
};
G.prototype.equal = function(t, e, n) {
  return n === 0 ? t.equals(e) : t.distance(e) <= n;
};
G.prototype.norm = function() {
  var t = this.copy();
  return t.normalize(), t;
};
G.prototype.getPrecisionModel = function() {
  return this._factory.getPrecisionModel();
};
G.prototype.getEnvelopeInternal = function() {
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new B(this._envelope);
};
G.prototype.setSRID = function(t) {
  this._SRID = t;
};
G.prototype.setUserData = function(t) {
  this._userData = t;
};
G.prototype.compare = function(t, e) {
  for (var n = t.iterator(), i = e.iterator(); n.hasNext() && i.hasNext(); ) {
    var o = n.next(), s = i.next(), a = o.compareTo(s);
    if (a !== 0)
      return a;
  }
  return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
};
G.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
G.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === G.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === G.SORTINDEX_MULTIPOINT || this.getSortIndex() === G.SORTINDEX_MULTILINESTRING || this.getSortIndex() === G.SORTINDEX_MULTIPOLYGON;
};
G.prototype.interfaces_ = function() {
  return [ts, ke, Ge];
};
G.prototype.getClass = function() {
  return G;
};
G.hasNonEmptyElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (!t[e].isEmpty())
      return !0;
  return !1;
};
G.hasNullElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e] === null)
      return !0;
  return !1;
};
kn.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
kn.SORTINDEX_POINT.get = function() {
  return 0;
};
kn.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
kn.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
kn.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
kn.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
kn.SORTINDEX_POLYGON.get = function() {
  return 5;
};
kn.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
kn.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
kn.geometryChangedFilter.get = function() {
  return Us;
};
Object.defineProperties(G, kn);
var Us = function() {
};
Us.interfaces_ = function() {
  return [Jn];
};
Us.filter = function(t) {
  t.geometryChangedAction();
};
var Pn = function() {
};
Pn.prototype.filter = function(t) {
};
Pn.prototype.interfaces_ = function() {
  return [];
};
Pn.prototype.getClass = function() {
  return Pn;
};
var Ae = function() {
}, rr = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
Ae.prototype.isInBoundary = function(t) {
};
Ae.prototype.interfaces_ = function() {
  return [];
};
Ae.prototype.getClass = function() {
  return Ae;
};
rr.Mod2BoundaryNodeRule.get = function() {
  return Ci;
};
rr.EndPointBoundaryNodeRule.get = function() {
  return Ni;
};
rr.MultiValentEndPointBoundaryNodeRule.get = function() {
  return xi;
};
rr.MonoValentEndPointBoundaryNodeRule.get = function() {
  return Si;
};
rr.MOD2_BOUNDARY_RULE.get = function() {
  return new Ci();
};
rr.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Ni();
};
rr.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new xi();
};
rr.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Si();
};
rr.OGC_SFS_BOUNDARY_RULE.get = function() {
  return Ae.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(Ae, rr);
var Ci = function() {
};
Ci.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
Ci.prototype.interfaces_ = function() {
  return [Ae];
};
Ci.prototype.getClass = function() {
  return Ci;
};
var Ni = function() {
};
Ni.prototype.isInBoundary = function(t) {
  return t > 0;
};
Ni.prototype.interfaces_ = function() {
  return [Ae];
};
Ni.prototype.getClass = function() {
  return Ni;
};
var xi = function() {
};
xi.prototype.isInBoundary = function(t) {
  return t > 1;
};
xi.prototype.interfaces_ = function() {
  return [Ae];
};
xi.prototype.getClass = function() {
  return xi;
};
var Si = function() {
};
Si.prototype.isInBoundary = function(t) {
  return t === 1;
};
Si.prototype.interfaces_ = function() {
  return [Ae];
};
Si.prototype.getClass = function() {
  return Si;
};
var Lt = function() {
};
Lt.prototype.add = function() {
};
Lt.prototype.addAll = function() {
};
Lt.prototype.isEmpty = function() {
};
Lt.prototype.iterator = function() {
};
Lt.prototype.size = function() {
};
Lt.prototype.toArray = function() {
};
Lt.prototype.remove = function() {
};
function qs(r) {
  this.message = r || "";
}
qs.prototype = new Error();
qs.prototype.name = "IndexOutOfBoundsException";
var Ui = function() {
};
Ui.prototype.hasNext = function() {
};
Ui.prototype.next = function() {
};
Ui.prototype.remove = function() {
};
var Ue = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(Lt);
function qi(r) {
  this.message = r || "";
}
qi.prototype = new Error();
qi.prototype.name = "NoSuchElementException";
var O = function(r) {
  function t() {
    r.call(this), this.array_ = [], arguments[0] instanceof Lt && this.addAll(arguments[0]);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [r, Lt];
  }, t.prototype.add = function(n) {
    return arguments.length === 1 ? this.array_.push(n) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, t.prototype.clear = function() {
    this.array_ = [];
  }, t.prototype.addAll = function(n) {
    for (var i = this, o = n.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.set = function(n, i) {
    var o = this.array_[n];
    return this.array_[n] = i, o;
  }, t.prototype.iterator = function() {
    return new Kc(this);
  }, t.prototype.get = function(n) {
    if (n < 0 || n >= this.size())
      throw new qs();
    return this.array_[n];
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.toArray = function() {
    for (var n = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(n.array_[o]);
    return i;
  }, t.prototype.remove = function(n) {
    for (var i = this, o = !1, s = 0, a = this.array_.length; s < a; s++)
      if (i.array_[s] === n) {
        i.array_.splice(s, 1), o = !0;
        break;
      }
    return o;
  }, t;
}(Ue), Kc = function(r) {
  function t(e) {
    r.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new qi();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(n) {
    return this.arrayList_.set(this.position_ - 1, n);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(Ui), _o = function(r) {
  function t() {
    if (r.call(this), arguments.length !== 0) {
      if (arguments.length === 1) {
        var n = arguments[0];
        this.ensureCapacity(n.length), this.add(n, !0);
      } else if (arguments.length === 2) {
        var i = arguments[0], o = arguments[1];
        this.ensureCapacity(i.length), this.add(i, o);
      }
    }
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { coordArrayType: { configurable: !0 } };
  return e.coordArrayType.get = function() {
    return new Array(0).fill(null);
  }, t.prototype.getCoordinate = function(i) {
    return this.get(i);
  }, t.prototype.addAll = function() {
    var i = this;
    if (arguments.length === 2) {
      for (var o = arguments[0], s = arguments[1], a = !1, u = o.iterator(); u.hasNext(); )
        i.add(u.next(), s), a = !0;
      return a;
    } else
      return r.prototype.addAll.apply(this, arguments);
  }, t.prototype.clone = function() {
    for (var i = this, o = r.prototype.clone.call(this), s = 0; s < this.size(); s++)
      o.add(s, i.get(s).copy());
    return o;
  }, t.prototype.toCoordinateArray = function() {
    return this.toArray(t.coordArrayType);
  }, t.prototype.add = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0];
      r.prototype.add.call(this, o);
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var s = arguments[0], a = arguments[1];
        return this.add(s, a, !0), !0;
      } else if (arguments[0] instanceof y && typeof arguments[1] == "boolean") {
        var u = arguments[0], l = arguments[1];
        if (!l && this.size() >= 1) {
          var c = this.get(this.size() - 1);
          if (c.equals2D(u))
            return null;
        }
        r.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var f = arguments[0], h = arguments[1];
        return this.add(f, h), !0;
      }
    } else if (arguments.length === 3) {
      if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var g = arguments[0], p = arguments[1], d = arguments[2];
        if (d)
          for (var v = 0; v < g.length; v++)
            i.add(g[v], p);
        else
          for (var _ = g.length - 1; _ >= 0; _--)
            i.add(g[_], p);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof y) {
        var C = arguments[0], E = arguments[1], S = arguments[2];
        if (!S) {
          var N = this.size();
          if (N > 0) {
            if (C > 0) {
              var w = this.get(C - 1);
              if (w.equals2D(E))
                return null;
            }
            if (C < N) {
              var M = this.get(C);
              if (M.equals2D(E))
                return null;
            }
          }
        }
        r.prototype.add.call(this, C, E);
      }
    } else if (arguments.length === 4) {
      var A = arguments[0], L = arguments[1], F = arguments[2], X = arguments[3], R = 1;
      F > X && (R = -1);
      for (var Y = F; Y !== X; Y += R)
        i.add(A[Y], L);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new y(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(O), j = function() {
}, ns = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
ns.ForwardComparator.get = function() {
  return ro;
};
ns.BidirectionalComparator.get = function() {
  return wi;
};
ns.coordArrayType.get = function() {
  return new Array(0).fill(null);
};
j.prototype.interfaces_ = function() {
  return [];
};
j.prototype.getClass = function() {
  return j;
};
j.isRing = function(t) {
  return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]));
};
j.ptNotInList = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    if (j.indexOf(i, e) < 0)
      return i;
  }
  return null;
};
j.scroll = function(t, e) {
  var n = j.indexOf(e, t);
  if (n < 0)
    return null;
  var i = new Array(t.length).fill(null);
  Xt.arraycopy(t, n, i, 0, t.length - n), Xt.arraycopy(t, 0, i, t.length - n, n), Xt.arraycopy(i, 0, t, 0, t.length);
};
j.equals = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (t === e)
      return !0;
    if (t === null || e === null || t.length !== e.length)
      return !1;
    for (var n = 0; n < t.length; n++)
      if (!t[n].equals(e[n]))
        return !1;
    return !0;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (i === o)
      return !0;
    if (i === null || o === null || i.length !== o.length)
      return !1;
    for (var a = 0; a < i.length; a++)
      if (s.compare(i[a], o[a]) !== 0)
        return !1;
    return !0;
  }
};
j.intersection = function(t, e) {
  for (var n = new _o(), i = 0; i < t.length; i++)
    e.intersects(t[i]) && n.add(t[i], !0);
  return n.toCoordinateArray();
};
j.hasRepeatedPoints = function(t) {
  for (var e = 1; e < t.length; e++)
    if (t[e - 1].equals(t[e]))
      return !0;
  return !1;
};
j.removeRepeatedPoints = function(t) {
  if (!j.hasRepeatedPoints(t))
    return t;
  var e = new _o(t, !1);
  return e.toCoordinateArray();
};
j.reverse = function(t) {
  for (var e = t.length - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++) {
    var o = t[i];
    t[i] = t[e - i], t[e - i] = o;
  }
};
j.removeNull = function(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    t[n] !== null && e++;
  var i = new Array(e).fill(null);
  if (e === 0)
    return i;
  for (var o = 0, s = 0; s < t.length; s++)
    t[s] !== null && (i[o++] = t[s]);
  return i;
};
j.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)
      e[n] = new y(t[n]);
    return e;
  } else if (arguments.length === 5)
    for (var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      s[a + l] = new y(i[o + l]);
};
j.isEqualReversed = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n], o = e[t.length - n - 1];
    if (i.compareTo(o) !== 0)
      return !1;
  }
  return !0;
};
j.envelope = function(t) {
  for (var e = new B(), n = 0; n < t.length; n++)
    e.expandToInclude(t[n]);
  return e;
};
j.toCoordinateArray = function(t) {
  return t.toArray(j.coordArrayType);
};
j.atLeastNCoordinatesOrNothing = function(t, e) {
  return e.length >= t ? e : [];
};
j.indexOf = function(t, e) {
  for (var n = 0; n < e.length; n++)
    if (t.equals(e[n]))
      return n;
  return -1;
};
j.increasingDirection = function(t) {
  for (var e = 0; e < Math.trunc(t.length / 2); e++) {
    var n = t.length - 1 - e, i = t[e].compareTo(t[n]);
    if (i !== 0)
      return i;
  }
  return 1;
};
j.compare = function(t, e) {
  for (var n = 0; n < t.length && n < e.length; ) {
    var i = t[n].compareTo(e[n]);
    if (i !== 0)
      return i;
    n++;
  }
  return n < e.length ? -1 : n < t.length ? 1 : 0;
};
j.minCoordinate = function(t) {
  for (var e = null, n = 0; n < t.length; n++)
    (e === null || e.compareTo(t[n]) > 0) && (e = t[n]);
  return e;
};
j.extract = function(t, e, n) {
  e = we.clamp(e, 0, t.length), n = we.clamp(n, -1, t.length);
  var i = n - e + 1;
  n < 0 && (i = 0), e >= t.length && (i = 0), n < e && (i = 0);
  var o = new Array(i).fill(null);
  if (i === 0)
    return o;
  for (var s = 0, a = e; a <= n; a++)
    o[s++] = t[a];
  return o;
};
Object.defineProperties(j, ns);
var ro = function() {
};
ro.prototype.compare = function(t, e) {
  var n = t, i = e;
  return j.compare(n, i);
};
ro.prototype.interfaces_ = function() {
  return [Ei];
};
ro.prototype.getClass = function() {
  return ro;
};
var wi = function() {
};
wi.prototype.compare = function(t, e) {
  var n = t, i = e;
  if (n.length < i.length)
    return -1;
  if (n.length > i.length)
    return 1;
  if (n.length === 0)
    return 0;
  var o = j.compare(n, i), s = j.isEqualReversed(n, i);
  return s ? 0 : o;
};
wi.prototype.OLDcompare = function(t, e) {
  var n = t, i = e;
  if (n.length < i.length)
    return -1;
  if (n.length > i.length)
    return 1;
  if (n.length === 0)
    return 0;
  for (var o = j.increasingDirection(n), s = j.increasingDirection(i), a = o > 0 ? 0 : n.length - 1, u = s > 0 ? 0 : n.length - 1, l = 0; l < n.length; l++) {
    var c = n[a].compareTo(i[u]);
    if (c !== 0)
      return c;
    a += o, u += s;
  }
  return 0;
};
wi.prototype.interfaces_ = function() {
  return [Ei];
};
wi.prototype.getClass = function() {
  return wi;
};
var fi = function() {
};
fi.prototype.get = function() {
};
fi.prototype.put = function() {
};
fi.prototype.size = function() {
};
fi.prototype.values = function() {
};
fi.prototype.entrySet = function() {
};
var Qc = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(fi);
function Eo(r) {
  this.message = r || "";
}
Eo.prototype = new Error();
Eo.prototype.name = "OperationNotSupported";
function rs() {
}
rs.prototype = new Lt();
rs.prototype.contains = function() {
};
var Xs = function(r) {
  function t() {
    r.call(this), this.array_ = [], arguments[0] instanceof Lt && this.addAll(arguments[0]);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.contains = function(n) {
    for (var i = this, o = 0, s = this.array_.length; o < s; o++) {
      var a = i.array_[o];
      if (a === n)
        return !0;
    }
    return !1;
  }, t.prototype.add = function(n) {
    return this.contains(n) ? !1 : (this.array_.push(n), !0);
  }, t.prototype.addAll = function(n) {
    for (var i = this, o = n.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.remove = function(n) {
    throw new Error();
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.toArray = function() {
    for (var n = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(n.array_[o]);
    return i;
  }, t.prototype.iterator = function() {
    return new Zc(this);
  }, t;
}(rs), Zc = function(r) {
  function t(e) {
    r.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new qi();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new Eo();
  }, t;
}(Ui), Wn = 0, Nr = 1;
function Ta(r) {
  return r === null ? Wn : r.color;
}
function at(r) {
  return r === null ? null : r.parent;
}
function qn(r, t) {
  r !== null && (r.color = t);
}
function Is(r) {
  return r === null ? null : r.left;
}
function Ma(r) {
  return r === null ? null : r.right;
}
function Kt() {
  this.root_ = null, this.size_ = 0;
}
Kt.prototype = new Qc();
Kt.prototype.get = function(r) {
  for (var t = this.root_; t !== null; ) {
    var e = r.compareTo(t.key);
    if (e < 0)
      t = t.left;
    else if (e > 0)
      t = t.right;
    else
      return t.value;
  }
  return null;
};
Kt.prototype.put = function(r, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: r,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: Wn,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    }, this.size_ = 1, null;
  var e = this.root_, n, i;
  do
    if (n = e, i = r.compareTo(e.key), i < 0)
      e = e.left;
    else if (i > 0)
      e = e.right;
    else {
      var o = e.value;
      return e.value = t, o;
    }
  while (e !== null);
  var s = {
    key: r,
    left: null,
    right: null,
    value: t,
    parent: n,
    color: Wn,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return i < 0 ? n.left = s : n.right = s, this.fixAfterInsertion(s), this.size_++, null;
};
Kt.prototype.fixAfterInsertion = function(r) {
  var t = this;
  for (r.color = Nr; r != null && r !== this.root_ && r.parent.color === Nr; )
    if (at(r) === Is(at(at(r)))) {
      var e = Ma(at(at(r)));
      Ta(e) === Nr ? (qn(at(r), Wn), qn(e, Wn), qn(at(at(r)), Nr), r = at(at(r))) : (r === Ma(at(r)) && (r = at(r), t.rotateLeft(r)), qn(at(r), Wn), qn(at(at(r)), Nr), t.rotateRight(at(at(r))));
    } else {
      var n = Is(at(at(r)));
      Ta(n) === Nr ? (qn(at(r), Wn), qn(n, Wn), qn(at(at(r)), Nr), r = at(at(r))) : (r === Is(at(r)) && (r = at(r), t.rotateRight(r)), qn(at(r), Wn), qn(at(at(r)), Nr), t.rotateLeft(at(at(r))));
    }
  this.root_.color = Wn;
};
Kt.prototype.values = function() {
  var r = new O(), t = this.getFirstEntry();
  if (t !== null)
    for (r.add(t.value); (t = Kt.successor(t)) !== null; )
      r.add(t.value);
  return r;
};
Kt.prototype.entrySet = function() {
  var r = new Xs(), t = this.getFirstEntry();
  if (t !== null)
    for (r.add(t); (t = Kt.successor(t)) !== null; )
      r.add(t);
  return r;
};
Kt.prototype.rotateLeft = function(r) {
  if (r != null) {
    var t = r.right;
    r.right = t.left, t.left != null && (t.left.parent = r), t.parent = r.parent, r.parent === null ? this.root_ = t : r.parent.left === r ? r.parent.left = t : r.parent.right = t, t.left = r, r.parent = t;
  }
};
Kt.prototype.rotateRight = function(r) {
  if (r != null) {
    var t = r.left;
    r.left = t.right, t.right != null && (t.right.parent = r), t.parent = r.parent, r.parent === null ? this.root_ = t : r.parent.right === r ? r.parent.right = t : r.parent.left = t, t.right = r, r.parent = t;
  }
};
Kt.prototype.getFirstEntry = function() {
  var r = this.root_;
  if (r != null)
    for (; r.left != null; )
      r = r.left;
  return r;
};
Kt.successor = function(r) {
  if (r === null)
    return null;
  if (r.right !== null) {
    for (var t = r.right; t.left !== null; )
      t = t.left;
    return t;
  } else {
    for (var e = r.parent, n = r; e !== null && n === e.right; )
      n = e, e = e.parent;
    return e;
  }
};
Kt.prototype.size = function() {
  return this.size_;
};
var io = function() {
};
io.prototype.interfaces_ = function() {
  return [];
};
io.prototype.getClass = function() {
  return io;
};
function Iu() {
}
Iu.prototype = new rs();
function cn() {
  this.array_ = [], arguments[0] instanceof Lt && this.addAll(arguments[0]);
}
cn.prototype = new Iu();
cn.prototype.contains = function(r) {
  for (var t = this, e = 0, n = this.array_.length; e < n; e++) {
    var i = t.array_[e];
    if (i.compareTo(r) === 0)
      return !0;
  }
  return !1;
};
cn.prototype.add = function(r) {
  var t = this;
  if (this.contains(r))
    return !1;
  for (var e = 0, n = this.array_.length; e < n; e++) {
    var i = t.array_[e];
    if (i.compareTo(r) === 1)
      return t.array_.splice(e, 0, r), !0;
  }
  return this.array_.push(r), !0;
};
cn.prototype.addAll = function(r) {
  for (var t = this, e = r.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
cn.prototype.remove = function(r) {
  throw new Eo();
};
cn.prototype.size = function() {
  return this.array_.length;
};
cn.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
cn.prototype.toArray = function() {
  for (var r = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(r.array_[e]);
  return t;
};
cn.prototype.iterator = function() {
  return new is(this);
};
var is = function(r) {
  this.treeSet_ = r, this.position_ = 0;
};
is.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new qi();
  return this.treeSet_.array_[this.position_++];
};
is.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
is.prototype.remove = function() {
  throw new Eo();
};
var Lr = function() {
};
Lr.sort = function() {
  var t = arguments[0], e, n, i, o;
  if (arguments.length === 1)
    o = function(a, u) {
      return a.compareTo(u);
    }, t.sort(o);
  else if (arguments.length === 2)
    i = arguments[1], o = function(a, u) {
      return i.compare(a, u);
    }, t.sort(o);
  else if (arguments.length === 3) {
    n = t.slice(arguments[1], arguments[2]), n.sort();
    var s = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
    for (t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
  } else if (arguments.length === 4)
    for (n = t.slice(arguments[1], arguments[2]), i = arguments[3], o = function(a, u) {
      return i.compare(a, u);
    }, n.sort(o), s = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length)), t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
};
Lr.asList = function(t) {
  for (var e = new O(), n = 0, i = t.length; n < i; n++)
    e.add(t[n]);
  return e;
};
var Z = function() {
}, Ze = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
Ze.P.get = function() {
  return 0;
};
Ze.L.get = function() {
  return 1;
};
Ze.A.get = function() {
  return 2;
};
Ze.FALSE.get = function() {
  return -1;
};
Ze.TRUE.get = function() {
  return -2;
};
Ze.DONTCARE.get = function() {
  return -3;
};
Ze.SYM_FALSE.get = function() {
  return "F";
};
Ze.SYM_TRUE.get = function() {
  return "T";
};
Ze.SYM_DONTCARE.get = function() {
  return "*";
};
Ze.SYM_P.get = function() {
  return "0";
};
Ze.SYM_L.get = function() {
  return "1";
};
Ze.SYM_A.get = function() {
  return "2";
};
Z.prototype.interfaces_ = function() {
  return [];
};
Z.prototype.getClass = function() {
  return Z;
};
Z.toDimensionSymbol = function(t) {
  switch (t) {
    case Z.FALSE:
      return Z.SYM_FALSE;
    case Z.TRUE:
      return Z.SYM_TRUE;
    case Z.DONTCARE:
      return Z.SYM_DONTCARE;
    case Z.P:
      return Z.SYM_P;
    case Z.L:
      return Z.SYM_L;
    case Z.A:
      return Z.SYM_A;
  }
  throw new ft("Unknown dimension value: " + t);
};
Z.toDimensionValue = function(t) {
  switch (no.toUpperCase(t)) {
    case Z.SYM_FALSE:
      return Z.FALSE;
    case Z.SYM_TRUE:
      return Z.TRUE;
    case Z.SYM_DONTCARE:
      return Z.DONTCARE;
    case Z.SYM_P:
      return Z.P;
    case Z.SYM_L:
      return Z.L;
    case Z.SYM_A:
      return Z.A;
  }
  throw new ft("Unknown dimension symbol: " + t);
};
Object.defineProperties(Z, Ze);
var fn = function() {
};
fn.prototype.filter = function(t) {
};
fn.prototype.interfaces_ = function() {
  return [];
};
fn.prototype.getClass = function() {
  return fn;
};
var Xe = function() {
};
Xe.prototype.filter = function(t, e) {
};
Xe.prototype.isDone = function() {
};
Xe.prototype.isGeometryChanged = function() {
};
Xe.prototype.interfaces_ = function() {
  return [];
};
Xe.prototype.getClass = function() {
  return Xe;
};
var re = function(r) {
  function t(n, i) {
    if (r.call(this, i), this._geometries = n || [], r.hasNullElements(this._geometries))
      throw new ft("geometries must not contain null elements");
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var i = this, o = new B(), s = 0; s < this._geometries.length; s++)
      o.expandToInclude(i._geometries[s].getEnvelopeInternal());
    return o;
  }, t.prototype.getGeometryN = function(i) {
    return this._geometries[i];
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_GEOMETRYCOLLECTION;
  }, t.prototype.getCoordinates = function() {
    for (var i = this, o = new Array(this.getNumPoints()).fill(null), s = -1, a = 0; a < this._geometries.length; a++)
      for (var u = i._geometries[a].getCoordinates(), l = 0; l < u.length; l++)
        s++, o[s] = u[l];
    return o;
  }, t.prototype.getArea = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getArea();
    return o;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._geometries.length !== a._geometries.length)
        return !1;
      for (var u = 0; u < this._geometries.length; u++)
        if (!i._geometries[u].equalsExact(a._geometries[u], s))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      i._geometries[o].normalize();
    Lr.sort(this._geometries);
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
  }, t.prototype.getBoundaryDimension = function() {
    for (var i = this, o = Z.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getBoundaryDimension());
    return o;
  }, t.prototype.getDimension = function() {
    for (var i = this, o = Z.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getDimension());
    return o;
  }, t.prototype.getLength = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getNumPoints();
    return o;
  }, t.prototype.getNumGeometries = function() {
    return this._geometries.length;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createGeometryCollection(s);
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = new cn(Lr.asList(this._geometries)), a = new cn(Lr.asList(o._geometries));
      return this.compare(s, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, f = this.getNumGeometries(), h = c.getNumGeometries(), g = 0; g < f && g < h; ) {
        var p = i.getGeometryN(g), d = c.getGeometryN(g), v = p.compareToSameClass(d, l);
        if (v !== 0)
          return v;
        g++;
      }
      return g < f ? 1 : g < h ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (V(arguments[0], Pn))
      for (var o = arguments[0], s = 0; s < this._geometries.length; s++)
        i._geometries[s].apply(o);
    else if (V(arguments[0], Xe)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (i._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], fn)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        i._geometries[c].apply(l);
    } else if (V(arguments[0], Jn)) {
      var f = arguments[0];
      f.filter(this);
      for (var h = 0; h < this._geometries.length; h++)
        i._geometries[h].apply(f);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), q.shouldNeverReachHere(), null;
  }, t.prototype.clone = function() {
    var i = this, o = r.prototype.clone.call(this);
    o._geometries = new Array(this._geometries.length).fill(null);
    for (var s = 0; s < this._geometries.length; s++)
      o._geometries[s] = i._geometries[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "GeometryCollection";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.isEmpty = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isEmpty())
        return !1;
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -5694727726395021e3;
  }, Object.defineProperties(t, e), t;
}(G), Dr = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? Z.FALSE : 0;
  }, t.prototype.isClosed = function() {
    var i = this;
    if (this.isEmpty())
      return !1;
    for (var o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isClosed())
        return !1;
    return !0;
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[o - 1 - a] = i._geometries[a].reverse();
    return this.getFactory().createMultiLineString(s);
  }, t.prototype.getBoundary = function() {
    return new Oe(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [io];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(re), Oe = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = Ae.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this._geom = n, this._geomFact = n.getFactory(), this._bnRule = i;
  }
};
Oe.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Oe.prototype.getBoundary = function() {
  return this._geom instanceof vt ? this.boundaryLineString(this._geom) : this._geom instanceof Dr ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
Oe.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
Oe.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
Oe.prototype.computeBoundaryCoordinates = function(t) {
  var e = this, n = new O();
  this._endpointMap = new Kt();
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    o.getNumPoints() !== 0 && (e.addEndpoint(o.getCoordinateN(0)), e.addEndpoint(o.getCoordinateN(o.getNumPoints() - 1)));
  }
  for (var s = this._endpointMap.entrySet().iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && n.add(a.getKey());
  }
  return j.toCoordinateArray(n);
};
Oe.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new Xo(), this._endpointMap.put(t, e)), e.count++;
};
Oe.prototype.interfaces_ = function() {
  return [];
};
Oe.prototype.getClass = function() {
  return Oe;
};
Oe.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Oe(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = new Oe(n, i);
    return o.getBoundary();
  }
};
var Xo = function() {
  this.count = null;
};
Xo.prototype.interfaces_ = function() {
  return [];
};
Xo.prototype.getClass = function() {
  return Xo;
};
function Jc() {
}
function $c() {
}
var tf = function() {
};
function ef() {
}
function nf() {
}
function rf() {
}
var De = function() {
}, Ys = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
De.prototype.interfaces_ = function() {
  return [];
};
De.prototype.getClass = function() {
  return De;
};
De.chars = function(t, e) {
  for (var n = new Array(e).fill(null), i = 0; i < e; i++)
    n[i] = t;
  return String(n);
};
De.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new ef(), n = new Jc();
    return t.printStackTrace(n), e.toString();
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1], s = "";
    new $c(De.getStackTrace(i));
    for (var a = new rf(), u = 0; u < o; u++)
      try {
        s += a.readLine() + De.NEWLINE;
      } catch (l) {
        if (l instanceof nf)
          q.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return s;
  }
};
De.split = function(t, e) {
  for (var n = e.length, i = new O(), o = "" + t, s = o.indexOf(e); s >= 0; ) {
    var a = o.substring(0, s);
    i.add(a), o = o.substring(s + n), s = o.indexOf(e);
  }
  o.length > 0 && i.add(o);
  for (var u = new Array(i.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = i.get(l);
  return u;
};
De.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return De.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
De.spaces = function(t) {
  return De.chars(" ", t);
};
Ys.NEWLINE.get = function() {
  return Xt.getProperty("line.separator");
};
Ys.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new tf();
};
Object.defineProperties(De, Ys);
var It = function() {
};
It.prototype.interfaces_ = function() {
  return [];
};
It.prototype.getClass = function() {
  return It;
};
It.copyCoord = function(t, e, n, i) {
  for (var o = Math.min(t.getDimension(), n.getDimension()), s = 0; s < o; s++)
    n.setOrdinate(i, s, t.getOrdinate(e, s));
};
It.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, Q.X) === t.getOrdinate(e - 1, Q.X) && t.getOrdinate(0, Q.Y) === t.getOrdinate(e - 1, Q.Y);
};
It.isEqual = function(t, e) {
  var n = t.size(), i = e.size();
  if (n !== i)
    return !1;
  for (var o = Math.min(t.getDimension(), e.getDimension()), s = 0; s < n; s++)
    for (var a = 0; a < o; a++) {
      var u = t.getOrdinate(s, a), l = e.getOrdinate(s, a);
      if (t.getOrdinate(s, a) !== e.getOrdinate(s, a) && !(z.isNaN(u) && z.isNaN(l)))
        return !1;
    }
  return !0;
};
It.extend = function(t, e, n) {
  var i = t.create(n, e.getDimension()), o = e.size();
  if (It.copy(e, 0, i, 0, o), o > 0)
    for (var s = o; s < n; s++)
      It.copy(e, o - 1, i, s, 1);
  return i;
};
It.reverse = function(t) {
  for (var e = t.size() - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++)
    It.swap(t, i, e - i);
};
It.swap = function(t, e, n) {
  if (e === n)
    return null;
  for (var i = 0; i < t.getDimension(); i++) {
    var o = t.getOrdinate(e, i);
    t.setOrdinate(e, i, t.getOrdinate(n, i)), t.setOrdinate(n, i, o);
  }
};
It.copy = function(t, e, n, i, o) {
  for (var s = 0; s < o; s++)
    It.copyCoord(t, e + s, n, i + s);
};
It.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var n = t.getDimension(), i = new En();
    i.append("(");
    for (var o = 0; o < e; o++) {
      o > 0 && i.append(" ");
      for (var s = 0; s < n; s++)
        s > 0 && i.append(","), i.append(De.toString(t.getOrdinate(o, s)));
    }
    return i.append(")"), i.toString();
  }
};
It.ensureValidRing = function(t, e) {
  var n = e.size();
  if (n === 0)
    return e;
  if (n <= 3)
    return It.createClosedRing(t, e, 4);
  var i = e.getOrdinate(0, Q.X) === e.getOrdinate(n - 1, Q.X) && e.getOrdinate(0, Q.Y) === e.getOrdinate(n - 1, Q.Y);
  return i ? e : It.createClosedRing(t, e, n + 1);
};
It.createClosedRing = function(t, e, n) {
  var i = t.create(n, e.getDimension()), o = e.size();
  It.copy(e, 0, i, 0, o);
  for (var s = o; s < n; s++)
    It.copy(e, 0, i, s, 1);
  return i;
};
var vt = function(r) {
  function t(n, i) {
    r.call(this, i), this._points = null, this.init(n);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new B() : this._points.expandEnvelope(new B());
  }, t.prototype.isRing = function() {
    return this.isClosed() && this.isSimple();
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_LINESTRING;
  }, t.prototype.getCoordinates = function() {
    return this._points.toCoordinateArray();
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._points.size() !== a._points.size())
        return !1;
      for (var u = 0; u < this._points.size(); u++)
        if (!i.equal(i._points.getCoordinate(u), a._points.getCoordinate(u), s))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < Math.trunc(this._points.size() / 2); o++) {
      var s = i._points.size() - 1 - o;
      if (!i._points.getCoordinate(o).equals(i._points.getCoordinate(s)))
        return i._points.getCoordinate(o).compareTo(i._points.getCoordinate(s)) > 0 && It.reverse(i._points), null;
    }
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._points.getCoordinate(0);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? Z.FALSE : 0;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
  }, t.prototype.getEndPoint = function() {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.getLength = function() {
    return T.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    It.reverse(i);
    var o = this.getFactory().createLineString(i);
    return o;
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      for (var o = arguments[0], s = o, a = 0, u = 0; a < this._points.size() && u < s._points.size(); ) {
        var l = i._points.getCoordinate(a).compareTo(s._points.getCoordinate(u));
        if (l !== 0)
          return l;
        a++, u++;
      }
      return a < this._points.size() ? 1 : u < s._points.size() ? -1 : 0;
    } else if (arguments.length === 2) {
      var c = arguments[0], f = arguments[1], h = c;
      return f.compare(this._points, h._points);
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (V(arguments[0], Pn))
      for (var o = arguments[0], s = 0; s < this._points.size(); s++)
        o.filter(i._points.getCoordinate(s));
    else if (V(arguments[0], Xe)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(i._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], fn)) {
      var l = arguments[0];
      l.filter(this);
    } else if (V(arguments[0], Jn)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Oe(this).getBoundary();
  }, t.prototype.isEquivalentClass = function(i) {
    return i instanceof t;
  }, t.prototype.clone = function() {
    var i = r.prototype.clone.call(this);
    return i._points = this._points.clone(), i;
  }, t.prototype.getCoordinateN = function(i) {
    return this._points.getCoordinate(i);
  }, t.prototype.getGeometryType = function() {
    return "LineString";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._points;
  }, t.prototype.isEmpty = function() {
    return this._points.size() === 0;
  }, t.prototype.init = function(i) {
    if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1)
      throw new ft("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
    this._points = i;
  }, t.prototype.isCoordinate = function(i) {
    for (var o = this, s = 0; s < this._points.size(); s++)
      if (o._points.getCoordinate(s).equals(i))
        return !0;
    return !1;
  }, t.prototype.getStartPoint = function() {
    return this.isEmpty() ? null : this.getPointN(0);
  }, t.prototype.getPointN = function(i) {
    return this.getFactory().createPoint(this._points.getCoordinate(i));
  }, t.prototype.interfaces_ = function() {
    return [io];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(G), oo = function() {
};
oo.prototype.interfaces_ = function() {
  return [];
};
oo.prototype.getClass = function() {
  return oo;
};
var ve = function(r) {
  function t(n, i) {
    r.call(this, i), this._coordinates = n || null, this.init(this._coordinates);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new B();
    var i = new B();
    return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_POINT;
  }, t.prototype.getCoordinates = function() {
    return this.isEmpty() ? [] : [this.getCoordinate()];
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? this.isEmpty() && i.isEmpty() ? !0 : this.isEmpty() !== i.isEmpty() ? !1 : this.equal(i.getCoordinate(), this.getCoordinate(), o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
  }, t.prototype.getCoordinate = function() {
    return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
  }, t.prototype.getBoundaryDimension = function() {
    return Z.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getNumPoints = function() {
    return this.isEmpty() ? 0 : 1;
  }, t.prototype.reverse = function() {
    return this.copy();
  }, t.prototype.getX = function() {
    if (this.getCoordinate() === null)
      throw new Error("getX called on empty Point");
    return this.getCoordinate().x;
  }, t.prototype.compareToSameClass = function() {
    if (arguments.length === 1) {
      var i = arguments[0], o = i;
      return this.getCoordinate().compareTo(o.getCoordinate());
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1], u = s;
      return a.compare(this._coordinates, u._coordinates);
    }
  }, t.prototype.apply = function() {
    if (V(arguments[0], Pn)) {
      var i = arguments[0];
      if (this.isEmpty())
        return null;
      i.filter(this.getCoordinate());
    } else if (V(arguments[0], Xe)) {
      var o = arguments[0];
      if (this.isEmpty())
        return null;
      o.filter(this._coordinates, 0), o.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], fn)) {
      var s = arguments[0];
      s.filter(this);
    } else if (V(arguments[0], Jn)) {
      var a = arguments[0];
      a.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.clone = function() {
    var i = r.prototype.clone.call(this);
    return i._coordinates = this._coordinates.clone(), i;
  }, t.prototype.getGeometryType = function() {
    return "Point";
  }, t.prototype.copy = function() {
    return new t(this._coordinates.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._coordinates;
  }, t.prototype.getY = function() {
    if (this.getCoordinate() === null)
      throw new Error("getY called on empty Point");
    return this.getCoordinate().y;
  }, t.prototype.isEmpty = function() {
    return this._coordinates.size() === 0;
  }, t.prototype.init = function(i) {
    i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), q.isTrue(i.size() <= 1), this._coordinates = i;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [oo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(G), hr = function() {
};
hr.prototype.interfaces_ = function() {
  return [];
};
hr.prototype.getClass = function() {
  return hr;
};
var Ot = function(r) {
  function t(n, i, o) {
    if (r.call(this, o), this._shell = null, this._holes = null, n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), r.hasNullElements(i))
      throw new ft("holes must not contain null elements");
    if (n.isEmpty() && r.hasNonEmptyElements(i))
      throw new ft("shell is empty but holes are not");
    this._shell = n, this._holes = i;
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this._shell.getEnvelopeInternal();
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_POLYGON;
  }, t.prototype.getCoordinates = function() {
    var i = this;
    if (this.isEmpty())
      return [];
    for (var o = new Array(this.getNumPoints()).fill(null), s = -1, a = this._shell.getCoordinates(), u = 0; u < a.length; u++)
      s++, o[s] = a[u];
    for (var l = 0; l < this._holes.length; l++)
      for (var c = i._holes[l].getCoordinates(), f = 0; f < c.length; f++)
        s++, o[s] = c[f];
    return o;
  }, t.prototype.getArea = function() {
    var i = this, o = 0;
    o += Math.abs(T.signedArea(this._shell.getCoordinateSequence()));
    for (var s = 0; s < this._holes.length; s++)
      o -= Math.abs(T.signedArea(i._holes[s].getCoordinateSequence()));
    return o;
  }, t.prototype.isRectangle = function() {
    if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5)
      return !1;
    for (var i = this._shell.getCoordinateSequence(), o = this.getEnvelopeInternal(), s = 0; s < 5; s++) {
      var a = i.getX(s);
      if (!(a === o.getMinX() || a === o.getMaxX()))
        return !1;
      var u = i.getY(s);
      if (!(u === o.getMinY() || u === o.getMaxY()))
        return !1;
    }
    for (var l = i.getX(0), c = i.getY(0), f = 1; f <= 4; f++) {
      var h = i.getX(f), g = i.getY(f), p = h !== l, d = g !== c;
      if (p === d)
        return !1;
      l = h, c = g;
    }
    return !0;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o, u = this._shell, l = a._shell;
      if (!u.equalsExact(l, s) || this._holes.length !== a._holes.length)
        return !1;
      for (var c = 0; c < this._holes.length; c++)
        if (!i._holes[c].equalsExact(a._holes[c], s))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    var i = this;
    if (arguments.length === 0) {
      this.normalize(this._shell, !0);
      for (var o = 0; o < this._holes.length; o++)
        i.normalize(i._holes[o], !1);
      Lr.sort(this._holes);
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1];
      if (s.isEmpty())
        return null;
      var u = new Array(s.getCoordinates().length - 1).fill(null);
      Xt.arraycopy(s.getCoordinates(), 0, u, 0, u.length);
      var l = j.minCoordinate(s.getCoordinates());
      j.scroll(u, l), Xt.arraycopy(u, 0, s.getCoordinates(), 0, u.length), s.getCoordinates()[u.length] = u[0], T.isCCW(s.getCoordinates()) === a && j.reverse(s.getCoordinates());
    }
  }, t.prototype.getCoordinate = function() {
    return this._shell.getCoordinate();
  }, t.prototype.getNumInteriorRing = function() {
    return this._holes.length;
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.getLength = function() {
    var i = this, o = 0;
    o += this._shell.getLength();
    for (var s = 0; s < this._holes.length; s++)
      o += i._holes[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = this._shell.getNumPoints(), s = 0; s < this._holes.length; s++)
      o += i._holes[s].getNumPoints();
    return o;
  }, t.prototype.reverse = function() {
    var i = this, o = this.copy();
    o._shell = this._shell.copy().reverse(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].copy().reverse();
    return o;
  }, t.prototype.convexHull = function() {
    return this.getExteriorRing().convexHull();
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = this._shell, a = o._shell;
      return s.compareToSameClass(a);
    } else if (arguments.length === 2) {
      var u = arguments[0], l = arguments[1], c = u, f = this._shell, h = c._shell, g = f.compareToSameClass(h, l);
      if (g !== 0)
        return g;
      for (var p = this.getNumInteriorRing(), d = c.getNumInteriorRing(), v = 0; v < p && v < d; ) {
        var _ = i.getInteriorRingN(v), C = c.getInteriorRingN(v), E = _.compareToSameClass(C, l);
        if (E !== 0)
          return E;
        v++;
      }
      return v < p ? 1 : v < d ? -1 : 0;
    }
  }, t.prototype.apply = function(i) {
    var o = this;
    if (V(i, Pn)) {
      this._shell.apply(i);
      for (var s = 0; s < this._holes.length; s++)
        o._holes[s].apply(i);
    } else if (V(i, Xe)) {
      if (this._shell.apply(i), !i.isDone())
        for (var a = 0; a < this._holes.length && (o._holes[a].apply(i), !i.isDone()); a++)
          ;
      i.isGeometryChanged() && this.geometryChanged();
    } else if (V(i, fn))
      i.filter(this);
    else if (V(i, Jn)) {
      i.filter(this), this._shell.apply(i);
      for (var u = 0; u < this._holes.length; u++)
        o._holes[u].apply(i);
    }
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    var o = new Array(this._holes.length + 1).fill(null);
    o[0] = this._shell;
    for (var s = 0; s < this._holes.length; s++)
      o[s + 1] = i._holes[s];
    return o.length <= 1 ? this.getFactory().createLinearRing(o[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(o);
  }, t.prototype.clone = function() {
    var i = this, o = r.prototype.clone.call(this);
    o._shell = this._shell.clone(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "Polygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = this._shell.copy(), s = new Array(this._holes.length).fill(null), a = 0; a < s.length; a++)
      s[a] = i._holes[a].copy();
    return new t(o, s, this._factory);
  }, t.prototype.getExteriorRing = function() {
    return this._shell;
  }, t.prototype.isEmpty = function() {
    return this._shell.isEmpty();
  }, t.prototype.getInteriorRingN = function(i) {
    return this._holes[i];
  }, t.prototype.interfaces_ = function() {
    return [hr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(G), Li = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_MULTIPOINT;
  }, t.prototype.isValid = function() {
    return !0;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return this._geometries[i].getCoordinate();
    } else
      return r.prototype.getCoordinate.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return Z.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.getGeometryType = function() {
    return "MultiPoint";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [oo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(re), Rn = function(r) {
  function t(n, i) {
    n instanceof y && i instanceof W && (n = i.getCoordinateSequenceFactory().create(n)), r.call(this, n, i), this.validateConstruction();
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return Z.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : r.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    It.reverse(i);
    var o = this.getFactory().createLinearRing(i);
    return o;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !r.prototype.isClosed.call(this))
      throw new ft("Points of LinearRing do not form a closed linestring");
    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
      throw new ft("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
  }, t.prototype.getGeometryType = function() {
    return "LinearRing";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.MINIMUM_VALID_SIZE.get = function() {
    return 4;
  }, e.serialVersionUID.get = function() {
    return -4261142084085851600;
  }, Object.defineProperties(t, e), t;
}(vt), Ln = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_MULTIPOLYGON;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createMultiPolygon(s);
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    for (var o = new O(), s = 0; s < this._geometries.length; s++)
      for (var a = i._geometries[s], u = a.getBoundary(), l = 0; l < u.getNumGeometries(); l++)
        o.add(u.getGeometryN(l));
    var c = new Array(o.size()).fill(null);
    return this.getFactory().createMultiLineString(o.toArray(c));
  }, t.prototype.getGeometryType = function() {
    return "MultiPolygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [hr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(re), Fe = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, os = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
Fe.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
Fe.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var n = this.editInternal(t, e);
  return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
};
Fe.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof re ? this.editGeometryCollection(t, e) : t instanceof Ot ? this.editPolygon(t, e) : t instanceof ve ? e.edit(t, this._factory) : t instanceof vt ? e.edit(t, this._factory) : (q.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
Fe.prototype.editGeometryCollection = function(t, e) {
  for (var n = this, i = e.edit(t, this._factory), o = new O(), s = 0; s < i.getNumGeometries(); s++) {
    var a = n.edit(i.getGeometryN(s), e);
    a === null || a.isEmpty() || o.add(a);
  }
  return i.getClass() === Li ? this._factory.createMultiPoint(o.toArray([])) : i.getClass() === Dr ? this._factory.createMultiLineString(o.toArray([])) : i.getClass() === Ln ? this._factory.createMultiPolygon(o.toArray([])) : this._factory.createGeometryCollection(o.toArray([]));
};
Fe.prototype.editPolygon = function(t, e) {
  var n = this, i = e.edit(t, this._factory);
  if (i === null && (i = this._factory.createPolygon(null)), i.isEmpty())
    return i;
  var o = this.edit(i.getExteriorRing(), e);
  if (o === null || o.isEmpty())
    return this._factory.createPolygon();
  for (var s = new O(), a = 0; a < i.getNumInteriorRing(); a++) {
    var u = n.edit(i.getInteriorRingN(a), e);
    u === null || u.isEmpty() || s.add(u);
  }
  return this._factory.createPolygon(o, s.toArray([]));
};
Fe.prototype.interfaces_ = function() {
  return [];
};
Fe.prototype.getClass = function() {
  return Fe;
};
Fe.GeometryEditorOperation = function() {
};
os.NoOpGeometryOperation.get = function() {
  return so;
};
os.CoordinateOperation.get = function() {
  return ao;
};
os.CoordinateSequenceOperation.get = function() {
  return uo;
};
Object.defineProperties(Fe, os);
var so = function() {
};
so.prototype.edit = function(t, e) {
  return t;
};
so.prototype.interfaces_ = function() {
  return [Fe.GeometryEditorOperation];
};
so.prototype.getClass = function() {
  return so;
};
var ao = function() {
};
ao.prototype.edit = function(t, e) {
  var n = this.editCoordinates(t.getCoordinates(), t);
  return n === null ? t : t instanceof Rn ? e.createLinearRing(n) : t instanceof vt ? e.createLineString(n) : t instanceof ve ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t;
};
ao.prototype.interfaces_ = function() {
  return [Fe.GeometryEditorOperation];
};
ao.prototype.getClass = function() {
  return ao;
};
var uo = function() {
};
uo.prototype.edit = function(t, e) {
  return t instanceof Rn ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof vt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof ve ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
uo.prototype.interfaces_ = function() {
  return [Fe.GeometryEditorOperation];
};
uo.prototype.getClass = function() {
  return uo;
};
var mt = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var n = 0; n < e; n++)
        t._coordinates[n] = new y();
    } else if (V(arguments[0], Q)) {
      var i = arguments[0];
      if (i === null)
        return this._coordinates = new Array(0).fill(null), null;
      this._dimension = i.getDimension(), this._coordinates = new Array(i.size()).fill(null);
      for (var o = 0; o < this._coordinates.length; o++)
        t._coordinates[o] = i.getCoordinateCopy(o);
    }
  } else if (arguments.length === 2) {
    if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var s = arguments[0], a = arguments[1];
      this._coordinates = s, this._dimension = a, s === null && (this._coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var u = arguments[0], l = arguments[1];
      this._coordinates = new Array(u).fill(null), this._dimension = l;
      for (var c = 0; c < u; c++)
        t._coordinates[c] = new y();
    }
  }
}, Cu = { serialVersionUID: { configurable: !0 } };
mt.prototype.setOrdinate = function(t, e, n) {
  switch (e) {
    case Q.X:
      this._coordinates[t].x = n;
      break;
    case Q.Y:
      this._coordinates[t].y = n;
      break;
    case Q.Z:
      this._coordinates[t].z = n;
      break;
    default:
      throw new ft("invalid ordinateIndex");
  }
};
mt.prototype.size = function() {
  return this._coordinates.length;
};
mt.prototype.getOrdinate = function(t, e) {
  switch (e) {
    case Q.X:
      return this._coordinates[t].x;
    case Q.Y:
      return this._coordinates[t].y;
    case Q.Z:
      return this._coordinates[t].z;
  }
  return z.NaN;
};
mt.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    n.x = this._coordinates[e].x, n.y = this._coordinates[e].y, n.z = this._coordinates[e].z;
  }
};
mt.prototype.getCoordinateCopy = function(t) {
  return new y(this._coordinates[t]);
};
mt.prototype.getDimension = function() {
  return this._dimension;
};
mt.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
mt.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].clone();
  return new mt(e, this._dimension);
};
mt.prototype.expandEnvelope = function(t) {
  for (var e = this, n = 0; n < this._coordinates.length; n++)
    t.expandToInclude(e._coordinates[n]);
  return t;
};
mt.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].copy();
  return new mt(e, this._dimension);
};
mt.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new En(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var n = 1; n < this._coordinates.length; n++)
      e.append(", "), e.append(t._coordinates[n]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
mt.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
mt.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
mt.prototype.interfaces_ = function() {
  return [Q, Ge];
};
mt.prototype.getClass = function() {
  return mt;
};
Cu.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(mt, Cu);
var On = function() {
}, Hs = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
On.prototype.readResolve = function() {
  return On.instance();
};
On.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new mt(t);
    } else if (V(arguments[0], Q)) {
      var e = arguments[0];
      return new mt(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return i > 3 && (i = 3), i < 2 ? new mt(n) : new mt(n, i);
  }
};
On.prototype.interfaces_ = function() {
  return [Ii, Ge];
};
On.prototype.getClass = function() {
  return On;
};
On.instance = function() {
  return On.instanceObject;
};
Hs.serialVersionUID.get = function() {
  return -4099577099607551500;
};
Hs.instanceObject.get = function() {
  return new On();
};
Object.defineProperties(On, Hs);
var Nu = function(r) {
  function t() {
    r.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.get = function(n) {
    return this.map_.get(n) || null;
  }, t.prototype.put = function(n, i) {
    return this.map_.set(n, i), i;
  }, t.prototype.values = function() {
    for (var n = new O(), i = this.map_.values(), o = i.next(); !o.done; )
      n.add(o.value), o = i.next();
    return n;
  }, t.prototype.entrySet = function() {
    var n = new Xs();
    return this.map_.entries().forEach(function(i) {
      return n.add(i);
    }), n;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(fi), $ = function r() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = r.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof hn) {
      var t = arguments[0];
      this._modelType = t, t === r.FIXED && this.setScale(1);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      this._modelType = r.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof r) {
      var n = arguments[0];
      this._modelType = n._modelType, this._scale = n._scale;
    }
  }
}, Ws = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
$.prototype.equals = function(t) {
  if (!(t instanceof $))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
$.prototype.compareTo = function(t) {
  var e = t, n = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
  return new ln(n).compareTo(new ln(i));
};
$.prototype.getScale = function() {
  return this._scale;
};
$.prototype.isFloating = function() {
  return this._modelType === $.FLOATING || this._modelType === $.FLOATING_SINGLE;
};
$.prototype.getType = function() {
  return this._modelType;
};
$.prototype.toString = function() {
  var t = "UNKNOWN";
  return this._modelType === $.FLOATING ? t = "Floating" : this._modelType === $.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === $.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
};
$.prototype.makePrecise = function() {
  if (typeof arguments[0] == "number") {
    var t = arguments[0];
    if (z.isNaN(t))
      return t;
    if (this._modelType === $.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === $.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof y) {
    var n = arguments[0];
    if (this._modelType === $.FLOATING)
      return null;
    n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
  }
};
$.prototype.getMaximumSignificantDigits = function() {
  var t = 16;
  return this._modelType === $.FLOATING ? t = 16 : this._modelType === $.FLOATING_SINGLE ? t = 6 : this._modelType === $.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
};
$.prototype.setScale = function(t) {
  this._scale = Math.abs(t);
};
$.prototype.interfaces_ = function() {
  return [Ge, ke];
};
$.prototype.getClass = function() {
  return $;
};
$.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
Ws.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
Ws.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties($, Ws);
var hn = function r(t) {
  this._name = t || null, r.nameToTypeMap.put(t, this);
}, js = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
hn.prototype.readResolve = function() {
  return hn.nameToTypeMap.get(this._name);
};
hn.prototype.toString = function() {
  return this._name;
};
hn.prototype.interfaces_ = function() {
  return [Ge];
};
hn.prototype.getClass = function() {
  return hn;
};
js.serialVersionUID.get = function() {
  return -552860263173159e4;
};
js.nameToTypeMap.get = function() {
  return new Nu();
};
Object.defineProperties(hn, js);
$.Type = hn;
$.FIXED = new hn("FIXED");
$.FLOATING = new hn("FLOATING");
$.FLOATING_SINGLE = new hn("FLOATING SINGLE");
var W = function r() {
  this._precisionModel = new $(), this._SRID = 0, this._coordinateSequenceFactory = r.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? V(arguments[0], Ii) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof $ && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, xu = { serialVersionUID: { configurable: !0 } };
W.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new y(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new y(t.getMinX(), t.getMinY()), new y(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new y(t.getMinX(), t.getMinY()), new y(t.getMinX(), t.getMaxY()), new y(t.getMaxX(), t.getMaxY()), new y(t.getMaxX(), t.getMinY()), new y(t.getMinX(), t.getMinY())]), null);
};
W.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new vt(this.getCoordinateSequenceFactory().create(t), this);
    if (V(t, Q))
      return new vt(t, this);
  } else
    return new vt(this.getCoordinateSequenceFactory().create([]), this);
};
W.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new Dr(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Dr(t, this);
  }
};
W.prototype.buildGeometry = function(t) {
  for (var e = null, n = !1, i = !1, o = t.iterator(); o.hasNext(); ) {
    var s = o.next(), a = s.getClass();
    e === null && (e = a), a !== e && (n = !0), s.isGeometryCollectionOrDerived() && (i = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (n || i)
    return this.createGeometryCollection(W.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof Ot)
      return this.createMultiPolygon(W.toPolygonArray(t));
    if (u instanceof vt)
      return this.createMultiLineString(W.toLineStringArray(t));
    if (u instanceof ve)
      return this.createMultiPoint(W.toPointArray(t));
    q.shouldNeverReachHere("Unhandled class: " + u.getClass().getName());
  }
  return u;
};
W.prototype.createMultiPointFromCoords = function(t) {
  return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
};
W.prototype.createPoint = function() {
  if (arguments.length === 0)
    return this.createPoint(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof y) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (V(arguments[0], Q)) {
      var e = arguments[0];
      return new ve(e, this);
    }
  }
};
W.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
W.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new Ot(null, null, this);
  if (arguments.length === 1) {
    if (V(arguments[0], Q)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof Rn) {
      var n = arguments[0];
      return this.createPolygon(n, null);
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    return new Ot(i, o, this);
  }
};
W.prototype.getSRID = function() {
  return this._SRID;
};
W.prototype.createGeometryCollection = function() {
  if (arguments.length === 0)
    return new re(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new re(t, this);
  }
};
W.prototype.createGeometry = function(t) {
  var e = new Fe(this);
  return e.edit(t, {
    edit: function() {
      if (arguments.length === 2) {
        var n = arguments[0];
        return this._coordinateSequenceFactory.create(n);
      }
    }
  });
};
W.prototype.getPrecisionModel = function() {
  return this._precisionModel;
};
W.prototype.createLinearRing = function() {
  if (arguments.length === 0)
    return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
    } else if (V(arguments[0], Q)) {
      var e = arguments[0];
      return new Rn(e, this);
    }
  }
};
W.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new Ln(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Ln(t, this);
  }
};
W.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new Li(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new Li(e, this);
    } else if (arguments[0] instanceof Array) {
      var n = arguments[0];
      return this.createMultiPoint(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
    } else if (V(arguments[0], Q)) {
      var i = arguments[0];
      if (i === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var o = new Array(i.size()).fill(null), s = 0; s < i.size(); s++) {
        var a = t.getCoordinateSequenceFactory().create(1, i.getDimension());
        It.copy(i, s, a, 0, 1), o[s] = t.createPoint(a);
      }
      return this.createMultiPoint(o);
    }
  }
};
W.prototype.interfaces_ = function() {
  return [Ge];
};
W.prototype.getClass = function() {
  return W;
};
W.toMultiPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toGeometryArray = function(t) {
  if (t === null)
    return null;
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.getDefaultCoordinateSequenceFactory = function() {
  return On.instance();
};
W.toMultiLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toMultiPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toLinearRingArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.toPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
W.createPointFromInternalCoord = function(t, e) {
  return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
};
xu.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(W, xu);
var of = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], ss = function(t) {
  this.geometryFactory = t || new W();
};
ss.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var n = e.type;
  if (!nn[n])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return of.indexOf(n) !== -1 ? nn[n].apply(this, [e.coordinates]) : n === "GeometryCollection" ? nn[n].apply(this, [e.geometries]) : nn[n].apply(this, [e]);
};
ss.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!Yn[e])
    throw new Error("Geometry is not supported");
  return Yn[e].apply(this, [t]);
};
var nn = {
  /**
   * Parse a GeoJSON Feature object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} Feature with geometry/bbox converted to JSTS Geometries.
   */
  Feature: function(r) {
    var t = {};
    for (var e in r)
      t[e] = r[e];
    if (r.geometry) {
      var n = r.geometry.type;
      if (!nn[n])
        throw new Error("Unknown GeoJSON type: " + r.type);
      t.geometry = this.read(r.geometry);
    }
    return r.bbox && (t.bbox = nn.bbox.apply(this, [r.bbox])), t;
  },
  /**
   * Parse a GeoJSON FeatureCollection object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} FeatureCollection with geometry/bbox converted to JSTS Geometries.
   */
  FeatureCollection: function(r) {
    var t = this, e = {};
    if (r.features) {
      e.features = [];
      for (var n = 0; n < r.features.length; ++n)
        e.features.push(t.read(r.features[n]));
    }
    return r.bbox && (e.bbox = this.parse.bbox.apply(this, [r.bbox])), e;
  },
  /**
   * Convert the ordinates in an array to an array of Coordinates
   *
   * @param {Array}
   *          array Array with {Number}s.
   *
   * @return {Array} Array with Coordinates.
   */
  coordinates: function(r) {
    for (var t = [], e = 0; e < r.length; ++e) {
      var n = r[e];
      t.push(new y(n[0], n[1]));
    }
    return t;
  },
  /**
   * Convert the bbox to a LinearRing
   *
   * @param {Array}
   *          array Array with [xMin, yMin, xMax, yMax].
   *
   * @return {Array} Array with Coordinates.
   */
  bbox: function(r) {
    return this.geometryFactory.createLinearRing([
      new y(r[0], r[1]),
      new y(r[2], r[1]),
      new y(r[2], r[3]),
      new y(r[0], r[3]),
      new y(r[0], r[1])
    ]);
  },
  /**
   * Convert an Array with ordinates to a Point
   *
   * @param {Array}
   *          array Array with ordinates.
   *
   * @return {Point} Point.
   */
  Point: function(r) {
    var t = new y(r[0], r[1]);
    return this.geometryFactory.createPoint(t);
  },
  /**
   * Convert an Array with coordinates to a MultiPoint
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiPoint} MultiPoint.
   */
  MultiPoint: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n)
      e.push(nn.Point.apply(t, [r[n]]));
    return this.geometryFactory.createMultiPoint(e);
  },
  /**
   * Convert an Array with coordinates to a LineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {LineString} LineString.
   */
  LineString: function(r) {
    var t = nn.coordinates.apply(this, [r]);
    return this.geometryFactory.createLineString(t);
  },
  /**
   * Convert an Array with coordinates to a MultiLineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiLineString} MultiLineString.
   */
  MultiLineString: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n)
      e.push(nn.LineString.apply(t, [r[n]]));
    return this.geometryFactory.createMultiLineString(e);
  },
  /**
   * Convert an Array to a Polygon
   *
   * @param {Array}
   *          array Array with shell and holes.
   *
   * @return {Polygon} Polygon.
   */
  Polygon: function(r) {
    for (var t = this, e = nn.coordinates.apply(this, [r[0]]), n = this.geometryFactory.createLinearRing(e), i = [], o = 1; o < r.length; ++o) {
      var s = r[o], a = nn.coordinates.apply(t, [s]), u = t.geometryFactory.createLinearRing(a);
      i.push(u);
    }
    return this.geometryFactory.createPolygon(n, i);
  },
  /**
   * Convert an Array to a MultiPolygon
   *
   * @param {Array}
   *          array Array of arrays with shell and rings.
   *
   * @return {MultiPolygon} MultiPolygon.
   */
  MultiPolygon: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n) {
      var i = r[n];
      e.push(nn.Polygon.apply(t, [i]));
    }
    return this.geometryFactory.createMultiPolygon(e);
  },
  /**
   * Convert an Array to a GeometryCollection
   *
   * @param {Array}
   *          array Array of GeoJSON geometries.
   *
   * @return {GeometryCollection} GeometryCollection.
   */
  GeometryCollection: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n) {
      var i = r[n];
      e.push(t.read(i));
    }
    return this.geometryFactory.createGeometryCollection(e);
  }
}, Yn = {
  /**
   * Convert a Coordinate to an Array
   *
   * @param {Coordinate}
   *          coordinate Coordinate to convert.
   *
   * @return {Array} Array of ordinates.
   */
  coordinate: function(r) {
    return [r.x, r.y];
  },
  /**
   * Convert a Point to a GeoJSON object
   *
   * @param {Point}
   *          point Point to convert.
   *
   * @return {Array} Array of 2 ordinates (paired to a coordinate).
   */
  Point: function(r) {
    var t = Yn.coordinate.apply(this, [r.getCoordinate()]);
    return {
      type: "Point",
      coordinates: t
    };
  },
  /**
   * Convert a MultiPoint to a GeoJSON object
   *
   * @param {MultiPoint}
   *          multipoint MultiPoint to convert.
   *
   * @return {Array} Array of coordinates.
   */
  MultiPoint: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = Yn.Point.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPoint",
      coordinates: e
    };
  },
  /**
   * Convert a LineString to a GeoJSON object
   *
   * @param {LineString}
   *          linestring LineString to convert.
   *
   * @return {Array} Array of coordinates.
   */
  LineString: function(r) {
    for (var t = this, e = [], n = r.getCoordinates(), i = 0; i < n.length; ++i) {
      var o = n[i];
      e.push(Yn.coordinate.apply(t, [o]));
    }
    return {
      type: "LineString",
      coordinates: e
    };
  },
  /**
   * Convert a MultiLineString to a GeoJSON object
   *
   * @param {MultiLineString}
   *          multilinestring MultiLineString to convert.
   *
   * @return {Array} Array of Array of coordinates.
   */
  MultiLineString: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = Yn.LineString.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiLineString",
      coordinates: e
    };
  },
  /**
   * Convert a Polygon to a GeoJSON object
   *
   * @param {Polygon}
   *          polygon Polygon to convert.
   *
   * @return {Array} Array with shell, holes.
   */
  Polygon: function(r) {
    var t = this, e = [], n = Yn.LineString.apply(this, [r._shell]);
    e.push(n.coordinates);
    for (var i = 0; i < r._holes.length; ++i) {
      var o = r._holes[i], s = Yn.LineString.apply(t, [o]);
      e.push(s.coordinates);
    }
    return {
      type: "Polygon",
      coordinates: e
    };
  },
  /**
   * Convert a MultiPolygon to a GeoJSON object
   *
   * @param {MultiPolygon}
   *          multipolygon MultiPolygon to convert.
   *
   * @return {Array} Array of polygons.
   */
  MultiPolygon: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = Yn.Polygon.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPolygon",
      coordinates: e
    };
  },
  /**
   * Convert a GeometryCollection to a GeoJSON object
   *
   * @param {GeometryCollection}
   *          collection GeometryCollection to convert.
   *
   * @return {Array} Array of geometries.
   */
  GeometryCollection: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = i.getGeometryType();
      e.push(Yn[o].apply(t, [i]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, Ks = function(t) {
  this.geometryFactory = t || new W(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new ss(this.geometryFactory);
};
Ks.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === $.FIXED && this.reducePrecision(e), e;
};
Ks.prototype.reducePrecision = function(t) {
  var e = this, n, i;
  if (t.coordinate)
    this.precisionModel.makePrecise(t.coordinate);
  else if (t.points)
    for (n = 0, i = t.points.length; n < i; n++)
      e.precisionModel.makePrecise(t.points[n]);
  else if (t.geometries)
    for (n = 0, i = t.geometries.length; n < i; n++)
      e.reducePrecision(t.geometries[n]);
};
var Su = function() {
  this.parser = new ss(this.geometryFactory);
};
Su.prototype.write = function(t) {
  return this.parser.write(t);
};
var b = function() {
}, as = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
b.prototype.interfaces_ = function() {
  return [];
};
b.prototype.getClass = function() {
  return b;
};
b.opposite = function(t) {
  return t === b.LEFT ? b.RIGHT : t === b.RIGHT ? b.LEFT : t;
};
as.ON.get = function() {
  return 0;
};
as.LEFT.get = function() {
  return 1;
};
as.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(b, as);
function us(r) {
  this.message = r || "";
}
us.prototype = new Error();
us.prototype.name = "EmptyStackException";
function In() {
  this.array_ = [];
}
In.prototype = new Ue();
In.prototype.add = function(r) {
  return this.array_.push(r), !0;
};
In.prototype.get = function(r) {
  if (r < 0 || r >= this.size())
    throw new Error();
  return this.array_[r];
};
In.prototype.push = function(r) {
  return this.array_.push(r), r;
};
In.prototype.pop = function(r) {
  if (this.array_.length === 0)
    throw new us();
  return this.array_.pop();
};
In.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new us();
  return this.array_[this.array_.length - 1];
};
In.prototype.empty = function() {
  return this.array_.length === 0;
};
In.prototype.isEmpty = function() {
  return this.empty();
};
In.prototype.search = function(r) {
  return this.array_.indexOf(r);
};
In.prototype.size = function() {
  return this.array_.length;
};
In.prototype.toArray = function() {
  for (var r = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(r.array_[e]);
  return t;
};
var gn = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
gn.prototype.getCoordinate = function() {
  return this._minCoord;
};
gn.prototype.getRightmostSide = function(t, e) {
  var n = this.getRightmostSideOfSegment(t, e);
  return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
};
gn.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  q.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], n = t[this._minIndex + 1], i = T.computeOrientation(this._minCoord, n, e), o = !1;
  (e.y < this._minCoord.y && n.y < this._minCoord.y && i === T.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && i === T.CLOCKWISE) && (o = !0), o && (this._minIndex = this._minIndex - 1);
};
gn.prototype.getRightmostSideOfSegment = function(t, e) {
  var n = t.getEdge(), i = n.getCoordinates();
  if (e < 0 || e + 1 >= i.length || i[e].y === i[e + 1].y)
    return -1;
  var o = b.LEFT;
  return i[e].y < i[e + 1].y && (o = b.RIGHT), o;
};
gn.prototype.getEdge = function() {
  return this._orientedDe;
};
gn.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, n = t.getEdge().getCoordinates(), i = 0; i < n.length - 1; i++)
    (e._minCoord === null || n[i].x > e._minCoord.x) && (e._minDe = t, e._minIndex = i, e._minCoord = n[i]);
};
gn.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
gn.prototype.findEdge = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.isForward() && e.checkForRightmostCoordinate(i);
  }
  q.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var o = this.getRightmostSide(this._minDe, this._minIndex);
  o === b.LEFT && (this._orientedDe = this._minDe.getSym());
};
gn.prototype.interfaces_ = function() {
  return [];
};
gn.prototype.getClass = function() {
  return gn;
};
var $n = function(r) {
  function t(e, n) {
    r.call(this, t.msgWithCoord(e, n)), this.pt = n ? new y(n) : null, this.name = "TopologyException";
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getCoordinate = function() {
    return this.pt;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.msgWithCoord = function(n, i) {
    return i ? n : n + " [ " + i + " ]";
  }, t;
}(Zn), ls = function() {
  this.array_ = [];
};
ls.prototype.addLast = function(t) {
  this.array_.push(t);
};
ls.prototype.removeFirst = function() {
  return this.array_.shift();
};
ls.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var ie = function() {
  this._finder = null, this._dirEdgeList = new O(), this._nodes = new O(), this._rightMostCoord = null, this._env = null, this._finder = new gn();
};
ie.prototype.clearVisitedEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.setVisited(!1);
  }
};
ie.prototype.getRightmostCoordinate = function() {
  return this._rightMostCoord;
};
ie.prototype.computeNodeDepth = function(t) {
  for (var e = this, n = null, i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isVisited() || o.getSym().isVisited()) {
      n = o;
      break;
    }
  }
  if (n === null)
    throw new $n("unable to find edge to compute depths at " + t.getCoordinate());
  t.getEdges().computeDepths(n);
  for (var s = t.getEdges().iterator(); s.hasNext(); ) {
    var a = s.next();
    a.setVisited(!0), e.copySymDepths(a);
  }
};
ie.prototype.computeDepth = function(t) {
  this.clearVisitedEdges();
  var e = this._finder.getEdge();
  e.setEdgeDepths(b.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
};
ie.prototype.create = function(t) {
  this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
};
ie.prototype.findResultEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getDepth(b.RIGHT) >= 1 && e.getDepth(b.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
  }
};
ie.prototype.computeDepths = function(t) {
  var e = this, n = new Xs(), i = new ls(), o = t.getNode();
  for (i.addLast(o), n.add(o), t.setVisited(!0); !i.isEmpty(); ) {
    var s = i.removeFirst();
    n.add(s), e.computeNodeDepth(s);
    for (var a = s.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var c = l.getNode();
        n.contains(c) || (i.addLast(c), n.add(c));
      }
    }
  }
};
ie.prototype.compareTo = function(t) {
  var e = t;
  return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
};
ie.prototype.getEnvelope = function() {
  if (this._env === null) {
    for (var t = new B(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var n = e.next(), i = n.getEdge().getCoordinates(), o = 0; o < i.length - 1; o++)
        t.expandToInclude(i[o]);
    this._env = t;
  }
  return this._env;
};
ie.prototype.addReachable = function(t) {
  var e = this, n = new In();
  for (n.add(t); !n.empty(); ) {
    var i = n.pop();
    e.add(i, n);
  }
};
ie.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(b.LEFT, t.getDepth(b.RIGHT)), e.setDepth(b.RIGHT, t.getDepth(b.LEFT));
};
ie.prototype.add = function(t, e) {
  var n = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    n._dirEdgeList.add(o);
    var s = o.getSym(), a = s.getNode();
    a.isVisited() || e.push(a);
  }
};
ie.prototype.getNodes = function() {
  return this._nodes;
};
ie.prototype.getDirectedEdges = function() {
  return this._dirEdgeList;
};
ie.prototype.interfaces_ = function() {
  return [ke];
};
ie.prototype.getClass = function() {
  return ie;
};
var ut = function r() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var n = arguments[0];
      this.init(1), this.location[b.ON] = n;
    } else if (arguments[0] instanceof r) {
      var i = arguments[0];
      if (this.init(i.location.length), i !== null)
        for (var o = 0; o < this.location.length; o++)
          t.location[o] = i.location[o];
    }
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    this.init(3), this.location[b.ON] = s, this.location[b.LEFT] = a, this.location[b.RIGHT] = u;
  }
};
ut.prototype.setAllLocations = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] = t;
};
ut.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== m.NONE)
      return !1;
  return !0;
};
ut.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] === m.NONE && (e.location[n] = t);
};
ut.prototype.isLine = function() {
  return this.location.length === 1;
};
ut.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var n = new Array(3).fill(null);
    n[b.ON] = this.location[b.ON], n[b.LEFT] = m.NONE, n[b.RIGHT] = m.NONE, this.location = n;
  }
  for (var i = 0; i < this.location.length; i++)
    e.location[i] === m.NONE && i < t.location.length && (e.location[i] = t.location[i]);
};
ut.prototype.getLocations = function() {
  return this.location;
};
ut.prototype.flip = function() {
  if (this.location.length <= 1)
    return null;
  var t = this.location[b.LEFT];
  this.location[b.LEFT] = this.location[b.RIGHT], this.location[b.RIGHT] = t;
};
ut.prototype.toString = function() {
  var t = new En();
  return this.location.length > 1 && t.append(m.toLocationSymbol(this.location[b.LEFT])), t.append(m.toLocationSymbol(this.location[b.ON])), this.location.length > 1 && t.append(m.toLocationSymbol(this.location[b.RIGHT])), t.toString();
};
ut.prototype.setLocations = function(t, e, n) {
  this.location[b.ON] = t, this.location[b.LEFT] = e, this.location[b.RIGHT] = n;
};
ut.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : m.NONE;
};
ut.prototype.isArea = function() {
  return this.location.length > 1;
};
ut.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === m.NONE)
      return !0;
  return !1;
};
ut.prototype.setLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setLocation(b.ON, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.location[e] = n;
  }
};
ut.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(m.NONE);
};
ut.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
ut.prototype.allPositionsEqual = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    if (e.location[n] !== t)
      return !1;
  return !0;
};
ut.prototype.interfaces_ = function() {
  return [];
};
ut.prototype.getClass = function() {
  return ut;
};
var et = function r() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new ut(t), this.elt[1] = new ut(t);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.elt[0] = new ut(e.elt[0]), this.elt[1] = new ut(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.elt[0] = new ut(m.NONE), this.elt[1] = new ut(m.NONE), this.elt[n].setLocation(i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    this.elt[0] = new ut(o, s, a), this.elt[1] = new ut(o, s, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], c = arguments[2], f = arguments[3];
    this.elt[0] = new ut(m.NONE, m.NONE, m.NONE), this.elt[1] = new ut(m.NONE, m.NONE, m.NONE), this.elt[u].setLocations(l, c, f);
  }
};
et.prototype.getGeometryCount = function() {
  var t = 0;
  return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
};
et.prototype.setAllLocations = function(t, e) {
  this.elt[t].setAllLocations(e);
};
et.prototype.isNull = function(t) {
  return this.elt[t].isNull();
};
et.prototype.setAllLocationsIfNull = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.elt[e].setAllLocationsIfNull(n);
  }
};
et.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
et.prototype.merge = function(t) {
  for (var e = this, n = 0; n < 2; n++)
    e.elt[n] === null && t.elt[n] !== null ? e.elt[n] = new ut(t.elt[n]) : e.elt[n].merge(t.elt[n]);
};
et.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
et.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(b.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.elt[e].get(n);
  }
};
et.prototype.toString = function() {
  var t = new En();
  return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
};
et.prototype.isArea = function() {
  if (arguments.length === 0)
    return this.elt[0].isArea() || this.elt[1].isArea();
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].isArea();
  }
};
et.prototype.isAnyNull = function(t) {
  return this.elt[t].isAnyNull();
};
et.prototype.setLocation = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.elt[t].setLocation(b.ON, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this.elt[n].setLocation(i, o);
  }
};
et.prototype.isEqualOnSide = function(t, e) {
  return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
};
et.prototype.allPositionsEqual = function(t, e) {
  return this.elt[t].allPositionsEqual(e);
};
et.prototype.toLine = function(t) {
  this.elt[t].isArea() && (this.elt[t] = new ut(this.elt[t].location[0]));
};
et.prototype.interfaces_ = function() {
  return [];
};
et.prototype.getClass = function() {
  return et;
};
et.toLineLabel = function(t) {
  for (var e = new et(m.NONE), n = 0; n < 2; n++)
    e.setLocation(n, t.getLocation(n));
  return e;
};
var St = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new O(), this._pts = new O(), this._label = new et(m.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new O(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
St.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), n = 0; n < this._pts.size(); n++)
    e[n] = t._pts.get(n);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = T.isCCW(this._ring.getCoordinates());
};
St.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
St.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var n = t, i = !0;
  do {
    if (n === null)
      throw new $n("Found null DirectedEdge");
    if (n.getEdgeRing() === e)
      throw new $n("Directed Edge visited twice during ring-building at " + n.getCoordinate());
    e._edges.add(n);
    var o = n.getLabel();
    q.isTrue(o.isArea()), e.mergeLabel(o), e.addPoints(n.getEdge(), n.isForward(), i), i = !1, e.setEdgeRing(n, e), n = e.getNext(n);
  } while (n !== this._startDe);
};
St.prototype.getLinearRing = function() {
  return this._ring;
};
St.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
St.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var n = e.getNode(), i = n.getEdges().getOutgoingDegree(t);
    i > t._maxNodeDegree && (t._maxNodeDegree = i), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
St.prototype.addPoints = function(t, e, n) {
  var i = this, o = t.getCoordinates();
  if (e) {
    var s = 1;
    n && (s = 0);
    for (var a = s; a < o.length; a++)
      i._pts.add(o[a]);
  } else {
    var u = o.length - 2;
    n && (u = o.length - 1);
    for (var l = u; l >= 0; l--)
      i._pts.add(o[l]);
  }
};
St.prototype.isHole = function() {
  return this._isHole;
};
St.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
St.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), n = e.getEnvelopeInternal();
  if (!n.contains(t) || !T.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var i = this._holes.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.containsPoint(t))
      return !1;
  }
  return !0;
};
St.prototype.addHole = function(t) {
  this._holes.add(t);
};
St.prototype.isShell = function() {
  return this._shell === null;
};
St.prototype.getLabel = function() {
  return this._label;
};
St.prototype.getEdges = function() {
  return this._edges;
};
St.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
St.prototype.getShell = function() {
  return this._shell;
};
St.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = e.getLocation(n, b.RIGHT);
    if (i === m.NONE)
      return null;
    if (this._label.getLocation(n) === m.NONE)
      return this._label.setLocation(n, i), null;
  }
};
St.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
St.prototype.toPolygon = function(t) {
  for (var e = this, n = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++)
    n[i] = e._holes.get(i).getLinearRing();
  var o = t.createPolygon(this.getLinearRing(), n);
  return o;
};
St.prototype.interfaces_ = function() {
  return [];
};
St.prototype.getClass = function() {
  return St;
};
var sf = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.setEdgeRing = function(n, i) {
    n.setMinEdgeRing(i);
  }, t.prototype.getNext = function(n) {
    return n.getNextMin();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(St), af = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var n = this, i = new O(), o = this._startDe;
    do {
      if (o.getMinEdgeRing() === null) {
        var s = new sf(o, n._geometryFactory);
        i.add(s);
      }
      o = o.getNext();
    } while (o !== this._startDe);
    return i;
  }, t.prototype.setEdgeRing = function(n, i) {
    n.setEdgeRing(i);
  }, t.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
    var n = this, i = this._startDe;
    do {
      var o = i.getNode();
      o.getEdges().linkMinimalDirectedEdges(n), i = i.getNext();
    } while (i !== this._startDe);
  }, t.prototype.getNext = function(n) {
    return n.getNext();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(St), Le = function() {
  if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._label = t;
    }
  }
};
Le.prototype.setVisited = function(t) {
  this._isVisited = t;
};
Le.prototype.setInResult = function(t) {
  this._isInResult = t;
};
Le.prototype.isCovered = function() {
  return this._isCovered;
};
Le.prototype.isCoveredSet = function() {
  return this._isCoveredSet;
};
Le.prototype.setLabel = function(t) {
  this._label = t;
};
Le.prototype.getLabel = function() {
  return this._label;
};
Le.prototype.setCovered = function(t) {
  this._isCovered = t, this._isCoveredSet = !0;
};
Le.prototype.updateIM = function(t) {
  q.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
};
Le.prototype.isInResult = function() {
  return this._isInResult;
};
Le.prototype.isVisited = function() {
  return this._isVisited;
};
Le.prototype.interfaces_ = function() {
  return [];
};
Le.prototype.getClass = function() {
  return Le;
};
var cs = function(r) {
  function t() {
    r.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], n = arguments[1];
    this._coord = e, this._edges = n, this._label = new et(0, m.NONE);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isIncidentEdgeInResult = function() {
    for (var n = this.getEdges().getEdges().iterator(); n.hasNext(); ) {
      var i = n.next();
      if (i.getEdge().isInResult())
        return !0;
    }
    return !1;
  }, t.prototype.isIsolated = function() {
    return this._label.getGeometryCount() === 1;
  }, t.prototype.getCoordinate = function() {
    return this._coord;
  }, t.prototype.print = function(n) {
    n.println("node " + this._coord + " lbl: " + this._label);
  }, t.prototype.computeIM = function(n) {
  }, t.prototype.computeMergedLocation = function(n, i) {
    var o = m.NONE;
    if (o = this._label.getLocation(i), !n.isNull(i)) {
      var s = n.getLocation(i);
      o !== m.BOUNDARY && (o = s);
    }
    return o;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      this._label === null ? this._label = new et(n, i) : this._label.setLocation(n, i);
    } else
      return r.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var n = this;
    if (arguments[0] instanceof t) {
      var i = arguments[0];
      this.mergeLabel(i._label);
    } else if (arguments[0] instanceof et)
      for (var o = arguments[0], s = 0; s < 2; s++) {
        var a = n.computeMergedLocation(o, s), u = n._label.getLocation(s);
        u === m.NONE && n._label.setLocation(s, a);
      }
  }, t.prototype.add = function(n) {
    this._edges.insert(n), n.setNode(this);
  }, t.prototype.setLabelBoundary = function(n) {
    if (this._label === null)
      return null;
    var i = m.NONE;
    this._label !== null && (i = this._label.getLocation(n));
    var o = null;
    switch (i) {
      case m.BOUNDARY:
        o = m.INTERIOR;
        break;
      case m.INTERIOR:
        o = m.BOUNDARY;
        break;
      default:
        o = m.BOUNDARY;
        break;
    }
    this._label.setLocation(n, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Le), pn = function() {
  this.nodeMap = new Kt(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
pn.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
pn.prototype.addNode = function() {
  if (arguments[0] instanceof y) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof cs) {
    var n = arguments[0], i = this.nodeMap.get(n.getCoordinate());
    return i === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (i.mergeLabel(n), i);
  }
};
pn.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
pn.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
pn.prototype.values = function() {
  return this.nodeMap.values();
};
pn.prototype.getBoundaryNodes = function(t) {
  for (var e = new O(), n = this.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.getLabel().getLocation(t) === m.BOUNDARY && e.add(i);
  }
  return e;
};
pn.prototype.add = function(t) {
  var e = t.getCoordinate(), n = this.addNode(e);
  n.add(t);
};
pn.prototype.interfaces_ = function() {
  return [];
};
pn.prototype.getClass = function() {
  return pn;
};
var ot = function() {
}, Io = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
ot.prototype.interfaces_ = function() {
  return [];
};
ot.prototype.getClass = function() {
  return ot;
};
ot.isNorthern = function(t) {
  return t === ot.NE || t === ot.NW;
};
ot.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var n = (t - e + 4) % 4;
  return n === 2;
};
ot.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var n = (t - e + 4) % 4;
  if (n === 2)
    return -1;
  var i = t < e ? t : e, o = t > e ? t : e;
  return i === 0 && o === 3 ? 3 : i;
};
ot.isInHalfPlane = function(t, e) {
  return e === ot.SE ? t === ot.SE || t === ot.SW : t === e || t === e + 1;
};
ot.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new ft("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? ot.NE : ot.SE : e >= 0 ? ot.NW : ot.SW;
  } else if (arguments[0] instanceof y && arguments[1] instanceof y) {
    var n = arguments[0], i = arguments[1];
    if (i.x === n.x && i.y === n.y)
      throw new ft("Cannot compute the quadrant for two identical points " + n);
    return i.x >= n.x ? i.y >= n.y ? ot.NE : ot.SE : i.y >= n.y ? ot.NW : ot.SW;
  }
};
Io.NE.get = function() {
  return 0;
};
Io.NW.get = function() {
  return 1;
};
Io.SW.get = function() {
  return 2;
};
Io.SE.get = function() {
  return 3;
};
Object.defineProperties(ot, Io);
var Qt = function() {
  if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
    var t = arguments[0];
    this._edge = t;
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2], o = null;
    this._edge = e, this.init(n, i), this._label = o;
  } else if (arguments.length === 4) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = arguments[3];
    this._edge = s, this.init(a, u), this._label = l;
  }
};
Qt.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : T.computeOrientation(t._p0, t._p1, this._p1);
};
Qt.prototype.getDy = function() {
  return this._dy;
};
Qt.prototype.getCoordinate = function() {
  return this._p0;
};
Qt.prototype.setNode = function(t) {
  this._node = t;
};
Qt.prototype.print = function(t) {
  var e = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), i = n.lastIndexOf("."), o = n.substring(i + 1);
  t.print("  " + o + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
};
Qt.prototype.compareTo = function(t) {
  var e = t;
  return this.compareDirection(e);
};
Qt.prototype.getDirectedCoordinate = function() {
  return this._p1;
};
Qt.prototype.getDx = function() {
  return this._dx;
};
Qt.prototype.getLabel = function() {
  return this._label;
};
Qt.prototype.getEdge = function() {
  return this._edge;
};
Qt.prototype.getQuadrant = function() {
  return this._quadrant;
};
Qt.prototype.getNode = function() {
  return this._node;
};
Qt.prototype.toString = function() {
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), n = e.lastIndexOf("."), i = e.substring(n + 1);
  return "  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
Qt.prototype.computeLabel = function(t) {
};
Qt.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = ot.quadrant(this._dx, this._dy), q.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
Qt.prototype.interfaces_ = function() {
  return [ke];
};
Qt.prototype.getClass = function() {
  return Qt;
};
var As = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    if (r.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = n, n)
      this.init(e.getCoordinate(0), e.getCoordinate(1));
    else {
      var i = e.getNumPoints() - 1;
      this.init(e.getCoordinate(i), e.getCoordinate(i - 1));
    }
    this.computeDirectedLabel();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getNextMin = function() {
    return this._nextMin;
  }, t.prototype.getDepth = function(n) {
    return this._depth[n];
  }, t.prototype.setVisited = function(n) {
    this._isVisited = n;
  }, t.prototype.computeDirectedLabel = function() {
    this._label = new et(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(n, i) {
    if (this._depth[n] !== -999 && this._depth[n] !== i)
      throw new $n("assigned depths do not match", this.getCoordinate());
    this._depth[n] = i;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var n = this, i = !0, o = 0; o < 2; o++)
      n._label.isArea(o) && n._label.getLocation(o, b.LEFT) === m.INTERIOR && n._label.getLocation(o, b.RIGHT) === m.INTERIOR || (i = !1);
    return i;
  }, t.prototype.setNextMin = function(n) {
    this._nextMin = n;
  }, t.prototype.print = function(n) {
    r.prototype.print.call(this, n), n.print(" " + this._depth[b.LEFT] + "/" + this._depth[b.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(n) {
    this._minEdgeRing = n;
  }, t.prototype.isLineEdge = function() {
    var n = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, m.EXTERIOR), o = !this._label.isArea(1) || this._label.allPositionsEqual(1, m.EXTERIOR);
    return n && i && o;
  }, t.prototype.setEdgeRing = function(n) {
    this._edgeRing = n;
  }, t.prototype.getMinEdgeRing = function() {
    return this._minEdgeRing;
  }, t.prototype.getDepthDelta = function() {
    var n = this._edge.getDepthDelta();
    return this._isForward || (n = -n), n;
  }, t.prototype.setInResult = function(n) {
    this._isInResult = n;
  }, t.prototype.getSym = function() {
    return this._sym;
  }, t.prototype.isForward = function() {
    return this._isForward;
  }, t.prototype.getEdge = function() {
    return this._edge;
  }, t.prototype.printEdge = function(n) {
    this.print(n), n.print(" "), this._isForward ? this._edge.print(n) : this._edge.printReverse(n);
  }, t.prototype.setSym = function(n) {
    this._sym = n;
  }, t.prototype.setVisitedEdge = function(n) {
    this.setVisited(n), this._sym.setVisited(n);
  }, t.prototype.setEdgeDepths = function(n, i) {
    var o = this.getEdge().getDepthDelta();
    this._isForward || (o = -o);
    var s = 1;
    n === b.LEFT && (s = -1);
    var a = b.opposite(n), u = o * s, l = i + u;
    this.setDepth(n, i), this.setDepth(a, l);
  }, t.prototype.getEdgeRing = function() {
    return this._edgeRing;
  }, t.prototype.isInResult = function() {
    return this._isInResult;
  }, t.prototype.setNext = function(n) {
    this._next = n;
  }, t.prototype.isVisited = function() {
    return this._isVisited;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.depthFactor = function(n, i) {
    return n === m.EXTERIOR && i === m.INTERIOR ? 1 : n === m.INTERIOR && i === m.EXTERIOR ? -1 : 0;
  }, t;
}(Qt), bi = function() {
};
bi.prototype.createNode = function(t) {
  return new cs(t, null);
};
bi.prototype.interfaces_ = function() {
  return [];
};
bi.prototype.getClass = function() {
  return bi;
};
var pt = function() {
  if (this._edges = new O(), this._nodes = null, this._edgeEndList = new O(), arguments.length === 0)
    this._nodes = new pn(new bi());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new pn(t);
  }
};
pt.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var n = 0; n < this._edges.size(); n++) {
    t.println("edge " + n + ":");
    var i = e._edges.get(n);
    i.print(t), i.eiList.print(t);
  }
};
pt.prototype.find = function(t) {
  return this._nodes.find(t);
};
pt.prototype.addNode = function() {
  if (arguments[0] instanceof cs) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof y) {
    var e = arguments[0];
    return this._nodes.addNode(e);
  }
};
pt.prototype.getNodeIterator = function() {
  return this._nodes.iterator();
};
pt.prototype.linkResultDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkResultDirectedEdges();
  }
};
pt.prototype.debugPrintln = function(t) {
  Xt.out.println(t);
};
pt.prototype.isBoundaryNode = function(t, e) {
  var n = this._nodes.find(e);
  if (n === null)
    return !1;
  var i = n.getLabel();
  return i !== null && i.getLocation(t) === m.BOUNDARY;
};
pt.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
pt.prototype.matchInSameDirection = function(t, e, n, i) {
  return t.equals(n) ? T.computeOrientation(t, e, i) === T.COLLINEAR && ot.quadrant(t, e) === ot.quadrant(n, i) : !1;
};
pt.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
pt.prototype.debugPrint = function(t) {
  Xt.out.print(t);
};
pt.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
pt.prototype.findEdgeInSameDirection = function(t, e) {
  for (var n = this, i = 0; i < this._edges.size(); i++) {
    var o = n._edges.get(i), s = o.getCoordinates();
    if (n.matchInSameDirection(t, e, s[0], s[1]) || n.matchInSameDirection(t, e, s[s.length - 1], s[s.length - 2]))
      return o;
  }
  return null;
};
pt.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
pt.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.getEdge() === t)
      return n;
  }
  return null;
};
pt.prototype.addEdges = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e._edges.add(i);
    var o = new As(i, !0), s = new As(i, !1);
    o.setSym(s), s.setSym(o), e.add(o), e.add(s);
  }
};
pt.prototype.add = function(t) {
  this._nodes.add(t), this._edgeEndList.add(t);
};
pt.prototype.getNodes = function() {
  return this._nodes.values();
};
pt.prototype.findEdge = function(t, e) {
  for (var n = this, i = 0; i < this._edges.size(); i++) {
    var o = n._edges.get(i), s = o.getCoordinates();
    if (t.equals(s[0]) && e.equals(s[1]))
      return o;
  }
  return null;
};
pt.prototype.interfaces_ = function() {
  return [];
};
pt.prototype.getClass = function() {
  return pt;
};
pt.linkResultDirectedEdges = function(t) {
  for (var e = t.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().linkResultDirectedEdges();
  }
};
var ye = function() {
  this._geometryFactory = null, this._shellList = new O();
  var t = arguments[0];
  this._geometryFactory = t;
};
ye.prototype.sortShellsAndHoles = function(t, e, n) {
  for (var i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() ? n.add(o) : e.add(o);
  }
};
ye.prototype.computePolygons = function(t) {
  for (var e = this, n = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.toPolygon(e._geometryFactory);
    n.add(s);
  }
  return n;
};
ye.prototype.placeFreeHoles = function(t, e) {
  for (var n = this, i = e.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.getShell() === null) {
      var s = n.findEdgeRingContaining(o, t);
      if (s === null)
        throw new $n("unable to assign hole to a shell", o.getCoordinate(0));
      o.setShell(s);
    }
  }
};
ye.prototype.buildMinimalEdgeRings = function(t, e, n) {
  for (var i = this, o = new O(), s = t.iterator(); s.hasNext(); ) {
    var a = s.next();
    if (a.getMaxNodeDegree() > 2) {
      a.linkDirectedEdgesForMinimalEdgeRings();
      var u = a.buildMinimalRings(), l = i.findShell(u);
      l !== null ? (i.placePolygonHoles(l, u), e.add(l)) : n.addAll(u);
    } else
      o.add(a);
  }
  return o;
};
ye.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.containsPoint(t))
      return !0;
  }
  return !1;
};
ye.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, n = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isInResult() && o.getLabel().isArea() && o.getEdgeRing() === null) {
      var s = new af(o, e._geometryFactory);
      n.add(s), s.setInResult();
    }
  }
  return n;
};
ye.prototype.placePolygonHoles = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.isHole() && i.setShell(t);
  }
};
ye.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
ye.prototype.findEdgeRingContaining = function(t, e) {
  for (var n = t.getLinearRing(), i = n.getEnvelopeInternal(), o = n.getCoordinateN(0), s = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), f = c.getEnvelopeInternal();
    s !== null && (a = s.getLinearRing().getEnvelopeInternal());
    var h = !1;
    f.contains(i) && T.isPointInRing(o, c.getCoordinates()) && (h = !0), h && (s === null || a.contains(f)) && (s = l);
  }
  return s;
};
ye.prototype.findShell = function(t) {
  for (var e = 0, n = null, i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() || (n = o, e++);
  }
  return q.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
};
ye.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    pt.linkResultDirectedEdges(n);
    var i = this.buildMaximalEdgeRings(e), o = new O(), s = this.buildMinimalEdgeRings(i, this._shellList, o);
    this.sortShellsAndHoles(s, this._shellList, o), this.placeFreeHoles(this._shellList, o);
  }
};
ye.prototype.interfaces_ = function() {
  return [];
};
ye.prototype.getClass = function() {
  return ye;
};
var Pi = function() {
};
Pi.prototype.getBounds = function() {
};
Pi.prototype.interfaces_ = function() {
  return [];
};
Pi.prototype.getClass = function() {
  return Pi;
};
var Ye = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
Ye.prototype.getItem = function() {
  return this._item;
};
Ye.prototype.getBounds = function() {
  return this._bounds;
};
Ye.prototype.interfaces_ = function() {
  return [Pi, Ge];
};
Ye.prototype.getClass = function() {
  return Ye;
};
var tr = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new O(), this._items.add(null);
};
tr.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
tr.prototype.size = function() {
  return this._size;
};
tr.prototype.reorder = function(t) {
  for (var e = this, n = null, i = this._items.get(t); t * 2 <= this._size && (n = t * 2, n !== e._size && e._items.get(n + 1).compareTo(e._items.get(n)) < 0 && n++, e._items.get(n).compareTo(i) < 0); t = n)
    e._items.set(t, e._items.get(n));
  this._items.set(t, i);
};
tr.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
tr.prototype.isEmpty = function() {
  return this._size === 0;
};
tr.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var n = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2)
    e._items.set(n, e._items.get(Math.trunc(n / 2)));
  this._items.set(n, t);
};
tr.prototype.interfaces_ = function() {
  return [];
};
tr.prototype.getClass = function() {
  return tr;
};
var gr = function() {
};
gr.prototype.visitItem = function(t) {
};
gr.prototype.interfaces_ = function() {
  return [];
};
gr.prototype.getClass = function() {
  return gr;
};
var Zr = function() {
};
Zr.prototype.insert = function(t, e) {
};
Zr.prototype.remove = function(t, e) {
};
Zr.prototype.query = function() {
};
Zr.prototype.interfaces_ = function() {
  return [];
};
Zr.prototype.getClass = function() {
  return Zr;
};
var Rt = function() {
  if (this._childBoundables = new O(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, wu = { serialVersionUID: { configurable: !0 } };
Rt.prototype.getLevel = function() {
  return this._level;
};
Rt.prototype.size = function() {
  return this._childBoundables.size();
};
Rt.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Rt.prototype.addChildBoundable = function(t) {
  q.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Rt.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Rt.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Rt.prototype.interfaces_ = function() {
  return [Pi, Ge];
};
Rt.prototype.getClass = function() {
  return Rt;
};
wu.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Rt, wu);
var He = function() {
};
He.reverseOrder = function() {
  return {
    compare: function(e, n) {
      return n.compareTo(e);
    }
  };
};
He.min = function(t) {
  return He.sort(t), t.get(0);
};
He.sort = function(t, e) {
  var n = t.toArray();
  e ? Lr.sort(n, e) : Lr.sort(n);
  for (var i = t.iterator(), o = 0, s = n.length; o < s; o++)
    i.next(), i.set(n[o]);
};
He.singletonList = function(t) {
  var e = new O();
  return e.add(t), e;
};
var Nt = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
};
Nt.prototype.expandToQueue = function(t, e) {
  var n = Nt.isComposite(this._boundable1), i = Nt.isComposite(this._boundable2);
  if (n && i)
    return Nt.area(this._boundable1) > Nt.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (n)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (i)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new ft("neither boundable is composite");
};
Nt.prototype.isLeaves = function() {
  return !(Nt.isComposite(this._boundable1) || Nt.isComposite(this._boundable2));
};
Nt.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
Nt.prototype.expand = function(t, e, n, i) {
  for (var o = this, s = t.getChildBoundables(), a = s.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new Nt(u, e, o._itemDistance);
    l.getDistance() < i && n.add(l);
  }
};
Nt.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
Nt.prototype.getDistance = function() {
  return this._distance;
};
Nt.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
Nt.prototype.interfaces_ = function() {
  return [ke];
};
Nt.prototype.getClass = function() {
  return Nt;
};
Nt.area = function(t) {
  return t.getBounds().getArea();
};
Nt.isComposite = function(t) {
  return t instanceof Rt;
};
var At = function r() {
  if (this._root = null, this._built = !1, this._itemBoundables = new O(), this._nodeCapacity = null, arguments.length === 0) {
    var t = r.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    q.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, fs = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
At.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
At.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
At.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      o instanceof Rt ? n += t.size(o) : o instanceof Ye && (n += 1);
    }
    return n;
  }
};
At.prototype.removeItem = function(t, e) {
  for (var n = null, i = t.getChildBoundables().iterator(); i.hasNext(); ) {
    var o = i.next();
    o instanceof Ye && o.getItem() === e && (n = o);
  }
  return n !== null ? (t.getChildBoundables().remove(n), !0) : !1;
};
At.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new O() : e;
  } else if (arguments.length === 1) {
    for (var n = arguments[0], i = new O(), o = n.getChildBoundables().iterator(); o.hasNext(); ) {
      var s = o.next();
      if (s instanceof Rt) {
        var a = t.itemsTree(s);
        a !== null && i.add(a);
      } else
        s instanceof Ye ? i.add(s.getItem()) : q.shouldNeverReachHere();
    }
    return i.size() <= 0 ? null : i;
  }
};
At.prototype.insert = function(t, e) {
  q.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Ye(t, e));
};
At.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], n = new O();
    return this.boundablesAtLevel(e, this._root, n), n;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (q.isTrue(i > -2), o.getLevel() === i)
      return s.add(o), null;
    for (var a = o.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Rt ? t.boundablesAtLevel(i, u, s) : (q.isTrue(u instanceof Ye), i === -1 && s.add(u));
    }
    return null;
  }
};
At.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var n = new O();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, n), n;
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), i) && this.query(i, this._root, o);
  } else if (arguments.length === 3) {
    if (V(arguments[2], gr) && arguments[0] instanceof Object && arguments[1] instanceof Rt)
      for (var s = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var f = l.get(c);
        t.getIntersectsOp().intersects(f.getBounds(), s) && (f instanceof Rt ? t.query(s, f, u) : f instanceof Ye ? u.visitItem(f.getItem()) : q.shouldNeverReachHere());
      }
    else if (V(arguments[2], Ue) && arguments[0] instanceof Object && arguments[1] instanceof Rt)
      for (var h = arguments[0], g = arguments[1], p = arguments[2], d = g.getChildBoundables(), v = 0; v < d.size(); v++) {
        var _ = d.get(v);
        t.getIntersectsOp().intersects(_.getBounds(), h) && (_ instanceof Rt ? t.query(h, _, p) : _ instanceof Ye ? p.add(_.getItem()) : q.shouldNeverReachHere());
      }
  }
};
At.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
At.prototype.getRoot = function() {
  return this.build(), this._root;
};
At.prototype.remove = function() {
  var t = this;
  if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.build(), this.getIntersectsOp().intersects(this._root.getBounds(), e) ? this.remove(e, this._root, n) : !1;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = this.removeItem(o, s);
    if (a)
      return !0;
    for (var u = null, l = o.getChildBoundables().iterator(); l.hasNext(); ) {
      var c = l.next();
      if (t.getIntersectsOp().intersects(c.getBounds(), i) && c instanceof Rt && (a = t.remove(i, c, s), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && o.getChildBoundables().remove(u), a;
  }
};
At.prototype.createHigherLevels = function(t, e) {
  q.isTrue(!t.isEmpty());
  var n = this.createParentBoundables(t, e + 1);
  return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, e + 1);
};
At.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      if (o instanceof Rt) {
        var s = t.depth(o);
        s > n && (n = s);
      }
    }
    return n + 1;
  }
};
At.prototype.createParentBoundables = function(t, e) {
  var n = this;
  q.isTrue(!t.isEmpty());
  var i = new O();
  i.add(this.createNode(e));
  var o = new O(t);
  He.sort(o, this.getComparator());
  for (var s = o.iterator(); s.hasNext(); ) {
    var a = s.next();
    n.lastNode(i).getChildBoundables().size() === n.getNodeCapacity() && i.add(n.createNode(e)), n.lastNode(i).addChildBoundable(a);
  }
  return i;
};
At.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
At.prototype.interfaces_ = function() {
  return [Ge];
};
At.prototype.getClass = function() {
  return At;
};
At.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
fs.IntersectsOp.get = function() {
  return uf;
};
fs.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
fs.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(At, fs);
var uf = function() {
}, Ri = function() {
};
Ri.prototype.distance = function(t, e) {
};
Ri.prototype.interfaces_ = function() {
  return [];
};
Ri.prototype.getClass = function() {
  return Ri;
};
var Lu = function(r) {
  function t(n) {
    n = n || t.DEFAULT_NODE_CAPACITY, r.call(this, n);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(i, o) {
    var s = this;
    q.isTrue(i.length > 0);
    for (var a = new O(), u = 0; u < i.length; u++)
      a.addAll(s.createParentBoundablesFromVerticalSlice(i[u], o));
    return a;
  }, t.prototype.createNode = function(i) {
    return new Aa(i);
  }, t.prototype.size = function() {
    return arguments.length === 0 ? r.prototype.size.call(this) : r.prototype.size.apply(this, arguments);
  }, t.prototype.insert = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      if (i.isNull())
        return null;
      r.prototype.insert.call(this, i, o);
    } else
      return r.prototype.insert.apply(this, arguments);
  }, t.prototype.getIntersectsOp = function() {
    return t.intersectsOp;
  }, t.prototype.verticalSlices = function(i, o) {
    for (var s = Math.trunc(Math.ceil(i.size() / o)), a = new Array(o).fill(null), u = i.iterator(), l = 0; l < o; l++) {
      a[l] = new O();
      for (var c = 0; u.hasNext() && c < s; ) {
        var f = u.next();
        a[l].add(f), c++;
      }
    }
    return a;
  }, t.prototype.query = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return r.prototype.query.call(this, i);
    } else if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      r.prototype.query.call(this, o, s);
    } else if (arguments.length === 3) {
      if (V(arguments[2], gr) && arguments[0] instanceof Object && arguments[1] instanceof Rt) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        r.prototype.query.call(this, a, u, l);
      } else if (V(arguments[2], Ue) && arguments[0] instanceof Object && arguments[1] instanceof Rt) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        r.prototype.query.call(this, c, f, h);
      }
    }
  }, t.prototype.getComparator = function() {
    return t.yComparator;
  }, t.prototype.createParentBoundablesFromVerticalSlice = function(i, o) {
    return r.prototype.createParentBoundables.call(this, i, o);
  }, t.prototype.remove = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return r.prototype.remove.call(this, i, o);
    } else
      return r.prototype.remove.apply(this, arguments);
  }, t.prototype.depth = function() {
    return arguments.length === 0 ? r.prototype.depth.call(this) : r.prototype.depth.apply(this, arguments);
  }, t.prototype.createParentBoundables = function(i, o) {
    q.isTrue(!i.isEmpty());
    var s = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), a = new O(i);
    He.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(s))));
    return this.createParentBoundablesFromVerticalSlices(u, o);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (V(arguments[0], Ri)) {
        var i = arguments[0], o = new Nt(this.getRoot(), this.getRoot(), i);
        return this.nearestNeighbour(o);
      } else if (arguments[0] instanceof Nt) {
        var s = arguments[0];
        return this.nearestNeighbour(s, z.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && V(arguments[1], Ri)) {
        var a = arguments[0], u = arguments[1], l = new Nt(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof Nt && typeof arguments[1] == "number") {
        var c = arguments[0], f = arguments[1], h = f, g = null, p = new tr();
        for (p.add(c); !p.isEmpty() && h > 0; ) {
          var d = p.poll(), v = d.getDistance();
          if (v >= h)
            break;
          d.isLeaves() ? (h = v, g = d) : d.expandToQueue(p, h);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var _ = arguments[0], C = arguments[1], E = arguments[2], S = new Ye(_, C), N = new Nt(this.getRoot(), S, E);
      return this.nearestNeighbour(N)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [Zr, Ge];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(i) {
    return t.avg(i.getMinX(), i.getMaxX());
  }, t.avg = function(i, o) {
    return (i + o) / 2;
  }, t.centreY = function(i) {
    return t.avg(i.getMinY(), i.getMaxY());
  }, e.STRtreeNode.get = function() {
    return Aa;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [Ei];
      },
      compare: function(n, i) {
        return r.compareDoubles(t.centreX(n.getBounds()), t.centreX(i.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [Ei];
      },
      compare: function(n, i) {
        return r.compareDoubles(t.centreY(n.getBounds()), t.centreY(i.getBounds()));
      }
    };
  }, e.intersectsOp.get = function() {
    return {
      interfaces_: function() {
        return [r.IntersectsOp];
      },
      intersects: function(n, i) {
        return n.intersects(i);
      }
    };
  }, e.DEFAULT_NODE_CAPACITY.get = function() {
    return 10;
  }, Object.defineProperties(t, e), t;
}(At), Aa = function(r) {
  function t() {
    var e = arguments[0];
    r.call(this, e);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var n = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      n === null ? n = new B(o.getBounds()) : n.expandToInclude(o.getBounds());
    }
    return n;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Rt), ae = function() {
};
ae.prototype.interfaces_ = function() {
  return [];
};
ae.prototype.getClass = function() {
  return ae;
};
ae.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
ae.compare = function(t, e, n) {
  if (e.equals2D(n))
    return 0;
  var i = ae.relativeSign(e.x, n.x), o = ae.relativeSign(e.y, n.y);
  switch (t) {
    case 0:
      return ae.compareValue(i, o);
    case 1:
      return ae.compareValue(o, i);
    case 2:
      return ae.compareValue(o, -i);
    case 3:
      return ae.compareValue(-i, o);
    case 4:
      return ae.compareValue(-i, -o);
    case 5:
      return ae.compareValue(-o, -i);
    case 6:
      return ae.compareValue(-o, i);
    case 7:
      return ae.compareValue(i, -o);
  }
  return q.shouldNeverReachHere("invalid octant value"), 0;
};
ae.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var pr = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
  this._segString = t, this.coord = new y(e), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(n));
};
pr.prototype.getCoordinate = function() {
  return this.coord;
};
pr.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
pr.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : ae.compare(this._segmentOctant, this.coord, e.coord);
};
pr.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
pr.prototype.isInterior = function() {
  return this._isInterior;
};
pr.prototype.interfaces_ = function() {
  return [ke];
};
pr.prototype.getClass = function() {
  return pr;
};
var oe = function() {
  this._nodeMap = new Kt(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
oe.prototype.getSplitCoordinates = function() {
  var t = this, e = new _o();
  this.addEndpoints();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var o = n.next();
    t.addEdgeCoordinates(i, o, e), i = o;
  }
  return e.toCoordinateArray();
};
oe.prototype.addCollapsedNodes = function() {
  var t = this, e = new O();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next().intValue();
    t.add(t._edge.getCoordinate(i), i);
  }
};
oe.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
oe.prototype.findCollapsesFromExistingVertices = function(t) {
  for (var e = this, n = 0; n < this._edge.size() - 2; n++) {
    var i = e._edge.getCoordinate(n), o = e._edge.getCoordinate(n + 2);
    i.equals2D(o) && t.add(new ln(n + 1));
  }
};
oe.prototype.addEdgeCoordinates = function(t, e, n) {
  var i = this, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  n.add(new y(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    n.add(i._edge.getCoordinate(a));
  s && n.add(new y(e.coord));
};
oe.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
oe.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var o = n.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
oe.prototype.findCollapseIndex = function(t, e, n) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var i = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || i--, i === 1 ? (n[0] = t.segmentIndex + 1, !0) : !1;
};
oe.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, n = new Array(1).fill(null), i = this.iterator(), o = i.next(); i.hasNext(); ) {
    var s = i.next(), a = e.findCollapseIndex(o, s, n);
    a && t.add(new ln(n[0])), o = s;
  }
};
oe.prototype.getEdge = function() {
  return this._edge;
};
oe.prototype.addEndpoints = function() {
  var t = this._edge.size() - 1;
  this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
};
oe.prototype.createSplitEdge = function(t, e) {
  var n = this, i = e.segmentIndex - t.segmentIndex + 2, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new y(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n._edge.getCoordinate(l);
  return s && (a[u] = new y(e.coord)), new Ct(a, this._edge.getData());
};
oe.prototype.add = function(t, e) {
  var n = new pr(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(n);
  return i !== null ? (q.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
};
oe.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), n = t.get(0), i = n.getCoordinate(0);
  if (!i.equals2D(e[0]))
    throw new Zn("bad split edge start point at " + i);
  var o = t.get(t.size() - 1), s = o.getCoordinates(), a = s[s.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new Zn("bad split edge end point at " + a);
};
oe.prototype.interfaces_ = function() {
  return [];
};
oe.prototype.getClass = function() {
  return oe;
};
var Jr = function() {
};
Jr.prototype.interfaces_ = function() {
  return [];
};
Jr.prototype.getClass = function() {
  return Jr;
};
Jr.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new ft("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var n = Math.abs(t), i = Math.abs(e);
    return t >= 0 ? e >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : e >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
  } else if (arguments[0] instanceof y && arguments[1] instanceof y) {
    var o = arguments[0], s = arguments[1], a = s.x - o.x, u = s.y - o.y;
    if (a === 0 && u === 0)
      throw new ft("Cannot compute the octant for two identical points " + o);
    return Jr.octant(a, u);
  }
};
var Dn = function() {
};
Dn.prototype.getCoordinates = function() {
};
Dn.prototype.size = function() {
};
Dn.prototype.getCoordinate = function(t) {
};
Dn.prototype.isClosed = function() {
};
Dn.prototype.setData = function(t) {
};
Dn.prototype.getData = function() {
};
Dn.prototype.interfaces_ = function() {
  return [];
};
Dn.prototype.getClass = function() {
  return Dn;
};
var lo = function() {
};
lo.prototype.addIntersection = function(t, e) {
};
lo.prototype.interfaces_ = function() {
  return [Dn];
};
lo.prototype.getClass = function() {
  return lo;
};
var Ct = function() {
  this._nodeList = new oe(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Ct.prototype.getCoordinates = function() {
  return this._pts;
};
Ct.prototype.size = function() {
  return this._pts.length;
};
Ct.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Ct.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Ct.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Ct.prototype.setData = function(t) {
  this._data = t;
};
Ct.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : Jr.octant(t, e);
};
Ct.prototype.getData = function() {
  return this._data;
};
Ct.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var n = arguments[0], i = arguments[1], o = arguments[3], s = new y(n.getIntersection(o));
    this.addIntersection(s, i);
  }
};
Ct.prototype.toString = function() {
  return qe.toLineString(new mt(this._pts));
};
Ct.prototype.getNodeList = function() {
  return this._nodeList;
};
Ct.prototype.addIntersectionNode = function(t, e) {
  var n = e, i = n + 1;
  if (i < this._pts.length) {
    var o = this._pts[i];
    t.equals2D(o) && (n = i);
  }
  var s = this._nodeList.add(t, n);
  return s;
};
Ct.prototype.addIntersections = function(t, e, n) {
  for (var i = this, o = 0; o < t.getIntersectionNum(); o++)
    i.addIntersection(t, e, n, o);
};
Ct.prototype.interfaces_ = function() {
  return [lo];
};
Ct.prototype.getClass = function() {
  return Ct;
};
Ct.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new O();
    return Ct.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var n = arguments[0], i = arguments[1], o = n.iterator(); o.hasNext(); ) {
      var s = o.next();
      s.getNodeList().addSplitEdges(i);
    }
};
var k = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new y(), this.p1 = new y();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new y(t.p0), this.p1 = new y(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], n = arguments[1], i = arguments[2], o = arguments[3];
    this.p0 = new y(e, n), this.p1 = new y(i, o);
  }
}, bu = { serialVersionUID: { configurable: !0 } };
k.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
k.prototype.orientationIndex = function() {
  if (arguments[0] instanceof k) {
    var t = arguments[0], e = T.orientationIndex(this.p0, this.p1, t.p0), n = T.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && n >= 0 || e <= 0 && n <= 0 ? Math.max(e, n) : 0;
  } else if (arguments[0] instanceof y) {
    var i = arguments[0];
    return T.orientationIndex(this.p0, this.p1, i);
  }
};
k.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
k.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
k.prototype.equals = function(t) {
  if (!(t instanceof k))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
k.prototype.intersection = function(t) {
  var e = new Xr();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
k.prototype.project = function() {
  if (arguments[0] instanceof y) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new y(t);
    var e = this.projectionFactor(t), n = new y();
    return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
  } else if (arguments[0] instanceof k) {
    var i = arguments[0], o = this.projectionFactor(i.p0), s = this.projectionFactor(i.p1);
    if (o >= 1 && s >= 1 || o <= 0 && s <= 0)
      return null;
    var a = this.project(i.p0);
    o < 0 && (a = this.p0), o > 1 && (a = this.p1);
    var u = this.project(i.p1);
    return s < 0 && (u = this.p0), s > 1 && (u = this.p1), new k(a, u);
  }
};
k.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
k.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
k.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
k.prototype.distancePerpendicular = function(t) {
  return T.distancePointLinePerpendicular(t, this.p0, this.p1);
};
k.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
k.prototype.midPoint = function() {
  return k.midPoint(this.p0, this.p1);
};
k.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = e * e + n * n;
  if (i <= 0)
    return z.NaN;
  var o = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / i;
  return o;
};
k.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var n = new Array(2).fill(null), i = z.MAX_VALUE, o = null, s = this.closestPoint(t.p0);
  i = s.distance(t.p0), n[0] = s, n[1] = t.p0;
  var a = this.closestPoint(t.p1);
  o = a.distance(t.p1), o < i && (i = o, n[0] = a, n[1] = t.p1);
  var u = t.closestPoint(this.p0);
  o = u.distance(this.p0), o < i && (i = o, n[0] = this.p0, n[1] = u);
  var l = t.closestPoint(this.p1);
  return o = l.distance(this.p1), o < i && (i = o, n[0] = this.p1, n[1] = l), n;
};
k.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var n = this.p0.distance(t), i = this.p1.distance(t);
  return n < i ? this.p0 : this.p1;
};
k.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
k.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
k.prototype.compareTo = function(t) {
  var e = t, n = this.p0.compareTo(e.p0);
  return n !== 0 ? n : this.p1.compareTo(e.p1);
};
k.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
k.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
k.prototype.lineIntersection = function(t) {
  try {
    var e = ze.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (n) {
    if (!(n instanceof zi))
      throw n;
  } finally {
  }
  return null;
};
k.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
k.prototype.pointAlongOffset = function(t, e) {
  var n = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), o = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y, a = Math.sqrt(o * o + s * s), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * o / a, l = e * s / a;
  }
  var c = n - l, f = i + u, h = new y(c, f);
  return h;
};
k.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
  }
};
k.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || z.isNaN(e)) && (e = 1), e;
};
k.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
k.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
k.prototype.distance = function() {
  if (arguments[0] instanceof k) {
    var t = arguments[0];
    return T.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof y) {
    var e = arguments[0];
    return T.distancePointLine(e, this.p0, this.p1);
  }
};
k.prototype.pointAlong = function(t) {
  var e = new y();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
k.prototype.hashCode = function() {
  var t = z.doubleToLongBits(this.p0.x);
  t ^= z.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = z.doubleToLongBits(this.p1.x);
  n ^= z.doubleToLongBits(this.p1.y) * 31;
  var i = Math.trunc(n) ^ Math.trunc(n >> 32);
  return e ^ i;
};
k.prototype.interfaces_ = function() {
  return [ke, Ge];
};
k.prototype.getClass = function() {
  return k;
};
k.midPoint = function(t, e) {
  return new y((t.x + e.x) / 2, (t.y + e.y) / 2);
};
bu.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(k, bu);
var co = function() {
  this.tempEnv1 = new B(), this.tempEnv2 = new B(), this._overlapSeg1 = new k(), this._overlapSeg2 = new k();
};
co.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
co.prototype.interfaces_ = function() {
  return [];
};
co.prototype.getClass = function() {
  return co;
};
var me = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
  this._pts = t, this._start = e, this._end = n, this._context = i;
};
me.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
me.prototype.computeSelect = function(t, e, n, i) {
  var o = this._pts[e], s = this._pts[n];
  if (i.tempEnv1.init(o, s), n - e === 1)
    return i.select(this, e), null;
  if (!t.intersects(i.tempEnv1))
    return null;
  var a = Math.trunc((e + n) / 2);
  e < a && this.computeSelect(t, e, a, i), a < n && this.computeSelect(t, a, n, i);
};
me.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), n = 0, i = this._start; i <= this._end; i++)
    e[n++] = t._pts[i];
  return e;
};
me.prototype.computeOverlaps = function(t, e) {
  this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e);
};
me.prototype.setId = function(t) {
  this._id = t;
};
me.prototype.select = function(t, e) {
  this.computeSelect(t, this._start, this._end, e);
};
me.prototype.getEnvelope = function() {
  if (this._env === null) {
    var t = this._pts[this._start], e = this._pts[this._end];
    this._env = new B(t, e);
  }
  return this._env;
};
me.prototype.getEndIndex = function() {
  return this._end;
};
me.prototype.getStartIndex = function() {
  return this._start;
};
me.prototype.getContext = function() {
  return this._context;
};
me.prototype.getId = function() {
  return this._id;
};
me.prototype.computeOverlapsInternal = function(t, e, n, i, o, s) {
  var a = this._pts[t], u = this._pts[e], l = n._pts[i], c = n._pts[o];
  if (e - t === 1 && o - i === 1)
    return s.overlap(this, t, n, i), null;
  if (s.tempEnv1.init(a, u), s.tempEnv2.init(l, c), !s.tempEnv1.intersects(s.tempEnv2))
    return null;
  var f = Math.trunc((t + e) / 2), h = Math.trunc((i + o) / 2);
  t < f && (i < h && this.computeOverlapsInternal(t, f, n, i, h, s), h < o && this.computeOverlapsInternal(t, f, n, h, o, s)), f < e && (i < h && this.computeOverlapsInternal(f, e, n, i, h, s), h < o && this.computeOverlapsInternal(f, e, n, h, o, s));
};
me.prototype.interfaces_ = function() {
  return [];
};
me.prototype.getClass = function() {
  return me;
};
var un = function() {
};
un.prototype.interfaces_ = function() {
  return [];
};
un.prototype.getClass = function() {
  return un;
};
un.getChainStartIndices = function(t) {
  var e = 0, n = new O();
  n.add(new ln(e));
  do {
    var i = un.findChainEnd(t, e);
    n.add(new ln(i)), e = i;
  } while (e < t.length - 1);
  var o = un.toIntArray(n);
  return o;
};
un.findChainEnd = function(t, e) {
  for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]); )
    n++;
  if (n >= t.length - 1)
    return t.length - 1;
  for (var i = ot.quadrant(t[n], t[n + 1]), o = e + 1; o < t.length; ) {
    if (!t[o - 1].equals2D(t[o])) {
      var s = ot.quadrant(t[o - 1], t[o]);
      if (s !== i)
        break;
    }
    o++;
  }
  return o - 1;
};
un.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return un.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], n = arguments[1], i = new O(), o = un.getChainStartIndices(e), s = 0; s < o.length - 1; s++) {
      var a = new me(e, o[s], o[s + 1], n);
      i.add(a);
    }
    return i;
  }
};
un.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var Tr = function() {
};
Tr.prototype.computeNodes = function(t) {
};
Tr.prototype.getNodedSubstrings = function() {
};
Tr.prototype.interfaces_ = function() {
  return [];
};
Tr.prototype.getClass = function() {
  return Tr;
};
var fo = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
fo.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
fo.prototype.interfaces_ = function() {
  return [Tr];
};
fo.prototype.getClass = function() {
  return fo;
};
var Qs = function(r) {
  function t(n) {
    n ? r.call(this, n) : r.call(this), this._monoChains = new O(), this._index = new Lu(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return Ct.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(i) {
    for (var o = this, s = un.getChains(i.getCoordinates(), i), a = s.iterator(); a.hasNext(); ) {
      var u = a.next();
      u.setId(o._idCounter++), o._index.insert(u.getEnvelope(), u), o._monoChains.add(u);
    }
  }, t.prototype.computeNodes = function(i) {
    var o = this;
    this._nodedSegStrings = i;
    for (var s = i.iterator(); s.hasNext(); )
      o.add(s.next());
    this.intersectChains();
  }, t.prototype.intersectChains = function() {
    for (var i = this, o = new Fa(this._segInt), s = this._monoChains.iterator(); s.hasNext(); )
      for (var a = s.next(), u = i._index.query(a.getEnvelope()), l = u.iterator(); l.hasNext(); ) {
        var c = l.next();
        if (c.getId() > a.getId() && (a.computeOverlaps(c, o), i._nOverlaps++), i._segInt.isDone())
          return null;
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.SegmentOverlapAction.get = function() {
    return Fa;
  }, Object.defineProperties(t, e), t;
}(fo), Fa = function(r) {
  function t() {
    r.call(this), this._si = null;
    var e = arguments[0];
    this._si = e;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.overlap = function() {
    if (arguments.length === 4) {
      var n = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = n.getContext(), u = o.getContext();
      this._si.processIntersections(a, i, u, s);
    } else
      return r.prototype.overlap.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(co), J = function r() {
  if (this._quadrantSegments = r.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = r.CAP_ROUND, this._joinStyle = r.JOIN_ROUND, this._mitreLimit = r.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = r.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (arguments.length === 2) {
      var e = arguments[0], n = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(n);
    } else if (arguments.length === 4) {
      var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3];
      this.setQuadrantSegments(i), this.setEndCapStyle(o), this.setJoinStyle(s), this.setMitreLimit(a);
    }
  }
}, ir = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
J.prototype.getEndCapStyle = function() {
  return this._endCapStyle;
};
J.prototype.isSingleSided = function() {
  return this._isSingleSided;
};
J.prototype.setQuadrantSegments = function(t) {
  this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = J.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = J.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== J.JOIN_ROUND && (this._quadrantSegments = J.DEFAULT_QUADRANT_SEGMENTS);
};
J.prototype.getJoinStyle = function() {
  return this._joinStyle;
};
J.prototype.setJoinStyle = function(t) {
  this._joinStyle = t;
};
J.prototype.setSimplifyFactor = function(t) {
  this._simplifyFactor = t < 0 ? 0 : t;
};
J.prototype.getSimplifyFactor = function() {
  return this._simplifyFactor;
};
J.prototype.getQuadrantSegments = function() {
  return this._quadrantSegments;
};
J.prototype.setEndCapStyle = function(t) {
  this._endCapStyle = t;
};
J.prototype.getMitreLimit = function() {
  return this._mitreLimit;
};
J.prototype.setMitreLimit = function(t) {
  this._mitreLimit = t;
};
J.prototype.setSingleSided = function(t) {
  this._isSingleSided = t;
};
J.prototype.interfaces_ = function() {
  return [];
};
J.prototype.getClass = function() {
  return J;
};
J.bufferDistanceError = function(t) {
  var e = Math.PI / 2 / t;
  return 1 - Math.cos(e / 2);
};
ir.CAP_ROUND.get = function() {
  return 1;
};
ir.CAP_FLAT.get = function() {
  return 2;
};
ir.CAP_SQUARE.get = function() {
  return 3;
};
ir.JOIN_ROUND.get = function() {
  return 1;
};
ir.JOIN_MITRE.get = function() {
  return 2;
};
ir.JOIN_BEVEL.get = function() {
  return 3;
};
ir.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
ir.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
ir.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(J, ir);
var yt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = T.COUNTERCLOCKWISE, this._inputLine = t || null;
}, Co = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
yt.prototype.isDeletable = function(t, e, n, i) {
  var o = this._inputLine[t], s = this._inputLine[e], a = this._inputLine[n];
  return !this.isConcave(o, s, a) || !this.isShallow(o, s, a, i) ? !1 : this.isShallowSampled(o, s, t, n, i);
};
yt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, n = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(n), o = !1; i < this._inputLine.length; ) {
    var s = !1;
    t.isDeletable(e, n, i, t._distanceTol) && (t._isDeleted[n] = yt.DELETE, s = !0, o = !0), s ? e = i : e = n, n = t.findNextNonDeletedIndex(e), i = t.findNextNonDeletedIndex(n);
  }
  return o;
};
yt.prototype.isShallowConcavity = function(t, e, n, i) {
  var o = T.computeOrientation(t, e, n), s = o === this._angleOrientation;
  if (!s)
    return !1;
  var a = T.distancePointLine(e, t, n);
  return a < i;
};
yt.prototype.isShallowSampled = function(t, e, n, i, o) {
  var s = this, a = Math.trunc((i - n) / yt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = n; u < i; u += a)
    if (!s.isShallow(t, e, s._inputLine[u], o))
      return !1;
  return !0;
};
yt.prototype.isConcave = function(t, e, n) {
  var i = T.computeOrientation(t, e, n), o = i === this._angleOrientation;
  return o;
};
yt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = T.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var n = !1;
  do
    n = e.deleteShallowConcavities();
  while (n);
  return this.collapseLine();
};
yt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === yt.DELETE; )
    e++;
  return e;
};
yt.prototype.isShallow = function(t, e, n, i) {
  var o = T.distancePointLine(e, t, n);
  return o < i;
};
yt.prototype.collapseLine = function() {
  for (var t = this, e = new _o(), n = 0; n < this._inputLine.length; n++)
    t._isDeleted[n] !== yt.DELETE && e.add(t._inputLine[n]);
  return e.toCoordinateArray();
};
yt.prototype.interfaces_ = function() {
  return [];
};
yt.prototype.getClass = function() {
  return yt;
};
yt.simplify = function(t, e) {
  var n = new yt(t);
  return n.simplify(e);
};
Co.INIT.get = function() {
  return 0;
};
Co.DELETE.get = function() {
  return 1;
};
Co.KEEP.get = function() {
  return 1;
};
Co.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(yt, Co);
var be = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new O();
}, Pu = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
be.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(be.COORDINATE_ARRAY_TYPE);
  return t;
};
be.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
be.prototype.addPt = function(t) {
  var e = new y(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
be.prototype.revere = function() {
};
be.prototype.addPts = function(t, e) {
  var n = this;
  if (e)
    for (var i = 0; i < t.length; i++)
      n.addPt(t[i]);
  else
    for (var o = t.length - 1; o >= 0; o--)
      n.addPt(t[o]);
};
be.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), n = t.distance(e);
  return n < this._minimimVertexDistance;
};
be.prototype.toString = function() {
  var t = new W(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
be.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new y(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
  if (t.equals(e))
    return null;
  this._ptList.add(t);
};
be.prototype.setMinimumVertexDistance = function(t) {
  this._minimimVertexDistance = t;
};
be.prototype.interfaces_ = function() {
  return [];
};
be.prototype.getClass = function() {
  return be;
};
Pu.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(be, Pu);
var K = function() {
}, hi = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
K.prototype.interfaces_ = function() {
  return [];
};
K.prototype.getClass = function() {
  return K;
};
K.toDegrees = function(t) {
  return t * 180 / Math.PI;
};
K.normalize = function(t) {
  for (; t > Math.PI; )
    t -= K.PI_TIMES_2;
  for (; t <= -Math.PI; )
    t += K.PI_TIMES_2;
  return t;
};
K.angle = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Math.atan2(t.y, t.x);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = n.x - e.x, o = n.y - e.y;
    return Math.atan2(o, i);
  }
};
K.isAcute = function(t, e, n) {
  var i = t.x - e.x, o = t.y - e.y, s = n.x - e.x, a = n.y - e.y, u = i * s + o * a;
  return u > 0;
};
K.isObtuse = function(t, e, n) {
  var i = t.x - e.x, o = t.y - e.y, s = n.x - e.x, a = n.y - e.y, u = i * s + o * a;
  return u < 0;
};
K.interiorAngle = function(t, e, n) {
  var i = K.angle(e, t), o = K.angle(e, n);
  return Math.abs(o - i);
};
K.normalizePositive = function(t) {
  if (t < 0) {
    for (; t < 0; )
      t += K.PI_TIMES_2;
    t >= K.PI_TIMES_2 && (t = 0);
  } else {
    for (; t >= K.PI_TIMES_2; )
      t -= K.PI_TIMES_2;
    t < 0 && (t = 0);
  }
  return t;
};
K.angleBetween = function(t, e, n) {
  var i = K.angle(e, t), o = K.angle(e, n);
  return K.diff(i, o);
};
K.diff = function(t, e) {
  var n = null;
  return t < e ? n = e - t : n = t - e, n > Math.PI && (n = 2 * Math.PI - n), n;
};
K.toRadians = function(t) {
  return t * Math.PI / 180;
};
K.getTurn = function(t, e) {
  var n = Math.sin(e - t);
  return n > 0 ? K.COUNTERCLOCKWISE : n < 0 ? K.CLOCKWISE : K.NONE;
};
K.angleBetweenOriented = function(t, e, n) {
  var i = K.angle(e, t), o = K.angle(e, n), s = o - i;
  return s <= -Math.PI ? s + K.PI_TIMES_2 : s > Math.PI ? s - K.PI_TIMES_2 : s;
};
hi.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
hi.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
hi.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
hi.COUNTERCLOCKWISE.get = function() {
  return T.COUNTERCLOCKWISE;
};
hi.CLOCKWISE.get = function() {
  return T.CLOCKWISE;
};
hi.NONE.get = function() {
  return T.COLLINEAR;
};
Object.defineProperties(K, hi);
var ct = function r() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new k(), this._seg1 = new k(), this._offset0 = new k(), this._offset1 = new k(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new Xr(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === J.JOIN_ROUND && (this._closingSegLengthFactor = r.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
}, No = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
ct.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var n = T.computeOrientation(this._s0, this._s1, this._s2), i = n === T.CLOCKWISE && this._side === b.LEFT || n === T.COUNTERCLOCKWISE && this._side === b.RIGHT;
  n === 0 ? this.addCollinear(e) : i ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
};
ct.prototype.addLineEndCap = function(t, e) {
  var n = new k(t, e), i = new k();
  this.computeOffsetSegment(n, b.LEFT, this._distance, i);
  var o = new k();
  this.computeOffsetSegment(n, b.RIGHT, this._distance, o);
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s);
  switch (this._bufParams.getEndCapStyle()) {
    case J.CAP_ROUND:
      this._segList.addPt(i.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, T.CLOCKWISE, this._distance), this._segList.addPt(o.p1);
      break;
    case J.CAP_FLAT:
      this._segList.addPt(i.p1), this._segList.addPt(o.p1);
      break;
    case J.CAP_SQUARE:
      var l = new y();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new y(i.p1.x + l.x, i.p1.y + l.y), f = new y(o.p1.x + l.x, o.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(f);
      break;
  }
};
ct.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
ct.prototype.addMitreJoin = function(t, e, n, i) {
  var o = !0, s = null;
  try {
    s = ze.intersection(e.p0, e.p1, n.p0, n.p1);
    var a = i <= 0 ? 1 : s.distance(t) / Math.abs(i);
    a > this._bufParams.getMitreLimit() && (o = !1);
  } catch (u) {
    if (u instanceof zi)
      s = new y(0, 0), o = !1;
    else
      throw u;
  } finally {
  }
  o ? this._segList.addPt(s) : this.addLimitedMitreJoin(e, n, i, this._bufParams.getMitreLimit());
};
ct.prototype.addFilletCorner = function(t, e, n, i, o) {
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s), l = n.x - t.x, c = n.y - t.y, f = Math.atan2(c, l);
  i === T.CLOCKWISE ? u <= f && (u += 2 * Math.PI) : u >= f && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, f, i, o), this._segList.addPt(n);
};
ct.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * ct.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === J.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === J.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
ct.prototype.createSquare = function(t) {
  this._segList.addPt(new y(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new y(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new y(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new y(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
ct.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
ct.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
ct.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
ct.prototype.initSideSegments = function(t, e, n) {
  this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
};
ct.prototype.addLimitedMitreJoin = function(t, e, n, i) {
  var o = this._seg0.p1, s = K.angle(o, this._seg0.p0), a = K.angleBetweenOriented(this._seg0.p0, o, this._seg1.p1), u = a / 2, l = K.normalize(s + u), c = K.normalize(l + Math.PI), f = i * n, h = f * Math.abs(Math.sin(u)), g = n - h, p = o.x + f * Math.cos(c), d = o.y + f * Math.sin(c), v = new y(p, d), _ = new k(o, v), C = _.pointAlongOffset(1, g), E = _.pointAlongOffset(1, -g);
  this._side === b.LEFT ? (this._segList.addPt(C), this._segList.addPt(E)) : (this._segList.addPt(E), this._segList.addPt(C));
};
ct.prototype.computeOffsetSegment = function(t, e, n, i) {
  var o = e === b.LEFT ? 1 : -1, s = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(s * s + a * a), l = o * n * s / u, c = o * n * a / u;
  i.p0.x = t.p0.x - c, i.p0.y = t.p0.y + l, i.p1.x = t.p1.x - c, i.p1.y = t.p1.y + l;
};
ct.prototype.addFilletArc = function(t, e, n, i, o) {
  var s = this, a = i === T.CLOCKWISE ? -1 : 1, u = Math.abs(e - n), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, f = u / l, h = c, g = new y(); h < u; ) {
    var p = e + a * h;
    g.x = t.x + o * Math.cos(p), g.y = t.y + o * Math.sin(p), s._segList.addPt(g), h += f;
  }
};
ct.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * ct.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
    this._segList.addPt(this._offset0.p1);
  else {
    if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
      var n = new y((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(n);
      var i = new y((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(i);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
ct.prototype.createCircle = function(t) {
  var e = new y(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
ct.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
ct.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new be(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * ct.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
ct.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === J.JOIN_BEVEL || this._bufParams.getJoinStyle() === J.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, T.CLOCKWISE, this._distance));
};
ct.prototype.closeRing = function() {
  this._segList.closeRing();
};
ct.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
ct.prototype.interfaces_ = function() {
  return [];
};
ct.prototype.getClass = function() {
  return ct;
};
No.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
No.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
No.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
No.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(ct, No);
var ce = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
ce.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var n = e < 0, i = Math.abs(e), o = this.getSegGen(i);
  t.length <= 1 ? this.computePointCurve(t[0], o) : this.computeOffsetCurve(t, n, o);
  var s = o.getCoordinates();
  return n && j.reverse(s), s;
};
ce.prototype.computeSingleSidedBufferCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    n.addSegments(t, !0);
    var o = yt.simplify(t, -i), s = o.length - 1;
    n.initSideSegments(o[s], o[s - 1], b.LEFT), n.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      n.addNextSegment(o[a], !0);
  } else {
    n.addSegments(t, !1);
    var u = yt.simplify(t, i), l = u.length - 1;
    n.initSideSegments(u[0], u[1], b.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment(), n.closeRing();
};
ce.prototype.computeRingBufferCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  e === b.RIGHT && (i = -i);
  var o = yt.simplify(t, i), s = o.length - 1;
  n.initSideSegments(o[s - 1], o[0], e);
  for (var a = 1; a <= s; a++) {
    var u = a !== 1;
    n.addNextSegment(o[a], u);
  }
  n.closeRing();
};
ce.prototype.computeLineBufferCurve = function(t, e) {
  var n = this.simplifyTolerance(this._distance), i = yt.simplify(t, n), o = i.length - 1;
  e.initSideSegments(i[0], i[1], b.LEFT);
  for (var s = 2; s <= o; s++)
    e.addNextSegment(i[s], !0);
  e.addLastSegment(), e.addLineEndCap(i[o - 1], i[o]);
  var a = yt.simplify(t, -n), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], b.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
ce.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case J.CAP_ROUND:
      e.createCircle(t);
      break;
    case J.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
ce.prototype.getLineCurve = function(t, e) {
  if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || e === 0)
    return null;
  var n = Math.abs(e), i = this.getSegGen(n);
  if (t.length <= 1)
    this.computePointCurve(t[0], i);
  else if (this._bufParams.isSingleSided()) {
    var o = e < 0;
    this.computeSingleSidedBufferCurve(t, o, i);
  } else
    this.computeLineBufferCurve(t, i);
  var s = i.getCoordinates();
  return s;
};
ce.prototype.getBufferParameters = function() {
  return this._bufParams;
};
ce.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
ce.prototype.getRingCurve = function(t, e, n) {
  if (this._distance = n, t.length <= 2)
    return this.getLineCurve(t, n);
  if (n === 0)
    return ce.copyCoordinates(t);
  var i = this.getSegGen(n);
  return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
};
ce.prototype.computeOffsetCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    var o = yt.simplify(t, -i), s = o.length - 1;
    n.initSideSegments(o[s], o[s - 1], b.LEFT), n.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      n.addNextSegment(o[a], !0);
  } else {
    var u = yt.simplify(t, i), l = u.length - 1;
    n.initSideSegments(u[0], u[1], b.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment();
};
ce.prototype.getSegGen = function(t) {
  return new ct(this._precisionModel, this._bufParams, t);
};
ce.prototype.interfaces_ = function() {
  return [];
};
ce.prototype.getClass = function() {
  return ce;
};
ce.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)
    e[n] = new y(t[n]);
  return e;
};
var $r = function() {
  this._subgraphs = null, this._seg = new k(), this._cga = new T();
  var t = arguments[0];
  this._subgraphs = t;
}, Ru = { DepthSegment: { configurable: !0 } };
$r.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = new O(), i = this._subgraphs.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getEnvelope();
      e.y < s.getMinY() || e.y > s.getMaxY() || t.findStabbedSegments(e, o.getDirectedEdges(), n);
    }
    return n;
  } else if (arguments.length === 3) {
    if (V(arguments[2], Ue) && arguments[0] instanceof y && arguments[1] instanceof As)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), f = 0; f < c.length - 1; f++) {
        t._seg.p0 = c[f], t._seg.p1 = c[f + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var h = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(h < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && T.computeOrientation(t._seg.p0, t._seg.p1, a) !== T.RIGHT) {
          var g = u.getDepth(b.LEFT);
          t._seg.p0.equals(c[f]) || (g = u.getDepth(b.RIGHT));
          var p = new Mr(t._seg, g);
          l.add(p);
        }
      }
    else if (V(arguments[2], Ue) && arguments[0] instanceof y && V(arguments[1], Ue))
      for (var d = arguments[0], v = arguments[1], _ = arguments[2], C = v.iterator(); C.hasNext(); ) {
        var E = C.next();
        E.isForward() && t.findStabbedSegments(d, E, _);
      }
  }
};
$r.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var n = He.min(e);
  return n._leftDepth;
};
$r.prototype.interfaces_ = function() {
  return [];
};
$r.prototype.getClass = function() {
  return $r;
};
Ru.DepthSegment.get = function() {
  return Mr;
};
Object.defineProperties($r, Ru);
var Mr = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new k(t), this._leftDepth = e;
};
Mr.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var n = this._upwardSeg.orientationIndex(e._upwardSeg);
  return n !== 0 || (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), n !== 0) ? n : this._upwardSeg.compareTo(e._upwardSeg);
};
Mr.prototype.compareX = function(t, e) {
  var n = t.p0.compareTo(e.p0);
  return n !== 0 ? n : t.p1.compareTo(e.p1);
};
Mr.prototype.toString = function() {
  return this._upwardSeg.toString();
};
Mr.prototype.interfaces_ = function() {
  return [ke];
};
Mr.prototype.getClass = function() {
  return Mr;
};
var tt = function(t, e, n) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = n || null;
};
tt.prototype.area = function() {
  return tt.area(this.p0, this.p1, this.p2);
};
tt.prototype.signedArea = function() {
  return tt.signedArea(this.p0, this.p1, this.p2);
};
tt.prototype.interpolateZ = function(t) {
  if (t === null)
    throw new ft("Supplied point is null.");
  return tt.interpolateZ(t, this.p0, this.p1, this.p2);
};
tt.prototype.longestSideLength = function() {
  return tt.longestSideLength(this.p0, this.p1, this.p2);
};
tt.prototype.isAcute = function() {
  return tt.isAcute(this.p0, this.p1, this.p2);
};
tt.prototype.circumcentre = function() {
  return tt.circumcentre(this.p0, this.p1, this.p2);
};
tt.prototype.area3D = function() {
  return tt.area3D(this.p0, this.p1, this.p2);
};
tt.prototype.centroid = function() {
  return tt.centroid(this.p0, this.p1, this.p2);
};
tt.prototype.inCentre = function() {
  return tt.inCentre(this.p0, this.p1, this.p2);
};
tt.prototype.interfaces_ = function() {
  return [];
};
tt.prototype.getClass = function() {
  return tt;
};
tt.area = function(t, e, n) {
  return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
};
tt.signedArea = function(t, e, n) {
  return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
};
tt.det = function(t, e, n, i) {
  return t * i - e * n;
};
tt.interpolateZ = function(t, e, n, i) {
  var o = e.x, s = e.y, a = n.x - o, u = i.x - o, l = n.y - s, c = i.y - s, f = a * c - u * l, h = t.x - o, g = t.y - s, p = (c * h - u * g) / f, d = (-l * h + a * g) / f, v = e.z + p * (n.z - e.z) + d * (i.z - e.z);
  return v;
};
tt.longestSideLength = function(t, e, n) {
  var i = t.distance(e), o = e.distance(n), s = n.distance(t), a = i;
  return o > a && (a = o), s > a && (a = s), a;
};
tt.isAcute = function(t, e, n) {
  return !(!K.isAcute(t, e, n) || !K.isAcute(e, n, t) || !K.isAcute(n, t, e));
};
tt.circumcentre = function(t, e, n) {
  var i = n.x, o = n.y, s = t.x - i, a = t.y - o, u = e.x - i, l = e.y - o, c = 2 * tt.det(s, a, u, l), f = tt.det(a, s * s + a * a, l, u * u + l * l), h = tt.det(s, s * s + a * a, u, u * u + l * l), g = i - f / c, p = o + h / c;
  return new y(g, p);
};
tt.perpendicularBisector = function(t, e) {
  var n = e.x - t.x, i = e.y - t.y, o = new ze(t.x + n / 2, t.y + i / 2, 1), s = new ze(t.x - i + n / 2, t.y + n + i / 2, 1);
  return new ze(o, s);
};
tt.angleBisector = function(t, e, n) {
  var i = e.distance(t), o = e.distance(n), s = i / (i + o), a = n.x - t.x, u = n.y - t.y, l = new y(t.x + s * a, t.y + s * u);
  return l;
};
tt.area3D = function(t, e, n) {
  var i = e.x - t.x, o = e.y - t.y, s = e.z - t.z, a = n.x - t.x, u = n.y - t.y, l = n.z - t.z, c = o * l - s * u, f = s * a - i * l, h = i * u - o * a, g = c * c + f * f + h * h, p = Math.sqrt(g) / 2;
  return p;
};
tt.centroid = function(t, e, n) {
  var i = (t.x + e.x + n.x) / 3, o = (t.y + e.y + n.y) / 3;
  return new y(i, o);
};
tt.inCentre = function(t, e, n) {
  var i = e.distance(n), o = t.distance(n), s = t.distance(e), a = i + o + s, u = (i * t.x + o * e.x + s * n.x) / a, l = (i * t.y + o * e.y + s * n.y) / a;
  return new y(u, l);
};
var Be = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new O();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = n;
};
Be.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, m.EXTERIOR, m.INTERIOR);
};
Be.prototype.addPolygon = function(t) {
  var e = this, n = this._distance, i = b.LEFT;
  this._distance < 0 && (n = -this._distance, i = b.RIGHT);
  var o = t.getExteriorRing(), s = j.removeRepeatedPoints(o.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(o, this._distance) || this._distance <= 0 && s.length < 3)
    return null;
  this.addPolygonRing(s, n, i, m.EXTERIOR, m.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = j.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, n, b.opposite(i), m.INTERIOR, m.EXTERIOR);
  }
};
Be.prototype.isTriangleErodedCompletely = function(t, e) {
  var n = new tt(t[0], t[1], t[2]), i = n.inCentre(), o = T.distancePointLine(i, n.p0, n.p1);
  return o < Math.abs(e);
};
Be.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = j.removeRepeatedPoints(t.getCoordinates()), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, m.EXTERIOR, m.INTERIOR);
};
Be.prototype.addCurve = function(t, e, n) {
  if (t === null || t.length < 2)
    return null;
  var i = new Ct(t, new et(0, m.BOUNDARY, e, n));
  this._curveList.add(i);
};
Be.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
Be.prototype.addPolygonRing = function(t, e, n, i, o) {
  if (e === 0 && t.length < Rn.MINIMUM_VALID_SIZE)
    return null;
  var s = i, a = o;
  t.length >= Rn.MINIMUM_VALID_SIZE && T.isCCW(t) && (s = o, a = i, n = b.opposite(n));
  var u = this._curveBuilder.getRingCurve(t, n, e);
  this.addCurve(u, s, a);
};
Be.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof Ot ? this.addPolygon(t) : t instanceof vt ? this.addLineString(t) : t instanceof ve ? this.addPoint(t) : t instanceof Li ? this.addCollection(t) : t instanceof Dr ? this.addCollection(t) : t instanceof Ln ? this.addCollection(t) : t instanceof re && this.addCollection(t);
};
Be.prototype.isErodedCompletely = function(t, e) {
  var n = t.getCoordinates();
  if (n.length < 4)
    return e < 0;
  if (n.length === 4)
    return this.isTriangleErodedCompletely(n, e);
  var i = t.getEnvelopeInternal(), o = Math.min(i.getHeight(), i.getWidth());
  return e < 0 && 2 * Math.abs(e) > o;
};
Be.prototype.addCollection = function(t) {
  for (var e = this, n = 0; n < t.getNumGeometries(); n++) {
    var i = t.getGeometryN(n);
    e.add(i);
  }
};
Be.prototype.interfaces_ = function() {
  return [];
};
Be.prototype.getClass = function() {
  return Be;
};
var Oi = function() {
};
Oi.prototype.locate = function(t) {
};
Oi.prototype.interfaces_ = function() {
  return [];
};
Oi.prototype.getClass = function() {
  return Oi;
};
var bn = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
bn.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, bn.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new qi();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof re ? (this._subcollectionIterator = new bn(t), this._subcollectionIterator.next()) : t;
};
bn.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
bn.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
bn.prototype.interfaces_ = function() {
  return [Ui];
};
bn.prototype.getClass = function() {
  return bn;
};
bn.isAtomic = function(t) {
  return !(t instanceof re);
};
var xe = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
xe.prototype.locate = function(t) {
  return xe.locate(t, this._geom);
};
xe.prototype.interfaces_ = function() {
  return [Oi];
};
xe.prototype.getClass = function() {
  return xe;
};
xe.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? T.isPointInRing(t, e.getCoordinates()) : !1;
};
xe.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var n = e.getExteriorRing();
  if (!xe.isPointInRing(t, n))
    return !1;
  for (var i = 0; i < e.getNumInteriorRing(); i++) {
    var o = e.getInteriorRingN(i);
    if (xe.isPointInRing(t, o))
      return !1;
  }
  return !0;
};
xe.containsPoint = function(t, e) {
  if (e instanceof Ot)
    return xe.containsPointInPolygon(t, e);
  if (e instanceof re)
    for (var n = new bn(e); n.hasNext(); ) {
      var i = n.next();
      if (i !== e && xe.containsPoint(t, i))
        return !0;
    }
  return !1;
};
xe.locate = function(t, e) {
  return e.isEmpty() ? m.EXTERIOR : xe.containsPoint(t, e) ? m.INTERIOR : m.EXTERIOR;
};
var Zt = function() {
  this._edgeMap = new Kt(), this._edgeList = null, this._ptInAreaLocation = [m.NONE, m.NONE];
};
Zt.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), n = e - 1;
  return e === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
};
Zt.prototype.propagateSideLabels = function(t) {
  for (var e = m.NONE, n = this.iterator(); n.hasNext(); ) {
    var i = n.next(), o = i.getLabel();
    o.isArea(t) && o.getLocation(t, b.LEFT) !== m.NONE && (e = o.getLocation(t, b.LEFT));
  }
  if (e === m.NONE)
    return null;
  for (var s = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, b.ON) === m.NONE && l.setLocation(t, b.ON, s), l.isArea(t)) {
      var c = l.getLocation(t, b.LEFT), f = l.getLocation(t, b.RIGHT);
      if (f !== m.NONE) {
        if (f !== s)
          throw new $n("side location conflict", u.getCoordinate());
        c === m.NONE && q.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), s = c;
      } else
        q.isTrue(l.getLocation(t, b.LEFT) === m.NONE, "found single null side"), l.setLocation(t, b.RIGHT, s), l.setLocation(t, b.LEFT, s);
    }
  }
};
Zt.prototype.getCoordinate = function() {
  var t = this.iterator();
  if (!t.hasNext())
    return null;
  var e = t.next();
  return e.getCoordinate();
};
Zt.prototype.print = function(t) {
  Xt.out.println("EdgeEndStar:   " + this.getCoordinate());
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
Zt.prototype.isAreaLabelsConsistent = function(t) {
  return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
};
Zt.prototype.checkAreaLabelsConsistent = function(t) {
  var e = this.getEdges();
  if (e.size() <= 0)
    return !0;
  var n = e.size() - 1, i = e.get(n).getLabel(), o = i.getLocation(t, b.LEFT);
  q.isTrue(o !== m.NONE, "Found unlabelled area edge");
  for (var s = o, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    q.isTrue(l.isArea(t), "Found non-area edge");
    var c = l.getLocation(t, b.LEFT), f = l.getLocation(t, b.RIGHT);
    if (c === f || f !== s)
      return !1;
    s = c;
  }
  return !0;
};
Zt.prototype.findIndex = function(t) {
  var e = this;
  this.iterator();
  for (var n = 0; n < this._edgeList.size(); n++) {
    var i = e._edgeList.get(n);
    if (i === t)
      return n;
  }
  return -1;
};
Zt.prototype.iterator = function() {
  return this.getEdges().iterator();
};
Zt.prototype.getEdges = function() {
  return this._edgeList === null && (this._edgeList = new O(this._edgeMap.values())), this._edgeList;
};
Zt.prototype.getLocation = function(t, e, n) {
  return this._ptInAreaLocation[t] === m.NONE && (this._ptInAreaLocation[t] = xe.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
};
Zt.prototype.toString = function() {
  var t = new En();
  t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.append(n), t.append(`
`);
  }
  return t.toString();
};
Zt.prototype.computeEdgeEndLabels = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.computeLabel(t);
  }
};
Zt.prototype.computeLabelling = function(t) {
  var e = this;
  this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
  for (var n = [!1, !1], i = this.iterator(); i.hasNext(); )
    for (var o = i.next(), s = o.getLabel(), a = 0; a < 2; a++)
      s.isLine(a) && s.getLocation(a) === m.BOUNDARY && (n[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), f = 0; f < 2; f++)
      if (c.isAnyNull(f)) {
        var h = m.NONE;
        if (n[f])
          h = m.EXTERIOR;
        else {
          var g = l.getCoordinate();
          h = e.getLocation(f, g, t);
        }
        c.setAllLocationsIfNull(f, h);
      }
};
Zt.prototype.getDegree = function() {
  return this._edgeMap.size();
};
Zt.prototype.insertEdgeEnd = function(t, e) {
  this._edgeMap.put(t, e), this._edgeList = null;
};
Zt.prototype.interfaces_ = function() {
  return [];
};
Zt.prototype.getClass = function() {
  return Zt;
};
var lf = function(r) {
  function t() {
    r.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.linkResultDirectedEdges = function() {
    var n = this;
    this.getResultAreaEdges();
    for (var i = null, o = null, s = this._SCANNING_FOR_INCOMING, a = 0; a < this._resultAreaEdgeList.size(); a++) {
      var u = n._resultAreaEdgeList.get(a), l = u.getSym();
      if (u.getLabel().isArea())
        switch (i === null && u.isInResult() && (i = u), s) {
          case n._SCANNING_FOR_INCOMING:
            if (!l.isInResult())
              continue;
            o = l, s = n._LINKING_TO_OUTGOING;
            break;
          case n._LINKING_TO_OUTGOING:
            if (!u.isInResult())
              continue;
            o.setNext(u), s = n._SCANNING_FOR_INCOMING;
            break;
        }
    }
    if (s === this._LINKING_TO_OUTGOING) {
      if (i === null)
        throw new $n("no outgoing dirEdge found", this.getCoordinate());
      q.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), o.setNext(i);
    }
  }, t.prototype.insert = function(n) {
    var i = n;
    this.insertEdgeEnd(i, i);
  }, t.prototype.getRightmostEdge = function() {
    var n = this.getEdges(), i = n.size();
    if (i < 1)
      return null;
    var o = n.get(0);
    if (i === 1)
      return o;
    var s = n.get(i - 1), a = o.getQuadrant(), u = s.getQuadrant();
    return ot.isNorthern(a) && ot.isNorthern(u) ? o : !ot.isNorthern(a) && !ot.isNorthern(u) ? s : o.getDy() !== 0 ? o : s.getDy() !== 0 ? s : (q.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(n) {
    Xt.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      n.print("out "), o.print(n), n.println(), n.print("in "), o.getSym().print(n), n.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var n = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new O();
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      (o.isInResult() || o.getSym().isInResult()) && n._resultAreaEdgeList.add(o);
    }
    return this._resultAreaEdgeList;
  }, t.prototype.updateLabelling = function(n) {
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.setAllLocationsIfNull(0, n.getLocation(0)), s.setAllLocationsIfNull(1, n.getLocation(1));
    }
  }, t.prototype.linkAllDirectedEdges = function() {
    var n = this;
    this.getEdges();
    for (var i = null, o = null, s = this._edgeList.size() - 1; s >= 0; s--) {
      var a = n._edgeList.get(s), u = a.getSym();
      o === null && (o = u), i !== null && u.setNext(i), i = a;
    }
    o.setNext(i);
  }, t.prototype.computeDepths = function() {
    var n = this;
    if (arguments.length === 1) {
      var i = arguments[0], o = this.findIndex(i), s = i.getDepth(b.LEFT), a = i.getDepth(b.RIGHT), u = this.computeDepths(o + 1, this._edgeList.size(), s), l = this.computeDepths(0, o, u);
      if (l !== a)
        throw new $n("depth mismatch at " + i.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], f = arguments[1], h = arguments[2], g = h, p = c; p < f; p++) {
        var d = n._edgeList.get(p);
        d.setEdgeDepths(b.RIGHT, g), g = d.getDepth(b.LEFT);
      }
      return g;
    }
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this.iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getLabel();
      o.merge(i.getSym().getLabel());
    }
  }, t.prototype.linkMinimalDirectedEdges = function(n) {
    for (var i = this, o = null, s = null, a = this._SCANNING_FOR_INCOMING, u = this._resultAreaEdgeList.size() - 1; u >= 0; u--) {
      var l = i._resultAreaEdgeList.get(u), c = l.getSym();
      switch (o === null && l.getEdgeRing() === n && (o = l), a) {
        case i._SCANNING_FOR_INCOMING:
          if (c.getEdgeRing() !== n)
            continue;
          s = c, a = i._LINKING_TO_OUTGOING;
          break;
        case i._LINKING_TO_OUTGOING:
          if (l.getEdgeRing() !== n)
            continue;
          s.setNextMin(l), a = i._SCANNING_FOR_INCOMING;
          break;
      }
    }
    a === this._LINKING_TO_OUTGOING && (q.isTrue(o !== null, "found null for first outgoing dirEdge"), q.isTrue(o.getEdgeRing() === n, "unable to link last incoming dirEdge"), s.setNextMin(o));
  }, t.prototype.getOutgoingDegree = function() {
    if (arguments.length === 0) {
      for (var n = 0, i = this.iterator(); i.hasNext(); ) {
        var o = i.next();
        o.isInResult() && n++;
      }
      return n;
    } else if (arguments.length === 1) {
      for (var s = arguments[0], a = 0, u = this.iterator(); u.hasNext(); ) {
        var l = u.next();
        l.getEdgeRing() === s && a++;
      }
      return a;
    }
  }, t.prototype.getLabel = function() {
    return this._label;
  }, t.prototype.findCoveredLineEdges = function() {
    for (var n = m.NONE, i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getSym();
      if (!o.isLineEdge()) {
        if (o.isInResult()) {
          n = m.INTERIOR;
          break;
        }
        if (s.isInResult()) {
          n = m.EXTERIOR;
          break;
        }
      }
    }
    if (n === m.NONE)
      return null;
    for (var a = n, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === m.INTERIOR) : (l.isInResult() && (a = m.EXTERIOR), c.isInResult() && (a = m.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(n) {
    var i = this;
    r.prototype.computeLabelling.call(this, n), this._label = new et(m.NONE);
    for (var o = this.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var c = u.getLocation(l);
        (c === m.INTERIOR || c === m.BOUNDARY) && i._label.setLocation(l, m.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Zt), Ou = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.createNode = function(n) {
    return new cs(n, new lf());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(bi), dr = function r() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = r.orientation(t);
};
dr.prototype.compareTo = function(t) {
  var e = t, n = dr.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return n;
};
dr.prototype.interfaces_ = function() {
  return [ke];
};
dr.prototype.getClass = function() {
  return dr;
};
dr.orientation = function(t) {
  return j.increasingDirection(t) === 1;
};
dr.compareOriented = function(t, e, n, i) {
  for (var o = e ? 1 : -1, s = i ? 1 : -1, a = e ? t.length : -1, u = i ? n.length : -1, l = e ? 0 : t.length - 1, c = i ? 0 : n.length - 1; ; ) {
    var f = t[l].compareTo(n[c]);
    if (f !== 0)
      return f;
    l += o, c += s;
    var h = l === a, g = c === u;
    if (h && !g)
      return -1;
    if (!h && g)
      return 1;
    if (h && g)
      return 0;
  }
};
var We = function() {
  this._edges = new O(), this._ocaMap = new Kt();
};
We.prototype.print = function(t) {
  var e = this;
  t.print("MULTILINESTRING ( ");
  for (var n = 0; n < this._edges.size(); n++) {
    var i = e._edges.get(n);
    n > 0 && t.print(","), t.print("(");
    for (var o = i.getCoordinates(), s = 0; s < o.length; s++)
      s > 0 && t.print(","), t.print(o[s].x + " " + o[s].y);
    t.println(")");
  }
  t.print(")  ");
};
We.prototype.addAll = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); )
    e.add(n.next());
};
We.prototype.findEdgeIndex = function(t) {
  for (var e = this, n = 0; n < this._edges.size(); n++)
    if (e._edges.get(n).equals(t))
      return n;
  return -1;
};
We.prototype.iterator = function() {
  return this._edges.iterator();
};
We.prototype.getEdges = function() {
  return this._edges;
};
We.prototype.get = function(t) {
  return this._edges.get(t);
};
We.prototype.findEqualEdge = function(t) {
  var e = new dr(t.getCoordinates()), n = this._ocaMap.get(e);
  return n;
};
We.prototype.add = function(t) {
  this._edges.add(t);
  var e = new dr(t.getCoordinates());
  this._ocaMap.put(e, t);
};
We.prototype.interfaces_ = function() {
  return [];
};
We.prototype.getClass = function() {
  return We;
};
var Ar = function() {
};
Ar.prototype.processIntersections = function(t, e, n, i) {
};
Ar.prototype.isDone = function() {
};
Ar.prototype.interfaces_ = function() {
  return [];
};
Ar.prototype.getClass = function() {
  return Ar;
};
var Pe = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
Pe.prototype.isTrivialIntersection = function(t, e, n, i) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (Pe.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.size() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Pe.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Pe.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Pe.prototype.getLineIntersector = function() {
  return this._li;
};
Pe.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Pe.prototype.processIntersections = function(t, e, n, i) {
  if (t === n && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], u = n.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
};
Pe.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Pe.prototype.isDone = function() {
  return !1;
};
Pe.prototype.hasInteriorIntersection = function() {
  return this._hasInterior;
};
Pe.prototype.interfaces_ = function() {
  return [Ar];
};
Pe.prototype.getClass = function() {
  return Pe;
};
Pe.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var dn = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this.coord = new y(t), this.segmentIndex = e, this.dist = n;
};
dn.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
dn.prototype.getCoordinate = function() {
  return this.coord;
};
dn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
dn.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
dn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
dn.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
dn.prototype.getDistance = function() {
  return this.dist;
};
dn.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
dn.prototype.interfaces_ = function() {
  return [ke];
};
dn.prototype.getClass = function() {
  return dn;
};
var Tn = function() {
  this._nodeMap = new Kt(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
Tn.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
Tn.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
Tn.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var o = n.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
Tn.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
Tn.prototype.createSplitEdge = function(t, e) {
  var n = this, i = e.segmentIndex - t.segmentIndex + 2, o = this.edge.pts[e.segmentIndex], s = e.dist > 0 || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new y(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n.edge.pts[l];
  return s && (a[u] = e.coord), new Yo(a, new et(this.edge._label));
};
Tn.prototype.add = function(t, e, n) {
  var i = new dn(t, e, n), o = this._nodeMap.get(i);
  return o !== null ? o : (this._nodeMap.put(i, i), i);
};
Tn.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.coord.equals(t))
      return !0;
  }
  return !1;
};
Tn.prototype.interfaces_ = function() {
  return [];
};
Tn.prototype.getClass = function() {
  return Tn;
};
var Fr = function() {
};
Fr.prototype.getChainStartIndices = function(t) {
  var e = this, n = 0, i = new O();
  i.add(new ln(n));
  do {
    var o = e.findChainEnd(t, n);
    i.add(new ln(o)), n = o;
  } while (n < t.length - 1);
  var s = Fr.toIntArray(i);
  return s;
};
Fr.prototype.findChainEnd = function(t, e) {
  for (var n = ot.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length; ) {
    var o = ot.quadrant(t[i - 1], t[i]);
    if (o !== n)
      break;
    i++;
  }
  return i - 1;
};
Fr.prototype.interfaces_ = function() {
  return [];
};
Fr.prototype.getClass = function() {
  return Fr;
};
Fr.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var er = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new B(), this.env2 = new B();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new Fr();
  this.startIndex = e.getChainStartIndices(this.pts);
};
er.prototype.getCoordinates = function() {
  return this.pts;
};
er.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e > n ? e : n;
};
er.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e < n ? e : n;
};
er.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], i);
  } else if (arguments.length === 6) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], f = this.pts[o], h = this.pts[s], g = a.pts[u], p = a.pts[l];
    if (s - o === 1 && l - u === 1)
      return c.addIntersections(this.e, o, a.e, u), null;
    if (this.env1.init(f, h), this.env2.init(g, p), !this.env1.intersects(this.env2))
      return null;
    var d = Math.trunc((o + s) / 2), v = Math.trunc((u + l) / 2);
    o < d && (u < v && this.computeIntersectsForChain(o, d, a, u, v, c), v < l && this.computeIntersectsForChain(o, d, a, v, l, c)), d < s && (u < v && this.computeIntersectsForChain(d, s, a, u, v, c), v < l && this.computeIntersectsForChain(d, s, a, v, l, c));
  }
};
er.prototype.getStartIndexes = function() {
  return this.startIndex;
};
er.prototype.computeIntersects = function(t, e) {
  for (var n = this, i = 0; i < this.startIndex.length - 1; i++)
    for (var o = 0; o < t.startIndex.length - 1; o++)
      n.computeIntersectsForChain(i, t, o, e);
};
er.prototype.interfaces_ = function() {
  return [];
};
er.prototype.getClass = function() {
  return er;
};
var qt = function r() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var n = 0; n < 3; n++)
      t._depth[e][n] = r.NULL_VALUE;
}, Du = { NULL_VALUE: { configurable: !0 } };
qt.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
qt.prototype.setDepth = function(t, e, n) {
  this._depth[t][e] = n;
};
qt.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var n = 0; n < 3; n++)
        if (t._depth[e][n] !== qt.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var i = arguments[0];
    return this._depth[i][1] === qt.NULL_VALUE;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._depth[o][s] === qt.NULL_VALUE;
  }
};
qt.prototype.normalize = function() {
  for (var t = this, e = 0; e < 2; e++)
    if (!t.isNull(e)) {
      var n = t._depth[e][1];
      t._depth[e][2] < n && (n = t._depth[e][2]), n < 0 && (n = 0);
      for (var i = 1; i < 3; i++) {
        var o = 0;
        t._depth[e][i] > n && (o = 1), t._depth[e][i] = o;
      }
    }
};
qt.prototype.getDelta = function(t) {
  return this._depth[t][b.RIGHT] - this._depth[t][b.LEFT];
};
qt.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? m.EXTERIOR : m.INTERIOR;
};
qt.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
qt.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], n = 0; n < 2; n++)
      for (var i = 1; i < 3; i++) {
        var o = e.getLocation(n, i);
        (o === m.EXTERIOR || o === m.INTERIOR) && (t.isNull(n, i) ? t._depth[n][i] = qt.depthAtLocation(o) : t._depth[n][i] += qt.depthAtLocation(o));
      }
  else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    u === m.INTERIOR && this._depth[s][a]++;
  }
};
qt.prototype.interfaces_ = function() {
  return [];
};
qt.prototype.getClass = function() {
  return qt;
};
qt.depthAtLocation = function(t) {
  return t === m.EXTERIOR ? 0 : t === m.INTERIOR ? 1 : qt.NULL_VALUE;
};
Du.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(qt, Du);
var Yo = function(r) {
  function t() {
    if (r.call(this), this.pts = null, this._env = null, this.eiList = new Tn(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new qt(), this._depthDelta = 0, arguments.length === 1) {
      var e = arguments[0];
      t.call(this, e, null);
    } else if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      this.pts = n, this._label = i;
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getDepth = function() {
    return this._depth;
  }, t.prototype.getCollapsedEdge = function() {
    var n = new Array(2).fill(null);
    n[0] = this.pts[0], n[1] = this.pts[1];
    var i = new t(n, et.toLineLabel(this._label));
    return i;
  }, t.prototype.isIsolated = function() {
    return this._isIsolated;
  }, t.prototype.getCoordinates = function() {
    return this.pts;
  }, t.prototype.setIsolated = function(n) {
    this._isIsolated = n;
  }, t.prototype.setName = function(n) {
    this._name = n;
  }, t.prototype.equals = function(n) {
    var i = this;
    if (!(n instanceof t))
      return !1;
    var o = n;
    if (this.pts.length !== o.pts.length)
      return !1;
    for (var s = !0, a = !0, u = this.pts.length, l = 0; l < this.pts.length; l++)
      if (i.pts[l].equals2D(o.pts[l]) || (s = !1), i.pts[l].equals2D(o.pts[--u]) || (a = !1), !s && !a)
        return !1;
    return !0;
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 0)
      return this.pts.length > 0 ? this.pts[0] : null;
    if (arguments.length === 1) {
      var n = arguments[0];
      return this.pts[n];
    }
  }, t.prototype.print = function(n) {
    var i = this;
    n.print("edge " + this._name + ": "), n.print("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && n.print(","), n.print(i.pts[o].x + " " + i.pts[o].y);
    n.print(")  " + this._label + " " + this._depthDelta);
  }, t.prototype.computeIM = function(n) {
    t.updateIM(this._label, n);
  }, t.prototype.isCollapsed = function() {
    return !this._label.isArea() || this.pts.length !== 3 ? !1 : !!this.pts[0].equals(this.pts[2]);
  }, t.prototype.isClosed = function() {
    return this.pts[0].equals(this.pts[this.pts.length - 1]);
  }, t.prototype.getMaximumSegmentIndex = function() {
    return this.pts.length - 1;
  }, t.prototype.getDepthDelta = function() {
    return this._depthDelta;
  }, t.prototype.getNumPoints = function() {
    return this.pts.length;
  }, t.prototype.printReverse = function(n) {
    var i = this;
    n.print("edge " + this._name + ": ");
    for (var o = this.pts.length - 1; o >= 0; o--)
      n.print(i.pts[o] + " ");
    n.println("");
  }, t.prototype.getMonotoneChainEdge = function() {
    return this._mce === null && (this._mce = new er(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var n = this;
    if (this._env === null) {
      this._env = new B();
      for (var i = 0; i < this.pts.length; i++)
        n._env.expandToInclude(n.pts[i]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(n, i, o, s) {
    var a = new y(n.getIntersection(s)), u = i, l = n.getEdgeDistance(o, s), c = u + 1;
    if (c < this.pts.length) {
      var f = this.pts[c];
      a.equals2D(f) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var n = this, i = new En();
    i.append("edge " + this._name + ": "), i.append("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && i.append(","), i.append(n.pts[o].x + " " + n.pts[o].y);
    return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
  }, t.prototype.isPointwiseEqual = function(n) {
    var i = this;
    if (this.pts.length !== n.pts.length)
      return !1;
    for (var o = 0; o < this.pts.length; o++)
      if (!i.pts[o].equals2D(n.pts[o]))
        return !1;
    return !0;
  }, t.prototype.setDepthDelta = function(n) {
    this._depthDelta = n;
  }, t.prototype.getEdgeIntersectionList = function() {
    return this.eiList;
  }, t.prototype.addIntersections = function(n, i, o) {
    for (var s = this, a = 0; a < n.getIntersectionNum(); a++)
      s.addIntersection(n, i, o, a);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.updateIM = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      i.setAtLeastIfValid(n.getLocation(0, b.ON), n.getLocation(1, b.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, b.LEFT), n.getLocation(1, b.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, b.RIGHT), n.getLocation(1, b.RIGHT), 2));
    } else
      return r.prototype.updateIM.apply(this, arguments);
  }, t;
}(Le), ne = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new We(), this._bufParams = t || null;
};
ne.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
ne.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var n = e.getLabel(), i = t.getLabel();
    e.isPointwiseEqual(t) || (i = new et(t.getLabel()), i.flip()), n.merge(i);
    var o = ne.depthDelta(i), s = e.getDepthDelta(), a = s + o;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(ne.depthDelta(t.getLabel()));
};
ne.prototype.buildSubgraphs = function(t, e) {
  for (var n = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getRightmostCoordinate(), a = new $r(n), u = a.getDepth(s);
    o.computeDepth(u), o.findResultEdges(), n.add(o), e.add(o.getDirectedEdges(), o.getNodes());
  }
};
ne.prototype.createSubgraphs = function(t) {
  for (var e = new O(), n = t.getNodes().iterator(); n.hasNext(); ) {
    var i = n.next();
    if (!i.isVisited()) {
      var o = new ie();
      o.create(i), e.add(o);
    }
  }
  return He.sort(e, He.reverseOrder()), e;
};
ne.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
ne.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new Qs(), n = new Xr();
  return n.setPrecisionModel(t), e.setSegmentIntersector(new Pe(n)), e;
};
ne.prototype.buffer = function(t, e) {
  var n = this._workingPrecisionModel;
  n === null && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var i = new ce(n, this._bufParams), o = new Be(t, e, i), s = o.getCurves();
  if (s.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(s, n), this._graph = new pt(new Ou()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new ye(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
ne.prototype.computeNodedEdges = function(t, e) {
  var n = this, i = this.getNoder(e);
  i.computeNodes(t);
  for (var o = i.getNodedSubstrings(), s = o.iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new Yo(a.getCoordinates(), new et(l));
      n.insertUniqueEdge(c);
    }
  }
};
ne.prototype.setNoder = function(t) {
  this._workingNoder = t;
};
ne.prototype.interfaces_ = function() {
  return [];
};
ne.prototype.getClass = function() {
  return ne;
};
ne.depthDelta = function(t) {
  var e = t.getLocation(0, b.LEFT), n = t.getLocation(0, b.RIGHT);
  return e === m.INTERIOR && n === m.EXTERIOR ? 1 : e === m.EXTERIOR && n === m.INTERIOR ? -1 : 0;
};
ne.convertSegStrings = function(t) {
  for (var e = new W(), n = new O(); t.hasNext(); ) {
    var i = t.next(), o = e.createLineString(i.getCoordinates());
    n.add(o);
  }
  return e.buildGeometry(n);
};
var vr = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var n = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3];
    this._noder = n, this._scaleFactor = i, this._offsetX = o, this._offsetY = s, this._isScaled = !this.isIntegerPrecision();
  }
};
vr.prototype.rescale = function() {
  var t = this;
  if (V(arguments[0], Lt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var i = n.next();
      t.rescale(i.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], s = 0; s < o.length; s++)
      o[s].x = o[s].x / t._scaleFactor + t._offsetX, o[s].y = o[s].y / t._scaleFactor + t._offsetY;
    o.length === 2 && o[0].equals2D(o[1]) && Xt.out.println(o);
  }
};
vr.prototype.scale = function() {
  var t = this;
  if (V(arguments[0], Lt)) {
    for (var e = arguments[0], n = new O(), i = e.iterator(); i.hasNext(); ) {
      var o = i.next();
      n.add(new Ct(t.scale(o.getCoordinates()), o.getData()));
    }
    return n;
  } else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], a = new Array(s.length).fill(null), u = 0; u < s.length; u++)
      a[u] = new y(Math.round((s[u].x - t._offsetX) * t._scaleFactor), Math.round((s[u].y - t._offsetY) * t._scaleFactor), s[u].z);
    var l = j.removeRepeatedPoints(a);
    return l;
  }
};
vr.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
vr.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
vr.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
vr.prototype.interfaces_ = function() {
  return [Tr];
};
vr.prototype.getClass = function() {
  return vr;
};
var vn = function() {
  this._li = new Xr(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, Tu = { fact: { configurable: !0 } };
vn.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next(), i = n.getCoordinates();
      t.checkEndPtVertexIntersections(i[0], t._segStrings), t.checkEndPtVertexIntersections(i[i.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var o = arguments[0], s = arguments[1], a = s.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), c = 1; c < l.length - 1; c++)
        if (l[c].equals(o))
          throw new Zn("found endpt/interior pt intersection at index " + c + " :pt " + o);
  }
};
vn.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var n = e.next(), i = this._segStrings.iterator(); i.hasNext(); ) {
        var o = i.next();
        t.checkInteriorIntersections(n, o);
      }
  else if (arguments.length === 2)
    for (var s = arguments[0], a = arguments[1], u = s.getCoordinates(), l = a.getCoordinates(), c = 0; c < u.length - 1; c++)
      for (var f = 0; f < l.length - 1; f++)
        t.checkInteriorIntersections(s, c, a, f);
  else if (arguments.length === 4) {
    var h = arguments[0], g = arguments[1], p = arguments[2], d = arguments[3];
    if (h === p && g === d)
      return null;
    var v = h.getCoordinates()[g], _ = h.getCoordinates()[g + 1], C = p.getCoordinates()[d], E = p.getCoordinates()[d + 1];
    if (this._li.computeIntersection(v, _, C, E), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, v, _) || this.hasInteriorIntersection(this._li, C, E)))
      throw new Zn("found non-noded intersection at " + v + "-" + _ + " and " + C + "-" + E);
  }
};
vn.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
vn.prototype.checkCollapses = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next();
      t.checkCollapses(n);
    }
  else if (arguments.length === 1)
    for (var i = arguments[0], o = i.getCoordinates(), s = 0; s < o.length - 2; s++)
      t.checkCollapse(o[s], o[s + 1], o[s + 2]);
};
vn.prototype.hasInteriorIntersection = function(t, e, n) {
  for (var i = 0; i < t.getIntersectionNum(); i++) {
    var o = t.getIntersection(i);
    if (!(o.equals(e) || o.equals(n)))
      return !0;
  }
  return !1;
};
vn.prototype.checkCollapse = function(t, e, n) {
  if (t.equals(n))
    throw new Zn("found non-noded collapse at " + vn.fact.createLineString([t, e, n]));
};
vn.prototype.interfaces_ = function() {
  return [];
};
vn.prototype.getClass = function() {
  return vn;
};
Tu.fact.get = function() {
  return new W();
};
Object.defineProperties(vn, Tu);
var fe = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0)
    throw new ft("Scale factor must be non-zero");
  e !== 1 && (this._pt = new y(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new y(), this._p1Scaled = new y()), this.initCorners(this._pt);
}, Mu = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
fe.prototype.intersectsScaled = function(t, e) {
  var n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), o = Math.min(t.y, e.y), s = Math.max(t.y, e.y), a = this._maxx < n || this._minx > i || this._maxy < o || this._miny > s;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return q.isTrue(!(a && u), "Found bad envelope test"), u;
};
fe.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new y(this._maxx, this._maxy), this._corner[1] = new y(this._minx, this._maxy), this._corner[2] = new y(this._minx, this._miny), this._corner[3] = new y(this._maxx, this._miny);
};
fe.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
fe.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
fe.prototype.getCoordinate = function() {
  return this._originalPt;
};
fe.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
fe.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = fe.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new B(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
fe.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
fe.prototype.intersectsToleranceSquare = function(t, e) {
  var n = !1, i = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || n && i || t.equals(this._pt) || e.equals(this._pt));
};
fe.prototype.addSnappedNode = function(t, e) {
  var n = t.getCoordinate(e), i = t.getCoordinate(e + 1);
  return this.intersects(n, i) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
fe.prototype.interfaces_ = function() {
  return [];
};
fe.prototype.getClass = function() {
  return fe;
};
Mu.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(fe, Mu);
var ho = function() {
  this.tempEnv1 = new B(), this.selectedSegment = new k();
};
ho.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
ho.prototype.interfaces_ = function() {
  return [];
};
ho.prototype.getClass = function() {
  return ho;
};
var Di = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, Au = { HotPixelSnapAction: { configurable: !0 } };
Di.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2], o = e.getSafeEnvelope(), s = new Fu(e, n, i);
    return this._index.query(o, {
      interfaces_: function() {
        return [gr];
      },
      visitItem: function(a) {
        var u = a;
        u.select(o, s);
      }
    }), s.isNodeAdded();
  }
};
Di.prototype.interfaces_ = function() {
  return [];
};
Di.prototype.getClass = function() {
  return Di;
};
Au.HotPixelSnapAction.get = function() {
  return Fu;
};
Object.defineProperties(Di, Au);
var Fu = function(r) {
  function t() {
    r.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var e = arguments[0], n = arguments[1], i = arguments[2];
    this._hotPixel = e, this._parentEdge = n, this._hotPixelVertexIndex = i;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isNodeAdded = function() {
    return this._isNodeAdded;
  }, t.prototype.select = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1], o = n.getContext();
      if (this._parentEdge !== null && o === this._parentEdge && i === this._hotPixelVertexIndex)
        return null;
      this._isNodeAdded = this._hotPixel.addSnappedNode(o, i);
    } else
      return r.prototype.select.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ho), ti = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new O();
};
ti.prototype.processIntersections = function(t, e, n, i) {
  var o = this;
  if (t === n && e === i)
    return null;
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[i], l = n.getCoordinates()[i + 1];
  if (this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var c = 0; c < this._li.getIntersectionNum(); c++)
      o._interiorIntersections.add(o._li.getIntersection(c));
    t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1);
  }
};
ti.prototype.isDone = function() {
  return !1;
};
ti.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
ti.prototype.interfaces_ = function() {
  return [Ar];
};
ti.prototype.getClass = function() {
  return ti;
};
var Mn = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new Xr(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
Mn.prototype.checkCorrectness = function(t) {
  var e = Ct.getNodedSubstrings(t), n = new vn(e);
  try {
    n.checkValid();
  } catch (i) {
    if (i instanceof _u)
      i.printStackTrace();
    else
      throw i;
  } finally {
  }
};
Mn.prototype.getNodedSubstrings = function() {
  return Ct.getNodedSubstrings(this._nodedSegStrings);
};
Mn.prototype.snapRound = function(t, e) {
  var n = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
};
Mn.prototype.findInteriorIntersections = function(t, e) {
  var n = new ti(e);
  return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
};
Mn.prototype.computeVertexSnaps = function() {
  var t = this;
  if (V(arguments[0], Lt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var i = n.next();
      t.computeVertexSnaps(i);
    }
  else if (arguments[0] instanceof Ct)
    for (var o = arguments[0], s = o.getCoordinates(), a = 0; a < s.length; a++) {
      var u = new fe(s[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, o, a);
      l && o.addIntersection(s[a], a);
    }
};
Mn.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new Qs(), this._pointSnapper = new Di(this._noder.getIndex()), this.snapRound(t, this._li);
};
Mn.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next(), o = new fe(i, e._scaleFactor, e._li);
    e._pointSnapper.snap(o);
  }
};
Mn.prototype.interfaces_ = function() {
  return [Tr];
};
Mn.prototype.getClass = function() {
  return Mn;
};
var Ut = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new J(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._argGeom = e, this._bufParams = n;
  }
}, Xi = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
Ut.prototype.bufferFixedPrecision = function(t) {
  var e = new vr(new Mn(new $(1)), t.getScale()), n = new ne(this._bufParams);
  n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
};
Ut.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = Ut.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (s) {
        if (s instanceof $n)
          t._saveException = s;
        else
          throw s;
      } finally {
      }
      if (t._resultGeometry !== null)
        return null;
    }
    throw this._saveException;
  } else if (arguments.length === 1) {
    var n = arguments[0], i = Ut.precisionScaleFactor(this._argGeom, this._distance, n), o = new $(i);
    this.bufferFixedPrecision(o);
  }
};
Ut.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === $.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
Ut.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
Ut.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new ne(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof Zn)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
Ut.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
Ut.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
Ut.prototype.interfaces_ = function() {
  return [];
};
Ut.prototype.getClass = function() {
  return Ut;
};
Ut.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new Ut(t), i = n.getResultGeometry(e);
    return i;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof G && typeof arguments[1] == "number") {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Ut(o);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(s);
      return l;
    } else if (arguments[2] instanceof J && arguments[0] instanceof G && typeof arguments[1] == "number") {
      var c = arguments[0], f = arguments[1], h = arguments[2], g = new Ut(c, h), p = g.getResultGeometry(f);
      return p;
    }
  } else if (arguments.length === 4) {
    var d = arguments[0], v = arguments[1], _ = arguments[2], C = arguments[3], E = new Ut(d);
    E.setQuadrantSegments(_), E.setEndCapStyle(C);
    var S = E.getResultGeometry(v);
    return S;
  }
};
Ut.precisionScaleFactor = function(t, e, n) {
  var i = t.getEnvelopeInternal(), o = we.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())), s = e > 0 ? e : 0, a = o + 2 * s, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = n - u, c = Math.pow(10, l);
  return c;
};
Xi.CAP_ROUND.get = function() {
  return J.CAP_ROUND;
};
Xi.CAP_BUTT.get = function() {
  return J.CAP_FLAT;
};
Xi.CAP_FLAT.get = function() {
  return J.CAP_FLAT;
};
Xi.CAP_SQUARE.get = function() {
  return J.CAP_SQUARE;
};
Xi.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(Ut, Xi);
var $t = function() {
  this._pt = [new y(), new y()], this._distance = z.NaN, this._isNull = !0;
};
$t.prototype.getCoordinates = function() {
  return this._pt;
};
$t.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
$t.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i < this._distance && this.initialize(e, n, i);
  }
};
$t.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
$t.prototype.getDistance = function() {
  return this._distance;
};
$t.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i > this._distance && this.initialize(e, n, i);
  }
};
$t.prototype.interfaces_ = function() {
  return [];
};
$t.prototype.getClass = function() {
  return $t;
};
var Sn = function() {
};
Sn.prototype.interfaces_ = function() {
  return [];
};
Sn.prototype.getClass = function() {
  return Sn;
};
Sn.computeDistance = function() {
  if (arguments[2] instanceof $t && arguments[0] instanceof vt && arguments[1] instanceof y)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], i = t.getCoordinates(), o = new k(), s = 0; s < i.length - 1; s++) {
      o.setCoordinates(i[s], i[s + 1]);
      var a = o.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof $t && arguments[0] instanceof Ot && arguments[1] instanceof y) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Sn.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      Sn.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof $t && arguments[0] instanceof G && arguments[1] instanceof y) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof vt)
      Sn.computeDistance(h, g, p);
    else if (h instanceof Ot)
      Sn.computeDistance(h, g, p);
    else if (h instanceof re)
      for (var d = h, v = 0; v < d.getNumGeometries(); v++) {
        var _ = d.getGeometryN(v);
        Sn.computeDistance(_, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof $t && arguments[0] instanceof k && arguments[1] instanceof y) {
    var C = arguments[0], E = arguments[1], S = arguments[2], N = C.closestPoint(E);
    S.setMinimum(N, E);
  }
};
var Br = function(t) {
  this._maxPtDist = new $t(), this._inputGeom = t || null;
}, Zs = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
Br.prototype.computeMaxMidpointDistance = function(t) {
  var e = new yr(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Br.prototype.computeMaxVertexDistance = function(t) {
  var e = new ei(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Br.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
Br.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
Br.prototype.interfaces_ = function() {
  return [];
};
Br.prototype.getClass = function() {
  return Br;
};
Zs.MaxPointDistanceFilter.get = function() {
  return ei;
};
Zs.MaxMidpointDistanceFilter.get = function() {
  return yr;
};
Object.defineProperties(Br, Zs);
var ei = function(t) {
  this._maxPtDist = new $t(), this._minPtDist = new $t(), this._geom = t || null;
};
ei.prototype.filter = function(t) {
  this._minPtDist.initialize(), Sn.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ei.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ei.prototype.interfaces_ = function() {
  return [Pn];
};
ei.prototype.getClass = function() {
  return ei;
};
var yr = function(t) {
  this._maxPtDist = new $t(), this._minPtDist = new $t(), this._geom = t || null;
};
yr.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var n = t.getCoordinate(e - 1), i = t.getCoordinate(e), o = new y((n.x + i.x) / 2, (n.y + i.y) / 2);
  this._minPtDist.initialize(), Sn.computeDistance(this._geom, o, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
yr.prototype.isDone = function() {
  return !1;
};
yr.prototype.isGeometryChanged = function() {
  return !1;
};
yr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
yr.prototype.interfaces_ = function() {
  return [Xe];
};
yr.prototype.getClass = function() {
  return yr;
};
var Kn = function(t) {
  this._comps = t || null;
};
Kn.prototype.filter = function(t) {
  t instanceof Ot && this._comps.add(t);
};
Kn.prototype.interfaces_ = function() {
  return [fn];
};
Kn.prototype.getClass = function() {
  return Kn;
};
Kn.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Kn.getPolygons(t, new O());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof Ot ? n.add(e) : e instanceof re && e.apply(new Kn(n)), n;
  }
};
var zt = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._lines = e, this._isForcedToLineString = n;
  }
};
zt.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof Rn) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof vt && this._lines.add(t);
};
zt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
zt.prototype.interfaces_ = function() {
  return [Jn];
};
zt.prototype.getClass = function() {
  return zt;
};
zt.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry(zt.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e.getFactory().buildGeometry(zt.getLines(e, n));
  }
};
zt.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return zt.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (V(arguments[0], Lt) && V(arguments[1], Lt)) {
      for (var e = arguments[0], n = arguments[1], i = e.iterator(); i.hasNext(); ) {
        var o = i.next();
        zt.getLines(o, n);
      }
      return n;
    } else if (arguments[0] instanceof G && typeof arguments[1] == "boolean") {
      var s = arguments[0], a = arguments[1], u = new O();
      return s.apply(new zt(u, a)), u;
    } else if (arguments[0] instanceof G && V(arguments[1], Lt)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof vt ? c.add(l) : l.apply(new zt(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && V(arguments[0], Lt) && V(arguments[1], Lt)) {
      for (var f = arguments[0], h = arguments[1], g = arguments[2], p = f.iterator(); p.hasNext(); ) {
        var d = p.next();
        zt.getLines(d, h, g);
      }
      return h;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof G && V(arguments[1], Lt)) {
      var v = arguments[0], _ = arguments[1], C = arguments[2];
      return v.apply(new zt(_, C)), _;
    }
  }
};
var je = function() {
  if (this._boundaryRule = Ae.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new ft("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
je.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof y && arguments[1] instanceof Ot) {
    var e = arguments[0], n = arguments[1];
    if (n.isEmpty())
      return m.EXTERIOR;
    var i = n.getExteriorRing(), o = this.locateInPolygonRing(e, i);
    if (o === m.EXTERIOR)
      return m.EXTERIOR;
    if (o === m.BOUNDARY)
      return m.BOUNDARY;
    for (var s = 0; s < n.getNumInteriorRing(); s++) {
      var a = n.getInteriorRingN(s), u = t.locateInPolygonRing(e, a);
      if (u === m.INTERIOR)
        return m.EXTERIOR;
      if (u === m.BOUNDARY)
        return m.BOUNDARY;
    }
    return m.INTERIOR;
  } else if (arguments[0] instanceof y && arguments[1] instanceof vt) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return m.EXTERIOR;
    var f = c.getCoordinates();
    return !c.isClosed() && (l.equals(f[0]) || l.equals(f[f.length - 1])) ? m.BOUNDARY : T.isOnLine(l, f) ? m.INTERIOR : m.EXTERIOR;
  } else if (arguments[0] instanceof y && arguments[1] instanceof ve) {
    var h = arguments[0], g = arguments[1], p = g.getCoordinate();
    return p.equals2D(h) ? m.INTERIOR : m.EXTERIOR;
  }
};
je.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? T.locatePointInRing(t, e.getCoordinates()) : m.EXTERIOR;
};
je.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== m.EXTERIOR;
};
je.prototype.updateLocationInfo = function(t) {
  t === m.INTERIOR && (this._isIn = !0), t === m.BOUNDARY && this._numBoundaries++;
};
je.prototype.computeLocation = function(t, e) {
  var n = this;
  if (e instanceof ve && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof vt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Ot)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Dr)
    for (var i = e, o = 0; o < i.getNumGeometries(); o++) {
      var s = i.getGeometryN(o);
      n.updateLocationInfo(n.locateInternal(t, s));
    }
  else if (e instanceof Ln)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      n.updateLocationInfo(n.locateInternal(t, l));
    }
  else if (e instanceof re)
    for (var c = new bn(e); c.hasNext(); ) {
      var f = c.next();
      f !== e && n.computeLocation(t, f);
    }
};
je.prototype.locate = function(t, e) {
  return e.isEmpty() ? m.EXTERIOR : e instanceof vt ? this.locateInternal(t, e) : e instanceof Ot ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? m.BOUNDARY : this._numBoundaries > 0 || this._isIn ? m.INTERIOR : m.EXTERIOR);
};
je.prototype.interfaces_ = function() {
  return [];
};
je.prototype.getClass = function() {
  return je;
};
var te = function r() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    r.call(this, t, r.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._component = n, this._segIndex = i, this._pt = o;
  }
}, Bu = { INSIDE_AREA: { configurable: !0 } };
te.prototype.isInsideArea = function() {
  return this._segIndex === te.INSIDE_AREA;
};
te.prototype.getCoordinate = function() {
  return this._pt;
};
te.prototype.getGeometryComponent = function() {
  return this._component;
};
te.prototype.getSegmentIndex = function() {
  return this._segIndex;
};
te.prototype.interfaces_ = function() {
  return [];
};
te.prototype.getClass = function() {
  return te;
};
Bu.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties(te, Bu);
var ur = function(t) {
  this._pts = t || null;
};
ur.prototype.filter = function(t) {
  t instanceof ve && this._pts.add(t);
};
ur.prototype.interfaces_ = function() {
  return [fn];
};
ur.prototype.getClass = function() {
  return ur;
};
ur.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof ve ? He.singletonList(t) : ur.getPoints(t, new O());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof ve ? n.add(e) : e instanceof re && e.apply(new ur(n)), n;
  }
};
var ni = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
ni.prototype.filter = function(t) {
  (t instanceof ve || t instanceof vt || t instanceof Ot) && this._locations.add(new te(t, 0, t.getCoordinate()));
};
ni.prototype.interfaces_ = function() {
  return [fn];
};
ni.prototype.getClass = function() {
  return ni;
};
ni.getLocations = function(t) {
  var e = new O();
  return t.apply(new ni(e)), e;
};
var Yt = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new je(), this._minDistanceLocation = null, this._minDistance = z.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = n, this._geom[1] = i, this._terminateDistance = o;
  }
};
Yt.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = 1 - n, s = Kn.getPolygons(this._geom[n]);
    if (s.size() > 0) {
      var a = ni.getLocations(this._geom[o]);
      if (this.computeContainmentDistance(a, s, i), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[o] = i[0], this._minDistanceLocation[n] = i[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && V(arguments[0], Ue) && V(arguments[1], Ue)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], f = 0; f < u.size(); f++)
        for (var h = u.get(f), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(h, l.get(g), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof te && arguments[1] instanceof Ot) {
      var p = arguments[0], d = arguments[1], v = arguments[2], _ = p.getCoordinate();
      if (m.EXTERIOR !== this._ptLocator.locate(_, d))
        return this._minDistance = 0, v[0] = p, v[1] = new te(d, _), null;
    }
  }
};
Yt.prototype.computeMinDistanceLinesPoints = function(t, e, n) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, n), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Yt.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = zt.getLines(this._geom[0]), n = zt.getLines(this._geom[1]), i = ur.getPoints(this._geom[0]), o = ur.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, o, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, i, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(i, o, t), this.updateMinDistance(t, !1);
};
Yt.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
Yt.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
Yt.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
Yt.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof vt && arguments[1] instanceof ve) {
      var e = arguments[0], n = arguments[1], i = arguments[2];
      if (e.getEnvelopeInternal().distance(n.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var o = e.getCoordinates(), s = n.getCoordinate(), a = 0; a < o.length - 1; a++) {
        var u = T.distancePointLine(s, o[a], o[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new k(o[a], o[a + 1]), c = l.closestPoint(s);
          i[0] = new te(e, a, c), i[1] = new te(n, 0, s);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof vt && arguments[1] instanceof vt) {
      var f = arguments[0], h = arguments[1], g = arguments[2];
      if (f.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var p = f.getCoordinates(), d = h.getCoordinates(), v = 0; v < p.length - 1; v++)
        for (var _ = 0; _ < d.length - 1; _++) {
          var C = T.distanceLineLine(p[v], p[v + 1], d[_], d[_ + 1]);
          if (C < t._minDistance) {
            t._minDistance = C;
            var E = new k(p[v], p[v + 1]), S = new k(d[_], d[_ + 1]), N = E.closestPoints(S);
            g[0] = new te(f, v, N[0]), g[1] = new te(h, _, N[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
Yt.prototype.computeMinDistancePoints = function(t, e, n) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = s.getCoordinate().distance(u.getCoordinate());
      if (l < i._minDistance && (i._minDistance = l, n[0] = new te(s, 0, s.getCoordinate()), n[1] = new te(u, 0, u.getCoordinate())), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Yt.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new ft("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
Yt.prototype.computeMinDistanceLines = function(t, e, n) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, n), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Yt.prototype.interfaces_ = function() {
  return [];
};
Yt.prototype.getClass = function() {
  return Yt;
};
Yt.distance = function(t, e) {
  var n = new Yt(t, e);
  return n.distance();
};
Yt.isWithinDistance = function(t, e, n) {
  var i = new Yt(t, e, n);
  return i.distance() <= n;
};
Yt.nearestPoints = function(t, e) {
  var n = new Yt(t, e);
  return n.nearestPoints();
};
var jt = function() {
  this._pt = [new y(), new y()], this._distance = z.NaN, this._isNull = !0;
};
jt.prototype.getCoordinates = function() {
  return this._pt;
};
jt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
jt.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i < this._distance && this.initialize(e, n, i);
  }
};
jt.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
jt.prototype.toString = function() {
  return qe.toLineString(this._pt[0], this._pt[1]);
};
jt.prototype.getDistance = function() {
  return this._distance;
};
jt.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i > this._distance && this.initialize(e, n, i);
  }
};
jt.prototype.interfaces_ = function() {
  return [];
};
jt.prototype.getClass = function() {
  return jt;
};
var on = function() {
};
on.prototype.interfaces_ = function() {
  return [];
};
on.prototype.getClass = function() {
  return on;
};
on.computeDistance = function() {
  if (arguments[2] instanceof jt && arguments[0] instanceof vt && arguments[1] instanceof y)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], i = new k(), o = t.getCoordinates(), s = 0; s < o.length - 1; s++) {
      i.setCoordinates(o[s], o[s + 1]);
      var a = i.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof jt && arguments[0] instanceof Ot && arguments[1] instanceof y) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    on.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      on.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof jt && arguments[0] instanceof G && arguments[1] instanceof y) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof vt)
      on.computeDistance(h, g, p);
    else if (h instanceof Ot)
      on.computeDistance(h, g, p);
    else if (h instanceof re)
      for (var d = h, v = 0; v < d.getNumGeometries(); v++) {
        var _ = d.getGeometryN(v);
        on.computeDistance(_, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof jt && arguments[0] instanceof k && arguments[1] instanceof y) {
    var C = arguments[0], E = arguments[1], S = arguments[2], N = C.closestPoint(E);
    S.setMinimum(N, E);
  }
};
var Te = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new jt(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, Js = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
Te.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
Te.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new ft("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
Te.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
Te.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
Te.prototype.computeOrientedDistance = function(t, e, n) {
  var i = new ri(e);
  if (t.apply(i), n.setMaximum(i.getMaxPointDistance()), this._densifyFrac > 0) {
    var o = new mr(e, this._densifyFrac);
    t.apply(o), n.setMaximum(o.getMaxPointDistance());
  }
};
Te.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
Te.prototype.interfaces_ = function() {
  return [];
};
Te.prototype.getClass = function() {
  return Te;
};
Te.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new Te(t, e);
    return n.distance();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new Te(i, o);
    return a.setDensifyFraction(s), a.distance();
  }
};
Js.MaxPointDistanceFilter.get = function() {
  return ri;
};
Js.MaxDensifiedByFractionDistanceFilter.get = function() {
  return mr;
};
Object.defineProperties(Te, Js);
var ri = function() {
  this._maxPtDist = new jt(), this._minPtDist = new jt(), this._euclideanDist = new on(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
ri.prototype.filter = function(t) {
  this._minPtDist.initialize(), on.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ri.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ri.prototype.interfaces_ = function() {
  return [Pn];
};
ri.prototype.getClass = function() {
  return ri;
};
var mr = function() {
  this._maxPtDist = new jt(), this._minPtDist = new jt(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
mr.prototype.filter = function(t, e) {
  var n = this;
  if (e === 0)
    return null;
  for (var i = t.getCoordinate(e - 1), o = t.getCoordinate(e), s = (o.x - i.x) / this._numSubSegs, a = (o.y - i.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = i.x + u * s, c = i.y + u * a, f = new y(l, c);
    n._minPtDist.initialize(), on.computeDistance(n._geom, f, n._minPtDist), n._maxPtDist.setMaximum(n._minPtDist);
  }
};
mr.prototype.isDone = function() {
  return !1;
};
mr.prototype.isGeometryChanged = function() {
  return !1;
};
mr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
mr.prototype.interfaces_ = function() {
  return [Xe];
};
mr.prototype.getClass = function() {
  return mr;
};
var de = function(t, e, n) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null;
}, $s = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
de.prototype.checkMaximumDistance = function(t, e, n) {
  var i = new Te(e, t);
  if (i.setDensifyFraction(0.25), this._maxDistanceFound = i.orientedDistance(), this._maxDistanceFound > n) {
    this._isValid = !1;
    var o = i.getCoordinates();
    this._errorLocation = o[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + qe.toLineString(o[0], o[1]) + ")";
  }
};
de.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = de.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), de.VERBOSE && Xt.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
de.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof Ot || this._input instanceof Ln || this._input instanceof re))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
de.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
de.prototype.checkMinimumDistance = function(t, e, n) {
  var i = new Yt(t, e, n);
  if (this._minDistanceFound = i.distance(), this._minDistanceFound < n) {
    this._isValid = !1;
    var o = i.nearestPoints();
    this._errorLocation = i.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + qe.toLineString(o[0], o[1]) + " )";
  }
};
de.prototype.checkPositiveValid = function() {
  var t = this._result.getBoundary();
  if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(this._input, t, this._maxValidDistance);
};
de.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
de.prototype.getPolygonLines = function(t) {
  for (var e = new O(), n = new zt(e), i = Kn.getPolygons(t), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    s.apply(n);
  }
  return t.getFactory().buildGeometry(e);
};
de.prototype.getErrorMessage = function() {
  return this._errMsg;
};
de.prototype.interfaces_ = function() {
  return [];
};
de.prototype.getClass = function() {
  return de;
};
$s.VERBOSE.get = function() {
  return !1;
};
$s.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(de, $s);
var Ht = function(t, e, n) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null;
}, ta = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
Ht.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
Ht.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * Ht.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new B(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var n = new B(this._result.getEnvelopeInternal());
  n.expandBy(t), n.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(n)), this.report("Envelope");
};
Ht.prototype.checkDistance = function() {
  var t = new de(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
Ht.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
Ht.prototype.checkPolygonal = function() {
  this._result instanceof Ot || this._result instanceof Ln || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
};
Ht.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
Ht.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
Ht.prototype.checkExpectedEmpty = function() {
  if (this._input.getDimension() >= 2 || this._distance > 0)
    return null;
  this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), this.report("ExpectedEmpty");
};
Ht.prototype.report = function(t) {
  if (!Ht.VERBOSE)
    return null;
  Xt.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
};
Ht.prototype.getErrorMessage = function() {
  return this._errorMsg;
};
Ht.prototype.interfaces_ = function() {
  return [];
};
Ht.prototype.getClass = function() {
  return Ht;
};
Ht.isValidMsg = function(t, e, n) {
  var i = new Ht(t, e, n);
  return i.isValid() ? null : i.getErrorMessage();
};
Ht.isValid = function(t, e, n) {
  var i = new Ht(t, e, n);
  return !!i.isValid();
};
ta.VERBOSE.get = function() {
  return !1;
};
ta.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Ht, ta);
var yn = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
yn.prototype.getCoordinates = function() {
  return this._pts;
};
yn.prototype.size = function() {
  return this._pts.length;
};
yn.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
yn.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
yn.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : Jr.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
yn.prototype.setData = function(t) {
  this._data = t;
};
yn.prototype.getData = function() {
  return this._data;
};
yn.prototype.toString = function() {
  return qe.toLineString(new mt(this._pts));
};
yn.prototype.interfaces_ = function() {
  return [Dn];
};
yn.prototype.getClass = function() {
  return yn;
};
var Ft = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new O(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
Ft.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
Ft.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
Ft.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
Ft.prototype.count = function() {
  return this._intersectionCount;
};
Ft.prototype.getIntersections = function() {
  return this._intersections;
};
Ft.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Ft.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
Ft.prototype.processIntersections = function(t, e, n, i) {
  if (!this._findAllIntersections && this.hasIntersection() || t === n && e === i)
    return null;
  if (this._isCheckEndSegmentsOnly) {
    var o = this.isEndSegment(t, e) || this.isEndSegment(n, i);
    if (!o)
      return null;
  }
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[i], l = n.getCoordinates()[i + 1];
  this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = s, this._intSegments[1] = a, this._intSegments[2] = u, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
};
Ft.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
Ft.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
Ft.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
Ft.prototype.interfaces_ = function() {
  return [Ar];
};
Ft.prototype.getClass = function() {
  return Ft;
};
Ft.createAllIntersectionsFinder = function(t) {
  var e = new Ft(t);
  return e.setFindAllIntersections(!0), e;
};
Ft.createAnyIntersectionFinder = function(t) {
  return new Ft(t);
};
Ft.createIntersectionCounter = function(t) {
  var e = new Ft(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var Ke = function() {
  this._li = new Xr(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
Ke.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
Ke.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
Ke.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
Ke.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Ke.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new Ft(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new Qs();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
Ke.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new $n(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
Ke.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + qe.toLineString(t[0], t[1]) + " and " + qe.toLineString(t[2], t[3]);
};
Ke.prototype.interfaces_ = function() {
  return [];
};
Ke.prototype.getClass = function() {
  return Ke;
};
Ke.computeIntersections = function(t) {
  var e = new Ke(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var kr = function r() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new Ke(r.toSegmentStrings(t));
};
kr.prototype.checkValid = function() {
  this._nv.checkValid();
};
kr.prototype.interfaces_ = function() {
  return [];
};
kr.prototype.getClass = function() {
  return kr;
};
kr.toSegmentStrings = function(t) {
  for (var e = new O(), n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e.add(new yn(i.getCoordinates(), i));
  }
  return e;
};
kr.checkValid = function(t) {
  var e = new kr(t);
  e.checkValid();
};
var ii = function(t) {
  this._mapOp = t;
};
ii.prototype.map = function(t) {
  for (var e = this, n = new O(), i = 0; i < t.getNumGeometries(); i++) {
    var o = e._mapOp.map(t.getGeometryN(i));
    o.isEmpty() || n.add(o);
  }
  return t.getFactory().createGeometryCollection(W.toGeometryArray(n));
};
ii.prototype.interfaces_ = function() {
  return [];
};
ii.prototype.getClass = function() {
  return ii;
};
ii.map = function(t, e) {
  var n = new ii(e);
  return n.map(t);
};
var mn = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new O(), this._resultLineList = new O();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = n;
};
mn.prototype.collectLines = function(t) {
  for (var e = this, n = this._op.getGraph().getEdgeEnds().iterator(); n.hasNext(); ) {
    var i = n.next();
    e.collectLineEdge(i, t, e._lineEdgesList), e.collectBoundaryTouchEdge(i, t, e._lineEdgesList);
  }
};
mn.prototype.labelIsolatedLine = function(t, e) {
  var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, n);
};
mn.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
mn.prototype.collectLineEdge = function(t, e, n) {
  var i = t.getLabel(), o = t.getEdge();
  t.isLineEdge() && !t.isVisited() && U.isResultOfOp(i, e) && !o.isCovered() && (n.add(o), t.setVisitedEdge(!0));
};
mn.prototype.findCoveredLineEdges = function() {
  for (var t = this, e = this._op.getGraph().getNodes().iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().findCoveredLineEdges();
  }
  for (var i = this._op.getGraph().getEdgeEnds().iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getEdge();
    if (o.isLineEdge() && !s.isCoveredSet()) {
      var a = t._op.isCoveredByA(o.getCoordinate());
      s.setCovered(a);
    }
  }
};
mn.prototype.labelIsolatedLines = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next(), o = i.getLabel();
    i.isIsolated() && (o.isNull(0) ? e.labelIsolatedLine(i, 0) : e.labelIsolatedLine(i, 1));
  }
};
mn.prototype.buildLines = function(t) {
  for (var e = this, n = this._lineEdgesList.iterator(); n.hasNext(); ) {
    var i = n.next(), o = e._geometryFactory.createLineString(i.getCoordinates());
    e._resultLineList.add(o), i.setInResult(!0);
  }
};
mn.prototype.collectBoundaryTouchEdge = function(t, e, n) {
  var i = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  q.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), U.isResultOfOp(i, e) && e === U.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0));
};
mn.prototype.interfaces_ = function() {
  return [];
};
mn.prototype.getClass = function() {
  return mn;
};
var oi = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new O();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
oi.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var n = this._geometryFactory.createPoint(e);
    this._resultPointList.add(n);
  }
};
oi.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, n = this._op.getGraph().getNodes().iterator(); n.hasNext(); ) {
    var i = n.next();
    if (!i.isInResult() && !i.isIncidentEdgeInResult() && (i.getEdges().getDegree() === 0 || t === U.INTERSECTION)) {
      var o = i.getLabel();
      U.isResultOfOp(o, t) && e.filterCoveredNodeToPoint(i);
    }
  }
};
oi.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
oi.prototype.interfaces_ = function() {
  return [];
};
oi.prototype.getClass = function() {
  return oi;
};
var he = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
he.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
he.prototype.transformPolygon = function(t, e) {
  var n = this, i = !0, o = this.transformLinearRing(t.getExteriorRing(), t);
  (o === null || !(o instanceof Rn) || o.isEmpty()) && (i = !1);
  for (var s = new O(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = n.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof Rn || (i = !1), s.add(u));
  }
  if (i)
    return this._factory.createPolygon(o, s.toArray([]));
  var l = new O();
  return o !== null && l.add(o), l.addAll(s), this._factory.buildGeometry(l);
};
he.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
he.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
he.prototype.transformMultiLineString = function(t, e) {
  for (var n = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transformLineString(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
he.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
he.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
he.prototype.transformMultiPoint = function(t, e) {
  for (var n = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transformPoint(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
he.prototype.transformMultiPolygon = function(t, e) {
  for (var n = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transformPolygon(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
he.prototype.copy = function(t) {
  return t.copy();
};
he.prototype.transformGeometryCollection = function(t, e) {
  for (var n = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transform(t.getGeometryN(o));
    s !== null && (n._pruneEmptyGeometry && s.isEmpty() || i.add(s));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(W.toGeometryArray(i)) : this._factory.buildGeometry(i);
};
he.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof ve)
    return this.transformPoint(t, null);
  if (t instanceof Li)
    return this.transformMultiPoint(t, null);
  if (t instanceof Rn)
    return this.transformLinearRing(t, null);
  if (t instanceof vt)
    return this.transformLineString(t, null);
  if (t instanceof Dr)
    return this.transformMultiLineString(t, null);
  if (t instanceof Ot)
    return this.transformPolygon(t, null);
  if (t instanceof Ln)
    return this.transformMultiPolygon(t, null);
  if (t instanceof re)
    return this.transformGeometryCollection(t, null);
  throw new ft("Unknown Geometry subtype: " + t.getClass().getName());
};
he.prototype.transformLinearRing = function(t, e) {
  var n = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (n === null)
    return this._factory.createLinearRing(null);
  var i = n.size();
  return i > 0 && i < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n);
};
he.prototype.interfaces_ = function() {
  return [];
};
he.prototype.getClass = function() {
  return he;
};
var An = function r() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new k(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof vt && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    r.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var n = arguments[0], i = arguments[1];
    this._srcPts = n, this._isClosed = r.isClosed(n), this._snapTolerance = i;
  }
};
An.prototype.snapVertices = function(t, e) {
  for (var n = this, i = this._isClosed ? t.size() - 1 : t.size(), o = 0; o < i; o++) {
    var s = t.get(o), a = n.findSnapForVertex(s, e);
    a !== null && (t.set(o, new y(a)), o === 0 && n._isClosed && t.set(t.size() - 1, new y(a)));
  }
};
An.prototype.findSnapForVertex = function(t, e) {
  for (var n = this, i = 0; i < e.length; i++) {
    if (t.equals2D(e[i]))
      return null;
    if (t.distance(e[i]) < n._snapTolerance)
      return e[i];
  }
  return null;
};
An.prototype.snapTo = function(t) {
  var e = new _o(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var n = e.toCoordinateArray();
  return n;
};
An.prototype.snapSegments = function(t, e) {
  var n = this;
  if (e.length === 0)
    return null;
  var i = e.length;
  e[0].equals2D(e[e.length - 1]) && (i = e.length - 1);
  for (var o = 0; o < i; o++) {
    var s = e[o], a = n.findSegmentIndexToSnap(s, t);
    a >= 0 && t.add(a + 1, new y(s), !1);
  }
};
An.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var n = this, i = z.MAX_VALUE, o = -1, s = 0; s < e.size() - 1; s++) {
    if (n._seg.p0 = e.get(s), n._seg.p1 = e.get(s + 1), n._seg.p0.equals2D(t) || n._seg.p1.equals2D(t)) {
      if (n._allowSnappingToSourceVertices)
        continue;
      return -1;
    }
    var a = n._seg.distance(t);
    a < n._snapTolerance && a < i && (i = a, o = s);
  }
  return o;
};
An.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
An.prototype.interfaces_ = function() {
  return [];
};
An.prototype.getClass = function() {
  return An;
};
An.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var _t = function(t) {
  this._srcGeom = t || null;
}, ku = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
_t.prototype.snapTo = function(t, e) {
  var n = this.extractTargetCoordinates(t), i = new Gu(e, n);
  return i.transform(this._srcGeom);
};
_t.prototype.snapToSelf = function(t, e) {
  var n = this.extractTargetCoordinates(this._srcGeom), i = new Gu(t, n, !0), o = i.transform(this._srcGeom), s = o;
  return e && V(s, hr) && (s = o.buffer(0)), s;
};
_t.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), n = e / 10;
  return n;
};
_t.prototype.extractTargetCoordinates = function(t) {
  for (var e = new cn(), n = t.getCoordinates(), i = 0; i < n.length; i++)
    e.add(n[i]);
  return e.toArray(new Array(0).fill(null));
};
_t.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = z.MAX_VALUE, n = 0; n < t.length - 1; n++) {
    var i = t[n].distance(t[n + 1]);
    i < e && (e = i);
  }
  return e;
};
_t.prototype.interfaces_ = function() {
  return [];
};
_t.prototype.getClass = function() {
  return _t;
};
_t.snap = function(t, e, n) {
  var i = new Array(2).fill(null), o = new _t(t);
  i[0] = o.snapTo(e, n);
  var s = new _t(e);
  return i[1] = s.snapTo(i[0], n), i;
};
_t.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = _t.computeSizeBasedSnapTolerance(t), n = t.getPrecisionModel();
    if (n.getType() === $.FIXED) {
      var i = 1 / n.getScale() * 2 / 1.415;
      i > e && (e = i);
    }
    return e;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return Math.min(_t.computeOverlaySnapTolerance(o), _t.computeOverlaySnapTolerance(s));
  }
};
_t.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), n = Math.min(e.getHeight(), e.getWidth()), i = n * _t.SNAP_PRECISION_FACTOR;
  return i;
};
_t.snapToSelf = function(t, e, n) {
  var i = new _t(t);
  return i.snapToSelf(e, n);
};
ku.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(_t, ku);
var Gu = function(r) {
  function t(e, n, i) {
    r.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = i !== void 0 ? i : !1;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(n, i) {
    var o = new An(n, this._snapTolerance);
    return o.setAllowSnappingToSourceVertices(this._isSelfSnap), o.snapTo(i);
  }, t.prototype.transformCoordinates = function(n, i) {
    var o = n.toCoordinateArray(), s = this.snapLine(o, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(he), Jt = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
Jt.prototype.getCommon = function() {
  return z.longBitsToDouble(this._commonBits);
};
Jt.prototype.add = function(t) {
  var e = z.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = Jt.signExpBits(this._commonBits), this._isFirst = !1, null;
  var n = Jt.signExpBits(e);
  if (n !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = Jt.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = Jt.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
Jt.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = z.longBitsToDouble(t), n = z.toBinaryString(t), i = "0000000000000000000000000000000000000000000000000000000000000000" + n, o = i.substring(i.length - 64), s = o.substring(0, 1) + "  " + o.substring(1, 12) + "(exp) " + o.substring(12) + " [ " + e + " ]";
    return s;
  }
};
Jt.prototype.interfaces_ = function() {
  return [];
};
Jt.prototype.getClass = function() {
  return Jt;
};
Jt.getBit = function(t, e) {
  var n = 1 << e;
  return t & n ? 1 : 0;
};
Jt.signExpBits = function(t) {
  return t >> 52;
};
Jt.zeroLowerBits = function(t, e) {
  var n = (1 << e) - 1, i = ~n, o = t & i;
  return o;
};
Jt.numCommonMostSigMantissaBits = function(t, e) {
  for (var n = 0, i = 52; i >= 0; i--) {
    if (Jt.getBit(t, i) !== Jt.getBit(e, i))
      return n;
    n++;
  }
  return 52;
};
var _r = function() {
  this._commonCoord = null, this._ccFilter = new si();
}, ea = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
_r.prototype.addCommonBits = function(t) {
  var e = new Er(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
_r.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new y(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var n = new Er(e);
  return t.apply(n), t.geometryChanged(), t;
};
_r.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
_r.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
_r.prototype.interfaces_ = function() {
  return [];
};
_r.prototype.getClass = function() {
  return _r;
};
ea.CommonCoordinateFilter.get = function() {
  return si;
};
ea.Translater.get = function() {
  return Er;
};
Object.defineProperties(_r, ea);
var si = function() {
  this._commonBitsX = new Jt(), this._commonBitsY = new Jt();
};
si.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
si.prototype.getCommonCoordinate = function() {
  return new y(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
si.prototype.interfaces_ = function() {
  return [Pn];
};
si.prototype.getClass = function() {
  return si;
};
var Er = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
Er.prototype.filter = function(t, e) {
  var n = t.getOrdinate(e, 0) + this.trans.x, i = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, i);
};
Er.prototype.isDone = function() {
  return !1;
};
Er.prototype.isGeometryChanged = function() {
  return !0;
};
Er.prototype.interfaces_ = function() {
  return [Xe];
};
Er.prototype.getClass = function() {
  return Er;
};
var Bt = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
Bt.prototype.selfSnap = function(t) {
  var e = new _t(t), n = e.snapTo(t, this._snapTolerance);
  return n;
};
Bt.prototype.removeCommonBits = function(t) {
  this._cbr = new _r(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
Bt.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
Bt.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), n = U.overlayOp(e[0], e[1], t);
  return this.prepareResult(n);
};
Bt.prototype.checkValid = function(t) {
  t.isValid() || Xt.out.println("Snapped geometry is invalid");
};
Bt.prototype.computeSnapTolerance = function() {
  this._snapTolerance = _t.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
Bt.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), n = _t.snap(e[0], e[1], this._snapTolerance);
  return n;
};
Bt.prototype.interfaces_ = function() {
  return [];
};
Bt.prototype.getClass = function() {
  return Bt;
};
Bt.overlayOp = function(t, e, n) {
  var i = new Bt(t, e);
  return i.getResultGeometry(n);
};
Bt.union = function(t, e) {
  return Bt.overlayOp(t, e, U.UNION);
};
Bt.intersection = function(t, e) {
  return Bt.overlayOp(t, e, U.INTERSECTION);
};
Bt.symDifference = function(t, e) {
  return Bt.overlayOp(t, e, U.SYMDIFFERENCE);
};
Bt.difference = function(t, e) {
  return Bt.overlayOp(t, e, U.DIFFERENCE);
};
var se = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
se.prototype.getResultGeometry = function(t) {
  var e = null, n = !1, i = null;
  try {
    e = U.overlayOp(this._geom[0], this._geom[1], t);
    var o = !0;
    o && (n = !0);
  } catch (s) {
    if (s instanceof Zn)
      i = s;
    else
      throw s;
  } finally {
  }
  if (!n)
    try {
      e = Bt.overlayOp(this._geom[0], this._geom[1], t);
    } catch (s) {
      throw s instanceof Zn ? i : s;
    } finally {
    }
  return e;
};
se.prototype.interfaces_ = function() {
  return [];
};
se.prototype.getClass = function() {
  return se;
};
se.overlayOp = function(t, e, n) {
  var i = new se(t, e);
  return i.getResultGeometry(n);
};
se.union = function(t, e) {
  return se.overlayOp(t, e, U.UNION);
};
se.intersection = function(t, e) {
  return se.overlayOp(t, e, U.INTERSECTION);
};
se.symDifference = function(t, e) {
  return se.overlayOp(t, e, U.SYMDIFFERENCE);
};
se.difference = function(t, e) {
  return se.overlayOp(t, e, U.DIFFERENCE);
};
var go = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
go.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
go.prototype.interfaces_ = function() {
  return [];
};
go.prototype.getClass = function() {
  return go;
};
var _e = function r() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = r.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._eventType = r.INSERT, this._label = n, this._xValue = i, this._obj = o;
  }
}, na = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
_e.prototype.isDelete = function() {
  return this._eventType === _e.DELETE;
};
_e.prototype.setDeleteEventIndex = function(t) {
  this._deleteEventIndex = t;
};
_e.prototype.getObject = function() {
  return this._obj;
};
_e.prototype.compareTo = function(t) {
  var e = t;
  return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
};
_e.prototype.getInsertEvent = function() {
  return this._insertEvent;
};
_e.prototype.isInsert = function() {
  return this._eventType === _e.INSERT;
};
_e.prototype.isSameLabel = function(t) {
  return this._label === null ? !1 : this._label === t._label;
};
_e.prototype.getDeleteEventIndex = function() {
  return this._deleteEventIndex;
};
_e.prototype.interfaces_ = function() {
  return [ke];
};
_e.prototype.getClass = function() {
  return _e;
};
na.INSERT.get = function() {
  return 1;
};
na.DELETE.get = function() {
  return 2;
};
Object.defineProperties(_e, na);
var Ho = function() {
};
Ho.prototype.interfaces_ = function() {
  return [];
};
Ho.prototype.getClass = function() {
  return Ho;
};
var Wt = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = n;
};
Wt.prototype.isTrivialIntersection = function(t, e, n, i) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (Wt.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.getNumPoints() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Wt.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Wt.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
Wt.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Wt.prototype.isBoundaryPointInternal = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next(), o = i.getCoordinate();
    if (t.isIntersection(o))
      return !0;
  }
  return !1;
};
Wt.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Wt.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Wt.prototype.isDone = function() {
  return this._isDone;
};
Wt.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
Wt.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
Wt.prototype.addIntersections = function(t, e, n, i) {
  if (t === n && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], u = n.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
Wt.prototype.interfaces_ = function() {
  return [];
};
Wt.prototype.getClass = function() {
  return Wt;
};
Wt.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var cf = function(r) {
  function t() {
    r.call(this), this.events = new O(), this.nOverlaps = null;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var n = this;
    He.sort(this.events);
    for (var i = 0; i < this.events.size(); i++) {
      var o = n.events.get(i);
      o.isDelete() && o.getInsertEvent().setDeleteEventIndex(i);
    }
  }, t.prototype.computeIntersections = function() {
    var n = this;
    if (arguments.length === 1) {
      var i = arguments[0];
      this.nOverlaps = 0, this.prepareEvents();
      for (var o = 0; o < this.events.size(); o++) {
        var s = n.events.get(o);
        if (s.isInsert() && n.processOverlaps(o, s.getDeleteEventIndex(), s, i), i.isDone())
          break;
      }
    } else if (arguments.length === 3) {
      if (arguments[2] instanceof Wt && V(arguments[0], Ue) && V(arguments[1], Ue)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && V(arguments[0], Ue) && arguments[1] instanceof Wt) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        h ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(f);
      }
    }
  }, t.prototype.addEdge = function(n, i) {
    for (var o = this, s = n.getMonotoneChainEdge(), a = s.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new go(s, u), c = new _e(i, s.getMinX(u), l);
      o.events.add(c), o.events.add(new _e(s.getMaxX(u), c));
    }
  }, t.prototype.processOverlaps = function(n, i, o, s) {
    for (var a = this, u = o.getObject(), l = n; l < i; l++) {
      var c = a.events.get(l);
      if (c.isInsert()) {
        var f = c.getObject();
        o.isSameLabel(c) || (u.computeIntersections(f, s), a.nOverlaps++);
      }
    }
  }, t.prototype.addEdges = function() {
    var n = this;
    if (arguments.length === 1)
      for (var i = arguments[0], o = i.iterator(); o.hasNext(); ) {
        var s = o.next();
        n.addEdge(s, s);
      }
    else if (arguments.length === 2)
      for (var a = arguments[0], u = arguments[1], l = a.iterator(); l.hasNext(); ) {
        var c = l.next();
        n.addEdge(c, u);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ho), Fn = function() {
  this._min = z.POSITIVE_INFINITY, this._max = z.NEGATIVE_INFINITY;
}, Vu = { NodeComparator: { configurable: !0 } };
Fn.prototype.getMin = function() {
  return this._min;
};
Fn.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
Fn.prototype.getMax = function() {
  return this._max;
};
Fn.prototype.toString = function() {
  return qe.toLineString(new y(this._min, 0), new y(this._max, 0));
};
Fn.prototype.interfaces_ = function() {
  return [];
};
Fn.prototype.getClass = function() {
  return Fn;
};
Vu.NodeComparator.get = function() {
  return po;
};
Object.defineProperties(Fn, Vu);
var po = function() {
};
po.prototype.compare = function(t, e) {
  var n = t, i = e, o = (n._min + n._max) / 2, s = (i._min + i._max) / 2;
  return o < s ? -1 : o > s ? 1 : 0;
};
po.prototype.interfaces_ = function() {
  return [Ei];
};
po.prototype.getClass = function() {
  return po;
};
var ff = function(r) {
  function t() {
    r.call(this), this._item = null;
    var e = arguments[0], n = arguments[1], i = arguments[2];
    this._min = e, this._max = n, this._item = i;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.query = function(n, i, o) {
    if (!this.intersects(n, i))
      return null;
    o.visitItem(this._item);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Fn), hf = function(r) {
  function t() {
    r.call(this), this._node1 = null, this._node2 = null;
    var e = arguments[0], n = arguments[1];
    this._node1 = e, this._node2 = n, this.buildExtent(this._node1, this._node2);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.buildExtent = function(n, i) {
    this._min = Math.min(n._min, i._min), this._max = Math.max(n._max, i._max);
  }, t.prototype.query = function(n, i, o) {
    if (!this.intersects(n, i))
      return null;
    this._node1 !== null && this._node1.query(n, i, o), this._node2 !== null && this._node2.query(n, i, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Fn), Bn = function() {
  this._leaves = new O(), this._root = null, this._level = 0;
};
Bn.prototype.buildTree = function() {
  var t = this;
  He.sort(this._leaves, new Fn.NodeComparator());
  for (var e = this._leaves, n = null, i = new O(); ; ) {
    if (t.buildLevel(e, i), i.size() === 1)
      return i.get(0);
    n = e, e = i, i = n;
  }
};
Bn.prototype.insert = function(t, e, n) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new ff(t, e, n));
};
Bn.prototype.query = function(t, e, n) {
  this.init(), this._root.query(t, e, n);
};
Bn.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
Bn.prototype.printNode = function(t) {
  Xt.out.println(qe.toLineString(new y(t._min, this._level), new y(t._max, this._level)));
};
Bn.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
Bn.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var n = 0; n < t.size(); n += 2) {
    var i = t.get(n), o = n + 1 < t.size() ? t.get(n) : null;
    if (o === null)
      e.add(i);
    else {
      var s = new hf(t.get(n), t.get(n + 1));
      e.add(s);
    }
  }
};
Bn.prototype.interfaces_ = function() {
  return [];
};
Bn.prototype.getClass = function() {
  return Bn;
};
var Ti = function() {
  this._items = new O();
};
Ti.prototype.visitItem = function(t) {
  this._items.add(t);
};
Ti.prototype.getItems = function() {
  return this._items;
};
Ti.prototype.interfaces_ = function() {
  return [gr];
};
Ti.prototype.getClass = function() {
  return Ti;
};
var Mi = function() {
  this._index = null;
  var t = arguments[0];
  if (!V(t, hr))
    throw new ft("Argument must be Polygonal");
  this._index = new Gr(t);
}, ra = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
Mi.prototype.locate = function(t) {
  var e = new an(t), n = new Ai(e);
  return this._index.query(t.y, t.y, n), e.getLocation();
};
Mi.prototype.interfaces_ = function() {
  return [Oi];
};
Mi.prototype.getClass = function() {
  return Mi;
};
ra.SegmentVisitor.get = function() {
  return Ai;
};
ra.IntervalIndexedGeometry.get = function() {
  return Gr;
};
Object.defineProperties(Mi, ra);
var Ai = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
Ai.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
Ai.prototype.interfaces_ = function() {
  return [gr];
};
Ai.prototype.getClass = function() {
  return Ai;
};
var Gr = function() {
  this._index = new Bn();
  var t = arguments[0];
  this.init(t);
};
Gr.prototype.init = function(t) {
  for (var e = this, n = zt.getLines(t), i = n.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getCoordinates();
    e.addLine(s);
  }
};
Gr.prototype.addLine = function(t) {
  for (var e = this, n = 1; n < t.length; n++) {
    var i = new k(t[n - 1], t[n]), o = Math.min(i.p0.y, i.p1.y), s = Math.max(i.p0.y, i.p1.y);
    e._index.insert(o, s, i);
  }
};
Gr.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new Ti();
    return this._index.query(t, e, n), n.getItems();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    this._index.query(i, o, s);
  }
};
Gr.prototype.interfaces_ = function() {
  return [];
};
Gr.prototype.getClass = function() {
  return Gr;
};
var ji = function(r) {
  function t() {
    if (r.call(this), this._parentGeom = null, this._lineEdgeMap = new Nu(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new je(), arguments.length === 2) {
      var e = arguments[0], n = arguments[1], i = Ae.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = i, n !== null && this.add(n);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2];
      this._argIndex = o, this._parentGeom = s, this._boundaryNodeRule = a, s !== null && this.add(s);
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(n, i) {
    var o = this._nodes.addNode(i), s = o.getLabel(), a = 1, u = m.NONE;
    u = s.getLocation(n, b.ON), u === m.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    s.setLocation(n, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      return this.computeSelfNodes(n, i, !1);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Wt(o, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof Rn || this._parentGeom instanceof Ot || this._parentGeom instanceof Ln, f = s || !c;
      return l.computeIntersections(this._edges, u, f), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(n) {
    for (var i = this._edges.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.eiList.addSplitEdges(n);
    }
  }, t.prototype.computeEdgeIntersections = function(n, i, o) {
    var s = new Wt(i, o, !0);
    s.setBoundaryNodes(this.getBoundaryNodes(), n.getBoundaryNodes());
    var a = this.createEdgeSetIntersector();
    return a.computeIntersections(this._edges, n._edges, s), s;
  }, t.prototype.getGeometry = function() {
    return this._parentGeom;
  }, t.prototype.getBoundaryNodeRule = function() {
    return this._boundaryNodeRule;
  }, t.prototype.hasTooFewPoints = function() {
    return this._hasTooFewPoints;
  }, t.prototype.addPoint = function() {
    if (arguments[0] instanceof ve) {
      var n = arguments[0], i = n.getCoordinate();
      this.insertPoint(this._argIndex, i, m.INTERIOR);
    } else if (arguments[0] instanceof y) {
      var o = arguments[0];
      this.insertPoint(this._argIndex, o, m.INTERIOR);
    }
  }, t.prototype.addPolygon = function(n) {
    var i = this;
    this.addPolygonRing(n.getExteriorRing(), m.EXTERIOR, m.INTERIOR);
    for (var o = 0; o < n.getNumInteriorRing(); o++) {
      var s = n.getInteriorRingN(o);
      i.addPolygonRing(s, m.INTERIOR, m.EXTERIOR);
    }
  }, t.prototype.addEdge = function(n) {
    this.insertEdge(n);
    var i = n.getCoordinates();
    this.insertPoint(this._argIndex, i[0], m.BOUNDARY), this.insertPoint(this._argIndex, i[i.length - 1], m.BOUNDARY);
  }, t.prototype.addLineString = function(n) {
    var i = j.removeRepeatedPoints(n.getCoordinates());
    if (i.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = i[0], null;
    var o = new Yo(i, new et(this._argIndex, m.INTERIOR));
    this._lineEdgeMap.put(n, o), this.insertEdge(o), q.isTrue(i.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, i[0]), this.insertBoundaryPoint(this._argIndex, i[i.length - 1]);
  }, t.prototype.getInvalidPoint = function() {
    return this._invalidPoint;
  }, t.prototype.getBoundaryPoints = function() {
    for (var n = this.getBoundaryNodes(), i = new Array(n.size()).fill(null), o = 0, s = n.iterator(); s.hasNext(); ) {
      var a = s.next();
      i[o++] = a.getCoordinate().copy();
    }
    return i;
  }, t.prototype.getBoundaryNodes = function() {
    return this._boundaryNodes === null && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
  }, t.prototype.addSelfIntersectionNode = function(n, i, o) {
    if (this.isBoundaryNode(n, i))
      return null;
    o === m.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(n, i) : this.insertPoint(n, i, o);
  }, t.prototype.addPolygonRing = function(n, i, o) {
    if (n.isEmpty())
      return null;
    var s = j.removeRepeatedPoints(n.getCoordinates());
    if (s.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = s[0], null;
    var a = i, u = o;
    T.isCCW(s) && (a = o, u = i);
    var l = new Yo(s, new et(this._argIndex, m.BOUNDARY, a, u));
    this._lineEdgeMap.put(n, l), this.insertEdge(l), this.insertPoint(this._argIndex, s[0], m.BOUNDARY);
  }, t.prototype.insertPoint = function(n, i, o) {
    var s = this._nodes.addNode(i), a = s.getLabel();
    a === null ? s._label = new et(n, o) : a.setLocation(n, o);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new cf();
  }, t.prototype.addSelfIntersectionNodes = function(n) {
    for (var i = this, o = this._edges.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getLabel().getLocation(n), u = s.eiList.iterator(); u.hasNext(); ) {
        var l = u.next();
        i.addSelfIntersectionNode(n, l.coord, a);
      }
  }, t.prototype.add = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      if (n.isEmpty())
        return null;
      if (n instanceof Ln && (this._useBoundaryDeterminationRule = !1), n instanceof Ot)
        this.addPolygon(n);
      else if (n instanceof vt)
        this.addLineString(n);
      else if (n instanceof ve)
        this.addPoint(n);
      else if (n instanceof Li)
        this.addCollection(n);
      else if (n instanceof Dr)
        this.addCollection(n);
      else if (n instanceof Ln)
        this.addCollection(n);
      else if (n instanceof re)
        this.addCollection(n);
      else
        throw new Error(n.getClass().getName());
    } else
      return r.prototype.add.apply(this, arguments);
  }, t.prototype.addCollection = function(n) {
    for (var i = this, o = 0; o < n.getNumGeometries(); o++) {
      var s = n.getGeometryN(o);
      i.add(s);
    }
  }, t.prototype.locate = function(n) {
    return V(this._parentGeom, hr) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new Mi(this._parentGeom)), this._areaPtLocator.locate(n)) : this._ptLocator.locate(n, this._parentGeom);
  }, t.prototype.findEdge = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      return this._lineEdgeMap.get(n);
    } else
      return r.prototype.findEdge.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.determineBoundary = function(n, i) {
    return n.isInBoundary(i) ? m.BOUNDARY : m.INTERIOR;
  }, t;
}(pt), Fi = function() {
  if (this._li = new Xr(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new ji(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = Ae.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new ji(0, e, i), this._arg[1] = new ji(1, n, i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    o.getPrecisionModel().compareTo(s.getPrecisionModel()) >= 0 ? this.setComputationPrecision(o.getPrecisionModel()) : this.setComputationPrecision(s.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new ji(0, o, a), this._arg[1] = new ji(1, s, a);
  }
};
Fi.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
Fi.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
Fi.prototype.interfaces_ = function() {
  return [];
};
Fi.prototype.getClass = function() {
  return Fi;
};
var br = function() {
};
br.prototype.interfaces_ = function() {
  return [];
};
br.prototype.getClass = function() {
  return br;
};
br.map = function() {
  if (arguments[0] instanceof G && V(arguments[1], br.MapOp)) {
    for (var t = arguments[0], e = arguments[1], n = new O(), i = 0; i < t.getNumGeometries(); i++) {
      var o = e.map(t.getGeometryN(i));
      o !== null && n.add(o);
    }
    return t.getFactory().buildGeometry(n);
  } else if (V(arguments[0], Lt) && V(arguments[1], br.MapOp)) {
    for (var s = arguments[0], a = arguments[1], u = new O(), l = s.iterator(); l.hasNext(); ) {
      var c = l.next(), f = a.map(c);
      f !== null && u.add(f);
    }
    return u;
  }
};
br.MapOp = function() {
};
var U = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n), this._ptLocator = new je(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new We(), this._resultPolyList = new O(), this._resultLineList = new O(), this._resultPointList = new O(), this._graph = new pt(new Ou()), this._geomFact = e.getFactory();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(n) {
    var i = this._edgeList.findEqualEdge(n);
    if (i !== null) {
      var o = i.getLabel(), s = n.getLabel();
      i.isPointwiseEqual(n) || (s = new et(n.getLabel()), s.flip());
      var a = i.getDepth();
      a.isNull() && a.add(o), a.add(s), o.merge(s);
    } else
      this._edgeList.add(n);
  }, t.prototype.getGraph = function() {
    return this._graph;
  }, t.prototype.cancelDuplicateResultEdges = function() {
    for (var n = this._graph.getEdgeEnds().iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getSym();
      i.isInResult() && o.isInResult() && (i.setInResult(!1), o.setInResult(!1));
    }
  }, t.prototype.isCoveredByLA = function(n) {
    return !!(this.isCovered(n, this._resultLineList) || this.isCovered(n, this._resultPolyList));
  }, t.prototype.computeGeometry = function(n, i, o, s) {
    var a = new O();
    return a.addAll(n), a.addAll(i), a.addAll(o), a.isEmpty() ? t.createEmptyResult(s, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var i = n.next();
      i.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(n, i) {
    for (var o = this, s = i.iterator(); s.hasNext(); ) {
      var a = s.next(), u = o._ptLocator.locate(n, a);
      if (u !== m.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var n = new O(), i = this._edgeList.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.isCollapsed() && (i.remove(), n.add(o.getCollapsedEdge()));
    }
    this._edgeList.addAll(n);
  }, t.prototype.updateNodeLabelling = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getEdges().getLabel();
      i.getLabel().merge(o);
    }
  }, t.prototype.getResultGeometry = function(n) {
    return this.computeOverlay(n), this._resultGeom;
  }, t.prototype.insertUniqueEdges = function(n) {
    for (var i = this, o = n.iterator(); o.hasNext(); ) {
      var s = o.next();
      i.insertUniqueEdge(s);
    }
  }, t.prototype.computeOverlay = function(n) {
    this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
    var i = new O();
    this._arg[0].computeSplitEdges(i), this._arg[1].computeSplitEdges(i), this.insertUniqueEdges(i), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), kr.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(n), this.cancelDuplicateResultEdges();
    var o = new ye(this._geomFact);
    o.add(this._graph), this._resultPolyList = o.getPolygons();
    var s = new mn(this, this._geomFact, this._ptLocator);
    this._resultLineList = s.build(n);
    var a = new oi(this, this._geomFact, this._ptLocator);
    this._resultPointList = a.build(n), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, n);
  }, t.prototype.labelIncompleteNode = function(n, i) {
    var o = this._ptLocator.locate(n.getCoordinate(), this._arg[i].getGeometry());
    n.getLabel().setLocation(i, o);
  }, t.prototype.copyPoints = function(n) {
    for (var i = this, o = this._arg[n].getNodeIterator(); o.hasNext(); ) {
      var s = o.next(), a = i._graph.addNode(s.getCoordinate());
      a.setLabel(n, s.getLabel().getLocation(n));
    }
  }, t.prototype.findResultAreaEdges = function(n) {
    for (var i = this._graph.getEdgeEnds().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.isArea() && !o.isInteriorAreaEdge() && t.isResultOfOp(s.getLocation(0, b.RIGHT), s.getLocation(1, b.RIGHT), n) && o.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var n = this._edgeList.iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getLabel(), s = i.getDepth();
      if (!s.isNull()) {
        s.normalize();
        for (var a = 0; a < 2; a++)
          !o.isNull(a) && o.isArea() && !s.isNull(a) && (s.getDelta(a) === 0 ? o.toLine(a) : (q.isTrue(!s.isNull(a, b.LEFT), "depth of LEFT side has not been initialized"), o.setLocation(a, b.LEFT, s.getLocation(a, b.LEFT)), q.isTrue(!s.isNull(a, b.RIGHT), "depth of RIGHT side has not been initialized"), o.setLocation(a, b.RIGHT, s.getLocation(a, b.RIGHT))));
      }
    }
  }, t.prototype.computeLabelling = function() {
    for (var n = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next();
      o.getEdges().computeLabelling(n._arg);
    }
    this.mergeSymLabels(), this.updateNodeLabelling();
  }, t.prototype.labelIncompleteNodes = function() {
    for (var n = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      o.isIsolated() && (s.isNull(0) ? n.labelIncompleteNode(o, 0) : n.labelIncompleteNode(o, 1)), o.getEdges().updateLabelling(s);
    }
  }, t.prototype.isCoveredByA = function(n) {
    return !!this.isCovered(n, this._resultPolyList);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Fi);
U.overlayOp = function(r, t, e) {
  var n = new U(r, t), i = n.getResultGeometry(e);
  return i;
};
U.intersection = function(r, t) {
  if (r.isEmpty() || t.isEmpty())
    return U.createEmptyResult(U.INTERSECTION, r, t, r.getFactory());
  if (r.isGeometryCollection()) {
    var e = t;
    return ii.map(r, {
      interfaces_: function() {
        return [br.MapOp];
      },
      map: function(n) {
        return n.intersection(e);
      }
    });
  }
  return r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), se.overlayOp(r, t, U.INTERSECTION);
};
U.symDifference = function(r, t) {
  if (r.isEmpty() || t.isEmpty()) {
    if (r.isEmpty() && t.isEmpty())
      return U.createEmptyResult(U.SYMDIFFERENCE, r, t, r.getFactory());
    if (r.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return r.copy();
  }
  return r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), se.overlayOp(r, t, U.SYMDIFFERENCE);
};
U.resultDimension = function(r, t, e) {
  var n = t.getDimension(), i = e.getDimension(), o = -1;
  switch (r) {
    case U.INTERSECTION:
      o = Math.min(n, i);
      break;
    case U.UNION:
      o = Math.max(n, i);
      break;
    case U.DIFFERENCE:
      o = n;
      break;
    case U.SYMDIFFERENCE:
      o = Math.max(n, i);
      break;
  }
  return o;
};
U.createEmptyResult = function(r, t, e, n) {
  var i = null;
  switch (U.resultDimension(r, t, e)) {
    case -1:
      i = n.createGeometryCollection(new Array(0).fill(null));
      break;
    case 0:
      i = n.createPoint();
      break;
    case 1:
      i = n.createLineString();
      break;
    case 2:
      i = n.createPolygon();
      break;
  }
  return i;
};
U.difference = function(r, t) {
  return r.isEmpty() ? U.createEmptyResult(U.DIFFERENCE, r, t, r.getFactory()) : t.isEmpty() ? r.copy() : (r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), se.overlayOp(r, t, U.DIFFERENCE));
};
U.isResultOfOp = function() {
  if (arguments.length === 2) {
    var r = arguments[0], t = arguments[1], e = r.getLocation(0), n = r.getLocation(1);
    return U.isResultOfOp(e, n, t);
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    switch (i === m.BOUNDARY && (i = m.INTERIOR), o === m.BOUNDARY && (o = m.INTERIOR), s) {
      case U.INTERSECTION:
        return i === m.INTERIOR && o === m.INTERIOR;
      case U.UNION:
        return i === m.INTERIOR || o === m.INTERIOR;
      case U.DIFFERENCE:
        return i === m.INTERIOR && o !== m.INTERIOR;
      case U.SYMDIFFERENCE:
        return i === m.INTERIOR && o !== m.INTERIOR || i !== m.INTERIOR && o === m.INTERIOR;
    }
    return !1;
  }
};
U.INTERSECTION = 1;
U.UNION = 2;
U.DIFFERENCE = 3;
U.SYMDIFFERENCE = 4;
var lr = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new je(), this._seg = new k();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
lr.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, n = 0; n < this._linework.getNumGeometries(); n++)
    for (var i = e._linework.getGeometryN(n), o = i.getCoordinateSequence(), s = 0; s < o.size() - 1; s++) {
      o.getCoordinate(s, e._seg.p0), o.getCoordinate(s + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
lr.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? m.BOUNDARY : this._ptLocator.locate(t, this._g);
};
lr.prototype.extractLinework = function(t) {
  var e = new Bi();
  t.apply(e);
  var n = e.getLinework(), i = W.toLineStringArray(n);
  return t.getFactory().createMultiLineString(i);
};
lr.prototype.interfaces_ = function() {
  return [];
};
lr.prototype.getClass = function() {
  return lr;
};
var Bi = function() {
  this._linework = null, this._linework = new O();
};
Bi.prototype.getLinework = function() {
  return this._linework;
};
Bi.prototype.filter = function(t) {
  var e = this;
  if (t instanceof Ot) {
    var n = t;
    this._linework.add(n.getExteriorRing());
    for (var i = 0; i < n.getNumInteriorRing(); i++)
      e._linework.add(n.getInteriorRingN(i));
  }
};
Bi.prototype.interfaces_ = function() {
  return [fn];
};
Bi.prototype.getClass = function() {
  return Bi;
};
var Vr = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Vr.prototype.extractPoints = function(t, e, n) {
  for (var i = this, o = t.getCoordinates(), s = 0; s < o.length - 1; s++)
    i.computeOffsetPoints(o[s], o[s + 1], e, n);
};
Vr.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Vr.prototype.getPoints = function(t) {
  for (var e = this, n = new O(), i = zt.getLines(this._g), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    e.extractPoints(s, t, n);
  }
  return n;
};
Vr.prototype.computeOffsetPoints = function(t, e, n, i) {
  var o = e.x - t.x, s = e.y - t.y, a = Math.sqrt(o * o + s * s), u = n * o / a, l = n * s / a, c = (e.x + t.x) / 2, f = (e.y + t.y) / 2;
  if (this._doLeft) {
    var h = new y(c - l, f + u);
    i.add(h);
  }
  if (this._doRight) {
    var g = new y(c + l, f - u);
    i.add(g);
  }
};
Vr.prototype.interfaces_ = function() {
  return [];
};
Vr.prototype.getClass = function() {
  return Vr;
};
var Re = function r() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = r.TOLERANCE, this._testCoords = new O();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundaryDistanceTolerance = r.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, n], this._locFinder = [new lr(this._geom[0], this._boundaryDistanceTolerance), new lr(this._geom[1], this._boundaryDistanceTolerance), new lr(this._geom[2], this._boundaryDistanceTolerance)];
}, zu = { TOLERANCE: { configurable: !0 } };
Re.prototype.reportResult = function(t, e, n) {
  Xt.out.println("Overlay result invalid - A:" + m.toLocationSymbol(e[0]) + " B:" + m.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + m.toLocationSymbol(e[2]));
};
Re.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
Re.prototype.checkValid = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0; n < this._testCoords.size(); n++) {
      var i = t._testCoords.get(n);
      if (!t.checkValid(e, i))
        return t._invalidLocation = i, !1;
    }
    return !0;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._location[0] = this._locFinder[0].getLocation(s), this._location[1] = this._locFinder[1].getLocation(s), this._location[2] = this._locFinder[2].getLocation(s), Re.hasLocation(this._location, m.BOUNDARY) ? !0 : this.isValidResult(o, this._location);
  }
};
Re.prototype.addTestPts = function(t) {
  var e = new Vr(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
Re.prototype.isValidResult = function(t, e) {
  var n = U.isResultOfOp(e[0], e[1], t), i = e[2] === m.INTERIOR, o = !(n ^ i);
  return o || this.reportResult(t, e, n), o;
};
Re.prototype.getInvalidLocation = function() {
  return this._invalidLocation;
};
Re.prototype.interfaces_ = function() {
  return [];
};
Re.prototype.getClass = function() {
  return Re;
};
Re.hasLocation = function(t, e) {
  for (var n = 0; n < 3; n++)
    if (t[n] === e)
      return !0;
  return !1;
};
Re.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(_t.computeSizeBasedSnapTolerance(t), _t.computeSizeBasedSnapTolerance(e));
};
Re.isValid = function(t, e, n, i) {
  var o = new Re(t, e, i);
  return o.isValid(n);
};
zu.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(Re, zu);
var Ne = function r(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = r.extractFactory(t), this._inputGeoms = t;
};
Ne.prototype.extractElements = function(t, e) {
  var n = this;
  if (t === null)
    return null;
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    n._skipEmpty && o.isEmpty() || e.add(o);
  }
};
Ne.prototype.combine = function() {
  for (var t = this, e = new O(), n = this._inputGeoms.iterator(); n.hasNext(); ) {
    var i = n.next();
    t.extractElements(i, e);
  }
  return e.size() === 0 ? this._geomFactory !== null ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(e);
};
Ne.prototype.interfaces_ = function() {
  return [];
};
Ne.prototype.getClass = function() {
  return Ne;
};
Ne.combine = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Ne(t);
    return e.combine();
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = new Ne(Ne.createList(n, i));
    return o.combine();
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = new Ne(Ne.createList(s, a, u));
    return l.combine();
  }
};
Ne.extractFactory = function(t) {
  return t.isEmpty() ? null : t.iterator().next().getFactory();
};
Ne.createList = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new O();
    return n.add(t), n.add(e), n;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new O();
    return a.add(i), a.add(o), a.add(s), a;
  }
};
var xt = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new O());
}, Uu = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
xt.prototype.reduceToGeometries = function(t) {
  for (var e = this, n = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = null;
    V(o, Ue) ? s = e.unionTree(o) : o instanceof G && (s = o), n.add(s);
  }
  return n;
};
xt.prototype.extractByEnvelope = function(t, e, n) {
  for (var i = new O(), o = 0; o < e.getNumGeometries(); o++) {
    var s = e.getGeometryN(o);
    s.getEnvelopeInternal().intersects(t) ? i.add(s) : n.add(s);
  }
  return this._geomFactory.buildGeometry(i);
};
xt.prototype.unionOptimized = function(t, e) {
  var n = t.getEnvelopeInternal(), i = e.getEnvelopeInternal();
  if (!n.intersects(i)) {
    var o = Ne.combine(t, e);
    return o;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var s = n.intersection(i);
  return this.unionUsingEnvelopeIntersection(t, e, s);
};
xt.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new Lu(xt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.insert(n.getEnvelopeInternal(), n);
  }
  this._inputPolys = null;
  var i = t.itemsTree(), o = this.unionTree(i);
  return o;
};
xt.prototype.binaryUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.binaryUnion(t, 0, t.size());
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2];
    if (i - n <= 1) {
      var o = xt.getGeometry(e, n);
      return this.unionSafe(o, null);
    } else {
      if (i - n === 2)
        return this.unionSafe(xt.getGeometry(e, n), xt.getGeometry(e, n + 1));
      var s = Math.trunc((i + n) / 2), a = this.binaryUnion(e, n, s), u = this.binaryUnion(e, s, i);
      return this.unionSafe(a, u);
    }
  }
};
xt.prototype.repeatedUnion = function(t) {
  for (var e = null, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e === null ? e = i.copy() : e = e.union(i);
  }
  return e;
};
xt.prototype.unionSafe = function(t, e) {
  return t === null && e === null ? null : t === null ? e.copy() : e === null ? t.copy() : this.unionOptimized(t, e);
};
xt.prototype.unionActual = function(t, e) {
  return xt.restrictToPolygons(t.union(e));
};
xt.prototype.unionTree = function(t) {
  var e = this.reduceToGeometries(t), n = this.binaryUnion(e);
  return n;
};
xt.prototype.unionUsingEnvelopeIntersection = function(t, e, n) {
  var i = new O(), o = this.extractByEnvelope(n, t, i), s = this.extractByEnvelope(n, e, i), a = this.unionActual(o, s);
  i.add(a);
  var u = Ne.combine(i);
  return u;
};
xt.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), n = e.buildGeometry(t), i = n.buffer(0);
    return i;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1], a = o.getFactory(), u = a.createGeometryCollection([o, s]), l = u.buffer(0);
    return l;
  }
};
xt.prototype.interfaces_ = function() {
  return [];
};
xt.prototype.getClass = function() {
  return xt;
};
xt.restrictToPolygons = function(t) {
  if (V(t, hr))
    return t;
  var e = Kn.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(W.toPolygonArray(e));
};
xt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
xt.union = function(t) {
  var e = new xt(t);
  return e.union();
};
Uu.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(xt, Uu);
var Wo = function() {
};
Wo.prototype.interfaces_ = function() {
  return [];
};
Wo.prototype.getClass = function() {
  return Wo;
};
Wo.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return U.createEmptyResult(U.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), se.overlayOp(t, e, U.UNION);
};
function Yr() {
  return new jo();
}
function jo() {
  this.reset();
}
jo.prototype = {
  constructor: jo,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(r) {
    Ba(Ro, r, this.t), Ba(this, Ro.s, this.s), this.s ? this.t += Ro.t : this.s = Ro.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Ro = new jo();
function Ba(r, t, e) {
  var n = r.s = t + e, i = n - t, o = n - i;
  r.t = t - o + (e - i);
}
var dt = 1e-6, st = Math.PI, jn = st / 2, ka = st / 4, nr = st * 2, xr = 180 / st, en = st / 180, ee = Math.abs, gf = Math.atan, ki = Math.atan2, bt = Math.cos, Pt = Math.sin, Yi = Math.sqrt;
function qu(r) {
  return r > 1 ? 0 : r < -1 ? st : Math.acos(r);
}
function ai(r) {
  return r > 1 ? jn : r < -1 ? -jn : Math.asin(r);
}
function Ki() {
}
function Ko(r, t) {
  r && Va.hasOwnProperty(r.type) && Va[r.type](r, t);
}
var Ga = {
  Feature: function(r, t) {
    Ko(r.geometry, t);
  },
  FeatureCollection: function(r, t) {
    for (var e = r.features, n = -1, i = e.length; ++n < i; )
      Ko(e[n].geometry, t);
  }
}, Va = {
  Sphere: function(r, t) {
    t.sphere();
  },
  Point: function(r, t) {
    r = r.coordinates, t.point(r[0], r[1], r[2]);
  },
  MultiPoint: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      r = e[n], t.point(r[0], r[1], r[2]);
  },
  LineString: function(r, t) {
    Fs(r.coordinates, t, 0);
  },
  MultiLineString: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      Fs(e[n], t, 0);
  },
  Polygon: function(r, t) {
    za(r.coordinates, t);
  },
  MultiPolygon: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      za(e[n], t);
  },
  GeometryCollection: function(r, t) {
    for (var e = r.geometries, n = -1, i = e.length; ++n < i; )
      Ko(e[n], t);
  }
};
function Fs(r, t, e) {
  var n = -1, i = r.length - e, o;
  for (t.lineStart(); ++n < i; )
    o = r[n], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function za(r, t) {
  var e = -1, n = r.length;
  for (t.polygonStart(); ++e < n; )
    Fs(r[e], t, 1);
  t.polygonEnd();
}
function pf(r, t) {
  r && Ga.hasOwnProperty(r.type) ? Ga[r.type](r, t) : Ko(r, t);
}
Yr();
Yr();
function Bs(r) {
  return [ki(r[1], r[0]), ai(r[2])];
}
function Gi(r) {
  var t = r[0], e = r[1], n = bt(e);
  return [n * bt(t), n * Pt(t), Pt(e)];
}
function Oo(r, t) {
  return r[0] * t[0] + r[1] * t[1] + r[2] * t[2];
}
function Qo(r, t) {
  return [r[1] * t[2] - r[2] * t[1], r[2] * t[0] - r[0] * t[2], r[0] * t[1] - r[1] * t[0]];
}
function Cs(r, t) {
  r[0] += t[0], r[1] += t[1], r[2] += t[2];
}
function Do(r, t) {
  return [r[0] * t, r[1] * t, r[2] * t];
}
function ks(r) {
  var t = Yi(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
  r[0] /= t, r[1] /= t, r[2] /= t;
}
Yr();
function Xu(r, t) {
  function e(n, i) {
    return n = r(n, i), t(n[0], n[1]);
  }
  return r.invert && t.invert && (e.invert = function(n, i) {
    return n = t.invert(n, i), n && r.invert(n[0], n[1]);
  }), e;
}
function Gs(r, t) {
  return [r > st ? r - nr : r < -st ? r + nr : r, t];
}
Gs.invert = Gs;
function df(r, t, e) {
  return (r %= nr) ? t || e ? Xu(qa(r), Xa(t, e)) : qa(r) : t || e ? Xa(t, e) : Gs;
}
function Ua(r) {
  return function(t, e) {
    return t += r, [t > st ? t - nr : t < -st ? t + nr : t, e];
  };
}
function qa(r) {
  var t = Ua(r);
  return t.invert = Ua(-r), t;
}
function Xa(r, t) {
  var e = bt(r), n = Pt(r), i = bt(t), o = Pt(t);
  function s(a, u) {
    var l = bt(u), c = bt(a) * l, f = Pt(a) * l, h = Pt(u), g = h * e + c * n;
    return [
      ki(f * i - g * o, c * e - h * n),
      ai(g * i + f * o)
    ];
  }
  return s.invert = function(a, u) {
    var l = bt(u), c = bt(a) * l, f = Pt(a) * l, h = Pt(u), g = h * i - f * o;
    return [
      ki(f * i + h * o, c * e + g * n),
      ai(g * e - c * n)
    ];
  }, s;
}
function vf(r, t, e, n, i, o) {
  if (e) {
    var s = bt(t), a = Pt(t), u = n * e;
    i == null ? (i = t + n * nr, o = t - u / 2) : (i = Ya(s, i), o = Ya(s, o), (n > 0 ? i < o : i > o) && (i += n * nr));
    for (var l, c = i; n > 0 ? c > o : c < o; c -= u)
      l = Bs([s, -a * bt(c), -a * Pt(c)]), r.point(l[0], l[1]);
  }
}
function Ya(r, t) {
  t = Gi(t), t[0] -= r, ks(t);
  var e = qu(-t[1]);
  return ((-t[2] < 0 ? -e : e) + nr - dt) % nr;
}
function Yu() {
  var r = [], t;
  return {
    point: function(e, n) {
      t.push([e, n]);
    },
    lineStart: function() {
      r.push(t = []);
    },
    lineEnd: Ki,
    rejoin: function() {
      r.length > 1 && r.push(r.pop().concat(r.shift()));
    },
    result: function() {
      var e = r;
      return r = [], t = null, e;
    }
  };
}
function yf(r, t, e, n, i, o) {
  var s = r[0], a = r[1], u = t[0], l = t[1], c = 0, f = 1, h = u - s, g = l - a, p;
  if (p = e - s, !(!h && p > 0)) {
    if (p /= h, h < 0) {
      if (p < c)
        return;
      p < f && (f = p);
    } else if (h > 0) {
      if (p > f)
        return;
      p > c && (c = p);
    }
    if (p = i - s, !(!h && p < 0)) {
      if (p /= h, h < 0) {
        if (p > f)
          return;
        p > c && (c = p);
      } else if (h > 0) {
        if (p < c)
          return;
        p < f && (f = p);
      }
      if (p = n - a, !(!g && p > 0)) {
        if (p /= g, g < 0) {
          if (p < c)
            return;
          p < f && (f = p);
        } else if (g > 0) {
          if (p > f)
            return;
          p > c && (c = p);
        }
        if (p = o - a, !(!g && p < 0)) {
          if (p /= g, g < 0) {
            if (p > f)
              return;
            p > c && (c = p);
          } else if (g > 0) {
            if (p < c)
              return;
            p < f && (f = p);
          }
          return c > 0 && (r[0] = s + c * h, r[1] = a + c * g), f < 1 && (t[0] = s + f * h, t[1] = a + f * g), !0;
        }
      }
    }
  }
}
function ko(r, t) {
  return ee(r[0] - t[0]) < dt && ee(r[1] - t[1]) < dt;
}
function To(r, t, e, n) {
  this.x = r, this.z = t, this.o = e, this.e = n, this.v = !1, this.n = this.p = null;
}
function Hu(r, t, e, n, i) {
  var o = [], s = [], a, u;
  if (r.forEach(function(p) {
    if (!((d = p.length - 1) <= 0)) {
      var d, v = p[0], _ = p[d], C;
      if (ko(v, _)) {
        for (i.lineStart(), a = 0; a < d; ++a)
          i.point((v = p[a])[0], v[1]);
        i.lineEnd();
        return;
      }
      o.push(C = new To(v, p, null, !0)), s.push(C.o = new To(v, null, C, !1)), o.push(C = new To(_, p, null, !1)), s.push(C.o = new To(_, null, C, !0));
    }
  }), !!o.length) {
    for (s.sort(t), Ha(o), Ha(s), a = 0, u = s.length; a < u; ++a)
      s[a].e = e = !e;
    for (var l = o[0], c, f; ; ) {
      for (var h = l, g = !0; h.v; )
        if ((h = h.n) === l)
          return;
      c = h.z, i.lineStart();
      do {
        if (h.v = h.o.v = !0, h.e) {
          if (g)
            for (a = 0, u = c.length; a < u; ++a)
              i.point((f = c[a])[0], f[1]);
          else
            n(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (g)
            for (c = h.p.z, a = c.length - 1; a >= 0; --a)
              i.point((f = c[a])[0], f[1]);
          else
            n(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, c = h.z, g = !g;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function Ha(r) {
  if (t = r.length) {
    for (var t, e = 0, n = r[0], i; ++e < t; )
      n.n = i = r[e], i.p = n, n = i;
    n.n = i = r[0], i.p = n;
  }
}
function Wu(r, t) {
  return r < t ? -1 : r > t ? 1 : r >= t ? 0 : NaN;
}
function mf(r) {
  return r.length === 1 && (r = _f(r)), {
    left: function(t, e, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var o = n + i >>> 1;
        r(t[o], e) < 0 ? n = o + 1 : i = o;
      }
      return n;
    },
    right: function(t, e, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var o = n + i >>> 1;
        r(t[o], e) > 0 ? i = o : n = o + 1;
      }
      return n;
    }
  };
}
function _f(r) {
  return function(t, e) {
    return Wu(r(t), e);
  };
}
mf(Wu);
function ju(r) {
  for (var t = r.length, e, n = -1, i = 0, o, s; ++n < t; )
    i += r[n].length;
  for (o = new Array(i); --t >= 0; )
    for (s = r[t], e = s.length; --e >= 0; )
      o[--i] = s[e];
  return o;
}
var Qi = 1e9, Mo = -Qi;
function Ef(r, t, e, n) {
  function i(l, c) {
    return r <= l && l <= e && t <= c && c <= n;
  }
  function o(l, c, f, h) {
    var g = 0, p = 0;
    if (l == null || (g = s(l, f)) !== (p = s(c, f)) || u(l, c) < 0 ^ f > 0)
      do
        h.point(g === 0 || g === 3 ? r : e, g > 1 ? n : t);
      while ((g = (g + f + 4) % 4) !== p);
    else
      h.point(c[0], c[1]);
  }
  function s(l, c) {
    return ee(l[0] - r) < dt ? c > 0 ? 0 : 3 : ee(l[0] - e) < dt ? c > 0 ? 2 : 1 : ee(l[1] - t) < dt ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var f = s(l, 1), h = s(c, 1);
    return f !== h ? f - h : f === 0 ? c[1] - l[1] : f === 1 ? l[0] - c[0] : f === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, f = Yu(), h, g, p, d, v, _, C, E, S, N, w, M = {
      point: A,
      lineStart: R,
      lineEnd: Y,
      polygonStart: F,
      polygonEnd: X
    };
    function A(H, rt) {
      i(H, rt) && c.point(H, rt);
    }
    function L() {
      for (var H = 0, rt = 0, wt = g.length; rt < wt; ++rt)
        for (var kt = g[rt], ge = 1, or = kt.length, Je = kt[0], Cn, Nn, gi = Je[0], sr = Je[1]; ge < or; ++ge)
          Cn = gi, Nn = sr, Je = kt[ge], gi = Je[0], sr = Je[1], Nn <= n ? sr > n && (gi - Cn) * (n - Nn) > (sr - Nn) * (r - Cn) && ++H : sr <= n && (gi - Cn) * (n - Nn) < (sr - Nn) * (r - Cn) && --H;
      return H;
    }
    function F() {
      c = f, h = [], g = [], w = !0;
    }
    function X() {
      var H = L(), rt = w && H, wt = (h = ju(h)).length;
      (rt || wt) && (l.polygonStart(), rt && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), wt && Hu(h, a, H, o, l), l.polygonEnd()), c = l, h = g = p = null;
    }
    function R() {
      M.point = D, g && g.push(p = []), N = !0, S = !1, C = E = NaN;
    }
    function Y() {
      h && (D(d, v), _ && S && f.rejoin(), h.push(f.result())), M.point = A, S && c.lineEnd();
    }
    function D(H, rt) {
      var wt = i(H, rt);
      if (g && p.push([H, rt]), N)
        d = H, v = rt, _ = wt, N = !1, wt && (c.lineStart(), c.point(H, rt));
      else if (wt && S)
        c.point(H, rt);
      else {
        var kt = [C = Math.max(Mo, Math.min(Qi, C)), E = Math.max(Mo, Math.min(Qi, E))], ge = [H = Math.max(Mo, Math.min(Qi, H)), rt = Math.max(Mo, Math.min(Qi, rt))];
        yf(kt, ge, r, t, e, n) ? (S || (c.lineStart(), c.point(kt[0], kt[1])), c.point(ge[0], ge[1]), wt || c.lineEnd(), w = !1) : wt && (c.lineStart(), c.point(H, rt), w = !1);
      }
      C = H, E = rt, S = wt;
    }
    return M;
  };
}
var Ns = Yr();
function If(r, t) {
  var e = t[0], n = t[1], i = [Pt(e), -bt(e), 0], o = 0, s = 0;
  Ns.reset();
  for (var a = 0, u = r.length; a < u; ++a)
    if (c = (l = r[a]).length)
      for (var l, c, f = l[c - 1], h = f[0], g = f[1] / 2 + ka, p = Pt(g), d = bt(g), v = 0; v < c; ++v, h = C, p = S, d = N, f = _) {
        var _ = l[v], C = _[0], E = _[1] / 2 + ka, S = Pt(E), N = bt(E), w = C - h, M = w >= 0 ? 1 : -1, A = M * w, L = A > st, F = p * S;
        if (Ns.add(ki(F * M * Pt(A), d * N + F * bt(A))), o += L ? w + M * nr : w, L ^ h >= e ^ C >= e) {
          var X = Qo(Gi(f), Gi(_));
          ks(X);
          var R = Qo(i, X);
          ks(R);
          var Y = (L ^ w >= 0 ? -1 : 1) * ai(R[2]);
          (n > Y || n === Y && (X[0] || X[1])) && (s += L ^ w >= 0 ? 1 : -1);
        }
      }
  return (o < -dt || o < dt && Ns < -dt) ^ s & 1;
}
Yr();
function Wa(r) {
  return r;
}
Yr();
Yr();
var Vi = 1 / 0, Zo = Vi, vo = -Vi, Jo = vo, ja = {
  point: Cf,
  lineStart: Ki,
  lineEnd: Ki,
  polygonStart: Ki,
  polygonEnd: Ki,
  result: function() {
    var r = [[Vi, Zo], [vo, Jo]];
    return vo = Jo = -(Zo = Vi = 1 / 0), r;
  }
};
function Cf(r, t) {
  r < Vi && (Vi = r), r > vo && (vo = r), t < Zo && (Zo = t), t > Jo && (Jo = t);
}
Yr();
function Ku(r, t, e, n) {
  return function(i, o) {
    var s = t(o), a = i.invert(n[0], n[1]), u = Yu(), l = t(u), c = !1, f, h, g, p = {
      point: d,
      lineStart: _,
      lineEnd: C,
      polygonStart: function() {
        p.point = E, p.lineStart = S, p.lineEnd = N, h = [], f = [];
      },
      polygonEnd: function() {
        p.point = d, p.lineStart = _, p.lineEnd = C, h = ju(h);
        var w = If(f, a);
        h.length ? (c || (o.polygonStart(), c = !0), Hu(h, xf, w, e, o)) : w && (c || (o.polygonStart(), c = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), c && (o.polygonEnd(), c = !1), h = f = null;
      },
      sphere: function() {
        o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd();
      }
    };
    function d(w, M) {
      var A = i(w, M);
      r(w = A[0], M = A[1]) && o.point(w, M);
    }
    function v(w, M) {
      var A = i(w, M);
      s.point(A[0], A[1]);
    }
    function _() {
      p.point = v, s.lineStart();
    }
    function C() {
      p.point = d, s.lineEnd();
    }
    function E(w, M) {
      g.push([w, M]);
      var A = i(w, M);
      l.point(A[0], A[1]);
    }
    function S() {
      l.lineStart(), g = [];
    }
    function N() {
      E(g[0][0], g[0][1]), l.lineEnd();
      var w = l.clean(), M = u.result(), A, L = M.length, F, X, R;
      if (g.pop(), f.push(g), g = null, !!L) {
        if (w & 1) {
          if (X = M[0], (F = X.length - 1) > 0) {
            for (c || (o.polygonStart(), c = !0), o.lineStart(), A = 0; A < F; ++A)
              o.point((R = X[A])[0], R[1]);
            o.lineEnd();
          }
          return;
        }
        L > 1 && w & 2 && M.push(M.pop().concat(M.shift())), h.push(M.filter(Nf));
      }
    }
    return p;
  };
}
function Nf(r) {
  return r.length > 1;
}
function xf(r, t) {
  return ((r = r.x)[0] < 0 ? r[1] - jn - dt : jn - r[1]) - ((t = t.x)[0] < 0 ? t[1] - jn - dt : jn - t[1]);
}
const Ka = Ku(
  function() {
    return !0;
  },
  Sf,
  Lf,
  [-st, -jn]
);
function Sf(r) {
  var t = NaN, e = NaN, n = NaN, i;
  return {
    lineStart: function() {
      r.lineStart(), i = 1;
    },
    point: function(o, s) {
      var a = o > 0 ? st : -st, u = ee(o - t);
      ee(u - st) < dt ? (r.point(t, e = (e + s) / 2 > 0 ? jn : -jn), r.point(n, e), r.lineEnd(), r.lineStart(), r.point(a, e), r.point(o, e), i = 0) : n !== a && u >= st && (ee(t - n) < dt && (t -= n * dt), ee(o - a) < dt && (o -= a * dt), e = wf(t, e, o, s), r.point(n, e), r.lineEnd(), r.lineStart(), r.point(a, e), i = 0), r.point(t = o, e = s), n = a;
    },
    lineEnd: function() {
      r.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function wf(r, t, e, n) {
  var i, o, s = Pt(r - e);
  return ee(s) > dt ? gf((Pt(t) * (o = bt(n)) * Pt(e) - Pt(n) * (i = bt(t)) * Pt(r)) / (i * o * s)) : (t + n) / 2;
}
function Lf(r, t, e, n) {
  var i;
  if (r == null)
    i = e * jn, n.point(-st, i), n.point(0, i), n.point(st, i), n.point(st, 0), n.point(st, -i), n.point(0, -i), n.point(-st, -i), n.point(-st, 0), n.point(-st, i);
  else if (ee(r[0] - t[0]) > dt) {
    var o = r[0] < t[0] ? st : -st;
    i = e * o / 2, n.point(-o, i), n.point(0, i), n.point(o, i);
  } else
    n.point(t[0], t[1]);
}
function bf(r, t) {
  var e = bt(r), n = e > 0, i = ee(e) > dt;
  function o(c, f, h, g) {
    vf(g, r, t, h, c, f);
  }
  function s(c, f) {
    return bt(c) * bt(f) > e;
  }
  function a(c) {
    var f, h, g, p, d;
    return {
      lineStart: function() {
        p = g = !1, d = 1;
      },
      point: function(v, _) {
        var C = [v, _], E, S = s(v, _), N = n ? S ? 0 : l(v, _) : S ? l(v + (v < 0 ? st : -st), _) : 0;
        if (!f && (p = g = S) && c.lineStart(), S !== g && (E = u(f, C), (!E || ko(f, E) || ko(C, E)) && (C[0] += dt, C[1] += dt, S = s(C[0], C[1]))), S !== g)
          d = 0, S ? (c.lineStart(), E = u(C, f), c.point(E[0], E[1])) : (E = u(f, C), c.point(E[0], E[1]), c.lineEnd()), f = E;
        else if (i && f && n ^ S) {
          var w;
          !(N & h) && (w = u(C, f, !0)) && (d = 0, n ? (c.lineStart(), c.point(w[0][0], w[0][1]), c.point(w[1][0], w[1][1]), c.lineEnd()) : (c.point(w[1][0], w[1][1]), c.lineEnd(), c.lineStart(), c.point(w[0][0], w[0][1])));
        }
        S && (!f || !ko(f, C)) && c.point(C[0], C[1]), f = C, g = S, h = N;
      },
      lineEnd: function() {
        g && c.lineEnd(), f = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return d | (p && g) << 1;
      }
    };
  }
  function u(c, f, h) {
    var g = Gi(c), p = Gi(f), d = [1, 0, 0], v = Qo(g, p), _ = Oo(v, v), C = v[0], E = _ - C * C;
    if (!E)
      return !h && c;
    var S = e * _ / E, N = -e * C / E, w = Qo(d, v), M = Do(d, S), A = Do(v, N);
    Cs(M, A);
    var L = w, F = Oo(M, L), X = Oo(L, L), R = F * F - X * (Oo(M, M) - 1);
    if (!(R < 0)) {
      var Y = Yi(R), D = Do(L, (-F - Y) / X);
      if (Cs(D, M), D = Bs(D), !h)
        return D;
      var H = c[0], rt = f[0], wt = c[1], kt = f[1], ge;
      rt < H && (ge = H, H = rt, rt = ge);
      var or = rt - H, Je = ee(or - st) < dt, Cn = Je || or < dt;
      if (!Je && kt < wt && (ge = wt, wt = kt, kt = ge), Cn ? Je ? wt + kt > 0 ^ D[1] < (ee(D[0] - H) < dt ? wt : kt) : wt <= D[1] && D[1] <= kt : or > st ^ (H <= D[0] && D[0] <= rt)) {
        var Nn = Do(L, (-F + Y) / X);
        return Cs(Nn, M), [D, Bs(Nn)];
      }
    }
  }
  function l(c, f) {
    var h = n ? r : st - r, g = 0;
    return c < -h ? g |= 1 : c > h && (g |= 2), f < -h ? g |= 4 : f > h && (g |= 8), g;
  }
  return Ku(s, a, o, n ? [0, -r] : [-st, r - st]);
}
function Qu(r) {
  return function(t) {
    var e = new Vs();
    for (var n in r)
      e[n] = r[n];
    return e.stream = t, e;
  };
}
function Vs() {
}
Vs.prototype = {
  constructor: Vs,
  point: function(r, t) {
    this.stream.point(r, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Zu(r, t, e) {
  var n = t[1][0] - t[0][0], i = t[1][1] - t[0][1], o = r.clipExtent && r.clipExtent();
  r.scale(150).translate([0, 0]), o != null && r.clipExtent(null), pf(e, r.stream(ja));
  var s = ja.result(), a = Math.min(n / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])), u = +t[0][0] + (n - a * (s[1][0] + s[0][0])) / 2, l = +t[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
  return o != null && r.clipExtent(o), r.scale(a * 150).translate([u, l]);
}
function Pf(r, t, e) {
  return Zu(r, [[0, 0], t], e);
}
var Qa = 16, Rf = bt(30 * en);
function Za(r, t) {
  return +t ? Df(r, t) : Of(r);
}
function Of(r) {
  return Qu({
    point: function(t, e) {
      t = r(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function Df(r, t) {
  function e(n, i, o, s, a, u, l, c, f, h, g, p, d, v) {
    var _ = l - n, C = c - i, E = _ * _ + C * C;
    if (E > 4 * t && d--) {
      var S = s + h, N = a + g, w = u + p, M = Yi(S * S + N * N + w * w), A = ai(w /= M), L = ee(ee(w) - 1) < dt || ee(o - f) < dt ? (o + f) / 2 : ki(N, S), F = r(L, A), X = F[0], R = F[1], Y = X - n, D = R - i, H = C * Y - _ * D;
      (H * H / E > t || ee((_ * Y + C * D) / E - 0.5) > 0.3 || s * h + a * g + u * p < Rf) && (e(n, i, o, s, a, u, X, R, L, S /= M, N /= M, w, d, v), v.point(X, R), e(X, R, L, S, N, w, l, c, f, h, g, p, d, v));
    }
  }
  return function(n) {
    var i, o, s, a, u, l, c, f, h, g, p, d, v = {
      point: _,
      lineStart: C,
      lineEnd: S,
      polygonStart: function() {
        n.polygonStart(), v.lineStart = N;
      },
      polygonEnd: function() {
        n.polygonEnd(), v.lineStart = C;
      }
    };
    function _(A, L) {
      A = r(A, L), n.point(A[0], A[1]);
    }
    function C() {
      f = NaN, v.point = E, n.lineStart();
    }
    function E(A, L) {
      var F = Gi([A, L]), X = r(A, L);
      e(f, h, c, g, p, d, f = X[0], h = X[1], c = A, g = F[0], p = F[1], d = F[2], Qa, n), n.point(f, h);
    }
    function S() {
      v.point = _, n.lineEnd();
    }
    function N() {
      C(), v.point = w, v.lineEnd = M;
    }
    function w(A, L) {
      E(i = A, L), o = f, s = h, a = g, u = p, l = d, v.point = E;
    }
    function M() {
      e(f, h, c, g, p, d, o, s, i, a, u, l, Qa, n), v.lineEnd = S, S();
    }
    return v;
  };
}
var Tf = Qu({
  point: function(r, t) {
    this.stream.point(r * en, t * en);
  }
});
function Mf(r) {
  return Af(function() {
    return r;
  })();
}
function Af(r) {
  var t, e = 150, n = 480, i = 250, o, s, a = 0, u = 0, l = 0, c = 0, f = 0, h, g, p = null, d = Ka, v = null, _, C, E, S = Wa, N = 0.5, w = Za(X, N), M, A;
  function L(D) {
    return D = g(D[0] * en, D[1] * en), [D[0] * e + o, s - D[1] * e];
  }
  function F(D) {
    return D = g.invert((D[0] - o) / e, (s - D[1]) / e), D && [D[0] * xr, D[1] * xr];
  }
  function X(D, H) {
    return D = t(D, H), [D[0] * e + o, s - D[1] * e];
  }
  L.stream = function(D) {
    return M && A === D ? M : M = Tf(d(h, w(S(A = D))));
  }, L.clipAngle = function(D) {
    return arguments.length ? (d = +D ? bf(p = D * en, 6 * en) : (p = null, Ka), Y()) : p * xr;
  }, L.clipExtent = function(D) {
    return arguments.length ? (S = D == null ? (v = _ = C = E = null, Wa) : Ef(v = +D[0][0], _ = +D[0][1], C = +D[1][0], E = +D[1][1]), Y()) : v == null ? null : [[v, _], [C, E]];
  }, L.scale = function(D) {
    return arguments.length ? (e = +D, R()) : e;
  }, L.translate = function(D) {
    return arguments.length ? (n = +D[0], i = +D[1], R()) : [n, i];
  }, L.center = function(D) {
    return arguments.length ? (a = D[0] % 360 * en, u = D[1] % 360 * en, R()) : [a * xr, u * xr];
  }, L.rotate = function(D) {
    return arguments.length ? (l = D[0] % 360 * en, c = D[1] % 360 * en, f = D.length > 2 ? D[2] % 360 * en : 0, R()) : [l * xr, c * xr, f * xr];
  }, L.precision = function(D) {
    return arguments.length ? (w = Za(X, N = D * D), Y()) : Yi(N);
  }, L.fitExtent = function(D, H) {
    return Zu(L, D, H);
  }, L.fitSize = function(D, H) {
    return Pf(L, D, H);
  };
  function R() {
    g = Xu(h = df(l, c, f), t);
    var D = t(a, u);
    return o = n - D[0] * e, s = i + D[1] * e, Y();
  }
  function Y() {
    return M = A = null, L;
  }
  return function() {
    return t = r.apply(this, arguments), L.invert = t.invert && F, R();
  };
}
function Ju(r) {
  return function(t, e) {
    var n = bt(t), i = bt(e), o = r(n * i);
    return [
      o * i * Pt(t),
      o * Pt(e)
    ];
  };
}
function $u(r) {
  return function(t, e) {
    var n = Yi(t * t + e * e), i = r(n), o = Pt(i), s = bt(i);
    return [
      ki(t * o, n * s),
      ai(n && e * o / n)
    ];
  };
}
var Ff = Ju(function(r) {
  return Yi(2 / (1 + r));
});
Ff.invert = $u(function(r) {
  return 2 * ai(r / 2);
});
var tl = Ju(function(r) {
  return (r = qu(r)) && r / Pt(r);
});
tl.invert = $u(function(r) {
  return r;
});
function Bf() {
  return Mf(tl).scale(79.4188).clipAngle(180 - 1e-3);
}
function Ja(r, t) {
  return [r, t];
}
Ja.invert = Ja;
function kf(r, t, e) {
  e = e || {};
  var n = e.units || "kilometers", i = e.steps || 8;
  if (!r)
    throw new Error("geojson is required");
  if (typeof e != "object")
    throw new Error("options must be an object");
  if (typeof i != "number")
    throw new Error("steps must be an number");
  if (t === void 0)
    throw new Error("radius is required");
  if (i <= 0)
    throw new Error("steps must be greater than 0");
  var o = [];
  switch (r.type) {
    case "GeometryCollection":
      return du(r, function(s) {
        var a = Go(s, t, n, i);
        a && o.push(a);
      }), Ts(o);
    case "FeatureCollection":
      return Da(r, function(s) {
        var a = Go(s, t, n, i);
        a && Da(a, function(u) {
          u && o.push(u);
        });
      }), Ts(o);
  }
  return Go(r, t, n, i);
}
function Go(r, t, e, n) {
  var i = r.properties || {}, o = r.type === "Feature" ? r.geometry : r;
  if (o.type === "GeometryCollection") {
    var s = [];
    return du(r, function(d) {
      var v = Go(d, t, e, n);
      v && s.push(v);
    }), Ts(s);
  }
  var a = Gf(o), u = {
    type: o.type,
    coordinates: nl(o.coordinates, a)
  }, l = new Ks(), c = l.read(u), f = Uc(qc(t, e), "meters"), h = Ut.bufferOp(c, f, n), g = new Su();
  if (h = g.write(h), !el(h.coordinates)) {
    var p = {
      type: h.type,
      coordinates: rl(h.coordinates, a)
    };
    return $o(p, i);
  }
}
function el(r) {
  return Array.isArray(r[0]) ? el(r[0]) : isNaN(r[0]);
}
function nl(r, t) {
  return typeof r[0] != "object" ? t(r) : r.map(function(e) {
    return nl(e, t);
  });
}
function rl(r, t) {
  return typeof r[0] != "object" ? t.invert(r) : r.map(function(e) {
    return rl(e, t);
  });
}
function Gf(r) {
  var t = jc(r).geometry.coordinates, e = [-t[0], -t[1]];
  return Bf().rotate(e).scale(Ie);
}
function Vf(r, t) {
  var e = Uo(r), n = Uo(t), i = r.properties || {}, o = cu.difference(
    e.coordinates,
    n.coordinates
  );
  return o.length === 0 ? null : o.length === 1 ? hu(o[0], i) : gu(o, i);
}
function $a(r) {
  let t;
  for (const e of r)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function tu(r, t) {
  const e = Vf(
    {
      type: "Polygon",
      coordinates: [
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]
    },
    r
  );
  if (!e)
    return;
  e.properties = { isMask: "y" };
  const n = kf(r, 0);
  if (n.geometry.type === "Polygon")
    for (const i of n.geometry.coordinates)
      $a(i);
  else
    for (const i of n.geometry.coordinates)
      for (const o of i)
        $a(o);
  t({
    type: "FeatureCollection",
    features: [n, e]
  });
}
let eu = {
  type: "FeatureCollection",
  features: []
};
function zf(r, t, e = !0, n = !0, i = {}, o = {}, s = {
  fill: {
    paint: {
      "fill-color": "#000",
      "fill-opacity": 0.1
    },
    filter: ["all", ["==", ["geometry-type"], "Polygon"], ["has", "isMask"]]
  },
  line: {
    layout: {
      "line-cap": "square"
    },
    paint: {
      "line-width": ["case", ["==", ["geometry-type"], "Polygon"], 2, 3],
      "line-dasharray": [1, 1],
      "line-color": "#3170fe"
    },
    filter: ["!", ["has", "isMask"]]
  }
}) {
  let a, u = [], l, c;
  function f() {
    (s != null && s.fill || s != null && s.line) && r.addSource("full-geom", {
      type: "geojson",
      data: eu
    }), s != null && s.fill && r.addLayer({
      ...s == null ? void 0 : s.fill,
      id: "full-geom-fill",
      type: "fill",
      source: "full-geom"
    }), s != null && s.line && r.addLayer({
      ...s == null ? void 0 : s.line,
      id: "full-geom-line",
      type: "line",
      source: "full-geom"
    });
  }
  r.loaded() ? f() : r.once("load", () => {
    f();
  });
  const h = (p) => {
    a == null || a({
      type: "mapClick",
      coordinates: [p.lngLat.lng, p.lngLat.lat]
    });
  };
  function g(p = !1) {
    if (!t)
      throw new Error();
    const d = document.createElement("div");
    return p && d.classList.add("marker-interactive"), new Wc({
      props: { displayIn: "maplibre" },
      target: d
    }), new t.Marker({ element: d, offset: [1, -13] });
  }
  return {
    setEventHandler(p) {
      p ? (a = p, r.on("click", h)) : (a = void 0, r.off("click", h));
    },
    flyTo(p, d) {
      r.flyTo({ center: p, zoom: d, ...i });
    },
    fitBounds(p, d, v) {
      r.fitBounds(
        [
          [p[0], p[1]],
          [p[2], p[3]]
        ],
        { padding: d, maxZoom: v, ...o }
      );
    },
    indicateReverse(p) {
      r.getCanvasContainer().style.cursor = p ? "crosshair" : "";
    },
    setReverseMarker(p) {
      !t || !e || (c ? p ? c.setLngLat(p) : (c.remove(), c = void 0) : p && (c = (typeof e == "object" ? new t.Marker(e) : g()).setLngLat(p).addTo(r), c.getElement().classList.add("marker-reverse")));
    },
    setMarkers(p, d) {
      if (!e)
        return;
      function v(_) {
        var C;
        (C = r.getSource("full-geom")) == null || C.setData(_);
      }
      for (const _ of u)
        _.remove();
      if (u.length = 0, v(eu), !!t) {
        if (d) {
          let _ = !1;
          if (d.geometry.type === "GeometryCollection") {
            const C = d.geometry.geometries.filter(
              (E) => E.type === "Polygon" || E.type === "MultiPolygon"
            );
            if (C.length > 0) {
              let E = C.pop();
              for (const S of C)
                E = Xc(E, S);
              tu({ ...d, geometry: E }, v), _ = !0;
            } else {
              const E = d.geometry.geometries.filter(
                (S) => S.type === "LineString" || S.type === "MultiLineString"
              );
              E.length > 0 && (v({
                ...d,
                geometry: { type: "GeometryCollection", geometries: E }
              }), _ = !0);
            }
          }
          if (!_) {
            if (d.geometry.type === "Polygon" || d.geometry.type === "MultiPolygon")
              tu(d, v);
            else if (d.geometry.type === "LineString" || d.geometry.type === "MultiLineString") {
              v(d);
              return;
            }
          }
          e && u.push(
            (typeof e == "object" ? new t.Marker(e) : g()).setLngLat(d.center).addTo(r)
          );
        }
        if (n)
          for (const _ of p ?? []) {
            if (_ === d)
              continue;
            const C = (typeof n == "object" ? new t.Marker(n) : g(!0)).setLngLat(_.center).setPopup(
              new t.Popup({
                offset: [1, -27],
                closeButton: !1,
                closeOnMove: !0,
                className: "maptiler-gc-popup"
              }).setText(_.place_name.replace(/,.*/, ""))
            ).addTo(r), E = C.getElement();
            E.addEventListener("click", (S) => {
              S.stopPropagation(), a == null || a({ type: "markerClick", id: _.id });
            }), E.addEventListener("mouseenter", () => {
              a == null || a({ type: "markerMouseEnter", id: _.id }), C.togglePopup();
            }), E.addEventListener("mouseleave", () => {
              a == null || a({ type: "markerMouseLeave", id: _.id }), C.togglePopup();
            }), u.push(C);
          }
      }
    },
    setSelectedMarker(p) {
      l && l.getElement().classList.toggle("marker-selected", !1), l = p > -1 ? u[p] : void 0, l == null || l.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const p = r.getCenter();
      return [r.getZoom(), p.lng, p.lat];
    }
  };
}
var Ve, jr;
class Uf extends EventTarget {
  constructor(e = {}) {
    super();
    ms(this, Ve, void 0);
    ms(this, jr, void 0);
    bo(this, jr, e);
  }
  onAdd(e) {
    const n = document.createElement("div");
    n.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
    const {
      marker: i,
      showResultMarkers: o,
      flyTo: s,
      fullGeometryStyle: a,
      ...u
    } = $e(this, jr), l = typeof s == "boolean" ? {} : s, c = this.getExtraProps(e, n), h = {
      mapController: zf(
        e,
        this.getMapLibreGl(),
        i,
        o,
        l,
        l,
        a
      ),
      flyTo: s === void 0 ? !0 : !!s,
      apiKey: "",
      // just to satisfy apiKey; TODO find a better solution
      ...c,
      ...u
    };
    if (!h.apiKey)
      throw new Error("no apiKey provided");
    bo(this, Ve, new mc({ target: n, props: h }));
    for (const g of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      $e(this, Ve).$on(g, (p) => this.dispatchEvent(p));
    return n;
  }
  setOptions(e) {
    var u;
    bo(this, jr, e);
    const {
      marker: n,
      showResultMarkers: i,
      flyTo: o,
      fullGeometryStyle: s,
      ...a
    } = $e(this, jr);
    (u = $e(this, Ve)) == null || u.$set(a);
  }
  setQuery(e, n = !0) {
    var i;
    (i = $e(this, Ve)) == null || i.setQuery(e, n);
  }
  clearMap() {
    var e;
    (e = $e(this, Ve)) == null || e.clearMap();
  }
  clearList() {
    var e;
    (e = $e(this, Ve)) == null || e.clearList();
  }
  setReverseMode(e) {
    var n;
    (n = $e(this, Ve)) == null || n.$set({ reverseActive: e });
  }
  focus() {
    var e;
    (e = $e(this, Ve)) == null || e.focus();
  }
  blur() {
    var e;
    (e = $e(this, Ve)) == null || e.blur();
  }
  onRemove() {
    var e;
    (e = $e(this, Ve)) == null || e.$destroy();
  }
}
Ve = new WeakMap(), jr = new WeakMap();
class Yf extends Uf {
  getMapLibreGl() {
    return Sl;
  }
  getExtraProps(t, e) {
    const n = {};
    if (!("getSdkConfig" in t && typeof t.getSdkConfig == "function"))
      throw new Error("MapTiler SDK not detected");
    const { primaryLanguage: i, apiKey: o } = t.getSdkConfig();
    n.apiKey = o;
    const s = /^([a-z]{2})($|_|-)/.exec(i);
    return s && (n.language = s[1]), e.className += " maptiler-ctrl", n;
  }
}
export {
  Yf as GeocodingControl,
  zf as createMapLibreGlMapController
};
//# sourceMappingURL=maptilersdk.js.map
