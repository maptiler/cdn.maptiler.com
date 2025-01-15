var Bi = Object.defineProperty;
var Fi = Object.getPrototypeOf;
var ji = Reflect.get;
var Pt = (i) => {
  throw TypeError(i);
};
var Gi = (i, e, t) => e in i ? Bi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var vt = (i, e, t) => Gi(i, typeof e != "symbol" ? e + "" : e, t), Lt = (i, e, t) => e.has(i) || Pt("Cannot " + t);
var se = (i, e, t) => (Lt(i, e, "read from private field"), t ? t.call(i) : e.get(i)), _t = (i, e, t) => e.has(i) ? Pt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Bt = (i, e, t, n) => (Lt(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t), Ft = (i, e, t) => (Lt(i, e, "access private method"), t);
var jt = (i, e, t) => ji(Fi(i), t, e);
function P() {
}
function Hi(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function oi(i) {
  return i();
}
function Gt() {
  return /* @__PURE__ */ Object.create(null);
}
function he(i) {
  i.forEach(oi);
}
function ai(i) {
  return typeof i == "function";
}
function Se(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Je;
function Y(i, e) {
  return i === e ? !0 : (Je || (Je = document.createElement("a")), Je.href = e, i === Je.href);
}
function Zi(i) {
  return Object.keys(i).length === 0;
}
function qi(i, e, t, n) {
  if (i) {
    const r = li(i, e, t, n);
    return i[0](r);
  }
}
function li(i, e, t, n) {
  return i[1] && n ? Hi(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Qi(i, e, t, n) {
  return i[2], e.dirty;
}
function Ki(i, e, t, n, r, l) {
  if (r) {
    const c = li(e, t, n, l);
    i.p(c, r);
  }
}
function Vi(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function it(i) {
  return i ?? "";
}
function M(i, e) {
  i.appendChild(e);
}
function I(i, e, t) {
  i.insertBefore(e, t || null);
}
function U(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function D(i) {
  return document.createElement(i);
}
function fe(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Le(i) {
  return document.createTextNode(i);
}
function ee() {
  return Le(" ");
}
function Yi() {
  return Le("");
}
function Z(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function Xi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Ji(i) {
  return Array.from(i.childNodes);
}
function Fe(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Ht(i, e) {
  i.value = e ?? "";
}
function Oe(i, e, t) {
  i.classList.toggle(e, !!t);
}
function xi(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let je;
function Be(i) {
  je = i;
}
function ui() {
  if (!je) throw new Error("Function called outside component initialization");
  return je;
}
function $i(i) {
  ui().$$.on_destroy.push(i);
}
function ci() {
  const i = ui();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const l = xi(
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
function en(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const We = [], wt = [];
let ze = [];
const Zt = [], tn = /* @__PURE__ */ Promise.resolve();
let Et = !1;
function nn() {
  Et || (Et = !0, tn.then(di));
}
function St(i) {
  ze.push(i);
}
const yt = /* @__PURE__ */ new Set();
let Ce = 0;
function di() {
  if (Ce !== 0)
    return;
  const i = je;
  do {
    try {
      for (; Ce < We.length; ) {
        const e = We[Ce];
        Ce++, Be(e), rn(e.$$);
      }
    } catch (e) {
      throw We.length = 0, Ce = 0, e;
    }
    for (Be(null), We.length = 0, Ce = 0; wt.length; ) wt.pop()();
    for (let e = 0; e < ze.length; e += 1) {
      const t = ze[e];
      yt.has(t) || (yt.add(t), t());
    }
    ze.length = 0;
  } while (We.length);
  for (; Zt.length; )
    Zt.pop()();
  Et = !1, yt.clear(), Be(i);
}
function rn(i) {
  if (i.fragment !== null) {
    i.update(), he(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(St);
  }
}
function sn(i) {
  const e = [], t = [];
  ze.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ze = e;
}
const $e = /* @__PURE__ */ new Set();
let Ee;
function et() {
  Ee = {
    r: 0,
    c: [],
    p: Ee
    // parent group
  };
}
function tt() {
  Ee.r || he(Ee.c), Ee = Ee.p;
}
function j(i, e) {
  i && i.i && ($e.delete(i), i.i(e));
}
function q(i, e, t, n) {
  if (i && i.o) {
    if ($e.has(i)) return;
    $e.add(i), Ee.c.push(() => {
      $e.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function qt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function on(i, e) {
  q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function an(i, e, t, n, r, l, c, s, f, u, d, h) {
  let v = i.length, y = l.length, E = v;
  const O = {};
  for (; E--; ) O[i[E].key] = E;
  const p = [], S = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), C = [];
  for (E = y; E--; ) {
    const w = h(r, l, E), g = t(w);
    let N = c.get(g);
    N ? C.push(() => N.p(w, e)) : (N = u(g, w), N.c()), S.set(g, p[E] = N), g in O && W.set(g, Math.abs(E - O[g]));
  }
  const H = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
  function Q(w) {
    j(w, 1), w.m(s, d), c.set(w.key, w), d = w.first, y--;
  }
  for (; v && y; ) {
    const w = p[y - 1], g = i[v - 1], N = w.key, T = g.key;
    w === g ? (d = w.first, v--, y--) : S.has(T) ? !c.has(N) || H.has(N) ? Q(w) : X.has(T) ? v-- : W.get(N) > W.get(T) ? (X.add(N), Q(w)) : (H.add(T), v--) : (f(g, c), v--);
  }
  for (; v--; ) {
    const w = i[v];
    S.has(w.key) || f(w, c);
  }
  for (; y; ) Q(p[y - 1]);
  return he(C), p;
}
function _e(i) {
  i && i.c();
}
function me(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), St(() => {
    const l = i.$$.on_mount.map(oi).filter(ai);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : he(l), i.$$.on_mount = [];
  }), r.forEach(St);
}
function ge(i, e) {
  const t = i.$$;
  t.fragment !== null && (sn(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ln(i, e) {
  i.$$.dirty[0] === -1 && (We.push(i), nn(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function pe(i, e, t, n, r, l, c = null, s = [-1]) {
  const f = je;
  Be(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: P,
    not_equal: r,
    bound: Gt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Gt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  c && c(u.root);
  let d = !1;
  if (u.ctx = t ? t(i, e.props || {}, (h, v, ...y) => {
    const E = y.length ? y[0] : v;
    return u.ctx && r(u.ctx[h], u.ctx[h] = E) && (!u.skip_bound && u.bound[h] && u.bound[h](E), d && ln(i, h)), v;
  }) : [], u.update(), d = !0, he(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = Ji(e.target);
      u.fragment && u.fragment.l(h), h.forEach(U);
    } else
      u.fragment && u.fragment.c();
    e.intro && j(i.$$.fragment), me(i, e.target, e.anchor), di();
  }
  Be(f);
}
class ke {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    vt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    vt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ge(this, 1), this.$destroy = P;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ai(t))
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
    this.$$set && !Zi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const un = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(un);
function cn(i) {
  let e, t;
  return {
    c() {
      e = fe("svg"), t = fe("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && U(e);
    }
  };
}
class fi extends ke {
  constructor(e) {
    super(), pe(this, e, null, cn, Se, {});
  }
}
function dn(i) {
  let e, t;
  return {
    c() {
      e = fe("svg"), t = fe("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && U(e);
    }
  };
}
class mi extends ke {
  constructor(e) {
    super(), pe(this, e, null, dn, Se, {});
  }
}
function fn(i) {
  let e, t;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function mn(i) {
  let e, t;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function gn(i) {
  let e, t;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function hn(i) {
  let e, t;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function bn(i) {
  let e, t;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function vn(i) {
  let e, t;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Ln(i) {
  let e, t;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !Y(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function _n(i) {
  let e, t, n, r;
  return {
    c() {
      e = D("img"), Y(e.src, t = /*imageUrl*/
      i[5]) || a(e, "src", t), a(
        e,
        "alt",
        /*category*/
        i[4]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(l, c) {
      I(l, e, c), n || (r = Z(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(l, c) {
      c & /*imageUrl*/
      32 && !Y(e.src, t = /*imageUrl*/
      l[5]) && a(e, "src", t), c & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        l[4]
      ), c & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        l[7]
      );
    },
    d(l) {
      l && U(e), n = !1, r();
    }
  };
}
function yn(i) {
  let e, t;
  return {
    c() {
      e = D("div"), a(e, "class", "sprite-icon svelte-w9y5n9"), a(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / ne}px;
        height: ${/*spriteIcon*/
      i[6].height / ne}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${pt}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / ne}px -${/*spriteIcon*/
      i[6].y / ne}px;
        background-size: ${oe.width / ne}px ${oe.height / ne}px;
      `), a(
        e,
        "title",
        /*placeType*/
        i[7]
      );
    },
    m(n, r) {
      I(n, e, r);
    },
    p(n, r) {
      r & /*spriteIcon, iconsBaseUrl*/
      72 && t !== (t = `
        width: ${/*spriteIcon*/
      n[6].width / ne}px;
        height: ${/*spriteIcon*/
      n[6].height / ne}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${pt}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / ne}px -${/*spriteIcon*/
      n[6].y / ne}px;
        background-size: ${oe.width / ne}px ${oe.height / ne}px;
      `) && a(e, "style", t), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function Qt(i) {
  let e, t;
  return {
    c() {
      e = D("span"), t = Le(
        /*placeType*/
        i[7]
      ), a(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && Fe(
        t,
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && U(e);
    }
  };
}
function wn(i) {
  let e, t, n, r, l, c, s, f, u, d = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), h, v, y = (
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
  ), E, O, p = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), S, W, C, H, X, Q;
  function w(L, m) {
    return m & /*feature*/
    1 && (t = null), m & /*feature*/
    1 && (n = null), m & /*feature*/
    1 && (r = null), m & /*feature*/
    1 && (l = null), oe && /*spriteIcon*/
    L[6] ? yn : (
      /*imageUrl*/
      L[5] ? _n : (
        /*feature*/
        L[0].address ? Ln : (t == null && (t = !!/*feature*/
        L[0].id.startsWith("road.")), t ? vn : (n == null && (n = !!/*feature*/
        L[0].id.startsWith("address.")), n ? bn : (r == null && (r = !!/*feature*/
        L[0].id.startsWith("postal_code.")), r ? hn : (l == null && (l = !!/*feature*/
        L[0].id.startsWith("poi.")), l ? gn : (
          /*isReverse*/
          L[8] ? mn : fn
        )))))
      )
    );
  }
  let g = w(i, -1), N = g(i), T = y && Qt(i);
  return {
    c() {
      e = D("li"), N.c(), c = ee(), s = D("span"), f = D("span"), u = D("span"), h = Le(d), v = ee(), T && T.c(), E = ee(), O = D("span"), S = Le(p), a(u, "class", "primary svelte-w9y5n9"), a(f, "class", "svelte-w9y5n9"), a(O, "class", "line2 svelte-w9y5n9"), a(s, "class", "texts svelte-w9y5n9"), a(e, "tabindex", "-1"), a(e, "role", "option"), a(e, "aria-selected", W = /*style*/
      i[1] === "selected"), a(e, "aria-checked", C = /*style*/
      i[1] === "picked"), a(e, "class", H = it(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(L, m) {
      I(L, e, m), N.m(e, null), M(e, c), M(e, s), M(s, f), M(f, u), M(u, h), M(f, v), T && T.m(f, null), M(s, E), M(s, O), M(O, S), X || (Q = [
        Z(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        Z(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        Z(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], X = !0);
    },
    p(L, [m]) {
      g === (g = w(L, m)) && N ? N.p(L, m) : (N.d(1), N = g(L), N && (N.c(), N.m(e, c))), m & /*isReverse, feature*/
      257 && d !== (d = /*isReverse*/
      (L[8] ? (
        /*feature*/
        L[0].place_name
      ) : (
        /*feature*/
        L[0].place_name.replace(/,.*/, "")
      )) + "") && Fe(h, d), m & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (y = /*showPlaceType*/
      L[2] === "always" || /*showPlaceType*/
      L[2] !== "never" && !/*feature*/
      L[0].address && !/*feature*/
      L[0].id.startsWith("road.") && !/*feature*/
      L[0].id.startsWith("address.") && !/*feature*/
      L[0].id.startsWith("postal_code.") && (!/*feature*/
      L[0].id.startsWith("poi.") || !/*imageUrl*/
      L[5]) && !/*isReverse*/
      L[8]), y ? T ? T.p(L, m) : (T = Qt(L), T.c(), T.m(f, null)) : T && (T.d(1), T = null), m & /*isReverse, feature*/
      257 && p !== (p = /*isReverse*/
      (L[8] ? "" : (
        /*feature*/
        L[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Fe(S, p), m & /*style*/
      2 && W !== (W = /*style*/
      L[1] === "selected") && a(e, "aria-selected", W), m & /*style*/
      2 && C !== (C = /*style*/
      L[1] === "picked") && a(e, "aria-checked", C), m & /*style*/
      2 && H !== (H = it(
        /*style*/
        L[1]
      ) + " svelte-w9y5n9") && a(e, "class", H);
    },
    i: P,
    o: P,
    d(L) {
      L && U(e), N.d(), T && T.d(), X = !1, he(Q);
    }
  };
}
const gi = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, pt = gi ? "@2x" : "", ne = gi ? 2 : 1;
let oe, xe;
function En(i, e, t) {
  let n, r, l, { feature: c } = e, { style: s = "default" } = e, { showPlaceType: f } = e, { missingIconsCache: u } = e, { iconsBaseUrl: d } = e;
  const h = ci();
  let v, y, E, O;
  function p() {
    xe ?? (xe = fetch(`${d}sprite${pt}.json`).then((g) => g.json()).then((g) => {
      oe = g;
    }).catch(() => {
      oe = null;
    }));
  }
  function S() {
    y && u.add(y), W();
  }
  function W() {
    oe !== void 0 ? C() : (p(), xe == null || xe.then(C));
  }
  function C() {
    do {
      if (O--, t(4, v = n == null ? void 0 : n[O]), t(6, E = v ? oe == null ? void 0 : oe.icons[v] : void 0), E)
        break;
      t(5, y = v ? d + v.replace(/ /g, "_") + ".svg" : void 0);
    } while (O > -1 && (!y || u.has(y)));
  }
  function H(g) {
    en.call(this, i, g);
  }
  const X = () => S(), Q = () => h("select", void 0), w = (g) => {
    document.activeElement !== g.target && h("select", void 0);
  };
  return i.$$set = (g) => {
    "feature" in g && t(0, c = g.feature), "style" in g && t(1, s = g.style), "showPlaceType" in g && t(2, f = g.showPlaceType), "missingIconsCache" in g && t(11, u = g.missingIconsCache), "iconsBaseUrl" in g && t(3, d = g.iconsBaseUrl);
  }, i.$$.update = () => {
    var g, N, T, L, m;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (g = c.properties) == null ? void 0 : g.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = c.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, l = ((T = (N = c.properties) == null ? void 0 : N.categories) == null ? void 0 : T.join(", ")) ?? ((m = (L = c.properties) == null ? void 0 : L.place_type_name) == null ? void 0 : m[0]) ?? c.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (O = (n == null ? void 0 : n.length) ?? 0, W());
  }, [
    c,
    s,
    f,
    d,
    v,
    y,
    E,
    l,
    r,
    h,
    S,
    u,
    n,
    H,
    X,
    Q,
    w
  ];
}
class Sn extends ke {
  constructor(e) {
    super(), pe(this, e, En, wn, Se, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function pn(i) {
  let e;
  return {
    c() {
      e = D("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      I(t, e, n);
    },
    p: P,
    i: P,
    o: P,
    d(t) {
      t && U(e);
    }
  };
}
class kn extends ke {
  constructor(e) {
    super(), pe(this, e, null, pn, Se, {});
  }
}
function Tn(i) {
  let e, t;
  return {
    c() {
      e = fe("svg"), t = fe("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && U(e);
    }
  };
}
class Nn extends ke {
  constructor(e) {
    super(), pe(this, e, null, Tn, Se, {});
  }
}
function Mn(i) {
  let e, t, n;
  return {
    c() {
      e = fe("svg"), t = fe("circle"), n = fe("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(n, "d", "M12.063 12.063 7.635 7.635"), a(n, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(r, l) {
      I(r, e, l), M(e, t), M(e, n);
    },
    p: P,
    i: P,
    o: P,
    d(r) {
      r && U(e);
    }
  };
}
class Cn extends ke {
  constructor(e) {
    super(), pe(this, e, null, Mn, Se, {});
  }
}
function Wn(i, e, t) {
  const n = e[1], r = e[0], l = n - r;
  return i === n && t ? i : ((i - r) % l + l) % l + r;
}
function Kt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ae;
async function On(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Ae && r.cachedLocationExpiry && Ae.time + r.cachedLocationExpiry > Date.now()) {
          if (!Ae.coords)
            break e;
          return Ae.coords;
        }
        let l;
        try {
          return l = await new Promise((c, s) => {
            t.signal.addEventListener("abort", () => {
              s(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (f) => {
                c(
                  [f.coords.longitude, f.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (f) => {
                s(f);
              },
              r
            );
          }), l;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Ae = {
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
const zn = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Vt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Yt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Xt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Jt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, xt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Rn(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((y) => Number(y.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), l = Math.abs(n), c = t > 0 ? "N" : "S", s = n > 0 ? "E" : "W";
    let f;
    i == "DD" && (f = `${r}° ${c}, ${l}° ${s}`);
    const u = Math.floor(r), d = Math.floor(l), h = (r - u) * 60, v = (l - d) * 60;
    if (i == "DM") {
      let y = $t(h, 3).toFixed(3).padStart(6, "0"), E = $t(v, 3).toFixed(3).padStart(6, "0");
      y.endsWith(".000") && E.endsWith(".000") && (y = y.replace(/\.000$/, ""), E = E.replace(/\.000$/, "")), f = `${u}° ${y}' ${c}, ${d}° ${E}' ${s}`;
    }
    if (i == "DMS") {
      const y = Math.floor(h), E = Math.floor(v);
      let O = ((h - y) * 60).toFixed(1).padStart(4, "0"), p = ((v - E) * 60).toFixed(1).padStart(4, "0");
      const S = y.toString().padStart(2, "0"), W = E.toString().padStart(2, "0");
      O.endsWith(".0") && p.endsWith(".0") && (O = O.replace(/\.0$/, ""), p = p.replace(/\.0$/, "")), f = `${u}° ${S}' ${O}" ${c}, ${d}° ${W}' ${p}" ${s}`;
    }
    return f;
  } else
    throw new Error("no decimal coordinates to convert");
}
function $t(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function kt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", l = "", c = null, s = [], f = !1;
  if (zn.test(i))
    throw new Error("invalid coordinate value");
  if (Vt.test(i))
    if (s = Vt.exec(i), f = Pe(s), f)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), n = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (n *= -1), c = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Yt.test(i))
    if (s = Yt.exec(i), f = Pe(s), f) {
      if (t = s[2], n = s[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), c = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], l = s[5]) : s[4] && (r = s[4], l = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Xt.test(i))
    if (s = Xt.exec(i), f = Pe(s), f)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, c = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, c = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[9])), s[11] && (n += s[11] / 60), s[13] && (n += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[8]) : s[7] && (r = s[7], l = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Jt.test(i))
    if (s = Jt.exec(i), f = Pe(s), f)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, c = "DM"), s[6] && (t += s[6] / 3600, c = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12] / 60), s[14] && (n += s[14] / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[9]) : s[8] && (r = s[8], l = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (xt.test(i)) {
    if (s = xt.exec(i), f = Pe(s), s.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (f)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, c = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, c = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12].replace(",", ".") / 60), s[14] && (n += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[9]) : s[8] && (r = s[8], l = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (f) {
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
    const d = s[0].trim();
    let h, v;
    const y = /[,/;\u0020]/g, E = d.match(y);
    if (E == null) {
      const S = Math.floor(i.length / 2);
      h = d.substring(0, S).trim(), v = d.substring(S).trim();
    } else {
      let S;
      E.length % 2 == 1 ? S = Math.floor(E.length / 2) : S = E.length / 2 - 1;
      let W = 0;
      if (S == 0)
        W = d.indexOf(E[0]), h = d.substring(0, W).trim(), v = d.substring(W + 1).trim();
      else {
        let C = 0, H = 0;
        for (; C <= S; )
          W = d.indexOf(E[C], H), H = W + 1, C++;
        h = d.substring(0, W).trim(), v = d.substring(W + 1).trim();
      }
    }
    const O = h.split(".");
    if (O.length == 2 && O[1] == 0 && O[1].length != 2)
      throw new Error("invalid coordinates format");
    const p = v.split(".");
    if (p.length == 2 && p[1] == 0 && p[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(h) || /^\d+$/.test(v))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: d,
      verbatimLatitude: h,
      verbatimLongitude: v,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: c,
      closeEnough: Dn,
      toCoordinateFormat: Rn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Pe(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let l = 0; l < r; l++) {
    const c = e[l], s = e[l + r], f = t.test(c) && t.test(s), u = n.test(c) && n.test(s), d = c == s;
    if (!(c == null && s == null)) {
      if (c == null || s == null)
        return !1;
      if (f || u || d)
        continue;
      return !1;
    }
  }
  return !0;
}
function ei(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Dn(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ei(this.decimalLatitude, Number(e[0])) && ei(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Un = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
kt.to = Un;
const In = [
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
], An = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Pn = [
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
], Bn = [
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
function Fn() {
  const i = [];
  return In.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...An });
  }), [...i, ...Pn, ...Bn];
}
const jn = Fn();
kt.formats = jn.map((i) => i.verbatimCoordinates);
const Gn = kt;
function ti(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function ii(i) {
  let e, t;
  return e = new kn({}), {
    c() {
      _e(e.$$.fragment);
    },
    m(n, r) {
      me(e, n, r), t = !0;
    },
    i(n) {
      t || (j(e.$$.fragment, n), t = !0);
    },
    o(n) {
      q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ge(e, n);
    }
  };
}
function ni(i) {
  let e, t, n, r, l;
  return t = new Nn({}), {
    c() {
      e = D("button"), _e(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), a(e, "class", "svelte-bz0zu3"), Oe(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(c, s) {
      I(c, e, s), me(t, e, null), n = !0, r || (l = Z(
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
      1) && Oe(
        e,
        "active",
        /*reverseActive*/
        c[0]
      );
    },
    i(c) {
      n || (j(t.$$.fragment, c), n = !0);
    },
    o(c) {
      q(t.$$.fragment, c), n = !1;
    },
    d(c) {
      c && U(e), ge(t), r = !1, l();
    }
  };
}
function Hn(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, l, c, s = qt(
    /*listFeatures*/
    i[13]
  );
  const f = (u) => (
    /*feature*/
    u[97].id + /*feature*/
    (u[97].address ? "," + /*feature*/
    u[97].address : "")
  );
  for (let u = 0; u < s.length; u += 1) {
    let d = ti(i, s, u), h = f(d);
    n.set(h, t[u] = ri(h, d));
  }
  return {
    c() {
      e = D("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      a(e, "class", "options svelte-bz0zu3"), a(e, "role", "listbox");
    },
    m(u, d) {
      I(u, e, d);
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(e, null);
      r = !0, l || (c = [
        Z(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        Z(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        Z(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], l = !0);
    },
    p(u, d) {
      d[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (s = qt(
        /*listFeatures*/
        u[13]
      ), et(), t = an(t, d, f, 1, u, s, n, e, on, ri, null, ti), tt());
    },
    i(u) {
      if (!r) {
        for (let d = 0; d < s.length; d += 1)
          j(t[d]);
        r = !0;
      }
    },
    o(u) {
      for (let d = 0; d < t.length; d += 1)
        q(t[d]);
      r = !1;
    },
    d(u) {
      u && U(e);
      for (let d = 0; d < t.length; d += 1)
        t[d].d();
      l = !1, he(c);
    }
  };
}
function Zn(i) {
  let e, t, n, r, l, c;
  return t = new mi({}), {
    c() {
      e = D("div"), _e(t.$$.fragment), n = ee(), r = D("div"), l = Le(
        /*noResultsMessage*/
        i[8]
      ), a(r, "class", "svelte-bz0zu3"), a(e, "class", "no-results svelte-bz0zu3");
    },
    m(s, f) {
      I(s, e, f), me(t, e, null), M(e, n), M(e, r), M(r, l), c = !0;
    },
    p(s, f) {
      (!c || f[0] & /*noResultsMessage*/
      256) && Fe(
        l,
        /*noResultsMessage*/
        s[8]
      );
    },
    i(s) {
      c || (j(t.$$.fragment, s), c = !0);
    },
    o(s) {
      q(t.$$.fragment, s), c = !1;
    },
    d(s) {
      s && U(e), ge(t);
    }
  };
}
function qn(i) {
  let e = "", t;
  return {
    c() {
      t = Le(e);
    },
    m(n, r) {
      I(n, t, r);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && U(t);
    }
  };
}
function Qn(i) {
  let e, t, n, r, l, c, s, f, u, d, h;
  return t = new mi({}), f = new fi({}), {
    c() {
      e = D("div"), _e(t.$$.fragment), n = ee(), r = D("div"), l = Le(
        /*errorMessage*/
        i[7]
      ), c = ee(), s = D("button"), _e(f.$$.fragment), a(r, "class", "svelte-bz0zu3"), a(s, "class", "svelte-bz0zu3"), a(e, "class", "error svelte-bz0zu3");
    },
    m(v, y) {
      I(v, e, y), me(t, e, null), M(e, n), M(e, r), M(r, l), M(e, c), M(e, s), me(f, s, null), u = !0, d || (h = Z(
        s,
        "click",
        /*click_handler_4*/
        i[80]
      ), d = !0);
    },
    p(v, y) {
      (!u || y[0] & /*errorMessage*/
      128) && Fe(
        l,
        /*errorMessage*/
        v[7]
      );
    },
    i(v) {
      u || (j(t.$$.fragment, v), j(f.$$.fragment, v), u = !0);
    },
    o(v) {
      q(t.$$.fragment, v), q(f.$$.fragment, v), u = !1;
    },
    d(v) {
      v && U(e), ge(t), ge(f), d = !1, h();
    }
  };
}
function ri(i, e) {
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
  return n = new Sn({
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
      t = Yi(), _e(n.$$.fragment), this.first = t;
    },
    m(f, u) {
      I(f, t, u), me(n, f, u), r = !0;
    },
    p(f, u) {
      var h;
      e = f;
      const d = {};
      u[0] & /*listFeatures*/
      8192 && (d.feature = /*feature*/
      e[97]), u[0] & /*showPlaceType*/
      2048 && (d.showPlaceType = /*showPlaceType*/
      e[11]), u[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (d.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((h = e[14]) == null ? void 0 : h.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), u[0] & /*iconsBaseUrl*/
      4096 && (d.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(d);
    },
    i(f) {
      r || (j(n.$$.fragment, f), r = !0);
    },
    o(f) {
      q(n.$$.fragment, f), r = !1;
    },
    d(f) {
      f && U(t), ge(n, f);
    }
  };
}
function Kn(i) {
  let e, t, n, r, l, c, s, f, u, d, h, v, y, E, O, p, S, W, C, H, X, Q = !1;
  l = new Cn({}), h = new fi({});
  let w = (
    /*abortController*/
    i[20] && ii()
  ), g = (
    /*enableReverse*/
    i[6] === "button" && ni(i)
  );
  const N = (
    /*#slots*/
    i[70].default
  ), T = qi(
    N,
    i,
    /*$$scope*/
    i[69],
    null
  ), L = [Qn, qn, Zn, Hn], m = [];
  function ye(_, B) {
    var ae, te;
    return (
      /*error*/
      _[19] ? 0 : !/*focusedDelayed*/
      _[16] && !/*keepListOpen*/
      _[4] ? 1 : (
        /*listFeatures*/
        ((ae = _[13]) == null ? void 0 : ae.length) === 0 ? 2 : (
          /*listFeatures*/
          (te = _[13]) != null && te.length && /*focusedDelayed*/
          (_[16] || /*keepListOpen*/
          _[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(p = ye(i)) && (S = m[p] = L[p](i)), {
    c() {
      e = ee(), t = D("form"), n = D("div"), r = D("button"), _e(l.$$.fragment), c = ee(), s = D("input"), f = ee(), u = D("div"), d = D("button"), _e(h.$$.fragment), v = ee(), w && w.c(), y = ee(), g && g.c(), E = ee(), T && T.c(), O = ee(), S && S.c(), a(r, "class", "search-button svelte-bz0zu3"), a(r, "type", "button"), a(
        s,
        "placeholder",
        /*placeholder*/
        i[9]
      ), a(
        s,
        "aria-label",
        /*placeholder*/
        i[9]
      ), a(s, "class", "svelte-bz0zu3"), a(d, "type", "button"), a(
        d,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), a(d, "class", "svelte-bz0zu3"), a(u, "class", "clear-button-container svelte-bz0zu3"), Oe(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(n, "class", "input-group svelte-bz0zu3"), a(t, "class", W = it(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), Oe(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(_, B) {
      I(_, e, B), I(_, t, B), M(t, n), M(n, r), me(l, r, null), M(n, c), M(n, s), i[72](s), Ht(
        s,
        /*searchValue*/
        i[1]
      ), M(n, f), M(n, u), M(u, d), me(h, d, null), M(u, v), w && w.m(u, null), M(n, y), g && g.m(n, null), M(n, E), T && T.m(n, null), M(t, O), ~p && m[p].m(t, null), C = !0, H || (X = [
        Z(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        Z(
          s,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        Z(
          s,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        Z(
          s,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        Z(
          s,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        Z(
          s,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        Z(
          s,
          "input",
          /*handleInput*/
          i[24]
        ),
        Z(
          s,
          "change",
          /*change_handler*/
          i[77]
        ),
        Z(
          d,
          "click",
          /*click_handler_2*/
          i[78]
        ),
        Z(t, "submit", Xi(
          /*handleSubmit*/
          i[22]
        ))
      ], H = !0);
    },
    p(_, B) {
      (!C || B[0] & /*placeholder*/
      512) && a(
        s,
        "placeholder",
        /*placeholder*/
        _[9]
      ), (!C || B[0] & /*placeholder*/
      512) && a(
        s,
        "aria-label",
        /*placeholder*/
        _[9]
      ), B[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      _[1] && Ht(
        s,
        /*searchValue*/
        _[1]
      ), (!C || B[0] & /*clearButtonTitle*/
      8) && a(
        d,
        "title",
        /*clearButtonTitle*/
        _[3]
      ), /*abortController*/
      _[20] ? w ? B[0] & /*abortController*/
      1048576 && j(w, 1) : (w = ii(), w.c(), j(w, 1), w.m(u, null)) : w && (et(), q(w, 1, 1, () => {
        w = null;
      }), tt()), (!C || B[0] & /*searchValue*/
      2) && Oe(
        u,
        "displayable",
        /*searchValue*/
        _[1] !== ""
      ), /*enableReverse*/
      _[6] === "button" ? g ? (g.p(_, B), B[0] & /*enableReverse*/
      64 && j(g, 1)) : (g = ni(_), g.c(), j(g, 1), g.m(n, E)) : g && (et(), q(g, 1, 1, () => {
        g = null;
      }), tt()), T && T.p && (!C || B[2] & /*$$scope*/
      128) && Ki(
        T,
        N,
        _,
        /*$$scope*/
        _[69],
        C ? Qi(
          N,
          /*$$scope*/
          _[69],
          B,
          null
        ) : Vi(
          /*$$scope*/
          _[69]
        ),
        null
      );
      let ae = p;
      p = ye(_), p === ae ? ~p && m[p].p(_, B) : (S && (et(), q(m[ae], 1, 1, () => {
        m[ae] = null;
      }), tt()), ~p ? (S = m[p], S ? S.p(_, B) : (S = m[p] = L[p](_), S.c()), j(S, 1), S.m(t, null)) : S = null), (!C || B[0] & /*className*/
      4 && W !== (W = it(
        /*className*/
        _[2]
      ) + " svelte-bz0zu3")) && a(t, "class", W), (!C || B[0] & /*className, collapsed, searchValue*/
      38) && Oe(
        t,
        "can-collapse",
        /*collapsed*/
        _[5] && /*searchValue*/
        _[1] === ""
      );
    },
    i(_) {
      C || (j(Q), j(l.$$.fragment, _), j(h.$$.fragment, _), j(w), j(g), j(T, _), j(S), C = !0);
    },
    o(_) {
      q(Q), q(l.$$.fragment, _), q(h.$$.fragment, _), q(w), q(g), q(T, _), q(S), C = !1;
    },
    d(_) {
      _ && (U(e), U(t)), ge(l), i[72](null), ge(h), w && w.d(), g && g.d(), T && T.d(_), ~p && m[p].d(), H = !1, he(X);
    }
  };
}
function Vn(i, e, t) {
  let n, r, l, { $$slots: c = {}, $$scope: s } = e;
  const f = {
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
  let { class: u = void 0 } = e, { apiKey: d } = e, { bbox: h = void 0 } = e, { clearButtonTitle: v = "clear" } = e, { clearOnBlur: y = !1 } = e, { clearListOnPick: E = !1 } = e, { keepListOpen: O = !1 } = e, { collapsed: p = !1 } = e, { country: S = void 0 } = e, { debounceSearch: W = 200 } = e, { enableReverse: C = "never" } = e, { errorMessage: H = "Something went wrong…" } = e, { filter: X = () => !0 } = e, { flyTo: Q = !0 } = e, { fuzzyMatch: w = !0 } = e, { language: g = void 0 } = e, { limit: N = void 0 } = e;
  const T = 41415112612;
  let { reverseGeocodingLimit: L = T } = e, { mapController: m = void 0 } = e, { minLength: ye = 2 } = e, { noResultsMessage: _ = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: B = "Search" } = e, { proximity: ae = [{ type: "server-geolocation" }] } = e, { reverseActive: te = C === "always" } = e, { reverseButtonTitle: Nt = "toggle reverse geocoding" } = e, { searchValue: K = "" } = e, { pickedResultStyle: Ge = "full-geometry" } = e, { showPlaceType: Mt = "if-needed" } = e, { showResultsWhileTyping: He = !0 } = e, { selectFirst: Te = !0 } = e, { flyToSelected: Ze = !1 } = e, { markerOnSelected: qe = !0 } = e, { types: rt = void 0 } = e;
  const Ct = [];
  let { reverseGeocodingTypes: Qe = Ct } = e, { exhaustiveReverseGeocoding: st = !1 } = e, { excludeTypes: ot = !1 } = e;
  const Wt = void 0;
  let { reverseGeocodingExcludeTypes: Ke = Wt } = e, { zoom: Ve = f } = e, { apiUrl: at = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: lt = {} } = e, { iconsBaseUrl: Ot = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.4/icons/" } = e, { adjustUrlQuery: ut = () => {
  } } = e, { adjustUrl: ct = () => {
  } } = e;
  function bi(o) {
    re.focus(o);
  }
  function vi() {
    re.blur();
  }
  function zt(o, A = !0, F = !1) {
    t(1, K = o), A ? (t(15, z = -1), Dt()) : (Ut(void 0, !F, F), setTimeout(() => {
      re.focus(), re.select();
    }));
  }
  function Li() {
    t(13, k = void 0), t(14, b = void 0), t(15, z = -1);
  }
  function _i() {
    t(64, G = []), t(14, b = void 0);
  }
  let k, G, b, Rt = "", re, z = -1, le, Ye = [], we, Ne, Me, dt, de = !1;
  const yi = /* @__PURE__ */ new Set(), be = ci();
  $i(() => {
    m && (m.setEventHandler(void 0), m.indicateReverse(!1), m.setSelectedMarker(-1), m.setFeatures(void 0, void 0, !1));
  });
  function Dt(o) {
    if (t(17, de = !1), Ne && (clearTimeout(Ne), Ne = void 0), z > -1 && k)
      t(14, b = k[z]), t(1, K = b.place_type[0] === "reverse" ? b.place_name : b.place_name.replace(/,.*/, "")), t(19, le = void 0), t(64, G = void 0), t(15, z = -1);
    else if (K) {
      const A = o || !ft(K);
      mt(K, { exact: !0 }).then(() => {
        t(64, G = k), t(14, b = void 0), A && wi();
      }).catch((F) => t(19, le = F));
    }
  }
  function ft(o) {
    try {
      return Gn(o, 6);
    } catch {
      return !1;
    }
  }
  async function mt(o, { byId: A = !1, exact: F = !1 } = {}) {
    var $, ue, ve;
    t(19, le = void 0), we == null || we.abort();
    const x = new AbortController();
    t(20, we = x);
    try {
      const R = ft(o), De = new URL(at + "/" + encodeURIComponent(R ? R.decimalLongitude + "," + R.decimalLatitude : o) + ".json"), ie = De.searchParams;
      g !== void 0 && ie.set("language", Array.isArray(g) ? g.join(",") : g ?? "");
      const [bt] = (m == null ? void 0 : m.getCenterAndZoom()) ?? [];
      let ce = ($ = !R || Qe === Ct ? rt : Qe) == null ? void 0 : $.map((V) => typeof V == "string" ? V : bt === void 0 || (V[0] ?? 0) <= bt && bt < (V[1] ?? 1 / 0) ? V[2] : void 0).filter((V) => V !== void 0);
      ce && (ce = [...new Set(ce)], ie.set("types", ce.join(",")));
      const At = !R || Ke === Wt ? ot : Ke;
      if (At && ie.set("excludeTypes", String(At)), h && ie.set("bbox", h.map((V) => V.toFixed(6)).join(",")), S && ie.set("country", Array.isArray(S) ? S.join(",") : S), !A && !R) {
        const V = await On(m, ae, x);
        V && ie.set("proximity", V), (F || !He) && ie.set("autocomplete", "false"), ie.set("fuzzyMatch", String(w));
      }
      const Ue = L === T ? N : L;
      Ue !== void 0 && Ue > 1 && (ce == null ? void 0 : ce.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), R ? (Ue === 1 || Ue !== void 0 && (st || (ce == null ? void 0 : ce.length) === 1)) && ie.set("limit", String(Ue)) : N !== void 0 && ie.set("limit", String(N)), ie.set("key", d), ut(ie), ct(De);
      const Pi = De.searchParams.get("types") === "" && De.searchParams.get("excludeTypes") !== "true", Xe = De.toString();
      if (Xe === Rt) {
        A ? (E && t(13, k = void 0), t(14, b = Ye[0])) : (t(13, k = Ye), ((ue = k[z]) == null ? void 0 : ue.id) !== (r == null ? void 0 : r.id) && t(15, z = -1));
        return;
      }
      Rt = Xe;
      let Ie;
      if (Pi)
        Ie = { type: "FeatureCollection", features: [] };
      else {
        const V = await fetch(Xe, { signal: x.signal, ...lt });
        if (!V.ok)
          throw new Error(await V.text());
        Ie = await V.json();
      }
      be("response", { url: Xe, featureCollection: Ie }), A ? (E && t(13, k = void 0), t(14, b = Ie.features[0]), Ye = [b]) : (t(13, k = Ie.features.filter(X)), R && k.unshift({
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
      }), Ye = k, ((ve = k[z]) == null ? void 0 : ve.id) !== (r == null ? void 0 : r.id) && t(15, z = -1), R && re.focus());
    } catch (R) {
      if (R && typeof R == "object" && "name" in R && R.name === "AbortError")
        return;
      throw R;
    } finally {
      x === we && t(20, we = void 0);
    }
  }
  function wi() {
    var x;
    if (!(G != null && G.length) || !Q)
      return;
    const o = [180, 90, -180, -90], A = !G.some(($) => !$.matching_text);
    let F;
    for (const $ of G) {
      const ue = Re($);
      if (F = F === void 0 ? ue : ue === void 0 ? F : Math.max(F, ue), A || !$.matching_text)
        for (const ve of [0, 1, 2, 3])
          o[ve] = Math[ve < 2 ? "min" : "max"](o[ve], ((x = $.bbox) == null ? void 0 : x[ve]) ?? $.center[ve % 2]);
    }
    m && G.length > 0 && (b && o[0] === o[2] && o[1] === o[3] ? m.flyTo(b.center, Re(b)) : m.fitBounds(Kt(o), 50, F));
  }
  function gt() {
    !b || !m || (!b.bbox || b.bbox[0] === b.bbox[2] && b.bbox[1] === b.bbox[3] ? m.flyTo(b.center, Re(b)) : m.fitBounds(Kt(b.bbox), 50, Re(b)));
  }
  function Re(o) {
    var F;
    if (!o.bbox || o.bbox[0] !== o.bbox[2] && o.bbox[1] !== o.bbox[3])
      return;
    const A = o.id.replace(/\..*/, "");
    return (Array.isArray((F = o.properties) == null ? void 0 : F.categories) ? o.properties.categories.reduce(
      (x, $) => {
        const ue = Ve[A + "." + $];
        return x === void 0 ? ue : ue === void 0 ? x : Math.max(x, ue);
      },
      void 0
    ) : void 0) ?? Ve[A];
  }
  function Ei(o) {
    t(0, te = C === "always"), t(13, k = void 0), t(14, b = void 0), t(15, z = -1), zt(o[1].toFixed(6) + ", " + Wn(o[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Si(o) {
    if (!k)
      return;
    let A = o.key === "ArrowDown" ? 1 : o.key === "ArrowUp" ? -1 : 0;
    A && (re.focus(), t(17, de = !0), o.preventDefault(), b && z === -1 && t(15, z = k.findIndex((F) => F.id === (b == null ? void 0 : b.id))), z === (b || Te ? 0 : -1) && A === -1 && t(15, z = k.length), t(15, z += A), z >= k.length && t(15, z = -1), z < 0 && (b || Te) && t(15, z = 0));
  }
  function Ut(o, A = !0, F = !1) {
    if (t(19, le = void 0), t(14, b = void 0), t(17, de = !0), He || F) {
      if (Ne && clearTimeout(Ne), K.length < ye)
        return;
      const x = K;
      Ne = window.setTimeout(
        () => {
          mt(x).catch(($) => t(19, le = $));
        },
        A ? W : 0
      );
    } else
      t(13, k = void 0), t(19, le = void 0);
  }
  function ht(o) {
    b && (b == null ? void 0 : b.id) === (o == null ? void 0 : o.id) ? gt() : (t(14, b = o), t(1, K = o.place_name));
  }
  function It(o) {
    t(15, z = o);
  }
  function pi() {
    (!Te || b) && t(15, z = -1), Ze && gt();
  }
  const ki = () => re.focus();
  function Ti(o) {
    wt[o ? "unshift" : "push"](() => {
      re = o, t(18, re);
    });
  }
  function Ni() {
    K = this.value, t(1, K), t(17, de), t(31, y), t(16, Me);
  }
  const Mi = () => t(17, de = !0), Ci = () => t(17, de = !1), Wi = () => t(17, de = !0), Oi = () => t(14, b = void 0), zi = () => {
    t(1, K = ""), t(14, b = void 0), re.focus();
  }, Ri = () => t(0, te = !te), Di = () => t(19, le = void 0), Ui = (o) => It(o), Ii = (o) => ht(o), Ai = () => {
  };
  return i.$$set = (o) => {
    "class" in o && t(2, u = o.class), "apiKey" in o && t(29, d = o.apiKey), "bbox" in o && t(30, h = o.bbox), "clearButtonTitle" in o && t(3, v = o.clearButtonTitle), "clearOnBlur" in o && t(31, y = o.clearOnBlur), "clearListOnPick" in o && t(32, E = o.clearListOnPick), "keepListOpen" in o && t(4, O = o.keepListOpen), "collapsed" in o && t(5, p = o.collapsed), "country" in o && t(33, S = o.country), "debounceSearch" in o && t(34, W = o.debounceSearch), "enableReverse" in o && t(6, C = o.enableReverse), "errorMessage" in o && t(7, H = o.errorMessage), "filter" in o && t(35, X = o.filter), "flyTo" in o && t(36, Q = o.flyTo), "fuzzyMatch" in o && t(37, w = o.fuzzyMatch), "language" in o && t(38, g = o.language), "limit" in o && t(39, N = o.limit), "reverseGeocodingLimit" in o && t(40, L = o.reverseGeocodingLimit), "mapController" in o && t(41, m = o.mapController), "minLength" in o && t(42, ye = o.minLength), "noResultsMessage" in o && t(8, _ = o.noResultsMessage), "placeholder" in o && t(9, B = o.placeholder), "proximity" in o && t(43, ae = o.proximity), "reverseActive" in o && t(0, te = o.reverseActive), "reverseButtonTitle" in o && t(10, Nt = o.reverseButtonTitle), "searchValue" in o && t(1, K = o.searchValue), "pickedResultStyle" in o && t(44, Ge = o.pickedResultStyle), "showPlaceType" in o && t(11, Mt = o.showPlaceType), "showResultsWhileTyping" in o && t(45, He = o.showResultsWhileTyping), "selectFirst" in o && t(46, Te = o.selectFirst), "flyToSelected" in o && t(47, Ze = o.flyToSelected), "markerOnSelected" in o && t(48, qe = o.markerOnSelected), "types" in o && t(49, rt = o.types), "reverseGeocodingTypes" in o && t(50, Qe = o.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in o && t(51, st = o.exhaustiveReverseGeocoding), "excludeTypes" in o && t(52, ot = o.excludeTypes), "reverseGeocodingExcludeTypes" in o && t(53, Ke = o.reverseGeocodingExcludeTypes), "zoom" in o && t(54, Ve = o.zoom), "apiUrl" in o && t(55, at = o.apiUrl), "fetchParameters" in o && t(56, lt = o.fetchParameters), "iconsBaseUrl" in o && t(12, Ot = o.iconsBaseUrl), "adjustUrlQuery" in o && t(57, ut = o.adjustUrlQuery), "adjustUrl" in o && t(58, ct = o.adjustUrl), "$$scope" in o && t(69, s = o.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, te = C === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && Ge !== "marker-only" && b && !b.address && b.geometry.type === "Point" && b.place_type[0] !== "reverse" && mt(b.id, { byId: !0 }).catch((o) => t(19, le = o)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (m && b && b.id !== dt && Q && (gt(), E && t(13, k = void 0), t(64, G = void 0), t(15, z = -1)), t(65, dt = b == null ? void 0 : b.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, Me = de), y && !Me && t(1, K = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && K.length < ye && (t(13, k = void 0), t(19, le = void 0), t(64, G = k)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && Te && k != null && k.length && z == -1 && !b && t(15, z = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && G !== k && t(64, G = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && m && m.setEventHandler((o) => {
      switch (o.type) {
        case "mapClick":
          te && Ei(o.coordinates);
          break;
        case "markerClick":
          {
            const A = k == null ? void 0 : k.find((F) => F.id === o.id);
            A && ht(A);
          }
          break;
        case "markerMouseEnter":
          G && t(15, z = Me ? (k == null ? void 0 : k.findIndex((A) => A.id === o.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          G && t(15, z = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = k == null ? void 0 : k[z]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && m && r && Q && Ze && m.flyTo(r.center, Re(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = Ge === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (qe || m == null || m.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && m && qe && !G && (m.setFeatures(r ? [r] : void 0, b, n), m.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && m && m.setFeatures(G, b, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && G && m && m.setSelectedMarker(z), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && m) {
      const o = ft(K);
      m.setReverseMarker(o ? [o.decimalLongitude, o.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && be("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && be("pick", { feature: b }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, l = !!(k != null && k.length) && (Me || O)), i.$$.dirty[2] & /*optionsVisible*/
    32 && be("optionsvisibilitychange", { optionsVisible: l }), i.$$.dirty[0] & /*listFeatures*/
    8192 && be("featureslisted", { features: k }), i.$$.dirty[2] & /*markedFeatures*/
    4 && be("featuresmarked", { features: G }), i.$$.dirty[0] & /*reverseActive*/
    1 && be("reversetoggle", { reverse: te }), i.$$.dirty[0] & /*searchValue*/
    2 && be("querychange", { query: K }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && m && m.indicateReverse(te);
  }, [
    te,
    K,
    u,
    v,
    O,
    p,
    C,
    H,
    _,
    B,
    Nt,
    Mt,
    Ot,
    k,
    b,
    z,
    Me,
    de,
    re,
    le,
    we,
    yi,
    Dt,
    Si,
    Ut,
    ht,
    It,
    pi,
    f,
    d,
    h,
    y,
    E,
    S,
    W,
    X,
    Q,
    w,
    g,
    N,
    L,
    m,
    ye,
    ae,
    Ge,
    He,
    Te,
    Ze,
    qe,
    rt,
    Qe,
    st,
    ot,
    Ke,
    Ve,
    at,
    lt,
    ut,
    ct,
    bi,
    vi,
    zt,
    Li,
    _i,
    G,
    dt,
    r,
    l,
    n,
    s,
    c,
    ki,
    Ti,
    Ni,
    Mi,
    Ci,
    Wi,
    Oi,
    zi,
    Ri,
    Di,
    Ui,
    Ii,
    Ai
  ];
}
let Yn = class extends ke {
  constructor(e) {
    super(), pe(
      this,
      e,
      Vn,
      Kn,
      Se,
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
const Xn = new FinalizationRegistry((i) => {
  i.$destroy();
});
var J, nt, hi;
const Tt = class Tt extends EventTarget {
  constructor({ target: t, ...n }) {
    super();
    _t(this, nt);
    _t(this, J);
    Bt(this, J, new Yn({
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
      se(this, J).$on(r, (l) => {
        Ft(this, nt, hi).call(this, r, l.detail);
      });
    se(this, J).$on("select", (r) => {
      const l = new CustomEvent(r.type, {
        detail: r.detail
      });
      this.dispatchEvent(l);
    }), Xn.register(this, se(this, J));
  }
  /**
   * Update the control options.
   *
   * @param options options to update
   */
  setOptions(t) {
    se(this, J).$set(t);
  }
  /**
   * Set the content of search input box.
   *
   * @param value text to set
   * @param submit perform the search
   */
  setQuery(t, n = !0) {
    var r;
    (r = se(this, J)) == null || r.setQuery(t, n);
  }
  /**
   * Clear geocoding search results from the map.
   */
  clearMap() {
    var t;
    (t = se(this, J)) == null || t.clearMap();
  }
  /**
   * Clear search result list.
   */
  clearList() {
    var t;
    (t = se(this, J)) == null || t.clearList();
  }
  /**
   * Set reverse geocoding mode.
   *
   * @param reverseActive reverse geocoding active
   */
  setReverseMode(t) {
    var n;
    (n = se(this, J)) == null || n.$set({ reverseActive: t });
  }
  /**
   * Focus the search input box.
   *
   * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
   */
  focus(t) {
    var n;
    (n = se(this, J)) == null || n.focus(t);
  }
  /**
   * Blur the search input box.
   */
  blur() {
    var t;
    (t = se(this, J)) == null || t.blur();
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
J = new WeakMap(), nt = new WeakSet(), hi = function(t, n) {
  return jt(Tt.prototype, this, "dispatchEvent").call(
    this,
    new CustomEvent(t, {
      detail: n
    })
  );
};
let si = Tt;
export {
  si as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
