import { forwardRef as Et, useRef as Ke, useEffect as Pe, useImperativeHandle as zt, createElement as Bt } from "react";
function z() {
}
function Ct(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function it(t) {
  return t();
}
function Qe() {
  return /* @__PURE__ */ Object.create(null);
}
function X(t) {
  t.forEach(it);
}
function ct(t) {
  return typeof t == "function";
}
function ye(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Lt(t) {
  return Object.keys(t).length === 0;
}
function St(t, e, n, r) {
  if (t) {
    const c = ut(t, e, n, r);
    return t[0](c);
  }
}
function ut(t, e, n, r) {
  return t[1] && r ? Ct(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function At(t, e, n, r) {
  if (t[2] && r) {
    const c = t[2](r(n));
    if (e.dirty === void 0)
      return c;
    if (typeof c == "object") {
      const u = [], i = Math.max(e.dirty.length, c.length);
      for (let d = 0; d < i; d += 1)
        u[d] = e.dirty[d] | c[d];
      return u;
    }
    return e.dirty | c;
  }
  return e.dirty;
}
function Pt(t, e, n, r, c, u) {
  if (c) {
    const i = ut(e, n, r, u);
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
function qe(t) {
  return t ?? "";
}
function b(t, e) {
  t.appendChild(e);
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function j(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function It(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function E(t) {
  return document.createElement(t);
}
function se(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ne(t) {
  return document.createTextNode(t);
}
function q() {
  return ne(" ");
}
function I(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function jt(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function f(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Gt(t) {
  return Array.from(t.childNodes);
}
function he(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Ue(t, e) {
  t.value = e ?? "";
}
function J(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Ot(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const c = document.createEvent("CustomEvent");
  return c.initCustomEvent(t, n, r, e), c;
}
let me;
function de(t) {
  me = t;
}
function ot() {
  if (!me)
    throw new Error("Function called outside component initialization");
  return me;
}
function Dt(t) {
  ot().$$.on_destroy.push(t);
}
function Ft() {
  const t = ot();
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
const ue = [], Ie = [];
let oe = [];
const We = [], Vt = /* @__PURE__ */ Promise.resolve();
let je = !1;
function Ht() {
  je || (je = !0, Vt.then(st));
}
function Ge(t) {
  oe.push(t);
}
const Ne = /* @__PURE__ */ new Set();
let ce = 0;
function st() {
  if (ce !== 0)
    return;
  const t = me;
  do {
    try {
      for (; ce < ue.length; ) {
        const e = ue[ce];
        ce++, de(e), Kt(e.$$);
      }
    } catch (e) {
      throw ue.length = 0, ce = 0, e;
    }
    for (de(null), ue.length = 0, ce = 0; Ie.length; )
      Ie.pop()();
    for (let e = 0; e < oe.length; e += 1) {
      const n = oe[e];
      Ne.has(n) || (Ne.add(n), n());
    }
    oe.length = 0;
  } while (ue.length);
  for (; We.length; )
    We.pop()();
  je = !1, Ne.clear(), de(t);
}
function Kt(t) {
  if (t.fragment !== null) {
    t.update(), X(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ge);
  }
}
function Qt(t) {
  const e = [], n = [];
  oe.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), oe = e;
}
const xe = /* @__PURE__ */ new Set();
let te;
function Ze() {
  te = {
    r: 0,
    c: [],
    p: te
    // parent group
  };
}
function Je() {
  te.r || X(te.c), te = te.p;
}
function G(t, e) {
  t && t.i && (xe.delete(t), t.i(e));
}
function Q(t, e, n, r) {
  if (t && t.o) {
    if (xe.has(t))
      return;
    xe.add(t), te.c.push(() => {
      xe.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Ee(t) {
  t && t.c();
}
function _e(t, e, n, r) {
  const { fragment: c, after_update: u } = t.$$;
  c && c.m(e, n), r || Ge(() => {
    const i = t.$$.on_mount.map(it).filter(ct);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : X(i), t.$$.on_mount = [];
  }), u.forEach(Ge);
}
function ge(t, e) {
  const n = t.$$;
  n.fragment !== null && (Qt(n.after_update), X(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qt(t, e) {
  t.$$.dirty[0] === -1 && (ue.push(t), Ht(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function be(t, e, n, r, c, u, i, d = [-1]) {
  const o = me;
  de(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: z,
    not_equal: c,
    bound: Qe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Qe(),
    dirty: d,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  i && i(a.root);
  let R = !1;
  if (a.ctx = n ? n(t, e.props || {}, (x, B, ...C) => {
    const P = C.length ? C[0] : B;
    return a.ctx && c(a.ctx[x], a.ctx[x] = P) && (!a.skip_bound && a.bound[x] && a.bound[x](P), R && qt(t, x)), B;
  }) : [], a.update(), R = !0, X(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const x = Gt(e.target);
      a.fragment && a.fragment.l(x), x.forEach(j);
    } else
      a.fragment && a.fragment.c();
    e.intro && G(t.$$.fragment), _e(t, e.target, e.anchor, e.customElement), st();
  }
  de(o);
}
class we {
  $destroy() {
    ge(this, 1), this.$destroy = z;
  }
  $on(e, n) {
    if (!ct(n))
      return z;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !Lt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Ut(t) {
  let e, n;
  return {
    c() {
      e = se("svg"), n = se("path"), f(n, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), f(e, "viewBox", "0 0 60.006 21.412"), f(e, "width", "14"), f(e, "height", "20"), f(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      O(r, e, c), b(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && j(e);
    }
  };
}
class Wt extends we {
  constructor(e) {
    super(), be(this, e, null, Ut, ye, {});
  }
}
function Zt(t) {
  let e, n;
  return {
    c() {
      e = se("svg"), n = se("path"), f(n, "d", "M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"), f(e, "viewBox", "0 0 18 18"), f(e, "width", "16"), f(e, "height", "16"), f(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      O(r, e, c), b(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && j(e);
    }
  };
}
class Jt extends we {
  constructor(e) {
    super(), be(this, e, null, Zt, ye, {});
  }
}
function Xt(t) {
  let e;
  return {
    c() {
      e = E("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', f(e, "class", "svelte-7cmwmc");
    },
    m(n, r) {
      O(n, e, r);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && j(e);
    }
  };
}
class Yt extends we {
  constructor(e) {
    super(), be(this, e, null, Xt, ye, {});
  }
}
function $t(t) {
  let e, n;
  return {
    c() {
      e = se("svg"), n = se("path"), f(n, "d", "M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"), f(e, "viewBox", "0 0 18 18"), f(e, "xml:space", "preserve"), f(e, "width", "20"), f(e, "class", "svelte-en2qvf");
    },
    m(r, c) {
      O(r, e, c), b(e, n);
    },
    p: z,
    i: z,
    o: z,
    d(r) {
      r && j(e);
    }
  };
}
class en extends we {
  constructor(e) {
    super(), be(this, e, null, $t, ye, {});
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
      Ee(e.$$.fragment);
    },
    m(r, c) {
      _e(e, r, c), n = !0;
    },
    i(r) {
      n || (G(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Q(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ge(e, r);
    }
  };
}
function $e(t) {
  let e, n, r, c, u;
  return n = new Wt({}), {
    c() {
      e = E("button"), Ee(n.$$.fragment), f(e, "type", "button"), f(
        e,
        "title",
        /*reverseButtonTitle*/
        t[9]
      ), f(e, "class", "svelte-1xi1e9d"), J(
        e,
        "active",
        /*reverseActive*/
        t[0]
      );
    },
    m(i, d) {
      O(i, e, d), _e(n, e, null), r = !0, c || (u = I(
        e,
        "click",
        /*click_handler_2*/
        t[56]
      ), c = !0);
    },
    p(i, d) {
      (!r || d[0] & /*reverseButtonTitle*/
      512) && f(
        e,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), (!r || d[0] & /*reverseActive*/
      1) && J(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    i(i) {
      r || (G(n.$$.fragment, i), r = !0);
    },
    o(i) {
      Q(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && j(e), ge(n), c = !1, u();
    }
  };
}
function tn(t) {
  let e, n, r, c = (
    /*listFeatures*/
    t[12]
  ), u = [];
  for (let i = 0; i < c.length; i += 1)
    u[i] = tt(Xe(t, c, i));
  return {
    c() {
      e = E("ul");
      for (let i = 0; i < u.length; i += 1)
        u[i].c();
      f(e, "class", "svelte-1xi1e9d");
    },
    m(i, d) {
      O(i, e, d);
      for (let o = 0; o < u.length; o += 1)
        u[o] && u[o].m(e, null);
      n || (r = [
        I(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[59]
        ),
        I(
          e,
          "blur",
          /*blur_handler_1*/
          t[60]
        )
      ], n = !0);
    },
    p(i, d) {
      if (d[0] & /*selectedItemIndex, pick, listFeatures, showPlaceType*/
      2110464) {
        c = /*listFeatures*/
        i[12];
        let o;
        for (o = 0; o < c.length; o += 1) {
          const a = Xe(i, c, o);
          u[o] ? u[o].p(a, d) : (u[o] = tt(a), u[o].c(), u[o].m(e, null));
        }
        for (; o < u.length; o += 1)
          u[o].d(1);
        u.length = c.length;
      }
    },
    d(i) {
      i && j(e), It(u, i), n = !1, X(r);
    }
  };
}
function nn(t) {
  let e, n;
  return {
    c() {
      e = E("div"), n = ne(
        /*noResultsMessage*/
        t[7]
      ), f(e, "class", "no-results svelte-1xi1e9d");
    },
    m(r, c) {
      O(r, e, c), b(e, n);
    },
    p(r, c) {
      c[0] & /*noResultsMessage*/
      128 && he(
        n,
        /*noResultsMessage*/
        r[7]
      );
    },
    d(r) {
      r && j(e);
    }
  };
}
function rn(t) {
  let e = "", n;
  return {
    c() {
      n = ne(e);
    },
    m(r, c) {
      O(r, n, c);
    },
    p: z,
    d(r) {
      r && j(n);
    }
  };
}
function ln(t) {
  let e, n;
  return {
    c() {
      e = E("div"), n = ne(
        /*errorMessage*/
        t[6]
      ), f(e, "class", "error svelte-1xi1e9d");
    },
    m(r, c) {
      O(r, e, c), b(e, n);
    },
    p(r, c) {
      c[0] & /*errorMessage*/
      64 && he(
        n,
        /*errorMessage*/
        r[6]
      );
    },
    d(r) {
      r && j(e);
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
      e = E("span"), r = ne(n), f(e, "class", "line2 svelte-1xi1e9d");
    },
    m(i, d) {
      O(i, e, d), b(e, r);
    },
    p(i, d) {
      var o, a;
      d[0] & /*listFeatures*/
      4096 && n !== (n = /*feature*/
      (((a = (o = i[69].properties) == null ? void 0 : o.place_type_name) == null ? void 0 : a[0]) ?? /*feature*/
      i[69].place_type[0]) + "") && he(r, n);
    },
    d(i) {
      i && j(e);
    }
  };
}
function tt(t) {
  let e, n, r, c, u = (
    /*feature*/
    t[69].place_name.replace(/,.*/, "") + ""
  ), i, d, o, a = (
    /*feature*/
    t[69].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), R, x, B, C, P, D, h = (
    /*showPlaceType*/
    t[10] && et(t)
  );
  function F() {
    return (
      /*mouseenter_handler*/
      t[57](
        /*i*/
        t[71]
      )
    );
  }
  function U() {
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
      e = E("li"), n = E("span"), r = E("span"), c = E("span"), i = ne(u), d = q(), o = E("span"), R = ne(a), x = q(), h && h.c(), B = q(), f(c, "class", "primary svelte-1xi1e9d"), f(o, "class", "secondary svelte-1xi1e9d"), f(r, "class", "line1 svelte-1xi1e9d"), f(n, "class", "texts svelte-1xi1e9d"), f(e, "tabindex", "0"), f(e, "data-selected", C = /*selectedItemIndex*/
      t[13] === /*i*/
      t[71]), f(e, "class", "svelte-1xi1e9d"), J(
        e,
        "selected",
        /*selectedItemIndex*/
        t[13] === /*i*/
        t[71]
      );
    },
    m(_, m) {
      O(_, e, m), b(e, n), b(n, r), b(r, c), b(c, i), b(r, d), b(r, o), b(o, R), b(n, x), h && h.m(n, null), b(e, B), P || (D = [
        I(e, "mouseenter", F),
        I(e, "focus", U)
      ], P = !0);
    },
    p(_, m) {
      t = _, m[0] & /*listFeatures*/
      4096 && u !== (u = /*feature*/
      t[69].place_name.replace(/,.*/, "") + "") && he(i, u), m[0] & /*listFeatures*/
      4096 && a !== (a = /*feature*/
      t[69].place_name.replace(/[^,]*,?\s*/, "") + "") && he(R, a), /*showPlaceType*/
      t[10] ? h ? h.p(t, m) : (h = et(t), h.c(), h.m(n, null)) : h && (h.d(1), h = null), m[0] & /*selectedItemIndex*/
      8192 && C !== (C = /*selectedItemIndex*/
      t[13] === /*i*/
      t[71]) && f(e, "data-selected", C), m[0] & /*selectedItemIndex*/
      8192 && J(
        e,
        "selected",
        /*selectedItemIndex*/
        t[13] === /*i*/
        t[71]
      );
    },
    d(_) {
      _ && j(e), h && h.d(), P = !1, X(D);
    }
  };
}
function cn(t) {
  let e, n, r, c, u, i, d, o, a, R, x, B, C, P, D, h, F, U;
  c = new en({}), R = new Jt({});
  let _ = (
    /*abortController*/
    t[17] && Ye()
  ), m = (
    /*enableReverse*/
    t[5] === !0 && $e(t)
  );
  const g = (
    /*#slots*/
    t[48].default
  ), L = St(
    g,
    t,
    /*$$scope*/
    t[47],
    null
  );
  function fe(s, p) {
    var v, re;
    if (
      /*error*/
      s[16]
    )
      return ln;
    if (!/*focusedDelayed*/
    s[14])
      return rn;
    if (
      /*listFeatures*/
      ((v = s[12]) == null ? void 0 : v.length) === 0
    )
      return nn;
    if (
      /*focusedDelayed*/
      s[14] && /*listFeatures*/
      ((re = s[12]) != null && re.length)
    )
      return tn;
  }
  let K = fe(t), k = K && K(t);
  return {
    c() {
      e = E("form"), n = E("div"), r = E("button"), Ee(c.$$.fragment), u = q(), i = E("input"), d = q(), o = E("div"), a = E("button"), Ee(R.$$.fragment), x = q(), _ && _.c(), B = q(), m && m.c(), C = q(), L && L.c(), P = q(), k && k.c(), f(r, "type", "button"), f(r, "class", "svelte-1xi1e9d"), f(
        i,
        "placeholder",
        /*placeholder*/
        t[8]
      ), f(
        i,
        "aria-label",
        /*placeholder*/
        t[8]
      ), f(i, "class", "svelte-1xi1e9d"), f(a, "type", "button"), f(
        a,
        "title",
        /*clearButtonTitle*/
        t[3]
      ), f(a, "class", "svelte-1xi1e9d"), J(
        a,
        "displayable",
        /*searchValue*/
        t[1] !== ""
      ), f(o, "class", "clear-button-container svelte-1xi1e9d"), f(n, "class", "input-group svelte-1xi1e9d"), f(e, "tabindex", "0"), f(e, "class", D = qe(
        /*className*/
        t[2]
      ) + " svelte-1xi1e9d"), J(
        e,
        "can-collapse",
        /*collapsed*/
        t[4] && /*searchValue*/
        t[1] === ""
      );
    },
    m(s, p) {
      O(s, e, p), b(e, n), b(n, r), _e(c, r, null), b(n, u), b(n, i), t[50](i), Ue(
        i,
        /*searchValue*/
        t[1]
      ), b(n, d), b(n, o), b(o, a), _e(R, a, null), b(o, x), _ && _.m(o, null), b(n, B), m && m.m(n, null), b(n, C), L && L.m(n, null), b(e, P), k && k.m(e, null), h = !0, F || (U = [
        I(
          r,
          "click",
          /*click_handler*/
          t[49]
        ),
        I(
          i,
          "input",
          /*input_1_input_handler*/
          t[51]
        ),
        I(
          i,
          "focus",
          /*focus_handler*/
          t[52]
        ),
        I(
          i,
          "blur",
          /*blur_handler*/
          t[53]
        ),
        I(
          i,
          "keydown",
          /*handleKeyDown*/
          t[19]
        ),
        I(
          i,
          "input",
          /*input_handler*/
          t[54]
        ),
        I(
          a,
          "click",
          /*click_handler_1*/
          t[55]
        ),
        I(e, "submit", jt(
          /*handleOnSubmit*/
          t[18]
        ))
      ], F = !0);
    },
    p(s, p) {
      (!h || p[0] & /*placeholder*/
      256) && f(
        i,
        "placeholder",
        /*placeholder*/
        s[8]
      ), (!h || p[0] & /*placeholder*/
      256) && f(
        i,
        "aria-label",
        /*placeholder*/
        s[8]
      ), p[0] & /*searchValue*/
      2 && i.value !== /*searchValue*/
      s[1] && Ue(
        i,
        /*searchValue*/
        s[1]
      ), (!h || p[0] & /*clearButtonTitle*/
      8) && f(
        a,
        "title",
        /*clearButtonTitle*/
        s[3]
      ), (!h || p[0] & /*searchValue*/
      2) && J(
        a,
        "displayable",
        /*searchValue*/
        s[1] !== ""
      ), /*abortController*/
      s[17] ? _ ? p[0] & /*abortController*/
      131072 && G(_, 1) : (_ = Ye(), _.c(), G(_, 1), _.m(o, null)) : _ && (Ze(), Q(_, 1, 1, () => {
        _ = null;
      }), Je()), /*enableReverse*/
      s[5] === !0 ? m ? (m.p(s, p), p[0] & /*enableReverse*/
      32 && G(m, 1)) : (m = $e(s), m.c(), G(m, 1), m.m(n, C)) : m && (Ze(), Q(m, 1, 1, () => {
        m = null;
      }), Je()), L && L.p && (!h || p[1] & /*$$scope*/
      65536) && Pt(
        L,
        g,
        s,
        /*$$scope*/
        s[47],
        h ? At(
          g,
          /*$$scope*/
          s[47],
          p,
          null
        ) : Nt(
          /*$$scope*/
          s[47]
        ),
        null
      ), K === (K = fe(s)) && k ? k.p(s, p) : (k && k.d(1), k = K && K(s), k && (k.c(), k.m(e, null))), (!h || p[0] & /*className*/
      4 && D !== (D = qe(
        /*className*/
        s[2]
      ) + " svelte-1xi1e9d")) && f(e, "class", D), (!h || p[0] & /*className, collapsed, searchValue*/
      22) && J(
        e,
        "can-collapse",
        /*collapsed*/
        s[4] && /*searchValue*/
        s[1] === ""
      );
    },
    i(s) {
      h || (G(c.$$.fragment, s), G(R.$$.fragment, s), G(_), G(m), G(L, s), h = !0);
    },
    o(s) {
      Q(c.$$.fragment, s), Q(R.$$.fragment, s), Q(_), Q(m), Q(L, s), h = !1;
    },
    d(s) {
      s && j(e), ge(c), t[50](null), ge(R), _ && _.d(), m && m.d(), L && L.d(s), k && k.d(), F = !1, X(U);
    }
  };
}
function un(t, e, n) {
  const r = e[1], c = e[0], u = r - c;
  return t === r && n ? t : ((t - c) % u + u) % u + c;
}
function nt(t) {
  let e = [...t];
  return e[2] < e[0] && (e[2] += 360), e;
}
function on(t, e, n) {
  let r, { $$slots: c = {}, $$scope: u } = e, { class: i = void 0 } = e, { apiKey: d } = e, { bbox: o = void 0 } = e, { clearButtonTitle: a = "clear" } = e, { clearOnBlur: R = !1 } = e, { collapsed: x = !1 } = e, { country: B = void 0 } = e, { debounceSearch: C = 200 } = e, { enableReverse: P = !1 } = e, { errorMessage: D = "Searching failed" } = e, { filter: h = () => !0 } = e, { flyTo: F = !0 } = e, { fuzzyMatch: U = !0 } = e, { language: _ = void 0 } = e, { limit: m = void 0 } = e, { mapController: g = void 0 } = e, { minLength: L = 2 } = e, { noResultsMessage: fe = "No results found" } = e, { placeholder: K = "Search" } = e, { proximity: k = void 0 } = e, { reverseActive: s = P === "always" } = e, { reverseButtonTitle: p = "toggle reverse geocoding" } = e, { searchValue: v = "" } = e, { showFullGeometry: re = !0 } = e, { showPlaceType: Oe = !1 } = e, { showResultsWhileTyping: ke = !0 } = e, { trackProximity: ve = !0 } = e, { types: Me = void 0 } = e, { zoom: Te = 16 } = e, { fetchParameters: ze = {} } = e;
  function ft() {
    V.focus();
  }
  function at() {
    V.blur();
  }
  function De(l, T = !0) {
    n(1, v = l), T ? (n(13, M = -1), Ve()) : (Ce(), setTimeout(() => {
      V.focus(), V.select();
    }));
  }
  let le = !1, y, S, w, Fe = "", V, M = -1, W, pe = [], Y, ie, Re;
  const Z = Ft();
  Dt(() => {
    g && (g.setEventHandler(void 0), g.indicateReverse(!1), g.setSelectedMarker(-1), g.setMarkers(void 0, void 0));
  });
  function Ve(l) {
    if (ie && (clearTimeout(ie), ie = void 0), M > -1 && y)
      n(45, w = y[M]), n(1, v = w.place_name.replace(/,.*/, "")), n(16, W = void 0), n(44, S = void 0), n(13, M = -1);
    else if (v) {
      const T = l || !He();
      Be(v, { exact: !0 }).then(() => {
        n(44, S = y), n(45, w = void 0), T && dt();
      }).catch((H) => n(16, W = H));
    }
  }
  function He() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(v);
  }
  async function Be(l, { byId: T = !1, exact: H = !1 } = {}) {
    n(16, W = void 0);
    const ae = He(), N = new URLSearchParams();
    _ != null && N.set("language", Array.isArray(_) ? _.join(",") : _), Me && N.set("types", Me.join(",")), ae || (o && N.set("bbox", o.map((ee) => ee.toFixed(6)).join(",")), B && N.set("country", Array.isArray(B) ? B.join(",") : B)), T || (k && N.set("proximity", k.map((ee) => ee.toFixed(6)).join(",")), (H || !ke) && N.set("autocomplete", "false"), N.set("fuzzyMatch", String(U))), m !== void 0 && N.set("limit", String(m)), N.set("key", d);
    const $ = "https://api.maptiler.com/geocoding/" + encodeURIComponent(l) + ".json?" + N.toString();
    if ($ === Fe) {
      T ? (n(12, y = void 0), n(45, w = pe[0])) : n(12, y = pe);
      return;
    }
    Fe = $, Y == null || Y.abort();
    const A = new AbortController();
    n(17, Y = A);
    let Se;
    try {
      Se = await fetch($, { signal: A.signal, ...ze }).finally(() => {
        A === Y && n(17, Y = void 0);
      });
    } catch (ee) {
      if (ee && typeof ee == "object" && ee.name === "AbortError")
        return;
      throw new Error();
    }
    if (!Se.ok)
      throw new Error();
    const Ae = await Se.json();
    Z("response", { url: $, featureCollection: Ae }), T ? (n(12, y = void 0), n(45, w = Ae.features[0]), pe = [w]) : (n(12, y = Ae.features.filter(h)), pe = y, ae && V.focus());
  }
  function dt() {
    var H, ae, N, $;
    if (!(S != null && S.length) || !F)
      return;
    const l = [180, 90, -180, -90], T = !S.some((A) => !A.matching_text);
    for (const A of S)
      (T || !A.matching_text) && (l[0] = Math.min(l[0], ((H = A.bbox) == null ? void 0 : H[0]) ?? A.center[0]), l[1] = Math.min(l[1], ((ae = A.bbox) == null ? void 0 : ae[1]) ?? A.center[1]), l[2] = Math.max(l[2], ((N = A.bbox) == null ? void 0 : N[2]) ?? A.center[0]), l[3] = Math.max(l[3], (($ = A.bbox) == null ? void 0 : $[3]) ?? A.center[1]));
    g && S.length > 0 && (w && l[0] === l[2] && l[1] === l[3] ? g.flyTo(w.center, Te) : g.fitBounds(nt(l), 50));
  }
  function ht(l) {
    n(0, s = P === "always"), De(un(l[0], [-180, 180], !0).toFixed(6) + "," + l[1].toFixed(6));
  }
  function mt(l) {
    if (!y)
      return;
    let T = l.key === "ArrowDown" ? 1 : l.key === "ArrowUp" ? -1 : 0;
    T ? (M === -1 && T === -1 && n(13, M = y.length), n(13, M += T), M >= y.length && n(13, M = -1), l.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(l.key) && n(13, M = -1);
  }
  function Ce(l = !0) {
    if (ke && v.length > L) {
      ie && clearTimeout(ie);
      const T = v;
      ie = window.setTimeout(
        () => {
          Be(T).catch((H) => n(16, W = H));
        },
        l ? C : 0
      );
    } else
      n(12, y = void 0), n(16, W = void 0);
  }
  function Le(l) {
    n(45, w = l), n(1, v = l.place_name), n(13, M = -1);
  }
  const _t = () => V.focus();
  function gt(l) {
    Ie[l ? "unshift" : "push"](() => {
      V = l, n(15, V);
    });
  }
  function yt() {
    v = this.value, n(1, v), n(11, le), n(25, R);
  }
  const bt = () => n(11, le = !0), wt = () => n(11, le = !1), kt = () => Ce(), vt = () => {
    n(1, v = ""), V.focus();
  }, Mt = () => n(0, s = !s), Tt = (l) => n(13, M = l), pt = (l) => Le(l), Rt = () => n(13, M = -1), xt = () => {
  };
  return t.$$set = (l) => {
    "class" in l && n(2, i = l.class), "apiKey" in l && n(23, d = l.apiKey), "bbox" in l && n(24, o = l.bbox), "clearButtonTitle" in l && n(3, a = l.clearButtonTitle), "clearOnBlur" in l && n(25, R = l.clearOnBlur), "collapsed" in l && n(4, x = l.collapsed), "country" in l && n(26, B = l.country), "debounceSearch" in l && n(27, C = l.debounceSearch), "enableReverse" in l && n(5, P = l.enableReverse), "errorMessage" in l && n(6, D = l.errorMessage), "filter" in l && n(28, h = l.filter), "flyTo" in l && n(29, F = l.flyTo), "fuzzyMatch" in l && n(30, U = l.fuzzyMatch), "language" in l && n(31, _ = l.language), "limit" in l && n(32, m = l.limit), "mapController" in l && n(33, g = l.mapController), "minLength" in l && n(34, L = l.minLength), "noResultsMessage" in l && n(7, fe = l.noResultsMessage), "placeholder" in l && n(8, K = l.placeholder), "proximity" in l && n(22, k = l.proximity), "reverseActive" in l && n(0, s = l.reverseActive), "reverseButtonTitle" in l && n(9, p = l.reverseButtonTitle), "searchValue" in l && n(1, v = l.searchValue), "showFullGeometry" in l && n(35, re = l.showFullGeometry), "showPlaceType" in l && n(10, Oe = l.showPlaceType), "showResultsWhileTyping" in l && n(36, ke = l.showResultsWhileTyping), "trackProximity" in l && n(37, ve = l.trackProximity), "types" in l && n(38, Me = l.types), "zoom" in l && n(39, Te = l.zoom), "fetchParameters" in l && n(40, ze = l.fetchParameters), "$$scope" in l && n(47, u = l.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[1] & /*trackProximity*/
    64 && (ve || n(22, k = void 0)), t.$$.dirty[0] & /*focused, clearOnBlur*/
    33556480 && setTimeout(() => {
      n(14, Re = le), R && !le && n(1, v = "");
    }), t.$$.dirty[0] & /*searchValue, listFeatures*/
    4098 && (v || (n(45, w = void 0), n(12, y = void 0), n(16, W = void 0), n(44, S = y))), t.$$.dirty[1] & /*showFullGeometry, picked*/
    16400 && re && w && !w.address && w.geometry.type === "Point" && Be(w.id, { byId: !0 }).catch((l) => n(16, W = l)), t.$$.dirty[0] & /*flyTo*/
    536870912 | t.$$.dirty[1] & /*mapController, picked, zoom*/
    16644 && g && w && F && (!w.bbox || w.bbox[0] === w.bbox[2] && w.bbox[1] === w.bbox[3] ? g.flyTo(w.center, Te) : g.fitBounds(nt(w.bbox), 50), n(12, y = void 0), n(44, S = void 0), n(13, M = -1)), t.$$.dirty[0] & /*listFeatures*/
    4096 | t.$$.dirty[1] & /*markedFeatures*/
    8192 && S !== y && n(44, S = void 0), t.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    24580 && g && g.setMarkers(S, w), t.$$.dirty[0] & /*searchValue*/
    2 && n(13, M = -1), t.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    20481 | t.$$.dirty[1] & /*mapController, trackProximity*/
    68 && g && g.setEventHandler((l) => {
      switch (l.type) {
        case "mapClick":
          s && ht(l.coordinates);
          break;
        case "proximityChange":
          n(22, k = ve ? l.proximity : void 0);
          break;
        case "markerClick":
          {
            const T = y == null ? void 0 : y.find((H) => H.id === l.id);
            T && Le(T);
          }
          break;
        case "markerMouseEnter":
          n(13, M = Re ? (y == null ? void 0 : y.findIndex((T) => T.id === l.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          n(13, M = -1);
          break;
      }
    }), t.$$.dirty[0] & /*selectedItemIndex*/
    8192 | t.$$.dirty[1] & /*mapController*/
    4 && (g == null || g.setSelectedMarker(M)), t.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    12288 && n(46, r = y == null ? void 0 : y[M]), t.$$.dirty[0] & /*searchValue*/
    2 | t.$$.dirty[1] & /*mapController*/
    4) {
      const l = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(v);
      g == null || g.setReverseMarker(l ? [Number(l[1]), Number(l[2])] : void 0);
    }
    t.$$.dirty[1] & /*selected*/
    32768 && Z("select", r), t.$$.dirty[1] & /*picked*/
    16384 && Z("pick", w), t.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    20480 && Z("optionsVisibilityChange", Re && !!y), t.$$.dirty[0] & /*listFeatures*/
    4096 && Z("featuresListed", y), t.$$.dirty[1] & /*markedFeatures*/
    8192 && Z("featuresMarked", S), t.$$.dirty[0] & /*reverseActive*/
    1 && Z("reverseToggle", s), t.$$.dirty[0] & /*searchValue*/
    2 && Z("queryChange", v), t.$$.dirty[0] & /*reverseActive*/
    1 | t.$$.dirty[1] & /*mapController*/
    4 && g && g.indicateReverse(s);
  }, [
    s,
    v,
    i,
    a,
    x,
    P,
    D,
    fe,
    K,
    p,
    Oe,
    le,
    y,
    M,
    Re,
    V,
    W,
    Y,
    Ve,
    mt,
    Ce,
    Le,
    k,
    d,
    o,
    R,
    B,
    C,
    h,
    F,
    U,
    _,
    m,
    g,
    L,
    re,
    ke,
    ve,
    Me,
    Te,
    ze,
    ft,
    at,
    De,
    S,
    w,
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
    Mt,
    Tt,
    pt,
    Rt,
    xt
  ];
}
class sn extends we {
  constructor(e) {
    super(), be(
      this,
      e,
      on,
      cn,
      ye,
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
], fn = [
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
const dn = Et(function(e, n) {
  const r = Ke(), c = Ke(), u = { ...e };
  for (const i of rt)
    delete u[lt(i)];
  Pe(() => {
    if (!r.current)
      throw new Error();
    const i = new sn({
      target: r.current,
      props: u
    });
    return c.current = i, () => i.$destroy();
  }, []);
  for (const i of fn)
    Pe(() => {
      c.current && e[i] !== void 0 && c.current.$set({ [i]: e[i] });
    }, [e[i]]);
  for (const i of rt) {
    const d = e[lt(i)];
    Pe(() => {
      var o;
      (o = c.current) == null || o.$on(
        i,
        d ? (a) => {
          d(a.detail);
        } : void 0
      );
    }, [d]);
  }
  return zt(n, () => ({
    setQuery: (i, d = !0) => {
      var o;
      return (o = c.current) == null ? void 0 : o.setQuery(i, d);
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
  dn as GeocodingControl
};
//# sourceMappingURL=react.js.map
