var ni = Object.defineProperty;
var oi = (i, e, t) => e in i ? ni(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var xe = (i, e, t) => (oi(i, typeof e != "symbol" ? e + "" : e, t), t), lt = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
};
var ie = (i, e, t) => (lt(i, e, "read from private field"), t ? t.call(i) : e.get(i)), ct = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, ut = (i, e, t, r) => (lt(i, e, "write to private field"), r ? r.call(i, t) : e.set(i, t), t);
function A() {
}
function si(i, e) {
  for (const t in e)
    i[t] = e[t];
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
function It(i) {
  return typeof i == "function";
}
function he(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ae;
function Q(i, e) {
  return i === e ? !0 : (Ae || (Ae = document.createElement("a")), Ae.href = e, i === Ae.href);
}
function ai(i) {
  return Object.keys(i).length === 0;
}
function li(i, e, t, r) {
  if (i) {
    const n = Ot(i, e, t, r);
    return i[0](n);
  }
}
function Ot(i, e, t, r) {
  return i[1] && r ? si(t.ctx.slice(), i[1](r(e))) : t.ctx;
}
function ci(i, e, t, r) {
  if (i[2] && r) {
    const n = i[2](r(t));
    if (e.dirty === void 0)
      return n;
    if (typeof n == "object") {
      const c = [], o = Math.max(e.dirty.length, n.length);
      for (let a = 0; a < o; a += 1)
        c[a] = e.dirty[a] | n[a];
      return c;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function ui(i, e, t, r, n, c) {
  if (n) {
    const o = Ot(e, t, r, c);
    i.p(o, n);
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
function C(i, e) {
  i.appendChild(e);
}
function B(i, e, t) {
  i.insertBefore(e, t || null);
}
function U(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function R(i) {
  return document.createElement(i);
}
function re(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ce(i) {
  return document.createTextNode(i);
}
function J() {
  return ce(" ");
}
function fi() {
  return ce("");
}
function q(i, e, t, r) {
  return i.addEventListener(e, t, r), () => i.removeEventListener(e, t, r);
}
function mi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function l(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function hi(i) {
  return Array.from(i.childNodes);
}
function Me(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function mt(i, e) {
  i.value = e ?? "";
}
function Be(i, e, t, r) {
  t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, "");
}
function le(i, e, t) {
  i.classList.toggle(e, !!t);
}
function gi(i, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: r });
}
let We;
function Te(i) {
  We = i;
}
function Rt() {
  if (!We)
    throw new Error("Function called outside component initialization");
  return We;
}
function bi(i) {
  Rt().$$.on_destroy.push(i);
}
function vi() {
  const i = Rt();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const n = i.$$.callbacks[e];
    if (n) {
      const c = gi(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return n.slice().forEach((o) => {
        o.call(i, c);
      }), !c.defaultPrevented;
    }
    return !0;
  };
}
function ht(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const ke = [], et = [];
let pe = [];
const gt = [], Li = /* @__PURE__ */ Promise.resolve();
let tt = !1;
function _i() {
  tt || (tt = !0, Li.then(zt));
}
function it(i) {
  pe.push(i);
}
const $e = /* @__PURE__ */ new Set();
let Ee = 0;
function zt() {
  if (Ee !== 0)
    return;
  const i = We;
  do {
    try {
      for (; Ee < ke.length; ) {
        const e = ke[Ee];
        Ee++, Te(e), yi(e.$$);
      }
    } catch (e) {
      throw ke.length = 0, Ee = 0, e;
    }
    for (Te(null), ke.length = 0, Ee = 0; et.length; )
      et.pop()();
    for (let e = 0; e < pe.length; e += 1) {
      const t = pe[e];
      $e.has(t) || ($e.add(t), t());
    }
    pe.length = 0;
  } while (ke.length);
  for (; gt.length; )
    gt.pop()();
  tt = !1, $e.clear(), Te(i);
}
function yi(i) {
  if (i.fragment !== null) {
    i.update(), se(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(it);
  }
}
function wi(i) {
  const e = [], t = [];
  pe.forEach((r) => i.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), pe = e;
}
const Pe = /* @__PURE__ */ new Set();
let me;
function Fe() {
  me = {
    r: 0,
    c: [],
    p: me
    // parent group
  };
}
function je() {
  me.r || se(me.c), me = me.p;
}
function j(i, e) {
  i && i.i && (Pe.delete(i), i.i(e));
}
function G(i, e, t, r) {
  if (i && i.o) {
    if (Pe.has(i))
      return;
    Pe.add(i), me.c.push(() => {
      Pe.delete(i), r && (t && i.d(1), r());
    }), i.o(e);
  } else
    r && r();
}
function bt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Ei(i, e) {
  G(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function ki(i, e, t, r, n, c, o, a, f, u, d, b) {
  let g = i.length, p = c.length, W = g;
  const P = {};
  for (; W--; )
    P[i[W].key] = W;
  const y = [], w = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), I = [];
  for (W = p; W--; ) {
    const v = b(n, c, W), S = t(v);
    let m = o.get(S);
    m ? I.push(() => m.p(v, e)) : (m = u(S, v), m.c()), w.set(S, y[W] = m), S in P && F.set(S, Math.abs(W - P[S]));
  }
  const E = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  function O(v) {
    j(v, 1), v.m(a, d), o.set(v.key, v), d = v.first, p--;
  }
  for (; g && p; ) {
    const v = y[p - 1], S = i[g - 1], m = v.key, _ = S.key;
    v === S ? (d = v.first, g--, p--) : w.has(_) ? !o.has(m) || E.has(m) ? O(v) : h.has(_) ? g-- : F.get(m) > F.get(_) ? (h.add(m), O(v)) : (E.add(_), g--) : (f(S, o), g--);
  }
  for (; g--; ) {
    const v = i[g];
    w.has(v.key) || f(v, o);
  }
  for (; p; )
    O(y[p - 1]);
  return se(I), y;
}
function ue(i) {
  i && i.c();
}
function ne(i, e, t) {
  const { fragment: r, after_update: n } = i.$$;
  r && r.m(e, t), it(() => {
    const c = i.$$.on_mount.map(Wt).filter(It);
    i.$$.on_destroy ? i.$$.on_destroy.push(...c) : se(c), i.$$.on_mount = [];
  }), n.forEach(it);
}
function oe(i, e) {
  const t = i.$$;
  t.fragment !== null && (wi(t.after_update), se(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function pi(i, e) {
  i.$$.dirty[0] === -1 && (ke.push(i), _i(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ge(i, e, t, r, n, c, o = null, a = [-1]) {
  const f = We;
  Te(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: A,
    not_equal: n,
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
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  o && o(u.root);
  let d = !1;
  if (u.ctx = t ? t(i, e.props || {}, (b, g, ...p) => {
    const W = p.length ? p[0] : g;
    return u.ctx && n(u.ctx[b], u.ctx[b] = W) && (!u.skip_bound && u.bound[b] && u.bound[b](W), d && pi(i, b)), g;
  }) : [], u.update(), d = !0, se(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = hi(e.target);
      u.fragment && u.fragment.l(b), b.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && j(i.$$.fragment), ne(i, e.target, e.anchor), zt();
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
    xe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    xe(this, "$$set");
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
    if (!It(t))
      return A;
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
    this.$$set && !ai(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Si = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Si);
function Ni(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), l(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), l(e, "viewBox", "0 0 14 14"), l(e, "width", "13"), l(e, "height", "13"), l(e, "class", "svelte-en2qvf");
    },
    m(r, n) {
      B(r, e, n), C(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && U(e);
    }
  };
}
class Ut extends be {
  constructor(e) {
    super(), ge(this, e, null, Ni, he, {});
  }
}
function Ci(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), l(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), l(e, "viewBox", "0 0 30 30"), l(e, "fill", "none"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "class", "svelte-d2loi5");
    },
    m(r, n) {
      B(r, e, n), C(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && U(e);
    }
  };
}
class Dt extends be {
  constructor(e) {
    super(), ge(this, e, null, Ci, he, {});
  }
}
function Ti(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "area.svg") && l(e, "src", t), n & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Mi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "reverse.svg") && l(e, "src", t), n & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Wi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "poi.svg") && l(e, "src", t), n & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Ii(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") && l(e, "src", t), n & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Oi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "street.svg") && l(e, "src", t), n & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Ri(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "road.svg") && l(e, "src", t), n & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function zi(i) {
  let e, t;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n);
    },
    p(r, n) {
      n & /*iconsBaseUrl*/
      8 && !Q(e.src, t = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") && l(e, "src", t), n & /*placeType*/
      64 && l(
        e,
        "alt",
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Ui(i) {
  let e, t, r, n;
  return {
    c() {
      e = R("img"), Q(e.src, t = /*imageUrl*/
      i[5]) || l(e, "src", t), l(
        e,
        "alt",
        /*category*/
        i[4]
      ), l(e, "class", "svelte-ltkwvy");
    },
    m(c, o) {
      B(c, e, o), r || (n = q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), r = !0);
    },
    p(c, o) {
      o & /*imageUrl*/
      32 && !Q(e.src, t = /*imageUrl*/
      c[5]) && l(e, "src", t), o & /*category*/
      16 && l(
        e,
        "alt",
        /*category*/
        c[4]
      );
    },
    d(c) {
      c && U(e), r = !1, n();
    }
  };
}
function vt(i) {
  let e, t;
  return {
    c() {
      e = R("span"), t = ce(
        /*placeType*/
        i[6]
      ), l(e, "class", "secondary svelte-ltkwvy");
    },
    m(r, n) {
      B(r, e, n), C(e, t);
    },
    p(r, n) {
      n & /*placeType*/
      64 && Me(
        t,
        /*placeType*/
        r[6]
      );
    },
    d(r) {
      r && U(e);
    }
  };
}
function Di(i) {
  var v, S;
  let e, t, r, n, c, o, a, f, u = (
    /*isReverse*/
    (i[7] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), d, b, g = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] && !/*feature*/
    i[0].address && /*feature*/
    ((v = i[0].properties) == null ? void 0 : v.kind) !== "road" && /*feature*/
    ((S = i[0].properties) == null ? void 0 : S.kind) !== "road_relation" && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[7]
  ), p, W, P = (
    /*isReverse*/
    (i[7] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), y, w, F;
  function I(m, _) {
    var $, M;
    return _ & /*feature*/
    1 && (t = null), _ & /*feature*/
    1 && (r = null), _ & /*feature*/
    1 && (n = null), /*imageUrl*/
    m[5] ? Ui : (
      /*feature*/
      m[0].address ? zi : (
        /*feature*/
        (($ = m[0].properties) == null ? void 0 : $.kind) === "road" || /*feature*/
        ((M = m[0].properties) == null ? void 0 : M.kind) === "road_relation" ? Ri : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("address.")), t ? Oi : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? Ii : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("poi.")), n ? Wi : (
          /*isReverse*/
          m[7] ? Mi : Ti
        ))))
      )
    );
  }
  let E = I(i, -1), h = E(i), O = g && vt(i);
  return {
    c() {
      e = R("li"), h.c(), c = J(), o = R("span"), a = R("span"), f = R("span"), d = ce(u), b = J(), O && O.c(), p = J(), W = R("span"), y = ce(P), l(f, "class", "primary svelte-ltkwvy"), l(a, "class", "svelte-ltkwvy"), l(W, "class", "line2 svelte-ltkwvy"), l(o, "class", "texts svelte-ltkwvy"), l(e, "tabindex", "0"), l(
        e,
        "data-selected",
        /*selected*/
        i[1]
      ), l(e, "class", "svelte-ltkwvy"), le(
        e,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(m, _) {
      B(m, e, _), h.m(e, null), C(e, c), C(e, o), C(o, a), C(a, f), C(f, d), C(a, b), O && O.m(a, null), C(o, p), C(o, W), C(W, y), w || (F = [
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
    p(m, [_]) {
      var $, M;
      E === (E = I(m, _)) && h ? h.p(m, _) : (h.d(1), h = E(m), h && (h.c(), h.m(e, c))), _ & /*feature*/
      1 && u !== (u = /*isReverse*/
      (m[7] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Me(d, u), _ & /*showPlaceType, feature, imageUrl*/
      37 && (g = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] && !/*feature*/
      m[0].address && /*feature*/
      (($ = m[0].properties) == null ? void 0 : $.kind) !== "road" && /*feature*/
      ((M = m[0].properties) == null ? void 0 : M.kind) !== "road_relation" && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[7]), g ? O ? O.p(m, _) : (O = vt(m), O.c(), O.m(a, null)) : O && (O.d(1), O = null), _ & /*feature*/
      1 && P !== (P = /*isReverse*/
      (m[7] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Me(y, P), _ & /*selected*/
      2 && l(
        e,
        "data-selected",
        /*selected*/
        m[1]
      ), _ & /*selected*/
      2 && le(
        e,
        "selected",
        /*selected*/
        m[1]
      );
    },
    i: A,
    o: A,
    d(m) {
      m && U(e), h.d(), O && O.d(), w = !1, se(F);
    }
  };
}
function Ai(i, e, t) {
  var I;
  let r, n, { feature: c } = e, { selected: o = !1 } = e, { showPlaceType: a } = e, { missingIconsCache: f } = e, { iconsBaseUrl: u } = e;
  const d = (I = c.properties) == null ? void 0 : I.categories;
  let b, g, p = 0, W = c.place_type[0] === "reverse";
  function P(E) {
    g && f.add(g), t(10, p++, p);
  }
  function y(E) {
    ht.call(this, i, E);
  }
  function w(E) {
    ht.call(this, i, E);
  }
  const F = (E) => P(E.currentTarget);
  return i.$$set = (E) => {
    "feature" in E && t(0, c = E.feature), "selected" in E && t(1, o = E.selected), "showPlaceType" in E && t(2, a = E.showPlaceType), "missingIconsCache" in E && t(9, f = E.missingIconsCache), "iconsBaseUrl" in E && t(3, u = E.iconsBaseUrl);
  }, i.$$.update = () => {
    var E, h, O, v;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        t(11, r--, r), t(4, b = d == null ? void 0 : d[r]), t(5, g = b ? u + b.replace(/ /g, "_") + ".svg" : void 0);
      while (r > -1 && (!g || f.has(g)));
    i.$$.dirty & /*feature*/
    1 && t(6, n = c.id.startsWith("poi.") ? (h = (E = c.properties) == null ? void 0 : E.categories) == null ? void 0 : h.join(", ") : ((v = (O = c.properties) == null ? void 0 : O.place_type_name) == null ? void 0 : v[0]) ?? c.place_type[0]);
  }, t(11, r = (d == null ? void 0 : d.length) ?? 0), [
    c,
    o,
    a,
    u,
    b,
    g,
    n,
    W,
    P,
    f,
    p,
    r,
    y,
    w,
    F
  ];
}
class Bi extends be {
  constructor(e) {
    super(), ge(this, e, Ai, Di, he, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function Pi(i) {
  let e;
  return {
    c() {
      e = R("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', l(e, "class", "svelte-7cmwmc");
    },
    m(t, r) {
      B(t, e, r);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && U(e);
    }
  };
}
class Fi extends be {
  constructor(e) {
    super(), ge(this, e, null, Pi, he, {});
  }
}
function ji(i) {
  let e, t;
  return {
    c() {
      e = re("svg"), t = re("path"), l(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), l(e, "viewBox", "0 0 60.006 21.412"), l(e, "width", "14"), l(e, "height", "20"), l(e, "class", "svelte-en2qvf");
    },
    m(r, n) {
      B(r, e, n), C(e, t);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && U(e);
    }
  };
}
class Hi extends be {
  constructor(e) {
    super(), ge(this, e, null, ji, he, {});
  }
}
function Zi(i) {
  let e, t, r;
  return {
    c() {
      e = re("svg"), t = re("circle"), r = re("path"), l(t, "cx", "4.789"), l(t, "cy", "4.787"), l(t, "r", "3.85"), Be(t, "stroke-width", "1.875"), Be(t, "fill", "none"), l(r, "d", "M12.063 12.063 7.635 7.635"), Be(r, "stroke-width", "1.875"), Be(r, "stroke-linecap", "round"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "width", "13"), l(e, "height", "13"), l(e, "viewBox", "0 0 13 13"), l(e, "class", "svelte-1bpbt60");
    },
    m(n, c) {
      B(n, e, c), C(e, t), C(e, r);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && U(e);
    }
  };
}
class Gi extends be {
  constructor(e) {
    super(), ge(this, e, null, Zi, he, {});
  }
}
function Qi(i, e, t) {
  const r = e[1], n = e[0], c = r - n;
  return i === r && t ? i : ((i - n) % c + c) % c + n;
}
function Lt(i) {
  const e = [...i];
  return e[2] < e[0] && (e[2] += 360), e;
}
let Ne;
async function qi(i, e, t) {
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
          let c;
          try {
            return c = await new Promise((o, a) => {
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
            }), c;
          } catch {
          } finally {
            n.cachedLocationExpiry && (Ne = {
              time: Date.now(),
              coords: c
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
const _t = /([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})/, yt = /(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?/i, wt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?/i, Et = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?/i, kt = /(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?/i;
function Vi(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    if (i == "DD")
      return this.decimalCoordinates;
    const e = this.decimalCoordinates.split(",").map((o) => Number(o.trim()));
    let t = pt(e[0], i), r = pt(e[1], i);
    t.endsWith('.0"') && r.endsWith('.0"') && (t = t.replace(/\.0"$/, '"'), r = r.replace(/\.0"$/, '"'));
    const n = e[0] >= 0 ? " N" : " S", c = e[1] >= 0 ? " E" : " W";
    return `${t + n}, ${r + c}`;
  } else
    throw new Error("no decimal coordinates to convert");
}
function pt(i, e) {
  const t = Math.abs(i), r = Math.floor(t), n = (t - r) * 60;
  if (e == "DM") {
    let a = Ki(n, 3).toFixed(3).padStart(6, "0");
    return `${r}° ${a}'`;
  }
  let c = Math.floor(n), o = ((n - c) * 60).toFixed(1).padStart(4, "0");
  return c = c.toString().padStart(2, "0"), `${r}° ${c}' ${o}"`;
}
function Ki(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function rt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, r = null, n = "", c = "", o = [], a = !1;
  if (_t.test(i))
    if (o = _t.exec(i), a = Ce(o), a)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), r = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (r *= -1);
    else
      throw new Error("invalid coordinate format");
  else if (yt.test(i))
    if (o = yt.exec(i), a = Ce(o), a) {
      if (t = o[2], r = o[6], t.includes(",") && (t = t.replace(",", ".")), r.includes(",") && (r = r.replace(",", ".")), Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(r)) == Number(r))
        throw new Error("integer only coordinate provided");
      o[1] ? (n = o[1], c = o[5]) : o[4] && (n = o[4], c = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (wt.test(i))
    if (o = wt.exec(i), a = Ce(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60), o[6] && (t += o[6].replace(",", ".") / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[9])), o[11] && (r += o[11] / 60), o[13] && (r += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (r = -1 * r), o[1] ? (n = o[1], c = o[8]) : o[7] && (n = o[7], c = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Et.test(i))
    if (o = Et.exec(i), a = Ce(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60), o[6] && (t += o[6] / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[10])), o[12] && (r += o[12] / 60), o[14] && (r += o[14] / 3600), parseInt(o[10]) < 0 && (r = -1 * r), o[1] ? (n = o[1], c = o[9]) : o[8] && (n = o[8], c = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (kt.test(i))
    if (o = kt.exec(i), a = Ce(o), a)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60), o[6] && (t += o[6].replace(",", ".") / 3600), parseInt(o[2]) < 0 && (t = -1 * t), r = Math.abs(parseInt(o[10])), o[12] && (r += o[12].replace(",", ".") / 60), o[14] && (r += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (r = -1 * r), o[1] ? (n = o[1], c = o[9]) : o[8] && (n = o[8], c = o[16]);
    else
      throw new Error("invalid coordinates format");
  if (a) {
    if (Math.abs(r) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if ((n || c) && (!n || !c))
      throw new Error("invalid coordinates format");
    if (n && n == c)
      throw new Error("invalid coordinates format");
    let f = /S|SOUTH/i;
    f.test(n) && t > 0 && (t = -1 * t), f = /W|WEST/i, f.test(c) && r > 0 && (r = -1 * r);
    const u = o[0].trim();
    let d, b;
    const g = /[,/;\u0020]/g, p = u.match(g);
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
        let F = 0, I = 0;
        for (; F <= y; )
          w = u.indexOf(p[F], I), I = w + 1, F++;
        d = u.substring(0, w).trim(), b = u.substring(w + 1).trim();
      }
    }
    const W = d.split(".");
    if (W.length == 2 && W[1] == 0 && W[1].length != 2)
      throw new Error("invalid coordinates format");
    const P = b.split(".");
    if (P.length == 2 && P[1] == 0 && P[1].length != 2)
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
      closeEnough: Ji,
      toCoordinateFormat: Vi
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Ce(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, r = /[eastsouthnorthwest]+/i, n = e.length / 2;
  for (let c = 0; c < n; c++) {
    const o = e[c], a = e[c + n], f = t.test(o) && t.test(a), u = r.test(o) && r.test(a), d = o == a;
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
function Ji(i) {
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return St(this.decimalLatitude, Number(e[0])) && St(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Xi = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
rt.to = Xi;
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
  }
];
function tr() {
  const i = [];
  return Yi.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...xi });
  }), [...i, ...$i, ...er];
}
const ir = tr();
rt.formats = ir.map((i) => i.verbatimCoordinates);
const rr = rt;
function Nt(i, e, t) {
  const r = i.slice();
  return r[81] = e[t], r[83] = t, r;
}
function Ct(i) {
  let e, t;
  return e = new Fi({}), {
    c() {
      ue(e.$$.fragment);
    },
    m(r, n) {
      ne(e, r, n), t = !0;
    },
    i(r) {
      t || (j(e.$$.fragment, r), t = !0);
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
  let e, t, r, n, c;
  return t = new Hi({}), {
    c() {
      e = R("button"), ue(t.$$.fragment), l(e, "type", "button"), l(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), l(e, "class", "svelte-zh3kmv"), le(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(o, a) {
      B(o, e, a), ne(t, e, null), r = !0, n || (c = q(
        e,
        "click",
        /*click_handler_2*/
        i[67]
      ), n = !0);
    },
    p(o, a) {
      (!r || a[0] & /*reverseButtonTitle*/
      512) && l(
        e,
        "title",
        /*reverseButtonTitle*/
        o[9]
      ), (!r || a[0] & /*reverseActive*/
      1) && le(
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
      o && U(e), oe(t), n = !1, c();
    }
  };
}
function nr(i) {
  let e, t = [], r = /* @__PURE__ */ new Map(), n, c, o, a = bt(
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
    let d = Nt(i, a, u), b = f(d);
    r.set(b, t[u] = Mt(b, d));
  }
  return {
    c() {
      e = R("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      l(e, "class", "svelte-zh3kmv");
    },
    m(u, d) {
      B(u, e, d);
      for (let b = 0; b < t.length; b += 1)
        t[b] && t[b].m(e, null);
      n = !0, c || (o = [
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
      ], c = !0);
    },
    p(u, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (a = bt(
        /*listFeatures*/
        u[14]
      ), Fe(), t = ki(t, d, f, 1, u, a, r, e, Ei, Mt, null, Nt), je());
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
      u && U(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      c = !1, se(o);
    }
  };
}
function or(i) {
  let e, t, r, n, c, o;
  return t = new Dt({}), {
    c() {
      e = R("div"), ue(t.$$.fragment), r = J(), n = R("div"), c = ce(
        /*noResultsMessage*/
        i[7]
      ), l(n, "class", "svelte-zh3kmv"), l(e, "class", "no-results svelte-zh3kmv");
    },
    m(a, f) {
      B(a, e, f), ne(t, e, null), C(e, r), C(e, n), C(n, c), o = !0;
    },
    p(a, f) {
      (!o || f[0] & /*noResultsMessage*/
      128) && Me(
        c,
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
      a && U(e), oe(t);
    }
  };
}
function sr(i) {
  let e = "", t;
  return {
    c() {
      t = ce(e);
    },
    m(r, n) {
      B(r, t, n);
    },
    p: A,
    i: A,
    o: A,
    d(r) {
      r && U(t);
    }
  };
}
function ar(i) {
  let e, t, r, n, c, o, a, f, u, d, b;
  return t = new Dt({}), f = new Ut({}), {
    c() {
      e = R("div"), ue(t.$$.fragment), r = J(), n = R("div"), c = ce(
        /*errorMessage*/
        i[6]
      ), o = J(), a = R("button"), ue(f.$$.fragment), l(n, "class", "svelte-zh3kmv"), l(a, "class", "svelte-zh3kmv"), l(e, "class", "error svelte-zh3kmv");
    },
    m(g, p) {
      B(g, e, p), ne(t, e, null), C(e, r), C(e, n), C(n, c), C(e, o), C(e, a), ne(f, a, null), u = !0, d || (b = q(
        a,
        "click",
        /*click_handler_3*/
        i[68]
      ), d = !0);
    },
    p(g, p) {
      (!u || p[0] & /*errorMessage*/
      64) && Me(
        c,
        /*errorMessage*/
        g[6]
      );
    },
    i(g) {
      u || (j(t.$$.fragment, g), j(f.$$.fragment, g), u = !0);
    },
    o(g) {
      G(t.$$.fragment, g), G(f.$$.fragment, g), u = !1;
    },
    d(g) {
      g && U(e), oe(t), oe(f), d = !1, b();
    }
  };
}
function Mt(i, e) {
  let t, r, n;
  function c() {
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
  }), r.$on("mouseenter", c), r.$on("focus", o), {
    key: i,
    first: null,
    c() {
      t = fi(), ue(r.$$.fragment), this.first = t;
    },
    m(a, f) {
      B(a, t, f), ne(r, a, f), n = !0;
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
      a && U(t), oe(r, a);
    }
  };
}
function lr(i) {
  let e, t, r, n, c, o, a, f, u, d, b, g, p, W, P, y, w, F, I, E, h, O = !1;
  c = new Gi({}), b = new Ut({});
  let v = (
    /*abortController*/
    i[19] && Ct()
  ), S = (
    /*enableReverse*/
    i[5] === !0 && Tt(i)
  );
  const m = (
    /*#slots*/
    i[59].default
  ), _ = li(
    m,
    i,
    /*$$scope*/
    i[58],
    null
  ), $ = [ar, sr, or, nr], M = [];
  function ve(L, D) {
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
  return ~(y = ve(i)) && (w = M[y] = $[y](i)), {
    c() {
      e = J(), t = R("form"), r = R("div"), n = R("button"), ue(c.$$.fragment), o = J(), a = R("input"), f = J(), u = R("div"), d = R("button"), ue(b.$$.fragment), g = J(), v && v.c(), p = J(), S && S.c(), W = J(), _ && _.c(), P = J(), w && w.c(), l(n, "class", "search-button svelte-zh3kmv"), l(n, "type", "button"), l(
        a,
        "placeholder",
        /*placeholder*/
        i[8]
      ), l(
        a,
        "aria-label",
        /*placeholder*/
        i[8]
      ), l(a, "class", "svelte-zh3kmv"), l(d, "type", "button"), l(
        d,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), l(d, "class", "svelte-zh3kmv"), l(u, "class", "clear-button-container svelte-zh3kmv"), le(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), l(r, "class", "input-group svelte-zh3kmv"), l(t, "tabindex", "0"), l(t, "class", F = ft(
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
    m(L, D) {
      B(L, e, D), B(L, t, D), C(t, r), C(r, n), ne(c, n, null), C(r, o), C(r, a), i[61](a), mt(
        a,
        /*searchValue*/
        i[1]
      ), C(r, f), C(r, u), C(u, d), ne(b, d, null), C(u, g), v && v.m(u, null), C(r, p), S && S.m(r, null), C(r, W), _ && _.m(r, null), C(t, P), ~y && M[y].m(t, null), I = !0, E || (h = [
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
        q(t, "submit", mi(
          /*handleOnSubmit*/
          i[21]
        ))
      ], E = !0);
    },
    p(L, D) {
      (!I || D[0] & /*placeholder*/
      256) && l(
        a,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!I || D[0] & /*placeholder*/
      256) && l(
        a,
        "aria-label",
        /*placeholder*/
        L[8]
      ), D[0] & /*searchValue*/
      2 && a.value !== /*searchValue*/
      L[1] && mt(
        a,
        /*searchValue*/
        L[1]
      ), (!I || D[0] & /*clearButtonTitle*/
      8) && l(
        d,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[19] ? v ? D[0] & /*abortController*/
      524288 && j(v, 1) : (v = Ct(), v.c(), j(v, 1), v.m(u, null)) : v && (Fe(), G(v, 1, 1, () => {
        v = null;
      }), je()), (!I || D[0] & /*searchValue*/
      2) && le(
        u,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? S ? (S.p(L, D), D[0] & /*enableReverse*/
      32 && j(S, 1)) : (S = Tt(L), S.c(), j(S, 1), S.m(r, W)) : S && (Fe(), G(S, 1, 1, () => {
        S = null;
      }), je()), _ && _.p && (!I || D[1] & /*$$scope*/
      134217728) && ui(
        _,
        m,
        L,
        /*$$scope*/
        L[58],
        I ? ci(
          m,
          /*$$scope*/
          L[58],
          D,
          null
        ) : di(
          /*$$scope*/
          L[58]
        ),
        null
      );
      let V = y;
      y = ve(L), y === V ? ~y && M[y].p(L, D) : (w && (Fe(), G(M[V], 1, 1, () => {
        M[V] = null;
      }), je()), ~y ? (w = M[y], w ? w.p(L, D) : (w = M[y] = $[y](L), w.c()), j(w, 1), w.m(t, null)) : w = null), (!I || D[0] & /*className*/
      4 && F !== (F = ft(
        /*className*/
        L[2]
      ) + " svelte-zh3kmv")) && l(t, "class", F), (!I || D[0] & /*className, collapsed, searchValue*/
      22) && le(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      I || (j(O), j(c.$$.fragment, L), j(b.$$.fragment, L), j(v), j(S), j(_, L), j(w), I = !0);
    },
    o(L) {
      G(O), G(c.$$.fragment, L), G(b.$$.fragment, L), G(v), G(S), G(_, L), G(w), I = !1;
    },
    d(L) {
      L && (U(e), U(t)), oe(c), i[61](null), oe(b), v && v.d(), S && S.d(), _ && _.d(L), ~y && M[y].d(), E = !1, se(h);
    }
  };
}
function cr(i, e, t) {
  let r, { $$slots: n = {}, $$scope: c } = e, { class: o = void 0 } = e, { apiKey: a } = e, { bbox: f = void 0 } = e, { clearButtonTitle: u = "clear" } = e, { clearOnBlur: d = !1 } = e, { collapsed: b = !1 } = e, { country: g = void 0 } = e, { debounceSearch: p = 200 } = e, { enableReverse: W = !1 } = e, { errorMessage: P = "Something went wrong…" } = e, { filter: y = () => !0 } = e, { flyTo: w = !0 } = e, { fuzzyMatch: F = !0 } = e, { language: I = void 0 } = e, { limit: E = void 0 } = e, { mapController: h = void 0 } = e, { minLength: O = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: S = "Search" } = e, { proximity: m = [{ type: "server-geolocation" }] } = e, { reverseActive: _ = W === "always" } = e, { reverseButtonTitle: $ = "toggle reverse geocoding" } = e, { searchValue: M = "" } = e, { showFullGeometry: ve = !0 } = e, { showPlaceType: L = "ifNeeded" } = e, { showResultsWhileTyping: D = !0 } = e, { selectFirst: V = !0 } = e, { flyToSelected: Le = !1 } = e, { markerOnSelected: Ie = !0 } = e, { types: de = void 0 } = e, { excludeTypes: Oe = !1 } = e, { zoom: Se = 16 } = e, { maxZoom: _e = 18 } = e, { apiUrl: He = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: Ze = {} } = e, { iconsBaseUrl: nt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.2.3/icons/" } = e, { adjustUrlQuery: Ge = (s) => {
  } } = e;
  function At() {
    ee.focus();
  }
  function Bt() {
    ee.blur();
  }
  function ot(s, Z = !0, K = !1) {
    t(1, M = s), Z ? (t(15, z = -1), at()) : (Ke(!K, K), setTimeout(() => {
      ee.focus(), ee.select();
    }));
  }
  function Pt() {
    t(14, N = void 0), t(55, k = void 0), t(15, z = -1);
  }
  function Ft() {
    t(54, H = []), t(55, k = void 0);
  }
  let ye = !1, N, H, k, st = "", ee, z = -1, te, Re = [], fe, we, ze, Qe;
  const jt = /* @__PURE__ */ new Set(), ae = vi();
  bi(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setMarkers(void 0, void 0));
  });
  function at(s) {
    if (we && (clearTimeout(we), we = void 0), z > -1 && N)
      t(55, k = N[z]), t(1, M = k.place_type[0] === "reverse" ? k.place_name : k.place_name.replace(/,.*/, "")), t(18, te = void 0), t(54, H = void 0), t(15, z = -1);
    else if (M) {
      const Z = s || !qe(M);
      Ve(M, { exact: !0 }).then(() => {
        t(54, H = N), t(55, k = void 0), Z && Ht();
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
  async function Ve(s, { byId: Z = !1, exact: K = !1 } = {}) {
    t(18, te = void 0), fe == null || fe.abort();
    const X = new AbortController();
    t(19, fe = X);
    try {
      const T = qe(s), Y = new URLSearchParams();
      if (I !== void 0 && Y.set("language", Array.isArray(I) ? I.join(",") : I ?? ""), de && Y.set("types", de.join(",")), Oe && Y.set("excludeTypes", String(Oe)), f && Y.set("bbox", f.map((De) => De.toFixed(6)).join(",")), g && Y.set("country", Array.isArray(g) ? g.join(",") : g), !Z && !T) {
        const De = await qi(h, m, X);
        De && Y.set("proximity", De), (K || !D) && Y.set("autocomplete", "false"), Y.set("fuzzyMatch", String(F));
      }
      E !== void 0 && (!T || (de == null ? void 0 : de.length) === 1) && Y.set("limit", String(E)), Y.set("key", a), Ge(Y);
      const Ue = He + "/" + encodeURIComponent(T ? T.decimalLongitude + "," + T.decimalLatitude : s) + ".json?" + Y.toString();
      if (Ue === st) {
        Z ? (t(14, N = void 0), t(55, k = Re[0])) : t(14, N = Re);
        return;
      }
      st = Ue;
      const Xe = await fetch(Ue, { signal: X.signal, ...Ze });
      if (!Xe.ok)
        throw new Error(await Xe.text());
      const Ye = await Xe.json();
      ae("response", { url: Ue, featureCollection: Ye }), Z ? (t(14, N = void 0), t(55, k = Ye.features[0]), Re = [k]) : (t(14, N = Ye.features.filter(y)), T && N.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + T.decimalLongitude + "_" + T.decimalLatitude,
        text: T.decimalLatitude + ", " + T.decimalLongitude,
        place_name: T.decimalLatitude + ", " + T.decimalLongitude,
        place_type: ["reverse"],
        center: [T.decimalLongitude, T.decimalLatitude],
        bbox: [
          T.decimalLongitude,
          T.decimalLatitude,
          T.decimalLongitude,
          T.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [T.decimalLongitude, T.decimalLatitude]
        }
      }), Re = N, T && ee.focus());
    } catch (T) {
      if (T && typeof T == "object" && "name" in T && T.name === "AbortError")
        return;
      throw T;
    } finally {
      X === fe && t(19, fe = void 0);
    }
  }
  function Ht() {
    var K;
    if (!(H != null && H.length) || !w)
      return;
    const s = [180, 90, -180, -90], Z = !H.some((X) => !X.matching_text);
    for (const X of H)
      if (Z || !X.matching_text)
        for (const T of [0, 1, 2, 3])
          s[T] = Math[T < 2 ? "min" : "max"](s[T], ((K = X.bbox) == null ? void 0 : K[T]) ?? X.center[T % 2]);
    h && H.length > 0 && (k && s[0] === s[2] && s[1] === s[3] ? h.flyTo(k.center, Se) : h.fitBounds(Lt(s), 50, _e));
  }
  function Zt(s) {
    t(0, _ = W === "always"), t(14, N = void 0), t(55, k = void 0), t(15, z = -1), ot(s[1].toFixed(6) + ", " + Qi(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Gt(s) {
    if (!N)
      return;
    let Z = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    Z && (z === (V ? 0 : -1) && Z === -1 && t(15, z = N.length), t(15, z += Z), z >= N.length && t(15, z = -1), z < 0 && V && t(15, z = 0), s.preventDefault());
  }
  function Ke(s = !0, Z = !1) {
    if (t(18, te = void 0), D || Z) {
      if (we && clearTimeout(we), M.length < O)
        return;
      const K = M;
      we = window.setTimeout(
        () => {
          Ve(K).catch((X) => t(18, te = X));
        },
        s ? p : 0
      );
    } else
      t(14, N = void 0), t(18, te = void 0);
  }
  function Je(s) {
    t(55, k = s), t(1, M = s.place_name), t(15, z = -1);
  }
  const Qt = () => ee.focus();
  function qt(s) {
    et[s ? "unshift" : "push"](() => {
      ee = s, t(17, ee);
    });
  }
  function Vt() {
    M = this.value, t(1, M), t(13, ye), t(27, d);
  }
  const Kt = () => t(13, ye = !0), Jt = () => t(13, ye = !1), Xt = () => Ke(), Yt = () => {
    t(1, M = ""), ee.focus();
  }, xt = () => t(0, _ = !_), $t = () => t(18, te = void 0), ei = (s) => t(15, z = s), ti = (s) => Je(s), ii = () => {
    V || t(15, z = -1);
  }, ri = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, o = s.class), "apiKey" in s && t(25, a = s.apiKey), "bbox" in s && t(26, f = s.bbox), "clearButtonTitle" in s && t(3, u = s.clearButtonTitle), "clearOnBlur" in s && t(27, d = s.clearOnBlur), "collapsed" in s && t(4, b = s.collapsed), "country" in s && t(28, g = s.country), "debounceSearch" in s && t(29, p = s.debounceSearch), "enableReverse" in s && t(5, W = s.enableReverse), "errorMessage" in s && t(6, P = s.errorMessage), "filter" in s && t(30, y = s.filter), "flyTo" in s && t(31, w = s.flyTo), "fuzzyMatch" in s && t(32, F = s.fuzzyMatch), "language" in s && t(33, I = s.language), "limit" in s && t(34, E = s.limit), "mapController" in s && t(35, h = s.mapController), "minLength" in s && t(36, O = s.minLength), "noResultsMessage" in s && t(7, v = s.noResultsMessage), "placeholder" in s && t(8, S = s.placeholder), "proximity" in s && t(37, m = s.proximity), "reverseActive" in s && t(0, _ = s.reverseActive), "reverseButtonTitle" in s && t(9, $ = s.reverseButtonTitle), "searchValue" in s && t(1, M = s.searchValue), "showFullGeometry" in s && t(38, ve = s.showFullGeometry), "showPlaceType" in s && t(10, L = s.showPlaceType), "showResultsWhileTyping" in s && t(39, D = s.showResultsWhileTyping), "selectFirst" in s && t(11, V = s.selectFirst), "flyToSelected" in s && t(40, Le = s.flyToSelected), "markerOnSelected" in s && t(41, Ie = s.markerOnSelected), "types" in s && t(42, de = s.types), "excludeTypes" in s && t(43, Oe = s.excludeTypes), "zoom" in s && t(44, Se = s.zoom), "maxZoom" in s && t(45, _e = s.maxZoom), "apiUrl" in s && t(46, He = s.apiUrl), "fetchParameters" in s && t(47, Ze = s.fetchParameters), "iconsBaseUrl" in s && t(12, nt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(48, Ge = s.adjustUrlQuery), "$$scope" in s && t(58, c = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      t(16, ze = ye), d && !ye && t(1, M = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | i.$$.dirty[1] & /*minLength*/
    32 && M.length < O && (t(55, k = void 0), t(14, N = void 0), t(18, te = void 0), t(54, H = N)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && ve && k && !k.address && k.geometry.type === "Point" && k.place_type[0] !== "reverse" && Ve(k.id, { byId: !0 }).catch((s) => t(18, te = s)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (h && k && k.id !== Qe && w && (!k.bbox || k.bbox[0] === k.bbox[2] && k.bbox[1] === k.bbox[3] ? h.flyTo(k.center, k.id.startsWith("poi.") || k.id.startsWith("address.") ? _e : Se) : h.fitBounds(Lt(k.bbox), 50, _e), t(14, N = void 0), t(54, H = void 0), t(15, z = -1)), t(56, Qe = k == null ? void 0 : k.id)), i.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && V && N != null && N.length && t(15, z = 0), i.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (V || t(15, z = -1)), i.$$.dirty[0] & /*listFeatures*/
    16384 | i.$$.dirty[1] & /*markedFeatures*/
    8388608 && H !== N && t(54, H = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | i.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && h && h.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          _ && Zt(s.coordinates);
          break;
        case "markerClick":
          {
            const Z = N == null ? void 0 : N.find((K) => K.id === s.id);
            Z && Je(Z);
          }
          break;
        case "markerMouseEnter":
          H && t(15, z = ze ? (N == null ? void 0 : N.findIndex((Z) => Z.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          H && t(15, z = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && t(57, r = N == null ? void 0 : N[z]), i.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && h && r && w && Le && h.flyTo(r.center, r.id.startsWith("poi.") || r.id.startsWith("address.") ? _e : Se), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Ie || h == null || h.setMarkers(void 0, void 0)), i.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && h && Ie && !H && (h.setMarkers(r ? [r] : void 0, void 0), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && h && h.setMarkers(H, k), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && H && h && h.setSelectedMarker(z), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16 && h) {
      const s = qe(M);
      h.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    67108864 && ae("select", r), i.$$.dirty[1] & /*picked*/
    16777216 && ae("pick", k), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && ae("optionsVisibilityChange", ze && !!N), i.$$.dirty[0] & /*listFeatures*/
    16384 && ae("featuresListed", N), i.$$.dirty[1] & /*markedFeatures*/
    8388608 && ae("featuresMarked", H), i.$$.dirty[0] & /*reverseActive*/
    1 && ae("reverseToggle", _), i.$$.dirty[0] & /*searchValue*/
    2 && ae("queryChange", M), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && h && h.indicateReverse(_);
  }, [
    _,
    M,
    o,
    u,
    b,
    W,
    P,
    v,
    S,
    $,
    L,
    V,
    nt,
    ye,
    N,
    z,
    ze,
    ee,
    te,
    fe,
    jt,
    at,
    Gt,
    Ke,
    Je,
    a,
    f,
    d,
    g,
    p,
    y,
    w,
    F,
    I,
    E,
    h,
    O,
    m,
    ve,
    D,
    Le,
    Ie,
    de,
    Oe,
    Se,
    _e,
    He,
    Ze,
    Ge,
    At,
    Bt,
    ot,
    Pt,
    Ft,
    H,
    k,
    Qe,
    r,
    c,
    n,
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
    ti,
    ii,
    ri
  ];
}
let ur = class extends be {
  constructor(e) {
    super(), ge(
      this,
      e,
      cr,
      lr,
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
class hr extends EventTarget {
  constructor({ target: t, ...r }) {
    super();
    ct(this, x, void 0);
    ut(this, x, new ur({
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
      ie(this, x).$on(n, (c) => this.dispatchEvent(c));
    dr.register(this, ie(this, x));
  }
  setOptions(t) {
    ie(this, x).$set(t);
  }
  setQuery(t, r = !0) {
    var n;
    (n = ie(this, x)) == null || n.setQuery(t, r);
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
  hr as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
