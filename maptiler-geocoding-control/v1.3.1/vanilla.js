var ni = Object.defineProperty;
var at = (i) => {
  throw TypeError(i);
};
var oi = (i, e, t) => e in i ? ni(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ye = (i, e, t) => oi(i, typeof e != "symbol" ? e + "" : e, t), lt = (i, e, t) => e.has(i) || at("Cannot " + t);
var ie = (i, e, t) => (lt(i, e, "read from private field"), t ? t.call(i) : e.get(i)), ut = (i, e, t) => e.has(i) ? at("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), ct = (i, e, t, r) => (lt(i, e, "write to private field"), r ? r.call(i, t) : e.set(i, t), t);
function F() {
}
function si(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Wt(i) {
  return i();
}
function dt() {
  return /* @__PURE__ */ Object.create(null);
}
function se(i) {
  i.forEach(Wt);
}
function Dt(i) {
  return typeof i == "function";
}
function ge(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ae;
function q(i, e) {
  return i === e ? !0 : (Ae || (Ae = document.createElement("a")), Ae.href = e, i === Ae.href);
}
function ai(i) {
  return Object.keys(i).length === 0;
}
function li(i, e, t, r) {
  if (i) {
    const o = Ot(i, e, t, r);
    return i[0](o);
  }
}
function Ot(i, e, t, r) {
  return i[1] && r ? si(t.ctx.slice(), i[1](r(e))) : t.ctx;
}
function ui(i, e, t, r) {
  if (i[2] && r) {
    const o = i[2](r(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], c = Math.max(e.dirty.length, o.length);
      for (let n = 0; n < c; n += 1)
        l[n] = e.dirty[n] | o[n];
      return l;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function ci(i, e, t, r, o, l) {
  if (o) {
    const c = Ot(e, t, r, l);
    i.p(c, o);
  }
}
function di(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function ft(i) {
  return i ?? "";
}
function T(i, e) {
  i.appendChild(e);
}
function H(i, e, t) {
  i.insertBefore(e, t || null);
}
function A(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function R(i) {
  return document.createElement(i);
}
function re(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ue(i) {
  return document.createTextNode(i);
}
function J() {
  return ue(" ");
}
function fi() {
  return ue("");
}
function Q(i, e, t, r) {
  return i.addEventListener(e, t, r), () => i.removeEventListener(e, t, r);
}
function mi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function gi(i) {
  return Array.from(i.childNodes);
}
function Ce(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function mt(i, e) {
  i.value = e ?? "";
}
function le(i, e, t) {
  i.classList.toggle(e, !!t);
}
function hi(i, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: r });
}
let We;
function Te(i) {
  We = i;
}
function Rt() {
  if (!We) throw new Error("Function called outside component initialization");
  return We;
}
function bi(i) {
  Rt().$$.on_destroy.push(i);
}
function vi() {
  const i = Rt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = i.$$.callbacks[e];
    if (o) {
      const l = hi(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return o.slice().forEach((c) => {
        c.call(i, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function gt(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const Se = [], $e = [];
let ke = [];
const ht = [], Li = /* @__PURE__ */ Promise.resolve();
let et = !1;
function _i() {
  et || (et = !0, Li.then(It));
}
function tt(i) {
  ke.push(i);
}
const xe = /* @__PURE__ */ new Set();
let Ee = 0;
function It() {
  if (Ee !== 0)
    return;
  const i = We;
  do {
    try {
      for (; Ee < Se.length; ) {
        const e = Se[Ee];
        Ee++, Te(e), yi(e.$$);
      }
    } catch (e) {
      throw Se.length = 0, Ee = 0, e;
    }
    for (Te(null), Se.length = 0, Ee = 0; $e.length; ) $e.pop()();
    for (let e = 0; e < ke.length; e += 1) {
      const t = ke[e];
      xe.has(t) || (xe.add(t), t());
    }
    ke.length = 0;
  } while (Se.length);
  for (; ht.length; )
    ht.pop()();
  et = !1, xe.clear(), Te(i);
}
function yi(i) {
  if (i.fragment !== null) {
    i.update(), se(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(tt);
  }
}
function wi(i) {
  const e = [], t = [];
  ke.forEach((r) => i.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), ke = e;
}
const Be = /* @__PURE__ */ new Set();
let me;
function Fe() {
  me = {
    r: 0,
    c: [],
    p: me
    // parent group
  };
}
function He() {
  me.r || se(me.c), me = me.p;
}
function P(i, e) {
  i && i.i && (Be.delete(i), i.i(e));
}
function G(i, e, t, r) {
  if (i && i.o) {
    if (Be.has(i)) return;
    Be.add(i), me.c.push(() => {
      Be.delete(i), r && (t && i.d(1), r());
    }), i.o(e);
  } else r && r();
}
function bt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Ei(i, e) {
  G(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Si(i, e, t, r, o, l, c, n, f, u, d, b) {
  let m = i.length, w = l.length, _ = m;
  const U = {};
  for (; _--; ) U[i[_].key] = _;
  const E = [], S = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), W = [];
  for (_ = w; _--; ) {
    const v = b(o, l, _), N = t(v);
    let g = c.get(N);
    g ? W.push(() => g.p(v, e)) : (g = u(N, v), g.c()), S.set(N, E[_] = g), N in U && I.set(N, Math.abs(_ - U[N]));
  }
  const k = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  function O(v) {
    P(v, 1), v.m(n, d), c.set(v.key, v), d = v.first, w--;
  }
  for (; m && w; ) {
    const v = E[w - 1], N = i[m - 1], g = v.key, y = N.key;
    v === N ? (d = v.first, m--, w--) : S.has(y) ? !c.has(g) || k.has(g) ? O(v) : h.has(y) ? m-- : I.get(g) > I.get(y) ? (h.add(g), O(v)) : (k.add(y), m--) : (f(N, c), m--);
  }
  for (; m--; ) {
    const v = i[m];
    S.has(v.key) || f(v, c);
  }
  for (; w; ) O(E[w - 1]);
  return se(W), E;
}
function ce(i) {
  i && i.c();
}
function ne(i, e, t) {
  const { fragment: r, after_update: o } = i.$$;
  r && r.m(e, t), tt(() => {
    const l = i.$$.on_mount.map(Wt).filter(Dt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : se(l), i.$$.on_mount = [];
  }), o.forEach(tt);
}
function oe(i, e) {
  const t = i.$$;
  t.fragment !== null && (wi(t.after_update), se(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ki(i, e) {
  i.$$.dirty[0] === -1 && (Se.push(i), _i(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function he(i, e, t, r, o, l, c = null, n = [-1]) {
  const f = We;
  Te(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: F,
    not_equal: o,
    bound: dt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: dt(),
    dirty: n,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  c && c(u.root);
  let d = !1;
  if (u.ctx = t ? t(i, e.props || {}, (b, m, ...w) => {
    const _ = w.length ? w[0] : m;
    return u.ctx && o(u.ctx[b], u.ctx[b] = _) && (!u.skip_bound && u.bound[b] && u.bound[b](_), d && ki(i, b)), m;
  }) : [], u.update(), d = !0, se(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = gi(e.target);
      u.fragment && u.fragment.l(b), b.forEach(A);
    } else
      u.fragment && u.fragment.c();
    e.intro && P(i.$$.fragment), ne(i, e.target, e.anchor), It();
  }
  Te(f);
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
    oe(this, 1), this.$destroy = F;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Dt(t))
      return F;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const o = r.indexOf(t);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ai(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const pi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pi);
function Ni(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
    },
    m(r, o) {
      H(r, e, o), T(e, t);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(e);
    }
  };
}
class Ut extends be {
  constructor(e) {
    super(), he(this, e, null, Ni, ge, {});
  }
}
function Mi(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
    },
    m(r, o) {
      H(r, e, o), T(e, t);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(e);
    }
  };
}
class zt extends be {
  constructor(e) {
    super(), he(this, e, null, Mi, ge, {});
  }
}
function Ti(i) {
  let e, t;
  return {
    c() {
      e = R("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Ci(i) {
  let e, t;
  return {
    c() {
      e = R("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "reverse.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Wi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Di(i) {
  let e, t;
  return {
    c() {
      e = R("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Oi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Ri(i) {
  let e, t;
  return {
    c() {
      e = R("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Ii(i) {
  let e, t;
  return {
    c() {
      e = R("img"), q(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o);
    },
    p(r, o) {
      o & /*iconsBaseUrl*/
      8 && !q(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && a(e, "src", t), o & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function Ui(i) {
  let e, t, r, o;
  return {
    c() {
      e = R("img"), q(e.src, t = /*imageUrl*/
      i[5]) || a(e, "src", t), a(
        e,
        "alt",
        /*category*/
        i[4]
      ), a(e, "class", "svelte-ltkwvy");
    },
    m(l, c) {
      H(l, e, c), r || (o = Q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), r = !0);
    },
    p(l, c) {
      c & /*imageUrl*/
      32 && !q(e.src, t = /*imageUrl*/
      l[5]) && a(e, "src", t), c & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        l[4]
      );
    },
    d(l) {
      l && A(e), r = !1, o();
    }
  };
}
function vt(i) {
  let e, t;
  return {
    c() {
      e = R("span"), t = ue(
        /*placeType*/
        i[6]
      ), a(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, o) {
      H(r, e, o), T(e, t);
    },
    p(r, o) {
      o & /*placeType*/
      64 && Ce(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && A(e);
    }
  };
}
function zi(i) {
  var v, N;
  let e, t, r, o, l, c, n, f, u = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), d, b, m = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] && !/*feature*/
    i[0].address && /*feature*/
    ((v = i[0].properties) == null ? void 0 : v.kind) !== "road" && /*feature*/
    ((N = i[0].properties) == null ? void 0 : N.kind) !== "road_relation" && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), w, _, U = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), E, S, I;
  function W(g, y) {
    var $, D;
    return y & /*feature*/
    1 && (t = null), y & /*feature*/
    1 && (r = null), y & /*feature*/
    1 && (o = null), /*imageUrl*/
    g[5] ? Ui : (
      /*feature*/
      g[0].address ? Ii : (
        /*feature*/
        (($ = g[0].properties) == null ? void 0 : $.kind) === "road" || /*feature*/
        ((D = g[0].properties) == null ? void 0 : D.kind) === "road_relation" ? Ri : (t == null && (t = !!/*feature*/
        g[0].id.startsWith("address.")), t ? Oi : (r == null && (r = !!/*feature*/
        g[0].id.startsWith("postal_code.")), r ? Di : (o == null && (o = !!/*feature*/
        g[0].id.startsWith("poi.")), o ? Wi : (
          /*isReverse*/
          g[7] ? Ci : Ti
        ))))
      )
    );
  }
  let k = W(i, -1), h = k(i), O = m && vt(i);
  return {
    c() {
      e = R("li"), h.c(), l = J(), c = R("span"), n = R("span"), f = R("span"), d = ue(u), b = J(), O && O.c(), w = J(), _ = R("span"), E = ue(U), a(f, "class", "primary svelte-ltkwvy"), a(n, "class", "svelte-ltkwvy"), a(_, "class", "line2 svelte-ltkwvy"), a(c, "class", "texts svelte-ltkwvy"), a(e, "tabindex", "0"), a(
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
    m(g, y) {
      H(g, e, y), h.m(e, null), T(e, l), T(e, c), T(c, n), T(n, f), T(f, d), T(n, b), O && O.m(n, null), T(c, w), T(c, _), T(_, E), S || (I = [
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[12]
        ),
        Q(
          e,
          "focus",
          /*focus_handler*/
          i[13]
        )
      ], S = !0);
    },
    p(g, [y]) {
      var $, D;
      k === (k = W(g, y)) && h ? h.p(g, y) : (h.d(1), h = k(g), h && (h.c(), h.m(e, l))), y & /*feature*/
      1 && u !== (u = /*isReverse*/
      (g[7] ? (
        /*feature*/
        g[0].place_name
      ) : (
        /*feature*/
        g[0].place_name.replace(/,.*/, "")
      )) + "") && Ce(d, u), y & /*showPlaceType, feature, imageUrl*/
      37 && (m = /*showPlaceType*/
      g[2] === "always" || /*showPlaceType*/
      g[2] && !/*feature*/
      g[0].address && /*feature*/
      (($ = g[0].properties) == null ? void 0 : $.kind) !== "road" && /*feature*/
      ((D = g[0].properties) == null ? void 0 : D.kind) !== "road_relation" && !/*feature*/
      g[0].id.startsWith("address.") && !/*feature*/
      g[0].id.startsWith("postal_code.") && (!/*feature*/
      g[0].id.startsWith("poi.") || !/*imageUrl*/
      g[5]) && !/*isReverse*/
      g[7]), m ? O ? O.p(g, y) : (O = vt(g), O.c(), O.m(n, null)) : O && (O.d(1), O = null), y & /*feature*/
      1 && U !== (U = /*isReverse*/
      (g[7] ? "" : (
        /*feature*/
        g[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ce(E, U), y & /*selected*/
      2 && a(
        e,
        "data-selected",
        /*selected*/
        g[1]
      ), y & /*selected*/
      2 && le(
        e,
        "selected",
        /*selected*/
        g[1]
      );
    },
    i: F,
    o: F,
    d(g) {
      g && A(e), h.d(), O && O.d(), S = !1, se(I);
    }
  };
}
function Ai(i, e, t) {
  var W;
  let r, o, { feature: l } = e, { selected: c = !1 } = e, { showPlaceType: n } = e, { missingIconsCache: f } = e, { iconsBaseUrl: u } = e;
  const d = (W = l.properties) == null ? void 0 : W.categories;
  let b, m, w = 0, _ = l.place_type[0] === "reverse";
  function U() {
    m && f.add(m), t(10, w++, w);
  }
  function E(k) {
    gt.call(this, i, k);
  }
  function S(k) {
    gt.call(this, i, k);
  }
  const I = () => U();
  return i.$$set = (k) => {
    "feature" in k && t(0, l = k.feature), "selected" in k && t(1, c = k.selected), "showPlaceType" in k && t(2, n = k.showPlaceType), "missingIconsCache" in k && t(9, f = k.missingIconsCache), "iconsBaseUrl" in k && t(3, u = k.iconsBaseUrl);
  }, i.$$.update = () => {
    var k, h, O, v;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, r--, r), t(4, b = d == null ? void 0 : d[r]), t(5, m = b ? u + b.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!m || f.has(m)));
    i.$$.dirty & /*feature*/
    1 && t(6, o = l.id.startsWith("poi.") ? (h = (k = l.properties) == null ? void 0 : k.categories) == null ? void 0 : h.join(", ") : ((v = (O = l.properties) == null ? void 0 : O.place_type_name) == null ? void 0 : v[0]) ?? l.place_type[0]);
  }, t(11, r = (d == null ? void 0 : d.length) ?? 0), [
    l,
    c,
    n,
    u,
    b,
    m,
    o,
    _,
    U,
    f,
    w,
    r,
    E,
    S,
    I
  ];
}
class Bi extends be {
  constructor(e) {
    super(), he(this, e, Ai, zi, ge, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Fi(i) {
  let e;
  return {
    c() {
      e = R("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      H(t, e, r);
    },
    p: F,
    i: F,
    o: F,
    d(t) {
      t && A(e);
    }
  };
}
class Hi extends be {
  constructor(e) {
    super(), he(this, e, null, Fi, ge, {});
  }
}
function Pi(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
    },
    m(r, o) {
      H(r, e, o), T(e, t);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(e);
    }
  };
}
class ji extends be {
  constructor(e) {
    super(), he(this, e, null, Pi, ge, {});
  }
}
function Zi(i) {
  let e, t, r;
  return {
    c() {
      e = re("svg"), t = re("circle"), r = re("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(r, "d", "M12.063 12.063 7.635 7.635"), a(r, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(o, l) {
      H(o, e, l), T(e, t), T(e, r);
    },
    p: F,
    i: F,
    o: F,
    d(o) {
      o && A(e);
    }
  };
}
class Gi extends be {
  constructor(e) {
    super(), he(this, e, null, Zi, ge, {});
  }
}
function qi(i, e, t) {
  const r = e[1], o = e[0], l = r - o;
  return i === r && t ? i : ((i - o) % l + l) % l + o;
}
function Lt(i) {
  const e = [...i];
  return e[2] < e[0] && (e[2] += 360), e;
}
let Ne;
async function Qi(i, e, t) {
  const r = i == null ? void 0 : i.getCenterAndZoom();
  for (const o of e ?? [])
    if (!(r && (o.minZoom != null && o.minZoom > r[0] || o.maxZoom != null && o.maxZoom < r[0]))) {
      if (o.type === "fixed")
        return o.coordinates.join(",");
      e: if (o.type === "client-geolocation") {
        if (Ne && o.cachedLocationExpiry && Ne.time + o.cachedLocationExpiry > Date.now()) {
          if (!Ne.coords)
            break e;
          return Ne.coords;
        }
        let l;
        try {
          return l = await new Promise((c, n) => {
            t.signal.addEventListener("abort", () => {
              n(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (f) => {
                c(
                  [f.coords.longitude, f.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (f) => {
                n(f);
              },
              o
            );
          }), l;
        } catch {
        } finally {
          o.cachedLocationExpiry && (Ne = {
            time: Date.now(),
            coords: l
          });
        }
        if (t.signal.aborted)
          return;
      }
      if (o.type === "server-geolocation")
        return "ip";
      if (r && o.type === "map-center")
        return r[1].toFixed(6) + "," + r[2].toFixed(6);
    }
}
const Vi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, _t = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, yt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, wt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Et = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, St = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Ki(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((w) => Number(w.trim())), t = Number(e[0]), r = Number(e[1]), o = Math.abs(t), l = Math.abs(r), c = t > 0 ? "N" : "S", n = r > 0 ? "E" : "W";
    let f;
    i == "DD" && (f = `${o}° ${c}, ${l}° ${n}`);
    const u = Math.floor(o), d = Math.floor(l), b = (o - u) * 60, m = (l - d) * 60;
    if (i == "DM") {
      let w = kt(b, 3).toFixed(3).padStart(6, "0"), _ = kt(m, 3).toFixed(3).padStart(6, "0");
      w.endsWith(".000") && _.endsWith(".000") && (w = w.replace(/\.000$/, ""), _ = _.replace(/\.000$/, "")), f = `${u}° ${w}' ${c}, ${d}° ${_}' ${n}`;
    }
    if (i == "DMS") {
      const w = Math.floor(b), _ = Math.floor(m);
      let U = ((b - w) * 60).toFixed(1).padStart(4, "0"), E = ((m - _) * 60).toFixed(1).padStart(4, "0");
      const S = w.toString().padStart(2, "0"), I = _.toString().padStart(2, "0");
      U.endsWith(".0") && E.endsWith(".0") && (U = U.replace(/\.0$/, ""), E = E.replace(/\.0$/, "")), f = `${u}° ${S}' ${U}" ${c}, ${d}° ${I}' ${E}" ${n}`;
    }
    return f;
  } else
    throw new Error("no decimal coordinates to convert");
}
function kt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function it(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, r = null, o = "", l = "", c = null, n = [], f = !1;
  if (Vi.test(i))
    throw new Error("invalid coordinate value");
  if (_t.test(i))
    if (n = _t.exec(i), f = Me(n), f)
      t = Math.abs(n[1]) + n[2] / 60, Number(n[1]) < 0 && (t *= -1), r = Math.abs(n[3]) + n[4] / 60, Number(n[3]) < 0 && (r *= -1), c = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (yt.test(i))
    if (n = yt.exec(i), f = Me(n), f) {
      if (t = n[2], r = n[6], t.includes(",") && (t = t.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), c = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      n[1] ? (o = n[1], l = n[5]) : n[4] && (o = n[4], l = n[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (wt.test(i))
    if (n = wt.exec(i), f = Me(n), f)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60, c = "DM"), n[6] && (t += n[6].replace(",", ".") / 3600, c = "DMS"), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[9])), n[11] && (r += n[11] / 60), n[13] && (r += n[13].replace(",", ".") / 3600), parseInt(n[9]) < 0 && (r = -1 * r), n[1] ? (o = n[1], l = n[8]) : n[7] && (o = n[7], l = n[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Et.test(i))
    if (n = Et.exec(i), f = Me(n), f)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4] / 60, c = "DM"), n[6] && (t += n[6] / 3600, c = "DMS"), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12] / 60), n[14] && (r += n[14] / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], l = n[9]) : n[8] && (o = n[8], l = n[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (St.test(i)) {
    if (n = St.exec(i), f = Me(n), n.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (f)
      t = Math.abs(parseInt(n[2])), n[4] && (t += n[4].replace(",", ".") / 60, c = "DM"), n[6] && (t += n[6].replace(",", ".") / 3600, c = "DMS"), parseInt(n[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(n[10])), n[12] && (r += n[12].replace(",", ".") / 60), n[14] && (r += n[14].replace(",", ".") / 3600), parseInt(n[10]) < 0 && (r = -1 * r), n[1] ? (o = n[1], l = n[9]) : n[8] && (o = n[8], l = n[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (f) {
    if (Math.abs(r) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (o && !l || !o && l)
      throw new Error("invalid coordinates value");
    if (o && o == l)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), r.toString().includes(",") && (r = r.replace(",", "."));
    let u = /S|SOUTH/i;
    u.test(o) && t > 0 && (t = -1 * t), u = /W|WEST/i, u.test(l) && r > 0 && (r = -1 * r);
    const d = n[0].trim();
    let b, m;
    const w = /[,/;\u0020]/g, _ = d.match(w);
    if (_ == null) {
      const S = Math.floor(i.length / 2);
      b = d.substring(0, S).trim(), m = d.substring(S).trim();
    } else {
      let S;
      _.length % 2 == 1 ? S = Math.floor(_.length / 2) : S = _.length / 2 - 1;
      let I = 0;
      if (S == 0)
        I = d.indexOf(_[0]), b = d.substring(0, I).trim(), m = d.substring(I + 1).trim();
      else {
        let W = 0, k = 0;
        for (; W <= S; )
          I = d.indexOf(_[W], k), k = I + 1, W++;
        b = d.substring(0, I).trim(), m = d.substring(I + 1).trim();
      }
    }
    const U = b.split(".");
    if (U.length == 2 && U[1] == 0 && U[1].length != 2)
      throw new Error("invalid coordinates format");
    const E = m.split(".");
    if (E.length == 2 && E[1] == 0 && E[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(b) || /^\d+$/.test(m))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), r = Number(Number(r).toFixed(e)), Object.freeze({
      verbatimCoordinates: d,
      verbatimLatitude: b,
      verbatimLongitude: m,
      decimalLatitude: t,
      decimalLongitude: r,
      decimalCoordinates: `${t},${r}`,
      originalFormat: c,
      closeEnough: Ji,
      toCoordinateFormat: Ki
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Me(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, r = /[eastsouthnorthwest]+/i, o = e.length / 2;
  for (let l = 0; l < o; l++) {
    const c = e[l], n = e[l + o], f = t.test(c) && t.test(n), u = r.test(c) && r.test(n), d = c == n;
    if (!(c == null && n == null)) {
      if (c == null || n == null)
        return !1;
      if (f || u || d)
        continue;
      return !1;
    }
  }
  return !0;
}
function pt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Ji(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return pt(this.decimalLatitude, Number(e[0])) && pt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Xi = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
it.to = Xi;
const Yi = [
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
], xi = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, $i = [
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
], er = [
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
function tr() {
  const i = [];
  return Yi.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...xi });
  }), [...i, ...$i, ...er];
}
const ir = tr();
it.formats = ir.map((i) => i.verbatimCoordinates);
const rr = it;
function Nt(i, e, t) {
  const r = i.slice();
  return r[81] = e[t], r[83] = t, r;
}
function Mt(i) {
  let e, t;
  return e = new Hi({}), {
    c() {
      ce(e.$$.fragment);
    },
    m(r, o) {
      ne(e, r, o), t = !0;
    },
    i(r) {
      t || (P(e.$$.fragment, r), t = !0);
    },
    o(r) {
      G(e.$$.fragment, r), t = !1;
    },
    d(r) {
      oe(e, r);
    }
  };
}
function Tt(i) {
  let e, t, r, o, l;
  return t = new ji({}), {
    c() {
      e = R("button"), ce(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), a(e, "class", "svelte-zh3kmv"), le(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(c, n) {
      H(c, e, n), ne(t, e, null), r = !0, o || (l = Q(
        e,
        "click",
        /*click_handler_2*/
        i[67]
      ), o = !0);
    },
    p(c, n) {
      (!r || n[0] & /*reverseButtonTitle*/
      512) && a(
        e,
        "title",
        /*reverseButtonTitle*/
        c[9]
      ), (!r || n[0] & /*reverseActive*/
      1) && le(
        e,
        "active",
        /*reverseActive*/
        c[0]
      );
    },
    i(c) {
      r || (P(t.$$.fragment, c), r = !0);
    },
    o(c) {
      G(t.$$.fragment, c), r = !1;
    },
    d(c) {
      c && A(e), oe(t), o = !1, l();
    }
  };
}
function nr(i) {
  let e, t = [], r = /* @__PURE__ */ new Map(), o, l, c, n = bt(
    /*listFeatures*/
    i[14]
  );
  const f = (u) => (
    /*feature*/
    u[81].id + /*feature*/
    (u[81].address ? "," + /*feature*/
    u[81].address : "")
  );
  for (let u = 0; u < n.length; u += 1) {
    let d = Nt(i, n, u), b = f(d);
    r.set(b, t[u] = Ct(b, d));
  }
  return {
    c() {
      e = R("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      a(e, "class", "svelte-zh3kmv");
    },
    m(u, d) {
      H(u, e, d);
      for (let b = 0; b < t.length; b += 1)
        t[b] && t[b].m(e, null);
      o = !0, l || (c = [
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          i[71]
        ),
        Q(
          e,
          "blur",
          /*blur_handler_1*/
          i[72]
        )
      ], l = !0);
    },
    p(u, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (n = bt(
        /*listFeatures*/
        u[14]
      ), Fe(), t = Si(t, d, f, 1, u, n, r, e, Ei, Ct, null, Nt), He());
    },
    i(u) {
      if (!o) {
        for (let d = 0; d < n.length; d += 1)
          P(t[d]);
        o = !0;
      }
    },
    o(u) {
      for (let d = 0; d < t.length; d += 1)
        G(t[d]);
      o = !1;
    },
    d(u) {
      u && A(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      l = !1, se(c);
    }
  };
}
function or(i) {
  let e, t, r, o, l, c;
  return t = new zt({}), {
    c() {
      e = R("div"), ce(t.$$.fragment), r = J(), o = R("div"), l = ue(
        /*noResultsMessage*/
        i[7]
      ), a(o, "class", "svelte-zh3kmv"), a(e, "class", "no-results svelte-zh3kmv");
    },
    m(n, f) {
      H(n, e, f), ne(t, e, null), T(e, r), T(e, o), T(o, l), c = !0;
    },
    p(n, f) {
      (!c || f[0] & /*noResultsMessage*/
      128) && Ce(
        l,
        /*noResultsMessage*/
        n[7]
      );
    },
    i(n) {
      c || (P(t.$$.fragment, n), c = !0);
    },
    o(n) {
      G(t.$$.fragment, n), c = !1;
    },
    d(n) {
      n && A(e), oe(t);
    }
  };
}
function sr(i) {
  let e = "", t;
  return {
    c() {
      t = ue(e);
    },
    m(r, o) {
      H(r, t, o);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && A(t);
    }
  };
}
function ar(i) {
  let e, t, r, o, l, c, n, f, u, d, b;
  return t = new zt({}), f = new Ut({}), {
    c() {
      e = R("div"), ce(t.$$.fragment), r = J(), o = R("div"), l = ue(
        /*errorMessage*/
        i[6]
      ), c = J(), n = R("button"), ce(f.$$.fragment), a(o, "class", "svelte-zh3kmv"), a(n, "class", "svelte-zh3kmv"), a(e, "class", "error svelte-zh3kmv");
    },
    m(m, w) {
      H(m, e, w), ne(t, e, null), T(e, r), T(e, o), T(o, l), T(e, c), T(e, n), ne(f, n, null), u = !0, d || (b = Q(
        n,
        "click",
        /*click_handler_3*/
        i[68]
      ), d = !0);
    },
    p(m, w) {
      (!u || w[0] & /*errorMessage*/
      64) && Ce(
        l,
        /*errorMessage*/
        m[6]
      );
    },
    i(m) {
      u || (P(t.$$.fragment, m), P(f.$$.fragment, m), u = !0);
    },
    o(m) {
      G(t.$$.fragment, m), G(f.$$.fragment, m), u = !1;
    },
    d(m) {
      m && A(e), oe(t), oe(f), d = !1, b();
    }
  };
}
function Ct(i, e) {
  let t, r, o;
  function l() {
    return (
      /*mouseenter_handler*/
      e[69](
        /*i*/
        e[83]
      )
    );
  }
  function c() {
    return (
      /*focus_handler_1*/
      e[70](
        /*feature*/
        e[81]
      )
    );
  }
  return r = new Bi({
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
  }), r.$on("mouseenter", l), r.$on("focus", c), {
    key: i,
    first: null,
    c() {
      t = fi(), ce(r.$$.fragment), this.first = t;
    },
    m(n, f) {
      H(n, t, f), ne(r, n, f), o = !0;
    },
    p(n, f) {
      e = n;
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
    i(n) {
      o || (P(r.$$.fragment, n), o = !0);
    },
    o(n) {
      G(r.$$.fragment, n), o = !1;
    },
    d(n) {
      n && A(t), oe(r, n);
    }
  };
}
function lr(i) {
  let e, t, r, o, l, c, n, f, u, d, b, m, w, _, U, E, S, I, W, k, h, O = !1;
  l = new Gi({}), b = new Ut({});
  let v = (
    /*abortController*/
    i[19] && Mt()
  ), N = (
    /*enableReverse*/
    i[5] === !0 && Tt(i)
  );
  const g = (
    /*#slots*/
    i[59].default
  ), y = li(
    g,
    i,
    /*$$scope*/
    i[58],
    null
  ), $ = [ar, sr, or, nr], D = [];
  function ve(L, B) {
    var V, Le;
    return (
      /*error*/
      L[18] ? 0 : (
        /*focusedDelayed*/
        L[16] ? (
          /*listFeatures*/
          ((V = L[14]) == null ? void 0 : V.length) === 0 ? 2 : (
            /*focusedDelayed*/
            L[16] && /*listFeatures*/
            ((Le = L[14]) != null && Le.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(E = ve(i)) && (S = D[E] = $[E](i)), {
    c() {
      e = J(), t = R("form"), r = R("div"), o = R("button"), ce(l.$$.fragment), c = J(), n = R("input"), f = J(), u = R("div"), d = R("button"), ce(b.$$.fragment), m = J(), v && v.c(), w = J(), N && N.c(), _ = J(), y && y.c(), U = J(), S && S.c(), a(o, "class", "search-button svelte-zh3kmv"), a(o, "type", "button"), a(
        n,
        "placeholder",
        /*placeholder*/
        i[8]
      ), a(
        n,
        "aria-label",
        /*placeholder*/
        i[8]
      ), a(n, "class", "svelte-zh3kmv"), a(d, "type", "button"), a(
        d,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), a(d, "class", "svelte-zh3kmv"), a(u, "class", "clear-button-container svelte-zh3kmv"), le(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(r, "class", "input-group svelte-zh3kmv"), a(t, "tabindex", "0"), a(t, "class", I = ft(
        /*className*/
        i[2]
      ) + " svelte-zh3kmv"), le(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(L, B) {
      H(L, e, B), H(L, t, B), T(t, r), T(r, o), ne(l, o, null), T(r, c), T(r, n), i[61](n), mt(
        n,
        /*searchValue*/
        i[1]
      ), T(r, f), T(r, u), T(u, d), ne(b, d, null), T(u, m), v && v.m(u, null), T(r, w), N && N.m(r, null), T(r, _), y && y.m(r, null), T(t, U), ~E && D[E].m(t, null), W = !0, k || (h = [
        Q(
          o,
          "click",
          /*click_handler*/
          i[60]
        ),
        Q(
          n,
          "input",
          /*input_1_input_handler*/
          i[62]
        ),
        Q(
          n,
          "focus",
          /*focus_handler*/
          i[63]
        ),
        Q(
          n,
          "blur",
          /*blur_handler*/
          i[64]
        ),
        Q(
          n,
          "keydown",
          /*handleKeyDown*/
          i[22]
        ),
        Q(
          n,
          "input",
          /*input_handler*/
          i[65]
        ),
        Q(
          d,
          "click",
          /*click_handler_1*/
          i[66]
        ),
        Q(t, "submit", mi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], k = !0);
    },
    p(L, B) {
      (!W || B[0] & /*placeholder*/
      256) && a(
        n,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!W || B[0] & /*placeholder*/
      256) && a(
        n,
        "aria-label",
        /*placeholder*/
        L[8]
      ), B[0] & /*searchValue*/
      2 && n.value !== /*searchValue*/
      L[1] && mt(
        n,
        /*searchValue*/
        L[1]
      ), (!W || B[0] & /*clearButtonTitle*/
      8) && a(
        d,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[19] ? v ? B[0] & /*abortController*/
      524288 && P(v, 1) : (v = Mt(), v.c(), P(v, 1), v.m(u, null)) : v && (Fe(), G(v, 1, 1, () => {
        v = null;
      }), He()), (!W || B[0] & /*searchValue*/
      2) && le(
        u,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? N ? (N.p(L, B), B[0] & /*enableReverse*/
      32 && P(N, 1)) : (N = Tt(L), N.c(), P(N, 1), N.m(r, _)) : N && (Fe(), G(N, 1, 1, () => {
        N = null;
      }), He()), y && y.p && (!W || B[1] & /*$$scope*/
      134217728) && ci(
        y,
        g,
        L,
        /*$$scope*/
        L[58],
        W ? ui(
          g,
          /*$$scope*/
          L[58],
          B,
          null
        ) : di(
          /*$$scope*/
          L[58]
        ),
        null
      );
      let V = E;
      E = ve(L), E === V ? ~E && D[E].p(L, B) : (S && (Fe(), G(D[V], 1, 1, () => {
        D[V] = null;
      }), He()), ~E ? (S = D[E], S ? S.p(L, B) : (S = D[E] = $[E](L), S.c()), P(S, 1), S.m(t, null)) : S = null), (!W || B[0] & /*className*/
      4 && I !== (I = ft(
        /*className*/
        L[2]
      ) + " svelte-zh3kmv")) && a(t, "class", I), (!W || B[0] & /*className, collapsed, searchValue*/
      22) && le(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      W || (P(O), P(l.$$.fragment, L), P(b.$$.fragment, L), P(v), P(N), P(y, L), P(S), W = !0);
    },
    o(L) {
      G(O), G(l.$$.fragment, L), G(b.$$.fragment, L), G(v), G(N), G(y, L), G(S), W = !1;
    },
    d(L) {
      L && (A(e), A(t)), oe(l), i[61](null), oe(b), v && v.d(), N && N.d(), y && y.d(L), ~E && D[E].d(), k = !1, se(h);
    }
  };
}
function ur(i, e, t) {
  let r, { $$slots: o = {}, $$scope: l } = e, { class: c = void 0 } = e, { apiKey: n } = e, { bbox: f = void 0 } = e, { clearButtonTitle: u = "clear" } = e, { clearOnBlur: d = !1 } = e, { collapsed: b = !1 } = e, { country: m = void 0 } = e, { debounceSearch: w = 200 } = e, { enableReverse: _ = !1 } = e, { errorMessage: U = "Something went wrong…" } = e, { filter: E = () => !0 } = e, { flyTo: S = !0 } = e, { fuzzyMatch: I = !0 } = e, { language: W = void 0 } = e, { limit: k = void 0 } = e, { mapController: h = void 0 } = e, { minLength: O = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: N = "Search" } = e, { proximity: g = [{ type: "server-geolocation" }] } = e, { reverseActive: y = _ === "always" } = e, { reverseButtonTitle: $ = "toggle reverse geocoding" } = e, { searchValue: D = "" } = e, { showFullGeometry: ve = !0 } = e, { showPlaceType: L = "ifNeeded" } = e, { showResultsWhileTyping: B = !0 } = e, { selectFirst: V = !0 } = e, { flyToSelected: Le = !1 } = e, { markerOnSelected: De = !0 } = e, { types: de = void 0 } = e, { excludeTypes: Oe = !1 } = e, { zoom: pe = 16 } = e, { maxZoom: _e = 18 } = e, { apiUrl: Pe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: je = {} } = e, { iconsBaseUrl: rt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.3.1/icons/" } = e, { adjustUrlQuery: Ze = () => {
  } } = e;
  function At() {
    ee.focus();
  }
  function Bt() {
    ee.blur();
  }
  function nt(s, Z = !0, K = !1) {
    t(1, D = s), Z ? (t(15, z = -1), st()) : (Ve(!K, K), setTimeout(() => {
      ee.focus(), ee.select();
    }));
  }
  function Ft() {
    t(14, M = void 0), t(55, p = void 0), t(15, z = -1);
  }
  function Ht() {
    t(54, j = []), t(55, p = void 0);
  }
  let ye = !1, M, j, p, ot = "", ee, z = -1, te, Re = [], fe, we, Ie, Ge;
  const Pt = /* @__PURE__ */ new Set(), ae = vi();
  bi(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setMarkers(void 0, void 0));
  });
  function st(s) {
    if (we && (clearTimeout(we), we = void 0), z > -1 && M)
      t(55, p = M[z]), t(1, D = p.place_type[0] === "reverse" ? p.place_name : p.place_name.replace(/,.*/, "")), t(18, te = void 0), t(54, j = void 0), t(15, z = -1);
    else if (D) {
      const Z = s || !qe(D);
      Qe(D, { exact: !0 }).then(() => {
        t(54, j = M), t(55, p = void 0), Z && jt();
      }).catch((K) => t(18, te = K));
    }
  }
  function qe(s) {
    try {
      return rr(s, 6);
    } catch {
      return !1;
    }
  }
  async function Qe(s, { byId: Z = !1, exact: K = !1 } = {}) {
    t(18, te = void 0), fe == null || fe.abort();
    const X = new AbortController();
    t(19, fe = X);
    try {
      const C = qe(s), Y = new URLSearchParams();
      if (W !== void 0 && Y.set("language", Array.isArray(W) ? W.join(",") : W ?? ""), de && Y.set("types", de.join(",")), Oe && Y.set("excludeTypes", String(Oe)), f && Y.set("bbox", f.map((ze) => ze.toFixed(6)).join(",")), m && Y.set("country", Array.isArray(m) ? m.join(",") : m), !Z && !C) {
        const ze = await Qi(h, g, X);
        ze && Y.set("proximity", ze), (K || !B) && Y.set("autocomplete", "false"), Y.set("fuzzyMatch", String(I));
      }
      k !== void 0 && (!C || (de == null ? void 0 : de.length) === 1) && Y.set("limit", String(k)), Y.set("key", n), Ze(Y);
      const Ue = Pe + "/" + encodeURIComponent(C ? C.decimalLongitude + "," + C.decimalLatitude : s) + ".json?" + Y.toString();
      if (Ue === ot) {
        Z ? (t(14, M = void 0), t(55, p = Re[0])) : t(14, M = Re);
        return;
      }
      ot = Ue;
      const Je = await fetch(Ue, { signal: X.signal, ...je });
      if (!Je.ok)
        throw new Error(await Je.text());
      const Xe = await Je.json();
      ae("response", { url: Ue, featureCollection: Xe }), Z ? (t(14, M = void 0), t(55, p = Xe.features[0]), Re = [p]) : (t(14, M = Xe.features.filter(E)), C && M.unshift({
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
      }), Re = M, C && ee.focus());
    } catch (C) {
      if (C && typeof C == "object" && "name" in C && C.name === "AbortError")
        return;
      throw C;
    } finally {
      X === fe && t(19, fe = void 0);
    }
  }
  function jt() {
    var K;
    if (!(j != null && j.length) || !S)
      return;
    const s = [180, 90, -180, -90], Z = !j.some((X) => !X.matching_text);
    for (const X of j)
      if (Z || !X.matching_text)
        for (const C of [0, 1, 2, 3])
          s[C] = Math[C < 2 ? "min" : "max"](s[C], ((K = X.bbox) == null ? void 0 : K[C]) ?? X.center[C % 2]);
    h && j.length > 0 && (p && s[0] === s[2] && s[1] === s[3] ? h.flyTo(p.center, pe) : h.fitBounds(Lt(s), 50, _e));
  }
  function Zt(s) {
    t(0, y = _ === "always"), t(14, M = void 0), t(55, p = void 0), t(15, z = -1), nt(s[1].toFixed(6) + ", " + qi(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Gt(s) {
    if (!M)
      return;
    let Z = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    Z && (z === (V ? 0 : -1) && Z === -1 && t(15, z = M.length), t(15, z += Z), z >= M.length && t(15, z = -1), z < 0 && V && t(15, z = 0), s.preventDefault());
  }
  function Ve(s = !0, Z = !1) {
    if (t(18, te = void 0), B || Z) {
      if (we && clearTimeout(we), D.length < O)
        return;
      const K = D;
      we = window.setTimeout(
        () => {
          Qe(K).catch((X) => t(18, te = X));
        },
        s ? w : 0
      );
    } else
      t(14, M = void 0), t(18, te = void 0);
  }
  function Ke(s) {
    t(55, p = s), t(1, D = s.place_name), t(15, z = -1);
  }
  const qt = () => ee.focus();
  function Qt(s) {
    $e[s ? "unshift" : "push"](() => {
      ee = s, t(17, ee);
    });
  }
  function Vt() {
    D = this.value, t(1, D), t(13, ye), t(27, d);
  }
  const Kt = () => t(13, ye = !0), Jt = () => t(13, ye = !1), Xt = () => Ve(), Yt = () => {
    t(1, D = ""), ee.focus();
  }, xt = () => t(0, y = !y), $t = () => t(18, te = void 0), ei = (s) => t(15, z = s), ti = (s) => Ke(s), ii = () => {
    V || t(15, z = -1);
  }, ri = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, c = s.class), "apiKey" in s && t(25, n = s.apiKey), "bbox" in s && t(26, f = s.bbox), "clearButtonTitle" in s && t(3, u = s.clearButtonTitle), "clearOnBlur" in s && t(27, d = s.clearOnBlur), "collapsed" in s && t(4, b = s.collapsed), "country" in s && t(28, m = s.country), "debounceSearch" in s && t(29, w = s.debounceSearch), "enableReverse" in s && t(5, _ = s.enableReverse), "errorMessage" in s && t(6, U = s.errorMessage), "filter" in s && t(30, E = s.filter), "flyTo" in s && t(31, S = s.flyTo), "fuzzyMatch" in s && t(32, I = s.fuzzyMatch), "language" in s && t(33, W = s.language), "limit" in s && t(34, k = s.limit), "mapController" in s && t(35, h = s.mapController), "minLength" in s && t(36, O = s.minLength), "noResultsMessage" in s && t(7, v = s.noResultsMessage), "placeholder" in s && t(8, N = s.placeholder), "proximity" in s && t(37, g = s.proximity), "reverseActive" in s && t(0, y = s.reverseActive), "reverseButtonTitle" in s && t(9, $ = s.reverseButtonTitle), "searchValue" in s && t(1, D = s.searchValue), "showFullGeometry" in s && t(38, ve = s.showFullGeometry), "showPlaceType" in s && t(10, L = s.showPlaceType), "showResultsWhileTyping" in s && t(39, B = s.showResultsWhileTyping), "selectFirst" in s && t(11, V = s.selectFirst), "flyToSelected" in s && t(40, Le = s.flyToSelected), "markerOnSelected" in s && t(41, De = s.markerOnSelected), "types" in s && t(42, de = s.types), "excludeTypes" in s && t(43, Oe = s.excludeTypes), "zoom" in s && t(44, pe = s.zoom), "maxZoom" in s && t(45, _e = s.maxZoom), "apiUrl" in s && t(46, Pe = s.apiUrl), "fetchParameters" in s && t(47, je = s.fetchParameters), "iconsBaseUrl" in s && t(12, rt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(48, Ze = s.adjustUrlQuery), "$$scope" in s && t(58, l = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    32 && t(0, y = _ === "always"), i.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      t(16, Ie = ye), d && !ye && t(1, D = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    32 && D.length < O && (t(55, p = void 0), t(14, M = void 0), t(18, te = void 0), t(54, j = M)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && ve && p && !p.address && p.geometry.type === "Point" && p.place_type[0] !== "reverse" && Qe(p.id, { byId: !0 }).catch((s) => t(18, te = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (h && p && p.id !== Ge && S && (!p.bbox || p.bbox[0] === p.bbox[2] && p.bbox[1] === p.bbox[3] ? h.flyTo(p.center, p.id.startsWith("poi.") || p.id.startsWith("address.") ? _e : pe) : h.fitBounds(Lt(p.bbox), 50, _e), t(14, M = void 0), t(54, j = void 0), t(15, z = -1)), t(56, Ge = p == null ? void 0 : p.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && V && M != null && M.length && t(15, z = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (V || t(15, z = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    8388608 && j !== M && t(54, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && h && h.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          y && Zt(s.coordinates);
          break;
        case "markerClick":
          {
            const Z = M == null ? void 0 : M.find((K) => K.id === s.id);
            Z && Ke(Z);
          }
          break;
        case "markerMouseEnter":
          j && t(15, z = Ie ? (M == null ? void 0 : M.findIndex((Z) => Z.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, z = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(57, r = M == null ? void 0 : M[z]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && h && r && S && Le && h.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? _e : pe), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (De || h == null || h.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && h && De && !j && (h.setMarkers(r ? [r] : void 0, void 0), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && h && h.setMarkers(j, p), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && j && h && h.setSelectedMarker(z), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16 && h) {
      const s = qe(D);
      h.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    67108864 && ae("select", r), i.$$.dirty[1] & /*picked*/
    16777216 && ae("pick", p), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && ae("optionsVisibilityChange", Ie && !!M), i.$$.dirty[0] & /*listFeatures*/
    16384 && ae("featuresListed", M), i.$$.dirty[1] & /*markedFeatures*/
    8388608 && ae("featuresMarked", j), i.$$.dirty[0] & /*reverseActive*/
    1 && ae("reverseToggle", y), i.$$.dirty[0] & /*searchValue*/
    2 && ae("queryChange", D), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && h && h.indicateReverse(y);
  }, [
    y,
    D,
    c,
    u,
    b,
    _,
    U,
    v,
    N,
    $,
    L,
    V,
    rt,
    ye,
    M,
    z,
    Ie,
    ee,
    te,
    fe,
    Pt,
    st,
    Gt,
    Ve,
    Ke,
    n,
    f,
    d,
    m,
    w,
    E,
    S,
    I,
    W,
    k,
    h,
    O,
    g,
    ve,
    B,
    Le,
    De,
    de,
    Oe,
    pe,
    _e,
    Pe,
    je,
    Ze,
    At,
    Bt,
    nt,
    Ft,
    Ht,
    j,
    p,
    Ge,
    r,
    l,
    o,
    qt,
    Qt,
    Vt,
    Kt,
    Jt,
    Xt,
    Yt,
    xt,
    $t,
    ei,
    ti,
    ii,
    ri
  ];
}
let cr = class extends be {
  constructor(e) {
    super(), he(
      this,
      e,
      ur,
      lr,
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
const dr = new FinalizationRegistry((i) => {
  i.$destroy();
});
var x;
class gr extends EventTarget {
  constructor({ target: t, ...r }) {
    super();
    ut(this, x);
    ct(this, x, new cr({
      target: t,
      props: r
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
      ie(this, x).$on(o, (l) => this.dispatchEvent(l));
    dr.register(this, ie(this, x));
  }
  setOptions(t) {
    ie(this, x).$set(t);
  }
  setQuery(t, r = !0) {
    var o;
    (o = ie(this, x)) == null || o.setQuery(t, r);
  }
  clearMap() {
    var t;
    (t = ie(this, x)) == null || t.clearMap();
  }
  clearList() {
    var t;
    (t = ie(this, x)) == null || t.clearList();
  }
  focus() {
    var t;
    (t = ie(this, x)) == null || t.focus();
  }
  blur() {
    var t;
    (t = ie(this, x)) == null || t.blur();
  }
}
x = new WeakMap();
export {
  gr as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
