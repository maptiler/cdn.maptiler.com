var Ru = Object.defineProperty;
var rs = (o) => {
  throw TypeError(o);
};
var Ou = (o, a, s) => a in o ? Ru(o, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[a] = s;
var $i = (o, a, s) => Ou(o, typeof a != "symbol" ? a + "" : a, s), ss = (o, a, s) => a.has(o) || rs("Cannot " + s);
var mt = (o, a, s) => (ss(o, a, "read from private field"), s ? s.call(o) : a.get(o)), er = (o, a, s) => a.has(o) ? rs("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(o) : a.set(o, s), fi = (o, a, s, l) => (ss(o, a, "write to private field"), l ? l.call(o, s) : a.set(o, s), s);
import * as Mu from "maplibre-gl";
function Le() {
}
function Pu(o, a) {
  for (const s in a) o[s] = a[s];
  return (
    /** @type {T & S} */
    o
  );
}
function sa(o) {
  return o();
}
function as() {
  return /* @__PURE__ */ Object.create(null);
}
function Ft(o) {
  o.forEach(sa);
}
function aa(o) {
  return typeof o == "function";
}
function Ht(o, a) {
  return o != o ? a == a : o !== a || o && typeof o == "object" || typeof o == "function";
}
let gi;
function Xe(o, a) {
  return o === a ? !0 : (gi || (gi = document.createElement("a")), gi.href = a, o === gi.href);
}
function Au(o) {
  return Object.keys(o).length === 0;
}
function Du(o, a, s, l) {
  if (o) {
    const h = ua(o, a, s, l);
    return o[0](h);
  }
}
function ua(o, a, s, l) {
  return o[1] && l ? Pu(s.ctx.slice(), o[1](l(a))) : s.ctx;
}
function Fu(o, a, s, l) {
  if (o[2] && l) {
    const h = o[2](l(s));
    if (a.dirty === void 0)
      return h;
    if (typeof h == "object") {
      const g = [], v = Math.max(a.dirty.length, h.length);
      for (let m = 0; m < v; m += 1)
        g[m] = a.dirty[m] | h[m];
      return g;
    }
    return a.dirty | h;
  }
  return a.dirty;
}
function Gu(o, a, s, l, h, g) {
  if (h) {
    const v = ua(a, s, l, g);
    o.p(v, h);
  }
}
function qu(o) {
  if (o.ctx.length > 32) {
    const a = [], s = o.ctx.length / 32;
    for (let l = 0; l < s; l++)
      a[l] = -1;
    return a;
  }
  return -1;
}
function us(o) {
  return o ?? "";
}
function de(o, a) {
  o.appendChild(a);
}
function Ce(o, a, s) {
  o.insertBefore(a, s || null);
}
function be(o) {
  o.parentNode && o.parentNode.removeChild(o);
}
function _e(o) {
  return document.createElement(o);
}
function Nt(o) {
  return document.createElementNS("http://www.w3.org/2000/svg", o);
}
function Xt(o) {
  return document.createTextNode(o);
}
function ut() {
  return Xt(" ");
}
function zu() {
  return Xt("");
}
function je(o, a, s, l) {
  return o.addEventListener(a, s, l), () => o.removeEventListener(a, s, l);
}
function Bu(o) {
  return function(a) {
    return a.preventDefault(), o.call(this, a);
  };
}
function B(o, a, s) {
  s == null ? o.removeAttribute(a) : o.getAttribute(a) !== s && o.setAttribute(a, s);
}
function Yu(o) {
  return Array.from(o.childNodes);
}
function Qn(o, a) {
  a = "" + a, o.data !== a && (o.data = /** @type {string} */
  a);
}
function os(o, a) {
  o.value = a ?? "";
}
function pt(o, a, s) {
  o.classList.toggle(a, !!s);
}
function Uu(o, a, { bubbles: s = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(o, { detail: a, bubbles: s, cancelable: l });
}
let Kn;
function jn(o) {
  Kn = o;
}
function oa() {
  if (!Kn) throw new Error("Function called outside component initialization");
  return Kn;
}
function Xu(o) {
  oa().$$.on_destroy.push(o);
}
function Wu() {
  const o = oa();
  return (a, s, { cancelable: l = !1 } = {}) => {
    const h = o.$$.callbacks[a];
    if (h) {
      const g = Uu(
        /** @type {string} */
        a,
        s,
        { cancelable: l }
      );
      return h.slice().forEach((v) => {
        v.call(o, g);
      }), !g.defaultPrevented;
    }
    return !0;
  };
}
function ls(o, a) {
  const s = o.$$.callbacks[a.type];
  s && s.slice().forEach((l) => l.call(this, a));
}
const Sn = [], ar = [];
let Ln = [];
const hs = [], Vu = /* @__PURE__ */ Promise.resolve();
let ur = !1;
function Hu() {
  ur || (ur = !0, Vu.then(la));
}
function or(o) {
  Ln.push(o);
}
const tr = /* @__PURE__ */ new Set();
let In = 0;
function la() {
  if (In !== 0)
    return;
  const o = Kn;
  do {
    try {
      for (; In < Sn.length; ) {
        const a = Sn[In];
        In++, jn(a), Zu(a.$$);
      }
    } catch (a) {
      throw Sn.length = 0, In = 0, a;
    }
    for (jn(null), Sn.length = 0, In = 0; ar.length; ) ar.pop()();
    for (let a = 0; a < Ln.length; a += 1) {
      const s = Ln[a];
      tr.has(s) || (tr.add(s), s());
    }
    Ln.length = 0;
  } while (Sn.length);
  for (; hs.length; )
    hs.pop()();
  ur = !1, tr.clear(), jn(o);
}
function Zu(o) {
  if (o.fragment !== null) {
    o.update(), Ft(o.before_update);
    const a = o.dirty;
    o.dirty = [-1], o.fragment && o.fragment.p(o.ctx, a), o.after_update.forEach(or);
  }
}
function ju(o) {
  const a = [], s = [];
  Ln.forEach((l) => o.indexOf(l) === -1 ? a.push(l) : s.push(l)), s.forEach((l) => l()), Ln = a;
}
const _i = /* @__PURE__ */ new Set();
let un;
function ki() {
  un = {
    r: 0,
    c: [],
    p: un
    // parent group
  };
}
function Ei() {
  un.r || Ft(un.c), un = un.p;
}
function De(o, a) {
  o && o.i && (_i.delete(o), o.i(a));
}
function ze(o, a, s, l) {
  if (o && o.o) {
    if (_i.has(o)) return;
    _i.add(o), un.c.push(() => {
      _i.delete(o), l && (s && o.d(1), l());
    }), o.o(a);
  } else l && l();
}
function cs(o) {
  return (o == null ? void 0 : o.length) !== void 0 ? o : Array.from(o);
}
function Qu(o, a) {
  ze(o, 1, 1, () => {
    a.delete(o.key);
  });
}
function Ku(o, a, s, l, h, g, v, m, x, _, k, y) {
  let E = o.length, N = g.length, w = E;
  const A = {};
  for (; w--; ) A[o[w].key] = w;
  const b = [], C = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), M = [];
  for (w = N; w--; ) {
    const z = y(h, g, w), X = s(z);
    let q = v.get(X);
    q ? M.push(() => q.p(z, a)) : (q = _(X, z), q.c()), C.set(X, b[w] = q), X in A && O.set(X, Math.abs(w - A[X]));
  }
  const F = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
  function Y(z) {
    De(z, 1), z.m(m, k), v.set(z.key, z), k = z.first, N--;
  }
  for (; E && N; ) {
    const z = b[N - 1], X = o[E - 1], q = z.key, Z = X.key;
    z === X ? (k = z.first, E--, N--) : C.has(Z) ? !v.has(q) || F.has(q) ? Y(z) : R.has(Z) ? E-- : O.get(q) > O.get(Z) ? (R.add(q), Y(z)) : (F.add(Z), E--) : (x(X, v), E--);
  }
  for (; E--; ) {
    const z = o[E];
    C.has(z.key) || x(z, v);
  }
  for (; N; ) Y(b[N - 1]);
  return Ft(M), b;
}
function Wt(o) {
  o && o.c();
}
function At(o, a, s) {
  const { fragment: l, after_update: h } = o.$$;
  l && l.m(a, s), or(() => {
    const g = o.$$.on_mount.map(sa).filter(aa);
    o.$$.on_destroy ? o.$$.on_destroy.push(...g) : Ft(g), o.$$.on_mount = [];
  }), h.forEach(or);
}
function Dt(o, a) {
  const s = o.$$;
  s.fragment !== null && (ju(s.after_update), Ft(s.on_destroy), s.fragment && s.fragment.d(a), s.on_destroy = s.fragment = null, s.ctx = []);
}
function Ju(o, a) {
  o.$$.dirty[0] === -1 && (Sn.push(o), Hu(), o.$$.dirty.fill(0)), o.$$.dirty[a / 31 | 0] |= 1 << a % 31;
}
function Zt(o, a, s, l, h, g, v = null, m = [-1]) {
  const x = Kn;
  jn(o);
  const _ = o.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: g,
    update: Le,
    not_equal: h,
    bound: as(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(a.context || (x ? x.$$.context : [])),
    // everything else
    callbacks: as(),
    dirty: m,
    skip_bound: !1,
    root: a.target || x.$$.root
  };
  v && v(_.root);
  let k = !1;
  if (_.ctx = s ? s(o, a.props || {}, (y, E, ...N) => {
    const w = N.length ? N[0] : E;
    return _.ctx && h(_.ctx[y], _.ctx[y] = w) && (!_.skip_bound && _.bound[y] && _.bound[y](w), k && Ju(o, y)), E;
  }) : [], _.update(), k = !0, Ft(_.before_update), _.fragment = l ? l(_.ctx) : !1, a.target) {
    if (a.hydrate) {
      const y = Yu(a.target);
      _.fragment && _.fragment.l(y), y.forEach(be);
    } else
      _.fragment && _.fragment.c();
    a.intro && De(o.$$.fragment), At(o, a.target, a.anchor), la();
  }
  jn(x);
}
class jt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $i(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $i(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Dt(this, 1), this.$destroy = Le;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(a, s) {
    if (!aa(s))
      return Le;
    const l = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
    return l.push(s), () => {
      const h = l.indexOf(s);
      h !== -1 && l.splice(h, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(a) {
    this.$$set && !Au(a) && (this.$$.skip_bound = !0, this.$$set(a), this.$$.skip_bound = !1);
  }
}
const $u = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($u);
function eo(o) {
  let a, s;
  return {
    c() {
      a = Nt("svg"), s = Nt("path"), B(s, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), B(a, "viewBox", "0 0 14 14"), B(a, "width", "13"), B(a, "height", "13"), B(a, "class", "svelte-en2qvf");
    },
    m(l, h) {
      Ce(l, a, h), de(a, s);
    },
    p: Le,
    i: Le,
    o: Le,
    d(l) {
      l && be(a);
    }
  };
}
class ha extends jt {
  constructor(a) {
    super(), Zt(this, a, null, eo, Ht, {});
  }
}
function to(o) {
  let a, s;
  return {
    c() {
      a = Nt("svg"), s = Nt("path"), B(s, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), B(a, "viewBox", "0 0 30 30"), B(a, "fill", "none"), B(a, "xmlns", "http://www.w3.org/2000/svg"), B(a, "class", "svelte-d2loi5");
    },
    m(l, h) {
      Ce(l, a, h), de(a, s);
    },
    p: Le,
    i: Le,
    o: Le,
    d(l) {
      l && be(a);
    }
  };
}
class ca extends jt {
  constructor(a) {
    super(), Zt(this, a, null, to, Ht, {});
  }
}
function no(o) {
  let a, s;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*iconsBaseUrl*/
      o[3] + "area.svg") || B(a, "src", s), B(
        a,
        "alt",
        /*placeType*/
        o[6]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h);
    },
    p(l, h) {
      h & /*iconsBaseUrl*/
      8 && !Xe(a.src, s = /*iconsBaseUrl*/
      l[3] + "area.svg") && B(a, "src", s), h & /*placeType*/
      64 && B(
        a,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function io(o) {
  let a, s;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*iconsBaseUrl*/
      o[3] + "reverse.svg") || B(a, "src", s), B(
        a,
        "alt",
        /*placeType*/
        o[6]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h);
    },
    p(l, h) {
      h & /*iconsBaseUrl*/
      8 && !Xe(a.src, s = /*iconsBaseUrl*/
      l[3] + "reverse.svg") && B(a, "src", s), h & /*placeType*/
      64 && B(
        a,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function ro(o) {
  let a, s;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*iconsBaseUrl*/
      o[3] + "poi.svg") || B(a, "src", s), B(
        a,
        "alt",
        /*placeType*/
        o[6]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h);
    },
    p(l, h) {
      h & /*iconsBaseUrl*/
      8 && !Xe(a.src, s = /*iconsBaseUrl*/
      l[3] + "poi.svg") && B(a, "src", s), h & /*placeType*/
      64 && B(
        a,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function so(o) {
  let a, s;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*iconsBaseUrl*/
      o[3] + "postal_code.svg") || B(a, "src", s), B(
        a,
        "alt",
        /*placeType*/
        o[6]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h);
    },
    p(l, h) {
      h & /*iconsBaseUrl*/
      8 && !Xe(a.src, s = /*iconsBaseUrl*/
      l[3] + "postal_code.svg") && B(a, "src", s), h & /*placeType*/
      64 && B(
        a,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function ao(o) {
  let a, s;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*iconsBaseUrl*/
      o[3] + "street.svg") || B(a, "src", s), B(
        a,
        "alt",
        /*placeType*/
        o[6]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h);
    },
    p(l, h) {
      h & /*iconsBaseUrl*/
      8 && !Xe(a.src, s = /*iconsBaseUrl*/
      l[3] + "street.svg") && B(a, "src", s), h & /*placeType*/
      64 && B(
        a,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function uo(o) {
  let a, s;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*iconsBaseUrl*/
      o[3] + "road.svg") || B(a, "src", s), B(
        a,
        "alt",
        /*placeType*/
        o[6]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h);
    },
    p(l, h) {
      h & /*iconsBaseUrl*/
      8 && !Xe(a.src, s = /*iconsBaseUrl*/
      l[3] + "road.svg") && B(a, "src", s), h & /*placeType*/
      64 && B(
        a,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function oo(o) {
  let a, s;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*iconsBaseUrl*/
      o[3] + "housenumber.svg") || B(a, "src", s), B(
        a,
        "alt",
        /*placeType*/
        o[6]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h);
    },
    p(l, h) {
      h & /*iconsBaseUrl*/
      8 && !Xe(a.src, s = /*iconsBaseUrl*/
      l[3] + "housenumber.svg") && B(a, "src", s), h & /*placeType*/
      64 && B(
        a,
        "alt",
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function lo(o) {
  let a, s, l, h;
  return {
    c() {
      a = _e("img"), Xe(a.src, s = /*imageUrl*/
      o[5]) || B(a, "src", s), B(
        a,
        "alt",
        /*category*/
        o[4]
      ), B(a, "class", "svelte-ltkwvy");
    },
    m(g, v) {
      Ce(g, a, v), l || (h = je(
        a,
        "error",
        /*error_handler*/
        o[14]
      ), l = !0);
    },
    p(g, v) {
      v & /*imageUrl*/
      32 && !Xe(a.src, s = /*imageUrl*/
      g[5]) && B(a, "src", s), v & /*category*/
      16 && B(
        a,
        "alt",
        /*category*/
        g[4]
      );
    },
    d(g) {
      g && be(a), l = !1, h();
    }
  };
}
function fs(o) {
  let a, s;
  return {
    c() {
      a = _e("span"), s = Xt(
        /*placeType*/
        o[6]
      ), B(a, "class", "secondary svelte-ltkwvy");
    },
    m(l, h) {
      Ce(l, a, h), de(a, s);
    },
    p(l, h) {
      h & /*placeType*/
      64 && Qn(
        s,
        /*placeType*/
        l[6]
      );
    },
    d(l) {
      l && be(a);
    }
  };
}
function ho(o) {
  var z, X;
  let a, s, l, h, g, v, m, x, _ = (
    /*isReverse*/
    (o[7] ? (
      /*feature*/
      o[0].place_name
    ) : (
      /*feature*/
      o[0].place_name.replace(/,.*/, "")
    )) + ""
  ), k, y, E = (
    /*showPlaceType*/
    o[2] === "always" || /*showPlaceType*/
    o[2] && !/*feature*/
    o[0].address && /*feature*/
    ((z = o[0].properties) == null ? void 0 : z.kind) !== "road" && /*feature*/
    ((X = o[0].properties) == null ? void 0 : X.kind) !== "road_relation" && !/*feature*/
    o[0].id.startsWith("address.") && !/*feature*/
    o[0].id.startsWith("postal_code.") && (!/*feature*/
    o[0].id.startsWith("poi.") || !/*imageUrl*/
    o[5]) && !/*isReverse*/
    o[7]
  ), N, w, A = (
    /*isReverse*/
    (o[7] ? "" : (
      /*feature*/
      o[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), b, C, O;
  function M(q, Z) {
    var ee, j;
    return Z & /*feature*/
    1 && (s = null), Z & /*feature*/
    1 && (l = null), Z & /*feature*/
    1 && (h = null), /*imageUrl*/
    q[5] ? lo : (
      /*feature*/
      q[0].address ? oo : (
        /*feature*/
        ((ee = q[0].properties) == null ? void 0 : ee.kind) === "road" || /*feature*/
        ((j = q[0].properties) == null ? void 0 : j.kind) === "road_relation" ? uo : (s == null && (s = !!/*feature*/
        q[0].id.startsWith("address.")), s ? ao : (l == null && (l = !!/*feature*/
        q[0].id.startsWith("postal_code.")), l ? so : (h == null && (h = !!/*feature*/
        q[0].id.startsWith("poi.")), h ? ro : (
          /*isReverse*/
          q[7] ? io : no
        ))))
      )
    );
  }
  let F = M(o, -1), R = F(o), Y = E && fs(o);
  return {
    c() {
      a = _e("li"), R.c(), g = ut(), v = _e("span"), m = _e("span"), x = _e("span"), k = Xt(_), y = ut(), Y && Y.c(), N = ut(), w = _e("span"), b = Xt(A), B(x, "class", "primary svelte-ltkwvy"), B(m, "class", "svelte-ltkwvy"), B(w, "class", "line2 svelte-ltkwvy"), B(v, "class", "texts svelte-ltkwvy"), B(a, "tabindex", "0"), B(
        a,
        "data-selected",
        /*selected*/
        o[1]
      ), B(a, "class", "svelte-ltkwvy"), pt(
        a,
        "selected",
        /*selected*/
        o[1]
      );
    },
    m(q, Z) {
      Ce(q, a, Z), R.m(a, null), de(a, g), de(a, v), de(v, m), de(m, x), de(x, k), de(m, y), Y && Y.m(m, null), de(v, N), de(v, w), de(w, b), C || (O = [
        je(
          a,
          "mouseenter",
          /*mouseenter_handler*/
          o[12]
        ),
        je(
          a,
          "focus",
          /*focus_handler*/
          o[13]
        )
      ], C = !0);
    },
    p(q, [Z]) {
      var ee, j;
      F === (F = M(q, Z)) && R ? R.p(q, Z) : (R.d(1), R = F(q), R && (R.c(), R.m(a, g))), Z & /*feature*/
      1 && _ !== (_ = /*isReverse*/
      (q[7] ? (
        /*feature*/
        q[0].place_name
      ) : (
        /*feature*/
        q[0].place_name.replace(/,.*/, "")
      )) + "") && Qn(k, _), Z & /*showPlaceType, feature, imageUrl*/
      37 && (E = /*showPlaceType*/
      q[2] === "always" || /*showPlaceType*/
      q[2] && !/*feature*/
      q[0].address && /*feature*/
      ((ee = q[0].properties) == null ? void 0 : ee.kind) !== "road" && /*feature*/
      ((j = q[0].properties) == null ? void 0 : j.kind) !== "road_relation" && !/*feature*/
      q[0].id.startsWith("address.") && !/*feature*/
      q[0].id.startsWith("postal_code.") && (!/*feature*/
      q[0].id.startsWith("poi.") || !/*imageUrl*/
      q[5]) && !/*isReverse*/
      q[7]), E ? Y ? Y.p(q, Z) : (Y = fs(q), Y.c(), Y.m(m, null)) : Y && (Y.d(1), Y = null), Z & /*feature*/
      1 && A !== (A = /*isReverse*/
      (q[7] ? "" : (
        /*feature*/
        q[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Qn(b, A), Z & /*selected*/
      2 && B(
        a,
        "data-selected",
        /*selected*/
        q[1]
      ), Z & /*selected*/
      2 && pt(
        a,
        "selected",
        /*selected*/
        q[1]
      );
    },
    i: Le,
    o: Le,
    d(q) {
      q && be(a), R.d(), Y && Y.d(), C = !1, Ft(O);
    }
  };
}
function co(o, a, s) {
  var M;
  let l, h, { feature: g } = a, { selected: v = !1 } = a, { showPlaceType: m } = a, { missingIconsCache: x } = a, { iconsBaseUrl: _ } = a;
  const k = (M = g.properties) == null ? void 0 : M.categories;
  let y, E, N = 0, w = g.place_type[0] === "reverse";
  function A() {
    E && x.add(E), s(10, N++, N);
  }
  function b(F) {
    ls.call(this, o, F);
  }
  function C(F) {
    ls.call(this, o, F);
  }
  const O = () => A();
  return o.$$set = (F) => {
    "feature" in F && s(0, g = F.feature), "selected" in F && s(1, v = F.selected), "showPlaceType" in F && s(2, m = F.showPlaceType), "missingIconsCache" in F && s(9, x = F.missingIconsCache), "iconsBaseUrl" in F && s(3, _ = F.iconsBaseUrl);
  }, o.$$.update = () => {
    var F, R, Y, z;
    if (o.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    3640)
      do
        s(11, l--, l), s(4, y = k == null ? void 0 : k[l]), s(5, E = y ? _ + y.replace(/ /g, "_") + ".svg" : void 0);
      while (l > -1 && (!E || x.has(E)));
    o.$$.dirty & /*feature*/
    1 && s(6, h = g.id.startsWith("poi.") ? (R = (F = g.properties) == null ? void 0 : F.categories) == null ? void 0 : R.join(", ") : ((z = (Y = g.properties) == null ? void 0 : Y.place_type_name) == null ? void 0 : z[0]) ?? g.place_type[0]);
  }, s(11, l = (k == null ? void 0 : k.length) ?? 0), [
    g,
    v,
    m,
    _,
    y,
    E,
    h,
    w,
    A,
    x,
    N,
    l,
    b,
    C,
    O
  ];
}
class fo extends jt {
  constructor(a) {
    super(), Zt(this, a, co, ho, Ht, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 9,
      iconsBaseUrl: 3
    });
  }
}
function go(o) {
  let a;
  return {
    c() {
      a = _e("div"), a.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', B(a, "class", "svelte-7cmwmc");
    },
    m(s, l) {
      Ce(s, a, l);
    },
    p: Le,
    i: Le,
    o: Le,
    d(s) {
      s && be(a);
    }
  };
}
class mo extends jt {
  constructor(a) {
    super(), Zt(this, a, null, go, Ht, {});
  }
}
function vo(o) {
  let a, s, l;
  return {
    c() {
      a = Nt("svg"), s = Nt("path"), B(s, "stroke-width", "4"), B(s, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), B(s, "class", "svelte-gzo3ar"), B(a, "width", l = /*displayIn*/
      o[0] === "list" ? 20 : void 0), B(a, "viewBox", "0 0 70 85"), B(a, "fill", "none"), B(a, "class", "svelte-gzo3ar"), pt(
        a,
        "in-map",
        /*displayIn*/
        o[0] !== "list"
      ), pt(
        a,
        "list-icon",
        /*displayIn*/
        o[0] === "list"
      );
    },
    m(h, g) {
      Ce(h, a, g), de(a, s);
    },
    p(h, [g]) {
      g & /*displayIn*/
      1 && l !== (l = /*displayIn*/
      h[0] === "list" ? 20 : void 0) && B(a, "width", l), g & /*displayIn*/
      1 && pt(
        a,
        "in-map",
        /*displayIn*/
        h[0] !== "list"
      ), g & /*displayIn*/
      1 && pt(
        a,
        "list-icon",
        /*displayIn*/
        h[0] === "list"
      );
    },
    i: Le,
    o: Le,
    d(h) {
      h && be(a);
    }
  };
}
function yo(o, a, s) {
  let { displayIn: l } = a;
  return o.$$set = (h) => {
    "displayIn" in h && s(0, l = h.displayIn);
  }, [l];
}
class po extends jt {
  constructor(a) {
    super(), Zt(this, a, yo, vo, Ht, { displayIn: 0 });
  }
}
function _o(o) {
  let a, s;
  return {
    c() {
      a = Nt("svg"), s = Nt("path"), B(s, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), B(a, "viewBox", "0 0 60.006 21.412"), B(a, "width", "14"), B(a, "height", "20"), B(a, "class", "svelte-en2qvf");
    },
    m(l, h) {
      Ce(l, a, h), de(a, s);
    },
    p: Le,
    i: Le,
    o: Le,
    d(l) {
      l && be(a);
    }
  };
}
class ko extends jt {
  constructor(a) {
    super(), Zt(this, a, null, _o, Ht, {});
  }
}
function Eo(o) {
  let a, s, l;
  return {
    c() {
      a = Nt("svg"), s = Nt("circle"), l = Nt("path"), B(s, "cx", "4.789"), B(s, "cy", "4.787"), B(s, "r", "3.85"), B(s, "class", "svelte-1aq105l"), B(l, "d", "M12.063 12.063 7.635 7.635"), B(l, "class", "svelte-1aq105l"), B(a, "xmlns", "http://www.w3.org/2000/svg"), B(a, "width", "13"), B(a, "height", "13"), B(a, "viewBox", "0 0 13 13"), B(a, "class", "svelte-1aq105l");
    },
    m(h, g) {
      Ce(h, a, g), de(a, s), de(a, l);
    },
    p: Le,
    i: Le,
    o: Le,
    d(h) {
      h && be(a);
    }
  };
}
class xo extends jt {
  constructor(a) {
    super(), Zt(this, a, null, Eo, Ht, {});
  }
}
function No(o, a, s) {
  const l = a[1], h = a[0], g = l - h;
  return o === l && s ? o : ((o - h) % g + g) % g + h;
}
function gs(o) {
  const a = [...o];
  return a[2] < a[0] && (a[2] += 360), a;
}
let Xn;
async function Io(o, a, s) {
  const l = o == null ? void 0 : o.getCenterAndZoom();
  for (const h of a ?? [])
    if (!(l && (h.minZoom != null && h.minZoom > l[0] || h.maxZoom != null && h.maxZoom < l[0]))) {
      if (h.type === "fixed")
        return h.coordinates.join(",");
      e: if (h.type === "client-geolocation") {
        if (Xn && h.cachedLocationExpiry && Xn.time + h.cachedLocationExpiry > Date.now()) {
          if (!Xn.coords)
            break e;
          return Xn.coords;
        }
        let g;
        try {
          return g = await new Promise((v, m) => {
            s.signal.addEventListener("abort", () => {
              m(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (x) => {
                v(
                  [x.coords.longitude, x.coords.latitude].map((_) => _.toFixed(6)).join(",")
                );
              },
              (x) => {
                m(x);
              },
              h
            );
          }), g;
        } catch {
        } finally {
          h.cachedLocationExpiry && (Xn = {
            time: Date.now(),
            coords: g
          });
        }
        if (s.signal.aborted)
          return;
      }
      if (h.type === "server-geolocation")
        return "ip";
      if (l && h.type === "map-center")
        return l[1].toFixed(6) + "," + l[2].toFixed(6);
    }
}
const wo = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, ds = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, ms = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, vs = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, ys = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, ps = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function So(o) {
  if (!["DMS", "DM", "DD"].includes(o))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const a = this.decimalCoordinates.split(",").map((N) => Number(N.trim())), s = Number(a[0]), l = Number(a[1]), h = Math.abs(s), g = Math.abs(l), v = s > 0 ? "N" : "S", m = l > 0 ? "E" : "W";
    let x;
    o == "DD" && (x = `${h}° ${v}, ${g}° ${m}`);
    const _ = Math.floor(h), k = Math.floor(g), y = (h - _) * 60, E = (g - k) * 60;
    if (o == "DM") {
      let N = _s(y, 3).toFixed(3).padStart(6, "0"), w = _s(E, 3).toFixed(3).padStart(6, "0");
      N.endsWith(".000") && w.endsWith(".000") && (N = N.replace(/\.000$/, ""), w = w.replace(/\.000$/, "")), x = `${_}° ${N}' ${v}, ${k}° ${w}' ${m}`;
    }
    if (o == "DMS") {
      const N = Math.floor(y), w = Math.floor(E);
      let A = ((y - N) * 60).toFixed(1).padStart(4, "0"), b = ((E - w) * 60).toFixed(1).padStart(4, "0");
      const C = N.toString().padStart(2, "0"), O = w.toString().padStart(2, "0");
      A.endsWith(".0") && b.endsWith(".0") && (A = A.replace(/\.0$/, ""), b = b.replace(/\.0$/, "")), x = `${_}° ${C}' ${A}" ${v}, ${k}° ${O}' ${b}" ${m}`;
    }
    return x;
  } else
    throw new Error("no decimal coordinates to convert");
}
function _s(o, a) {
  const s = Math.pow(10, a);
  return Math.round((o + Number.EPSILON) * s) / s;
}
function _r(o, a) {
  a || (a = 5), o = o.replace(/\s+/g, " ").trim();
  let s = null, l = null, h = "", g = "", v = null, m = [], x = !1;
  if (wo.test(o))
    throw new Error("invalid coordinate value");
  if (ds.test(o))
    if (m = ds.exec(o), x = Wn(m), x)
      s = Math.abs(m[1]) + m[2] / 60, Number(m[1]) < 0 && (s *= -1), l = Math.abs(m[3]) + m[4] / 60, Number(m[3]) < 0 && (l *= -1), v = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (ms.test(o))
    if (m = ms.exec(o), x = Wn(m), x) {
      if (s = m[2], l = m[6], s.includes(",") && (s = s.replace(",", ".")), l.includes(",") && (l = l.replace(",", ".")), v = "DD", Number(Math.round(s)) == Number(s))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(l)) == Number(l))
        throw new Error("integer only coordinate provided");
      m[1] ? (h = m[1], g = m[5]) : m[4] && (h = m[4], g = m[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (vs.test(o))
    if (m = vs.exec(o), x = Wn(m), x)
      s = Math.abs(parseInt(m[2])), m[4] && (s += m[4] / 60, v = "DM"), m[6] && (s += m[6].replace(",", ".") / 3600, v = "DMS"), parseInt(m[2]) < 0 && (s = -1 * s), l = Math.abs(parseInt(m[9])), m[11] && (l += m[11] / 60), m[13] && (l += m[13].replace(",", ".") / 3600), parseInt(m[9]) < 0 && (l = -1 * l), m[1] ? (h = m[1], g = m[8]) : m[7] && (h = m[7], g = m[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ys.test(o))
    if (m = ys.exec(o), x = Wn(m), x)
      s = Math.abs(parseInt(m[2])), m[4] && (s += m[4] / 60, v = "DM"), m[6] && (s += m[6] / 3600, v = "DMS"), parseInt(m[2]) < 0 && (s = -1 * s), l = Math.abs(parseInt(m[10])), m[12] && (l += m[12] / 60), m[14] && (l += m[14] / 3600), parseInt(m[10]) < 0 && (l = -1 * l), m[1] ? (h = m[1], g = m[9]) : m[8] && (h = m[8], g = m[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (ps.test(o)) {
    if (m = ps.exec(o), x = Wn(m), m.filter((_) => _).length <= 5)
      throw new Error("invalid coordinates format");
    if (x)
      s = Math.abs(parseInt(m[2])), m[4] && (s += m[4].replace(",", ".") / 60, v = "DM"), m[6] && (s += m[6].replace(",", ".") / 3600, v = "DMS"), parseInt(m[2]) < 0 && (s = -1 * s), l = Math.abs(parseInt(m[10])), m[12] && (l += m[12].replace(",", ".") / 60), m[14] && (l += m[14].replace(",", ".") / 3600), parseInt(m[10]) < 0 && (l = -1 * l), m[1] ? (h = m[1], g = m[9]) : m[8] && (h = m[8], g = m[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (x) {
    if (Math.abs(l) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(s) >= 90)
      throw new Error("invalid latitude value");
    if (h && !g || !h && g)
      throw new Error("invalid coordinates value");
    if (h && h == g)
      throw new Error("invalid coordinates format");
    s.toString().includes(",") && (s = s.replace(",", ".")), l.toString().includes(",") && (l = l.replace(",", "."));
    let _ = /S|SOUTH/i;
    _.test(h) && s > 0 && (s = -1 * s), _ = /W|WEST/i, _.test(g) && l > 0 && (l = -1 * l);
    const k = m[0].trim();
    let y, E;
    const N = /[,/;\u0020]/g, w = k.match(N);
    if (w == null) {
      const C = Math.floor(o.length / 2);
      y = k.substring(0, C).trim(), E = k.substring(C).trim();
    } else {
      let C;
      w.length % 2 == 1 ? C = Math.floor(w.length / 2) : C = w.length / 2 - 1;
      let O = 0;
      if (C == 0)
        O = k.indexOf(w[0]), y = k.substring(0, O).trim(), E = k.substring(O + 1).trim();
      else {
        let M = 0, F = 0;
        for (; M <= C; )
          O = k.indexOf(w[M], F), F = O + 1, M++;
        y = k.substring(0, O).trim(), E = k.substring(O + 1).trim();
      }
    }
    const A = y.split(".");
    if (A.length == 2 && A[1] == 0 && A[1].length != 2)
      throw new Error("invalid coordinates format");
    const b = E.split(".");
    if (b.length == 2 && b[1] == 0 && b[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(y) || /^\d+$/.test(E))
      throw new Error("degree only coordinate/s provided");
    return s = Number(Number(s).toFixed(a)), l = Number(Number(l).toFixed(a)), Object.freeze({
      verbatimCoordinates: k,
      verbatimLatitude: y,
      verbatimLongitude: E,
      decimalLatitude: s,
      decimalLongitude: l,
      decimalCoordinates: `${s},${l}`,
      originalFormat: v,
      closeEnough: Lo,
      toCoordinateFormat: So
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Wn(o) {
  if (!isNaN(o[0]))
    return !1;
  const a = [...o];
  if (a.shift(), a.length % 2 > 0)
    return !1;
  const s = /^[-+]?\d+([\.,]\d+)?$/, l = /[eastsouthnorthwest]+/i, h = a.length / 2;
  for (let g = 0; g < h; g++) {
    const v = a[g], m = a[g + h], x = s.test(v) && s.test(m), _ = l.test(v) && l.test(m), k = v == m;
    if (!(v == null && m == null)) {
      if (v == null || m == null)
        return !1;
      if (x || _ || k)
        continue;
      return !1;
    }
  }
  return !0;
}
function ks(o, a) {
  const s = Math.abs(o - a);
  return Number(s.toFixed(6)) <= 1e-5;
}
function Lo(o) {
  if (!o)
    throw new Error("coords must be provided");
  if (o.includes(",")) {
    const a = o.split(",");
    if (Number(a[0]) == NaN || Number(a[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ks(this.decimalLatitude, Number(a[0])) && ks(this.decimalLongitude, a[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const bo = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
_r.to = bo;
const To = [
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
], Co = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Ro = [
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
], Oo = [
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
function Mo() {
  const o = [];
  return To.forEach((a) => {
    a.decimalLatitude ? o.push(a) : o.push({ ...a, ...Co });
  }), [...o, ...Ro, ...Oo];
}
const Po = Mo();
_r.formats = Po.map((o) => o.verbatimCoordinates);
const Ao = _r;
function Es(o, a, s) {
  const l = o.slice();
  return l[81] = a[s], l[83] = s, l;
}
function xs(o) {
  let a, s;
  return a = new mo({}), {
    c() {
      Wt(a.$$.fragment);
    },
    m(l, h) {
      At(a, l, h), s = !0;
    },
    i(l) {
      s || (De(a.$$.fragment, l), s = !0);
    },
    o(l) {
      ze(a.$$.fragment, l), s = !1;
    },
    d(l) {
      Dt(a, l);
    }
  };
}
function Ns(o) {
  let a, s, l, h, g;
  return s = new ko({}), {
    c() {
      a = _e("button"), Wt(s.$$.fragment), B(a, "type", "button"), B(
        a,
        "title",
        /*reverseButtonTitle*/
        o[9]
      ), B(a, "class", "svelte-zh3kmv"), pt(
        a,
        "active",
        /*reverseActive*/
        o[0]
      );
    },
    m(v, m) {
      Ce(v, a, m), At(s, a, null), l = !0, h || (g = je(
        a,
        "click",
        /*click_handler_2*/
        o[67]
      ), h = !0);
    },
    p(v, m) {
      (!l || m[0] & /*reverseButtonTitle*/
      512) && B(
        a,
        "title",
        /*reverseButtonTitle*/
        v[9]
      ), (!l || m[0] & /*reverseActive*/
      1) && pt(
        a,
        "active",
        /*reverseActive*/
        v[0]
      );
    },
    i(v) {
      l || (De(s.$$.fragment, v), l = !0);
    },
    o(v) {
      ze(s.$$.fragment, v), l = !1;
    },
    d(v) {
      v && be(a), Dt(s), h = !1, g();
    }
  };
}
function Do(o) {
  let a, s = [], l = /* @__PURE__ */ new Map(), h, g, v, m = cs(
    /*listFeatures*/
    o[14]
  );
  const x = (_) => (
    /*feature*/
    _[81].id + /*feature*/
    (_[81].address ? "," + /*feature*/
    _[81].address : "")
  );
  for (let _ = 0; _ < m.length; _ += 1) {
    let k = Es(o, m, _), y = x(k);
    l.set(y, s[_] = Is(y, k));
  }
  return {
    c() {
      a = _e("ul");
      for (let _ = 0; _ < s.length; _ += 1)
        s[_].c();
      B(a, "class", "svelte-zh3kmv");
    },
    m(_, k) {
      Ce(_, a, k);
      for (let y = 0; y < s.length; y += 1)
        s[y] && s[y].m(a, null);
      h = !0, g || (v = [
        je(
          a,
          "mouseleave",
          /*mouseleave_handler*/
          o[71]
        ),
        je(
          a,
          "blur",
          /*blur_handler_1*/
          o[72]
        )
      ], g = !0);
    },
    p(_, k) {
      k[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      17880064 && (m = cs(
        /*listFeatures*/
        _[14]
      ), ki(), s = Ku(s, k, x, 1, _, m, l, a, Qu, Is, null, Es), Ei());
    },
    i(_) {
      if (!h) {
        for (let k = 0; k < m.length; k += 1)
          De(s[k]);
        h = !0;
      }
    },
    o(_) {
      for (let k = 0; k < s.length; k += 1)
        ze(s[k]);
      h = !1;
    },
    d(_) {
      _ && be(a);
      for (let k = 0; k < s.length; k += 1)
        s[k].d();
      g = !1, Ft(v);
    }
  };
}
function Fo(o) {
  let a, s, l, h, g, v;
  return s = new ca({}), {
    c() {
      a = _e("div"), Wt(s.$$.fragment), l = ut(), h = _e("div"), g = Xt(
        /*noResultsMessage*/
        o[7]
      ), B(h, "class", "svelte-zh3kmv"), B(a, "class", "no-results svelte-zh3kmv");
    },
    m(m, x) {
      Ce(m, a, x), At(s, a, null), de(a, l), de(a, h), de(h, g), v = !0;
    },
    p(m, x) {
      (!v || x[0] & /*noResultsMessage*/
      128) && Qn(
        g,
        /*noResultsMessage*/
        m[7]
      );
    },
    i(m) {
      v || (De(s.$$.fragment, m), v = !0);
    },
    o(m) {
      ze(s.$$.fragment, m), v = !1;
    },
    d(m) {
      m && be(a), Dt(s);
    }
  };
}
function Go(o) {
  let a = "", s;
  return {
    c() {
      s = Xt(a);
    },
    m(l, h) {
      Ce(l, s, h);
    },
    p: Le,
    i: Le,
    o: Le,
    d(l) {
      l && be(s);
    }
  };
}
function qo(o) {
  let a, s, l, h, g, v, m, x, _, k, y;
  return s = new ca({}), x = new ha({}), {
    c() {
      a = _e("div"), Wt(s.$$.fragment), l = ut(), h = _e("div"), g = Xt(
        /*errorMessage*/
        o[6]
      ), v = ut(), m = _e("button"), Wt(x.$$.fragment), B(h, "class", "svelte-zh3kmv"), B(m, "class", "svelte-zh3kmv"), B(a, "class", "error svelte-zh3kmv");
    },
    m(E, N) {
      Ce(E, a, N), At(s, a, null), de(a, l), de(a, h), de(h, g), de(a, v), de(a, m), At(x, m, null), _ = !0, k || (y = je(
        m,
        "click",
        /*click_handler_3*/
        o[68]
      ), k = !0);
    },
    p(E, N) {
      (!_ || N[0] & /*errorMessage*/
      64) && Qn(
        g,
        /*errorMessage*/
        E[6]
      );
    },
    i(E) {
      _ || (De(s.$$.fragment, E), De(x.$$.fragment, E), _ = !0);
    },
    o(E) {
      ze(s.$$.fragment, E), ze(x.$$.fragment, E), _ = !1;
    },
    d(E) {
      E && be(a), Dt(s), Dt(x), k = !1, y();
    }
  };
}
function Is(o, a) {
  let s, l, h;
  function g() {
    return (
      /*mouseenter_handler*/
      a[69](
        /*i*/
        a[83]
      )
    );
  }
  function v() {
    return (
      /*focus_handler_1*/
      a[70](
        /*feature*/
        a[81]
      )
    );
  }
  return l = new fo({
    props: {
      feature: (
        /*feature*/
        a[81]
      ),
      showPlaceType: (
        /*showPlaceType*/
        a[10]
      ),
      selected: (
        /*selectedItemIndex*/
        a[15] === /*i*/
        a[83]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        a[20]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        a[12]
      )
    }
  }), l.$on("mouseenter", g), l.$on("focus", v), {
    key: o,
    first: null,
    c() {
      s = zu(), Wt(l.$$.fragment), this.first = s;
    },
    m(m, x) {
      Ce(m, s, x), At(l, m, x), h = !0;
    },
    p(m, x) {
      a = m;
      const _ = {};
      x[0] & /*listFeatures*/
      16384 && (_.feature = /*feature*/
      a[81]), x[0] & /*showPlaceType*/
      1024 && (_.showPlaceType = /*showPlaceType*/
      a[10]), x[0] & /*selectedItemIndex, listFeatures*/
      49152 && (_.selected = /*selectedItemIndex*/
      a[15] === /*i*/
      a[83]), x[0] & /*iconsBaseUrl*/
      4096 && (_.iconsBaseUrl = /*iconsBaseUrl*/
      a[12]), l.$set(_);
    },
    i(m) {
      h || (De(l.$$.fragment, m), h = !0);
    },
    o(m) {
      ze(l.$$.fragment, m), h = !1;
    },
    d(m) {
      m && be(s), Dt(l, m);
    }
  };
}
function zo(o) {
  let a, s, l, h, g, v, m, x, _, k, y, E, N, w, A, b, C, O, M, F, R, Y = !1;
  g = new xo({}), y = new ha({});
  let z = (
    /*abortController*/
    o[19] && xs()
  ), X = (
    /*enableReverse*/
    o[5] === !0 && Ns(o)
  );
  const q = (
    /*#slots*/
    o[59].default
  ), Z = Du(
    q,
    o,
    /*$$scope*/
    o[58],
    null
  ), ee = [qo, Go, Fo, Do], j = [];
  function ce(G, K) {
    var se, me;
    return (
      /*error*/
      G[18] ? 0 : (
        /*focusedDelayed*/
        G[16] ? (
          /*listFeatures*/
          ((se = G[14]) == null ? void 0 : se.length) === 0 ? 2 : (
            /*focusedDelayed*/
            G[16] && /*listFeatures*/
            ((me = G[14]) != null && me.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(b = ce(o)) && (C = j[b] = ee[b](o)), {
    c() {
      a = ut(), s = _e("form"), l = _e("div"), h = _e("button"), Wt(g.$$.fragment), v = ut(), m = _e("input"), x = ut(), _ = _e("div"), k = _e("button"), Wt(y.$$.fragment), E = ut(), z && z.c(), N = ut(), X && X.c(), w = ut(), Z && Z.c(), A = ut(), C && C.c(), B(h, "class", "search-button svelte-zh3kmv"), B(h, "type", "button"), B(
        m,
        "placeholder",
        /*placeholder*/
        o[8]
      ), B(
        m,
        "aria-label",
        /*placeholder*/
        o[8]
      ), B(m, "class", "svelte-zh3kmv"), B(k, "type", "button"), B(
        k,
        "title",
        /*clearButtonTitle*/
        o[3]
      ), B(k, "class", "svelte-zh3kmv"), B(_, "class", "clear-button-container svelte-zh3kmv"), pt(
        _,
        "displayable",
        /*searchValue*/
        o[1] !== ""
      ), B(l, "class", "input-group svelte-zh3kmv"), B(s, "tabindex", "0"), B(s, "class", O = us(
        /*className*/
        o[2]
      ) + " svelte-zh3kmv"), pt(
        s,
        "can-collapse",
        /*collapsed*/
        o[4] && /*searchValue*/
        o[1] === ""
      );
    },
    m(G, K) {
      Ce(G, a, K), Ce(G, s, K), de(s, l), de(l, h), At(g, h, null), de(l, v), de(l, m), o[61](m), os(
        m,
        /*searchValue*/
        o[1]
      ), de(l, x), de(l, _), de(_, k), At(y, k, null), de(_, E), z && z.m(_, null), de(l, N), X && X.m(l, null), de(l, w), Z && Z.m(l, null), de(s, A), ~b && j[b].m(s, null), M = !0, F || (R = [
        je(
          h,
          "click",
          /*click_handler*/
          o[60]
        ),
        je(
          m,
          "input",
          /*input_1_input_handler*/
          o[62]
        ),
        je(
          m,
          "focus",
          /*focus_handler*/
          o[63]
        ),
        je(
          m,
          "blur",
          /*blur_handler*/
          o[64]
        ),
        je(
          m,
          "keydown",
          /*handleKeyDown*/
          o[22]
        ),
        je(
          m,
          "input",
          /*input_handler*/
          o[65]
        ),
        je(
          k,
          "click",
          /*click_handler_1*/
          o[66]
        ),
        je(s, "submit", Bu(
          /*handleOnSubmit*/
          o[21]
        ))
      ], F = !0);
    },
    p(G, K) {
      (!M || K[0] & /*placeholder*/
      256) && B(
        m,
        "placeholder",
        /*placeholder*/
        G[8]
      ), (!M || K[0] & /*placeholder*/
      256) && B(
        m,
        "aria-label",
        /*placeholder*/
        G[8]
      ), K[0] & /*searchValue*/
      2 && m.value !== /*searchValue*/
      G[1] && os(
        m,
        /*searchValue*/
        G[1]
      ), (!M || K[0] & /*clearButtonTitle*/
      8) && B(
        k,
        "title",
        /*clearButtonTitle*/
        G[3]
      ), /*abortController*/
      G[19] ? z ? K[0] & /*abortController*/
      524288 && De(z, 1) : (z = xs(), z.c(), De(z, 1), z.m(_, null)) : z && (ki(), ze(z, 1, 1, () => {
        z = null;
      }), Ei()), (!M || K[0] & /*searchValue*/
      2) && pt(
        _,
        "displayable",
        /*searchValue*/
        G[1] !== ""
      ), /*enableReverse*/
      G[5] === !0 ? X ? (X.p(G, K), K[0] & /*enableReverse*/
      32 && De(X, 1)) : (X = Ns(G), X.c(), De(X, 1), X.m(l, w)) : X && (ki(), ze(X, 1, 1, () => {
        X = null;
      }), Ei()), Z && Z.p && (!M || K[1] & /*$$scope*/
      134217728) && Gu(
        Z,
        q,
        G,
        /*$$scope*/
        G[58],
        M ? Fu(
          q,
          /*$$scope*/
          G[58],
          K,
          null
        ) : qu(
          /*$$scope*/
          G[58]
        ),
        null
      );
      let se = b;
      b = ce(G), b === se ? ~b && j[b].p(G, K) : (C && (ki(), ze(j[se], 1, 1, () => {
        j[se] = null;
      }), Ei()), ~b ? (C = j[b], C ? C.p(G, K) : (C = j[b] = ee[b](G), C.c()), De(C, 1), C.m(s, null)) : C = null), (!M || K[0] & /*className*/
      4 && O !== (O = us(
        /*className*/
        G[2]
      ) + " svelte-zh3kmv")) && B(s, "class", O), (!M || K[0] & /*className, collapsed, searchValue*/
      22) && pt(
        s,
        "can-collapse",
        /*collapsed*/
        G[4] && /*searchValue*/
        G[1] === ""
      );
    },
    i(G) {
      M || (De(Y), De(g.$$.fragment, G), De(y.$$.fragment, G), De(z), De(X), De(Z, G), De(C), M = !0);
    },
    o(G) {
      ze(Y), ze(g.$$.fragment, G), ze(y.$$.fragment, G), ze(z), ze(X), ze(Z, G), ze(C), M = !1;
    },
    d(G) {
      G && (be(a), be(s)), Dt(g), o[61](null), Dt(y), z && z.d(), X && X.d(), Z && Z.d(G), ~b && j[b].d(), F = !1, Ft(R);
    }
  };
}
function Bo(o, a, s) {
  let l, { $$slots: h = {}, $$scope: g } = a, { class: v = void 0 } = a, { apiKey: m } = a, { bbox: x = void 0 } = a, { clearButtonTitle: _ = "clear" } = a, { clearOnBlur: k = !1 } = a, { collapsed: y = !1 } = a, { country: E = void 0 } = a, { debounceSearch: N = 200 } = a, { enableReverse: w = !1 } = a, { errorMessage: A = "Something went wrong…" } = a, { filter: b = () => !0 } = a, { flyTo: C = !0 } = a, { fuzzyMatch: O = !0 } = a, { language: M = void 0 } = a, { limit: F = void 0 } = a, { mapController: R = void 0 } = a, { minLength: Y = 2 } = a, { noResultsMessage: z = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = a, { placeholder: X = "Search" } = a, { proximity: q = [{ type: "server-geolocation" }] } = a, { reverseActive: Z = w === "always" } = a, { reverseButtonTitle: ee = "toggle reverse geocoding" } = a, { searchValue: j = "" } = a, { showFullGeometry: ce = !0 } = a, { showPlaceType: G = "ifNeeded" } = a, { showResultsWhileTyping: K = !0 } = a, { selectFirst: se = !0 } = a, { flyToSelected: me = !1 } = a, { markerOnSelected: Re = !0 } = a, { types: Ee = void 0 } = a, { excludeTypes: Q = !1 } = a, { zoom: Ae = 16 } = a, { maxZoom: Ie = 18 } = a, { apiUrl: qe = "https://api.maptiler.com/geocoding" } = a, { fetchParameters: he = {} } = a, { iconsBaseUrl: ot = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.3.3/icons/" } = a, { adjustUrlQuery: On = () => {
  } } = a;
  function ni() {
    Qe.focus();
  }
  function T() {
    Qe.blur();
  }
  function ii(D, Se = !0, Fe = !1) {
    s(1, j = D), Se ? (s(15, xe = -1), fn()) : (tt(!Fe, Fe), setTimeout(() => {
      Qe.focus(), Qe.select();
    }));
  }
  function ke() {
    s(14, oe = void 0), s(55, ae = void 0), s(15, xe = -1);
  }
  function J() {
    s(54, we = []), s(55, ae = void 0);
  }
  let I = !1, oe, we, ae, Mn = "", Qe, xe = -1, U, Kt = [], It, Ke, cn, ue;
  const Jt = /* @__PURE__ */ new Set(), et = Wu();
  Xu(() => {
    R && (R.setEventHandler(void 0), R.indicateReverse(!1), R.setSelectedMarker(-1), R.setMarkers(void 0, void 0));
  });
  function fn(D) {
    if (Ke && (clearTimeout(Ke), Ke = void 0), xe > -1 && oe)
      s(55, ae = oe[xe]), s(1, j = ae.place_type[0] === "reverse" ? ae.place_name : ae.place_name.replace(/,.*/, "")), s(18, U = void 0), s(54, we = void 0), s(15, xe = -1);
    else if (j) {
      const Se = D || !te(j);
      $t(j, { exact: !0 }).then(() => {
        s(54, we = oe), s(55, ae = void 0), Se && ge();
      }).catch((Fe) => s(18, U = Fe));
    }
  }
  function te(D) {
    try {
      return Ao(D, 6);
    } catch {
      return !1;
    }
  }
  async function $t(D, { byId: Se = !1, exact: Fe = !1 } = {}) {
    s(18, U = void 0), It == null || It.abort();
    const We = new AbortController();
    s(19, It = We);
    try {
      const fe = te(D), Ve = new URLSearchParams();
      if (M !== void 0 && Ve.set("language", Array.isArray(M) ? M.join(",") : M ?? ""), Ee && Ve.set("types", Ee.join(",")), Q && Ve.set("excludeTypes", String(Q)), x && Ve.set("bbox", x.map((mn) => mn.toFixed(6)).join(",")), E && Ve.set("country", Array.isArray(E) ? E.join(",") : E), !Se && !fe) {
        const mn = await Io(R, q, We);
        mn && Ve.set("proximity", mn), (Fe || !K) && Ve.set("autocomplete", "false"), Ve.set("fuzzyMatch", String(O));
      }
      F !== void 0 && (!fe || (Ee == null ? void 0 : Ee.length) === 1) && Ve.set("limit", String(F)), Ve.set("key", m), On(Ve);
      const ht = qe + "/" + encodeURIComponent(fe ? fe.decimalLongitude + "," + fe.decimalLatitude : D) + ".json?" + Ve.toString();
      if (ht === Mn) {
        Se ? (s(14, oe = void 0), s(55, ae = Kt[0])) : s(14, oe = Kt);
        return;
      }
      Mn = ht;
      const dn = await fetch(ht, { signal: We.signal, ...he });
      if (!dn.ok)
        throw new Error(await dn.text());
      const Gt = await dn.json();
      et("response", { url: ht, featureCollection: Gt }), Se ? (s(14, oe = void 0), s(55, ae = Gt.features[0]), Kt = [ae]) : (s(14, oe = Gt.features.filter(b)), fe && oe.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + fe.decimalLongitude + "_" + fe.decimalLatitude,
        text: fe.decimalLatitude + ", " + fe.decimalLongitude,
        place_name: fe.decimalLatitude + ", " + fe.decimalLongitude,
        place_type: ["reverse"],
        center: [fe.decimalLongitude, fe.decimalLatitude],
        bbox: [
          fe.decimalLongitude,
          fe.decimalLatitude,
          fe.decimalLongitude,
          fe.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [fe.decimalLongitude, fe.decimalLatitude]
        }
      }), Kt = oe, fe && Qe.focus());
    } catch (fe) {
      if (fe && typeof fe == "object" && "name" in fe && fe.name === "AbortError")
        return;
      throw fe;
    } finally {
      We === It && s(19, It = void 0);
    }
  }
  function ge() {
    var Fe;
    if (!(we != null && we.length) || !C)
      return;
    const D = [180, 90, -180, -90], Se = !we.some((We) => !We.matching_text);
    for (const We of we)
      if (Se || !We.matching_text)
        for (const fe of [0, 1, 2, 3])
          D[fe] = Math[fe < 2 ? "min" : "max"](D[fe], ((Fe = We.bbox) == null ? void 0 : Fe[fe]) ?? We.center[fe % 2]);
    R && we.length > 0 && (ae && D[0] === D[2] && D[1] === D[3] ? R.flyTo(ae.center, Ae) : R.fitBounds(gs(D), 50, Ie));
  }
  function re(D) {
    s(0, Z = w === "always"), s(14, oe = void 0), s(55, ae = void 0), s(15, xe = -1), ii(D[1].toFixed(6) + ", " + No(D[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Mi(D) {
    if (!oe)
      return;
    let Se = D.key === "ArrowDown" ? 1 : D.key === "ArrowUp" ? -1 : 0;
    Se && (xe === (se ? 0 : -1) && Se === -1 && s(15, xe = oe.length), s(15, xe += Se), xe >= oe.length && s(15, xe = -1), xe < 0 && se && s(15, xe = 0), D.preventDefault());
  }
  function tt(D = !0, Se = !1) {
    if (s(18, U = void 0), K || Se) {
      if (Ke && clearTimeout(Ke), j.length < Y)
        return;
      const Fe = j;
      Ke = window.setTimeout(
        () => {
          $t(Fe).catch((We) => s(18, U = We));
        },
        D ? N : 0
      );
    } else
      s(14, oe = void 0), s(18, U = void 0);
  }
  function Pn(D) {
    s(55, ae = D), s(1, j = D.place_name), s(15, xe = -1);
  }
  const ne = () => Qe.focus();
  function Pi(D) {
    ar[D ? "unshift" : "push"](() => {
      Qe = D, s(17, Qe);
    });
  }
  function Ai() {
    j = this.value, s(1, j), s(13, I), s(27, k);
  }
  const An = () => s(13, I = !0), Je = () => s(13, I = !1), en = () => tt(), lt = () => {
    s(1, j = ""), Qe.focus();
  }, ri = () => s(0, Z = !Z), gn = () => s(18, U = void 0), Di = (D) => s(15, xe = D), si = (D) => Pn(D), Ct = () => {
    se || s(15, xe = -1);
  }, H = () => {
  };
  return o.$$set = (D) => {
    "class" in D && s(2, v = D.class), "apiKey" in D && s(25, m = D.apiKey), "bbox" in D && s(26, x = D.bbox), "clearButtonTitle" in D && s(3, _ = D.clearButtonTitle), "clearOnBlur" in D && s(27, k = D.clearOnBlur), "collapsed" in D && s(4, y = D.collapsed), "country" in D && s(28, E = D.country), "debounceSearch" in D && s(29, N = D.debounceSearch), "enableReverse" in D && s(5, w = D.enableReverse), "errorMessage" in D && s(6, A = D.errorMessage), "filter" in D && s(30, b = D.filter), "flyTo" in D && s(31, C = D.flyTo), "fuzzyMatch" in D && s(32, O = D.fuzzyMatch), "language" in D && s(33, M = D.language), "limit" in D && s(34, F = D.limit), "mapController" in D && s(35, R = D.mapController), "minLength" in D && s(36, Y = D.minLength), "noResultsMessage" in D && s(7, z = D.noResultsMessage), "placeholder" in D && s(8, X = D.placeholder), "proximity" in D && s(37, q = D.proximity), "reverseActive" in D && s(0, Z = D.reverseActive), "reverseButtonTitle" in D && s(9, ee = D.reverseButtonTitle), "searchValue" in D && s(1, j = D.searchValue), "showFullGeometry" in D && s(38, ce = D.showFullGeometry), "showPlaceType" in D && s(10, G = D.showPlaceType), "showResultsWhileTyping" in D && s(39, K = D.showResultsWhileTyping), "selectFirst" in D && s(11, se = D.selectFirst), "flyToSelected" in D && s(40, me = D.flyToSelected), "markerOnSelected" in D && s(41, Re = D.markerOnSelected), "types" in D && s(42, Ee = D.types), "excludeTypes" in D && s(43, Q = D.excludeTypes), "zoom" in D && s(44, Ae = D.zoom), "maxZoom" in D && s(45, Ie = D.maxZoom), "apiUrl" in D && s(46, qe = D.apiUrl), "fetchParameters" in D && s(47, he = D.fetchParameters), "iconsBaseUrl" in D && s(12, ot = D.iconsBaseUrl), "adjustUrlQuery" in D && s(48, On = D.adjustUrlQuery), "$$scope" in D && s(58, g = D.$$scope);
  }, o.$$.update = () => {
    if (o.$$.dirty[0] & /*enableReverse*/
    32 && s(0, Z = w === "always"), o.$$.dirty[0] & /*focused, clearOnBlur*/
    134225920 && setTimeout(() => {
      s(16, cn = I), k && !I && s(1, j = "");
    }), o.$$.dirty[0] & /*searchValue, listFeatures*/
    16386 | o.$$.dirty[1] & /*minLength*/
    32 && j.length < Y && (s(55, ae = void 0), s(14, oe = void 0), s(18, U = void 0), s(54, we = oe)), o.$$.dirty[1] & /*showFullGeometry, picked*/
    16777344 && ce && ae && !ae.address && ae.geometry.type === "Point" && ae.place_type[0] !== "reverse" && $t(ae.id, { byId: !0 }).catch((D) => s(18, U = D)), o.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    50356241 && (R && ae && ae.id !== ue && C && (!ae.bbox || ae.bbox[0] === ae.bbox[2] && ae.bbox[1] === ae.bbox[3] ? R.flyTo(ae.center, ae.id.startsWith("poi.") || ae.id.startsWith("address.") ? Ie : Ae) : R.fitBounds(gs(ae.bbox), 50, Ie), s(14, oe = void 0), s(54, we = void 0), s(15, xe = -1)), s(56, ue = ae == null ? void 0 : ae.id)), o.$$.dirty[0] & /*selectFirst, listFeatures*/
    18432 && se && oe != null && oe.length && s(15, xe = 0), o.$$.dirty[0] & /*selectFirst, searchValue*/
    2050 && (se || s(15, xe = -1)), o.$$.dirty[0] & /*listFeatures*/
    16384 | o.$$.dirty[1] & /*markedFeatures*/
    8388608 && we !== oe && s(54, we = void 0), o.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    81921 | o.$$.dirty[1] & /*mapController, markedFeatures*/
    8388624 && R && R.setEventHandler((D) => {
      switch (D.type) {
        case "mapClick":
          Z && re(D.coordinates);
          break;
        case "markerClick":
          {
            const Se = oe == null ? void 0 : oe.find((Fe) => Fe.id === D.id);
            Se && Pn(Se);
          }
          break;
        case "markerMouseEnter":
          we && s(15, xe = cn ? (oe == null ? void 0 : oe.findIndex((Se) => Se.id === D.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          we && s(15, xe = -1);
          break;
      }
    }), o.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    49152 && s(57, l = oe == null ? void 0 : oe[xe]), o.$$.dirty[1] & /*mapController, selected, flyTo, flyToSelected, maxZoom, zoom*/
    67133969 && R && l && C && me && R.flyTo(l.center, l.id.startsWith("poi.") || l.id.startsWith("address.") ? Ie : Ae), o.$$.dirty[1] & /*markerOnSelected, mapController*/
    1040 && (Re || R == null || R.setMarkers(void 0, void 0)), o.$$.dirty[1] & /*mapController, markerOnSelected, markedFeatures, selected*/
    75498512 && R && Re && !we && (R.setMarkers(l ? [l] : void 0, void 0), R.setSelectedMarker(l ? 0 : -1)), o.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    25165840 && R && R.setMarkers(we, ae), o.$$.dirty[0] & /*selectedItemIndex*/
    32768 | o.$$.dirty[1] & /*markedFeatures, mapController*/
    8388624 && we && R && R.setSelectedMarker(xe), o.$$.dirty[0] & /*searchValue*/
    2 | o.$$.dirty[1] & /*mapController*/
    16 && R) {
      const D = te(j);
      R.setReverseMarker(D ? [D.decimalLongitude, D.decimalLatitude] : void 0);
    }
    o.$$.dirty[1] & /*selected*/
    67108864 && et("select", l), o.$$.dirty[1] & /*picked*/
    16777216 && et("pick", ae), o.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    81920 && et("optionsVisibilityChange", cn && !!oe), o.$$.dirty[0] & /*listFeatures*/
    16384 && et("featuresListed", oe), o.$$.dirty[1] & /*markedFeatures*/
    8388608 && et("featuresMarked", we), o.$$.dirty[0] & /*reverseActive*/
    1 && et("reverseToggle", Z), o.$$.dirty[0] & /*searchValue*/
    2 && et("queryChange", j), o.$$.dirty[0] & /*reverseActive*/
    1 | o.$$.dirty[1] & /*mapController*/
    16 && R && R.indicateReverse(Z);
  }, [
    Z,
    j,
    v,
    _,
    y,
    w,
    A,
    z,
    X,
    ee,
    G,
    se,
    ot,
    I,
    oe,
    xe,
    cn,
    Qe,
    U,
    It,
    Jt,
    fn,
    Mi,
    tt,
    Pn,
    m,
    x,
    k,
    E,
    N,
    b,
    C,
    O,
    M,
    F,
    R,
    Y,
    q,
    ce,
    K,
    me,
    Re,
    Ee,
    Q,
    Ae,
    Ie,
    qe,
    he,
    On,
    ni,
    T,
    ii,
    ke,
    J,
    we,
    ae,
    ue,
    l,
    g,
    h,
    ne,
    Pi,
    Ai,
    An,
    Je,
    en,
    lt,
    ri,
    gn,
    Di,
    si,
    Ct,
    H
  ];
}
let Yo = class extends jt {
  constructor(a) {
    super(), Zt(
      this,
      a,
      Bo,
      zo,
      Ht,
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
var $e = 63710088e-1, fa = {
  centimeters: $e * 100,
  centimetres: $e * 100,
  degrees: 360 / (2 * Math.PI),
  feet: $e * 3.28084,
  inches: $e * 39.37,
  kilometers: $e / 1e3,
  kilometres: $e / 1e3,
  meters: $e,
  metres: $e,
  miles: $e / 1609.344,
  millimeters: $e * 1e3,
  millimetres: $e * 1e3,
  nauticalmiles: $e / 1852,
  radians: 1,
  yards: $e * 1.0936
};
function ei(o, a, s = {}) {
  const l = { type: "Feature" };
  return (s.id === 0 || s.id) && (l.id = s.id), s.bbox && (l.bbox = s.bbox), l.properties = a || {}, l.geometry = o, l;
}
function Uo(o, a, s = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!ws(o[0]) || !ws(o[1]))
    throw new Error("coordinates must contain numbers");
  return ei({
    type: "Point",
    coordinates: o
  }, a, s);
}
function kr(o, a, s = {}) {
  for (const h of o) {
    if (h.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (h[h.length - 1].length !== h[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let g = 0; g < h[h.length - 1].length; g++)
      if (h[h.length - 1][g] !== h[0][g])
        throw new Error("First and last Position are not equivalent.");
  }
  return ei({
    type: "Polygon",
    coordinates: o
  }, a, s);
}
function ln(o, a = {}) {
  const s = { type: "FeatureCollection" };
  return a.id && (s.id = a.id), a.bbox && (s.bbox = a.bbox), s.features = o, s;
}
function ga(o, a, s = {}) {
  return ei({
    type: "MultiPolygon",
    coordinates: o
  }, a, s);
}
function Xo(o, a = "kilometers") {
  const s = fa[a];
  if (!s)
    throw new Error(a + " units is invalid");
  return o * s;
}
function Wo(o, a = "kilometers") {
  const s = fa[a];
  if (!s)
    throw new Error(a + " units is invalid");
  return o / s;
}
function ws(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
/**
 * splaytree v3.1.2
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function Vo(o, a) {
  var s = { label: 0, sent: function() {
    if (g[0] & 1) throw g[1];
    return g[1];
  }, trys: [], ops: [] }, l, h, g, v;
  return v = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
    return this;
  }), v;
  function m(_) {
    return function(k) {
      return x([_, k]);
    };
  }
  function x(_) {
    if (l) throw new TypeError("Generator is already executing.");
    for (; s; ) try {
      if (l = 1, h && (g = _[0] & 2 ? h.return : _[0] ? h.throw || ((g = h.return) && g.call(h), 0) : h.next) && !(g = g.call(h, _[1])).done) return g;
      switch (h = 0, g && (_ = [_[0] & 2, g.value]), _[0]) {
        case 0:
        case 1:
          g = _;
          break;
        case 4:
          return s.label++, { value: _[1], done: !1 };
        case 5:
          s.label++, h = _[1], _ = [0];
          continue;
        case 7:
          _ = s.ops.pop(), s.trys.pop();
          continue;
        default:
          if (g = s.trys, !(g = g.length > 0 && g[g.length - 1]) && (_[0] === 6 || _[0] === 2)) {
            s = 0;
            continue;
          }
          if (_[0] === 3 && (!g || _[1] > g[0] && _[1] < g[3])) {
            s.label = _[1];
            break;
          }
          if (_[0] === 6 && s.label < g[1]) {
            s.label = g[1], g = _;
            break;
          }
          if (g && s.label < g[2]) {
            s.label = g[2], s.ops.push(_);
            break;
          }
          g[2] && s.ops.pop(), s.trys.pop();
          continue;
      }
      _ = a.call(o, s);
    } catch (k) {
      _ = [6, k], h = 0;
    } finally {
      l = g = 0;
    }
    if (_[0] & 5) throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}
var Vt = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(a, s) {
      this.next = null, this.key = a, this.data = s, this.left = null, this.right = null;
    }
    return o;
  }()
);
function Ho(o, a) {
  return o > a ? 1 : o < a ? -1 : 0;
}
function Bt(o, a, s) {
  for (var l = new Vt(null, null), h = l, g = l; ; ) {
    var v = s(o, a.key);
    if (v < 0) {
      if (a.left === null)
        break;
      if (s(o, a.left.key) < 0) {
        var m = a.left;
        if (a.left = m.right, m.right = a, a = m, a.left === null)
          break;
      }
      g.left = a, g = a, a = a.left;
    } else if (v > 0) {
      if (a.right === null)
        break;
      if (s(o, a.right.key) > 0) {
        var m = a.right;
        if (a.right = m.left, m.left = a, a = m, a.right === null)
          break;
      }
      h.right = a, h = a, a = a.right;
    } else
      break;
  }
  return h.right = a.left, g.left = a.right, a.left = l.right, a.right = l.left, a;
}
function nr(o, a, s, l) {
  var h = new Vt(o, a);
  if (s === null)
    return h.left = h.right = null, h;
  s = Bt(o, s, l);
  var g = l(o, s.key);
  return g < 0 ? (h.left = s.left, h.right = s, s.left = null) : g >= 0 && (h.right = s.right, h.left = s, s.right = null), h;
}
function Ss(o, a, s) {
  var l = null, h = null;
  if (a) {
    a = Bt(o, a, s);
    var g = s(a.key, o);
    g === 0 ? (l = a.left, h = a.right) : g < 0 ? (h = a.right, a.right = null, l = a) : (l = a.left, a.left = null, h = a);
  }
  return { left: l, right: h };
}
function Zo(o, a, s) {
  return a === null ? o : (o === null || (a = Bt(o.key, a, s), a.left = o), a);
}
function lr(o, a, s, l, h) {
  if (o) {
    l("" + a + (s ? "└── " : "├── ") + h(o) + `
`);
    var g = a + (s ? "    " : "│   ");
    o.left && lr(o.left, g, !1, l, h), o.right && lr(o.right, g, !0, l, h);
  }
}
var Er = (
  /** @class */
  function() {
    function o(a) {
      a === void 0 && (a = Ho), this._root = null, this._size = 0, this._comparator = a;
    }
    return o.prototype.insert = function(a, s) {
      return this._size++, this._root = nr(a, s, this._root, this._comparator);
    }, o.prototype.add = function(a, s) {
      var l = new Vt(a, s);
      this._root === null && (l.left = l.right = null, this._size++, this._root = l);
      var h = this._comparator, g = Bt(a, this._root, h), v = h(a, g.key);
      return v === 0 ? this._root = g : (v < 0 ? (l.left = g.left, l.right = g, g.left = null) : v > 0 && (l.right = g.right, l.left = g, g.right = null), this._size++, this._root = l), this._root;
    }, o.prototype.remove = function(a) {
      this._root = this._remove(a, this._root, this._comparator);
    }, o.prototype._remove = function(a, s, l) {
      var h;
      if (s === null)
        return null;
      s = Bt(a, s, l);
      var g = l(a, s.key);
      return g === 0 ? (s.left === null ? h = s.right : (h = Bt(a, s.left, l), h.right = s.right), this._size--, h) : s;
    }, o.prototype.pop = function() {
      var a = this._root;
      if (a) {
        for (; a.left; )
          a = a.left;
        return this._root = Bt(a.key, this._root, this._comparator), this._root = this._remove(a.key, this._root, this._comparator), { key: a.key, data: a.data };
      }
      return null;
    }, o.prototype.findStatic = function(a) {
      for (var s = this._root, l = this._comparator; s; ) {
        var h = l(a, s.key);
        if (h === 0)
          return s;
        h < 0 ? s = s.left : s = s.right;
      }
      return null;
    }, o.prototype.find = function(a) {
      return this._root && (this._root = Bt(a, this._root, this._comparator), this._comparator(a, this._root.key) !== 0) ? null : this._root;
    }, o.prototype.contains = function(a) {
      for (var s = this._root, l = this._comparator; s; ) {
        var h = l(a, s.key);
        if (h === 0)
          return !0;
        h < 0 ? s = s.left : s = s.right;
      }
      return !1;
    }, o.prototype.forEach = function(a, s) {
      for (var l = this._root, h = [], g = !1; !g; )
        l !== null ? (h.push(l), l = l.left) : h.length !== 0 ? (l = h.pop(), a.call(s, l), l = l.right) : g = !0;
      return this;
    }, o.prototype.range = function(a, s, l, h) {
      for (var g = [], v = this._comparator, m = this._root, x; g.length !== 0 || m; )
        if (m)
          g.push(m), m = m.left;
        else {
          if (m = g.pop(), x = v(m.key, s), x > 0)
            break;
          if (v(m.key, a) >= 0 && l.call(h, m))
            return this;
          m = m.right;
        }
      return this;
    }, o.prototype.keys = function() {
      var a = [];
      return this.forEach(function(s) {
        var l = s.key;
        return a.push(l);
      }), a;
    }, o.prototype.values = function() {
      var a = [];
      return this.forEach(function(s) {
        var l = s.data;
        return a.push(l);
      }), a;
    }, o.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, o.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, o.prototype.minNode = function(a) {
      if (a === void 0 && (a = this._root), a)
        for (; a.left; )
          a = a.left;
      return a;
    }, o.prototype.maxNode = function(a) {
      if (a === void 0 && (a = this._root), a)
        for (; a.right; )
          a = a.right;
      return a;
    }, o.prototype.at = function(a) {
      for (var s = this._root, l = !1, h = 0, g = []; !l; )
        if (s)
          g.push(s), s = s.left;
        else if (g.length > 0) {
          if (s = g.pop(), h === a)
            return s;
          h++, s = s.right;
        } else
          l = !0;
      return null;
    }, o.prototype.next = function(a) {
      var s = this._root, l = null;
      if (a.right) {
        for (l = a.right; l.left; )
          l = l.left;
        return l;
      }
      for (var h = this._comparator; s; ) {
        var g = h(a.key, s.key);
        if (g === 0)
          break;
        g < 0 ? (l = s, s = s.left) : s = s.right;
      }
      return l;
    }, o.prototype.prev = function(a) {
      var s = this._root, l = null;
      if (a.left !== null) {
        for (l = a.left; l.right; )
          l = l.right;
        return l;
      }
      for (var h = this._comparator; s; ) {
        var g = h(a.key, s.key);
        if (g === 0)
          break;
        g < 0 ? s = s.left : (l = s, s = s.right);
      }
      return l;
    }, o.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, o.prototype.toList = function() {
      return Qo(this._root);
    }, o.prototype.load = function(a, s, l) {
      s === void 0 && (s = []), l === void 0 && (l = !1);
      var h = a.length, g = this._comparator;
      if (l && fr(a, s, 0, h - 1, g), this._root === null)
        this._root = hr(a, s, 0, h), this._size = h;
      else {
        var v = Ko(this.toList(), jo(a, s), g);
        h = this._size + h, this._root = cr({ head: v }, 0, h);
      }
      return this;
    }, o.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(o.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(o.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), o.prototype.toString = function(a) {
      a === void 0 && (a = function(l) {
        return String(l.key);
      });
      var s = [];
      return lr(this._root, "", !0, function(l) {
        return s.push(l);
      }, a), s.join("");
    }, o.prototype.update = function(a, s, l) {
      var h = this._comparator, g = Ss(a, this._root, h), v = g.left, m = g.right;
      h(a, s) < 0 ? m = nr(s, l, m, h) : v = nr(s, l, v, h), this._root = Zo(v, m, h);
    }, o.prototype.split = function(a) {
      return Ss(a, this._root, this._comparator);
    }, o.prototype[Symbol.iterator] = function() {
      var a, s, l;
      return Vo(this, function(h) {
        switch (h.label) {
          case 0:
            a = this._root, s = [], l = !1, h.label = 1;
          case 1:
            return l ? [3, 6] : a === null ? [3, 2] : (s.push(a), a = a.left, [3, 5]);
          case 2:
            return s.length === 0 ? [3, 4] : (a = s.pop(), [4, a]);
          case 3:
            return h.sent(), a = a.right, [3, 5];
          case 4:
            l = !0, h.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, o;
  }()
);
function hr(o, a, s, l) {
  var h = l - s;
  if (h > 0) {
    var g = s + Math.floor(h / 2), v = o[g], m = a[g], x = new Vt(v, m);
    return x.left = hr(o, a, s, g), x.right = hr(o, a, g + 1, l), x;
  }
  return null;
}
function jo(o, a) {
  for (var s = new Vt(null, null), l = s, h = 0; h < o.length; h++)
    l = l.next = new Vt(o[h], a[h]);
  return l.next = null, s.next;
}
function Qo(o) {
  for (var a = o, s = [], l = !1, h = new Vt(null, null), g = h; !l; )
    a ? (s.push(a), a = a.left) : s.length > 0 ? (a = g = g.next = s.pop(), a = a.right) : l = !0;
  return g.next = null, h.next;
}
function cr(o, a, s) {
  var l = s - a;
  if (l > 0) {
    var h = a + Math.floor(l / 2), g = cr(o, a, h), v = o.head;
    return v.left = g, o.head = o.head.next, v.right = cr(o, h + 1, s), v;
  }
  return null;
}
function Ko(o, a, s) {
  for (var l = new Vt(null, null), h = l, g = o, v = a; g !== null && v !== null; )
    s(g.key, v.key) < 0 ? (h.next = g, g = g.next) : (h.next = v, v = v.next), h = h.next;
  return g !== null ? h.next = g : v !== null && (h.next = v), l.next;
}
function fr(o, a, s, l, h) {
  if (!(s >= l)) {
    for (var g = o[s + l >> 1], v = s - 1, m = l + 1; ; ) {
      do
        v++;
      while (h(o[v], g) < 0);
      do
        m--;
      while (h(o[m], g) > 0);
      if (v >= m)
        break;
      var x = o[v];
      o[v] = o[m], o[m] = x, x = a[v], a[v] = a[m], a[m] = x;
    }
    fr(o, a, s, m, h), fr(o, a, m + 1, l, h);
  }
}
const Pt = 11102230246251565e-32, Ue = 134217729, Jo = (3 + 8 * Pt) * Pt;
function ir(o, a, s, l, h) {
  let g, v, m, x, _ = a[0], k = l[0], y = 0, E = 0;
  k > _ == k > -_ ? (g = _, _ = a[++y]) : (g = k, k = l[++E]);
  let N = 0;
  if (y < o && E < s)
    for (k > _ == k > -_ ? (v = _ + g, m = g - (v - _), _ = a[++y]) : (v = k + g, m = g - (v - k), k = l[++E]), g = v, m !== 0 && (h[N++] = m); y < o && E < s; )
      k > _ == k > -_ ? (v = g + _, x = v - g, m = g - (v - x) + (_ - x), _ = a[++y]) : (v = g + k, x = v - g, m = g - (v - x) + (k - x), k = l[++E]), g = v, m !== 0 && (h[N++] = m);
  for (; y < o; )
    v = g + _, x = v - g, m = g - (v - x) + (_ - x), _ = a[++y], g = v, m !== 0 && (h[N++] = m);
  for (; E < s; )
    v = g + k, x = v - g, m = g - (v - x) + (k - x), k = l[++E], g = v, m !== 0 && (h[N++] = m);
  return (g !== 0 || N === 0) && (h[N++] = g), N;
}
function $o(o, a) {
  let s = a[0];
  for (let l = 1; l < o; l++) s += a[l];
  return s;
}
function ti(o) {
  return new Float64Array(o);
}
const el = (3 + 16 * Pt) * Pt, tl = (2 + 12 * Pt) * Pt, nl = (9 + 64 * Pt) * Pt * Pt, wn = ti(4), Ls = ti(8), bs = ti(12), Ts = ti(16), Ze = ti(4);
function il(o, a, s, l, h, g, v) {
  let m, x, _, k, y, E, N, w, A, b, C, O, M, F, R, Y, z, X;
  const q = o - h, Z = s - h, ee = a - g, j = l - g;
  F = q * j, E = Ue * q, N = E - (E - q), w = q - N, E = Ue * j, A = E - (E - j), b = j - A, R = w * b - (F - N * A - w * A - N * b), Y = ee * Z, E = Ue * ee, N = E - (E - ee), w = ee - N, E = Ue * Z, A = E - (E - Z), b = Z - A, z = w * b - (Y - N * A - w * A - N * b), C = R - z, y = R - C, wn[0] = R - (C + y) + (y - z), O = F + C, y = O - F, M = F - (O - y) + (C - y), C = M - Y, y = M - C, wn[1] = M - (C + y) + (y - Y), X = O + C, y = X - O, wn[2] = O - (X - y) + (C - y), wn[3] = X;
  let ce = $o(4, wn), G = tl * v;
  if (ce >= G || -ce >= G || (y = o - q, m = o - (q + y) + (y - h), y = s - Z, _ = s - (Z + y) + (y - h), y = a - ee, x = a - (ee + y) + (y - g), y = l - j, k = l - (j + y) + (y - g), m === 0 && x === 0 && _ === 0 && k === 0) || (G = nl * v + Jo * Math.abs(ce), ce += q * k + j * m - (ee * _ + Z * x), ce >= G || -ce >= G)) return ce;
  F = m * j, E = Ue * m, N = E - (E - m), w = m - N, E = Ue * j, A = E - (E - j), b = j - A, R = w * b - (F - N * A - w * A - N * b), Y = x * Z, E = Ue * x, N = E - (E - x), w = x - N, E = Ue * Z, A = E - (E - Z), b = Z - A, z = w * b - (Y - N * A - w * A - N * b), C = R - z, y = R - C, Ze[0] = R - (C + y) + (y - z), O = F + C, y = O - F, M = F - (O - y) + (C - y), C = M - Y, y = M - C, Ze[1] = M - (C + y) + (y - Y), X = O + C, y = X - O, Ze[2] = O - (X - y) + (C - y), Ze[3] = X;
  const K = ir(4, wn, 4, Ze, Ls);
  F = q * k, E = Ue * q, N = E - (E - q), w = q - N, E = Ue * k, A = E - (E - k), b = k - A, R = w * b - (F - N * A - w * A - N * b), Y = ee * _, E = Ue * ee, N = E - (E - ee), w = ee - N, E = Ue * _, A = E - (E - _), b = _ - A, z = w * b - (Y - N * A - w * A - N * b), C = R - z, y = R - C, Ze[0] = R - (C + y) + (y - z), O = F + C, y = O - F, M = F - (O - y) + (C - y), C = M - Y, y = M - C, Ze[1] = M - (C + y) + (y - Y), X = O + C, y = X - O, Ze[2] = O - (X - y) + (C - y), Ze[3] = X;
  const se = ir(K, Ls, 4, Ze, bs);
  F = m * k, E = Ue * m, N = E - (E - m), w = m - N, E = Ue * k, A = E - (E - k), b = k - A, R = w * b - (F - N * A - w * A - N * b), Y = x * _, E = Ue * x, N = E - (E - x), w = x - N, E = Ue * _, A = E - (E - _), b = _ - A, z = w * b - (Y - N * A - w * A - N * b), C = R - z, y = R - C, Ze[0] = R - (C + y) + (y - z), O = F + C, y = O - F, M = F - (O - y) + (C - y), C = M - Y, y = M - C, Ze[1] = M - (C + y) + (y - Y), X = O + C, y = X - O, Ze[2] = O - (X - y) + (C - y), Ze[3] = X;
  const me = ir(se, bs, 4, Ze, Ts);
  return Ts[me - 1];
}
function rl(o, a, s, l, h, g) {
  const v = (a - g) * (s - h), m = (o - h) * (l - g), x = v - m, _ = Math.abs(v + m);
  return Math.abs(x) >= el * _ ? x : -il(o, a, s, l, h, g, _);
}
const Vn = (o, a) => o.ll.x <= a.x && a.x <= o.ur.x && o.ll.y <= a.y && a.y <= o.ur.y, gr = (o, a) => {
  if (a.ur.x < o.ll.x || o.ur.x < a.ll.x || a.ur.y < o.ll.y || o.ur.y < a.ll.y) return null;
  const s = o.ll.x < a.ll.x ? a.ll.x : o.ll.x, l = o.ur.x < a.ur.x ? o.ur.x : a.ur.x, h = o.ll.y < a.ll.y ? a.ll.y : o.ll.y, g = o.ur.y < a.ur.y ? o.ur.y : a.ur.y;
  return {
    ll: {
      x: s,
      y: h
    },
    ur: {
      x: l,
      y: g
    }
  };
};
let Yt = Number.EPSILON;
Yt === void 0 && (Yt = Math.pow(2, -52));
const sl = Yt * Yt, Cs = (o, a) => {
  if (-Yt < o && o < Yt && -Yt < a && a < Yt)
    return 0;
  const s = o - a;
  return s * s < sl * o * a ? 0 : o < a ? -1 : 1;
};
class al {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new Rs(), this.yRounder = new Rs();
  }
  round(a, s) {
    return {
      x: this.xRounder.round(a),
      y: this.yRounder.round(s)
    };
  }
}
class Rs {
  constructor() {
    this.tree = new Er(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(a) {
    const s = this.tree.add(a), l = this.tree.prev(s);
    if (l !== null && Cs(s.key, l.key) === 0)
      return this.tree.remove(a), l.key;
    const h = this.tree.next(s);
    return h !== null && Cs(s.key, h.key) === 0 ? (this.tree.remove(a), h.key) : a;
  }
}
const Jn = new al(), xi = (o, a) => o.x * a.y - o.y * a.x, da = (o, a) => o.x * a.x + o.y * a.y, Os = (o, a, s) => {
  const l = rl(o.x, o.y, a.x, a.y, s.x, s.y);
  return l > 0 ? -1 : l < 0 ? 1 : 0;
}, wi = (o) => Math.sqrt(da(o, o)), ul = (o, a, s) => {
  const l = {
    x: a.x - o.x,
    y: a.y - o.y
  }, h = {
    x: s.x - o.x,
    y: s.y - o.y
  };
  return xi(h, l) / wi(h) / wi(l);
}, ol = (o, a, s) => {
  const l = {
    x: a.x - o.x,
    y: a.y - o.y
  }, h = {
    x: s.x - o.x,
    y: s.y - o.y
  };
  return da(h, l) / wi(h) / wi(l);
}, Ms = (o, a, s) => a.y === 0 ? null : {
  x: o.x + a.x / a.y * (s - o.y),
  y: s
}, Ps = (o, a, s) => a.x === 0 ? null : {
  x: s,
  y: o.y + a.y / a.x * (s - o.x)
}, ll = (o, a, s, l) => {
  if (a.x === 0) return Ps(s, l, o.x);
  if (l.x === 0) return Ps(o, a, s.x);
  if (a.y === 0) return Ms(s, l, o.y);
  if (l.y === 0) return Ms(o, a, s.y);
  const h = xi(a, l);
  if (h == 0) return null;
  const g = {
    x: s.x - o.x,
    y: s.y - o.y
  }, v = xi(g, a) / h, m = xi(g, l) / h, x = o.x + m * a.x, _ = s.x + v * l.x, k = o.y + m * a.y, y = s.y + v * l.y, E = (x + _) / 2, N = (k + y) / 2;
  return {
    x: E,
    y: N
  };
};
class yt {
  // for ordering sweep events in the sweep event queue
  static compare(a, s) {
    const l = yt.comparePoints(a.point, s.point);
    return l !== 0 ? l : (a.point !== s.point && a.link(s), a.isLeft !== s.isLeft ? a.isLeft ? 1 : -1 : Ut.compare(a.segment, s.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(a, s) {
    return a.x < s.x ? -1 : a.x > s.x ? 1 : a.y < s.y ? -1 : a.y > s.y ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(a, s) {
    a.events === void 0 ? a.events = [this] : a.events.push(this), this.point = a, this.isLeft = s;
  }
  link(a) {
    if (a.point === this.point)
      throw new Error("Tried to link already linked events");
    const s = a.point.events;
    for (let l = 0, h = s.length; l < h; l++) {
      const g = s[l];
      this.point.events.push(g), g.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const a = this.point.events.length;
    for (let s = 0; s < a; s++) {
      const l = this.point.events[s];
      if (l.segment.consumedBy === void 0)
        for (let h = s + 1; h < a; h++) {
          const g = this.point.events[h];
          g.consumedBy === void 0 && l.otherSE.point.events === g.otherSE.point.events && l.segment.consume(g.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const a = [];
    for (let s = 0, l = this.point.events.length; s < l; s++) {
      const h = this.point.events[s];
      h !== this && !h.segment.ringOut && h.segment.isInResult() && a.push(h);
    }
    return a;
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
  getLeftmostComparator(a) {
    const s = /* @__PURE__ */ new Map(), l = (h) => {
      const g = h.otherSE;
      s.set(h, {
        sine: ul(this.point, a.point, g.point),
        cosine: ol(this.point, a.point, g.point)
      });
    };
    return (h, g) => {
      s.has(h) || l(h), s.has(g) || l(g);
      const {
        sine: v,
        cosine: m
      } = s.get(h), {
        sine: x,
        cosine: _
      } = s.get(g);
      return v >= 0 && x >= 0 ? m < _ ? 1 : m > _ ? -1 : 0 : v < 0 && x < 0 ? m < _ ? -1 : m > _ ? 1 : 0 : x < v ? -1 : x > v ? 1 : 0;
    };
  }
}
let hl = 0;
class Ut {
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
  static compare(a, s) {
    const l = a.leftSE.point.x, h = s.leftSE.point.x, g = a.rightSE.point.x, v = s.rightSE.point.x;
    if (v < l) return 1;
    if (g < h) return -1;
    const m = a.leftSE.point.y, x = s.leftSE.point.y, _ = a.rightSE.point.y, k = s.rightSE.point.y;
    if (l < h) {
      if (x < m && x < _) return 1;
      if (x > m && x > _) return -1;
      const y = a.comparePoint(s.leftSE.point);
      if (y < 0) return 1;
      if (y > 0) return -1;
      const E = s.comparePoint(a.rightSE.point);
      return E !== 0 ? E : -1;
    }
    if (l > h) {
      if (m < x && m < k) return -1;
      if (m > x && m > k) return 1;
      const y = s.comparePoint(a.leftSE.point);
      if (y !== 0) return y;
      const E = a.comparePoint(s.rightSE.point);
      return E < 0 ? 1 : E > 0 ? -1 : 1;
    }
    if (m < x) return -1;
    if (m > x) return 1;
    if (g < v) {
      const y = s.comparePoint(a.rightSE.point);
      if (y !== 0) return y;
    }
    if (g > v) {
      const y = a.comparePoint(s.rightSE.point);
      if (y < 0) return 1;
      if (y > 0) return -1;
    }
    if (g !== v) {
      const y = _ - m, E = g - l, N = k - x, w = v - h;
      if (y > E && N < w) return 1;
      if (y < E && N > w) return -1;
    }
    return g > v ? 1 : g < v || _ < k ? -1 : _ > k ? 1 : a.id < s.id ? -1 : a.id > s.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(a, s, l, h) {
    this.id = ++hl, this.leftSE = a, a.segment = this, a.otherSE = s, this.rightSE = s, s.segment = this, s.otherSE = a, this.rings = l, this.windings = h;
  }
  static fromRing(a, s, l) {
    let h, g, v;
    const m = yt.comparePoints(a, s);
    if (m < 0)
      h = a, g = s, v = 1;
    else if (m > 0)
      h = s, g = a, v = -1;
    else throw new Error(`Tried to create degenerate segment at [${a.x}, ${a.y}]`);
    const x = new yt(h, !0), _ = new yt(g, !1);
    return new Ut(x, _, [l], [v]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(a) {
    this.rightSE = a, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const a = this.leftSE.point.y, s = this.rightSE.point.y;
    return {
      ll: {
        x: this.leftSE.point.x,
        y: a < s ? a : s
      },
      ur: {
        x: this.rightSE.point.x,
        y: a > s ? a : s
      }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x - this.leftSE.point.x,
      y: this.rightSE.point.y - this.leftSE.point.y
    };
  }
  isAnEndpoint(a) {
    return a.x === this.leftSE.point.x && a.y === this.leftSE.point.y || a.x === this.rightSE.point.x && a.y === this.rightSE.point.y;
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
  comparePoint(a) {
    if (this.isAnEndpoint(a)) return 0;
    const s = this.leftSE.point, l = this.rightSE.point, h = this.vector();
    if (s.x === l.x)
      return a.x === s.x ? 0 : a.x < s.x ? 1 : -1;
    const g = (a.y - s.y) / h.y, v = s.x + g * h.x;
    if (a.x === v) return 0;
    const m = (a.x - s.x) / h.x, x = s.y + m * h.y;
    return a.y === x ? 0 : a.y < x ? -1 : 1;
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
  getIntersection(a) {
    const s = this.bbox(), l = a.bbox(), h = gr(s, l);
    if (h === null) return null;
    const g = this.leftSE.point, v = this.rightSE.point, m = a.leftSE.point, x = a.rightSE.point, _ = Vn(s, m) && this.comparePoint(m) === 0, k = Vn(l, g) && a.comparePoint(g) === 0, y = Vn(s, x) && this.comparePoint(x) === 0, E = Vn(l, v) && a.comparePoint(v) === 0;
    if (k && _)
      return E && !y ? v : !E && y ? x : null;
    if (k)
      return y && g.x === x.x && g.y === x.y ? null : g;
    if (_)
      return E && v.x === m.x && v.y === m.y ? null : m;
    if (E && y) return null;
    if (E) return v;
    if (y) return x;
    const N = ll(g, this.vector(), m, a.vector());
    return N === null || !Vn(h, N) ? null : Jn.round(N.x, N.y);
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
  split(a) {
    const s = [], l = a.events !== void 0, h = new yt(a, !0), g = new yt(a, !1), v = this.rightSE;
    this.replaceRightSE(g), s.push(g), s.push(h);
    const m = new Ut(h, v, this.rings.slice(), this.windings.slice());
    return yt.comparePoints(m.leftSE.point, m.rightSE.point) > 0 && m.swapEvents(), yt.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), l && (h.checkForConsuming(), g.checkForConsuming()), s;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const a = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = a, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let s = 0, l = this.windings.length; s < l; s++)
      this.windings[s] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(a) {
    let s = this, l = a;
    for (; s.consumedBy; ) s = s.consumedBy;
    for (; l.consumedBy; ) l = l.consumedBy;
    const h = Ut.compare(s, l);
    if (h !== 0) {
      if (h > 0) {
        const g = s;
        s = l, l = g;
      }
      if (s.prev === l) {
        const g = s;
        s = l, l = g;
      }
      for (let g = 0, v = l.rings.length; g < v; g++) {
        const m = l.rings[g], x = l.windings[g], _ = s.rings.indexOf(m);
        _ === -1 ? (s.rings.push(m), s.windings.push(x)) : s.windings[_] += x;
      }
      l.rings = null, l.windings = null, l.consumedBy = s, l.leftSE.consumedBy = s.leftSE, l.rightSE.consumedBy = s.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev) this._beforeState = {
      rings: [],
      windings: [],
      multiPolys: []
    };
    else {
      const a = this.prev.consumedBy || this.prev;
      this._beforeState = a.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const a = this.beforeState();
    this._afterState = {
      rings: a.rings.slice(0),
      windings: a.windings.slice(0),
      multiPolys: []
    };
    const s = this._afterState.rings, l = this._afterState.windings, h = this._afterState.multiPolys;
    for (let m = 0, x = this.rings.length; m < x; m++) {
      const _ = this.rings[m], k = this.windings[m], y = s.indexOf(_);
      y === -1 ? (s.push(_), l.push(k)) : l[y] += k;
    }
    const g = [], v = [];
    for (let m = 0, x = s.length; m < x; m++) {
      if (l[m] === 0) continue;
      const _ = s[m], k = _.poly;
      if (v.indexOf(k) === -1)
        if (_.isExterior) g.push(k);
        else {
          v.indexOf(k) === -1 && v.push(k);
          const y = g.indexOf(_.poly);
          y !== -1 && g.splice(y, 1);
        }
    }
    for (let m = 0, x = g.length; m < x; m++) {
      const _ = g[m].multiPoly;
      h.indexOf(_) === -1 && h.push(_);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const a = this.beforeState().multiPolys, s = this.afterState().multiPolys;
    switch (xt.type) {
      case "union": {
        const l = a.length === 0, h = s.length === 0;
        this._isInResult = l !== h;
        break;
      }
      case "intersection": {
        let l, h;
        a.length < s.length ? (l = a.length, h = s.length) : (l = s.length, h = a.length), this._isInResult = h === xt.numMultiPolys && l < h;
        break;
      }
      case "xor": {
        const l = Math.abs(a.length - s.length);
        this._isInResult = l % 2 === 1;
        break;
      }
      case "difference": {
        const l = (h) => h.length === 1 && h[0].isSubject;
        this._isInResult = l(a) !== l(s);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${xt.type}`);
    }
    return this._isInResult;
  }
}
class As {
  constructor(a, s, l) {
    if (!Array.isArray(a) || a.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = s, this.isExterior = l, this.segments = [], typeof a[0][0] != "number" || typeof a[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const h = Jn.round(a[0][0], a[0][1]);
    this.bbox = {
      ll: {
        x: h.x,
        y: h.y
      },
      ur: {
        x: h.x,
        y: h.y
      }
    };
    let g = h;
    for (let v = 1, m = a.length; v < m; v++) {
      if (typeof a[v][0] != "number" || typeof a[v][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let x = Jn.round(a[v][0], a[v][1]);
      x.x === g.x && x.y === g.y || (this.segments.push(Ut.fromRing(g, x, this)), x.x < this.bbox.ll.x && (this.bbox.ll.x = x.x), x.y < this.bbox.ll.y && (this.bbox.ll.y = x.y), x.x > this.bbox.ur.x && (this.bbox.ur.x = x.x), x.y > this.bbox.ur.y && (this.bbox.ur.y = x.y), g = x);
    }
    (h.x !== g.x || h.y !== g.y) && this.segments.push(Ut.fromRing(g, h, this));
  }
  getSweepEvents() {
    const a = [];
    for (let s = 0, l = this.segments.length; s < l; s++) {
      const h = this.segments[s];
      a.push(h.leftSE), a.push(h.rightSE);
    }
    return a;
  }
}
class cl {
  constructor(a, s) {
    if (!Array.isArray(a))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new As(a[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let l = 1, h = a.length; l < h; l++) {
      const g = new As(a[l], this, !1);
      g.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = g.bbox.ll.x), g.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = g.bbox.ll.y), g.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = g.bbox.ur.x), g.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = g.bbox.ur.y), this.interiorRings.push(g);
    }
    this.multiPoly = s;
  }
  getSweepEvents() {
    const a = this.exteriorRing.getSweepEvents();
    for (let s = 0, l = this.interiorRings.length; s < l; s++) {
      const h = this.interiorRings[s].getSweepEvents();
      for (let g = 0, v = h.length; g < v; g++)
        a.push(h[g]);
    }
    return a;
  }
}
class Ds {
  constructor(a, s) {
    if (!Array.isArray(a))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof a[0][0][0] == "number" && (a = [a]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: {
        x: Number.POSITIVE_INFINITY,
        y: Number.POSITIVE_INFINITY
      },
      ur: {
        x: Number.NEGATIVE_INFINITY,
        y: Number.NEGATIVE_INFINITY
      }
    };
    for (let l = 0, h = a.length; l < h; l++) {
      const g = new cl(a[l], this);
      g.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = g.bbox.ll.x), g.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = g.bbox.ll.y), g.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = g.bbox.ur.x), g.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = g.bbox.ur.y), this.polys.push(g);
    }
    this.isSubject = s;
  }
  getSweepEvents() {
    const a = [];
    for (let s = 0, l = this.polys.length; s < l; s++) {
      const h = this.polys[s].getSweepEvents();
      for (let g = 0, v = h.length; g < v; g++)
        a.push(h[g]);
    }
    return a;
  }
}
class Si {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(a) {
    const s = [];
    for (let l = 0, h = a.length; l < h; l++) {
      const g = a[l];
      if (!g.isInResult() || g.ringOut) continue;
      let v = null, m = g.leftSE, x = g.rightSE;
      const _ = [m], k = m.point, y = [];
      for (; v = m, m = x, _.push(m), m.point !== k; )
        for (; ; ) {
          const E = m.getAvailableLinkedEvents();
          if (E.length === 0) {
            const A = _[0].point, b = _[_.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${A.x}, ${A.y}]. Last matching segment found ends at [${b.x}, ${b.y}].`);
          }
          if (E.length === 1) {
            x = E[0].otherSE;
            break;
          }
          let N = null;
          for (let A = 0, b = y.length; A < b; A++)
            if (y[A].point === m.point) {
              N = A;
              break;
            }
          if (N !== null) {
            const A = y.splice(N)[0], b = _.splice(A.index);
            b.unshift(b[0].otherSE), s.push(new Si(b.reverse()));
            continue;
          }
          y.push({
            index: _.length,
            point: m.point
          });
          const w = m.getLeftmostComparator(v);
          x = E.sort(w)[0].otherSE;
          break;
        }
      s.push(new Si(_));
    }
    return s;
  }
  constructor(a) {
    this.events = a;
    for (let s = 0, l = a.length; s < l; s++)
      a[s].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let a = this.events[0].point;
    const s = [a];
    for (let _ = 1, k = this.events.length - 1; _ < k; _++) {
      const y = this.events[_].point, E = this.events[_ + 1].point;
      Os(y, a, E) !== 0 && (s.push(y), a = y);
    }
    if (s.length === 1) return null;
    const l = s[0], h = s[1];
    Os(l, a, h) === 0 && s.shift(), s.push(s[0]);
    const g = this.isExteriorRing() ? 1 : -1, v = this.isExteriorRing() ? 0 : s.length - 1, m = this.isExteriorRing() ? s.length : -1, x = [];
    for (let _ = v; _ != m; _ += g) x.push([s[_].x, s[_].y]);
    return x;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const a = this.enclosingRing();
      this._isExteriorRing = a ? !a.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let a = this.events[0];
    for (let h = 1, g = this.events.length; h < g; h++) {
      const v = this.events[h];
      yt.compare(a, v) > 0 && (a = v);
    }
    let s = a.segment.prevInResult(), l = s ? s.prevInResult() : null;
    for (; ; ) {
      if (!s) return null;
      if (!l) return s.ringOut;
      if (l.ringOut !== s.ringOut)
        return l.ringOut.enclosingRing() !== s.ringOut ? s.ringOut : s.ringOut.enclosingRing();
      s = l.prevInResult(), l = s ? s.prevInResult() : null;
    }
  }
}
class Fs {
  constructor(a) {
    this.exteriorRing = a, a.poly = this, this.interiorRings = [];
  }
  addInterior(a) {
    this.interiorRings.push(a), a.poly = this;
  }
  getGeom() {
    const a = [this.exteriorRing.getGeom()];
    if (a[0] === null) return null;
    for (let s = 0, l = this.interiorRings.length; s < l; s++) {
      const h = this.interiorRings[s].getGeom();
      h !== null && a.push(h);
    }
    return a;
  }
}
class fl {
  constructor(a) {
    this.rings = a, this.polys = this._composePolys(a);
  }
  getGeom() {
    const a = [];
    for (let s = 0, l = this.polys.length; s < l; s++) {
      const h = this.polys[s].getGeom();
      h !== null && a.push(h);
    }
    return a;
  }
  _composePolys(a) {
    const s = [];
    for (let l = 0, h = a.length; l < h; l++) {
      const g = a[l];
      if (!g.poly)
        if (g.isExteriorRing()) s.push(new Fs(g));
        else {
          const v = g.enclosingRing();
          v.poly || s.push(new Fs(v)), v.poly.addInterior(g);
        }
    }
    return s;
  }
}
class gl {
  constructor(a) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ut.compare;
    this.queue = a, this.tree = new Er(s), this.segments = [];
  }
  process(a) {
    const s = a.segment, l = [];
    if (a.consumedBy)
      return a.isLeft ? this.queue.remove(a.otherSE) : this.tree.remove(s), l;
    const h = a.isLeft ? this.tree.add(s) : this.tree.find(s);
    if (!h) throw new Error(`Unable to find segment #${s.id} [${s.leftSE.point.x}, ${s.leftSE.point.y}] -> [${s.rightSE.point.x}, ${s.rightSE.point.y}] in SweepLine tree.`);
    let g = h, v = h, m, x;
    for (; m === void 0; )
      g = this.tree.prev(g), g === null ? m = null : g.key.consumedBy === void 0 && (m = g.key);
    for (; x === void 0; )
      v = this.tree.next(v), v === null ? x = null : v.key.consumedBy === void 0 && (x = v.key);
    if (a.isLeft) {
      let _ = null;
      if (m) {
        const y = m.getIntersection(s);
        if (y !== null && (s.isAnEndpoint(y) || (_ = y), !m.isAnEndpoint(y))) {
          const E = this._splitSafely(m, y);
          for (let N = 0, w = E.length; N < w; N++)
            l.push(E[N]);
        }
      }
      let k = null;
      if (x) {
        const y = x.getIntersection(s);
        if (y !== null && (s.isAnEndpoint(y) || (k = y), !x.isAnEndpoint(y))) {
          const E = this._splitSafely(x, y);
          for (let N = 0, w = E.length; N < w; N++)
            l.push(E[N]);
        }
      }
      if (_ !== null || k !== null) {
        let y = null;
        _ === null ? y = k : k === null ? y = _ : y = yt.comparePoints(_, k) <= 0 ? _ : k, this.queue.remove(s.rightSE), l.push(s.rightSE);
        const E = s.split(y);
        for (let N = 0, w = E.length; N < w; N++)
          l.push(E[N]);
      }
      l.length > 0 ? (this.tree.remove(s), l.push(a)) : (this.segments.push(s), s.prev = m);
    } else {
      if (m && x) {
        const _ = m.getIntersection(x);
        if (_ !== null) {
          if (!m.isAnEndpoint(_)) {
            const k = this._splitSafely(m, _);
            for (let y = 0, E = k.length; y < E; y++)
              l.push(k[y]);
          }
          if (!x.isAnEndpoint(_)) {
            const k = this._splitSafely(x, _);
            for (let y = 0, E = k.length; y < E; y++)
              l.push(k[y]);
          }
        }
      }
      this.tree.remove(s);
    }
    return l;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(a, s) {
    this.tree.remove(a);
    const l = a.rightSE;
    this.queue.remove(l);
    const h = a.split(s);
    return h.push(l), a.consumedBy === void 0 && this.tree.add(a), h;
  }
}
const Gs = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, dl = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class ml {
  run(a, s, l) {
    xt.type = a, Jn.reset();
    const h = [new Ds(s, !0)];
    for (let y = 0, E = l.length; y < E; y++)
      h.push(new Ds(l[y], !1));
    if (xt.numMultiPolys = h.length, xt.type === "difference") {
      const y = h[0];
      let E = 1;
      for (; E < h.length; )
        gr(h[E].bbox, y.bbox) !== null ? E++ : h.splice(E, 1);
    }
    if (xt.type === "intersection")
      for (let y = 0, E = h.length; y < E; y++) {
        const N = h[y];
        for (let w = y + 1, A = h.length; w < A; w++)
          if (gr(N.bbox, h[w].bbox) === null) return [];
      }
    const g = new Er(yt.compare);
    for (let y = 0, E = h.length; y < E; y++) {
      const N = h[y].getSweepEvents();
      for (let w = 0, A = N.length; w < A; w++)
        if (g.insert(N[w]), g.size > Gs)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const v = new gl(g);
    let m = g.size, x = g.pop();
    for (; x; ) {
      const y = x.key;
      if (g.size === m) {
        const N = y.segment;
        throw new Error(`Unable to pop() ${y.isLeft ? "left" : "right"} SweepEvent [${y.point.x}, ${y.point.y}] from segment #${N.id} [${N.leftSE.point.x}, ${N.leftSE.point.y}] -> [${N.rightSE.point.x}, ${N.rightSE.point.y}] from queue.`);
      }
      if (g.size > Gs)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (v.segments.length > dl)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const E = v.process(y);
      for (let N = 0, w = E.length; N < w; N++) {
        const A = E[N];
        A.consumedBy === void 0 && g.insert(A);
      }
      m = g.size, x = g.pop();
    }
    Jn.reset();
    const _ = Si.factory(v.segments);
    return new fl(_).getGeom();
  }
}
const xt = new ml(), vl = function(o) {
  for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    s[l - 1] = arguments[l];
  return xt.run("union", o, s);
}, yl = function(o) {
  for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    s[l - 1] = arguments[l];
  return xt.run("intersection", o, s);
}, pl = function(o) {
  for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    s[l - 1] = arguments[l];
  return xt.run("xor", o, s);
}, _l = function(o) {
  for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    s[l - 1] = arguments[l];
  return xt.run("difference", o, s);
};
var ma = {
  union: vl,
  intersection: yl,
  xor: pl,
  difference: _l
};
function va(o, a, s) {
  if (o !== null)
    for (var l, h, g, v, m, x, _, k = 0, y = 0, E, N = o.type, w = N === "FeatureCollection", A = N === "Feature", b = w ? o.features.length : 1, C = 0; C < b; C++) {
      _ = w ? o.features[C].geometry : A ? o.geometry : o, E = _ ? _.type === "GeometryCollection" : !1, m = E ? _.geometries.length : 1;
      for (var O = 0; O < m; O++) {
        var M = 0, F = 0;
        if (v = E ? _.geometries[O] : _, v !== null) {
          x = v.coordinates;
          var R = v.type;
          switch (k = 0, R) {
            case null:
              break;
            case "Point":
              if (a(
                x,
                y,
                C,
                M,
                F
              ) === !1)
                return !1;
              y++, M++;
              break;
            case "LineString":
            case "MultiPoint":
              for (l = 0; l < x.length; l++) {
                if (a(
                  x[l],
                  y,
                  C,
                  M,
                  F
                ) === !1)
                  return !1;
                y++, R === "MultiPoint" && M++;
              }
              R === "LineString" && M++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (l = 0; l < x.length; l++) {
                for (h = 0; h < x[l].length - k; h++) {
                  if (a(
                    x[l][h],
                    y,
                    C,
                    M,
                    F
                  ) === !1)
                    return !1;
                  y++;
                }
                R === "MultiLineString" && M++, R === "Polygon" && F++;
              }
              R === "Polygon" && M++;
              break;
            case "MultiPolygon":
              for (l = 0; l < x.length; l++) {
                for (F = 0, h = 0; h < x[l].length; h++) {
                  for (g = 0; g < x[l][h].length - k; g++) {
                    if (a(
                      x[l][h][g],
                      y,
                      C,
                      M,
                      F
                    ) === !1)
                      return !1;
                    y++;
                  }
                  F++;
                }
                M++;
              }
              break;
            case "GeometryCollection":
              for (l = 0; l < v.geometries.length; l++)
                if (va(v.geometries[l], a) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function qs(o, a) {
  if (o.type === "Feature")
    a(o, 0);
  else if (o.type === "FeatureCollection")
    for (var s = 0; s < o.features.length && a(o.features[s], s) !== !1; s++)
      ;
}
function Oi(o, a) {
  var s, l, h, g, v, m, x, _, k, y, E = 0, N = o.type === "FeatureCollection", w = o.type === "Feature", A = N ? o.features.length : 1;
  for (s = 0; s < A; s++) {
    for (m = N ? o.features[s].geometry : w ? o.geometry : o, _ = N ? o.features[s].properties : w ? o.properties : {}, k = N ? o.features[s].bbox : w ? o.bbox : void 0, y = N ? o.features[s].id : w ? o.id : void 0, x = m ? m.type === "GeometryCollection" : !1, v = x ? m.geometries.length : 1, h = 0; h < v; h++) {
      if (g = x ? m.geometries[h] : m, g === null) {
        if (a(
          null,
          E,
          _,
          k,
          y
        ) === !1)
          return !1;
        continue;
      }
      switch (g.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (a(
            g,
            E,
            _,
            k,
            y
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (l = 0; l < g.geometries.length; l++)
            if (a(
              g.geometries[l],
              E,
              _,
              k,
              y
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    E++;
  }
}
function kl(o, a = {}) {
  const s = [];
  if (Oi(o, (h) => {
    s.push(h.coordinates);
  }), s.length < 2)
    throw new Error("Must have at least 2 geometries");
  const l = ma.union(s[0], ...s.slice(1));
  return l.length === 0 ? null : l.length === 1 ? kr(l[0], a.properties) : ga(l, a.properties);
}
var El = kl;
function xl(o, a = {}) {
  if (o.bbox != null && a.recompute !== !0)
    return o.bbox;
  const s = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return va(o, (l) => {
    s[0] > l[0] && (s[0] = l[0]), s[1] > l[1] && (s[1] = l[1]), s[2] < l[0] && (s[2] = l[0]), s[3] < l[1] && (s[3] = l[1]);
  }), s;
}
function Nl(o, a = {}) {
  const s = xl(o), l = (s[0] + s[2]) / 2, h = (s[1] + s[3]) / 2;
  return Uo([l, h], a.properties, a);
}
var Il = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wl(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ya = { exports: {} };
(function(o, a) {
  (function(s, l) {
    o.exports = l();
  })(Il, function() {
    function s(r, e) {
      if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function l(r, e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
      }
    }
    function h(r, e, t) {
      return e && l(r.prototype, e), t && l(r, t), r;
    }
    function g(r, e) {
      if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
      r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), e && m(r, e);
    }
    function v(r) {
      return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, v(r);
    }
    function m(r, e) {
      return m = Object.setPrototypeOf || function(t, n) {
        return t.__proto__ = n, t;
      }, m(r, e);
    }
    function x() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function _(r, e, t) {
      return _ = x() ? Reflect.construct : function(n, i, u) {
        var c = [null];
        c.push.apply(c, i);
        var f = new (Function.bind.apply(n, c))();
        return u && m(f, u.prototype), f;
      }, _.apply(null, arguments);
    }
    function k(r) {
      var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return k = function(t) {
        if (t === null || (n = t, Function.toString.call(n).indexOf("[native code]") === -1)) return t;
        var n;
        if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
        if (e !== void 0) {
          if (e.has(t)) return e.get(t);
          e.set(t, i);
        }
        function i() {
          return _(t, arguments, v(this).constructor);
        }
        return i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), m(i, t);
      }, k(r);
    }
    function y(r) {
      if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return r;
    }
    function E(r, e) {
      if (e && (typeof e == "object" || typeof e == "function")) return e;
      if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return y(r);
    }
    function N(r) {
      var e = x();
      return function() {
        var t, n = v(r);
        if (e) {
          var i = v(this).constructor;
          t = Reflect.construct(n, arguments, i);
        } else t = n.apply(this, arguments);
        return E(this, t);
      };
    }
    function w(r, e, t) {
      return w = typeof Reflect < "u" && Reflect.get ? Reflect.get : function(n, i, u) {
        var c = function(d, p) {
          for (; !Object.prototype.hasOwnProperty.call(d, p) && (d = v(d)) !== null; ) ;
          return d;
        }(n, i);
        if (c) {
          var f = Object.getOwnPropertyDescriptor(c, i);
          return f.get ? f.get.call(u) : f.value;
        }
      }, w(r, e, t || r);
    }
    function A(r) {
      return function(e) {
        if (Array.isArray(e)) return C(e);
      }(r) || function(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
      }(r) || b(r) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function b(r, e) {
      if (r) {
        if (typeof r == "string") return C(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? C(r, e) : void 0;
      }
    }
    function C(r, e) {
      (e == null || e > r.length) && (e = r.length);
      for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
      return n;
    }
    function O(r, e) {
      var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
      if (!t) {
        if (Array.isArray(r) || (t = b(r)) || e) {
          t && (r = t);
          var n = 0, i = function() {
          };
          return { s: i, n: function() {
            return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
          }, e: function(d) {
            throw d;
          }, f: i };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var u, c = !0, f = !1;
      return { s: function() {
        t = t.call(r);
      }, n: function() {
        var d = t.next();
        return c = d.done, d;
      }, e: function(d) {
        f = !0, u = d;
      }, f: function() {
        try {
          c || t.return == null || t.return();
        } finally {
          if (f) throw u;
        }
      } };
    }
    var M = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getEndCapStyle", value: function() {
        return this._endCapStyle;
      } }, { key: "isSingleSided", value: function() {
        return this._isSingleSided;
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._quadrantSegments = e, this._quadrantSegments === 0 && (this._joinStyle = r.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = r.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), e <= 0 && (this._quadrantSegments = 1), this._joinStyle !== r.JOIN_ROUND && (this._quadrantSegments = r.DEFAULT_QUADRANT_SEGMENTS);
      } }, { key: "getJoinStyle", value: function() {
        return this._joinStyle;
      } }, { key: "setJoinStyle", value: function(e) {
        this._joinStyle = e;
      } }, { key: "setSimplifyFactor", value: function(e) {
        this._simplifyFactor = e < 0 ? 0 : e;
      } }, { key: "getSimplifyFactor", value: function() {
        return this._simplifyFactor;
      } }, { key: "getQuadrantSegments", value: function() {
        return this._quadrantSegments;
      } }, { key: "setEndCapStyle", value: function(e) {
        this._endCapStyle = e;
      } }, { key: "getMitreLimit", value: function() {
        return this._mitreLimit;
      } }, { key: "setMitreLimit", value: function(e) {
        this._mitreLimit = e;
      } }, { key: "setSingleSided", value: function(e) {
        this._isSingleSided = e;
      } }], [{ key: "constructor_", value: function() {
        if (this._quadrantSegments = r.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = r.CAP_ROUND, this._joinStyle = r.JOIN_ROUND, this._mitreLimit = r.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = r.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setQuadrantSegments(e);
          } else if (arguments.length === 2) {
            var t = arguments[0], n = arguments[1];
            this.setQuadrantSegments(t), this.setEndCapStyle(n);
          } else if (arguments.length === 4) {
            var i = arguments[0], u = arguments[1], c = arguments[2], f = arguments[3];
            this.setQuadrantSegments(i), this.setEndCapStyle(u), this.setJoinStyle(c), this.setMitreLimit(f);
          }
        }
      } }, { key: "bufferDistanceError", value: function(e) {
        var t = Math.PI / 2 / e;
        return 1 - Math.cos(t / 2);
      } }]), r;
    }();
    M.CAP_ROUND = 1, M.CAP_FLAT = 2, M.CAP_SQUARE = 3, M.JOIN_ROUND = 1, M.JOIN_MITRE = 2, M.JOIN_BEVEL = 3, M.DEFAULT_QUADRANT_SEGMENTS = 8, M.DEFAULT_MITRE_LIMIT = 5, M.DEFAULT_SIMPLIFY_FACTOR = 0.01;
    var F = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this, n)).name = Object.keys({ Exception: t })[0], i;
      }
      return h(t, [{ key: "toString", value: function() {
        return this.message;
      } }]), t;
    }(k(Error)), R = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this, n)).name = Object.keys({ IllegalArgumentException: t })[0], i;
      }
      return t;
    }(F), Y = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "filter", value: function(e) {
      } }]), r;
    }();
    function z() {
    }
    function X() {
    }
    function q() {
    }
    var Z, ee, j, ce, G, K, se, me, Re = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "equalsWithTolerance", value: function(e, t, n) {
        return Math.abs(e - t) <= n;
      } }]), r;
    }(), Ee = function() {
      function r(e, t) {
        s(this, r), this.low = t || 0, this.high = e || 0;
      }
      return h(r, null, [{ key: "toBinaryString", value: function(e) {
        var t, n = "";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.high & t) === t ? "1" : "0";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.low & t) === t ? "1" : "0";
        return n;
      } }]), r;
    }();
    function Q() {
    }
    function Ae() {
    }
    Q.NaN = NaN, Q.isNaN = function(r) {
      return Number.isNaN(r);
    }, Q.isInfinite = function(r) {
      return !Number.isFinite(r);
    }, Q.MAX_VALUE = Number.MAX_VALUE, Q.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, Q.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (K = 2146435072, se = new Float64Array(1), me = new Int32Array(se.buffer), Q.doubleToLongBits = function(r) {
      se[0] = r;
      var e = 0 | me[0], t = 0 | me[1];
      return (t & K) === K && 1048575 & t && e !== 0 && (e = 0, t = 2146959360), new Ee(t, e);
    }, Q.longBitsToDouble = function(r) {
      return me[0] = r.low, me[1] = r.high, se[0];
    }) : (Z = 1023, ee = Math.log2, j = Math.floor, ce = Math.pow, G = function() {
      for (var r = 53; r > 0; r--) {
        var e = ce(2, r) - 1;
        if (j(ee(e)) + 1 === r) return e;
      }
      return 0;
    }(), Q.doubleToLongBits = function(r) {
      var e, t, n, i, u, c, f, d, p;
      if (r < 0 || 1 / r === Number.NEGATIVE_INFINITY ? (c = 1 << 31, r = -r) : c = 0, r === 0) return new Ee(d = c, p = 0);
      if (r === 1 / 0) return new Ee(d = 2146435072 | c, p = 0);
      if (r != r) return new Ee(d = 2146959360, p = 0);
      if (i = 0, p = 0, (e = j(r)) > 1) if (e <= G) (i = j(ee(e))) <= 20 ? (p = 0, d = e << 20 - i & 1048575) : (p = e % (t = ce(2, n = i - 20)) << 32 - n, d = e / t & 1048575);
      else for (n = e, p = 0; (n = j(t = n / 2)) !== 0; ) i++, p >>>= 1, p |= (1 & d) << 31, d >>>= 1, t !== n && (d |= 524288);
      if (f = i + Z, u = e === 0, e = r - e, i < 52 && e !== 0) for (n = 0; ; ) {
        if ((t = 2 * e) >= 1 ? (e = t - 1, u ? (f--, u = !1) : (n <<= 1, n |= 1, i++)) : (e = t, u ? --f == 0 && (i++, u = !1) : (n <<= 1, i++)), i === 20) d |= n, n = 0;
        else if (i === 52) {
          p |= n;
          break;
        }
        if (t === 1) {
          i < 20 ? d |= n << 20 - i : i < 52 && (p |= n << 52 - i);
          break;
        }
      }
      return d |= f << 20, new Ee(d |= c, p);
    }, Q.longBitsToDouble = function(r) {
      var e, t, n, i, u = r.high, c = r.low, f = u & 1 << 31 ? -1 : 1;
      for (n = ((2146435072 & u) >> 20) - Z, i = 0, t = 1 << 19, e = 1; e <= 20; e++) u & t && (i += ce(2, -e)), t >>>= 1;
      for (t = 1 << 31, e = 21; e <= 52; e++) c & t && (i += ce(2, -e)), t >>>= 1;
      if (n === -1023) {
        if (i === 0) return 0 * f;
        n = -1022;
      } else {
        if (n === 1024) return i === 0 ? f / 0 : NaN;
        i += 1;
      }
      return f * i * ce(2, n);
    });
    var Ie = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this, n)).name = Object.keys({ RuntimeException: t })[0], i;
      }
      return t;
    }(F), qe = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, null, [{ key: "constructor_", value: function() {
        if (arguments.length === 0) Ie.constructor_.call(this);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Ie.constructor_.call(this, n);
        }
      } }]), t;
    }(Ie), he = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "shouldNeverReachHere", value: function() {
        if (arguments.length === 0) r.shouldNeverReachHere(null);
        else if (arguments.length === 1) {
          var e = arguments[0];
          throw new qe("Should never reach here" + (e !== null ? ": " + e : ""));
        }
      } }, { key: "isTrue", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          r.isTrue(e, null);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          if (!t) throw n === null ? new qe() : new qe(n);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          r.equals(e, t, null);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2];
          if (!i.equals(n)) throw new qe("Expected " + n + " but encountered " + i + (u !== null ? ": " + u : ""));
        }
      } }]), r;
    }(), ot = new ArrayBuffer(8), On = new Float64Array(ot), ni = new Int32Array(ot), T = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getM", value: function() {
        return Q.NaN;
      } }, { key: "setOrdinate", value: function(e, t) {
        switch (e) {
          case r.X:
            this.x = t;
            break;
          case r.Y:
            this.y = t;
            break;
          case r.Z:
            this.setZ(t);
            break;
          default:
            throw new R("Invalid ordinate index: " + e);
        }
      } }, { key: "equals2D", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.x === e.x && this.y === e.y;
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return !!Re.equalsWithTolerance(this.x, t.x, n) && !!Re.equalsWithTolerance(this.y, t.y, n);
        }
      } }, { key: "setM", value: function(e) {
        throw new R("Invalid ordinate index: " + r.M);
      } }, { key: "getZ", value: function() {
        return this.z;
      } }, { key: "getOrdinate", value: function(e) {
        switch (e) {
          case r.X:
            return this.x;
          case r.Y:
            return this.y;
          case r.Z:
            return this.getZ();
        }
        throw new R("Invalid ordinate index: " + e);
      } }, { key: "equals3D", value: function(e) {
        return this.x === e.x && this.y === e.y && (this.getZ() === e.getZ() || Q.isNaN(this.getZ()) && Q.isNaN(e.getZ()));
      } }, { key: "equals", value: function(e) {
        return e instanceof r && this.equals2D(e);
      } }, { key: "equalInZ", value: function(e, t) {
        return Re.equalsWithTolerance(this.getZ(), e.getZ(), t);
      } }, { key: "setX", value: function(e) {
        this.x = e;
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.x < t.x ? -1 : this.x > t.x ? 1 : this.y < t.y ? -1 : this.y > t.y ? 1 : 0;
      } }, { key: "getX", value: function() {
        return this.x;
      } }, { key: "setZ", value: function(e) {
        this.z = e;
      } }, { key: "clone", value: function() {
        try {
          return null;
        } catch (e) {
          if (e instanceof CloneNotSupportedException) return he.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
          throw e;
        }
      } }, { key: "copy", value: function() {
        return new r(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
      } }, { key: "distance3D", value: function(e) {
        var t = this.x - e.x, n = this.y - e.y, i = this.getZ() - e.getZ();
        return Math.sqrt(t * t + n * n + i * i);
      } }, { key: "getY", value: function() {
        return this.y;
      } }, { key: "setY", value: function(e) {
        this.y = e;
      } }, { key: "distance", value: function(e) {
        var t = this.x - e.x, n = this.y - e.y;
        return Math.sqrt(t * t + n * n);
      } }, { key: "hashCode", value: function() {
        var e = 17;
        return e = 37 * (e = 37 * e + r.hashCode(this.x)) + r.hashCode(this.y);
      } }, { key: "setCoordinate", value: function(e) {
        this.x = e.x, this.y = e.y, this.z = e.getZ();
      } }, { key: "interfaces_", get: function() {
        return [z, X, q];
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.z = null, arguments.length === 0) r.constructor_.call(this, 0, 0);
        else if (arguments.length === 1) {
          var e = arguments[0];
          r.constructor_.call(this, e.x, e.y, e.getZ());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          r.constructor_.call(this, t, n, r.NULL_ORDINATE);
        } else if (arguments.length === 3) {
          var i = arguments[0], u = arguments[1], c = arguments[2];
          this.x = i, this.y = u, this.z = c;
        }
      } }, { key: "hashCode", value: function(e) {
        return On[0] = e, ni[0] ^ ni[1];
      } }]), r;
    }(), ii = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compare", value: function(e, t) {
        var n = r.compare(e.x, t.x);
        if (n !== 0) return n;
        var i = r.compare(e.y, t.y);
        return i !== 0 ? i : this._dimensionsToTest <= 2 ? 0 : r.compare(e.getZ(), t.getZ());
      } }, { key: "interfaces_", get: function() {
        return [Ae];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimensionsToTest = 2, arguments.length === 0) r.constructor_.call(this, 2);
        else if (arguments.length === 1) {
          var e = arguments[0];
          if (e !== 2 && e !== 3) throw new R("only 2 or 3 dimensions may be specified");
          this._dimensionsToTest = e;
        }
      } }, { key: "compare", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : Q.isNaN(e) ? Q.isNaN(t) ? 0 : -1 : Q.isNaN(t) ? 1 : 0;
      } }]), r;
    }();
    T.DimensionalComparator = ii, T.NULL_ORDINATE = Q.NaN, T.X = 0, T.Y = 1, T.Z = 2, T.M = 3;
    var ke = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getArea", value: function() {
        return this.getWidth() * this.getHeight();
      } }, { key: "equals", value: function(e) {
        if (!(e instanceof r)) return !1;
        var t = e;
        return this.isNull() ? t.isNull() : this._maxx === t.getMaxX() && this._maxy === t.getMaxY() && this._minx === t.getMinX() && this._miny === t.getMinY();
      } }, { key: "intersection", value: function(e) {
        if (this.isNull() || e.isNull() || !this.intersects(e)) return new r();
        var t = this._minx > e._minx ? this._minx : e._minx, n = this._miny > e._miny ? this._miny : e._miny;
        return new r(t, this._maxx < e._maxx ? this._maxx : e._maxx, n, this._maxy < e._maxy ? this._maxy : e._maxy);
      } }, { key: "isNull", value: function() {
        return this._maxx < this._minx;
      } }, { key: "getMaxX", value: function() {
        return this._maxx;
      } }, { key: "covers", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var e = arguments[0];
            return this.covers(e.x, e.y);
          }
          if (arguments[0] instanceof r) {
            var t = arguments[0];
            return !this.isNull() && !t.isNull() && t.getMinX() >= this._minx && t.getMaxX() <= this._maxx && t.getMinY() >= this._miny && t.getMaxY() <= this._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return !this.isNull() && n >= this._minx && n <= this._maxx && i >= this._miny && i <= this._maxy;
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var e = arguments[0];
            return !this.isNull() && !e.isNull() && !(e._minx > this._maxx || e._maxx < this._minx || e._miny > this._maxy || e._maxy < this._miny);
          }
          if (arguments[0] instanceof T) {
            var t = arguments[0];
            return this.intersects(t.x, t.y);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof T && arguments[1] instanceof T) {
            var n = arguments[0], i = arguments[1];
            if (this.isNull()) return !1;
            var u = n.x < i.x ? n.x : i.x;
            if (u > this._maxx) return !1;
            var c = n.x > i.x ? n.x : i.x;
            if (c < this._minx) return !1;
            var f = n.y < i.y ? n.y : i.y;
            if (f > this._maxy) return !1;
            var d = n.y > i.y ? n.y : i.y;
            return !(d < this._miny);
          }
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var p = arguments[0], S = arguments[1];
            return !this.isNull() && !(p > this._maxx || p < this._minx || S > this._maxy || S < this._miny);
          }
        }
      } }, { key: "getMinY", value: function() {
        return this._miny;
      } }, { key: "getDiameter", value: function() {
        if (this.isNull()) return 0;
        var e = this.getWidth(), t = this.getHeight();
        return Math.sqrt(e * e + t * t);
      } }, { key: "getMinX", value: function() {
        return this._minx;
      } }, { key: "expandToInclude", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var e = arguments[0];
            this.expandToInclude(e.x, e.y);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            if (t.isNull()) return null;
            this.isNull() ? (this._minx = t.getMinX(), this._maxx = t.getMaxX(), this._miny = t.getMinY(), this._maxy = t.getMaxY()) : (t._minx < this._minx && (this._minx = t._minx), t._maxx > this._maxx && (this._maxx = t._maxx), t._miny < this._miny && (this._miny = t._miny), t._maxy > this._maxy && (this._maxy = t._maxy));
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.isNull() ? (this._minx = n, this._maxx = n, this._miny = i, this._maxy = i) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
        }
      } }, { key: "minExtent", value: function() {
        if (this.isNull()) return 0;
        var e = this.getWidth(), t = this.getHeight();
        return e < t ? e : t;
      } }, { key: "getWidth", value: function() {
        return this.isNull() ? 0 : this._maxx - this._minx;
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.isNull() ? t.isNull() ? 0 : -1 : t.isNull() ? 1 : this._minx < t._minx ? -1 : this._minx > t._minx ? 1 : this._miny < t._miny ? -1 : this._miny > t._miny ? 1 : this._maxx < t._maxx ? -1 : this._maxx > t._maxx ? 1 : this._maxy < t._maxy ? -1 : this._maxy > t._maxy ? 1 : 0;
      } }, { key: "translate", value: function(e, t) {
        if (this.isNull()) return null;
        this.init(this.getMinX() + e, this.getMaxX() + e, this.getMinY() + t, this.getMaxY() + t);
      } }, { key: "copy", value: function() {
        return new r(this);
      } }, { key: "toString", value: function() {
        return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
      } }, { key: "setToNull", value: function() {
        this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
      } }, { key: "disjoint", value: function(e) {
        return !(!this.isNull() && !e.isNull()) || e._minx > this._maxx || e._maxx < this._minx || e._miny > this._maxy || e._maxy < this._miny;
      } }, { key: "getHeight", value: function() {
        return this.isNull() ? 0 : this._maxy - this._miny;
      } }, { key: "maxExtent", value: function() {
        if (this.isNull()) return 0;
        var e = this.getWidth(), t = this.getHeight();
        return e > t ? e : t;
      } }, { key: "expandBy", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.expandBy(e, e);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          if (this.isNull()) return null;
          this._minx -= t, this._maxx += t, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
        }
      } }, { key: "contains", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var e = arguments[0];
            return this.covers(e);
          }
          if (arguments[0] instanceof T) {
            var t = arguments[0];
            return this.covers(t);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.covers(n, i);
        }
      } }, { key: "centre", value: function() {
        return this.isNull() ? null : new T((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
      } }, { key: "init", value: function() {
        if (arguments.length === 0) this.setToNull();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var e = arguments[0];
            this.init(e.x, e.x, e.y, e.y);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            this._minx = t._minx, this._maxx = t._maxx, this._miny = t._miny, this._maxy = t._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.init(n.x, i.x, n.y, i.y);
        } else if (arguments.length === 4) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = arguments[3];
          u < c ? (this._minx = u, this._maxx = c) : (this._minx = c, this._maxx = u), f < d ? (this._miny = f, this._maxy = d) : (this._miny = d, this._maxy = f);
        }
      } }, { key: "getMaxY", value: function() {
        return this._maxy;
      } }, { key: "distance", value: function(e) {
        if (this.intersects(e)) return 0;
        var t = 0;
        this._maxx < e._minx ? t = e._minx - this._maxx : this._minx > e._maxx && (t = this._minx - e._maxx);
        var n = 0;
        return this._maxy < e._miny ? n = e._miny - this._maxy : this._miny > e._maxy && (n = this._miny - e._maxy), t === 0 ? n : n === 0 ? t : Math.sqrt(t * t + n * n);
      } }, { key: "hashCode", value: function() {
        var e = 17;
        return e = 37 * (e = 37 * (e = 37 * (e = 37 * e + T.hashCode(this._minx)) + T.hashCode(this._maxx)) + T.hashCode(this._miny)) + T.hashCode(this._maxy);
      } }, { key: "interfaces_", get: function() {
        return [z, q];
      } }], [{ key: "constructor_", value: function() {
        if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var e = arguments[0];
            this.init(e.x, e.x, e.y, e.y);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            this.init(t);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.init(n.x, i.x, n.y, i.y);
        } else if (arguments.length === 4) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = arguments[3];
          this.init(u, c, f, d);
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return n.x >= (e.x < t.x ? e.x : t.x) && n.x <= (e.x > t.x ? e.x : t.x) && n.y >= (e.y < t.y ? e.y : t.y) && n.y <= (e.y > t.y ? e.y : t.y);
        }
        if (arguments.length === 4) {
          var i = arguments[0], u = arguments[1], c = arguments[2], f = arguments[3], d = Math.min(c.x, f.x), p = Math.max(c.x, f.x), S = Math.min(i.x, u.x), L = Math.max(i.x, u.x);
          return !(S > p) && !(L < d) && (d = Math.min(c.y, f.y), p = Math.max(c.y, f.y), S = Math.min(i.y, u.y), L = Math.max(i.y, u.y), !(S > p) && !(L < d));
        }
      } }]), r;
    }(), J = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isGeometryCollection", value: function() {
        return this.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getFactory", value: function() {
        return this._factory;
      } }, { key: "getGeometryN", value: function(e) {
        return this;
      } }, { key: "getArea", value: function() {
        return 0;
      } }, { key: "isRectangle", value: function() {
        return !1;
      } }, { key: "equalsExact", value: function(e) {
        return this === e || this.equalsExact(e, 0);
      } }, { key: "geometryChanged", value: function() {
        this.apply(r.geometryChangedFilter);
      } }, { key: "geometryChangedAction", value: function() {
        this._envelope = null;
      } }, { key: "equalsNorm", value: function(e) {
        return e !== null && this.norm().equalsExact(e.norm());
      } }, { key: "getLength", value: function() {
        return 0;
      } }, { key: "getNumGeometries", value: function() {
        return 1;
      } }, { key: "compareTo", value: function() {
        var e;
        if (arguments.length === 1) {
          var t = arguments[0];
          return e = t, this.getTypeCode() !== e.getTypeCode() ? this.getTypeCode() - e.getTypeCode() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
        }
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return e = n, this.getTypeCode() !== e.getTypeCode() ? this.getTypeCode() - e.getTypeCode() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(n, i);
        }
      } }, { key: "getUserData", value: function() {
        return this._userData;
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "getEnvelope", value: function() {
        return this.getFactory().toGeometry(this.getEnvelopeInternal());
      } }, { key: "checkNotGeometryCollection", value: function(e) {
        if (e.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION) throw new R("This method does not support GeometryCollection arguments");
      } }, { key: "equal", value: function(e, t, n) {
        return n === 0 ? e.equals(t) : e.distance(t) <= n;
      } }, { key: "norm", value: function() {
        var e = this.copy();
        return e.normalize(), e;
      } }, { key: "reverse", value: function() {
        var e = this.reverseInternal();
        return this.envelope != null && (e.envelope = this.envelope.copy()), e.setSRID(this.getSRID()), e;
      } }, { key: "copy", value: function() {
        var e = this.copyInternal();
        return e.envelope = this._envelope == null ? null : this._envelope.copy(), e._SRID = this._SRID, e._userData = this._userData, e;
      } }, { key: "getPrecisionModel", value: function() {
        return this._factory.getPrecisionModel();
      } }, { key: "getEnvelopeInternal", value: function() {
        return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new ke(this._envelope);
      } }, { key: "setSRID", value: function(e) {
        this._SRID = e;
      } }, { key: "setUserData", value: function(e) {
        this._userData = e;
      } }, { key: "compare", value: function(e, t) {
        for (var n = e.iterator(), i = t.iterator(); n.hasNext() && i.hasNext(); ) {
          var u = n.next(), c = i.next(), f = u.compareTo(c);
          if (f !== 0) return f;
        }
        return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
      } }, { key: "hashCode", value: function() {
        return this.getEnvelopeInternal().hashCode();
      } }, { key: "isEquivalentClass", value: function(e) {
        return this.getClass() === e.getClass();
      } }, { key: "isGeometryCollectionOrDerived", value: function() {
        return this.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === r.TYPECODE_MULTIPOINT || this.getTypeCode() === r.TYPECODE_MULTILINESTRING || this.getTypeCode() === r.TYPECODE_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [X, z, q];
      } }, { key: "getClass", value: function() {
        return r;
      } }], [{ key: "hasNonEmptyElements", value: function(e) {
        for (var t = 0; t < e.length; t++) if (!e[t].isEmpty()) return !0;
        return !1;
      } }, { key: "hasNullElements", value: function(e) {
        for (var t = 0; t < e.length; t++) if (e[t] === null) return !0;
        return !1;
      } }]), r;
    }();
    J.constructor_ = function(r) {
      r && (this._envelope = null, this._userData = null, this._factory = r, this._SRID = r.getSRID());
    }, J.TYPECODE_POINT = 0, J.TYPECODE_MULTIPOINT = 1, J.TYPECODE_LINESTRING = 2, J.TYPECODE_LINEARRING = 3, J.TYPECODE_MULTILINESTRING = 4, J.TYPECODE_POLYGON = 5, J.TYPECODE_MULTIPOLYGON = 6, J.TYPECODE_GEOMETRYCOLLECTION = 7, J.TYPENAME_POINT = "Point", J.TYPENAME_MULTIPOINT = "MultiPoint", J.TYPENAME_LINESTRING = "LineString", J.TYPENAME_LINEARRING = "LinearRing", J.TYPENAME_MULTILINESTRING = "MultiLineString", J.TYPENAME_POLYGON = "Polygon", J.TYPENAME_MULTIPOLYGON = "MultiPolygon", J.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", J.geometryChangedFilter = { get interfaces_() {
      return [Y];
    }, filter: function(r) {
      r.geometryChangedAction();
    } };
    var I = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "toLocationSymbol", value: function(e) {
        switch (e) {
          case r.EXTERIOR:
            return "e";
          case r.BOUNDARY:
            return "b";
          case r.INTERIOR:
            return "i";
          case r.NONE:
            return "-";
        }
        throw new R("Unknown location value: " + e);
      } }]), r;
    }();
    I.INTERIOR = 0, I.BOUNDARY = 1, I.EXTERIOR = 2, I.NONE = -1;
    var oe = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "add", value: function() {
      } }, { key: "addAll", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }, { key: "iterator", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "toArray", value: function() {
      } }, { key: "remove", value: function() {
      } }]), r;
    }(), we = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this, n)).name = Object.keys({ NoSuchElementException: t })[0], i;
      }
      return t;
    }(F), ae = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this, n)).name = Object.keys({ UnsupportedOperationException: t })[0], i;
      }
      return t;
    }(F), Mn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        return s(this, t), e.apply(this, arguments);
      }
      return h(t, [{ key: "contains", value: function() {
      } }]), t;
    }(oe), Qe = function(r, e) {
      g(n, r);
      var t = N(n);
      function n(i) {
        var u;
        return s(this, n), (u = t.call(this)).map = /* @__PURE__ */ new Map(), i instanceof oe && u.addAll(i), u;
      }
      return h(n, [{ key: "contains", value: function(i) {
        var u = i.hashCode ? i.hashCode() : i;
        return !!this.map.has(u);
      } }, { key: "add", value: function(i) {
        var u = i.hashCode ? i.hashCode() : i;
        return !this.map.has(u) && !!this.map.set(u, i);
      } }, { key: "addAll", value: function(i) {
        var u, c = O(i);
        try {
          for (c.s(); !(u = c.n()).done; ) {
            var f = u.value;
            this.add(f);
          }
        } catch (d) {
          c.e(d);
        } finally {
          c.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new ae();
      } }, { key: "size", value: function() {
        return this.map.size;
      } }, { key: "isEmpty", value: function() {
        return this.map.size === 0;
      } }, { key: "toArray", value: function() {
        return Array.from(this.map.values());
      } }, { key: "iterator", value: function() {
        return new xe(this.map);
      } }, { key: e, value: function() {
        return this.map;
      } }]), n;
    }(Mn, Symbol.iterator), xe = function() {
      function r(e) {
        s(this, r), this.iterator = e.values();
        var t = this.iterator.next(), n = t.done, i = t.value;
        this.done = n, this.value = i;
      }
      return h(r, [{ key: "next", value: function() {
        if (this.done) throw new we();
        var e = this.value, t = this.iterator.next(), n = t.done, i = t.value;
        return this.done = n, this.value = i, e;
      } }, { key: "hasNext", value: function() {
        return !this.done;
      } }, { key: "remove", value: function() {
        throw new ae();
      } }]), r;
    }(), U = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "opposite", value: function(e) {
        return e === r.LEFT ? r.RIGHT : e === r.RIGHT ? r.LEFT : e;
      } }]), r;
    }();
    U.ON = 0, U.LEFT = 1, U.RIGHT = 2;
    var Kt = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this, n)).name = Object.keys({ EmptyStackException: t })[0], i;
      }
      return t;
    }(F), It = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this, n)).name = Object.keys({ IndexOutOfBoundsException: t })[0], i;
      }
      return t;
    }(F), Ke = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        return s(this, t), e.apply(this, arguments);
      }
      return h(t, [{ key: "get", value: function() {
      } }, { key: "set", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }]), t;
    }(oe), cn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), (n = e.call(this)).array = [], n;
      }
      return h(t, [{ key: "add", value: function(n) {
        return this.array.push(n), !0;
      } }, { key: "get", value: function(n) {
        if (n < 0 || n >= this.size()) throw new It();
        return this.array[n];
      } }, { key: "push", value: function(n) {
        return this.array.push(n), n;
      } }, { key: "pop", value: function() {
        if (this.array.length === 0) throw new Kt();
        return this.array.pop();
      } }, { key: "peek", value: function() {
        if (this.array.length === 0) throw new Kt();
        return this.array[this.array.length - 1];
      } }, { key: "empty", value: function() {
        return this.array.length === 0;
      } }, { key: "isEmpty", value: function() {
        return this.empty();
      } }, { key: "search", value: function(n) {
        return this.array.indexOf(n);
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }]), t;
    }(Ke);
    function ue(r, e) {
      return r.interfaces_ && r.interfaces_.indexOf(e) > -1;
    }
    var Jt = function() {
      function r(e) {
        s(this, r), this.str = e;
      }
      return h(r, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), r;
    }(), et = function() {
      function r(e) {
        s(this, r), this.value = e;
      }
      return h(r, [{ key: "intValue", value: function() {
        return this.value;
      } }, { key: "compareTo", value: function(e) {
        return this.value < e ? -1 : this.value > e ? 1 : 0;
      } }], [{ key: "compare", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      } }, { key: "isNan", value: function(e) {
        return Number.isNaN(e);
      } }, { key: "valueOf", value: function(e) {
        return new r(e);
      } }]), r;
    }(), fn = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "isWhitespace", value: function(e) {
        return e <= 32 && e >= 0 || e === 127;
      } }, { key: "toUpperCase", value: function(e) {
        return e.toUpperCase();
      } }]), r;
    }(), te = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "le", value: function(e) {
        return this._hi < e._hi || this._hi === e._hi && this._lo <= e._lo;
      } }, { key: "extractSignificantDigits", value: function(e, t) {
        var n = this.abs(), i = r.magnitude(n._hi), u = r.TEN.pow(i);
        (n = n.divide(u)).gt(r.TEN) ? (n = n.divide(r.TEN), i += 1) : n.lt(r.ONE) && (n = n.multiply(r.TEN), i -= 1);
        for (var c = i + 1, f = new Jt(), d = r.MAX_PRINT_DIGITS - 1, p = 0; p <= d; p++) {
          e && p === c && f.append(".");
          var S = Math.trunc(n._hi);
          if (S < 0) break;
          var L = !1, P = 0;
          S > 9 ? (L = !0, P = "9") : P = "0" + S, f.append(P), n = n.subtract(r.valueOf(S)).multiply(r.TEN), L && n.selfAdd(r.TEN);
          var V = !0, W = r.magnitude(n._hi);
          if (W < 0 && Math.abs(W) >= d - p && (V = !1), !V) break;
        }
        return t[0] = i, f.toString();
      } }, { key: "sqr", value: function() {
        return this.multiply(this);
      } }, { key: "doubleValue", value: function() {
        return this._hi + this._lo;
      } }, { key: "subtract", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0];
          return this.add(e.negate());
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return this.add(-t);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 1 && arguments[0] instanceof r) {
          var e = arguments[0];
          return this._hi === e._hi && this._lo === e._lo;
        }
      } }, { key: "isZero", value: function() {
        return this._hi === 0 && this._lo === 0;
      } }, { key: "selfSubtract", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-e._hi, -e._lo);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-t, 0);
        }
      } }, { key: "getSpecialNumberString", value: function() {
        return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
      } }, { key: "min", value: function(e) {
        return this.le(e) ? this : e;
      } }, { key: "selfDivide", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var e = arguments[0];
            return this.selfDivide(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            return this.selfDivide(t, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], u = null, c = null, f = null, d = null, p = null, S = null, L = null, P = null;
          return p = this._hi / n, P = (u = (S = r.SPLIT * p) - (u = S - p)) * (f = (P = r.SPLIT * n) - (f = P - n)) - (L = p * n) + u * (d = n - f) + (c = p - u) * f + c * d, P = p + (S = (this._hi - L - P + this._lo - p * i) / n), this._hi = P, this._lo = p - P + S, this;
        }
      } }, { key: "dump", value: function() {
        return "DD<" + this._hi + ", " + this._lo + ">";
      } }, { key: "divide", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0], t = null, n = null, i = null, u = null, c = null, f = null, d = null, p = null;
          n = (c = this._hi / e._hi) - (t = (f = r.SPLIT * c) - (t = f - c)), p = t * (i = (p = r.SPLIT * e._hi) - (i = p - e._hi)) - (d = c * e._hi) + t * (u = e._hi - i) + n * i + n * u;
          var S = p = c + (f = (this._hi - d - p + this._lo - c * e._lo) / e._hi), L = c - p + f;
          return new r(S, L);
        }
        if (typeof arguments[0] == "number") {
          var P = arguments[0];
          return Q.isNaN(P) ? r.createNaN() : r.copy(this).selfDivide(P, 0);
        }
      } }, { key: "ge", value: function(e) {
        return this._hi > e._hi || this._hi === e._hi && this._lo >= e._lo;
      } }, { key: "pow", value: function(e) {
        if (e === 0) return r.valueOf(1);
        var t = new r(this), n = r.valueOf(1), i = Math.abs(e);
        if (i > 1) for (; i > 0; ) i % 2 == 1 && n.selfMultiply(t), (i /= 2) > 0 && (t = t.sqr());
        else n = t;
        return e < 0 ? n.reciprocal() : n;
      } }, { key: "ceil", value: function() {
        if (this.isNaN()) return r.NaN;
        var e = Math.ceil(this._hi), t = 0;
        return e === this._hi && (t = Math.ceil(this._lo)), new r(e, t);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._hi < t._hi ? -1 : this._hi > t._hi ? 1 : this._lo < t._lo ? -1 : this._lo > t._lo ? 1 : 0;
      } }, { key: "rint", value: function() {
        return this.isNaN() ? this : this.add(0.5).floor();
      } }, { key: "setValue", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0];
          return this.init(e), this;
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return this.init(t), this;
        }
      } }, { key: "max", value: function(e) {
        return this.ge(e) ? this : e;
      } }, { key: "sqrt", value: function() {
        if (this.isZero()) return r.valueOf(0);
        if (this.isNegative()) return r.NaN;
        var e = 1 / Math.sqrt(this._hi), t = this._hi * e, n = r.valueOf(t), i = this.subtract(n.sqr())._hi * (0.5 * e);
        return n.add(i);
      } }, { key: "selfAdd", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var e = arguments[0];
            return this.selfAdd(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0], n = null, i = null, u = null, c = null, f = null, d = null;
            return c = (u = this._hi + t) - (f = u - this._hi), i = (d = (c = t - f + (this._hi - c)) + this._lo) + (u - (n = u + d)), this._hi = n + i, this._lo = i + (n - this._hi), this;
          }
        } else if (arguments.length === 2) {
          var p = arguments[0], S = arguments[1], L = null, P = null, V = null, W = null, $ = null, ie = null, le = null;
          W = this._hi + p, P = this._lo + S, $ = W - (ie = W - this._hi), V = P - (le = P - this._lo);
          var pe = (L = W + (ie = ($ = p - ie + (this._hi - $)) + P)) + (ie = (V = S - le + (this._lo - V)) + (ie + (W - L))), Oe = ie + (L - pe);
          return this._hi = pe, this._lo = Oe, this;
        }
      } }, { key: "selfMultiply", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var e = arguments[0];
            return this.selfMultiply(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            return this.selfMultiply(t, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], u = null, c = null, f = null, d = null, p = null, S = null;
          u = (p = r.SPLIT * this._hi) - this._hi, S = r.SPLIT * n, u = p - u, c = this._hi - u, f = S - n;
          var L = (p = this._hi * n) + (S = u * (f = S - f) - p + u * (d = n - f) + c * f + c * d + (this._hi * i + this._lo * n)), P = S + (u = p - L);
          return this._hi = L, this._lo = P, this;
        }
      } }, { key: "selfSqr", value: function() {
        return this.selfMultiply(this);
      } }, { key: "floor", value: function() {
        if (this.isNaN()) return r.NaN;
        var e = Math.floor(this._hi), t = 0;
        return e === this._hi && (t = Math.floor(this._lo)), new r(e, t);
      } }, { key: "negate", value: function() {
        return this.isNaN() ? this : new r(-this._hi, -this._lo);
      } }, { key: "clone", value: function() {
        try {
          return null;
        } catch (e) {
          if (e instanceof CloneNotSupportedException) return null;
          throw e;
        }
      } }, { key: "multiply", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0];
          return e.isNaN() ? r.createNaN() : r.copy(this).selfMultiply(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return Q.isNaN(t) ? r.createNaN() : r.copy(this).selfMultiply(t, 0);
        }
      } }, { key: "isNaN", value: function() {
        return Q.isNaN(this._hi);
      } }, { key: "intValue", value: function() {
        return Math.trunc(this._hi);
      } }, { key: "toString", value: function() {
        var e = r.magnitude(this._hi);
        return e >= -3 && e <= 20 ? this.toStandardNotation() : this.toSciNotation();
      } }, { key: "toStandardNotation", value: function() {
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!0, t), i = t[0] + 1, u = n;
        if (n.charAt(0) === ".") u = "0" + n;
        else if (i < 0) u = "0." + r.stringOfChar("0", -i) + n;
        else if (n.indexOf(".") === -1) {
          var c = i - n.length;
          u = n + r.stringOfChar("0", c) + ".0";
        }
        return this.isNegative() ? "-" + u : u;
      } }, { key: "reciprocal", value: function() {
        var e, t, n, i, u = null, c = null, f = null, d = null;
        e = (n = 1 / this._hi) - (u = (f = r.SPLIT * n) - (u = f - n)), c = (d = r.SPLIT * this._hi) - this._hi;
        var p = n + (f = (1 - (i = n * this._hi) - (d = u * (c = d - c) - i + u * (t = this._hi - c) + e * c + e * t) - n * this._lo) / this._hi);
        return new r(p, n - p + f);
      } }, { key: "toSciNotation", value: function() {
        if (this.isZero()) return r.SCI_NOT_ZERO;
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!1, t), i = r.SCI_NOT_EXPONENT_CHAR + t[0];
        if (n.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + n);
        var u = "";
        n.length > 1 && (u = n.substring(1));
        var c = n.charAt(0) + "." + u;
        return this.isNegative() ? "-" + c + i : c + i;
      } }, { key: "abs", value: function() {
        return this.isNaN() ? r.NaN : this.isNegative() ? this.negate() : new r(this);
      } }, { key: "isPositive", value: function() {
        return this._hi > 0 || this._hi === 0 && this._lo > 0;
      } }, { key: "lt", value: function(e) {
        return this._hi < e._hi || this._hi === e._hi && this._lo < e._lo;
      } }, { key: "add", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0];
          return r.copy(this).selfAdd(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return r.copy(this).selfAdd(t);
        }
      } }, { key: "init", value: function() {
        if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            this._hi = e, this._lo = 0;
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            this._hi = t._hi, this._lo = t._lo;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this._hi = n, this._lo = i;
        }
      } }, { key: "gt", value: function(e) {
        return this._hi > e._hi || this._hi === e._hi && this._lo > e._lo;
      } }, { key: "isNegative", value: function() {
        return this._hi < 0 || this._hi === 0 && this._lo < 0;
      } }, { key: "trunc", value: function() {
        return this.isNaN() ? r.NaN : this.isPositive() ? this.floor() : this.ceil();
      } }, { key: "signum", value: function() {
        return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
      } }, { key: "interfaces_", get: function() {
        return [q, z, X];
      } }], [{ key: "constructor_", value: function() {
        if (this._hi = 0, this._lo = 0, arguments.length === 0) this.init(0);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            this.init(e);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            this.init(t);
          } else if (typeof arguments[0] == "string") {
            var n = arguments[0];
            r.constructor_.call(this, r.parse(n));
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          this.init(i, u);
        }
      } }, { key: "determinant", value: function() {
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
          return r.determinant(r.valueOf(e), r.valueOf(t), r.valueOf(n), r.valueOf(i));
        }
        if (arguments[3] instanceof r && arguments[2] instanceof r && arguments[0] instanceof r && arguments[1] instanceof r) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = arguments[3], p = u.multiply(d).selfSubtract(c.multiply(f));
          return p;
        }
      } }, { key: "sqr", value: function(e) {
        return r.valueOf(e).selfMultiply(e);
      } }, { key: "valueOf", value: function() {
        if (typeof arguments[0] == "string") {
          var e = arguments[0];
          return r.parse(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return new r(t);
        }
      } }, { key: "sqrt", value: function(e) {
        return r.valueOf(e).sqrt();
      } }, { key: "parse", value: function(e) {
        for (var t = 0, n = e.length; fn.isWhitespace(e.charAt(t)); ) t++;
        var i = !1;
        if (t < n) {
          var u = e.charAt(t);
          u !== "-" && u !== "+" || (t++, u === "-" && (i = !0));
        }
        for (var c = new r(), f = 0, d = 0, p = 0, S = !1; !(t >= n); ) {
          var L = e.charAt(t);
          if (t++, fn.isDigit(L)) {
            var P = L - "0";
            c.selfMultiply(r.TEN), c.selfAdd(P), f++;
          } else {
            if (L !== ".") {
              if (L === "e" || L === "E") {
                var V = e.substring(t);
                try {
                  p = et.parseInt(V);
                } catch (pe) {
                  throw pe instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + V + " in string " + e) : pe;
                }
                break;
              }
              throw new NumberFormatException("Unexpected character '" + L + "' at position " + t + " in string " + e);
            }
            d = f, S = !0;
          }
        }
        var W = c;
        S || (d = f);
        var $ = f - d - p;
        if ($ === 0) W = c;
        else if ($ > 0) {
          var ie = r.TEN.pow($);
          W = c.divide(ie);
        } else if ($ < 0) {
          var le = r.TEN.pow(-$);
          W = c.multiply(le);
        }
        return i ? W.negate() : W;
      } }, { key: "createNaN", value: function() {
        return new r(Q.NaN, Q.NaN);
      } }, { key: "copy", value: function(e) {
        return new r(e);
      } }, { key: "magnitude", value: function(e) {
        var t = Math.abs(e), n = Math.log(t) / Math.log(10), i = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, i) <= t && (i += 1), i;
      } }, { key: "stringOfChar", value: function(e, t) {
        for (var n = new Jt(), i = 0; i < t; i++) n.append(e);
        return n.toString();
      } }]), r;
    }();
    te.PI = new te(3.141592653589793, 12246467991473532e-32), te.TWO_PI = new te(6.283185307179586, 24492935982947064e-32), te.PI_2 = new te(1.5707963267948966, 6123233995736766e-32), te.E = new te(2.718281828459045, 14456468917292502e-32), te.NaN = new te(Q.NaN, Q.NaN), te.EPS = 123259516440783e-46, te.SPLIT = 134217729, te.MAX_PRINT_DIGITS = 32, te.TEN = te.valueOf(10), te.ONE = te.valueOf(1), te.SCI_NOT_EXPONENT_CHAR = "E", te.SCI_NOT_ZERO = "0.0E0";
    var $t = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "orientationIndex", value: function(e, t, n) {
        var i = r.orientationIndexFilter(e, t, n);
        if (i <= 1) return i;
        var u = te.valueOf(t.x).selfAdd(-e.x), c = te.valueOf(t.y).selfAdd(-e.y), f = te.valueOf(n.x).selfAdd(-t.x), d = te.valueOf(n.y).selfAdd(-t.y);
        return u.selfMultiply(d).selfSubtract(c.selfMultiply(f)).signum();
      } }, { key: "signOfDet2x2", value: function() {
        if (arguments[3] instanceof te && arguments[2] instanceof te && arguments[0] instanceof te && arguments[1] instanceof te) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3], u = e.multiply(i).selfSubtract(t.multiply(n));
          return u.signum();
        }
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var c = arguments[0], f = arguments[1], d = arguments[2], p = arguments[3], S = te.valueOf(c), L = te.valueOf(f), P = te.valueOf(d), V = te.valueOf(p), W = S.multiply(V).selfSubtract(L.multiply(P));
          return W.signum();
        }
      } }, { key: "intersection", value: function(e, t, n, i) {
        var u = new te(e.y).selfSubtract(t.y), c = new te(t.x).selfSubtract(e.x), f = new te(e.x).selfMultiply(t.y).selfSubtract(new te(t.x).selfMultiply(e.y)), d = new te(n.y).selfSubtract(i.y), p = new te(i.x).selfSubtract(n.x), S = new te(n.x).selfMultiply(i.y).selfSubtract(new te(i.x).selfMultiply(n.y)), L = c.multiply(S).selfSubtract(p.multiply(f)), P = d.multiply(f).selfSubtract(u.multiply(S)), V = u.multiply(p).selfSubtract(d.multiply(c)), W = L.selfDivide(V).doubleValue(), $ = P.selfDivide(V).doubleValue();
        return Q.isNaN(W) || Q.isInfinite(W) || Q.isNaN($) || Q.isInfinite($) ? null : new T(W, $);
      } }, { key: "orientationIndexFilter", value: function(e, t, n) {
        var i = null, u = (e.x - n.x) * (t.y - n.y), c = (e.y - n.y) * (t.x - n.x), f = u - c;
        if (u > 0) {
          if (c <= 0) return r.signum(f);
          i = u + c;
        } else {
          if (!(u < 0) || c >= 0) return r.signum(f);
          i = -u - c;
        }
        var d = r.DP_SAFE_EPSILON * i;
        return f >= d || -f >= d ? r.signum(f) : 2;
      } }, { key: "signum", value: function(e) {
        return e > 0 ? 1 : e < 0 ? -1 : 0;
      } }]), r;
    }();
    $t.DP_SAFE_EPSILON = 1e-15;
    var ge = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "getM", value: function(e) {
        if (this.hasM()) {
          var t = this.getDimension() - this.getMeasures();
          return this.getOrdinate(e, t);
        }
        return Q.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this.getOrdinate(e, 2) : Q.NaN;
      } }, { key: "size", value: function() {
      } }, { key: "getOrdinate", value: function(e, t) {
      } }, { key: "getCoordinate", value: function() {
      } }, { key: "getCoordinateCopy", value: function(e) {
      } }, { key: "createCoordinate", value: function() {
      } }, { key: "getDimension", value: function() {
      } }, { key: "hasM", value: function() {
        return this.getMeasures() > 0;
      } }, { key: "getX", value: function(e) {
      } }, { key: "hasZ", value: function() {
        return this.getDimension() - this.getMeasures() > 2;
      } }, { key: "getMeasures", value: function() {
        return 0;
      } }, { key: "expandEnvelope", value: function(e) {
      } }, { key: "copy", value: function() {
      } }, { key: "getY", value: function(e) {
      } }, { key: "toCoordinateArray", value: function() {
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }]), r;
    }();
    ge.X = 0, ge.Y = 1, ge.Z = 2, ge.M = 3;
    var re = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "index", value: function(e, t, n) {
        return $t.orientationIndex(e, t, n);
      } }, { key: "isCCW", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0], t = e.length - 1;
          if (t < 3) throw new R("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var n = e[0], i = 0, u = 1; u <= t; u++) {
            var c = e[u];
            c.y > n.y && (n = c, i = u);
          }
          var f = i;
          do
            (f -= 1) < 0 && (f = t);
          while (e[f].equals2D(n) && f !== i);
          var d = i;
          do
            d = (d + 1) % t;
          while (e[d].equals2D(n) && d !== i);
          var p = e[f], S = e[d];
          if (p.equals2D(n) || S.equals2D(n) || p.equals2D(S)) return !1;
          var L = r.index(p, n, S), P = null;
          return P = L === 0 ? p.x > S.x : L > 0, P;
        }
        if (ue(arguments[0], ge)) {
          var V = arguments[0], W = V.size() - 1;
          if (W < 3) throw new R("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var $ = V.getCoordinate(0), ie = 0, le = 1; le <= W; le++) {
            var pe = V.getCoordinate(le);
            pe.y > $.y && ($ = pe, ie = le);
          }
          var Oe = null, Ye = ie;
          do
            (Ye -= 1) < 0 && (Ye = W), Oe = V.getCoordinate(Ye);
          while (Oe.equals2D($) && Ye !== ie);
          var st = null, Et = ie;
          do
            Et = (Et + 1) % W, st = V.getCoordinate(Et);
          while (st.equals2D($) && Et !== ie);
          if (Oe.equals2D($) || st.equals2D($) || Oe.equals2D(st)) return !1;
          var Mt = r.index(Oe, $, st);
          return Mt === 0 ? Oe.x > st.x : Mt > 0;
        }
      } }]), r;
    }();
    re.CLOCKWISE = -1, re.RIGHT = re.CLOCKWISE, re.COUNTERCLOCKWISE = 1, re.LEFT = re.COUNTERCLOCKWISE, re.COLLINEAR = 0, re.STRAIGHT = re.COLLINEAR;
    var Mi = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinate", value: function() {
        return this._minCoord;
      } }, { key: "getRightmostSide", value: function(e, t) {
        var n = this.getRightmostSideOfSegment(e, t);
        return n < 0 && (n = this.getRightmostSideOfSegment(e, t - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(e)), n;
      } }, { key: "findRightmostEdgeAtVertex", value: function() {
        var e = this._minDe.getEdge().getCoordinates();
        he.isTrue(this._minIndex > 0 && this._minIndex < e.length, "rightmost point expected to be interior vertex of edge");
        var t = e[this._minIndex - 1], n = e[this._minIndex + 1], i = re.index(this._minCoord, n, t), u = !1;
        (t.y < this._minCoord.y && n.y < this._minCoord.y && i === re.COUNTERCLOCKWISE || t.y > this._minCoord.y && n.y > this._minCoord.y && i === re.CLOCKWISE) && (u = !0), u && (this._minIndex = this._minIndex - 1);
      } }, { key: "getRightmostSideOfSegment", value: function(e, t) {
        var n = e.getEdge().getCoordinates();
        if (t < 0 || t + 1 >= n.length || n[t].y === n[t + 1].y) return -1;
        var i = U.LEFT;
        return n[t].y < n[t + 1].y && (i = U.RIGHT), i;
      } }, { key: "getEdge", value: function() {
        return this._orientedDe;
      } }, { key: "checkForRightmostCoordinate", value: function(e) {
        for (var t = e.getEdge().getCoordinates(), n = 0; n < t.length - 1; n++) (this._minCoord === null || t[n].x > this._minCoord.x) && (this._minDe = e, this._minIndex = n, this._minCoord = t[n]);
      } }, { key: "findRightmostEdgeAtNode", value: function() {
        var e = this._minDe.getNode().getEdges();
        this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
      } }, { key: "findEdge", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          n.isForward() && this.checkForRightmostCoordinate(n);
        }
        he.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === U.LEFT && (this._orientedDe = this._minDe.getSym());
      } }], [{ key: "constructor_", value: function() {
        this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
      } }]), r;
    }(), tt = function(r) {
      g(t, r);
      var e = N(t);
      function t(n, i) {
        var u;
        return s(this, t), (u = e.call(this, i ? n + " [ " + i + " ]" : n)).pt = i ? new T(i) : void 0, u.name = Object.keys({ TopologyException: t })[0], u;
      }
      return h(t, [{ key: "getCoordinate", value: function() {
        return this.pt;
      } }]), t;
    }(Ie), Pn = function() {
      function r() {
        s(this, r), this.array = [];
      }
      return h(r, [{ key: "addLast", value: function(e) {
        this.array.push(e);
      } }, { key: "removeFirst", value: function() {
        return this.array.shift();
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }]), r;
    }(), ne = function(r, e) {
      g(n, r);
      var t = N(n);
      function n(i) {
        var u;
        return s(this, n), (u = t.call(this)).array = [], i instanceof oe && u.addAll(i), u;
      }
      return h(n, [{ key: "interfaces_", get: function() {
        return [Ke, oe];
      } }, { key: "ensureCapacity", value: function() {
      } }, { key: "add", value: function(i) {
        return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
      } }, { key: "clear", value: function() {
        this.array = [];
      } }, { key: "addAll", value: function(i) {
        var u, c = O(i);
        try {
          for (c.s(); !(u = c.n()).done; ) {
            var f = u.value;
            this.array.push(f);
          }
        } catch (d) {
          c.e(d);
        } finally {
          c.f();
        }
      } }, { key: "set", value: function(i, u) {
        var c = this.array[i];
        return this.array[i] = u, c;
      } }, { key: "iterator", value: function() {
        return new Pi(this);
      } }, { key: "get", value: function(i) {
        if (i < 0 || i >= this.size()) throw new It();
        return this.array[i];
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "sort", value: function(i) {
        i ? this.array.sort(function(u, c) {
          return i.compare(u, c);
        }) : this.array.sort();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "remove", value: function(i) {
        for (var u = 0, c = this.array.length; u < c; u++) if (this.array[u] === i) return !!this.array.splice(u, 1);
        return !1;
      } }, { key: e, value: function() {
        return this.array.values();
      } }]), n;
    }(Ke, Symbol.iterator), Pi = function() {
      function r(e) {
        s(this, r), this.arrayList = e, this.position = 0;
      }
      return h(r, [{ key: "next", value: function() {
        if (this.position === this.arrayList.size()) throw new we();
        return this.arrayList.get(this.position++);
      } }, { key: "hasNext", value: function() {
        return this.position < this.arrayList.size();
      } }, { key: "set", value: function(e) {
        return this.arrayList.set(this.position - 1, e);
      } }, { key: "remove", value: function() {
        this.arrayList.remove(this.arrayList.get(this.position));
      } }]), r;
    }(), Ai = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "clearVisitedEdges", value: function() {
        for (var e = this._dirEdgeList.iterator(); e.hasNext(); )
          e.next().setVisited(!1);
      } }, { key: "getRightmostCoordinate", value: function() {
        return this._rightMostCoord;
      } }, { key: "computeNodeDepth", value: function(e) {
        for (var t = null, n = e.getEdges().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.isVisited() || i.getSym().isVisited()) {
            t = i;
            break;
          }
        }
        if (t === null) throw new tt("unable to find edge to compute depths at " + e.getCoordinate());
        e.getEdges().computeDepths(t);
        for (var u = e.getEdges().iterator(); u.hasNext(); ) {
          var c = u.next();
          c.setVisited(!0), this.copySymDepths(c);
        }
      } }, { key: "computeDepth", value: function(e) {
        this.clearVisitedEdges();
        var t = this._finder.getEdge();
        t.getNode(), t.getLabel(), t.setEdgeDepths(U.RIGHT, e), this.copySymDepths(t), this.computeDepths(t);
      } }, { key: "create", value: function(e) {
        this.addReachable(e), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
      } }, { key: "findResultEdges", value: function() {
        for (var e = this._dirEdgeList.iterator(); e.hasNext(); ) {
          var t = e.next();
          t.getDepth(U.RIGHT) >= 1 && t.getDepth(U.LEFT) <= 0 && !t.isInteriorAreaEdge() && t.setInResult(!0);
        }
      } }, { key: "computeDepths", value: function(e) {
        var t = new Qe(), n = new Pn(), i = e.getNode();
        for (n.addLast(i), t.add(i), e.setVisited(!0); !n.isEmpty(); ) {
          var u = n.removeFirst();
          t.add(u), this.computeNodeDepth(u);
          for (var c = u.getEdges().iterator(); c.hasNext(); ) {
            var f = c.next().getSym();
            if (!f.isVisited()) {
              var d = f.getNode();
              t.contains(d) || (n.addLast(d), t.add(d));
            }
          }
        }
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._rightMostCoord.x < t._rightMostCoord.x ? -1 : this._rightMostCoord.x > t._rightMostCoord.x ? 1 : 0;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          for (var e = new ke(), t = this._dirEdgeList.iterator(); t.hasNext(); ) for (var n = t.next().getEdge().getCoordinates(), i = 0; i < n.length - 1; i++) e.expandToInclude(n[i]);
          this._env = e;
        }
        return this._env;
      } }, { key: "addReachable", value: function(e) {
        var t = new cn();
        for (t.add(e); !t.empty(); ) {
          var n = t.pop();
          this.add(n, t);
        }
      } }, { key: "copySymDepths", value: function(e) {
        var t = e.getSym();
        t.setDepth(U.LEFT, e.getDepth(U.RIGHT)), t.setDepth(U.RIGHT, e.getDepth(U.LEFT));
      } }, { key: "add", value: function(e, t) {
        e.setVisited(!0), this._nodes.add(e);
        for (var n = e.getEdges().iterator(); n.hasNext(); ) {
          var i = n.next();
          this._dirEdgeList.add(i);
          var u = i.getSym().getNode();
          u.isVisited() || t.push(u);
        }
      } }, { key: "getNodes", value: function() {
        return this._nodes;
      } }, { key: "getDirectedEdges", value: function() {
        return this._dirEdgeList;
      } }, { key: "interfaces_", get: function() {
        return [z];
      } }], [{ key: "constructor_", value: function() {
        this._finder = null, this._dirEdgeList = new ne(), this._nodes = new ne(), this._rightMostCoord = null, this._env = null, this._finder = new Mi();
      } }]), r;
    }(), An = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "intersection", value: function(e, t, n, i) {
        var u = e.x < t.x ? e.x : t.x, c = e.y < t.y ? e.y : t.y, f = e.x > t.x ? e.x : t.x, d = e.y > t.y ? e.y : t.y, p = n.x < i.x ? n.x : i.x, S = n.y < i.y ? n.y : i.y, L = n.x > i.x ? n.x : i.x, P = n.y > i.y ? n.y : i.y, V = ((u > p ? u : p) + (f < L ? f : L)) / 2, W = ((c > S ? c : S) + (d < P ? d : P)) / 2, $ = e.x - V, ie = e.y - W, le = t.x - V, pe = t.y - W, Oe = n.x - V, Ye = n.y - W, st = i.x - V, Et = i.y - W, Mt = ie - pe, an = le - $, Yn = $ * pe - le * ie, Un = Ye - Et, Nn = st - Oe, ns = Oe * Et - st * Ye, is = Mt * Nn - Un * an, Ki = (an * ns - Nn * Yn) / is, Ji = (Un * Yn - Mt * ns) / is;
        return Q.isNaN(Ki) || Q.isInfinite(Ki) || Q.isNaN(Ji) || Q.isInfinite(Ji) ? null : new T(Ki + V, Ji + W);
      } }]), r;
    }(), Je = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "arraycopy", value: function(e, t, n, i, u) {
        for (var c = 0, f = t; f < t + u; f++) n[i + c] = e[f], c++;
      } }, { key: "getProperty", value: function(e) {
        return { "line.separator": `
` }[e];
      } }]), r;
    }(), en = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "log10", value: function(e) {
        var t = Math.log(e);
        return Q.isInfinite(t) || Q.isNaN(t) ? t : t / r.LOG_10;
      } }, { key: "min", value: function(e, t, n, i) {
        var u = e;
        return t < u && (u = t), n < u && (u = n), i < u && (u = i), u;
      } }, { key: "clamp", value: function() {
        if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return e < t ? t : e > n ? n : e;
        }
        if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
          var i = arguments[0], u = arguments[1], c = arguments[2];
          return i < u ? u : i > c ? c : i;
        }
      } }, { key: "wrap", value: function(e, t) {
        return e < 0 ? t - -e % t : e % t;
      } }, { key: "max", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = e;
          return t > i && (i = t), n > i && (i = n), i;
        }
        if (arguments.length === 4) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = arguments[3], p = u;
          return c > p && (p = c), f > p && (p = f), d > p && (p = d), p;
        }
      } }, { key: "average", value: function(e, t) {
        return (e + t) / 2;
      } }]), r;
    }();
    en.LOG_10 = Math.log(10);
    var lt = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "segmentToSegment", value: function(e, t, n, i) {
        if (e.equals(t)) return r.pointToSegment(e, n, i);
        if (n.equals(i)) return r.pointToSegment(i, e, t);
        var u = !1;
        if (ke.intersects(e, t, n, i)) {
          var c = (t.x - e.x) * (i.y - n.y) - (t.y - e.y) * (i.x - n.x);
          if (c === 0) u = !0;
          else {
            var f = (e.y - n.y) * (i.x - n.x) - (e.x - n.x) * (i.y - n.y), d = ((e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y)) / c, p = f / c;
            (p < 0 || p > 1 || d < 0 || d > 1) && (u = !0);
          }
        } else u = !0;
        return u ? en.min(r.pointToSegment(e, n, i), r.pointToSegment(t, n, i), r.pointToSegment(n, e, t), r.pointToSegment(i, e, t)) : 0;
      } }, { key: "pointToSegment", value: function(e, t, n) {
        if (t.x === n.x && t.y === n.y) return e.distance(t);
        var i = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), u = ((e.x - t.x) * (n.x - t.x) + (e.y - t.y) * (n.y - t.y)) / i;
        if (u <= 0) return e.distance(t);
        if (u >= 1) return e.distance(n);
        var c = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / i;
        return Math.abs(c) * Math.sqrt(i);
      } }, { key: "pointToLinePerpendicular", value: function(e, t, n) {
        var i = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), u = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / i;
        return Math.abs(u) * Math.sqrt(i);
      } }, { key: "pointToSegmentString", value: function(e, t) {
        if (t.length === 0) throw new R("Line array must contain at least one vertex");
        for (var n = e.distance(t[0]), i = 0; i < t.length - 1; i++) {
          var u = r.pointToSegment(e, t[i], t[i + 1]);
          u < n && (n = u);
        }
        return n;
      } }]), r;
    }(), ri = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "create", value: function() {
        if (arguments.length === 1) arguments[0] instanceof Array || ue(arguments[0], ge);
        else if (arguments.length !== 2) {
          if (arguments.length === 3) {
            var e = arguments[0], t = arguments[1];
            return this.create(e, t);
          }
        }
      } }]), r;
    }(), gn = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "filter", value: function(e) {
      } }]), r;
    }(), Di = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "ofLine", value: function(e) {
        var t = e.size();
        if (t <= 1) return 0;
        var n = 0, i = new T();
        e.getCoordinate(0, i);
        for (var u = i.x, c = i.y, f = 1; f < t; f++) {
          e.getCoordinate(f, i);
          var d = i.x, p = i.y, S = d - u, L = p - c;
          n += Math.sqrt(S * S + L * L), u = d, c = p;
        }
        return n;
      } }]), r;
    }(), si = function r() {
      s(this, r);
    }, Ct = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "copyCoord", value: function(e, t, n, i) {
        for (var u = Math.min(e.getDimension(), n.getDimension()), c = 0; c < u; c++) n.setOrdinate(i, c, e.getOrdinate(t, c));
      } }, { key: "isRing", value: function(e) {
        var t = e.size();
        return t === 0 || !(t <= 3) && e.getOrdinate(0, ge.X) === e.getOrdinate(t - 1, ge.X) && e.getOrdinate(0, ge.Y) === e.getOrdinate(t - 1, ge.Y);
      } }, { key: "scroll", value: function() {
        if (arguments.length === 2) {
          if (ue(arguments[0], ge) && Number.isInteger(arguments[1])) {
            var e = arguments[0], t = arguments[1];
            r.scroll(e, t, r.isRing(e));
          } else if (ue(arguments[0], ge) && arguments[1] instanceof T) {
            var n = arguments[0], i = arguments[1], u = r.indexOf(i, n);
            if (u <= 0) return null;
            r.scroll(n, u);
          }
        } else if (arguments.length === 3) {
          var c = arguments[0], f = arguments[1], d = arguments[2], p = f;
          if (p <= 0) return null;
          for (var S = c.copy(), L = d ? c.size() - 1 : c.size(), P = 0; P < L; P++) for (var V = 0; V < c.getDimension(); V++) c.setOrdinate(P, V, S.getOrdinate((f + P) % L, V));
          if (d) for (var W = 0; W < c.getDimension(); W++) c.setOrdinate(L, W, c.getOrdinate(0, W));
        }
      } }, { key: "isEqual", value: function(e, t) {
        var n = e.size();
        if (n !== t.size()) return !1;
        for (var i = Math.min(e.getDimension(), t.getDimension()), u = 0; u < n; u++) for (var c = 0; c < i; c++) {
          var f = e.getOrdinate(u, c), d = t.getOrdinate(u, c);
          if (e.getOrdinate(u, c) !== t.getOrdinate(u, c) && (!Q.isNaN(f) || !Q.isNaN(d))) return !1;
        }
        return !0;
      } }, { key: "minCoordinateIndex", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return r.minCoordinateIndex(e, 0, e.size() - 1);
        }
        if (arguments.length === 3) {
          for (var t = arguments[0], n = arguments[1], i = arguments[2], u = -1, c = null, f = n; f <= i; f++) {
            var d = t.getCoordinate(f);
            (c === null || c.compareTo(d) > 0) && (c = d, u = f);
          }
          return u;
        }
      } }, { key: "extend", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), u = t.size();
        if (r.copy(t, 0, i, 0, u), u > 0) for (var c = u; c < n; c++) r.copy(t, u - 1, i, c, 1);
        return i;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.size() - 1, n = Math.trunc(t / 2), i = 0; i <= n; i++) r.swap(e, i, t - i);
      } }, { key: "swap", value: function(e, t, n) {
        if (t === n) return null;
        for (var i = 0; i < e.getDimension(); i++) {
          var u = e.getOrdinate(t, i);
          e.setOrdinate(t, i, e.getOrdinate(n, i)), e.setOrdinate(n, i, u);
        }
      } }, { key: "copy", value: function(e, t, n, i, u) {
        for (var c = 0; c < u; c++) r.copyCoord(e, t + c, n, i + c);
      } }, { key: "ensureValidRing", value: function(e, t) {
        var n = t.size();
        return n === 0 ? t : n <= 3 ? r.createClosedRing(e, t, 4) : t.getOrdinate(0, ge.X) === t.getOrdinate(n - 1, ge.X) && t.getOrdinate(0, ge.Y) === t.getOrdinate(n - 1, ge.Y) ? t : r.createClosedRing(e, t, n + 1);
      } }, { key: "indexOf", value: function(e, t) {
        for (var n = 0; n < t.size(); n++) if (e.x === t.getOrdinate(n, ge.X) && e.y === t.getOrdinate(n, ge.Y)) return n;
        return -1;
      } }, { key: "createClosedRing", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), u = t.size();
        r.copy(t, 0, i, 0, u);
        for (var c = u; c < n; c++) r.copy(t, 0, i, c, 1);
        return i;
      } }, { key: "minCoordinate", value: function(e) {
        for (var t = null, n = 0; n < e.size(); n++) {
          var i = e.getCoordinate(n);
          (t === null || t.compareTo(i) > 0) && (t = i);
        }
        return t;
      } }]), r;
    }(), H = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "toDimensionSymbol", value: function(e) {
        switch (e) {
          case r.FALSE:
            return r.SYM_FALSE;
          case r.TRUE:
            return r.SYM_TRUE;
          case r.DONTCARE:
            return r.SYM_DONTCARE;
          case r.P:
            return r.SYM_P;
          case r.L:
            return r.SYM_L;
          case r.A:
            return r.SYM_A;
        }
        throw new R("Unknown dimension value: " + e);
      } }, { key: "toDimensionValue", value: function(e) {
        switch (fn.toUpperCase(e)) {
          case r.SYM_FALSE:
            return r.FALSE;
          case r.SYM_TRUE:
            return r.TRUE;
          case r.SYM_DONTCARE:
            return r.DONTCARE;
          case r.SYM_P:
            return r.P;
          case r.SYM_L:
            return r.L;
          case r.SYM_A:
            return r.A;
        }
        throw new R("Unknown dimension symbol: " + e);
      } }]), r;
    }();
    H.P = 0, H.L = 1, H.A = 2, H.FALSE = -1, H.TRUE = -2, H.DONTCARE = -3, H.SYM_FALSE = "F", H.SYM_TRUE = "T", H.SYM_DONTCARE = "*", H.SYM_P = "0", H.SYM_L = "1", H.SYM_A = "2";
    var D = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "filter", value: function(e) {
      } }]), r;
    }(), Se = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "filter", value: function(e, t) {
      } }, { key: "isDone", value: function() {
      } }, { key: "isGeometryChanged", value: function() {
      } }]), r;
    }(), Fe = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this.isEmpty() ? new ke() : this._points.expandEnvelope(new ke());
      } }, { key: "isRing", value: function() {
        return this.isClosed() && this.isSimple();
      } }, { key: "getCoordinates", value: function() {
        return this._points.toCoordinateArray();
      } }, { key: "copyInternal", value: function() {
        return new t(this._points.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var u = n;
          if (this._points.size() !== u._points.size()) return !1;
          for (var c = 0; c < this._points.size(); c++) if (!this.equal(this._points.getCoordinate(c), u._points.getCoordinate(c), i)) return !1;
          return !0;
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < Math.trunc(this._points.size() / 2); n++) {
          var i = this._points.size() - 1 - n;
          if (!this._points.getCoordinate(n).equals(this._points.getCoordinate(i))) {
            if (this._points.getCoordinate(n).compareTo(this._points.getCoordinate(i)) > 0) {
              var u = this._points.copy();
              Ct.reverse(u), this._points = u;
            }
            return null;
          }
        }
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._points.getCoordinate(0);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? H.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return Ct.reverse(n), this.getFactory().createLineString(n);
      } }, { key: "getEndPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_LINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getLength", value: function() {
        return Di.ofLine(this._points);
      } }, { key: "getNumPoints", value: function() {
        return this._points.size();
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          for (var n = arguments[0], i = n, u = 0, c = 0; u < this._points.size() && c < i._points.size(); ) {
            var f = this._points.getCoordinate(u).compareTo(i._points.getCoordinate(c));
            if (f !== 0) return f;
            u++, c++;
          }
          return u < this._points.size() ? 1 : c < i._points.size() ? -1 : 0;
        }
        if (arguments.length === 2) {
          var d = arguments[0], p = arguments[1], S = d;
          return p.compare(this._points, S._points);
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], gn)) for (var n = arguments[0], i = 0; i < this._points.size(); i++) n.filter(this._points.getCoordinate(i));
        else if (ue(arguments[0], Se)) {
          var u = arguments[0];
          if (this._points.size() === 0) return null;
          for (var c = 0; c < this._points.size() && (u.filter(this._points, c), !u.isDone()); c++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], D)) {
          var f = arguments[0];
          f.filter(this);
        } else if (ue(arguments[0], Y)) {
          var d = arguments[0];
          d.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        throw new ae();
      } }, { key: "isEquivalentClass", value: function(n) {
        return n instanceof t;
      } }, { key: "getCoordinateN", value: function(n) {
        return this._points.getCoordinate(n);
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_LINESTRING;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._points;
      } }, { key: "isEmpty", value: function() {
        return this._points.size() === 0;
      } }, { key: "init", value: function(n) {
        if (n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), n.size() === 1) throw new R("Invalid number of points in LineString (found " + n.size() + " - must be 0 or >= 2)");
        this._points = n;
      } }, { key: "isCoordinate", value: function(n) {
        for (var i = 0; i < this._points.size(); i++) if (this._points.getCoordinate(i).equals(n)) return !0;
        return !1;
      } }, { key: "getStartPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(0);
      } }, { key: "getPointN", value: function(n) {
        return this.getFactory().createPoint(this._points.getCoordinate(n));
      } }, { key: "interfaces_", get: function() {
        return [si];
      } }], [{ key: "constructor_", value: function() {
        if (this._points = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            J.constructor_.call(this, i), this.init(n);
          }
        }
      } }]), t;
    }(J), We = function r() {
      s(this, r);
    }, fe = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "computeEnvelopeInternal", value: function() {
        if (this.isEmpty()) return new ke();
        var n = new ke();
        return n.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), n;
      } }, { key: "getCoordinates", value: function() {
        return this.isEmpty() ? [] : [this.getCoordinate()];
      } }, { key: "copyInternal", value: function() {
        return new t(this._coordinates.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && (!(!this.isEmpty() || !n.isEmpty()) || this.isEmpty() === n.isEmpty() && this.equal(n.getCoordinate(), this.getCoordinate(), i));
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
      } }, { key: "getCoordinate", value: function() {
        return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
      } }, { key: "getBoundaryDimension", value: function() {
        return H.FALSE;
      } }, { key: "reverseInternal", value: function() {
        return this.getFactory().createPoint(this._coordinates.copy());
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_POINT;
      } }, { key: "getDimension", value: function() {
        return 0;
      } }, { key: "getNumPoints", value: function() {
        return this.isEmpty() ? 0 : 1;
      } }, { key: "getX", value: function() {
        if (this.getCoordinate() === null) throw new IllegalStateException("getX called on empty Point");
        return this.getCoordinate().x;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = n;
          return this.getCoordinate().compareTo(i.getCoordinate());
        }
        if (arguments.length === 2) {
          var u = arguments[0], c = arguments[1], f = u;
          return c.compare(this._coordinates, f._coordinates);
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], gn)) {
          var n = arguments[0];
          if (this.isEmpty()) return null;
          n.filter(this.getCoordinate());
        } else if (ue(arguments[0], Se)) {
          var i = arguments[0];
          if (this.isEmpty()) return null;
          i.filter(this._coordinates, 0), i.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], D)) {
          var u = arguments[0];
          u.filter(this);
        } else if (ue(arguments[0], Y)) {
          var c = arguments[0];
          c.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_POINT;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._coordinates;
      } }, { key: "getY", value: function() {
        if (this.getCoordinate() === null) throw new IllegalStateException("getY called on empty Point");
        return this.getCoordinate().y;
      } }, { key: "isEmpty", value: function() {
        return this._coordinates.size() === 0;
      } }, { key: "init", value: function(n) {
        n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), he.isTrue(n.size() <= 1), this._coordinates = n;
      } }, { key: "isSimple", value: function() {
        return !0;
      } }, { key: "interfaces_", get: function() {
        return [We];
      } }], [{ key: "constructor_", value: function() {
        this._coordinates = null;
        var n = arguments[0], i = arguments[1];
        J.constructor_.call(this, i), this.init(n);
      } }]), t;
    }(J), Ve = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "ofRing", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return Math.abs(r.ofRingSigned(e));
        }
        if (ue(arguments[0], ge)) {
          var t = arguments[0];
          return Math.abs(r.ofRingSigned(t));
        }
      } }, { key: "ofRingSigned", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          if (e.length < 3) return 0;
          for (var t = 0, n = e[0].x, i = 1; i < e.length - 1; i++) {
            var u = e[i].x - n, c = e[i + 1].y, f = e[i - 1].y;
            t += u * (f - c);
          }
          return t / 2;
        }
        if (ue(arguments[0], ge)) {
          var d = arguments[0], p = d.size();
          if (p < 3) return 0;
          var S = new T(), L = new T(), P = new T();
          d.getCoordinate(0, L), d.getCoordinate(1, P);
          var V = L.x;
          P.x -= V;
          for (var W = 0, $ = 1; $ < p - 1; $++) S.y = L.y, L.x = P.x, L.y = P.y, d.getCoordinate($ + 1, P), P.x -= V, W += L.x * (S.y - P.y);
          return W / 2;
        }
      } }]), r;
    }(), ht = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "sort", value: function() {
        var e = arguments, t = arguments[0];
        if (arguments.length === 1) t.sort(function(V, W) {
          return V.compareTo(W);
        });
        else if (arguments.length === 2) t.sort(function(V, W) {
          return e[1].compare(V, W);
        });
        else if (arguments.length === 3) {
          var n = t.slice(arguments[1], arguments[2]);
          n.sort();
          var i = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var u, c = O(i);
          try {
            for (c.s(); !(u = c.n()).done; ) {
              var f = u.value;
              t.push(f);
            }
          } catch (V) {
            c.e(V);
          } finally {
            c.f();
          }
        } else if (arguments.length === 4) {
          var d = t.slice(arguments[1], arguments[2]);
          d.sort(function(V, W) {
            return e[3].compare(V, W);
          });
          var p = t.slice(0, arguments[1]).concat(d, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var S, L = O(p);
          try {
            for (L.s(); !(S = L.n()).done; ) {
              var P = S.value;
              t.push(P);
            }
          } catch (V) {
            L.e(V);
          } finally {
            L.f();
          }
        }
      } }, { key: "asList", value: function(e) {
        var t, n = new ne(), i = O(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n.add(u);
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "copyOf", value: function(e, t) {
        return e.slice(0, t);
      } }]), r;
    }(), dn = function r() {
      s(this, r);
    }, Gt = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this._shell.getEnvelopeInternal();
      } }, { key: "getCoordinates", value: function() {
        if (this.isEmpty()) return [];
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, u = this._shell.getCoordinates(), c = 0; c < u.length; c++) n[++i] = u[c];
        for (var f = 0; f < this._holes.length; f++) for (var d = this._holes[f].getCoordinates(), p = 0; p < d.length; p++) n[++i] = d[p];
        return n;
      } }, { key: "getArea", value: function() {
        var n = 0;
        n += Ve.ofRing(this._shell.getCoordinateSequence());
        for (var i = 0; i < this._holes.length; i++) n -= Ve.ofRing(this._holes[i].getCoordinateSequence());
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = this._shell.copy(), i = new Array(this._holes.length).fill(null), u = 0; u < this._holes.length; u++) i[u] = this._holes[u].copy();
        return new t(n, i, this._factory);
      } }, { key: "isRectangle", value: function() {
        if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
        for (var n = this._shell.getCoordinateSequence(), i = this.getEnvelopeInternal(), u = 0; u < 5; u++) {
          var c = n.getX(u);
          if (c !== i.getMinX() && c !== i.getMaxX()) return !1;
          var f = n.getY(u);
          if (f !== i.getMinY() && f !== i.getMaxY()) return !1;
        }
        for (var d = n.getX(0), p = n.getY(0), S = 1; S <= 4; S++) {
          var L = n.getX(S), P = n.getY(S);
          if (L !== d == (P !== p)) return !1;
          d = L, p = P;
        }
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var u = n, c = this._shell, f = u._shell;
          if (!c.equalsExact(f, i) || this._holes.length !== u._holes.length) return !1;
          for (var d = 0; d < this._holes.length; d++) if (!this._holes[d].equalsExact(u._holes[d], i)) return !1;
          return !0;
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        if (arguments.length === 0) {
          this._shell = this.normalized(this._shell, !0);
          for (var n = 0; n < this._holes.length; n++) this._holes[n] = this.normalized(this._holes[n], !1);
          ht.sort(this._holes);
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          if (i.isEmpty()) return null;
          var c = i.getCoordinateSequence(), f = Ct.minCoordinateIndex(c, 0, c.size() - 2);
          Ct.scroll(c, f, !0), re.isCCW(c) === u && Ct.reverse(c);
        }
      } }, { key: "getCoordinate", value: function() {
        return this._shell.getCoordinate();
      } }, { key: "getNumInteriorRing", value: function() {
        return this._holes.length;
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this.getExteriorRing().reverse(), i = new Array(this.getNumInteriorRing()).fill(null), u = 0; u < i.length; u++) i[u] = this.getInteriorRingN(u).reverse();
        return this.getFactory().createPolygon(n, i);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_POLYGON;
      } }, { key: "getDimension", value: function() {
        return 2;
      } }, { key: "getLength", value: function() {
        var n = 0;
        n += this._shell.getLength();
        for (var i = 0; i < this._holes.length; i++) n += this._holes[i].getLength();
        return n;
      } }, { key: "getNumPoints", value: function() {
        for (var n = this._shell.getNumPoints(), i = 0; i < this._holes.length; i++) n += this._holes[i].getNumPoints();
        return n;
      } }, { key: "convexHull", value: function() {
        return this.getExteriorRing().convexHull();
      } }, { key: "normalized", value: function(n, i) {
        var u = n.copy();
        return this.normalize(u, i), u;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = this._shell, u = n._shell;
          return i.compareToSameClass(u);
        }
        if (arguments.length === 2) {
          var c = arguments[0], f = arguments[1], d = c, p = this._shell, S = d._shell, L = p.compareToSameClass(S, f);
          if (L !== 0) return L;
          for (var P = this.getNumInteriorRing(), V = d.getNumInteriorRing(), W = 0; W < P && W < V; ) {
            var $ = this.getInteriorRingN(W), ie = d.getInteriorRingN(W), le = $.compareToSameClass(ie, f);
            if (le !== 0) return le;
            W++;
          }
          return W < P ? 1 : W < V ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], gn)) {
          var n = arguments[0];
          this._shell.apply(n);
          for (var i = 0; i < this._holes.length; i++) this._holes[i].apply(n);
        } else if (ue(arguments[0], Se)) {
          var u = arguments[0];
          if (this._shell.apply(u), !u.isDone()) for (var c = 0; c < this._holes.length && (this._holes[c].apply(u), !u.isDone()); c++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], D)) {
          var f = arguments[0];
          f.filter(this);
        } else if (ue(arguments[0], Y)) {
          var d = arguments[0];
          d.filter(this), this._shell.apply(d);
          for (var p = 0; p < this._holes.length; p++) this._holes[p].apply(d);
        }
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        var n = new Array(this._holes.length + 1).fill(null);
        n[0] = this._shell;
        for (var i = 0; i < this._holes.length; i++) n[i + 1] = this._holes[i];
        return n.length <= 1 ? this.getFactory().createLinearRing(n[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(n);
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_POLYGON;
      } }, { key: "getExteriorRing", value: function() {
        return this._shell;
      } }, { key: "isEmpty", value: function() {
        return this._shell.isEmpty();
      } }, { key: "getInteriorRingN", value: function(n) {
        return this._holes[n];
      } }, { key: "interfaces_", get: function() {
        return [dn];
      } }], [{ key: "constructor_", value: function() {
        this._shell = null, this._holes = null;
        var n = arguments[0], i = arguments[1], u = arguments[2];
        if (J.constructor_.call(this, u), n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), J.hasNullElements(i)) throw new R("holes must not contain null elements");
        if (n.isEmpty() && J.hasNonEmptyElements(i)) throw new R("shell is empty but holes are not");
        this._shell = n, this._holes = i;
      } }]), t;
    }(J), mn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        return s(this, t), e.apply(this, arguments);
      }
      return t;
    }(Mn), xr = function(r) {
      g(t, r);
      var e = N(t);
      function t(n) {
        var i;
        return s(this, t), (i = e.call(this)).array = [], n instanceof oe && i.addAll(n), i;
      }
      return h(t, [{ key: "contains", value: function(n) {
        var i, u = O(this.array);
        try {
          for (u.s(); !(i = u.n()).done; )
            if (i.value.compareTo(n) === 0) return !0;
        } catch (c) {
          u.e(c);
        } finally {
          u.f();
        }
        return !1;
      } }, { key: "add", value: function(n) {
        if (this.contains(n)) return !1;
        for (var i = 0, u = this.array.length; i < u; i++)
          if (this.array[i].compareTo(n) === 1) return !!this.array.splice(i, 0, n);
        return this.array.push(n), !0;
      } }, { key: "addAll", value: function(n) {
        var i, u = O(n);
        try {
          for (u.s(); !(i = u.n()).done; ) {
            var c = i.value;
            this.add(c);
          }
        } catch (f) {
          u.e(f);
        } finally {
          u.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new ae();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "iterator", value: function() {
        return new Ma(this.array);
      } }]), t;
    }(mn), Ma = function() {
      function r(e) {
        s(this, r), this.array = e, this.position = 0;
      }
      return h(r, [{ key: "next", value: function() {
        if (this.position === this.array.length) throw new we();
        return this.array[this.position++];
      } }, { key: "hasNext", value: function() {
        return this.position < this.array.length;
      } }, { key: "remove", value: function() {
        throw new ae();
      } }]), r;
    }(), nt = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "computeEnvelopeInternal", value: function() {
        for (var n = new ke(), i = 0; i < this._geometries.length; i++) n.expandToInclude(this._geometries[i].getEnvelopeInternal());
        return n;
      } }, { key: "getGeometryN", value: function(n) {
        return this._geometries[n];
      } }, { key: "getCoordinates", value: function() {
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, u = 0; u < this._geometries.length; u++) for (var c = this._geometries[u].getCoordinates(), f = 0; f < c.length; f++) n[++i] = c[f];
        return n;
      } }, { key: "getArea", value: function() {
        for (var n = 0, i = 0; i < this._geometries.length; i++) n += this._geometries[i].getArea();
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var u = n;
          if (this._geometries.length !== u._geometries.length) return !1;
          for (var c = 0; c < this._geometries.length; c++) if (!this._geometries[c].equalsExact(u._geometries[c], i)) return !1;
          return !0;
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < this._geometries.length; n++) this._geometries[n].normalize();
        ht.sort(this._geometries);
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._geometries[0].getCoordinate();
      } }, { key: "getBoundaryDimension", value: function() {
        for (var n = H.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getBoundaryDimension());
        return n;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this._geometries.length, i = new ne(n), u = 0; u < n; u++) i.add(this._geometries[u].reverse());
        return this.getFactory().buildGeometry(i);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getDimension", value: function() {
        for (var n = H.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getDimension());
        return n;
      } }, { key: "getLength", value: function() {
        for (var n = 0, i = 0; i < this._geometries.length; i++) n += this._geometries[i].getLength();
        return n;
      } }, { key: "getNumPoints", value: function() {
        for (var n = 0, i = 0; i < this._geometries.length; i++) n += this._geometries[i].getNumPoints();
        return n;
      } }, { key: "getNumGeometries", value: function() {
        return this._geometries.length;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = new xr(ht.asList(this._geometries)), u = new xr(ht.asList(n._geometries));
          return this.compare(i, u);
        }
        if (arguments.length === 2) {
          for (var c = arguments[0], f = arguments[1], d = c, p = this.getNumGeometries(), S = d.getNumGeometries(), L = 0; L < p && L < S; ) {
            var P = this.getGeometryN(L), V = d.getGeometryN(L), W = P.compareToSameClass(V, f);
            if (W !== 0) return W;
            L++;
          }
          return L < p ? 1 : L < S ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (ue(arguments[0], gn)) for (var n = arguments[0], i = 0; i < this._geometries.length; i++) this._geometries[i].apply(n);
        else if (ue(arguments[0], Se)) {
          var u = arguments[0];
          if (this._geometries.length === 0) return null;
          for (var c = 0; c < this._geometries.length && (this._geometries[c].apply(u), !u.isDone()); c++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (ue(arguments[0], D)) {
          var f = arguments[0];
          f.filter(this);
          for (var d = 0; d < this._geometries.length; d++) this._geometries[d].apply(f);
        } else if (ue(arguments[0], Y)) {
          var p = arguments[0];
          p.filter(this);
          for (var S = 0; S < this._geometries.length; S++) this._geometries[S].apply(p);
        }
      } }, { key: "getBoundary", value: function() {
        return J.checkNotGeometryCollection(this), he.shouldNeverReachHere(), null;
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_GEOMETRYCOLLECTION;
      } }, { key: "isEmpty", value: function() {
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isEmpty()) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this._geometries = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            if (J.constructor_.call(this, i), n === null && (n = []), J.hasNullElements(n)) throw new R("geometries must not contain null elements");
            this._geometries = n;
          }
        }
      } }]), t;
    }(J), Fi = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "isValid", value: function() {
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && w(v(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 1 && Number.isInteger(arguments[0])) {
          var n = arguments[0];
          return this._geometries[n].getCoordinate();
        }
        return w(v(t.prototype), "getCoordinate", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return H.FALSE;
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_MULTIPOINT;
      } }, { key: "getDimension", value: function() {
        return 0;
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_MULTIPOINT;
      } }, { key: "interfaces_", get: function() {
        return [We];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        nt.constructor_.call(this, n, i);
      } }]), t;
    }(nt), Dn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "copyInternal", value: function() {
        return new t(this._points.copy(), this._factory);
      } }, { key: "getBoundaryDimension", value: function() {
        return H.FALSE;
      } }, { key: "isClosed", value: function() {
        return !!this.isEmpty() || w(v(t.prototype), "isClosed", this).call(this);
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return Ct.reverse(n), this.getFactory().createLinearRing(n);
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_LINEARRING;
      } }, { key: "validateConstruction", value: function() {
        if (!this.isEmpty() && !w(v(t.prototype), "isClosed", this).call(this)) throw new R("Points of LinearRing do not form a closed linestring");
        if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE) throw new R("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_LINEARRING;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Fe.constructor_.call(this, n, i), this.validateConstruction();
      } }]), t;
    }(Fe);
    Dn.MINIMUM_VALID_SIZE = 4;
    var tn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case t.X:
            this.x = i;
            break;
          case t.Y:
            this.y = i;
            break;
          default:
            throw new R("Invalid ordinate index: " + n);
        }
      } }, { key: "getZ", value: function() {
        return T.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
        }
        throw new R("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new R("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ();
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) T.constructor_.call(this);
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            T.constructor_.call(this, n.x, n.y);
          } else if (arguments[0] instanceof T) {
            var i = arguments[0];
            T.constructor_.call(this, i.x, i.y);
          }
        } else if (arguments.length === 2) {
          var u = arguments[0], c = arguments[1];
          T.constructor_.call(this, u, c, T.NULL_ORDINATE);
        }
      } }]), t;
    }(T);
    tn.X = 0, tn.Y = 1, tn.Z = -1, tn.M = -1;
    var nn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "getM", value: function() {
        return this._m;
      } }, { key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case t.X:
            this.x = i;
            break;
          case t.Y:
            this.y = i;
            break;
          case t.M:
            this._m = i;
            break;
          default:
            throw new R("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getZ", value: function() {
        return T.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
          case t.M:
            return this._m;
        }
        throw new R("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new R("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) T.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            T.constructor_.call(this, n.x, n.y), this._m = n._m;
          } else if (arguments[0] instanceof T) {
            var i = arguments[0];
            T.constructor_.call(this, i.x, i.y), this._m = this.getM();
          }
        } else if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2];
          T.constructor_.call(this, u, c, T.NULL_ORDINATE), this._m = f;
        }
      } }]), t;
    }(T);
    nn.X = 0, nn.Y = 1, nn.Z = -1, nn.M = 2;
    var Gi = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "getM", value: function() {
        return this._m;
      } }, { key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case T.X:
            this.x = i;
            break;
          case T.Y:
            this.y = i;
            break;
          case T.Z:
            this.z = i;
            break;
          case T.M:
            this._m = i;
            break;
          default:
            throw new R("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case T.X:
            return this.x;
          case T.Y:
            return this.y;
          case T.Z:
            return this.getZ();
          case T.M:
            return this.getM();
        }
        throw new R("Invalid ordinate index: " + n);
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) T.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            T.constructor_.call(this, n), this._m = n._m;
          } else if (arguments[0] instanceof T) {
            var i = arguments[0];
            T.constructor_.call(this, i), this._m = this.getM();
          }
        } else if (arguments.length === 4) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = arguments[3];
          T.constructor_.call(this, u, c, f), this._m = d;
        }
      } }]), t;
    }(T), ai = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "measures", value: function(e) {
        return e instanceof tn ? 0 : e instanceof nn || e instanceof Gi ? 1 : 0;
      } }, { key: "dimension", value: function(e) {
        return e instanceof tn ? 2 : e instanceof nn ? 3 : e instanceof Gi ? 4 : 3;
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return r.create(e, 0);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return t === 2 ? new tn() : t === 3 && n === 0 ? new T() : t === 3 && n === 1 ? new nn() : t === 4 && n === 1 ? new Gi() : new T();
        }
      } }]), r;
    }(), Fn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "getCoordinate", value: function(n) {
        return this.get(n);
      } }, { key: "addAll", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "boolean" && ue(arguments[0], oe)) {
          for (var n = arguments[0], i = arguments[1], u = !1, c = n.iterator(); c.hasNext(); ) this.add(c.next(), i), u = !0;
          return u;
        }
        return w(v(t.prototype), "addAll", this).apply(this, arguments);
      } }, { key: "clone", value: function() {
        for (var n = w(v(t.prototype), "clone", this).call(this), i = 0; i < this.size(); i++) n.add(i, this.get(i).clone());
        return n;
      } }, { key: "toCoordinateArray", value: function() {
        if (arguments.length === 0) return this.toArray(t.coordArrayType);
        if (arguments.length === 1) {
          var n = arguments[0];
          if (n) return this.toArray(t.coordArrayType);
          for (var i = this.size(), u = new Array(i).fill(null), c = 0; c < i; c++) u[c] = this.get(i - c - 1);
          return u;
        }
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return w(v(t.prototype), "add", this).call(this, n);
        }
        if (arguments.length === 2) {
          if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var i = arguments[0], u = arguments[1];
            return this.add(i, u, !0), !0;
          }
          if (arguments[0] instanceof T && typeof arguments[1] == "boolean") {
            var c = arguments[0], f = arguments[1];
            if (!f && this.size() >= 1) {
              var d = this.get(this.size() - 1);
              if (d.equals2D(c)) return null;
            }
            w(v(t.prototype), "add", this).call(this, c);
          } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
            var p = arguments[0], S = arguments[1];
            return this.add(p, S), !0;
          }
        } else if (arguments.length === 3) {
          if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var L = arguments[0], P = arguments[1], V = arguments[2];
            if (V) for (var W = 0; W < L.length; W++) this.add(L[W], P);
            else for (var $ = L.length - 1; $ >= 0; $--) this.add(L[$], P);
            return !0;
          }
          if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof T) {
            var ie = arguments[0], le = arguments[1], pe = arguments[2];
            if (!pe) {
              var Oe = this.size();
              if (Oe > 0) {
                if (ie > 0) {
                  var Ye = this.get(ie - 1);
                  if (Ye.equals2D(le)) return null;
                }
                if (ie < Oe) {
                  var st = this.get(ie);
                  if (st.equals2D(le)) return null;
                }
              }
            }
            w(v(t.prototype), "add", this).call(this, ie, le);
          }
        } else if (arguments.length === 4) {
          var Et = arguments[0], Mt = arguments[1], an = arguments[2], Yn = arguments[3], Un = 1;
          an > Yn && (Un = -1);
          for (var Nn = an; Nn !== Yn; Nn += Un) this.add(Et[Nn], Mt);
          return !0;
        }
      } }, { key: "closeRing", value: function() {
        if (this.size() > 0) {
          var n = this.get(0).copy();
          this.add(n, !1);
        }
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.ensureCapacity(n.length), this.add(n, !0);
          } else if (arguments.length === 2) {
            var i = arguments[0], u = arguments[1];
            this.ensureCapacity(i.length), this.add(i, u);
          }
        }
      } }]), t;
    }(ne);
    Fn.coordArrayType = new Array(0).fill(null);
    var Ge = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "isRing", value: function(e) {
        return !(e.length < 4) && !!e[0].equals2D(e[e.length - 1]);
      } }, { key: "ptNotInList", value: function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (r.indexOf(i, t) < 0) return i;
        }
        return null;
      } }, { key: "scroll", value: function(e, t) {
        var n = r.indexOf(t, e);
        if (n < 0) return null;
        var i = new Array(e.length).fill(null);
        Je.arraycopy(e, n, i, 0, e.length - n), Je.arraycopy(e, 0, i, e.length - n, n), Je.arraycopy(i, 0, e, 0, e.length);
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          if (e === t) return !0;
          if (e === null || t === null || e.length !== t.length) return !1;
          for (var n = 0; n < e.length; n++) if (!e[n].equals(t[n])) return !1;
          return !0;
        }
        if (arguments.length === 3) {
          var i = arguments[0], u = arguments[1], c = arguments[2];
          if (i === u) return !0;
          if (i === null || u === null || i.length !== u.length) return !1;
          for (var f = 0; f < i.length; f++) if (c.compare(i[f], u[f]) !== 0) return !1;
          return !0;
        }
      } }, { key: "intersection", value: function(e, t) {
        for (var n = new Fn(), i = 0; i < e.length; i++) t.intersects(e[i]) && n.add(e[i], !0);
        return n.toCoordinateArray();
      } }, { key: "measures", value: function(e) {
        if (e === null || e.length === 0) return 0;
        var t, n = 0, i = O(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n = Math.max(n, ai.measures(u));
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "hasRepeatedPoints", value: function(e) {
        for (var t = 1; t < e.length; t++) if (e[t - 1].equals(e[t])) return !0;
        return !1;
      } }, { key: "removeRepeatedPoints", value: function(e) {
        return r.hasRepeatedPoints(e) ? new Fn(e, !1).toCoordinateArray() : e;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.length - 1, n = Math.trunc(t / 2), i = 0; i <= n; i++) {
          var u = e[i];
          e[i] = e[t - i], e[t - i] = u;
        }
      } }, { key: "removeNull", value: function(e) {
        for (var t = 0, n = 0; n < e.length; n++) e[n] !== null && t++;
        var i = new Array(t).fill(null);
        if (t === 0) return i;
        for (var u = 0, c = 0; c < e.length; c++) e[c] !== null && (i[u++] = e[c]);
        return i;
      } }, { key: "copyDeep", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new Array(e.length).fill(null), n = 0; n < e.length; n++) t[n] = e[n].copy();
          return t;
        }
        if (arguments.length === 5) for (var i = arguments[0], u = arguments[1], c = arguments[2], f = arguments[3], d = arguments[4], p = 0; p < d; p++) c[f + p] = i[u + p].copy();
      } }, { key: "isEqualReversed", value: function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n], u = t[e.length - n - 1];
          if (i.compareTo(u) !== 0) return !1;
        }
        return !0;
      } }, { key: "envelope", value: function(e) {
        for (var t = new ke(), n = 0; n < e.length; n++) t.expandToInclude(e[n]);
        return t;
      } }, { key: "toCoordinateArray", value: function(e) {
        return e.toArray(r.coordArrayType);
      } }, { key: "dimension", value: function(e) {
        if (e === null || e.length === 0) return 3;
        var t, n = 0, i = O(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n = Math.max(n, ai.dimension(u));
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "atLeastNCoordinatesOrNothing", value: function(e, t) {
        return t.length >= e ? t : [];
      } }, { key: "indexOf", value: function(e, t) {
        for (var n = 0; n < t.length; n++) if (e.equals(t[n])) return n;
        return -1;
      } }, { key: "increasingDirection", value: function(e) {
        for (var t = 0; t < Math.trunc(e.length / 2); t++) {
          var n = e.length - 1 - t, i = e[t].compareTo(e[n]);
          if (i !== 0) return i;
        }
        return 1;
      } }, { key: "compare", value: function(e, t) {
        for (var n = 0; n < e.length && n < t.length; ) {
          var i = e[n].compareTo(t[n]);
          if (i !== 0) return i;
          n++;
        }
        return n < t.length ? -1 : n < e.length ? 1 : 0;
      } }, { key: "minCoordinate", value: function(e) {
        for (var t = null, n = 0; n < e.length; n++) (t === null || t.compareTo(e[n]) > 0) && (t = e[n]);
        return t;
      } }, { key: "extract", value: function(e, t, n) {
        t = en.clamp(t, 0, e.length);
        var i = (n = en.clamp(n, -1, e.length)) - t + 1;
        n < 0 && (i = 0), t >= e.length && (i = 0), n < t && (i = 0);
        var u = new Array(i).fill(null);
        if (i === 0) return u;
        for (var c = 0, f = t; f <= n; f++) u[c++] = e[f];
        return u;
      } }]), r;
    }(), Pa = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "compare", value: function(e, t) {
        var n = e, i = t;
        return Ge.compare(n, i);
      } }, { key: "interfaces_", get: function() {
        return [Ae];
      } }]), r;
    }(), Aa = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "compare", value: function(e, t) {
        var n = e, i = t;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        var u = Ge.compare(n, i);
        return Ge.isEqualReversed(n, i) ? 0 : u;
      } }, { key: "OLDcompare", value: function(e, t) {
        var n = e, i = t;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        for (var u = Ge.increasingDirection(n), c = Ge.increasingDirection(i), f = u > 0 ? 0 : n.length - 1, d = c > 0 ? 0 : n.length - 1, p = 0; p < n.length; p++) {
          var S = n[f].compareTo(i[d]);
          if (S !== 0) return S;
          f += u, d += c;
        }
        return 0;
      } }, { key: "interfaces_", get: function() {
        return [Ae];
      } }]), r;
    }();
    Ge.ForwardComparator = Pa, Ge.BidirectionalComparator = Aa, Ge.coordArrayType = new Array(0).fill(null);
    var ui = function() {
      function r(e) {
        s(this, r), this.str = e;
      }
      return h(r, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), r;
    }(), Gn = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getM", value: function(e) {
        return this.hasM() ? this._coordinates[e].getM() : Q.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
        switch (t) {
          case ge.X:
            this._coordinates[e].x = n;
            break;
          case ge.Y:
            this._coordinates[e].y = n;
            break;
          default:
            this._coordinates[e].setOrdinate(t, n);
        }
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this._coordinates[e].getZ() : Q.NaN;
      } }, { key: "size", value: function() {
        return this._coordinates.length;
      } }, { key: "getOrdinate", value: function(e, t) {
        switch (t) {
          case ge.X:
            return this._coordinates[e].x;
          case ge.Y:
            return this._coordinates[e].y;
          default:
            return this._coordinates[e].getOrdinate(t);
        }
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this._coordinates[e];
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          n.setCoordinate(this._coordinates[t]);
        }
      } }, { key: "getCoordinateCopy", value: function(e) {
        var t = this.createCoordinate();
        return t.setCoordinate(this._coordinates[e]), t;
      } }, { key: "createCoordinate", value: function() {
        return ai.create(this.getDimension(), this.getMeasures());
      } }, { key: "getDimension", value: function() {
        return this._dimension;
      } }, { key: "getX", value: function(e) {
        return this._coordinates[e].x;
      } }, { key: "getMeasures", value: function() {
        return this._measures;
      } }, { key: "expandEnvelope", value: function(e) {
        for (var t = 0; t < this._coordinates.length; t++) e.expandToInclude(this._coordinates[t]);
        return e;
      } }, { key: "copy", value: function() {
        for (var e = new Array(this.size()).fill(null), t = 0; t < this._coordinates.length; t++) {
          var n = this.createCoordinate();
          n.setCoordinate(this._coordinates[t]), e[t] = n;
        }
        return new r(e, this._dimension, this._measures);
      } }, { key: "toString", value: function() {
        if (this._coordinates.length > 0) {
          var e = new ui(17 * this._coordinates.length);
          e.append("("), e.append(this._coordinates[0]);
          for (var t = 1; t < this._coordinates.length; t++) e.append(", "), e.append(this._coordinates[t]);
          return e.append(")"), e.toString();
        }
        return "()";
      } }, { key: "getY", value: function(e) {
        return this._coordinates[e].y;
      } }, { key: "toCoordinateArray", value: function() {
        return this._coordinates;
      } }, { key: "interfaces_", get: function() {
        return [ge, q];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            r.constructor_.call(this, e, Ge.dimension(e), Ge.measures(e));
          } else if (Number.isInteger(arguments[0])) {
            var t = arguments[0];
            this._coordinates = new Array(t).fill(null);
            for (var n = 0; n < t; n++) this._coordinates[n] = new T();
          } else if (ue(arguments[0], ge)) {
            var i = arguments[0];
            if (i === null) return this._coordinates = new Array(0).fill(null), null;
            this._dimension = i.getDimension(), this._measures = i.getMeasures(), this._coordinates = new Array(i.size()).fill(null);
            for (var u = 0; u < this._coordinates.length; u++) this._coordinates[u] = i.getCoordinateCopy(u);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var c = arguments[0], f = arguments[1];
            r.constructor_.call(this, c, f, Ge.measures(c));
          } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var d = arguments[0], p = arguments[1];
            this._coordinates = new Array(d).fill(null), this._dimension = p;
            for (var S = 0; S < d; S++) this._coordinates[S] = ai.create(p);
          }
        } else if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var L = arguments[0], P = arguments[1], V = arguments[2];
            this._dimension = P, this._measures = V, this._coordinates = L === null ? new Array(0).fill(null) : L;
          } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var W = arguments[0], $ = arguments[1], ie = arguments[2];
            this._coordinates = new Array(W).fill(null), this._dimension = $, this._measures = ie;
            for (var le = 0; le < W; le++) this._coordinates[le] = this.createCoordinate();
          }
        }
      } }]), r;
    }(), qi = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "readResolve", value: function() {
        return r.instance();
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new Gn(e);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new Gn(t);
          }
        } else {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            return i > 3 && (i = 3), i < 2 && (i = 2), new Gn(n, i);
          }
          if (arguments.length === 3) {
            var u = arguments[0], c = arguments[1], f = arguments[2], d = c - f;
            return f > 1 && (f = 1), d > 3 && (d = 3), d < 2 && (d = 2), new Gn(u, d + f, f);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [ri, q];
      } }], [{ key: "instance", value: function() {
        return r.instanceObject;
      } }]), r;
    }();
    qi.instanceObject = new qi();
    var zi = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && w(v(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_MULTIPOLYGON;
      } }, { key: "getDimension", value: function() {
        return 2;
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        for (var n = new ne(), i = 0; i < this._geometries.length; i++) for (var u = this._geometries[i].getBoundary(), c = 0; c < u.getNumGeometries(); c++) n.add(u.getGeometryN(c));
        var f = new Array(n.size()).fill(null);
        return this.getFactory().createMultiLineString(n.toArray(f));
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [dn];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        nt.constructor_.call(this, n, i);
      } }]), t;
    }(nt), Nr = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "get", value: function() {
      } }, { key: "put", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "values", value: function() {
      } }, { key: "entrySet", value: function() {
      } }]), r;
    }(), Da = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), (n = e.call(this)).map = /* @__PURE__ */ new Map(), n;
      }
      return h(t, [{ key: "get", value: function(n) {
        return this.map.get(n) || null;
      } }, { key: "put", value: function(n, i) {
        return this.map.set(n, i), i;
      } }, { key: "values", value: function() {
        for (var n = new ne(), i = this.map.values(), u = i.next(); !u.done; ) n.add(u.value), u = i.next();
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new Qe();
        return this.map.entries().forEach(function(i) {
          return n.add(i);
        }), n;
      } }, { key: "size", value: function() {
        return this.map.size();
      } }]), t;
    }(Nr), _t = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "equals", value: function(e) {
        if (!(e instanceof r)) return !1;
        var t = e;
        return this._modelType === t._modelType && this._scale === t._scale;
      } }, { key: "compareTo", value: function(e) {
        var t = e, n = this.getMaximumSignificantDigits(), i = t.getMaximumSignificantDigits();
        return et.compare(n, i);
      } }, { key: "getScale", value: function() {
        return this._scale;
      } }, { key: "isFloating", value: function() {
        return this._modelType === r.FLOATING || this._modelType === r.FLOATING_SINGLE;
      } }, { key: "getType", value: function() {
        return this._modelType;
      } }, { key: "toString", value: function() {
        var e = "UNKNOWN";
        return this._modelType === r.FLOATING ? e = "Floating" : this._modelType === r.FLOATING_SINGLE ? e = "Floating-Single" : this._modelType === r.FIXED && (e = "Fixed (Scale=" + this.getScale() + ")"), e;
      } }, { key: "makePrecise", value: function() {
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return Q.isNaN(e) || this._modelType === r.FLOATING_SINGLE ? e : this._modelType === r.FIXED ? Math.round(e * this._scale) / this._scale : e;
        }
        if (arguments[0] instanceof T) {
          var t = arguments[0];
          if (this._modelType === r.FLOATING) return null;
          t.x = this.makePrecise(t.x), t.y = this.makePrecise(t.y);
        }
      } }, { key: "getMaximumSignificantDigits", value: function() {
        var e = 16;
        return this._modelType === r.FLOATING ? e = 16 : this._modelType === r.FLOATING_SINGLE ? e = 6 : this._modelType === r.FIXED && (e = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), e;
      } }, { key: "setScale", value: function(e) {
        this._scale = Math.abs(e);
      } }, { key: "interfaces_", get: function() {
        return [q, z];
      } }], [{ key: "constructor_", value: function() {
        if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = r.FLOATING;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof vn) {
            var e = arguments[0];
            this._modelType = e, e === r.FIXED && this.setScale(1);
          } else if (typeof arguments[0] == "number") {
            var t = arguments[0];
            this._modelType = r.FIXED, this.setScale(t);
          } else if (arguments[0] instanceof r) {
            var n = arguments[0];
            this._modelType = n._modelType, this._scale = n._scale;
          }
        }
      } }, { key: "mostPrecise", value: function(e, t) {
        return e.compareTo(t) >= 0 ? e : t;
      } }]), r;
    }(), vn = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "readResolve", value: function() {
        return r.nameToTypeMap.get(this._name);
      } }, { key: "toString", value: function() {
        return this._name;
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        this._name = null;
        var e = arguments[0];
        this._name = e, r.nameToTypeMap.put(e, this);
      } }]), r;
    }();
    vn.nameToTypeMap = new Da(), _t.Type = vn, _t.FIXED = new vn("FIXED"), _t.FLOATING = new vn("FLOATING"), _t.FLOATING_SINGLE = new vn("FLOATING SINGLE"), _t.maximumPreciseValue = 9007199254740992;
    var Bi = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof J) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && w(v(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? H.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        if (this.isEmpty()) return !1;
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isClosed()) return !1;
        return !0;
      } }, { key: "getTypeCode", value: function() {
        return J.TYPECODE_MULTILINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getBoundary", value: function() {
        throw new ae();
      } }, { key: "getGeometryType", value: function() {
        return J.TYPENAME_MULTILINESTRING;
      } }, { key: "interfaces_", get: function() {
        return [si];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        nt.constructor_.call(this, n, i);
      } }]), t;
    }(nt), yn = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "createEmpty", value: function(e) {
        switch (e) {
          case -1:
            return this.createGeometryCollection();
          case 0:
            return this.createPoint();
          case 1:
            return this.createLineString();
          case 2:
            return this.createPolygon();
          default:
            throw new R("Invalid dimension: " + e);
        }
      } }, { key: "toGeometry", value: function(e) {
        return e.isNull() ? this.createPoint() : e.getMinX() === e.getMaxX() && e.getMinY() === e.getMaxY() ? this.createPoint(new T(e.getMinX(), e.getMinY())) : e.getMinX() === e.getMaxX() || e.getMinY() === e.getMaxY() ? this.createLineString([new T(e.getMinX(), e.getMinY()), new T(e.getMaxX(), e.getMaxY())]) : this.createPolygon(this.createLinearRing([new T(e.getMinX(), e.getMinY()), new T(e.getMinX(), e.getMaxY()), new T(e.getMaxX(), e.getMaxY()), new T(e.getMaxX(), e.getMinY()), new T(e.getMinX(), e.getMinY())]), null);
      } }, { key: "createLineString", value: function() {
        if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createLineString(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new Fe(t, this);
          }
        }
      } }, { key: "createMultiLineString", value: function() {
        if (arguments.length === 0) return new Bi(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new Bi(e, this);
        }
      } }, { key: "buildGeometry", value: function(e) {
        for (var t = null, n = !1, i = !1, u = e.iterator(); u.hasNext(); ) {
          var c = u.next(), f = c.getTypeCode();
          t === null && (t = f), f !== t && (n = !0), c instanceof nt && (i = !0);
        }
        if (t === null) return this.createGeometryCollection();
        if (n || i) return this.createGeometryCollection(r.toGeometryArray(e));
        var d = e.iterator().next();
        if (e.size() > 1) {
          if (d instanceof Gt) return this.createMultiPolygon(r.toPolygonArray(e));
          if (d instanceof Fe) return this.createMultiLineString(r.toLineStringArray(e));
          if (d instanceof fe) return this.createMultiPoint(r.toPointArray(e));
          he.shouldNeverReachHere("Unhandled geometry type: " + d.getGeometryType());
        }
        return d;
      } }, { key: "createMultiPointFromCoords", value: function(e) {
        return this.createMultiPoint(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
      } }, { key: "createPoint", value: function() {
        if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var e = arguments[0];
            return this.createPoint(e !== null ? this.getCoordinateSequenceFactory().create([e]) : null);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new fe(t, this);
          }
        }
      } }, { key: "getCoordinateSequenceFactory", value: function() {
        return this._coordinateSequenceFactory;
      } }, { key: "createPolygon", value: function() {
        if (arguments.length === 0) return this.createPolygon(null, null);
        if (arguments.length === 1) {
          if (ue(arguments[0], ge)) {
            var e = arguments[0];
            return this.createPolygon(this.createLinearRing(e));
          }
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return this.createPolygon(this.createLinearRing(t));
          }
          if (arguments[0] instanceof Dn) {
            var n = arguments[0];
            return this.createPolygon(n, null);
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          return new Gt(i, u, this);
        }
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "createGeometryCollection", value: function() {
        if (arguments.length === 0) return new nt(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new nt(e, this);
        }
      } }, { key: "getPrecisionModel", value: function() {
        return this._precisionModel;
      } }, { key: "createLinearRing", value: function() {
        if (arguments.length === 0) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createLinearRing(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            return new Dn(t, this);
          }
        }
      } }, { key: "createMultiPolygon", value: function() {
        if (arguments.length === 0) return new zi(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new zi(e, this);
        }
      } }, { key: "createMultiPoint", value: function() {
        if (arguments.length === 0) return new Fi(null, this);
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new Fi(e, this);
          }
          if (ue(arguments[0], ge)) {
            var t = arguments[0];
            if (t === null) return this.createMultiPoint(new Array(0).fill(null));
            for (var n = new Array(t.size()).fill(null), i = 0; i < t.size(); i++) {
              var u = this.getCoordinateSequenceFactory().create(1, t.getDimension(), t.getMeasures());
              Ct.copy(t, i, u, 0, 1), n[i] = this.createPoint(u);
            }
            return this.createMultiPoint(n);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) r.constructor_.call(this, new _t(), 0);
        else if (arguments.length === 1) {
          if (ue(arguments[0], ri)) {
            var e = arguments[0];
            r.constructor_.call(this, new _t(), 0, e);
          } else if (arguments[0] instanceof _t) {
            var t = arguments[0];
            r.constructor_.call(this, t, 0, r.getDefaultCoordinateSequenceFactory());
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          r.constructor_.call(this, n, i, r.getDefaultCoordinateSequenceFactory());
        } else if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2];
          this._precisionModel = u, this._coordinateSequenceFactory = f, this._SRID = c;
        }
      } }, { key: "toMultiPolygonArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toGeometryArray", value: function(e) {
        if (e === null) return null;
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
        return qi.instance();
      } }, { key: "toMultiLineStringArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toLineStringArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toMultiPointArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toLinearRingArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toPointArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toPolygonArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "createPointFromInternalCoord", value: function(e, t) {
        return t.getPrecisionModel().makePrecise(e), t.getFactory().createPoint(e);
      } }]), r;
    }(), Yi = "XY", Fa = "XYZ", Ga = "XYM", qa = "XYZM", Ir = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, wr = "EMPTY", oi = 1, Rt = 2, qt = 3, Sr = 4, pn = 5, za = 6;
    for (var Ba in Ir) Ir[Ba].toUpperCase();
    var Ya = function() {
      function r(e) {
        s(this, r), this.wkt = e, this.index_ = -1;
      }
      return h(r, [{ key: "isAlpha_", value: function(e) {
        return e >= "a" && e <= "z" || e >= "A" && e <= "Z";
      } }, { key: "isNumeric_", value: function(e, t) {
        return e >= "0" && e <= "9" || e == "." && !(t !== void 0 && t);
      } }, { key: "isWhiteSpace_", value: function(e) {
        return e == " " || e == "	" || e == "\r" || e == `
`;
      } }, { key: "nextChar_", value: function() {
        return this.wkt.charAt(++this.index_);
      } }, { key: "nextToken", value: function() {
        var e, t = this.nextChar_(), n = this.index_, i = t;
        if (t == "(") e = Rt;
        else if (t == ",") e = pn;
        else if (t == ")") e = qt;
        else if (this.isNumeric_(t) || t == "-") e = Sr, i = this.readNumber_();
        else if (this.isAlpha_(t)) e = oi, i = this.readText_();
        else {
          if (this.isWhiteSpace_(t)) return this.nextToken();
          if (t !== "") throw new Error("Unexpected character: " + t);
          e = za;
        }
        return { position: n, value: i, type: e };
      } }, { key: "readNumber_", value: function() {
        var e, t = this.index_, n = !1, i = !1;
        do
          e == "." ? n = !0 : e != "e" && e != "E" || (i = !0), e = this.nextChar_();
        while (this.isNumeric_(e, n) || !i && (e == "e" || e == "E") || i && (e == "-" || e == "+"));
        return parseFloat(this.wkt.substring(t, this.index_--));
      } }, { key: "readText_", value: function() {
        var e, t = this.index_;
        do
          e = this.nextChar_();
        while (this.isAlpha_(e));
        return this.wkt.substring(t, this.index_--).toUpperCase();
      } }]), r;
    }(), Ua = function() {
      function r(e, t) {
        s(this, r), this.lexer_ = e, this.token_, this.layout_ = Yi, this.factory = t;
      }
      return h(r, [{ key: "consume_", value: function() {
        this.token_ = this.lexer_.nextToken();
      } }, { key: "isTokenType", value: function(e) {
        return this.token_.type == e;
      } }, { key: "match", value: function(e) {
        var t = this.isTokenType(e);
        return t && this.consume_(), t;
      } }, { key: "parse", value: function() {
        return this.consume_(), this.parseGeometry_();
      } }, { key: "parseGeometryLayout_", value: function() {
        var e = Yi, t = this.token_;
        if (this.isTokenType(oi)) {
          var n = t.value;
          n === "Z" ? e = Fa : n === "M" ? e = Ga : n === "ZM" && (e = qa), e !== Yi && this.consume_();
        }
        return e;
      } }, { key: "parseGeometryCollectionText_", value: function() {
        if (this.match(Rt)) {
          var e = [];
          do
            e.push(this.parseGeometry_());
          while (this.match(pn));
          if (this.match(qt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointText_", value: function() {
        if (this.match(Rt)) {
          var e = this.parsePoint_();
          if (this.match(qt)) return e;
        } else if (this.isEmptyGeometry_()) return null;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseLineStringText_", value: function() {
        if (this.match(Rt)) {
          var e = this.parsePointList_();
          if (this.match(qt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePolygonText_", value: function() {
        if (this.match(Rt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(qt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPointText_", value: function() {
        var e;
        if (this.match(Rt)) {
          if (e = this.token_.type == Rt ? this.parsePointTextList_() : this.parsePointList_(), this.match(qt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiLineStringText_", value: function() {
        if (this.match(Rt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(qt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPolygonText_", value: function() {
        if (this.match(Rt)) {
          var e = this.parsePolygonTextList_();
          if (this.match(qt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePoint_", value: function() {
        for (var e = [], t = this.layout_.length, n = 0; n < t; ++n) {
          var i = this.token_;
          if (!this.match(Sr)) break;
          e.push(i.value);
        }
        if (e.length == t) return e;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointList_", value: function() {
        for (var e = [this.parsePoint_()]; this.match(pn); ) e.push(this.parsePoint_());
        return e;
      } }, { key: "parsePointTextList_", value: function() {
        for (var e = [this.parsePointText_()]; this.match(pn); ) e.push(this.parsePointText_());
        return e;
      } }, { key: "parseLineStringTextList_", value: function() {
        for (var e = [this.parseLineStringText_()]; this.match(pn); ) e.push(this.parseLineStringText_());
        return e;
      } }, { key: "parsePolygonTextList_", value: function() {
        for (var e = [this.parsePolygonText_()]; this.match(pn); ) e.push(this.parsePolygonText_());
        return e;
      } }, { key: "isEmptyGeometry_", value: function() {
        var e = this.isTokenType(oi) && this.token_.value == wr;
        return e && this.consume_(), e;
      } }, { key: "formatErrorMessage_", value: function() {
        return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
      } }, { key: "parseGeometry_", value: function() {
        var e = this.factory, t = function(ie) {
          return _(T, A(ie));
        }, n = function(ie) {
          var le = ie.map(function(pe) {
            return e.createLinearRing(pe.map(t));
          });
          return le.length > 1 ? e.createPolygon(le[0], le.slice(1)) : e.createPolygon(le[0]);
        }, i = this.token_;
        if (this.match(oi)) {
          var u = i.value;
          if (this.layout_ = this.parseGeometryLayout_(), u == "GEOMETRYCOLLECTION") {
            var c = this.parseGeometryCollectionText_();
            return e.createGeometryCollection(c);
          }
          switch (u) {
            case "POINT":
              var f = this.parsePointText_();
              return f ? e.createPoint(_(T, A(f))) : e.createPoint();
            case "LINESTRING":
              var d = this.parseLineStringText_().map(t);
              return e.createLineString(d);
            case "LINEARRING":
              var p = this.parseLineStringText_().map(t);
              return e.createLinearRing(p);
            case "POLYGON":
              var S = this.parsePolygonText_();
              return S && S.length !== 0 ? n(S) : e.createPolygon();
            case "MULTIPOINT":
              var L = this.parseMultiPointText_();
              if (!L || L.length === 0) return e.createMultiPoint();
              var P = L.map(t).map(function(ie) {
                return e.createPoint(ie);
              });
              return e.createMultiPoint(P);
            case "MULTILINESTRING":
              var V = this.parseMultiLineStringText_().map(function(ie) {
                return e.createLineString(ie.map(t));
              });
              return e.createMultiLineString(V);
            case "MULTIPOLYGON":
              var W = this.parseMultiPolygonText_();
              if (!W || W.length === 0) return e.createMultiPolygon();
              var $ = W.map(n);
              return e.createMultiPolygon($);
            default:
              throw new Error("Invalid geometry type: " + u);
          }
        }
        throw new Error(this.formatErrorMessage_());
      } }]), r;
    }();
    function Lr(r) {
      if (r.isEmpty()) return "";
      var e = r.getCoordinate(), t = [e.x, e.y];
      return e.z === void 0 || Number.isNaN(e.z) || t.push(e.z), e.m === void 0 || Number.isNaN(e.m) || t.push(e.m), t.join(" ");
    }
    function qn(r) {
      for (var e = r.getCoordinates().map(function(u) {
        var c = [u.x, u.y];
        return u.z === void 0 || Number.isNaN(u.z) || c.push(u.z), u.m === void 0 || Number.isNaN(u.m) || c.push(u.m), c;
      }), t = [], n = 0, i = e.length; n < i; ++n) t.push(e[n].join(" "));
      return t.join(", ");
    }
    function br(r) {
      var e = [];
      e.push("(" + qn(r.getExteriorRing()) + ")");
      for (var t = 0, n = r.getNumInteriorRing(); t < n; ++t) e.push("(" + qn(r.getInteriorRingN(t)) + ")");
      return e.join(", ");
    }
    var Xa = { Point: Lr, LineString: qn, LinearRing: qn, Polygon: br, MultiPoint: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push("(" + Lr(r.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiLineString: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push("(" + qn(r.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiPolygon: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push("(" + br(r.getGeometryN(t)) + ")");
      return e.join(", ");
    }, GeometryCollection: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push(Tr(r.getGeometryN(t)));
      return e.join(", ");
    } };
    function Tr(r) {
      var e = r.getGeometryType(), t = Xa[e];
      e = e.toUpperCase();
      var n = function(i) {
        var u = "";
        if (i.isEmpty()) return u;
        var c = i.getCoordinate();
        return c.z === void 0 || Number.isNaN(c.z) || (u += "Z"), c.m === void 0 || Number.isNaN(c.m) || (u += "M"), u;
      }(r);
      return n.length > 0 && (e += " " + n), r.isEmpty() ? e + " " + wr : e + " (" + t(r) + ")";
    }
    var Wa = function() {
      function r(e) {
        s(this, r), this.geometryFactory = e || new yn(), this.precisionModel = this.geometryFactory.getPrecisionModel();
      }
      return h(r, [{ key: "read", value: function(e) {
        var t = new Ya(e);
        return new Ua(t, this.geometryFactory).parse();
      } }, { key: "write", value: function(e) {
        return Tr(e);
      } }]), r;
    }(), Ui = function() {
      function r(e) {
        s(this, r), this.parser = new Wa(e);
      }
      return h(r, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }], [{ key: "toLineString", value: function(e, t) {
        if (arguments.length !== 2) throw new Error("Not implemented");
        return "LINESTRING ( " + e.x + " " + e.y + ", " + t.x + " " + t.y + " )";
      } }]), r;
    }(), Te = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getIndexAlongSegment", value: function(e, t) {
        return this.computeIntLineIndex(), this._intLineIndex[e][t];
      } }, { key: "getTopologySummary", value: function() {
        var e = new ui();
        return this.isEndPoint() && e.append(" endpoint"), this._isProper && e.append(" proper"), this.isCollinear() && e.append(" collinear"), e.toString();
      } }, { key: "computeIntersection", value: function(e, t, n, i) {
        this._inputLines[0][0] = e, this._inputLines[0][1] = t, this._inputLines[1][0] = n, this._inputLines[1][1] = i, this._result = this.computeIntersect(e, t, n, i);
      } }, { key: "getIntersectionNum", value: function() {
        return this._result;
      } }, { key: "computeIntLineIndex", value: function() {
        if (arguments.length === 0) this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
          return Array(2);
        }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
        else if (arguments.length === 1) {
          var e = arguments[0], t = this.getEdgeDistance(e, 0), n = this.getEdgeDistance(e, 1);
          t > n ? (this._intLineIndex[e][0] = 0, this._intLineIndex[e][1] = 1) : (this._intLineIndex[e][0] = 1, this._intLineIndex[e][1] = 0);
        }
      } }, { key: "isProper", value: function() {
        return this.hasIntersection() && this._isProper;
      } }, { key: "setPrecisionModel", value: function(e) {
        this._precisionModel = e;
      } }, { key: "isInteriorIntersection", value: function() {
        if (arguments.length === 0) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0; t < this._result; t++) if (!this._intPt[t].equals2D(this._inputLines[e][0]) && !this._intPt[t].equals2D(this._inputLines[e][1])) return !0;
          return !1;
        }
      } }, { key: "getIntersection", value: function(e) {
        return this._intPt[e];
      } }, { key: "isEndPoint", value: function() {
        return this.hasIntersection() && !this._isProper;
      } }, { key: "hasIntersection", value: function() {
        return this._result !== r.NO_INTERSECTION;
      } }, { key: "getEdgeDistance", value: function(e, t) {
        return r.computeEdgeDistance(this._intPt[t], this._inputLines[e][0], this._inputLines[e][1]);
      } }, { key: "isCollinear", value: function() {
        return this._result === r.COLLINEAR_INTERSECTION;
      } }, { key: "toString", value: function() {
        return Ui.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ui.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
      } }, { key: "getEndpoint", value: function(e, t) {
        return this._inputLines[e][t];
      } }, { key: "isIntersection", value: function(e) {
        for (var t = 0; t < this._result; t++) if (this._intPt[t].equals2D(e)) return !0;
        return !1;
      } }, { key: "getIntersectionAlongSegment", value: function(e, t) {
        return this.computeIntLineIndex(), this._intPt[this._intLineIndex[e][t]];
      } }], [{ key: "constructor_", value: function() {
        this._result = null, this._inputLines = Array(2).fill().map(function() {
          return Array(2);
        }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new T(), this._intPt[1] = new T(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
      } }, { key: "computeEdgeDistance", value: function(e, t, n) {
        var i = Math.abs(n.x - t.x), u = Math.abs(n.y - t.y), c = -1;
        if (e.equals(t)) c = 0;
        else if (e.equals(n)) c = i > u ? i : u;
        else {
          var f = Math.abs(e.x - t.x), d = Math.abs(e.y - t.y);
          (c = i > u ? f : d) !== 0 || e.equals(t) || (c = Math.max(f, d));
        }
        return he.isTrue(!(c === 0 && !e.equals(t)), "Bad distance calculation"), c;
      } }, { key: "nonRobustComputeEdgeDistance", value: function(e, t, n) {
        var i = e.x - t.x, u = e.y - t.y, c = Math.sqrt(i * i + u * u);
        return he.isTrue(!(c === 0 && !e.equals(t)), "Invalid distance calculation"), c;
      } }]), r;
    }();
    Te.DONT_INTERSECT = 0, Te.DO_INTERSECT = 1, Te.COLLINEAR = 2, Te.NO_INTERSECTION = 0, Te.POINT_INTERSECTION = 1, Te.COLLINEAR_INTERSECTION = 2;
    var rn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        return s(this, t), e.call(this);
      }
      return h(t, [{ key: "isInSegmentEnvelopes", value: function(n) {
        var i = new ke(this._inputLines[0][0], this._inputLines[0][1]), u = new ke(this._inputLines[1][0], this._inputLines[1][1]);
        return i.contains(n) && u.contains(n);
      } }, { key: "computeIntersection", value: function() {
        if (arguments.length !== 3) return w(v(t.prototype), "computeIntersection", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = arguments[2];
        if (this._isProper = !1, ke.intersects(i, u, n) && re.index(i, u, n) === 0 && re.index(u, i, n) === 0) return this._isProper = !0, (n.equals(i) || n.equals(u)) && (this._isProper = !1), this._result = Te.POINT_INTERSECTION, null;
        this._result = Te.NO_INTERSECTION;
      } }, { key: "intersection", value: function(n, i, u, c) {
        var f = this.intersectionSafe(n, i, u, c);
        return this.isInSegmentEnvelopes(f) || (f = new T(t.nearestEndpoint(n, i, u, c))), this._precisionModel !== null && this._precisionModel.makePrecise(f), f;
      } }, { key: "checkDD", value: function(n, i, u, c, f) {
        var d = $t.intersection(n, i, u, c), p = this.isInSegmentEnvelopes(d);
        Je.out.println("DD in env = " + p + "  --------------------- " + d), f.distance(d) > 1e-4 && Je.out.println("Distance = " + f.distance(d));
      } }, { key: "intersectionSafe", value: function(n, i, u, c) {
        var f = An.intersection(n, i, u, c);
        return f === null && (f = t.nearestEndpoint(n, i, u, c)), f;
      } }, { key: "computeCollinearIntersection", value: function(n, i, u, c) {
        var f = ke.intersects(n, i, u), d = ke.intersects(n, i, c), p = ke.intersects(u, c, n), S = ke.intersects(u, c, i);
        return f && d ? (this._intPt[0] = u, this._intPt[1] = c, Te.COLLINEAR_INTERSECTION) : p && S ? (this._intPt[0] = n, this._intPt[1] = i, Te.COLLINEAR_INTERSECTION) : f && p ? (this._intPt[0] = u, this._intPt[1] = n, !u.equals(n) || d || S ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : f && S ? (this._intPt[0] = u, this._intPt[1] = i, !u.equals(i) || d || p ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : d && p ? (this._intPt[0] = c, this._intPt[1] = n, !c.equals(n) || f || S ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : d && S ? (this._intPt[0] = c, this._intPt[1] = i, !c.equals(i) || f || p ? Te.COLLINEAR_INTERSECTION : Te.POINT_INTERSECTION) : Te.NO_INTERSECTION;
      } }, { key: "computeIntersect", value: function(n, i, u, c) {
        if (this._isProper = !1, !ke.intersects(n, i, u, c)) return Te.NO_INTERSECTION;
        var f = re.index(n, i, u), d = re.index(n, i, c);
        if (f > 0 && d > 0 || f < 0 && d < 0) return Te.NO_INTERSECTION;
        var p = re.index(u, c, n), S = re.index(u, c, i);
        return p > 0 && S > 0 || p < 0 && S < 0 ? Te.NO_INTERSECTION : f === 0 && d === 0 && p === 0 && S === 0 ? this.computeCollinearIntersection(n, i, u, c) : (f === 0 || d === 0 || p === 0 || S === 0 ? (this._isProper = !1, n.equals2D(u) || n.equals2D(c) ? this._intPt[0] = n : i.equals2D(u) || i.equals2D(c) ? this._intPt[0] = i : f === 0 ? this._intPt[0] = new T(u) : d === 0 ? this._intPt[0] = new T(c) : p === 0 ? this._intPt[0] = new T(n) : S === 0 && (this._intPt[0] = new T(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, u, c)), Te.POINT_INTERSECTION);
      } }], [{ key: "nearestEndpoint", value: function(n, i, u, c) {
        var f = n, d = lt.pointToSegment(n, u, c), p = lt.pointToSegment(i, u, c);
        return p < d && (d = p, f = i), (p = lt.pointToSegment(u, n, i)) < d && (d = p, f = u), (p = lt.pointToSegment(c, n, i)) < d && (d = p, f = c), f;
      } }]), t;
    }(Te), Va = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "countSegment", value: function(e, t) {
        if (e.x < this._p.x && t.x < this._p.x) return null;
        if (this._p.x === t.x && this._p.y === t.y) return this._isPointOnSegment = !0, null;
        if (e.y === this._p.y && t.y === this._p.y) {
          var n = e.x, i = t.x;
          return n > i && (n = t.x, i = e.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
        }
        if (e.y > this._p.y && t.y <= this._p.y || t.y > this._p.y && e.y <= this._p.y) {
          var u = re.index(e, t, this._p);
          if (u === re.COLLINEAR) return this._isPointOnSegment = !0, null;
          t.y < e.y && (u = -u), u === re.LEFT && this._crossingCount++;
        }
      } }, { key: "isPointInPolygon", value: function() {
        return this.getLocation() !== I.EXTERIOR;
      } }, { key: "getLocation", value: function() {
        return this._isPointOnSegment ? I.BOUNDARY : this._crossingCount % 2 == 1 ? I.INTERIOR : I.EXTERIOR;
      } }, { key: "isOnSegment", value: function() {
        return this._isPointOnSegment;
      } }], [{ key: "constructor_", value: function() {
        this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
        var e = arguments[0];
        this._p = e;
      } }, { key: "locatePointInRing", value: function() {
        if (arguments[0] instanceof T && ue(arguments[1], ge)) {
          for (var e = arguments[0], t = arguments[1], n = new r(e), i = new T(), u = new T(), c = 1; c < t.size(); c++) if (t.getCoordinate(c, i), t.getCoordinate(c - 1, u), n.countSegment(i, u), n.isOnSegment()) return n.getLocation();
          return n.getLocation();
        }
        if (arguments[0] instanceof T && arguments[1] instanceof Array) {
          for (var f = arguments[0], d = arguments[1], p = new r(f), S = 1; S < d.length; S++) {
            var L = d[S], P = d[S - 1];
            if (p.countSegment(L, P), p.isOnSegment()) return p.getLocation();
          }
          return p.getLocation();
        }
      } }]), r;
    }(), Xi = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "isOnLine", value: function() {
        if (arguments[0] instanceof T && ue(arguments[1], ge)) {
          for (var e = arguments[0], t = arguments[1], n = new rn(), i = new T(), u = new T(), c = t.size(), f = 1; f < c; f++) if (t.getCoordinate(f - 1, i), t.getCoordinate(f, u), n.computeIntersection(e, i, u), n.hasIntersection()) return !0;
          return !1;
        }
        if (arguments[0] instanceof T && arguments[1] instanceof Array) {
          for (var d = arguments[0], p = arguments[1], S = new rn(), L = 1; L < p.length; L++) {
            var P = p[L - 1], V = p[L];
            if (S.computeIntersection(d, P, V), S.hasIntersection()) return !0;
          }
          return !1;
        }
      } }, { key: "locateInRing", value: function(e, t) {
        return Va.locatePointInRing(e, t);
      } }, { key: "isInRing", value: function(e, t) {
        return r.locateInRing(e, t) !== I.EXTERIOR;
      } }]), r;
    }(), ct = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setAllLocations", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] = e;
      } }, { key: "isNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] !== I.NONE) return !1;
        return !0;
      } }, { key: "setAllLocationsIfNull", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] === I.NONE && (this.location[t] = e);
      } }, { key: "isLine", value: function() {
        return this.location.length === 1;
      } }, { key: "merge", value: function(e) {
        if (e.location.length > this.location.length) {
          var t = new Array(3).fill(null);
          t[U.ON] = this.location[U.ON], t[U.LEFT] = I.NONE, t[U.RIGHT] = I.NONE, this.location = t;
        }
        for (var n = 0; n < this.location.length; n++) this.location[n] === I.NONE && n < e.location.length && (this.location[n] = e.location[n]);
      } }, { key: "getLocations", value: function() {
        return this.location;
      } }, { key: "flip", value: function() {
        if (this.location.length <= 1) return null;
        var e = this.location[U.LEFT];
        this.location[U.LEFT] = this.location[U.RIGHT], this.location[U.RIGHT] = e;
      } }, { key: "toString", value: function() {
        var e = new Jt();
        return this.location.length > 1 && e.append(I.toLocationSymbol(this.location[U.LEFT])), e.append(I.toLocationSymbol(this.location[U.ON])), this.location.length > 1 && e.append(I.toLocationSymbol(this.location[U.RIGHT])), e.toString();
      } }, { key: "setLocations", value: function(e, t, n) {
        this.location[U.ON] = e, this.location[U.LEFT] = t, this.location[U.RIGHT] = n;
      } }, { key: "get", value: function(e) {
        return e < this.location.length ? this.location[e] : I.NONE;
      } }, { key: "isArea", value: function() {
        return this.location.length > 1;
      } }, { key: "isAnyNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] === I.NONE) return !0;
        return !1;
      } }, { key: "setLocation", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.setLocation(U.ON, e);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.location[t] = n;
        }
      } }, { key: "init", value: function(e) {
        this.location = new Array(e).fill(null), this.setAllLocations(I.NONE);
      } }, { key: "isEqualOnSide", value: function(e, t) {
        return this.location[t] === e.location[t];
      } }, { key: "allPositionsEqual", value: function(e) {
        for (var t = 0; t < this.location.length; t++) if (this.location[t] !== e) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this.location = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            this.init(e.length);
          } else if (Number.isInteger(arguments[0])) {
            var t = arguments[0];
            this.init(1), this.location[U.ON] = t;
          } else if (arguments[0] instanceof r) {
            var n = arguments[0];
            if (this.init(n.location.length), n !== null) for (var i = 0; i < this.location.length; i++) this.location[i] = n.location[i];
          }
        } else if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2];
          this.init(3), this.location[U.ON] = u, this.location[U.LEFT] = c, this.location[U.RIGHT] = f;
        }
      } }]), r;
    }(), ft = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getGeometryCount", value: function() {
        var e = 0;
        return this.elt[0].isNull() || e++, this.elt[1].isNull() || e++, e;
      } }, { key: "setAllLocations", value: function(e, t) {
        this.elt[e].setAllLocations(t);
      } }, { key: "isNull", value: function(e) {
        return this.elt[e].isNull();
      } }, { key: "setAllLocationsIfNull", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.setAllLocationsIfNull(0, e), this.setAllLocationsIfNull(1, e);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.elt[t].setAllLocationsIfNull(n);
        }
      } }, { key: "isLine", value: function(e) {
        return this.elt[e].isLine();
      } }, { key: "merge", value: function(e) {
        for (var t = 0; t < 2; t++) this.elt[t] === null && e.elt[t] !== null ? this.elt[t] = new ct(e.elt[t]) : this.elt[t].merge(e.elt[t]);
      } }, { key: "flip", value: function() {
        this.elt[0].flip(), this.elt[1].flip();
      } }, { key: "getLocation", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.elt[e].get(U.ON);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return this.elt[t].get(n);
        }
      } }, { key: "toString", value: function() {
        var e = new Jt();
        return this.elt[0] !== null && (e.append("A:"), e.append(this.elt[0].toString())), this.elt[1] !== null && (e.append(" B:"), e.append(this.elt[1].toString())), e.toString();
      } }, { key: "isArea", value: function() {
        if (arguments.length === 0) return this.elt[0].isArea() || this.elt[1].isArea();
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.elt[e].isArea();
        }
      } }, { key: "isAnyNull", value: function(e) {
        return this.elt[e].isAnyNull();
      } }, { key: "setLocation", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.elt[e].setLocation(U.ON, t);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2];
          this.elt[n].setLocation(i, u);
        }
      } }, { key: "isEqualOnSide", value: function(e, t) {
        return this.elt[0].isEqualOnSide(e.elt[0], t) && this.elt[1].isEqualOnSide(e.elt[1], t);
      } }, { key: "allPositionsEqual", value: function(e, t) {
        return this.elt[e].allPositionsEqual(t);
      } }, { key: "toLine", value: function(e) {
        this.elt[e].isArea() && (this.elt[e] = new ct(this.elt[e].location[0]));
      } }], [{ key: "constructor_", value: function() {
        if (this.elt = new Array(2).fill(null), arguments.length === 1) {
          if (Number.isInteger(arguments[0])) {
            var e = arguments[0];
            this.elt[0] = new ct(e), this.elt[1] = new ct(e);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            this.elt[0] = new ct(t.elt[0]), this.elt[1] = new ct(t.elt[1]);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.elt[0] = new ct(I.NONE), this.elt[1] = new ct(I.NONE), this.elt[n].setLocation(i);
        } else if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2];
          this.elt[0] = new ct(u, c, f), this.elt[1] = new ct(u, c, f);
        } else if (arguments.length === 4) {
          var d = arguments[0], p = arguments[1], S = arguments[2], L = arguments[3];
          this.elt[0] = new ct(I.NONE, I.NONE, I.NONE), this.elt[1] = new ct(I.NONE, I.NONE, I.NONE), this.elt[d].setLocations(p, S, L);
        }
      } }, { key: "toLineLabel", value: function(e) {
        for (var t = new r(I.NONE), n = 0; n < 2; n++) t.setLocation(n, e.getLocation(n));
        return t;
      } }]), r;
    }(), li = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "computeRing", value: function() {
        if (this._ring !== null) return null;
        for (var e = new Array(this._pts.size()).fill(null), t = 0; t < this._pts.size(); t++) e[t] = this._pts.get(t);
        this._ring = this._geometryFactory.createLinearRing(e), this._isHole = re.isCCW(this._ring.getCoordinates());
      } }, { key: "isIsolated", value: function() {
        return this._label.getGeometryCount() === 1;
      } }, { key: "computePoints", value: function(e) {
        this._startDe = e;
        var t = e, n = !0;
        do {
          if (t === null) throw new tt("Found null DirectedEdge");
          if (t.getEdgeRing() === this) throw new tt("Directed Edge visited twice during ring-building at " + t.getCoordinate());
          this._edges.add(t);
          var i = t.getLabel();
          he.isTrue(i.isArea()), this.mergeLabel(i), this.addPoints(t.getEdge(), t.isForward(), n), n = !1, this.setEdgeRing(t, this), t = this.getNext(t);
        } while (t !== this._startDe);
      } }, { key: "getLinearRing", value: function() {
        return this._ring;
      } }, { key: "getCoordinate", value: function(e) {
        return this._pts.get(e);
      } }, { key: "computeMaxNodeDegree", value: function() {
        this._maxNodeDegree = 0;
        var e = this._startDe;
        do {
          var t = e.getNode().getEdges().getOutgoingDegree(this);
          t > this._maxNodeDegree && (this._maxNodeDegree = t), e = this.getNext(e);
        } while (e !== this._startDe);
        this._maxNodeDegree *= 2;
      } }, { key: "addPoints", value: function(e, t, n) {
        var i = e.getCoordinates();
        if (t) {
          var u = 1;
          n && (u = 0);
          for (var c = u; c < i.length; c++) this._pts.add(i[c]);
        } else {
          var f = i.length - 2;
          n && (f = i.length - 1);
          for (var d = f; d >= 0; d--) this._pts.add(i[d]);
        }
      } }, { key: "isHole", value: function() {
        return this._isHole;
      } }, { key: "setInResult", value: function() {
        var e = this._startDe;
        do
          e.getEdge().setInResult(!0), e = e.getNext();
        while (e !== this._startDe);
      } }, { key: "containsPoint", value: function(e) {
        var t = this.getLinearRing();
        if (!t.getEnvelopeInternal().contains(e) || !Xi.isInRing(e, t.getCoordinates())) return !1;
        for (var n = this._holes.iterator(); n.hasNext(); )
          if (n.next().containsPoint(e)) return !1;
        return !0;
      } }, { key: "addHole", value: function(e) {
        this._holes.add(e);
      } }, { key: "isShell", value: function() {
        return this._shell === null;
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "getMaxNodeDegree", value: function() {
        return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
      } }, { key: "getShell", value: function() {
        return this._shell;
      } }, { key: "mergeLabel", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.mergeLabel(e, 0), this.mergeLabel(e, 1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], i = t.getLocation(n, U.RIGHT);
          if (i === I.NONE) return null;
          if (this._label.getLocation(n) === I.NONE) return this._label.setLocation(n, i), null;
        }
      } }, { key: "setShell", value: function(e) {
        this._shell = e, e !== null && e.addHole(this);
      } }, { key: "toPolygon", value: function(e) {
        for (var t = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) t[n] = this._holes.get(n).getLinearRing();
        return e.createPolygon(this.getLinearRing(), t);
      } }], [{ key: "constructor_", value: function() {
        if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new ne(), this._pts = new ne(), this._label = new ft(I.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new ne(), this._geometryFactory = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            this._geometryFactory = t, this.computePoints(e), this.computeRing();
          }
        }
      } }]), r;
    }(), Ha = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "setEdgeRing", value: function(n, i) {
        n.setMinEdgeRing(i);
      } }, { key: "getNext", value: function(n) {
        return n.getNextMin();
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        li.constructor_.call(this, n, i);
      } }]), t;
    }(li), Za = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "buildMinimalRings", value: function() {
        var n = new ne(), i = this._startDe;
        do {
          if (i.getMinEdgeRing() === null) {
            var u = new Ha(i, this._geometryFactory);
            n.add(u);
          }
          i = i.getNext();
        } while (i !== this._startDe);
        return n;
      } }, { key: "setEdgeRing", value: function(n, i) {
        n.setEdgeRing(i);
      } }, { key: "linkDirectedEdgesForMinimalEdgeRings", value: function() {
        var n = this._startDe;
        do
          n.getNode().getEdges().linkMinimalDirectedEdges(this), n = n.getNext();
        while (n !== this._startDe);
      } }, { key: "getNext", value: function(n) {
        return n.getNext();
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        li.constructor_.call(this, n, i);
      } }]), t;
    }(li), Cr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setVisited", value: function(e) {
        this._isVisited = e;
      } }, { key: "setInResult", value: function(e) {
        this._isInResult = e;
      } }, { key: "isCovered", value: function() {
        return this._isCovered;
      } }, { key: "isCoveredSet", value: function() {
        return this._isCoveredSet;
      } }, { key: "setLabel", value: function(e) {
        this._label = e;
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "setCovered", value: function(e) {
        this._isCovered = e, this._isCoveredSet = !0;
      } }, { key: "updateIM", value: function(e) {
        he.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(e);
      } }, { key: "isInResult", value: function() {
        return this._isInResult;
      } }, { key: "isVisited", value: function() {
        return this._isVisited;
      } }], [{ key: "constructor_", value: function() {
        if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this._label = e;
          }
        }
      } }]), r;
    }(), hi = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "isIncidentEdgeInResult", value: function() {
        for (var n = this.getEdges().getEdges().iterator(); n.hasNext(); )
          if (n.next().getEdge().isInResult()) return !0;
        return !1;
      } }, { key: "isIsolated", value: function() {
        return this._label.getGeometryCount() === 1;
      } }, { key: "getCoordinate", value: function() {
        return this._coord;
      } }, { key: "print", value: function(n) {
        n.println("node " + this._coord + " lbl: " + this._label);
      } }, { key: "computeIM", value: function(n) {
      } }, { key: "computeMergedLocation", value: function(n, i) {
        var u = I.NONE;
        if (u = this._label.getLocation(i), !n.isNull(i)) {
          var c = n.getLocation(i);
          u !== I.BOUNDARY && (u = c);
        }
        return u;
      } }, { key: "setLabel", value: function() {
        if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return w(v(t.prototype), "setLabel", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        this._label === null ? this._label = new ft(n, i) : this._label.setLocation(n, i);
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "mergeLabel", value: function() {
        if (arguments[0] instanceof t) {
          var n = arguments[0];
          this.mergeLabel(n._label);
        } else if (arguments[0] instanceof ft) for (var i = arguments[0], u = 0; u < 2; u++) {
          var c = this.computeMergedLocation(i, u), f = this._label.getLocation(u);
          f === I.NONE && this._label.setLocation(u, c);
        }
      } }, { key: "add", value: function(n) {
        this._edges.insert(n), n.setNode(this);
      } }, { key: "setLabelBoundary", value: function(n) {
        if (this._label === null) return null;
        var i = I.NONE;
        this._label !== null && (i = this._label.getLocation(n));
        var u = null;
        switch (i) {
          case I.BOUNDARY:
            u = I.INTERIOR;
            break;
          case I.INTERIOR:
          default:
            u = I.BOUNDARY;
        }
        this._label.setLocation(n, u);
      } }], [{ key: "constructor_", value: function() {
        this._coord = null, this._edges = null;
        var n = arguments[0], i = arguments[1];
        this._coord = n, this._edges = i, this._label = new ft(0, I.NONE);
      } }]), t;
    }(Cr), ja = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        return s(this, t), e.apply(this, arguments);
      }
      return t;
    }(Nr);
    function Rr(r) {
      return r == null ? 0 : r.color;
    }
    function ye(r) {
      return r == null ? null : r.parent;
    }
    function wt(r, e) {
      r !== null && (r.color = e);
    }
    function Wi(r) {
      return r == null ? null : r.left;
    }
    function Or(r) {
      return r == null ? null : r.right;
    }
    var zn = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), (n = e.call(this)).root_ = null, n.size_ = 0, n;
      }
      return h(t, [{ key: "get", value: function(n) {
        for (var i = this.root_; i !== null; ) {
          var u = n.compareTo(i.key);
          if (u < 0) i = i.left;
          else {
            if (!(u > 0)) return i.value;
            i = i.right;
          }
        }
        return null;
      } }, { key: "put", value: function(n, i) {
        if (this.root_ === null) return this.root_ = { key: n, value: i, left: null, right: null, parent: null, color: 0, getValue: function() {
          return this.value;
        }, getKey: function() {
          return this.key;
        } }, this.size_ = 1, null;
        var u, c, f = this.root_;
        do
          if (u = f, (c = n.compareTo(f.key)) < 0) f = f.left;
          else {
            if (!(c > 0)) {
              var d = f.value;
              return f.value = i, d;
            }
            f = f.right;
          }
        while (f !== null);
        var p = { key: n, left: null, right: null, value: i, parent: u, color: 0, getValue: function() {
          return this.value;
        }, getKey: function() {
          return this.key;
        } };
        return c < 0 ? u.left = p : u.right = p, this.fixAfterInsertion(p), this.size_++, null;
      } }, { key: "fixAfterInsertion", value: function(n) {
        var i;
        for (n.color = 1; n != null && n !== this.root_ && n.parent.color === 1; ) ye(n) === Wi(ye(ye(n))) ? Rr(i = Or(ye(ye(n)))) === 1 ? (wt(ye(n), 0), wt(i, 0), wt(ye(ye(n)), 1), n = ye(ye(n))) : (n === Or(ye(n)) && (n = ye(n), this.rotateLeft(n)), wt(ye(n), 0), wt(ye(ye(n)), 1), this.rotateRight(ye(ye(n)))) : Rr(i = Wi(ye(ye(n)))) === 1 ? (wt(ye(n), 0), wt(i, 0), wt(ye(ye(n)), 1), n = ye(ye(n))) : (n === Wi(ye(n)) && (n = ye(n), this.rotateRight(n)), wt(ye(n), 0), wt(ye(ye(n)), 1), this.rotateLeft(ye(ye(n))));
        this.root_.color = 0;
      } }, { key: "values", value: function() {
        var n = new ne(), i = this.getFirstEntry();
        if (i !== null) for (n.add(i.value); (i = t.successor(i)) !== null; ) n.add(i.value);
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new Qe(), i = this.getFirstEntry();
        if (i !== null) for (n.add(i); (i = t.successor(i)) !== null; ) n.add(i);
        return n;
      } }, { key: "rotateLeft", value: function(n) {
        if (n != null) {
          var i = n.right;
          n.right = i.left, i.left != null && (i.left.parent = n), i.parent = n.parent, n.parent == null ? this.root_ = i : n.parent.left === n ? n.parent.left = i : n.parent.right = i, i.left = n, n.parent = i;
        }
      } }, { key: "rotateRight", value: function(n) {
        if (n != null) {
          var i = n.left;
          n.left = i.right, i.right != null && (i.right.parent = n), i.parent = n.parent, n.parent == null ? this.root_ = i : n.parent.right === n ? n.parent.right = i : n.parent.left = i, i.right = n, n.parent = i;
        }
      } }, { key: "getFirstEntry", value: function() {
        var n = this.root_;
        if (n != null) for (; n.left != null; ) n = n.left;
        return n;
      } }, { key: "size", value: function() {
        return this.size_;
      } }, { key: "containsKey", value: function(n) {
        for (var i = this.root_; i !== null; ) {
          var u = n.compareTo(i.key);
          if (u < 0) i = i.left;
          else {
            if (!(u > 0)) return !0;
            i = i.right;
          }
        }
        return !1;
      } }], [{ key: "successor", value: function(n) {
        var i;
        if (n === null) return null;
        if (n.right !== null) {
          for (i = n.right; i.left !== null; ) i = i.left;
          return i;
        }
        i = n.parent;
        for (var u = n; i !== null && u === i.right; ) u = i, i = i.parent;
        return i;
      } }]), t;
    }(ja), Mr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "find", value: function(e) {
        return this.nodeMap.get(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof T) {
          var e = arguments[0], t = this.nodeMap.get(e);
          return t === null && (t = this.nodeFact.createNode(e), this.nodeMap.put(e, t)), t;
        }
        if (arguments[0] instanceof hi) {
          var n = arguments[0], i = this.nodeMap.get(n.getCoordinate());
          return i === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (i.mergeLabel(n), i);
        }
      } }, { key: "print", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "iterator", value: function() {
        return this.nodeMap.values().iterator();
      } }, { key: "values", value: function() {
        return this.nodeMap.values();
      } }, { key: "getBoundaryNodes", value: function(e) {
        for (var t = new ne(), n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().getLocation(e) === I.BOUNDARY && t.add(i);
        }
        return t;
      } }, { key: "add", value: function(e) {
        var t = e.getCoordinate();
        this.addNode(t).add(e);
      } }], [{ key: "constructor_", value: function() {
        this.nodeMap = new zn(), this.nodeFact = null;
        var e = arguments[0];
        this.nodeFact = e;
      } }]), r;
    }(), He = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "isNorthern", value: function(e) {
        return e === r.NE || e === r.NW;
      } }, { key: "isOpposite", value: function(e, t) {
        return e !== t && (e - t + 4) % 4 === 2;
      } }, { key: "commonHalfPlane", value: function(e, t) {
        if (e === t) return e;
        if ((e - t + 4) % 4 === 2) return -1;
        var n = e < t ? e : t;
        return n === 0 && (e > t ? e : t) === 3 ? 3 : n;
      } }, { key: "isInHalfPlane", value: function(e, t) {
        return t === r.SE ? e === r.SE || e === r.SW : e === t || e === t + 1;
      } }, { key: "quadrant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1];
          if (e === 0 && t === 0) throw new R("Cannot compute the quadrant for point ( " + e + ", " + t + " )");
          return e >= 0 ? t >= 0 ? r.NE : r.SE : t >= 0 ? r.NW : r.SW;
        }
        if (arguments[0] instanceof T && arguments[1] instanceof T) {
          var n = arguments[0], i = arguments[1];
          if (i.x === n.x && i.y === n.y) throw new R("Cannot compute the quadrant for two identical points " + n);
          return i.x >= n.x ? i.y >= n.y ? r.NE : r.SE : i.y >= n.y ? r.NW : r.SW;
        }
      } }]), r;
    }();
    He.NE = 0, He.NW = 1, He.SW = 2, He.SE = 3;
    var Pr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compareDirection", value: function(e) {
        return this._dx === e._dx && this._dy === e._dy ? 0 : this._quadrant > e._quadrant ? 1 : this._quadrant < e._quadrant ? -1 : re.index(e._p0, e._p1, this._p1);
      } }, { key: "getDy", value: function() {
        return this._dy;
      } }, { key: "getCoordinate", value: function() {
        return this._p0;
      } }, { key: "setNode", value: function(e) {
        this._node = e;
      } }, { key: "print", value: function(e) {
        var t = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), i = n.lastIndexOf("."), u = n.substring(i + 1);
        e.print("  " + u + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.compareDirection(t);
      } }, { key: "getDirectedCoordinate", value: function() {
        return this._p1;
      } }, { key: "getDx", value: function() {
        return this._dx;
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "getQuadrant", value: function() {
        return this._quadrant;
      } }, { key: "getNode", value: function() {
        return this._node;
      } }, { key: "toString", value: function() {
        var e = Math.atan2(this._dy, this._dx), t = this.getClass().getName(), n = t.lastIndexOf(".");
        return "  " + t.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label;
      } }, { key: "computeLabel", value: function(e) {
      } }, { key: "init", value: function(e, t) {
        this._p0 = e, this._p1 = t, this._dx = t.x - e.x, this._dy = t.y - e.y, this._quadrant = He.quadrant(this._dx, this._dy), he.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
      } }, { key: "interfaces_", get: function() {
        return [z];
      } }], [{ key: "constructor_", value: function() {
        if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
          var e = arguments[0];
          this._edge = e;
        } else if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], i = arguments[2];
          r.constructor_.call(this, t, n, i, null);
        } else if (arguments.length === 4) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = arguments[3];
          r.constructor_.call(this, u), this.init(c, f), this._label = d;
        }
      } }]), r;
    }(), Vi = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "getNextMin", value: function() {
        return this._nextMin;
      } }, { key: "getDepth", value: function(n) {
        return this._depth[n];
      } }, { key: "setVisited", value: function(n) {
        this._isVisited = n;
      } }, { key: "computeDirectedLabel", value: function() {
        this._label = new ft(this._edge.getLabel()), this._isForward || this._label.flip();
      } }, { key: "getNext", value: function() {
        return this._next;
      } }, { key: "setDepth", value: function(n, i) {
        if (this._depth[n] !== -999 && this._depth[n] !== i) throw new tt("assigned depths do not match", this.getCoordinate());
        this._depth[n] = i;
      } }, { key: "isInteriorAreaEdge", value: function() {
        for (var n = !0, i = 0; i < 2; i++) this._label.isArea(i) && this._label.getLocation(i, U.LEFT) === I.INTERIOR && this._label.getLocation(i, U.RIGHT) === I.INTERIOR || (n = !1);
        return n;
      } }, { key: "setNextMin", value: function(n) {
        this._nextMin = n;
      } }, { key: "print", value: function(n) {
        w(v(t.prototype), "print", this).call(this, n), n.print(" " + this._depth[U.LEFT] + "/" + this._depth[U.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
      } }, { key: "setMinEdgeRing", value: function(n) {
        this._minEdgeRing = n;
      } }, { key: "isLineEdge", value: function() {
        var n = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, I.EXTERIOR), u = !this._label.isArea(1) || this._label.allPositionsEqual(1, I.EXTERIOR);
        return n && i && u;
      } }, { key: "setEdgeRing", value: function(n) {
        this._edgeRing = n;
      } }, { key: "getMinEdgeRing", value: function() {
        return this._minEdgeRing;
      } }, { key: "getDepthDelta", value: function() {
        var n = this._edge.getDepthDelta();
        return this._isForward || (n = -n), n;
      } }, { key: "setInResult", value: function(n) {
        this._isInResult = n;
      } }, { key: "getSym", value: function() {
        return this._sym;
      } }, { key: "isForward", value: function() {
        return this._isForward;
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "printEdge", value: function(n) {
        this.print(n), n.print(" "), this._isForward ? this._edge.print(n) : this._edge.printReverse(n);
      } }, { key: "setSym", value: function(n) {
        this._sym = n;
      } }, { key: "setVisitedEdge", value: function(n) {
        this.setVisited(n), this._sym.setVisited(n);
      } }, { key: "setEdgeDepths", value: function(n, i) {
        var u = this.getEdge().getDepthDelta();
        this._isForward || (u = -u);
        var c = 1;
        n === U.LEFT && (c = -1);
        var f = U.opposite(n), d = i + u * c;
        this.setDepth(n, i), this.setDepth(f, d);
      } }, { key: "getEdgeRing", value: function() {
        return this._edgeRing;
      } }, { key: "isInResult", value: function() {
        return this._isInResult;
      } }, { key: "setNext", value: function(n) {
        this._next = n;
      } }, { key: "isVisited", value: function() {
        return this._isVisited;
      } }], [{ key: "constructor_", value: function() {
        this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999];
        var n = arguments[0], i = arguments[1];
        if (Pr.constructor_.call(this, n), this._isForward = i, i) this.init(n.getCoordinate(0), n.getCoordinate(1));
        else {
          var u = n.getNumPoints() - 1;
          this.init(n.getCoordinate(u), n.getCoordinate(u - 1));
        }
        this.computeDirectedLabel();
      } }, { key: "depthFactor", value: function(n, i) {
        return n === I.EXTERIOR && i === I.INTERIOR ? 1 : n === I.INTERIOR && i === I.EXTERIOR ? -1 : 0;
      } }]), t;
    }(Pr), Ar = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "createNode", value: function(e) {
        return new hi(e, null);
      } }]), r;
    }(), Dr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "printEdges", value: function(e) {
        e.println("Edges:");
        for (var t = 0; t < this._edges.size(); t++) {
          e.println("edge " + t + ":");
          var n = this._edges.get(t);
          n.print(e), n.eiList.print(e);
        }
      } }, { key: "find", value: function(e) {
        return this._nodes.find(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof hi) {
          var e = arguments[0];
          return this._nodes.addNode(e);
        }
        if (arguments[0] instanceof T) {
          var t = arguments[0];
          return this._nodes.addNode(t);
        }
      } }, { key: "getNodeIterator", value: function() {
        return this._nodes.iterator();
      } }, { key: "linkResultDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkResultDirectedEdges();
      } }, { key: "debugPrintln", value: function(e) {
        Je.out.println(e);
      } }, { key: "isBoundaryNode", value: function(e, t) {
        var n = this._nodes.find(t);
        if (n === null) return !1;
        var i = n.getLabel();
        return i !== null && i.getLocation(e) === I.BOUNDARY;
      } }, { key: "linkAllDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkAllDirectedEdges();
      } }, { key: "matchInSameDirection", value: function(e, t, n, i) {
        return !!e.equals(n) && re.index(e, t, i) === re.COLLINEAR && He.quadrant(e, t) === He.quadrant(n, i);
      } }, { key: "getEdgeEnds", value: function() {
        return this._edgeEndList;
      } }, { key: "debugPrint", value: function(e) {
        Je.out.print(e);
      } }, { key: "getEdgeIterator", value: function() {
        return this._edges.iterator();
      } }, { key: "findEdgeInSameDirection", value: function(e, t) {
        for (var n = 0; n < this._edges.size(); n++) {
          var i = this._edges.get(n), u = i.getCoordinates();
          if (this.matchInSameDirection(e, t, u[0], u[1]) || this.matchInSameDirection(e, t, u[u.length - 1], u[u.length - 2])) return i;
        }
        return null;
      } }, { key: "insertEdge", value: function(e) {
        this._edges.add(e);
      } }, { key: "findEdgeEnd", value: function(e) {
        for (var t = this.getEdgeEnds().iterator(); t.hasNext(); ) {
          var n = t.next();
          if (n.getEdge() === e) return n;
        }
        return null;
      } }, { key: "addEdges", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this._edges.add(n);
          var i = new Vi(n, !0), u = new Vi(n, !1);
          i.setSym(u), u.setSym(i), this.add(i), this.add(u);
        }
      } }, { key: "add", value: function(e) {
        this._nodes.add(e), this._edgeEndList.add(e);
      } }, { key: "getNodes", value: function() {
        return this._nodes.values();
      } }, { key: "findEdge", value: function(e, t) {
        for (var n = 0; n < this._edges.size(); n++) {
          var i = this._edges.get(n), u = i.getCoordinates();
          if (e.equals(u[0]) && t.equals(u[1])) return i;
        }
        return null;
      } }], [{ key: "constructor_", value: function() {
        if (this._edges = new ne(), this._nodes = null, this._edgeEndList = new ne(), arguments.length === 0) this._nodes = new Mr(new Ar());
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._nodes = new Mr(e);
        }
      } }, { key: "linkResultDirectedEdges", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); )
          t.next().getEdges().linkResultDirectedEdges();
      } }]), r;
    }(), Qa = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "sortShellsAndHoles", value: function(e, t, n) {
        for (var i = e.iterator(); i.hasNext(); ) {
          var u = i.next();
          u.isHole() ? n.add(u) : t.add(u);
        }
      } }, { key: "computePolygons", value: function(e) {
        for (var t = new ne(), n = e.iterator(); n.hasNext(); ) {
          var i = n.next().toPolygon(this._geometryFactory);
          t.add(i);
        }
        return t;
      } }, { key: "placeFreeHoles", value: function(e, t) {
        for (var n = t.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.getShell() === null) {
            var u = r.findEdgeRingContaining(i, e);
            if (u === null) throw new tt("unable to assign hole to a shell", i.getCoordinate(0));
            i.setShell(u);
          }
        }
      } }, { key: "buildMinimalEdgeRings", value: function(e, t, n) {
        for (var i = new ne(), u = e.iterator(); u.hasNext(); ) {
          var c = u.next();
          if (c.getMaxNodeDegree() > 2) {
            c.linkDirectedEdgesForMinimalEdgeRings();
            var f = c.buildMinimalRings(), d = this.findShell(f);
            d !== null ? (this.placePolygonHoles(d, f), t.add(d)) : n.addAll(f);
          } else i.add(c);
        }
        return i;
      } }, { key: "buildMaximalEdgeRings", value: function(e) {
        for (var t = new ne(), n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.isInResult() && i.getLabel().isArea() && i.getEdgeRing() === null) {
            var u = new Za(i, this._geometryFactory);
            t.add(u), u.setInResult();
          }
        }
        return t;
      } }, { key: "placePolygonHoles", value: function(e, t) {
        for (var n = t.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.isHole() && i.setShell(e);
        }
      } }, { key: "getPolygons", value: function() {
        return this.computePolygons(this._shellList);
      } }, { key: "findShell", value: function(e) {
        for (var t = 0, n = null, i = e.iterator(); i.hasNext(); ) {
          var u = i.next();
          u.isHole() || (n = u, t++);
        }
        return he.isTrue(t <= 1, "found two shells in MinimalEdgeRing list"), n;
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.add(e.getEdgeEnds(), e.getNodes());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          Dr.linkResultDirectedEdges(n);
          var i = this.buildMaximalEdgeRings(t), u = new ne(), c = this.buildMinimalEdgeRings(i, this._shellList, u);
          this.sortShellsAndHoles(c, this._shellList, u), this.placeFreeHoles(this._shellList, u);
        }
      } }], [{ key: "constructor_", value: function() {
        this._geometryFactory = null, this._shellList = new ne();
        var e = arguments[0];
        this._geometryFactory = e;
      } }, { key: "findEdgeRingContaining", value: function(e, t) {
        for (var n = e.getLinearRing(), i = n.getEnvelopeInternal(), u = n.getCoordinateN(0), c = null, f = null, d = t.iterator(); d.hasNext(); ) {
          var p = d.next(), S = p.getLinearRing(), L = S.getEnvelopeInternal();
          if (!L.equals(i) && L.contains(i)) {
            u = Ge.ptNotInList(n.getCoordinates(), S.getCoordinates());
            var P = !1;
            Xi.isInRing(u, S.getCoordinates()) && (P = !0), P && (c === null || f.contains(L)) && (f = (c = p).getLinearRing().getEnvelopeInternal());
          }
        }
        return c;
      } }]), r;
    }(), Fr = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "getBounds", value: function() {
      } }]), r;
    }(), Ot = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getItem", value: function() {
        return this._item;
      } }, { key: "getBounds", value: function() {
        return this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [Fr, q];
      } }], [{ key: "constructor_", value: function() {
        this._bounds = null, this._item = null;
        var e = arguments[0], t = arguments[1];
        this._bounds = e, this._item = t;
      } }]), r;
    }(), ci = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "poll", value: function() {
        if (this.isEmpty()) return null;
        var e = this._items.get(1);
        return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), e;
      } }, { key: "size", value: function() {
        return this._size;
      } }, { key: "reorder", value: function(e) {
        for (var t = null, n = this._items.get(e); 2 * e <= this._size && ((t = 2 * e) !== this._size && this._items.get(t + 1).compareTo(this._items.get(t)) < 0 && t++, this._items.get(t).compareTo(n) < 0); e = t) this._items.set(e, this._items.get(t));
        this._items.set(e, n);
      } }, { key: "clear", value: function() {
        this._size = 0, this._items.clear();
      } }, { key: "peek", value: function() {
        return this.isEmpty() ? null : this._items.get(1);
      } }, { key: "isEmpty", value: function() {
        return this._size === 0;
      } }, { key: "add", value: function(e) {
        this._items.add(null), this._size += 1;
        var t = this._size;
        for (this._items.set(0, e); e.compareTo(this._items.get(Math.trunc(t / 2))) < 0; t /= 2) this._items.set(t, this._items.get(Math.trunc(t / 2)));
        this._items.set(t, e);
      } }], [{ key: "constructor_", value: function() {
        this._size = null, this._items = null, this._size = 0, this._items = new ne(), this._items.add(null);
      } }]), r;
    }(), Ka = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "insert", value: function(e, t) {
      } }, { key: "remove", value: function(e, t) {
      } }, { key: "query", value: function() {
      } }]), r;
    }(), gt = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getLevel", value: function() {
        return this._level;
      } }, { key: "size", value: function() {
        return this._childBoundables.size();
      } }, { key: "getChildBoundables", value: function() {
        return this._childBoundables;
      } }, { key: "addChildBoundable", value: function(e) {
        he.isTrue(this._bounds === null), this._childBoundables.add(e);
      } }, { key: "isEmpty", value: function() {
        return this._childBoundables.isEmpty();
      } }, { key: "getBounds", value: function() {
        return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [Fr, q];
      } }], [{ key: "constructor_", value: function() {
        if (this._childBoundables = new ne(), this._bounds = null, this._level = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this._level = e;
          }
        }
      } }]), r;
    }(), _n = { reverseOrder: function() {
      return { compare: function(r, e) {
        return e.compareTo(r);
      } };
    }, min: function(r) {
      return _n.sort(r), r.get(0);
    }, sort: function(r, e) {
      var t = r.toArray();
      e ? ht.sort(t, e) : ht.sort(t);
      for (var n = r.iterator(), i = 0, u = t.length; i < u; i++) n.next(), n.set(t[i]);
    }, singletonList: function(r) {
      var e = new ne();
      return e.add(r), e;
    } }, Ja = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "maxDistance", value: function(e, t, n, i, u, c, f, d) {
        var p = r.distance(e, t, u, c);
        return p = Math.max(p, r.distance(e, t, f, d)), p = Math.max(p, r.distance(n, i, u, c)), p = Math.max(p, r.distance(n, i, f, d));
      } }, { key: "distance", value: function(e, t, n, i) {
        var u = n - e, c = i - t;
        return Math.sqrt(u * u + c * c);
      } }, { key: "maximumDistance", value: function(e, t) {
        var n = Math.min(e.getMinX(), t.getMinX()), i = Math.min(e.getMinY(), t.getMinY()), u = Math.max(e.getMaxX(), t.getMaxX()), c = Math.max(e.getMaxY(), t.getMaxY());
        return r.distance(n, i, u, c);
      } }, { key: "minMaxDistance", value: function(e, t) {
        var n = e.getMinX(), i = e.getMinY(), u = e.getMaxX(), c = e.getMaxY(), f = t.getMinX(), d = t.getMinY(), p = t.getMaxX(), S = t.getMaxY(), L = r.maxDistance(n, i, n, c, f, d, f, S);
        return L = Math.min(L, r.maxDistance(n, i, n, c, f, d, p, d)), L = Math.min(L, r.maxDistance(n, i, n, c, p, S, f, S)), L = Math.min(L, r.maxDistance(n, i, n, c, p, S, p, d)), L = Math.min(L, r.maxDistance(n, i, u, i, f, d, f, S)), L = Math.min(L, r.maxDistance(n, i, u, i, f, d, p, d)), L = Math.min(L, r.maxDistance(n, i, u, i, p, S, f, S)), L = Math.min(L, r.maxDistance(n, i, u, i, p, S, p, d)), L = Math.min(L, r.maxDistance(u, c, n, c, f, d, f, S)), L = Math.min(L, r.maxDistance(u, c, n, c, f, d, p, d)), L = Math.min(L, r.maxDistance(u, c, n, c, p, S, f, S)), L = Math.min(L, r.maxDistance(u, c, n, c, p, S, p, d)), L = Math.min(L, r.maxDistance(u, c, u, i, f, d, f, S)), L = Math.min(L, r.maxDistance(u, c, u, i, f, d, p, d)), L = Math.min(L, r.maxDistance(u, c, u, i, p, S, f, S)), L = Math.min(L, r.maxDistance(u, c, u, i, p, S, p, d));
      } }]), r;
    }(), kn = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "maximumDistance", value: function() {
        return Ja.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
      } }, { key: "expandToQueue", value: function(e, t) {
        var n = r.isComposite(this._boundable1), i = r.isComposite(this._boundable2);
        if (n && i) return r.area(this._boundable1) > r.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, e, t), null) : (this.expand(this._boundable2, this._boundable1, !0, e, t), null);
        if (n) return this.expand(this._boundable1, this._boundable2, !1, e, t), null;
        if (i) return this.expand(this._boundable2, this._boundable1, !0, e, t), null;
        throw new R("neither boundable is composite");
      } }, { key: "isLeaves", value: function() {
        return !(r.isComposite(this._boundable1) || r.isComposite(this._boundable2));
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._distance < t._distance ? -1 : this._distance > t._distance ? 1 : 0;
      } }, { key: "expand", value: function(e, t, n, i, u) {
        for (var c = e.getChildBoundables().iterator(); c.hasNext(); ) {
          var f = c.next(), d = null;
          (d = n ? new r(t, f, this._itemDistance) : new r(f, t, this._itemDistance)).getDistance() < u && i.add(d);
        }
      } }, { key: "getBoundable", value: function(e) {
        return e === 0 ? this._boundable1 : this._boundable2;
      } }, { key: "getDistance", value: function() {
        return this._distance;
      } }, { key: "distance", value: function() {
        return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
      } }, { key: "interfaces_", get: function() {
        return [z];
      } }], [{ key: "constructor_", value: function() {
        this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._boundable1 = e, this._boundable2 = t, this._itemDistance = n, this._distance = this.distance();
      } }, { key: "area", value: function(e) {
        return e.getBounds().getArea();
      } }, { key: "isComposite", value: function(e) {
        return e instanceof gt;
      } }]), r;
    }(), Gr = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "visitItem", value: function(e) {
      } }]), r;
    }(), En = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "queryInternal", value: function() {
        if (ue(arguments[2], Gr) && arguments[0] instanceof Object && arguments[1] instanceof gt) for (var e = arguments[0], t = arguments[1], n = arguments[2], i = t.getChildBoundables(), u = 0; u < i.size(); u++) {
          var c = i.get(u);
          this.getIntersectsOp().intersects(c.getBounds(), e) && (c instanceof gt ? this.queryInternal(e, c, n) : c instanceof Ot ? n.visitItem(c.getItem()) : he.shouldNeverReachHere());
        }
        else if (ue(arguments[2], Ke) && arguments[0] instanceof Object && arguments[1] instanceof gt) for (var f = arguments[0], d = arguments[1], p = arguments[2], S = d.getChildBoundables(), L = 0; L < S.size(); L++) {
          var P = S.get(L);
          this.getIntersectsOp().intersects(P.getBounds(), f) && (P instanceof gt ? this.queryInternal(f, P, p) : P instanceof Ot ? p.add(P.getItem()) : he.shouldNeverReachHere());
        }
      } }, { key: "getNodeCapacity", value: function() {
        return this._nodeCapacity;
      } }, { key: "lastNode", value: function(e) {
        return e.get(e.size() - 1);
      } }, { key: "size", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0, n = e.getChildBoundables().iterator(); n.hasNext(); ) {
            var i = n.next();
            i instanceof gt ? t += this.size(i) : i instanceof Ot && (t += 1);
          }
          return t;
        }
      } }, { key: "removeItem", value: function(e, t) {
        for (var n = null, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
          var u = i.next();
          u instanceof Ot && u.getItem() === t && (n = u);
        }
        return n !== null && (e.getChildBoundables().remove(n), !0);
      } }, { key: "itemsTree", value: function() {
        if (arguments.length === 0) {
          this.build();
          var e = this.itemsTree(this._root);
          return e === null ? new ne() : e;
        }
        if (arguments.length === 1) {
          for (var t = arguments[0], n = new ne(), i = t.getChildBoundables().iterator(); i.hasNext(); ) {
            var u = i.next();
            if (u instanceof gt) {
              var c = this.itemsTree(u);
              c !== null && n.add(c);
            } else u instanceof Ot ? n.add(u.getItem()) : he.shouldNeverReachHere();
          }
          return n.size() <= 0 ? null : n;
        }
      } }, { key: "insert", value: function(e, t) {
        he.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Ot(e, t));
      } }, { key: "boundablesAtLevel", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new ne();
          return this.boundablesAtLevel(e, this._root, t), t;
        }
        if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2];
          if (he.isTrue(n > -2), i.getLevel() === n) return u.add(i), null;
          for (var c = i.getChildBoundables().iterator(); c.hasNext(); ) {
            var f = c.next();
            f instanceof gt ? this.boundablesAtLevel(n, f, u) : (he.isTrue(f instanceof Ot), n === -1 && u.add(f));
          }
          return null;
        }
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.build();
          var t = new ne();
          return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.queryInternal(e, this._root, t), t;
        }
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          if (this.build(), this.isEmpty()) return null;
          this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.queryInternal(n, this._root, i);
        }
      } }, { key: "build", value: function() {
        if (this._built) return null;
        this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
      } }, { key: "getRoot", value: function() {
        return this.build(), this._root;
      } }, { key: "remove", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.remove(e, this._root, t);
        }
        if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2], c = this.removeItem(i, u);
          if (c) return !0;
          for (var f = null, d = i.getChildBoundables().iterator(); d.hasNext(); ) {
            var p = d.next();
            if (this.getIntersectsOp().intersects(p.getBounds(), n) && p instanceof gt && (c = this.remove(n, p, u))) {
              f = p;
              break;
            }
          }
          return f !== null && f.getChildBoundables().isEmpty() && i.getChildBoundables().remove(f), c;
        }
      } }, { key: "createHigherLevels", value: function(e, t) {
        he.isTrue(!e.isEmpty());
        var n = this.createParentBoundables(e, t + 1);
        return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, t + 1);
      } }, { key: "depth", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0, n = e.getChildBoundables().iterator(); n.hasNext(); ) {
            var i = n.next();
            if (i instanceof gt) {
              var u = this.depth(i);
              u > t && (t = u);
            }
          }
          return t + 1;
        }
      } }, { key: "createParentBoundables", value: function(e, t) {
        he.isTrue(!e.isEmpty());
        var n = new ne();
        n.add(this.createNode(t));
        var i = new ne(e);
        _n.sort(i, this.getComparator());
        for (var u = i.iterator(); u.hasNext(); ) {
          var c = u.next();
          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(t)), this.lastNode(n).addChildBoundable(c);
        }
        return n;
      } }, { key: "isEmpty", value: function() {
        return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
      } }, { key: "interfaces_", get: function() {
        return [q];
      } }], [{ key: "constructor_", value: function() {
        if (this._root = null, this._built = !1, this._itemBoundables = new ne(), this._nodeCapacity = null, arguments.length === 0) r.constructor_.call(this, r.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var e = arguments[0];
          he.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
        }
      } }, { key: "compareDoubles", value: function(e, t) {
        return e > t ? 1 : e < t ? -1 : 0;
      } }]), r;
    }();
    En.IntersectsOp = function() {
    }, En.DEFAULT_NODE_CAPACITY = 10;
    var $a = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "distance", value: function(e, t) {
      } }]), r;
    }(), St = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "createParentBoundablesFromVerticalSlices", value: function(n, i) {
        he.isTrue(n.length > 0);
        for (var u = new ne(), c = 0; c < n.length; c++) u.addAll(this.createParentBoundablesFromVerticalSlice(n[c], i));
        return u;
      } }, { key: "nearestNeighbourK", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.nearestNeighbourK(n, Q.POSITIVE_INFINITY, i);
        }
        if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = c, p = new ci();
          p.add(u);
          for (var S = new ci(); !p.isEmpty() && d >= 0; ) {
            var L = p.poll(), P = L.getDistance();
            if (P >= d) break;
            if (L.isLeaves()) if (S.size() < f) S.add(L);
            else {
              var V = S.peek();
              V.getDistance() > P && (S.poll(), S.add(L));
              var W = S.peek();
              d = W.getDistance();
            }
            else L.expandToQueue(p, d);
          }
          return t.getItems(S);
        }
      } }, { key: "createNode", value: function(n) {
        return new qr(n);
      } }, { key: "size", value: function() {
        return arguments.length === 0 ? w(v(t.prototype), "size", this).call(this) : w(v(t.prototype), "size", this).apply(this, arguments);
      } }, { key: "insert", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof ke)) return w(v(t.prototype), "insert", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        if (n.isNull()) return null;
        w(v(t.prototype), "insert", this).call(this, n, i);
      } }, { key: "getIntersectsOp", value: function() {
        return t.intersectsOp;
      } }, { key: "verticalSlices", value: function(n, i) {
        for (var u = Math.trunc(Math.ceil(n.size() / i)), c = new Array(i).fill(null), f = n.iterator(), d = 0; d < i; d++) {
          c[d] = new ne();
          for (var p = 0; f.hasNext() && p < u; ) {
            var S = f.next();
            c[d].add(S), p++;
          }
        }
        return c;
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return w(v(t.prototype), "query", this).call(this, n);
        }
        if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          w(v(t.prototype), "query", this).call(this, i, u);
        }
      } }, { key: "getComparator", value: function() {
        return t.yComparator;
      } }, { key: "createParentBoundablesFromVerticalSlice", value: function(n, i) {
        return w(v(t.prototype), "createParentBoundables", this).call(this, n, i);
      } }, { key: "remove", value: function() {
        if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof ke) {
          var n = arguments[0], i = arguments[1];
          return w(v(t.prototype), "remove", this).call(this, n, i);
        }
        return w(v(t.prototype), "remove", this).apply(this, arguments);
      } }, { key: "depth", value: function() {
        return arguments.length === 0 ? w(v(t.prototype), "depth", this).call(this) : w(v(t.prototype), "depth", this).apply(this, arguments);
      } }, { key: "createParentBoundables", value: function(n, i) {
        he.isTrue(!n.isEmpty());
        var u = Math.trunc(Math.ceil(n.size() / this.getNodeCapacity())), c = new ne(n);
        _n.sort(c, t.xComparator);
        var f = this.verticalSlices(c, Math.trunc(Math.ceil(Math.sqrt(u))));
        return this.createParentBoundablesFromVerticalSlices(f, i);
      } }, { key: "nearestNeighbour", value: function() {
        if (arguments.length === 1) {
          if (ue(arguments[0], $a)) {
            var n = arguments[0];
            if (this.isEmpty()) return null;
            var i = new kn(this.getRoot(), this.getRoot(), n);
            return this.nearestNeighbour(i);
          }
          if (arguments[0] instanceof kn) {
            var u = arguments[0], c = Q.POSITIVE_INFINITY, f = null, d = new ci();
            for (d.add(u); !d.isEmpty() && c > 0; ) {
              var p = d.poll(), S = p.getDistance();
              if (S >= c) break;
              p.isLeaves() ? (c = S, f = p) : p.expandToQueue(d, c);
            }
            return f === null ? null : [f.getBoundable(0).getItem(), f.getBoundable(1).getItem()];
          }
        } else {
          if (arguments.length === 2) {
            var L = arguments[0], P = arguments[1];
            if (this.isEmpty() || L.isEmpty()) return null;
            var V = new kn(this.getRoot(), L.getRoot(), P);
            return this.nearestNeighbour(V);
          }
          if (arguments.length === 3) {
            var W = arguments[0], $ = arguments[1], ie = arguments[2], le = new Ot(W, $), pe = new kn(this.getRoot(), le, ie);
            return this.nearestNeighbour(pe)[0];
          }
          if (arguments.length === 4) {
            var Oe = arguments[0], Ye = arguments[1], st = arguments[2], Et = arguments[3], Mt = new Ot(Oe, Ye), an = new kn(this.getRoot(), Mt, st);
            return this.nearestNeighbourK(an, Et);
          }
        }
      } }, { key: "isWithinDistance", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], u = Q.POSITIVE_INFINITY, c = new ci();
          for (c.add(n); !c.isEmpty(); ) {
            var f = c.poll(), d = f.getDistance();
            if (d > i) return !1;
            if (f.maximumDistance() <= i) return !0;
            if (f.isLeaves()) {
              if ((u = d) <= i) return !0;
            } else f.expandToQueue(c, u);
          }
          return !1;
        }
        if (arguments.length === 3) {
          var p = arguments[0], S = arguments[1], L = arguments[2], P = new kn(this.getRoot(), p.getRoot(), S);
          return this.isWithinDistance(P, L);
        }
      } }, { key: "interfaces_", get: function() {
        return [Ka, q];
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) t.constructor_.call(this, t.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var n = arguments[0];
          En.constructor_.call(this, n);
        }
      } }, { key: "centreX", value: function(n) {
        return t.avg(n.getMinX(), n.getMaxX());
      } }, { key: "avg", value: function(n, i) {
        return (n + i) / 2;
      } }, { key: "getItems", value: function(n) {
        for (var i = new Array(n.size()).fill(null), u = 0; !n.isEmpty(); ) {
          var c = n.poll();
          i[u] = c.getBoundable(0).getItem(), u++;
        }
        return i;
      } }, { key: "centreY", value: function(n) {
        return t.avg(n.getMinY(), n.getMaxY());
      } }]), t;
    }(En), qr = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "computeBounds", value: function() {
        for (var n = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
          var u = i.next();
          n === null ? n = new ke(u.getBounds()) : n.expandToInclude(u.getBounds());
        }
        return n;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0];
        gt.constructor_.call(this, n);
      } }]), t;
    }(gt);
    St.STRtreeNode = qr, St.xComparator = new (function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "interfaces_", get: function() {
        return [Ae];
      } }, { key: "compare", value: function(e, t) {
        return En.compareDoubles(St.centreX(e.getBounds()), St.centreX(t.getBounds()));
      } }]), r;
    }())(), St.yComparator = new (function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "interfaces_", get: function() {
        return [Ae];
      } }, { key: "compare", value: function(e, t) {
        return En.compareDoubles(St.centreY(e.getBounds()), St.centreY(t.getBounds()));
      } }]), r;
    }())(), St.intersectsOp = new (function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "interfaces_", get: function() {
        return [IntersectsOp];
      } }, { key: "intersects", value: function(e, t) {
        return e.intersects(t);
      } }]), r;
    }())(), St.DEFAULT_NODE_CAPACITY = 10;
    var eu = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "relativeSign", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      } }, { key: "compare", value: function(e, t, n) {
        if (t.equals2D(n)) return 0;
        var i = r.relativeSign(t.x, n.x), u = r.relativeSign(t.y, n.y);
        switch (e) {
          case 0:
            return r.compareValue(i, u);
          case 1:
            return r.compareValue(u, i);
          case 2:
            return r.compareValue(u, -i);
          case 3:
            return r.compareValue(-i, u);
          case 4:
            return r.compareValue(-i, -u);
          case 5:
            return r.compareValue(-u, -i);
          case 6:
            return r.compareValue(-u, i);
          case 7:
            return r.compareValue(i, -u);
        }
        return he.shouldNeverReachHere("invalid octant value"), 0;
      } }, { key: "compareValue", value: function(e, t) {
        return e < 0 ? -1 : e > 0 ? 1 : t < 0 ? -1 : t > 0 ? 1 : 0;
      } }]), r;
    }(), tu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(e) {
        e.print(this.coord), e.print(" seg # = " + this.segmentIndex);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.segmentIndex < t.segmentIndex ? -1 : this.segmentIndex > t.segmentIndex ? 1 : this.coord.equals2D(t.coord) ? 0 : this._isInterior ? t._isInterior ? eu.compare(this._segmentOctant, this.coord, t.coord) : 1 : -1;
      } }, { key: "isEndPoint", value: function(e) {
        return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === e;
      } }, { key: "toString", value: function() {
        return this.segmentIndex + ":" + this.coord.toString();
      } }, { key: "isInterior", value: function() {
        return this._isInterior;
      } }, { key: "interfaces_", get: function() {
        return [z];
      } }], [{ key: "constructor_", value: function() {
        this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
        var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
        this._segString = e, this.coord = new T(t), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !t.equals2D(e.getCoordinate(n));
      } }]), r;
    }(), nu = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "hasNext", value: function() {
      } }, { key: "next", value: function() {
      } }, { key: "remove", value: function() {
      } }]), r;
    }(), iu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getSplitCoordinates", value: function() {
        var e = new Fn();
        this.addEndpoints();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var i = t.next();
          this.addEdgeCoordinates(n, i, e), n = i;
        }
        return e.toCoordinateArray();
      } }, { key: "addCollapsedNodes", value: function() {
        var e = new ne();
        this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next().intValue();
          this.add(this._edge.getCoordinate(n), n);
        }
      } }, { key: "createSplitEdgePts", value: function(e, t) {
        var n = t.segmentIndex - e.segmentIndex + 2;
        if (n === 2) return [new T(e.coord), new T(t.coord)];
        var i = this._edge.getCoordinate(t.segmentIndex), u = t.isInterior() || !t.coord.equals2D(i);
        u || n--;
        var c = new Array(n).fill(null), f = 0;
        c[f++] = new T(e.coord);
        for (var d = e.segmentIndex + 1; d <= t.segmentIndex; d++) c[f++] = this._edge.getCoordinate(d);
        return u && (c[f] = new T(t.coord)), c;
      } }, { key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "findCollapsesFromExistingVertices", value: function(e) {
        for (var t = 0; t < this._edge.size() - 2; t++) {
          var n = this._edge.getCoordinate(t);
          this._edge.getCoordinate(t + 1);
          var i = this._edge.getCoordinate(t + 2);
          n.equals2D(i) && e.add(et.valueOf(t + 1));
        }
      } }, { key: "addEdgeCoordinates", value: function(e, t, n) {
        var i = this.createSplitEdgePts(e, t);
        n.add(i, !1);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(e) {
        this.addEndpoints(), this.addCollapsedNodes();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var i = t.next(), u = this.createSplitEdge(n, i);
          e.add(u), n = i;
        }
      } }, { key: "findCollapseIndex", value: function(e, t, n) {
        if (!e.coord.equals2D(t.coord)) return !1;
        var i = t.segmentIndex - e.segmentIndex;
        return t.isInterior() || i--, i === 1 && (n[0] = e.segmentIndex + 1, !0);
      } }, { key: "findCollapsesFromInsertedNodes", value: function(e) {
        for (var t = new Array(1).fill(null), n = this.iterator(), i = n.next(); n.hasNext(); ) {
          var u = n.next();
          this.findCollapseIndex(i, u, t) && e.add(et.valueOf(t[0])), i = u;
        }
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "addEndpoints", value: function() {
        var e = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(e), e);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = this.createSplitEdgePts(e, t);
        return new sn(n, this._edge.getData());
      } }, { key: "add", value: function(e, t) {
        var n = new tu(this._edge, e, t, this._edge.getSegmentOctant(t)), i = this._nodeMap.get(n);
        return i !== null ? (he.isTrue(i.coord.equals2D(e), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
      } }, { key: "checkSplitEdgesCorrectness", value: function(e) {
        var t = this._edge.getCoordinates(), n = e.get(0).getCoordinate(0);
        if (!n.equals2D(t[0])) throw new Ie("bad split edge start point at " + n);
        var i = e.get(e.size() - 1).getCoordinates(), u = i[i.length - 1];
        if (!u.equals2D(t[t.length - 1])) throw new Ie("bad split edge end point at " + u);
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new zn(), this._edge = null;
        var e = arguments[0];
        this._edge = e;
      } }]), r;
    }(), ru = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "octant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1];
          if (e === 0 && t === 0) throw new R("Cannot compute the octant for point ( " + e + ", " + t + " )");
          var n = Math.abs(e), i = Math.abs(t);
          return e >= 0 ? t >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : t >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
        }
        if (arguments[0] instanceof T && arguments[1] instanceof T) {
          var u = arguments[0], c = arguments[1], f = c.x - u.x, d = c.y - u.y;
          if (f === 0 && d === 0) throw new R("Cannot compute the octant for two identical points " + u);
          return r.octant(f, d);
        }
      } }]), r;
    }(), su = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "getCoordinate", value: function(e) {
      } }, { key: "isClosed", value: function() {
      } }, { key: "setData", value: function(e) {
      } }, { key: "getData", value: function() {
      } }]), r;
    }(), au = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "addIntersection", value: function(e, t) {
      } }, { key: "interfaces_", get: function() {
        return [su];
      } }]), r;
    }(), sn = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
        return this._pts;
      } }, { key: "size", value: function() {
        return this._pts.length;
      } }, { key: "getCoordinate", value: function(e) {
        return this._pts[e];
      } }, { key: "isClosed", value: function() {
        return this._pts[0].equals(this._pts[this._pts.length - 1]);
      } }, { key: "getSegmentOctant", value: function(e) {
        return e === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(e), this.getCoordinate(e + 1));
      } }, { key: "setData", value: function(e) {
        this._data = e;
      } }, { key: "safeOctant", value: function(e, t) {
        return e.equals2D(t) ? 0 : ru.octant(e, t);
      } }, { key: "getData", value: function() {
        return this._data;
      } }, { key: "addIntersection", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.addIntersectionNode(e, t);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1], u = arguments[3], c = new T(n.getIntersection(u));
          this.addIntersection(c, i);
        }
      } }, { key: "toString", value: function() {
        return Ui.toLineString(new Gn(this._pts));
      } }, { key: "getNodeList", value: function() {
        return this._nodeList;
      } }, { key: "addIntersectionNode", value: function(e, t) {
        var n = t, i = n + 1;
        if (i < this._pts.length) {
          var u = this._pts[i];
          e.equals2D(u) && (n = i);
        }
        return this._nodeList.add(e, n);
      } }, { key: "addIntersections", value: function(e, t, n) {
        for (var i = 0; i < e.getIntersectionNum(); i++) this.addIntersection(e, t, n, i);
      } }, { key: "interfaces_", get: function() {
        return [au];
      } }], [{ key: "constructor_", value: function() {
        this._nodeList = new iu(this), this._pts = null, this._data = null;
        var e = arguments[0], t = arguments[1];
        this._pts = e, this._data = t;
      } }, { key: "getNodedSubstrings", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new ne();
          return r.getNodedSubstrings(e, t), t;
        }
        if (arguments.length === 2) for (var n = arguments[0], i = arguments[1], u = n.iterator(); u.hasNext(); ) {
          var c = u.next();
          c.getNodeList().addSplitEdges(i);
        }
      } }]), r;
    }(), it = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "minX", value: function() {
        return Math.min(this.p0.x, this.p1.x);
      } }, { key: "orientationIndex", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0], t = re.index(this.p0, this.p1, e.p0), n = re.index(this.p0, this.p1, e.p1);
          return t >= 0 && n >= 0 || t <= 0 && n <= 0 ? Math.max(t, n) : 0;
        }
        if (arguments[0] instanceof T) {
          var i = arguments[0];
          return re.index(this.p0, this.p1, i);
        }
      } }, { key: "toGeometry", value: function(e) {
        return e.createLineString([this.p0, this.p1]);
      } }, { key: "isVertical", value: function() {
        return this.p0.x === this.p1.x;
      } }, { key: "equals", value: function(e) {
        if (!(e instanceof r)) return !1;
        var t = e;
        return this.p0.equals(t.p0) && this.p1.equals(t.p1);
      } }, { key: "intersection", value: function(e) {
        var t = new rn();
        return t.computeIntersection(this.p0, this.p1, e.p0, e.p1), t.hasIntersection() ? t.getIntersection(0) : null;
      } }, { key: "project", value: function() {
        if (arguments[0] instanceof T) {
          var e = arguments[0];
          if (e.equals(this.p0) || e.equals(this.p1)) return new T(e);
          var t = this.projectionFactor(e), n = new T();
          return n.x = this.p0.x + t * (this.p1.x - this.p0.x), n.y = this.p0.y + t * (this.p1.y - this.p0.y), n;
        }
        if (arguments[0] instanceof r) {
          var i = arguments[0], u = this.projectionFactor(i.p0), c = this.projectionFactor(i.p1);
          if (u >= 1 && c >= 1 || u <= 0 && c <= 0) return null;
          var f = this.project(i.p0);
          u < 0 && (f = this.p0), u > 1 && (f = this.p1);
          var d = this.project(i.p1);
          return c < 0 && (d = this.p0), c > 1 && (d = this.p1), new r(f, d);
        }
      } }, { key: "normalize", value: function() {
        this.p1.compareTo(this.p0) < 0 && this.reverse();
      } }, { key: "angle", value: function() {
        return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
      } }, { key: "getCoordinate", value: function(e) {
        return e === 0 ? this.p0 : this.p1;
      } }, { key: "distancePerpendicular", value: function(e) {
        return lt.pointToLinePerpendicular(e, this.p0, this.p1);
      } }, { key: "minY", value: function() {
        return Math.min(this.p0.y, this.p1.y);
      } }, { key: "midPoint", value: function() {
        return r.midPoint(this.p0, this.p1);
      } }, { key: "projectionFactor", value: function(e) {
        if (e.equals(this.p0)) return 0;
        if (e.equals(this.p1)) return 1;
        var t = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = t * t + n * n;
        return i <= 0 ? Q.NaN : ((e.x - this.p0.x) * t + (e.y - this.p0.y) * n) / i;
      } }, { key: "closestPoints", value: function(e) {
        var t = this.intersection(e);
        if (t !== null) return [t, t];
        var n = new Array(2).fill(null), i = Q.MAX_VALUE, u = null, c = this.closestPoint(e.p0);
        i = c.distance(e.p0), n[0] = c, n[1] = e.p0;
        var f = this.closestPoint(e.p1);
        (u = f.distance(e.p1)) < i && (i = u, n[0] = f, n[1] = e.p1);
        var d = e.closestPoint(this.p0);
        (u = d.distance(this.p0)) < i && (i = u, n[0] = this.p0, n[1] = d);
        var p = e.closestPoint(this.p1);
        return (u = p.distance(this.p1)) < i && (i = u, n[0] = this.p1, n[1] = p), n;
      } }, { key: "closestPoint", value: function(e) {
        var t = this.projectionFactor(e);
        return t > 0 && t < 1 ? this.project(e) : this.p0.distance(e) < this.p1.distance(e) ? this.p0 : this.p1;
      } }, { key: "maxX", value: function() {
        return Math.max(this.p0.x, this.p1.x);
      } }, { key: "getLength", value: function() {
        return this.p0.distance(this.p1);
      } }, { key: "compareTo", value: function(e) {
        var t = e, n = this.p0.compareTo(t.p0);
        return n !== 0 ? n : this.p1.compareTo(t.p1);
      } }, { key: "reverse", value: function() {
        var e = this.p0;
        this.p0 = this.p1, this.p1 = e;
      } }, { key: "equalsTopo", value: function(e) {
        return this.p0.equals(e.p0) && this.p1.equals(e.p1) || this.p0.equals(e.p1) && this.p1.equals(e.p0);
      } }, { key: "lineIntersection", value: function(e) {
        return An.intersection(this.p0, this.p1, e.p0, e.p1);
      } }, { key: "maxY", value: function() {
        return Math.max(this.p0.y, this.p1.y);
      } }, { key: "pointAlongOffset", value: function(e, t) {
        var n = this.p0.x + e * (this.p1.x - this.p0.x), i = this.p0.y + e * (this.p1.y - this.p0.y), u = this.p1.x - this.p0.x, c = this.p1.y - this.p0.y, f = Math.sqrt(u * u + c * c), d = 0, p = 0;
        if (t !== 0) {
          if (f <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
          d = t * u / f, p = t * c / f;
        }
        return new T(n - p, i + d);
      } }, { key: "setCoordinates", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.setCoordinates(e.p0, e.p1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.p0.x = t.x, this.p0.y = t.y, this.p1.x = n.x, this.p1.y = n.y;
        }
      } }, { key: "segmentFraction", value: function(e) {
        var t = this.projectionFactor(e);
        return t < 0 ? t = 0 : (t > 1 || Q.isNaN(t)) && (t = 1), t;
      } }, { key: "toString", value: function() {
        return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
      } }, { key: "isHorizontal", value: function() {
        return this.p0.y === this.p1.y;
      } }, { key: "reflect", value: function(e) {
        var t = this.p1.getY() - this.p0.getY(), n = this.p0.getX() - this.p1.getX(), i = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), u = t * t + n * n, c = t * t - n * n, f = e.getX(), d = e.getY();
        return new T((-c * f - 2 * t * n * d - 2 * t * i) / u, (c * d - 2 * t * n * f - 2 * n * i) / u);
      } }, { key: "distance", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0];
          return lt.segmentToSegment(this.p0, this.p1, e.p0, e.p1);
        }
        if (arguments[0] instanceof T) {
          var t = arguments[0];
          return lt.pointToSegment(t, this.p0, this.p1);
        }
      } }, { key: "pointAlong", value: function(e) {
        var t = new T();
        return t.x = this.p0.x + e * (this.p1.x - this.p0.x), t.y = this.p0.y + e * (this.p1.y - this.p0.y), t;
      } }, { key: "hashCode", value: function() {
        var e = Q.doubleToLongBits(this.p0.x);
        e ^= 31 * Q.doubleToLongBits(this.p0.y);
        var t = Math.trunc(e) ^ Math.trunc(e >> 32), n = Q.doubleToLongBits(this.p1.x);
        return n ^= 31 * Q.doubleToLongBits(this.p1.y), t ^ (Math.trunc(n) ^ Math.trunc(n >> 32));
      } }, { key: "interfaces_", get: function() {
        return [z, q];
      } }], [{ key: "constructor_", value: function() {
        if (this.p0 = null, this.p1 = null, arguments.length === 0) r.constructor_.call(this, new T(), new T());
        else if (arguments.length === 1) {
          var e = arguments[0];
          r.constructor_.call(this, e.p0, e.p1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.p0 = t, this.p1 = n;
        } else if (arguments.length === 4) {
          var i = arguments[0], u = arguments[1], c = arguments[2], f = arguments[3];
          r.constructor_.call(this, new T(i, u), new T(c, f));
        }
      } }, { key: "midPoint", value: function(e, t) {
        return new T((e.x + t.x) / 2, (e.y + t.y) / 2);
      } }]), r;
    }(), uu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "overlap", value: function() {
        if (arguments.length !== 2) {
          if (arguments.length === 4) {
            var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
            e.getLineSegment(t, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this._overlapSeg1 = new it(), this._overlapSeg2 = new it();
      } }]), r;
    }(), zr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getLineSegment", value: function(e, t) {
        t.p0 = this._pts[e], t.p1 = this._pts[e + 1];
      } }, { key: "computeSelect", value: function(e, t, n, i) {
        var u = this._pts[t], c = this._pts[n];
        if (n - t == 1) return i.select(this, t), null;
        if (!e.intersects(u, c)) return null;
        var f = Math.trunc((t + n) / 2);
        t < f && this.computeSelect(e, t, f, i), f < n && this.computeSelect(e, f, n, i);
      } }, { key: "getCoordinates", value: function() {
        for (var e = new Array(this._end - this._start + 1).fill(null), t = 0, n = this._start; n <= this._end; n++) e[t++] = this._pts[n];
        return e;
      } }, { key: "computeOverlaps", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.computeOverlaps(this._start, this._end, e, e._start, e._end, t);
        } else if (arguments.length === 6) {
          var n = arguments[0], i = arguments[1], u = arguments[2], c = arguments[3], f = arguments[4], d = arguments[5];
          if (i - n == 1 && f - c == 1) return d.overlap(this, n, u, c), null;
          if (!this.overlaps(n, i, u, c, f)) return null;
          var p = Math.trunc((n + i) / 2), S = Math.trunc((c + f) / 2);
          n < p && (c < S && this.computeOverlaps(n, p, u, c, S, d), S < f && this.computeOverlaps(n, p, u, S, f, d)), p < i && (c < S && this.computeOverlaps(p, i, u, c, S, d), S < f && this.computeOverlaps(p, i, u, S, f, d));
        }
      } }, { key: "setId", value: function(e) {
        this._id = e;
      } }, { key: "select", value: function(e, t) {
        this.computeSelect(e, this._start, this._end, t);
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          var e = this._pts[this._start], t = this._pts[this._end];
          this._env = new ke(e, t);
        }
        return this._env;
      } }, { key: "overlaps", value: function(e, t, n, i, u) {
        return ke.intersects(this._pts[e], this._pts[t], n._pts[i], n._pts[u]);
      } }, { key: "getEndIndex", value: function() {
        return this._end;
      } }, { key: "getStartIndex", value: function() {
        return this._start;
      } }, { key: "getContext", value: function() {
        return this._context;
      } }, { key: "getId", value: function() {
        return this._id;
      } }], [{ key: "constructor_", value: function() {
        this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
        var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
        this._pts = e, this._start = t, this._end = n, this._context = i;
      } }]), r;
    }(), ou = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "findChainEnd", value: function(e, t) {
        for (var n = t; n < e.length - 1 && e[n].equals2D(e[n + 1]); ) n++;
        if (n >= e.length - 1) return e.length - 1;
        for (var i = He.quadrant(e[n], e[n + 1]), u = t + 1; u < e.length && !(!e[u - 1].equals2D(e[u]) && He.quadrant(e[u - 1], e[u]) !== i); )
          u++;
        return u - 1;
      } }, { key: "getChains", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return r.getChains(e, null);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], i = new ne(), u = 0;
          do {
            var c = r.findChainEnd(t, u), f = new zr(t, u, c, n);
            i.add(f), u = c;
          } while (u < t.length - 1);
          return i;
        }
      } }]), r;
    }(), Hi = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "computeNodes", value: function(e) {
      } }, { key: "getNodedSubstrings", value: function() {
      } }]), r;
    }(), Br = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setSegmentIntersector", value: function(e) {
        this._segInt = e;
      } }, { key: "interfaces_", get: function() {
        return [Hi];
      } }], [{ key: "constructor_", value: function() {
        if (this._segInt = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setSegmentIntersector(e);
          }
        }
      } }]), r;
    }(), Zi = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "getMonotoneChains", value: function() {
        return this._monoChains;
      } }, { key: "getNodedSubstrings", value: function() {
        return sn.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "getIndex", value: function() {
        return this._index;
      } }, { key: "add", value: function(n) {
        for (var i = ou.getChains(n.getCoordinates(), n).iterator(); i.hasNext(); ) {
          var u = i.next();
          u.setId(this._idCounter++), this._index.insert(u.getEnvelope(), u), this._monoChains.add(u);
        }
      } }, { key: "computeNodes", value: function(n) {
        this._nodedSegStrings = n;
        for (var i = n.iterator(); i.hasNext(); ) this.add(i.next());
        this.intersectChains();
      } }, { key: "intersectChains", value: function() {
        for (var n = new Yr(this._segInt), i = this._monoChains.iterator(); i.hasNext(); ) for (var u = i.next(), c = this._index.query(u.getEnvelope()).iterator(); c.hasNext(); ) {
          var f = c.next();
          if (f.getId() > u.getId() && (u.computeOverlaps(f, n), this._nOverlaps++), this._segInt.isDone()) return null;
        }
      } }], [{ key: "constructor_", value: function() {
        if (this._monoChains = new ne(), this._index = new St(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            Br.constructor_.call(this, n);
          }
        }
      } }]), t;
    }(Br), Yr = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "overlap", value: function() {
        if (arguments.length !== 4) return w(v(t.prototype), "overlap", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = arguments[2], c = arguments[3], f = n.getContext(), d = u.getContext();
        this._si.processIntersections(f, i, d, c);
      } }], [{ key: "constructor_", value: function() {
        this._si = null;
        var n = arguments[0];
        this._si = n;
      } }]), t;
    }(uu);
    Zi.SegmentOverlapAction = Yr;
    var kt = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isDeletable", value: function(e, t, n, i) {
        var u = this._inputLine[e], c = this._inputLine[t], f = this._inputLine[n];
        return !!this.isConcave(u, c, f) && !!this.isShallow(u, c, f, i) && this.isShallowSampled(u, c, e, n, i);
      } }, { key: "deleteShallowConcavities", value: function() {
        for (var e = 1, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t), i = !1; n < this._inputLine.length; ) {
          var u = !1;
          this.isDeletable(e, t, n, this._distanceTol) && (this._isDeleted[t] = r.DELETE, u = !0, i = !0), e = u ? n : t, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t);
        }
        return i;
      } }, { key: "isShallowConcavity", value: function(e, t, n, i) {
        return re.index(e, t, n) === this._angleOrientation && lt.pointToSegment(t, e, n) < i;
      } }, { key: "isShallowSampled", value: function(e, t, n, i, u) {
        var c = Math.trunc((i - n) / r.NUM_PTS_TO_CHECK);
        c <= 0 && (c = 1);
        for (var f = n; f < i; f += c) if (!this.isShallow(e, t, this._inputLine[f], u)) return !1;
        return !0;
      } }, { key: "isConcave", value: function(e, t, n) {
        var i = re.index(e, t, n) === this._angleOrientation;
        return i;
      } }, { key: "simplify", value: function(e) {
        this._distanceTol = Math.abs(e), e < 0 && (this._angleOrientation = re.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
        var t = !1;
        do
          t = this.deleteShallowConcavities();
        while (t);
        return this.collapseLine();
      } }, { key: "findNextNonDeletedIndex", value: function(e) {
        for (var t = e + 1; t < this._inputLine.length && this._isDeleted[t] === r.DELETE; ) t++;
        return t;
      } }, { key: "isShallow", value: function(e, t, n, i) {
        return lt.pointToSegment(t, e, n) < i;
      } }, { key: "collapseLine", value: function() {
        for (var e = new Fn(), t = 0; t < this._inputLine.length; t++) this._isDeleted[t] !== r.DELETE && e.add(this._inputLine[t]);
        return e.toCoordinateArray();
      } }], [{ key: "constructor_", value: function() {
        this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = re.COUNTERCLOCKWISE;
        var e = arguments[0];
        this._inputLine = e;
      } }, { key: "simplify", value: function(e, t) {
        return new r(e).simplify(t);
      } }]), r;
    }();
    kt.INIT = 0, kt.DELETE = 1, kt.KEEP = 1, kt.NUM_PTS_TO_CHECK = 10;
    var Ur = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
        return this._ptList.toArray(r.COORDINATE_ARRAY_TYPE);
      } }, { key: "setPrecisionModel", value: function(e) {
        this._precisionModel = e;
      } }, { key: "addPt", value: function(e) {
        var t = new T(e);
        if (this._precisionModel.makePrecise(t), this.isRedundant(t)) return null;
        this._ptList.add(t);
      } }, { key: "reverse", value: function() {
      } }, { key: "addPts", value: function(e, t) {
        if (t) for (var n = 0; n < e.length; n++) this.addPt(e[n]);
        else for (var i = e.length - 1; i >= 0; i--) this.addPt(e[i]);
      } }, { key: "isRedundant", value: function(e) {
        if (this._ptList.size() < 1) return !1;
        var t = this._ptList.get(this._ptList.size() - 1);
        return e.distance(t) < this._minimimVertexDistance;
      } }, { key: "toString", value: function() {
        return new yn().createLineString(this.getCoordinates()).toString();
      } }, { key: "closeRing", value: function() {
        if (this._ptList.size() < 1) return null;
        var e = new T(this._ptList.get(0)), t = this._ptList.get(this._ptList.size() - 1);
        if (e.equals(t)) return null;
        this._ptList.add(e);
      } }, { key: "setMinimumVertexDistance", value: function(e) {
        this._minimimVertexDistance = e;
      } }], [{ key: "constructor_", value: function() {
        this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new ne();
      } }]), r;
    }();
    Ur.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
    var rt = function() {
      function r() {
        s(this, r);
      }
      return h(r, null, [{ key: "toDegrees", value: function(e) {
        return 180 * e / Math.PI;
      } }, { key: "normalize", value: function(e) {
        for (; e > Math.PI; ) e -= r.PI_TIMES_2;
        for (; e <= -Math.PI; ) e += r.PI_TIMES_2;
        return e;
      } }, { key: "angle", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return Math.atan2(e.y, e.x);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], i = n.x - t.x, u = n.y - t.y;
          return Math.atan2(u, i);
        }
      } }, { key: "isAcute", value: function(e, t, n) {
        var i = e.x - t.x, u = e.y - t.y;
        return i * (n.x - t.x) + u * (n.y - t.y) > 0;
      } }, { key: "isObtuse", value: function(e, t, n) {
        var i = e.x - t.x, u = e.y - t.y;
        return i * (n.x - t.x) + u * (n.y - t.y) < 0;
      } }, { key: "interiorAngle", value: function(e, t, n) {
        var i = r.angle(t, e), u = r.angle(t, n);
        return Math.abs(u - i);
      } }, { key: "normalizePositive", value: function(e) {
        if (e < 0) {
          for (; e < 0; ) e += r.PI_TIMES_2;
          e >= r.PI_TIMES_2 && (e = 0);
        } else {
          for (; e >= r.PI_TIMES_2; ) e -= r.PI_TIMES_2;
          e < 0 && (e = 0);
        }
        return e;
      } }, { key: "angleBetween", value: function(e, t, n) {
        var i = r.angle(t, e), u = r.angle(t, n);
        return r.diff(i, u);
      } }, { key: "diff", value: function(e, t) {
        var n = null;
        return (n = e < t ? t - e : e - t) > Math.PI && (n = 2 * Math.PI - n), n;
      } }, { key: "toRadians", value: function(e) {
        return e * Math.PI / 180;
      } }, { key: "getTurn", value: function(e, t) {
        var n = Math.sin(t - e);
        return n > 0 ? r.COUNTERCLOCKWISE : n < 0 ? r.CLOCKWISE : r.NONE;
      } }, { key: "angleBetweenOriented", value: function(e, t, n) {
        var i = r.angle(t, e), u = r.angle(t, n) - i;
        return u <= -Math.PI ? u + r.PI_TIMES_2 : u > Math.PI ? u - r.PI_TIMES_2 : u;
      } }]), r;
    }();
    rt.PI_TIMES_2 = 2 * Math.PI, rt.PI_OVER_2 = Math.PI / 2, rt.PI_OVER_4 = Math.PI / 4, rt.COUNTERCLOCKWISE = re.COUNTERCLOCKWISE, rt.CLOCKWISE = re.CLOCKWISE, rt.NONE = re.COLLINEAR;
    var Bn = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "addNextSegment", value: function(e, t) {
        if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = e, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
        var n = re.index(this._s0, this._s1, this._s2), i = n === re.CLOCKWISE && this._side === U.LEFT || n === re.COUNTERCLOCKWISE && this._side === U.RIGHT;
        n === 0 ? this.addCollinear(t) : i ? this.addOutsideTurn(n, t) : this.addInsideTurn(n, t);
      } }, { key: "addLineEndCap", value: function(e, t) {
        var n = new it(e, t), i = new it();
        this.computeOffsetSegment(n, U.LEFT, this._distance, i);
        var u = new it();
        this.computeOffsetSegment(n, U.RIGHT, this._distance, u);
        var c = t.x - e.x, f = t.y - e.y, d = Math.atan2(f, c);
        switch (this._bufParams.getEndCapStyle()) {
          case M.CAP_ROUND:
            this._segList.addPt(i.p1), this.addDirectedFillet(t, d + Math.PI / 2, d - Math.PI / 2, re.CLOCKWISE, this._distance), this._segList.addPt(u.p1);
            break;
          case M.CAP_FLAT:
            this._segList.addPt(i.p1), this._segList.addPt(u.p1);
            break;
          case M.CAP_SQUARE:
            var p = new T();
            p.x = Math.abs(this._distance) * Math.cos(d), p.y = Math.abs(this._distance) * Math.sin(d);
            var S = new T(i.p1.x + p.x, i.p1.y + p.y), L = new T(u.p1.x + p.x, u.p1.y + p.y);
            this._segList.addPt(S), this._segList.addPt(L);
        }
      } }, { key: "getCoordinates", value: function() {
        return this._segList.getCoordinates();
      } }, { key: "addMitreJoin", value: function(e, t, n, i) {
        var u = An.intersection(t.p0, t.p1, n.p0, n.p1);
        if (u !== null && (i <= 0 ? 1 : u.distance(e) / Math.abs(i)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(u), null;
        this.addLimitedMitreJoin(t, n, i, this._bufParams.getMitreLimit());
      } }, { key: "addOutsideTurn", value: function(e, t) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * r.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === M.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === M.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (t && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, e, this._distance), this._segList.addPt(this._offset1.p0));
      } }, { key: "createSquare", value: function(e) {
        this._segList.addPt(new T(e.x + this._distance, e.y + this._distance)), this._segList.addPt(new T(e.x + this._distance, e.y - this._distance)), this._segList.addPt(new T(e.x - this._distance, e.y - this._distance)), this._segList.addPt(new T(e.x - this._distance, e.y + this._distance)), this._segList.closeRing();
      } }, { key: "addSegments", value: function(e, t) {
        this._segList.addPts(e, t);
      } }, { key: "addFirstSegment", value: function() {
        this._segList.addPt(this._offset1.p0);
      } }, { key: "addCornerFillet", value: function(e, t, n, i, u) {
        var c = t.x - e.x, f = t.y - e.y, d = Math.atan2(f, c), p = n.x - e.x, S = n.y - e.y, L = Math.atan2(S, p);
        i === re.CLOCKWISE ? d <= L && (d += 2 * Math.PI) : d >= L && (d -= 2 * Math.PI), this._segList.addPt(t), this.addDirectedFillet(e, d, L, i, u), this._segList.addPt(n);
      } }, { key: "addLastSegment", value: function() {
        this._segList.addPt(this._offset1.p1);
      } }, { key: "initSideSegments", value: function(e, t, n) {
        this._s1 = e, this._s2 = t, this._side = n, this._seg1.setCoordinates(e, t), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
      } }, { key: "addLimitedMitreJoin", value: function(e, t, n, i) {
        var u = this._seg0.p1, c = rt.angle(u, this._seg0.p0), f = rt.angleBetweenOriented(this._seg0.p0, u, this._seg1.p1) / 2, d = rt.normalize(c + f), p = rt.normalize(d + Math.PI), S = i * n, L = n - S * Math.abs(Math.sin(f)), P = u.x + S * Math.cos(p), V = u.y + S * Math.sin(p), W = new T(P, V), $ = new it(u, W), ie = $.pointAlongOffset(1, L), le = $.pointAlongOffset(1, -L);
        this._side === U.LEFT ? (this._segList.addPt(ie), this._segList.addPt(le)) : (this._segList.addPt(le), this._segList.addPt(ie));
      } }, { key: "addDirectedFillet", value: function(e, t, n, i, u) {
        var c = i === re.CLOCKWISE ? -1 : 1, f = Math.abs(t - n), d = Math.trunc(f / this._filletAngleQuantum + 0.5);
        if (d < 1) return null;
        for (var p = f / d, S = new T(), L = 0; L < d; L++) {
          var P = t + c * L * p;
          S.x = e.x + u * Math.cos(P), S.y = e.y + u * Math.sin(P), this._segList.addPt(S);
        }
      } }, { key: "computeOffsetSegment", value: function(e, t, n, i) {
        var u = t === U.LEFT ? 1 : -1, c = e.p1.x - e.p0.x, f = e.p1.y - e.p0.y, d = Math.sqrt(c * c + f * f), p = u * n * c / d, S = u * n * f / d;
        i.p0.x = e.p0.x - S, i.p0.y = e.p0.y + p, i.p1.x = e.p1.x - S, i.p1.y = e.p1.y + p;
      } }, { key: "addInsideTurn", value: function(e, t) {
        if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
        else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * r.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
        else {
          if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
            var n = new T((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(n);
            var i = new T((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(i);
          } else this._segList.addPt(this._s1);
          this._segList.addPt(this._offset1.p0);
        }
      } }, { key: "createCircle", value: function(e) {
        var t = new T(e.x + this._distance, e.y);
        this._segList.addPt(t), this.addDirectedFillet(e, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
      } }, { key: "addBevelJoin", value: function(e, t) {
        this._segList.addPt(e.p1), this._segList.addPt(t.p0);
      } }, { key: "init", value: function(e) {
        this._distance = e, this._maxCurveSegmentError = e * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ur(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(e * r.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
      } }, { key: "addCollinear", value: function(e) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === M.JOIN_BEVEL || this._bufParams.getJoinStyle() === M.JOIN_MITRE ? (e && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, re.CLOCKWISE, this._distance));
      } }, { key: "closeRing", value: function() {
        this._segList.closeRing();
      } }, { key: "hasNarrowConcaveAngle", value: function() {
        return this._hasNarrowConcaveAngle;
      } }], [{ key: "constructor_", value: function() {
        this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new it(), this._seg1 = new it(), this._offset0 = new it(), this._offset1 = new it(), this._side = 0, this._hasNarrowConcaveAngle = !1;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._precisionModel = e, this._bufParams = t, this._li = new rn(), this._filletAngleQuantum = Math.PI / 2 / t.getQuadrantSegments(), t.getQuadrantSegments() >= 8 && t.getJoinStyle() === M.JOIN_ROUND && (this._closingSegLengthFactor = r.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
      } }]), r;
    }();
    Bn.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, Bn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, Bn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Bn.MAX_CLOSING_SEG_LEN_FACTOR = 80;
    var lu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getOffsetCurve", value: function(e, t) {
        if (this._distance = t, t === 0) return null;
        var n = t < 0, i = Math.abs(t), u = this.getSegGen(i);
        e.length <= 1 ? this.computePointCurve(e[0], u) : this.computeOffsetCurve(e, n, u);
        var c = u.getCoordinates();
        return n && Ge.reverse(c), c;
      } }, { key: "computeSingleSidedBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        if (t) {
          n.addSegments(e, !0);
          var u = kt.simplify(e, -i), c = u.length - 1;
          n.initSideSegments(u[c], u[c - 1], U.LEFT), n.addFirstSegment();
          for (var f = c - 2; f >= 0; f--) n.addNextSegment(u[f], !0);
        } else {
          n.addSegments(e, !1);
          var d = kt.simplify(e, i), p = d.length - 1;
          n.initSideSegments(d[0], d[1], U.LEFT), n.addFirstSegment();
          for (var S = 2; S <= p; S++) n.addNextSegment(d[S], !0);
        }
        n.addLastSegment(), n.closeRing();
      } }, { key: "computeRingBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        t === U.RIGHT && (i = -i);
        var u = kt.simplify(e, i), c = u.length - 1;
        n.initSideSegments(u[c - 1], u[0], t);
        for (var f = 1; f <= c; f++) {
          var d = f !== 1;
          n.addNextSegment(u[f], d);
        }
        n.closeRing();
      } }, { key: "computeLineBufferCurve", value: function(e, t) {
        var n = this.simplifyTolerance(this._distance), i = kt.simplify(e, n), u = i.length - 1;
        t.initSideSegments(i[0], i[1], U.LEFT);
        for (var c = 2; c <= u; c++) t.addNextSegment(i[c], !0);
        t.addLastSegment(), t.addLineEndCap(i[u - 1], i[u]);
        var f = kt.simplify(e, -n), d = f.length - 1;
        t.initSideSegments(f[d], f[d - 1], U.LEFT);
        for (var p = d - 2; p >= 0; p--) t.addNextSegment(f[p], !0);
        t.addLastSegment(), t.addLineEndCap(f[1], f[0]), t.closeRing();
      } }, { key: "computePointCurve", value: function(e, t) {
        switch (this._bufParams.getEndCapStyle()) {
          case M.CAP_ROUND:
            t.createCircle(e);
            break;
          case M.CAP_SQUARE:
            t.createSquare(e);
        }
      } }, { key: "getLineCurve", value: function(e, t) {
        if (this._distance = t, this.isLineOffsetEmpty(t)) return null;
        var n = Math.abs(t), i = this.getSegGen(n);
        if (e.length <= 1) this.computePointCurve(e[0], i);
        else if (this._bufParams.isSingleSided()) {
          var u = t < 0;
          this.computeSingleSidedBufferCurve(e, u, i);
        } else this.computeLineBufferCurve(e, i);
        return i.getCoordinates();
      } }, { key: "getBufferParameters", value: function() {
        return this._bufParams;
      } }, { key: "simplifyTolerance", value: function(e) {
        return e * this._bufParams.getSimplifyFactor();
      } }, { key: "getRingCurve", value: function(e, t, n) {
        if (this._distance = n, e.length <= 2) return this.getLineCurve(e, n);
        if (n === 0) return r.copyCoordinates(e);
        var i = this.getSegGen(n);
        return this.computeRingBufferCurve(e, t, i), i.getCoordinates();
      } }, { key: "computeOffsetCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        if (t) {
          var u = kt.simplify(e, -i), c = u.length - 1;
          n.initSideSegments(u[c], u[c - 1], U.LEFT), n.addFirstSegment();
          for (var f = c - 2; f >= 0; f--) n.addNextSegment(u[f], !0);
        } else {
          var d = kt.simplify(e, i), p = d.length - 1;
          n.initSideSegments(d[0], d[1], U.LEFT), n.addFirstSegment();
          for (var S = 2; S <= p; S++) n.addNextSegment(d[S], !0);
        }
        n.addLastSegment();
      } }, { key: "isLineOffsetEmpty", value: function(e) {
        return e === 0 || e < 0 && !this._bufParams.isSingleSided();
      } }, { key: "getSegGen", value: function(e) {
        return new Bn(this._precisionModel, this._bufParams, e);
      } }], [{ key: "constructor_", value: function() {
        this._distance = 0, this._precisionModel = null, this._bufParams = null;
        var e = arguments[0], t = arguments[1];
        this._precisionModel = e, this._bufParams = t;
      } }, { key: "copyCoordinates", value: function(e) {
        for (var t = new Array(e.length).fill(null), n = 0; n < t.length; n++) t[n] = new T(e[n]);
        return t;
      } }]), r;
    }(), Xr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "findStabbedSegments", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new ne(), n = this._subgraphs.iterator(); n.hasNext(); ) {
            var i = n.next(), u = i.getEnvelope();
            e.y < u.getMinY() || e.y > u.getMaxY() || this.findStabbedSegments(e, i.getDirectedEdges(), t);
          }
          return t;
        }
        if (arguments.length === 3) {
          if (ue(arguments[2], Ke) && arguments[0] instanceof T && arguments[1] instanceof Vi) for (var c = arguments[0], f = arguments[1], d = arguments[2], p = f.getEdge().getCoordinates(), S = 0; S < p.length - 1; S++) {
            this._seg.p0 = p[S], this._seg.p1 = p[S + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse();
            var L = Math.max(this._seg.p0.x, this._seg.p1.x);
            if (!(L < c.x) && !(this._seg.isHorizontal() || c.y < this._seg.p0.y || c.y > this._seg.p1.y || re.index(this._seg.p0, this._seg.p1, c) === re.RIGHT)) {
              var P = f.getDepth(U.LEFT);
              this._seg.p0.equals(p[S]) || (P = f.getDepth(U.RIGHT));
              var V = new Wr(this._seg, P);
              d.add(V);
            }
          }
          else if (ue(arguments[2], Ke) && arguments[0] instanceof T && ue(arguments[1], Ke)) for (var W = arguments[0], $ = arguments[1], ie = arguments[2], le = $.iterator(); le.hasNext(); ) {
            var pe = le.next();
            pe.isForward() && this.findStabbedSegments(W, pe, ie);
          }
        }
      } }, { key: "getDepth", value: function(e) {
        var t = this.findStabbedSegments(e);
        return t.size() === 0 ? 0 : _n.min(t)._leftDepth;
      } }], [{ key: "constructor_", value: function() {
        this._subgraphs = null, this._seg = new it();
        var e = arguments[0];
        this._subgraphs = e;
      } }]), r;
    }(), Wr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compareTo", value: function(e) {
        var t = e;
        if (this._upwardSeg.minX() >= t._upwardSeg.maxX()) return 1;
        if (this._upwardSeg.maxX() <= t._upwardSeg.minX()) return -1;
        var n = this._upwardSeg.orientationIndex(t._upwardSeg);
        return n !== 0 || (n = -1 * t._upwardSeg.orientationIndex(this._upwardSeg)) !== 0 ? n : this._upwardSeg.compareTo(t._upwardSeg);
      } }, { key: "compareX", value: function(e, t) {
        var n = e.p0.compareTo(t.p0);
        return n !== 0 ? n : e.p1.compareTo(t.p1);
      } }, { key: "toString", value: function() {
        return this._upwardSeg.toString();
      } }, { key: "interfaces_", get: function() {
        return [z];
      } }], [{ key: "constructor_", value: function() {
        this._upwardSeg = null, this._leftDepth = null;
        var e = arguments[0], t = arguments[1];
        this._upwardSeg = new it(e), this._leftDepth = t;
      } }]), r;
    }();
    Xr.DepthSegment = Wr;
    var Vr = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, null, [{ key: "constructor_", value: function() {
        F.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
      } }]), t;
    }(F), ji = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getY", value: function() {
        var e = this.y / this.w;
        if (Q.isNaN(e) || Q.isInfinite(e)) throw new Vr();
        return e;
      } }, { key: "getX", value: function() {
        var e = this.x / this.w;
        if (Q.isNaN(e) || Q.isInfinite(e)) throw new Vr();
        return e;
      } }, { key: "getCoordinate", value: function() {
        var e = new T();
        return e.x = this.getX(), e.y = this.getY(), e;
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.w = null, arguments.length === 0) this.x = 0, this.y = 0, this.w = 1;
        else if (arguments.length === 1) {
          var e = arguments[0];
          this.x = e.x, this.y = e.y, this.w = 1;
        } else if (arguments.length === 2) {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var t = arguments[0], n = arguments[1];
            this.x = t, this.y = n, this.w = 1;
          } else if (arguments[0] instanceof r && arguments[1] instanceof r) {
            var i = arguments[0], u = arguments[1];
            this.x = i.y * u.w - u.y * i.w, this.y = u.x * i.w - i.x * u.w, this.w = i.x * u.y - u.x * i.y;
          } else if (arguments[0] instanceof T && arguments[1] instanceof T) {
            var c = arguments[0], f = arguments[1];
            this.x = c.y - f.y, this.y = f.x - c.x, this.w = c.x * f.y - f.x * c.y;
          }
        } else if (arguments.length === 3) {
          var d = arguments[0], p = arguments[1], S = arguments[2];
          this.x = d, this.y = p, this.w = S;
        } else if (arguments.length === 4) {
          var L = arguments[0], P = arguments[1], V = arguments[2], W = arguments[3], $ = L.y - P.y, ie = P.x - L.x, le = L.x * P.y - P.x * L.y, pe = V.y - W.y, Oe = W.x - V.x, Ye = V.x * W.y - W.x * V.y;
          this.x = ie * Ye - Oe * le, this.y = pe * le - $ * Ye, this.w = $ * Oe - pe * ie;
        }
      } }]), r;
    }(), hu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "area", value: function() {
        return r.area(this.p0, this.p1, this.p2);
      } }, { key: "signedArea", value: function() {
        return r.signedArea(this.p0, this.p1, this.p2);
      } }, { key: "interpolateZ", value: function(e) {
        if (e === null) throw new R("Supplied point is null.");
        return r.interpolateZ(e, this.p0, this.p1, this.p2);
      } }, { key: "longestSideLength", value: function() {
        return r.longestSideLength(this.p0, this.p1, this.p2);
      } }, { key: "isAcute", value: function() {
        return r.isAcute(this.p0, this.p1, this.p2);
      } }, { key: "circumcentre", value: function() {
        return r.circumcentre(this.p0, this.p1, this.p2);
      } }, { key: "area3D", value: function() {
        return r.area3D(this.p0, this.p1, this.p2);
      } }, { key: "centroid", value: function() {
        return r.centroid(this.p0, this.p1, this.p2);
      } }, { key: "inCentre", value: function() {
        return r.inCentre(this.p0, this.p1, this.p2);
      } }], [{ key: "constructor_", value: function() {
        this.p0 = null, this.p1 = null, this.p2 = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this.p0 = e, this.p1 = t, this.p2 = n;
      } }, { key: "area", value: function(e, t, n) {
        return Math.abs(((n.x - e.x) * (t.y - e.y) - (t.x - e.x) * (n.y - e.y)) / 2);
      } }, { key: "signedArea", value: function(e, t, n) {
        return ((n.x - e.x) * (t.y - e.y) - (t.x - e.x) * (n.y - e.y)) / 2;
      } }, { key: "det", value: function(e, t, n, i) {
        return e * i - t * n;
      } }, { key: "interpolateZ", value: function(e, t, n, i) {
        var u = t.x, c = t.y, f = n.x - u, d = i.x - u, p = n.y - c, S = i.y - c, L = f * S - d * p, P = e.x - u, V = e.y - c, W = (S * P - d * V) / L, $ = (-p * P + f * V) / L;
        return t.getZ() + W * (n.getZ() - t.getZ()) + $ * (i.getZ() - t.getZ());
      } }, { key: "longestSideLength", value: function(e, t, n) {
        var i = e.distance(t), u = t.distance(n), c = n.distance(e), f = i;
        return u > f && (f = u), c > f && (f = c), f;
      } }, { key: "circumcentreDD", value: function(e, t, n) {
        var i = te.valueOf(e.x).subtract(n.x), u = te.valueOf(e.y).subtract(n.y), c = te.valueOf(t.x).subtract(n.x), f = te.valueOf(t.y).subtract(n.y), d = te.determinant(i, u, c, f).multiply(2), p = i.sqr().add(u.sqr()), S = c.sqr().add(f.sqr()), L = te.determinant(u, p, f, S), P = te.determinant(i, p, c, S), V = te.valueOf(n.x).subtract(L.divide(d)).doubleValue(), W = te.valueOf(n.y).add(P.divide(d)).doubleValue();
        return new T(V, W);
      } }, { key: "isAcute", value: function(e, t, n) {
        return !!rt.isAcute(e, t, n) && !!rt.isAcute(t, n, e) && !!rt.isAcute(n, e, t);
      } }, { key: "circumcentre", value: function(e, t, n) {
        var i = n.x, u = n.y, c = e.x - i, f = e.y - u, d = t.x - i, p = t.y - u, S = 2 * r.det(c, f, d, p), L = r.det(f, c * c + f * f, p, d * d + p * p), P = r.det(c, c * c + f * f, d, d * d + p * p);
        return new T(i - L / S, u + P / S);
      } }, { key: "perpendicularBisector", value: function(e, t) {
        var n = t.x - e.x, i = t.y - e.y, u = new ji(e.x + n / 2, e.y + i / 2, 1), c = new ji(e.x - i + n / 2, e.y + n + i / 2, 1);
        return new ji(u, c);
      } }, { key: "angleBisector", value: function(e, t, n) {
        var i = t.distance(e), u = i / (i + t.distance(n)), c = n.x - e.x, f = n.y - e.y;
        return new T(e.x + u * c, e.y + u * f);
      } }, { key: "area3D", value: function(e, t, n) {
        var i = t.x - e.x, u = t.y - e.y, c = t.getZ() - e.getZ(), f = n.x - e.x, d = n.y - e.y, p = n.getZ() - e.getZ(), S = u * p - c * d, L = c * f - i * p, P = i * d - u * f, V = S * S + L * L + P * P, W = Math.sqrt(V) / 2;
        return W;
      } }, { key: "centroid", value: function(e, t, n) {
        var i = (e.x + t.x + n.x) / 3, u = (e.y + t.y + n.y) / 3;
        return new T(i, u);
      } }, { key: "inCentre", value: function(e, t, n) {
        var i = t.distance(n), u = e.distance(n), c = e.distance(t), f = i + u + c, d = (i * e.x + u * t.x + c * n.x) / f, p = (i * e.y + u * t.y + c * n.y) / f;
        return new T(d, p);
      } }]), r;
    }(), cu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "addRingSide", value: function(e, t, n, i, u) {
        if (t === 0 && e.length < Dn.MINIMUM_VALID_SIZE) return null;
        var c = i, f = u;
        e.length >= Dn.MINIMUM_VALID_SIZE && re.isCCW(e) && (c = u, f = i, n = U.opposite(n));
        var d = this._curveBuilder.getRingCurve(e, n, t);
        this.addCurve(d, c, f);
      } }, { key: "addRingBothSides", value: function(e, t) {
        this.addRingSide(e, t, U.LEFT, I.EXTERIOR, I.INTERIOR), this.addRingSide(e, t, U.RIGHT, I.INTERIOR, I.EXTERIOR);
      } }, { key: "addPoint", value: function(e) {
        if (this._distance <= 0) return null;
        var t = e.getCoordinates(), n = this._curveBuilder.getLineCurve(t, this._distance);
        this.addCurve(n, I.EXTERIOR, I.INTERIOR);
      } }, { key: "addPolygon", value: function(e) {
        var t = this._distance, n = U.LEFT;
        this._distance < 0 && (t = -this._distance, n = U.RIGHT);
        var i = e.getExteriorRing(), u = Ge.removeRepeatedPoints(i.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(i, this._distance) || this._distance <= 0 && u.length < 3) return null;
        this.addRingSide(u, t, n, I.EXTERIOR, I.INTERIOR);
        for (var c = 0; c < e.getNumInteriorRing(); c++) {
          var f = e.getInteriorRingN(c), d = Ge.removeRepeatedPoints(f.getCoordinates());
          this._distance > 0 && this.isErodedCompletely(f, -this._distance) || this.addRingSide(d, t, U.opposite(n), I.INTERIOR, I.EXTERIOR);
        }
      } }, { key: "isTriangleErodedCompletely", value: function(e, t) {
        var n = new hu(e[0], e[1], e[2]), i = n.inCentre();
        return lt.pointToSegment(i, n.p0, n.p1) < Math.abs(t);
      } }, { key: "addLineString", value: function(e) {
        if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
        var t = Ge.removeRepeatedPoints(e.getCoordinates());
        if (Ge.isRing(t) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(t, this._distance);
        else {
          var n = this._curveBuilder.getLineCurve(t, this._distance);
          this.addCurve(n, I.EXTERIOR, I.INTERIOR);
        }
      } }, { key: "addCurve", value: function(e, t, n) {
        if (e === null || e.length < 2) return null;
        var i = new sn(e, new ft(0, I.BOUNDARY, t, n));
        this._curveList.add(i);
      } }, { key: "getCurves", value: function() {
        return this.add(this._inputGeom), this._curveList;
      } }, { key: "add", value: function(e) {
        if (e.isEmpty()) return null;
        if (e instanceof Gt) this.addPolygon(e);
        else if (e instanceof Fe) this.addLineString(e);
        else if (e instanceof fe) this.addPoint(e);
        else if (e instanceof Fi) this.addCollection(e);
        else if (e instanceof Bi) this.addCollection(e);
        else if (e instanceof zi) this.addCollection(e);
        else {
          if (!(e instanceof nt)) throw new ae(e.getGeometryType());
          this.addCollection(e);
        }
      } }, { key: "isErodedCompletely", value: function(e, t) {
        var n = e.getCoordinates();
        if (n.length < 4) return t < 0;
        if (n.length === 4) return this.isTriangleErodedCompletely(n, t);
        var i = e.getEnvelopeInternal(), u = Math.min(i.getHeight(), i.getWidth());
        return t < 0 && 2 * Math.abs(t) > u;
      } }, { key: "addCollection", value: function(e) {
        for (var t = 0; t < e.getNumGeometries(); t++) {
          var n = e.getGeometryN(t);
          this.add(n);
        }
      } }], [{ key: "constructor_", value: function() {
        this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new ne();
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._inputGeom = e, this._distance = t, this._curveBuilder = n;
      } }]), r;
    }(), fu = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "locate", value: function(e) {
      } }]), r;
    }(), gu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "next", value: function() {
        if (this._atStart) return this._atStart = !1, r.isAtomic(this._parent) && this._index++, this._parent;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null;
        }
        if (this._index >= this._max) throw new we();
        var e = this._parent.getGeometryN(this._index++);
        return e instanceof nt ? (this._subcollectionIterator = new r(e), this._subcollectionIterator.next()) : e;
      } }, { key: "remove", value: function() {
        throw new ae(this.getClass().getName());
      } }, { key: "hasNext", value: function() {
        if (this._atStart) return !0;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null;
        }
        return !(this._index >= this._max);
      } }, { key: "interfaces_", get: function() {
        return [nu];
      } }], [{ key: "constructor_", value: function() {
        this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
        var e = arguments[0];
        this._parent = e, this._atStart = !0, this._index = 0, this._max = e.getNumGeometries();
      } }, { key: "isAtomic", value: function(e) {
        return !(e instanceof nt);
      } }]), r;
    }(), du = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "locate", value: function(e) {
        return r.locate(e, this._geom);
      } }, { key: "interfaces_", get: function() {
        return [fu];
      } }], [{ key: "constructor_", value: function() {
        this._geom = null;
        var e = arguments[0];
        this._geom = e;
      } }, { key: "locatePointInPolygon", value: function(e, t) {
        if (t.isEmpty()) return I.EXTERIOR;
        var n = t.getExteriorRing(), i = r.locatePointInRing(e, n);
        if (i !== I.INTERIOR) return i;
        for (var u = 0; u < t.getNumInteriorRing(); u++) {
          var c = t.getInteriorRingN(u), f = r.locatePointInRing(e, c);
          if (f === I.BOUNDARY) return I.BOUNDARY;
          if (f === I.INTERIOR) return I.EXTERIOR;
        }
        return I.INTERIOR;
      } }, { key: "locatePointInRing", value: function(e, t) {
        return t.getEnvelopeInternal().intersects(e) ? Xi.locateInRing(e, t.getCoordinates()) : I.EXTERIOR;
      } }, { key: "containsPointInPolygon", value: function(e, t) {
        return I.EXTERIOR !== r.locatePointInPolygon(e, t);
      } }, { key: "locateInGeometry", value: function(e, t) {
        if (t instanceof Gt) return r.locatePointInPolygon(e, t);
        if (t instanceof nt) for (var n = new gu(t); n.hasNext(); ) {
          var i = n.next();
          if (i !== t) {
            var u = r.locateInGeometry(e, i);
            if (u !== I.EXTERIOR) return u;
          }
        }
        return I.EXTERIOR;
      } }, { key: "isContained", value: function(e, t) {
        return I.EXTERIOR !== r.locate(e, t);
      } }, { key: "locate", value: function(e, t) {
        return t.isEmpty() ? I.EXTERIOR : t.getEnvelopeInternal().intersects(e) ? r.locateInGeometry(e, t) : I.EXTERIOR;
      } }]), r;
    }(), mu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getNextCW", value: function(e) {
        this.getEdges();
        var t = this._edgeList.indexOf(e), n = t - 1;
        return t === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
      } }, { key: "propagateSideLabels", value: function(e) {
        for (var t = I.NONE, n = this.iterator(); n.hasNext(); ) {
          var i = n.next().getLabel();
          i.isArea(e) && i.getLocation(e, U.LEFT) !== I.NONE && (t = i.getLocation(e, U.LEFT));
        }
        if (t === I.NONE) return null;
        for (var u = t, c = this.iterator(); c.hasNext(); ) {
          var f = c.next(), d = f.getLabel();
          if (d.getLocation(e, U.ON) === I.NONE && d.setLocation(e, U.ON, u), d.isArea(e)) {
            var p = d.getLocation(e, U.LEFT), S = d.getLocation(e, U.RIGHT);
            if (S !== I.NONE) {
              if (S !== u) throw new tt("side location conflict", f.getCoordinate());
              p === I.NONE && he.shouldNeverReachHere("found single null side (at " + f.getCoordinate() + ")"), u = p;
            } else he.isTrue(d.getLocation(e, U.LEFT) === I.NONE, "found single null side"), d.setLocation(e, U.RIGHT, u), d.setLocation(e, U.LEFT, u);
          }
        }
      } }, { key: "getCoordinate", value: function() {
        var e = this.iterator();
        return e.hasNext() ? e.next().getCoordinate() : null;
      } }, { key: "print", value: function(e) {
        Je.out.println("EdgeEndStar:   " + this.getCoordinate());
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "isAreaLabelsConsistent", value: function(e) {
        return this.computeEdgeEndLabels(e.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
      } }, { key: "checkAreaLabelsConsistent", value: function(e) {
        var t = this.getEdges();
        if (t.size() <= 0) return !0;
        var n = t.size() - 1, i = t.get(n).getLabel().getLocation(e, U.LEFT);
        he.isTrue(i !== I.NONE, "Found unlabelled area edge");
        for (var u = i, c = this.iterator(); c.hasNext(); ) {
          var f = c.next().getLabel();
          he.isTrue(f.isArea(e), "Found non-area edge");
          var d = f.getLocation(e, U.LEFT), p = f.getLocation(e, U.RIGHT);
          if (d === p || p !== u) return !1;
          u = d;
        }
        return !0;
      } }, { key: "findIndex", value: function(e) {
        this.iterator();
        for (var t = 0; t < this._edgeList.size(); t++)
          if (this._edgeList.get(t) === e) return t;
        return -1;
      } }, { key: "iterator", value: function() {
        return this.getEdges().iterator();
      } }, { key: "getEdges", value: function() {
        return this._edgeList === null && (this._edgeList = new ne(this._edgeMap.values())), this._edgeList;
      } }, { key: "getLocation", value: function(e, t, n) {
        return this._ptInAreaLocation[e] === I.NONE && (this._ptInAreaLocation[e] = du.locate(t, n[e].getGeometry())), this._ptInAreaLocation[e];
      } }, { key: "toString", value: function() {
        var e = new Jt();
        e.append("EdgeEndStar:   " + this.getCoordinate()), e.append(`
`);
        for (var t = this.iterator(); t.hasNext(); ) {
          var n = t.next();
          e.append(n), e.append(`
`);
        }
        return e.toString();
      } }, { key: "computeEdgeEndLabels", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          t.next().computeLabel(e);
      } }, { key: "computeLabelling", value: function(e) {
        this.computeEdgeEndLabels(e[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
        for (var t = [!1, !1], n = this.iterator(); n.hasNext(); ) for (var i = n.next().getLabel(), u = 0; u < 2; u++) i.isLine(u) && i.getLocation(u) === I.BOUNDARY && (t[u] = !0);
        for (var c = this.iterator(); c.hasNext(); ) for (var f = c.next(), d = f.getLabel(), p = 0; p < 2; p++) if (d.isAnyNull(p)) {
          var S = I.NONE;
          if (t[p]) S = I.EXTERIOR;
          else {
            var L = f.getCoordinate();
            S = this.getLocation(p, L, e);
          }
          d.setAllLocationsIfNull(p, S);
        }
      } }, { key: "getDegree", value: function() {
        return this._edgeMap.size();
      } }, { key: "insertEdgeEnd", value: function(e, t) {
        this._edgeMap.put(e, t), this._edgeList = null;
      } }], [{ key: "constructor_", value: function() {
        this._edgeMap = new zn(), this._edgeList = null, this._ptInAreaLocation = [I.NONE, I.NONE];
      } }]), r;
    }(), vu = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "linkResultDirectedEdges", value: function() {
        this.getResultAreaEdges();
        for (var n = null, i = null, u = this._SCANNING_FOR_INCOMING, c = 0; c < this._resultAreaEdgeList.size(); c++) {
          var f = this._resultAreaEdgeList.get(c), d = f.getSym();
          if (f.getLabel().isArea()) switch (n === null && f.isInResult() && (n = f), u) {
            case this._SCANNING_FOR_INCOMING:
              if (!d.isInResult()) continue;
              i = d, u = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (!f.isInResult()) continue;
              i.setNext(f), u = this._SCANNING_FOR_INCOMING;
          }
        }
        if (u === this._LINKING_TO_OUTGOING) {
          if (n === null) throw new tt("no outgoing dirEdge found", this.getCoordinate());
          he.isTrue(n.isInResult(), "unable to link last incoming dirEdge"), i.setNext(n);
        }
      } }, { key: "insert", value: function(n) {
        var i = n;
        this.insertEdgeEnd(i, i);
      } }, { key: "getRightmostEdge", value: function() {
        var n = this.getEdges(), i = n.size();
        if (i < 1) return null;
        var u = n.get(0);
        if (i === 1) return u;
        var c = n.get(i - 1), f = u.getQuadrant(), d = c.getQuadrant();
        return He.isNorthern(f) && He.isNorthern(d) ? u : He.isNorthern(f) || He.isNorthern(d) ? u.getDy() !== 0 ? u : c.getDy() !== 0 ? c : (he.shouldNeverReachHere("found two horizontal edges incident on node"), null) : c;
      } }, { key: "print", value: function(n) {
        Je.out.println("DirectedEdgeStar: " + this.getCoordinate());
        for (var i = this.iterator(); i.hasNext(); ) {
          var u = i.next();
          n.print("out "), u.print(n), n.println(), n.print("in "), u.getSym().print(n), n.println();
        }
      } }, { key: "getResultAreaEdges", value: function() {
        if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
        this._resultAreaEdgeList = new ne();
        for (var n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          (i.isInResult() || i.getSym().isInResult()) && this._resultAreaEdgeList.add(i);
        }
        return this._resultAreaEdgeList;
      } }, { key: "updateLabelling", value: function(n) {
        for (var i = this.iterator(); i.hasNext(); ) {
          var u = i.next().getLabel();
          u.setAllLocationsIfNull(0, n.getLocation(0)), u.setAllLocationsIfNull(1, n.getLocation(1));
        }
      } }, { key: "linkAllDirectedEdges", value: function() {
        this.getEdges();
        for (var n = null, i = null, u = this._edgeList.size() - 1; u >= 0; u--) {
          var c = this._edgeList.get(u), f = c.getSym();
          i === null && (i = f), n !== null && f.setNext(n), n = c;
        }
        i.setNext(n);
      } }, { key: "computeDepths", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = this.findIndex(n), u = n.getDepth(U.LEFT), c = n.getDepth(U.RIGHT), f = this.computeDepths(i + 1, this._edgeList.size(), u), d = this.computeDepths(0, i, f);
          if (d !== c) throw new tt("depth mismatch at " + n.getCoordinate());
        } else if (arguments.length === 3) {
          for (var p = arguments[0], S = arguments[1], L = arguments[2], P = L, V = p; V < S; V++) {
            var W = this._edgeList.get(V);
            W.setEdgeDepths(U.RIGHT, P), P = W.getDepth(U.LEFT);
          }
          return P;
        }
      } }, { key: "mergeSymLabels", value: function() {
        for (var n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().merge(i.getSym().getLabel());
        }
      } }, { key: "linkMinimalDirectedEdges", value: function(n) {
        for (var i = null, u = null, c = this._SCANNING_FOR_INCOMING, f = this._resultAreaEdgeList.size() - 1; f >= 0; f--) {
          var d = this._resultAreaEdgeList.get(f), p = d.getSym();
          switch (i === null && d.getEdgeRing() === n && (i = d), c) {
            case this._SCANNING_FOR_INCOMING:
              if (p.getEdgeRing() !== n) continue;
              u = p, c = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (d.getEdgeRing() !== n) continue;
              u.setNextMin(d), c = this._SCANNING_FOR_INCOMING;
          }
        }
        c === this._LINKING_TO_OUTGOING && (he.isTrue(i !== null, "found null for first outgoing dirEdge"), he.isTrue(i.getEdgeRing() === n, "unable to link last incoming dirEdge"), u.setNextMin(i));
      } }, { key: "getOutgoingDegree", value: function() {
        if (arguments.length === 0) {
          for (var n = 0, i = this.iterator(); i.hasNext(); ) {
            var u = i.next();
            u.isInResult() && n++;
          }
          return n;
        }
        if (arguments.length === 1) {
          for (var c = arguments[0], f = 0, d = this.iterator(); d.hasNext(); ) {
            var p = d.next();
            p.getEdgeRing() === c && f++;
          }
          return f;
        }
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "findCoveredLineEdges", value: function() {
        for (var n = I.NONE, i = this.iterator(); i.hasNext(); ) {
          var u = i.next(), c = u.getSym();
          if (!u.isLineEdge()) {
            if (u.isInResult()) {
              n = I.INTERIOR;
              break;
            }
            if (c.isInResult()) {
              n = I.EXTERIOR;
              break;
            }
          }
        }
        if (n === I.NONE) return null;
        for (var f = n, d = this.iterator(); d.hasNext(); ) {
          var p = d.next(), S = p.getSym();
          p.isLineEdge() ? p.getEdge().setCovered(f === I.INTERIOR) : (p.isInResult() && (f = I.EXTERIOR), S.isInResult() && (f = I.INTERIOR));
        }
      } }, { key: "computeLabelling", value: function(n) {
        w(v(t.prototype), "computeLabelling", this).call(this, n), this._label = new ft(I.NONE);
        for (var i = this.iterator(); i.hasNext(); ) for (var u = i.next().getEdge().getLabel(), c = 0; c < 2; c++) {
          var f = u.getLocation(c);
          f !== I.INTERIOR && f !== I.BOUNDARY || this._label.setLocation(c, I.INTERIOR);
        }
      } }], [{ key: "constructor_", value: function() {
        this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
      } }]), t;
    }(mu), yu = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        return s(this, t), e.call(this);
      }
      return h(t, [{ key: "createNode", value: function(n) {
        return new hi(n, new vu());
      } }]), t;
    }(Ar), Hr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compareTo", value: function(e) {
        var t = e;
        return r.compareOriented(this._pts, this._orientation, t._pts, t._orientation);
      } }, { key: "interfaces_", get: function() {
        return [z];
      } }], [{ key: "constructor_", value: function() {
        this._pts = null, this._orientation = null;
        var e = arguments[0];
        this._pts = e, this._orientation = r.orientation(e);
      } }, { key: "orientation", value: function(e) {
        return Ge.increasingDirection(e) === 1;
      } }, { key: "compareOriented", value: function(e, t, n, i) {
        for (var u = t ? 1 : -1, c = i ? 1 : -1, f = t ? e.length : -1, d = i ? n.length : -1, p = t ? 0 : e.length - 1, S = i ? 0 : n.length - 1; ; ) {
          var L = e[p].compareTo(n[S]);
          if (L !== 0) return L;
          var P = (p += u) === f, V = (S += c) === d;
          if (P && !V) return -1;
          if (!P && V) return 1;
          if (P && V) return 0;
        }
      } }]), r;
    }(), pu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "print", value: function(e) {
        e.print("MULTILINESTRING ( ");
        for (var t = 0; t < this._edges.size(); t++) {
          var n = this._edges.get(t);
          t > 0 && e.print(","), e.print("(");
          for (var i = n.getCoordinates(), u = 0; u < i.length; u++) u > 0 && e.print(","), e.print(i[u].x + " " + i[u].y);
          e.println(")");
        }
        e.print(")  ");
      } }, { key: "addAll", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) this.add(t.next());
      } }, { key: "findEdgeIndex", value: function(e) {
        for (var t = 0; t < this._edges.size(); t++) if (this._edges.get(t).equals(e)) return t;
        return -1;
      } }, { key: "iterator", value: function() {
        return this._edges.iterator();
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "get", value: function(e) {
        return this._edges.get(e);
      } }, { key: "findEqualEdge", value: function(e) {
        var t = new Hr(e.getCoordinates());
        return this._ocaMap.get(t);
      } }, { key: "add", value: function(e) {
        this._edges.add(e);
        var t = new Hr(e.getCoordinates());
        this._ocaMap.put(t, e);
      } }], [{ key: "constructor_", value: function() {
        this._edges = new ne(), this._ocaMap = new zn();
      } }]), r;
    }(), Zr = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "processIntersections", value: function(e, t, n, i) {
      } }, { key: "isDone", value: function() {
      } }]), r;
    }(), _u = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isTrivialIntersection", value: function(e, t, n, i) {
        if (e === n && this._li.getIntersectionNum() === 1) {
          if (r.isAdjacentSegments(t, i)) return !0;
          if (e.isClosed()) {
            var u = e.size() - 1;
            if (t === 0 && i === u || i === 0 && t === u) return !0;
          }
        }
        return !1;
      } }, { key: "getProperIntersectionPoint", value: function() {
        return this._properIntersectionPoint;
      } }, { key: "hasProperInteriorIntersection", value: function() {
        return this._hasProperInterior;
      } }, { key: "getLineIntersector", value: function() {
        return this._li;
      } }, { key: "hasProperIntersection", value: function() {
        return this._hasProper;
      } }, { key: "processIntersections", value: function(e, t, n, i) {
        if (e === n && t === i) return null;
        this.numTests++;
        var u = e.getCoordinates()[t], c = e.getCoordinates()[t + 1], f = n.getCoordinates()[i], d = n.getCoordinates()[i + 1];
        this._li.computeIntersection(u, c, f, d), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(e, t, n, i) || (this._hasIntersection = !0, e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
      } }, { key: "hasIntersection", value: function() {
        return this._hasIntersection;
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "hasInteriorIntersection", value: function() {
        return this._hasInterior;
      } }, { key: "interfaces_", get: function() {
        return [Zr];
      } }], [{ key: "constructor_", value: function() {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
        var e = arguments[0];
        this._li = e;
      } }, { key: "isAdjacentSegments", value: function(e, t) {
        return Math.abs(e - t) === 1;
      } }]), r;
    }(), ku = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getSegmentIndex", value: function() {
        return this.segmentIndex;
      } }, { key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(e) {
        e.print(this.coord), e.print(" seg # = " + this.segmentIndex), e.println(" dist = " + this.dist);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.compare(t.segmentIndex, t.dist);
      } }, { key: "isEndPoint", value: function(e) {
        return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === e;
      } }, { key: "toString", value: function() {
        return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
      } }, { key: "getDistance", value: function() {
        return this.dist;
      } }, { key: "compare", value: function(e, t) {
        return this.segmentIndex < e ? -1 : this.segmentIndex > e ? 1 : this.dist < t ? -1 : this.dist > t ? 1 : 0;
      } }, { key: "interfaces_", get: function() {
        return [z];
      } }], [{ key: "constructor_", value: function() {
        this.coord = null, this.segmentIndex = null, this.dist = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this.coord = new T(e), this.segmentIndex = t, this.dist = n;
      } }]), r;
    }(), Eu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(e) {
        this.addEndpoints();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var i = t.next(), u = this.createSplitEdge(n, i);
          e.add(u), n = i;
        }
      } }, { key: "addEndpoints", value: function() {
        var e = this.edge.pts.length - 1;
        this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[e], e, 0);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = t.segmentIndex - e.segmentIndex + 2, i = this.edge.pts[t.segmentIndex], u = t.dist > 0 || !t.coord.equals2D(i);
        u || n--;
        var c = new Array(n).fill(null), f = 0;
        c[f++] = new T(e.coord);
        for (var d = e.segmentIndex + 1; d <= t.segmentIndex; d++) c[f++] = this.edge.pts[d];
        return u && (c[f] = t.coord), new Qr(c, new ft(this.edge._label));
      } }, { key: "add", value: function(e, t, n) {
        var i = new ku(e, t, n), u = this._nodeMap.get(i);
        return u !== null ? u : (this._nodeMap.put(i, i), i);
      } }, { key: "isIntersection", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          if (t.next().coord.equals(e)) return !0;
        return !1;
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new zn(), this.edge = null;
        var e = arguments[0];
        this.edge = e;
      } }]), r;
    }(), xu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isIntersects", value: function() {
        return !this.isDisjoint();
      } }, { key: "isCovers", value: function() {
        return (r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) || r.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || r.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || r.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY])) && this._matrix[I.EXTERIOR][I.INTERIOR] === H.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === H.FALSE;
      } }, { key: "isCoveredBy", value: function() {
        return (r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) || r.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || r.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || r.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY])) && this._matrix[I.INTERIOR][I.EXTERIOR] === H.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === H.FALSE;
      } }, { key: "set", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this._matrix[n][i] = H.toDimensionValue(e.charAt(t));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2];
          this._matrix[u][c] = f;
        }
      } }, { key: "isContains", value: function() {
        return r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.EXTERIOR][I.INTERIOR] === H.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === H.FALSE;
      } }, { key: "setAtLeast", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this.setAtLeast(n, i, H.toDimensionValue(e.charAt(t)));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2];
          this._matrix[u][c] < f && (this._matrix[u][c] = f);
        }
      } }, { key: "setAtLeastIfValid", value: function(e, t, n) {
        e >= 0 && t >= 0 && this.setAtLeast(e, t, n);
      } }, { key: "isWithin", value: function() {
        return r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.INTERIOR][I.EXTERIOR] === H.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === H.FALSE;
      } }, { key: "isTouches", value: function(e, t) {
        return e > t ? this.isTouches(t, e) : (e === H.A && t === H.A || e === H.L && t === H.L || e === H.L && t === H.A || e === H.P && t === H.A || e === H.P && t === H.L) && this._matrix[I.INTERIOR][I.INTERIOR] === H.FALSE && (r.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || r.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || r.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY]));
      } }, { key: "isOverlaps", value: function(e, t) {
        return e === H.P && t === H.P || e === H.A && t === H.A ? r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && r.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) && r.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]) : e === H.L && t === H.L && this._matrix[I.INTERIOR][I.INTERIOR] === 1 && r.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) && r.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]);
      } }, { key: "isEquals", value: function(e, t) {
        return e === t && r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.INTERIOR][I.EXTERIOR] === H.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === H.FALSE && this._matrix[I.EXTERIOR][I.INTERIOR] === H.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === H.FALSE;
      } }, { key: "toString", value: function() {
        for (var e = new ui("123456789"), t = 0; t < 3; t++) for (var n = 0; n < 3; n++) e.setCharAt(3 * t + n, H.toDimensionSymbol(this._matrix[t][n]));
        return e.toString();
      } }, { key: "setAll", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this._matrix[t][n] = e;
      } }, { key: "get", value: function(e, t) {
        return this._matrix[e][t];
      } }, { key: "transpose", value: function() {
        var e = this._matrix[1][0];
        return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = e, e = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = e, e = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = e, this;
      } }, { key: "matches", value: function(e) {
        if (e.length !== 9) throw new R("Should be length 9: " + e);
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) if (!r.matches(this._matrix[t][n], e.charAt(3 * t + n))) return !1;
        return !0;
      } }, { key: "add", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this.setAtLeast(t, n, e.get(t, n));
      } }, { key: "isDisjoint", value: function() {
        return this._matrix[I.INTERIOR][I.INTERIOR] === H.FALSE && this._matrix[I.INTERIOR][I.BOUNDARY] === H.FALSE && this._matrix[I.BOUNDARY][I.INTERIOR] === H.FALSE && this._matrix[I.BOUNDARY][I.BOUNDARY] === H.FALSE;
      } }, { key: "isCrosses", value: function(e, t) {
        return e === H.P && t === H.L || e === H.P && t === H.A || e === H.L && t === H.A ? r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && r.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) : e === H.L && t === H.P || e === H.A && t === H.P || e === H.A && t === H.L ? r.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && r.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]) : e === H.L && t === H.L && this._matrix[I.INTERIOR][I.INTERIOR] === 0;
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map(function() {
          return Array(3);
        }), this.setAll(H.FALSE);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "string") {
            var e = arguments[0];
            r.constructor_.call(this), this.set(e);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            r.constructor_.call(this), this._matrix[I.INTERIOR][I.INTERIOR] = t._matrix[I.INTERIOR][I.INTERIOR], this._matrix[I.INTERIOR][I.BOUNDARY] = t._matrix[I.INTERIOR][I.BOUNDARY], this._matrix[I.INTERIOR][I.EXTERIOR] = t._matrix[I.INTERIOR][I.EXTERIOR], this._matrix[I.BOUNDARY][I.INTERIOR] = t._matrix[I.BOUNDARY][I.INTERIOR], this._matrix[I.BOUNDARY][I.BOUNDARY] = t._matrix[I.BOUNDARY][I.BOUNDARY], this._matrix[I.BOUNDARY][I.EXTERIOR] = t._matrix[I.BOUNDARY][I.EXTERIOR], this._matrix[I.EXTERIOR][I.INTERIOR] = t._matrix[I.EXTERIOR][I.INTERIOR], this._matrix[I.EXTERIOR][I.BOUNDARY] = t._matrix[I.EXTERIOR][I.BOUNDARY], this._matrix[I.EXTERIOR][I.EXTERIOR] = t._matrix[I.EXTERIOR][I.EXTERIOR];
          }
        }
      } }, { key: "matches", value: function() {
        if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
          var e = arguments[0], t = arguments[1];
          return t === H.SYM_DONTCARE || t === H.SYM_TRUE && (e >= 0 || e === H.TRUE) || t === H.SYM_FALSE && e === H.FALSE || t === H.SYM_P && e === H.P || t === H.SYM_L && e === H.L || t === H.SYM_A && e === H.A;
        }
        if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
          var n = arguments[0], i = arguments[1], u = new r(n);
          return u.matches(i);
        }
      } }, { key: "isTrue", value: function(e) {
        return e >= 0 || e === H.TRUE;
      } }]), r;
    }(), Nu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "size", value: function() {
        return this._size;
      } }, { key: "addAll", value: function(e) {
        return e === null || e.length === 0 ? null : (this.ensureCapacity(this._size + e.length), Je.arraycopy(e, 0, this._data, this._size, e.length), void (this._size += e.length));
      } }, { key: "ensureCapacity", value: function(e) {
        if (e <= this._data.length) return null;
        var t = Math.max(e, 2 * this._data.length);
        this._data = ht.copyOf(this._data, t);
      } }, { key: "toArray", value: function() {
        var e = new Array(this._size).fill(null);
        return Je.arraycopy(this._data, 0, e, 0, this._size), e;
      } }, { key: "add", value: function(e) {
        this.ensureCapacity(this._size + 1), this._data[this._size] = e, ++this._size;
      } }], [{ key: "constructor_", value: function() {
        if (this._data = null, this._size = 0, arguments.length === 0) r.constructor_.call(this, 10);
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._data = new Array(e).fill(null);
        }
      } }]), r;
    }(), Iu = function() {
      function r() {
        s(this, r);
      }
      return h(r, [{ key: "getChainStartIndices", value: function(e) {
        var t = 0, n = new Nu(Math.trunc(e.length / 2));
        n.add(t);
        do {
          var i = this.findChainEnd(e, t);
          n.add(i), t = i;
        } while (t < e.length - 1);
        return n.toArray();
      } }, { key: "findChainEnd", value: function(e, t) {
        for (var n = He.quadrant(e[t], e[t + 1]), i = t + 1; i < e.length && He.quadrant(e[i - 1], e[i]) === n; )
          i++;
        return i - 1;
      } }, { key: "OLDgetChainStartIndices", value: function(e) {
        var t = 0, n = new ne();
        n.add(t);
        do {
          var i = this.findChainEnd(e, t);
          n.add(i), t = i;
        } while (t < e.length - 1);
        return r.toIntArray(n);
      } }], [{ key: "toIntArray", value: function(e) {
        for (var t = new Array(e.size()).fill(null), n = 0; n < t.length; n++) t[n] = e.get(n).intValue();
        return t;
      } }]), r;
    }(), wu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
        return this.pts;
      } }, { key: "getMaxX", value: function(e) {
        var t = this.pts[this.startIndex[e]].x, n = this.pts[this.startIndex[e + 1]].x;
        return t > n ? t : n;
      } }, { key: "getMinX", value: function(e) {
        var t = this.pts[this.startIndex[e]].x, n = this.pts[this.startIndex[e + 1]].x;
        return t < n ? t : n;
      } }, { key: "computeIntersectsForChain", value: function() {
        if (arguments.length === 4) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
          this.computeIntersectsForChain(this.startIndex[e], this.startIndex[e + 1], t, t.startIndex[n], t.startIndex[n + 1], i);
        } else if (arguments.length === 6) {
          var u = arguments[0], c = arguments[1], f = arguments[2], d = arguments[3], p = arguments[4], S = arguments[5];
          if (c - u == 1 && p - d == 1) return S.addIntersections(this.e, u, f.e, d), null;
          if (!this.overlaps(u, c, f, d, p)) return null;
          var L = Math.trunc((u + c) / 2), P = Math.trunc((d + p) / 2);
          u < L && (d < P && this.computeIntersectsForChain(u, L, f, d, P, S), P < p && this.computeIntersectsForChain(u, L, f, P, p, S)), L < c && (d < P && this.computeIntersectsForChain(L, c, f, d, P, S), P < p && this.computeIntersectsForChain(L, c, f, P, p, S));
        }
      } }, { key: "overlaps", value: function(e, t, n, i, u) {
        return ke.intersects(this.pts[e], this.pts[t], n.pts[i], n.pts[u]);
      } }, { key: "getStartIndexes", value: function() {
        return this.startIndex;
      } }, { key: "computeIntersects", value: function(e, t) {
        for (var n = 0; n < this.startIndex.length - 1; n++) for (var i = 0; i < e.startIndex.length - 1; i++) this.computeIntersectsForChain(n, e, i, t);
      } }], [{ key: "constructor_", value: function() {
        this.e = null, this.pts = null, this.startIndex = null;
        var e = arguments[0];
        this.e = e, this.pts = e.getCoordinates();
        var t = new Iu();
        this.startIndex = t.getChainStartIndices(this.pts);
      } }]), r;
    }(), jr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getDepth", value: function(e, t) {
        return this._depth[e][t];
      } }, { key: "setDepth", value: function(e, t, n) {
        this._depth[e][t] = n;
      } }, { key: "isNull", value: function() {
        if (arguments.length === 0) {
          for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) if (this._depth[e][t] !== r.NULL_VALUE) return !1;
          return !0;
        }
        if (arguments.length === 1) {
          var n = arguments[0];
          return this._depth[n][1] === r.NULL_VALUE;
        }
        if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          return this._depth[i][u] === r.NULL_VALUE;
        }
      } }, { key: "normalize", value: function() {
        for (var e = 0; e < 2; e++) if (!this.isNull(e)) {
          var t = this._depth[e][1];
          this._depth[e][2] < t && (t = this._depth[e][2]), t < 0 && (t = 0);
          for (var n = 1; n < 3; n++) {
            var i = 0;
            this._depth[e][n] > t && (i = 1), this._depth[e][n] = i;
          }
        }
      } }, { key: "getDelta", value: function(e) {
        return this._depth[e][U.RIGHT] - this._depth[e][U.LEFT];
      } }, { key: "getLocation", value: function(e, t) {
        return this._depth[e][t] <= 0 ? I.EXTERIOR : I.INTERIOR;
      } }, { key: "toString", value: function() {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
      } }, { key: "add", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < 2; t++) for (var n = 1; n < 3; n++) {
          var i = e.getLocation(t, n);
          i !== I.EXTERIOR && i !== I.INTERIOR || (this.isNull(t, n) ? this._depth[t][n] = r.depthAtLocation(i) : this._depth[t][n] += r.depthAtLocation(i));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], c = arguments[1], f = arguments[2];
          f === I.INTERIOR && this._depth[u][c]++;
        }
      } }], [{ key: "constructor_", value: function() {
        this._depth = Array(2).fill().map(function() {
          return Array(3);
        });
        for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) this._depth[e][t] = r.NULL_VALUE;
      } }, { key: "depthAtLocation", value: function(e) {
        return e === I.EXTERIOR ? 0 : e === I.INTERIOR ? 1 : r.NULL_VALUE;
      } }]), r;
    }();
    jr.NULL_VALUE = -1;
    var Qr = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "getDepth", value: function() {
        return this._depth;
      } }, { key: "getCollapsedEdge", value: function() {
        var n = new Array(2).fill(null);
        return n[0] = this.pts[0], n[1] = this.pts[1], new t(n, ft.toLineLabel(this._label));
      } }, { key: "isIsolated", value: function() {
        return this._isIsolated;
      } }, { key: "getCoordinates", value: function() {
        return this.pts;
      } }, { key: "setIsolated", value: function(n) {
        this._isIsolated = n;
      } }, { key: "setName", value: function(n) {
        this._name = n;
      } }, { key: "equals", value: function(n) {
        if (!(n instanceof t)) return !1;
        var i = n;
        if (this.pts.length !== i.pts.length) return !1;
        for (var u = !0, c = !0, f = this.pts.length, d = 0; d < this.pts.length; d++) if (this.pts[d].equals2D(i.pts[d]) || (u = !1), this.pts[d].equals2D(i.pts[--f]) || (c = !1), !u && !c) return !1;
        return !0;
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 0) return this.pts.length > 0 ? this.pts[0] : null;
        if (arguments.length === 1) {
          var n = arguments[0];
          return this.pts[n];
        }
      } }, { key: "print", value: function(n) {
        n.print("edge " + this._name + ": "), n.print("LINESTRING (");
        for (var i = 0; i < this.pts.length; i++) i > 0 && n.print(","), n.print(this.pts[i].x + " " + this.pts[i].y);
        n.print(")  " + this._label + " " + this._depthDelta);
      } }, { key: "computeIM", value: function(n) {
        t.updateIM(this._label, n);
      } }, { key: "isCollapsed", value: function() {
        return !!this._label.isArea() && this.pts.length === 3 && !!this.pts[0].equals(this.pts[2]);
      } }, { key: "isClosed", value: function() {
        return this.pts[0].equals(this.pts[this.pts.length - 1]);
      } }, { key: "getMaximumSegmentIndex", value: function() {
        return this.pts.length - 1;
      } }, { key: "getDepthDelta", value: function() {
        return this._depthDelta;
      } }, { key: "getNumPoints", value: function() {
        return this.pts.length;
      } }, { key: "printReverse", value: function(n) {
        n.print("edge " + this._name + ": ");
        for (var i = this.pts.length - 1; i >= 0; i--) n.print(this.pts[i] + " ");
        n.println("");
      } }, { key: "getMonotoneChainEdge", value: function() {
        return this._mce === null && (this._mce = new wu(this)), this._mce;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          this._env = new ke();
          for (var n = 0; n < this.pts.length; n++) this._env.expandToInclude(this.pts[n]);
        }
        return this._env;
      } }, { key: "addIntersection", value: function(n, i, u, c) {
        var f = new T(n.getIntersection(c)), d = i, p = n.getEdgeDistance(u, c), S = d + 1;
        if (S < this.pts.length) {
          var L = this.pts[S];
          f.equals2D(L) && (d = S, p = 0);
        }
        this.eiList.add(f, d, p);
      } }, { key: "toString", value: function() {
        var n = new ui();
        n.append("edge " + this._name + ": "), n.append("LINESTRING (");
        for (var i = 0; i < this.pts.length; i++) i > 0 && n.append(","), n.append(this.pts[i].x + " " + this.pts[i].y);
        return n.append(")  " + this._label + " " + this._depthDelta), n.toString();
      } }, { key: "isPointwiseEqual", value: function(n) {
        if (this.pts.length !== n.pts.length) return !1;
        for (var i = 0; i < this.pts.length; i++) if (!this.pts[i].equals2D(n.pts[i])) return !1;
        return !0;
      } }, { key: "setDepthDelta", value: function(n) {
        this._depthDelta = n;
      } }, { key: "getEdgeIntersectionList", value: function() {
        return this.eiList;
      } }, { key: "addIntersections", value: function(n, i, u) {
        for (var c = 0; c < n.getIntersectionNum(); c++) this.addIntersection(n, i, u, c);
      } }], [{ key: "constructor_", value: function() {
        if (this.pts = null, this._env = null, this.eiList = new Eu(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new jr(), this._depthDelta = 0, arguments.length === 1) {
          var n = arguments[0];
          t.constructor_.call(this, n, null);
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          this.pts = i, this._label = u;
        }
      } }, { key: "updateIM", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof xu && arguments[0] instanceof ft)) return w(v(t), "updateIM", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        i.setAtLeastIfValid(n.getLocation(0, U.ON), n.getLocation(1, U.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, U.LEFT), n.getLocation(1, U.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, U.RIGHT), n.getLocation(1, U.RIGHT), 2));
      } }]), t;
    }(Cr), Kr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setWorkingPrecisionModel", value: function(e) {
        this._workingPrecisionModel = e;
      } }, { key: "insertUniqueEdge", value: function(e) {
        var t = this._edgeList.findEqualEdge(e);
        if (t !== null) {
          var n = t.getLabel(), i = e.getLabel();
          t.isPointwiseEqual(e) || (i = new ft(e.getLabel())).flip(), n.merge(i);
          var u = r.depthDelta(i), c = t.getDepthDelta() + u;
          t.setDepthDelta(c);
        } else this._edgeList.add(e), e.setDepthDelta(r.depthDelta(e.getLabel()));
      } }, { key: "buildSubgraphs", value: function(e, t) {
        for (var n = new ne(), i = e.iterator(); i.hasNext(); ) {
          var u = i.next(), c = u.getRightmostCoordinate(), f = new Xr(n).getDepth(c);
          u.computeDepth(f), u.findResultEdges(), n.add(u), t.add(u.getDirectedEdges(), u.getNodes());
        }
      } }, { key: "createSubgraphs", value: function(e) {
        for (var t = new ne(), n = e.getNodes().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (!i.isVisited()) {
            var u = new Ai();
            u.create(i), t.add(u);
          }
        }
        return _n.sort(t, _n.reverseOrder()), t;
      } }, { key: "createEmptyResultGeometry", value: function() {
        return this._geomFact.createPolygon();
      } }, { key: "getNoder", value: function(e) {
        if (this._workingNoder !== null) return this._workingNoder;
        var t = new Zi(), n = new rn();
        return n.setPrecisionModel(e), t.setSegmentIntersector(new _u(n)), t;
      } }, { key: "buffer", value: function(e, t) {
        var n = this._workingPrecisionModel;
        n === null && (n = e.getPrecisionModel()), this._geomFact = e.getFactory();
        var i = new lu(n, this._bufParams), u = new cu(e, t, i).getCurves();
        if (u.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(u, n), this._graph = new Dr(new yu()), this._graph.addEdges(this._edgeList.getEdges());
        var c = this.createSubgraphs(this._graph), f = new Qa(this._geomFact);
        this.buildSubgraphs(c, f);
        var d = f.getPolygons();
        return d.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(d);
      } }, { key: "computeNodedEdges", value: function(e, t) {
        var n = this.getNoder(t);
        n.computeNodes(e);
        for (var i = n.getNodedSubstrings().iterator(); i.hasNext(); ) {
          var u = i.next(), c = u.getCoordinates();
          if (c.length !== 2 || !c[0].equals2D(c[1])) {
            var f = u.getData(), d = new Qr(u.getCoordinates(), new ft(f));
            this.insertUniqueEdge(d);
          }
        }
      } }, { key: "setNoder", value: function(e) {
        this._workingNoder = e;
      } }], [{ key: "constructor_", value: function() {
        this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new pu();
        var e = arguments[0];
        this._bufParams = e;
      } }, { key: "depthDelta", value: function(e) {
        var t = e.getLocation(0, U.LEFT), n = e.getLocation(0, U.RIGHT);
        return t === I.INTERIOR && n === I.EXTERIOR ? 1 : t === I.EXTERIOR && n === I.INTERIOR ? -1 : 0;
      } }, { key: "convertSegStrings", value: function(e) {
        for (var t = new yn(), n = new ne(); e.hasNext(); ) {
          var i = e.next(), u = t.createLineString(i.getCoordinates());
          n.add(u);
        }
        return t.buildGeometry(n);
      } }]), r;
    }(), Su = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "rescale", value: function() {
        if (ue(arguments[0], oe)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.rescale(n.getCoordinates());
        }
        else if (arguments[0] instanceof Array) {
          for (var i = arguments[0], u = 0; u < i.length; u++) i[u].x = i[u].x / this._scaleFactor + this._offsetX, i[u].y = i[u].y / this._scaleFactor + this._offsetY;
          i.length === 2 && i[0].equals2D(i[1]) && Je.out.println(i);
        }
      } }, { key: "scale", value: function() {
        if (ue(arguments[0], oe)) {
          for (var e = arguments[0], t = new ne(e.size()), n = e.iterator(); n.hasNext(); ) {
            var i = n.next();
            t.add(new sn(this.scale(i.getCoordinates()), i.getData()));
          }
          return t;
        }
        if (arguments[0] instanceof Array) {
          for (var u = arguments[0], c = new Array(u.length).fill(null), f = 0; f < u.length; f++) c[f] = new T(Math.round((u[f].x - this._offsetX) * this._scaleFactor), Math.round((u[f].y - this._offsetY) * this._scaleFactor), u[f].getZ());
          var d = Ge.removeRepeatedPoints(c);
          return d;
        }
      } }, { key: "isIntegerPrecision", value: function() {
        return this._scaleFactor === 1;
      } }, { key: "getNodedSubstrings", value: function() {
        var e = this._noder.getNodedSubstrings();
        return this._isScaled && this.rescale(e), e;
      } }, { key: "computeNodes", value: function(e) {
        var t = e;
        this._isScaled && (t = this.scale(e)), this._noder.computeNodes(t);
      } }, { key: "interfaces_", get: function() {
        return [Hi];
      } }], [{ key: "constructor_", value: function() {
        if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          r.constructor_.call(this, e, t, 0, 0);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1];
          this._noder = n, this._scaleFactor = i, this._isScaled = !this.isIntegerPrecision();
        }
      } }]), r;
    }(), Jr = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "checkEndPtVertexIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next(), n = t.getCoordinates();
          this.checkEndPtVertexIntersections(n[0], this._segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this._segStrings);
        }
        else if (arguments.length === 2) {
          for (var i = arguments[0], u = arguments[1], c = u.iterator(); c.hasNext(); ) for (var f = c.next(), d = f.getCoordinates(), p = 1; p < d.length - 1; p++) if (d[p].equals(i)) throw new Ie("found endpt/interior pt intersection at index " + p + " :pt " + i);
        }
      } }, { key: "checkInteriorIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) for (var t = e.next(), n = this._segStrings.iterator(); n.hasNext(); ) {
          var i = n.next();
          this.checkInteriorIntersections(t, i);
        }
        else if (arguments.length === 2) for (var u = arguments[0], c = arguments[1], f = u.getCoordinates(), d = c.getCoordinates(), p = 0; p < f.length - 1; p++) for (var S = 0; S < d.length - 1; S++) this.checkInteriorIntersections(u, p, c, S);
        else if (arguments.length === 4) {
          var L = arguments[0], P = arguments[1], V = arguments[2], W = arguments[3];
          if (L === V && P === W) return null;
          var $ = L.getCoordinates()[P], ie = L.getCoordinates()[P + 1], le = V.getCoordinates()[W], pe = V.getCoordinates()[W + 1];
          if (this._li.computeIntersection($, ie, le, pe), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, $, ie) || this.hasInteriorIntersection(this._li, le, pe))) throw new Ie("found non-noded intersection at " + $ + "-" + ie + " and " + le + "-" + pe);
        }
      } }, { key: "checkValid", value: function() {
        this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
      } }, { key: "checkCollapses", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next();
          this.checkCollapses(t);
        }
        else if (arguments.length === 1) for (var n = arguments[0], i = n.getCoordinates(), u = 0; u < i.length - 2; u++) this.checkCollapse(i[u], i[u + 1], i[u + 2]);
      } }, { key: "hasInteriorIntersection", value: function(e, t, n) {
        for (var i = 0; i < e.getIntersectionNum(); i++) {
          var u = e.getIntersection(i);
          if (!u.equals(t) && !u.equals(n)) return !0;
        }
        return !1;
      } }, { key: "checkCollapse", value: function(e, t, n) {
        if (e.equals(n)) throw new Ie("found non-noded collapse at " + r.fact.createLineString([e, t, n]));
      } }], [{ key: "constructor_", value: function() {
        this._li = new rn(), this._segStrings = null;
        var e = arguments[0];
        this._segStrings = e;
      } }]), r;
    }();
    Jr.fact = new yn();
    var Qi = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "intersectsScaled", value: function(e, t) {
        var n = Math.min(e.x, t.x), i = Math.max(e.x, t.x), u = Math.min(e.y, t.y), c = Math.max(e.y, t.y), f = this._maxx < n || this._minx > i || this._maxy < u || this._miny > c;
        if (f) return !1;
        var d = this.intersectsToleranceSquare(e, t);
        return he.isTrue(!(f && d), "Found bad envelope test"), d;
      } }, { key: "initCorners", value: function(e) {
        var t = 0.5;
        this._minx = e.x - t, this._maxx = e.x + t, this._miny = e.y - t, this._maxy = e.y + t, this._corner[0] = new T(this._maxx, this._maxy), this._corner[1] = new T(this._minx, this._maxy), this._corner[2] = new T(this._minx, this._miny), this._corner[3] = new T(this._maxx, this._miny);
      } }, { key: "intersects", value: function(e, t) {
        return this._scaleFactor === 1 ? this.intersectsScaled(e, t) : (this.copyScaled(e, this._p0Scaled), this.copyScaled(t, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
      } }, { key: "scale", value: function(e) {
        return Math.round(e * this._scaleFactor);
      } }, { key: "getCoordinate", value: function() {
        return this._originalPt;
      } }, { key: "copyScaled", value: function(e, t) {
        t.x = this.scale(e.x), t.y = this.scale(e.y);
      } }, { key: "getSafeEnvelope", value: function() {
        if (this._safeEnv === null) {
          var e = r.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
          this._safeEnv = new ke(this._originalPt.x - e, this._originalPt.x + e, this._originalPt.y - e, this._originalPt.y + e);
        }
        return this._safeEnv;
      } }, { key: "intersectsPixelClosure", value: function(e, t) {
        return this._li.computeIntersection(e, t, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(e, t, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(e, t, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(e, t, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
      } }, { key: "intersectsToleranceSquare", value: function(e, t) {
        var n = !1, i = !1;
        return this._li.computeIntersection(e, t, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(e, t, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(e, t, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(e, t, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!n || !i) || !!e.equals(this._pt) || !!t.equals(this._pt))));
      } }, { key: "addSnappedNode", value: function(e, t) {
        var n = e.getCoordinate(t), i = e.getCoordinate(t + 1);
        return !!this.intersects(n, i) && (e.addIntersection(this.getCoordinate(), t), !0);
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        if (this._originalPt = e, this._pt = e, this._scaleFactor = t, this._li = n, t <= 0) throw new R("Scale factor must be non-zero");
        t !== 1 && (this._pt = new T(this.scale(e.x), this.scale(e.y)), this._p0Scaled = new T(), this._p1Scaled = new T()), this.initCorners(this._pt);
      } }]), r;
    }();
    Qi.SAFE_ENV_EXPANSION_FACTOR = 0.75;
    var Lu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "select", value: function() {
        if (arguments.length !== 1) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            e.getLineSegment(t, this.selectedSegment), this.select(this.selectedSegment);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this.selectedSegment = new it();
      } }]), r;
    }(), $r = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "snap", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.snap(e, null, -1);
        }
        if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], i = arguments[2], u = t.getSafeEnvelope(), c = new es(t, n, i);
          return this._index.query(u, new (function() {
            function f() {
              s(this, f);
            }
            return h(f, [{ key: "interfaces_", get: function() {
              return [Gr];
            } }, { key: "visitItem", value: function(d) {
              d.select(u, c);
            } }]), f;
          }())()), c.isNodeAdded();
        }
      } }], [{ key: "constructor_", value: function() {
        this._index = null;
        var e = arguments[0];
        this._index = e;
      } }]), r;
    }(), es = function(r) {
      g(t, r);
      var e = N(t);
      function t() {
        var n;
        return s(this, t), n = e.call(this), t.constructor_.apply(y(n), arguments), n;
      }
      return h(t, [{ key: "isNodeAdded", value: function() {
        return this._isNodeAdded;
      } }, { key: "select", value: function() {
        if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof zr)) return w(v(t.prototype), "select", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = n.getContext();
        if (this._parentEdge === u && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
        this._isNodeAdded |= this._hotPixel.addSnappedNode(u, i);
      } }], [{ key: "constructor_", value: function() {
        this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
        var n = arguments[0], i = arguments[1], u = arguments[2];
        this._hotPixel = n, this._parentEdge = i, this._hotPixelVertexIndex = u;
      } }]), t;
    }(Lu);
    $r.HotPixelSnapAction = es;
    var bu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "processIntersections", value: function(e, t, n, i) {
        if (e === n && t === i) return null;
        var u = e.getCoordinates()[t], c = e.getCoordinates()[t + 1], f = n.getCoordinates()[i], d = n.getCoordinates()[i + 1];
        if (this._li.computeIntersection(u, c, f, d), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var p = 0; p < this._li.getIntersectionNum(); p++) this._interiorIntersections.add(this._li.getIntersection(p));
          e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1);
        }
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "getInteriorIntersections", value: function() {
        return this._interiorIntersections;
      } }, { key: "interfaces_", get: function() {
        return [Zr];
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._interiorIntersections = null;
        var e = arguments[0];
        this._li = e, this._interiorIntersections = new ne();
      } }]), r;
    }(), Tu = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "checkCorrectness", value: function(e) {
        var t = sn.getNodedSubstrings(e), n = new Jr(t);
        try {
          n.checkValid();
        } catch (i) {
          if (!(i instanceof F)) throw i;
          i.printStackTrace();
        }
      } }, { key: "getNodedSubstrings", value: function() {
        return sn.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "snapRound", value: function(e, t) {
        var n = this.findInteriorIntersections(e, t);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(e);
      } }, { key: "findInteriorIntersections", value: function(e, t) {
        var n = new bu(t);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(e), n.getInteriorIntersections();
      } }, { key: "computeVertexSnaps", value: function() {
        if (ue(arguments[0], oe)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.computeVertexSnaps(n);
        }
        else if (arguments[0] instanceof sn) for (var i = arguments[0], u = i.getCoordinates(), c = 0; c < u.length; c++) {
          var f = new Qi(u[c], this._scaleFactor, this._li), d = this._pointSnapper.snap(f, i, c);
          d && i.addIntersection(u[c], c);
        }
      } }, { key: "computeNodes", value: function(e) {
        this._nodedSegStrings = e, this._noder = new Zi(), this._pointSnapper = new $r(this._noder.getIndex()), this.snapRound(e, this._li);
      } }, { key: "computeIntersectionSnaps", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next(), i = new Qi(n, this._scaleFactor, this._li);
          this._pointSnapper.snap(i);
        }
      } }, { key: "interfaces_", get: function() {
        return [Hi];
      } }], [{ key: "constructor_", value: function() {
        this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
        var e = arguments[0];
        this._pm = e, this._li = new rn(), this._li.setPrecisionModel(e), this._scaleFactor = e.getScale();
      } }]), r;
    }(), xn = function() {
      function r() {
        s(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "bufferFixedPrecision", value: function(e) {
        var t = new Su(new Tu(new _t(1)), e.getScale()), n = new Kr(this._bufParams);
        n.setWorkingPrecisionModel(e), n.setNoder(t), this._resultGeometry = n.buffer(this._argGeom, this._distance);
      } }, { key: "bufferReducedPrecision", value: function() {
        if (arguments.length === 0) {
          for (var e = r.MAX_PRECISION_DIGITS; e >= 0; e--) {
            try {
              this.bufferReducedPrecision(e);
            } catch (u) {
              if (!(u instanceof tt)) throw u;
              this._saveException = u;
            }
            if (this._resultGeometry !== null) return null;
          }
          throw this._saveException;
        }
        if (arguments.length === 1) {
          var t = arguments[0], n = r.precisionScaleFactor(this._argGeom, this._distance, t), i = new _t(n);
          this.bufferFixedPrecision(i);
        }
      } }, { key: "computeGeometry", value: function() {
        if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
        var e = this._argGeom.getFactory().getPrecisionModel();
        e.getType() === _t.FIXED ? this.bufferFixedPrecision(e) : this.bufferReducedPrecision();
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._bufParams.setQuadrantSegments(e);
      } }, { key: "bufferOriginalPrecision", value: function() {
        try {
          var e = new Kr(this._bufParams);
          this._resultGeometry = e.buffer(this._argGeom, this._distance);
        } catch (t) {
          if (!(t instanceof Ie)) throw t;
          this._saveException = t;
        }
      } }, { key: "getResultGeometry", value: function(e) {
        return this._distance = e, this.computeGeometry(), this._resultGeometry;
      } }, { key: "setEndCapStyle", value: function(e) {
        this._bufParams.setEndCapStyle(e);
      } }], [{ key: "constructor_", value: function() {
        if (this._argGeom = null, this._distance = null, this._bufParams = new M(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
          var e = arguments[0];
          this._argGeom = e;
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this._argGeom = t, this._bufParams = n;
        }
      } }, { key: "bufferOp", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1], n = new r(e), i = n.getResultGeometry(t);
          return i;
        }
        if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof J && typeof arguments[1] == "number") {
            var u = arguments[0], c = arguments[1], f = arguments[2], d = new r(u);
            d.setQuadrantSegments(f);
            var p = d.getResultGeometry(c);
            return p;
          }
          if (arguments[2] instanceof M && arguments[0] instanceof J && typeof arguments[1] == "number") {
            var S = arguments[0], L = arguments[1], P = arguments[2], V = new r(S, P), W = V.getResultGeometry(L);
            return W;
          }
        } else if (arguments.length === 4) {
          var $ = arguments[0], ie = arguments[1], le = arguments[2], pe = arguments[3], Oe = new r($);
          Oe.setQuadrantSegments(le), Oe.setEndCapStyle(pe);
          var Ye = Oe.getResultGeometry(ie);
          return Ye;
        }
      } }, { key: "precisionScaleFactor", value: function(e, t, n) {
        var i = e.getEnvelopeInternal(), u = en.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())) + 2 * (t > 0 ? t : 0), c = n - Math.trunc(Math.log(u) / Math.log(10) + 1);
        return Math.pow(10, c);
      } }]), r;
    }();
    xn.CAP_ROUND = M.CAP_ROUND, xn.CAP_BUTT = M.CAP_FLAT, xn.CAP_FLAT = M.CAP_FLAT, xn.CAP_SQUARE = M.CAP_SQUARE, xn.MAX_PRECISION_DIGITS = 12;
    var Cu = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], ts = function() {
      function r(e) {
        s(this, r), this.geometryFactory = e || new yn();
      }
      return h(r, [{ key: "read", value: function(e) {
        var t, n = (t = typeof e == "string" ? JSON.parse(e) : e).type;
        if (!dt[n]) throw new Error("Unknown GeoJSON type: " + t.type);
        return Cu.indexOf(n) !== -1 ? dt[n].call(this, t.coordinates) : n === "GeometryCollection" ? dt[n].call(this, t.geometries) : dt[n].call(this, t);
      } }, { key: "write", value: function(e) {
        var t = e.getGeometryType();
        if (!Lt[t]) throw new Error("Geometry is not supported");
        return Lt[t].call(this, e);
      } }]), r;
    }(), dt = { Feature: function(r) {
      var e = {};
      for (var t in r) e[t] = r[t];
      if (r.geometry) {
        var n = r.geometry.type;
        if (!dt[n]) throw new Error("Unknown GeoJSON type: " + r.type);
        e.geometry = this.read(r.geometry);
      }
      return r.bbox && (e.bbox = dt.bbox.call(this, r.bbox)), e;
    }, FeatureCollection: function(r) {
      var e = {};
      if (r.features) {
        e.features = [];
        for (var t = 0; t < r.features.length; ++t) e.features.push(this.read(r.features[t]));
      }
      return r.bbox && (e.bbox = this.parse.bbox.call(this, r.bbox)), e;
    }, coordinates: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) {
        var n = r[t];
        e.push(_(T, A(n)));
      }
      return e;
    }, bbox: function(r) {
      return this.geometryFactory.createLinearRing([new T(r[0], r[1]), new T(r[2], r[1]), new T(r[2], r[3]), new T(r[0], r[3]), new T(r[0], r[1])]);
    }, Point: function(r) {
      var e = _(T, A(r));
      return this.geometryFactory.createPoint(e);
    }, MultiPoint: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) e.push(dt.Point.call(this, r[t]));
      return this.geometryFactory.createMultiPoint(e);
    }, LineString: function(r) {
      var e = dt.coordinates.call(this, r);
      return this.geometryFactory.createLineString(e);
    }, MultiLineString: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) e.push(dt.LineString.call(this, r[t]));
      return this.geometryFactory.createMultiLineString(e);
    }, Polygon: function(r) {
      for (var e = dt.coordinates.call(this, r[0]), t = this.geometryFactory.createLinearRing(e), n = [], i = 1; i < r.length; ++i) {
        var u = r[i], c = dt.coordinates.call(this, u), f = this.geometryFactory.createLinearRing(c);
        n.push(f);
      }
      return this.geometryFactory.createPolygon(t, n);
    }, MultiPolygon: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) {
        var n = r[t];
        e.push(dt.Polygon.call(this, n));
      }
      return this.geometryFactory.createMultiPolygon(e);
    }, GeometryCollection: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) {
        var n = r[t];
        e.push(this.read(n));
      }
      return this.geometryFactory.createGeometryCollection(e);
    } }, Lt = { coordinate: function(r) {
      var e = [r.x, r.y];
      return r.z && e.push(r.z), r.m && e.push(r.m), e;
    }, Point: function(r) {
      return { type: "Point", coordinates: Lt.coordinate.call(this, r.getCoordinate()) };
    }, MultiPoint: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = Lt.Point.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPoint", coordinates: e };
    }, LineString: function(r) {
      for (var e = [], t = r.getCoordinates(), n = 0; n < t.length; ++n) {
        var i = t[n];
        e.push(Lt.coordinate.call(this, i));
      }
      return { type: "LineString", coordinates: e };
    }, MultiLineString: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = Lt.LineString.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiLineString", coordinates: e };
    }, Polygon: function(r) {
      var e = [], t = Lt.LineString.call(this, r._shell);
      e.push(t.coordinates);
      for (var n = 0; n < r._holes.length; ++n) {
        var i = r._holes[n], u = Lt.LineString.call(this, i);
        e.push(u.coordinates);
      }
      return { type: "Polygon", coordinates: e };
    }, MultiPolygon: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = Lt.Polygon.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPolygon", coordinates: e };
    }, GeometryCollection: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = n.getGeometryType();
        e.push(Lt[i].call(this, n));
      }
      return { type: "GeometryCollection", geometries: e };
    } };
    return { BufferOp: xn, GeoJSONReader: function() {
      function r(e) {
        s(this, r), this.parser = new ts(e || new yn());
      }
      return h(r, [{ key: "read", value: function(e) {
        return this.parser.read(e);
      } }]), r;
    }(), GeoJSONWriter: function() {
      function r() {
        s(this, r), this.parser = new ts(this.geometryFactory);
      }
      return h(r, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }]), r;
    }() };
  });
})(ya);
var Sl = ya.exports;
const Ll = /* @__PURE__ */ wl(Sl);
function Qt() {
  return new Li();
}
function Li() {
  this.reset();
}
Li.prototype = {
  constructor: Li,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(o) {
    zs(di, o, this.t), zs(this, di.s, this.s), this.s ? this.t += di.t : this.s = di.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var di = new Li();
function zs(o, a, s) {
  var l = o.s = a + s, h = l - a, g = l - h;
  o.t = a - g + (s - h);
}
var Ne = 1e-6, ve = Math.PI, bt = ve / 2, Bs = ve / 4, Tt = ve * 2, zt = 180 / ve, vt = ve / 180, Be = Math.abs, bl = Math.atan, bn = Math.atan2, Me = Math.cos, Pe = Math.sin, Rn = Math.sqrt;
function pa(o) {
  return o > 1 ? 0 : o < -1 ? ve : Math.acos(o);
}
function hn(o) {
  return o > 1 ? bt : o < -1 ? -bt : Math.asin(o);
}
function Hn() {
}
function bi(o, a) {
  o && Us.hasOwnProperty(o.type) && Us[o.type](o, a);
}
var Ys = {
  Feature: function(o, a) {
    bi(o.geometry, a);
  },
  FeatureCollection: function(o, a) {
    for (var s = o.features, l = -1, h = s.length; ++l < h; ) bi(s[l].geometry, a);
  }
}, Us = {
  Sphere: function(o, a) {
    a.sphere();
  },
  Point: function(o, a) {
    o = o.coordinates, a.point(o[0], o[1], o[2]);
  },
  MultiPoint: function(o, a) {
    for (var s = o.coordinates, l = -1, h = s.length; ++l < h; ) o = s[l], a.point(o[0], o[1], o[2]);
  },
  LineString: function(o, a) {
    dr(o.coordinates, a, 0);
  },
  MultiLineString: function(o, a) {
    for (var s = o.coordinates, l = -1, h = s.length; ++l < h; ) dr(s[l], a, 0);
  },
  Polygon: function(o, a) {
    Xs(o.coordinates, a);
  },
  MultiPolygon: function(o, a) {
    for (var s = o.coordinates, l = -1, h = s.length; ++l < h; ) Xs(s[l], a);
  },
  GeometryCollection: function(o, a) {
    for (var s = o.geometries, l = -1, h = s.length; ++l < h; ) bi(s[l], a);
  }
};
function dr(o, a, s) {
  var l = -1, h = o.length - s, g;
  for (a.lineStart(); ++l < h; ) g = o[l], a.point(g[0], g[1], g[2]);
  a.lineEnd();
}
function Xs(o, a) {
  var s = -1, l = o.length;
  for (a.polygonStart(); ++s < l; ) dr(o[s], a, 1);
  a.polygonEnd();
}
function Tl(o, a) {
  o && Ys.hasOwnProperty(o.type) ? Ys[o.type](o, a) : bi(o, a);
}
Qt();
Qt();
function mr(o) {
  return [bn(o[1], o[0]), hn(o[2])];
}
function Tn(o) {
  var a = o[0], s = o[1], l = Me(s);
  return [l * Me(a), l * Pe(a), Pe(s)];
}
function mi(o, a) {
  return o[0] * a[0] + o[1] * a[1] + o[2] * a[2];
}
function Ti(o, a) {
  return [o[1] * a[2] - o[2] * a[1], o[2] * a[0] - o[0] * a[2], o[0] * a[1] - o[1] * a[0]];
}
function rr(o, a) {
  o[0] += a[0], o[1] += a[1], o[2] += a[2];
}
function vi(o, a) {
  return [o[0] * a, o[1] * a, o[2] * a];
}
function vr(o) {
  var a = Rn(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]);
  o[0] /= a, o[1] /= a, o[2] /= a;
}
Qt();
function _a(o, a) {
  function s(l, h) {
    return l = o(l, h), a(l[0], l[1]);
  }
  return o.invert && a.invert && (s.invert = function(l, h) {
    return l = a.invert(l, h), l && o.invert(l[0], l[1]);
  }), s;
}
function yr(o, a) {
  return [o > ve ? o - Tt : o < -ve ? o + Tt : o, a];
}
yr.invert = yr;
function Cl(o, a, s) {
  return (o %= Tt) ? a || s ? _a(Vs(o), Hs(a, s)) : Vs(o) : a || s ? Hs(a, s) : yr;
}
function Ws(o) {
  return function(a, s) {
    return a += o, [a > ve ? a - Tt : a < -ve ? a + Tt : a, s];
  };
}
function Vs(o) {
  var a = Ws(o);
  return a.invert = Ws(-o), a;
}
function Hs(o, a) {
  var s = Me(o), l = Pe(o), h = Me(a), g = Pe(a);
  function v(m, x) {
    var _ = Me(x), k = Me(m) * _, y = Pe(m) * _, E = Pe(x), N = E * s + k * l;
    return [
      bn(y * h - N * g, k * s - E * l),
      hn(N * h + y * g)
    ];
  }
  return v.invert = function(m, x) {
    var _ = Me(x), k = Me(m) * _, y = Pe(m) * _, E = Pe(x), N = E * h - y * g;
    return [
      bn(y * h + E * g, k * s + N * l),
      hn(N * s - k * l)
    ];
  }, v;
}
function Rl(o, a, s, l, h, g) {
  if (s) {
    var v = Me(a), m = Pe(a), x = l * s;
    h == null ? (h = a + l * Tt, g = a - x / 2) : (h = Zs(v, h), g = Zs(v, g), (l > 0 ? h < g : h > g) && (h += l * Tt));
    for (var _, k = h; l > 0 ? k > g : k < g; k -= x)
      _ = mr([v, -m * Me(k), -m * Pe(k)]), o.point(_[0], _[1]);
  }
}
function Zs(o, a) {
  a = Tn(a), a[0] -= o, vr(a);
  var s = pa(-a[1]);
  return ((-a[2] < 0 ? -s : s) + Tt - Ne) % Tt;
}
function ka() {
  var o = [], a;
  return {
    point: function(s, l) {
      a.push([s, l]);
    },
    lineStart: function() {
      o.push(a = []);
    },
    lineEnd: Hn,
    rejoin: function() {
      o.length > 1 && o.push(o.pop().concat(o.shift()));
    },
    result: function() {
      var s = o;
      return o = [], a = null, s;
    }
  };
}
function Ol(o, a, s, l, h, g) {
  var v = o[0], m = o[1], x = a[0], _ = a[1], k = 0, y = 1, E = x - v, N = _ - m, w;
  if (w = s - v, !(!E && w > 0)) {
    if (w /= E, E < 0) {
      if (w < k) return;
      w < y && (y = w);
    } else if (E > 0) {
      if (w > y) return;
      w > k && (k = w);
    }
    if (w = h - v, !(!E && w < 0)) {
      if (w /= E, E < 0) {
        if (w > y) return;
        w > k && (k = w);
      } else if (E > 0) {
        if (w < k) return;
        w < y && (y = w);
      }
      if (w = l - m, !(!N && w > 0)) {
        if (w /= N, N < 0) {
          if (w < k) return;
          w < y && (y = w);
        } else if (N > 0) {
          if (w > y) return;
          w > k && (k = w);
        }
        if (w = g - m, !(!N && w < 0)) {
          if (w /= N, N < 0) {
            if (w > y) return;
            w > k && (k = w);
          } else if (N > 0) {
            if (w < k) return;
            w < y && (y = w);
          }
          return k > 0 && (o[0] = v + k * E, o[1] = m + k * N), y < 1 && (a[0] = v + y * E, a[1] = m + y * N), !0;
        }
      }
    }
  }
}
function Ni(o, a) {
  return Be(o[0] - a[0]) < Ne && Be(o[1] - a[1]) < Ne;
}
function yi(o, a, s, l) {
  this.x = o, this.z = a, this.o = s, this.e = l, this.v = !1, this.n = this.p = null;
}
function Ea(o, a, s, l, h) {
  var g = [], v = [], m, x;
  if (o.forEach(function(w) {
    if (!((A = w.length - 1) <= 0)) {
      var A, b = w[0], C = w[A], O;
      if (Ni(b, C)) {
        for (h.lineStart(), m = 0; m < A; ++m) h.point((b = w[m])[0], b[1]);
        h.lineEnd();
        return;
      }
      g.push(O = new yi(b, w, null, !0)), v.push(O.o = new yi(b, null, O, !1)), g.push(O = new yi(C, w, null, !1)), v.push(O.o = new yi(C, null, O, !0));
    }
  }), !!g.length) {
    for (v.sort(a), js(g), js(v), m = 0, x = v.length; m < x; ++m)
      v[m].e = s = !s;
    for (var _ = g[0], k, y; ; ) {
      for (var E = _, N = !0; E.v; ) if ((E = E.n) === _) return;
      k = E.z, h.lineStart();
      do {
        if (E.v = E.o.v = !0, E.e) {
          if (N)
            for (m = 0, x = k.length; m < x; ++m) h.point((y = k[m])[0], y[1]);
          else
            l(E.x, E.n.x, 1, h);
          E = E.n;
        } else {
          if (N)
            for (k = E.p.z, m = k.length - 1; m >= 0; --m) h.point((y = k[m])[0], y[1]);
          else
            l(E.x, E.p.x, -1, h);
          E = E.p;
        }
        E = E.o, k = E.z, N = !N;
      } while (!E.v);
      h.lineEnd();
    }
  }
}
function js(o) {
  if (a = o.length) {
    for (var a, s = 0, l = o[0], h; ++s < a; )
      l.n = h = o[s], h.p = l, l = h;
    l.n = h = o[0], h.p = l;
  }
}
function xa(o, a) {
  return o < a ? -1 : o > a ? 1 : o >= a ? 0 : NaN;
}
function Ml(o) {
  return o.length === 1 && (o = Pl(o)), {
    left: function(a, s, l, h) {
      for (l == null && (l = 0), h == null && (h = a.length); l < h; ) {
        var g = l + h >>> 1;
        o(a[g], s) < 0 ? l = g + 1 : h = g;
      }
      return l;
    },
    right: function(a, s, l, h) {
      for (l == null && (l = 0), h == null && (h = a.length); l < h; ) {
        var g = l + h >>> 1;
        o(a[g], s) > 0 ? h = g : l = g + 1;
      }
      return l;
    }
  };
}
function Pl(o) {
  return function(a, s) {
    return xa(o(a), s);
  };
}
Ml(xa);
function Na(o) {
  for (var a = o.length, s, l = -1, h = 0, g, v; ++l < a; ) h += o[l].length;
  for (g = new Array(h); --a >= 0; )
    for (v = o[a], s = v.length; --s >= 0; )
      g[--h] = v[s];
  return g;
}
var Zn = 1e9, pi = -Zn;
function Al(o, a, s, l) {
  function h(_, k) {
    return o <= _ && _ <= s && a <= k && k <= l;
  }
  function g(_, k, y, E) {
    var N = 0, w = 0;
    if (_ == null || (N = v(_, y)) !== (w = v(k, y)) || x(_, k) < 0 ^ y > 0)
      do
        E.point(N === 0 || N === 3 ? o : s, N > 1 ? l : a);
      while ((N = (N + y + 4) % 4) !== w);
    else
      E.point(k[0], k[1]);
  }
  function v(_, k) {
    return Be(_[0] - o) < Ne ? k > 0 ? 0 : 3 : Be(_[0] - s) < Ne ? k > 0 ? 2 : 1 : Be(_[1] - a) < Ne ? k > 0 ? 1 : 0 : k > 0 ? 3 : 2;
  }
  function m(_, k) {
    return x(_.x, k.x);
  }
  function x(_, k) {
    var y = v(_, 1), E = v(k, 1);
    return y !== E ? y - E : y === 0 ? k[1] - _[1] : y === 1 ? _[0] - k[0] : y === 2 ? _[1] - k[1] : k[0] - _[0];
  }
  return function(_) {
    var k = _, y = ka(), E, N, w, A, b, C, O, M, F, R, Y, z = {
      point: X,
      lineStart: j,
      lineEnd: ce,
      polygonStart: Z,
      polygonEnd: ee
    };
    function X(K, se) {
      h(K, se) && k.point(K, se);
    }
    function q() {
      for (var K = 0, se = 0, me = N.length; se < me; ++se)
        for (var Re = N[se], Ee = 1, Q = Re.length, Ae = Re[0], Ie, qe, he = Ae[0], ot = Ae[1]; Ee < Q; ++Ee)
          Ie = he, qe = ot, Ae = Re[Ee], he = Ae[0], ot = Ae[1], qe <= l ? ot > l && (he - Ie) * (l - qe) > (ot - qe) * (o - Ie) && ++K : ot <= l && (he - Ie) * (l - qe) < (ot - qe) * (o - Ie) && --K;
      return K;
    }
    function Z() {
      k = y, E = [], N = [], Y = !0;
    }
    function ee() {
      var K = q(), se = Y && K, me = (E = Na(E)).length;
      (se || me) && (_.polygonStart(), se && (_.lineStart(), g(null, null, 1, _), _.lineEnd()), me && Ea(E, m, K, g, _), _.polygonEnd()), k = _, E = N = w = null;
    }
    function j() {
      z.point = G, N && N.push(w = []), R = !0, F = !1, O = M = NaN;
    }
    function ce() {
      E && (G(A, b), C && F && y.rejoin(), E.push(y.result())), z.point = X, F && k.lineEnd();
    }
    function G(K, se) {
      var me = h(K, se);
      if (N && w.push([K, se]), R)
        A = K, b = se, C = me, R = !1, me && (k.lineStart(), k.point(K, se));
      else if (me && F) k.point(K, se);
      else {
        var Re = [O = Math.max(pi, Math.min(Zn, O)), M = Math.max(pi, Math.min(Zn, M))], Ee = [K = Math.max(pi, Math.min(Zn, K)), se = Math.max(pi, Math.min(Zn, se))];
        Ol(Re, Ee, o, a, s, l) ? (F || (k.lineStart(), k.point(Re[0], Re[1])), k.point(Ee[0], Ee[1]), me || k.lineEnd(), Y = !1) : me && (k.lineStart(), k.point(K, se), Y = !1);
      }
      O = K, M = se, F = me;
    }
    return z;
  };
}
var sr = Qt();
function Dl(o, a) {
  var s = a[0], l = a[1], h = [Pe(s), -Me(s), 0], g = 0, v = 0;
  sr.reset();
  for (var m = 0, x = o.length; m < x; ++m)
    if (k = (_ = o[m]).length)
      for (var _, k, y = _[k - 1], E = y[0], N = y[1] / 2 + Bs, w = Pe(N), A = Me(N), b = 0; b < k; ++b, E = O, w = F, A = R, y = C) {
        var C = _[b], O = C[0], M = C[1] / 2 + Bs, F = Pe(M), R = Me(M), Y = O - E, z = Y >= 0 ? 1 : -1, X = z * Y, q = X > ve, Z = w * F;
        if (sr.add(bn(Z * z * Pe(X), A * R + Z * Me(X))), g += q ? Y + z * Tt : Y, q ^ E >= s ^ O >= s) {
          var ee = Ti(Tn(y), Tn(C));
          vr(ee);
          var j = Ti(h, ee);
          vr(j);
          var ce = (q ^ Y >= 0 ? -1 : 1) * hn(j[2]);
          (l > ce || l === ce && (ee[0] || ee[1])) && (v += q ^ Y >= 0 ? 1 : -1);
        }
      }
  return (g < -Ne || g < Ne && sr < -Ne) ^ v & 1;
}
Qt();
function Qs(o) {
  return o;
}
Qt();
Qt();
var Cn = 1 / 0, Ci = Cn, $n = -Cn, Ri = $n, Ks = {
  point: Fl,
  lineStart: Hn,
  lineEnd: Hn,
  polygonStart: Hn,
  polygonEnd: Hn,
  result: function() {
    var o = [[Cn, Ci], [$n, Ri]];
    return $n = Ri = -(Ci = Cn = 1 / 0), o;
  }
};
function Fl(o, a) {
  o < Cn && (Cn = o), o > $n && ($n = o), a < Ci && (Ci = a), a > Ri && (Ri = a);
}
Qt();
function Ia(o, a, s, l) {
  return function(h, g) {
    var v = a(g), m = h.invert(l[0], l[1]), x = ka(), _ = a(x), k = !1, y, E, N, w = {
      point: A,
      lineStart: C,
      lineEnd: O,
      polygonStart: function() {
        w.point = M, w.lineStart = F, w.lineEnd = R, E = [], y = [];
      },
      polygonEnd: function() {
        w.point = A, w.lineStart = C, w.lineEnd = O, E = Na(E);
        var Y = Dl(y, m);
        E.length ? (k || (g.polygonStart(), k = !0), Ea(E, ql, Y, s, g)) : Y && (k || (g.polygonStart(), k = !0), g.lineStart(), s(null, null, 1, g), g.lineEnd()), k && (g.polygonEnd(), k = !1), E = y = null;
      },
      sphere: function() {
        g.polygonStart(), g.lineStart(), s(null, null, 1, g), g.lineEnd(), g.polygonEnd();
      }
    };
    function A(Y, z) {
      var X = h(Y, z);
      o(Y = X[0], z = X[1]) && g.point(Y, z);
    }
    function b(Y, z) {
      var X = h(Y, z);
      v.point(X[0], X[1]);
    }
    function C() {
      w.point = b, v.lineStart();
    }
    function O() {
      w.point = A, v.lineEnd();
    }
    function M(Y, z) {
      N.push([Y, z]);
      var X = h(Y, z);
      _.point(X[0], X[1]);
    }
    function F() {
      _.lineStart(), N = [];
    }
    function R() {
      M(N[0][0], N[0][1]), _.lineEnd();
      var Y = _.clean(), z = x.result(), X, q = z.length, Z, ee, j;
      if (N.pop(), y.push(N), N = null, !!q) {
        if (Y & 1) {
          if (ee = z[0], (Z = ee.length - 1) > 0) {
            for (k || (g.polygonStart(), k = !0), g.lineStart(), X = 0; X < Z; ++X) g.point((j = ee[X])[0], j[1]);
            g.lineEnd();
          }
          return;
        }
        q > 1 && Y & 2 && z.push(z.pop().concat(z.shift())), E.push(z.filter(Gl));
      }
    }
    return w;
  };
}
function Gl(o) {
  return o.length > 1;
}
function ql(o, a) {
  return ((o = o.x)[0] < 0 ? o[1] - bt - Ne : bt - o[1]) - ((a = a.x)[0] < 0 ? a[1] - bt - Ne : bt - a[1]);
}
const Js = Ia(
  function() {
    return !0;
  },
  zl,
  Yl,
  [-ve, -bt]
);
function zl(o) {
  var a = NaN, s = NaN, l = NaN, h;
  return {
    lineStart: function() {
      o.lineStart(), h = 1;
    },
    point: function(g, v) {
      var m = g > 0 ? ve : -ve, x = Be(g - a);
      Be(x - ve) < Ne ? (o.point(a, s = (s + v) / 2 > 0 ? bt : -bt), o.point(l, s), o.lineEnd(), o.lineStart(), o.point(m, s), o.point(g, s), h = 0) : l !== m && x >= ve && (Be(a - l) < Ne && (a -= l * Ne), Be(g - m) < Ne && (g -= m * Ne), s = Bl(a, s, g, v), o.point(l, s), o.lineEnd(), o.lineStart(), o.point(m, s), h = 0), o.point(a = g, s = v), l = m;
    },
    lineEnd: function() {
      o.lineEnd(), a = s = NaN;
    },
    clean: function() {
      return 2 - h;
    }
  };
}
function Bl(o, a, s, l) {
  var h, g, v = Pe(o - s);
  return Be(v) > Ne ? bl((Pe(a) * (g = Me(l)) * Pe(s) - Pe(l) * (h = Me(a)) * Pe(o)) / (h * g * v)) : (a + l) / 2;
}
function Yl(o, a, s, l) {
  var h;
  if (o == null)
    h = s * bt, l.point(-ve, h), l.point(0, h), l.point(ve, h), l.point(ve, 0), l.point(ve, -h), l.point(0, -h), l.point(-ve, -h), l.point(-ve, 0), l.point(-ve, h);
  else if (Be(o[0] - a[0]) > Ne) {
    var g = o[0] < a[0] ? ve : -ve;
    h = s * g / 2, l.point(-g, h), l.point(0, h), l.point(g, h);
  } else
    l.point(a[0], a[1]);
}
function Ul(o, a) {
  var s = Me(o), l = s > 0, h = Be(s) > Ne;
  function g(k, y, E, N) {
    Rl(N, o, a, E, k, y);
  }
  function v(k, y) {
    return Me(k) * Me(y) > s;
  }
  function m(k) {
    var y, E, N, w, A;
    return {
      lineStart: function() {
        w = N = !1, A = 1;
      },
      point: function(b, C) {
        var O = [b, C], M, F = v(b, C), R = l ? F ? 0 : _(b, C) : F ? _(b + (b < 0 ? ve : -ve), C) : 0;
        if (!y && (w = N = F) && k.lineStart(), F !== N && (M = x(y, O), (!M || Ni(y, M) || Ni(O, M)) && (O[0] += Ne, O[1] += Ne, F = v(O[0], O[1]))), F !== N)
          A = 0, F ? (k.lineStart(), M = x(O, y), k.point(M[0], M[1])) : (M = x(y, O), k.point(M[0], M[1]), k.lineEnd()), y = M;
        else if (h && y && l ^ F) {
          var Y;
          !(R & E) && (Y = x(O, y, !0)) && (A = 0, l ? (k.lineStart(), k.point(Y[0][0], Y[0][1]), k.point(Y[1][0], Y[1][1]), k.lineEnd()) : (k.point(Y[1][0], Y[1][1]), k.lineEnd(), k.lineStart(), k.point(Y[0][0], Y[0][1])));
        }
        F && (!y || !Ni(y, O)) && k.point(O[0], O[1]), y = O, N = F, E = R;
      },
      lineEnd: function() {
        N && k.lineEnd(), y = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return A | (w && N) << 1;
      }
    };
  }
  function x(k, y, E) {
    var N = Tn(k), w = Tn(y), A = [1, 0, 0], b = Ti(N, w), C = mi(b, b), O = b[0], M = C - O * O;
    if (!M) return !E && k;
    var F = s * C / M, R = -s * O / M, Y = Ti(A, b), z = vi(A, F), X = vi(b, R);
    rr(z, X);
    var q = Y, Z = mi(z, q), ee = mi(q, q), j = Z * Z - ee * (mi(z, z) - 1);
    if (!(j < 0)) {
      var ce = Rn(j), G = vi(q, (-Z - ce) / ee);
      if (rr(G, z), G = mr(G), !E) return G;
      var K = k[0], se = y[0], me = k[1], Re = y[1], Ee;
      se < K && (Ee = K, K = se, se = Ee);
      var Q = se - K, Ae = Be(Q - ve) < Ne, Ie = Ae || Q < Ne;
      if (!Ae && Re < me && (Ee = me, me = Re, Re = Ee), Ie ? Ae ? me + Re > 0 ^ G[1] < (Be(G[0] - K) < Ne ? me : Re) : me <= G[1] && G[1] <= Re : Q > ve ^ (K <= G[0] && G[0] <= se)) {
        var qe = vi(q, (-Z + ce) / ee);
        return rr(qe, z), [G, mr(qe)];
      }
    }
  }
  function _(k, y) {
    var E = l ? o : ve - o, N = 0;
    return k < -E ? N |= 1 : k > E && (N |= 2), y < -E ? N |= 4 : y > E && (N |= 8), N;
  }
  return Ia(v, m, g, l ? [0, -o] : [-ve, o - ve]);
}
function wa(o) {
  return function(a) {
    var s = new pr();
    for (var l in o) s[l] = o[l];
    return s.stream = a, s;
  };
}
function pr() {
}
pr.prototype = {
  constructor: pr,
  point: function(o, a) {
    this.stream.point(o, a);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Sa(o, a, s) {
  var l = a[1][0] - a[0][0], h = a[1][1] - a[0][1], g = o.clipExtent && o.clipExtent();
  o.scale(150).translate([0, 0]), g != null && o.clipExtent(null), Tl(s, o.stream(Ks));
  var v = Ks.result(), m = Math.min(l / (v[1][0] - v[0][0]), h / (v[1][1] - v[0][1])), x = +a[0][0] + (l - m * (v[1][0] + v[0][0])) / 2, _ = +a[0][1] + (h - m * (v[1][1] + v[0][1])) / 2;
  return g != null && o.clipExtent(g), o.scale(m * 150).translate([x, _]);
}
function Xl(o, a, s) {
  return Sa(o, [[0, 0], a], s);
}
var $s = 16, Wl = Me(30 * vt);
function ea(o, a) {
  return +a ? Hl(o, a) : Vl(o);
}
function Vl(o) {
  return wa({
    point: function(a, s) {
      a = o(a, s), this.stream.point(a[0], a[1]);
    }
  });
}
function Hl(o, a) {
  function s(l, h, g, v, m, x, _, k, y, E, N, w, A, b) {
    var C = _ - l, O = k - h, M = C * C + O * O;
    if (M > 4 * a && A--) {
      var F = v + E, R = m + N, Y = x + w, z = Rn(F * F + R * R + Y * Y), X = hn(Y /= z), q = Be(Be(Y) - 1) < Ne || Be(g - y) < Ne ? (g + y) / 2 : bn(R, F), Z = o(q, X), ee = Z[0], j = Z[1], ce = ee - l, G = j - h, K = O * ce - C * G;
      (K * K / M > a || Be((C * ce + O * G) / M - 0.5) > 0.3 || v * E + m * N + x * w < Wl) && (s(l, h, g, v, m, x, ee, j, q, F /= z, R /= z, Y, A, b), b.point(ee, j), s(ee, j, q, F, R, Y, _, k, y, E, N, w, A, b));
    }
  }
  return function(l) {
    var h, g, v, m, x, _, k, y, E, N, w, A, b = {
      point: C,
      lineStart: O,
      lineEnd: F,
      polygonStart: function() {
        l.polygonStart(), b.lineStart = R;
      },
      polygonEnd: function() {
        l.polygonEnd(), b.lineStart = O;
      }
    };
    function C(X, q) {
      X = o(X, q), l.point(X[0], X[1]);
    }
    function O() {
      y = NaN, b.point = M, l.lineStart();
    }
    function M(X, q) {
      var Z = Tn([X, q]), ee = o(X, q);
      s(y, E, k, N, w, A, y = ee[0], E = ee[1], k = X, N = Z[0], w = Z[1], A = Z[2], $s, l), l.point(y, E);
    }
    function F() {
      b.point = C, l.lineEnd();
    }
    function R() {
      O(), b.point = Y, b.lineEnd = z;
    }
    function Y(X, q) {
      M(h = X, q), g = y, v = E, m = N, x = w, _ = A, b.point = M;
    }
    function z() {
      s(y, E, k, N, w, A, g, v, h, m, x, _, $s, l), b.lineEnd = F, F();
    }
    return b;
  };
}
var Zl = wa({
  point: function(o, a) {
    this.stream.point(o * vt, a * vt);
  }
});
function jl(o) {
  return Ql(function() {
    return o;
  })();
}
function Ql(o) {
  var a, s = 150, l = 480, h = 250, g, v, m = 0, x = 0, _ = 0, k = 0, y = 0, E, N, w = null, A = Js, b = null, C, O, M, F = Qs, R = 0.5, Y = ea(ee, R), z, X;
  function q(G) {
    return G = N(G[0] * vt, G[1] * vt), [G[0] * s + g, v - G[1] * s];
  }
  function Z(G) {
    return G = N.invert((G[0] - g) / s, (v - G[1]) / s), G && [G[0] * zt, G[1] * zt];
  }
  function ee(G, K) {
    return G = a(G, K), [G[0] * s + g, v - G[1] * s];
  }
  q.stream = function(G) {
    return z && X === G ? z : z = Zl(A(E, Y(F(X = G))));
  }, q.clipAngle = function(G) {
    return arguments.length ? (A = +G ? Ul(w = G * vt, 6 * vt) : (w = null, Js), ce()) : w * zt;
  }, q.clipExtent = function(G) {
    return arguments.length ? (F = G == null ? (b = C = O = M = null, Qs) : Al(b = +G[0][0], C = +G[0][1], O = +G[1][0], M = +G[1][1]), ce()) : b == null ? null : [[b, C], [O, M]];
  }, q.scale = function(G) {
    return arguments.length ? (s = +G, j()) : s;
  }, q.translate = function(G) {
    return arguments.length ? (l = +G[0], h = +G[1], j()) : [l, h];
  }, q.center = function(G) {
    return arguments.length ? (m = G[0] % 360 * vt, x = G[1] % 360 * vt, j()) : [m * zt, x * zt];
  }, q.rotate = function(G) {
    return arguments.length ? (_ = G[0] % 360 * vt, k = G[1] % 360 * vt, y = G.length > 2 ? G[2] % 360 * vt : 0, j()) : [_ * zt, k * zt, y * zt];
  }, q.precision = function(G) {
    return arguments.length ? (Y = ea(ee, R = G * G), ce()) : Rn(R);
  }, q.fitExtent = function(G, K) {
    return Sa(q, G, K);
  }, q.fitSize = function(G, K) {
    return Xl(q, G, K);
  };
  function j() {
    N = _a(E = Cl(_, k, y), a);
    var G = a(m, x);
    return g = l - G[0] * s, v = h + G[1] * s, ce();
  }
  function ce() {
    return z = X = null, q;
  }
  return function() {
    return a = o.apply(this, arguments), q.invert = a.invert && Z, j();
  };
}
function La(o) {
  return function(a, s) {
    var l = Me(a), h = Me(s), g = o(l * h);
    return [
      g * h * Pe(a),
      g * Pe(s)
    ];
  };
}
function ba(o) {
  return function(a, s) {
    var l = Rn(a * a + s * s), h = o(l), g = Pe(h), v = Me(h);
    return [
      bn(a * g, l * v),
      hn(l && s * g / l)
    ];
  };
}
var Kl = La(function(o) {
  return Rn(2 / (1 + o));
});
Kl.invert = ba(function(o) {
  return 2 * hn(o / 2);
});
var Ta = La(function(o) {
  return (o = pa(o)) && o / Pe(o);
});
Ta.invert = ba(function(o) {
  return o;
});
function Jl() {
  return jl(Ta).scale(79.4188).clipAngle(180 - 1e-3);
}
function ta(o, a) {
  return [o, a];
}
ta.invert = ta;
var { BufferOp: $l, GeoJSONReader: eh, GeoJSONWriter: th } = Ll;
function nh(o, a, s) {
  s = s || {};
  var l = s.units || "kilometers", h = s.steps || 8;
  if (!o)
    throw new Error("geojson is required");
  if (typeof s != "object")
    throw new Error("options must be an object");
  if (typeof h != "number")
    throw new Error("steps must be an number");
  if (a === void 0)
    throw new Error("radius is required");
  if (h <= 0)
    throw new Error("steps must be greater than 0");
  var g = [];
  switch (o.type) {
    case "GeometryCollection":
      return Oi(o, function(v) {
        var m = Ii(v, a, l, h);
        m && g.push(m);
      }), ln(g);
    case "FeatureCollection":
      return qs(o, function(v) {
        var m = Ii(v, a, l, h);
        m && qs(m, function(x) {
          x && g.push(x);
        });
      }), ln(g);
  }
  return Ii(o, a, l, h);
}
function Ii(o, a, s, l) {
  var h = o.properties || {}, g = o.type === "Feature" ? o.geometry : o;
  if (g.type === "GeometryCollection") {
    var v = [];
    return Oi(o, function(A) {
      var b = Ii(A, a, s, l);
      b && v.push(b);
    }), ln(v);
  }
  var m = ih(g), x = {
    type: g.type,
    coordinates: Ra(g.coordinates, m)
  }, _ = new eh(), k = _.read(x), y = Xo(Wo(a, s), "meters"), E = $l.bufferOp(k, y, l), N = new th();
  if (E = N.write(E), !Ca(E.coordinates)) {
    var w = {
      type: E.type,
      coordinates: Oa(E.coordinates, m)
    };
    return ei(w, h);
  }
}
function Ca(o) {
  return Array.isArray(o[0]) ? Ca(o[0]) : isNaN(o[0]);
}
function Ra(o, a) {
  return typeof o[0] != "object" ? a(o) : o.map(function(s) {
    return Ra(s, a);
  });
}
function Oa(o, a) {
  return typeof o[0] != "object" ? a.invert(o) : o.map(function(s) {
    return Oa(s, a);
  });
}
function ih(o) {
  var a = Nl(o).geometry.coordinates, s = [-a[0], -a[1]];
  return Jl().rotate(s).scale($e);
}
var rh = nh;
function sh(o) {
  const a = [];
  if (Oi(o, (h) => {
    a.push(h.coordinates);
  }), a.length < 2)
    throw new Error("Must have at least two features");
  const s = o.features[0].properties || {}, l = ma.difference(a[0], ...a.slice(1));
  return l.length === 0 ? null : l.length === 1 ? kr(l[0], s) : ga(l, s);
}
var ah = sh;
function na(o) {
  let a;
  for (const s of o)
    a && s[0] - a[0] >= 180 ? s[0] -= 360 : a && s[0] - a[0] < -180 && (s[0] += 360), a = s;
}
function ia(o, a) {
  const s = ah(
    ln([
      kr([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      o
    ])
  );
  if (!s)
    return;
  s.properties = { isMask: "y" };
  const l = rh(o, 0);
  if (l) {
    if (l.geometry.type === "Polygon")
      for (const h of l.geometry.coordinates)
        na(h);
    else
      for (const h of l.geometry.coordinates)
        for (const g of h)
          na(g);
    a(ln([l, s]));
  }
}
const ra = ln([]);
function uh(o, a, s = !0, l = !0, h = {}, g = {}, v = {
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
}) {
  let m;
  const x = [];
  let _, k, y;
  function E() {
    !o.getSource("full-geom") && (v != null && v.fill || v != null && v.line) && o.addSource("full-geom", {
      type: "geojson",
      data: ra
    }), !o.getLayer("full-geom-fill") && (v != null && v.fill) && o.addLayer({
      ...v == null ? void 0 : v.fill,
      id: "full-geom-fill",
      type: "fill",
      source: "full-geom"
    }), !o.getLayer("full-geom-line") && (v != null && v.line) && o.addLayer({
      ...v == null ? void 0 : v.line,
      id: "full-geom-line",
      type: "line",
      source: "full-geom"
    }), y && A(y);
  }
  o.loaded() ? E() : o.once("load", () => {
    E();
  }), o.on("styledata", () => {
    E();
  });
  const N = (b) => {
    m == null || m({
      type: "mapClick",
      coordinates: [b.lngLat.lng, b.lngLat.lat]
    });
  };
  function w(b = !1) {
    if (!a)
      throw new Error();
    const C = document.createElement("div");
    return b && C.classList.add("marker-interactive"), new po({
      props: { displayIn: "maplibre" },
      target: C
    }), new a.Marker({ element: C, offset: [1, -13] });
  }
  function A(b) {
    var C;
    y = b, (C = o.getSource("full-geom")) == null || C.setData(b);
  }
  return {
    setEventHandler(b) {
      b ? (m = b, o.on("click", N)) : (m = void 0, o.off("click", N));
    },
    flyTo(b, C) {
      o.flyTo({ center: b, zoom: C, ...h });
    },
    fitBounds(b, C, O) {
      o.fitBounds(
        [
          [b[0], b[1]],
          [b[2], b[3]]
        ],
        { padding: C, maxZoom: O, ...g }
      );
    },
    indicateReverse(b) {
      o.getCanvasContainer().style.cursor = b ? "crosshair" : "";
    },
    setReverseMarker(b) {
      !a || !s || (k ? b ? k.setLngLat(b) : (k.remove(), k = void 0) : b && (k = (typeof s == "object" ? new a.Marker(s) : w()).setLngLat(b).addTo(o), k.getElement().classList.add("marker-reverse")));
    },
    setMarkers(b, C) {
      if (s) {
        for (const O of x)
          O.remove();
        if (x.length = 0, A(ra), !!a) {
          if (C) {
            let O = !1;
            if (C.geometry.type === "GeometryCollection") {
              const M = C.geometry.geometries.filter(
                (F) => F.type === "Polygon" || F.type === "MultiPolygon"
              );
              e: if (M.length > 0) {
                const F = El(
                  ln(M.map((R) => ei(R)))
                );
                if (!F)
                  break e;
                ia(
                  {
                    ...C,
                    geometry: F.geometry
                  },
                  A
                ), O = !0;
              } else {
                const F = C.geometry.geometries.filter(
                  (R) => R.type === "LineString" || R.type === "MultiLineString"
                );
                F.length > 0 && (A({
                  ...C,
                  geometry: { type: "GeometryCollection", geometries: F }
                }), O = !0);
              }
            }
            if (!O) {
              if (C.geometry.type === "Polygon" || C.geometry.type === "MultiPolygon")
                ia(C, A);
              else if (C.geometry.type === "LineString" || C.geometry.type === "MultiLineString") {
                A(C);
                return;
              }
            }
            s && x.push(
              (typeof s == "object" ? new a.Marker(s) : w()).setLngLat(C.center).addTo(o)
            );
          }
          if (l)
            for (const O of b ?? []) {
              if (O === C)
                continue;
              const M = (typeof l == "object" ? new a.Marker(l) : w(!0)).setLngLat(O.center).setPopup(
                new a.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  O.place_type[0] === "reverse" ? O.place_name : O.place_name.replace(/,.*/, "")
                )
              ).addTo(o), F = M.getElement();
              F.addEventListener("click", (R) => {
                R.stopPropagation(), m == null || m({ type: "markerClick", id: O.id });
              }), F.addEventListener("mouseenter", () => {
                m == null || m({ type: "markerMouseEnter", id: O.id }), M.togglePopup();
              }), F.addEventListener("mouseleave", () => {
                m == null || m({ type: "markerMouseLeave", id: O.id }), M.togglePopup();
              }), x.push(M);
            }
        }
      }
    },
    setSelectedMarker(b) {
      _ && _.getElement().classList.toggle("marker-selected", !1), _ = b > -1 ? x[b] : void 0, _ == null || _.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const b = o.getCenter();
      return [o.getZoom(), b.lng, b.lat];
    }
  };
}
var at, on;
class oh extends EventTarget {
  constructor(s = {}) {
    super();
    er(this, at);
    er(this, on);
    fi(this, on, s);
  }
  onAddInt(s) {
    const l = document.createElement("div");
    l.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
    const {
      marker: h,
      showResultMarkers: g,
      flyTo: v,
      fullGeometryStyle: m,
      ...x
    } = mt(this, on), _ = typeof v == "boolean" ? {} : v, k = this.getExtraProps(s, l), E = {
      mapController: uh(
        s,
        this.getMapLibreGl(),
        h,
        g,
        _,
        _,
        m
      ),
      flyTo: v === void 0 ? !0 : !!v,
      apiKey: "",
      // just to satisfy apiKey; TODO find a better solution
      ...k,
      ...x
    };
    if (!E.apiKey)
      throw new Error("no apiKey provided");
    fi(this, at, new Yo({ target: l, props: E }));
    for (const N of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      mt(this, at).$on(N, (w) => this.dispatchEvent(w));
    return l;
  }
  setOptions(s) {
    var x;
    fi(this, on, s);
    const {
      marker: l,
      showResultMarkers: h,
      flyTo: g,
      fullGeometryStyle: v,
      ...m
    } = mt(this, on);
    (x = mt(this, at)) == null || x.$set(m);
  }
  setQuery(s, l = !0) {
    var h;
    (h = mt(this, at)) == null || h.setQuery(s, l);
  }
  clearMap() {
    var s;
    (s = mt(this, at)) == null || s.clearMap();
  }
  clearList() {
    var s;
    (s = mt(this, at)) == null || s.clearList();
  }
  setReverseMode(s) {
    var l;
    (l = mt(this, at)) == null || l.$set({ reverseActive: s });
  }
  focus() {
    var s;
    (s = mt(this, at)) == null || s.focus();
  }
  blur() {
    var s;
    (s = mt(this, at)) == null || s.blur();
  }
  onRemove() {
    var s;
    (s = mt(this, at)) == null || s.$destroy();
  }
}
at = new WeakMap(), on = new WeakMap();
class ch extends oh {
  getMapLibreGl() {
    return Mu;
  }
  onAdd(a) {
    return super.onAddInt(a);
  }
  getExtraProps() {
    return {};
  }
}
export {
  ch as GeocodingControl,
  uh as createMapLibreGlMapController
};
//# sourceMappingURL=maplibregl.js.map
