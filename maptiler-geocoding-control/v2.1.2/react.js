var Ni = Object.defineProperty;
var ki = (i, e, t) => e in i ? Ni(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var dt = (i, e, t) => ki(i, typeof e != "symbol" ? e + "" : e, t);
import { forwardRef as Mi, useRef as Ct, useEffect as ft, useImperativeHandle as Ci, createElement as Wi } from "react";
function P() {
}
function zi(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function Yt(i) {
  return i();
}
function Wt() {
  return /* @__PURE__ */ Object.create(null);
}
function de(i) {
  i.forEach(Yt);
}
function Xt(i) {
  return typeof i == "function";
}
function _e(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ke;
function X(i, e) {
  return i === e ? !0 : (Ke || (Ke = document.createElement("a")), Ke.href = e, i === Ke.href);
}
function Oi(i) {
  return Object.keys(i).length === 0;
}
function Ri(i, e, t, n) {
  if (i) {
    const r = Jt(i, e, t, n);
    return i[0](r);
  }
}
function Jt(i, e, t, n) {
  return i[1] && n ? zi(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Ui(i, e, t, n) {
  return i[2], e.dirty;
}
function Di(i, e, t, n, r, u) {
  if (r) {
    const l = Jt(e, t, n, u);
    i.p(l, r);
  }
}
function Ii(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Je(i) {
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
function U(i) {
  return document.createElement(i);
}
function le(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ge(i) {
  return document.createTextNode(i);
}
function $() {
  return ge(" ");
}
function Ai() {
  return ge("");
}
function q(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function Pi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Bi(i) {
  return Array.from(i.childNodes);
}
function Ie(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function zt(i, e) {
  i.value = e ?? "";
}
function ke(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Fi(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Ae;
function De(i) {
  Ae = i;
}
function xt() {
  if (!Ae) throw new Error("Function called outside component initialization");
  return Ae;
}
function Gi(i) {
  xt().$$.on_destroy.push(i);
}
function $t() {
  const i = xt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = Fi(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((l) => {
        l.call(i, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function ji(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Ne = [], gt = [];
let Me = [];
const Ot = [], Hi = /* @__PURE__ */ Promise.resolve();
let ht = !1;
function Zi() {
  ht || (ht = !0, Hi.then(ei));
}
function bt(i) {
  Me.push(i);
}
const mt = /* @__PURE__ */ new Set();
let Te = 0;
function ei() {
  if (Te !== 0)
    return;
  const i = Ae;
  do {
    try {
      for (; Te < Ne.length; ) {
        const e = Ne[Te];
        Te++, De(e), qi(e.$$);
      }
    } catch (e) {
      throw Ne.length = 0, Te = 0, e;
    }
    for (De(null), Ne.length = 0, Te = 0; gt.length; ) gt.pop()();
    for (let e = 0; e < Me.length; e += 1) {
      const t = Me[e];
      mt.has(t) || (mt.add(t), t());
    }
    Me.length = 0;
  } while (Ne.length);
  for (; Ot.length; )
    Ot.pop()();
  ht = !1, mt.clear(), De(i);
}
function qi(i) {
  if (i.fragment !== null) {
    i.update(), de(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(bt);
  }
}
function Qi(i) {
  const e = [], t = [];
  Me.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), Me = e;
}
const Ve = /* @__PURE__ */ new Set();
let Le;
function Ye() {
  Le = {
    r: 0,
    c: [],
    p: Le
    // parent group
  };
}
function Xe() {
  Le.r || de(Le.c), Le = Le.p;
}
function j(i, e) {
  i && i.i && (Ve.delete(i), i.i(e));
}
function Q(i, e, t, n) {
  if (i && i.o) {
    if (Ve.has(i)) return;
    Ve.add(i), Le.c.push(() => {
      Ve.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Rt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Ki(i, e) {
  Q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Vi(i, e, t, n, r, u, l, o, d, c, f, g) {
  let b = i.length, _ = u.length, w = b;
  const D = {};
  for (; w--; ) D[i[w].key] = w;
  const E = [], S = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), W = [];
  for (w = _; w--; ) {
    const v = g(r, u, w), y = t(v);
    let N = l.get(y);
    N ? W.push(() => N.p(v, e)) : (N = c(y, v), N.c()), S.set(y, E[w] = N), y in D && z.set(y, Math.abs(w - D[y]));
  }
  const Z = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
  function C(v) {
    j(v, 1), v.m(o, f), l.set(v.key, v), f = v.first, _--;
  }
  for (; b && _; ) {
    const v = E[_ - 1], y = i[b - 1], N = v.key, k = y.key;
    v === y ? (f = v.first, b--, _--) : S.has(k) ? !l.has(N) || Z.has(N) ? C(v) : V.has(k) ? b-- : z.get(N) > z.get(k) ? (V.add(N), C(v)) : (Z.add(k), b--) : (d(y, l), b--);
  }
  for (; b--; ) {
    const v = i[b];
    S.has(v.key) || d(v, l);
  }
  for (; _; ) C(E[_ - 1]);
  return de(W), E;
}
function he(i) {
  i && i.c();
}
function ue(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), bt(() => {
    const u = i.$$.on_mount.map(Yt).filter(Xt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : de(u), i.$$.on_mount = [];
  }), r.forEach(bt);
}
function ce(i, e) {
  const t = i.$$;
  t.fragment !== null && (Qi(t.after_update), de(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Yi(i, e) {
  i.$$.dirty[0] === -1 && (Ne.push(i), Zi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ye(i, e, t, n, r, u, l = null, o = [-1]) {
  const d = Ae;
  De(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: P,
    not_equal: r,
    bound: Wt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Wt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  l && l(c.root);
  let f = !1;
  if (c.ctx = t ? t(i, e.props || {}, (g, b, ..._) => {
    const w = _.length ? _[0] : b;
    return c.ctx && r(c.ctx[g], c.ctx[g] = w) && (!c.skip_bound && c.bound[g] && c.bound[g](w), f && Yi(i, g)), b;
  }) : [], c.update(), f = !0, de(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = Bi(e.target);
      c.fragment && c.fragment.l(g), g.forEach(I);
    } else
      c.fragment && c.fragment.c();
    e.intro && j(i.$$.fragment), ue(i, e.target, e.anchor), ei();
  }
  De(d);
}
class we {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    dt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    dt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ce(this, 1), this.$destroy = P;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Xt(t))
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
    this.$$set && !Oi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Xi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Xi);
function Ji(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
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
class ti extends we {
  constructor(e) {
    super(), ye(this, e, null, Ji, _e, {});
  }
}
function xi(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
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
class ii extends we {
  constructor(e) {
    super(), ye(this, e, null, xi, _e, {});
  }
}
function $i(i) {
  let e, t;
  return {
    c() {
      e = U("img"), X(e.src, t = /*iconsBaseUrl*/
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
function en(i) {
  let e, t;
  return {
    c() {
      e = U("img"), X(e.src, t = /*iconsBaseUrl*/
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
function tn(i) {
  let e, t;
  return {
    c() {
      e = U("img"), X(e.src, t = /*iconsBaseUrl*/
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
function nn(i) {
  let e, t;
  return {
    c() {
      e = U("img"), X(e.src, t = /*iconsBaseUrl*/
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
function rn(i) {
  let e, t;
  return {
    c() {
      e = U("img"), X(e.src, t = /*iconsBaseUrl*/
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
function on(i) {
  let e, t;
  return {
    c() {
      e = U("img"), X(e.src, t = /*iconsBaseUrl*/
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
function sn(i) {
  let e, t;
  return {
    c() {
      e = U("img"), X(e.src, t = /*iconsBaseUrl*/
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
function an(i) {
  let e, t, n, r;
  return {
    c() {
      e = U("img"), X(e.src, t = /*imageUrl*/
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
    m(u, l) {
      B(u, e, l), n || (r = q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, l) {
      l & /*imageUrl*/
      32 && !X(e.src, t = /*imageUrl*/
      u[5]) && a(e, "src", t), l & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        u[4]
      ), l & /*placeType*/
      64 && a(
        e,
        "title",
        /*placeType*/
        u[6]
      );
    },
    d(u) {
      u && I(e), n = !1, r();
    }
  };
}
function Ut(i) {
  let e, t;
  return {
    c() {
      e = U("span"), t = ge(
        /*placeType*/
        i[6]
      ), a(e, "class", "secondary svelte-z7p9pp");
    },
    m(n, r) {
      B(n, e, r), M(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      64 && Ie(
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
function ln(i) {
  let e, t, n, r, u, l, o, d, c, f = (
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
  ), w, D, E = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), S, z, W, Z, V, C;
  function v(p, m) {
    return m & /*feature*/
    1 && (t = null), m & /*feature*/
    1 && (n = null), m & /*feature*/
    1 && (r = null), m & /*feature*/
    1 && (u = null), /*imageUrl*/
    p[5] ? an : (
      /*feature*/
      p[0].address ? sn : (t == null && (t = !!/*feature*/
      p[0].id.startsWith("road.")), t ? on : (n == null && (n = !!/*feature*/
      p[0].id.startsWith("address.")), n ? rn : (r == null && (r = !!/*feature*/
      p[0].id.startsWith("postal_code.")), r ? nn : (u == null && (u = !!/*feature*/
      p[0].id.startsWith("poi.")), u ? tn : (
        /*isReverse*/
        p[8] ? en : $i
      )))))
    );
  }
  let y = v(i, -1), N = y(i), k = _ && Ut(i);
  return {
    c() {
      e = U("li"), N.c(), l = $(), o = U("span"), d = U("span"), c = U("span"), g = ge(f), b = $(), k && k.c(), w = $(), D = U("span"), S = ge(E), a(c, "class", "primary svelte-z7p9pp"), a(d, "class", "svelte-z7p9pp"), a(D, "class", "line2 svelte-z7p9pp"), a(o, "class", "texts svelte-z7p9pp"), a(e, "tabindex", "-1"), a(e, "role", "option"), a(e, "aria-selected", z = /*style*/
      i[1] === "selected"), a(e, "aria-checked", W = /*style*/
      i[1] === "picked"), a(e, "class", Z = Je(
        /*style*/
        i[1]
      ) + " svelte-z7p9pp");
    },
    m(p, m) {
      B(p, e, m), N.m(e, null), M(e, l), M(e, o), M(o, d), M(d, c), M(c, g), M(d, b), k && k.m(d, null), M(o, w), M(o, D), M(D, S), V || (C = [
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
    p(p, [m]) {
      y === (y = v(p, m)) && N ? N.p(p, m) : (N.d(1), N = y(p), N && (N.c(), N.m(e, l))), m & /*feature*/
      1 && f !== (f = /*isReverse*/
      (p[8] ? (
        /*feature*/
        p[0].place_name
      ) : (
        /*feature*/
        p[0].place_name.replace(/,.*/, "")
      )) + "") && Ie(g, f), m & /*showPlaceType, feature, imageUrl*/
      37 && (_ = /*showPlaceType*/
      p[2] === "always" || /*showPlaceType*/
      p[2] !== "never" && !/*feature*/
      p[0].address && !/*feature*/
      p[0].id.startsWith("road.") && !/*feature*/
      p[0].id.startsWith("address.") && !/*feature*/
      p[0].id.startsWith("postal_code.") && (!/*feature*/
      p[0].id.startsWith("poi.") || !/*imageUrl*/
      p[5]) && !/*isReverse*/
      p[8]), _ ? k ? k.p(p, m) : (k = Ut(p), k.c(), k.m(d, null)) : k && (k.d(1), k = null), m & /*feature*/
      1 && E !== (E = /*isReverse*/
      (p[8] ? "" : (
        /*feature*/
        p[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ie(S, E), m & /*style*/
      2 && z !== (z = /*style*/
      p[1] === "selected") && a(e, "aria-selected", z), m & /*style*/
      2 && W !== (W = /*style*/
      p[1] === "picked") && a(e, "aria-checked", W), m & /*style*/
      2 && Z !== (Z = Je(
        /*style*/
        p[1]
      ) + " svelte-z7p9pp") && a(e, "class", Z);
    },
    i: P,
    o: P,
    d(p) {
      p && I(e), N.d(), k && k.d(), V = !1, de(C);
    }
  };
}
function un(i, e, t) {
  var V;
  let n, r, { feature: u } = e, { style: l = "default" } = e, { showPlaceType: o } = e, { missingIconsCache: d } = e, { iconsBaseUrl: c } = e;
  const f = $t(), g = (V = u.properties) == null ? void 0 : V.categories;
  let b, _, w = 0, D = u.place_type[0] === "reverse";
  function E() {
    _ && d.add(_), t(11, w++, w);
  }
  function S(C) {
    ji.call(this, i, C);
  }
  const z = () => E(), W = () => f("select", void 0), Z = (C) => {
    document.activeElement !== C.target && f("select", void 0);
  };
  return i.$$set = (C) => {
    "feature" in C && t(0, u = C.feature), "style" in C && t(1, l = C.style), "showPlaceType" in C && t(2, o = C.showPlaceType), "missingIconsCache" in C && t(10, d = C.missingIconsCache), "iconsBaseUrl" in C && t(3, c = C.iconsBaseUrl);
  }, i.$$.update = () => {
    var C, v, y, N;
    if (i.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    7224)
      do
        t(12, n--, n), t(4, b = g == null ? void 0 : g[n]), t(5, _ = b ? c + b.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!_ || d.has(_)));
    i.$$.dirty & /*feature*/
    1 && t(6, r = ((v = (C = u.properties) == null ? void 0 : C.categories) == null ? void 0 : v.join(", ")) ?? ((N = (y = u.properties) == null ? void 0 : y.place_type_name) == null ? void 0 : N[0]) ?? u.place_type[0]);
  }, t(12, n = (g == null ? void 0 : g.length) ?? 0), [
    u,
    l,
    o,
    c,
    b,
    _,
    r,
    f,
    D,
    E,
    d,
    w,
    n,
    S,
    z,
    W,
    Z
  ];
}
class cn extends we {
  constructor(e) {
    super(), ye(this, e, un, ln, _e, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 10,
      iconsBaseUrl: 3
    });
  }
}
function dn(i) {
  let e;
  return {
    c() {
      e = U("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-7cmwmc");
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
class fn extends we {
  constructor(e) {
    super(), ye(this, e, null, dn, _e, {});
  }
}
function mn(i) {
  let e, t;
  return {
    c() {
      e = le("svg"), t = le("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
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
class gn extends we {
  constructor(e) {
    super(), ye(this, e, null, mn, _e, {});
  }
}
function hn(i) {
  let e, t, n;
  return {
    c() {
      e = le("svg"), t = le("circle"), n = le("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(n, "d", "M12.063 12.063 7.635 7.635"), a(n, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      B(r, e, u), M(e, t), M(e, n);
    },
    p: P,
    i: P,
    o: P,
    d(r) {
      r && I(e);
    }
  };
}
class bn extends we {
  constructor(e) {
    super(), ye(this, e, null, hn, _e, {});
  }
}
function vn(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function Dt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Re;
async function Ln(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Re && r.cachedLocationExpiry && Re.time + r.cachedLocationExpiry > Date.now()) {
          if (!Re.coords)
            break e;
          return Re.coords;
        }
        let u;
        try {
          return u = await new Promise((l, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                l(
                  [d.coords.longitude, d.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (d) => {
                o(d);
              },
              r
            );
          }), u;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Re = {
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
const _n = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, It = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, At = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Pt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Bt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ft = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function yn(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((_) => Number(_.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), l = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${r}° ${l}, ${u}° ${o}`);
    const c = Math.floor(r), f = Math.floor(u), g = (r - c) * 60, b = (u - f) * 60;
    if (i == "DM") {
      let _ = Gt(g, 3).toFixed(3).padStart(6, "0"), w = Gt(b, 3).toFixed(3).padStart(6, "0");
      _.endsWith(".000") && w.endsWith(".000") && (_ = _.replace(/\.000$/, ""), w = w.replace(/\.000$/, "")), d = `${c}° ${_}' ${l}, ${f}° ${w}' ${o}`;
    }
    if (i == "DMS") {
      const _ = Math.floor(g), w = Math.floor(b);
      let D = ((g - _) * 60).toFixed(1).padStart(4, "0"), E = ((b - w) * 60).toFixed(1).padStart(4, "0");
      const S = _.toString().padStart(2, "0"), z = w.toString().padStart(2, "0");
      D.endsWith(".0") && E.endsWith(".0") && (D = D.replace(/\.0$/, ""), E = E.replace(/\.0$/, "")), d = `${c}° ${S}' ${D}" ${l}, ${f}° ${z}' ${E}" ${o}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Gt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function vt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", l = null, o = [], d = !1;
  if (_n.test(i))
    throw new Error("invalid coordinate value");
  if (It.test(i))
    if (o = It.exec(i), d = Ue(o), d)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), l = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (At.test(i))
    if (o = At.exec(i), d = Ue(o), d) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), l = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Pt.test(i))
    if (o = Pt.exec(i), d = Ue(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, l = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, l = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Bt.test(i))
    if (o = Bt.exec(i), d = Ue(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, l = "DM"), o[6] && (t += o[6] / 3600, l = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ft.test(i)) {
    if (o = Ft.exec(i), d = Ue(o), o.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, l = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, l = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
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
    const f = o[0].trim();
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
    const D = g.split(".");
    if (D.length == 2 && D[1] == 0 && D[1].length != 2)
      throw new Error("invalid coordinates format");
    const E = b.split(".");
    if (E.length == 2 && E[1] == 0 && E[1].length != 2)
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
      originalFormat: l,
      closeEnough: wn,
      toCoordinateFormat: yn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Ue(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const l = e[u], o = e[u + r], d = t.test(l) && t.test(o), c = n.test(l) && n.test(o), f = l == o;
    if (!(l == null && o == null)) {
      if (l == null || o == null)
        return !1;
      if (d || c || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function jt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function wn(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return jt(this.decimalLatitude, Number(e[0])) && jt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const pn = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
vt.to = pn;
const En = [
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
], Sn = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Tn = [
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
], Nn = [
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
function kn() {
  const i = [];
  return En.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Sn });
  }), [...i, ...Tn, ...Nn];
}
const Mn = kn();
vt.formats = Mn.map((i) => i.verbatimCoordinates);
const Cn = vt;
function Ht(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Zt(i) {
  let e, t;
  return e = new fn({}), {
    c() {
      he(e.$$.fragment);
    },
    m(n, r) {
      ue(e, n, r), t = !0;
    },
    i(n) {
      t || (j(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ce(e, n);
    }
  };
}
function qt(i) {
  let e, t, n, r, u;
  return t = new gn({}), {
    c() {
      e = U("button"), he(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), a(e, "class", "svelte-bz0zu3"), ke(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(l, o) {
      B(l, e, o), ue(t, e, null), n = !0, r || (u = q(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(l, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      1024) && a(
        e,
        "title",
        /*reverseButtonTitle*/
        l[10]
      ), (!n || o[0] & /*reverseActive*/
      1) && ke(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      n || (j(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && I(e), ce(t), r = !1, u();
    }
  };
}
function Wn(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, l, o = Rt(
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
    let f = Ht(i, o, c), g = d(f);
    n.set(g, t[c] = Qt(g, f));
  }
  return {
    c() {
      e = U("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      a(e, "class", "options svelte-bz0zu3"), a(e, "role", "listbox");
    },
    m(c, f) {
      B(c, e, f);
      for (let g = 0; g < t.length; g += 1)
        t[g] && t[g].m(e, null);
      r = !0, u || (l = [
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
      ], u = !0);
    },
    p(c, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = Rt(
        /*listFeatures*/
        c[13]
      ), Ye(), t = Vi(t, f, d, 1, c, o, n, e, Ki, Qt, null, Ht), Xe());
    },
    i(c) {
      if (!r) {
        for (let f = 0; f < o.length; f += 1)
          j(t[f]);
        r = !0;
      }
    },
    o(c) {
      for (let f = 0; f < t.length; f += 1)
        Q(t[f]);
      r = !1;
    },
    d(c) {
      c && I(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      u = !1, de(l);
    }
  };
}
function zn(i) {
  let e, t, n, r, u, l;
  return t = new ii({}), {
    c() {
      e = U("div"), he(t.$$.fragment), n = $(), r = U("div"), u = ge(
        /*noResultsMessage*/
        i[8]
      ), a(r, "class", "svelte-bz0zu3"), a(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, d) {
      B(o, e, d), ue(t, e, null), M(e, n), M(e, r), M(r, u), l = !0;
    },
    p(o, d) {
      (!l || d[0] & /*noResultsMessage*/
      256) && Ie(
        u,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      l || (j(t.$$.fragment, o), l = !0);
    },
    o(o) {
      Q(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && I(e), ce(t);
    }
  };
}
function On(i) {
  let e = "", t;
  return {
    c() {
      t = ge(e);
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
function Rn(i) {
  let e, t, n, r, u, l, o, d, c, f, g;
  return t = new ii({}), d = new ti({}), {
    c() {
      e = U("div"), he(t.$$.fragment), n = $(), r = U("div"), u = ge(
        /*errorMessage*/
        i[7]
      ), l = $(), o = U("button"), he(d.$$.fragment), a(r, "class", "svelte-bz0zu3"), a(o, "class", "svelte-bz0zu3"), a(e, "class", "error svelte-bz0zu3");
    },
    m(b, _) {
      B(b, e, _), ue(t, e, null), M(e, n), M(e, r), M(r, u), M(e, l), M(e, o), ue(d, o, null), c = !0, f || (g = q(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), f = !0);
    },
    p(b, _) {
      (!c || _[0] & /*errorMessage*/
      128) && Ie(
        u,
        /*errorMessage*/
        b[7]
      );
    },
    i(b) {
      c || (j(t.$$.fragment, b), j(d.$$.fragment, b), c = !0);
    },
    o(b) {
      Q(t.$$.fragment, b), Q(d.$$.fragment, b), c = !1;
    },
    d(b) {
      b && I(e), ce(t), ce(d), f = !1, g();
    }
  };
}
function Qt(i, e) {
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
  function l() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new cn({
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
  }), n.$on("mouseenter", u), n.$on("select", l), {
    key: i,
    first: null,
    c() {
      t = Ai(), he(n.$$.fragment), this.first = t;
    },
    m(d, c) {
      B(d, t, c), ue(n, d, c), r = !0;
    },
    p(d, c) {
      var g;
      e = d;
      const f = {};
      c[0] & /*listFeatures*/
      8192 && (f.feature = /*feature*/
      e[97]), c[0] & /*showPlaceType*/
      2048 && (f.showPlaceType = /*showPlaceType*/
      e[11]), c[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (f.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((g = e[14]) == null ? void 0 : g.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), c[0] & /*iconsBaseUrl*/
      4096 && (f.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(f);
    },
    i(d) {
      r || (j(n.$$.fragment, d), r = !0);
    },
    o(d) {
      Q(n.$$.fragment, d), r = !1;
    },
    d(d) {
      d && I(t), ce(n, d);
    }
  };
}
function Un(i) {
  let e, t, n, r, u, l, o, d, c, f, g, b, _, w, D, E, S, z, W, Z, V, C = !1;
  u = new bn({}), g = new ti({});
  let v = (
    /*abortController*/
    i[20] && Zt()
  ), y = (
    /*enableReverse*/
    i[6] === "button" && qt(i)
  );
  const N = (
    /*#slots*/
    i[70].default
  ), k = Ri(
    N,
    i,
    /*$$scope*/
    i[69],
    null
  ), p = [Rn, On, zn, Wn], m = [];
  function be(L, F) {
    var ne, ee;
    return (
      /*error*/
      L[19] ? 0 : !/*focusedDelayed*/
      L[16] && !/*keepListOpen*/
      L[4] ? 1 : (
        /*listFeatures*/
        ((ne = L[13]) == null ? void 0 : ne.length) === 0 ? 2 : (
          /*listFeatures*/
          (ee = L[13]) != null && ee.length && /*focusedDelayed*/
          (L[16] || /*keepListOpen*/
          L[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(E = be(i)) && (S = m[E] = p[E](i)), {
    c() {
      e = $(), t = U("form"), n = U("div"), r = U("button"), he(u.$$.fragment), l = $(), o = U("input"), d = $(), c = U("div"), f = U("button"), he(g.$$.fragment), b = $(), v && v.c(), _ = $(), y && y.c(), w = $(), k && k.c(), D = $(), S && S.c(), a(r, "class", "search-button svelte-bz0zu3"), a(r, "type", "button"), a(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), a(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), a(o, "class", "svelte-bz0zu3"), a(f, "type", "button"), a(
        f,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), a(f, "class", "svelte-bz0zu3"), a(c, "class", "clear-button-container svelte-bz0zu3"), ke(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(n, "class", "input-group svelte-bz0zu3"), a(t, "class", z = Je(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), ke(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(L, F) {
      B(L, e, F), B(L, t, F), M(t, n), M(n, r), ue(u, r, null), M(n, l), M(n, o), i[72](o), zt(
        o,
        /*searchValue*/
        i[1]
      ), M(n, d), M(n, c), M(c, f), ue(g, f, null), M(c, b), v && v.m(c, null), M(n, _), y && y.m(n, null), M(n, w), k && k.m(n, null), M(t, D), ~E && m[E].m(t, null), W = !0, Z || (V = [
        q(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        q(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        q(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        q(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        q(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        q(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        q(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        q(
          o,
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
        q(t, "submit", Pi(
          /*handleSubmit*/
          i[22]
        ))
      ], Z = !0);
    },
    p(L, F) {
      (!W || F[0] & /*placeholder*/
      512) && a(
        o,
        "placeholder",
        /*placeholder*/
        L[9]
      ), (!W || F[0] & /*placeholder*/
      512) && a(
        o,
        "aria-label",
        /*placeholder*/
        L[9]
      ), F[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      L[1] && zt(
        o,
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
      1048576 && j(v, 1) : (v = Zt(), v.c(), j(v, 1), v.m(c, null)) : v && (Ye(), Q(v, 1, 1, () => {
        v = null;
      }), Xe()), (!W || F[0] & /*searchValue*/
      2) && ke(
        c,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[6] === "button" ? y ? (y.p(L, F), F[0] & /*enableReverse*/
      64 && j(y, 1)) : (y = qt(L), y.c(), j(y, 1), y.m(n, w)) : y && (Ye(), Q(y, 1, 1, () => {
        y = null;
      }), Xe()), k && k.p && (!W || F[2] & /*$$scope*/
      128) && Di(
        k,
        N,
        L,
        /*$$scope*/
        L[69],
        W ? Ui(
          N,
          /*$$scope*/
          L[69],
          F,
          null
        ) : Ii(
          /*$$scope*/
          L[69]
        ),
        null
      );
      let ne = E;
      E = be(L), E === ne ? ~E && m[E].p(L, F) : (S && (Ye(), Q(m[ne], 1, 1, () => {
        m[ne] = null;
      }), Xe()), ~E ? (S = m[E], S ? S.p(L, F) : (S = m[E] = p[E](L), S.c()), j(S, 1), S.m(t, null)) : S = null), (!W || F[0] & /*className*/
      4 && z !== (z = Je(
        /*className*/
        L[2]
      ) + " svelte-bz0zu3")) && a(t, "class", z), (!W || F[0] & /*className, collapsed, searchValue*/
      38) && ke(
        t,
        "can-collapse",
        /*collapsed*/
        L[5] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      W || (j(C), j(u.$$.fragment, L), j(g.$$.fragment, L), j(v), j(y), j(k, L), j(S), W = !0);
    },
    o(L) {
      Q(C), Q(u.$$.fragment, L), Q(g.$$.fragment, L), Q(v), Q(y), Q(k, L), Q(S), W = !1;
    },
    d(L) {
      L && (I(e), I(t)), ce(u), i[72](null), ce(g), v && v.d(), y && y.d(), k && k.d(L), ~E && m[E].d(), Z = !1, de(V);
    }
  };
}
function Dn(i, e, t) {
  let n, r, u, { $$slots: l = {}, $$scope: o } = e;
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
  let { class: c = void 0 } = e, { apiKey: f } = e, { bbox: g = void 0 } = e, { clearButtonTitle: b = "clear" } = e, { clearOnBlur: _ = !1 } = e, { clearListOnPick: w = !1 } = e, { keepListOpen: D = !1 } = e, { collapsed: E = !1 } = e, { country: S = void 0 } = e, { debounceSearch: z = 200 } = e, { enableReverse: W = "never" } = e, { errorMessage: Z = "Something went wrong…" } = e, { filter: V = () => !0 } = e, { flyTo: C = !0 } = e, { fuzzyMatch: v = !0 } = e, { language: y = void 0 } = e, { limit: N = void 0 } = e;
  const k = 41415112612;
  let { reverseGeocodingLimit: p = k } = e, { mapController: m = void 0 } = e, { minLength: be = 2 } = e, { noResultsMessage: L = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: F = "Search" } = e, { proximity: ne = [{ type: "server-geolocation" }] } = e, { reverseActive: ee = W === "always" } = e, { reverseButtonTitle: Lt = "toggle reverse geocoding" } = e, { searchValue: K = "" } = e, { pickedResultStyle: Pe = "full-geometry" } = e, { showPlaceType: _t = "if-needed" } = e, { showResultsWhileTyping: Be = !0 } = e, { selectFirst: pe = !0 } = e, { flyToSelected: Fe = !1 } = e, { markerOnSelected: Ge = !0 } = e, { types: xe = void 0 } = e;
  const yt = [];
  let { reverseGeocodingTypes: je = yt } = e, { exhaustiveReverseGeocoding: $e = !1 } = e, { excludeTypes: et = !1 } = e;
  const wt = void 0;
  let { reverseGeocodingExcludeTypes: He = wt } = e, { zoom: Ze = d } = e, { apiUrl: tt = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: it = {} } = e, { iconsBaseUrl: pt = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.2/icons/" } = e, { adjustUrlQuery: nt = () => {
  } } = e, { adjustUrl: rt = () => {
  } } = e;
  function ni(s) {
    ie.focus(s);
  }
  function ri() {
    ie.blur();
  }
  function Et(s, A = !0, G = !1) {
    t(1, K = s), A ? (t(15, O = -1), Tt()) : (Nt(void 0, !G, G), setTimeout(() => {
      ie.focus(), ie.select();
    }));
  }
  function oi() {
    t(13, T = void 0), t(14, h = void 0), t(15, O = -1);
  }
  function si() {
    t(64, H = []), t(14, h = void 0);
  }
  let T, H, h, St = "", ie, O = -1, re, qe = [], ve, Ee, Se, ot, ae = !1;
  const ai = /* @__PURE__ */ new Set(), fe = $t();
  Gi(() => {
    m && (m.setEventHandler(void 0), m.indicateReverse(!1), m.setSelectedMarker(-1), m.setFeatures(void 0, void 0, !1));
  });
  function Tt(s) {
    if (t(17, ae = !1), Ee && (clearTimeout(Ee), Ee = void 0), O > -1 && T)
      t(14, h = T[O]), t(1, K = h.place_type[0] === "reverse" ? h.place_name : h.place_name.replace(/,.*/, "")), t(19, re = void 0), t(64, H = void 0), t(15, O = -1);
    else if (K) {
      const A = s || !st(K);
      at(K, { exact: !0 }).then(() => {
        t(64, H = T), t(14, h = void 0), A && li();
      }).catch((G) => t(19, re = G));
    }
  }
  function st(s) {
    try {
      return Cn(s, 6);
    } catch {
      return !1;
    }
  }
  async function at(s, { byId: A = !1, exact: G = !1 } = {}) {
    var x, oe, me;
    t(19, re = void 0), ve == null || ve.abort();
    const J = new AbortController();
    t(20, ve = J);
    try {
      const R = st(s), We = new URL(tt + "/" + encodeURIComponent(R ? R.decimalLongitude + "," + R.decimalLatitude : s) + ".json"), te = We.searchParams;
      y !== void 0 && te.set("language", Array.isArray(y) ? y.join(",") : y ?? "");
      const [ct] = (m == null ? void 0 : m.getCenterAndZoom()) ?? [];
      let se = (x = !R || je === yt ? xe : je) == null ? void 0 : x.map((Y) => typeof Y == "string" ? Y : ct === void 0 || (Y[0] ?? 0) <= ct && ct < (Y[1] ?? 1 / 0) ? Y[2] : void 0).filter((Y) => Y !== void 0);
      se && (se = [...new Set(se)], te.set("types", se.join(",")));
      const Mt = !R || He === wt ? et : He;
      if (Mt && te.set("excludeTypes", String(Mt)), g && te.set("bbox", g.map((Y) => Y.toFixed(6)).join(",")), S && te.set("country", Array.isArray(S) ? S.join(",") : S), !A && !R) {
        const Y = await Ln(m, ne, J);
        Y && te.set("proximity", Y), (G || !Be) && te.set("autocomplete", "false"), te.set("fuzzyMatch", String(v));
      }
      const ze = p === k ? N : p;
      ze !== void 0 && ze > 1 && (se == null ? void 0 : se.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), R ? (ze === 1 || ze !== void 0 && ($e || (se == null ? void 0 : se.length) === 1)) && te.set("limit", String(ze)) : N !== void 0 && te.set("limit", String(N)), te.set("key", f), nt(te), rt(We);
      const Ti = We.searchParams.get("types") === "" && We.searchParams.get("excludeTypes") !== "true", Qe = We.toString();
      if (Qe === St) {
        A ? (w && t(13, T = void 0), t(14, h = qe[0])) : (t(13, T = qe), ((oe = T[O]) == null ? void 0 : oe.id) !== (r == null ? void 0 : r.id) && t(15, O = -1));
        return;
      }
      St = Qe;
      let Oe;
      if (Ti)
        Oe = { type: "FeatureCollection", features: [] };
      else {
        const Y = await fetch(Qe, { signal: J.signal, ...it });
        if (!Y.ok)
          throw new Error(await Y.text());
        Oe = await Y.json();
      }
      fe("response", { url: Qe, featureCollection: Oe }), A ? (w && t(13, T = void 0), t(14, h = Oe.features[0]), qe = [h]) : (t(13, T = Oe.features.filter(V)), R && T.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + R.decimalLongitude + "_" + R.decimalLatitude,
        text: R.decimalLatitude + ", " + R.decimalLongitude,
        place_name: R.decimalLatitude + ", " + R.decimalLongitude,
        place_type: ["reverse"],
        center: [R.decimalLongitude, R.decimalLatitude],
        bbox: [
          R.decimalLongitude,
          R.decimalLatitude,
          R.decimalLongitude,
          R.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [R.decimalLongitude, R.decimalLatitude]
        }
      }), qe = T, ((me = T[O]) == null ? void 0 : me.id) !== (r == null ? void 0 : r.id) && t(15, O = -1), R && ie.focus());
    } catch (R) {
      if (R && typeof R == "object" && "name" in R && R.name === "AbortError")
        return;
      throw R;
    } finally {
      J === ve && t(20, ve = void 0);
    }
  }
  function li() {
    var J;
    if (!(H != null && H.length) || !C)
      return;
    const s = [180, 90, -180, -90], A = !H.some((x) => !x.matching_text);
    let G;
    for (const x of H) {
      const oe = Ce(x);
      if (G = G === void 0 ? oe : oe === void 0 ? G : Math.max(G, oe), A || !x.matching_text)
        for (const me of [0, 1, 2, 3])
          s[me] = Math[me < 2 ? "min" : "max"](s[me], ((J = x.bbox) == null ? void 0 : J[me]) ?? x.center[me % 2]);
    }
    m && H.length > 0 && (h && s[0] === s[2] && s[1] === s[3] ? m.flyTo(h.center, Ce(h)) : m.fitBounds(Dt(s), 50, G));
  }
  function lt() {
    !h || !m || (!h.bbox || h.bbox[0] === h.bbox[2] && h.bbox[1] === h.bbox[3] ? m.flyTo(h.center, Ce(h)) : m.fitBounds(Dt(h.bbox), 50, Ce(h)));
  }
  function Ce(s) {
    var G;
    if (!s.bbox || s.bbox[0] !== s.bbox[2] && s.bbox[1] !== s.bbox[3])
      return;
    const A = s.id.replace(/\..*/, "");
    return (Array.isArray((G = s.properties) == null ? void 0 : G.categories) ? s.properties.categories.reduce(
      (J, x) => {
        const oe = Ze[A + "." + x];
        return J === void 0 ? oe : oe === void 0 ? J : Math.max(J, oe);
      },
      void 0
    ) : void 0) ?? Ze[A];
  }
  function ui(s) {
    t(0, ee = W === "always"), t(13, T = void 0), t(14, h = void 0), t(15, O = -1), Et(s[1].toFixed(6) + ", " + vn(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function ci(s) {
    if (!T)
      return;
    let A = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    A && (ie.focus(), t(17, ae = !0), s.preventDefault(), h && O === -1 && t(15, O = T.findIndex((G) => G.id === (h == null ? void 0 : h.id))), O === (h || pe ? 0 : -1) && A === -1 && t(15, O = T.length), t(15, O += A), O >= T.length && t(15, O = -1), O < 0 && (h || pe) && t(15, O = 0));
  }
  function Nt(s, A = !0, G = !1) {
    if (t(19, re = void 0), t(14, h = void 0), t(17, ae = !0), Be || G) {
      if (Ee && clearTimeout(Ee), K.length < be)
        return;
      const J = K;
      Ee = window.setTimeout(
        () => {
          at(J).catch((x) => t(19, re = x));
        },
        A ? z : 0
      );
    } else
      t(13, T = void 0), t(19, re = void 0);
  }
  function ut(s) {
    h && (h == null ? void 0 : h.id) === (s == null ? void 0 : s.id) ? lt() : (t(14, h = s), t(1, K = s.place_name));
  }
  function kt(s) {
    t(15, O = s);
  }
  function di() {
    (!pe || h) && t(15, O = -1), Fe && lt();
  }
  const fi = () => ie.focus();
  function mi(s) {
    gt[s ? "unshift" : "push"](() => {
      ie = s, t(18, ie);
    });
  }
  function gi() {
    K = this.value, t(1, K), t(17, ae), t(31, _), t(16, Se);
  }
  const hi = () => t(17, ae = !0), bi = () => t(17, ae = !1), vi = () => t(17, ae = !0), Li = () => t(14, h = void 0), _i = () => {
    t(1, K = ""), ie.focus();
  }, yi = () => t(0, ee = !ee), wi = () => t(19, re = void 0), pi = (s) => kt(s), Ei = (s) => ut(s), Si = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, c = s.class), "apiKey" in s && t(29, f = s.apiKey), "bbox" in s && t(30, g = s.bbox), "clearButtonTitle" in s && t(3, b = s.clearButtonTitle), "clearOnBlur" in s && t(31, _ = s.clearOnBlur), "clearListOnPick" in s && t(32, w = s.clearListOnPick), "keepListOpen" in s && t(4, D = s.keepListOpen), "collapsed" in s && t(5, E = s.collapsed), "country" in s && t(33, S = s.country), "debounceSearch" in s && t(34, z = s.debounceSearch), "enableReverse" in s && t(6, W = s.enableReverse), "errorMessage" in s && t(7, Z = s.errorMessage), "filter" in s && t(35, V = s.filter), "flyTo" in s && t(36, C = s.flyTo), "fuzzyMatch" in s && t(37, v = s.fuzzyMatch), "language" in s && t(38, y = s.language), "limit" in s && t(39, N = s.limit), "reverseGeocodingLimit" in s && t(40, p = s.reverseGeocodingLimit), "mapController" in s && t(41, m = s.mapController), "minLength" in s && t(42, be = s.minLength), "noResultsMessage" in s && t(8, L = s.noResultsMessage), "placeholder" in s && t(9, F = s.placeholder), "proximity" in s && t(43, ne = s.proximity), "reverseActive" in s && t(0, ee = s.reverseActive), "reverseButtonTitle" in s && t(10, Lt = s.reverseButtonTitle), "searchValue" in s && t(1, K = s.searchValue), "pickedResultStyle" in s && t(44, Pe = s.pickedResultStyle), "showPlaceType" in s && t(11, _t = s.showPlaceType), "showResultsWhileTyping" in s && t(45, Be = s.showResultsWhileTyping), "selectFirst" in s && t(46, pe = s.selectFirst), "flyToSelected" in s && t(47, Fe = s.flyToSelected), "markerOnSelected" in s && t(48, Ge = s.markerOnSelected), "types" in s && t(49, xe = s.types), "reverseGeocodingTypes" in s && t(50, je = s.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in s && t(51, $e = s.exhaustiveReverseGeocoding), "excludeTypes" in s && t(52, et = s.excludeTypes), "reverseGeocodingExcludeTypes" in s && t(53, He = s.reverseGeocodingExcludeTypes), "zoom" in s && t(54, Ze = s.zoom), "apiUrl" in s && t(55, tt = s.apiUrl), "fetchParameters" in s && t(56, it = s.fetchParameters), "iconsBaseUrl" in s && t(12, pt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(57, nt = s.adjustUrlQuery), "adjustUrl" in s && t(58, rt = s.adjustUrl), "$$scope" in s && t(69, o = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, ee = W === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && Pe !== "marker-only" && h && !h.address && h.geometry.type === "Point" && h.place_type[0] !== "reverse" && at(h.id, { byId: !0 }).catch((s) => t(19, re = s)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (m && h && h.id !== ot && C && (lt(), w && t(13, T = void 0), t(64, H = void 0), t(15, O = -1)), t(65, ot = h == null ? void 0 : h.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, Se = ae), _ && !Se && t(1, K = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && K.length < be && (t(13, T = void 0), t(19, re = void 0), t(64, H = T)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && pe && T != null && T.length && O == -1 && !h && t(15, O = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && H !== T && t(64, H = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && m && m.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          ee && ui(s.coordinates);
          break;
        case "markerClick":
          {
            const A = T == null ? void 0 : T.find((G) => G.id === s.id);
            A && ut(A);
          }
          break;
        case "markerMouseEnter":
          H && t(15, O = Se ? (T == null ? void 0 : T.findIndex((A) => A.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          H && t(15, O = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = T == null ? void 0 : T[O]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && m && r && C && Fe && m.flyTo(r.center, Ce(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = Pe === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (Ge || m == null || m.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && m && Ge && !H && (m.setFeatures(r ? [r] : void 0, h, n), m.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && m && m.setFeatures(H, h, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && H && m && m.setSelectedMarker(O), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && m) {
      const s = st(K);
      m.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && fe("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && fe("pick", { feature: h }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(T != null && T.length) && (Se || D)), i.$$.dirty[2] & /*optionsVisible*/
    32 && fe("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && fe("featureslisted", { features: T }), i.$$.dirty[2] & /*markedFeatures*/
    4 && fe("featuresmarked", { features: H }), i.$$.dirty[0] & /*reverseActive*/
    1 && fe("reversetoggle", { reverse: ee }), i.$$.dirty[0] & /*searchValue*/
    2 && fe("querychange", { query: K }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && m && m.indicateReverse(ee);
  }, [
    ee,
    K,
    c,
    b,
    D,
    E,
    W,
    Z,
    L,
    F,
    Lt,
    _t,
    pt,
    T,
    h,
    O,
    Se,
    ae,
    ie,
    re,
    ve,
    ai,
    Tt,
    ci,
    Nt,
    ut,
    kt,
    di,
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
    p,
    m,
    be,
    ne,
    Pe,
    Be,
    pe,
    Fe,
    Ge,
    xe,
    je,
    $e,
    et,
    He,
    Ze,
    tt,
    it,
    nt,
    rt,
    ni,
    ri,
    Et,
    oi,
    si,
    H,
    ot,
    r,
    u,
    n,
    o,
    l,
    fi,
    mi,
    gi,
    hi,
    bi,
    vi,
    Li,
    _i,
    yi,
    wi,
    pi,
    Ei,
    Si
  ];
}
class In extends we {
  constructor(e) {
    super(), ye(
      this,
      e,
      Dn,
      Un,
      _e,
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
}
const Kt = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], An = [
  "adjustUrlQuery",
  "adjustUrl",
  "apiKey",
  "apiUrl",
  "bbox",
  "class",
  "clearButtonTitle",
  "clearListOnPick",
  "clearOnBlur",
  "collapsed",
  "country",
  "debounceSearch",
  "enableReverse",
  "errorMessage",
  "excludeTypes",
  "reverseGeocodingExcludeTypes",
  "exhaustiveReverseGeocoding",
  "fetchParameters",
  "filter",
  "flyToSelected",
  "fuzzyMatch",
  "iconsBaseUrl",
  "keepListOpen",
  "language",
  "limit",
  "reverseGeocodingLimit",
  "mapController",
  "markerOnSelected",
  "minLength",
  "noResultsMessage",
  "pickedResultStyle",
  "placeholder",
  "proximity",
  "reverseActive",
  "reverseButtonTitle",
  "selectFirst",
  "showPlaceType",
  "showResultsWhileTyping",
  "types",
  "reverseGeocodingTypes",
  "zoom"
];
function Vt(i) {
  return "on" + i[0].toUpperCase() + i.slice(1);
}
const Fn = Mi(function(e, t) {
  const n = Ct(void 0), r = Ct(void 0), u = { ...e };
  for (const l of Kt)
    delete u[Vt(l)];
  ft(() => {
    if (!n.current)
      throw new Error();
    const l = new In({
      target: n.current,
      props: u
    });
    return r.current = l, () => l.$destroy();
  }, []);
  for (const l of An)
    ft(() => {
      r.current && e[l] !== void 0 && r.current.$set({ [l]: e[l] });
    }, [e[l]]);
  for (const l of Kt) {
    const o = e[Vt(l)];
    ft(
      () => {
        var d;
        return o && ((d = r.current) == null ? void 0 : d.$on(l.toLowerCase(), (c) => {
          o(c.detail);
        }));
      },
      [o]
    );
  }
  return Ci(t, () => ({
    setQuery: (l, o = !0) => {
      var d;
      return (d = r.current) == null ? void 0 : d.setQuery(l, o);
    },
    clearMap: () => {
      var l;
      return (l = r.current) == null ? void 0 : l.clearMap();
    },
    clearList: () => {
      var l;
      return (l = r.current) == null ? void 0 : l.clearList();
    },
    focus: (l) => {
      var o;
      return (o = r.current) == null ? void 0 : o.focus(l);
    },
    blur: () => {
      var l;
      return (l = r.current) == null ? void 0 : l.blur();
    },
    setReverseMode: (l) => {
      var o;
      return (o = r.current) == null ? void 0 : o.$set({ reverseActive: l });
    }
  })), Wi("div", { ref: n });
});
export {
  Fn as GeocodingControl
};
//# sourceMappingURL=react.js.map
