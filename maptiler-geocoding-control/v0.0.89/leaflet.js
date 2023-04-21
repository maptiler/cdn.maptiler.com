var ea = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var zn = (r, t, e) => (ea(r, t, "read from private field"), e ? e.call(r) : t.get(r)), hs = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, xo = (r, t, e, n) => (ea(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
import * as rr from "leaflet";
function _t() {
}
function ll(r, t) {
  for (const e in t)
    r[e] = t[e];
  return r;
}
function Wa(r) {
  return r();
}
function na() {
  return /* @__PURE__ */ Object.create(null);
}
function Br(r) {
  r.forEach(Wa);
}
function ja(r) {
  return typeof r == "function";
}
function Gr(r, t) {
  return r != r ? t == t : r !== t || r && typeof r == "object" || typeof r == "function";
}
function cl(r) {
  return Object.keys(r).length === 0;
}
function fl(r, t, e, n) {
  if (r) {
    const i = Ka(r, t, e, n);
    return r[0](i);
  }
}
function Ka(r, t, e, n) {
  return r[1] && n ? ll(e.ctx.slice(), r[1](n(t))) : e.ctx;
}
function hl(r, t, e, n) {
  if (r[2] && n) {
    const i = r[2](n(e));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        o[a] = t.dirty[a] | i[a];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function gl(r, t, e, n, i, o) {
  if (i) {
    const s = Ka(t, e, n, o);
    r.p(s, i);
  }
}
function pl(r) {
  if (r.ctx.length > 32) {
    const t = [], e = r.ctx.length / 32;
    for (let n = 0; n < e; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function ra(r) {
  return r ?? "";
}
function rt(r, t) {
  r.appendChild(t);
}
function Be(r, t, e) {
  r.insertBefore(t, e || null);
}
function Pe(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function dl(r, t) {
  for (let e = 0; e < r.length; e += 1)
    r[e] && r[e].d(t);
}
function kt(r) {
  return document.createElement(r);
}
function jn(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function jr(r) {
  return document.createTextNode(r);
}
function In() {
  return jr(" ");
}
function Re(r, t, e, n) {
  return r.addEventListener(t, e, n), () => r.removeEventListener(t, e, n);
}
function vl(r) {
  return function(t) {
    return t.preventDefault(), r.call(this, t);
  };
}
function D(r, t, e) {
  e == null ? r.removeAttribute(t) : r.getAttribute(t) !== e && r.setAttribute(t, e);
}
function yl(r) {
  return Array.from(r.childNodes);
}
function Qi(r, t) {
  t = "" + t, r.data !== t && (r.data = t);
}
function ia(r, t) {
  r.value = t ?? "";
}
function nn(r, t, e) {
  r.classList[e ? "add" : "remove"](t);
}
function ml(r, t, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(r, e, n, t), i;
}
let Ji;
function ji(r) {
  Ji = r;
}
function Qa() {
  if (!Ji)
    throw new Error("Function called outside component initialization");
  return Ji;
}
function _l(r) {
  Qa().$$.on_destroy.push(r);
}
function El() {
  const r = Qa();
  return (t, e, { cancelable: n = !1 } = {}) => {
    const i = r.$$.callbacks[t];
    if (i) {
      const o = ml(t, e, { cancelable: n });
      return i.slice().forEach((s) => {
        s.call(r, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function oa(r, t) {
  const e = r.$$.callbacks[t.type];
  e && e.slice().forEach((n) => n.call(this, t));
}
const pi = [], ms = [];
let vi = [];
const sa = [], Il = /* @__PURE__ */ Promise.resolve();
let _s = !1;
function Cl() {
  _s || (_s = !0, Il.then(Ja));
}
function Es(r) {
  vi.push(r);
}
const gs = /* @__PURE__ */ new Set();
let gi = 0;
function Ja() {
  if (gi !== 0)
    return;
  const r = Ji;
  do {
    try {
      for (; gi < pi.length; ) {
        const t = pi[gi];
        gi++, ji(t), Nl(t.$$);
      }
    } catch (t) {
      throw pi.length = 0, gi = 0, t;
    }
    for (ji(null), pi.length = 0, gi = 0; ms.length; )
      ms.pop()();
    for (let t = 0; t < vi.length; t += 1) {
      const e = vi[t];
      gs.has(e) || (gs.add(e), e());
    }
    vi.length = 0;
  } while (pi.length);
  for (; sa.length; )
    sa.pop()();
  _s = !1, gs.clear(), ji(r);
}
function Nl(r) {
  if (r.fragment !== null) {
    r.update(), Br(r.before_update);
    const t = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, t), r.after_update.forEach(Es);
  }
}
function xl(r) {
  const t = [], e = [];
  vi.forEach((n) => r.indexOf(n) === -1 ? t.push(n) : e.push(n)), e.forEach((n) => n()), vi = t;
}
const Ro = /* @__PURE__ */ new Set();
let Hr;
function Oo() {
  Hr = {
    r: 0,
    c: [],
    p: Hr
    // parent group
  };
}
function Do() {
  Hr.r || Br(Hr.c), Hr = Hr.p;
}
function Dt(r, t) {
  r && r.i && (Ro.delete(r), r.i(t));
}
function ae(r, t, e, n) {
  if (r && r.o) {
    if (Ro.has(r))
      return;
    Ro.add(r), Hr.c.push(() => {
      Ro.delete(r), n && (e && r.d(1), n());
    }), r.o(t);
  } else
    n && n();
}
function wr(r) {
  r && r.c();
}
function ar(r, t, e, n) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(t, e), n || Es(() => {
    const s = r.$$.on_mount.map(Wa).filter(ja);
    r.$$.on_destroy ? r.$$.on_destroy.push(...s) : Br(s), r.$$.on_mount = [];
  }), o.forEach(Es);
}
function ur(r, t) {
  const e = r.$$;
  e.fragment !== null && (xl(e.after_update), Br(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Sl(r, t) {
  r.$$.dirty[0] === -1 && (pi.push(r), Cl(), r.$$.dirty.fill(0)), r.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function kr(r, t, e, n, i, o, s, a = [-1]) {
  const u = Ji;
  ji(r);
  const l = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: _t,
    not_equal: i,
    bound: na(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: na(),
    dirty: a,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  s && s(l.root);
  let c = !1;
  if (l.ctx = e ? e(r, t.props || {}, (f, h, ...g) => {
    const p = g.length ? g[0] : h;
    return l.ctx && i(l.ctx[f], l.ctx[f] = p) && (!l.skip_bound && l.bound[f] && l.bound[f](p), c && Sl(r, f)), h;
  }) : [], l.update(), c = !0, Br(l.before_update), l.fragment = n ? n(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = yl(t.target);
      l.fragment && l.fragment.l(f), f.forEach(Pe);
    } else
      l.fragment && l.fragment.c();
    t.intro && Dt(r.$$.fragment), ar(r, t.target, t.anchor, t.customElement), Ja();
  }
  ji(u);
}
class zr {
  $destroy() {
    ur(this, 1), this.$destroy = _t;
  }
  $on(t, e) {
    if (!ja(e))
      return _t;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const i = n.indexOf(e);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !cl(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function wl(r) {
  let t, e;
  return {
    c() {
      t = jn("svg"), e = jn("path"), D(e, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), D(t, "viewBox", "0 0 14 14"), D(t, "width", "13"), D(t, "height", "13"), D(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Be(n, t, i), rt(t, e);
    },
    p: _t,
    i: _t,
    o: _t,
    d(n) {
      n && Pe(t);
    }
  };
}
class Za extends zr {
  constructor(t) {
    super(), kr(this, t, null, wl, Gr, {});
  }
}
function Ll(r) {
  let t, e;
  return {
    c() {
      t = jn("svg"), e = jn("path"), D(e, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), D(t, "viewBox", "0 0 30 30"), D(t, "fill", "none"), D(t, "xmlns", "http://www.w3.org/2000/svg"), D(t, "class", "svelte-d2loi5");
    },
    m(n, i) {
      Be(n, t, i), rt(t, e);
    },
    p: _t,
    i: _t,
    o: _t,
    d(n) {
      n && Pe(t);
    }
  };
}
class $a extends zr {
  constructor(t) {
    super(), kr(this, t, null, Ll, Gr, {});
  }
}
function aa(r) {
  var i, o;
  let t, e = (
    /*feature*/
    (((o = (i = r[0].properties) == null ? void 0 : i.place_type_name) == null ? void 0 : o[0]) ?? /*feature*/
    r[0].place_type[0]) + ""
  ), n;
  return {
    c() {
      t = kt("span"), n = jr(e), D(t, "class", "line2 svelte-ewziy4");
    },
    m(s, a) {
      Be(s, t, a), rt(t, n);
    },
    p(s, a) {
      var u, l;
      a & /*feature*/
      1 && e !== (e = /*feature*/
      (((l = (u = s[0].properties) == null ? void 0 : u.place_type_name) == null ? void 0 : l[0]) ?? /*feature*/
      s[0].place_type[0]) + "") && Qi(n, e);
    },
    d(s) {
      s && Pe(t);
    }
  };
}
function bl(r) {
  let t, e, n, i, o = (
    /*feature*/
    r[0].place_name.replace(/,.*/, "") + ""
  ), s, a, u, l = (
    /*feature*/
    r[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), c, f, h, g, p = (
    /*showPlaceType*/
    r[2] && aa(r)
  );
  return {
    c() {
      t = kt("li"), e = kt("span"), n = kt("span"), i = kt("span"), s = jr(o), a = In(), u = kt("span"), c = jr(l), f = In(), p && p.c(), D(i, "class", "primary svelte-ewziy4"), D(u, "class", "secondary svelte-ewziy4"), D(n, "class", "svelte-ewziy4"), D(e, "class", "texts svelte-ewziy4"), D(t, "tabindex", "0"), D(
        t,
        "data-selected",
        /*selected*/
        r[1]
      ), D(t, "class", "svelte-ewziy4"), nn(
        t,
        "selected",
        /*selected*/
        r[1]
      );
    },
    m(y, d) {
      Be(y, t, d), rt(t, e), rt(e, n), rt(n, i), rt(i, s), rt(n, a), rt(n, u), rt(u, c), rt(e, f), p && p.m(e, null), h || (g = [
        Re(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          r[3]
        ),
        Re(
          t,
          "focus",
          /*focus_handler*/
          r[4]
        )
      ], h = !0);
    },
    p(y, [d]) {
      d & /*feature*/
      1 && o !== (o = /*feature*/
      y[0].place_name.replace(/,.*/, "") + "") && Qi(s, o), d & /*feature*/
      1 && l !== (l = /*feature*/
      y[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Qi(c, l), /*showPlaceType*/
      y[2] ? p ? p.p(y, d) : (p = aa(y), p.c(), p.m(e, null)) : p && (p.d(1), p = null), d & /*selected*/
      2 && D(
        t,
        "data-selected",
        /*selected*/
        y[1]
      ), d & /*selected*/
      2 && nn(
        t,
        "selected",
        /*selected*/
        y[1]
      );
    },
    i: _t,
    o: _t,
    d(y) {
      y && Pe(t), p && p.d(), h = !1, Br(g);
    }
  };
}
function Pl(r, t, e) {
  let { feature: n } = t, { selected: i = !1 } = t, { showPlaceType: o = !1 } = t;
  function s(u) {
    oa.call(this, r, u);
  }
  function a(u) {
    oa.call(this, r, u);
  }
  return r.$$set = (u) => {
    "feature" in u && e(0, n = u.feature), "selected" in u && e(1, i = u.selected), "showPlaceType" in u && e(2, o = u.showPlaceType);
  }, [n, i, o, s, a];
}
class Rl extends zr {
  constructor(t) {
    super(), kr(this, t, Pl, bl, Gr, {
      feature: 0,
      selected: 1,
      showPlaceType: 2
    });
  }
}
function Ol(r) {
  let t;
  return {
    c() {
      t = kt("div"), t.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', D(t, "class", "svelte-7cmwmc");
    },
    m(e, n) {
      Be(e, t, n);
    },
    p: _t,
    i: _t,
    o: _t,
    d(e) {
      e && Pe(t);
    }
  };
}
class Dl extends zr {
  constructor(t) {
    super(), kr(this, t, null, Ol, Gr, {});
  }
}
function Tl(r) {
  let t, e;
  return {
    c() {
      t = jn("svg"), e = jn("path"), D(e, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), D(t, "viewBox", "0 0 60.006 21.412"), D(t, "width", "14"), D(t, "height", "20"), D(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Be(n, t, i), rt(t, e);
    },
    p: _t,
    i: _t,
    o: _t,
    d(n) {
      n && Pe(t);
    }
  };
}
class Ml extends zr {
  constructor(t) {
    super(), kr(this, t, null, Tl, Gr, {});
  }
}
function Al(r) {
  let t, e;
  return {
    c() {
      t = jn("svg"), e = jn("path"), D(e, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), D(t, "width", "14"), D(t, "height", "14"), D(t, "viewBox", "0 0 15 15"), D(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Be(n, t, i), rt(t, e);
    },
    p: _t,
    i: _t,
    o: _t,
    d(n) {
      n && Pe(t);
    }
  };
}
class Fl extends zr {
  constructor(t) {
    super(), kr(this, t, null, Al, Gr, {});
  }
}
function ua(r, t, e) {
  const n = r.slice();
  return n[70] = t[e], n[72] = e, n;
}
function la(r) {
  let t, e;
  return t = new Dl({}), {
    c() {
      wr(t.$$.fragment);
    },
    m(n, i) {
      ar(t, n, i), e = !0;
    },
    i(n) {
      e || (Dt(t.$$.fragment, n), e = !0);
    },
    o(n) {
      ae(t.$$.fragment, n), e = !1;
    },
    d(n) {
      ur(t, n);
    }
  };
}
function ca(r) {
  let t, e, n, i, o;
  return e = new Ml({}), {
    c() {
      t = kt("button"), wr(e.$$.fragment), D(t, "type", "button"), D(
        t,
        "title",
        /*reverseButtonTitle*/
        r[9]
      ), D(t, "class", "svelte-1r7dvt7"), nn(
        t,
        "active",
        /*reverseActive*/
        r[0]
      );
    },
    m(s, a) {
      Be(s, t, a), ar(e, t, null), n = !0, i || (o = Re(
        t,
        "click",
        /*click_handler_2*/
        r[56]
      ), i = !0);
    },
    p(s, a) {
      (!n || a[0] & /*reverseButtonTitle*/
      512) && D(
        t,
        "title",
        /*reverseButtonTitle*/
        s[9]
      ), (!n || a[0] & /*reverseActive*/
      1) && nn(
        t,
        "active",
        /*reverseActive*/
        s[0]
      );
    },
    i(s) {
      n || (Dt(e.$$.fragment, s), n = !0);
    },
    o(s) {
      ae(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Pe(t), ur(e), i = !1, o();
    }
  };
}
function Bl(r) {
  let t, e, n, i, o = (
    /*listFeatures*/
    r[12]
  ), s = [];
  for (let u = 0; u < o.length; u += 1)
    s[u] = fa(ua(r, o, u));
  const a = (u) => ae(s[u], 1, 1, () => {
    s[u] = null;
  });
  return {
    c() {
      t = kt("ul");
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      D(t, "class", "svelte-1r7dvt7");
    },
    m(u, l) {
      Be(u, t, l);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(t, null);
      e = !0, n || (i = [
        Re(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          r[60]
        ),
        Re(
          t,
          "blur",
          /*blur_handler_1*/
          r[61]
        )
      ], n = !0);
    },
    p(u, l) {
      if (l[0] & /*listFeatures, showPlaceType, selectedItemIndex, pick*/
      2110464) {
        o = /*listFeatures*/
        u[12];
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = ua(u, o, c);
          s[c] ? (s[c].p(f, l), Dt(s[c], 1)) : (s[c] = fa(f), s[c].c(), Dt(s[c], 1), s[c].m(t, null));
        }
        for (Oo(), c = o.length; c < s.length; c += 1)
          a(c);
        Do();
      }
    },
    i(u) {
      if (!e) {
        for (let l = 0; l < o.length; l += 1)
          Dt(s[l]);
        e = !0;
      }
    },
    o(u) {
      s = s.filter(Boolean);
      for (let l = 0; l < s.length; l += 1)
        ae(s[l]);
      e = !1;
    },
    d(u) {
      u && Pe(t), dl(s, u), n = !1, Br(i);
    }
  };
}
function Gl(r) {
  let t, e, n, i, o, s;
  return e = new $a({}), {
    c() {
      t = kt("div"), wr(e.$$.fragment), n = In(), i = kt("div"), o = jr(
        /*noResultsMessage*/
        r[7]
      ), D(i, "class", "svelte-1r7dvt7"), D(t, "class", "no-results svelte-1r7dvt7");
    },
    m(a, u) {
      Be(a, t, u), ar(e, t, null), rt(t, n), rt(t, i), rt(i, o), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*noResultsMessage*/
      128) && Qi(
        o,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      s || (Dt(e.$$.fragment, a), s = !0);
    },
    o(a) {
      ae(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Pe(t), ur(e);
    }
  };
}
function kl(r) {
  let t = "", e;
  return {
    c() {
      e = jr(t);
    },
    m(n, i) {
      Be(n, e, i);
    },
    p: _t,
    i: _t,
    o: _t,
    d(n) {
      n && Pe(e);
    }
  };
}
function zl(r) {
  let t, e, n, i, o, s, a, u, l, c, f;
  return e = new $a({}), u = new Za({}), {
    c() {
      t = kt("div"), wr(e.$$.fragment), n = In(), i = kt("div"), o = jr(
        /*errorMessage*/
        r[6]
      ), s = In(), a = kt("button"), wr(u.$$.fragment), D(i, "class", "svelte-1r7dvt7"), D(a, "class", "svelte-1r7dvt7"), D(t, "class", "error svelte-1r7dvt7");
    },
    m(h, g) {
      Be(h, t, g), ar(e, t, null), rt(t, n), rt(t, i), rt(i, o), rt(t, s), rt(t, a), ar(u, a, null), l = !0, c || (f = Re(
        a,
        "click",
        /*click_handler_3*/
        r[57]
      ), c = !0);
    },
    p(h, g) {
      (!l || g[0] & /*errorMessage*/
      64) && Qi(
        o,
        /*errorMessage*/
        h[6]
      );
    },
    i(h) {
      l || (Dt(e.$$.fragment, h), Dt(u.$$.fragment, h), l = !0);
    },
    o(h) {
      ae(e.$$.fragment, h), ae(u.$$.fragment, h), l = !1;
    },
    d(h) {
      h && Pe(t), ur(e), ur(u), c = !1, f();
    }
  };
}
function fa(r) {
  let t, e;
  function n() {
    return (
      /*mouseenter_handler*/
      r[58](
        /*i*/
        r[72]
      )
    );
  }
  function i() {
    return (
      /*focus_handler_1*/
      r[59](
        /*feature*/
        r[70]
      )
    );
  }
  return t = new Rl({
    props: {
      feature: (
        /*feature*/
        r[70]
      ),
      showPlaceType: (
        /*showPlaceType*/
        r[10]
      ),
      selected: (
        /*selectedItemIndex*/
        r[13] === /*i*/
        r[72]
      )
    }
  }), t.$on("mouseenter", n), t.$on("focus", i), {
    c() {
      wr(t.$$.fragment);
    },
    m(o, s) {
      ar(t, o, s), e = !0;
    },
    p(o, s) {
      r = o;
      const a = {};
      s[0] & /*listFeatures*/
      4096 && (a.feature = /*feature*/
      r[70]), s[0] & /*showPlaceType*/
      1024 && (a.showPlaceType = /*showPlaceType*/
      r[10]), s[0] & /*selectedItemIndex*/
      8192 && (a.selected = /*selectedItemIndex*/
      r[13] === /*i*/
      r[72]), t.$set(a);
    },
    i(o) {
      e || (Dt(t.$$.fragment, o), e = !0);
    },
    o(o) {
      ae(t.$$.fragment, o), e = !1;
    },
    d(o) {
      ur(t, o);
    }
  };
}
function Vl(r) {
  let t, e, n, i, o, s, a, u, l, c, f, h, g, p, y, d, m, I, C, L;
  i = new Fl({}), c = new Za({});
  let x = (
    /*abortController*/
    r[17] && la()
  ), w = (
    /*enableReverse*/
    r[5] === !0 && ca(r)
  );
  const M = (
    /*#slots*/
    r[48].default
  ), B = fl(
    M,
    r,
    /*$$scope*/
    r[47],
    null
  ), A = [zl, kl, Gl, Bl], q = [];
  function j(P, X) {
    var R, Y;
    return (
      /*error*/
      P[16] ? 0 : (
        /*focusedDelayed*/
        P[14] ? (
          /*listFeatures*/
          ((R = P[12]) == null ? void 0 : R.length) === 0 ? 2 : (
            /*focusedDelayed*/
            P[14] && /*listFeatures*/
            ((Y = P[12]) != null && Y.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(y = j(r)) && (d = q[y] = A[y](r)), {
    c() {
      t = kt("form"), e = kt("div"), n = kt("button"), wr(i.$$.fragment), o = In(), s = kt("input"), a = In(), u = kt("div"), l = kt("button"), wr(c.$$.fragment), f = In(), x && x.c(), h = In(), w && w.c(), g = In(), B && B.c(), p = In(), d && d.c(), D(n, "class", "search-button svelte-1r7dvt7"), D(n, "type", "button"), D(
        s,
        "placeholder",
        /*placeholder*/
        r[8]
      ), D(
        s,
        "aria-label",
        /*placeholder*/
        r[8]
      ), D(s, "class", "svelte-1r7dvt7"), D(l, "type", "button"), D(
        l,
        "title",
        /*clearButtonTitle*/
        r[3]
      ), D(l, "class", "svelte-1r7dvt7"), D(u, "class", "clear-button-container svelte-1r7dvt7"), nn(
        u,
        "displayable",
        /*searchValue*/
        r[1] !== ""
      ), D(e, "class", "input-group svelte-1r7dvt7"), D(t, "tabindex", "0"), D(t, "class", m = ra(
        /*className*/
        r[2]
      ) + " svelte-1r7dvt7"), nn(
        t,
        "can-collapse",
        /*collapsed*/
        r[4] && /*searchValue*/
        r[1] === ""
      );
    },
    m(P, X) {
      Be(P, t, X), rt(t, e), rt(e, n), ar(i, n, null), rt(e, o), rt(e, s), r[50](s), ia(
        s,
        /*searchValue*/
        r[1]
      ), rt(e, a), rt(e, u), rt(u, l), ar(c, l, null), rt(u, f), x && x.m(u, null), rt(e, h), w && w.m(e, null), rt(e, g), B && B.m(e, null), rt(t, p), ~y && q[y].m(t, null), I = !0, C || (L = [
        Re(
          n,
          "click",
          /*click_handler*/
          r[49]
        ),
        Re(
          s,
          "input",
          /*input_1_input_handler*/
          r[51]
        ),
        Re(
          s,
          "focus",
          /*focus_handler*/
          r[52]
        ),
        Re(
          s,
          "blur",
          /*blur_handler*/
          r[53]
        ),
        Re(
          s,
          "keydown",
          /*handleKeyDown*/
          r[19]
        ),
        Re(
          s,
          "input",
          /*input_handler*/
          r[54]
        ),
        Re(
          l,
          "click",
          /*click_handler_1*/
          r[55]
        ),
        Re(t, "submit", vl(
          /*handleOnSubmit*/
          r[18]
        ))
      ], C = !0);
    },
    p(P, X) {
      (!I || X[0] & /*placeholder*/
      256) && D(
        s,
        "placeholder",
        /*placeholder*/
        P[8]
      ), (!I || X[0] & /*placeholder*/
      256) && D(
        s,
        "aria-label",
        /*placeholder*/
        P[8]
      ), X[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      P[1] && ia(
        s,
        /*searchValue*/
        P[1]
      ), (!I || X[0] & /*clearButtonTitle*/
      8) && D(
        l,
        "title",
        /*clearButtonTitle*/
        P[3]
      ), /*abortController*/
      P[17] ? x ? X[0] & /*abortController*/
      131072 && Dt(x, 1) : (x = la(), x.c(), Dt(x, 1), x.m(u, null)) : x && (Oo(), ae(x, 1, 1, () => {
        x = null;
      }), Do()), (!I || X[0] & /*searchValue*/
      2) && nn(
        u,
        "displayable",
        /*searchValue*/
        P[1] !== ""
      ), /*enableReverse*/
      P[5] === !0 ? w ? (w.p(P, X), X[0] & /*enableReverse*/
      32 && Dt(w, 1)) : (w = ca(P), w.c(), Dt(w, 1), w.m(e, g)) : w && (Oo(), ae(w, 1, 1, () => {
        w = null;
      }), Do()), B && B.p && (!I || X[1] & /*$$scope*/
      65536) && gl(
        B,
        M,
        P,
        /*$$scope*/
        P[47],
        I ? hl(
          M,
          /*$$scope*/
          P[47],
          X,
          null
        ) : pl(
          /*$$scope*/
          P[47]
        ),
        null
      );
      let R = y;
      y = j(P), y === R ? ~y && q[y].p(P, X) : (d && (Oo(), ae(q[R], 1, 1, () => {
        q[R] = null;
      }), Do()), ~y ? (d = q[y], d ? d.p(P, X) : (d = q[y] = A[y](P), d.c()), Dt(d, 1), d.m(t, null)) : d = null), (!I || X[0] & /*className*/
      4 && m !== (m = ra(
        /*className*/
        P[2]
      ) + " svelte-1r7dvt7")) && D(t, "class", m), (!I || X[0] & /*className, collapsed, searchValue*/
      22) && nn(
        t,
        "can-collapse",
        /*collapsed*/
        P[4] && /*searchValue*/
        P[1] === ""
      );
    },
    i(P) {
      I || (Dt(i.$$.fragment, P), Dt(c.$$.fragment, P), Dt(x), Dt(w), Dt(B, P), Dt(d), I = !0);
    },
    o(P) {
      ae(i.$$.fragment, P), ae(c.$$.fragment, P), ae(x), ae(w), ae(B, P), ae(d), I = !1;
    },
    d(P) {
      P && Pe(t), ur(i), r[50](null), ur(c), x && x.d(), w && w.d(), B && B.d(P), ~y && q[y].d(), C = !1, Br(L);
    }
  };
}
function Ul(r, t, e) {
  const n = t[1], i = t[0], o = n - i;
  return r === n && e ? r : ((r - i) % o + o) % o + i;
}
function ha(r) {
  let t = [...r];
  return t[2] < t[0] && (t[2] += 360), t;
}
function ql(r, t, e) {
  let n, { $$slots: i = {}, $$scope: o } = t, { class: s = void 0 } = t, { apiKey: a } = t, { bbox: u = void 0 } = t, { clearButtonTitle: l = "clear" } = t, { clearOnBlur: c = !1 } = t, { collapsed: f = !1 } = t, { country: h = void 0 } = t, { debounceSearch: g = 200 } = t, { enableReverse: p = !1 } = t, { errorMessage: y = "Something went wrong…" } = t, { filter: d = () => !0 } = t, { flyTo: m = !0 } = t, { fuzzyMatch: I = !0 } = t, { language: C = void 0 } = t, { limit: L = void 0 } = t, { mapController: x = void 0 } = t, { minLength: w = 2 } = t, { noResultsMessage: M = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = t, { placeholder: B = "Search" } = t, { proximity: A = void 0 } = t, { reverseActive: q = p === "always" } = t, { reverseButtonTitle: j = "toggle reverse geocoding" } = t, { searchValue: P = "" } = t, { showFullGeometry: X = !0 } = t, { showPlaceType: R = !1 } = t, { showResultsWhileTyping: Y = !0 } = t, { trackProximity: ut = !0 } = t, { types: St = void 0 } = t, { zoom: Ht = 16 } = t, { fetchParameters: he = {} } = t;
  function qr() {
    Bn.focus();
  }
  function _n() {
    Bn.blur();
  }
  function Fn(N, Bt = !0) {
    e(1, P = N), Bt ? (e(13, Ft = -1), $s()) : (us(), setTimeout(() => {
      Bn.focus(), Bn.select();
    }));
  }
  let ge = !1, nt, Ot, vt, Zs = "", Bn, Ft = -1, Gn, Co = [], Xr, hi, No;
  const mr = El();
  _l(() => {
    x && (x.setEventHandler(void 0), x.indicateReverse(!1), x.setSelectedMarker(-1), x.setMarkers(void 0, void 0));
  });
  function $s(N) {
    if (hi && (clearTimeout(hi), hi = void 0), Ft > -1 && nt)
      e(45, vt = nt[Ft]), e(1, P = vt.place_name.replace(/,.*/, "")), e(16, Gn = void 0), e(44, Ot = void 0), e(13, Ft = -1);
    else if (P) {
      const Bt = N || !ta();
      as(P, { exact: !0 }).then(() => {
        e(44, Ot = nt), e(45, vt = void 0), Bt && Wu();
      }).catch((kn) => e(16, Gn = kn));
    }
  }
  function ta() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(P);
  }
  async function as(N, { byId: Bt = !1, exact: kn = !1 } = {}) {
    e(16, Gn = void 0);
    const qi = ta(), ze = new URLSearchParams();
    C != null && ze.set("language", Array.isArray(C) ? C.join(",") : C), St && ze.set("types", St.join(",")), qi || (u && ze.set("bbox", u.map((_r) => _r.toFixed(6)).join(",")), h && ze.set("country", Array.isArray(h) ? h.join(",") : h)), Bt || (A && ze.set("proximity", A.map((_r) => _r.toFixed(6)).join(",")), (kn || !Y) && ze.set("autocomplete", "false"), ze.set("fuzzyMatch", String(I))), L !== void 0 && ze.set("limit", String(L)), ze.set("key", a);
    const Yr = "https://api.maptiler.com/geocoding/" + encodeURIComponent(N) + ".json?" + ze.toString();
    if (Yr === Zs) {
      Bt ? (e(12, nt = void 0), e(45, vt = Co[0])) : e(12, nt = Co);
      return;
    }
    Zs = Yr, Xr == null || Xr.abort();
    const _e = new AbortController();
    e(17, Xr = _e);
    let cs;
    try {
      cs = await fetch(Yr, { signal: _e.signal, ...he }).finally(() => {
        _e === Xr && e(17, Xr = void 0);
      });
    } catch (_r) {
      if (_r && typeof _r == "object" && "name" in _r && _r.name === "AbortError")
        return;
      throw new Error();
    }
    if (!cs.ok)
      throw new Error();
    const fs = await cs.json();
    mr("response", { url: Yr, featureCollection: fs }), Bt ? (e(12, nt = void 0), e(45, vt = fs.features[0]), Co = [vt]) : (e(12, nt = fs.features.filter(d)), Co = nt, qi && Bn.focus());
  }
  function Wu() {
    var kn, qi, ze, Yr;
    if (!(Ot != null && Ot.length) || !m)
      return;
    const N = [180, 90, -180, -90], Bt = !Ot.some((_e) => !_e.matching_text);
    for (const _e of Ot)
      (Bt || !_e.matching_text) && (N[0] = Math.min(N[0], ((kn = _e.bbox) == null ? void 0 : kn[0]) ?? _e.center[0]), N[1] = Math.min(N[1], ((qi = _e.bbox) == null ? void 0 : qi[1]) ?? _e.center[1]), N[2] = Math.max(N[2], ((ze = _e.bbox) == null ? void 0 : ze[2]) ?? _e.center[0]), N[3] = Math.max(N[3], ((Yr = _e.bbox) == null ? void 0 : Yr[3]) ?? _e.center[1]));
    x && Ot.length > 0 && (vt && N[0] === N[2] && N[1] === N[3] ? x.flyTo(vt.center, Ht) : x.fitBounds(ha(N), 50));
  }
  function ju(N) {
    e(0, q = p === "always"), Fn(Ul(N[0], [-180, 180], !0).toFixed(6) + "," + N[1].toFixed(6));
  }
  function Ku(N) {
    if (!nt)
      return;
    let Bt = N.key === "ArrowDown" ? 1 : N.key === "ArrowUp" ? -1 : 0;
    Bt ? (Ft === -1 && Bt === -1 && e(13, Ft = nt.length), e(13, Ft += Bt), Ft >= nt.length && e(13, Ft = -1), N.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(N.key) && e(13, Ft = -1);
  }
  function us(N = !0) {
    if (e(16, Gn = void 0), Y) {
      if (hi && clearTimeout(hi), P.length <= w)
        return;
      const Bt = P;
      hi = window.setTimeout(
        () => {
          as(Bt).catch((kn) => e(16, Gn = kn));
        },
        N ? g : 0
      );
    } else
      e(12, nt = void 0), e(16, Gn = void 0);
  }
  function ls(N) {
    e(45, vt = N), e(1, P = N.place_name), e(13, Ft = -1);
  }
  const Qu = () => Bn.focus();
  function Ju(N) {
    ms[N ? "unshift" : "push"](() => {
      Bn = N, e(15, Bn);
    });
  }
  function Zu() {
    P = this.value, e(1, P), e(11, ge), e(25, c);
  }
  const $u = () => e(11, ge = !0), tl = () => e(11, ge = !1), el = () => us(), nl = () => {
    e(1, P = ""), Bn.focus();
  }, rl = () => e(0, q = !q), il = () => e(16, Gn = void 0), ol = (N) => e(13, Ft = N), sl = (N) => ls(N), al = () => e(13, Ft = -1), ul = () => {
  };
  return r.$$set = (N) => {
    "class" in N && e(2, s = N.class), "apiKey" in N && e(23, a = N.apiKey), "bbox" in N && e(24, u = N.bbox), "clearButtonTitle" in N && e(3, l = N.clearButtonTitle), "clearOnBlur" in N && e(25, c = N.clearOnBlur), "collapsed" in N && e(4, f = N.collapsed), "country" in N && e(26, h = N.country), "debounceSearch" in N && e(27, g = N.debounceSearch), "enableReverse" in N && e(5, p = N.enableReverse), "errorMessage" in N && e(6, y = N.errorMessage), "filter" in N && e(28, d = N.filter), "flyTo" in N && e(29, m = N.flyTo), "fuzzyMatch" in N && e(30, I = N.fuzzyMatch), "language" in N && e(31, C = N.language), "limit" in N && e(32, L = N.limit), "mapController" in N && e(33, x = N.mapController), "minLength" in N && e(34, w = N.minLength), "noResultsMessage" in N && e(7, M = N.noResultsMessage), "placeholder" in N && e(8, B = N.placeholder), "proximity" in N && e(22, A = N.proximity), "reverseActive" in N && e(0, q = N.reverseActive), "reverseButtonTitle" in N && e(9, j = N.reverseButtonTitle), "searchValue" in N && e(1, P = N.searchValue), "showFullGeometry" in N && e(35, X = N.showFullGeometry), "showPlaceType" in N && e(10, R = N.showPlaceType), "showResultsWhileTyping" in N && e(36, Y = N.showResultsWhileTyping), "trackProximity" in N && e(37, ut = N.trackProximity), "types" in N && e(38, St = N.types), "zoom" in N && e(39, Ht = N.zoom), "fetchParameters" in N && e(40, he = N.fetchParameters), "$$scope" in N && e(47, o = N.$$scope);
  }, r.$$.update = () => {
    if (r.$$.dirty[1] & /*trackProximity*/
    64 && (ut || e(22, A = void 0)), r.$$.dirty[0] & /*focused, clearOnBlur*/
    33556480 && setTimeout(() => {
      e(14, No = ge), c && !ge && e(1, P = "");
    }), r.$$.dirty[0] & /*searchValue, listFeatures*/
    4098 && (P || (e(45, vt = void 0), e(12, nt = void 0), e(16, Gn = void 0), e(44, Ot = nt))), r.$$.dirty[1] & /*showFullGeometry, picked*/
    16400 && X && vt && !vt.address && vt.geometry.type === "Point" && as(vt.id, { byId: !0 }).catch((N) => e(16, Gn = N)), r.$$.dirty[0] & /*flyTo*/
    536870912 | r.$$.dirty[1] & /*mapController, picked, zoom*/
    16644 && x && vt && m && (!vt.bbox || vt.bbox[0] === vt.bbox[2] && vt.bbox[1] === vt.bbox[3] ? x.flyTo(vt.center, Ht) : x.fitBounds(ha(vt.bbox), 50), e(12, nt = void 0), e(44, Ot = void 0), e(13, Ft = -1)), r.$$.dirty[0] & /*listFeatures*/
    4096 | r.$$.dirty[1] & /*markedFeatures*/
    8192 && Ot !== nt && e(44, Ot = void 0), r.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    24580 && x && x.setMarkers(Ot, vt), r.$$.dirty[0] & /*searchValue*/
    2 && e(13, Ft = -1), r.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    20481 | r.$$.dirty[1] & /*mapController, trackProximity*/
    68 && x && x.setEventHandler((N) => {
      switch (N.type) {
        case "mapClick":
          q && ju(N.coordinates);
          break;
        case "proximityChange":
          e(22, A = ut ? N.proximity : void 0);
          break;
        case "markerClick":
          {
            const Bt = nt == null ? void 0 : nt.find((kn) => kn.id === N.id);
            Bt && ls(Bt);
          }
          break;
        case "markerMouseEnter":
          e(13, Ft = No ? (nt == null ? void 0 : nt.findIndex((Bt) => Bt.id === N.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          e(13, Ft = -1);
          break;
      }
    }), r.$$.dirty[0] & /*selectedItemIndex*/
    8192 | r.$$.dirty[1] & /*mapController*/
    4 && (x == null || x.setSelectedMarker(Ft)), r.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    12288 && e(46, n = nt == null ? void 0 : nt[Ft]), r.$$.dirty[0] & /*searchValue*/
    2 | r.$$.dirty[1] & /*mapController*/
    4) {
      const N = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(P);
      x == null || x.setReverseMarker(N ? [Number(N[1]), Number(N[2])] : void 0);
    }
    r.$$.dirty[1] & /*selected*/
    32768 && mr("select", n), r.$$.dirty[1] & /*picked*/
    16384 && mr("pick", vt), r.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    20480 && mr("optionsVisibilityChange", No && !!nt), r.$$.dirty[0] & /*listFeatures*/
    4096 && mr("featuresListed", nt), r.$$.dirty[1] & /*markedFeatures*/
    8192 && mr("featuresMarked", Ot), r.$$.dirty[0] & /*reverseActive*/
    1 && mr("reverseToggle", q), r.$$.dirty[0] & /*searchValue*/
    2 && mr("queryChange", P), r.$$.dirty[0] & /*reverseActive*/
    1 | r.$$.dirty[1] & /*mapController*/
    4 && x && x.indicateReverse(q);
  }, [
    q,
    P,
    s,
    l,
    f,
    p,
    y,
    M,
    B,
    j,
    R,
    ge,
    nt,
    Ft,
    No,
    Bn,
    Gn,
    Xr,
    $s,
    Ku,
    us,
    ls,
    A,
    a,
    u,
    c,
    h,
    g,
    d,
    m,
    I,
    C,
    L,
    x,
    w,
    X,
    Y,
    ut,
    St,
    Ht,
    he,
    qr,
    _n,
    Fn,
    Ot,
    vt,
    n,
    o,
    i,
    Qu,
    Ju,
    Zu,
    $u,
    tl,
    el,
    nl,
    rl,
    il,
    ol,
    sl,
    al,
    ul
  ];
}
let Xl = class extends zr {
  constructor(t) {
    super(), kr(
      this,
      t,
      ql,
      Vl,
      Gr,
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
};
/**
 * splaytree v3.1.1
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
function Yl(r, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
          return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              e = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              e.label = l[1];
              break;
            }
            if (l[0] === 6 && e.label < o[1]) {
              e.label = o[1], o = l;
              break;
            }
            if (o && e.label < o[2]) {
              e.label = o[2], e.ops.push(l);
              break;
            }
            o[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        l = t.call(r, e);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Lr = (
  /** @class */
  function() {
    function r(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return r;
  }()
);
function Hl(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function Cr(r, t, e) {
  for (var n = new Lr(null, null), i = n, o = n; ; ) {
    var s = e(r, t.key);
    if (s < 0) {
      if (t.left === null)
        break;
      if (e(r, t.left.key) < 0) {
        var a = t.left;
        if (t.left = a.right, a.right = t, t = a, t.left === null)
          break;
      }
      o.left = t, o = t, t = t.left;
    } else if (s > 0) {
      if (t.right === null)
        break;
      if (e(r, t.right.key) > 0) {
        var a = t.right;
        if (t.right = a.left, a.left = t, t = a, t.right === null)
          break;
      }
      i.right = t, i = t, t = t.right;
    } else
      break;
  }
  return i.right = t.left, o.left = t.right, t.left = n.right, t.right = n.left, t;
}
function ps(r, t, e, n) {
  var i = new Lr(r, t);
  if (e === null)
    return i.left = i.right = null, i;
  e = Cr(r, e, n);
  var o = n(r, e.key);
  return o < 0 ? (i.left = e.left, i.right = e, e.left = null) : o >= 0 && (i.right = e.right, i.left = e, e.right = null), i;
}
function ga(r, t, e) {
  var n = null, i = null;
  if (t) {
    t = Cr(r, t, e);
    var o = e(t.key, r);
    o === 0 ? (n = t.left, i = t.right) : o < 0 ? (i = t.right, t.right = null, n = t) : (n = t.left, t.left = null, i = t);
  }
  return { left: n, right: i };
}
function Wl(r, t, e) {
  return t === null ? r : (r === null || (t = Cr(r.key, t, e), t.left = r), t);
}
function Is(r, t, e, n, i) {
  if (r) {
    n("" + t + (e ? "└── " : "├── ") + i(r) + `
`);
    var o = t + (e ? "    " : "│   ");
    r.left && Is(r.left, o, !1, n, i), r.right && Is(r.right, o, !0, n, i);
  }
}
var As = (
  /** @class */
  function() {
    function r(t) {
      t === void 0 && (t = Hl), this._root = null, this._size = 0, this._comparator = t;
    }
    return r.prototype.insert = function(t, e) {
      return this._size++, this._root = ps(t, e, this._root, this._comparator);
    }, r.prototype.add = function(t, e) {
      var n = new Lr(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var i = this._comparator, o = Cr(t, this._root, i), s = i(t, o.key);
      return s === 0 ? this._root = o : (s < 0 ? (n.left = o.left, n.right = o, o.left = null) : s > 0 && (n.right = o.right, n.left = o, o.right = null), this._size++, this._root = n), this._root;
    }, r.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, r.prototype._remove = function(t, e, n) {
      var i;
      if (e === null)
        return null;
      e = Cr(t, e, n);
      var o = n(t, e.key);
      return o === 0 ? (e.left === null ? i = e.right : (i = Cr(t, e.left, n), i.right = e.right), this._size--, i) : e;
    }, r.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = Cr(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, r.prototype.findStatic = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var i = n(t, e.key);
        if (i === 0)
          return e;
        i < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, r.prototype.find = function(t) {
      return this._root && (this._root = Cr(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, r.prototype.contains = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var i = n(t, e.key);
        if (i === 0)
          return !0;
        i < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, r.prototype.forEach = function(t, e) {
      for (var n = this._root, i = [], o = !1; !o; )
        n !== null ? (i.push(n), n = n.left) : i.length !== 0 ? (n = i.pop(), t.call(e, n), n = n.right) : o = !0;
      return this;
    }, r.prototype.range = function(t, e, n, i) {
      for (var o = [], s = this._comparator, a = this._root, u; o.length !== 0 || a; )
        if (a)
          o.push(a), a = a.left;
        else {
          if (a = o.pop(), u = s(a.key, e), u > 0)
            break;
          if (s(a.key, t) >= 0 && n.call(i, a))
            return this;
          a = a.right;
        }
      return this;
    }, r.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.key;
        return t.push(n);
      }), t;
    }, r.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.data;
        return t.push(n);
      }), t;
    }, r.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, r.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, r.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, r.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, r.prototype.at = function(t) {
      for (var e = this._root, n = !1, i = 0, o = []; !n; )
        if (e)
          o.push(e), e = e.left;
        else if (o.length > 0) {
          if (e = o.pop(), i === t)
            return e;
          i++, e = e.right;
        } else
          n = !0;
      return null;
    }, r.prototype.next = function(t) {
      var e = this._root, n = null;
      if (t.right) {
        for (n = t.right; n.left; )
          n = n.left;
        return n;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? (n = e, e = e.left) : e = e.right;
      }
      return n;
    }, r.prototype.prev = function(t) {
      var e = this._root, n = null;
      if (t.left !== null) {
        for (n = t.left; n.right; )
          n = n.right;
        return n;
      }
      for (var i = this._comparator; e; ) {
        var o = i(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? e = e.left : (n = e, e = e.right);
      }
      return n;
    }, r.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, r.prototype.toList = function() {
      return Kl(this._root);
    }, r.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var i = t.length, o = this._comparator;
      if (n && xs(t, e, 0, i - 1, o), this._root === null)
        this._root = Cs(t, e, 0, i), this._size = i;
      else {
        var s = Ql(this.toList(), jl(t, e), o);
        i = this._size + i, this._root = Ns({ head: s }, 0, i);
      }
      return this;
    }, r.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(r.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.toString = function(t) {
      t === void 0 && (t = function(n) {
        return String(n.key);
      });
      var e = [];
      return Is(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, r.prototype.update = function(t, e, n) {
      var i = this._comparator, o = ga(t, this._root, i), s = o.left, a = o.right;
      i(t, e) < 0 ? a = ps(e, n, a, i) : s = ps(e, n, s, i), this._root = Wl(s, a, i);
    }, r.prototype.split = function(t) {
      return ga(t, this._root, this._comparator);
    }, r.prototype[Symbol.iterator] = function() {
      var t;
      return Yl(this, function(e) {
        switch (e.label) {
          case 0:
            t = this.minNode(), e.label = 1;
          case 1:
            return t ? [4, t] : [3, 3];
          case 2:
            return e.sent(), t = this.next(t), [3, 1];
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    }, r;
  }()
);
function Cs(r, t, e, n) {
  var i = n - e;
  if (i > 0) {
    var o = e + Math.floor(i / 2), s = r[o], a = t[o], u = new Lr(s, a);
    return u.left = Cs(r, t, e, o), u.right = Cs(r, t, o + 1, n), u;
  }
  return null;
}
function jl(r, t) {
  for (var e = new Lr(null, null), n = e, i = 0; i < r.length; i++)
    n = n.next = new Lr(r[i], t[i]);
  return n.next = null, e.next;
}
function Kl(r) {
  for (var t = r, e = [], n = !1, i = new Lr(null, null), o = i; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = o = o.next = e.pop(), t = t.right) : n = !0;
  return o.next = null, i.next;
}
function Ns(r, t, e) {
  var n = e - t;
  if (n > 0) {
    var i = t + Math.floor(n / 2), o = Ns(r, t, i), s = r.head;
    return s.left = o, r.head = r.head.next, s.right = Ns(r, i + 1, e), s;
  }
  return null;
}
function Ql(r, t, e) {
  for (var n = new Lr(null, null), i = n, o = r, s = t; o !== null && s !== null; )
    e(o.key, s.key) < 0 ? (i.next = o, o = o.next) : (i.next = s, s = s.next), i = i.next;
  return o !== null ? i.next = o : s !== null && (i.next = s), n.next;
}
function xs(r, t, e, n, i) {
  if (!(e >= n)) {
    for (var o = r[e + n >> 1], s = e - 1, a = n + 1; ; ) {
      do
        s++;
      while (i(r[s], o) < 0);
      do
        a--;
      while (i(r[a], o) > 0);
      if (s >= a)
        break;
      var u = r[s];
      r[s] = r[a], r[a] = u, u = t[s], t[s] = t[a], t[a] = u;
    }
    xs(r, t, e, a, i), xs(r, t, a + 1, n, i);
  }
}
function vn(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pa(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function Ne(r, t, e) {
  return t && pa(r.prototype, t), e && pa(r, e), r;
}
var Xi = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Ss = function(t, e) {
  if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y)
    return null;
  var n = t.ll.x < e.ll.x ? e.ll.x : t.ll.x, i = t.ur.x < e.ur.x ? t.ur.x : e.ur.x, o = t.ll.y < e.ll.y ? e.ll.y : t.ll.y, s = t.ur.y < e.ur.y ? t.ur.y : e.ur.y;
  return {
    ll: {
      x: n,
      y: o
    },
    ur: {
      x: i,
      y: s
    }
  };
}, Nr = Number.EPSILON;
Nr === void 0 && (Nr = Math.pow(2, -52));
var Jl = Nr * Nr, ws = function(t, e) {
  if (-Nr < t && t < Nr && -Nr < e && e < Nr)
    return 0;
  var n = t - e;
  return n * n < Jl * t * e ? 0 : t < e ? -1 : 1;
}, Zl = /* @__PURE__ */ function() {
  function r() {
    vn(this, r), this.reset();
  }
  return Ne(r, [{
    key: "reset",
    value: function() {
      this.xRounder = new da(), this.yRounder = new da();
    }
  }, {
    key: "round",
    value: function(e, n) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(n)
      };
    }
  }]), r;
}(), da = /* @__PURE__ */ function() {
  function r() {
    vn(this, r), this.tree = new As(), this.round(0);
  }
  return Ne(r, [{
    key: "round",
    value: function(e) {
      var n = this.tree.add(e), i = this.tree.prev(n);
      if (i !== null && ws(n.key, i.key) === 0)
        return this.tree.remove(e), i.key;
      var o = this.tree.next(n);
      return o !== null && ws(n.key, o.key) === 0 ? (this.tree.remove(e), o.key) : e;
    }
  }]), r;
}(), Zi = new Zl(), Ki = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, tu = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, va = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: n.x - t.x,
    y: n.y - t.y
  }, s = Ki(i, o);
  return ws(s, 0);
}, Ao = function(t) {
  return Math.sqrt(tu(t, t));
}, $l = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return Ki(o, i) / Ao(o) / Ao(i);
}, tc = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, o = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return tu(o, i) / Ao(o) / Ao(i);
}, ya = function(t, e, n) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (n - t.y),
    y: n
  };
}, ma = function(t, e, n) {
  return e.x === 0 ? null : {
    x: n,
    y: t.y + e.y / e.x * (n - t.x)
  };
}, ec = function(t, e, n, i) {
  if (e.x === 0)
    return ma(n, i, t.x);
  if (i.x === 0)
    return ma(t, e, n.x);
  if (e.y === 0)
    return ya(n, i, t.y);
  if (i.y === 0)
    return ya(t, e, n.y);
  var o = Ki(e, i);
  if (o == 0)
    return null;
  var s = {
    x: n.x - t.x,
    y: n.y - t.y
  }, a = Ki(s, e) / o, u = Ki(s, i) / o, l = t.x + u * e.x, c = n.x + a * i.x, f = t.y + u * e.y, h = n.y + a * i.y, g = (l + c) / 2, p = (f + h) / 2;
  return {
    x: g,
    y: p
  };
}, Xn = /* @__PURE__ */ function() {
  Ne(r, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, n) {
      var i = r.comparePoints(e.point, n.point);
      return i !== 0 ? i : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : Fo.compare(e.segment, n.segment));
    }
    // for ordering points in sweep line order
  }, {
    key: "comparePoints",
    value: function(e, n) {
      return e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0;
    }
    // Warning: 'point' input will be modified and re-used (for performance)
  }]);
  function r(t, e) {
    vn(this, r), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return Ne(r, [{
    key: "link",
    value: function(e) {
      if (e.point === this.point)
        throw new Error("Tried to link already linked events");
      for (var n = e.point.events, i = 0, o = n.length; i < o; i++) {
        var s = n[i];
        this.point.events.push(s), s.point = this.point;
      }
      this.checkForConsuming();
    }
    /* Do a pass over our linked events and check to see if any pair
     * of segments match, and should be consumed. */
  }, {
    key: "checkForConsuming",
    value: function() {
      for (var e = this.point.events.length, n = 0; n < e; n++) {
        var i = this.point.events[n];
        if (i.segment.consumedBy === void 0)
          for (var o = n + 1; o < e; o++) {
            var s = this.point.events[o];
            s.consumedBy === void 0 && i.otherSE.point.events === s.otherSE.point.events && i.segment.consume(s.segment);
          }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function() {
      for (var e = [], n = 0, i = this.point.events.length; n < i; n++) {
        var o = this.point.events[n];
        o !== this && !o.segment.ringOut && o.segment.isInResult() && e.push(o);
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
  }, {
    key: "getLeftmostComparator",
    value: function(e) {
      var n = this, i = /* @__PURE__ */ new Map(), o = function(a) {
        var u = a.otherSE;
        i.set(a, {
          sine: $l(n.point, e.point, u.point),
          cosine: tc(n.point, e.point, u.point)
        });
      };
      return function(s, a) {
        i.has(s) || o(s), i.has(a) || o(a);
        var u = i.get(s), l = u.sine, c = u.cosine, f = i.get(a), h = f.sine, g = f.cosine;
        return l >= 0 && h >= 0 ? c < g ? 1 : c > g ? -1 : 0 : l < 0 && h < 0 ? c < g ? -1 : c > g ? 1 : 0 : h < l ? -1 : h > l ? 1 : 0;
      };
    }
  }]), r;
}(), nc = 0, Fo = /* @__PURE__ */ function() {
  Ne(r, null, [{
    key: "compare",
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
    value: function(e, n) {
      var i = e.leftSE.point.x, o = n.leftSE.point.x, s = e.rightSE.point.x, a = n.rightSE.point.x;
      if (a < i)
        return 1;
      if (s < o)
        return -1;
      var u = e.leftSE.point.y, l = n.leftSE.point.y, c = e.rightSE.point.y, f = n.rightSE.point.y;
      if (i < o) {
        if (l < u && l < c)
          return 1;
        if (l > u && l > c)
          return -1;
        var h = e.comparePoint(n.leftSE.point);
        if (h < 0)
          return 1;
        if (h > 0)
          return -1;
        var g = n.comparePoint(e.rightSE.point);
        return g !== 0 ? g : -1;
      }
      if (i > o) {
        if (u < l && u < f)
          return -1;
        if (u > l && u > f)
          return 1;
        var p = n.comparePoint(e.leftSE.point);
        if (p !== 0)
          return p;
        var y = e.comparePoint(n.rightSE.point);
        return y < 0 ? 1 : y > 0 ? -1 : 1;
      }
      if (u < l)
        return -1;
      if (u > l)
        return 1;
      if (s < a) {
        var d = n.comparePoint(e.rightSE.point);
        if (d !== 0)
          return d;
      }
      if (s > a) {
        var m = e.comparePoint(n.rightSE.point);
        if (m < 0)
          return 1;
        if (m > 0)
          return -1;
      }
      if (s !== a) {
        var I = c - u, C = s - i, L = f - l, x = a - o;
        if (I > C && L < x)
          return 1;
        if (I < C && L > x)
          return -1;
      }
      return s > a ? 1 : s < a || c < f ? -1 : c > f ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function r(t, e, n, i) {
    vn(this, r), this.id = ++nc, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = i;
  }
  return Ne(r, [{
    key: "replaceRightSE",
    /* When a segment is split, the rightSE is replaced with a new sweep event */
    value: function(e) {
      this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
  }, {
    key: "bbox",
    value: function() {
      var e = this.leftSE.point.y, n = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: e < n ? e : n
        },
        ur: {
          x: this.rightSE.point.x,
          y: e > n ? e : n
        }
      };
    }
    /* A vector from the left point to the right */
  }, {
    key: "vector",
    value: function() {
      return {
        x: this.rightSE.point.x - this.leftSE.point.x,
        y: this.rightSE.point.y - this.leftSE.point.y
      };
    }
  }, {
    key: "isAnEndpoint",
    value: function(e) {
      return e.x === this.leftSE.point.x && e.y === this.leftSE.point.y || e.x === this.rightSE.point.x && e.y === this.rightSE.point.y;
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
  }, {
    key: "comparePoint",
    value: function(e) {
      if (this.isAnEndpoint(e))
        return 0;
      var n = this.leftSE.point, i = this.rightSE.point, o = this.vector();
      if (n.x === i.x)
        return e.x === n.x ? 0 : e.x < n.x ? 1 : -1;
      var s = (e.y - n.y) / o.y, a = n.x + s * o.x;
      if (e.x === a)
        return 0;
      var u = (e.x - n.x) / o.x, l = n.y + u * o.y;
      return e.y === l ? 0 : e.y < l ? -1 : 1;
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
  }, {
    key: "getIntersection",
    value: function(e) {
      var n = this.bbox(), i = e.bbox(), o = Ss(n, i);
      if (o === null)
        return null;
      var s = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = Xi(n, u) && this.comparePoint(u) === 0, f = Xi(i, s) && e.comparePoint(s) === 0, h = Xi(n, l) && this.comparePoint(l) === 0, g = Xi(i, a) && e.comparePoint(a) === 0;
      if (f && c)
        return g && !h ? a : !g && h ? l : null;
      if (f)
        return h && s.x === l.x && s.y === l.y ? null : s;
      if (c)
        return g && a.x === u.x && a.y === u.y ? null : u;
      if (g && h)
        return null;
      if (g)
        return a;
      if (h)
        return l;
      var p = ec(s, this.vector(), u, e.vector());
      return p === null || !Xi(o, p) ? null : Zi.round(p.x, p.y);
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
  }, {
    key: "split",
    value: function(e) {
      var n = [], i = e.events !== void 0, o = new Xn(e, !0), s = new Xn(e, !1), a = this.rightSE;
      this.replaceRightSE(s), n.push(s), n.push(o);
      var u = new r(o, a, this.rings.slice(), this.windings.slice());
      return Xn.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), Xn.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (o.checkForConsuming(), s.checkForConsuming()), n;
    }
    /* Swap which event is left and right */
  }, {
    key: "swapEvents",
    value: function() {
      var e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (var n = 0, i = this.windings.length; n < i; n++)
        this.windings[n] *= -1;
    }
    /* Consume another segment. We take their rings under our wing
     * and mark them as consumed. Use for perfectly overlapping segments */
  }, {
    key: "consume",
    value: function(e) {
      for (var n = this, i = e; n.consumedBy; )
        n = n.consumedBy;
      for (; i.consumedBy; )
        i = i.consumedBy;
      var o = r.compare(n, i);
      if (o !== 0) {
        if (o > 0) {
          var s = n;
          n = i, i = s;
        }
        if (n.prev === i) {
          var a = n;
          n = i, i = a;
        }
        for (var u = 0, l = i.rings.length; u < l; u++) {
          var c = i.rings[u], f = i.windings[u], h = n.rings.indexOf(c);
          h === -1 ? (n.rings.push(c), n.windings.push(f)) : n.windings[h] += f;
        }
        i.rings = null, i.windings = null, i.consumedBy = n, i.leftSE.consumedBy = n.leftSE, i.rightSE.consumedBy = n.rightSE;
      }
    }
    /* The first segment previous segment chain that is in the result */
  }, {
    key: "prevInResult",
    value: function() {
      return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
    }
  }, {
    key: "beforeState",
    value: function() {
      if (this._beforeState !== void 0)
        return this._beforeState;
      if (!this.prev)
        this._beforeState = {
          rings: [],
          windings: [],
          multiPolys: []
        };
      else {
        var e = this.prev.consumedBy || this.prev;
        this._beforeState = e.afterState();
      }
      return this._beforeState;
    }
  }, {
    key: "afterState",
    value: function() {
      if (this._afterState !== void 0)
        return this._afterState;
      var e = this.beforeState();
      this._afterState = {
        rings: e.rings.slice(0),
        windings: e.windings.slice(0),
        multiPolys: []
      };
      for (var n = this._afterState.rings, i = this._afterState.windings, o = this._afterState.multiPolys, s = 0, a = this.rings.length; s < a; s++) {
        var u = this.rings[s], l = this.windings[s], c = n.indexOf(u);
        c === -1 ? (n.push(u), i.push(l)) : i[c] += l;
      }
      for (var f = [], h = [], g = 0, p = n.length; g < p; g++)
        if (i[g] !== 0) {
          var y = n[g], d = y.poly;
          if (h.indexOf(d) === -1)
            if (y.isExterior)
              f.push(d);
            else {
              h.indexOf(d) === -1 && h.push(d);
              var m = f.indexOf(y.poly);
              m !== -1 && f.splice(m, 1);
            }
        }
      for (var I = 0, C = f.length; I < C; I++) {
        var L = f[I].multiPoly;
        o.indexOf(L) === -1 && o.push(L);
      }
      return this._afterState;
    }
    /* Is this segment part of the final result? */
  }, {
    key: "isInResult",
    value: function() {
      if (this.consumedBy)
        return !1;
      if (this._isInResult !== void 0)
        return this._isInResult;
      var e = this.beforeState().multiPolys, n = this.afterState().multiPolys;
      switch (Nn.type) {
        case "union": {
          var i = e.length === 0, o = n.length === 0;
          this._isInResult = i !== o;
          break;
        }
        case "intersection": {
          var s, a;
          e.length < n.length ? (s = e.length, a = n.length) : (s = n.length, a = e.length), this._isInResult = a === Nn.numMultiPolys && s < a;
          break;
        }
        case "xor": {
          var u = Math.abs(e.length - n.length);
          this._isInResult = u % 2 === 1;
          break;
        }
        case "difference": {
          var l = function(f) {
            return f.length === 1 && f[0].isSubject;
          };
          this._isInResult = l(e) !== l(n);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(Nn.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, n, i) {
      var o, s, a, u = Xn.comparePoints(e, n);
      if (u < 0)
        o = e, s = n, a = 1;
      else if (u > 0)
        o = n, s = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new Xn(o, !0), c = new Xn(s, !1);
      return new r(l, c, [i], [a]);
    }
  }]), r;
}(), _a = /* @__PURE__ */ function() {
  function r(t, e, n) {
    if (vn(this, r), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var i = Zi.round(t[0][0], t[0][1]);
    this.bbox = {
      ll: {
        x: i.x,
        y: i.y
      },
      ur: {
        x: i.x,
        y: i.y
      }
    };
    for (var o = i, s = 1, a = t.length; s < a; s++) {
      if (typeof t[s][0] != "number" || typeof t[s][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      var u = Zi.round(t[s][0], t[s][1]);
      u.x === o.x && u.y === o.y || (this.segments.push(Fo.fromRing(o, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), o = u);
    }
    (i.x !== o.x || i.y !== o.y) && this.segments.push(Fo.fromRing(o, i, this));
  }
  return Ne(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, i = this.segments.length; n < i; n++) {
        var o = this.segments[n];
        e.push(o.leftSE), e.push(o.rightSE);
      }
      return e;
    }
  }]), r;
}(), rc = /* @__PURE__ */ function() {
  function r(t, e) {
    if (vn(this, r), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new _a(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (var n = 1, i = t.length; n < i; n++) {
      var o = new _a(t[n], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = e;
  }
  return Ne(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), n = 0, i = this.interiorRings.length; n < i; n++)
        for (var o = this.interiorRings[n].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), r;
}(), Ea = /* @__PURE__ */ function() {
  function r(t, e) {
    if (vn(this, r), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof t[0][0][0] == "number" && (t = [t]);
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
    for (var n = 0, i = t.length; n < i; n++) {
      var o = new rc(t[n], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = e;
  }
  return Ne(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, i = this.polys.length; n < i; n++)
        for (var o = this.polys[n].getSweepEvents(), s = 0, a = o.length; s < a; s++)
          e.push(o[s]);
      return e;
    }
  }]), r;
}(), ic = /* @__PURE__ */ function() {
  Ne(r, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var n = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!(!s.isInResult() || s.ringOut)) {
          for (var a = null, u = s.leftSE, l = s.rightSE, c = [u], f = u.point, h = []; a = u, u = l, c.push(u), u.point !== f; )
            for (; ; ) {
              var g = u.getAvailableLinkedEvents();
              if (g.length === 0) {
                var p = c[0].point, y = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(p.x, ",") + " ".concat(p.y, "]. Last matching segment found ends at") + " [".concat(y.x, ", ").concat(y.y, "]."));
              }
              if (g.length === 1) {
                l = g[0].otherSE;
                break;
              }
              for (var d = null, m = 0, I = h.length; m < I; m++)
                if (h[m].point === u.point) {
                  d = m;
                  break;
                }
              if (d !== null) {
                var C = h.splice(d)[0], L = c.splice(C.index);
                L.unshift(L[0].otherSE), n.push(new r(L.reverse()));
                continue;
              }
              h.push({
                index: c.length,
                point: u.point
              });
              var x = u.getLeftmostComparator(a);
              l = g.sort(x)[0].otherSE;
              break;
            }
          n.push(new r(c));
        }
      }
      return n;
    }
  }]);
  function r(t) {
    vn(this, r), this.events = t;
    for (var e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return Ne(r, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, n = [e], i = 1, o = this.events.length - 1; i < o; i++) {
        var s = this.events[i].point, a = this.events[i + 1].point;
        va(s, e, a) !== 0 && (n.push(s), e = s);
      }
      if (n.length === 1)
        return null;
      var u = n[0], l = n[1];
      va(u, e, l) === 0 && n.shift(), n.push(n[0]);
      for (var c = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : n.length - 1, h = this.isExteriorRing() ? n.length : -1, g = [], p = f; p != h; p += c)
        g.push([n[p].x, n[p].y]);
      return g;
    }
  }, {
    key: "isExteriorRing",
    value: function() {
      if (this._isExteriorRing === void 0) {
        var e = this.enclosingRing();
        this._isExteriorRing = e ? !e.isExteriorRing() : !0;
      }
      return this._isExteriorRing;
    }
  }, {
    key: "enclosingRing",
    value: function() {
      return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
    }
    /* Returns the ring that encloses this one, if any */
  }, {
    key: "_calcEnclosingRing",
    value: function() {
      for (var e = this.events[0], n = 1, i = this.events.length; n < i; n++) {
        var o = this.events[n];
        Xn.compare(e, o) > 0 && (e = o);
      }
      for (var s = e.segment.prevInResult(), a = s ? s.prevInResult() : null; ; ) {
        if (!s)
          return null;
        if (!a)
          return s.ringOut;
        if (a.ringOut !== s.ringOut)
          return a.ringOut.enclosingRing() !== s.ringOut ? s.ringOut : s.ringOut.enclosingRing();
        s = a.prevInResult(), a = s ? s.prevInResult() : null;
      }
    }
  }]), r;
}(), Ia = /* @__PURE__ */ function() {
  function r(t) {
    vn(this, r), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return Ne(r, [{
    key: "addInterior",
    value: function(e) {
      this.interiorRings.push(e), e.poly = this;
    }
  }, {
    key: "getGeom",
    value: function() {
      var e = [this.exteriorRing.getGeom()];
      if (e[0] === null)
        return null;
      for (var n = 0, i = this.interiorRings.length; n < i; n++) {
        var o = this.interiorRings[n].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }]), r;
}(), oc = /* @__PURE__ */ function() {
  function r(t) {
    vn(this, r), this.rings = t, this.polys = this._composePolys(t);
  }
  return Ne(r, [{
    key: "getGeom",
    value: function() {
      for (var e = [], n = 0, i = this.polys.length; n < i; n++) {
        var o = this.polys[n].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }, {
    key: "_composePolys",
    value: function(e) {
      for (var n = [], i = 0, o = e.length; i < o; i++) {
        var s = e[i];
        if (!s.poly)
          if (s.isExteriorRing())
            n.push(new Ia(s));
          else {
            var a = s.enclosingRing();
            a.poly || n.push(new Ia(a)), a.poly.addInterior(s);
          }
      }
      return n;
    }
  }]), r;
}(), sc = /* @__PURE__ */ function() {
  function r(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fo.compare;
    vn(this, r), this.queue = t, this.tree = new As(e), this.segments = [];
  }
  return Ne(r, [{
    key: "process",
    value: function(e) {
      var n = e.segment, i = [];
      if (e.consumedBy)
        return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(n), i;
      var o = e.isLeft ? this.tree.insert(n) : this.tree.find(n);
      if (!o)
        throw new Error("Unable to find segment #".concat(n.id, " ") + "[".concat(n.leftSE.point.x, ", ").concat(n.leftSE.point.y, "] -> ") + "[".concat(n.rightSE.point.x, ", ").concat(n.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
      for (var s = o, a = o, u = void 0, l = void 0; u === void 0; )
        s = this.tree.prev(s), s === null ? u = null : s.key.consumedBy === void 0 && (u = s.key);
      for (; l === void 0; )
        a = this.tree.next(a), a === null ? l = null : a.key.consumedBy === void 0 && (l = a.key);
      if (e.isLeft) {
        var c = null;
        if (u) {
          var f = u.getIntersection(n);
          if (f !== null && (n.isAnEndpoint(f) || (c = f), !u.isAnEndpoint(f)))
            for (var h = this._splitSafely(u, f), g = 0, p = h.length; g < p; g++)
              i.push(h[g]);
        }
        var y = null;
        if (l) {
          var d = l.getIntersection(n);
          if (d !== null && (n.isAnEndpoint(d) || (y = d), !l.isAnEndpoint(d)))
            for (var m = this._splitSafely(l, d), I = 0, C = m.length; I < C; I++)
              i.push(m[I]);
        }
        if (c !== null || y !== null) {
          var L = null;
          if (c === null)
            L = y;
          else if (y === null)
            L = c;
          else {
            var x = Xn.comparePoints(c, y);
            L = x <= 0 ? c : y;
          }
          this.queue.remove(n.rightSE), i.push(n.rightSE);
          for (var w = n.split(L), M = 0, B = w.length; M < B; M++)
            i.push(w[M]);
        }
        i.length > 0 ? (this.tree.remove(n), i.push(e)) : (this.segments.push(n), n.prev = u);
      } else {
        if (u && l) {
          var A = u.getIntersection(l);
          if (A !== null) {
            if (!u.isAnEndpoint(A))
              for (var q = this._splitSafely(u, A), j = 0, P = q.length; j < P; j++)
                i.push(q[j]);
            if (!l.isAnEndpoint(A))
              for (var X = this._splitSafely(l, A), R = 0, Y = X.length; R < Y; R++)
                i.push(X[R]);
          }
        }
        this.tree.remove(n);
      }
      return i;
    }
    /* Safely split a segment that is currently in the datastructures
     * IE - a segment other than the one that is currently being processed. */
  }, {
    key: "_splitSafely",
    value: function(e, n) {
      this.tree.remove(e);
      var i = e.rightSE;
      this.queue.remove(i);
      var o = e.split(n);
      return o.push(i), e.consumedBy === void 0 && this.tree.insert(e), o;
    }
  }]), r;
}(), Ca = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, ac = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, uc = /* @__PURE__ */ function() {
  function r() {
    vn(this, r);
  }
  return Ne(r, [{
    key: "run",
    value: function(e, n, i) {
      Nn.type = e, Zi.reset();
      for (var o = [new Ea(n, !0)], s = 0, a = i.length; s < a; s++)
        o.push(new Ea(i[s], !1));
      if (Nn.numMultiPolys = o.length, Nn.type === "difference")
        for (var u = o[0], l = 1; l < o.length; )
          Ss(o[l].bbox, u.bbox) !== null ? l++ : o.splice(l, 1);
      if (Nn.type === "intersection") {
        for (var c = 0, f = o.length; c < f; c++)
          for (var h = o[c], g = c + 1, p = o.length; g < p; g++)
            if (Ss(h.bbox, o[g].bbox) === null)
              return [];
      }
      for (var y = new As(Xn.compare), d = 0, m = o.length; d < m; d++)
        for (var I = o[d].getSweepEvents(), C = 0, L = I.length; C < L; C++)
          if (y.insert(I[C]), y.size > Ca)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var x = new sc(y), w = y.size, M = y.pop(); M; ) {
        var B = M.key;
        if (y.size === w) {
          var A = B.segment;
          throw new Error("Unable to pop() ".concat(B.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(B.point.x, ", ").concat(B.point.y, "] from segment #").concat(A.id, " ") + "[".concat(A.leftSE.point.x, ", ").concat(A.leftSE.point.y, "] -> ") + "[".concat(A.rightSE.point.x, ", ").concat(A.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (y.size > Ca)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (x.segments.length > ac)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var q = x.process(B), j = 0, P = q.length; j < P; j++) {
          var X = q[j];
          X.consumedBy === void 0 && y.insert(X);
        }
        w = y.size, M = y.pop();
      }
      Zi.reset();
      var R = ic.factory(x.segments), Y = new oc(R);
      return Y.getGeom();
    }
  }]), r;
}(), Nn = new uc(), lc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return Nn.run("union", t, n);
}, cc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return Nn.run("intersection", t, n);
}, fc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return Nn.run("xor", t, n);
}, hc = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return Nn.run("difference", t, n);
}, eu = {
  union: lc,
  intersection: cc,
  xor: fc,
  difference: hc
}, Ee = 63710088e-1, nu = {
  centimeters: Ee * 100,
  centimetres: Ee * 100,
  degrees: Ee / 111325,
  feet: Ee * 3.28084,
  inches: Ee * 39.37,
  kilometers: Ee / 1e3,
  kilometres: Ee / 1e3,
  meters: Ee,
  metres: Ee,
  miles: Ee / 1609.344,
  millimeters: Ee * 1e3,
  millimetres: Ee * 1e3,
  nauticalmiles: Ee / 1852,
  radians: 1,
  yards: Ee * 1.0936
};
function jo(r, t, e) {
  e === void 0 && (e = {});
  var n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = r, n;
}
function gc(r, t, e) {
  if (e === void 0 && (e = {}), !r)
    throw new Error("coordinates is required");
  if (!Array.isArray(r))
    throw new Error("coordinates must be an Array");
  if (r.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Na(r[0]) || !Na(r[1]))
    throw new Error("coordinates must contain numbers");
  var n = {
    type: "Point",
    coordinates: r
  };
  return jo(n, t, e);
}
function ru(r, t, e) {
  e === void 0 && (e = {});
  for (var n = 0, i = r; n < i.length; n++) {
    var o = i[n];
    if (o.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var s = 0; s < o[o.length - 1].length; s++)
      if (o[o.length - 1][s] !== o[0][s])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: r
  };
  return jo(a, t, e);
}
function Ls(r, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = r, e;
}
function iu(r, t, e) {
  e === void 0 && (e = {});
  var n = {
    type: "MultiPolygon",
    coordinates: r
  };
  return jo(n, t, e);
}
function pc(r, t) {
  t === void 0 && (t = "kilometers");
  var e = nu[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return r * e;
}
function dc(r, t) {
  t === void 0 && (t = "kilometers");
  var e = nu[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return r / e;
}
function Na(r) {
  return !isNaN(r) && r !== null && !Array.isArray(r);
}
function Bo(r) {
  return r.type === "Feature" ? r.geometry : r;
}
function vc(r, t, e) {
  e === void 0 && (e = {});
  var n = Bo(r), i = Bo(t), o = eu.union(n.coordinates, i.coordinates);
  return o.length === 0 ? null : o.length === 1 ? ru(o[0], e.properties) : iu(o, e.properties);
}
function yc(r) {
  let t, e, n;
  return {
    c() {
      t = jn("svg"), e = jn("path"), D(e, "stroke-width", "4"), D(e, "fill-rule", "evenodd"), D(e, "clip-rule", "evenodd"), D(e, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), D(e, "class", "svelte-1k1cmht"), D(t, "width", n = /*displayIn*/
      r[0] !== "list" ? void 0 : "20"), D(t, "viewBox", "0 0 70 85"), D(t, "fill", "none"), D(t, "class", "svelte-1k1cmht"), nn(
        t,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), nn(
        t,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    m(i, o) {
      Be(i, t, o), rt(t, e);
    },
    p(i, [o]) {
      o & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      i[0] !== "list" ? void 0 : "20") && D(t, "width", n), o & /*displayIn*/
      1 && nn(
        t,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), o & /*displayIn*/
      1 && nn(
        t,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    i: _t,
    o: _t,
    d(i) {
      i && Pe(t);
    }
  };
}
function mc(r, t, e) {
  let { displayIn: n } = t;
  return r.$$set = (i) => {
    "displayIn" in i && e(0, n = i.displayIn);
  }, [n];
}
class _c extends zr {
  constructor(t) {
    super(), kr(this, t, mc, yc, Gr, { displayIn: 0 });
  }
}
function ou(r, t, e) {
  if (r !== null)
    for (var n, i, o, s, a, u, l, c = 0, f = 0, h, g = r.type, p = g === "FeatureCollection", y = g === "Feature", d = p ? r.features.length : 1, m = 0; m < d; m++) {
      l = p ? r.features[m].geometry : y ? r.geometry : r, h = l ? l.type === "GeometryCollection" : !1, a = h ? l.geometries.length : 1;
      for (var I = 0; I < a; I++) {
        var C = 0, L = 0;
        if (s = h ? l.geometries[I] : l, s !== null) {
          u = s.coordinates;
          var x = s.type;
          switch (c = e && (x === "Polygon" || x === "MultiPolygon") ? 1 : 0, x) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                f,
                m,
                C,
                L
              ) === !1)
                return !1;
              f++, C++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < u.length; n++) {
                if (t(
                  u[n],
                  f,
                  m,
                  C,
                  L
                ) === !1)
                  return !1;
                f++, x === "MultiPoint" && C++;
              }
              x === "LineString" && C++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < u.length; n++) {
                for (i = 0; i < u[n].length - c; i++) {
                  if (t(
                    u[n][i],
                    f,
                    m,
                    C,
                    L
                  ) === !1)
                    return !1;
                  f++;
                }
                x === "MultiLineString" && C++, x === "Polygon" && L++;
              }
              x === "Polygon" && C++;
              break;
            case "MultiPolygon":
              for (n = 0; n < u.length; n++) {
                for (L = 0, i = 0; i < u[n].length; i++) {
                  for (o = 0; o < u[n][i].length - c; o++) {
                    if (t(
                      u[n][i][o],
                      f,
                      m,
                      C,
                      L
                    ) === !1)
                      return !1;
                    f++;
                  }
                  L++;
                }
                C++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < s.geometries.length; n++)
                if (ou(s.geometries[n], t, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function xa(r, t) {
  if (r.type === "Feature")
    t(r, 0);
  else if (r.type === "FeatureCollection")
    for (var e = 0; e < r.features.length && t(r.features[e], e) !== !1; e++)
      ;
}
function su(r, t) {
  var e, n, i, o, s, a, u, l, c, f, h = 0, g = r.type === "FeatureCollection", p = r.type === "Feature", y = g ? r.features.length : 1;
  for (e = 0; e < y; e++) {
    for (a = g ? r.features[e].geometry : p ? r.geometry : r, l = g ? r.features[e].properties : p ? r.properties : {}, c = g ? r.features[e].bbox : p ? r.bbox : void 0, f = g ? r.features[e].id : p ? r.id : void 0, u = a ? a.type === "GeometryCollection" : !1, s = u ? a.geometries.length : 1, i = 0; i < s; i++) {
      if (o = u ? a.geometries[i] : a, o === null) {
        if (t(
          null,
          h,
          l,
          c,
          f
        ) === !1)
          return !1;
        continue;
      }
      switch (o.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            o,
            h,
            l,
            c,
            f
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < o.geometries.length; n++)
            if (t(
              o.geometries[n],
              h,
              l,
              c,
              f
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    h++;
  }
}
function bs(r) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return ou(r, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
bs.default = bs;
function Ec(r, t) {
  t === void 0 && (t = {});
  var e = bs(r), n = (e[0] + e[2]) / 2, i = (e[1] + e[3]) / 2;
  return gc([n, i], t.properties, t);
}
"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
  configurable: !0,
  value: function(t) {
    if (this === void 0 || this === null)
      throw new TypeError(this + " is not an object");
    var e = Object(this), n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, i = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
    i = i < 0 ? Math.max(n + i, 0) : Math.min(i, n);
    var o = 2 in arguments && arguments[2] !== void 0 ? parseInt(Number(arguments[2]), 10) || 0 : n;
    for (o = o < 0 ? Math.max(n + arguments[2], 0) : Math.min(o, n); i < o; )
      e[i] = t, ++i;
    return e;
  },
  writable: !0
});
Number.isFinite = Number.isFinite || function(r) {
  return typeof r == "number" && isFinite(r);
};
Number.isInteger = Number.isInteger || function(r) {
  return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
};
Number.parseFloat = Number.parseFloat || parseFloat;
Number.isNaN = Number.isNaN || function(r) {
  return r !== r;
};
Math.trunc = Math.trunc || function(r) {
  return r < 0 ? Math.ceil(r) : Math.floor(r);
};
var Kr = function() {
};
Kr.prototype.interfaces_ = function() {
  return [];
};
Kr.prototype.getClass = function() {
  return Kr;
};
Kr.prototype.equalsWithTolerance = function(t, e, n) {
  return Math.abs(t - e) <= n;
};
var ct = function(r) {
  function t(e) {
    r.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new r().stack;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(Error), z = function() {
}, au = { MAX_VALUE: { configurable: !0 } };
z.isNaN = function(t) {
  return Number.isNaN(t);
};
z.doubleToLongBits = function(t) {
  return t;
};
z.longBitsToDouble = function(t) {
  return t;
};
z.isInfinite = function(t) {
  return !Number.isFinite(t);
};
au.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(z, au);
var Ge = function() {
}, Ko = function() {
}, yi = function() {
};
function ke() {
}
var v = function r() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = r.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = r.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, ai = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
v.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case v.X:
      this.x = e;
      break;
    case v.Y:
      this.y = e;
      break;
    case v.Z:
      this.z = e;
      break;
    default:
      throw new ct("Invalid ordinate index: " + t);
  }
};
v.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return !(!Kr.equalsWithTolerance(this.x, e.x, n) || !Kr.equalsWithTolerance(this.y, e.y, n));
  }
};
v.prototype.getOrdinate = function(t) {
  switch (t) {
    case v.X:
      return this.x;
    case v.Y:
      return this.y;
    case v.Z:
      return this.z;
  }
  throw new ct("Invalid ordinate index: " + t);
};
v.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || z.isNaN(this.z)) && z.isNaN(t.z);
};
v.prototype.equals = function(t) {
  return t instanceof v ? this.equals2D(t) : !1;
};
v.prototype.equalInZ = function(t, e) {
  return Kr.equalsWithTolerance(this.z, t.z, e);
};
v.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
v.prototype.clone = function() {
};
v.prototype.copy = function() {
  return new v(this);
};
v.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
v.prototype.distance3D = function(t) {
  var e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
  return Math.sqrt(e * e + n * n + i * i);
};
v.prototype.distance = function(t) {
  var e = this.x - t.x, n = this.y - t.y;
  return Math.sqrt(e * e + n * n);
};
v.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + v.hashCode(this.x), t = 37 * t + v.hashCode(this.y), t;
};
v.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
v.prototype.interfaces_ = function() {
  return [Ge, Ko, ke];
};
v.prototype.getClass = function() {
  return v;
};
v.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = z.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
ai.DimensionalComparator.get = function() {
  return ir;
};
ai.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
ai.NULL_ORDINATE.get = function() {
  return z.NaN;
};
ai.X.get = function() {
  return 0;
};
ai.Y.get = function() {
  return 1;
};
ai.Z.get = function() {
  return 2;
};
Object.defineProperties(v, ai);
var ir = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new ct("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
ir.prototype.compare = function(t, e) {
  var n = t, i = e, o = ir.compare(n.x, i.x);
  if (o !== 0)
    return o;
  var s = ir.compare(n.y, i.y);
  if (s !== 0)
    return s;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = ir.compare(n.z, i.z);
  return a;
};
ir.prototype.interfaces_ = function() {
  return [yi];
};
ir.prototype.getClass = function() {
  return ir;
};
ir.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : z.isNaN(t) ? z.isNaN(e) ? 0 : -1 : z.isNaN(e) ? 1 : 0;
};
var mi = function() {
};
mi.prototype.create = function() {
};
mi.prototype.interfaces_ = function() {
  return [];
};
mi.prototype.getClass = function() {
  return mi;
};
var _ = function() {
}, go = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
_.prototype.interfaces_ = function() {
  return [];
};
_.prototype.getClass = function() {
  return _;
};
_.toLocationSymbol = function(t) {
  switch (t) {
    case _.EXTERIOR:
      return "e";
    case _.BOUNDARY:
      return "b";
    case _.INTERIOR:
      return "i";
    case _.NONE:
      return "-";
  }
  throw new ct("Unknown location value: " + t);
};
go.INTERIOR.get = function() {
  return 0;
};
go.BOUNDARY.get = function() {
  return 1;
};
go.EXTERIOR.get = function() {
  return 2;
};
go.NONE.get = function() {
  return -1;
};
Object.defineProperties(_, go);
var k = function(r, t) {
  return r.interfaces_ && r.interfaces_().indexOf(t) > -1;
}, xe = function() {
}, uu = { LOG_10: { configurable: !0 } };
xe.prototype.interfaces_ = function() {
  return [];
};
xe.prototype.getClass = function() {
  return xe;
};
xe.log10 = function(t) {
  var e = Math.log(t);
  return z.isInfinite(e) || z.isNaN(e) ? e : e / xe.LOG_10;
};
xe.min = function(t, e, n, i) {
  var o = t;
  return e < o && (o = e), n < o && (o = n), i < o && (o = i), o;
};
xe.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return t < e ? e : t > n ? n : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    return i < o ? o : i > s ? s : i;
  }
};
xe.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
xe.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2], i = t;
    return e > i && (i = e), n > i && (i = n), i;
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = o;
    return s > l && (l = s), a > l && (l = a), u > l && (l = u), l;
  }
};
xe.average = function(t, e) {
  return (t + e) / 2;
};
uu.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(xe, uu);
var yn = function(t) {
  this.str = t;
};
yn.prototype.append = function(t) {
  this.str += t;
};
yn.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
yn.prototype.toString = function(t) {
  return this.str;
};
var sn = function(t) {
  this.value = t;
};
sn.prototype.intValue = function() {
  return this.value;
};
sn.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
sn.isNaN = function(t) {
  return Number.isNaN(t);
};
var $i = function() {
};
$i.isWhitespace = function(t) {
  return t <= 32 && t >= 0 || t === 127;
};
$i.toUpperCase = function(t) {
  return t.toUpperCase();
};
var E = function r() {
  if (this._hi = 0, this._lo = 0, arguments.length === 0)
    this.init(0);
  else if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this.init(t);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.init(e);
    } else if (typeof arguments[0] == "string") {
      var n = arguments[0];
      r.call(this, r.parse(n));
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    this.init(i, o);
  }
}, Qe = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
E.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
E.prototype.extractSignificantDigits = function(t, e) {
  var n = this.abs(), i = E.magnitude(n._hi), o = E.TEN.pow(i);
  n = n.divide(o), n.gt(E.TEN) ? (n = n.divide(E.TEN), i += 1) : n.lt(E.ONE) && (n = n.multiply(E.TEN), i -= 1);
  for (var s = i + 1, a = new yn(), u = E.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === s && a.append(".");
    var c = Math.trunc(n._hi);
    if (c < 0)
      break;
    var f = !1, h = 0;
    c > 9 ? (f = !0, h = "9") : h = "0" + c, a.append(h), n = n.subtract(E.valueOf(c)).multiply(E.TEN), f && n.selfAdd(E.TEN);
    var g = !0, p = E.magnitude(n._hi);
    if (p < 0 && Math.abs(p) >= u - l && (g = !1), !g)
      break;
  }
  return e[0] = i, a.toString();
};
E.prototype.sqr = function() {
  return this.multiply(this);
};
E.prototype.doubleValue = function() {
  return this._hi + this._lo;
};
E.prototype.subtract = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.add(t.negate());
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.add(-e);
  }
};
E.prototype.equals = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._hi === t._hi && this._lo === t._lo;
  }
};
E.prototype.isZero = function() {
  return this._hi === 0 && this._lo === 0;
};
E.prototype.selfSubtract = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-e, 0);
  }
};
E.prototype.getSpecialNumberString = function() {
  return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
};
E.prototype.min = function(t) {
  return this.le(t) ? this : t;
};
E.prototype.selfDivide = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfDivide(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfDivide(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null, f = null, h = null;
    return l = this._hi / n, c = E.SPLIT * l, o = c - l, h = E.SPLIT * n, o = c - o, s = l - o, a = h - n, f = l * n, a = h - a, u = n - a, h = o * a - f + o * u + s * a + s * u, c = (this._hi - f - h + this._lo - l * i) / n, h = l + c, this._hi = h, this._lo = l - h + c, this;
  }
};
E.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
E.prototype.divide = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0], e = null, n = null, i = null, o = null, s = null, a = null, u = null, l = null;
    s = this._hi / t._hi, a = E.SPLIT * s, e = a - s, l = E.SPLIT * t._hi, e = a - e, n = s - e, i = l - t._hi, u = s * t._hi, i = l - i, o = t._hi - i, l = e * i - u + e * o + n * i + n * o, a = (this._hi - u - l + this._lo - s * t._lo) / t._hi, l = s + a;
    var c = l, f = s - l + a;
    return new E(c, f);
  } else if (typeof arguments[0] == "number") {
    var h = arguments[0];
    return z.isNaN(h) ? E.createNaN() : E.copy(this).selfDivide(h, 0);
  }
};
E.prototype.ge = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo;
};
E.prototype.pow = function(t) {
  if (t === 0)
    return E.valueOf(1);
  var e = new E(this), n = E.valueOf(1), i = Math.abs(t);
  if (i > 1)
    for (; i > 0; )
      i % 2 === 1 && n.selfMultiply(e), i /= 2, i > 0 && (e = e.sqr());
  else
    n = e;
  return t < 0 ? n.reciprocal() : n;
};
E.prototype.ceil = function() {
  if (this.isNaN())
    return E.NaN;
  var t = Math.ceil(this._hi), e = 0;
  return t === this._hi && (e = Math.ceil(this._lo)), new E(t, e);
};
E.prototype.compareTo = function(t) {
  var e = t;
  return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
};
E.prototype.rint = function() {
  if (this.isNaN())
    return this;
  var t = this.add(0.5);
  return t.floor();
};
E.prototype.setValue = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return this.init(t), this;
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.init(e), this;
  }
};
E.prototype.max = function(t) {
  return this.ge(t) ? this : t;
};
E.prototype.sqrt = function() {
  if (this.isZero())
    return E.valueOf(0);
  if (this.isNegative())
    return E.NaN;
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, n = E.valueOf(e), i = this.subtract(n.sqr()), o = i._hi * (t * 0.5);
  return n.add(o);
};
E.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], n = null, i = null, o = null, s = null, a = null, u = null;
      return o = this._hi + e, a = o - this._hi, s = o - a, s = e - a + (this._hi - s), u = s + this._lo, n = o + u, i = u + (o - n), this._hi = n + i, this._lo = i + (n - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], f = null, h = null, g = null, p = null, y = null, d = null, m = null, I = null;
    y = this._hi + l, g = this._lo + c, m = y - this._hi, I = g - this._lo, d = y - m, p = g - I, d = l - m + (this._hi - d), p = c - I + (this._lo - p), m = d + g, f = y + m, h = m + (y - f), m = p + h;
    var C = f + m, L = m + (f - C);
    return this._hi = C, this._lo = L, this;
  }
};
E.prototype.selfMultiply = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.selfMultiply(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfMultiply(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = null, s = null, a = null, u = null, l = null, c = null;
    l = E.SPLIT * this._hi, o = l - this._hi, c = E.SPLIT * n, o = l - o, s = this._hi - o, a = c - n, l = this._hi * n, a = c - a, u = n - a, c = o * a - l + o * u + s * a + s * u + (this._hi * i + this._lo * n);
    var f = l + c;
    o = l - f;
    var h = c + o;
    return this._hi = f, this._lo = h, this;
  }
};
E.prototype.selfSqr = function() {
  return this.selfMultiply(this);
};
E.prototype.floor = function() {
  if (this.isNaN())
    return E.NaN;
  var t = Math.floor(this._hi), e = 0;
  return t === this._hi && (e = Math.floor(this._lo)), new E(t, e);
};
E.prototype.negate = function() {
  return this.isNaN() ? this : new E(-this._hi, -this._lo);
};
E.prototype.clone = function() {
};
E.prototype.multiply = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return t.isNaN() ? E.createNaN() : E.copy(this).selfMultiply(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return z.isNaN(e) ? E.createNaN() : E.copy(this).selfMultiply(e, 0);
  }
};
E.prototype.isNaN = function() {
  return z.isNaN(this._hi);
};
E.prototype.intValue = function() {
  return Math.trunc(this._hi);
};
E.prototype.toString = function() {
  var t = E.magnitude(this._hi);
  return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
};
E.prototype.toStandardNotation = function() {
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!0, e), i = e[0] + 1, o = n;
  if (n.charAt(0) === ".")
    o = "0" + n;
  else if (i < 0)
    o = "0." + E.stringOfChar("0", -i) + n;
  else if (n.indexOf(".") === -1) {
    var s = i - n.length, a = E.stringOfChar("0", s);
    o = n + a + ".0";
  }
  return this.isNegative() ? "-" + o : o;
};
E.prototype.reciprocal = function() {
  var t = null, e = null, n = null, i = null, o = null, s = null, a = null, u = null;
  o = 1 / this._hi, s = E.SPLIT * o, t = s - o, u = E.SPLIT * this._hi, t = s - t, e = o - t, n = u - this._hi, a = o * this._hi, n = u - n, i = this._hi - n, u = t * n - a + t * i + e * n + e * i, s = (1 - a - u - o * this._lo) / this._hi;
  var l = o + s, c = o - l + s;
  return new E(l, c);
};
E.prototype.toSciNotation = function() {
  if (this.isZero())
    return E.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!1, e), i = E.SCI_NOT_EXPONENT_CHAR + e[0];
  if (n.charAt(0) === "0")
    throw new Error("Found leading zero: " + n);
  var o = "";
  n.length > 1 && (o = n.substring(1));
  var s = n.charAt(0) + "." + o;
  return this.isNegative() ? "-" + s + i : s + i;
};
E.prototype.abs = function() {
  return this.isNaN() ? E.NaN : this.isNegative() ? this.negate() : new E(this);
};
E.prototype.isPositive = function() {
  return (this._hi > 0 || this._hi === 0) && this._lo > 0;
};
E.prototype.lt = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo;
};
E.prototype.add = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    return E.copy(this).selfAdd(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return E.copy(this).selfAdd(e);
  }
};
E.prototype.init = function() {
  if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this._hi = t, this._lo = 0;
    } else if (arguments[0] instanceof E) {
      var e = arguments[0];
      this._hi = e._hi, this._lo = e._lo;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this._hi = n, this._lo = i;
  }
};
E.prototype.gt = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo;
};
E.prototype.isNegative = function() {
  return (this._hi < 0 || this._hi === 0) && this._lo < 0;
};
E.prototype.trunc = function() {
  return this.isNaN() ? E.NaN : this.isPositive() ? this.floor() : this.ceil();
};
E.prototype.signum = function() {
  return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
};
E.prototype.interfaces_ = function() {
  return [ke, Ge, Ko];
};
E.prototype.getClass = function() {
  return E;
};
E.sqr = function(t) {
  return E.valueOf(t).selfMultiply(t);
};
E.valueOf = function() {
  if (typeof arguments[0] == "string") {
    var t = arguments[0];
    return E.parse(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return new E(e);
  }
};
E.sqrt = function(t) {
  return E.valueOf(t).sqrt();
};
E.parse = function(t) {
  for (var e = 0, n = t.length; $i.isWhitespace(t.charAt(e)); )
    e++;
  var i = !1;
  if (e < n) {
    var o = t.charAt(e);
    (o === "-" || o === "+") && (e++, o === "-" && (i = !0));
  }
  for (var s = new E(), a = 0, u = 0, l = 0; !(e >= n); ) {
    var c = t.charAt(e);
    if (e++, $i.isDigit(c)) {
      var f = c - "0";
      s.selfMultiply(E.TEN), s.selfAdd(f), a++;
      continue;
    }
    if (c === ".") {
      u = a;
      continue;
    }
    if (c === "e" || c === "E") {
      var h = t.substring(e);
      try {
        l = sn.parseInt(h);
      } catch (m) {
        throw m instanceof Error ? new Error("Invalid exponent " + h + " in string " + t) : m;
      } finally {
      }
      break;
    }
    throw new Error("Unexpected character '" + c + "' at position " + e + " in string " + t);
  }
  var g = s, p = a - u - l;
  if (p === 0)
    g = s;
  else if (p > 0) {
    var y = E.TEN.pow(p);
    g = s.divide(y);
  } else if (p < 0) {
    var d = E.TEN.pow(-p);
    g = s.multiply(d);
  }
  return i ? g.negate() : g;
};
E.createNaN = function() {
  return new E(z.NaN, z.NaN);
};
E.copy = function(t) {
  return new E(t);
};
E.magnitude = function(t) {
  var e = Math.abs(t), n = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(n)), o = Math.pow(10, i);
  return o * 10 <= e && (i += 1), i;
};
E.stringOfChar = function(t, e) {
  for (var n = new yn(), i = 0; i < e; i++)
    n.append(t);
  return n.toString();
};
Qe.PI.get = function() {
  return new E(3.141592653589793, 12246467991473532e-32);
};
Qe.TWO_PI.get = function() {
  return new E(6.283185307179586, 24492935982947064e-32);
};
Qe.PI_2.get = function() {
  return new E(1.5707963267948966, 6123233995736766e-32);
};
Qe.E.get = function() {
  return new E(2.718281828459045, 14456468917292502e-32);
};
Qe.NaN.get = function() {
  return new E(z.NaN, z.NaN);
};
Qe.EPS.get = function() {
  return 123259516440783e-46;
};
Qe.SPLIT.get = function() {
  return 134217729;
};
Qe.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
Qe.TEN.get = function() {
  return E.valueOf(10);
};
Qe.ONE.get = function() {
  return E.valueOf(1);
};
Qe.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
Qe.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(E, Qe);
var ue = function() {
}, lu = { DP_SAFE_EPSILON: { configurable: !0 } };
ue.prototype.interfaces_ = function() {
  return [];
};
ue.prototype.getClass = function() {
  return ue;
};
ue.orientationIndex = function(t, e, n) {
  var i = ue.orientationIndexFilter(t, e, n);
  if (i <= 1)
    return i;
  var o = E.valueOf(e.x).selfAdd(-t.x), s = E.valueOf(e.y).selfAdd(-t.y), a = E.valueOf(n.x).selfAdd(-e.x), u = E.valueOf(n.y).selfAdd(-e.y);
  return o.selfMultiply(u).selfSubtract(s.selfMultiply(a)).signum();
};
ue.signOfDet2x2 = function(t, e, n, i) {
  var o = t.multiply(i).selfSubtract(e.multiply(n));
  return o.signum();
};
ue.intersection = function(t, e, n, i) {
  var o = E.valueOf(i.y).selfSubtract(n.y).selfMultiply(E.valueOf(e.x).selfSubtract(t.x)), s = E.valueOf(i.x).selfSubtract(n.x).selfMultiply(E.valueOf(e.y).selfSubtract(t.y)), a = o.subtract(s), u = E.valueOf(i.x).selfSubtract(n.x).selfMultiply(E.valueOf(t.y).selfSubtract(n.y)), l = E.valueOf(i.y).selfSubtract(n.y).selfMultiply(E.valueOf(t.x).selfSubtract(n.x)), c = u.subtract(l), f = c.selfDivide(a).doubleValue(), h = E.valueOf(t.x).selfAdd(E.valueOf(e.x).selfSubtract(t.x).selfMultiply(f)).doubleValue(), g = E.valueOf(e.x).selfSubtract(t.x).selfMultiply(E.valueOf(t.y).selfSubtract(n.y)), p = E.valueOf(e.y).selfSubtract(t.y).selfMultiply(E.valueOf(t.x).selfSubtract(n.x)), y = g.subtract(p), d = y.selfDivide(a).doubleValue(), m = E.valueOf(n.y).selfAdd(E.valueOf(i.y).selfSubtract(n.y).selfMultiply(d)).doubleValue();
  return new v(h, m);
};
ue.orientationIndexFilter = function(t, e, n) {
  var i = null, o = (t.x - n.x) * (e.y - n.y), s = (t.y - n.y) * (e.x - n.x), a = o - s;
  if (o > 0) {
    if (s <= 0)
      return ue.signum(a);
    i = o + s;
  } else if (o < 0) {
    if (s >= 0)
      return ue.signum(a);
    i = -o - s;
  } else
    return ue.signum(a);
  var u = ue.DP_SAFE_EPSILON * i;
  return a >= u || -a >= u ? ue.signum(a) : 2;
};
ue.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
lu.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(ue, lu);
var Q = function() {
}, po = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
po.X.get = function() {
  return 0;
};
po.Y.get = function() {
  return 1;
};
po.Z.get = function() {
  return 2;
};
po.M.get = function() {
  return 3;
};
Q.prototype.setOrdinate = function(t, e, n) {
};
Q.prototype.size = function() {
};
Q.prototype.getOrdinate = function(t, e) {
};
Q.prototype.getCoordinate = function() {
};
Q.prototype.getCoordinateCopy = function(t) {
};
Q.prototype.getDimension = function() {
};
Q.prototype.getX = function(t) {
};
Q.prototype.clone = function() {
};
Q.prototype.expandEnvelope = function(t) {
};
Q.prototype.copy = function() {
};
Q.prototype.getY = function(t) {
};
Q.prototype.toCoordinateArray = function() {
};
Q.prototype.interfaces_ = function() {
  return [Ko];
};
Q.prototype.getClass = function() {
  return Q;
};
Object.defineProperties(Q, po);
var cu = function() {
}, ki = function(r) {
  function t() {
    r.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(cu), Ut = function() {
};
Ut.arraycopy = function(t, e, n, i, o) {
  for (var s = 0, a = e; a < e + o; a++)
    n[i + s] = t[a], s++;
};
Ut.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var Ve = function r() {
  if (this.x = null, this.y = null, this.w = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.w = 1;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.w = 1;
  } else if (arguments.length === 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      var e = arguments[0], n = arguments[1];
      this.x = e, this.y = n, this.w = 1;
    } else if (arguments[0] instanceof r && arguments[1] instanceof r) {
      var i = arguments[0], o = arguments[1];
      this.x = i.y * o.w - o.y * i.w, this.y = o.x * i.w - i.x * o.w, this.w = i.x * o.y - o.x * i.y;
    } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
      var s = arguments[0], a = arguments[1];
      this.x = s.y - a.y, this.y = a.x - s.x, this.w = s.x * a.y - a.x * s.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var f = arguments[0], h = arguments[1], g = arguments[2], p = arguments[3], y = f.y - h.y, d = h.x - f.x, m = f.x * h.y - h.x * f.y, I = g.y - p.y, C = p.x - g.x, L = g.x * p.y - p.x * g.y;
    this.x = d * L - C * m, this.y = I * m - y * L, this.w = y * C - I * d;
  }
};
Ve.prototype.getY = function() {
  var t = this.y / this.w;
  if (z.isNaN(t) || z.isInfinite(t))
    throw new ki();
  return t;
};
Ve.prototype.getX = function() {
  var t = this.x / this.w;
  if (z.isNaN(t) || z.isInfinite(t))
    throw new ki();
  return t;
};
Ve.prototype.getCoordinate = function() {
  var t = new v();
  return t.x = this.getX(), t.y = this.getY(), t;
};
Ve.prototype.interfaces_ = function() {
  return [];
};
Ve.prototype.getClass = function() {
  return Ve;
};
Ve.intersection = function(t, e, n, i) {
  var o = t.y - e.y, s = e.x - t.x, a = t.x * e.y - e.x * t.y, u = n.y - i.y, l = i.x - n.x, c = n.x * i.y - i.x * n.y, f = s * c - l * a, h = u * a - o * c, g = o * l - u * s, p = f / g, y = h / g;
  if (z.isNaN(p) || z.isInfinite(p) || z.isNaN(y) || z.isInfinite(y))
    throw new ki();
  return new v(p, y);
};
var T = function r() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.init(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.init(n.x, i.x, n.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    this.init(o, s, a, u);
  }
}, fu = { serialVersionUID: { configurable: !0 } };
T.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
T.prototype.equals = function(t) {
  if (!(t instanceof T))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
T.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new T();
  var e = this._minx > t._minx ? this._minx : t._minx, n = this._miny > t._miny ? this._miny : t._miny, i = this._maxx < t._maxx ? this._maxx : t._maxx, o = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new T(e, i, n, o);
};
T.prototype.isNull = function() {
  return this._maxx < this._minx;
};
T.prototype.getMaxX = function() {
  return this._maxx;
};
T.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof T) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : n >= this._minx && n <= this._maxx && i >= this._miny && i <= this._maxy;
  }
};
T.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof T) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof v) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : !(n > this._maxx || n < this._minx || i > this._maxy || i < this._miny);
  }
};
T.prototype.getMinY = function() {
  return this._miny;
};
T.prototype.getMinX = function() {
  return this._minx;
};
T.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof T) {
      var e = arguments[0];
      if (e.isNull())
        return null;
      this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.isNull() ? (this._minx = n, this._maxx = n, this._miny = i, this._maxy = i) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
  }
};
T.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
T.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
T.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
T.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
T.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
T.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
T.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
T.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
T.prototype.expandBy = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.expandBy(t, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this.isNull())
      return null;
    this._minx -= e, this._maxx += e, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
  }
};
T.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof T) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof v) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.covers(n, i);
  }
};
T.prototype.centre = function() {
  return this.isNull() ? null : new v((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
T.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof T) {
      var e = arguments[0];
      this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.init(n.x, i.x, n.y, i.y);
  } else if (arguments.length === 4) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3];
    o < s ? (this._minx = o, this._maxx = s) : (this._minx = s, this._maxx = o), a < u ? (this._miny = a, this._maxy = u) : (this._miny = u, this._maxy = a);
  }
};
T.prototype.getMaxY = function() {
  return this._maxy;
};
T.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var n = 0;
  return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), e === 0 ? n : n === 0 ? e : Math.sqrt(e * e + n * n);
};
T.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + v.hashCode(this._minx), t = 37 * t + v.hashCode(this._maxx), t = 37 * t + v.hashCode(this._miny), t = 37 * t + v.hashCode(this._maxy), t;
};
T.prototype.interfaces_ = function() {
  return [Ge, ke];
};
T.prototype.getClass = function() {
  return T;
};
T.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = Math.min(s.x, a.x), l = Math.max(s.x, a.x), c = Math.min(i.x, o.x), f = Math.max(i.x, o.x);
    return !(c > l || f < u || (u = Math.min(s.y, a.y), l = Math.max(s.y, a.y), c = Math.min(i.y, o.y), f = Math.max(i.y, o.y), c > l) || f < u);
  }
};
fu.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(T, fu);
var Ze = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, Qo = function(t) {
  this.geometryFactory = t || new H();
};
Qo.prototype.read = function(t) {
  var e, n, i;
  t = t.replace(/[\n\r]/g, " ");
  var o = Ze.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (o = Ze.emptyTypeStr.exec(t), o[2] = void 0), o && (n = o[1].toLowerCase(), i = o[2], di[n] && (e = di[n].apply(this, [i]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
Qo.prototype.write = function(t) {
  return this.extractGeometry(t);
};
Qo.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!Un[e])
    return null;
  var n = e.toUpperCase(), i;
  return t.isEmpty() ? i = n + " EMPTY" : i = n + "(" + Un[e].apply(this, [t]) + ")", i;
};
var Un = {
  coordinate: function(t) {
    return t.x + " " + t.y;
  },
  /**
   * Return a space delimited string of point coordinates.
   *
   * @param {Point}
   *          point
   * @return {String} A string of coordinates representing the point.
   */
  point: function(t) {
    return Un.coordinate.call(this, t._coordinates._coordinates[0]);
  },
  /**
   * Return a comma delimited string of point coordinates from a multipoint.
   *
   * @param {MultiPoint}
   *          multipoint
   * @return {String} A string of point coordinate strings representing the
   *         multipoint.
   */
  multipoint: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push("(" + Un.point.apply(e, [t._geometries[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return a comma delimited string of point coordinates from a line.
   *
   * @param {LineString} linestring
   * @return {String} A string of point coordinate strings representing the linestring.
   */
  linestring: function(t) {
    for (var e = this, n = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      n.push(Un.coordinate.apply(e, [t._points._coordinates[i]]));
    return n.join(",");
  },
  linearring: function(t) {
    for (var e = this, n = [], i = 0, o = t._points._coordinates.length; i < o; ++i)
      n.push(Un.coordinate.apply(e, [t._points._coordinates[i]]));
    return n.join(",");
  },
  /**
   * Return a comma delimited string of linestring strings from a
   * multilinestring.
   *
   * @param {MultiLineString} multilinestring
   * @return {String} A string of of linestring strings representing the multilinestring.
   */
  multilinestring: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push("(" + Un.linestring.apply(e, [t._geometries[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return a comma delimited string of linear ring arrays from a polygon.
   *
   * @param {Polygon} polygon
   * @return {String} An array of linear ring arrays representing the polygon.
   */
  polygon: function(t) {
    var e = this, n = [];
    n.push("(" + Un.linestring.apply(this, [t._shell]) + ")");
    for (var i = 0, o = t._holes.length; i < o; ++i)
      n.push("(" + Un.linestring.apply(e, [t._holes[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return an array of polygon arrays from a multipolygon.
   *
   * @param {MultiPolygon} multipolygon
   * @return {String} An array of polygon arrays representing the multipolygon.
   */
  multipolygon: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push("(" + Un.polygon.apply(e, [t._geometries[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an
   * geometrycollection.
   *
   * @param {GeometryCollection} collection
   * @return {String} internal WKT representation of the collection.
   */
  geometrycollection: function(t) {
    for (var e = this, n = [], i = 0, o = t._geometries.length; i < o; ++i)
      n.push(e.extractGeometry(t._geometries[i]));
    return n.join(",");
  }
}, di = {
  /**
   * Return point geometry given a point WKT fragment.
   *
   * @param {String} str A WKT fragment representing the point.
   * @return {Point} A point geometry.
   * @private
   */
  point: function(t) {
    if (t === void 0)
      return this.geometryFactory.createPoint();
    var e = t.trim().split(Ze.spaces);
    return this.geometryFactory.createPoint(new v(
      Number.parseFloat(e[0]),
      Number.parseFloat(e[1])
    ));
  },
  /**
   * Return a multipoint geometry given a multipoint WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipoint.
   * @return {Point} A multipoint feature.
   * @private
   */
  multipoint: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPoint();
    for (var n, i = t.trim().split(","), o = [], s = 0, a = i.length; s < a; ++s)
      n = i[s].replace(Ze.trimParens, "$1"), o.push(di.point.apply(e, [n]));
    return this.geometryFactory.createMultiPoint(o);
  },
  /**
   * Return a linestring geometry given a linestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linestring.
   * @return {LineString} A linestring geometry.
   * @private
   */
  linestring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLineString();
    for (var e = t.trim().split(","), n = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(Ze.spaces), n.push(new v(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLineString(n);
  },
  /**
   * Return a linearring geometry given a linearring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linearring.
   * @return {LinearRing} A linearring geometry.
   * @private
   */
  linearring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLinearRing();
    for (var e = t.trim().split(","), n = [], i, o = 0, s = e.length; o < s; ++o)
      i = e[o].trim().split(Ze.spaces), n.push(new v(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
    return this.geometryFactory.createLinearRing(n);
  },
  /**
   * Return a multilinestring geometry given a multilinestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multilinestring.
   * @return {MultiLineString} A multilinestring geometry.
   * @private
   */
  multilinestring: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiLineString();
    for (var n, i = t.trim().split(Ze.parenComma), o = [], s = 0, a = i.length; s < a; ++s)
      n = i[s].replace(Ze.trimParens, "$1"), o.push(di.linestring.apply(e, [n]));
    return this.geometryFactory.createMultiLineString(o);
  },
  /**
   * Return a polygon geometry given a polygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the polygon.
   * @return {Polygon} A polygon geometry.
   * @private
   */
  polygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createPolygon();
    for (var n, i, o, s = t.trim().split(Ze.parenComma), a, u = [], l = 0, c = s.length; l < c; ++l)
      n = s[l].replace(Ze.trimParens, "$1"), i = di.linestring.apply(e, [n]), o = e.geometryFactory.createLinearRing(i._points), l === 0 ? a = o : u.push(o);
    return this.geometryFactory.createPolygon(a, u);
  },
  /**
   * Return a multipolygon geometry given a multipolygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipolygon.
   * @return {MultiPolygon} A multipolygon geometry.
   * @private
   */
  multipolygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPolygon();
    for (var n, i = t.trim().split(Ze.doubleParenComma), o = [], s = 0, a = i.length; s < a; ++s)
      n = i[s].replace(Ze.trimParens, "$1"), o.push(di.polygon.apply(e, [n]));
    return this.geometryFactory.createMultiPolygon(o);
  },
  /**
   * Return a geometrycollection given a geometrycollection WKT fragment.
   *
   * @param {String} str A WKT fragment representing the geometrycollection.
   * @return {GeometryCollection}
   * @private
   */
  geometrycollection: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createGeometryCollection();
    t = t.replace(/,\s*([A-Za-z])/g, "|$1");
    for (var n = t.trim().split("|"), i = [], o = 0, s = n.length; o < s; ++o)
      i.push(e.read(n[o]));
    return this.geometryFactory.createGeometryCollection(i);
  }
}, qe = function(t) {
  this.parser = new Qo(t);
};
qe.prototype.write = function(t) {
  return this.parser.write(t);
};
qe.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var Kn = function(r) {
  function t(e) {
    r.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new r().stack;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(Error), Go = function(r) {
  function t() {
    if (r.call(this), arguments.length === 0)
      r.call(this);
    else if (arguments.length === 1) {
      var e = arguments[0];
      r.call(this, e);
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Kn), U = function() {
};
U.prototype.interfaces_ = function() {
  return [];
};
U.prototype.getClass = function() {
  return U;
};
U.shouldNeverReachHere = function() {
  if (arguments.length === 0)
    U.shouldNeverReachHere(null);
  else if (arguments.length === 1) {
    var t = arguments[0];
    throw new Go("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
U.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], U.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new Go() : new Go(e);
};
U.equals = function() {
  var t, e, n;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], U.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t)))
    throw new Go("Expected " + t + " but encountered " + e + (n !== null ? ": " + n : ""));
};
var ft = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new v(), this._intPt[1] = new v(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, ui = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
ft.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
ft.prototype.getTopologySummary = function() {
  var t = new yn();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
ft.prototype.computeIntersection = function(t, e, n, i) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, n, i);
};
ft.prototype.getIntersectionNum = function() {
  return this._result;
};
ft.prototype.computeIntLineIndex = function() {
  if (arguments.length === 0)
    this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
      return Array(2);
    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
  else if (arguments.length === 1) {
    var t = arguments[0], e = this.getEdgeDistance(t, 0), n = this.getEdgeDistance(t, 1);
    e > n ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
  }
};
ft.prototype.isProper = function() {
  return this.hasIntersection() && this._isProper;
};
ft.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
ft.prototype.isInteriorIntersection = function() {
  var t = this;
  if (arguments.length === 0)
    return !!(this.isInteriorIntersection(0) || this.isInteriorIntersection(1));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0; n < this._result; n++)
      if (!(t._intPt[n].equals2D(t._inputLines[e][0]) || t._intPt[n].equals2D(t._inputLines[e][1])))
        return !0;
    return !1;
  }
};
ft.prototype.getIntersection = function(t) {
  return this._intPt[t];
};
ft.prototype.isEndPoint = function() {
  return this.hasIntersection() && !this._isProper;
};
ft.prototype.hasIntersection = function() {
  return this._result !== ft.NO_INTERSECTION;
};
ft.prototype.getEdgeDistance = function(t, e) {
  var n = ft.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return n;
};
ft.prototype.isCollinear = function() {
  return this._result === ft.COLLINEAR_INTERSECTION;
};
ft.prototype.toString = function() {
  return qe.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + qe.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
ft.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
ft.prototype.isIntersection = function(t) {
  for (var e = this, n = 0; n < this._result; n++)
    if (e._intPt[n].equals2D(t))
      return !0;
  return !1;
};
ft.prototype.getIntersectionAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
};
ft.prototype.interfaces_ = function() {
  return [];
};
ft.prototype.getClass = function() {
  return ft;
};
ft.computeEdgeDistance = function(t, e, n) {
  var i = Math.abs(n.x - e.x), o = Math.abs(n.y - e.y), s = -1;
  if (t.equals(e))
    s = 0;
  else if (t.equals(n))
    i > o ? s = i : s = o;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    i > o ? s = a : s = u, s === 0 && !t.equals(e) && (s = Math.max(a, u));
  }
  return U.isTrue(!(s === 0 && !t.equals(e)), "Bad distance calculation"), s;
};
ft.nonRobustComputeEdgeDistance = function(t, e, n) {
  var i = t.x - e.x, o = t.y - e.y, s = Math.sqrt(i * i + o * o);
  return U.isTrue(!(s === 0 && !t.equals(e)), "Invalid distance calculation"), s;
};
ui.DONT_INTERSECT.get = function() {
  return 0;
};
ui.DO_INTERSECT.get = function() {
  return 1;
};
ui.COLLINEAR.get = function() {
  return 2;
};
ui.NO_INTERSECTION.get = function() {
  return 0;
};
ui.POINT_INTERSECTION.get = function() {
  return 1;
};
ui.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(ft, ui);
var Vr = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(n) {
    var i = new T(this._inputLines[0][0], this._inputLines[0][1]), o = new T(this._inputLines[1][0], this._inputLines[1][1]);
    return i.contains(n) && o.contains(n);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var n = arguments[0], i = arguments[1], o = arguments[2];
      if (this._isProper = !1, T.intersects(i, o, n) && O.orientationIndex(i, o, n) === 0 && O.orientationIndex(o, i, n) === 0)
        return this._isProper = !0, (n.equals(i) || n.equals(o)) && (this._isProper = !1), this._result = r.POINT_INTERSECTION, null;
      this._result = r.NO_INTERSECTION;
    } else
      return r.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(n, i, o, s, a) {
    a.x = this.smallestInAbsValue(n.x, i.x, o.x, s.x), a.y = this.smallestInAbsValue(n.y, i.y, o.y, s.y), n.x -= a.x, n.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(n, i, o, s) {
    var a = null;
    try {
      a = Ve.intersection(n, i, o, s);
    } catch (u) {
      if (u instanceof ki)
        a = t.nearestEndpoint(n, i, o, s);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(n, i, o, s) {
    var a = this.intersectionWithNormalization(n, i, o, s);
    return this.isInSegmentEnvelopes(a) || (a = new v(t.nearestEndpoint(n, i, o, s))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(n, i, o, s) {
    var a = n, u = Math.abs(a);
    return Math.abs(i) < u && (a = i, u = Math.abs(i)), Math.abs(o) < u && (a = o, u = Math.abs(o)), Math.abs(s) < u && (a = s), a;
  }, t.prototype.checkDD = function(n, i, o, s, a) {
    var u = ue.intersection(n, i, o, s), l = this.isInSegmentEnvelopes(u);
    Ut.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && Ut.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(n, i, o, s) {
    var a = new v(n), u = new v(i), l = new v(o), c = new v(s), f = new v();
    this.normalizeToEnvCentre(a, u, l, c, f);
    var h = this.safeHCoordinateIntersection(a, u, l, c);
    return h.x += f.x, h.y += f.y, h;
  }, t.prototype.computeCollinearIntersection = function(n, i, o, s) {
    var a = T.intersects(n, i, o), u = T.intersects(n, i, s), l = T.intersects(o, s, n), c = T.intersects(o, s, i);
    return a && u ? (this._intPt[0] = o, this._intPt[1] = s, r.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = n, this._intPt[1] = i, r.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = o, this._intPt[1] = n, o.equals(n) && !u && !c ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = o, this._intPt[1] = i, o.equals(i) && !u && !l ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = s, this._intPt[1] = n, s.equals(n) && !a && !c ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = s, this._intPt[1] = i, s.equals(i) && !a && !l ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : r.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(n, i, o, s, a) {
    var u = n.x < i.x ? n.x : i.x, l = n.y < i.y ? n.y : i.y, c = n.x > i.x ? n.x : i.x, f = n.y > i.y ? n.y : i.y, h = o.x < s.x ? o.x : s.x, g = o.y < s.y ? o.y : s.y, p = o.x > s.x ? o.x : s.x, y = o.y > s.y ? o.y : s.y, d = u > h ? u : h, m = c < p ? c : p, I = l > g ? l : g, C = f < y ? f : y, L = (d + m) / 2, x = (I + C) / 2;
    a.x = L, a.y = x, n.x -= a.x, n.y -= a.y, i.x -= a.x, i.y -= a.y, o.x -= a.x, o.y -= a.y, s.x -= a.x, s.y -= a.y;
  }, t.prototype.computeIntersect = function(n, i, o, s) {
    if (this._isProper = !1, !T.intersects(n, i, o, s))
      return r.NO_INTERSECTION;
    var a = O.orientationIndex(n, i, o), u = O.orientationIndex(n, i, s);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return r.NO_INTERSECTION;
    var l = O.orientationIndex(o, s, n), c = O.orientationIndex(o, s, i);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return r.NO_INTERSECTION;
    var f = a === 0 && u === 0 && l === 0 && c === 0;
    return f ? this.computeCollinearIntersection(n, i, o, s) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, n.equals2D(o) || n.equals2D(s) ? this._intPt[0] = n : i.equals2D(o) || i.equals2D(s) ? this._intPt[0] = i : a === 0 ? this._intPt[0] = new v(o) : u === 0 ? this._intPt[0] = new v(s) : l === 0 ? this._intPt[0] = new v(n) : c === 0 && (this._intPt[0] = new v(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, o, s)), r.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(n, i, o, s) {
    var a = n, u = O.distancePointLine(n, o, s), l = O.distancePointLine(i, o, s);
    return l < u && (u = l, a = i), l = O.distancePointLine(o, n, i), l < u && (u = l, a = o), l = O.distancePointLine(s, n, i), l < u && (u = l, a = s), a;
  }, t;
}(ft), Qr = function() {
};
Qr.prototype.interfaces_ = function() {
  return [];
};
Qr.prototype.getClass = function() {
  return Qr;
};
Qr.orientationIndex = function(t, e, n) {
  var i = e.x - t.x, o = e.y - t.y, s = n.x - e.x, a = n.y - e.y;
  return Qr.signOfDet2x2(i, o, s, a);
};
Qr.signOfDet2x2 = function(t, e, n, i) {
  var o = null, s = null, a = null;
  if (o = 1, t === 0 || i === 0)
    return e === 0 || n === 0 ? 0 : e > 0 ? n > 0 ? -o : o : n > 0 ? o : -o;
  if (e === 0 || n === 0)
    return i > 0 ? t > 0 ? o : -o : t > 0 ? -o : o;
  if (e > 0 ? i > 0 ? e <= i || (o = -o, s = t, t = n, n = s, s = e, e = i, i = s) : e <= -i ? (o = -o, n = -n, i = -i) : (s = t, t = -n, n = s, s = e, e = -i, i = s) : i > 0 ? -e <= i ? (o = -o, t = -t, e = -e) : (s = -t, t = n, n = s, s = -e, e = i, i = s) : e >= i ? (t = -t, e = -e, n = -n, i = -i) : (o = -o, s = -t, t = -n, n = s, s = -e, e = -i, i = s), t > 0)
    if (n > 0) {
      if (!(t <= n))
        return o;
    } else
      return o;
  else {
    if (n > 0)
      return -o;
    if (t >= n)
      o = -o, t = -t, n = -n;
    else
      return -o;
  }
  for (; ; ) {
    if (a = Math.floor(n / t), n = n - a * t, i = i - a * e, i < 0)
      return -o;
    if (i > e)
      return o;
    if (t > n + n) {
      if (e < i + i)
        return o;
    } else {
      if (e > i + i)
        return -o;
      n = t - n, i = e - i, o = -o;
    }
    if (i === 0)
      return n === 0 ? 0 : -o;
    if (n === 0 || (a = Math.floor(t / n), t = t - a * n, e = e - a * i, e < 0))
      return o;
    if (e > i)
      return -o;
    if (n > t + t) {
      if (i < e + e)
        return -o;
    } else {
      if (i > e + e)
        return o;
      t = n - t, e = i - e, o = -o;
    }
    if (e === 0)
      return t === 0 ? 0 : o;
    if (t === 0)
      return -o;
  }
};
var rn = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
rn.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var n = t.x, i = e.x;
    return n > i && (n = e.x, i = t.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var o = t.x - this._p.x, s = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = Qr.signOfDet2x2(o, s, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < s && (l = -l), l > 0 && this._crossingCount++;
  }
};
rn.prototype.isPointInPolygon = function() {
  return this.getLocation() !== _.EXTERIOR;
};
rn.prototype.getLocation = function() {
  return this._isPointOnSegment ? _.BOUNDARY : this._crossingCount % 2 === 1 ? _.INTERIOR : _.EXTERIOR;
};
rn.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
rn.prototype.interfaces_ = function() {
  return [];
};
rn.prototype.getClass = function() {
  return rn;
};
rn.locatePointInRing = function() {
  if (arguments[0] instanceof v && k(arguments[1], Q)) {
    for (var t = arguments[0], e = arguments[1], n = new rn(t), i = new v(), o = new v(), s = 1; s < e.size(); s++)
      if (e.getCoordinate(s, i), e.getCoordinate(s - 1, o), n.countSegment(i, o), n.isOnSegment())
        return n.getLocation();
    return n.getLocation();
  } else if (arguments[0] instanceof v && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new rn(a), c = 1; c < u.length; c++) {
      var f = u[c], h = u[c - 1];
      if (l.countSegment(f, h), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var O = function() {
}, li = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
O.prototype.interfaces_ = function() {
  return [];
};
O.prototype.getClass = function() {
  return O;
};
O.orientationIndex = function(t, e, n) {
  return ue.orientationIndex(t, e, n);
};
O.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, n = t[0].x, i = 1; i < t.length - 1; i++) {
      var o = t[i].x - n, s = t[i + 1].y, a = t[i - 1].y;
      e += o * (a - s);
    }
    return e / 2;
  } else if (k(arguments[0], Q)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new v(), f = new v(), h = new v();
    u.getCoordinate(0, f), u.getCoordinate(1, h);
    var g = f.x;
    h.x -= g;
    for (var p = 0, y = 1; y < l - 1; y++)
      c.y = f.y, f.x = h.x, f.y = h.y, u.getCoordinate(y + 1, h), h.x -= g, p += f.x * (c.y - h.y);
    return p / 2;
  }
};
O.distanceLineLine = function(t, e, n, i) {
  if (t.equals(e))
    return O.distancePointLine(t, n, i);
  if (n.equals(i))
    return O.distancePointLine(i, t, e);
  var o = !1;
  if (!T.intersects(t, e, n, i))
    o = !0;
  else {
    var s = (e.x - t.x) * (i.y - n.y) - (e.y - t.y) * (i.x - n.x);
    if (s === 0)
      o = !0;
    else {
      var a = (t.y - n.y) * (i.x - n.x) - (t.x - n.x) * (i.y - n.y), u = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y), l = u / s, c = a / s;
      (c < 0 || c > 1 || l < 0 || l > 1) && (o = !0);
    }
  }
  return o ? xe.min(O.distancePointLine(t, n, i), O.distancePointLine(e, n, i), O.distancePointLine(n, t, e), O.distancePointLine(i, t, e)) : 0;
};
O.isPointInRing = function(t, e) {
  return O.locatePointInRing(t, e) !== _.EXTERIOR;
};
O.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var n = 0, i = new v();
  t.getCoordinate(0, i);
  for (var o = i.x, s = i.y, a = 1; a < e; a++) {
    t.getCoordinate(a, i);
    var u = i.x, l = i.y, c = u - o, f = l - s;
    n += Math.sqrt(c * c + f * f), o = u, s = l;
  }
  return n;
};
O.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new ct("Ring has fewer than 4 points, so orientation cannot be determined");
  for (var n = t[0], i = 0, o = 1; o <= e; o++) {
    var s = t[o];
    s.y > n.y && (n = s, i = o);
  }
  var a = i;
  do
    a = a - 1, a < 0 && (a = e);
  while (t[a].equals2D(n) && a !== i);
  var u = i;
  do
    u = (u + 1) % e;
  while (t[u].equals2D(n) && u !== i);
  var l = t[a], c = t[u];
  if (l.equals2D(n) || c.equals2D(n) || l.equals2D(c))
    return !1;
  var f = O.computeOrientation(l, n, c), h = !1;
  return f === 0 ? h = l.x > c.x : h = f > 0, h;
};
O.locatePointInRing = function(t, e) {
  return rn.locatePointInRing(t, e);
};
O.distancePointLinePerpendicular = function(t, e, n) {
  var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), o = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
  return Math.abs(o) * Math.sqrt(i);
};
O.computeOrientation = function(t, e, n) {
  return O.orientationIndex(t, e, n);
};
O.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new ct("Line array must contain at least one vertex");
    for (var n = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
      var o = O.distancePointLine(t, e[i], e[i + 1]);
      o < n && (n = o);
    }
    return n;
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    if (a.x === u.x && a.y === u.y)
      return s.distance(a);
    var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y), c = ((s.x - a.x) * (u.x - a.x) + (s.y - a.y) * (u.y - a.y)) / l;
    if (c <= 0)
      return s.distance(a);
    if (c >= 1)
      return s.distance(u);
    var f = ((a.y - s.y) * (u.x - a.x) - (a.x - s.x) * (u.y - a.y)) / l;
    return Math.abs(f) * Math.sqrt(l);
  }
};
O.isOnLine = function(t, e) {
  for (var n = new Vr(), i = 1; i < e.length; i++) {
    var o = e[i - 1], s = e[i];
    if (n.computeIntersection(t, o, s), n.hasIntersection())
      return !0;
  }
  return !1;
};
li.CLOCKWISE.get = function() {
  return -1;
};
li.RIGHT.get = function() {
  return O.CLOCKWISE;
};
li.COUNTERCLOCKWISE.get = function() {
  return 1;
};
li.LEFT.get = function() {
  return O.COUNTERCLOCKWISE;
};
li.COLLINEAR.get = function() {
  return 0;
};
li.STRAIGHT.get = function() {
  return O.COLLINEAR;
};
Object.defineProperties(O, li);
var Qn = function() {
};
Qn.prototype.filter = function(t) {
};
Qn.prototype.interfaces_ = function() {
  return [];
};
Qn.prototype.getClass = function() {
  return Qn;
};
var G = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, An = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
G.prototype.isGeometryCollection = function() {
  return this.getSortIndex() === G.SORTINDEX_GEOMETRYCOLLECTION;
};
G.prototype.getFactory = function() {
  return this._factory;
};
G.prototype.getGeometryN = function(t) {
  return this;
};
G.prototype.getArea = function() {
  return 0;
};
G.prototype.isRectangle = function() {
  return !1;
};
G.prototype.equals = function() {
  if (arguments[0] instanceof G) {
    var t = arguments[0];
    return t === null ? !1 : this.equalsTopo(t);
  } else if (arguments[0] instanceof Object) {
    var e = arguments[0];
    if (!(e instanceof G))
      return !1;
    var n = e;
    return this.equalsExact(n);
  }
};
G.prototype.equalsExact = function(t) {
  return this === t || this.equalsExact(t, 0);
};
G.prototype.geometryChanged = function() {
  this.apply(G.geometryChangedFilter);
};
G.prototype.geometryChangedAction = function() {
  this._envelope = null;
};
G.prototype.equalsNorm = function(t) {
  return t === null ? !1 : this.norm().equalsExact(t.norm());
};
G.prototype.getLength = function() {
  return 0;
};
G.prototype.getNumGeometries = function() {
  return 1;
};
G.prototype.compareTo = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t;
    return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.getSortIndex() !== n.getSortIndex() ? this.getSortIndex() - n.getSortIndex() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(n, i);
  }
};
G.prototype.getUserData = function() {
  return this._userData;
};
G.prototype.getSRID = function() {
  return this._SRID;
};
G.prototype.getEnvelope = function() {
  return this.getFactory().toGeometry(this.getEnvelopeInternal());
};
G.prototype.checkNotGeometryCollection = function(t) {
  if (t.getSortIndex() === G.SORTINDEX_GEOMETRYCOLLECTION)
    throw new ct("This method does not support GeometryCollection arguments");
};
G.prototype.equal = function(t, e, n) {
  return n === 0 ? t.equals(e) : t.distance(e) <= n;
};
G.prototype.norm = function() {
  var t = this.copy();
  return t.normalize(), t;
};
G.prototype.getPrecisionModel = function() {
  return this._factory.getPrecisionModel();
};
G.prototype.getEnvelopeInternal = function() {
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new T(this._envelope);
};
G.prototype.setSRID = function(t) {
  this._SRID = t;
};
G.prototype.setUserData = function(t) {
  this._userData = t;
};
G.prototype.compare = function(t, e) {
  for (var n = t.iterator(), i = e.iterator(); n.hasNext() && i.hasNext(); ) {
    var o = n.next(), s = i.next(), a = o.compareTo(s);
    if (a !== 0)
      return a;
  }
  return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
};
G.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
G.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === G.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === G.SORTINDEX_MULTIPOINT || this.getSortIndex() === G.SORTINDEX_MULTILINESTRING || this.getSortIndex() === G.SORTINDEX_MULTIPOLYGON;
};
G.prototype.interfaces_ = function() {
  return [Ko, Ge, ke];
};
G.prototype.getClass = function() {
  return G;
};
G.hasNonEmptyElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (!t[e].isEmpty())
      return !0;
  return !1;
};
G.hasNullElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e] === null)
      return !0;
  return !1;
};
An.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
An.SORTINDEX_POINT.get = function() {
  return 0;
};
An.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
An.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
An.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
An.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
An.SORTINDEX_POLYGON.get = function() {
  return 5;
};
An.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
An.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
An.geometryChangedFilter.get = function() {
  return Fs;
};
Object.defineProperties(G, An);
var Fs = function() {
};
Fs.interfaces_ = function() {
  return [Qn];
};
Fs.filter = function(t) {
  t.geometryChangedAction();
};
var wn = function() {
};
wn.prototype.filter = function(t) {
};
wn.prototype.interfaces_ = function() {
  return [];
};
wn.prototype.getClass = function() {
  return wn;
};
var Me = function() {
}, er = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
Me.prototype.isInBoundary = function(t) {
};
Me.prototype.interfaces_ = function() {
  return [];
};
Me.prototype.getClass = function() {
  return Me;
};
er.Mod2BoundaryNodeRule.get = function() {
  return _i;
};
er.EndPointBoundaryNodeRule.get = function() {
  return Ei;
};
er.MultiValentEndPointBoundaryNodeRule.get = function() {
  return Ii;
};
er.MonoValentEndPointBoundaryNodeRule.get = function() {
  return Ci;
};
er.MOD2_BOUNDARY_RULE.get = function() {
  return new _i();
};
er.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Ei();
};
er.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Ii();
};
er.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Ci();
};
er.OGC_SFS_BOUNDARY_RULE.get = function() {
  return Me.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(Me, er);
var _i = function() {
};
_i.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
_i.prototype.interfaces_ = function() {
  return [Me];
};
_i.prototype.getClass = function() {
  return _i;
};
var Ei = function() {
};
Ei.prototype.isInBoundary = function(t) {
  return t > 0;
};
Ei.prototype.interfaces_ = function() {
  return [Me];
};
Ei.prototype.getClass = function() {
  return Ei;
};
var Ii = function() {
};
Ii.prototype.isInBoundary = function(t) {
  return t > 1;
};
Ii.prototype.interfaces_ = function() {
  return [Me];
};
Ii.prototype.getClass = function() {
  return Ii;
};
var Ci = function() {
};
Ci.prototype.isInBoundary = function(t) {
  return t === 1;
};
Ci.prototype.interfaces_ = function() {
  return [Me];
};
Ci.prototype.getClass = function() {
  return Ci;
};
var wt = function() {
};
wt.prototype.add = function() {
};
wt.prototype.addAll = function() {
};
wt.prototype.isEmpty = function() {
};
wt.prototype.iterator = function() {
};
wt.prototype.size = function() {
};
wt.prototype.toArray = function() {
};
wt.prototype.remove = function() {
};
function Bs(r) {
  this.message = r || "";
}
Bs.prototype = new Error();
Bs.prototype.name = "IndexOutOfBoundsException";
var zi = function() {
};
zi.prototype.hasNext = function() {
};
zi.prototype.next = function() {
};
zi.prototype.remove = function() {
};
var Ue = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(wt);
function Vi(r) {
  this.message = r || "";
}
Vi.prototype = new Error();
Vi.prototype.name = "NoSuchElementException";
var b = function(r) {
  function t() {
    r.call(this), this.array_ = [], arguments[0] instanceof wt && this.addAll(arguments[0]);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [r, wt];
  }, t.prototype.add = function(n) {
    return arguments.length === 1 ? this.array_.push(n) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, t.prototype.clear = function() {
    this.array_ = [];
  }, t.prototype.addAll = function(n) {
    for (var i = this, o = n.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.set = function(n, i) {
    var o = this.array_[n];
    return this.array_[n] = i, o;
  }, t.prototype.iterator = function() {
    return new Ic(this);
  }, t.prototype.get = function(n) {
    if (n < 0 || n >= this.size())
      throw new Bs();
    return this.array_[n];
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.toArray = function() {
    for (var n = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(n.array_[o]);
    return i;
  }, t.prototype.remove = function(n) {
    for (var i = this, o = !1, s = 0, a = this.array_.length; s < a; s++)
      if (i.array_[s] === n) {
        i.array_.splice(s, 1), o = !0;
        break;
      }
    return o;
  }, t;
}(Ue), Ic = function(r) {
  function t(e) {
    r.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new Vi();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(n) {
    return this.arrayList_.set(this.position_ - 1, n);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(zi), vo = function(r) {
  function t() {
    if (r.call(this), arguments.length !== 0) {
      if (arguments.length === 1) {
        var n = arguments[0];
        this.ensureCapacity(n.length), this.add(n, !0);
      } else if (arguments.length === 2) {
        var i = arguments[0], o = arguments[1];
        this.ensureCapacity(i.length), this.add(i, o);
      }
    }
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { coordArrayType: { configurable: !0 } };
  return e.coordArrayType.get = function() {
    return new Array(0).fill(null);
  }, t.prototype.getCoordinate = function(i) {
    return this.get(i);
  }, t.prototype.addAll = function() {
    var i = this;
    if (arguments.length === 2) {
      for (var o = arguments[0], s = arguments[1], a = !1, u = o.iterator(); u.hasNext(); )
        i.add(u.next(), s), a = !0;
      return a;
    } else
      return r.prototype.addAll.apply(this, arguments);
  }, t.prototype.clone = function() {
    for (var i = this, o = r.prototype.clone.call(this), s = 0; s < this.size(); s++)
      o.add(s, i.get(s).copy());
    return o;
  }, t.prototype.toCoordinateArray = function() {
    return this.toArray(t.coordArrayType);
  }, t.prototype.add = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0];
      r.prototype.add.call(this, o);
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var s = arguments[0], a = arguments[1];
        return this.add(s, a, !0), !0;
      } else if (arguments[0] instanceof v && typeof arguments[1] == "boolean") {
        var u = arguments[0], l = arguments[1];
        if (!l && this.size() >= 1) {
          var c = this.get(this.size() - 1);
          if (c.equals2D(u))
            return null;
        }
        r.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var f = arguments[0], h = arguments[1];
        return this.add(f, h), !0;
      }
    } else if (arguments.length === 3) {
      if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var g = arguments[0], p = arguments[1], y = arguments[2];
        if (y)
          for (var d = 0; d < g.length; d++)
            i.add(g[d], p);
        else
          for (var m = g.length - 1; m >= 0; m--)
            i.add(g[m], p);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof v) {
        var I = arguments[0], C = arguments[1], L = arguments[2];
        if (!L) {
          var x = this.size();
          if (x > 0) {
            if (I > 0) {
              var w = this.get(I - 1);
              if (w.equals2D(C))
                return null;
            }
            if (I < x) {
              var M = this.get(I);
              if (M.equals2D(C))
                return null;
            }
          }
        }
        r.prototype.add.call(this, I, C);
      }
    } else if (arguments.length === 4) {
      var B = arguments[0], A = arguments[1], q = arguments[2], j = arguments[3], P = 1;
      q > j && (P = -1);
      for (var X = q; X !== j; X += P)
        i.add(B[X], A);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new v(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(b), W = function() {
}, Jo = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
Jo.ForwardComparator.get = function() {
  return to;
};
Jo.BidirectionalComparator.get = function() {
  return Ni;
};
Jo.coordArrayType.get = function() {
  return new Array(0).fill(null);
};
W.prototype.interfaces_ = function() {
  return [];
};
W.prototype.getClass = function() {
  return W;
};
W.isRing = function(t) {
  return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]));
};
W.ptNotInList = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    if (W.indexOf(i, e) < 0)
      return i;
  }
  return null;
};
W.scroll = function(t, e) {
  var n = W.indexOf(e, t);
  if (n < 0)
    return null;
  var i = new Array(t.length).fill(null);
  Ut.arraycopy(t, n, i, 0, t.length - n), Ut.arraycopy(t, 0, i, t.length - n, n), Ut.arraycopy(i, 0, t, 0, t.length);
};
W.equals = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (t === e)
      return !0;
    if (t === null || e === null || t.length !== e.length)
      return !1;
    for (var n = 0; n < t.length; n++)
      if (!t[n].equals(e[n]))
        return !1;
    return !0;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (i === o)
      return !0;
    if (i === null || o === null || i.length !== o.length)
      return !1;
    for (var a = 0; a < i.length; a++)
      if (s.compare(i[a], o[a]) !== 0)
        return !1;
    return !0;
  }
};
W.intersection = function(t, e) {
  for (var n = new vo(), i = 0; i < t.length; i++)
    e.intersects(t[i]) && n.add(t[i], !0);
  return n.toCoordinateArray();
};
W.hasRepeatedPoints = function(t) {
  for (var e = 1; e < t.length; e++)
    if (t[e - 1].equals(t[e]))
      return !0;
  return !1;
};
W.removeRepeatedPoints = function(t) {
  if (!W.hasRepeatedPoints(t))
    return t;
  var e = new vo(t, !1);
  return e.toCoordinateArray();
};
W.reverse = function(t) {
  for (var e = t.length - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++) {
    var o = t[i];
    t[i] = t[e - i], t[e - i] = o;
  }
};
W.removeNull = function(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    t[n] !== null && e++;
  var i = new Array(e).fill(null);
  if (e === 0)
    return i;
  for (var o = 0, s = 0; s < t.length; s++)
    t[s] !== null && (i[o++] = t[s]);
  return i;
};
W.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)
      e[n] = new v(t[n]);
    return e;
  } else if (arguments.length === 5)
    for (var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      s[a + l] = new v(i[o + l]);
};
W.isEqualReversed = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n], o = e[t.length - n - 1];
    if (i.compareTo(o) !== 0)
      return !1;
  }
  return !0;
};
W.envelope = function(t) {
  for (var e = new T(), n = 0; n < t.length; n++)
    e.expandToInclude(t[n]);
  return e;
};
W.toCoordinateArray = function(t) {
  return t.toArray(W.coordArrayType);
};
W.atLeastNCoordinatesOrNothing = function(t, e) {
  return e.length >= t ? e : [];
};
W.indexOf = function(t, e) {
  for (var n = 0; n < e.length; n++)
    if (t.equals(e[n]))
      return n;
  return -1;
};
W.increasingDirection = function(t) {
  for (var e = 0; e < Math.trunc(t.length / 2); e++) {
    var n = t.length - 1 - e, i = t[e].compareTo(t[n]);
    if (i !== 0)
      return i;
  }
  return 1;
};
W.compare = function(t, e) {
  for (var n = 0; n < t.length && n < e.length; ) {
    var i = t[n].compareTo(e[n]);
    if (i !== 0)
      return i;
    n++;
  }
  return n < e.length ? -1 : n < t.length ? 1 : 0;
};
W.minCoordinate = function(t) {
  for (var e = null, n = 0; n < t.length; n++)
    (e === null || e.compareTo(t[n]) > 0) && (e = t[n]);
  return e;
};
W.extract = function(t, e, n) {
  e = xe.clamp(e, 0, t.length), n = xe.clamp(n, -1, t.length);
  var i = n - e + 1;
  n < 0 && (i = 0), e >= t.length && (i = 0), n < e && (i = 0);
  var o = new Array(i).fill(null);
  if (i === 0)
    return o;
  for (var s = 0, a = e; a <= n; a++)
    o[s++] = t[a];
  return o;
};
Object.defineProperties(W, Jo);
var to = function() {
};
to.prototype.compare = function(t, e) {
  var n = t, i = e;
  return W.compare(n, i);
};
to.prototype.interfaces_ = function() {
  return [yi];
};
to.prototype.getClass = function() {
  return to;
};
var Ni = function() {
};
Ni.prototype.compare = function(t, e) {
  var n = t, i = e;
  if (n.length < i.length)
    return -1;
  if (n.length > i.length)
    return 1;
  if (n.length === 0)
    return 0;
  var o = W.compare(n, i), s = W.isEqualReversed(n, i);
  return s ? 0 : o;
};
Ni.prototype.OLDcompare = function(t, e) {
  var n = t, i = e;
  if (n.length < i.length)
    return -1;
  if (n.length > i.length)
    return 1;
  if (n.length === 0)
    return 0;
  for (var o = W.increasingDirection(n), s = W.increasingDirection(i), a = o > 0 ? 0 : n.length - 1, u = s > 0 ? 0 : n.length - 1, l = 0; l < n.length; l++) {
    var c = n[a].compareTo(i[u]);
    if (c !== 0)
      return c;
    a += o, u += s;
  }
  return 0;
};
Ni.prototype.interfaces_ = function() {
  return [yi];
};
Ni.prototype.getClass = function() {
  return Ni;
};
var ci = function() {
};
ci.prototype.get = function() {
};
ci.prototype.put = function() {
};
ci.prototype.size = function() {
};
ci.prototype.values = function() {
};
ci.prototype.entrySet = function() {
};
var Cc = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(ci);
function yo(r) {
  this.message = r || "";
}
yo.prototype = new Error();
yo.prototype.name = "OperationNotSupported";
function Zo() {
}
Zo.prototype = new wt();
Zo.prototype.contains = function() {
};
var Gs = function(r) {
  function t() {
    r.call(this), this.array_ = [], arguments[0] instanceof wt && this.addAll(arguments[0]);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.contains = function(n) {
    for (var i = this, o = 0, s = this.array_.length; o < s; o++) {
      var a = i.array_[o];
      if (a === n)
        return !0;
    }
    return !1;
  }, t.prototype.add = function(n) {
    return this.contains(n) ? !1 : (this.array_.push(n), !0);
  }, t.prototype.addAll = function(n) {
    for (var i = this, o = n.iterator(); o.hasNext(); )
      i.add(o.next());
    return !0;
  }, t.prototype.remove = function(n) {
    throw new Error();
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.toArray = function() {
    for (var n = this, i = [], o = 0, s = this.array_.length; o < s; o++)
      i.push(n.array_[o]);
    return i;
  }, t.prototype.iterator = function() {
    return new Nc(this);
  }, t;
}(Zo), Nc = function(r) {
  function t(e) {
    r.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new Vi();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new yo();
  }, t;
}(zi), Yn = 0, Er = 1;
function Sa(r) {
  return r === null ? Yn : r.color;
}
function st(r) {
  return r === null ? null : r.parent;
}
function Vn(r, t) {
  r !== null && (r.color = t);
}
function ds(r) {
  return r === null ? null : r.left;
}
function wa(r) {
  return r === null ? null : r.right;
}
function jt() {
  this.root_ = null, this.size_ = 0;
}
jt.prototype = new Cc();
jt.prototype.get = function(r) {
  for (var t = this.root_; t !== null; ) {
    var e = r.compareTo(t.key);
    if (e < 0)
      t = t.left;
    else if (e > 0)
      t = t.right;
    else
      return t.value;
  }
  return null;
};
jt.prototype.put = function(r, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: r,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: Yn,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    }, this.size_ = 1, null;
  var e = this.root_, n, i;
  do
    if (n = e, i = r.compareTo(e.key), i < 0)
      e = e.left;
    else if (i > 0)
      e = e.right;
    else {
      var o = e.value;
      return e.value = t, o;
    }
  while (e !== null);
  var s = {
    key: r,
    left: null,
    right: null,
    value: t,
    parent: n,
    color: Yn,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return i < 0 ? n.left = s : n.right = s, this.fixAfterInsertion(s), this.size_++, null;
};
jt.prototype.fixAfterInsertion = function(r) {
  var t = this;
  for (r.color = Er; r != null && r !== this.root_ && r.parent.color === Er; )
    if (st(r) === ds(st(st(r)))) {
      var e = wa(st(st(r)));
      Sa(e) === Er ? (Vn(st(r), Yn), Vn(e, Yn), Vn(st(st(r)), Er), r = st(st(r))) : (r === wa(st(r)) && (r = st(r), t.rotateLeft(r)), Vn(st(r), Yn), Vn(st(st(r)), Er), t.rotateRight(st(st(r))));
    } else {
      var n = ds(st(st(r)));
      Sa(n) === Er ? (Vn(st(r), Yn), Vn(n, Yn), Vn(st(st(r)), Er), r = st(st(r))) : (r === ds(st(r)) && (r = st(r), t.rotateRight(r)), Vn(st(r), Yn), Vn(st(st(r)), Er), t.rotateLeft(st(st(r))));
    }
  this.root_.color = Yn;
};
jt.prototype.values = function() {
  var r = new b(), t = this.getFirstEntry();
  if (t !== null)
    for (r.add(t.value); (t = jt.successor(t)) !== null; )
      r.add(t.value);
  return r;
};
jt.prototype.entrySet = function() {
  var r = new Gs(), t = this.getFirstEntry();
  if (t !== null)
    for (r.add(t); (t = jt.successor(t)) !== null; )
      r.add(t);
  return r;
};
jt.prototype.rotateLeft = function(r) {
  if (r != null) {
    var t = r.right;
    r.right = t.left, t.left != null && (t.left.parent = r), t.parent = r.parent, r.parent === null ? this.root_ = t : r.parent.left === r ? r.parent.left = t : r.parent.right = t, t.left = r, r.parent = t;
  }
};
jt.prototype.rotateRight = function(r) {
  if (r != null) {
    var t = r.left;
    r.left = t.right, t.right != null && (t.right.parent = r), t.parent = r.parent, r.parent === null ? this.root_ = t : r.parent.right === r ? r.parent.right = t : r.parent.left = t, t.right = r, r.parent = t;
  }
};
jt.prototype.getFirstEntry = function() {
  var r = this.root_;
  if (r != null)
    for (; r.left != null; )
      r = r.left;
  return r;
};
jt.successor = function(r) {
  if (r === null)
    return null;
  if (r.right !== null) {
    for (var t = r.right; t.left !== null; )
      t = t.left;
    return t;
  } else {
    for (var e = r.parent, n = r; e !== null && n === e.right; )
      n = e, e = e.parent;
    return e;
  }
};
jt.prototype.size = function() {
  return this.size_;
};
var eo = function() {
};
eo.prototype.interfaces_ = function() {
  return [];
};
eo.prototype.getClass = function() {
  return eo;
};
function hu() {
}
hu.prototype = new Zo();
function an() {
  this.array_ = [], arguments[0] instanceof wt && this.addAll(arguments[0]);
}
an.prototype = new hu();
an.prototype.contains = function(r) {
  for (var t = this, e = 0, n = this.array_.length; e < n; e++) {
    var i = t.array_[e];
    if (i.compareTo(r) === 0)
      return !0;
  }
  return !1;
};
an.prototype.add = function(r) {
  var t = this;
  if (this.contains(r))
    return !1;
  for (var e = 0, n = this.array_.length; e < n; e++) {
    var i = t.array_[e];
    if (i.compareTo(r) === 1)
      return t.array_.splice(e, 0, r), !0;
  }
  return this.array_.push(r), !0;
};
an.prototype.addAll = function(r) {
  for (var t = this, e = r.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
an.prototype.remove = function(r) {
  throw new yo();
};
an.prototype.size = function() {
  return this.array_.length;
};
an.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
an.prototype.toArray = function() {
  for (var r = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(r.array_[e]);
  return t;
};
an.prototype.iterator = function() {
  return new $o(this);
};
var $o = function(r) {
  this.treeSet_ = r, this.position_ = 0;
};
$o.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new Vi();
  return this.treeSet_.array_[this.position_++];
};
$o.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
$o.prototype.remove = function() {
  throw new yo();
};
var xr = function() {
};
xr.sort = function() {
  var t = arguments[0], e, n, i, o;
  if (arguments.length === 1)
    o = function(a, u) {
      return a.compareTo(u);
    }, t.sort(o);
  else if (arguments.length === 2)
    i = arguments[1], o = function(a, u) {
      return i.compare(a, u);
    }, t.sort(o);
  else if (arguments.length === 3) {
    n = t.slice(arguments[1], arguments[2]), n.sort();
    var s = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
    for (t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
  } else if (arguments.length === 4)
    for (n = t.slice(arguments[1], arguments[2]), i = arguments[3], o = function(a, u) {
      return i.compare(a, u);
    }, n.sort(o), s = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length)), t.splice(0, t.length), e = 0; e < s.length; e++)
      t.push(s[e]);
};
xr.asList = function(t) {
  for (var e = new b(), n = 0, i = t.length; n < i; n++)
    e.add(t[n]);
  return e;
};
var J = function() {
}, Je = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
Je.P.get = function() {
  return 0;
};
Je.L.get = function() {
  return 1;
};
Je.A.get = function() {
  return 2;
};
Je.FALSE.get = function() {
  return -1;
};
Je.TRUE.get = function() {
  return -2;
};
Je.DONTCARE.get = function() {
  return -3;
};
Je.SYM_FALSE.get = function() {
  return "F";
};
Je.SYM_TRUE.get = function() {
  return "T";
};
Je.SYM_DONTCARE.get = function() {
  return "*";
};
Je.SYM_P.get = function() {
  return "0";
};
Je.SYM_L.get = function() {
  return "1";
};
Je.SYM_A.get = function() {
  return "2";
};
J.prototype.interfaces_ = function() {
  return [];
};
J.prototype.getClass = function() {
  return J;
};
J.toDimensionSymbol = function(t) {
  switch (t) {
    case J.FALSE:
      return J.SYM_FALSE;
    case J.TRUE:
      return J.SYM_TRUE;
    case J.DONTCARE:
      return J.SYM_DONTCARE;
    case J.P:
      return J.SYM_P;
    case J.L:
      return J.SYM_L;
    case J.A:
      return J.SYM_A;
  }
  throw new ct("Unknown dimension value: " + t);
};
J.toDimensionValue = function(t) {
  switch ($i.toUpperCase(t)) {
    case J.SYM_FALSE:
      return J.FALSE;
    case J.SYM_TRUE:
      return J.TRUE;
    case J.SYM_DONTCARE:
      return J.DONTCARE;
    case J.SYM_P:
      return J.P;
    case J.SYM_L:
      return J.L;
    case J.SYM_A:
      return J.A;
  }
  throw new ct("Unknown dimension symbol: " + t);
};
Object.defineProperties(J, Je);
var un = function() {
};
un.prototype.filter = function(t) {
};
un.prototype.interfaces_ = function() {
  return [];
};
un.prototype.getClass = function() {
  return un;
};
var Xe = function() {
};
Xe.prototype.filter = function(t, e) {
};
Xe.prototype.isDone = function() {
};
Xe.prototype.isGeometryChanged = function() {
};
Xe.prototype.interfaces_ = function() {
  return [];
};
Xe.prototype.getClass = function() {
  return Xe;
};
var ne = function(r) {
  function t(n, i) {
    if (r.call(this, i), this._geometries = n || [], r.hasNullElements(this._geometries))
      throw new ct("geometries must not contain null elements");
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var i = this, o = new T(), s = 0; s < this._geometries.length; s++)
      o.expandToInclude(i._geometries[s].getEnvelopeInternal());
    return o;
  }, t.prototype.getGeometryN = function(i) {
    return this._geometries[i];
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_GEOMETRYCOLLECTION;
  }, t.prototype.getCoordinates = function() {
    for (var i = this, o = new Array(this.getNumPoints()).fill(null), s = -1, a = 0; a < this._geometries.length; a++)
      for (var u = i._geometries[a].getCoordinates(), l = 0; l < u.length; l++)
        s++, o[s] = u[l];
    return o;
  }, t.prototype.getArea = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getArea();
    return o;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._geometries.length !== a._geometries.length)
        return !1;
      for (var u = 0; u < this._geometries.length; u++)
        if (!i._geometries[u].equalsExact(a._geometries[u], s))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      i._geometries[o].normalize();
    xr.sort(this._geometries);
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
  }, t.prototype.getBoundaryDimension = function() {
    for (var i = this, o = J.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getBoundaryDimension());
    return o;
  }, t.prototype.getDimension = function() {
    for (var i = this, o = J.FALSE, s = 0; s < this._geometries.length; s++)
      o = Math.max(o, i._geometries[s].getDimension());
    return o;
  }, t.prototype.getLength = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = 0, s = 0; s < this._geometries.length; s++)
      o += i._geometries[s].getNumPoints();
    return o;
  }, t.prototype.getNumGeometries = function() {
    return this._geometries.length;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createGeometryCollection(s);
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = new an(xr.asList(this._geometries)), a = new an(xr.asList(o._geometries));
      return this.compare(s, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, f = this.getNumGeometries(), h = c.getNumGeometries(), g = 0; g < f && g < h; ) {
        var p = i.getGeometryN(g), y = c.getGeometryN(g), d = p.compareToSameClass(y, l);
        if (d !== 0)
          return d;
        g++;
      }
      return g < f ? 1 : g < h ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (k(arguments[0], wn))
      for (var o = arguments[0], s = 0; s < this._geometries.length; s++)
        i._geometries[s].apply(o);
    else if (k(arguments[0], Xe)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (i._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (k(arguments[0], un)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        i._geometries[c].apply(l);
    } else if (k(arguments[0], Qn)) {
      var f = arguments[0];
      f.filter(this);
      for (var h = 0; h < this._geometries.length; h++)
        i._geometries[h].apply(f);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), U.shouldNeverReachHere(), null;
  }, t.prototype.clone = function() {
    var i = this, o = r.prototype.clone.call(this);
    o._geometries = new Array(this._geometries.length).fill(null);
    for (var s = 0; s < this._geometries.length; s++)
      o._geometries[s] = i._geometries[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "GeometryCollection";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.isEmpty = function() {
    for (var i = this, o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isEmpty())
        return !1;
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -5694727726395021e3;
  }, Object.defineProperties(t, e), t;
}(G), br = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? J.FALSE : 0;
  }, t.prototype.isClosed = function() {
    var i = this;
    if (this.isEmpty())
      return !1;
    for (var o = 0; o < this._geometries.length; o++)
      if (!i._geometries[o].isClosed())
        return !1;
    return !0;
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[o - 1 - a] = i._geometries[a].reverse();
    return this.getFactory().createMultiLineString(s);
  }, t.prototype.getBoundary = function() {
    return new Oe(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [eo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(ne), Oe = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = Me.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this._geom = n, this._geomFact = n.getFactory(), this._bnRule = i;
  }
};
Oe.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Oe.prototype.getBoundary = function() {
  return this._geom instanceof pt ? this.boundaryLineString(this._geom) : this._geom instanceof br ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
Oe.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
Oe.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
Oe.prototype.computeBoundaryCoordinates = function(t) {
  var e = this, n = new b();
  this._endpointMap = new jt();
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    o.getNumPoints() !== 0 && (e.addEndpoint(o.getCoordinateN(0)), e.addEndpoint(o.getCoordinateN(o.getNumPoints() - 1)));
  }
  for (var s = this._endpointMap.entrySet().iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && n.add(a.getKey());
  }
  return W.toCoordinateArray(n);
};
Oe.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new ko(), this._endpointMap.put(t, e)), e.count++;
};
Oe.prototype.interfaces_ = function() {
  return [];
};
Oe.prototype.getClass = function() {
  return Oe;
};
Oe.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Oe(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = new Oe(n, i);
    return o.getBoundary();
  }
};
var ko = function() {
  this.count = null;
};
ko.prototype.interfaces_ = function() {
  return [];
};
ko.prototype.getClass = function() {
  return ko;
};
function xc() {
}
function Sc() {
}
var wc = function() {
};
function Lc() {
}
function bc() {
}
function Pc() {
}
var De = function() {
}, ks = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
De.prototype.interfaces_ = function() {
  return [];
};
De.prototype.getClass = function() {
  return De;
};
De.chars = function(t, e) {
  for (var n = new Array(e).fill(null), i = 0; i < e; i++)
    n[i] = t;
  return String(n);
};
De.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Lc(), n = new xc();
    return t.printStackTrace(n), e.toString();
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1], s = "";
    new Sc(De.getStackTrace(i));
    for (var a = new Pc(), u = 0; u < o; u++)
      try {
        s += a.readLine() + De.NEWLINE;
      } catch (l) {
        if (l instanceof bc)
          U.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return s;
  }
};
De.split = function(t, e) {
  for (var n = e.length, i = new b(), o = "" + t, s = o.indexOf(e); s >= 0; ) {
    var a = o.substring(0, s);
    i.add(a), o = o.substring(s + n), s = o.indexOf(e);
  }
  o.length > 0 && i.add(o);
  for (var u = new Array(i.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = i.get(l);
  return u;
};
De.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return De.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
De.spaces = function(t) {
  return De.chars(" ", t);
};
ks.NEWLINE.get = function() {
  return Ut.getProperty("line.separator");
};
ks.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new wc();
};
Object.defineProperties(De, ks);
var Et = function() {
};
Et.prototype.interfaces_ = function() {
  return [];
};
Et.prototype.getClass = function() {
  return Et;
};
Et.copyCoord = function(t, e, n, i) {
  for (var o = Math.min(t.getDimension(), n.getDimension()), s = 0; s < o; s++)
    n.setOrdinate(i, s, t.getOrdinate(e, s));
};
Et.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, Q.X) === t.getOrdinate(e - 1, Q.X) && t.getOrdinate(0, Q.Y) === t.getOrdinate(e - 1, Q.Y);
};
Et.isEqual = function(t, e) {
  var n = t.size(), i = e.size();
  if (n !== i)
    return !1;
  for (var o = Math.min(t.getDimension(), e.getDimension()), s = 0; s < n; s++)
    for (var a = 0; a < o; a++) {
      var u = t.getOrdinate(s, a), l = e.getOrdinate(s, a);
      if (t.getOrdinate(s, a) !== e.getOrdinate(s, a) && !(z.isNaN(u) && z.isNaN(l)))
        return !1;
    }
  return !0;
};
Et.extend = function(t, e, n) {
  var i = t.create(n, e.getDimension()), o = e.size();
  if (Et.copy(e, 0, i, 0, o), o > 0)
    for (var s = o; s < n; s++)
      Et.copy(e, o - 1, i, s, 1);
  return i;
};
Et.reverse = function(t) {
  for (var e = t.size() - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++)
    Et.swap(t, i, e - i);
};
Et.swap = function(t, e, n) {
  if (e === n)
    return null;
  for (var i = 0; i < t.getDimension(); i++) {
    var o = t.getOrdinate(e, i);
    t.setOrdinate(e, i, t.getOrdinate(n, i)), t.setOrdinate(n, i, o);
  }
};
Et.copy = function(t, e, n, i, o) {
  for (var s = 0; s < o; s++)
    Et.copyCoord(t, e + s, n, i + s);
};
Et.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var n = t.getDimension(), i = new yn();
    i.append("(");
    for (var o = 0; o < e; o++) {
      o > 0 && i.append(" ");
      for (var s = 0; s < n; s++)
        s > 0 && i.append(","), i.append(De.toString(t.getOrdinate(o, s)));
    }
    return i.append(")"), i.toString();
  }
};
Et.ensureValidRing = function(t, e) {
  var n = e.size();
  if (n === 0)
    return e;
  if (n <= 3)
    return Et.createClosedRing(t, e, 4);
  var i = e.getOrdinate(0, Q.X) === e.getOrdinate(n - 1, Q.X) && e.getOrdinate(0, Q.Y) === e.getOrdinate(n - 1, Q.Y);
  return i ? e : Et.createClosedRing(t, e, n + 1);
};
Et.createClosedRing = function(t, e, n) {
  var i = t.create(n, e.getDimension()), o = e.size();
  Et.copy(e, 0, i, 0, o);
  for (var s = o; s < n; s++)
    Et.copy(e, 0, i, s, 1);
  return i;
};
var pt = function(r) {
  function t(n, i) {
    r.call(this, i), this._points = null, this.init(n);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new T() : this._points.expandEnvelope(new T());
  }, t.prototype.isRing = function() {
    return this.isClosed() && this.isSimple();
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_LINESTRING;
  }, t.prototype.getCoordinates = function() {
    return this._points.toCoordinateArray();
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o;
      if (this._points.size() !== a._points.size())
        return !1;
      for (var u = 0; u < this._points.size(); u++)
        if (!i.equal(i._points.getCoordinate(u), a._points.getCoordinate(u), s))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, o = 0; o < Math.trunc(this._points.size() / 2); o++) {
      var s = i._points.size() - 1 - o;
      if (!i._points.getCoordinate(o).equals(i._points.getCoordinate(s)))
        return i._points.getCoordinate(o).compareTo(i._points.getCoordinate(s)) > 0 && Et.reverse(i._points), null;
    }
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._points.getCoordinate(0);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? J.FALSE : 0;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
  }, t.prototype.getEndPoint = function() {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.getLength = function() {
    return O.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Et.reverse(i);
    var o = this.getFactory().createLineString(i);
    return o;
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      for (var o = arguments[0], s = o, a = 0, u = 0; a < this._points.size() && u < s._points.size(); ) {
        var l = i._points.getCoordinate(a).compareTo(s._points.getCoordinate(u));
        if (l !== 0)
          return l;
        a++, u++;
      }
      return a < this._points.size() ? 1 : u < s._points.size() ? -1 : 0;
    } else if (arguments.length === 2) {
      var c = arguments[0], f = arguments[1], h = c;
      return f.compare(this._points, h._points);
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (k(arguments[0], wn))
      for (var o = arguments[0], s = 0; s < this._points.size(); s++)
        o.filter(i._points.getCoordinate(s));
    else if (k(arguments[0], Xe)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(i._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (k(arguments[0], un)) {
      var l = arguments[0];
      l.filter(this);
    } else if (k(arguments[0], Qn)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Oe(this).getBoundary();
  }, t.prototype.isEquivalentClass = function(i) {
    return i instanceof t;
  }, t.prototype.clone = function() {
    var i = r.prototype.clone.call(this);
    return i._points = this._points.clone(), i;
  }, t.prototype.getCoordinateN = function(i) {
    return this._points.getCoordinate(i);
  }, t.prototype.getGeometryType = function() {
    return "LineString";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._points;
  }, t.prototype.isEmpty = function() {
    return this._points.size() === 0;
  }, t.prototype.init = function(i) {
    if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1)
      throw new ct("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
    this._points = i;
  }, t.prototype.isCoordinate = function(i) {
    for (var o = this, s = 0; s < this._points.size(); s++)
      if (o._points.getCoordinate(s).equals(i))
        return !0;
    return !1;
  }, t.prototype.getStartPoint = function() {
    return this.isEmpty() ? null : this.getPointN(0);
  }, t.prototype.getPointN = function(i) {
    return this.getFactory().createPoint(this._points.getCoordinate(i));
  }, t.prototype.interfaces_ = function() {
    return [eo];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(G), no = function() {
};
no.prototype.interfaces_ = function() {
  return [];
};
no.prototype.getClass = function() {
  return no;
};
var de = function(r) {
  function t(n, i) {
    r.call(this, i), this._coordinates = n || null, this.init(this._coordinates);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new T();
    var i = new T();
    return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_POINT;
  }, t.prototype.getCoordinates = function() {
    return this.isEmpty() ? [] : [this.getCoordinate()];
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? this.isEmpty() && i.isEmpty() ? !0 : this.isEmpty() !== i.isEmpty() ? !1 : this.equal(i.getCoordinate(), this.getCoordinate(), o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
  }, t.prototype.getCoordinate = function() {
    return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
  }, t.prototype.getBoundaryDimension = function() {
    return J.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getNumPoints = function() {
    return this.isEmpty() ? 0 : 1;
  }, t.prototype.reverse = function() {
    return this.copy();
  }, t.prototype.getX = function() {
    if (this.getCoordinate() === null)
      throw new Error("getX called on empty Point");
    return this.getCoordinate().x;
  }, t.prototype.compareToSameClass = function() {
    if (arguments.length === 1) {
      var i = arguments[0], o = i;
      return this.getCoordinate().compareTo(o.getCoordinate());
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1], u = s;
      return a.compare(this._coordinates, u._coordinates);
    }
  }, t.prototype.apply = function() {
    if (k(arguments[0], wn)) {
      var i = arguments[0];
      if (this.isEmpty())
        return null;
      i.filter(this.getCoordinate());
    } else if (k(arguments[0], Xe)) {
      var o = arguments[0];
      if (this.isEmpty())
        return null;
      o.filter(this._coordinates, 0), o.isGeometryChanged() && this.geometryChanged();
    } else if (k(arguments[0], un)) {
      var s = arguments[0];
      s.filter(this);
    } else if (k(arguments[0], Qn)) {
      var a = arguments[0];
      a.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.clone = function() {
    var i = r.prototype.clone.call(this);
    return i._coordinates = this._coordinates.clone(), i;
  }, t.prototype.getGeometryType = function() {
    return "Point";
  }, t.prototype.copy = function() {
    return new t(this._coordinates.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._coordinates;
  }, t.prototype.getY = function() {
    if (this.getCoordinate() === null)
      throw new Error("getY called on empty Point");
    return this.getCoordinate().y;
  }, t.prototype.isEmpty = function() {
    return this._coordinates.size() === 0;
  }, t.prototype.init = function(i) {
    i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), U.isTrue(i.size() <= 1), this._coordinates = i;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [no];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(G), lr = function() {
};
lr.prototype.interfaces_ = function() {
  return [];
};
lr.prototype.getClass = function() {
  return lr;
};
var Rt = function(r) {
  function t(n, i, o) {
    if (r.call(this, o), this._shell = null, this._holes = null, n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), r.hasNullElements(i))
      throw new ct("holes must not contain null elements");
    if (n.isEmpty() && r.hasNonEmptyElements(i))
      throw new ct("shell is empty but holes are not");
    this._shell = n, this._holes = i;
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this._shell.getEnvelopeInternal();
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_POLYGON;
  }, t.prototype.getCoordinates = function() {
    var i = this;
    if (this.isEmpty())
      return [];
    for (var o = new Array(this.getNumPoints()).fill(null), s = -1, a = this._shell.getCoordinates(), u = 0; u < a.length; u++)
      s++, o[s] = a[u];
    for (var l = 0; l < this._holes.length; l++)
      for (var c = i._holes[l].getCoordinates(), f = 0; f < c.length; f++)
        s++, o[s] = c[f];
    return o;
  }, t.prototype.getArea = function() {
    var i = this, o = 0;
    o += Math.abs(O.signedArea(this._shell.getCoordinateSequence()));
    for (var s = 0; s < this._holes.length; s++)
      o -= Math.abs(O.signedArea(i._holes[s].getCoordinateSequence()));
    return o;
  }, t.prototype.isRectangle = function() {
    if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5)
      return !1;
    for (var i = this._shell.getCoordinateSequence(), o = this.getEnvelopeInternal(), s = 0; s < 5; s++) {
      var a = i.getX(s);
      if (!(a === o.getMinX() || a === o.getMaxX()))
        return !1;
      var u = i.getY(s);
      if (!(u === o.getMinY() || u === o.getMaxY()))
        return !1;
    }
    for (var l = i.getX(0), c = i.getY(0), f = 1; f <= 4; f++) {
      var h = i.getX(f), g = i.getY(f), p = h !== l, y = g !== c;
      if (p === y)
        return !1;
      l = h, c = g;
    }
    return !0;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      if (!this.isEquivalentClass(o))
        return !1;
      var a = o, u = this._shell, l = a._shell;
      if (!u.equalsExact(l, s) || this._holes.length !== a._holes.length)
        return !1;
      for (var c = 0; c < this._holes.length; c++)
        if (!i._holes[c].equalsExact(a._holes[c], s))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    var i = this;
    if (arguments.length === 0) {
      this.normalize(this._shell, !0);
      for (var o = 0; o < this._holes.length; o++)
        i.normalize(i._holes[o], !1);
      xr.sort(this._holes);
    } else if (arguments.length === 2) {
      var s = arguments[0], a = arguments[1];
      if (s.isEmpty())
        return null;
      var u = new Array(s.getCoordinates().length - 1).fill(null);
      Ut.arraycopy(s.getCoordinates(), 0, u, 0, u.length);
      var l = W.minCoordinate(s.getCoordinates());
      W.scroll(u, l), Ut.arraycopy(u, 0, s.getCoordinates(), 0, u.length), s.getCoordinates()[u.length] = u[0], O.isCCW(s.getCoordinates()) === a && W.reverse(s.getCoordinates());
    }
  }, t.prototype.getCoordinate = function() {
    return this._shell.getCoordinate();
  }, t.prototype.getNumInteriorRing = function() {
    return this._holes.length;
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.getLength = function() {
    var i = this, o = 0;
    o += this._shell.getLength();
    for (var s = 0; s < this._holes.length; s++)
      o += i._holes[s].getLength();
    return o;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, o = this._shell.getNumPoints(), s = 0; s < this._holes.length; s++)
      o += i._holes[s].getNumPoints();
    return o;
  }, t.prototype.reverse = function() {
    var i = this, o = this.copy();
    o._shell = this._shell.copy().reverse(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].copy().reverse();
    return o;
  }, t.prototype.convexHull = function() {
    return this.getExteriorRing().convexHull();
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var o = arguments[0], s = this._shell, a = o._shell;
      return s.compareToSameClass(a);
    } else if (arguments.length === 2) {
      var u = arguments[0], l = arguments[1], c = u, f = this._shell, h = c._shell, g = f.compareToSameClass(h, l);
      if (g !== 0)
        return g;
      for (var p = this.getNumInteriorRing(), y = c.getNumInteriorRing(), d = 0; d < p && d < y; ) {
        var m = i.getInteriorRingN(d), I = c.getInteriorRingN(d), C = m.compareToSameClass(I, l);
        if (C !== 0)
          return C;
        d++;
      }
      return d < p ? 1 : d < y ? -1 : 0;
    }
  }, t.prototype.apply = function(i) {
    var o = this;
    if (k(i, wn)) {
      this._shell.apply(i);
      for (var s = 0; s < this._holes.length; s++)
        o._holes[s].apply(i);
    } else if (k(i, Xe)) {
      if (this._shell.apply(i), !i.isDone())
        for (var a = 0; a < this._holes.length && (o._holes[a].apply(i), !i.isDone()); a++)
          ;
      i.isGeometryChanged() && this.geometryChanged();
    } else if (k(i, un))
      i.filter(this);
    else if (k(i, Qn)) {
      i.filter(this), this._shell.apply(i);
      for (var u = 0; u < this._holes.length; u++)
        o._holes[u].apply(i);
    }
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    var o = new Array(this._holes.length + 1).fill(null);
    o[0] = this._shell;
    for (var s = 0; s < this._holes.length; s++)
      o[s + 1] = i._holes[s];
    return o.length <= 1 ? this.getFactory().createLinearRing(o[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(o);
  }, t.prototype.clone = function() {
    var i = this, o = r.prototype.clone.call(this);
    o._shell = this._shell.clone(), o._holes = new Array(this._holes.length).fill(null);
    for (var s = 0; s < this._holes.length; s++)
      o._holes[s] = i._holes[s].clone();
    return o;
  }, t.prototype.getGeometryType = function() {
    return "Polygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = this._shell.copy(), s = new Array(this._holes.length).fill(null), a = 0; a < s.length; a++)
      s[a] = i._holes[a].copy();
    return new t(o, s, this._factory);
  }, t.prototype.getExteriorRing = function() {
    return this._shell;
  }, t.prototype.isEmpty = function() {
    return this._shell.isEmpty();
  }, t.prototype.getInteriorRingN = function(i) {
    return this._holes[i];
  }, t.prototype.interfaces_ = function() {
    return [lr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(G), xi = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_MULTIPOINT;
  }, t.prototype.isValid = function() {
    return !0;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return this._geometries[i].getCoordinate();
    } else
      return r.prototype.getCoordinate.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return J.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.getGeometryType = function() {
    return "MultiPoint";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [no];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(ne), Ln = function(r) {
  function t(n, i) {
    n instanceof v && i instanceof H && (n = i.getCoordinateSequenceFactory().create(n)), r.call(this, n, i), this.validateConstruction();
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return J.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : r.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Et.reverse(i);
    var o = this.getFactory().createLinearRing(i);
    return o;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !r.prototype.isClosed.call(this))
      throw new ct("Points of LinearRing do not form a closed linestring");
    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
      throw new ct("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
  }, t.prototype.getGeometryType = function() {
    return "LinearRing";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.MINIMUM_VALID_SIZE.get = function() {
    return 4;
  }, e.serialVersionUID.get = function() {
    return -4261142084085851600;
  }, Object.defineProperties(t, e), t;
}(pt), xn = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return G.SORTINDEX_MULTIPOLYGON;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, o) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.reverse = function() {
    for (var i = this, o = this._geometries.length, s = new Array(o).fill(null), a = 0; a < this._geometries.length; a++)
      s[a] = i._geometries[a].reverse();
    return this.getFactory().createMultiPolygon(s);
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    for (var o = new b(), s = 0; s < this._geometries.length; s++)
      for (var a = i._geometries[s], u = a.getBoundary(), l = 0; l < u.getNumGeometries(); l++)
        o.add(u.getGeometryN(l));
    var c = new Array(o.size()).fill(null);
    return this.getFactory().createMultiLineString(o.toArray(c));
  }, t.prototype.getGeometryType = function() {
    return "MultiPolygon";
  }, t.prototype.copy = function() {
    for (var i = this, o = new Array(this._geometries.length).fill(null), s = 0; s < o.length; s++)
      o[s] = i._geometries[s].copy();
    return new t(o, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [lr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(ne), Ae = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, ts = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
Ae.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
Ae.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var n = this.editInternal(t, e);
  return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
};
Ae.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof ne ? this.editGeometryCollection(t, e) : t instanceof Rt ? this.editPolygon(t, e) : t instanceof de ? e.edit(t, this._factory) : t instanceof pt ? e.edit(t, this._factory) : (U.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
Ae.prototype.editGeometryCollection = function(t, e) {
  for (var n = this, i = e.edit(t, this._factory), o = new b(), s = 0; s < i.getNumGeometries(); s++) {
    var a = n.edit(i.getGeometryN(s), e);
    a === null || a.isEmpty() || o.add(a);
  }
  return i.getClass() === xi ? this._factory.createMultiPoint(o.toArray([])) : i.getClass() === br ? this._factory.createMultiLineString(o.toArray([])) : i.getClass() === xn ? this._factory.createMultiPolygon(o.toArray([])) : this._factory.createGeometryCollection(o.toArray([]));
};
Ae.prototype.editPolygon = function(t, e) {
  var n = this, i = e.edit(t, this._factory);
  if (i === null && (i = this._factory.createPolygon(null)), i.isEmpty())
    return i;
  var o = this.edit(i.getExteriorRing(), e);
  if (o === null || o.isEmpty())
    return this._factory.createPolygon();
  for (var s = new b(), a = 0; a < i.getNumInteriorRing(); a++) {
    var u = n.edit(i.getInteriorRingN(a), e);
    u === null || u.isEmpty() || s.add(u);
  }
  return this._factory.createPolygon(o, s.toArray([]));
};
Ae.prototype.interfaces_ = function() {
  return [];
};
Ae.prototype.getClass = function() {
  return Ae;
};
Ae.GeometryEditorOperation = function() {
};
ts.NoOpGeometryOperation.get = function() {
  return ro;
};
ts.CoordinateOperation.get = function() {
  return io;
};
ts.CoordinateSequenceOperation.get = function() {
  return oo;
};
Object.defineProperties(Ae, ts);
var ro = function() {
};
ro.prototype.edit = function(t, e) {
  return t;
};
ro.prototype.interfaces_ = function() {
  return [Ae.GeometryEditorOperation];
};
ro.prototype.getClass = function() {
  return ro;
};
var io = function() {
};
io.prototype.edit = function(t, e) {
  var n = this.editCoordinates(t.getCoordinates(), t);
  return n === null ? t : t instanceof Ln ? e.createLinearRing(n) : t instanceof pt ? e.createLineString(n) : t instanceof de ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t;
};
io.prototype.interfaces_ = function() {
  return [Ae.GeometryEditorOperation];
};
io.prototype.getClass = function() {
  return io;
};
var oo = function() {
};
oo.prototype.edit = function(t, e) {
  return t instanceof Ln ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof pt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof de ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
oo.prototype.interfaces_ = function() {
  return [Ae.GeometryEditorOperation];
};
oo.prototype.getClass = function() {
  return oo;
};
var yt = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var n = 0; n < e; n++)
        t._coordinates[n] = new v();
    } else if (k(arguments[0], Q)) {
      var i = arguments[0];
      if (i === null)
        return this._coordinates = new Array(0).fill(null), null;
      this._dimension = i.getDimension(), this._coordinates = new Array(i.size()).fill(null);
      for (var o = 0; o < this._coordinates.length; o++)
        t._coordinates[o] = i.getCoordinateCopy(o);
    }
  } else if (arguments.length === 2) {
    if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var s = arguments[0], a = arguments[1];
      this._coordinates = s, this._dimension = a, s === null && (this._coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var u = arguments[0], l = arguments[1];
      this._coordinates = new Array(u).fill(null), this._dimension = l;
      for (var c = 0; c < u; c++)
        t._coordinates[c] = new v();
    }
  }
}, gu = { serialVersionUID: { configurable: !0 } };
yt.prototype.setOrdinate = function(t, e, n) {
  switch (e) {
    case Q.X:
      this._coordinates[t].x = n;
      break;
    case Q.Y:
      this._coordinates[t].y = n;
      break;
    case Q.Z:
      this._coordinates[t].z = n;
      break;
    default:
      throw new ct("invalid ordinateIndex");
  }
};
yt.prototype.size = function() {
  return this._coordinates.length;
};
yt.prototype.getOrdinate = function(t, e) {
  switch (e) {
    case Q.X:
      return this._coordinates[t].x;
    case Q.Y:
      return this._coordinates[t].y;
    case Q.Z:
      return this._coordinates[t].z;
  }
  return z.NaN;
};
yt.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    n.x = this._coordinates[e].x, n.y = this._coordinates[e].y, n.z = this._coordinates[e].z;
  }
};
yt.prototype.getCoordinateCopy = function(t) {
  return new v(this._coordinates[t]);
};
yt.prototype.getDimension = function() {
  return this._dimension;
};
yt.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
yt.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].clone();
  return new yt(e, this._dimension);
};
yt.prototype.expandEnvelope = function(t) {
  for (var e = this, n = 0; n < this._coordinates.length; n++)
    t.expandToInclude(e._coordinates[n]);
  return t;
};
yt.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].copy();
  return new yt(e, this._dimension);
};
yt.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new yn(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var n = 1; n < this._coordinates.length; n++)
      e.append(", "), e.append(t._coordinates[n]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
yt.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
yt.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
yt.prototype.interfaces_ = function() {
  return [Q, ke];
};
yt.prototype.getClass = function() {
  return yt;
};
gu.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(yt, gu);
var bn = function() {
}, zs = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
bn.prototype.readResolve = function() {
  return bn.instance();
};
bn.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new yt(t);
    } else if (k(arguments[0], Q)) {
      var e = arguments[0];
      return new yt(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return i > 3 && (i = 3), i < 2 ? new yt(n) : new yt(n, i);
  }
};
bn.prototype.interfaces_ = function() {
  return [mi, ke];
};
bn.prototype.getClass = function() {
  return bn;
};
bn.instance = function() {
  return bn.instanceObject;
};
zs.serialVersionUID.get = function() {
  return -4099577099607551500;
};
zs.instanceObject.get = function() {
  return new bn();
};
Object.defineProperties(bn, zs);
var pu = function(r) {
  function t() {
    r.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.get = function(n) {
    return this.map_.get(n) || null;
  }, t.prototype.put = function(n, i) {
    return this.map_.set(n, i), i;
  }, t.prototype.values = function() {
    for (var n = new b(), i = this.map_.values(), o = i.next(); !o.done; )
      n.add(o.value), o = i.next();
    return n;
  }, t.prototype.entrySet = function() {
    var n = new Gs();
    return this.map_.entries().forEach(function(i) {
      return n.add(i);
    }), n;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(ci), $ = function r() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = r.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof ln) {
      var t = arguments[0];
      this._modelType = t, t === r.FIXED && this.setScale(1);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      this._modelType = r.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof r) {
      var n = arguments[0];
      this._modelType = n._modelType, this._scale = n._scale;
    }
  }
}, Vs = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
$.prototype.equals = function(t) {
  if (!(t instanceof $))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
$.prototype.compareTo = function(t) {
  var e = t, n = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
  return new sn(n).compareTo(new sn(i));
};
$.prototype.getScale = function() {
  return this._scale;
};
$.prototype.isFloating = function() {
  return this._modelType === $.FLOATING || this._modelType === $.FLOATING_SINGLE;
};
$.prototype.getType = function() {
  return this._modelType;
};
$.prototype.toString = function() {
  var t = "UNKNOWN";
  return this._modelType === $.FLOATING ? t = "Floating" : this._modelType === $.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === $.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
};
$.prototype.makePrecise = function() {
  if (typeof arguments[0] == "number") {
    var t = arguments[0];
    if (z.isNaN(t))
      return t;
    if (this._modelType === $.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === $.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof v) {
    var n = arguments[0];
    if (this._modelType === $.FLOATING)
      return null;
    n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
  }
};
$.prototype.getMaximumSignificantDigits = function() {
  var t = 16;
  return this._modelType === $.FLOATING ? t = 16 : this._modelType === $.FLOATING_SINGLE ? t = 6 : this._modelType === $.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
};
$.prototype.setScale = function(t) {
  this._scale = Math.abs(t);
};
$.prototype.interfaces_ = function() {
  return [ke, Ge];
};
$.prototype.getClass = function() {
  return $;
};
$.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
Vs.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
Vs.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties($, Vs);
var ln = function r(t) {
  this._name = t || null, r.nameToTypeMap.put(t, this);
}, Us = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
ln.prototype.readResolve = function() {
  return ln.nameToTypeMap.get(this._name);
};
ln.prototype.toString = function() {
  return this._name;
};
ln.prototype.interfaces_ = function() {
  return [ke];
};
ln.prototype.getClass = function() {
  return ln;
};
Us.serialVersionUID.get = function() {
  return -552860263173159e4;
};
Us.nameToTypeMap.get = function() {
  return new pu();
};
Object.defineProperties(ln, Us);
$.Type = ln;
$.FIXED = new ln("FIXED");
$.FLOATING = new ln("FLOATING");
$.FLOATING_SINGLE = new ln("FLOATING SINGLE");
var H = function r() {
  this._precisionModel = new $(), this._SRID = 0, this._coordinateSequenceFactory = r.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? k(arguments[0], mi) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof $ && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, du = { serialVersionUID: { configurable: !0 } };
H.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new v(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new v(t.getMinX(), t.getMinY()), new v(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new v(t.getMinX(), t.getMinY()), new v(t.getMinX(), t.getMaxY()), new v(t.getMaxX(), t.getMaxY()), new v(t.getMaxX(), t.getMinY()), new v(t.getMinX(), t.getMinY())]), null);
};
H.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new pt(this.getCoordinateSequenceFactory().create(t), this);
    if (k(t, Q))
      return new pt(t, this);
  } else
    return new pt(this.getCoordinateSequenceFactory().create([]), this);
};
H.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new br(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new br(t, this);
  }
};
H.prototype.buildGeometry = function(t) {
  for (var e = null, n = !1, i = !1, o = t.iterator(); o.hasNext(); ) {
    var s = o.next(), a = s.getClass();
    e === null && (e = a), a !== e && (n = !0), s.isGeometryCollectionOrDerived() && (i = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (n || i)
    return this.createGeometryCollection(H.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof Rt)
      return this.createMultiPolygon(H.toPolygonArray(t));
    if (u instanceof pt)
      return this.createMultiLineString(H.toLineStringArray(t));
    if (u instanceof de)
      return this.createMultiPoint(H.toPointArray(t));
    U.shouldNeverReachHere("Unhandled class: " + u.getClass().getName());
  }
  return u;
};
H.prototype.createMultiPointFromCoords = function(t) {
  return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
};
H.prototype.createPoint = function() {
  if (arguments.length === 0)
    return this.createPoint(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (k(arguments[0], Q)) {
      var e = arguments[0];
      return new de(e, this);
    }
  }
};
H.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
H.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new Rt(null, null, this);
  if (arguments.length === 1) {
    if (k(arguments[0], Q)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof Ln) {
      var n = arguments[0];
      return this.createPolygon(n, null);
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    return new Rt(i, o, this);
  }
};
H.prototype.getSRID = function() {
  return this._SRID;
};
H.prototype.createGeometryCollection = function() {
  if (arguments.length === 0)
    return new ne(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new ne(t, this);
  }
};
H.prototype.createGeometry = function(t) {
  var e = new Ae(this);
  return e.edit(t, {
    edit: function() {
      if (arguments.length === 2) {
        var n = arguments[0];
        return this._coordinateSequenceFactory.create(n);
      }
    }
  });
};
H.prototype.getPrecisionModel = function() {
  return this._precisionModel;
};
H.prototype.createLinearRing = function() {
  if (arguments.length === 0)
    return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
    } else if (k(arguments[0], Q)) {
      var e = arguments[0];
      return new Ln(e, this);
    }
  }
};
H.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new xn(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new xn(t, this);
  }
};
H.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new xi(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new xi(e, this);
    } else if (arguments[0] instanceof Array) {
      var n = arguments[0];
      return this.createMultiPoint(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
    } else if (k(arguments[0], Q)) {
      var i = arguments[0];
      if (i === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var o = new Array(i.size()).fill(null), s = 0; s < i.size(); s++) {
        var a = t.getCoordinateSequenceFactory().create(1, i.getDimension());
        Et.copy(i, s, a, 0, 1), o[s] = t.createPoint(a);
      }
      return this.createMultiPoint(o);
    }
  }
};
H.prototype.interfaces_ = function() {
  return [ke];
};
H.prototype.getClass = function() {
  return H;
};
H.toMultiPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toGeometryArray = function(t) {
  if (t === null)
    return null;
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.getDefaultCoordinateSequenceFactory = function() {
  return bn.instance();
};
H.toMultiLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toMultiPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toLinearRingArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.toPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
H.createPointFromInternalCoord = function(t, e) {
  return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
};
du.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(H, du);
var Rc = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], es = function(t) {
  this.geometryFactory = t || new H();
};
es.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var n = e.type;
  if (!tn[n])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return Rc.indexOf(n) !== -1 ? tn[n].apply(this, [e.coordinates]) : n === "GeometryCollection" ? tn[n].apply(this, [e.geometries]) : tn[n].apply(this, [e]);
};
es.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!qn[e])
    throw new Error("Geometry is not supported");
  return qn[e].apply(this, [t]);
};
var tn = {
  /**
   * Parse a GeoJSON Feature object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} Feature with geometry/bbox converted to JSTS Geometries.
   */
  Feature: function(r) {
    var t = {};
    for (var e in r)
      t[e] = r[e];
    if (r.geometry) {
      var n = r.geometry.type;
      if (!tn[n])
        throw new Error("Unknown GeoJSON type: " + r.type);
      t.geometry = this.read(r.geometry);
    }
    return r.bbox && (t.bbox = tn.bbox.apply(this, [r.bbox])), t;
  },
  /**
   * Parse a GeoJSON FeatureCollection object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} FeatureCollection with geometry/bbox converted to JSTS Geometries.
   */
  FeatureCollection: function(r) {
    var t = this, e = {};
    if (r.features) {
      e.features = [];
      for (var n = 0; n < r.features.length; ++n)
        e.features.push(t.read(r.features[n]));
    }
    return r.bbox && (e.bbox = this.parse.bbox.apply(this, [r.bbox])), e;
  },
  /**
   * Convert the ordinates in an array to an array of Coordinates
   *
   * @param {Array}
   *          array Array with {Number}s.
   *
   * @return {Array} Array with Coordinates.
   */
  coordinates: function(r) {
    for (var t = [], e = 0; e < r.length; ++e) {
      var n = r[e];
      t.push(new v(n[0], n[1]));
    }
    return t;
  },
  /**
   * Convert the bbox to a LinearRing
   *
   * @param {Array}
   *          array Array with [xMin, yMin, xMax, yMax].
   *
   * @return {Array} Array with Coordinates.
   */
  bbox: function(r) {
    return this.geometryFactory.createLinearRing([
      new v(r[0], r[1]),
      new v(r[2], r[1]),
      new v(r[2], r[3]),
      new v(r[0], r[3]),
      new v(r[0], r[1])
    ]);
  },
  /**
   * Convert an Array with ordinates to a Point
   *
   * @param {Array}
   *          array Array with ordinates.
   *
   * @return {Point} Point.
   */
  Point: function(r) {
    var t = new v(r[0], r[1]);
    return this.geometryFactory.createPoint(t);
  },
  /**
   * Convert an Array with coordinates to a MultiPoint
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiPoint} MultiPoint.
   */
  MultiPoint: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n)
      e.push(tn.Point.apply(t, [r[n]]));
    return this.geometryFactory.createMultiPoint(e);
  },
  /**
   * Convert an Array with coordinates to a LineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {LineString} LineString.
   */
  LineString: function(r) {
    var t = tn.coordinates.apply(this, [r]);
    return this.geometryFactory.createLineString(t);
  },
  /**
   * Convert an Array with coordinates to a MultiLineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiLineString} MultiLineString.
   */
  MultiLineString: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n)
      e.push(tn.LineString.apply(t, [r[n]]));
    return this.geometryFactory.createMultiLineString(e);
  },
  /**
   * Convert an Array to a Polygon
   *
   * @param {Array}
   *          array Array with shell and holes.
   *
   * @return {Polygon} Polygon.
   */
  Polygon: function(r) {
    for (var t = this, e = tn.coordinates.apply(this, [r[0]]), n = this.geometryFactory.createLinearRing(e), i = [], o = 1; o < r.length; ++o) {
      var s = r[o], a = tn.coordinates.apply(t, [s]), u = t.geometryFactory.createLinearRing(a);
      i.push(u);
    }
    return this.geometryFactory.createPolygon(n, i);
  },
  /**
   * Convert an Array to a MultiPolygon
   *
   * @param {Array}
   *          array Array of arrays with shell and rings.
   *
   * @return {MultiPolygon} MultiPolygon.
   */
  MultiPolygon: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n) {
      var i = r[n];
      e.push(tn.Polygon.apply(t, [i]));
    }
    return this.geometryFactory.createMultiPolygon(e);
  },
  /**
   * Convert an Array to a GeometryCollection
   *
   * @param {Array}
   *          array Array of GeoJSON geometries.
   *
   * @return {GeometryCollection} GeometryCollection.
   */
  GeometryCollection: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n) {
      var i = r[n];
      e.push(t.read(i));
    }
    return this.geometryFactory.createGeometryCollection(e);
  }
}, qn = {
  /**
   * Convert a Coordinate to an Array
   *
   * @param {Coordinate}
   *          coordinate Coordinate to convert.
   *
   * @return {Array} Array of ordinates.
   */
  coordinate: function(r) {
    return [r.x, r.y];
  },
  /**
   * Convert a Point to a GeoJSON object
   *
   * @param {Point}
   *          point Point to convert.
   *
   * @return {Array} Array of 2 ordinates (paired to a coordinate).
   */
  Point: function(r) {
    var t = qn.coordinate.apply(this, [r.getCoordinate()]);
    return {
      type: "Point",
      coordinates: t
    };
  },
  /**
   * Convert a MultiPoint to a GeoJSON object
   *
   * @param {MultiPoint}
   *          multipoint MultiPoint to convert.
   *
   * @return {Array} Array of coordinates.
   */
  MultiPoint: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = qn.Point.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPoint",
      coordinates: e
    };
  },
  /**
   * Convert a LineString to a GeoJSON object
   *
   * @param {LineString}
   *          linestring LineString to convert.
   *
   * @return {Array} Array of coordinates.
   */
  LineString: function(r) {
    for (var t = this, e = [], n = r.getCoordinates(), i = 0; i < n.length; ++i) {
      var o = n[i];
      e.push(qn.coordinate.apply(t, [o]));
    }
    return {
      type: "LineString",
      coordinates: e
    };
  },
  /**
   * Convert a MultiLineString to a GeoJSON object
   *
   * @param {MultiLineString}
   *          multilinestring MultiLineString to convert.
   *
   * @return {Array} Array of Array of coordinates.
   */
  MultiLineString: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = qn.LineString.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiLineString",
      coordinates: e
    };
  },
  /**
   * Convert a Polygon to a GeoJSON object
   *
   * @param {Polygon}
   *          polygon Polygon to convert.
   *
   * @return {Array} Array with shell, holes.
   */
  Polygon: function(r) {
    var t = this, e = [], n = qn.LineString.apply(this, [r._shell]);
    e.push(n.coordinates);
    for (var i = 0; i < r._holes.length; ++i) {
      var o = r._holes[i], s = qn.LineString.apply(t, [o]);
      e.push(s.coordinates);
    }
    return {
      type: "Polygon",
      coordinates: e
    };
  },
  /**
   * Convert a MultiPolygon to a GeoJSON object
   *
   * @param {MultiPolygon}
   *          multipolygon MultiPolygon to convert.
   *
   * @return {Array} Array of polygons.
   */
  MultiPolygon: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = qn.Polygon.apply(t, [i]);
      e.push(o.coordinates);
    }
    return {
      type: "MultiPolygon",
      coordinates: e
    };
  },
  /**
   * Convert a GeometryCollection to a GeoJSON object
   *
   * @param {GeometryCollection}
   *          collection GeometryCollection to convert.
   *
   * @return {Array} Array of geometries.
   */
  GeometryCollection: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], o = i.getGeometryType();
      e.push(qn[o].apply(t, [i]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, qs = function(t) {
  this.geometryFactory = t || new H(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new es(this.geometryFactory);
};
qs.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === $.FIXED && this.reducePrecision(e), e;
};
qs.prototype.reducePrecision = function(t) {
  var e = this, n, i;
  if (t.coordinate)
    this.precisionModel.makePrecise(t.coordinate);
  else if (t.points)
    for (n = 0, i = t.points.length; n < i; n++)
      e.precisionModel.makePrecise(t.points[n]);
  else if (t.geometries)
    for (n = 0, i = t.geometries.length; n < i; n++)
      e.reducePrecision(t.geometries[n]);
};
var vu = function() {
  this.parser = new es(this.geometryFactory);
};
vu.prototype.write = function(t) {
  return this.parser.write(t);
};
var S = function() {
}, ns = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
S.prototype.interfaces_ = function() {
  return [];
};
S.prototype.getClass = function() {
  return S;
};
S.opposite = function(t) {
  return t === S.LEFT ? S.RIGHT : t === S.RIGHT ? S.LEFT : t;
};
ns.ON.get = function() {
  return 0;
};
ns.LEFT.get = function() {
  return 1;
};
ns.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(S, ns);
function rs(r) {
  this.message = r || "";
}
rs.prototype = new Error();
rs.prototype.name = "EmptyStackException";
function mn() {
  this.array_ = [];
}
mn.prototype = new Ue();
mn.prototype.add = function(r) {
  return this.array_.push(r), !0;
};
mn.prototype.get = function(r) {
  if (r < 0 || r >= this.size())
    throw new Error();
  return this.array_[r];
};
mn.prototype.push = function(r) {
  return this.array_.push(r), r;
};
mn.prototype.pop = function(r) {
  if (this.array_.length === 0)
    throw new rs();
  return this.array_.pop();
};
mn.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new rs();
  return this.array_[this.array_.length - 1];
};
mn.prototype.empty = function() {
  return this.array_.length === 0;
};
mn.prototype.isEmpty = function() {
  return this.empty();
};
mn.prototype.search = function(r) {
  return this.array_.indexOf(r);
};
mn.prototype.size = function() {
  return this.array_.length;
};
mn.prototype.toArray = function() {
  for (var r = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(r.array_[e]);
  return t;
};
var cn = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
cn.prototype.getCoordinate = function() {
  return this._minCoord;
};
cn.prototype.getRightmostSide = function(t, e) {
  var n = this.getRightmostSideOfSegment(t, e);
  return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
};
cn.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  U.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], n = t[this._minIndex + 1], i = O.computeOrientation(this._minCoord, n, e), o = !1;
  (e.y < this._minCoord.y && n.y < this._minCoord.y && i === O.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && i === O.CLOCKWISE) && (o = !0), o && (this._minIndex = this._minIndex - 1);
};
cn.prototype.getRightmostSideOfSegment = function(t, e) {
  var n = t.getEdge(), i = n.getCoordinates();
  if (e < 0 || e + 1 >= i.length || i[e].y === i[e + 1].y)
    return -1;
  var o = S.LEFT;
  return i[e].y < i[e + 1].y && (o = S.RIGHT), o;
};
cn.prototype.getEdge = function() {
  return this._orientedDe;
};
cn.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, n = t.getEdge().getCoordinates(), i = 0; i < n.length - 1; i++)
    (e._minCoord === null || n[i].x > e._minCoord.x) && (e._minDe = t, e._minIndex = i, e._minCoord = n[i]);
};
cn.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
cn.prototype.findEdge = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.isForward() && e.checkForRightmostCoordinate(i);
  }
  U.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var o = this.getRightmostSide(this._minDe, this._minIndex);
  o === S.LEFT && (this._orientedDe = this._minDe.getSym());
};
cn.prototype.interfaces_ = function() {
  return [];
};
cn.prototype.getClass = function() {
  return cn;
};
var Jn = function(r) {
  function t(e, n) {
    r.call(this, t.msgWithCoord(e, n)), this.pt = n ? new v(n) : null, this.name = "TopologyException";
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getCoordinate = function() {
    return this.pt;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.msgWithCoord = function(n, i) {
    return i ? n : n + " [ " + i + " ]";
  }, t;
}(Kn), is = function() {
  this.array_ = [];
};
is.prototype.addLast = function(t) {
  this.array_.push(t);
};
is.prototype.removeFirst = function() {
  return this.array_.shift();
};
is.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var re = function() {
  this._finder = null, this._dirEdgeList = new b(), this._nodes = new b(), this._rightMostCoord = null, this._env = null, this._finder = new cn();
};
re.prototype.clearVisitedEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.setVisited(!1);
  }
};
re.prototype.getRightmostCoordinate = function() {
  return this._rightMostCoord;
};
re.prototype.computeNodeDepth = function(t) {
  for (var e = this, n = null, i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isVisited() || o.getSym().isVisited()) {
      n = o;
      break;
    }
  }
  if (n === null)
    throw new Jn("unable to find edge to compute depths at " + t.getCoordinate());
  t.getEdges().computeDepths(n);
  for (var s = t.getEdges().iterator(); s.hasNext(); ) {
    var a = s.next();
    a.setVisited(!0), e.copySymDepths(a);
  }
};
re.prototype.computeDepth = function(t) {
  this.clearVisitedEdges();
  var e = this._finder.getEdge();
  e.setEdgeDepths(S.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
};
re.prototype.create = function(t) {
  this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
};
re.prototype.findResultEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getDepth(S.RIGHT) >= 1 && e.getDepth(S.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
  }
};
re.prototype.computeDepths = function(t) {
  var e = this, n = new Gs(), i = new is(), o = t.getNode();
  for (i.addLast(o), n.add(o), t.setVisited(!0); !i.isEmpty(); ) {
    var s = i.removeFirst();
    n.add(s), e.computeNodeDepth(s);
    for (var a = s.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var c = l.getNode();
        n.contains(c) || (i.addLast(c), n.add(c));
      }
    }
  }
};
re.prototype.compareTo = function(t) {
  var e = t;
  return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
};
re.prototype.getEnvelope = function() {
  if (this._env === null) {
    for (var t = new T(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var n = e.next(), i = n.getEdge().getCoordinates(), o = 0; o < i.length - 1; o++)
        t.expandToInclude(i[o]);
    this._env = t;
  }
  return this._env;
};
re.prototype.addReachable = function(t) {
  var e = this, n = new mn();
  for (n.add(t); !n.empty(); ) {
    var i = n.pop();
    e.add(i, n);
  }
};
re.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(S.LEFT, t.getDepth(S.RIGHT)), e.setDepth(S.RIGHT, t.getDepth(S.LEFT));
};
re.prototype.add = function(t, e) {
  var n = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var i = t.getEdges().iterator(); i.hasNext(); ) {
    var o = i.next();
    n._dirEdgeList.add(o);
    var s = o.getSym(), a = s.getNode();
    a.isVisited() || e.push(a);
  }
};
re.prototype.getNodes = function() {
  return this._nodes;
};
re.prototype.getDirectedEdges = function() {
  return this._dirEdgeList;
};
re.prototype.interfaces_ = function() {
  return [Ge];
};
re.prototype.getClass = function() {
  return re;
};
var at = function r() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var n = arguments[0];
      this.init(1), this.location[S.ON] = n;
    } else if (arguments[0] instanceof r) {
      var i = arguments[0];
      if (this.init(i.location.length), i !== null)
        for (var o = 0; o < this.location.length; o++)
          t.location[o] = i.location[o];
    }
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    this.init(3), this.location[S.ON] = s, this.location[S.LEFT] = a, this.location[S.RIGHT] = u;
  }
};
at.prototype.setAllLocations = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] = t;
};
at.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== _.NONE)
      return !1;
  return !0;
};
at.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] === _.NONE && (e.location[n] = t);
};
at.prototype.isLine = function() {
  return this.location.length === 1;
};
at.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var n = new Array(3).fill(null);
    n[S.ON] = this.location[S.ON], n[S.LEFT] = _.NONE, n[S.RIGHT] = _.NONE, this.location = n;
  }
  for (var i = 0; i < this.location.length; i++)
    e.location[i] === _.NONE && i < t.location.length && (e.location[i] = t.location[i]);
};
at.prototype.getLocations = function() {
  return this.location;
};
at.prototype.flip = function() {
  if (this.location.length <= 1)
    return null;
  var t = this.location[S.LEFT];
  this.location[S.LEFT] = this.location[S.RIGHT], this.location[S.RIGHT] = t;
};
at.prototype.toString = function() {
  var t = new yn();
  return this.location.length > 1 && t.append(_.toLocationSymbol(this.location[S.LEFT])), t.append(_.toLocationSymbol(this.location[S.ON])), this.location.length > 1 && t.append(_.toLocationSymbol(this.location[S.RIGHT])), t.toString();
};
at.prototype.setLocations = function(t, e, n) {
  this.location[S.ON] = t, this.location[S.LEFT] = e, this.location[S.RIGHT] = n;
};
at.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : _.NONE;
};
at.prototype.isArea = function() {
  return this.location.length > 1;
};
at.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === _.NONE)
      return !0;
  return !1;
};
at.prototype.setLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setLocation(S.ON, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.location[e] = n;
  }
};
at.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(_.NONE);
};
at.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
at.prototype.allPositionsEqual = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    if (e.location[n] !== t)
      return !1;
  return !0;
};
at.prototype.interfaces_ = function() {
  return [];
};
at.prototype.getClass = function() {
  return at;
};
var et = function r() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new at(t), this.elt[1] = new at(t);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.elt[0] = new at(e.elt[0]), this.elt[1] = new at(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.elt[0] = new at(_.NONE), this.elt[1] = new at(_.NONE), this.elt[n].setLocation(i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    this.elt[0] = new at(o, s, a), this.elt[1] = new at(o, s, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], c = arguments[2], f = arguments[3];
    this.elt[0] = new at(_.NONE, _.NONE, _.NONE), this.elt[1] = new at(_.NONE, _.NONE, _.NONE), this.elt[u].setLocations(l, c, f);
  }
};
et.prototype.getGeometryCount = function() {
  var t = 0;
  return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
};
et.prototype.setAllLocations = function(t, e) {
  this.elt[t].setAllLocations(e);
};
et.prototype.isNull = function(t) {
  return this.elt[t].isNull();
};
et.prototype.setAllLocationsIfNull = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.elt[e].setAllLocationsIfNull(n);
  }
};
et.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
et.prototype.merge = function(t) {
  for (var e = this, n = 0; n < 2; n++)
    e.elt[n] === null && t.elt[n] !== null ? e.elt[n] = new at(t.elt[n]) : e.elt[n].merge(t.elt[n]);
};
et.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
et.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(S.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.elt[e].get(n);
  }
};
et.prototype.toString = function() {
  var t = new yn();
  return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
};
et.prototype.isArea = function() {
  if (arguments.length === 0)
    return this.elt[0].isArea() || this.elt[1].isArea();
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].isArea();
  }
};
et.prototype.isAnyNull = function(t) {
  return this.elt[t].isAnyNull();
};
et.prototype.setLocation = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.elt[t].setLocation(S.ON, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this.elt[n].setLocation(i, o);
  }
};
et.prototype.isEqualOnSide = function(t, e) {
  return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
};
et.prototype.allPositionsEqual = function(t, e) {
  return this.elt[t].allPositionsEqual(e);
};
et.prototype.toLine = function(t) {
  this.elt[t].isArea() && (this.elt[t] = new at(this.elt[t].location[0]));
};
et.prototype.interfaces_ = function() {
  return [];
};
et.prototype.getClass = function() {
  return et;
};
et.toLineLabel = function(t) {
  for (var e = new et(_.NONE), n = 0; n < 2; n++)
    e.setLocation(n, t.getLocation(n));
  return e;
};
var xt = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new b(), this._pts = new b(), this._label = new et(_.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new b(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
xt.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), n = 0; n < this._pts.size(); n++)
    e[n] = t._pts.get(n);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = O.isCCW(this._ring.getCoordinates());
};
xt.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
xt.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var n = t, i = !0;
  do {
    if (n === null)
      throw new Jn("Found null DirectedEdge");
    if (n.getEdgeRing() === e)
      throw new Jn("Directed Edge visited twice during ring-building at " + n.getCoordinate());
    e._edges.add(n);
    var o = n.getLabel();
    U.isTrue(o.isArea()), e.mergeLabel(o), e.addPoints(n.getEdge(), n.isForward(), i), i = !1, e.setEdgeRing(n, e), n = e.getNext(n);
  } while (n !== this._startDe);
};
xt.prototype.getLinearRing = function() {
  return this._ring;
};
xt.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
xt.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var n = e.getNode(), i = n.getEdges().getOutgoingDegree(t);
    i > t._maxNodeDegree && (t._maxNodeDegree = i), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
xt.prototype.addPoints = function(t, e, n) {
  var i = this, o = t.getCoordinates();
  if (e) {
    var s = 1;
    n && (s = 0);
    for (var a = s; a < o.length; a++)
      i._pts.add(o[a]);
  } else {
    var u = o.length - 2;
    n && (u = o.length - 1);
    for (var l = u; l >= 0; l--)
      i._pts.add(o[l]);
  }
};
xt.prototype.isHole = function() {
  return this._isHole;
};
xt.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
xt.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), n = e.getEnvelopeInternal();
  if (!n.contains(t) || !O.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var i = this._holes.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.containsPoint(t))
      return !1;
  }
  return !0;
};
xt.prototype.addHole = function(t) {
  this._holes.add(t);
};
xt.prototype.isShell = function() {
  return this._shell === null;
};
xt.prototype.getLabel = function() {
  return this._label;
};
xt.prototype.getEdges = function() {
  return this._edges;
};
xt.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
xt.prototype.getShell = function() {
  return this._shell;
};
xt.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = e.getLocation(n, S.RIGHT);
    if (i === _.NONE)
      return null;
    if (this._label.getLocation(n) === _.NONE)
      return this._label.setLocation(n, i), null;
  }
};
xt.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
xt.prototype.toPolygon = function(t) {
  for (var e = this, n = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++)
    n[i] = e._holes.get(i).getLinearRing();
  var o = t.createPolygon(this.getLinearRing(), n);
  return o;
};
xt.prototype.interfaces_ = function() {
  return [];
};
xt.prototype.getClass = function() {
  return xt;
};
var Oc = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.setEdgeRing = function(n, i) {
    n.setMinEdgeRing(i);
  }, t.prototype.getNext = function(n) {
    return n.getNextMin();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(xt), Dc = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var n = this, i = new b(), o = this._startDe;
    do {
      if (o.getMinEdgeRing() === null) {
        var s = new Oc(o, n._geometryFactory);
        i.add(s);
      }
      o = o.getNext();
    } while (o !== this._startDe);
    return i;
  }, t.prototype.setEdgeRing = function(n, i) {
    n.setEdgeRing(i);
  }, t.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
    var n = this, i = this._startDe;
    do {
      var o = i.getNode();
      o.getEdges().linkMinimalDirectedEdges(n), i = i.getNext();
    } while (i !== this._startDe);
  }, t.prototype.getNext = function(n) {
    return n.getNext();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(xt), Se = function() {
  if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._label = t;
    }
  }
};
Se.prototype.setVisited = function(t) {
  this._isVisited = t;
};
Se.prototype.setInResult = function(t) {
  this._isInResult = t;
};
Se.prototype.isCovered = function() {
  return this._isCovered;
};
Se.prototype.isCoveredSet = function() {
  return this._isCoveredSet;
};
Se.prototype.setLabel = function(t) {
  this._label = t;
};
Se.prototype.getLabel = function() {
  return this._label;
};
Se.prototype.setCovered = function(t) {
  this._isCovered = t, this._isCoveredSet = !0;
};
Se.prototype.updateIM = function(t) {
  U.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
};
Se.prototype.isInResult = function() {
  return this._isInResult;
};
Se.prototype.isVisited = function() {
  return this._isVisited;
};
Se.prototype.interfaces_ = function() {
  return [];
};
Se.prototype.getClass = function() {
  return Se;
};
var os = function(r) {
  function t() {
    r.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], n = arguments[1];
    this._coord = e, this._edges = n, this._label = new et(0, _.NONE);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isIncidentEdgeInResult = function() {
    for (var n = this.getEdges().getEdges().iterator(); n.hasNext(); ) {
      var i = n.next();
      if (i.getEdge().isInResult())
        return !0;
    }
    return !1;
  }, t.prototype.isIsolated = function() {
    return this._label.getGeometryCount() === 1;
  }, t.prototype.getCoordinate = function() {
    return this._coord;
  }, t.prototype.print = function(n) {
    n.println("node " + this._coord + " lbl: " + this._label);
  }, t.prototype.computeIM = function(n) {
  }, t.prototype.computeMergedLocation = function(n, i) {
    var o = _.NONE;
    if (o = this._label.getLocation(i), !n.isNull(i)) {
      var s = n.getLocation(i);
      o !== _.BOUNDARY && (o = s);
    }
    return o;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      this._label === null ? this._label = new et(n, i) : this._label.setLocation(n, i);
    } else
      return r.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var n = this;
    if (arguments[0] instanceof t) {
      var i = arguments[0];
      this.mergeLabel(i._label);
    } else if (arguments[0] instanceof et)
      for (var o = arguments[0], s = 0; s < 2; s++) {
        var a = n.computeMergedLocation(o, s), u = n._label.getLocation(s);
        u === _.NONE && n._label.setLocation(s, a);
      }
  }, t.prototype.add = function(n) {
    this._edges.insert(n), n.setNode(this);
  }, t.prototype.setLabelBoundary = function(n) {
    if (this._label === null)
      return null;
    var i = _.NONE;
    this._label !== null && (i = this._label.getLocation(n));
    var o = null;
    switch (i) {
      case _.BOUNDARY:
        o = _.INTERIOR;
        break;
      case _.INTERIOR:
        o = _.BOUNDARY;
        break;
      default:
        o = _.BOUNDARY;
        break;
    }
    this._label.setLocation(n, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Se), fn = function() {
  this.nodeMap = new jt(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
fn.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
fn.prototype.addNode = function() {
  if (arguments[0] instanceof v) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof os) {
    var n = arguments[0], i = this.nodeMap.get(n.getCoordinate());
    return i === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (i.mergeLabel(n), i);
  }
};
fn.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
fn.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
fn.prototype.values = function() {
  return this.nodeMap.values();
};
fn.prototype.getBoundaryNodes = function(t) {
  for (var e = new b(), n = this.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.getLabel().getLocation(t) === _.BOUNDARY && e.add(i);
  }
  return e;
};
fn.prototype.add = function(t) {
  var e = t.getCoordinate(), n = this.addNode(e);
  n.add(t);
};
fn.prototype.interfaces_ = function() {
  return [];
};
fn.prototype.getClass = function() {
  return fn;
};
var it = function() {
}, mo = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
it.prototype.interfaces_ = function() {
  return [];
};
it.prototype.getClass = function() {
  return it;
};
it.isNorthern = function(t) {
  return t === it.NE || t === it.NW;
};
it.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var n = (t - e + 4) % 4;
  return n === 2;
};
it.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var n = (t - e + 4) % 4;
  if (n === 2)
    return -1;
  var i = t < e ? t : e, o = t > e ? t : e;
  return i === 0 && o === 3 ? 3 : i;
};
it.isInHalfPlane = function(t, e) {
  return e === it.SE ? t === it.SE || t === it.SW : t === e || t === e + 1;
};
it.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new ct("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? it.NE : it.SE : e >= 0 ? it.NW : it.SW;
  } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
    var n = arguments[0], i = arguments[1];
    if (i.x === n.x && i.y === n.y)
      throw new ct("Cannot compute the quadrant for two identical points " + n);
    return i.x >= n.x ? i.y >= n.y ? it.NE : it.SE : i.y >= n.y ? it.NW : it.SW;
  }
};
mo.NE.get = function() {
  return 0;
};
mo.NW.get = function() {
  return 1;
};
mo.SW.get = function() {
  return 2;
};
mo.SE.get = function() {
  return 3;
};
Object.defineProperties(it, mo);
var Kt = function() {
  if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
    var t = arguments[0];
    this._edge = t;
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2], o = null;
    this._edge = e, this.init(n, i), this._label = o;
  } else if (arguments.length === 4) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = arguments[3];
    this._edge = s, this.init(a, u), this._label = l;
  }
};
Kt.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : O.computeOrientation(t._p0, t._p1, this._p1);
};
Kt.prototype.getDy = function() {
  return this._dy;
};
Kt.prototype.getCoordinate = function() {
  return this._p0;
};
Kt.prototype.setNode = function(t) {
  this._node = t;
};
Kt.prototype.print = function(t) {
  var e = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), i = n.lastIndexOf("."), o = n.substring(i + 1);
  t.print("  " + o + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
};
Kt.prototype.compareTo = function(t) {
  var e = t;
  return this.compareDirection(e);
};
Kt.prototype.getDirectedCoordinate = function() {
  return this._p1;
};
Kt.prototype.getDx = function() {
  return this._dx;
};
Kt.prototype.getLabel = function() {
  return this._label;
};
Kt.prototype.getEdge = function() {
  return this._edge;
};
Kt.prototype.getQuadrant = function() {
  return this._quadrant;
};
Kt.prototype.getNode = function() {
  return this._node;
};
Kt.prototype.toString = function() {
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), n = e.lastIndexOf("."), i = e.substring(n + 1);
  return "  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
Kt.prototype.computeLabel = function(t) {
};
Kt.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = it.quadrant(this._dx, this._dy), U.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
Kt.prototype.interfaces_ = function() {
  return [Ge];
};
Kt.prototype.getClass = function() {
  return Kt;
};
var Ps = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    if (r.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = n, n)
      this.init(e.getCoordinate(0), e.getCoordinate(1));
    else {
      var i = e.getNumPoints() - 1;
      this.init(e.getCoordinate(i), e.getCoordinate(i - 1));
    }
    this.computeDirectedLabel();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getNextMin = function() {
    return this._nextMin;
  }, t.prototype.getDepth = function(n) {
    return this._depth[n];
  }, t.prototype.setVisited = function(n) {
    this._isVisited = n;
  }, t.prototype.computeDirectedLabel = function() {
    this._label = new et(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(n, i) {
    if (this._depth[n] !== -999 && this._depth[n] !== i)
      throw new Jn("assigned depths do not match", this.getCoordinate());
    this._depth[n] = i;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var n = this, i = !0, o = 0; o < 2; o++)
      n._label.isArea(o) && n._label.getLocation(o, S.LEFT) === _.INTERIOR && n._label.getLocation(o, S.RIGHT) === _.INTERIOR || (i = !1);
    return i;
  }, t.prototype.setNextMin = function(n) {
    this._nextMin = n;
  }, t.prototype.print = function(n) {
    r.prototype.print.call(this, n), n.print(" " + this._depth[S.LEFT] + "/" + this._depth[S.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(n) {
    this._minEdgeRing = n;
  }, t.prototype.isLineEdge = function() {
    var n = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, _.EXTERIOR), o = !this._label.isArea(1) || this._label.allPositionsEqual(1, _.EXTERIOR);
    return n && i && o;
  }, t.prototype.setEdgeRing = function(n) {
    this._edgeRing = n;
  }, t.prototype.getMinEdgeRing = function() {
    return this._minEdgeRing;
  }, t.prototype.getDepthDelta = function() {
    var n = this._edge.getDepthDelta();
    return this._isForward || (n = -n), n;
  }, t.prototype.setInResult = function(n) {
    this._isInResult = n;
  }, t.prototype.getSym = function() {
    return this._sym;
  }, t.prototype.isForward = function() {
    return this._isForward;
  }, t.prototype.getEdge = function() {
    return this._edge;
  }, t.prototype.printEdge = function(n) {
    this.print(n), n.print(" "), this._isForward ? this._edge.print(n) : this._edge.printReverse(n);
  }, t.prototype.setSym = function(n) {
    this._sym = n;
  }, t.prototype.setVisitedEdge = function(n) {
    this.setVisited(n), this._sym.setVisited(n);
  }, t.prototype.setEdgeDepths = function(n, i) {
    var o = this.getEdge().getDepthDelta();
    this._isForward || (o = -o);
    var s = 1;
    n === S.LEFT && (s = -1);
    var a = S.opposite(n), u = o * s, l = i + u;
    this.setDepth(n, i), this.setDepth(a, l);
  }, t.prototype.getEdgeRing = function() {
    return this._edgeRing;
  }, t.prototype.isInResult = function() {
    return this._isInResult;
  }, t.prototype.setNext = function(n) {
    this._next = n;
  }, t.prototype.isVisited = function() {
    return this._isVisited;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.depthFactor = function(n, i) {
    return n === _.EXTERIOR && i === _.INTERIOR ? 1 : n === _.INTERIOR && i === _.EXTERIOR ? -1 : 0;
  }, t;
}(Kt), Si = function() {
};
Si.prototype.createNode = function(t) {
  return new os(t, null);
};
Si.prototype.interfaces_ = function() {
  return [];
};
Si.prototype.getClass = function() {
  return Si;
};
var ht = function() {
  if (this._edges = new b(), this._nodes = null, this._edgeEndList = new b(), arguments.length === 0)
    this._nodes = new fn(new Si());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new fn(t);
  }
};
ht.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var n = 0; n < this._edges.size(); n++) {
    t.println("edge " + n + ":");
    var i = e._edges.get(n);
    i.print(t), i.eiList.print(t);
  }
};
ht.prototype.find = function(t) {
  return this._nodes.find(t);
};
ht.prototype.addNode = function() {
  if (arguments[0] instanceof os) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof v) {
    var e = arguments[0];
    return this._nodes.addNode(e);
  }
};
ht.prototype.getNodeIterator = function() {
  return this._nodes.iterator();
};
ht.prototype.linkResultDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkResultDirectedEdges();
  }
};
ht.prototype.debugPrintln = function(t) {
  Ut.out.println(t);
};
ht.prototype.isBoundaryNode = function(t, e) {
  var n = this._nodes.find(e);
  if (n === null)
    return !1;
  var i = n.getLabel();
  return i !== null && i.getLocation(t) === _.BOUNDARY;
};
ht.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
ht.prototype.matchInSameDirection = function(t, e, n, i) {
  return t.equals(n) ? O.computeOrientation(t, e, i) === O.COLLINEAR && it.quadrant(t, e) === it.quadrant(n, i) : !1;
};
ht.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
ht.prototype.debugPrint = function(t) {
  Ut.out.print(t);
};
ht.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
ht.prototype.findEdgeInSameDirection = function(t, e) {
  for (var n = this, i = 0; i < this._edges.size(); i++) {
    var o = n._edges.get(i), s = o.getCoordinates();
    if (n.matchInSameDirection(t, e, s[0], s[1]) || n.matchInSameDirection(t, e, s[s.length - 1], s[s.length - 2]))
      return o;
  }
  return null;
};
ht.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
ht.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.getEdge() === t)
      return n;
  }
  return null;
};
ht.prototype.addEdges = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e._edges.add(i);
    var o = new Ps(i, !0), s = new Ps(i, !1);
    o.setSym(s), s.setSym(o), e.add(o), e.add(s);
  }
};
ht.prototype.add = function(t) {
  this._nodes.add(t), this._edgeEndList.add(t);
};
ht.prototype.getNodes = function() {
  return this._nodes.values();
};
ht.prototype.findEdge = function(t, e) {
  for (var n = this, i = 0; i < this._edges.size(); i++) {
    var o = n._edges.get(i), s = o.getCoordinates();
    if (t.equals(s[0]) && e.equals(s[1]))
      return o;
  }
  return null;
};
ht.prototype.interfaces_ = function() {
  return [];
};
ht.prototype.getClass = function() {
  return ht;
};
ht.linkResultDirectedEdges = function(t) {
  for (var e = t.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().linkResultDirectedEdges();
  }
};
var ve = function() {
  this._geometryFactory = null, this._shellList = new b();
  var t = arguments[0];
  this._geometryFactory = t;
};
ve.prototype.sortShellsAndHoles = function(t, e, n) {
  for (var i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() ? n.add(o) : e.add(o);
  }
};
ve.prototype.computePolygons = function(t) {
  for (var e = this, n = new b(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.toPolygon(e._geometryFactory);
    n.add(s);
  }
  return n;
};
ve.prototype.placeFreeHoles = function(t, e) {
  for (var n = this, i = e.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.getShell() === null) {
      var s = n.findEdgeRingContaining(o, t);
      if (s === null)
        throw new Jn("unable to assign hole to a shell", o.getCoordinate(0));
      o.setShell(s);
    }
  }
};
ve.prototype.buildMinimalEdgeRings = function(t, e, n) {
  for (var i = this, o = new b(), s = t.iterator(); s.hasNext(); ) {
    var a = s.next();
    if (a.getMaxNodeDegree() > 2) {
      a.linkDirectedEdgesForMinimalEdgeRings();
      var u = a.buildMinimalRings(), l = i.findShell(u);
      l !== null ? (i.placePolygonHoles(l, u), e.add(l)) : n.addAll(u);
    } else
      o.add(a);
  }
  return o;
};
ve.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.containsPoint(t))
      return !0;
  }
  return !1;
};
ve.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, n = new b(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    if (o.isInResult() && o.getLabel().isArea() && o.getEdgeRing() === null) {
      var s = new Dc(o, e._geometryFactory);
      n.add(s), s.setInResult();
    }
  }
  return n;
};
ve.prototype.placePolygonHoles = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.isHole() && i.setShell(t);
  }
};
ve.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
ve.prototype.findEdgeRingContaining = function(t, e) {
  for (var n = t.getLinearRing(), i = n.getEnvelopeInternal(), o = n.getCoordinateN(0), s = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), f = c.getEnvelopeInternal();
    s !== null && (a = s.getLinearRing().getEnvelopeInternal());
    var h = !1;
    f.contains(i) && O.isPointInRing(o, c.getCoordinates()) && (h = !0), h && (s === null || a.contains(f)) && (s = l);
  }
  return s;
};
ve.prototype.findShell = function(t) {
  for (var e = 0, n = null, i = t.iterator(); i.hasNext(); ) {
    var o = i.next();
    o.isHole() || (n = o, e++);
  }
  return U.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
};
ve.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    ht.linkResultDirectedEdges(n);
    var i = this.buildMaximalEdgeRings(e), o = new b(), s = this.buildMinimalEdgeRings(i, this._shellList, o);
    this.sortShellsAndHoles(s, this._shellList, o), this.placeFreeHoles(this._shellList, o);
  }
};
ve.prototype.interfaces_ = function() {
  return [];
};
ve.prototype.getClass = function() {
  return ve;
};
var wi = function() {
};
wi.prototype.getBounds = function() {
};
wi.prototype.interfaces_ = function() {
  return [];
};
wi.prototype.getClass = function() {
  return wi;
};
var Ye = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
Ye.prototype.getItem = function() {
  return this._item;
};
Ye.prototype.getBounds = function() {
  return this._bounds;
};
Ye.prototype.interfaces_ = function() {
  return [wi, ke];
};
Ye.prototype.getClass = function() {
  return Ye;
};
var Zn = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new b(), this._items.add(null);
};
Zn.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
Zn.prototype.size = function() {
  return this._size;
};
Zn.prototype.reorder = function(t) {
  for (var e = this, n = null, i = this._items.get(t); t * 2 <= this._size && (n = t * 2, n !== e._size && e._items.get(n + 1).compareTo(e._items.get(n)) < 0 && n++, e._items.get(n).compareTo(i) < 0); t = n)
    e._items.set(t, e._items.get(n));
  this._items.set(t, i);
};
Zn.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
Zn.prototype.isEmpty = function() {
  return this._size === 0;
};
Zn.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var n = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2)
    e._items.set(n, e._items.get(Math.trunc(n / 2)));
  this._items.set(n, t);
};
Zn.prototype.interfaces_ = function() {
  return [];
};
Zn.prototype.getClass = function() {
  return Zn;
};
var cr = function() {
};
cr.prototype.visitItem = function(t) {
};
cr.prototype.interfaces_ = function() {
  return [];
};
cr.prototype.getClass = function() {
  return cr;
};
var Jr = function() {
};
Jr.prototype.insert = function(t, e) {
};
Jr.prototype.remove = function(t, e) {
};
Jr.prototype.query = function() {
};
Jr.prototype.interfaces_ = function() {
  return [];
};
Jr.prototype.getClass = function() {
  return Jr;
};
var Pt = function() {
  if (this._childBoundables = new b(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, yu = { serialVersionUID: { configurable: !0 } };
Pt.prototype.getLevel = function() {
  return this._level;
};
Pt.prototype.size = function() {
  return this._childBoundables.size();
};
Pt.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Pt.prototype.addChildBoundable = function(t) {
  U.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Pt.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Pt.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Pt.prototype.interfaces_ = function() {
  return [wi, ke];
};
Pt.prototype.getClass = function() {
  return Pt;
};
yu.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Pt, yu);
var He = function() {
};
He.reverseOrder = function() {
  return {
    compare: function(e, n) {
      return n.compareTo(e);
    }
  };
};
He.min = function(t) {
  return He.sort(t), t.get(0);
};
He.sort = function(t, e) {
  var n = t.toArray();
  e ? xr.sort(n, e) : xr.sort(n);
  for (var i = t.iterator(), o = 0, s = n.length; o < s; o++)
    i.next(), i.set(n[o]);
};
He.singletonList = function(t) {
  var e = new b();
  return e.add(t), e;
};
var Ct = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
};
Ct.prototype.expandToQueue = function(t, e) {
  var n = Ct.isComposite(this._boundable1), i = Ct.isComposite(this._boundable2);
  if (n && i)
    return Ct.area(this._boundable1) > Ct.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (n)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (i)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new ct("neither boundable is composite");
};
Ct.prototype.isLeaves = function() {
  return !(Ct.isComposite(this._boundable1) || Ct.isComposite(this._boundable2));
};
Ct.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
Ct.prototype.expand = function(t, e, n, i) {
  for (var o = this, s = t.getChildBoundables(), a = s.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new Ct(u, e, o._itemDistance);
    l.getDistance() < i && n.add(l);
  }
};
Ct.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
Ct.prototype.getDistance = function() {
  return this._distance;
};
Ct.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
Ct.prototype.interfaces_ = function() {
  return [Ge];
};
Ct.prototype.getClass = function() {
  return Ct;
};
Ct.area = function(t) {
  return t.getBounds().getArea();
};
Ct.isComposite = function(t) {
  return t instanceof Pt;
};
var Tt = function r() {
  if (this._root = null, this._built = !1, this._itemBoundables = new b(), this._nodeCapacity = null, arguments.length === 0) {
    var t = r.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    U.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, ss = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
Tt.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
Tt.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
Tt.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      o instanceof Pt ? n += t.size(o) : o instanceof Ye && (n += 1);
    }
    return n;
  }
};
Tt.prototype.removeItem = function(t, e) {
  for (var n = null, i = t.getChildBoundables().iterator(); i.hasNext(); ) {
    var o = i.next();
    o instanceof Ye && o.getItem() === e && (n = o);
  }
  return n !== null ? (t.getChildBoundables().remove(n), !0) : !1;
};
Tt.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new b() : e;
  } else if (arguments.length === 1) {
    for (var n = arguments[0], i = new b(), o = n.getChildBoundables().iterator(); o.hasNext(); ) {
      var s = o.next();
      if (s instanceof Pt) {
        var a = t.itemsTree(s);
        a !== null && i.add(a);
      } else
        s instanceof Ye ? i.add(s.getItem()) : U.shouldNeverReachHere();
    }
    return i.size() <= 0 ? null : i;
  }
};
Tt.prototype.insert = function(t, e) {
  U.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Ye(t, e));
};
Tt.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], n = new b();
    return this.boundablesAtLevel(e, this._root, n), n;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    if (U.isTrue(i > -2), o.getLevel() === i)
      return s.add(o), null;
    for (var a = o.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Pt ? t.boundablesAtLevel(i, u, s) : (U.isTrue(u instanceof Ye), i === -1 && s.add(u));
    }
    return null;
  }
};
Tt.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var n = new b();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, n), n;
  } else if (arguments.length === 2) {
    var i = arguments[0], o = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), i) && this.query(i, this._root, o);
  } else if (arguments.length === 3) {
    if (k(arguments[2], cr) && arguments[0] instanceof Object && arguments[1] instanceof Pt)
      for (var s = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var f = l.get(c);
        t.getIntersectsOp().intersects(f.getBounds(), s) && (f instanceof Pt ? t.query(s, f, u) : f instanceof Ye ? u.visitItem(f.getItem()) : U.shouldNeverReachHere());
      }
    else if (k(arguments[2], Ue) && arguments[0] instanceof Object && arguments[1] instanceof Pt)
      for (var h = arguments[0], g = arguments[1], p = arguments[2], y = g.getChildBoundables(), d = 0; d < y.size(); d++) {
        var m = y.get(d);
        t.getIntersectsOp().intersects(m.getBounds(), h) && (m instanceof Pt ? t.query(h, m, p) : m instanceof Ye ? p.add(m.getItem()) : U.shouldNeverReachHere());
      }
  }
};
Tt.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
Tt.prototype.getRoot = function() {
  return this.build(), this._root;
};
Tt.prototype.remove = function() {
  var t = this;
  if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.build(), this.getIntersectsOp().intersects(this._root.getBounds(), e) ? this.remove(e, this._root, n) : !1;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = this.removeItem(o, s);
    if (a)
      return !0;
    for (var u = null, l = o.getChildBoundables().iterator(); l.hasNext(); ) {
      var c = l.next();
      if (t.getIntersectsOp().intersects(c.getBounds(), i) && c instanceof Pt && (a = t.remove(i, c, s), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && o.getChildBoundables().remove(u), a;
  }
};
Tt.prototype.createHigherLevels = function(t, e) {
  U.isTrue(!t.isEmpty());
  var n = this.createParentBoundables(t, e + 1);
  return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, e + 1);
};
Tt.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      if (o instanceof Pt) {
        var s = t.depth(o);
        s > n && (n = s);
      }
    }
    return n + 1;
  }
};
Tt.prototype.createParentBoundables = function(t, e) {
  var n = this;
  U.isTrue(!t.isEmpty());
  var i = new b();
  i.add(this.createNode(e));
  var o = new b(t);
  He.sort(o, this.getComparator());
  for (var s = o.iterator(); s.hasNext(); ) {
    var a = s.next();
    n.lastNode(i).getChildBoundables().size() === n.getNodeCapacity() && i.add(n.createNode(e)), n.lastNode(i).addChildBoundable(a);
  }
  return i;
};
Tt.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
Tt.prototype.interfaces_ = function() {
  return [ke];
};
Tt.prototype.getClass = function() {
  return Tt;
};
Tt.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
ss.IntersectsOp.get = function() {
  return Tc;
};
ss.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
ss.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(Tt, ss);
var Tc = function() {
}, Li = function() {
};
Li.prototype.distance = function(t, e) {
};
Li.prototype.interfaces_ = function() {
  return [];
};
Li.prototype.getClass = function() {
  return Li;
};
var mu = function(r) {
  function t(n) {
    n = n || t.DEFAULT_NODE_CAPACITY, r.call(this, n);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(i, o) {
    var s = this;
    U.isTrue(i.length > 0);
    for (var a = new b(), u = 0; u < i.length; u++)
      a.addAll(s.createParentBoundablesFromVerticalSlice(i[u], o));
    return a;
  }, t.prototype.createNode = function(i) {
    return new La(i);
  }, t.prototype.size = function() {
    return arguments.length === 0 ? r.prototype.size.call(this) : r.prototype.size.apply(this, arguments);
  }, t.prototype.insert = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      if (i.isNull())
        return null;
      r.prototype.insert.call(this, i, o);
    } else
      return r.prototype.insert.apply(this, arguments);
  }, t.prototype.getIntersectsOp = function() {
    return t.intersectsOp;
  }, t.prototype.verticalSlices = function(i, o) {
    for (var s = Math.trunc(Math.ceil(i.size() / o)), a = new Array(o).fill(null), u = i.iterator(), l = 0; l < o; l++) {
      a[l] = new b();
      for (var c = 0; u.hasNext() && c < s; ) {
        var f = u.next();
        a[l].add(f), c++;
      }
    }
    return a;
  }, t.prototype.query = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return r.prototype.query.call(this, i);
    } else if (arguments.length === 2) {
      var o = arguments[0], s = arguments[1];
      r.prototype.query.call(this, o, s);
    } else if (arguments.length === 3) {
      if (k(arguments[2], cr) && arguments[0] instanceof Object && arguments[1] instanceof Pt) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        r.prototype.query.call(this, a, u, l);
      } else if (k(arguments[2], Ue) && arguments[0] instanceof Object && arguments[1] instanceof Pt) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        r.prototype.query.call(this, c, f, h);
      }
    }
  }, t.prototype.getComparator = function() {
    return t.yComparator;
  }, t.prototype.createParentBoundablesFromVerticalSlice = function(i, o) {
    return r.prototype.createParentBoundables.call(this, i, o);
  }, t.prototype.remove = function() {
    if (arguments.length === 2) {
      var i = arguments[0], o = arguments[1];
      return r.prototype.remove.call(this, i, o);
    } else
      return r.prototype.remove.apply(this, arguments);
  }, t.prototype.depth = function() {
    return arguments.length === 0 ? r.prototype.depth.call(this) : r.prototype.depth.apply(this, arguments);
  }, t.prototype.createParentBoundables = function(i, o) {
    U.isTrue(!i.isEmpty());
    var s = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), a = new b(i);
    He.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(s))));
    return this.createParentBoundablesFromVerticalSlices(u, o);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (k(arguments[0], Li)) {
        var i = arguments[0], o = new Ct(this.getRoot(), this.getRoot(), i);
        return this.nearestNeighbour(o);
      } else if (arguments[0] instanceof Ct) {
        var s = arguments[0];
        return this.nearestNeighbour(s, z.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && k(arguments[1], Li)) {
        var a = arguments[0], u = arguments[1], l = new Ct(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof Ct && typeof arguments[1] == "number") {
        var c = arguments[0], f = arguments[1], h = f, g = null, p = new Zn();
        for (p.add(c); !p.isEmpty() && h > 0; ) {
          var y = p.poll(), d = y.getDistance();
          if (d >= h)
            break;
          y.isLeaves() ? (h = d, g = y) : y.expandToQueue(p, h);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var m = arguments[0], I = arguments[1], C = arguments[2], L = new Ye(m, I), x = new Ct(this.getRoot(), L, C);
      return this.nearestNeighbour(x)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [Jr, ke];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(i) {
    return t.avg(i.getMinX(), i.getMaxX());
  }, t.avg = function(i, o) {
    return (i + o) / 2;
  }, t.centreY = function(i) {
    return t.avg(i.getMinY(), i.getMaxY());
  }, e.STRtreeNode.get = function() {
    return La;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [yi];
      },
      compare: function(n, i) {
        return r.compareDoubles(t.centreX(n.getBounds()), t.centreX(i.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [yi];
      },
      compare: function(n, i) {
        return r.compareDoubles(t.centreY(n.getBounds()), t.centreY(i.getBounds()));
      }
    };
  }, e.intersectsOp.get = function() {
    return {
      interfaces_: function() {
        return [r.IntersectsOp];
      },
      intersects: function(n, i) {
        return n.intersects(i);
      }
    };
  }, e.DEFAULT_NODE_CAPACITY.get = function() {
    return 10;
  }, Object.defineProperties(t, e), t;
}(Tt), La = function(r) {
  function t() {
    var e = arguments[0];
    r.call(this, e);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var n = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
      var o = i.next();
      n === null ? n = new T(o.getBounds()) : n.expandToInclude(o.getBounds());
    }
    return n;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Pt), se = function() {
};
se.prototype.interfaces_ = function() {
  return [];
};
se.prototype.getClass = function() {
  return se;
};
se.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
se.compare = function(t, e, n) {
  if (e.equals2D(n))
    return 0;
  var i = se.relativeSign(e.x, n.x), o = se.relativeSign(e.y, n.y);
  switch (t) {
    case 0:
      return se.compareValue(i, o);
    case 1:
      return se.compareValue(o, i);
    case 2:
      return se.compareValue(o, -i);
    case 3:
      return se.compareValue(-i, o);
    case 4:
      return se.compareValue(-i, -o);
    case 5:
      return se.compareValue(-o, -i);
    case 6:
      return se.compareValue(-o, i);
    case 7:
      return se.compareValue(i, -o);
  }
  return U.shouldNeverReachHere("invalid octant value"), 0;
};
se.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var fr = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
  this._segString = t, this.coord = new v(e), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(n));
};
fr.prototype.getCoordinate = function() {
  return this.coord;
};
fr.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
fr.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : se.compare(this._segmentOctant, this.coord, e.coord);
};
fr.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
fr.prototype.isInterior = function() {
  return this._isInterior;
};
fr.prototype.interfaces_ = function() {
  return [Ge];
};
fr.prototype.getClass = function() {
  return fr;
};
var ie = function() {
  this._nodeMap = new jt(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
ie.prototype.getSplitCoordinates = function() {
  var t = this, e = new vo();
  this.addEndpoints();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var o = n.next();
    t.addEdgeCoordinates(i, o, e), i = o;
  }
  return e.toCoordinateArray();
};
ie.prototype.addCollapsedNodes = function() {
  var t = this, e = new b();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next().intValue();
    t.add(t._edge.getCoordinate(i), i);
  }
};
ie.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
ie.prototype.findCollapsesFromExistingVertices = function(t) {
  for (var e = this, n = 0; n < this._edge.size() - 2; n++) {
    var i = e._edge.getCoordinate(n), o = e._edge.getCoordinate(n + 2);
    i.equals2D(o) && t.add(new sn(n + 1));
  }
};
ie.prototype.addEdgeCoordinates = function(t, e, n) {
  var i = this, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  n.add(new v(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    n.add(i._edge.getCoordinate(a));
  s && n.add(new v(e.coord));
};
ie.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
ie.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var o = n.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
ie.prototype.findCollapseIndex = function(t, e, n) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var i = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || i--, i === 1 ? (n[0] = t.segmentIndex + 1, !0) : !1;
};
ie.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, n = new Array(1).fill(null), i = this.iterator(), o = i.next(); i.hasNext(); ) {
    var s = i.next(), a = e.findCollapseIndex(o, s, n);
    a && t.add(new sn(n[0])), o = s;
  }
};
ie.prototype.getEdge = function() {
  return this._edge;
};
ie.prototype.addEndpoints = function() {
  var t = this._edge.size() - 1;
  this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
};
ie.prototype.createSplitEdge = function(t, e) {
  var n = this, i = e.segmentIndex - t.segmentIndex + 2, o = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new v(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n._edge.getCoordinate(l);
  return s && (a[u] = new v(e.coord)), new It(a, this._edge.getData());
};
ie.prototype.add = function(t, e) {
  var n = new fr(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(n);
  return i !== null ? (U.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
};
ie.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), n = t.get(0), i = n.getCoordinate(0);
  if (!i.equals2D(e[0]))
    throw new Kn("bad split edge start point at " + i);
  var o = t.get(t.size() - 1), s = o.getCoordinates(), a = s[s.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new Kn("bad split edge end point at " + a);
};
ie.prototype.interfaces_ = function() {
  return [];
};
ie.prototype.getClass = function() {
  return ie;
};
var Zr = function() {
};
Zr.prototype.interfaces_ = function() {
  return [];
};
Zr.prototype.getClass = function() {
  return Zr;
};
Zr.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new ct("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var n = Math.abs(t), i = Math.abs(e);
    return t >= 0 ? e >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : e >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
  } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
    var o = arguments[0], s = arguments[1], a = s.x - o.x, u = s.y - o.y;
    if (a === 0 && u === 0)
      throw new ct("Cannot compute the octant for two identical points " + o);
    return Zr.octant(a, u);
  }
};
var Pn = function() {
};
Pn.prototype.getCoordinates = function() {
};
Pn.prototype.size = function() {
};
Pn.prototype.getCoordinate = function(t) {
};
Pn.prototype.isClosed = function() {
};
Pn.prototype.setData = function(t) {
};
Pn.prototype.getData = function() {
};
Pn.prototype.interfaces_ = function() {
  return [];
};
Pn.prototype.getClass = function() {
  return Pn;
};
var so = function() {
};
so.prototype.addIntersection = function(t, e) {
};
so.prototype.interfaces_ = function() {
  return [Pn];
};
so.prototype.getClass = function() {
  return so;
};
var It = function() {
  this._nodeList = new ie(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
It.prototype.getCoordinates = function() {
  return this._pts;
};
It.prototype.size = function() {
  return this._pts.length;
};
It.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
It.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
It.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
It.prototype.setData = function(t) {
  this._data = t;
};
It.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : Zr.octant(t, e);
};
It.prototype.getData = function() {
  return this._data;
};
It.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var n = arguments[0], i = arguments[1], o = arguments[3], s = new v(n.getIntersection(o));
    this.addIntersection(s, i);
  }
};
It.prototype.toString = function() {
  return qe.toLineString(new yt(this._pts));
};
It.prototype.getNodeList = function() {
  return this._nodeList;
};
It.prototype.addIntersectionNode = function(t, e) {
  var n = e, i = n + 1;
  if (i < this._pts.length) {
    var o = this._pts[i];
    t.equals2D(o) && (n = i);
  }
  var s = this._nodeList.add(t, n);
  return s;
};
It.prototype.addIntersections = function(t, e, n) {
  for (var i = this, o = 0; o < t.getIntersectionNum(); o++)
    i.addIntersection(t, e, n, o);
};
It.prototype.interfaces_ = function() {
  return [so];
};
It.prototype.getClass = function() {
  return It;
};
It.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new b();
    return It.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var n = arguments[0], i = arguments[1], o = n.iterator(); o.hasNext(); ) {
      var s = o.next();
      s.getNodeList().addSplitEdges(i);
    }
};
var F = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new v(), this.p1 = new v();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new v(t.p0), this.p1 = new v(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], n = arguments[1], i = arguments[2], o = arguments[3];
    this.p0 = new v(e, n), this.p1 = new v(i, o);
  }
}, _u = { serialVersionUID: { configurable: !0 } };
F.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
F.prototype.orientationIndex = function() {
  if (arguments[0] instanceof F) {
    var t = arguments[0], e = O.orientationIndex(this.p0, this.p1, t.p0), n = O.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && n >= 0 || e <= 0 && n <= 0 ? Math.max(e, n) : 0;
  } else if (arguments[0] instanceof v) {
    var i = arguments[0];
    return O.orientationIndex(this.p0, this.p1, i);
  }
};
F.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
F.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
F.prototype.equals = function(t) {
  if (!(t instanceof F))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
F.prototype.intersection = function(t) {
  var e = new Vr();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
F.prototype.project = function() {
  if (arguments[0] instanceof v) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new v(t);
    var e = this.projectionFactor(t), n = new v();
    return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
  } else if (arguments[0] instanceof F) {
    var i = arguments[0], o = this.projectionFactor(i.p0), s = this.projectionFactor(i.p1);
    if (o >= 1 && s >= 1 || o <= 0 && s <= 0)
      return null;
    var a = this.project(i.p0);
    o < 0 && (a = this.p0), o > 1 && (a = this.p1);
    var u = this.project(i.p1);
    return s < 0 && (u = this.p0), s > 1 && (u = this.p1), new F(a, u);
  }
};
F.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
F.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
F.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
F.prototype.distancePerpendicular = function(t) {
  return O.distancePointLinePerpendicular(t, this.p0, this.p1);
};
F.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
F.prototype.midPoint = function() {
  return F.midPoint(this.p0, this.p1);
};
F.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = e * e + n * n;
  if (i <= 0)
    return z.NaN;
  var o = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / i;
  return o;
};
F.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var n = new Array(2).fill(null), i = z.MAX_VALUE, o = null, s = this.closestPoint(t.p0);
  i = s.distance(t.p0), n[0] = s, n[1] = t.p0;
  var a = this.closestPoint(t.p1);
  o = a.distance(t.p1), o < i && (i = o, n[0] = a, n[1] = t.p1);
  var u = t.closestPoint(this.p0);
  o = u.distance(this.p0), o < i && (i = o, n[0] = this.p0, n[1] = u);
  var l = t.closestPoint(this.p1);
  return o = l.distance(this.p1), o < i && (i = o, n[0] = this.p1, n[1] = l), n;
};
F.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var n = this.p0.distance(t), i = this.p1.distance(t);
  return n < i ? this.p0 : this.p1;
};
F.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
F.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
F.prototype.compareTo = function(t) {
  var e = t, n = this.p0.compareTo(e.p0);
  return n !== 0 ? n : this.p1.compareTo(e.p1);
};
F.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
F.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
F.prototype.lineIntersection = function(t) {
  try {
    var e = Ve.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (n) {
    if (!(n instanceof ki))
      throw n;
  } finally {
  }
  return null;
};
F.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
F.prototype.pointAlongOffset = function(t, e) {
  var n = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), o = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y, a = Math.sqrt(o * o + s * s), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * o / a, l = e * s / a;
  }
  var c = n - l, f = i + u, h = new v(c, f);
  return h;
};
F.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
  }
};
F.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || z.isNaN(e)) && (e = 1), e;
};
F.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
F.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
F.prototype.distance = function() {
  if (arguments[0] instanceof F) {
    var t = arguments[0];
    return O.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof v) {
    var e = arguments[0];
    return O.distancePointLine(e, this.p0, this.p1);
  }
};
F.prototype.pointAlong = function(t) {
  var e = new v();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
F.prototype.hashCode = function() {
  var t = z.doubleToLongBits(this.p0.x);
  t ^= z.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = z.doubleToLongBits(this.p1.x);
  n ^= z.doubleToLongBits(this.p1.y) * 31;
  var i = Math.trunc(n) ^ Math.trunc(n >> 32);
  return e ^ i;
};
F.prototype.interfaces_ = function() {
  return [Ge, ke];
};
F.prototype.getClass = function() {
  return F;
};
F.midPoint = function(t, e) {
  return new v((t.x + e.x) / 2, (t.y + e.y) / 2);
};
_u.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(F, _u);
var ao = function() {
  this.tempEnv1 = new T(), this.tempEnv2 = new T(), this._overlapSeg1 = new F(), this._overlapSeg2 = new F();
};
ao.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
ao.prototype.interfaces_ = function() {
  return [];
};
ao.prototype.getClass = function() {
  return ao;
};
var ye = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
  this._pts = t, this._start = e, this._end = n, this._context = i;
};
ye.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
ye.prototype.computeSelect = function(t, e, n, i) {
  var o = this._pts[e], s = this._pts[n];
  if (i.tempEnv1.init(o, s), n - e === 1)
    return i.select(this, e), null;
  if (!t.intersects(i.tempEnv1))
    return null;
  var a = Math.trunc((e + n) / 2);
  e < a && this.computeSelect(t, e, a, i), a < n && this.computeSelect(t, a, n, i);
};
ye.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), n = 0, i = this._start; i <= this._end; i++)
    e[n++] = t._pts[i];
  return e;
};
ye.prototype.computeOverlaps = function(t, e) {
  this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e);
};
ye.prototype.setId = function(t) {
  this._id = t;
};
ye.prototype.select = function(t, e) {
  this.computeSelect(t, this._start, this._end, e);
};
ye.prototype.getEnvelope = function() {
  if (this._env === null) {
    var t = this._pts[this._start], e = this._pts[this._end];
    this._env = new T(t, e);
  }
  return this._env;
};
ye.prototype.getEndIndex = function() {
  return this._end;
};
ye.prototype.getStartIndex = function() {
  return this._start;
};
ye.prototype.getContext = function() {
  return this._context;
};
ye.prototype.getId = function() {
  return this._id;
};
ye.prototype.computeOverlapsInternal = function(t, e, n, i, o, s) {
  var a = this._pts[t], u = this._pts[e], l = n._pts[i], c = n._pts[o];
  if (e - t === 1 && o - i === 1)
    return s.overlap(this, t, n, i), null;
  if (s.tempEnv1.init(a, u), s.tempEnv2.init(l, c), !s.tempEnv1.intersects(s.tempEnv2))
    return null;
  var f = Math.trunc((t + e) / 2), h = Math.trunc((i + o) / 2);
  t < f && (i < h && this.computeOverlapsInternal(t, f, n, i, h, s), h < o && this.computeOverlapsInternal(t, f, n, h, o, s)), f < e && (i < h && this.computeOverlapsInternal(f, e, n, i, h, s), h < o && this.computeOverlapsInternal(f, e, n, h, o, s));
};
ye.prototype.interfaces_ = function() {
  return [];
};
ye.prototype.getClass = function() {
  return ye;
};
var on = function() {
};
on.prototype.interfaces_ = function() {
  return [];
};
on.prototype.getClass = function() {
  return on;
};
on.getChainStartIndices = function(t) {
  var e = 0, n = new b();
  n.add(new sn(e));
  do {
    var i = on.findChainEnd(t, e);
    n.add(new sn(i)), e = i;
  } while (e < t.length - 1);
  var o = on.toIntArray(n);
  return o;
};
on.findChainEnd = function(t, e) {
  for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]); )
    n++;
  if (n >= t.length - 1)
    return t.length - 1;
  for (var i = it.quadrant(t[n], t[n + 1]), o = e + 1; o < t.length; ) {
    if (!t[o - 1].equals2D(t[o])) {
      var s = it.quadrant(t[o - 1], t[o]);
      if (s !== i)
        break;
    }
    o++;
  }
  return o - 1;
};
on.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return on.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], n = arguments[1], i = new b(), o = on.getChainStartIndices(e), s = 0; s < o.length - 1; s++) {
      var a = new ye(e, o[s], o[s + 1], n);
      i.add(a);
    }
    return i;
  }
};
on.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var Pr = function() {
};
Pr.prototype.computeNodes = function(t) {
};
Pr.prototype.getNodedSubstrings = function() {
};
Pr.prototype.interfaces_ = function() {
  return [];
};
Pr.prototype.getClass = function() {
  return Pr;
};
var uo = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
uo.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
uo.prototype.interfaces_ = function() {
  return [Pr];
};
uo.prototype.getClass = function() {
  return uo;
};
var Xs = function(r) {
  function t(n) {
    n ? r.call(this, n) : r.call(this), this._monoChains = new b(), this._index = new mu(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return It.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(i) {
    for (var o = this, s = on.getChains(i.getCoordinates(), i), a = s.iterator(); a.hasNext(); ) {
      var u = a.next();
      u.setId(o._idCounter++), o._index.insert(u.getEnvelope(), u), o._monoChains.add(u);
    }
  }, t.prototype.computeNodes = function(i) {
    var o = this;
    this._nodedSegStrings = i;
    for (var s = i.iterator(); s.hasNext(); )
      o.add(s.next());
    this.intersectChains();
  }, t.prototype.intersectChains = function() {
    for (var i = this, o = new ba(this._segInt), s = this._monoChains.iterator(); s.hasNext(); )
      for (var a = s.next(), u = i._index.query(a.getEnvelope()), l = u.iterator(); l.hasNext(); ) {
        var c = l.next();
        if (c.getId() > a.getId() && (a.computeOverlaps(c, o), i._nOverlaps++), i._segInt.isDone())
          return null;
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.SegmentOverlapAction.get = function() {
    return ba;
  }, Object.defineProperties(t, e), t;
}(uo), ba = function(r) {
  function t() {
    r.call(this), this._si = null;
    var e = arguments[0];
    this._si = e;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.overlap = function() {
    if (arguments.length === 4) {
      var n = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = n.getContext(), u = o.getContext();
      this._si.processIntersections(a, i, u, s);
    } else
      return r.prototype.overlap.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ao), Z = function r() {
  if (this._quadrantSegments = r.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = r.CAP_ROUND, this._joinStyle = r.JOIN_ROUND, this._mitreLimit = r.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = r.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (arguments.length === 2) {
      var e = arguments[0], n = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(n);
    } else if (arguments.length === 4) {
      var i = arguments[0], o = arguments[1], s = arguments[2], a = arguments[3];
      this.setQuadrantSegments(i), this.setEndCapStyle(o), this.setJoinStyle(s), this.setMitreLimit(a);
    }
  }
}, nr = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
Z.prototype.getEndCapStyle = function() {
  return this._endCapStyle;
};
Z.prototype.isSingleSided = function() {
  return this._isSingleSided;
};
Z.prototype.setQuadrantSegments = function(t) {
  this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = Z.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = Z.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== Z.JOIN_ROUND && (this._quadrantSegments = Z.DEFAULT_QUADRANT_SEGMENTS);
};
Z.prototype.getJoinStyle = function() {
  return this._joinStyle;
};
Z.prototype.setJoinStyle = function(t) {
  this._joinStyle = t;
};
Z.prototype.setSimplifyFactor = function(t) {
  this._simplifyFactor = t < 0 ? 0 : t;
};
Z.prototype.getSimplifyFactor = function() {
  return this._simplifyFactor;
};
Z.prototype.getQuadrantSegments = function() {
  return this._quadrantSegments;
};
Z.prototype.setEndCapStyle = function(t) {
  this._endCapStyle = t;
};
Z.prototype.getMitreLimit = function() {
  return this._mitreLimit;
};
Z.prototype.setMitreLimit = function(t) {
  this._mitreLimit = t;
};
Z.prototype.setSingleSided = function(t) {
  this._isSingleSided = t;
};
Z.prototype.interfaces_ = function() {
  return [];
};
Z.prototype.getClass = function() {
  return Z;
};
Z.bufferDistanceError = function(t) {
  var e = Math.PI / 2 / t;
  return 1 - Math.cos(e / 2);
};
nr.CAP_ROUND.get = function() {
  return 1;
};
nr.CAP_FLAT.get = function() {
  return 2;
};
nr.CAP_SQUARE.get = function() {
  return 3;
};
nr.JOIN_ROUND.get = function() {
  return 1;
};
nr.JOIN_MITRE.get = function() {
  return 2;
};
nr.JOIN_BEVEL.get = function() {
  return 3;
};
nr.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
nr.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
nr.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(Z, nr);
var dt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = O.COUNTERCLOCKWISE, this._inputLine = t || null;
}, _o = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
dt.prototype.isDeletable = function(t, e, n, i) {
  var o = this._inputLine[t], s = this._inputLine[e], a = this._inputLine[n];
  return !this.isConcave(o, s, a) || !this.isShallow(o, s, a, i) ? !1 : this.isShallowSampled(o, s, t, n, i);
};
dt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, n = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(n), o = !1; i < this._inputLine.length; ) {
    var s = !1;
    t.isDeletable(e, n, i, t._distanceTol) && (t._isDeleted[n] = dt.DELETE, s = !0, o = !0), s ? e = i : e = n, n = t.findNextNonDeletedIndex(e), i = t.findNextNonDeletedIndex(n);
  }
  return o;
};
dt.prototype.isShallowConcavity = function(t, e, n, i) {
  var o = O.computeOrientation(t, e, n), s = o === this._angleOrientation;
  if (!s)
    return !1;
  var a = O.distancePointLine(e, t, n);
  return a < i;
};
dt.prototype.isShallowSampled = function(t, e, n, i, o) {
  var s = this, a = Math.trunc((i - n) / dt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = n; u < i; u += a)
    if (!s.isShallow(t, e, s._inputLine[u], o))
      return !1;
  return !0;
};
dt.prototype.isConcave = function(t, e, n) {
  var i = O.computeOrientation(t, e, n), o = i === this._angleOrientation;
  return o;
};
dt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = O.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var n = !1;
  do
    n = e.deleteShallowConcavities();
  while (n);
  return this.collapseLine();
};
dt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === dt.DELETE; )
    e++;
  return e;
};
dt.prototype.isShallow = function(t, e, n, i) {
  var o = O.distancePointLine(e, t, n);
  return o < i;
};
dt.prototype.collapseLine = function() {
  for (var t = this, e = new vo(), n = 0; n < this._inputLine.length; n++)
    t._isDeleted[n] !== dt.DELETE && e.add(t._inputLine[n]);
  return e.toCoordinateArray();
};
dt.prototype.interfaces_ = function() {
  return [];
};
dt.prototype.getClass = function() {
  return dt;
};
dt.simplify = function(t, e) {
  var n = new dt(t);
  return n.simplify(e);
};
_o.INIT.get = function() {
  return 0;
};
_o.DELETE.get = function() {
  return 1;
};
_o.KEEP.get = function() {
  return 1;
};
_o.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(dt, _o);
var we = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new b();
}, Eu = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
we.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(we.COORDINATE_ARRAY_TYPE);
  return t;
};
we.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
we.prototype.addPt = function(t) {
  var e = new v(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
we.prototype.revere = function() {
};
we.prototype.addPts = function(t, e) {
  var n = this;
  if (e)
    for (var i = 0; i < t.length; i++)
      n.addPt(t[i]);
  else
    for (var o = t.length - 1; o >= 0; o--)
      n.addPt(t[o]);
};
we.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), n = t.distance(e);
  return n < this._minimimVertexDistance;
};
we.prototype.toString = function() {
  var t = new H(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
we.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new v(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
  if (t.equals(e))
    return null;
  this._ptList.add(t);
};
we.prototype.setMinimumVertexDistance = function(t) {
  this._minimimVertexDistance = t;
};
we.prototype.interfaces_ = function() {
  return [];
};
we.prototype.getClass = function() {
  return we;
};
Eu.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(we, Eu);
var K = function() {
}, fi = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
K.prototype.interfaces_ = function() {
  return [];
};
K.prototype.getClass = function() {
  return K;
};
K.toDegrees = function(t) {
  return t * 180 / Math.PI;
};
K.normalize = function(t) {
  for (; t > Math.PI; )
    t -= K.PI_TIMES_2;
  for (; t <= -Math.PI; )
    t += K.PI_TIMES_2;
  return t;
};
K.angle = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Math.atan2(t.y, t.x);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = n.x - e.x, o = n.y - e.y;
    return Math.atan2(o, i);
  }
};
K.isAcute = function(t, e, n) {
  var i = t.x - e.x, o = t.y - e.y, s = n.x - e.x, a = n.y - e.y, u = i * s + o * a;
  return u > 0;
};
K.isObtuse = function(t, e, n) {
  var i = t.x - e.x, o = t.y - e.y, s = n.x - e.x, a = n.y - e.y, u = i * s + o * a;
  return u < 0;
};
K.interiorAngle = function(t, e, n) {
  var i = K.angle(e, t), o = K.angle(e, n);
  return Math.abs(o - i);
};
K.normalizePositive = function(t) {
  if (t < 0) {
    for (; t < 0; )
      t += K.PI_TIMES_2;
    t >= K.PI_TIMES_2 && (t = 0);
  } else {
    for (; t >= K.PI_TIMES_2; )
      t -= K.PI_TIMES_2;
    t < 0 && (t = 0);
  }
  return t;
};
K.angleBetween = function(t, e, n) {
  var i = K.angle(e, t), o = K.angle(e, n);
  return K.diff(i, o);
};
K.diff = function(t, e) {
  var n = null;
  return t < e ? n = e - t : n = t - e, n > Math.PI && (n = 2 * Math.PI - n), n;
};
K.toRadians = function(t) {
  return t * Math.PI / 180;
};
K.getTurn = function(t, e) {
  var n = Math.sin(e - t);
  return n > 0 ? K.COUNTERCLOCKWISE : n < 0 ? K.CLOCKWISE : K.NONE;
};
K.angleBetweenOriented = function(t, e, n) {
  var i = K.angle(e, t), o = K.angle(e, n), s = o - i;
  return s <= -Math.PI ? s + K.PI_TIMES_2 : s > Math.PI ? s - K.PI_TIMES_2 : s;
};
fi.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
fi.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
fi.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
fi.COUNTERCLOCKWISE.get = function() {
  return O.COUNTERCLOCKWISE;
};
fi.CLOCKWISE.get = function() {
  return O.CLOCKWISE;
};
fi.NONE.get = function() {
  return O.COLLINEAR;
};
Object.defineProperties(K, fi);
var lt = function r() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new F(), this._seg1 = new F(), this._offset0 = new F(), this._offset1 = new F(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new Vr(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === Z.JOIN_ROUND && (this._closingSegLengthFactor = r.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
}, Eo = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
lt.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var n = O.computeOrientation(this._s0, this._s1, this._s2), i = n === O.CLOCKWISE && this._side === S.LEFT || n === O.COUNTERCLOCKWISE && this._side === S.RIGHT;
  n === 0 ? this.addCollinear(e) : i ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
};
lt.prototype.addLineEndCap = function(t, e) {
  var n = new F(t, e), i = new F();
  this.computeOffsetSegment(n, S.LEFT, this._distance, i);
  var o = new F();
  this.computeOffsetSegment(n, S.RIGHT, this._distance, o);
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s);
  switch (this._bufParams.getEndCapStyle()) {
    case Z.CAP_ROUND:
      this._segList.addPt(i.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, O.CLOCKWISE, this._distance), this._segList.addPt(o.p1);
      break;
    case Z.CAP_FLAT:
      this._segList.addPt(i.p1), this._segList.addPt(o.p1);
      break;
    case Z.CAP_SQUARE:
      var l = new v();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new v(i.p1.x + l.x, i.p1.y + l.y), f = new v(o.p1.x + l.x, o.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(f);
      break;
  }
};
lt.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
lt.prototype.addMitreJoin = function(t, e, n, i) {
  var o = !0, s = null;
  try {
    s = Ve.intersection(e.p0, e.p1, n.p0, n.p1);
    var a = i <= 0 ? 1 : s.distance(t) / Math.abs(i);
    a > this._bufParams.getMitreLimit() && (o = !1);
  } catch (u) {
    if (u instanceof ki)
      s = new v(0, 0), o = !1;
    else
      throw u;
  } finally {
  }
  o ? this._segList.addPt(s) : this.addLimitedMitreJoin(e, n, i, this._bufParams.getMitreLimit());
};
lt.prototype.addFilletCorner = function(t, e, n, i, o) {
  var s = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, s), l = n.x - t.x, c = n.y - t.y, f = Math.atan2(c, l);
  i === O.CLOCKWISE ? u <= f && (u += 2 * Math.PI) : u >= f && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, f, i, o), this._segList.addPt(n);
};
lt.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * lt.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === Z.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === Z.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
lt.prototype.createSquare = function(t) {
  this._segList.addPt(new v(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new v(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
lt.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
lt.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
lt.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
lt.prototype.initSideSegments = function(t, e, n) {
  this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
};
lt.prototype.addLimitedMitreJoin = function(t, e, n, i) {
  var o = this._seg0.p1, s = K.angle(o, this._seg0.p0), a = K.angleBetweenOriented(this._seg0.p0, o, this._seg1.p1), u = a / 2, l = K.normalize(s + u), c = K.normalize(l + Math.PI), f = i * n, h = f * Math.abs(Math.sin(u)), g = n - h, p = o.x + f * Math.cos(c), y = o.y + f * Math.sin(c), d = new v(p, y), m = new F(o, d), I = m.pointAlongOffset(1, g), C = m.pointAlongOffset(1, -g);
  this._side === S.LEFT ? (this._segList.addPt(I), this._segList.addPt(C)) : (this._segList.addPt(C), this._segList.addPt(I));
};
lt.prototype.computeOffsetSegment = function(t, e, n, i) {
  var o = e === S.LEFT ? 1 : -1, s = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(s * s + a * a), l = o * n * s / u, c = o * n * a / u;
  i.p0.x = t.p0.x - c, i.p0.y = t.p0.y + l, i.p1.x = t.p1.x - c, i.p1.y = t.p1.y + l;
};
lt.prototype.addFilletArc = function(t, e, n, i, o) {
  var s = this, a = i === O.CLOCKWISE ? -1 : 1, u = Math.abs(e - n), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, f = u / l, h = c, g = new v(); h < u; ) {
    var p = e + a * h;
    g.x = t.x + o * Math.cos(p), g.y = t.y + o * Math.sin(p), s._segList.addPt(g), h += f;
  }
};
lt.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * lt.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
    this._segList.addPt(this._offset0.p1);
  else {
    if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
      var n = new v((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(n);
      var i = new v((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(i);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
lt.prototype.createCircle = function(t) {
  var e = new v(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
lt.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
lt.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new we(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * lt.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
lt.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === Z.JOIN_BEVEL || this._bufParams.getJoinStyle() === Z.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, O.CLOCKWISE, this._distance));
};
lt.prototype.closeRing = function() {
  this._segList.closeRing();
};
lt.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
lt.prototype.interfaces_ = function() {
  return [];
};
lt.prototype.getClass = function() {
  return lt;
};
Eo.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
Eo.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
Eo.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
Eo.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(lt, Eo);
var le = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
le.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var n = e < 0, i = Math.abs(e), o = this.getSegGen(i);
  t.length <= 1 ? this.computePointCurve(t[0], o) : this.computeOffsetCurve(t, n, o);
  var s = o.getCoordinates();
  return n && W.reverse(s), s;
};
le.prototype.computeSingleSidedBufferCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    n.addSegments(t, !0);
    var o = dt.simplify(t, -i), s = o.length - 1;
    n.initSideSegments(o[s], o[s - 1], S.LEFT), n.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      n.addNextSegment(o[a], !0);
  } else {
    n.addSegments(t, !1);
    var u = dt.simplify(t, i), l = u.length - 1;
    n.initSideSegments(u[0], u[1], S.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment(), n.closeRing();
};
le.prototype.computeRingBufferCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  e === S.RIGHT && (i = -i);
  var o = dt.simplify(t, i), s = o.length - 1;
  n.initSideSegments(o[s - 1], o[0], e);
  for (var a = 1; a <= s; a++) {
    var u = a !== 1;
    n.addNextSegment(o[a], u);
  }
  n.closeRing();
};
le.prototype.computeLineBufferCurve = function(t, e) {
  var n = this.simplifyTolerance(this._distance), i = dt.simplify(t, n), o = i.length - 1;
  e.initSideSegments(i[0], i[1], S.LEFT);
  for (var s = 2; s <= o; s++)
    e.addNextSegment(i[s], !0);
  e.addLastSegment(), e.addLineEndCap(i[o - 1], i[o]);
  var a = dt.simplify(t, -n), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], S.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
le.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case Z.CAP_ROUND:
      e.createCircle(t);
      break;
    case Z.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
le.prototype.getLineCurve = function(t, e) {
  if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || e === 0)
    return null;
  var n = Math.abs(e), i = this.getSegGen(n);
  if (t.length <= 1)
    this.computePointCurve(t[0], i);
  else if (this._bufParams.isSingleSided()) {
    var o = e < 0;
    this.computeSingleSidedBufferCurve(t, o, i);
  } else
    this.computeLineBufferCurve(t, i);
  var s = i.getCoordinates();
  return s;
};
le.prototype.getBufferParameters = function() {
  return this._bufParams;
};
le.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
le.prototype.getRingCurve = function(t, e, n) {
  if (this._distance = n, t.length <= 2)
    return this.getLineCurve(t, n);
  if (n === 0)
    return le.copyCoordinates(t);
  var i = this.getSegGen(n);
  return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
};
le.prototype.computeOffsetCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    var o = dt.simplify(t, -i), s = o.length - 1;
    n.initSideSegments(o[s], o[s - 1], S.LEFT), n.addFirstSegment();
    for (var a = s - 2; a >= 0; a--)
      n.addNextSegment(o[a], !0);
  } else {
    var u = dt.simplify(t, i), l = u.length - 1;
    n.initSideSegments(u[0], u[1], S.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment();
};
le.prototype.getSegGen = function(t) {
  return new lt(this._precisionModel, this._bufParams, t);
};
le.prototype.interfaces_ = function() {
  return [];
};
le.prototype.getClass = function() {
  return le;
};
le.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)
    e[n] = new v(t[n]);
  return e;
};
var $r = function() {
  this._subgraphs = null, this._seg = new F(), this._cga = new O();
  var t = arguments[0];
  this._subgraphs = t;
}, Iu = { DepthSegment: { configurable: !0 } };
$r.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = new b(), i = this._subgraphs.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getEnvelope();
      e.y < s.getMinY() || e.y > s.getMaxY() || t.findStabbedSegments(e, o.getDirectedEdges(), n);
    }
    return n;
  } else if (arguments.length === 3) {
    if (k(arguments[2], Ue) && arguments[0] instanceof v && arguments[1] instanceof Ps)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), f = 0; f < c.length - 1; f++) {
        t._seg.p0 = c[f], t._seg.p1 = c[f + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var h = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(h < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && O.computeOrientation(t._seg.p0, t._seg.p1, a) !== O.RIGHT) {
          var g = u.getDepth(S.LEFT);
          t._seg.p0.equals(c[f]) || (g = u.getDepth(S.RIGHT));
          var p = new Rr(t._seg, g);
          l.add(p);
        }
      }
    else if (k(arguments[2], Ue) && arguments[0] instanceof v && k(arguments[1], Ue))
      for (var y = arguments[0], d = arguments[1], m = arguments[2], I = d.iterator(); I.hasNext(); ) {
        var C = I.next();
        C.isForward() && t.findStabbedSegments(y, C, m);
      }
  }
};
$r.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var n = He.min(e);
  return n._leftDepth;
};
$r.prototype.interfaces_ = function() {
  return [];
};
$r.prototype.getClass = function() {
  return $r;
};
Iu.DepthSegment.get = function() {
  return Rr;
};
Object.defineProperties($r, Iu);
var Rr = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new F(t), this._leftDepth = e;
};
Rr.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var n = this._upwardSeg.orientationIndex(e._upwardSeg);
  return n !== 0 || (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), n !== 0) ? n : this._upwardSeg.compareTo(e._upwardSeg);
};
Rr.prototype.compareX = function(t, e) {
  var n = t.p0.compareTo(e.p0);
  return n !== 0 ? n : t.p1.compareTo(e.p1);
};
Rr.prototype.toString = function() {
  return this._upwardSeg.toString();
};
Rr.prototype.interfaces_ = function() {
  return [Ge];
};
Rr.prototype.getClass = function() {
  return Rr;
};
var tt = function(t, e, n) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = n || null;
};
tt.prototype.area = function() {
  return tt.area(this.p0, this.p1, this.p2);
};
tt.prototype.signedArea = function() {
  return tt.signedArea(this.p0, this.p1, this.p2);
};
tt.prototype.interpolateZ = function(t) {
  if (t === null)
    throw new ct("Supplied point is null.");
  return tt.interpolateZ(t, this.p0, this.p1, this.p2);
};
tt.prototype.longestSideLength = function() {
  return tt.longestSideLength(this.p0, this.p1, this.p2);
};
tt.prototype.isAcute = function() {
  return tt.isAcute(this.p0, this.p1, this.p2);
};
tt.prototype.circumcentre = function() {
  return tt.circumcentre(this.p0, this.p1, this.p2);
};
tt.prototype.area3D = function() {
  return tt.area3D(this.p0, this.p1, this.p2);
};
tt.prototype.centroid = function() {
  return tt.centroid(this.p0, this.p1, this.p2);
};
tt.prototype.inCentre = function() {
  return tt.inCentre(this.p0, this.p1, this.p2);
};
tt.prototype.interfaces_ = function() {
  return [];
};
tt.prototype.getClass = function() {
  return tt;
};
tt.area = function(t, e, n) {
  return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
};
tt.signedArea = function(t, e, n) {
  return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
};
tt.det = function(t, e, n, i) {
  return t * i - e * n;
};
tt.interpolateZ = function(t, e, n, i) {
  var o = e.x, s = e.y, a = n.x - o, u = i.x - o, l = n.y - s, c = i.y - s, f = a * c - u * l, h = t.x - o, g = t.y - s, p = (c * h - u * g) / f, y = (-l * h + a * g) / f, d = e.z + p * (n.z - e.z) + y * (i.z - e.z);
  return d;
};
tt.longestSideLength = function(t, e, n) {
  var i = t.distance(e), o = e.distance(n), s = n.distance(t), a = i;
  return o > a && (a = o), s > a && (a = s), a;
};
tt.isAcute = function(t, e, n) {
  return !(!K.isAcute(t, e, n) || !K.isAcute(e, n, t) || !K.isAcute(n, t, e));
};
tt.circumcentre = function(t, e, n) {
  var i = n.x, o = n.y, s = t.x - i, a = t.y - o, u = e.x - i, l = e.y - o, c = 2 * tt.det(s, a, u, l), f = tt.det(a, s * s + a * a, l, u * u + l * l), h = tt.det(s, s * s + a * a, u, u * u + l * l), g = i - f / c, p = o + h / c;
  return new v(g, p);
};
tt.perpendicularBisector = function(t, e) {
  var n = e.x - t.x, i = e.y - t.y, o = new Ve(t.x + n / 2, t.y + i / 2, 1), s = new Ve(t.x - i + n / 2, t.y + n + i / 2, 1);
  return new Ve(o, s);
};
tt.angleBisector = function(t, e, n) {
  var i = e.distance(t), o = e.distance(n), s = i / (i + o), a = n.x - t.x, u = n.y - t.y, l = new v(t.x + s * a, t.y + s * u);
  return l;
};
tt.area3D = function(t, e, n) {
  var i = e.x - t.x, o = e.y - t.y, s = e.z - t.z, a = n.x - t.x, u = n.y - t.y, l = n.z - t.z, c = o * l - s * u, f = s * a - i * l, h = i * u - o * a, g = c * c + f * f + h * h, p = Math.sqrt(g) / 2;
  return p;
};
tt.centroid = function(t, e, n) {
  var i = (t.x + e.x + n.x) / 3, o = (t.y + e.y + n.y) / 3;
  return new v(i, o);
};
tt.inCentre = function(t, e, n) {
  var i = e.distance(n), o = t.distance(n), s = t.distance(e), a = i + o + s, u = (i * t.x + o * e.x + s * n.x) / a, l = (i * t.y + o * e.y + s * n.y) / a;
  return new v(u, l);
};
var Fe = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new b();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = n;
};
Fe.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, _.EXTERIOR, _.INTERIOR);
};
Fe.prototype.addPolygon = function(t) {
  var e = this, n = this._distance, i = S.LEFT;
  this._distance < 0 && (n = -this._distance, i = S.RIGHT);
  var o = t.getExteriorRing(), s = W.removeRepeatedPoints(o.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(o, this._distance) || this._distance <= 0 && s.length < 3)
    return null;
  this.addPolygonRing(s, n, i, _.EXTERIOR, _.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = W.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, n, S.opposite(i), _.INTERIOR, _.EXTERIOR);
  }
};
Fe.prototype.isTriangleErodedCompletely = function(t, e) {
  var n = new tt(t[0], t[1], t[2]), i = n.inCentre(), o = O.distancePointLine(i, n.p0, n.p1);
  return o < Math.abs(e);
};
Fe.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = W.removeRepeatedPoints(t.getCoordinates()), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, _.EXTERIOR, _.INTERIOR);
};
Fe.prototype.addCurve = function(t, e, n) {
  if (t === null || t.length < 2)
    return null;
  var i = new It(t, new et(0, _.BOUNDARY, e, n));
  this._curveList.add(i);
};
Fe.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
Fe.prototype.addPolygonRing = function(t, e, n, i, o) {
  if (e === 0 && t.length < Ln.MINIMUM_VALID_SIZE)
    return null;
  var s = i, a = o;
  t.length >= Ln.MINIMUM_VALID_SIZE && O.isCCW(t) && (s = o, a = i, n = S.opposite(n));
  var u = this._curveBuilder.getRingCurve(t, n, e);
  this.addCurve(u, s, a);
};
Fe.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof Rt ? this.addPolygon(t) : t instanceof pt ? this.addLineString(t) : t instanceof de ? this.addPoint(t) : t instanceof xi ? this.addCollection(t) : t instanceof br ? this.addCollection(t) : t instanceof xn ? this.addCollection(t) : t instanceof ne && this.addCollection(t);
};
Fe.prototype.isErodedCompletely = function(t, e) {
  var n = t.getCoordinates();
  if (n.length < 4)
    return e < 0;
  if (n.length === 4)
    return this.isTriangleErodedCompletely(n, e);
  var i = t.getEnvelopeInternal(), o = Math.min(i.getHeight(), i.getWidth());
  return e < 0 && 2 * Math.abs(e) > o;
};
Fe.prototype.addCollection = function(t) {
  for (var e = this, n = 0; n < t.getNumGeometries(); n++) {
    var i = t.getGeometryN(n);
    e.add(i);
  }
};
Fe.prototype.interfaces_ = function() {
  return [];
};
Fe.prototype.getClass = function() {
  return Fe;
};
var bi = function() {
};
bi.prototype.locate = function(t) {
};
bi.prototype.interfaces_ = function() {
  return [];
};
bi.prototype.getClass = function() {
  return bi;
};
var Sn = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
Sn.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, Sn.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new Vi();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof ne ? (this._subcollectionIterator = new Sn(t), this._subcollectionIterator.next()) : t;
};
Sn.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
Sn.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
Sn.prototype.interfaces_ = function() {
  return [zi];
};
Sn.prototype.getClass = function() {
  return Sn;
};
Sn.isAtomic = function(t) {
  return !(t instanceof ne);
};
var Ce = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
Ce.prototype.locate = function(t) {
  return Ce.locate(t, this._geom);
};
Ce.prototype.interfaces_ = function() {
  return [bi];
};
Ce.prototype.getClass = function() {
  return Ce;
};
Ce.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? O.isPointInRing(t, e.getCoordinates()) : !1;
};
Ce.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var n = e.getExteriorRing();
  if (!Ce.isPointInRing(t, n))
    return !1;
  for (var i = 0; i < e.getNumInteriorRing(); i++) {
    var o = e.getInteriorRingN(i);
    if (Ce.isPointInRing(t, o))
      return !1;
  }
  return !0;
};
Ce.containsPoint = function(t, e) {
  if (e instanceof Rt)
    return Ce.containsPointInPolygon(t, e);
  if (e instanceof ne)
    for (var n = new Sn(e); n.hasNext(); ) {
      var i = n.next();
      if (i !== e && Ce.containsPoint(t, i))
        return !0;
    }
  return !1;
};
Ce.locate = function(t, e) {
  return e.isEmpty() ? _.EXTERIOR : Ce.containsPoint(t, e) ? _.INTERIOR : _.EXTERIOR;
};
var Qt = function() {
  this._edgeMap = new jt(), this._edgeList = null, this._ptInAreaLocation = [_.NONE, _.NONE];
};
Qt.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), n = e - 1;
  return e === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
};
Qt.prototype.propagateSideLabels = function(t) {
  for (var e = _.NONE, n = this.iterator(); n.hasNext(); ) {
    var i = n.next(), o = i.getLabel();
    o.isArea(t) && o.getLocation(t, S.LEFT) !== _.NONE && (e = o.getLocation(t, S.LEFT));
  }
  if (e === _.NONE)
    return null;
  for (var s = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, S.ON) === _.NONE && l.setLocation(t, S.ON, s), l.isArea(t)) {
      var c = l.getLocation(t, S.LEFT), f = l.getLocation(t, S.RIGHT);
      if (f !== _.NONE) {
        if (f !== s)
          throw new Jn("side location conflict", u.getCoordinate());
        c === _.NONE && U.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), s = c;
      } else
        U.isTrue(l.getLocation(t, S.LEFT) === _.NONE, "found single null side"), l.setLocation(t, S.RIGHT, s), l.setLocation(t, S.LEFT, s);
    }
  }
};
Qt.prototype.getCoordinate = function() {
  var t = this.iterator();
  if (!t.hasNext())
    return null;
  var e = t.next();
  return e.getCoordinate();
};
Qt.prototype.print = function(t) {
  Ut.out.println("EdgeEndStar:   " + this.getCoordinate());
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
Qt.prototype.isAreaLabelsConsistent = function(t) {
  return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
};
Qt.prototype.checkAreaLabelsConsistent = function(t) {
  var e = this.getEdges();
  if (e.size() <= 0)
    return !0;
  var n = e.size() - 1, i = e.get(n).getLabel(), o = i.getLocation(t, S.LEFT);
  U.isTrue(o !== _.NONE, "Found unlabelled area edge");
  for (var s = o, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    U.isTrue(l.isArea(t), "Found non-area edge");
    var c = l.getLocation(t, S.LEFT), f = l.getLocation(t, S.RIGHT);
    if (c === f || f !== s)
      return !1;
    s = c;
  }
  return !0;
};
Qt.prototype.findIndex = function(t) {
  var e = this;
  this.iterator();
  for (var n = 0; n < this._edgeList.size(); n++) {
    var i = e._edgeList.get(n);
    if (i === t)
      return n;
  }
  return -1;
};
Qt.prototype.iterator = function() {
  return this.getEdges().iterator();
};
Qt.prototype.getEdges = function() {
  return this._edgeList === null && (this._edgeList = new b(this._edgeMap.values())), this._edgeList;
};
Qt.prototype.getLocation = function(t, e, n) {
  return this._ptInAreaLocation[t] === _.NONE && (this._ptInAreaLocation[t] = Ce.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
};
Qt.prototype.toString = function() {
  var t = new yn();
  t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.append(n), t.append(`
`);
  }
  return t.toString();
};
Qt.prototype.computeEdgeEndLabels = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.computeLabel(t);
  }
};
Qt.prototype.computeLabelling = function(t) {
  var e = this;
  this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
  for (var n = [!1, !1], i = this.iterator(); i.hasNext(); )
    for (var o = i.next(), s = o.getLabel(), a = 0; a < 2; a++)
      s.isLine(a) && s.getLocation(a) === _.BOUNDARY && (n[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), f = 0; f < 2; f++)
      if (c.isAnyNull(f)) {
        var h = _.NONE;
        if (n[f])
          h = _.EXTERIOR;
        else {
          var g = l.getCoordinate();
          h = e.getLocation(f, g, t);
        }
        c.setAllLocationsIfNull(f, h);
      }
};
Qt.prototype.getDegree = function() {
  return this._edgeMap.size();
};
Qt.prototype.insertEdgeEnd = function(t, e) {
  this._edgeMap.put(t, e), this._edgeList = null;
};
Qt.prototype.interfaces_ = function() {
  return [];
};
Qt.prototype.getClass = function() {
  return Qt;
};
var Mc = function(r) {
  function t() {
    r.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.linkResultDirectedEdges = function() {
    var n = this;
    this.getResultAreaEdges();
    for (var i = null, o = null, s = this._SCANNING_FOR_INCOMING, a = 0; a < this._resultAreaEdgeList.size(); a++) {
      var u = n._resultAreaEdgeList.get(a), l = u.getSym();
      if (u.getLabel().isArea())
        switch (i === null && u.isInResult() && (i = u), s) {
          case n._SCANNING_FOR_INCOMING:
            if (!l.isInResult())
              continue;
            o = l, s = n._LINKING_TO_OUTGOING;
            break;
          case n._LINKING_TO_OUTGOING:
            if (!u.isInResult())
              continue;
            o.setNext(u), s = n._SCANNING_FOR_INCOMING;
            break;
        }
    }
    if (s === this._LINKING_TO_OUTGOING) {
      if (i === null)
        throw new Jn("no outgoing dirEdge found", this.getCoordinate());
      U.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), o.setNext(i);
    }
  }, t.prototype.insert = function(n) {
    var i = n;
    this.insertEdgeEnd(i, i);
  }, t.prototype.getRightmostEdge = function() {
    var n = this.getEdges(), i = n.size();
    if (i < 1)
      return null;
    var o = n.get(0);
    if (i === 1)
      return o;
    var s = n.get(i - 1), a = o.getQuadrant(), u = s.getQuadrant();
    return it.isNorthern(a) && it.isNorthern(u) ? o : !it.isNorthern(a) && !it.isNorthern(u) ? s : o.getDy() !== 0 ? o : s.getDy() !== 0 ? s : (U.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(n) {
    Ut.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      n.print("out "), o.print(n), n.println(), n.print("in "), o.getSym().print(n), n.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var n = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new b();
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next();
      (o.isInResult() || o.getSym().isInResult()) && n._resultAreaEdgeList.add(o);
    }
    return this._resultAreaEdgeList;
  }, t.prototype.updateLabelling = function(n) {
    for (var i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.setAllLocationsIfNull(0, n.getLocation(0)), s.setAllLocationsIfNull(1, n.getLocation(1));
    }
  }, t.prototype.linkAllDirectedEdges = function() {
    var n = this;
    this.getEdges();
    for (var i = null, o = null, s = this._edgeList.size() - 1; s >= 0; s--) {
      var a = n._edgeList.get(s), u = a.getSym();
      o === null && (o = u), i !== null && u.setNext(i), i = a;
    }
    o.setNext(i);
  }, t.prototype.computeDepths = function() {
    var n = this;
    if (arguments.length === 1) {
      var i = arguments[0], o = this.findIndex(i), s = i.getDepth(S.LEFT), a = i.getDepth(S.RIGHT), u = this.computeDepths(o + 1, this._edgeList.size(), s), l = this.computeDepths(0, o, u);
      if (l !== a)
        throw new Jn("depth mismatch at " + i.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], f = arguments[1], h = arguments[2], g = h, p = c; p < f; p++) {
        var y = n._edgeList.get(p);
        y.setEdgeDepths(S.RIGHT, g), g = y.getDepth(S.LEFT);
      }
      return g;
    }
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this.iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getLabel();
      o.merge(i.getSym().getLabel());
    }
  }, t.prototype.linkMinimalDirectedEdges = function(n) {
    for (var i = this, o = null, s = null, a = this._SCANNING_FOR_INCOMING, u = this._resultAreaEdgeList.size() - 1; u >= 0; u--) {
      var l = i._resultAreaEdgeList.get(u), c = l.getSym();
      switch (o === null && l.getEdgeRing() === n && (o = l), a) {
        case i._SCANNING_FOR_INCOMING:
          if (c.getEdgeRing() !== n)
            continue;
          s = c, a = i._LINKING_TO_OUTGOING;
          break;
        case i._LINKING_TO_OUTGOING:
          if (l.getEdgeRing() !== n)
            continue;
          s.setNextMin(l), a = i._SCANNING_FOR_INCOMING;
          break;
      }
    }
    a === this._LINKING_TO_OUTGOING && (U.isTrue(o !== null, "found null for first outgoing dirEdge"), U.isTrue(o.getEdgeRing() === n, "unable to link last incoming dirEdge"), s.setNextMin(o));
  }, t.prototype.getOutgoingDegree = function() {
    if (arguments.length === 0) {
      for (var n = 0, i = this.iterator(); i.hasNext(); ) {
        var o = i.next();
        o.isInResult() && n++;
      }
      return n;
    } else if (arguments.length === 1) {
      for (var s = arguments[0], a = 0, u = this.iterator(); u.hasNext(); ) {
        var l = u.next();
        l.getEdgeRing() === s && a++;
      }
      return a;
    }
  }, t.prototype.getLabel = function() {
    return this._label;
  }, t.prototype.findCoveredLineEdges = function() {
    for (var n = _.NONE, i = this.iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getSym();
      if (!o.isLineEdge()) {
        if (o.isInResult()) {
          n = _.INTERIOR;
          break;
        }
        if (s.isInResult()) {
          n = _.EXTERIOR;
          break;
        }
      }
    }
    if (n === _.NONE)
      return null;
    for (var a = n, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === _.INTERIOR) : (l.isInResult() && (a = _.EXTERIOR), c.isInResult() && (a = _.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(n) {
    var i = this;
    r.prototype.computeLabelling.call(this, n), this._label = new et(_.NONE);
    for (var o = this.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var c = u.getLocation(l);
        (c === _.INTERIOR || c === _.BOUNDARY) && i._label.setLocation(l, _.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Qt), Cu = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.createNode = function(n) {
    return new os(n, new Mc());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Si), hr = function r() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = r.orientation(t);
};
hr.prototype.compareTo = function(t) {
  var e = t, n = hr.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return n;
};
hr.prototype.interfaces_ = function() {
  return [Ge];
};
hr.prototype.getClass = function() {
  return hr;
};
hr.orientation = function(t) {
  return W.increasingDirection(t) === 1;
};
hr.compareOriented = function(t, e, n, i) {
  for (var o = e ? 1 : -1, s = i ? 1 : -1, a = e ? t.length : -1, u = i ? n.length : -1, l = e ? 0 : t.length - 1, c = i ? 0 : n.length - 1; ; ) {
    var f = t[l].compareTo(n[c]);
    if (f !== 0)
      return f;
    l += o, c += s;
    var h = l === a, g = c === u;
    if (h && !g)
      return -1;
    if (!h && g)
      return 1;
    if (h && g)
      return 0;
  }
};
var We = function() {
  this._edges = new b(), this._ocaMap = new jt();
};
We.prototype.print = function(t) {
  var e = this;
  t.print("MULTILINESTRING ( ");
  for (var n = 0; n < this._edges.size(); n++) {
    var i = e._edges.get(n);
    n > 0 && t.print(","), t.print("(");
    for (var o = i.getCoordinates(), s = 0; s < o.length; s++)
      s > 0 && t.print(","), t.print(o[s].x + " " + o[s].y);
    t.println(")");
  }
  t.print(")  ");
};
We.prototype.addAll = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); )
    e.add(n.next());
};
We.prototype.findEdgeIndex = function(t) {
  for (var e = this, n = 0; n < this._edges.size(); n++)
    if (e._edges.get(n).equals(t))
      return n;
  return -1;
};
We.prototype.iterator = function() {
  return this._edges.iterator();
};
We.prototype.getEdges = function() {
  return this._edges;
};
We.prototype.get = function(t) {
  return this._edges.get(t);
};
We.prototype.findEqualEdge = function(t) {
  var e = new hr(t.getCoordinates()), n = this._ocaMap.get(e);
  return n;
};
We.prototype.add = function(t) {
  this._edges.add(t);
  var e = new hr(t.getCoordinates());
  this._ocaMap.put(e, t);
};
We.prototype.interfaces_ = function() {
  return [];
};
We.prototype.getClass = function() {
  return We;
};
var Or = function() {
};
Or.prototype.processIntersections = function(t, e, n, i) {
};
Or.prototype.isDone = function() {
};
Or.prototype.interfaces_ = function() {
  return [];
};
Or.prototype.getClass = function() {
  return Or;
};
var Le = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
Le.prototype.isTrivialIntersection = function(t, e, n, i) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (Le.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.size() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Le.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Le.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Le.prototype.getLineIntersector = function() {
  return this._li;
};
Le.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Le.prototype.processIntersections = function(t, e, n, i) {
  if (t === n && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], u = n.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
};
Le.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Le.prototype.isDone = function() {
  return !1;
};
Le.prototype.hasInteriorIntersection = function() {
  return this._hasInterior;
};
Le.prototype.interfaces_ = function() {
  return [Or];
};
Le.prototype.getClass = function() {
  return Le;
};
Le.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var hn = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this.coord = new v(t), this.segmentIndex = e, this.dist = n;
};
hn.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
hn.prototype.getCoordinate = function() {
  return this.coord;
};
hn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
hn.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
hn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
hn.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
hn.prototype.getDistance = function() {
  return this.dist;
};
hn.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
hn.prototype.interfaces_ = function() {
  return [Ge];
};
hn.prototype.getClass = function() {
  return hn;
};
var Rn = function() {
  this._nodeMap = new jt(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
Rn.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
Rn.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
Rn.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var o = n.next(), s = e.createSplitEdge(i, o);
    t.add(s), i = o;
  }
};
Rn.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
Rn.prototype.createSplitEdge = function(t, e) {
  var n = this, i = e.segmentIndex - t.segmentIndex + 2, o = this.edge.pts[e.segmentIndex], s = e.dist > 0 || !e.coord.equals2D(o);
  s || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new v(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n.edge.pts[l];
  return s && (a[u] = e.coord), new zo(a, new et(this.edge._label));
};
Rn.prototype.add = function(t, e, n) {
  var i = new hn(t, e, n), o = this._nodeMap.get(i);
  return o !== null ? o : (this._nodeMap.put(i, i), i);
};
Rn.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.coord.equals(t))
      return !0;
  }
  return !1;
};
Rn.prototype.interfaces_ = function() {
  return [];
};
Rn.prototype.getClass = function() {
  return Rn;
};
var Dr = function() {
};
Dr.prototype.getChainStartIndices = function(t) {
  var e = this, n = 0, i = new b();
  i.add(new sn(n));
  do {
    var o = e.findChainEnd(t, n);
    i.add(new sn(o)), n = o;
  } while (n < t.length - 1);
  var s = Dr.toIntArray(i);
  return s;
};
Dr.prototype.findChainEnd = function(t, e) {
  for (var n = it.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length; ) {
    var o = it.quadrant(t[i - 1], t[i]);
    if (o !== n)
      break;
    i++;
  }
  return i - 1;
};
Dr.prototype.interfaces_ = function() {
  return [];
};
Dr.prototype.getClass = function() {
  return Dr;
};
Dr.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var $n = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new T(), this.env2 = new T();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new Dr();
  this.startIndex = e.getChainStartIndices(this.pts);
};
$n.prototype.getCoordinates = function() {
  return this.pts;
};
$n.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e > n ? e : n;
};
$n.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e < n ? e : n;
};
$n.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], i);
  } else if (arguments.length === 6) {
    var o = arguments[0], s = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], f = this.pts[o], h = this.pts[s], g = a.pts[u], p = a.pts[l];
    if (s - o === 1 && l - u === 1)
      return c.addIntersections(this.e, o, a.e, u), null;
    if (this.env1.init(f, h), this.env2.init(g, p), !this.env1.intersects(this.env2))
      return null;
    var y = Math.trunc((o + s) / 2), d = Math.trunc((u + l) / 2);
    o < y && (u < d && this.computeIntersectsForChain(o, y, a, u, d, c), d < l && this.computeIntersectsForChain(o, y, a, d, l, c)), y < s && (u < d && this.computeIntersectsForChain(y, s, a, u, d, c), d < l && this.computeIntersectsForChain(y, s, a, d, l, c));
  }
};
$n.prototype.getStartIndexes = function() {
  return this.startIndex;
};
$n.prototype.computeIntersects = function(t, e) {
  for (var n = this, i = 0; i < this.startIndex.length - 1; i++)
    for (var o = 0; o < t.startIndex.length - 1; o++)
      n.computeIntersectsForChain(i, t, o, e);
};
$n.prototype.interfaces_ = function() {
  return [];
};
$n.prototype.getClass = function() {
  return $n;
};
var Vt = function r() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var n = 0; n < 3; n++)
      t._depth[e][n] = r.NULL_VALUE;
}, Nu = { NULL_VALUE: { configurable: !0 } };
Vt.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
Vt.prototype.setDepth = function(t, e, n) {
  this._depth[t][e] = n;
};
Vt.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var n = 0; n < 3; n++)
        if (t._depth[e][n] !== Vt.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var i = arguments[0];
    return this._depth[i][1] === Vt.NULL_VALUE;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._depth[o][s] === Vt.NULL_VALUE;
  }
};
Vt.prototype.normalize = function() {
  for (var t = this, e = 0; e < 2; e++)
    if (!t.isNull(e)) {
      var n = t._depth[e][1];
      t._depth[e][2] < n && (n = t._depth[e][2]), n < 0 && (n = 0);
      for (var i = 1; i < 3; i++) {
        var o = 0;
        t._depth[e][i] > n && (o = 1), t._depth[e][i] = o;
      }
    }
};
Vt.prototype.getDelta = function(t) {
  return this._depth[t][S.RIGHT] - this._depth[t][S.LEFT];
};
Vt.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? _.EXTERIOR : _.INTERIOR;
};
Vt.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
Vt.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], n = 0; n < 2; n++)
      for (var i = 1; i < 3; i++) {
        var o = e.getLocation(n, i);
        (o === _.EXTERIOR || o === _.INTERIOR) && (t.isNull(n, i) ? t._depth[n][i] = Vt.depthAtLocation(o) : t._depth[n][i] += Vt.depthAtLocation(o));
      }
  else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2];
    u === _.INTERIOR && this._depth[s][a]++;
  }
};
Vt.prototype.interfaces_ = function() {
  return [];
};
Vt.prototype.getClass = function() {
  return Vt;
};
Vt.depthAtLocation = function(t) {
  return t === _.EXTERIOR ? 0 : t === _.INTERIOR ? 1 : Vt.NULL_VALUE;
};
Nu.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(Vt, Nu);
var zo = function(r) {
  function t() {
    if (r.call(this), this.pts = null, this._env = null, this.eiList = new Rn(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Vt(), this._depthDelta = 0, arguments.length === 1) {
      var e = arguments[0];
      t.call(this, e, null);
    } else if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      this.pts = n, this._label = i;
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getDepth = function() {
    return this._depth;
  }, t.prototype.getCollapsedEdge = function() {
    var n = new Array(2).fill(null);
    n[0] = this.pts[0], n[1] = this.pts[1];
    var i = new t(n, et.toLineLabel(this._label));
    return i;
  }, t.prototype.isIsolated = function() {
    return this._isIsolated;
  }, t.prototype.getCoordinates = function() {
    return this.pts;
  }, t.prototype.setIsolated = function(n) {
    this._isIsolated = n;
  }, t.prototype.setName = function(n) {
    this._name = n;
  }, t.prototype.equals = function(n) {
    var i = this;
    if (!(n instanceof t))
      return !1;
    var o = n;
    if (this.pts.length !== o.pts.length)
      return !1;
    for (var s = !0, a = !0, u = this.pts.length, l = 0; l < this.pts.length; l++)
      if (i.pts[l].equals2D(o.pts[l]) || (s = !1), i.pts[l].equals2D(o.pts[--u]) || (a = !1), !s && !a)
        return !1;
    return !0;
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 0)
      return this.pts.length > 0 ? this.pts[0] : null;
    if (arguments.length === 1) {
      var n = arguments[0];
      return this.pts[n];
    }
  }, t.prototype.print = function(n) {
    var i = this;
    n.print("edge " + this._name + ": "), n.print("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && n.print(","), n.print(i.pts[o].x + " " + i.pts[o].y);
    n.print(")  " + this._label + " " + this._depthDelta);
  }, t.prototype.computeIM = function(n) {
    t.updateIM(this._label, n);
  }, t.prototype.isCollapsed = function() {
    return !this._label.isArea() || this.pts.length !== 3 ? !1 : !!this.pts[0].equals(this.pts[2]);
  }, t.prototype.isClosed = function() {
    return this.pts[0].equals(this.pts[this.pts.length - 1]);
  }, t.prototype.getMaximumSegmentIndex = function() {
    return this.pts.length - 1;
  }, t.prototype.getDepthDelta = function() {
    return this._depthDelta;
  }, t.prototype.getNumPoints = function() {
    return this.pts.length;
  }, t.prototype.printReverse = function(n) {
    var i = this;
    n.print("edge " + this._name + ": ");
    for (var o = this.pts.length - 1; o >= 0; o--)
      n.print(i.pts[o] + " ");
    n.println("");
  }, t.prototype.getMonotoneChainEdge = function() {
    return this._mce === null && (this._mce = new $n(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var n = this;
    if (this._env === null) {
      this._env = new T();
      for (var i = 0; i < this.pts.length; i++)
        n._env.expandToInclude(n.pts[i]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(n, i, o, s) {
    var a = new v(n.getIntersection(s)), u = i, l = n.getEdgeDistance(o, s), c = u + 1;
    if (c < this.pts.length) {
      var f = this.pts[c];
      a.equals2D(f) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var n = this, i = new yn();
    i.append("edge " + this._name + ": "), i.append("LINESTRING (");
    for (var o = 0; o < this.pts.length; o++)
      o > 0 && i.append(","), i.append(n.pts[o].x + " " + n.pts[o].y);
    return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
  }, t.prototype.isPointwiseEqual = function(n) {
    var i = this;
    if (this.pts.length !== n.pts.length)
      return !1;
    for (var o = 0; o < this.pts.length; o++)
      if (!i.pts[o].equals2D(n.pts[o]))
        return !1;
    return !0;
  }, t.prototype.setDepthDelta = function(n) {
    this._depthDelta = n;
  }, t.prototype.getEdgeIntersectionList = function() {
    return this.eiList;
  }, t.prototype.addIntersections = function(n, i, o) {
    for (var s = this, a = 0; a < n.getIntersectionNum(); a++)
      s.addIntersection(n, i, o, a);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.updateIM = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      i.setAtLeastIfValid(n.getLocation(0, S.ON), n.getLocation(1, S.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, S.LEFT), n.getLocation(1, S.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, S.RIGHT), n.getLocation(1, S.RIGHT), 2));
    } else
      return r.prototype.updateIM.apply(this, arguments);
  }, t;
}(Se), ee = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new We(), this._bufParams = t || null;
};
ee.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
ee.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var n = e.getLabel(), i = t.getLabel();
    e.isPointwiseEqual(t) || (i = new et(t.getLabel()), i.flip()), n.merge(i);
    var o = ee.depthDelta(i), s = e.getDepthDelta(), a = s + o;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(ee.depthDelta(t.getLabel()));
};
ee.prototype.buildSubgraphs = function(t, e) {
  for (var n = new b(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getRightmostCoordinate(), a = new $r(n), u = a.getDepth(s);
    o.computeDepth(u), o.findResultEdges(), n.add(o), e.add(o.getDirectedEdges(), o.getNodes());
  }
};
ee.prototype.createSubgraphs = function(t) {
  for (var e = new b(), n = t.getNodes().iterator(); n.hasNext(); ) {
    var i = n.next();
    if (!i.isVisited()) {
      var o = new re();
      o.create(i), e.add(o);
    }
  }
  return He.sort(e, He.reverseOrder()), e;
};
ee.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
ee.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new Xs(), n = new Vr();
  return n.setPrecisionModel(t), e.setSegmentIntersector(new Le(n)), e;
};
ee.prototype.buffer = function(t, e) {
  var n = this._workingPrecisionModel;
  n === null && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var i = new le(n, this._bufParams), o = new Fe(t, e, i), s = o.getCurves();
  if (s.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(s, n), this._graph = new ht(new Cu()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new ve(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
ee.prototype.computeNodedEdges = function(t, e) {
  var n = this, i = this.getNoder(e);
  i.computeNodes(t);
  for (var o = i.getNodedSubstrings(), s = o.iterator(); s.hasNext(); ) {
    var a = s.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new zo(a.getCoordinates(), new et(l));
      n.insertUniqueEdge(c);
    }
  }
};
ee.prototype.setNoder = function(t) {
  this._workingNoder = t;
};
ee.prototype.interfaces_ = function() {
  return [];
};
ee.prototype.getClass = function() {
  return ee;
};
ee.depthDelta = function(t) {
  var e = t.getLocation(0, S.LEFT), n = t.getLocation(0, S.RIGHT);
  return e === _.INTERIOR && n === _.EXTERIOR ? 1 : e === _.EXTERIOR && n === _.INTERIOR ? -1 : 0;
};
ee.convertSegStrings = function(t) {
  for (var e = new H(), n = new b(); t.hasNext(); ) {
    var i = t.next(), o = e.createLineString(i.getCoordinates());
    n.add(o);
  }
  return e.buildGeometry(n);
};
var gr = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var n = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3];
    this._noder = n, this._scaleFactor = i, this._offsetX = o, this._offsetY = s, this._isScaled = !this.isIntegerPrecision();
  }
};
gr.prototype.rescale = function() {
  var t = this;
  if (k(arguments[0], wt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var i = n.next();
      t.rescale(i.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], s = 0; s < o.length; s++)
      o[s].x = o[s].x / t._scaleFactor + t._offsetX, o[s].y = o[s].y / t._scaleFactor + t._offsetY;
    o.length === 2 && o[0].equals2D(o[1]) && Ut.out.println(o);
  }
};
gr.prototype.scale = function() {
  var t = this;
  if (k(arguments[0], wt)) {
    for (var e = arguments[0], n = new b(), i = e.iterator(); i.hasNext(); ) {
      var o = i.next();
      n.add(new It(t.scale(o.getCoordinates()), o.getData()));
    }
    return n;
  } else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], a = new Array(s.length).fill(null), u = 0; u < s.length; u++)
      a[u] = new v(Math.round((s[u].x - t._offsetX) * t._scaleFactor), Math.round((s[u].y - t._offsetY) * t._scaleFactor), s[u].z);
    var l = W.removeRepeatedPoints(a);
    return l;
  }
};
gr.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
gr.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
gr.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
gr.prototype.interfaces_ = function() {
  return [Pr];
};
gr.prototype.getClass = function() {
  return gr;
};
var gn = function() {
  this._li = new Vr(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, xu = { fact: { configurable: !0 } };
gn.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next(), i = n.getCoordinates();
      t.checkEndPtVertexIntersections(i[0], t._segStrings), t.checkEndPtVertexIntersections(i[i.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var o = arguments[0], s = arguments[1], a = s.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), c = 1; c < l.length - 1; c++)
        if (l[c].equals(o))
          throw new Kn("found endpt/interior pt intersection at index " + c + " :pt " + o);
  }
};
gn.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var n = e.next(), i = this._segStrings.iterator(); i.hasNext(); ) {
        var o = i.next();
        t.checkInteriorIntersections(n, o);
      }
  else if (arguments.length === 2)
    for (var s = arguments[0], a = arguments[1], u = s.getCoordinates(), l = a.getCoordinates(), c = 0; c < u.length - 1; c++)
      for (var f = 0; f < l.length - 1; f++)
        t.checkInteriorIntersections(s, c, a, f);
  else if (arguments.length === 4) {
    var h = arguments[0], g = arguments[1], p = arguments[2], y = arguments[3];
    if (h === p && g === y)
      return null;
    var d = h.getCoordinates()[g], m = h.getCoordinates()[g + 1], I = p.getCoordinates()[y], C = p.getCoordinates()[y + 1];
    if (this._li.computeIntersection(d, m, I, C), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, d, m) || this.hasInteriorIntersection(this._li, I, C)))
      throw new Kn("found non-noded intersection at " + d + "-" + m + " and " + I + "-" + C);
  }
};
gn.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
gn.prototype.checkCollapses = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next();
      t.checkCollapses(n);
    }
  else if (arguments.length === 1)
    for (var i = arguments[0], o = i.getCoordinates(), s = 0; s < o.length - 2; s++)
      t.checkCollapse(o[s], o[s + 1], o[s + 2]);
};
gn.prototype.hasInteriorIntersection = function(t, e, n) {
  for (var i = 0; i < t.getIntersectionNum(); i++) {
    var o = t.getIntersection(i);
    if (!(o.equals(e) || o.equals(n)))
      return !0;
  }
  return !1;
};
gn.prototype.checkCollapse = function(t, e, n) {
  if (t.equals(n))
    throw new Kn("found non-noded collapse at " + gn.fact.createLineString([t, e, n]));
};
gn.prototype.interfaces_ = function() {
  return [];
};
gn.prototype.getClass = function() {
  return gn;
};
xu.fact.get = function() {
  return new H();
};
Object.defineProperties(gn, xu);
var ce = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0)
    throw new ct("Scale factor must be non-zero");
  e !== 1 && (this._pt = new v(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new v(), this._p1Scaled = new v()), this.initCorners(this._pt);
}, Su = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
ce.prototype.intersectsScaled = function(t, e) {
  var n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), o = Math.min(t.y, e.y), s = Math.max(t.y, e.y), a = this._maxx < n || this._minx > i || this._maxy < o || this._miny > s;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return U.isTrue(!(a && u), "Found bad envelope test"), u;
};
ce.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new v(this._maxx, this._maxy), this._corner[1] = new v(this._minx, this._maxy), this._corner[2] = new v(this._minx, this._miny), this._corner[3] = new v(this._maxx, this._miny);
};
ce.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
ce.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
ce.prototype.getCoordinate = function() {
  return this._originalPt;
};
ce.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
ce.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = ce.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new T(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
ce.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
ce.prototype.intersectsToleranceSquare = function(t, e) {
  var n = !1, i = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || n && i || t.equals(this._pt) || e.equals(this._pt));
};
ce.prototype.addSnappedNode = function(t, e) {
  var n = t.getCoordinate(e), i = t.getCoordinate(e + 1);
  return this.intersects(n, i) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
ce.prototype.interfaces_ = function() {
  return [];
};
ce.prototype.getClass = function() {
  return ce;
};
Su.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(ce, Su);
var lo = function() {
  this.tempEnv1 = new T(), this.selectedSegment = new F();
};
lo.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
lo.prototype.interfaces_ = function() {
  return [];
};
lo.prototype.getClass = function() {
  return lo;
};
var Pi = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, wu = { HotPixelSnapAction: { configurable: !0 } };
Pi.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2], o = e.getSafeEnvelope(), s = new Lu(e, n, i);
    return this._index.query(o, {
      interfaces_: function() {
        return [cr];
      },
      visitItem: function(a) {
        var u = a;
        u.select(o, s);
      }
    }), s.isNodeAdded();
  }
};
Pi.prototype.interfaces_ = function() {
  return [];
};
Pi.prototype.getClass = function() {
  return Pi;
};
wu.HotPixelSnapAction.get = function() {
  return Lu;
};
Object.defineProperties(Pi, wu);
var Lu = function(r) {
  function t() {
    r.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var e = arguments[0], n = arguments[1], i = arguments[2];
    this._hotPixel = e, this._parentEdge = n, this._hotPixelVertexIndex = i;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isNodeAdded = function() {
    return this._isNodeAdded;
  }, t.prototype.select = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1], o = n.getContext();
      if (this._parentEdge !== null && o === this._parentEdge && i === this._hotPixelVertexIndex)
        return null;
      this._isNodeAdded = this._hotPixel.addSnappedNode(o, i);
    } else
      return r.prototype.select.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(lo), ti = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new b();
};
ti.prototype.processIntersections = function(t, e, n, i) {
  var o = this;
  if (t === n && e === i)
    return null;
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[i], l = n.getCoordinates()[i + 1];
  if (this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var c = 0; c < this._li.getIntersectionNum(); c++)
      o._interiorIntersections.add(o._li.getIntersection(c));
    t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1);
  }
};
ti.prototype.isDone = function() {
  return !1;
};
ti.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
ti.prototype.interfaces_ = function() {
  return [Or];
};
ti.prototype.getClass = function() {
  return ti;
};
var On = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new Vr(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
On.prototype.checkCorrectness = function(t) {
  var e = It.getNodedSubstrings(t), n = new gn(e);
  try {
    n.checkValid();
  } catch (i) {
    if (i instanceof cu)
      i.printStackTrace();
    else
      throw i;
  } finally {
  }
};
On.prototype.getNodedSubstrings = function() {
  return It.getNodedSubstrings(this._nodedSegStrings);
};
On.prototype.snapRound = function(t, e) {
  var n = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
};
On.prototype.findInteriorIntersections = function(t, e) {
  var n = new ti(e);
  return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
};
On.prototype.computeVertexSnaps = function() {
  var t = this;
  if (k(arguments[0], wt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var i = n.next();
      t.computeVertexSnaps(i);
    }
  else if (arguments[0] instanceof It)
    for (var o = arguments[0], s = o.getCoordinates(), a = 0; a < s.length; a++) {
      var u = new ce(s[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, o, a);
      l && o.addIntersection(s[a], a);
    }
};
On.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new Xs(), this._pointSnapper = new Pi(this._noder.getIndex()), this.snapRound(t, this._li);
};
On.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next(), o = new ce(i, e._scaleFactor, e._li);
    e._pointSnapper.snap(o);
  }
};
On.prototype.interfaces_ = function() {
  return [Pr];
};
On.prototype.getClass = function() {
  return On;
};
var zt = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new Z(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._argGeom = e, this._bufParams = n;
  }
}, Ui = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
zt.prototype.bufferFixedPrecision = function(t) {
  var e = new gr(new On(new $(1)), t.getScale()), n = new ee(this._bufParams);
  n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
};
zt.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = zt.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (s) {
        if (s instanceof Jn)
          t._saveException = s;
        else
          throw s;
      } finally {
      }
      if (t._resultGeometry !== null)
        return null;
    }
    throw this._saveException;
  } else if (arguments.length === 1) {
    var n = arguments[0], i = zt.precisionScaleFactor(this._argGeom, this._distance, n), o = new $(i);
    this.bufferFixedPrecision(o);
  }
};
zt.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === $.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
zt.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
zt.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new ee(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof Kn)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
zt.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
zt.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
zt.prototype.interfaces_ = function() {
  return [];
};
zt.prototype.getClass = function() {
  return zt;
};
zt.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new zt(t), i = n.getResultGeometry(e);
    return i;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof G && typeof arguments[1] == "number") {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new zt(o);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(s);
      return l;
    } else if (arguments[2] instanceof Z && arguments[0] instanceof G && typeof arguments[1] == "number") {
      var c = arguments[0], f = arguments[1], h = arguments[2], g = new zt(c, h), p = g.getResultGeometry(f);
      return p;
    }
  } else if (arguments.length === 4) {
    var y = arguments[0], d = arguments[1], m = arguments[2], I = arguments[3], C = new zt(y);
    C.setQuadrantSegments(m), C.setEndCapStyle(I);
    var L = C.getResultGeometry(d);
    return L;
  }
};
zt.precisionScaleFactor = function(t, e, n) {
  var i = t.getEnvelopeInternal(), o = xe.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())), s = e > 0 ? e : 0, a = o + 2 * s, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = n - u, c = Math.pow(10, l);
  return c;
};
Ui.CAP_ROUND.get = function() {
  return Z.CAP_ROUND;
};
Ui.CAP_BUTT.get = function() {
  return Z.CAP_FLAT;
};
Ui.CAP_FLAT.get = function() {
  return Z.CAP_FLAT;
};
Ui.CAP_SQUARE.get = function() {
  return Z.CAP_SQUARE;
};
Ui.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(zt, Ui);
var Zt = function() {
  this._pt = [new v(), new v()], this._distance = z.NaN, this._isNull = !0;
};
Zt.prototype.getCoordinates = function() {
  return this._pt;
};
Zt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
Zt.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i < this._distance && this.initialize(e, n, i);
  }
};
Zt.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
Zt.prototype.getDistance = function() {
  return this._distance;
};
Zt.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i > this._distance && this.initialize(e, n, i);
  }
};
Zt.prototype.interfaces_ = function() {
  return [];
};
Zt.prototype.getClass = function() {
  return Zt;
};
var Cn = function() {
};
Cn.prototype.interfaces_ = function() {
  return [];
};
Cn.prototype.getClass = function() {
  return Cn;
};
Cn.computeDistance = function() {
  if (arguments[2] instanceof Zt && arguments[0] instanceof pt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], i = t.getCoordinates(), o = new F(), s = 0; s < i.length - 1; s++) {
      o.setCoordinates(i[s], i[s + 1]);
      var a = o.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Zt && arguments[0] instanceof Rt && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Cn.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      Cn.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof Zt && arguments[0] instanceof G && arguments[1] instanceof v) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof pt)
      Cn.computeDistance(h, g, p);
    else if (h instanceof Rt)
      Cn.computeDistance(h, g, p);
    else if (h instanceof ne)
      for (var y = h, d = 0; d < y.getNumGeometries(); d++) {
        var m = y.getGeometryN(d);
        Cn.computeDistance(m, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof Zt && arguments[0] instanceof F && arguments[1] instanceof v) {
    var I = arguments[0], C = arguments[1], L = arguments[2], x = I.closestPoint(C);
    L.setMinimum(x, C);
  }
};
var Tr = function(t) {
  this._maxPtDist = new Zt(), this._inputGeom = t || null;
}, Ys = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
Tr.prototype.computeMaxMidpointDistance = function(t) {
  var e = new pr(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Tr.prototype.computeMaxVertexDistance = function(t) {
  var e = new ei(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Tr.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
Tr.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
Tr.prototype.interfaces_ = function() {
  return [];
};
Tr.prototype.getClass = function() {
  return Tr;
};
Ys.MaxPointDistanceFilter.get = function() {
  return ei;
};
Ys.MaxMidpointDistanceFilter.get = function() {
  return pr;
};
Object.defineProperties(Tr, Ys);
var ei = function(t) {
  this._maxPtDist = new Zt(), this._minPtDist = new Zt(), this._geom = t || null;
};
ei.prototype.filter = function(t) {
  this._minPtDist.initialize(), Cn.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ei.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ei.prototype.interfaces_ = function() {
  return [wn];
};
ei.prototype.getClass = function() {
  return ei;
};
var pr = function(t) {
  this._maxPtDist = new Zt(), this._minPtDist = new Zt(), this._geom = t || null;
};
pr.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var n = t.getCoordinate(e - 1), i = t.getCoordinate(e), o = new v((n.x + i.x) / 2, (n.y + i.y) / 2);
  this._minPtDist.initialize(), Cn.computeDistance(this._geom, o, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
pr.prototype.isDone = function() {
  return !1;
};
pr.prototype.isGeometryChanged = function() {
  return !1;
};
pr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
pr.prototype.interfaces_ = function() {
  return [Xe];
};
pr.prototype.getClass = function() {
  return pr;
};
var Wn = function(t) {
  this._comps = t || null;
};
Wn.prototype.filter = function(t) {
  t instanceof Rt && this._comps.add(t);
};
Wn.prototype.interfaces_ = function() {
  return [un];
};
Wn.prototype.getClass = function() {
  return Wn;
};
Wn.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Wn.getPolygons(t, new b());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof Rt ? n.add(e) : e instanceof ne && e.apply(new Wn(n)), n;
  }
};
var Gt = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._lines = e, this._isForcedToLineString = n;
  }
};
Gt.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof Ln) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof pt && this._lines.add(t);
};
Gt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
Gt.prototype.interfaces_ = function() {
  return [Qn];
};
Gt.prototype.getClass = function() {
  return Gt;
};
Gt.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry(Gt.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e.getFactory().buildGeometry(Gt.getLines(e, n));
  }
};
Gt.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Gt.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (k(arguments[0], wt) && k(arguments[1], wt)) {
      for (var e = arguments[0], n = arguments[1], i = e.iterator(); i.hasNext(); ) {
        var o = i.next();
        Gt.getLines(o, n);
      }
      return n;
    } else if (arguments[0] instanceof G && typeof arguments[1] == "boolean") {
      var s = arguments[0], a = arguments[1], u = new b();
      return s.apply(new Gt(u, a)), u;
    } else if (arguments[0] instanceof G && k(arguments[1], wt)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof pt ? c.add(l) : l.apply(new Gt(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && k(arguments[0], wt) && k(arguments[1], wt)) {
      for (var f = arguments[0], h = arguments[1], g = arguments[2], p = f.iterator(); p.hasNext(); ) {
        var y = p.next();
        Gt.getLines(y, h, g);
      }
      return h;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof G && k(arguments[1], wt)) {
      var d = arguments[0], m = arguments[1], I = arguments[2];
      return d.apply(new Gt(m, I)), m;
    }
  }
};
var je = function() {
  if (this._boundaryRule = Me.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new ct("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
je.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof v && arguments[1] instanceof Rt) {
    var e = arguments[0], n = arguments[1];
    if (n.isEmpty())
      return _.EXTERIOR;
    var i = n.getExteriorRing(), o = this.locateInPolygonRing(e, i);
    if (o === _.EXTERIOR)
      return _.EXTERIOR;
    if (o === _.BOUNDARY)
      return _.BOUNDARY;
    for (var s = 0; s < n.getNumInteriorRing(); s++) {
      var a = n.getInteriorRingN(s), u = t.locateInPolygonRing(e, a);
      if (u === _.INTERIOR)
        return _.EXTERIOR;
      if (u === _.BOUNDARY)
        return _.BOUNDARY;
    }
    return _.INTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof pt) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return _.EXTERIOR;
    var f = c.getCoordinates();
    return !c.isClosed() && (l.equals(f[0]) || l.equals(f[f.length - 1])) ? _.BOUNDARY : O.isOnLine(l, f) ? _.INTERIOR : _.EXTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof de) {
    var h = arguments[0], g = arguments[1], p = g.getCoordinate();
    return p.equals2D(h) ? _.INTERIOR : _.EXTERIOR;
  }
};
je.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? O.locatePointInRing(t, e.getCoordinates()) : _.EXTERIOR;
};
je.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== _.EXTERIOR;
};
je.prototype.updateLocationInfo = function(t) {
  t === _.INTERIOR && (this._isIn = !0), t === _.BOUNDARY && this._numBoundaries++;
};
je.prototype.computeLocation = function(t, e) {
  var n = this;
  if (e instanceof de && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof pt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Rt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof br)
    for (var i = e, o = 0; o < i.getNumGeometries(); o++) {
      var s = i.getGeometryN(o);
      n.updateLocationInfo(n.locateInternal(t, s));
    }
  else if (e instanceof xn)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      n.updateLocationInfo(n.locateInternal(t, l));
    }
  else if (e instanceof ne)
    for (var c = new Sn(e); c.hasNext(); ) {
      var f = c.next();
      f !== e && n.computeLocation(t, f);
    }
};
je.prototype.locate = function(t, e) {
  return e.isEmpty() ? _.EXTERIOR : e instanceof pt ? this.locateInternal(t, e) : e instanceof Rt ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? _.BOUNDARY : this._numBoundaries > 0 || this._isIn ? _.INTERIOR : _.EXTERIOR);
};
je.prototype.interfaces_ = function() {
  return [];
};
je.prototype.getClass = function() {
  return je;
};
var $t = function r() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    r.call(this, t, r.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._component = n, this._segIndex = i, this._pt = o;
  }
}, bu = { INSIDE_AREA: { configurable: !0 } };
$t.prototype.isInsideArea = function() {
  return this._segIndex === $t.INSIDE_AREA;
};
$t.prototype.getCoordinate = function() {
  return this._pt;
};
$t.prototype.getGeometryComponent = function() {
  return this._component;
};
$t.prototype.getSegmentIndex = function() {
  return this._segIndex;
};
$t.prototype.interfaces_ = function() {
  return [];
};
$t.prototype.getClass = function() {
  return $t;
};
bu.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties($t, bu);
var or = function(t) {
  this._pts = t || null;
};
or.prototype.filter = function(t) {
  t instanceof de && this._pts.add(t);
};
or.prototype.interfaces_ = function() {
  return [un];
};
or.prototype.getClass = function() {
  return or;
};
or.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof de ? He.singletonList(t) : or.getPoints(t, new b());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof de ? n.add(e) : e instanceof ne && e.apply(new or(n)), n;
  }
};
var ni = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
ni.prototype.filter = function(t) {
  (t instanceof de || t instanceof pt || t instanceof Rt) && this._locations.add(new $t(t, 0, t.getCoordinate()));
};
ni.prototype.interfaces_ = function() {
  return [un];
};
ni.prototype.getClass = function() {
  return ni;
};
ni.getLocations = function(t) {
  var e = new b();
  return t.apply(new ni(e)), e;
};
var qt = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new je(), this._minDistanceLocation = null, this._minDistance = z.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = n, this._geom[1] = i, this._terminateDistance = o;
  }
};
qt.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = 1 - n, s = Wn.getPolygons(this._geom[n]);
    if (s.size() > 0) {
      var a = ni.getLocations(this._geom[o]);
      if (this.computeContainmentDistance(a, s, i), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[o] = i[0], this._minDistanceLocation[n] = i[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && k(arguments[0], Ue) && k(arguments[1], Ue)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], f = 0; f < u.size(); f++)
        for (var h = u.get(f), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(h, l.get(g), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof $t && arguments[1] instanceof Rt) {
      var p = arguments[0], y = arguments[1], d = arguments[2], m = p.getCoordinate();
      if (_.EXTERIOR !== this._ptLocator.locate(m, y))
        return this._minDistance = 0, d[0] = p, d[1] = new $t(y, m), null;
    }
  }
};
qt.prototype.computeMinDistanceLinesPoints = function(t, e, n) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, n), i._minDistance <= i._terminateDistance)
        return null;
    }
};
qt.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = Gt.getLines(this._geom[0]), n = Gt.getLines(this._geom[1]), i = or.getPoints(this._geom[0]), o = or.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, o, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, i, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(i, o, t), this.updateMinDistance(t, !1);
};
qt.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
qt.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
qt.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
qt.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof pt && arguments[1] instanceof de) {
      var e = arguments[0], n = arguments[1], i = arguments[2];
      if (e.getEnvelopeInternal().distance(n.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var o = e.getCoordinates(), s = n.getCoordinate(), a = 0; a < o.length - 1; a++) {
        var u = O.distancePointLine(s, o[a], o[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new F(o[a], o[a + 1]), c = l.closestPoint(s);
          i[0] = new $t(e, a, c), i[1] = new $t(n, 0, s);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof pt && arguments[1] instanceof pt) {
      var f = arguments[0], h = arguments[1], g = arguments[2];
      if (f.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var p = f.getCoordinates(), y = h.getCoordinates(), d = 0; d < p.length - 1; d++)
        for (var m = 0; m < y.length - 1; m++) {
          var I = O.distanceLineLine(p[d], p[d + 1], y[m], y[m + 1]);
          if (I < t._minDistance) {
            t._minDistance = I;
            var C = new F(p[d], p[d + 1]), L = new F(y[m], y[m + 1]), x = C.closestPoints(L);
            g[0] = new $t(f, d, x[0]), g[1] = new $t(h, m, x[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
qt.prototype.computeMinDistancePoints = function(t, e, n) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = s.getCoordinate().distance(u.getCoordinate());
      if (l < i._minDistance && (i._minDistance = l, n[0] = new $t(s, 0, s.getCoordinate()), n[1] = new $t(u, 0, u.getCoordinate())), i._minDistance <= i._terminateDistance)
        return null;
    }
};
qt.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new ct("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
qt.prototype.computeMinDistanceLines = function(t, e, n) {
  for (var i = this, o = 0; o < t.size(); o++)
    for (var s = t.get(o), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(s, u, n), i._minDistance <= i._terminateDistance)
        return null;
    }
};
qt.prototype.interfaces_ = function() {
  return [];
};
qt.prototype.getClass = function() {
  return qt;
};
qt.distance = function(t, e) {
  var n = new qt(t, e);
  return n.distance();
};
qt.isWithinDistance = function(t, e, n) {
  var i = new qt(t, e, n);
  return i.distance() <= n;
};
qt.nearestPoints = function(t, e) {
  var n = new qt(t, e);
  return n.nearestPoints();
};
var Wt = function() {
  this._pt = [new v(), new v()], this._distance = z.NaN, this._isNull = !0;
};
Wt.prototype.getCoordinates = function() {
  return this._pt;
};
Wt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
Wt.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i < this._distance && this.initialize(e, n, i);
  }
};
Wt.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(i), this._distance = o, this._isNull = !1;
  }
};
Wt.prototype.toString = function() {
  return qe.toLineString(this._pt[0], this._pt[1]);
};
Wt.prototype.getDistance = function() {
  return this._distance;
};
Wt.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var i = e.distance(n);
    i > this._distance && this.initialize(e, n, i);
  }
};
Wt.prototype.interfaces_ = function() {
  return [];
};
Wt.prototype.getClass = function() {
  return Wt;
};
var en = function() {
};
en.prototype.interfaces_ = function() {
  return [];
};
en.prototype.getClass = function() {
  return en;
};
en.computeDistance = function() {
  if (arguments[2] instanceof Wt && arguments[0] instanceof pt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], i = new F(), o = t.getCoordinates(), s = 0; s < o.length - 1; s++) {
      i.setCoordinates(o[s], o[s + 1]);
      var a = i.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Wt && arguments[0] instanceof Rt && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    en.computeDistance(u.getExteriorRing(), l, c);
    for (var f = 0; f < u.getNumInteriorRing(); f++)
      en.computeDistance(u.getInteriorRingN(f), l, c);
  } else if (arguments[2] instanceof Wt && arguments[0] instanceof G && arguments[1] instanceof v) {
    var h = arguments[0], g = arguments[1], p = arguments[2];
    if (h instanceof pt)
      en.computeDistance(h, g, p);
    else if (h instanceof Rt)
      en.computeDistance(h, g, p);
    else if (h instanceof ne)
      for (var y = h, d = 0; d < y.getNumGeometries(); d++) {
        var m = y.getGeometryN(d);
        en.computeDistance(m, g, p);
      }
    else
      p.setMinimum(h.getCoordinate(), g);
  } else if (arguments[2] instanceof Wt && arguments[0] instanceof F && arguments[1] instanceof v) {
    var I = arguments[0], C = arguments[1], L = arguments[2], x = I.closestPoint(C);
    L.setMinimum(x, C);
  }
};
var Te = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new Wt(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, Hs = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
Te.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
Te.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new ct("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
Te.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
Te.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
Te.prototype.computeOrientedDistance = function(t, e, n) {
  var i = new ri(e);
  if (t.apply(i), n.setMaximum(i.getMaxPointDistance()), this._densifyFrac > 0) {
    var o = new dr(e, this._densifyFrac);
    t.apply(o), n.setMaximum(o.getMaxPointDistance());
  }
};
Te.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
Te.prototype.interfaces_ = function() {
  return [];
};
Te.prototype.getClass = function() {
  return Te;
};
Te.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new Te(t, e);
    return n.distance();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new Te(i, o);
    return a.setDensifyFraction(s), a.distance();
  }
};
Hs.MaxPointDistanceFilter.get = function() {
  return ri;
};
Hs.MaxDensifiedByFractionDistanceFilter.get = function() {
  return dr;
};
Object.defineProperties(Te, Hs);
var ri = function() {
  this._maxPtDist = new Wt(), this._minPtDist = new Wt(), this._euclideanDist = new en(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
ri.prototype.filter = function(t) {
  this._minPtDist.initialize(), en.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
ri.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
ri.prototype.interfaces_ = function() {
  return [wn];
};
ri.prototype.getClass = function() {
  return ri;
};
var dr = function() {
  this._maxPtDist = new Wt(), this._minPtDist = new Wt(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
dr.prototype.filter = function(t, e) {
  var n = this;
  if (e === 0)
    return null;
  for (var i = t.getCoordinate(e - 1), o = t.getCoordinate(e), s = (o.x - i.x) / this._numSubSegs, a = (o.y - i.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = i.x + u * s, c = i.y + u * a, f = new v(l, c);
    n._minPtDist.initialize(), en.computeDistance(n._geom, f, n._minPtDist), n._maxPtDist.setMaximum(n._minPtDist);
  }
};
dr.prototype.isDone = function() {
  return !1;
};
dr.prototype.isGeometryChanged = function() {
  return !1;
};
dr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
dr.prototype.interfaces_ = function() {
  return [Xe];
};
dr.prototype.getClass = function() {
  return dr;
};
var pe = function(t, e, n) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null;
}, Ws = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
pe.prototype.checkMaximumDistance = function(t, e, n) {
  var i = new Te(e, t);
  if (i.setDensifyFraction(0.25), this._maxDistanceFound = i.orientedDistance(), this._maxDistanceFound > n) {
    this._isValid = !1;
    var o = i.getCoordinates();
    this._errorLocation = o[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + qe.toLineString(o[0], o[1]) + ")";
  }
};
pe.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = pe.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), pe.VERBOSE && Ut.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
pe.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof Rt || this._input instanceof xn || this._input instanceof ne))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
pe.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
pe.prototype.checkMinimumDistance = function(t, e, n) {
  var i = new qt(t, e, n);
  if (this._minDistanceFound = i.distance(), this._minDistanceFound < n) {
    this._isValid = !1;
    var o = i.nearestPoints();
    this._errorLocation = i.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(o), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + qe.toLineString(o[0], o[1]) + " )";
  }
};
pe.prototype.checkPositiveValid = function() {
  var t = this._result.getBoundary();
  if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(this._input, t, this._maxValidDistance);
};
pe.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
pe.prototype.getPolygonLines = function(t) {
  for (var e = new b(), n = new Gt(e), i = Wn.getPolygons(t), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    s.apply(n);
  }
  return t.getFactory().buildGeometry(e);
};
pe.prototype.getErrorMessage = function() {
  return this._errMsg;
};
pe.prototype.interfaces_ = function() {
  return [];
};
pe.prototype.getClass = function() {
  return pe;
};
Ws.VERBOSE.get = function() {
  return !1;
};
Ws.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(pe, Ws);
var Xt = function(t, e, n) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null;
}, js = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
Xt.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
Xt.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * Xt.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new T(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var n = new T(this._result.getEnvelopeInternal());
  n.expandBy(t), n.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(n)), this.report("Envelope");
};
Xt.prototype.checkDistance = function() {
  var t = new pe(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
Xt.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
Xt.prototype.checkPolygonal = function() {
  this._result instanceof Rt || this._result instanceof xn || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
};
Xt.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
Xt.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
Xt.prototype.checkExpectedEmpty = function() {
  if (this._input.getDimension() >= 2 || this._distance > 0)
    return null;
  this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), this.report("ExpectedEmpty");
};
Xt.prototype.report = function(t) {
  if (!Xt.VERBOSE)
    return null;
  Ut.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
};
Xt.prototype.getErrorMessage = function() {
  return this._errorMsg;
};
Xt.prototype.interfaces_ = function() {
  return [];
};
Xt.prototype.getClass = function() {
  return Xt;
};
Xt.isValidMsg = function(t, e, n) {
  var i = new Xt(t, e, n);
  return i.isValid() ? null : i.getErrorMessage();
};
Xt.isValid = function(t, e, n) {
  var i = new Xt(t, e, n);
  return !!i.isValid();
};
js.VERBOSE.get = function() {
  return !1;
};
js.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Xt, js);
var pn = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
pn.prototype.getCoordinates = function() {
  return this._pts;
};
pn.prototype.size = function() {
  return this._pts.length;
};
pn.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
pn.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
pn.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : Zr.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
pn.prototype.setData = function(t) {
  this._data = t;
};
pn.prototype.getData = function() {
  return this._data;
};
pn.prototype.toString = function() {
  return qe.toLineString(new yt(this._pts));
};
pn.prototype.interfaces_ = function() {
  return [Pn];
};
pn.prototype.getClass = function() {
  return pn;
};
var Mt = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new b(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
Mt.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
Mt.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
Mt.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
Mt.prototype.count = function() {
  return this._intersectionCount;
};
Mt.prototype.getIntersections = function() {
  return this._intersections;
};
Mt.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Mt.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
Mt.prototype.processIntersections = function(t, e, n, i) {
  if (!this._findAllIntersections && this.hasIntersection() || t === n && e === i)
    return null;
  if (this._isCheckEndSegmentsOnly) {
    var o = this.isEndSegment(t, e) || this.isEndSegment(n, i);
    if (!o)
      return null;
  }
  var s = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[i], l = n.getCoordinates()[i + 1];
  this._li.computeIntersection(s, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = s, this._intSegments[1] = a, this._intSegments[2] = u, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
};
Mt.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
Mt.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
Mt.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
Mt.prototype.interfaces_ = function() {
  return [Or];
};
Mt.prototype.getClass = function() {
  return Mt;
};
Mt.createAllIntersectionsFinder = function(t) {
  var e = new Mt(t);
  return e.setFindAllIntersections(!0), e;
};
Mt.createAnyIntersectionFinder = function(t) {
  return new Mt(t);
};
Mt.createIntersectionCounter = function(t) {
  var e = new Mt(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var Ke = function() {
  this._li = new Vr(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
Ke.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
Ke.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
Ke.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
Ke.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Ke.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new Mt(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new Xs();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
Ke.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new Jn(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
Ke.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + qe.toLineString(t[0], t[1]) + " and " + qe.toLineString(t[2], t[3]);
};
Ke.prototype.interfaces_ = function() {
  return [];
};
Ke.prototype.getClass = function() {
  return Ke;
};
Ke.computeIntersections = function(t) {
  var e = new Ke(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var Mr = function r() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new Ke(r.toSegmentStrings(t));
};
Mr.prototype.checkValid = function() {
  this._nv.checkValid();
};
Mr.prototype.interfaces_ = function() {
  return [];
};
Mr.prototype.getClass = function() {
  return Mr;
};
Mr.toSegmentStrings = function(t) {
  for (var e = new b(), n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e.add(new pn(i.getCoordinates(), i));
  }
  return e;
};
Mr.checkValid = function(t) {
  var e = new Mr(t);
  e.checkValid();
};
var ii = function(t) {
  this._mapOp = t;
};
ii.prototype.map = function(t) {
  for (var e = this, n = new b(), i = 0; i < t.getNumGeometries(); i++) {
    var o = e._mapOp.map(t.getGeometryN(i));
    o.isEmpty() || n.add(o);
  }
  return t.getFactory().createGeometryCollection(H.toGeometryArray(n));
};
ii.prototype.interfaces_ = function() {
  return [];
};
ii.prototype.getClass = function() {
  return ii;
};
ii.map = function(t, e) {
  var n = new ii(e);
  return n.map(t);
};
var dn = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new b(), this._resultLineList = new b();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = n;
};
dn.prototype.collectLines = function(t) {
  for (var e = this, n = this._op.getGraph().getEdgeEnds().iterator(); n.hasNext(); ) {
    var i = n.next();
    e.collectLineEdge(i, t, e._lineEdgesList), e.collectBoundaryTouchEdge(i, t, e._lineEdgesList);
  }
};
dn.prototype.labelIsolatedLine = function(t, e) {
  var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, n);
};
dn.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
dn.prototype.collectLineEdge = function(t, e, n) {
  var i = t.getLabel(), o = t.getEdge();
  t.isLineEdge() && !t.isVisited() && V.isResultOfOp(i, e) && !o.isCovered() && (n.add(o), t.setVisitedEdge(!0));
};
dn.prototype.findCoveredLineEdges = function() {
  for (var t = this, e = this._op.getGraph().getNodes().iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().findCoveredLineEdges();
  }
  for (var i = this._op.getGraph().getEdgeEnds().iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getEdge();
    if (o.isLineEdge() && !s.isCoveredSet()) {
      var a = t._op.isCoveredByA(o.getCoordinate());
      s.setCovered(a);
    }
  }
};
dn.prototype.labelIsolatedLines = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next(), o = i.getLabel();
    i.isIsolated() && (o.isNull(0) ? e.labelIsolatedLine(i, 0) : e.labelIsolatedLine(i, 1));
  }
};
dn.prototype.buildLines = function(t) {
  for (var e = this, n = this._lineEdgesList.iterator(); n.hasNext(); ) {
    var i = n.next(), o = e._geometryFactory.createLineString(i.getCoordinates());
    e._resultLineList.add(o), i.setInResult(!0);
  }
};
dn.prototype.collectBoundaryTouchEdge = function(t, e, n) {
  var i = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  U.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), V.isResultOfOp(i, e) && e === V.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0));
};
dn.prototype.interfaces_ = function() {
  return [];
};
dn.prototype.getClass = function() {
  return dn;
};
var oi = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new b();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
oi.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var n = this._geometryFactory.createPoint(e);
    this._resultPointList.add(n);
  }
};
oi.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, n = this._op.getGraph().getNodes().iterator(); n.hasNext(); ) {
    var i = n.next();
    if (!i.isInResult() && !i.isIncidentEdgeInResult() && (i.getEdges().getDegree() === 0 || t === V.INTERSECTION)) {
      var o = i.getLabel();
      V.isResultOfOp(o, t) && e.filterCoveredNodeToPoint(i);
    }
  }
};
oi.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
oi.prototype.interfaces_ = function() {
  return [];
};
oi.prototype.getClass = function() {
  return oi;
};
var fe = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
fe.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
fe.prototype.transformPolygon = function(t, e) {
  var n = this, i = !0, o = this.transformLinearRing(t.getExteriorRing(), t);
  (o === null || !(o instanceof Ln) || o.isEmpty()) && (i = !1);
  for (var s = new b(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = n.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof Ln || (i = !1), s.add(u));
  }
  if (i)
    return this._factory.createPolygon(o, s.toArray([]));
  var l = new b();
  return o !== null && l.add(o), l.addAll(s), this._factory.buildGeometry(l);
};
fe.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
fe.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
fe.prototype.transformMultiLineString = function(t, e) {
  for (var n = this, i = new b(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transformLineString(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
fe.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
fe.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
fe.prototype.transformMultiPoint = function(t, e) {
  for (var n = this, i = new b(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transformPoint(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
fe.prototype.transformMultiPolygon = function(t, e) {
  for (var n = this, i = new b(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transformPolygon(t.getGeometryN(o), t);
    s !== null && (s.isEmpty() || i.add(s));
  }
  return this._factory.buildGeometry(i);
};
fe.prototype.copy = function(t) {
  return t.copy();
};
fe.prototype.transformGeometryCollection = function(t, e) {
  for (var n = this, i = new b(), o = 0; o < t.getNumGeometries(); o++) {
    var s = n.transform(t.getGeometryN(o));
    s !== null && (n._pruneEmptyGeometry && s.isEmpty() || i.add(s));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(H.toGeometryArray(i)) : this._factory.buildGeometry(i);
};
fe.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof de)
    return this.transformPoint(t, null);
  if (t instanceof xi)
    return this.transformMultiPoint(t, null);
  if (t instanceof Ln)
    return this.transformLinearRing(t, null);
  if (t instanceof pt)
    return this.transformLineString(t, null);
  if (t instanceof br)
    return this.transformMultiLineString(t, null);
  if (t instanceof Rt)
    return this.transformPolygon(t, null);
  if (t instanceof xn)
    return this.transformMultiPolygon(t, null);
  if (t instanceof ne)
    return this.transformGeometryCollection(t, null);
  throw new ct("Unknown Geometry subtype: " + t.getClass().getName());
};
fe.prototype.transformLinearRing = function(t, e) {
  var n = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (n === null)
    return this._factory.createLinearRing(null);
  var i = n.size();
  return i > 0 && i < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n);
};
fe.prototype.interfaces_ = function() {
  return [];
};
fe.prototype.getClass = function() {
  return fe;
};
var Dn = function r() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new F(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof pt && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    r.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var n = arguments[0], i = arguments[1];
    this._srcPts = n, this._isClosed = r.isClosed(n), this._snapTolerance = i;
  }
};
Dn.prototype.snapVertices = function(t, e) {
  for (var n = this, i = this._isClosed ? t.size() - 1 : t.size(), o = 0; o < i; o++) {
    var s = t.get(o), a = n.findSnapForVertex(s, e);
    a !== null && (t.set(o, new v(a)), o === 0 && n._isClosed && t.set(t.size() - 1, new v(a)));
  }
};
Dn.prototype.findSnapForVertex = function(t, e) {
  for (var n = this, i = 0; i < e.length; i++) {
    if (t.equals2D(e[i]))
      return null;
    if (t.distance(e[i]) < n._snapTolerance)
      return e[i];
  }
  return null;
};
Dn.prototype.snapTo = function(t) {
  var e = new vo(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var n = e.toCoordinateArray();
  return n;
};
Dn.prototype.snapSegments = function(t, e) {
  var n = this;
  if (e.length === 0)
    return null;
  var i = e.length;
  e[0].equals2D(e[e.length - 1]) && (i = e.length - 1);
  for (var o = 0; o < i; o++) {
    var s = e[o], a = n.findSegmentIndexToSnap(s, t);
    a >= 0 && t.add(a + 1, new v(s), !1);
  }
};
Dn.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var n = this, i = z.MAX_VALUE, o = -1, s = 0; s < e.size() - 1; s++) {
    if (n._seg.p0 = e.get(s), n._seg.p1 = e.get(s + 1), n._seg.p0.equals2D(t) || n._seg.p1.equals2D(t)) {
      if (n._allowSnappingToSourceVertices)
        continue;
      return -1;
    }
    var a = n._seg.distance(t);
    a < n._snapTolerance && a < i && (i = a, o = s);
  }
  return o;
};
Dn.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
Dn.prototype.interfaces_ = function() {
  return [];
};
Dn.prototype.getClass = function() {
  return Dn;
};
Dn.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var mt = function(t) {
  this._srcGeom = t || null;
}, Pu = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
mt.prototype.snapTo = function(t, e) {
  var n = this.extractTargetCoordinates(t), i = new Ru(e, n);
  return i.transform(this._srcGeom);
};
mt.prototype.snapToSelf = function(t, e) {
  var n = this.extractTargetCoordinates(this._srcGeom), i = new Ru(t, n, !0), o = i.transform(this._srcGeom), s = o;
  return e && k(s, lr) && (s = o.buffer(0)), s;
};
mt.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), n = e / 10;
  return n;
};
mt.prototype.extractTargetCoordinates = function(t) {
  for (var e = new an(), n = t.getCoordinates(), i = 0; i < n.length; i++)
    e.add(n[i]);
  return e.toArray(new Array(0).fill(null));
};
mt.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = z.MAX_VALUE, n = 0; n < t.length - 1; n++) {
    var i = t[n].distance(t[n + 1]);
    i < e && (e = i);
  }
  return e;
};
mt.prototype.interfaces_ = function() {
  return [];
};
mt.prototype.getClass = function() {
  return mt;
};
mt.snap = function(t, e, n) {
  var i = new Array(2).fill(null), o = new mt(t);
  i[0] = o.snapTo(e, n);
  var s = new mt(e);
  return i[1] = s.snapTo(i[0], n), i;
};
mt.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = mt.computeSizeBasedSnapTolerance(t), n = t.getPrecisionModel();
    if (n.getType() === $.FIXED) {
      var i = 1 / n.getScale() * 2 / 1.415;
      i > e && (e = i);
    }
    return e;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return Math.min(mt.computeOverlaySnapTolerance(o), mt.computeOverlaySnapTolerance(s));
  }
};
mt.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), n = Math.min(e.getHeight(), e.getWidth()), i = n * mt.SNAP_PRECISION_FACTOR;
  return i;
};
mt.snapToSelf = function(t, e, n) {
  var i = new mt(t);
  return i.snapToSelf(e, n);
};
Pu.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(mt, Pu);
var Ru = function(r) {
  function t(e, n, i) {
    r.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = i !== void 0 ? i : !1;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(n, i) {
    var o = new Dn(n, this._snapTolerance);
    return o.setAllowSnappingToSourceVertices(this._isSelfSnap), o.snapTo(i);
  }, t.prototype.transformCoordinates = function(n, i) {
    var o = n.toCoordinateArray(), s = this.snapLine(o, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(fe), Jt = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
Jt.prototype.getCommon = function() {
  return z.longBitsToDouble(this._commonBits);
};
Jt.prototype.add = function(t) {
  var e = z.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = Jt.signExpBits(this._commonBits), this._isFirst = !1, null;
  var n = Jt.signExpBits(e);
  if (n !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = Jt.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = Jt.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
Jt.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = z.longBitsToDouble(t), n = z.toBinaryString(t), i = "0000000000000000000000000000000000000000000000000000000000000000" + n, o = i.substring(i.length - 64), s = o.substring(0, 1) + "  " + o.substring(1, 12) + "(exp) " + o.substring(12) + " [ " + e + " ]";
    return s;
  }
};
Jt.prototype.interfaces_ = function() {
  return [];
};
Jt.prototype.getClass = function() {
  return Jt;
};
Jt.getBit = function(t, e) {
  var n = 1 << e;
  return t & n ? 1 : 0;
};
Jt.signExpBits = function(t) {
  return t >> 52;
};
Jt.zeroLowerBits = function(t, e) {
  var n = (1 << e) - 1, i = ~n, o = t & i;
  return o;
};
Jt.numCommonMostSigMantissaBits = function(t, e) {
  for (var n = 0, i = 52; i >= 0; i--) {
    if (Jt.getBit(t, i) !== Jt.getBit(e, i))
      return n;
    n++;
  }
  return 52;
};
var vr = function() {
  this._commonCoord = null, this._ccFilter = new si();
}, Ks = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
vr.prototype.addCommonBits = function(t) {
  var e = new yr(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
vr.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new v(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var n = new yr(e);
  return t.apply(n), t.geometryChanged(), t;
};
vr.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
vr.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
vr.prototype.interfaces_ = function() {
  return [];
};
vr.prototype.getClass = function() {
  return vr;
};
Ks.CommonCoordinateFilter.get = function() {
  return si;
};
Ks.Translater.get = function() {
  return yr;
};
Object.defineProperties(vr, Ks);
var si = function() {
  this._commonBitsX = new Jt(), this._commonBitsY = new Jt();
};
si.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
si.prototype.getCommonCoordinate = function() {
  return new v(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
si.prototype.interfaces_ = function() {
  return [wn];
};
si.prototype.getClass = function() {
  return si;
};
var yr = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
yr.prototype.filter = function(t, e) {
  var n = t.getOrdinate(e, 0) + this.trans.x, i = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, i);
};
yr.prototype.isDone = function() {
  return !1;
};
yr.prototype.isGeometryChanged = function() {
  return !0;
};
yr.prototype.interfaces_ = function() {
  return [Xe];
};
yr.prototype.getClass = function() {
  return yr;
};
var At = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
At.prototype.selfSnap = function(t) {
  var e = new mt(t), n = e.snapTo(t, this._snapTolerance);
  return n;
};
At.prototype.removeCommonBits = function(t) {
  this._cbr = new vr(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
At.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
At.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), n = V.overlayOp(e[0], e[1], t);
  return this.prepareResult(n);
};
At.prototype.checkValid = function(t) {
  t.isValid() || Ut.out.println("Snapped geometry is invalid");
};
At.prototype.computeSnapTolerance = function() {
  this._snapTolerance = mt.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
At.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), n = mt.snap(e[0], e[1], this._snapTolerance);
  return n;
};
At.prototype.interfaces_ = function() {
  return [];
};
At.prototype.getClass = function() {
  return At;
};
At.overlayOp = function(t, e, n) {
  var i = new At(t, e);
  return i.getResultGeometry(n);
};
At.union = function(t, e) {
  return At.overlayOp(t, e, V.UNION);
};
At.intersection = function(t, e) {
  return At.overlayOp(t, e, V.INTERSECTION);
};
At.symDifference = function(t, e) {
  return At.overlayOp(t, e, V.SYMDIFFERENCE);
};
At.difference = function(t, e) {
  return At.overlayOp(t, e, V.DIFFERENCE);
};
var oe = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
oe.prototype.getResultGeometry = function(t) {
  var e = null, n = !1, i = null;
  try {
    e = V.overlayOp(this._geom[0], this._geom[1], t);
    var o = !0;
    o && (n = !0);
  } catch (s) {
    if (s instanceof Kn)
      i = s;
    else
      throw s;
  } finally {
  }
  if (!n)
    try {
      e = At.overlayOp(this._geom[0], this._geom[1], t);
    } catch (s) {
      throw s instanceof Kn ? i : s;
    } finally {
    }
  return e;
};
oe.prototype.interfaces_ = function() {
  return [];
};
oe.prototype.getClass = function() {
  return oe;
};
oe.overlayOp = function(t, e, n) {
  var i = new oe(t, e);
  return i.getResultGeometry(n);
};
oe.union = function(t, e) {
  return oe.overlayOp(t, e, V.UNION);
};
oe.intersection = function(t, e) {
  return oe.overlayOp(t, e, V.INTERSECTION);
};
oe.symDifference = function(t, e) {
  return oe.overlayOp(t, e, V.SYMDIFFERENCE);
};
oe.difference = function(t, e) {
  return oe.overlayOp(t, e, V.DIFFERENCE);
};
var co = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
co.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
co.prototype.interfaces_ = function() {
  return [];
};
co.prototype.getClass = function() {
  return co;
};
var me = function r() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = r.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], o = arguments[2];
    this._eventType = r.INSERT, this._label = n, this._xValue = i, this._obj = o;
  }
}, Qs = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
me.prototype.isDelete = function() {
  return this._eventType === me.DELETE;
};
me.prototype.setDeleteEventIndex = function(t) {
  this._deleteEventIndex = t;
};
me.prototype.getObject = function() {
  return this._obj;
};
me.prototype.compareTo = function(t) {
  var e = t;
  return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
};
me.prototype.getInsertEvent = function() {
  return this._insertEvent;
};
me.prototype.isInsert = function() {
  return this._eventType === me.INSERT;
};
me.prototype.isSameLabel = function(t) {
  return this._label === null ? !1 : this._label === t._label;
};
me.prototype.getDeleteEventIndex = function() {
  return this._deleteEventIndex;
};
me.prototype.interfaces_ = function() {
  return [Ge];
};
me.prototype.getClass = function() {
  return me;
};
Qs.INSERT.get = function() {
  return 1;
};
Qs.DELETE.get = function() {
  return 2;
};
Object.defineProperties(me, Qs);
var Vo = function() {
};
Vo.prototype.interfaces_ = function() {
  return [];
};
Vo.prototype.getClass = function() {
  return Vo;
};
var Yt = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = n;
};
Yt.prototype.isTrivialIntersection = function(t, e, n, i) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (Yt.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var o = t.getNumPoints() - 1;
      if (e === 0 && i === o || i === 0 && e === o)
        return !0;
    }
  }
  return !1;
};
Yt.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Yt.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
Yt.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Yt.prototype.isBoundaryPointInternal = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next(), o = i.getCoordinate();
    if (t.isIntersection(o))
      return !0;
  }
  return !1;
};
Yt.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Yt.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Yt.prototype.isDone = function() {
  return this._isDone;
};
Yt.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
Yt.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
Yt.prototype.addIntersections = function(t, e, n, i) {
  if (t === n && e === i)
    return null;
  this.numTests++;
  var o = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], u = n.getCoordinates()[i + 1];
  this._li.computeIntersection(o, s, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
Yt.prototype.interfaces_ = function() {
  return [];
};
Yt.prototype.getClass = function() {
  return Yt;
};
Yt.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var Ac = function(r) {
  function t() {
    r.call(this), this.events = new b(), this.nOverlaps = null;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var n = this;
    He.sort(this.events);
    for (var i = 0; i < this.events.size(); i++) {
      var o = n.events.get(i);
      o.isDelete() && o.getInsertEvent().setDeleteEventIndex(i);
    }
  }, t.prototype.computeIntersections = function() {
    var n = this;
    if (arguments.length === 1) {
      var i = arguments[0];
      this.nOverlaps = 0, this.prepareEvents();
      for (var o = 0; o < this.events.size(); o++) {
        var s = n.events.get(o);
        if (s.isInsert() && n.processOverlaps(o, s.getDeleteEventIndex(), s, i), i.isDone())
          break;
      }
    } else if (arguments.length === 3) {
      if (arguments[2] instanceof Yt && k(arguments[0], Ue) && k(arguments[1], Ue)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && k(arguments[0], Ue) && arguments[1] instanceof Yt) {
        var c = arguments[0], f = arguments[1], h = arguments[2];
        h ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(f);
      }
    }
  }, t.prototype.addEdge = function(n, i) {
    for (var o = this, s = n.getMonotoneChainEdge(), a = s.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new co(s, u), c = new me(i, s.getMinX(u), l);
      o.events.add(c), o.events.add(new me(s.getMaxX(u), c));
    }
  }, t.prototype.processOverlaps = function(n, i, o, s) {
    for (var a = this, u = o.getObject(), l = n; l < i; l++) {
      var c = a.events.get(l);
      if (c.isInsert()) {
        var f = c.getObject();
        o.isSameLabel(c) || (u.computeIntersections(f, s), a.nOverlaps++);
      }
    }
  }, t.prototype.addEdges = function() {
    var n = this;
    if (arguments.length === 1)
      for (var i = arguments[0], o = i.iterator(); o.hasNext(); ) {
        var s = o.next();
        n.addEdge(s, s);
      }
    else if (arguments.length === 2)
      for (var a = arguments[0], u = arguments[1], l = a.iterator(); l.hasNext(); ) {
        var c = l.next();
        n.addEdge(c, u);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Vo), Tn = function() {
  this._min = z.POSITIVE_INFINITY, this._max = z.NEGATIVE_INFINITY;
}, Ou = { NodeComparator: { configurable: !0 } };
Tn.prototype.getMin = function() {
  return this._min;
};
Tn.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
Tn.prototype.getMax = function() {
  return this._max;
};
Tn.prototype.toString = function() {
  return qe.toLineString(new v(this._min, 0), new v(this._max, 0));
};
Tn.prototype.interfaces_ = function() {
  return [];
};
Tn.prototype.getClass = function() {
  return Tn;
};
Ou.NodeComparator.get = function() {
  return fo;
};
Object.defineProperties(Tn, Ou);
var fo = function() {
};
fo.prototype.compare = function(t, e) {
  var n = t, i = e, o = (n._min + n._max) / 2, s = (i._min + i._max) / 2;
  return o < s ? -1 : o > s ? 1 : 0;
};
fo.prototype.interfaces_ = function() {
  return [yi];
};
fo.prototype.getClass = function() {
  return fo;
};
var Fc = function(r) {
  function t() {
    r.call(this), this._item = null;
    var e = arguments[0], n = arguments[1], i = arguments[2];
    this._min = e, this._max = n, this._item = i;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.query = function(n, i, o) {
    if (!this.intersects(n, i))
      return null;
    o.visitItem(this._item);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Tn), Bc = function(r) {
  function t() {
    r.call(this), this._node1 = null, this._node2 = null;
    var e = arguments[0], n = arguments[1];
    this._node1 = e, this._node2 = n, this.buildExtent(this._node1, this._node2);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.buildExtent = function(n, i) {
    this._min = Math.min(n._min, i._min), this._max = Math.max(n._max, i._max);
  }, t.prototype.query = function(n, i, o) {
    if (!this.intersects(n, i))
      return null;
    this._node1 !== null && this._node1.query(n, i, o), this._node2 !== null && this._node2.query(n, i, o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Tn), Mn = function() {
  this._leaves = new b(), this._root = null, this._level = 0;
};
Mn.prototype.buildTree = function() {
  var t = this;
  He.sort(this._leaves, new Tn.NodeComparator());
  for (var e = this._leaves, n = null, i = new b(); ; ) {
    if (t.buildLevel(e, i), i.size() === 1)
      return i.get(0);
    n = e, e = i, i = n;
  }
};
Mn.prototype.insert = function(t, e, n) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new Fc(t, e, n));
};
Mn.prototype.query = function(t, e, n) {
  this.init(), this._root.query(t, e, n);
};
Mn.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
Mn.prototype.printNode = function(t) {
  Ut.out.println(qe.toLineString(new v(t._min, this._level), new v(t._max, this._level)));
};
Mn.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
Mn.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var n = 0; n < t.size(); n += 2) {
    var i = t.get(n), o = n + 1 < t.size() ? t.get(n) : null;
    if (o === null)
      e.add(i);
    else {
      var s = new Bc(t.get(n), t.get(n + 1));
      e.add(s);
    }
  }
};
Mn.prototype.interfaces_ = function() {
  return [];
};
Mn.prototype.getClass = function() {
  return Mn;
};
var Ri = function() {
  this._items = new b();
};
Ri.prototype.visitItem = function(t) {
  this._items.add(t);
};
Ri.prototype.getItems = function() {
  return this._items;
};
Ri.prototype.interfaces_ = function() {
  return [cr];
};
Ri.prototype.getClass = function() {
  return Ri;
};
var Oi = function() {
  this._index = null;
  var t = arguments[0];
  if (!k(t, lr))
    throw new ct("Argument must be Polygonal");
  this._index = new Ar(t);
}, Js = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
Oi.prototype.locate = function(t) {
  var e = new rn(t), n = new Di(e);
  return this._index.query(t.y, t.y, n), e.getLocation();
};
Oi.prototype.interfaces_ = function() {
  return [bi];
};
Oi.prototype.getClass = function() {
  return Oi;
};
Js.SegmentVisitor.get = function() {
  return Di;
};
Js.IntervalIndexedGeometry.get = function() {
  return Ar;
};
Object.defineProperties(Oi, Js);
var Di = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
Di.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
Di.prototype.interfaces_ = function() {
  return [cr];
};
Di.prototype.getClass = function() {
  return Di;
};
var Ar = function() {
  this._index = new Mn();
  var t = arguments[0];
  this.init(t);
};
Ar.prototype.init = function(t) {
  for (var e = this, n = Gt.getLines(t), i = n.iterator(); i.hasNext(); ) {
    var o = i.next(), s = o.getCoordinates();
    e.addLine(s);
  }
};
Ar.prototype.addLine = function(t) {
  for (var e = this, n = 1; n < t.length; n++) {
    var i = new F(t[n - 1], t[n]), o = Math.min(i.p0.y, i.p1.y), s = Math.max(i.p0.y, i.p1.y);
    e._index.insert(o, s, i);
  }
};
Ar.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new Ri();
    return this._index.query(t, e, n), n.getItems();
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    this._index.query(i, o, s);
  }
};
Ar.prototype.interfaces_ = function() {
  return [];
};
Ar.prototype.getClass = function() {
  return Ar;
};
var Yi = function(r) {
  function t() {
    if (r.call(this), this._parentGeom = null, this._lineEdgeMap = new pu(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new je(), arguments.length === 2) {
      var e = arguments[0], n = arguments[1], i = Me.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = i, n !== null && this.add(n);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2];
      this._argIndex = o, this._parentGeom = s, this._boundaryNodeRule = a, s !== null && this.add(s);
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(n, i) {
    var o = this._nodes.addNode(i), s = o.getLabel(), a = 1, u = _.NONE;
    u = s.getLocation(n, S.ON), u === _.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    s.setLocation(n, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      return this.computeSelfNodes(n, i, !1);
    } else if (arguments.length === 3) {
      var o = arguments[0], s = arguments[1], a = arguments[2], u = new Yt(o, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof Ln || this._parentGeom instanceof Rt || this._parentGeom instanceof xn, f = s || !c;
      return l.computeIntersections(this._edges, u, f), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(n) {
    for (var i = this._edges.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.eiList.addSplitEdges(n);
    }
  }, t.prototype.computeEdgeIntersections = function(n, i, o) {
    var s = new Yt(i, o, !0);
    s.setBoundaryNodes(this.getBoundaryNodes(), n.getBoundaryNodes());
    var a = this.createEdgeSetIntersector();
    return a.computeIntersections(this._edges, n._edges, s), s;
  }, t.prototype.getGeometry = function() {
    return this._parentGeom;
  }, t.prototype.getBoundaryNodeRule = function() {
    return this._boundaryNodeRule;
  }, t.prototype.hasTooFewPoints = function() {
    return this._hasTooFewPoints;
  }, t.prototype.addPoint = function() {
    if (arguments[0] instanceof de) {
      var n = arguments[0], i = n.getCoordinate();
      this.insertPoint(this._argIndex, i, _.INTERIOR);
    } else if (arguments[0] instanceof v) {
      var o = arguments[0];
      this.insertPoint(this._argIndex, o, _.INTERIOR);
    }
  }, t.prototype.addPolygon = function(n) {
    var i = this;
    this.addPolygonRing(n.getExteriorRing(), _.EXTERIOR, _.INTERIOR);
    for (var o = 0; o < n.getNumInteriorRing(); o++) {
      var s = n.getInteriorRingN(o);
      i.addPolygonRing(s, _.INTERIOR, _.EXTERIOR);
    }
  }, t.prototype.addEdge = function(n) {
    this.insertEdge(n);
    var i = n.getCoordinates();
    this.insertPoint(this._argIndex, i[0], _.BOUNDARY), this.insertPoint(this._argIndex, i[i.length - 1], _.BOUNDARY);
  }, t.prototype.addLineString = function(n) {
    var i = W.removeRepeatedPoints(n.getCoordinates());
    if (i.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = i[0], null;
    var o = new zo(i, new et(this._argIndex, _.INTERIOR));
    this._lineEdgeMap.put(n, o), this.insertEdge(o), U.isTrue(i.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, i[0]), this.insertBoundaryPoint(this._argIndex, i[i.length - 1]);
  }, t.prototype.getInvalidPoint = function() {
    return this._invalidPoint;
  }, t.prototype.getBoundaryPoints = function() {
    for (var n = this.getBoundaryNodes(), i = new Array(n.size()).fill(null), o = 0, s = n.iterator(); s.hasNext(); ) {
      var a = s.next();
      i[o++] = a.getCoordinate().copy();
    }
    return i;
  }, t.prototype.getBoundaryNodes = function() {
    return this._boundaryNodes === null && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
  }, t.prototype.addSelfIntersectionNode = function(n, i, o) {
    if (this.isBoundaryNode(n, i))
      return null;
    o === _.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(n, i) : this.insertPoint(n, i, o);
  }, t.prototype.addPolygonRing = function(n, i, o) {
    if (n.isEmpty())
      return null;
    var s = W.removeRepeatedPoints(n.getCoordinates());
    if (s.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = s[0], null;
    var a = i, u = o;
    O.isCCW(s) && (a = o, u = i);
    var l = new zo(s, new et(this._argIndex, _.BOUNDARY, a, u));
    this._lineEdgeMap.put(n, l), this.insertEdge(l), this.insertPoint(this._argIndex, s[0], _.BOUNDARY);
  }, t.prototype.insertPoint = function(n, i, o) {
    var s = this._nodes.addNode(i), a = s.getLabel();
    a === null ? s._label = new et(n, o) : a.setLocation(n, o);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new Ac();
  }, t.prototype.addSelfIntersectionNodes = function(n) {
    for (var i = this, o = this._edges.iterator(); o.hasNext(); )
      for (var s = o.next(), a = s.getLabel().getLocation(n), u = s.eiList.iterator(); u.hasNext(); ) {
        var l = u.next();
        i.addSelfIntersectionNode(n, l.coord, a);
      }
  }, t.prototype.add = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      if (n.isEmpty())
        return null;
      if (n instanceof xn && (this._useBoundaryDeterminationRule = !1), n instanceof Rt)
        this.addPolygon(n);
      else if (n instanceof pt)
        this.addLineString(n);
      else if (n instanceof de)
        this.addPoint(n);
      else if (n instanceof xi)
        this.addCollection(n);
      else if (n instanceof br)
        this.addCollection(n);
      else if (n instanceof xn)
        this.addCollection(n);
      else if (n instanceof ne)
        this.addCollection(n);
      else
        throw new Error(n.getClass().getName());
    } else
      return r.prototype.add.apply(this, arguments);
  }, t.prototype.addCollection = function(n) {
    for (var i = this, o = 0; o < n.getNumGeometries(); o++) {
      var s = n.getGeometryN(o);
      i.add(s);
    }
  }, t.prototype.locate = function(n) {
    return k(this._parentGeom, lr) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new Oi(this._parentGeom)), this._areaPtLocator.locate(n)) : this._ptLocator.locate(n, this._parentGeom);
  }, t.prototype.findEdge = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      return this._lineEdgeMap.get(n);
    } else
      return r.prototype.findEdge.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.determineBoundary = function(n, i) {
    return n.isInBoundary(i) ? _.BOUNDARY : _.INTERIOR;
  }, t;
}(ht), Ti = function() {
  if (this._li = new Vr(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new Yi(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = Me.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Yi(0, e, i), this._arg[1] = new Yi(1, n, i);
  } else if (arguments.length === 3) {
    var o = arguments[0], s = arguments[1], a = arguments[2];
    o.getPrecisionModel().compareTo(s.getPrecisionModel()) >= 0 ? this.setComputationPrecision(o.getPrecisionModel()) : this.setComputationPrecision(s.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Yi(0, o, a), this._arg[1] = new Yi(1, s, a);
  }
};
Ti.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
Ti.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
Ti.prototype.interfaces_ = function() {
  return [];
};
Ti.prototype.getClass = function() {
  return Ti;
};
var Sr = function() {
};
Sr.prototype.interfaces_ = function() {
  return [];
};
Sr.prototype.getClass = function() {
  return Sr;
};
Sr.map = function() {
  if (arguments[0] instanceof G && k(arguments[1], Sr.MapOp)) {
    for (var t = arguments[0], e = arguments[1], n = new b(), i = 0; i < t.getNumGeometries(); i++) {
      var o = e.map(t.getGeometryN(i));
      o !== null && n.add(o);
    }
    return t.getFactory().buildGeometry(n);
  } else if (k(arguments[0], wt) && k(arguments[1], Sr.MapOp)) {
    for (var s = arguments[0], a = arguments[1], u = new b(), l = s.iterator(); l.hasNext(); ) {
      var c = l.next(), f = a.map(c);
      f !== null && u.add(f);
    }
    return u;
  }
};
Sr.MapOp = function() {
};
var V = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n), this._ptLocator = new je(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new We(), this._resultPolyList = new b(), this._resultLineList = new b(), this._resultPointList = new b(), this._graph = new ht(new Cu()), this._geomFact = e.getFactory();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(n) {
    var i = this._edgeList.findEqualEdge(n);
    if (i !== null) {
      var o = i.getLabel(), s = n.getLabel();
      i.isPointwiseEqual(n) || (s = new et(n.getLabel()), s.flip());
      var a = i.getDepth();
      a.isNull() && a.add(o), a.add(s), o.merge(s);
    } else
      this._edgeList.add(n);
  }, t.prototype.getGraph = function() {
    return this._graph;
  }, t.prototype.cancelDuplicateResultEdges = function() {
    for (var n = this._graph.getEdgeEnds().iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getSym();
      i.isInResult() && o.isInResult() && (i.setInResult(!1), o.setInResult(!1));
    }
  }, t.prototype.isCoveredByLA = function(n) {
    return !!(this.isCovered(n, this._resultLineList) || this.isCovered(n, this._resultPolyList));
  }, t.prototype.computeGeometry = function(n, i, o, s) {
    var a = new b();
    return a.addAll(n), a.addAll(i), a.addAll(o), a.isEmpty() ? t.createEmptyResult(s, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var i = n.next();
      i.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(n, i) {
    for (var o = this, s = i.iterator(); s.hasNext(); ) {
      var a = s.next(), u = o._ptLocator.locate(n, a);
      if (u !== _.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var n = new b(), i = this._edgeList.iterator(); i.hasNext(); ) {
      var o = i.next();
      o.isCollapsed() && (i.remove(), n.add(o.getCollapsedEdge()));
    }
    this._edgeList.addAll(n);
  }, t.prototype.updateNodeLabelling = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getEdges().getLabel();
      i.getLabel().merge(o);
    }
  }, t.prototype.getResultGeometry = function(n) {
    return this.computeOverlay(n), this._resultGeom;
  }, t.prototype.insertUniqueEdges = function(n) {
    for (var i = this, o = n.iterator(); o.hasNext(); ) {
      var s = o.next();
      i.insertUniqueEdge(s);
    }
  }, t.prototype.computeOverlay = function(n) {
    this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
    var i = new b();
    this._arg[0].computeSplitEdges(i), this._arg[1].computeSplitEdges(i), this.insertUniqueEdges(i), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Mr.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(n), this.cancelDuplicateResultEdges();
    var o = new ve(this._geomFact);
    o.add(this._graph), this._resultPolyList = o.getPolygons();
    var s = new dn(this, this._geomFact, this._ptLocator);
    this._resultLineList = s.build(n);
    var a = new oi(this, this._geomFact, this._ptLocator);
    this._resultPointList = a.build(n), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, n);
  }, t.prototype.labelIncompleteNode = function(n, i) {
    var o = this._ptLocator.locate(n.getCoordinate(), this._arg[i].getGeometry());
    n.getLabel().setLocation(i, o);
  }, t.prototype.copyPoints = function(n) {
    for (var i = this, o = this._arg[n].getNodeIterator(); o.hasNext(); ) {
      var s = o.next(), a = i._graph.addNode(s.getCoordinate());
      a.setLabel(n, s.getLabel().getLocation(n));
    }
  }, t.prototype.findResultAreaEdges = function(n) {
    for (var i = this._graph.getEdgeEnds().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      s.isArea() && !o.isInteriorAreaEdge() && t.isResultOfOp(s.getLocation(0, S.RIGHT), s.getLocation(1, S.RIGHT), n) && o.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var n = this._edgeList.iterator(); n.hasNext(); ) {
      var i = n.next(), o = i.getLabel(), s = i.getDepth();
      if (!s.isNull()) {
        s.normalize();
        for (var a = 0; a < 2; a++)
          !o.isNull(a) && o.isArea() && !s.isNull(a) && (s.getDelta(a) === 0 ? o.toLine(a) : (U.isTrue(!s.isNull(a, S.LEFT), "depth of LEFT side has not been initialized"), o.setLocation(a, S.LEFT, s.getLocation(a, S.LEFT)), U.isTrue(!s.isNull(a, S.RIGHT), "depth of RIGHT side has not been initialized"), o.setLocation(a, S.RIGHT, s.getLocation(a, S.RIGHT))));
      }
    }
  }, t.prototype.computeLabelling = function() {
    for (var n = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next();
      o.getEdges().computeLabelling(n._arg);
    }
    this.mergeSymLabels(), this.updateNodeLabelling();
  }, t.prototype.labelIncompleteNodes = function() {
    for (var n = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var o = i.next(), s = o.getLabel();
      o.isIsolated() && (s.isNull(0) ? n.labelIncompleteNode(o, 0) : n.labelIncompleteNode(o, 1)), o.getEdges().updateLabelling(s);
    }
  }, t.prototype.isCoveredByA = function(n) {
    return !!this.isCovered(n, this._resultPolyList);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ti);
V.overlayOp = function(r, t, e) {
  var n = new V(r, t), i = n.getResultGeometry(e);
  return i;
};
V.intersection = function(r, t) {
  if (r.isEmpty() || t.isEmpty())
    return V.createEmptyResult(V.INTERSECTION, r, t, r.getFactory());
  if (r.isGeometryCollection()) {
    var e = t;
    return ii.map(r, {
      interfaces_: function() {
        return [Sr.MapOp];
      },
      map: function(n) {
        return n.intersection(e);
      }
    });
  }
  return r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), oe.overlayOp(r, t, V.INTERSECTION);
};
V.symDifference = function(r, t) {
  if (r.isEmpty() || t.isEmpty()) {
    if (r.isEmpty() && t.isEmpty())
      return V.createEmptyResult(V.SYMDIFFERENCE, r, t, r.getFactory());
    if (r.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return r.copy();
  }
  return r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), oe.overlayOp(r, t, V.SYMDIFFERENCE);
};
V.resultDimension = function(r, t, e) {
  var n = t.getDimension(), i = e.getDimension(), o = -1;
  switch (r) {
    case V.INTERSECTION:
      o = Math.min(n, i);
      break;
    case V.UNION:
      o = Math.max(n, i);
      break;
    case V.DIFFERENCE:
      o = n;
      break;
    case V.SYMDIFFERENCE:
      o = Math.max(n, i);
      break;
  }
  return o;
};
V.createEmptyResult = function(r, t, e, n) {
  var i = null;
  switch (V.resultDimension(r, t, e)) {
    case -1:
      i = n.createGeometryCollection(new Array(0).fill(null));
      break;
    case 0:
      i = n.createPoint();
      break;
    case 1:
      i = n.createLineString();
      break;
    case 2:
      i = n.createPolygon();
      break;
  }
  return i;
};
V.difference = function(r, t) {
  return r.isEmpty() ? V.createEmptyResult(V.DIFFERENCE, r, t, r.getFactory()) : t.isEmpty() ? r.copy() : (r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), oe.overlayOp(r, t, V.DIFFERENCE));
};
V.isResultOfOp = function() {
  if (arguments.length === 2) {
    var r = arguments[0], t = arguments[1], e = r.getLocation(0), n = r.getLocation(1);
    return V.isResultOfOp(e, n, t);
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2];
    switch (i === _.BOUNDARY && (i = _.INTERIOR), o === _.BOUNDARY && (o = _.INTERIOR), s) {
      case V.INTERSECTION:
        return i === _.INTERIOR && o === _.INTERIOR;
      case V.UNION:
        return i === _.INTERIOR || o === _.INTERIOR;
      case V.DIFFERENCE:
        return i === _.INTERIOR && o !== _.INTERIOR;
      case V.SYMDIFFERENCE:
        return i === _.INTERIOR && o !== _.INTERIOR || i !== _.INTERIOR && o === _.INTERIOR;
    }
    return !1;
  }
};
V.INTERSECTION = 1;
V.UNION = 2;
V.DIFFERENCE = 3;
V.SYMDIFFERENCE = 4;
var sr = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new je(), this._seg = new F();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
sr.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, n = 0; n < this._linework.getNumGeometries(); n++)
    for (var i = e._linework.getGeometryN(n), o = i.getCoordinateSequence(), s = 0; s < o.size() - 1; s++) {
      o.getCoordinate(s, e._seg.p0), o.getCoordinate(s + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
sr.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? _.BOUNDARY : this._ptLocator.locate(t, this._g);
};
sr.prototype.extractLinework = function(t) {
  var e = new Mi();
  t.apply(e);
  var n = e.getLinework(), i = H.toLineStringArray(n);
  return t.getFactory().createMultiLineString(i);
};
sr.prototype.interfaces_ = function() {
  return [];
};
sr.prototype.getClass = function() {
  return sr;
};
var Mi = function() {
  this._linework = null, this._linework = new b();
};
Mi.prototype.getLinework = function() {
  return this._linework;
};
Mi.prototype.filter = function(t) {
  var e = this;
  if (t instanceof Rt) {
    var n = t;
    this._linework.add(n.getExteriorRing());
    for (var i = 0; i < n.getNumInteriorRing(); i++)
      e._linework.add(n.getInteriorRingN(i));
  }
};
Mi.prototype.interfaces_ = function() {
  return [un];
};
Mi.prototype.getClass = function() {
  return Mi;
};
var Fr = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Fr.prototype.extractPoints = function(t, e, n) {
  for (var i = this, o = t.getCoordinates(), s = 0; s < o.length - 1; s++)
    i.computeOffsetPoints(o[s], o[s + 1], e, n);
};
Fr.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Fr.prototype.getPoints = function(t) {
  for (var e = this, n = new b(), i = Gt.getLines(this._g), o = i.iterator(); o.hasNext(); ) {
    var s = o.next();
    e.extractPoints(s, t, n);
  }
  return n;
};
Fr.prototype.computeOffsetPoints = function(t, e, n, i) {
  var o = e.x - t.x, s = e.y - t.y, a = Math.sqrt(o * o + s * s), u = n * o / a, l = n * s / a, c = (e.x + t.x) / 2, f = (e.y + t.y) / 2;
  if (this._doLeft) {
    var h = new v(c - l, f + u);
    i.add(h);
  }
  if (this._doRight) {
    var g = new v(c + l, f - u);
    i.add(g);
  }
};
Fr.prototype.interfaces_ = function() {
  return [];
};
Fr.prototype.getClass = function() {
  return Fr;
};
var be = function r() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = r.TOLERANCE, this._testCoords = new b();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundaryDistanceTolerance = r.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, n], this._locFinder = [new sr(this._geom[0], this._boundaryDistanceTolerance), new sr(this._geom[1], this._boundaryDistanceTolerance), new sr(this._geom[2], this._boundaryDistanceTolerance)];
}, Du = { TOLERANCE: { configurable: !0 } };
be.prototype.reportResult = function(t, e, n) {
  Ut.out.println("Overlay result invalid - A:" + _.toLocationSymbol(e[0]) + " B:" + _.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + _.toLocationSymbol(e[2]));
};
be.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
be.prototype.checkValid = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0; n < this._testCoords.size(); n++) {
      var i = t._testCoords.get(n);
      if (!t.checkValid(e, i))
        return t._invalidLocation = i, !1;
    }
    return !0;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1];
    return this._location[0] = this._locFinder[0].getLocation(s), this._location[1] = this._locFinder[1].getLocation(s), this._location[2] = this._locFinder[2].getLocation(s), be.hasLocation(this._location, _.BOUNDARY) ? !0 : this.isValidResult(o, this._location);
  }
};
be.prototype.addTestPts = function(t) {
  var e = new Fr(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
be.prototype.isValidResult = function(t, e) {
  var n = V.isResultOfOp(e[0], e[1], t), i = e[2] === _.INTERIOR, o = !(n ^ i);
  return o || this.reportResult(t, e, n), o;
};
be.prototype.getInvalidLocation = function() {
  return this._invalidLocation;
};
be.prototype.interfaces_ = function() {
  return [];
};
be.prototype.getClass = function() {
  return be;
};
be.hasLocation = function(t, e) {
  for (var n = 0; n < 3; n++)
    if (t[n] === e)
      return !0;
  return !1;
};
be.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(mt.computeSizeBasedSnapTolerance(t), mt.computeSizeBasedSnapTolerance(e));
};
be.isValid = function(t, e, n, i) {
  var o = new be(t, e, i);
  return o.isValid(n);
};
Du.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(be, Du);
var Ie = function r(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = r.extractFactory(t), this._inputGeoms = t;
};
Ie.prototype.extractElements = function(t, e) {
  var n = this;
  if (t === null)
    return null;
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var o = t.getGeometryN(i);
    n._skipEmpty && o.isEmpty() || e.add(o);
  }
};
Ie.prototype.combine = function() {
  for (var t = this, e = new b(), n = this._inputGeoms.iterator(); n.hasNext(); ) {
    var i = n.next();
    t.extractElements(i, e);
  }
  return e.size() === 0 ? this._geomFactory !== null ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(e);
};
Ie.prototype.interfaces_ = function() {
  return [];
};
Ie.prototype.getClass = function() {
  return Ie;
};
Ie.combine = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Ie(t);
    return e.combine();
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], o = new Ie(Ie.createList(n, i));
    return o.combine();
  } else if (arguments.length === 3) {
    var s = arguments[0], a = arguments[1], u = arguments[2], l = new Ie(Ie.createList(s, a, u));
    return l.combine();
  }
};
Ie.extractFactory = function(t) {
  return t.isEmpty() ? null : t.iterator().next().getFactory();
};
Ie.createList = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new b();
    return n.add(t), n.add(e), n;
  } else if (arguments.length === 3) {
    var i = arguments[0], o = arguments[1], s = arguments[2], a = new b();
    return a.add(i), a.add(o), a.add(s), a;
  }
};
var Nt = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new b());
}, Tu = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
Nt.prototype.reduceToGeometries = function(t) {
  for (var e = this, n = new b(), i = t.iterator(); i.hasNext(); ) {
    var o = i.next(), s = null;
    k(o, Ue) ? s = e.unionTree(o) : o instanceof G && (s = o), n.add(s);
  }
  return n;
};
Nt.prototype.extractByEnvelope = function(t, e, n) {
  for (var i = new b(), o = 0; o < e.getNumGeometries(); o++) {
    var s = e.getGeometryN(o);
    s.getEnvelopeInternal().intersects(t) ? i.add(s) : n.add(s);
  }
  return this._geomFactory.buildGeometry(i);
};
Nt.prototype.unionOptimized = function(t, e) {
  var n = t.getEnvelopeInternal(), i = e.getEnvelopeInternal();
  if (!n.intersects(i)) {
    var o = Ie.combine(t, e);
    return o;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var s = n.intersection(i);
  return this.unionUsingEnvelopeIntersection(t, e, s);
};
Nt.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new mu(Nt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.insert(n.getEnvelopeInternal(), n);
  }
  this._inputPolys = null;
  var i = t.itemsTree(), o = this.unionTree(i);
  return o;
};
Nt.prototype.binaryUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.binaryUnion(t, 0, t.size());
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2];
    if (i - n <= 1) {
      var o = Nt.getGeometry(e, n);
      return this.unionSafe(o, null);
    } else {
      if (i - n === 2)
        return this.unionSafe(Nt.getGeometry(e, n), Nt.getGeometry(e, n + 1));
      var s = Math.trunc((i + n) / 2), a = this.binaryUnion(e, n, s), u = this.binaryUnion(e, s, i);
      return this.unionSafe(a, u);
    }
  }
};
Nt.prototype.repeatedUnion = function(t) {
  for (var e = null, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e === null ? e = i.copy() : e = e.union(i);
  }
  return e;
};
Nt.prototype.unionSafe = function(t, e) {
  return t === null && e === null ? null : t === null ? e.copy() : e === null ? t.copy() : this.unionOptimized(t, e);
};
Nt.prototype.unionActual = function(t, e) {
  return Nt.restrictToPolygons(t.union(e));
};
Nt.prototype.unionTree = function(t) {
  var e = this.reduceToGeometries(t), n = this.binaryUnion(e);
  return n;
};
Nt.prototype.unionUsingEnvelopeIntersection = function(t, e, n) {
  var i = new b(), o = this.extractByEnvelope(n, t, i), s = this.extractByEnvelope(n, e, i), a = this.unionActual(o, s);
  i.add(a);
  var u = Ie.combine(i);
  return u;
};
Nt.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), n = e.buildGeometry(t), i = n.buffer(0);
    return i;
  } else if (arguments.length === 2) {
    var o = arguments[0], s = arguments[1], a = o.getFactory(), u = a.createGeometryCollection([o, s]), l = u.buffer(0);
    return l;
  }
};
Nt.prototype.interfaces_ = function() {
  return [];
};
Nt.prototype.getClass = function() {
  return Nt;
};
Nt.restrictToPolygons = function(t) {
  if (k(t, lr))
    return t;
  var e = Wn.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(H.toPolygonArray(e));
};
Nt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
Nt.union = function(t) {
  var e = new Nt(t);
  return e.union();
};
Tu.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(Nt, Tu);
var Uo = function() {
};
Uo.prototype.interfaces_ = function() {
  return [];
};
Uo.prototype.getClass = function() {
  return Uo;
};
Uo.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return V.createEmptyResult(V.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), oe.overlayOp(t, e, V.UNION);
};
function Ur() {
  return new qo();
}
function qo() {
  this.reset();
}
qo.prototype = {
  constructor: qo,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(r) {
    Pa(So, r, this.t), Pa(this, So.s, this.s), this.s ? this.t += So.t : this.s = So.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var So = new qo();
function Pa(r, t, e) {
  var n = r.s = t + e, i = n - t, o = n - i;
  r.t = t - o + (e - i);
}
var gt = 1e-6, ot = Math.PI, Hn = ot / 2, Ra = ot / 4, tr = ot * 2, Ir = 180 / ot, $e = ot / 180, te = Math.abs, Gc = Math.atan, Ai = Math.atan2, Lt = Math.cos, bt = Math.sin, Io = Math.sqrt;
function Mu(r) {
  return r > 1 ? 0 : r < -1 ? ot : Math.acos(r);
}
function Fi(r) {
  return r > 1 ? Hn : r < -1 ? -Hn : Math.asin(r);
}
function Hi() {
}
function Xo(r, t) {
  r && Da.hasOwnProperty(r.type) && Da[r.type](r, t);
}
var Oa = {
  Feature: function(r, t) {
    Xo(r.geometry, t);
  },
  FeatureCollection: function(r, t) {
    for (var e = r.features, n = -1, i = e.length; ++n < i; )
      Xo(e[n].geometry, t);
  }
}, Da = {
  Sphere: function(r, t) {
    t.sphere();
  },
  Point: function(r, t) {
    r = r.coordinates, t.point(r[0], r[1], r[2]);
  },
  MultiPoint: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      r = e[n], t.point(r[0], r[1], r[2]);
  },
  LineString: function(r, t) {
    Rs(r.coordinates, t, 0);
  },
  MultiLineString: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      Rs(e[n], t, 0);
  },
  Polygon: function(r, t) {
    Ta(r.coordinates, t);
  },
  MultiPolygon: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      Ta(e[n], t);
  },
  GeometryCollection: function(r, t) {
    for (var e = r.geometries, n = -1, i = e.length; ++n < i; )
      Xo(e[n], t);
  }
};
function Rs(r, t, e) {
  var n = -1, i = r.length - e, o;
  for (t.lineStart(); ++n < i; )
    o = r[n], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function Ta(r, t) {
  var e = -1, n = r.length;
  for (t.polygonStart(); ++e < n; )
    Rs(r[e], t, 1);
  t.polygonEnd();
}
function kc(r, t) {
  r && Oa.hasOwnProperty(r.type) ? Oa[r.type](r, t) : Xo(r, t);
}
Ur();
Ur();
function Os(r) {
  return [Ai(r[1], r[0]), Fi(r[2])];
}
function Bi(r) {
  var t = r[0], e = r[1], n = Lt(e);
  return [n * Lt(t), n * bt(t), bt(e)];
}
function wo(r, t) {
  return r[0] * t[0] + r[1] * t[1] + r[2] * t[2];
}
function Yo(r, t) {
  return [r[1] * t[2] - r[2] * t[1], r[2] * t[0] - r[0] * t[2], r[0] * t[1] - r[1] * t[0]];
}
function vs(r, t) {
  r[0] += t[0], r[1] += t[1], r[2] += t[2];
}
function Lo(r, t) {
  return [r[0] * t, r[1] * t, r[2] * t];
}
function Ds(r) {
  var t = Io(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
  r[0] /= t, r[1] /= t, r[2] /= t;
}
Ur();
function Au(r, t) {
  function e(n, i) {
    return n = r(n, i), t(n[0], n[1]);
  }
  return r.invert && t.invert && (e.invert = function(n, i) {
    return n = t.invert(n, i), n && r.invert(n[0], n[1]);
  }), e;
}
function Ts(r, t) {
  return [r > ot ? r - tr : r < -ot ? r + tr : r, t];
}
Ts.invert = Ts;
function zc(r, t, e) {
  return (r %= tr) ? t || e ? Au(Aa(r), Fa(t, e)) : Aa(r) : t || e ? Fa(t, e) : Ts;
}
function Ma(r) {
  return function(t, e) {
    return t += r, [t > ot ? t - tr : t < -ot ? t + tr : t, e];
  };
}
function Aa(r) {
  var t = Ma(r);
  return t.invert = Ma(-r), t;
}
function Fa(r, t) {
  var e = Lt(r), n = bt(r), i = Lt(t), o = bt(t);
  function s(a, u) {
    var l = Lt(u), c = Lt(a) * l, f = bt(a) * l, h = bt(u), g = h * e + c * n;
    return [
      Ai(f * i - g * o, c * e - h * n),
      Fi(g * i + f * o)
    ];
  }
  return s.invert = function(a, u) {
    var l = Lt(u), c = Lt(a) * l, f = bt(a) * l, h = bt(u), g = h * i - f * o;
    return [
      Ai(f * i + h * o, c * e + g * n),
      Fi(g * e - c * n)
    ];
  }, s;
}
function Vc(r, t, e, n, i, o) {
  if (e) {
    var s = Lt(t), a = bt(t), u = n * e;
    i == null ? (i = t + n * tr, o = t - u / 2) : (i = Ba(s, i), o = Ba(s, o), (n > 0 ? i < o : i > o) && (i += n * tr));
    for (var l, c = i; n > 0 ? c > o : c < o; c -= u)
      l = Os([s, -a * Lt(c), -a * bt(c)]), r.point(l[0], l[1]);
  }
}
function Ba(r, t) {
  t = Bi(t), t[0] -= r, Ds(t);
  var e = Mu(-t[1]);
  return ((-t[2] < 0 ? -e : e) + tr - gt) % tr;
}
function Fu() {
  var r = [], t;
  return {
    point: function(e, n) {
      t.push([e, n]);
    },
    lineStart: function() {
      r.push(t = []);
    },
    lineEnd: Hi,
    rejoin: function() {
      r.length > 1 && r.push(r.pop().concat(r.shift()));
    },
    result: function() {
      var e = r;
      return r = [], t = null, e;
    }
  };
}
function Uc(r, t, e, n, i, o) {
  var s = r[0], a = r[1], u = t[0], l = t[1], c = 0, f = 1, h = u - s, g = l - a, p;
  if (p = e - s, !(!h && p > 0)) {
    if (p /= h, h < 0) {
      if (p < c)
        return;
      p < f && (f = p);
    } else if (h > 0) {
      if (p > f)
        return;
      p > c && (c = p);
    }
    if (p = i - s, !(!h && p < 0)) {
      if (p /= h, h < 0) {
        if (p > f)
          return;
        p > c && (c = p);
      } else if (h > 0) {
        if (p < c)
          return;
        p < f && (f = p);
      }
      if (p = n - a, !(!g && p > 0)) {
        if (p /= g, g < 0) {
          if (p < c)
            return;
          p < f && (f = p);
        } else if (g > 0) {
          if (p > f)
            return;
          p > c && (c = p);
        }
        if (p = o - a, !(!g && p < 0)) {
          if (p /= g, g < 0) {
            if (p > f)
              return;
            p > c && (c = p);
          } else if (g > 0) {
            if (p < c)
              return;
            p < f && (f = p);
          }
          return c > 0 && (r[0] = s + c * h, r[1] = a + c * g), f < 1 && (t[0] = s + f * h, t[1] = a + f * g), !0;
        }
      }
    }
  }
}
function To(r, t) {
  return te(r[0] - t[0]) < gt && te(r[1] - t[1]) < gt;
}
function bo(r, t, e, n) {
  this.x = r, this.z = t, this.o = e, this.e = n, this.v = !1, this.n = this.p = null;
}
function Bu(r, t, e, n, i) {
  var o = [], s = [], a, u;
  if (r.forEach(function(p) {
    if (!((y = p.length - 1) <= 0)) {
      var y, d = p[0], m = p[y], I;
      if (To(d, m)) {
        for (i.lineStart(), a = 0; a < y; ++a)
          i.point((d = p[a])[0], d[1]);
        i.lineEnd();
        return;
      }
      o.push(I = new bo(d, p, null, !0)), s.push(I.o = new bo(d, null, I, !1)), o.push(I = new bo(m, p, null, !1)), s.push(I.o = new bo(m, null, I, !0));
    }
  }), !!o.length) {
    for (s.sort(t), Ga(o), Ga(s), a = 0, u = s.length; a < u; ++a)
      s[a].e = e = !e;
    for (var l = o[0], c, f; ; ) {
      for (var h = l, g = !0; h.v; )
        if ((h = h.n) === l)
          return;
      c = h.z, i.lineStart();
      do {
        if (h.v = h.o.v = !0, h.e) {
          if (g)
            for (a = 0, u = c.length; a < u; ++a)
              i.point((f = c[a])[0], f[1]);
          else
            n(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (g)
            for (c = h.p.z, a = c.length - 1; a >= 0; --a)
              i.point((f = c[a])[0], f[1]);
          else
            n(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, c = h.z, g = !g;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function Ga(r) {
  if (t = r.length) {
    for (var t, e = 0, n = r[0], i; ++e < t; )
      n.n = i = r[e], i.p = n, n = i;
    n.n = i = r[0], i.p = n;
  }
}
function Gu(r, t) {
  return r < t ? -1 : r > t ? 1 : r >= t ? 0 : NaN;
}
function qc(r) {
  return r.length === 1 && (r = Xc(r)), {
    left: function(t, e, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var o = n + i >>> 1;
        r(t[o], e) < 0 ? n = o + 1 : i = o;
      }
      return n;
    },
    right: function(t, e, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var o = n + i >>> 1;
        r(t[o], e) > 0 ? i = o : n = o + 1;
      }
      return n;
    }
  };
}
function Xc(r) {
  return function(t, e) {
    return Gu(r(t), e);
  };
}
qc(Gu);
function ku(r) {
  for (var t = r.length, e, n = -1, i = 0, o, s; ++n < t; )
    i += r[n].length;
  for (o = new Array(i); --t >= 0; )
    for (s = r[t], e = s.length; --e >= 0; )
      o[--i] = s[e];
  return o;
}
var Wi = 1e9, Po = -Wi;
function Yc(r, t, e, n) {
  function i(l, c) {
    return r <= l && l <= e && t <= c && c <= n;
  }
  function o(l, c, f, h) {
    var g = 0, p = 0;
    if (l == null || (g = s(l, f)) !== (p = s(c, f)) || u(l, c) < 0 ^ f > 0)
      do
        h.point(g === 0 || g === 3 ? r : e, g > 1 ? n : t);
      while ((g = (g + f + 4) % 4) !== p);
    else
      h.point(c[0], c[1]);
  }
  function s(l, c) {
    return te(l[0] - r) < gt ? c > 0 ? 0 : 3 : te(l[0] - e) < gt ? c > 0 ? 2 : 1 : te(l[1] - t) < gt ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var f = s(l, 1), h = s(c, 1);
    return f !== h ? f - h : f === 0 ? c[1] - l[1] : f === 1 ? l[0] - c[0] : f === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, f = Fu(), h, g, p, y, d, m, I, C, L, x, w, M = {
      point: B,
      lineStart: P,
      lineEnd: X,
      polygonStart: q,
      polygonEnd: j
    };
    function B(Y, ut) {
      i(Y, ut) && c.point(Y, ut);
    }
    function A() {
      for (var Y = 0, ut = 0, St = g.length; ut < St; ++ut)
        for (var Ht = g[ut], he = 1, qr = Ht.length, _n = Ht[0], Fn, ge, nt = _n[0], Ot = _n[1]; he < qr; ++he)
          Fn = nt, ge = Ot, _n = Ht[he], nt = _n[0], Ot = _n[1], ge <= n ? Ot > n && (nt - Fn) * (n - ge) > (Ot - ge) * (r - Fn) && ++Y : Ot <= n && (nt - Fn) * (n - ge) < (Ot - ge) * (r - Fn) && --Y;
      return Y;
    }
    function q() {
      c = f, h = [], g = [], w = !0;
    }
    function j() {
      var Y = A(), ut = w && Y, St = (h = ku(h)).length;
      (ut || St) && (l.polygonStart(), ut && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), St && Bu(h, a, Y, o, l), l.polygonEnd()), c = l, h = g = p = null;
    }
    function P() {
      M.point = R, g && g.push(p = []), x = !0, L = !1, I = C = NaN;
    }
    function X() {
      h && (R(y, d), m && L && f.rejoin(), h.push(f.result())), M.point = B, L && c.lineEnd();
    }
    function R(Y, ut) {
      var St = i(Y, ut);
      if (g && p.push([Y, ut]), x)
        y = Y, d = ut, m = St, x = !1, St && (c.lineStart(), c.point(Y, ut));
      else if (St && L)
        c.point(Y, ut);
      else {
        var Ht = [I = Math.max(Po, Math.min(Wi, I)), C = Math.max(Po, Math.min(Wi, C))], he = [Y = Math.max(Po, Math.min(Wi, Y)), ut = Math.max(Po, Math.min(Wi, ut))];
        Uc(Ht, he, r, t, e, n) ? (L || (c.lineStart(), c.point(Ht[0], Ht[1])), c.point(he[0], he[1]), St || c.lineEnd(), w = !1) : St && (c.lineStart(), c.point(Y, ut), w = !1);
      }
      I = Y, C = ut, L = St;
    }
    return M;
  };
}
var ys = Ur();
function Hc(r, t) {
  var e = t[0], n = t[1], i = [bt(e), -Lt(e), 0], o = 0, s = 0;
  ys.reset();
  for (var a = 0, u = r.length; a < u; ++a)
    if (c = (l = r[a]).length)
      for (var l, c, f = l[c - 1], h = f[0], g = f[1] / 2 + Ra, p = bt(g), y = Lt(g), d = 0; d < c; ++d, h = I, p = L, y = x, f = m) {
        var m = l[d], I = m[0], C = m[1] / 2 + Ra, L = bt(C), x = Lt(C), w = I - h, M = w >= 0 ? 1 : -1, B = M * w, A = B > ot, q = p * L;
        if (ys.add(Ai(q * M * bt(B), y * x + q * Lt(B))), o += A ? w + M * tr : w, A ^ h >= e ^ I >= e) {
          var j = Yo(Bi(f), Bi(m));
          Ds(j);
          var P = Yo(i, j);
          Ds(P);
          var X = (A ^ w >= 0 ? -1 : 1) * Fi(P[2]);
          (n > X || n === X && (j[0] || j[1])) && (s += A ^ w >= 0 ? 1 : -1);
        }
      }
  return (o < -gt || o < gt && ys < -gt) ^ s & 1;
}
Ur();
function ka(r) {
  return r;
}
Ur();
Ur();
var Gi = 1 / 0, Ho = Gi, ho = -Gi, Wo = ho, za = {
  point: Wc,
  lineStart: Hi,
  lineEnd: Hi,
  polygonStart: Hi,
  polygonEnd: Hi,
  result: function() {
    var r = [[Gi, Ho], [ho, Wo]];
    return ho = Wo = -(Ho = Gi = 1 / 0), r;
  }
};
function Wc(r, t) {
  r < Gi && (Gi = r), r > ho && (ho = r), t < Ho && (Ho = t), t > Wo && (Wo = t);
}
Ur();
function zu(r, t, e, n) {
  return function(i, o) {
    var s = t(o), a = i.invert(n[0], n[1]), u = Fu(), l = t(u), c = !1, f, h, g, p = {
      point: y,
      lineStart: m,
      lineEnd: I,
      polygonStart: function() {
        p.point = C, p.lineStart = L, p.lineEnd = x, h = [], f = [];
      },
      polygonEnd: function() {
        p.point = y, p.lineStart = m, p.lineEnd = I, h = ku(h);
        var w = Hc(f, a);
        h.length ? (c || (o.polygonStart(), c = !0), Bu(h, Kc, w, e, o)) : w && (c || (o.polygonStart(), c = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), c && (o.polygonEnd(), c = !1), h = f = null;
      },
      sphere: function() {
        o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd();
      }
    };
    function y(w, M) {
      var B = i(w, M);
      r(w = B[0], M = B[1]) && o.point(w, M);
    }
    function d(w, M) {
      var B = i(w, M);
      s.point(B[0], B[1]);
    }
    function m() {
      p.point = d, s.lineStart();
    }
    function I() {
      p.point = y, s.lineEnd();
    }
    function C(w, M) {
      g.push([w, M]);
      var B = i(w, M);
      l.point(B[0], B[1]);
    }
    function L() {
      l.lineStart(), g = [];
    }
    function x() {
      C(g[0][0], g[0][1]), l.lineEnd();
      var w = l.clean(), M = u.result(), B, A = M.length, q, j, P;
      if (g.pop(), f.push(g), g = null, !!A) {
        if (w & 1) {
          if (j = M[0], (q = j.length - 1) > 0) {
            for (c || (o.polygonStart(), c = !0), o.lineStart(), B = 0; B < q; ++B)
              o.point((P = j[B])[0], P[1]);
            o.lineEnd();
          }
          return;
        }
        A > 1 && w & 2 && M.push(M.pop().concat(M.shift())), h.push(M.filter(jc));
      }
    }
    return p;
  };
}
function jc(r) {
  return r.length > 1;
}
function Kc(r, t) {
  return ((r = r.x)[0] < 0 ? r[1] - Hn - gt : Hn - r[1]) - ((t = t.x)[0] < 0 ? t[1] - Hn - gt : Hn - t[1]);
}
const Va = zu(
  function() {
    return !0;
  },
  Qc,
  Zc,
  [-ot, -Hn]
);
function Qc(r) {
  var t = NaN, e = NaN, n = NaN, i;
  return {
    lineStart: function() {
      r.lineStart(), i = 1;
    },
    point: function(o, s) {
      var a = o > 0 ? ot : -ot, u = te(o - t);
      te(u - ot) < gt ? (r.point(t, e = (e + s) / 2 > 0 ? Hn : -Hn), r.point(n, e), r.lineEnd(), r.lineStart(), r.point(a, e), r.point(o, e), i = 0) : n !== a && u >= ot && (te(t - n) < gt && (t -= n * gt), te(o - a) < gt && (o -= a * gt), e = Jc(t, e, o, s), r.point(n, e), r.lineEnd(), r.lineStart(), r.point(a, e), i = 0), r.point(t = o, e = s), n = a;
    },
    lineEnd: function() {
      r.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Jc(r, t, e, n) {
  var i, o, s = bt(r - e);
  return te(s) > gt ? Gc((bt(t) * (o = Lt(n)) * bt(e) - bt(n) * (i = Lt(t)) * bt(r)) / (i * o * s)) : (t + n) / 2;
}
function Zc(r, t, e, n) {
  var i;
  if (r == null)
    i = e * Hn, n.point(-ot, i), n.point(0, i), n.point(ot, i), n.point(ot, 0), n.point(ot, -i), n.point(0, -i), n.point(-ot, -i), n.point(-ot, 0), n.point(-ot, i);
  else if (te(r[0] - t[0]) > gt) {
    var o = r[0] < t[0] ? ot : -ot;
    i = e * o / 2, n.point(-o, i), n.point(0, i), n.point(o, i);
  } else
    n.point(t[0], t[1]);
}
function $c(r, t) {
  var e = Lt(r), n = e > 0, i = te(e) > gt;
  function o(c, f, h, g) {
    Vc(g, r, t, h, c, f);
  }
  function s(c, f) {
    return Lt(c) * Lt(f) > e;
  }
  function a(c) {
    var f, h, g, p, y;
    return {
      lineStart: function() {
        p = g = !1, y = 1;
      },
      point: function(d, m) {
        var I = [d, m], C, L = s(d, m), x = n ? L ? 0 : l(d, m) : L ? l(d + (d < 0 ? ot : -ot), m) : 0;
        if (!f && (p = g = L) && c.lineStart(), L !== g && (C = u(f, I), (!C || To(f, C) || To(I, C)) && (I[0] += gt, I[1] += gt, L = s(I[0], I[1]))), L !== g)
          y = 0, L ? (c.lineStart(), C = u(I, f), c.point(C[0], C[1])) : (C = u(f, I), c.point(C[0], C[1]), c.lineEnd()), f = C;
        else if (i && f && n ^ L) {
          var w;
          !(x & h) && (w = u(I, f, !0)) && (y = 0, n ? (c.lineStart(), c.point(w[0][0], w[0][1]), c.point(w[1][0], w[1][1]), c.lineEnd()) : (c.point(w[1][0], w[1][1]), c.lineEnd(), c.lineStart(), c.point(w[0][0], w[0][1])));
        }
        L && (!f || !To(f, I)) && c.point(I[0], I[1]), f = I, g = L, h = x;
      },
      lineEnd: function() {
        g && c.lineEnd(), f = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return y | (p && g) << 1;
      }
    };
  }
  function u(c, f, h) {
    var g = Bi(c), p = Bi(f), y = [1, 0, 0], d = Yo(g, p), m = wo(d, d), I = d[0], C = m - I * I;
    if (!C)
      return !h && c;
    var L = e * m / C, x = -e * I / C, w = Yo(y, d), M = Lo(y, L), B = Lo(d, x);
    vs(M, B);
    var A = w, q = wo(M, A), j = wo(A, A), P = q * q - j * (wo(M, M) - 1);
    if (!(P < 0)) {
      var X = Io(P), R = Lo(A, (-q - X) / j);
      if (vs(R, M), R = Os(R), !h)
        return R;
      var Y = c[0], ut = f[0], St = c[1], Ht = f[1], he;
      ut < Y && (he = Y, Y = ut, ut = he);
      var qr = ut - Y, _n = te(qr - ot) < gt, Fn = _n || qr < gt;
      if (!_n && Ht < St && (he = St, St = Ht, Ht = he), Fn ? _n ? St + Ht > 0 ^ R[1] < (te(R[0] - Y) < gt ? St : Ht) : St <= R[1] && R[1] <= Ht : qr > ot ^ (Y <= R[0] && R[0] <= ut)) {
        var ge = Lo(A, (-q + X) / j);
        return vs(ge, M), [R, Os(ge)];
      }
    }
  }
  function l(c, f) {
    var h = n ? r : ot - r, g = 0;
    return c < -h ? g |= 1 : c > h && (g |= 2), f < -h ? g |= 4 : f > h && (g |= 8), g;
  }
  return zu(s, a, o, n ? [0, -r] : [-ot, r - ot]);
}
function Vu(r) {
  return function(t) {
    var e = new Ms();
    for (var n in r)
      e[n] = r[n];
    return e.stream = t, e;
  };
}
function Ms() {
}
Ms.prototype = {
  constructor: Ms,
  point: function(r, t) {
    this.stream.point(r, t);
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
function Uu(r, t, e) {
  var n = t[1][0] - t[0][0], i = t[1][1] - t[0][1], o = r.clipExtent && r.clipExtent();
  r.scale(150).translate([0, 0]), o != null && r.clipExtent(null), kc(e, r.stream(za));
  var s = za.result(), a = Math.min(n / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])), u = +t[0][0] + (n - a * (s[1][0] + s[0][0])) / 2, l = +t[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
  return o != null && r.clipExtent(o), r.scale(a * 150).translate([u, l]);
}
function tf(r, t, e) {
  return Uu(r, [[0, 0], t], e);
}
var Ua = 16, ef = Lt(30 * $e);
function qa(r, t) {
  return +t ? rf(r, t) : nf(r);
}
function nf(r) {
  return Vu({
    point: function(t, e) {
      t = r(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function rf(r, t) {
  function e(n, i, o, s, a, u, l, c, f, h, g, p, y, d) {
    var m = l - n, I = c - i, C = m * m + I * I;
    if (C > 4 * t && y--) {
      var L = s + h, x = a + g, w = u + p, M = Io(L * L + x * x + w * w), B = Fi(w /= M), A = te(te(w) - 1) < gt || te(o - f) < gt ? (o + f) / 2 : Ai(x, L), q = r(A, B), j = q[0], P = q[1], X = j - n, R = P - i, Y = I * X - m * R;
      (Y * Y / C > t || te((m * X + I * R) / C - 0.5) > 0.3 || s * h + a * g + u * p < ef) && (e(n, i, o, s, a, u, j, P, A, L /= M, x /= M, w, y, d), d.point(j, P), e(j, P, A, L, x, w, l, c, f, h, g, p, y, d));
    }
  }
  return function(n) {
    var i, o, s, a, u, l, c, f, h, g, p, y, d = {
      point: m,
      lineStart: I,
      lineEnd: L,
      polygonStart: function() {
        n.polygonStart(), d.lineStart = x;
      },
      polygonEnd: function() {
        n.polygonEnd(), d.lineStart = I;
      }
    };
    function m(B, A) {
      B = r(B, A), n.point(B[0], B[1]);
    }
    function I() {
      f = NaN, d.point = C, n.lineStart();
    }
    function C(B, A) {
      var q = Bi([B, A]), j = r(B, A);
      e(f, h, c, g, p, y, f = j[0], h = j[1], c = B, g = q[0], p = q[1], y = q[2], Ua, n), n.point(f, h);
    }
    function L() {
      d.point = m, n.lineEnd();
    }
    function x() {
      I(), d.point = w, d.lineEnd = M;
    }
    function w(B, A) {
      C(i = B, A), o = f, s = h, a = g, u = p, l = y, d.point = C;
    }
    function M() {
      e(f, h, c, g, p, y, o, s, i, a, u, l, Ua, n), d.lineEnd = L, L();
    }
    return d;
  };
}
var of = Vu({
  point: function(r, t) {
    this.stream.point(r * $e, t * $e);
  }
});
function sf(r) {
  return af(function() {
    return r;
  })();
}
function af(r) {
  var t, e = 150, n = 480, i = 250, o, s, a = 0, u = 0, l = 0, c = 0, f = 0, h, g, p = null, y = Va, d = null, m, I, C, L = ka, x = 0.5, w = qa(j, x), M, B;
  function A(R) {
    return R = g(R[0] * $e, R[1] * $e), [R[0] * e + o, s - R[1] * e];
  }
  function q(R) {
    return R = g.invert((R[0] - o) / e, (s - R[1]) / e), R && [R[0] * Ir, R[1] * Ir];
  }
  function j(R, Y) {
    return R = t(R, Y), [R[0] * e + o, s - R[1] * e];
  }
  A.stream = function(R) {
    return M && B === R ? M : M = of(y(h, w(L(B = R))));
  }, A.clipAngle = function(R) {
    return arguments.length ? (y = +R ? $c(p = R * $e, 6 * $e) : (p = null, Va), X()) : p * Ir;
  }, A.clipExtent = function(R) {
    return arguments.length ? (L = R == null ? (d = m = I = C = null, ka) : Yc(d = +R[0][0], m = +R[0][1], I = +R[1][0], C = +R[1][1]), X()) : d == null ? null : [[d, m], [I, C]];
  }, A.scale = function(R) {
    return arguments.length ? (e = +R, P()) : e;
  }, A.translate = function(R) {
    return arguments.length ? (n = +R[0], i = +R[1], P()) : [n, i];
  }, A.center = function(R) {
    return arguments.length ? (a = R[0] % 360 * $e, u = R[1] % 360 * $e, P()) : [a * Ir, u * Ir];
  }, A.rotate = function(R) {
    return arguments.length ? (l = R[0] % 360 * $e, c = R[1] % 360 * $e, f = R.length > 2 ? R[2] % 360 * $e : 0, P()) : [l * Ir, c * Ir, f * Ir];
  }, A.precision = function(R) {
    return arguments.length ? (w = qa(j, x = R * R), X()) : Io(x);
  }, A.fitExtent = function(R, Y) {
    return Uu(A, R, Y);
  }, A.fitSize = function(R, Y) {
    return tf(A, R, Y);
  };
  function P() {
    g = Au(h = zc(l, c, f), t);
    var R = t(a, u);
    return o = n - R[0] * e, s = i + R[1] * e, X();
  }
  function X() {
    return M = B = null, A;
  }
  return function() {
    return t = r.apply(this, arguments), A.invert = t.invert && q, P();
  };
}
function uf(r) {
  return function(t, e) {
    var n = Lt(t), i = Lt(e), o = r(n * i);
    return [
      o * i * bt(t),
      o * bt(e)
    ];
  };
}
function lf(r) {
  return function(t, e) {
    var n = Io(t * t + e * e), i = r(n), o = bt(i), s = Lt(i);
    return [
      Ai(t * o, n * s),
      Fi(n && e * o / n)
    ];
  };
}
var qu = uf(function(r) {
  return (r = Mu(r)) && r / bt(r);
});
qu.invert = lf(function(r) {
  return r;
});
function cf() {
  return sf(qu).scale(79.4188).clipAngle(180 - 1e-3);
}
function Xa(r, t) {
  return [r, t];
}
Xa.invert = Xa;
function ff(r, t, e) {
  e = e || {};
  var n = e.units || "kilometers", i = e.steps || 8;
  if (!r)
    throw new Error("geojson is required");
  if (typeof e != "object")
    throw new Error("options must be an object");
  if (typeof i != "number")
    throw new Error("steps must be an number");
  if (t === void 0)
    throw new Error("radius is required");
  if (i <= 0)
    throw new Error("steps must be greater than 0");
  var o = [];
  switch (r.type) {
    case "GeometryCollection":
      return su(r, function(s) {
        var a = Mo(s, t, n, i);
        a && o.push(a);
      }), Ls(o);
    case "FeatureCollection":
      return xa(r, function(s) {
        var a = Mo(s, t, n, i);
        a && xa(a, function(u) {
          u && o.push(u);
        });
      }), Ls(o);
  }
  return Mo(r, t, n, i);
}
function Mo(r, t, e, n) {
  var i = r.properties || {}, o = r.type === "Feature" ? r.geometry : r;
  if (o.type === "GeometryCollection") {
    var s = [];
    return su(r, function(y) {
      var d = Mo(y, t, e, n);
      d && s.push(d);
    }), Ls(s);
  }
  var a = hf(o), u = {
    type: o.type,
    coordinates: Yu(o.coordinates, a)
  }, l = new qs(), c = l.read(u), f = pc(dc(t, e), "meters"), h = zt.bufferOp(c, f, n), g = new vu();
  if (h = g.write(h), !Xu(h.coordinates)) {
    var p = {
      type: h.type,
      coordinates: Hu(h.coordinates, a)
    };
    return jo(p, i);
  }
}
function Xu(r) {
  return Array.isArray(r[0]) ? Xu(r[0]) : isNaN(r[0]);
}
function Yu(r, t) {
  return typeof r[0] != "object" ? t(r) : r.map(function(e) {
    return Yu(e, t);
  });
}
function Hu(r, t) {
  return typeof r[0] != "object" ? t.invert(r) : r.map(function(e) {
    return Hu(e, t);
  });
}
function hf(r) {
  var t = Ec(r).geometry.coordinates, e = [-t[0], -t[1]];
  return cf().rotate(e).scale(Ee);
}
function gf(r, t) {
  var e = Bo(r), n = Bo(t), i = r.properties || {}, o = eu.difference(
    e.coordinates,
    n.coordinates
  );
  return o.length === 0 ? null : o.length === 1 ? ru(o[0], i) : iu(o, i);
}
function Ya(r) {
  let t;
  for (const e of r)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function Ha(r, t) {
  const e = gf(
    {
      type: "Polygon",
      coordinates: [
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]
    },
    r
  );
  if (!e)
    return;
  e.properties = { isMask: "y" };
  const n = ff(r, 0);
  if (n.geometry.type === "Polygon")
    for (const i of n.geometry.coordinates)
      Ya(i);
  else
    for (const i of n.geometry.coordinates)
      for (const o of i)
        Ya(o);
  t({
    type: "FeatureCollection",
    features: [n, e]
  });
}
function pf(r, t = !0, e = !0, n = {}, i = {}, o = (s) => {
  var l, c, f;
  const a = (l = s == null ? void 0 : s.geometry) == null ? void 0 : l.type, u = (c = s == null ? void 0 : s.properties) != null && c.isMask ? 0 : a === "LineString" || a === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (f = s == null ? void 0 : s.properties) != null && f.isMask ? 0.1 : 0,
    weight: u,
    dashArray: [u, u],
    lineCap: "butt"
  };
}) {
  let s, a, u = [], l, c, f = rr.geoJSON(void 0, {
    style: o,
    interactive: !1
  }).addTo(r);
  const h = () => {
    let d;
    const m = r.getZoom() > 10 ? [(d = r.getCenter().wrap()).lng, d.lat] : void 0;
    a !== m && (a = m, s == null || s({ type: "proximityChange", proximity: m }));
  }, g = (d) => {
    s == null || s({
      type: "mapClick",
      coordinates: [d.latlng.lng, d.latlng.lat]
    });
  };
  function p(d, m = !1) {
    const I = document.createElement("div");
    return new _c({ props: { displayIn: "leaflet" }, target: I }), new rr.Marker(d, {
      interactive: m,
      icon: new rr.DivIcon({
        html: I,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(d) {
      d ? (s = d, r.on("moveend", h), h(), r.on("click", g)) : (r.off("moveend", h), s == null || s({ type: "proximityChange", proximity: void 0 }), s = void 0, r.off("click", g));
    },
    flyTo(d, m) {
      r.flyTo([d[1], d[0]], m, { duration: 2, ...n });
    },
    fitBounds(d, m) {
      r.flyToBounds(
        [
          [d[1], d[0]],
          [d[3], d[2]]
        ],
        { padding: [m, m], duration: 2, ...i }
      );
    },
    indicateReverse(d) {
      r.getContainer().style.cursor = d ? "crosshair" : "";
    },
    setReverseMarker(d) {
      var I;
      if (!t)
        return;
      const m = d && [d[1], d[0]];
      c ? m ? c.setLatLng(m) : (c.remove(), c = void 0) : m && (c = (typeof t == "object" ? new rr.Marker(m, t) : p(m)).addTo(r), (I = c.getElement()) == null || I.classList.add("marker-reverse"));
    },
    setMarkers(d, m) {
      if (!t)
        return;
      function I(C) {
        f.clearLayers(), C && f.addData(C);
      }
      for (const C of u)
        C.remove();
      if (u.length = 0, I(), m) {
        let C = !1;
        if (m.geometry.type === "GeometryCollection") {
          const x = m.geometry.geometries.filter(
            (w) => w.type === "Polygon" || w.type === "MultiPolygon"
          );
          if (x.length > 0) {
            let w = x.pop();
            for (const M of x)
              w = vc(w, M);
            Ha({ ...m, geometry: w }, I), C = !0;
          } else {
            const w = m.geometry.geometries.filter(
              (M) => M.type === "LineString" || M.type === "MultiLineString"
            );
            w.length > 0 && (I({
              ...m,
              geometry: { type: "GeometryCollection", geometries: w }
            }), C = !0);
          }
        }
        if (!C) {
          if (m.geometry.type === "Polygon" || m.geometry.type === "MultiPolygon")
            Ha(m, I);
          else if (m.geometry.type === "LineString" || m.geometry.type === "MultiLineString") {
            I(m);
            return;
          }
        }
        const L = [m.center[1], m.center[0]];
        u.push(
          (typeof t == "object" ? new rr.Marker(L, t) : p(L)).addTo(r)
        );
      }
      if (e)
        for (const C of d ?? []) {
          if (C === m)
            continue;
          const L = [
            C.center[1],
            C.center[0]
          ], x = typeof e == "object" ? new rr.Marker(L, e) : p(L, !0);
          x.addTo(r).bindTooltip(C.place_name.replace(/,.*/, ""), {
            direction: "top"
          });
          const w = x.getElement();
          w && (w.addEventListener("click", (M) => {
            M.stopPropagation(), s == null || s({ type: "markerClick", id: C.id });
          }), w.addEventListener("mouseenter", () => {
            s == null || s({ type: "markerMouseEnter", id: C.id });
          }), w.addEventListener("mouseleave", () => {
            s == null || s({ type: "markerMouseLeave", id: C.id });
          }), w.classList.toggle("marker-fuzzy", !!C.matching_text)), u.push(x);
        }
    },
    setSelectedMarker(d) {
      var m, I;
      l && ((m = l.getElement()) == null || m.classList.toggle("marker-selected", !1)), l = d > -1 ? u[d] : void 0, (I = l == null ? void 0 : l.getElement()) == null || I.classList.toggle("marker-selected", !0);
    }
  };
}
var En, Wr;
class df extends rr.Control {
  constructor(e) {
    super();
    hs(this, En, void 0);
    hs(this, Wr, void 0);
    xo(this, Wr, e);
  }
  onAdd(e) {
    const n = document.createElement("div");
    n.className = "leaflet-ctrl-geocoder", rr.DomEvent.disableClickPropagation(n), rr.DomEvent.disableScrollPropagation(n);
    const {
      marker: i,
      showResultMarkers: o,
      flyTo: s,
      fullGeometryStyle: a,
      ...u
    } = zn(this, Wr), l = typeof s == "boolean" ? {} : s, c = pf(
      e,
      i,
      o,
      l,
      l,
      a
    );
    xo(this, En, new Xl({
      target: n,
      props: {
        mapController: c,
        flyTo: s === void 0 ? !0 : !!s,
        ...u
      }
    }));
    for (const f of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      zn(this, En).$on(
        f,
        (h) => e.fire(f.toLowerCase(), h.detail)
      );
    return n;
  }
  setOptions(e) {
    var u;
    xo(this, Wr, e);
    const {
      marker: n,
      showResultMarkers: i,
      flyTo: o,
      fullGeometryStyle: s,
      ...a
    } = zn(this, Wr);
    (u = zn(this, En)) == null || u.$set(a);
  }
  setQuery(e, n = !0) {
    var i;
    (i = zn(this, En)) == null || i.setQuery(e, n);
  }
  setReverseMode(e) {
    var n;
    (n = zn(this, En)) == null || n.$set({ reverseActive: e });
  }
  focus() {
    var e;
    (e = zn(this, En)) == null || e.focus();
  }
  blur() {
    var e;
    (e = zn(this, En)) == null || e.blur();
  }
  onRemove() {
    var e;
    (e = zn(this, En)) == null || e.$destroy();
  }
}
En = new WeakMap(), Wr = new WeakMap();
function vf(...r) {
  return new df(...r);
}
window.L && typeof window.L == "object" && typeof window.L.control == "function" && (window.L.control.maptilerGeocoding = vf);
export {
  df as GeocodingControl,
  pf as createLeafletMapController
};
//# sourceMappingURL=leaflet.js.map
