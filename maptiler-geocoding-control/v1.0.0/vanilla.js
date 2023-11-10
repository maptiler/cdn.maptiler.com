var Dt = Object.defineProperty;
var qt = (n, e, t) => e in n ? Dt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var De = (n, e, t) => (qt(n, typeof e != "symbol" ? e + "" : e, t), t), tt = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var te = (n, e, t) => (tt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), nt = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, rt = (n, e, t, r) => (tt(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t);
function U() {
}
function Vt(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function gt(n) {
  return n();
}
function lt() {
  return /* @__PURE__ */ Object.create(null);
}
function le(n) {
  n.forEach(gt);
}
function yt(n) {
  return typeof n == "function";
}
function me(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let Ue;
function q(n, e) {
  return n === e ? !0 : (Ue || (Ue = document.createElement("a")), Ue.href = e, n === Ue.href);
}
function Kt(n) {
  return Object.keys(n).length === 0;
}
function Ht(n, e, t, r) {
  if (n) {
    const l = bt(n, e, t, r);
    return n[0](l);
  }
}
function bt(n, e, t, r) {
  return n[1] && r ? Vt(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function Jt(n, e, t, r) {
  if (n[2] && r) {
    const l = n[2](r(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const u = [], o = Math.max(e.dirty.length, l.length);
      for (let f = 0; f < o; f += 1)
        u[f] = e.dirty[f] | l[f];
      return u;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function Xt(n, e, t, r, l, u) {
  if (l) {
    const o = bt(e, t, r, u);
    n.p(o, l);
  }
}
function Yt(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function it(n) {
  return n ?? "";
}
function p(n, e) {
  n.appendChild(e);
}
function j(n, e, t) {
  n.insertBefore(e, t || null);
}
function z(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function I(n) {
  return document.createElement(n);
}
function oe(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ce(n) {
  return document.createTextNode(n);
}
function K() {
  return ce(" ");
}
function xt() {
  return ce("");
}
function D(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function $t(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function s(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function en(n) {
  return Array.from(n.childNodes);
}
function Le(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function st(n, e) {
  n.value = e ?? "";
}
function se(n, e, t) {
  n.classList.toggle(e, !!t);
}
function tn(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
let Be;
function Te(n) {
  Be = n;
}
function wt() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function nn(n) {
  wt().$$.on_destroy.push(n);
}
function rn() {
  const n = wt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const u = tn(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return l.slice().forEach((o) => {
        o.call(n, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function ot(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const ve = [], Ve = [];
let ke = [];
const ct = [], ln = /* @__PURE__ */ Promise.resolve();
let Ke = !1;
function sn() {
  Ke || (Ke = !0, ln.then(vt));
}
function He(n) {
  ke.push(n);
}
const qe = /* @__PURE__ */ new Set();
let we = 0;
function vt() {
  if (we !== 0)
    return;
  const n = Be;
  do {
    try {
      for (; we < ve.length; ) {
        const e = ve[we];
        we++, Te(e), on(e.$$);
      }
    } catch (e) {
      throw ve.length = 0, we = 0, e;
    }
    for (Te(null), ve.length = 0, we = 0; Ve.length; )
      Ve.pop()();
    for (let e = 0; e < ke.length; e += 1) {
      const t = ke[e];
      qe.has(t) || (qe.add(t), t());
    }
    ke.length = 0;
  } while (ve.length);
  for (; ct.length; )
    ct.pop()();
  Ke = !1, qe.clear(), Te(n);
}
function on(n) {
  if (n.fragment !== null) {
    n.update(), le(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(He);
  }
}
function cn(n) {
  const e = [], t = [];
  ke.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), ke = e;
}
const ze = /* @__PURE__ */ new Set();
let he;
function Ae() {
  he = {
    r: 0,
    c: [],
    p: he
    // parent group
  };
}
function Pe() {
  he.r || le(he.c), he = he.p;
}
function W(n, e) {
  n && n.i && (ze.delete(n), n.i(e));
}
function N(n, e, t, r) {
  if (n && n.o) {
    if (ze.has(n))
      return;
    ze.add(n), he.c.push(() => {
      ze.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function ft(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function fn(n, e) {
  N(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function un(n, e, t, r, l, u, o, f, h, c, m, v) {
  let g = n.length, T = u.length, R = g;
  const M = {};
  for (; R--; )
    M[n[R].key] = R;
  const L = [], O = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), b = [];
  for (R = T; R--; ) {
    const E = v(l, u, R), C = t(E);
    let _ = o.get(C);
    _ ? r && b.push(() => _.p(E, e)) : (_ = c(C, E), _.c()), O.set(C, L[R] = _), C in M && S.set(C, Math.abs(R - M[C]));
  }
  const F = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  function y(E) {
    W(E, 1), E.m(f, m), o.set(E.key, E), m = E.first, T--;
  }
  for (; g && T; ) {
    const E = L[T - 1], C = n[g - 1], _ = E.key, w = C.key;
    E === C ? (m = E.first, g--, T--) : O.has(w) ? !o.has(_) || F.has(_) ? y(E) : d.has(w) ? g-- : S.get(_) > S.get(w) ? (d.add(_), y(E)) : (F.add(w), g--) : (h(C, o), g--);
  }
  for (; g--; ) {
    const E = n[g];
    O.has(E.key) || h(E, o);
  }
  for (; T; )
    y(L[T - 1]);
  return le(b), L;
}
function fe(n) {
  n && n.c();
}
function ne(n, e, t) {
  const { fragment: r, after_update: l } = n.$$;
  r && r.m(e, t), He(() => {
    const u = n.$$.on_mount.map(gt).filter(yt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...u) : le(u), n.$$.on_mount = [];
  }), l.forEach(He);
}
function re(n, e) {
  const t = n.$$;
  t.fragment !== null && (cn(t.after_update), le(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function an(n, e) {
  n.$$.dirty[0] === -1 && (ve.push(n), sn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function _e(n, e, t, r, l, u, o = null, f = [-1]) {
  const h = Be;
  Te(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: U,
    not_equal: l,
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
    dirty: f,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  o && o(c.root);
  let m = !1;
  if (c.ctx = t ? t(n, e.props || {}, (v, g, ...T) => {
    const R = T.length ? T[0] : g;
    return c.ctx && l(c.ctx[v], c.ctx[v] = R) && (!c.skip_bound && c.bound[v] && c.bound[v](R), m && an(n, v)), g;
  }) : [], c.update(), m = !0, le(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = en(e.target);
      c.fragment && c.fragment.l(v), v.forEach(z);
    } else
      c.fragment && c.fragment.c();
    e.intro && W(n.$$.fragment), ne(n, e.target, e.anchor), vt();
  }
  Te(h);
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
    De(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    De(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    re(this, 1), this.$destroy = U;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!yt(t))
      return U;
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
const dn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(dn);
function hn(n) {
  let e, t;
  return {
    c() {
      e = oe("svg"), t = oe("path"), s(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), s(e, "viewBox", "0 0 14 14"), s(e, "width", "13"), s(e, "height", "13"), s(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class kt extends ge {
  constructor(e) {
    super(), _e(this, e, null, hn, me, {});
  }
}
function mn(n) {
  let e, t;
  return {
    c() {
      e = oe("svg"), t = oe("path"), s(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), s(e, "viewBox", "0 0 30 30"), s(e, "fill", "none"), s(e, "xmlns", "http://www.w3.org/2000/svg"), s(e, "class", "svelte-d2loi5");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class pt extends ge {
  constructor(e) {
    super(), _e(this, e, null, mn, me, {});
  }
}
function _n(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && s(e, "src", t), l & /*placeType*/
      64 && s(
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
function gn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && s(e, "src", t), l & /*placeType*/
      64 && s(
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
function yn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && s(e, "src", t), l & /*placeType*/
      64 && s(
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
function bn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && s(e, "src", t), l & /*placeType*/
      64 && s(
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
function wn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && s(e, "src", t), l & /*placeType*/
      64 && s(
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
function vn(n) {
  let e, t;
  return {
    c() {
      e = I("img"), q(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") || s(e, "src", t), s(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l);
    },
    p(r, l) {
      l & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && s(e, "src", t), l & /*placeType*/
      64 && s(
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
function kn(n) {
  let e, t, r, l;
  return {
    c() {
      e = I("img"), q(e.src, t = /*imageUrl*/
      n[5]) || s(e, "src", t), s(
        e,
        "alt",
        /*category*/
        n[4]
      ), s(e, "class", "svelte-ltkwvy");
    },
    m(u, o) {
      j(u, e, o), r || (l = D(
        e,
        "error",
        /*error_handler*/
        n[13]
      ), r = !0);
    },
    p(u, o) {
      o & /*imageUrl*/
      32 && !q(e.src, t = /*imageUrl*/
      u[5]) && s(e, "src", t), o & /*category*/
      16 && s(
        e,
        "alt",
        /*category*/
        u[4]
      );
    },
    d(u) {
      u && z(e), r = !1, l();
    }
  };
}
function ut(n) {
  let e, t;
  return {
    c() {
      e = I("span"), t = ce(
        /*placeType*/
        n[6]
      ), s(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p(r, l) {
      l & /*placeType*/
      64 && Le(
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
function pn(n) {
  var E, C;
  let e, t, r, l, u, o, f, h, c = (
    /*feature*/
    n[0].place_name.replace(/,.*/, "") + ""
  ), m, v, g = (
    /*showPlaceType*/
    n[2] === "always" || /*showPlaceType*/
    n[2] && !/*feature*/
    n[0].address && /*feature*/
    ((E = n[0].properties) == null ? void 0 : E.kind) !== "road" && /*feature*/
    ((C = n[0].properties) == null ? void 0 : C.kind) !== "road_relation" && !/*feature*/
    n[0].id.startsWith("address.") && !/*feature*/
    n[0].id.startsWith("postal_code.") && (!/*feature*/
    n[0].id.startsWith("poi.") || !/*imageUrl*/
    n[5])
  ), T, R, M = (
    /*feature*/
    n[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), L, O, S;
  function b(_, w) {
    var H, a;
    return w & /*feature*/
    1 && (t = null), w & /*feature*/
    1 && (r = null), w & /*feature*/
    1 && (l = null), /*imageUrl*/
    _[5] ? kn : (
      /*feature*/
      _[0].address ? vn : (
        /*feature*/
        ((H = _[0].properties) == null ? void 0 : H.kind) === "road" || /*feature*/
        ((a = _[0].properties) == null ? void 0 : a.kind) === "road_relation" ? wn : (t == null && (t = !!/*feature*/
        _[0].id.startsWith("address.")), t ? bn : (r == null && (r = !!/*feature*/
        _[0].id.startsWith("postal_code.")), r ? yn : (l == null && (l = !!/*feature*/
        _[0].id.startsWith("poi.")), l ? gn : _n)))
      )
    );
  }
  let F = b(n, -1), d = F(n), y = g && ut(n);
  return {
    c() {
      e = I("li"), d.c(), u = K(), o = I("span"), f = I("span"), h = I("span"), m = ce(c), v = K(), y && y.c(), T = K(), R = I("span"), L = ce(M), s(h, "class", "primary svelte-ltkwvy"), s(f, "class", "svelte-ltkwvy"), s(R, "class", "line2 svelte-ltkwvy"), s(o, "class", "texts svelte-ltkwvy"), s(e, "tabindex", "0"), s(
        e,
        "data-selected",
        /*selected*/
        n[1]
      ), s(e, "class", "svelte-ltkwvy"), se(
        e,
        "selected",
        /*selected*/
        n[1]
      );
    },
    m(_, w) {
      j(_, e, w), d.m(e, null), p(e, u), p(e, o), p(o, f), p(f, h), p(h, m), p(f, v), y && y.m(f, null), p(o, T), p(o, R), p(R, L), O || (S = [
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[11]
        ),
        D(
          e,
          "focus",
          /*focus_handler*/
          n[12]
        )
      ], O = !0);
    },
    p(_, [w]) {
      var H, a;
      F === (F = b(_, w)) && d ? d.p(_, w) : (d.d(1), d = F(_), d && (d.c(), d.m(e, u))), w & /*feature*/
      1 && c !== (c = /*feature*/
      _[0].place_name.replace(/,.*/, "") + "") && Le(m, c), w & /*showPlaceType, feature, imageUrl*/
      37 && (g = /*showPlaceType*/
      _[2] === "always" || /*showPlaceType*/
      _[2] && !/*feature*/
      _[0].address && /*feature*/
      ((H = _[0].properties) == null ? void 0 : H.kind) !== "road" && /*feature*/
      ((a = _[0].properties) == null ? void 0 : a.kind) !== "road_relation" && !/*feature*/
      _[0].id.startsWith("address.") && !/*feature*/
      _[0].id.startsWith("postal_code.") && (!/*feature*/
      _[0].id.startsWith("poi.") || !/*imageUrl*/
      _[5])), g ? y ? y.p(_, w) : (y = ut(_), y.c(), y.m(f, null)) : y && (y.d(1), y = null), w & /*feature*/
      1 && M !== (M = /*feature*/
      _[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Le(L, M), w & /*selected*/
      2 && s(
        e,
        "data-selected",
        /*selected*/
        _[1]
      ), w & /*selected*/
      2 && se(
        e,
        "selected",
        /*selected*/
        _[1]
      );
    },
    i: U,
    o: U,
    d(_) {
      _ && z(e), d.d(), y && y.d(), O = !1, le(S);
    }
  };
}
function Mn(n, e, t) {
  var S;
  let r, l, { feature: u } = e, { selected: o = !1 } = e, { showPlaceType: f } = e, { missingIconsCache: h } = e, { iconsBaseUrl: c } = e;
  const m = (S = u.properties) == null ? void 0 : S.categories;
  let v, g, T = 0;
  function R(b) {
    g && h.add(g), t(9, T++, T);
  }
  function M(b) {
    ot.call(this, n, b);
  }
  function L(b) {
    ot.call(this, n, b);
  }
  const O = (b) => R(b.currentTarget);
  return n.$$set = (b) => {
    "feature" in b && t(0, u = b.feature), "selected" in b && t(1, o = b.selected), "showPlaceType" in b && t(2, f = b.showPlaceType), "missingIconsCache" in b && t(8, h = b.missingIconsCache), "iconsBaseUrl" in b && t(3, c = b.iconsBaseUrl);
  }, n.$$.update = () => {
    var b, F, d, y;
    if (n.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    1848)
      do
        t(10, r--, r), t(4, v = m == null ? void 0 : m[r]), t(5, g = v ? c + v.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!g || h.has(g)));
    n.$$.dirty & /*feature*/
    1 && t(6, l = u.id.startsWith("poi.") ? (F = (b = u.properties) == null ? void 0 : b.categories) == null ? void 0 : F.join(", ") : ((y = (d = u.properties) == null ? void 0 : d.place_type_name) == null ? void 0 : y[0]) ?? u.place_type[0]);
  }, t(10, r = (m == null ? void 0 : m.length) ?? 0), [
    u,
    o,
    f,
    c,
    v,
    g,
    l,
    R,
    h,
    T,
    r,
    M,
    L,
    O
  ];
}
class Tn extends ge {
  constructor(e) {
    super(), _e(this, e, Mn, pn, me, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function Ln(n) {
  let e;
  return {
    c() {
      e = I("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', s(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      j(t, e, r);
    },
    p: U,
    i: U,
    o: U,
    d(t) {
      t && z(e);
    }
  };
}
class Bn extends ge {
  constructor(e) {
    super(), _e(this, e, null, Ln, me, {});
  }
}
function En(n) {
  let e, t;
  return {
    c() {
      e = oe("svg"), t = oe("path"), s(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), s(e, "viewBox", "0 0 60.006 21.412"), s(e, "width", "14"), s(e, "height", "20"), s(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class Cn extends ge {
  constructor(e) {
    super(), _e(this, e, null, En, me, {});
  }
}
function Rn(n) {
  let e, t;
  return {
    c() {
      e = oe("svg"), t = oe("path"), s(t, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), s(e, "width", "14"), s(e, "height", "14"), s(e, "viewBox", "0 0 15 15"), s(e, "class", "svelte-en2qvf");
    },
    m(r, l) {
      j(r, e, l), p(e, t);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(e);
    }
  };
}
class In extends ge {
  constructor(e) {
    super(), _e(this, e, null, Rn, me, {});
  }
}
function Sn(n, e, t) {
  const r = e[1], l = e[0], u = r - l;
  return n === r && t ? n : ((n - l) % u + u) % u + l;
}
function at(n) {
  const e = [...n];
  return e[2] < e[0] && (e[2] += 360), e;
}
let Me;
async function Un(n, e, t) {
  const r = n == null ? void 0 : n.getCenterAndZoom();
  for (const l of e ?? [])
    if (!(r && (l.minZoom != null && l.minZoom > r[0] || l.maxZoom != null && l.maxZoom < r[0]))) {
      if (l.type === "fixed")
        return l.coordinates.join(",");
      e:
        if (l.type === "client-geolocation") {
          if (Me && l.cachedLocationExpiry && Me.time + l.cachedLocationExpiry > Date.now()) {
            if (!Me.coords)
              break e;
            return Me.coords;
          }
          let u;
          try {
            return u = await new Promise((o, f) => {
              t.signal.addEventListener("abort", () => {
                f(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (h) => {
                  o(
                    [h.coords.longitude, h.coords.latitude].map((c) => c.toFixed(6)).join(",")
                  );
                },
                (h) => {
                  f(h);
                },
                l
              );
            }), u;
          } catch {
          } finally {
            l.cachedLocationExpiry && (Me = {
              time: Date.now(),
              coords: u
            });
          }
          if (t.signal.aborted)
            return;
        }
      if (l.type === "server-geolocation")
        return "ip";
      if (r && l.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
function dt(n, e, t) {
  const r = n.slice();
  return r[77] = e[t], r[79] = t, r;
}
function ht(n) {
  let e, t;
  return e = new Bn({}), {
    c() {
      fe(e.$$.fragment);
    },
    m(r, l) {
      ne(e, r, l), t = !0;
    },
    i(r) {
      t || (W(e.$$.fragment, r), t = !0);
    },
    o(r) {
      N(e.$$.fragment, r), t = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function mt(n) {
  let e, t, r, l, u;
  return t = new Cn({}), {
    c() {
      e = I("button"), fe(t.$$.fragment), s(e, "type", "button"), s(
        e,
        "title",
        /*reverseButtonTitle*/
        n[9]
      ), s(e, "class", "svelte-1r7dvt7"), se(
        e,
        "active",
        /*reverseActive*/
        n[0]
      );
    },
    m(o, f) {
      j(o, e, f), ne(t, e, null), r = !0, l || (u = D(
        e,
        "click",
        /*click_handler_2*/
        n[63]
      ), l = !0);
    },
    p(o, f) {
      (!r || f[0] & /*reverseButtonTitle*/
      512) && s(
        e,
        "title",
        /*reverseButtonTitle*/
        o[9]
      ), (!r || f[0] & /*reverseActive*/
      1) && se(
        e,
        "active",
        /*reverseActive*/
        o[0]
      );
    },
    i(o) {
      r || (W(t.$$.fragment, o), r = !0);
    },
    o(o) {
      N(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && z(e), re(t), l = !1, u();
    }
  };
}
function zn(n) {
  let e, t = [], r = /* @__PURE__ */ new Map(), l, u, o, f = ft(
    /*listFeatures*/
    n[13]
  );
  const h = (c) => (
    /*feature*/
    c[77].id + /*feature*/
    (c[77].address ? "," + /*feature*/
    c[77].address : "")
  );
  for (let c = 0; c < f.length; c += 1) {
    let m = dt(n, f, c), v = h(m);
    r.set(v, t[c] = _t(v, m));
  }
  return {
    c() {
      e = I("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      s(e, "class", "svelte-1r7dvt7");
    },
    m(c, m) {
      j(c, e, m);
      for (let v = 0; v < t.length; v += 1)
        t[v] && t[v].m(e, null);
      l = !0, u || (o = [
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[67]
        ),
        D(
          e,
          "blur",
          /*blur_handler_1*/
          n[68]
        )
      ], u = !0);
    },
    p(c, m) {
      m[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (f = ft(
        /*listFeatures*/
        c[13]
      ), Ae(), t = un(t, m, h, 1, c, f, r, e, fn, _t, null, dt), Pe());
    },
    i(c) {
      if (!l) {
        for (let m = 0; m < f.length; m += 1)
          W(t[m]);
        l = !0;
      }
    },
    o(c) {
      for (let m = 0; m < t.length; m += 1)
        N(t[m]);
      l = !1;
    },
    d(c) {
      c && z(e);
      for (let m = 0; m < t.length; m += 1)
        t[m].d();
      u = !1, le(o);
    }
  };
}
function An(n) {
  let e, t, r, l, u, o;
  return t = new pt({}), {
    c() {
      e = I("div"), fe(t.$$.fragment), r = K(), l = I("div"), u = ce(
        /*noResultsMessage*/
        n[7]
      ), s(l, "class", "svelte-1r7dvt7"), s(e, "class", "no-results svelte-1r7dvt7");
    },
    m(f, h) {
      j(f, e, h), ne(t, e, null), p(e, r), p(e, l), p(l, u), o = !0;
    },
    p(f, h) {
      (!o || h[0] & /*noResultsMessage*/
      128) && Le(
        u,
        /*noResultsMessage*/
        f[7]
      );
    },
    i(f) {
      o || (W(t.$$.fragment, f), o = !0);
    },
    o(f) {
      N(t.$$.fragment, f), o = !1;
    },
    d(f) {
      f && z(e), re(t);
    }
  };
}
function Pn(n) {
  let e = "", t;
  return {
    c() {
      t = ce(e);
    },
    m(r, l) {
      j(r, t, l);
    },
    p: U,
    i: U,
    o: U,
    d(r) {
      r && z(t);
    }
  };
}
function jn(n) {
  let e, t, r, l, u, o, f, h, c, m, v;
  return t = new pt({}), h = new kt({}), {
    c() {
      e = I("div"), fe(t.$$.fragment), r = K(), l = I("div"), u = ce(
        /*errorMessage*/
        n[6]
      ), o = K(), f = I("button"), fe(h.$$.fragment), s(l, "class", "svelte-1r7dvt7"), s(f, "class", "svelte-1r7dvt7"), s(e, "class", "error svelte-1r7dvt7");
    },
    m(g, T) {
      j(g, e, T), ne(t, e, null), p(e, r), p(e, l), p(l, u), p(e, o), p(e, f), ne(h, f, null), c = !0, m || (v = D(
        f,
        "click",
        /*click_handler_3*/
        n[64]
      ), m = !0);
    },
    p(g, T) {
      (!c || T[0] & /*errorMessage*/
      64) && Le(
        u,
        /*errorMessage*/
        g[6]
      );
    },
    i(g) {
      c || (W(t.$$.fragment, g), W(h.$$.fragment, g), c = !0);
    },
    o(g) {
      N(t.$$.fragment, g), N(h.$$.fragment, g), c = !1;
    },
    d(g) {
      g && z(e), re(t), re(h), m = !1, v();
    }
  };
}
function _t(n, e) {
  let t, r, l;
  function u() {
    return (
      /*mouseenter_handler*/
      e[65](
        /*i*/
        e[79]
      )
    );
  }
  function o() {
    return (
      /*focus_handler_1*/
      e[66](
        /*feature*/
        e[77]
      )
    );
  }
  return r = new Tn({
    props: {
      feature: (
        /*feature*/
        e[77]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[10]
      ),
      selected: (
        /*selectedItemIndex*/
        e[14] === /*i*/
        e[79]
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
  }), r.$on("mouseenter", u), r.$on("focus", o), {
    key: n,
    first: null,
    c() {
      t = xt(), fe(r.$$.fragment), this.first = t;
    },
    m(f, h) {
      j(f, t, h), ne(r, f, h), l = !0;
    },
    p(f, h) {
      e = f;
      const c = {};
      h[0] & /*listFeatures*/
      8192 && (c.feature = /*feature*/
      e[77]), h[0] & /*showPlaceType*/
      1024 && (c.showPlaceType = /*showPlaceType*/
      e[10]), h[0] & /*selectedItemIndex, listFeatures*/
      24576 && (c.selected = /*selectedItemIndex*/
      e[14] === /*i*/
      e[79]), h[0] & /*iconsBaseUrl*/
      2048 && (c.iconsBaseUrl = /*iconsBaseUrl*/
      e[11]), r.$set(c);
    },
    i(f) {
      l || (W(r.$$.fragment, f), l = !0);
    },
    o(f) {
      N(r.$$.fragment, f), l = !1;
    },
    d(f) {
      f && z(t), re(r, f);
    }
  };
}
function Zn(n) {
  let e, t, r, l, u, o, f, h, c, m, v, g, T, R, M, L, O, S, b, F;
  l = new In({}), m = new kt({});
  let d = (
    /*abortController*/
    n[18] && ht()
  ), y = (
    /*enableReverse*/
    n[5] === !0 && mt(n)
  );
  const E = (
    /*#slots*/
    n[55].default
  ), C = Ht(
    E,
    n,
    /*$$scope*/
    n[54],
    null
  ), _ = [jn, Pn, An, zn], w = [];
  function H(a, A) {
    var ee, ue;
    return (
      /*error*/
      a[17] ? 0 : (
        /*focusedDelayed*/
        a[15] ? (
          /*listFeatures*/
          ((ee = a[13]) == null ? void 0 : ee.length) === 0 ? 2 : (
            /*focusedDelayed*/
            a[15] && /*listFeatures*/
            ((ue = a[13]) != null && ue.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(M = H(n)) && (L = w[M] = _[M](n)), {
    c() {
      e = I("form"), t = I("div"), r = I("button"), fe(l.$$.fragment), u = K(), o = I("input"), f = K(), h = I("div"), c = I("button"), fe(m.$$.fragment), v = K(), d && d.c(), g = K(), y && y.c(), T = K(), C && C.c(), R = K(), L && L.c(), s(r, "class", "search-button svelte-1r7dvt7"), s(r, "type", "button"), s(
        o,
        "placeholder",
        /*placeholder*/
        n[8]
      ), s(
        o,
        "aria-label",
        /*placeholder*/
        n[8]
      ), s(o, "class", "svelte-1r7dvt7"), s(c, "type", "button"), s(
        c,
        "title",
        /*clearButtonTitle*/
        n[3]
      ), s(c, "class", "svelte-1r7dvt7"), s(h, "class", "clear-button-container svelte-1r7dvt7"), se(
        h,
        "displayable",
        /*searchValue*/
        n[1] !== ""
      ), s(t, "class", "input-group svelte-1r7dvt7"), s(e, "tabindex", "0"), s(e, "class", O = it(
        /*className*/
        n[2]
      ) + " svelte-1r7dvt7"), se(
        e,
        "can-collapse",
        /*collapsed*/
        n[4] && /*searchValue*/
        n[1] === ""
      );
    },
    m(a, A) {
      j(a, e, A), p(e, t), p(t, r), ne(l, r, null), p(t, u), p(t, o), n[57](o), st(
        o,
        /*searchValue*/
        n[1]
      ), p(t, f), p(t, h), p(h, c), ne(m, c, null), p(h, v), d && d.m(h, null), p(t, g), y && y.m(t, null), p(t, T), C && C.m(t, null), p(e, R), ~M && w[M].m(e, null), S = !0, b || (F = [
        D(
          r,
          "click",
          /*click_handler*/
          n[56]
        ),
        D(
          o,
          "input",
          /*input_1_input_handler*/
          n[58]
        ),
        D(
          o,
          "focus",
          /*focus_handler*/
          n[59]
        ),
        D(
          o,
          "blur",
          /*blur_handler*/
          n[60]
        ),
        D(
          o,
          "keydown",
          /*handleKeyDown*/
          n[21]
        ),
        D(
          o,
          "input",
          /*input_handler*/
          n[61]
        ),
        D(
          c,
          "click",
          /*click_handler_1*/
          n[62]
        ),
        D(e, "submit", $t(
          /*handleOnSubmit*/
          n[20]
        ))
      ], b = !0);
    },
    p(a, A) {
      (!S || A[0] & /*placeholder*/
      256) && s(
        o,
        "placeholder",
        /*placeholder*/
        a[8]
      ), (!S || A[0] & /*placeholder*/
      256) && s(
        o,
        "aria-label",
        /*placeholder*/
        a[8]
      ), A[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      a[1] && st(
        o,
        /*searchValue*/
        a[1]
      ), (!S || A[0] & /*clearButtonTitle*/
      8) && s(
        c,
        "title",
        /*clearButtonTitle*/
        a[3]
      ), /*abortController*/
      a[18] ? d ? A[0] & /*abortController*/
      262144 && W(d, 1) : (d = ht(), d.c(), W(d, 1), d.m(h, null)) : d && (Ae(), N(d, 1, 1, () => {
        d = null;
      }), Pe()), (!S || A[0] & /*searchValue*/
      2) && se(
        h,
        "displayable",
        /*searchValue*/
        a[1] !== ""
      ), /*enableReverse*/
      a[5] === !0 ? y ? (y.p(a, A), A[0] & /*enableReverse*/
      32 && W(y, 1)) : (y = mt(a), y.c(), W(y, 1), y.m(t, T)) : y && (Ae(), N(y, 1, 1, () => {
        y = null;
      }), Pe()), C && C.p && (!S || A[1] & /*$$scope*/
      8388608) && Xt(
        C,
        E,
        a,
        /*$$scope*/
        a[54],
        S ? Jt(
          E,
          /*$$scope*/
          a[54],
          A,
          null
        ) : Yt(
          /*$$scope*/
          a[54]
        ),
        null
      );
      let ee = M;
      M = H(a), M === ee ? ~M && w[M].p(a, A) : (L && (Ae(), N(w[ee], 1, 1, () => {
        w[ee] = null;
      }), Pe()), ~M ? (L = w[M], L ? L.p(a, A) : (L = w[M] = _[M](a), L.c()), W(L, 1), L.m(e, null)) : L = null), (!S || A[0] & /*className*/
      4 && O !== (O = it(
        /*className*/
        a[2]
      ) + " svelte-1r7dvt7")) && s(e, "class", O), (!S || A[0] & /*className, collapsed, searchValue*/
      22) && se(
        e,
        "can-collapse",
        /*collapsed*/
        a[4] && /*searchValue*/
        a[1] === ""
      );
    },
    i(a) {
      S || (W(l.$$.fragment, a), W(m.$$.fragment, a), W(d), W(y), W(C, a), W(L), S = !0);
    },
    o(a) {
      N(l.$$.fragment, a), N(m.$$.fragment, a), N(d), N(y), N(C, a), N(L), S = !1;
    },
    d(a) {
      a && z(e), re(l), n[57](null), re(m), d && d.d(), y && y.d(), C && C.d(a), ~M && w[M].d(), b = !1, le(F);
    }
  };
}
function Wn(n, e, t) {
  let r, { $$slots: l = {}, $$scope: u } = e, { class: o = void 0 } = e, { apiKey: f } = e, { bbox: h = void 0 } = e, { clearButtonTitle: c = "clear" } = e, { clearOnBlur: m = !1 } = e, { collapsed: v = !1 } = e, { country: g = void 0 } = e, { debounceSearch: T = 200 } = e, { enableReverse: R = !1 } = e, { errorMessage: M = "Something went wrong…" } = e, { filter: L = () => !0 } = e, { flyTo: O = !0 } = e, { fuzzyMatch: S = !0 } = e, { language: b = void 0 } = e, { limit: F = void 0 } = e, { mapController: d = void 0 } = e, { minLength: y = 2 } = e, { noResultsMessage: E = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: C = "Search" } = e, { proximity: _ = [{ type: "server-geolocation" }] } = e, { reverseActive: w = R === "always" } = e, { reverseButtonTitle: H = "toggle reverse geocoding" } = e, { searchValue: a = "" } = e, { showFullGeometry: A = !0 } = e, { showPlaceType: ee = "ifNeeded" } = e, { showResultsWhileTyping: ue = !0 } = e, { types: ae = void 0 } = e, { zoom: Ee = 16 } = e, { maxZoom: pe = 18 } = e, { apiUrl: je = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ze = {} } = e, { iconsBaseUrl: Je = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.0.0/icons/" } = e, { adjustUrlQuery: We = (i) => {
  } } = e;
  function Mt() {
    X.focus();
  }
  function Tt() {
    X.blur();
  }
  function Xe(i, Z = !0) {
    t(1, a = i), Z ? (t(14, P = -1), xe()) : (Ne(), setTimeout(() => {
      X.focus(), X.select();
    }));
  }
  function Lt() {
    t(13, B = void 0), t(51, k = void 0), t(14, P = -1);
  }
  function Bt() {
    t(50, G = []), t(51, k = void 0);
  }
  let ye = !1, B, G, k, Ye = "", X, P = -1, Y, Ce = [], de, be, Re, Oe;
  const Et = /* @__PURE__ */ new Set(), ie = rn();
  nn(() => {
    d && (d.setEventHandler(void 0), d.indicateReverse(!1), d.setSelectedMarker(-1), d.setMarkers(void 0, void 0));
  });
  function xe(i) {
    if (be && (clearTimeout(be), be = void 0), P > -1 && B)
      t(51, k = B[P]), t(1, a = k.place_name.replace(/,.*/, "")), t(17, Y = void 0), t(50, G = void 0), t(14, P = -1);
    else if (a) {
      const Z = i || !$e();
      Fe(a, { exact: !0 }).then(() => {
        t(50, G = B), t(51, k = void 0), Z && Ct();
      }).catch((x) => t(17, Y = x));
    }
  }
  function $e() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(a);
  }
  async function Fe(i, { byId: Z = !1, exact: x = !1 } = {}) {
    t(17, Y = void 0), de == null || de.abort();
    const $ = new AbortController();
    t(18, de = $);
    try {
      const Q = $e(), J = new URLSearchParams();
      if (b !== void 0 && J.set("language", Array.isArray(b) ? b.join(",") : b ?? ""), ae && J.set("types", ae.join(",")), h && J.set("bbox", h.map((Se) => Se.toFixed(6)).join(",")), g && J.set("country", Array.isArray(g) ? g.join(",") : g), !Z && !Q) {
        const Se = await Un(d, _, $);
        Se && J.set("proximity", Se), (x || !ue) && J.set("autocomplete", "false"), J.set("fuzzyMatch", String(S));
      }
      F !== void 0 && (!Q || (ae == null ? void 0 : ae.length) === 1) && J.set("limit", String(F)), J.set("key", f), We(J);
      const Ie = je + "/" + encodeURIComponent(i) + ".json?" + J.toString();
      if (Ie === Ye) {
        Z ? (t(13, B = void 0), t(51, k = Ce[0])) : t(13, B = Ce);
        return;
      }
      Ye = Ie;
      const et = await fetch(Ie, { signal: $.signal, ...Ze });
      if (!et.ok)
        throw new Error();
      const Qe = await et.json();
      ie("response", { url: Ie, featureCollection: Qe }), Z ? (t(13, B = void 0), t(51, k = Qe.features[0]), Ce = [k]) : (t(13, B = Qe.features.filter(L)), Ce = B, Q && X.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      $ === de && t(18, de = void 0);
    }
  }
  function Ct() {
    var x;
    if (!(G != null && G.length) || !O)
      return;
    const i = [180, 90, -180, -90], Z = !G.some(($) => !$.matching_text);
    for (const $ of G)
      if (Z || !$.matching_text)
        for (const Q of [0, 1, 2, 3])
          i[Q] = Math[Q < 2 ? "min" : "max"](i[Q], ((x = $.bbox) == null ? void 0 : x[Q]) ?? $.center[Q % 2]);
    d && G.length > 0 && (k && i[0] === i[2] && i[1] === i[3] ? d.flyTo(k.center, Ee) : d.fitBounds(at(i), 50, pe));
  }
  function Rt(i) {
    t(0, w = R === "always"), Xe(Sn(i[0], [-180, 180], !0).toFixed(6) + "," + i[1].toFixed(6));
  }
  function It(i) {
    if (!B)
      return;
    let Z = i.key === "ArrowDown" ? 1 : i.key === "ArrowUp" ? -1 : 0;
    Z ? (P === -1 && Z === -1 && t(14, P = B.length), t(14, P += Z), P >= B.length && t(14, P = -1), i.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(i.key) && t(14, P = -1);
  }
  function Ne(i = !0) {
    if (t(17, Y = void 0), ue) {
      if (be && clearTimeout(be), a.length < y)
        return;
      const Z = a;
      be = window.setTimeout(
        () => {
          Fe(Z).catch((x) => t(17, Y = x));
        },
        i ? T : 0
      );
    } else
      t(13, B = void 0), t(17, Y = void 0);
  }
  function Ge(i) {
    t(51, k = i), t(1, a = i.place_name), t(14, P = -1);
  }
  const St = () => X.focus();
  function Ut(i) {
    Ve[i ? "unshift" : "push"](() => {
      X = i, t(16, X);
    });
  }
  function zt() {
    a = this.value, t(1, a), t(12, ye), t(26, m);
  }
  const At = () => t(12, ye = !0), Pt = () => t(12, ye = !1), jt = () => Ne(), Zt = () => {
    t(1, a = ""), X.focus();
  }, Wt = () => t(0, w = !w), Ot = () => t(17, Y = void 0), Ft = (i) => t(14, P = i), Nt = (i) => Ge(i), Gt = () => t(14, P = -1), Qt = () => {
  };
  return n.$$set = (i) => {
    "class" in i && t(2, o = i.class), "apiKey" in i && t(24, f = i.apiKey), "bbox" in i && t(25, h = i.bbox), "clearButtonTitle" in i && t(3, c = i.clearButtonTitle), "clearOnBlur" in i && t(26, m = i.clearOnBlur), "collapsed" in i && t(4, v = i.collapsed), "country" in i && t(27, g = i.country), "debounceSearch" in i && t(28, T = i.debounceSearch), "enableReverse" in i && t(5, R = i.enableReverse), "errorMessage" in i && t(6, M = i.errorMessage), "filter" in i && t(29, L = i.filter), "flyTo" in i && t(30, O = i.flyTo), "fuzzyMatch" in i && t(31, S = i.fuzzyMatch), "language" in i && t(32, b = i.language), "limit" in i && t(33, F = i.limit), "mapController" in i && t(34, d = i.mapController), "minLength" in i && t(35, y = i.minLength), "noResultsMessage" in i && t(7, E = i.noResultsMessage), "placeholder" in i && t(8, C = i.placeholder), "proximity" in i && t(36, _ = i.proximity), "reverseActive" in i && t(0, w = i.reverseActive), "reverseButtonTitle" in i && t(9, H = i.reverseButtonTitle), "searchValue" in i && t(1, a = i.searchValue), "showFullGeometry" in i && t(37, A = i.showFullGeometry), "showPlaceType" in i && t(10, ee = i.showPlaceType), "showResultsWhileTyping" in i && t(38, ue = i.showResultsWhileTyping), "types" in i && t(39, ae = i.types), "zoom" in i && t(40, Ee = i.zoom), "maxZoom" in i && t(41, pe = i.maxZoom), "apiUrl" in i && t(42, je = i.apiUrl), "fetchParameters" in i && t(43, Ze = i.fetchParameters), "iconsBaseUrl" in i && t(11, Je = i.iconsBaseUrl), "adjustUrlQuery" in i && t(44, We = i.adjustUrlQuery), "$$scope" in i && t(54, u = i.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*focused, clearOnBlur*/
    67112960 && setTimeout(() => {
      t(15, Re = ye), m && !ye && t(1, a = "");
    }), n.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | n.$$.dirty[1] & /*minLength*/
    16 && a.length < y && (t(51, k = void 0), t(13, B = void 0), t(17, Y = void 0), t(50, G = B)), n.$$.dirty[1] & /*showFullGeometry, picked*/
    1048640 && A && k && !k.address && k.geometry.type === "Point" && Fe(k.id, { byId: !0 }).catch((i) => t(17, Y = i)), n.$$.dirty[0] & /*flyTo*/
    1073741824 | n.$$.dirty[1] & /*mapController, picked, prevIdToFly, maxZoom, zoom*/
    3147272 && (d && k && k.id !== Oe && O && (!k.bbox || k.bbox[0] === k.bbox[2] && k.bbox[1] === k.bbox[3] ? d.flyTo(k.center, k.id.startsWith("poi.") || k.id.startsWith("address.") ? pe : Ee) : d.fitBounds(at(k.bbox), 50, pe), t(13, B = void 0), t(50, G = void 0), t(14, P = -1)), t(52, Oe = k == null ? void 0 : k.id)), n.$$.dirty[0] & /*listFeatures*/
    8192 | n.$$.dirty[1] & /*markedFeatures*/
    524288 && G !== B && t(50, G = void 0), n.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    1572872 && d && d.setMarkers(G, k), n.$$.dirty[0] & /*searchValue*/
    2 && t(14, P = -1), n.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | n.$$.dirty[1] & /*mapController*/
    8 && d && d.setEventHandler((i) => {
      switch (i.type) {
        case "mapClick":
          w && Rt(i.coordinates);
          break;
        case "markerClick":
          {
            const Z = B == null ? void 0 : B.find((x) => x.id === i.id);
            Z && Ge(Z);
          }
          break;
        case "markerMouseEnter":
          t(14, P = Re ? (B == null ? void 0 : B.findIndex((Z) => Z.id === i.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          t(14, P = -1);
          break;
      }
    }), n.$$.dirty[0] & /*selectedItemIndex*/
    16384 | n.$$.dirty[1] & /*mapController*/
    8 && (d == null || d.setSelectedMarker(P)), n.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && t(53, r = B == null ? void 0 : B[P]), n.$$.dirty[0] & /*searchValue*/
    2 | n.$$.dirty[1] & /*mapController*/
    8) {
      const i = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(a);
      d == null || d.setReverseMarker(i ? [Number(i[1]), Number(i[2])] : void 0);
    }
    n.$$.dirty[1] & /*selected*/
    4194304 && ie("select", r), n.$$.dirty[1] & /*picked*/
    1048576 && ie("pick", k), n.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && ie("optionsVisibilityChange", Re && !!B), n.$$.dirty[0] & /*listFeatures*/
    8192 && ie("featuresListed", B), n.$$.dirty[1] & /*markedFeatures*/
    524288 && ie("featuresMarked", G), n.$$.dirty[0] & /*reverseActive*/
    1 && ie("reverseToggle", w), n.$$.dirty[0] & /*searchValue*/
    2 && ie("queryChange", a), n.$$.dirty[0] & /*reverseActive*/
    1 | n.$$.dirty[1] & /*mapController*/
    8 && d && d.indicateReverse(w);
  }, [
    w,
    a,
    o,
    c,
    v,
    R,
    M,
    E,
    C,
    H,
    ee,
    Je,
    ye,
    B,
    P,
    Re,
    X,
    Y,
    de,
    Et,
    xe,
    It,
    Ne,
    Ge,
    f,
    h,
    m,
    g,
    T,
    L,
    O,
    S,
    b,
    F,
    d,
    y,
    _,
    A,
    ue,
    ae,
    Ee,
    pe,
    je,
    Ze,
    We,
    Mt,
    Tt,
    Xe,
    Lt,
    Bt,
    G,
    k,
    Oe,
    r,
    u,
    l,
    St,
    Ut,
    zt,
    At,
    Pt,
    jt,
    Zt,
    Wt,
    Ot,
    Ft,
    Nt,
    Gt,
    Qt
  ];
}
let On = class extends ge {
  constructor(e) {
    super(), _e(
      this,
      e,
      Wn,
      Zn,
      me,
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
const Fn = new FinalizationRegistry((n) => {
  n.$destroy();
});
var V;
class Qn extends EventTarget {
  constructor({ target: t, ...r }) {
    super();
    nt(this, V, void 0);
    rt(this, V, new On({
      target: t,
      props: r
    }));
    for (const l of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      te(this, V).$on(l, (u) => this.dispatchEvent(u));
    Fn.register(this, te(this, V));
  }
  setOptions(t) {
    te(this, V).$set(t);
  }
  setQuery(t, r = !0) {
    var l;
    (l = te(this, V)) == null || l.setQuery(t, r);
  }
  clearMap() {
    var t;
    (t = te(this, V)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = te(this, V)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = te(this, V)) == null || t.focus();
  }
  blur() {
    var t;
    (t = te(this, V)) == null || t.blur();
  }
}
V = new WeakMap();
export {
  Qn as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
