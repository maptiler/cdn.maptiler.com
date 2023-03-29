import { forwardRef as Rt, useRef as qe, useEffect as je, useImperativeHandle as Et, createElement as Bt } from "react";
function w() {
}
function Lt(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function it(t) {
  return t();
}
function Ue() {
  return /* @__PURE__ */ Object.create(null);
}
function ee(t) {
  t.forEach(it);
}
function ct(t) {
  return typeof t == "function";
}
function me(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function St(t) {
  return Object.keys(t).length === 0;
}
function It(t, e, n, r) {
  if (t) {
    const c = ot(t, e, n, r);
    return t[0](c);
  }
}
function ot(t, e, n, r) {
  return t[1] && r ? Lt(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function At(t, e, n, r) {
  if (t[2] && r) {
    const c = t[2](r(n));
    if (e.dirty === void 0)
      return c;
    if (typeof c == "object") {
      const u = [], i = Math.max(e.dirty.length, c.length);
      for (let m = 0; m < i; m += 1)
        u[m] = e.dirty[m] | c[m];
      return u;
    }
    return e.dirty | c;
  }
  return e.dirty;
}
function Pt(t, e, n, r, c, u) {
  if (c) {
    const i = ot(e, n, r, u);
    t.p(i, c);
  }
}
function Nt(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function We(t) {
  return t ?? "";
}
function _(t, e) {
  t.appendChild(e);
}
function K(t, e, n) {
  t.insertBefore(e, n || null);
}
function D(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function xt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function S(t) {
  return document.createElement(t);
}
function $(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ce(t) {
  return document.createTextNode(t);
}
function W() {
  return ce(" ");
}
function H(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function jt(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function o(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Gt(t) {
  return Array.from(t.childNodes);
}
function ke(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Ze(t, e) {
  t.value = e ?? "";
}
function Q(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Ot(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const c = document.createEvent("CustomEvent");
  return c.initCustomEvent(t, n, r, e), c;
}
let ve;
function we(t) {
  ve = t;
}
function st() {
  if (!ve)
    throw new Error("Function called outside component initialization");
  return ve;
}
function Dt(t) {
  st().$$.on_destroy.push(t);
}
function Ft() {
  const t = st();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const c = t.$$.callbacks[e];
    if (c) {
      const u = Ot(e, n, { cancelable: r });
      return c.slice().forEach((i) => {
        i.call(t, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
const fe = [], Oe = [];
let ae = [];
const Je = [], Vt = /* @__PURE__ */ Promise.resolve();
let De = !1;
function Ht() {
  De || (De = !0, Vt.then(ut));
}
function Fe(t) {
  ae.push(t);
}
const Ge = /* @__PURE__ */ new Set();
let ue = 0;
function ut() {
  if (ue !== 0)
    return;
  const t = ve;
  do {
    try {
      for (; ue < fe.length; ) {
        const e = fe[ue];
        ue++, we(e), Kt(e.$$);
      }
    } catch (e) {
      throw fe.length = 0, ue = 0, e;
    }
    for (we(null), fe.length = 0, ue = 0; Oe.length; )
      Oe.pop()();
    for (let e = 0; e < ae.length; e += 1) {
      const n = ae[e];
      Ge.has(n) || (Ge.add(n), n());
    }
    ae.length = 0;
  } while (fe.length);
  for (; Je.length; )
    Je.pop()();
  De = !1, Ge.clear(), we(t);
}
function Kt(t) {
  if (t.fragment !== null) {
    t.update(), ee(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Fe);
  }
}
function Qt(t) {
  const e = [], n = [];
  ae.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), ae = e;
}
const Ee = /* @__PURE__ */ new Set();
let ie;
function Be() {
  ie = {
    r: 0,
    c: [],
    p: ie
    // parent group
  };
}
function Le() {
  ie.r || ee(ie.c), ie = ie.p;
}
function L(t, e) {
  t && t.i && (Ee.delete(t), t.i(e));
}
function O(t, e, n, r) {
  if (t && t.o) {
    if (Ee.has(t))
      return;
    Ee.add(t), ie.c.push(() => {
      Ee.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function pe(t) {
  t && t.c();
}
function de(t, e, n, r) {
  const { fragment: c, after_update: u } = t.$$;
  c && c.m(e, n), r || Fe(() => {
    const i = t.$$.on_mount.map(it).filter(ct);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : ee(i), t.$$.on_mount = [];
  }), u.forEach(Fe);
}
function he(t, e) {
  const n = t.$$;
  n.fragment !== null && (Qt(n.after_update), ee(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qt(t, e) {
  t.$$.dirty[0] === -1 && (fe.push(t), Ht(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function _e(t, e, n, r, c, u, i, m = [-1]) {
  const f = ve;
  we(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: w,
    not_equal: c,
    bound: Ue(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Ue(),
    dirty: m,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  i && i(a.root);
  let h = !1;
  if (a.ctx = n ? n(t, e.props || {}, (v, I, ...N) => {
    const G = N.length ? N[0] : I;
    return a.ctx && c(a.ctx[v], a.ctx[v] = G) && (!a.skip_bound && a.bound[v] && a.bound[v](G), h && qt(t, v)), I;
  }) : [], a.update(), h = !0, ee(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = Gt(e.target);
      a.fragment && a.fragment.l(v), v.forEach(D);
    } else
      a.fragment && a.fragment.c();
    e.intro && L(t.$$.fragment), de(t, e.target, e.anchor, e.customElement), ut();
  }
  we(f);
}
class ge {
  $destroy() {
    he(this, 1), this.$destroy = w;
  }
  $on(e, n) {
    if (!ct(n))
      return w;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !St(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Ut(t) {
  let e, n;
  return {
    c() {
      e = $("svg"), n = $("path"), o(n, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), o(e, "viewBox", "0 0 60.006 21.412"), o(e, "width", "14"), o(e, "height", "20"), o(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      K(r, e, c), _(e, n);
    },
    p: w,
    i: w,
    o: w,
    d(r) {
      r && D(e);
    }
  };
}
class Wt extends ge {
  constructor(e) {
    super(), _e(this, e, null, Ut, me, {});
  }
}
function Zt(t) {
  let e, n;
  return {
    c() {
      e = $("svg"), n = $("path"), o(n, "d", "M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"), o(e, "viewBox", "0 0 18 18"), o(e, "width", "16"), o(e, "height", "16"), o(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      K(r, e, c), _(e, n);
    },
    p: w,
    i: w,
    o: w,
    d(r) {
      r && D(e);
    }
  };
}
class Jt extends ge {
  constructor(e) {
    super(), _e(this, e, null, Zt, me, {});
  }
}
function Xt(t) {
  let e;
  return {
    c() {
      e = S("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', o(e, "class", "svelte-7cmwmc");
    },
    m(n, r) {
      K(n, e, r);
    },
    p: w,
    i: w,
    o: w,
    d(n) {
      n && D(e);
    }
  };
}
class Yt extends ge {
  constructor(e) {
    super(), _e(this, e, null, Xt, me, {});
  }
}
function $t(t) {
  let e, n, r;
  return {
    c() {
      e = $("svg"), n = $("path"), o(n, "stroke-width", "4"), o(n, "fill-rule", "evenodd"), o(n, "clip-rule", "evenodd"), o(n, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), o(n, "class", "svelte-1k1cmht"), o(e, "width", r = /*displayIn*/
      t[0] !== "list" ? void 0 : "20"), o(e, "viewBox", "0 0 70 85"), o(e, "fill", "none"), o(e, "class", "svelte-1k1cmht"), Q(
        e,
        "in-map",
        /*displayIn*/
        t[0] !== "list"
      ), Q(
        e,
        "list-icon",
        /*displayIn*/
        t[0] === "list"
      );
    },
    m(c, u) {
      K(c, e, u), _(e, n);
    },
    p(c, [u]) {
      u & /*displayIn*/
      1 && r !== (r = /*displayIn*/
      c[0] !== "list" ? void 0 : "20") && o(e, "width", r), u & /*displayIn*/
      1 && Q(
        e,
        "in-map",
        /*displayIn*/
        c[0] !== "list"
      ), u & /*displayIn*/
      1 && Q(
        e,
        "list-icon",
        /*displayIn*/
        c[0] === "list"
      );
    },
    i: w,
    o: w,
    d(c) {
      c && D(e);
    }
  };
}
function en(t, e, n) {
  let { displayIn: r } = e;
  return t.$$set = (c) => {
    "displayIn" in c && n(0, r = c.displayIn);
  }, [r];
}
class tn extends ge {
  constructor(e) {
    super(), _e(this, e, en, $t, me, { displayIn: 0 });
  }
}
function nn(t) {
  let e, n;
  return {
    c() {
      e = $("svg"), n = $("path"), o(n, "d", "M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"), o(e, "viewBox", "0 0 18 18"), o(e, "xml:space", "preserve"), o(e, "width", "20"), o(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      K(r, e, c), _(e, n);
    },
    p: w,
    i: w,
    o: w,
    d(r) {
      r && D(e);
    }
  };
}
class rn extends ge {
  constructor(e) {
    super(), _e(this, e, null, nn, me, {});
  }
}
function Xe(t, e, n) {
  const r = t.slice();
  return r[69] = e[n], r[71] = n, r;
}
function Ye(t) {
  let e, n;
  return e = new Yt({}), {
    c() {
      pe(e.$$.fragment);
    },
    m(r, c) {
      de(e, r, c), n = !0;
    },
    i(r) {
      n || (L(e.$$.fragment, r), n = !0);
    },
    o(r) {
      O(e.$$.fragment, r), n = !1;
    },
    d(r) {
      he(e, r);
    }
  };
}
function $e(t) {
  let e, n, r, c, u;
  return n = new Wt({}), {
    c() {
      e = S("button"), pe(n.$$.fragment), o(e, "type", "button"), o(
        e,
        "title",
        /*reverseButtonTitle*/
        t[9]
      ), o(e, "class", "svelte-z0d4ta"), Q(
        e,
        "active",
        /*reverseActive*/
        t[0]
      );
    },
    m(i, m) {
      K(i, e, m), de(n, e, null), r = !0, c || (u = H(
        e,
        "click",
        /*click_handler_2*/
        t[56]
      ), c = !0);
    },
    p(i, m) {
      (!r || m[0] & /*reverseButtonTitle*/
      512) && o(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), (!r || m[0] & /*reverseActive*/
      1) && Q(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    i(i) {
      r || (L(n.$$.fragment, i), r = !0);
    },
    o(i) {
      O(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && D(e), he(n), c = !1, u();
    }
  };
}
function ln(t) {
  let e, n, r, c, u = (
    /*listFeatures*/
    t[12]
  ), i = [];
  for (let f = 0; f < u.length; f += 1)
    i[f] = tt(Xe(t, u, f));
  const m = (f) => O(i[f], 1, 1, () => {
    i[f] = null;
  });
  return {
    c() {
      e = S("ul");
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      o(e, "class", "svelte-z0d4ta");
    },
    m(f, a) {
      K(f, e, a);
      for (let h = 0; h < i.length; h += 1)
        i[h] && i[h].m(e, null);
      n = !0, r || (c = [
        H(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[59]
        ),
        H(
          e,
          "blur",
          /*blur_handler_1*/
          t[60]
        )
      ], r = !0);
    },
    p(f, a) {
      if (a[0] & /*selectedItemIndex, pick, listFeatures, showPlaceType*/
      2110464) {
        u = /*listFeatures*/
        f[12];
        let h;
        for (h = 0; h < u.length; h += 1) {
          const v = Xe(f, u, h);
          i[h] ? (i[h].p(v, a), L(i[h], 1)) : (i[h] = tt(v), i[h].c(), L(i[h], 1), i[h].m(e, null));
        }
        for (Be(), h = u.length; h < i.length; h += 1)
          m(h);
        Le();
      }
    },
    i(f) {
      if (!n) {
        for (let a = 0; a < u.length; a += 1)
          L(i[a]);
        n = !0;
      }
    },
    o(f) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        O(i[a]);
      n = !1;
    },
    d(f) {
      f && D(e), xt(i, f), r = !1, ee(c);
    }
  };
}
function cn(t) {
  let e, n;
  return {
    c() {
      e = S("div"), n = ce(
        /*noResultsMessage*/
        t[7]
      ), o(e, "class", "no-results svelte-z0d4ta");
    },
    m(r, c) {
      K(r, e, c), _(e, n);
    },
    p(r, c) {
      c[0] & /*noResultsMessage*/
      128 && ke(
        n,
        /*noResultsMessage*/
        r[7]
      );
    },
    i: w,
    o: w,
    d(r) {
      r && D(e);
    }
  };
}
function on(t) {
  let e = "", n;
  return {
    c() {
      n = ce(e);
    },
    m(r, c) {
      K(r, n, c);
    },
    p: w,
    i: w,
    o: w,
    d(r) {
      r && D(n);
    }
  };
}
function sn(t) {
  let e, n;
  return {
    c() {
      e = S("div"), n = ce(
        /*errorMessage*/
        t[6]
      ), o(e, "class", "error svelte-z0d4ta");
    },
    m(r, c) {
      K(r, e, c), _(e, n);
    },
    p(r, c) {
      c[0] & /*errorMessage*/
      64 && ke(
        n,
        /*errorMessage*/
        r[6]
      );
    },
    i: w,
    o: w,
    d(r) {
      r && D(e);
    }
  };
}
function et(t) {
  var c, u;
  let e, n = (
    /*feature*/
    (((u = (c = t[69].properties) == null ? void 0 : c.place_type_name) == null ? void 0 : u[0]) ?? /*feature*/
    t[69].place_type[0]) + ""
  ), r;
  return {
    c() {
      e = S("span"), r = ce(n), o(e, "class", "svelte-z0d4ta");
    },
    m(i, m) {
      K(i, e, m), _(e, r);
    },
    p(i, m) {
      var f, a;
      m[0] & /*listFeatures*/
      4096 && n !== (n = /*feature*/
      (((a = (f = i[69].properties) == null ? void 0 : f.place_type_name) == null ? void 0 : a[0]) ?? /*feature*/
      i[69].place_type[0]) + "") && ke(r, n);
    },
    d(i) {
      i && D(e);
    }
  };
}
function tt(t) {
  let e, n, r, c, u, i, m = (
    /*feature*/
    t[69].place_name.replace(/,.*/, "") + ""
  ), f, a, h, v, I, N = (
    /*feature*/
    t[69].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), G, p, k, B, C, F;
  n = new tn({ props: { displayIn: "list" } });
  let z = (
    /*showPlaceType*/
    t[10] && et(t)
  );
  function d() {
    return (
      /*mouseenter_handler*/
      t[57](
        /*i*/
        t[71]
      )
    );
  }
  function b() {
    return (
      /*focus_handler_1*/
      t[58](
        /*feature*/
        t[69]
      )
    );
  }
  return {
    c() {
      e = S("li"), pe(n.$$.fragment), r = W(), c = S("span"), u = S("span"), i = S("span"), f = ce(m), a = W(), z && z.c(), h = W(), v = S("span"), I = S("span"), G = ce(N), p = W(), o(i, "class", "svelte-z0d4ta"), o(u, "class", "svelte-z0d4ta"), o(c, "class", "svelte-z0d4ta"), o(I, "class", "svelte-z0d4ta"), o(v, "class", "svelte-z0d4ta"), o(e, "tabindex", "0"), o(e, "data-selected", k = /*selectedItemIndex*/
      t[13] === /*i*/
      t[71]), o(e, "class", "svelte-z0d4ta"), Q(
        e,
        "selected",
        /*selectedItemIndex*/
        t[13] === /*i*/
        t[71]
      );
    },
    m(P, M) {
      K(P, e, M), de(n, e, null), _(e, r), _(e, c), _(c, u), _(u, i), _(i, f), _(u, a), z && z.m(u, null), _(e, h), _(e, v), _(v, I), _(I, G), _(e, p), B = !0, C || (F = [
        H(e, "mouseenter", d),
        H(e, "focus", b)
      ], C = !0);
    },
    p(P, M) {
      t = P, (!B || M[0] & /*listFeatures*/
      4096) && m !== (m = /*feature*/
      t[69].place_name.replace(/,.*/, "") + "") && ke(f, m), /*showPlaceType*/
      t[10] ? z ? z.p(t, M) : (z = et(t), z.c(), z.m(u, null)) : z && (z.d(1), z = null), (!B || M[0] & /*listFeatures*/
      4096) && N !== (N = /*feature*/
      t[69].place_name.replace(/[^,]*,?\s*/, "") + "") && ke(G, N), (!B || M[0] & /*selectedItemIndex*/
      8192 && k !== (k = /*selectedItemIndex*/
      t[13] === /*i*/
      t[71])) && o(e, "data-selected", k), (!B || M[0] & /*selectedItemIndex*/
      8192) && Q(
        e,
        "selected",
        /*selectedItemIndex*/
        t[13] === /*i*/
        t[71]
      );
    },
    i(P) {
      B || (L(n.$$.fragment, P), B = !0);
    },
    o(P) {
      O(n.$$.fragment, P), B = !1;
    },
    d(P) {
      P && D(e), he(n), z && z.d(), C = !1, ee(F);
    }
  };
}
function un(t) {
  let e, n, r, c, u, i, m, f, a, h, v, I, N, G, p, k, B, C, F, z;
  c = new rn({}), h = new Jt({});
  let d = (
    /*abortController*/
    t[17] && Ye()
  ), b = (
    /*enableReverse*/
    t[5] === !0 && $e(t)
  );
  const P = (
    /*#slots*/
    t[48].default
  ), M = It(
    P,
    t,
    /*$$scope*/
    t[47],
    null
  ), Z = [sn, on, cn, ln], A = [];
  function ye(s, T) {
    var J, te;
    return (
      /*error*/
      s[16] ? 0 : (
        /*focusedDelayed*/
        s[14] ? (
          /*listFeatures*/
          ((J = s[12]) == null ? void 0 : J.length) === 0 ? 2 : (
            /*focusedDelayed*/
            s[14] && /*listFeatures*/
            ((te = s[12]) != null && te.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(p = ye(t)) && (k = A[p] = Z[p](t)), {
    c() {
      e = S("form"), n = S("div"), r = S("button"), pe(c.$$.fragment), u = W(), i = S("input"), m = W(), f = S("div"), a = S("button"), pe(h.$$.fragment), v = W(), d && d.c(), I = W(), b && b.c(), N = W(), M && M.c(), G = W(), k && k.c(), o(r, "type", "button"), o(r, "class", "svelte-z0d4ta"), o(
        i,
        "placeholder",
        /*placeholder*/
        t[8]
      ), o(
        i,
        "aria-label",
        /*placeholder*/
        t[8]
      ), o(i, "class", "svelte-z0d4ta"), o(a, "type", "button"), o(
        a,
        "title",
        /*clearButtonTitle*/
        t[3]
      ), o(a, "class", "svelte-z0d4ta"), Q(
        a,
        "displayable",
        /*searchValue*/
        t[1] !== ""
      ), o(f, "class", "clear-button-container svelte-z0d4ta"), o(n, "class", "input-group svelte-z0d4ta"), o(e, "tabindex", "0"), o(e, "class", B = We(
        /*className*/
        t[2]
      ) + " svelte-z0d4ta"), Q(
        e,
        "can-collapse",
        /*collapsed*/
        t[4] && /*searchValue*/
        t[1] === ""
      );
    },
    m(s, T) {
      K(s, e, T), _(e, n), _(n, r), de(c, r, null), _(n, u), _(n, i), t[50](i), Ze(
        i,
        /*searchValue*/
        t[1]
      ), _(n, m), _(n, f), _(f, a), de(h, a, null), _(f, v), d && d.m(f, null), _(n, I), b && b.m(n, null), _(n, N), M && M.m(n, null), _(e, G), ~p && A[p].m(e, null), C = !0, F || (z = [
        H(
          r,
          "click",
          /*click_handler*/
          t[49]
        ),
        H(
          i,
          "input",
          /*input_1_input_handler*/
          t[51]
        ),
        H(
          i,
          "focus",
          /*focus_handler*/
          t[52]
        ),
        H(
          i,
          "blur",
          /*blur_handler*/
          t[53]
        ),
        H(
          i,
          "keydown",
          /*handleKeyDown*/
          t[19]
        ),
        H(
          i,
          "input",
          /*input_handler*/
          t[54]
        ),
        H(
          a,
          "click",
          /*click_handler_1*/
          t[55]
        ),
        H(e, "submit", jt(
          /*handleOnSubmit*/
          t[18]
        ))
      ], F = !0);
    },
    p(s, T) {
      (!C || T[0] & /*placeholder*/
      256) && o(
        i,
        "placeholder",
        /*placeholder*/
        s[8]
      ), (!C || T[0] & /*placeholder*/
      256) && o(
        i,
        "aria-label",
        /*placeholder*/
        s[8]
      ), T[0] & /*searchValue*/
      2 && i.value !== /*searchValue*/
      s[1] && Ze(
        i,
        /*searchValue*/
        s[1]
      ), (!C || T[0] & /*clearButtonTitle*/
      8) && o(
        a,
        "title",
        /*clearButtonTitle*/
        s[3]
      ), (!C || T[0] & /*searchValue*/
      2) && Q(
        a,
        "displayable",
        /*searchValue*/
        s[1] !== ""
      ), /*abortController*/
      s[17] ? d ? T[0] & /*abortController*/
      131072 && L(d, 1) : (d = Ye(), d.c(), L(d, 1), d.m(f, null)) : d && (Be(), O(d, 1, 1, () => {
        d = null;
      }), Le()), /*enableReverse*/
      s[5] === !0 ? b ? (b.p(s, T), T[0] & /*enableReverse*/
      32 && L(b, 1)) : (b = $e(s), b.c(), L(b, 1), b.m(n, N)) : b && (Be(), O(b, 1, 1, () => {
        b = null;
      }), Le()), M && M.p && (!C || T[1] & /*$$scope*/
      65536) && Pt(
        M,
        P,
        s,
        /*$$scope*/
        s[47],
        C ? At(
          P,
          /*$$scope*/
          s[47],
          T,
          null
        ) : Nt(
          /*$$scope*/
          s[47]
        ),
        null
      );
      let J = p;
      p = ye(s), p === J ? ~p && A[p].p(s, T) : (k && (Be(), O(A[J], 1, 1, () => {
        A[J] = null;
      }), Le()), ~p ? (k = A[p], k ? k.p(s, T) : (k = A[p] = Z[p](s), k.c()), L(k, 1), k.m(e, null)) : k = null), (!C || T[0] & /*className*/
      4 && B !== (B = We(
        /*className*/
        s[2]
      ) + " svelte-z0d4ta")) && o(e, "class", B), (!C || T[0] & /*className, collapsed, searchValue*/
      22) && Q(
        e,
        "can-collapse",
        /*collapsed*/
        s[4] && /*searchValue*/
        s[1] === ""
      );
    },
    i(s) {
      C || (L(c.$$.fragment, s), L(h.$$.fragment, s), L(d), L(b), L(M, s), L(k), C = !0);
    },
    o(s) {
      O(c.$$.fragment, s), O(h.$$.fragment, s), O(d), O(b), O(M, s), O(k), C = !1;
    },
    d(s) {
      s && D(e), he(c), t[50](null), he(h), d && d.d(), b && b.d(), M && M.d(s), ~p && A[p].d(), F = !1, ee(z);
    }
  };
}
function fn(t, e, n) {
  const r = e[1], c = e[0], u = r - c;
  return t === r && n ? t : ((t - c) % u + u) % u + c;
}
function nt(t) {
  let e = [...t];
  return e[2] < e[0] && (e[2] += 360), e;
}
function an(t, e, n) {
  let r, { $$slots: c = {}, $$scope: u } = e, { class: i = void 0 } = e, { apiKey: m } = e, { bbox: f = void 0 } = e, { clearButtonTitle: a = "clear" } = e, { clearOnBlur: h = !1 } = e, { collapsed: v = !1 } = e, { country: I = void 0 } = e, { debounceSearch: N = 200 } = e, { enableReverse: G = !1 } = e, { errorMessage: p = "Searching failed" } = e, { filter: k = () => !0 } = e, { flyTo: B = !0 } = e, { fuzzyMatch: C = !0 } = e, { language: F = void 0 } = e, { limit: z = void 0 } = e, { mapController: d = void 0 } = e, { minLength: b = 2 } = e, { noResultsMessage: P = "No results found" } = e, { placeholder: M = "Search" } = e, { proximity: Z = void 0 } = e, { reverseActive: A = G === "always" } = e, { reverseButtonTitle: ye = "toggle reverse geocoding" } = e, { searchValue: s = "" } = e, { showFullGeometry: T = !0 } = e, { showPlaceType: J = !1 } = e, { showResultsWhileTyping: te = !0 } = e, { trackProximity: ze = !0 } = e, { types: Me = void 0 } = e, { zoom: Te = 16 } = e, { fetchParameters: Se = {} } = e;
  function ft() {
    q.focus();
  }
  function at() {
    q.blur();
  }
  function Ve(l, E = !0) {
    n(1, s = l), E ? (n(13, R = -1), Ke()) : (Ae(), setTimeout(() => {
      q.focus(), q.select();
    }));
  }
  let oe = !1, g, x, y, He = "", q, R = -1, X, Ce = [], ne, se, Re;
  const Y = Ft();
  Dt(() => {
    d && (d.setEventHandler(void 0), d.indicateReverse(!1), d.setSelectedMarker(-1), d.setMarkers(void 0, void 0));
  });
  function Ke(l) {
    if (se && (clearTimeout(se), se = void 0), R > -1 && g)
      n(45, y = g[R]), n(1, s = y.place_name.replace(/,.*/, "")), n(16, X = void 0), n(44, x = void 0), n(13, R = -1);
    else if (s) {
      const E = l || !Qe();
      Ie(s, { exact: !0 }).then(() => {
        n(44, x = g), n(45, y = void 0), E && dt();
      }).catch((U) => n(16, X = U));
    }
  }
  function Qe() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(s);
  }
  async function Ie(l, { byId: E = !1, exact: U = !1 } = {}) {
    n(16, X = void 0);
    const be = Qe(), V = new URLSearchParams();
    F != null && V.set("language", Array.isArray(F) ? F.join(",") : F), Me && V.set("types", Me.join(",")), be || (f && V.set("bbox", f.map((le) => le.toFixed(6)).join(",")), I && V.set("country", Array.isArray(I) ? I.join(",") : I)), E || (Z && V.set("proximity", Z.map((le) => le.toFixed(6)).join(",")), (U || !te) && V.set("autocomplete", "false"), V.set("fuzzyMatch", String(C))), z !== void 0 && V.set("limit", String(z)), V.set("key", m);
    const re = "https://api.maptiler.com/geocoding/" + encodeURIComponent(l) + ".json?" + V.toString();
    if (re === He) {
      E ? (n(12, g = void 0), n(45, y = Ce[0])) : n(12, g = Ce);
      return;
    }
    He = re, ne == null || ne.abort();
    const j = new AbortController();
    n(17, ne = j);
    let Ne;
    try {
      Ne = await fetch(re, { signal: j.signal, ...Se }).finally(() => {
        j === ne && n(17, ne = void 0);
      });
    } catch (le) {
      if (le && typeof le == "object" && le.name === "AbortError")
        return;
      throw new Error();
    }
    if (!Ne.ok)
      throw new Error();
    const xe = await Ne.json();
    Y("response", { url: re, featureCollection: xe }), E ? (n(12, g = void 0), n(45, y = xe.features[0]), Ce = [y]) : (n(12, g = xe.features.filter(k)), Ce = g, be && q.focus());
  }
  function dt() {
    var U, be, V, re;
    if (!(x != null && x.length) || !B)
      return;
    const l = [180, 90, -180, -90], E = !x.some((j) => !j.matching_text);
    for (const j of x)
      (E || !j.matching_text) && (l[0] = Math.min(l[0], ((U = j.bbox) == null ? void 0 : U[0]) ?? j.center[0]), l[1] = Math.min(l[1], ((be = j.bbox) == null ? void 0 : be[1]) ?? j.center[1]), l[2] = Math.max(l[2], ((V = j.bbox) == null ? void 0 : V[2]) ?? j.center[0]), l[3] = Math.max(l[3], ((re = j.bbox) == null ? void 0 : re[3]) ?? j.center[1]));
    d && x.length > 0 && (y && l[0] === l[2] && l[1] === l[3] ? d.flyTo(y.center, Te) : d.fitBounds(nt(l), 50));
  }
  function ht(l) {
    n(0, A = G === "always"), Ve(fn(l[0], [-180, 180], !0).toFixed(6) + "," + l[1].toFixed(6));
  }
  function mt(l) {
    if (!g)
      return;
    let E = l.key === "ArrowDown" ? 1 : l.key === "ArrowUp" ? -1 : 0;
    E ? (R === -1 && E === -1 && n(13, R = g.length), n(13, R += E), R >= g.length && n(13, R = -1), l.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(l.key) && n(13, R = -1);
  }
  function Ae(l = !0) {
    if (te && s.length > b) {
      se && clearTimeout(se);
      const E = s;
      se = window.setTimeout(
        () => {
          Ie(E).catch((U) => n(16, X = U));
        },
        l ? N : 0
      );
    } else
      n(12, g = void 0), n(16, X = void 0);
  }
  function Pe(l) {
    n(45, y = l), n(1, s = l.place_name), n(13, R = -1);
  }
  const _t = () => q.focus();
  function gt(l) {
    Oe[l ? "unshift" : "push"](() => {
      q = l, n(15, q);
    });
  }
  function yt() {
    s = this.value, n(1, s), n(11, oe), n(25, h);
  }
  const bt = () => n(11, oe = !0), wt = () => n(11, oe = !1), kt = () => Ae(), vt = () => {
    n(1, s = ""), q.focus();
  }, pt = () => n(0, A = !A), zt = (l) => n(13, R = l), Mt = (l) => Pe(l), Tt = () => n(13, R = -1), Ct = () => {
  };
  return t.$$set = (l) => {
    "class" in l && n(2, i = l.class), "apiKey" in l && n(23, m = l.apiKey), "bbox" in l && n(24, f = l.bbox), "clearButtonTitle" in l && n(3, a = l.clearButtonTitle), "clearOnBlur" in l && n(25, h = l.clearOnBlur), "collapsed" in l && n(4, v = l.collapsed), "country" in l && n(26, I = l.country), "debounceSearch" in l && n(27, N = l.debounceSearch), "enableReverse" in l && n(5, G = l.enableReverse), "errorMessage" in l && n(6, p = l.errorMessage), "filter" in l && n(28, k = l.filter), "flyTo" in l && n(29, B = l.flyTo), "fuzzyMatch" in l && n(30, C = l.fuzzyMatch), "language" in l && n(31, F = l.language), "limit" in l && n(32, z = l.limit), "mapController" in l && n(33, d = l.mapController), "minLength" in l && n(34, b = l.minLength), "noResultsMessage" in l && n(7, P = l.noResultsMessage), "placeholder" in l && n(8, M = l.placeholder), "proximity" in l && n(22, Z = l.proximity), "reverseActive" in l && n(0, A = l.reverseActive), "reverseButtonTitle" in l && n(9, ye = l.reverseButtonTitle), "searchValue" in l && n(1, s = l.searchValue), "showFullGeometry" in l && n(35, T = l.showFullGeometry), "showPlaceType" in l && n(10, J = l.showPlaceType), "showResultsWhileTyping" in l && n(36, te = l.showResultsWhileTyping), "trackProximity" in l && n(37, ze = l.trackProximity), "types" in l && n(38, Me = l.types), "zoom" in l && n(39, Te = l.zoom), "fetchParameters" in l && n(40, Se = l.fetchParameters), "$$scope" in l && n(47, u = l.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[1] & /*trackProximity*/
    64 && (ze || n(22, Z = void 0)), t.$$.dirty[0] & /*focused, clearOnBlur*/
    33556480 && setTimeout(() => {
      n(14, Re = oe), h && !oe && n(1, s = "");
    }), t.$$.dirty[0] & /*searchValue, listFeatures*/
    4098 && (s || (n(45, y = void 0), n(12, g = void 0), n(16, X = void 0), n(44, x = g))), t.$$.dirty[1] & /*showFullGeometry, picked*/
    16400 && T && y && !y.address && y.geometry.type === "Point" && Ie(y.id, { byId: !0 }).catch((l) => n(16, X = l)), t.$$.dirty[0] & /*flyTo*/
    536870912 | t.$$.dirty[1] & /*mapController, picked, zoom*/
    16644 && d && y && B && (!y.bbox || y.bbox[0] === y.bbox[2] && y.bbox[1] === y.bbox[3] ? d.flyTo(y.center, Te) : d.fitBounds(nt(y.bbox), 50), n(12, g = void 0), n(44, x = void 0), n(13, R = -1)), t.$$.dirty[0] & /*listFeatures*/
    4096 | t.$$.dirty[1] & /*markedFeatures*/
    8192 && x !== g && n(44, x = void 0), t.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    24580 && d && d.setMarkers(x, y), t.$$.dirty[0] & /*searchValue*/
    2 && n(13, R = -1), t.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    20481 | t.$$.dirty[1] & /*mapController, trackProximity*/
    68 && d && d.setEventHandler((l) => {
      switch (l.type) {
        case "mapClick":
          A && ht(l.coordinates);
          break;
        case "proximityChange":
          n(22, Z = ze ? l.proximity : void 0);
          break;
        case "markerClick":
          {
            const E = g == null ? void 0 : g.find((U) => U.id === l.id);
            E && Pe(E);
          }
          break;
        case "markerMouseEnter":
          n(13, R = Re ? (g == null ? void 0 : g.findIndex((E) => E.id === l.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          n(13, R = -1);
          break;
      }
    }), t.$$.dirty[0] & /*selectedItemIndex*/
    8192 | t.$$.dirty[1] & /*mapController*/
    4 && (d == null || d.setSelectedMarker(R)), t.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    12288 && n(46, r = g == null ? void 0 : g[R]), t.$$.dirty[0] & /*searchValue*/
    2 | t.$$.dirty[1] & /*mapController*/
    4) {
      const l = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(s);
      d == null || d.setReverseMarker(l ? [Number(l[1]), Number(l[2])] : void 0);
    }
    t.$$.dirty[1] & /*selected*/
    32768 && Y("select", r), t.$$.dirty[1] & /*picked*/
    16384 && Y("pick", y), t.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    20480 && Y("optionsVisibilityChange", Re && !!g), t.$$.dirty[0] & /*listFeatures*/
    4096 && Y("featuresListed", g), t.$$.dirty[1] & /*markedFeatures*/
    8192 && Y("featuresMarked", x), t.$$.dirty[0] & /*reverseActive*/
    1 && Y("reverseToggle", A), t.$$.dirty[0] & /*searchValue*/
    2 && Y("queryChange", s), t.$$.dirty[0] & /*reverseActive*/
    1 | t.$$.dirty[1] & /*mapController*/
    4 && d && d.indicateReverse(A);
  }, [
    A,
    s,
    i,
    a,
    v,
    G,
    p,
    P,
    M,
    ye,
    J,
    oe,
    g,
    R,
    Re,
    q,
    X,
    ne,
    Ke,
    mt,
    Ae,
    Pe,
    Z,
    m,
    f,
    h,
    I,
    N,
    k,
    B,
    C,
    F,
    z,
    d,
    b,
    T,
    te,
    ze,
    Me,
    Te,
    Se,
    ft,
    at,
    Ve,
    x,
    y,
    r,
    u,
    c,
    _t,
    gt,
    yt,
    bt,
    wt,
    kt,
    vt,
    pt,
    zt,
    Mt,
    Tt,
    Ct
  ];
}
class dn extends ge {
  constructor(e) {
    super(), _e(
      this,
      e,
      an,
      un,
      me,
      {
        class: 2,
        apiKey: 23,
        bbox: 24,
        clearButtonTitle: 3,
        clearOnBlur: 25,
        collapsed: 4,
        country: 26,
        debounceSearch: 27,
        enableReverse: 5,
        errorMessage: 6,
        filter: 28,
        flyTo: 29,
        fuzzyMatch: 30,
        language: 31,
        limit: 32,
        mapController: 33,
        minLength: 34,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 22,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 35,
        showPlaceType: 10,
        showResultsWhileTyping: 36,
        trackProximity: 37,
        types: 38,
        zoom: 39,
        fetchParameters: 40,
        focus: 41,
        blur: 42,
        setQuery: 43
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[41];
  }
  get blur() {
    return this.$$.ctx[42];
  }
  get setQuery() {
    return this.$$.ctx[43];
  }
}
const rt = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "querychange",
  "response",
  "reversetoggle",
  "select"
], hn = [
  "apiKey",
  "bbox",
  "clearButtonTitle",
  "clearOnBlur",
  "collapsed",
  "country",
  "debounceSearch",
  "enableReverse",
  "errorMessage",
  "filter",
  "fuzzyMatch",
  "language",
  "limit",
  "minLength",
  "noResultsMessage",
  "placeholder",
  "proximity",
  "reverseButtonTitle",
  "showFullGeometry",
  "showPlaceType",
  "showResultsWhileTyping",
  "trackProximity",
  "types",
  "zoom",
  "mapController"
];
function lt(t) {
  return "on" + t[0].toUpperCase() + t.slice(1);
}
const _n = Rt(function(e, n) {
  const r = qe(), c = qe(), u = { ...e };
  for (const i of rt)
    delete u[lt(i)];
  je(() => {
    if (!r.current)
      throw new Error();
    const i = new dn({
      target: r.current,
      props: u
    });
    return c.current = i, () => i.$destroy();
  }, []);
  for (const i of hn)
    je(() => {
      c.current && e[i] !== void 0 && c.current.$set({ [i]: e[i] });
    }, [e[i]]);
  for (const i of rt) {
    const m = e[lt(i)];
    je(() => {
      var f;
      (f = c.current) == null || f.$on(
        i,
        m ? (a) => {
          m(a.detail);
        } : void 0
      );
    }, [m]);
  }
  return Et(n, () => ({
    setQuery: (i, m = !0) => {
      var f;
      return (f = c.current) == null ? void 0 : f.setQuery(i, m);
    },
    focus: () => {
      var i;
      return (i = c.current) == null ? void 0 : i.focus();
    },
    blur: () => {
      var i;
      return (i = c.current) == null ? void 0 : i.blur();
    }
  })), Bt("div", { ref: r });
});
export {
  _n as GeocodingControl
};
