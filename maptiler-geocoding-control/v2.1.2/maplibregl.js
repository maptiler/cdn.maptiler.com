var In = Object.defineProperty;
var pi = (i) => {
  throw TypeError(i);
};
var Bn = (i, e, t) => e in i ? In(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var P = (i, e, t) => Bn(i, typeof e != "symbol" ? e + "" : e, t), yi = (i, e, t) => e.has(i) || pi("Cannot " + t);
var ue = (i, e, t) => (yi(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Kt = (i, e, t) => e.has(i) ? pi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Yt = (i, e, t, n) => (yi(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as vi from "maplibre-gl";
function $() {
}
function zn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Yi(i) {
  return i();
}
function bi() {
  return /* @__PURE__ */ Object.create(null);
}
function qe(i) {
  i.forEach(Yi);
}
function Qi(i) {
  return typeof i == "function";
}
function Ke(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let xt;
function me(i, e) {
  return i === e ? !0 : (xt || (xt = document.createElement("a")), xt.href = e, i === xt.href);
}
function Wn(i) {
  return Object.keys(i).length === 0;
}
function Gn(i, e, t, n) {
  if (i) {
    const r = Xi(i, e, t, n);
    return i[0](r);
  }
}
function Xi(i, e, t, n) {
  return i[1] && n ? zn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Dn(i, e, t, n) {
  return i[2], e.dirty;
}
function Un(i, e, t, n, r, u) {
  if (r) {
    const h = Xi(e, t, n, u);
    i.p(h, r);
  }
}
function qn(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function At(i) {
  return i ?? "";
}
function H(i, e) {
  i.appendChild(e);
}
function ie(i, e, t) {
  i.insertBefore(e, t || null);
}
function ee(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function X(i) {
  return document.createElement(i);
}
function Ce(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function He(i) {
  return document.createTextNode(i);
}
function Ee() {
  return He(" ");
}
function Fn() {
  return He("");
}
function ce(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function jn(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function x(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Zn(i) {
  return Array.from(i.childNodes);
}
function bt(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function wi(i, e) {
  i.value = e ?? "";
}
function Ae(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Hn(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let wt;
function vt(i) {
  wt = i;
}
function Ji() {
  if (!wt) throw new Error("Function called outside component initialization");
  return wt;
}
function Vn(i) {
  Ji().$$.on_destroy.push(i);
}
function $i() {
  const i = Ji();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = Hn(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((h) => {
        h.call(i, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function Kn(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ot = [], $t = [];
let lt = [];
const Ei = [], Yn = /* @__PURE__ */ Promise.resolve();
let ei = !1;
function Qn() {
  ei || (ei = !0, Yn.then(en));
}
function ti(i) {
  lt.push(i);
}
const Qt = /* @__PURE__ */ new Set();
let st = 0;
function en() {
  if (st !== 0)
    return;
  const i = wt;
  do {
    try {
      for (; st < ot.length; ) {
        const e = ot[st];
        st++, vt(e), Xn(e.$$);
      }
    } catch (e) {
      throw ot.length = 0, st = 0, e;
    }
    for (vt(null), ot.length = 0, st = 0; $t.length; ) $t.pop()();
    for (let e = 0; e < lt.length; e += 1) {
      const t = lt[e];
      Qt.has(t) || (Qt.add(t), t());
    }
    lt.length = 0;
  } while (ot.length);
  for (; Ei.length; )
    Ei.pop()();
  ei = !1, Qt.clear(), vt(i);
}
function Xn(i) {
  if (i.fragment !== null) {
    i.update(), qe(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(ti);
  }
}
function Jn(i) {
  const e = [], t = [];
  lt.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), lt = e;
}
const Nt = /* @__PURE__ */ new Set();
let it;
function kt() {
  it = {
    r: 0,
    c: [],
    p: it
    // parent group
  };
}
function Ot() {
  it.r || qe(it.c), it = it.p;
}
function oe(i, e) {
  i && i.i && (Nt.delete(i), i.i(e));
}
function he(i, e, t, n) {
  if (i && i.o) {
    if (Nt.has(i)) return;
    Nt.add(i), it.c.push(() => {
      Nt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Li(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function $n(i, e) {
  he(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function er(i, e, t, n, r, u, h, o, g, c, E, S) {
  let C = i.length, R = u.length, O = C;
  const z = {};
  for (; O--; ) z[i[O].key] = O;
  const T = [], k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), N = [];
  for (O = R; O--; ) {
    const A = S(r, u, O), s = t(A);
    let l = h.get(s);
    l ? N.push(() => l.p(A, e)) : (l = c(s, A), l.c()), k.set(s, T[O] = l), s in z && v.set(s, Math.abs(O - z[s]));
  }
  const D = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set();
  function B(A) {
    oe(A, 1), A.m(o, E), h.set(A.key, A), E = A.first, R--;
  }
  for (; C && R; ) {
    const A = T[R - 1], s = i[C - 1], l = A.key, f = s.key;
    A === s ? (E = A.first, C--, R--) : k.has(f) ? !h.has(l) || D.has(l) ? B(A) : U.has(f) ? C-- : v.get(l) > v.get(f) ? (U.add(l), B(A)) : (D.add(f), C--) : (g(s, h), C--);
  }
  for (; C--; ) {
    const A = i[C];
    k.has(A.key) || g(A, h);
  }
  for (; R; ) B(T[R - 1]);
  return qe(N), T;
}
function Ve(i) {
  i && i.c();
}
function Ge(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), ti(() => {
    const u = i.$$.on_mount.map(Yi).filter(Qi);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : qe(u), i.$$.on_mount = [];
  }), r.forEach(ti);
}
function De(i, e) {
  const t = i.$$;
  t.fragment !== null && (Jn(t.after_update), qe(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function tr(i, e) {
  i.$$.dirty[0] === -1 && (ot.push(i), Qn(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ye(i, e, t, n, r, u, h = null, o = [-1]) {
  const g = wt;
  vt(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: $,
    not_equal: r,
    bound: bi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: bi(),
    dirty: o,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  h && h(c.root);
  let E = !1;
  if (c.ctx = t ? t(i, e.props || {}, (S, C, ...R) => {
    const O = R.length ? R[0] : C;
    return c.ctx && r(c.ctx[S], c.ctx[S] = O) && (!c.skip_bound && c.bound[S] && c.bound[S](O), E && tr(i, S)), C;
  }) : [], c.update(), E = !0, qe(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const S = Zn(e.target);
      c.fragment && c.fragment.l(S), S.forEach(ee);
    } else
      c.fragment && c.fragment.c();
    e.intro && oe(i.$$.fragment), Ge(i, e.target, e.anchor), en();
  }
  vt(g);
}
class Qe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    De(this, 1), this.$destroy = $;
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
    this.$$set && !Wn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ir = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ir);
function nr(i) {
  let e, t;
  return {
    c() {
      e = Ce("svg"), t = Ce("path"), x(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), x(e, "viewBox", "0 0 14 14"), x(e, "width", "13"), x(e, "height", "13"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ie(n, e, r), H(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && ee(e);
    }
  };
}
class tn extends Qe {
  constructor(e) {
    super(), Ye(this, e, null, nr, Ke, {});
  }
}
function rr(i) {
  let e, t;
  return {
    c() {
      e = Ce("svg"), t = Ce("path"), x(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), x(e, "viewBox", "0 0 30 30"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      ie(n, e, r), H(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && ee(e);
    }
  };
}
class nn extends Qe {
  constructor(e) {
    super(), Ye(this, e, null, rr, Ke, {});
  }
}
function sr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function or(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function lr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function ur(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function ar(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function fr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function cr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function hr(i) {
  let e, t, n, r;
  return {
    c() {
      e = X("img"), me(e.src, t = /*imageUrl*/
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
    m(u, h) {
      ie(u, e, h), n || (r = ce(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, h) {
      h & /*imageUrl*/
      32 && !me(e.src, t = /*imageUrl*/
      u[5]) && x(e, "src", t), h & /*category*/
      16 && x(
        e,
        "alt",
        /*category*/
        u[4]
      ), h & /*placeType*/
      64 && x(
        e,
        "title",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && ee(e), n = !1, r();
    }
  };
}
function _i(i) {
  let e, t;
  return {
    c() {
      e = X("span"), t = He(
        /*placeType*/
        i[6]
      ), x(e, "class", "secondary svelte-z7p9pp");
    },
    m(n, r) {
      ie(n, e, r), H(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && bt(
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
function dr(i) {
  let e, t, n, r, u, h, o, g, c, E = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), S, C, R = (
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
  ), O, z, T = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), k, v, N, D, U, B;
  function A(m, a) {
    return a & /*feature*/
    1 && (t = null), a & /*feature*/
    1 && (n = null), a & /*feature*/
    1 && (r = null), a & /*feature*/
    1 && (u = null), /*imageUrl*/
    m[5] ? hr : (
      /*feature*/
      m[0].address ? cr : (t == null && (t = !!/*feature*/
      m[0].id.startsWith("road.")), t ? fr : (n == null && (n = !!/*feature*/
      m[0].id.startsWith("address.")), n ? ar : (r == null && (r = !!/*feature*/
      m[0].id.startsWith("postal_code.")), r ? ur : (u == null && (u = !!/*feature*/
      m[0].id.startsWith("poi.")), u ? lr : (
        /*isReverse*/
        m[8] ? or : sr
      )))))
    );
  }
  let s = A(i, -1), l = s(i), f = R && _i(i);
  return {
    c() {
      e = X("li"), l.c(), h = Ee(), o = X("span"), g = X("span"), c = X("span"), S = He(E), C = Ee(), f && f.c(), O = Ee(), z = X("span"), k = He(T), x(c, "class", "primary svelte-z7p9pp"), x(g, "class", "svelte-z7p9pp"), x(z, "class", "line2 svelte-z7p9pp"), x(o, "class", "texts svelte-z7p9pp"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", v = /*style*/
      i[1] === "selected"), x(e, "aria-checked", N = /*style*/
      i[1] === "picked"), x(e, "class", D = At(
        /*style*/
        i[1]
      ) + " svelte-z7p9pp");
    },
    m(m, a) {
      ie(m, e, a), l.m(e, null), H(e, h), H(e, o), H(o, g), H(g, c), H(c, S), H(g, C), f && f.m(g, null), H(o, O), H(o, z), H(z, k), U || (B = [
        ce(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        ce(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        ce(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], U = !0);
    },
    p(m, [a]) {
      s === (s = A(m, a)) && l ? l.p(m, a) : (l.d(1), l = s(m), l && (l.c(), l.m(e, h))), a & /*feature*/
      1 && E !== (E = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && bt(S, E), a & /*showPlaceType, feature, imageUrl*/
      37 && (R = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), R ? f ? f.p(m, a) : (f = _i(m), f.c(), f.m(g, null)) : f && (f.d(1), f = null), a & /*feature*/
      1 && T !== (T = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && bt(k, T), a & /*style*/
      2 && v !== (v = /*style*/
      m[1] === "selected") && x(e, "aria-selected", v), a & /*style*/
      2 && N !== (N = /*style*/
      m[1] === "picked") && x(e, "aria-checked", N), a & /*style*/
      2 && D !== (D = At(
        /*style*/
        m[1]
      ) + " svelte-z7p9pp") && x(e, "class", D);
    },
    i: $,
    o: $,
    d(m) {
      m && ee(e), l.d(), f && f.d(), U = !1, qe(B);
    }
  };
}
function gr(i, e, t) {
  var U;
  let n, r, { feature: u } = e, { style: h = "default" } = e, { showPlaceType: o } = e, { missingIconsCache: g } = e, { iconsBaseUrl: c } = e;
  const E = $i(), S = (U = u.properties) == null ? void 0 : U.categories;
  let C, R, O = 0, z = u.place_type[0] === "reverse";
  function T() {
    R && g.add(R), t(11, O++, O);
  }
  function k(B) {
    Kn.call(this, i, B);
  }
  const v = () => T(), N = () => E("select", void 0), D = (B) => {
    document.activeElement !== B.target && E("select", void 0);
  };
  return i.$$set = (B) => {
    "feature" in B && t(0, u = B.feature), "style" in B && t(1, h = B.style), "showPlaceType" in B && t(2, o = B.showPlaceType), "missingIconsCache" in B && t(10, g = B.missingIconsCache), "iconsBaseUrl" in B && t(3, c = B.iconsBaseUrl);
  }, i.$$.update = () => {
    var B, A, s, l;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    7224)
      do
        t(12, n--, n), t(4, C = S == null ? void 0 : S[n]), t(5, R = C ? c + C.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!R || g.has(R)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((A = (B = u.properties) == null ? void 0 : B.categories) == null ? void 0 : A.join(", ")) ?? ((l = (s = u.properties) == null ? void 0 : s.place_type_name) == null ? void 0 : l[0]) ?? u.place_type[0]);
  }, t(12, n = (S == null ? void 0 : S.length) ?? 0), [
    u,
    h,
    o,
    c,
    C,
    R,
    r,
    E,
    z,
    T,
    g,
    O,
    n,
    k,
    v,
    N,
    D
  ];
}
class mr extends Qe {
  constructor(e) {
    super(), Ye(this, e, gr, dr, Ke, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 10,
      iconsBaseUrl: 3
    });
  }
}
function pr(i) {
  let e;
  return {
    c() {
      e = X("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', x(e, "class", "svelte-7cmwmc");
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
class yr extends Qe {
  constructor(e) {
    super(), Ye(this, e, null, pr, Ke, {});
  }
}
function vr(i) {
  let e, t, n;
  return {
    c() {
      e = Ce("svg"), t = Ce("path"), x(t, "stroke-width", "4"), x(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), x(t, "class", "svelte-gzo3ar"), x(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), x(e, "viewBox", "0 0 70 85"), x(e, "fill", "none"), x(e, "class", "svelte-gzo3ar"), Ae(
        e,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), Ae(
        e,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    m(r, u) {
      ie(r, e, u), H(e, t);
    },
    p(r, [u]) {
      u & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && x(e, "width", n), u & /*displayIn*/
      1 && Ae(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), u & /*displayIn*/
      1 && Ae(
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
function br(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class wr extends Qe {
  constructor(e) {
    super(), Ye(this, e, br, vr, Ke, { displayIn: 0 });
  }
}
function Er(i) {
  let e, t;
  return {
    c() {
      e = Ce("svg"), t = Ce("path"), x(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), x(e, "viewBox", "0 0 60.006 21.412"), x(e, "width", "14"), x(e, "height", "20"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ie(n, e, r), H(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && ee(e);
    }
  };
}
class Lr extends Qe {
  constructor(e) {
    super(), Ye(this, e, null, Er, Ke, {});
  }
}
function _r(i) {
  let e, t, n;
  return {
    c() {
      e = Ce("svg"), t = Ce("circle"), n = Ce("path"), x(t, "cx", "4.789"), x(t, "cy", "4.787"), x(t, "r", "3.85"), x(t, "class", "svelte-1aq105l"), x(n, "d", "M12.063 12.063 7.635 7.635"), x(n, "class", "svelte-1aq105l"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "13"), x(e, "height", "13"), x(e, "viewBox", "0 0 13 13"), x(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      ie(r, e, u), H(e, t), H(e, n);
    },
    p: $,
    i: $,
    o: $,
    d(r) {
      r && ee(e);
    }
  };
}
class Sr extends Qe {
  constructor(e) {
    super(), Ye(this, e, null, _r, Ke, {});
  }
}
function xr(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function It(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let ht;
async function Tr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (ht && r.cachedLocationExpiry && ht.time + r.cachedLocationExpiry > Date.now()) {
          if (!ht.coords)
            break e;
          return ht.coords;
        }
        let u;
        try {
          return u = await new Promise((h, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (g) => {
                h(
                  [g.coords.longitude, g.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (g) => {
                o(g);
              },
              r
            );
          }), u;
        } catch {
        } finally {
          r.cachedLocationExpiry && (ht = {
            time: Date.now(),
            coords: u
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
const Mr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Si = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, xi = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Ti = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Mi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ci = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Cr(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((R) => Number(R.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), h = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let g;
    i == "DD" && (g = `${r}° ${h}, ${u}° ${o}`);
    const c = Math.floor(r), E = Math.floor(u), S = (r - c) * 60, C = (u - E) * 60;
    if (i == "DM") {
      let R = Ni(S, 3).toFixed(3).padStart(6, "0"), O = Ni(C, 3).toFixed(3).padStart(6, "0");
      R.endsWith(".000") && O.endsWith(".000") && (R = R.replace(/\.000$/, ""), O = O.replace(/\.000$/, "")), g = `${c}° ${R}' ${h}, ${E}° ${O}' ${o}`;
    }
    if (i == "DMS") {
      const R = Math.floor(S), O = Math.floor(C);
      let z = ((S - R) * 60).toFixed(1).padStart(4, "0"), T = ((C - O) * 60).toFixed(1).padStart(4, "0");
      const k = R.toString().padStart(2, "0"), v = O.toString().padStart(2, "0");
      z.endsWith(".0") && T.endsWith(".0") && (z = z.replace(/\.0$/, ""), T = T.replace(/\.0$/, "")), g = `${c}° ${k}' ${z}" ${h}, ${E}° ${v}' ${T}" ${o}`;
    }
    return g;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Ni(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function oi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", h = null, o = [], g = !1;
  if (Mr.test(i))
    throw new Error("invalid coordinate value");
  if (Si.test(i))
    if (o = Si.exec(i), g = dt(o), g)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), h = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (xi.test(i))
    if (o = xi.exec(i), g = dt(o), g) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), h = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Ti.test(i))
    if (o = Ti.exec(i), g = dt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, h = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, h = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Mi.test(i))
    if (o = Mi.exec(i), g = dt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, h = "DM"), o[6] && (t += o[6] / 3600, h = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ci.test(i)) {
    if (o = Ci.exec(i), g = dt(o), o.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, h = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, h = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (g) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !u || !r && u)
      throw new Error("invalid coordinates value");
    if (r && r == u)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let c = /S|SOUTH/i;
    c.test(r) && t > 0 && (t = -1 * t), c = /W|WEST/i, c.test(u) && n > 0 && (n = -1 * n);
    const E = o[0].trim();
    let S, C;
    const R = /[,/;\u0020]/g, O = E.match(R);
    if (O == null) {
      const k = Math.floor(i.length / 2);
      S = E.substring(0, k).trim(), C = E.substring(k).trim();
    } else {
      let k;
      O.length % 2 == 1 ? k = Math.floor(O.length / 2) : k = O.length / 2 - 1;
      let v = 0;
      if (k == 0)
        v = E.indexOf(O[0]), S = E.substring(0, v).trim(), C = E.substring(v + 1).trim();
      else {
        let N = 0, D = 0;
        for (; N <= k; )
          v = E.indexOf(O[N], D), D = v + 1, N++;
        S = E.substring(0, v).trim(), C = E.substring(v + 1).trim();
      }
    }
    const z = S.split(".");
    if (z.length == 2 && z[1] == 0 && z[1].length != 2)
      throw new Error("invalid coordinates format");
    const T = C.split(".");
    if (T.length == 2 && T[1] == 0 && T[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(S) || /^\d+$/.test(C))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: E,
      verbatimLatitude: S,
      verbatimLongitude: C,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: h,
      closeEnough: Nr,
      toCoordinateFormat: Cr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function dt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const h = e[u], o = e[u + r], g = t.test(h) && t.test(o), c = n.test(h) && n.test(o), E = h == o;
    if (!(h == null && o == null)) {
      if (h == null || o == null)
        return !1;
      if (g || c || E)
        continue;
      return !1;
    }
  }
  return !0;
}
function ki(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Nr(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ki(this.decimalLatitude, Number(e[0])) && ki(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const kr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
oi.to = kr;
const Or = [
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
], Rr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Pr = [
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
], Ar = [
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
function Ir() {
  const i = [];
  return Or.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Rr });
  }), [...i, ...Pr, ...Ar];
}
const Br = Ir();
oi.formats = Br.map((i) => i.verbatimCoordinates);
const zr = oi;
function Oi(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Ri(i) {
  let e, t;
  return e = new yr({}), {
    c() {
      Ve(e.$$.fragment);
    },
    m(n, r) {
      Ge(e, n, r), t = !0;
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      De(e, n);
    }
  };
}
function Pi(i) {
  let e, t, n, r, u;
  return t = new Lr({}), {
    c() {
      e = X("button"), Ve(t.$$.fragment), x(e, "type", "button"), x(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), x(e, "class", "svelte-bz0zu3"), Ae(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(h, o) {
      ie(h, e, o), Ge(t, e, null), n = !0, r || (u = ce(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(h, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      1024) && x(
        e,
        "title",
        /*reverseButtonTitle*/
        h[10]
      ), (!n || o[0] & /*reverseActive*/
      1) && Ae(
        e,
        "active",
        /*reverseActive*/
        h[0]
      );
    },
    i(h) {
      n || (oe(t.$$.fragment, h), n = !0);
    },
    o(h) {
      he(t.$$.fragment, h), n = !1;
    },
    d(h) {
      h && ee(e), De(t), r = !1, u();
    }
  };
}
function Wr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, h, o = Li(
    /*listFeatures*/
    i[13]
  );
  const g = (c) => (
    /*feature*/
    c[97].id + /*feature*/
    (c[97].address ? "," + /*feature*/
    c[97].address : "")
  );
  for (let c = 0; c < o.length; c += 1) {
    let E = Oi(i, o, c), S = g(E);
    n.set(S, t[c] = Ai(S, E));
  }
  return {
    c() {
      e = X("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(c, E) {
      ie(c, e, E);
      for (let S = 0; S < t.length; S += 1)
        t[S] && t[S].m(e, null);
      r = !0, u || (h = [
        ce(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        ce(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        ce(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], u = !0);
    },
    p(c, E) {
      E[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = Li(
        /*listFeatures*/
        c[13]
      ), kt(), t = er(t, E, g, 1, c, o, n, e, $n, Ai, null, Oi), Ot());
    },
    i(c) {
      if (!r) {
        for (let E = 0; E < o.length; E += 1)
          oe(t[E]);
        r = !0;
      }
    },
    o(c) {
      for (let E = 0; E < t.length; E += 1)
        he(t[E]);
      r = !1;
    },
    d(c) {
      c && ee(e);
      for (let E = 0; E < t.length; E += 1)
        t[E].d();
      u = !1, qe(h);
    }
  };
}
function Gr(i) {
  let e, t, n, r, u, h;
  return t = new nn({}), {
    c() {
      e = X("div"), Ve(t.$$.fragment), n = Ee(), r = X("div"), u = He(
        /*noResultsMessage*/
        i[8]
      ), x(r, "class", "svelte-bz0zu3"), x(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, g) {
      ie(o, e, g), Ge(t, e, null), H(e, n), H(e, r), H(r, u), h = !0;
    },
    p(o, g) {
      (!h || g[0] & /*noResultsMessage*/
      256) && bt(
        u,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      h || (oe(t.$$.fragment, o), h = !0);
    },
    o(o) {
      he(t.$$.fragment, o), h = !1;
    },
    d(o) {
      o && ee(e), De(t);
    }
  };
}
function Dr(i) {
  let e = "", t;
  return {
    c() {
      t = He(e);
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
function Ur(i) {
  let e, t, n, r, u, h, o, g, c, E, S;
  return t = new nn({}), g = new tn({}), {
    c() {
      e = X("div"), Ve(t.$$.fragment), n = Ee(), r = X("div"), u = He(
        /*errorMessage*/
        i[7]
      ), h = Ee(), o = X("button"), Ve(g.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(o, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(C, R) {
      ie(C, e, R), Ge(t, e, null), H(e, n), H(e, r), H(r, u), H(e, h), H(e, o), Ge(g, o, null), c = !0, E || (S = ce(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), E = !0);
    },
    p(C, R) {
      (!c || R[0] & /*errorMessage*/
      128) && bt(
        u,
        /*errorMessage*/
        C[7]
      );
    },
    i(C) {
      c || (oe(t.$$.fragment, C), oe(g.$$.fragment, C), c = !0);
    },
    o(C) {
      he(t.$$.fragment, C), he(g.$$.fragment, C), c = !1;
    },
    d(C) {
      C && ee(e), De(t), De(g), E = !1, S();
    }
  };
}
function Ai(i, e) {
  var o;
  let t, n, r;
  function u() {
    return (
      /*mouseenter_handler*/
      e[81](
        /*i*/
        e[99]
      )
    );
  }
  function h() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new mr({
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
  }), n.$on("mouseenter", u), n.$on("select", h), {
    key: i,
    first: null,
    c() {
      t = Fn(), Ve(n.$$.fragment), this.first = t;
    },
    m(g, c) {
      ie(g, t, c), Ge(n, g, c), r = !0;
    },
    p(g, c) {
      var S;
      e = g;
      const E = {};
      c[0] & /*listFeatures*/
      8192 && (E.feature = /*feature*/
      e[97]), c[0] & /*showPlaceType*/
      2048 && (E.showPlaceType = /*showPlaceType*/
      e[11]), c[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (E.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((S = e[14]) == null ? void 0 : S.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), c[0] & /*iconsBaseUrl*/
      4096 && (E.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(E);
    },
    i(g) {
      r || (oe(n.$$.fragment, g), r = !0);
    },
    o(g) {
      he(n.$$.fragment, g), r = !1;
    },
    d(g) {
      g && ee(t), De(n, g);
    }
  };
}
function qr(i) {
  let e, t, n, r, u, h, o, g, c, E, S, C, R, O, z, T, k, v, N, D, U, B = !1;
  u = new Sr({}), S = new tn({});
  let A = (
    /*abortController*/
    i[20] && Ri()
  ), s = (
    /*enableReverse*/
    i[6] === "button" && Pi(i)
  );
  const l = (
    /*#slots*/
    i[70].default
  ), f = Gn(
    l,
    i,
    /*$$scope*/
    i[69],
    null
  ), m = [Ur, Dr, Gr, Wr], a = [];
  function b(p, d) {
    var y, w;
    return (
      /*error*/
      p[19] ? 0 : !/*focusedDelayed*/
      p[16] && !/*keepListOpen*/
      p[4] ? 1 : (
        /*listFeatures*/
        ((y = p[13]) == null ? void 0 : y.length) === 0 ? 2 : (
          /*listFeatures*/
          (w = p[13]) != null && w.length && /*focusedDelayed*/
          (p[16] || /*keepListOpen*/
          p[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(T = b(i)) && (k = a[T] = m[T](i)), {
    c() {
      e = Ee(), t = X("form"), n = X("div"), r = X("button"), Ve(u.$$.fragment), h = Ee(), o = X("input"), g = Ee(), c = X("div"), E = X("button"), Ve(S.$$.fragment), C = Ee(), A && A.c(), R = Ee(), s && s.c(), O = Ee(), f && f.c(), z = Ee(), k && k.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), x(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), x(o, "class", "svelte-bz0zu3"), x(E, "type", "button"), x(
        E,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), x(E, "class", "svelte-bz0zu3"), x(c, "class", "clear-button-container svelte-bz0zu3"), Ae(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", v = At(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), Ae(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(p, d) {
      ie(p, e, d), ie(p, t, d), H(t, n), H(n, r), Ge(u, r, null), H(n, h), H(n, o), i[72](o), wi(
        o,
        /*searchValue*/
        i[1]
      ), H(n, g), H(n, c), H(c, E), Ge(S, E, null), H(c, C), A && A.m(c, null), H(n, R), s && s.m(n, null), H(n, O), f && f.m(n, null), H(t, z), ~T && a[T].m(t, null), N = !0, D || (U = [
        ce(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        ce(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        ce(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        ce(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        ce(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        ce(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        ce(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        ce(
          o,
          "change",
          /*change_handler*/
          i[77]
        ),
        ce(
          E,
          "click",
          /*click_handler_2*/
          i[78]
        ),
        ce(t, "submit", jn(
          /*handleSubmit*/
          i[22]
        ))
      ], D = !0);
    },
    p(p, d) {
      (!N || d[0] & /*placeholder*/
      512) && x(
        o,
        "placeholder",
        /*placeholder*/
        p[9]
      ), (!N || d[0] & /*placeholder*/
      512) && x(
        o,
        "aria-label",
        /*placeholder*/
        p[9]
      ), d[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      p[1] && wi(
        o,
        /*searchValue*/
        p[1]
      ), (!N || d[0] & /*clearButtonTitle*/
      8) && x(
        E,
        "title",
        /*clearButtonTitle*/
        p[3]
      ), /*abortController*/
      p[20] ? A ? d[0] & /*abortController*/
      1048576 && oe(A, 1) : (A = Ri(), A.c(), oe(A, 1), A.m(c, null)) : A && (kt(), he(A, 1, 1, () => {
        A = null;
      }), Ot()), (!N || d[0] & /*searchValue*/
      2) && Ae(
        c,
        "displayable",
        /*searchValue*/
        p[1] !== ""
      ), /*enableReverse*/
      p[6] === "button" ? s ? (s.p(p, d), d[0] & /*enableReverse*/
      64 && oe(s, 1)) : (s = Pi(p), s.c(), oe(s, 1), s.m(n, O)) : s && (kt(), he(s, 1, 1, () => {
        s = null;
      }), Ot()), f && f.p && (!N || d[2] & /*$$scope*/
      128) && Un(
        f,
        l,
        p,
        /*$$scope*/
        p[69],
        N ? Dn(
          l,
          /*$$scope*/
          p[69],
          d,
          null
        ) : qn(
          /*$$scope*/
          p[69]
        ),
        null
      );
      let y = T;
      T = b(p), T === y ? ~T && a[T].p(p, d) : (k && (kt(), he(a[y], 1, 1, () => {
        a[y] = null;
      }), Ot()), ~T ? (k = a[T], k ? k.p(p, d) : (k = a[T] = m[T](p), k.c()), oe(k, 1), k.m(t, null)) : k = null), (!N || d[0] & /*className*/
      4 && v !== (v = At(
        /*className*/
        p[2]
      ) + " svelte-bz0zu3")) && x(t, "class", v), (!N || d[0] & /*className, collapsed, searchValue*/
      38) && Ae(
        t,
        "can-collapse",
        /*collapsed*/
        p[5] && /*searchValue*/
        p[1] === ""
      );
    },
    i(p) {
      N || (oe(B), oe(u.$$.fragment, p), oe(S.$$.fragment, p), oe(A), oe(s), oe(f, p), oe(k), N = !0);
    },
    o(p) {
      he(B), he(u.$$.fragment, p), he(S.$$.fragment, p), he(A), he(s), he(f, p), he(k), N = !1;
    },
    d(p) {
      p && (ee(e), ee(t)), De(u), i[72](null), De(S), A && A.d(), s && s.d(), f && f.d(p), ~T && a[T].d(), D = !1, qe(U);
    }
  };
}
function Fr(i, e, t) {
  let n, r, u, { $$slots: h = {}, $$scope: o } = e;
  const g = {
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
  let { class: c = void 0 } = e, { apiKey: E } = e, { bbox: S = void 0 } = e, { clearButtonTitle: C = "clear" } = e, { clearOnBlur: R = !1 } = e, { clearListOnPick: O = !1 } = e, { keepListOpen: z = !1 } = e, { collapsed: T = !1 } = e, { country: k = void 0 } = e, { debounceSearch: v = 200 } = e, { enableReverse: N = "never" } = e, { errorMessage: D = "Something went wrong…" } = e, { filter: U = () => !0 } = e, { flyTo: B = !0 } = e, { fuzzyMatch: A = !0 } = e, { language: s = void 0 } = e, { limit: l = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: m = f } = e, { mapController: a = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: p = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: d = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: w = N === "always" } = e, { reverseButtonTitle: L = "toggle reverse geocoding" } = e, { searchValue: M = "" } = e, { pickedResultStyle: I = "full-geometry" } = e, { showPlaceType: W = "if-needed" } = e, { showResultsWhileTyping: Z = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: te = !1 } = e, { markerOnSelected: j = !0 } = e, { types: V = void 0 } = e;
  const ae = [];
  let { reverseGeocodingTypes: Be = ae } = e, { exhaustiveReverseGeocoding: Je = !1 } = e, { excludeTypes: $e = !1 } = e;
  const ye = void 0;
  let { reverseGeocodingExcludeTypes: Ne = ye } = e, { zoom: de = g } = e, { apiUrl: fe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: ai = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.2/icons/" } = e, { adjustUrlQuery: Dt = () => {
  } } = e, { adjustUrl: Ut = () => {
  } } = e;
  function hn(_) {
    Te.focus(_);
  }
  function dn() {
    Te.blur();
  }
  function fi(_, ne = !0, se = !1) {
    t(1, M = _), ne ? (t(15, Y = -1), hi()) : (di(void 0, !se, se), setTimeout(() => {
      Te.focus(), Te.select();
    }));
  }
  function gn() {
    t(13, F = void 0), t(14, G = void 0), t(15, Y = -1);
  }
  function mn() {
    t(64, le = []), t(14, G = void 0);
  }
  let F, le, G, ci = "", Te, Y = -1, ke, _t = [], et, nt, rt, qt, ze = !1;
  const pn = /* @__PURE__ */ new Set(), Fe = $i();
  Vn(() => {
    a && (a.setEventHandler(void 0), a.indicateReverse(!1), a.setSelectedMarker(-1), a.setFeatures(void 0, void 0, !1));
  });
  function hi(_) {
    if (t(17, ze = !1), nt && (clearTimeout(nt), nt = void 0), Y > -1 && F)
      t(14, G = F[Y]), t(1, M = G.place_type[0] === "reverse" ? G.place_name : G.place_name.replace(/,.*/, "")), t(19, ke = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (M) {
      const ne = _ || !Ft(M);
      jt(M, { exact: !0 }).then(() => {
        t(64, le = F), t(14, G = void 0), ne && yn();
      }).catch((se) => t(19, ke = se));
    }
  }
  function Ft(_) {
    try {
      return zr(_, 6);
    } catch {
      return !1;
    }
  }
  async function jt(_, { byId: ne = !1, exact: se = !1 } = {}) {
    var be, Oe, je;
    t(19, ke = void 0), et == null || et.abort();
    const ve = new AbortController();
    t(20, et = ve);
    try {
      const Q = Ft(_), at = new URL(fe + "/" + encodeURIComponent(Q ? Q.decimalLongitude + "," + Q.decimalLatitude : _) + ".json"), Le = at.searchParams;
      s !== void 0 && Le.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Vt] = (a == null ? void 0 : a.getCenterAndZoom()) ?? [];
      let Re = (be = !Q || Be === ae ? V : Be) == null ? void 0 : be.map((ge) => typeof ge == "string" ? ge : Vt === void 0 || (ge[0] ?? 0) <= Vt && Vt < (ge[1] ?? 1 / 0) ? ge[2] : void 0).filter((ge) => ge !== void 0);
      Re && (Re = [...new Set(Re)], Le.set("types", Re.join(",")));
      const mi = !Q || Ne === ye ? $e : Ne;
      if (mi && Le.set("excludeTypes", String(mi)), S && Le.set("bbox", S.map((ge) => ge.toFixed(6)).join(",")), k && Le.set("country", Array.isArray(k) ? k.join(",") : k), !ne && !Q) {
        const ge = await Tr(a, y, ve);
        ge && Le.set("proximity", ge), (se || !Z) && Le.set("autocomplete", "false"), Le.set("fuzzyMatch", String(A));
      }
      const ft = m === f ? l : m;
      ft !== void 0 && ft > 1 && (Re == null ? void 0 : Re.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), Q ? (ft === 1 || ft !== void 0 && (Je || (Re == null ? void 0 : Re.length) === 1)) && Le.set("limit", String(ft)) : l !== void 0 && Le.set("limit", String(l)), Le.set("key", E), Dt(Le), Ut(at);
      const An = at.searchParams.get("types") === "" && at.searchParams.get("excludeTypes") !== "true", St = at.toString();
      if (St === ci) {
        ne ? (O && t(13, F = void 0), t(14, G = _t[0])) : (t(13, F = _t), ((Oe = F[Y]) == null ? void 0 : Oe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      ci = St;
      let ct;
      if (An)
        ct = { type: "FeatureCollection", features: [] };
      else {
        const ge = await fetch(St, { signal: ve.signal, ...J });
        if (!ge.ok)
          throw new Error(await ge.text());
        ct = await ge.json();
      }
      Fe("response", { url: St, featureCollection: ct }), ne ? (O && t(13, F = void 0), t(14, G = ct.features[0]), _t = [G]) : (t(13, F = ct.features.filter(U)), Q && F.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + Q.decimalLongitude + "_" + Q.decimalLatitude,
        text: Q.decimalLatitude + ", " + Q.decimalLongitude,
        place_name: Q.decimalLatitude + ", " + Q.decimalLongitude,
        place_type: ["reverse"],
        center: [Q.decimalLongitude, Q.decimalLatitude],
        bbox: [
          Q.decimalLongitude,
          Q.decimalLatitude,
          Q.decimalLongitude,
          Q.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [Q.decimalLongitude, Q.decimalLatitude]
        }
      }), _t = F, ((je = F[Y]) == null ? void 0 : je.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), Q && Te.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      ve === et && t(20, et = void 0);
    }
  }
  function yn() {
    var ve;
    if (!(le != null && le.length) || !B)
      return;
    const _ = [180, 90, -180, -90], ne = !le.some((be) => !be.matching_text);
    let se;
    for (const be of le) {
      const Oe = ut(be);
      if (se = se === void 0 ? Oe : Oe === void 0 ? se : Math.max(se, Oe), ne || !be.matching_text)
        for (const je of [0, 1, 2, 3])
          _[je] = Math[je < 2 ? "min" : "max"](_[je], ((ve = be.bbox) == null ? void 0 : ve[je]) ?? be.center[je % 2]);
    }
    a && le.length > 0 && (G && _[0] === _[2] && _[1] === _[3] ? a.flyTo(G.center, ut(G)) : a.fitBounds(It(_), 50, se));
  }
  function Zt() {
    !G || !a || (!G.bbox || G.bbox[0] === G.bbox[2] && G.bbox[1] === G.bbox[3] ? a.flyTo(G.center, ut(G)) : a.fitBounds(It(G.bbox), 50, ut(G)));
  }
  function ut(_) {
    var se;
    if (!_.bbox || _.bbox[0] !== _.bbox[2] && _.bbox[1] !== _.bbox[3])
      return;
    const ne = _.id.replace(/\..*/, "");
    return (Array.isArray((se = _.properties) == null ? void 0 : se.categories) ? _.properties.categories.reduce(
      (ve, be) => {
        const Oe = de[ne + "." + be];
        return ve === void 0 ? Oe : Oe === void 0 ? ve : Math.max(ve, Oe);
      },
      void 0
    ) : void 0) ?? de[ne];
  }
  function vn(_) {
    t(0, w = N === "always"), t(13, F = void 0), t(14, G = void 0), t(15, Y = -1), fi(_[1].toFixed(6) + ", " + xr(_[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function bn(_) {
    if (!F)
      return;
    let ne = _.key === "ArrowDown" ? 1 : _.key === "ArrowUp" ? -1 : 0;
    ne && (Te.focus(), t(17, ze = !0), _.preventDefault(), G && Y === -1 && t(15, Y = F.findIndex((se) => se.id === (G == null ? void 0 : G.id))), Y === (G || K ? 0 : -1) && ne === -1 && t(15, Y = F.length), t(15, Y += ne), Y >= F.length && t(15, Y = -1), Y < 0 && (G || K) && t(15, Y = 0));
  }
  function di(_, ne = !0, se = !1) {
    if (t(19, ke = void 0), t(14, G = void 0), t(17, ze = !0), Z || se) {
      if (nt && clearTimeout(nt), M.length < b)
        return;
      const ve = M;
      nt = window.setTimeout(
        () => {
          jt(ve).catch((be) => t(19, ke = be));
        },
        ne ? v : 0
      );
    } else
      t(13, F = void 0), t(19, ke = void 0);
  }
  function Ht(_) {
    G && (G == null ? void 0 : G.id) === (_ == null ? void 0 : _.id) ? Zt() : (t(14, G = _), t(1, M = _.place_name));
  }
  function gi(_) {
    t(15, Y = _);
  }
  function wn() {
    (!K || G) && t(15, Y = -1), te && Zt();
  }
  const En = () => Te.focus();
  function Ln(_) {
    $t[_ ? "unshift" : "push"](() => {
      Te = _, t(18, Te);
    });
  }
  function _n() {
    M = this.value, t(1, M), t(17, ze), t(31, R), t(16, rt);
  }
  const Sn = () => t(17, ze = !0), xn = () => t(17, ze = !1), Tn = () => t(17, ze = !0), Mn = () => t(14, G = void 0), Cn = () => {
    t(1, M = ""), Te.focus();
  }, Nn = () => t(0, w = !w), kn = () => t(19, ke = void 0), On = (_) => gi(_), Rn = (_) => Ht(_), Pn = () => {
  };
  return i.$$set = (_) => {
    "class" in _ && t(2, c = _.class), "apiKey" in _ && t(29, E = _.apiKey), "bbox" in _ && t(30, S = _.bbox), "clearButtonTitle" in _ && t(3, C = _.clearButtonTitle), "clearOnBlur" in _ && t(31, R = _.clearOnBlur), "clearListOnPick" in _ && t(32, O = _.clearListOnPick), "keepListOpen" in _ && t(4, z = _.keepListOpen), "collapsed" in _ && t(5, T = _.collapsed), "country" in _ && t(33, k = _.country), "debounceSearch" in _ && t(34, v = _.debounceSearch), "enableReverse" in _ && t(6, N = _.enableReverse), "errorMessage" in _ && t(7, D = _.errorMessage), "filter" in _ && t(35, U = _.filter), "flyTo" in _ && t(36, B = _.flyTo), "fuzzyMatch" in _ && t(37, A = _.fuzzyMatch), "language" in _ && t(38, s = _.language), "limit" in _ && t(39, l = _.limit), "reverseGeocodingLimit" in _ && t(40, m = _.reverseGeocodingLimit), "mapController" in _ && t(41, a = _.mapController), "minLength" in _ && t(42, b = _.minLength), "noResultsMessage" in _ && t(8, p = _.noResultsMessage), "placeholder" in _ && t(9, d = _.placeholder), "proximity" in _ && t(43, y = _.proximity), "reverseActive" in _ && t(0, w = _.reverseActive), "reverseButtonTitle" in _ && t(10, L = _.reverseButtonTitle), "searchValue" in _ && t(1, M = _.searchValue), "pickedResultStyle" in _ && t(44, I = _.pickedResultStyle), "showPlaceType" in _ && t(11, W = _.showPlaceType), "showResultsWhileTyping" in _ && t(45, Z = _.showResultsWhileTyping), "selectFirst" in _ && t(46, K = _.selectFirst), "flyToSelected" in _ && t(47, te = _.flyToSelected), "markerOnSelected" in _ && t(48, j = _.markerOnSelected), "types" in _ && t(49, V = _.types), "reverseGeocodingTypes" in _ && t(50, Be = _.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in _ && t(51, Je = _.exhaustiveReverseGeocoding), "excludeTypes" in _ && t(52, $e = _.excludeTypes), "reverseGeocodingExcludeTypes" in _ && t(53, Ne = _.reverseGeocodingExcludeTypes), "zoom" in _ && t(54, de = _.zoom), "apiUrl" in _ && t(55, fe = _.apiUrl), "fetchParameters" in _ && t(56, J = _.fetchParameters), "iconsBaseUrl" in _ && t(12, ai = _.iconsBaseUrl), "adjustUrlQuery" in _ && t(57, Dt = _.adjustUrlQuery), "adjustUrl" in _ && t(58, Ut = _.adjustUrl), "$$scope" in _ && t(69, o = _.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, w = N === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && I !== "marker-only" && G && !G.address && G.geometry.type === "Point" && G.place_type[0] !== "reverse" && jt(G.id, { byId: !0 }).catch((_) => t(19, ke = _)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (a && G && G.id !== qt && B && (Zt(), O && t(13, F = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, qt = G == null ? void 0 : G.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, rt = ze), R && !rt && t(1, M = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && M.length < b && (t(13, F = void 0), t(19, ke = void 0), t(64, le = F)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && F != null && F.length && Y == -1 && !G && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== F && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && a && a.setEventHandler((_) => {
      switch (_.type) {
        case "mapClick":
          w && vn(_.coordinates);
          break;
        case "markerClick":
          {
            const ne = F == null ? void 0 : F.find((se) => se.id === _.id);
            ne && Ht(ne);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = rt ? (F == null ? void 0 : F.findIndex((ne) => ne.id === _.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = F == null ? void 0 : F[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && a && r && B && te && a.flyTo(r.center, ut(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = I === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (j || a == null || a.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && a && j && !le && (a.setFeatures(r ? [r] : void 0, G, n), a.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && a && a.setFeatures(le, G, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le && a && a.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && a) {
      const _ = Ft(M);
      a.setReverseMarker(_ ? [_.decimalLongitude, _.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && Fe("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && Fe("pick", { feature: G }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(F != null && F.length) && (rt || z)), i.$$.dirty[2] & /*optionsVisible*/
    32 && Fe("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && Fe("featureslisted", { features: F }), i.$$.dirty[2] & /*markedFeatures*/
    4 && Fe("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && Fe("reversetoggle", { reverse: w }), i.$$.dirty[0] & /*searchValue*/
    2 && Fe("querychange", { query: M }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && a && a.indicateReverse(w);
  }, [
    w,
    M,
    c,
    C,
    z,
    T,
    N,
    D,
    p,
    d,
    L,
    W,
    ai,
    F,
    G,
    Y,
    rt,
    ze,
    Te,
    ke,
    et,
    pn,
    hi,
    bn,
    di,
    Ht,
    gi,
    wn,
    g,
    E,
    S,
    R,
    O,
    k,
    v,
    U,
    B,
    A,
    s,
    l,
    m,
    a,
    b,
    y,
    I,
    Z,
    K,
    te,
    j,
    V,
    Be,
    Je,
    $e,
    Ne,
    de,
    fe,
    J,
    Dt,
    Ut,
    hn,
    dn,
    fi,
    gn,
    mn,
    le,
    qt,
    r,
    u,
    n,
    o,
    h,
    En,
    Ln,
    _n,
    Sn,
    xn,
    Tn,
    Mn,
    Cn,
    Nn,
    kn,
    On,
    Rn,
    Pn
  ];
}
let jr = class extends Qe {
  constructor(e) {
    super(), Ye(
      this,
      e,
      Fr,
      qr,
      Ke,
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
function Et(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function li(i, e, t = {}) {
  for (const r of i) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let u = 0; u < r[r.length - 1].length; u++)
      if (r[r.length - 1][u] !== r[0][u])
        throw new Error("First and last Position are not equivalent.");
  }
  return Et({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function Lt(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function rn(i, e, t = {}) {
  return Et({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
var Zr = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Xt = Math.ceil, Se = Math.floor, pe = "[BigNumber Error] ", Ii = pe + "Number primitive has more than 15 significant digits: ", Me = 1e14, q = 14, Bi = 9007199254740991, Jt = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ze = 1e7, we = 1e9;
function sn(i) {
  var e, t, n, r = v.prototype = { constructor: v, toString: null, valueOf: null }, u = new v(1), h = 20, o = 4, g = -7, c = 21, E = -1e7, S = 1e7, C = !1, R = 1, O = 0, z = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, T = "0123456789abcdefghijklmnopqrstuvwxyz", k = !0;
  function v(s, l) {
    var f, m, a, b, p, d, y, w, L = this;
    if (!(L instanceof v)) return new v(s, l);
    if (l == null) {
      if (s && s._isBigNumber === !0) {
        L.s = s.s, !s.c || s.e > S ? L.c = L.e = null : s.e < E ? L.c = [L.e = 0] : (L.e = s.e, L.c = s.c.slice());
        return;
      }
      if ((d = typeof s == "number") && s * 0 == 0) {
        if (L.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (b = 0, p = s; p >= 10; p /= 10, b++) ;
          b > S ? L.c = L.e = null : (L.e = b, L.c = [s]);
          return;
        }
        w = String(s);
      } else {
        if (!Zr.test(w = String(s))) return n(L, w, d);
        L.s = w.charCodeAt(0) == 45 ? (w = w.slice(1), -1) : 1;
      }
      (b = w.indexOf(".")) > -1 && (w = w.replace(".", "")), (p = w.search(/e/i)) > 0 ? (b < 0 && (b = p), b += +w.slice(p + 1), w = w.substring(0, p)) : b < 0 && (b = w.length);
    } else {
      if (re(l, 2, T.length, "Base"), l == 10 && k)
        return L = new v(s), B(L, h + L.e + 1, o);
      if (w = String(s), d = typeof s == "number") {
        if (s * 0 != 0) return n(L, w, d, l);
        if (L.s = 1 / s < 0 ? (w = w.slice(1), -1) : 1, v.DEBUG && w.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Ii + s);
      } else
        L.s = w.charCodeAt(0) === 45 ? (w = w.slice(1), -1) : 1;
      for (f = T.slice(0, l), b = p = 0, y = w.length; p < y; p++)
        if (f.indexOf(m = w.charAt(p)) < 0) {
          if (m == ".") {
            if (p > b) {
              b = y;
              continue;
            }
          } else if (!a && (w == w.toUpperCase() && (w = w.toLowerCase()) || w == w.toLowerCase() && (w = w.toUpperCase()))) {
            a = !0, p = -1, b = 0;
            continue;
          }
          return n(L, String(s), d, l);
        }
      d = !1, w = t(w, l, 10, L.s), (b = w.indexOf(".")) > -1 ? w = w.replace(".", "") : b = w.length;
    }
    for (p = 0; w.charCodeAt(p) === 48; p++) ;
    for (y = w.length; w.charCodeAt(--y) === 48; ) ;
    if (w = w.slice(p, ++y)) {
      if (y -= p, d && v.DEBUG && y > 15 && (s > Bi || s !== Se(s)))
        throw Error(Ii + L.s * s);
      if ((b = b - p - 1) > S)
        L.c = L.e = null;
      else if (b < E)
        L.c = [L.e = 0];
      else {
        if (L.e = b, L.c = [], p = (b + 1) % q, b < 0 && (p += q), p < y) {
          for (p && L.c.push(+w.slice(0, p)), y -= q; p < y; )
            L.c.push(+w.slice(p, p += q));
          p = q - (w = w.slice(p)).length;
        } else
          p -= y;
        for (; p--; w += "0") ;
        L.c.push(+w);
      }
    } else
      L.c = [L.e = 0];
  }
  v.clone = sn, v.ROUND_UP = 0, v.ROUND_DOWN = 1, v.ROUND_CEIL = 2, v.ROUND_FLOOR = 3, v.ROUND_HALF_UP = 4, v.ROUND_HALF_DOWN = 5, v.ROUND_HALF_EVEN = 6, v.ROUND_HALF_CEIL = 7, v.ROUND_HALF_FLOOR = 8, v.EUCLID = 9, v.config = v.set = function(s) {
    var l, f;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(l = "DECIMAL_PLACES") && (f = s[l], re(f, 0, we, l), h = f), s.hasOwnProperty(l = "ROUNDING_MODE") && (f = s[l], re(f, 0, 8, l), o = f), s.hasOwnProperty(l = "EXPONENTIAL_AT") && (f = s[l], f && f.pop ? (re(f[0], -1e9, 0, l), re(f[1], 0, we, l), g = f[0], c = f[1]) : (re(f, -1e9, we, l), g = -(c = f < 0 ? -f : f))), s.hasOwnProperty(l = "RANGE"))
          if (f = s[l], f && f.pop)
            re(f[0], -1e9, -1, l), re(f[1], 1, we, l), E = f[0], S = f[1];
          else if (re(f, -1e9, we, l), f)
            E = -(S = f < 0 ? -f : f);
          else
            throw Error(pe + l + " cannot be zero: " + f);
        if (s.hasOwnProperty(l = "CRYPTO"))
          if (f = s[l], f === !!f)
            if (f)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                C = f;
              else
                throw C = !f, Error(pe + "crypto unavailable");
            else
              C = f;
          else
            throw Error(pe + l + " not true or false: " + f);
        if (s.hasOwnProperty(l = "MODULO_MODE") && (f = s[l], re(f, 0, 9, l), R = f), s.hasOwnProperty(l = "POW_PRECISION") && (f = s[l], re(f, 0, we, l), O = f), s.hasOwnProperty(l = "FORMAT"))
          if (f = s[l], typeof f == "object") z = f;
          else throw Error(pe + l + " not an object: " + f);
        if (s.hasOwnProperty(l = "ALPHABET"))
          if (f = s[l], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            k = f.slice(0, 10) == "0123456789", T = f;
          else
            throw Error(pe + l + " invalid: " + f);
      } else
        throw Error(pe + "Object expected: " + s);
    return {
      DECIMAL_PLACES: h,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, c],
      RANGE: [E, S],
      CRYPTO: C,
      MODULO_MODE: R,
      POW_PRECISION: O,
      FORMAT: z,
      ALPHABET: T
    };
  }, v.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!v.DEBUG) return !0;
    var l, f, m = s.c, a = s.e, b = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((b === 1 || b === -1) && a >= -1e9 && a <= we && a === Se(a)) {
        if (m[0] === 0) {
          if (a === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (a + 1) % q, l < 1 && (l += q), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (f = m[l], f < 0 || f >= Me || f !== Se(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (m === null && a === null && (b === null || b === 1 || b === -1))
      return !0;
    throw Error(pe + "Invalid BigNumber: " + s);
  }, v.maximum = v.max = function() {
    return D(arguments, -1);
  }, v.minimum = v.min = function() {
    return D(arguments, 1);
  }, v.random = function() {
    var s = 9007199254740992, l = Math.random() * s & 2097151 ? function() {
      return Se(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var m, a, b, p, d, y = 0, w = [], L = new v(u);
      if (f == null ? f = h : re(f, 0, we), p = Xt(f / q), C)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(p *= 2)); y < p; )
            d = m[y] * 131072 + (m[y + 1] >>> 11), d >= 9e15 ? (a = crypto.getRandomValues(new Uint32Array(2)), m[y] = a[0], m[y + 1] = a[1]) : (w.push(d % 1e14), y += 2);
          y = p / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(p *= 7); y < p; )
            d = (m[y] & 31) * 281474976710656 + m[y + 1] * 1099511627776 + m[y + 2] * 4294967296 + m[y + 3] * 16777216 + (m[y + 4] << 16) + (m[y + 5] << 8) + m[y + 6], d >= 9e15 ? crypto.randomBytes(7).copy(m, y) : (w.push(d % 1e14), y += 7);
          y = p / 7;
        } else
          throw C = !1, Error(pe + "crypto unavailable");
      if (!C)
        for (; y < p; )
          d = l(), d < 9e15 && (w[y++] = d % 1e14);
      for (p = w[--y], f %= q, p && f && (d = Jt[q - f], w[y] = Se(p / d) * d); w[y] === 0; w.pop(), y--) ;
      if (y < 0)
        w = [b = 0];
      else {
        for (b = -1; w[0] === 0; w.splice(0, 1), b -= q) ;
        for (y = 1, d = w[0]; d >= 10; d /= 10, y++) ;
        y < q && (b -= q - y);
      }
      return L.e = b, L.c = w, L;
    };
  }(), v.sum = function() {
    for (var s = 1, l = arguments, f = new v(l[0]); s < l.length; ) f = f.plus(l[s++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function l(f, m, a, b) {
      for (var p, d = [0], y, w = 0, L = f.length; w < L; ) {
        for (y = d.length; y--; d[y] *= m) ;
        for (d[0] += b.indexOf(f.charAt(w++)), p = 0; p < d.length; p++)
          d[p] > a - 1 && (d[p + 1] == null && (d[p + 1] = 0), d[p + 1] += d[p] / a | 0, d[p] %= a);
      }
      return d.reverse();
    }
    return function(f, m, a, b, p) {
      var d, y, w, L, M, I, W, Z, K = f.indexOf("."), te = h, j = o;
      for (K >= 0 && (L = O, O = 0, f = f.replace(".", ""), Z = new v(m), I = Z.pow(f.length - K), O = L, Z.c = l(
        We(_e(I.c), I.e, "0"),
        10,
        a,
        s
      ), Z.e = Z.c.length), W = l(f, m, a, p ? (d = T, s) : (d = s, T)), w = L = W.length; W[--L] == 0; W.pop()) ;
      if (!W[0]) return d.charAt(0);
      if (K < 0 ? --w : (I.c = W, I.e = w, I.s = b, I = e(I, Z, te, j, a), W = I.c, M = I.r, w = I.e), y = w + te + 1, K = W[y], L = a / 2, M = M || y < 0 || W[y + 1] != null, M = j < 4 ? (K != null || M) && (j == 0 || j == (I.s < 0 ? 3 : 2)) : K > L || K == L && (j == 4 || M || j == 6 && W[y - 1] & 1 || j == (I.s < 0 ? 8 : 7)), y < 1 || !W[0])
        f = M ? We(d.charAt(1), -te, d.charAt(0)) : d.charAt(0);
      else {
        if (W.length = y, M)
          for (--a; ++W[--y] > a; )
            W[y] = 0, y || (++w, W = [1].concat(W));
        for (L = W.length; !W[--L]; ) ;
        for (K = 0, f = ""; K <= L; f += d.charAt(W[K++])) ;
        f = We(f, w, d.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, a, b) {
      var p, d, y, w, L = 0, M = m.length, I = a % Ze, W = a / Ze | 0;
      for (m = m.slice(); M--; )
        y = m[M] % Ze, w = m[M] / Ze | 0, p = W * y + w * I, d = I * y + p % Ze * Ze + L, L = (d / b | 0) + (p / Ze | 0) + W * w, m[M] = d % b;
      return L && (m = [L].concat(m)), m;
    }
    function l(m, a, b, p) {
      var d, y;
      if (b != p)
        y = b > p ? 1 : -1;
      else
        for (d = y = 0; d < b; d++)
          if (m[d] != a[d]) {
            y = m[d] > a[d] ? 1 : -1;
            break;
          }
      return y;
    }
    function f(m, a, b, p) {
      for (var d = 0; b--; )
        m[b] -= d, d = m[b] < a[b] ? 1 : 0, m[b] = d * p + m[b] - a[b];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, a, b, p, d) {
      var y, w, L, M, I, W, Z, K, te, j, V, ae, Be, Je, $e, ye, Ne, de = m.s == a.s ? 1 : -1, fe = m.c, J = a.c;
      if (!fe || !fe[0] || !J || !J[0])
        return new v(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !a.s || (fe ? J && fe[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            fe && fe[0] == 0 || !J ? de * 0 : de / 0
          )
        );
      for (K = new v(de), te = K.c = [], w = m.e - a.e, de = b + w + 1, d || (d = Me, w = xe(m.e / q) - xe(a.e / q), de = de / q | 0), L = 0; J[L] == (fe[L] || 0); L++) ;
      if (J[L] > (fe[L] || 0) && w--, de < 0)
        te.push(1), M = !0;
      else {
        for (Je = fe.length, ye = J.length, L = 0, de += 2, I = Se(d / (J[0] + 1)), I > 1 && (J = s(J, I, d), fe = s(fe, I, d), ye = J.length, Je = fe.length), Be = ye, j = fe.slice(0, ye), V = j.length; V < ye; j[V++] = 0) ;
        Ne = J.slice(), Ne = [0].concat(Ne), $e = J[0], J[1] >= d / 2 && $e++;
        do {
          if (I = 0, y = l(J, j, ye, V), y < 0) {
            if (ae = j[0], ye != V && (ae = ae * d + (j[1] || 0)), I = Se(ae / $e), I > 1)
              for (I >= d && (I = d - 1), W = s(J, I, d), Z = W.length, V = j.length; l(W, j, Z, V) == 1; )
                I--, f(W, ye < Z ? Ne : J, Z, d), Z = W.length, y = 1;
            else
              I == 0 && (y = I = 1), W = J.slice(), Z = W.length;
            if (Z < V && (W = [0].concat(W)), f(j, W, V, d), V = j.length, y == -1)
              for (; l(J, j, ye, V) < 1; )
                I++, f(j, ye < V ? Ne : J, V, d), V = j.length;
          } else y === 0 && (I++, j = [0]);
          te[L++] = I, j[0] ? j[V++] = fe[Be] || 0 : (j = [fe[Be]], V = 1);
        } while ((Be++ < Je || j[0] != null) && de--);
        M = j[0] != null, te[0] || te.splice(0, 1);
      }
      if (d == Me) {
        for (L = 1, de = te[0]; de >= 10; de /= 10, L++) ;
        B(K, b + (K.e = L + w * q - 1) + 1, p, M);
      } else
        K.e = w, K.r = +M;
      return K;
    };
  }();
  function N(s, l, f, m) {
    var a, b, p, d, y;
    if (f == null ? f = o : re(f, 0, 8), !s.c) return s.toString();
    if (a = s.c[0], p = s.e, l == null)
      y = _e(s.c), y = m == 1 || m == 2 && (p <= g || p >= c) ? Mt(y, p) : We(y, p, "0");
    else if (s = B(new v(s), l, f), b = s.e, y = _e(s.c), d = y.length, m == 1 || m == 2 && (l <= b || b <= g)) {
      for (; d < l; y += "0", d++) ;
      y = Mt(y, b);
    } else if (l -= p, y = We(y, b, "0"), b + 1 > d) {
      if (--l > 0) for (y += "."; l--; y += "0") ;
    } else if (l += b - d, l > 0)
      for (b + 1 == d && (y += "."); l--; y += "0") ;
    return s.s < 0 && a ? "-" + y : y;
  }
  function D(s, l) {
    for (var f, m, a = 1, b = new v(s[0]); a < s.length; a++)
      m = new v(s[a]), (!m.s || (f = tt(b, m)) === l || f === 0 && b.s === l) && (b = m);
    return b;
  }
  function U(s, l, f) {
    for (var m = 1, a = l.length; !l[--a]; l.pop()) ;
    for (a = l[0]; a >= 10; a /= 10, m++) ;
    return (f = m + f * q - 1) > S ? s.c = s.e = null : f < E ? s.c = [s.e = 0] : (s.e = f, s.c = l), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, f = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, a = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(b, p, d, y) {
      var w, L = d ? p : p.replace(a, "");
      if (m.test(L))
        b.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!d && (L = L.replace(s, function(M, I, W) {
          return w = (W = W.toLowerCase()) == "x" ? 16 : W == "b" ? 2 : 8, !y || y == w ? I : M;
        }), y && (w = y, L = L.replace(l, "$1").replace(f, "0.$1")), p != L))
          return new v(L, w);
        if (v.DEBUG)
          throw Error(pe + "Not a" + (y ? " base " + y : "") + " number: " + p);
        b.s = null;
      }
      b.c = b.e = null;
    };
  }();
  function B(s, l, f, m) {
    var a, b, p, d, y, w, L, M = s.c, I = Jt;
    if (M) {
      e: {
        for (a = 1, d = M[0]; d >= 10; d /= 10, a++) ;
        if (b = l - a, b < 0)
          b += q, p = l, y = M[w = 0], L = Se(y / I[a - p - 1] % 10);
        else if (w = Xt((b + 1) / q), w >= M.length)
          if (m) {
            for (; M.length <= w; M.push(0)) ;
            y = L = 0, a = 1, b %= q, p = b - q + 1;
          } else
            break e;
        else {
          for (y = d = M[w], a = 1; d >= 10; d /= 10, a++) ;
          b %= q, p = b - q + a, L = p < 0 ? 0 : Se(y / I[a - p - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        M[w + 1] != null || (p < 0 ? y : y % I[a - p - 1]), m = f < 4 ? (L || m) && (f == 0 || f == (s.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (f == 4 || m || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (b > 0 ? p > 0 ? y / I[a - p] : 0 : M[w - 1]) % 10 & 1 || f == (s.s < 0 ? 8 : 7)), l < 1 || !M[0])
          return M.length = 0, m ? (l -= s.e + 1, M[0] = I[(q - l % q) % q], s.e = -l || 0) : M[0] = s.e = 0, s;
        if (b == 0 ? (M.length = w, d = 1, w--) : (M.length = w + 1, d = I[q - b], M[w] = p > 0 ? Se(y / I[a - p] % I[p]) * d : 0), m)
          for (; ; )
            if (w == 0) {
              for (b = 1, p = M[0]; p >= 10; p /= 10, b++) ;
              for (p = M[0] += d, d = 1; p >= 10; p /= 10, d++) ;
              b != d && (s.e++, M[0] == Me && (M[0] = 1));
              break;
            } else {
              if (M[w] += d, M[w] != Me) break;
              M[w--] = 0, d = 1;
            }
        for (b = M.length; M[--b] === 0; M.pop()) ;
      }
      s.e > S ? s.c = s.e = null : s.e < E && (s.c = [s.e = 0]);
    }
    return s;
  }
  function A(s) {
    var l, f = s.e;
    return f === null ? s.toString() : (l = _e(s.c), l = f <= g || f >= c ? Mt(l, f) : We(l, f, "0"), s.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new v(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, l) {
    return tt(this, new v(s, l));
  }, r.decimalPlaces = r.dp = function(s, l) {
    var f, m, a, b = this;
    if (s != null)
      return re(s, 0, we), l == null ? l = o : re(l, 0, 8), B(new v(b), s + b.e + 1, l);
    if (!(f = b.c)) return null;
    if (m = ((a = f.length - 1) - xe(this.e / q)) * q, a = f[a]) for (; a % 10 == 0; a /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, l) {
    return e(this, new v(s, l), h, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, l) {
    return e(this, new v(s, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, l) {
    var f, m, a, b, p, d, y, w, L, M = this;
    if (s = new v(s), s.c && !s.isInteger())
      throw Error(pe + "Exponent not an integer: " + A(s));
    if (l != null && (l = new v(l)), d = s.e > 14, !M.c || !M.c[0] || M.c[0] == 1 && !M.e && M.c.length == 1 || !s.c || !s.c[0])
      return L = new v(Math.pow(+A(M), d ? s.s * (2 - Tt(s)) : +A(s))), l ? L.mod(l) : L;
    if (y = s.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new v(NaN);
      m = !y && M.isInteger() && l.isInteger(), m && (M = M.mod(l));
    } else {
      if (s.e > 9 && (M.e > 0 || M.e < -1 || (M.e == 0 ? M.c[0] > 1 || d && M.c[1] >= 24e7 : M.c[0] < 8e13 || d && M.c[0] <= 9999975e7)))
        return b = M.s < 0 && Tt(s) ? -0 : 0, M.e > -1 && (b = 1 / b), new v(y ? 1 / b : b);
      O && (b = Xt(O / q + 2));
    }
    for (d ? (f = new v(0.5), y && (s.s = 1), w = Tt(s)) : (a = Math.abs(+A(s)), w = a % 2), L = new v(u); ; ) {
      if (w) {
        if (L = L.times(M), !L.c) break;
        b ? L.c.length > b && (L.c.length = b) : m && (L = L.mod(l));
      }
      if (a) {
        if (a = Se(a / 2), a === 0) break;
        w = a % 2;
      } else if (s = s.times(f), B(s, s.e + 1, 1), s.e > 14)
        w = Tt(s);
      else {
        if (a = +A(s), a === 0) break;
        w = a % 2;
      }
      M = M.times(M), b ? M.c && M.c.length > b && (M.c.length = b) : m && (M = M.mod(l));
    }
    return m ? L : (y && (L = u.div(L)), l ? L.mod(l) : b ? B(L, O, o, p) : L);
  }, r.integerValue = function(s) {
    var l = new v(this);
    return s == null ? s = o : re(s, 0, 8), B(l, l.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, l) {
    return tt(this, new v(s, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, l) {
    return tt(this, new v(s, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, l) {
    return (l = tt(this, new v(s, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && xe(this.e / q) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, l) {
    return tt(this, new v(s, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, l) {
    return (l = tt(this, new v(s, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, l) {
    var f, m, a, b, p = this, d = p.s;
    if (s = new v(s, l), l = s.s, !d || !l) return new v(NaN);
    if (d != l)
      return s.s = -l, p.plus(s);
    var y = p.e / q, w = s.e / q, L = p.c, M = s.c;
    if (!y || !w) {
      if (!L || !M) return L ? (s.s = -l, s) : new v(M ? p : NaN);
      if (!L[0] || !M[0])
        return M[0] ? (s.s = -l, s) : new v(L[0] ? p : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (y = xe(y), w = xe(w), L = L.slice(), d = y - w) {
      for ((b = d < 0) ? (d = -d, a = L) : (w = y, a = M), a.reverse(), l = d; l--; a.push(0)) ;
      a.reverse();
    } else
      for (m = (b = (d = L.length) < (l = M.length)) ? d : l, d = l = 0; l < m; l++)
        if (L[l] != M[l]) {
          b = L[l] < M[l];
          break;
        }
    if (b && (a = L, L = M, M = a, s.s = -s.s), l = (m = M.length) - (f = L.length), l > 0) for (; l--; L[f++] = 0) ;
    for (l = Me - 1; m > d; ) {
      if (L[--m] < M[m]) {
        for (f = m; f && !L[--f]; L[f] = l) ;
        --L[f], L[m] += Me;
      }
      L[m] -= M[m];
    }
    for (; L[0] == 0; L.splice(0, 1), --w) ;
    return L[0] ? U(s, L, w) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, l) {
    var f, m, a = this;
    return s = new v(s, l), !a.c || !s.s || s.c && !s.c[0] ? new v(NaN) : !s.c || a.c && !a.c[0] ? new v(a) : (R == 9 ? (m = s.s, s.s = 1, f = e(a, s, 0, 3), s.s = m, f.s *= m) : f = e(a, s, 0, R), s = a.minus(f.times(s)), !s.c[0] && R == 1 && (s.s = a.s), s);
  }, r.multipliedBy = r.times = function(s, l) {
    var f, m, a, b, p, d, y, w, L, M, I, W, Z, K, te, j = this, V = j.c, ae = (s = new v(s, l)).c;
    if (!V || !ae || !V[0] || !ae[0])
      return !j.s || !s.s || V && !V[0] && !ae || ae && !ae[0] && !V ? s.c = s.e = s.s = null : (s.s *= j.s, !V || !ae ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = xe(j.e / q) + xe(s.e / q), s.s *= j.s, y = V.length, M = ae.length, y < M && (Z = V, V = ae, ae = Z, a = y, y = M, M = a), a = y + M, Z = []; a--; Z.push(0)) ;
    for (K = Me, te = Ze, a = M; --a >= 0; ) {
      for (f = 0, I = ae[a] % te, W = ae[a] / te | 0, p = y, b = a + p; b > a; )
        w = V[--p] % te, L = V[p] / te | 0, d = W * w + L * I, w = I * w + d % te * te + Z[b] + f, f = (w / K | 0) + (d / te | 0) + W * L, Z[b--] = w % K;
      Z[b] = f;
    }
    return f ? ++m : Z.splice(0, 1), U(s, Z, m);
  }, r.negated = function() {
    var s = new v(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, l) {
    var f, m = this, a = m.s;
    if (s = new v(s, l), l = s.s, !a || !l) return new v(NaN);
    if (a != l)
      return s.s = -l, m.minus(s);
    var b = m.e / q, p = s.e / q, d = m.c, y = s.c;
    if (!b || !p) {
      if (!d || !y) return new v(a / 0);
      if (!d[0] || !y[0]) return y[0] ? s : new v(d[0] ? m : a * 0);
    }
    if (b = xe(b), p = xe(p), d = d.slice(), a = b - p) {
      for (a > 0 ? (p = b, f = y) : (a = -a, f = d), f.reverse(); a--; f.push(0)) ;
      f.reverse();
    }
    for (a = d.length, l = y.length, a - l < 0 && (f = y, y = d, d = f, l = a), a = 0; l; )
      a = (d[--l] = d[l] + y[l] + a) / Me | 0, d[l] = Me === d[l] ? 0 : d[l] % Me;
    return a && (d = [a].concat(d), ++p), U(s, d, p);
  }, r.precision = r.sd = function(s, l) {
    var f, m, a, b = this;
    if (s != null && s !== !!s)
      return re(s, 1, we), l == null ? l = o : re(l, 0, 8), B(new v(b), s, l);
    if (!(f = b.c)) return null;
    if (a = f.length - 1, m = a * q + 1, a = f[a]) {
      for (; a % 10 == 0; a /= 10, m--) ;
      for (a = f[0]; a >= 10; a /= 10, m++) ;
    }
    return s && b.e + 1 > m && (m = b.e + 1), m;
  }, r.shiftedBy = function(s) {
    return re(s, -9007199254740991, Bi), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, l, f, m, a, b = this, p = b.c, d = b.s, y = b.e, w = h + 4, L = new v("0.5");
    if (d !== 1 || !p || !p[0])
      return new v(!d || d < 0 && (!p || p[0]) ? NaN : p ? b : 1 / 0);
    if (d = Math.sqrt(+A(b)), d == 0 || d == 1 / 0 ? (l = _e(p), (l.length + y) % 2 == 0 && (l += "0"), d = Math.sqrt(+l), y = xe((y + 1) / 2) - (y < 0 || y % 2), d == 1 / 0 ? l = "5e" + y : (l = d.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + y), f = new v(l)) : f = new v(d + ""), f.c[0]) {
      for (y = f.e, d = y + w, d < 3 && (d = 0); ; )
        if (a = f, f = L.times(a.plus(e(b, a, w, 1))), _e(a.c).slice(0, d) === (l = _e(f.c)).slice(0, d))
          if (f.e < y && --d, l = l.slice(d - 3, d + 1), l == "9999" || !m && l == "4999") {
            if (!m && (B(a, a.e + h + 2, 0), a.times(a).eq(b))) {
              f = a;
              break;
            }
            w += 4, d += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (B(f, f.e + h + 2, 1), s = !f.times(f).eq(b));
            break;
          }
    }
    return B(f, f.e + h + 1, o, s);
  }, r.toExponential = function(s, l) {
    return s != null && (re(s, 0, we), s++), N(this, s, l, 1);
  }, r.toFixed = function(s, l) {
    return s != null && (re(s, 0, we), s = s + this.e + 1), N(this, s, l);
  }, r.toFormat = function(s, l, f) {
    var m, a = this;
    if (f == null)
      s != null && l && typeof l == "object" ? (f = l, l = null) : s && typeof s == "object" ? (f = s, s = l = null) : f = z;
    else if (typeof f != "object")
      throw Error(pe + "Argument not an object: " + f);
    if (m = a.toFixed(s, l), a.c) {
      var b, p = m.split("."), d = +f.groupSize, y = +f.secondaryGroupSize, w = f.groupSeparator || "", L = p[0], M = p[1], I = a.s < 0, W = I ? L.slice(1) : L, Z = W.length;
      if (y && (b = d, d = y, y = b, Z -= b), d > 0 && Z > 0) {
        for (b = Z % d || d, L = W.substr(0, b); b < Z; b += d) L += w + W.substr(b, d);
        y > 0 && (L += w + W.slice(b)), I && (L = "-" + L);
      }
      m = M ? L + (f.decimalSeparator || "") + ((y = +f.fractionGroupSize) ? M.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : M) : L;
    }
    return (f.prefix || "") + m + (f.suffix || "");
  }, r.toFraction = function(s) {
    var l, f, m, a, b, p, d, y, w, L, M, I, W = this, Z = W.c;
    if (s != null && (d = new v(s), !d.isInteger() && (d.c || d.s !== 1) || d.lt(u)))
      throw Error(pe + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + A(d));
    if (!Z) return new v(W);
    for (l = new v(u), w = f = new v(u), m = y = new v(u), I = _e(Z), b = l.e = I.length - W.e - 1, l.c[0] = Jt[(p = b % q) < 0 ? q + p : p], s = !s || d.comparedTo(l) > 0 ? b > 0 ? l : w : d, p = S, S = 1 / 0, d = new v(I), y.c[0] = 0; L = e(d, l, 0, 1), a = f.plus(L.times(m)), a.comparedTo(s) != 1; )
      f = m, m = a, w = y.plus(L.times(a = w)), y = a, l = d.minus(L.times(a = l)), d = a;
    return a = e(s.minus(f), m, 0, 1), y = y.plus(a.times(w)), f = f.plus(a.times(m)), y.s = w.s = W.s, b = b * 2, M = e(w, m, b, o).minus(W).abs().comparedTo(
      e(y, f, b, o).minus(W).abs()
    ) < 1 ? [w, m] : [y, f], S = p, M;
  }, r.toNumber = function() {
    return +A(this);
  }, r.toPrecision = function(s, l) {
    return s != null && re(s, 1, we), N(this, s, l, 2);
  }, r.toString = function(s) {
    var l, f = this, m = f.s, a = f.e;
    return a === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (s == null ? l = a <= g || a >= c ? Mt(_e(f.c), a) : We(_e(f.c), a, "0") : s === 10 && k ? (f = B(new v(f), h + a + 1, o), l = We(_e(f.c), f.e, "0")) : (re(s, 2, T.length, "Base"), l = t(We(_e(f.c), a, "0"), 10, s, m, !0)), m < 0 && f.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return A(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && v.set(i), v;
}
function xe(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function _e(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = q - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function tt(i, e) {
  var t, n, r = i.c, u = e.c, h = i.s, o = e.s, g = i.e, c = e.e;
  if (!h || !o) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -o : h;
  if (h != o) return h;
  if (t = h < 0, n = g == c, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return g > c ^ t ? 1 : -1;
  for (o = (g = r.length) < (c = u.length) ? g : c, h = 0; h < o; h++) if (r[h] != u[h]) return r[h] > u[h] ^ t ? 1 : -1;
  return g == c ? 0 : g > c ^ t ? 1 : -1;
}
function re(i, e, t, n) {
  if (i < e || i > t || i !== Se(i))
    throw Error(pe + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Tt(i) {
  var e = i.c.length - 1;
  return xe(i.e / q) == e && i.c[e] % 2 != 0;
}
function Mt(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function We(i, e, t) {
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
var Ie = sn(), Hr = class {
  constructor(i) {
    P(this, "key");
    P(this, "left", null);
    P(this, "right", null);
    this.key = i;
  }
}, gt = class extends Hr {
  constructor(i) {
    super(i);
  }
}, Vr = class {
  constructor() {
    P(this, "size", 0);
    P(this, "modificationCount", 0);
    P(this, "splayCount", 0);
  }
  splay(i) {
    const e = this.root;
    if (e == null)
      return this.compare(i, i), -1;
    let t = null, n = null, r = null, u = null, h = e;
    const o = this.compare;
    let g;
    for (; ; )
      if (g = o(h.key, i), g > 0) {
        let c = h.left;
        if (c == null || (g = o(c.key, i), g > 0 && (h.left = c.right, c.right = h, h = c, c = h.left, c == null)))
          break;
        t == null ? n = h : t.left = h, t = h, h = c;
      } else if (g < 0) {
        let c = h.right;
        if (c == null || (g = o(c.key, i), g < 0 && (h.right = c.left, c.left = h, h = c, c = h.right, c == null)))
          break;
        r == null ? u = h : r.right = h, r = h, h = c;
      } else
        break;
    return r != null && (r.right = h.left, h.left = u), t != null && (t.left = h.right, h.right = n), this.root !== h && (this.root = h, this.splayCount++), g;
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
      const u = t.right;
      t = this.splayMax(r), t.right = u, this.root = t;
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
}, Vi, Ki, Bt = class pt extends Vr {
  constructor(t, n) {
    super();
    P(this, "root", null);
    P(this, "compare");
    P(this, "validKey");
    P(this, Vi, "[object Set]");
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
    return n != 0 && this.addNewRoot(new gt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new gt(t), n), this.root.key;
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
    let u = r.right;
    for (; u != null; )
      r = u, u = r.right;
    return r.key;
  }
  firstAfter(t) {
    if (t == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(t) > 0) return this.root.key;
    let r = this.root.right;
    if (r == null) return null;
    let u = r.left;
    for (; u != null; )
      r = u, u = r.left;
    return r.key;
  }
  retainAll(t) {
    const n = new pt(this.compare, this.validKey), r = this.modificationCount;
    for (const u of t) {
      if (r != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && n.add(this.root.key);
    }
    n.size != this.size && (this.root = n.root, this.size = n.size, this.modificationCount++);
  }
  lookup(t) {
    return !this.validKey(t) || this.splay(t) != 0 ? null : this.root.key;
  }
  intersection(t) {
    const n = new pt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new pt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new pt(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, h) {
      let o, g;
      do {
        if (o = u.left, g = u.right, o != null) {
          const c = new gt(o.key);
          h.left = c, n(o, c);
        }
        if (g != null) {
          const c = new gt(g.key);
          h.right = c, u = g, h = c;
        }
      } while (g != null);
    }
    const r = new gt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new Yr(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(Ki = Symbol.iterator, Vi = Symbol.toStringTag, Ki)]() {
    return new Kr(this.wrap());
  }
}, on = class {
  constructor(i) {
    P(this, "tree");
    P(this, "path", new Array());
    P(this, "modificationCount", null);
    P(this, "splayCount");
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
}, Kr = class extends on {
  getValue(i) {
    return i.key;
  }
}, Yr = class extends on {
  getValue(i) {
    return [i.key, i.key];
  }
}, ln = (i) => () => i, ii = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : ln(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function Qr(i) {
  const e = i ? (t, n, r, u, h) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(h.minus(r).exponentiatedBy(2)).times(i)
  ) : ln(!1);
  return (t, n, r) => {
    const u = t.x, h = t.y, o = r.x, g = r.y, c = h.minus(g).times(n.x.minus(o)).minus(u.minus(o).times(n.y.minus(g)));
    return e(c, u, h, o, g) ? 0 : c.comparedTo(0);
  };
}
var Xr = (i) => i, Jr = (i) => {
  if (i) {
    const e = new Bt(ii(i)), t = new Bt(ii(i)), n = (u, h) => h.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new Ie(0), y: new Ie(0) }), r;
  }
  return Xr;
}, ni = (i) => ({
  set: (e) => {
    Ue = ni(e);
  },
  reset: () => ni(i),
  compare: ii(i),
  snap: Jr(i),
  orient: Qr(i)
}), Ue = ni(), mt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), ri = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Rt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), un = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), zt = (i) => un(i, i).sqrt(), $r = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Rt(r, n).div(zt(r)).div(zt(n));
}, es = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return un(r, n).div(zt(r)).div(zt(n));
}, zi = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, Wi = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, ts = (i, e, t, n) => {
  if (e.x.isZero()) return Wi(t, n, i.x);
  if (n.x.isZero()) return Wi(i, e, t.x);
  if (e.y.isZero()) return zi(t, n, i.y);
  if (n.y.isZero()) return zi(i, e, t.y);
  const r = Rt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, h = Rt(u, e).div(r), o = Rt(u, n).div(r), g = i.x.plus(o.times(e.x)), c = t.x.plus(h.times(n.x)), E = i.y.plus(o.times(e.y)), S = t.y.plus(h.times(n.y)), C = g.plus(c).div(2), R = E.plus(S).div(2);
  return { x: C, y: R };
}, Pe = class an {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    P(this, "point");
    P(this, "isLeft");
    P(this, "segment");
    P(this, "otherSE");
    P(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = an.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : Gt.compare(e.segment, t.segment));
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
      const u = t[n];
      this.point.events.push(u), u.point = this.point;
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
          const u = this.point.events[r];
          u.consumedBy === void 0 && n.otherSE.point.events === u.otherSE.point.events && n.segment.consume(u.segment);
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
      const u = r.otherSE;
      t.set(r, {
        sine: $r(this.point, e.point, u.point),
        cosine: es(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: h, cosine: o } = t.get(r), { sine: g, cosine: c } = t.get(u);
      return h.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? o.isLessThan(c) ? 1 : o.isGreaterThan(c) ? -1 : 0 : h.isLessThan(0) && g.isLessThan(0) ? o.isLessThan(c) ? -1 : o.isGreaterThan(c) ? 1 : 0 : g.isLessThan(h) ? -1 : g.isGreaterThan(h) ? 1 : 0;
    };
  }
}, is = class si {
  constructor(e) {
    P(this, "events");
    P(this, "poly");
    P(this, "_isExteriorRing");
    P(this, "_enclosingRing");
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
      const u = e[n];
      if (!u.isInResult() || u.ringOut) continue;
      let h = null, o = u.leftSE, g = u.rightSE;
      const c = [o], E = o.point, S = [];
      for (; h = o, o = g, c.push(o), o.point !== E; )
        for (; ; ) {
          const C = o.getAvailableLinkedEvents();
          if (C.length === 0) {
            const z = c[0].point, T = c[c.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${z.x}, ${z.y}]. Last matching segment found ends at [${T.x}, ${T.y}].`
            );
          }
          if (C.length === 1) {
            g = C[0].otherSE;
            break;
          }
          let R = null;
          for (let z = 0, T = S.length; z < T; z++)
            if (S[z].point === o.point) {
              R = z;
              break;
            }
          if (R !== null) {
            const z = S.splice(R)[0], T = c.splice(z.index);
            T.unshift(T[0].otherSE), t.push(new si(T.reverse()));
            continue;
          }
          S.push({
            index: c.length,
            point: o.point
          });
          const O = o.getLeftmostComparator(h);
          g = C.sort(O)[0].otherSE;
          break;
        }
      t.push(new si(c));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let c = 1, E = this.events.length - 1; c < E; c++) {
      const S = this.events[c].point, C = this.events[c + 1].point;
      Ue.orient(S, e, C) !== 0 && (t.push(S), e = S);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    Ue.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, h = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, g = [];
    for (let c = h; c != o; c += u)
      g.push([t[c].x.toNumber(), t[c].y.toNumber()]);
    return g;
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
    var r, u;
    let e = this.events[0];
    for (let h = 1, o = this.events.length; h < o; h++) {
      const g = this.events[h];
      Pe.compare(e, g) > 0 && (e = g);
    }
    let t = e.segment.prevInResult(), n = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!n) return t.ringOut;
      if (n.ringOut !== t.ringOut)
        return ((r = n.ringOut) == null ? void 0 : r.enclosingRing()) !== t.ringOut ? t.ringOut : (u = t.ringOut) == null ? void 0 : u.enclosingRing();
      t = n.prevInResult(), n = t ? t.prevInResult() : null;
    }
  }
}, Gi = class {
  constructor(i) {
    P(this, "exteriorRing");
    P(this, "interiorRings");
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
}, ns = class {
  constructor(i) {
    P(this, "rings");
    P(this, "polys");
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
      const u = i[n];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new Gi(u));
        else {
          const h = u.enclosingRing();
          h != null && h.poly || e.push(new Gi(h)), (t = h == null ? void 0 : h.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, rs = class {
  constructor(i, e = Gt.compare) {
    P(this, "queue");
    P(this, "tree");
    P(this, "segments");
    this.queue = i, this.tree = new Bt(e), this.segments = [];
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
      let u = null;
      if (n) {
        const o = n.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (u = o), !n.isAnEndpoint(o))) {
          const g = this._splitSafely(n, o);
          for (let c = 0, E = g.length; c < E; c++)
            t.push(g[c]);
        }
      }
      let h = null;
      if (r) {
        const o = r.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (h = o), !r.isAnEndpoint(o))) {
          const g = this._splitSafely(r, o);
          for (let c = 0, E = g.length; c < E; c++)
            t.push(g[c]);
        }
      }
      if (u !== null || h !== null) {
        let o = null;
        u === null ? o = h : h === null ? o = u : o = Pe.comparePoints(
          u,
          h
        ) <= 0 ? u : h, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const g = e.split(o);
        for (let c = 0, E = g.length; c < E; c++)
          t.push(g[c]);
      }
      t.length > 0 ? (this.tree.delete(e), t.push(i)) : (this.segments.push(e), e.prev = n);
    } else {
      if (n && r) {
        const u = n.getIntersection(r);
        if (u !== null) {
          if (!n.isAnEndpoint(u)) {
            const h = this._splitSafely(n, u);
            for (let o = 0, g = h.length; o < g; o++)
              t.push(h[o]);
          }
          if (!r.isAnEndpoint(u)) {
            const h = this._splitSafely(r, u);
            for (let o = 0, g = h.length; o < g; o++)
              t.push(h[o]);
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
}, ss = class {
  constructor() {
    P(this, "type");
    P(this, "numMultiPolys");
  }
  run(i, e, t) {
    yt.type = i;
    const n = [new Ui(e, !0)];
    for (let c = 0, E = t.length; c < E; c++)
      n.push(new Ui(t[c], !1));
    if (yt.numMultiPolys = n.length, yt.type === "difference") {
      const c = n[0];
      let E = 1;
      for (; E < n.length; )
        ri(n[E].bbox, c.bbox) !== null ? E++ : n.splice(E, 1);
    }
    if (yt.type === "intersection")
      for (let c = 0, E = n.length; c < E; c++) {
        const S = n[c];
        for (let C = c + 1, R = n.length; C < R; C++)
          if (ri(S.bbox, n[C].bbox) === null) return [];
      }
    const r = new Bt(Pe.compare);
    for (let c = 0, E = n.length; c < E; c++) {
      const S = n[c].getSweepEvents();
      for (let C = 0, R = S.length; C < R; C++)
        r.add(S[C]);
    }
    const u = new rs(r);
    let h = null;
    for (r.size != 0 && (h = r.first(), r.delete(h)); h; ) {
      const c = u.process(h);
      for (let E = 0, S = c.length; E < S; E++) {
        const C = c[E];
        C.consumedBy === void 0 && r.add(C);
      }
      r.size != 0 ? (h = r.first(), r.delete(h)) : h = null;
    }
    Ue.reset();
    const o = is.factory(u.segments);
    return new ns(o).getGeom();
  }
}, yt = new ss(), Wt = yt, os = 0, Gt = class Pt {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    P(this, "id");
    P(this, "leftSE");
    P(this, "rightSE");
    P(this, "rings");
    P(this, "windings");
    P(this, "ringOut");
    P(this, "consumedBy");
    P(this, "prev");
    P(this, "_prevInResult");
    P(this, "_beforeState");
    P(this, "_afterState");
    P(this, "_isInResult");
    this.id = ++os, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
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
    const n = e.leftSE.point.x, r = t.leftSE.point.x, u = e.rightSE.point.x, h = t.rightSE.point.x;
    if (h.isLessThan(n)) return 1;
    if (u.isLessThan(r)) return -1;
    const o = e.leftSE.point.y, g = t.leftSE.point.y, c = e.rightSE.point.y, E = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (g.isLessThan(o) && g.isLessThan(c)) return 1;
      if (g.isGreaterThan(o) && g.isGreaterThan(c)) return -1;
      const S = e.comparePoint(t.leftSE.point);
      if (S < 0) return 1;
      if (S > 0) return -1;
      const C = t.comparePoint(e.rightSE.point);
      return C !== 0 ? C : -1;
    }
    if (n.isGreaterThan(r)) {
      if (o.isLessThan(g) && o.isLessThan(E)) return -1;
      if (o.isGreaterThan(g) && o.isGreaterThan(E)) return 1;
      const S = t.comparePoint(e.leftSE.point);
      if (S !== 0) return S;
      const C = e.comparePoint(t.rightSE.point);
      return C < 0 ? 1 : C > 0 ? -1 : 1;
    }
    if (o.isLessThan(g)) return -1;
    if (o.isGreaterThan(g)) return 1;
    if (u.isLessThan(h)) {
      const S = t.comparePoint(e.rightSE.point);
      if (S !== 0) return S;
    }
    if (u.isGreaterThan(h)) {
      const S = e.comparePoint(t.rightSE.point);
      if (S < 0) return 1;
      if (S > 0) return -1;
    }
    if (!u.eq(h)) {
      const S = c.minus(o), C = u.minus(n), R = E.minus(g), O = h.minus(r);
      if (S.isGreaterThan(C) && R.isLessThan(O)) return 1;
      if (S.isLessThan(C) && R.isGreaterThan(O)) return -1;
    }
    return u.isGreaterThan(h) ? 1 : u.isLessThan(h) || c.isLessThan(E) ? -1 : c.isGreaterThan(E) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, u, h;
    const o = Pe.comparePoints(e, t);
    if (o < 0)
      r = e, u = t, h = 1;
    else if (o > 0)
      r = t, u = e, h = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const g = new Pe(r, !0), c = new Pe(u, !1);
    return new Pt(g, c, [n], [h]);
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
    return Ue.orient(this.leftSE.point, e, this.rightSE.point);
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
    const t = this.bbox(), n = e.bbox(), r = ri(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, h = this.rightSE.point, o = e.leftSE.point, g = e.rightSE.point, c = mt(t, o) && this.comparePoint(o) === 0, E = mt(n, u) && e.comparePoint(u) === 0, S = mt(t, g) && this.comparePoint(g) === 0, C = mt(n, h) && e.comparePoint(h) === 0;
    if (E && c)
      return C && !S ? h : !C && S ? g : null;
    if (E)
      return S && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (c)
      return C && h.x.eq(o.x) && h.y.eq(o.y) ? null : o;
    if (C && S) return null;
    if (C) return h;
    if (S) return g;
    const R = ts(u, this.vector(), o, e.vector());
    return R === null || !mt(r, R) ? null : Ue.snap(R);
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
    const t = [], n = e.events !== void 0, r = new Pe(e, !0), u = new Pe(e, !1), h = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const o = new Pt(
      r,
      h,
      this.rings.slice(),
      this.windings.slice()
    );
    return Pe.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Pe.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
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
    const r = Pt.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const u = t;
        t = n, n = u;
      }
      if (t.prev === n) {
        const u = t;
        t = n, n = u;
      }
      for (let u = 0, h = n.rings.length; u < h; u++) {
        const o = n.rings[u], g = n.windings[u], c = t.rings.indexOf(o);
        c === -1 ? (t.rings.push(o), t.windings.push(g)) : t.windings[c] += g;
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
    for (let o = 0, g = this.rings.length; o < g; o++) {
      const c = this.rings[o], E = this.windings[o], S = t.indexOf(c);
      S === -1 ? (t.push(c), n.push(E)) : n[S] += E;
    }
    const u = [], h = [];
    for (let o = 0, g = t.length; o < g; o++) {
      if (n[o] === 0) continue;
      const c = t[o], E = c.poly;
      if (h.indexOf(E) === -1)
        if (c.isExterior) u.push(E);
        else {
          h.indexOf(E) === -1 && h.push(E);
          const S = u.indexOf(c.poly);
          S !== -1 && u.splice(S, 1);
        }
    }
    for (let o = 0, g = u.length; o < g; o++) {
      const c = u[o].multiPoly;
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
}, Di = class {
  constructor(i, e, t) {
    P(this, "poly");
    P(this, "isExterior");
    P(this, "segments");
    P(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = Ue.snap({ x: new Ie(i[0][0]), y: new Ie(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, h = i.length; u < h; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const o = Ue.snap({ x: new Ie(i[u][0]), y: new Ie(i[u][1]) });
      o.x.eq(r.x) && o.y.eq(r.y) || (this.segments.push(Gt.fromRing(r, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), r = o);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(Gt.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const n = this.segments[e];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, ls = class {
  constructor(i, e) {
    P(this, "multiPoly");
    P(this, "exteriorRing");
    P(this, "interiorRings");
    P(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Di(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new Di(i[t], this, !1);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.interiorRings.push(r);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const i = this.exteriorRing.getSweepEvents();
    for (let e = 0, t = this.interiorRings.length; e < t; e++) {
      const n = this.interiorRings[e].getSweepEvents();
      for (let r = 0, u = n.length; r < u; r++)
        i.push(n[r]);
    }
    return i;
  }
}, Ui = class {
  constructor(i, e) {
    P(this, "isSubject");
    P(this, "polys");
    P(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof i[0][0][0] == "number" && (i = [i]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new Ie(Number.POSITIVE_INFINITY), y: new Ie(Number.POSITIVE_INFINITY) },
      ur: { x: new Ie(Number.NEGATIVE_INFINITY), y: new Ie(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new ls(i[t], this);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.polys.push(r);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const n = this.polys[e].getSweepEvents();
      for (let r = 0, u = n.length; r < u; r++)
        i.push(n[r]);
    }
    return i;
  }
}, us = (i, ...e) => Wt.run("union", i, e), as = (i, ...e) => Wt.run("difference", i, e);
Ue.set;
function fn(i, e, t) {
  if (i !== null)
    for (var n, r, u, h, o, g, c, E = 0, S = 0, C, R = i.type, O = R === "FeatureCollection", z = R === "Feature", T = O ? i.features.length : 1, k = 0; k < T; k++) {
      c = O ? i.features[k].geometry : z ? i.geometry : i, C = c ? c.type === "GeometryCollection" : !1, o = C ? c.geometries.length : 1;
      for (var v = 0; v < o; v++) {
        var N = 0, D = 0;
        if (h = C ? c.geometries[v] : c, h !== null) {
          g = h.coordinates;
          var U = h.type;
          switch (E = 0, U) {
            case null:
              break;
            case "Point":
              if (e(
                g,
                S,
                k,
                N,
                D
              ) === !1)
                return !1;
              S++, N++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < g.length; n++) {
                if (e(
                  g[n],
                  S,
                  k,
                  N,
                  D
                ) === !1)
                  return !1;
                S++, U === "MultiPoint" && N++;
              }
              U === "LineString" && N++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < g.length; n++) {
                for (r = 0; r < g[n].length - E; r++) {
                  if (e(
                    g[n][r],
                    S,
                    k,
                    N,
                    D
                  ) === !1)
                    return !1;
                  S++;
                }
                U === "MultiLineString" && N++, U === "Polygon" && D++;
              }
              U === "Polygon" && N++;
              break;
            case "MultiPolygon":
              for (n = 0; n < g.length; n++) {
                for (D = 0, r = 0; r < g[n].length; r++) {
                  for (u = 0; u < g[n][r].length - E; u++) {
                    if (e(
                      g[n][r][u],
                      S,
                      k,
                      N,
                      D
                    ) === !1)
                      return !1;
                    S++;
                  }
                  D++;
                }
                N++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < h.geometries.length; n++)
                if (fn(h.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function ui(i, e) {
  var t, n, r, u, h, o, g, c, E, S, C = 0, R = i.type === "FeatureCollection", O = i.type === "Feature", z = R ? i.features.length : 1;
  for (t = 0; t < z; t++) {
    for (o = R ? i.features[t].geometry : O ? i.geometry : i, c = R ? i.features[t].properties : O ? i.properties : {}, E = R ? i.features[t].bbox : O ? i.bbox : void 0, S = R ? i.features[t].id : O ? i.id : void 0, g = o ? o.type === "GeometryCollection" : !1, h = g ? o.geometries.length : 1, r = 0; r < h; r++) {
      if (u = g ? o.geometries[r] : o, u === null) {
        if (e(
          null,
          C,
          c,
          E,
          S
        ) === !1)
          return !1;
        continue;
      }
      switch (u.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            u,
            C,
            c,
            E,
            S
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < u.geometries.length; n++)
            if (e(
              u.geometries[n],
              C,
              c,
              E,
              S
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
function fs(i, e) {
  ui(i, function(t, n, r, u, h) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Et(t, r, { bbox: u, id: h }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var g;
    switch (o) {
      case "MultiPoint":
        g = "Point";
        break;
      case "MultiLineString":
        g = "LineString";
        break;
      case "MultiPolygon":
        g = "Polygon";
        break;
    }
    for (var c = 0; c < t.coordinates.length; c++) {
      var E = t.coordinates[c], S = {
        type: g,
        coordinates: E
      };
      if (e(Et(S, r), n, c) === !1)
        return !1;
    }
  });
}
function cs(i, e = {}) {
  const t = [];
  if (ui(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = us(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? li(n[0], e.properties) : rn(n, e.properties);
}
var cn = cs;
function hs(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return fn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var qi = hs;
function ds(i) {
  const e = [];
  if (ui(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = as(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? li(n[0], t) : rn(n, t);
}
var gs = ds;
function ms(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return fs(i, function(t) {
    e.push(t);
  }), Lt(e);
}
var ps = ms;
function Fi(i, e) {
  const t = gs(
    Lt([
      li([
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
  const n = It(qi(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, h = n[2] > 180, o = ps(i);
  if (o.features.length > 1 && (u || h))
    for (const g of o.features) {
      const c = It(qi(g));
      if (h && c[0] < -180 + r)
        for (const E of g.geometry.coordinates)
          for (const S of E)
            S[0] += 360 - r;
      if (u && c[2] > 180 - r)
        for (const E of g.geometry.coordinates)
          for (const S of E)
            S[0] -= 360 - r;
    }
  e(
    Lt([
      o.features.length < 2 ? i : cn(o) ?? i,
      t
    ])
  );
}
const ji = {
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
}, Ct = "mtlr-gc-full-geom", Zi = "mtlr-gc-full-geom-fill", Hi = "mtlr-gc-full-geom-line";
function ys(i, e, t = !0, n = !0, r = {}, u = {}, h = ji) {
  let o;
  const g = [];
  let c, E, S;
  function C() {
    if (!i.loaded) {
      i.once("load", C);
      return;
    }
    const T = h ? h === !0 ? ji : h : void 0;
    if (!(T != null && T.fill) && !(T != null && T.line))
      return;
    const k = i.getSource(Ct);
    if (k)
      k.setData(S ?? Lt([]));
    else if (S)
      i.addSource(Ct, {
        type: "geojson",
        data: S
      });
    else
      return;
    !i.getLayer(Zi) && (T != null && T.fill) && i.addLayer({
      ...T == null ? void 0 : T.fill,
      id: Zi,
      type: "fill",
      source: Ct
    }), !i.getLayer(Hi) && (T != null && T.line) && i.addLayer({
      ...T == null ? void 0 : T.line,
      id: Hi,
      type: "line",
      source: Ct
    });
  }
  function R(T) {
    S = T, C();
  }
  i.on("styledata", () => {
    setTimeout(() => {
      S && C();
    });
  });
  const O = (T) => {
    o == null || o({
      type: "mapClick",
      coordinates: [T.lngLat.lng, T.lngLat.lat]
    });
  };
  function z(T = !1) {
    if (!e)
      throw new Error();
    const k = document.createElement("div");
    return T && k.classList.add("marker-interactive"), new wr({
      props: { displayIn: "maplibre" },
      target: k
    }), new e.Marker({ element: k, offset: [1, -13] });
  }
  return {
    setEventHandler(T) {
      T ? (o = T, i.on("click", O)) : (o = void 0, i.off("click", O));
    },
    flyTo(T, k) {
      i.flyTo({ center: T, ...k ? { zoom: k } : {}, ...r });
    },
    fitBounds(T, k, v) {
      i.fitBounds(
        [
          [T[0], T[1]],
          [T[2], T[3]]
        ],
        { padding: k, ...v ? { maxZoom: v } : {}, ...u }
      );
    },
    indicateReverse(T) {
      i.getCanvasContainer().style.cursor = T ? "crosshair" : "";
    },
    setReverseMarker(T) {
      !e || !t || (E ? T ? E.setLngLat(T) : (E.remove(), E = void 0) : T && (t instanceof Function ? E = t(i) ?? void 0 : (E = (typeof t == "object" ? new e.Marker(t) : z()).setLngLat(T).addTo(i), E.getElement().classList.add("marker-reverse"))));
    },
    setFeatures(T, k, v) {
      for (const N of g)
        N.remove();
      if (g.length = 0, R(void 0), !!e) {
        e: if (k) {
          let N = !1;
          if (k.geometry.type === "GeometryCollection") {
            const D = k.geometry.geometries.filter(
              (U) => U.type === "Polygon" || U.type === "MultiPolygon"
            );
            t: if (D.length > 0) {
              const U = cn(
                Lt(D.map((B) => Et(B)))
              );
              if (!U)
                break t;
              Fi(
                {
                  ...k,
                  geometry: U.geometry
                },
                R
              ), N = !0;
            } else {
              const U = k.geometry.geometries.filter(
                (B) => B.type === "LineString" || B.type === "MultiLineString"
              );
              U.length > 0 && (R({
                ...k,
                geometry: { type: "GeometryCollection", geometries: U }
              }), N = !0);
            }
          }
          if (!N) {
            if (k.geometry.type === "Polygon" || k.geometry.type === "MultiPolygon")
              Fi(k, R);
            else if (k.geometry.type === "LineString" || k.geometry.type === "MultiLineString") {
              R(k);
              break e;
            }
          }
          if (!v && k.geometry.type !== "Point")
            break e;
          if (t instanceof Function) {
            const D = t(i, k);
            D && g.push(D);
          } else t && g.push(
            typeof t == "object" ? new e.Marker(t) : z().setLngLat(k.center).addTo(i)
          );
        }
        if (n)
          for (const N of T ?? []) {
            if (N === k)
              continue;
            let D;
            if (n instanceof Function) {
              if (D = n(i, N), !D)
                continue;
            } else
              D = (typeof n == "object" ? new e.Marker(n) : z(!0)).setLngLat(N.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")
                )
              ).addTo(i);
            const U = D.getElement();
            U.addEventListener("click", (B) => {
              B.stopPropagation(), o == null || o({ type: "markerClick", id: N.id });
            }), U.addEventListener("mouseenter", () => {
              o == null || o({ type: "markerMouseEnter", id: N.id }), D.togglePopup();
            }), U.addEventListener("mouseleave", () => {
              o == null || o({ type: "markerMouseLeave", id: N.id }), D.togglePopup();
            }), g.push(D);
          }
      }
    },
    setSelectedMarker(T) {
      c && c.getElement().classList.toggle("marker-selected", !1), c = T > -1 ? g[T] : void 0, c == null || c.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const T = i.getCenter();
      return [i.getZoom(), T.lng, T.lat];
    }
  };
}
function vs(i, e, t) {
  var O, z;
  class n {
    constructor(k, v) {
      P(this, "type");
      P(this, "target");
      this.type = v, this.target = k;
    }
  }
  class r extends n {
    constructor(v, N) {
      super(v, "select");
      P(this, "feature");
      Object.assign(this, N);
    }
  }
  class u extends n {
    constructor(v, N) {
      super(v, "featureslisted");
      P(this, "features");
      this.features = N;
    }
  }
  class h extends n {
    constructor(v, N) {
      super(v, "featuresmarked");
      P(this, "features");
      this.features = N;
    }
  }
  class o extends n {
    constructor(v, N) {
      super(v, "optionsvisibilitychange");
      P(this, "optionsVisible");
      this.optionsVisible = N;
    }
  }
  class g extends n {
    constructor(v, N) {
      super(v, "pick");
      P(this, "feature");
      this.feature = N;
    }
  }
  class c extends n {
    constructor(v, N) {
      super(v, "querychange");
      P(this, "query");
      this.query = N;
    }
  }
  class E extends n {
    constructor(v, N, D) {
      super(v, "response");
      P(this, "url");
      P(this, "featureCollection");
      this.url = N, this.featureCollection = D;
    }
  }
  class S extends n {
    constructor(v, N) {
      super(v, "reversetoggle");
      P(this, "reverse");
      this.reverse = N;
    }
  }
  class C extends i {
    constructor(v = {}) {
      super();
      Kt(this, O);
      Kt(this, z);
      Yt(this, z, v);
    }
    onAddInt(v) {
      const N = document.createElement("div");
      N.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
      const {
        marker: D,
        showResultMarkers: U,
        flyTo: B,
        fullGeometryStyle: A,
        ...s
      } = ue(this, z), l = typeof B == "boolean" ? {} : B, m = {
        mapController: ys(
          v,
          e,
          D,
          U,
          l,
          l,
          A
        ),
        flyTo: B === void 0 ? !0 : !!B,
        apiKey: "",
        // just to satisfy apiKey; TODO find a better solution
        ...t == null ? void 0 : t(v, N),
        ...s
      };
      if (!m.apiKey)
        throw new Error("no apiKey provided");
      return Yt(this, O, new jr({ target: N, props: m })), ue(this, O).$on("select", (a) => {
        this.fire(new r(this, a.detail));
      }), ue(this, O).$on("pick", (a) => {
        this.fire(new g(this, a.detail.feature));
      }), ue(this, O).$on("featureslisted", (a) => {
        this.fire(new u(this, a.detail.features));
      }), ue(this, O).$on("featuresmarked", (a) => {
        this.fire(new h(this, a.detail.features));
      }), ue(this, O).$on("response", (a) => {
        this.fire(
          new E(
            this,
            a.detail.url,
            a.detail.featureCollection
          )
        );
      }), ue(this, O).$on("optionsvisibilitychange", (a) => {
        this.fire(
          new o(this, a.detail.optionsVisible)
        );
      }), ue(this, O).$on("reversetoggle", (a) => {
        this.fire(new S(this, a.detail.reverse));
      }), ue(this, O).$on("querychange", (a) => {
        this.fire(new c(this, a.detail.query));
      }), N;
    }
    on(v, N) {
      return super.on(v, N);
    }
    once(v, N) {
      return super.once(v, N);
    }
    off(v, N) {
      return super.off(v, N);
    }
    listens(v) {
      return super.listens(v);
    }
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(v) {
      var s;
      Object.assign(ue(this, z), v);
      const {
        marker: N,
        showResultMarkers: D,
        flyTo: U,
        fullGeometryStyle: B,
        ...A
      } = ue(this, z);
      (s = ue(this, O)) == null || s.$set(A);
    }
    /**
     * Set the content of search input box.
     *
     * @param value text to set
     * @param submit perform the search
     */
    setQuery(v, N = !0) {
      var D;
      (D = ue(this, O)) == null || D.setQuery(v, N);
    }
    /**
     * Clear geocoding search results from the map.
     */
    clearMap() {
      var v;
      (v = ue(this, O)) == null || v.clearMap();
    }
    /**
     * Clear search result list.
     */
    clearList() {
      var v;
      (v = ue(this, O)) == null || v.clearList();
    }
    /**
     * Set reverse geocoding mode.
     *
     * @param reverseActive reverse geocoding active
     */
    setReverseMode(v) {
      var N;
      (N = ue(this, O)) == null || N.$set({ reverseActive: v });
    }
    /**
     * Focus the search input box.
     *
     * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
     */
    focus(v) {
      var N;
      (N = ue(this, O)) == null || N.focus(v);
    }
    /**
     * Blur the search input box.
     */
    blur() {
      var v;
      (v = ue(this, O)) == null || v.blur();
    }
    onRemove() {
      var v;
      (v = ue(this, O)) == null || v.$destroy();
    }
  }
  return O = new WeakMap(), z = new WeakMap(), {
    MapLibreBasedGeocodingControl: C,
    events: {
      SelectEvent: r,
      FeaturesListedEvent: u,
      FeaturesMarkedEvent: h,
      OptionsVisibilityChangeEvent: o,
      PickEvent: g,
      QueryChangeEvent: c,
      ResponseEvent: E,
      ReverseToggleEvent: S
    }
  };
}
const { MapLibreBasedGeocodingControl: bs, events: Xe } = vs(
  vi.Evented,
  vi
);
class Ls extends bs {
  onAdd(e) {
    return super.onAddInt(e);
  }
}
const _s = Xe.SelectEvent, Ss = Xe.FeaturesListedEvent, xs = Xe.FeaturesMarkedEvent, Ts = Xe.OptionsVisibilityChangeEvent, Ms = Xe.PickEvent, Cs = Xe.QueryChangeEvent, Ns = Xe.ResponseEvent, ks = Xe.ReverseToggleEvent;
export {
  Ss as FeaturesListedEvent,
  xs as FeaturesMarkedEvent,
  Ls as GeocodingControl,
  Ts as OptionsVisibilityChangeEvent,
  Ms as PickEvent,
  Cs as QueryChangeEvent,
  Ns as ResponseEvent,
  ks as ReverseToggleEvent,
  _s as SelectEvent,
  ys as createMapLibreGlMapController
};
//# sourceMappingURL=maplibregl.js.map
