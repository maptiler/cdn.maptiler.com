var zn = Object.defineProperty;
var wi = (i) => {
  throw TypeError(i);
};
var Un = (i, e, t) => e in i ? zn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var P = (i, e, t) => Un(i, typeof e != "symbol" ? e + "" : e, t), Ei = (i, e, t) => e.has(i) || wi("Cannot " + t);
var ue = (i, e, t) => (Ei(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Xt = (i, e, t) => e.has(i) ? wi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Jt = (i, e, t, n) => (Ei(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as Li from "@maptiler/sdk";
function ee() {
}
function qn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function $i(i) {
  return i();
}
function _i() {
  return /* @__PURE__ */ Object.create(null);
}
function je(i) {
  i.forEach($i);
}
function en(i) {
  return typeof i == "function";
}
function Qe(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Mt;
function me(i, e) {
  return i === e ? !0 : (Mt || (Mt = document.createElement("a")), Mt.href = e, i === Mt.href);
}
function Fn(i) {
  return Object.keys(i).length === 0;
}
function jn(i, e, t, n) {
  if (i) {
    const r = tn(i, e, t, n);
    return i[0](r);
  }
}
function tn(i, e, t, n) {
  return i[1] && n ? qn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Zn(i, e, t, n) {
  return i[2], e.dirty;
}
function Hn(i, e, t, n, r, u) {
  if (r) {
    const h = tn(e, t, n, u);
    i.p(h, r);
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
function Wt(i) {
  return i ?? "";
}
function H(i, e) {
  i.appendChild(e);
}
function te(i, e, t) {
  i.insertBefore(e, t || null);
}
function $(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function X(i) {
  return document.createElement(i);
}
function ke(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Ke(i) {
  return document.createTextNode(i);
}
function Ee() {
  return Ke(" ");
}
function Kn() {
  return Ke("");
}
function ce(i, e, t, n) {
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
function Qn(i) {
  return Array.from(i.childNodes);
}
function Et(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Si(i, e) {
  i.value = e ?? "";
}
function Be(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Xn(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Lt;
function wt(i) {
  Lt = i;
}
function nn() {
  if (!Lt) throw new Error("Function called outside component initialization");
  return Lt;
}
function Jn(i) {
  nn().$$.on_destroy.push(i);
}
function rn() {
  const i = nn();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = Xn(
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
function $n(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ut = [], ii = [];
let at = [];
const xi = [], er = /* @__PURE__ */ Promise.resolve();
let ni = !1;
function tr() {
  ni || (ni = !0, er.then(sn));
}
function ri(i) {
  at.push(i);
}
const $t = /* @__PURE__ */ new Set();
let lt = 0;
function sn() {
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
    for (wt(null), ut.length = 0, lt = 0; ii.length; ) ii.pop()();
    for (let e = 0; e < at.length; e += 1) {
      const t = at[e];
      $t.has(t) || ($t.add(t), t());
    }
    at.length = 0;
  } while (ut.length);
  for (; xi.length; )
    xi.pop()();
  ni = !1, $t.clear(), wt(i);
}
function ir(i) {
  if (i.fragment !== null) {
    i.update(), je(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(ri);
  }
}
function nr(i) {
  const e = [], t = [];
  at.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), at = e;
}
const Rt = /* @__PURE__ */ new Set();
let rt;
function Pt() {
  rt = {
    r: 0,
    c: [],
    p: rt
    // parent group
  };
}
function It() {
  rt.r || je(rt.c), rt = rt.p;
}
function oe(i, e) {
  i && i.i && (Rt.delete(i), i.i(e));
}
function he(i, e, t, n) {
  if (i && i.o) {
    if (Rt.has(i)) return;
    Rt.add(i), rt.c.push(() => {
      Rt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Ti(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function rr(i, e) {
  he(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function sr(i, e, t, n, r, u, h, o, g, c, E, S) {
  let C = i.length, R = u.length, O = C;
  const A = {};
  for (; O--; ) A[i[O].key] = O;
  const M = [], k = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), N = [];
  for (O = R; O--; ) {
    const B = S(r, u, O), s = t(B);
    let l = h.get(s);
    l ? N.push(() => l.p(B, e)) : (l = c(s, B), l.c()), k.set(s, M[O] = l), s in A && y.set(s, Math.abs(O - A[s]));
  }
  const D = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
  function z(B) {
    oe(B, 1), B.m(o, E), h.set(B.key, B), E = B.first, R--;
  }
  for (; C && R; ) {
    const B = M[R - 1], s = i[C - 1], l = B.key, f = s.key;
    B === s ? (E = B.first, C--, R--) : k.has(f) ? !h.has(l) || D.has(l) ? z(B) : q.has(f) ? C-- : y.get(l) > y.get(f) ? (q.add(l), z(B)) : (D.add(f), C--) : (g(s, h), C--);
  }
  for (; C--; ) {
    const B = i[C];
    k.has(B.key) || g(B, h);
  }
  for (; R; ) z(M[R - 1]);
  return je(N), M;
}
function Ye(i) {
  i && i.c();
}
function Ue(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), ri(() => {
    const u = i.$$.on_mount.map($i).filter(en);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : je(u), i.$$.on_mount = [];
  }), r.forEach(ri);
}
function qe(i, e) {
  const t = i.$$;
  t.fragment !== null && (nr(t.after_update), je(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function or(i, e) {
  i.$$.dirty[0] === -1 && (ut.push(i), tr(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Xe(i, e, t, n, r, u, h = null, o = [-1]) {
  const g = Lt;
  wt(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: ee,
    not_equal: r,
    bound: _i(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: _i(),
    dirty: o,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  h && h(c.root);
  let E = !1;
  if (c.ctx = t ? t(i, e.props || {}, (S, C, ...R) => {
    const O = R.length ? R[0] : C;
    return c.ctx && r(c.ctx[S], c.ctx[S] = O) && (!c.skip_bound && c.bound[S] && c.bound[S](O), E && or(i, S)), C;
  }) : [], c.update(), E = !0, je(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const S = Qn(e.target);
      c.fragment && c.fragment.l(S), S.forEach($);
    } else
      c.fragment && c.fragment.c();
    e.intro && oe(i.$$.fragment), Ue(i, e.target, e.anchor), sn();
  }
  wt(g);
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
    qe(this, 1), this.$destroy = ee;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!en(t))
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
    this.$$set && !Fn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const lr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(lr);
function ur(i) {
  let e, t;
  return {
    c() {
      e = ke("svg"), t = ke("path"), x(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), x(e, "viewBox", "0 0 14 14"), x(e, "width", "13"), x(e, "height", "13"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      te(n, e, r), H(e, t);
    },
    p: ee,
    i: ee,
    o: ee,
    d(n) {
      n && $(e);
    }
  };
}
class on extends Je {
  constructor(e) {
    super(), Xe(this, e, null, ur, Qe, {});
  }
}
function ar(i) {
  let e, t;
  return {
    c() {
      e = ke("svg"), t = ke("path"), x(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), x(e, "viewBox", "0 0 30 30"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      te(n, e, r), H(e, t);
    },
    p: ee,
    i: ee,
    o: ee,
    d(n) {
      n && $(e);
    }
  };
}
class ln extends Je {
  constructor(e) {
    super(), Xe(this, e, null, ar, Qe, {});
  }
}
function fr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function cr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function hr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function dr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function gr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function mr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function pr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function yr(i) {
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
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(u, h) {
      te(u, e, h), n || (r = ce(
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
function vr(i) {
  let e, t;
  return {
    c() {
      e = X("div"), x(e, "class", "sprite-icon svelte-w9y5n9"), x(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / _e}px;
        height: ${/*spriteIcon*/
      i[6].height / _e}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${si}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / _e}px -${/*spriteIcon*/
      i[6].y / _e}px;
        background-size: ${Ne.width / _e}px ${Ne.height / _e}px;
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
      n[6].width / _e}px;
        height: ${/*spriteIcon*/
      n[6].height / _e}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${si}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / _e}px -${/*spriteIcon*/
      n[6].y / _e}px;
        background-size: ${Ne.width / _e}px ${Ne.height / _e}px;
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
function Mi(i) {
  let e, t;
  return {
    c() {
      e = X("span"), t = Ke(
        /*placeType*/
        i[7]
      ), x(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      te(n, e, r), H(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && Et(
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
function br(i) {
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
  ), O, A, M = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), k, y, N, D, q, z;
  function B(m, a) {
    return a & /*feature*/
    1 && (t = null), a & /*feature*/
    1 && (n = null), a & /*feature*/
    1 && (r = null), a & /*feature*/
    1 && (u = null), Ne && /*spriteIcon*/
    m[6] ? vr : (
      /*imageUrl*/
      m[5] ? yr : (
        /*feature*/
        m[0].address ? pr : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("road.")), t ? mr : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("address.")), n ? gr : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? dr : (u == null && (u = !!/*feature*/
        m[0].id.startsWith("poi.")), u ? hr : (
          /*isReverse*/
          m[8] ? cr : fr
        )))))
      )
    );
  }
  let s = B(i, -1), l = s(i), f = R && Mi(i);
  return {
    c() {
      e = X("li"), l.c(), h = Ee(), o = X("span"), g = X("span"), c = X("span"), S = Ke(E), C = Ee(), f && f.c(), O = Ee(), A = X("span"), k = Ke(M), x(c, "class", "primary svelte-w9y5n9"), x(g, "class", "svelte-w9y5n9"), x(A, "class", "line2 svelte-w9y5n9"), x(o, "class", "texts svelte-w9y5n9"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", y = /*style*/
      i[1] === "selected"), x(e, "aria-checked", N = /*style*/
      i[1] === "picked"), x(e, "class", D = Wt(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(m, a) {
      te(m, e, a), l.m(e, null), H(e, h), H(e, o), H(o, g), H(g, c), H(c, S), H(g, C), f && f.m(g, null), H(o, O), H(o, A), H(A, k), q || (z = [
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
      ], q = !0);
    },
    p(m, [a]) {
      s === (s = B(m, a)) && l ? l.p(m, a) : (l.d(1), l = s(m), l && (l.c(), l.m(e, h))), a & /*isReverse, feature*/
      257 && E !== (E = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Et(S, E), a & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (R = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), R ? f ? f.p(m, a) : (f = Mi(m), f.c(), f.m(g, null)) : f && (f.d(1), f = null), a & /*isReverse, feature*/
      257 && M !== (M = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Et(k, M), a & /*style*/
      2 && y !== (y = /*style*/
      m[1] === "selected") && x(e, "aria-selected", y), a & /*style*/
      2 && N !== (N = /*style*/
      m[1] === "picked") && x(e, "aria-checked", N), a & /*style*/
      2 && D !== (D = Wt(
        /*style*/
        m[1]
      ) + " svelte-w9y5n9") && x(e, "class", D);
    },
    i: ee,
    o: ee,
    d(m) {
      m && $(e), l.d(), f && f.d(), q = !1, je(z);
    }
  };
}
const un = devicePixelRatio > 1.25, si = un ? "@2x" : "", _e = un ? 2 : 1;
let Ne, Ct;
function wr(i, e, t) {
  let n, r, u, { feature: h } = e, { style: o = "default" } = e, { showPlaceType: g } = e, { missingIconsCache: c } = e, { iconsBaseUrl: E } = e;
  const S = rn();
  let C, R, O, A;
  function M() {
    Ct ?? (Ct = fetch(`${E}sprite${si}.json`).then((s) => s.json()).then((s) => {
      Ne = s;
    }).catch(() => {
      Ne = null;
    }));
  }
  function k() {
    R && c.add(R), y();
  }
  function y() {
    Ne !== void 0 ? N() : (M(), Ct == null || Ct.then(N));
  }
  function N() {
    do {
      if (A--, t(4, C = n == null ? void 0 : n[A]), t(6, O = C ? Ne == null ? void 0 : Ne.icons[C] : void 0), O)
        break;
      t(5, R = C ? E + C.replace(/ /g, "_") + ".svg" : void 0);
    } while (A > -1 && (!R || c.has(R)));
  }
  function D(s) {
    $n.call(this, i, s);
  }
  const q = () => k(), z = () => S("select", void 0), B = (s) => {
    document.activeElement !== s.target && S("select", void 0);
  };
  return i.$$set = (s) => {
    "feature" in s && t(0, h = s.feature), "style" in s && t(1, o = s.style), "showPlaceType" in s && t(2, g = s.showPlaceType), "missingIconsCache" in s && t(11, c = s.missingIconsCache), "iconsBaseUrl" in s && t(3, E = s.iconsBaseUrl);
  }, i.$$.update = () => {
    var s, l, f, m, a;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (s = h.properties) == null ? void 0 : s.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = h.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((f = (l = h.properties) == null ? void 0 : l.categories) == null ? void 0 : f.join(", ")) ?? ((a = (m = h.properties) == null ? void 0 : m.place_type_name) == null ? void 0 : a[0]) ?? h.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (A = (n == null ? void 0 : n.length) ?? 0, y());
  }, [
    h,
    o,
    g,
    E,
    C,
    R,
    O,
    u,
    r,
    S,
    k,
    c,
    n,
    D,
    q,
    z,
    B
  ];
}
class Er extends Je {
  constructor(e) {
    super(), Xe(this, e, wr, br, Qe, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function Lr(i) {
  let e;
  return {
    c() {
      e = X("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', x(e, "class", "svelte-7cmwmc");
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
class _r extends Je {
  constructor(e) {
    super(), Xe(this, e, null, Lr, Qe, {});
  }
}
function Sr(i) {
  let e, t, n;
  return {
    c() {
      e = ke("svg"), t = ke("path"), x(t, "stroke-width", "4"), x(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), x(t, "class", "svelte-gzo3ar"), x(e, "width", n = /*displayIn*/
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
    m(r, u) {
      te(r, e, u), H(e, t);
    },
    p(r, [u]) {
      u & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && x(e, "width", n), u & /*displayIn*/
      1 && Be(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), u & /*displayIn*/
      1 && Be(
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
function xr(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class Tr extends Je {
  constructor(e) {
    super(), Xe(this, e, xr, Sr, Qe, { displayIn: 0 });
  }
}
function Mr(i) {
  let e, t;
  return {
    c() {
      e = ke("svg"), t = ke("path"), x(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), x(e, "viewBox", "0 0 60.006 21.412"), x(e, "width", "14"), x(e, "height", "20"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      te(n, e, r), H(e, t);
    },
    p: ee,
    i: ee,
    o: ee,
    d(n) {
      n && $(e);
    }
  };
}
class Cr extends Je {
  constructor(e) {
    super(), Xe(this, e, null, Mr, Qe, {});
  }
}
function Nr(i) {
  let e, t, n;
  return {
    c() {
      e = ke("svg"), t = ke("circle"), n = ke("path"), x(t, "cx", "4.789"), x(t, "cy", "4.787"), x(t, "r", "3.85"), x(t, "class", "svelte-1aq105l"), x(n, "d", "M12.063 12.063 7.635 7.635"), x(n, "class", "svelte-1aq105l"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "13"), x(e, "height", "13"), x(e, "viewBox", "0 0 13 13"), x(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      te(r, e, u), H(e, t), H(e, n);
    },
    p: ee,
    i: ee,
    o: ee,
    d(r) {
      r && $(e);
    }
  };
}
class kr extends Je {
  constructor(e) {
    super(), Xe(this, e, null, Nr, Qe, {});
  }
}
function Or(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function Gt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let gt;
async function Rr(i, e, t) {
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
          r.cachedLocationExpiry && (gt = {
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
const Pr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Ci = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Ni = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, ki = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Oi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ri = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Ir(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((R) => Number(R.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), h = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let g;
    i == "DD" && (g = `${r}° ${h}, ${u}° ${o}`);
    const c = Math.floor(r), E = Math.floor(u), S = (r - c) * 60, C = (u - E) * 60;
    if (i == "DM") {
      let R = Pi(S, 3).toFixed(3).padStart(6, "0"), O = Pi(C, 3).toFixed(3).padStart(6, "0");
      R.endsWith(".000") && O.endsWith(".000") && (R = R.replace(/\.000$/, ""), O = O.replace(/\.000$/, "")), g = `${c}° ${R}' ${h}, ${E}° ${O}' ${o}`;
    }
    if (i == "DMS") {
      const R = Math.floor(S), O = Math.floor(C);
      let A = ((S - R) * 60).toFixed(1).padStart(4, "0"), M = ((C - O) * 60).toFixed(1).padStart(4, "0");
      const k = R.toString().padStart(2, "0"), y = O.toString().padStart(2, "0");
      A.endsWith(".0") && M.endsWith(".0") && (A = A.replace(/\.0$/, ""), M = M.replace(/\.0$/, "")), g = `${c}° ${k}' ${A}" ${h}, ${E}° ${y}' ${M}" ${o}`;
    }
    return g;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Pi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function fi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", h = null, o = [], g = !1;
  if (Pr.test(i))
    throw new Error("invalid coordinate value");
  if (Ci.test(i))
    if (o = Ci.exec(i), g = mt(o), g)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), h = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Ni.test(i))
    if (o = Ni.exec(i), g = mt(o), g) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), h = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ki.test(i))
    if (o = ki.exec(i), g = mt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, h = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, h = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Oi.test(i))
    if (o = Oi.exec(i), g = mt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, h = "DM"), o[6] && (t += o[6] / 3600, h = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ri.test(i)) {
    if (o = Ri.exec(i), g = mt(o), o.filter((c) => c).length <= 5)
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
      let y = 0;
      if (k == 0)
        y = E.indexOf(O[0]), S = E.substring(0, y).trim(), C = E.substring(y + 1).trim();
      else {
        let N = 0, D = 0;
        for (; N <= k; )
          y = E.indexOf(O[N], D), D = y + 1, N++;
        S = E.substring(0, y).trim(), C = E.substring(y + 1).trim();
      }
    }
    const A = S.split(".");
    if (A.length == 2 && A[1] == 0 && A[1].length != 2)
      throw new Error("invalid coordinates format");
    const M = C.split(".");
    if (M.length == 2 && M[1] == 0 && M[1].length != 2)
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
      closeEnough: Ar,
      toCoordinateFormat: Ir
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
function Ii(i, e) {
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
    return Ii(this.decimalLatitude, Number(e[0])) && Ii(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Br = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
fi.to = Br;
const Wr = [
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
], Gr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Dr = [
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
], zr = [
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
function Ur() {
  const i = [];
  return Wr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Gr });
  }), [...i, ...Dr, ...zr];
}
const qr = Ur();
fi.formats = qr.map((i) => i.verbatimCoordinates);
const Fr = fi;
function Ai(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Bi(i) {
  let e, t;
  return e = new _r({}), {
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
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qe(e, n);
    }
  };
}
function Wi(i) {
  let e, t, n, r, u;
  return t = new Cr({}), {
    c() {
      e = X("button"), Ye(t.$$.fragment), x(e, "type", "button"), x(
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
    m(h, o) {
      te(h, e, o), Ue(t, e, null), n = !0, r || (u = ce(
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
      1) && Be(
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
      h && $(e), qe(t), r = !1, u();
    }
  };
}
function jr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, h, o = Ti(
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
    let E = Ai(i, o, c), S = g(E);
    n.set(S, t[c] = Gi(S, E));
  }
  return {
    c() {
      e = X("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(c, E) {
      te(c, e, E);
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
      102823936 && (o = Ti(
        /*listFeatures*/
        c[13]
      ), Pt(), t = sr(t, E, g, 1, c, o, n, e, rr, Gi, null, Ai), It());
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
      c && $(e);
      for (let E = 0; E < t.length; E += 1)
        t[E].d();
      u = !1, je(h);
    }
  };
}
function Zr(i) {
  let e, t, n, r, u, h;
  return t = new ln({}), {
    c() {
      e = X("div"), Ye(t.$$.fragment), n = Ee(), r = X("div"), u = Ke(
        /*noResultsMessage*/
        i[8]
      ), x(r, "class", "svelte-bz0zu3"), x(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, g) {
      te(o, e, g), Ue(t, e, null), H(e, n), H(e, r), H(r, u), h = !0;
    },
    p(o, g) {
      (!h || g[0] & /*noResultsMessage*/
      256) && Et(
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
      o && $(e), qe(t);
    }
  };
}
function Hr(i) {
  let e = "", t;
  return {
    c() {
      t = Ke(e);
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
function Vr(i) {
  let e, t, n, r, u, h, o, g, c, E, S;
  return t = new ln({}), g = new on({}), {
    c() {
      e = X("div"), Ye(t.$$.fragment), n = Ee(), r = X("div"), u = Ke(
        /*errorMessage*/
        i[7]
      ), h = Ee(), o = X("button"), Ye(g.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(o, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(C, R) {
      te(C, e, R), Ue(t, e, null), H(e, n), H(e, r), H(r, u), H(e, h), H(e, o), Ue(g, o, null), c = !0, E || (S = ce(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), E = !0);
    },
    p(C, R) {
      (!c || R[0] & /*errorMessage*/
      128) && Et(
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
      C && $(e), qe(t), qe(g), E = !1, S();
    }
  };
}
function Gi(i, e) {
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
  return n = new Er({
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
      t = Kn(), Ye(n.$$.fragment), this.first = t;
    },
    m(g, c) {
      te(g, t, c), Ue(n, g, c), r = !0;
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
      g && $(t), qe(n, g);
    }
  };
}
function Kr(i) {
  let e, t, n, r, u, h, o, g, c, E, S, C, R, O, A, M, k, y, N, D, q, z = !1;
  u = new kr({}), S = new on({});
  let B = (
    /*abortController*/
    i[20] && Bi()
  ), s = (
    /*enableReverse*/
    i[6] === "button" && Wi(i)
  );
  const l = (
    /*#slots*/
    i[70].default
  ), f = jn(
    l,
    i,
    /*$$scope*/
    i[69],
    null
  ), m = [Vr, Hr, Zr, jr], a = [];
  function b(p, d) {
    var v, w;
    return (
      /*error*/
      p[19] ? 0 : !/*focusedDelayed*/
      p[16] && !/*keepListOpen*/
      p[4] ? 1 : (
        /*listFeatures*/
        ((v = p[13]) == null ? void 0 : v.length) === 0 ? 2 : (
          /*listFeatures*/
          (w = p[13]) != null && w.length && /*focusedDelayed*/
          (p[16] || /*keepListOpen*/
          p[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(M = b(i)) && (k = a[M] = m[M](i)), {
    c() {
      e = Ee(), t = X("form"), n = X("div"), r = X("button"), Ye(u.$$.fragment), h = Ee(), o = X("input"), g = Ee(), c = X("div"), E = X("button"), Ye(S.$$.fragment), C = Ee(), B && B.c(), R = Ee(), s && s.c(), O = Ee(), f && f.c(), A = Ee(), k && k.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
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
      ), x(E, "class", "svelte-bz0zu3"), x(c, "class", "clear-button-container svelte-bz0zu3"), Be(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", y = Wt(
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
    m(p, d) {
      te(p, e, d), te(p, t, d), H(t, n), H(n, r), Ue(u, r, null), H(n, h), H(n, o), i[72](o), Si(
        o,
        /*searchValue*/
        i[1]
      ), H(n, g), H(n, c), H(c, E), Ue(S, E, null), H(c, C), B && B.m(c, null), H(n, R), s && s.m(n, null), H(n, O), f && f.m(n, null), H(t, A), ~M && a[M].m(t, null), N = !0, D || (q = [
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
        ce(t, "submit", Yn(
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
      p[1] && Si(
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
      p[20] ? B ? d[0] & /*abortController*/
      1048576 && oe(B, 1) : (B = Bi(), B.c(), oe(B, 1), B.m(c, null)) : B && (Pt(), he(B, 1, 1, () => {
        B = null;
      }), It()), (!N || d[0] & /*searchValue*/
      2) && Be(
        c,
        "displayable",
        /*searchValue*/
        p[1] !== ""
      ), /*enableReverse*/
      p[6] === "button" ? s ? (s.p(p, d), d[0] & /*enableReverse*/
      64 && oe(s, 1)) : (s = Wi(p), s.c(), oe(s, 1), s.m(n, O)) : s && (Pt(), he(s, 1, 1, () => {
        s = null;
      }), It()), f && f.p && (!N || d[2] & /*$$scope*/
      128) && Hn(
        f,
        l,
        p,
        /*$$scope*/
        p[69],
        N ? Zn(
          l,
          /*$$scope*/
          p[69],
          d,
          null
        ) : Vn(
          /*$$scope*/
          p[69]
        ),
        null
      );
      let v = M;
      M = b(p), M === v ? ~M && a[M].p(p, d) : (k && (Pt(), he(a[v], 1, 1, () => {
        a[v] = null;
      }), It()), ~M ? (k = a[M], k ? k.p(p, d) : (k = a[M] = m[M](p), k.c()), oe(k, 1), k.m(t, null)) : k = null), (!N || d[0] & /*className*/
      4 && y !== (y = Wt(
        /*className*/
        p[2]
      ) + " svelte-bz0zu3")) && x(t, "class", y), (!N || d[0] & /*className, collapsed, searchValue*/
      38) && Be(
        t,
        "can-collapse",
        /*collapsed*/
        p[5] && /*searchValue*/
        p[1] === ""
      );
    },
    i(p) {
      N || (oe(z), oe(u.$$.fragment, p), oe(S.$$.fragment, p), oe(B), oe(s), oe(f, p), oe(k), N = !0);
    },
    o(p) {
      he(z), he(u.$$.fragment, p), he(S.$$.fragment, p), he(B), he(s), he(f, p), he(k), N = !1;
    },
    d(p) {
      p && ($(e), $(t)), qe(u), i[72](null), qe(S), B && B.d(), s && s.d(), f && f.d(p), ~M && a[M].d(), D = !1, je(q);
    }
  };
}
function Yr(i, e, t) {
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
  let { class: c = void 0 } = e, { apiKey: E } = e, { bbox: S = void 0 } = e, { clearButtonTitle: C = "clear" } = e, { clearOnBlur: R = !1 } = e, { clearListOnPick: O = !1 } = e, { keepListOpen: A = !1 } = e, { collapsed: M = !1 } = e, { country: k = void 0 } = e, { debounceSearch: y = 200 } = e, { enableReverse: N = "never" } = e, { errorMessage: D = "Something went wrong…" } = e, { filter: q = () => !0 } = e, { flyTo: z = !0 } = e, { fuzzyMatch: B = !0 } = e, { language: s = void 0 } = e, { limit: l = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: m = f } = e, { mapController: a = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: p = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: d = "Search" } = e, { proximity: v = [{ type: "server-geolocation" }] } = e, { reverseActive: w = N === "always" } = e, { reverseButtonTitle: L = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: I = "full-geometry" } = e, { showPlaceType: W = "if-needed" } = e, { showResultsWhileTyping: Z = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: ie = !1 } = e, { markerOnSelected: j = !0 } = e, { types: V = void 0 } = e;
  const ae = [];
  let { reverseGeocodingTypes: Ge = ae } = e, { exhaustiveReverseGeocoding: et = !1 } = e, { excludeTypes: tt = !1 } = e;
  const ye = void 0;
  let { reverseGeocodingExcludeTypes: Oe = ye } = e, { zoom: de = g } = e, { apiUrl: fe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: di = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.3/icons/" } = e, { adjustUrlQuery: Ft = () => {
  } } = e, { adjustUrl: jt = () => {
  } } = e;
  function yn(_) {
    Me.focus(_);
  }
  function vn() {
    Me.blur();
  }
  function gi(_, ne = !0, se = !1) {
    t(1, T = _), ne ? (t(15, Y = -1), pi()) : (yi(void 0, !se, se), setTimeout(() => {
      Me.focus(), Me.select();
    }));
  }
  function bn() {
    t(13, F = void 0), t(14, G = void 0), t(15, Y = -1);
  }
  function wn() {
    t(64, le = []), t(14, G = void 0);
  }
  let F, le, G, mi = "", Me, Y = -1, Re, xt = [], it, st, ot, Zt, De = !1;
  const En = /* @__PURE__ */ new Set(), Ze = rn();
  Jn(() => {
    a && (a.setEventHandler(void 0), a.indicateReverse(!1), a.setSelectedMarker(-1), a.setFeatures(void 0, void 0, !1));
  });
  function pi(_) {
    if (t(17, De = !1), st && (clearTimeout(st), st = void 0), Y > -1 && F)
      t(14, G = F[Y]), t(1, T = G.place_type[0] === "reverse" ? G.place_name : G.place_name.replace(/,.*/, "")), t(19, Re = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (T) {
      const ne = _ || !Ht(T);
      Vt(T, { exact: !0 }).then(() => {
        t(64, le = F), t(14, G = void 0), ne && Ln();
      }).catch((se) => t(19, Re = se));
    }
  }
  function Ht(_) {
    try {
      return Fr(_, 6);
    } catch {
      return !1;
    }
  }
  async function Vt(_, { byId: ne = !1, exact: se = !1 } = {}) {
    var be, Pe, He;
    t(19, Re = void 0), it == null || it.abort();
    const ve = new AbortController();
    t(20, it = ve);
    try {
      const Q = Ht(_), ct = new URL(fe + "/" + encodeURIComponent(Q ? Q.decimalLongitude + "," + Q.decimalLatitude : _) + ".json"), Le = ct.searchParams;
      s !== void 0 && Le.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Qt] = (a == null ? void 0 : a.getCenterAndZoom()) ?? [];
      let Ie = (be = !Q || Ge === ae ? V : Ge) == null ? void 0 : be.map((ge) => typeof ge == "string" ? ge : Qt === void 0 || (ge[0] ?? 0) <= Qt && Qt < (ge[1] ?? 1 / 0) ? ge[2] : void 0).filter((ge) => ge !== void 0);
      Ie && (Ie = [...new Set(Ie)], Le.set("types", Ie.join(",")));
      const bi = !Q || Oe === ye ? tt : Oe;
      if (bi && Le.set("excludeTypes", String(bi)), S && Le.set("bbox", S.map((ge) => ge.toFixed(6)).join(",")), k && Le.set("country", Array.isArray(k) ? k.join(",") : k), !ne && !Q) {
        const ge = await Rr(a, v, ve);
        ge && Le.set("proximity", ge), (se || !Z) && Le.set("autocomplete", "false"), Le.set("fuzzyMatch", String(B));
      }
      const ht = m === f ? l : m;
      ht !== void 0 && ht > 1 && (Ie == null ? void 0 : Ie.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), Q ? (ht === 1 || ht !== void 0 && (et || (Ie == null ? void 0 : Ie.length) === 1)) && Le.set("limit", String(ht)) : l !== void 0 && Le.set("limit", String(l)), Le.set("key", E), Ft(Le), jt(ct);
      const Dn = ct.searchParams.get("types") === "" && ct.searchParams.get("excludeTypes") !== "true", Tt = ct.toString();
      if (Tt === mi) {
        ne ? (O && t(13, F = void 0), t(14, G = xt[0])) : (t(13, F = xt), ((Pe = F[Y]) == null ? void 0 : Pe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      mi = Tt;
      let dt;
      if (Dn)
        dt = { type: "FeatureCollection", features: [] };
      else {
        const ge = await fetch(Tt, { signal: ve.signal, ...J });
        if (!ge.ok)
          throw new Error(await ge.text());
        dt = await ge.json();
      }
      Ze("response", { url: Tt, featureCollection: dt }), ne ? (O && t(13, F = void 0), t(14, G = dt.features[0]), xt = [G]) : (t(13, F = dt.features.filter(q)), Q && F.unshift({
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
      }), xt = F, ((He = F[Y]) == null ? void 0 : He.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), Q && Me.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      ve === it && t(20, it = void 0);
    }
  }
  function Ln() {
    var ve;
    if (!(le != null && le.length) || !z)
      return;
    const _ = [180, 90, -180, -90], ne = !le.some((be) => !be.matching_text);
    let se;
    for (const be of le) {
      const Pe = ft(be);
      if (se = se === void 0 ? Pe : Pe === void 0 ? se : Math.max(se, Pe), ne || !be.matching_text)
        for (const He of [0, 1, 2, 3])
          _[He] = Math[He < 2 ? "min" : "max"](_[He], ((ve = be.bbox) == null ? void 0 : ve[He]) ?? be.center[He % 2]);
    }
    a && le.length > 0 && (G && _[0] === _[2] && _[1] === _[3] ? a.flyTo(G.center, ft(G)) : a.fitBounds(Gt(_), 50, se));
  }
  function Kt() {
    !G || !a || (!G.bbox || G.bbox[0] === G.bbox[2] && G.bbox[1] === G.bbox[3] ? a.flyTo(G.center, ft(G)) : a.fitBounds(Gt(G.bbox), 50, ft(G)));
  }
  function ft(_) {
    var se;
    if (!_.bbox || _.bbox[0] !== _.bbox[2] && _.bbox[1] !== _.bbox[3])
      return;
    const ne = _.id.replace(/\..*/, "");
    return (Array.isArray((se = _.properties) == null ? void 0 : se.categories) ? _.properties.categories.reduce(
      (ve, be) => {
        const Pe = de[ne + "." + be];
        return ve === void 0 ? Pe : Pe === void 0 ? ve : Math.max(ve, Pe);
      },
      void 0
    ) : void 0) ?? de[ne];
  }
  function _n(_) {
    t(0, w = N === "always"), t(13, F = void 0), t(14, G = void 0), t(15, Y = -1), gi(_[1].toFixed(6) + ", " + Or(_[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Sn(_) {
    if (!F)
      return;
    let ne = _.key === "ArrowDown" ? 1 : _.key === "ArrowUp" ? -1 : 0;
    ne && (Me.focus(), t(17, De = !0), _.preventDefault(), G && Y === -1 && t(15, Y = F.findIndex((se) => se.id === (G == null ? void 0 : G.id))), Y === (G || K ? 0 : -1) && ne === -1 && t(15, Y = F.length), t(15, Y += ne), Y >= F.length && t(15, Y = -1), Y < 0 && (G || K) && t(15, Y = 0));
  }
  function yi(_, ne = !0, se = !1) {
    if (t(19, Re = void 0), t(14, G = void 0), t(17, De = !0), Z || se) {
      if (st && clearTimeout(st), T.length < b)
        return;
      const ve = T;
      st = window.setTimeout(
        () => {
          Vt(ve).catch((be) => t(19, Re = be));
        },
        ne ? y : 0
      );
    } else
      t(13, F = void 0), t(19, Re = void 0);
  }
  function Yt(_) {
    G && (G == null ? void 0 : G.id) === (_ == null ? void 0 : _.id) ? Kt() : (t(14, G = _), t(1, T = _.place_name));
  }
  function vi(_) {
    t(15, Y = _);
  }
  function xn() {
    (!K || G) && t(15, Y = -1), ie && Kt();
  }
  const Tn = () => Me.focus();
  function Mn(_) {
    ii[_ ? "unshift" : "push"](() => {
      Me = _, t(18, Me);
    });
  }
  function Cn() {
    T = this.value, t(1, T), t(17, De), t(31, R), t(16, ot);
  }
  const Nn = () => t(17, De = !0), kn = () => t(17, De = !1), On = () => t(17, De = !0), Rn = () => t(14, G = void 0), Pn = () => {
    t(1, T = ""), t(14, G = void 0), Me.focus();
  }, In = () => t(0, w = !w), An = () => t(19, Re = void 0), Bn = (_) => vi(_), Wn = (_) => Yt(_), Gn = () => {
  };
  return i.$$set = (_) => {
    "class" in _ && t(2, c = _.class), "apiKey" in _ && t(29, E = _.apiKey), "bbox" in _ && t(30, S = _.bbox), "clearButtonTitle" in _ && t(3, C = _.clearButtonTitle), "clearOnBlur" in _ && t(31, R = _.clearOnBlur), "clearListOnPick" in _ && t(32, O = _.clearListOnPick), "keepListOpen" in _ && t(4, A = _.keepListOpen), "collapsed" in _ && t(5, M = _.collapsed), "country" in _ && t(33, k = _.country), "debounceSearch" in _ && t(34, y = _.debounceSearch), "enableReverse" in _ && t(6, N = _.enableReverse), "errorMessage" in _ && t(7, D = _.errorMessage), "filter" in _ && t(35, q = _.filter), "flyTo" in _ && t(36, z = _.flyTo), "fuzzyMatch" in _ && t(37, B = _.fuzzyMatch), "language" in _ && t(38, s = _.language), "limit" in _ && t(39, l = _.limit), "reverseGeocodingLimit" in _ && t(40, m = _.reverseGeocodingLimit), "mapController" in _ && t(41, a = _.mapController), "minLength" in _ && t(42, b = _.minLength), "noResultsMessage" in _ && t(8, p = _.noResultsMessage), "placeholder" in _ && t(9, d = _.placeholder), "proximity" in _ && t(43, v = _.proximity), "reverseActive" in _ && t(0, w = _.reverseActive), "reverseButtonTitle" in _ && t(10, L = _.reverseButtonTitle), "searchValue" in _ && t(1, T = _.searchValue), "pickedResultStyle" in _ && t(44, I = _.pickedResultStyle), "showPlaceType" in _ && t(11, W = _.showPlaceType), "showResultsWhileTyping" in _ && t(45, Z = _.showResultsWhileTyping), "selectFirst" in _ && t(46, K = _.selectFirst), "flyToSelected" in _ && t(47, ie = _.flyToSelected), "markerOnSelected" in _ && t(48, j = _.markerOnSelected), "types" in _ && t(49, V = _.types), "reverseGeocodingTypes" in _ && t(50, Ge = _.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in _ && t(51, et = _.exhaustiveReverseGeocoding), "excludeTypes" in _ && t(52, tt = _.excludeTypes), "reverseGeocodingExcludeTypes" in _ && t(53, Oe = _.reverseGeocodingExcludeTypes), "zoom" in _ && t(54, de = _.zoom), "apiUrl" in _ && t(55, fe = _.apiUrl), "fetchParameters" in _ && t(56, J = _.fetchParameters), "iconsBaseUrl" in _ && t(12, di = _.iconsBaseUrl), "adjustUrlQuery" in _ && t(57, Ft = _.adjustUrlQuery), "adjustUrl" in _ && t(58, jt = _.adjustUrl), "$$scope" in _ && t(69, o = _.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, w = N === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && I !== "marker-only" && G && !G.address && G.geometry.type === "Point" && G.place_type[0] !== "reverse" && Vt(G.id, { byId: !0 }).catch((_) => t(19, Re = _)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (a && G && G.id !== Zt && z && (Kt(), O && t(13, F = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, Zt = G == null ? void 0 : G.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ot = De), R && !ot && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < b && (t(13, F = void 0), t(19, Re = void 0), t(64, le = F)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && F != null && F.length && Y == -1 && !G && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== F && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && a && a.setEventHandler((_) => {
      switch (_.type) {
        case "mapClick":
          w && _n(_.coordinates);
          break;
        case "markerClick":
          {
            const ne = F == null ? void 0 : F.find((se) => se.id === _.id);
            ne && Yt(ne);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = ot ? (F == null ? void 0 : F.findIndex((ne) => ne.id === _.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = F == null ? void 0 : F[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && a && r && z && ie && a.flyTo(r.center, ft(r)), i.$$.dirty[1] & /*pickedResultStyle*/
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
      const _ = Ht(T);
      a.setReverseMarker(_ ? [_.decimalLongitude, _.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && Ze("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && Ze("pick", { feature: G }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(F != null && F.length) && (ot || A)), i.$$.dirty[2] & /*optionsVisible*/
    32 && Ze("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && Ze("featureslisted", { features: F }), i.$$.dirty[2] & /*markedFeatures*/
    4 && Ze("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && Ze("reversetoggle", { reverse: w }), i.$$.dirty[0] & /*searchValue*/
    2 && Ze("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && a && a.indicateReverse(w);
  }, [
    w,
    T,
    c,
    C,
    A,
    M,
    N,
    D,
    p,
    d,
    L,
    W,
    di,
    F,
    G,
    Y,
    ot,
    De,
    Me,
    Re,
    it,
    En,
    pi,
    Sn,
    yi,
    Yt,
    vi,
    xn,
    g,
    E,
    S,
    R,
    O,
    k,
    y,
    q,
    z,
    B,
    s,
    l,
    m,
    a,
    b,
    v,
    I,
    Z,
    K,
    ie,
    j,
    V,
    Ge,
    et,
    tt,
    Oe,
    de,
    fe,
    J,
    Ft,
    jt,
    yn,
    vn,
    gi,
    bn,
    wn,
    le,
    Zt,
    r,
    u,
    n,
    o,
    h,
    Tn,
    Mn,
    Cn,
    Nn,
    kn,
    On,
    Rn,
    Pn,
    In,
    An,
    Bn,
    Wn,
    Gn
  ];
}
let Qr = class extends Je {
  constructor(e) {
    super(), Xe(
      this,
      e,
      Yr,
      Kr,
      Qe,
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
function _t(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function ci(i, e, t = {}) {
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
  return _t({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function St(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function an(i, e, t = {}) {
  return _t({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
var Xr = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ei = Math.ceil, xe = Math.floor, pe = "[BigNumber Error] ", Di = pe + "Number primitive has more than 15 significant digits: ", Ce = 1e14, U = 14, zi = 9007199254740991, ti = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ve = 1e7, we = 1e9;
function fn(i) {
  var e, t, n, r = y.prototype = { constructor: y, toString: null, valueOf: null }, u = new y(1), h = 20, o = 4, g = -7, c = 21, E = -1e7, S = 1e7, C = !1, R = 1, O = 0, A = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, M = "0123456789abcdefghijklmnopqrstuvwxyz", k = !0;
  function y(s, l) {
    var f, m, a, b, p, d, v, w, L = this;
    if (!(L instanceof y)) return new y(s, l);
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
        if (!Xr.test(w = String(s))) return n(L, w, d);
        L.s = w.charCodeAt(0) == 45 ? (w = w.slice(1), -1) : 1;
      }
      (b = w.indexOf(".")) > -1 && (w = w.replace(".", "")), (p = w.search(/e/i)) > 0 ? (b < 0 && (b = p), b += +w.slice(p + 1), w = w.substring(0, p)) : b < 0 && (b = w.length);
    } else {
      if (re(l, 2, M.length, "Base"), l == 10 && k)
        return L = new y(s), z(L, h + L.e + 1, o);
      if (w = String(s), d = typeof s == "number") {
        if (s * 0 != 0) return n(L, w, d, l);
        if (L.s = 1 / s < 0 ? (w = w.slice(1), -1) : 1, y.DEBUG && w.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Di + s);
      } else
        L.s = w.charCodeAt(0) === 45 ? (w = w.slice(1), -1) : 1;
      for (f = M.slice(0, l), b = p = 0, v = w.length; p < v; p++)
        if (f.indexOf(m = w.charAt(p)) < 0) {
          if (m == ".") {
            if (p > b) {
              b = v;
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
    for (v = w.length; w.charCodeAt(--v) === 48; ) ;
    if (w = w.slice(p, ++v)) {
      if (v -= p, d && y.DEBUG && v > 15 && (s > zi || s !== xe(s)))
        throw Error(Di + L.s * s);
      if ((b = b - p - 1) > S)
        L.c = L.e = null;
      else if (b < E)
        L.c = [L.e = 0];
      else {
        if (L.e = b, L.c = [], p = (b + 1) % U, b < 0 && (p += U), p < v) {
          for (p && L.c.push(+w.slice(0, p)), v -= U; p < v; )
            L.c.push(+w.slice(p, p += U));
          p = U - (w = w.slice(p)).length;
        } else
          p -= v;
        for (; p--; w += "0") ;
        L.c.push(+w);
      }
    } else
      L.c = [L.e = 0];
  }
  y.clone = fn, y.ROUND_UP = 0, y.ROUND_DOWN = 1, y.ROUND_CEIL = 2, y.ROUND_FLOOR = 3, y.ROUND_HALF_UP = 4, y.ROUND_HALF_DOWN = 5, y.ROUND_HALF_EVEN = 6, y.ROUND_HALF_CEIL = 7, y.ROUND_HALF_FLOOR = 8, y.EUCLID = 9, y.config = y.set = function(s) {
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
          if (f = s[l], typeof f == "object") A = f;
          else throw Error(pe + l + " not an object: " + f);
        if (s.hasOwnProperty(l = "ALPHABET"))
          if (f = s[l], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            k = f.slice(0, 10) == "0123456789", M = f;
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
      FORMAT: A,
      ALPHABET: M
    };
  }, y.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!y.DEBUG) return !0;
    var l, f, m = s.c, a = s.e, b = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((b === 1 || b === -1) && a >= -1e9 && a <= we && a === xe(a)) {
        if (m[0] === 0) {
          if (a === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (a + 1) % U, l < 1 && (l += U), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (f = m[l], f < 0 || f >= Ce || f !== xe(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (m === null && a === null && (b === null || b === 1 || b === -1))
      return !0;
    throw Error(pe + "Invalid BigNumber: " + s);
  }, y.maximum = y.max = function() {
    return D(arguments, -1);
  }, y.minimum = y.min = function() {
    return D(arguments, 1);
  }, y.random = function() {
    var s = 9007199254740992, l = Math.random() * s & 2097151 ? function() {
      return xe(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var m, a, b, p, d, v = 0, w = [], L = new y(u);
      if (f == null ? f = h : re(f, 0, we), p = ei(f / U), C)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(p *= 2)); v < p; )
            d = m[v] * 131072 + (m[v + 1] >>> 11), d >= 9e15 ? (a = crypto.getRandomValues(new Uint32Array(2)), m[v] = a[0], m[v + 1] = a[1]) : (w.push(d % 1e14), v += 2);
          v = p / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(p *= 7); v < p; )
            d = (m[v] & 31) * 281474976710656 + m[v + 1] * 1099511627776 + m[v + 2] * 4294967296 + m[v + 3] * 16777216 + (m[v + 4] << 16) + (m[v + 5] << 8) + m[v + 6], d >= 9e15 ? crypto.randomBytes(7).copy(m, v) : (w.push(d % 1e14), v += 7);
          v = p / 7;
        } else
          throw C = !1, Error(pe + "crypto unavailable");
      if (!C)
        for (; v < p; )
          d = l(), d < 9e15 && (w[v++] = d % 1e14);
      for (p = w[--v], f %= U, p && f && (d = ti[U - f], w[v] = xe(p / d) * d); w[v] === 0; w.pop(), v--) ;
      if (v < 0)
        w = [b = 0];
      else {
        for (b = -1; w[0] === 0; w.splice(0, 1), b -= U) ;
        for (v = 1, d = w[0]; d >= 10; d /= 10, v++) ;
        v < U && (b -= U - v);
      }
      return L.e = b, L.c = w, L;
    };
  }(), y.sum = function() {
    for (var s = 1, l = arguments, f = new y(l[0]); s < l.length; ) f = f.plus(l[s++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function l(f, m, a, b) {
      for (var p, d = [0], v, w = 0, L = f.length; w < L; ) {
        for (v = d.length; v--; d[v] *= m) ;
        for (d[0] += b.indexOf(f.charAt(w++)), p = 0; p < d.length; p++)
          d[p] > a - 1 && (d[p + 1] == null && (d[p + 1] = 0), d[p + 1] += d[p] / a | 0, d[p] %= a);
      }
      return d.reverse();
    }
    return function(f, m, a, b, p) {
      var d, v, w, L, T, I, W, Z, K = f.indexOf("."), ie = h, j = o;
      for (K >= 0 && (L = O, O = 0, f = f.replace(".", ""), Z = new y(m), I = Z.pow(f.length - K), O = L, Z.c = l(
        ze(Se(I.c), I.e, "0"),
        10,
        a,
        s
      ), Z.e = Z.c.length), W = l(f, m, a, p ? (d = M, s) : (d = s, M)), w = L = W.length; W[--L] == 0; W.pop()) ;
      if (!W[0]) return d.charAt(0);
      if (K < 0 ? --w : (I.c = W, I.e = w, I.s = b, I = e(I, Z, ie, j, a), W = I.c, T = I.r, w = I.e), v = w + ie + 1, K = W[v], L = a / 2, T = T || v < 0 || W[v + 1] != null, T = j < 4 ? (K != null || T) && (j == 0 || j == (I.s < 0 ? 3 : 2)) : K > L || K == L && (j == 4 || T || j == 6 && W[v - 1] & 1 || j == (I.s < 0 ? 8 : 7)), v < 1 || !W[0])
        f = T ? ze(d.charAt(1), -ie, d.charAt(0)) : d.charAt(0);
      else {
        if (W.length = v, T)
          for (--a; ++W[--v] > a; )
            W[v] = 0, v || (++w, W = [1].concat(W));
        for (L = W.length; !W[--L]; ) ;
        for (K = 0, f = ""; K <= L; f += d.charAt(W[K++])) ;
        f = ze(f, w, d.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, a, b) {
      var p, d, v, w, L = 0, T = m.length, I = a % Ve, W = a / Ve | 0;
      for (m = m.slice(); T--; )
        v = m[T] % Ve, w = m[T] / Ve | 0, p = W * v + w * I, d = I * v + p % Ve * Ve + L, L = (d / b | 0) + (p / Ve | 0) + W * w, m[T] = d % b;
      return L && (m = [L].concat(m)), m;
    }
    function l(m, a, b, p) {
      var d, v;
      if (b != p)
        v = b > p ? 1 : -1;
      else
        for (d = v = 0; d < b; d++)
          if (m[d] != a[d]) {
            v = m[d] > a[d] ? 1 : -1;
            break;
          }
      return v;
    }
    function f(m, a, b, p) {
      for (var d = 0; b--; )
        m[b] -= d, d = m[b] < a[b] ? 1 : 0, m[b] = d * p + m[b] - a[b];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, a, b, p, d) {
      var v, w, L, T, I, W, Z, K, ie, j, V, ae, Ge, et, tt, ye, Oe, de = m.s == a.s ? 1 : -1, fe = m.c, J = a.c;
      if (!fe || !fe[0] || !J || !J[0])
        return new y(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !a.s || (fe ? J && fe[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            fe && fe[0] == 0 || !J ? de * 0 : de / 0
          )
        );
      for (K = new y(de), ie = K.c = [], w = m.e - a.e, de = b + w + 1, d || (d = Ce, w = Te(m.e / U) - Te(a.e / U), de = de / U | 0), L = 0; J[L] == (fe[L] || 0); L++) ;
      if (J[L] > (fe[L] || 0) && w--, de < 0)
        ie.push(1), T = !0;
      else {
        for (et = fe.length, ye = J.length, L = 0, de += 2, I = xe(d / (J[0] + 1)), I > 1 && (J = s(J, I, d), fe = s(fe, I, d), ye = J.length, et = fe.length), Ge = ye, j = fe.slice(0, ye), V = j.length; V < ye; j[V++] = 0) ;
        Oe = J.slice(), Oe = [0].concat(Oe), tt = J[0], J[1] >= d / 2 && tt++;
        do {
          if (I = 0, v = l(J, j, ye, V), v < 0) {
            if (ae = j[0], ye != V && (ae = ae * d + (j[1] || 0)), I = xe(ae / tt), I > 1)
              for (I >= d && (I = d - 1), W = s(J, I, d), Z = W.length, V = j.length; l(W, j, Z, V) == 1; )
                I--, f(W, ye < Z ? Oe : J, Z, d), Z = W.length, v = 1;
            else
              I == 0 && (v = I = 1), W = J.slice(), Z = W.length;
            if (Z < V && (W = [0].concat(W)), f(j, W, V, d), V = j.length, v == -1)
              for (; l(J, j, ye, V) < 1; )
                I++, f(j, ye < V ? Oe : J, V, d), V = j.length;
          } else v === 0 && (I++, j = [0]);
          ie[L++] = I, j[0] ? j[V++] = fe[Ge] || 0 : (j = [fe[Ge]], V = 1);
        } while ((Ge++ < et || j[0] != null) && de--);
        T = j[0] != null, ie[0] || ie.splice(0, 1);
      }
      if (d == Ce) {
        for (L = 1, de = ie[0]; de >= 10; de /= 10, L++) ;
        z(K, b + (K.e = L + w * U - 1) + 1, p, T);
      } else
        K.e = w, K.r = +T;
      return K;
    };
  }();
  function N(s, l, f, m) {
    var a, b, p, d, v;
    if (f == null ? f = o : re(f, 0, 8), !s.c) return s.toString();
    if (a = s.c[0], p = s.e, l == null)
      v = Se(s.c), v = m == 1 || m == 2 && (p <= g || p >= c) ? kt(v, p) : ze(v, p, "0");
    else if (s = z(new y(s), l, f), b = s.e, v = Se(s.c), d = v.length, m == 1 || m == 2 && (l <= b || b <= g)) {
      for (; d < l; v += "0", d++) ;
      v = kt(v, b);
    } else if (l -= p, v = ze(v, b, "0"), b + 1 > d) {
      if (--l > 0) for (v += "."; l--; v += "0") ;
    } else if (l += b - d, l > 0)
      for (b + 1 == d && (v += "."); l--; v += "0") ;
    return s.s < 0 && a ? "-" + v : v;
  }
  function D(s, l) {
    for (var f, m, a = 1, b = new y(s[0]); a < s.length; a++)
      m = new y(s[a]), (!m.s || (f = nt(b, m)) === l || f === 0 && b.s === l) && (b = m);
    return b;
  }
  function q(s, l, f) {
    for (var m = 1, a = l.length; !l[--a]; l.pop()) ;
    for (a = l[0]; a >= 10; a /= 10, m++) ;
    return (f = m + f * U - 1) > S ? s.c = s.e = null : f < E ? s.c = [s.e = 0] : (s.e = f, s.c = l), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, f = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, a = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(b, p, d, v) {
      var w, L = d ? p : p.replace(a, "");
      if (m.test(L))
        b.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!d && (L = L.replace(s, function(T, I, W) {
          return w = (W = W.toLowerCase()) == "x" ? 16 : W == "b" ? 2 : 8, !v || v == w ? I : T;
        }), v && (w = v, L = L.replace(l, "$1").replace(f, "0.$1")), p != L))
          return new y(L, w);
        if (y.DEBUG)
          throw Error(pe + "Not a" + (v ? " base " + v : "") + " number: " + p);
        b.s = null;
      }
      b.c = b.e = null;
    };
  }();
  function z(s, l, f, m) {
    var a, b, p, d, v, w, L, T = s.c, I = ti;
    if (T) {
      e: {
        for (a = 1, d = T[0]; d >= 10; d /= 10, a++) ;
        if (b = l - a, b < 0)
          b += U, p = l, v = T[w = 0], L = xe(v / I[a - p - 1] % 10);
        else if (w = ei((b + 1) / U), w >= T.length)
          if (m) {
            for (; T.length <= w; T.push(0)) ;
            v = L = 0, a = 1, b %= U, p = b - U + 1;
          } else
            break e;
        else {
          for (v = d = T[w], a = 1; d >= 10; d /= 10, a++) ;
          b %= U, p = b - U + a, L = p < 0 ? 0 : xe(v / I[a - p - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[w + 1] != null || (p < 0 ? v : v % I[a - p - 1]), m = f < 4 ? (L || m) && (f == 0 || f == (s.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (f == 4 || m || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (b > 0 ? p > 0 ? v / I[a - p] : 0 : T[w - 1]) % 10 & 1 || f == (s.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, m ? (l -= s.e + 1, T[0] = I[(U - l % U) % U], s.e = -l || 0) : T[0] = s.e = 0, s;
        if (b == 0 ? (T.length = w, d = 1, w--) : (T.length = w + 1, d = I[U - b], T[w] = p > 0 ? xe(v / I[a - p] % I[p]) * d : 0), m)
          for (; ; )
            if (w == 0) {
              for (b = 1, p = T[0]; p >= 10; p /= 10, b++) ;
              for (p = T[0] += d, d = 1; p >= 10; p /= 10, d++) ;
              b != d && (s.e++, T[0] == Ce && (T[0] = 1));
              break;
            } else {
              if (T[w] += d, T[w] != Ce) break;
              T[w--] = 0, d = 1;
            }
        for (b = T.length; T[--b] === 0; T.pop()) ;
      }
      s.e > S ? s.c = s.e = null : s.e < E && (s.c = [s.e = 0]);
    }
    return s;
  }
  function B(s) {
    var l, f = s.e;
    return f === null ? s.toString() : (l = Se(s.c), l = f <= g || f >= c ? kt(l, f) : ze(l, f, "0"), s.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new y(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, l) {
    return nt(this, new y(s, l));
  }, r.decimalPlaces = r.dp = function(s, l) {
    var f, m, a, b = this;
    if (s != null)
      return re(s, 0, we), l == null ? l = o : re(l, 0, 8), z(new y(b), s + b.e + 1, l);
    if (!(f = b.c)) return null;
    if (m = ((a = f.length - 1) - Te(this.e / U)) * U, a = f[a]) for (; a % 10 == 0; a /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, l) {
    return e(this, new y(s, l), h, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, l) {
    return e(this, new y(s, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, l) {
    var f, m, a, b, p, d, v, w, L, T = this;
    if (s = new y(s), s.c && !s.isInteger())
      throw Error(pe + "Exponent not an integer: " + B(s));
    if (l != null && (l = new y(l)), d = s.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !s.c || !s.c[0])
      return L = new y(Math.pow(+B(T), d ? s.s * (2 - Nt(s)) : +B(s))), l ? L.mod(l) : L;
    if (v = s.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new y(NaN);
      m = !v && T.isInteger() && l.isInteger(), m && (T = T.mod(l));
    } else {
      if (s.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || d && T.c[1] >= 24e7 : T.c[0] < 8e13 || d && T.c[0] <= 9999975e7)))
        return b = T.s < 0 && Nt(s) ? -0 : 0, T.e > -1 && (b = 1 / b), new y(v ? 1 / b : b);
      O && (b = ei(O / U + 2));
    }
    for (d ? (f = new y(0.5), v && (s.s = 1), w = Nt(s)) : (a = Math.abs(+B(s)), w = a % 2), L = new y(u); ; ) {
      if (w) {
        if (L = L.times(T), !L.c) break;
        b ? L.c.length > b && (L.c.length = b) : m && (L = L.mod(l));
      }
      if (a) {
        if (a = xe(a / 2), a === 0) break;
        w = a % 2;
      } else if (s = s.times(f), z(s, s.e + 1, 1), s.e > 14)
        w = Nt(s);
      else {
        if (a = +B(s), a === 0) break;
        w = a % 2;
      }
      T = T.times(T), b ? T.c && T.c.length > b && (T.c.length = b) : m && (T = T.mod(l));
    }
    return m ? L : (v && (L = u.div(L)), l ? L.mod(l) : b ? z(L, O, o, p) : L);
  }, r.integerValue = function(s) {
    var l = new y(this);
    return s == null ? s = o : re(s, 0, 8), z(l, l.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, l) {
    return nt(this, new y(s, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, l) {
    return nt(this, new y(s, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, l) {
    return (l = nt(this, new y(s, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Te(this.e / U) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, l) {
    return nt(this, new y(s, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, l) {
    return (l = nt(this, new y(s, l))) === -1 || l === 0;
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
    if (s = new y(s, l), l = s.s, !d || !l) return new y(NaN);
    if (d != l)
      return s.s = -l, p.plus(s);
    var v = p.e / U, w = s.e / U, L = p.c, T = s.c;
    if (!v || !w) {
      if (!L || !T) return L ? (s.s = -l, s) : new y(T ? p : NaN);
      if (!L[0] || !T[0])
        return T[0] ? (s.s = -l, s) : new y(L[0] ? p : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (v = Te(v), w = Te(w), L = L.slice(), d = v - w) {
      for ((b = d < 0) ? (d = -d, a = L) : (w = v, a = T), a.reverse(), l = d; l--; a.push(0)) ;
      a.reverse();
    } else
      for (m = (b = (d = L.length) < (l = T.length)) ? d : l, d = l = 0; l < m; l++)
        if (L[l] != T[l]) {
          b = L[l] < T[l];
          break;
        }
    if (b && (a = L, L = T, T = a, s.s = -s.s), l = (m = T.length) - (f = L.length), l > 0) for (; l--; L[f++] = 0) ;
    for (l = Ce - 1; m > d; ) {
      if (L[--m] < T[m]) {
        for (f = m; f && !L[--f]; L[f] = l) ;
        --L[f], L[m] += Ce;
      }
      L[m] -= T[m];
    }
    for (; L[0] == 0; L.splice(0, 1), --w) ;
    return L[0] ? q(s, L, w) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, l) {
    var f, m, a = this;
    return s = new y(s, l), !a.c || !s.s || s.c && !s.c[0] ? new y(NaN) : !s.c || a.c && !a.c[0] ? new y(a) : (R == 9 ? (m = s.s, s.s = 1, f = e(a, s, 0, 3), s.s = m, f.s *= m) : f = e(a, s, 0, R), s = a.minus(f.times(s)), !s.c[0] && R == 1 && (s.s = a.s), s);
  }, r.multipliedBy = r.times = function(s, l) {
    var f, m, a, b, p, d, v, w, L, T, I, W, Z, K, ie, j = this, V = j.c, ae = (s = new y(s, l)).c;
    if (!V || !ae || !V[0] || !ae[0])
      return !j.s || !s.s || V && !V[0] && !ae || ae && !ae[0] && !V ? s.c = s.e = s.s = null : (s.s *= j.s, !V || !ae ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Te(j.e / U) + Te(s.e / U), s.s *= j.s, v = V.length, T = ae.length, v < T && (Z = V, V = ae, ae = Z, a = v, v = T, T = a), a = v + T, Z = []; a--; Z.push(0)) ;
    for (K = Ce, ie = Ve, a = T; --a >= 0; ) {
      for (f = 0, I = ae[a] % ie, W = ae[a] / ie | 0, p = v, b = a + p; b > a; )
        w = V[--p] % ie, L = V[p] / ie | 0, d = W * w + L * I, w = I * w + d % ie * ie + Z[b] + f, f = (w / K | 0) + (d / ie | 0) + W * L, Z[b--] = w % K;
      Z[b] = f;
    }
    return f ? ++m : Z.splice(0, 1), q(s, Z, m);
  }, r.negated = function() {
    var s = new y(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, l) {
    var f, m = this, a = m.s;
    if (s = new y(s, l), l = s.s, !a || !l) return new y(NaN);
    if (a != l)
      return s.s = -l, m.minus(s);
    var b = m.e / U, p = s.e / U, d = m.c, v = s.c;
    if (!b || !p) {
      if (!d || !v) return new y(a / 0);
      if (!d[0] || !v[0]) return v[0] ? s : new y(d[0] ? m : a * 0);
    }
    if (b = Te(b), p = Te(p), d = d.slice(), a = b - p) {
      for (a > 0 ? (p = b, f = v) : (a = -a, f = d), f.reverse(); a--; f.push(0)) ;
      f.reverse();
    }
    for (a = d.length, l = v.length, a - l < 0 && (f = v, v = d, d = f, l = a), a = 0; l; )
      a = (d[--l] = d[l] + v[l] + a) / Ce | 0, d[l] = Ce === d[l] ? 0 : d[l] % Ce;
    return a && (d = [a].concat(d), ++p), q(s, d, p);
  }, r.precision = r.sd = function(s, l) {
    var f, m, a, b = this;
    if (s != null && s !== !!s)
      return re(s, 1, we), l == null ? l = o : re(l, 0, 8), z(new y(b), s, l);
    if (!(f = b.c)) return null;
    if (a = f.length - 1, m = a * U + 1, a = f[a]) {
      for (; a % 10 == 0; a /= 10, m--) ;
      for (a = f[0]; a >= 10; a /= 10, m++) ;
    }
    return s && b.e + 1 > m && (m = b.e + 1), m;
  }, r.shiftedBy = function(s) {
    return re(s, -9007199254740991, zi), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, l, f, m, a, b = this, p = b.c, d = b.s, v = b.e, w = h + 4, L = new y("0.5");
    if (d !== 1 || !p || !p[0])
      return new y(!d || d < 0 && (!p || p[0]) ? NaN : p ? b : 1 / 0);
    if (d = Math.sqrt(+B(b)), d == 0 || d == 1 / 0 ? (l = Se(p), (l.length + v) % 2 == 0 && (l += "0"), d = Math.sqrt(+l), v = Te((v + 1) / 2) - (v < 0 || v % 2), d == 1 / 0 ? l = "5e" + v : (l = d.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + v), f = new y(l)) : f = new y(d + ""), f.c[0]) {
      for (v = f.e, d = v + w, d < 3 && (d = 0); ; )
        if (a = f, f = L.times(a.plus(e(b, a, w, 1))), Se(a.c).slice(0, d) === (l = Se(f.c)).slice(0, d))
          if (f.e < v && --d, l = l.slice(d - 3, d + 1), l == "9999" || !m && l == "4999") {
            if (!m && (z(a, a.e + h + 2, 0), a.times(a).eq(b))) {
              f = a;
              break;
            }
            w += 4, d += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (z(f, f.e + h + 2, 1), s = !f.times(f).eq(b));
            break;
          }
    }
    return z(f, f.e + h + 1, o, s);
  }, r.toExponential = function(s, l) {
    return s != null && (re(s, 0, we), s++), N(this, s, l, 1);
  }, r.toFixed = function(s, l) {
    return s != null && (re(s, 0, we), s = s + this.e + 1), N(this, s, l);
  }, r.toFormat = function(s, l, f) {
    var m, a = this;
    if (f == null)
      s != null && l && typeof l == "object" ? (f = l, l = null) : s && typeof s == "object" ? (f = s, s = l = null) : f = A;
    else if (typeof f != "object")
      throw Error(pe + "Argument not an object: " + f);
    if (m = a.toFixed(s, l), a.c) {
      var b, p = m.split("."), d = +f.groupSize, v = +f.secondaryGroupSize, w = f.groupSeparator || "", L = p[0], T = p[1], I = a.s < 0, W = I ? L.slice(1) : L, Z = W.length;
      if (v && (b = d, d = v, v = b, Z -= b), d > 0 && Z > 0) {
        for (b = Z % d || d, L = W.substr(0, b); b < Z; b += d) L += w + W.substr(b, d);
        v > 0 && (L += w + W.slice(b)), I && (L = "-" + L);
      }
      m = T ? L + (f.decimalSeparator || "") + ((v = +f.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + v + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : T) : L;
    }
    return (f.prefix || "") + m + (f.suffix || "");
  }, r.toFraction = function(s) {
    var l, f, m, a, b, p, d, v, w, L, T, I, W = this, Z = W.c;
    if (s != null && (d = new y(s), !d.isInteger() && (d.c || d.s !== 1) || d.lt(u)))
      throw Error(pe + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + B(d));
    if (!Z) return new y(W);
    for (l = new y(u), w = f = new y(u), m = v = new y(u), I = Se(Z), b = l.e = I.length - W.e - 1, l.c[0] = ti[(p = b % U) < 0 ? U + p : p], s = !s || d.comparedTo(l) > 0 ? b > 0 ? l : w : d, p = S, S = 1 / 0, d = new y(I), v.c[0] = 0; L = e(d, l, 0, 1), a = f.plus(L.times(m)), a.comparedTo(s) != 1; )
      f = m, m = a, w = v.plus(L.times(a = w)), v = a, l = d.minus(L.times(a = l)), d = a;
    return a = e(s.minus(f), m, 0, 1), v = v.plus(a.times(w)), f = f.plus(a.times(m)), v.s = w.s = W.s, b = b * 2, T = e(w, m, b, o).minus(W).abs().comparedTo(
      e(v, f, b, o).minus(W).abs()
    ) < 1 ? [w, m] : [v, f], S = p, T;
  }, r.toNumber = function() {
    return +B(this);
  }, r.toPrecision = function(s, l) {
    return s != null && re(s, 1, we), N(this, s, l, 2);
  }, r.toString = function(s) {
    var l, f = this, m = f.s, a = f.e;
    return a === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (s == null ? l = a <= g || a >= c ? kt(Se(f.c), a) : ze(Se(f.c), a, "0") : s === 10 && k ? (f = z(new y(f), h + a + 1, o), l = ze(Se(f.c), f.e, "0")) : (re(s, 2, M.length, "Base"), l = t(ze(Se(f.c), a, "0"), 10, s, m, !0)), m < 0 && f.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return B(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && y.set(i), y;
}
function Te(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function Se(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = U - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function nt(i, e) {
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
  if (i < e || i > t || i !== xe(i))
    throw Error(pe + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Nt(i) {
  var e = i.c.length - 1;
  return Te(i.e / U) == e && i.c[e] % 2 != 0;
}
function kt(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function ze(i, e, t) {
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
var We = fn(), Jr = class {
  constructor(i) {
    P(this, "key");
    P(this, "left", null);
    P(this, "right", null);
    this.key = i;
  }
}, pt = class extends Jr {
  constructor(i) {
    super(i);
  }
}, $r = class {
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
}, Xi, Ji, Dt = class vt extends $r {
  constructor(t, n) {
    super();
    P(this, "root", null);
    P(this, "compare");
    P(this, "validKey");
    P(this, Xi, "[object Set]");
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
    const n = new vt(this.compare, this.validKey), r = this.modificationCount;
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
    const n = new vt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new vt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new vt(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, h) {
      let o, g;
      do {
        if (o = u.left, g = u.right, o != null) {
          const c = new pt(o.key);
          h.left = c, n(o, c);
        }
        if (g != null) {
          const c = new pt(g.key);
          h.right = c, u = g, h = c;
        }
      } while (g != null);
    }
    const r = new pt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new ts(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(Ji = Symbol.iterator, Xi = Symbol.toStringTag, Ji)]() {
    return new es(this.wrap());
  }
}, cn = class {
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
}, es = class extends cn {
  getValue(i) {
    return i.key;
  }
}, ts = class extends cn {
  getValue(i) {
    return [i.key, i.key];
  }
}, hn = (i) => () => i, oi = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : hn(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function is(i) {
  const e = i ? (t, n, r, u, h) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(h.minus(r).exponentiatedBy(2)).times(i)
  ) : hn(!1);
  return (t, n, r) => {
    const u = t.x, h = t.y, o = r.x, g = r.y, c = h.minus(g).times(n.x.minus(o)).minus(u.minus(o).times(n.y.minus(g)));
    return e(c, u, h, o, g) ? 0 : c.comparedTo(0);
  };
}
var ns = (i) => i, rs = (i) => {
  if (i) {
    const e = new Dt(oi(i)), t = new Dt(oi(i)), n = (u, h) => h.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new We(0), y: new We(0) }), r;
  }
  return ns;
}, li = (i) => ({
  set: (e) => {
    Fe = li(e);
  },
  reset: () => li(i),
  compare: oi(i),
  snap: rs(i),
  orient: is(i)
}), Fe = li(), yt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), ui = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, At = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), dn = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), zt = (i) => dn(i, i).sqrt(), ss = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return At(r, n).div(zt(r)).div(zt(n));
}, os = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return dn(r, n).div(zt(r)).div(zt(n));
}, Ui = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, qi = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, ls = (i, e, t, n) => {
  if (e.x.isZero()) return qi(t, n, i.x);
  if (n.x.isZero()) return qi(i, e, t.x);
  if (e.y.isZero()) return Ui(t, n, i.y);
  if (n.y.isZero()) return Ui(i, e, t.y);
  const r = At(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, h = At(u, e).div(r), o = At(u, n).div(r), g = i.x.plus(o.times(e.x)), c = t.x.plus(h.times(n.x)), E = i.y.plus(o.times(e.y)), S = t.y.plus(h.times(n.y)), C = g.plus(c).div(2), R = E.plus(S).div(2);
  return { x: C, y: R };
}, Ae = class gn {
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
    const n = gn.comparePoints(e.point, t.point);
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
        sine: ss(this.point, e.point, u.point),
        cosine: os(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: h, cosine: o } = t.get(r), { sine: g, cosine: c } = t.get(u);
      return h.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? o.isLessThan(c) ? 1 : o.isGreaterThan(c) ? -1 : 0 : h.isLessThan(0) && g.isLessThan(0) ? o.isLessThan(c) ? -1 : o.isGreaterThan(c) ? 1 : 0 : g.isLessThan(h) ? -1 : g.isGreaterThan(h) ? 1 : 0;
    };
  }
}, us = class ai {
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
            const A = c[0].point, M = c[c.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${A.x}, ${A.y}]. Last matching segment found ends at [${M.x}, ${M.y}].`
            );
          }
          if (C.length === 1) {
            g = C[0].otherSE;
            break;
          }
          let R = null;
          for (let A = 0, M = S.length; A < M; A++)
            if (S[A].point === o.point) {
              R = A;
              break;
            }
          if (R !== null) {
            const A = S.splice(R)[0], M = c.splice(A.index);
            M.unshift(M[0].otherSE), t.push(new ai(M.reverse()));
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
      t.push(new ai(c));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let c = 1, E = this.events.length - 1; c < E; c++) {
      const S = this.events[c].point, C = this.events[c + 1].point;
      Fe.orient(S, e, C) !== 0 && (t.push(S), e = S);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    Fe.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
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
      Ae.compare(e, g) > 0 && (e = g);
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
}, Fi = class {
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
}, as = class {
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
        if (u.isExteriorRing()) e.push(new Fi(u));
        else {
          const h = u.enclosingRing();
          h != null && h.poly || e.push(new Fi(h)), (t = h == null ? void 0 : h.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, fs = class {
  constructor(i, e = qt.compare) {
    P(this, "queue");
    P(this, "tree");
    P(this, "segments");
    this.queue = i, this.tree = new Dt(e), this.segments = [];
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
        u === null ? o = h : h === null ? o = u : o = Ae.comparePoints(
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
}, cs = class {
  constructor() {
    P(this, "type");
    P(this, "numMultiPolys");
  }
  run(i, e, t) {
    bt.type = i;
    const n = [new Zi(e, !0)];
    for (let c = 0, E = t.length; c < E; c++)
      n.push(new Zi(t[c], !1));
    if (bt.numMultiPolys = n.length, bt.type === "difference") {
      const c = n[0];
      let E = 1;
      for (; E < n.length; )
        ui(n[E].bbox, c.bbox) !== null ? E++ : n.splice(E, 1);
    }
    if (bt.type === "intersection")
      for (let c = 0, E = n.length; c < E; c++) {
        const S = n[c];
        for (let C = c + 1, R = n.length; C < R; C++)
          if (ui(S.bbox, n[C].bbox) === null) return [];
      }
    const r = new Dt(Ae.compare);
    for (let c = 0, E = n.length; c < E; c++) {
      const S = n[c].getSweepEvents();
      for (let C = 0, R = S.length; C < R; C++)
        r.add(S[C]);
    }
    const u = new fs(r);
    let h = null;
    for (r.size != 0 && (h = r.first(), r.delete(h)); h; ) {
      const c = u.process(h);
      for (let E = 0, S = c.length; E < S; E++) {
        const C = c[E];
        C.consumedBy === void 0 && r.add(C);
      }
      r.size != 0 ? (h = r.first(), r.delete(h)) : h = null;
    }
    Fe.reset();
    const o = us.factory(u.segments);
    return new as(o).getGeom();
  }
}, bt = new cs(), Ut = bt, hs = 0, qt = class Bt {
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
    this.id = ++hs, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
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
    const o = Ae.comparePoints(e, t);
    if (o < 0)
      r = e, u = t, h = 1;
    else if (o > 0)
      r = t, u = e, h = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const g = new Ae(r, !0), c = new Ae(u, !1);
    return new Bt(g, c, [n], [h]);
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
    return Fe.orient(this.leftSE.point, e, this.rightSE.point);
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
    const t = this.bbox(), n = e.bbox(), r = ui(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, h = this.rightSE.point, o = e.leftSE.point, g = e.rightSE.point, c = yt(t, o) && this.comparePoint(o) === 0, E = yt(n, u) && e.comparePoint(u) === 0, S = yt(t, g) && this.comparePoint(g) === 0, C = yt(n, h) && e.comparePoint(h) === 0;
    if (E && c)
      return C && !S ? h : !C && S ? g : null;
    if (E)
      return S && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (c)
      return C && h.x.eq(o.x) && h.y.eq(o.y) ? null : o;
    if (C && S) return null;
    if (C) return h;
    if (S) return g;
    const R = ls(u, this.vector(), o, e.vector());
    return R === null || !yt(r, R) ? null : Fe.snap(R);
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
    const t = [], n = e.events !== void 0, r = new Ae(e, !0), u = new Ae(e, !1), h = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const o = new Bt(
      r,
      h,
      this.rings.slice(),
      this.windings.slice()
    );
    return Ae.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Ae.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
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
    const r = Bt.compare(t, n);
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
    switch (Ut.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === Ut.numMultiPolys && n < r;
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
}, ji = class {
  constructor(i, e, t) {
    P(this, "poly");
    P(this, "isExterior");
    P(this, "segments");
    P(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = Fe.snap({ x: new We(i[0][0]), y: new We(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, h = i.length; u < h; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const o = Fe.snap({ x: new We(i[u][0]), y: new We(i[u][1]) });
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
}, ds = class {
  constructor(i, e) {
    P(this, "multiPoly");
    P(this, "exteriorRing");
    P(this, "interiorRings");
    P(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new ji(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new ji(i[t], this, !1);
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
}, Zi = class {
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
      ll: { x: new We(Number.POSITIVE_INFINITY), y: new We(Number.POSITIVE_INFINITY) },
      ur: { x: new We(Number.NEGATIVE_INFINITY), y: new We(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new ds(i[t], this);
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
}, gs = (i, ...e) => Ut.run("union", i, e), ms = (i, ...e) => Ut.run("difference", i, e);
Fe.set;
function mn(i, e, t) {
  if (i !== null)
    for (var n, r, u, h, o, g, c, E = 0, S = 0, C, R = i.type, O = R === "FeatureCollection", A = R === "Feature", M = O ? i.features.length : 1, k = 0; k < M; k++) {
      c = O ? i.features[k].geometry : A ? i.geometry : i, C = c ? c.type === "GeometryCollection" : !1, o = C ? c.geometries.length : 1;
      for (var y = 0; y < o; y++) {
        var N = 0, D = 0;
        if (h = C ? c.geometries[y] : c, h !== null) {
          g = h.coordinates;
          var q = h.type;
          switch (E = 0, q) {
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
                S++, q === "MultiPoint" && N++;
              }
              q === "LineString" && N++;
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
                q === "MultiLineString" && N++, q === "Polygon" && D++;
              }
              q === "Polygon" && N++;
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
                if (mn(h.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function hi(i, e) {
  var t, n, r, u, h, o, g, c, E, S, C = 0, R = i.type === "FeatureCollection", O = i.type === "Feature", A = R ? i.features.length : 1;
  for (t = 0; t < A; t++) {
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
function ps(i, e) {
  hi(i, function(t, n, r, u, h) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          _t(t, r, { bbox: u, id: h }),
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
      if (e(_t(S, r), n, c) === !1)
        return !1;
    }
  });
}
function ys(i, e = {}) {
  const t = [];
  if (hi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = gs(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ci(n[0], e.properties) : an(n, e.properties);
}
var pn = ys;
function vs(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return mn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var Hi = vs;
function bs(i) {
  const e = [];
  if (hi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = ms(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ci(n[0], t) : an(n, t);
}
var ws = bs;
function Es(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return ps(i, function(t) {
    e.push(t);
  }), St(e);
}
var Ls = Es;
function Vi(i, e) {
  const t = ws(
    St([
      ci([
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
  const n = Gt(Hi(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, h = n[2] > 180, o = Ls(i);
  if (o.features.length > 1 && (u || h))
    for (const g of o.features) {
      const c = Gt(Hi(g));
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
    St([
      o.features.length < 2 ? i : pn(o) ?? i,
      t
    ])
  );
}
const Ki = {
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
}, Ot = "mtlr-gc-full-geom", Yi = "mtlr-gc-full-geom-fill", Qi = "mtlr-gc-full-geom-line";
function _s(i, e, t = !0, n = !0, r = {}, u = {}, h = Ki) {
  let o;
  const g = [];
  let c, E, S;
  function C() {
    if (!i.loaded) {
      i.once("load", C);
      return;
    }
    const M = h ? h === !0 ? Ki : h : void 0;
    if (!(M != null && M.fill) && !(M != null && M.line))
      return;
    const k = i.getSource(Ot);
    if (k)
      k.setData(S ?? St([]));
    else if (S)
      i.addSource(Ot, {
        type: "geojson",
        data: S
      });
    else
      return;
    !i.getLayer(Yi) && (M != null && M.fill) && i.addLayer({
      ...M == null ? void 0 : M.fill,
      id: Yi,
      type: "fill",
      source: Ot
    }), !i.getLayer(Qi) && (M != null && M.line) && i.addLayer({
      ...M == null ? void 0 : M.line,
      id: Qi,
      type: "line",
      source: Ot
    });
  }
  function R(M) {
    S = M, C();
  }
  i.on("styledata", () => {
    setTimeout(() => {
      S && C();
    });
  });
  const O = (M) => {
    o == null || o({
      type: "mapClick",
      coordinates: [M.lngLat.lng, M.lngLat.lat]
    });
  };
  function A(M = !1) {
    if (!e)
      throw new Error();
    const k = document.createElement("div");
    return M && k.classList.add("marker-interactive"), new Tr({
      props: { displayIn: "maplibre" },
      target: k
    }), new e.Marker({ element: k, offset: [1, -13] });
  }
  return {
    setEventHandler(M) {
      M ? (o = M, i.on("click", O)) : (o = void 0, i.off("click", O));
    },
    flyTo(M, k) {
      i.flyTo({ center: M, ...k ? { zoom: k } : {}, ...r });
    },
    fitBounds(M, k, y) {
      i.fitBounds(
        [
          [M[0], M[1]],
          [M[2], M[3]]
        ],
        { padding: k, ...y ? { maxZoom: y } : {}, ...u }
      );
    },
    indicateReverse(M) {
      i.getCanvasContainer().style.cursor = M ? "crosshair" : "";
    },
    setReverseMarker(M) {
      !e || !t || (E ? M ? E.setLngLat(M) : (E.remove(), E = void 0) : M && (t instanceof Function ? E = t(i) ?? void 0 : (E = (typeof t == "object" ? new e.Marker(t) : A()).setLngLat(M).addTo(i), E.getElement().classList.add("marker-reverse"))));
    },
    setFeatures(M, k, y) {
      for (const N of g)
        N.remove();
      if (g.length = 0, R(void 0), !!e) {
        e: if (k) {
          let N = !1;
          if (k.geometry.type === "GeometryCollection") {
            const D = k.geometry.geometries.filter(
              (q) => q.type === "Polygon" || q.type === "MultiPolygon"
            );
            t: if (D.length > 0) {
              const q = pn(
                St(D.map((z) => _t(z)))
              );
              if (!q)
                break t;
              Vi(
                {
                  ...k,
                  geometry: q.geometry
                },
                R
              ), N = !0;
            } else {
              const q = k.geometry.geometries.filter(
                (z) => z.type === "LineString" || z.type === "MultiLineString"
              );
              q.length > 0 && (R({
                ...k,
                geometry: { type: "GeometryCollection", geometries: q }
              }), N = !0);
            }
          }
          if (!N) {
            if (k.geometry.type === "Polygon" || k.geometry.type === "MultiPolygon")
              Vi(k, R);
            else if (k.geometry.type === "LineString" || k.geometry.type === "MultiLineString") {
              R(k);
              break e;
            }
          }
          if (!y && k.geometry.type !== "Point")
            break e;
          if (t instanceof Function) {
            const D = t(i, k);
            D && g.push(D);
          } else t && g.push(
            typeof t == "object" ? new e.Marker(t) : A().setLngLat(k.center).addTo(i)
          );
        }
        if (n)
          for (const N of M ?? []) {
            if (N === k)
              continue;
            let D;
            if (n instanceof Function) {
              if (D = n(i, N), !D)
                continue;
            } else
              D = (typeof n == "object" ? new e.Marker(n) : A(!0)).setLngLat(N.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")
                )
              ).addTo(i);
            const q = D.getElement();
            q.addEventListener("click", (z) => {
              z.stopPropagation(), o == null || o({ type: "markerClick", id: N.id });
            }), q.addEventListener("mouseenter", () => {
              o == null || o({ type: "markerMouseEnter", id: N.id }), D.togglePopup();
            }), q.addEventListener("mouseleave", () => {
              o == null || o({ type: "markerMouseLeave", id: N.id }), D.togglePopup();
            }), g.push(D);
          }
      }
    },
    setSelectedMarker(M) {
      c && c.getElement().classList.toggle("marker-selected", !1), c = M > -1 ? g[M] : void 0, c == null || c.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const M = i.getCenter();
      return [i.getZoom(), M.lng, M.lat];
    }
  };
}
function Ss(i, e, t) {
  var O, A;
  class n {
    constructor(k, y) {
      P(this, "type");
      P(this, "target");
      this.type = y, this.target = k;
    }
  }
  class r extends n {
    constructor(y, N) {
      super(y, "select");
      P(this, "feature");
      Object.assign(this, N);
    }
  }
  class u extends n {
    constructor(y, N) {
      super(y, "featureslisted");
      P(this, "features");
      this.features = N;
    }
  }
  class h extends n {
    constructor(y, N) {
      super(y, "featuresmarked");
      P(this, "features");
      this.features = N;
    }
  }
  class o extends n {
    constructor(y, N) {
      super(y, "optionsvisibilitychange");
      P(this, "optionsVisible");
      this.optionsVisible = N;
    }
  }
  class g extends n {
    constructor(y, N) {
      super(y, "pick");
      P(this, "feature");
      this.feature = N;
    }
  }
  class c extends n {
    constructor(y, N) {
      super(y, "querychange");
      P(this, "query");
      this.query = N;
    }
  }
  class E extends n {
    constructor(y, N, D) {
      super(y, "response");
      P(this, "url");
      P(this, "featureCollection");
      this.url = N, this.featureCollection = D;
    }
  }
  class S extends n {
    constructor(y, N) {
      super(y, "reversetoggle");
      P(this, "reverse");
      this.reverse = N;
    }
  }
  class C extends i {
    constructor(y = {}) {
      super();
      Xt(this, O);
      Xt(this, A);
      Jt(this, A, y);
    }
    onAddInt(y) {
      const N = document.createElement("div");
      N.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
      const {
        marker: D,
        showResultMarkers: q,
        flyTo: z,
        fullGeometryStyle: B,
        ...s
      } = ue(this, A), l = typeof z == "boolean" ? {} : z, m = {
        mapController: _s(
          y,
          e,
          D,
          q,
          l,
          l,
          B
        ),
        flyTo: z === void 0 ? !0 : !!z,
        apiKey: "",
        // just to satisfy apiKey; TODO find a better solution
        ...t == null ? void 0 : t(y, N),
        ...s
      };
      if (!m.apiKey)
        throw new Error("no apiKey provided");
      return Jt(this, O, new Qr({ target: N, props: m })), ue(this, O).$on("select", (a) => {
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
    on(y, N) {
      return super.on(y, N);
    }
    once(y, N) {
      return super.once(y, N);
    }
    off(y, N) {
      return super.off(y, N);
    }
    listens(y) {
      return super.listens(y);
    }
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(y) {
      var s;
      Object.assign(ue(this, A), y);
      const {
        marker: N,
        showResultMarkers: D,
        flyTo: q,
        fullGeometryStyle: z,
        ...B
      } = ue(this, A);
      (s = ue(this, O)) == null || s.$set(B);
    }
    /**
     * Set the content of search input box.
     *
     * @param value text to set
     * @param submit perform the search
     */
    setQuery(y, N = !0) {
      var D;
      (D = ue(this, O)) == null || D.setQuery(y, N);
    }
    /**
     * Clear geocoding search results from the map.
     */
    clearMap() {
      var y;
      (y = ue(this, O)) == null || y.clearMap();
    }
    /**
     * Clear search result list.
     */
    clearList() {
      var y;
      (y = ue(this, O)) == null || y.clearList();
    }
    /**
     * Set reverse geocoding mode.
     *
     * @param reverseActive reverse geocoding active
     */
    setReverseMode(y) {
      var N;
      (N = ue(this, O)) == null || N.$set({ reverseActive: y });
    }
    /**
     * Focus the search input box.
     *
     * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
     */
    focus(y) {
      var N;
      (N = ue(this, O)) == null || N.focus(y);
    }
    /**
     * Blur the search input box.
     */
    blur() {
      var y;
      (y = ue(this, O)) == null || y.blur();
    }
    onRemove() {
      var y;
      (y = ue(this, O)) == null || y.$destroy();
    }
  }
  return O = new WeakMap(), A = new WeakMap(), {
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
const xs = "@maptiler/geocoding-control", Ts = "2.1.3", { MapLibreBasedGeocodingControl: Ms, events: $e } = Ss(
  Li.Evented,
  Li,
  (i, e) => {
    const t = {};
    if (!("getSdkConfig" in i && typeof i.getSdkConfig == "function"))
      throw new Error("MapTiler SDK not detected");
    const { primaryLanguage: n, apiKey: r } = i.getSdkConfig();
    t.apiKey = r;
    const u = /^([a-z]{2})($|_|-)/.exec(n);
    return u && (t.language = u[1]), e.className += " maptiler-ctrl", t;
  }
);
class ks extends Ms {
  onAdd(e) {
    var t;
    return (t = e.telemetry) == null || t.registerModule(xs, Ts), super.onAddInt(e);
  }
}
const Os = $e.SelectEvent, Rs = $e.FeaturesListedEvent, Ps = $e.FeaturesMarkedEvent, Is = $e.OptionsVisibilityChangeEvent, As = $e.PickEvent, Bs = $e.QueryChangeEvent, Ws = $e.ResponseEvent, Gs = $e.ReverseToggleEvent;
export {
  Rs as FeaturesListedEvent,
  Ps as FeaturesMarkedEvent,
  ks as GeocodingControl,
  Is as OptionsVisibilityChangeEvent,
  As as PickEvent,
  Bs as QueryChangeEvent,
  Ws as ResponseEvent,
  Gs as ReverseToggleEvent,
  Os as SelectEvent,
  _s as createMapLibreGlMapController
};
//# sourceMappingURL=maptilersdk.js.map
