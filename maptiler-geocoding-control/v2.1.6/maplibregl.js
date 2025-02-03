var zn = Object.defineProperty;
var wi = (i) => {
  throw TypeError(i);
};
var Un = (i, e, t) => e in i ? zn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var I = (i, e, t) => Un(i, typeof e != "symbol" ? e + "" : e, t), Ei = (i, e, t) => e.has(i) || wi("Cannot " + t);
var se = (i, e, t) => (Ei(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Ct = (i, e, t) => e.has(i) ? wi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), gt = (i, e, t, n) => (Ei(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as Li from "maplibre-gl";
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
let Nt;
function me(i, e) {
  return i === e ? !0 : (Nt || (Nt = document.createElement("a")), Nt.href = e, i === Nt.href);
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
function Dt(i) {
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
function Lt(i, e) {
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
let _t;
function Et(i) {
  _t = i;
}
function nn() {
  if (!_t) throw new Error("Function called outside component initialization");
  return _t;
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
  const i = _t;
  do {
    try {
      for (; lt < ut.length; ) {
        const e = ut[lt];
        lt++, Et(e), ir(e.$$);
      }
    } catch (e) {
      throw ut.length = 0, lt = 0, e;
    }
    for (Et(null), ut.length = 0, lt = 0; ii.length; ) ii.pop()();
    for (let e = 0; e < at.length; e += 1) {
      const t = at[e];
      $t.has(t) || ($t.add(t), t());
    }
    at.length = 0;
  } while (ut.length);
  for (; xi.length; )
    xi.pop()();
  ni = !1, $t.clear(), Et(i);
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
const It = /* @__PURE__ */ new Set();
let rt;
function At() {
  rt = {
    r: 0,
    c: [],
    p: rt
    // parent group
  };
}
function Bt() {
  rt.r || je(rt.c), rt = rt.p;
}
function le(i, e) {
  i && i.i && (It.delete(i), i.i(e));
}
function he(i, e, t, n) {
  if (i && i.o) {
    if (It.has(i)) return;
    It.add(i), rt.c.push(() => {
      It.delete(i), n && (t && i.d(1), n());
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
function sr(i, e, t, n, r, u, h, o, g, f, w, _) {
  let N = i.length, R = u.length, O = N;
  const W = {};
  for (; O--; ) W[i[O].key] = O;
  const M = [], k = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), C = [];
  for (O = R; O--; ) {
    const A = _(r, u, O), s = t(A);
    let l = h.get(s);
    l ? C.push(() => l.p(A, e)) : (l = f(s, A), l.c()), k.set(s, M[O] = l), s in W && S.set(s, Math.abs(O - W[s]));
  }
  const P = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  function q(A) {
    le(A, 1), A.m(o, w), h.set(A.key, A), w = A.first, R--;
  }
  for (; N && R; ) {
    const A = M[R - 1], s = i[N - 1], l = A.key, a = s.key;
    A === s ? (w = A.first, N--, R--) : k.has(a) ? !h.has(l) || P.has(l) ? q(A) : z.has(a) ? N-- : S.get(l) > S.get(a) ? (z.add(l), q(A)) : (P.add(a), N--) : (g(s, h), N--);
  }
  for (; N--; ) {
    const A = i[N];
    k.has(A.key) || g(A, h);
  }
  for (; R; ) q(M[R - 1]);
  return je(C), M;
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
  const g = _t;
  Et(i);
  const f = i.$$ = {
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
  h && h(f.root);
  let w = !1;
  if (f.ctx = t ? t(i, e.props || {}, (_, N, ...R) => {
    const O = R.length ? R[0] : N;
    return f.ctx && r(f.ctx[_], f.ctx[_] = O) && (!f.skip_bound && f.bound[_] && f.bound[_](O), w && or(i, _)), N;
  }) : [], f.update(), w = !0, je(f.before_update), f.fragment = n ? n(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const _ = Qn(e.target);
      f.fragment && f.fragment.l(_), _.forEach($);
    } else
      f.fragment && f.fragment.c();
    e.intro && le(i.$$.fragment), Ue(i, e.target, e.anchor), sn();
  }
  Et(g);
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
      128 && Lt(
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
  let e, t, n, r, u, h, o, g, f, w = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), _, N, R = (
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
  ), O, W, M = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), k, S, C, P, z, q;
  function A(m, c) {
    return c & /*feature*/
    1 && (t = null), c & /*feature*/
    1 && (n = null), c & /*feature*/
    1 && (r = null), c & /*feature*/
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
  let s = A(i, -1), l = s(i), a = R && Mi(i);
  return {
    c() {
      e = X("li"), l.c(), h = Ee(), o = X("span"), g = X("span"), f = X("span"), _ = Ke(w), N = Ee(), a && a.c(), O = Ee(), W = X("span"), k = Ke(M), x(f, "class", "primary svelte-w9y5n9"), x(g, "class", "svelte-w9y5n9"), x(W, "class", "line2 svelte-w9y5n9"), x(o, "class", "texts svelte-w9y5n9"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", S = /*style*/
      i[1] === "selected"), x(e, "aria-checked", C = /*style*/
      i[1] === "picked"), x(e, "class", P = Dt(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(m, c) {
      te(m, e, c), l.m(e, null), H(e, h), H(e, o), H(o, g), H(g, f), H(f, _), H(g, N), a && a.m(g, null), H(o, O), H(o, W), H(W, k), z || (q = [
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
      ], z = !0);
    },
    p(m, [c]) {
      s === (s = A(m, c)) && l ? l.p(m, c) : (l.d(1), l = s(m), l && (l.c(), l.m(e, h))), c & /*isReverse, feature*/
      257 && w !== (w = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && Lt(_, w), c & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (R = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), R ? a ? a.p(m, c) : (a = Mi(m), a.c(), a.m(g, null)) : a && (a.d(1), a = null), c & /*isReverse, feature*/
      257 && M !== (M = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Lt(k, M), c & /*style*/
      2 && S !== (S = /*style*/
      m[1] === "selected") && x(e, "aria-selected", S), c & /*style*/
      2 && C !== (C = /*style*/
      m[1] === "picked") && x(e, "aria-checked", C), c & /*style*/
      2 && P !== (P = Dt(
        /*style*/
        m[1]
      ) + " svelte-w9y5n9") && x(e, "class", P);
    },
    i: ee,
    o: ee,
    d(m) {
      m && $(e), l.d(), a && a.d(), z = !1, je(q);
    }
  };
}
const un = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, si = un ? "@2x" : "", _e = un ? 2 : 1;
let Ne, kt;
function wr(i, e, t) {
  let n, r, u, { feature: h } = e, { style: o = "default" } = e, { showPlaceType: g } = e, { missingIconsCache: f } = e, { iconsBaseUrl: w } = e;
  const _ = rn();
  let N, R, O, W;
  function M() {
    kt ?? (kt = fetch(`${w}sprite${si}.json`).then((s) => s.json()).then((s) => {
      Ne = s;
    }).catch(() => {
      Ne = null;
    }));
  }
  function k() {
    R && f.add(R), S();
  }
  function S() {
    Ne !== void 0 ? C() : (M(), kt == null || kt.then(C));
  }
  function C() {
    do {
      if (W--, t(4, N = n == null ? void 0 : n[W]), t(6, O = N ? Ne == null ? void 0 : Ne.icons[N] : void 0), O)
        break;
      t(5, R = N ? w + N.replace(/ /g, "_") + ".svg" : void 0);
    } while (W > -1 && (!R || f.has(R)));
  }
  function P(s) {
    $n.call(this, i, s);
  }
  const z = () => k(), q = () => _("select", void 0), A = (s) => {
    document.activeElement !== s.target && _("select", void 0);
  };
  return i.$$set = (s) => {
    "feature" in s && t(0, h = s.feature), "style" in s && t(1, o = s.style), "showPlaceType" in s && t(2, g = s.showPlaceType), "missingIconsCache" in s && t(11, f = s.missingIconsCache), "iconsBaseUrl" in s && t(3, w = s.iconsBaseUrl);
  }, i.$$.update = () => {
    var s, l, a, m, c;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (s = h.properties) == null ? void 0 : s.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = h.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((a = (l = h.properties) == null ? void 0 : l.categories) == null ? void 0 : a.join(", ")) ?? ((c = (m = h.properties) == null ? void 0 : m.place_type_name) == null ? void 0 : c[0]) ?? h.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (W = (n == null ? void 0 : n.length) ?? 0, S());
  }, [
    h,
    o,
    g,
    w,
    N,
    R,
    O,
    u,
    r,
    _,
    k,
    f,
    n,
    P,
    z,
    q,
    A
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
function zt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let mt;
async function Rr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (mt && r.cachedLocationExpiry && mt.time + r.cachedLocationExpiry > Date.now()) {
          if (!mt.coords)
            break e;
          return mt.coords;
        }
        let u;
        try {
          return u = await new Promise((h, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (g) => {
                h(
                  [g.coords.longitude, g.coords.latitude].map((f) => f.toFixed(6)).join(",")
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
          r.cachedLocationExpiry && (mt = {
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
    const f = Math.floor(r), w = Math.floor(u), _ = (r - f) * 60, N = (u - w) * 60;
    if (i == "DM") {
      let R = Pi(_, 3).toFixed(3).padStart(6, "0"), O = Pi(N, 3).toFixed(3).padStart(6, "0");
      R.endsWith(".000") && O.endsWith(".000") && (R = R.replace(/\.000$/, ""), O = O.replace(/\.000$/, "")), g = `${f}° ${R}' ${h}, ${w}° ${O}' ${o}`;
    }
    if (i == "DMS") {
      const R = Math.floor(_), O = Math.floor(N);
      let W = ((_ - R) * 60).toFixed(1).padStart(4, "0"), M = ((N - O) * 60).toFixed(1).padStart(4, "0");
      const k = R.toString().padStart(2, "0"), S = O.toString().padStart(2, "0");
      W.endsWith(".0") && M.endsWith(".0") && (W = W.replace(/\.0$/, ""), M = M.replace(/\.0$/, "")), g = `${f}° ${k}' ${W}" ${h}, ${w}° ${S}' ${M}" ${o}`;
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
    if (o = Ci.exec(i), g = pt(o), g)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), h = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Ni.test(i))
    if (o = Ni.exec(i), g = pt(o), g) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), h = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ki.test(i))
    if (o = ki.exec(i), g = pt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, h = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, h = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Oi.test(i))
    if (o = Oi.exec(i), g = pt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, h = "DM"), o[6] && (t += o[6] / 3600, h = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ri.test(i)) {
    if (o = Ri.exec(i), g = pt(o), o.filter((f) => f).length <= 5)
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
    let f = /S|SOUTH/i;
    f.test(r) && t > 0 && (t = -1 * t), f = /W|WEST/i, f.test(u) && n > 0 && (n = -1 * n);
    const w = o[0].trim();
    let _, N;
    const R = /[,/;\u0020]/g, O = w.match(R);
    if (O == null) {
      const k = Math.floor(i.length / 2);
      _ = w.substring(0, k).trim(), N = w.substring(k).trim();
    } else {
      let k;
      O.length % 2 == 1 ? k = Math.floor(O.length / 2) : k = O.length / 2 - 1;
      let S = 0;
      if (k == 0)
        S = w.indexOf(O[0]), _ = w.substring(0, S).trim(), N = w.substring(S + 1).trim();
      else {
        let C = 0, P = 0;
        for (; C <= k; )
          S = w.indexOf(O[C], P), P = S + 1, C++;
        _ = w.substring(0, S).trim(), N = w.substring(S + 1).trim();
      }
    }
    const W = _.split(".");
    if (W.length == 2 && W[1] == 0 && W[1].length != 2)
      throw new Error("invalid coordinates format");
    const M = N.split(".");
    if (M.length == 2 && M[1] == 0 && M[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(_) || /^\d+$/.test(N))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: w,
      verbatimLatitude: _,
      verbatimLongitude: N,
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
function pt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const h = e[u], o = e[u + r], g = t.test(h) && t.test(o), f = n.test(h) && n.test(o), w = h == o;
    if (!(h == null && o == null)) {
      if (h == null || o == null)
        return !1;
      if (g || f || w)
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
      t || (le(e.$$.fragment, n), t = !0);
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
      n || (le(t.$$.fragment, h), n = !0);
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
  const g = (f) => (
    /*feature*/
    f[97].id + /*feature*/
    (f[97].address ? "," + /*feature*/
    f[97].address : "")
  );
  for (let f = 0; f < o.length; f += 1) {
    let w = Ai(i, o, f), _ = g(w);
    n.set(_, t[f] = Gi(_, w));
  }
  return {
    c() {
      e = X("ul");
      for (let f = 0; f < t.length; f += 1)
        t[f].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(f, w) {
      te(f, e, w);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
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
    p(f, w) {
      w[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = Ti(
        /*listFeatures*/
        f[13]
      ), At(), t = sr(t, w, g, 1, f, o, n, e, rr, Gi, null, Ai), Bt());
    },
    i(f) {
      if (!r) {
        for (let w = 0; w < o.length; w += 1)
          le(t[w]);
        r = !0;
      }
    },
    o(f) {
      for (let w = 0; w < t.length; w += 1)
        he(t[w]);
      r = !1;
    },
    d(f) {
      f && $(e);
      for (let w = 0; w < t.length; w += 1)
        t[w].d();
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
      256) && Lt(
        u,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      h || (le(t.$$.fragment, o), h = !0);
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
  let e, t, n, r, u, h, o, g, f, w, _;
  return t = new ln({}), g = new on({}), {
    c() {
      e = X("div"), Ye(t.$$.fragment), n = Ee(), r = X("div"), u = Ke(
        /*errorMessage*/
        i[7]
      ), h = Ee(), o = X("button"), Ye(g.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(o, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(N, R) {
      te(N, e, R), Ue(t, e, null), H(e, n), H(e, r), H(r, u), H(e, h), H(e, o), Ue(g, o, null), f = !0, w || (_ = ce(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), w = !0);
    },
    p(N, R) {
      (!f || R[0] & /*errorMessage*/
      128) && Lt(
        u,
        /*errorMessage*/
        N[7]
      );
    },
    i(N) {
      f || (le(t.$$.fragment, N), le(g.$$.fragment, N), f = !0);
    },
    o(N) {
      he(t.$$.fragment, N), he(g.$$.fragment, N), f = !1;
    },
    d(N) {
      N && $(e), qe(t), qe(g), w = !1, _();
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
    m(g, f) {
      te(g, t, f), Ue(n, g, f), r = !0;
    },
    p(g, f) {
      var _;
      e = g;
      const w = {};
      f[0] & /*listFeatures*/
      8192 && (w.feature = /*feature*/
      e[97]), f[0] & /*showPlaceType*/
      2048 && (w.showPlaceType = /*showPlaceType*/
      e[11]), f[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (w.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((_ = e[14]) == null ? void 0 : _.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), f[0] & /*iconsBaseUrl*/
      4096 && (w.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(w);
    },
    i(g) {
      r || (le(n.$$.fragment, g), r = !0);
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
  let e, t, n, r, u, h, o, g, f, w, _, N, R, O, W, M, k, S, C, P, z, q = !1;
  u = new kr({}), _ = new on({});
  let A = (
    /*abortController*/
    i[20] && Bi()
  ), s = (
    /*enableReverse*/
    i[6] === "button" && Wi(i)
  );
  const l = (
    /*#slots*/
    i[70].default
  ), a = jn(
    l,
    i,
    /*$$scope*/
    i[69],
    null
  ), m = [Vr, Hr, Zr, jr], c = [];
  function p(y, d) {
    var v, b;
    return (
      /*error*/
      y[19] ? 0 : !/*focusedDelayed*/
      y[16] && !/*keepListOpen*/
      y[4] ? 1 : (
        /*listFeatures*/
        ((v = y[13]) == null ? void 0 : v.length) === 0 ? 2 : (
          /*listFeatures*/
          (b = y[13]) != null && b.length && /*focusedDelayed*/
          (y[16] || /*keepListOpen*/
          y[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(M = p(i)) && (k = c[M] = m[M](i)), {
    c() {
      e = Ee(), t = X("form"), n = X("div"), r = X("button"), Ye(u.$$.fragment), h = Ee(), o = X("input"), g = Ee(), f = X("div"), w = X("button"), Ye(_.$$.fragment), N = Ee(), A && A.c(), R = Ee(), s && s.c(), O = Ee(), a && a.c(), W = Ee(), k && k.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), x(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), x(o, "class", "svelte-bz0zu3"), x(w, "type", "button"), x(
        w,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), x(w, "class", "svelte-bz0zu3"), x(f, "class", "clear-button-container svelte-bz0zu3"), Be(
        f,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", S = Dt(
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
    m(y, d) {
      te(y, e, d), te(y, t, d), H(t, n), H(n, r), Ue(u, r, null), H(n, h), H(n, o), i[72](o), Si(
        o,
        /*searchValue*/
        i[1]
      ), H(n, g), H(n, f), H(f, w), Ue(_, w, null), H(f, N), A && A.m(f, null), H(n, R), s && s.m(n, null), H(n, O), a && a.m(n, null), H(t, W), ~M && c[M].m(t, null), C = !0, P || (z = [
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
          w,
          "click",
          /*click_handler_2*/
          i[78]
        ),
        ce(t, "submit", Yn(
          /*handleSubmit*/
          i[22]
        ))
      ], P = !0);
    },
    p(y, d) {
      (!C || d[0] & /*placeholder*/
      512) && x(
        o,
        "placeholder",
        /*placeholder*/
        y[9]
      ), (!C || d[0] & /*placeholder*/
      512) && x(
        o,
        "aria-label",
        /*placeholder*/
        y[9]
      ), d[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      y[1] && Si(
        o,
        /*searchValue*/
        y[1]
      ), (!C || d[0] & /*clearButtonTitle*/
      8) && x(
        w,
        "title",
        /*clearButtonTitle*/
        y[3]
      ), /*abortController*/
      y[20] ? A ? d[0] & /*abortController*/
      1048576 && le(A, 1) : (A = Bi(), A.c(), le(A, 1), A.m(f, null)) : A && (At(), he(A, 1, 1, () => {
        A = null;
      }), Bt()), (!C || d[0] & /*searchValue*/
      2) && Be(
        f,
        "displayable",
        /*searchValue*/
        y[1] !== ""
      ), /*enableReverse*/
      y[6] === "button" ? s ? (s.p(y, d), d[0] & /*enableReverse*/
      64 && le(s, 1)) : (s = Wi(y), s.c(), le(s, 1), s.m(n, O)) : s && (At(), he(s, 1, 1, () => {
        s = null;
      }), Bt()), a && a.p && (!C || d[2] & /*$$scope*/
      128) && Hn(
        a,
        l,
        y,
        /*$$scope*/
        y[69],
        C ? Zn(
          l,
          /*$$scope*/
          y[69],
          d,
          null
        ) : Vn(
          /*$$scope*/
          y[69]
        ),
        null
      );
      let v = M;
      M = p(y), M === v ? ~M && c[M].p(y, d) : (k && (At(), he(c[v], 1, 1, () => {
        c[v] = null;
      }), Bt()), ~M ? (k = c[M], k ? k.p(y, d) : (k = c[M] = m[M](y), k.c()), le(k, 1), k.m(t, null)) : k = null), (!C || d[0] & /*className*/
      4 && S !== (S = Dt(
        /*className*/
        y[2]
      ) + " svelte-bz0zu3")) && x(t, "class", S), (!C || d[0] & /*className, collapsed, searchValue*/
      38) && Be(
        t,
        "can-collapse",
        /*collapsed*/
        y[5] && /*searchValue*/
        y[1] === ""
      );
    },
    i(y) {
      C || (le(q), le(u.$$.fragment, y), le(_.$$.fragment, y), le(A), le(s), le(a, y), le(k), C = !0);
    },
    o(y) {
      he(q), he(u.$$.fragment, y), he(_.$$.fragment, y), he(A), he(s), he(a, y), he(k), C = !1;
    },
    d(y) {
      y && ($(e), $(t)), qe(u), i[72](null), qe(_), A && A.d(), s && s.d(), a && a.d(y), ~M && c[M].d(), P = !1, je(z);
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
  let { class: f = void 0 } = e, { apiKey: w } = e, { bbox: _ = void 0 } = e, { clearButtonTitle: N = "clear" } = e, { clearOnBlur: R = !1 } = e, { clearListOnPick: O = !1 } = e, { keepListOpen: W = !1 } = e, { collapsed: M = !1 } = e, { country: k = void 0 } = e, { debounceSearch: S = 200 } = e, { enableReverse: C = "never" } = e, { errorMessage: P = "Something went wrong…" } = e, { filter: z = () => !0 } = e, { flyTo: q = !0 } = e, { fuzzyMatch: A = !0 } = e, { language: s = void 0 } = e, { limit: l = void 0 } = e;
  const a = 41415112612;
  let { reverseGeocodingLimit: m = a } = e, { mapController: c = void 0 } = e, { minLength: p = 2 } = e, { noResultsMessage: y = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: d = "Search" } = e, { proximity: v = [{ type: "server-geolocation" }] } = e, { reverseActive: b = C === "always" } = e, { reverseButtonTitle: E = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: B = "full-geometry" } = e, { showPlaceType: G = "if-needed" } = e, { showResultsWhileTyping: Z = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: ie = !1 } = e, { markerOnSelected: j = !0 } = e, { types: V = void 0 } = e;
  const ae = [];
  let { reverseGeocodingTypes: Ge = ae } = e, { exhaustiveReverseGeocoding: et = !1 } = e, { excludeTypes: tt = !1 } = e;
  const ye = void 0;
  let { reverseGeocodingExcludeTypes: Oe = ye } = e, { zoom: de = g } = e, { apiUrl: fe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: di = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.6/icons/" } = e, { adjustUrlQuery: Zt = () => {
  } } = e, { adjustUrl: Ht = () => {
  } } = e;
  function yn(L) {
    Me.focus(L);
  }
  function vn() {
    Me.blur();
  }
  function gi(L, ne = !0, oe = !1) {
    t(1, T = L), ne ? (t(15, Y = -1), pi()) : (yi(void 0, !oe, oe), setTimeout(() => {
      Me.focus(), Me.select();
    }));
  }
  function bn() {
    t(13, F = void 0), t(14, D = void 0), t(15, Y = -1);
  }
  function wn() {
    t(64, ue = []), t(14, D = void 0);
  }
  let F, ue, D, mi = "", Me, Y = -1, Re, Tt = [], it, st, ot, Vt, De = !1;
  const En = /* @__PURE__ */ new Set(), Ze = rn();
  Jn(() => {
    c && (c.setEventHandler(void 0), c.indicateReverse(!1), c.setSelectedMarker(-1), c.setFeatures(void 0, void 0, !1));
  });
  function pi(L) {
    if (t(17, De = !1), st && (clearTimeout(st), st = void 0), Y > -1 && F)
      t(14, D = F[Y]), t(1, T = D.place_type[0] === "reverse" ? D.place_name : D.place_name.replace(/,.*/, "")), t(19, Re = void 0), t(64, ue = void 0), t(15, Y = -1);
    else if (T) {
      const ne = L || !Kt(T);
      Yt(T, { exact: !0 }).then(() => {
        t(64, ue = F), t(14, D = void 0), ne && Ln();
      }).catch((oe) => t(19, Re = oe));
    }
  }
  function Kt(L) {
    try {
      return Fr(L, 6);
    } catch {
      return !1;
    }
  }
  async function Yt(L, { byId: ne = !1, exact: oe = !1 } = {}) {
    var be, Pe, He;
    t(19, Re = void 0), it == null || it.abort();
    const ve = new AbortController();
    t(20, it = ve);
    try {
      const Q = Kt(L), ct = new URL(fe + "/" + encodeURIComponent(Q ? Q.decimalLongitude + "," + Q.decimalLatitude : L) + ".json"), Le = ct.searchParams;
      s !== void 0 && Le.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Jt] = (c == null ? void 0 : c.getCenterAndZoom()) ?? [];
      let Ie = (be = !Q || Ge === ae ? V : Ge) == null ? void 0 : be.map((ge) => typeof ge == "string" ? ge : Jt === void 0 || (ge[0] ?? 0) <= Jt && Jt < (ge[1] ?? 1 / 0) ? ge[2] : void 0).filter((ge) => ge !== void 0);
      Ie && (Ie = [...new Set(Ie)], Le.set("types", Ie.join(",")));
      const bi = !Q || Oe === ye ? tt : Oe;
      if (bi && Le.set("excludeTypes", String(bi)), _ && Le.set("bbox", _.map((ge) => ge.toFixed(6)).join(",")), k && Le.set("country", Array.isArray(k) ? k.join(",") : k), !ne && !Q) {
        const ge = await Rr(c, v, ve);
        ge && Le.set("proximity", ge), (oe || !Z) && Le.set("autocomplete", "false"), Le.set("fuzzyMatch", String(A));
      }
      const ht = m === a ? l : m;
      ht !== void 0 && ht > 1 && (Ie == null ? void 0 : Ie.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), Q ? (ht === 1 || ht !== void 0 && (et || (Ie == null ? void 0 : Ie.length) === 1)) && Le.set("limit", String(ht)) : l !== void 0 && Le.set("limit", String(l)), Le.set("key", w), Zt(Le), Ht(ct);
      const Dn = ct.searchParams.get("types") === "" && ct.searchParams.get("excludeTypes") !== "true", Mt = ct.toString();
      if (Mt === mi) {
        ne ? (O && t(13, F = void 0), t(14, D = Tt[0])) : (t(13, F = Tt), ((Pe = F[Y]) == null ? void 0 : Pe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      mi = Mt;
      let dt;
      if (Dn)
        dt = { type: "FeatureCollection", features: [] };
      else {
        const ge = await fetch(Mt, { signal: ve.signal, ...J });
        if (!ge.ok)
          throw new Error(await ge.text());
        dt = await ge.json();
      }
      Ze("response", { url: Mt, featureCollection: dt }), ne ? (O && t(13, F = void 0), t(14, D = dt.features[0]), Tt = [D]) : (t(13, F = dt.features.filter(z)), Q && F.unshift({
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
      }), Tt = F, ((He = F[Y]) == null ? void 0 : He.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), Q && Me.focus());
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
    if (!(ue != null && ue.length) || !q)
      return;
    const L = [180, 90, -180, -90], ne = !ue.some((be) => !be.matching_text);
    let oe;
    for (const be of ue) {
      const Pe = ft(be);
      if (oe = oe === void 0 ? Pe : Pe === void 0 ? oe : Math.max(oe, Pe), ne || !be.matching_text)
        for (const He of [0, 1, 2, 3])
          L[He] = Math[He < 2 ? "min" : "max"](L[He], ((ve = be.bbox) == null ? void 0 : ve[He]) ?? be.center[He % 2]);
    }
    c && ue.length > 0 && (D && L[0] === L[2] && L[1] === L[3] ? c.flyTo(D.center, ft(D)) : c.fitBounds(zt(L), 50, oe));
  }
  function Qt() {
    !D || !c || (!D.bbox || D.bbox[0] === D.bbox[2] && D.bbox[1] === D.bbox[3] ? c.flyTo(D.center, ft(D)) : c.fitBounds(zt(D.bbox), 50, ft(D)));
  }
  function ft(L) {
    var oe;
    if (!L.bbox || L.bbox[0] !== L.bbox[2] && L.bbox[1] !== L.bbox[3])
      return;
    const ne = L.id.replace(/\..*/, "");
    return (Array.isArray((oe = L.properties) == null ? void 0 : oe.categories) ? L.properties.categories.reduce(
      (ve, be) => {
        const Pe = de[ne + "." + be];
        return ve === void 0 ? Pe : Pe === void 0 ? ve : Math.max(ve, Pe);
      },
      void 0
    ) : void 0) ?? de[ne];
  }
  function _n(L) {
    t(0, b = C === "always"), t(13, F = void 0), t(14, D = void 0), t(15, Y = -1), gi(L[1].toFixed(6) + ", " + Or(L[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Sn(L) {
    if (!F)
      return;
    let ne = L.key === "ArrowDown" ? 1 : L.key === "ArrowUp" ? -1 : 0;
    ne && (Me.focus(), t(17, De = !0), L.preventDefault(), D && Y === -1 && t(15, Y = F.findIndex((oe) => oe.id === (D == null ? void 0 : D.id))), Y === (D || K ? 0 : -1) && ne === -1 && t(15, Y = F.length), t(15, Y += ne), Y >= F.length && t(15, Y = -1), Y < 0 && (D || K) && t(15, Y = 0));
  }
  function yi(L, ne = !0, oe = !1) {
    if (t(19, Re = void 0), t(14, D = void 0), t(17, De = !0), Z || oe) {
      if (st && clearTimeout(st), T.length < p)
        return;
      const ve = T;
      st = window.setTimeout(
        () => {
          Yt(ve).catch((be) => t(19, Re = be));
        },
        ne ? S : 0
      );
    } else
      t(13, F = void 0), t(19, Re = void 0);
  }
  function Xt(L) {
    D && (D == null ? void 0 : D.id) === (L == null ? void 0 : L.id) ? Qt() : (t(14, D = L), t(1, T = L.place_name));
  }
  function vi(L) {
    t(15, Y = L);
  }
  function xn() {
    (!K || D) && t(15, Y = -1), ie && Qt();
  }
  const Tn = () => Me.focus();
  function Mn(L) {
    ii[L ? "unshift" : "push"](() => {
      Me = L, t(18, Me);
    });
  }
  function Cn() {
    T = this.value, t(1, T), t(17, De), t(31, R), t(16, ot);
  }
  const Nn = () => t(17, De = !0), kn = () => t(17, De = !1), On = () => t(17, De = !0), Rn = () => t(14, D = void 0), Pn = () => {
    t(1, T = ""), t(14, D = void 0), Me.focus();
  }, In = () => t(0, b = !b), An = () => t(19, Re = void 0), Bn = (L) => vi(L), Wn = (L) => Xt(L), Gn = () => {
  };
  return i.$$set = (L) => {
    "class" in L && t(2, f = L.class), "apiKey" in L && t(29, w = L.apiKey), "bbox" in L && t(30, _ = L.bbox), "clearButtonTitle" in L && t(3, N = L.clearButtonTitle), "clearOnBlur" in L && t(31, R = L.clearOnBlur), "clearListOnPick" in L && t(32, O = L.clearListOnPick), "keepListOpen" in L && t(4, W = L.keepListOpen), "collapsed" in L && t(5, M = L.collapsed), "country" in L && t(33, k = L.country), "debounceSearch" in L && t(34, S = L.debounceSearch), "enableReverse" in L && t(6, C = L.enableReverse), "errorMessage" in L && t(7, P = L.errorMessage), "filter" in L && t(35, z = L.filter), "flyTo" in L && t(36, q = L.flyTo), "fuzzyMatch" in L && t(37, A = L.fuzzyMatch), "language" in L && t(38, s = L.language), "limit" in L && t(39, l = L.limit), "reverseGeocodingLimit" in L && t(40, m = L.reverseGeocodingLimit), "mapController" in L && t(41, c = L.mapController), "minLength" in L && t(42, p = L.minLength), "noResultsMessage" in L && t(8, y = L.noResultsMessage), "placeholder" in L && t(9, d = L.placeholder), "proximity" in L && t(43, v = L.proximity), "reverseActive" in L && t(0, b = L.reverseActive), "reverseButtonTitle" in L && t(10, E = L.reverseButtonTitle), "searchValue" in L && t(1, T = L.searchValue), "pickedResultStyle" in L && t(44, B = L.pickedResultStyle), "showPlaceType" in L && t(11, G = L.showPlaceType), "showResultsWhileTyping" in L && t(45, Z = L.showResultsWhileTyping), "selectFirst" in L && t(46, K = L.selectFirst), "flyToSelected" in L && t(47, ie = L.flyToSelected), "markerOnSelected" in L && t(48, j = L.markerOnSelected), "types" in L && t(49, V = L.types), "reverseGeocodingTypes" in L && t(50, Ge = L.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in L && t(51, et = L.exhaustiveReverseGeocoding), "excludeTypes" in L && t(52, tt = L.excludeTypes), "reverseGeocodingExcludeTypes" in L && t(53, Oe = L.reverseGeocodingExcludeTypes), "zoom" in L && t(54, de = L.zoom), "apiUrl" in L && t(55, fe = L.apiUrl), "fetchParameters" in L && t(56, J = L.fetchParameters), "iconsBaseUrl" in L && t(12, di = L.iconsBaseUrl), "adjustUrlQuery" in L && t(57, Zt = L.adjustUrlQuery), "adjustUrl" in L && t(58, Ht = L.adjustUrl), "$$scope" in L && t(69, o = L.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, b = C === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && B !== "marker-only" && D && !D.address && D.geometry.type === "Point" && D.place_type[0] !== "reverse" && Yt(D.id, { byId: !0 }).catch((L) => t(19, Re = L)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (c && D && D.id !== Vt && q && (Qt(), O && t(13, F = void 0), t(64, ue = void 0), t(15, Y = -1)), t(65, Vt = D == null ? void 0 : D.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ot = De), R && !ot && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < p && (t(13, F = void 0), t(19, Re = void 0), t(64, ue = F)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && F != null && F.length && Y == -1 && !D && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && ue !== F && t(64, ue = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && c && c.setEventHandler((L) => {
      switch (L.type) {
        case "mapClick":
          b && _n(L.coordinates);
          break;
        case "markerClick":
          {
            const ne = F == null ? void 0 : F.find((oe) => oe.id === L.id);
            ne && Xt(ne);
          }
          break;
        case "markerMouseEnter":
          ue && t(15, Y = ot ? (F == null ? void 0 : F.findIndex((ne) => ne.id === L.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          ue && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = F == null ? void 0 : F[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && c && r && q && ie && c.flyTo(r.center, ft(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = B === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (j || c == null || c.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && c && j && !ue && (c.setFeatures(r ? [r] : void 0, D, n), c.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && c && c.setFeatures(ue, D, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && ue && c && c.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && c) {
      const L = Kt(T);
      c.setReverseMarker(L ? [L.decimalLongitude, L.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && Ze("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && Ze("pick", { feature: D }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(F != null && F.length) && (ot || W)), i.$$.dirty[2] & /*optionsVisible*/
    32 && Ze("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && Ze("featureslisted", { features: F }), i.$$.dirty[2] & /*markedFeatures*/
    4 && Ze("featuresmarked", { features: ue }), i.$$.dirty[0] & /*reverseActive*/
    1 && Ze("reversetoggle", { reverse: b }), i.$$.dirty[0] & /*searchValue*/
    2 && Ze("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && c && c.indicateReverse(b);
  }, [
    b,
    T,
    f,
    N,
    W,
    M,
    C,
    P,
    y,
    d,
    E,
    G,
    di,
    F,
    D,
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
    Xt,
    vi,
    xn,
    g,
    w,
    _,
    R,
    O,
    k,
    S,
    z,
    q,
    A,
    s,
    l,
    m,
    c,
    p,
    v,
    B,
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
    Zt,
    Ht,
    yn,
    vn,
    gi,
    bn,
    wn,
    ue,
    Vt,
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
function St(i, e, t = {}) {
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
  return St({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function xt(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function an(i, e, t = {}) {
  return St({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
var Xr = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ei = Math.ceil, xe = Math.floor, pe = "[BigNumber Error] ", Di = pe + "Number primitive has more than 15 significant digits: ", Ce = 1e14, U = 14, zi = 9007199254740991, ti = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ve = 1e7, we = 1e9;
function fn(i) {
  var e, t, n, r = S.prototype = { constructor: S, toString: null, valueOf: null }, u = new S(1), h = 20, o = 4, g = -7, f = 21, w = -1e7, _ = 1e7, N = !1, R = 1, O = 0, W = {
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
  function S(s, l) {
    var a, m, c, p, y, d, v, b, E = this;
    if (!(E instanceof S)) return new S(s, l);
    if (l == null) {
      if (s && s._isBigNumber === !0) {
        E.s = s.s, !s.c || s.e > _ ? E.c = E.e = null : s.e < w ? E.c = [E.e = 0] : (E.e = s.e, E.c = s.c.slice());
        return;
      }
      if ((d = typeof s == "number") && s * 0 == 0) {
        if (E.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (p = 0, y = s; y >= 10; y /= 10, p++) ;
          p > _ ? E.c = E.e = null : (E.e = p, E.c = [s]);
          return;
        }
        b = String(s);
      } else {
        if (!Xr.test(b = String(s))) return n(E, b, d);
        E.s = b.charCodeAt(0) == 45 ? (b = b.slice(1), -1) : 1;
      }
      (p = b.indexOf(".")) > -1 && (b = b.replace(".", "")), (y = b.search(/e/i)) > 0 ? (p < 0 && (p = y), p += +b.slice(y + 1), b = b.substring(0, y)) : p < 0 && (p = b.length);
    } else {
      if (re(l, 2, M.length, "Base"), l == 10 && k)
        return E = new S(s), q(E, h + E.e + 1, o);
      if (b = String(s), d = typeof s == "number") {
        if (s * 0 != 0) return n(E, b, d, l);
        if (E.s = 1 / s < 0 ? (b = b.slice(1), -1) : 1, S.DEBUG && b.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Di + s);
      } else
        E.s = b.charCodeAt(0) === 45 ? (b = b.slice(1), -1) : 1;
      for (a = M.slice(0, l), p = y = 0, v = b.length; y < v; y++)
        if (a.indexOf(m = b.charAt(y)) < 0) {
          if (m == ".") {
            if (y > p) {
              p = v;
              continue;
            }
          } else if (!c && (b == b.toUpperCase() && (b = b.toLowerCase()) || b == b.toLowerCase() && (b = b.toUpperCase()))) {
            c = !0, y = -1, p = 0;
            continue;
          }
          return n(E, String(s), d, l);
        }
      d = !1, b = t(b, l, 10, E.s), (p = b.indexOf(".")) > -1 ? b = b.replace(".", "") : p = b.length;
    }
    for (y = 0; b.charCodeAt(y) === 48; y++) ;
    for (v = b.length; b.charCodeAt(--v) === 48; ) ;
    if (b = b.slice(y, ++v)) {
      if (v -= y, d && S.DEBUG && v > 15 && (s > zi || s !== xe(s)))
        throw Error(Di + E.s * s);
      if ((p = p - y - 1) > _)
        E.c = E.e = null;
      else if (p < w)
        E.c = [E.e = 0];
      else {
        if (E.e = p, E.c = [], y = (p + 1) % U, p < 0 && (y += U), y < v) {
          for (y && E.c.push(+b.slice(0, y)), v -= U; y < v; )
            E.c.push(+b.slice(y, y += U));
          y = U - (b = b.slice(y)).length;
        } else
          y -= v;
        for (; y--; b += "0") ;
        E.c.push(+b);
      }
    } else
      E.c = [E.e = 0];
  }
  S.clone = fn, S.ROUND_UP = 0, S.ROUND_DOWN = 1, S.ROUND_CEIL = 2, S.ROUND_FLOOR = 3, S.ROUND_HALF_UP = 4, S.ROUND_HALF_DOWN = 5, S.ROUND_HALF_EVEN = 6, S.ROUND_HALF_CEIL = 7, S.ROUND_HALF_FLOOR = 8, S.EUCLID = 9, S.config = S.set = function(s) {
    var l, a;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(l = "DECIMAL_PLACES") && (a = s[l], re(a, 0, we, l), h = a), s.hasOwnProperty(l = "ROUNDING_MODE") && (a = s[l], re(a, 0, 8, l), o = a), s.hasOwnProperty(l = "EXPONENTIAL_AT") && (a = s[l], a && a.pop ? (re(a[0], -1e9, 0, l), re(a[1], 0, we, l), g = a[0], f = a[1]) : (re(a, -1e9, we, l), g = -(f = a < 0 ? -a : a))), s.hasOwnProperty(l = "RANGE"))
          if (a = s[l], a && a.pop)
            re(a[0], -1e9, -1, l), re(a[1], 1, we, l), w = a[0], _ = a[1];
          else if (re(a, -1e9, we, l), a)
            w = -(_ = a < 0 ? -a : a);
          else
            throw Error(pe + l + " cannot be zero: " + a);
        if (s.hasOwnProperty(l = "CRYPTO"))
          if (a = s[l], a === !!a)
            if (a)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                N = a;
              else
                throw N = !a, Error(pe + "crypto unavailable");
            else
              N = a;
          else
            throw Error(pe + l + " not true or false: " + a);
        if (s.hasOwnProperty(l = "MODULO_MODE") && (a = s[l], re(a, 0, 9, l), R = a), s.hasOwnProperty(l = "POW_PRECISION") && (a = s[l], re(a, 0, we, l), O = a), s.hasOwnProperty(l = "FORMAT"))
          if (a = s[l], typeof a == "object") W = a;
          else throw Error(pe + l + " not an object: " + a);
        if (s.hasOwnProperty(l = "ALPHABET"))
          if (a = s[l], typeof a == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(a))
            k = a.slice(0, 10) == "0123456789", M = a;
          else
            throw Error(pe + l + " invalid: " + a);
      } else
        throw Error(pe + "Object expected: " + s);
    return {
      DECIMAL_PLACES: h,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, f],
      RANGE: [w, _],
      CRYPTO: N,
      MODULO_MODE: R,
      POW_PRECISION: O,
      FORMAT: W,
      ALPHABET: M
    };
  }, S.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!S.DEBUG) return !0;
    var l, a, m = s.c, c = s.e, p = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((p === 1 || p === -1) && c >= -1e9 && c <= we && c === xe(c)) {
        if (m[0] === 0) {
          if (c === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (c + 1) % U, l < 1 && (l += U), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (a = m[l], a < 0 || a >= Ce || a !== xe(a)) break e;
          if (a !== 0) return !0;
        }
      }
    } else if (m === null && c === null && (p === null || p === 1 || p === -1))
      return !0;
    throw Error(pe + "Invalid BigNumber: " + s);
  }, S.maximum = S.max = function() {
    return P(arguments, -1);
  }, S.minimum = S.min = function() {
    return P(arguments, 1);
  }, S.random = function() {
    var s = 9007199254740992, l = Math.random() * s & 2097151 ? function() {
      return xe(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(a) {
      var m, c, p, y, d, v = 0, b = [], E = new S(u);
      if (a == null ? a = h : re(a, 0, we), y = ei(a / U), N)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(y *= 2)); v < y; )
            d = m[v] * 131072 + (m[v + 1] >>> 11), d >= 9e15 ? (c = crypto.getRandomValues(new Uint32Array(2)), m[v] = c[0], m[v + 1] = c[1]) : (b.push(d % 1e14), v += 2);
          v = y / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(y *= 7); v < y; )
            d = (m[v] & 31) * 281474976710656 + m[v + 1] * 1099511627776 + m[v + 2] * 4294967296 + m[v + 3] * 16777216 + (m[v + 4] << 16) + (m[v + 5] << 8) + m[v + 6], d >= 9e15 ? crypto.randomBytes(7).copy(m, v) : (b.push(d % 1e14), v += 7);
          v = y / 7;
        } else
          throw N = !1, Error(pe + "crypto unavailable");
      if (!N)
        for (; v < y; )
          d = l(), d < 9e15 && (b[v++] = d % 1e14);
      for (y = b[--v], a %= U, y && a && (d = ti[U - a], b[v] = xe(y / d) * d); b[v] === 0; b.pop(), v--) ;
      if (v < 0)
        b = [p = 0];
      else {
        for (p = -1; b[0] === 0; b.splice(0, 1), p -= U) ;
        for (v = 1, d = b[0]; d >= 10; d /= 10, v++) ;
        v < U && (p -= U - v);
      }
      return E.e = p, E.c = b, E;
    };
  }(), S.sum = function() {
    for (var s = 1, l = arguments, a = new S(l[0]); s < l.length; ) a = a.plus(l[s++]);
    return a;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function l(a, m, c, p) {
      for (var y, d = [0], v, b = 0, E = a.length; b < E; ) {
        for (v = d.length; v--; d[v] *= m) ;
        for (d[0] += p.indexOf(a.charAt(b++)), y = 0; y < d.length; y++)
          d[y] > c - 1 && (d[y + 1] == null && (d[y + 1] = 0), d[y + 1] += d[y] / c | 0, d[y] %= c);
      }
      return d.reverse();
    }
    return function(a, m, c, p, y) {
      var d, v, b, E, T, B, G, Z, K = a.indexOf("."), ie = h, j = o;
      for (K >= 0 && (E = O, O = 0, a = a.replace(".", ""), Z = new S(m), B = Z.pow(a.length - K), O = E, Z.c = l(
        ze(Se(B.c), B.e, "0"),
        10,
        c,
        s
      ), Z.e = Z.c.length), G = l(a, m, c, y ? (d = M, s) : (d = s, M)), b = E = G.length; G[--E] == 0; G.pop()) ;
      if (!G[0]) return d.charAt(0);
      if (K < 0 ? --b : (B.c = G, B.e = b, B.s = p, B = e(B, Z, ie, j, c), G = B.c, T = B.r, b = B.e), v = b + ie + 1, K = G[v], E = c / 2, T = T || v < 0 || G[v + 1] != null, T = j < 4 ? (K != null || T) && (j == 0 || j == (B.s < 0 ? 3 : 2)) : K > E || K == E && (j == 4 || T || j == 6 && G[v - 1] & 1 || j == (B.s < 0 ? 8 : 7)), v < 1 || !G[0])
        a = T ? ze(d.charAt(1), -ie, d.charAt(0)) : d.charAt(0);
      else {
        if (G.length = v, T)
          for (--c; ++G[--v] > c; )
            G[v] = 0, v || (++b, G = [1].concat(G));
        for (E = G.length; !G[--E]; ) ;
        for (K = 0, a = ""; K <= E; a += d.charAt(G[K++])) ;
        a = ze(a, b, d.charAt(0));
      }
      return a;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, c, p) {
      var y, d, v, b, E = 0, T = m.length, B = c % Ve, G = c / Ve | 0;
      for (m = m.slice(); T--; )
        v = m[T] % Ve, b = m[T] / Ve | 0, y = G * v + b * B, d = B * v + y % Ve * Ve + E, E = (d / p | 0) + (y / Ve | 0) + G * b, m[T] = d % p;
      return E && (m = [E].concat(m)), m;
    }
    function l(m, c, p, y) {
      var d, v;
      if (p != y)
        v = p > y ? 1 : -1;
      else
        for (d = v = 0; d < p; d++)
          if (m[d] != c[d]) {
            v = m[d] > c[d] ? 1 : -1;
            break;
          }
      return v;
    }
    function a(m, c, p, y) {
      for (var d = 0; p--; )
        m[p] -= d, d = m[p] < c[p] ? 1 : 0, m[p] = d * y + m[p] - c[p];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, c, p, y, d) {
      var v, b, E, T, B, G, Z, K, ie, j, V, ae, Ge, et, tt, ye, Oe, de = m.s == c.s ? 1 : -1, fe = m.c, J = c.c;
      if (!fe || !fe[0] || !J || !J[0])
        return new S(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !c.s || (fe ? J && fe[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            fe && fe[0] == 0 || !J ? de * 0 : de / 0
          )
        );
      for (K = new S(de), ie = K.c = [], b = m.e - c.e, de = p + b + 1, d || (d = Ce, b = Te(m.e / U) - Te(c.e / U), de = de / U | 0), E = 0; J[E] == (fe[E] || 0); E++) ;
      if (J[E] > (fe[E] || 0) && b--, de < 0)
        ie.push(1), T = !0;
      else {
        for (et = fe.length, ye = J.length, E = 0, de += 2, B = xe(d / (J[0] + 1)), B > 1 && (J = s(J, B, d), fe = s(fe, B, d), ye = J.length, et = fe.length), Ge = ye, j = fe.slice(0, ye), V = j.length; V < ye; j[V++] = 0) ;
        Oe = J.slice(), Oe = [0].concat(Oe), tt = J[0], J[1] >= d / 2 && tt++;
        do {
          if (B = 0, v = l(J, j, ye, V), v < 0) {
            if (ae = j[0], ye != V && (ae = ae * d + (j[1] || 0)), B = xe(ae / tt), B > 1)
              for (B >= d && (B = d - 1), G = s(J, B, d), Z = G.length, V = j.length; l(G, j, Z, V) == 1; )
                B--, a(G, ye < Z ? Oe : J, Z, d), Z = G.length, v = 1;
            else
              B == 0 && (v = B = 1), G = J.slice(), Z = G.length;
            if (Z < V && (G = [0].concat(G)), a(j, G, V, d), V = j.length, v == -1)
              for (; l(J, j, ye, V) < 1; )
                B++, a(j, ye < V ? Oe : J, V, d), V = j.length;
          } else v === 0 && (B++, j = [0]);
          ie[E++] = B, j[0] ? j[V++] = fe[Ge] || 0 : (j = [fe[Ge]], V = 1);
        } while ((Ge++ < et || j[0] != null) && de--);
        T = j[0] != null, ie[0] || ie.splice(0, 1);
      }
      if (d == Ce) {
        for (E = 1, de = ie[0]; de >= 10; de /= 10, E++) ;
        q(K, p + (K.e = E + b * U - 1) + 1, y, T);
      } else
        K.e = b, K.r = +T;
      return K;
    };
  }();
  function C(s, l, a, m) {
    var c, p, y, d, v;
    if (a == null ? a = o : re(a, 0, 8), !s.c) return s.toString();
    if (c = s.c[0], y = s.e, l == null)
      v = Se(s.c), v = m == 1 || m == 2 && (y <= g || y >= f) ? Rt(v, y) : ze(v, y, "0");
    else if (s = q(new S(s), l, a), p = s.e, v = Se(s.c), d = v.length, m == 1 || m == 2 && (l <= p || p <= g)) {
      for (; d < l; v += "0", d++) ;
      v = Rt(v, p);
    } else if (l -= y, v = ze(v, p, "0"), p + 1 > d) {
      if (--l > 0) for (v += "."; l--; v += "0") ;
    } else if (l += p - d, l > 0)
      for (p + 1 == d && (v += "."); l--; v += "0") ;
    return s.s < 0 && c ? "-" + v : v;
  }
  function P(s, l) {
    for (var a, m, c = 1, p = new S(s[0]); c < s.length; c++)
      m = new S(s[c]), (!m.s || (a = nt(p, m)) === l || a === 0 && p.s === l) && (p = m);
    return p;
  }
  function z(s, l, a) {
    for (var m = 1, c = l.length; !l[--c]; l.pop()) ;
    for (c = l[0]; c >= 10; c /= 10, m++) ;
    return (a = m + a * U - 1) > _ ? s.c = s.e = null : a < w ? s.c = [s.e = 0] : (s.e = a, s.c = l), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, a = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, c = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(p, y, d, v) {
      var b, E = d ? y : y.replace(c, "");
      if (m.test(E))
        p.s = isNaN(E) ? null : E < 0 ? -1 : 1;
      else {
        if (!d && (E = E.replace(s, function(T, B, G) {
          return b = (G = G.toLowerCase()) == "x" ? 16 : G == "b" ? 2 : 8, !v || v == b ? B : T;
        }), v && (b = v, E = E.replace(l, "$1").replace(a, "0.$1")), y != E))
          return new S(E, b);
        if (S.DEBUG)
          throw Error(pe + "Not a" + (v ? " base " + v : "") + " number: " + y);
        p.s = null;
      }
      p.c = p.e = null;
    };
  }();
  function q(s, l, a, m) {
    var c, p, y, d, v, b, E, T = s.c, B = ti;
    if (T) {
      e: {
        for (c = 1, d = T[0]; d >= 10; d /= 10, c++) ;
        if (p = l - c, p < 0)
          p += U, y = l, v = T[b = 0], E = xe(v / B[c - y - 1] % 10);
        else if (b = ei((p + 1) / U), b >= T.length)
          if (m) {
            for (; T.length <= b; T.push(0)) ;
            v = E = 0, c = 1, p %= U, y = p - U + 1;
          } else
            break e;
        else {
          for (v = d = T[b], c = 1; d >= 10; d /= 10, c++) ;
          p %= U, y = p - U + c, E = y < 0 ? 0 : xe(v / B[c - y - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[b + 1] != null || (y < 0 ? v : v % B[c - y - 1]), m = a < 4 ? (E || m) && (a == 0 || a == (s.s < 0 ? 3 : 2)) : E > 5 || E == 5 && (a == 4 || m || a == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (p > 0 ? y > 0 ? v / B[c - y] : 0 : T[b - 1]) % 10 & 1 || a == (s.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, m ? (l -= s.e + 1, T[0] = B[(U - l % U) % U], s.e = -l || 0) : T[0] = s.e = 0, s;
        if (p == 0 ? (T.length = b, d = 1, b--) : (T.length = b + 1, d = B[U - p], T[b] = y > 0 ? xe(v / B[c - y] % B[y]) * d : 0), m)
          for (; ; )
            if (b == 0) {
              for (p = 1, y = T[0]; y >= 10; y /= 10, p++) ;
              for (y = T[0] += d, d = 1; y >= 10; y /= 10, d++) ;
              p != d && (s.e++, T[0] == Ce && (T[0] = 1));
              break;
            } else {
              if (T[b] += d, T[b] != Ce) break;
              T[b--] = 0, d = 1;
            }
        for (p = T.length; T[--p] === 0; T.pop()) ;
      }
      s.e > _ ? s.c = s.e = null : s.e < w && (s.c = [s.e = 0]);
    }
    return s;
  }
  function A(s) {
    var l, a = s.e;
    return a === null ? s.toString() : (l = Se(s.c), l = a <= g || a >= f ? Rt(l, a) : ze(l, a, "0"), s.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new S(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, l) {
    return nt(this, new S(s, l));
  }, r.decimalPlaces = r.dp = function(s, l) {
    var a, m, c, p = this;
    if (s != null)
      return re(s, 0, we), l == null ? l = o : re(l, 0, 8), q(new S(p), s + p.e + 1, l);
    if (!(a = p.c)) return null;
    if (m = ((c = a.length - 1) - Te(this.e / U)) * U, c = a[c]) for (; c % 10 == 0; c /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, l) {
    return e(this, new S(s, l), h, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, l) {
    return e(this, new S(s, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, l) {
    var a, m, c, p, y, d, v, b, E, T = this;
    if (s = new S(s), s.c && !s.isInteger())
      throw Error(pe + "Exponent not an integer: " + A(s));
    if (l != null && (l = new S(l)), d = s.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !s.c || !s.c[0])
      return E = new S(Math.pow(+A(T), d ? s.s * (2 - Ot(s)) : +A(s))), l ? E.mod(l) : E;
    if (v = s.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new S(NaN);
      m = !v && T.isInteger() && l.isInteger(), m && (T = T.mod(l));
    } else {
      if (s.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || d && T.c[1] >= 24e7 : T.c[0] < 8e13 || d && T.c[0] <= 9999975e7)))
        return p = T.s < 0 && Ot(s) ? -0 : 0, T.e > -1 && (p = 1 / p), new S(v ? 1 / p : p);
      O && (p = ei(O / U + 2));
    }
    for (d ? (a = new S(0.5), v && (s.s = 1), b = Ot(s)) : (c = Math.abs(+A(s)), b = c % 2), E = new S(u); ; ) {
      if (b) {
        if (E = E.times(T), !E.c) break;
        p ? E.c.length > p && (E.c.length = p) : m && (E = E.mod(l));
      }
      if (c) {
        if (c = xe(c / 2), c === 0) break;
        b = c % 2;
      } else if (s = s.times(a), q(s, s.e + 1, 1), s.e > 14)
        b = Ot(s);
      else {
        if (c = +A(s), c === 0) break;
        b = c % 2;
      }
      T = T.times(T), p ? T.c && T.c.length > p && (T.c.length = p) : m && (T = T.mod(l));
    }
    return m ? E : (v && (E = u.div(E)), l ? E.mod(l) : p ? q(E, O, o, y) : E);
  }, r.integerValue = function(s) {
    var l = new S(this);
    return s == null ? s = o : re(s, 0, 8), q(l, l.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, l) {
    return nt(this, new S(s, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, l) {
    return nt(this, new S(s, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, l) {
    return (l = nt(this, new S(s, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Te(this.e / U) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, l) {
    return nt(this, new S(s, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, l) {
    return (l = nt(this, new S(s, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, l) {
    var a, m, c, p, y = this, d = y.s;
    if (s = new S(s, l), l = s.s, !d || !l) return new S(NaN);
    if (d != l)
      return s.s = -l, y.plus(s);
    var v = y.e / U, b = s.e / U, E = y.c, T = s.c;
    if (!v || !b) {
      if (!E || !T) return E ? (s.s = -l, s) : new S(T ? y : NaN);
      if (!E[0] || !T[0])
        return T[0] ? (s.s = -l, s) : new S(E[0] ? y : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (v = Te(v), b = Te(b), E = E.slice(), d = v - b) {
      for ((p = d < 0) ? (d = -d, c = E) : (b = v, c = T), c.reverse(), l = d; l--; c.push(0)) ;
      c.reverse();
    } else
      for (m = (p = (d = E.length) < (l = T.length)) ? d : l, d = l = 0; l < m; l++)
        if (E[l] != T[l]) {
          p = E[l] < T[l];
          break;
        }
    if (p && (c = E, E = T, T = c, s.s = -s.s), l = (m = T.length) - (a = E.length), l > 0) for (; l--; E[a++] = 0) ;
    for (l = Ce - 1; m > d; ) {
      if (E[--m] < T[m]) {
        for (a = m; a && !E[--a]; E[a] = l) ;
        --E[a], E[m] += Ce;
      }
      E[m] -= T[m];
    }
    for (; E[0] == 0; E.splice(0, 1), --b) ;
    return E[0] ? z(s, E, b) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, l) {
    var a, m, c = this;
    return s = new S(s, l), !c.c || !s.s || s.c && !s.c[0] ? new S(NaN) : !s.c || c.c && !c.c[0] ? new S(c) : (R == 9 ? (m = s.s, s.s = 1, a = e(c, s, 0, 3), s.s = m, a.s *= m) : a = e(c, s, 0, R), s = c.minus(a.times(s)), !s.c[0] && R == 1 && (s.s = c.s), s);
  }, r.multipliedBy = r.times = function(s, l) {
    var a, m, c, p, y, d, v, b, E, T, B, G, Z, K, ie, j = this, V = j.c, ae = (s = new S(s, l)).c;
    if (!V || !ae || !V[0] || !ae[0])
      return !j.s || !s.s || V && !V[0] && !ae || ae && !ae[0] && !V ? s.c = s.e = s.s = null : (s.s *= j.s, !V || !ae ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Te(j.e / U) + Te(s.e / U), s.s *= j.s, v = V.length, T = ae.length, v < T && (Z = V, V = ae, ae = Z, c = v, v = T, T = c), c = v + T, Z = []; c--; Z.push(0)) ;
    for (K = Ce, ie = Ve, c = T; --c >= 0; ) {
      for (a = 0, B = ae[c] % ie, G = ae[c] / ie | 0, y = v, p = c + y; p > c; )
        b = V[--y] % ie, E = V[y] / ie | 0, d = G * b + E * B, b = B * b + d % ie * ie + Z[p] + a, a = (b / K | 0) + (d / ie | 0) + G * E, Z[p--] = b % K;
      Z[p] = a;
    }
    return a ? ++m : Z.splice(0, 1), z(s, Z, m);
  }, r.negated = function() {
    var s = new S(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, l) {
    var a, m = this, c = m.s;
    if (s = new S(s, l), l = s.s, !c || !l) return new S(NaN);
    if (c != l)
      return s.s = -l, m.minus(s);
    var p = m.e / U, y = s.e / U, d = m.c, v = s.c;
    if (!p || !y) {
      if (!d || !v) return new S(c / 0);
      if (!d[0] || !v[0]) return v[0] ? s : new S(d[0] ? m : c * 0);
    }
    if (p = Te(p), y = Te(y), d = d.slice(), c = p - y) {
      for (c > 0 ? (y = p, a = v) : (c = -c, a = d), a.reverse(); c--; a.push(0)) ;
      a.reverse();
    }
    for (c = d.length, l = v.length, c - l < 0 && (a = v, v = d, d = a, l = c), c = 0; l; )
      c = (d[--l] = d[l] + v[l] + c) / Ce | 0, d[l] = Ce === d[l] ? 0 : d[l] % Ce;
    return c && (d = [c].concat(d), ++y), z(s, d, y);
  }, r.precision = r.sd = function(s, l) {
    var a, m, c, p = this;
    if (s != null && s !== !!s)
      return re(s, 1, we), l == null ? l = o : re(l, 0, 8), q(new S(p), s, l);
    if (!(a = p.c)) return null;
    if (c = a.length - 1, m = c * U + 1, c = a[c]) {
      for (; c % 10 == 0; c /= 10, m--) ;
      for (c = a[0]; c >= 10; c /= 10, m++) ;
    }
    return s && p.e + 1 > m && (m = p.e + 1), m;
  }, r.shiftedBy = function(s) {
    return re(s, -9007199254740991, zi), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, l, a, m, c, p = this, y = p.c, d = p.s, v = p.e, b = h + 4, E = new S("0.5");
    if (d !== 1 || !y || !y[0])
      return new S(!d || d < 0 && (!y || y[0]) ? NaN : y ? p : 1 / 0);
    if (d = Math.sqrt(+A(p)), d == 0 || d == 1 / 0 ? (l = Se(y), (l.length + v) % 2 == 0 && (l += "0"), d = Math.sqrt(+l), v = Te((v + 1) / 2) - (v < 0 || v % 2), d == 1 / 0 ? l = "5e" + v : (l = d.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + v), a = new S(l)) : a = new S(d + ""), a.c[0]) {
      for (v = a.e, d = v + b, d < 3 && (d = 0); ; )
        if (c = a, a = E.times(c.plus(e(p, c, b, 1))), Se(c.c).slice(0, d) === (l = Se(a.c)).slice(0, d))
          if (a.e < v && --d, l = l.slice(d - 3, d + 1), l == "9999" || !m && l == "4999") {
            if (!m && (q(c, c.e + h + 2, 0), c.times(c).eq(p))) {
              a = c;
              break;
            }
            b += 4, d += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (q(a, a.e + h + 2, 1), s = !a.times(a).eq(p));
            break;
          }
    }
    return q(a, a.e + h + 1, o, s);
  }, r.toExponential = function(s, l) {
    return s != null && (re(s, 0, we), s++), C(this, s, l, 1);
  }, r.toFixed = function(s, l) {
    return s != null && (re(s, 0, we), s = s + this.e + 1), C(this, s, l);
  }, r.toFormat = function(s, l, a) {
    var m, c = this;
    if (a == null)
      s != null && l && typeof l == "object" ? (a = l, l = null) : s && typeof s == "object" ? (a = s, s = l = null) : a = W;
    else if (typeof a != "object")
      throw Error(pe + "Argument not an object: " + a);
    if (m = c.toFixed(s, l), c.c) {
      var p, y = m.split("."), d = +a.groupSize, v = +a.secondaryGroupSize, b = a.groupSeparator || "", E = y[0], T = y[1], B = c.s < 0, G = B ? E.slice(1) : E, Z = G.length;
      if (v && (p = d, d = v, v = p, Z -= p), d > 0 && Z > 0) {
        for (p = Z % d || d, E = G.substr(0, p); p < Z; p += d) E += b + G.substr(p, d);
        v > 0 && (E += b + G.slice(p)), B && (E = "-" + E);
      }
      m = T ? E + (a.decimalSeparator || "") + ((v = +a.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + v + "}\\B", "g"),
        "$&" + (a.fractionGroupSeparator || "")
      ) : T) : E;
    }
    return (a.prefix || "") + m + (a.suffix || "");
  }, r.toFraction = function(s) {
    var l, a, m, c, p, y, d, v, b, E, T, B, G = this, Z = G.c;
    if (s != null && (d = new S(s), !d.isInteger() && (d.c || d.s !== 1) || d.lt(u)))
      throw Error(pe + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + A(d));
    if (!Z) return new S(G);
    for (l = new S(u), b = a = new S(u), m = v = new S(u), B = Se(Z), p = l.e = B.length - G.e - 1, l.c[0] = ti[(y = p % U) < 0 ? U + y : y], s = !s || d.comparedTo(l) > 0 ? p > 0 ? l : b : d, y = _, _ = 1 / 0, d = new S(B), v.c[0] = 0; E = e(d, l, 0, 1), c = a.plus(E.times(m)), c.comparedTo(s) != 1; )
      a = m, m = c, b = v.plus(E.times(c = b)), v = c, l = d.minus(E.times(c = l)), d = c;
    return c = e(s.minus(a), m, 0, 1), v = v.plus(c.times(b)), a = a.plus(c.times(m)), v.s = b.s = G.s, p = p * 2, T = e(b, m, p, o).minus(G).abs().comparedTo(
      e(v, a, p, o).minus(G).abs()
    ) < 1 ? [b, m] : [v, a], _ = y, T;
  }, r.toNumber = function() {
    return +A(this);
  }, r.toPrecision = function(s, l) {
    return s != null && re(s, 1, we), C(this, s, l, 2);
  }, r.toString = function(s) {
    var l, a = this, m = a.s, c = a.e;
    return c === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (s == null ? l = c <= g || c >= f ? Rt(Se(a.c), c) : ze(Se(a.c), c, "0") : s === 10 && k ? (a = q(new S(a), h + c + 1, o), l = ze(Se(a.c), a.e, "0")) : (re(s, 2, M.length, "Base"), l = t(ze(Se(a.c), c, "0"), 10, s, m, !0)), m < 0 && a.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return A(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && S.set(i), S;
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
  var t, n, r = i.c, u = e.c, h = i.s, o = e.s, g = i.e, f = e.e;
  if (!h || !o) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -o : h;
  if (h != o) return h;
  if (t = h < 0, n = g == f, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return g > f ^ t ? 1 : -1;
  for (o = (g = r.length) < (f = u.length) ? g : f, h = 0; h < o; h++) if (r[h] != u[h]) return r[h] > u[h] ^ t ? 1 : -1;
  return g == f ? 0 : g > f ^ t ? 1 : -1;
}
function re(i, e, t, n) {
  if (i < e || i > t || i !== xe(i))
    throw Error(pe + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Ot(i) {
  var e = i.c.length - 1;
  return Te(i.e / U) == e && i.c[e] % 2 != 0;
}
function Rt(i, e) {
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
    I(this, "key");
    I(this, "left", null);
    I(this, "right", null);
    this.key = i;
  }
}, yt = class extends Jr {
  constructor(i) {
    super(i);
  }
}, $r = class {
  constructor() {
    I(this, "size", 0);
    I(this, "modificationCount", 0);
    I(this, "splayCount", 0);
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
        let f = h.left;
        if (f == null || (g = o(f.key, i), g > 0 && (h.left = f.right, f.right = h, h = f, f = h.left, f == null)))
          break;
        t == null ? n = h : t.left = h, t = h, h = f;
      } else if (g < 0) {
        let f = h.right;
        if (f == null || (g = o(f.key, i), g < 0 && (h.right = f.left, f.left = h, h = f, f = h.right, f == null)))
          break;
        r == null ? u = h : r.right = h, r = h, h = f;
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
}, Xi, Ji, Ut = class bt extends $r {
  constructor(t, n) {
    super();
    I(this, "root", null);
    I(this, "compare");
    I(this, "validKey");
    I(this, Xi, "[object Set]");
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
    return n != 0 && this.addNewRoot(new yt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new yt(t), n), this.root.key;
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
    const n = new bt(this.compare, this.validKey), r = this.modificationCount;
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
    function n(u, h) {
      let o, g;
      do {
        if (o = u.left, g = u.right, o != null) {
          const f = new yt(o.key);
          h.left = f, n(o, f);
        }
        if (g != null) {
          const f = new yt(g.key);
          h.right = f, u = g, h = f;
        }
      } while (g != null);
    }
    const r = new yt(t.key);
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
    const u = t.x, h = t.y, o = r.x, g = r.y, f = h.minus(g).times(n.x.minus(o)).minus(u.minus(o).times(n.y.minus(g)));
    return e(f, u, h, o, g) ? 0 : f.comparedTo(0);
  };
}
var ns = (i) => i, rs = (i) => {
  if (i) {
    const e = new Ut(oi(i)), t = new Ut(oi(i)), n = (u, h) => h.addAndReturn(u), r = (u) => ({
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
}), Fe = li(), vt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), ui = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Wt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), dn = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), qt = (i) => dn(i, i).sqrt(), ss = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Wt(r, n).div(qt(r)).div(qt(n));
}, os = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return dn(r, n).div(qt(r)).div(qt(n));
}, Ui = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, qi = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, ls = (i, e, t, n) => {
  if (e.x.isZero()) return qi(t, n, i.x);
  if (n.x.isZero()) return qi(i, e, t.x);
  if (e.y.isZero()) return Ui(t, n, i.y);
  if (n.y.isZero()) return Ui(i, e, t.y);
  const r = Wt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, h = Wt(u, e).div(r), o = Wt(u, n).div(r), g = i.x.plus(o.times(e.x)), f = t.x.plus(h.times(n.x)), w = i.y.plus(o.times(e.y)), _ = t.y.plus(h.times(n.y)), N = g.plus(f).div(2), R = w.plus(_).div(2);
  return { x: N, y: R };
}, Ae = class gn {
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
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : jt.compare(e.segment, t.segment));
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
      const { sine: h, cosine: o } = t.get(r), { sine: g, cosine: f } = t.get(u);
      return h.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? o.isLessThan(f) ? 1 : o.isGreaterThan(f) ? -1 : 0 : h.isLessThan(0) && g.isLessThan(0) ? o.isLessThan(f) ? -1 : o.isGreaterThan(f) ? 1 : 0 : g.isLessThan(h) ? -1 : g.isGreaterThan(h) ? 1 : 0;
    };
  }
}, us = class ai {
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
      let h = null, o = u.leftSE, g = u.rightSE;
      const f = [o], w = o.point, _ = [];
      for (; h = o, o = g, f.push(o), o.point !== w; )
        for (; ; ) {
          const N = o.getAvailableLinkedEvents();
          if (N.length === 0) {
            const W = f[0].point, M = f[f.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${W.x}, ${W.y}]. Last matching segment found ends at [${M.x}, ${M.y}].`
            );
          }
          if (N.length === 1) {
            g = N[0].otherSE;
            break;
          }
          let R = null;
          for (let W = 0, M = _.length; W < M; W++)
            if (_[W].point === o.point) {
              R = W;
              break;
            }
          if (R !== null) {
            const W = _.splice(R)[0], M = f.splice(W.index);
            M.unshift(M[0].otherSE), t.push(new ai(M.reverse()));
            continue;
          }
          _.push({
            index: f.length,
            point: o.point
          });
          const O = o.getLeftmostComparator(h);
          g = N.sort(O)[0].otherSE;
          break;
        }
      t.push(new ai(f));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let f = 1, w = this.events.length - 1; f < w; f++) {
      const _ = this.events[f].point, N = this.events[f + 1].point;
      Fe.orient(_, e, N) !== 0 && (t.push(_), e = _);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    Fe.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, h = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, g = [];
    for (let f = h; f != o; f += u)
      g.push([t[f].x.toNumber(), t[f].y.toNumber()]);
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
}, as = class {
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
        if (u.isExteriorRing()) e.push(new Fi(u));
        else {
          const h = u.enclosingRing();
          h != null && h.poly || e.push(new Fi(h)), (t = h == null ? void 0 : h.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, fs = class {
  constructor(i, e = jt.compare) {
    I(this, "queue");
    I(this, "tree");
    I(this, "segments");
    this.queue = i, this.tree = new Ut(e), this.segments = [];
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
          for (let f = 0, w = g.length; f < w; f++)
            t.push(g[f]);
        }
      }
      let h = null;
      if (r) {
        const o = r.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (h = o), !r.isAnEndpoint(o))) {
          const g = this._splitSafely(r, o);
          for (let f = 0, w = g.length; f < w; f++)
            t.push(g[f]);
        }
      }
      if (u !== null || h !== null) {
        let o = null;
        u === null ? o = h : h === null ? o = u : o = Ae.comparePoints(
          u,
          h
        ) <= 0 ? u : h, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const g = e.split(o);
        for (let f = 0, w = g.length; f < w; f++)
          t.push(g[f]);
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
    I(this, "type");
    I(this, "numMultiPolys");
  }
  run(i, e, t) {
    wt.type = i;
    const n = [new Zi(e, !0)];
    for (let f = 0, w = t.length; f < w; f++)
      n.push(new Zi(t[f], !1));
    if (wt.numMultiPolys = n.length, wt.type === "difference") {
      const f = n[0];
      let w = 1;
      for (; w < n.length; )
        ui(n[w].bbox, f.bbox) !== null ? w++ : n.splice(w, 1);
    }
    if (wt.type === "intersection")
      for (let f = 0, w = n.length; f < w; f++) {
        const _ = n[f];
        for (let N = f + 1, R = n.length; N < R; N++)
          if (ui(_.bbox, n[N].bbox) === null) return [];
      }
    const r = new Ut(Ae.compare);
    for (let f = 0, w = n.length; f < w; f++) {
      const _ = n[f].getSweepEvents();
      for (let N = 0, R = _.length; N < R; N++)
        r.add(_[N]);
    }
    const u = new fs(r);
    let h = null;
    for (r.size != 0 && (h = r.first(), r.delete(h)); h; ) {
      const f = u.process(h);
      for (let w = 0, _ = f.length; w < _; w++) {
        const N = f[w];
        N.consumedBy === void 0 && r.add(N);
      }
      r.size != 0 ? (h = r.first(), r.delete(h)) : h = null;
    }
    Fe.reset();
    const o = us.factory(u.segments);
    return new as(o).getGeom();
  }
}, wt = new cs(), Ft = wt, hs = 0, jt = class Gt {
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
    const o = e.leftSE.point.y, g = t.leftSE.point.y, f = e.rightSE.point.y, w = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (g.isLessThan(o) && g.isLessThan(f)) return 1;
      if (g.isGreaterThan(o) && g.isGreaterThan(f)) return -1;
      const _ = e.comparePoint(t.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const N = t.comparePoint(e.rightSE.point);
      return N !== 0 ? N : -1;
    }
    if (n.isGreaterThan(r)) {
      if (o.isLessThan(g) && o.isLessThan(w)) return -1;
      if (o.isGreaterThan(g) && o.isGreaterThan(w)) return 1;
      const _ = t.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const N = e.comparePoint(t.rightSE.point);
      return N < 0 ? 1 : N > 0 ? -1 : 1;
    }
    if (o.isLessThan(g)) return -1;
    if (o.isGreaterThan(g)) return 1;
    if (u.isLessThan(h)) {
      const _ = t.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (u.isGreaterThan(h)) {
      const _ = e.comparePoint(t.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!u.eq(h)) {
      const _ = f.minus(o), N = u.minus(n), R = w.minus(g), O = h.minus(r);
      if (_.isGreaterThan(N) && R.isLessThan(O)) return 1;
      if (_.isLessThan(N) && R.isGreaterThan(O)) return -1;
    }
    return u.isGreaterThan(h) ? 1 : u.isLessThan(h) || f.isLessThan(w) ? -1 : f.isGreaterThan(w) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
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
    const g = new Ae(r, !0), f = new Ae(u, !1);
    return new Gt(g, f, [n], [h]);
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
    const u = this.leftSE.point, h = this.rightSE.point, o = e.leftSE.point, g = e.rightSE.point, f = vt(t, o) && this.comparePoint(o) === 0, w = vt(n, u) && e.comparePoint(u) === 0, _ = vt(t, g) && this.comparePoint(g) === 0, N = vt(n, h) && e.comparePoint(h) === 0;
    if (w && f)
      return N && !_ ? h : !N && _ ? g : null;
    if (w)
      return _ && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (f)
      return N && h.x.eq(o.x) && h.y.eq(o.y) ? null : o;
    if (N && _) return null;
    if (N) return h;
    if (_) return g;
    const R = ls(u, this.vector(), o, e.vector());
    return R === null || !vt(r, R) ? null : Fe.snap(R);
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
    const o = new Gt(
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
    const r = Gt.compare(t, n);
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
        const o = n.rings[u], g = n.windings[u], f = t.rings.indexOf(o);
        f === -1 ? (t.rings.push(o), t.windings.push(g)) : t.windings[f] += g;
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
      const f = this.rings[o], w = this.windings[o], _ = t.indexOf(f);
      _ === -1 ? (t.push(f), n.push(w)) : n[_] += w;
    }
    const u = [], h = [];
    for (let o = 0, g = t.length; o < g; o++) {
      if (n[o] === 0) continue;
      const f = t[o], w = f.poly;
      if (h.indexOf(w) === -1)
        if (f.isExterior) u.push(w);
        else {
          h.indexOf(w) === -1 && h.push(w);
          const _ = u.indexOf(f.poly);
          _ !== -1 && u.splice(_, 1);
        }
    }
    for (let o = 0, g = u.length; o < g; o++) {
      const f = u[o].multiPoly;
      r.indexOf(f) === -1 && r.push(f);
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
}, ji = class {
  constructor(i, e, t) {
    I(this, "poly");
    I(this, "isExterior");
    I(this, "segments");
    I(this, "bbox");
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
      o.x.eq(r.x) && o.y.eq(r.y) || (this.segments.push(jt.fromRing(r, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), r = o);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(jt.fromRing(r, n, this));
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
    I(this, "multiPoly");
    I(this, "exteriorRing");
    I(this, "interiorRings");
    I(this, "bbox");
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
}, gs = (i, ...e) => Ft.run("union", i, e), ms = (i, ...e) => Ft.run("difference", i, e);
Fe.set;
function mn(i, e, t) {
  if (i !== null)
    for (var n, r, u, h, o, g, f, w = 0, _ = 0, N, R = i.type, O = R === "FeatureCollection", W = R === "Feature", M = O ? i.features.length : 1, k = 0; k < M; k++) {
      f = O ? i.features[k].geometry : W ? i.geometry : i, N = f ? f.type === "GeometryCollection" : !1, o = N ? f.geometries.length : 1;
      for (var S = 0; S < o; S++) {
        var C = 0, P = 0;
        if (h = N ? f.geometries[S] : f, h !== null) {
          g = h.coordinates;
          var z = h.type;
          switch (w = 0, z) {
            case null:
              break;
            case "Point":
              if (e(
                g,
                _,
                k,
                C,
                P
              ) === !1)
                return !1;
              _++, C++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < g.length; n++) {
                if (e(
                  g[n],
                  _,
                  k,
                  C,
                  P
                ) === !1)
                  return !1;
                _++, z === "MultiPoint" && C++;
              }
              z === "LineString" && C++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < g.length; n++) {
                for (r = 0; r < g[n].length - w; r++) {
                  if (e(
                    g[n][r],
                    _,
                    k,
                    C,
                    P
                  ) === !1)
                    return !1;
                  _++;
                }
                z === "MultiLineString" && C++, z === "Polygon" && P++;
              }
              z === "Polygon" && C++;
              break;
            case "MultiPolygon":
              for (n = 0; n < g.length; n++) {
                for (P = 0, r = 0; r < g[n].length; r++) {
                  for (u = 0; u < g[n][r].length - w; u++) {
                    if (e(
                      g[n][r][u],
                      _,
                      k,
                      C,
                      P
                    ) === !1)
                      return !1;
                    _++;
                  }
                  P++;
                }
                C++;
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
  var t, n, r, u, h, o, g, f, w, _, N = 0, R = i.type === "FeatureCollection", O = i.type === "Feature", W = R ? i.features.length : 1;
  for (t = 0; t < W; t++) {
    for (o = R ? i.features[t].geometry : O ? i.geometry : i, f = R ? i.features[t].properties : O ? i.properties : {}, w = R ? i.features[t].bbox : O ? i.bbox : void 0, _ = R ? i.features[t].id : O ? i.id : void 0, g = o ? o.type === "GeometryCollection" : !1, h = g ? o.geometries.length : 1, r = 0; r < h; r++) {
      if (u = g ? o.geometries[r] : o, u === null) {
        if (e(
          null,
          N,
          f,
          w,
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
            N,
            f,
            w,
            _
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < u.geometries.length; n++)
            if (e(
              u.geometries[n],
              N,
              f,
              w,
              _
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    N++;
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
          St(t, r, { bbox: u, id: h }),
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
    for (var f = 0; f < t.coordinates.length; f++) {
      var w = t.coordinates[f], _ = {
        type: g,
        coordinates: w
      };
      if (e(St(_, r), n, f) === !1)
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
  }), xt(e);
}
var Ls = Es;
function Vi(i, e) {
  const t = ws(
    xt([
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
  const n = zt(Hi(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, h = n[2] > 180, o = Ls(i);
  if (o.features.length > 1 && (u || h))
    for (const g of o.features) {
      const f = zt(Hi(g));
      if (h && f[0] < -180 + r)
        for (const w of g.geometry.coordinates)
          for (const _ of w)
            _[0] += 360 - r;
      if (u && f[2] > 180 - r)
        for (const w of g.geometry.coordinates)
          for (const _ of w)
            _[0] -= 360 - r;
    }
  e(
    xt([
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
}, Pt = "mtlr-gc-full-geom", Yi = "mtlr-gc-full-geom-fill", Qi = "mtlr-gc-full-geom-line";
function _s(i, e, t = !0, n = !0, r = {}, u = {}, h = Ki) {
  let o;
  const g = [];
  let f, w, _;
  function N() {
    if (!i.loaded) {
      i.once("load", N);
      return;
    }
    const M = h ? h === !0 ? Ki : h : void 0;
    if (!(M != null && M.fill) && !(M != null && M.line))
      return;
    const k = i.getSource(Pt);
    if (k)
      k.setData(_ ?? xt([]));
    else if (_)
      i.addSource(Pt, {
        type: "geojson",
        data: _
      });
    else
      return;
    !i.getLayer(Yi) && (M != null && M.fill) && i.addLayer({
      ...M == null ? void 0 : M.fill,
      id: Yi,
      type: "fill",
      source: Pt
    }), !i.getLayer(Qi) && (M != null && M.line) && i.addLayer({
      ...M == null ? void 0 : M.line,
      id: Qi,
      type: "line",
      source: Pt
    });
  }
  function R(M) {
    _ = M, N();
  }
  i.on("styledata", () => {
    setTimeout(() => {
      _ && N();
    });
  });
  const O = (M) => {
    o == null || o({
      type: "mapClick",
      coordinates: [M.lngLat.lng, M.lngLat.lat]
    });
  };
  function W(M = !1) {
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
    fitBounds(M, k, S) {
      i.fitBounds(
        [
          [M[0], M[1]],
          [M[2], M[3]]
        ],
        { padding: k, ...S ? { maxZoom: S } : {}, ...u }
      );
    },
    indicateReverse(M) {
      i.getCanvasContainer().style.cursor = M ? "crosshair" : "";
    },
    setReverseMarker(M) {
      !e || !t || (w ? M ? w.setLngLat(M) : (w.remove(), w = void 0) : M && (t instanceof Function ? w = t(i) ?? void 0 : (w = (typeof t == "object" ? new e.Marker(t) : W()).setLngLat(M).addTo(i), w.getElement().classList.add("marker-reverse"))));
    },
    setFeatures(M, k, S) {
      for (const C of g)
        C.remove();
      if (g.length = 0, R(void 0), !!e) {
        e: if (k) {
          let C = !1;
          if (k.geometry.type === "GeometryCollection") {
            const P = k.geometry.geometries.filter(
              (z) => z.type === "Polygon" || z.type === "MultiPolygon"
            );
            t: if (P.length > 0) {
              const z = pn(
                xt(P.map((q) => St(q)))
              );
              if (!z)
                break t;
              Vi(
                {
                  ...k,
                  geometry: z.geometry
                },
                R
              ), C = !0;
            } else {
              const z = k.geometry.geometries.filter(
                (q) => q.type === "LineString" || q.type === "MultiLineString"
              );
              z.length > 0 && (R({
                ...k,
                geometry: { type: "GeometryCollection", geometries: z }
              }), C = !0);
            }
          }
          if (!C) {
            if (k.geometry.type === "Polygon" || k.geometry.type === "MultiPolygon")
              Vi(k, R);
            else if (k.geometry.type === "LineString" || k.geometry.type === "MultiLineString") {
              R(k);
              break e;
            }
          }
          if (!S && !k.geometry.type.endsWith("Point"))
            break e;
          if (t instanceof Function) {
            const P = t(i, k);
            P && g.push(P);
          } else t && g.push(
            typeof t == "object" ? new e.Marker(t) : W().setLngLat(k.center).addTo(i)
          );
        }
        if (n)
          for (const C of M ?? []) {
            if (C === k)
              continue;
            let P;
            if (n instanceof Function) {
              if (P = n(i, C), !P)
                continue;
            } else
              P = (typeof n == "object" ? new e.Marker(n) : W(!0)).setLngLat(C.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  C.place_type[0] === "reverse" ? C.place_name : C.place_name.replace(/,.*/, "")
                )
              ).addTo(i);
            const z = P.getElement();
            z.addEventListener("click", (q) => {
              q.stopPropagation(), o == null || o({ type: "markerClick", id: C.id });
            }), z.addEventListener("mouseenter", () => {
              o == null || o({ type: "markerMouseEnter", id: C.id }), P.togglePopup();
            }), z.addEventListener("mouseleave", () => {
              o == null || o({ type: "markerMouseLeave", id: C.id }), P.togglePopup();
            }), g.push(P);
          }
      }
    },
    setSelectedMarker(M) {
      f && f.getElement().classList.toggle("marker-selected", !1), f = M > -1 ? g[M] : void 0, f == null || f.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const M = i.getCenter();
      return [i.getZoom(), M.lng, M.lat];
    }
  };
}
function Ss(i, e, t) {
  var O, W, M;
  class n {
    constructor(S, C) {
      I(this, "type");
      I(this, "target");
      this.type = C, this.target = S;
    }
  }
  class r extends n {
    constructor(C, P) {
      super(C, "select");
      I(this, "feature");
      Object.assign(this, P);
    }
  }
  class u extends n {
    constructor(C, P) {
      super(C, "featureslisted");
      I(this, "features");
      this.features = P;
    }
  }
  class h extends n {
    constructor(C, P) {
      super(C, "featuresmarked");
      I(this, "features");
      this.features = P;
    }
  }
  class o extends n {
    constructor(C, P) {
      super(C, "optionsvisibilitychange");
      I(this, "optionsVisible");
      this.optionsVisible = P;
    }
  }
  class g extends n {
    constructor(C, P) {
      super(C, "pick");
      I(this, "feature");
      this.feature = P;
    }
  }
  class f extends n {
    constructor(C, P) {
      super(C, "querychange");
      I(this, "query");
      this.query = P;
    }
  }
  class w extends n {
    constructor(C, P, z) {
      super(C, "response");
      I(this, "url");
      I(this, "featureCollection");
      this.url = P, this.featureCollection = z;
    }
  }
  class _ extends n {
    constructor(C, P) {
      super(C, "reversetoggle");
      I(this, "reverse");
      this.reverse = P;
    }
  }
  class N extends i {
    constructor(C = {}) {
      super();
      Ct(this, O);
      Ct(this, W);
      Ct(this, M);
      gt(this, W, C);
    }
    onAddInt(C) {
      const P = document.createElement("div");
      P.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
      const {
        marker: z,
        showResultMarkers: q,
        flyTo: A,
        fullGeometryStyle: s,
        ...l
      } = se(this, W), a = typeof A == "boolean" ? {} : A, c = {
        mapController: _s(
          C,
          e,
          z,
          q,
          a,
          a,
          s
        ),
        flyTo: A === void 0 ? !0 : !!A,
        apiKey: "",
        // just to satisfy apiKey; TODO find a better solution
        ...t == null ? void 0 : t(C, P),
        ...l
      };
      if (!c.apiKey)
        throw new Error("no apiKey provided");
      return gt(this, O, new Qr({ target: P, props: c })), se(this, O).$on("select", (p) => {
        this.fire(new r(this, p.detail));
      }), se(this, O).$on("pick", (p) => {
        this.fire(new g(this, p.detail.feature));
      }), se(this, O).$on("featureslisted", (p) => {
        this.fire(new u(this, p.detail.features));
      }), se(this, O).$on("featuresmarked", (p) => {
        this.fire(new h(this, p.detail.features));
      }), se(this, O).$on("response", (p) => {
        this.fire(
          new w(
            this,
            p.detail.url,
            p.detail.featureCollection
          )
        );
      }), se(this, O).$on("optionsvisibilitychange", (p) => {
        this.fire(
          new o(this, p.detail.optionsVisible)
        );
      }), se(this, O).$on("reversetoggle", (p) => {
        this.fire(new _(this, p.detail.reverse));
      }), se(this, O).$on("querychange", (p) => {
        this.fire(new f(this, p.detail.query));
      }), gt(this, M, P), P;
    }
    // TODO add backward type compatibility; in MapLibre v4 it returns `this`.
    on(C, P) {
      return super.on(C, P);
    }
    once(C, P) {
      return super.once(C, P);
    }
    off(C, P) {
      return super.off(C, P);
    }
    listens(C) {
      return super.listens(C);
    }
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(C) {
      var l;
      Object.assign(se(this, W), C);
      const {
        marker: P,
        showResultMarkers: z,
        flyTo: q,
        fullGeometryStyle: A,
        ...s
      } = se(this, W);
      (l = se(this, O)) == null || l.$set(s);
    }
    /**
     * Set the content of search input box.
     *
     * @param value text to set
     * @param submit perform the search
     */
    setQuery(C, P = !0) {
      var z;
      (z = se(this, O)) == null || z.setQuery(C, P);
    }
    /**
     * Clear geocoding search results from the map.
     */
    clearMap() {
      var C;
      (C = se(this, O)) == null || C.clearMap();
    }
    /**
     * Clear search result list.
     */
    clearList() {
      var C;
      (C = se(this, O)) == null || C.clearList();
    }
    /**
     * Set reverse geocoding mode.
     *
     * @param reverseActive reverse geocoding active
     */
    setReverseMode(C) {
      var P;
      (P = se(this, O)) == null || P.$set({ reverseActive: C });
    }
    /**
     * Focus the search input box.
     *
     * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
     */
    focus(C) {
      var P;
      (P = se(this, O)) == null || P.focus(C);
    }
    /**
     * Blur the search input box.
     */
    blur() {
      var C;
      (C = se(this, O)) == null || C.blur();
    }
    onRemove() {
      var C, P, z;
      (C = se(this, O)) == null || C.$destroy(), gt(this, O, void 0), (z = (P = se(this, M)) == null ? void 0 : P.parentNode) == null || z.removeChild(se(this, M));
    }
  }
  return O = new WeakMap(), W = new WeakMap(), M = new WeakMap(), {
    MapLibreBasedGeocodingControl: N,
    events: {
      SelectEvent: r,
      FeaturesListedEvent: u,
      FeaturesMarkedEvent: h,
      OptionsVisibilityChangeEvent: o,
      PickEvent: g,
      QueryChangeEvent: f,
      ResponseEvent: w,
      ReverseToggleEvent: _
    }
  };
}
const { MapLibreBasedGeocodingControl: xs, events: $e } = Ss(
  Li.Evented,
  Li
);
class Cs extends xs {
  onAdd(e) {
    return super.onAddInt(e);
  }
}
const Ns = $e.SelectEvent, ks = $e.FeaturesListedEvent, Os = $e.FeaturesMarkedEvent, Rs = $e.OptionsVisibilityChangeEvent, Ps = $e.PickEvent, Is = $e.QueryChangeEvent, As = $e.ResponseEvent, Bs = $e.ReverseToggleEvent;
export {
  ks as FeaturesListedEvent,
  Os as FeaturesMarkedEvent,
  Cs as GeocodingControl,
  Rs as OptionsVisibilityChangeEvent,
  Ps as PickEvent,
  Is as QueryChangeEvent,
  As as ResponseEvent,
  Bs as ReverseToggleEvent,
  Ns as SelectEvent,
  _s as createMapLibreGlMapController
};
//# sourceMappingURL=maplibregl.js.map
