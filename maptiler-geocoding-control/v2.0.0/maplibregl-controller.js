var te = Object.defineProperty;
var ee = (i, t, e) => t in i ? te(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var rt = (i, t, e) => ee(i, typeof t != "symbol" ? t + "" : t, e);
function X(i, t, e = {}) {
  const n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = i, n;
}
function yt(i, t, e = {}) {
  for (const r of i) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let o = 0; o < r[r.length - 1].length; o++)
      if (r[r.length - 1][o] !== r[0][o])
        throw new Error("First and last Position are not equivalent.");
  }
  return X({
    type: "Polygon",
    coordinates: i
  }, t, e);
}
function V(i, t = {}) {
  const e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = i, e;
}
function jt(i, t, e = {}) {
  return X({
    type: "MultiPolygon",
    coordinates: i
  }, t, e);
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
function ne(i, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, r, o, f;
  return f = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this;
  }), f;
  function l(u) {
    return function(g) {
      return c([u, g]);
    };
  }
  function c(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (n = 1, r && (o = u[0] & 2 ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
      switch (r = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
        case 0:
        case 1:
          o = u;
          break;
        case 4:
          return e.label++, { value: u[1], done: !1 };
        case 5:
          e.label++, r = u[1], u = [0];
          continue;
        case 7:
          u = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            e = 0;
            continue;
          }
          if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
            e.label = u[1];
            break;
          }
          if (u[0] === 6 && e.label < o[1]) {
            e.label = o[1], o = u;
            break;
          }
          if (o && e.label < o[2]) {
            e.label = o[2], e.ops.push(u);
            break;
          }
          o[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      u = t.call(i, e);
    } catch (g) {
      u = [6, g], r = 0;
    } finally {
      n = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var G = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return i;
  }()
);
function ie(i, t) {
  return i > t ? 1 : i < t ? -1 : 0;
}
function B(i, t, e) {
  for (var n = new G(null, null), r = n, o = n; ; ) {
    var f = e(i, t.key);
    if (f < 0) {
      if (t.left === null)
        break;
      if (e(i, t.left.key) < 0) {
        var l = t.left;
        if (t.left = l.right, l.right = t, t = l, t.left === null)
          break;
      }
      o.left = t, o = t, t = t.left;
    } else if (f > 0) {
      if (t.right === null)
        break;
      if (e(i, t.right.key) > 0) {
        var l = t.right;
        if (t.right = l.left, l.left = t, t = l, t.right === null)
          break;
      }
      r.right = t, r = t, t = t.right;
    } else
      break;
  }
  return r.right = t.left, o.left = t.right, t.left = n.right, t.right = n.left, t;
}
function ot(i, t, e, n) {
  var r = new G(i, t);
  if (e === null)
    return r.left = r.right = null, r;
  e = B(i, e, n);
  var o = n(i, e.key);
  return o < 0 ? (r.left = e.left, r.right = e, e.left = null) : o >= 0 && (r.right = e.right, r.left = e, e.right = null), r;
}
function Et(i, t, e) {
  var n = null, r = null;
  if (t) {
    t = B(i, t, e);
    var o = e(t.key, i);
    o === 0 ? (n = t.left, r = t.right) : o < 0 ? (r = t.right, t.right = null, n = t) : (n = t.left, t.left = null, r = t);
  }
  return { left: n, right: r };
}
function re(i, t, e) {
  return t === null ? i : (i === null || (t = B(i.key, t, e), t.left = i), t);
}
function ut(i, t, e, n, r) {
  if (i) {
    n("" + t + (e ? "└── " : "├── ") + r(i) + `
`);
    var o = t + (e ? "    " : "│   ");
    i.left && ut(i.left, o, !1, n, r), i.right && ut(i.right, o, !0, n, r);
  }
}
var dt = (
  /** @class */
  function() {
    function i(t) {
      t === void 0 && (t = ie), this._root = null, this._size = 0, this._comparator = t;
    }
    return i.prototype.insert = function(t, e) {
      return this._size++, this._root = ot(t, e, this._root, this._comparator);
    }, i.prototype.add = function(t, e) {
      var n = new G(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, o = B(t, this._root, r), f = r(t, o.key);
      return f === 0 ? this._root = o : (f < 0 ? (n.left = o.left, n.right = o, o.left = null) : f > 0 && (n.right = o.right, n.left = o, o.right = null), this._size++, this._root = n), this._root;
    }, i.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, i.prototype._remove = function(t, e, n) {
      var r;
      if (e === null)
        return null;
      e = B(t, e, n);
      var o = n(t, e.key);
      return o === 0 ? (e.left === null ? r = e.right : (r = B(t, e.left, n), r.right = e.right), this._size--, r) : e;
    }, i.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = B(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, i.prototype.findStatic = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var r = n(t, e.key);
        if (r === 0)
          return e;
        r < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, i.prototype.find = function(t) {
      return this._root && (this._root = B(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, i.prototype.contains = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var r = n(t, e.key);
        if (r === 0)
          return !0;
        r < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, i.prototype.forEach = function(t, e) {
      for (var n = this._root, r = [], o = !1; !o; )
        n !== null ? (r.push(n), n = n.left) : r.length !== 0 ? (n = r.pop(), t.call(e, n), n = n.right) : o = !0;
      return this;
    }, i.prototype.range = function(t, e, n, r) {
      for (var o = [], f = this._comparator, l = this._root, c; o.length !== 0 || l; )
        if (l)
          o.push(l), l = l.left;
        else {
          if (l = o.pop(), c = f(l.key, e), c > 0)
            break;
          if (f(l.key, t) >= 0 && n.call(r, l))
            return this;
          l = l.right;
        }
      return this;
    }, i.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.key;
        return t.push(n);
      }), t;
    }, i.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.data;
        return t.push(n);
      }), t;
    }, i.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, i.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, i.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, i.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, i.prototype.at = function(t) {
      for (var e = this._root, n = !1, r = 0, o = []; !n; )
        if (e)
          o.push(e), e = e.left;
        else if (o.length > 0) {
          if (e = o.pop(), r === t)
            return e;
          r++, e = e.right;
        } else
          n = !0;
      return null;
    }, i.prototype.next = function(t) {
      var e = this._root, n = null;
      if (t.right) {
        for (n = t.right; n.left; )
          n = n.left;
        return n;
      }
      for (var r = this._comparator; e; ) {
        var o = r(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? (n = e, e = e.left) : e = e.right;
      }
      return n;
    }, i.prototype.prev = function(t) {
      var e = this._root, n = null;
      if (t.left !== null) {
        for (n = t.left; n.right; )
          n = n.right;
        return n;
      }
      for (var r = this._comparator; e; ) {
        var o = r(t.key, e.key);
        if (o === 0)
          break;
        o < 0 ? e = e.left : (n = e, e = e.right);
      }
      return n;
    }, i.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, i.prototype.toList = function() {
      return se(this._root);
    }, i.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var r = t.length, o = this._comparator;
      if (n && ht(t, e, 0, r - 1, o), this._root === null)
        this._root = ft(t, e, 0, r), this._size = r;
      else {
        var f = le(this.toList(), oe(t, e), o);
        r = this._size + r, this._root = ct({ head: f }, 0, r);
      }
      return this;
    }, i.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(i.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.toString = function(t) {
      t === void 0 && (t = function(n) {
        return String(n.key);
      });
      var e = [];
      return ut(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, i.prototype.update = function(t, e, n) {
      var r = this._comparator, o = Et(t, this._root, r), f = o.left, l = o.right;
      r(t, e) < 0 ? l = ot(e, n, l, r) : f = ot(e, n, f, r), this._root = re(f, l, r);
    }, i.prototype.split = function(t) {
      return Et(t, this._root, this._comparator);
    }, i.prototype[Symbol.iterator] = function() {
      var t, e, n;
      return ne(this, function(r) {
        switch (r.label) {
          case 0:
            t = this._root, e = [], n = !1, r.label = 1;
          case 1:
            return n ? [3, 6] : t === null ? [3, 2] : (e.push(t), t = t.left, [3, 5]);
          case 2:
            return e.length === 0 ? [3, 4] : (t = e.pop(), [4, t]);
          case 3:
            return r.sent(), t = t.right, [3, 5];
          case 4:
            n = !0, r.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, i;
  }()
);
function ft(i, t, e, n) {
  var r = n - e;
  if (r > 0) {
    var o = e + Math.floor(r / 2), f = i[o], l = t[o], c = new G(f, l);
    return c.left = ft(i, t, e, o), c.right = ft(i, t, o + 1, n), c;
  }
  return null;
}
function oe(i, t) {
  for (var e = new G(null, null), n = e, r = 0; r < i.length; r++)
    n = n.next = new G(i[r], t[r]);
  return n.next = null, e.next;
}
function se(i) {
  for (var t = i, e = [], n = !1, r = new G(null, null), o = r; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = o = o.next = e.pop(), t = t.right) : n = !0;
  return o.next = null, r.next;
}
function ct(i, t, e) {
  var n = e - t;
  if (n > 0) {
    var r = t + Math.floor(n / 2), o = ct(i, t, r), f = i.head;
    return f.left = o, i.head = i.head.next, f.right = ct(i, r + 1, e), f;
  }
  return null;
}
function le(i, t, e) {
  for (var n = new G(null, null), r = n, o = i, f = t; o !== null && f !== null; )
    e(o.key, f.key) < 0 ? (r.next = o, o = o.next) : (r.next = f, f = f.next), r = r.next;
  return o !== null ? r.next = o : f !== null && (r.next = f), n.next;
}
function ht(i, t, e, n, r) {
  if (!(e >= n)) {
    for (var o = i[e + n >> 1], f = e - 1, l = n + 1; ; ) {
      do
        f++;
      while (r(i[f], o) < 0);
      do
        l--;
      while (r(i[l], o) > 0);
      if (f >= l)
        break;
      var c = i[f];
      i[f] = i[l], i[l] = c, c = t[f], t[f] = t[l], t[l] = c;
    }
    ht(i, t, e, l, r), ht(i, t, l + 1, n, r);
  }
}
const O = 11102230246251565e-32, S = 134217729, ue = (3 + 8 * O) * O;
function st(i, t, e, n, r) {
  let o, f, l, c, u = t[0], g = n[0], s = 0, h = 0;
  g > u == g > -u ? (o = u, u = t[++s]) : (o = g, g = n[++h]);
  let a = 0;
  if (s < i && h < e)
    for (g > u == g > -u ? (f = u + o, l = o - (f - u), u = t[++s]) : (f = g + o, l = o - (f - g), g = n[++h]), o = f, l !== 0 && (r[a++] = l); s < i && h < e; )
      g > u == g > -u ? (f = o + u, c = f - o, l = o - (f - c) + (u - c), u = t[++s]) : (f = o + g, c = f - o, l = o - (f - c) + (g - c), g = n[++h]), o = f, l !== 0 && (r[a++] = l);
  for (; s < i; )
    f = o + u, c = f - o, l = o - (f - c) + (u - c), u = t[++s], o = f, l !== 0 && (r[a++] = l);
  for (; h < e; )
    f = o + g, c = f - o, l = o - (f - c) + (g - c), g = n[++h], o = f, l !== 0 && (r[a++] = l);
  return (o !== 0 || a === 0) && (r[a++] = o), a;
}
function fe(i, t) {
  let e = t[0];
  for (let n = 1; n < i; n++) e += t[n];
  return e;
}
function J(i) {
  return new Float64Array(i);
}
const ce = (3 + 16 * O) * O, he = (2 + 12 * O) * O, ae = (9 + 64 * O) * O * O, U = J(4), mt = J(8), wt = J(12), bt = J(16), P = J(4);
function ge(i, t, e, n, r, o, f) {
  let l, c, u, g, s, h, a, d, x, p, y, w, v, E, m, b, M, _;
  const R = i - r, I = e - r, C = t - o, k = n - o;
  E = R * k, h = S * R, a = h - (h - R), d = R - a, h = S * k, x = h - (h - k), p = k - x, m = d * p - (E - a * x - d * x - a * p), b = C * I, h = S * C, a = h - (h - C), d = C - a, h = S * I, x = h - (h - I), p = I - x, M = d * p - (b - a * x - d * x - a * p), y = m - M, s = m - y, U[0] = m - (y + s) + (s - M), w = E + y, s = w - E, v = E - (w - s) + (y - s), y = v - b, s = v - y, U[1] = v - (y + s) + (s - b), _ = w + y, s = _ - w, U[2] = w - (_ - s) + (y - s), U[3] = _;
  let A = fe(4, U), F = he * f;
  if (A >= F || -A >= F || (s = i - R, l = i - (R + s) + (s - r), s = e - I, u = e - (I + s) + (s - r), s = t - C, c = t - (C + s) + (s - o), s = n - k, g = n - (k + s) + (s - o), l === 0 && c === 0 && u === 0 && g === 0) || (F = ae * f + ue * Math.abs(A), A += R * g + k * l - (C * u + I * c), A >= F || -A >= F)) return A;
  E = l * k, h = S * l, a = h - (h - l), d = l - a, h = S * k, x = h - (h - k), p = k - x, m = d * p - (E - a * x - d * x - a * p), b = c * I, h = S * c, a = h - (h - c), d = c - a, h = S * I, x = h - (h - I), p = I - x, M = d * p - (b - a * x - d * x - a * p), y = m - M, s = m - y, P[0] = m - (y + s) + (s - M), w = E + y, s = w - E, v = E - (w - s) + (y - s), y = v - b, s = v - y, P[1] = v - (y + s) + (s - b), _ = w + y, s = _ - w, P[2] = w - (_ - s) + (y - s), P[3] = _;
  const Jt = st(4, U, 4, P, mt);
  E = R * g, h = S * R, a = h - (h - R), d = R - a, h = S * g, x = h - (h - g), p = g - x, m = d * p - (E - a * x - d * x - a * p), b = C * u, h = S * C, a = h - (h - C), d = C - a, h = S * u, x = h - (h - u), p = u - x, M = d * p - (b - a * x - d * x - a * p), y = m - M, s = m - y, P[0] = m - (y + s) + (s - M), w = E + y, s = w - E, v = E - (w - s) + (y - s), y = v - b, s = v - y, P[1] = v - (y + s) + (s - b), _ = w + y, s = _ - w, P[2] = w - (_ - s) + (y - s), P[3] = _;
  const Kt = st(Jt, mt, 4, P, wt);
  E = l * g, h = S * l, a = h - (h - l), d = l - a, h = S * g, x = h - (h - g), p = g - x, m = d * p - (E - a * x - d * x - a * p), b = c * u, h = S * c, a = h - (h - c), d = c - a, h = S * u, x = h - (h - u), p = u - x, M = d * p - (b - a * x - d * x - a * p), y = m - M, s = m - y, P[0] = m - (y + s) + (s - M), w = E + y, s = w - E, v = E - (w - s) + (y - s), y = v - b, s = v - y, P[1] = v - (y + s) + (s - b), _ = w + y, s = _ - w, P[2] = w - (_ - s) + (y - s), P[3] = _;
  const Ht = st(Kt, wt, 4, P, bt);
  return bt[Ht - 1];
}
function pe(i, t, e, n, r, o) {
  const f = (t - o) * (e - r), l = (i - r) * (n - o), c = f - l, u = Math.abs(f + l);
  return Math.abs(c) >= ce * u ? c : -ge(i, t, e, n, r, o, u);
}
const Q = (i, t) => i.ll.x <= t.x && t.x <= i.ur.x && i.ll.y <= t.y && t.y <= i.ur.y, at = (i, t) => {
  if (t.ur.x < i.ll.x || i.ur.x < t.ll.x || t.ur.y < i.ll.y || i.ur.y < t.ll.y) return null;
  const e = i.ll.x < t.ll.x ? t.ll.x : i.ll.x, n = i.ur.x < t.ur.x ? i.ur.x : t.ur.x, r = i.ll.y < t.ll.y ? t.ll.y : i.ll.y, o = i.ur.y < t.ur.y ? i.ur.y : t.ur.y;
  return {
    ll: {
      x: e,
      y: r
    },
    ur: {
      x: n,
      y: o
    }
  };
};
let T = Number.EPSILON;
T === void 0 && (T = Math.pow(2, -52));
const ye = T * T, _t = (i, t) => {
  if (-T < i && i < T && -T < t && t < T)
    return 0;
  const e = i - t;
  return e * e < ye * i * t ? 0 : i < t ? -1 : 1;
};
class de {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new St(), this.yRounder = new St();
  }
  round(t, e) {
    return {
      x: this.xRounder.round(t),
      y: this.yRounder.round(e)
    };
  }
}
class St {
  constructor() {
    this.tree = new dt(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(t) {
    const e = this.tree.add(t), n = this.tree.prev(e);
    if (n !== null && _t(e.key, n.key) === 0)
      return this.tree.remove(t), n.key;
    const r = this.tree.next(e);
    return r !== null && _t(e.key, r.key) === 0 ? (this.tree.remove(t), r.key) : t;
  }
}
const Z = new de(), tt = (i, t) => i.x * t.y - i.y * t.x, Yt = (i, t) => i.x * t.x + i.y * t.y, Pt = (i, t, e) => {
  const n = pe(i.x, i.y, t.x, t.y, e.x, e.y);
  return n > 0 ? -1 : n < 0 ? 1 : 0;
}, et = (i) => Math.sqrt(Yt(i, i)), xe = (i, t, e) => {
  const n = {
    x: t.x - i.x,
    y: t.y - i.y
  }, r = {
    x: e.x - i.x,
    y: e.y - i.y
  };
  return tt(r, n) / et(r) / et(n);
}, ve = (i, t, e) => {
  const n = {
    x: t.x - i.x,
    y: t.y - i.y
  }, r = {
    x: e.x - i.x,
    y: e.y - i.y
  };
  return Yt(r, n) / et(r) / et(n);
}, Mt = (i, t, e) => t.y === 0 ? null : {
  x: i.x + t.x / t.y * (e - i.y),
  y: e
}, Lt = (i, t, e) => t.x === 0 ? null : {
  x: e,
  y: i.y + t.y / t.x * (e - i.x)
}, Ee = (i, t, e, n) => {
  if (t.x === 0) return Lt(e, n, i.x);
  if (n.x === 0) return Lt(i, t, e.x);
  if (t.y === 0) return Mt(e, n, i.y);
  if (n.y === 0) return Mt(i, t, e.y);
  const r = tt(t, n);
  if (r == 0) return null;
  const o = {
    x: e.x - i.x,
    y: e.y - i.y
  }, f = tt(o, t) / r, l = tt(o, n) / r, c = i.x + l * t.x, u = e.x + f * n.x, g = i.y + l * t.y, s = e.y + f * n.y, h = (c + u) / 2, a = (g + s) / 2;
  return {
    x: h,
    y: a
  };
};
class L {
  // for ordering sweep events in the sweep event queue
  static compare(t, e) {
    const n = L.comparePoints(t.point, e.point);
    return n !== 0 ? n : (t.point !== e.point && t.link(e), t.isLeft !== e.isLeft ? t.isLeft ? 1 : -1 : z.compare(t.segment, e.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(t, e) {
    return t.x < e.x ? -1 : t.x > e.x ? 1 : t.y < e.y ? -1 : t.y > e.y ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(t, e) {
    t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  link(t) {
    if (t.point === this.point)
      throw new Error("Tried to link already linked events");
    const e = t.point.events;
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n];
      this.point.events.push(o), o.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const t = this.point.events.length;
    for (let e = 0; e < t; e++) {
      const n = this.point.events[e];
      if (n.segment.consumedBy === void 0)
        for (let r = e + 1; r < t; r++) {
          const o = this.point.events[r];
          o.consumedBy === void 0 && n.otherSE.point.events === o.otherSE.point.events && n.segment.consume(o.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const t = [];
    for (let e = 0, n = this.point.events.length; e < n; e++) {
      const r = this.point.events[e];
      r !== this && !r.segment.ringOut && r.segment.isInResult() && t.push(r);
    }
    return t;
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
  getLeftmostComparator(t) {
    const e = /* @__PURE__ */ new Map(), n = (r) => {
      const o = r.otherSE;
      e.set(r, {
        sine: xe(this.point, t.point, o.point),
        cosine: ve(this.point, t.point, o.point)
      });
    };
    return (r, o) => {
      e.has(r) || n(r), e.has(o) || n(o);
      const {
        sine: f,
        cosine: l
      } = e.get(r), {
        sine: c,
        cosine: u
      } = e.get(o);
      return f >= 0 && c >= 0 ? l < u ? 1 : l > u ? -1 : 0 : f < 0 && c < 0 ? l < u ? -1 : l > u ? 1 : 0 : c < f ? -1 : c > f ? 1 : 0;
    };
  }
}
let me = 0;
class z {
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
  static compare(t, e) {
    const n = t.leftSE.point.x, r = e.leftSE.point.x, o = t.rightSE.point.x, f = e.rightSE.point.x;
    if (f < n) return 1;
    if (o < r) return -1;
    const l = t.leftSE.point.y, c = e.leftSE.point.y, u = t.rightSE.point.y, g = e.rightSE.point.y;
    if (n < r) {
      if (c < l && c < u) return 1;
      if (c > l && c > u) return -1;
      const s = t.comparePoint(e.leftSE.point);
      if (s < 0) return 1;
      if (s > 0) return -1;
      const h = e.comparePoint(t.rightSE.point);
      return h !== 0 ? h : -1;
    }
    if (n > r) {
      if (l < c && l < g) return -1;
      if (l > c && l > g) return 1;
      const s = e.comparePoint(t.leftSE.point);
      if (s !== 0) return s;
      const h = t.comparePoint(e.rightSE.point);
      return h < 0 ? 1 : h > 0 ? -1 : 1;
    }
    if (l < c) return -1;
    if (l > c) return 1;
    if (o < f) {
      const s = e.comparePoint(t.rightSE.point);
      if (s !== 0) return s;
    }
    if (o > f) {
      const s = t.comparePoint(e.rightSE.point);
      if (s < 0) return 1;
      if (s > 0) return -1;
    }
    if (o !== f) {
      const s = u - l, h = o - n, a = g - c, d = f - r;
      if (s > h && a < d) return 1;
      if (s < h && a > d) return -1;
    }
    return o > f ? 1 : o < f || u < g ? -1 : u > g ? 1 : t.id < e.id ? -1 : t.id > e.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(t, e, n, r) {
    this.id = ++me, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = r;
  }
  static fromRing(t, e, n) {
    let r, o, f;
    const l = L.comparePoints(t, e);
    if (l < 0)
      r = t, o = e, f = 1;
    else if (l > 0)
      r = e, o = t, f = -1;
    else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);
    const c = new L(r, !0), u = new L(o, !1);
    return new z(c, u, [n], [f]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(t) {
    this.rightSE = t, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const t = this.leftSE.point.y, e = this.rightSE.point.y;
    return {
      ll: {
        x: this.leftSE.point.x,
        y: t < e ? t : e
      },
      ur: {
        x: this.rightSE.point.x,
        y: t > e ? t : e
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
  isAnEndpoint(t) {
    return t.x === this.leftSE.point.x && t.y === this.leftSE.point.y || t.x === this.rightSE.point.x && t.y === this.rightSE.point.y;
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
  comparePoint(t) {
    if (this.isAnEndpoint(t)) return 0;
    const e = this.leftSE.point, n = this.rightSE.point, r = this.vector();
    if (e.x === n.x)
      return t.x === e.x ? 0 : t.x < e.x ? 1 : -1;
    const o = (t.y - e.y) / r.y, f = e.x + o * r.x;
    if (t.x === f) return 0;
    const l = (t.x - e.x) / r.x, c = e.y + l * r.y;
    return t.y === c ? 0 : t.y < c ? -1 : 1;
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
  getIntersection(t) {
    const e = this.bbox(), n = t.bbox(), r = at(e, n);
    if (r === null) return null;
    const o = this.leftSE.point, f = this.rightSE.point, l = t.leftSE.point, c = t.rightSE.point, u = Q(e, l) && this.comparePoint(l) === 0, g = Q(n, o) && t.comparePoint(o) === 0, s = Q(e, c) && this.comparePoint(c) === 0, h = Q(n, f) && t.comparePoint(f) === 0;
    if (g && u)
      return h && !s ? f : !h && s ? c : null;
    if (g)
      return s && o.x === c.x && o.y === c.y ? null : o;
    if (u)
      return h && f.x === l.x && f.y === l.y ? null : l;
    if (h && s) return null;
    if (h) return f;
    if (s) return c;
    const a = Ee(o, this.vector(), l, t.vector());
    return a === null || !Q(r, a) ? null : Z.round(a.x, a.y);
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
  split(t) {
    const e = [], n = t.events !== void 0, r = new L(t, !0), o = new L(t, !1), f = this.rightSE;
    this.replaceRightSE(o), e.push(o), e.push(r);
    const l = new z(r, f, this.rings.slice(), this.windings.slice());
    return L.comparePoints(l.leftSE.point, l.rightSE.point) > 0 && l.swapEvents(), L.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), o.checkForConsuming()), e;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const t = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = t, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let e = 0, n = this.windings.length; e < n; e++)
      this.windings[e] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(t) {
    let e = this, n = t;
    for (; e.consumedBy; ) e = e.consumedBy;
    for (; n.consumedBy; ) n = n.consumedBy;
    const r = z.compare(e, n);
    if (r !== 0) {
      if (r > 0) {
        const o = e;
        e = n, n = o;
      }
      if (e.prev === n) {
        const o = e;
        e = n, n = o;
      }
      for (let o = 0, f = n.rings.length; o < f; o++) {
        const l = n.rings[o], c = n.windings[o], u = e.rings.indexOf(l);
        u === -1 ? (e.rings.push(l), e.windings.push(c)) : e.windings[u] += c;
      }
      n.rings = null, n.windings = null, n.consumedBy = e, n.leftSE.consumedBy = e.leftSE, n.rightSE.consumedBy = e.rightSE;
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
      const t = this.prev.consumedBy || this.prev;
      this._beforeState = t.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const t = this.beforeState();
    this._afterState = {
      rings: t.rings.slice(0),
      windings: t.windings.slice(0),
      multiPolys: []
    };
    const e = this._afterState.rings, n = this._afterState.windings, r = this._afterState.multiPolys;
    for (let l = 0, c = this.rings.length; l < c; l++) {
      const u = this.rings[l], g = this.windings[l], s = e.indexOf(u);
      s === -1 ? (e.push(u), n.push(g)) : n[s] += g;
    }
    const o = [], f = [];
    for (let l = 0, c = e.length; l < c; l++) {
      if (n[l] === 0) continue;
      const u = e[l], g = u.poly;
      if (f.indexOf(g) === -1)
        if (u.isExterior) o.push(g);
        else {
          f.indexOf(g) === -1 && f.push(g);
          const s = o.indexOf(u.poly);
          s !== -1 && o.splice(s, 1);
        }
    }
    for (let l = 0, c = o.length; l < c; l++) {
      const u = o[l].multiPoly;
      r.indexOf(u) === -1 && r.push(u);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const t = this.beforeState().multiPolys, e = this.afterState().multiPolys;
    switch ($.type) {
      case "union": {
        const n = t.length === 0, r = e.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        t.length < e.length ? (n = t.length, r = e.length) : (n = e.length, r = t.length), this._isInResult = r === $.numMultiPolys && n < r;
        break;
      }
      case "xor": {
        const n = Math.abs(t.length - e.length);
        this._isInResult = n % 2 === 1;
        break;
      }
      case "difference": {
        const n = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = n(t) !== n(e);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${$.type}`);
    }
    return this._isInResult;
  }
}
class Rt {
  constructor(t, e, n) {
    if (!Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const r = Z.round(t[0][0], t[0][1]);
    this.bbox = {
      ll: {
        x: r.x,
        y: r.y
      },
      ur: {
        x: r.x,
        y: r.y
      }
    };
    let o = r;
    for (let f = 1, l = t.length; f < l; f++) {
      if (typeof t[f][0] != "number" || typeof t[f][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let c = Z.round(t[f][0], t[f][1]);
      c.x === o.x && c.y === o.y || (this.segments.push(z.fromRing(o, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), o = c);
    }
    (r.x !== o.x || r.y !== o.y) && this.segments.push(z.fromRing(o, r, this));
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.segments.length; e < n; e++) {
      const r = this.segments[e];
      t.push(r.leftSE), t.push(r.rightSE);
    }
    return t;
  }
}
class we {
  constructor(t, e) {
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Rt(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let n = 1, r = t.length; n < r; n++) {
      const o = new Rt(t[n], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const t = this.exteriorRing.getSweepEvents();
    for (let e = 0, n = this.interiorRings.length; e < n; e++) {
      const r = this.interiorRings[e].getSweepEvents();
      for (let o = 0, f = r.length; o < f; o++)
        t.push(r[o]);
    }
    return t;
  }
}
class It {
  constructor(t, e) {
    if (!Array.isArray(t))
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
    for (let n = 0, r = t.length; n < r; n++) {
      const o = new we(t[n], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const r = this.polys[e].getSweepEvents();
      for (let o = 0, f = r.length; o < f; o++)
        t.push(r[o]);
    }
    return t;
  }
}
class nt {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(t) {
    const e = [];
    for (let n = 0, r = t.length; n < r; n++) {
      const o = t[n];
      if (!o.isInResult() || o.ringOut) continue;
      let f = null, l = o.leftSE, c = o.rightSE;
      const u = [l], g = l.point, s = [];
      for (; f = l, l = c, u.push(l), l.point !== g; )
        for (; ; ) {
          const h = l.getAvailableLinkedEvents();
          if (h.length === 0) {
            const x = u[0].point, p = u[u.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${x.x}, ${x.y}]. Last matching segment found ends at [${p.x}, ${p.y}].`);
          }
          if (h.length === 1) {
            c = h[0].otherSE;
            break;
          }
          let a = null;
          for (let x = 0, p = s.length; x < p; x++)
            if (s[x].point === l.point) {
              a = x;
              break;
            }
          if (a !== null) {
            const x = s.splice(a)[0], p = u.splice(x.index);
            p.unshift(p[0].otherSE), e.push(new nt(p.reverse()));
            continue;
          }
          s.push({
            index: u.length,
            point: l.point
          });
          const d = l.getLeftmostComparator(f);
          c = h.sort(d)[0].otherSE;
          break;
        }
      e.push(new nt(u));
    }
    return e;
  }
  constructor(t) {
    this.events = t;
    for (let e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let t = this.events[0].point;
    const e = [t];
    for (let u = 1, g = this.events.length - 1; u < g; u++) {
      const s = this.events[u].point, h = this.events[u + 1].point;
      Pt(s, t, h) !== 0 && (e.push(s), t = s);
    }
    if (e.length === 1) return null;
    const n = e[0], r = e[1];
    Pt(n, t, r) === 0 && e.shift(), e.push(e[0]);
    const o = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : e.length - 1, l = this.isExteriorRing() ? e.length : -1, c = [];
    for (let u = f; u != l; u += o) c.push([e[u].x, e[u].y]);
    return c;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const t = this.enclosingRing();
      this._isExteriorRing = t ? !t.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let t = this.events[0];
    for (let r = 1, o = this.events.length; r < o; r++) {
      const f = this.events[r];
      L.compare(t, f) > 0 && (t = f);
    }
    let e = t.segment.prevInResult(), n = e ? e.prevInResult() : null;
    for (; ; ) {
      if (!e) return null;
      if (!n) return e.ringOut;
      if (n.ringOut !== e.ringOut)
        return n.ringOut.enclosingRing() !== e.ringOut ? e.ringOut : e.ringOut.enclosingRing();
      e = n.prevInResult(), n = e ? e.prevInResult() : null;
    }
  }
}
class Ct {
  constructor(t) {
    this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  addInterior(t) {
    this.interiorRings.push(t), t.poly = this;
  }
  getGeom() {
    const t = [this.exteriorRing.getGeom()];
    if (t[0] === null) return null;
    for (let e = 0, n = this.interiorRings.length; e < n; e++) {
      const r = this.interiorRings[e].getGeom();
      r !== null && t.push(r);
    }
    return t;
  }
}
class be {
  constructor(t) {
    this.rings = t, this.polys = this._composePolys(t);
  }
  getGeom() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const r = this.polys[e].getGeom();
      r !== null && t.push(r);
    }
    return t;
  }
  _composePolys(t) {
    const e = [];
    for (let n = 0, r = t.length; n < r; n++) {
      const o = t[n];
      if (!o.poly)
        if (o.isExteriorRing()) e.push(new Ct(o));
        else {
          const f = o.enclosingRing();
          f.poly || e.push(new Ct(f)), f.poly.addInterior(o);
        }
    }
    return e;
  }
}
class _e {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z.compare;
    this.queue = t, this.tree = new dt(e), this.segments = [];
  }
  process(t) {
    const e = t.segment, n = [];
    if (t.consumedBy)
      return t.isLeft ? this.queue.remove(t.otherSE) : this.tree.remove(e), n;
    const r = t.isLeft ? this.tree.add(e) : this.tree.find(e);
    if (!r) throw new Error(`Unable to find segment #${e.id} [${e.leftSE.point.x}, ${e.leftSE.point.y}] -> [${e.rightSE.point.x}, ${e.rightSE.point.y}] in SweepLine tree.`);
    let o = r, f = r, l, c;
    for (; l === void 0; )
      o = this.tree.prev(o), o === null ? l = null : o.key.consumedBy === void 0 && (l = o.key);
    for (; c === void 0; )
      f = this.tree.next(f), f === null ? c = null : f.key.consumedBy === void 0 && (c = f.key);
    if (t.isLeft) {
      let u = null;
      if (l) {
        const s = l.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (u = s), !l.isAnEndpoint(s))) {
          const h = this._splitSafely(l, s);
          for (let a = 0, d = h.length; a < d; a++)
            n.push(h[a]);
        }
      }
      let g = null;
      if (c) {
        const s = c.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (g = s), !c.isAnEndpoint(s))) {
          const h = this._splitSafely(c, s);
          for (let a = 0, d = h.length; a < d; a++)
            n.push(h[a]);
        }
      }
      if (u !== null || g !== null) {
        let s = null;
        u === null ? s = g : g === null ? s = u : s = L.comparePoints(u, g) <= 0 ? u : g, this.queue.remove(e.rightSE), n.push(e.rightSE);
        const h = e.split(s);
        for (let a = 0, d = h.length; a < d; a++)
          n.push(h[a]);
      }
      n.length > 0 ? (this.tree.remove(e), n.push(t)) : (this.segments.push(e), e.prev = l);
    } else {
      if (l && c) {
        const u = l.getIntersection(c);
        if (u !== null) {
          if (!l.isAnEndpoint(u)) {
            const g = this._splitSafely(l, u);
            for (let s = 0, h = g.length; s < h; s++)
              n.push(g[s]);
          }
          if (!c.isAnEndpoint(u)) {
            const g = this._splitSafely(c, u);
            for (let s = 0, h = g.length; s < h; s++)
              n.push(g[s]);
          }
        }
      }
      this.tree.remove(e);
    }
    return n;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(t, e) {
    this.tree.remove(t);
    const n = t.rightSE;
    this.queue.remove(n);
    const r = t.split(e);
    return r.push(n), t.consumedBy === void 0 && this.tree.add(t), r;
  }
}
const kt = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Se = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Pe {
  run(t, e, n) {
    $.type = t, Z.reset();
    const r = [new It(e, !0)];
    for (let s = 0, h = n.length; s < h; s++)
      r.push(new It(n[s], !1));
    if ($.numMultiPolys = r.length, $.type === "difference") {
      const s = r[0];
      let h = 1;
      for (; h < r.length; )
        at(r[h].bbox, s.bbox) !== null ? h++ : r.splice(h, 1);
    }
    if ($.type === "intersection")
      for (let s = 0, h = r.length; s < h; s++) {
        const a = r[s];
        for (let d = s + 1, x = r.length; d < x; d++)
          if (at(a.bbox, r[d].bbox) === null) return [];
      }
    const o = new dt(L.compare);
    for (let s = 0, h = r.length; s < h; s++) {
      const a = r[s].getSweepEvents();
      for (let d = 0, x = a.length; d < x; d++)
        if (o.insert(a[d]), o.size > kt)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const f = new _e(o);
    let l = o.size, c = o.pop();
    for (; c; ) {
      const s = c.key;
      if (o.size === l) {
        const a = s.segment;
        throw new Error(`Unable to pop() ${s.isLeft ? "left" : "right"} SweepEvent [${s.point.x}, ${s.point.y}] from segment #${a.id} [${a.leftSE.point.x}, ${a.leftSE.point.y}] -> [${a.rightSE.point.x}, ${a.rightSE.point.y}] from queue.`);
      }
      if (o.size > kt)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (f.segments.length > Se)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const h = f.process(s);
      for (let a = 0, d = h.length; a < d; a++) {
        const x = h[a];
        x.consumedBy === void 0 && o.insert(x);
      }
      l = o.size, c = o.pop();
    }
    Z.reset();
    const u = nt.factory(f.segments);
    return new be(u).getGeom();
  }
}
const $ = new Pe(), Me = function(i) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("union", i, e);
}, Le = function(i) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("intersection", i, e);
}, Re = function(i) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("xor", i, e);
}, Ie = function(i) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("difference", i, e);
};
var Ft = {
  union: Me,
  intersection: Le,
  xor: Re,
  difference: Ie
};
function Qt(i, t, e) {
  if (i !== null)
    for (var n, r, o, f, l, c, u, g = 0, s = 0, h, a = i.type, d = a === "FeatureCollection", x = a === "Feature", p = d ? i.features.length : 1, y = 0; y < p; y++) {
      u = d ? i.features[y].geometry : x ? i.geometry : i, h = u ? u.type === "GeometryCollection" : !1, l = h ? u.geometries.length : 1;
      for (var w = 0; w < l; w++) {
        var v = 0, E = 0;
        if (f = h ? u.geometries[w] : u, f !== null) {
          c = f.coordinates;
          var m = f.type;
          switch (g = 0, m) {
            case null:
              break;
            case "Point":
              if (t(
                c,
                s,
                y,
                v,
                E
              ) === !1)
                return !1;
              s++, v++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < c.length; n++) {
                if (t(
                  c[n],
                  s,
                  y,
                  v,
                  E
                ) === !1)
                  return !1;
                s++, m === "MultiPoint" && v++;
              }
              m === "LineString" && v++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < c.length; n++) {
                for (r = 0; r < c[n].length - g; r++) {
                  if (t(
                    c[n][r],
                    s,
                    y,
                    v,
                    E
                  ) === !1)
                    return !1;
                  s++;
                }
                m === "MultiLineString" && v++, m === "Polygon" && E++;
              }
              m === "Polygon" && v++;
              break;
            case "MultiPolygon":
              for (n = 0; n < c.length; n++) {
                for (E = 0, r = 0; r < c[n].length; r++) {
                  for (o = 0; o < c[n][r].length - g; o++) {
                    if (t(
                      c[n][r][o],
                      s,
                      y,
                      v,
                      E
                    ) === !1)
                      return !1;
                    s++;
                  }
                  E++;
                }
                v++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < f.geometries.length; n++)
                if (Qt(f.geometries[n], t) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function xt(i, t) {
  var e, n, r, o, f, l, c, u, g, s, h = 0, a = i.type === "FeatureCollection", d = i.type === "Feature", x = a ? i.features.length : 1;
  for (e = 0; e < x; e++) {
    for (l = a ? i.features[e].geometry : d ? i.geometry : i, u = a ? i.features[e].properties : d ? i.properties : {}, g = a ? i.features[e].bbox : d ? i.bbox : void 0, s = a ? i.features[e].id : d ? i.id : void 0, c = l ? l.type === "GeometryCollection" : !1, f = c ? l.geometries.length : 1, r = 0; r < f; r++) {
      if (o = c ? l.geometries[r] : l, o === null) {
        if (t(
          null,
          h,
          u,
          g,
          s
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
            u,
            g,
            s
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < o.geometries.length; n++)
            if (t(
              o.geometries[n],
              h,
              u,
              g,
              s
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
function Ce(i, t) {
  xt(i, function(e, n, r, o, f) {
    var l = e === null ? null : e.type;
    switch (l) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(
          X(e, r, { bbox: o, id: f }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var c;
    switch (l) {
      case "MultiPoint":
        c = "Point";
        break;
      case "MultiLineString":
        c = "LineString";
        break;
      case "MultiPolygon":
        c = "Polygon";
        break;
    }
    for (var u = 0; u < e.coordinates.length; u++) {
      var g = e.coordinates[u], s = {
        type: c,
        coordinates: g
      };
      if (t(X(s, r), n, u) === !1)
        return !1;
    }
  });
}
function ke(i, t = {}) {
  const e = [];
  if (xt(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Ft.union(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? yt(n[0], t.properties) : jt(n, t.properties);
}
var Dt = ke;
function W() {
}
function Xt(i) {
  return i();
}
function $t() {
  return /* @__PURE__ */ Object.create(null);
}
function it(i) {
  i.forEach(Xt);
}
function Vt(i) {
  return typeof i == "function";
}
function $e(i, t) {
  return i != i ? t == t : i !== t || i && typeof i == "object" || typeof i == "function";
}
function Ae(i) {
  return Object.keys(i).length === 0;
}
function Oe(i, t) {
  i.appendChild(t);
}
function Ne(i, t, e) {
  i.insertBefore(t, e || null);
}
function Zt(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function At(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function N(i, t, e) {
  e == null ? i.removeAttribute(t) : i.getAttribute(t) !== e && i.setAttribute(t, e);
}
function Be(i) {
  return Array.from(i.childNodes);
}
function K(i, t, e) {
  i.classList.toggle(t, !!e);
}
let vt;
function D(i) {
  vt = i;
}
const j = [], Ot = [];
let Y = [];
const Nt = [], Te = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function ze() {
  gt || (gt = !0, Te.then(Wt));
}
function pt(i) {
  Y.push(i);
}
const lt = /* @__PURE__ */ new Set();
let q = 0;
function Wt() {
  if (q !== 0)
    return;
  const i = vt;
  do {
    try {
      for (; q < j.length; ) {
        const t = j[q];
        q++, D(t), Ge(t.$$);
      }
    } catch (t) {
      throw j.length = 0, q = 0, t;
    }
    for (D(null), j.length = 0, q = 0; Ot.length; ) Ot.pop()();
    for (let t = 0; t < Y.length; t += 1) {
      const e = Y[t];
      lt.has(e) || (lt.add(e), e());
    }
    Y.length = 0;
  } while (j.length);
  for (; Nt.length; )
    Nt.pop()();
  gt = !1, lt.clear(), D(i);
}
function Ge(i) {
  if (i.fragment !== null) {
    i.update(), it(i.before_update);
    const t = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, t), i.after_update.forEach(pt);
  }
}
function Ue(i) {
  const t = [], e = [];
  Y.forEach((n) => i.indexOf(n) === -1 ? t.push(n) : e.push(n)), e.forEach((n) => n()), Y = t;
}
const qe = /* @__PURE__ */ new Set();
function je(i, t) {
  i && i.i && (qe.delete(i), i.i(t));
}
function Ye(i, t, e) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(t, e), pt(() => {
    const o = i.$$.on_mount.map(Xt).filter(Vt);
    i.$$.on_destroy ? i.$$.on_destroy.push(...o) : it(o), i.$$.on_mount = [];
  }), r.forEach(pt);
}
function Fe(i, t) {
  const e = i.$$;
  e.fragment !== null && (Ue(e.after_update), it(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Qe(i, t) {
  i.$$.dirty[0] === -1 && (j.push(i), ze(), i.$$.dirty.fill(0)), i.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function De(i, t, e, n, r, o, f = null, l = [-1]) {
  const c = vt;
  D(i);
  const u = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: W,
    not_equal: r,
    bound: $t(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: $t(),
    dirty: l,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  f && f(u.root);
  let g = !1;
  if (u.ctx = e ? e(i, t.props || {}, (s, h, ...a) => {
    const d = a.length ? a[0] : h;
    return u.ctx && r(u.ctx[s], u.ctx[s] = d) && (!u.skip_bound && u.bound[s] && u.bound[s](d), g && Qe(i, s)), h;
  }) : [], u.update(), g = !0, it(u.before_update), u.fragment = n ? n(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const s = Be(t.target);
      u.fragment && u.fragment.l(s), s.forEach(Zt);
    } else
      u.fragment && u.fragment.c();
    t.intro && je(i.$$.fragment), Ye(i, t.target, t.anchor), Wt();
  }
  D(c);
}
class Xe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    rt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    rt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Fe(this, 1), this.$destroy = W;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!Vt(e))
      return W;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Ae(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ve = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ve);
function Ze(i) {
  let t, e, n;
  return {
    c() {
      t = At("svg"), e = At("path"), N(e, "stroke-width", "4"), N(e, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), N(e, "class", "svelte-gzo3ar"), N(t, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), N(t, "viewBox", "0 0 70 85"), N(t, "fill", "none"), N(t, "class", "svelte-gzo3ar"), K(
        t,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), K(
        t,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    m(r, o) {
      Ne(r, t, o), Oe(t, e);
    },
    p(r, [o]) {
      o & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && N(t, "width", n), o & /*displayIn*/
      1 && K(
        t,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), o & /*displayIn*/
      1 && K(
        t,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    i: W,
    o: W,
    d(r) {
      r && Zt(t);
    }
  };
}
function We(i, t, e) {
  let { displayIn: n } = t;
  return i.$$set = (r) => {
    "displayIn" in r && e(0, n = r.displayIn);
  }, [n];
}
class Je extends Xe {
  constructor(t) {
    super(), De(this, t, We, Ze, $e, { displayIn: 0 });
  }
}
function Ke(i, t = {}) {
  if (i.bbox != null && t.recompute !== !0)
    return i.bbox;
  const e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Qt(i, (n) => {
    e[0] > n[0] && (e[0] = n[0]), e[1] > n[1] && (e[1] = n[1]), e[2] < n[0] && (e[2] = n[0]), e[3] < n[1] && (e[3] = n[1]);
  }), e;
}
var Bt = Ke;
function He(i) {
  const t = [];
  if (xt(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least two features");
  const e = i.features[0].properties || {}, n = Ft.difference(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? yt(n[0], e) : jt(n, e);
}
var tn = He;
function en(i) {
  if (!i)
    throw new Error("geojson is required");
  var t = [];
  return Ce(i, function(e) {
    t.push(e);
  }), V(t);
}
var nn = en;
function Tt(i) {
  const t = [...i];
  return t[2] < t[0] && (Math.abs((t[0] + t[2] + 360) / 2) > Math.abs((t[0] - 360 + t[2]) / 2) ? t[0] -= 360 : t[2] += 360), t;
}
function zt(i, t) {
  const e = tn(
    V([
      yt([
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
  if (!e)
    return;
  e.properties = { isMask: !0 };
  const n = Tt(Bt(i)), r = (n[2] - n[0]) / 360 / 1e3, o = n[0] < -180, f = n[2] > 180, l = nn(i);
  if (l.features.length > 1 && (o || f))
    for (const c of l.features) {
      const u = Tt(Bt(c));
      if (f && u[0] < -180 + r)
        for (const g of c.geometry.coordinates)
          for (const s of g)
            s[0] += 360 - r;
      if (o && u[2] > 180 - r)
        for (const g of c.geometry.coordinates)
          for (const s of g)
            s[0] -= 360 - r;
    }
  t(
    V([
      l.features.length < 2 ? i : Dt(l) ?? i,
      e
    ])
  );
}
const Gt = {
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
}, H = "mtlr-gc-full-geom", Ut = "mtlr-gc-full-geom-fill", qt = "mtlr-gc-full-geom-line";
function on(i, t, e = !0, n = !0, r = {}, o = {}, f = Gt) {
  let l;
  const c = [];
  let u, g, s;
  function h() {
    if (!i.loaded) {
      i.once("load", h);
      return;
    }
    const p = f ? f === !0 ? Gt : f : void 0;
    if (!(p != null && p.fill) && !(p != null && p.line))
      return;
    const y = i.getSource(H);
    if (y)
      y.setData(s ?? V([]));
    else if (s)
      i.addSource(H, {
        type: "geojson",
        data: s
      });
    else
      return;
    !i.getLayer(Ut) && (p != null && p.fill) && i.addLayer({
      ...p == null ? void 0 : p.fill,
      id: Ut,
      type: "fill",
      source: H
    }), !i.getLayer(qt) && (p != null && p.line) && i.addLayer({
      ...p == null ? void 0 : p.line,
      id: qt,
      type: "line",
      source: H
    });
  }
  function a(p) {
    s = p, h();
  }
  i.on("styledata", () => {
    setTimeout(() => {
      s && h();
    });
  });
  const d = (p) => {
    l == null || l({
      type: "mapClick",
      coordinates: [p.lngLat.lng, p.lngLat.lat]
    });
  };
  function x(p = !1) {
    if (!t)
      throw new Error();
    const y = document.createElement("div");
    return p && y.classList.add("marker-interactive"), new Je({
      props: { displayIn: "maplibre" },
      target: y
    }), new t.Marker({ element: y, offset: [1, -13] });
  }
  return {
    setEventHandler(p) {
      p ? (l = p, i.on("click", d)) : (l = void 0, i.off("click", d));
    },
    flyTo(p, y) {
      i.flyTo({ center: p, ...y ? { zoom: y } : {}, ...r });
    },
    fitBounds(p, y, w) {
      i.fitBounds(
        [
          [p[0], p[1]],
          [p[2], p[3]]
        ],
        { padding: y, ...w ? { maxZoom: w } : {}, ...o }
      );
    },
    indicateReverse(p) {
      i.getCanvasContainer().style.cursor = p ? "crosshair" : "";
    },
    setReverseMarker(p) {
      !t || !e || (g ? p ? g.setLngLat(p) : (g.remove(), g = void 0) : p && (e instanceof Function ? g = e(i) ?? void 0 : (g = (typeof e == "object" ? new t.Marker(e) : x()).setLngLat(p).addTo(i), g.getElement().classList.add("marker-reverse"))));
    },
    setFeatures(p, y, w) {
      for (const v of c)
        v.remove();
      if (c.length = 0, a(void 0), !!t) {
        if (y) {
          let v = !1;
          if (y.geometry.type === "GeometryCollection") {
            const E = y.geometry.geometries.filter(
              (m) => m.type === "Polygon" || m.type === "MultiPolygon"
            );
            t: if (E.length > 0) {
              const m = Dt(
                V(E.map((b) => X(b)))
              );
              if (!m)
                break t;
              zt(
                {
                  ...y,
                  geometry: m.geometry
                },
                a
              ), v = !0;
            } else {
              const m = y.geometry.geometries.filter(
                (b) => b.type === "LineString" || b.type === "MultiLineString"
              );
              m.length > 0 && (a({
                ...y,
                geometry: { type: "GeometryCollection", geometries: m }
              }), v = !0);
            }
          }
          if (!v) {
            if (y.geometry.type === "Polygon" || y.geometry.type === "MultiPolygon")
              zt(y, a);
            else if (y.geometry.type === "LineString" || y.geometry.type === "MultiLineString") {
              a(y);
              return;
            }
          }
          if (!w && y.geometry.type !== "Point")
            return;
          if (e instanceof Function) {
            const E = e(i, y);
            E && c.push(E);
          } else e && c.push(
            typeof e == "object" ? new t.Marker(e) : x().setLngLat(y.center).addTo(i)
          );
        }
        if (n)
          for (const v of p ?? []) {
            if (v === y)
              continue;
            let E;
            if (n instanceof Function) {
              if (E = n(i, v), !E)
                continue;
            } else
              E = (typeof n == "object" ? new t.Marker(n) : x(!0)).setLngLat(v.center).setPopup(
                new t.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  v.place_type[0] === "reverse" ? v.place_name : v.place_name.replace(/,.*/, "")
                )
              ).addTo(i);
            const m = E.getElement();
            m.addEventListener("click", (b) => {
              b.stopPropagation(), l == null || l({ type: "markerClick", id: v.id });
            }), m.addEventListener("mouseenter", () => {
              l == null || l({ type: "markerMouseEnter", id: v.id }), E.togglePopup();
            }), m.addEventListener("mouseleave", () => {
              l == null || l({ type: "markerMouseLeave", id: v.id }), E.togglePopup();
            }), c.push(E);
          }
      }
    },
    setSelectedMarker(p) {
      u && u.getElement().classList.toggle("marker-selected", !1), u = p > -1 ? c[p] : void 0, u == null || u.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const p = i.getCenter();
      return [i.getZoom(), p.lng, p.lat];
    }
  };
}
export {
  on as createMapLibreGlMapController
};
//# sourceMappingURL=maplibregl-controller.js.map
