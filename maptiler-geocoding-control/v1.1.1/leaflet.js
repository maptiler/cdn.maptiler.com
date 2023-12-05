var Sl = Object.defineProperty;
var xl = (n, t, e) => t in n ? Sl(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var ms = (n, t, e) => (xl(n, typeof t != "symbol" ? t + "" : t, e), e), ca = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var Cr = (n, t, e) => (ca(n, t, "read from private field"), e ? e.call(n) : t.get(n)), _s = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Po = (n, t, e, r) => (ca(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e);
import * as sn from "leaflet";
function It() {
}
function wl(n, t) {
  for (const e in t)
    n[e] = t[e];
  return (
    /** @type {T & S} */
    n
  );
}
function nu(n) {
  return n();
}
function fa() {
  return /* @__PURE__ */ Object.create(null);
}
function In(n) {
  n.forEach(nu);
}
function iu(n) {
  return typeof n == "function";
}
function Un(n, t) {
  return n != n ? t == t : n !== t || n && typeof n == "object" || typeof n == "function";
}
let Ro;
function Me(n, t) {
  return n === t ? !0 : (Ro || (Ro = document.createElement("a")), Ro.href = t, n === Ro.href);
}
function Ll(n) {
  return Object.keys(n).length === 0;
}
function bl(n, t, e, r) {
  if (n) {
    const i = ou(n, t, e, r);
    return n[0](i);
  }
}
function ou(n, t, e, r) {
  return n[1] && r ? wl(e.ctx.slice(), n[1](r(t))) : e.ctx;
}
function Pl(n, t, e, r) {
  if (n[2] && r) {
    const i = n[2](r(e));
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
function Rl(n, t, e, r, i, o) {
  if (i) {
    const s = ou(t, e, r, o);
    n.p(s, i);
  }
}
function Ol(n) {
  if (n.ctx.length > 32) {
    const t = [], e = n.ctx.length / 32;
    for (let r = 0; r < e; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function ha(n) {
  return n ?? "";
}
function rt(n, t) {
  n.appendChild(t);
}
function Tt(n, t, e) {
  n.insertBefore(t, e || null);
}
function wt(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ht(n) {
  return document.createElement(n);
}
function Qr(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Rn(n) {
  return document.createTextNode(n);
}
function Ue() {
  return Rn(" ");
}
function Tl() {
  return Rn("");
}
function Ce(n, t, e, r) {
  return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
}
function Dl(n) {
  return function(t) {
    return t.preventDefault(), n.call(this, t);
  };
}
function P(n, t, e) {
  e == null ? n.removeAttribute(t) : n.getAttribute(t) !== e && n.setAttribute(t, e);
}
function Ml(n) {
  return Array.from(n.childNodes);
}
function to(n, t) {
  t = "" + t, n.data !== t && (n.data = /** @type {string} */
  t);
}
function ga(n, t) {
  n.value = t ?? "";
}
function sr(n, t, e) {
  n.classList.toggle(t, !!e);
}
function Al(n, t, { bubbles: e = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: t, bubbles: e, cancelable: r });
}
let eo;
function Ji(n) {
  eo = n;
}
function su() {
  if (!eo)
    throw new Error("Function called outside component initialization");
  return eo;
}
function Fl(n) {
  su().$$.on_destroy.push(n);
}
function Bl() {
  const n = su();
  return (t, e, { cancelable: r = !1 } = {}) => {
    const i = n.$$.callbacks[t];
    if (i) {
      const o = Al(
        /** @type {string} */
        t,
        e,
        { cancelable: r }
      );
      return i.slice().forEach((s) => {
        s.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function pa(n, t) {
  const e = n.$$.callbacks[t.type];
  e && e.slice().forEach((r) => r.call(this, t));
}
const mi = [], xs = [];
let Ei = [];
const da = [], kl = /* @__PURE__ */ Promise.resolve();
let ws = !1;
function Gl() {
  ws || (ws = !0, kl.then(au));
}
function Ls(n) {
  Ei.push(n);
}
const Es = /* @__PURE__ */ new Set();
let yi = 0;
function au() {
  if (yi !== 0)
    return;
  const n = eo;
  do {
    try {
      for (; yi < mi.length; ) {
        const t = mi[yi];
        yi++, Ji(t), zl(t.$$);
      }
    } catch (t) {
      throw mi.length = 0, yi = 0, t;
    }
    for (Ji(null), mi.length = 0, yi = 0; xs.length; )
      xs.pop()();
    for (let t = 0; t < Ei.length; t += 1) {
      const e = Ei[t];
      Es.has(e) || (Es.add(e), e());
    }
    Ei.length = 0;
  } while (mi.length);
  for (; da.length; )
    da.pop()();
  ws = !1, Es.clear(), Ji(n);
}
function zl(n) {
  if (n.fragment !== null) {
    n.update(), In(n.before_update);
    const t = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, t), n.after_update.forEach(Ls);
  }
}
function Vl(n) {
  const t = [], e = [];
  Ei.forEach((r) => n.indexOf(r) === -1 ? t.push(r) : e.push(r)), e.forEach((r) => r()), Ei = t;
}
const Fo = /* @__PURE__ */ new Set();
let jn;
function Bo() {
  jn = {
    r: 0,
    c: [],
    p: jn
    // parent group
  };
}
function ko() {
  jn.r || In(jn.c), jn = jn.p;
}
function At(n, t) {
  n && n.i && (Fo.delete(n), n.i(t));
}
function $t(n, t, e, r) {
  if (n && n.o) {
    if (Fo.has(n))
      return;
    Fo.add(n), jn.c.push(() => {
      Fo.delete(n), r && (e && n.d(1), r());
    }), n.o(t);
  } else
    r && r();
}
function va(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Ul(n, t) {
  $t(n, 1, 1, () => {
    t.delete(n.key);
  });
}
function ql(n, t, e, r, i, o, s, a, u, l, c, f) {
  let h = n.length, g = o.length, p = h;
  const y = {};
  for (; p--; )
    y[n[p].key] = p;
  const d = [], E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), _ = [];
  for (p = g; p--; ) {
    const R = f(i, o, p), D = e(R);
    let L = s.get(D);
    L ? r && _.push(() => L.p(R, t)) : (L = l(D, R), L.c()), E.set(D, d[p] = L), D in y && C.set(D, Math.abs(p - y[D]));
  }
  const x = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
  function T(R) {
    At(R, 1), R.m(a, c), s.set(R.key, R), c = R.first, g--;
  }
  for (; h && g; ) {
    const R = d[g - 1], D = n[h - 1], L = R.key, A = D.key;
    R === D ? (c = R.first, h--, g--) : E.has(A) ? !s.has(L) || x.has(L) ? T(R) : w.has(A) ? h-- : C.get(L) > C.get(A) ? (w.add(L), T(R)) : (x.add(A), h--) : (u(D, s), h--);
  }
  for (; h--; ) {
    const R = n[h];
    E.has(R.key) || u(R, s);
  }
  for (; g; )
    T(d[g - 1]);
  return In(_), d;
}
function On(n) {
  n && n.c();
}
function cn(n, t, e) {
  const { fragment: r, after_update: i } = n.$$;
  r && r.m(t, e), Ls(() => {
    const o = n.$$.on_mount.map(nu).filter(iu);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : In(o), n.$$.on_mount = [];
  }), i.forEach(Ls);
}
function fn(n, t) {
  const e = n.$$;
  e.fragment !== null && (Vl(e.after_update), In(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Xl(n, t) {
  n.$$.dirty[0] === -1 && (mi.push(n), Gl(), n.$$.dirty.fill(0)), n.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function qn(n, t, e, r, i, o, s = null, a = [-1]) {
  const u = eo;
  Ji(n);
  const l = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: It,
    not_equal: i,
    bound: fa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: fa(),
    dirty: a,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  s && s(l.root);
  let c = !1;
  if (l.ctx = e ? e(n, t.props || {}, (f, h, ...g) => {
    const p = g.length ? g[0] : h;
    return l.ctx && i(l.ctx[f], l.ctx[f] = p) && (!l.skip_bound && l.bound[f] && l.bound[f](p), c && Xl(n, f)), h;
  }) : [], l.update(), c = !0, In(l.before_update), l.fragment = r ? r(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Ml(t.target);
      l.fragment && l.fragment.l(f), f.forEach(wt);
    } else
      l.fragment && l.fragment.c();
    t.intro && At(n.$$.fragment), cn(n, t.target, t.anchor), au();
  }
  Ji(u);
}
class Xn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ms(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ms(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    fn(this, 1), this.$destroy = It;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!iu(e))
      return It;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(e), () => {
      const i = r.indexOf(e);
      i !== -1 && r.splice(i, 1);
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
function Hl(n) {
  let t, e;
  return {
    c() {
      t = Qr("svg"), e = Qr("path"), P(e, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), P(t, "viewBox", "0 0 14 14"), P(t, "width", "13"), P(t, "height", "13"), P(t, "class", "svelte-en2qvf");
    },
    m(r, i) {
      Tt(r, t, i), rt(t, e);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && wt(t);
    }
  };
}
class uu extends Xn {
  constructor(t) {
    super(), qn(this, t, null, Hl, Un, {});
  }
}
function Wl(n) {
  let t, e;
  return {
    c() {
      t = Qr("svg"), e = Qr("path"), P(e, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), P(t, "viewBox", "0 0 30 30"), P(t, "fill", "none"), P(t, "xmlns", "http://www.w3.org/2000/svg"), P(t, "class", "svelte-d2loi5");
    },
    m(r, i) {
      Tt(r, t, i), rt(t, e);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && wt(t);
    }
  };
}
class lu extends Xn {
  constructor(t) {
    super(), qn(this, t, null, Wl, Un, {});
  }
}
function jl(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "area.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Tt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "area.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && wt(t);
    }
  };
}
function Ql(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "poi.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Tt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "poi.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && wt(t);
    }
  };
}
function Kl(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Tt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && wt(t);
    }
  };
}
function Zl(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "street.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Tt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "street.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && wt(t);
    }
  };
}
function Jl(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "road.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Tt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "road.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && wt(t);
    }
  };
}
function $l(n) {
  let t, e;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || P(t, "src", e), P(
        t,
        "alt",
        /*placeType*/
        n[6]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(r, i) {
      Tt(r, t, i);
    },
    p(r, i) {
      i & /*iconsBaseUrl*/
      8 && !Me(t.src, e = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && P(t, "src", e), i & /*placeType*/
      64 && P(
        t,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && wt(t);
    }
  };
}
function tc(n) {
  let t, e, r, i;
  return {
    c() {
      t = ht("img"), Me(t.src, e = /*imageUrl*/
      n[5]) || P(t, "src", e), P(
        t,
        "alt",
        /*category*/
        n[4]
      ), P(t, "class", "svelte-ltkwvy");
    },
    m(o, s) {
      Tt(o, t, s), r || (i = Ce(
        t,
        "error",
        /*error_handler*/
        n[13]
      ), r = !0);
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
      o && wt(t), r = !1, i();
    }
  };
}
function ya(n) {
  let t, e;
  return {
    c() {
      t = ht("span"), e = Rn(
        /*placeType*/
        n[6]
      ), P(t, "class", "secondary svelte-ltkwvy");
    },
    m(r, i) {
      Tt(r, t, i), rt(t, e);
    },
    p(r, i) {
      i & /*placeType*/
      64 && to(
        e,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && wt(t);
    }
  };
}
function ec(n) {
  var R, D;
  let t, e, r, i, o, s, a, u, l = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), c, f, h = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((R = n[0].properties) == null ? void 0 : R.kind) !== "road" && /*feature*/
    ((D = n[0].properties) == null ? void 0 : D.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5])
  ), g, p, y = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), d, E, C;
  function _(L, A) {
    var Y, G;
    return A & /*feature*/
    1 && (e = null), A & /*feature*/
    1 && (r = null), A & /*feature*/
    1 && (i = null), /*imageUrl*/
    L[5] ? tc : (
      /*feature*/
      L[0].address ? $l : (
        /*feature*/
        ((Y = L[0].properties) == null ? void 0 : Y.kind) === "road" || /*feature*/
        ((G = L[0].properties) == null ? void 0 : G.kind) === "road_relation" ? Jl : (e == null && (e = !!/*feature*/
        L[0].id.startsWith("address.")), e ? Zl : (r == null && (r = !!/*feature*/
        L[0].id.startsWith("postal_code.")), r ? Kl : (i == null && (i = !!/*feature*/
        L[0].id.startsWith("poi.")), i ? Ql : jl)))
      )
    );
  }
  let x = _(n, -1), w = x(n), T = h && ya(n);
  return {
    c() {
      t = ht("li"), w.c(), o = Ue(), s = ht("span"), a = ht("span"), u = ht("span"), c = Rn(l), f = Ue(), T && T.c(), g = Ue(), p = ht("span"), d = Rn(y), P(u, "class", "primary svelte-ltkwvy"), P(a, "class", "svelte-ltkwvy"), P(p, "class", "line2 svelte-ltkwvy"), P(s, "class", "texts svelte-ltkwvy"), P(t, "tabindex", "0"), P(
        t,
        "data-selected",
        /*selected*/
        n[1]
      ), P(t, "class", "svelte-ltkwvy"), sr(
        t,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(L, A) {
      Tt(L, t, A), w.m(t, null), rt(t, o), rt(t, s), rt(s, a), rt(a, u), rt(u, c), rt(a, f), T && T.m(a, null), rt(s, g), rt(s, p), rt(p, d), E || (C = [
        Ce(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          n[11]
        ),
        Ce(
          t,
          "focus",
          /*focus_handler*/
          n[12]
        )
      ], E = !0);
    },
    p(L, [A]) {
      var Y, G;
      x === (x = _(L, A)) && w ? w.p(L, A) : (w.d(1), w = x(L), w && (w.c(), w.m(t, o))), A & /*feature*/
      1 && l !== (l = /*feature*/
      L[0].place_name.replace(/,.*/, "") + "") && to(c, l), A & /*showPlaceType, feature, imageUrl*/
      37 && (h = /*showPlaceType*/
      L[2] === "always" || /*showPlaceType*/
      L[2] && !/*feature*/
      L[0].address && /*feature*/
      ((Y = L[0].properties) == null ? void 0 : Y.kind) !== "road" && /*feature*/
      ((G = L[0].properties) == null ? void 0 : G.kind) !== "road_relation" && !/*feature*/
      L[0].id.startsWith("address.") && !/*feature*/
      L[0].id.startsWith("postal_code.") && (!/*feature*/
      L[0].id.startsWith("poi.") || !/*imageUrl*/
      L[5])), h ? T ? T.p(L, A) : (T = ya(L), T.c(), T.m(a, null)) : T && (T.d(1), T = null), A & /*feature*/
      1 && y !== (y = /*feature*/
      L[0].place_name.replace(/[^,]*,?\s*/, "") + "") && to(d, y), A & /*selected*/
      2 && P(
        t,
        "data-selected",
        /*selected*/
        L[1]
      ), A & /*selected*/
      2 && sr(
        t,
        "selected",
        /*selected*/
        L[1]
      );
    },
    i: It,
    o: It,
    d(L) {
      L && wt(t), w.d(), T && T.d(), E = !1, In(C);
    }
  };
}
function rc(n, t, e) {
  var C;
  let r, i, { feature: o } = t, { selected: s = !1 } = t, { showPlaceType: a } = t, { missingIconsCache: u } = t, { iconsBaseUrl: l } = t;
  const c = (C = o.properties) == null ? void 0 : C.categories;
  let f, h, g = 0;
  function p(_) {
    h && u.add(h), e(9, g++, g);
  }
  function y(_) {
    pa.call(this, n, _);
  }
  function d(_) {
    pa.call(this, n, _);
  }
  const E = (_) => p(_.currentTarget);
  return n.$$set = (_) => {
    "feature" in _ && e(0, o = _.feature), "selected" in _ && e(1, s = _.selected), "showPlaceType" in _ && e(2, a = _.showPlaceType), "missingIconsCache" in _ && e(8, u = _.missingIconsCache), "iconsBaseUrl" in _ && e(3, l = _.iconsBaseUrl);
  }, n.$$.update = () => {
    var _, x, w, T;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    1848)
      do
        e(10, r--, r), e(4, f = c == null ? void 0 : c[r]), e(5, h = f ? l + f.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!h || u.has(h)));
    n.$$.dirty & /*feature*/
    1 && e(6, i = o.id.startsWith("poi.") ? (x = (_ = o.properties) == null ? void 0 : _.categories) == null ? void 0 : x.join(", ") : ((T = (w = o.properties) == null ? void 0 : w.place_type_name) == null ? void 0 : T[0]) ?? o.place_type[0]);
  }, e(10, r = (c == null ? void 0 : c.length) ?? 0), [
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
    r,
    y,
    d,
    E
  ];
}
class nc extends Xn {
  constructor(t) {
    super(), qn(this, t, rc, ec, Un, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function ic(n) {
  let t;
  return {
    c() {
      t = ht("div"), t.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', P(t, "class", "svelte-7cmwmc");
    },
    m(e, r) {
      Tt(e, t, r);
    },
    p: It,
    i: It,
    o: It,
    d(e) {
      e && wt(t);
    }
  };
}
class oc extends Xn {
  constructor(t) {
    super(), qn(this, t, null, ic, Un, {});
  }
}
function sc(n) {
  let t, e, r;
  return {
    c() {
      t = Qr("svg"), e = Qr("path"), P(e, "stroke-width", "4"), P(e, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), P(e, "class", "svelte-gzo3ar"), P(t, "width", r = /*displayIn*/
      n[0] === "list" ? 20 : void 0), P(t, "viewBox", "0 0 70 85"), P(t, "fill", "none"), P(t, "class", "svelte-gzo3ar"), sr(
        t,
        "in-map",
        /*displayIn*/
        n[0] !== "list"
      ), sr(
        t,
        "list-icon",
        /*displayIn*/
        n[0] === "list"
      );
    },
    m(i, o) {
      Tt(i, t, o), rt(t, e);
    },
    p(i, [o]) {
      o & /*displayIn*/
      1 && r !== (r = /*displayIn*/
      i[0] === "list" ? 20 : void 0) && P(t, "width", r), o & /*displayIn*/
      1 && sr(
        t,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), o & /*displayIn*/
      1 && sr(
        t,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    i: It,
    o: It,
    d(i) {
      i && wt(t);
    }
  };
}
function ac(n, t, e) {
  let { displayIn: r } = t;
  return n.$$set = (i) => {
    "displayIn" in i && e(0, r = i.displayIn);
  }, [r];
}
class uc extends Xn {
  constructor(t) {
    super(), qn(this, t, ac, sc, Un, { displayIn: 0 });
  }
}
function lc(n) {
  let t, e;
  return {
    c() {
      t = Qr("svg"), e = Qr("path"), P(e, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), P(t, "viewBox", "0 0 60.006 21.412"), P(t, "width", "14"), P(t, "height", "20"), P(t, "class", "svelte-en2qvf");
    },
    m(r, i) {
      Tt(r, t, i), rt(t, e);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && wt(t);
    }
  };
}
class cc extends Xn {
  constructor(t) {
    super(), qn(this, t, null, lc, Un, {});
  }
}
function fc(n) {
  let t, e;
  return {
    c() {
      t = Qr("svg"), e = Qr("path"), P(e, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), P(t, "width", "14"), P(t, "height", "14"), P(t, "viewBox", "0 0 15 15"), P(t, "class", "svelte-en2qvf");
    },
    m(r, i) {
      Tt(r, t, i), rt(t, e);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && wt(t);
    }
  };
}
class hc extends Xn {
  constructor(t) {
    super(), qn(this, t, null, fc, Un, {});
  }
}
function gc(n, t, e) {
  const r = t[1], i = t[0], o = r - i;
  return n === r && e ? n : ((n - i) % o + o) % o + i;
}
function ma(n) {
  const t = [...n];
  return t[2] < t[0] && (t[2] += 360), t;
}
let Wi;
async function pc(n, t, e) {
  const r = n == null ? void 0 : n.getCenterAndZoom();
  for (const i of t ?? [])
    if (!(r && (i.minZoom != null && i.minZoom > r[0] || i.maxZoom != null && i.maxZoom < r[0]))) {
      if (i.type === "fixed")
        return i.coordinates.join(",");
      t:
        if (i.type === "client-geolocation") {
          if (Wi && i.cachedLocationExpiry && Wi.time + i.cachedLocationExpiry > Date.now()) {
            if (!Wi.coords)
              break t;
            return Wi.coords;
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
            i.cachedLocationExpiry && (Wi = {
              time: Date.now(),
              coords: o
            });
          }
          if (e.signal.aborted)
            return;
        }
      if (i.type === "server-geolocation")
        return "ip";
      if (r && i.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
function _a(n, t, e) {
  const r = n.slice();
  return r[78] = t[e], r[80] = e, r;
}
function Ea(n) {
  let t, e;
  return t = new oc({}), {
    c() {
      On(t.$$.fragment);
    },
    m(r, i) {
      cn(t, r, i), e = !0;
    },
    i(r) {
      e || (At(t.$$.fragment, r), e = !0);
    },
    o(r) {
      $t(t.$$.fragment, r), e = !1;
    },
    d(r) {
      fn(t, r);
    }
  };
}
function Ia(n) {
  let t, e, r, i, o;
  return e = new cc({}), {
    c() {
      t = ht("button"), On(e.$$.fragment), P(t, "type", "button"), P(
        t,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), P(t, "class", "svelte-1r7dvt7"), sr(
        t,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(s, a) {
      Tt(s, t, a), cn(e, t, null), r = !0, i || (o = Ce(
        t,
        "click",
        /*click_handler_2*/
        n[64]
      ), i = !0);
    },
    p(s, a) {
      (!r || a[0] & /*reverseButtonTitle*/
      512) && P(
        t,
        "title",
        /*reverseButtonTitle*/
        s[9]
      ), (!r || a[0] & /*reverseActive*/
      1) && sr(
        t,
        "active",
        /*reverseActive*/
        s[0]
      );
    },
    i(s) {
      r || (At(e.$$.fragment, s), r = !0);
    },
    o(s) {
      $t(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && wt(t), fn(e), i = !1, o();
    }
  };
}
function dc(n) {
  let t, e = [], r = /* @__PURE__ */ new Map(), i, o, s, a = va(
    /*listFeatures*/
    n[13]
  );
  const u = (l) => (
    /*feature*/
    l[78].id + /*feature*/
    (l[78].address ? "," + /*feature*/
    l[78].address : "")
  );
  for (let l = 0; l < a.length; l += 1) {
    let c = _a(n, a, l), f = u(c);
    r.set(f, e[l] = Ca(f, c));
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
          n[68]
        ),
        Ce(
          t,
          "blur",
          /*blur_handler_1*/
          n[69]
        )
      ], o = !0);
    },
    p(l, c) {
      c[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (a = va(
        /*listFeatures*/
        l[13]
      ), Bo(), e = ql(e, c, u, 1, l, a, r, t, Ul, Ca, null, _a), ko());
    },
    i(l) {
      if (!i) {
        for (let c = 0; c < a.length; c += 1)
          At(e[c]);
        i = !0;
      }
    },
    o(l) {
      for (let c = 0; c < e.length; c += 1)
        $t(e[c]);
      i = !1;
    },
    d(l) {
      l && wt(t);
      for (let c = 0; c < e.length; c += 1)
        e[c].d();
      o = !1, In(s);
    }
  };
}
function vc(n) {
  let t, e, r, i, o, s;
  return e = new lu({}), {
    c() {
      t = ht("div"), On(e.$$.fragment), r = Ue(), i = ht("div"), o = Rn(
        /*noResultsMessage*/
        n[7]
      ), P(i, "class", "svelte-1r7dvt7"), P(t, "class", "no-results svelte-1r7dvt7");
    },
    m(a, u) {
      Tt(a, t, u), cn(e, t, null), rt(t, r), rt(t, i), rt(i, o), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*noResultsMessage*/
      128) && to(
        o,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      s || (At(e.$$.fragment, a), s = !0);
    },
    o(a) {
      $t(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && wt(t), fn(e);
    }
  };
}
function yc(n) {
  let t = "", e;
  return {
    c() {
      e = Rn(t);
    },
    m(r, i) {
      Tt(r, e, i);
    },
    p: It,
    i: It,
    o: It,
    d(r) {
      r && wt(e);
    }
  };
}
function mc(n) {
  let t, e, r, i, o, s, a, u, l, c, f;
  return e = new lu({}), u = new uu({}), {
    c() {
      t = ht("div"), On(e.$$.fragment), r = Ue(), i = ht("div"), o = Rn(
        /*errorMessage*/
        n[6]
      ), s = Ue(), a = ht("button"), On(u.$$.fragment), P(i, "class", "svelte-1r7dvt7"), P(a, "class", "svelte-1r7dvt7"), P(t, "class", "error svelte-1r7dvt7");
    },
    m(h, g) {
      Tt(h, t, g), cn(e, t, null), rt(t, r), rt(t, i), rt(i, o), rt(t, s), rt(t, a), cn(u, a, null), l = !0, c || (f = Ce(
        a,
        "click",
        /*click_handler_3*/
        n[65]
      ), c = !0);
    },
    p(h, g) {
      (!l || g[0] & /*errorMessage*/
      64) && to(
        o,
        /*errorMessage*/
        h[6]
      );
    },
    i(h) {
      l || (At(e.$$.fragment, h), At(u.$$.fragment, h), l = !0);
    },
    o(h) {
      $t(e.$$.fragment, h), $t(u.$$.fragment, h), l = !1;
    },
    d(h) {
      h && wt(t), fn(e), fn(u), c = !1, f();
    }
  };
}
function Ca(n, t) {
  let e, r, i;
  function o() {
    return (
      /*mouseenter_handler*/
      t[66](
        /*i*/
        t[80]
      )
    );
  }
  function s() {
    return (
      /*focus_handler_1*/
      t[67](
        /*feature*/
        t[78]
      )
    );
  }
  return r = new nc({
    props: {
      feature: (
        /*feature*/
        t[78]
      ),
      showPlaceType: (
        /*showPlaceType*/
        t[10]
      ),
      selected: (
        /*selectedItemIndex*/
        t[14] === /*i*/
        t[80]
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
  }), r.$on("mouseenter", o), r.$on("focus", s), {
    key: n,
    first: null,
    c() {
      e = Tl(), On(r.$$.fragment), this.first = e;
    },
    m(a, u) {
      Tt(a, e, u), cn(r, a, u), i = !0;
    },
    p(a, u) {
      t = a;
      const l = {};
      u[0] & /*listFeatures*/
      8192 && (l.feature = /*feature*/
      t[78]), u[0] & /*showPlaceType*/
      1024 && (l.showPlaceType = /*showPlaceType*/
      t[10]), u[0] & /*selectedItemIndex, listFeatures*/
      24576 && (l.selected = /*selectedItemIndex*/
      t[14] === /*i*/
      t[80]), u[0] & /*iconsBaseUrl*/
      2048 && (l.iconsBaseUrl = /*iconsBaseUrl*/
      t[11]), r.$set(l);
    },
    i(a) {
      i || (At(r.$$.fragment, a), i = !0);
    },
    o(a) {
      $t(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && wt(e), fn(r, a);
    }
  };
}
function _c(n) {
  let t, e, r, i, o, s, a, u, l, c, f, h, g, p, y, d, E, C, _, x, w, T = !1;
  o = new hc({}), f = new uu({});
  let R = (
    /*abortController*/
    n[18] && Ea()
  ), D = (
    /*enableReverse*/
    n[5] === !0 && Ia(n)
  );
  const L = (
    /*#slots*/
    n[56].default
  ), A = bl(
    L,
    n,
    /*$$scope*/
    n[55],
    null
  ), Y = [mc, yc, vc, dc], G = [];
  function ot(N, k) {
    var Q, dt;
    return (
      /*error*/
      N[17] ? 0 : (
        /*focusedDelayed*/
        N[15] ? (
          /*listFeatures*/
          ((Q = N[13]) == null ? void 0 : Q.length) === 0 ? 2 : (
            /*focusedDelayed*/
            N[15] && /*listFeatures*/
            ((dt = N[13]) != null && dt.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(d = ot(n)) && (E = G[d] = Y[d](n)), {
    c() {
      t = Ue(), e = ht("form"), r = ht("div"), i = ht("button"), On(o.$$.fragment), s = Ue(), a = ht("input"), u = Ue(), l = ht("div"), c = ht("button"), On(f.$$.fragment), h = Ue(), R && R.c(), g = Ue(), D && D.c(), p = Ue(), A && A.c(), y = Ue(), E && E.c(), P(i, "class", "search-button svelte-1r7dvt7"), P(i, "type", "button"), P(
        a,
        "placeholder",
        /*placeholder*/
        n[8]
      ), P(
        a,
        "aria-label",
        /*placeholder*/
        n[8]
      ), P(a, "class", "svelte-1r7dvt7"), P(c, "type", "button"), P(
        c,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), P(c, "class", "svelte-1r7dvt7"), P(l, "class", "clear-button-container svelte-1r7dvt7"), sr(
        l,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), P(r, "class", "input-group svelte-1r7dvt7"), P(e, "tabindex", "0"), P(e, "class", C = ha(
        /*className*/
        n[2]
      ) + " svelte-1r7dvt7"), sr(
        e,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(N, k) {
      Tt(N, t, k), Tt(N, e, k), rt(e, r), rt(r, i), cn(o, i, null), rt(r, s), rt(r, a), n[58](a), ga(
        a,
        /*searchValue*/
        n[1]
      ), rt(r, u), rt(r, l), rt(l, c), cn(f, c, null), rt(l, h), R && R.m(l, null), rt(r, g), D && D.m(r, null), rt(r, p), A && A.m(r, null), rt(e, y), ~d && G[d].m(e, null), _ = !0, x || (w = [
        Ce(
          i,
          "click",
          /*click_handler*/
          n[57]
        ),
        Ce(
          a,
          "input",
          /*input_1_input_handler*/
          n[59]
        ),
        Ce(
          a,
          "focus",
          /*focus_handler*/
          n[60]
        ),
        Ce(
          a,
          "blur",
          /*blur_handler*/
          n[61]
        ),
        Ce(
          a,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        Ce(
          a,
          "input",
          /*input_handler*/
          n[62]
        ),
        Ce(
          c,
          "click",
          /*click_handler_1*/
          n[63]
        ),
        Ce(e, "submit", Dl(
          /*handleOnSubmit*/
          n[20]
        ))
      ], x = !0);
    },
    p(N, k) {
      (!_ || k[0] & /*placeholder*/
      256) && P(
        a,
        "placeholder",
        /*placeholder*/
        N[8]
      ), (!_ || k[0] & /*placeholder*/
      256) && P(
        a,
        "aria-label",
        /*placeholder*/
        N[8]
      ), k[0] & /*searchValue*/
      2 && a.value !== /*searchValue*/
      N[1] && ga(
        a,
        /*searchValue*/
        N[1]
      ), (!_ || k[0] & /*clearButtonTitle*/
      8) && P(
        c,
        "title",
        /*clearButtonTitle*/
        N[3]
      ), /*abortController*/
      N[18] ? R ? k[0] & /*abortController*/
      262144 && At(R, 1) : (R = Ea(), R.c(), At(R, 1), R.m(l, null)) : R && (Bo(), $t(R, 1, 1, () => {
        R = null;
      }), ko()), (!_ || k[0] & /*searchValue*/
      2) && sr(
        l,
        "displayable",
        /*searchValue*/
        N[1] !== ""
      ), /*enableReverse*/
      N[5] === !0 ? D ? (D.p(N, k), k[0] & /*enableReverse*/
      32 && At(D, 1)) : (D = Ia(N), D.c(), At(D, 1), D.m(r, p)) : D && (Bo(), $t(D, 1, 1, () => {
        D = null;
      }), ko()), A && A.p && (!_ || k[1] & /*$$scope*/
      16777216) && Rl(
        A,
        L,
        N,
        /*$$scope*/
        N[55],
        _ ? Pl(
          L,
          /*$$scope*/
          N[55],
          k,
          null
        ) : Ol(
          /*$$scope*/
          N[55]
        ),
        null
      );
      let Q = d;
      d = ot(N), d === Q ? ~d && G[d].p(N, k) : (E && (Bo(), $t(G[Q], 1, 1, () => {
        G[Q] = null;
      }), ko()), ~d ? (E = G[d], E ? E.p(N, k) : (E = G[d] = Y[d](N), E.c()), At(E, 1), E.m(e, null)) : E = null), (!_ || k[0] & /*className*/
      4 && C !== (C = ha(
        /*className*/
        N[2]
      ) + " svelte-1r7dvt7")) && P(e, "class", C), (!_ || k[0] & /*className, collapsed, searchValue*/
      22) && sr(
        e,
        "can-collapse",
        /*collapsed*/
        N[4] && /*searchValue*/
        N[1] === ""
      );
    },
    i(N) {
      _ || (At(T), At(o.$$.fragment, N), At(f.$$.fragment, N), At(R), At(D), At(A, N), At(E), _ = !0);
    },
    o(N) {
      $t(T), $t(o.$$.fragment, N), $t(f.$$.fragment, N), $t(R), $t(D), $t(A, N), $t(E), _ = !1;
    },
    d(N) {
      N && (wt(t), wt(e)), fn(o), n[58](null), fn(f), R && R.d(), D && D.d(), A && A.d(N), ~d && G[d].d(), x = !1, In(w);
    }
  };
}
function Ec(n, t, e) {
  let r, { $$slots: i = {}, $$scope: o } = t, { class: s = void 0 } = t, { apiKey: a } = t, { bbox: u = void 0 } = t, { clearButtonTitle: l = "clear" } = t, { clearOnBlur: c = !1 } = t, { collapsed: f = !1 } = t, { country: h = void 0 } = t, { debounceSearch: g = 200 } = t, { enableReverse: p = !1 } = t, { errorMessage: y = "Something went wrong…" } = t, { filter: d = () => !0 } = t, { flyTo: E = !0 } = t, { fuzzyMatch: C = !0 } = t, { language: _ = void 0 } = t, { limit: x = void 0 } = t, { mapController: w = void 0 } = t, { minLength: T = 2 } = t, { noResultsMessage: R = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = t, { placeholder: D = "Search" } = t, { proximity: L = [{ type: "server-geolocation" }] } = t, { reverseActive: A = p === "always" } = t, { reverseButtonTitle: Y = "toggle reverse geocoding" } = t, { searchValue: G = "" } = t, { showFullGeometry: ot = !0 } = t, { showPlaceType: N = "ifNeeded" } = t, { showResultsWhileTyping: k = !0 } = t, { types: Q = void 0 } = t, { excludeTypes: dt = !1 } = t, { zoom: Wt = 16 } = t, { maxZoom: Jt = 18 } = t, { apiUrl: on = "https://api.maptiler.com/geocoding" } = t, { fetchParameters: ze = {} } = t, { iconsBaseUrl: Br = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.1.1/icons/" } = t, { adjustUrlQuery: Ve = (S) => {
  } } = t;
  function pi() {
    kr.focus();
  }
  function Cn() {
    kr.blur();
  }
  function oa(S, Gt = !0) {
    e(1, G = S), Gt ? (e(14, Mt = -1), aa()) : (ds(), setTimeout(() => {
      kr.focus(), kr.select();
    }));
  }
  function ol() {
    e(13, lt = void 0), e(52, nt = void 0), e(14, Mt = -1);
  }
  function sl() {
    e(51, pe = []), e(52, nt = void 0);
  }
  let di = !1, lt, pe, nt, sa = "", kr, Mt = -1, Gr, xo = [], Wn, vi, wo, gs;
  const al = /* @__PURE__ */ new Set(), Nn = Bl();
  Fl(() => {
    w && (w.setEventHandler(void 0), w.indicateReverse(!1), w.setSelectedMarker(-1), w.setMarkers(void 0, void 0));
  });
  function aa(S) {
    if (vi && (clearTimeout(vi), vi = void 0), Mt > -1 && lt)
      e(52, nt = lt[Mt]), e(1, G = nt.place_name.replace(/,.*/, "")), e(17, Gr = void 0), e(51, pe = void 0), e(14, Mt = -1);
    else if (G) {
      const Gt = S || !ua();
      ps(G, { exact: !0 }).then(() => {
        e(51, pe = lt), e(52, nt = void 0), Gt && ul();
      }).catch((zr) => e(17, Gr = zr));
    }
  }
  function ua() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(G);
  }
  async function ps(S, { byId: Gt = !1, exact: zr = !1 } = {}) {
    e(17, Gr = void 0), Wn == null || Wn.abort();
    const Vr = new AbortController();
    e(18, Wn = Vr);
    try {
      const Ee = ua(), tr = new URLSearchParams();
      if (_ !== void 0 && tr.set("language", Array.isArray(_) ? _.join(",") : _ ?? ""), Q && tr.set("types", Q.join(",")), dt && tr.set("excludeTypes", String(dt)), u && tr.set("bbox", u.map((bo) => bo.toFixed(6)).join(",")), h && tr.set("country", Array.isArray(h) ? h.join(",") : h), !Gt && !Ee) {
        const bo = await pc(w, L, Vr);
        bo && tr.set("proximity", bo), (zr || !k) && tr.set("autocomplete", "false"), tr.set("fuzzyMatch", String(C));
      }
      x !== void 0 && (!Ee || (Q == null ? void 0 : Q.length) === 1) && tr.set("limit", String(x)), tr.set("key", a), Ve(tr);
      const Lo = on + "/" + encodeURIComponent(S) + ".json?" + tr.toString();
      if (Lo === sa) {
        Gt ? (e(13, lt = void 0), e(52, nt = xo[0])) : e(13, lt = xo);
        return;
      }
      sa = Lo;
      const la = await fetch(Lo, { signal: Vr.signal, ...ze });
      if (!la.ok)
        throw new Error();
      const ys = await la.json();
      Nn("response", { url: Lo, featureCollection: ys }), Gt ? (e(13, lt = void 0), e(52, nt = ys.features[0]), xo = [nt]) : (e(13, lt = ys.features.filter(d)), xo = lt, Ee && kr.focus());
    } catch (Ee) {
      if (Ee && typeof Ee == "object" && "name" in Ee && Ee.name === "AbortError")
        return;
      throw Ee;
    } finally {
      Vr === Wn && e(18, Wn = void 0);
    }
  }
  function ul() {
    var zr;
    if (!(pe != null && pe.length) || !E)
      return;
    const S = [180, 90, -180, -90], Gt = !pe.some((Vr) => !Vr.matching_text);
    for (const Vr of pe)
      if (Gt || !Vr.matching_text)
        for (const Ee of [0, 1, 2, 3])
          S[Ee] = Math[Ee < 2 ? "min" : "max"](S[Ee], ((zr = Vr.bbox) == null ? void 0 : zr[Ee]) ?? Vr.center[Ee % 2]);
    w && pe.length > 0 && (nt && S[0] === S[2] && S[1] === S[3] ? w.flyTo(nt.center, Wt) : w.fitBounds(ma(S), 50, Jt));
  }
  function ll(S) {
    e(0, A = p === "always"), oa(gc(S[0], [-180, 180], !0).toFixed(6) + "," + S[1].toFixed(6));
  }
  function cl(S) {
    if (!lt)
      return;
    let Gt = S.key === "ArrowDown" ? 1 : S.key === "ArrowUp" ? -1 : 0;
    Gt ? (Mt === -1 && Gt === -1 && e(14, Mt = lt.length), e(14, Mt += Gt), Mt >= lt.length && e(14, Mt = -1), S.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(S.key) && e(14, Mt = -1);
  }
  function ds(S = !0) {
    if (e(17, Gr = void 0), k) {
      if (vi && clearTimeout(vi), G.length < T)
        return;
      const Gt = G;
      vi = window.setTimeout(
        () => {
          ps(Gt).catch((zr) => e(17, Gr = zr));
        },
        S ? g : 0
      );
    } else
      e(13, lt = void 0), e(17, Gr = void 0);
  }
  function vs(S) {
    e(52, nt = S), e(1, G = S.place_name), e(14, Mt = -1);
  }
  const fl = () => kr.focus();
  function hl(S) {
    xs[S ? "unshift" : "push"](() => {
      kr = S, e(16, kr);
    });
  }
  function gl() {
    G = this.value, e(1, G), e(12, di), e(26, c);
  }
  const pl = () => e(12, di = !0), dl = () => e(12, di = !1), vl = () => ds(), yl = () => {
    e(1, G = ""), kr.focus();
  }, ml = () => e(0, A = !A), _l = () => e(17, Gr = void 0), El = (S) => e(14, Mt = S), Il = (S) => vs(S), Cl = () => e(14, Mt = -1), Nl = () => {
  };
  return n.$$set = (S) => {
    "class" in S && e(2, s = S.class), "apiKey" in S && e(24, a = S.apiKey), "bbox" in S && e(25, u = S.bbox), "clearButtonTitle" in S && e(3, l = S.clearButtonTitle), "clearOnBlur" in S && e(26, c = S.clearOnBlur), "collapsed" in S && e(4, f = S.collapsed), "country" in S && e(27, h = S.country), "debounceSearch" in S && e(28, g = S.debounceSearch), "enableReverse" in S && e(5, p = S.enableReverse), "errorMessage" in S && e(6, y = S.errorMessage), "filter" in S && e(29, d = S.filter), "flyTo" in S && e(30, E = S.flyTo), "fuzzyMatch" in S && e(31, C = S.fuzzyMatch), "language" in S && e(32, _ = S.language), "limit" in S && e(33, x = S.limit), "mapController" in S && e(34, w = S.mapController), "minLength" in S && e(35, T = S.minLength), "noResultsMessage" in S && e(7, R = S.noResultsMessage), "placeholder" in S && e(8, D = S.placeholder), "proximity" in S && e(36, L = S.proximity), "reverseActive" in S && e(0, A = S.reverseActive), "reverseButtonTitle" in S && e(9, Y = S.reverseButtonTitle), "searchValue" in S && e(1, G = S.searchValue), "showFullGeometry" in S && e(37, ot = S.showFullGeometry), "showPlaceType" in S && e(10, N = S.showPlaceType), "showResultsWhileTyping" in S && e(38, k = S.showResultsWhileTyping), "types" in S && e(39, Q = S.types), "excludeTypes" in S && e(40, dt = S.excludeTypes), "zoom" in S && e(41, Wt = S.zoom), "maxZoom" in S && e(42, Jt = S.maxZoom), "apiUrl" in S && e(43, on = S.apiUrl), "fetchParameters" in S && e(44, ze = S.fetchParameters), "iconsBaseUrl" in S && e(11, Br = S.iconsBaseUrl), "adjustUrlQuery" in S && e(45, Ve = S.adjustUrlQuery), "$$scope" in S && e(55, o = S.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*focused, clearOnBlur*/
    67112960 && setTimeout(() => {
      e(15, wo = di), c && !di && e(1, G = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    16 && G.length < T && (e(52, nt = void 0), e(13, lt = void 0), e(17, Gr = void 0), e(51, pe = lt)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    2097216 && ot && nt && !nt.address && nt.geometry.type === "Point" && ps(nt.id, { byId: !0 }).catch((S) => e(17, Gr = S)), n.$$.dirty[0] & /*flyTo*/
    1073741824 | n.$$.dirty[1] & /*mapController, picked, prevIdToFly, maxZoom, zoom*/
    6294536 && (w && nt && nt.id !== gs && E && (!nt.bbox || nt.bbox[0] === nt.bbox[2] && nt.bbox[1] === nt.bbox[3] ? w.flyTo(nt.center, nt.id.startsWith("poi.") || nt.id.startsWith("address.") ? Jt : Wt) : w.fitBounds(ma(nt.bbox), 50, Jt), e(13, lt = void 0), e(51, pe = void 0), e(14, Mt = -1)), e(53, gs = nt == null ? void 0 : nt.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    1048576 && pe !== lt && e(51, pe = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    3145736 && w && w.setMarkers(pe, nt), n.$$.dirty[0] & /*searchValue*/
    2 && e(14, Mt = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController*/
    8 && w && w.setEventHandler((S) => {
      switch (S.type) {
        case "mapClick":
          A && ll(S.coordinates);
          break;
        case "markerClick":
          {
            const Gt = lt == null ? void 0 : lt.find((zr) => zr.id === S.id);
            Gt && vs(Gt);
          }
          break;
        case "markerMouseEnter":
          e(14, Mt = wo ? (lt == null ? void 0 : lt.findIndex((Gt) => Gt.id === S.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          e(14, Mt = -1);
          break;
      }
    }), n.$$.dirty[0] & /*selectedItemIndex*/
    16384 | n.$$.dirty[1] & /*mapController*/
    8 && (w == null || w.setSelectedMarker(Mt)), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && e(54, r = lt == null ? void 0 : lt[Mt]), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    8) {
      const S = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(G);
      w == null || w.setReverseMarker(S ? [Number(S[1]), Number(S[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    8388608 && Nn("select", r), n.$$.dirty[1] & /*picked*/
    2097152 && Nn("pick", nt), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && Nn("optionsVisibilityChange", wo && !!lt), n.$$.dirty[0] & /*listFeatures*/
    8192 && Nn("featuresListed", lt), n.$$.dirty[1] & /*markedFeatures*/
    1048576 && Nn("featuresMarked", pe), n.$$.dirty[0] & /*reverseActive*/
    1 && Nn("reverseToggle", A), n.$$.dirty[0] & /*searchValue*/
    2 && Nn("queryChange", G), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    8 && w && w.indicateReverse(A);
  }, [
    A,
    G,
    s,
    l,
    f,
    p,
    y,
    R,
    D,
    Y,
    N,
    Br,
    di,
    lt,
    Mt,
    wo,
    kr,
    Gr,
    Wn,
    al,
    aa,
    cl,
    ds,
    vs,
    a,
    u,
    c,
    h,
    g,
    d,
    E,
    C,
    _,
    x,
    w,
    T,
    L,
    ot,
    k,
    Q,
    dt,
    Wt,
    Jt,
    on,
    ze,
    Ve,
    pi,
    Cn,
    oa,
    ol,
    sl,
    pe,
    nt,
    gs,
    r,
    o,
    i,
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
    Cl,
    Nl
  ];
}
let Ic = class extends Xn {
  constructor(t) {
    super(), qn(
      this,
      t,
      Ec,
      _c,
      Un,
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
        excludeTypes: 40,
        zoom: 41,
        maxZoom: 42,
        apiUrl: 43,
        fetchParameters: 44,
        iconsBaseUrl: 11,
        adjustUrlQuery: 45,
        focus: 46,
        blur: 47,
        setQuery: 48,
        clearList: 49,
        clearMap: 50
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[46];
  }
  get blur() {
    return this.$$.ctx[47];
  }
  get setQuery() {
    return this.$$.ctx[48];
  }
  get clearList() {
    return this.$$.ctx[49];
  }
  get clearMap() {
    return this.$$.ctx[50];
  }
};
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
function Cc(n, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
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
        l = t.call(n, e);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        r = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Tn = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return n;
  }()
);
function Nc(n, t) {
  return n > t ? 1 : n < t ? -1 : 0;
}
function wn(n, t, e) {
  for (var r = new Tn(null, null), i = r, o = r; ; ) {
    var s = e(n, t.key);
    if (s < 0) {
      if (t.left === null)
        break;
      if (e(n, t.left.key) < 0) {
        var a = t.left;
        if (t.left = a.right, a.right = t, t = a, t.left === null)
          break;
      }
      o.left = t, o = t, t = t.left;
    } else if (s > 0) {
      if (t.right === null)
        break;
      if (e(n, t.right.key) > 0) {
        var a = t.right;
        if (t.right = a.left, a.left = t, t = a, t.right === null)
          break;
      }
      i.right = t, i = t, t = t.right;
    } else
      break;
  }
  return i.right = t.left, o.left = t.right, t.left = r.right, t.right = r.left, t;
}
function Is(n, t, e, r) {
  var i = new Tn(n, t);
  if (e === null)
    return i.left = i.right = null, i;
  e = wn(n, e, r);
  var o = r(n, e.key);
  return o < 0 ? (i.left = e.left, i.right = e, e.left = null) : o >= 0 && (i.right = e.right, i.left = e, e.right = null), i;
}
function Na(n, t, e) {
  var r = null, i = null;
  if (t) {
    t = wn(n, t, e);
    var o = e(t.key, n);
    o === 0 ? (r = t.left, i = t.right) : o < 0 ? (i = t.right, t.right = null, r = t) : (r = t.left, t.left = null, i = t);
  }
  return { left: r, right: i };
}
function Sc(n, t, e) {
  return t === null ? n : (n === null || (t = wn(n.key, t, e), t.left = n), t);
}
function bs(n, t, e, r, i) {
  if (n) {
    r("" + t + (e ? "└── " : "├── ") + i(n) + `
`);
    var o = t + (e ? "    " : "│   ");
    n.left && bs(n.left, o, !1, r, i), n.right && bs(n.right, o, !0, r, i);
  }
}
var Us = (
  /** @class */
  function() {
    function n(t) {
      t === void 0 && (t = Nc), this._root = null, this._size = 0, this._comparator = t;
    }
    return n.prototype.insert = function(t, e) {
      return this._size++, this._root = Is(t, e, this._root, this._comparator);
    }, n.prototype.add = function(t, e) {
      var r = new Tn(t, e);
      this._root === null && (r.left = r.right = null, this._size++, this._root = r);
      var i = this._comparator, o = wn(t, this._root, i), s = i(t, o.key);
      return s === 0 ? this._root = o : (s < 0 ? (r.left = o.left, r.right = o, o.left = null) : s > 0 && (r.right = o.right, r.left = o, o.right = null), this._size++, this._root = r), this._root;
    }, n.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, n.prototype._remove = function(t, e, r) {
      var i;
      if (e === null)
        return null;
      e = wn(t, e, r);
      var o = r(t, e.key);
      return o === 0 ? (e.left === null ? i = e.right : (i = wn(t, e.left, r), i.right = e.right), this._size--, i) : e;
    }, n.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = wn(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, n.prototype.findStatic = function(t) {
      for (var e = this._root, r = this._comparator; e; ) {
        var i = r(t, e.key);
        if (i === 0)
          return e;
        i < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, n.prototype.find = function(t) {
      return this._root && (this._root = wn(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, n.prototype.contains = function(t) {
      for (var e = this._root, r = this._comparator; e; ) {
        var i = r(t, e.key);
        if (i === 0)
          return !0;
        i < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, n.prototype.forEach = function(t, e) {
      for (var r = this._root, i = [], o = !1; !o; )
        r !== null ? (i.push(r), r = r.left) : i.length !== 0 ? (r = i.pop(), t.call(e, r), r = r.right) : o = !0;
      return this;
    }, n.prototype.range = function(t, e, r, i) {
      for (var o = [], s = this._comparator, a = this._root, u; o.length !== 0 || a; )
        if (a)
          o.push(a), a = a.left;
        else {
          if (a = o.pop(), u = s(a.key, e), u > 0)
            break;
          if (s(a.key, t) >= 0 && r.call(i, a))
            return this;
          a = a.right;
        }
      return this;
    }, n.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var r = e.key;
        return t.push(r);
      }), t;
    }, n.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var r = e.data;
        return t.push(r);
      }), t;
    }, n.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, n.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, n.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, n.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, n.prototype.at = function(t) {
      for (var e = this._root, r = !1, i = 0, o = []; !r; )
        if (e)
          o.push(e), e = e.left;
        else if (o.length > 0) {
          if (e = o.pop(), i === t)
            return e;
          i++, e = e.right;
        } else
          r = !0;
      return null;
    }, n.prototype.next = function(t) {
      var e = this._root, r = null;
      if (t.right) {
        for (r = t.right; r.left; )
          r = r.left;
        return r;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? (r = e, e = e.left) : e = e.right;
      }
      return r;
    }, n.prototype.prev = function(t) {
      var e = this._root, r = null;
      if (t.left !== null) {
        for (r = t.left; r.right; )
          r = r.right;
        return r;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? e = e.left : (r = e, e = e.right);
      }
      return r;
    }, n.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, n.prototype.toList = function() {
      return wc(this._root);
    }, n.prototype.load = function(t, e, r) {
      e === void 0 && (e = []), r === void 0 && (r = !1);
      var i = t.length, o = this._comparator;
      if (r && Os(t, e, 0, i - 1, o), this._root === null)
        this._root = Ps(t, e, 0, i), this._size = i;
      else {
        var s = Lc(this.toList(), xc(t, e), o);
        i = this._size + i, this._root = Rs({ head: s }, 0, i);
      }
      return this;
    }, n.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(n.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.toString = function(t) {
      t === void 0 && (t = function(r) {
        return String(r.key);
      });
      var e = [];
      return bs(this._root, "", !0, function(r) {
        return e.push(r);
      }, t), e.join("");
    }, n.prototype.update = function(t, e, r) {
      var i = this._comparator, o = Na(t, this._root, i), s = o.left, a = o.right;
      i(t, e) < 0 ? a = Is(e, r, a, i) : s = Is(e, r, s, i), this._root = Sc(s, a, i);
    }, n.prototype.split = function(t) {
      return Na(t, this._root, this._comparator);
    }, n.prototype[Symbol.iterator] = function() {
      var t, e, r;
      return Cc(this, function(i) {
        switch (i.label) {
          case 0:
            t = this._root, e = [], r = !1, i.label = 1;
          case 1:
            return r ? [3, 6] : t === null ? [3, 2] : (e.push(t), t = t.left, [3, 5]);
          case 2:
            return e.length === 0 ? [3, 4] : (t = e.pop(), [4, t]);
          case 3:
            return i.sent(), t = t.right, [3, 5];
          case 4:
            r = !0, i.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, n;
  }()
);
function Ps(n, t, e, r) {
  var i = r - e;
  if (i > 0) {
    var o = e + Math.floor(i / 2), s = n[o], a = t[o], u = new Tn(s, a);
    return u.left = Ps(n, t, e, o), u.right = Ps(n, t, o + 1, r), u;
  }
  return null;
}
function xc(n, t) {
  for (var e = new Tn(null, null), r = e, i = 0; i < n.length; i++)
    r = r.next = new Tn(n[i], t[i]);
  return r.next = null, e.next;
}
function wc(n) {
  for (var t = n, e = [], r = !1, i = new Tn(null, null), o = i; !r; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = o = o.next = e.pop(), t = t.right) : r = !0;
  return o.next = null, i.next;
}
function Rs(n, t, e) {
  var r = e - t;
  if (r > 0) {
    var i = t + Math.floor(r / 2), o = Rs(n, t, i), s = n.head;
    return s.left = o, n.head = n.head.next, s.right = Rs(n, i + 1, e), s;
  }
  return null;
}
function Lc(n, t, e) {
  for (var r = new Tn(null, null), i = r, o = n, s = t; o !== null && s !== null; )
    e(o.key, s.key) < 0 ? (i.next = o, o = o.next) : (i.next = s, s = s.next), i = i.next;
  return o !== null ? i.next = o : s !== null && (i.next = s), r.next;
}
function Os(n, t, e, r, i) {
  if (!(e >= r)) {
    for (var o = n[e + r >> 1], s = e - 1, a = r + 1; ; ) {
      do
        s++;
      while (i(n[s], o) < 0);
      do
        a--;
      while (i(n[a], o) > 0);
      if (s >= a)
        break;
      var u = n[s];
      n[s] = n[a], n[a] = u, u = t[s], t[s] = t[a], t[a] = u;
    }
    Os(n, t, e, a, i), Os(n, t, a + 1, r, i);
  }
}
function _r(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sa(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function xe(n, t, e) {
  return t && Sa(n.prototype, t), e && Sa(n, e), n;
}
var ji = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Ts = function(t, e) {
  if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y)
    return null;
  var r = t.ll.x < e.ll.x ? e.ll.x : t.ll.x, i = t.ur.x < e.ur.x ? t.ur.x : e.ur.x, o = t.ll.y < e.ll.y ? e.ll.y : t.ll.y, s = t.ur.y < e.ur.y ? t.ur.y : e.ur.y;
  return {
    ll: {
      x: r,
      y: o
    },
    ur: {
      x: i,
      y: s
    }
  };
}, Ln = Number.EPSILON;
Ln === void 0 && (Ln = Math.pow(2, -52));
var bc = Ln * Ln, Ds = function(t, e) {
  if (-Ln < t && t < Ln && -Ln < e && e < Ln)
    return 0;
  var r = t - e;
  return r * r < bc * t * e ? 0 : t < e ? -1 : 1;
}, Pc = /* @__PURE__ */ function() {
  function n() {
    _r(this, n), this.reset();
  }
  return xe(n, [{
    key: "reset",
    value: function() {
      this.xRounder = new xa(), this.yRounder = new xa();
    }
  }, {
    key: "round",
    value: function(e, r) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(r)
      };
    }
  }]), n;
}(), xa = /* @__PURE__ */ function() {
  function n() {
    _r(this, n), this.tree = new Us(), this.round(0);
  }
  return xe(n, [{
    key: "round",
    value: function(e) {
      var r = this.tree.add(e), i = this.tree.prev(r);
      if (i !== null && Ds(r.key, i.key) === 0)
        return this.tree.remove(e), i.key;
      var o = this.tree.next(r);
      return o !== null && Ds(r.key, o.key) === 0 ? (this.tree.remove(e), o.key) : e;
    }
  }]), n;
}(), ro = new Pc(), $i = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, cu = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, wa = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  }, s = $i(i, o);
  return Ds(s, 0);
}, Vo = function(t) {
  return Math.sqrt(cu(t, t));
}, Rc = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  };
  return $i(o, i) / Vo(o) / Vo(i);
}, Oc = function(t, e, r) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: r.x - t.x,
    y: r.y - t.y
  };
  return cu(o, i) / Vo(o) / Vo(i);
}, La = function(t, e, r) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (r - t.y),
    y: r
  };
}, ba = function(t, e, r) {
  return e.x === 0 ? null : {
    x: r,
    y: t.y + e.y / e.x * (r - t.x)
  };
}, Tc = function(t, e, r, i) {
  if (e.x === 0)
    return ba(r, i, t.x);
  if (i.x === 0)
    return ba(t, e, r.x);
  if (e.y === 0)
    return La(r, i, t.y);
  if (i.y === 0)
    return La(t, e, r.y);
  var o = $i(e, i);
  if (o == 0)
    return null;
  var s = {
    x: r.x - t.x,
    y: r.y - t.y
  }, a = $i(s, e) / o, u = $i(s, i) / o, l = t.x + u * e.x, c = r.x + a * i.x, f = t.y + u * e.y, h = r.y + a * i.y, g = (l + c) / 2, p = (f + h) / 2;
  return {
    x: g,
    y: p
  };
}, Yr = /* @__PURE__ */ function() {
  xe(n, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, r) {
      var i = n.comparePoints(e.point, r.point);
      return i !== 0 ? i : (e.point !== r.point && e.link(r), e.isLeft !== r.isLeft ? e.isLeft ? 1 : -1 : Uo.compare(e.segment, r.segment));
    }
    // for ordering points in sweep line order
  }, {
    key: "comparePoints",
    value: function(e, r) {
      return e.x < r.x ? -1 : e.x > r.x ? 1 : e.y < r.y ? -1 : e.y > r.y ? 1 : 0;
    }
    // Warning: 'point' input will be modified and re-used (for performance)
  }]);
  function n(t, e) {
    _r(this, n), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return xe(n, [{
    key: "link",
    value: function(e) {
      if (e.point === this.point)
        throw new Error("Tried to link already linked events");
      for (var r = e.point.events, i = 0, o = r.length; i < o; i++) {
        var s = r[i];
        this.point.events.push(s), s.point = this.point;
      }
      this.checkForConsuming();
    }
    /* Do a pass over our linked events and check to see if any pair
     * of segments match, and should be consumed. */
  }, {
    key: "checkForConsuming",
    value: function() {
      for (var e = this.point.events.length, r = 0; r < e; r++) {
        var i = this.point.events[r];
        if (i.segment.consumedBy === void 0)
          for (var o = r + 1; o < e; o++) {
            var s = this.point.events[o];
            s.consumedBy === void 0 && i.otherSE.point.events === s.otherSE.point.events && i.segment.consume(s.segment);
          }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function() {
      for (var e = [], r = 0, i = this.point.events.length; r < i; r++) {
        var o = this.point.events[r];
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
      var r = this, i = /* @__PURE__ */ new Map(), o = function(a) {
        var u = a.otherSE;
        i.set(a, {
          sine: Rc(r.point, e.point, u.point),
          cosine: Oc(r.point, e.point, u.point)
        });
      };
      return function(s, a) {
        i.has(s) || o(s), i.has(a) || o(a);
        var u = i.get(s), l = u.sine, c = u.cosine, f = i.get(a), h = f.sine, g = f.cosine;
        return l >= 0 && h >= 0 ? c < g ? 1 : c > g ? -1 : 0 : l < 0 && h < 0 ? c < g ? -1 : c > g ? 1 : 0 : h < l ? -1 : h > l ? 1 : 0;
      };
    }
  }]), n;
}(), Dc = 0, Uo = /* @__PURE__ */ function() {
  xe(n, null, [{
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
    value: function(e, r) {
      var i = e.leftSE.point.x, o = r.leftSE.point.x, s = e.rightSE.point.x, a = r.rightSE.point.x;
      if (a < i)
        return 1;
      if (s < o)
        return -1;
      var u = e.leftSE.point.y, l = r.leftSE.point.y, c = e.rightSE.point.y, f = r.rightSE.point.y;
      if (i < o) {
        if (l < u && l < c)
          return 1;
        if (l > u && l > c)
          return -1;
        var h = e.comparePoint(r.leftSE.point);
        if (h < 0)
          return 1;
        if (h > 0)
          return -1;
        var g = r.comparePoint(e.rightSE.point);
        return g !== 0 ? g : -1;
      }
      if (i > o) {
        if (u < l && u < f)
          return -1;
        if (u > l && u > f)
          return 1;
        var p = r.comparePoint(e.leftSE.point);
        if (p !== 0)
          return p;
        var y = e.comparePoint(r.rightSE.point);
        return y < 0 ? 1 : y > 0 ? -1 : 1;
      }
      if (u < l)
        return -1;
      if (u > l)
        return 1;
      if (s < a) {
        var d = r.comparePoint(e.rightSE.point);
        if (d !== 0)
          return d;
      }
      if (s > a) {
        var E = e.comparePoint(r.rightSE.point);
        if (E < 0)
          return 1;
        if (E > 0)
          return -1;
      }
      if (s !== a) {
        var C = c - u, _ = s - i, x = f - l, w = a - o;
        if (C > _ && x < w)
          return 1;
        if (C < _ && x > w)
          return -1;
      }
      return s > a ? 1 : s < a || c < f ? -1 : c > f ? 1 : e.id < r.id ? -1 : e.id > r.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function n(t, e, r, i) {
    _r(this, n), this.id = ++Dc, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = r, this.windings = i;
  }
  return xe(n, [{
    key: "replaceRightSE",
    /* When a segment is split, the rightSE is replaced with a new sweep event */
    value: function(e) {
      this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
  }, {
    key: "bbox",
    value: function() {
      var e = this.leftSE.point.y, r = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: e < r ? e : r
        },
        ur: {
          x: this.rightSE.point.x,
          y: e > r ? e : r
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
      var r = this.leftSE.point, i = this.rightSE.point, o = this.vector();
      if (r.x === i.x)
        return e.x === r.x ? 0 : e.x < r.x ? 1 : -1;
      var s = (e.y - r.y) / o.y, a = r.x + s * o.x;
      if (e.x === a)
        return 0;
      var u = (e.x - r.x) / o.x, l = r.y + u * o.y;
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
      var r = this.bbox(), i = e.bbox(), o = Ts(r, i);
      if (o === null)
        return null;
      var s = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = ji(r, u) && this.comparePoint(u) === 0, f = ji(i, s) && e.comparePoint(s) === 0, h = ji(r, l) && this.comparePoint(l) === 0, g = ji(i, a) && e.comparePoint(a) === 0;
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
      var p = Tc(s, this.vector(), u, e.vector());
      return p === null || !ji(o, p) ? null : ro.round(p.x, p.y);
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
      var r = [], i = e.events !== void 0, o = new Yr(e, !0), s = new Yr(e, !1), a = this.rightSE;
      this.replaceRightSE(s), r.push(s), r.push(o);
      var u = new n(o, a, this.rings.slice(), this.windings.slice());
      return Yr.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), Yr.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (o.checkForConsuming(), s.checkForConsuming()), r;
    }
    /* Swap which event is left and right */
  }, {
    key: "swapEvents",
    value: function() {
      var e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (var r = 0, i = this.windings.length; r < i; r++)
        this.windings[r] *= -1;
    }
    /* Consume another segment. We take their rings under our wing
     * and mark them as consumed. Use for perfectly overlapping segments */
  }, {
    key: "consume",
    value: function(e) {
      for (var r = this, i = e; r.consumedBy; )
        r = r.consumedBy;
      for (; i.consumedBy; )
        i = i.consumedBy;
      var o = n.compare(r, i);
      if (o !== 0) {
        if (o > 0) {
          var s = r;
          r = i, i = s;
        }
        if (r.prev === i) {
          var a = r;
          r = i, i = a;
        }
        for (var u = 0, l = i.rings.length; u < l; u++) {
          var c = i.rings[u], f = i.windings[u], h = r.rings.indexOf(c);
          h === -1 ? (r.rings.push(c), r.windings.push(f)) : r.windings[h] += f;
        }
        i.rings = null, i.windings = null, i.consumedBy = r, i.leftSE.consumedBy = r.leftSE, i.rightSE.consumedBy = r.rightSE;
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
      for (var r = this._afterState.rings, i = this._afterState.windings, o = this._afterState.multiPolys, s = 0, a = this.rings.length; s < a; s++) {
        var u = this.rings[s], l = this.windings[s], c = r.indexOf(u);
        c === -1 ? (r.push(u), i.push(l)) : i[c] += l;
      }
      for (var f = [], h = [], g = 0, p = r.length; g < p; g++)
        if (i[g] !== 0) {
          var y = r[g], d = y.poly;
          if (h.indexOf(d) === -1)
            if (y.isExterior)
              f.push(d);
            else {
              h.indexOf(d) === -1 && h.push(d);
              var E = f.indexOf(y.poly);
              E !== -1 && f.splice(E, 1);
            }
        }
      for (var C = 0, _ = f.length; C < _; C++) {
        var x = f[C].multiPoly;
        o.indexOf(x) === -1 && o.push(x);
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
      var e = this.beforeState().multiPolys, r = this.afterState().multiPolys;
      switch (Sr.type) {
        case "union": {
          var i = e.length === 0, o = r.length === 0;
          this._isInResult = i !== o;
          break;
        }
        case "intersection": {
          var s, a;
          e.length < r.length ? (s = e.length, a = r.length) : (s = r.length, a = e.length), this._isInResult = a === Sr.numMultiPolys && s < a;
          break;
        }
        case "xor": {
          var u = Math.abs(e.length - r.length);
          this._isInResult = u % 2 === 1;
          break;
        }
        case "difference": {
          var l = function(f) {
            return f.length === 1 && f[0].isSubject;
          };
          this._isInResult = l(e) !== l(r);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(Sr.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, r, i) {
      var o, s, a, u = Yr.comparePoints(e, r);
      if (u < 0)
        o = e, s = r, a = 1;
      else if (u > 0)
        o = r, s = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new Yr(o, !0), c = new Yr(s, !1);
      return new n(l, c, [i], [a]);
    }
  }]), n;
}(), Pa = /* @__PURE__ */ function() {
  function n(t, e, r) {
    if (_r(this, n), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = r, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var i = ro.round(t[0][0], t[0][1]);
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
      var u = ro.round(t[s][0], t[s][1]);
      u.x === o.x && u.y === o.y || (this.segments.push(Uo.fromRing(o, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), o = u);
    }
    (i.x !== o.x || i.y !== o.y) && this.segments.push(Uo.fromRing(o, i, this));
  }
  return xe(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], r = 0, i = this.segments.length; r < i; r++) {
        var o = this.segments[r];
        e.push(o.leftSE), e.push(o.rightSE);
      }
      return e;
    }
  }]), n;
}(), Mc = /* @__PURE__ */ function() {
  function n(t, e) {
    if (_r(this, n), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Pa(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (var r = 1, i = t.length; r < i; r++) {
      var o = new Pa(t[r], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = e;
  }
  return xe(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), r = 0, i = this.interiorRings.length; r < i; r++)
        for (var o = this.interiorRings[r].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), n;
}(), Ra = /* @__PURE__ */ function() {
  function n(t, e) {
    if (_r(this, n), !Array.isArray(t))
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
    for (var r = 0, i = t.length; r < i; r++) {
      var o = new Mc(t[r], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = e;
  }
  return xe(n, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], r = 0, i = this.polys.length; r < i; r++)
        for (var o = this.polys[r].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), n;
}(), Ac = /* @__PURE__ */ function() {
  xe(n, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var r = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!(!s.isInResult() || s.ringOut)) {
          for (var a = null, u = s.leftSE, l = s.rightSE, c = [u], f = u.point, h = []; a = u, u = l, c.push(u), u.point !== f; )
            for (; ; ) {
              var g = u.getAvailableLinkedEvents();
              if (g.length === 0) {
                var p = c[0].point, y = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(p.x, ",") + " ".concat(p.y, "]. Last matching segment found ends at") + " [".concat(y.x, ", ").concat(y.y, "]."));
              }
              if (g.length === 1) {
                l = g[0].otherSE;
                break;
              }
              for (var d = null, E = 0, C = h.length; E < C; E++)
                if (h[E].point === u.point) {
                  d = E;
                  break;
                }
              if (d !== null) {
                var _ = h.splice(d)[0], x = c.splice(_.index);
                x.unshift(x[0].otherSE), r.push(new n(x.reverse()));
                continue;
              }
              h.push({
                index: c.length,
                point: u.point
              });
              var w = u.getLeftmostComparator(a);
              l = g.sort(w)[0].otherSE;
              break;
            }
          r.push(new n(c));
        }
      }
      return r;
    }
  }]);
  function n(t) {
    _r(this, n), this.events = t;
    for (var e = 0, r = t.length; e < r; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return xe(n, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, r = [e], i = 1, o = this.events.length - 1; i < o; i++) {
        var s = this.events[i].point, a = this.events[i + 1].point;
        wa(s, e, a) !== 0 && (r.push(s), e = s);
      }
      if (r.length === 1)
        return null;
      var u = r[0], l = r[1];
      wa(u, e, l) === 0 && r.shift(), r.push(r[0]);
      for (var c = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : r.length - 1, h = this.isExteriorRing() ? r.length : -1, g = [], p = f; p != h; p += c)
        g.push([r[p].x, r[p].y]);
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
      for (var e = this.events[0], r = 1, i = this.events.length; r < i; r++) {
        var o = this.events[r];
        Yr.compare(e, o) > 0 && (e = o);
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
  }]), n;
}(), Oa = /* @__PURE__ */ function() {
  function n(t) {
    _r(this, n), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return xe(n, [{
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
      for (var r = 0, i = this.interiorRings.length; r < i; r++) {
        var o = this.interiorRings[r].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }]), n;
}(), Fc = /* @__PURE__ */ function() {
  function n(t) {
    _r(this, n), this.rings = t, this.polys = this._composePolys(t);
  }
  return xe(n, [{
    key: "getGeom",
    value: function() {
      for (var e = [], r = 0, i = this.polys.length; r < i; r++) {
        var o = this.polys[r].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }, {
    key: "_composePolys",
    value: function(e) {
      for (var r = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!s.poly)
          if (s.isExteriorRing())
            r.push(new Oa(s));
          else {
            var a = s.enclosingRing();
            a.poly || r.push(new Oa(a)), a.poly.addInterior(s);
          }
      }
      return r;
    }
  }]), n;
}(), Bc = /* @__PURE__ */ function() {
  function n(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Uo.compare;
    _r(this, n), this.queue = t, this.tree = new Us(e), this.segments = [];
  }
  return xe(n, [{
    key: "process",
    value: function(e) {
      var r = e.segment, i = [];
      if (e.consumedBy)
        return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(r), i;
      var o = e.isLeft ? this.tree.insert(r) : this.tree.find(r);
      if (!o)
        throw new Error("Unable to find segment #".concat(r.id, " ") + "[".concat(r.leftSE.point.x, ", ").concat(r.leftSE.point.y, "] -> ") + "[".concat(r.rightSE.point.x, ", ").concat(r.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
      for (var s = o, a = o, u = void 0, l = void 0; u === void 0; )
        s = this.tree.prev(s), s === null ? u = null : s.key.consumedBy === void 0 && (u = s.key);
      for (; l === void 0; )
        a = this.tree.next(a), a === null ? l = null : a.key.consumedBy === void 0 && (l = a.key);
      if (e.isLeft) {
        var c = null;
        if (u) {
          var f = u.getIntersection(r);
          if (f !== null && (r.isAnEndpoint(f) || (c = f), !u.isAnEndpoint(f)))
            for (var h = this._splitSafely(u, f), g = 0, p = h.length; g < p; g++)
              i.push(h[g]);
        }
        var y = null;
        if (l) {
          var d = l.getIntersection(r);
          if (d !== null && (r.isAnEndpoint(d) || (y = d), !l.isAnEndpoint(d)))
            for (var E = this._splitSafely(l, d), C = 0, _ = E.length; C < _; C++)
              i.push(E[C]);
        }
        if (c !== null || y !== null) {
          var x = null;
          if (c === null)
            x = y;
          else if (y === null)
            x = c;
          else {
            var w = Yr.comparePoints(c, y);
            x = w <= 0 ? c : y;
          }
          this.queue.remove(r.rightSE), i.push(r.rightSE);
          for (var T = r.split(x), R = 0, D = T.length; R < D; R++)
            i.push(T[R]);
        }
        i.length > 0 ? (this.tree.remove(r), i.push(e)) : (this.segments.push(r), r.prev = u);
      } else {
        if (u && l) {
          var L = u.getIntersection(l);
          if (L !== null) {
            if (!u.isAnEndpoint(L))
              for (var A = this._splitSafely(u, L), Y = 0, G = A.length; Y < G; Y++)
                i.push(A[Y]);
            if (!l.isAnEndpoint(L))
              for (var ot = this._splitSafely(l, L), N = 0, k = ot.length; N < k; N++)
                i.push(ot[N]);
          }
        }
        this.tree.remove(r);
      }
      return i;
    }
    /* Safely split a segment that is currently in the datastructures
     * IE - a segment other than the one that is currently being processed. */
  }, {
    key: "_splitSafely",
    value: function(e, r) {
      this.tree.remove(e);
      var i = e.rightSE;
      this.queue.remove(i);
      var o = e.split(r);
      return o.push(i), e.consumedBy === void 0 && this.tree.insert(e), o;
    }
  }]), n;
}(), Ta = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, kc = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, Gc = /* @__PURE__ */ function() {
  function n() {
    _r(this, n);
  }
  return xe(n, [{
    key: "run",
    value: function(e, r, i) {
      Sr.type = e, ro.reset();
      for (var o = [new Ra(r, !0)], s = 0, a = i.length; s < a; s++)
        o.push(new Ra(i[s], !1));
      if (Sr.numMultiPolys = o.length, Sr.type === "difference")
        for (var u = o[0], l = 1; l < o.length; )
          Ts(o[l].bbox, u.bbox) !== null ? l++ : o.splice(l, 1);
      if (Sr.type === "intersection") {
        for (var c = 0, f = o.length; c < f; c++)
          for (var h = o[c], g = c + 1, p = o.length; g < p; g++)
            if (Ts(h.bbox, o[g].bbox) === null)
              return [];
      }
      for (var y = new Us(Yr.compare), d = 0, E = o.length; d < E; d++)
        for (var C = o[d].getSweepEvents(), _ = 0, x = C.length; _ < x; _++)
          if (y.insert(C[_]), y.size > Ta)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var w = new Bc(y), T = y.size, R = y.pop(); R; ) {
        var D = R.key;
        if (y.size === T) {
          var L = D.segment;
          throw new Error("Unable to pop() ".concat(D.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(D.point.x, ", ").concat(D.point.y, "] from segment #").concat(L.id, " ") + "[".concat(L.leftSE.point.x, ", ").concat(L.leftSE.point.y, "] -> ") + "[".concat(L.rightSE.point.x, ", ").concat(L.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (y.size > Ta)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (w.segments.length > kc)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var A = w.process(D), Y = 0, G = A.length; Y < G; Y++) {
          var ot = A[Y];
          ot.consumedBy === void 0 && y.insert(ot);
        }
        T = y.size, R = y.pop();
      }
      ro.reset();
      var N = Ac.factory(w.segments), k = new Fc(N);
      return k.getGeom();
    }
  }]), n;
}(), Sr = new Gc(), zc = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return Sr.run("union", t, r);
}, Vc = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return Sr.run("intersection", t, r);
}, Uc = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return Sr.run("xor", t, r);
}, qc = function(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    r[i - 1] = arguments[i];
  return Sr.run("difference", t, r);
}, fu = {
  union: zc,
  intersection: Vc,
  xor: Uc,
  difference: qc
}, Ie = 63710088e-1, hu = {
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
function ts(n, t, e) {
  e === void 0 && (e = {});
  var r = { type: "Feature" };
  return (e.id === 0 || e.id) && (r.id = e.id), e.bbox && (r.bbox = e.bbox), r.properties = t || {}, r.geometry = n, r;
}
function Xc(n, t, e) {
  if (e === void 0 && (e = {}), !n)
    throw new Error("coordinates is required");
  if (!Array.isArray(n))
    throw new Error("coordinates must be an Array");
  if (n.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Da(n[0]) || !Da(n[1]))
    throw new Error("coordinates must contain numbers");
  var r = {
    type: "Point",
    coordinates: n
  };
  return ts(r, t, e);
}
function gu(n, t, e) {
  e === void 0 && (e = {});
  for (var r = 0, i = n; r < i.length; r++) {
    var o = i[r];
    if (o.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var s = 0; s < o[o.length - 1].length; s++)
      if (o[o.length - 1][s] !== o[0][s])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: n
  };
  return ts(a, t, e);
}
function Ms(n, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = n, e;
}
function pu(n, t, e) {
  e === void 0 && (e = {});
  var r = {
    type: "MultiPolygon",
    coordinates: n
  };
  return ts(r, t, e);
}
function Yc(n, t) {
  t === void 0 && (t = "kilometers");
  var e = hu[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return n * e;
}
function Hc(n, t) {
  t === void 0 && (t = "kilometers");
  var e = hu[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return n / e;
}
function Da(n) {
  return !isNaN(n) && n !== null && !Array.isArray(n);
}
function qo(n) {
  return n.type === "Feature" ? n.geometry : n;
}
function Wc(n, t, e) {
  e === void 0 && (e = {});
  var r = qo(n), i = qo(t), o = fu.union(r.coordinates, i.coordinates);
  return o.length === 0 ? null : o.length === 1 ? gu(o[0], e.properties) : pu(o, e.properties);
}
function du(n, t, e) {
  if (n !== null)
    for (var r, i, o, s, a, u, l, c = 0, f = 0, h, g = n.type, p = g === "FeatureCollection", y = g === "Feature", d = p ? n.features.length : 1, E = 0; E < d; E++) {
      l = p ? n.features[E].geometry : y ? n.geometry : n, h = l ? l.type === "GeometryCollection" : !1, a = h ? l.geometries.length : 1;
      for (var C = 0; C < a; C++) {
        var _ = 0, x = 0;
        if (s = h ? l.geometries[C] : l, s !== null) {
          u = s.coordinates;
          var w = s.type;
          switch (c = e && (w === "Polygon" || w === "MultiPolygon") ? 1 : 0, w) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                f,
                E,
                _,
                x
              ) === !1)
                return !1;
              f++, _++;
              break;
            case "LineString":
            case "MultiPoint":
              for (r = 0; r < u.length; r++) {
                if (t(
                  u[r],
                  f,
                  E,
                  _,
                  x
                ) === !1)
                  return !1;
                f++, w === "MultiPoint" && _++;
              }
              w === "LineString" && _++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (r = 0; r < u.length; r++) {
                for (i = 0; i < u[r].length - c; i++) {
                  if (t(
                    u[r][i],
                    f,
                    E,
                    _,
                    x
                  ) === !1)
                    return !1;
                  f++;
                }
                w === "MultiLineString" && _++, w === "Polygon" && x++;
              }
              w === "Polygon" && _++;
              break;
            case "MultiPolygon":
              for (r = 0; r < u.length; r++) {
                for (x = 0, i = 0; i < u[r].length; i++) {
                  for (o = 0; o < u[r][i].length - c; o++) {
                    if (t(
                      u[r][i][o],
                      f,
                      E,
                      _,
                      x
                    ) === !1)
                      return !1;
                    f++;
                  }
                  x++;
                }
                _++;
              }
              break;
            case "GeometryCollection":
              for (r = 0; r < s.geometries.length; r++)
                if (du(s.geometries[r], t, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Ma(n, t) {
  if (n.type === "Feature")
    t(n, 0);
  else if (n.type === "FeatureCollection")
    for (var e = 0; e < n.features.length && t(n.features[e], e) !== !1; e++)
      ;
}
function vu(n, t) {
  var e, r, i, o, s, a, u, l, c, f, h = 0, g = n.type === "FeatureCollection", p = n.type === "Feature", y = g ? n.features.length : 1;
  for (e = 0; e < y; e++) {
    for (a = g ? n.features[e].geometry : p ? n.geometry : n, l = g ? n.features[e].properties : p ? n.properties : {}, c = g ? n.features[e].bbox : p ? n.bbox : void 0, f = g ? n.features[e].id : p ? n.id : void 0, u = a ? a.type === "GeometryCollection" : !1, s = u ? a.geometries.length : 1, i = 0; i < s; i++) {
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
          for (r = 0; r < o.geometries.length; r++)
            if (t(
              o.geometries[r],
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
function As(n) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return du(n, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
As.default = As;
function jc(n, t) {
  t === void 0 && (t = {});
  var e = As(n), r = (e[0] + e[2]) / 2, i = (e[1] + e[3]) / 2;
  return Xc([r, i], t.properties, t);
}
"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
  configurable: !0,
  value: function(t) {
    if (this === void 0 || this === null)
      throw new TypeError(this + " is not an object");
    var e = Object(this), r = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, i = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
    i = i < 0 ? Math.max(r + i, 0) : Math.min(i, r);
    var o = 2 in arguments && arguments[2] !== void 0 ? parseInt(Number(arguments[2]), 10) || 0 : r;
    for (o = o < 0 ? Math.max(r + arguments[2], 0) : Math.min(o, r); i < o; )
      e[i] = t, ++i;
    return e;
  },
  writable: !0
});
Number.isFinite = Number.isFinite || function(n) {
  return typeof n == "number" && isFinite(n);
};
Number.isInteger = Number.isInteger || function(n) {
  return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
};
Number.parseFloat = Number.parseFloat || parseFloat;
Number.isNaN = Number.isNaN || function(n) {
  return n !== n;
};
Math.trunc = Math.trunc || function(n) {
  return n < 0 ? Math.ceil(n) : Math.floor(n);
};
var Kn = function() {
};
Kn.prototype.interfaces_ = function() {
  return [];
};
Kn.prototype.getClass = function() {
  return Kn;
};
Kn.prototype.equalsWithTolerance = function(t, e, r) {
  return Math.abs(t - e) <= r;
};
var ft = function(n) {
  function t(e) {
    n.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new n().stack;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(Error), U = function() {
}, yu = { MAX_VALUE: { configurable: !0 } };
U.isNaN = function(t) {
  return Number.isNaN(t);
};
U.doubleToLongBits = function(t) {
  return t;
};
U.longBitsToDouble = function(t) {
  return t;
};
U.isInfinite = function(t) {
  return !Number.isFinite(t);
};
yu.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(U, yu);
var ke = function() {
}, es = function() {
}, Ii = function() {
};
function Ge() {
}
var v = function n() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = n.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = n.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, li = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
v.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case v.X:
      this.x = e;
      break;
    case v.Y:
      this.y = e;
      break;
    case v.Z:
      this.z = e;
      break;
    default:
      throw new ft("Invalid ordinate index: " + t);
  }
};
v.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return !(!Kn.equalsWithTolerance(this.x, e.x, r) || !Kn.equalsWithTolerance(this.y, e.y, r));
  }
};
v.prototype.getOrdinate = function(t) {
  switch (t) {
    case v.X:
      return this.x;
    case v.Y:
      return this.y;
    case v.Z:
      return this.z;
  }
  throw new ft("Invalid ordinate index: " + t);
};
v.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || U.isNaN(this.z)) && U.isNaN(t.z);
};
v.prototype.equals = function(t) {
  return t instanceof v ? this.equals2D(t) : !1;
};
v.prototype.equalInZ = function(t, e) {
  return Kn.equalsWithTolerance(this.z, t.z, e);
};
v.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
v.prototype.clone = function() {
};
v.prototype.copy = function() {
  return new v(this);
};
v.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
v.prototype.distance3D = function(t) {
  var e = this.x - t.x, r = this.y - t.y, i = this.z - t.z;
  return Math.sqrt(e * e + r * r + i * i);
};
v.prototype.distance = function(t) {
  var e = this.x - t.x, r = this.y - t.y;
  return Math.sqrt(e * e + r * r);
};
v.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + v.hashCode(this.x), t = 37 * t + v.hashCode(this.y), t;
};
v.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
v.prototype.interfaces_ = function() {
  return [ke, es, Ge];
};
v.prototype.getClass = function() {
  return v;
};
v.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = U.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
li.DimensionalComparator.get = function() {
  return an;
};
li.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
li.NULL_ORDINATE.get = function() {
  return U.NaN;
};
li.X.get = function() {
  return 0;
};
li.Y.get = function() {
  return 1;
};
li.Z.get = function() {
  return 2;
};
Object.defineProperties(v, li);
var an = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new ft("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
an.prototype.compare = function(t, e) {
  var r = t, i = e, o = an.compare(r.x, i.x);
  if (o !== 0)
    return o;
  var s = an.compare(r.y, i.y);
  if (s !== 0)
    return s;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = an.compare(r.z, i.z);
  return a;
};
an.prototype.interfaces_ = function() {
  return [Ii];
};
an.prototype.getClass = function() {
  return an;
};
an.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : U.isNaN(t) ? U.isNaN(e) ? 0 : -1 : U.isNaN(e) ? 1 : 0;
};
var Ci = function() {
};
Ci.prototype.create = function() {
};
Ci.prototype.interfaces_ = function() {
  return [];
};
Ci.prototype.getClass = function() {
  return Ci;
};
var m = function() {
}, mo = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
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
mo.INTERIOR.get = function() {
  return 0;
};
mo.BOUNDARY.get = function() {
  return 1;
};
mo.EXTERIOR.get = function() {
  return 2;
};
mo.NONE.get = function() {
  return -1;
};
Object.defineProperties(m, mo);
var V = function(n, t) {
  return n.interfaces_ && n.interfaces_().indexOf(t) > -1;
}, we = function() {
}, mu = { LOG_10: { configurable: !0 } };
we.prototype.interfaces_ = function() {
  return [];
};
we.prototype.getClass = function() {
  return we;
};
we.log10 = function(t) {
  var e = Math.log(t);
  return U.isInfinite(e) || U.isNaN(e) ? e : e / we.LOG_10;
};
we.min = function(t, e, r, i) {
  var o = t;
  return e < o && (o = e), r < o && (o = r), i < o && (o = i), o;
};
we.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], r = arguments[2];
    return t < e ? e : t > r ? r : t;
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
    var t = arguments[0], e = arguments[1], r = arguments[2], i = t;
    return e > i && (i = e), r > i && (i = r), i;
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = o;
    return s > l && (l = s), a > l && (l = a), u > l && (l = u), l;
  }
};
we.average = function(t, e) {
  return (t + e) / 2;
};
mu.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(we, mu);
var Er = function(t) {
  this.str = t;
};
Er.prototype.append = function(t) {
  this.str += t;
};
Er.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
Er.prototype.toString = function(t) {
  return this.str;
};
var lr = function(t) {
  this.value = t;
};
lr.prototype.intValue = function() {
  return this.value;
};
lr.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
lr.isNaN = function(t) {
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
var I = function n() {
  if (this._hi = 0, this._lo = 0, arguments.length === 0)
    this.init(0);
  else if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this.init(t);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.init(e);
    } else if (typeof arguments[0] == "string") {
      var r = arguments[0];
      n.call(this, n.parse(r));
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    this.init(i, o);
  }
}, Je = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
I.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
I.prototype.extractSignificantDigits = function(t, e) {
  var r = this.abs(), i = I.magnitude(r._hi), o = I.TEN.pow(i);
  r = r.divide(o), r.gt(I.TEN) ? (r = r.divide(I.TEN), i += 1) : r.lt(I.ONE) && (r = r.multiply(I.TEN), i -= 1);
  for (var s = i + 1, a = new Er(), u = I.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === s && a.append(".");
    var c = Math.trunc(r._hi);
    if (c < 0)
      break;
    var f = !1, h = 0;
    c > 9 ? (f = !0, h = "9") : h = "0" + c, a.append(h), r = r.subtract(I.valueOf(c)).multiply(I.TEN), f && r.selfAdd(I.TEN);
    var g = !0, p = I.magnitude(r._hi);
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
    var r = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null, f = null, h = null;
    return l = this._hi / r, c = I.SPLIT * l, o = c - l, h = I.SPLIT * r, o = c - o, s = l - o, a = h - r, f = l * r, a = h - a, u = r - a, h = o * a - f + o * u + s * a + s * u, c = (this._hi - f - h + this._lo - l * i) / r, h = l + c, this._hi = h, this._lo = l - h + c, this;
  }
};
I.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
I.prototype.divide = function() {
  if (arguments[0] instanceof I) {
    var t = arguments[0], e = null, r = null, i = null, o = null, s = null, a = null, u = null, l = null;
    s = this._hi / t._hi, a = I.SPLIT * s, e = a - s, l = I.SPLIT * t._hi, e = a - e, r = s - e, i = l - t._hi, u = s * t._hi, i = l - i, o = t._hi - i, l = e * i - u + e * o + r * i + r * o, a = (this._hi - u - l + this._lo - s * t._lo) / t._hi, l = s + a;
    var c = l, f = s - l + a;
    return new I(c, f);
  } else if (typeof arguments[0] == "number") {
    var h = arguments[0];
    return U.isNaN(h) ? I.createNaN() : I.copy(this).selfDivide(h, 0);
  }
};
I.prototype.ge = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo;
};
I.prototype.pow = function(t) {
  if (t === 0)
    return I.valueOf(1);
  var e = new I(this), r = I.valueOf(1), i = Math.abs(t);
  if (i > 1)
    for (; i > 0; )
      i % 2 === 1 && r.selfMultiply(e), i /= 2, i > 0 && (e = e.sqr());
  else
    r = e;
  return t < 0 ? r.reciprocal() : r;
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
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, r = I.valueOf(e), i = this.subtract(r.sqr()), o = i._hi * (t * 0.5);
  return r.add(o);
};
I.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof I) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], r = null, i = null, o = null, s = null, a = null, u = null;
      return o = this._hi + e, a = o - this._hi, s = o - a, s = e - a + (this._hi - s), u = s + this._lo, r = o + u, i = u + (o - r), this._hi = r + i, this._lo = i + (r - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], f = null, h = null, g = null, p = null, y = null, d = null, E = null, C = null;
    y = this._hi + l, g = this._lo + c, E = y - this._hi, C = g - this._lo, d = y - E, p = g - C, d = l - E + (this._hi - d), p = c - C + (this._lo - p), E = d + g, f = y + E, h = E + (y - f), E = p + h;
    var _ = f + E, x = E + (f - _);
    return this._hi = _, this._lo = x, this;
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
    var r = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null;
    l = I.SPLIT * this._hi, o = l - this._hi, c = I.SPLIT * r, o = l - o, s = this._hi - o, a = c - r, l = this._hi * r, a = c - a, u = r - a, c = o * a - l + o * u + s * a + s * u + (this._hi * i + this._lo * r);
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
    return U.isNaN(e) ? I.createNaN() : I.copy(this).selfMultiply(e, 0);
  }
};
I.prototype.isNaN = function() {
  return U.isNaN(this._hi);
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
  var e = new Array(1).fill(null), r = this.extractSignificantDigits(!0, e), i = e[0] + 1, o = r;
  if (r.charAt(0) === ".")
    o = "0" + r;
  else if (i < 0)
    o = "0." + I.stringOfChar("0", -i) + r;
  else if (r.indexOf(".") === -1) {
    var s = i - r.length, a = I.stringOfChar("0", s);
    o = r + a + ".0";
  }
  return this.isNegative() ? "-" + o : o;
};
I.prototype.reciprocal = function() {
  var t = null, e = null, r = null, i = null, o = null, s = null, a = null, u = null;
  o = 1 / this._hi, s = I.SPLIT * o, t = s - o, u = I.SPLIT * this._hi, t = s - t, e = o - t, r = u - this._hi, a = o * this._hi, r = u - r, i = this._hi - r, u = t * r - a + t * i + e * r + e * i, s = (1 - a - u - o * this._lo) / this._hi;
  var l = o + s, c = o - l + s;
  return new I(l, c);
};
I.prototype.toSciNotation = function() {
  if (this.isZero())
    return I.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), r = this.extractSignificantDigits(!1, e), i = I.SCI_NOT_EXPONENT_CHAR + e[0];
  if (r.charAt(0) === "0")
    throw new Error("Found leading zero: " + r);
  var o = "";
  r.length > 1 && (o = r.substring(1));
  var s = r.charAt(0) + "." + o;
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
    var r = arguments[0], i = arguments[1];
    this._hi = r, this._lo = i;
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
  return [Ge, ke, es];
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
  for (var e = 0, r = t.length; no.isWhitespace(t.charAt(e)); )
    e++;
  var i = !1;
  if (e < r) {
    var o = t.charAt(e);
    (o === "-" || o === "+") && (e++, o === "-" && (i = !0));
  }
  for (var s = new I(), a = 0, u = 0, l = 0; !(e >= r); ) {
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
        l = lr.parseInt(h);
      } catch (E) {
        throw E instanceof Error ? new Error("Invalid exponent " + h + " in string " + t) : E;
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
    var y = I.TEN.pow(p);
    g = s.divide(y);
  } else if (p < 0) {
    var d = I.TEN.pow(-p);
    g = s.multiply(d);
  }
  return i ? g.negate() : g;
};
I.createNaN = function() {
  return new I(U.NaN, U.NaN);
};
I.copy = function(t) {
  return new I(t);
};
I.magnitude = function(t) {
  var e = Math.abs(t), r = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(r)), o = Math.pow(10, i);
  return o * 10 <= e && (i += 1), i;
};
I.stringOfChar = function(t, e) {
  for (var r = new Er(), i = 0; i < e; i++)
    r.append(t);
  return r.toString();
};
Je.PI.get = function() {
  return new I(3.141592653589793, 12246467991473532e-32);
};
Je.TWO_PI.get = function() {
  return new I(6.283185307179586, 24492935982947064e-32);
};
Je.PI_2.get = function() {
  return new I(1.5707963267948966, 6123233995736766e-32);
};
Je.E.get = function() {
  return new I(2.718281828459045, 14456468917292502e-32);
};
Je.NaN.get = function() {
  return new I(U.NaN, U.NaN);
};
Je.EPS.get = function() {
  return 123259516440783e-46;
};
Je.SPLIT.get = function() {
  return 134217729;
};
Je.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
Je.TEN.get = function() {
  return I.valueOf(10);
};
Je.ONE.get = function() {
  return I.valueOf(1);
};
Je.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
Je.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(I, Je);
var ce = function() {
}, _u = { DP_SAFE_EPSILON: { configurable: !0 } };
ce.prototype.interfaces_ = function() {
  return [];
};
ce.prototype.getClass = function() {
  return ce;
};
ce.orientationIndex = function(t, e, r) {
  var i = ce.orientationIndexFilter(t, e, r);
  if (i <= 1)
    return i;
  var o = I.valueOf(e.x).selfAdd(-t.x), s = I.valueOf(e.y).selfAdd(-t.y), a = I.valueOf(r.x).selfAdd(-e.x), u = I.valueOf(r.y).selfAdd(-e.y);
  return o.selfMultiply(u).selfSubtract(s.selfMultiply(a)).signum();
};
ce.signOfDet2x2 = function(t, e, r, i) {
  var o = t.multiply(i).selfSubtract(e.multiply(r));
  return o.signum();
};
ce.intersection = function(t, e, r, i) {
  var o = I.valueOf(i.y).selfSubtract(r.y).selfMultiply(I.valueOf(e.x).selfSubtract(t.x)), s = I.valueOf(i.x).selfSubtract(r.x).selfMultiply(I.valueOf(e.y).selfSubtract(t.y)), a = o.subtract(s), u = I.valueOf(i.x).selfSubtract(r.x).selfMultiply(I.valueOf(t.y).selfSubtract(r.y)), l = I.valueOf(i.y).selfSubtract(r.y).selfMultiply(I.valueOf(t.x).selfSubtract(r.x)), c = u.subtract(l), f = c.selfDivide(a).doubleValue(), h = I.valueOf(t.x).selfAdd(I.valueOf(e.x).selfSubtract(t.x).selfMultiply(f)).doubleValue(), g = I.valueOf(e.x).selfSubtract(t.x).selfMultiply(I.valueOf(t.y).selfSubtract(r.y)), p = I.valueOf(e.y).selfSubtract(t.y).selfMultiply(I.valueOf(t.x).selfSubtract(r.x)), y = g.subtract(p), d = y.selfDivide(a).doubleValue(), E = I.valueOf(r.y).selfAdd(I.valueOf(i.y).selfSubtract(r.y).selfMultiply(d)).doubleValue();
  return new v(h, E);
};
ce.orientationIndexFilter = function(t, e, r) {
  var i = null, o = (t.x - r.x) * (e.y - r.y), s = (t.y - r.y) * (e.x - r.x), a = o - s;
  if (o > 0) {
    if (s <= 0)
      return ce.signum(a);
    i = o + s;
  } else if (o < 0) {
    if (s >= 0)
      return ce.signum(a);
    i = -o - s;
  } else
    return ce.signum(a);
  var u = ce.DP_SAFE_EPSILON * i;
  return a >= u || -a >= u ? ce.signum(a) : 2;
};
ce.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
_u.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(ce, _u);
var K = function() {
}, _o = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
_o.X.get = function() {
  return 0;
};
_o.Y.get = function() {
  return 1;
};
_o.Z.get = function() {
  return 2;
};
_o.M.get = function() {
  return 3;
};
K.prototype.setOrdinate = function(t, e, r) {
};
K.prototype.size = function() {
};
K.prototype.getOrdinate = function(t, e) {
};
K.prototype.getCoordinate = function() {
};
K.prototype.getCoordinateCopy = function(t) {
};
K.prototype.getDimension = function() {
};
K.prototype.getX = function(t) {
};
K.prototype.clone = function() {
};
K.prototype.expandEnvelope = function(t) {
};
K.prototype.copy = function() {
};
K.prototype.getY = function(t) {
};
K.prototype.toCoordinateArray = function() {
};
K.prototype.interfaces_ = function() {
  return [es];
};
K.prototype.getClass = function() {
  return K;
};
Object.defineProperties(K, _o);
var Eu = function() {
}, Ui = function(n) {
  function t() {
    n.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Eu), qt = function() {
};
qt.arraycopy = function(t, e, r, i, o) {
  for (var s = 0, a = e; a < e + o; a++)
    r[i + s] = t[a], s++;
};
qt.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var qe = function n() {
  if (this.x = null, this.y = null, this.w = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.w = 1;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.w = 1;
  } else if (arguments.length === 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      var e = arguments[0], r = arguments[1];
      this.x = e, this.y = r, this.w = 1;
    } else if (arguments[0] instanceof n && arguments[1] instanceof n) {
      var i = arguments[0], o = arguments[1];
      this.x = i.y * o.w - o.y * i.w, this.y = o.x * i.w - i.x * o.w, this.w = i.x * o.y - o.x * i.y;
    } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
      var s = arguments[0], a = arguments[1];
      this.x = s.y - a.y, this.y = a.x - s.x, this.w = s.x * a.y - a.x * s.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var f = arguments[0], h = arguments[1], g = arguments[2], p = arguments[3], y = f.y - h.y, d = h.x - f.x, E = f.x * h.y - h.x * f.y, C = g.y - p.y, _ = p.x - g.x, x = g.x * p.y - p.x * g.y;
    this.x = d * x - _ * E, this.y = C * E - y * x, this.w = y * _ - C * d;
  }
};
qe.prototype.getY = function() {
  var t = this.y / this.w;
  if (U.isNaN(t) || U.isInfinite(t))
    throw new Ui();
  return t;
};
qe.prototype.getX = function() {
  var t = this.x / this.w;
  if (U.isNaN(t) || U.isInfinite(t))
    throw new Ui();
  return t;
};
qe.prototype.getCoordinate = function() {
  var t = new v();
  return t.x = this.getX(), t.y = this.getY(), t;
};
qe.prototype.interfaces_ = function() {
  return [];
};
qe.prototype.getClass = function() {
  return qe;
};
qe.intersection = function(t, e, r, i) {
  var o = t.y - e.y, s = e.x - t.x, a = t.x * e.y - e.x * t.y, u = r.y - i.y, l = i.x - r.x, c = r.x * i.y - i.x * r.y, f = s * c - l * a, h = u * a - o * c, g = o * l - u * s, p = f / g, y = h / g;
  if (U.isNaN(p) || U.isInfinite(p) || U.isNaN(y) || U.isInfinite(y))
    throw new Ui();
  return new v(p, y);
};
var F = function n() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.init(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.init(r.x, i.x, r.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    this.init(o, s, a, u);
  }
}, Iu = { serialVersionUID: { configurable: !0 } };
F.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
F.prototype.equals = function(t) {
  if (!(t instanceof F))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
F.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new F();
  var e = this._minx > t._minx ? this._minx : t._minx, r = this._miny > t._miny ? this._miny : t._miny, i = this._maxx < t._maxx ? this._maxx : t._maxx, o = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new F(e, i, r, o);
};
F.prototype.isNull = function() {
  return this._maxx < this._minx;
};
F.prototype.getMaxX = function() {
  return this._maxx;
};
F.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof F) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : r >= this._minx && r <= this._maxx && i >= this._miny && i <= this._maxy;
  }
};
F.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof F) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof v) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : !(r > this._maxx || r < this._minx || i > this._maxy || i < this._miny);
  }
};
F.prototype.getMinY = function() {
  return this._miny;
};
F.prototype.getMinX = function() {
  return this._minx;
};
F.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof F) {
      var e = arguments[0];
      if (e.isNull())
        return null;
      this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.isNull() ? (this._minx = r, this._maxx = r, this._miny = i, this._maxy = i) : (r < this._minx && (this._minx = r), r > this._maxx && (this._maxx = r), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
  }
};
F.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
F.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
F.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
F.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
F.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
F.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
F.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
F.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
F.prototype.expandBy = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.expandBy(t, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this.isNull())
      return null;
    this._minx -= e, this._maxx += e, this._miny -= r, this._maxy += r, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
  }
};
F.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof F) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof v) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.covers(r, i);
  }
};
F.prototype.centre = function() {
  return this.isNull() ? null : new v((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
F.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof F) {
      var e = arguments[0];
      this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.init(r.x, i.x, r.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    o < s ? (this._minx = o, this._maxx = s) : (this._minx = s, this._maxx = o), a < u ? (this._miny = a, this._maxy = u) : (this._miny = u, this._maxy = a);
  }
};
F.prototype.getMaxY = function() {
  return this._maxy;
};
F.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var r = 0;
  return this._maxy < t._miny ? r = t._miny - this._maxy : this._miny > t._maxy && (r = this._miny - t._maxy), e === 0 ? r : r === 0 ? e : Math.sqrt(e * e + r * r);
};
F.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + v.hashCode(this._minx), t = 37 * t + v.hashCode(this._maxx), t = 37 * t + v.hashCode(this._miny), t = 37 * t + v.hashCode(this._maxy), t;
};
F.prototype.interfaces_ = function() {
  return [ke, Ge];
};
F.prototype.getClass = function() {
  return F;
};
F.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], r = arguments[2];
    return r.x >= (t.x < e.x ? t.x : e.x) && r.x <= (t.x > e.x ? t.x : e.x) && r.y >= (t.y < e.y ? t.y : e.y) && r.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = Math.min(s.x, a.x), l = Math.max(s.x, a.x), c = Math.min(i.x, o.x), f = Math.max(i.x, o.x);
    return !(c > l || f < u || (u = Math.min(s.y, a.y), l = Math.max(s.y, a.y), c = Math.min(i.y, o.y), f = Math.max(i.y, o.y), c > l) || f < u);
  }
};
Iu.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(F, Iu);
var er = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, rs = function(t) {
  this.geometryFactory = t || new H();
};
rs.prototype.read = function(t) {
  var e, r, i;
  t = t.replace(/[\n\r]/g, " ");
  var o = er.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (o = er.emptyTypeStr.exec(t), o[2] = void 0), o && (r = o[1].toLowerCase(), i = o[2], _i[r] && (e = _i[r].apply(this, [i]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
rs.prototype.write = function(t) {
  return this.extractGeometry(t);
};
rs.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!qr[e])
    return null;
  var r = e.toUpperCase(), i;
  return t.isEmpty() ? i = r + " EMPTY" : i = r + "(" + qr[e].apply(this, [t]) + ")", i;
};
var qr = {
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
    return qr.coordinate.call(this, t._coordinates._coordinates[0]);
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
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + qr.point.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return a comma delimited string of point coordinates from a line.
   *
   * @param {LineString} linestring
   * @return {String} A string of point coordinate strings representing the linestring.
   */
  linestring: function(t) {
    for (var e = this, r = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      r.push(qr.coordinate.apply(e, [t._points._coordinates[i]]));
    return r.join(",");
  },
  linearring: function(t) {
    for (var e = this, r = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      r.push(qr.coordinate.apply(e, [t._points._coordinates[i]]));
    return r.join(",");
  },
  /**
   * Return a comma delimited string of linestring strings from a
   * multilinestring.
   *
   * @param {MultiLineString} multilinestring
   * @return {String} A string of of linestring strings representing the multilinestring.
   */
  multilinestring: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + qr.linestring.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return a comma delimited string of linear ring arrays from a polygon.
   *
   * @param {Polygon} polygon
   * @return {String} An array of linear ring arrays representing the polygon.
   */
  polygon: function(t) {
    var e = this, r = [];
    r.push("(" + qr.linestring.apply(this, [t._shell]) + ")");
    for (var i = 0, o = t._holes.length; i < o; ++i)
      r.push("(" + qr.linestring.apply(e, [t._holes[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return an array of polygon arrays from a multipolygon.
   *
   * @param {MultiPolygon} multipolygon
   * @return {String} An array of polygon arrays representing the multipolygon.
   */
  multipolygon: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push("(" + qr.polygon.apply(e, [t._geometries[i]]) + ")");
    return r.join(",");
  },
  /**
   * Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an
   * geometrycollection.
   *
   * @param {GeometryCollection} collection
   * @return {String} internal WKT representation of the collection.
   */
  geometrycollection: function(t) {
    for (var e = this, r = [], i = 0, o = t._geometries.length; i < o; ++i)
      r.push(e.extractGeometry(t._geometries[i]));
    return r.join(",");
  }
}, _i = {
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
    var e = t.trim().split(er.spaces);
    return this.geometryFactory.createPoint(new v(
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
    for (var r, i = t.trim().split(","), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(er.trimParens, "$1"), o.push(_i.point.apply(e, [r]));
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
    for (var e = t.trim().split(","), r = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(er.spaces), r.push(new v(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLineString(r);
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
    for (var e = t.trim().split(","), r = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(er.spaces), r.push(new v(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLinearRing(r);
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
    for (var r, i = t.trim().split(er.parenComma), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(er.trimParens, "$1"), o.push(_i.linestring.apply(e, [r]));
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
    for (var r, i, o, s = t.trim().split(er.parenComma), a, u = [], l = 0, c = s.length; l < c; ++l)
      r = s[l].replace(er.trimParens, "$1"), i = _i.linestring.apply(e, [r]), o = e.geometryFactory.createLinearRing(i._points), l === 0 ? a = o : u.push(o);
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
    for (var r, i = t.trim().split(er.doubleParenComma), o = [], s = 0, a = i.length; s < a; ++s)
      r = i[s].replace(er.trimParens, "$1"), o.push(_i.polygon.apply(e, [r]));
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
    for (var r = t.trim().split("|"), i = [], o = 0, s = r.length; o < s; ++o)
      i.push(e.read(r[o]));
    return this.geometryFactory.createGeometryCollection(i);
  }
}, Ye = function(t) {
  this.parser = new rs(t);
};
Ye.prototype.write = function(t) {
  return this.parser.write(t);
};
Ye.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var Kr = function(n) {
  function t(e) {
    n.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new n().stack;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(Error), Xo = function(n) {
  function t() {
    if (n.call(this), arguments.length === 0)
      n.call(this);
    else if (arguments.length === 1) {
      var e = arguments[0];
      n.call(this, e);
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Kr), X = function() {
};
X.prototype.interfaces_ = function() {
  return [];
};
X.prototype.getClass = function() {
  return X;
};
X.shouldNeverReachHere = function() {
  if (arguments.length === 0)
    X.shouldNeverReachHere(null);
  else if (arguments.length === 1) {
    var t = arguments[0];
    throw new Xo("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
X.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], X.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new Xo() : new Xo(e);
};
X.equals = function() {
  var t, e, r;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], X.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], r = arguments[2], !e.equals(t)))
    throw new Xo("Expected " + t + " but encountered " + e + (r !== null ? ": " + r : ""));
};
var gt = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new v(), this._intPt[1] = new v(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, ci = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
gt.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
gt.prototype.getTopologySummary = function() {
  var t = new Er();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
gt.prototype.computeIntersection = function(t, e, r, i) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = r, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, r, i);
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
    var t = arguments[0], e = this.getEdgeDistance(t, 0), r = this.getEdgeDistance(t, 1);
    e > r ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
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
    for (var e = arguments[0], r = 0; r < this._result; r++)
      if (!(t._intPt[r].equals2D(t._inputLines[e][0]) || t._intPt[r].equals2D(t._inputLines[e][1])))
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
  var r = gt.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return r;
};
gt.prototype.isCollinear = function() {
  return this._result === gt.COLLINEAR_INTERSECTION;
};
gt.prototype.toString = function() {
  return Ye.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ye.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
gt.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
gt.prototype.isIntersection = function(t) {
  for (var e = this, r = 0; r < this._result; r++)
    if (e._intPt[r].equals2D(t))
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
gt.computeEdgeDistance = function(t, e, r) {
  var i = Math.abs(r.x - e.x), o = Math.abs(r.y - e.y), s = -1;
  if (t.equals(e))
    s = 0;
  else if (t.equals(r))
    i > o ? s = i : s = o;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    i > o ? s = a : s = u, s === 0 && !t.equals(e) && (s = Math.max(a, u));
  }
  return X.isTrue(!(s === 0 && !t.equals(e)), "Bad distance calculation"), s;
};
gt.nonRobustComputeEdgeDistance = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = Math.sqrt(i * i + o * o);
  return X.isTrue(!(s === 0 && !t.equals(e)), "Invalid distance calculation"), s;
};
ci.DONT_INTERSECT.get = function() {
  return 0;
};
ci.DO_INTERSECT.get = function() {
  return 1;
};
ci.COLLINEAR.get = function() {
  return 2;
};
ci.NO_INTERSECTION.get = function() {
  return 0;
};
ci.POINT_INTERSECTION.get = function() {
  return 1;
};
ci.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(gt, ci);
var Yn = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(r) {
    var i = new F(this._inputLines[0][0], this._inputLines[0][1]), o = new F(this._inputLines[1][0], this._inputLines[1][1]);
    return i.contains(r) && o.contains(r);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var r = arguments[0], i = arguments[1], o = arguments[2];
      if (this._isProper = !1, F.intersects(i, o, r) && M.orientationIndex(i, o, r) === 0 && M.orientationIndex(o, i, r) === 0)
        return this._isProper = !0, (r.equals(i) || r.equals(o)) && (this._isProper = !1), this._result = n.POINT_INTERSECTION, null;
      this._result = n.NO_INTERSECTION;
    } else
      return n.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(r, i, o, s, a) {
    a.x = this.smallestInAbsValue(r.x, i.x, o.x, s.x), a.y = this.smallestInAbsValue(r.y, i.y, o.y, s.y), r.x -= a.x, r.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(r, i, o, s) {
    var a = null;
    try {
      a = qe.intersection(r, i, o, s);
    } catch (u) {
      if (u instanceof Ui)
        a = t.nearestEndpoint(r, i, o, s);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(r, i, o, s) {
    var a = this.intersectionWithNormalization(r, i, o, s);
    return this.isInSegmentEnvelopes(a) || (a = new v(t.nearestEndpoint(r, i, o, s))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(r, i, o, s) {
    var a = r, u = Math.abs(a);
    return Math.abs(i) < u && (a = i, u = Math.abs(i)), Math.abs(o) < u && (a = o, u = Math.abs(o)), Math.abs(s) < u && (a = s), a;
  }, t.prototype.checkDD = function(r, i, o, s, a) {
    var u = ce.intersection(r, i, o, s), l = this.isInSegmentEnvelopes(u);
    qt.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && qt.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(r, i, o, s) {
    var a = new v(r), u = new v(i), l = new v(o), c = new v(s), f = new v();
    this.normalizeToEnvCentre(a, u, l, c, f);
    var h = this.safeHCoordinateIntersection(a, u, l, c);
    return h.x += f.x, h.y += f.y, h;
  }, t.prototype.computeCollinearIntersection = function(r, i, o, s) {
    var a = F.intersects(r, i, o), u = F.intersects(r, i, s), l = F.intersects(o, s, r), c = F.intersects(o, s, i);
    return a && u ? (this._intPt[0] = o, this._intPt[1] = s, n.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = r, this._intPt[1] = i, n.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = o, this._intPt[1] = r, o.equals(r) && !u && !c ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = o, this._intPt[1] = i, o.equals(i) && !u && !l ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = s, this._intPt[1] = r, s.equals(r) && !a && !c ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = s, this._intPt[1] = i, s.equals(i) && !a && !l ? n.POINT_INTERSECTION : n.COLLINEAR_INTERSECTION) : n.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(r, i, o, s, a) {
    var u = r.x < i.x ? r.x : i.x, l = r.y < i.y ? r.y : i.y, c = r.x > i.x ? r.x : i.x, f = r.y > i.y ? r.y : i.y, h = o.x < s.x ? o.x : s.x, g = o.y < s.y ? o.y : s.y, p = o.x > s.x ? o.x : s.x, y = o.y > s.y ? o.y : s.y, d = u > h ? u : h, E = c < p ? c : p, C = l > g ? l : g, _ = f < y ? f : y, x = (d + E) / 2, w = (C + _) / 2;
    a.x = x, a.y = w, r.x -= a.x, r.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.computeIntersect = function(r, i, o, s) {
    if (this._isProper = !1, !F.intersects(r, i, o, s))
      return n.NO_INTERSECTION;
    var a = M.orientationIndex(r, i, o), u = M.orientationIndex(r, i, s);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return n.NO_INTERSECTION;
    var l = M.orientationIndex(o, s, r), c = M.orientationIndex(o, s, i);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return n.NO_INTERSECTION;
    var f = a === 0 && u === 0 && l === 0 && c === 0;
    return f ? this.computeCollinearIntersection(r, i, o, s) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, r.equals2D(o) || r.equals2D(s) ? this._intPt[0] = r : i.equals2D(o) || i.equals2D(s) ? this._intPt[0] = i : a === 0 ? this._intPt[0] = new v(o) : u === 0 ? this._intPt[0] = new v(s) : l === 0 ? this._intPt[0] = new v(r) : c === 0 && (this._intPt[0] = new v(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(r, i, o, s)), n.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(r, i, o, s) {
    var a = r, u = M.distancePointLine(r, o, s), l = M.distancePointLine(i, o, s);
    return l < u && (u = l, a = i), l = M.distancePointLine(o, r, i), l < u && (u = l, a = o), l = M.distancePointLine(s, r, i), l < u && (u = l, a = s), a;
  }, t;
}(gt), Zn = function() {
};
Zn.prototype.interfaces_ = function() {
  return [];
};
Zn.prototype.getClass = function() {
  return Zn;
};
Zn.orientationIndex = function(t, e, r) {
  var i = e.x - t.x, o = e.y - t.y, s = r.x - e.x, a = r.y - e.y;
  return Zn.signOfDet2x2(i, o, s, a);
};
Zn.signOfDet2x2 = function(t, e, r, i) {
  var o = null, s = null, a = null;
  if (o = 1, t === 0 || i === 0)
    return e === 0 || r === 0 ? 0 : e > 0 ? r > 0 ? -o : o : r > 0 ? o : -o;
  if (e === 0 || r === 0)
    return i > 0 ? t > 0 ? o : -o : t > 0 ? -o : o;
  if (e > 0 ? i > 0 ? e <= i || (o = -o, s = t, t = r, r = s, s = e, e = i, i = s) : e <= -i ? (o = -o, r = -r, i = -i) : (s = t, t = -r, r = s, s = e, e = -i, i = s) : i > 0 ? -e <= i ? (o = -o, t = -t, e = -e) : (s = -t, t = r, r = s, s = -e, e = i, i = s) : e >= i ? (t = -t, e = -e, r = -r, i = -i) : (o = -o, s = -t, t = -r, r = s, s = -e, e = -i, i = s), t > 0)
    if (r > 0) {
      if (!(t <= r))
        return o;
    } else
      return o;
  else {
    if (r > 0)
      return -o;
    if (t >= r)
      o = -o, t = -t, r = -r;
    else
      return -o;
  }
  for (; ; ) {
    if (a = Math.floor(r / t), r = r - a * t, i = i - a * e, i < 0)
      return -o;
    if (i > e)
      return o;
    if (t > r + r) {
      if (e < i + i)
        return o;
    } else {
      if (e > i + i)
        return -o;
      r = t - r, i = e - i, o = -o;
    }
    if (i === 0)
      return r === 0 ? 0 : -o;
    if (r === 0 || (a = Math.floor(t / r), t = t - a * r, e = e - a * i, e < 0))
      return o;
    if (e > i)
      return -o;
    if (r > t + t) {
      if (i < e + e)
        return -o;
    } else {
      if (i > e + e)
        return o;
      t = r - t, e = i - e, o = -o;
    }
    if (e === 0)
      return t === 0 ? 0 : o;
    if (t === 0)
      return -o;
  }
};
var ar = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
ar.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var r = t.x, i = e.x;
    return r > i && (r = e.x, i = t.x), this._p.x >= r && this._p.x <= i && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var o = t.x - this._p.x, s = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = Zn.signOfDet2x2(o, s, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < s && (l = -l), l > 0 && this._crossingCount++;
  }
};
ar.prototype.isPointInPolygon = function() {
  return this.getLocation() !== m.EXTERIOR;
};
ar.prototype.getLocation = function() {
  return this._isPointOnSegment ? m.BOUNDARY : this._crossingCount % 2 === 1 ? m.INTERIOR : m.EXTERIOR;
};
ar.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
ar.prototype.interfaces_ = function() {
  return [];
};
ar.prototype.getClass = function() {
  return ar;
};
ar.locatePointInRing = function() {
  if (arguments[0] instanceof v && V(arguments[1], K)) {
    for (var t = arguments[0], e = arguments[1], r = new ar(t), i = new v(), o = new v(), s = 1; s < e.size(); s++)
      if (e.getCoordinate(s, i), e.getCoordinate(s - 1, o), r.countSegment(i, o), r.isOnSegment())
        return r.getLocation();
    return r.getLocation();
  } else if (arguments[0] instanceof v && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new ar(a), c = 1; c < u.length; c++) {
      var f = u[c], h = u[c - 1];
      if (l.countSegment(f, h), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var M = function() {
}, fi = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
M.prototype.interfaces_ = function() {
  return [];
};
M.prototype.getClass = function() {
  return M;
};
M.orientationIndex = function(t, e, r) {
  return ce.orientationIndex(t, e, r);
};
M.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, r = t[0].x, i = 1; i < t.length - 1; i++) {
      var o = t[i].x - r, s = t[i + 1].y, a = t[i - 1].y;
      e += o * (a - s);
    }
    return e / 2;
  } else if (V(arguments[0], K)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new v(), f = new v(), h = new v();
    u.getCoordinate(0, f), u.getCoordinate(1, h);
    var g = f.x;
    h.x -= g;
    for (var p = 0, y = 1; y < l - 1; y++)
      c.y = f.y, f.x = h.x, f.y = h.y, u.getCoordinate(y + 1, h), h.x -= g, p += f.x * (c.y - h.y);
    return p / 2;
  }
};
M.distanceLineLine = function(t, e, r, i) {
  if (t.equals(e))
    return M.distancePointLine(t, r, i);
  if (r.equals(i))
    return M.distancePointLine(i, t, e);
  var o = !1;
  if (!F.intersects(t, e, r, i))
    o = !0;
  else {
    var s = (e.x - t.x) * (i.y - r.y) - (e.y - t.y) * (i.x - r.x);
    if (s === 0)
      o = !0;
    else {
      var a = (t.y - r.y) * (i.x - r.x) - (t.x - r.x) * (i.y - r.y), u = (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y), l = u / s, c = a / s;
      (c < 0 || c > 1 || l < 0 || l > 1) && (o = !0);
    }
  }
  return o ? we.min(M.distancePointLine(t, r, i), M.distancePointLine(e, r, i), M.distancePointLine(r, t, e), M.distancePointLine(i, t, e)) : 0;
};
M.isPointInRing = function(t, e) {
  return M.locatePointInRing(t, e) !== m.EXTERIOR;
};
M.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var r = 0, i = new v();
  t.getCoordinate(0, i);
  for (var o = i.x, s = i.y, a = 1; a < e; a++) {
    t.getCoordinate(a, i);
    var u = i.x, l = i.y, c = u - o, f = l - s;
    r += Math.sqrt(c * c + f * f), o = u, s = l;
  }
  return r;
};
M.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new ft("Ring has fewer than 4 points, so orientation cannot be determined");
  for (var r = t[0], i = 0, o = 1; o <= e; o++) {
    var s = t[o];
    s.y > r.y && (r = s, i = o);
  }
  var a = i;
  do
    a = a - 1, a < 0 && (a = e);
  while (t[a].equals2D(r) && a !== i);
  var u = i;
  do
    u = (u + 1) % e;
  while (t[u].equals2D(r) && u !== i);
  var l = t[a], c = t[u];
  if (l.equals2D(r) || c.equals2D(r) || l.equals2D(c))
    return !1;
  var f = M.computeOrientation(l, r, c), h = !1;
  return f === 0 ? h = l.x > c.x : h = f > 0, h;
};
M.locatePointInRing = function(t, e) {
  return ar.locatePointInRing(t, e);
};
M.distancePointLinePerpendicular = function(t, e, r) {
  var i = (r.x - e.x) * (r.x - e.x) + (r.y - e.y) * (r.y - e.y), o = ((e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)) / i;
  return Math.abs(o) * Math.sqrt(i);
};
M.computeOrientation = function(t, e, r) {
  return M.orientationIndex(t, e, r);
};
M.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new ft("Line array must contain at least one vertex");
    for (var r = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
      var o = M.distancePointLine(t, e[i], e[i + 1]);
      o < r && (r = o);
    }
    return r;
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
M.isOnLine = function(t, e) {
  for (var r = new Yn(), i = 1; i < e.length; i++) {
    var o = e[i - 1], s = e[i];
    if (r.computeIntersection(t, o, s), r.hasIntersection())
      return !0;
  }
  return !1;
};
fi.CLOCKWISE.get = function() {
  return -1;
};
fi.RIGHT.get = function() {
  return M.CLOCKWISE;
};
fi.COUNTERCLOCKWISE.get = function() {
  return 1;
};
fi.LEFT.get = function() {
  return M.COUNTERCLOCKWISE;
};
fi.COLLINEAR.get = function() {
  return 0;
};
fi.STRAIGHT.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(M, fi);
var Zr = function() {
};
Zr.prototype.filter = function(t) {
};
Zr.prototype.interfaces_ = function() {
  return [];
};
Zr.prototype.getClass = function() {
  return Zr;
};
var z = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, Fr = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
z.prototype.isGeometryCollection = function() {
  return this.getSortIndex() === z.SORTINDEX_GEOMETRYCOLLECTION;
};
z.prototype.getFactory = function() {
  return this._factory;
};
z.prototype.getGeometryN = function(t) {
  return this;
};
z.prototype.getArea = function() {
  return 0;
};
z.prototype.isRectangle = function() {
  return !1;
};
z.prototype.equals = function() {
  if (arguments[0] instanceof z) {
    var t = arguments[0];
    return t === null ? !1 : this.equalsTopo(t);
  } else if (arguments[0] instanceof Object) {
    var e = arguments[0];
    if (!(e instanceof z))
      return !1;
    var r = e;
    return this.equalsExact(r);
  }
};
z.prototype.equalsExact = function(t) {
  return this === t || this.equalsExact(t, 0);
};
z.prototype.geometryChanged = function() {
  this.apply(z.geometryChangedFilter);
};
z.prototype.geometryChangedAction = function() {
  this._envelope = null;
};
z.prototype.equalsNorm = function(t) {
  return t === null ? !1 : this.norm().equalsExact(t.norm());
};
z.prototype.getLength = function() {
  return 0;
};
z.prototype.getNumGeometries = function() {
  return 1;
};
z.prototype.compareTo = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t;
    return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return this.getSortIndex() !== r.getSortIndex() ? this.getSortIndex() - r.getSortIndex() : this.isEmpty() && r.isEmpty() ? 0 : this.isEmpty() ? -1 : r.isEmpty() ? 1 : this.compareToSameClass(r, i);
  }
};
z.prototype.getUserData = function() {
  return this._userData;
};
z.prototype.getSRID = function() {
  return this._SRID;
};
z.prototype.getEnvelope = function() {
  return this.getFactory().toGeometry(this.getEnvelopeInternal());
};
z.prototype.checkNotGeometryCollection = function(t) {
  if (t.getSortIndex() === z.SORTINDEX_GEOMETRYCOLLECTION)
    throw new ft("This method does not support GeometryCollection arguments");
};
z.prototype.equal = function(t, e, r) {
  return r === 0 ? t.equals(e) : t.distance(e) <= r;
};
z.prototype.norm = function() {
  var t = this.copy();
  return t.normalize(), t;
};
z.prototype.getPrecisionModel = function() {
  return this._factory.getPrecisionModel();
};
z.prototype.getEnvelopeInternal = function() {
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new F(this._envelope);
};
z.prototype.setSRID = function(t) {
  this._SRID = t;
};
z.prototype.setUserData = function(t) {
  this._userData = t;
};
z.prototype.compare = function(t, e) {
  for (var r = t.iterator(), i = e.iterator(); r.hasNext() && i.hasNext(); ) {
    var o = r.next(), s = i.next(), a = o.compareTo(s);
    if (a !== 0)
      return a;
  }
  return r.hasNext() ? 1 : i.hasNext() ? -1 : 0;
};
z.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
z.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === z.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === z.SORTINDEX_MULTIPOINT || this.getSortIndex() === z.SORTINDEX_MULTILINESTRING || this.getSortIndex() === z.SORTINDEX_MULTIPOLYGON;
};
z.prototype.interfaces_ = function() {
  return [es, ke, Ge];
};
z.prototype.getClass = function() {
  return z;
};
z.hasNonEmptyElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (!t[e].isEmpty())
      return !0;
  return !1;
};
z.hasNullElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e] === null)
      return !0;
  return !1;
};
Fr.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
Fr.SORTINDEX_POINT.get = function() {
  return 0;
};
Fr.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
Fr.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
Fr.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
Fr.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
Fr.SORTINDEX_POLYGON.get = function() {
  return 5;
};
Fr.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
Fr.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
Fr.geometryChangedFilter.get = function() {
  return qs;
};
Object.defineProperties(z, Fr);
var qs = function() {
};
qs.interfaces_ = function() {
  return [Zr];
};
qs.filter = function(t) {
  t.geometryChangedAction();
};
var Lr = function() {
};
Lr.prototype.filter = function(t) {
};
Lr.prototype.interfaces_ = function() {
  return [];
};
Lr.prototype.getClass = function() {
  return Lr;
};
var Ae = function() {
}, rn = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
Ae.prototype.isInBoundary = function(t) {
};
Ae.prototype.interfaces_ = function() {
  return [];
};
Ae.prototype.getClass = function() {
  return Ae;
};
rn.Mod2BoundaryNodeRule.get = function() {
  return Ni;
};
rn.EndPointBoundaryNodeRule.get = function() {
  return Si;
};
rn.MultiValentEndPointBoundaryNodeRule.get = function() {
  return xi;
};
rn.MonoValentEndPointBoundaryNodeRule.get = function() {
  return wi;
};
rn.MOD2_BOUNDARY_RULE.get = function() {
  return new Ni();
};
rn.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Si();
};
rn.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new xi();
};
rn.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new wi();
};
rn.OGC_SFS_BOUNDARY_RULE.get = function() {
  return Ae.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(Ae, rn);
var Ni = function() {
};
Ni.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
Ni.prototype.interfaces_ = function() {
  return [Ae];
};
Ni.prototype.getClass = function() {
  return Ni;
};
var Si = function() {
};
Si.prototype.isInBoundary = function(t) {
  return t > 0;
};
Si.prototype.interfaces_ = function() {
  return [Ae];
};
Si.prototype.getClass = function() {
  return Si;
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
var wi = function() {
};
wi.prototype.isInBoundary = function(t) {
  return t === 1;
};
wi.prototype.interfaces_ = function() {
  return [Ae];
};
wi.prototype.getClass = function() {
  return wi;
};
var bt = function() {
};
bt.prototype.add = function() {
};
bt.prototype.addAll = function() {
};
bt.prototype.isEmpty = function() {
};
bt.prototype.iterator = function() {
};
bt.prototype.size = function() {
};
bt.prototype.toArray = function() {
};
bt.prototype.remove = function() {
};
function Xs(n) {
  this.message = n || "";
}
Xs.prototype = new Error();
Xs.prototype.name = "IndexOutOfBoundsException";
var qi = function() {
};
qi.prototype.hasNext = function() {
};
qi.prototype.next = function() {
};
qi.prototype.remove = function() {
};
var Xe = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(bt);
function Xi(n) {
  this.message = n || "";
}
Xi.prototype = new Error();
Xi.prototype.name = "NoSuchElementException";
var O = function(n) {
  function t() {
    n.call(this), this.array_ = [], arguments[0] instanceof bt && this.addAll(arguments[0]);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [n, bt];
  }, t.prototype.add = function(r) {
    return arguments.length === 1 ? this.array_.push(r) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, t.prototype.clear = function() {
    this.array_ = [];
  }, t.prototype.addAll = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.set = function(r, i) {
    var o = this.array_[r];
    return this.array_[r] = i, o;
  }, t.prototype.iterator = function() {
    return new Qc(this);
  }, t.prototype.get = function(r) {
    if (r < 0 || r >= this.size())
      throw new Xs();
    return this.array_[r];
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.toArray = function() {
    for (var r = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(r.array_[o]);
    return i;
  }, t.prototype.remove = function(r) {
    for (var i = this, o = !1, s = 0, a = this.array_.length; s < a; s++)
      if (i.array_[s] === r) {
        i.array_.splice(s, 1), o = !0;
        break;
      }
    return o;
  }, t;
}(Xe), Qc = function(n) {
  function t(e) {
    n.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new Xi();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(r) {
    return this.arrayList_.set(this.position_ - 1, r);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(qi), Eo = function(n) {
  function t() {
    if (n.call(this), arguments.length !== 0) {
      if (arguments.length === 1) {
        var r = arguments[0];
        this.ensureCapacity(r.length), this.add(r, !0);
      } else if (arguments.length === 2) {
        var i = arguments[0], o = arguments[1];
        this.ensureCapacity(i.length), this.add(i, o);
      }
    }
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
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
      return n.prototype.addAll.apply(this, arguments);
  }, t.prototype.clone = function() {
    for (var i = this, o = n.prototype.clone.call(this), s = 0; s < this.size(); s++)
      o.add(s, i.get(s).copy());
    return o;
  }, t.prototype.toCoordinateArray = function() {
    return this.toArray(t.coordArrayType);
  }, t.prototype.add = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0];
      n.prototype.add.call(this, o);
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var s = arguments[0], a = arguments[1];
        return this.add(s, a, !0), !0;
      } else if (arguments[0] instanceof v && typeof arguments[1] == "boolean") {
        var u = arguments[0], l = arguments[1];
        if (!l && this.size() >= 1) {
          var c = this.get(this.size() - 1);
          if (c.equals2D(u))
            return null;
        }
        n.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var f = arguments[0], h = arguments[1];
        return this.add(f, h), !0;
      }
    } else if (arguments.length === 3) {
      if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var g = arguments[0], p = arguments[1], y = arguments[2];
        if (y)
          for (var d = 0; d < g.length; d++)
            i.add(g[d], p);
        else
          for (var E = g.length - 1; E >= 0; E--)
            i.add(g[E], p);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof v) {
        var C = arguments[0], _ = arguments[1], x = arguments[2];
        if (!x) {
          var w = this.size();
          if (w > 0) {
            if (C > 0) {
              var T = this.get(C - 1);
              if (T.equals2D(_))
                return null;
            }
            if (C < w) {
              var R = this.get(C);
              if (R.equals2D(_))
                return null;
            }
          }
        }
        n.prototype.add.call(this, C, _);
      }
    } else if (arguments.length === 4) {
      var D = arguments[0], L = arguments[1], A = arguments[2], Y = arguments[3], G = 1;
      A > Y && (G = -1);
      for (var ot = A; ot !== Y; ot += G)
        i.add(D[ot], L);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new v(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(O), W = function() {
}, ns = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
ns.ForwardComparator.get = function() {
  return io;
};
ns.BidirectionalComparator.get = function() {
  return Li;
};
ns.coordArrayType.get = function() {
  return new Array(0).fill(null);
};
W.prototype.interfaces_ = function() {
  return [];
};
W.prototype.getClass = function() {
  return W;
};
W.isRing = function(t) {
  return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]));
};
W.ptNotInList = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (W.indexOf(i, e) < 0)
      return i;
  }
  return null;
};
W.scroll = function(t, e) {
  var r = W.indexOf(e, t);
  if (r < 0)
    return null;
  var i = new Array(t.length).fill(null);
  qt.arraycopy(t, r, i, 0, t.length - r), qt.arraycopy(t, 0, i, t.length - r, r), qt.arraycopy(i, 0, t, 0, t.length);
};
W.equals = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (t === e)
      return !0;
    if (t === null || e === null || t.length !== e.length)
      return !1;
    for (var r = 0; r < t.length; r++)
      if (!t[r].equals(e[r]))
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
W.intersection = function(t, e) {
  for (var r = new Eo(), i = 0; i < t.length; i++)
    e.intersects(t[i]) && r.add(t[i], !0);
  return r.toCoordinateArray();
};
W.hasRepeatedPoints = function(t) {
  for (var e = 1; e < t.length; e++)
    if (t[e - 1].equals(t[e]))
      return !0;
  return !1;
};
W.removeRepeatedPoints = function(t) {
  if (!W.hasRepeatedPoints(t))
    return t;
  var e = new Eo(t, !1);
  return e.toCoordinateArray();
};
W.reverse = function(t) {
  for (var e = t.length - 1, r = Math.trunc(e / 2), i = 0; i <= r; i++) {
    var o = t[i];
    t[i] = t[e - i], t[e - i] = o;
  }
};
W.removeNull = function(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    t[r] !== null && e++;
  var i = new Array(e).fill(null);
  if (e === 0)
    return i;
  for (var o = 0, s = 0; s < t.length; s++)
    t[s] !== null && (i[o++] = t[s]);
  return i;
};
W.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), r = 0; r < t.length; r++)
      e[r] = new v(t[r]);
    return e;
  } else if (arguments.length === 5)
    for (var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      s[a + l] = new v(i[o + l]);
};
W.isEqualReversed = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r], o = e[t.length - r - 1];
    if (i.compareTo(o) !== 0)
      return !1;
  }
  return !0;
};
W.envelope = function(t) {
  for (var e = new F(), r = 0; r < t.length; r++)
    e.expandToInclude(t[r]);
  return e;
};
W.toCoordinateArray = function(t) {
  return t.toArray(W.coordArrayType);
};
W.atLeastNCoordinatesOrNothing = function(t, e) {
  return e.length >= t ? e : [];
};
W.indexOf = function(t, e) {
  for (var r = 0; r < e.length; r++)
    if (t.equals(e[r]))
      return r;
  return -1;
};
W.increasingDirection = function(t) {
  for (var e = 0; e < Math.trunc(t.length / 2); e++) {
    var r = t.length - 1 - e, i = t[e].compareTo(t[r]);
    if (i !== 0)
      return i;
  }
  return 1;
};
W.compare = function(t, e) {
  for (var r = 0; r < t.length && r < e.length; ) {
    var i = t[r].compareTo(e[r]);
    if (i !== 0)
      return i;
    r++;
  }
  return r < e.length ? -1 : r < t.length ? 1 : 0;
};
W.minCoordinate = function(t) {
  for (var e = null, r = 0; r < t.length; r++)
    (e === null || e.compareTo(t[r]) > 0) && (e = t[r]);
  return e;
};
W.extract = function(t, e, r) {
  e = we.clamp(e, 0, t.length), r = we.clamp(r, -1, t.length);
  var i = r - e + 1;
  r < 0 && (i = 0), e >= t.length && (i = 0), r < e && (i = 0);
  var o = new Array(i).fill(null);
  if (i === 0)
    return o;
  for (var s = 0, a = e; a <= r; a++)
    o[s++] = t[a];
  return o;
};
Object.defineProperties(W, ns);
var io = function() {
};
io.prototype.compare = function(t, e) {
  var r = t, i = e;
  return W.compare(r, i);
};
io.prototype.interfaces_ = function() {
  return [Ii];
};
io.prototype.getClass = function() {
  return io;
};
var Li = function() {
};
Li.prototype.compare = function(t, e) {
  var r = t, i = e;
  if (r.length < i.length)
    return -1;
  if (r.length > i.length)
    return 1;
  if (r.length === 0)
    return 0;
  var o = W.compare(r, i), s = W.isEqualReversed(r, i);
  return s ? 0 : o;
};
Li.prototype.OLDcompare = function(t, e) {
  var r = t, i = e;
  if (r.length < i.length)
    return -1;
  if (r.length > i.length)
    return 1;
  if (r.length === 0)
    return 0;
  for (var o = W.increasingDirection(r), s = W.increasingDirection(i), a = o > 0 ? 0 : r.length - 1, u = s > 0 ? 0 : r.length - 1, l = 0; l < r.length; l++) {
    var c = r[a].compareTo(i[u]);
    if (c !== 0)
      return c;
    a += o, u += s;
  }
  return 0;
};
Li.prototype.interfaces_ = function() {
  return [Ii];
};
Li.prototype.getClass = function() {
  return Li;
};
var hi = function() {
};
hi.prototype.get = function() {
};
hi.prototype.put = function() {
};
hi.prototype.size = function() {
};
hi.prototype.values = function() {
};
hi.prototype.entrySet = function() {
};
var Kc = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t;
}(hi);
function Io(n) {
  this.message = n || "";
}
Io.prototype = new Error();
Io.prototype.name = "OperationNotSupported";
function is() {
}
is.prototype = new bt();
is.prototype.contains = function() {
};
var Ys = function(n) {
  function t() {
    n.call(this), this.array_ = [], arguments[0] instanceof bt && this.addAll(arguments[0]);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.contains = function(r) {
    for (var i = this, o = 0, s = this.array_.length; o < s; o++) {
      var a = i.array_[o];
      if (a === r)
        return !0;
    }
    return !1;
  }, t.prototype.add = function(r) {
    return this.contains(r) ? !1 : (this.array_.push(r), !0);
  }, t.prototype.addAll = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.remove = function(r) {
    throw new Error();
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.toArray = function() {
    for (var r = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(r.array_[o]);
    return i;
  }, t.prototype.iterator = function() {
    return new Zc(this);
  }, t;
}(is), Zc = function(n) {
  function t(e) {
    n.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new Xi();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new Io();
  }, t;
}(qi), Hr = 0, Sn = 1;
function Aa(n) {
  return n === null ? Hr : n.color;
}
function at(n) {
  return n === null ? null : n.parent;
}
function Ur(n, t) {
  n !== null && (n.color = t);
}
function Cs(n) {
  return n === null ? null : n.left;
}
function Fa(n) {
  return n === null ? null : n.right;
}
function Qt() {
  this.root_ = null, this.size_ = 0;
}
Qt.prototype = new Kc();
Qt.prototype.get = function(n) {
  for (var t = this.root_; t !== null; ) {
    var e = n.compareTo(t.key);
    if (e < 0)
      t = t.left;
    else if (e > 0)
      t = t.right;
    else
      return t.value;
  }
  return null;
};
Qt.prototype.put = function(n, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: n,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: Hr,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    }, this.size_ = 1, null;
  var e = this.root_, r, i;
  do
    if (r = e, i = n.compareTo(e.key), i < 0)
      e = e.left;
    else if (i > 0)
      e = e.right;
    else {
      var o = e.value;
      return e.value = t, o;
    }
  while (e !== null);
  var s = {
    key: n,
    left: null,
    right: null,
    value: t,
    parent: r,
    color: Hr,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return i < 0 ? r.left = s : r.right = s, this.fixAfterInsertion(s), this.size_++, null;
};
Qt.prototype.fixAfterInsertion = function(n) {
  var t = this;
  for (n.color = Sn; n != null && n !== this.root_ && n.parent.color === Sn; )
    if (at(n) === Cs(at(at(n)))) {
      var e = Fa(at(at(n)));
      Aa(e) === Sn ? (Ur(at(n), Hr), Ur(e, Hr), Ur(at(at(n)), Sn), n = at(at(n))) : (n === Fa(at(n)) && (n = at(n), t.rotateLeft(n)), Ur(at(n), Hr), Ur(at(at(n)), Sn), t.rotateRight(at(at(n))));
    } else {
      var r = Cs(at(at(n)));
      Aa(r) === Sn ? (Ur(at(n), Hr), Ur(r, Hr), Ur(at(at(n)), Sn), n = at(at(n))) : (n === Cs(at(n)) && (n = at(n), t.rotateRight(n)), Ur(at(n), Hr), Ur(at(at(n)), Sn), t.rotateLeft(at(at(n))));
    }
  this.root_.color = Hr;
};
Qt.prototype.values = function() {
  var n = new O(), t = this.getFirstEntry();
  if (t !== null)
    for (n.add(t.value); (t = Qt.successor(t)) !== null; )
      n.add(t.value);
  return n;
};
Qt.prototype.entrySet = function() {
  var n = new Ys(), t = this.getFirstEntry();
  if (t !== null)
    for (n.add(t); (t = Qt.successor(t)) !== null; )
      n.add(t);
  return n;
};
Qt.prototype.rotateLeft = function(n) {
  if (n != null) {
    var t = n.right;
    n.right = t.left, t.left != null && (t.left.parent = n), t.parent = n.parent, n.parent === null ? this.root_ = t : n.parent.left === n ? n.parent.left = t : n.parent.right = t, t.left = n, n.parent = t;
  }
};
Qt.prototype.rotateRight = function(n) {
  if (n != null) {
    var t = n.left;
    n.left = t.right, t.right != null && (t.right.parent = n), t.parent = n.parent, n.parent === null ? this.root_ = t : n.parent.right === n ? n.parent.right = t : n.parent.left = t, t.right = n, n.parent = t;
  }
};
Qt.prototype.getFirstEntry = function() {
  var n = this.root_;
  if (n != null)
    for (; n.left != null; )
      n = n.left;
  return n;
};
Qt.successor = function(n) {
  if (n === null)
    return null;
  if (n.right !== null) {
    for (var t = n.right; t.left !== null; )
      t = t.left;
    return t;
  } else {
    for (var e = n.parent, r = n; e !== null && r === e.right; )
      r = e, e = e.parent;
    return e;
  }
};
Qt.prototype.size = function() {
  return this.size_;
};
var oo = function() {
};
oo.prototype.interfaces_ = function() {
  return [];
};
oo.prototype.getClass = function() {
  return oo;
};
function Cu() {
}
Cu.prototype = new is();
function cr() {
  this.array_ = [], arguments[0] instanceof bt && this.addAll(arguments[0]);
}
cr.prototype = new Cu();
cr.prototype.contains = function(n) {
  for (var t = this, e = 0, r = this.array_.length; e < r; e++) {
    var i = t.array_[e];
    if (i.compareTo(n) === 0)
      return !0;
  }
  return !1;
};
cr.prototype.add = function(n) {
  var t = this;
  if (this.contains(n))
    return !1;
  for (var e = 0, r = this.array_.length; e < r; e++) {
    var i = t.array_[e];
    if (i.compareTo(n) === 1)
      return t.array_.splice(e, 0, n), !0;
  }
  return this.array_.push(n), !0;
};
cr.prototype.addAll = function(n) {
  for (var t = this, e = n.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
cr.prototype.remove = function(n) {
  throw new Io();
};
cr.prototype.size = function() {
  return this.array_.length;
};
cr.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
cr.prototype.toArray = function() {
  for (var n = this, t = [], e = 0, r = this.array_.length; e < r; e++)
    t.push(n.array_[e]);
  return t;
};
cr.prototype.iterator = function() {
  return new os(this);
};
var os = function(n) {
  this.treeSet_ = n, this.position_ = 0;
};
os.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new Xi();
  return this.treeSet_.array_[this.position_++];
};
os.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
os.prototype.remove = function() {
  throw new Io();
};
var bn = function() {
};
bn.sort = function() {
  var t = arguments[0], e, r, i, o;
  if (arguments.length === 1)
    o = function(a, u) {
      return a.compareTo(u);
    }, t.sort(o);
  else if (arguments.length === 2)
    i = arguments[1], o = function(a, u) {
      return i.compare(a, u);
    }, t.sort(o);
  else if (arguments.length === 3) {
    r = t.slice(arguments[1], arguments[2]), r.sort();
    var s = t.slice(0, arguments[1]).concat(r, t.slice(arguments[2], t.length));
    for (t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
  } else if (arguments.length === 4)
    for (r = t.slice(arguments[1], arguments[2]), i = arguments[3], o = function(a, u) {
      return i.compare(a, u);
    }, r.sort(o), s = t.slice(0, arguments[1]).concat(r, t.slice(arguments[2], t.length)), t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
};
bn.asList = function(t) {
  for (var e = new O(), r = 0, i = t.length; r < i; r++)
    e.add(t[r]);
  return e;
};
var Z = function() {
}, $e = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
$e.P.get = function() {
  return 0;
};
$e.L.get = function() {
  return 1;
};
$e.A.get = function() {
  return 2;
};
$e.FALSE.get = function() {
  return -1;
};
$e.TRUE.get = function() {
  return -2;
};
$e.DONTCARE.get = function() {
  return -3;
};
$e.SYM_FALSE.get = function() {
  return "F";
};
$e.SYM_TRUE.get = function() {
  return "T";
};
$e.SYM_DONTCARE.get = function() {
  return "*";
};
$e.SYM_P.get = function() {
  return "0";
};
$e.SYM_L.get = function() {
  return "1";
};
$e.SYM_A.get = function() {
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
Object.defineProperties(Z, $e);
var fr = function() {
};
fr.prototype.filter = function(t) {
};
fr.prototype.interfaces_ = function() {
  return [];
};
fr.prototype.getClass = function() {
  return fr;
};
var He = function() {
};
He.prototype.filter = function(t, e) {
};
He.prototype.isDone = function() {
};
He.prototype.isGeometryChanged = function() {
};
He.prototype.interfaces_ = function() {
  return [];
};
He.prototype.getClass = function() {
  return He;
};
var oe = function(n) {
  function t(r, i) {
    if (n.call(this, i), this._geometries = r || [], n.hasNullElements(this._geometries))
      throw new ft("geometries must not contain null elements");
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var i = this, o = new F(), s = 0; s < this._geometries.length; s++)
      o.expandToInclude(i._geometries[s].getEnvelopeInternal());
    return o;
  }, t.prototype.getGeometryN = function(i) {
    return this._geometries[i];
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_GEOMETRYCOLLECTION;
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
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      i._geometries[o].normalize();
    bn.sort(this._geometries);
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
      var o = arguments[0], s = new cr(bn.asList(this._geometries)), a = new cr(bn.asList(o._geometries));
      return this.compare(s, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, f = this.getNumGeometries(), h = c.getNumGeometries(), g = 0; g < f && g < h; ) {
        var p = i.getGeometryN(g), y = c.getGeometryN(g), d = p.compareToSameClass(y, l);
        if (d !== 0)
          return d;
        g++;
      }
      return g < f ? 1 : g < h ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (V(arguments[0], Lr))
      for (var o = arguments[0], s = 0; s < this._geometries.length; s++)
        i._geometries[s].apply(o);
    else if (V(arguments[0], He)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (i._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], fr)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        i._geometries[c].apply(l);
    } else if (V(arguments[0], Zr)) {
      var f = arguments[0];
      f.filter(this);
      for (var h = 0; h < this._geometries.length; h++)
        i._geometries[h].apply(f);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), X.shouldNeverReachHere(), null;
  }, t.prototype.clone = function() {
    var i = this, o = n.prototype.clone.call(this);
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
}(z), Dn = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
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
    return [oo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(oe), Oe = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = Ae.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this._geom = r, this._geomFact = r.getFactory(), this._bnRule = i;
  }
};
Oe.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Oe.prototype.getBoundary = function() {
  return this._geom instanceof yt ? this.boundaryLineString(this._geom) : this._geom instanceof Dn ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
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
  var e = this, r = new O();
  this._endpointMap = new Qt();
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    o.getNumPoints() !== 0 && (e.addEndpoint(o.getCoordinateN(0)), e.addEndpoint(o.getCoordinateN(o.getNumPoints() - 1)));
  }
  for (var s = this._endpointMap.entrySet().iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && r.add(a.getKey());
  }
  return W.toCoordinateArray(r);
};
Oe.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new Yo(), this._endpointMap.put(t, e)), e.count++;
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
    var r = arguments[0], i = arguments[1], o = new Oe(r, i);
    return o.getBoundary();
  }
};
var Yo = function() {
  this.count = null;
};
Yo.prototype.interfaces_ = function() {
  return [];
};
Yo.prototype.getClass = function() {
  return Yo;
};
function Jc() {
}
function $c() {
}
var tf = function() {
};
function ef() {
}
function rf() {
}
function nf() {
}
var Te = function() {
}, Hs = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
Te.prototype.interfaces_ = function() {
  return [];
};
Te.prototype.getClass = function() {
  return Te;
};
Te.chars = function(t, e) {
  for (var r = new Array(e).fill(null), i = 0; i < e; i++)
    r[i] = t;
  return String(r);
};
Te.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new ef(), r = new Jc();
    return t.printStackTrace(r), e.toString();
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1], s = "";
    new $c(Te.getStackTrace(i));
    for (var a = new nf(), u = 0; u < o; u++)
      try {
        s += a.readLine() + Te.NEWLINE;
      } catch (l) {
        if (l instanceof rf)
          X.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return s;
  }
};
Te.split = function(t, e) {
  for (var r = e.length, i = new O(), o = "" + t, s = o.indexOf(e); s >= 0; ) {
    var a = o.substring(0, s);
    i.add(a), o = o.substring(s + r), s = o.indexOf(e);
  }
  o.length > 0 && i.add(o);
  for (var u = new Array(i.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = i.get(l);
  return u;
};
Te.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Te.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
Te.spaces = function(t) {
  return Te.chars(" ", t);
};
Hs.NEWLINE.get = function() {
  return qt.getProperty("line.separator");
};
Hs.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new tf();
};
Object.defineProperties(Te, Hs);
var Ct = function() {
};
Ct.prototype.interfaces_ = function() {
  return [];
};
Ct.prototype.getClass = function() {
  return Ct;
};
Ct.copyCoord = function(t, e, r, i) {
  for (var o = Math.min(t.getDimension(), r.getDimension()), s = 0; s < o; s++)
    r.setOrdinate(i, s, t.getOrdinate(e, s));
};
Ct.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, K.X) === t.getOrdinate(e - 1, K.X) && t.getOrdinate(0, K.Y) === t.getOrdinate(e - 1, K.Y);
};
Ct.isEqual = function(t, e) {
  var r = t.size(), i = e.size();
  if (r !== i)
    return !1;
  for (var o = Math.min(t.getDimension(), e.getDimension()), s = 0; s < r; s++)
    for (var a = 0; a < o; a++) {
      var u = t.getOrdinate(s, a), l = e.getOrdinate(s, a);
      if (t.getOrdinate(s, a) !== e.getOrdinate(s, a) && !(U.isNaN(u) && U.isNaN(l)))
        return !1;
    }
  return !0;
};
Ct.extend = function(t, e, r) {
  var i = t.create(r, e.getDimension()), o = e.size();
  if (Ct.copy(e, 0, i, 0, o), o > 0)
    for (var s = o; s < r; s++)
      Ct.copy(e, o - 1, i, s, 1);
  return i;
};
Ct.reverse = function(t) {
  for (var e = t.size() - 1, r = Math.trunc(e / 2), i = 0; i <= r; i++)
    Ct.swap(t, i, e - i);
};
Ct.swap = function(t, e, r) {
  if (e === r)
    return null;
  for (var i = 0; i < t.getDimension(); i++) {
    var o = t.getOrdinate(e, i);
    t.setOrdinate(e, i, t.getOrdinate(r, i)), t.setOrdinate(r, i, o);
  }
};
Ct.copy = function(t, e, r, i, o) {
  for (var s = 0; s < o; s++)
    Ct.copyCoord(t, e + s, r, i + s);
};
Ct.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var r = t.getDimension(), i = new Er();
    i.append("(");
    for (var o = 0; o < e; o++) {
      o > 0 && i.append(" ");
      for (var s = 0; s < r; s++)
        s > 0 && i.append(","), i.append(Te.toString(t.getOrdinate(o, s)));
    }
    return i.append(")"), i.toString();
  }
};
Ct.ensureValidRing = function(t, e) {
  var r = e.size();
  if (r === 0)
    return e;
  if (r <= 3)
    return Ct.createClosedRing(t, e, 4);
  var i = e.getOrdinate(0, K.X) === e.getOrdinate(r - 1, K.X) && e.getOrdinate(0, K.Y) === e.getOrdinate(r - 1, K.Y);
  return i ? e : Ct.createClosedRing(t, e, r + 1);
};
Ct.createClosedRing = function(t, e, r) {
  var i = t.create(r, e.getDimension()), o = e.size();
  Ct.copy(e, 0, i, 0, o);
  for (var s = o; s < r; s++)
    Ct.copy(e, 0, i, s, 1);
  return i;
};
var yt = function(n) {
  function t(r, i) {
    n.call(this, i), this._points = null, this.init(r);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new F() : this._points.expandEnvelope(new F());
  }, t.prototype.isRing = function() {
    return this.isClosed() && this.isSimple();
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_LINESTRING;
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
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < Math.trunc(this._points.size() / 2); o++) {
      var s = i._points.size() - 1 - o;
      if (!i._points.getCoordinate(o).equals(i._points.getCoordinate(s)))
        return i._points.getCoordinate(o).compareTo(i._points.getCoordinate(s)) > 0 && Ct.reverse(i._points), null;
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
    return M.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Ct.reverse(i);
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
    if (V(arguments[0], Lr))
      for (var o = arguments[0], s = 0; s < this._points.size(); s++)
        o.filter(i._points.getCoordinate(s));
    else if (V(arguments[0], He)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(i._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], fr)) {
      var l = arguments[0];
      l.filter(this);
    } else if (V(arguments[0], Zr)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Oe(this).getBoundary();
  }, t.prototype.isEquivalentClass = function(i) {
    return i instanceof t;
  }, t.prototype.clone = function() {
    var i = n.prototype.clone.call(this);
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
    return [oo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(z), so = function() {
};
so.prototype.interfaces_ = function() {
  return [];
};
so.prototype.getClass = function() {
  return so;
};
var ve = function(n) {
  function t(r, i) {
    n.call(this, i), this._coordinates = r || null, this.init(this._coordinates);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new F();
    var i = new F();
    return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_POINT;
  }, t.prototype.getCoordinates = function() {
    return this.isEmpty() ? [] : [this.getCoordinate()];
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? this.isEmpty() && i.isEmpty() ? !0 : this.isEmpty() !== i.isEmpty() ? !1 : this.equal(i.getCoordinate(), this.getCoordinate(), o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
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
    if (V(arguments[0], Lr)) {
      var i = arguments[0];
      if (this.isEmpty())
        return null;
      i.filter(this.getCoordinate());
    } else if (V(arguments[0], He)) {
      var o = arguments[0];
      if (this.isEmpty())
        return null;
      o.filter(this._coordinates, 0), o.isGeometryChanged() && this.geometryChanged();
    } else if (V(arguments[0], fr)) {
      var s = arguments[0];
      s.filter(this);
    } else if (V(arguments[0], Zr)) {
      var a = arguments[0];
      a.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.clone = function() {
    var i = n.prototype.clone.call(this);
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
    i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), X.isTrue(i.size() <= 1), this._coordinates = i;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [so];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(z), hn = function() {
};
hn.prototype.interfaces_ = function() {
  return [];
};
hn.prototype.getClass = function() {
  return hn;
};
var Dt = function(n) {
  function t(r, i, o) {
    if (n.call(this, o), this._shell = null, this._holes = null, r === null && (r = this.getFactory().createLinearRing()), i === null && (i = []), n.hasNullElements(i))
      throw new ft("holes must not contain null elements");
    if (r.isEmpty() && n.hasNonEmptyElements(i))
      throw new ft("shell is empty but holes are not");
    this._shell = r, this._holes = i;
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this._shell.getEnvelopeInternal();
  }, t.prototype.getSortIndex = function() {
    return n.SORTINDEX_POLYGON;
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
    o += Math.abs(M.signedArea(this._shell.getCoordinateSequence()));
    for (var s = 0; s < this._holes.length; s++)
      o -= Math.abs(M.signedArea(i._holes[s].getCoordinateSequence()));
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
      var h = i.getX(f), g = i.getY(f), p = h !== l, y = g !== c;
      if (p === y)
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
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    var i = this;
    if (arguments.length === 0) {
      this.normalize(this._shell, !0);
      for (var o = 0; o < this._holes.length; o++)
        i.normalize(i._holes[o], !1);
      bn.sort(this._holes);
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1];
      if (s.isEmpty())
        return null;
      var u = new Array(s.getCoordinates().length - 1).fill(null);
      qt.arraycopy(s.getCoordinates(), 0, u, 0, u.length);
      var l = W.minCoordinate(s.getCoordinates());
      W.scroll(u, l), qt.arraycopy(u, 0, s.getCoordinates(), 0, u.length), s.getCoordinates()[u.length] = u[0], M.isCCW(s.getCoordinates()) === a && W.reverse(s.getCoordinates());
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
      for (var p = this.getNumInteriorRing(), y = c.getNumInteriorRing(), d = 0; d < p && d < y; ) {
        var E = i.getInteriorRingN(d), C = c.getInteriorRingN(d), _ = E.compareToSameClass(C, l);
        if (_ !== 0)
          return _;
        d++;
      }
      return d < p ? 1 : d < y ? -1 : 0;
    }
  }, t.prototype.apply = function(i) {
    var o = this;
    if (V(i, Lr)) {
      this._shell.apply(i);
      for (var s = 0; s < this._holes.length; s++)
        o._holes[s].apply(i);
    } else if (V(i, He)) {
      if (this._shell.apply(i), !i.isDone())
        for (var a = 0; a < this._holes.length && (o._holes[a].apply(i), !i.isDone()); a++)
          ;
      i.isGeometryChanged() && this.geometryChanged();
    } else if (V(i, fr))
      i.filter(this);
    else if (V(i, Zr)) {
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
    var i = this, o = n.prototype.clone.call(this);
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
    return [hn];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(z), bi = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_MULTIPOINT;
  }, t.prototype.isValid = function() {
    return !0;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return this._geometries[i].getCoordinate();
    } else
      return n.prototype.getCoordinate.apply(this, arguments);
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
    return [so];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(oe), br = function(n) {
  function t(r, i) {
    r instanceof v && i instanceof H && (r = i.getCoordinateSequenceFactory().create(r)), n.call(this, r, i), this.validateConstruction();
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return Z.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : n.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Ct.reverse(i);
    var o = this.getFactory().createLinearRing(i);
    return o;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !n.prototype.isClosed.call(this))
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
}(yt), xr = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return z.SORTINDEX_MULTIPOLYGON;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? n.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return n.prototype.equalsExact.apply(this, arguments);
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
    return [hn];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(oe), Fe = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, ss = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
Fe.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
Fe.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var r = this.editInternal(t, e);
  return this._isUserDataCopied && r.setUserData(t.getUserData()), r;
};
Fe.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof oe ? this.editGeometryCollection(t, e) : t instanceof Dt ? this.editPolygon(t, e) : t instanceof ve ? e.edit(t, this._factory) : t instanceof yt ? e.edit(t, this._factory) : (X.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
Fe.prototype.editGeometryCollection = function(t, e) {
  for (var r = this, i = e.edit(t, this._factory), o = new O(), s = 0; s < i.getNumGeometries(); s++) {
    var a = r.edit(i.getGeometryN(s), e);
    a === null || a.isEmpty() || o.add(a);
  }
  return i.getClass() === bi ? this._factory.createMultiPoint(o.toArray([])) : i.getClass() === Dn ? this._factory.createMultiLineString(o.toArray([])) : i.getClass() === xr ? this._factory.createMultiPolygon(o.toArray([])) : this._factory.createGeometryCollection(o.toArray([]));
};
Fe.prototype.editPolygon = function(t, e) {
  var r = this, i = e.edit(t, this._factory);
  if (i === null && (i = this._factory.createPolygon(null)), i.isEmpty())
    return i;
  var o = this.edit(i.getExteriorRing(), e);
  if (o === null || o.isEmpty())
    return this._factory.createPolygon();
  for (var s = new O(), a = 0; a < i.getNumInteriorRing(); a++) {
    var u = r.edit(i.getInteriorRingN(a), e);
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
ss.NoOpGeometryOperation.get = function() {
  return ao;
};
ss.CoordinateOperation.get = function() {
  return uo;
};
ss.CoordinateSequenceOperation.get = function() {
  return lo;
};
Object.defineProperties(Fe, ss);
var ao = function() {
};
ao.prototype.edit = function(t, e) {
  return t;
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
  var r = this.editCoordinates(t.getCoordinates(), t);
  return r === null ? t : t instanceof br ? e.createLinearRing(r) : t instanceof yt ? e.createLineString(r) : t instanceof ve ? r.length > 0 ? e.createPoint(r[0]) : e.createPoint() : t;
};
uo.prototype.interfaces_ = function() {
  return [Fe.GeometryEditorOperation];
};
uo.prototype.getClass = function() {
  return uo;
};
var lo = function() {
};
lo.prototype.edit = function(t, e) {
  return t instanceof br ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof yt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof ve ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
lo.prototype.interfaces_ = function() {
  return [Fe.GeometryEditorOperation];
};
lo.prototype.getClass = function() {
  return lo;
};
var _t = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var r = 0; r < e; r++)
        t._coordinates[r] = new v();
    } else if (V(arguments[0], K)) {
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
        t._coordinates[c] = new v();
    }
  }
}, Nu = { serialVersionUID: { configurable: !0 } };
_t.prototype.setOrdinate = function(t, e, r) {
  switch (e) {
    case K.X:
      this._coordinates[t].x = r;
      break;
    case K.Y:
      this._coordinates[t].y = r;
      break;
    case K.Z:
      this._coordinates[t].z = r;
      break;
    default:
      throw new ft("invalid ordinateIndex");
  }
};
_t.prototype.size = function() {
  return this._coordinates.length;
};
_t.prototype.getOrdinate = function(t, e) {
  switch (e) {
    case K.X:
      return this._coordinates[t].x;
    case K.Y:
      return this._coordinates[t].y;
    case K.Z:
      return this._coordinates[t].z;
  }
  return U.NaN;
};
_t.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    r.x = this._coordinates[e].x, r.y = this._coordinates[e].y, r.z = this._coordinates[e].z;
  }
};
_t.prototype.getCoordinateCopy = function(t) {
  return new v(this._coordinates[t]);
};
_t.prototype.getDimension = function() {
  return this._dimension;
};
_t.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
_t.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), r = 0; r < this._coordinates.length; r++)
    e[r] = t._coordinates[r].clone();
  return new _t(e, this._dimension);
};
_t.prototype.expandEnvelope = function(t) {
  for (var e = this, r = 0; r < this._coordinates.length; r++)
    t.expandToInclude(e._coordinates[r]);
  return t;
};
_t.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), r = 0; r < this._coordinates.length; r++)
    e[r] = t._coordinates[r].copy();
  return new _t(e, this._dimension);
};
_t.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new Er(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var r = 1; r < this._coordinates.length; r++)
      e.append(", "), e.append(t._coordinates[r]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
_t.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
_t.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
_t.prototype.interfaces_ = function() {
  return [K, Ge];
};
_t.prototype.getClass = function() {
  return _t;
};
Nu.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(_t, Nu);
var Pr = function() {
}, Ws = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
Pr.prototype.readResolve = function() {
  return Pr.instance();
};
Pr.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new _t(t);
    } else if (V(arguments[0], K)) {
      var e = arguments[0];
      return new _t(e);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    return i > 3 && (i = 3), i < 2 ? new _t(r) : new _t(r, i);
  }
};
Pr.prototype.interfaces_ = function() {
  return [Ci, Ge];
};
Pr.prototype.getClass = function() {
  return Pr;
};
Pr.instance = function() {
  return Pr.instanceObject;
};
Ws.serialVersionUID.get = function() {
  return -4099577099607551500;
};
Ws.instanceObject.get = function() {
  return new Pr();
};
Object.defineProperties(Pr, Ws);
var Su = function(n) {
  function t() {
    n.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.get = function(r) {
    return this.map_.get(r) || null;
  }, t.prototype.put = function(r, i) {
    return this.map_.set(r, i), i;
  }, t.prototype.values = function() {
    for (var r = new O(), i = this.map_.values(), o = i.next(); !o.done; )
      r.add(o.value), o = i.next();
    return r;
  }, t.prototype.entrySet = function() {
    var r = new Ys();
    return this.map_.entries().forEach(function(i) {
      return r.add(i);
    }), r;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(hi), $ = function n() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = n.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof hr) {
      var t = arguments[0];
      this._modelType = t, t === n.FIXED && this.setScale(1);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      this._modelType = n.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof n) {
      var r = arguments[0];
      this._modelType = r._modelType, this._scale = r._scale;
    }
  }
}, js = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
$.prototype.equals = function(t) {
  if (!(t instanceof $))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
$.prototype.compareTo = function(t) {
  var e = t, r = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
  return new lr(r).compareTo(new lr(i));
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
    if (U.isNaN(t))
      return t;
    if (this._modelType === $.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === $.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof v) {
    var r = arguments[0];
    if (this._modelType === $.FLOATING)
      return null;
    r.x = this.makePrecise(r.x), r.y = this.makePrecise(r.y);
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
js.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
js.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties($, js);
var hr = function n(t) {
  this._name = t || null, n.nameToTypeMap.put(t, this);
}, Qs = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
hr.prototype.readResolve = function() {
  return hr.nameToTypeMap.get(this._name);
};
hr.prototype.toString = function() {
  return this._name;
};
hr.prototype.interfaces_ = function() {
  return [Ge];
};
hr.prototype.getClass = function() {
  return hr;
};
Qs.serialVersionUID.get = function() {
  return -552860263173159e4;
};
Qs.nameToTypeMap.get = function() {
  return new Su();
};
Object.defineProperties(hr, Qs);
$.Type = hr;
$.FIXED = new hr("FIXED");
$.FLOATING = new hr("FLOATING");
$.FLOATING_SINGLE = new hr("FLOATING SINGLE");
var H = function n() {
  this._precisionModel = new $(), this._SRID = 0, this._coordinateSequenceFactory = n.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? V(arguments[0], Ci) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof $ && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, xu = { serialVersionUID: { configurable: !0 } };
H.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new v(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new v(t.getMinX(), t.getMinY()), new v(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new v(t.getMinX(), t.getMinY()), new v(t.getMinX(), t.getMaxY()), new v(t.getMaxX(), t.getMaxY()), new v(t.getMaxX(), t.getMinY()), new v(t.getMinX(), t.getMinY())]), null);
};
H.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new yt(this.getCoordinateSequenceFactory().create(t), this);
    if (V(t, K))
      return new yt(t, this);
  } else
    return new yt(this.getCoordinateSequenceFactory().create([]), this);
};
H.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new Dn(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Dn(t, this);
  }
};
H.prototype.buildGeometry = function(t) {
  for (var e = null, r = !1, i = !1, o = t.iterator(); o.hasNext(); ) {
    var s = o.next(), a = s.getClass();
    e === null && (e = a), a !== e && (r = !0), s.isGeometryCollectionOrDerived() && (i = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (r || i)
    return this.createGeometryCollection(H.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof Dt)
      return this.createMultiPolygon(H.toPolygonArray(t));
    if (u instanceof yt)
      return this.createMultiLineString(H.toLineStringArray(t));
    if (u instanceof ve)
      return this.createMultiPoint(H.toPointArray(t));
    X.shouldNeverReachHere("Unhandled class: " + u.getClass().getName());
  }
  return u;
};
H.prototype.createMultiPointFromCoords = function(t) {
  return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
};
H.prototype.createPoint = function() {
  if (arguments.length === 0)
    return this.createPoint(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (V(arguments[0], K)) {
      var e = arguments[0];
      return new ve(e, this);
    }
  }
};
H.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
H.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new Dt(null, null, this);
  if (arguments.length === 1) {
    if (V(arguments[0], K)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof br) {
      var r = arguments[0];
      return this.createPolygon(r, null);
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    return new Dt(i, o, this);
  }
};
H.prototype.getSRID = function() {
  return this._SRID;
};
H.prototype.createGeometryCollection = function() {
  if (arguments.length === 0)
    return new oe(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new oe(t, this);
  }
};
H.prototype.createGeometry = function(t) {
  var e = new Fe(this);
  return e.edit(t, {
    edit: function() {
      if (arguments.length === 2) {
        var r = arguments[0];
        return this._coordinateSequenceFactory.create(r);
      }
    }
  });
};
H.prototype.getPrecisionModel = function() {
  return this._precisionModel;
};
H.prototype.createLinearRing = function() {
  if (arguments.length === 0)
    return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
    } else if (V(arguments[0], K)) {
      var e = arguments[0];
      return new br(e, this);
    }
  }
};
H.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new xr(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new xr(t, this);
  }
};
H.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new bi(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new bi(e, this);
    } else if (arguments[0] instanceof Array) {
      var r = arguments[0];
      return this.createMultiPoint(r !== null ? this.getCoordinateSequenceFactory().create(r) : null);
    } else if (V(arguments[0], K)) {
      var i = arguments[0];
      if (i === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var o = new Array(i.size()).fill(null), s = 0; s < i.size(); s++) {
        var a = t.getCoordinateSequenceFactory().create(1, i.getDimension());
        Ct.copy(i, s, a, 0, 1), o[s] = t.createPoint(a);
      }
      return this.createMultiPoint(o);
    }
  }
};
H.prototype.interfaces_ = function() {
  return [Ge];
};
H.prototype.getClass = function() {
  return H;
};
H.toMultiPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toGeometryArray = function(t) {
  if (t === null)
    return null;
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.getDefaultCoordinateSequenceFactory = function() {
  return Pr.instance();
};
H.toMultiLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toMultiPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toLinearRingArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.createPointFromInternalCoord = function(t, e) {
  return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
};
xu.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(H, xu);
var of = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], as = function(t) {
  this.geometryFactory = t || new H();
};
as.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var r = e.type;
  if (!ir[r])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return of.indexOf(r) !== -1 ? ir[r].apply(this, [e.coordinates]) : r === "GeometryCollection" ? ir[r].apply(this, [e.geometries]) : ir[r].apply(this, [e]);
};
as.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!Xr[e])
    throw new Error("Geometry is not supported");
  return Xr[e].apply(this, [t]);
};
var ir = {
  /**
   * Parse a GeoJSON Feature object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} Feature with geometry/bbox converted to JSTS Geometries.
   */
  Feature: function(n) {
    var t = {};
    for (var e in n)
      t[e] = n[e];
    if (n.geometry) {
      var r = n.geometry.type;
      if (!ir[r])
        throw new Error("Unknown GeoJSON type: " + n.type);
      t.geometry = this.read(n.geometry);
    }
    return n.bbox && (t.bbox = ir.bbox.apply(this, [n.bbox])), t;
  },
  /**
   * Parse a GeoJSON FeatureCollection object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} FeatureCollection with geometry/bbox converted to JSTS Geometries.
   */
  FeatureCollection: function(n) {
    var t = this, e = {};
    if (n.features) {
      e.features = [];
      for (var r = 0; r < n.features.length; ++r)
        e.features.push(t.read(n.features[r]));
    }
    return n.bbox && (e.bbox = this.parse.bbox.apply(this, [n.bbox])), e;
  },
  /**
   * Convert the ordinates in an array to an array of Coordinates
   *
   * @param {Array}
   *          array Array with {Number}s.
   *
   * @return {Array} Array with Coordinates.
   */
  coordinates: function(n) {
    for (var t = [], e = 0; e < n.length; ++e) {
      var r = n[e];
      t.push(new v(r[0], r[1]));
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
  bbox: function(n) {
    return this.geometryFactory.createLinearRing([
      new v(n[0], n[1]),
      new v(n[2], n[1]),
      new v(n[2], n[3]),
      new v(n[0], n[3]),
      new v(n[0], n[1])
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
  Point: function(n) {
    var t = new v(n[0], n[1]);
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
  MultiPoint: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r)
      e.push(ir.Point.apply(t, [n[r]]));
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
  LineString: function(n) {
    var t = ir.coordinates.apply(this, [n]);
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
  MultiLineString: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r)
      e.push(ir.LineString.apply(t, [n[r]]));
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
  Polygon: function(n) {
    for (var t = this, e = ir.coordinates.apply(this, [n[0]]), r = this.geometryFactory.createLinearRing(e), i = [], o = 1; o < n.length; ++o) {
      var s = n[o], a = ir.coordinates.apply(t, [s]), u = t.geometryFactory.createLinearRing(a);
      i.push(u);
    }
    return this.geometryFactory.createPolygon(r, i);
  },
  /**
   * Convert an Array to a MultiPolygon
   *
   * @param {Array}
   *          array Array of arrays with shell and rings.
   *
   * @return {MultiPolygon} MultiPolygon.
   */
  MultiPolygon: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r) {
      var i = n[r];
      e.push(ir.Polygon.apply(t, [i]));
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
  GeometryCollection: function(n) {
    for (var t = this, e = [], r = 0; r < n.length; ++r) {
      var i = n[r];
      e.push(t.read(i));
    }
    return this.geometryFactory.createGeometryCollection(e);
  }
}, Xr = {
  /**
   * Convert a Coordinate to an Array
   *
   * @param {Coordinate}
   *          coordinate Coordinate to convert.
   *
   * @return {Array} Array of ordinates.
   */
  coordinate: function(n) {
    return [n.x, n.y];
  },
  /**
   * Convert a Point to a GeoJSON object
   *
   * @param {Point}
   *          point Point to convert.
   *
   * @return {Array} Array of 2 ordinates (paired to a coordinate).
   */
  Point: function(n) {
    var t = Xr.coordinate.apply(this, [n.getCoordinate()]);
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
  MultiPoint: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = Xr.Point.apply(t, [i]);
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
  LineString: function(n) {
    for (var t = this, e = [], r = n.getCoordinates(), i = 0; i < r.length; ++i) {
      var o = r[i];
      e.push(Xr.coordinate.apply(t, [o]));
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
  MultiLineString: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = Xr.LineString.apply(t, [i]);
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
  Polygon: function(n) {
    var t = this, e = [], r = Xr.LineString.apply(this, [n._shell]);
    e.push(r.coordinates);
    for (var i = 0; i < n._holes.length; ++i) {
      var o = n._holes[i], s = Xr.LineString.apply(t, [o]);
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
  MultiPolygon: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = Xr.Polygon.apply(t, [i]);
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
  GeometryCollection: function(n) {
    for (var t = this, e = [], r = 0; r < n._geometries.length; ++r) {
      var i = n._geometries[r], o = i.getGeometryType();
      e.push(Xr[o].apply(t, [i]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, Ks = function(t) {
  this.geometryFactory = t || new H(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new as(this.geometryFactory);
};
Ks.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === $.FIXED && this.reducePrecision(e), e;
};
Ks.prototype.reducePrecision = function(t) {
  var e = this, r, i;
  if (t.coordinate)
    this.precisionModel.makePrecise(t.coordinate);
  else if (t.points)
    for (r = 0, i = t.points.length; r < i; r++)
      e.precisionModel.makePrecise(t.points[r]);
  else if (t.geometries)
    for (r = 0, i = t.geometries.length; r < i; r++)
      e.reducePrecision(t.geometries[r]);
};
var wu = function() {
  this.parser = new as(this.geometryFactory);
};
wu.prototype.write = function(t) {
  return this.parser.write(t);
};
var b = function() {
}, us = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
b.prototype.interfaces_ = function() {
  return [];
};
b.prototype.getClass = function() {
  return b;
};
b.opposite = function(t) {
  return t === b.LEFT ? b.RIGHT : t === b.RIGHT ? b.LEFT : t;
};
us.ON.get = function() {
  return 0;
};
us.LEFT.get = function() {
  return 1;
};
us.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(b, us);
function ls(n) {
  this.message = n || "";
}
ls.prototype = new Error();
ls.prototype.name = "EmptyStackException";
function Ir() {
  this.array_ = [];
}
Ir.prototype = new Xe();
Ir.prototype.add = function(n) {
  return this.array_.push(n), !0;
};
Ir.prototype.get = function(n) {
  if (n < 0 || n >= this.size())
    throw new Error();
  return this.array_[n];
};
Ir.prototype.push = function(n) {
  return this.array_.push(n), n;
};
Ir.prototype.pop = function(n) {
  if (this.array_.length === 0)
    throw new ls();
  return this.array_.pop();
};
Ir.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new ls();
  return this.array_[this.array_.length - 1];
};
Ir.prototype.empty = function() {
  return this.array_.length === 0;
};
Ir.prototype.isEmpty = function() {
  return this.empty();
};
Ir.prototype.search = function(n) {
  return this.array_.indexOf(n);
};
Ir.prototype.size = function() {
  return this.array_.length;
};
Ir.prototype.toArray = function() {
  for (var n = this, t = [], e = 0, r = this.array_.length; e < r; e++)
    t.push(n.array_[e]);
  return t;
};
var gr = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
gr.prototype.getCoordinate = function() {
  return this._minCoord;
};
gr.prototype.getRightmostSide = function(t, e) {
  var r = this.getRightmostSideOfSegment(t, e);
  return r < 0 && (r = this.getRightmostSideOfSegment(t, e - 1)), r < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), r;
};
gr.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  X.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], r = t[this._minIndex + 1], i = M.computeOrientation(this._minCoord, r, e), o = !1;
  (e.y < this._minCoord.y && r.y < this._minCoord.y && i === M.COUNTERCLOCKWISE || e.y > this._minCoord.y && r.y > this._minCoord.y && i === M.CLOCKWISE) && (o = !0), o && (this._minIndex = this._minIndex - 1);
};
gr.prototype.getRightmostSideOfSegment = function(t, e) {
  var r = t.getEdge(), i = r.getCoordinates();
  if (e < 0 || e + 1 >= i.length || i[e].y === i[e + 1].y)
    return -1;
  var o = b.LEFT;
  return i[e].y < i[e + 1].y && (o = b.RIGHT), o;
};
gr.prototype.getEdge = function() {
  return this._orientedDe;
};
gr.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, r = t.getEdge().getCoordinates(), i = 0; i < r.length - 1; i++)
    (e._minCoord === null || r[i].x > e._minCoord.x) && (e._minDe = t, e._minIndex = i, e._minCoord = r[i]);
};
gr.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
gr.prototype.findEdge = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.isForward() && e.checkForRightmostCoordinate(i);
  }
  X.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var o = this.getRightmostSide(this._minDe, this._minIndex);
  o === b.LEFT && (this._orientedDe = this._minDe.getSym());
};
gr.prototype.interfaces_ = function() {
  return [];
};
gr.prototype.getClass = function() {
  return gr;
};
var Jr = function(n) {
  function t(e, r) {
    n.call(this, t.msgWithCoord(e, r)), this.pt = r ? new v(r) : null, this.name = "TopologyException";
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getCoordinate = function() {
    return this.pt;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.msgWithCoord = function(r, i) {
    return i ? r : r + " [ " + i + " ]";
  }, t;
}(Kr), cs = function() {
  this.array_ = [];
};
cs.prototype.addLast = function(t) {
  this.array_.push(t);
};
cs.prototype.removeFirst = function() {
  return this.array_.shift();
};
cs.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var se = function() {
  this._finder = null, this._dirEdgeList = new O(), this._nodes = new O(), this._rightMostCoord = null, this._env = null, this._finder = new gr();
};
se.prototype.clearVisitedEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.setVisited(!1);
  }
};
se.prototype.getRightmostCoordinate = function() {
  return this._rightMostCoord;
};
se.prototype.computeNodeDepth = function(t) {
  for (var e = this, r = null, i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isVisited() || o.getSym().isVisited()) {
      r = o;
      break;
    }
  }
  if (r === null)
    throw new Jr("unable to find edge to compute depths at " + t.getCoordinate());
  t.getEdges().computeDepths(r);
  for (var s = t.getEdges().iterator(); s.hasNext(); ) {
    var a = s.next();
    a.setVisited(!0), e.copySymDepths(a);
  }
};
se.prototype.computeDepth = function(t) {
  this.clearVisitedEdges();
  var e = this._finder.getEdge();
  e.setEdgeDepths(b.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
};
se.prototype.create = function(t) {
  this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
};
se.prototype.findResultEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getDepth(b.RIGHT) >= 1 && e.getDepth(b.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
  }
};
se.prototype.computeDepths = function(t) {
  var e = this, r = new Ys(), i = new cs(), o = t.getNode();
  for (i.addLast(o), r.add(o), t.setVisited(!0); !i.isEmpty(); ) {
    var s = i.removeFirst();
    r.add(s), e.computeNodeDepth(s);
    for (var a = s.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var c = l.getNode();
        r.contains(c) || (i.addLast(c), r.add(c));
      }
    }
  }
};
se.prototype.compareTo = function(t) {
  var e = t;
  return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
};
se.prototype.getEnvelope = function() {
  if (this._env === null) {
    for (var t = new F(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var r = e.next(), i = r.getEdge().getCoordinates(), o = 0; o < i.length - 1; o++)
        t.expandToInclude(i[o]);
    this._env = t;
  }
  return this._env;
};
se.prototype.addReachable = function(t) {
  var e = this, r = new Ir();
  for (r.add(t); !r.empty(); ) {
    var i = r.pop();
    e.add(i, r);
  }
};
se.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(b.LEFT, t.getDepth(b.RIGHT)), e.setDepth(b.RIGHT, t.getDepth(b.LEFT));
};
se.prototype.add = function(t, e) {
  var r = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    r._dirEdgeList.add(o);
    var s = o.getSym(), a = s.getNode();
    a.isVisited() || e.push(a);
  }
};
se.prototype.getNodes = function() {
  return this._nodes;
};
se.prototype.getDirectedEdges = function() {
  return this._dirEdgeList;
};
se.prototype.interfaces_ = function() {
  return [ke];
};
se.prototype.getClass = function() {
  return se;
};
var ut = function n() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var r = arguments[0];
      this.init(1), this.location[b.ON] = r;
    } else if (arguments[0] instanceof n) {
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
  for (var e = this, r = 0; r < this.location.length; r++)
    e.location[r] = t;
};
ut.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== m.NONE)
      return !1;
  return !0;
};
ut.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    e.location[r] === m.NONE && (e.location[r] = t);
};
ut.prototype.isLine = function() {
  return this.location.length === 1;
};
ut.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var r = new Array(3).fill(null);
    r[b.ON] = this.location[b.ON], r[b.LEFT] = m.NONE, r[b.RIGHT] = m.NONE, this.location = r;
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
  var t = new Er();
  return this.location.length > 1 && t.append(m.toLocationSymbol(this.location[b.LEFT])), t.append(m.toLocationSymbol(this.location[b.ON])), this.location.length > 1 && t.append(m.toLocationSymbol(this.location[b.RIGHT])), t.toString();
};
ut.prototype.setLocations = function(t, e, r) {
  this.location[b.ON] = t, this.location[b.LEFT] = e, this.location[b.RIGHT] = r;
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
    var e = arguments[0], r = arguments[1];
    this.location[e] = r;
  }
};
ut.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(m.NONE);
};
ut.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
ut.prototype.allPositionsEqual = function(t) {
  for (var e = this, r = 0; r < this.location.length; r++)
    if (e.location[r] !== t)
      return !1;
  return !0;
};
ut.prototype.interfaces_ = function() {
  return [];
};
ut.prototype.getClass = function() {
  return ut;
};
var et = function n() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new ut(t), this.elt[1] = new ut(t);
    } else if (arguments[0] instanceof n) {
      var e = arguments[0];
      this.elt[0] = new ut(e.elt[0]), this.elt[1] = new ut(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1];
    this.elt[0] = new ut(m.NONE), this.elt[1] = new ut(m.NONE), this.elt[r].setLocation(i);
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
    var e = arguments[0], r = arguments[1];
    this.elt[e].setAllLocationsIfNull(r);
  }
};
et.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
et.prototype.merge = function(t) {
  for (var e = this, r = 0; r < 2; r++)
    e.elt[r] === null && t.elt[r] !== null ? e.elt[r] = new ut(t.elt[r]) : e.elt[r].merge(t.elt[r]);
};
et.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
et.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(b.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return this.elt[e].get(r);
  }
};
et.prototype.toString = function() {
  var t = new Er();
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
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this.elt[r].setLocation(i, o);
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
  for (var e = new et(m.NONE), r = 0; r < 2; r++)
    e.setLocation(r, t.getLocation(r));
  return e;
};
var Lt = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new O(), this._pts = new O(), this._label = new et(m.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new O(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
Lt.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), r = 0; r < this._pts.size(); r++)
    e[r] = t._pts.get(r);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = M.isCCW(this._ring.getCoordinates());
};
Lt.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
Lt.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var r = t, i = !0;
  do {
    if (r === null)
      throw new Jr("Found null DirectedEdge");
    if (r.getEdgeRing() === e)
      throw new Jr("Directed Edge visited twice during ring-building at " + r.getCoordinate());
    e._edges.add(r);
    var o = r.getLabel();
    X.isTrue(o.isArea()), e.mergeLabel(o), e.addPoints(r.getEdge(), r.isForward(), i), i = !1, e.setEdgeRing(r, e), r = e.getNext(r);
  } while (r !== this._startDe);
};
Lt.prototype.getLinearRing = function() {
  return this._ring;
};
Lt.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
Lt.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var r = e.getNode(), i = r.getEdges().getOutgoingDegree(t);
    i > t._maxNodeDegree && (t._maxNodeDegree = i), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
Lt.prototype.addPoints = function(t, e, r) {
  var i = this, o = t.getCoordinates();
  if (e) {
    var s = 1;
    r && (s = 0);
    for (var a = s; a < o.length; a++)
      i._pts.add(o[a]);
  } else {
    var u = o.length - 2;
    r && (u = o.length - 1);
    for (var l = u; l >= 0; l--)
      i._pts.add(o[l]);
  }
};
Lt.prototype.isHole = function() {
  return this._isHole;
};
Lt.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
Lt.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), r = e.getEnvelopeInternal();
  if (!r.contains(t) || !M.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var i = this._holes.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.containsPoint(t))
      return !1;
  }
  return !0;
};
Lt.prototype.addHole = function(t) {
  this._holes.add(t);
};
Lt.prototype.isShell = function() {
  return this._shell === null;
};
Lt.prototype.getLabel = function() {
  return this._label;
};
Lt.prototype.getEdges = function() {
  return this._edges;
};
Lt.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
Lt.prototype.getShell = function() {
  return this._shell;
};
Lt.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = e.getLocation(r, b.RIGHT);
    if (i === m.NONE)
      return null;
    if (this._label.getLocation(r) === m.NONE)
      return this._label.setLocation(r, i), null;
  }
};
Lt.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
Lt.prototype.toPolygon = function(t) {
  for (var e = this, r = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++)
    r[i] = e._holes.get(i).getLinearRing();
  var o = t.createPolygon(this.getLinearRing(), r);
  return o;
};
Lt.prototype.interfaces_ = function() {
  return [];
};
Lt.prototype.getClass = function() {
  return Lt;
};
var sf = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.setEdgeRing = function(r, i) {
    r.setMinEdgeRing(i);
  }, t.prototype.getNext = function(r) {
    return r.getNextMin();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Lt), af = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var r = this, i = new O(), o = this._startDe;
    do {
      if (o.getMinEdgeRing() === null) {
        var s = new sf(o, r._geometryFactory);
        i.add(s);
      }
      o = o.getNext();
    } while (o !== this._startDe);
    return i;
  }, t.prototype.setEdgeRing = function(r, i) {
    r.setEdgeRing(i);
  }, t.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
    var r = this, i = this._startDe;
    do {
      var o = i.getNode();
      o.getEdges().linkMinimalDirectedEdges(r), i = i.getNext();
    } while (i !== this._startDe);
  }, t.prototype.getNext = function(r) {
    return r.getNext();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Lt), Le = function() {
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
  X.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
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
var fs = function(n) {
  function t() {
    n.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], r = arguments[1];
    this._coord = e, this._edges = r, this._label = new et(0, m.NONE);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isIncidentEdgeInResult = function() {
    for (var r = this.getEdges().getEdges().iterator(); r.hasNext(); ) {
      var i = r.next();
      if (i.getEdge().isInResult())
        return !0;
    }
    return !1;
  }, t.prototype.isIsolated = function() {
    return this._label.getGeometryCount() === 1;
  }, t.prototype.getCoordinate = function() {
    return this._coord;
  }, t.prototype.print = function(r) {
    r.println("node " + this._coord + " lbl: " + this._label);
  }, t.prototype.computeIM = function(r) {
  }, t.prototype.computeMergedLocation = function(r, i) {
    var o = m.NONE;
    if (o = this._label.getLocation(i), !r.isNull(i)) {
      var s = r.getLocation(i);
      o !== m.BOUNDARY && (o = s);
    }
    return o;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      this._label === null ? this._label = new et(r, i) : this._label.setLocation(r, i);
    } else
      return n.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var r = this;
    if (arguments[0] instanceof t) {
      var i = arguments[0];
      this.mergeLabel(i._label);
    } else if (arguments[0] instanceof et)
      for (var o = arguments[0], s = 0; s < 2; s++) {
        var a = r.computeMergedLocation(o, s), u = r._label.getLocation(s);
        u === m.NONE && r._label.setLocation(s, a);
      }
  }, t.prototype.add = function(r) {
    this._edges.insert(r), r.setNode(this);
  }, t.prototype.setLabelBoundary = function(r) {
    if (this._label === null)
      return null;
    var i = m.NONE;
    this._label !== null && (i = this._label.getLocation(r));
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
    this._label.setLocation(r, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Le), pr = function() {
  this.nodeMap = new Qt(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
pr.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
pr.prototype.addNode = function() {
  if (arguments[0] instanceof v) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof fs) {
    var r = arguments[0], i = this.nodeMap.get(r.getCoordinate());
    return i === null ? (this.nodeMap.put(r.getCoordinate(), r), r) : (i.mergeLabel(r), i);
  }
};
pr.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
pr.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
pr.prototype.values = function() {
  return this.nodeMap.values();
};
pr.prototype.getBoundaryNodes = function(t) {
  for (var e = new O(), r = this.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.getLabel().getLocation(t) === m.BOUNDARY && e.add(i);
  }
  return e;
};
pr.prototype.add = function(t) {
  var e = t.getCoordinate(), r = this.addNode(e);
  r.add(t);
};
pr.prototype.interfaces_ = function() {
  return [];
};
pr.prototype.getClass = function() {
  return pr;
};
var it = function() {
}, Co = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
it.prototype.interfaces_ = function() {
  return [];
};
it.prototype.getClass = function() {
  return it;
};
it.isNorthern = function(t) {
  return t === it.NE || t === it.NW;
};
it.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var r = (t - e + 4) % 4;
  return r === 2;
};
it.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var r = (t - e + 4) % 4;
  if (r === 2)
    return -1;
  var i = t < e ? t : e, o = t > e ? t : e;
  return i === 0 && o === 3 ? 3 : i;
};
it.isInHalfPlane = function(t, e) {
  return e === it.SE ? t === it.SE || t === it.SW : t === e || t === e + 1;
};
it.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new ft("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? it.NE : it.SE : e >= 0 ? it.NW : it.SW;
  } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
    var r = arguments[0], i = arguments[1];
    if (i.x === r.x && i.y === r.y)
      throw new ft("Cannot compute the quadrant for two identical points " + r);
    return i.x >= r.x ? i.y >= r.y ? it.NE : it.SE : i.y >= r.y ? it.NW : it.SW;
  }
};
Co.NE.get = function() {
  return 0;
};
Co.NW.get = function() {
  return 1;
};
Co.SW.get = function() {
  return 2;
};
Co.SE.get = function() {
  return 3;
};
Object.defineProperties(it, Co);
var Kt = function() {
  if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
    var t = arguments[0];
    this._edge = t;
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = null;
    this._edge = e, this.init(r, i), this._label = o;
  } else if (arguments.length === 4) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = arguments[3];
    this._edge = s, this.init(a, u), this._label = l;
  }
};
Kt.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : M.computeOrientation(t._p0, t._p1, this._p1);
};
Kt.prototype.getDy = function() {
  return this._dy;
};
Kt.prototype.getCoordinate = function() {
  return this._p0;
};
Kt.prototype.setNode = function(t) {
  this._node = t;
};
Kt.prototype.print = function(t) {
  var e = Math.atan2(this._dy, this._dx), r = this.getClass().getName(), i = r.lastIndexOf("."), o = r.substring(i + 1);
  t.print("  " + o + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
};
Kt.prototype.compareTo = function(t) {
  var e = t;
  return this.compareDirection(e);
};
Kt.prototype.getDirectedCoordinate = function() {
  return this._p1;
};
Kt.prototype.getDx = function() {
  return this._dx;
};
Kt.prototype.getLabel = function() {
  return this._label;
};
Kt.prototype.getEdge = function() {
  return this._edge;
};
Kt.prototype.getQuadrant = function() {
  return this._quadrant;
};
Kt.prototype.getNode = function() {
  return this._node;
};
Kt.prototype.toString = function() {
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), r = e.lastIndexOf("."), i = e.substring(r + 1);
  return "  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
Kt.prototype.computeLabel = function(t) {
};
Kt.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = it.quadrant(this._dx, this._dy), X.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
Kt.prototype.interfaces_ = function() {
  return [ke];
};
Kt.prototype.getClass = function() {
  return Kt;
};
var Fs = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    if (n.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = r, r)
      this.init(e.getCoordinate(0), e.getCoordinate(1));
    else {
      var i = e.getNumPoints() - 1;
      this.init(e.getCoordinate(i), e.getCoordinate(i - 1));
    }
    this.computeDirectedLabel();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getNextMin = function() {
    return this._nextMin;
  }, t.prototype.getDepth = function(r) {
    return this._depth[r];
  }, t.prototype.setVisited = function(r) {
    this._isVisited = r;
  }, t.prototype.computeDirectedLabel = function() {
    this._label = new et(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(r, i) {
    if (this._depth[r] !== -999 && this._depth[r] !== i)
      throw new Jr("assigned depths do not match", this.getCoordinate());
    this._depth[r] = i;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var r = this, i = !0, o = 0; o < 2; o++)
      r._label.isArea(o) && r._label.getLocation(o, b.LEFT) === m.INTERIOR && r._label.getLocation(o, b.RIGHT) === m.INTERIOR || (i = !1);
    return i;
  }, t.prototype.setNextMin = function(r) {
    this._nextMin = r;
  }, t.prototype.print = function(r) {
    n.prototype.print.call(this, r), r.print(" " + this._depth[b.LEFT] + "/" + this._depth[b.RIGHT]), r.print(" (" + this.getDepthDelta() + ")"), this._isInResult && r.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(r) {
    this._minEdgeRing = r;
  }, t.prototype.isLineEdge = function() {
    var r = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, m.EXTERIOR), o = !this._label.isArea(1) || this._label.allPositionsEqual(1, m.EXTERIOR);
    return r && i && o;
  }, t.prototype.setEdgeRing = function(r) {
    this._edgeRing = r;
  }, t.prototype.getMinEdgeRing = function() {
    return this._minEdgeRing;
  }, t.prototype.getDepthDelta = function() {
    var r = this._edge.getDepthDelta();
    return this._isForward || (r = -r), r;
  }, t.prototype.setInResult = function(r) {
    this._isInResult = r;
  }, t.prototype.getSym = function() {
    return this._sym;
  }, t.prototype.isForward = function() {
    return this._isForward;
  }, t.prototype.getEdge = function() {
    return this._edge;
  }, t.prototype.printEdge = function(r) {
    this.print(r), r.print(" "), this._isForward ? this._edge.print(r) : this._edge.printReverse(r);
  }, t.prototype.setSym = function(r) {
    this._sym = r;
  }, t.prototype.setVisitedEdge = function(r) {
    this.setVisited(r), this._sym.setVisited(r);
  }, t.prototype.setEdgeDepths = function(r, i) {
    var o = this.getEdge().getDepthDelta();
    this._isForward || (o = -o);
    var s = 1;
    r === b.LEFT && (s = -1);
    var a = b.opposite(r), u = o * s, l = i + u;
    this.setDepth(r, i), this.setDepth(a, l);
  }, t.prototype.getEdgeRing = function() {
    return this._edgeRing;
  }, t.prototype.isInResult = function() {
    return this._isInResult;
  }, t.prototype.setNext = function(r) {
    this._next = r;
  }, t.prototype.isVisited = function() {
    return this._isVisited;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.depthFactor = function(r, i) {
    return r === m.EXTERIOR && i === m.INTERIOR ? 1 : r === m.INTERIOR && i === m.EXTERIOR ? -1 : 0;
  }, t;
}(Kt), Pi = function() {
};
Pi.prototype.createNode = function(t) {
  return new fs(t, null);
};
Pi.prototype.interfaces_ = function() {
  return [];
};
Pi.prototype.getClass = function() {
  return Pi;
};
var pt = function() {
  if (this._edges = new O(), this._nodes = null, this._edgeEndList = new O(), arguments.length === 0)
    this._nodes = new pr(new Pi());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new pr(t);
  }
};
pt.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var r = 0; r < this._edges.size(); r++) {
    t.println("edge " + r + ":");
    var i = e._edges.get(r);
    i.print(t), i.eiList.print(t);
  }
};
pt.prototype.find = function(t) {
  return this._nodes.find(t);
};
pt.prototype.addNode = function() {
  if (arguments[0] instanceof fs) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof v) {
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
  qt.out.println(t);
};
pt.prototype.isBoundaryNode = function(t, e) {
  var r = this._nodes.find(e);
  if (r === null)
    return !1;
  var i = r.getLabel();
  return i !== null && i.getLocation(t) === m.BOUNDARY;
};
pt.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
pt.prototype.matchInSameDirection = function(t, e, r, i) {
  return t.equals(r) ? M.computeOrientation(t, e, i) === M.COLLINEAR && it.quadrant(t, e) === it.quadrant(r, i) : !1;
};
pt.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
pt.prototype.debugPrint = function(t) {
  qt.out.print(t);
};
pt.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
pt.prototype.findEdgeInSameDirection = function(t, e) {
  for (var r = this, i = 0; i < this._edges.size(); i++) {
    var o = r._edges.get(i), s = o.getCoordinates();
    if (r.matchInSameDirection(t, e, s[0], s[1]) || r.matchInSameDirection(t, e, s[s.length - 1], s[s.length - 2]))
      return o;
  }
  return null;
};
pt.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
pt.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.getEdge() === t)
      return r;
  }
  return null;
};
pt.prototype.addEdges = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e._edges.add(i);
    var o = new Fs(i, !0), s = new Fs(i, !1);
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
  for (var r = this, i = 0; i < this._edges.size(); i++) {
    var o = r._edges.get(i), s = o.getCoordinates();
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
    var r = e.next();
    r.getEdges().linkResultDirectedEdges();
  }
};
var ye = function() {
  this._geometryFactory = null, this._shellList = new O();
  var t = arguments[0];
  this._geometryFactory = t;
};
ye.prototype.sortShellsAndHoles = function(t, e, r) {
  for (var i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() ? r.add(o) : e.add(o);
  }
};
ye.prototype.computePolygons = function(t) {
  for (var e = this, r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.toPolygon(e._geometryFactory);
    r.add(s);
  }
  return r;
};
ye.prototype.placeFreeHoles = function(t, e) {
  for (var r = this, i = e.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.getShell() === null) {
      var s = r.findEdgeRingContaining(o, t);
      if (s === null)
        throw new Jr("unable to assign hole to a shell", o.getCoordinate(0));
      o.setShell(s);
    }
  }
};
ye.prototype.buildMinimalEdgeRings = function(t, e, r) {
  for (var i = this, o = new O(), s = t.iterator(); s.hasNext(); ) {
    var a = s.next();
    if (a.getMaxNodeDegree() > 2) {
      a.linkDirectedEdgesForMinimalEdgeRings();
      var u = a.buildMinimalRings(), l = i.findShell(u);
      l !== null ? (i.placePolygonHoles(l, u), e.add(l)) : r.addAll(u);
    } else
      o.add(a);
  }
  return o;
};
ye.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.containsPoint(t))
      return !0;
  }
  return !1;
};
ye.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isInResult() && o.getLabel().isArea() && o.getEdgeRing() === null) {
      var s = new af(o, e._geometryFactory);
      r.add(s), s.setInResult();
    }
  }
  return r;
};
ye.prototype.placePolygonHoles = function(t, e) {
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next();
    i.isHole() && i.setShell(t);
  }
};
ye.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
ye.prototype.findEdgeRingContaining = function(t, e) {
  for (var r = t.getLinearRing(), i = r.getEnvelopeInternal(), o = r.getCoordinateN(0), s = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), f = c.getEnvelopeInternal();
    s !== null && (a = s.getLinearRing().getEnvelopeInternal());
    var h = !1;
    f.contains(i) && M.isPointInRing(o, c.getCoordinates()) && (h = !0), h && (s === null || a.contains(f)) && (s = l);
  }
  return s;
};
ye.prototype.findShell = function(t) {
  for (var e = 0, r = null, i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() || (r = o, e++);
  }
  return X.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), r;
};
ye.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    pt.linkResultDirectedEdges(r);
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
var Ri = function() {
};
Ri.prototype.getBounds = function() {
};
Ri.prototype.interfaces_ = function() {
  return [];
};
Ri.prototype.getClass = function() {
  return Ri;
};
var We = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
We.prototype.getItem = function() {
  return this._item;
};
We.prototype.getBounds = function() {
  return this._bounds;
};
We.prototype.interfaces_ = function() {
  return [Ri, Ge];
};
We.prototype.getClass = function() {
  return We;
};
var $r = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new O(), this._items.add(null);
};
$r.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
$r.prototype.size = function() {
  return this._size;
};
$r.prototype.reorder = function(t) {
  for (var e = this, r = null, i = this._items.get(t); t * 2 <= this._size && (r = t * 2, r !== e._size && e._items.get(r + 1).compareTo(e._items.get(r)) < 0 && r++, e._items.get(r).compareTo(i) < 0); t = r)
    e._items.set(t, e._items.get(r));
  this._items.set(t, i);
};
$r.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
$r.prototype.isEmpty = function() {
  return this._size === 0;
};
$r.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var r = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(r / 2))) < 0; r /= 2)
    e._items.set(r, e._items.get(Math.trunc(r / 2)));
  this._items.set(r, t);
};
$r.prototype.interfaces_ = function() {
  return [];
};
$r.prototype.getClass = function() {
  return $r;
};
var gn = function() {
};
gn.prototype.visitItem = function(t) {
};
gn.prototype.interfaces_ = function() {
  return [];
};
gn.prototype.getClass = function() {
  return gn;
};
var Jn = function() {
};
Jn.prototype.insert = function(t, e) {
};
Jn.prototype.remove = function(t, e) {
};
Jn.prototype.query = function() {
};
Jn.prototype.interfaces_ = function() {
  return [];
};
Jn.prototype.getClass = function() {
  return Jn;
};
var Ot = function() {
  if (this._childBoundables = new O(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, Lu = { serialVersionUID: { configurable: !0 } };
Ot.prototype.getLevel = function() {
  return this._level;
};
Ot.prototype.size = function() {
  return this._childBoundables.size();
};
Ot.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Ot.prototype.addChildBoundable = function(t) {
  X.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Ot.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Ot.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Ot.prototype.interfaces_ = function() {
  return [Ri, Ge];
};
Ot.prototype.getClass = function() {
  return Ot;
};
Lu.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Ot, Lu);
var je = function() {
};
je.reverseOrder = function() {
  return {
    compare: function(e, r) {
      return r.compareTo(e);
    }
  };
};
je.min = function(t) {
  return je.sort(t), t.get(0);
};
je.sort = function(t, e) {
  var r = t.toArray();
  e ? bn.sort(r, e) : bn.sort(r);
  for (var i = t.iterator(), o = 0, s = r.length; o < s; o++)
    i.next(), i.set(r[o]);
};
je.singletonList = function(t) {
  var e = new O();
  return e.add(t), e;
};
var St = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = r, this._distance = this.distance();
};
St.prototype.expandToQueue = function(t, e) {
  var r = St.isComposite(this._boundable1), i = St.isComposite(this._boundable2);
  if (r && i)
    return St.area(this._boundable1) > St.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (r)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (i)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new ft("neither boundable is composite");
};
St.prototype.isLeaves = function() {
  return !(St.isComposite(this._boundable1) || St.isComposite(this._boundable2));
};
St.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
St.prototype.expand = function(t, e, r, i) {
  for (var o = this, s = t.getChildBoundables(), a = s.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new St(u, e, o._itemDistance);
    l.getDistance() < i && r.add(l);
  }
};
St.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
St.prototype.getDistance = function() {
  return this._distance;
};
St.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
St.prototype.interfaces_ = function() {
  return [ke];
};
St.prototype.getClass = function() {
  return St;
};
St.area = function(t) {
  return t.getBounds().getArea();
};
St.isComposite = function(t) {
  return t instanceof Ot;
};
var Ft = function n() {
  if (this._root = null, this._built = !1, this._itemBoundables = new O(), this._nodeCapacity = null, arguments.length === 0) {
    var t = n.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    X.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, hs = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
Ft.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
Ft.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
Ft.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      o instanceof Ot ? r += t.size(o) : o instanceof We && (r += 1);
    }
    return r;
  }
};
Ft.prototype.removeItem = function(t, e) {
  for (var r = null, i = t.getChildBoundables().iterator(); i.hasNext(); ) {
    var o = i.next();
    o instanceof We && o.getItem() === e && (r = o);
  }
  return r !== null ? (t.getChildBoundables().remove(r), !0) : !1;
};
Ft.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new O() : e;
  } else if (arguments.length === 1) {
    for (var r = arguments[0], i = new O(), o = r.getChildBoundables().iterator(); o.hasNext(); ) {
      var s = o.next();
      if (s instanceof Ot) {
        var a = t.itemsTree(s);
        a !== null && i.add(a);
      } else
        s instanceof We ? i.add(s.getItem()) : X.shouldNeverReachHere();
    }
    return i.size() <= 0 ? null : i;
  }
};
Ft.prototype.insert = function(t, e) {
  X.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new We(t, e));
};
Ft.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], r = new O();
    return this.boundablesAtLevel(e, this._root, r), r;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (X.isTrue(i > -2), o.getLevel() === i)
      return s.add(o), null;
    for (var a = o.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Ot ? t.boundablesAtLevel(i, u, s) : (X.isTrue(u instanceof We), i === -1 && s.add(u));
    }
    return null;
  }
};
Ft.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var r = new O();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, r), r;
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), i) && this.query(i, this._root, o);
  } else if (arguments.length === 3) {
    if (V(arguments[2], gn) && arguments[0] instanceof Object && arguments[1] instanceof Ot)
      for (var s = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var f = l.get(c);
        t.getIntersectsOp().intersects(f.getBounds(), s) && (f instanceof Ot ? t.query(s, f, u) : f instanceof We ? u.visitItem(f.getItem()) : X.shouldNeverReachHere());
      }
    else if (V(arguments[2], Xe) && arguments[0] instanceof Object && arguments[1] instanceof Ot)
      for (var h = arguments[0], g = arguments[1], p = arguments[2], y = g.getChildBoundables(), d = 0; d < y.size(); d++) {
        var E = y.get(d);
        t.getIntersectsOp().intersects(E.getBounds(), h) && (E instanceof Ot ? t.query(h, E, p) : E instanceof We ? p.add(E.getItem()) : X.shouldNeverReachHere());
      }
  }
};
Ft.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
Ft.prototype.getRoot = function() {
  return this.build(), this._root;
};
Ft.prototype.remove = function() {
  var t = this;
  if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return this.build(), this.getIntersectsOp().intersects(this._root.getBounds(), e) ? this.remove(e, this._root, r) : !1;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = this.removeItem(o, s);
    if (a)
      return !0;
    for (var u = null, l = o.getChildBoundables().iterator(); l.hasNext(); ) {
      var c = l.next();
      if (t.getIntersectsOp().intersects(c.getBounds(), i) && c instanceof Ot && (a = t.remove(i, c, s), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && o.getChildBoundables().remove(u), a;
  }
};
Ft.prototype.createHigherLevels = function(t, e) {
  X.isTrue(!t.isEmpty());
  var r = this.createParentBoundables(t, e + 1);
  return r.size() === 1 ? r.get(0) : this.createHigherLevels(r, e + 1);
};
Ft.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      if (o instanceof Ot) {
        var s = t.depth(o);
        s > r && (r = s);
      }
    }
    return r + 1;
  }
};
Ft.prototype.createParentBoundables = function(t, e) {
  var r = this;
  X.isTrue(!t.isEmpty());
  var i = new O();
  i.add(this.createNode(e));
  var o = new O(t);
  je.sort(o, this.getComparator());
  for (var s = o.iterator(); s.hasNext(); ) {
    var a = s.next();
    r.lastNode(i).getChildBoundables().size() === r.getNodeCapacity() && i.add(r.createNode(e)), r.lastNode(i).addChildBoundable(a);
  }
  return i;
};
Ft.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
Ft.prototype.interfaces_ = function() {
  return [Ge];
};
Ft.prototype.getClass = function() {
  return Ft;
};
Ft.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
hs.IntersectsOp.get = function() {
  return uf;
};
hs.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
hs.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(Ft, hs);
var uf = function() {
}, Oi = function() {
};
Oi.prototype.distance = function(t, e) {
};
Oi.prototype.interfaces_ = function() {
  return [];
};
Oi.prototype.getClass = function() {
  return Oi;
};
var bu = function(n) {
  function t(r) {
    r = r || t.DEFAULT_NODE_CAPACITY, n.call(this, r);
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(i, o) {
    var s = this;
    X.isTrue(i.length > 0);
    for (var a = new O(), u = 0; u < i.length; u++)
      a.addAll(s.createParentBoundablesFromVerticalSlice(i[u], o));
    return a;
  }, t.prototype.createNode = function(i) {
    return new Ba(i);
  }, t.prototype.size = function() {
    return arguments.length === 0 ? n.prototype.size.call(this) : n.prototype.size.apply(this, arguments);
  }, t.prototype.insert = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      if (i.isNull())
        return null;
      n.prototype.insert.call(this, i, o);
    } else
      return n.prototype.insert.apply(this, arguments);
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
      return n.prototype.query.call(this, i);
    } else if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      n.prototype.query.call(this, o, s);
    } else if (arguments.length === 3) {
      if (V(arguments[2], gn) && arguments[0] instanceof Object && arguments[1] instanceof Ot) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        n.prototype.query.call(this, a, u, l);
      } else if (V(arguments[2], Xe) && arguments[0] instanceof Object && arguments[1] instanceof Ot) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        n.prototype.query.call(this, c, f, h);
      }
    }
  }, t.prototype.getComparator = function() {
    return t.yComparator;
  }, t.prototype.createParentBoundablesFromVerticalSlice = function(i, o) {
    return n.prototype.createParentBoundables.call(this, i, o);
  }, t.prototype.remove = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return n.prototype.remove.call(this, i, o);
    } else
      return n.prototype.remove.apply(this, arguments);
  }, t.prototype.depth = function() {
    return arguments.length === 0 ? n.prototype.depth.call(this) : n.prototype.depth.apply(this, arguments);
  }, t.prototype.createParentBoundables = function(i, o) {
    X.isTrue(!i.isEmpty());
    var s = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), a = new O(i);
    je.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(s))));
    return this.createParentBoundablesFromVerticalSlices(u, o);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (V(arguments[0], Oi)) {
        var i = arguments[0], o = new St(this.getRoot(), this.getRoot(), i);
        return this.nearestNeighbour(o);
      } else if (arguments[0] instanceof St) {
        var s = arguments[0];
        return this.nearestNeighbour(s, U.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && V(arguments[1], Oi)) {
        var a = arguments[0], u = arguments[1], l = new St(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof St && typeof arguments[1] == "number") {
        var c = arguments[0], f = arguments[1], h = f, g = null, p = new $r();
        for (p.add(c); !p.isEmpty() && h > 0; ) {
          var y = p.poll(), d = y.getDistance();
          if (d >= h)
            break;
          y.isLeaves() ? (h = d, g = y) : y.expandToQueue(p, h);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var E = arguments[0], C = arguments[1], _ = arguments[2], x = new We(E, C), w = new St(this.getRoot(), x, _);
      return this.nearestNeighbour(w)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [Jn, Ge];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(i) {
    return t.avg(i.getMinX(), i.getMaxX());
  }, t.avg = function(i, o) {
    return (i + o) / 2;
  }, t.centreY = function(i) {
    return t.avg(i.getMinY(), i.getMaxY());
  }, e.STRtreeNode.get = function() {
    return Ba;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [Ii];
      },
      compare: function(r, i) {
        return n.compareDoubles(t.centreX(r.getBounds()), t.centreX(i.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [Ii];
      },
      compare: function(r, i) {
        return n.compareDoubles(t.centreY(r.getBounds()), t.centreY(i.getBounds()));
      }
    };
  }, e.intersectsOp.get = function() {
    return {
      interfaces_: function() {
        return [n.IntersectsOp];
      },
      intersects: function(r, i) {
        return r.intersects(i);
      }
    };
  }, e.DEFAULT_NODE_CAPACITY.get = function() {
    return 10;
  }, Object.defineProperties(t, e), t;
}(Ft), Ba = function(n) {
  function t() {
    var e = arguments[0];
    n.call(this, e);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var r = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      r === null ? r = new F(o.getBounds()) : r.expandToInclude(o.getBounds());
    }
    return r;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ot), le = function() {
};
le.prototype.interfaces_ = function() {
  return [];
};
le.prototype.getClass = function() {
  return le;
};
le.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
le.compare = function(t, e, r) {
  if (e.equals2D(r))
    return 0;
  var i = le.relativeSign(e.x, r.x), o = le.relativeSign(e.y, r.y);
  switch (t) {
    case 0:
      return le.compareValue(i, o);
    case 1:
      return le.compareValue(o, i);
    case 2:
      return le.compareValue(o, -i);
    case 3:
      return le.compareValue(-i, o);
    case 4:
      return le.compareValue(-i, -o);
    case 5:
      return le.compareValue(-o, -i);
    case 6:
      return le.compareValue(-o, i);
    case 7:
      return le.compareValue(i, -o);
  }
  return X.shouldNeverReachHere("invalid octant value"), 0;
};
le.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var pn = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
  this._segString = t, this.coord = new v(e), this.segmentIndex = r, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(r));
};
pn.prototype.getCoordinate = function() {
  return this.coord;
};
pn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
pn.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : le.compare(this._segmentOctant, this.coord, e.coord);
};
pn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
pn.prototype.isInterior = function() {
  return this._isInterior;
};
pn.prototype.interfaces_ = function() {
  return [ke];
};
pn.prototype.getClass = function() {
  return pn;
};
var ae = function() {
  this._nodeMap = new Qt(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
ae.prototype.getSplitCoordinates = function() {
  var t = this, e = new Eo();
  this.addEndpoints();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next();
    t.addEdgeCoordinates(i, o, e), i = o;
  }
  return e.toCoordinateArray();
};
ae.prototype.addCollapsedNodes = function() {
  var t = this, e = new O();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next().intValue();
    t.add(t._edge.getCoordinate(i), i);
  }
};
ae.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
ae.prototype.findCollapsesFromExistingVertices = function(t) {
  for (var e = this, r = 0; r < this._edge.size() - 2; r++) {
    var i = e._edge.getCoordinate(r), o = e._edge.getCoordinate(r + 2);
    i.equals2D(o) && t.add(new lr(r + 1));
  }
};
ae.prototype.addEdgeCoordinates = function(t, e, r) {
  var i = this, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  r.add(new v(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    r.add(i._edge.getCoordinate(a));
  s && r.add(new v(e.coord));
};
ae.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
ae.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
ae.prototype.findCollapseIndex = function(t, e, r) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var i = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || i--, i === 1 ? (r[0] = t.segmentIndex + 1, !0) : !1;
};
ae.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, r = new Array(1).fill(null), i = this.iterator(), o = i.next(); i.hasNext(); ) {
    var s = i.next(), a = e.findCollapseIndex(o, s, r);
    a && t.add(new lr(r[0])), o = s;
  }
};
ae.prototype.getEdge = function() {
  return this._edge;
};
ae.prototype.addEndpoints = function() {
  var t = this._edge.size() - 1;
  this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
};
ae.prototype.createSplitEdge = function(t, e) {
  var r = this, i = e.segmentIndex - t.segmentIndex + 2, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new v(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = r._edge.getCoordinate(l);
  return s && (a[u] = new v(e.coord)), new Nt(a, this._edge.getData());
};
ae.prototype.add = function(t, e) {
  var r = new pn(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(r);
  return i !== null ? (X.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(r, r), r);
};
ae.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), r = t.get(0), i = r.getCoordinate(0);
  if (!i.equals2D(e[0]))
    throw new Kr("bad split edge start point at " + i);
  var o = t.get(t.size() - 1), s = o.getCoordinates(), a = s[s.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new Kr("bad split edge end point at " + a);
};
ae.prototype.interfaces_ = function() {
  return [];
};
ae.prototype.getClass = function() {
  return ae;
};
var $n = function() {
};
$n.prototype.interfaces_ = function() {
  return [];
};
$n.prototype.getClass = function() {
  return $n;
};
$n.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new ft("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var r = Math.abs(t), i = Math.abs(e);
    return t >= 0 ? e >= 0 ? r >= i ? 0 : 1 : r >= i ? 7 : 6 : e >= 0 ? r >= i ? 3 : 2 : r >= i ? 4 : 5;
  } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
    var o = arguments[0], s = arguments[1], a = s.x - o.x, u = s.y - o.y;
    if (a === 0 && u === 0)
      throw new ft("Cannot compute the octant for two identical points " + o);
    return $n.octant(a, u);
  }
};
var Rr = function() {
};
Rr.prototype.getCoordinates = function() {
};
Rr.prototype.size = function() {
};
Rr.prototype.getCoordinate = function(t) {
};
Rr.prototype.isClosed = function() {
};
Rr.prototype.setData = function(t) {
};
Rr.prototype.getData = function() {
};
Rr.prototype.interfaces_ = function() {
  return [];
};
Rr.prototype.getClass = function() {
  return Rr;
};
var co = function() {
};
co.prototype.addIntersection = function(t, e) {
};
co.prototype.interfaces_ = function() {
  return [Rr];
};
co.prototype.getClass = function() {
  return co;
};
var Nt = function() {
  this._nodeList = new ae(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Nt.prototype.getCoordinates = function() {
  return this._pts;
};
Nt.prototype.size = function() {
  return this._pts.length;
};
Nt.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Nt.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Nt.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Nt.prototype.setData = function(t) {
  this._data = t;
};
Nt.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : $n.octant(t, e);
};
Nt.prototype.getData = function() {
  return this._data;
};
Nt.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var r = arguments[0], i = arguments[1], o = arguments[3], s = new v(r.getIntersection(o));
    this.addIntersection(s, i);
  }
};
Nt.prototype.toString = function() {
  return Ye.toLineString(new _t(this._pts));
};
Nt.prototype.getNodeList = function() {
  return this._nodeList;
};
Nt.prototype.addIntersectionNode = function(t, e) {
  var r = e, i = r + 1;
  if (i < this._pts.length) {
    var o = this._pts[i];
    t.equals2D(o) && (r = i);
  }
  var s = this._nodeList.add(t, r);
  return s;
};
Nt.prototype.addIntersections = function(t, e, r) {
  for (var i = this, o = 0; o < t.getIntersectionNum(); o++)
    i.addIntersection(t, e, r, o);
};
Nt.prototype.interfaces_ = function() {
  return [co];
};
Nt.prototype.getClass = function() {
  return Nt;
};
Nt.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new O();
    return Nt.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var r = arguments[0], i = arguments[1], o = r.iterator(); o.hasNext(); ) {
      var s = o.next();
      s.getNodeList().addSplitEdges(i);
    }
};
var B = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new v(), this.p1 = new v();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new v(t.p0), this.p1 = new v(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = arguments[3];
    this.p0 = new v(e, r), this.p1 = new v(i, o);
  }
}, Pu = { serialVersionUID: { configurable: !0 } };
B.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
B.prototype.orientationIndex = function() {
  if (arguments[0] instanceof B) {
    var t = arguments[0], e = M.orientationIndex(this.p0, this.p1, t.p0), r = M.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && r >= 0 || e <= 0 && r <= 0 ? Math.max(e, r) : 0;
  } else if (arguments[0] instanceof v) {
    var i = arguments[0];
    return M.orientationIndex(this.p0, this.p1, i);
  }
};
B.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
B.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
B.prototype.equals = function(t) {
  if (!(t instanceof B))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
B.prototype.intersection = function(t) {
  var e = new Yn();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
B.prototype.project = function() {
  if (arguments[0] instanceof v) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new v(t);
    var e = this.projectionFactor(t), r = new v();
    return r.x = this.p0.x + e * (this.p1.x - this.p0.x), r.y = this.p0.y + e * (this.p1.y - this.p0.y), r;
  } else if (arguments[0] instanceof B) {
    var i = arguments[0], o = this.projectionFactor(i.p0), s = this.projectionFactor(i.p1);
    if (o >= 1 && s >= 1 || o <= 0 && s <= 0)
      return null;
    var a = this.project(i.p0);
    o < 0 && (a = this.p0), o > 1 && (a = this.p1);
    var u = this.project(i.p1);
    return s < 0 && (u = this.p0), s > 1 && (u = this.p1), new B(a, u);
  }
};
B.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
B.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
B.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
B.prototype.distancePerpendicular = function(t) {
  return M.distancePointLinePerpendicular(t, this.p0, this.p1);
};
B.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
B.prototype.midPoint = function() {
  return B.midPoint(this.p0, this.p1);
};
B.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, r = this.p1.y - this.p0.y, i = e * e + r * r;
  if (i <= 0)
    return U.NaN;
  var o = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * r) / i;
  return o;
};
B.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var r = new Array(2).fill(null), i = U.MAX_VALUE, o = null, s = this.closestPoint(t.p0);
  i = s.distance(t.p0), r[0] = s, r[1] = t.p0;
  var a = this.closestPoint(t.p1);
  o = a.distance(t.p1), o < i && (i = o, r[0] = a, r[1] = t.p1);
  var u = t.closestPoint(this.p0);
  o = u.distance(this.p0), o < i && (i = o, r[0] = this.p0, r[1] = u);
  var l = t.closestPoint(this.p1);
  return o = l.distance(this.p1), o < i && (i = o, r[0] = this.p1, r[1] = l), r;
};
B.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var r = this.p0.distance(t), i = this.p1.distance(t);
  return r < i ? this.p0 : this.p1;
};
B.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
B.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
B.prototype.compareTo = function(t) {
  var e = t, r = this.p0.compareTo(e.p0);
  return r !== 0 ? r : this.p1.compareTo(e.p1);
};
B.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
B.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
B.prototype.lineIntersection = function(t) {
  try {
    var e = qe.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (r) {
    if (!(r instanceof Ui))
      throw r;
  } finally {
  }
  return null;
};
B.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
B.prototype.pointAlongOffset = function(t, e) {
  var r = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), o = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y, a = Math.sqrt(o * o + s * s), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * o / a, l = e * s / a;
  }
  var c = r - l, f = i + u, h = new v(c, f);
  return h;
};
B.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = r.x, this.p1.y = r.y;
  }
};
B.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || U.isNaN(e)) && (e = 1), e;
};
B.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
B.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
B.prototype.distance = function() {
  if (arguments[0] instanceof B) {
    var t = arguments[0];
    return M.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof v) {
    var e = arguments[0];
    return M.distancePointLine(e, this.p0, this.p1);
  }
};
B.prototype.pointAlong = function(t) {
  var e = new v();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
B.prototype.hashCode = function() {
  var t = U.doubleToLongBits(this.p0.x);
  t ^= U.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), r = U.doubleToLongBits(this.p1.x);
  r ^= U.doubleToLongBits(this.p1.y) * 31;
  var i = Math.trunc(r) ^ Math.trunc(r >> 32);
  return e ^ i;
};
B.prototype.interfaces_ = function() {
  return [ke, Ge];
};
B.prototype.getClass = function() {
  return B;
};
B.midPoint = function(t, e) {
  return new v((t.x + e.x) / 2, (t.y + e.y) / 2);
};
Pu.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(B, Pu);
var fo = function() {
  this.tempEnv1 = new F(), this.tempEnv2 = new F(), this._overlapSeg1 = new B(), this._overlapSeg2 = new B();
};
fo.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), r.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
fo.prototype.interfaces_ = function() {
  return [];
};
fo.prototype.getClass = function() {
  return fo;
};
var me = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
  this._pts = t, this._start = e, this._end = r, this._context = i;
};
me.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
me.prototype.computeSelect = function(t, e, r, i) {
  var o = this._pts[e], s = this._pts[r];
  if (i.tempEnv1.init(o, s), r - e === 1)
    return i.select(this, e), null;
  if (!t.intersects(i.tempEnv1))
    return null;
  var a = Math.trunc((e + r) / 2);
  e < a && this.computeSelect(t, e, a, i), a < r && this.computeSelect(t, a, r, i);
};
me.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), r = 0, i = this._start; i <= this._end; i++)
    e[r++] = t._pts[i];
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
    this._env = new F(t, e);
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
me.prototype.computeOverlapsInternal = function(t, e, r, i, o, s) {
  var a = this._pts[t], u = this._pts[e], l = r._pts[i], c = r._pts[o];
  if (e - t === 1 && o - i === 1)
    return s.overlap(this, t, r, i), null;
  if (s.tempEnv1.init(a, u), s.tempEnv2.init(l, c), !s.tempEnv1.intersects(s.tempEnv2))
    return null;
  var f = Math.trunc((t + e) / 2), h = Math.trunc((i + o) / 2);
  t < f && (i < h && this.computeOverlapsInternal(t, f, r, i, h, s), h < o && this.computeOverlapsInternal(t, f, r, h, o, s)), f < e && (i < h && this.computeOverlapsInternal(f, e, r, i, h, s), h < o && this.computeOverlapsInternal(f, e, r, h, o, s));
};
me.prototype.interfaces_ = function() {
  return [];
};
me.prototype.getClass = function() {
  return me;
};
var ur = function() {
};
ur.prototype.interfaces_ = function() {
  return [];
};
ur.prototype.getClass = function() {
  return ur;
};
ur.getChainStartIndices = function(t) {
  var e = 0, r = new O();
  r.add(new lr(e));
  do {
    var i = ur.findChainEnd(t, e);
    r.add(new lr(i)), e = i;
  } while (e < t.length - 1);
  var o = ur.toIntArray(r);
  return o;
};
ur.findChainEnd = function(t, e) {
  for (var r = e; r < t.length - 1 && t[r].equals2D(t[r + 1]); )
    r++;
  if (r >= t.length - 1)
    return t.length - 1;
  for (var i = it.quadrant(t[r], t[r + 1]), o = e + 1; o < t.length; ) {
    if (!t[o - 1].equals2D(t[o])) {
      var s = it.quadrant(t[o - 1], t[o]);
      if (s !== i)
        break;
    }
    o++;
  }
  return o - 1;
};
ur.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return ur.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], r = arguments[1], i = new O(), o = ur.getChainStartIndices(e), s = 0; s < o.length - 1; s++) {
      var a = new me(e, o[s], o[s + 1], r);
      i.add(a);
    }
    return i;
  }
};
ur.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), r = 0; r < e.length; r++)
    e[r] = t.get(r).intValue();
  return e;
};
var Mn = function() {
};
Mn.prototype.computeNodes = function(t) {
};
Mn.prototype.getNodedSubstrings = function() {
};
Mn.prototype.interfaces_ = function() {
  return [];
};
Mn.prototype.getClass = function() {
  return Mn;
};
var ho = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
ho.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
ho.prototype.interfaces_ = function() {
  return [Mn];
};
ho.prototype.getClass = function() {
  return ho;
};
var Zs = function(n) {
  function t(r) {
    r ? n.call(this, r) : n.call(this), this._monoChains = new O(), this._index = new bu(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return Nt.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(i) {
    for (var o = this, s = ur.getChains(i.getCoordinates(), i), a = s.iterator(); a.hasNext(); ) {
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
    for (var i = this, o = new ka(this._segInt), s = this._monoChains.iterator(); s.hasNext(); )
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
    return ka;
  }, Object.defineProperties(t, e), t;
}(ho), ka = function(n) {
  function t() {
    n.call(this), this._si = null;
    var e = arguments[0];
    this._si = e;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.overlap = function() {
    if (arguments.length === 4) {
      var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = r.getContext(), u = o.getContext();
      this._si.processIntersections(a, i, u, s);
    } else
      return n.prototype.overlap.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(fo), J = function n() {
  if (this._quadrantSegments = n.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = n.CAP_ROUND, this._joinStyle = n.JOIN_ROUND, this._mitreLimit = n.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = n.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (arguments.length === 2) {
      var e = arguments[0], r = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(r);
    } else if (arguments.length === 4) {
      var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3];
      this.setQuadrantSegments(i), this.setEndCapStyle(o), this.setJoinStyle(s), this.setMitreLimit(a);
    }
  }
}, nn = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
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
nn.CAP_ROUND.get = function() {
  return 1;
};
nn.CAP_FLAT.get = function() {
  return 2;
};
nn.CAP_SQUARE.get = function() {
  return 3;
};
nn.JOIN_ROUND.get = function() {
  return 1;
};
nn.JOIN_MITRE.get = function() {
  return 2;
};
nn.JOIN_BEVEL.get = function() {
  return 3;
};
nn.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
nn.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
nn.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(J, nn);
var mt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = M.COUNTERCLOCKWISE, this._inputLine = t || null;
}, No = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
mt.prototype.isDeletable = function(t, e, r, i) {
  var o = this._inputLine[t], s = this._inputLine[e], a = this._inputLine[r];
  return !this.isConcave(o, s, a) || !this.isShallow(o, s, a, i) ? !1 : this.isShallowSampled(o, s, t, r, i);
};
mt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, r = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(r), o = !1; i < this._inputLine.length; ) {
    var s = !1;
    t.isDeletable(e, r, i, t._distanceTol) && (t._isDeleted[r] = mt.DELETE, s = !0, o = !0), s ? e = i : e = r, r = t.findNextNonDeletedIndex(e), i = t.findNextNonDeletedIndex(r);
  }
  return o;
};
mt.prototype.isShallowConcavity = function(t, e, r, i) {
  var o = M.computeOrientation(t, e, r), s = o === this._angleOrientation;
  if (!s)
    return !1;
  var a = M.distancePointLine(e, t, r);
  return a < i;
};
mt.prototype.isShallowSampled = function(t, e, r, i, o) {
  var s = this, a = Math.trunc((i - r) / mt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = r; u < i; u += a)
    if (!s.isShallow(t, e, s._inputLine[u], o))
      return !1;
  return !0;
};
mt.prototype.isConcave = function(t, e, r) {
  var i = M.computeOrientation(t, e, r), o = i === this._angleOrientation;
  return o;
};
mt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = M.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var r = !1;
  do
    r = e.deleteShallowConcavities();
  while (r);
  return this.collapseLine();
};
mt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === mt.DELETE; )
    e++;
  return e;
};
mt.prototype.isShallow = function(t, e, r, i) {
  var o = M.distancePointLine(e, t, r);
  return o < i;
};
mt.prototype.collapseLine = function() {
  for (var t = this, e = new Eo(), r = 0; r < this._inputLine.length; r++)
    t._isDeleted[r] !== mt.DELETE && e.add(t._inputLine[r]);
  return e.toCoordinateArray();
};
mt.prototype.interfaces_ = function() {
  return [];
};
mt.prototype.getClass = function() {
  return mt;
};
mt.simplify = function(t, e) {
  var r = new mt(t);
  return r.simplify(e);
};
No.INIT.get = function() {
  return 0;
};
No.DELETE.get = function() {
  return 1;
};
No.KEEP.get = function() {
  return 1;
};
No.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(mt, No);
var be = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new O();
}, Ru = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
be.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(be.COORDINATE_ARRAY_TYPE);
  return t;
};
be.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
be.prototype.addPt = function(t) {
  var e = new v(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
be.prototype.revere = function() {
};
be.prototype.addPts = function(t, e) {
  var r = this;
  if (e)
    for (var i = 0; i < t.length; i++)
      r.addPt(t[i]);
  else
    for (var o = t.length - 1; o >= 0; o--)
      r.addPt(t[o]);
};
be.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), r = t.distance(e);
  return r < this._minimimVertexDistance;
};
be.prototype.toString = function() {
  var t = new H(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
be.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new v(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
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
Ru.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(be, Ru);
var j = function() {
}, gi = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
j.prototype.interfaces_ = function() {
  return [];
};
j.prototype.getClass = function() {
  return j;
};
j.toDegrees = function(t) {
  return t * 180 / Math.PI;
};
j.normalize = function(t) {
  for (; t > Math.PI; )
    t -= j.PI_TIMES_2;
  for (; t <= -Math.PI; )
    t += j.PI_TIMES_2;
  return t;
};
j.angle = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Math.atan2(t.y, t.x);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = r.x - e.x, o = r.y - e.y;
    return Math.atan2(o, i);
  }
};
j.isAcute = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = r.x - e.x, a = r.y - e.y, u = i * s + o * a;
  return u > 0;
};
j.isObtuse = function(t, e, r) {
  var i = t.x - e.x, o = t.y - e.y, s = r.x - e.x, a = r.y - e.y, u = i * s + o * a;
  return u < 0;
};
j.interiorAngle = function(t, e, r) {
  var i = j.angle(e, t), o = j.angle(e, r);
  return Math.abs(o - i);
};
j.normalizePositive = function(t) {
  if (t < 0) {
    for (; t < 0; )
      t += j.PI_TIMES_2;
    t >= j.PI_TIMES_2 && (t = 0);
  } else {
    for (; t >= j.PI_TIMES_2; )
      t -= j.PI_TIMES_2;
    t < 0 && (t = 0);
  }
  return t;
};
j.angleBetween = function(t, e, r) {
  var i = j.angle(e, t), o = j.angle(e, r);
  return j.diff(i, o);
};
j.diff = function(t, e) {
  var r = null;
  return t < e ? r = e - t : r = t - e, r > Math.PI && (r = 2 * Math.PI - r), r;
};
j.toRadians = function(t) {
  return t * Math.PI / 180;
};
j.getTurn = function(t, e) {
  var r = Math.sin(e - t);
  return r > 0 ? j.COUNTERCLOCKWISE : r < 0 ? j.CLOCKWISE : j.NONE;
};
j.angleBetweenOriented = function(t, e, r) {
  var i = j.angle(e, t), o = j.angle(e, r), s = o - i;
  return s <= -Math.PI ? s + j.PI_TIMES_2 : s > Math.PI ? s - j.PI_TIMES_2 : s;
};
gi.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
gi.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
gi.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
gi.COUNTERCLOCKWISE.get = function() {
  return M.COUNTERCLOCKWISE;
};
gi.CLOCKWISE.get = function() {
  return M.CLOCKWISE;
};
gi.NONE.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(j, gi);
var ct = function n() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new B(), this._seg1 = new B(), this._offset0 = new B(), this._offset1 = new B(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new Yn(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === J.JOIN_ROUND && (this._closingSegLengthFactor = n.MAX_CLOSING_SEG_LEN_FACTOR), this.init(r);
}, So = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
ct.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var r = M.computeOrientation(this._s0, this._s1, this._s2), i = r === M.CLOCKWISE && this._side === b.LEFT || r === M.COUNTERCLOCKWISE && this._side === b.RIGHT;
  r === 0 ? this.addCollinear(e) : i ? this.addOutsideTurn(r, e) : this.addInsideTurn(r, e);
};
ct.prototype.addLineEndCap = function(t, e) {
  var r = new B(t, e), i = new B();
  this.computeOffsetSegment(r, b.LEFT, this._distance, i);
  var o = new B();
  this.computeOffsetSegment(r, b.RIGHT, this._distance, o);
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s);
  switch (this._bufParams.getEndCapStyle()) {
    case J.CAP_ROUND:
      this._segList.addPt(i.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, M.CLOCKWISE, this._distance), this._segList.addPt(o.p1);
      break;
    case J.CAP_FLAT:
      this._segList.addPt(i.p1), this._segList.addPt(o.p1);
      break;
    case J.CAP_SQUARE:
      var l = new v();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new v(i.p1.x + l.x, i.p1.y + l.y), f = new v(o.p1.x + l.x, o.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(f);
      break;
  }
};
ct.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
ct.prototype.addMitreJoin = function(t, e, r, i) {
  var o = !0, s = null;
  try {
    s = qe.intersection(e.p0, e.p1, r.p0, r.p1);
    var a = i <= 0 ? 1 : s.distance(t) / Math.abs(i);
    a > this._bufParams.getMitreLimit() && (o = !1);
  } catch (u) {
    if (u instanceof Ui)
      s = new v(0, 0), o = !1;
    else
      throw u;
  } finally {
  }
  o ? this._segList.addPt(s) : this.addLimitedMitreJoin(e, r, i, this._bufParams.getMitreLimit());
};
ct.prototype.addFilletCorner = function(t, e, r, i, o) {
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s), l = r.x - t.x, c = r.y - t.y, f = Math.atan2(c, l);
  i === M.CLOCKWISE ? u <= f && (u += 2 * Math.PI) : u >= f && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, f, i, o), this._segList.addPt(r);
};
ct.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * ct.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === J.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === J.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
ct.prototype.createSquare = function(t) {
  this._segList.addPt(new v(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new v(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
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
ct.prototype.initSideSegments = function(t, e, r) {
  this._s1 = t, this._s2 = e, this._side = r, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, r, this._distance, this._offset1);
};
ct.prototype.addLimitedMitreJoin = function(t, e, r, i) {
  var o = this._seg0.p1, s = j.angle(o, this._seg0.p0), a = j.angleBetweenOriented(this._seg0.p0, o, this._seg1.p1), u = a / 2, l = j.normalize(s + u), c = j.normalize(l + Math.PI), f = i * r, h = f * Math.abs(Math.sin(u)), g = r - h, p = o.x + f * Math.cos(c), y = o.y + f * Math.sin(c), d = new v(p, y), E = new B(o, d), C = E.pointAlongOffset(1, g), _ = E.pointAlongOffset(1, -g);
  this._side === b.LEFT ? (this._segList.addPt(C), this._segList.addPt(_)) : (this._segList.addPt(_), this._segList.addPt(C));
};
ct.prototype.computeOffsetSegment = function(t, e, r, i) {
  var o = e === b.LEFT ? 1 : -1, s = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(s * s + a * a), l = o * r * s / u, c = o * r * a / u;
  i.p0.x = t.p0.x - c, i.p0.y = t.p0.y + l, i.p1.x = t.p1.x - c, i.p1.y = t.p1.y + l;
};
ct.prototype.addFilletArc = function(t, e, r, i, o) {
  var s = this, a = i === M.CLOCKWISE ? -1 : 1, u = Math.abs(e - r), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, f = u / l, h = c, g = new v(); h < u; ) {
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
      var r = new v((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(r);
      var i = new v((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(i);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
ct.prototype.createCircle = function(t) {
  var e = new v(t.x + this._distance, t.y);
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
  e >= 2 && (this._bufParams.getJoinStyle() === J.JOIN_BEVEL || this._bufParams.getJoinStyle() === J.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, M.CLOCKWISE, this._distance));
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
So.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
So.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
So.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
So.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(ct, So);
var fe = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
fe.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var r = e < 0, i = Math.abs(e), o = this.getSegGen(i);
  t.length <= 1 ? this.computePointCurve(t[0], o) : this.computeOffsetCurve(t, r, o);
  var s = o.getCoordinates();
  return r && W.reverse(s), s;
};
fe.prototype.computeSingleSidedBufferCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    r.addSegments(t, !0);
    var o = mt.simplify(t, -i), s = o.length - 1;
    r.initSideSegments(o[s], o[s - 1], b.LEFT), r.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      r.addNextSegment(o[a], !0);
  } else {
    r.addSegments(t, !1);
    var u = mt.simplify(t, i), l = u.length - 1;
    r.initSideSegments(u[0], u[1], b.LEFT), r.addFirstSegment();
    for (var c = 2; c <= l; c++)
      r.addNextSegment(u[c], !0);
  }
  r.addLastSegment(), r.closeRing();
};
fe.prototype.computeRingBufferCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  e === b.RIGHT && (i = -i);
  var o = mt.simplify(t, i), s = o.length - 1;
  r.initSideSegments(o[s - 1], o[0], e);
  for (var a = 1; a <= s; a++) {
    var u = a !== 1;
    r.addNextSegment(o[a], u);
  }
  r.closeRing();
};
fe.prototype.computeLineBufferCurve = function(t, e) {
  var r = this.simplifyTolerance(this._distance), i = mt.simplify(t, r), o = i.length - 1;
  e.initSideSegments(i[0], i[1], b.LEFT);
  for (var s = 2; s <= o; s++)
    e.addNextSegment(i[s], !0);
  e.addLastSegment(), e.addLineEndCap(i[o - 1], i[o]);
  var a = mt.simplify(t, -r), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], b.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
fe.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case J.CAP_ROUND:
      e.createCircle(t);
      break;
    case J.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
fe.prototype.getLineCurve = function(t, e) {
  if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || e === 0)
    return null;
  var r = Math.abs(e), i = this.getSegGen(r);
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
fe.prototype.getBufferParameters = function() {
  return this._bufParams;
};
fe.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
fe.prototype.getRingCurve = function(t, e, r) {
  if (this._distance = r, t.length <= 2)
    return this.getLineCurve(t, r);
  if (r === 0)
    return fe.copyCoordinates(t);
  var i = this.getSegGen(r);
  return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
};
fe.prototype.computeOffsetCurve = function(t, e, r) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    var o = mt.simplify(t, -i), s = o.length - 1;
    r.initSideSegments(o[s], o[s - 1], b.LEFT), r.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      r.addNextSegment(o[a], !0);
  } else {
    var u = mt.simplify(t, i), l = u.length - 1;
    r.initSideSegments(u[0], u[1], b.LEFT), r.addFirstSegment();
    for (var c = 2; c <= l; c++)
      r.addNextSegment(u[c], !0);
  }
  r.addLastSegment();
};
fe.prototype.getSegGen = function(t) {
  return new ct(this._precisionModel, this._bufParams, t);
};
fe.prototype.interfaces_ = function() {
  return [];
};
fe.prototype.getClass = function() {
  return fe;
};
fe.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), r = 0; r < e.length; r++)
    e[r] = new v(t[r]);
  return e;
};
var ti = function() {
  this._subgraphs = null, this._seg = new B(), this._cga = new M();
  var t = arguments[0];
  this._subgraphs = t;
}, Ou = { DepthSegment: { configurable: !0 } };
ti.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], r = new O(), i = this._subgraphs.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getEnvelope();
      e.y < s.getMinY() || e.y > s.getMaxY() || t.findStabbedSegments(e, o.getDirectedEdges(), r);
    }
    return r;
  } else if (arguments.length === 3) {
    if (V(arguments[2], Xe) && arguments[0] instanceof v && arguments[1] instanceof Fs)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), f = 0; f < c.length - 1; f++) {
        t._seg.p0 = c[f], t._seg.p1 = c[f + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var h = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(h < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && M.computeOrientation(t._seg.p0, t._seg.p1, a) !== M.RIGHT) {
          var g = u.getDepth(b.LEFT);
          t._seg.p0.equals(c[f]) || (g = u.getDepth(b.RIGHT));
          var p = new An(t._seg, g);
          l.add(p);
        }
      }
    else if (V(arguments[2], Xe) && arguments[0] instanceof v && V(arguments[1], Xe))
      for (var y = arguments[0], d = arguments[1], E = arguments[2], C = d.iterator(); C.hasNext(); ) {
        var _ = C.next();
        _.isForward() && t.findStabbedSegments(y, _, E);
      }
  }
};
ti.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var r = je.min(e);
  return r._leftDepth;
};
ti.prototype.interfaces_ = function() {
  return [];
};
ti.prototype.getClass = function() {
  return ti;
};
Ou.DepthSegment.get = function() {
  return An;
};
Object.defineProperties(ti, Ou);
var An = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new B(t), this._leftDepth = e;
};
An.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var r = this._upwardSeg.orientationIndex(e._upwardSeg);
  return r !== 0 || (r = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), r !== 0) ? r : this._upwardSeg.compareTo(e._upwardSeg);
};
An.prototype.compareX = function(t, e) {
  var r = t.p0.compareTo(e.p0);
  return r !== 0 ? r : t.p1.compareTo(e.p1);
};
An.prototype.toString = function() {
  return this._upwardSeg.toString();
};
An.prototype.interfaces_ = function() {
  return [ke];
};
An.prototype.getClass = function() {
  return An;
};
var tt = function(t, e, r) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = r || null;
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
tt.area = function(t, e, r) {
  return Math.abs(((r.x - t.x) * (e.y - t.y) - (e.x - t.x) * (r.y - t.y)) / 2);
};
tt.signedArea = function(t, e, r) {
  return ((r.x - t.x) * (e.y - t.y) - (e.x - t.x) * (r.y - t.y)) / 2;
};
tt.det = function(t, e, r, i) {
  return t * i - e * r;
};
tt.interpolateZ = function(t, e, r, i) {
  var o = e.x, s = e.y, a = r.x - o, u = i.x - o, l = r.y - s, c = i.y - s, f = a * c - u * l, h = t.x - o, g = t.y - s, p = (c * h - u * g) / f, y = (-l * h + a * g) / f, d = e.z + p * (r.z - e.z) + y * (i.z - e.z);
  return d;
};
tt.longestSideLength = function(t, e, r) {
  var i = t.distance(e), o = e.distance(r), s = r.distance(t), a = i;
  return o > a && (a = o), s > a && (a = s), a;
};
tt.isAcute = function(t, e, r) {
  return !(!j.isAcute(t, e, r) || !j.isAcute(e, r, t) || !j.isAcute(r, t, e));
};
tt.circumcentre = function(t, e, r) {
  var i = r.x, o = r.y, s = t.x - i, a = t.y - o, u = e.x - i, l = e.y - o, c = 2 * tt.det(s, a, u, l), f = tt.det(a, s * s + a * a, l, u * u + l * l), h = tt.det(s, s * s + a * a, u, u * u + l * l), g = i - f / c, p = o + h / c;
  return new v(g, p);
};
tt.perpendicularBisector = function(t, e) {
  var r = e.x - t.x, i = e.y - t.y, o = new qe(t.x + r / 2, t.y + i / 2, 1), s = new qe(t.x - i + r / 2, t.y + r + i / 2, 1);
  return new qe(o, s);
};
tt.angleBisector = function(t, e, r) {
  var i = e.distance(t), o = e.distance(r), s = i / (i + o), a = r.x - t.x, u = r.y - t.y, l = new v(t.x + s * a, t.y + s * u);
  return l;
};
tt.area3D = function(t, e, r) {
  var i = e.x - t.x, o = e.y - t.y, s = e.z - t.z, a = r.x - t.x, u = r.y - t.y, l = r.z - t.z, c = o * l - s * u, f = s * a - i * l, h = i * u - o * a, g = c * c + f * f + h * h, p = Math.sqrt(g) / 2;
  return p;
};
tt.centroid = function(t, e, r) {
  var i = (t.x + e.x + r.x) / 3, o = (t.y + e.y + r.y) / 3;
  return new v(i, o);
};
tt.inCentre = function(t, e, r) {
  var i = e.distance(r), o = t.distance(r), s = t.distance(e), a = i + o + s, u = (i * t.x + o * e.x + s * r.x) / a, l = (i * t.y + o * e.y + s * r.y) / a;
  return new v(u, l);
};
var Be = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new O();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = r;
};
Be.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), r = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(r, m.EXTERIOR, m.INTERIOR);
};
Be.prototype.addPolygon = function(t) {
  var e = this, r = this._distance, i = b.LEFT;
  this._distance < 0 && (r = -this._distance, i = b.RIGHT);
  var o = t.getExteriorRing(), s = W.removeRepeatedPoints(o.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(o, this._distance) || this._distance <= 0 && s.length < 3)
    return null;
  this.addPolygonRing(s, r, i, m.EXTERIOR, m.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = W.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, r, b.opposite(i), m.INTERIOR, m.EXTERIOR);
  }
};
Be.prototype.isTriangleErodedCompletely = function(t, e) {
  var r = new tt(t[0], t[1], t[2]), i = r.inCentre(), o = M.distancePointLine(i, r.p0, r.p1);
  return o < Math.abs(e);
};
Be.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = W.removeRepeatedPoints(t.getCoordinates()), r = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(r, m.EXTERIOR, m.INTERIOR);
};
Be.prototype.addCurve = function(t, e, r) {
  if (t === null || t.length < 2)
    return null;
  var i = new Nt(t, new et(0, m.BOUNDARY, e, r));
  this._curveList.add(i);
};
Be.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
Be.prototype.addPolygonRing = function(t, e, r, i, o) {
  if (e === 0 && t.length < br.MINIMUM_VALID_SIZE)
    return null;
  var s = i, a = o;
  t.length >= br.MINIMUM_VALID_SIZE && M.isCCW(t) && (s = o, a = i, r = b.opposite(r));
  var u = this._curveBuilder.getRingCurve(t, r, e);
  this.addCurve(u, s, a);
};
Be.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof Dt ? this.addPolygon(t) : t instanceof yt ? this.addLineString(t) : t instanceof ve ? this.addPoint(t) : t instanceof bi ? this.addCollection(t) : t instanceof Dn ? this.addCollection(t) : t instanceof xr ? this.addCollection(t) : t instanceof oe && this.addCollection(t);
};
Be.prototype.isErodedCompletely = function(t, e) {
  var r = t.getCoordinates();
  if (r.length < 4)
    return e < 0;
  if (r.length === 4)
    return this.isTriangleErodedCompletely(r, e);
  var i = t.getEnvelopeInternal(), o = Math.min(i.getHeight(), i.getWidth());
  return e < 0 && 2 * Math.abs(e) > o;
};
Be.prototype.addCollection = function(t) {
  for (var e = this, r = 0; r < t.getNumGeometries(); r++) {
    var i = t.getGeometryN(r);
    e.add(i);
  }
};
Be.prototype.interfaces_ = function() {
  return [];
};
Be.prototype.getClass = function() {
  return Be;
};
var Ti = function() {
};
Ti.prototype.locate = function(t) {
};
Ti.prototype.interfaces_ = function() {
  return [];
};
Ti.prototype.getClass = function() {
  return Ti;
};
var wr = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
wr.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, wr.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new Xi();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof oe ? (this._subcollectionIterator = new wr(t), this._subcollectionIterator.next()) : t;
};
wr.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
wr.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
wr.prototype.interfaces_ = function() {
  return [qi];
};
wr.prototype.getClass = function() {
  return wr;
};
wr.isAtomic = function(t) {
  return !(t instanceof oe);
};
var Se = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
Se.prototype.locate = function(t) {
  return Se.locate(t, this._geom);
};
Se.prototype.interfaces_ = function() {
  return [Ti];
};
Se.prototype.getClass = function() {
  return Se;
};
Se.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.isPointInRing(t, e.getCoordinates()) : !1;
};
Se.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var r = e.getExteriorRing();
  if (!Se.isPointInRing(t, r))
    return !1;
  for (var i = 0; i < e.getNumInteriorRing(); i++) {
    var o = e.getInteriorRingN(i);
    if (Se.isPointInRing(t, o))
      return !1;
  }
  return !0;
};
Se.containsPoint = function(t, e) {
  if (e instanceof Dt)
    return Se.containsPointInPolygon(t, e);
  if (e instanceof oe)
    for (var r = new wr(e); r.hasNext(); ) {
      var i = r.next();
      if (i !== e && Se.containsPoint(t, i))
        return !0;
    }
  return !1;
};
Se.locate = function(t, e) {
  return e.isEmpty() ? m.EXTERIOR : Se.containsPoint(t, e) ? m.INTERIOR : m.EXTERIOR;
};
var Zt = function() {
  this._edgeMap = new Qt(), this._edgeList = null, this._ptInAreaLocation = [m.NONE, m.NONE];
};
Zt.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), r = e - 1;
  return e === 0 && (r = this._edgeList.size() - 1), this._edgeList.get(r);
};
Zt.prototype.propagateSideLabels = function(t) {
  for (var e = m.NONE, r = this.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getLabel();
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
          throw new Jr("side location conflict", u.getCoordinate());
        c === m.NONE && X.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), s = c;
      } else
        X.isTrue(l.getLocation(t, b.LEFT) === m.NONE, "found single null side"), l.setLocation(t, b.RIGHT, s), l.setLocation(t, b.LEFT, s);
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
  qt.out.println("EdgeEndStar:   " + this.getCoordinate());
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
Zt.prototype.isAreaLabelsConsistent = function(t) {
  return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
};
Zt.prototype.checkAreaLabelsConsistent = function(t) {
  var e = this.getEdges();
  if (e.size() <= 0)
    return !0;
  var r = e.size() - 1, i = e.get(r).getLabel(), o = i.getLocation(t, b.LEFT);
  X.isTrue(o !== m.NONE, "Found unlabelled area edge");
  for (var s = o, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    X.isTrue(l.isArea(t), "Found non-area edge");
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
  for (var r = 0; r < this._edgeList.size(); r++) {
    var i = e._edgeList.get(r);
    if (i === t)
      return r;
  }
  return -1;
};
Zt.prototype.iterator = function() {
  return this.getEdges().iterator();
};
Zt.prototype.getEdges = function() {
  return this._edgeList === null && (this._edgeList = new O(this._edgeMap.values())), this._edgeList;
};
Zt.prototype.getLocation = function(t, e, r) {
  return this._ptInAreaLocation[t] === m.NONE && (this._ptInAreaLocation[t] = Se.locate(e, r[t].getGeometry())), this._ptInAreaLocation[t];
};
Zt.prototype.toString = function() {
  var t = new Er();
  t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    t.append(r), t.append(`
`);
  }
  return t.toString();
};
Zt.prototype.computeEdgeEndLabels = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.computeLabel(t);
  }
};
Zt.prototype.computeLabelling = function(t) {
  var e = this;
  this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
  for (var r = [!1, !1], i = this.iterator(); i.hasNext(); )
    for (var o = i.next(), s = o.getLabel(), a = 0; a < 2; a++)
      s.isLine(a) && s.getLocation(a) === m.BOUNDARY && (r[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), f = 0; f < 2; f++)
      if (c.isAnyNull(f)) {
        var h = m.NONE;
        if (r[f])
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
var lf = function(n) {
  function t() {
    n.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.linkResultDirectedEdges = function() {
    var r = this;
    this.getResultAreaEdges();
    for (var i = null, o = null, s = this._SCANNING_FOR_INCOMING, a = 0; a < this._resultAreaEdgeList.size(); a++) {
      var u = r._resultAreaEdgeList.get(a), l = u.getSym();
      if (u.getLabel().isArea())
        switch (i === null && u.isInResult() && (i = u), s) {
          case r._SCANNING_FOR_INCOMING:
            if (!l.isInResult())
              continue;
            o = l, s = r._LINKING_TO_OUTGOING;
            break;
          case r._LINKING_TO_OUTGOING:
            if (!u.isInResult())
              continue;
            o.setNext(u), s = r._SCANNING_FOR_INCOMING;
            break;
        }
    }
    if (s === this._LINKING_TO_OUTGOING) {
      if (i === null)
        throw new Jr("no outgoing dirEdge found", this.getCoordinate());
      X.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), o.setNext(i);
    }
  }, t.prototype.insert = function(r) {
    var i = r;
    this.insertEdgeEnd(i, i);
  }, t.prototype.getRightmostEdge = function() {
    var r = this.getEdges(), i = r.size();
    if (i < 1)
      return null;
    var o = r.get(0);
    if (i === 1)
      return o;
    var s = r.get(i - 1), a = o.getQuadrant(), u = s.getQuadrant();
    return it.isNorthern(a) && it.isNorthern(u) ? o : !it.isNorthern(a) && !it.isNorthern(u) ? s : o.getDy() !== 0 ? o : s.getDy() !== 0 ? s : (X.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(r) {
    qt.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      r.print("out "), o.print(r), r.println(), r.print("in "), o.getSym().print(r), r.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var r = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new O();
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      (o.isInResult() || o.getSym().isInResult()) && r._resultAreaEdgeList.add(o);
    }
    return this._resultAreaEdgeList;
  }, t.prototype.updateLabelling = function(r) {
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.setAllLocationsIfNull(0, r.getLocation(0)), s.setAllLocationsIfNull(1, r.getLocation(1));
    }
  }, t.prototype.linkAllDirectedEdges = function() {
    var r = this;
    this.getEdges();
    for (var i = null, o = null, s = this._edgeList.size() - 1; s >= 0; s--) {
      var a = r._edgeList.get(s), u = a.getSym();
      o === null && (o = u), i !== null && u.setNext(i), i = a;
    }
    o.setNext(i);
  }, t.prototype.computeDepths = function() {
    var r = this;
    if (arguments.length === 1) {
      var i = arguments[0], o = this.findIndex(i), s = i.getDepth(b.LEFT), a = i.getDepth(b.RIGHT), u = this.computeDepths(o + 1, this._edgeList.size(), s), l = this.computeDepths(0, o, u);
      if (l !== a)
        throw new Jr("depth mismatch at " + i.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], f = arguments[1], h = arguments[2], g = h, p = c; p < f; p++) {
        var y = r._edgeList.get(p);
        y.setEdgeDepths(b.RIGHT, g), g = y.getDepth(b.LEFT);
      }
      return g;
    }
  }, t.prototype.mergeSymLabels = function() {
    for (var r = this.iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getLabel();
      o.merge(i.getSym().getLabel());
    }
  }, t.prototype.linkMinimalDirectedEdges = function(r) {
    for (var i = this, o = null, s = null, a = this._SCANNING_FOR_INCOMING, u = this._resultAreaEdgeList.size() - 1; u >= 0; u--) {
      var l = i._resultAreaEdgeList.get(u), c = l.getSym();
      switch (o === null && l.getEdgeRing() === r && (o = l), a) {
        case i._SCANNING_FOR_INCOMING:
          if (c.getEdgeRing() !== r)
            continue;
          s = c, a = i._LINKING_TO_OUTGOING;
          break;
        case i._LINKING_TO_OUTGOING:
          if (l.getEdgeRing() !== r)
            continue;
          s.setNextMin(l), a = i._SCANNING_FOR_INCOMING;
          break;
      }
    }
    a === this._LINKING_TO_OUTGOING && (X.isTrue(o !== null, "found null for first outgoing dirEdge"), X.isTrue(o.getEdgeRing() === r, "unable to link last incoming dirEdge"), s.setNextMin(o));
  }, t.prototype.getOutgoingDegree = function() {
    if (arguments.length === 0) {
      for (var r = 0, i = this.iterator(); i.hasNext(); ) {
        var o = i.next();
        o.isInResult() && r++;
      }
      return r;
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
    for (var r = m.NONE, i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getSym();
      if (!o.isLineEdge()) {
        if (o.isInResult()) {
          r = m.INTERIOR;
          break;
        }
        if (s.isInResult()) {
          r = m.EXTERIOR;
          break;
        }
      }
    }
    if (r === m.NONE)
      return null;
    for (var a = r, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === m.INTERIOR) : (l.isInResult() && (a = m.EXTERIOR), c.isInResult() && (a = m.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(r) {
    var i = this;
    n.prototype.computeLabelling.call(this, r), this._label = new et(m.NONE);
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
}(Zt), Tu = function(n) {
  function t() {
    n.apply(this, arguments);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.createNode = function(r) {
    return new fs(r, new lf());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Pi), dn = function n() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = n.orientation(t);
};
dn.prototype.compareTo = function(t) {
  var e = t, r = dn.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return r;
};
dn.prototype.interfaces_ = function() {
  return [ke];
};
dn.prototype.getClass = function() {
  return dn;
};
dn.orientation = function(t) {
  return W.increasingDirection(t) === 1;
};
dn.compareOriented = function(t, e, r, i) {
  for (var o = e ? 1 : -1, s = i ? 1 : -1, a = e ? t.length : -1, u = i ? r.length : -1, l = e ? 0 : t.length - 1, c = i ? 0 : r.length - 1; ; ) {
    var f = t[l].compareTo(r[c]);
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
var Qe = function() {
  this._edges = new O(), this._ocaMap = new Qt();
};
Qe.prototype.print = function(t) {
  var e = this;
  t.print("MULTILINESTRING ( ");
  for (var r = 0; r < this._edges.size(); r++) {
    var i = e._edges.get(r);
    r > 0 && t.print(","), t.print("(");
    for (var o = i.getCoordinates(), s = 0; s < o.length; s++)
      s > 0 && t.print(","), t.print(o[s].x + " " + o[s].y);
    t.println(")");
  }
  t.print(")  ");
};
Qe.prototype.addAll = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); )
    e.add(r.next());
};
Qe.prototype.findEdgeIndex = function(t) {
  for (var e = this, r = 0; r < this._edges.size(); r++)
    if (e._edges.get(r).equals(t))
      return r;
  return -1;
};
Qe.prototype.iterator = function() {
  return this._edges.iterator();
};
Qe.prototype.getEdges = function() {
  return this._edges;
};
Qe.prototype.get = function(t) {
  return this._edges.get(t);
};
Qe.prototype.findEqualEdge = function(t) {
  var e = new dn(t.getCoordinates()), r = this._ocaMap.get(e);
  return r;
};
Qe.prototype.add = function(t) {
  this._edges.add(t);
  var e = new dn(t.getCoordinates());
  this._ocaMap.put(e, t);
};
Qe.prototype.interfaces_ = function() {
  return [];
};
Qe.prototype.getClass = function() {
  return Qe;
};
var Fn = function() {
};
Fn.prototype.processIntersections = function(t, e, r, i) {
};
Fn.prototype.isDone = function() {
};
Fn.prototype.interfaces_ = function() {
  return [];
};
Fn.prototype.getClass = function() {
  return Fn;
};
var Pe = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
Pe.prototype.isTrivialIntersection = function(t, e, r, i) {
  if (t === r && this._li.getIntersectionNum() === 1) {
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
Pe.prototype.processIntersections = function(t, e, r, i) {
  if (t === r && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = r.getCoordinates()[i], u = r.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, r, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
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
  return [Fn];
};
Pe.prototype.getClass = function() {
  return Pe;
};
Pe.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var dr = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this.coord = new v(t), this.segmentIndex = e, this.dist = r;
};
dr.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
dr.prototype.getCoordinate = function() {
  return this.coord;
};
dr.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
dr.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
dr.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
dr.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
dr.prototype.getDistance = function() {
  return this.dist;
};
dr.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
dr.prototype.interfaces_ = function() {
  return [ke];
};
dr.prototype.getClass = function() {
  return dr;
};
var Or = function() {
  this._nodeMap = new Qt(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
Or.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    r.print(t);
  }
};
Or.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
Or.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
    var o = r.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
Or.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
Or.prototype.createSplitEdge = function(t, e) {
  var r = this, i = e.segmentIndex - t.segmentIndex + 2, o = this.edge.pts[e.segmentIndex], s = e.dist > 0 || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new v(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = r.edge.pts[l];
  return s && (a[u] = e.coord), new Ho(a, new et(this.edge._label));
};
Or.prototype.add = function(t, e, r) {
  var i = new dr(t, e, r), o = this._nodeMap.get(i);
  return o !== null ? o : (this._nodeMap.put(i, i), i);
};
Or.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var r = e.next();
    if (r.coord.equals(t))
      return !0;
  }
  return !1;
};
Or.prototype.interfaces_ = function() {
  return [];
};
Or.prototype.getClass = function() {
  return Or;
};
var Bn = function() {
};
Bn.prototype.getChainStartIndices = function(t) {
  var e = this, r = 0, i = new O();
  i.add(new lr(r));
  do {
    var o = e.findChainEnd(t, r);
    i.add(new lr(o)), r = o;
  } while (r < t.length - 1);
  var s = Bn.toIntArray(i);
  return s;
};
Bn.prototype.findChainEnd = function(t, e) {
  for (var r = it.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length; ) {
    var o = it.quadrant(t[i - 1], t[i]);
    if (o !== r)
      break;
    i++;
  }
  return i - 1;
};
Bn.prototype.interfaces_ = function() {
  return [];
};
Bn.prototype.getClass = function() {
  return Bn;
};
Bn.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), r = 0; r < e.length; r++)
    e[r] = t.get(r).intValue();
  return e;
};
var tn = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new F(), this.env2 = new F();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new Bn();
  this.startIndex = e.getChainStartIndices(this.pts);
};
tn.prototype.getCoordinates = function() {
  return this.pts;
};
tn.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, r = this.pts[this.startIndex[t + 1]].x;
  return e > r ? e : r;
};
tn.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, r = this.pts[this.startIndex[t + 1]].x;
  return e < r ? e : r;
};
tn.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[r], e.startIndex[r + 1], i);
  } else if (arguments.length === 6) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], f = this.pts[o], h = this.pts[s], g = a.pts[u], p = a.pts[l];
    if (s - o === 1 && l - u === 1)
      return c.addIntersections(this.e, o, a.e, u), null;
    if (this.env1.init(f, h), this.env2.init(g, p), !this.env1.intersects(this.env2))
      return null;
    var y = Math.trunc((o + s) / 2), d = Math.trunc((u + l) / 2);
    o < y && (u < d && this.computeIntersectsForChain(o, y, a, u, d, c), d < l && this.computeIntersectsForChain(o, y, a, d, l, c)), y < s && (u < d && this.computeIntersectsForChain(y, s, a, u, d, c), d < l && this.computeIntersectsForChain(y, s, a, d, l, c));
  }
};
tn.prototype.getStartIndexes = function() {
  return this.startIndex;
};
tn.prototype.computeIntersects = function(t, e) {
  for (var r = this, i = 0; i < this.startIndex.length - 1; i++)
    for (var o = 0; o < t.startIndex.length - 1; o++)
      r.computeIntersectsForChain(i, t, o, e);
};
tn.prototype.interfaces_ = function() {
  return [];
};
tn.prototype.getClass = function() {
  return tn;
};
var Ut = function n() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var r = 0; r < 3; r++)
      t._depth[e][r] = n.NULL_VALUE;
}, Du = { NULL_VALUE: { configurable: !0 } };
Ut.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
Ut.prototype.setDepth = function(t, e, r) {
  this._depth[t][e] = r;
};
Ut.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var r = 0; r < 3; r++)
        if (t._depth[e][r] !== Ut.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var i = arguments[0];
    return this._depth[i][1] === Ut.NULL_VALUE;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._depth[o][s] === Ut.NULL_VALUE;
  }
};
Ut.prototype.normalize = function() {
  for (var t = this, e = 0; e < 2; e++)
    if (!t.isNull(e)) {
      var r = t._depth[e][1];
      t._depth[e][2] < r && (r = t._depth[e][2]), r < 0 && (r = 0);
      for (var i = 1; i < 3; i++) {
        var o = 0;
        t._depth[e][i] > r && (o = 1), t._depth[e][i] = o;
      }
    }
};
Ut.prototype.getDelta = function(t) {
  return this._depth[t][b.RIGHT] - this._depth[t][b.LEFT];
};
Ut.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? m.EXTERIOR : m.INTERIOR;
};
Ut.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
Ut.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], r = 0; r < 2; r++)
      for (var i = 1; i < 3; i++) {
        var o = e.getLocation(r, i);
        (o === m.EXTERIOR || o === m.INTERIOR) && (t.isNull(r, i) ? t._depth[r][i] = Ut.depthAtLocation(o) : t._depth[r][i] += Ut.depthAtLocation(o));
      }
  else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    u === m.INTERIOR && this._depth[s][a]++;
  }
};
Ut.prototype.interfaces_ = function() {
  return [];
};
Ut.prototype.getClass = function() {
  return Ut;
};
Ut.depthAtLocation = function(t) {
  return t === m.EXTERIOR ? 0 : t === m.INTERIOR ? 1 : Ut.NULL_VALUE;
};
Du.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(Ut, Du);
var Ho = function(n) {
  function t() {
    if (n.call(this), this.pts = null, this._env = null, this.eiList = new Or(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Ut(), this._depthDelta = 0, arguments.length === 1) {
      var e = arguments[0];
      t.call(this, e, null);
    } else if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      this.pts = r, this._label = i;
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.getDepth = function() {
    return this._depth;
  }, t.prototype.getCollapsedEdge = function() {
    var r = new Array(2).fill(null);
    r[0] = this.pts[0], r[1] = this.pts[1];
    var i = new t(r, et.toLineLabel(this._label));
    return i;
  }, t.prototype.isIsolated = function() {
    return this._isIsolated;
  }, t.prototype.getCoordinates = function() {
    return this.pts;
  }, t.prototype.setIsolated = function(r) {
    this._isIsolated = r;
  }, t.prototype.setName = function(r) {
    this._name = r;
  }, t.prototype.equals = function(r) {
    var i = this;
    if (!(r instanceof t))
      return !1;
    var o = r;
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
      var r = arguments[0];
      return this.pts[r];
    }
  }, t.prototype.print = function(r) {
    var i = this;
    r.print("edge " + this._name + ": "), r.print("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && r.print(","), r.print(i.pts[o].x + " " + i.pts[o].y);
    r.print(")  " + this._label + " " + this._depthDelta);
  }, t.prototype.computeIM = function(r) {
    t.updateIM(this._label, r);
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
  }, t.prototype.printReverse = function(r) {
    var i = this;
    r.print("edge " + this._name + ": ");
    for (var o = this.pts.length - 1; o >= 0; o--)
      r.print(i.pts[o] + " ");
    r.println("");
  }, t.prototype.getMonotoneChainEdge = function() {
    return this._mce === null && (this._mce = new tn(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var r = this;
    if (this._env === null) {
      this._env = new F();
      for (var i = 0; i < this.pts.length; i++)
        r._env.expandToInclude(r.pts[i]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(r, i, o, s) {
    var a = new v(r.getIntersection(s)), u = i, l = r.getEdgeDistance(o, s), c = u + 1;
    if (c < this.pts.length) {
      var f = this.pts[c];
      a.equals2D(f) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var r = this, i = new Er();
    i.append("edge " + this._name + ": "), i.append("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && i.append(","), i.append(r.pts[o].x + " " + r.pts[o].y);
    return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
  }, t.prototype.isPointwiseEqual = function(r) {
    var i = this;
    if (this.pts.length !== r.pts.length)
      return !1;
    for (var o = 0; o < this.pts.length; o++)
      if (!i.pts[o].equals2D(r.pts[o]))
        return !1;
    return !0;
  }, t.prototype.setDepthDelta = function(r) {
    this._depthDelta = r;
  }, t.prototype.getEdgeIntersectionList = function() {
    return this.eiList;
  }, t.prototype.addIntersections = function(r, i, o) {
    for (var s = this, a = 0; a < r.getIntersectionNum(); a++)
      s.addIntersection(r, i, o, a);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.updateIM = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      i.setAtLeastIfValid(r.getLocation(0, b.ON), r.getLocation(1, b.ON), 1), r.isArea() && (i.setAtLeastIfValid(r.getLocation(0, b.LEFT), r.getLocation(1, b.LEFT), 2), i.setAtLeastIfValid(r.getLocation(0, b.RIGHT), r.getLocation(1, b.RIGHT), 2));
    } else
      return n.prototype.updateIM.apply(this, arguments);
  }, t;
}(Le), ie = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new Qe(), this._bufParams = t || null;
};
ie.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
ie.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var r = e.getLabel(), i = t.getLabel();
    e.isPointwiseEqual(t) || (i = new et(t.getLabel()), i.flip()), r.merge(i);
    var o = ie.depthDelta(i), s = e.getDepthDelta(), a = s + o;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(ie.depthDelta(t.getLabel()));
};
ie.prototype.buildSubgraphs = function(t, e) {
  for (var r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getRightmostCoordinate(), a = new ti(r), u = a.getDepth(s);
    o.computeDepth(u), o.findResultEdges(), r.add(o), e.add(o.getDirectedEdges(), o.getNodes());
  }
};
ie.prototype.createSubgraphs = function(t) {
  for (var e = new O(), r = t.getNodes().iterator(); r.hasNext(); ) {
    var i = r.next();
    if (!i.isVisited()) {
      var o = new se();
      o.create(i), e.add(o);
    }
  }
  return je.sort(e, je.reverseOrder()), e;
};
ie.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
ie.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new Zs(), r = new Yn();
  return r.setPrecisionModel(t), e.setSegmentIntersector(new Pe(r)), e;
};
ie.prototype.buffer = function(t, e) {
  var r = this._workingPrecisionModel;
  r === null && (r = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var i = new fe(r, this._bufParams), o = new Be(t, e, i), s = o.getCurves();
  if (s.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(s, r), this._graph = new pt(new Tu()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new ye(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
ie.prototype.computeNodedEdges = function(t, e) {
  var r = this, i = this.getNoder(e);
  i.computeNodes(t);
  for (var o = i.getNodedSubstrings(), s = o.iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new Ho(a.getCoordinates(), new et(l));
      r.insertUniqueEdge(c);
    }
  }
};
ie.prototype.setNoder = function(t) {
  this._workingNoder = t;
};
ie.prototype.interfaces_ = function() {
  return [];
};
ie.prototype.getClass = function() {
  return ie;
};
ie.depthDelta = function(t) {
  var e = t.getLocation(0, b.LEFT), r = t.getLocation(0, b.RIGHT);
  return e === m.INTERIOR && r === m.EXTERIOR ? 1 : e === m.EXTERIOR && r === m.INTERIOR ? -1 : 0;
};
ie.convertSegStrings = function(t) {
  for (var e = new H(), r = new O(); t.hasNext(); ) {
    var i = t.next(), o = e.createLineString(i.getCoordinates());
    r.add(o);
  }
  return e.buildGeometry(r);
};
var vn = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3];
    this._noder = r, this._scaleFactor = i, this._offsetX = o, this._offsetY = s, this._isScaled = !this.isIntegerPrecision();
  }
};
vn.prototype.rescale = function() {
  var t = this;
  if (V(arguments[0], bt))
    for (var e = arguments[0], r = e.iterator(); r.hasNext(); ) {
      var i = r.next();
      t.rescale(i.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], s = 0; s < o.length; s++)
      o[s].x = o[s].x / t._scaleFactor + t._offsetX, o[s].y = o[s].y / t._scaleFactor + t._offsetY;
    o.length === 2 && o[0].equals2D(o[1]) && qt.out.println(o);
  }
};
vn.prototype.scale = function() {
  var t = this;
  if (V(arguments[0], bt)) {
    for (var e = arguments[0], r = new O(), i = e.iterator(); i.hasNext(); ) {
      var o = i.next();
      r.add(new Nt(t.scale(o.getCoordinates()), o.getData()));
    }
    return r;
  } else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], a = new Array(s.length).fill(null), u = 0; u < s.length; u++)
      a[u] = new v(Math.round((s[u].x - t._offsetX) * t._scaleFactor), Math.round((s[u].y - t._offsetY) * t._scaleFactor), s[u].z);
    var l = W.removeRepeatedPoints(a);
    return l;
  }
};
vn.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
vn.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
vn.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
vn.prototype.interfaces_ = function() {
  return [Mn];
};
vn.prototype.getClass = function() {
  return vn;
};
var vr = function() {
  this._li = new Yn(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, Mu = { fact: { configurable: !0 } };
vr.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var r = e.next(), i = r.getCoordinates();
      t.checkEndPtVertexIntersections(i[0], t._segStrings), t.checkEndPtVertexIntersections(i[i.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var o = arguments[0], s = arguments[1], a = s.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), c = 1; c < l.length - 1; c++)
        if (l[c].equals(o))
          throw new Kr("found endpt/interior pt intersection at index " + c + " :pt " + o);
  }
};
vr.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var r = e.next(), i = this._segStrings.iterator(); i.hasNext(); ) {
        var o = i.next();
        t.checkInteriorIntersections(r, o);
      }
  else if (arguments.length === 2)
    for (var s = arguments[0], a = arguments[1], u = s.getCoordinates(), l = a.getCoordinates(), c = 0; c < u.length - 1; c++)
      for (var f = 0; f < l.length - 1; f++)
        t.checkInteriorIntersections(s, c, a, f);
  else if (arguments.length === 4) {
    var h = arguments[0], g = arguments[1], p = arguments[2], y = arguments[3];
    if (h === p && g === y)
      return null;
    var d = h.getCoordinates()[g], E = h.getCoordinates()[g + 1], C = p.getCoordinates()[y], _ = p.getCoordinates()[y + 1];
    if (this._li.computeIntersection(d, E, C, _), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, d, E) || this.hasInteriorIntersection(this._li, C, _)))
      throw new Kr("found non-noded intersection at " + d + "-" + E + " and " + C + "-" + _);
  }
};
vr.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
vr.prototype.checkCollapses = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var r = e.next();
      t.checkCollapses(r);
    }
  else if (arguments.length === 1)
    for (var i = arguments[0], o = i.getCoordinates(), s = 0; s < o.length - 2; s++)
      t.checkCollapse(o[s], o[s + 1], o[s + 2]);
};
vr.prototype.hasInteriorIntersection = function(t, e, r) {
  for (var i = 0; i < t.getIntersectionNum(); i++) {
    var o = t.getIntersection(i);
    if (!(o.equals(e) || o.equals(r)))
      return !0;
  }
  return !1;
};
vr.prototype.checkCollapse = function(t, e, r) {
  if (t.equals(r))
    throw new Kr("found non-noded collapse at " + vr.fact.createLineString([t, e, r]));
};
vr.prototype.interfaces_ = function() {
  return [];
};
vr.prototype.getClass = function() {
  return vr;
};
Mu.fact.get = function() {
  return new H();
};
Object.defineProperties(vr, Mu);
var he = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = r, e <= 0)
    throw new ft("Scale factor must be non-zero");
  e !== 1 && (this._pt = new v(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new v(), this._p1Scaled = new v()), this.initCorners(this._pt);
}, Au = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
he.prototype.intersectsScaled = function(t, e) {
  var r = Math.min(t.x, e.x), i = Math.max(t.x, e.x), o = Math.min(t.y, e.y), s = Math.max(t.y, e.y), a = this._maxx < r || this._minx > i || this._maxy < o || this._miny > s;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return X.isTrue(!(a && u), "Found bad envelope test"), u;
};
he.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new v(this._maxx, this._maxy), this._corner[1] = new v(this._minx, this._maxy), this._corner[2] = new v(this._minx, this._miny), this._corner[3] = new v(this._maxx, this._miny);
};
he.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
he.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
he.prototype.getCoordinate = function() {
  return this._originalPt;
};
he.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
he.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = he.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new F(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
he.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
he.prototype.intersectsToleranceSquare = function(t, e) {
  var r = !1, i = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (r = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || r && i || t.equals(this._pt) || e.equals(this._pt));
};
he.prototype.addSnappedNode = function(t, e) {
  var r = t.getCoordinate(e), i = t.getCoordinate(e + 1);
  return this.intersects(r, i) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
he.prototype.interfaces_ = function() {
  return [];
};
he.prototype.getClass = function() {
  return he;
};
Au.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(he, Au);
var go = function() {
  this.tempEnv1 = new F(), this.selectedSegment = new B();
};
go.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
go.prototype.interfaces_ = function() {
  return [];
};
go.prototype.getClass = function() {
  return go;
};
var Di = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, Fu = { HotPixelSnapAction: { configurable: !0 } };
Di.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], r = arguments[1], i = arguments[2], o = e.getSafeEnvelope(), s = new Bu(e, r, i);
    return this._index.query(o, {
      interfaces_: function() {
        return [gn];
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
Fu.HotPixelSnapAction.get = function() {
  return Bu;
};
Object.defineProperties(Di, Fu);
var Bu = function(n) {
  function t() {
    n.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var e = arguments[0], r = arguments[1], i = arguments[2];
    this._hotPixel = e, this._parentEdge = r, this._hotPixelVertexIndex = i;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.isNodeAdded = function() {
    return this._isNodeAdded;
  }, t.prototype.select = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1], o = r.getContext();
      if (this._parentEdge !== null && o === this._parentEdge && i === this._hotPixelVertexIndex)
        return null;
      this._isNodeAdded = this._hotPixel.addSnappedNode(o, i);
    } else
      return n.prototype.select.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(go), ei = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new O();
};
ei.prototype.processIntersections = function(t, e, r, i) {
  var o = this;
  if (t === r && e === i)
    return null;
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = r.getCoordinates()[i], l = r.getCoordinates()[i + 1];
  if (this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var c = 0; c < this._li.getIntersectionNum(); c++)
      o._interiorIntersections.add(o._li.getIntersection(c));
    t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1);
  }
};
ei.prototype.isDone = function() {
  return !1;
};
ei.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
ei.prototype.interfaces_ = function() {
  return [Fn];
};
ei.prototype.getClass = function() {
  return ei;
};
var Tr = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new Yn(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
Tr.prototype.checkCorrectness = function(t) {
  var e = Nt.getNodedSubstrings(t), r = new vr(e);
  try {
    r.checkValid();
  } catch (i) {
    if (i instanceof Eu)
      i.printStackTrace();
    else
      throw i;
  } finally {
  }
};
Tr.prototype.getNodedSubstrings = function() {
  return Nt.getNodedSubstrings(this._nodedSegStrings);
};
Tr.prototype.snapRound = function(t, e) {
  var r = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(r), this.computeVertexSnaps(t);
};
Tr.prototype.findInteriorIntersections = function(t, e) {
  var r = new ei(e);
  return this._noder.setSegmentIntersector(r), this._noder.computeNodes(t), r.getInteriorIntersections();
};
Tr.prototype.computeVertexSnaps = function() {
  var t = this;
  if (V(arguments[0], bt))
    for (var e = arguments[0], r = e.iterator(); r.hasNext(); ) {
      var i = r.next();
      t.computeVertexSnaps(i);
    }
  else if (arguments[0] instanceof Nt)
    for (var o = arguments[0], s = o.getCoordinates(), a = 0; a < s.length; a++) {
      var u = new he(s[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, o, a);
      l && o.addIntersection(s[a], a);
    }
};
Tr.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new Zs(), this._pointSnapper = new Di(this._noder.getIndex()), this.snapRound(t, this._li);
};
Tr.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next(), o = new he(i, e._scaleFactor, e._li);
    e._pointSnapper.snap(o);
  }
};
Tr.prototype.interfaces_ = function() {
  return [Mn];
};
Tr.prototype.getClass = function() {
  return Tr;
};
var Vt = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new J(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this._argGeom = e, this._bufParams = r;
  }
}, Yi = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
Vt.prototype.bufferFixedPrecision = function(t) {
  var e = new vn(new Tr(new $(1)), t.getScale()), r = new ie(this._bufParams);
  r.setWorkingPrecisionModel(t), r.setNoder(e), this._resultGeometry = r.buffer(this._argGeom, this._distance);
};
Vt.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = Vt.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (s) {
        if (s instanceof Jr)
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
    var r = arguments[0], i = Vt.precisionScaleFactor(this._argGeom, this._distance, r), o = new $(i);
    this.bufferFixedPrecision(o);
  }
};
Vt.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === $.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
Vt.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
Vt.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new ie(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof Kr)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
Vt.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
Vt.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
Vt.prototype.interfaces_ = function() {
  return [];
};
Vt.prototype.getClass = function() {
  return Vt;
};
Vt.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new Vt(t), i = r.getResultGeometry(e);
    return i;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof z && typeof arguments[1] == "number") {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Vt(o);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(s);
      return l;
    } else if (arguments[2] instanceof J && arguments[0] instanceof z && typeof arguments[1] == "number") {
      var c = arguments[0], f = arguments[1], h = arguments[2], g = new Vt(c, h), p = g.getResultGeometry(f);
      return p;
    }
  } else if (arguments.length === 4) {
    var y = arguments[0], d = arguments[1], E = arguments[2], C = arguments[3], _ = new Vt(y);
    _.setQuadrantSegments(E), _.setEndCapStyle(C);
    var x = _.getResultGeometry(d);
    return x;
  }
};
Vt.precisionScaleFactor = function(t, e, r) {
  var i = t.getEnvelopeInternal(), o = we.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())), s = e > 0 ? e : 0, a = o + 2 * s, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = r - u, c = Math.pow(10, l);
  return c;
};
Yi.CAP_ROUND.get = function() {
  return J.CAP_ROUND;
};
Yi.CAP_BUTT.get = function() {
  return J.CAP_FLAT;
};
Yi.CAP_FLAT.get = function() {
  return J.CAP_FLAT;
};
Yi.CAP_SQUARE.get = function() {
  return J.CAP_SQUARE;
};
Yi.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(Vt, Yi);
var ee = function() {
  this._pt = [new v(), new v()], this._distance = U.NaN, this._isNull = !0;
};
ee.prototype.getCoordinates = function() {
  return this._pt;
};
ee.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
ee.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i < this._distance && this.initialize(e, r, i);
  }
};
ee.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(r), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
ee.prototype.getDistance = function() {
  return this._distance;
};
ee.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i > this._distance && this.initialize(e, r, i);
  }
};
ee.prototype.interfaces_ = function() {
  return [];
};
ee.prototype.getClass = function() {
  return ee;
};
var Nr = function() {
};
Nr.prototype.interfaces_ = function() {
  return [];
};
Nr.prototype.getClass = function() {
  return Nr;
};
Nr.computeDistance = function() {
  if (arguments[2] instanceof ee && arguments[0] instanceof yt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], r = arguments[2], i = t.getCoordinates(), o = new B(), s = 0; s < i.length - 1; s++) {
      o.setCoordinates(i[s], i[s + 1]);
      var a = o.closestPoint(e);
      r.setMinimum(a, e);
    }
  else if (arguments[2] instanceof ee && arguments[0] instanceof Dt && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Nr.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      Nr.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof ee && arguments[0] instanceof z && arguments[1] instanceof v) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof yt)
      Nr.computeDistance(h, g, p);
    else if (h instanceof Dt)
      Nr.computeDistance(h, g, p);
    else if (h instanceof oe)
      for (var y = h, d = 0; d < y.getNumGeometries(); d++) {
        var E = y.getGeometryN(d);
        Nr.computeDistance(E, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof ee && arguments[0] instanceof B && arguments[1] instanceof v) {
    var C = arguments[0], _ = arguments[1], x = arguments[2], w = C.closestPoint(_);
    x.setMinimum(w, _);
  }
};
var kn = function(t) {
  this._maxPtDist = new ee(), this._inputGeom = t || null;
}, Js = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
kn.prototype.computeMaxMidpointDistance = function(t) {
  var e = new yn(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
kn.prototype.computeMaxVertexDistance = function(t) {
  var e = new ri(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
kn.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
kn.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
kn.prototype.interfaces_ = function() {
  return [];
};
kn.prototype.getClass = function() {
  return kn;
};
Js.MaxPointDistanceFilter.get = function() {
  return ri;
};
Js.MaxMidpointDistanceFilter.get = function() {
  return yn;
};
Object.defineProperties(kn, Js);
var ri = function(t) {
  this._maxPtDist = new ee(), this._minPtDist = new ee(), this._geom = t || null;
};
ri.prototype.filter = function(t) {
  this._minPtDist.initialize(), Nr.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ri.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ri.prototype.interfaces_ = function() {
  return [Lr];
};
ri.prototype.getClass = function() {
  return ri;
};
var yn = function(t) {
  this._maxPtDist = new ee(), this._minPtDist = new ee(), this._geom = t || null;
};
yn.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var r = t.getCoordinate(e - 1), i = t.getCoordinate(e), o = new v((r.x + i.x) / 2, (r.y + i.y) / 2);
  this._minPtDist.initialize(), Nr.computeDistance(this._geom, o, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
yn.prototype.isDone = function() {
  return !1;
};
yn.prototype.isGeometryChanged = function() {
  return !1;
};
yn.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
yn.prototype.interfaces_ = function() {
  return [He];
};
yn.prototype.getClass = function() {
  return yn;
};
var jr = function(t) {
  this._comps = t || null;
};
jr.prototype.filter = function(t) {
  t instanceof Dt && this._comps.add(t);
};
jr.prototype.interfaces_ = function() {
  return [fr];
};
jr.prototype.getClass = function() {
  return jr;
};
jr.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return jr.getPolygons(t, new O());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e instanceof Dt ? r.add(e) : e instanceof oe && e.apply(new jr(r)), r;
  }
};
var zt = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    this._lines = e, this._isForcedToLineString = r;
  }
};
zt.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof br) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof yt && this._lines.add(t);
};
zt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
zt.prototype.interfaces_ = function() {
  return [Zr];
};
zt.prototype.getClass = function() {
  return zt;
};
zt.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry(zt.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e.getFactory().buildGeometry(zt.getLines(e, r));
  }
};
zt.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return zt.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (V(arguments[0], bt) && V(arguments[1], bt)) {
      for (var e = arguments[0], r = arguments[1], i = e.iterator(); i.hasNext(); ) {
        var o = i.next();
        zt.getLines(o, r);
      }
      return r;
    } else if (arguments[0] instanceof z && typeof arguments[1] == "boolean") {
      var s = arguments[0], a = arguments[1], u = new O();
      return s.apply(new zt(u, a)), u;
    } else if (arguments[0] instanceof z && V(arguments[1], bt)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof yt ? c.add(l) : l.apply(new zt(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && V(arguments[0], bt) && V(arguments[1], bt)) {
      for (var f = arguments[0], h = arguments[1], g = arguments[2], p = f.iterator(); p.hasNext(); ) {
        var y = p.next();
        zt.getLines(y, h, g);
      }
      return h;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof z && V(arguments[1], bt)) {
      var d = arguments[0], E = arguments[1], C = arguments[2];
      return d.apply(new zt(E, C)), E;
    }
  }
};
var Ke = function() {
  if (this._boundaryRule = Ae.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new ft("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
Ke.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof v && arguments[1] instanceof Dt) {
    var e = arguments[0], r = arguments[1];
    if (r.isEmpty())
      return m.EXTERIOR;
    var i = r.getExteriorRing(), o = this.locateInPolygonRing(e, i);
    if (o === m.EXTERIOR)
      return m.EXTERIOR;
    if (o === m.BOUNDARY)
      return m.BOUNDARY;
    for (var s = 0; s < r.getNumInteriorRing(); s++) {
      var a = r.getInteriorRingN(s), u = t.locateInPolygonRing(e, a);
      if (u === m.INTERIOR)
        return m.EXTERIOR;
      if (u === m.BOUNDARY)
        return m.BOUNDARY;
    }
    return m.INTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof yt) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return m.EXTERIOR;
    var f = c.getCoordinates();
    return !c.isClosed() && (l.equals(f[0]) || l.equals(f[f.length - 1])) ? m.BOUNDARY : M.isOnLine(l, f) ? m.INTERIOR : m.EXTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof ve) {
    var h = arguments[0], g = arguments[1], p = g.getCoordinate();
    return p.equals2D(h) ? m.INTERIOR : m.EXTERIOR;
  }
};
Ke.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.locatePointInRing(t, e.getCoordinates()) : m.EXTERIOR;
};
Ke.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== m.EXTERIOR;
};
Ke.prototype.updateLocationInfo = function(t) {
  t === m.INTERIOR && (this._isIn = !0), t === m.BOUNDARY && this._numBoundaries++;
};
Ke.prototype.computeLocation = function(t, e) {
  var r = this;
  if (e instanceof ve && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof yt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Dt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Dn)
    for (var i = e, o = 0; o < i.getNumGeometries(); o++) {
      var s = i.getGeometryN(o);
      r.updateLocationInfo(r.locateInternal(t, s));
    }
  else if (e instanceof xr)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      r.updateLocationInfo(r.locateInternal(t, l));
    }
  else if (e instanceof oe)
    for (var c = new wr(e); c.hasNext(); ) {
      var f = c.next();
      f !== e && r.computeLocation(t, f);
    }
};
Ke.prototype.locate = function(t, e) {
  return e.isEmpty() ? m.EXTERIOR : e instanceof yt ? this.locateInternal(t, e) : e instanceof Dt ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? m.BOUNDARY : this._numBoundaries > 0 || this._isIn ? m.INTERIOR : m.EXTERIOR);
};
Ke.prototype.interfaces_ = function() {
  return [];
};
Ke.prototype.getClass = function() {
  return Ke;
};
var re = function n() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    n.call(this, t, n.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._component = r, this._segIndex = i, this._pt = o;
  }
}, ku = { INSIDE_AREA: { configurable: !0 } };
re.prototype.isInsideArea = function() {
  return this._segIndex === re.INSIDE_AREA;
};
re.prototype.getCoordinate = function() {
  return this._pt;
};
re.prototype.getGeometryComponent = function() {
  return this._component;
};
re.prototype.getSegmentIndex = function() {
  return this._segIndex;
};
re.prototype.interfaces_ = function() {
  return [];
};
re.prototype.getClass = function() {
  return re;
};
ku.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties(re, ku);
var un = function(t) {
  this._pts = t || null;
};
un.prototype.filter = function(t) {
  t instanceof ve && this._pts.add(t);
};
un.prototype.interfaces_ = function() {
  return [fr];
};
un.prototype.getClass = function() {
  return un;
};
un.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof ve ? je.singletonList(t) : un.getPoints(t, new O());
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    return e instanceof ve ? r.add(e) : e instanceof oe && e.apply(new un(r)), r;
  }
};
var ni = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
ni.prototype.filter = function(t) {
  (t instanceof ve || t instanceof yt || t instanceof Dt) && this._locations.add(new re(t, 0, t.getCoordinate()));
};
ni.prototype.interfaces_ = function() {
  return [fr];
};
ni.prototype.getClass = function() {
  return ni;
};
ni.getLocations = function(t) {
  var e = new O();
  return t.apply(new ni(e)), e;
};
var Xt = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new Ke(), this._minDistanceLocation = null, this._minDistance = U.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = r, this._geom[1] = i, this._terminateDistance = o;
  }
};
Xt.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var r = arguments[0], i = arguments[1], o = 1 - r, s = jr.getPolygons(this._geom[r]);
    if (s.size() > 0) {
      var a = ni.getLocations(this._geom[o]);
      if (this.computeContainmentDistance(a, s, i), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[o] = i[0], this._minDistanceLocation[r] = i[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && V(arguments[0], Xe) && V(arguments[1], Xe)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], f = 0; f < u.size(); f++)
        for (var h = u.get(f), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(h, l.get(g), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof re && arguments[1] instanceof Dt) {
      var p = arguments[0], y = arguments[1], d = arguments[2], E = p.getCoordinate();
      if (m.EXTERIOR !== this._ptLocator.locate(E, y))
        return this._minDistance = 0, d[0] = p, d[1] = new re(y, E), null;
    }
  }
};
Xt.prototype.computeMinDistanceLinesPoints = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, r), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Xt.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = zt.getLines(this._geom[0]), r = zt.getLines(this._geom[1]), i = un.getPoints(this._geom[0]), o = un.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, r, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, o, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(r, i, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(i, o, t), this.updateMinDistance(t, !1);
};
Xt.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
Xt.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
Xt.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
Xt.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof yt && arguments[1] instanceof ve) {
      var e = arguments[0], r = arguments[1], i = arguments[2];
      if (e.getEnvelopeInternal().distance(r.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var o = e.getCoordinates(), s = r.getCoordinate(), a = 0; a < o.length - 1; a++) {
        var u = M.distancePointLine(s, o[a], o[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new B(o[a], o[a + 1]), c = l.closestPoint(s);
          i[0] = new re(e, a, c), i[1] = new re(r, 0, s);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof yt && arguments[1] instanceof yt) {
      var f = arguments[0], h = arguments[1], g = arguments[2];
      if (f.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var p = f.getCoordinates(), y = h.getCoordinates(), d = 0; d < p.length - 1; d++)
        for (var E = 0; E < y.length - 1; E++) {
          var C = M.distanceLineLine(p[d], p[d + 1], y[E], y[E + 1]);
          if (C < t._minDistance) {
            t._minDistance = C;
            var _ = new B(p[d], p[d + 1]), x = new B(y[E], y[E + 1]), w = _.closestPoints(x);
            g[0] = new re(f, d, w[0]), g[1] = new re(h, E, w[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
Xt.prototype.computeMinDistancePoints = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = s.getCoordinate().distance(u.getCoordinate());
      if (l < i._minDistance && (i._minDistance = l, r[0] = new re(s, 0, s.getCoordinate()), r[1] = new re(u, 0, u.getCoordinate())), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Xt.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new ft("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
Xt.prototype.computeMinDistanceLines = function(t, e, r) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, r), i._minDistance <= i._terminateDistance)
        return null;
    }
};
Xt.prototype.interfaces_ = function() {
  return [];
};
Xt.prototype.getClass = function() {
  return Xt;
};
Xt.distance = function(t, e) {
  var r = new Xt(t, e);
  return r.distance();
};
Xt.isWithinDistance = function(t, e, r) {
  var i = new Xt(t, e, r);
  return i.distance() <= r;
};
Xt.nearestPoints = function(t, e) {
  var r = new Xt(t, e);
  return r.nearestPoints();
};
var jt = function() {
  this._pt = [new v(), new v()], this._distance = U.NaN, this._isNull = !0;
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
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i < this._distance && this.initialize(e, r, i);
  }
};
jt.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(r), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
jt.prototype.toString = function() {
  return Ye.toLineString(this._pt[0], this._pt[1]);
};
jt.prototype.getDistance = function() {
  return this._distance;
};
jt.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1];
    if (this._isNull)
      return this.initialize(e, r), null;
    var i = e.distance(r);
    i > this._distance && this.initialize(e, r, i);
  }
};
jt.prototype.interfaces_ = function() {
  return [];
};
jt.prototype.getClass = function() {
  return jt;
};
var or = function() {
};
or.prototype.interfaces_ = function() {
  return [];
};
or.prototype.getClass = function() {
  return or;
};
or.computeDistance = function() {
  if (arguments[2] instanceof jt && arguments[0] instanceof yt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], r = arguments[2], i = new B(), o = t.getCoordinates(), s = 0; s < o.length - 1; s++) {
      i.setCoordinates(o[s], o[s + 1]);
      var a = i.closestPoint(e);
      r.setMinimum(a, e);
    }
  else if (arguments[2] instanceof jt && arguments[0] instanceof Dt && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    or.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      or.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof jt && arguments[0] instanceof z && arguments[1] instanceof v) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof yt)
      or.computeDistance(h, g, p);
    else if (h instanceof Dt)
      or.computeDistance(h, g, p);
    else if (h instanceof oe)
      for (var y = h, d = 0; d < y.getNumGeometries(); d++) {
        var E = y.getGeometryN(d);
        or.computeDistance(E, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof jt && arguments[0] instanceof B && arguments[1] instanceof v) {
    var C = arguments[0], _ = arguments[1], x = arguments[2], w = C.closestPoint(_);
    x.setMinimum(w, _);
  }
};
var De = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new jt(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, $s = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
De.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
De.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new ft("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
De.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
De.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
De.prototype.computeOrientedDistance = function(t, e, r) {
  var i = new ii(e);
  if (t.apply(i), r.setMaximum(i.getMaxPointDistance()), this._densifyFrac > 0) {
    var o = new mn(e, this._densifyFrac);
    t.apply(o), r.setMaximum(o.getMaxPointDistance());
  }
};
De.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
De.prototype.interfaces_ = function() {
  return [];
};
De.prototype.getClass = function() {
  return De;
};
De.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new De(t, e);
    return r.distance();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new De(i, o);
    return a.setDensifyFraction(s), a.distance();
  }
};
$s.MaxPointDistanceFilter.get = function() {
  return ii;
};
$s.MaxDensifiedByFractionDistanceFilter.get = function() {
  return mn;
};
Object.defineProperties(De, $s);
var ii = function() {
  this._maxPtDist = new jt(), this._minPtDist = new jt(), this._euclideanDist = new or(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
ii.prototype.filter = function(t) {
  this._minPtDist.initialize(), or.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ii.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ii.prototype.interfaces_ = function() {
  return [Lr];
};
ii.prototype.getClass = function() {
  return ii;
};
var mn = function() {
  this._maxPtDist = new jt(), this._minPtDist = new jt(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
mn.prototype.filter = function(t, e) {
  var r = this;
  if (e === 0)
    return null;
  for (var i = t.getCoordinate(e - 1), o = t.getCoordinate(e), s = (o.x - i.x) / this._numSubSegs, a = (o.y - i.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = i.x + u * s, c = i.y + u * a, f = new v(l, c);
    r._minPtDist.initialize(), or.computeDistance(r._geom, f, r._minPtDist), r._maxPtDist.setMaximum(r._minPtDist);
  }
};
mn.prototype.isDone = function() {
  return !1;
};
mn.prototype.isGeometryChanged = function() {
  return !1;
};
mn.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
mn.prototype.interfaces_ = function() {
  return [He];
};
mn.prototype.getClass = function() {
  return mn;
};
var de = function(t, e, r) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = r || null;
}, ta = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
de.prototype.checkMaximumDistance = function(t, e, r) {
  var i = new De(e, t);
  if (i.setDensifyFraction(0.25), this._maxDistanceFound = i.orientedDistance(), this._maxDistanceFound > r) {
    this._isValid = !1;
    var o = i.getCoordinates();
    this._errorLocation = o[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + Ye.toLineString(o[0], o[1]) + ")";
  }
};
de.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = de.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), de.VERBOSE && qt.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
de.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof Dt || this._input instanceof xr || this._input instanceof oe))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
de.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
de.prototype.checkMinimumDistance = function(t, e, r) {
  var i = new Xt(t, e, r);
  if (this._minDistanceFound = i.distance(), this._minDistanceFound < r) {
    this._isValid = !1;
    var o = i.nearestPoints();
    this._errorLocation = i.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + Ye.toLineString(o[0], o[1]) + " )";
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
  for (var e = new O(), r = new zt(e), i = jr.getPolygons(t), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    s.apply(r);
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
ta.VERBOSE.get = function() {
  return !1;
};
ta.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(de, ta);
var Yt = function(t, e, r) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = r || null;
}, ea = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
Yt.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
Yt.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * Yt.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new F(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var r = new F(this._result.getEnvelopeInternal());
  r.expandBy(t), r.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(r)), this.report("Envelope");
};
Yt.prototype.checkDistance = function() {
  var t = new de(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
Yt.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
Yt.prototype.checkPolygonal = function() {
  this._result instanceof Dt || this._result instanceof xr || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
};
Yt.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
Yt.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
Yt.prototype.checkExpectedEmpty = function() {
  if (this._input.getDimension() >= 2 || this._distance > 0)
    return null;
  this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), this.report("ExpectedEmpty");
};
Yt.prototype.report = function(t) {
  if (!Yt.VERBOSE)
    return null;
  qt.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
};
Yt.prototype.getErrorMessage = function() {
  return this._errorMsg;
};
Yt.prototype.interfaces_ = function() {
  return [];
};
Yt.prototype.getClass = function() {
  return Yt;
};
Yt.isValidMsg = function(t, e, r) {
  var i = new Yt(t, e, r);
  return i.isValid() ? null : i.getErrorMessage();
};
Yt.isValid = function(t, e, r) {
  var i = new Yt(t, e, r);
  return !!i.isValid();
};
ea.VERBOSE.get = function() {
  return !1;
};
ea.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Yt, ea);
var yr = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
yr.prototype.getCoordinates = function() {
  return this._pts;
};
yr.prototype.size = function() {
  return this._pts.length;
};
yr.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
yr.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
yr.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : $n.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
yr.prototype.setData = function(t) {
  this._data = t;
};
yr.prototype.getData = function() {
  return this._data;
};
yr.prototype.toString = function() {
  return Ye.toLineString(new _t(this._pts));
};
yr.prototype.interfaces_ = function() {
  return [Rr];
};
yr.prototype.getClass = function() {
  return yr;
};
var Bt = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new O(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
Bt.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
Bt.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
Bt.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
Bt.prototype.count = function() {
  return this._intersectionCount;
};
Bt.prototype.getIntersections = function() {
  return this._intersections;
};
Bt.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Bt.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
Bt.prototype.processIntersections = function(t, e, r, i) {
  if (!this._findAllIntersections && this.hasIntersection() || t === r && e === i)
    return null;
  if (this._isCheckEndSegmentsOnly) {
    var o = this.isEndSegment(t, e) || this.isEndSegment(r, i);
    if (!o)
      return null;
  }
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = r.getCoordinates()[i], l = r.getCoordinates()[i + 1];
  this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = s, this._intSegments[1] = a, this._intSegments[2] = u, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
};
Bt.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
Bt.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
Bt.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
Bt.prototype.interfaces_ = function() {
  return [Fn];
};
Bt.prototype.getClass = function() {
  return Bt;
};
Bt.createAllIntersectionsFinder = function(t) {
  var e = new Bt(t);
  return e.setFindAllIntersections(!0), e;
};
Bt.createAnyIntersectionFinder = function(t) {
  return new Bt(t);
};
Bt.createIntersectionCounter = function(t) {
  var e = new Bt(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var Ze = function() {
  this._li = new Yn(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
Ze.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
Ze.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
Ze.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
Ze.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Ze.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new Bt(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new Zs();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
Ze.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new Jr(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
Ze.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + Ye.toLineString(t[0], t[1]) + " and " + Ye.toLineString(t[2], t[3]);
};
Ze.prototype.interfaces_ = function() {
  return [];
};
Ze.prototype.getClass = function() {
  return Ze;
};
Ze.computeIntersections = function(t) {
  var e = new Ze(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var Gn = function n() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new Ze(n.toSegmentStrings(t));
};
Gn.prototype.checkValid = function() {
  this._nv.checkValid();
};
Gn.prototype.interfaces_ = function() {
  return [];
};
Gn.prototype.getClass = function() {
  return Gn;
};
Gn.toSegmentStrings = function(t) {
  for (var e = new O(), r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
    e.add(new yr(i.getCoordinates(), i));
  }
  return e;
};
Gn.checkValid = function(t) {
  var e = new Gn(t);
  e.checkValid();
};
var oi = function(t) {
  this._mapOp = t;
};
oi.prototype.map = function(t) {
  for (var e = this, r = new O(), i = 0; i < t.getNumGeometries(); i++) {
    var o = e._mapOp.map(t.getGeometryN(i));
    o.isEmpty() || r.add(o);
  }
  return t.getFactory().createGeometryCollection(H.toGeometryArray(r));
};
oi.prototype.interfaces_ = function() {
  return [];
};
oi.prototype.getClass = function() {
  return oi;
};
oi.map = function(t, e) {
  var r = new oi(e);
  return r.map(t);
};
var mr = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new O(), this._resultLineList = new O();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = r;
};
mr.prototype.collectLines = function(t) {
  for (var e = this, r = this._op.getGraph().getEdgeEnds().iterator(); r.hasNext(); ) {
    var i = r.next();
    e.collectLineEdge(i, t, e._lineEdgesList), e.collectBoundaryTouchEdge(i, t, e._lineEdgesList);
  }
};
mr.prototype.labelIsolatedLine = function(t, e) {
  var r = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, r);
};
mr.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
mr.prototype.collectLineEdge = function(t, e, r) {
  var i = t.getLabel(), o = t.getEdge();
  t.isLineEdge() && !t.isVisited() && q.isResultOfOp(i, e) && !o.isCovered() && (r.add(o), t.setVisitedEdge(!0));
};
mr.prototype.findCoveredLineEdges = function() {
  for (var t = this, e = this._op.getGraph().getNodes().iterator(); e.hasNext(); ) {
    var r = e.next();
    r.getEdges().findCoveredLineEdges();
  }
  for (var i = this._op.getGraph().getEdgeEnds().iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getEdge();
    if (o.isLineEdge() && !s.isCoveredSet()) {
      var a = t._op.isCoveredByA(o.getCoordinate());
      s.setCovered(a);
    }
  }
};
mr.prototype.labelIsolatedLines = function(t) {
  for (var e = this, r = t.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getLabel();
    i.isIsolated() && (o.isNull(0) ? e.labelIsolatedLine(i, 0) : e.labelIsolatedLine(i, 1));
  }
};
mr.prototype.buildLines = function(t) {
  for (var e = this, r = this._lineEdgesList.iterator(); r.hasNext(); ) {
    var i = r.next(), o = e._geometryFactory.createLineString(i.getCoordinates());
    e._resultLineList.add(o), i.setInResult(!0);
  }
};
mr.prototype.collectBoundaryTouchEdge = function(t, e, r) {
  var i = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  X.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), q.isResultOfOp(i, e) && e === q.INTERSECTION && (r.add(t.getEdge()), t.setVisitedEdge(!0));
};
mr.prototype.interfaces_ = function() {
  return [];
};
mr.prototype.getClass = function() {
  return mr;
};
var si = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new O();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
si.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var r = this._geometryFactory.createPoint(e);
    this._resultPointList.add(r);
  }
};
si.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, r = this._op.getGraph().getNodes().iterator(); r.hasNext(); ) {
    var i = r.next();
    if (!i.isInResult() && !i.isIncidentEdgeInResult() && (i.getEdges().getDegree() === 0 || t === q.INTERSECTION)) {
      var o = i.getLabel();
      q.isResultOfOp(o, t) && e.filterCoveredNodeToPoint(i);
    }
  }
};
si.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
si.prototype.interfaces_ = function() {
  return [];
};
si.prototype.getClass = function() {
  return si;
};
var ge = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
ge.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
ge.prototype.transformPolygon = function(t, e) {
  var r = this, i = !0, o = this.transformLinearRing(t.getExteriorRing(), t);
  (o === null || !(o instanceof br) || o.isEmpty()) && (i = !1);
  for (var s = new O(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = r.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof br || (i = !1), s.add(u));
  }
  if (i)
    return this._factory.createPolygon(o, s.toArray([]));
  var l = new O();
  return o !== null && l.add(o), l.addAll(s), this._factory.buildGeometry(l);
};
ge.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
ge.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
ge.prototype.transformMultiLineString = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformLineString(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
ge.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
ge.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
ge.prototype.transformMultiPoint = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformPoint(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
ge.prototype.transformMultiPolygon = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transformPolygon(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
ge.prototype.copy = function(t) {
  return t.copy();
};
ge.prototype.transformGeometryCollection = function(t, e) {
  for (var r = this, i = new O(), o = 0; o < t.getNumGeometries(); o++) {
    var s = r.transform(t.getGeometryN(o));
    s !== null && (r._pruneEmptyGeometry && s.isEmpty() || i.add(s));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(H.toGeometryArray(i)) : this._factory.buildGeometry(i);
};
ge.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof ve)
    return this.transformPoint(t, null);
  if (t instanceof bi)
    return this.transformMultiPoint(t, null);
  if (t instanceof br)
    return this.transformLinearRing(t, null);
  if (t instanceof yt)
    return this.transformLineString(t, null);
  if (t instanceof Dn)
    return this.transformMultiLineString(t, null);
  if (t instanceof Dt)
    return this.transformPolygon(t, null);
  if (t instanceof xr)
    return this.transformMultiPolygon(t, null);
  if (t instanceof oe)
    return this.transformGeometryCollection(t, null);
  throw new ft("Unknown Geometry subtype: " + t.getClass().getName());
};
ge.prototype.transformLinearRing = function(t, e) {
  var r = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (r === null)
    return this._factory.createLinearRing(null);
  var i = r.size();
  return i > 0 && i < 4 && !this._preserveType ? this._factory.createLineString(r) : this._factory.createLinearRing(r);
};
ge.prototype.interfaces_ = function() {
  return [];
};
ge.prototype.getClass = function() {
  return ge;
};
var Dr = function n() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new B(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof yt && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    n.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var r = arguments[0], i = arguments[1];
    this._srcPts = r, this._isClosed = n.isClosed(r), this._snapTolerance = i;
  }
};
Dr.prototype.snapVertices = function(t, e) {
  for (var r = this, i = this._isClosed ? t.size() - 1 : t.size(), o = 0; o < i; o++) {
    var s = t.get(o), a = r.findSnapForVertex(s, e);
    a !== null && (t.set(o, new v(a)), o === 0 && r._isClosed && t.set(t.size() - 1, new v(a)));
  }
};
Dr.prototype.findSnapForVertex = function(t, e) {
  for (var r = this, i = 0; i < e.length; i++) {
    if (t.equals2D(e[i]))
      return null;
    if (t.distance(e[i]) < r._snapTolerance)
      return e[i];
  }
  return null;
};
Dr.prototype.snapTo = function(t) {
  var e = new Eo(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var r = e.toCoordinateArray();
  return r;
};
Dr.prototype.snapSegments = function(t, e) {
  var r = this;
  if (e.length === 0)
    return null;
  var i = e.length;
  e[0].equals2D(e[e.length - 1]) && (i = e.length - 1);
  for (var o = 0; o < i; o++) {
    var s = e[o], a = r.findSegmentIndexToSnap(s, t);
    a >= 0 && t.add(a + 1, new v(s), !1);
  }
};
Dr.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var r = this, i = U.MAX_VALUE, o = -1, s = 0; s < e.size() - 1; s++) {
    if (r._seg.p0 = e.get(s), r._seg.p1 = e.get(s + 1), r._seg.p0.equals2D(t) || r._seg.p1.equals2D(t)) {
      if (r._allowSnappingToSourceVertices)
        continue;
      return -1;
    }
    var a = r._seg.distance(t);
    a < r._snapTolerance && a < i && (i = a, o = s);
  }
  return o;
};
Dr.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
Dr.prototype.interfaces_ = function() {
  return [];
};
Dr.prototype.getClass = function() {
  return Dr;
};
Dr.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var Et = function(t) {
  this._srcGeom = t || null;
}, Gu = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
Et.prototype.snapTo = function(t, e) {
  var r = this.extractTargetCoordinates(t), i = new zu(e, r);
  return i.transform(this._srcGeom);
};
Et.prototype.snapToSelf = function(t, e) {
  var r = this.extractTargetCoordinates(this._srcGeom), i = new zu(t, r, !0), o = i.transform(this._srcGeom), s = o;
  return e && V(s, hn) && (s = o.buffer(0)), s;
};
Et.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), r = e / 10;
  return r;
};
Et.prototype.extractTargetCoordinates = function(t) {
  for (var e = new cr(), r = t.getCoordinates(), i = 0; i < r.length; i++)
    e.add(r[i]);
  return e.toArray(new Array(0).fill(null));
};
Et.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = U.MAX_VALUE, r = 0; r < t.length - 1; r++) {
    var i = t[r].distance(t[r + 1]);
    i < e && (e = i);
  }
  return e;
};
Et.prototype.interfaces_ = function() {
  return [];
};
Et.prototype.getClass = function() {
  return Et;
};
Et.snap = function(t, e, r) {
  var i = new Array(2).fill(null), o = new Et(t);
  i[0] = o.snapTo(e, r);
  var s = new Et(e);
  return i[1] = s.snapTo(i[0], r), i;
};
Et.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = Et.computeSizeBasedSnapTolerance(t), r = t.getPrecisionModel();
    if (r.getType() === $.FIXED) {
      var i = 1 / r.getScale() * 2 / 1.415;
      i > e && (e = i);
    }
    return e;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return Math.min(Et.computeOverlaySnapTolerance(o), Et.computeOverlaySnapTolerance(s));
  }
};
Et.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), r = Math.min(e.getHeight(), e.getWidth()), i = r * Et.SNAP_PRECISION_FACTOR;
  return i;
};
Et.snapToSelf = function(t, e, r) {
  var i = new Et(t);
  return i.snapToSelf(e, r);
};
Gu.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(Et, Gu);
var zu = function(n) {
  function t(e, r, i) {
    n.call(this), this._snapTolerance = e || null, this._snapPts = r || null, this._isSelfSnap = i !== void 0 ? i : !1;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(r, i) {
    var o = new Dr(r, this._snapTolerance);
    return o.setAllowSnappingToSourceVertices(this._isSelfSnap), o.snapTo(i);
  }, t.prototype.transformCoordinates = function(r, i) {
    var o = r.toCoordinateArray(), s = this.snapLine(o, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ge), te = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
te.prototype.getCommon = function() {
  return U.longBitsToDouble(this._commonBits);
};
te.prototype.add = function(t) {
  var e = U.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = te.signExpBits(this._commonBits), this._isFirst = !1, null;
  var r = te.signExpBits(e);
  if (r !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = te.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = te.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
te.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = U.longBitsToDouble(t), r = U.toBinaryString(t), i = "0000000000000000000000000000000000000000000000000000000000000000" + r, o = i.substring(i.length - 64), s = o.substring(0, 1) + "  " + o.substring(1, 12) + "(exp) " + o.substring(12) + " [ " + e + " ]";
    return s;
  }
};
te.prototype.interfaces_ = function() {
  return [];
};
te.prototype.getClass = function() {
  return te;
};
te.getBit = function(t, e) {
  var r = 1 << e;
  return t & r ? 1 : 0;
};
te.signExpBits = function(t) {
  return t >> 52;
};
te.zeroLowerBits = function(t, e) {
  var r = (1 << e) - 1, i = ~r, o = t & i;
  return o;
};
te.numCommonMostSigMantissaBits = function(t, e) {
  for (var r = 0, i = 52; i >= 0; i--) {
    if (te.getBit(t, i) !== te.getBit(e, i))
      return r;
    r++;
  }
  return 52;
};
var _n = function() {
  this._commonCoord = null, this._ccFilter = new ai();
}, ra = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
_n.prototype.addCommonBits = function(t) {
  var e = new En(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
_n.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new v(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var r = new En(e);
  return t.apply(r), t.geometryChanged(), t;
};
_n.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
_n.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
_n.prototype.interfaces_ = function() {
  return [];
};
_n.prototype.getClass = function() {
  return _n;
};
ra.CommonCoordinateFilter.get = function() {
  return ai;
};
ra.Translater.get = function() {
  return En;
};
Object.defineProperties(_n, ra);
var ai = function() {
  this._commonBitsX = new te(), this._commonBitsY = new te();
};
ai.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
ai.prototype.getCommonCoordinate = function() {
  return new v(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
ai.prototype.interfaces_ = function() {
  return [Lr];
};
ai.prototype.getClass = function() {
  return ai;
};
var En = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
En.prototype.filter = function(t, e) {
  var r = t.getOrdinate(e, 0) + this.trans.x, i = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, r), t.setOrdinate(e, 1, i);
};
En.prototype.isDone = function() {
  return !1;
};
En.prototype.isGeometryChanged = function() {
  return !0;
};
En.prototype.interfaces_ = function() {
  return [He];
};
En.prototype.getClass = function() {
  return En;
};
var kt = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
kt.prototype.selfSnap = function(t) {
  var e = new Et(t), r = e.snapTo(t, this._snapTolerance);
  return r;
};
kt.prototype.removeCommonBits = function(t) {
  this._cbr = new _n(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
kt.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
kt.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), r = q.overlayOp(e[0], e[1], t);
  return this.prepareResult(r);
};
kt.prototype.checkValid = function(t) {
  t.isValid() || qt.out.println("Snapped geometry is invalid");
};
kt.prototype.computeSnapTolerance = function() {
  this._snapTolerance = Et.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
kt.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), r = Et.snap(e[0], e[1], this._snapTolerance);
  return r;
};
kt.prototype.interfaces_ = function() {
  return [];
};
kt.prototype.getClass = function() {
  return kt;
};
kt.overlayOp = function(t, e, r) {
  var i = new kt(t, e);
  return i.getResultGeometry(r);
};
kt.union = function(t, e) {
  return kt.overlayOp(t, e, q.UNION);
};
kt.intersection = function(t, e) {
  return kt.overlayOp(t, e, q.INTERSECTION);
};
kt.symDifference = function(t, e) {
  return kt.overlayOp(t, e, q.SYMDIFFERENCE);
};
kt.difference = function(t, e) {
  return kt.overlayOp(t, e, q.DIFFERENCE);
};
var ue = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
ue.prototype.getResultGeometry = function(t) {
  var e = null, r = !1, i = null;
  try {
    e = q.overlayOp(this._geom[0], this._geom[1], t);
    var o = !0;
    o && (r = !0);
  } catch (s) {
    if (s instanceof Kr)
      i = s;
    else
      throw s;
  } finally {
  }
  if (!r)
    try {
      e = kt.overlayOp(this._geom[0], this._geom[1], t);
    } catch (s) {
      throw s instanceof Kr ? i : s;
    } finally {
    }
  return e;
};
ue.prototype.interfaces_ = function() {
  return [];
};
ue.prototype.getClass = function() {
  return ue;
};
ue.overlayOp = function(t, e, r) {
  var i = new ue(t, e);
  return i.getResultGeometry(r);
};
ue.union = function(t, e) {
  return ue.overlayOp(t, e, q.UNION);
};
ue.intersection = function(t, e) {
  return ue.overlayOp(t, e, q.INTERSECTION);
};
ue.symDifference = function(t, e) {
  return ue.overlayOp(t, e, q.SYMDIFFERENCE);
};
ue.difference = function(t, e) {
  return ue.overlayOp(t, e, q.DIFFERENCE);
};
var po = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
po.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
po.prototype.interfaces_ = function() {
  return [];
};
po.prototype.getClass = function() {
  return po;
};
var _e = function n() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = n.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var r = arguments[0], i = arguments[1], o = arguments[2];
    this._eventType = n.INSERT, this._label = r, this._xValue = i, this._obj = o;
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
var Wo = function() {
};
Wo.prototype.interfaces_ = function() {
  return [];
};
Wo.prototype.getClass = function() {
  return Wo;
};
var Ht = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = r;
};
Ht.prototype.isTrivialIntersection = function(t, e, r, i) {
  if (t === r && this._li.getIntersectionNum() === 1) {
    if (Ht.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.getNumPoints() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Ht.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Ht.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
Ht.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Ht.prototype.isBoundaryPointInternal = function(t, e) {
  for (var r = e.iterator(); r.hasNext(); ) {
    var i = r.next(), o = i.getCoordinate();
    if (t.isIntersection(o))
      return !0;
  }
  return !1;
};
Ht.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Ht.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Ht.prototype.isDone = function() {
  return this._isDone;
};
Ht.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
Ht.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
Ht.prototype.addIntersections = function(t, e, r, i) {
  if (t === r && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = r.getCoordinates()[i], u = r.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), r.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, r, i) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), r.addIntersections(this._li, i, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
Ht.prototype.interfaces_ = function() {
  return [];
};
Ht.prototype.getClass = function() {
  return Ht;
};
Ht.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var cf = function(n) {
  function t() {
    n.call(this), this.events = new O(), this.nOverlaps = null;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var r = this;
    je.sort(this.events);
    for (var i = 0; i < this.events.size(); i++) {
      var o = r.events.get(i);
      o.isDelete() && o.getInsertEvent().setDeleteEventIndex(i);
    }
  }, t.prototype.computeIntersections = function() {
    var r = this;
    if (arguments.length === 1) {
      var i = arguments[0];
      this.nOverlaps = 0, this.prepareEvents();
      for (var o = 0; o < this.events.size(); o++) {
        var s = r.events.get(o);
        if (s.isInsert() && r.processOverlaps(o, s.getDeleteEventIndex(), s, i), i.isDone())
          break;
      }
    } else if (arguments.length === 3) {
      if (arguments[2] instanceof Ht && V(arguments[0], Xe) && V(arguments[1], Xe)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && V(arguments[0], Xe) && arguments[1] instanceof Ht) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        h ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(f);
      }
    }
  }, t.prototype.addEdge = function(r, i) {
    for (var o = this, s = r.getMonotoneChainEdge(), a = s.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new po(s, u), c = new _e(i, s.getMinX(u), l);
      o.events.add(c), o.events.add(new _e(s.getMaxX(u), c));
    }
  }, t.prototype.processOverlaps = function(r, i, o, s) {
    for (var a = this, u = o.getObject(), l = r; l < i; l++) {
      var c = a.events.get(l);
      if (c.isInsert()) {
        var f = c.getObject();
        o.isSameLabel(c) || (u.computeIntersections(f, s), a.nOverlaps++);
      }
    }
  }, t.prototype.addEdges = function() {
    var r = this;
    if (arguments.length === 1)
      for (var i = arguments[0], o = i.iterator(); o.hasNext(); ) {
        var s = o.next();
        r.addEdge(s, s);
      }
    else if (arguments.length === 2)
      for (var a = arguments[0], u = arguments[1], l = a.iterator(); l.hasNext(); ) {
        var c = l.next();
        r.addEdge(c, u);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Wo), Mr = function() {
  this._min = U.POSITIVE_INFINITY, this._max = U.NEGATIVE_INFINITY;
}, Vu = { NodeComparator: { configurable: !0 } };
Mr.prototype.getMin = function() {
  return this._min;
};
Mr.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
Mr.prototype.getMax = function() {
  return this._max;
};
Mr.prototype.toString = function() {
  return Ye.toLineString(new v(this._min, 0), new v(this._max, 0));
};
Mr.prototype.interfaces_ = function() {
  return [];
};
Mr.prototype.getClass = function() {
  return Mr;
};
Vu.NodeComparator.get = function() {
  return vo;
};
Object.defineProperties(Mr, Vu);
var vo = function() {
};
vo.prototype.compare = function(t, e) {
  var r = t, i = e, o = (r._min + r._max) / 2, s = (i._min + i._max) / 2;
  return o < s ? -1 : o > s ? 1 : 0;
};
vo.prototype.interfaces_ = function() {
  return [Ii];
};
vo.prototype.getClass = function() {
  return vo;
};
var ff = function(n) {
  function t() {
    n.call(this), this._item = null;
    var e = arguments[0], r = arguments[1], i = arguments[2];
    this._min = e, this._max = r, this._item = i;
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.query = function(r, i, o) {
    if (!this.intersects(r, i))
      return null;
    o.visitItem(this._item);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Mr), hf = function(n) {
  function t() {
    n.call(this), this._node1 = null, this._node2 = null;
    var e = arguments[0], r = arguments[1];
    this._node1 = e, this._node2 = r, this.buildExtent(this._node1, this._node2);
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.buildExtent = function(r, i) {
    this._min = Math.min(r._min, i._min), this._max = Math.max(r._max, i._max);
  }, t.prototype.query = function(r, i, o) {
    if (!this.intersects(r, i))
      return null;
    this._node1 !== null && this._node1.query(r, i, o), this._node2 !== null && this._node2.query(r, i, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Mr), Ar = function() {
  this._leaves = new O(), this._root = null, this._level = 0;
};
Ar.prototype.buildTree = function() {
  var t = this;
  je.sort(this._leaves, new Mr.NodeComparator());
  for (var e = this._leaves, r = null, i = new O(); ; ) {
    if (t.buildLevel(e, i), i.size() === 1)
      return i.get(0);
    r = e, e = i, i = r;
  }
};
Ar.prototype.insert = function(t, e, r) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new ff(t, e, r));
};
Ar.prototype.query = function(t, e, r) {
  this.init(), this._root.query(t, e, r);
};
Ar.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
Ar.prototype.printNode = function(t) {
  qt.out.println(Ye.toLineString(new v(t._min, this._level), new v(t._max, this._level)));
};
Ar.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
Ar.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var r = 0; r < t.size(); r += 2) {
    var i = t.get(r), o = r + 1 < t.size() ? t.get(r) : null;
    if (o === null)
      e.add(i);
    else {
      var s = new hf(t.get(r), t.get(r + 1));
      e.add(s);
    }
  }
};
Ar.prototype.interfaces_ = function() {
  return [];
};
Ar.prototype.getClass = function() {
  return Ar;
};
var Mi = function() {
  this._items = new O();
};
Mi.prototype.visitItem = function(t) {
  this._items.add(t);
};
Mi.prototype.getItems = function() {
  return this._items;
};
Mi.prototype.interfaces_ = function() {
  return [gn];
};
Mi.prototype.getClass = function() {
  return Mi;
};
var Ai = function() {
  this._index = null;
  var t = arguments[0];
  if (!V(t, hn))
    throw new ft("Argument must be Polygonal");
  this._index = new zn(t);
}, ia = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
Ai.prototype.locate = function(t) {
  var e = new ar(t), r = new Fi(e);
  return this._index.query(t.y, t.y, r), e.getLocation();
};
Ai.prototype.interfaces_ = function() {
  return [Ti];
};
Ai.prototype.getClass = function() {
  return Ai;
};
ia.SegmentVisitor.get = function() {
  return Fi;
};
ia.IntervalIndexedGeometry.get = function() {
  return zn;
};
Object.defineProperties(Ai, ia);
var Fi = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
Fi.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
Fi.prototype.interfaces_ = function() {
  return [gn];
};
Fi.prototype.getClass = function() {
  return Fi;
};
var zn = function() {
  this._index = new Ar();
  var t = arguments[0];
  this.init(t);
};
zn.prototype.init = function(t) {
  for (var e = this, r = zt.getLines(t), i = r.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getCoordinates();
    e.addLine(s);
  }
};
zn.prototype.addLine = function(t) {
  for (var e = this, r = 1; r < t.length; r++) {
    var i = new B(t[r - 1], t[r]), o = Math.min(i.p0.y, i.p1.y), s = Math.max(i.p0.y, i.p1.y);
    e._index.insert(o, s, i);
  }
};
zn.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], r = new Mi();
    return this._index.query(t, e, r), r.getItems();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    this._index.query(i, o, s);
  }
};
zn.prototype.interfaces_ = function() {
  return [];
};
zn.prototype.getClass = function() {
  return zn;
};
var Qi = function(n) {
  function t() {
    if (n.call(this), this._parentGeom = null, this._lineEdgeMap = new Su(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new Ke(), arguments.length === 2) {
      var e = arguments[0], r = arguments[1], i = Ae.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = r, this._boundaryNodeRule = i, r !== null && this.add(r);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2];
      this._argIndex = o, this._parentGeom = s, this._boundaryNodeRule = a, s !== null && this.add(s);
    }
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(r, i) {
    var o = this._nodes.addNode(i), s = o.getLabel(), a = 1, u = m.NONE;
    u = s.getLocation(r, b.ON), u === m.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    s.setLocation(r, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var r = arguments[0], i = arguments[1];
      return this.computeSelfNodes(r, i, !1);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Ht(o, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof br || this._parentGeom instanceof Dt || this._parentGeom instanceof xr, f = s || !c;
      return l.computeIntersections(this._edges, u, f), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(r) {
    for (var i = this._edges.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.eiList.addSplitEdges(r);
    }
  }, t.prototype.computeEdgeIntersections = function(r, i, o) {
    var s = new Ht(i, o, !0);
    s.setBoundaryNodes(this.getBoundaryNodes(), r.getBoundaryNodes());
    var a = this.createEdgeSetIntersector();
    return a.computeIntersections(this._edges, r._edges, s), s;
  }, t.prototype.getGeometry = function() {
    return this._parentGeom;
  }, t.prototype.getBoundaryNodeRule = function() {
    return this._boundaryNodeRule;
  }, t.prototype.hasTooFewPoints = function() {
    return this._hasTooFewPoints;
  }, t.prototype.addPoint = function() {
    if (arguments[0] instanceof ve) {
      var r = arguments[0], i = r.getCoordinate();
      this.insertPoint(this._argIndex, i, m.INTERIOR);
    } else if (arguments[0] instanceof v) {
      var o = arguments[0];
      this.insertPoint(this._argIndex, o, m.INTERIOR);
    }
  }, t.prototype.addPolygon = function(r) {
    var i = this;
    this.addPolygonRing(r.getExteriorRing(), m.EXTERIOR, m.INTERIOR);
    for (var o = 0; o < r.getNumInteriorRing(); o++) {
      var s = r.getInteriorRingN(o);
      i.addPolygonRing(s, m.INTERIOR, m.EXTERIOR);
    }
  }, t.prototype.addEdge = function(r) {
    this.insertEdge(r);
    var i = r.getCoordinates();
    this.insertPoint(this._argIndex, i[0], m.BOUNDARY), this.insertPoint(this._argIndex, i[i.length - 1], m.BOUNDARY);
  }, t.prototype.addLineString = function(r) {
    var i = W.removeRepeatedPoints(r.getCoordinates());
    if (i.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = i[0], null;
    var o = new Ho(i, new et(this._argIndex, m.INTERIOR));
    this._lineEdgeMap.put(r, o), this.insertEdge(o), X.isTrue(i.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, i[0]), this.insertBoundaryPoint(this._argIndex, i[i.length - 1]);
  }, t.prototype.getInvalidPoint = function() {
    return this._invalidPoint;
  }, t.prototype.getBoundaryPoints = function() {
    for (var r = this.getBoundaryNodes(), i = new Array(r.size()).fill(null), o = 0, s = r.iterator(); s.hasNext(); ) {
      var a = s.next();
      i[o++] = a.getCoordinate().copy();
    }
    return i;
  }, t.prototype.getBoundaryNodes = function() {
    return this._boundaryNodes === null && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
  }, t.prototype.addSelfIntersectionNode = function(r, i, o) {
    if (this.isBoundaryNode(r, i))
      return null;
    o === m.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(r, i) : this.insertPoint(r, i, o);
  }, t.prototype.addPolygonRing = function(r, i, o) {
    if (r.isEmpty())
      return null;
    var s = W.removeRepeatedPoints(r.getCoordinates());
    if (s.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = s[0], null;
    var a = i, u = o;
    M.isCCW(s) && (a = o, u = i);
    var l = new Ho(s, new et(this._argIndex, m.BOUNDARY, a, u));
    this._lineEdgeMap.put(r, l), this.insertEdge(l), this.insertPoint(this._argIndex, s[0], m.BOUNDARY);
  }, t.prototype.insertPoint = function(r, i, o) {
    var s = this._nodes.addNode(i), a = s.getLabel();
    a === null ? s._label = new et(r, o) : a.setLocation(r, o);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new cf();
  }, t.prototype.addSelfIntersectionNodes = function(r) {
    for (var i = this, o = this._edges.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getLabel().getLocation(r), u = s.eiList.iterator(); u.hasNext(); ) {
        var l = u.next();
        i.addSelfIntersectionNode(r, l.coord, a);
      }
  }, t.prototype.add = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      if (r.isEmpty())
        return null;
      if (r instanceof xr && (this._useBoundaryDeterminationRule = !1), r instanceof Dt)
        this.addPolygon(r);
      else if (r instanceof yt)
        this.addLineString(r);
      else if (r instanceof ve)
        this.addPoint(r);
      else if (r instanceof bi)
        this.addCollection(r);
      else if (r instanceof Dn)
        this.addCollection(r);
      else if (r instanceof xr)
        this.addCollection(r);
      else if (r instanceof oe)
        this.addCollection(r);
      else
        throw new Error(r.getClass().getName());
    } else
      return n.prototype.add.apply(this, arguments);
  }, t.prototype.addCollection = function(r) {
    for (var i = this, o = 0; o < r.getNumGeometries(); o++) {
      var s = r.getGeometryN(o);
      i.add(s);
    }
  }, t.prototype.locate = function(r) {
    return V(this._parentGeom, hn) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new Ai(this._parentGeom)), this._areaPtLocator.locate(r)) : this._ptLocator.locate(r, this._parentGeom);
  }, t.prototype.findEdge = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      return this._lineEdgeMap.get(r);
    } else
      return n.prototype.findEdge.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.determineBoundary = function(r, i) {
    return r.isInBoundary(i) ? m.BOUNDARY : m.INTERIOR;
  }, t;
}(pt), Bi = function() {
  if (this._li = new Yn(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new Qi(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], r = arguments[1], i = Ae.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(r.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(r.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Qi(0, e, i), this._arg[1] = new Qi(1, r, i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    o.getPrecisionModel().compareTo(s.getPrecisionModel()) >= 0 ? this.setComputationPrecision(o.getPrecisionModel()) : this.setComputationPrecision(s.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Qi(0, o, a), this._arg[1] = new Qi(1, s, a);
  }
};
Bi.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
Bi.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
Bi.prototype.interfaces_ = function() {
  return [];
};
Bi.prototype.getClass = function() {
  return Bi;
};
var Pn = function() {
};
Pn.prototype.interfaces_ = function() {
  return [];
};
Pn.prototype.getClass = function() {
  return Pn;
};
Pn.map = function() {
  if (arguments[0] instanceof z && V(arguments[1], Pn.MapOp)) {
    for (var t = arguments[0], e = arguments[1], r = new O(), i = 0; i < t.getNumGeometries(); i++) {
      var o = e.map(t.getGeometryN(i));
      o !== null && r.add(o);
    }
    return t.getFactory().buildGeometry(r);
  } else if (V(arguments[0], bt) && V(arguments[1], Pn.MapOp)) {
    for (var s = arguments[0], a = arguments[1], u = new O(), l = s.iterator(); l.hasNext(); ) {
      var c = l.next(), f = a.map(c);
      f !== null && u.add(f);
    }
    return u;
  }
};
Pn.MapOp = function() {
};
var q = function(n) {
  function t() {
    var e = arguments[0], r = arguments[1];
    n.call(this, e, r), this._ptLocator = new Ke(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new Qe(), this._resultPolyList = new O(), this._resultLineList = new O(), this._resultPointList = new O(), this._graph = new pt(new Tu()), this._geomFact = e.getFactory();
  }
  return n && (t.__proto__ = n), t.prototype = Object.create(n && n.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(r) {
    var i = this._edgeList.findEqualEdge(r);
    if (i !== null) {
      var o = i.getLabel(), s = r.getLabel();
      i.isPointwiseEqual(r) || (s = new et(r.getLabel()), s.flip());
      var a = i.getDepth();
      a.isNull() && a.add(o), a.add(s), o.merge(s);
    } else
      this._edgeList.add(r);
  }, t.prototype.getGraph = function() {
    return this._graph;
  }, t.prototype.cancelDuplicateResultEdges = function() {
    for (var r = this._graph.getEdgeEnds().iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getSym();
      i.isInResult() && o.isInResult() && (i.setInResult(!1), o.setInResult(!1));
    }
  }, t.prototype.isCoveredByLA = function(r) {
    return !!(this.isCovered(r, this._resultLineList) || this.isCovered(r, this._resultPolyList));
  }, t.prototype.computeGeometry = function(r, i, o, s) {
    var a = new O();
    return a.addAll(r), a.addAll(i), a.addAll(o), a.isEmpty() ? t.createEmptyResult(s, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var i = r.next();
      i.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(r, i) {
    for (var o = this, s = i.iterator(); s.hasNext(); ) {
      var a = s.next(), u = o._ptLocator.locate(r, a);
      if (u !== m.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var r = new O(), i = this._edgeList.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.isCollapsed() && (i.remove(), r.add(o.getCollapsedEdge()));
    }
    this._edgeList.addAll(r);
  }, t.prototype.updateNodeLabelling = function() {
    for (var r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getEdges().getLabel();
      i.getLabel().merge(o);
    }
  }, t.prototype.getResultGeometry = function(r) {
    return this.computeOverlay(r), this._resultGeom;
  }, t.prototype.insertUniqueEdges = function(r) {
    for (var i = this, o = r.iterator(); o.hasNext(); ) {
      var s = o.next();
      i.insertUniqueEdge(s);
    }
  }, t.prototype.computeOverlay = function(r) {
    this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
    var i = new O();
    this._arg[0].computeSplitEdges(i), this._arg[1].computeSplitEdges(i), this.insertUniqueEdges(i), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Gn.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(r), this.cancelDuplicateResultEdges();
    var o = new ye(this._geomFact);
    o.add(this._graph), this._resultPolyList = o.getPolygons();
    var s = new mr(this, this._geomFact, this._ptLocator);
    this._resultLineList = s.build(r);
    var a = new si(this, this._geomFact, this._ptLocator);
    this._resultPointList = a.build(r), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, r);
  }, t.prototype.labelIncompleteNode = function(r, i) {
    var o = this._ptLocator.locate(r.getCoordinate(), this._arg[i].getGeometry());
    r.getLabel().setLocation(i, o);
  }, t.prototype.copyPoints = function(r) {
    for (var i = this, o = this._arg[r].getNodeIterator(); o.hasNext(); ) {
      var s = o.next(), a = i._graph.addNode(s.getCoordinate());
      a.setLabel(r, s.getLabel().getLocation(r));
    }
  }, t.prototype.findResultAreaEdges = function(r) {
    for (var i = this._graph.getEdgeEnds().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.isArea() && !o.isInteriorAreaEdge() && t.isResultOfOp(s.getLocation(0, b.RIGHT), s.getLocation(1, b.RIGHT), r) && o.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var r = this._edgeList.iterator(); r.hasNext(); ) {
      var i = r.next(), o = i.getLabel(), s = i.getDepth();
      if (!s.isNull()) {
        s.normalize();
        for (var a = 0; a < 2; a++)
          !o.isNull(a) && o.isArea() && !s.isNull(a) && (s.getDelta(a) === 0 ? o.toLine(a) : (X.isTrue(!s.isNull(a, b.LEFT), "depth of LEFT side has not been initialized"), o.setLocation(a, b.LEFT, s.getLocation(a, b.LEFT)), X.isTrue(!s.isNull(a, b.RIGHT), "depth of RIGHT side has not been initialized"), o.setLocation(a, b.RIGHT, s.getLocation(a, b.RIGHT))));
      }
    }
  }, t.prototype.computeLabelling = function() {
    for (var r = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next();
      o.getEdges().computeLabelling(r._arg);
    }
    this.mergeSymLabels(), this.updateNodeLabelling();
  }, t.prototype.labelIncompleteNodes = function() {
    for (var r = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      o.isIsolated() && (s.isNull(0) ? r.labelIncompleteNode(o, 0) : r.labelIncompleteNode(o, 1)), o.getEdges().updateLabelling(s);
    }
  }, t.prototype.isCoveredByA = function(r) {
    return !!this.isCovered(r, this._resultPolyList);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Bi);
q.overlayOp = function(n, t, e) {
  var r = new q(n, t), i = r.getResultGeometry(e);
  return i;
};
q.intersection = function(n, t) {
  if (n.isEmpty() || t.isEmpty())
    return q.createEmptyResult(q.INTERSECTION, n, t, n.getFactory());
  if (n.isGeometryCollection()) {
    var e = t;
    return oi.map(n, {
      interfaces_: function() {
        return [Pn.MapOp];
      },
      map: function(r) {
        return r.intersection(e);
      }
    });
  }
  return n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), ue.overlayOp(n, t, q.INTERSECTION);
};
q.symDifference = function(n, t) {
  if (n.isEmpty() || t.isEmpty()) {
    if (n.isEmpty() && t.isEmpty())
      return q.createEmptyResult(q.SYMDIFFERENCE, n, t, n.getFactory());
    if (n.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return n.copy();
  }
  return n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), ue.overlayOp(n, t, q.SYMDIFFERENCE);
};
q.resultDimension = function(n, t, e) {
  var r = t.getDimension(), i = e.getDimension(), o = -1;
  switch (n) {
    case q.INTERSECTION:
      o = Math.min(r, i);
      break;
    case q.UNION:
      o = Math.max(r, i);
      break;
    case q.DIFFERENCE:
      o = r;
      break;
    case q.SYMDIFFERENCE:
      o = Math.max(r, i);
      break;
  }
  return o;
};
q.createEmptyResult = function(n, t, e, r) {
  var i = null;
  switch (q.resultDimension(n, t, e)) {
    case -1:
      i = r.createGeometryCollection(new Array(0).fill(null));
      break;
    case 0:
      i = r.createPoint();
      break;
    case 1:
      i = r.createLineString();
      break;
    case 2:
      i = r.createPolygon();
      break;
  }
  return i;
};
q.difference = function(n, t) {
  return n.isEmpty() ? q.createEmptyResult(q.DIFFERENCE, n, t, n.getFactory()) : t.isEmpty() ? n.copy() : (n.checkNotGeometryCollection(n), n.checkNotGeometryCollection(t), ue.overlayOp(n, t, q.DIFFERENCE));
};
q.isResultOfOp = function() {
  if (arguments.length === 2) {
    var n = arguments[0], t = arguments[1], e = n.getLocation(0), r = n.getLocation(1);
    return q.isResultOfOp(e, r, t);
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    switch (i === m.BOUNDARY && (i = m.INTERIOR), o === m.BOUNDARY && (o = m.INTERIOR), s) {
      case q.INTERSECTION:
        return i === m.INTERIOR && o === m.INTERIOR;
      case q.UNION:
        return i === m.INTERIOR || o === m.INTERIOR;
      case q.DIFFERENCE:
        return i === m.INTERIOR && o !== m.INTERIOR;
      case q.SYMDIFFERENCE:
        return i === m.INTERIOR && o !== m.INTERIOR || i !== m.INTERIOR && o === m.INTERIOR;
    }
    return !1;
  }
};
q.INTERSECTION = 1;
q.UNION = 2;
q.DIFFERENCE = 3;
q.SYMDIFFERENCE = 4;
var ln = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new Ke(), this._seg = new B();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
ln.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, r = 0; r < this._linework.getNumGeometries(); r++)
    for (var i = e._linework.getGeometryN(r), o = i.getCoordinateSequence(), s = 0; s < o.size() - 1; s++) {
      o.getCoordinate(s, e._seg.p0), o.getCoordinate(s + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
ln.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? m.BOUNDARY : this._ptLocator.locate(t, this._g);
};
ln.prototype.extractLinework = function(t) {
  var e = new ki();
  t.apply(e);
  var r = e.getLinework(), i = H.toLineStringArray(r);
  return t.getFactory().createMultiLineString(i);
};
ln.prototype.interfaces_ = function() {
  return [];
};
ln.prototype.getClass = function() {
  return ln;
};
var ki = function() {
  this._linework = null, this._linework = new O();
};
ki.prototype.getLinework = function() {
  return this._linework;
};
ki.prototype.filter = function(t) {
  var e = this;
  if (t instanceof Dt) {
    var r = t;
    this._linework.add(r.getExteriorRing());
    for (var i = 0; i < r.getNumInteriorRing(); i++)
      e._linework.add(r.getInteriorRingN(i));
  }
};
ki.prototype.interfaces_ = function() {
  return [fr];
};
ki.prototype.getClass = function() {
  return ki;
};
var Vn = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Vn.prototype.extractPoints = function(t, e, r) {
  for (var i = this, o = t.getCoordinates(), s = 0; s < o.length - 1; s++)
    i.computeOffsetPoints(o[s], o[s + 1], e, r);
};
Vn.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Vn.prototype.getPoints = function(t) {
  for (var e = this, r = new O(), i = zt.getLines(this._g), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    e.extractPoints(s, t, r);
  }
  return r;
};
Vn.prototype.computeOffsetPoints = function(t, e, r, i) {
  var o = e.x - t.x, s = e.y - t.y, a = Math.sqrt(o * o + s * s), u = r * o / a, l = r * s / a, c = (e.x + t.x) / 2, f = (e.y + t.y) / 2;
  if (this._doLeft) {
    var h = new v(c - l, f + u);
    i.add(h);
  }
  if (this._doRight) {
    var g = new v(c + l, f - u);
    i.add(g);
  }
};
Vn.prototype.interfaces_ = function() {
  return [];
};
Vn.prototype.getClass = function() {
  return Vn;
};
var Re = function n() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = n.TOLERANCE, this._testCoords = new O();
  var t = arguments[0], e = arguments[1], r = arguments[2];
  this._boundaryDistanceTolerance = n.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, r], this._locFinder = [new ln(this._geom[0], this._boundaryDistanceTolerance), new ln(this._geom[1], this._boundaryDistanceTolerance), new ln(this._geom[2], this._boundaryDistanceTolerance)];
}, Uu = { TOLERANCE: { configurable: !0 } };
Re.prototype.reportResult = function(t, e, r) {
  qt.out.println("Overlay result invalid - A:" + m.toLocationSymbol(e[0]) + " B:" + m.toLocationSymbol(e[1]) + " expected:" + (r ? "i" : "e") + " actual:" + m.toLocationSymbol(e[2]));
};
Re.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
Re.prototype.checkValid = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], r = 0; r < this._testCoords.size(); r++) {
      var i = t._testCoords.get(r);
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
  var e = new Vn(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
Re.prototype.isValidResult = function(t, e) {
  var r = q.isResultOfOp(e[0], e[1], t), i = e[2] === m.INTERIOR, o = !(r ^ i);
  return o || this.reportResult(t, e, r), o;
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
  for (var r = 0; r < 3; r++)
    if (t[r] === e)
      return !0;
  return !1;
};
Re.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(Et.computeSizeBasedSnapTolerance(t), Et.computeSizeBasedSnapTolerance(e));
};
Re.isValid = function(t, e, r, i) {
  var o = new Re(t, e, i);
  return o.isValid(r);
};
Uu.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(Re, Uu);
var Ne = function n(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = n.extractFactory(t), this._inputGeoms = t;
};
Ne.prototype.extractElements = function(t, e) {
  var r = this;
  if (t === null)
    return null;
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    r._skipEmpty && o.isEmpty() || e.add(o);
  }
};
Ne.prototype.combine = function() {
  for (var t = this, e = new O(), r = this._inputGeoms.iterator(); r.hasNext(); ) {
    var i = r.next();
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
    var r = arguments[0], i = arguments[1], o = new Ne(Ne.createList(r, i));
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
    var t = arguments[0], e = arguments[1], r = new O();
    return r.add(t), r.add(e), r;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new O();
    return a.add(i), a.add(o), a.add(s), a;
  }
};
var xt = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new O());
}, qu = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
xt.prototype.reduceToGeometries = function(t) {
  for (var e = this, r = new O(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = null;
    V(o, Xe) ? s = e.unionTree(o) : o instanceof z && (s = o), r.add(s);
  }
  return r;
};
xt.prototype.extractByEnvelope = function(t, e, r) {
  for (var i = new O(), o = 0; o < e.getNumGeometries(); o++) {
    var s = e.getGeometryN(o);
    s.getEnvelopeInternal().intersects(t) ? i.add(s) : r.add(s);
  }
  return this._geomFactory.buildGeometry(i);
};
xt.prototype.unionOptimized = function(t, e) {
  var r = t.getEnvelopeInternal(), i = e.getEnvelopeInternal();
  if (!r.intersects(i)) {
    var o = Ne.combine(t, e);
    return o;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var s = r.intersection(i);
  return this.unionUsingEnvelopeIntersection(t, e, s);
};
xt.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new bu(xt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var r = e.next();
    t.insert(r.getEnvelopeInternal(), r);
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
    var e = arguments[0], r = arguments[1], i = arguments[2];
    if (i - r <= 1) {
      var o = xt.getGeometry(e, r);
      return this.unionSafe(o, null);
    } else {
      if (i - r === 2)
        return this.unionSafe(xt.getGeometry(e, r), xt.getGeometry(e, r + 1));
      var s = Math.trunc((i + r) / 2), a = this.binaryUnion(e, r, s), u = this.binaryUnion(e, s, i);
      return this.unionSafe(a, u);
    }
  }
};
xt.prototype.repeatedUnion = function(t) {
  for (var e = null, r = t.iterator(); r.hasNext(); ) {
    var i = r.next();
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
  var e = this.reduceToGeometries(t), r = this.binaryUnion(e);
  return r;
};
xt.prototype.unionUsingEnvelopeIntersection = function(t, e, r) {
  var i = new O(), o = this.extractByEnvelope(r, t, i), s = this.extractByEnvelope(r, e, i), a = this.unionActual(o, s);
  i.add(a);
  var u = Ne.combine(i);
  return u;
};
xt.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), r = e.buildGeometry(t), i = r.buffer(0);
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
  if (V(t, hn))
    return t;
  var e = jr.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(H.toPolygonArray(e));
};
xt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
xt.union = function(t) {
  var e = new xt(t);
  return e.union();
};
qu.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(xt, qu);
var jo = function() {
};
jo.prototype.interfaces_ = function() {
  return [];
};
jo.prototype.getClass = function() {
  return jo;
};
jo.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return q.createEmptyResult(q.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), ue.overlayOp(t, e, q.UNION);
};
function Hn() {
  return new Qo();
}
function Qo() {
  this.reset();
}
Qo.prototype = {
  constructor: Qo,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(n) {
    Ga(Oo, n, this.t), Ga(this, Oo.s, this.s), this.s ? this.t += Oo.t : this.s = Oo.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Oo = new Qo();
function Ga(n, t, e) {
  var r = n.s = t + e, i = r - t, o = r - i;
  n.t = t - o + (e - i);
}
var vt = 1e-6, st = Math.PI, Wr = st / 2, za = st / 4, en = st * 2, xn = 180 / st, rr = st / 180, ne = Math.abs, gf = Math.atan, Gi = Math.atan2, Pt = Math.cos, Rt = Math.sin, Hi = Math.sqrt;
function Xu(n) {
  return n > 1 ? 0 : n < -1 ? st : Math.acos(n);
}
function ui(n) {
  return n > 1 ? Wr : n < -1 ? -Wr : Math.asin(n);
}
function Ki() {
}
function Ko(n, t) {
  n && Ua.hasOwnProperty(n.type) && Ua[n.type](n, t);
}
var Va = {
  Feature: function(n, t) {
    Ko(n.geometry, t);
  },
  FeatureCollection: function(n, t) {
    for (var e = n.features, r = -1, i = e.length; ++r < i; )
      Ko(e[r].geometry, t);
  }
}, Ua = {
  Sphere: function(n, t) {
    t.sphere();
  },
  Point: function(n, t) {
    n = n.coordinates, t.point(n[0], n[1], n[2]);
  },
  MultiPoint: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      n = e[r], t.point(n[0], n[1], n[2]);
  },
  LineString: function(n, t) {
    Bs(n.coordinates, t, 0);
  },
  MultiLineString: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      Bs(e[r], t, 0);
  },
  Polygon: function(n, t) {
    qa(n.coordinates, t);
  },
  MultiPolygon: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      qa(e[r], t);
  },
  GeometryCollection: function(n, t) {
    for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
      Ko(e[r], t);
  }
};
function Bs(n, t, e) {
  var r = -1, i = n.length - e, o;
  for (t.lineStart(); ++r < i; )
    o = n[r], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function qa(n, t) {
  var e = -1, r = n.length;
  for (t.polygonStart(); ++e < r; )
    Bs(n[e], t, 1);
  t.polygonEnd();
}
function pf(n, t) {
  n && Va.hasOwnProperty(n.type) ? Va[n.type](n, t) : Ko(n, t);
}
Hn();
Hn();
function ks(n) {
  return [Gi(n[1], n[0]), ui(n[2])];
}
function zi(n) {
  var t = n[0], e = n[1], r = Pt(e);
  return [r * Pt(t), r * Rt(t), Rt(e)];
}
function To(n, t) {
  return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
}
function Zo(n, t) {
  return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
}
function Ns(n, t) {
  n[0] += t[0], n[1] += t[1], n[2] += t[2];
}
function Do(n, t) {
  return [n[0] * t, n[1] * t, n[2] * t];
}
function Gs(n) {
  var t = Hi(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  n[0] /= t, n[1] /= t, n[2] /= t;
}
Hn();
function Yu(n, t) {
  function e(r, i) {
    return r = n(r, i), t(r[0], r[1]);
  }
  return n.invert && t.invert && (e.invert = function(r, i) {
    return r = t.invert(r, i), r && n.invert(r[0], r[1]);
  }), e;
}
function zs(n, t) {
  return [n > st ? n - en : n < -st ? n + en : n, t];
}
zs.invert = zs;
function df(n, t, e) {
  return (n %= en) ? t || e ? Yu(Ya(n), Ha(t, e)) : Ya(n) : t || e ? Ha(t, e) : zs;
}
function Xa(n) {
  return function(t, e) {
    return t += n, [t > st ? t - en : t < -st ? t + en : t, e];
  };
}
function Ya(n) {
  var t = Xa(n);
  return t.invert = Xa(-n), t;
}
function Ha(n, t) {
  var e = Pt(n), r = Rt(n), i = Pt(t), o = Rt(t);
  function s(a, u) {
    var l = Pt(u), c = Pt(a) * l, f = Rt(a) * l, h = Rt(u), g = h * e + c * r;
    return [
      Gi(f * i - g * o, c * e - h * r),
      ui(g * i + f * o)
    ];
  }
  return s.invert = function(a, u) {
    var l = Pt(u), c = Pt(a) * l, f = Rt(a) * l, h = Rt(u), g = h * i - f * o;
    return [
      Gi(f * i + h * o, c * e + g * r),
      ui(g * e - c * r)
    ];
  }, s;
}
function vf(n, t, e, r, i, o) {
  if (e) {
    var s = Pt(t), a = Rt(t), u = r * e;
    i == null ? (i = t + r * en, o = t - u / 2) : (i = Wa(s, i), o = Wa(s, o), (r > 0 ? i < o : i > o) && (i += r * en));
    for (var l, c = i; r > 0 ? c > o : c < o; c -= u)
      l = ks([s, -a * Pt(c), -a * Rt(c)]), n.point(l[0], l[1]);
  }
}
function Wa(n, t) {
  t = zi(t), t[0] -= n, Gs(t);
  var e = Xu(-t[1]);
  return ((-t[2] < 0 ? -e : e) + en - vt) % en;
}
function Hu() {
  var n = [], t;
  return {
    point: function(e, r) {
      t.push([e, r]);
    },
    lineStart: function() {
      n.push(t = []);
    },
    lineEnd: Ki,
    rejoin: function() {
      n.length > 1 && n.push(n.pop().concat(n.shift()));
    },
    result: function() {
      var e = n;
      return n = [], t = null, e;
    }
  };
}
function yf(n, t, e, r, i, o) {
  var s = n[0], a = n[1], u = t[0], l = t[1], c = 0, f = 1, h = u - s, g = l - a, p;
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
      if (p = r - a, !(!g && p > 0)) {
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
          return c > 0 && (n[0] = s + c * h, n[1] = a + c * g), f < 1 && (t[0] = s + f * h, t[1] = a + f * g), !0;
        }
      }
    }
  }
}
function Go(n, t) {
  return ne(n[0] - t[0]) < vt && ne(n[1] - t[1]) < vt;
}
function Mo(n, t, e, r) {
  this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function Wu(n, t, e, r, i) {
  var o = [], s = [], a, u;
  if (n.forEach(function(p) {
    if (!((y = p.length - 1) <= 0)) {
      var y, d = p[0], E = p[y], C;
      if (Go(d, E)) {
        for (i.lineStart(), a = 0; a < y; ++a)
          i.point((d = p[a])[0], d[1]);
        i.lineEnd();
        return;
      }
      o.push(C = new Mo(d, p, null, !0)), s.push(C.o = new Mo(d, null, C, !1)), o.push(C = new Mo(E, p, null, !1)), s.push(C.o = new Mo(E, null, C, !0));
    }
  }), !!o.length) {
    for (s.sort(t), ja(o), ja(s), a = 0, u = s.length; a < u; ++a)
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
            r(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (g)
            for (c = h.p.z, a = c.length - 1; a >= 0; --a)
              i.point((f = c[a])[0], f[1]);
          else
            r(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, c = h.z, g = !g;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function ja(n) {
  if (t = n.length) {
    for (var t, e = 0, r = n[0], i; ++e < t; )
      r.n = i = n[e], i.p = r, r = i;
    r.n = i = n[0], i.p = r;
  }
}
function ju(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function mf(n) {
  return n.length === 1 && (n = _f(n)), {
    left: function(t, e, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var o = r + i >>> 1;
        n(t[o], e) < 0 ? r = o + 1 : i = o;
      }
      return r;
    },
    right: function(t, e, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var o = r + i >>> 1;
        n(t[o], e) > 0 ? i = o : r = o + 1;
      }
      return r;
    }
  };
}
function _f(n) {
  return function(t, e) {
    return ju(n(t), e);
  };
}
mf(ju);
function Qu(n) {
  for (var t = n.length, e, r = -1, i = 0, o, s; ++r < t; )
    i += n[r].length;
  for (o = new Array(i); --t >= 0; )
    for (s = n[t], e = s.length; --e >= 0; )
      o[--i] = s[e];
  return o;
}
var Zi = 1e9, Ao = -Zi;
function Ef(n, t, e, r) {
  function i(l, c) {
    return n <= l && l <= e && t <= c && c <= r;
  }
  function o(l, c, f, h) {
    var g = 0, p = 0;
    if (l == null || (g = s(l, f)) !== (p = s(c, f)) || u(l, c) < 0 ^ f > 0)
      do
        h.point(g === 0 || g === 3 ? n : e, g > 1 ? r : t);
      while ((g = (g + f + 4) % 4) !== p);
    else
      h.point(c[0], c[1]);
  }
  function s(l, c) {
    return ne(l[0] - n) < vt ? c > 0 ? 0 : 3 : ne(l[0] - e) < vt ? c > 0 ? 2 : 1 : ne(l[1] - t) < vt ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var f = s(l, 1), h = s(c, 1);
    return f !== h ? f - h : f === 0 ? c[1] - l[1] : f === 1 ? l[0] - c[0] : f === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, f = Hu(), h, g, p, y, d, E, C, _, x, w, T, R = {
      point: D,
      lineStart: G,
      lineEnd: ot,
      polygonStart: A,
      polygonEnd: Y
    };
    function D(k, Q) {
      i(k, Q) && c.point(k, Q);
    }
    function L() {
      for (var k = 0, Q = 0, dt = g.length; Q < dt; ++Q)
        for (var Wt = g[Q], Jt = 1, on = Wt.length, ze = Wt[0], Br, Ve, pi = ze[0], Cn = ze[1]; Jt < on; ++Jt)
          Br = pi, Ve = Cn, ze = Wt[Jt], pi = ze[0], Cn = ze[1], Ve <= r ? Cn > r && (pi - Br) * (r - Ve) > (Cn - Ve) * (n - Br) && ++k : Cn <= r && (pi - Br) * (r - Ve) < (Cn - Ve) * (n - Br) && --k;
      return k;
    }
    function A() {
      c = f, h = [], g = [], T = !0;
    }
    function Y() {
      var k = L(), Q = T && k, dt = (h = Qu(h)).length;
      (Q || dt) && (l.polygonStart(), Q && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), dt && Wu(h, a, k, o, l), l.polygonEnd()), c = l, h = g = p = null;
    }
    function G() {
      R.point = N, g && g.push(p = []), w = !0, x = !1, C = _ = NaN;
    }
    function ot() {
      h && (N(y, d), E && x && f.rejoin(), h.push(f.result())), R.point = D, x && c.lineEnd();
    }
    function N(k, Q) {
      var dt = i(k, Q);
      if (g && p.push([k, Q]), w)
        y = k, d = Q, E = dt, w = !1, dt && (c.lineStart(), c.point(k, Q));
      else if (dt && x)
        c.point(k, Q);
      else {
        var Wt = [C = Math.max(Ao, Math.min(Zi, C)), _ = Math.max(Ao, Math.min(Zi, _))], Jt = [k = Math.max(Ao, Math.min(Zi, k)), Q = Math.max(Ao, Math.min(Zi, Q))];
        yf(Wt, Jt, n, t, e, r) ? (x || (c.lineStart(), c.point(Wt[0], Wt[1])), c.point(Jt[0], Jt[1]), dt || c.lineEnd(), T = !1) : dt && (c.lineStart(), c.point(k, Q), T = !1);
      }
      C = k, _ = Q, x = dt;
    }
    return R;
  };
}
var Ss = Hn();
function If(n, t) {
  var e = t[0], r = t[1], i = [Rt(e), -Pt(e), 0], o = 0, s = 0;
  Ss.reset();
  for (var a = 0, u = n.length; a < u; ++a)
    if (c = (l = n[a]).length)
      for (var l, c, f = l[c - 1], h = f[0], g = f[1] / 2 + za, p = Rt(g), y = Pt(g), d = 0; d < c; ++d, h = C, p = x, y = w, f = E) {
        var E = l[d], C = E[0], _ = E[1] / 2 + za, x = Rt(_), w = Pt(_), T = C - h, R = T >= 0 ? 1 : -1, D = R * T, L = D > st, A = p * x;
        if (Ss.add(Gi(A * R * Rt(D), y * w + A * Pt(D))), o += L ? T + R * en : T, L ^ h >= e ^ C >= e) {
          var Y = Zo(zi(f), zi(E));
          Gs(Y);
          var G = Zo(i, Y);
          Gs(G);
          var ot = (L ^ T >= 0 ? -1 : 1) * ui(G[2]);
          (r > ot || r === ot && (Y[0] || Y[1])) && (s += L ^ T >= 0 ? 1 : -1);
        }
      }
  return (o < -vt || o < vt && Ss < -vt) ^ s & 1;
}
Hn();
function Qa(n) {
  return n;
}
Hn();
Hn();
var Vi = 1 / 0, Jo = Vi, yo = -Vi, $o = yo, Ka = {
  point: Cf,
  lineStart: Ki,
  lineEnd: Ki,
  polygonStart: Ki,
  polygonEnd: Ki,
  result: function() {
    var n = [[Vi, Jo], [yo, $o]];
    return yo = $o = -(Jo = Vi = 1 / 0), n;
  }
};
function Cf(n, t) {
  n < Vi && (Vi = n), n > yo && (yo = n), t < Jo && (Jo = t), t > $o && ($o = t);
}
Hn();
function Ku(n, t, e, r) {
  return function(i, o) {
    var s = t(o), a = i.invert(r[0], r[1]), u = Hu(), l = t(u), c = !1, f, h, g, p = {
      point: y,
      lineStart: E,
      lineEnd: C,
      polygonStart: function() {
        p.point = _, p.lineStart = x, p.lineEnd = w, h = [], f = [];
      },
      polygonEnd: function() {
        p.point = y, p.lineStart = E, p.lineEnd = C, h = Qu(h);
        var T = If(f, a);
        h.length ? (c || (o.polygonStart(), c = !0), Wu(h, Sf, T, e, o)) : T && (c || (o.polygonStart(), c = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), c && (o.polygonEnd(), c = !1), h = f = null;
      },
      sphere: function() {
        o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd();
      }
    };
    function y(T, R) {
      var D = i(T, R);
      n(T = D[0], R = D[1]) && o.point(T, R);
    }
    function d(T, R) {
      var D = i(T, R);
      s.point(D[0], D[1]);
    }
    function E() {
      p.point = d, s.lineStart();
    }
    function C() {
      p.point = y, s.lineEnd();
    }
    function _(T, R) {
      g.push([T, R]);
      var D = i(T, R);
      l.point(D[0], D[1]);
    }
    function x() {
      l.lineStart(), g = [];
    }
    function w() {
      _(g[0][0], g[0][1]), l.lineEnd();
      var T = l.clean(), R = u.result(), D, L = R.length, A, Y, G;
      if (g.pop(), f.push(g), g = null, !!L) {
        if (T & 1) {
          if (Y = R[0], (A = Y.length - 1) > 0) {
            for (c || (o.polygonStart(), c = !0), o.lineStart(), D = 0; D < A; ++D)
              o.point((G = Y[D])[0], G[1]);
            o.lineEnd();
          }
          return;
        }
        L > 1 && T & 2 && R.push(R.pop().concat(R.shift())), h.push(R.filter(Nf));
      }
    }
    return p;
  };
}
function Nf(n) {
  return n.length > 1;
}
function Sf(n, t) {
  return ((n = n.x)[0] < 0 ? n[1] - Wr - vt : Wr - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Wr - vt : Wr - t[1]);
}
const Za = Ku(
  function() {
    return !0;
  },
  xf,
  Lf,
  [-st, -Wr]
);
function xf(n) {
  var t = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      n.lineStart(), i = 1;
    },
    point: function(o, s) {
      var a = o > 0 ? st : -st, u = ne(o - t);
      ne(u - st) < vt ? (n.point(t, e = (e + s) / 2 > 0 ? Wr : -Wr), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(a, e), n.point(o, e), i = 0) : r !== a && u >= st && (ne(t - r) < vt && (t -= r * vt), ne(o - a) < vt && (o -= a * vt), e = wf(t, e, o, s), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(a, e), i = 0), n.point(t = o, e = s), r = a;
    },
    lineEnd: function() {
      n.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function wf(n, t, e, r) {
  var i, o, s = Rt(n - e);
  return ne(s) > vt ? gf((Rt(t) * (o = Pt(r)) * Rt(e) - Rt(r) * (i = Pt(t)) * Rt(n)) / (i * o * s)) : (t + r) / 2;
}
function Lf(n, t, e, r) {
  var i;
  if (n == null)
    i = e * Wr, r.point(-st, i), r.point(0, i), r.point(st, i), r.point(st, 0), r.point(st, -i), r.point(0, -i), r.point(-st, -i), r.point(-st, 0), r.point(-st, i);
  else if (ne(n[0] - t[0]) > vt) {
    var o = n[0] < t[0] ? st : -st;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(t[0], t[1]);
}
function bf(n, t) {
  var e = Pt(n), r = e > 0, i = ne(e) > vt;
  function o(c, f, h, g) {
    vf(g, n, t, h, c, f);
  }
  function s(c, f) {
    return Pt(c) * Pt(f) > e;
  }
  function a(c) {
    var f, h, g, p, y;
    return {
      lineStart: function() {
        p = g = !1, y = 1;
      },
      point: function(d, E) {
        var C = [d, E], _, x = s(d, E), w = r ? x ? 0 : l(d, E) : x ? l(d + (d < 0 ? st : -st), E) : 0;
        if (!f && (p = g = x) && c.lineStart(), x !== g && (_ = u(f, C), (!_ || Go(f, _) || Go(C, _)) && (C[0] += vt, C[1] += vt, x = s(C[0], C[1]))), x !== g)
          y = 0, x ? (c.lineStart(), _ = u(C, f), c.point(_[0], _[1])) : (_ = u(f, C), c.point(_[0], _[1]), c.lineEnd()), f = _;
        else if (i && f && r ^ x) {
          var T;
          !(w & h) && (T = u(C, f, !0)) && (y = 0, r ? (c.lineStart(), c.point(T[0][0], T[0][1]), c.point(T[1][0], T[1][1]), c.lineEnd()) : (c.point(T[1][0], T[1][1]), c.lineEnd(), c.lineStart(), c.point(T[0][0], T[0][1])));
        }
        x && (!f || !Go(f, C)) && c.point(C[0], C[1]), f = C, g = x, h = w;
      },
      lineEnd: function() {
        g && c.lineEnd(), f = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return y | (p && g) << 1;
      }
    };
  }
  function u(c, f, h) {
    var g = zi(c), p = zi(f), y = [1, 0, 0], d = Zo(g, p), E = To(d, d), C = d[0], _ = E - C * C;
    if (!_)
      return !h && c;
    var x = e * E / _, w = -e * C / _, T = Zo(y, d), R = Do(y, x), D = Do(d, w);
    Ns(R, D);
    var L = T, A = To(R, L), Y = To(L, L), G = A * A - Y * (To(R, R) - 1);
    if (!(G < 0)) {
      var ot = Hi(G), N = Do(L, (-A - ot) / Y);
      if (Ns(N, R), N = ks(N), !h)
        return N;
      var k = c[0], Q = f[0], dt = c[1], Wt = f[1], Jt;
      Q < k && (Jt = k, k = Q, Q = Jt);
      var on = Q - k, ze = ne(on - st) < vt, Br = ze || on < vt;
      if (!ze && Wt < dt && (Jt = dt, dt = Wt, Wt = Jt), Br ? ze ? dt + Wt > 0 ^ N[1] < (ne(N[0] - k) < vt ? dt : Wt) : dt <= N[1] && N[1] <= Wt : on > st ^ (k <= N[0] && N[0] <= Q)) {
        var Ve = Do(L, (-A + ot) / Y);
        return Ns(Ve, R), [N, ks(Ve)];
      }
    }
  }
  function l(c, f) {
    var h = r ? n : st - n, g = 0;
    return c < -h ? g |= 1 : c > h && (g |= 2), f < -h ? g |= 4 : f > h && (g |= 8), g;
  }
  return Ku(s, a, o, r ? [0, -n] : [-st, n - st]);
}
function Zu(n) {
  return function(t) {
    var e = new Vs();
    for (var r in n)
      e[r] = n[r];
    return e.stream = t, e;
  };
}
function Vs() {
}
Vs.prototype = {
  constructor: Vs,
  point: function(n, t) {
    this.stream.point(n, t);
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
function Ju(n, t, e) {
  var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1], o = n.clipExtent && n.clipExtent();
  n.scale(150).translate([0, 0]), o != null && n.clipExtent(null), pf(e, n.stream(Ka));
  var s = Ka.result(), a = Math.min(r / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])), u = +t[0][0] + (r - a * (s[1][0] + s[0][0])) / 2, l = +t[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
  return o != null && n.clipExtent(o), n.scale(a * 150).translate([u, l]);
}
function Pf(n, t, e) {
  return Ju(n, [[0, 0], t], e);
}
var Ja = 16, Rf = Pt(30 * rr);
function $a(n, t) {
  return +t ? Tf(n, t) : Of(n);
}
function Of(n) {
  return Zu({
    point: function(t, e) {
      t = n(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function Tf(n, t) {
  function e(r, i, o, s, a, u, l, c, f, h, g, p, y, d) {
    var E = l - r, C = c - i, _ = E * E + C * C;
    if (_ > 4 * t && y--) {
      var x = s + h, w = a + g, T = u + p, R = Hi(x * x + w * w + T * T), D = ui(T /= R), L = ne(ne(T) - 1) < vt || ne(o - f) < vt ? (o + f) / 2 : Gi(w, x), A = n(L, D), Y = A[0], G = A[1], ot = Y - r, N = G - i, k = C * ot - E * N;
      (k * k / _ > t || ne((E * ot + C * N) / _ - 0.5) > 0.3 || s * h + a * g + u * p < Rf) && (e(r, i, o, s, a, u, Y, G, L, x /= R, w /= R, T, y, d), d.point(Y, G), e(Y, G, L, x, w, T, l, c, f, h, g, p, y, d));
    }
  }
  return function(r) {
    var i, o, s, a, u, l, c, f, h, g, p, y, d = {
      point: E,
      lineStart: C,
      lineEnd: x,
      polygonStart: function() {
        r.polygonStart(), d.lineStart = w;
      },
      polygonEnd: function() {
        r.polygonEnd(), d.lineStart = C;
      }
    };
    function E(D, L) {
      D = n(D, L), r.point(D[0], D[1]);
    }
    function C() {
      f = NaN, d.point = _, r.lineStart();
    }
    function _(D, L) {
      var A = zi([D, L]), Y = n(D, L);
      e(f, h, c, g, p, y, f = Y[0], h = Y[1], c = D, g = A[0], p = A[1], y = A[2], Ja, r), r.point(f, h);
    }
    function x() {
      d.point = E, r.lineEnd();
    }
    function w() {
      C(), d.point = T, d.lineEnd = R;
    }
    function T(D, L) {
      _(i = D, L), o = f, s = h, a = g, u = p, l = y, d.point = _;
    }
    function R() {
      e(f, h, c, g, p, y, o, s, i, a, u, l, Ja, r), d.lineEnd = x, x();
    }
    return d;
  };
}
var Df = Zu({
  point: function(n, t) {
    this.stream.point(n * rr, t * rr);
  }
});
function Mf(n) {
  return Af(function() {
    return n;
  })();
}
function Af(n) {
  var t, e = 150, r = 480, i = 250, o, s, a = 0, u = 0, l = 0, c = 0, f = 0, h, g, p = null, y = Za, d = null, E, C, _, x = Qa, w = 0.5, T = $a(Y, w), R, D;
  function L(N) {
    return N = g(N[0] * rr, N[1] * rr), [N[0] * e + o, s - N[1] * e];
  }
  function A(N) {
    return N = g.invert((N[0] - o) / e, (s - N[1]) / e), N && [N[0] * xn, N[1] * xn];
  }
  function Y(N, k) {
    return N = t(N, k), [N[0] * e + o, s - N[1] * e];
  }
  L.stream = function(N) {
    return R && D === N ? R : R = Df(y(h, T(x(D = N))));
  }, L.clipAngle = function(N) {
    return arguments.length ? (y = +N ? bf(p = N * rr, 6 * rr) : (p = null, Za), ot()) : p * xn;
  }, L.clipExtent = function(N) {
    return arguments.length ? (x = N == null ? (d = E = C = _ = null, Qa) : Ef(d = +N[0][0], E = +N[0][1], C = +N[1][0], _ = +N[1][1]), ot()) : d == null ? null : [[d, E], [C, _]];
  }, L.scale = function(N) {
    return arguments.length ? (e = +N, G()) : e;
  }, L.translate = function(N) {
    return arguments.length ? (r = +N[0], i = +N[1], G()) : [r, i];
  }, L.center = function(N) {
    return arguments.length ? (a = N[0] % 360 * rr, u = N[1] % 360 * rr, G()) : [a * xn, u * xn];
  }, L.rotate = function(N) {
    return arguments.length ? (l = N[0] % 360 * rr, c = N[1] % 360 * rr, f = N.length > 2 ? N[2] % 360 * rr : 0, G()) : [l * xn, c * xn, f * xn];
  }, L.precision = function(N) {
    return arguments.length ? (T = $a(Y, w = N * N), ot()) : Hi(w);
  }, L.fitExtent = function(N, k) {
    return Ju(L, N, k);
  }, L.fitSize = function(N, k) {
    return Pf(L, N, k);
  };
  function G() {
    g = Yu(h = df(l, c, f), t);
    var N = t(a, u);
    return o = r - N[0] * e, s = i + N[1] * e, ot();
  }
  function ot() {
    return R = D = null, L;
  }
  return function() {
    return t = n.apply(this, arguments), L.invert = t.invert && A, G();
  };
}
function $u(n) {
  return function(t, e) {
    var r = Pt(t), i = Pt(e), o = n(r * i);
    return [
      o * i * Rt(t),
      o * Rt(e)
    ];
  };
}
function tl(n) {
  return function(t, e) {
    var r = Hi(t * t + e * e), i = n(r), o = Rt(i), s = Pt(i);
    return [
      Gi(t * o, r * s),
      ui(r && e * o / r)
    ];
  };
}
var Ff = $u(function(n) {
  return Hi(2 / (1 + n));
});
Ff.invert = tl(function(n) {
  return 2 * ui(n / 2);
});
var el = $u(function(n) {
  return (n = Xu(n)) && n / Rt(n);
});
el.invert = tl(function(n) {
  return n;
});
function Bf() {
  return Mf(el).scale(79.4188).clipAngle(180 - 1e-3);
}
function tu(n, t) {
  return [n, t];
}
tu.invert = tu;
function kf(n, t, e) {
  e = e || {};
  var r = e.units || "kilometers", i = e.steps || 8;
  if (!n)
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
  switch (n.type) {
    case "GeometryCollection":
      return vu(n, function(s) {
        var a = zo(s, t, r, i);
        a && o.push(a);
      }), Ms(o);
    case "FeatureCollection":
      return Ma(n, function(s) {
        var a = zo(s, t, r, i);
        a && Ma(a, function(u) {
          u && o.push(u);
        });
      }), Ms(o);
  }
  return zo(n, t, r, i);
}
function zo(n, t, e, r) {
  var i = n.properties || {}, o = n.type === "Feature" ? n.geometry : n;
  if (o.type === "GeometryCollection") {
    var s = [];
    return vu(n, function(y) {
      var d = zo(y, t, e, r);
      d && s.push(d);
    }), Ms(s);
  }
  var a = Gf(o), u = {
    type: o.type,
    coordinates: nl(o.coordinates, a)
  }, l = new Ks(), c = l.read(u), f = Yc(Hc(t, e), "meters"), h = Vt.bufferOp(c, f, r), g = new wu();
  if (h = g.write(h), !rl(h.coordinates)) {
    var p = {
      type: h.type,
      coordinates: il(h.coordinates, a)
    };
    return ts(p, i);
  }
}
function rl(n) {
  return Array.isArray(n[0]) ? rl(n[0]) : isNaN(n[0]);
}
function nl(n, t) {
  return typeof n[0] != "object" ? t(n) : n.map(function(e) {
    return nl(e, t);
  });
}
function il(n, t) {
  return typeof n[0] != "object" ? t.invert(n) : n.map(function(e) {
    return il(e, t);
  });
}
function Gf(n) {
  var t = jc(n).geometry.coordinates, e = [-t[0], -t[1]];
  return Bf().rotate(e).scale(Ie);
}
function zf(n, t) {
  var e = qo(n), r = qo(t), i = n.properties || {}, o = fu.difference(
    e.coordinates,
    r.coordinates
  );
  return o.length === 0 ? null : o.length === 1 ? gu(o[0], i) : pu(o, i);
}
function eu(n) {
  let t;
  for (const e of n)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function ru(n, t) {
  const e = zf(
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
    n
  );
  if (!e)
    return;
  e.properties = { isMask: "y" };
  const r = kf(n, 0);
  if (r.geometry.type === "Polygon")
    for (const i of r.geometry.coordinates)
      eu(i);
  else
    for (const i of r.geometry.coordinates)
      for (const o of i)
        eu(o);
  t({
    type: "FeatureCollection",
    features: [r, e]
  });
}
function Vf(n, t = !0, e = !0, r = {}, i = {}, o = (s) => {
  var l, c, f;
  const a = (l = s == null ? void 0 : s.geometry) == null ? void 0 : l.type, u = (c = s == null ? void 0 : s.properties) != null && c.isMask ? 0 : a === "LineString" || a === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (f = s == null ? void 0 : s.properties) != null && f.isMask ? 0.1 : 0,
    weight: u,
    dashArray: [u, u],
    lineCap: "butt"
  };
}) {
  let s, a = [], u, l, c = sn.geoJSON(void 0, {
    style: o,
    interactive: !1
  }).addTo(n);
  const f = (g) => {
    s == null || s({
      type: "mapClick",
      coordinates: [g.latlng.lng, g.latlng.lat]
    });
  };
  function h(g, p = !1) {
    const y = document.createElement("div");
    return new uc({ props: { displayIn: "leaflet" }, target: y }), new sn.Marker(g, {
      interactive: p,
      icon: new sn.DivIcon({
        html: y,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(g) {
      g ? (s = g, n.on("click", f)) : (s = void 0, n.off("click", f));
    },
    flyTo(g, p) {
      n.flyTo([g[1], g[0]], p, { duration: 2, ...r });
    },
    fitBounds(g, p, y) {
      n.flyToBounds(
        [
          [g[1], g[0]],
          [g[3], g[2]]
        ],
        { padding: [p, p], duration: 2, maxZoom: y, ...i }
      );
    },
    indicateReverse(g) {
      n.getContainer().style.cursor = g ? "crosshair" : "";
    },
    setReverseMarker(g) {
      var y;
      if (!t)
        return;
      const p = g && [g[1], g[0]];
      l ? p ? l.setLatLng(p) : (l.remove(), l = void 0) : p && (l = (typeof t == "object" ? new sn.Marker(p, t) : h(p)).addTo(n), (y = l.getElement()) == null || y.classList.add("marker-reverse"));
    },
    setMarkers(g, p) {
      if (!t)
        return;
      function y(d) {
        c.clearLayers(), d && c.addData(d);
      }
      for (const d of a)
        d.remove();
      if (a.length = 0, y(), p) {
        let d = !1;
        if (p.geometry.type === "GeometryCollection") {
          const C = p.geometry.geometries.filter(
            (_) => _.type === "Polygon" || _.type === "MultiPolygon"
          );
          if (C.length > 0) {
            let _ = C.pop();
            for (const x of C)
              _ = Wc(_, x);
            ru({ ...p, geometry: _ }, y), d = !0;
          } else {
            const _ = p.geometry.geometries.filter(
              (x) => x.type === "LineString" || x.type === "MultiLineString"
            );
            _.length > 0 && (y({
              ...p,
              geometry: { type: "GeometryCollection", geometries: _ }
            }), d = !0);
          }
        }
        if (!d) {
          if (p.geometry.type === "Polygon" || p.geometry.type === "MultiPolygon")
            ru(p, y);
          else if (p.geometry.type === "LineString" || p.geometry.type === "MultiLineString") {
            y(p);
            return;
          }
        }
        const E = [p.center[1], p.center[0]];
        a.push(
          (typeof t == "object" ? new sn.Marker(E, t) : h(E)).addTo(n)
        );
      }
      if (e)
        for (const d of g ?? []) {
          if (d === p)
            continue;
          const E = [
            d.center[1],
            d.center[0]
          ], C = typeof e == "object" ? new sn.Marker(E, e) : h(E, !0);
          C.addTo(n).bindTooltip(d.place_name.replace(/,.*/, ""), {
            direction: "top"
          });
          const _ = C.getElement();
          _ && (_.addEventListener("click", (x) => {
            x.stopPropagation(), s == null || s({ type: "markerClick", id: d.id });
          }), _.addEventListener("mouseenter", () => {
            s == null || s({ type: "markerMouseEnter", id: d.id });
          }), _.addEventListener("mouseleave", () => {
            s == null || s({ type: "markerMouseLeave", id: d.id });
          }), _.classList.toggle("marker-fuzzy", !!d.matching_text)), a.push(C);
        }
    },
    setSelectedMarker(g) {
      var p, y;
      u && ((p = u.getElement()) == null || p.classList.toggle("marker-selected", !1)), u = g > -1 ? a[g] : void 0, (y = u == null ? void 0 : u.getElement()) == null || y.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const g = n.getCenter();
      return [n.getZoom(), g.lng, g.lat];
    }
  };
}
var nr, Qn;
class Uf extends sn.Control {
  constructor(e) {
    super();
    _s(this, nr, void 0);
    _s(this, Qn, void 0);
    Po(this, Qn, e);
  }
  onAdd(e) {
    const r = document.createElement("div");
    r.className = "leaflet-ctrl-geocoder", sn.DomEvent.disableClickPropagation(r), sn.DomEvent.disableScrollPropagation(r);
    const {
      marker: i,
      showResultMarkers: o,
      flyTo: s,
      fullGeometryStyle: a,
      ...u
    } = Cr(this, Qn), l = typeof s == "boolean" ? {} : s, c = Vf(
      e,
      i,
      o,
      l,
      l,
      a
    );
    Po(this, nr, new Ic({
      target: r,
      props: {
        mapController: c,
        flyTo: s === void 0 ? !0 : !!s,
        ...u
      }
    }));
    for (const f of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      Cr(this, nr).$on(
        f,
        (h) => e.fire(f.toLowerCase(), h.detail)
      );
    return r;
  }
  setOptions(e) {
    var u;
    Po(this, Qn, e);
    const {
      marker: r,
      showResultMarkers: i,
      flyTo: o,
      fullGeometryStyle: s,
      ...a
    } = Cr(this, Qn);
    (u = Cr(this, nr)) == null || u.$set(a);
  }
  setQuery(e, r = !0) {
    var i;
    (i = Cr(this, nr)) == null || i.setQuery(e, r);
  }
  clearMap() {
    var e;
    (e = Cr(this, nr)) == null || e.clearMap();
  }
  clearList() {
    var e;
    (e = Cr(this, nr)) == null || e.clearList();
  }
  focus() {
    var e;
    (e = Cr(this, nr)) == null || e.focus();
  }
  blur() {
    var e;
    (e = Cr(this, nr)) == null || e.blur();
  }
  onRemove() {
    var e;
    (e = Cr(this, nr)) == null || e.$destroy();
  }
}
nr = new WeakMap(), Qn = new WeakMap();
function qf(...n) {
  return new Uf(...n);
}
window.L && typeof window.L == "object" && typeof window.L.control == "function" && (window.L.control.maptilerGeocoding = qf);
export {
  Uf as GeocodingControl,
  Vf as createLeafletMapController
};
//# sourceMappingURL=leaflet.js.map
