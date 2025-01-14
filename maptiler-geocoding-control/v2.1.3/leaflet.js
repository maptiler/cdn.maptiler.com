var jn = Object.defineProperty;
var _i = (i) => {
  throw TypeError(i);
};
var Hn = (i, e, t) => e in i ? jn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var I = (i, e, t) => Hn(i, typeof e != "symbol" ? e + "" : e, t), Si = (i, e, t) => e.has(i) || _i("Cannot " + t);
var ve = (i, e, t) => (Si(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Jt = (i, e, t) => e.has(i) ? _i("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), $t = (i, e, t, n) => (Si(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as ke from "leaflet";
function ee() {
}
function Vn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function en(i) {
  return i();
}
function xi() {
  return /* @__PURE__ */ Object.create(null);
}
function He(i) {
  i.forEach(en);
}
function tn(i) {
  return typeof i == "function";
}
function Je(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let kt;
function ge(i, e) {
  return i === e ? !0 : (kt || (kt = document.createElement("a")), kt.href = e, i === kt.href);
}
function Kn(i) {
  return Object.keys(i).length === 0;
}
function Yn(i, e, t, n) {
  if (i) {
    const r = nn(i, e, t, n);
    return i[0](r);
  }
}
function nn(i, e, t, n) {
  return i[1] && n ? Vn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Xn(i, e, t, n) {
  return i[2], e.dirty;
}
function Qn(i, e, t, n, r, u) {
  if (r) {
    const a = nn(e, t, n, u);
    i.p(a, r);
  }
}
function Jn(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Dt(i) {
  return i ?? "";
}
function Z(i, e) {
  i.appendChild(e);
}
function te(i, e, t) {
  i.insertBefore(e, t || null);
}
function $(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Q(i) {
  return document.createElement(i);
}
function Re(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Xe(i) {
  return document.createTextNode(i);
}
function Le() {
  return Xe(" ");
}
function $n() {
  return Xe("");
}
function fe(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function er(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function x(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function tr(i) {
  return Array.from(i.childNodes);
}
function _t(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Ti(i, e) {
  i.value = e ?? "";
}
function We(i, e, t) {
  i.classList.toggle(e, !!t);
}
function ir(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let St;
function Lt(i) {
  St = i;
}
function rn() {
  if (!St) throw new Error("Function called outside component initialization");
  return St;
}
function nr(i) {
  rn().$$.on_destroy.push(i);
}
function sn() {
  const i = rn();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = ir(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((a) => {
        a.call(i, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function rr(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ft = [], ni = [];
let ct = [];
const Mi = [], sr = /* @__PURE__ */ Promise.resolve();
let ri = !1;
function or() {
  ri || (ri = !0, sr.then(on));
}
function si(i) {
  ct.push(i);
}
const ei = /* @__PURE__ */ new Set();
let at = 0;
function on() {
  if (at !== 0)
    return;
  const i = St;
  do {
    try {
      for (; at < ft.length; ) {
        const e = ft[at];
        at++, Lt(e), lr(e.$$);
      }
    } catch (e) {
      throw ft.length = 0, at = 0, e;
    }
    for (Lt(null), ft.length = 0, at = 0; ni.length; ) ni.pop()();
    for (let e = 0; e < ct.length; e += 1) {
      const t = ct[e];
      ei.has(t) || (ei.add(t), t());
    }
    ct.length = 0;
  } while (ft.length);
  for (; Mi.length; )
    Mi.pop()();
  ri = !1, ei.clear(), Lt(i);
}
function lr(i) {
  if (i.fragment !== null) {
    i.update(), He(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(si);
  }
}
function ur(i) {
  const e = [], t = [];
  ct.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ct = e;
}
const At = /* @__PURE__ */ new Set();
let st;
function It() {
  st = {
    r: 0,
    c: [],
    p: st
    // parent group
  };
}
function Bt() {
  st.r || He(st.c), st = st.p;
}
function oe(i, e) {
  i && i.i && (At.delete(i), i.i(e));
}
function ce(i, e, t, n) {
  if (i && i.o) {
    if (At.has(i)) return;
    At.add(i), st.c.push(() => {
      At.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Ci(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function ar(i, e) {
  ce(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function fr(i, e, t, n, r, u, a, o, g, c, L, _) {
  let C = i.length, M = u.length, N = C;
  const P = {};
  for (; N--; ) P[i[N].key] = N;
  const R = [], k = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), O = [];
  for (N = M; N--; ) {
    const G = _(r, u, N), s = t(G);
    let l = a.get(s);
    l ? O.push(() => l.p(G, e)) : (l = c(s, G), l.c()), k.set(s, R[N] = l), s in P && S.set(s, Math.abs(N - P[s]));
  }
  const D = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
  function V(G) {
    oe(G, 1), G.m(o, L), a.set(G.key, G), L = G.first, M--;
  }
  for (; C && M; ) {
    const G = R[M - 1], s = i[C - 1], l = G.key, f = s.key;
    G === s ? (L = G.first, C--, M--) : k.has(f) ? !a.has(l) || D.has(l) ? V(G) : H.has(f) ? C-- : S.get(l) > S.get(f) ? (H.add(l), V(G)) : (D.add(f), C--) : (g(s, a), C--);
  }
  for (; C--; ) {
    const G = i[C];
    k.has(G.key) || g(G, a);
  }
  for (; M; ) V(R[M - 1]);
  return He(O), R;
}
function Qe(i) {
  i && i.c();
}
function qe(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), si(() => {
    const u = i.$$.on_mount.map(en).filter(tn);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : He(u), i.$$.on_mount = [];
  }), r.forEach(si);
}
function Ze(i, e) {
  const t = i.$$;
  t.fragment !== null && (ur(t.after_update), He(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function cr(i, e) {
  i.$$.dirty[0] === -1 && (ft.push(i), or(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $e(i, e, t, n, r, u, a = null, o = [-1]) {
  const g = St;
  Lt(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: ee,
    not_equal: r,
    bound: xi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: xi(),
    dirty: o,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  a && a(c.root);
  let L = !1;
  if (c.ctx = t ? t(i, e.props || {}, (_, C, ...M) => {
    const N = M.length ? M[0] : C;
    return c.ctx && r(c.ctx[_], c.ctx[_] = N) && (!c.skip_bound && c.bound[_] && c.bound[_](N), L && cr(i, _)), C;
  }) : [], c.update(), L = !0, He(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const _ = tr(e.target);
      c.fragment && c.fragment.l(_), _.forEach($);
    } else
      c.fragment && c.fragment.c();
    e.intro && oe(i.$$.fragment), qe(i, e.target, e.anchor), on();
  }
  Lt(g);
}
class et {
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
    Ze(this, 1), this.$destroy = ee;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!tn(t))
      return ee;
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
    this.$$set && !Kn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const hr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(hr);
function dr(i) {
  let e, t;
  return {
    c() {
      e = Re("svg"), t = Re("path"), x(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), x(e, "viewBox", "0 0 14 14"), x(e, "width", "13"), x(e, "height", "13"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      te(n, e, r), Z(e, t);
    },
    p: ee,
    i: ee,
    o: ee,
    d(n) {
      n && $(e);
    }
  };
}
class ln extends et {
  constructor(e) {
    super(), $e(this, e, null, dr, Je, {});
  }
}
function gr(i) {
  let e, t;
  return {
    c() {
      e = Re("svg"), t = Re("path"), x(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), x(e, "viewBox", "0 0 30 30"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      te(n, e, r), Z(e, t);
    },
    p: ee,
    i: ee,
    o: ee,
    d(n) {
      n && $(e);
    }
  };
}
class un extends et {
  constructor(e) {
    super(), $e(this, e, null, gr, Je, {});
  }
}
function mr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function pr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function yr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function br(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function vr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function wr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Er(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Lr(i) {
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
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(u, a) {
      te(u, e, a), n || (r = fe(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !ge(e.src, t = /*imageUrl*/
      u[5]) && x(e, "src", t), a & /*category*/
      16 && x(
        e,
        "alt",
        /*category*/
        u[4]
      ), a & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        u[7]
      );
    },
    d(u) {
      u && $(e), n = !1, r();
    }
  };
}
function _r(i) {
  let e, t;
  return {
    c() {
      e = Q("div"), x(e, "class", "sprite-icon svelte-w9y5n9"), x(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / Se}px;
        height: ${/*spriteIcon*/
      i[6].height / Se}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${oi}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / Se}px -${/*spriteIcon*/
      i[6].y / Se}px;
        background-size: ${Oe.width / Se}px ${Oe.height / Se}px;
      `), x(
        e,
        "title",
        /*placeType*/
        i[7]
      );
    },
    m(n, r) {
      te(n, e, r);
    },
    p(n, r) {
      r & /*spriteIcon, iconsBaseUrl*/
      72 && t !== (t = `
        width: ${/*spriteIcon*/
      n[6].width / Se}px;
        height: ${/*spriteIcon*/
      n[6].height / Se}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${oi}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / Se}px -${/*spriteIcon*/
      n[6].y / Se}px;
        background-size: ${Oe.width / Se}px ${Oe.height / Se}px;
      `) && x(e, "style", t), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Ni(i) {
  let e, t;
  return {
    c() {
      e = Q("span"), t = Xe(
        /*placeType*/
        i[7]
      ), x(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r), Z(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && _t(
        t,
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Sr(i) {
  let e, t, n, r, u, a, o, g, c, L = (
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
  ), N, P, R = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), k, S, O, D, H, V;
  function G(m, h) {
    return h & /*feature*/
    1 && (t = null), h & /*feature*/
    1 && (n = null), h & /*feature*/
    1 && (r = null), h & /*feature*/
    1 && (u = null), Oe && /*spriteIcon*/
    m[6] ? _r : (
      /*imageUrl*/
      m[5] ? Lr : (
        /*feature*/
        m[0].address ? Er : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("road.")), t ? wr : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("address.")), n ? vr : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? br : (u == null && (u = !!/*feature*/
        m[0].id.startsWith("poi.")), u ? yr : (
          /*isReverse*/
          m[8] ? pr : mr
        )))))
      )
    );
  }
  let s = G(i, -1), l = s(i), f = M && Ni(i);
  return {
    c() {
      e = Q("li"), l.c(), a = Le(), o = Q("span"), g = Q("span"), c = Q("span"), _ = Xe(L), C = Le(), f && f.c(), N = Le(), P = Q("span"), k = Xe(R), x(c, "class", "primary svelte-w9y5n9"), x(g, "class", "svelte-w9y5n9"), x(P, "class", "line2 svelte-w9y5n9"), x(o, "class", "texts svelte-w9y5n9"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", S = /*style*/
      i[1] === "selected"), x(e, "aria-checked", O = /*style*/
      i[1] === "picked"), x(e, "class", D = Dt(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(m, h) {
      te(m, e, h), l.m(e, null), Z(e, a), Z(e, o), Z(o, g), Z(g, c), Z(c, _), Z(g, C), f && f.m(g, null), Z(o, N), Z(o, P), Z(P, k), H || (V = [
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
      s === (s = G(m, h)) && l ? l.p(m, h) : (l.d(1), l = s(m), l && (l.c(), l.m(e, a))), h & /*isReverse, feature*/
      257 && L !== (L = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && _t(_, L), h & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (M = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), M ? f ? f.p(m, h) : (f = Ni(m), f.c(), f.m(g, null)) : f && (f.d(1), f = null), h & /*isReverse, feature*/
      257 && R !== (R = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && _t(k, R), h & /*style*/
      2 && S !== (S = /*style*/
      m[1] === "selected") && x(e, "aria-selected", S), h & /*style*/
      2 && O !== (O = /*style*/
      m[1] === "picked") && x(e, "aria-checked", O), h & /*style*/
      2 && D !== (D = Dt(
        /*style*/
        m[1]
      ) + " svelte-w9y5n9") && x(e, "class", D);
    },
    i: ee,
    o: ee,
    d(m) {
      m && $(e), l.d(), f && f.d(), H = !1, He(V);
    }
  };
}
const an = devicePixelRatio > 1.25, oi = an ? "@2x" : "", Se = an ? 2 : 1;
let Oe, Ot;
function xr(i, e, t) {
  let n, r, u, { feature: a } = e, { style: o = "default" } = e, { showPlaceType: g } = e, { missingIconsCache: c } = e, { iconsBaseUrl: L } = e;
  const _ = sn();
  let C, M, N, P;
  function R() {
    Ot ?? (Ot = fetch(`${L}sprite${oi}.json`).then((s) => s.json()).then((s) => {
      Oe = s;
    }).catch(() => {
      Oe = null;
    }));
  }
  function k() {
    M && c.add(M), S();
  }
  function S() {
    Oe !== void 0 ? O() : (R(), Ot == null || Ot.then(O));
  }
  function O() {
    do {
      if (P--, t(4, C = n == null ? void 0 : n[P]), t(6, N = C ? Oe == null ? void 0 : Oe.icons[C] : void 0), N)
        break;
      t(5, M = C ? L + C.replace(/ /g, "_") + ".svg" : void 0);
    } while (P > -1 && (!M || c.has(M)));
  }
  function D(s) {
    rr.call(this, i, s);
  }
  const H = () => k(), V = () => _("select", void 0), G = (s) => {
    document.activeElement !== s.target && _("select", void 0);
  };
  return i.$$set = (s) => {
    "feature" in s && t(0, a = s.feature), "style" in s && t(1, o = s.style), "showPlaceType" in s && t(2, g = s.showPlaceType), "missingIconsCache" in s && t(11, c = s.missingIconsCache), "iconsBaseUrl" in s && t(3, L = s.iconsBaseUrl);
  }, i.$$.update = () => {
    var s, l, f, m, h;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (s = a.properties) == null ? void 0 : s.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = a.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((f = (l = a.properties) == null ? void 0 : l.categories) == null ? void 0 : f.join(", ")) ?? ((h = (m = a.properties) == null ? void 0 : m.place_type_name) == null ? void 0 : h[0]) ?? a.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (P = (n == null ? void 0 : n.length) ?? 0, S());
  }, [
    a,
    o,
    g,
    L,
    C,
    M,
    N,
    u,
    r,
    _,
    k,
    c,
    n,
    D,
    H,
    V,
    G
  ];
}
class Tr extends et {
  constructor(e) {
    super(), $e(this, e, xr, Sr, Je, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function Mr(i) {
  let e;
  return {
    c() {
      e = Q("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', x(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      te(t, e, n);
    },
    p: ee,
    i: ee,
    o: ee,
    d(t) {
      t && $(e);
    }
  };
}
class Cr extends et {
  constructor(e) {
    super(), $e(this, e, null, Mr, Je, {});
  }
}
function Nr(i) {
  let e, t, n;
  return {
    c() {
      e = Re("svg"), t = Re("path"), x(t, "stroke-width", "4"), x(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), x(t, "class", "svelte-gzo3ar"), x(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), x(e, "viewBox", "0 0 70 85"), x(e, "fill", "none"), x(e, "class", "svelte-gzo3ar"), We(
        e,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), We(
        e,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    m(r, u) {
      te(r, e, u), Z(e, t);
    },
    p(r, [u]) {
      u & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && x(e, "width", n), u & /*displayIn*/
      1 && We(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), u & /*displayIn*/
      1 && We(
        e,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    i: ee,
    o: ee,
    d(r) {
      r && $(e);
    }
  };
}
function kr(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class Or extends et {
  constructor(e) {
    super(), $e(this, e, kr, Nr, Je, { displayIn: 0 });
  }
}
function Rr(i) {
  let e, t;
  return {
    c() {
      e = Re("svg"), t = Re("path"), x(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), x(e, "viewBox", "0 0 60.006 21.412"), x(e, "width", "14"), x(e, "height", "20"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      te(n, e, r), Z(e, t);
    },
    p: ee,
    i: ee,
    o: ee,
    d(n) {
      n && $(e);
    }
  };
}
class Pr extends et {
  constructor(e) {
    super(), $e(this, e, null, Rr, Je, {});
  }
}
function Ar(i) {
  let e, t, n;
  return {
    c() {
      e = Re("svg"), t = Re("circle"), n = Re("path"), x(t, "cx", "4.789"), x(t, "cy", "4.787"), x(t, "r", "3.85"), x(t, "class", "svelte-1aq105l"), x(n, "d", "M12.063 12.063 7.635 7.635"), x(n, "class", "svelte-1aq105l"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "13"), x(e, "height", "13"), x(e, "viewBox", "0 0 13 13"), x(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      te(r, e, u), Z(e, t), Z(e, n);
    },
    p: ee,
    i: ee,
    o: ee,
    d(r) {
      r && $(e);
    }
  };
}
class Ir extends et {
  constructor(e) {
    super(), $e(this, e, null, Ar, Je, {});
  }
}
function Br(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function xt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let pt;
async function Gr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (pt && r.cachedLocationExpiry && pt.time + r.cachedLocationExpiry > Date.now()) {
          if (!pt.coords)
            break e;
          return pt.coords;
        }
        let u;
        try {
          return u = await new Promise((a, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (g) => {
                a(
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
          r.cachedLocationExpiry && (pt = {
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
const Wr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, ki = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Oi = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Ri = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Pi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ai = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Dr(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((M) => Number(M.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let g;
    i == "DD" && (g = `${r}° ${a}, ${u}° ${o}`);
    const c = Math.floor(r), L = Math.floor(u), _ = (r - c) * 60, C = (u - L) * 60;
    if (i == "DM") {
      let M = Ii(_, 3).toFixed(3).padStart(6, "0"), N = Ii(C, 3).toFixed(3).padStart(6, "0");
      M.endsWith(".000") && N.endsWith(".000") && (M = M.replace(/\.000$/, ""), N = N.replace(/\.000$/, "")), g = `${c}° ${M}' ${a}, ${L}° ${N}' ${o}`;
    }
    if (i == "DMS") {
      const M = Math.floor(_), N = Math.floor(C);
      let P = ((_ - M) * 60).toFixed(1).padStart(4, "0"), R = ((C - N) * 60).toFixed(1).padStart(4, "0");
      const k = M.toString().padStart(2, "0"), S = N.toString().padStart(2, "0");
      P.endsWith(".0") && R.endsWith(".0") && (P = P.replace(/\.0$/, ""), R = R.replace(/\.0$/, "")), g = `${c}° ${k}' ${P}" ${a}, ${L}° ${S}' ${R}" ${o}`;
    }
    return g;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Ii(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function hi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", a = null, o = [], g = !1;
  if (Wr.test(i))
    throw new Error("invalid coordinate value");
  if (ki.test(i))
    if (o = ki.exec(i), g = yt(o), g)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Oi.test(i))
    if (o = Oi.exec(i), g = yt(o), g) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Ri.test(i))
    if (o = Ri.exec(i), g = yt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Pi.test(i))
    if (o = Pi.exec(i), g = yt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6] / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ai.test(i)) {
    if (o = Ai.exec(i), g = yt(o), o.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
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
    const L = o[0].trim();
    let _, C;
    const M = /[,/;\u0020]/g, N = L.match(M);
    if (N == null) {
      const k = Math.floor(i.length / 2);
      _ = L.substring(0, k).trim(), C = L.substring(k).trim();
    } else {
      let k;
      N.length % 2 == 1 ? k = Math.floor(N.length / 2) : k = N.length / 2 - 1;
      let S = 0;
      if (k == 0)
        S = L.indexOf(N[0]), _ = L.substring(0, S).trim(), C = L.substring(S + 1).trim();
      else {
        let O = 0, D = 0;
        for (; O <= k; )
          S = L.indexOf(N[O], D), D = S + 1, O++;
        _ = L.substring(0, S).trim(), C = L.substring(S + 1).trim();
      }
    }
    const P = _.split(".");
    if (P.length == 2 && P[1] == 0 && P[1].length != 2)
      throw new Error("invalid coordinates format");
    const R = C.split(".");
    if (R.length == 2 && R[1] == 0 && R[1].length != 2)
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
      closeEnough: zr,
      toCoordinateFormat: Dr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function yt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const a = e[u], o = e[u + r], g = t.test(a) && t.test(o), c = n.test(a) && n.test(o), L = a == o;
    if (!(a == null && o == null)) {
      if (a == null || o == null)
        return !1;
      if (g || c || L)
        continue;
      return !1;
    }
  }
  return !0;
}
function Bi(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function zr(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Bi(this.decimalLatitude, Number(e[0])) && Bi(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Ur = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
hi.to = Ur;
const Fr = [
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
], qr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Zr = [
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
], jr = [
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
function Hr() {
  const i = [];
  return Fr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...qr });
  }), [...i, ...Zr, ...jr];
}
const Vr = Hr();
hi.formats = Vr.map((i) => i.verbatimCoordinates);
const Kr = hi;
function Gi(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Wi(i) {
  let e, t;
  return e = new Cr({}), {
    c() {
      Qe(e.$$.fragment);
    },
    m(n, r) {
      qe(e, n, r), t = !0;
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ze(e, n);
    }
  };
}
function Di(i) {
  let e, t, n, r, u;
  return t = new Pr({}), {
    c() {
      e = Q("button"), Qe(t.$$.fragment), x(e, "type", "button"), x(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), x(e, "class", "svelte-bz0zu3"), We(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, o) {
      te(a, e, o), qe(t, e, null), n = !0, r || (u = fe(
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
      1) && We(
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
      a && $(e), Ze(t), r = !1, u();
    }
  };
}
function Yr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, a, o = Ci(
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
    let L = Gi(i, o, c), _ = g(L);
    n.set(_, t[c] = zi(_, L));
  }
  return {
    c() {
      e = Q("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(c, L) {
      te(c, e, L);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      r = !0, u || (a = [
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
      ], u = !0);
    },
    p(c, L) {
      L[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = Ci(
        /*listFeatures*/
        c[13]
      ), It(), t = fr(t, L, g, 1, c, o, n, e, ar, zi, null, Gi), Bt());
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
      c && $(e);
      for (let L = 0; L < t.length; L += 1)
        t[L].d();
      u = !1, He(a);
    }
  };
}
function Xr(i) {
  let e, t, n, r, u, a;
  return t = new un({}), {
    c() {
      e = Q("div"), Qe(t.$$.fragment), n = Le(), r = Q("div"), u = Xe(
        /*noResultsMessage*/
        i[8]
      ), x(r, "class", "svelte-bz0zu3"), x(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, g) {
      te(o, e, g), qe(t, e, null), Z(e, n), Z(e, r), Z(r, u), a = !0;
    },
    p(o, g) {
      (!a || g[0] & /*noResultsMessage*/
      256) && _t(
        u,
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
      o && $(e), Ze(t);
    }
  };
}
function Qr(i) {
  let e = "", t;
  return {
    c() {
      t = Xe(e);
    },
    m(n, r) {
      te(n, t, r);
    },
    p: ee,
    i: ee,
    o: ee,
    d(n) {
      n && $(t);
    }
  };
}
function Jr(i) {
  let e, t, n, r, u, a, o, g, c, L, _;
  return t = new un({}), g = new ln({}), {
    c() {
      e = Q("div"), Qe(t.$$.fragment), n = Le(), r = Q("div"), u = Xe(
        /*errorMessage*/
        i[7]
      ), a = Le(), o = Q("button"), Qe(g.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(o, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(C, M) {
      te(C, e, M), qe(t, e, null), Z(e, n), Z(e, r), Z(r, u), Z(e, a), Z(e, o), qe(g, o, null), c = !0, L || (_ = fe(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), L = !0);
    },
    p(C, M) {
      (!c || M[0] & /*errorMessage*/
      128) && _t(
        u,
        /*errorMessage*/
        C[7]
      );
    },
    i(C) {
      c || (oe(t.$$.fragment, C), oe(g.$$.fragment, C), c = !0);
    },
    o(C) {
      ce(t.$$.fragment, C), ce(g.$$.fragment, C), c = !1;
    },
    d(C) {
      C && $(e), Ze(t), Ze(g), L = !1, _();
    }
  };
}
function zi(i, e) {
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
  function a() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new Tr({
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
  }), n.$on("mouseenter", u), n.$on("select", a), {
    key: i,
    first: null,
    c() {
      t = $n(), Qe(n.$$.fragment), this.first = t;
    },
    m(g, c) {
      te(g, t, c), qe(n, g, c), r = !0;
    },
    p(g, c) {
      var _;
      e = g;
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
    i(g) {
      r || (oe(n.$$.fragment, g), r = !0);
    },
    o(g) {
      ce(n.$$.fragment, g), r = !1;
    },
    d(g) {
      g && $(t), Ze(n, g);
    }
  };
}
function $r(i) {
  let e, t, n, r, u, a, o, g, c, L, _, C, M, N, P, R, k, S, O, D, H, V = !1;
  u = new Ir({}), _ = new ln({});
  let G = (
    /*abortController*/
    i[20] && Wi()
  ), s = (
    /*enableReverse*/
    i[6] === "button" && Di(i)
  );
  const l = (
    /*#slots*/
    i[70].default
  ), f = Yn(
    l,
    i,
    /*$$scope*/
    i[69],
    null
  ), m = [Jr, Qr, Xr, Yr], h = [];
  function b(p, d) {
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
  return ~(R = b(i)) && (k = h[R] = m[R](i)), {
    c() {
      e = Le(), t = Q("form"), n = Q("div"), r = Q("button"), Qe(u.$$.fragment), a = Le(), o = Q("input"), g = Le(), c = Q("div"), L = Q("button"), Qe(_.$$.fragment), C = Le(), G && G.c(), M = Le(), s && s.c(), N = Le(), f && f.c(), P = Le(), k && k.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
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
      ), x(L, "class", "svelte-bz0zu3"), x(c, "class", "clear-button-container svelte-bz0zu3"), We(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", S = Dt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), We(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(p, d) {
      te(p, e, d), te(p, t, d), Z(t, n), Z(n, r), qe(u, r, null), Z(n, a), Z(n, o), i[72](o), Ti(
        o,
        /*searchValue*/
        i[1]
      ), Z(n, g), Z(n, c), Z(c, L), qe(_, L, null), Z(c, C), G && G.m(c, null), Z(n, M), s && s.m(n, null), Z(n, N), f && f.m(n, null), Z(t, P), ~R && h[R].m(t, null), O = !0, D || (H = [
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
        fe(t, "submit", er(
          /*handleSubmit*/
          i[22]
        ))
      ], D = !0);
    },
    p(p, d) {
      (!O || d[0] & /*placeholder*/
      512) && x(
        o,
        "placeholder",
        /*placeholder*/
        p[9]
      ), (!O || d[0] & /*placeholder*/
      512) && x(
        o,
        "aria-label",
        /*placeholder*/
        p[9]
      ), d[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      p[1] && Ti(
        o,
        /*searchValue*/
        p[1]
      ), (!O || d[0] & /*clearButtonTitle*/
      8) && x(
        L,
        "title",
        /*clearButtonTitle*/
        p[3]
      ), /*abortController*/
      p[20] ? G ? d[0] & /*abortController*/
      1048576 && oe(G, 1) : (G = Wi(), G.c(), oe(G, 1), G.m(c, null)) : G && (It(), ce(G, 1, 1, () => {
        G = null;
      }), Bt()), (!O || d[0] & /*searchValue*/
      2) && We(
        c,
        "displayable",
        /*searchValue*/
        p[1] !== ""
      ), /*enableReverse*/
      p[6] === "button" ? s ? (s.p(p, d), d[0] & /*enableReverse*/
      64 && oe(s, 1)) : (s = Di(p), s.c(), oe(s, 1), s.m(n, N)) : s && (It(), ce(s, 1, 1, () => {
        s = null;
      }), Bt()), f && f.p && (!O || d[2] & /*$$scope*/
      128) && Qn(
        f,
        l,
        p,
        /*$$scope*/
        p[69],
        O ? Xn(
          l,
          /*$$scope*/
          p[69],
          d,
          null
        ) : Jn(
          /*$$scope*/
          p[69]
        ),
        null
      );
      let y = R;
      R = b(p), R === y ? ~R && h[R].p(p, d) : (k && (It(), ce(h[y], 1, 1, () => {
        h[y] = null;
      }), Bt()), ~R ? (k = h[R], k ? k.p(p, d) : (k = h[R] = m[R](p), k.c()), oe(k, 1), k.m(t, null)) : k = null), (!O || d[0] & /*className*/
      4 && S !== (S = Dt(
        /*className*/
        p[2]
      ) + " svelte-bz0zu3")) && x(t, "class", S), (!O || d[0] & /*className, collapsed, searchValue*/
      38) && We(
        t,
        "can-collapse",
        /*collapsed*/
        p[5] && /*searchValue*/
        p[1] === ""
      );
    },
    i(p) {
      O || (oe(V), oe(u.$$.fragment, p), oe(_.$$.fragment, p), oe(G), oe(s), oe(f, p), oe(k), O = !0);
    },
    o(p) {
      ce(V), ce(u.$$.fragment, p), ce(_.$$.fragment, p), ce(G), ce(s), ce(f, p), ce(k), O = !1;
    },
    d(p) {
      p && ($(e), $(t)), Ze(u), i[72](null), Ze(_), G && G.d(), s && s.d(), f && f.d(p), ~R && h[R].d(), D = !1, He(H);
    }
  };
}
function es(i, e, t) {
  let n, r, u, { $$slots: a = {}, $$scope: o } = e;
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
  let { class: c = void 0 } = e, { apiKey: L } = e, { bbox: _ = void 0 } = e, { clearButtonTitle: C = "clear" } = e, { clearOnBlur: M = !1 } = e, { clearListOnPick: N = !1 } = e, { keepListOpen: P = !1 } = e, { collapsed: R = !1 } = e, { country: k = void 0 } = e, { debounceSearch: S = 200 } = e, { enableReverse: O = "never" } = e, { errorMessage: D = "Something went wrong…" } = e, { filter: H = () => !0 } = e, { flyTo: V = !0 } = e, { fuzzyMatch: G = !0 } = e, { language: s = void 0 } = e, { limit: l = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: m = f } = e, { mapController: h = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: p = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: d = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: v = O === "always" } = e, { reverseButtonTitle: w = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: A = "full-geometry" } = e, { showPlaceType: B = "if-needed" } = e, { showResultsWhileTyping: q = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: ie = !1 } = e, { markerOnSelected: F = !0 } = e, { types: j = void 0 } = e;
  const ue = [];
  let { reverseGeocodingTypes: ze = ue } = e, { exhaustiveReverseGeocoding: tt = !1 } = e, { excludeTypes: it = !1 } = e;
  const pe = void 0;
  let { reverseGeocodingExcludeTypes: Pe = pe } = e, { zoom: he = g } = e, { apiUrl: ae = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: pi = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.3/icons/" } = e, { adjustUrlQuery: Zt = () => {
  } } = e, { adjustUrl: jt = () => {
  } } = e;
  function Ln(E) {
    Ce.focus(E);
  }
  function _n() {
    Ce.blur();
  }
  function yi(E, ne = !0, se = !1) {
    t(1, T = E), ne ? (t(15, Y = -1), vi()) : (wi(void 0, !se, se), setTimeout(() => {
      Ce.focus(), Ce.select();
    }));
  }
  function Sn() {
    t(13, U = void 0), t(14, W = void 0), t(15, Y = -1);
  }
  function xn() {
    t(64, le = []), t(14, W = void 0);
  }
  let U, le, W, bi = "", Ce, Y = -1, Ae, Ct = [], nt, lt, ut, Ht, Ue = !1;
  const Tn = /* @__PURE__ */ new Set(), Ve = sn();
  nr(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setFeatures(void 0, void 0, !1));
  });
  function vi(E) {
    if (t(17, Ue = !1), lt && (clearTimeout(lt), lt = void 0), Y > -1 && U)
      t(14, W = U[Y]), t(1, T = W.place_type[0] === "reverse" ? W.place_name : W.place_name.replace(/,.*/, "")), t(19, Ae = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (T) {
      const ne = E || !Vt(T);
      Kt(T, { exact: !0 }).then(() => {
        t(64, le = U), t(14, W = void 0), ne && Mn();
      }).catch((se) => t(19, Ae = se));
    }
  }
  function Vt(E) {
    try {
      return Kr(E, 6);
    } catch {
      return !1;
    }
  }
  async function Kt(E, { byId: ne = !1, exact: se = !1 } = {}) {
    var be, Ie, Ke;
    t(19, Ae = void 0), nt == null || nt.abort();
    const ye = new AbortController();
    t(20, nt = ye);
    try {
      const X = Vt(E), dt = new URL(ae + "/" + encodeURIComponent(X ? X.decimalLongitude + "," + X.decimalLatitude : E) + ".json"), _e = dt.searchParams;
      s !== void 0 && _e.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Qt] = (h == null ? void 0 : h.getCenterAndZoom()) ?? [];
      let Be = (be = !X || ze === ue ? j : ze) == null ? void 0 : be.map((de) => typeof de == "string" ? de : Qt === void 0 || (de[0] ?? 0) <= Qt && Qt < (de[1] ?? 1 / 0) ? de[2] : void 0).filter((de) => de !== void 0);
      Be && (Be = [...new Set(Be)], _e.set("types", Be.join(",")));
      const Li = !X || Pe === pe ? it : Pe;
      if (Li && _e.set("excludeTypes", String(Li)), _ && _e.set("bbox", _.map((de) => de.toFixed(6)).join(",")), k && _e.set("country", Array.isArray(k) ? k.join(",") : k), !ne && !X) {
        const de = await Gr(h, y, ye);
        de && _e.set("proximity", de), (se || !q) && _e.set("autocomplete", "false"), _e.set("fuzzyMatch", String(G));
      }
      const gt = m === f ? l : m;
      gt !== void 0 && gt > 1 && (Be == null ? void 0 : Be.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), X ? (gt === 1 || gt !== void 0 && (tt || (Be == null ? void 0 : Be.length) === 1)) && _e.set("limit", String(gt)) : l !== void 0 && _e.set("limit", String(l)), _e.set("key", L), Zt(_e), jt(dt);
      const Zn = dt.searchParams.get("types") === "" && dt.searchParams.get("excludeTypes") !== "true", Nt = dt.toString();
      if (Nt === bi) {
        ne ? (N && t(13, U = void 0), t(14, W = Ct[0])) : (t(13, U = Ct), ((Ie = U[Y]) == null ? void 0 : Ie.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      bi = Nt;
      let mt;
      if (Zn)
        mt = { type: "FeatureCollection", features: [] };
      else {
        const de = await fetch(Nt, { signal: ye.signal, ...J });
        if (!de.ok)
          throw new Error(await de.text());
        mt = await de.json();
      }
      Ve("response", { url: Nt, featureCollection: mt }), ne ? (N && t(13, U = void 0), t(14, W = mt.features[0]), Ct = [W]) : (t(13, U = mt.features.filter(H)), X && U.unshift({
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
      }), Ct = U, ((Ke = U[Y]) == null ? void 0 : Ke.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), X && Ce.focus());
    } catch (X) {
      if (X && typeof X == "object" && "name" in X && X.name === "AbortError")
        return;
      throw X;
    } finally {
      ye === nt && t(20, nt = void 0);
    }
  }
  function Mn() {
    var ye;
    if (!(le != null && le.length) || !V)
      return;
    const E = [180, 90, -180, -90], ne = !le.some((be) => !be.matching_text);
    let se;
    for (const be of le) {
      const Ie = ht(be);
      if (se = se === void 0 ? Ie : Ie === void 0 ? se : Math.max(se, Ie), ne || !be.matching_text)
        for (const Ke of [0, 1, 2, 3])
          E[Ke] = Math[Ke < 2 ? "min" : "max"](E[Ke], ((ye = be.bbox) == null ? void 0 : ye[Ke]) ?? be.center[Ke % 2]);
    }
    h && le.length > 0 && (W && E[0] === E[2] && E[1] === E[3] ? h.flyTo(W.center, ht(W)) : h.fitBounds(xt(E), 50, se));
  }
  function Yt() {
    !W || !h || (!W.bbox || W.bbox[0] === W.bbox[2] && W.bbox[1] === W.bbox[3] ? h.flyTo(W.center, ht(W)) : h.fitBounds(xt(W.bbox), 50, ht(W)));
  }
  function ht(E) {
    var se;
    if (!E.bbox || E.bbox[0] !== E.bbox[2] && E.bbox[1] !== E.bbox[3])
      return;
    const ne = E.id.replace(/\..*/, "");
    return (Array.isArray((se = E.properties) == null ? void 0 : se.categories) ? E.properties.categories.reduce(
      (ye, be) => {
        const Ie = he[ne + "." + be];
        return ye === void 0 ? Ie : Ie === void 0 ? ye : Math.max(ye, Ie);
      },
      void 0
    ) : void 0) ?? he[ne];
  }
  function Cn(E) {
    t(0, v = O === "always"), t(13, U = void 0), t(14, W = void 0), t(15, Y = -1), yi(E[1].toFixed(6) + ", " + Br(E[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Nn(E) {
    if (!U)
      return;
    let ne = E.key === "ArrowDown" ? 1 : E.key === "ArrowUp" ? -1 : 0;
    ne && (Ce.focus(), t(17, Ue = !0), E.preventDefault(), W && Y === -1 && t(15, Y = U.findIndex((se) => se.id === (W == null ? void 0 : W.id))), Y === (W || K ? 0 : -1) && ne === -1 && t(15, Y = U.length), t(15, Y += ne), Y >= U.length && t(15, Y = -1), Y < 0 && (W || K) && t(15, Y = 0));
  }
  function wi(E, ne = !0, se = !1) {
    if (t(19, Ae = void 0), t(14, W = void 0), t(17, Ue = !0), q || se) {
      if (lt && clearTimeout(lt), T.length < b)
        return;
      const ye = T;
      lt = window.setTimeout(
        () => {
          Kt(ye).catch((be) => t(19, Ae = be));
        },
        ne ? S : 0
      );
    } else
      t(13, U = void 0), t(19, Ae = void 0);
  }
  function Xt(E) {
    W && (W == null ? void 0 : W.id) === (E == null ? void 0 : E.id) ? Yt() : (t(14, W = E), t(1, T = E.place_name));
  }
  function Ei(E) {
    t(15, Y = E);
  }
  function kn() {
    (!K || W) && t(15, Y = -1), ie && Yt();
  }
  const On = () => Ce.focus();
  function Rn(E) {
    ni[E ? "unshift" : "push"](() => {
      Ce = E, t(18, Ce);
    });
  }
  function Pn() {
    T = this.value, t(1, T), t(17, Ue), t(31, M), t(16, ut);
  }
  const An = () => t(17, Ue = !0), In = () => t(17, Ue = !1), Bn = () => t(17, Ue = !0), Gn = () => t(14, W = void 0), Wn = () => {
    t(1, T = ""), t(14, W = void 0), Ce.focus();
  }, Dn = () => t(0, v = !v), zn = () => t(19, Ae = void 0), Un = (E) => Ei(E), Fn = (E) => Xt(E), qn = () => {
  };
  return i.$$set = (E) => {
    "class" in E && t(2, c = E.class), "apiKey" in E && t(29, L = E.apiKey), "bbox" in E && t(30, _ = E.bbox), "clearButtonTitle" in E && t(3, C = E.clearButtonTitle), "clearOnBlur" in E && t(31, M = E.clearOnBlur), "clearListOnPick" in E && t(32, N = E.clearListOnPick), "keepListOpen" in E && t(4, P = E.keepListOpen), "collapsed" in E && t(5, R = E.collapsed), "country" in E && t(33, k = E.country), "debounceSearch" in E && t(34, S = E.debounceSearch), "enableReverse" in E && t(6, O = E.enableReverse), "errorMessage" in E && t(7, D = E.errorMessage), "filter" in E && t(35, H = E.filter), "flyTo" in E && t(36, V = E.flyTo), "fuzzyMatch" in E && t(37, G = E.fuzzyMatch), "language" in E && t(38, s = E.language), "limit" in E && t(39, l = E.limit), "reverseGeocodingLimit" in E && t(40, m = E.reverseGeocodingLimit), "mapController" in E && t(41, h = E.mapController), "minLength" in E && t(42, b = E.minLength), "noResultsMessage" in E && t(8, p = E.noResultsMessage), "placeholder" in E && t(9, d = E.placeholder), "proximity" in E && t(43, y = E.proximity), "reverseActive" in E && t(0, v = E.reverseActive), "reverseButtonTitle" in E && t(10, w = E.reverseButtonTitle), "searchValue" in E && t(1, T = E.searchValue), "pickedResultStyle" in E && t(44, A = E.pickedResultStyle), "showPlaceType" in E && t(11, B = E.showPlaceType), "showResultsWhileTyping" in E && t(45, q = E.showResultsWhileTyping), "selectFirst" in E && t(46, K = E.selectFirst), "flyToSelected" in E && t(47, ie = E.flyToSelected), "markerOnSelected" in E && t(48, F = E.markerOnSelected), "types" in E && t(49, j = E.types), "reverseGeocodingTypes" in E && t(50, ze = E.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in E && t(51, tt = E.exhaustiveReverseGeocoding), "excludeTypes" in E && t(52, it = E.excludeTypes), "reverseGeocodingExcludeTypes" in E && t(53, Pe = E.reverseGeocodingExcludeTypes), "zoom" in E && t(54, he = E.zoom), "apiUrl" in E && t(55, ae = E.apiUrl), "fetchParameters" in E && t(56, J = E.fetchParameters), "iconsBaseUrl" in E && t(12, pi = E.iconsBaseUrl), "adjustUrlQuery" in E && t(57, Zt = E.adjustUrlQuery), "adjustUrl" in E && t(58, jt = E.adjustUrl), "$$scope" in E && t(69, o = E.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, v = O === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && A !== "marker-only" && W && !W.address && W.geometry.type === "Point" && W.place_type[0] !== "reverse" && Kt(W.id, { byId: !0 }).catch((E) => t(19, Ae = E)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (h && W && W.id !== Ht && V && (Yt(), N && t(13, U = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, Ht = W == null ? void 0 : W.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ut = Ue), M && !ut && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < b && (t(13, U = void 0), t(19, Ae = void 0), t(64, le = U)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && U != null && U.length && Y == -1 && !W && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== U && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && h && h.setEventHandler((E) => {
      switch (E.type) {
        case "mapClick":
          v && Cn(E.coordinates);
          break;
        case "markerClick":
          {
            const ne = U == null ? void 0 : U.find((se) => se.id === E.id);
            ne && Xt(ne);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = ut ? (U == null ? void 0 : U.findIndex((ne) => ne.id === E.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = U == null ? void 0 : U[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && h && r && V && ie && h.flyTo(r.center, ht(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = A === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (F || h == null || h.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && h && F && !le && (h.setFeatures(r ? [r] : void 0, W, n), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && h && h.setFeatures(le, W, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le && h && h.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && h) {
      const E = Vt(T);
      h.setReverseMarker(E ? [E.decimalLongitude, E.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && Ve("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && Ve("pick", { feature: W }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(U != null && U.length) && (ut || P)), i.$$.dirty[2] & /*optionsVisible*/
    32 && Ve("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && Ve("featureslisted", { features: U }), i.$$.dirty[2] & /*markedFeatures*/
    4 && Ve("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && Ve("reversetoggle", { reverse: v }), i.$$.dirty[0] & /*searchValue*/
    2 && Ve("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && h && h.indicateReverse(v);
  }, [
    v,
    T,
    c,
    C,
    P,
    R,
    O,
    D,
    p,
    d,
    w,
    B,
    pi,
    U,
    W,
    Y,
    ut,
    Ue,
    Ce,
    Ae,
    nt,
    Tn,
    vi,
    Nn,
    wi,
    Xt,
    Ei,
    kn,
    g,
    L,
    _,
    M,
    N,
    k,
    S,
    H,
    V,
    G,
    s,
    l,
    m,
    h,
    b,
    y,
    A,
    q,
    K,
    ie,
    F,
    j,
    ze,
    tt,
    it,
    Pe,
    he,
    ae,
    J,
    Zt,
    jt,
    Ln,
    _n,
    yi,
    Sn,
    xn,
    le,
    Ht,
    r,
    u,
    n,
    o,
    a,
    On,
    Rn,
    Pn,
    An,
    In,
    Bn,
    Gn,
    Wn,
    Dn,
    zn,
    Un,
    Fn,
    qn
  ];
}
let ts = class extends et {
  constructor(e) {
    super(), $e(
      this,
      e,
      es,
      $r,
      Je,
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
function Tt(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function di(i, e, t = {}) {
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
  return Tt({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function Mt(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function fn(i, e, t = {}) {
  return Tt({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function cn(i, e, t) {
  if (i !== null)
    for (var n, r, u, a, o, g, c, L = 0, _ = 0, C, M = i.type, N = M === "FeatureCollection", P = M === "Feature", R = N ? i.features.length : 1, k = 0; k < R; k++) {
      c = N ? i.features[k].geometry : P ? i.geometry : i, C = c ? c.type === "GeometryCollection" : !1, o = C ? c.geometries.length : 1;
      for (var S = 0; S < o; S++) {
        var O = 0, D = 0;
        if (a = C ? c.geometries[S] : c, a !== null) {
          g = a.coordinates;
          var H = a.type;
          switch (L = 0, H) {
            case null:
              break;
            case "Point":
              if (e(
                g,
                _,
                k,
                O,
                D
              ) === !1)
                return !1;
              _++, O++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < g.length; n++) {
                if (e(
                  g[n],
                  _,
                  k,
                  O,
                  D
                ) === !1)
                  return !1;
                _++, H === "MultiPoint" && O++;
              }
              H === "LineString" && O++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < g.length; n++) {
                for (r = 0; r < g[n].length - L; r++) {
                  if (e(
                    g[n][r],
                    _,
                    k,
                    O,
                    D
                  ) === !1)
                    return !1;
                  _++;
                }
                H === "MultiLineString" && O++, H === "Polygon" && D++;
              }
              H === "Polygon" && O++;
              break;
            case "MultiPolygon":
              for (n = 0; n < g.length; n++) {
                for (D = 0, r = 0; r < g[n].length; r++) {
                  for (u = 0; u < g[n][r].length - L; u++) {
                    if (e(
                      g[n][r][u],
                      _,
                      k,
                      O,
                      D
                    ) === !1)
                      return !1;
                    _++;
                  }
                  D++;
                }
                O++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (cn(a.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function gi(i, e) {
  var t, n, r, u, a, o, g, c, L, _, C = 0, M = i.type === "FeatureCollection", N = i.type === "Feature", P = M ? i.features.length : 1;
  for (t = 0; t < P; t++) {
    for (o = M ? i.features[t].geometry : N ? i.geometry : i, c = M ? i.features[t].properties : N ? i.properties : {}, L = M ? i.features[t].bbox : N ? i.bbox : void 0, _ = M ? i.features[t].id : N ? i.id : void 0, g = o ? o.type === "GeometryCollection" : !1, a = g ? o.geometries.length : 1, r = 0; r < a; r++) {
      if (u = g ? o.geometries[r] : o, u === null) {
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
            L,
            _
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
function is(i, e) {
  gi(i, function(t, n, r, u, a) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Tt(t, r, { bbox: u, id: a }),
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
      var L = t.coordinates[c], _ = {
        type: g,
        coordinates: L
      };
      if (e(Tt(_, r), n, c) === !1)
        return !1;
    }
  });
}
function ns(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return cn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var li = ns;
function rs(i) {
  if (!i)
    throw new Error("geojson is required");
  switch (i.type) {
    case "Feature":
      return hn(i);
    case "FeatureCollection":
      return ss(i);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return mi(i);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function hn(i) {
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
  }), e.properties = dn(i.properties), i.geometry == null ? e.geometry = null : e.geometry = mi(i.geometry), e;
}
function dn(i) {
  const e = {};
  return i && Object.keys(i).forEach((t) => {
    const n = i[t];
    typeof n == "object" ? n === null ? e[t] = null : Array.isArray(n) ? e[t] = n.map((r) => r) : e[t] = dn(n) : e[t] = n;
  }), e;
}
function ss(i) {
  const e = { type: "FeatureCollection" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "features":
        return;
      default:
        e[t] = i[t];
    }
  }), e.features = i.features.map((t) => hn(t)), e;
}
function mi(i) {
  const e = { type: i.type };
  return i.bbox && (e.bbox = i.bbox), i.type === "GeometryCollection" ? (e.geometries = i.geometries.map((t) => mi(t)), e) : (e.coordinates = gn(i.coordinates), e);
}
function gn(i) {
  const e = i;
  return typeof e[0] != "object" ? e.slice() : e.map((t) => gn(t));
}
var os = rs, ls = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ti = Math.ceil, Te = Math.floor, me = "[BigNumber Error] ", Ui = me + "Number primitive has more than 15 significant digits: ", Ne = 1e14, z = 14, Fi = 9007199254740991, ii = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ye = 1e7, we = 1e9;
function mn(i) {
  var e, t, n, r = S.prototype = { constructor: S, toString: null, valueOf: null }, u = new S(1), a = 20, o = 4, g = -7, c = 21, L = -1e7, _ = 1e7, C = !1, M = 1, N = 0, P = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, R = "0123456789abcdefghijklmnopqrstuvwxyz", k = !0;
  function S(s, l) {
    var f, m, h, b, p, d, y, v, w = this;
    if (!(w instanceof S)) return new S(s, l);
    if (l == null) {
      if (s && s._isBigNumber === !0) {
        w.s = s.s, !s.c || s.e > _ ? w.c = w.e = null : s.e < L ? w.c = [w.e = 0] : (w.e = s.e, w.c = s.c.slice());
        return;
      }
      if ((d = typeof s == "number") && s * 0 == 0) {
        if (w.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (b = 0, p = s; p >= 10; p /= 10, b++) ;
          b > _ ? w.c = w.e = null : (w.e = b, w.c = [s]);
          return;
        }
        v = String(s);
      } else {
        if (!ls.test(v = String(s))) return n(w, v, d);
        w.s = v.charCodeAt(0) == 45 ? (v = v.slice(1), -1) : 1;
      }
      (b = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (p = v.search(/e/i)) > 0 ? (b < 0 && (b = p), b += +v.slice(p + 1), v = v.substring(0, p)) : b < 0 && (b = v.length);
    } else {
      if (re(l, 2, R.length, "Base"), l == 10 && k)
        return w = new S(s), V(w, a + w.e + 1, o);
      if (v = String(s), d = typeof s == "number") {
        if (s * 0 != 0) return n(w, v, d, l);
        if (w.s = 1 / s < 0 ? (v = v.slice(1), -1) : 1, S.DEBUG && v.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Ui + s);
      } else
        w.s = v.charCodeAt(0) === 45 ? (v = v.slice(1), -1) : 1;
      for (f = R.slice(0, l), b = p = 0, y = v.length; p < y; p++)
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
          return n(w, String(s), d, l);
        }
      d = !1, v = t(v, l, 10, w.s), (b = v.indexOf(".")) > -1 ? v = v.replace(".", "") : b = v.length;
    }
    for (p = 0; v.charCodeAt(p) === 48; p++) ;
    for (y = v.length; v.charCodeAt(--y) === 48; ) ;
    if (v = v.slice(p, ++y)) {
      if (y -= p, d && S.DEBUG && y > 15 && (s > Fi || s !== Te(s)))
        throw Error(Ui + w.s * s);
      if ((b = b - p - 1) > _)
        w.c = w.e = null;
      else if (b < L)
        w.c = [w.e = 0];
      else {
        if (w.e = b, w.c = [], p = (b + 1) % z, b < 0 && (p += z), p < y) {
          for (p && w.c.push(+v.slice(0, p)), y -= z; p < y; )
            w.c.push(+v.slice(p, p += z));
          p = z - (v = v.slice(p)).length;
        } else
          p -= y;
        for (; p--; v += "0") ;
        w.c.push(+v);
      }
    } else
      w.c = [w.e = 0];
  }
  S.clone = mn, S.ROUND_UP = 0, S.ROUND_DOWN = 1, S.ROUND_CEIL = 2, S.ROUND_FLOOR = 3, S.ROUND_HALF_UP = 4, S.ROUND_HALF_DOWN = 5, S.ROUND_HALF_EVEN = 6, S.ROUND_HALF_CEIL = 7, S.ROUND_HALF_FLOOR = 8, S.EUCLID = 9, S.config = S.set = function(s) {
    var l, f;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(l = "DECIMAL_PLACES") && (f = s[l], re(f, 0, we, l), a = f), s.hasOwnProperty(l = "ROUNDING_MODE") && (f = s[l], re(f, 0, 8, l), o = f), s.hasOwnProperty(l = "EXPONENTIAL_AT") && (f = s[l], f && f.pop ? (re(f[0], -1e9, 0, l), re(f[1], 0, we, l), g = f[0], c = f[1]) : (re(f, -1e9, we, l), g = -(c = f < 0 ? -f : f))), s.hasOwnProperty(l = "RANGE"))
          if (f = s[l], f && f.pop)
            re(f[0], -1e9, -1, l), re(f[1], 1, we, l), L = f[0], _ = f[1];
          else if (re(f, -1e9, we, l), f)
            L = -(_ = f < 0 ? -f : f);
          else
            throw Error(me + l + " cannot be zero: " + f);
        if (s.hasOwnProperty(l = "CRYPTO"))
          if (f = s[l], f === !!f)
            if (f)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                C = f;
              else
                throw C = !f, Error(me + "crypto unavailable");
            else
              C = f;
          else
            throw Error(me + l + " not true or false: " + f);
        if (s.hasOwnProperty(l = "MODULO_MODE") && (f = s[l], re(f, 0, 9, l), M = f), s.hasOwnProperty(l = "POW_PRECISION") && (f = s[l], re(f, 0, we, l), N = f), s.hasOwnProperty(l = "FORMAT"))
          if (f = s[l], typeof f == "object") P = f;
          else throw Error(me + l + " not an object: " + f);
        if (s.hasOwnProperty(l = "ALPHABET"))
          if (f = s[l], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            k = f.slice(0, 10) == "0123456789", R = f;
          else
            throw Error(me + l + " invalid: " + f);
      } else
        throw Error(me + "Object expected: " + s);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, c],
      RANGE: [L, _],
      CRYPTO: C,
      MODULO_MODE: M,
      POW_PRECISION: N,
      FORMAT: P,
      ALPHABET: R
    };
  }, S.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!S.DEBUG) return !0;
    var l, f, m = s.c, h = s.e, b = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((b === 1 || b === -1) && h >= -1e9 && h <= we && h === Te(h)) {
        if (m[0] === 0) {
          if (h === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (h + 1) % z, l < 1 && (l += z), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (f = m[l], f < 0 || f >= Ne || f !== Te(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (m === null && h === null && (b === null || b === 1 || b === -1))
      return !0;
    throw Error(me + "Invalid BigNumber: " + s);
  }, S.maximum = S.max = function() {
    return D(arguments, -1);
  }, S.minimum = S.min = function() {
    return D(arguments, 1);
  }, S.random = function() {
    var s = 9007199254740992, l = Math.random() * s & 2097151 ? function() {
      return Te(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var m, h, b, p, d, y = 0, v = [], w = new S(u);
      if (f == null ? f = a : re(f, 0, we), p = ti(f / z), C)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(p *= 2)); y < p; )
            d = m[y] * 131072 + (m[y + 1] >>> 11), d >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), m[y] = h[0], m[y + 1] = h[1]) : (v.push(d % 1e14), y += 2);
          y = p / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(p *= 7); y < p; )
            d = (m[y] & 31) * 281474976710656 + m[y + 1] * 1099511627776 + m[y + 2] * 4294967296 + m[y + 3] * 16777216 + (m[y + 4] << 16) + (m[y + 5] << 8) + m[y + 6], d >= 9e15 ? crypto.randomBytes(7).copy(m, y) : (v.push(d % 1e14), y += 7);
          y = p / 7;
        } else
          throw C = !1, Error(me + "crypto unavailable");
      if (!C)
        for (; y < p; )
          d = l(), d < 9e15 && (v[y++] = d % 1e14);
      for (p = v[--y], f %= z, p && f && (d = ii[z - f], v[y] = Te(p / d) * d); v[y] === 0; v.pop(), y--) ;
      if (y < 0)
        v = [b = 0];
      else {
        for (b = -1; v[0] === 0; v.splice(0, 1), b -= z) ;
        for (y = 1, d = v[0]; d >= 10; d /= 10, y++) ;
        y < z && (b -= z - y);
      }
      return w.e = b, w.c = v, w;
    };
  }(), S.sum = function() {
    for (var s = 1, l = arguments, f = new S(l[0]); s < l.length; ) f = f.plus(l[s++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function l(f, m, h, b) {
      for (var p, d = [0], y, v = 0, w = f.length; v < w; ) {
        for (y = d.length; y--; d[y] *= m) ;
        for (d[0] += b.indexOf(f.charAt(v++)), p = 0; p < d.length; p++)
          d[p] > h - 1 && (d[p + 1] == null && (d[p + 1] = 0), d[p + 1] += d[p] / h | 0, d[p] %= h);
      }
      return d.reverse();
    }
    return function(f, m, h, b, p) {
      var d, y, v, w, T, A, B, q, K = f.indexOf("."), ie = a, F = o;
      for (K >= 0 && (w = N, N = 0, f = f.replace(".", ""), q = new S(m), A = q.pow(f.length - K), N = w, q.c = l(
        Fe(xe(A.c), A.e, "0"),
        10,
        h,
        s
      ), q.e = q.c.length), B = l(f, m, h, p ? (d = R, s) : (d = s, R)), v = w = B.length; B[--w] == 0; B.pop()) ;
      if (!B[0]) return d.charAt(0);
      if (K < 0 ? --v : (A.c = B, A.e = v, A.s = b, A = e(A, q, ie, F, h), B = A.c, T = A.r, v = A.e), y = v + ie + 1, K = B[y], w = h / 2, T = T || y < 0 || B[y + 1] != null, T = F < 4 ? (K != null || T) && (F == 0 || F == (A.s < 0 ? 3 : 2)) : K > w || K == w && (F == 4 || T || F == 6 && B[y - 1] & 1 || F == (A.s < 0 ? 8 : 7)), y < 1 || !B[0])
        f = T ? Fe(d.charAt(1), -ie, d.charAt(0)) : d.charAt(0);
      else {
        if (B.length = y, T)
          for (--h; ++B[--y] > h; )
            B[y] = 0, y || (++v, B = [1].concat(B));
        for (w = B.length; !B[--w]; ) ;
        for (K = 0, f = ""; K <= w; f += d.charAt(B[K++])) ;
        f = Fe(f, v, d.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, h, b) {
      var p, d, y, v, w = 0, T = m.length, A = h % Ye, B = h / Ye | 0;
      for (m = m.slice(); T--; )
        y = m[T] % Ye, v = m[T] / Ye | 0, p = B * y + v * A, d = A * y + p % Ye * Ye + w, w = (d / b | 0) + (p / Ye | 0) + B * v, m[T] = d % b;
      return w && (m = [w].concat(m)), m;
    }
    function l(m, h, b, p) {
      var d, y;
      if (b != p)
        y = b > p ? 1 : -1;
      else
        for (d = y = 0; d < b; d++)
          if (m[d] != h[d]) {
            y = m[d] > h[d] ? 1 : -1;
            break;
          }
      return y;
    }
    function f(m, h, b, p) {
      for (var d = 0; b--; )
        m[b] -= d, d = m[b] < h[b] ? 1 : 0, m[b] = d * p + m[b] - h[b];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, h, b, p, d) {
      var y, v, w, T, A, B, q, K, ie, F, j, ue, ze, tt, it, pe, Pe, he = m.s == h.s ? 1 : -1, ae = m.c, J = h.c;
      if (!ae || !ae[0] || !J || !J[0])
        return new S(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !h.s || (ae ? J && ae[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            ae && ae[0] == 0 || !J ? he * 0 : he / 0
          )
        );
      for (K = new S(he), ie = K.c = [], v = m.e - h.e, he = b + v + 1, d || (d = Ne, v = Me(m.e / z) - Me(h.e / z), he = he / z | 0), w = 0; J[w] == (ae[w] || 0); w++) ;
      if (J[w] > (ae[w] || 0) && v--, he < 0)
        ie.push(1), T = !0;
      else {
        for (tt = ae.length, pe = J.length, w = 0, he += 2, A = Te(d / (J[0] + 1)), A > 1 && (J = s(J, A, d), ae = s(ae, A, d), pe = J.length, tt = ae.length), ze = pe, F = ae.slice(0, pe), j = F.length; j < pe; F[j++] = 0) ;
        Pe = J.slice(), Pe = [0].concat(Pe), it = J[0], J[1] >= d / 2 && it++;
        do {
          if (A = 0, y = l(J, F, pe, j), y < 0) {
            if (ue = F[0], pe != j && (ue = ue * d + (F[1] || 0)), A = Te(ue / it), A > 1)
              for (A >= d && (A = d - 1), B = s(J, A, d), q = B.length, j = F.length; l(B, F, q, j) == 1; )
                A--, f(B, pe < q ? Pe : J, q, d), q = B.length, y = 1;
            else
              A == 0 && (y = A = 1), B = J.slice(), q = B.length;
            if (q < j && (B = [0].concat(B)), f(F, B, j, d), j = F.length, y == -1)
              for (; l(J, F, pe, j) < 1; )
                A++, f(F, pe < j ? Pe : J, j, d), j = F.length;
          } else y === 0 && (A++, F = [0]);
          ie[w++] = A, F[0] ? F[j++] = ae[ze] || 0 : (F = [ae[ze]], j = 1);
        } while ((ze++ < tt || F[0] != null) && he--);
        T = F[0] != null, ie[0] || ie.splice(0, 1);
      }
      if (d == Ne) {
        for (w = 1, he = ie[0]; he >= 10; he /= 10, w++) ;
        V(K, b + (K.e = w + v * z - 1) + 1, p, T);
      } else
        K.e = v, K.r = +T;
      return K;
    };
  }();
  function O(s, l, f, m) {
    var h, b, p, d, y;
    if (f == null ? f = o : re(f, 0, 8), !s.c) return s.toString();
    if (h = s.c[0], p = s.e, l == null)
      y = xe(s.c), y = m == 1 || m == 2 && (p <= g || p >= c) ? Pt(y, p) : Fe(y, p, "0");
    else if (s = V(new S(s), l, f), b = s.e, y = xe(s.c), d = y.length, m == 1 || m == 2 && (l <= b || b <= g)) {
      for (; d < l; y += "0", d++) ;
      y = Pt(y, b);
    } else if (l -= p, y = Fe(y, b, "0"), b + 1 > d) {
      if (--l > 0) for (y += "."; l--; y += "0") ;
    } else if (l += b - d, l > 0)
      for (b + 1 == d && (y += "."); l--; y += "0") ;
    return s.s < 0 && h ? "-" + y : y;
  }
  function D(s, l) {
    for (var f, m, h = 1, b = new S(s[0]); h < s.length; h++)
      m = new S(s[h]), (!m.s || (f = rt(b, m)) === l || f === 0 && b.s === l) && (b = m);
    return b;
  }
  function H(s, l, f) {
    for (var m = 1, h = l.length; !l[--h]; l.pop()) ;
    for (h = l[0]; h >= 10; h /= 10, m++) ;
    return (f = m + f * z - 1) > _ ? s.c = s.e = null : f < L ? s.c = [s.e = 0] : (s.e = f, s.c = l), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, f = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, h = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(b, p, d, y) {
      var v, w = d ? p : p.replace(h, "");
      if (m.test(w))
        b.s = isNaN(w) ? null : w < 0 ? -1 : 1;
      else {
        if (!d && (w = w.replace(s, function(T, A, B) {
          return v = (B = B.toLowerCase()) == "x" ? 16 : B == "b" ? 2 : 8, !y || y == v ? A : T;
        }), y && (v = y, w = w.replace(l, "$1").replace(f, "0.$1")), p != w))
          return new S(w, v);
        if (S.DEBUG)
          throw Error(me + "Not a" + (y ? " base " + y : "") + " number: " + p);
        b.s = null;
      }
      b.c = b.e = null;
    };
  }();
  function V(s, l, f, m) {
    var h, b, p, d, y, v, w, T = s.c, A = ii;
    if (T) {
      e: {
        for (h = 1, d = T[0]; d >= 10; d /= 10, h++) ;
        if (b = l - h, b < 0)
          b += z, p = l, y = T[v = 0], w = Te(y / A[h - p - 1] % 10);
        else if (v = ti((b + 1) / z), v >= T.length)
          if (m) {
            for (; T.length <= v; T.push(0)) ;
            y = w = 0, h = 1, b %= z, p = b - z + 1;
          } else
            break e;
        else {
          for (y = d = T[v], h = 1; d >= 10; d /= 10, h++) ;
          b %= z, p = b - z + h, w = p < 0 ? 0 : Te(y / A[h - p - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[v + 1] != null || (p < 0 ? y : y % A[h - p - 1]), m = f < 4 ? (w || m) && (f == 0 || f == (s.s < 0 ? 3 : 2)) : w > 5 || w == 5 && (f == 4 || m || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (b > 0 ? p > 0 ? y / A[h - p] : 0 : T[v - 1]) % 10 & 1 || f == (s.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, m ? (l -= s.e + 1, T[0] = A[(z - l % z) % z], s.e = -l || 0) : T[0] = s.e = 0, s;
        if (b == 0 ? (T.length = v, d = 1, v--) : (T.length = v + 1, d = A[z - b], T[v] = p > 0 ? Te(y / A[h - p] % A[p]) * d : 0), m)
          for (; ; )
            if (v == 0) {
              for (b = 1, p = T[0]; p >= 10; p /= 10, b++) ;
              for (p = T[0] += d, d = 1; p >= 10; p /= 10, d++) ;
              b != d && (s.e++, T[0] == Ne && (T[0] = 1));
              break;
            } else {
              if (T[v] += d, T[v] != Ne) break;
              T[v--] = 0, d = 1;
            }
        for (b = T.length; T[--b] === 0; T.pop()) ;
      }
      s.e > _ ? s.c = s.e = null : s.e < L && (s.c = [s.e = 0]);
    }
    return s;
  }
  function G(s) {
    var l, f = s.e;
    return f === null ? s.toString() : (l = xe(s.c), l = f <= g || f >= c ? Pt(l, f) : Fe(l, f, "0"), s.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new S(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, l) {
    return rt(this, new S(s, l));
  }, r.decimalPlaces = r.dp = function(s, l) {
    var f, m, h, b = this;
    if (s != null)
      return re(s, 0, we), l == null ? l = o : re(l, 0, 8), V(new S(b), s + b.e + 1, l);
    if (!(f = b.c)) return null;
    if (m = ((h = f.length - 1) - Me(this.e / z)) * z, h = f[h]) for (; h % 10 == 0; h /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, l) {
    return e(this, new S(s, l), a, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, l) {
    return e(this, new S(s, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, l) {
    var f, m, h, b, p, d, y, v, w, T = this;
    if (s = new S(s), s.c && !s.isInteger())
      throw Error(me + "Exponent not an integer: " + G(s));
    if (l != null && (l = new S(l)), d = s.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !s.c || !s.c[0])
      return w = new S(Math.pow(+G(T), d ? s.s * (2 - Rt(s)) : +G(s))), l ? w.mod(l) : w;
    if (y = s.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new S(NaN);
      m = !y && T.isInteger() && l.isInteger(), m && (T = T.mod(l));
    } else {
      if (s.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || d && T.c[1] >= 24e7 : T.c[0] < 8e13 || d && T.c[0] <= 9999975e7)))
        return b = T.s < 0 && Rt(s) ? -0 : 0, T.e > -1 && (b = 1 / b), new S(y ? 1 / b : b);
      N && (b = ti(N / z + 2));
    }
    for (d ? (f = new S(0.5), y && (s.s = 1), v = Rt(s)) : (h = Math.abs(+G(s)), v = h % 2), w = new S(u); ; ) {
      if (v) {
        if (w = w.times(T), !w.c) break;
        b ? w.c.length > b && (w.c.length = b) : m && (w = w.mod(l));
      }
      if (h) {
        if (h = Te(h / 2), h === 0) break;
        v = h % 2;
      } else if (s = s.times(f), V(s, s.e + 1, 1), s.e > 14)
        v = Rt(s);
      else {
        if (h = +G(s), h === 0) break;
        v = h % 2;
      }
      T = T.times(T), b ? T.c && T.c.length > b && (T.c.length = b) : m && (T = T.mod(l));
    }
    return m ? w : (y && (w = u.div(w)), l ? w.mod(l) : b ? V(w, N, o, p) : w);
  }, r.integerValue = function(s) {
    var l = new S(this);
    return s == null ? s = o : re(s, 0, 8), V(l, l.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, l) {
    return rt(this, new S(s, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, l) {
    return rt(this, new S(s, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, l) {
    return (l = rt(this, new S(s, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Me(this.e / z) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, l) {
    return rt(this, new S(s, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, l) {
    return (l = rt(this, new S(s, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, l) {
    var f, m, h, b, p = this, d = p.s;
    if (s = new S(s, l), l = s.s, !d || !l) return new S(NaN);
    if (d != l)
      return s.s = -l, p.plus(s);
    var y = p.e / z, v = s.e / z, w = p.c, T = s.c;
    if (!y || !v) {
      if (!w || !T) return w ? (s.s = -l, s) : new S(T ? p : NaN);
      if (!w[0] || !T[0])
        return T[0] ? (s.s = -l, s) : new S(w[0] ? p : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (y = Me(y), v = Me(v), w = w.slice(), d = y - v) {
      for ((b = d < 0) ? (d = -d, h = w) : (v = y, h = T), h.reverse(), l = d; l--; h.push(0)) ;
      h.reverse();
    } else
      for (m = (b = (d = w.length) < (l = T.length)) ? d : l, d = l = 0; l < m; l++)
        if (w[l] != T[l]) {
          b = w[l] < T[l];
          break;
        }
    if (b && (h = w, w = T, T = h, s.s = -s.s), l = (m = T.length) - (f = w.length), l > 0) for (; l--; w[f++] = 0) ;
    for (l = Ne - 1; m > d; ) {
      if (w[--m] < T[m]) {
        for (f = m; f && !w[--f]; w[f] = l) ;
        --w[f], w[m] += Ne;
      }
      w[m] -= T[m];
    }
    for (; w[0] == 0; w.splice(0, 1), --v) ;
    return w[0] ? H(s, w, v) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, l) {
    var f, m, h = this;
    return s = new S(s, l), !h.c || !s.s || s.c && !s.c[0] ? new S(NaN) : !s.c || h.c && !h.c[0] ? new S(h) : (M == 9 ? (m = s.s, s.s = 1, f = e(h, s, 0, 3), s.s = m, f.s *= m) : f = e(h, s, 0, M), s = h.minus(f.times(s)), !s.c[0] && M == 1 && (s.s = h.s), s);
  }, r.multipliedBy = r.times = function(s, l) {
    var f, m, h, b, p, d, y, v, w, T, A, B, q, K, ie, F = this, j = F.c, ue = (s = new S(s, l)).c;
    if (!j || !ue || !j[0] || !ue[0])
      return !F.s || !s.s || j && !j[0] && !ue || ue && !ue[0] && !j ? s.c = s.e = s.s = null : (s.s *= F.s, !j || !ue ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Me(F.e / z) + Me(s.e / z), s.s *= F.s, y = j.length, T = ue.length, y < T && (q = j, j = ue, ue = q, h = y, y = T, T = h), h = y + T, q = []; h--; q.push(0)) ;
    for (K = Ne, ie = Ye, h = T; --h >= 0; ) {
      for (f = 0, A = ue[h] % ie, B = ue[h] / ie | 0, p = y, b = h + p; b > h; )
        v = j[--p] % ie, w = j[p] / ie | 0, d = B * v + w * A, v = A * v + d % ie * ie + q[b] + f, f = (v / K | 0) + (d / ie | 0) + B * w, q[b--] = v % K;
      q[b] = f;
    }
    return f ? ++m : q.splice(0, 1), H(s, q, m);
  }, r.negated = function() {
    var s = new S(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, l) {
    var f, m = this, h = m.s;
    if (s = new S(s, l), l = s.s, !h || !l) return new S(NaN);
    if (h != l)
      return s.s = -l, m.minus(s);
    var b = m.e / z, p = s.e / z, d = m.c, y = s.c;
    if (!b || !p) {
      if (!d || !y) return new S(h / 0);
      if (!d[0] || !y[0]) return y[0] ? s : new S(d[0] ? m : h * 0);
    }
    if (b = Me(b), p = Me(p), d = d.slice(), h = b - p) {
      for (h > 0 ? (p = b, f = y) : (h = -h, f = d), f.reverse(); h--; f.push(0)) ;
      f.reverse();
    }
    for (h = d.length, l = y.length, h - l < 0 && (f = y, y = d, d = f, l = h), h = 0; l; )
      h = (d[--l] = d[l] + y[l] + h) / Ne | 0, d[l] = Ne === d[l] ? 0 : d[l] % Ne;
    return h && (d = [h].concat(d), ++p), H(s, d, p);
  }, r.precision = r.sd = function(s, l) {
    var f, m, h, b = this;
    if (s != null && s !== !!s)
      return re(s, 1, we), l == null ? l = o : re(l, 0, 8), V(new S(b), s, l);
    if (!(f = b.c)) return null;
    if (h = f.length - 1, m = h * z + 1, h = f[h]) {
      for (; h % 10 == 0; h /= 10, m--) ;
      for (h = f[0]; h >= 10; h /= 10, m++) ;
    }
    return s && b.e + 1 > m && (m = b.e + 1), m;
  }, r.shiftedBy = function(s) {
    return re(s, -9007199254740991, Fi), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, l, f, m, h, b = this, p = b.c, d = b.s, y = b.e, v = a + 4, w = new S("0.5");
    if (d !== 1 || !p || !p[0])
      return new S(!d || d < 0 && (!p || p[0]) ? NaN : p ? b : 1 / 0);
    if (d = Math.sqrt(+G(b)), d == 0 || d == 1 / 0 ? (l = xe(p), (l.length + y) % 2 == 0 && (l += "0"), d = Math.sqrt(+l), y = Me((y + 1) / 2) - (y < 0 || y % 2), d == 1 / 0 ? l = "5e" + y : (l = d.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + y), f = new S(l)) : f = new S(d + ""), f.c[0]) {
      for (y = f.e, d = y + v, d < 3 && (d = 0); ; )
        if (h = f, f = w.times(h.plus(e(b, h, v, 1))), xe(h.c).slice(0, d) === (l = xe(f.c)).slice(0, d))
          if (f.e < y && --d, l = l.slice(d - 3, d + 1), l == "9999" || !m && l == "4999") {
            if (!m && (V(h, h.e + a + 2, 0), h.times(h).eq(b))) {
              f = h;
              break;
            }
            v += 4, d += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (V(f, f.e + a + 2, 1), s = !f.times(f).eq(b));
            break;
          }
    }
    return V(f, f.e + a + 1, o, s);
  }, r.toExponential = function(s, l) {
    return s != null && (re(s, 0, we), s++), O(this, s, l, 1);
  }, r.toFixed = function(s, l) {
    return s != null && (re(s, 0, we), s = s + this.e + 1), O(this, s, l);
  }, r.toFormat = function(s, l, f) {
    var m, h = this;
    if (f == null)
      s != null && l && typeof l == "object" ? (f = l, l = null) : s && typeof s == "object" ? (f = s, s = l = null) : f = P;
    else if (typeof f != "object")
      throw Error(me + "Argument not an object: " + f);
    if (m = h.toFixed(s, l), h.c) {
      var b, p = m.split("."), d = +f.groupSize, y = +f.secondaryGroupSize, v = f.groupSeparator || "", w = p[0], T = p[1], A = h.s < 0, B = A ? w.slice(1) : w, q = B.length;
      if (y && (b = d, d = y, y = b, q -= b), d > 0 && q > 0) {
        for (b = q % d || d, w = B.substr(0, b); b < q; b += d) w += v + B.substr(b, d);
        y > 0 && (w += v + B.slice(b)), A && (w = "-" + w);
      }
      m = T ? w + (f.decimalSeparator || "") + ((y = +f.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : T) : w;
    }
    return (f.prefix || "") + m + (f.suffix || "");
  }, r.toFraction = function(s) {
    var l, f, m, h, b, p, d, y, v, w, T, A, B = this, q = B.c;
    if (s != null && (d = new S(s), !d.isInteger() && (d.c || d.s !== 1) || d.lt(u)))
      throw Error(me + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + G(d));
    if (!q) return new S(B);
    for (l = new S(u), v = f = new S(u), m = y = new S(u), A = xe(q), b = l.e = A.length - B.e - 1, l.c[0] = ii[(p = b % z) < 0 ? z + p : p], s = !s || d.comparedTo(l) > 0 ? b > 0 ? l : v : d, p = _, _ = 1 / 0, d = new S(A), y.c[0] = 0; w = e(d, l, 0, 1), h = f.plus(w.times(m)), h.comparedTo(s) != 1; )
      f = m, m = h, v = y.plus(w.times(h = v)), y = h, l = d.minus(w.times(h = l)), d = h;
    return h = e(s.minus(f), m, 0, 1), y = y.plus(h.times(v)), f = f.plus(h.times(m)), y.s = v.s = B.s, b = b * 2, T = e(v, m, b, o).minus(B).abs().comparedTo(
      e(y, f, b, o).minus(B).abs()
    ) < 1 ? [v, m] : [y, f], _ = p, T;
  }, r.toNumber = function() {
    return +G(this);
  }, r.toPrecision = function(s, l) {
    return s != null && re(s, 1, we), O(this, s, l, 2);
  }, r.toString = function(s) {
    var l, f = this, m = f.s, h = f.e;
    return h === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (s == null ? l = h <= g || h >= c ? Pt(xe(f.c), h) : Fe(xe(f.c), h, "0") : s === 10 && k ? (f = V(new S(f), a + h + 1, o), l = Fe(xe(f.c), f.e, "0")) : (re(s, 2, R.length, "Base"), l = t(Fe(xe(f.c), h, "0"), 10, s, m, !0)), m < 0 && f.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return G(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && S.set(i), S;
}
function Me(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function xe(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = z - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function rt(i, e) {
  var t, n, r = i.c, u = e.c, a = i.s, o = e.s, g = i.e, c = e.e;
  if (!a || !o) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -o : a;
  if (a != o) return a;
  if (t = a < 0, n = g == c, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return g > c ^ t ? 1 : -1;
  for (o = (g = r.length) < (c = u.length) ? g : c, a = 0; a < o; a++) if (r[a] != u[a]) return r[a] > u[a] ^ t ? 1 : -1;
  return g == c ? 0 : g > c ^ t ? 1 : -1;
}
function re(i, e, t, n) {
  if (i < e || i > t || i !== Te(i))
    throw Error(me + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Rt(i) {
  var e = i.c.length - 1;
  return Me(i.e / z) == e && i.c[e] % 2 != 0;
}
function Pt(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function Fe(i, e, t) {
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
var De = mn(), us = class {
  constructor(i) {
    I(this, "key");
    I(this, "left", null);
    I(this, "right", null);
    this.key = i;
  }
}, bt = class extends us {
  constructor(i) {
    super(i);
  }
}, as = class {
  constructor() {
    I(this, "size", 0);
    I(this, "modificationCount", 0);
    I(this, "splayCount", 0);
  }
  splay(i) {
    const e = this.root;
    if (e == null)
      return this.compare(i, i), -1;
    let t = null, n = null, r = null, u = null, a = e;
    const o = this.compare;
    let g;
    for (; ; )
      if (g = o(a.key, i), g > 0) {
        let c = a.left;
        if (c == null || (g = o(c.key, i), g > 0 && (a.left = c.right, c.right = a, a = c, c = a.left, c == null)))
          break;
        t == null ? n = a : t.left = a, t = a, a = c;
      } else if (g < 0) {
        let c = a.right;
        if (c == null || (g = o(c.key, i), g < 0 && (a.right = c.left, c.left = a, a = c, c = a.right, c == null)))
          break;
        r == null ? u = a : r.right = a, r = a, a = c;
      } else
        break;
    return r != null && (r.right = a.left, a.left = u), t != null && (t.left = a.right, a.right = n), this.root !== a && (this.root = a, this.splayCount++), g;
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
}, Ji, $i, zt = class wt extends as {
  constructor(t, n) {
    super();
    I(this, "root", null);
    I(this, "compare");
    I(this, "validKey");
    I(this, Ji, "[object Set]");
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
    return n != 0 && this.addNewRoot(new bt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new bt(t), n), this.root.key;
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
    const n = new wt(this.compare, this.validKey), r = this.modificationCount;
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
    const n = new wt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new wt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new wt(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, a) {
      let o, g;
      do {
        if (o = u.left, g = u.right, o != null) {
          const c = new bt(o.key);
          a.left = c, n(o, c);
        }
        if (g != null) {
          const c = new bt(g.key);
          a.right = c, u = g, a = c;
        }
      } while (g != null);
    }
    const r = new bt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new cs(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [($i = Symbol.iterator, Ji = Symbol.toStringTag, $i)]() {
    return new fs(this.wrap());
  }
}, pn = class {
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
}, fs = class extends pn {
  getValue(i) {
    return i.key;
  }
}, cs = class extends pn {
  getValue(i) {
    return [i.key, i.key];
  }
}, yn = (i) => () => i, ui = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : yn(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function hs(i) {
  const e = i ? (t, n, r, u, a) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : yn(!1);
  return (t, n, r) => {
    const u = t.x, a = t.y, o = r.x, g = r.y, c = a.minus(g).times(n.x.minus(o)).minus(u.minus(o).times(n.y.minus(g)));
    return e(c, u, a, o, g) ? 0 : c.comparedTo(0);
  };
}
var ds = (i) => i, gs = (i) => {
  if (i) {
    const e = new zt(ui(i)), t = new zt(ui(i)), n = (u, a) => a.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new De(0), y: new De(0) }), r;
  }
  return ds;
}, ai = (i) => ({
  set: (e) => {
    je = ai(e);
  },
  reset: () => ai(i),
  compare: ui(i),
  snap: gs(i),
  orient: hs(i)
}), je = ai(), vt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), fi = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Gt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), bn = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), Ut = (i) => bn(i, i).sqrt(), ms = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Gt(r, n).div(Ut(r)).div(Ut(n));
}, ps = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return bn(r, n).div(Ut(r)).div(Ut(n));
}, qi = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, Zi = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, ys = (i, e, t, n) => {
  if (e.x.isZero()) return Zi(t, n, i.x);
  if (n.x.isZero()) return Zi(i, e, t.x);
  if (e.y.isZero()) return qi(t, n, i.y);
  if (n.y.isZero()) return qi(i, e, t.y);
  const r = Gt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, a = Gt(u, e).div(r), o = Gt(u, n).div(r), g = i.x.plus(o.times(e.x)), c = t.x.plus(a.times(n.x)), L = i.y.plus(o.times(e.y)), _ = t.y.plus(a.times(n.y)), C = g.plus(c).div(2), M = L.plus(_).div(2);
  return { x: C, y: M };
}, Ge = class vn {
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
    const n = vn.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : qt.compare(e.segment, t.segment));
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
        sine: ms(this.point, e.point, u.point),
        cosine: ps(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: a, cosine: o } = t.get(r), { sine: g, cosine: c } = t.get(u);
      return a.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? o.isLessThan(c) ? 1 : o.isGreaterThan(c) ? -1 : 0 : a.isLessThan(0) && g.isLessThan(0) ? o.isLessThan(c) ? -1 : o.isGreaterThan(c) ? 1 : 0 : g.isLessThan(a) ? -1 : g.isGreaterThan(a) ? 1 : 0;
    };
  }
}, bs = class ci {
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
      const u = e[n];
      if (!u.isInResult() || u.ringOut) continue;
      let a = null, o = u.leftSE, g = u.rightSE;
      const c = [o], L = o.point, _ = [];
      for (; a = o, o = g, c.push(o), o.point !== L; )
        for (; ; ) {
          const C = o.getAvailableLinkedEvents();
          if (C.length === 0) {
            const P = c[0].point, R = c[c.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${P.x}, ${P.y}]. Last matching segment found ends at [${R.x}, ${R.y}].`
            );
          }
          if (C.length === 1) {
            g = C[0].otherSE;
            break;
          }
          let M = null;
          for (let P = 0, R = _.length; P < R; P++)
            if (_[P].point === o.point) {
              M = P;
              break;
            }
          if (M !== null) {
            const P = _.splice(M)[0], R = c.splice(P.index);
            R.unshift(R[0].otherSE), t.push(new ci(R.reverse()));
            continue;
          }
          _.push({
            index: c.length,
            point: o.point
          });
          const N = o.getLeftmostComparator(a);
          g = C.sort(N)[0].otherSE;
          break;
        }
      t.push(new ci(c));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let c = 1, L = this.events.length - 1; c < L; c++) {
      const _ = this.events[c].point, C = this.events[c + 1].point;
      je.orient(_, e, C) !== 0 && (t.push(_), e = _);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    je.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, g = [];
    for (let c = a; c != o; c += u)
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
    for (let a = 1, o = this.events.length; a < o; a++) {
      const g = this.events[a];
      Ge.compare(e, g) > 0 && (e = g);
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
}, ji = class {
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
}, vs = class {
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
      const u = i[n];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new ji(u));
        else {
          const a = u.enclosingRing();
          a != null && a.poly || e.push(new ji(a)), (t = a == null ? void 0 : a.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, ws = class {
  constructor(i, e = qt.compare) {
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
      let u = null;
      if (n) {
        const o = n.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (u = o), !n.isAnEndpoint(o))) {
          const g = this._splitSafely(n, o);
          for (let c = 0, L = g.length; c < L; c++)
            t.push(g[c]);
        }
      }
      let a = null;
      if (r) {
        const o = r.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (a = o), !r.isAnEndpoint(o))) {
          const g = this._splitSafely(r, o);
          for (let c = 0, L = g.length; c < L; c++)
            t.push(g[c]);
        }
      }
      if (u !== null || a !== null) {
        let o = null;
        u === null ? o = a : a === null ? o = u : o = Ge.comparePoints(
          u,
          a
        ) <= 0 ? u : a, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const g = e.split(o);
        for (let c = 0, L = g.length; c < L; c++)
          t.push(g[c]);
      }
      t.length > 0 ? (this.tree.delete(e), t.push(i)) : (this.segments.push(e), e.prev = n);
    } else {
      if (n && r) {
        const u = n.getIntersection(r);
        if (u !== null) {
          if (!n.isAnEndpoint(u)) {
            const a = this._splitSafely(n, u);
            for (let o = 0, g = a.length; o < g; o++)
              t.push(a[o]);
          }
          if (!r.isAnEndpoint(u)) {
            const a = this._splitSafely(r, u);
            for (let o = 0, g = a.length; o < g; o++)
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
}, Es = class {
  constructor() {
    I(this, "type");
    I(this, "numMultiPolys");
  }
  run(i, e, t) {
    Et.type = i;
    const n = [new Vi(e, !0)];
    for (let c = 0, L = t.length; c < L; c++)
      n.push(new Vi(t[c], !1));
    if (Et.numMultiPolys = n.length, Et.type === "difference") {
      const c = n[0];
      let L = 1;
      for (; L < n.length; )
        fi(n[L].bbox, c.bbox) !== null ? L++ : n.splice(L, 1);
    }
    if (Et.type === "intersection")
      for (let c = 0, L = n.length; c < L; c++) {
        const _ = n[c];
        for (let C = c + 1, M = n.length; C < M; C++)
          if (fi(_.bbox, n[C].bbox) === null) return [];
      }
    const r = new zt(Ge.compare);
    for (let c = 0, L = n.length; c < L; c++) {
      const _ = n[c].getSweepEvents();
      for (let C = 0, M = _.length; C < M; C++)
        r.add(_[C]);
    }
    const u = new ws(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const c = u.process(a);
      for (let L = 0, _ = c.length; L < _; L++) {
        const C = c[L];
        C.consumedBy === void 0 && r.add(C);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    je.reset();
    const o = bs.factory(u.segments);
    return new vs(o).getGeom();
  }
}, Et = new Es(), Ft = Et, Ls = 0, qt = class Wt {
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
    this.id = ++Ls, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
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
    const n = e.leftSE.point.x, r = t.leftSE.point.x, u = e.rightSE.point.x, a = t.rightSE.point.x;
    if (a.isLessThan(n)) return 1;
    if (u.isLessThan(r)) return -1;
    const o = e.leftSE.point.y, g = t.leftSE.point.y, c = e.rightSE.point.y, L = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (g.isLessThan(o) && g.isLessThan(c)) return 1;
      if (g.isGreaterThan(o) && g.isGreaterThan(c)) return -1;
      const _ = e.comparePoint(t.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const C = t.comparePoint(e.rightSE.point);
      return C !== 0 ? C : -1;
    }
    if (n.isGreaterThan(r)) {
      if (o.isLessThan(g) && o.isLessThan(L)) return -1;
      if (o.isGreaterThan(g) && o.isGreaterThan(L)) return 1;
      const _ = t.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const C = e.comparePoint(t.rightSE.point);
      return C < 0 ? 1 : C > 0 ? -1 : 1;
    }
    if (o.isLessThan(g)) return -1;
    if (o.isGreaterThan(g)) return 1;
    if (u.isLessThan(a)) {
      const _ = t.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (u.isGreaterThan(a)) {
      const _ = e.comparePoint(t.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!u.eq(a)) {
      const _ = c.minus(o), C = u.minus(n), M = L.minus(g), N = a.minus(r);
      if (_.isGreaterThan(C) && M.isLessThan(N)) return 1;
      if (_.isLessThan(C) && M.isGreaterThan(N)) return -1;
    }
    return u.isGreaterThan(a) ? 1 : u.isLessThan(a) || c.isLessThan(L) ? -1 : c.isGreaterThan(L) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, u, a;
    const o = Ge.comparePoints(e, t);
    if (o < 0)
      r = e, u = t, a = 1;
    else if (o > 0)
      r = t, u = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const g = new Ge(r, !0), c = new Ge(u, !1);
    return new Wt(g, c, [n], [a]);
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
    return je.orient(this.leftSE.point, e, this.rightSE.point);
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
    const t = this.bbox(), n = e.bbox(), r = fi(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, a = this.rightSE.point, o = e.leftSE.point, g = e.rightSE.point, c = vt(t, o) && this.comparePoint(o) === 0, L = vt(n, u) && e.comparePoint(u) === 0, _ = vt(t, g) && this.comparePoint(g) === 0, C = vt(n, a) && e.comparePoint(a) === 0;
    if (L && c)
      return C && !_ ? a : !C && _ ? g : null;
    if (L)
      return _ && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (c)
      return C && a.x.eq(o.x) && a.y.eq(o.y) ? null : o;
    if (C && _) return null;
    if (C) return a;
    if (_) return g;
    const M = ys(u, this.vector(), o, e.vector());
    return M === null || !vt(r, M) ? null : je.snap(M);
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
    const t = [], n = e.events !== void 0, r = new Ge(e, !0), u = new Ge(e, !1), a = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const o = new Wt(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return Ge.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Ge.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
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
    const r = Wt.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const u = t;
        t = n, n = u;
      }
      if (t.prev === n) {
        const u = t;
        t = n, n = u;
      }
      for (let u = 0, a = n.rings.length; u < a; u++) {
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
      const c = this.rings[o], L = this.windings[o], _ = t.indexOf(c);
      _ === -1 ? (t.push(c), n.push(L)) : n[_] += L;
    }
    const u = [], a = [];
    for (let o = 0, g = t.length; o < g; o++) {
      if (n[o] === 0) continue;
      const c = t[o], L = c.poly;
      if (a.indexOf(L) === -1)
        if (c.isExterior) u.push(L);
        else {
          a.indexOf(L) === -1 && a.push(L);
          const _ = u.indexOf(c.poly);
          _ !== -1 && u.splice(_, 1);
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
    switch (Ft.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === Ft.numMultiPolys && n < r;
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
}, Hi = class {
  constructor(i, e, t) {
    I(this, "poly");
    I(this, "isExterior");
    I(this, "segments");
    I(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = je.snap({ x: new De(i[0][0]), y: new De(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, a = i.length; u < a; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const o = je.snap({ x: new De(i[u][0]), y: new De(i[u][1]) });
      o.x.eq(r.x) && o.y.eq(r.y) || (this.segments.push(qt.fromRing(r, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), r = o);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(qt.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const n = this.segments[e];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, _s = class {
  constructor(i, e) {
    I(this, "multiPoly");
    I(this, "exteriorRing");
    I(this, "interiorRings");
    I(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Hi(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new Hi(i[t], this, !1);
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
}, Vi = class {
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
      ll: { x: new De(Number.POSITIVE_INFINITY), y: new De(Number.POSITIVE_INFINITY) },
      ur: { x: new De(Number.NEGATIVE_INFINITY), y: new De(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new _s(i[t], this);
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
}, Ss = (i, ...e) => Ft.run("union", i, e), xs = (i, ...e) => Ft.run("difference", i, e);
je.set;
function Ts(i, e = {}) {
  const t = [];
  if (gi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Ss(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? di(n[0], e.properties) : fn(n, e.properties);
}
var wn = Ts;
function Ms(i) {
  const e = [];
  if (gi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = xs(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? di(n[0], t) : fn(n, t);
}
var Cs = Ms;
function Ns(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return is(i, function(t) {
    e.push(t);
  }), Mt(e);
}
var ks = Ns;
function Ki(i, e) {
  const t = Cs(
    Mt([
      di([
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
  const n = xt(li(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, a = n[2] > 180, o = ks(i);
  if (o.features.length > 1 && (u || a))
    for (const g of o.features) {
      const c = xt(li(g));
      if (a && c[0] < -180 + r)
        for (const L of g.geometry.coordinates)
          for (const _ of L)
            _[0] += 360 - r;
      if (u && c[2] > 180 - r)
        for (const L of g.geometry.coordinates)
          for (const _ of L)
            _[0] -= 360 - r;
    }
  e(
    Mt([
      o.features.length < 2 ? i : wn(o) ?? i,
      t
    ])
  );
}
const Yi = (i) => {
  var n, r, u;
  const e = (n = i == null ? void 0 : i.geometry) == null ? void 0 : n.type, t = (r = i == null ? void 0 : i.properties) != null && r.isMask ? 0 : e === "LineString" || e === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (u = i == null ? void 0 : i.properties) != null && u.isMask ? 0.1 : 0,
    weight: t,
    dashArray: [t, t],
    lineCap: "butt"
  };
};
function Os(i, e = !0, t = !0, n = {}, r = {}, u = Yi) {
  let a;
  const o = [];
  let g, c;
  const L = ke.geoJSON(void 0, {
    style: u === !0 ? Yi : u === !1 ? void 0 : u ?? void 0,
    interactive: !1
  }).addTo(i), _ = (M) => {
    a == null || a({
      type: "mapClick",
      coordinates: [M.latlng.lng, M.latlng.lat]
    });
  };
  function C(M, N = !1) {
    const P = document.createElement("div");
    return new Or({ props: { displayIn: "leaflet" }, target: P }), new ke.Marker(M, {
      interactive: N,
      icon: new ke.DivIcon({
        html: P,
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
    fitBounds(M, N, P) {
      i.flyToBounds(
        [
          [M[1], M[0]],
          [M[3], M[2]]
        ],
        {
          padding: [N, N],
          duration: 2,
          ...P ? { maxZoom: P } : {},
          ...r
        }
      );
    },
    indicateReverse(M) {
      i.getContainer().style.cursor = M ? "crosshair" : "";
    },
    setReverseMarker(M) {
      var P;
      if (!e)
        return;
      const N = M && [M[1], M[0]];
      c ? N ? c.setLatLng(N) : (c.remove(), c = void 0) : N && (e instanceof Function ? c = e(i) ?? void 0 : (c = (typeof e == "object" ? new ke.Marker(N, e) : C(N)).addTo(i), (P = c.getElement()) == null || P.classList.add("marker-reverse")));
    },
    setFeatures(M, N, P) {
      function R(k) {
        L.clearLayers(), k && L.addData(k);
      }
      for (const k of o)
        k.remove();
      o.length = 0, R();
      e: if (N) {
        let k = !1;
        if (N.geometry.type === "GeometryCollection") {
          const S = N.geometry.geometries.filter(
            (O) => O.type === "Polygon" || O.type === "MultiPolygon"
          );
          t: if (S.length > 0) {
            const O = wn(
              Mt(S.map((D) => Tt(D)))
            );
            if (!O)
              break t;
            Ki(
              {
                ...N,
                geometry: O.geometry
              },
              R
            ), k = !0;
          } else {
            const O = N.geometry.geometries.filter(
              (D) => D.type === "LineString" || D.type === "MultiLineString"
            );
            O.length > 0 && (R({
              ...N,
              geometry: { type: "GeometryCollection", geometries: O }
            }), k = !0);
          }
        }
        if (!k) {
          if (N.geometry.type === "Polygon" || N.geometry.type === "MultiPolygon")
            Ki(N, (S) => {
              if (!S)
                return;
              const O = [...S.features], D = xt(li(N)), H = D[2] - D[0];
              D[0] - H / 4 < -180 && O.push(...Xi(S, -360).features), D[2] + H / 4 > 180 && O.push(...Xi(S, 360).features), R(Mt(O));
            });
          else if (N.geometry.type === "LineString" || N.geometry.type === "MultiLineString") {
            R(N);
            break e;
          }
        }
        if (!P && N.geometry.type !== "Point")
          break e;
        if (e instanceof Function) {
          const S = e(i, N);
          S && o.push(S.addTo(i));
        } else if (e) {
          const S = [N.center[1], N.center[0]];
          o.push(
            typeof e == "object" ? new ke.Marker(S, e) : C(S).addTo(i)
          );
        }
      }
      if (t)
        for (const k of M ?? []) {
          if (k === N)
            continue;
          const S = [
            k.center[1],
            k.center[0]
          ];
          let O;
          if (t instanceof Function) {
            if (O = t(i, k), !O)
              continue;
          } else
            O = (typeof t == "object" ? new ke.Marker(S, t) : C(S, !0)).addTo(i).bindTooltip(
              k.place_type[0] === "reverse" ? k.place_name : k.place_name.replace(/,.*/, ""),
              {
                direction: "top"
              }
            );
          const D = O.getElement();
          D && (D.addEventListener("click", (H) => {
            H.stopPropagation(), a == null || a({ type: "markerClick", id: k.id });
          }), D.addEventListener("mouseenter", () => {
            a == null || a({ type: "markerMouseEnter", id: k.id });
          }), D.addEventListener("mouseleave", () => {
            a == null || a({ type: "markerMouseLeave", id: k.id });
          }), D.classList.toggle("marker-fuzzy", !!k.matching_text)), o.push(O);
        }
    },
    setSelectedMarker(M) {
      var N, P;
      g && ((N = g.getElement()) == null || N.classList.toggle("marker-selected", !1)), g = M > -1 ? o[M] : void 0, (P = g == null ? void 0 : g.getElement()) == null || P.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const M = i.getCenter();
      return [i.getZoom(), M.lng, M.lat];
    }
  };
}
function Xi(i, e) {
  const t = os(i);
  for (const n of t.features)
    if (n.geometry.type == "MultiPolygon")
      for (const r of n.geometry.coordinates)
        Qi(r, e);
    else
      Qi(n.geometry.coordinates, e);
  return t;
}
function Qi(i, e) {
  for (const t of i)
    for (const n of t)
      n[0] += e;
}
class En extends ke.Control {
}
ke.Util.extend(En.prototype, ke.Evented.prototype);
var Ee, ot;
class Rs extends En {
  constructor(t) {
    super(t);
    Jt(this, Ee);
    Jt(this, ot);
    $t(this, ot, t);
  }
  onAdd(t) {
    const n = document.createElement("div");
    n.className = "leaflet-ctrl-geocoder", ke.DomEvent.disableClickPropagation(n), ke.DomEvent.disableScrollPropagation(n);
    const {
      marker: r,
      showResultMarkers: u,
      flyTo: a,
      fullGeometryStyle: o,
      position: g,
      ...c
    } = ve(this, ot), L = typeof a == "boolean" ? {} : a, _ = Os(
      t,
      r,
      u,
      L,
      L,
      o
    );
    $t(this, Ee, new ts({
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
    var g;
    Object.assign(ve(this, ot), t);
    const {
      marker: n,
      showResultMarkers: r,
      flyTo: u,
      fullGeometryStyle: a,
      ...o
    } = ve(this, ot);
    (g = ve(this, Ee)) == null || g.$set(o);
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
Ee = new WeakMap(), ot = new WeakMap();
function Ps(...i) {
  return new Rs(...i);
}
window.L && typeof window.L == "object" && typeof window.L.control == "function" && (window.L.control.maptilerGeocoding = Ps);
export {
  Rs as GeocodingControl,
  Os as createLeafletMapController
};
//# sourceMappingURL=leaflet.js.map
