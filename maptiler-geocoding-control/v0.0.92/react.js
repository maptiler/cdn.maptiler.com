import { forwardRef as jt, useRef as xe, useEffect as Ze, useImperativeHandle as Ft, createElement as Gt } from "react";
function S() {
}
function Ot(n, e) {
  for (const t in e)
    n[t] = e[t];
  return n;
}
function dt(n) {
  return n();
}
function $e() {
  return /* @__PURE__ */ Object.create(null);
}
function te(n) {
  n.forEach(dt);
}
function ht(n) {
  return typeof n == "function";
}
function he(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let Ie;
function K(n, e) {
  return Ie || (Ie = document.createElement("a")), Ie.href = e, n === Ie.href;
}
function Zt(n) {
  return Object.keys(n).length === 0;
}
function qt(n, e, t, r) {
  if (n) {
    const l = mt(n, e, t, r);
    return n[0](l);
  }
}
function mt(n, e, t, r) {
  return n[1] && r ? Ot(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function Dt(n, e, t, r) {
  if (n[2] && r) {
    const l = n[2](r(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const a = [], s = Math.max(e.dirty.length, l.length);
      for (let f = 0; f < s; f += 1)
        a[f] = e.dirty[f] | l[f];
      return a;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function Kt(n, e, t, r, l, a) {
  if (l) {
    const s = mt(e, t, r, a);
    n.p(s, l);
  }
}
function Vt(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function et(n) {
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
function ie(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function se(n) {
  return document.createTextNode(n);
}
function H() {
  return se(" ");
}
function Ht() {
  return se("");
}
function D(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function Qt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function o(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Jt(n) {
  return Array.from(n.childNodes);
}
function Me(n, e) {
  e = "" + e, n.data !== e && (n.data = e);
}
function tt(n, e) {
  n.value = e ?? "";
}
function le(n, e, t) {
  n.classList[t ? "add" : "remove"](e);
}
function Xt(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(n, t, r, e), l;
}
let Ce;
function Te(n) {
  Ce = n;
}
function _t() {
  if (!Ce)
    throw new Error("Function called outside component initialization");
  return Ce;
}
function Yt(n) {
  _t().$$.on_destroy.push(n);
}
function xt() {
  const n = _t();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const a = Xt(e, t, { cancelable: r });
      return l.slice().forEach((s) => {
        s.call(n, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
function nt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const ke = [], De = [];
let ve = [];
const rt = [], $t = /* @__PURE__ */ Promise.resolve();
let Ke = !1;
function en() {
  Ke || (Ke = !0, $t.then(gt));
}
function Ve(n) {
  ve.push(n);
}
const qe = /* @__PURE__ */ new Set();
let we = 0;
function gt() {
  if (we !== 0)
    return;
  const n = Ce;
  do {
    try {
      for (; we < ke.length; ) {
        const e = ke[we];
        we++, Te(e), tn(e.$$);
      }
    } catch (e) {
      throw ke.length = 0, we = 0, e;
    }
    for (Te(null), ke.length = 0, we = 0; De.length; )
      De.pop()();
    for (let e = 0; e < ve.length; e += 1) {
      const t = ve[e];
      qe.has(t) || (qe.add(t), t());
    }
    ve.length = 0;
  } while (ke.length);
  for (; rt.length; )
    rt.pop()();
  Ke = !1, qe.clear(), Te(n);
}
function tn(n) {
  if (n.fragment !== null) {
    n.update(), te(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ve);
  }
}
function nn(n) {
  const e = [], t = [];
  ve.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), ve = e;
}
const Se = /* @__PURE__ */ new Set();
let de;
function ze() {
  de = {
    r: 0,
    c: [],
    p: de
    // parent group
  };
}
function Pe() {
  de.r || te(de.c), de = de.p;
}
function j(n, e) {
  n && n.i && (Se.delete(n), n.i(e));
}
function O(n, e, t, r) {
  if (n && n.o) {
    if (Se.has(n))
      return;
    Se.add(n), de.c.push(() => {
      Se.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function rn(n, e) {
  O(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function ln(n, e, t, r, l, a, s, f, d, c, m, k) {
  let g = n.length, C = a.length, I = g;
  const T = {};
  for (; I--; )
    T[n[I].key] = I;
  const M = [], A = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), F = [];
  for (I = C; I--; ) {
    const B = k(l, a, I), R = t(B);
    let _ = s.get(R);
    _ ? r && F.push(() => _.p(B, e)) : (_ = c(R, B), _.c()), A.set(R, M[I] = _), R in T && y.set(R, Math.abs(I - T[R]));
  }
  const G = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  function b(B) {
    j(B, 1), B.m(f, m), s.set(B.key, B), m = B.first, C--;
  }
  for (; g && C; ) {
    const B = M[C - 1], R = n[g - 1], _ = B.key, w = R.key;
    B === R ? (m = B.first, g--, C--) : A.has(w) ? !s.has(_) || G.has(_) ? b(B) : h.has(w) ? g-- : y.get(_) > y.get(w) ? (h.add(_), b(B)) : (G.add(w), g--) : (d(R, s), g--);
  }
  for (; g--; ) {
    const B = n[g];
    A.has(B.key) || d(B, s);
  }
  for (; C; )
    b(M[C - 1]);
  return te(F), M;
}
function oe(n) {
  n && n.c();
}
function $(n, e, t, r) {
  const { fragment: l, after_update: a } = n.$$;
  l && l.m(e, t), r || Ve(() => {
    const s = n.$$.on_mount.map(dt).filter(ht);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : te(s), n.$$.on_mount = [];
  }), a.forEach(Ve);
}
function ee(n, e) {
  const t = n.$$;
  t.fragment !== null && (nn(t.after_update), te(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function sn(n, e) {
  n.$$.dirty[0] === -1 && (ke.push(n), en(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(n, e, t, r, l, a, s, f = [-1]) {
  const d = Ce;
  Te(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: S,
    not_equal: l,
    bound: $e(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: $e(),
    dirty: f,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  s && s(c.root);
  let m = !1;
  if (c.ctx = t ? t(n, e.props || {}, (k, g, ...C) => {
    const I = C.length ? C[0] : g;
    return c.ctx && l(c.ctx[k], c.ctx[k] = I) && (!c.skip_bound && c.bound[k] && c.bound[k](I), m && sn(n, k)), g;
  }) : [], c.update(), m = !0, te(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const k = Jt(e.target);
      c.fragment && c.fragment.l(k), k.forEach(z);
    } else
      c.fragment && c.fragment.c();
    e.intro && j(n.$$.fragment), $(n, e.target, e.anchor, e.customElement), gt();
  }
  Te(d);
}
class _e {
  $destroy() {
    ee(this, 1), this.$destroy = S;
  }
  $on(e, t) {
    if (!ht(t))
      return S;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const l = r.indexOf(t);
      l !== -1 && r.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !Zt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function on(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), o(e, "viewBox", "0 0 14 14"), o(e, "width", "13"), o(e, "height", "13"), o(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      U(r, e, l), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && z(e);
    }
  };
}
class yt extends _e {
  constructor(e) {
    super(), me(this, e, null, on, he, {});
  }
}
function cn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), o(e, "viewBox", "0 0 30 30"), o(e, "fill", "none"), o(e, "xmlns", "http://www.w3.org/2000/svg"), o(e, "class", "svelte-d2loi5");
    },
    m(r, l) {
      U(r, e, l), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && z(e);
    }
  };
}
class bt extends _e {
  constructor(e) {
    super(), me(this, e, null, cn, he, {});
  }
}
function fn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function un(n) {
  let e, t;
  return {
    c() {
      e = E("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function an(n) {
  let e, t;
  return {
    c() {
      e = E("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function dn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function hn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function mn(n) {
  let e, t;
  return {
    c() {
      e = E("img"), K(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || o(e, "src", t), o(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !K(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && o(e, "src", t), l & /*placeType*/
      64 && o(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function _n(n) {
  let e, t, r, l;
  return {
    c() {
      e = E("img"), K(e.src, t = /*imageUrl*/
      n[5]) || o(e, "src", t), o(
        e,
        "alt",
        /*category*/
        n[4]
      ), o(e, "class", "svelte-ltkwvy");
    },
    m(a, s) {
      U(a, e, s), r || (l = D(
        e,
        "error",
        /*error_handler*/
        n[12]
      ), r = !0);
    },
    p(a, s) {
      s & /*imageUrl*/
      32 && !K(e.src, t = /*imageUrl*/
      a[5]) && o(e, "src", t), s & /*category*/
      16 && o(
        e,
        "alt",
        /*category*/
        a[4]
      );
    },
    d(a) {
      a && z(e), r = !1, l();
    }
  };
}
function lt(n) {
  let e, t;
  return {
    c() {
      e = E("span"), t = se(
        /*placeType*/
        n[6]
      ), o(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, l) {
      U(r, e, l), v(e, t);
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
      r && z(e);
    }
  };
}
function gn(n) {
  var B, R;
  let e, t, r, l, a, s, f, d, c = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), m, k, g = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((B = n[0].properties) == null ? void 0 : B.kind) !== "road" && /*feature*/
    ((R = n[0].properties) == null ? void 0 : R.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5])
  ), C, I, T = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), M, A, y;
  function F(_, w) {
    var Q, u;
    return w & /*feature*/
    1 && (t = null), w & /*feature*/
    1 && (r = null), w & /*feature*/
    1 && (l = null), /*imageUrl*/
    _[5] ? _n : (
      /*feature*/
      _[0].address ? mn : (
        /*feature*/
        ((Q = _[0].properties) == null ? void 0 : Q.kind) === "road" || /*feature*/
        ((u = _[0].properties) == null ? void 0 : u.kind) === "road_relation" ? hn : (t == null && (t = !!/*feature*/
        _[0].id.startsWith("address.")), t ? dn : (r == null && (r = !!/*feature*/
        _[0].id.startsWith("postal_code.")), r ? an : (l == null && (l = !!/*feature*/
        _[0].id.startsWith("poi.")), l ? un : fn)))
      )
    );
  }
  let G = F(n, -1), h = G(n), b = g && lt(n);
  return {
    c() {
      e = E("li"), h.c(), a = H(), s = E("span"), f = E("span"), d = E("span"), m = se(c), k = H(), b && b.c(), C = H(), I = E("span"), M = se(T), o(d, "class", "primary svelte-ltkwvy"), o(f, "class", "svelte-ltkwvy"), o(I, "class", "line2 svelte-ltkwvy"), o(s, "class", "texts svelte-ltkwvy"), o(e, "tabindex", "0"), o(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), o(e, "class", "svelte-ltkwvy"), le(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(_, w) {
      U(_, e, w), h.m(e, null), v(e, a), v(e, s), v(s, f), v(f, d), v(d, m), v(f, k), b && b.m(f, null), v(s, C), v(s, I), v(I, M), A || (y = [
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[10]
        ),
        D(
          e,
          "focus",
          /*focus_handler*/
          n[11]
        )
      ], A = !0);
    },
    p(_, [w]) {
      var Q, u;
      G === (G = F(_, w)) && h ? h.p(_, w) : (h.d(1), h = G(_), h && (h.c(), h.m(e, a))), w & /*feature*/
      1 && c !== (c = /*feature*/
      _[0].place_name.replace(/,.*/, "") + "") && Me(m, c), w & /*showPlaceType, feature, imageUrl*/
      37 && (g = /*showPlaceType*/
      _[2] === "always" || /*showPlaceType*/
      _[2] && !/*feature*/
      _[0].address && /*feature*/
      ((Q = _[0].properties) == null ? void 0 : Q.kind) !== "road" && /*feature*/
      ((u = _[0].properties) == null ? void 0 : u.kind) !== "road_relation" && !/*feature*/
      _[0].id.startsWith("address.") && !/*feature*/
      _[0].id.startsWith("postal_code.") && (!/*feature*/
      _[0].id.startsWith("poi.") || !/*imageUrl*/
      _[5])), g ? b ? b.p(_, w) : (b = lt(_), b.c(), b.m(f, null)) : b && (b.d(1), b = null), w & /*feature*/
      1 && T !== (T = /*feature*/
      _[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Me(M, T), w & /*selected*/
      2 && o(
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
      _ && z(e), h.d(), b && b.d(), A = !1, te(y);
    }
  };
}
function yn(n, e, t) {
  var A;
  let r, l, { feature: a } = e, { selected: s = !1 } = e, { showPlaceType: f } = e, { missingIconsCache: d } = e, { iconsBaseUrl: c } = e;
  const m = (A = a.properties) == null ? void 0 : A.categories;
  let k, g;
  function C(y) {
    g && d.add(g), t(9, r--, r);
  }
  function I(y) {
    nt.call(this, n, y);
  }
  function T(y) {
    nt.call(this, n, y);
  }
  const M = (y) => C(y.currentTarget);
  return n.$$set = (y) => {
    "feature" in y && t(0, a = y.feature), "selected" in y && t(1, s = y.selected), "showPlaceType" in y && t(2, f = y.showPlaceType), "missingIconsCache" in y && t(8, d = y.missingIconsCache), "iconsBaseUrl" in y && t(3, c = y.iconsBaseUrl);
  }, n.$$.update = () => {
    var y, F, G, h;
    if (n.$$.dirty & /*index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    824)
      do
        t(9, r--, r), t(4, k = m == null ? void 0 : m[r]), t(5, g = k ? c + k.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!g || d.has(g)));
    n.$$.dirty & /*feature*/
    1 && t(6, l = a.id.startsWith("poi.") ? (F = (y = a.properties) == null ? void 0 : y.categories) == null ? void 0 : F.join(", ") : ((h = (G = a.properties) == null ? void 0 : G.place_type_name) == null ? void 0 : h[0]) ?? a.place_type[0]);
  }, t(9, r = (m == null ? void 0 : m.length) ?? 0), [
    a,
    s,
    f,
    c,
    k,
    g,
    l,
    C,
    d,
    r,
    I,
    T,
    M
  ];
}
class bn extends _e {
  constructor(e) {
    super(), me(this, e, yn, gn, he, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function wn(n) {
  let e;
  return {
    c() {
      e = E("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', o(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      U(t, e, r);
    },
    p: S,
    i: S,
    o: S,
    d(t) {
      t && z(e);
    }
  };
}
class kn extends _e {
  constructor(e) {
    super(), me(this, e, null, wn, he, {});
  }
}
function vn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), o(e, "viewBox", "0 0 60.006 21.412"), o(e, "width", "14"), o(e, "height", "20"), o(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      U(r, e, l), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && z(e);
    }
  };
}
class pn extends _e {
  constructor(e) {
    super(), me(this, e, null, vn, he, {});
  }
}
function Tn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), o(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), o(e, "width", "14"), o(e, "height", "14"), o(e, "viewBox", "0 0 15 15"), o(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      U(r, e, l), v(e, t);
    },
    p: S,
    i: S,
    o: S,
    d(r) {
      r && z(e);
    }
  };
}
class Mn extends _e {
  constructor(e) {
    super(), me(this, e, null, Tn, he, {});
  }
}
function it(n, e, t) {
  const r = n.slice();
  return r[75] = e[t], r[77] = t, r;
}
function st(n) {
  let e, t;
  return e = new kn({}), {
    c() {
      oe(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    i(r) {
      t || (j(e.$$.fragment, r), t = !0);
    },
    o(r) {
      O(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function ot(n) {
  let e, t, r, l, a;
  return t = new pn({}), {
    c() {
      e = E("button"), oe(t.$$.fragment), o(e, "type", "button"), o(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), o(e, "class", "svelte-1r7dvt7"), le(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(s, f) {
      U(s, e, f), $(t, e, null), r = !0, l || (a = D(
        e,
        "click",
        /*click_handler_2*/
        n[61]
      ), l = !0);
    },
    p(s, f) {
      (!r || f[0] & /*reverseButtonTitle*/
      512) && o(
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
      O(t.$$.fragment, s), r = !1;
    },
    d(s) {
      s && z(e), ee(t), l = !1, a();
    }
  };
}
function Cn(n) {
  let e, t = [], r = /* @__PURE__ */ new Map(), l, a, s, f = (
    /*listFeatures*/
    n[13]
  );
  const d = (c) => (
    /*feature*/
    c[75].id + /*feature*/
    (c[75].address ? "," + /*feature*/
    c[75].address : "")
  );
  for (let c = 0; c < f.length; c += 1) {
    let m = it(n, f, c), k = d(m);
    r.set(k, t[c] = ct(k, m));
  }
  return {
    c() {
      e = E("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      o(e, "class", "svelte-1r7dvt7");
    },
    m(c, m) {
      U(c, e, m);
      for (let k = 0; k < t.length; k += 1)
        t[k] && t[k].m(e, null);
      l = !0, a || (s = [
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[65]
        ),
        D(
          e,
          "blur",
          /*blur_handler_1*/
          n[66]
        )
      ], a = !0);
    },
    p(c, m) {
      m[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (f = /*listFeatures*/
      c[13], ze(), t = ln(t, m, d, 1, c, f, r, e, rn, ct, null, it), Pe());
    },
    i(c) {
      if (!l) {
        for (let m = 0; m < f.length; m += 1)
          j(t[m]);
        l = !0;
      }
    },
    o(c) {
      for (let m = 0; m < t.length; m += 1)
        O(t[m]);
      l = !1;
    },
    d(c) {
      c && z(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      a = !1, te(s);
    }
  };
}
function Bn(n) {
  let e, t, r, l, a, s;
  return t = new bt({}), {
    c() {
      e = E("div"), oe(t.$$.fragment), r = H(), l = E("div"), a = se(
        /*noResultsMessage*/
        n[7]
      ), o(l, "class", "svelte-1r7dvt7"), o(e, "class", "no-results svelte-1r7dvt7");
    },
    m(f, d) {
      U(f, e, d), $(t, e, null), v(e, r), v(e, l), v(l, a), s = !0;
    },
    p(f, d) {
      (!s || d[0] & /*noResultsMessage*/
      128) && Me(
        a,
        /*noResultsMessage*/
        f[7]
      );
    },
    i(f) {
      s || (j(t.$$.fragment, f), s = !0);
    },
    o(f) {
      O(t.$$.fragment, f), s = !1;
    },
    d(f) {
      f && z(e), ee(t);
    }
  };
}
function Rn(n) {
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
      r && z(t);
    }
  };
}
function Ln(n) {
  let e, t, r, l, a, s, f, d, c, m, k;
  return t = new bt({}), d = new yt({}), {
    c() {
      e = E("div"), oe(t.$$.fragment), r = H(), l = E("div"), a = se(
        /*errorMessage*/
        n[6]
      ), s = H(), f = E("button"), oe(d.$$.fragment), o(l, "class", "svelte-1r7dvt7"), o(f, "class", "svelte-1r7dvt7"), o(e, "class", "error svelte-1r7dvt7");
    },
    m(g, C) {
      U(g, e, C), $(t, e, null), v(e, r), v(e, l), v(l, a), v(e, s), v(e, f), $(d, f, null), c = !0, m || (k = D(
        f,
        "click",
        /*click_handler_3*/
        n[62]
      ), m = !0);
    },
    p(g, C) {
      (!c || C[0] & /*errorMessage*/
      64) && Me(
        a,
        /*errorMessage*/
        g[6]
      );
    },
    i(g) {
      c || (j(t.$$.fragment, g), j(d.$$.fragment, g), c = !0);
    },
    o(g) {
      O(t.$$.fragment, g), O(d.$$.fragment, g), c = !1;
    },
    d(g) {
      g && z(e), ee(t), ee(d), m = !1, k();
    }
  };
}
function ct(n, e) {
  let t, r, l;
  function a() {
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
  return r = new bn({
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
  }), r.$on("mouseenter", a), r.$on("focus", s), {
    key: n,
    first: null,
    c() {
      t = Ht(), oe(r.$$.fragment), this.first = t;
    },
    m(f, d) {
      U(f, t, d), $(r, f, d), l = !0;
    },
    p(f, d) {
      e = f;
      const c = {};
      d[0] & /*listFeatures*/
      8192 && (c.feature = /*feature*/
      e[75]), d[0] & /*showPlaceType*/
      1024 && (c.showPlaceType = /*showPlaceType*/
      e[10]), d[0] & /*selectedItemIndex, listFeatures*/
      24576 && (c.selected = /*selectedItemIndex*/
      e[14] === /*i*/
      e[77]), d[0] & /*iconsBaseUrl*/
      2048 && (c.iconsBaseUrl = /*iconsBaseUrl*/
      e[11]), r.$set(c);
    },
    i(f) {
      l || (j(r.$$.fragment, f), l = !0);
    },
    o(f) {
      O(r.$$.fragment, f), l = !1;
    },
    d(f) {
      f && z(t), ee(r, f);
    }
  };
}
function En(n) {
  let e, t, r, l, a, s, f, d, c, m, k, g, C, I, T, M, A, y, F, G;
  l = new Mn({}), m = new yt({});
  let h = (
    /*abortController*/
    n[18] && st()
  ), b = (
    /*enableReverse*/
    n[5] === !0 && ot(n)
  );
  const B = (
    /*#slots*/
    n[53].default
  ), R = qt(
    B,
    n,
    /*$$scope*/
    n[52],
    null
  ), _ = [Ln, Rn, Bn, Cn], w = [];
  function Q(u, P) {
    var x, ce;
    return (
      /*error*/
      u[17] ? 0 : (
        /*focusedDelayed*/
        u[15] ? (
          /*listFeatures*/
          ((x = u[13]) == null ? void 0 : x.length) === 0 ? 2 : (
            /*focusedDelayed*/
            u[15] && /*listFeatures*/
            ((ce = u[13]) != null && ce.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(T = Q(n)) && (M = w[T] = _[T](n)), {
    c() {
      e = E("form"), t = E("div"), r = E("button"), oe(l.$$.fragment), a = H(), s = E("input"), f = H(), d = E("div"), c = E("button"), oe(m.$$.fragment), k = H(), h && h.c(), g = H(), b && b.c(), C = H(), R && R.c(), I = H(), M && M.c(), o(r, "class", "search-button svelte-1r7dvt7"), o(r, "type", "button"), o(
        s,
        "placeholder",
        /*placeholder*/
        n[8]
      ), o(
        s,
        "aria-label",
        /*placeholder*/
        n[8]
      ), o(s, "class", "svelte-1r7dvt7"), o(c, "type", "button"), o(
        c,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), o(c, "class", "svelte-1r7dvt7"), o(d, "class", "clear-button-container svelte-1r7dvt7"), le(
        d,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), o(t, "class", "input-group svelte-1r7dvt7"), o(e, "tabindex", "0"), o(e, "class", A = et(
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
    m(u, P) {
      U(u, e, P), v(e, t), v(t, r), $(l, r, null), v(t, a), v(t, s), n[55](s), tt(
        s,
        /*searchValue*/
        n[1]
      ), v(t, f), v(t, d), v(d, c), $(m, c, null), v(d, k), h && h.m(d, null), v(t, g), b && b.m(t, null), v(t, C), R && R.m(t, null), v(e, I), ~T && w[T].m(e, null), y = !0, F || (G = [
        D(
          r,
          "click",
          /*click_handler*/
          n[54]
        ),
        D(
          s,
          "input",
          /*input_1_input_handler*/
          n[56]
        ),
        D(
          s,
          "focus",
          /*focus_handler*/
          n[57]
        ),
        D(
          s,
          "blur",
          /*blur_handler*/
          n[58]
        ),
        D(
          s,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        D(
          s,
          "input",
          /*input_handler*/
          n[59]
        ),
        D(
          c,
          "click",
          /*click_handler_1*/
          n[60]
        ),
        D(e, "submit", Qt(
          /*handleOnSubmit*/
          n[20]
        ))
      ], F = !0);
    },
    p(u, P) {
      (!y || P[0] & /*placeholder*/
      256) && o(
        s,
        "placeholder",
        /*placeholder*/
        u[8]
      ), (!y || P[0] & /*placeholder*/
      256) && o(
        s,
        "aria-label",
        /*placeholder*/
        u[8]
      ), P[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      u[1] && tt(
        s,
        /*searchValue*/
        u[1]
      ), (!y || P[0] & /*clearButtonTitle*/
      8) && o(
        c,
        "title",
        /*clearButtonTitle*/
        u[3]
      ), /*abortController*/
      u[18] ? h ? P[0] & /*abortController*/
      262144 && j(h, 1) : (h = st(), h.c(), j(h, 1), h.m(d, null)) : h && (ze(), O(h, 1, 1, () => {
        h = null;
      }), Pe()), (!y || P[0] & /*searchValue*/
      2) && le(
        d,
        "displayable",
        /*searchValue*/
        u[1] !== ""
      ), /*enableReverse*/
      u[5] === !0 ? b ? (b.p(u, P), P[0] & /*enableReverse*/
      32 && j(b, 1)) : (b = ot(u), b.c(), j(b, 1), b.m(t, C)) : b && (ze(), O(b, 1, 1, () => {
        b = null;
      }), Pe()), R && R.p && (!y || P[1] & /*$$scope*/
      2097152) && Kt(
        R,
        B,
        u,
        /*$$scope*/
        u[52],
        y ? Dt(
          B,
          /*$$scope*/
          u[52],
          P,
          null
        ) : Vt(
          /*$$scope*/
          u[52]
        ),
        null
      );
      let x = T;
      T = Q(u), T === x ? ~T && w[T].p(u, P) : (M && (ze(), O(w[x], 1, 1, () => {
        w[x] = null;
      }), Pe()), ~T ? (M = w[T], M ? M.p(u, P) : (M = w[T] = _[T](u), M.c()), j(M, 1), M.m(e, null)) : M = null), (!y || P[0] & /*className*/
      4 && A !== (A = et(
        /*className*/
        u[2]
      ) + " svelte-1r7dvt7")) && o(e, "class", A), (!y || P[0] & /*className, collapsed, searchValue*/
      22) && le(
        e,
        "can-collapse",
        /*collapsed*/
        u[4] && /*searchValue*/
        u[1] === ""
      );
    },
    i(u) {
      y || (j(l.$$.fragment, u), j(m.$$.fragment, u), j(h), j(b), j(R, u), j(M), y = !0);
    },
    o(u) {
      O(l.$$.fragment, u), O(m.$$.fragment, u), O(h), O(b), O(R, u), O(M), y = !1;
    },
    d(u) {
      u && z(e), ee(l), n[55](null), ee(m), h && h.d(), b && b.d(), R && R.d(u), ~T && w[T].d(), F = !1, te(G);
    }
  };
}
function In(n, e, t) {
  const r = e[1], l = e[0], a = r - l;
  return n === r && t ? n : ((n - l) % a + a) % a + l;
}
function ft(n) {
  let e = [...n];
  return e[2] < e[0] && (e[2] += 360), e;
}
function Sn(n, e, t) {
  let r, { $$slots: l = {}, $$scope: a } = e, { class: s = void 0 } = e, { apiKey: f } = e, { bbox: d = void 0 } = e, { clearButtonTitle: c = "clear" } = e, { clearOnBlur: m = !1 } = e, { collapsed: k = !1 } = e, { country: g = void 0 } = e, { debounceSearch: C = 200 } = e, { enableReverse: I = !1 } = e, { errorMessage: T = "Something went wrong…" } = e, { filter: M = () => !0 } = e, { flyTo: A = !0 } = e, { fuzzyMatch: y = !0 } = e, { language: F = void 0 } = e, { limit: G = void 0 } = e, { mapController: h = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: B = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: R = "Search" } = e, { proximity: _ = void 0 } = e, { reverseActive: w = I === "always" } = e, { reverseButtonTitle: Q = "toggle reverse geocoding" } = e, { searchValue: u = "" } = e, { showFullGeometry: P = !0 } = e, { showPlaceType: x = "ifNeeded" } = e, { showResultsWhileTyping: ce = !0 } = e, { trackProximity: Be = !0 } = e, { types: fe = void 0 } = e, { zoom: Re = 16 } = e, { maxZoom: pe = 18 } = e, { apiUrl: Ue = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ae = {} } = e, { iconsBaseUrl: He = "icons/" } = e;
  function wt() {
    J.focus();
  }
  function kt() {
    J.blur();
  }
  function Qe(i, N = !0) {
    t(1, u = i), N ? (t(14, W = -1), Xe()) : (je(), setTimeout(() => {
      J.focus(), J.select();
    }));
  }
  let ge = !1, L, Z, p, Je = "", J, W = -1, X, Le = [], ue, ye, Ee, We;
  const vt = /* @__PURE__ */ new Set(), ne = xt();
  Yt(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setMarkers(void 0, void 0));
  });
  function Xe(i) {
    if (ye && (clearTimeout(ye), ye = void 0), W > -1 && L)
      t(49, p = L[W]), t(1, u = p.place_name.replace(/,.*/, "")), t(17, X = void 0), t(48, Z = void 0), t(14, W = -1);
    else if (u) {
      const N = i || !Ye();
      Ne(u, { exact: !0 }).then(() => {
        t(48, Z = L), t(49, p = void 0), N && pt();
      }).catch((Y) => t(17, X = Y));
    }
  }
  function Ye() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(u);
  }
  async function Ne(i, { byId: N = !1, exact: Y = !1 } = {}) {
    t(17, X = void 0);
    const be = Ye(), V = new URLSearchParams();
    F != null && V.set("language", Array.isArray(F) ? F.join(",") : F), fe && V.set("types", fe.join(",")), be || (d && V.set("bbox", d.map((re) => re.toFixed(6)).join(",")), g && V.set("country", Array.isArray(g) ? g.join(",") : g)), N || (_ && V.set("proximity", _.map((re) => re.toFixed(6)).join(",")), (Y || !ce) && V.set("autocomplete", "false"), V.set("fuzzyMatch", String(y))), G !== void 0 && (!be || (fe == null ? void 0 : fe.length) === 1) && V.set("limit", String(G)), V.set("key", f);
    const ae = Ue + "/" + encodeURIComponent(i) + ".json?" + V.toString();
    if (ae === Je) {
      N ? (t(13, L = void 0), t(49, p = Le[0])) : t(13, L = Le);
      return;
    }
    Je = ae, ue == null || ue.abort();
    const q = new AbortController();
    t(18, ue = q);
    let Ge;
    try {
      Ge = await fetch(ae, { signal: q.signal, ...Ae }).finally(() => {
        q === ue && t(18, ue = void 0);
      });
    } catch (re) {
      if (re && typeof re == "object" && "name" in re && re.name === "AbortError")
        return;
      throw new Error();
    }
    if (!Ge.ok)
      throw new Error();
    const Oe = await Ge.json();
    ne("response", { url: ae, featureCollection: Oe }), N ? (t(13, L = void 0), t(49, p = Oe.features[0]), Le = [p]) : (t(13, L = Oe.features.filter(M)), Le = L, be && J.focus());
  }
  function pt() {
    var Y, be, V, ae;
    if (!(Z != null && Z.length) || !A)
      return;
    const i = [180, 90, -180, -90], N = !Z.some((q) => !q.matching_text);
    for (const q of Z)
      (N || !q.matching_text) && (i[0] = Math.min(i[0], ((Y = q.bbox) == null ? void 0 : Y[0]) ?? q.center[0]), i[1] = Math.min(i[1], ((be = q.bbox) == null ? void 0 : be[1]) ?? q.center[1]), i[2] = Math.max(i[2], ((V = q.bbox) == null ? void 0 : V[2]) ?? q.center[0]), i[3] = Math.max(i[3], ((ae = q.bbox) == null ? void 0 : ae[3]) ?? q.center[1]));
    h && Z.length > 0 && (p && i[0] === i[2] && i[1] === i[3] ? h.flyTo(p.center, Re) : h.fitBounds(ft(i), 50, pe));
  }
  function Tt(i) {
    t(0, w = I === "always"), Qe(In(i[0], [-180, 180], !0).toFixed(6) + "," + i[1].toFixed(6));
  }
  function Mt(i) {
    if (!L)
      return;
    let N = i.key === "ArrowDown" ? 1 : i.key === "ArrowUp" ? -1 : 0;
    N ? (W === -1 && N === -1 && t(14, W = L.length), t(14, W += N), W >= L.length && t(14, W = -1), i.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(i.key) && t(14, W = -1);
  }
  function je(i = !0) {
    if (t(17, X = void 0), ce) {
      if (ye && clearTimeout(ye), u.length < b)
        return;
      const N = u;
      ye = window.setTimeout(
        () => {
          Ne(N).catch((Y) => t(17, X = Y));
        },
        i ? C : 0
      );
    } else
      t(13, L = void 0), t(17, X = void 0);
  }
  function Fe(i) {
    t(49, p = i), t(1, u = i.place_name), t(14, W = -1);
  }
  const Ct = () => J.focus();
  function Bt(i) {
    De[i ? "unshift" : "push"](() => {
      J = i, t(16, J);
    });
  }
  function Rt() {
    u = this.value, t(1, u), t(12, ge), t(27, m);
  }
  const Lt = () => t(12, ge = !0), Et = () => t(12, ge = !1), It = () => je(), St = () => {
    t(1, u = ""), J.focus();
  }, zt = () => t(0, w = !w), Pt = () => t(17, X = void 0), Ut = (i) => t(14, W = i), At = (i) => Fe(i), Wt = () => t(14, W = -1), Nt = () => {
  };
  return n.$$set = (i) => {
    "class" in i && t(2, s = i.class), "apiKey" in i && t(25, f = i.apiKey), "bbox" in i && t(26, d = i.bbox), "clearButtonTitle" in i && t(3, c = i.clearButtonTitle), "clearOnBlur" in i && t(27, m = i.clearOnBlur), "collapsed" in i && t(4, k = i.collapsed), "country" in i && t(28, g = i.country), "debounceSearch" in i && t(29, C = i.debounceSearch), "enableReverse" in i && t(5, I = i.enableReverse), "errorMessage" in i && t(6, T = i.errorMessage), "filter" in i && t(30, M = i.filter), "flyTo" in i && t(31, A = i.flyTo), "fuzzyMatch" in i && t(32, y = i.fuzzyMatch), "language" in i && t(33, F = i.language), "limit" in i && t(34, G = i.limit), "mapController" in i && t(35, h = i.mapController), "minLength" in i && t(36, b = i.minLength), "noResultsMessage" in i && t(7, B = i.noResultsMessage), "placeholder" in i && t(8, R = i.placeholder), "proximity" in i && t(24, _ = i.proximity), "reverseActive" in i && t(0, w = i.reverseActive), "reverseButtonTitle" in i && t(9, Q = i.reverseButtonTitle), "searchValue" in i && t(1, u = i.searchValue), "showFullGeometry" in i && t(37, P = i.showFullGeometry), "showPlaceType" in i && t(10, x = i.showPlaceType), "showResultsWhileTyping" in i && t(38, ce = i.showResultsWhileTyping), "trackProximity" in i && t(39, Be = i.trackProximity), "types" in i && t(40, fe = i.types), "zoom" in i && t(41, Re = i.zoom), "maxZoom" in i && t(42, pe = i.maxZoom), "apiUrl" in i && t(43, Ue = i.apiUrl), "fetchParameters" in i && t(44, Ae = i.fetchParameters), "iconsBaseUrl" in i && t(11, He = i.iconsBaseUrl), "$$scope" in i && t(52, a = i.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[1] & /*trackProximity*/
    256 && (Be || t(24, _ = void 0)), n.$$.dirty[0] & /*focused, clearOnBlur*/
    134221824 && setTimeout(() => {
      t(15, Ee = ge), m && !ge && t(1, u = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    32 && u.length < b && (t(49, p = void 0), t(13, L = void 0), t(17, X = void 0), t(48, Z = L)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    262208 && P && p && !p.address && p.geometry.type === "Point" && Ne(p.id, { byId: !0 }).catch((i) => t(17, X = i)), n.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    789521 && (h && p && p.id !== We && A && (!p.bbox || p.bbox[0] === p.bbox[2] && p.bbox[1] === p.bbox[3] ? h.flyTo(p.center, p.id.startsWith("poi.") || p.id.startsWith("address.") ? pe : Re) : h.fitBounds(ft(p.bbox), 50, pe), t(13, L = void 0), t(48, Z = void 0), t(14, W = -1)), t(50, We = p == null ? void 0 : p.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    131072 && Z !== L && t(48, Z = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    393232 && h && h.setMarkers(Z, p), n.$$.dirty[0] & /*searchValue*/
    2 && t(14, W = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController, trackProximity*/
    272 && h && h.setEventHandler((i) => {
      switch (i.type) {
        case "mapClick":
          w && Tt(i.coordinates);
          break;
        case "proximityChange":
          t(24, _ = Be ? i.proximity : void 0);
          break;
        case "markerClick":
          {
            const N = L == null ? void 0 : L.find((Y) => Y.id === i.id);
            N && Fe(N);
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
      const i = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(u);
      h == null || h.setReverseMarker(i ? [Number(i[1]), Number(i[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    1048576 && ne("select", r), n.$$.dirty[1] & /*picked*/
    262144 && ne("pick", p), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && ne("optionsVisibilityChange", Ee && !!L), n.$$.dirty[0] & /*listFeatures*/
    8192 && ne("featuresListed", L), n.$$.dirty[1] & /*markedFeatures*/
    131072 && ne("featuresMarked", Z), n.$$.dirty[0] & /*reverseActive*/
    1 && ne("reverseToggle", w), n.$$.dirty[0] & /*searchValue*/
    2 && ne("queryChange", u), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    16 && h && h.indicateReverse(w);
  }, [
    w,
    u,
    s,
    c,
    k,
    I,
    T,
    B,
    R,
    Q,
    x,
    He,
    ge,
    L,
    W,
    Ee,
    J,
    X,
    ue,
    vt,
    Xe,
    Mt,
    je,
    Fe,
    _,
    f,
    d,
    m,
    g,
    C,
    M,
    A,
    y,
    F,
    G,
    h,
    b,
    P,
    ce,
    Be,
    fe,
    Re,
    pe,
    Ue,
    Ae,
    wt,
    kt,
    Qe,
    Z,
    p,
    We,
    r,
    a,
    l,
    Ct,
    Bt,
    Rt,
    Lt,
    Et,
    It,
    St,
    zt,
    Pt,
    Ut,
    At,
    Wt,
    Nt
  ];
}
class zn extends _e {
  constructor(e) {
    super(), me(
      this,
      e,
      Sn,
      En,
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
const ut = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], Pn = [
  "apiKey",
  "bbox",
  "clearButtonTitle",
  "clearOnBlur",
  "collapsed",
  "country",
  "debounceSearch",
  "enableReverse",
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
function at(n) {
  return "on" + n[0].toUpperCase() + n.slice(1);
}
const An = jt(function(e, t) {
  const r = xe(), l = xe(), a = { ...e };
  for (const s of ut)
    delete a[at(s)];
  Ze(() => {
    if (!r.current)
      throw new Error();
    const s = new zn({
      target: r.current,
      props: a
    });
    return l.current = s, () => s.$destroy();
  }, []);
  for (const s of Pn)
    Ze(() => {
      l.current && e[s] !== void 0 && l.current.$set({ [s]: e[s] });
    }, [e[s]]);
  for (const s of ut) {
    const f = e[at(s)];
    Ze(() => {
      var d;
      (d = l.current) == null || d.$on(
        s,
        f ? (c) => {
          f(c.detail);
        } : void 0
      );
    }, [f]);
  }
  return Ft(t, () => ({
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
  })), Gt("div", { ref: r });
});
export {
  An as GeocodingControl
};
//# sourceMappingURL=react.js.map
