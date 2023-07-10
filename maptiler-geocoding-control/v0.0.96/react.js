var Ft = Object.defineProperty;
var Gt = (n, e, t) => e in n ? Ft(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ze = (n, e, t) => (Gt(n, typeof e != "symbol" ? e + "" : e, t), t);
import { forwardRef as Zt, useRef as $e, useEffect as qe, useImperativeHandle as qt, createElement as Vt } from "react";
function S() {
}
function Dt(n, e) {
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
function et() {
  return /* @__PURE__ */ Object.create(null);
}
function te(n) {
  n.forEach(mt);
}
function _t(n) {
  return typeof n == "function";
}
function he(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let Ie;
function D(n, e) {
  return Ie || (Ie = document.createElement("a")), Ie.href = e, n === Ie.href;
}
function Kt(n) {
  return Object.keys(n).length === 0;
}
function Ht(n, e, t, r) {
  if (n) {
    const l = gt(n, e, t, r);
    return n[0](l);
  }
}
function gt(n, e, t, r) {
  return n[1] && r ? Dt(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function Qt(n, e, t, r) {
  if (n[2] && r) {
    const l = n[2](r(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const u = [], s = Math.max(e.dirty.length, l.length);
      for (let f = 0; f < s; f += 1)
        u[f] = e.dirty[f] | l[f];
      return u;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function Jt(n, e, t, r, l, u) {
  if (l) {
    const s = gt(e, t, r, u);
    n.p(s, l);
  }
}
function Xt(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function tt(n) {
  return n ?? "";
}
function k(n, e) {
  n.appendChild(e);
}
function U(n, e, t) {
  n.insertBefore(e, t || null);
}
function P(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function E(n) {
  return document.createElement(n);
}
function ie(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function se(n) {
  return document.createTextNode(n);
}
function H() {
  return se(" ");
}
function Yt() {
  return se("");
}
function V(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function xt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function c(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function $t(n) {
  return Array.from(n.childNodes);
}
function Me(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function nt(n, e) {
  n.value = e ?? "";
}
function le(n, e, t) {
  n.classList.toggle(e, !!t);
}
function en(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
let Be;
function Te(n) {
  Be = n;
}
function yt() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function tn(n) {
  yt().$$.on_destroy.push(n);
}
function nn() {
  const n = yt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const u = en(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return l.slice().forEach((s) => {
        s.call(n, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function rt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const ve = [], De = [];
let ke = [];
const lt = [], rn = /* @__PURE__ */ Promise.resolve();
let Ke = !1;
function ln() {
  Ke || (Ke = !0, rn.then(bt));
}
function He(n) {
  ke.push(n);
}
const Ve = /* @__PURE__ */ new Set();
let we = 0;
function bt() {
  if (we !== 0)
    return;
  const n = Be;
  do {
    try {
      for (; we < ve.length; ) {
        const e = ve[we];
        we++, Te(e), sn(e.$$);
      }
    } catch (e) {
      throw ve.length = 0, we = 0, e;
    }
    for (Te(null), ve.length = 0, we = 0; De.length; )
      De.pop()();
    for (let e = 0; e < ke.length; e += 1) {
      const t = ke[e];
      Ve.has(t) || (Ve.add(t), t());
    }
    ke.length = 0;
  } while (ve.length);
  for (; lt.length; )
    lt.pop()();
  Ke = !1, Ve.clear(), Te(n);
}
function sn(n) {
  if (n.fragment !== null) {
    n.update(), te(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(He);
  }
}
function cn(n) {
  const e = [], t = [];
  ke.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), ke = e;
}
const Se = /* @__PURE__ */ new Set();
let de;
function Pe() {
  de = {
    r: 0,
    c: [],
    p: de
    // parent group
  };
}
function ze() {
  de.r || te(de.c), de = de.p;
}
function j(n, e) {
  n && n.i && (Se.delete(n), n.i(e));
}
function G(n, e, t, r) {
  if (n && n.o) {
    if (Se.has(n))
      return;
    Se.add(n), de.c.push(() => {
      Se.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function it(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function on(n, e) {
  G(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function fn(n, e, t, r, l, u, s, f, d, o, m, v) {
  let g = n.length, B = u.length, I = g;
  const T = {};
  for (; I--; )
    T[n[I].key] = I;
  const M = [], A = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), O = [];
  for (I = B; I--; ) {
    const C = v(l, u, I), R = t(C);
    let _ = s.get(R);
    _ ? r && O.push(() => _.p(C, e)) : (_ = o(R, C), _.c()), A.set(R, M[I] = _), R in T && y.set(R, Math.abs(I - T[R]));
  }
  const F = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  function b(C) {
    j(C, 1), C.m(f, m), s.set(C.key, C), m = C.first, B--;
  }
  for (; g && B; ) {
    const C = M[B - 1], R = n[g - 1], _ = C.key, w = R.key;
    C === R ? (m = C.first, g--, B--) : A.has(w) ? !s.has(_) || F.has(_) ? b(C) : h.has(w) ? g-- : y.get(_) > y.get(w) ? (h.add(_), b(C)) : (F.add(w), g--) : (d(R, s), g--);
  }
  for (; g--; ) {
    const C = n[g];
    A.has(C.key) || d(C, s);
  }
  for (; B; )
    b(M[B - 1]);
  return te(O), M;
}
function ce(n) {
  n && n.c();
}
function $(n, e, t) {
  const { fragment: r, after_update: l } = n.$$;
  r && r.m(e, t), He(() => {
    const u = n.$$.on_mount.map(mt).filter(_t);
    n.$$.on_destroy ? n.$$.on_destroy.push(...u) : te(u), n.$$.on_mount = [];
  }), l.forEach(He);
}
function ee(n, e) {
  const t = n.$$;
  t.fragment !== null && (cn(t.after_update), te(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function un(n, e) {
  n.$$.dirty[0] === -1 && (ve.push(n), ln(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(n, e, t, r, l, u, s, f = [-1]) {
  const d = Be;
  Te(n);
  const o = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: S,
    not_equal: l,
    bound: et(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: et(),
    dirty: f,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  s && s(o.root);
  let m = !1;
  if (o.ctx = t ? t(n, e.props || {}, (v, g, ...B) => {
    const I = B.length ? B[0] : g;
    return o.ctx && l(o.ctx[v], o.ctx[v] = I) && (!o.skip_bound && o.bound[v] && o.bound[v](I), m && un(n, v)), g;
  }) : [], o.update(), m = !0, te(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = $t(e.target);
      o.fragment && o.fragment.l(v), v.forEach(P);
    } else
      o.fragment && o.fragment.c();
    e.intro && j(n.$$.fragment), $(n, e.target, e.anchor), bt();
  }
  Te(d);
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
    Ze(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ze(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ee(this, 1), this.$destroy = S;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!_t(t))
      return S;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const l = r.indexOf(t);
      l !== -1 && r.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Kt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const an = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(an);
function dn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), c(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), c(e, "viewBox", "0 0 14 14"), c(e, "width", "13"), c(e, "height", "13"), c(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      U(r, e, l), k(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && P(e);
    }
  };
}
class wt extends _e {
  constructor(e) {
    super(), me(this, e, null, dn, he, {});
  }
}
function hn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), c(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), c(e, "viewBox", "0 0 30 30"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "svelte-d2loi5");
    },
    m(r, l) {
      U(r, e, l), k(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && P(e);
    }
  };
}
class vt extends _e {
  constructor(e) {
    super(), me(this, e, null, hn, he, {});
  }
}
function mn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && c(e, "src", t), l & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function _n(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && c(e, "src", t), l & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function gn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && c(e, "src", t), l & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function yn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && c(e, "src", t), l & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function bn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && c(e, "src", t), l & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function wn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), D(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || c(e, "src", t), c(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !D(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && c(e, "src", t), l & /*placeType*/
      64 && c(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function vn(n) {
  let e, t, r, l;
  return {
    c() {
      e = E("img"), D(e.src, t = /*imageUrl*/
      n[5]) || c(e, "src", t), c(
        e,
        "alt",
        /*category*/
        n[4]
      ), c(e, "class", "svelte-ltkwvy");
    },
    m(u, s) {
      U(u, e, s), r || (l = V(
        e,
        "error",
        /*error_handler*/
        n[12]
      ), r = !0);
    },
    p(u, s) {
      s & /*imageUrl*/
      32 && !D(e.src, t = /*imageUrl*/
      u[5]) && c(e, "src", t), s & /*category*/
      16 && c(
        e,
        "alt",
        /*category*/
        u[4]
      );
    },
    d(u) {
      u && P(e), r = !1, l();
    }
  };
}
function st(n) {
  let e, t;
  return {
    c() {
      e = E("span"), t = se(
        /*placeType*/
        n[6]
      ), c(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l), k(e, t);
    },
    p(r, l) {
      l & /*placeType*/
      64 && Me(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && P(e);
    }
  };
}
function kn(n) {
  var C, R;
  let e, t, r, l, u, s, f, d, o = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), m, v, g = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((C = n[0].properties) == null ? void 0 : C.kind) !== "road" && /*feature*/
    ((R = n[0].properties) == null ? void 0 : R.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5])
  ), B, I, T = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), M, A, y;
  function O(_, w) {
    var Q, a;
    return w & /*feature*/
    1 && (t = null), w & /*feature*/
    1 && (r = null), w & /*feature*/
    1 && (l = null), /*imageUrl*/
    _[5] ? vn : (
      /*feature*/
      _[0].address ? wn : (
        /*feature*/
        ((Q = _[0].properties) == null ? void 0 : Q.kind) === "road" || /*feature*/
        ((a = _[0].properties) == null ? void 0 : a.kind) === "road_relation" ? bn : (t == null && (t = !!/*feature*/
        _[0].id.startsWith("address.")), t ? yn : (r == null && (r = !!/*feature*/
        _[0].id.startsWith("postal_code.")), r ? gn : (l == null && (l = !!/*feature*/
        _[0].id.startsWith("poi.")), l ? _n : mn)))
      )
    );
  }
  let F = O(n, -1), h = F(n), b = g && st(n);
  return {
    c() {
      e = E("li"), h.c(), u = H(), s = E("span"), f = E("span"), d = E("span"), m = se(o), v = H(), b && b.c(), B = H(), I = E("span"), M = se(T), c(d, "class", "primary svelte-ltkwvy"), c(f, "class", "svelte-ltkwvy"), c(I, "class", "line2 svelte-ltkwvy"), c(s, "class", "texts svelte-ltkwvy"), c(e, "tabindex", "0"), c(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), c(e, "class", "svelte-ltkwvy"), le(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(_, w) {
      U(_, e, w), h.m(e, null), k(e, u), k(e, s), k(s, f), k(f, d), k(d, m), k(f, v), b && b.m(f, null), k(s, B), k(s, I), k(I, M), A || (y = [
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
    p(_, [w]) {
      var Q, a;
      F === (F = O(_, w)) && h ? h.p(_, w) : (h.d(1), h = F(_), h && (h.c(), h.m(e, u))), w & /*feature*/
      1 && o !== (o = /*feature*/
      _[0].place_name.replace(/,.*/, "") + "") && Me(m, o), w & /*showPlaceType, feature, imageUrl*/
      37 && (g = /*showPlaceType*/
      _[2] === "always" || /*showPlaceType*/
      _[2] && !/*feature*/
      _[0].address && /*feature*/
      ((Q = _[0].properties) == null ? void 0 : Q.kind) !== "road" && /*feature*/
      ((a = _[0].properties) == null ? void 0 : a.kind) !== "road_relation" && !/*feature*/
      _[0].id.startsWith("address.") && !/*feature*/
      _[0].id.startsWith("postal_code.") && (!/*feature*/
      _[0].id.startsWith("poi.") || !/*imageUrl*/
      _[5])), g ? b ? b.p(_, w) : (b = st(_), b.c(), b.m(f, null)) : b && (b.d(1), b = null), w & /*feature*/
      1 && T !== (T = /*feature*/
      _[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Me(M, T), w & /*selected*/
      2 && c(
        e,
        "data-selected",
        /*selected*/
        _[1]
      ), w & /*selected*/
      2 && le(
        e,
        "selected",
        /*selected*/
        _[1]
      );
    },
    i: S,
    o: S,
    d(_) {
      _ && P(e), h.d(), b && b.d(), A = !1, te(y);
    }
  };
}
function pn(n, e, t) {
  var A;
  let r, l, { feature: u } = e, { selected: s = !1 } = e, { showPlaceType: f } = e, { missingIconsCache: d } = e, { iconsBaseUrl: o } = e;
  const m = (A = u.properties) == null ? void 0 : A.categories;
  let v, g;
  function B(y) {
    g && d.add(g), t(9, r--, r);
  }
  function I(y) {
    rt.call(this, n, y);
  }
  function T(y) {
    rt.call(this, n, y);
  }
  const M = (y) => B(y.currentTarget);
  return n.$$set = (y) => {
    "feature" in y && t(0, u = y.feature), "selected" in y && t(1, s = y.selected), "showPlaceType" in y && t(2, f = y.showPlaceType), "missingIconsCache" in y && t(8, d = y.missingIconsCache), "iconsBaseUrl" in y && t(3, o = y.iconsBaseUrl);
  }, n.$$.update = () => {
    var y, O, F, h;
    if (n.$$.dirty & /*index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    824)
      do
        t(9, r--, r), t(4, v = m == null ? void 0 : m[r]), t(5, g = v ? o + v.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!g || d.has(g)));
    n.$$.dirty & /*feature*/
    1 && t(6, l = u.id.startsWith("poi.") ? (O = (y = u.properties) == null ? void 0 : y.categories) == null ? void 0 : O.join(", ") : ((h = (F = u.properties) == null ? void 0 : F.place_type_name) == null ? void 0 : h[0]) ?? u.place_type[0]);
  }, t(9, r = (m == null ? void 0 : m.length) ?? 0), [
    u,
    s,
    f,
    o,
    v,
    g,
    l,
    B,
    d,
    r,
    I,
    T,
    M
  ];
}
class Tn extends _e {
  constructor(e) {
    super(), me(this, e, pn, kn, he, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function Mn(n) {
  let e;
  return {
    c() {
      e = E("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', c(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      U(t, e, r);
    },
    p: S,
    i: S,
    o: S,
    d(t) {
      t && P(e);
    }
  };
}
class Bn extends _e {
  constructor(e) {
    super(), me(this, e, null, Mn, he, {});
  }
}
function Cn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), c(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), c(e, "viewBox", "0 0 60.006 21.412"), c(e, "width", "14"), c(e, "height", "20"), c(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      U(r, e, l), k(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && P(e);
    }
  };
}
class Rn extends _e {
  constructor(e) {
    super(), me(this, e, null, Cn, he, {});
  }
}
function Ln(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), c(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), c(e, "width", "14"), c(e, "height", "14"), c(e, "viewBox", "0 0 15 15"), c(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      U(r, e, l), k(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && P(e);
    }
  };
}
class En extends _e {
  constructor(e) {
    super(), me(this, e, null, Ln, he, {});
  }
}
function ct(n, e, t) {
  const r = n.slice();
  return r[75] = e[t], r[77] = t, r;
}
function ot(n) {
  let e, t;
  return e = new Bn({}), {
    c() {
      ce(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    i(r) {
      t || (j(e.$$.fragment, r), t = !0);
    },
    o(r) {
      G(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function ft(n) {
  let e, t, r, l, u;
  return t = new Rn({}), {
    c() {
      e = E("button"), ce(t.$$.fragment), c(e, "type", "button"), c(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), c(e, "class", "svelte-1r7dvt7"), le(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(s, f) {
      U(s, e, f), $(t, e, null), r = !0, l || (u = V(
        e,
        "click",
        /*click_handler_2*/
        n[61]
      ), l = !0);
    },
    p(s, f) {
      (!r || f[0] & /*reverseButtonTitle*/
      512) && c(
        e,
        "title",
        /*reverseButtonTitle*/
        s[9]
      ), (!r || f[0] & /*reverseActive*/
      1) && le(
        e,
        "active",
        /*reverseActive*/
        s[0]
      );
    },
    i(s) {
      r || (j(t.$$.fragment, s), r = !0);
    },
    o(s) {
      G(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && P(e), ee(t), l = !1, u();
    }
  };
}
function In(n) {
  let e, t = [], r = /* @__PURE__ */ new Map(), l, u, s, f = it(
    /*listFeatures*/
    n[13]
  );
  const d = (o) => (
    /*feature*/
    o[75].id + /*feature*/
    (o[75].address ? "," + /*feature*/
    o[75].address : "")
  );
  for (let o = 0; o < f.length; o += 1) {
    let m = ct(n, f, o), v = d(m);
    r.set(v, t[o] = ut(v, m));
  }
  return {
    c() {
      e = E("ul");
      for (let o = 0; o < t.length; o += 1)
        t[o].c();
      c(e, "class", "svelte-1r7dvt7");
    },
    m(o, m) {
      U(o, e, m);
      for (let v = 0; v < t.length; v += 1)
        t[v] && t[v].m(e, null);
      l = !0, u || (s = [
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
      ], u = !0);
    },
    p(o, m) {
      m[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (f = it(
        /*listFeatures*/
        o[13]
      ), Pe(), t = fn(t, m, d, 1, o, f, r, e, on, ut, null, ct), ze());
    },
    i(o) {
      if (!l) {
        for (let m = 0; m < f.length; m += 1)
          j(t[m]);
        l = !0;
      }
    },
    o(o) {
      for (let m = 0; m < t.length; m += 1)
        G(t[m]);
      l = !1;
    },
    d(o) {
      o && P(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      u = !1, te(s);
    }
  };
}
function Sn(n) {
  let e, t, r, l, u, s;
  return t = new vt({}), {
    c() {
      e = E("div"), ce(t.$$.fragment), r = H(), l = E("div"), u = se(
        /*noResultsMessage*/
        n[7]
      ), c(l, "class", "svelte-1r7dvt7"), c(e, "class", "no-results svelte-1r7dvt7");
    },
    m(f, d) {
      U(f, e, d), $(t, e, null), k(e, r), k(e, l), k(l, u), s = !0;
    },
    p(f, d) {
      (!s || d[0] & /*noResultsMessage*/
      128) && Me(
        u,
        /*noResultsMessage*/
        f[7]
      );
    },
    i(f) {
      s || (j(t.$$.fragment, f), s = !0);
    },
    o(f) {
      G(t.$$.fragment, f), s = !1;
    },
    d(f) {
      f && P(e), ee(t);
    }
  };
}
function Pn(n) {
  let e = "", t;
  return {
    c() {
      t = se(e);
    },
    m(r, l) {
      U(r, t, l);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && P(t);
    }
  };
}
function zn(n) {
  let e, t, r, l, u, s, f, d, o, m, v;
  return t = new vt({}), d = new wt({}), {
    c() {
      e = E("div"), ce(t.$$.fragment), r = H(), l = E("div"), u = se(
        /*errorMessage*/
        n[6]
      ), s = H(), f = E("button"), ce(d.$$.fragment), c(l, "class", "svelte-1r7dvt7"), c(f, "class", "svelte-1r7dvt7"), c(e, "class", "error svelte-1r7dvt7");
    },
    m(g, B) {
      U(g, e, B), $(t, e, null), k(e, r), k(e, l), k(l, u), k(e, s), k(e, f), $(d, f, null), o = !0, m || (v = V(
        f,
        "click",
        /*click_handler_3*/
        n[62]
      ), m = !0);
    },
    p(g, B) {
      (!o || B[0] & /*errorMessage*/
      64) && Me(
        u,
        /*errorMessage*/
        g[6]
      );
    },
    i(g) {
      o || (j(t.$$.fragment, g), j(d.$$.fragment, g), o = !0);
    },
    o(g) {
      G(t.$$.fragment, g), G(d.$$.fragment, g), o = !1;
    },
    d(g) {
      g && P(e), ee(t), ee(d), m = !1, v();
    }
  };
}
function ut(n, e) {
  let t, r, l;
  function u() {
    return (
      /*mouseenter_handler*/
      e[63](
        /*i*/
        e[77]
      )
    );
  }
  function s() {
    return (
      /*focus_handler_1*/
      e[64](
        /*feature*/
        e[75]
      )
    );
  }
  return r = new Tn({
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
  }), r.$on("mouseenter", u), r.$on("focus", s), {
    key: n,
    first: null,
    c() {
      t = Yt(), ce(r.$$.fragment), this.first = t;
    },
    m(f, d) {
      U(f, t, d), $(r, f, d), l = !0;
    },
    p(f, d) {
      e = f;
      const o = {};
      d[0] & /*listFeatures*/
      8192 && (o.feature = /*feature*/
      e[75]), d[0] & /*showPlaceType*/
      1024 && (o.showPlaceType = /*showPlaceType*/
      e[10]), d[0] & /*selectedItemIndex, listFeatures*/
      24576 && (o.selected = /*selectedItemIndex*/
      e[14] === /*i*/
      e[77]), d[0] & /*iconsBaseUrl*/
      2048 && (o.iconsBaseUrl = /*iconsBaseUrl*/
      e[11]), r.$set(o);
    },
    i(f) {
      l || (j(r.$$.fragment, f), l = !0);
    },
    o(f) {
      G(r.$$.fragment, f), l = !1;
    },
    d(f) {
      f && P(t), ee(r, f);
    }
  };
}
function Un(n) {
  let e, t, r, l, u, s, f, d, o, m, v, g, B, I, T, M, A, y, O, F;
  l = new En({}), m = new wt({});
  let h = (
    /*abortController*/
    n[18] && ot()
  ), b = (
    /*enableReverse*/
    n[5] === !0 && ft(n)
  );
  const C = (
    /*#slots*/
    n[53].default
  ), R = Ht(
    C,
    n,
    /*$$scope*/
    n[52],
    null
  ), _ = [zn, Pn, Sn, In], w = [];
  function Q(a, z) {
    var x, oe;
    return (
      /*error*/
      a[17] ? 0 : (
        /*focusedDelayed*/
        a[15] ? (
          /*listFeatures*/
          ((x = a[13]) == null ? void 0 : x.length) === 0 ? 2 : (
            /*focusedDelayed*/
            a[15] && /*listFeatures*/
            ((oe = a[13]) != null && oe.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(T = Q(n)) && (M = w[T] = _[T](n)), {
    c() {
      e = E("form"), t = E("div"), r = E("button"), ce(l.$$.fragment), u = H(), s = E("input"), f = H(), d = E("div"), o = E("button"), ce(m.$$.fragment), v = H(), h && h.c(), g = H(), b && b.c(), B = H(), R && R.c(), I = H(), M && M.c(), c(r, "class", "search-button svelte-1r7dvt7"), c(r, "type", "button"), c(
        s,
        "placeholder",
        /*placeholder*/
        n[8]
      ), c(
        s,
        "aria-label",
        /*placeholder*/
        n[8]
      ), c(s, "class", "svelte-1r7dvt7"), c(o, "type", "button"), c(
        o,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), c(o, "class", "svelte-1r7dvt7"), c(d, "class", "clear-button-container svelte-1r7dvt7"), le(
        d,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), c(t, "class", "input-group svelte-1r7dvt7"), c(e, "tabindex", "0"), c(e, "class", A = tt(
        /*className*/
        n[2]
      ) + " svelte-1r7dvt7"), le(
        e,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(a, z) {
      U(a, e, z), k(e, t), k(t, r), $(l, r, null), k(t, u), k(t, s), n[55](s), nt(
        s,
        /*searchValue*/
        n[1]
      ), k(t, f), k(t, d), k(d, o), $(m, o, null), k(d, v), h && h.m(d, null), k(t, g), b && b.m(t, null), k(t, B), R && R.m(t, null), k(e, I), ~T && w[T].m(e, null), y = !0, O || (F = [
        V(
          r,
          "click",
          /*click_handler*/
          n[54]
        ),
        V(
          s,
          "input",
          /*input_1_input_handler*/
          n[56]
        ),
        V(
          s,
          "focus",
          /*focus_handler*/
          n[57]
        ),
        V(
          s,
          "blur",
          /*blur_handler*/
          n[58]
        ),
        V(
          s,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        V(
          s,
          "input",
          /*input_handler*/
          n[59]
        ),
        V(
          o,
          "click",
          /*click_handler_1*/
          n[60]
        ),
        V(e, "submit", xt(
          /*handleOnSubmit*/
          n[20]
        ))
      ], O = !0);
    },
    p(a, z) {
      (!y || z[0] & /*placeholder*/
      256) && c(
        s,
        "placeholder",
        /*placeholder*/
        a[8]
      ), (!y || z[0] & /*placeholder*/
      256) && c(
        s,
        "aria-label",
        /*placeholder*/
        a[8]
      ), z[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      a[1] && nt(
        s,
        /*searchValue*/
        a[1]
      ), (!y || z[0] & /*clearButtonTitle*/
      8) && c(
        o,
        "title",
        /*clearButtonTitle*/
        a[3]
      ), /*abortController*/
      a[18] ? h ? z[0] & /*abortController*/
      262144 && j(h, 1) : (h = ot(), h.c(), j(h, 1), h.m(d, null)) : h && (Pe(), G(h, 1, 1, () => {
        h = null;
      }), ze()), (!y || z[0] & /*searchValue*/
      2) && le(
        d,
        "displayable",
        /*searchValue*/
        a[1] !== ""
      ), /*enableReverse*/
      a[5] === !0 ? b ? (b.p(a, z), z[0] & /*enableReverse*/
      32 && j(b, 1)) : (b = ft(a), b.c(), j(b, 1), b.m(t, B)) : b && (Pe(), G(b, 1, 1, () => {
        b = null;
      }), ze()), R && R.p && (!y || z[1] & /*$$scope*/
      2097152) && Jt(
        R,
        C,
        a,
        /*$$scope*/
        a[52],
        y ? Qt(
          C,
          /*$$scope*/
          a[52],
          z,
          null
        ) : Xt(
          /*$$scope*/
          a[52]
        ),
        null
      );
      let x = T;
      T = Q(a), T === x ? ~T && w[T].p(a, z) : (M && (Pe(), G(w[x], 1, 1, () => {
        w[x] = null;
      }), ze()), ~T ? (M = w[T], M ? M.p(a, z) : (M = w[T] = _[T](a), M.c()), j(M, 1), M.m(e, null)) : M = null), (!y || z[0] & /*className*/
      4 && A !== (A = tt(
        /*className*/
        a[2]
      ) + " svelte-1r7dvt7")) && c(e, "class", A), (!y || z[0] & /*className, collapsed, searchValue*/
      22) && le(
        e,
        "can-collapse",
        /*collapsed*/
        a[4] && /*searchValue*/
        a[1] === ""
      );
    },
    i(a) {
      y || (j(l.$$.fragment, a), j(m.$$.fragment, a), j(h), j(b), j(R, a), j(M), y = !0);
    },
    o(a) {
      G(l.$$.fragment, a), G(m.$$.fragment, a), G(h), G(b), G(R, a), G(M), y = !1;
    },
    d(a) {
      a && P(e), ee(l), n[55](null), ee(m), h && h.d(), b && b.d(), R && R.d(a), ~T && w[T].d(), O = !1, te(F);
    }
  };
}
function An(n, e, t) {
  const r = e[1], l = e[0], u = r - l;
  return n === r && t ? n : ((n - l) % u + u) % u + l;
}
function at(n) {
  let e = [...n];
  return e[2] < e[0] && (e[2] += 360), e;
}
function Wn(n, e, t) {
  let r, { $$slots: l = {}, $$scope: u } = e, { class: s = void 0 } = e, { apiKey: f } = e, { bbox: d = void 0 } = e, { clearButtonTitle: o = "clear" } = e, { clearOnBlur: m = !1 } = e, { collapsed: v = !1 } = e, { country: g = void 0 } = e, { debounceSearch: B = 200 } = e, { enableReverse: I = !1 } = e, { errorMessage: T = "Something went wrong…" } = e, { filter: M = () => !0 } = e, { flyTo: A = !0 } = e, { fuzzyMatch: y = !0 } = e, { language: O = void 0 } = e, { limit: F = void 0 } = e, { mapController: h = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: C = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: R = "Search" } = e, { proximity: _ = void 0 } = e, { reverseActive: w = I === "always" } = e, { reverseButtonTitle: Q = "toggle reverse geocoding" } = e, { searchValue: a = "" } = e, { showFullGeometry: z = !0 } = e, { showPlaceType: x = "ifNeeded" } = e, { showResultsWhileTyping: oe = !0 } = e, { trackProximity: Ce = !0 } = e, { types: fe = void 0 } = e, { zoom: Re = 16 } = e, { maxZoom: pe = 18 } = e, { apiUrl: Ue = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ae = {} } = e, { iconsBaseUrl: Qe = "https://cdn.maptiler.com/maptiler-geocoding-control/v0.0.96/icons/" } = e;
  function kt() {
    J.focus();
  }
  function pt() {
    J.blur();
  }
  function Je(i, N = !0) {
    t(1, a = i), N ? (t(14, W = -1), Ye()) : (je(), setTimeout(() => {
      J.focus(), J.select();
    }));
  }
  let ge = !1, L, Z, p, Xe = "", J, W = -1, X, Le = [], ue, ye, Ee, We;
  const Tt = /* @__PURE__ */ new Set(), ne = nn();
  tn(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setMarkers(void 0, void 0));
  });
  function Ye(i) {
    if (ye && (clearTimeout(ye), ye = void 0), W > -1 && L)
      t(49, p = L[W]), t(1, a = p.place_name.replace(/,.*/, "")), t(17, X = void 0), t(48, Z = void 0), t(14, W = -1);
    else if (a) {
      const N = i || !xe();
      Ne(a, { exact: !0 }).then(() => {
        t(48, Z = L), t(49, p = void 0), N && Mt();
      }).catch((Y) => t(17, X = Y));
    }
  }
  function xe() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(a);
  }
  async function Ne(i, { byId: N = !1, exact: Y = !1 } = {}) {
    t(17, X = void 0);
    const be = xe(), K = new URLSearchParams();
    O != null && K.set("language", Array.isArray(O) ? O.join(",") : O), fe && K.set("types", fe.join(",")), be || (d && K.set("bbox", d.map((re) => re.toFixed(6)).join(",")), g && K.set("country", Array.isArray(g) ? g.join(",") : g)), N || (_ && K.set("proximity", _.map((re) => re.toFixed(6)).join(",")), (Y || !oe) && K.set("autocomplete", "false"), K.set("fuzzyMatch", String(y))), F !== void 0 && (!be || (fe == null ? void 0 : fe.length) === 1) && K.set("limit", String(F)), K.set("key", f);
    const ae = Ue + "/" + encodeURIComponent(i) + ".json?" + K.toString();
    if (ae === Xe) {
      N ? (t(13, L = void 0), t(49, p = Le[0])) : t(13, L = Le);
      return;
    }
    Xe = ae, ue == null || ue.abort();
    const q = new AbortController();
    t(18, ue = q);
    let Fe;
    try {
      Fe = await fetch(ae, { signal: q.signal, ...Ae }).finally(() => {
        q === ue && t(18, ue = void 0);
      });
    } catch (re) {
      if (re && typeof re == "object" && "name" in re && re.name === "AbortError")
        return;
      throw new Error();
    }
    if (!Fe.ok)
      throw new Error();
    const Ge = await Fe.json();
    ne("response", { url: ae, featureCollection: Ge }), N ? (t(13, L = void 0), t(49, p = Ge.features[0]), Le = [p]) : (t(13, L = Ge.features.filter(M)), Le = L, be && J.focus());
  }
  function Mt() {
    var Y, be, K, ae;
    if (!(Z != null && Z.length) || !A)
      return;
    const i = [180, 90, -180, -90], N = !Z.some((q) => !q.matching_text);
    for (const q of Z)
      (N || !q.matching_text) && (i[0] = Math.min(i[0], ((Y = q.bbox) == null ? void 0 : Y[0]) ?? q.center[0]), i[1] = Math.min(i[1], ((be = q.bbox) == null ? void 0 : be[1]) ?? q.center[1]), i[2] = Math.max(i[2], ((K = q.bbox) == null ? void 0 : K[2]) ?? q.center[0]), i[3] = Math.max(i[3], ((ae = q.bbox) == null ? void 0 : ae[3]) ?? q.center[1]));
    h && Z.length > 0 && (p && i[0] === i[2] && i[1] === i[3] ? h.flyTo(p.center, Re) : h.fitBounds(at(i), 50, pe));
  }
  function Bt(i) {
    t(0, w = I === "always"), Je(An(i[0], [-180, 180], !0).toFixed(6) + "," + i[1].toFixed(6));
  }
  function Ct(i) {
    if (!L)
      return;
    let N = i.key === "ArrowDown" ? 1 : i.key === "ArrowUp" ? -1 : 0;
    N ? (W === -1 && N === -1 && t(14, W = L.length), t(14, W += N), W >= L.length && t(14, W = -1), i.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(i.key) && t(14, W = -1);
  }
  function je(i = !0) {
    if (t(17, X = void 0), oe) {
      if (ye && clearTimeout(ye), a.length < b)
        return;
      const N = a;
      ye = window.setTimeout(
        () => {
          Ne(N).catch((Y) => t(17, X = Y));
        },
        i ? B : 0
      );
    } else
      t(13, L = void 0), t(17, X = void 0);
  }
  function Oe(i) {
    t(49, p = i), t(1, a = i.place_name), t(14, W = -1);
  }
  const Rt = () => J.focus();
  function Lt(i) {
    De[i ? "unshift" : "push"](() => {
      J = i, t(16, J);
    });
  }
  function Et() {
    a = this.value, t(1, a), t(12, ge), t(27, m);
  }
  const It = () => t(12, ge = !0), St = () => t(12, ge = !1), Pt = () => je(), zt = () => {
    t(1, a = ""), J.focus();
  }, Ut = () => t(0, w = !w), At = () => t(17, X = void 0), Wt = (i) => t(14, W = i), Nt = (i) => Oe(i), jt = () => t(14, W = -1), Ot = () => {
  };
  return n.$$set = (i) => {
    "class" in i && t(2, s = i.class), "apiKey" in i && t(25, f = i.apiKey), "bbox" in i && t(26, d = i.bbox), "clearButtonTitle" in i && t(3, o = i.clearButtonTitle), "clearOnBlur" in i && t(27, m = i.clearOnBlur), "collapsed" in i && t(4, v = i.collapsed), "country" in i && t(28, g = i.country), "debounceSearch" in i && t(29, B = i.debounceSearch), "enableReverse" in i && t(5, I = i.enableReverse), "errorMessage" in i && t(6, T = i.errorMessage), "filter" in i && t(30, M = i.filter), "flyTo" in i && t(31, A = i.flyTo), "fuzzyMatch" in i && t(32, y = i.fuzzyMatch), "language" in i && t(33, O = i.language), "limit" in i && t(34, F = i.limit), "mapController" in i && t(35, h = i.mapController), "minLength" in i && t(36, b = i.minLength), "noResultsMessage" in i && t(7, C = i.noResultsMessage), "placeholder" in i && t(8, R = i.placeholder), "proximity" in i && t(24, _ = i.proximity), "reverseActive" in i && t(0, w = i.reverseActive), "reverseButtonTitle" in i && t(9, Q = i.reverseButtonTitle), "searchValue" in i && t(1, a = i.searchValue), "showFullGeometry" in i && t(37, z = i.showFullGeometry), "showPlaceType" in i && t(10, x = i.showPlaceType), "showResultsWhileTyping" in i && t(38, oe = i.showResultsWhileTyping), "trackProximity" in i && t(39, Ce = i.trackProximity), "types" in i && t(40, fe = i.types), "zoom" in i && t(41, Re = i.zoom), "maxZoom" in i && t(42, pe = i.maxZoom), "apiUrl" in i && t(43, Ue = i.apiUrl), "fetchParameters" in i && t(44, Ae = i.fetchParameters), "iconsBaseUrl" in i && t(11, Qe = i.iconsBaseUrl), "$$scope" in i && t(52, u = i.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[1] & /*trackProximity*/
    256 && (Ce || t(24, _ = void 0)), n.$$.dirty[0] & /*focused, clearOnBlur*/
    134221824 && setTimeout(() => {
      t(15, Ee = ge), m && !ge && t(1, a = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    32 && a.length < b && (t(49, p = void 0), t(13, L = void 0), t(17, X = void 0), t(48, Z = L)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    262208 && z && p && !p.address && p.geometry.type === "Point" && Ne(p.id, { byId: !0 }).catch((i) => t(17, X = i)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    789521 && (h && p && p.id !== We && A && (!p.bbox || p.bbox[0] === p.bbox[2] && p.bbox[1] === p.bbox[3] ? h.flyTo(p.center, p.id.startsWith("poi.") || p.id.startsWith("address.") ? pe : Re) : h.fitBounds(at(p.bbox), 50, pe), t(13, L = void 0), t(48, Z = void 0), t(14, W = -1)), t(50, We = p == null ? void 0 : p.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    131072 && Z !== L && t(48, Z = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    393232 && h && h.setMarkers(Z, p), n.$$.dirty[0] & /*searchValue*/
    2 && t(14, W = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController, trackProximity*/
    272 && h && h.setEventHandler((i) => {
      switch (i.type) {
        case "mapClick":
          w && Bt(i.coordinates);
          break;
        case "proximityChange":
          t(24, _ = Ce ? i.proximity : void 0);
          break;
        case "markerClick":
          {
            const N = L == null ? void 0 : L.find((Y) => Y.id === i.id);
            N && Oe(N);
          }
          break;
        case "markerMouseEnter":
          t(14, W = Ee ? (L == null ? void 0 : L.findIndex((N) => N.id === i.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          t(14, W = -1);
          break;
      }
    }), n.$$.dirty[0] & /*selectedItemIndex*/
    16384 | n.$$.dirty[1] & /*mapController*/
    16 && (h == null || h.setSelectedMarker(W)), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && t(51, r = L == null ? void 0 : L[W]), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    16) {
      const i = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(a);
      h == null || h.setReverseMarker(i ? [Number(i[1]), Number(i[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    1048576 && ne("select", r), n.$$.dirty[1] & /*picked*/
    262144 && ne("pick", p), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && ne("optionsVisibilityChange", Ee && !!L), n.$$.dirty[0] & /*listFeatures*/
    8192 && ne("featuresListed", L), n.$$.dirty[1] & /*markedFeatures*/
    131072 && ne("featuresMarked", Z), n.$$.dirty[0] & /*reverseActive*/
    1 && ne("reverseToggle", w), n.$$.dirty[0] & /*searchValue*/
    2 && ne("queryChange", a), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    16 && h && h.indicateReverse(w);
  }, [
    w,
    a,
    s,
    o,
    v,
    I,
    T,
    C,
    R,
    Q,
    x,
    Qe,
    ge,
    L,
    W,
    Ee,
    J,
    X,
    ue,
    Tt,
    Ye,
    Ct,
    je,
    Oe,
    _,
    f,
    d,
    m,
    g,
    B,
    M,
    A,
    y,
    O,
    F,
    h,
    b,
    z,
    oe,
    Ce,
    fe,
    Re,
    pe,
    Ue,
    Ae,
    kt,
    pt,
    Je,
    Z,
    p,
    We,
    r,
    u,
    l,
    Rt,
    Lt,
    Et,
    It,
    St,
    Pt,
    zt,
    Ut,
    At,
    Wt,
    Nt,
    jt,
    Ot
  ];
}
class Nn extends _e {
  constructor(e) {
    super(), me(
      this,
      e,
      Wn,
      Un,
      he,
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
}
const dt = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], jn = [
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
  "trackProximity",
  "types",
  "zoom",
  "mapController"
];
function ht(n) {
  return "on" + n[0].toUpperCase() + n.slice(1);
}
const Gn = Zt(function(e, t) {
  const r = $e(), l = $e(), u = { ...e };
  for (const s of dt)
    delete u[ht(s)];
  qe(() => {
    if (!r.current)
      throw new Error();
    const s = new Nn({
      target: r.current,
      props: u
    });
    return l.current = s, () => s.$destroy();
  }, []);
  for (const s of jn)
    qe(() => {
      l.current && e[s] !== void 0 && l.current.$set({ [s]: e[s] });
    }, [e[s]]);
  for (const s of dt) {
    const f = e[ht(s)];
    qe(
      () => {
        var d;
        return f && ((d = l.current) == null ? void 0 : d.$on(s, (o) => {
          f(o.detail);
        }));
      },
      [f]
    );
  }
  return qt(t, () => ({
    setQuery: (s, f = !0) => {
      var d;
      return (d = l.current) == null ? void 0 : d.setQuery(s, f);
    },
    focus: () => {
      var s;
      return (s = l.current) == null ? void 0 : s.focus();
    },
    blur: () => {
      var s;
      return (s = l.current) == null ? void 0 : s.blur();
    }
  })), Vt("div", { ref: r });
});
export {
  Gn as GeocodingControl
};
//# sourceMappingURL=react.js.map
