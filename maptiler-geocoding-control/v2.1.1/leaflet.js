var Dn = Object.defineProperty;
var vi = (i) => {
  throw TypeError(i);
};
var Un = (i, e, t) => e in i ? Dn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var I = (i, e, t) => Un(i, typeof e != "symbol" ? e + "" : e, t), wi = (i, e, t) => e.has(i) || vi("Cannot " + t);
var ve = (i, e, t) => (wi(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Yt = (i, e, t) => e.has(i) ? vi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Xt = (i, e, t, n) => (wi(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as Ne from "leaflet";
function $() {
}
function Fn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Xi(i) {
  return i();
}
function Ei() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(i) {
  i.forEach(Xi);
}
function Qi(i) {
  return typeof i == "function";
}
function Xe(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ct;
function ge(i, e) {
  return i === e ? !0 : (Ct || (Ct = document.createElement("a")), Ct.href = e, i === Ct.href);
}
function qn(i) {
  return Object.keys(i).length === 0;
}
function Zn(i, e, t, n) {
  if (i) {
    const r = Ji(i, e, t, n);
    return i[0](r);
  }
}
function Ji(i, e, t, n) {
  return i[1] && n ? Fn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function jn(i, e, t, n) {
  return i[2], e.dirty;
}
function Hn(i, e, t, n, r, l) {
  if (r) {
    const a = Ji(e, t, n, l);
    i.p(a, r);
  }
}
function Vn(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Bt(i) {
  return i ?? "";
}
function j(i, e) {
  i.appendChild(e);
}
function ie(i, e, t) {
  i.insertBefore(e, t || null);
}
function ee(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Q(i) {
  return document.createElement(i);
}
function Oe(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Ke(i) {
  return document.createTextNode(i);
}
function Le() {
  return Ke(" ");
}
function Kn() {
  return Ke("");
}
function fe(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function Yn(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function x(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Xn(i) {
  return Array.from(i.childNodes);
}
function Et(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Li(i, e) {
  i.value = e ?? "";
}
function Be(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Qn(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Lt;
function wt(i) {
  Lt = i;
}
function $i() {
  if (!Lt) throw new Error("Function called outside component initialization");
  return Lt;
}
function Jn(i) {
  $i().$$.on_destroy.push(i);
}
function en() {
  const i = $i();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const l = Qn(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((a) => {
        a.call(i, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function $n(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ut = [], ei = [];
let at = [];
const _i = [], er = /* @__PURE__ */ Promise.resolve();
let ti = !1;
function tr() {
  ti || (ti = !0, er.then(tn));
}
function ii(i) {
  at.push(i);
}
const Qt = /* @__PURE__ */ new Set();
let lt = 0;
function tn() {
  if (lt !== 0)
    return;
  const i = Lt;
  do {
    try {
      for (; lt < ut.length; ) {
        const e = ut[lt];
        lt++, wt(e), ir(e.$$);
      }
    } catch (e) {
      throw ut.length = 0, lt = 0, e;
    }
    for (wt(null), ut.length = 0, lt = 0; ei.length; ) ei.pop()();
    for (let e = 0; e < at.length; e += 1) {
      const t = at[e];
      Qt.has(t) || (Qt.add(t), t());
    }
    at.length = 0;
  } while (ut.length);
  for (; _i.length; )
    _i.pop()();
  ti = !1, Qt.clear(), wt(i);
}
function ir(i) {
  if (i.fragment !== null) {
    i.update(), Ze(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(ii);
  }
}
function nr(i) {
  const e = [], t = [];
  at.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), at = e;
}
const kt = /* @__PURE__ */ new Set();
let nt;
function Rt() {
  nt = {
    r: 0,
    c: [],
    p: nt
    // parent group
  };
}
function Pt() {
  nt.r || Ze(nt.c), nt = nt.p;
}
function oe(i, e) {
  i && i.i && (kt.delete(i), i.i(e));
}
function ce(i, e, t, n) {
  if (i && i.o) {
    if (kt.has(i)) return;
    kt.add(i), nt.c.push(() => {
      kt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Si(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function rr(i, e) {
  ce(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function sr(i, e, t, n, r, l, a, o, d, c, L, _) {
  let C = i.length, M = l.length, N = C;
  const A = {};
  for (; N--; ) A[i[N].key] = N;
  const k = [], O = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), R = [];
  for (N = M; N--; ) {
    const B = _(r, l, N), s = t(B);
    let u = a.get(s);
    u ? R.push(() => u.p(B, e)) : (u = c(s, B), u.c()), O.set(s, k[N] = u), s in A && S.set(s, Math.abs(N - A[s]));
  }
  const W = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
  function D(B) {
    oe(B, 1), B.m(o, L), a.set(B.key, B), L = B.first, M--;
  }
  for (; C && M; ) {
    const B = k[M - 1], s = i[C - 1], u = B.key, f = s.key;
    B === s ? (L = B.first, C--, M--) : O.has(f) ? !a.has(u) || W.has(u) ? D(B) : H.has(f) ? C-- : S.get(u) > S.get(f) ? (H.add(u), D(B)) : (W.add(f), C--) : (d(s, a), C--);
  }
  for (; C--; ) {
    const B = i[C];
    O.has(B.key) || d(B, a);
  }
  for (; M; ) D(k[M - 1]);
  return Ze(R), k;
}
function Ye(i) {
  i && i.c();
}
function Ue(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), ii(() => {
    const l = i.$$.on_mount.map(Xi).filter(Qi);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : Ze(l), i.$$.on_mount = [];
  }), r.forEach(ii);
}
function Fe(i, e) {
  const t = i.$$;
  t.fragment !== null && (nr(t.after_update), Ze(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function or(i, e) {
  i.$$.dirty[0] === -1 && (ut.push(i), tr(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Qe(i, e, t, n, r, l, a = null, o = [-1]) {
  const d = Lt;
  wt(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: $,
    not_equal: r,
    bound: Ei(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Ei(),
    dirty: o,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  a && a(c.root);
  let L = !1;
  if (c.ctx = t ? t(i, e.props || {}, (_, C, ...M) => {
    const N = M.length ? M[0] : C;
    return c.ctx && r(c.ctx[_], c.ctx[_] = N) && (!c.skip_bound && c.bound[_] && c.bound[_](N), L && or(i, _)), C;
  }) : [], c.update(), L = !0, Ze(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const _ = Xn(e.target);
      c.fragment && c.fragment.l(_), _.forEach(ee);
    } else
      c.fragment && c.fragment.c();
    e.intro && oe(i.$$.fragment), Ue(i, e.target, e.anchor), tn();
  }
  wt(d);
}
class Je {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    I(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    I(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Fe(this, 1), this.$destroy = $;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Qi(t))
      return $;
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
    this.$$set && !qn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const lr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(lr);
function ur(i) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), x(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), x(e, "viewBox", "0 0 14 14"), x(e, "width", "13"), x(e, "height", "13"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ie(n, e, r), j(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && ee(e);
    }
  };
}
class nn extends Je {
  constructor(e) {
    super(), Qe(this, e, null, ur, Xe, {});
  }
}
function ar(i) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), x(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), x(e, "viewBox", "0 0 30 30"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      ie(n, e, r), j(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && ee(e);
    }
  };
}
class rn extends Je {
  constructor(e) {
    super(), Qe(this, e, null, ar, Xe, {});
  }
}
function fr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function cr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function hr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function dr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function gr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function mr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function pr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[6]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && x(e, "src", t), r & /*placeType*/
      64 && x(
        e,
        "alt",
        /*placeType*/
        n[6]
      ), r & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function yr(i) {
  let e, t, n, r;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*imageUrl*/
      i[5]) || x(e, "src", t), x(
        e,
        "alt",
        /*category*/
        i[4]
      ), x(
        e,
        "title",
        /*placeType*/
        i[6]
      ), x(e, "class", "svelte-z7p9pp");
    },
    m(l, a) {
      ie(l, e, a), n || (r = fe(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(l, a) {
      a & /*imageUrl*/
      32 && !ge(e.src, t = /*imageUrl*/
      l[5]) && x(e, "src", t), a & /*category*/
      16 && x(
        e,
        "alt",
        /*category*/
        l[4]
      ), a & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && ee(e), n = !1, r();
    }
  };
}
function xi(i) {
  let e, t;
  return {
    c() {
      e = Q("span"), t = Ke(
        /*placeType*/
        i[6]
      ), x(e, "class", "secondary svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r), j(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && Et(
        t,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && ee(e);
    }
  };
}
function br(i) {
  let e, t, n, r, l, a, o, d, c, L = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), _, C, M = (
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
  ), N, A, k = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), O, S, R, W, H, D;
  function B(m, h) {
    return h & /*feature*/
    1 && (t = null), h & /*feature*/
    1 && (n = null), h & /*feature*/
    1 && (r = null), h & /*feature*/
    1 && (l = null), /*imageUrl*/
    m[5] ? yr : (
      /*feature*/
      m[0].address ? pr : (t == null && (t = !!/*feature*/
      m[0].id.startsWith("road.")), t ? mr : (n == null && (n = !!/*feature*/
      m[0].id.startsWith("address.")), n ? gr : (r == null && (r = !!/*feature*/
      m[0].id.startsWith("postal_code.")), r ? dr : (l == null && (l = !!/*feature*/
      m[0].id.startsWith("poi.")), l ? hr : (
        /*isReverse*/
        m[8] ? cr : fr
      )))))
    );
  }
  let s = B(i, -1), u = s(i), f = M && xi(i);
  return {
    c() {
      e = Q("li"), u.c(), a = Le(), o = Q("span"), d = Q("span"), c = Q("span"), _ = Ke(L), C = Le(), f && f.c(), N = Le(), A = Q("span"), O = Ke(k), x(c, "class", "primary svelte-z7p9pp"), x(d, "class", "svelte-z7p9pp"), x(A, "class", "line2 svelte-z7p9pp"), x(o, "class", "texts svelte-z7p9pp"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", S = /*style*/
      i[1] === "selected"), x(e, "aria-checked", R = /*style*/
      i[1] === "picked"), x(e, "class", W = Bt(
        /*style*/
        i[1]
      ) + " svelte-z7p9pp");
    },
    m(m, h) {
      ie(m, e, h), u.m(e, null), j(e, a), j(e, o), j(o, d), j(d, c), j(c, _), j(d, C), f && f.m(d, null), j(o, N), j(o, A), j(A, O), H || (D = [
        fe(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        fe(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        fe(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], H = !0);
    },
    p(m, [h]) {
      s === (s = B(m, h)) && u ? u.p(m, h) : (u.d(1), u = s(m), u && (u.c(), u.m(e, a))), h & /*feature*/
      1 && L !== (L = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Et(_, L), h & /*showPlaceType, feature, imageUrl*/
      37 && (M = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), M ? f ? f.p(m, h) : (f = xi(m), f.c(), f.m(d, null)) : f && (f.d(1), f = null), h & /*feature*/
      1 && k !== (k = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Et(O, k), h & /*style*/
      2 && S !== (S = /*style*/
      m[1] === "selected") && x(e, "aria-selected", S), h & /*style*/
      2 && R !== (R = /*style*/
      m[1] === "picked") && x(e, "aria-checked", R), h & /*style*/
      2 && W !== (W = Bt(
        /*style*/
        m[1]
      ) + " svelte-z7p9pp") && x(e, "class", W);
    },
    i: $,
    o: $,
    d(m) {
      m && ee(e), u.d(), f && f.d(), H = !1, Ze(D);
    }
  };
}
function vr(i, e, t) {
  var H;
  let n, r, { feature: l } = e, { style: a = "default" } = e, { showPlaceType: o } = e, { missingIconsCache: d } = e, { iconsBaseUrl: c } = e;
  const L = en(), _ = (H = l.properties) == null ? void 0 : H.categories;
  let C, M, N = 0, A = l.place_type[0] === "reverse";
  function k() {
    M && d.add(M), t(11, N++, N);
  }
  function O(D) {
    $n.call(this, i, D);
  }
  const S = () => k(), R = () => L("select", void 0), W = (D) => {
    document.activeElement !== D.target && L("select", void 0);
  };
  return i.$$set = (D) => {
    "feature" in D && t(0, l = D.feature), "style" in D && t(1, a = D.style), "showPlaceType" in D && t(2, o = D.showPlaceType), "missingIconsCache" in D && t(10, d = D.missingIconsCache), "iconsBaseUrl" in D && t(3, c = D.iconsBaseUrl);
  }, i.$$.update = () => {
    var D, B, s, u;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    7224)
      do
        t(12, n--, n), t(4, C = _ == null ? void 0 : _[n]), t(5, M = C ? c + C.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!M || d.has(M)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((B = (D = l.properties) == null ? void 0 : D.categories) == null ? void 0 : B.join(", ")) ?? ((u = (s = l.properties) == null ? void 0 : s.place_type_name) == null ? void 0 : u[0]) ?? l.place_type[0]);
  }, t(12, n = (_ == null ? void 0 : _.length) ?? 0), [
    l,
    a,
    o,
    c,
    C,
    M,
    r,
    L,
    A,
    k,
    d,
    N,
    n,
    O,
    S,
    R,
    W
  ];
}
class wr extends Je {
  constructor(e) {
    super(), Qe(this, e, vr, br, Xe, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 10,
      iconsBaseUrl: 3
    });
  }
}
function Er(i) {
  let e;
  return {
    c() {
      e = Q("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', x(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      ie(t, e, n);
    },
    p: $,
    i: $,
    o: $,
    d(t) {
      t && ee(e);
    }
  };
}
class Lr extends Je {
  constructor(e) {
    super(), Qe(this, e, null, Er, Xe, {});
  }
}
function _r(i) {
  let e, t, n;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), x(t, "stroke-width", "4"), x(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), x(t, "class", "svelte-gzo3ar"), x(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), x(e, "viewBox", "0 0 70 85"), x(e, "fill", "none"), x(e, "class", "svelte-gzo3ar"), Be(
        e,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), Be(
        e,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    m(r, l) {
      ie(r, e, l), j(e, t);
    },
    p(r, [l]) {
      l & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && x(e, "width", n), l & /*displayIn*/
      1 && Be(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), l & /*displayIn*/
      1 && Be(
        e,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    i: $,
    o: $,
    d(r) {
      r && ee(e);
    }
  };
}
function Sr(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class xr extends Je {
  constructor(e) {
    super(), Qe(this, e, Sr, _r, Xe, { displayIn: 0 });
  }
}
function Tr(i) {
  let e, t;
  return {
    c() {
      e = Oe("svg"), t = Oe("path"), x(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), x(e, "viewBox", "0 0 60.006 21.412"), x(e, "width", "14"), x(e, "height", "20"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ie(n, e, r), j(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && ee(e);
    }
  };
}
class Mr extends Je {
  constructor(e) {
    super(), Qe(this, e, null, Tr, Xe, {});
  }
}
function Cr(i) {
  let e, t, n;
  return {
    c() {
      e = Oe("svg"), t = Oe("circle"), n = Oe("path"), x(t, "cx", "4.789"), x(t, "cy", "4.787"), x(t, "r", "3.85"), x(t, "class", "svelte-1aq105l"), x(n, "d", "M12.063 12.063 7.635 7.635"), x(n, "class", "svelte-1aq105l"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "13"), x(e, "height", "13"), x(e, "viewBox", "0 0 13 13"), x(e, "class", "svelte-1aq105l");
    },
    m(r, l) {
      ie(r, e, l), j(e, t), j(e, n);
    },
    p: $,
    i: $,
    o: $,
    d(r) {
      r && ee(e);
    }
  };
}
class Nr extends Je {
  constructor(e) {
    super(), Qe(this, e, null, Cr, Xe, {});
  }
}
function Or(i, e, t) {
  const n = e[1], r = e[0], l = n - r;
  return i === n && t ? i : ((i - r) % l + l) % l + r;
}
function _t(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let gt;
async function kr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (gt && r.cachedLocationExpiry && gt.time + r.cachedLocationExpiry > Date.now()) {
          if (!gt.coords)
            break e;
          return gt.coords;
        }
        let l;
        try {
          return l = await new Promise((a, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                a(
                  [d.coords.longitude, d.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (d) => {
                o(d);
              },
              r
            );
          }), l;
        } catch {
        } finally {
          r.cachedLocationExpiry && (gt = {
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
const Rr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Ti = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Mi = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Ci = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Ni = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Oi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Pr(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((M) => Number(M.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), l = Math.abs(n), a = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${r}° ${a}, ${l}° ${o}`);
    const c = Math.floor(r), L = Math.floor(l), _ = (r - c) * 60, C = (l - L) * 60;
    if (i == "DM") {
      let M = ki(_, 3).toFixed(3).padStart(6, "0"), N = ki(C, 3).toFixed(3).padStart(6, "0");
      M.endsWith(".000") && N.endsWith(".000") && (M = M.replace(/\.000$/, ""), N = N.replace(/\.000$/, "")), d = `${c}° ${M}' ${a}, ${L}° ${N}' ${o}`;
    }
    if (i == "DMS") {
      const M = Math.floor(_), N = Math.floor(C);
      let A = ((_ - M) * 60).toFixed(1).padStart(4, "0"), k = ((C - N) * 60).toFixed(1).padStart(4, "0");
      const O = M.toString().padStart(2, "0"), S = N.toString().padStart(2, "0");
      A.endsWith(".0") && k.endsWith(".0") && (A = A.replace(/\.0$/, ""), k = k.replace(/\.0$/, "")), d = `${c}° ${O}' ${A}" ${a}, ${L}° ${S}' ${k}" ${o}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function ki(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function ui(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", l = "", a = null, o = [], d = !1;
  if (Rr.test(i))
    throw new Error("invalid coordinate value");
  if (Ti.test(i))
    if (o = Ti.exec(i), d = mt(o), d)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Mi.test(i))
    if (o = Mi.exec(i), d = mt(o), d) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], l = o[5]) : o[4] && (r = o[4], l = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Ci.test(i))
    if (o = Ci.exec(i), d = mt(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], l = o[8]) : o[7] && (r = o[7], l = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ni.test(i))
    if (o = Ni.exec(i), d = mt(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6] / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], l = o[9]) : o[8] && (r = o[8], l = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Oi.test(i)) {
    if (o = Oi.exec(i), d = mt(o), o.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], l = o[9]) : o[8] && (r = o[8], l = o[16]);
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
    let c = /S|SOUTH/i;
    c.test(r) && t > 0 && (t = -1 * t), c = /W|WEST/i, c.test(l) && n > 0 && (n = -1 * n);
    const L = o[0].trim();
    let _, C;
    const M = /[,/;\u0020]/g, N = L.match(M);
    if (N == null) {
      const O = Math.floor(i.length / 2);
      _ = L.substring(0, O).trim(), C = L.substring(O).trim();
    } else {
      let O;
      N.length % 2 == 1 ? O = Math.floor(N.length / 2) : O = N.length / 2 - 1;
      let S = 0;
      if (O == 0)
        S = L.indexOf(N[0]), _ = L.substring(0, S).trim(), C = L.substring(S + 1).trim();
      else {
        let R = 0, W = 0;
        for (; R <= O; )
          S = L.indexOf(N[R], W), W = S + 1, R++;
        _ = L.substring(0, S).trim(), C = L.substring(S + 1).trim();
      }
    }
    const A = _.split(".");
    if (A.length == 2 && A[1] == 0 && A[1].length != 2)
      throw new Error("invalid coordinates format");
    const k = C.split(".");
    if (k.length == 2 && k[1] == 0 && k[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(_) || /^\d+$/.test(C))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: L,
      verbatimLatitude: _,
      verbatimLongitude: C,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: a,
      closeEnough: Ar,
      toCoordinateFormat: Pr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function mt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let l = 0; l < r; l++) {
    const a = e[l], o = e[l + r], d = t.test(a) && t.test(o), c = n.test(a) && n.test(o), L = a == o;
    if (!(a == null && o == null)) {
      if (a == null || o == null)
        return !1;
      if (d || c || L)
        continue;
      return !1;
    }
  }
  return !0;
}
function Ri(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Ar(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Ri(this.decimalLatitude, Number(e[0])) && Ri(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Ir = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
ui.to = Ir;
const Br = [
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
], zr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Gr = [
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
], Wr = [
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
function Dr() {
  const i = [];
  return Br.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...zr });
  }), [...i, ...Gr, ...Wr];
}
const Ur = Dr();
ui.formats = Ur.map((i) => i.verbatimCoordinates);
const Fr = ui;
function Pi(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Ai(i) {
  let e, t;
  return e = new Lr({}), {
    c() {
      Ye(e.$$.fragment);
    },
    m(n, r) {
      Ue(e, n, r), t = !0;
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Fe(e, n);
    }
  };
}
function Ii(i) {
  let e, t, n, r, l;
  return t = new Mr({}), {
    c() {
      e = Q("button"), Ye(t.$$.fragment), x(e, "type", "button"), x(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), x(e, "class", "svelte-bz0zu3"), Be(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, o) {
      ie(a, e, o), Ue(t, e, null), n = !0, r || (l = fe(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(a, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      1024) && x(
        e,
        "title",
        /*reverseButtonTitle*/
        a[10]
      ), (!n || o[0] & /*reverseActive*/
      1) && Be(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      n || (oe(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ce(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && ee(e), Fe(t), r = !1, l();
    }
  };
}
function qr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, l, a, o = Si(
    /*listFeatures*/
    i[13]
  );
  const d = (c) => (
    /*feature*/
    c[97].id + /*feature*/
    (c[97].address ? "," + /*feature*/
    c[97].address : "")
  );
  for (let c = 0; c < o.length; c += 1) {
    let L = Pi(i, o, c), _ = d(L);
    n.set(_, t[c] = Bi(_, L));
  }
  return {
    c() {
      e = Q("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(c, L) {
      ie(c, e, L);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      r = !0, l || (a = [
        fe(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        fe(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        fe(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], l = !0);
    },
    p(c, L) {
      L[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = Si(
        /*listFeatures*/
        c[13]
      ), Rt(), t = sr(t, L, d, 1, c, o, n, e, rr, Bi, null, Pi), Pt());
    },
    i(c) {
      if (!r) {
        for (let L = 0; L < o.length; L += 1)
          oe(t[L]);
        r = !0;
      }
    },
    o(c) {
      for (let L = 0; L < t.length; L += 1)
        ce(t[L]);
      r = !1;
    },
    d(c) {
      c && ee(e);
      for (let L = 0; L < t.length; L += 1)
        t[L].d();
      l = !1, Ze(a);
    }
  };
}
function Zr(i) {
  let e, t, n, r, l, a;
  return t = new rn({}), {
    c() {
      e = Q("div"), Ye(t.$$.fragment), n = Le(), r = Q("div"), l = Ke(
        /*noResultsMessage*/
        i[8]
      ), x(r, "class", "svelte-bz0zu3"), x(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, d) {
      ie(o, e, d), Ue(t, e, null), j(e, n), j(e, r), j(r, l), a = !0;
    },
    p(o, d) {
      (!a || d[0] & /*noResultsMessage*/
      256) && Et(
        l,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      a || (oe(t.$$.fragment, o), a = !0);
    },
    o(o) {
      ce(t.$$.fragment, o), a = !1;
    },
    d(o) {
      o && ee(e), Fe(t);
    }
  };
}
function jr(i) {
  let e = "", t;
  return {
    c() {
      t = Ke(e);
    },
    m(n, r) {
      ie(n, t, r);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && ee(t);
    }
  };
}
function Hr(i) {
  let e, t, n, r, l, a, o, d, c, L, _;
  return t = new rn({}), d = new nn({}), {
    c() {
      e = Q("div"), Ye(t.$$.fragment), n = Le(), r = Q("div"), l = Ke(
        /*errorMessage*/
        i[7]
      ), a = Le(), o = Q("button"), Ye(d.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(o, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(C, M) {
      ie(C, e, M), Ue(t, e, null), j(e, n), j(e, r), j(r, l), j(e, a), j(e, o), Ue(d, o, null), c = !0, L || (_ = fe(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), L = !0);
    },
    p(C, M) {
      (!c || M[0] & /*errorMessage*/
      128) && Et(
        l,
        /*errorMessage*/
        C[7]
      );
    },
    i(C) {
      c || (oe(t.$$.fragment, C), oe(d.$$.fragment, C), c = !0);
    },
    o(C) {
      ce(t.$$.fragment, C), ce(d.$$.fragment, C), c = !1;
    },
    d(C) {
      C && ee(e), Fe(t), Fe(d), L = !1, _();
    }
  };
}
function Bi(i, e) {
  var o;
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
  function a() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new wr({
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
          ((o = e[14]) == null ? void 0 : o.id) === /*feature*/
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
  }), n.$on("mouseenter", l), n.$on("select", a), {
    key: i,
    first: null,
    c() {
      t = Kn(), Ye(n.$$.fragment), this.first = t;
    },
    m(d, c) {
      ie(d, t, c), Ue(n, d, c), r = !0;
    },
    p(d, c) {
      var _;
      e = d;
      const L = {};
      c[0] & /*listFeatures*/
      8192 && (L.feature = /*feature*/
      e[97]), c[0] & /*showPlaceType*/
      2048 && (L.showPlaceType = /*showPlaceType*/
      e[11]), c[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (L.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((_ = e[14]) == null ? void 0 : _.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), c[0] & /*iconsBaseUrl*/
      4096 && (L.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(L);
    },
    i(d) {
      r || (oe(n.$$.fragment, d), r = !0);
    },
    o(d) {
      ce(n.$$.fragment, d), r = !1;
    },
    d(d) {
      d && ee(t), Fe(n, d);
    }
  };
}
function Vr(i) {
  let e, t, n, r, l, a, o, d, c, L, _, C, M, N, A, k, O, S, R, W, H, D = !1;
  l = new Nr({}), _ = new nn({});
  let B = (
    /*abortController*/
    i[20] && Ai()
  ), s = (
    /*enableReverse*/
    i[6] === "button" && Ii(i)
  );
  const u = (
    /*#slots*/
    i[70].default
  ), f = Zn(
    u,
    i,
    /*$$scope*/
    i[69],
    null
  ), m = [Hr, jr, Zr, qr], h = [];
  function b(p, g) {
    var y, v;
    return (
      /*error*/
      p[19] ? 0 : !/*focusedDelayed*/
      p[16] && !/*keepListOpen*/
      p[4] ? 1 : (
        /*listFeatures*/
        ((y = p[13]) == null ? void 0 : y.length) === 0 ? 2 : (
          /*listFeatures*/
          (v = p[13]) != null && v.length && /*focusedDelayed*/
          (p[16] || /*keepListOpen*/
          p[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(k = b(i)) && (O = h[k] = m[k](i)), {
    c() {
      e = Le(), t = Q("form"), n = Q("div"), r = Q("button"), Ye(l.$$.fragment), a = Le(), o = Q("input"), d = Le(), c = Q("div"), L = Q("button"), Ye(_.$$.fragment), C = Le(), B && B.c(), M = Le(), s && s.c(), N = Le(), f && f.c(), A = Le(), O && O.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), x(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), x(o, "class", "svelte-bz0zu3"), x(L, "type", "button"), x(
        L,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), x(L, "class", "svelte-bz0zu3"), x(c, "class", "clear-button-container svelte-bz0zu3"), Be(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", S = Bt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), Be(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(p, g) {
      ie(p, e, g), ie(p, t, g), j(t, n), j(n, r), Ue(l, r, null), j(n, a), j(n, o), i[72](o), Li(
        o,
        /*searchValue*/
        i[1]
      ), j(n, d), j(n, c), j(c, L), Ue(_, L, null), j(c, C), B && B.m(c, null), j(n, M), s && s.m(n, null), j(n, N), f && f.m(n, null), j(t, A), ~k && h[k].m(t, null), R = !0, W || (H = [
        fe(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        fe(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        fe(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        fe(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        fe(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        fe(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        fe(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        fe(
          o,
          "change",
          /*change_handler*/
          i[77]
        ),
        fe(
          L,
          "click",
          /*click_handler_2*/
          i[78]
        ),
        fe(t, "submit", Yn(
          /*handleSubmit*/
          i[22]
        ))
      ], W = !0);
    },
    p(p, g) {
      (!R || g[0] & /*placeholder*/
      512) && x(
        o,
        "placeholder",
        /*placeholder*/
        p[9]
      ), (!R || g[0] & /*placeholder*/
      512) && x(
        o,
        "aria-label",
        /*placeholder*/
        p[9]
      ), g[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      p[1] && Li(
        o,
        /*searchValue*/
        p[1]
      ), (!R || g[0] & /*clearButtonTitle*/
      8) && x(
        L,
        "title",
        /*clearButtonTitle*/
        p[3]
      ), /*abortController*/
      p[20] ? B ? g[0] & /*abortController*/
      1048576 && oe(B, 1) : (B = Ai(), B.c(), oe(B, 1), B.m(c, null)) : B && (Rt(), ce(B, 1, 1, () => {
        B = null;
      }), Pt()), (!R || g[0] & /*searchValue*/
      2) && Be(
        c,
        "displayable",
        /*searchValue*/
        p[1] !== ""
      ), /*enableReverse*/
      p[6] === "button" ? s ? (s.p(p, g), g[0] & /*enableReverse*/
      64 && oe(s, 1)) : (s = Ii(p), s.c(), oe(s, 1), s.m(n, N)) : s && (Rt(), ce(s, 1, 1, () => {
        s = null;
      }), Pt()), f && f.p && (!R || g[2] & /*$$scope*/
      128) && Hn(
        f,
        u,
        p,
        /*$$scope*/
        p[69],
        R ? jn(
          u,
          /*$$scope*/
          p[69],
          g,
          null
        ) : Vn(
          /*$$scope*/
          p[69]
        ),
        null
      );
      let y = k;
      k = b(p), k === y ? ~k && h[k].p(p, g) : (O && (Rt(), ce(h[y], 1, 1, () => {
        h[y] = null;
      }), Pt()), ~k ? (O = h[k], O ? O.p(p, g) : (O = h[k] = m[k](p), O.c()), oe(O, 1), O.m(t, null)) : O = null), (!R || g[0] & /*className*/
      4 && S !== (S = Bt(
        /*className*/
        p[2]
      ) + " svelte-bz0zu3")) && x(t, "class", S), (!R || g[0] & /*className, collapsed, searchValue*/
      38) && Be(
        t,
        "can-collapse",
        /*collapsed*/
        p[5] && /*searchValue*/
        p[1] === ""
      );
    },
    i(p) {
      R || (oe(D), oe(l.$$.fragment, p), oe(_.$$.fragment, p), oe(B), oe(s), oe(f, p), oe(O), R = !0);
    },
    o(p) {
      ce(D), ce(l.$$.fragment, p), ce(_.$$.fragment, p), ce(B), ce(s), ce(f, p), ce(O), R = !1;
    },
    d(p) {
      p && (ee(e), ee(t)), Fe(l), i[72](null), Fe(_), B && B.d(), s && s.d(), f && f.d(p), ~k && h[k].d(), W = !1, Ze(H);
    }
  };
}
function Kr(i, e, t) {
  let n, r, l, { $$slots: a = {}, $$scope: o } = e;
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
  let { class: c = void 0 } = e, { apiKey: L } = e, { bbox: _ = void 0 } = e, { clearButtonTitle: C = "clear" } = e, { clearOnBlur: M = !1 } = e, { clearListOnPick: N = !1 } = e, { keepListOpen: A = !1 } = e, { collapsed: k = !1 } = e, { country: O = void 0 } = e, { debounceSearch: S = 200 } = e, { enableReverse: R = "never" } = e, { errorMessage: W = "Something went wrong…" } = e, { filter: H = () => !0 } = e, { flyTo: D = !0 } = e, { fuzzyMatch: B = !0 } = e, { language: s = void 0 } = e, { limit: u = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: m = f } = e, { mapController: h = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: p = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: g = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: v = R === "always" } = e, { reverseButtonTitle: w = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: P = "full-geometry" } = e, { showPlaceType: z = "if-needed" } = e, { showResultsWhileTyping: Z = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: te = !1 } = e, { markerOnSelected: q = !0 } = e, { types: V = void 0 } = e;
  const ue = [];
  let { reverseGeocodingTypes: Ge = ue } = e, { exhaustiveReverseGeocoding: $e = !1 } = e, { excludeTypes: et = !1 } = e;
  const pe = void 0;
  let { reverseGeocodingExcludeTypes: ke = pe } = e, { zoom: he = d } = e, { apiUrl: ae = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: hi = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.1/icons/" } = e, { adjustUrlQuery: Ut = () => {
  } } = e, { adjustUrl: Ft = () => {
  } } = e;
  function yn(E) {
    Me.focus(E);
  }
  function bn() {
    Me.blur();
  }
  function di(E, ne = !0, se = !1) {
    t(1, T = E), ne ? (t(15, Y = -1), mi()) : (pi(void 0, !se, se), setTimeout(() => {
      Me.focus(), Me.select();
    }));
  }
  function vn() {
    t(13, F = void 0), t(14, G = void 0), t(15, Y = -1);
  }
  function wn() {
    t(64, le = []), t(14, G = void 0);
  }
  let F, le, G, gi = "", Me, Y = -1, Re, Tt = [], tt, st, ot, qt, We = !1;
  const En = /* @__PURE__ */ new Set(), je = en();
  Jn(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setFeatures(void 0, void 0, !1));
  });
  function mi(E) {
    if (t(17, We = !1), st && (clearTimeout(st), st = void 0), Y > -1 && F)
      t(14, G = F[Y]), t(1, T = G.place_type[0] === "reverse" ? G.place_name : G.place_name.replace(/,.*/, "")), t(19, Re = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (T) {
      const ne = E || !Zt(T);
      jt(T, { exact: !0 }).then(() => {
        t(64, le = F), t(14, G = void 0), ne && Ln();
      }).catch((se) => t(19, Re = se));
    }
  }
  function Zt(E) {
    try {
      return Fr(E, 6);
    } catch {
      return !1;
    }
  }
  async function jt(E, { byId: ne = !1, exact: se = !1 } = {}) {
    var be, Pe, He;
    t(19, Re = void 0), tt == null || tt.abort();
    const ye = new AbortController();
    t(20, tt = ye);
    try {
      const X = Zt(E), ct = new URL(ae + "/" + encodeURIComponent(X ? X.decimalLongitude + "," + X.decimalLatitude : E) + ".json"), _e = ct.searchParams;
      s !== void 0 && _e.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Kt] = (h == null ? void 0 : h.getCenterAndZoom()) ?? [];
      let Ae = (be = !X || Ge === ue ? V : Ge) == null ? void 0 : be.map((de) => typeof de == "string" ? de : Kt === void 0 || (de[0] ?? 0) <= Kt && Kt < (de[1] ?? 1 / 0) ? de[2] : void 0).filter((de) => de !== void 0);
      Ae && (Ae = [...new Set(Ae)], _e.set("types", Ae.join(",")));
      const bi = !X || ke === pe ? et : ke;
      if (bi && _e.set("excludeTypes", String(bi)), _ && _e.set("bbox", _.map((de) => de.toFixed(6)).join(",")), O && _e.set("country", Array.isArray(O) ? O.join(",") : O), !ne && !X) {
        const de = await kr(h, y, ye);
        de && _e.set("proximity", de), (se || !Z) && _e.set("autocomplete", "false"), _e.set("fuzzyMatch", String(B));
      }
      const ht = m === f ? u : m;
      ht !== void 0 && ht > 1 && (Ae == null ? void 0 : Ae.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), X ? (ht === 1 || ht !== void 0 && ($e || (Ae == null ? void 0 : Ae.length) === 1)) && _e.set("limit", String(ht)) : u !== void 0 && _e.set("limit", String(u)), _e.set("key", L), Ut(_e), Ft(ct);
      const Wn = ct.searchParams.get("types") === "" && ct.searchParams.get("excludeTypes") !== "true", Mt = ct.toString();
      if (Mt === gi) {
        ne ? (N && t(13, F = void 0), t(14, G = Tt[0])) : (t(13, F = Tt), ((Pe = F[Y]) == null ? void 0 : Pe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      gi = Mt;
      let dt;
      if (Wn)
        dt = { type: "FeatureCollection", features: [] };
      else {
        const de = await fetch(Mt, { signal: ye.signal, ...J });
        if (!de.ok)
          throw new Error(await de.text());
        dt = await de.json();
      }
      je("response", { url: Mt, featureCollection: dt }), ne ? (N && t(13, F = void 0), t(14, G = dt.features[0]), Tt = [G]) : (t(13, F = dt.features.filter(H)), X && F.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + X.decimalLongitude + "_" + X.decimalLatitude,
        text: X.decimalLatitude + ", " + X.decimalLongitude,
        place_name: X.decimalLatitude + ", " + X.decimalLongitude,
        place_type: ["reverse"],
        center: [X.decimalLongitude, X.decimalLatitude],
        bbox: [
          X.decimalLongitude,
          X.decimalLatitude,
          X.decimalLongitude,
          X.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [X.decimalLongitude, X.decimalLatitude]
        }
      }), Tt = F, ((He = F[Y]) == null ? void 0 : He.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), X && Me.focus());
    } catch (X) {
      if (X && typeof X == "object" && "name" in X && X.name === "AbortError")
        return;
      throw X;
    } finally {
      ye === tt && t(20, tt = void 0);
    }
  }
  function Ln() {
    var ye;
    if (!(le != null && le.length) || !D)
      return;
    const E = [180, 90, -180, -90], ne = !le.some((be) => !be.matching_text);
    let se;
    for (const be of le) {
      const Pe = ft(be);
      if (se = se === void 0 ? Pe : Pe === void 0 ? se : Math.max(se, Pe), ne || !be.matching_text)
        for (const He of [0, 1, 2, 3])
          E[He] = Math[He < 2 ? "min" : "max"](E[He], ((ye = be.bbox) == null ? void 0 : ye[He]) ?? be.center[He % 2]);
    }
    h && le.length > 0 && (G && E[0] === E[2] && E[1] === E[3] ? h.flyTo(G.center, ft(G)) : h.fitBounds(_t(E), 50, se));
  }
  function Ht() {
    !G || !h || (!G.bbox || G.bbox[0] === G.bbox[2] && G.bbox[1] === G.bbox[3] ? h.flyTo(G.center, ft(G)) : h.fitBounds(_t(G.bbox), 50, ft(G)));
  }
  function ft(E) {
    var se;
    if (!E.bbox || E.bbox[0] !== E.bbox[2] && E.bbox[1] !== E.bbox[3])
      return;
    const ne = E.id.replace(/\..*/, "");
    return (Array.isArray((se = E.properties) == null ? void 0 : se.categories) ? E.properties.categories.reduce(
      (ye, be) => {
        const Pe = he[ne + "." + be];
        return ye === void 0 ? Pe : Pe === void 0 ? ye : Math.max(ye, Pe);
      },
      void 0
    ) : void 0) ?? he[ne];
  }
  function _n(E) {
    t(0, v = R === "always"), t(13, F = void 0), t(14, G = void 0), t(15, Y = -1), di(E[1].toFixed(6) + ", " + Or(E[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Sn(E) {
    if (!F)
      return;
    let ne = E.key === "ArrowDown" ? 1 : E.key === "ArrowUp" ? -1 : 0;
    ne && (Me.focus(), t(17, We = !0), E.preventDefault(), G && Y === -1 && t(15, Y = F.findIndex((se) => se.id === (G == null ? void 0 : G.id))), Y === (G || K ? 0 : -1) && ne === -1 && t(15, Y = F.length), t(15, Y += ne), Y >= F.length && t(15, Y = -1), Y < 0 && (G || K) && t(15, Y = 0));
  }
  function pi(E, ne = !0, se = !1) {
    if (t(19, Re = void 0), t(14, G = void 0), t(17, We = !0), Z || se) {
      if (st && clearTimeout(st), T.length < b)
        return;
      const ye = T;
      st = window.setTimeout(
        () => {
          jt(ye).catch((be) => t(19, Re = be));
        },
        ne ? S : 0
      );
    } else
      t(13, F = void 0), t(19, Re = void 0);
  }
  function Vt(E) {
    G && (G == null ? void 0 : G.id) === (E == null ? void 0 : E.id) ? Ht() : (t(14, G = E), t(1, T = E.place_name));
  }
  function yi(E) {
    t(15, Y = E);
  }
  function xn() {
    (!K || G) && t(15, Y = -1), te && Ht();
  }
  const Tn = () => Me.focus();
  function Mn(E) {
    ei[E ? "unshift" : "push"](() => {
      Me = E, t(18, Me);
    });
  }
  function Cn() {
    T = this.value, t(1, T), t(17, We), t(31, M), t(16, ot);
  }
  const Nn = () => t(17, We = !0), On = () => t(17, We = !1), kn = () => t(17, We = !0), Rn = () => t(14, G = void 0), Pn = () => {
    t(1, T = ""), Me.focus();
  }, An = () => t(0, v = !v), In = () => t(19, Re = void 0), Bn = (E) => yi(E), zn = (E) => Vt(E), Gn = () => {
  };
  return i.$$set = (E) => {
    "class" in E && t(2, c = E.class), "apiKey" in E && t(29, L = E.apiKey), "bbox" in E && t(30, _ = E.bbox), "clearButtonTitle" in E && t(3, C = E.clearButtonTitle), "clearOnBlur" in E && t(31, M = E.clearOnBlur), "clearListOnPick" in E && t(32, N = E.clearListOnPick), "keepListOpen" in E && t(4, A = E.keepListOpen), "collapsed" in E && t(5, k = E.collapsed), "country" in E && t(33, O = E.country), "debounceSearch" in E && t(34, S = E.debounceSearch), "enableReverse" in E && t(6, R = E.enableReverse), "errorMessage" in E && t(7, W = E.errorMessage), "filter" in E && t(35, H = E.filter), "flyTo" in E && t(36, D = E.flyTo), "fuzzyMatch" in E && t(37, B = E.fuzzyMatch), "language" in E && t(38, s = E.language), "limit" in E && t(39, u = E.limit), "reverseGeocodingLimit" in E && t(40, m = E.reverseGeocodingLimit), "mapController" in E && t(41, h = E.mapController), "minLength" in E && t(42, b = E.minLength), "noResultsMessage" in E && t(8, p = E.noResultsMessage), "placeholder" in E && t(9, g = E.placeholder), "proximity" in E && t(43, y = E.proximity), "reverseActive" in E && t(0, v = E.reverseActive), "reverseButtonTitle" in E && t(10, w = E.reverseButtonTitle), "searchValue" in E && t(1, T = E.searchValue), "pickedResultStyle" in E && t(44, P = E.pickedResultStyle), "showPlaceType" in E && t(11, z = E.showPlaceType), "showResultsWhileTyping" in E && t(45, Z = E.showResultsWhileTyping), "selectFirst" in E && t(46, K = E.selectFirst), "flyToSelected" in E && t(47, te = E.flyToSelected), "markerOnSelected" in E && t(48, q = E.markerOnSelected), "types" in E && t(49, V = E.types), "reverseGeocodingTypes" in E && t(50, Ge = E.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in E && t(51, $e = E.exhaustiveReverseGeocoding), "excludeTypes" in E && t(52, et = E.excludeTypes), "reverseGeocodingExcludeTypes" in E && t(53, ke = E.reverseGeocodingExcludeTypes), "zoom" in E && t(54, he = E.zoom), "apiUrl" in E && t(55, ae = E.apiUrl), "fetchParameters" in E && t(56, J = E.fetchParameters), "iconsBaseUrl" in E && t(12, hi = E.iconsBaseUrl), "adjustUrlQuery" in E && t(57, Ut = E.adjustUrlQuery), "adjustUrl" in E && t(58, Ft = E.adjustUrl), "$$scope" in E && t(69, o = E.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, v = R === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && P !== "marker-only" && G && !G.address && G.geometry.type === "Point" && G.place_type[0] !== "reverse" && jt(G.id, { byId: !0 }).catch((E) => t(19, Re = E)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (h && G && G.id !== qt && D && (Ht(), N && t(13, F = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, qt = G == null ? void 0 : G.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ot = We), M && !ot && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < b && (t(13, F = void 0), t(19, Re = void 0), t(64, le = F)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && F != null && F.length && Y == -1 && !G && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== F && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && h && h.setEventHandler((E) => {
      switch (E.type) {
        case "mapClick":
          v && _n(E.coordinates);
          break;
        case "markerClick":
          {
            const ne = F == null ? void 0 : F.find((se) => se.id === E.id);
            ne && Vt(ne);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = ot ? (F == null ? void 0 : F.findIndex((ne) => ne.id === E.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = F == null ? void 0 : F[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && h && r && D && te && h.flyTo(r.center, ft(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = P === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (q || h == null || h.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && h && q && !le && (h.setFeatures(r ? [r] : void 0, G, n), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && h && h.setFeatures(le, G, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le && h && h.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && h) {
      const E = Zt(T);
      h.setReverseMarker(E ? [E.decimalLongitude, E.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && je("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && je("pick", { feature: G }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, l = !!(F != null && F.length) && (ot || A)), i.$$.dirty[2] & /*optionsVisible*/
    32 && je("optionsvisibilitychange", { optionsVisible: l }), i.$$.dirty[0] & /*listFeatures*/
    8192 && je("featureslisted", { features: F }), i.$$.dirty[2] & /*markedFeatures*/
    4 && je("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && je("reversetoggle", { reverse: v }), i.$$.dirty[0] & /*searchValue*/
    2 && je("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && h && h.indicateReverse(v);
  }, [
    v,
    T,
    c,
    C,
    A,
    k,
    R,
    W,
    p,
    g,
    w,
    z,
    hi,
    F,
    G,
    Y,
    ot,
    We,
    Me,
    Re,
    tt,
    En,
    mi,
    Sn,
    pi,
    Vt,
    yi,
    xn,
    d,
    L,
    _,
    M,
    N,
    O,
    S,
    H,
    D,
    B,
    s,
    u,
    m,
    h,
    b,
    y,
    P,
    Z,
    K,
    te,
    q,
    V,
    Ge,
    $e,
    et,
    ke,
    he,
    ae,
    J,
    Ut,
    Ft,
    yn,
    bn,
    di,
    vn,
    wn,
    le,
    qt,
    r,
    l,
    n,
    o,
    a,
    Tn,
    Mn,
    Cn,
    Nn,
    On,
    kn,
    Rn,
    Pn,
    An,
    In,
    Bn,
    zn,
    Gn
  ];
}
let Yr = class extends Je {
  constructor(e) {
    super(), Qe(
      this,
      e,
      Kr,
      Vr,
      Xe,
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
function St(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function ai(i, e, t = {}) {
  for (const r of i) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let l = 0; l < r[r.length - 1].length; l++)
      if (r[r.length - 1][l] !== r[0][l])
        throw new Error("First and last Position are not equivalent.");
  }
  return St({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function xt(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function sn(i, e, t = {}) {
  return St({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function on(i, e, t) {
  if (i !== null)
    for (var n, r, l, a, o, d, c, L = 0, _ = 0, C, M = i.type, N = M === "FeatureCollection", A = M === "Feature", k = N ? i.features.length : 1, O = 0; O < k; O++) {
      c = N ? i.features[O].geometry : A ? i.geometry : i, C = c ? c.type === "GeometryCollection" : !1, o = C ? c.geometries.length : 1;
      for (var S = 0; S < o; S++) {
        var R = 0, W = 0;
        if (a = C ? c.geometries[S] : c, a !== null) {
          d = a.coordinates;
          var H = a.type;
          switch (L = 0, H) {
            case null:
              break;
            case "Point":
              if (e(
                d,
                _,
                O,
                R,
                W
              ) === !1)
                return !1;
              _++, R++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < d.length; n++) {
                if (e(
                  d[n],
                  _,
                  O,
                  R,
                  W
                ) === !1)
                  return !1;
                _++, H === "MultiPoint" && R++;
              }
              H === "LineString" && R++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < d.length; n++) {
                for (r = 0; r < d[n].length - L; r++) {
                  if (e(
                    d[n][r],
                    _,
                    O,
                    R,
                    W
                  ) === !1)
                    return !1;
                  _++;
                }
                H === "MultiLineString" && R++, H === "Polygon" && W++;
              }
              H === "Polygon" && R++;
              break;
            case "MultiPolygon":
              for (n = 0; n < d.length; n++) {
                for (W = 0, r = 0; r < d[n].length; r++) {
                  for (l = 0; l < d[n][r].length - L; l++) {
                    if (e(
                      d[n][r][l],
                      _,
                      O,
                      R,
                      W
                    ) === !1)
                      return !1;
                    _++;
                  }
                  W++;
                }
                R++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (on(a.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function fi(i, e) {
  var t, n, r, l, a, o, d, c, L, _, C = 0, M = i.type === "FeatureCollection", N = i.type === "Feature", A = M ? i.features.length : 1;
  for (t = 0; t < A; t++) {
    for (o = M ? i.features[t].geometry : N ? i.geometry : i, c = M ? i.features[t].properties : N ? i.properties : {}, L = M ? i.features[t].bbox : N ? i.bbox : void 0, _ = M ? i.features[t].id : N ? i.id : void 0, d = o ? o.type === "GeometryCollection" : !1, a = d ? o.geometries.length : 1, r = 0; r < a; r++) {
      if (l = d ? o.geometries[r] : o, l === null) {
        if (e(
          null,
          C,
          c,
          L,
          _
        ) === !1)
          return !1;
        continue;
      }
      switch (l.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            l,
            C,
            c,
            L,
            _
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < l.geometries.length; n++)
            if (e(
              l.geometries[n],
              C,
              c,
              L,
              _
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    C++;
  }
}
function Xr(i, e) {
  fi(i, function(t, n, r, l, a) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          St(t, r, { bbox: l, id: a }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var d;
    switch (o) {
      case "MultiPoint":
        d = "Point";
        break;
      case "MultiLineString":
        d = "LineString";
        break;
      case "MultiPolygon":
        d = "Polygon";
        break;
    }
    for (var c = 0; c < t.coordinates.length; c++) {
      var L = t.coordinates[c], _ = {
        type: d,
        coordinates: L
      };
      if (e(St(_, r), n, c) === !1)
        return !1;
    }
  });
}
function Qr(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return on(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var ni = Qr;
function Jr(i) {
  if (!i)
    throw new Error("geojson is required");
  switch (i.type) {
    case "Feature":
      return ln(i);
    case "FeatureCollection":
      return $r(i);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return ci(i);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function ln(i) {
  const e = { type: "Feature" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[t] = i[t];
    }
  }), e.properties = un(i.properties), i.geometry == null ? e.geometry = null : e.geometry = ci(i.geometry), e;
}
function un(i) {
  const e = {};
  return i && Object.keys(i).forEach((t) => {
    const n = i[t];
    typeof n == "object" ? n === null ? e[t] = null : Array.isArray(n) ? e[t] = n.map((r) => r) : e[t] = un(n) : e[t] = n;
  }), e;
}
function $r(i) {
  const e = { type: "FeatureCollection" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "features":
        return;
      default:
        e[t] = i[t];
    }
  }), e.features = i.features.map((t) => ln(t)), e;
}
function ci(i) {
  const e = { type: i.type };
  return i.bbox && (e.bbox = i.bbox), i.type === "GeometryCollection" ? (e.geometries = i.geometries.map((t) => ci(t)), e) : (e.coordinates = an(i.coordinates), e);
}
function an(i) {
  const e = i;
  return typeof e[0] != "object" ? e.slice() : e.map((t) => an(t));
}
var es = Jr, ts = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Jt = Math.ceil, xe = Math.floor, me = "[BigNumber Error] ", zi = me + "Number primitive has more than 15 significant digits: ", Ce = 1e14, U = 14, Gi = 9007199254740991, $t = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ve = 1e7, we = 1e9;
function fn(i) {
  var e, t, n, r = S.prototype = { constructor: S, toString: null, valueOf: null }, l = new S(1), a = 20, o = 4, d = -7, c = 21, L = -1e7, _ = 1e7, C = !1, M = 1, N = 0, A = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, k = "0123456789abcdefghijklmnopqrstuvwxyz", O = !0;
  function S(s, u) {
    var f, m, h, b, p, g, y, v, w = this;
    if (!(w instanceof S)) return new S(s, u);
    if (u == null) {
      if (s && s._isBigNumber === !0) {
        w.s = s.s, !s.c || s.e > _ ? w.c = w.e = null : s.e < L ? w.c = [w.e = 0] : (w.e = s.e, w.c = s.c.slice());
        return;
      }
      if ((g = typeof s == "number") && s * 0 == 0) {
        if (w.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (b = 0, p = s; p >= 10; p /= 10, b++) ;
          b > _ ? w.c = w.e = null : (w.e = b, w.c = [s]);
          return;
        }
        v = String(s);
      } else {
        if (!ts.test(v = String(s))) return n(w, v, g);
        w.s = v.charCodeAt(0) == 45 ? (v = v.slice(1), -1) : 1;
      }
      (b = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (p = v.search(/e/i)) > 0 ? (b < 0 && (b = p), b += +v.slice(p + 1), v = v.substring(0, p)) : b < 0 && (b = v.length);
    } else {
      if (re(u, 2, k.length, "Base"), u == 10 && O)
        return w = new S(s), D(w, a + w.e + 1, o);
      if (v = String(s), g = typeof s == "number") {
        if (s * 0 != 0) return n(w, v, g, u);
        if (w.s = 1 / s < 0 ? (v = v.slice(1), -1) : 1, S.DEBUG && v.replace(/^0\.0*|\./, "").length > 15)
          throw Error(zi + s);
      } else
        w.s = v.charCodeAt(0) === 45 ? (v = v.slice(1), -1) : 1;
      for (f = k.slice(0, u), b = p = 0, y = v.length; p < y; p++)
        if (f.indexOf(m = v.charAt(p)) < 0) {
          if (m == ".") {
            if (p > b) {
              b = y;
              continue;
            }
          } else if (!h && (v == v.toUpperCase() && (v = v.toLowerCase()) || v == v.toLowerCase() && (v = v.toUpperCase()))) {
            h = !0, p = -1, b = 0;
            continue;
          }
          return n(w, String(s), g, u);
        }
      g = !1, v = t(v, u, 10, w.s), (b = v.indexOf(".")) > -1 ? v = v.replace(".", "") : b = v.length;
    }
    for (p = 0; v.charCodeAt(p) === 48; p++) ;
    for (y = v.length; v.charCodeAt(--y) === 48; ) ;
    if (v = v.slice(p, ++y)) {
      if (y -= p, g && S.DEBUG && y > 15 && (s > Gi || s !== xe(s)))
        throw Error(zi + w.s * s);
      if ((b = b - p - 1) > _)
        w.c = w.e = null;
      else if (b < L)
        w.c = [w.e = 0];
      else {
        if (w.e = b, w.c = [], p = (b + 1) % U, b < 0 && (p += U), p < y) {
          for (p && w.c.push(+v.slice(0, p)), y -= U; p < y; )
            w.c.push(+v.slice(p, p += U));
          p = U - (v = v.slice(p)).length;
        } else
          p -= y;
        for (; p--; v += "0") ;
        w.c.push(+v);
      }
    } else
      w.c = [w.e = 0];
  }
  S.clone = fn, S.ROUND_UP = 0, S.ROUND_DOWN = 1, S.ROUND_CEIL = 2, S.ROUND_FLOOR = 3, S.ROUND_HALF_UP = 4, S.ROUND_HALF_DOWN = 5, S.ROUND_HALF_EVEN = 6, S.ROUND_HALF_CEIL = 7, S.ROUND_HALF_FLOOR = 8, S.EUCLID = 9, S.config = S.set = function(s) {
    var u, f;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(u = "DECIMAL_PLACES") && (f = s[u], re(f, 0, we, u), a = f), s.hasOwnProperty(u = "ROUNDING_MODE") && (f = s[u], re(f, 0, 8, u), o = f), s.hasOwnProperty(u = "EXPONENTIAL_AT") && (f = s[u], f && f.pop ? (re(f[0], -1e9, 0, u), re(f[1], 0, we, u), d = f[0], c = f[1]) : (re(f, -1e9, we, u), d = -(c = f < 0 ? -f : f))), s.hasOwnProperty(u = "RANGE"))
          if (f = s[u], f && f.pop)
            re(f[0], -1e9, -1, u), re(f[1], 1, we, u), L = f[0], _ = f[1];
          else if (re(f, -1e9, we, u), f)
            L = -(_ = f < 0 ? -f : f);
          else
            throw Error(me + u + " cannot be zero: " + f);
        if (s.hasOwnProperty(u = "CRYPTO"))
          if (f = s[u], f === !!f)
            if (f)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                C = f;
              else
                throw C = !f, Error(me + "crypto unavailable");
            else
              C = f;
          else
            throw Error(me + u + " not true or false: " + f);
        if (s.hasOwnProperty(u = "MODULO_MODE") && (f = s[u], re(f, 0, 9, u), M = f), s.hasOwnProperty(u = "POW_PRECISION") && (f = s[u], re(f, 0, we, u), N = f), s.hasOwnProperty(u = "FORMAT"))
          if (f = s[u], typeof f == "object") A = f;
          else throw Error(me + u + " not an object: " + f);
        if (s.hasOwnProperty(u = "ALPHABET"))
          if (f = s[u], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            O = f.slice(0, 10) == "0123456789", k = f;
          else
            throw Error(me + u + " invalid: " + f);
      } else
        throw Error(me + "Object expected: " + s);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [d, c],
      RANGE: [L, _],
      CRYPTO: C,
      MODULO_MODE: M,
      POW_PRECISION: N,
      FORMAT: A,
      ALPHABET: k
    };
  }, S.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!S.DEBUG) return !0;
    var u, f, m = s.c, h = s.e, b = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((b === 1 || b === -1) && h >= -1e9 && h <= we && h === xe(h)) {
        if (m[0] === 0) {
          if (h === 0 && m.length === 1) return !0;
          break e;
        }
        if (u = (h + 1) % U, u < 1 && (u += U), String(m[0]).length == u) {
          for (u = 0; u < m.length; u++)
            if (f = m[u], f < 0 || f >= Ce || f !== xe(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (m === null && h === null && (b === null || b === 1 || b === -1))
      return !0;
    throw Error(me + "Invalid BigNumber: " + s);
  }, S.maximum = S.max = function() {
    return W(arguments, -1);
  }, S.minimum = S.min = function() {
    return W(arguments, 1);
  }, S.random = function() {
    var s = 9007199254740992, u = Math.random() * s & 2097151 ? function() {
      return xe(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var m, h, b, p, g, y = 0, v = [], w = new S(l);
      if (f == null ? f = a : re(f, 0, we), p = Jt(f / U), C)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(p *= 2)); y < p; )
            g = m[y] * 131072 + (m[y + 1] >>> 11), g >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), m[y] = h[0], m[y + 1] = h[1]) : (v.push(g % 1e14), y += 2);
          y = p / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(p *= 7); y < p; )
            g = (m[y] & 31) * 281474976710656 + m[y + 1] * 1099511627776 + m[y + 2] * 4294967296 + m[y + 3] * 16777216 + (m[y + 4] << 16) + (m[y + 5] << 8) + m[y + 6], g >= 9e15 ? crypto.randomBytes(7).copy(m, y) : (v.push(g % 1e14), y += 7);
          y = p / 7;
        } else
          throw C = !1, Error(me + "crypto unavailable");
      if (!C)
        for (; y < p; )
          g = u(), g < 9e15 && (v[y++] = g % 1e14);
      for (p = v[--y], f %= U, p && f && (g = $t[U - f], v[y] = xe(p / g) * g); v[y] === 0; v.pop(), y--) ;
      if (y < 0)
        v = [b = 0];
      else {
        for (b = -1; v[0] === 0; v.splice(0, 1), b -= U) ;
        for (y = 1, g = v[0]; g >= 10; g /= 10, y++) ;
        y < U && (b -= U - y);
      }
      return w.e = b, w.c = v, w;
    };
  }(), S.sum = function() {
    for (var s = 1, u = arguments, f = new S(u[0]); s < u.length; ) f = f.plus(u[s++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function u(f, m, h, b) {
      for (var p, g = [0], y, v = 0, w = f.length; v < w; ) {
        for (y = g.length; y--; g[y] *= m) ;
        for (g[0] += b.indexOf(f.charAt(v++)), p = 0; p < g.length; p++)
          g[p] > h - 1 && (g[p + 1] == null && (g[p + 1] = 0), g[p + 1] += g[p] / h | 0, g[p] %= h);
      }
      return g.reverse();
    }
    return function(f, m, h, b, p) {
      var g, y, v, w, T, P, z, Z, K = f.indexOf("."), te = a, q = o;
      for (K >= 0 && (w = N, N = 0, f = f.replace(".", ""), Z = new S(m), P = Z.pow(f.length - K), N = w, Z.c = u(
        De(Se(P.c), P.e, "0"),
        10,
        h,
        s
      ), Z.e = Z.c.length), z = u(f, m, h, p ? (g = k, s) : (g = s, k)), v = w = z.length; z[--w] == 0; z.pop()) ;
      if (!z[0]) return g.charAt(0);
      if (K < 0 ? --v : (P.c = z, P.e = v, P.s = b, P = e(P, Z, te, q, h), z = P.c, T = P.r, v = P.e), y = v + te + 1, K = z[y], w = h / 2, T = T || y < 0 || z[y + 1] != null, T = q < 4 ? (K != null || T) && (q == 0 || q == (P.s < 0 ? 3 : 2)) : K > w || K == w && (q == 4 || T || q == 6 && z[y - 1] & 1 || q == (P.s < 0 ? 8 : 7)), y < 1 || !z[0])
        f = T ? De(g.charAt(1), -te, g.charAt(0)) : g.charAt(0);
      else {
        if (z.length = y, T)
          for (--h; ++z[--y] > h; )
            z[y] = 0, y || (++v, z = [1].concat(z));
        for (w = z.length; !z[--w]; ) ;
        for (K = 0, f = ""; K <= w; f += g.charAt(z[K++])) ;
        f = De(f, v, g.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, h, b) {
      var p, g, y, v, w = 0, T = m.length, P = h % Ve, z = h / Ve | 0;
      for (m = m.slice(); T--; )
        y = m[T] % Ve, v = m[T] / Ve | 0, p = z * y + v * P, g = P * y + p % Ve * Ve + w, w = (g / b | 0) + (p / Ve | 0) + z * v, m[T] = g % b;
      return w && (m = [w].concat(m)), m;
    }
    function u(m, h, b, p) {
      var g, y;
      if (b != p)
        y = b > p ? 1 : -1;
      else
        for (g = y = 0; g < b; g++)
          if (m[g] != h[g]) {
            y = m[g] > h[g] ? 1 : -1;
            break;
          }
      return y;
    }
    function f(m, h, b, p) {
      for (var g = 0; b--; )
        m[b] -= g, g = m[b] < h[b] ? 1 : 0, m[b] = g * p + m[b] - h[b];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, h, b, p, g) {
      var y, v, w, T, P, z, Z, K, te, q, V, ue, Ge, $e, et, pe, ke, he = m.s == h.s ? 1 : -1, ae = m.c, J = h.c;
      if (!ae || !ae[0] || !J || !J[0])
        return new S(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !h.s || (ae ? J && ae[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            ae && ae[0] == 0 || !J ? he * 0 : he / 0
          )
        );
      for (K = new S(he), te = K.c = [], v = m.e - h.e, he = b + v + 1, g || (g = Ce, v = Te(m.e / U) - Te(h.e / U), he = he / U | 0), w = 0; J[w] == (ae[w] || 0); w++) ;
      if (J[w] > (ae[w] || 0) && v--, he < 0)
        te.push(1), T = !0;
      else {
        for ($e = ae.length, pe = J.length, w = 0, he += 2, P = xe(g / (J[0] + 1)), P > 1 && (J = s(J, P, g), ae = s(ae, P, g), pe = J.length, $e = ae.length), Ge = pe, q = ae.slice(0, pe), V = q.length; V < pe; q[V++] = 0) ;
        ke = J.slice(), ke = [0].concat(ke), et = J[0], J[1] >= g / 2 && et++;
        do {
          if (P = 0, y = u(J, q, pe, V), y < 0) {
            if (ue = q[0], pe != V && (ue = ue * g + (q[1] || 0)), P = xe(ue / et), P > 1)
              for (P >= g && (P = g - 1), z = s(J, P, g), Z = z.length, V = q.length; u(z, q, Z, V) == 1; )
                P--, f(z, pe < Z ? ke : J, Z, g), Z = z.length, y = 1;
            else
              P == 0 && (y = P = 1), z = J.slice(), Z = z.length;
            if (Z < V && (z = [0].concat(z)), f(q, z, V, g), V = q.length, y == -1)
              for (; u(J, q, pe, V) < 1; )
                P++, f(q, pe < V ? ke : J, V, g), V = q.length;
          } else y === 0 && (P++, q = [0]);
          te[w++] = P, q[0] ? q[V++] = ae[Ge] || 0 : (q = [ae[Ge]], V = 1);
        } while ((Ge++ < $e || q[0] != null) && he--);
        T = q[0] != null, te[0] || te.splice(0, 1);
      }
      if (g == Ce) {
        for (w = 1, he = te[0]; he >= 10; he /= 10, w++) ;
        D(K, b + (K.e = w + v * U - 1) + 1, p, T);
      } else
        K.e = v, K.r = +T;
      return K;
    };
  }();
  function R(s, u, f, m) {
    var h, b, p, g, y;
    if (f == null ? f = o : re(f, 0, 8), !s.c) return s.toString();
    if (h = s.c[0], p = s.e, u == null)
      y = Se(s.c), y = m == 1 || m == 2 && (p <= d || p >= c) ? Ot(y, p) : De(y, p, "0");
    else if (s = D(new S(s), u, f), b = s.e, y = Se(s.c), g = y.length, m == 1 || m == 2 && (u <= b || b <= d)) {
      for (; g < u; y += "0", g++) ;
      y = Ot(y, b);
    } else if (u -= p, y = De(y, b, "0"), b + 1 > g) {
      if (--u > 0) for (y += "."; u--; y += "0") ;
    } else if (u += b - g, u > 0)
      for (b + 1 == g && (y += "."); u--; y += "0") ;
    return s.s < 0 && h ? "-" + y : y;
  }
  function W(s, u) {
    for (var f, m, h = 1, b = new S(s[0]); h < s.length; h++)
      m = new S(s[h]), (!m.s || (f = it(b, m)) === u || f === 0 && b.s === u) && (b = m);
    return b;
  }
  function H(s, u, f) {
    for (var m = 1, h = u.length; !u[--h]; u.pop()) ;
    for (h = u[0]; h >= 10; h /= 10, m++) ;
    return (f = m + f * U - 1) > _ ? s.c = s.e = null : f < L ? s.c = [s.e = 0] : (s.e = f, s.c = u), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, u = /^([^.]+)\.$/, f = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, h = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(b, p, g, y) {
      var v, w = g ? p : p.replace(h, "");
      if (m.test(w))
        b.s = isNaN(w) ? null : w < 0 ? -1 : 1;
      else {
        if (!g && (w = w.replace(s, function(T, P, z) {
          return v = (z = z.toLowerCase()) == "x" ? 16 : z == "b" ? 2 : 8, !y || y == v ? P : T;
        }), y && (v = y, w = w.replace(u, "$1").replace(f, "0.$1")), p != w))
          return new S(w, v);
        if (S.DEBUG)
          throw Error(me + "Not a" + (y ? " base " + y : "") + " number: " + p);
        b.s = null;
      }
      b.c = b.e = null;
    };
  }();
  function D(s, u, f, m) {
    var h, b, p, g, y, v, w, T = s.c, P = $t;
    if (T) {
      e: {
        for (h = 1, g = T[0]; g >= 10; g /= 10, h++) ;
        if (b = u - h, b < 0)
          b += U, p = u, y = T[v = 0], w = xe(y / P[h - p - 1] % 10);
        else if (v = Jt((b + 1) / U), v >= T.length)
          if (m) {
            for (; T.length <= v; T.push(0)) ;
            y = w = 0, h = 1, b %= U, p = b - U + 1;
          } else
            break e;
        else {
          for (y = g = T[v], h = 1; g >= 10; g /= 10, h++) ;
          b %= U, p = b - U + h, w = p < 0 ? 0 : xe(y / P[h - p - 1] % 10);
        }
        if (m = m || u < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[v + 1] != null || (p < 0 ? y : y % P[h - p - 1]), m = f < 4 ? (w || m) && (f == 0 || f == (s.s < 0 ? 3 : 2)) : w > 5 || w == 5 && (f == 4 || m || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (b > 0 ? p > 0 ? y / P[h - p] : 0 : T[v - 1]) % 10 & 1 || f == (s.s < 0 ? 8 : 7)), u < 1 || !T[0])
          return T.length = 0, m ? (u -= s.e + 1, T[0] = P[(U - u % U) % U], s.e = -u || 0) : T[0] = s.e = 0, s;
        if (b == 0 ? (T.length = v, g = 1, v--) : (T.length = v + 1, g = P[U - b], T[v] = p > 0 ? xe(y / P[h - p] % P[p]) * g : 0), m)
          for (; ; )
            if (v == 0) {
              for (b = 1, p = T[0]; p >= 10; p /= 10, b++) ;
              for (p = T[0] += g, g = 1; p >= 10; p /= 10, g++) ;
              b != g && (s.e++, T[0] == Ce && (T[0] = 1));
              break;
            } else {
              if (T[v] += g, T[v] != Ce) break;
              T[v--] = 0, g = 1;
            }
        for (b = T.length; T[--b] === 0; T.pop()) ;
      }
      s.e > _ ? s.c = s.e = null : s.e < L && (s.c = [s.e = 0]);
    }
    return s;
  }
  function B(s) {
    var u, f = s.e;
    return f === null ? s.toString() : (u = Se(s.c), u = f <= d || f >= c ? Ot(u, f) : De(u, f, "0"), s.s < 0 ? "-" + u : u);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new S(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, u) {
    return it(this, new S(s, u));
  }, r.decimalPlaces = r.dp = function(s, u) {
    var f, m, h, b = this;
    if (s != null)
      return re(s, 0, we), u == null ? u = o : re(u, 0, 8), D(new S(b), s + b.e + 1, u);
    if (!(f = b.c)) return null;
    if (m = ((h = f.length - 1) - Te(this.e / U)) * U, h = f[h]) for (; h % 10 == 0; h /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, u) {
    return e(this, new S(s, u), a, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, u) {
    return e(this, new S(s, u), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, u) {
    var f, m, h, b, p, g, y, v, w, T = this;
    if (s = new S(s), s.c && !s.isInteger())
      throw Error(me + "Exponent not an integer: " + B(s));
    if (u != null && (u = new S(u)), g = s.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !s.c || !s.c[0])
      return w = new S(Math.pow(+B(T), g ? s.s * (2 - Nt(s)) : +B(s))), u ? w.mod(u) : w;
    if (y = s.s < 0, u) {
      if (u.c ? !u.c[0] : !u.s) return new S(NaN);
      m = !y && T.isInteger() && u.isInteger(), m && (T = T.mod(u));
    } else {
      if (s.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || g && T.c[1] >= 24e7 : T.c[0] < 8e13 || g && T.c[0] <= 9999975e7)))
        return b = T.s < 0 && Nt(s) ? -0 : 0, T.e > -1 && (b = 1 / b), new S(y ? 1 / b : b);
      N && (b = Jt(N / U + 2));
    }
    for (g ? (f = new S(0.5), y && (s.s = 1), v = Nt(s)) : (h = Math.abs(+B(s)), v = h % 2), w = new S(l); ; ) {
      if (v) {
        if (w = w.times(T), !w.c) break;
        b ? w.c.length > b && (w.c.length = b) : m && (w = w.mod(u));
      }
      if (h) {
        if (h = xe(h / 2), h === 0) break;
        v = h % 2;
      } else if (s = s.times(f), D(s, s.e + 1, 1), s.e > 14)
        v = Nt(s);
      else {
        if (h = +B(s), h === 0) break;
        v = h % 2;
      }
      T = T.times(T), b ? T.c && T.c.length > b && (T.c.length = b) : m && (T = T.mod(u));
    }
    return m ? w : (y && (w = l.div(w)), u ? w.mod(u) : b ? D(w, N, o, p) : w);
  }, r.integerValue = function(s) {
    var u = new S(this);
    return s == null ? s = o : re(s, 0, 8), D(u, u.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, u) {
    return it(this, new S(s, u)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, u) {
    return it(this, new S(s, u)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, u) {
    return (u = it(this, new S(s, u))) === 1 || u === 0;
  }, r.isInteger = function() {
    return !!this.c && Te(this.e / U) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, u) {
    return it(this, new S(s, u)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, u) {
    return (u = it(this, new S(s, u))) === -1 || u === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, u) {
    var f, m, h, b, p = this, g = p.s;
    if (s = new S(s, u), u = s.s, !g || !u) return new S(NaN);
    if (g != u)
      return s.s = -u, p.plus(s);
    var y = p.e / U, v = s.e / U, w = p.c, T = s.c;
    if (!y || !v) {
      if (!w || !T) return w ? (s.s = -u, s) : new S(T ? p : NaN);
      if (!w[0] || !T[0])
        return T[0] ? (s.s = -u, s) : new S(w[0] ? p : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (y = Te(y), v = Te(v), w = w.slice(), g = y - v) {
      for ((b = g < 0) ? (g = -g, h = w) : (v = y, h = T), h.reverse(), u = g; u--; h.push(0)) ;
      h.reverse();
    } else
      for (m = (b = (g = w.length) < (u = T.length)) ? g : u, g = u = 0; u < m; u++)
        if (w[u] != T[u]) {
          b = w[u] < T[u];
          break;
        }
    if (b && (h = w, w = T, T = h, s.s = -s.s), u = (m = T.length) - (f = w.length), u > 0) for (; u--; w[f++] = 0) ;
    for (u = Ce - 1; m > g; ) {
      if (w[--m] < T[m]) {
        for (f = m; f && !w[--f]; w[f] = u) ;
        --w[f], w[m] += Ce;
      }
      w[m] -= T[m];
    }
    for (; w[0] == 0; w.splice(0, 1), --v) ;
    return w[0] ? H(s, w, v) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, u) {
    var f, m, h = this;
    return s = new S(s, u), !h.c || !s.s || s.c && !s.c[0] ? new S(NaN) : !s.c || h.c && !h.c[0] ? new S(h) : (M == 9 ? (m = s.s, s.s = 1, f = e(h, s, 0, 3), s.s = m, f.s *= m) : f = e(h, s, 0, M), s = h.minus(f.times(s)), !s.c[0] && M == 1 && (s.s = h.s), s);
  }, r.multipliedBy = r.times = function(s, u) {
    var f, m, h, b, p, g, y, v, w, T, P, z, Z, K, te, q = this, V = q.c, ue = (s = new S(s, u)).c;
    if (!V || !ue || !V[0] || !ue[0])
      return !q.s || !s.s || V && !V[0] && !ue || ue && !ue[0] && !V ? s.c = s.e = s.s = null : (s.s *= q.s, !V || !ue ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Te(q.e / U) + Te(s.e / U), s.s *= q.s, y = V.length, T = ue.length, y < T && (Z = V, V = ue, ue = Z, h = y, y = T, T = h), h = y + T, Z = []; h--; Z.push(0)) ;
    for (K = Ce, te = Ve, h = T; --h >= 0; ) {
      for (f = 0, P = ue[h] % te, z = ue[h] / te | 0, p = y, b = h + p; b > h; )
        v = V[--p] % te, w = V[p] / te | 0, g = z * v + w * P, v = P * v + g % te * te + Z[b] + f, f = (v / K | 0) + (g / te | 0) + z * w, Z[b--] = v % K;
      Z[b] = f;
    }
    return f ? ++m : Z.splice(0, 1), H(s, Z, m);
  }, r.negated = function() {
    var s = new S(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, u) {
    var f, m = this, h = m.s;
    if (s = new S(s, u), u = s.s, !h || !u) return new S(NaN);
    if (h != u)
      return s.s = -u, m.minus(s);
    var b = m.e / U, p = s.e / U, g = m.c, y = s.c;
    if (!b || !p) {
      if (!g || !y) return new S(h / 0);
      if (!g[0] || !y[0]) return y[0] ? s : new S(g[0] ? m : h * 0);
    }
    if (b = Te(b), p = Te(p), g = g.slice(), h = b - p) {
      for (h > 0 ? (p = b, f = y) : (h = -h, f = g), f.reverse(); h--; f.push(0)) ;
      f.reverse();
    }
    for (h = g.length, u = y.length, h - u < 0 && (f = y, y = g, g = f, u = h), h = 0; u; )
      h = (g[--u] = g[u] + y[u] + h) / Ce | 0, g[u] = Ce === g[u] ? 0 : g[u] % Ce;
    return h && (g = [h].concat(g), ++p), H(s, g, p);
  }, r.precision = r.sd = function(s, u) {
    var f, m, h, b = this;
    if (s != null && s !== !!s)
      return re(s, 1, we), u == null ? u = o : re(u, 0, 8), D(new S(b), s, u);
    if (!(f = b.c)) return null;
    if (h = f.length - 1, m = h * U + 1, h = f[h]) {
      for (; h % 10 == 0; h /= 10, m--) ;
      for (h = f[0]; h >= 10; h /= 10, m++) ;
    }
    return s && b.e + 1 > m && (m = b.e + 1), m;
  }, r.shiftedBy = function(s) {
    return re(s, -9007199254740991, Gi), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, u, f, m, h, b = this, p = b.c, g = b.s, y = b.e, v = a + 4, w = new S("0.5");
    if (g !== 1 || !p || !p[0])
      return new S(!g || g < 0 && (!p || p[0]) ? NaN : p ? b : 1 / 0);
    if (g = Math.sqrt(+B(b)), g == 0 || g == 1 / 0 ? (u = Se(p), (u.length + y) % 2 == 0 && (u += "0"), g = Math.sqrt(+u), y = Te((y + 1) / 2) - (y < 0 || y % 2), g == 1 / 0 ? u = "5e" + y : (u = g.toExponential(), u = u.slice(0, u.indexOf("e") + 1) + y), f = new S(u)) : f = new S(g + ""), f.c[0]) {
      for (y = f.e, g = y + v, g < 3 && (g = 0); ; )
        if (h = f, f = w.times(h.plus(e(b, h, v, 1))), Se(h.c).slice(0, g) === (u = Se(f.c)).slice(0, g))
          if (f.e < y && --g, u = u.slice(g - 3, g + 1), u == "9999" || !m && u == "4999") {
            if (!m && (D(h, h.e + a + 2, 0), h.times(h).eq(b))) {
              f = h;
              break;
            }
            v += 4, g += 4, m = 1;
          } else {
            (!+u || !+u.slice(1) && u.charAt(0) == "5") && (D(f, f.e + a + 2, 1), s = !f.times(f).eq(b));
            break;
          }
    }
    return D(f, f.e + a + 1, o, s);
  }, r.toExponential = function(s, u) {
    return s != null && (re(s, 0, we), s++), R(this, s, u, 1);
  }, r.toFixed = function(s, u) {
    return s != null && (re(s, 0, we), s = s + this.e + 1), R(this, s, u);
  }, r.toFormat = function(s, u, f) {
    var m, h = this;
    if (f == null)
      s != null && u && typeof u == "object" ? (f = u, u = null) : s && typeof s == "object" ? (f = s, s = u = null) : f = A;
    else if (typeof f != "object")
      throw Error(me + "Argument not an object: " + f);
    if (m = h.toFixed(s, u), h.c) {
      var b, p = m.split("."), g = +f.groupSize, y = +f.secondaryGroupSize, v = f.groupSeparator || "", w = p[0], T = p[1], P = h.s < 0, z = P ? w.slice(1) : w, Z = z.length;
      if (y && (b = g, g = y, y = b, Z -= b), g > 0 && Z > 0) {
        for (b = Z % g || g, w = z.substr(0, b); b < Z; b += g) w += v + z.substr(b, g);
        y > 0 && (w += v + z.slice(b)), P && (w = "-" + w);
      }
      m = T ? w + (f.decimalSeparator || "") + ((y = +f.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : T) : w;
    }
    return (f.prefix || "") + m + (f.suffix || "");
  }, r.toFraction = function(s) {
    var u, f, m, h, b, p, g, y, v, w, T, P, z = this, Z = z.c;
    if (s != null && (g = new S(s), !g.isInteger() && (g.c || g.s !== 1) || g.lt(l)))
      throw Error(me + "Argument " + (g.isInteger() ? "out of range: " : "not an integer: ") + B(g));
    if (!Z) return new S(z);
    for (u = new S(l), v = f = new S(l), m = y = new S(l), P = Se(Z), b = u.e = P.length - z.e - 1, u.c[0] = $t[(p = b % U) < 0 ? U + p : p], s = !s || g.comparedTo(u) > 0 ? b > 0 ? u : v : g, p = _, _ = 1 / 0, g = new S(P), y.c[0] = 0; w = e(g, u, 0, 1), h = f.plus(w.times(m)), h.comparedTo(s) != 1; )
      f = m, m = h, v = y.plus(w.times(h = v)), y = h, u = g.minus(w.times(h = u)), g = h;
    return h = e(s.minus(f), m, 0, 1), y = y.plus(h.times(v)), f = f.plus(h.times(m)), y.s = v.s = z.s, b = b * 2, T = e(v, m, b, o).minus(z).abs().comparedTo(
      e(y, f, b, o).minus(z).abs()
    ) < 1 ? [v, m] : [y, f], _ = p, T;
  }, r.toNumber = function() {
    return +B(this);
  }, r.toPrecision = function(s, u) {
    return s != null && re(s, 1, we), R(this, s, u, 2);
  }, r.toString = function(s) {
    var u, f = this, m = f.s, h = f.e;
    return h === null ? m ? (u = "Infinity", m < 0 && (u = "-" + u)) : u = "NaN" : (s == null ? u = h <= d || h >= c ? Ot(Se(f.c), h) : De(Se(f.c), h, "0") : s === 10 && O ? (f = D(new S(f), a + h + 1, o), u = De(Se(f.c), f.e, "0")) : (re(s, 2, k.length, "Base"), u = t(De(Se(f.c), h, "0"), 10, s, m, !0)), m < 0 && f.c[0] && (u = "-" + u)), u;
  }, r.valueOf = r.toJSON = function() {
    return B(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && S.set(i), S;
}
function Te(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function Se(i) {
  for (var e, t, n = 1, r = i.length, l = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = U - e.length; t--; e = "0" + e) ;
    l += e;
  }
  for (r = l.length; l.charCodeAt(--r) === 48; ) ;
  return l.slice(0, r + 1 || 1);
}
function it(i, e) {
  var t, n, r = i.c, l = e.c, a = i.s, o = e.s, d = i.e, c = e.e;
  if (!a || !o) return null;
  if (t = r && !r[0], n = l && !l[0], t || n) return t ? n ? 0 : -o : a;
  if (a != o) return a;
  if (t = a < 0, n = d == c, !r || !l) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return d > c ^ t ? 1 : -1;
  for (o = (d = r.length) < (c = l.length) ? d : c, a = 0; a < o; a++) if (r[a] != l[a]) return r[a] > l[a] ^ t ? 1 : -1;
  return d == c ? 0 : d > c ^ t ? 1 : -1;
}
function re(i, e, t, n) {
  if (i < e || i > t || i !== xe(i))
    throw Error(me + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Nt(i) {
  var e = i.c.length - 1;
  return Te(i.e / U) == e && i.c[e] % 2 != 0;
}
function Ot(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function De(i, e, t) {
  var n, r;
  if (e < 0) {
    for (r = t + "."; ++e; r += t) ;
    i = r + i;
  } else if (n = i.length, ++e > n) {
    for (r = t, e -= n; --e; r += t) ;
    i += r;
  } else e < n && (i = i.slice(0, e) + "." + i.slice(e));
  return i;
}
var ze = fn(), is = class {
  constructor(i) {
    I(this, "key");
    I(this, "left", null);
    I(this, "right", null);
    this.key = i;
  }
}, pt = class extends is {
  constructor(i) {
    super(i);
  }
}, ns = class {
  constructor() {
    I(this, "size", 0);
    I(this, "modificationCount", 0);
    I(this, "splayCount", 0);
  }
  splay(i) {
    const e = this.root;
    if (e == null)
      return this.compare(i, i), -1;
    let t = null, n = null, r = null, l = null, a = e;
    const o = this.compare;
    let d;
    for (; ; )
      if (d = o(a.key, i), d > 0) {
        let c = a.left;
        if (c == null || (d = o(c.key, i), d > 0 && (a.left = c.right, c.right = a, a = c, c = a.left, c == null)))
          break;
        t == null ? n = a : t.left = a, t = a, a = c;
      } else if (d < 0) {
        let c = a.right;
        if (c == null || (d = o(c.key, i), d < 0 && (a.right = c.left, c.left = a, a = c, c = a.right, c == null)))
          break;
        r == null ? l = a : r.right = a, r = a, a = c;
      } else
        break;
    return r != null && (r.right = a.left, a.left = l), t != null && (t.left = a.right, a.right = n), this.root !== a && (this.root = a, this.splayCount++), d;
  }
  splayMin(i) {
    let e = i, t = e.left;
    for (; t != null; ) {
      const n = t;
      e.left = n.right, n.right = e, e = n, t = e.left;
    }
    return e;
  }
  splayMax(i) {
    let e = i, t = e.right;
    for (; t != null; ) {
      const n = t;
      e.right = n.left, n.left = e, e = n, t = e.right;
    }
    return e;
  }
  _delete(i) {
    if (this.root == null || this.splay(i) != 0) return null;
    let t = this.root;
    const n = t, r = t.left;
    if (this.size--, r == null)
      this.root = t.right;
    else {
      const l = t.right;
      t = this.splayMax(r), t.right = l, this.root = t;
    }
    return this.modificationCount++, n;
  }
  addNewRoot(i, e) {
    this.size++, this.modificationCount++;
    const t = this.root;
    if (t == null) {
      this.root = i;
      return;
    }
    e < 0 ? (i.left = t, i.right = t.right, t.right = null) : (i.right = t, i.left = t.left, t.left = null), this.root = i;
  }
  _first() {
    const i = this.root;
    return i == null ? null : (this.root = this.splayMin(i), this.root);
  }
  _last() {
    const i = this.root;
    return i == null ? null : (this.root = this.splayMax(i), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(i) {
    return this.validKey(i) && this.splay(i) == 0;
  }
  defaultCompare() {
    return (i, e) => i < e ? -1 : i > e ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (i) => {
        this.root = i;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (i) => {
        this.splayCount = i;
      },
      splay: (i) => this.splay(i),
      has: (i) => this.has(i)
    };
  }
}, Ki, Yi, zt = class bt extends ns {
  constructor(t, n) {
    super();
    I(this, "root", null);
    I(this, "compare");
    I(this, "validKey");
    I(this, Ki, "[object Set]");
    this.compare = t ?? this.defaultCompare(), this.validKey = n ?? ((r) => r != null && r != null);
  }
  delete(t) {
    return this.validKey(t) ? this._delete(t) != null : !1;
  }
  deleteAll(t) {
    for (const n of t)
      this.delete(n);
  }
  forEach(t) {
    const n = this[Symbol.iterator]();
    let r;
    for (; r = n.next(), !r.done; )
      t(r.value, r.value, this);
  }
  add(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new pt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new pt(t), n), this.root.key;
  }
  addAll(t) {
    for (const n of t)
      this.add(n);
  }
  isEmpty() {
    return this.root == null;
  }
  isNotEmpty() {
    return this.root != null;
  }
  single() {
    if (this.size == 0) throw "Bad state: No element";
    if (this.size > 1) throw "Bad state: Too many element";
    return this.root.key;
  }
  first() {
    if (this.size == 0) throw "Bad state: No element";
    return this._first().key;
  }
  last() {
    if (this.size == 0) throw "Bad state: No element";
    return this._last().key;
  }
  lastBefore(t) {
    if (t == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(t) < 0) return this.root.key;
    let r = this.root.left;
    if (r == null) return null;
    let l = r.right;
    for (; l != null; )
      r = l, l = r.right;
    return r.key;
  }
  firstAfter(t) {
    if (t == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(t) > 0) return this.root.key;
    let r = this.root.right;
    if (r == null) return null;
    let l = r.left;
    for (; l != null; )
      r = l, l = r.left;
    return r.key;
  }
  retainAll(t) {
    const n = new bt(this.compare, this.validKey), r = this.modificationCount;
    for (const l of t) {
      if (r != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(l) && this.splay(l) == 0 && n.add(this.root.key);
    }
    n.size != this.size && (this.root = n.root, this.size = n.size, this.modificationCount++);
  }
  lookup(t) {
    return !this.validKey(t) || this.splay(t) != 0 ? null : this.root.key;
  }
  intersection(t) {
    const n = new bt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new bt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new bt(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(l, a) {
      let o, d;
      do {
        if (o = l.left, d = l.right, o != null) {
          const c = new pt(o.key);
          a.left = c, n(o, c);
        }
        if (d != null) {
          const c = new pt(d.key);
          a.right = c, l = d, a = c;
        }
      } while (d != null);
    }
    const r = new pt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new ss(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(Yi = Symbol.iterator, Ki = Symbol.toStringTag, Yi)]() {
    return new rs(this.wrap());
  }
}, cn = class {
  constructor(i) {
    I(this, "tree");
    I(this, "path", new Array());
    I(this, "modificationCount", null);
    I(this, "splayCount");
    this.tree = i, this.splayCount = i.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const i = this.path[this.path.length - 1];
    return this.getValue(i);
  }
  rebuildPath(i) {
    this.path.splice(0, this.path.length), this.tree.splay(i), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(i) {
    for (; i != null; )
      this.path.push(i), i = i.left;
  }
  moveNext() {
    if (this.modificationCount != this.tree.getModificationCount()) {
      if (this.modificationCount == null) {
        this.modificationCount = this.tree.getModificationCount();
        let t = this.tree.getRoot();
        for (; t != null; )
          this.path.push(t), t = t.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let i = this.path[this.path.length - 1], e = i.right;
    if (e != null) {
      for (; e != null; )
        this.path.push(e), e = e.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === i; )
      i = this.path.pop();
    return this.path.length > 0;
  }
}, rs = class extends cn {
  getValue(i) {
    return i.key;
  }
}, ss = class extends cn {
  getValue(i) {
    return [i.key, i.key];
  }
}, hn = (i) => () => i, ri = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : hn(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function os(i) {
  const e = i ? (t, n, r, l, a) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    l.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : hn(!1);
  return (t, n, r) => {
    const l = t.x, a = t.y, o = r.x, d = r.y, c = a.minus(d).times(n.x.minus(o)).minus(l.minus(o).times(n.y.minus(d)));
    return e(c, l, a, o, d) ? 0 : c.comparedTo(0);
  };
}
var ls = (i) => i, us = (i) => {
  if (i) {
    const e = new zt(ri(i)), t = new zt(ri(i)), n = (l, a) => a.addAndReturn(l), r = (l) => ({
      x: n(l.x, e),
      y: n(l.y, t)
    });
    return r({ x: new ze(0), y: new ze(0) }), r;
  }
  return ls;
}, si = (i) => ({
  set: (e) => {
    qe = si(e);
  },
  reset: () => si(i),
  compare: ri(i),
  snap: us(i),
  orient: os(i)
}), qe = si(), yt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), oi = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, l = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: l } };
}, At = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), dn = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), Gt = (i) => dn(i, i).sqrt(), as = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return At(r, n).div(Gt(r)).div(Gt(n));
}, fs = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return dn(r, n).div(Gt(r)).div(Gt(n));
}, Wi = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, Di = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, cs = (i, e, t, n) => {
  if (e.x.isZero()) return Di(t, n, i.x);
  if (n.x.isZero()) return Di(i, e, t.x);
  if (e.y.isZero()) return Wi(t, n, i.y);
  if (n.y.isZero()) return Wi(i, e, t.y);
  const r = At(e, n);
  if (r.isZero()) return null;
  const l = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, a = At(l, e).div(r), o = At(l, n).div(r), d = i.x.plus(o.times(e.x)), c = t.x.plus(a.times(n.x)), L = i.y.plus(o.times(e.y)), _ = t.y.plus(a.times(n.y)), C = d.plus(c).div(2), M = L.plus(_).div(2);
  return { x: C, y: M };
}, Ie = class gn {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    I(this, "point");
    I(this, "isLeft");
    I(this, "segment");
    I(this, "otherSE");
    I(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = gn.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : Dt.compare(e.segment, t.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, t) {
    return e.x.isLessThan(t.x) ? -1 : e.x.isGreaterThan(t.x) ? 1 : e.y.isLessThan(t.y) ? -1 : e.y.isGreaterThan(t.y) ? 1 : 0;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const t = e.point.events;
    for (let n = 0, r = t.length; n < r; n++) {
      const l = t[n];
      this.point.events.push(l), l.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let t = 0; t < e; t++) {
      const n = this.point.events[t];
      if (n.segment.consumedBy === void 0)
        for (let r = t + 1; r < e; r++) {
          const l = this.point.events[r];
          l.consumedBy === void 0 && n.otherSE.point.events === l.otherSE.point.events && n.segment.consume(l.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let t = 0, n = this.point.events.length; t < n; t++) {
      const r = this.point.events[t];
      r !== this && !r.segment.ringOut && r.segment.isInResult() && e.push(r);
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
  getLeftmostComparator(e) {
    const t = /* @__PURE__ */ new Map(), n = (r) => {
      const l = r.otherSE;
      t.set(r, {
        sine: as(this.point, e.point, l.point),
        cosine: fs(this.point, e.point, l.point)
      });
    };
    return (r, l) => {
      t.has(r) || n(r), t.has(l) || n(l);
      const { sine: a, cosine: o } = t.get(r), { sine: d, cosine: c } = t.get(l);
      return a.isGreaterThanOrEqualTo(0) && d.isGreaterThanOrEqualTo(0) ? o.isLessThan(c) ? 1 : o.isGreaterThan(c) ? -1 : 0 : a.isLessThan(0) && d.isLessThan(0) ? o.isLessThan(c) ? -1 : o.isGreaterThan(c) ? 1 : 0 : d.isLessThan(a) ? -1 : d.isGreaterThan(a) ? 1 : 0;
    };
  }
}, hs = class li {
  constructor(e) {
    I(this, "events");
    I(this, "poly");
    I(this, "_isExteriorRing");
    I(this, "_enclosingRing");
    this.events = e;
    for (let t = 0, n = e.length; t < n; t++)
      e[t].segment.ringOut = this;
    this.poly = null;
  }
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const l = e[n];
      if (!l.isInResult() || l.ringOut) continue;
      let a = null, o = l.leftSE, d = l.rightSE;
      const c = [o], L = o.point, _ = [];
      for (; a = o, o = d, c.push(o), o.point !== L; )
        for (; ; ) {
          const C = o.getAvailableLinkedEvents();
          if (C.length === 0) {
            const A = c[0].point, k = c[c.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${A.x}, ${A.y}]. Last matching segment found ends at [${k.x}, ${k.y}].`
            );
          }
          if (C.length === 1) {
            d = C[0].otherSE;
            break;
          }
          let M = null;
          for (let A = 0, k = _.length; A < k; A++)
            if (_[A].point === o.point) {
              M = A;
              break;
            }
          if (M !== null) {
            const A = _.splice(M)[0], k = c.splice(A.index);
            k.unshift(k[0].otherSE), t.push(new li(k.reverse()));
            continue;
          }
          _.push({
            index: c.length,
            point: o.point
          });
          const N = o.getLeftmostComparator(a);
          d = C.sort(N)[0].otherSE;
          break;
        }
      t.push(new li(c));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let c = 1, L = this.events.length - 1; c < L; c++) {
      const _ = this.events[c].point, C = this.events[c + 1].point;
      qe.orient(_, e, C) !== 0 && (t.push(_), e = _);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    qe.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const l = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, d = [];
    for (let c = a; c != o; c += l)
      d.push([t[c].x.toNumber(), t[c].y.toNumber()]);
    return d;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const e = this.enclosingRing();
      this._isExteriorRing = e ? !e.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    var r, l;
    let e = this.events[0];
    for (let a = 1, o = this.events.length; a < o; a++) {
      const d = this.events[a];
      Ie.compare(e, d) > 0 && (e = d);
    }
    let t = e.segment.prevInResult(), n = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!n) return t.ringOut;
      if (n.ringOut !== t.ringOut)
        return ((r = n.ringOut) == null ? void 0 : r.enclosingRing()) !== t.ringOut ? t.ringOut : (l = t.ringOut) == null ? void 0 : l.enclosingRing();
      t = n.prevInResult(), n = t ? t.prevInResult() : null;
    }
  }
}, Ui = class {
  constructor(i) {
    I(this, "exteriorRing");
    I(this, "interiorRings");
    this.exteriorRing = i, i.poly = this, this.interiorRings = [];
  }
  addInterior(i) {
    this.interiorRings.push(i), i.poly = this;
  }
  getGeom() {
    const i = this.exteriorRing.getGeom();
    if (i === null) return null;
    const e = [i];
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}, ds = class {
  constructor(i) {
    I(this, "rings");
    I(this, "polys");
    this.rings = i, this.polys = this._composePolys(i);
  }
  getGeom() {
    const i = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const n = this.polys[e].getGeom();
      n !== null && i.push(n);
    }
    return i;
  }
  _composePolys(i) {
    var t;
    const e = [];
    for (let n = 0, r = i.length; n < r; n++) {
      const l = i[n];
      if (!l.poly)
        if (l.isExteriorRing()) e.push(new Ui(l));
        else {
          const a = l.enclosingRing();
          a != null && a.poly || e.push(new Ui(a)), (t = a == null ? void 0 : a.poly) == null || t.addInterior(l);
        }
    }
    return e;
  }
}, gs = class {
  constructor(i, e = Dt.compare) {
    I(this, "queue");
    I(this, "tree");
    I(this, "segments");
    this.queue = i, this.tree = new zt(e), this.segments = [];
  }
  process(i) {
    const e = i.segment, t = [];
    if (i.consumedBy)
      return i.isLeft ? this.queue.delete(i.otherSE) : this.tree.delete(e), t;
    i.isLeft && this.tree.add(e);
    let n = e, r = e;
    do
      n = this.tree.lastBefore(n);
    while (n != null && n.consumedBy != null);
    do
      r = this.tree.firstAfter(r);
    while (r != null && r.consumedBy != null);
    if (i.isLeft) {
      let l = null;
      if (n) {
        const o = n.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (l = o), !n.isAnEndpoint(o))) {
          const d = this._splitSafely(n, o);
          for (let c = 0, L = d.length; c < L; c++)
            t.push(d[c]);
        }
      }
      let a = null;
      if (r) {
        const o = r.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (a = o), !r.isAnEndpoint(o))) {
          const d = this._splitSafely(r, o);
          for (let c = 0, L = d.length; c < L; c++)
            t.push(d[c]);
        }
      }
      if (l !== null || a !== null) {
        let o = null;
        l === null ? o = a : a === null ? o = l : o = Ie.comparePoints(
          l,
          a
        ) <= 0 ? l : a, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const d = e.split(o);
        for (let c = 0, L = d.length; c < L; c++)
          t.push(d[c]);
      }
      t.length > 0 ? (this.tree.delete(e), t.push(i)) : (this.segments.push(e), e.prev = n);
    } else {
      if (n && r) {
        const l = n.getIntersection(r);
        if (l !== null) {
          if (!n.isAnEndpoint(l)) {
            const a = this._splitSafely(n, l);
            for (let o = 0, d = a.length; o < d; o++)
              t.push(a[o]);
          }
          if (!r.isAnEndpoint(l)) {
            const a = this._splitSafely(r, l);
            for (let o = 0, d = a.length; o < d; o++)
              t.push(a[o]);
          }
        }
      }
      this.tree.delete(e);
    }
    return t;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(i, e) {
    this.tree.delete(i);
    const t = i.rightSE;
    this.queue.delete(t);
    const n = i.split(e);
    return n.push(t), i.consumedBy === void 0 && this.tree.add(i), n;
  }
}, ms = class {
  constructor() {
    I(this, "type");
    I(this, "numMultiPolys");
  }
  run(i, e, t) {
    vt.type = i;
    const n = [new qi(e, !0)];
    for (let c = 0, L = t.length; c < L; c++)
      n.push(new qi(t[c], !1));
    if (vt.numMultiPolys = n.length, vt.type === "difference") {
      const c = n[0];
      let L = 1;
      for (; L < n.length; )
        oi(n[L].bbox, c.bbox) !== null ? L++ : n.splice(L, 1);
    }
    if (vt.type === "intersection")
      for (let c = 0, L = n.length; c < L; c++) {
        const _ = n[c];
        for (let C = c + 1, M = n.length; C < M; C++)
          if (oi(_.bbox, n[C].bbox) === null) return [];
      }
    const r = new zt(Ie.compare);
    for (let c = 0, L = n.length; c < L; c++) {
      const _ = n[c].getSweepEvents();
      for (let C = 0, M = _.length; C < M; C++)
        r.add(_[C]);
    }
    const l = new gs(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const c = l.process(a);
      for (let L = 0, _ = c.length; L < _; L++) {
        const C = c[L];
        C.consumedBy === void 0 && r.add(C);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    qe.reset();
    const o = hs.factory(l.segments);
    return new ds(o).getGeom();
  }
}, vt = new ms(), Wt = vt, ps = 0, Dt = class It {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    I(this, "id");
    I(this, "leftSE");
    I(this, "rightSE");
    I(this, "rings");
    I(this, "windings");
    I(this, "ringOut");
    I(this, "consumedBy");
    I(this, "prev");
    I(this, "_prevInResult");
    I(this, "_beforeState");
    I(this, "_afterState");
    I(this, "_isInResult");
    this.id = ++ps, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
  }
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
  static compare(e, t) {
    const n = e.leftSE.point.x, r = t.leftSE.point.x, l = e.rightSE.point.x, a = t.rightSE.point.x;
    if (a.isLessThan(n)) return 1;
    if (l.isLessThan(r)) return -1;
    const o = e.leftSE.point.y, d = t.leftSE.point.y, c = e.rightSE.point.y, L = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (d.isLessThan(o) && d.isLessThan(c)) return 1;
      if (d.isGreaterThan(o) && d.isGreaterThan(c)) return -1;
      const _ = e.comparePoint(t.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const C = t.comparePoint(e.rightSE.point);
      return C !== 0 ? C : -1;
    }
    if (n.isGreaterThan(r)) {
      if (o.isLessThan(d) && o.isLessThan(L)) return -1;
      if (o.isGreaterThan(d) && o.isGreaterThan(L)) return 1;
      const _ = t.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const C = e.comparePoint(t.rightSE.point);
      return C < 0 ? 1 : C > 0 ? -1 : 1;
    }
    if (o.isLessThan(d)) return -1;
    if (o.isGreaterThan(d)) return 1;
    if (l.isLessThan(a)) {
      const _ = t.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (l.isGreaterThan(a)) {
      const _ = e.comparePoint(t.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!l.eq(a)) {
      const _ = c.minus(o), C = l.minus(n), M = L.minus(d), N = a.minus(r);
      if (_.isGreaterThan(C) && M.isLessThan(N)) return 1;
      if (_.isLessThan(C) && M.isGreaterThan(N)) return -1;
    }
    return l.isGreaterThan(a) ? 1 : l.isLessThan(a) || c.isLessThan(L) ? -1 : c.isGreaterThan(L) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, l, a;
    const o = Ie.comparePoints(e, t);
    if (o < 0)
      r = e, l = t, a = 1;
    else if (o > 0)
      r = t, l = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const d = new Ie(r, !0), c = new Ie(l, !1);
    return new It(d, c, [n], [a]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(e) {
    this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const e = this.leftSE.point.y, t = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: e.isLessThan(t) ? e : t },
      ur: { x: this.rightSE.point.x, y: e.isGreaterThan(t) ? e : t }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x.minus(this.leftSE.point.x),
      y: this.rightSE.point.y.minus(this.leftSE.point.y)
    };
  }
  isAnEndpoint(e) {
    return e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y) || e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y);
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
  comparePoint(e) {
    return qe.orient(this.leftSE.point, e, this.rightSE.point);
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
  getIntersection(e) {
    const t = this.bbox(), n = e.bbox(), r = oi(t, n);
    if (r === null) return null;
    const l = this.leftSE.point, a = this.rightSE.point, o = e.leftSE.point, d = e.rightSE.point, c = yt(t, o) && this.comparePoint(o) === 0, L = yt(n, l) && e.comparePoint(l) === 0, _ = yt(t, d) && this.comparePoint(d) === 0, C = yt(n, a) && e.comparePoint(a) === 0;
    if (L && c)
      return C && !_ ? a : !C && _ ? d : null;
    if (L)
      return _ && l.x.eq(d.x) && l.y.eq(d.y) ? null : l;
    if (c)
      return C && a.x.eq(o.x) && a.y.eq(o.y) ? null : o;
    if (C && _) return null;
    if (C) return a;
    if (_) return d;
    const M = cs(l, this.vector(), o, e.vector());
    return M === null || !yt(r, M) ? null : qe.snap(M);
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
  split(e) {
    const t = [], n = e.events !== void 0, r = new Ie(e, !0), l = new Ie(e, !1), a = this.rightSE;
    this.replaceRightSE(l), t.push(l), t.push(r);
    const o = new It(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return Ie.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Ie.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), l.checkForConsuming()), t;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let t = 0, n = this.windings.length; t < n; t++)
      this.windings[t] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let t = this, n = e;
    for (; t.consumedBy; ) t = t.consumedBy;
    for (; n.consumedBy; ) n = n.consumedBy;
    const r = It.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const l = t;
        t = n, n = l;
      }
      if (t.prev === n) {
        const l = t;
        t = n, n = l;
      }
      for (let l = 0, a = n.rings.length; l < a; l++) {
        const o = n.rings[l], d = n.windings[l], c = t.rings.indexOf(o);
        c === -1 ? (t.rings.push(o), t.windings.push(d)) : t.windings[c] += d;
      }
      n.rings = null, n.windings = null, n.consumedBy = t, n.leftSE.consumedBy = t.leftSE, n.rightSE.consumedBy = t.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev)
      this._beforeState = {
        rings: [],
        windings: [],
        multiPolys: []
      };
    else {
      const e = this.prev.consumedBy || this.prev;
      this._beforeState = e.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const e = this.beforeState();
    this._afterState = {
      rings: e.rings.slice(0),
      windings: e.windings.slice(0),
      multiPolys: []
    };
    const t = this._afterState.rings, n = this._afterState.windings, r = this._afterState.multiPolys;
    for (let o = 0, d = this.rings.length; o < d; o++) {
      const c = this.rings[o], L = this.windings[o], _ = t.indexOf(c);
      _ === -1 ? (t.push(c), n.push(L)) : n[_] += L;
    }
    const l = [], a = [];
    for (let o = 0, d = t.length; o < d; o++) {
      if (n[o] === 0) continue;
      const c = t[o], L = c.poly;
      if (a.indexOf(L) === -1)
        if (c.isExterior) l.push(L);
        else {
          a.indexOf(L) === -1 && a.push(L);
          const _ = l.indexOf(c.poly);
          _ !== -1 && l.splice(_, 1);
        }
    }
    for (let o = 0, d = l.length; o < d; o++) {
      const c = l[o].multiPoly;
      r.indexOf(c) === -1 && r.push(c);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (Wt.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === Wt.numMultiPolys && n < r;
        break;
      }
      case "xor": {
        const n = Math.abs(e.length - t.length);
        this._isInResult = n % 2 === 1;
        break;
      }
      case "difference": {
        const n = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = n(e) !== n(t);
        break;
      }
    }
    return this._isInResult;
  }
}, Fi = class {
  constructor(i, e, t) {
    I(this, "poly");
    I(this, "isExterior");
    I(this, "segments");
    I(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = qe.snap({ x: new ze(i[0][0]), y: new ze(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let l = 1, a = i.length; l < a; l++) {
      if (typeof i[l][0] != "number" || typeof i[l][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const o = qe.snap({ x: new ze(i[l][0]), y: new ze(i[l][1]) });
      o.x.eq(r.x) && o.y.eq(r.y) || (this.segments.push(Dt.fromRing(r, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), r = o);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(Dt.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const n = this.segments[e];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, ys = class {
  constructor(i, e) {
    I(this, "multiPoly");
    I(this, "exteriorRing");
    I(this, "interiorRings");
    I(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Fi(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new Fi(i[t], this, !1);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.interiorRings.push(r);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const i = this.exteriorRing.getSweepEvents();
    for (let e = 0, t = this.interiorRings.length; e < t; e++) {
      const n = this.interiorRings[e].getSweepEvents();
      for (let r = 0, l = n.length; r < l; r++)
        i.push(n[r]);
    }
    return i;
  }
}, qi = class {
  constructor(i, e) {
    I(this, "isSubject");
    I(this, "polys");
    I(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof i[0][0][0] == "number" && (i = [i]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new ze(Number.POSITIVE_INFINITY), y: new ze(Number.POSITIVE_INFINITY) },
      ur: { x: new ze(Number.NEGATIVE_INFINITY), y: new ze(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new ys(i[t], this);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.polys.push(r);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const n = this.polys[e].getSweepEvents();
      for (let r = 0, l = n.length; r < l; r++)
        i.push(n[r]);
    }
    return i;
  }
}, bs = (i, ...e) => Wt.run("union", i, e), vs = (i, ...e) => Wt.run("difference", i, e);
qe.set;
function ws(i, e = {}) {
  const t = [];
  if (fi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = bs(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ai(n[0], e.properties) : sn(n, e.properties);
}
var mn = ws;
function Es(i) {
  const e = [];
  if (fi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = vs(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ai(n[0], t) : sn(n, t);
}
var Ls = Es;
function _s(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return Xr(i, function(t) {
    e.push(t);
  }), xt(e);
}
var Ss = _s;
function Zi(i, e) {
  const t = Ls(
    xt([
      ai([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      i
    ])
  );
  if (!t)
    return;
  t.properties = { isMask: !0 };
  const n = _t(ni(i)), r = (n[2] - n[0]) / 360 / 1e3, l = n[0] < -180, a = n[2] > 180, o = Ss(i);
  if (o.features.length > 1 && (l || a))
    for (const d of o.features) {
      const c = _t(ni(d));
      if (a && c[0] < -180 + r)
        for (const L of d.geometry.coordinates)
          for (const _ of L)
            _[0] += 360 - r;
      if (l && c[2] > 180 - r)
        for (const L of d.geometry.coordinates)
          for (const _ of L)
            _[0] -= 360 - r;
    }
  e(
    xt([
      o.features.length < 2 ? i : mn(o) ?? i,
      t
    ])
  );
}
const ji = (i) => {
  var n, r, l;
  const e = (n = i == null ? void 0 : i.geometry) == null ? void 0 : n.type, t = (r = i == null ? void 0 : i.properties) != null && r.isMask ? 0 : e === "LineString" || e === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (l = i == null ? void 0 : i.properties) != null && l.isMask ? 0.1 : 0,
    weight: t,
    dashArray: [t, t],
    lineCap: "butt"
  };
};
function xs(i, e = !0, t = !0, n = {}, r = {}, l = ji) {
  let a;
  const o = [];
  let d, c;
  const L = Ne.geoJSON(void 0, {
    style: l === !0 ? ji : l === !1 ? void 0 : l ?? void 0,
    interactive: !1
  }).addTo(i), _ = (M) => {
    a == null || a({
      type: "mapClick",
      coordinates: [M.latlng.lng, M.latlng.lat]
    });
  };
  function C(M, N = !1) {
    const A = document.createElement("div");
    return new xr({ props: { displayIn: "leaflet" }, target: A }), new Ne.Marker(M, {
      interactive: N,
      icon: new Ne.DivIcon({
        html: A,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(M) {
      M ? (a = M, i.on("click", _)) : (a = void 0, i.off("click", _));
    },
    flyTo(M, N) {
      i.flyTo([M[1], M[0]], N, { duration: 2, ...n });
    },
    fitBounds(M, N, A) {
      i.flyToBounds(
        [
          [M[1], M[0]],
          [M[3], M[2]]
        ],
        {
          padding: [N, N],
          duration: 2,
          ...A ? { maxZoom: A } : {},
          ...r
        }
      );
    },
    indicateReverse(M) {
      i.getContainer().style.cursor = M ? "crosshair" : "";
    },
    setReverseMarker(M) {
      var A;
      if (!e)
        return;
      const N = M && [M[1], M[0]];
      c ? N ? c.setLatLng(N) : (c.remove(), c = void 0) : N && (e instanceof Function ? c = e(i) ?? void 0 : (c = (typeof e == "object" ? new Ne.Marker(N, e) : C(N)).addTo(i), (A = c.getElement()) == null || A.classList.add("marker-reverse")));
    },
    setFeatures(M, N, A) {
      function k(O) {
        L.clearLayers(), O && L.addData(O);
      }
      for (const O of o)
        O.remove();
      o.length = 0, k();
      e: if (N) {
        let O = !1;
        if (N.geometry.type === "GeometryCollection") {
          const S = N.geometry.geometries.filter(
            (R) => R.type === "Polygon" || R.type === "MultiPolygon"
          );
          t: if (S.length > 0) {
            const R = mn(
              xt(S.map((W) => St(W)))
            );
            if (!R)
              break t;
            Zi(
              {
                ...N,
                geometry: R.geometry
              },
              k
            ), O = !0;
          } else {
            const R = N.geometry.geometries.filter(
              (W) => W.type === "LineString" || W.type === "MultiLineString"
            );
            R.length > 0 && (k({
              ...N,
              geometry: { type: "GeometryCollection", geometries: R }
            }), O = !0);
          }
        }
        if (!O) {
          if (N.geometry.type === "Polygon" || N.geometry.type === "MultiPolygon")
            Zi(N, (S) => {
              if (!S)
                return;
              const R = [...S.features], W = _t(ni(N)), H = W[2] - W[0];
              W[0] - H / 4 < -180 && R.push(...Hi(S, -360).features), W[2] + H / 4 > 180 && R.push(...Hi(S, 360).features), k(xt(R));
            });
          else if (N.geometry.type === "LineString" || N.geometry.type === "MultiLineString") {
            k(N);
            break e;
          }
        }
        if (!A && N.geometry.type !== "Point")
          break e;
        if (e instanceof Function) {
          const S = e(i, N);
          S && o.push(S.addTo(i));
        } else if (e) {
          const S = [N.center[1], N.center[0]];
          o.push(
            typeof e == "object" ? new Ne.Marker(S, e) : C(S).addTo(i)
          );
        }
      }
      if (t)
        for (const O of M ?? []) {
          if (O === N)
            continue;
          const S = [
            O.center[1],
            O.center[0]
          ];
          let R;
          if (t instanceof Function) {
            if (R = t(i, O), !R)
              continue;
          } else
            R = (typeof t == "object" ? new Ne.Marker(S, t) : C(S, !0)).addTo(i).bindTooltip(
              O.place_type[0] === "reverse" ? O.place_name : O.place_name.replace(/,.*/, ""),
              {
                direction: "top"
              }
            );
          const W = R.getElement();
          W && (W.addEventListener("click", (H) => {
            H.stopPropagation(), a == null || a({ type: "markerClick", id: O.id });
          }), W.addEventListener("mouseenter", () => {
            a == null || a({ type: "markerMouseEnter", id: O.id });
          }), W.addEventListener("mouseleave", () => {
            a == null || a({ type: "markerMouseLeave", id: O.id });
          }), W.classList.toggle("marker-fuzzy", !!O.matching_text)), o.push(R);
        }
    },
    setSelectedMarker(M) {
      var N, A;
      d && ((N = d.getElement()) == null || N.classList.toggle("marker-selected", !1)), d = M > -1 ? o[M] : void 0, (A = d == null ? void 0 : d.getElement()) == null || A.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const M = i.getCenter();
      return [i.getZoom(), M.lng, M.lat];
    }
  };
}
function Hi(i, e) {
  const t = es(i);
  for (const n of t.features)
    if (n.geometry.type == "MultiPolygon")
      for (const r of n.geometry.coordinates)
        Vi(r, e);
    else
      Vi(n.geometry.coordinates, e);
  return t;
}
function Vi(i, e) {
  for (const t of i)
    for (const n of t)
      n[0] += e;
}
class pn extends Ne.Control {
}
Ne.Util.extend(pn.prototype, Ne.Evented.prototype);
var Ee, rt;
class Ts extends pn {
  constructor(t) {
    super(t);
    Yt(this, Ee);
    Yt(this, rt);
    Xt(this, rt, t);
  }
  onAdd(t) {
    const n = document.createElement("div");
    n.className = "leaflet-ctrl-geocoder", Ne.DomEvent.disableClickPropagation(n), Ne.DomEvent.disableScrollPropagation(n);
    const {
      marker: r,
      showResultMarkers: l,
      flyTo: a,
      fullGeometryStyle: o,
      position: d,
      ...c
    } = ve(this, rt), L = typeof a == "boolean" ? {} : a, _ = xs(
      t,
      r,
      l,
      L,
      L,
      o
    );
    Xt(this, Ee, new Yr({
      target: n,
      props: {
        mapController: _,
        flyTo: a === void 0 ? !0 : !!a,
        ...c
      }
    }));
    const C = {
      select: void 0,
      pick: void 0,
      featureslisted: void 0,
      featuresmarked: void 0,
      response: void 0,
      optionsvisibilitychange: void 0,
      reversetoggle: void 0,
      querychange: void 0
    };
    for (const M in C)
      ve(this, Ee).$on(M, (N) => this.fire(M, N.detail));
    return n;
  }
  /**
   * Update the control options.
   *
   * @param options options to update
   */
  setOptions(t) {
    var d;
    Object.assign(ve(this, rt), t);
    const {
      marker: n,
      showResultMarkers: r,
      flyTo: l,
      fullGeometryStyle: a,
      ...o
    } = ve(this, rt);
    (d = ve(this, Ee)) == null || d.$set(o);
  }
  /**
   * Set the content of search input box.
   *
   * @param value text to set
   * @param submit perform the search
   */
  setQuery(t, n = !0) {
    var r;
    (r = ve(this, Ee)) == null || r.setQuery(t, n);
  }
  /**
   * Clear geocoding search results from the map.
   */
  clearMap() {
    var t;
    (t = ve(this, Ee)) == null || t.clearMap();
  }
  /**
   * Clear search result list.
   */
  clearList() {
    var t;
    (t = ve(this, Ee)) == null || t.clearList();
  }
  /**
   * Set reverse geocoding mode.
   *
   * @param reverseActive reverse geocoding active
   */
  setReverseMode(t) {
    var n;
    (n = ve(this, Ee)) == null || n.$set({ reverseActive: t });
  }
  /**
   * Focus the search input box.
   *
   * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
   */
  focus(t) {
    var n;
    (n = ve(this, Ee)) == null || n.focus(t);
  }
  /**
   * Blur the search input box.
   */
  blur() {
    var t;
    (t = ve(this, Ee)) == null || t.blur();
  }
  onRemove() {
    var t;
    (t = ve(this, Ee)) == null || t.$destroy();
  }
}
Ee = new WeakMap(), rt = new WeakMap();
function Ms(...i) {
  return new Ts(...i);
}
window.L && typeof window.L == "object" && typeof window.L.control == "function" && (window.L.control.maptilerGeocoding = Ms);
export {
  Ts as GeocodingControl,
  xs as createLeafletMapController
};
//# sourceMappingURL=leaflet.js.map
