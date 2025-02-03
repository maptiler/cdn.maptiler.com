var Oi = Object.defineProperty;
var Ri = (i, e, t) => e in i ? Oi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var gt = (i, e, t) => Ri(i, typeof e != "symbol" ? e + "" : e, t);
import { forwardRef as zi, useRef as zt, useEffect as ht, useImperativeHandle as Ui, createElement as Di } from "react";
function P() {
}
function Ii(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function $t(i) {
  return i();
}
function Ut() {
  return /* @__PURE__ */ Object.create(null);
}
function me(i) {
  i.forEach($t);
}
function ei(i) {
  return typeof i == "function";
}
function we(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ye;
function Y(i, e) {
  return i === e ? !0 : (Ye || (Ye = document.createElement("a")), Ye.href = e, i === Ye.href);
}
function Ai(i) {
  return Object.keys(i).length === 0;
}
function Pi(i, e, t, n) {
  if (i) {
    const r = ti(i, e, t, n);
    return i[0](r);
  }
}
function ti(i, e, t, n) {
  return i[1] && n ? Ii(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Bi(i, e, t, n) {
  return i[2], e.dirty;
}
function Fi(i, e, t, n, r, c) {
  if (r) {
    const l = ti(e, t, n, c);
    i.p(l, r);
  }
}
function Gi(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function et(i) {
  return i ?? "";
}
function M(i, e) {
  i.appendChild(e);
}
function I(i, e, t) {
  i.insertBefore(e, t || null);
}
function D(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function U(i) {
  return document.createElement(i);
}
function ce(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function be(i) {
  return document.createTextNode(i);
}
function $() {
  return be(" ");
}
function ji() {
  return be("");
}
function Z(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function Hi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Zi(i) {
  return Array.from(i.childNodes);
}
function Pe(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Dt(i, e) {
  i.value = e ?? "";
}
function Ce(i, e, t) {
  i.classList.toggle(e, !!t);
}
function qi(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Be;
function Ae(i) {
  Be = i;
}
function ii() {
  if (!Be) throw new Error("Function called outside component initialization");
  return Be;
}
function Qi(i) {
  ii().$$.on_destroy.push(i);
}
function ni() {
  const i = ii();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const c = qi(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((l) => {
        l.call(i, c);
      }), !c.defaultPrevented;
    }
    return !0;
  };
}
function Ki(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Me = [], vt = [];
let We = [];
const It = [], Vi = /* @__PURE__ */ Promise.resolve();
let Lt = !1;
function Yi() {
  Lt || (Lt = !0, Vi.then(ri));
}
function _t(i) {
  We.push(i);
}
const bt = /* @__PURE__ */ new Set();
let Ne = 0;
function ri() {
  if (Ne !== 0)
    return;
  const i = Be;
  do {
    try {
      for (; Ne < Me.length; ) {
        const e = Me[Ne];
        Ne++, Ae(e), Xi(e.$$);
      }
    } catch (e) {
      throw Me.length = 0, Ne = 0, e;
    }
    for (Ae(null), Me.length = 0, Ne = 0; vt.length; ) vt.pop()();
    for (let e = 0; e < We.length; e += 1) {
      const t = We[e];
      bt.has(t) || (bt.add(t), t());
    }
    We.length = 0;
  } while (Me.length);
  for (; It.length; )
    It.pop()();
  Lt = !1, bt.clear(), Ae(i);
}
function Xi(i) {
  if (i.fragment !== null) {
    i.update(), me(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(_t);
  }
}
function Ji(i) {
  const e = [], t = [];
  We.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), We = e;
}
const Je = /* @__PURE__ */ new Set();
let ye;
function xe() {
  ye = {
    r: 0,
    c: [],
    p: ye
    // parent group
  };
}
function $e() {
  ye.r || me(ye.c), ye = ye.p;
}
function G(i, e) {
  i && i.i && (Je.delete(i), i.i(e));
}
function q(i, e, t, n) {
  if (i && i.o) {
    if (Je.has(i)) return;
    Je.add(i), ye.c.push(() => {
      Je.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function At(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function xi(i, e) {
  q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function $i(i, e, t, n, r, c, l, o, d, u, f, h) {
  let v = i.length, y = c.length, E = v;
  const O = {};
  for (; E--; ) O[i[E].key] = E;
  const p = [], S = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), C = [];
  for (E = y; E--; ) {
    const w = h(r, c, E), g = t(w);
    let N = l.get(g);
    N ? C.push(() => N.p(w, e)) : (N = u(g, w), N.c()), S.set(g, p[E] = N), g in O && W.set(g, Math.abs(E - O[g]));
  }
  const H = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
  function Q(w) {
    G(w, 1), w.m(o, f), l.set(w.key, w), f = w.first, y--;
  }
  for (; v && y; ) {
    const w = p[y - 1], g = i[v - 1], N = w.key, k = g.key;
    w === g ? (f = w.first, v--, y--) : S.has(k) ? !l.has(N) || H.has(N) ? Q(w) : X.has(k) ? v-- : W.get(N) > W.get(k) ? (X.add(N), Q(w)) : (H.add(k), v--) : (d(g, l), v--);
  }
  for (; v--; ) {
    const w = i[v];
    S.has(w.key) || d(w, l);
  }
  for (; y; ) Q(p[y - 1]);
  return me(C), p;
}
function ve(i) {
  i && i.c();
}
function de(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), _t(() => {
    const c = i.$$.on_mount.map($t).filter(ei);
    i.$$.on_destroy ? i.$$.on_destroy.push(...c) : me(c), i.$$.on_mount = [];
  }), r.forEach(_t);
}
function fe(i, e) {
  const t = i.$$;
  t.fragment !== null && (Ji(t.after_update), me(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function en(i, e) {
  i.$$.dirty[0] === -1 && (Me.push(i), Yi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ee(i, e, t, n, r, c, l = null, o = [-1]) {
  const d = Be;
  Ae(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: P,
    not_equal: r,
    bound: Ut(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Ut(),
    dirty: o,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  l && l(u.root);
  let f = !1;
  if (u.ctx = t ? t(i, e.props || {}, (h, v, ...y) => {
    const E = y.length ? y[0] : v;
    return u.ctx && r(u.ctx[h], u.ctx[h] = E) && (!u.skip_bound && u.bound[h] && u.bound[h](E), f && en(i, h)), v;
  }) : [], u.update(), f = !0, me(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = Zi(e.target);
      u.fragment && u.fragment.l(h), h.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && G(i.$$.fragment), de(i, e.target, e.anchor), ri();
  }
  Ae(d);
}
class Se {
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
    if (!ei(t))
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
    this.$$set && !Ai(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const tn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(tn);
function nn(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && D(e);
    }
  };
}
class oi extends Se {
  constructor(e) {
    super(), Ee(this, e, null, nn, we, {});
  }
}
function rn(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && D(e);
    }
  };
}
class si extends Se {
  constructor(e) {
    super(), Ee(this, e, null, rn, we, {});
  }
}
function on(i) {
  let e, t;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*iconsBaseUrl*/
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
      n && D(e);
    }
  };
}
function sn(i) {
  let e, t;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*iconsBaseUrl*/
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
      n && D(e);
    }
  };
}
function an(i) {
  let e, t;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*iconsBaseUrl*/
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
      n && D(e);
    }
  };
}
function ln(i) {
  let e, t;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*iconsBaseUrl*/
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
      n && D(e);
    }
  };
}
function un(i) {
  let e, t;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*iconsBaseUrl*/
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
      n && D(e);
    }
  };
}
function cn(i) {
  let e, t;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*iconsBaseUrl*/
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
      n && D(e);
    }
  };
}
function dn(i) {
  let e, t;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*iconsBaseUrl*/
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
      n && D(e);
    }
  };
}
function fn(i) {
  let e, t, n, r;
  return {
    c() {
      e = U("img"), Y(e.src, t = /*imageUrl*/
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
    m(c, l) {
      I(c, e, l), n || (r = Z(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(c, l) {
      l & /*imageUrl*/
      32 && !Y(e.src, t = /*imageUrl*/
      c[5]) && a(e, "src", t), l & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        c[4]
      ), l & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        c[7]
      );
    },
    d(c) {
      c && D(e), n = !1, r();
    }
  };
}
function mn(i) {
  let e, t;
  return {
    c() {
      e = U("div"), a(e, "class", "sprite-icon svelte-w9y5n9"), a(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / ie}px;
        height: ${/*spriteIcon*/
      i[6].height / ie}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${yt}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / ie}px -${/*spriteIcon*/
      i[6].y / ie}px;
        background-size: ${re.width / ie}px ${re.height / ie}px;
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
      n[6].width / ie}px;
        height: ${/*spriteIcon*/
      n[6].height / ie}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${yt}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / ie}px -${/*spriteIcon*/
      n[6].y / ie}px;
        background-size: ${re.width / ie}px ${re.height / ie}px;
      `) && a(e, "style", t), r & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Pt(i) {
  let e, t;
  return {
    c() {
      e = U("span"), t = be(
        /*placeType*/
        i[7]
      ), a(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && Pe(
        t,
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function gn(i) {
  let e, t, n, r, c, l, o, d, u, f = (
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
    1 && (c = null), re && /*spriteIcon*/
    L[6] ? mn : (
      /*imageUrl*/
      L[5] ? fn : (
        /*feature*/
        L[0].address ? dn : (t == null && (t = !!/*feature*/
        L[0].id.startsWith("road.")), t ? cn : (n == null && (n = !!/*feature*/
        L[0].id.startsWith("address.")), n ? un : (r == null && (r = !!/*feature*/
        L[0].id.startsWith("postal_code.")), r ? ln : (c == null && (c = !!/*feature*/
        L[0].id.startsWith("poi.")), c ? an : (
          /*isReverse*/
          L[8] ? sn : on
        )))))
      )
    );
  }
  let g = w(i, -1), N = g(i), k = y && Pt(i);
  return {
    c() {
      e = U("li"), N.c(), l = $(), o = U("span"), d = U("span"), u = U("span"), h = be(f), v = $(), k && k.c(), E = $(), O = U("span"), S = be(p), a(u, "class", "primary svelte-w9y5n9"), a(d, "class", "svelte-w9y5n9"), a(O, "class", "line2 svelte-w9y5n9"), a(o, "class", "texts svelte-w9y5n9"), a(e, "tabindex", "-1"), a(e, "role", "option"), a(e, "aria-selected", W = /*style*/
      i[1] === "selected"), a(e, "aria-checked", C = /*style*/
      i[1] === "picked"), a(e, "class", H = et(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(L, m) {
      I(L, e, m), N.m(e, null), M(e, l), M(e, o), M(o, d), M(d, u), M(u, h), M(d, v), k && k.m(d, null), M(o, E), M(o, O), M(O, S), X || (Q = [
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
      g === (g = w(L, m)) && N ? N.p(L, m) : (N.d(1), N = g(L), N && (N.c(), N.m(e, l))), m & /*isReverse, feature*/
      257 && f !== (f = /*isReverse*/
      (L[8] ? (
        /*feature*/
        L[0].place_name
      ) : (
        /*feature*/
        L[0].place_name.replace(/,.*/, "")
      )) + "") && Pe(h, f), m & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (y = /*showPlaceType*/
      L[2] === "always" || /*showPlaceType*/
      L[2] !== "never" && !/*feature*/
      L[0].address && !/*feature*/
      L[0].id.startsWith("road.") && !/*feature*/
      L[0].id.startsWith("address.") && !/*feature*/
      L[0].id.startsWith("postal_code.") && (!/*feature*/
      L[0].id.startsWith("poi.") || !/*imageUrl*/
      L[5]) && !/*isReverse*/
      L[8]), y ? k ? k.p(L, m) : (k = Pt(L), k.c(), k.m(d, null)) : k && (k.d(1), k = null), m & /*isReverse, feature*/
      257 && p !== (p = /*isReverse*/
      (L[8] ? "" : (
        /*feature*/
        L[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Pe(S, p), m & /*style*/
      2 && W !== (W = /*style*/
      L[1] === "selected") && a(e, "aria-selected", W), m & /*style*/
      2 && C !== (C = /*style*/
      L[1] === "picked") && a(e, "aria-checked", C), m & /*style*/
      2 && H !== (H = et(
        /*style*/
        L[1]
      ) + " svelte-w9y5n9") && a(e, "class", H);
    },
    i: P,
    o: P,
    d(L) {
      L && D(e), N.d(), k && k.d(), X = !1, me(Q);
    }
  };
}
const ai = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, yt = ai ? "@2x" : "", ie = ai ? 2 : 1;
let re, Xe;
function hn(i, e, t) {
  let n, r, c, { feature: l } = e, { style: o = "default" } = e, { showPlaceType: d } = e, { missingIconsCache: u } = e, { iconsBaseUrl: f } = e;
  const h = ni();
  let v, y, E, O;
  function p() {
    Xe ?? (Xe = fetch(`${f}sprite${yt}.json`).then((g) => g.json()).then((g) => {
      re = g;
    }).catch(() => {
      re = null;
    }));
  }
  function S() {
    y && u.add(y), W();
  }
  function W() {
    re !== void 0 ? C() : (p(), Xe == null || Xe.then(C));
  }
  function C() {
    do {
      if (O--, t(4, v = n == null ? void 0 : n[O]), t(6, E = v ? re == null ? void 0 : re.icons[v] : void 0), E)
        break;
      t(5, y = v ? f + v.replace(/ /g, "_") + ".svg" : void 0);
    } while (O > -1 && (!y || u.has(y)));
  }
  function H(g) {
    Ki.call(this, i, g);
  }
  const X = () => S(), Q = () => h("select", void 0), w = (g) => {
    document.activeElement !== g.target && h("select", void 0);
  };
  return i.$$set = (g) => {
    "feature" in g && t(0, l = g.feature), "style" in g && t(1, o = g.style), "showPlaceType" in g && t(2, d = g.showPlaceType), "missingIconsCache" in g && t(11, u = g.missingIconsCache), "iconsBaseUrl" in g && t(3, f = g.iconsBaseUrl);
  }, i.$$.update = () => {
    var g, N, k, L, m;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (g = l.properties) == null ? void 0 : g.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = l.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, c = ((k = (N = l.properties) == null ? void 0 : N.categories) == null ? void 0 : k.join(", ")) ?? ((m = (L = l.properties) == null ? void 0 : L.place_type_name) == null ? void 0 : m[0]) ?? l.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (O = (n == null ? void 0 : n.length) ?? 0, W());
  }, [
    l,
    o,
    d,
    f,
    v,
    y,
    E,
    c,
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
class bn extends Se {
  constructor(e) {
    super(), Ee(this, e, hn, gn, we, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function vn(i) {
  let e;
  return {
    c() {
      e = U("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-7cmwmc");
    },
    m(t, n) {
      I(t, e, n);
    },
    p: P,
    i: P,
    o: P,
    d(t) {
      t && D(e);
    }
  };
}
class Ln extends Se {
  constructor(e) {
    super(), Ee(this, e, null, vn, we, {});
  }
}
function _n(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      I(n, e, r), M(e, t);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && D(e);
    }
  };
}
class yn extends Se {
  constructor(e) {
    super(), Ee(this, e, null, _n, we, {});
  }
}
function wn(i) {
  let e, t, n;
  return {
    c() {
      e = ce("svg"), t = ce("circle"), n = ce("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(n, "d", "M12.063 12.063 7.635 7.635"), a(n, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(r, c) {
      I(r, e, c), M(e, t), M(e, n);
    },
    p: P,
    i: P,
    o: P,
    d(r) {
      r && D(e);
    }
  };
}
class En extends Se {
  constructor(e) {
    super(), Ee(this, e, null, wn, we, {});
  }
}
function Sn(i, e, t) {
  const n = e[1], r = e[0], c = n - r;
  return i === n && t ? i : ((i - r) % c + c) % c + r;
}
function Bt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let De;
async function pn(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (De && r.cachedLocationExpiry && De.time + r.cachedLocationExpiry > Date.now()) {
          if (!De.coords)
            break e;
          return De.coords;
        }
        let c;
        try {
          return c = await new Promise((l, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                l(
                  [d.coords.longitude, d.coords.latitude].map((u) => u.toFixed(6)).join(",")
                );
              },
              (d) => {
                o(d);
              },
              r
            );
          }), c;
        } catch {
        } finally {
          r.cachedLocationExpiry && (De = {
            time: Date.now(),
            coords: c
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
const Tn = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Ft = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Gt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, jt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Ht = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Zt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function kn(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((y) => Number(y.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), c = Math.abs(n), l = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${r}° ${l}, ${c}° ${o}`);
    const u = Math.floor(r), f = Math.floor(c), h = (r - u) * 60, v = (c - f) * 60;
    if (i == "DM") {
      let y = qt(h, 3).toFixed(3).padStart(6, "0"), E = qt(v, 3).toFixed(3).padStart(6, "0");
      y.endsWith(".000") && E.endsWith(".000") && (y = y.replace(/\.000$/, ""), E = E.replace(/\.000$/, "")), d = `${u}° ${y}' ${l}, ${f}° ${E}' ${o}`;
    }
    if (i == "DMS") {
      const y = Math.floor(h), E = Math.floor(v);
      let O = ((h - y) * 60).toFixed(1).padStart(4, "0"), p = ((v - E) * 60).toFixed(1).padStart(4, "0");
      const S = y.toString().padStart(2, "0"), W = E.toString().padStart(2, "0");
      O.endsWith(".0") && p.endsWith(".0") && (O = O.replace(/\.0$/, ""), p = p.replace(/\.0$/, "")), d = `${u}° ${S}' ${O}" ${l}, ${f}° ${W}' ${p}" ${o}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function qt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function wt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", c = "", l = null, o = [], d = !1;
  if (Tn.test(i))
    throw new Error("invalid coordinate value");
  if (Ft.test(i))
    if (o = Ft.exec(i), d = Ie(o), d)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), l = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Gt.test(i))
    if (o = Gt.exec(i), d = Ie(o), d) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), l = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], c = o[5]) : o[4] && (r = o[4], c = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (jt.test(i))
    if (o = jt.exec(i), d = Ie(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, l = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, l = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], c = o[8]) : o[7] && (r = o[7], c = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ht.test(i))
    if (o = Ht.exec(i), d = Ie(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, l = "DM"), o[6] && (t += o[6] / 3600, l = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], c = o[9]) : o[8] && (r = o[8], c = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Zt.test(i)) {
    if (o = Zt.exec(i), d = Ie(o), o.filter((u) => u).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, l = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, l = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], c = o[9]) : o[8] && (r = o[8], c = o[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !c || !r && c)
      throw new Error("invalid coordinates value");
    if (r && r == c)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let u = /S|SOUTH/i;
    u.test(r) && t > 0 && (t = -1 * t), u = /W|WEST/i, u.test(c) && n > 0 && (n = -1 * n);
    const f = o[0].trim();
    let h, v;
    const y = /[,/;\u0020]/g, E = f.match(y);
    if (E == null) {
      const S = Math.floor(i.length / 2);
      h = f.substring(0, S).trim(), v = f.substring(S).trim();
    } else {
      let S;
      E.length % 2 == 1 ? S = Math.floor(E.length / 2) : S = E.length / 2 - 1;
      let W = 0;
      if (S == 0)
        W = f.indexOf(E[0]), h = f.substring(0, W).trim(), v = f.substring(W + 1).trim();
      else {
        let C = 0, H = 0;
        for (; C <= S; )
          W = f.indexOf(E[C], H), H = W + 1, C++;
        h = f.substring(0, W).trim(), v = f.substring(W + 1).trim();
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
      verbatimCoordinates: f,
      verbatimLatitude: h,
      verbatimLongitude: v,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: l,
      closeEnough: Nn,
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
  for (let c = 0; c < r; c++) {
    const l = e[c], o = e[c + r], d = t.test(l) && t.test(o), u = n.test(l) && n.test(o), f = l == o;
    if (!(l == null && o == null)) {
      if (l == null || o == null)
        return !1;
      if (d || u || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function Qt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Nn(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Qt(this.decimalLatitude, Number(e[0])) && Qt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Mn = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
wt.to = Mn;
const Cn = [
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
], Wn = {
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
], Rn = [
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
function zn() {
  const i = [];
  return Cn.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Wn });
  }), [...i, ...On, ...Rn];
}
const Un = zn();
wt.formats = Un.map((i) => i.verbatimCoordinates);
const Dn = wt;
function Kt(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Vt(i) {
  let e, t;
  return e = new Ln({}), {
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
      q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fe(e, n);
    }
  };
}
function Yt(i) {
  let e, t, n, r, c;
  return t = new yn({}), {
    c() {
      e = U("button"), ve(t.$$.fragment), a(e, "type", "button"), a(
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
    m(l, o) {
      I(l, e, o), de(t, e, null), n = !0, r || (c = Z(
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
      1) && Ce(
        e,
        "active",
        /*reverseActive*/
        l[0]
      );
    },
    i(l) {
      n || (G(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && D(e), fe(t), r = !1, c();
    }
  };
}
function In(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, c, l, o = At(
    /*listFeatures*/
    i[13]
  );
  const d = (u) => (
    /*feature*/
    u[97].id + /*feature*/
    (u[97].address ? "," + /*feature*/
    u[97].address : "")
  );
  for (let u = 0; u < o.length; u += 1) {
    let f = Kt(i, o, u), h = d(f);
    n.set(h, t[u] = Xt(h, f));
  }
  return {
    c() {
      e = U("ul");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      a(e, "class", "options svelte-bz0zu3"), a(e, "role", "listbox");
    },
    m(u, f) {
      I(u, e, f);
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(e, null);
      r = !0, c || (l = [
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
      ], c = !0);
    },
    p(u, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = At(
        /*listFeatures*/
        u[13]
      ), xe(), t = $i(t, f, d, 1, u, o, n, e, xi, Xt, null, Kt), $e());
    },
    i(u) {
      if (!r) {
        for (let f = 0; f < o.length; f += 1)
          G(t[f]);
        r = !0;
      }
    },
    o(u) {
      for (let f = 0; f < t.length; f += 1)
        q(t[f]);
      r = !1;
    },
    d(u) {
      u && D(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      c = !1, me(l);
    }
  };
}
function An(i) {
  let e, t, n, r, c, l;
  return t = new si({}), {
    c() {
      e = U("div"), ve(t.$$.fragment), n = $(), r = U("div"), c = be(
        /*noResultsMessage*/
        i[8]
      ), a(r, "class", "svelte-bz0zu3"), a(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, d) {
      I(o, e, d), de(t, e, null), M(e, n), M(e, r), M(r, c), l = !0;
    },
    p(o, d) {
      (!l || d[0] & /*noResultsMessage*/
      256) && Pe(
        c,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      l || (G(t.$$.fragment, o), l = !0);
    },
    o(o) {
      q(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && D(e), fe(t);
    }
  };
}
function Pn(i) {
  let e = "", t;
  return {
    c() {
      t = be(e);
    },
    m(n, r) {
      I(n, t, r);
    },
    p: P,
    i: P,
    o: P,
    d(n) {
      n && D(t);
    }
  };
}
function Bn(i) {
  let e, t, n, r, c, l, o, d, u, f, h;
  return t = new si({}), d = new oi({}), {
    c() {
      e = U("div"), ve(t.$$.fragment), n = $(), r = U("div"), c = be(
        /*errorMessage*/
        i[7]
      ), l = $(), o = U("button"), ve(d.$$.fragment), a(r, "class", "svelte-bz0zu3"), a(o, "class", "svelte-bz0zu3"), a(e, "class", "error svelte-bz0zu3");
    },
    m(v, y) {
      I(v, e, y), de(t, e, null), M(e, n), M(e, r), M(r, c), M(e, l), M(e, o), de(d, o, null), u = !0, f || (h = Z(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), f = !0);
    },
    p(v, y) {
      (!u || y[0] & /*errorMessage*/
      128) && Pe(
        c,
        /*errorMessage*/
        v[7]
      );
    },
    i(v) {
      u || (G(t.$$.fragment, v), G(d.$$.fragment, v), u = !0);
    },
    o(v) {
      q(t.$$.fragment, v), q(d.$$.fragment, v), u = !1;
    },
    d(v) {
      v && D(e), fe(t), fe(d), f = !1, h();
    }
  };
}
function Xt(i, e) {
  var o;
  let t, n, r;
  function c() {
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
  return n = new bn({
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
  }), n.$on("mouseenter", c), n.$on("select", l), {
    key: i,
    first: null,
    c() {
      t = ji(), ve(n.$$.fragment), this.first = t;
    },
    m(d, u) {
      I(d, t, u), de(n, d, u), r = !0;
    },
    p(d, u) {
      var h;
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
        ((h = e[14]) == null ? void 0 : h.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), u[0] & /*iconsBaseUrl*/
      4096 && (f.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(f);
    },
    i(d) {
      r || (G(n.$$.fragment, d), r = !0);
    },
    o(d) {
      q(n.$$.fragment, d), r = !1;
    },
    d(d) {
      d && D(t), fe(n, d);
    }
  };
}
function Fn(i) {
  let e, t, n, r, c, l, o, d, u, f, h, v, y, E, O, p, S, W, C, H, X, Q = !1;
  c = new En({}), h = new oi({});
  let w = (
    /*abortController*/
    i[20] && Vt()
  ), g = (
    /*enableReverse*/
    i[6] === "button" && Yt(i)
  );
  const N = (
    /*#slots*/
    i[70].default
  ), k = Pi(
    N,
    i,
    /*$$scope*/
    i[69],
    null
  ), L = [Bn, Pn, An, In], m = [];
  function Le(_, B) {
    var oe, ee;
    return (
      /*error*/
      _[19] ? 0 : !/*focusedDelayed*/
      _[16] && !/*keepListOpen*/
      _[4] ? 1 : (
        /*listFeatures*/
        ((oe = _[13]) == null ? void 0 : oe.length) === 0 ? 2 : (
          /*listFeatures*/
          (ee = _[13]) != null && ee.length && /*focusedDelayed*/
          (_[16] || /*keepListOpen*/
          _[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(p = Le(i)) && (S = m[p] = L[p](i)), {
    c() {
      e = $(), t = U("form"), n = U("div"), r = U("button"), ve(c.$$.fragment), l = $(), o = U("input"), d = $(), u = U("div"), f = U("button"), ve(h.$$.fragment), v = $(), w && w.c(), y = $(), g && g.c(), E = $(), k && k.c(), O = $(), S && S.c(), a(r, "class", "search-button svelte-bz0zu3"), a(r, "type", "button"), a(
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
      ), a(f, "class", "svelte-bz0zu3"), a(u, "class", "clear-button-container svelte-bz0zu3"), Ce(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(n, "class", "input-group svelte-bz0zu3"), a(t, "class", W = et(
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
    m(_, B) {
      I(_, e, B), I(_, t, B), M(t, n), M(n, r), de(c, r, null), M(n, l), M(n, o), i[72](o), Dt(
        o,
        /*searchValue*/
        i[1]
      ), M(n, d), M(n, u), M(u, f), de(h, f, null), M(u, v), w && w.m(u, null), M(n, y), g && g.m(n, null), M(n, E), k && k.m(n, null), M(t, O), ~p && m[p].m(t, null), C = !0, H || (X = [
        Z(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        Z(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        Z(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        Z(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        Z(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        Z(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        Z(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        Z(
          o,
          "change",
          /*change_handler*/
          i[77]
        ),
        Z(
          f,
          "click",
          /*click_handler_2*/
          i[78]
        ),
        Z(t, "submit", Hi(
          /*handleSubmit*/
          i[22]
        ))
      ], H = !0);
    },
    p(_, B) {
      (!C || B[0] & /*placeholder*/
      512) && a(
        o,
        "placeholder",
        /*placeholder*/
        _[9]
      ), (!C || B[0] & /*placeholder*/
      512) && a(
        o,
        "aria-label",
        /*placeholder*/
        _[9]
      ), B[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      _[1] && Dt(
        o,
        /*searchValue*/
        _[1]
      ), (!C || B[0] & /*clearButtonTitle*/
      8) && a(
        f,
        "title",
        /*clearButtonTitle*/
        _[3]
      ), /*abortController*/
      _[20] ? w ? B[0] & /*abortController*/
      1048576 && G(w, 1) : (w = Vt(), w.c(), G(w, 1), w.m(u, null)) : w && (xe(), q(w, 1, 1, () => {
        w = null;
      }), $e()), (!C || B[0] & /*searchValue*/
      2) && Ce(
        u,
        "displayable",
        /*searchValue*/
        _[1] !== ""
      ), /*enableReverse*/
      _[6] === "button" ? g ? (g.p(_, B), B[0] & /*enableReverse*/
      64 && G(g, 1)) : (g = Yt(_), g.c(), G(g, 1), g.m(n, E)) : g && (xe(), q(g, 1, 1, () => {
        g = null;
      }), $e()), k && k.p && (!C || B[2] & /*$$scope*/
      128) && Fi(
        k,
        N,
        _,
        /*$$scope*/
        _[69],
        C ? Bi(
          N,
          /*$$scope*/
          _[69],
          B,
          null
        ) : Gi(
          /*$$scope*/
          _[69]
        ),
        null
      );
      let oe = p;
      p = Le(_), p === oe ? ~p && m[p].p(_, B) : (S && (xe(), q(m[oe], 1, 1, () => {
        m[oe] = null;
      }), $e()), ~p ? (S = m[p], S ? S.p(_, B) : (S = m[p] = L[p](_), S.c()), G(S, 1), S.m(t, null)) : S = null), (!C || B[0] & /*className*/
      4 && W !== (W = et(
        /*className*/
        _[2]
      ) + " svelte-bz0zu3")) && a(t, "class", W), (!C || B[0] & /*className, collapsed, searchValue*/
      38) && Ce(
        t,
        "can-collapse",
        /*collapsed*/
        _[5] && /*searchValue*/
        _[1] === ""
      );
    },
    i(_) {
      C || (G(Q), G(c.$$.fragment, _), G(h.$$.fragment, _), G(w), G(g), G(k, _), G(S), C = !0);
    },
    o(_) {
      q(Q), q(c.$$.fragment, _), q(h.$$.fragment, _), q(w), q(g), q(k, _), q(S), C = !1;
    },
    d(_) {
      _ && (D(e), D(t)), fe(c), i[72](null), fe(h), w && w.d(), g && g.d(), k && k.d(_), ~p && m[p].d(), H = !1, me(X);
    }
  };
}
function Gn(i, e, t) {
  let n, r, c, { $$slots: l = {}, $$scope: o } = e;
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
  let { class: u = void 0 } = e, { apiKey: f } = e, { bbox: h = void 0 } = e, { clearButtonTitle: v = "clear" } = e, { clearOnBlur: y = !1 } = e, { clearListOnPick: E = !1 } = e, { keepListOpen: O = !1 } = e, { collapsed: p = !1 } = e, { country: S = void 0 } = e, { debounceSearch: W = 200 } = e, { enableReverse: C = "never" } = e, { errorMessage: H = "Something went wrong…" } = e, { filter: X = () => !0 } = e, { flyTo: Q = !0 } = e, { fuzzyMatch: w = !0 } = e, { language: g = void 0 } = e, { limit: N = void 0 } = e;
  const k = 41415112612;
  let { reverseGeocodingLimit: L = k } = e, { mapController: m = void 0 } = e, { minLength: Le = 2 } = e, { noResultsMessage: _ = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: B = "Search" } = e, { proximity: oe = [{ type: "server-geolocation" }] } = e, { reverseActive: ee = C === "always" } = e, { reverseButtonTitle: Et = "toggle reverse geocoding" } = e, { searchValue: K = "" } = e, { pickedResultStyle: Fe = "full-geometry" } = e, { showPlaceType: St = "if-needed" } = e, { showResultsWhileTyping: Ge = !0 } = e, { selectFirst: pe = !0 } = e, { flyToSelected: je = !1 } = e, { markerOnSelected: He = !0 } = e, { types: tt = void 0 } = e;
  const pt = [];
  let { reverseGeocodingTypes: Ze = pt } = e, { exhaustiveReverseGeocoding: it = !1 } = e, { excludeTypes: nt = !1 } = e;
  const Tt = void 0;
  let { reverseGeocodingExcludeTypes: qe = Tt } = e, { zoom: Qe = d } = e, { apiUrl: rt = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: ot = {} } = e, { iconsBaseUrl: kt = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.6/icons/" } = e, { adjustUrlQuery: st = () => {
  } } = e, { adjustUrl: at = () => {
  } } = e;
  function li(s) {
    ne.focus(s);
  }
  function ui() {
    ne.blur();
  }
  function Nt(s, A = !0, F = !1) {
    t(1, K = s), A ? (t(15, R = -1), Ct()) : (Wt(void 0, !F, F), setTimeout(() => {
      ne.focus(), ne.select();
    }));
  }
  function ci() {
    t(13, T = void 0), t(14, b = void 0), t(15, R = -1);
  }
  function di() {
    t(64, j = []), t(14, b = void 0);
  }
  let T, j, b, Mt = "", ne, R = -1, se, Ke = [], _e, Te, ke, lt, ue = !1;
  const fi = /* @__PURE__ */ new Set(), ge = ni();
  Qi(() => {
    m && (m.setEventHandler(void 0), m.indicateReverse(!1), m.setSelectedMarker(-1), m.setFeatures(void 0, void 0, !1));
  });
  function Ct(s) {
    if (t(17, ue = !1), Te && (clearTimeout(Te), Te = void 0), R > -1 && T)
      t(14, b = T[R]), t(1, K = b.place_type[0] === "reverse" ? b.place_name : b.place_name.replace(/,.*/, "")), t(19, se = void 0), t(64, j = void 0), t(15, R = -1);
    else if (K) {
      const A = s || !ut(K);
      ct(K, { exact: !0 }).then(() => {
        t(64, j = T), t(14, b = void 0), A && mi();
      }).catch((F) => t(19, se = F));
    }
  }
  function ut(s) {
    try {
      return Dn(s, 6);
    } catch {
      return !1;
    }
  }
  async function ct(s, { byId: A = !1, exact: F = !1 } = {}) {
    var x, ae, he;
    t(19, se = void 0), _e == null || _e.abort();
    const J = new AbortController();
    t(20, _e = J);
    try {
      const z = ut(s), Re = new URL(rt + "/" + encodeURIComponent(z ? z.decimalLongitude + "," + z.decimalLatitude : s) + ".json"), te = Re.searchParams;
      g !== void 0 && te.set("language", Array.isArray(g) ? g.join(",") : g ?? "");
      const [mt] = (m == null ? void 0 : m.getCenterAndZoom()) ?? [];
      let le = (x = !z || Ze === pt ? tt : Ze) == null ? void 0 : x.map((V) => typeof V == "string" ? V : mt === void 0 || (V[0] ?? 0) <= mt && mt < (V[1] ?? 1 / 0) ? V[2] : void 0).filter((V) => V !== void 0);
      le && (le = [...new Set(le)], te.set("types", le.join(",")));
      const Rt = !z || qe === Tt ? nt : qe;
      if (Rt && te.set("excludeTypes", String(Rt)), h && te.set("bbox", h.map((V) => V.toFixed(6)).join(",")), S && te.set("country", Array.isArray(S) ? S.join(",") : S), !A && !z) {
        const V = await pn(m, oe, J);
        V && te.set("proximity", V), (F || !Ge) && te.set("autocomplete", "false"), te.set("fuzzyMatch", String(w));
      }
      const ze = L === k ? N : L;
      ze !== void 0 && ze > 1 && (le == null ? void 0 : le.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), z ? (ze === 1 || ze !== void 0 && (it || (le == null ? void 0 : le.length) === 1)) && te.set("limit", String(ze)) : N !== void 0 && te.set("limit", String(N)), te.set("key", f), st(te), at(Re);
      const Wi = Re.searchParams.get("types") === "" && Re.searchParams.get("excludeTypes") !== "true", Ve = Re.toString();
      if (Ve === Mt) {
        A ? (E && t(13, T = void 0), t(14, b = Ke[0])) : (t(13, T = Ke), ((ae = T[R]) == null ? void 0 : ae.id) !== (r == null ? void 0 : r.id) && t(15, R = -1));
        return;
      }
      Mt = Ve;
      let Ue;
      if (Wi)
        Ue = { type: "FeatureCollection", features: [] };
      else {
        const V = await fetch(Ve, { signal: J.signal, ...ot });
        if (!V.ok)
          throw new Error(await V.text());
        Ue = await V.json();
      }
      ge("response", { url: Ve, featureCollection: Ue }), A ? (E && t(13, T = void 0), t(14, b = Ue.features[0]), Ke = [b]) : (t(13, T = Ue.features.filter(X)), z && T.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + z.decimalLongitude + "_" + z.decimalLatitude,
        text: z.decimalLatitude + ", " + z.decimalLongitude,
        place_name: z.decimalLatitude + ", " + z.decimalLongitude,
        place_type: ["reverse"],
        center: [z.decimalLongitude, z.decimalLatitude],
        bbox: [
          z.decimalLongitude,
          z.decimalLatitude,
          z.decimalLongitude,
          z.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [z.decimalLongitude, z.decimalLatitude]
        }
      }), Ke = T, ((he = T[R]) == null ? void 0 : he.id) !== (r == null ? void 0 : r.id) && t(15, R = -1), z && ne.focus());
    } catch (z) {
      if (z && typeof z == "object" && "name" in z && z.name === "AbortError")
        return;
      throw z;
    } finally {
      J === _e && t(20, _e = void 0);
    }
  }
  function mi() {
    var J;
    if (!(j != null && j.length) || !Q)
      return;
    const s = [180, 90, -180, -90], A = !j.some((x) => !x.matching_text);
    let F;
    for (const x of j) {
      const ae = Oe(x);
      if (F = F === void 0 ? ae : ae === void 0 ? F : Math.max(F, ae), A || !x.matching_text)
        for (const he of [0, 1, 2, 3])
          s[he] = Math[he < 2 ? "min" : "max"](s[he], ((J = x.bbox) == null ? void 0 : J[he]) ?? x.center[he % 2]);
    }
    m && j.length > 0 && (b && s[0] === s[2] && s[1] === s[3] ? m.flyTo(b.center, Oe(b)) : m.fitBounds(Bt(s), 50, F));
  }
  function dt() {
    !b || !m || (!b.bbox || b.bbox[0] === b.bbox[2] && b.bbox[1] === b.bbox[3] ? m.flyTo(b.center, Oe(b)) : m.fitBounds(Bt(b.bbox), 50, Oe(b)));
  }
  function Oe(s) {
    var F;
    if (!s.bbox || s.bbox[0] !== s.bbox[2] && s.bbox[1] !== s.bbox[3])
      return;
    const A = s.id.replace(/\..*/, "");
    return (Array.isArray((F = s.properties) == null ? void 0 : F.categories) ? s.properties.categories.reduce(
      (J, x) => {
        const ae = Qe[A + "." + x];
        return J === void 0 ? ae : ae === void 0 ? J : Math.max(J, ae);
      },
      void 0
    ) : void 0) ?? Qe[A];
  }
  function gi(s) {
    t(0, ee = C === "always"), t(13, T = void 0), t(14, b = void 0), t(15, R = -1), Nt(s[1].toFixed(6) + ", " + Sn(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function hi(s) {
    if (!T)
      return;
    let A = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    A && (ne.focus(), t(17, ue = !0), s.preventDefault(), b && R === -1 && t(15, R = T.findIndex((F) => F.id === (b == null ? void 0 : b.id))), R === (b || pe ? 0 : -1) && A === -1 && t(15, R = T.length), t(15, R += A), R >= T.length && t(15, R = -1), R < 0 && (b || pe) && t(15, R = 0));
  }
  function Wt(s, A = !0, F = !1) {
    if (t(19, se = void 0), t(14, b = void 0), t(17, ue = !0), Ge || F) {
      if (Te && clearTimeout(Te), K.length < Le)
        return;
      const J = K;
      Te = window.setTimeout(
        () => {
          ct(J).catch((x) => t(19, se = x));
        },
        A ? W : 0
      );
    } else
      t(13, T = void 0), t(19, se = void 0);
  }
  function ft(s) {
    b && (b == null ? void 0 : b.id) === (s == null ? void 0 : s.id) ? dt() : (t(14, b = s), t(1, K = s.place_name));
  }
  function Ot(s) {
    t(15, R = s);
  }
  function bi() {
    (!pe || b) && t(15, R = -1), je && dt();
  }
  const vi = () => ne.focus();
  function Li(s) {
    vt[s ? "unshift" : "push"](() => {
      ne = s, t(18, ne);
    });
  }
  function _i() {
    K = this.value, t(1, K), t(17, ue), t(31, y), t(16, ke);
  }
  const yi = () => t(17, ue = !0), wi = () => t(17, ue = !1), Ei = () => t(17, ue = !0), Si = () => t(14, b = void 0), pi = () => {
    t(1, K = ""), t(14, b = void 0), ne.focus();
  }, Ti = () => t(0, ee = !ee), ki = () => t(19, se = void 0), Ni = (s) => Ot(s), Mi = (s) => ft(s), Ci = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, u = s.class), "apiKey" in s && t(29, f = s.apiKey), "bbox" in s && t(30, h = s.bbox), "clearButtonTitle" in s && t(3, v = s.clearButtonTitle), "clearOnBlur" in s && t(31, y = s.clearOnBlur), "clearListOnPick" in s && t(32, E = s.clearListOnPick), "keepListOpen" in s && t(4, O = s.keepListOpen), "collapsed" in s && t(5, p = s.collapsed), "country" in s && t(33, S = s.country), "debounceSearch" in s && t(34, W = s.debounceSearch), "enableReverse" in s && t(6, C = s.enableReverse), "errorMessage" in s && t(7, H = s.errorMessage), "filter" in s && t(35, X = s.filter), "flyTo" in s && t(36, Q = s.flyTo), "fuzzyMatch" in s && t(37, w = s.fuzzyMatch), "language" in s && t(38, g = s.language), "limit" in s && t(39, N = s.limit), "reverseGeocodingLimit" in s && t(40, L = s.reverseGeocodingLimit), "mapController" in s && t(41, m = s.mapController), "minLength" in s && t(42, Le = s.minLength), "noResultsMessage" in s && t(8, _ = s.noResultsMessage), "placeholder" in s && t(9, B = s.placeholder), "proximity" in s && t(43, oe = s.proximity), "reverseActive" in s && t(0, ee = s.reverseActive), "reverseButtonTitle" in s && t(10, Et = s.reverseButtonTitle), "searchValue" in s && t(1, K = s.searchValue), "pickedResultStyle" in s && t(44, Fe = s.pickedResultStyle), "showPlaceType" in s && t(11, St = s.showPlaceType), "showResultsWhileTyping" in s && t(45, Ge = s.showResultsWhileTyping), "selectFirst" in s && t(46, pe = s.selectFirst), "flyToSelected" in s && t(47, je = s.flyToSelected), "markerOnSelected" in s && t(48, He = s.markerOnSelected), "types" in s && t(49, tt = s.types), "reverseGeocodingTypes" in s && t(50, Ze = s.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in s && t(51, it = s.exhaustiveReverseGeocoding), "excludeTypes" in s && t(52, nt = s.excludeTypes), "reverseGeocodingExcludeTypes" in s && t(53, qe = s.reverseGeocodingExcludeTypes), "zoom" in s && t(54, Qe = s.zoom), "apiUrl" in s && t(55, rt = s.apiUrl), "fetchParameters" in s && t(56, ot = s.fetchParameters), "iconsBaseUrl" in s && t(12, kt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(57, st = s.adjustUrlQuery), "adjustUrl" in s && t(58, at = s.adjustUrl), "$$scope" in s && t(69, o = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, ee = C === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && Fe !== "marker-only" && b && !b.address && b.geometry.type === "Point" && b.place_type[0] !== "reverse" && ct(b.id, { byId: !0 }).catch((s) => t(19, se = s)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (m && b && b.id !== lt && Q && (dt(), E && t(13, T = void 0), t(64, j = void 0), t(15, R = -1)), t(65, lt = b == null ? void 0 : b.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ke = ue), y && !ke && t(1, K = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && K.length < Le && (t(13, T = void 0), t(19, se = void 0), t(64, j = T)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && pe && T != null && T.length && R == -1 && !b && t(15, R = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && j !== T && t(64, j = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && m && m.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          ee && gi(s.coordinates);
          break;
        case "markerClick":
          {
            const A = T == null ? void 0 : T.find((F) => F.id === s.id);
            A && ft(A);
          }
          break;
        case "markerMouseEnter":
          j && t(15, R = ke ? (T == null ? void 0 : T.findIndex((A) => A.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          j && t(15, R = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = T == null ? void 0 : T[R]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && m && r && Q && je && m.flyTo(r.center, Oe(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = Fe === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (He || m == null || m.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && m && He && !j && (m.setFeatures(r ? [r] : void 0, b, n), m.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && m && m.setFeatures(j, b, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && j && m && m.setSelectedMarker(R), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && m) {
      const s = ut(K);
      m.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && ge("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && ge("pick", { feature: b }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, c = !!(T != null && T.length) && (ke || O)), i.$$.dirty[2] & /*optionsVisible*/
    32 && ge("optionsvisibilitychange", { optionsVisible: c }), i.$$.dirty[0] & /*listFeatures*/
    8192 && ge("featureslisted", { features: T }), i.$$.dirty[2] & /*markedFeatures*/
    4 && ge("featuresmarked", { features: j }), i.$$.dirty[0] & /*reverseActive*/
    1 && ge("reversetoggle", { reverse: ee }), i.$$.dirty[0] & /*searchValue*/
    2 && ge("querychange", { query: K }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && m && m.indicateReverse(ee);
  }, [
    ee,
    K,
    u,
    v,
    O,
    p,
    C,
    H,
    _,
    B,
    Et,
    St,
    kt,
    T,
    b,
    R,
    ke,
    ue,
    ne,
    se,
    _e,
    fi,
    Ct,
    hi,
    Wt,
    ft,
    Ot,
    bi,
    d,
    f,
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
    Le,
    oe,
    Fe,
    Ge,
    pe,
    je,
    He,
    tt,
    Ze,
    it,
    nt,
    qe,
    Qe,
    rt,
    ot,
    st,
    at,
    li,
    ui,
    Nt,
    ci,
    di,
    j,
    lt,
    r,
    c,
    n,
    o,
    l,
    vi,
    Li,
    _i,
    yi,
    wi,
    Ei,
    Si,
    pi,
    Ti,
    ki,
    Ni,
    Mi,
    Ci
  ];
}
class jn extends Se {
  constructor(e) {
    super(), Ee(
      this,
      e,
      Gn,
      Fn,
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
}
const Jt = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], Hn = [
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
function xt(i) {
  return "on" + i[0].toUpperCase() + i.slice(1);
}
const Qn = zi(function(e, t) {
  const n = zt(void 0), r = zt(void 0), c = { ...e };
  for (const l of Jt)
    delete c[xt(l)];
  ht(() => {
    if (!n.current)
      throw new Error();
    const l = new jn({
      target: n.current,
      props: c
    });
    return r.current = l, () => l.$destroy();
  }, []);
  for (const l of Hn)
    ht(() => {
      r.current && e[l] !== void 0 && r.current.$set({ [l]: e[l] });
    }, [e[l]]);
  for (const l of Jt) {
    const o = e[xt(l)];
    ht(
      () => {
        var d;
        return o && ((d = r.current) == null ? void 0 : d.$on(l.toLowerCase(), (u) => {
          o(u.detail);
        }));
      },
      [o]
    );
  }
  return Ui(t, () => ({
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
  })), Di("div", { ref: n });
});
export {
  Qn as GeocodingControl
};
//# sourceMappingURL=react.js.map
