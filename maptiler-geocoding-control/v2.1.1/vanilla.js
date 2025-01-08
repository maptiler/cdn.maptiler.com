var Ri = Object.defineProperty;
var Ui = Object.getPrototypeOf;
var Ii = Reflect.get;
var Rt = (i) => {
  throw TypeError(i);
};
var Ai = (i, e, t) => e in i ? Ri(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var gt = (i, e, t) => Ai(i, typeof e != "symbol" ? e + "" : e, t), ht = (i, e, t) => e.has(i) || Rt("Cannot " + t);
var re = (i, e, t) => (ht(i, e, "read from private field"), t ? t.call(i) : e.get(i)), bt = (i, e, t) => e.has(i) ? Rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Ut = (i, e, t, n) => (ht(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t), It = (i, e, t) => (ht(i, e, "access private method"), t);
var At = (i, e, t) => Ii(Ui(i), t, e);
function P() {
}
function Pi(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function ii(i) {
  return i();
}
function Pt() {
  return /* @__PURE__ */ Object.create(null);
}
function me(i) {
  i.forEach(ii);
}
function ni(i) {
  return typeof i == "function";
}
function we(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ye;
function X(i, e) {
  return i === e ? !0 : (Ye || (Ye = document.createElement("a")), Ye.href = e, i === Ye.href);
}
function Bi(i) {
  return Object.keys(i).length === 0;
}
function Fi(i, e, t, n) {
  if (i) {
    const r = ri(i, e, t, n);
    return i[0](r);
  }
}
function ri(i, e, t, n) {
  return i[1] && n ? Pi(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function ji(i, e, t, n) {
  return i[2], e.dirty;
}
function Gi(i, e, t, n, r, l) {
  if (r) {
    const c = ri(e, t, n, l);
    i.p(c, r);
  }
}
function Hi(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function $e(i) {
  return i ?? "";
}
function M(i, e) {
  i.appendChild(e);
}
function B(i, e, t) {
  i.insertBefore(e, t || null);
}
function I(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function R(i) {
  return document.createElement(i);
}
function ce(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function be(i) {
  return document.createTextNode(i);
}
function ee() {
  return be(" ");
}
function Zi() {
  return be("");
}
function q(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function qi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Qi(i) {
  return Array.from(i.childNodes);
}
function Pe(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Bt(i, e) {
  i.value = e ?? "";
}
function Ce(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Ki(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Be;
function Ae(i) {
  Be = i;
}
function si() {
  if (!Be) throw new Error("Function called outside component initialization");
  return Be;
}
function Vi(i) {
  si().$$.on_destroy.push(i);
}
function oi() {
  const i = si();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const l = Ki(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((c) => {
        c.call(i, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function Yi(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Me = [], Lt = [];
let We = [];
const Ft = [], Xi = /* @__PURE__ */ Promise.resolve();
let _t = !1;
function Ji() {
  _t || (_t = !0, Xi.then(ai));
}
function yt(i) {
  We.push(i);
}
const vt = /* @__PURE__ */ new Set();
let ke = 0;
function ai() {
  if (ke !== 0)
    return;
  const i = Be;
  do {
    try {
      for (; ke < Me.length; ) {
        const e = Me[ke];
        ke++, Ae(e), xi(e.$$);
      }
    } catch (e) {
      throw Me.length = 0, ke = 0, e;
    }
    for (Ae(null), Me.length = 0, ke = 0; Lt.length; ) Lt.pop()();
    for (let e = 0; e < We.length; e += 1) {
      const t = We[e];
      vt.has(t) || (vt.add(t), t());
    }
    We.length = 0;
  } while (Me.length);
  for (; Ft.length; )
    Ft.pop()();
  _t = !1, vt.clear(), Ae(i);
}
function xi(i) {
  if (i.fragment !== null) {
    i.update(), me(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(yt);
  }
}
function $i(i) {
  const e = [], t = [];
  We.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), We = e;
}
const Xe = /* @__PURE__ */ new Set();
let ye;
function Je() {
  ye = {
    r: 0,
    c: [],
    p: ye
    // parent group
  };
}
function xe() {
  ye.r || me(ye.c), ye = ye.p;
}
function G(i, e) {
  i && i.i && (Xe.delete(i), i.i(e));
}
function Q(i, e, t, n) {
  if (i && i.o) {
    if (Xe.has(i)) return;
    Xe.add(i), ye.c.push(() => {
      Xe.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function jt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function en(i, e) {
  Q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function tn(i, e, t, n, r, l, c, s, d, u, f, g) {
  let b = i.length, _ = l.length, w = b;
  const U = {};
  for (; w--; ) U[i[w].key] = w;
  const p = [], S = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), W = [];
  for (w = _; w--; ) {
    const v = g(r, l, w), y = t(v);
    let N = c.get(y);
    N ? W.push(() => N.p(v, e)) : (N = u(y, v), N.c()), S.set(y, p[w] = N), y in U && z.set(y, Math.abs(w - U[y]));
  }
  const Z = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
  function C(v) {
    G(v, 1), v.m(s, f), c.set(v.key, v), f = v.first, _--;
  }
  for (; b && _; ) {
    const v = p[_ - 1], y = i[b - 1], N = v.key, k = y.key;
    v === y ? (f = v.first, b--, _--) : S.has(k) ? !c.has(N) || Z.has(N) ? C(v) : V.has(k) ? b-- : z.get(N) > z.get(k) ? (V.add(N), C(v)) : (Z.add(k), b--) : (d(y, c), b--);
  }
  for (; b--; ) {
    const v = i[b];
    S.has(v.key) || d(v, c);
  }
  for (; _; ) C(p[_ - 1]);
  return me(W), p;
}
function ve(i) {
  i && i.c();
}
function de(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), yt(() => {
    const l = i.$$.on_mount.map(ii).filter(ni);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : me(l), i.$$.on_mount = [];
  }), r.forEach(yt);
}
function fe(i, e) {
  const t = i.$$;
  t.fragment !== null && ($i(t.after_update), me(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function nn(i, e) {
  i.$$.dirty[0] === -1 && (Me.push(i), Ji(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ee(i, e, t, n, r, l, c = null, s = [-1]) {
  const d = Be;
  Ae(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: P,
    not_equal: r,
    bound: Pt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Pt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  c && c(u.root);
  let f = !1;
  if (u.ctx = t ? t(i, e.props || {}, (g, b, ..._) => {
    const w = _.length ? _[0] : b;
    return u.ctx && r(u.ctx[g], u.ctx[g] = w) && (!u.skip_bound && u.bound[g] && u.bound[g](w), f && nn(i, g)), b;
  }) : [], u.update(), f = !0, me(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = Qi(e.target);
      u.fragment && u.fragment.l(g), g.forEach(I);
    } else
      u.fragment && u.fragment.c();
    e.intro && G(i.$$.fragment), de(i, e.target, e.anchor), ai();
  }
  Ae(d);
}
class pe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    gt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    gt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    fe(this, 1), this.$destroy = P;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ni(t))
      return P;
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
    this.$$set && !Bi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const rn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(rn);
function sn(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      B(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && I(e);
    }
  };
}
class li extends pe {
  constructor(e) {
    super(), Ee(this, e, null, sn, we, {});
  }
}
function on(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      B(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && I(e);
    }
  };
}
class ui extends pe {
  constructor(e) {
    super(), Ee(this, e, null, on, we, {});
  }
}
function an(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function ln(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function un(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function cn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function dn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function fn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function mn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && a(e, "src", t), r & /*placeType*/
      64 && a(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function gn(i) {
  let e, t, n, r;
  return {
    c() {
      e = R("img"), X(e.src, t = /*imageUrl*/
      i[5]) || a(e, "src", t), a(
        e,
        "alt",
        /*category*/
        i[4]
      ), a(
        e,
        "title",
        /*placeType*/
        i[6]
      ), a(e, "class", "svelte-z7p9pp");
    },
    m(l, c) {
      B(l, e, c), n || (r = q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(l, c) {
      c & /*imageUrl*/
      32 && !X(e.src, t = /*imageUrl*/
      l[5]) && a(e, "src", t), c & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        l[4]
      ), c & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && I(e), n = !1, r();
    }
  };
}
function Gt(i) {
  let e, t;
  return {
    c() {
      e = R("span"), t = be(
        /*placeType*/
        i[6]
      ), a(e, "class", "secondary svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r), M(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && Pe(
        t,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function hn(i) {
  let e, t, n, r, l, c, s, d, u, f = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), g, b, _ = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] !== "never" && !/*feature*/
    i[0].address && !/*feature*/
    i[0].id.startsWith("road.") && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[8]
  ), w, U, p = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), S, z, W, Z, V, C;
  function v(E, m) {
    return m & /*feature*/
    1 && (t = null), m & /*feature*/
    1 && (n = null), m & /*feature*/
    1 && (r = null), m & /*feature*/
    1 && (l = null), /*imageUrl*/
    E[5] ? gn : (
      /*feature*/
      E[0].address ? mn : (t == null && (t = !!/*feature*/
      E[0].id.startsWith("road.")), t ? fn : (n == null && (n = !!/*feature*/
      E[0].id.startsWith("address.")), n ? dn : (r == null && (r = !!/*feature*/
      E[0].id.startsWith("postal_code.")), r ? cn : (l == null && (l = !!/*feature*/
      E[0].id.startsWith("poi.")), l ? un : (
        /*isReverse*/
        E[8] ? ln : an
      )))))
    );
  }
  let y = v(i, -1), N = y(i), k = _ && Gt(i);
  return {
    c() {
      e = R("li"), N.c(), c = ee(), s = R("span"), d = R("span"), u = R("span"), g = be(f), b = ee(), k && k.c(), w = ee(), U = R("span"), S = be(p), a(u, "class", "primary svelte-z7p9pp"), a(d, "class", "svelte-z7p9pp"), a(U, "class", "line2 svelte-z7p9pp"), a(s, "class", "texts svelte-z7p9pp"), a(e, "tabindex", "-1"), a(e, "role", "option"), a(e, "aria-selected", z = /*style*/
      i[1] === "selected"), a(e, "aria-checked", W = /*style*/
      i[1] === "picked"), a(e, "class", Z = $e(
        /*style*/
        i[1]
      ) + " svelte-z7p9pp");
    },
    m(E, m) {
      B(E, e, m), N.m(e, null), M(e, c), M(e, s), M(s, d), M(d, u), M(u, g), M(d, b), k && k.m(d, null), M(s, w), M(s, U), M(U, S), V || (C = [
        q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        q(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        q(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], V = !0);
    },
    p(E, [m]) {
      y === (y = v(E, m)) && N ? N.p(E, m) : (N.d(1), N = y(E), N && (N.c(), N.m(e, c))), m & /*feature*/
      1 && f !== (f = /*isReverse*/
      (E[8] ? (
        /*feature*/
        E[0].place_name
      ) : (
        /*feature*/
        E[0].place_name.replace(/,.*/, "")
      )) + "") && Pe(g, f), m & /*showPlaceType, feature, imageUrl*/
      37 && (_ = /*showPlaceType*/
      E[2] === "always" || /*showPlaceType*/
      E[2] !== "never" && !/*feature*/
      E[0].address && !/*feature*/
      E[0].id.startsWith("road.") && !/*feature*/
      E[0].id.startsWith("address.") && !/*feature*/
      E[0].id.startsWith("postal_code.") && (!/*feature*/
      E[0].id.startsWith("poi.") || !/*imageUrl*/
      E[5]) && !/*isReverse*/
      E[8]), _ ? k ? k.p(E, m) : (k = Gt(E), k.c(), k.m(d, null)) : k && (k.d(1), k = null), m & /*feature*/
      1 && p !== (p = /*isReverse*/
      (E[8] ? "" : (
        /*feature*/
        E[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Pe(S, p), m & /*style*/
      2 && z !== (z = /*style*/
      E[1] === "selected") && a(e, "aria-selected", z), m & /*style*/
      2 && W !== (W = /*style*/
      E[1] === "picked") && a(e, "aria-checked", W), m & /*style*/
      2 && Z !== (Z = $e(
        /*style*/
        E[1]
      ) + " svelte-z7p9pp") && a(e, "class", Z);
    },
    i: P,
    o: P,
    d(E) {
      E && I(e), N.d(), k && k.d(), V = !1, me(C);
    }
  };
}
function bn(i, e, t) {
  var V;
  let n, r, { feature: l } = e, { style: c = "default" } = e, { showPlaceType: s } = e, { missingIconsCache: d } = e, { iconsBaseUrl: u } = e;
  const f = oi(), g = (V = l.properties) == null ? void 0 : V.categories;
  let b, _, w = 0, U = l.place_type[0] === "reverse";
  function p() {
    _ && d.add(_), t(11, w++, w);
  }
  function S(C) {
    Yi.call(this, i, C);
  }
  const z = () => p(), W = () => f("select", void 0), Z = (C) => {
    document.activeElement !== C.target && f("select", void 0);
  };
  return i.$$set = (C) => {
    "feature" in C && t(0, l = C.feature), "style" in C && t(1, c = C.style), "showPlaceType" in C && t(2, s = C.showPlaceType), "missingIconsCache" in C && t(10, d = C.missingIconsCache), "iconsBaseUrl" in C && t(3, u = C.iconsBaseUrl);
  }, i.$$.update = () => {
    var C, v, y, N;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    7224)
      do
        t(12, n--, n), t(4, b = g == null ? void 0 : g[n]), t(5, _ = b ? u + b.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!_ || d.has(_)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((v = (C = l.properties) == null ? void 0 : C.categories) == null ? void 0 : v.join(", ")) ?? ((N = (y = l.properties) == null ? void 0 : y.place_type_name) == null ? void 0 : N[0]) ?? l.place_type[0]);
  }, t(12, n = (g == null ? void 0 : g.length) ?? 0), [
    l,
    c,
    s,
    u,
    b,
    _,
    r,
    f,
    U,
    p,
    d,
    w,
    n,
    S,
    z,
    W,
    Z
  ];
}
class vn extends pe {
  constructor(e) {
    super(), Ee(this, e, bn, hn, we, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 10,
      iconsBaseUrl: 3
    });
  }
}
function Ln(i) {
  let e;
  return {
    c() {
      e = R("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      B(t, e, n);
    },
    p: P,
    i: P,
    o: P,
    d(t) {
      t && I(e);
    }
  };
}
class _n extends pe {
  constructor(e) {
    super(), Ee(this, e, null, Ln, we, {});
  }
}
function yn(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      B(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && I(e);
    }
  };
}
class wn extends pe {
  constructor(e) {
    super(), Ee(this, e, null, yn, we, {});
  }
}
function En(i) {
  let e, t, n;
  return {
    c() {
      e = ce("svg"), t = ce("circle"), n = ce("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(n, "d", "M12.063 12.063 7.635 7.635"), a(n, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(r, l) {
      B(r, e, l), M(e, t), M(e, n);
    },
    p: P,
    i: P,
    o: P,
    d(r) {
      r && I(e);
    }
  };
}
class pn extends pe {
  constructor(e) {
    super(), Ee(this, e, null, En, we, {});
  }
}
function Sn(i, e, t) {
  const n = e[1], r = e[0], l = n - r;
  return i === n && t ? i : ((i - r) % l + l) % l + r;
}
function Ht(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ue;
async function Tn(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Ue && r.cachedLocationExpiry && Ue.time + r.cachedLocationExpiry > Date.now()) {
          if (!Ue.coords)
            break e;
          return Ue.coords;
        }
        let l;
        try {
          return l = await new Promise((c, s) => {
            t.signal.addEventListener("abort", () => {
              s(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                c(
                  [d.coords.longitude, d.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (d) => {
                s(d);
              },
              r
            );
          }), l;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Ue = {
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
const Nn = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Zt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, qt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Qt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Kt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Vt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function kn(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((_) => Number(_.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), l = Math.abs(n), c = t > 0 ? "N" : "S", s = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${r}° ${c}, ${l}° ${s}`);
    const u = Math.floor(r), f = Math.floor(l), g = (r - u) * 60, b = (l - f) * 60;
    if (i == "DM") {
      let _ = Yt(g, 3).toFixed(3).padStart(6, "0"), w = Yt(b, 3).toFixed(3).padStart(6, "0");
      _.endsWith(".000") && w.endsWith(".000") && (_ = _.replace(/\.000$/, ""), w = w.replace(/\.000$/, "")), d = `${u}° ${_}' ${c}, ${f}° ${w}' ${s}`;
    }
    if (i == "DMS") {
      const _ = Math.floor(g), w = Math.floor(b);
      let U = ((g - _) * 60).toFixed(1).padStart(4, "0"), p = ((b - w) * 60).toFixed(1).padStart(4, "0");
      const S = _.toString().padStart(2, "0"), z = w.toString().padStart(2, "0");
      U.endsWith(".0") && p.endsWith(".0") && (U = U.replace(/\.0$/, ""), p = p.replace(/\.0$/, "")), d = `${u}° ${S}' ${U}" ${c}, ${f}° ${z}' ${p}" ${s}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Yt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function wt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", l = "", c = null, s = [], d = !1;
  if (Nn.test(i))
    throw new Error("invalid coordinate value");
  if (Zt.test(i))
    if (s = Zt.exec(i), d = Ie(s), d)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), n = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (n *= -1), c = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (qt.test(i))
    if (s = qt.exec(i), d = Ie(s), d) {
      if (t = s[2], n = s[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), c = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], l = s[5]) : s[4] && (r = s[4], l = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Qt.test(i))
    if (s = Qt.exec(i), d = Ie(s), d)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, c = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, c = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[9])), s[11] && (n += s[11] / 60), s[13] && (n += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[8]) : s[7] && (r = s[7], l = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Kt.test(i))
    if (s = Kt.exec(i), d = Ie(s), d)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, c = "DM"), s[6] && (t += s[6] / 3600, c = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12] / 60), s[14] && (n += s[14] / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[9]) : s[8] && (r = s[8], l = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Vt.test(i)) {
    if (s = Vt.exec(i), d = Ie(s), s.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, c = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, c = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12].replace(",", ".") / 60), s[14] && (n += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[9]) : s[8] && (r = s[8], l = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
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
    const f = s[0].trim();
    let g, b;
    const _ = /[,/;\u0020]/g, w = f.match(_);
    if (w == null) {
      const S = Math.floor(i.length / 2);
      g = f.substring(0, S).trim(), b = f.substring(S).trim();
    } else {
      let S;
      w.length % 2 == 1 ? S = Math.floor(w.length / 2) : S = w.length / 2 - 1;
      let z = 0;
      if (S == 0)
        z = f.indexOf(w[0]), g = f.substring(0, z).trim(), b = f.substring(z + 1).trim();
      else {
        let W = 0, Z = 0;
        for (; W <= S; )
          z = f.indexOf(w[W], Z), Z = z + 1, W++;
        g = f.substring(0, z).trim(), b = f.substring(z + 1).trim();
      }
    }
    const U = g.split(".");
    if (U.length == 2 && U[1] == 0 && U[1].length != 2)
      throw new Error("invalid coordinates format");
    const p = b.split(".");
    if (p.length == 2 && p[1] == 0 && p[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(g) || /^\d+$/.test(b))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: f,
      verbatimLatitude: g,
      verbatimLongitude: b,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: c,
      closeEnough: Mn,
      toCoordinateFormat: kn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Ie(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let l = 0; l < r; l++) {
    const c = e[l], s = e[l + r], d = t.test(c) && t.test(s), u = n.test(c) && n.test(s), f = c == s;
    if (!(c == null && s == null)) {
      if (c == null || s == null)
        return !1;
      if (d || u || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function Xt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Mn(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Xt(this.decimalLatitude, Number(e[0])) && Xt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Cn = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
wt.to = Cn;
const Wn = [
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
], zn = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, On = [
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
], Dn = [
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
function Rn() {
  const i = [];
  return Wn.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...zn });
  }), [...i, ...On, ...Dn];
}
const Un = Rn();
wt.formats = Un.map((i) => i.verbatimCoordinates);
const In = wt;
function Jt(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function xt(i) {
  let e, t;
  return e = new _n({}), {
    c() {
      ve(e.$$.fragment);
    },
    m(n, r) {
      de(e, n, r), t = !0;
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fe(e, n);
    }
  };
}
function $t(i) {
  let e, t, n, r, l;
  return t = new wn({}), {
    c() {
      e = R("button"), ve(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), a(e, "class", "svelte-bz0zu3"), Ce(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(c, s) {
      B(c, e, s), de(t, e, null), n = !0, r || (l = q(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(c, s) {
      (!n || s[0] & /*reverseButtonTitle*/
      1024) && a(
        e,
        "title",
        /*reverseButtonTitle*/
        c[10]
      ), (!n || s[0] & /*reverseActive*/
      1) && Ce(
        e,
        "active",
        /*reverseActive*/
        c[0]
      );
    },
    i(c) {
      n || (G(t.$$.fragment, c), n = !0);
    },
    o(c) {
      Q(t.$$.fragment, c), n = !1;
    },
    d(c) {
      c && I(e), fe(t), r = !1, l();
    }
  };
}
function An(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, l, c, s = jt(
    /*listFeatures*/
    i[13]
  );
  const d = (u) => (
    /*feature*/
    u[97].id + /*feature*/
    (u[97].address ? "," + /*feature*/
    u[97].address : "")
  );
  for (let u = 0; u < s.length; u += 1) {
    let f = Jt(i, s, u), g = d(f);
    n.set(g, t[u] = ei(g, f));
  }
  return {
    c() {
      e = R("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      a(e, "class", "options svelte-bz0zu3"), a(e, "role", "listbox");
    },
    m(u, f) {
      B(u, e, f);
      for (let g = 0; g < t.length; g += 1)
        t[g] && t[g].m(e, null);
      r = !0, l || (c = [
        q(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        q(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        q(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], l = !0);
    },
    p(u, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (s = jt(
        /*listFeatures*/
        u[13]
      ), Je(), t = tn(t, f, d, 1, u, s, n, e, en, ei, null, Jt), xe());
    },
    i(u) {
      if (!r) {
        for (let f = 0; f < s.length; f += 1)
          G(t[f]);
        r = !0;
      }
    },
    o(u) {
      for (let f = 0; f < t.length; f += 1)
        Q(t[f]);
      r = !1;
    },
    d(u) {
      u && I(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      l = !1, me(c);
    }
  };
}
function Pn(i) {
  let e, t, n, r, l, c;
  return t = new ui({}), {
    c() {
      e = R("div"), ve(t.$$.fragment), n = ee(), r = R("div"), l = be(
        /*noResultsMessage*/
        i[8]
      ), a(r, "class", "svelte-bz0zu3"), a(e, "class", "no-results svelte-bz0zu3");
    },
    m(s, d) {
      B(s, e, d), de(t, e, null), M(e, n), M(e, r), M(r, l), c = !0;
    },
    p(s, d) {
      (!c || d[0] & /*noResultsMessage*/
      256) && Pe(
        l,
        /*noResultsMessage*/
        s[8]
      );
    },
    i(s) {
      c || (G(t.$$.fragment, s), c = !0);
    },
    o(s) {
      Q(t.$$.fragment, s), c = !1;
    },
    d(s) {
      s && I(e), fe(t);
    }
  };
}
function Bn(i) {
  let e = "", t;
  return {
    c() {
      t = be(e);
    },
    m(n, r) {
      B(n, t, r);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && I(t);
    }
  };
}
function Fn(i) {
  let e, t, n, r, l, c, s, d, u, f, g;
  return t = new ui({}), d = new li({}), {
    c() {
      e = R("div"), ve(t.$$.fragment), n = ee(), r = R("div"), l = be(
        /*errorMessage*/
        i[7]
      ), c = ee(), s = R("button"), ve(d.$$.fragment), a(r, "class", "svelte-bz0zu3"), a(s, "class", "svelte-bz0zu3"), a(e, "class", "error svelte-bz0zu3");
    },
    m(b, _) {
      B(b, e, _), de(t, e, null), M(e, n), M(e, r), M(r, l), M(e, c), M(e, s), de(d, s, null), u = !0, f || (g = q(
        s,
        "click",
        /*click_handler_4*/
        i[80]
      ), f = !0);
    },
    p(b, _) {
      (!u || _[0] & /*errorMessage*/
      128) && Pe(
        l,
        /*errorMessage*/
        b[7]
      );
    },
    i(b) {
      u || (G(t.$$.fragment, b), G(d.$$.fragment, b), u = !0);
    },
    o(b) {
      Q(t.$$.fragment, b), Q(d.$$.fragment, b), u = !1;
    },
    d(b) {
      b && I(e), fe(t), fe(d), f = !1, g();
    }
  };
}
function ei(i, e) {
  var s;
  let t, n, r;
  function l() {
    return (
      /*mouseenter_handler*/
      e[81](
        /*i*/
        e[99]
      )
    );
  }
  function c() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new vn({
    props: {
      feature: (
        /*feature*/
        e[97]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[11]
      ),
      style: (
        /*selectedItemIndex*/
        e[15] === /*i*/
        e[99] ? "selected" : (
          /*picked*/
          ((s = e[14]) == null ? void 0 : s.id) === /*feature*/
          e[97].id ? "picked" : "default"
        )
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        e[21]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        e[12]
      )
    }
  }), n.$on("mouseenter", l), n.$on("select", c), {
    key: i,
    first: null,
    c() {
      t = Zi(), ve(n.$$.fragment), this.first = t;
    },
    m(d, u) {
      B(d, t, u), de(n, d, u), r = !0;
    },
    p(d, u) {
      var g;
      e = d;
      const f = {};
      u[0] & /*listFeatures*/
      8192 && (f.feature = /*feature*/
      e[97]), u[0] & /*showPlaceType*/
      2048 && (f.showPlaceType = /*showPlaceType*/
      e[11]), u[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (f.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((g = e[14]) == null ? void 0 : g.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), u[0] & /*iconsBaseUrl*/
      4096 && (f.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(f);
    },
    i(d) {
      r || (G(n.$$.fragment, d), r = !0);
    },
    o(d) {
      Q(n.$$.fragment, d), r = !1;
    },
    d(d) {
      d && I(t), fe(n, d);
    }
  };
}
function jn(i) {
  let e, t, n, r, l, c, s, d, u, f, g, b, _, w, U, p, S, z, W, Z, V, C = !1;
  l = new pn({}), g = new li({});
  let v = (
    /*abortController*/
    i[20] && xt()
  ), y = (
    /*enableReverse*/
    i[6] === "button" && $t(i)
  );
  const N = (
    /*#slots*/
    i[70].default
  ), k = Fi(
    N,
    i,
    /*$$scope*/
    i[69],
    null
  ), E = [Fn, Bn, Pn, An], m = [];
  function Le(L, F) {
    var se, te;
    return (
      /*error*/
      L[19] ? 0 : !/*focusedDelayed*/
      L[16] && !/*keepListOpen*/
      L[4] ? 1 : (
        /*listFeatures*/
        ((se = L[13]) == null ? void 0 : se.length) === 0 ? 2 : (
          /*listFeatures*/
          (te = L[13]) != null && te.length && /*focusedDelayed*/
          (L[16] || /*keepListOpen*/
          L[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(p = Le(i)) && (S = m[p] = E[p](i)), {
    c() {
      e = ee(), t = R("form"), n = R("div"), r = R("button"), ve(l.$$.fragment), c = ee(), s = R("input"), d = ee(), u = R("div"), f = R("button"), ve(g.$$.fragment), b = ee(), v && v.c(), _ = ee(), y && y.c(), w = ee(), k && k.c(), U = ee(), S && S.c(), a(r, "class", "search-button svelte-bz0zu3"), a(r, "type", "button"), a(
        s,
        "placeholder",
        /*placeholder*/
        i[9]
      ), a(
        s,
        "aria-label",
        /*placeholder*/
        i[9]
      ), a(s, "class", "svelte-bz0zu3"), a(f, "type", "button"), a(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), a(f, "class", "svelte-bz0zu3"), a(u, "class", "clear-button-container svelte-bz0zu3"), Ce(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(n, "class", "input-group svelte-bz0zu3"), a(t, "class", z = $e(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), Ce(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(L, F) {
      B(L, e, F), B(L, t, F), M(t, n), M(n, r), de(l, r, null), M(n, c), M(n, s), i[72](s), Bt(
        s,
        /*searchValue*/
        i[1]
      ), M(n, d), M(n, u), M(u, f), de(g, f, null), M(u, b), v && v.m(u, null), M(n, _), y && y.m(n, null), M(n, w), k && k.m(n, null), M(t, U), ~p && m[p].m(t, null), W = !0, Z || (V = [
        q(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        q(
          s,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        q(
          s,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        q(
          s,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        q(
          s,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        q(
          s,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        q(
          s,
          "input",
          /*handleInput*/
          i[24]
        ),
        q(
          s,
          "change",
          /*change_handler*/
          i[77]
        ),
        q(
          f,
          "click",
          /*click_handler_2*/
          i[78]
        ),
        q(t, "submit", qi(
          /*handleSubmit*/
          i[22]
        ))
      ], Z = !0);
    },
    p(L, F) {
      (!W || F[0] & /*placeholder*/
      512) && a(
        s,
        "placeholder",
        /*placeholder*/
        L[9]
      ), (!W || F[0] & /*placeholder*/
      512) && a(
        s,
        "aria-label",
        /*placeholder*/
        L[9]
      ), F[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      L[1] && Bt(
        s,
        /*searchValue*/
        L[1]
      ), (!W || F[0] & /*clearButtonTitle*/
      8) && a(
        f,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[20] ? v ? F[0] & /*abortController*/
      1048576 && G(v, 1) : (v = xt(), v.c(), G(v, 1), v.m(u, null)) : v && (Je(), Q(v, 1, 1, () => {
        v = null;
      }), xe()), (!W || F[0] & /*searchValue*/
      2) && Ce(
        u,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[6] === "button" ? y ? (y.p(L, F), F[0] & /*enableReverse*/
      64 && G(y, 1)) : (y = $t(L), y.c(), G(y, 1), y.m(n, w)) : y && (Je(), Q(y, 1, 1, () => {
        y = null;
      }), xe()), k && k.p && (!W || F[2] & /*$$scope*/
      128) && Gi(
        k,
        N,
        L,
        /*$$scope*/
        L[69],
        W ? ji(
          N,
          /*$$scope*/
          L[69],
          F,
          null
        ) : Hi(
          /*$$scope*/
          L[69]
        ),
        null
      );
      let se = p;
      p = Le(L), p === se ? ~p && m[p].p(L, F) : (S && (Je(), Q(m[se], 1, 1, () => {
        m[se] = null;
      }), xe()), ~p ? (S = m[p], S ? S.p(L, F) : (S = m[p] = E[p](L), S.c()), G(S, 1), S.m(t, null)) : S = null), (!W || F[0] & /*className*/
      4 && z !== (z = $e(
        /*className*/
        L[2]
      ) + " svelte-bz0zu3")) && a(t, "class", z), (!W || F[0] & /*className, collapsed, searchValue*/
      38) && Ce(
        t,
        "can-collapse",
        /*collapsed*/
        L[5] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      W || (G(C), G(l.$$.fragment, L), G(g.$$.fragment, L), G(v), G(y), G(k, L), G(S), W = !0);
    },
    o(L) {
      Q(C), Q(l.$$.fragment, L), Q(g.$$.fragment, L), Q(v), Q(y), Q(k, L), Q(S), W = !1;
    },
    d(L) {
      L && (I(e), I(t)), fe(l), i[72](null), fe(g), v && v.d(), y && y.d(), k && k.d(L), ~p && m[p].d(), Z = !1, me(V);
    }
  };
}
function Gn(i, e, t) {
  let n, r, l, { $$slots: c = {}, $$scope: s } = e;
  const d = {
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
  let { class: u = void 0 } = e, { apiKey: f } = e, { bbox: g = void 0 } = e, { clearButtonTitle: b = "clear" } = e, { clearOnBlur: _ = !1 } = e, { clearListOnPick: w = !1 } = e, { keepListOpen: U = !1 } = e, { collapsed: p = !1 } = e, { country: S = void 0 } = e, { debounceSearch: z = 200 } = e, { enableReverse: W = "never" } = e, { errorMessage: Z = "Something went wrong…" } = e, { filter: V = () => !0 } = e, { flyTo: C = !0 } = e, { fuzzyMatch: v = !0 } = e, { language: y = void 0 } = e, { limit: N = void 0 } = e;
  const k = 41415112612;
  let { reverseGeocodingLimit: E = k } = e, { mapController: m = void 0 } = e, { minLength: Le = 2 } = e, { noResultsMessage: L = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: F = "Search" } = e, { proximity: se = [{ type: "server-geolocation" }] } = e, { reverseActive: te = W === "always" } = e, { reverseButtonTitle: pt = "toggle reverse geocoding" } = e, { searchValue: K = "" } = e, { pickedResultStyle: Fe = "full-geometry" } = e, { showPlaceType: St = "if-needed" } = e, { showResultsWhileTyping: je = !0 } = e, { selectFirst: Se = !0 } = e, { flyToSelected: Ge = !1 } = e, { markerOnSelected: He = !0 } = e, { types: tt = void 0 } = e;
  const Tt = [];
  let { reverseGeocodingTypes: Ze = Tt } = e, { exhaustiveReverseGeocoding: it = !1 } = e, { excludeTypes: nt = !1 } = e;
  const Nt = void 0;
  let { reverseGeocodingExcludeTypes: qe = Nt } = e, { zoom: Qe = d } = e, { apiUrl: rt = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: st = {} } = e, { iconsBaseUrl: kt = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.1/icons/" } = e, { adjustUrlQuery: ot = () => {
  } } = e, { adjustUrl: at = () => {
  } } = e;
  function di(o) {
    ne.focus(o);
  }
  function fi() {
    ne.blur();
  }
  function Mt(o, A = !0, j = !1) {
    t(1, K = o), A ? (t(15, O = -1), Wt()) : (zt(void 0, !j, j), setTimeout(() => {
      ne.focus(), ne.select();
    }));
  }
  function mi() {
    t(13, T = void 0), t(14, h = void 0), t(15, O = -1);
  }
  function gi() {
    t(64, H = []), t(14, h = void 0);
  }
  let T, H, h, Ct = "", ne, O = -1, oe, Ke = [], _e, Te, Ne, lt, ue = !1;
  const hi = /* @__PURE__ */ new Set(), ge = oi();
  Vi(() => {
    m && (m.setEventHandler(void 0), m.indicateReverse(!1), m.setSelectedMarker(-1), m.setFeatures(void 0, void 0, !1));
  });
  function Wt(o) {
    if (t(17, ue = !1), Te && (clearTimeout(Te), Te = void 0), O > -1 && T)
      t(14, h = T[O]), t(1, K = h.place_type[0] === "reverse" ? h.place_name : h.place_name.replace(/,.*/, "")), t(19, oe = void 0), t(64, H = void 0), t(15, O = -1);
    else if (K) {
      const A = o || !ut(K);
      ct(K, { exact: !0 }).then(() => {
        t(64, H = T), t(14, h = void 0), A && bi();
      }).catch((j) => t(19, oe = j));
    }
  }
  function ut(o) {
    try {
      return In(o, 6);
    } catch {
      return !1;
    }
  }
  async function ct(o, { byId: A = !1, exact: j = !1 } = {}) {
    var $, ae, he;
    t(19, oe = void 0), _e == null || _e.abort();
    const x = new AbortController();
    t(20, _e = x);
    try {
      const D = ut(o), Oe = new URL(rt + "/" + encodeURIComponent(D ? D.decimalLongitude + "," + D.decimalLatitude : o) + ".json"), ie = Oe.searchParams;
      y !== void 0 && ie.set("language", Array.isArray(y) ? y.join(",") : y ?? "");
      const [mt] = (m == null ? void 0 : m.getCenterAndZoom()) ?? [];
      let le = ($ = !D || Ze === Tt ? tt : Ze) == null ? void 0 : $.map((Y) => typeof Y == "string" ? Y : mt === void 0 || (Y[0] ?? 0) <= mt && mt < (Y[1] ?? 1 / 0) ? Y[2] : void 0).filter((Y) => Y !== void 0);
      le && (le = [...new Set(le)], ie.set("types", le.join(",")));
      const Dt = !D || qe === Nt ? nt : qe;
      if (Dt && ie.set("excludeTypes", String(Dt)), g && ie.set("bbox", g.map((Y) => Y.toFixed(6)).join(",")), S && ie.set("country", Array.isArray(S) ? S.join(",") : S), !A && !D) {
        const Y = await Tn(m, se, x);
        Y && ie.set("proximity", Y), (j || !je) && ie.set("autocomplete", "false"), ie.set("fuzzyMatch", String(v));
      }
      const De = E === k ? N : E;
      De !== void 0 && De > 1 && (le == null ? void 0 : le.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), D ? (De === 1 || De !== void 0 && (it || (le == null ? void 0 : le.length) === 1)) && ie.set("limit", String(De)) : N !== void 0 && ie.set("limit", String(N)), ie.set("key", f), ot(ie), at(Oe);
      const Di = Oe.searchParams.get("types") === "" && Oe.searchParams.get("excludeTypes") !== "true", Ve = Oe.toString();
      if (Ve === Ct) {
        A ? (w && t(13, T = void 0), t(14, h = Ke[0])) : (t(13, T = Ke), ((ae = T[O]) == null ? void 0 : ae.id) !== (r == null ? void 0 : r.id) && t(15, O = -1));
        return;
      }
      Ct = Ve;
      let Re;
      if (Di)
        Re = { type: "FeatureCollection", features: [] };
      else {
        const Y = await fetch(Ve, { signal: x.signal, ...st });
        if (!Y.ok)
          throw new Error(await Y.text());
        Re = await Y.json();
      }
      ge("response", { url: Ve, featureCollection: Re }), A ? (w && t(13, T = void 0), t(14, h = Re.features[0]), Ke = [h]) : (t(13, T = Re.features.filter(V)), D && T.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + D.decimalLongitude + "_" + D.decimalLatitude,
        text: D.decimalLatitude + ", " + D.decimalLongitude,
        place_name: D.decimalLatitude + ", " + D.decimalLongitude,
        place_type: ["reverse"],
        center: [D.decimalLongitude, D.decimalLatitude],
        bbox: [
          D.decimalLongitude,
          D.decimalLatitude,
          D.decimalLongitude,
          D.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [D.decimalLongitude, D.decimalLatitude]
        }
      }), Ke = T, ((he = T[O]) == null ? void 0 : he.id) !== (r == null ? void 0 : r.id) && t(15, O = -1), D && ne.focus());
    } catch (D) {
      if (D && typeof D == "object" && "name" in D && D.name === "AbortError")
        return;
      throw D;
    } finally {
      x === _e && t(20, _e = void 0);
    }
  }
  function bi() {
    var x;
    if (!(H != null && H.length) || !C)
      return;
    const o = [180, 90, -180, -90], A = !H.some(($) => !$.matching_text);
    let j;
    for (const $ of H) {
      const ae = ze($);
      if (j = j === void 0 ? ae : ae === void 0 ? j : Math.max(j, ae), A || !$.matching_text)
        for (const he of [0, 1, 2, 3])
          o[he] = Math[he < 2 ? "min" : "max"](o[he], ((x = $.bbox) == null ? void 0 : x[he]) ?? $.center[he % 2]);
    }
    m && H.length > 0 && (h && o[0] === o[2] && o[1] === o[3] ? m.flyTo(h.center, ze(h)) : m.fitBounds(Ht(o), 50, j));
  }
  function dt() {
    !h || !m || (!h.bbox || h.bbox[0] === h.bbox[2] && h.bbox[1] === h.bbox[3] ? m.flyTo(h.center, ze(h)) : m.fitBounds(Ht(h.bbox), 50, ze(h)));
  }
  function ze(o) {
    var j;
    if (!o.bbox || o.bbox[0] !== o.bbox[2] && o.bbox[1] !== o.bbox[3])
      return;
    const A = o.id.replace(/\..*/, "");
    return (Array.isArray((j = o.properties) == null ? void 0 : j.categories) ? o.properties.categories.reduce(
      (x, $) => {
        const ae = Qe[A + "." + $];
        return x === void 0 ? ae : ae === void 0 ? x : Math.max(x, ae);
      },
      void 0
    ) : void 0) ?? Qe[A];
  }
  function vi(o) {
    t(0, te = W === "always"), t(13, T = void 0), t(14, h = void 0), t(15, O = -1), Mt(o[1].toFixed(6) + ", " + Sn(o[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Li(o) {
    if (!T)
      return;
    let A = o.key === "ArrowDown" ? 1 : o.key === "ArrowUp" ? -1 : 0;
    A && (ne.focus(), t(17, ue = !0), o.preventDefault(), h && O === -1 && t(15, O = T.findIndex((j) => j.id === (h == null ? void 0 : h.id))), O === (h || Se ? 0 : -1) && A === -1 && t(15, O = T.length), t(15, O += A), O >= T.length && t(15, O = -1), O < 0 && (h || Se) && t(15, O = 0));
  }
  function zt(o, A = !0, j = !1) {
    if (t(19, oe = void 0), t(14, h = void 0), t(17, ue = !0), je || j) {
      if (Te && clearTimeout(Te), K.length < Le)
        return;
      const x = K;
      Te = window.setTimeout(
        () => {
          ct(x).catch(($) => t(19, oe = $));
        },
        A ? z : 0
      );
    } else
      t(13, T = void 0), t(19, oe = void 0);
  }
  function ft(o) {
    h && (h == null ? void 0 : h.id) === (o == null ? void 0 : o.id) ? dt() : (t(14, h = o), t(1, K = o.place_name));
  }
  function Ot(o) {
    t(15, O = o);
  }
  function _i() {
    (!Se || h) && t(15, O = -1), Ge && dt();
  }
  const yi = () => ne.focus();
  function wi(o) {
    Lt[o ? "unshift" : "push"](() => {
      ne = o, t(18, ne);
    });
  }
  function Ei() {
    K = this.value, t(1, K), t(17, ue), t(31, _), t(16, Ne);
  }
  const pi = () => t(17, ue = !0), Si = () => t(17, ue = !1), Ti = () => t(17, ue = !0), Ni = () => t(14, h = void 0), ki = () => {
    t(1, K = ""), ne.focus();
  }, Mi = () => t(0, te = !te), Ci = () => t(19, oe = void 0), Wi = (o) => Ot(o), zi = (o) => ft(o), Oi = () => {
  };
  return i.$$set = (o) => {
    "class" in o && t(2, u = o.class), "apiKey" in o && t(29, f = o.apiKey), "bbox" in o && t(30, g = o.bbox), "clearButtonTitle" in o && t(3, b = o.clearButtonTitle), "clearOnBlur" in o && t(31, _ = o.clearOnBlur), "clearListOnPick" in o && t(32, w = o.clearListOnPick), "keepListOpen" in o && t(4, U = o.keepListOpen), "collapsed" in o && t(5, p = o.collapsed), "country" in o && t(33, S = o.country), "debounceSearch" in o && t(34, z = o.debounceSearch), "enableReverse" in o && t(6, W = o.enableReverse), "errorMessage" in o && t(7, Z = o.errorMessage), "filter" in o && t(35, V = o.filter), "flyTo" in o && t(36, C = o.flyTo), "fuzzyMatch" in o && t(37, v = o.fuzzyMatch), "language" in o && t(38, y = o.language), "limit" in o && t(39, N = o.limit), "reverseGeocodingLimit" in o && t(40, E = o.reverseGeocodingLimit), "mapController" in o && t(41, m = o.mapController), "minLength" in o && t(42, Le = o.minLength), "noResultsMessage" in o && t(8, L = o.noResultsMessage), "placeholder" in o && t(9, F = o.placeholder), "proximity" in o && t(43, se = o.proximity), "reverseActive" in o && t(0, te = o.reverseActive), "reverseButtonTitle" in o && t(10, pt = o.reverseButtonTitle), "searchValue" in o && t(1, K = o.searchValue), "pickedResultStyle" in o && t(44, Fe = o.pickedResultStyle), "showPlaceType" in o && t(11, St = o.showPlaceType), "showResultsWhileTyping" in o && t(45, je = o.showResultsWhileTyping), "selectFirst" in o && t(46, Se = o.selectFirst), "flyToSelected" in o && t(47, Ge = o.flyToSelected), "markerOnSelected" in o && t(48, He = o.markerOnSelected), "types" in o && t(49, tt = o.types), "reverseGeocodingTypes" in o && t(50, Ze = o.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in o && t(51, it = o.exhaustiveReverseGeocoding), "excludeTypes" in o && t(52, nt = o.excludeTypes), "reverseGeocodingExcludeTypes" in o && t(53, qe = o.reverseGeocodingExcludeTypes), "zoom" in o && t(54, Qe = o.zoom), "apiUrl" in o && t(55, rt = o.apiUrl), "fetchParameters" in o && t(56, st = o.fetchParameters), "iconsBaseUrl" in o && t(12, kt = o.iconsBaseUrl), "adjustUrlQuery" in o && t(57, ot = o.adjustUrlQuery), "adjustUrl" in o && t(58, at = o.adjustUrl), "$$scope" in o && t(69, s = o.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, te = W === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && Fe !== "marker-only" && h && !h.address && h.geometry.type === "Point" && h.place_type[0] !== "reverse" && ct(h.id, { byId: !0 }).catch((o) => t(19, oe = o)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (m && h && h.id !== lt && C && (dt(), w && t(13, T = void 0), t(64, H = void 0), t(15, O = -1)), t(65, lt = h == null ? void 0 : h.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, Ne = ue), _ && !Ne && t(1, K = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && K.length < Le && (t(13, T = void 0), t(19, oe = void 0), t(64, H = T)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && Se && T != null && T.length && O == -1 && !h && t(15, O = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && H !== T && t(64, H = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && m && m.setEventHandler((o) => {
      switch (o.type) {
        case "mapClick":
          te && vi(o.coordinates);
          break;
        case "markerClick":
          {
            const A = T == null ? void 0 : T.find((j) => j.id === o.id);
            A && ft(A);
          }
          break;
        case "markerMouseEnter":
          H && t(15, O = Ne ? (T == null ? void 0 : T.findIndex((A) => A.id === o.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          H && t(15, O = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = T == null ? void 0 : T[O]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && m && r && C && Ge && m.flyTo(r.center, ze(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = Fe === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (He || m == null || m.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && m && He && !H && (m.setFeatures(r ? [r] : void 0, h, n), m.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && m && m.setFeatures(H, h, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && H && m && m.setSelectedMarker(O), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && m) {
      const o = ut(K);
      m.setReverseMarker(o ? [o.decimalLongitude, o.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && ge("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && ge("pick", { feature: h }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, l = !!(T != null && T.length) && (Ne || U)), i.$$.dirty[2] & /*optionsVisible*/
    32 && ge("optionsvisibilitychange", { optionsVisible: l }), i.$$.dirty[0] & /*listFeatures*/
    8192 && ge("featureslisted", { features: T }), i.$$.dirty[2] & /*markedFeatures*/
    4 && ge("featuresmarked", { features: H }), i.$$.dirty[0] & /*reverseActive*/
    1 && ge("reversetoggle", { reverse: te }), i.$$.dirty[0] & /*searchValue*/
    2 && ge("querychange", { query: K }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && m && m.indicateReverse(te);
  }, [
    te,
    K,
    u,
    b,
    U,
    p,
    W,
    Z,
    L,
    F,
    pt,
    St,
    kt,
    T,
    h,
    O,
    Ne,
    ue,
    ne,
    oe,
    _e,
    hi,
    Wt,
    Li,
    zt,
    ft,
    Ot,
    _i,
    d,
    f,
    g,
    _,
    w,
    S,
    z,
    V,
    C,
    v,
    y,
    N,
    E,
    m,
    Le,
    se,
    Fe,
    je,
    Se,
    Ge,
    He,
    tt,
    Ze,
    it,
    nt,
    qe,
    Qe,
    rt,
    st,
    ot,
    at,
    di,
    fi,
    Mt,
    mi,
    gi,
    H,
    lt,
    r,
    l,
    n,
    s,
    c,
    yi,
    wi,
    Ei,
    pi,
    Si,
    Ti,
    Ni,
    ki,
    Mi,
    Ci,
    Wi,
    zi,
    Oi
  ];
}
let Hn = class extends pe {
  constructor(e) {
    super(), Ee(
      this,
      e,
      Gn,
      jn,
      we,
      {
        ZOOM_DEFAULTS: 28,
        class: 2,
        apiKey: 29,
        bbox: 30,
        clearButtonTitle: 3,
        clearOnBlur: 31,
        clearListOnPick: 32,
        keepListOpen: 4,
        collapsed: 5,
        country: 33,
        debounceSearch: 34,
        enableReverse: 6,
        errorMessage: 7,
        filter: 35,
        flyTo: 36,
        fuzzyMatch: 37,
        language: 38,
        limit: 39,
        reverseGeocodingLimit: 40,
        mapController: 41,
        minLength: 42,
        noResultsMessage: 8,
        placeholder: 9,
        proximity: 43,
        reverseActive: 0,
        reverseButtonTitle: 10,
        searchValue: 1,
        pickedResultStyle: 44,
        showPlaceType: 11,
        showResultsWhileTyping: 45,
        selectFirst: 46,
        flyToSelected: 47,
        markerOnSelected: 48,
        types: 49,
        reverseGeocodingTypes: 50,
        exhaustiveReverseGeocoding: 51,
        excludeTypes: 52,
        reverseGeocodingExcludeTypes: 53,
        zoom: 54,
        apiUrl: 55,
        fetchParameters: 56,
        iconsBaseUrl: 12,
        adjustUrlQuery: 57,
        adjustUrl: 58,
        focus: 59,
        blur: 60,
        setQuery: 61,
        clearList: 62,
        clearMap: 63
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get ZOOM_DEFAULTS() {
    return this.$$.ctx[28];
  }
  get focus() {
    return this.$$.ctx[59];
  }
  get blur() {
    return this.$$.ctx[60];
  }
  get setQuery() {
    return this.$$.ctx[61];
  }
  get clearList() {
    return this.$$.ctx[62];
  }
  get clearMap() {
    return this.$$.ctx[63];
  }
};
const Zn = new FinalizationRegistry((i) => {
  i.$destroy();
});
var J, et, ci;
const Et = class Et extends EventTarget {
  constructor({ target: t, ...n }) {
    super();
    bt(this, et);
    bt(this, J);
    Ut(this, J, new Hn({
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
      re(this, J).$on(r, (l) => {
        It(this, et, ci).call(this, r, l.detail);
      });
    re(this, J).$on("select", (r) => {
      const l = new CustomEvent(r.type, {
        detail: r.detail
      });
      this.dispatchEvent(l);
    }), Zn.register(this, re(this, J));
  }
  /**
   * Update the control options.
   *
   * @param options options to update
   */
  setOptions(t) {
    re(this, J).$set(t);
  }
  /**
   * Set the content of search input box.
   *
   * @param value text to set
   * @param submit perform the search
   */
  setQuery(t, n = !0) {
    var r;
    (r = re(this, J)) == null || r.setQuery(t, n);
  }
  /**
   * Clear geocoding search results from the map.
   */
  clearMap() {
    var t;
    (t = re(this, J)) == null || t.clearMap();
  }
  /**
   * Clear search result list.
   */
  clearList() {
    var t;
    (t = re(this, J)) == null || t.clearList();
  }
  /**
   * Set reverse geocoding mode.
   *
   * @param reverseActive reverse geocoding active
   */
  setReverseMode(t) {
    var n;
    (n = re(this, J)) == null || n.$set({ reverseActive: t });
  }
  /**
   * Focus the search input box.
   *
   * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
   */
  focus(t) {
    var n;
    (n = re(this, J)) == null || n.focus(t);
  }
  /**
   * Blur the search input box.
   */
  blur() {
    var t;
    (t = re(this, J)) == null || t.blur();
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
J = new WeakMap(), et = new WeakSet(), ci = function(t, n) {
  return At(Et.prototype, this, "dispatchEvent").call(
    this,
    new CustomEvent(t, {
      detail: n
    })
  );
};
let ti = Et;
export {
  ti as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
